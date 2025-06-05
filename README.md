# Fetch and Display User Data Using JavaScript Fetch API

Live Demo [Click here to view](https://mahendrapabbathi.github.io/Elevate-Labs---Task7/)

## Objective

Build a simple web application that fetches and displays user data from a public API using JavaScript's Fetch API.

## Tech Stack

- HTML
- CSS
- JavaScript (ES6)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)

## Features

- Fetches user information such as **name**, **email**, and **address**
- Dynamically displays data in a clean layout
- Handles errors with a try-catch block
- "Reload" button to re-fetch the data
- Basic responsive styling with CSS

## How It Works

1. On page load or button click, the script fetches data from the API.
2. The JSON response is parsed and displayed on the webpage.
3. Errors (e.g., no internet) are caught and displayed to the user.



## Key Concepts Practiced

- Asynchronous JavaScript (async/await)
- Fetch API and Promises
- Error Handling
- JSON Parsing
- DOM Manipulation

## Example API Response (truncated)

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    }
  },
  ...
]
