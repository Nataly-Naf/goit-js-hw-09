import { refs } from "./refs";
let timerId = null;
export function onStartBtnClick() {
      setInterval(() => {
       const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = `${randomColor}`;
          refs.startBtn.disabled = true 
          refs.stopBtn.disabled=false
    }, 1000)

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export function onStopBtnClick () {
  clearInterval(timerId);
  refs.startBtn.disabled = false;  
  refs.stopBtn.disabled=true
}




