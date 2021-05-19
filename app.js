let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    //getters and setters for appetizers, mains and desserts
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizer) {
        this._courses.appetizers = appetizer;
    },
    set mains(main) {
        this._courses.mains = main;
    },
    set desserts(dessert) {
        this._courses.desserts = dessert;
    },
    //getter for _courses object
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    //methods
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is ${totalPrice}`;
    }
};
//adding appetizers
menu.addDishToCourse('appetizers', 'cheese', 3.5);
menu.addDishToCourse('appetizers', 'tuna salad', 5.25);
menu.addDishToCourse('appetizers', 'buttered oyster', 4.75);

//adding mains
menu.addDishToCourse('mains', 'chicken adobo', 15.75);
menu.addDishToCourse('mains', 'pork steak', 18.25);
menu.addDishToCourse('mains', 'beef broccoli', 22.5);

//adding desserts
menu.addDishToCourse('desserts', 'chocolate mousse', 7.25);
menu.addDishToCourse('desserts', 'banana split', 6.5);
menu.addDishToCourse('desserts', 'ice scream', 6.75);

//generate a meal
let meal = menu.generateRandomMeal();
console.log(meal);
