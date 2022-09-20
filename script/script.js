const countEl = document.getElementById('count');

setAge();

updateVisitCount();

function setAge() {
    let d = new Date();
    if (d.getMonth() > 4 && d.getDate() >= 20)
        document.getElementById("age").innerHTML = (d.getFullYear() - 2003);
    else {
        document.getElementById("age").innerHTML = (d.getFullYear() - 1 - 2003);
    }
}


function changeTheme(color) {
    if (color === 'dark')
        document.getElementById('theme_css').href = './css/color/themeDark.css';
    else if (color === 'blue')
        document.getElementById('theme_css').href = './css/color/themeBlue.css';
    else if (color === 'beige')
        document.getElementById('theme_css').href = './css/color/themeBeige.css';
    else if (color === 'purple')
        document.getElementById('theme_css').href = './css/color/themePurple.css';
}

function onHover(id, path) {
    document.getElementById(id).src = path;
}

function offHover(id, path) {
    document.getElementById(id).src = path;
}

function copyContent() {
    navigator.clipboard.writeText("YuanMeng#3647");
    alert("Id copy to your clipboard")
}


function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/lacroix.gq')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}
