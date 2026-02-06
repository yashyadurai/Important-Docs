const questions = document.querySelectorAll('.ques');
const svg = document.querySelectorAll('.svg-plusminus');
const answers = [`Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.`,` Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`,`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`,`The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.
      `];
const abcBull = document.querySelector('#ques1 .add1')
function toggle(){
    //If not found then CREATE it
    if(!abcBull){
        const p = document.createElement('p');
        p.classList.add('add1');
        p.textContent = answers[0];
    }
}

svg[0].addEventListener('click',toggle);
svg[1].addEventListener('click',toggle);
svg[2].addEventListener('click',toggle);
svg[3].addEventListener('click',toggle);