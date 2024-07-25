let section = document.querySelector("section")
class Recipe {
    name;
    text;
    ingridient = [];
    addIngridient = function(name,weight){
        this.ingridient.push({
            food:name,weight:weight
        })
    };
    setname = (name) => {
        this.name = name
    } 
    settext = (text) => {
        this.text = text
    } 
}


let vegetables = []
let salade = new Recipe()
let SaladeButton = document.querySelector("button")

fetch('food.json')
    .then((response) => response.json())
    .then((json) => vegetables = json );



let CreateCards = function(element) {
    let card = document.createElement("div")
    card.classList.add("card")
    section.appendChild(card)
    let photo = document.createElement("img")
    let title = document.createElement("h2")
    let button = document.createElement("button")
    card.appendChild(photo)
    card.appendChild(title)
    card.appendChild(button)
    button.innerText= "add to recipe"
    title.innerText = element.name
    photo.src = "img/" + element.image
}
setTimeout(() => {
    vegetables.forEach(element => {
        CreateCards(element)
    });
    salade.setname("SummerSalade")
    salade.settext("1.clean all vegetables. 2.Cut all the vegetables. 3.Put them all into a plate. 4.Add some salt and pepper")
    salade.addIngridient(vegetables[28],300)
    salade.addIngridient(vegetables[21],400)
    salade.addIngridient(vegetables[39],30)
    SaladeButton.onclick = () => {
        section.innerHTML = "<h3>" + salade.name + "</h3>" + "<p>" + salade.text + "</p>"
        salade.ingridient.forEach(element => {
            CreateCards(element.food)
            console.log(element)   
        });
    }
},1000)


