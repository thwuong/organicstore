export function errorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    message: err.message,
    success: false,
  });
}
export function createError(statusCode, message) {
  var err = new Error(message);
  err.statusCode = statusCode;

  return err;
}
