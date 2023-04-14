const session = require('express-session');
const router = require('express').Router();
const loginBtn = document.getElementById('login');
const logoutBtn = document.getElementById('logout');

if (!req.session.user) {
    logoutBtn.style.display = 'none';
} else {
    loginBtn.style.display = 'none'
}