const faker = require('faker')
const boom = require('@hapi/boom');

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
        isBlocked: faker.datatype.boolean()
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
    const product = this.products.find(item => item.id === id);
    if (!product){
      throw boom.notFound('product not found');
    }
    if (product.isBlocked){
      throw boom.conflict('product is blocked');
    }
    return product;
  }

  update(id, changes){
    // obtenemos la posicion en el array
    const index = this.products.findIndex(item => item.id === id);
    
    if (index === -1){
      throw boom.notFound('product not found');
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
      throw boom.notFound(`product matching id ${id} was not found`);
    }
    this.products.splice(index, 1);
    return {id};
  }
}

module.exports = ProductsService;