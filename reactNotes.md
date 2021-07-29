In the terminal, (in the directory you wanna be in) run npx create-react-app react-fundamentals. Then, cd to "react-fundamentals" and open project in VSCode. You will see the following:

    -> react-fundamentals
        -> node_modules
        -> public
        -> src
        -> .gitignore
        -> package-lock.json
        -> package.json
        -> README.md

Terms:
    /package.json - critical in all JS projects. contains info about project like author, version, scripts, and version of package.
    /node_modules - folder that houses packages specified in your package.json file when you run npm install. usually, you don't want to modify node_modules files.
    .gitignore - list to ignore by github. usually includes node_modules.
    /public - this houses the things that get displayed when page is deployed.
    /src - houses all JS and CSS files that you create
        -> index.js - file that is funneled through by the components by grabbing div with an ID of root from index.html file, but we don't typically touch it.
        -> App.js - the main file of our React application that we'll start developing in.
        -> App.css - the main CSS file for our React application.


it will typically already say
    import React from 'react';
    import './App.css';


