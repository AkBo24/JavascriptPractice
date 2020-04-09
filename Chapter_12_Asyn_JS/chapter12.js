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

  /**
   * One type of data we can request is an HTTP request from an API
   * (usually as an endpoint URL    )
   * 
   * API used below: jsonplaceholder.typicode.com
   */

    /**
     * Requesting/Getting data from an API
     * 
     * In JS the XMLHttpRequest object can handle many types of dat
     *  (XML, JSON, Plaintext etc)
     * 
     * The object has 4 "states" that indicate what its doing
     *  0: client created but open() has not been called
     *  1: open() has been called
     *  2: sent() has been called adn status is available
     *  3: responseText field has partial data sent by the API
     *  4: operation is complete
     * 
     * To request data from an api the open() method allows the object 
     *  to inform what operation with 2 parameter
     *      1: the operation type (get, update etc)
     *      2: the api endpoint url
     * 
     * The sent() method sends the operation defined in open() to the api
     * 
     * To do event handeling, like printing the api data add an 
     *  event listener to the request object
     */

     