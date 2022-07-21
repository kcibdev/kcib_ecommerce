const errorHandler = (err, req, res, next) => {
  const statusCode = !res.statusCode ? 500 : res.statusCode;
  //TODO: stack the error later
  res.status(statusCode).json({
    message: err.message,
    success: false,
    stack: err.stack,
  });
};

module.exports = { errorHandler };
