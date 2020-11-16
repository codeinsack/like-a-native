const advancedResults = (model, searchBy, populate) => async (req, res, next) => {
  let query;
  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit', 'search'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Search
  if (searchBy) {
    const regex = new RegExp(req.query.search, 'i');
    query = model.find({ [searchBy]: { $regex: regex }, ...reqQuery });
  } else {
    query = model.find(reqQuery);
  }

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const total = await model.countDocuments(query);

  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  const results = await query;

  res.advancedResults = {
    content: {
      totalCount: total,
      resultList: results,
    },
    status: 'success',
  };

  next();
};

module.exports = advancedResults;
