import {useCallback, useEffect, useState} from "react";

type TelegramGroupInfoResult =
    | {
    members: number;
    online: number;
}
    | undefined;

/**
 * this hook returns the number of members and online members of a telegram group
 * it also returns a function to refresh the data
 */
export const useTelegramGroupInfo = (
    telegramGroupUrl: string
): [TelegramGroupInfoResult, () => void] => {
    const [result, setResult] = useState<TelegramGroupInfoResult>();
    const fetchData = useCallback(() => {
        // if the url is not defined, we don't have to do anything
        if (!telegramGroupUrl) {
            return;
        }
        // we have to use a proxy in order to avoid CORS issues
        fetch("https://api.codetabs.com/v1/proxy/?quest=" + telegramGroupUrl)
            .then((response) => response.text())
            .then((html) => {
                // try to find the block that contains the members and online numbers
                // warning: this is a very fragile solution since the html structure can change at any time
                const parser = new DOMParser();
                const parsedDocument = parser.parseFromString(html, "text/html");
                const membersDivBlock =
                    parsedDocument.getElementsByClassName("tgme_page_extra");
                const membersHtml = membersDivBlock[0]?.innerHTML ?? "";
                if (membersHtml.length === 0) {
                    return;
                }
                const membersAndOnline = membersHtml.replace(/(members|online|\s+)/g, "").split(",");
                if (membersAndOnline.length !== 2) {
                    return;
                }
                const [members, online] = membersAndOnline.map(x => (parseInt(x,10)));
                if (isNaN(members) || isNaN(online)) {
                    return;
                }
                setResult({
                    members,
                    online,
                });
            })
            .catch((e) => {
                // fail silently in production
                if (process && process.env.NODE_ENV === "development") {
                    console.error(e);
                }
            });
    }, [telegramGroupUrl]);
    useEffect(() => {
        void fetchData();
    }, [fetchData]);
    return [result, fetchData];
};
