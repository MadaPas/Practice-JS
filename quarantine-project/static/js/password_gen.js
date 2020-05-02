//get all the ids 
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const form = document.getElementById('passwordGeneratorForm')
const uppercaseElement = document.getElementById('includeUppercase')
const numberElement = document.getElementById('includeNumbers')
const symbolElement = document.getElementById('includeSymbols')
const displayPassword = document.getElementById('password-display')


//get characters from ascii code

//A -> Z
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
//a -> z
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
//0 -> 9
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
//ignoring number 32 which is 'space'
//! -> /
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = uppercaseElement.checked
    const includeNumbers = numberElement.checked
    const includeSymbols = symbolElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    displayPassword.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    //concatenate characters 
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

    //determine the generated characters 
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}
//array of specific type of characters 
function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
//the amount the user introduces has to be same as the generated amount of characters contained in the password 
function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}