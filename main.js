document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('themeToggle');

  toggleBtn.addEventListener('click', () => {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-theme');

    // Toggle dark mode class on specific elements
    const navbar = document.querySelector('.navbar');
    const aboutText = document.querySelector('.about-text');

    navbar.classList.toggle('dark-theme');
    aboutText.classList.toggle('dark-theme');

    // Swap theme icon
    const isDark = document.body.classList.contains('dark-theme');
    toggleBtn.src = isDark ? 'image/sun.svg' : 'image/Moon.svg';
  });
});
