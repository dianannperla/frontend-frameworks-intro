document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.setAttribute('tabindex', '0');
        section.setAttribute('role', 'button'); // Added role attribute for accessibility
        const sectionTitle = section.querySelector('h2').innerText;
        section.setAttribute('aria-label', `Section about ${sectionTitle}`); // Added aria-label for better accessibility
        section.addEventListener('click', () => {
            alert(`You clicked on the section about ${sectionTitle}.`);
        });
        section.addEventListener('keypress', (event) => {
            // Trigger click event on Enter key
            if (event.key === 'Enter') {
                section.click();
            }
        });
    });
});