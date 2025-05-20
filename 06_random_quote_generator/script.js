
var quote = document.querySelector("#quote");
var author = document.querySelector(".author #name");
var newQuote = document.querySelector("#new-quote");
var sound = document.querySelector("#sound");
var copy = document.querySelector("#copy");
var twitter = document.querySelector("#twitter");
var copied = document.querySelector("#copied-successfully");

newQuote.addEventListener("click", function(){
    newQuote.classList.add("loading");
    newQuote.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        quote.innerText = result.content;
        author.innerText = result.author;
        newQuote.innerText = "New Quote";
        newQuote.classList.remove("loading");
    } )
});

sound.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerText);

    copied.style.display = 'block';
    copied.classList.add('copied-success');

    setTimeout( ()=>{
        copied.style.display = 'none';
        copied.classList.remove('copied-success');
    }, "2500");
})

twitter.addEventListener("click", ()=>{
    let tweetUrl = `https://x.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweetUrl, "_blank");
});