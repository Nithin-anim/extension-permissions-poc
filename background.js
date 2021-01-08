
chrome.runtime.onMessage.addListener(async function (data, sender, sendResposne) {
    console.log("🚀 ~ file: background.js ~ line 12 ~ chrome.runtime.onMessage.addListener ~ data", data)
    sendResposne({ message: 'SUCCESS' });
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("🚀 ~ file: background.js ~ line 4 ~ tabs", tabs);
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: "REQUEST_CAM_ACCESS" });
    });
    return true;
})