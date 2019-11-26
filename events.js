window.onload = function(){
		
	document.getElementById('email').value = getCookie('email');
	document.getElementById('message').value = getCookie('mess');
	document.querySelector('#send').onclick = function() {
		getScript('sender.js', function () {          
				if(sendEmail(getCookie('email'), getCookie('mess'))){
					ajaxPost();
					document.getElementById('email').value = '';
	                document.getElementById('message').value = '';
				}  
            });		
	}
}


function ajaxPost(){
	var request = new XMLHttpRequest();
	
	request.open('POST', 'sender.json');
	
	request.withCredentials = true;
    request.setRequestHeader('Content-Type', 'application/json');
	request.responseType="json";
	
	request.send();
	request.onreadystatechange=function()
	{
	  if(request.readyState==4 && request.status==200)
	  {
		  var res = JSON.parse(JSON.stringify(request.response));
		  if(res.result)
		  {
			  alert('You sent a message to ' + getCookie('email'));
		  }
		 
	  }
		
	}
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


function getScript(source, callback) {
    var script = document.createElement('script');
    var prior = document.getElementsByTagName('script')[0];
    script.async = 1;

    script.onload = script.onreadystatechange = function( _, isAbort ) {
        if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
            script.onload = script.onreadystatechange = null;
            script = undefined;

            if(!isAbort && callback) setTimeout(callback, 0);
        }
    };

    script.src = source;
    prior.parentNode.insertBefore(script, prior);
}