// function Toggle_Resume(){
// 	var resume = document.getElementById("Resume");
// 	var resume_stat = resume.style.display;

// 	if(resume_stat == "none"){
// 		resume.style.display = "block";
// 	}
// 	else{
// 		resume.style.display = "none";
// 	}
// }

// // Open and close sidebar
// function openNav() {
//   document.getElementById("mySidebar").style.width = "60%";
//   document.getElementById("mySidebar").style.display = "block";
// }

// function closeNav() {
//   document.getElementById("mySidebar").style.display = "none";
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const elements = document.querySelectorAll('.fade-in');
//     elements.forEach((element, index) => {
//         setTimeout(() => {
//             element.classList.remove('opacity-0');
//             element.classList.add('opacity-100');
//         }, 1000 * (index));
//     });
// });

htmx.on("htmx:afterSwap", function(evt) {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.remove('opacity-0');
            element.classList.add('opacity-100');
        }, 800 * (index + 1));
    });
});
htmx.on("htmx:beforeRequest", function(evt) {
    const id = evt.srcElement.id

    const homeEl = document.getElementById("home-selector")
    const aboutEl = document.getElementById("about-selector")
    const projectEl = document.getElementById("projects-selector")
    const els = [homeEl, aboutEl, projectEl]
    for (el of els) {
        el.classList.remove("text-orange-300")
        el.classList.add("text-gray-300")
    }

    const element = document.getElementById(id)
    element.classList.remove("text-gray-300")
    element.classList.add("text-orange-300")
});
