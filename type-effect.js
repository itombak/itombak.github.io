// type-effect.js
document.addEventListener("DOMContentLoaded", function() {
    const blogLink = document.getElementById('blogLink');
    blogLink.textContent = 'b'; // Initial faint visibility of the first letter
    const text = "log"; // Remaining text to animate after the initial 'B'
    
    function typeLetter(index = 0) {
        if (index < text.length) {
            blogLink.textContent += text[index];
            setTimeout(() => typeLetter(index + 1), 150); // Wait before typing the next letter
        }
    }

    function startTyping() {
        blogLink.textContent = 'b'; // Start with 'B' visible
        typeLetter(); // Start typing the rest
    }

    function resetText() {
        blogLink.textContent = 'b'; // Leave the initial 'B' visible when not hovering
    }

    blogLink.addEventListener('mouseover', startTyping);
    blogLink.addEventListener('mouseout', resetText);
});
