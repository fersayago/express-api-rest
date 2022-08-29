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

  create(data){
    const newProduct = {
      id:  faker.datatype.uuid(),
      // name: data.name,
      // price: data.price,
      // image: data.image,
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id){
    // error forzado:
    //const name = this.getTotal();
    return this.products.find(item => item.id === id);
  }

  update(id, changes){
    // obtenemos la posicion en el array
    const index = this.products.findIndex(item => item.id === id);
    
    if (index === -1){
      throw new Error(`product matching id ${id} was not found`);
    }
    const product = this.products[index];
    
    this.products[index] = {
      ...product,
      ...changes,
    }

    return this.products[index];

  }

  delete(id){
    const index = this.products.findIndex(item => item.id === id);
    
    if (index === -1){
      throw new Error(`product matching id ${id} was not found`);
    }
    this.products.splice(index, 1);
    return {id};
  }
}

module.exports = ProductsService;