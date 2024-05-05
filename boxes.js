// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.querySelector('.text-container');
    const textElement = document.getElementById('text');
    let boxes = [];
    let intervalId = null;

    textContainer.addEventListener('mouseenter', () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                if (boxes.length < 2) {
                    createBox();
                }
            }, 500);  // Create a new box every 1 second if less than 2 boxes are present
        }
    });

    textContainer.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
        intervalId = null;
        boxes.forEach(box => {
            box.style.opacity = 0;
            setTimeout(() => box.remove(), 500);
        });
        boxes = [];
    });

    function createBox() {
        if (boxes.length >= 2) {
            let oldBox = boxes.shift(); // Remove the oldest box if there are already 2
            oldBox.remove();
        }

        const box = document.createElement('div');
        box.classList.add('box');
        const maxBoxWidth = 60;
        const maxBoxHeight = 60;
        const textRect = textElement.getBoundingClientRect();

        box.style.width = `${Math.random() * maxBoxWidth + 20}px`;
        box.style.height = `${Math.random() * maxBoxHeight + 20}px`;
        box.style.left = `${textRect.left + window.scrollX + Math.random() * (textRect.width - maxBoxWidth)}px`;
        box.style.top = `${textRect.top + window.scrollY + Math.random() * (textRect.height - maxBoxHeight)}px`;

        box.style.position = 'absolute';
        box.style.background = `rgba(${getRandomColor()}, 0.5)`;

        document.body.appendChild(box);  // Append to body to ensure they are placed absolutely relative to the page
        boxes.push(box);

        setTimeout(() => {
            // Automatically remove the box after 5 seconds
            boxes = boxes.filter(b => b !== box);
            box.remove();
        }, 1500);
    }

    function getRandomColor() {
        // Base colors defined in RGB
        const baseColors = [
            { r: 0, g: 100, b: 0 },    // Dark green
            { r: 0, g: 0, b: 139 },    // Dark blue
            { r: 165, g: 42, b: 42 }   // Brown
        ];
    
        // Choose two random base colors to blend
        const color1 = baseColors[Math.floor(Math.random() * baseColors.length)];
        const color2 = baseColors[Math.floor(Math.random() * baseColors.length)];
    
        // Randomly decide the ratio of blending
        const mixRatio = Math.random();
    
        // Interpolate between the two colors
        const r = Math.round(color1.r * mixRatio + color2.r * (1 - mixRatio));
        const g = Math.round(color1.g * mixRatio + color2.g * (1 - mixRatio));
        const b = Math.round(color1.b * mixRatio + color2.b * (1 - mixRatio));
    
        return `${r}, ${g}, ${b}`;
    }
    
});
