// On window load add eventlistener to the flags
window.addEventListener("load", function () {
    // Get the flags
    let frenchFlag = document.getElementById("french");
    let englishFlag = document.getElementById("english");
    // Add eventlistener to the flags
    frenchFlag.addEventListener("click", function () {
        setLanguage("fr");
    });
    englishFlag.addEventListener("click", function () {
        setLanguage("en");
    });
});


function setLanguage(language) {
    $.getJSON('translations/' + language + '.json', function (data) {
        console.log(data);
        // Loop through the data
        for (let key in data) {
            // Get the element
            let element = document.getElementById(key);
            console.log(element);
            // If the element exists
            if (element) {
                // Set the text
                element.innerHTML = data[key];
            }
        }
    });
}