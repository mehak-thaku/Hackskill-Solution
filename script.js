
window.addEventListener("scroll", function () {
    let logo = document.querySelector(".logo-nav");
    if (window.scrollY > 50) {
        logo.style.visibility = "hidden";
    } else {
        logo.style.visibility = "visible"
    }
    let Icon = document.querySelector(".icon");
    if (window.scrollY > 50) {
        Icon.style.visibility = "hidden";
    } else {
        Icon.style.visibility = "visible"
    }
});

function toggleMenu(){
    let menu = document.getElementById("menu");
    let hamburger = document.querySelector(".icon");

    if(menu.style.display === "block"){
        menu.style.display = "none";
        hamburger.classList.remove("active");
    }else{
        menu.style.display = "block";
        hamburger.classList.add("active");
    }

};






// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
document.getElementById('ideaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    // Send data to Firebase Firestore
    db.collection("ideas").add({
        name: name,
        email: email,
        title: title,
        description: description,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        document.getElementById('successMessage').style.display = "block";
        document.getElementById('ideaForm').reset();
    })
    .catch(error => console.error("Error submitting idea: ", error));
});                                   





// window.addEventListener("scroll", () => {
//     let logo = document.querySelectorAll(".logo-nav");
//     if(window.scrollY>50){
//         logo.style.visibility = "hidden";
//     }else{
//         logo.style.visibility = "visible"
//     }

//     let icon = document.querySelectorAll(".icon");
//     if(window.scrollY>50){
//         icon.style.visibility = "hidden";
//     }else{
//         icon.style.visibility = "visible"
//     }
// });