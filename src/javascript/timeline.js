function hookQuotes() {
    for (const element of document.body.getElementsByTagName('span')) {
        if (element.classList.contains('quotation')) {
            element.dataset.original = element.innerHTML;
            element.innerHTML = element.innerHTML.replaceAll("'", '"');
            element.addEventListener('click', function () {
                if (element.innerHTML !== element.dataset.original.replaceAll("'", '"')) {
                    element.innerHTML = element.dataset.original;
                } else {
                    element.innerHTML = element.dataset.translated;
                }
                element.innerHTML = element.innerHTML.replaceAll("'", '"');
            });
        }
    }
}

window.addEventListener('load', hookQuotes);
