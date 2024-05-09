# DJS02 Project Brief: Whole Number Divider

#### Project Overview

The existing codebase for the Whole Number Divider meets certain user stories but falls short on others. Your task is to modify and extend the code to address all specified user stories, ensuring a robust, user-friendly application.

![alt text](image.png)

# Division Form Challenge
This project is a simple web page that allows users to input two numbers and calculates their division. The project was created to practice error handling, validation, and logic in JavaScript.

### How it works
The project consists of an HTML file and a JavaScript file. The HTML file contains a form with two input fields and a submit button. The JavaScript file listens for a submit event on the form, prevents the default form submission behavior, and performs the following steps:

1. Creates a new FormData object from the form.
2. Extracts the dividend and divider values from the FormData object.
3. Checks if the inputs are numbers and if the divider is zero.
4. If the inputs are not numbers or if the divider is zero, it displays an error message and logs an error in the console.
5. If both inputs are empty, it displays an error message.
6. If the inputs are numbers and the divider is not zero, it calculates the division and displays the result on the page.

### Making it robust
To make the project robust, I added error handling and validation to the JavaScript code. Here are the steps I took:

1. I used the isNaN() function to check if the inputs are numbers. If the inputs are not numbers, it displays an error message and logs an error in the console.
2. I checked if the divider is zero. If the divider is zero, it displays an error message and logs an error in the console.
3. I checked if both inputs are empty. If both inputs are empty, it displays an error message.
4. I used the Math.floor() function to round down the result to the nearest whole number.

By adding these checks and error messages, I ensured that the project can handle invalid inputs and display helpful error messages to the user. This makes the project more robust and user-friendly.




