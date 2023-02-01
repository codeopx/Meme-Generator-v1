const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");

const memeImage = document.querySelector(".meme-generator img");

const memeTitle = document.querySelector(".meme-generator .meme-title");

const memeAuthor = document.querySelector(".meme-generator .meme-author");

const UpdateDetails = (url, tittle, author) => {
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = tittle;
    memeAuthor.innerHTML = author;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        UpdateDetails(data.url, data.title, data.author);
    });
    
    
};

generateMemeBtn.addEventListener("click", generateMeme);

