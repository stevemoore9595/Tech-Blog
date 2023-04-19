// const session = require('express-session');
// const router = require('express').Router();
// const loginBtn = document.getElementById('login');
// const logoutBtn = document.getElementById('logout');


document.getElementById('login').onclick = function() {
    window.location.href = '/login'; // Replace with your login page URL or route
  };

// if (!req.session.user) {
//     logoutBtn.style.display = 'none';
// } else {
//     loginBtn.style.display = 'none'
// }