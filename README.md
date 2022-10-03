# password-generator-refactor

This repository has the HTML, CSS and JavaScript code for the JavaScript Challenge for Module 3. It is a password generator wherein the user will answer a few prompts to genrate a random secure password which will be displayed on the screen.

## Contents

The files have the following contents -

- index.html - Has the website HTML code and the IDs which are used in the `document.querySelector`
- style.css - Has the CSS code for the website which displays the generate password button and gives styling to the text box
- script.js - Contains the JavaScript code written in order to execute the functionality of this challenge

## Components of the JavaScript code

- There are four arrays that have been created to store all possible elements that can appear in the password. These are -
  - `var upperCaseArray`
  - `var lowerCaseArray`
  - `var numericCharsArray`
  - `var specialCharsArray`
- The function `generatePassword()`
  - Takes in the password length from the user
  - Checks for the criteria through prompts
  - Validates password criteria
  - Generates password using while loop and conditional statements
- The function `writePassword()`
  - Writes the password to the screen using value that was returned through the `generatePassword()` function
  - The event listener is added to the generate password button to make the button interactive

## How to get a copy of this repository

- Clone the git repository from this [folder](https://github.com/rashida53/password-generator-refactor)
- Open the local copy on VS code using the terminal
- Any changes can be made on this text editor

## Using terminal to upload on Github

- Use `git add .` to add files to the repository
- Use `git commit` to describe the changes made
- Use `git push origin main` to push up the changes to github

### The following image shows the web application's appearance and functionality:

![screenshot](https://github.com/rashida53/password-generator-refactor/blob/main/password-generator.png?raw=true)

## Deployment

This website has been deployed to this [URL](https://rashida53.github.io/password-generator-refactor) using Github pages.
