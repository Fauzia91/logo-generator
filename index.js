const inquirer = require("inquirer");
//importing the library to use
const fs = require('fs');
const {Square, Circle, Triangle} = require("./lib/shapes.js")


const questions = [{
    type: "input",
    name: "text",
    message: "Enter up to 3 characters:"
},{
    type: "input",
    name: "textColor",
    message: "Enter text color:"
},{
    type: "list",
    choices: ["triangle", "circle", "square"],
    name: "shape",
    message: "Choose a shape:"
},{
    type: "input",
    name: "shapeColor",
    message: "Enter shape color:"
}
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log("Generated logo.svg")
      });
}



// TODO: Create a function to initialize app
function init() {
    
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("these are my answers", answers)



    let output = "";

    if(answers.shape === "circle"){

        let c = new Circle(answers.textColor,
            answers.shapeColor,answers.text)
        output += c.render();
    } else if(answers.shape === "triangle"){

        let c = new Triangle(answers.textColor,
            answers.shapeColor,answers.text)
        output += c.render();

    } else { //square
        let c = new Square(answers.textColor,
            answers.shapeColor,answers.text)
        output += c.render();

    }





    // Use user feedback for... whatever!!
    writeToFile(`logo.svg`, output);
   


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




}

// Function call to initialize app
init();
