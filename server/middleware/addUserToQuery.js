exports.addUserToQuery = () => async (req, res, next) => {
  req.query = {
    ...req.query,
    user: req.user.id,
  };

  next();
};
