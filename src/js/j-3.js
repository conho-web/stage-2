let min = document.querySelector(".timer__min");
let seconds = document.querySelector(".timer__sec");
let start = document.querySelector(".timer__start");
let stopTimer = document.querySelector(".timer__stop");
let reset = document.querySelector(".timer__reset");
let field = document.querySelector(".timer__field");
let music = document.querySelector(".timer__music");
let timerInterval;

const timerReset = () => {
  clearInterval(timerInterval);
  field.innerHTML = "00:00";
  min.value = 0;
  seconds.value = 0;
  start.removeAttribute("disabled");
  music.innerHTML = `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1010650945&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-290737429" title="RX_S0ŪŊĐW∆VĒ" target="_blank" style="color: #cccccc; text-decoration: none;">RX_S0ŪŊĐW∆VĒ</a> · <a href="https://soundcloud.com/user-290737429/smeshariki-balamut-i-obormot-phonk-remixproof-nation" title="Смешарики - Баламут И Обормот (Phonk Remix)(Proof Nation)" target="_blank" style="color: #cccccc; text-decoration: none;">Смешарики - Баламут И Обормот (Phonk Remix)(Proof Nation)</a></div>`;
};

const timerWork = () => {
  music.innerHTML = "";

  if (+seconds.value !== 0) {
    +seconds.value--;
    field.innerHTML = `${+min.value}:${+seconds.value}`;

    if (+seconds.value < 10) {
      field.innerHTML = `${+min.value}:0${+seconds.value}`;
    }
  }
  
  else if (+min.value < 10 && +min.value > 0 && +seconds.value === 0) {
    seconds.value = 59;
    +min.value--;
    field.innerHTML = `0${+min.value}:${+seconds.value}`;
  } 
  
  else if (+seconds.value === 0 && +min.value !== 0) {
    seconds.value = 59;
    +min.value--;
    field.innerHTML = `${+min.value}:${+seconds.value}`;
  } 
  
  else if (+seconds.value === 0 && +min.value === 0) {
    timerReset();
  }
};

const timerStart = () => {
  if (+seconds.value < 0 || +min.value < 0) {
    alert("Неверное значение!");
    return;
  }

  timerInterval = setInterval(timerWork, 1000);
  start.setAttribute("disabled", "true");
};

const timerStop = () => {
  clearInterval(timerInterval);
  start.removeAttribute("disabled");
};

start.addEventListener("click", timerStart);
stopTimer.addEventListener("click", timerStop);
reset.addEventListener("click", timerReset);