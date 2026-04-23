const catchAsyncHandler = require("../middleware/catchAsyncHandler");

exports.getIdFromPublicId = catchAsyncHandler(async function (model, publicId) {
  const doc = await model.findOne({ publicId });
  return doc._id;
});
