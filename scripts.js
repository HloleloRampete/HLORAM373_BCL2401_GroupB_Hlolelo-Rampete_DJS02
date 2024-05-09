const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (isNaN(dividend) || isNaN(divider)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Error: Non-numeric input provided");
  } else if (divider === 0) { // checiking if divider equal 0.
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by zero");
  } else if (dividend === '' || divider === '') { // checking if inputs are empty.
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  } else {
    result.innerText = Math.floor(dividend / divider); // Added Math.floor to round down the result to the nearest whole number.
  }

});

