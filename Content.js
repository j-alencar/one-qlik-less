var outerTextValue;

function isQlikCDNRequestSuccessful() {
    var resources = window.performance.getEntriesByType("resource");

    //Finding .js files from QlikCloud CDN
    var qlikCDNResources = resources.filter(function(resource) {
        return resource.name.includes("qlikcloud.com") && resource.initiatorType === "script";
    });

    if (qlikCDNResources.length > 0) {
        return qlikCDNResources.some(function(resource) {
            return resource.duration > 0;
        });
    } else {
        return false;
    }
}

document.addEventListener('focus', handleFocusChange, true);

function handleFocusChange() {
    var focusedElement = document.querySelector(':focus');
    if (focusedElement) {
        outerTextValue = focusedElement.outerText;
        return outerTextValue;
    }
}

document.addEventListener("keydown", function(e) {
    e = e || window.event;

    var key = e.key;
    var ctrl = e.ctrlKey;

    if (isQlikCDNRequestSuccessful() && key === "c" && ctrl) {
        navigator.clipboard.writeText(outerTextValue);
    } else if (!isQlikCDNRequestSuccessful() && key === "c" && ctrl) {
        console.log('one-qlik-less tried to copy something but the window is not in a Qlik environment')
    }
}, false);
