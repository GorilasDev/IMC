

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const AlertError = {
    error: document.querySelector('.alert-error'),

    open() {
        AlertError.error.classList.add('open')
    },

    close() {
        AlertError.error.classList.remove('open')
    }

}

// Modal

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal .close'),

    open(message) {
        if (message) {
            this.message.innerText = message;
        }
        this.wrapper.classList.add('open');
    },

    close() {
        this.wrapper.classList.remove('open');
    },
}


Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

    function handleKeydown(event) {

    if (event.key === 'Escape') {
    Modal.close ()
    }

}

function CalculateIMC (height, weight) {
    return (weight / ( (height/100)**2   )).toFixed(2)
    
}

function notANumber(value) {
    return isNaN(value) || value == ""

}


form.onsubmit = function(event) {
    
    event.preventDefault()
    
    const height = inputHeight.value
    const weight = inputWeight.value



    const weightOrHeightIsNotANumber = notANumber(height) || notANumber(weight)

    if (weightOrHeightIsNotANumber) {
        console.log("Error")
        AlertError.open()
        return;
    }

    AlertError.close()
    

    
    const result = CalculateIMC (height,weight)
    
    const message = `Seu IMC é ${result}`
    
    form.reset();
    
    Modal.open(message);

    inputWeight.focus(); // adiciona essa linha de código
    





    
    
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
