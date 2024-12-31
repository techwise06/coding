const countdownButton = document.getElementById('countdownButton');
const countdown = document.getElementById('countdown');

countdownButton.addEventListener('click', () => {
    const nextYear = new Date(`January 1, 2025 00:00:00`).getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = nextYear - now;

        if (distance < 0) {
            clearInterval(timer);
            countdown.innerHTML = "🎉 Happy New Year 2025! 🎆";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
});
