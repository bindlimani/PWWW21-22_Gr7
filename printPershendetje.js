//alert(localStorage.getItem("username"));
        //alert("Session=" + sessionStorage.getItem("username"));
        if(sessionStorage.getItem("username") != null) {
            document.getElementById("pershendetje").innerHTML = "Pershendetje " + sessionStorage.getItem("username");
            document.getElementById("log-in").innerHTML = "Pershendetje " + sessionStorage.getItem("username") + '<span onclick="logout()" style="color:white;"> (Shkyqu)</span>';
        }
        else if(localStorage.getItem("username") != null){
            document.getElementById("pershendetje").innerHTML = "Pershendetje " + localStorage.getItem("username");
            document.getElementById("log-in").innerHTML = "Pershendetje " + localStorage.getItem("username") + '<span onclick="logout()" style="color:white;"> (Shkyqu)</span>';
        }
        else {
            document.getElementById("log-in").innerText = "Kycu";
        }

function logout() {
    document.getElementById("log-in").innerText = "Kycu";
    if(sessionStorage.getItem("username") != null) {
        sessionStorage.removeItem("username");
        alert("Shkyqja u be me sukses");
    }
    else {
        localStorage.removeItem("username");
        alert("Shkyqja u be me sukses");
    }
}