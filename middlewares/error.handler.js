function logErrors (err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next){
  // revisa que el error sea de tipo boom
  if (err.isBoom){
    const { output } = err;
    // se agrega un return para que corte la ejecución de los middlewares
    return res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };