# Event Notification Automation

This guide explains what `scripts/notify_event.py` does, when it runs, and what developers must check when publishing a new event.

## What the Script Does

`scripts/notify_event.py` is the entry point for the Telegram event notification job. It calls `notify_last_event()` from `scripts/utils/event.py`.

On each run, the script:

1. Reads `scripts/last_notified_event.dat` to find the last event that was announced.
2. Loads every valid `.mdx` file from `_events`.
3. Sorts events by the date encoded in the filename.
4. Selects the newest event.
5. Sends a Telegram notification only if that event is newer than the event stored in `last_notified_event.dat`.
6. Writes the notified event filename back to `scripts/last_notified_event.dat` after the Telegram API call succeeds.

The notification is sent as a Telegram photo message when the event has a valid `thumbnail` file. Otherwise, it is sent as a text message.

## When It Runs

The production notification is handled by the GitHub Actions workflow `.github/workflows/notify-last-event.yml`.

The workflow runs after the `CI/CD` workflow completes. It sends a notification only when:

- `CI/CD` completed successfully.
- The completed workflow ran on the `main` branch.
- `scripts/notify_event.py` finds an event newer than the filename stored in `scripts/last_notified_event.dat`.
- The Telegram credentials are available through GitHub Secrets.

If a notification is sent successfully, the workflow commits the updated `scripts/last_notified_event.dat` file back to `main` using the GitHub Actions bot.

## How the New Event Is Detected

The notifier uses the event filename to decide which event is newer.

Valid event filenames must start with an 8-digit date:

```text
YYYYMMDD.mdx
YYYYMMDD-event-slug.mdx
```

Examples:

```text
20260325.mdx
20260325-ai-workshop.mdx
```

Only the first 8 digits are used for notification ordering. The frontmatter `date` field is used in the Telegram message content, but it does not decide whether the event is newer.

## Developer Checklist for Publishing a New Event

Before opening or merging a pull request for a new event:

1. Create the event file in `_events`.
2. Make sure the filename starts with the event date in `YYYYMMDD` format.
3. Use a filename date that is newer than the event currently stored in `scripts/last_notified_event.dat` if the event should be announced.
4. Fill in the event frontmatter fields used by the Telegram message:
   - `title`
   - `description`
   - `date`
   - `duration`
   - `place`
   - `maps`
   - `signup`
   - `thumbnail`
   - `speakers`
   - `youtubeUrl`, when available
5. Store the event image under `public/assets/events`.
6. Point `thumbnail` to that image. The notifier resolves the image by filename, so the file must exist in `public/assets/events`.
7. Run the site locally and check that the event page renders correctly:

   ```bash
   npm run dev
   ```

8. Do not manually update `scripts/last_notified_event.dat` in a normal event pull request. The notification workflow updates it after the Telegram message is sent.
9. Merge the event into `main` only when it is ready to be publicly announced.

## Important Behavior to Know

- The workflow announces only the newest event found in `_events` during a run.
- If several newer events are merged at the same time, only the newest one is announced.
- If the event filename date is older than or equal to the date in `scripts/last_notified_event.dat`, no notification is sent.
- If `scripts/last_notified_event.dat` is missing or points to a non-existing event, the script does not send a notification.
- If the Telegram API call fails, `scripts/last_notified_event.dat` is not updated, so the event can be retried on a later run.
- The Telegram caption has a size limit. Long descriptions are shortened and include a link to the event page.

## Required Secrets

The GitHub Actions workflow expects these repository secrets:

```text
TELEGRAM_NOTIFY_EVENT_BOT_TOKEN
TELEGRAM_NOTIFY_EVENT_CHAT_ID
TELEGRAM_NOTIFY_EVENT_THREAD_ID
```

Do not commit real Telegram credentials to the repository.

## Local Manual Run

Run the script manually only when testing the notification code or intentionally resending an event notification.

From the repository root:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r scripts/requirements.txt
export TELEGRAM_NOTIFY_EVENT_BOT_TOKEN="..."
export TELEGRAM_NOTIFY_EVENT_CHAT_ID="..."
export TELEGRAM_NOTIFY_EVENT_THREAD_ID="..."
python scripts/notify_event.py
```

The local run uses the same `scripts/last_notified_event.dat` file. If the notification succeeds, the file will be updated in your working tree.
