let searchButton = document.querySelector('.searchButton')
let searchValue = document.querySelector('.main-search__text')
let displayInfoDiv = document.querySelector('#infoDisplay')

searchButton.addEventListener('click', search)
searchValue.addEventListener('keyup', (e)=>{
    if (e.keyCode == 13) {
      search()
    }
  })

function search() {
  while (displayInfoDiv.hasChildNodes()) {
    displayInfoDiv.removeChild(displayInfoDiv.lastChild);
  }

let searchTerms =  searchValue.value.split(' ')
let found = []

  searchTerms.forEach((searchItem) => {
    data.forEach((item) => {
      item.tags.forEach((tag) => {
        if (searchItem.toLowerCase() === tag.toLowerCase()) {

          for (i = 0; i<found.length; i++){
            if (found[i] === item.name) {
              return;
            }
          }

          let mainResultDiv = document.createElement('div')
          mainResultDiv.setAttribute('class', 'main-result')

          let resultTitle = document.createElement('h3')
          resultTitle.innerText = item.name
          found.push(item.name)

          let resultDesc = document.createElement('p')
          resultDesc.innerText = item.description

          mainResultDiv.appendChild(resultTitle)
          mainResultDiv.appendChild(resultDesc)

          let exampleDiv;
          if (item.example) {
            exampleDiv = document.createElement('div')
            exampleDiv.setAttribute('class', 'example-code')
            exampleDiv.innerText = item.example
            mainResultDiv.appendChild(exampleDiv)
          }

          let resultAlsoSee;
          let alsoSeeEl;
          if (item.alsoSee) {
            resultAlsoSee = document.createElement('span')
            resultAlsoSee.setAttribute('class', 'also-see')
            resultAlsoSee.innerText = ' Also look at: '
            mainResultDiv.appendChild(resultAlsoSee)

              item.alsoSee.forEach((alsoSeeItem)=>{
                alsoSeeEl = document.createElement('span')
                alsoSeeEl.innerHTML = '<a href="#">' + alsoSeeItem + '</a> '
                alsoSeeEl.addEventListener('click', ()=>{
                  searchValue.value = alsoSeeItem
                  search()
                })
                resultAlsoSee.appendChild(alsoSeeEl)
            })
          }

          displayInfoDiv.appendChild(mainResultDiv)
          return;
        }
      })
    })
  })
}

const data = [
  {"name" : "Object",
  "tags" : ["object", "global", "window"],
  "description" : "An Object is made commonly of { }, each property is seperated by a comma",
  "example" : `var myObjectName = {
    property1_KEY: "property1_VALUE",
    property2_KEY: "property2_VALUE"
  }`,
  "alsoSee" : [" JSON", " "]},

  {"name" : "Global",
  "tags" : ["global", "window"],
  "description" : "Global is one of the main objects of NodeJS similar to what the window object is in the browser",
  "alsoSee" : [" process"]},

  {"name" : "Process",
  "tags" : ["process", "document"],
  "description": "Process is one of the main objects of NodeJS similar to what the document object is in the browser",
  "alsoSee" : [" global", " argsv"]},

  {"name" : "argsv",
  "tags" : ["argsv", "process", "object", "arguments"],
  "description": "argsv is a property on the process object that provides us access to any arguments that may have been passed into the program",
  "example" : "process.argsv",
  "alsoSee" : [" process", " arguments"]},

  {"name" : "Module",
  "tags" : ["module", "document"],
  "description" : "A module is a function that has been seperated off from your script. It helps keep your script easier to read and easily reusable. There are three ways to use modules in Node: the inbuilt modules, your own (using module.exports) or using npm",
  "example" : "module.exports.yourFunctionName = yourFunctionName",
  "alsoSee" : [" require", " fs", " os", " npm"]},

  {"name" : "Require",
  "tags" : ["require", "module"],
  "description" : "Require is a function that allows us to split our javascript into modules, we use it in a script where we want to import a module so we can use it within that script. You save the function call as a variable and then you can use that variable name as access to that module and it's properties",
  "example" : `const exampleName = require('./pathToYourModule.js')

              exampleName.foo() //does whatever foo does  `,
  "alsoSee" : [" module"]},

  {"name" : "NPM",
  "tags" : ["node", "module", "package", "manager", "npm"],
  "description" : "NPM (originally for node package manager) allows the use of third party modules online. It is operated through the command line. You should create a log of what modules you use by first initalising a package.json file. So if anyone else wants to run your app, they can install the same modules you used",
  "example" : `npm install //installs all modules listed in the package.json file

  npm init //this creates a package.json file that keeps a record of your node modules you have used in your project

  npm install >packageName here< //just installs package

  npm install >packageName here< -g //g = global which means your package can be used everywhere, not just on current project environment

  npm install >anotherPackageNameHere< --save //installs package and remembers to install it when your project is installed

  npm install >yetAnotherPackageNameHere< --save-dev //same as above but only when your project is run in a developer environment`,
  "alsoSee" : [" require"," module", " nodemon"]},

  {"name" : "JSON",
  "tags" : ["json", "object", "notation"],
  "description" : "JS Object Notation is a data format for javascript, an alternative to XML, useful for transferring data between locations. One method commonly used is to turn your object into one long string, transfer it and then turn it back into the object it was originally",
  "example" : `var test = JSON.stringify(myObject) //test will now be your object in string form

  var test2 = JSON.parse(test) //test 2 will now be back in object form`,
  "alsoSee" : [" object"]},

  {"name" : "Nodemon",
  "tags" : ["npm", "module", "nodemon"],
  "description" : "Nodemon is a helpful command line utility module installed through npm that watches for any changes on a file and restarts the server when a change is detected, this saves the user having to run the same node command again to start their app",
  "example" : "nodemon yourAppFile.js",
  "alsoSee" : [" npm", " module"]},

  {"name" : "Yargs",
  "tags" : ["npm", "module", "yargs", "process", "arguments"],
  "description" : "Yargs is another command line utility module that helps parse any arguments you pass into useful object notation. You could then use JSON.stringify to move this information around and then use JSON.parse to turn it back into an usable object",
  "alsoSee" : [" npm", " module", " argv", " process", " JSON"]},

  {"name" : "FS",
  "tags" : ["fs", "module", "file", "system"],
  "description" : "fs is one of inbuilt modules in NodeJS, it allows us to access the file system on the local computer",
  "alsoSee" : [" fs.appendFile"," module"]},

  {"name" : "fs.appendFile",
  "tags" : ["fs.appendFile", "module", "file", "append, ", "system"],
  "description" : "Using this function from the fs module, you can create simple files, or amend existing ones. The first argument (string) is the name of the file you want to append, the second (string) is the data you want to add to that. the third is a callback function you can add",
  "example" : "fs.appendFile('yourChosenFileName.txt', 'Words and Strings Data Here', 'yourCallBackFunction')",
  "alsoSee" : [" fs"," module"]},

  {"name" : "OS",
  "tags" : ["os", "module", "operating", "system"],
  "description" : "os is is one of inbuilt modules in NodeJS, it allows us to access the operating system information on the local computer",
  "alsoSee" : [" os.userInfo"," module"]},

  {"name" : "os.userInfo",
  "tags" : ["os.userInfo", "user", "module", "operating", "system", "info"],
  "description" : "By using this function from the os module you can access certain properties about the user of the local system, such as their username It doesn't require any arguments and will return an object with properties such as username",
  "example" : `const user = os.userInfo()

              console.log(user.username) //prints username of local computer`,
  "alsoSee" : [" os"," module"]}
]
