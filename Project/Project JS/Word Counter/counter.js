const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');

textInput.addEventListener('input', updateWordCount);

function updateWordCount() {
  const text = textInput.value.trim();
  const words = text.split(/\s+/).filter(word => word !== '');
  wordCount.textContent = words.length;
}
