// Variables for user input
const adj1 = document.getElementById('adj1');
const noun = document.getElementById('noun');
const adj2 = document.getElementById('adj2');
const clothing = document.getElementById('clothing');
const bodyPart = document.getElementById('bodyPart');
const verb = document.getElementById('verb');
const food = document.getElementById('food');

// Variable to display the mad lib
const madLibDisplay = document.querySelector('.mad-lib');

// Variable for the form
const form = document.querySelector('form');

// Variable for the mad lib story
const story = `My friends and I started a secret club!  We meet every day by the <strong>${adj1}</strong> <strong>${noun}</strong>.  Our club has some very special rules.  If you want to join, you have to wear a <strong>${adj2}</strong> <strong>${clothing}</strong> on your <strong>${bodyPart}</strong>.  You are not allowed to <strong>${verb}</strong> during meetings, and you can only eat <strong>${food}</strong> for your meals.  If you are interested in joining, let me know!`;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (adj1.value == '') {
        alert(`Adjective must be filled out!`);
        adj1.focus();
    } else if (noun.value == '') {
        alert(`Noun must be filled out!`);
        noun.focus();
    } else if (adj2.value == '') {
        alert(`Adjective must be filled out!`);
        adj2.focus();
    } else if (clothing.value == '') {
        alert(`Clothing must be filled out!`);
        clothing.focus();
    } else if (bodyPart.value == '') {
        alert(`Body Part must be filled out!`);
        bodyPart.focus();
    } else if (verb.value == '') {
        alert(`Verb must be filled out!`);
        verb.focus();
    } else if (food.value == '') {
        alert(`Food must be filled out!`);
        food.focus();
    } else {
        madLibStoryDisplay();
        removeCenterClass();
        scrollToMadLib();
    }
});

function madLibStoryDisplay() {
    madLibDisplay.innerHTML = story
    .replace(`${adj1}`, adj1.value)
    .replace(`${noun}`, noun.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${bodyPart}`, bodyPart.value)
    .replace(`${verb}`, verb.value)
    .replace(`${food}`, food.value);
};

function removeCenterClass() {
    madLibDisplay.classList.remove('center');
};

function scrollToMadLib() {
    madLibDisplay.scrollIntoView();
    document.madLibDisplay.scrollIntoView();
}
