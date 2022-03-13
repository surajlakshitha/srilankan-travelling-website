function required() {
    var checked_theme = document. querySelector('input[name = "subject"]:checked');
    
    if (document.getElementById('name').value == ""){
        alert("Please fill the name");
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
    else{
        if (document.getElementById('email').value == ""){
            alert("Please fill the email");
            document.getElementById('email').style.borderColor = "red";
            return false;
        }
        else{
            if (checked_theme == null){
                alert("Please select the theme of the inquiery");
                return false;
            }
            else{
                if (document.getElementById('description').value == ""){
                    alert("Please fill the description");
                    document.getElementById('description').style.borderColor = "red";
                    return false;
                }
            }
        }
    }

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
    var subjectCode;

    if (document.getElementById("deli").checked){
        subjectCode = "Delivery";
    }
    else{
        if (document.getElementById("str").checked){
            subjectCode = "Store";
        }
        else{
            if (document.getElementById("pr").checked){
                subjectCode = "Products";
            }
        }
    }
   
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("SUBJECT", subjectCode);
    sessionStorage.setItem("DESCRIPTION", description);
}


