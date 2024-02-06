// SOURCE: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-specific-index-in-javascript
/**
 * Replace the character at index with replacement.
 * @param {number} index
 * @param {string} replacement
 * @returns
 */
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
};

/**
 * Fix the quotes in a quote string.
 * @param {string} string
 */
function fixQuoteString(string) {
    return string.replaceAt(0, '"').replaceAt(string.length - 1, '"');
}

/**
 * Quote management function.
 */
function hookQuotes() {
    for (const element of document.body.getElementsByTagName('span')) {
        if (element.classList.contains('quotation')) {
            element.dataset.original = element.innerHTML;
            element.innerHTML = fixQuoteString(element.dataset.original);
            element.addEventListener('click', function () {
                if (element.innerHTML !== fixQuoteString(element.dataset.original)) {
                    element.innerHTML = element.dataset.original;
                } else {
                    element.innerHTML = element.dataset.translated;
                }
                element.innerHTML = fixQuoteString(element.innerHTML);
            });
        }
    }
}

window.addEventListener('load', hookQuotes);
