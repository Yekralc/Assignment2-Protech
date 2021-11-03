function ProcessForm()
{
    // get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // display form values
    document.getElementById("formdata").style.display = "block";
    document.getElementById("displayName").innerHTML = name;
    document.getElementById("displayEmail").innerHTML = email;
    document.getElementById("displayMessage").innerHTML = message;
}