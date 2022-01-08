const listeners = [];
const subscribe = fn => listeners.push(fn);

const getScheme = () => 
    window.localStorage.getItem("scheme") || "light";

const toggle = () => {
    const scheme = getScheme() == "light"
        ? "dark"
        : "light";

    window.localStorage.setItem("scheme", scheme);
    listeners.forEach(listener => listener(scheme));
}

export default { subscribe, getScheme, toggle };


