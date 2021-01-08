
const getAccessButton = document.getElementById('get-access-btn');
console.log("🚀 ~ file: popup.js ~ line 2 ~ button", getAccessButton);
getAccessButton.addEventListener('click', function () {
    requestAccess();
})

const getDevicesButton = document.getElementById('get-devices-btn');
console.log("🚀 ~ file: popup.js ~ line 9 ~ getDevicesButton", getDevicesButton);
getDevicesButton.addEventListener('click', function () {
    getDevices();
})


function getDevices() {
    console.log('Inside get devices');
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        console.log("🚀 ~ file: popup.js ~ line 16 ~ navigator.mediaDevices.enumerateDevices ~ devices", devices);
    })
        .catch(function (error) {
            console.log("🚀 ~ file: popup.js ~ line 19 ~ getDevices ~ error", error)
        })
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        const video = document.getElementById('player');
        video.srcObject = stream;
    })
        .catch(function (error) {
            console.log("🚀 ~ file: popup.js ~ line 28 ~ getDevices ~ error", error);
        })
}

function requestAccess() {
    window.postMessage({ message: 'request_access' }, '*');
    chrome.runtime.sendMessage({ message: 'REQUEST_ACCESS' }, (resposne) => {
        console.log("Resposne", resposne);
    })
}

