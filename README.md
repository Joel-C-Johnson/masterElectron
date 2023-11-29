## Section 1: Overview
Explain about the course


## Section 2: Developing with Electron
### Install & Run

install electron in a project
- npm i -D electron@latest

to list top level installed modules in package.json
- npm list --depth=0

### App Structure

electron operates 2 different type of proecess
1. Main application process - nodejs process running in terminal
(like backend)

2. Renderer Process - the main process creates instances of chromium browser where front-end application runs
(like front-end with multiple chromium windows)

Install nodemon for automatic reload the main application process 
-   `npm i nodemon --save`
- include this in package.json inside script 
   ` "watch": "nodemon --exec electron ." `
- run using `npm run watch`

### Using Native Node Modules
You can install native modules in electron:
example: install 'colors' in the project
- `npm i colors`
In main.js file use like 
    `const colors = require('colors') `
    `console.log(colors.rainbow('Hello World'));`

if it crashes becoz of any version issue. Use below command to install globally
- `npm install -g electron-rebuild`
- electron-rebuild package-name : `electron-rebuild bcrypt`
- then `npm start`

### Debugging
1. `mainWindow.webContents.openDevTools()` : add this in main.js file inside 'createWindow()' function
2. chromeDev tool debugger :
- In terminal run this command : `electron --inspect=5858`
### Resetting the Project Code
* reset script in package.json
- add `"reset": "git reset --hard"`
- then `npm run reset`
### Quiz

* 2 process: Electron runs as a single Node.js process called the "Main" process. This Main Process is then responsible for creating one, or more, of the second type of process called a "Renderer" process.

* Renderer Process: A Renderer process is an instance of a Chromium Browser, the open-source Web Browser Project by Google.

* new BrowserWindow: Electron's BrowserWindow class is used to spawn new Renderer processes. The name of this class reflecting the fact that a Renderer process is nothing more than a single Chromium Browser Window.

* Why do native Node modules need to be rebuilt/recompiled for use with an Electron app ?
Each version of Electron is compiled for a specific (latest stable) version of Node.js, therefore in order to use a similarly compiled native Node module like Bcrypt with Electron, that module must be compiled using the exact same version of Node.js as used by Electron.