let snowflakePool = [];
const MAX_SNOWFLAKES = 20;

// Create Snowflake Pool
for (let i = 0; i < MAX_SNOWFLAKES; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄️';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.fontSize = (Math.random() * 0.5 + 0.5) + 'em'; // Ukuran kecil
    snowflake.style.opacity = Math.random();
    document.getElementById('snowflake-container').appendChild(snowflake);
    snowflakePool.push(snowflake);
}

setInterval(() => {
    const snowflake = snowflakePool.shift();
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = (Math.random() * 0.5 + 0.5) + 'em';
    snowflake.style.animation = 'none'; // Reset animation
    snowflake.offsetHeight; // Trigger reflow
    snowflake.style.animation = ''; // Restart animation
    snowflakePool.push(snowflake);
}, 500); // Loop setiap 500ms
