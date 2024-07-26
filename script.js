class Recipe {
    constructor() {
        this.name = ""
        this.text = ""
        this.ingredients = []
    }
    
    addIngredient(name, weight) {
        this.ingredients.push({ food: name, weight: weight })
    }
    
    setName(name) {
        this.name = name
    }
    
    setText(text) {
        this.text = text
    }
}

let vegetables = []
let salade = new Recipe()
let activeSalad = new Recipe()
let summerSaladeButton = document.querySelector("#summerSaladeButton")
let newSaladeButton = document.querySelector("#newSaladeButton")
let saladDetails = document.getElementById("saladDetails")
let ingredientGrid = document.getElementById("ingredientGrid")
let popup = document.getElementById("popup")
let closePopup = document.querySelector(".close")
let saladNameInput = document.getElementById("saladNameInput")
let confirmButton = document.getElementById("confirmSaladName")

//cards
fetch('food.json')
    .then((response) => response.json())
    .then((json) => vegetables = json)

setTimeout(() => {
    let createCards = function (element) {
        let card = document.createElement("div")
        card.classList.add("card")
        ingredientGrid.appendChild(card)
        let photo = document.createElement("img")
        let title = document.createElement("h2")
        let button = document.createElement("button")
        card.appendChild(photo)
        card.appendChild(title)
        card.appendChild(button)
        button.innerText = "add to recipe"
        title.innerText = element.name
        photo.src = "img/" + element.image
    }

    //summer salad
    let displaySummerSalad = function () {
        saladDetails.innerHTML = `<h3> ${salade.name} </h3><p> ${salade.text} </p>`
        ingredientGrid.innerHTML = ""
        salade.ingredients.forEach(element => {
            createCards(element.food)
        })
    }

    summerSaladeButton.onclick = function () {
        salade.setName("Summer Salad")
        salade.setText("1. Clean all vegetables. 2. Cut all the vegetables. 3. Put them all into a plate. 4. Add some salt and pepper.")
        salade.addIngredient(vegetables[28], 300)
        salade.addIngredient(vegetables[21], 400)
        salade.addIngredient(vegetables[39], 30)
        displaySummerSalad()
    }


    newSaladeButton.onclick = function() {
        popup.style.display = "block"
    }
    closePopup.onclick = function() {
        popup.style.display = "none"
    }
    confirmButton.onclick = function() {
        popup.style.display = "none"
        activeSalad.setName(saladNameInput.value)
        createCards(element.food)
    }   
}, 500)