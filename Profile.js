// Check if user is logged in
const userData = JSON.parse(localStorage.getItem('currentUser'));

if (!userData) {
    alert("Please login first!");
    window.location.href = 'index.html'; // redirect to login page
}

// Populate profile
document.getElementById('user-name').innerText = userData.name;
document.getElementById('user-class').innerText = userData.class;
document.getElementById('user-school').innerText = userData.school;
document.getElementById('user-role').innerText = userData.role;
document.getElementById('user-points').innerText = userData.points || 0;
document.getElementById('user-rank').innerText = userData.rank || '—';

// Populate achievements
const achievementsUl = document.getElementById('user-achievements');
const achievements = userData.achievements || ['No achievements yet'];
achievements.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    achievementsUl.appendChild(li);
});

// Logout button
document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
});
