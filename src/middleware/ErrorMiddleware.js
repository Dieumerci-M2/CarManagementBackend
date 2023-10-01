/**
 * Define middleware function's name and export It.
 * Middleware often has three parameters, one for the request,
 *  another for the response and a third to pass on to another
 *  piece of middleware if all goes well.
 */
const notFoundError = ( req, res, next ) => {
  /**
   * This middleware helps us block all incorrect urls and returns 
   * a suggestion of the correct url for the request.
   */
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export default notFoundError;