//npm i inquirer
//npm i qr-image
import inquirer from "inquirer";
import qr from "qr-image";//var qr = require('qr-image'); if then change type to commonjs
import fs from "fs";
inquirer
  .prompt([{
        message: "Type in your URL: ",
        name: "URL"
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url= answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    
    /*
    fs.writeFile("URL.txt",url,(err)=>{
      if(err) throw err;
      console.log("file has been saved");
      });
      */
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });