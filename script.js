const listOfColors = ['#AD636C', '#009B72', '#6761A8', '#347E8D', '#798186'];
//                        0          1           2         3          4

const colorSwitcherButton = document.querySelector('.color-switcher-button');
const colorSwitcherContainer = document.querySelector('.color-switcher-container');
const currentColor = document.querySelector('.color-switcher-text-color');
const clickMeCountDisplay = document.querySelector(`.contorizator-display`);
const resetSwitcherButton = document.querySelector(`.reset-switcher-button`);
const hexSwitcherColor = document.getElementById(`hex-switcher-color`);
const previousSwitcherButton = document.querySelector(`.color-switcher-previous`);
const nextSwitcherButton = document.querySelector(`.color-switcher-next`);

let index = 0;
let clickCount = 0;


const getRandomColor = () => {
    return listOfColors[Math.floor(Math.random() * listOfColors.length)];
};

const switchColor = () => {
    const randomColor = getRandomColor();
    index = listOfColors.indexOf(randomColor);
    updateColor(randomColor);
    displayClick();
};


const displayClick = () => {
    clickCount++;
    
    clickMeCountDisplay.innerHTML = `Number of Clicks: ${clickCount}`;
};

const resButton = () => {
    currentColor.innerText = listOfColors[0];
    colorSwitcherContainer.style.backgroundColor = listOfColors[0];

};

const updateColor = (color) => {
    colorSwitcherContainer.style.backgroundColor = color;
    currentColor.innerText = color;
    currentColor.style.color = color;
};

const hexSwitch = () => {
    index++;

    if (index === 5) {
        index = 0;
    }

    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.style.color = listOfColors[index];
};

const previousButton = () => {
     index--;
     
     if (index < 0) {
        index = listOfColors.length - 1;
     }
    
     colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
    currentColor.style.color = listOfColors[index];

};

const nextButton = () => {
    index++;
    
    if (index === listOfColors.length) {
        index = 0;
    }

    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
    currentColor.style.color = listOfColors[index];
};

colorSwitcherButton.addEventListener('click', switchColor);
clickMeCountDisplay.addEventListener(`click`, displayClick);
resetSwitcherButton.addEventListener(`click`, resButton);
hexSwitcherColor.addEventListener(`clcik`, hexSwitch);
previousSwitcherButton.addEventListener(`click`, previousButton);
nextSwitcherButton.addEventListener(`click`, nextButton);

