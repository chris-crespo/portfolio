import colorScheme from "./scheme.js";

const select = selector => document.querySelector(selector);

const setupScheme = () => {
    const html = select("html");
    const setScheme = scheme => 
        html.className = scheme;
    
    setScheme(colorScheme.getScheme());
    colorScheme.subscribe(setScheme);
}

const setupDot = () => {
    const dot = select(".dot");
    dot.onclick = colorScheme.toggle;
}

const showAnchor = (a, i) => {
    a.style.transition = `transform 600ms ${200*i}ms ease-in-out`;
    a.classList += "show";

    setTimeout(() => a.removeAttribute("style"), 600);
}

const setupMenuTransition = () => {
    const menu = select(".menu");
    if (!menu) return;

    const { children: menuItems } = menu.children[0];
    Array.from(menuItems)
        .map(li => li.children[0])
        .forEach(showAnchor);
}

window.onload = () => {
    setupScheme();
    setupMenuTransition();
    setupDot();
}
