const Button = document.getElementById('toggle-skills') as HTMLButtonElement
const skill = document.getElementById('Skills') as HTMLElement

Button.addEventListener('click', ()=> {
    if(skill.style.display === 'none') {
        skill.style.display = 'block'
    } else {
        skill.style.display = 'none'
    }
    
}
);