var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.03);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});