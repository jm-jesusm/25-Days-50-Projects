/**
 * Removes the class 'active' of all cards and add it only to the clicked one
 * @param event
 *  */ 
function setUniqueActiveClass(event) {
    cards.forEach(card => {
        card.classList.remove('active')
    })
    event.currentTarget.classList.add('active')
}

const cards = document.querySelectorAll('article')
cards.forEach(card => {
    card.addEventListener('click', setUniqueActiveClass)
})