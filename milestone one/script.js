var Button = document.getElementById('toggle-skills');
var skill = document.getElementById('Skills');
Button.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
