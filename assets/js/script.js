const foods = ['Apple', 'Banana', 'Orange', 'Carrot', 'Broccoli', 'Chicken', 'Fish', 'Pasta', 'Pizza', 'Salad'];

function displayRandomFood() {
    const randomIndex = Math.floor(Math.random() * foods.length);
    const randomFood = foods[randomIndex];
    let buttonFields = document.getElementsByTagName('button');
    for (let i = 0; i < buttonFields.length; i++) {
        buttonFields[i].addEventListener('click', function() {
            alert(`${i}`);
        });
    }
    const randomFoodField = document.getElementById('randomFood');
    
    randomFoodField.textContent = randomFood;
}