function errorHandler(error){
    const {name,message,stack} = error;
    console.log(message)
    // console.log(stack)

    // logger.error({
    //     name,
    //     message,
    //     stack,
    //     router
    // });//we need to use logger package here 

    // console.log('Internal server error');
};

function two(){
    console.log('this is dui number')
}

//There are many ways to  exports a function

// 1.default exports:

// module.exports = errorHandler;



//2.named exports.There are different types of named exports:

// module.exports.errorHandler = function errorHandler(error){
//     const {name,message,stack} = error;
//     console.log(message)
//     // console.log(stack)

//     // logger.error({
//     //     name,
//     //     message,
//     //     stack,
//     //     router
//     // });//we need to use logger package here 

//     // console.log('Internal server error');
// };

// module.exports.two = function two(){
//     console.log('this is dui number')
// }

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;     

// module.exports = {
//     errorHandler: errorHandler,
//     two: two,
// }

module.exports ={
    errorHandler,
    two,
}

// console.log(module)

// export default errorHandler;//ES6 module export and we need to edit our package.json file with Property("type": "module")