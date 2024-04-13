function expandImage(img) {
    if (!img.classList.contains('expanded')) {
        img.classList.add('expanded');
        img.style.width = "100%";
        img.style.height = "100%";
    } else {
        img.classList.remove('expanded');
        img.style.width = "100px";
        img.style.height = "auto";
    }
}
