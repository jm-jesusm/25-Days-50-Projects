/**
 * Adds one to the current step and add the active class
 * Disable the next button if there are no more steps
 */
function handleNext() {
    currentStep++
    $steps[currentStep].classList.add('active')

    updateProgressBar()

    if(currentStep === NUMBER_OF_STEPS-1)
        $nextButton.disabled = true
    else
        $prevButton.disabled = false
}

/**
 * Substract one to the current step and remove the active class
 * Disable the prev button if there are no lower steps
 */
function handlePrev() {
    $steps[currentStep].classList.remove('active')
    currentStep--

    updateProgressBar()

    if(currentStep === 0)
        $prevButton.disabled = true
    else
        $nextButton.disabled = false
}

/**
 * Edit the inline width of the progressBar
 */
function updateProgressBar() {
    $progressBar.style.width = `${(currentStep)/(NUMBER_OF_STEPS-1)*100}%`;
}

const NUMBER_OF_STEPS = 4
// For easier code, starts at 0 
let currentStep = 0

const $progressBar = document.querySelector('.progress-bar .current')
const $steps = document.querySelectorAll('.container .step')
const $prevButton = document.querySelector('.buttons button:first-child')
const $nextButton = document.querySelector('.buttons button:last-child')

$prevButton.addEventListener('click', handlePrev)
$nextButton.addEventListener('click', handleNext)