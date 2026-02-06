// CODE reduced from 200 lines to 80 lines HAHAHAHH funny yeah???
//Button declaration
//
const p = document.querySelectorAll('.hidden');
const svgIconNo = document.querySelectorAll('.svg-plusminus');
const answers = [`Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.`,` Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`,`Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`,`The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.
      `];
      //svg = [plus.svg, minus.svg]
const svg = [`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`,`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`]
//Functions
//Function for SVG-1
function toggleClass1(){
    if(p[0].classList.contains('hidden')){
        p[0].classList.remove('hidden');
        p[0].classList.add('add1');
        p[0].textContent = answers[0];
        svgIconNo[0].innerHTML = svg[1]
    }else{
        p[0].classList.remove('add1');
        p[0].classList.add('hidden');
        svgIconNo[0].innerHTML = svg[0]
    }
}
//Function for SVG-2
function toggleClass2(){
    if(p[1].classList.contains('hidden')){
        p[1].classList.remove('hidden');
        p[1].classList.add('add1');
        p[1].textContent = answers[1];
        svgIconNo[1].innerHTML = svg[1]
    }else{
        p[1].classList.remove('add1');
        p[1].classList.add('hidden');
        svgIconNo[1].innerHTML = svg[0]
    }
}
//Function for SVG-3
function toggleClass3(){
    if(p[2].classList.contains('hidden')){
        p[2].classList.remove('hidden');
        p[2].classList.add('add1');
        p[2].textContent = answers[2];
        svgIconNo[2].innerHTML = svg[1]
    }else{
        p[2].classList.remove('add1');
        p[2].classList.add('hidden');
        svgIconNo[2].innerHTML = svg[0]
    }
}
// Function for SVG-4
function toggleClass4(){
    if(p[3].classList.contains('hidden')){
        p[3].classList.remove('hidden');
        p[3].classList.add('add1');
        p[3].textContent = answers[3];
        svgIconNo[3].innerHTML = svg[1]
    }else{
        p[3].classList.remove('add1');
        p[3].classList.add('hidden');
        svgIconNo[3].innerHTML = svg[0]
    }
}
svgIconNo[0].addEventListener('click', toggleClass1);
svgIconNo[1].addEventListener('click', toggleClass2);
svgIconNo[2].addEventListener('click', toggleClass3);
svgIconNo[3].addEventListener('click', toggleClass4);