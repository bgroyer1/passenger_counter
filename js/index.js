let count = 0;
const countEl = document.querySelector('#count-el')
const incrementBtn = document.querySelector('#increment-btn')

function incrementCount() {
  count++
  countEl.innerText = count
}

incrementBtn.addEventListener('click', incrementCount )

