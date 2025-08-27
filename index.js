document.addEventListener('DOMContentLoaded', postData);




const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get('fname');
const genre = params.get('genres');
const reaction = params.get('react');
const animal = params.get('animal');
const season = params.get('season');
const quality = params.get('ality');
const dessert = params.get('food');
const likely = params.get('slider');

let viralAnimal = "";
let image = "";
let text = "";

if ((animal == "mammal" || animal == "fish") && (reaction == "run" || reaction == "vioent")){
    if(season == "winter" || season == "fall"){
        viralAnimal = "Maxwell";
        image = 'images/maxwell.jpg';
        text = "A silly and defiant cat that became an internet meme as he was turned into a 3D model";
    }else{
        viralAnimal = "Moo Deng";
        image = 'images/MooDeng.jpg';
        text = "Forgive and forget? NAH resent and rememberrr bite all the kneecaps!!";
    }
}else if((animal =="bird" || animal == "reptile") && (reaction == "waterlover")){
    if(season == "winter" || season == "fall"){
        viralAnimal = "Pesto";
        image = 'images/pesto.jpg';
        text = "He's just a chonky guy.";
    }else if (likely == "5" || likely == "4"){
        viralAnimal = "Buzz";
        image = 'images/buzz.jpg';
        text = "No God could stop him, and no God would. For the Gods did not love you. Not like he did. Long Live Buzz!";
    }else{
        viralAnimal = "Maxwell";
        image = 'images/maxwell.jpg';
        text = "A silly and defiant cat that became an internet meme as he was turned into a 3D model";
    }
}else if(quality == "looks" || dessert == "ice" || genre == "romance"){
    viralAnimal = "Pesto";
    image = 'images/pesto.jpg';
    text = "He's just a chonky guy."
}else if(quality == "smart" || genre == "horror"){
    viralAnimal = "Buzz";
    image = 'images/buzz.jpg';
    text = "No God could stop him, and no God would. For the Gods did not love you. Not like he did. Long Live Buzz!";
}else{
    viralAnimal = "Moo Deng";
    image = 'images/MooDeng.jpg';
    text = "Forgive and forget? NAH resent and rememberrr bite all the kneecaps!!";
}

//html
function postData(){
    const container = document.getElementById("results");
    container.innerHTML = `<h1>You are ${viralAnimal}!</h1>
                            <img id="result-img" src="${image}"></img>
                            <p>${text}</p>`;
}