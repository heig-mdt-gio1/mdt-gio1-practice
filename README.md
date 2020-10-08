# Mdt - GIO1 - Practice

For this practical hands-on, you are given a functionnal application that consists of a registration form, like the ones you could encounter on the web when registering on a web application.

When the user clicks on the "Register" button, the app check if the form data is valid against a set of predefined validation rules (one of them being asynchronous as its performed over an HTTP call).

If the data is not valid, a list of errors is displayed to the user, until they resolve those errors.

When the data is valid, it is then sent over HTTP to en API endpoint that returns data representing the registered user profile.

# Your task

This application's code is very far from optimal. It does not respect neither the coding principles nor the structural principles we've seen.

Thus, your task is to refactor this code, clean the logic, split it into modules, without breaking the application features.

# Installation

To start working on this practice:

1. Be sure to have [NodeJS] and [Git] installed on your system.
2. Install the `live-server` package globally on your system by executing this command in the terminal:
   ```bash
   $> npm install -g live-server
   ```
3. Clone this respository on your filesystem anywhere you want:
   ```bash
   $> cd /path/to/where/you/save/your/course/files
   $> git clone https://github.com/Tazaf/mdt-gio1-practice.git
   ```
4. Start a `live-server` session from the root of the cloned repository:
   ```bash
   $> cd mdt-gio1-practice
   $> live-server
   ```
5. Open your browser at [localhost:8080]. This page will automatically refresh each time you made a modification in any file on the cloned repository
6. Start coding!

# How to start

Here's some tip on how to approach this practice:

- Take some time to **read the code** and try and **understand** what it does
- Try to find how and where the **coding principles** we've seen could be applied
- Try to find where the logic is **unnecessarily repeated** and how you could remove this repetition
- Try to think about how you could **split the code**:
  - Which parts are responsible for the view (adding/removing parts of the page, updating DOM nodes properties, etc)?
  - Which parts are responsible for the business logic?
  - Which parts are responsible for the communication with the data (the API)?
- Don't try to **change everything** at the same time! Move **step by step**. Don't hesitate to **change** what you previously have done.
- Don't by afraid to drastically change the code if you think you've found a better way of doing something (there are betters ways)
- There is **no "One Right Solution"** for this practice. We will provide you with one, but even this could be discussed and critizes.
- **Ask questions** if you don't understand what the code does. You have the right to do so.

[nodejs]: https://nodejs.org/en/
[git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[localhost:8080]: http://localhost:8080
