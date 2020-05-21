function myFunction(x) {
  x.classList.toggle("change");
}


function validate() {
  console.log('hej');

 var name = document.getElementById('nameid').value;
 var nametest = /^[A-Za-z .'-]{2,100}$/;
 var nameResult = nametest.test(name);
 if (!nameResult) {
     var msg = document.getElementById('errormessage_name')
     msg.innerHTML ="Dette er ikke et gyldigt navn";
 } else {
   var msg = document.getElementById('errormessage_name')
   msg.innerHTML ="";
 }

var email = document.getElementById('emailid').value;
var emailtest = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
var emailResult = emailtest.test(email);
if (!emailResult) {
    var msg = document.getElementById('errormessage_email')
    msg.innerHTML ="Dette er ikke en gyldig email";
}else {
  var msg = document.getElementById('errormessage_email')
  msg.innerHTML ="";
}

var password = document.getElementById('password').value;
var passwordtest = /^[A-Za-z .'-]{2,100}$/;
var passwordResult = nametest.test(password);
if (!passwordResult) {
    var msg = document.getElementById('errormessage_code')
    msg.innerHTML ="Dette er ikke en gyldig kode";
} else {
  var msg = document.getElementById('errormessage_code')
  msg.innerHTML ="";
}

var reppassword = document.getElementById('reppassword').value;
if (reppassword == password) {
    var msg = document.getElementById('errormessage_repcode')
    msg.innerHTML ="";
} else {
  var msg = document.getElementById('errormessage_repcode')
  msg.innerHTML ="koden matcher ikke";
}

if (nameResult && emailResult && passwordResult && reppassword == password) {
  location.replace("programs.html");

}




}
