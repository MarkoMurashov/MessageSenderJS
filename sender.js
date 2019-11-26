

function sendEmail(email, message) {
	
	return checkEmail();	
}


function checkEmail() {
  var email = document.getElementById("email").value; 
  var message = document.getElementById("message").value; 
  
  setCookie('email', email);
  setCookie('mess', message);	
  if(!validateEmail(email)){	
      document.getElementById('invalidEmail').innerHTML = 'Please enter correct email';	  
	  return false;
  }
  document.getElementById('invalidEmail').innerHTML = '';
  if(message.replace(/\s/g, '')==''){	
      document.getElementById('invalidMessage').innerHTML = 'Please enter your message';	  
	  return false;
  }
  document.getElementById('invalidMessage').innerHTML = '';  
  
  return true;
}



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function setCookie(cname, cvalue) {
  document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + "path=/";
}
