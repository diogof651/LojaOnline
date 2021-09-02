export default class Product extends HTMLElemenet{
    constructor(){
        this.super();
    }

    onClick(){
        const target = this;
        console.log('Teste componente!');
    }
}

const product  = new Product();

product.onClick();