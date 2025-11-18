let count = 0;
let totalCount = 0;
const countEl = document.querySelector("#count-el");
const incrementBtn = document.querySelector("#increment-btn");
const saveBtn = document.querySelector("#save-btn");
const prevCountSpan = document.querySelector("#prev-count-p");
const totalCountSpan = document.querySelector('#total-count-p')

function incrementCount() {
  count++;
  countEl.innerText = count;
}

function save() {
  prevCountSpan.innerText += ` ${count} - `;
  totalCount += count;
  totalCountSpan.innerText = `Total Count: ${totalCount}`;
  count = 0;
}

incrementBtn.addEventListener("click", incrementCount);
saveBtn.addEventListener("click", save);
