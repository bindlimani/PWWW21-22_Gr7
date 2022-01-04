//alert(localStorage.getItem("username"));
        //alert("Session=" + sessionStorage.getItem("username"));
        if(sessionStorage.getItem("username") != null) {
            //document.getElementById("pershendetje").innerHTML = "Pershendetje " + sessionStorage.getItem("username");
            document.getElementById("log-in").innerHTML = "P\xEBrsh\xEBndetje " + sessionStorage.getItem("username") + '<span onclick="logout()" style="color:white;"> (\xC7ky\xE7u)</span>';
        }
        else if(localStorage.getItem("username") != null){
            //document.getElementById("pershendetje").innerHTML = "Pershendetje " + localStorage.getItem("username");
            document.getElementById("log-in").innerHTML = "P\xEBrsh\xEBndetje " + localStorage.getItem("username") + '<span onclick="logout()" style="color:white;"> (\xC7ky\xE7u)</span>';
        }
        else {
            document.getElementById("log-in").innerText = "Kyçu";
        }

function logout() {
    document.getElementById("log-in").innerText = "Kyçu";
    if(sessionStorage.getItem("username") != null) {
        sessionStorage.removeItem("username");
        alert("Shky\xE7ja u b\xEB me sukses");
    }
    else {
        localStorage.removeItem("username");
        alert("Shky\xE7ja u b\xEB me sukses");
    }
}