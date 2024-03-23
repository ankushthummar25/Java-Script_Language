function countVowels() {
    var text = document.getElementById("textInput").value.toLowerCase();
    var vowels = 'aeiou';
    var vowelCount = 0;
    for (var i = 0; i < text.length; i++) {
        if (vowels.indexOf(text[i]) !== -1) {
            vowelCount++;
        }
    }
    document.getElementById("result").innerHTML = "Number of vowels: " + vowelCount;
}
