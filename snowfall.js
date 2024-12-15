let snowflakeCount = 0; // Counter for snowflakes
const MAX_SNOWFLAKES = 50; // Maximum number of snowflakes on screen

document.addEventListener('DOMContentLoaded', () => {
  const snowflakeContainer = document.getElementById('snowflake-container');

  // Function to create snowflakes
  function createSnowflake() {
    if (snowflakeCount >= MAX_SNOWFLAKES) return; // Don't create new if limit reached

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Random positioning and styling
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = (Math.random() * 5 + 15) + 'em'; // Adjust for responsive size

    snowflake.innerHTML = '❄️';

    // Append to container
    snowflakeContainer.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
      snowflake.remove();
      snowflakeCount--; // Decrement counter when removed
    });

    snowflakeCount++; // Increment counter when created
  }

  // Generate snowflakes at intervals
  setInterval(createSnowflake, 500);
});
