/* •☽────✧˖°˖Setup mapbutt˖°˖✧────☾• */

const mapBtn = document.querySelector("#mapbutt");
const mapdiv = document.getElementById("minimap");
mapBtn.addEventListener('click', function openmap() {
  console.log('display is: ', getComputedStyle(mapdiv).display)
  if (getComputedStyle(mapdiv).display == 'none') {
    mapdiv.style.display = 'block'
  } else {
    mapdiv.style.display = 'none'
  }
})

/* •☽────✧˖°˖Setup item clickies˖°˖✧────☾• */

const soundBtn = document.getElementsByClassName("item");
const audioFolder = "./audio/";
const audioFiles = ["Tiny_Pop_01.wav", "Tiny_Pop_02.wav", "Tiny_Pop_03.wav", "Tiny_Pop_05.wav", "Tiny_Pop_06.wav", "Tiny_Pop_07.wav", "Tiny_Pop_08.wav", "Tiny_Pop_09.wav"];
const bgDiv = document.getElementById("character");
const bgImage = "./media/GA-Cat3.gif";
const originalBgImage = bgDiv.style.backgroundImage;

const audioElements = audioFiles.map((file, i) => {
  const audio = new Audio(audioFolder + audioFiles[i]);
  audio.load();
  return audio;
})

for (const btn of soundBtn) {
  btn.addEventListener("click", () => {
    const randomAudioIndex = Math.floor(Math.random() * audioFiles.length);
    audioElements[randomAudioIndex].play();

    bgDiv.style.backgroundImage = `url('${bgImage}')`;

    setTimeout(() => {
      bgDiv.style.backgroundImage = originalBgImage;
    }, 1000);
  });
}

/* •☽────✧˖°˖Setup target clickies˖°˖✧────☾• */

const buggies = ["./media/GA_bug1.png"];
const target = document.getElementsByClassName("target")[0];
const targetaudio = new Audio("./target/Stars_complete_Level_02.wav");
targetaudio.load();

target.addEventListener('click', function exposehim(){
  const randombugy = Math.floor(Math.random() * buggies.length);
    targetaudio.play();
    target.style.width = '50px';
    target.style.height = '50px';
    target.style.transform = 'scale(200%)';
    target.src= buggies[randombugy];

    bgDiv.style.backgroundImage = `url('./media/GA-Cat4.gif')`;

    setTimeout(() => {
        bgDiv.style.backgroundImage = originalBgImage;
      }, 2000);
}, { once: true })
