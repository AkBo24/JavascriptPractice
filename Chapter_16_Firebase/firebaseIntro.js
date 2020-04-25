const list = document.querySelector('ul')


/**
 * In the html document database was initialized to the firestore
 * database
 * 
 * To get collection from the firestore database has a .collection
 * variable that takes a collection name
 * 
 * That returns an object with a .get() function that returns a promise
 * with a docs field which is an array
 * 
 * Each of those elements then have a data funciton which finally retrieves
 * the data from an individual collection
 * 
 * Ex:
 *  database.collection(*collection name*).get()
 *      .then(data => data.doc[*reference to document position*]).data())
 * 
 *  To access each of the elements data is an array so use the .foreach()
 */

// console.log(database.collection('alchemy'))

database.collection("alchemy").get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => addrecipe(doc.data()))
        //addrecipe(doc.data())
    })
    .catch( err => console.log(err));

const addrecipe = (doc) => {
    // console.log(doc.Result) -> prints the result of each subcollection
    const result = doc.Result;
    const time   = doc.createdAt.toDate();
    console.log(doc)
    list.innerHTML += `
        <li>
            <div>Result: ${result}</div>
            <div>Created at: ${time}</div>
        </li>
    `;
};