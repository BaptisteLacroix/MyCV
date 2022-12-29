/* Getting the element with the id of 'count' and storing it in the variable countEl. */
const countEl = document.getElementById('count');

/* Calling the function setAge() */
setAge();

/* Calling the function updateVisitCount() */
updateVisitCount();

/**
 * Define the age of the user (me in this case)
 */
function setAge() {
    let d = new Date();
    /* Checking if the current date is after May 20th. If it is, it will display the current year - 2003. If it is not, it
    will display the current year - 1 - 2003. */
    if (d.getMonth() > 4 || (d.getDate() >= 20 && d.getMonth() === 4)) {
        for (let i = 0; i < document.getElementsByClassName("age").length; i++) {
            document.getElementsByClassName("age")[i].innerHTML = d.getFullYear() - 2003;
        }
    } else {
        for (let i = 0; i < document.getElementsByClassName("age").length; i++) {
            document.getElementsByClassName("age")[i].innerHTML = d.getFullYear() - 1 - 2003;
        }
    }
}


/**
 * It changes the theme of the website by changing the href of the theme_css element
 * @param color - The color of the theme you want to change to.
 */
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

/**
 * When the user hovers over the image with the id of 'id', change the image to the image at the path 'path'.
 * @param className - The id of the image you want to change.
 * @param path - The path to the image you want to display when the mouse is over the image.
 */
function onHover(className, path) {
    for (let i = 0; i < document.getElementsByClassName(className).length; i++) {
        document.getElementsByClassName(className)[i].src = path;
    }
}

/**
 * "When the mouse leaves the image, change the image to the one specified in the path variable."
 *
 * The function is called in the HTML code like this:
 * @param className - The id of the image you want to change.
 * @param path - The path to the image you want to display when the mouse is not hovering over the image.
 */
function offHover(className, path) {
    for (let i = 0; i < document.getElementsByClassName(className).length; i++) {
        document.getElementsByClassName(className)[i].src = path;
    }
}

/**
 * It changes the image every 5 seconds.
 * @param className - the class name of the image element
 * @param dir - the directory where the images are located
 */
function startpptxForMerchant(className, dir) {
    let images = ['index.png', 'explore.png', 'product.png', 'cart.png', 'login.png', 'signin.png', 'paypal.png']
    let img = document.getElementsByClassName(className);
    // each 5 seconds change the image in order
    let i = 0;
    setInterval(function () {
        img[0].src = dir + images[i];
        i++;
        if (i === images.length) {
            i = 0;
        }
    }, 2500);
}

/**
 * It will copy the text "YuanMeng#3647" to your clipboard.
 */
function copyContent() {
    navigator.clipboard.writeText("YuanMeng#3647");
    alert("Id copy to your clipboard")
}


/**
 * It fetches the data from the API, then it updates the HTML element with the value of the data
 */
function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/lacroix.gq')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}

function changeLanguage(language) {
    if (language === "fr") {
        // met le html lang en fr
        document.getElementsByTagName("html")[0].setAttribute("lang", "fr");
        // affiche le texte en français
        for (let i = 0; i < document.getElementsByClassName("fr").length; i++) {
            document.getElementsByClassName("fr")[i].style.display = "block";
        }
        // cache le texte en anglais
        for (let i = 0; i < document.getElementsByClassName("en").length; i++) {
            document.getElementsByClassName("en")[i].style.display = "none";
        }
        // change le href du bouton
        for (let i = 0; i < document.getElementsByClassName("boutonBack").length; i++) {
            document.getElementsByClassName("boutonBack")[i].href = "./index.html#HomeFr";
        }
        // change le href du bouton
        for (let i = 0; i < document.getElementsByClassName("boutonPlus").length; i++) {
            document.getElementsByClassName("boutonPlus")[i].href = "./index.html#AboutFr";
        }
    } else if (language === "en") {
        // met le html lang en en
        document.getElementsByTagName("html")[0].setAttribute("lang", "en");
        // cache le texte en français
        for (let i = 0; i < document.getElementsByClassName("fr").length; i++) {
            document.getElementsByClassName("fr")[i].style.display = "none";
        }
        // affiche le texte en anglais
        for (let i = 0; i < document.getElementsByClassName("en").length; i++) {
            document.getElementsByClassName("en")[i].style.display = "block";
        }
        // change les href des boutons
        for (let i = 0; i < document.getElementsByClassName("boutonBack").length; i++) {
            document.getElementsByClassName("boutonBack")[i].href = "./index.html#HomeEn";
        }
        // change les href des boutons
        for (let i = 0; i < document.getElementsByClassName("boutonPlus").length; i++) {
            document.getElementsByClassName("boutonPlus")[i].href = "./index.html#AboutEn";
        }
    }
}
