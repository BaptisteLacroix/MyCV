const SELECTOR = '.hide';
const ANIMATE_CLASS_NAME = 'active';

const countEl = document.getElementById('count');

const animate = element => (
    element.classList.add(ANIMATE_CLASS_NAME) // On a joute a la classe .hide la classe .active => 'hide active'
);

const isAnimated = element => (
    element.classList.contains(ANIMATE_CLASS_NAME)
);

const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {

        // when element's is in viewport,
        // animate it!
        if (entry.intersectionRatio > 0) {
            animate(entry.target);
            // remove observer after animation
            observer.unobserve(entry.target);
        }
    });
});

// get only these elements,
// which are not animated yet
const elements = [].filter.call(
    document.querySelectorAll(SELECTOR),
    element => !isAnimated(element, ANIMATE_CLASS_NAME)
);

// start observing your elements
elements.forEach((element) => intersectionObserver.observe(element));


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

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/lacroix.gq/viewers/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}
