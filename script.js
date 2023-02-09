const form = document.getElementsByClassName('form')[0] 
const campos = document.querySelectorAll('.required') // Vai pegar todos os elementos que possuem a classe "required" //
const spans = document.querySelectorAll('.span')
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const numbers = /^[0-9-'-'-'()']+$/

function setError(index){
    campos[index].style.border = '1.5px solid red'
    spans[index].style.display = 'block'
}

function removeError(index) {
    campos[index].style.border = ''
    spans[index].style.display = 'none' 
}

function nameValidate(){
    if(campos[0].value.length < 3) {
        setError(0)
    } else {
        removeError(0) 
    }
}

function nicknameValidate(){
    if(campos[1].value.length < 3) {
        setError(1)
    } else {
        removeError(1) 
    }
}

function emailValidate(){
    if(emailRegex.test(campos[2].value)) {
        removeError(2)
    } else {
        setError(2)
    }
}

function numberValidate(){
    if(numbers.test(campos[3].value)) {
        removeError(3)
    } else {
        setError(3)
    }
}

function alphanumeric(){
    var letterNumber = /^[0-9a-zA-Z-'-'-' ']+$/
    if(campos[4].value.match(letterNumber) && campos[4].value.length > 13) {
        removeError(4)
    } else {
        setError(4)
    }
}