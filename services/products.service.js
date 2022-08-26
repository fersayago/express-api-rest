const faker = require('faker')

class ProductsService{

  constructor(){
    this.products = [];
    // cada vez que se inicie una instancia del servicio, se van a generar los 100 productos iniciales
    this.generate()
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.image(),
      })
    }
  }

  create(){

  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }
}

module.exports = ProductsService;