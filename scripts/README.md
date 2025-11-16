# Python Automation Scripts

Helper scripts that live in this folder handle Telegram notifications and other maintenance jobs. Follow the steps below to run them locally.

## 1. Prepare the Tooling

- **Node/Next.js**: setup is described in the root `README.md`. These scripts are independent but live in the same repo.
- **Recommended on VS Code**: install the _Python Environments_ extension so the editor auto-detects the virtual environment you create.

## 2. Create the Virtual Environment

```bash
cd /path/to/latina-in-tech.github.io
python3 -m venv .venv
source .venv/bin/activate  # Windows: .\.venv\Scripts\activate
pip install -r scripts/requirements.txt
```

## 3. Configure Environment Variables

1. Copy the template and fill in real values:
   ```bash
   cp scripts/.env.example scripts/.env
   ```
2. Populate `BOT_TOKEN`, `CHAT_ID`, and `THREAD_ID` with your Telegram bot credentials. The scripts rely on `python-dotenv`, so running `python scripts/notify_event.py` will automatically load `scripts/.env`.
3. **Production**: these variables are injected from GitHub Secrets during CI/CD runs, so never commit real credentials to the repository.

## 4. Run a Script

From the repo root (with the virtual environment activated):

```bash
python scripts/notify_event.py
```

If you need to override variables temporarily, run via `python -m dotenv -f scripts/.env run <command>`.
