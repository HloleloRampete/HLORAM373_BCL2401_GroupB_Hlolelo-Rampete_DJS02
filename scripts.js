const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (dividend === '' || divider === '') { // checking if inputs are empty.
  result.innerText = "Division not performed. Both values are required in inputs. Please Try Again";
} else {
  result.innerText = Math.floor(dividend / divider); // Added Math.floor to round down the result to the nearest whole number.
}
});