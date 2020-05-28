function myFunction(x) {
  x.classList.toggle("change");
  var menu = document.getElementById("menu");
  if (menu.className === "menu") {
    menu.className +=  " menuShow";
  }else {
    menu.className = "menu";
  }
}


function validate() {


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
var passwordResult = passwordtest.test(password);
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

function validatelogin() {
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
  var passwordResult = passwordtest.test(password);
  if (!passwordResult) {
      var msg = document.getElementById('errormessage_code')
      msg.innerHTML ="Dette er ikke en gyldig kode";
  } else {
    var msg = document.getElementById('errormessage_code')
    msg.innerHTML ="";
  }

  if (emailResult && passwordResult) {
    location.replace("programs.html");
  }

}

function commingsoon() {
  alert("Dette kursus er desværre ikke klar endnu, men bare rolig vi arbejder på højtryk for at få det færdigt")
}


function validatequestions() {

var answer1 = document.getElementById('answer1').value;
var answer2 = document.getElementById('answer2').value;

if (answer1 == "html" || answer1 == "htm") {
 document.getElementById('answer1p').innerHTML = "Spørgsmål 1: er rigtigt";
} else {
  document.getElementById('answer1p').innerHTML = "Spørgsmål 1: er forkert";
}
if (answer2 == "</body>" ) {
   document.getElementById('answer2p').innerHTML = "Spørgsmål 2: er rigtigt";
}else {
   document.getElementById('answer2p').innerHTML = "Spørgsmål 2: er forkert";
}

}
function validatequestions2() {
  var answer3 = document.getElementById('answer3').value;
  var answer4 = document.getElementById('answer4').value;


  if (answer3 == "css") {
   document.getElementById('answer3p').innerHTML = "Spørgsmål 1: er rigtigt";
  } else {
    document.getElementById('answer3p').innerHTML = "Spørgsmål 1: er forkert";
  }
  if (answer4 == "background-color: green;" || answer4 == "background: green;") {
     document.getElementById('answer4p').innerHTML = "Spørgsmål 2: er rigtigt";
  }else {
     document.getElementById('answer4p').innerHTML = "Spørgsmål 2: er forkert";
  }


}
