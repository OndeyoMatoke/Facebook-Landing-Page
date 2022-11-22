function required() {
    const y = document.forms["mainForm"]["username"]["password"].value;
    if (y == "") {
        alert ("Please fill in your name and password");
        return false;
    }
}