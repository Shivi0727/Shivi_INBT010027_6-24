// script.js
document.getElementById('translate-button').addEventListener('click', function() {
    const text = document.getElementById('input-text').value;
    const targetLang = document.getElementById('language-select').value;

    fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('translated-text').innerText = data.responseData.translatedText;
        })
        .catch(error => {
            document.getElementById('translated-text').innerText = 'Error occurred while translating';
            console.error('Error:', error);
        });
});
