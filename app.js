// document.getElementById("joke").innerText = "Hello world"

// let getJoke = document.getElementById("joke");

// getJoke.innerHTML = "I am a joker";




function makeJoke(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        var joke = data.value;
        console.log("JOKE:" , joke);
        let getJoke = document.getElementById("joke");
        getJoke.innerHTML =`"${joke}" ~ Chuck Norris` ;
    }
    )
    .catch()
}


 let jokebtn = document.getElementById("makeajoke");
 
 jokebtn.addEventListener('click',makeJoke);

