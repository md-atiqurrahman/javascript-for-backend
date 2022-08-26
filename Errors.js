// const errorHandler = require('./errorHandler.js');//default import
const {errorHandler,two} = require('./errorHandler.js');//named import
// import errorHandler from './errorHandler.js';//ES6 module import

two();

async function getData() {
    try {
        // undefined.find();
        const emailError =  new Error('Email already exists');//user defined error
        throw emailError;
    }
    catch (error) {
        errorHandler(error)
    }
}

getData();


console.log('Done!');