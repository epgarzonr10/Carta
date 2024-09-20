const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const audioElement = document.querySelector('#backgroundMusic'); 

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';


    audioElement.play();
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';


    audioElement.pause();
    audioElement.currentTime = 0;  
  }, 500);
});

const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {

  bubble.addEventListener('animationiteration', () => {

    bubble.style.top = '100vh';

    const randomX = Math.random() * 100;  
    bubble.style.left = `${randomX}vw`;  

  });


  const randomX = Math.random() * 100;
  bubble.style.left = `${randomX}vw`;
  bubble.style.top = '100vh';  
});

