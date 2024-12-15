const MAX_SNOWFLAKES = 50;
const snowflakesContainer = document.querySelector('.snowflakes');

for (let i = 0; i < MAX_SNOWFLAKES; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄️';

    // Acak posisi, ukuran, dan durasi
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.fontSize = Math.random() * 0.8 + 0.2 + 'em';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDelay = Math.random() * 3 + 's';

    snowflakesContainer.appendChild(snowflake);
}
