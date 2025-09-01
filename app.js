document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            alert(`Bạn đã nhấp vào phần giới thiệu về ${section.querySelector('h2').innerText}`);
        });
    });
});
