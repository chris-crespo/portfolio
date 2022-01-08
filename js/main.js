const getColorScheme = () => window.localStorage.getItem("scheme") || "light";
const storeColorScheme = scheme => window.localStorage.setItem("scheme", scheme)

window.onload = () => {
    const html = document.querySelector("html");
    html.className = getColorScheme();

    const menu = document.querySelector(".menu");
    if (menu) {
        Array.from(menu.children[0].children).forEach((li, i) => {
            const [a] = li.children;
            a.style.transition = `transform 600ms ${200*i}ms ease-in-out`;
            a.classList += "show";

            setTimeout(() => a.removeAttribute("style"), 600);
        });
    }

    const dot = document.querySelector(".dot");
    dot.onclick = e => {
        const scheme = getColorScheme() == "light"
            ? "dark"
            : "light";

        html.className = scheme;
        storeColorScheme(scheme);
    }
}
