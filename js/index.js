var count = 0;
var totalCount = 0;
var countEl = getElement("#count-el");
var incrementBtn = getElement("#increment-btn");
var saveBtn = getElement("#save-btn");
var prevCountPara = getElement("#prev-count-p");
var totalCountPara = getElement("#total-count-p");
function getElement(selector) {
    var el = document.querySelector(selector);
    if (!el)
        throw new Error("element not found: ".concat(selector));
    return el;
}
function incrementCount() {
    count++;
    countEl.innerText = "".concat(count);
}
function save() {
    prevCountPara.innerText += " ".concat(count, " - ");
    totalCount += count;
    totalCountPara.innerText = "Total Count: ".concat(totalCount);
    count = 0;
}
incrementBtn.addEventListener("click", incrementCount);
saveBtn.addEventListener("click", save);
