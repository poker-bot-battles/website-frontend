const countdown = document.getElementById("countdown");

const updateCountdown = () => {
  const now = new Date();
  const newYear = new Date("April 21, 2023 16:00:00");
  const distance = newYear - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance <= 0) {
    countdown.innerHTML = "Happy New Year!";
  } else {
    setTimeout(updateCountdown, 1000);
  }
};

updateCountdown();
