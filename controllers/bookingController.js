const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

// Stripe disabled for now
// exports.getCheckoutSession = catchAsync(async (req, res, next) => {
//   // Stripe code removed
// });

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);

// Stripe webhook disabled
// exports.webhookCheckout = (req, res, next) => {
//   res.status(200).json({ received: true });
// };
