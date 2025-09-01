document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.setAttribute('tabindex', '0');
        section.addEventListener('click', () => {
            alert(`You clicked on the section about ${section.querySelector('h2').innerText}.`);
        });
        section.addEventListener('keypress', (event) => {
            // Trigger click event on Enter key
            if (event.key === 'Enter') {
                section.click();
            }
        });
    });
});