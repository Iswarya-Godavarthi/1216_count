let z= document.getElementById("zero")
function inn() {
    let a = z.textContent;
    let b = parseInt(a) +  1;
    if(b>0) {
        z.style.color= "green";
    }
    else if(b<0) {
        z.style.color="red";

    }
    else {
        z.style.color= "black";
    }
    z.textContent = b;
}
function re(){
    z.textContent = 0;
    z.style.color = "black";
}
function de() {
    
        let a = z.textContent;
        let b = parseInt(a) -  1;
        if(b>0) {
            z.style.color= "green";
        }
        else if(b<0) {
            z.style.color="red";
    
        }
        else {
            z.style.color= "black";
        }
        z.textContent = b;
}