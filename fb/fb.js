function required(){
     const y = documenet.forms["mainForm"]["username"]["password"].value;
     if(y == ""){
        alert ("please fill in your name and password");
        return false;
     }
}
