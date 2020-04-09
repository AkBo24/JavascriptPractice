/**
 * JS, by default is single-threaded, meaning it executes one instruction
 * after another
 * 
 * Asynchronous commands lets us start one task and have others run
 * at the same time.  The started command will finish at some point while
 * the program runs.
 * 
 * For instance, retreiving data from a database can be time consuming
 * and we can load the rest of the website while waiting for data
 */

 console.log(1);
 console.log(2);

 console.log(new Date());
 setTimeout(() => {
    console.log(new Date());
 }, 2000)

 console.log(3);
 console.log(4);

 /**
  * Open console on html page: the second date is printed after 3 and 4
  * and shows that there is a two second difference after the 3 and 4
  * instructions were run
  */

  