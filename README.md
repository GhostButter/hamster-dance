# hamster-dance

It's hamster time!

## Objective
Use **JavaScript Switch Statements** and **Keyboard Events** to detect when a user has pressed the up, down, left, and right arrows.

## Prerequisites
To complete this project, students should have the following:
* Basic understanding of HTML structure and attributes.
* Basic understanding of CSS properties.
* Basic understanding of JavaScript and DOM.

## Your Challenge

### Part I: Hello Hamster!
To complete this warmup, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML, CSS, JS file
* Folder to store images
3. Link all of your files correctly.
4. Create a ```div``` with an ```id``` of ```container```.
5. Inside of this ```div```, create the following:
* ```Img``` element with an ```id``` of ```hamster```.
* ```Div``` element with an ```id``` of ```text```. Input the default text here.

### Part II: Make 'em Dance!
To complete the second part of this warmup, fulfill the following requirements:
1. In your JS file, create variables to store the image and div element.
2. Using the ```onkeydown``` event on the ```document```, create a function that will take in ```event``` as a parameter and use a switch statement.
* The switch statement should take in ```event.keyCode``` as the parameter for the switch.
  * If the ```keyCode``` equals to the code of the up arrow, change the source of the image to the ```up.png``` image.
  * Change the ```innerHTML``` of the text div element to display new text when a different arrow key is pressed!
