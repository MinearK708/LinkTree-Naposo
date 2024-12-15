document.addEventListener('DOMContentLoaded', () => {
    const snowflakeContainer = document.getElementById('snowflake-container');

    // Function to create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random positioning and styling
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Duration between 2s to 5s
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px'; // Font size between 10px to 20px
        snowflake.innerHTML = '❄️';
        
        // Append to container
        snowflakeContainer.appendChild(snowflake);

        // Remove snowflake after animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Generate snowflakes at intervals
    setInterval(createSnowflake, 200); // Adjusted interval for better performance
});
