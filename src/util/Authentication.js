function setCookie(cName, value, days){
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${cName}= ${value}; ${expires}; "path=/"`
}

function getCookie(cName) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split( "; ");
  let result = null;

  cArray.forEach(element => {
    if(element.indexOf(cName) === 0){
        result = element.substring(cName.length + 1)
    }
  })
  return result;
}

function deleteCookie(cName){
    setCookie(cName, null, null)
}

function checkCookie() {
  let user = getCookie("username");
  if (user !== ""){
    alert ("Welcome back!" + user);
  } else {
    user = prompt("Please enter your username", " ");
    if(user !== "" && user != null){
      setCookie("username", user, 365);
    }
  }
  
}


