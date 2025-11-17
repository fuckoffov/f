/* ========= ЗАПУСК ВИДЕО И МУЗЫКИ ПО КЛИКУ ========= */

const startOverlay = document.getElementById("startOverlay");
const bgVideo = document.getElementById("bgVideo");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const volumeSlider = document.getElementById("volumeSlider");
const iconPlay = document.getElementById("iconPlay");
const iconPause = document.getElementById("iconPause");

bgVideo.pause();

 // Треки
  const tracks = [
    "project/media/track1.mp3",
    "project/media/track2.mp3",
    "project/media/track3.mp3",
    "project/media/track4.mp3",
    "project/media/track5.mp3"
  ];
  let currentTrack = 0;


function startRandomTrack() {
    let random = Math.floor(Math.random() * tracks.length);
    bgMusic.src = tracks[random];
    bgMusic.volume = volumeSlider.value / 100;
    bgMusic.play().then(()=>{
        iconPlay.style.display = "none";
        iconPause.style.display = "block";
    });
}

document.addEventListener("click", function starter() {

    if (bgVideo.paused) bgVideo.play();
    startRandomTrack();

    startOverlay.classList.add("hidden");
    document.removeEventListener("click", starter);
});

/* ===== PLAY / PAUSE ===== */
musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        iconPlay.style.display = "none";
        iconPause.style.display = "block";
    } else {
        bgMusic.pause();
        iconPause.style.display = "none";
        iconPlay.style.display = "block";
    }
});

/* ===== SHUFFLE ===== */
shuffleBtn.addEventListener("click", () => {
    startRandomTrack();
});

/* ===== VOLUME ===== */
volumeSlider.addEventListener("input", () => {
    bgMusic.volume = volumeSlider.value / 100;
});

/* ===== HIDE BUTTON ===== */
document.getElementById("toggleBtn").addEventListener("click", () => {
    document.getElementById("card").classList.toggle("hidden");
    document.getElementById("volumeBox").classList.toggle("hidden");
    musicBtn.classList.toggle("hidden");
    shuffleBtn.classList.toggle("hidden");

    const close = document.getElementById("iconClose");
    const show = document.getElementById("iconShow");

    if (close.style.display !== "none") {
        close.style.display = "none";
        show.style.display = "block";
    } else {
        close.style.display = "block";
        show.style.display = "none";
    }
});
