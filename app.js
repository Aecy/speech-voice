/*---------------------------------------------------------------------
    Author: Snake "Aecy" Erkans
    Website: https://armapps.net

    N'utilisez pas ce script sans la permission de l'auteur.
----------------------------------------------------------------------*/

const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const style = document.querySelector("link#style")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()

recognition.onstart = function () {}

recognition.onresult = function (e) {
    const transcript = e.results[e.resultIndex][0].transcript
    readOutLoud(transcript)
}

btn.addEventListener('click', () => {
    recognition.start()
})

function readOutLoud (msg) {
    const speech = new SpeechSynthesisUtterance()

    if (msg.includes('comment ça va')) {
        finalText = "Nique ta mère"
        speech.text = finalText
    } else if (msg.includes('mode sombre')) {
        finalText = "Mode sombre du site internet activé"
        speech.text = finalText
        style.href = "dark.css"
    } else if (msg.includes('mode normal')) {
        finalText = "Mode normal du site internet activé"
        speech.text = finalText
        style.href = "flat.css"
    } else if (msg.includes('Facebook')) {
        window.open('https://facebook.com')
        finalText = "Je vous ai ouvert facebook"
        speech.text = finalText
    } else {
        speech.text = msg
    }
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}
