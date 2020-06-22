const color = Object.freeze({
    red: "red",
    green: "green",
    blue: "blue"
})
const size = Object.freeze({
    small: "small",
    medium: "medium",
    large: "large"
})

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

class ProductFilter {
    filterByColor(products, color) {
        return products.filter(p => p.color == color);
    }

    filterBySize(products, size) {
        return products.filter(p => p.size == size);
    }
}

let apple = new Product("apple", color.green, size.small)
let tree = new Product("tree", color.blue, size.medium)
let house = new Product("house", color.red, size.large)
let products = [apple, tree, house];
let pf = new ProductFilter();
console.log(`green product only`)
for (let p of pf.filterByColor(products, color.green))
    console.log(`${p.name} is green`)
