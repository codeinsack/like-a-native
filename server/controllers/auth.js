const { OAuth2Client } = require('google-auth-library');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// @desc   Login user
// @route  POST /api/v1/auth/login
// @access Public
exports.login = asyncHandler(async (req, res) => {
  const response = await client.verifyIdToken({
    idToken: req.body.token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const {
    email_verified, name, email, picture,
  } = response.payload;
  if (email_verified) {
    User.findOne({ email })
      .exec(async (error, user) => {
        if (user) {
          sendTokenResponse(user, 200, res);
        } else {
          const newUser = await User.create({
            name,
            email,
            avatar: picture,
            role: 'user',
          });
          sendTokenResponse(newUser, 200, res);
        }
      });
  }
});

// @desc   Log user out / clear cookie
// @route  GET /api/v1/auth/logout
// @access Private
exports.logout = asyncHandler(async (req, res) => {
  res.cookie('token', '', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: 'success',
  });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      content: user,
      status: 'success',
    });
};
