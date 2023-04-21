// const router = require('express').Router();
// const session = require('express-session');
// const loginBtn = document.getElementById('login');
// const logoutBtn = document.getElementById('logout');


document.getElementById('login').onclick = function() {
    window.location.href = '/api/user/login'; // Replace with your login page URL or route
  };




// if (!req.session.loggedIn) {
//     logoutBtn.style.display = 'none'
// } else {
//     loginBtn.style.display = 'none'
// }