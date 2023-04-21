// const logout = async () => {
//     const response = await fetch('/api/user/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/main');
//     } 
//   };
  
//   document.querySelector('#logout').addEventListener('click', logout);

document.getElementById('logout').onclick = function() {
  window.location.href = '/api/user'; // Replace with your login page URL or route
};