let snowflakePool = [];
const MAX_SNOWFLAKES = 20;

// Create Snowflake Pool
for (let i = 0; i < MAX_SNOWFLAKES; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄️';

    // Inisialisasi posisi acak
    resetSnowflake(snowflake);

    // Tambahkan snowflake ke DOM
    document.getElementById('snowflake-container').appendChild(snowflake);
    snowflakePool.push(snowflake);
}

// Fungsi untuk mengatur ulang snowflake
function resetSnowflake(snowflake) {
    const randomLeft = Math.random() * window.innerWidth; // Posisi horizontal acak
    const randomDuration = Math.random() * 3 + 2; // Durasi animasi 2-5 detik
    const randomSize = Math.random() * 0.5 + 0.3; // Ukuran lebih kecil (0.3em-0.8em)
    const randomOpacity = Math.random() * 0.7 + 0.3; // Opacity acak (0.3-1)

    snowflake.style.left = `${randomLeft}px`;
    snowflake.style.fontSize = `${randomSize}em`;
    snowflake.style.opacity = randomOpacity;
    snowflake.style.animationDuration = `${randomDuration}s`;

    // Reset animasi untuk memastikan gerakan dimulai dari atas
    snowflake.style.animation = 'none';
    snowflake.offsetHeight; // Trigger reflow
    snowflake.style.animation = ''; // Restart animation
}

// Loop untuk mengatur ulang snowflake ketika selesai animasi
setInterval(() => {
    const snowflake = snowflakePool.shift(); // Ambil snowflake pertama
    resetSnowflake(snowflake); // Atur ulang
    snowflakePool.push(snowflake); // Masukkan ke belakang pool
}, 500); // Ulangi setiap 500ms
