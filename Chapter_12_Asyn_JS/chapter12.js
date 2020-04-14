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
 }, 1000)

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
   const request = new XMLHttpRequest();
   request.open('GET','https://jsonplaceholder.typicode.com/todos');
   request.send();

   //Static method to get the data from a request object
   const getData = (data, callBack) => {
      data.addEventListener('readystatechange', () => {
         if(data.readyState === 4 && data.status === 200)
            callBack(undefined, data.responseText);
         else if(data.readyState === 4 && data.status === 404)
            callBack(404, undefined);
      });      
   };

   getData(request, (err, data) => {
      if(err === undefined)
         console.log(); //data
      else
         console.log(`Error thrown: ${err}`);
   });

   /**
    * XMLHttpRequest objects also have a status field that reports the 
    *   "status" of the object (error 404 for instance)
    * If the connection is successful, the status is in the 200's range
   */

   const poorRequest = new XMLHttpRequest();

   getData(poorRequest, (err, data) => {
      if(err === undefined)
         console.log(data);
      else
         console.log(`Error thrown: ${err}`);
   });

   poorRequest.open('GET', 'https://jsonplaceholder.typicode.com/todo');
   poorRequest.send();


   /**
    * Promises: Promises are a sort of try-catch statement when getting data
    * from an api
    * 
    * Prmomise is a native JS class that takes a call back method with two parameters:
    *    1.a resolve method
    *    2.a reject  method
    * 
    * The variable that calls the promise then utilizes a then method if the data
    * is resolved and a catch method if the data is rejected (there was some error getting the data)
    */

   const promisesExample = () => {
      return new Promise((resolve, reject) => {
         resolve("Data has succeeded");
         // reject("Data has failed");
      });
   };

   promisesExample().then(data => {
      console.log(data);
   }).catch(data => {
      console.log(data);
   });

   /**
    * Chaining promises
    * 
    * The method returning the promise can return itself (sort of like
    * recursion).
    * 
    * Attached to that would be another .then() method call that would
    * take care of the second todocall
    * 
    * For each of the todo calls we only need one .catch() method
    */

   const promisesChain = (data) => {

      return new Promise( (resolve, reject) => {
         data.addEventListener('readystatechange', () => {
            if(data.readyState === 4 && data.status === 200)
               resolve(undefined, data.responseText);
            else if(data.readyState === 4 && data.status === 404)
               reject(404, undefined);
         });
      });
   };

   const cheesecake = new XMLHttpRequest();
   const guitar     = new XMLHttpRequest();
   const picture    = new XMLHttpRequest();

   cheesecake.open('GET', 'cheesecake.json');
   guitar.open('GET', 'guitar.json');
   picture.open('GET', 'picture.json');

   cheesecake.send();
   guitar.send();
   picture.send();

   promisesChain(cheesecake).then( () => {
      console.log("Cheesecake Promise resolved");
      return promisesChain(guitar);
   }).then(() => {
      console.log("Guitar promise resolved");
      return promisesChain(picture);
   }).then(() => {
      console.log("Picture promise resolved");
   }).catch( () => {
      console.log("error");
   });