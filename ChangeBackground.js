let q = new Date().getHours();
//alert(t);
//alert("Working");
while(document.readyState === false) {}
var colors = ["#000540","#003575","#3468eb","#34c0eb","#34dceb"];
window.addEventListener("load",function() { setBackground(q) });
function setBackground(time) {
    // if(t<3) {
    //     print("Got inside if")xs
    //     document.body.style.background = colors[0];
    // }
    switch(time) {
        case 0:
        case 1:
        case 2:
        case 3:
            document.body.style.backgroundColor = "rgb("+ "0,0," + (time*255/24) + ")";//colors[0];
            break;
        case 4:
        case 5:
        case 6:
            document.body.style.backgroundColor = "rgb("+ "0,0," + (time*255/20) + ")";//colors[0];
            break;
        case 7:
        case 8:
        case 9:
            document.body.style.backgroundColor = "rgb("+ "0,0," + (time*255/16) + ")";
            break;
        case 10:
        case 11:
        case 12:
            document.body.style.backgroundColor = "rgb("+ "0,0," + (time*255/12) + ")";
            break;
        case 13:
        case 14:
        case 15:
            document.body.style.backgroundColor = "rgb("+ "0,0," + (time*255/12) + ")";
            break;
        case 16:
        case 17:
        case 18:
            document.body.style.backgroundColor = "rgb("+ "0,0," + ((24-time)*255/16) + ")";
            break;
        case 19:
        case 20:
        case 21:
            document.body.style.backgroundColor = "rgb("+ "0,0," + ((24-time)*255/16) + ")";
            break;
        case 22:
        case 23:
        case 24:
            document.body.style.backgroundColor = "rgb("+ "0,0," + ((24-time)*255/20) + ")";
            break;
    }
    print(t);
}