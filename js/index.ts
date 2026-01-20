let count = 0;
let totalCount = 0;
const countEl = getElement<HTMLHeadElement>("#count-el");
const incrementBtn = getElement<HTMLButtonElement>("#increment-btn");
const saveBtn = getElement<HTMLButtonElement>("#save-btn");
const prevCountPara = getElement<HTMLParagraphElement>("#prev-count-p");
const totalCountPara = getElement<HTMLParagraphElement>("#total-count-p");

function getElement<T extends Element>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Element not found: ${selector}`)
  return el;
}

function incrementCount() {
  count++;
  countEl.innerText = `${count}`;
}

function save() {
  prevCountPara.innerText += ` ${count} - `;
  totalCount += count;
  totalCountPara.innerText = `Total Count: ${totalCount}`;
  count = 0;
}

incrementBtn.addEventListener("click", incrementCount);
saveBtn.addEventListener("click", save);
