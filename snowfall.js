document.addEventListener('DOMContentLoaded', () => {
    const snowflakeContainer = document.getElementById('snowflake-container');

    // Function to create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.innerHTML = '❄️';
        snowflakeContainer.appendChild(snowflake);

        // Remove snowflake after animation ends
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    // Generate snowflakes at intervals
    setInterval(createSnowflake, 100);
});
