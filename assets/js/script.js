function foodName(){
 
}


    function displayRandomFood() {
        let foods =[rice,pineapple,egg,water,butter,zinc];
        const randomIndex = Math.floor(Math.random() * foods.length);
        const randomFood = foods[randomIndex];
        const randomFoodField = document.getElementById('randomFood');
        randomFoodField.textContent = randomFood;
}