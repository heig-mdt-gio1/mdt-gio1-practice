# Mdt - GIO1 - Practice

For this practical hands-on, you are given a functionnal application that consists of a registration form, like the ones you could encounter on the web when registering on a web application.

When the user clicks on the "Register" button, the app checks if the form data is valid against a set of predefined validation rules (one of them being asynchronous, as it needs to perform an HTTP request).

If the data is not valid, a list of errors is displayed to the user, until they resolve those errors.

When the data is valid, it is then sent over HTTP to an API endpoint that returns data representing the registered user profile.

# Your task

This application's frontend code, located in `public`, is very far from optimal. It does not respect the coding principles nor the structural principles we've seen.

Thus, your task is to refactor this code, clean the logic, split it into modules, without breaking the application features.

# Installation

To start working on this practice:

1. Be sure to have [NodeJS] and [Git] installed on your system.
2. Clone this respository on your filesystem anywhere you want:
   ```bash
   $ cd /path/to/where/you/save/your/course/files
   $ git clone https://github.com/heig-mdt-gio1/mdt-gio1-practice.git
   ```
3. Install the dependencies:
   ```bash
   $ cd mdt-gio1-practice
   $ npm install
   ```
4. Start the server:
   ```bash
   $ npm run watch
   ```
5. Open your browser at [localhost:3333]. This page will automatically refresh each time you modify any file on the cloned repository
6. Start coding!

# How to start

Here are some tips on how to approach this practice:

- You only need to work on the `public` folder. Anything outside handles the backend and you don't need to touch it or look at it.
- Take some time to **read the code** and try to **understand** what it does.
- Try to find how and where the **coding principles** we've seen could be applied.
- Try to find where the logic is **unnecessarily repeated** and how you could remove this repetition.
- Try to think about how you could **split the code**:
  - Which parts are responsible for the view (adding/removing parts of the page, updating DOM nodes properties, etc)?
  - Which parts are responsible for the business logic?
  - Which parts are responsible for the communication with the data (the API)?
- Don't try to **change everything** at the same time! Move **step by step**, allowing yourself to **change** what you previously have done yourself. In other words, fix one problem at a time.
- Don't be afraid to drastically change the code if you think you've found a better way of doing something (there are better ways).
- There is **no "One Right Solution"** for this practice. We will provide you with one, but even that could be discussed and criticized.
- **Ask questions** if you don't understand what the code does. You are absolutely allowed to.

[nodejs]: https://nodejs.org/en/
[git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[localhost:3333]: http://localhost:3333
