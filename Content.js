var outerTextValue;

function isQlikDivPresent() {
    return document.querySelector('.qv-object-content-container') !== null;
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

    if (isQlikDivPresent() && key === "c" && ctrl) {
        navigator.clipboard.writeText(outerTextValue);
    } else if (!isQlikDivPresent() && key === "c" && ctrl) {
        console.log('one-qlik-less tried to CTRL + C something but no valid qv-object was found.');
    }
}, false);
