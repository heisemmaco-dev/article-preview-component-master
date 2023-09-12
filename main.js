let theHoverButton = document.querySelector('.theHoverButton')
let theItems = document.getElementById('onClick')
let tg = document.querySelectorAll(
    "body, main div:not(#onClick) ~ *, main div:not(#onClick) > * "
  );
console.log(tg);
handleClick = () => {
    theItems.classList.replace('disappear', 'whenClick') 
    theHoverButton.classList.replace('theHoverButton', 'secondhover')
}

theHoverButton.addEventListener('click', handleClick)

window.onclick = (e) => {
    if (theItems.classList.contains("whenClick")) {
      for (i = 0; i < tg.length; i++) {
        if (e.target === tg[i]) {
          //console.log("something happened?");
          theItems.classList.replace('whenClick', 'disappear')
          theHoverButton.classList.replace('secondhover', 'theHoverButton')
        }
      }
    }
  };


