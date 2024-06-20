const toggleTheam = document.getElementById("switch");
const body = document.body;
const cuurTheam = body.getAttribute('data-theam');
body.setAttribute('data-theam', "light");
localStorage.setItem('theam', "light");

toggleTheam.addEventListener("click", () => {
    const currTheam =localStorage.getItem('theam');
     const newTheam = currTheam === "dark" ? "light" : "dark";
     localStorage.setItem('theam', newTheam);
     body.setAttribute('data-theam', newTheam);
})


// loading
window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector('.loading-section').classList.add('loaded');
      }, 2000);
  });

//   logout
let logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", function(){
    alert("You are successfully logged out !!!")
    window.location.assign("index.html");
})


//music
// drop down select box
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// music

const app = () => {
  const song = document.querySelector(".song");
  const playBtn = document.getElementById("play");
  const musicContainer = document.getElementById("music-container");

  // sounds
  const sounds = document.querySelectorAll(".music-img");

  // play song
  function playSong() {
    musicContainer.classList.add("play");
    song.play();
  }
  // pause
  function pauseSong() {
    musicContainer.classList.remove("play");
    song.pause();
  }

  // event
  playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  // pick different sounds
  sounds.forEach((sound) => {
    sound.addEventListener("click", function () {
      song.src = this.getAttribute("data-sound");
      playSong(song);
    });
  });
};

app();

const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const pauseBtn = document.querySelector(".pause");
const audio = document.querySelector(".song");

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// volume

// mute
const volumeContainer = document.querySelector(".volume-container");
const muteBtn = document.getElementById("volume_icon");

let replayBtn = document.querySelector(".replayBtn");
// volume

let volumeSlider = document.getElementById("volume");
const volume_value_el = document.getElementById("volume_show");
const changeBgTo = (color) => (volumeSlider.style.background = color);

volumeSlider.addEventListener("input", () => {
  const value = volumeSlider.value;

  if (value <= 15) changeBgTo("#A333C8 ");
  else if (value > 15 && value <= 30) changeBgTo("#2185D0");
  else if (value > 30 && value <= 50) changeBgTo("#6435C9");
  else if (value > 50 && value <= 65) changeBgTo("#21BA45");
  else if (value > 65 && value <= 80) changeBgTo("#FBBD08");
  else changeBgTo("#DB2828");

  volume_value_el.innerText = value;
  volume_value_el.style.opacity = 1;
  volumeSlider.style.boxShadow = "0 5px 15px rgba(255,255,255,0.15)";
});
// Pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  audio.pause();
}

function muteToggle(audio) {
  if (audio.muted === false) {
    audio.muted = true;
  } else {
    audio.muted = false;
  }
}
// // change volume
function volume_change() {
  // volume_show.innerHTML = volumeSlider;
  audio.volume = volumeSlider.value / 100;
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

function replay() {
  musicContainer.classList.add("replay");
  audio.loop = true;
}
function norep() {
  musicContainer.classList.remove("replay");
  audio.loop = false;
}
// event listeners

pauseBtn.addEventListener("click", () => {
  pauseSong();
});

muteBtn.addEventListener("click", function () {
  if (audio.muted === false) {
    volumeContainer.querySelector("i.fa").classList.remove("fa-volume-up");
    volumeContainer.querySelector("i.fa").classList.add("fa-volume-mute");
  } else {
    volumeContainer.querySelector("i.fa").classList.add("fa-volume-up");
    volumeContainer.querySelector("i.fa").classList.remove("fa-volume-mute");
  }
  muteToggle(audio);
});
// replay
replayBtn.addEventListener("click", () => {
  let isMuted = musicContainer.classList.contains("replay");
  if (isMuted) {
    norep();
  } else {
    replay();
  }
});

volume.addEventListener("change", () => {
  volume_change();
});

// Time/song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

//filter
//selecting all required elements
const filterItem = document.querySelector(".category-container");
const filterImg = document.querySelectorAll(".music-content");

//after window loaded
filterItem.onclick = (selectedItem) => {
  //if user click on filterItem div
  if (selectedItem.target.classList.contains("music-category")) {
    let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
    filterImg.forEach((musicContent) => {
      let filterImges = musicContent.getAttribute("data-name"); //getting image data-name value
      if (filterImges == filterName || filterName == "all") {
        musicContent.classList.remove("hide"); //first remove the hide class from the image
        musicContent.classList.add("show"); //add show class in image
      } else {
        musicContent.classList.add("hide"); //add hide class in image
        musicContent.classList.remove("show"); //remove show class from the image
      }
    });
  }
};