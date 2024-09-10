
function speak() {
    var text = document.getElementById("text").value;
    var speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
