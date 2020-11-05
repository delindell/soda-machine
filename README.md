# Eduity Soda Machine

## Description

This project is a code challenge for Eduity to test my technical knowledge of computer programming and coding.
I was tasked with building a soda dispenser program that would allow users to input quarters and pick the soda of their choosing,
while lowering the quantity of sodas in the machine as they are sold. This project uses the Vue. J's framework, which was totally unfamiliar
to me. I am quite proud of what I was able to accomplish in a short amount of time with this new technology and I really enjoyed working with it.

## Features

The user must input 3 quarters into the machine in order to be able to choose a soda. If not enough quarters are imported they will receive a message stating more quarters are needed. Inversely, if too many quarters are inserted they will receive their selected soda (as long as it is not sold out) and they can choose to either eject the remaining quarters or add more to make another purchase. In addition, if the user decides they would no longer like to make a purchase they can press and eject button and get their quarters back. If a soda is sold out, the user will be politely told to make another selection, as that soda is not currently available. 

## How To Run:
1. If you do not have npm http-server installed, follow the instructions [HERE](https://www.npmjs.com/package/http-server)
1. Clone down this repo to a directory on your local computer
1. `cd` into the repo and run `npm install` in your terminal to install all dependencies
1. Create a new Firebase Project [CLICK HERE](console.firebase.com)
1. In the `src/helpers` directory of the project, create an `apiKeys.json` file. Reference the `apiKeysExample.json` file located in the same directory, and enter the 
Firebase keys that were created when you made the project. Make sure this file is structured correctly (pay close attention to the example provided).
1. Go back to the Firebase project you made and navigate to the data tab, under the Realtime Database. Here click on the three dots in the upper right hand corner and load
the premade data into the database located at `src/db/sodas.json`
1. In your terminal, type `npm start` and your browser should automatically open to `localhost:8080` and you are free to drink all the sodas until you can no longer sleep

## Testing Exercises

1. Press the `ADD QUARTER` button and see the number of quarters automatically being updated on the screen, then press the `EJECT QUARTER (S)` button to see the quarters in the machine go back to zero.
1. Add three quarters to the machine and press 'Root Beer'. This should return a message letting you know it is sold out, however, notice your quarters will still be there in the machine.
1. Try choosing a soda with zero, one or two quarters and notice what happens. Notice what happens when you press 'Root Beer' when you do this.
1. Try adding more than 3 quarters and choosing a soda. Notice you will receive the soda and have quarters remaining, which you can either choose to eject or add more quarters and get another soda.
1. At the bottom there is a `login` button that will allow the user to be authenticated and log into the application for the future possibilty of giveaways.

## Technologies Used:

* HTML5
* CSS3
* JavaScript
* Vue.js
* Firebase
..* Realtime Database for data storage
..* Authentication via Google
* Bootstrap 4
* Axios

