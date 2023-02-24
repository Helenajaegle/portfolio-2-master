const firebaseConfig = {
  apiKey: "AIzaSyCLHabFdtwF18VQoN5QZMBwkJBqlFBJon8",
  authDomain: "contact-d6a5a.firebaseapp.com",
  databaseURL: "https://contact-d6a5a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contact-d6a5a",
  storageBucket: "contact-d6a5a.appspot.com",
  messagingSenderId: "439242422732",
  appId: "1:439242422732:web:e166b5de8bf29b1ae54569"
};

// Initialiser firebase //
firebase.initializeApp(firebaseConfig);

var contactDB = firebase.database().ref('contact')

document.getElementById('contact').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid')
    var phone = getElementVal('phone');

    saveMessages(name, emailid, phone);

    // console.log(name, emailid, phone);
}

const saveMessages = (name, emailid, phone) => {
    var newcontact = contatDB.push();

    newcontact.set({
        name: name,
        emailid: emailid,
        phone: phone,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).Value;
}