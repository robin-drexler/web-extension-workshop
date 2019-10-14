import { browser } from "webextension-polyfill-ts";

export async function sendMessageToActiveTab(message: any) {
  const [tab] = await browser.tabs.query({
    currentWindow: true,
    active: true
  });

  return browser.tabs.sendMessage(tab.id, message);
}
