// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');

    button.addEventListener('click', () => {
        alert('Button functionality is working!');
    });
});
