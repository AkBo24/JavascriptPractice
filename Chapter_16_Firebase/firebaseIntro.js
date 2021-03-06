const list  = document.querySelector('ul');
const input = document.querySelector("form");
const unbut = document.querySelector("button");

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

// database.collection("alchemy").get()
//     .then(snapshot => {
//         snapshot.docs.forEach(doc => addrecipe(doc.data(), doc.id))
//         //addrecipe(doc.data())
//     })
//     .catch( err => console.log(err));


/**
 * The above code only calls the database once
 * When a user interacts with the page and makes change it is documented
 * in a .docChanges() which procudes and array with all the changes
 * 
 * The .onSnapshot() method returns when a new snapshot is created when
 * the database occurs
 */

 const unsub = database.collection("alchemy").onSnapshot(snapshot => {
    //snapshot updates whenever the database updates
    snapshot.docChanges().forEach(change => {
        const data = change.doc;
        if(change.type === "added")
            addrecipe(data.data(), data.id);
        else if(change.type === "removed")
            deleteRecipy(data.id);
    });
 });

const addrecipe = (doc, id) => {
    // console.log(doc.Result) -> prints the result of each subcollection
    const result = doc.Result;
    const time   = doc.createdAt.toDate();
    // console.log(doc)
    list.innerHTML += `
        <li data-id="${id}">
            <div>Result: ${result}</div>
            <div>Created at: ${time}</div>
            <button class = "btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
};

const deleteRecipy = (id) => {

    const recipes = document.querySelectorAll('li')

    recipes.forEach(recipe => {
        if(recipe.getAttribute("data-id") === id)
            recipe.remove();
    });

    // database.collection("alchemy").doc(id).delete()
    //     .then(() => console.log("Sucessfully deleted"))
    //     .catch(err => console.log(err))
};

/**
 * To add to the database the collections api has a .add() function
 * which takes a JS object formatted to the collection and creates a new
 * document as needed
 */

input.addEventListener("submit", e => {
    e.preventDefault();

    const recipe = {
        Result: input.recipe.value,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date)
    }

    database.collection('alchemy').add(recipe)
        .then(() => console.log("added successfully"))
        .catch(err => console.log(err));
});

// /**
//  * To delete from the database:
//  *      .delete(*id*)
//  */

list.addEventListener('click', e => {
    //console.log(e.target.tagName)
    if(e.target.tagName == "BUTTON") {
        const id = e.target.parentElement.getAttribute("data-id");
        // console.log(id);
        database.collection("alchemy").doc(id).delete()
            .then(() => console.log("Successfully deleted"))
            .catch(err => console.log(err));
    }
})

/**
 * Stop real time updates when unsub button is clicked
 */

 unbut.addEventListener('click', () => {
    unsub();
    console.log("unsubbed from changes")
 })