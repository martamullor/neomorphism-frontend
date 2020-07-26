document.addEventListener('DOMContentLoaded', (event) => {
    

    const loginContainer = document.getElementById('container-login')
    loginContainer.style = 'display: block';

    const loggedContainer = document.getElementById('container-logged')
    loggedContainer.style = 'display: none';
  

  
    // Function OPEN MENU
    
    function loggedFunction () {      
      loginContainer.style = 'display: none';
      loggedContainer.style = 'display: block';
    }

  
    
    const loggedFunctionClick = document.getElementById('login-button')
    loggedFunctionClick.addEventListener('click', loggedFunction)

  })