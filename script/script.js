const SELECTOR = '.hide';
const ANIMATE_CLASS_NAME = 'active';

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
        document.getElementById('theme_css').href = './css/themeDark.css';
    else if (color === 'blue')
        document.getElementById('theme_css').href = './css/themeBlue.css';
    else if (color === 'beige')
        document.getElementById('theme_css').href = './css/themeBeige.css';
    else if (color === 'purple')
        document.getElementById('theme_css').href = './css/themePurple.css';
}

function onHover(id, path)
{
    document.getElementById(id).src = path;
}

function offHover(id, path)
{
    document.getElementById(id).src = path;
}
