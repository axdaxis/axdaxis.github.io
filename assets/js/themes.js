// Source - https://stackoverflow.com/a/24103596
// Posted by Mandeep Janjua, modified by community. See post 'Timeline' for change history
// Modified for my own uses
// Retrieved 2026-07-30, License - CC BY-SA 4.0

function setCookie(name, value) {
    var expires = "";
    document.cookie = name + "=" + (value || "")  + "; max-age=2147483647; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/////
const themeList = ['default', 'dr', 'space', 'isat']
currentTheme = ""; 

if (getCookie("theme") != null) {
    let theme = getCookie("theme");
    currentTheme = theme;
    document.body.classList.add("theme-" + theme);
} else {
    setCookie("theme", "default");
    currentTheme = "default";
    document.body.classList.add("theme-" + theme);
}

// Themetoggle
const themeToggleButton = document.createElement("button");
const iconTheme = document.createElement("img");
iconTheme.src = "/images/palette.svg";
themeToggleButton.appendChild(iconTheme);
themeToggleButton.classList.add("hoverThemeSwitch");
document.body.appendChild(themeToggleButton);
themeToggleButton.addEventListener("click", toggleTheme);

function toggleTheme() {     
    let index = themeList.indexOf(currentTheme);
    if (index >= themeList.length - 1) {
        currentTheme = "default";
        document.body.classList.forEach(className => {
            className.includes("theme") ? document.body.classList.remove(className) : "";
        });
    } else {
        document.body.classList.remove("theme-" + currentTheme);
        currentTheme = themeList[index + 1];
    }
    document.body.classList.add("theme-" + currentTheme);
    setCookie("theme", currentTheme);
}

/*function toggleTheme() {
    let themeClass = "theme" + currentTheme;
    if (!themeList.includes(currentTheme)) {
        eraseCookie("theme");
    } else {
        let index = themeList.indexOf(currentTheme);
        if (index <= themeList.length) {
            // loop back!
            currentTheme = "";
        } else {
            currentTheme = themeList[index + 1];
        }
    }
    if (document.body.classList.value.includes("theme") || currentTheme == "") {
        eraseCookie("theme");
    } else {
        setCookie("theme", currentTheme);
    }
    document.body.classList.toggle(currentTheme);
}*/
