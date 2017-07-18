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
  {"name" : "Global",
  "tags" : ["global", "window"],
  "description" : "Global is one of the main objects of NodeJS similar to what the window object is in the browser",
  "alsoSee" : [" process"]},

  {"name" : "Process",
  "tags" : ["process", "document"],
  "description": "Process is one of the main objects of NodeJS similar to what the document object is in the browser",
  "alsoSee" : [" global"]},

  {"name" : "Module",
  "tags" : ["module", "document"],
  "description" : "A module is a function that has been seperated off from your script. It helps keep your script easier to read and easily reusable",
  "example" : "module.exports.yourFunctionName = yourFunctionName",
  "alsoSee" : [" require", " fs", " os"]},

  {"name" : "Require",
  "tags" : ["require", "module"],
  "description" : "Require is a function that allows us to split our javascript into modules, we use it in a script where we want to import a module so we can use it within that script. You save the function call as a variable and then you can use that variable name as access to that module and it's properties",
  "example" : `const exampleName = require('./pathToYourModule.js')

              exampleName.foo() //does whatever foo does  `,
  "alsoSee" : [" module"]},

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
