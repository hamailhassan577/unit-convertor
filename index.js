/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector("#main-input")
const buttonEl = document.querySelector("#convert-btn")
const lengthEl = document.querySelector("#length-convertor")
const volumeEl = document.querySelector("#volume-convertor")
const massEl = document.querySelector("#mass-convertor")


buttonEl.addEventListener("click", function(){

    let valueToBeConverted = inputEl.value
    lengthConvertor(valueToBeConverted)
    volumeConvertor(valueToBeConverted)
    massConvertor(valueToBeConverted)


})


function lengthConvertor(value) {
    let meterToFeet = value*3.281
    let feetToMeter = value/3.281

    lengthEl.innerHTML = `${value} meters = ${meterToFeet.toFixed(2)} feets | ${value} feet = ${feetToMeter.toFixed(2)} meters`

}

function volumeConvertor(value) {
    let literToGallon = value*0.264
    let gallonToLiter = value/0.264

    volumeEl.innerHTML = `${value} liters = ${literToGallon.toFixed(2)} gallons | ${value} gallons = ${gallonToLiter.toFixed(2)} liters`
}

function massConvertor(value) {
    let kiloToPound = value*2.204
    let poundToKilo = value/2.204

    massEl.innerHTML = `${value} kilos = ${kiloToPound.toFixed(2)} pounds | ${value} pounds = ${poundToKilo.toFixed(2)} kilos`
}