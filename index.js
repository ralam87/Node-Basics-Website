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

  var searchTerms = searchValue.value.split(' ')

  searchTerms.forEach((searchItem) => {
    data.forEach((item) => {
      item.tags.forEach((tag) => {
        if (searchItem.toLowerCase() === tag.toLowerCase()) {

          let mainResultDiv = document.createElement('div')
          mainResultDiv.setAttribute('class', 'main-result')

          let resultTitle = document.createElement('h3')
          resultTitle.innerText = item.name

          let resultDesc = document.createElement('p')
          resultDesc.innerText = item.description

          mainResultDiv.appendChild(resultTitle)
          mainResultDiv.appendChild(resultDesc)

          let resultAlsoSee;
          if (item.alsoSee) {
            resultAlsoSee = document.createElement('span')
            resultAlsoSee.setAttribute('class', 'also-see')
            resultAlsoSee.innerText = `Also look at: ${item.alsoSee}`
            mainResultDiv.appendChild(resultAlsoSee)
          }

          displayInfoDiv.appendChild(mainResultDiv)

          return;
        }
      })
    })
  })
}

const data = [
  {"name": "Global",
  "tags": ["global", "window"],
  "description" : "Global is one of the main objects of NodeJS similar to what the window object is in the browser",
  "alsoSee" : [" process"]},

  {"name": "Process",
  "tags": ["process", "document"],
  "description": "Process is one of the main objects of NodeJS similar to what the document object is in the browser",
  "alsoSee" : [" global"]},

  {"name": "Require",
  "tags": ["require", "module"],
  "description": "Require is a function that allows us to split our javascript into modules ",
  "alsoSee" : [" module"]},

  {"name": "FS",
  "tags": ["fs", "module", "file", "system"],
  "description": "fs is one of inbuilt modules in NodeJS, it allows us to access the file system on the local computer",
  "alsoSee" : [" fs.appendFile"," module"]},

  {"name": "fs.appendFile",
  "tags": ["append", "module", "file", "system"],
  "description": "Using this function from the fs module, you can create simple files, or amend existing ones. The first argument (string) is the name of the file you want to append, the second (string) is the data you want to add to that. the third is a callback function you can add",
  "alsoSee" : [" fs"," module"]},

  {"name": "OS",
  "tags": ["os", "module", "operating", "system"],
  "description": "os is is one of inbuilt modules in NodeJS, it allows us to access the operating system information on the local computer",
  "alsoSee" : [" os.userInfo"," module"]},

  {"name": "os.userInfo",
  "tags": ["user", "module", "operating", "system", "info"],
  "description": "By using this function from the os module you can access certain properties about the user of the local system, such as their username It doesn't require any arguments and will return an object with properties",
  "alsoSee" : [" os"," module"]}
]
