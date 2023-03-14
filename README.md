# LEGO Set Tracking Application

## A tool designed to make tracking of LEGO sets and some notes easier

### Description:

This is a SPA that allows someone to keep track of multiple owners of LEGO sets as well as a bunch of different types of LEGO sets.

### Project Info:

This project uses a React.js Front-End as well as a Ruby Sinatra Active-Record Back-End API which can be found [HERE](https://github.com/Kalunodragon/Lego-Tracker-Sinatra-Backend).

##
### Setup:

#### Front-End:
First you will need to fork and clone this project down into your environment. Once it has been cloned you can move down into this new directory and use `npm start` to launch the browser view of the project. If it doesn't launch a browser window navigate to your `localhost:3000` within the browser to load the application. Don't forget to use `npm install` before the `npm start`.

#### API
For the Back-End you will need to for and clone the other repo [HERE](https://github.com/Kalunodragon/Lego-Tracker-Sinatra-Backend). Once you have it cloned down into your environment run the command `bundle install` then once everthing is finished there run `rake db:migrate` then `rake server`.

YAY the project has be opened succefully!

#### Notes:
If you want to use the seed data that is loaded use `rake db:seed` which will seed the database with some information. A few sets that I personally own as well as a few users. This can be skipped if you want an empty database.

##

### How to use this App:

This app will load with a home page that gives a bit of information on how to fully use the app. The main way to use this is to navigate to the LEGO set tabe and add a LEGO set then navigate to the Owner tab and add an owner and assign them the set with any notes that need to go along with it.

### Credits:

This is the Phase 3 project for Andrew Onulak, Student at Flatiron School for Software Engineering.
