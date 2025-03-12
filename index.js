import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      message:"Enter the URL: ",
      name: 'url',
    }
  ])
  .then((answers) => {
    // console.log(answers.url);
    const URL = answers.url;
    var qr_img = qr.image(URL);
    qr_img.pipe(fs.createWriteStream('QR_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  
