

function sendEmail(email, message) {
	
	return checkEmail();	
}


function checkEmail() {
  var email = document.getElementById("email").value; 
  var message = document.getElementById("message").value; 
  
  setCookie('email', email);
  setCookie('mess', message);
  document.getElementById('invalidEmail').innerHTML = '';
  document.getElementById('invalidMessage').innerHTML = '';    
  if(!validateEmail(email)){	
      document.getElementById('invalidEmail').innerHTML = 'Please enter correct email';	  
	  return false;
  }
  if(message.replace(/\s/g, '')==''){	
      document.getElementById('invalidMessage').innerHTML = 'Please enter your message';	  
	  return false;
  }
 
  return true;
}



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (100*24*60*60*1000));
 var expires = "expires="+ d.toUTCString();
  document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}
