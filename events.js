function validate() {
  var email = document.getElementById("email").value; 
  var message = document.getElementById("message").value; 
  if(!validateEmail(email)){
      setCookie('email', email);
      setCookie('mess', message);	
      document.getElementById('response').innerHTML = 'Please enter correct email';	  
	  return false;
  }

  setCookie('email', email);
  setCookie('mess', message);
   
  return true;
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function getCookies(){
	
	document.getElementById('email').value = getCookie('email');
	document.getElementById('message').value = getCookie('mess');
}

function setCookie(cname, cvalue) {
  document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + "path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}