module.exports = (req, res, next) => {
  const token = req.header('x-auth')

  next();
};
