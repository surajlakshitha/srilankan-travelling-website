function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "" || x == null) {
    alert("Please Fill All The Fields.");
    return false;
	}
	
	 var y = document.forms["myForm"]["email"].value;
  if (y == "" || y == null) {
    alert("Please Fill All The Fields.");
    return false;
	}
	
	 var z = document.forms["myForm"]["comment"].value;
  if (z == "" || z == null) {
    alert("Please Fill All The Fields.");
    return false;
	}
	
	 var v = document.forms["myForm"]["rateus"].value;
  if (v == "" || v == null) {
    alert("Please Fill All The Fields.");
    return false;
}
if(x!=null && y!=null && z!=null && v!=null){
 alert("Dear "+document.getElementById("name").value +", Thank You For Your Feedback.");
}
}