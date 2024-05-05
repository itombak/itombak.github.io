document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('aboutLink');
    const originalText = aboutLink.textContent;
    const fonts = ['"Courier New", monospace', '"Lucida Console", monospace', 'Consolas, monospace'];
    const styles = ['normal', 'italic', 'bold'];
    const decorations = ['none', 'underline', 'line-through'];

    function randomizeText() {
        let shuffledText = shuffleText(originalText);
        aboutLink.textContent = shuffledText;
        aboutLink.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
        aboutLink.style.fontStyle = styles[Math.floor(Math.random() * styles.length)];
        aboutLink.style.fontWeight = styles.includes('bold') ? 'bold' : 'normal';
        aboutLink.style.textDecoration = decorations[Math.floor(Math.random() * decorations.length)];
    }

    function shuffleText(text) {
        let characters = text.split('');
        characters = characters.map(char => Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase());
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]]; // Swap characters
        }
        return characters.join('');
    }

    let resetTimeout; // Declare a variable to hold the timeout

    aboutLink.addEventListener('mouseover', randomizeText);
    aboutLink.addEventListener('mouseout', () => {
        clearTimeout(resetTimeout); // Clear any previous timeout to avoid multiple resets
        resetTimeout = setTimeout(() => { // Set a new timeout
            aboutLink.textContent = originalText; // Reset the text after 2000ms
            aboutLink.style.fontFamily = '"Courier New", monospace';
            aboutLink.style.fontStyle = 'normal';
            aboutLink.style.fontWeight = 'normal';
            aboutLink.style.textDecoration = 'none';
        }, 200); 
    });
});
