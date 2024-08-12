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
