window.addEventListener('message', (event) => {
    console.log('Event', event.data.message);
})

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("🚀 ~ file: content.js ~ line 7 ~ request", request);
        requestAccess();
    }
);

function requestAccess() {
    const ifr = document.createElement('iframe');
    ifr.setAttribute('allow', 'microphone;camera');
    ifr.style.display = 'none';
    ifr.src = chrome.runtime.getURL('iframe-access.html');
    document.body.appendChild(ifr);
}