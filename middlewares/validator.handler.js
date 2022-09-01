const boom = require('@hapi/boom')

function validatorHandler(schema, property) {
  // con el closure creamos un middleware de forma dinamica
  return (req, res, next) => {
    const data = req[property]; // dinamico ya que puede venir en body, params o query
    const { error } = schema.validate(data, { abortEarly: false }); // envia todos los errores y no corta al encontrar el primero
    if (error) {
      next(boom.badRequest(error));
    }
    next(); // si no hay error sigue
  }
}

module.exports = validatorHandler;