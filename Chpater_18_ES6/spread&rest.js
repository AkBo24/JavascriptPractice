/**
 * Rest Syntax:
 * 
 * For - creating functions with unkown # of parameters
 * 
 * syntax:
 *      functionName (...params) {
 *          //do something
 *      }
 * The parameters are sent as an array
 */

const printNums = (...params) => {
    console.log(params.toString());
};

const params = printNums(9, 9.9, 3.14, 5.1, 2.2);
