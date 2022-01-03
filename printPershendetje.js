alert(localStorage.getItem("username"));
        alert("Session=" + sessionStorage.getItem("username"));
        if(sessionStorage.getItem("username") != null)
            document.getElementById("pershendetje").innerHTML = "Pershendetje " + sessionStorage.getItem("username");
        else
            document.getElementById("pershendetje").innerHTML = "Pershendetje " + localStorage.getItem("username");