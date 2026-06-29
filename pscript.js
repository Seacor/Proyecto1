const songs = [
  {
    title: "JoyRide",
    artist: "Cortis",
    src: "music/1.mp3",
    cover: "images/1.jpg"
  },
  {
    title: "Kalam Eineh",
    artist: "Sherine",
    src: "music/2.mp3",
    cover: "images/2.jpg"
  },
  {
    title: "Kick it 4 Now",
    artist: "TNX",
    src: "music/3.mp3",
    cover: "images/3.png "
  },
  {
    title: "Lucky Girl Syndrome",
    artist: "Illit",
    src: "music/4.mp3",
    cover: "images/4.jpg "
  }
  ,
   {
    title: "Any",
    artist: "Stray Kids",
    src: "music/5.mp3",
    cover: "images/5.jpg"
  },
  {
    title: "Delulu",
    artist: "KiiiKiii",
    src: "music/6.mp3",
    cover: "images/6.png"
  },
  {
    title: "I GOT YOU",
    artist: "TWICE",
    src: "music/7.mp3",
    cover: "images/7.png "
  },
  {
    title: "Lago an el Cielo",
    artist: "Gustavo Cerati",
    src: "music/8.mp3",
    cover: "images/8.jpg "
  }
  , {
    title: "Puente",
    artist: "Gsutavo Cerati",
    src: "music/9.mp3",
    cover: "images/9.jpg"
  },
  {
    title: "잠시",
    artist: "BTS",
    src: "music/10.mp3",
    cover: "images/10.jpg"
  },
  {
    title: "Breathe In Breathe Out",
    artist: "Blanks",
    src: "music/11.mp3",
    cover: "images/11.jpg "
  },
  {
    title: "An guten Tagen",
    artist: "Johannes Oerding",
    src: "music/12.mp3",
    cover: "images/12.jpg "
  },
   {
    title: "Stiehl mir die show ",
    artist: "Wincent Weiss",
    src: "music/13.mp3",
    cover: "images/13.jpg"
  },
  {
    title: "Capulí",
    artist: "Luz Pinos",
    src: "music/14.mp3",
    cover: "images/14.jpg"
  },
  {
    title: "Matsuri",
    artist: "Fuji Kaze",
    src: "music/15.mp3",
    cover: "images/15.jpg "
  },
  {
    title: "Miracle",
    artist: "NCT Wish",
    src: "music/16.mp3",
    cover: "images/16.jpg "
  }
  , {
    title: "I DO ME",
    artist: "KiiiKiii",
    src: "music/17.mp3",
    cover: "images/17.jpg"
  },
  {
    title: "What you Want",
    artist: "Cortis",
    src: "music/18.mp3",
    cover: "images/18.jpg"
  },
  {
    title: "Feel Special",
    artist: "Twice",
    src: "music/19.mp3",
    cover: "images/19.jpg "
  },
  {
    title: "Shout Out",
    artist: "Enhypen",
    src: "music/20.mp3",
    cover: "images/20.jpg "
  }
  ,
];
const backBtn = document.getElementById("backBtn");
let current = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const list = document.getElementById("list");
const progressBar = document.getElementById("progressBar");
const playBtn = document.getElementById("playBtn");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
function loadSong(index) {
  const song = songs[index];

  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;

  progressBar.style.width = "0%";

  playBtn.textContent = "▶";
  isPlaying = false;
}

/* PLAY */
function playSong() {
  audio.play();
  playBtn.textContent = "❚❚";
  isPlaying = true;
}

/* PAUSE */
function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶";
  isPlaying = false;
}

/* TOGGLE */
function togglePlay() {
  if (!audio.src) loadSong(current);

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

/* NEXT */
function nextSong() {
  current = (current + 1) % songs.length;
  loadSong(current);
  playSong();
}

/* PREV */
function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  playSong();
}

/* PROGRESS BAR */
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + "%";
});

/* CLICK SEEK */
document.querySelector(".progress-container").addEventListener("click", (e) => {
  const width = e.currentTarget.clientWidth;
  const clickX = e.offsetX;

  audio.currentTime = (clickX / width) * audio.duration;
});
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";

  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);

  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}
audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});
audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audio.currentTime);

  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + "%";
});
currentTimeEl.textContent = "0:00";
durationEl.textContent = "0:00";
/* INIT */
loadSong(current);
renderList();

function renderList() {
  list.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;

    li.onclick = () => {
      current = index;
      loadSong(current);
      playSong();
    };

    list.appendChild(li);
  });
}
backBtn.addEventListener("click", () => {

    window.location.href = "menu.html";

});