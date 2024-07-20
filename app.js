const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw Error(`Try to enter valid name of the ${selector}.`);
  }
};

const decrease = getElement(".decrease");
const increase = getElement(".increase");
const reset = getElement(".reset");
const number = getElement(".number");

let count = 0;

decrease.addEventListener("click", () => {
  count--;
  number.textContent = count;
});
increase.addEventListener("click", () => {
  count++;
  number.textContent = count;
});
reset.addEventListener("click", () => {
  count = 0;
  number.textContent = count;
});
