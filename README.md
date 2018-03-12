-- Simple Pomodoro Timer Implementation --

This app is a sample of a functioning "Pomodoro" Timer, including a multi-phase countdown timer and a simple task list.

New items can be added to the task list by typing in a line of description and pressing Enter, and items can be crossed off (or uncrossed) by clicking on them.

The countdown timer will countdown three intervals of 25 minutes, with 5 minute breaks in between, followed by a 25 minute break.

To build, install Node.js capable of dealing with at least ES6, as well as webpack. From the root of the project, run *npm install*. Then run *npm run build* to build the SPA. Finally, copy the bundle.js from the *dist* folder o the server/content folder, and serve up the files in server/content (a simple Node.js server is included for this purpose; you can CD into the server directory and just run *node index.js*).
