document.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.getElementById('loginBtn');
    var loginPopup = document.getElementById('loginPopup');
    var loginForm = document.getElementById('loginForm');
    var overlay = document.getElementById('overlay');

    loginBtn.addEventListener('click', function () {
        loginPopup.style.display = 'block';
      //   overlay.style.display = 'block';
      //   document.body.style.overflow = 'hidden'; 
      //  document.body.classList.add('blur');

    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add your login logic here
        alert('Login successful!');
        loginPopup.style.display = 'none';
    //     overlay.style.display = 'none';
    //     document.body.style.overflow = ''; 
    // document.body.classList.remove('blur');

    });
});