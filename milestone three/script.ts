// Get reference to the form and display area
const form = document.getElementById('Resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

//Handle form submission
form.addEventListener('submit', (event: Event)=> {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById('Name') as HTMLInputElement).value
    const email = (document.getElementById('Email') as HTMLInputElement).value
    const phone = (document.getElementById('Phone') as HTMLInputElement).value
    const education = (document.getElementById('Education') as HTMLInputElement).value
    const experience = (document.getElementById('Experience') as HTMLInputElement).value
    const skills = (document.getElementById('Skills') as HTMLInputElement).value

    //  Generate the resume cotent dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;
    
    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.');
    }
});