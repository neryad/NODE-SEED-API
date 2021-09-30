const checkOrigin = (req, res, next) => {
  const token = req.headers.authorization.split(' ').pop();
  if (token === '123456') {
    next();
  } else {
    req.status(409);
    res.send({ error: 'Tu por qui no pasas!' });
  }
};

module.exports = checkOrigin;
