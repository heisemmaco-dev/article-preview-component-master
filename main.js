let theHoverButton = document.querySelector('.theHoverButton')
let theItems = document.getElementById('onClick')

handleClick = () => {
    if (theItems.classList.contains('whenClick') && theHoverButton.classList.contains('secondhover')) {
        theItems.classList.replace('whenClick', 'disappear')
        theHoverButton.classList.replace('secondhover', 'theHoverButton')
    } else if (theItems.classList.contains('disappear') && theHoverButton.classList.contains('theHoverButton')) {
        theItems.classList.replace('disappear', 'whenClick') 
        theHoverButton.classList.replace('theHoverButton', 'secondhover')
    }
}

theHoverButton.addEventListener('click', handleClick)




