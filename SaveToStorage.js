while(document.readyState === false) {alert("wait");}

// alert(localStorage.getItem("username"));

// function onLoad() {
// document.getElementById("pershendetje").innerText = localStorage.getItem("username");
// }


function onSubmit() {
if(typeof(Storage) !== undefined) {
    var username = document.getElementById("username").value;
    var checkbox = document.getElementById("remember");
    //alert(username);
    if(remember.checked === true) {
        //alert("Checked");
        localStorage.setItem("username", username);
        printUsername(localStorage["username"]);
    }
    else {
        sessionStorage.setItem("username", username);
        printUsername(sessionStorage["username"]);
        //alert("Session");
    }
}
else {
    alert("Na vjen keq, por shfeltuesi juaj nuk e p\xEBrkrah opsionin p\xEBr t\xEB ju mbajtur mend");
}
}

function printUsername(usr) {
    document.getElementById("pershendetje").innerText = "P\xEBrsh\xEBndetje " + usr;
}