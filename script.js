const buttons = document.querySelectorAll("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine");
const buttonColors = new Map();

const colors = ["black", "lightblue", "red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "grey"];

function changeColor(element) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
    return randomColor;
}

buttons.forEach(button => {
    let isColored = false;
    // const newColor_color = changeColor();
    buttonColors.set(button,changeColor(button));  // Initialize each button's color to white

    button.addEventListener("click", () => {
        if (!isColored) {
            console.log(buttonColors);
            const newColor = changeColor(button);
            button.style.backgroundColor = newColor;
            buttonColors.set(button, buttonColors.get(button));  // Save the new color for this button
            isColored = true;
        } else {
            const savedColor = buttonColors.get(button);
            button.style.backgroundColor = savedColor;
            isColored = false;
        }
    });
});