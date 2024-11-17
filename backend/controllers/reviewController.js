const Review = require('../models/reviews');
const OutingPlan = require('../models/outingPlan');

// exports.addReview = async (req, res) => {
//   try {
//     const { outingPlanId, rating, comment } = req.body;
//     const userId = req.user.id;

//     const review = new Review({
//       outingPlan: outingPlanId,
//       rating,
//       comment,
//       user: userId
//     });

//     await review.save();
//     res.status(201).json(review);
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding review', error });
//   }
// };
exports.addReview = async (req, res) => {
  try {
    const { outingPlanId, rating, comment } = req.body;
    const userId = req.user.id;

    // Check if user has already reviewed this outing
    const existingReview = await Review.findOne({
      outingPlan: outingPlanId,
      user: userId
    });

    if (existingReview) {
      return res.status(400).json({ 
        message: 'You have already reviewed this outing' 
      });
    }

    const review = new Review({
      outingPlan: outingPlanId,
      rating,
      comment,
      user: userId
    });

    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
};
exports.getOutingReviews = async (req, res) => {
  try {
    const { outingPlanId } = req.params;
    const reviews = await Review.find({ 
      outingPlan: outingPlanId,
      isDeleted: false 
    }).populate('user', 'fullName profilePic');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user.id;

    const review = await Review.findOne({ _id: reviewId, user: userId, isDeleted: false });
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found or unauthorized' });
    }

    review.rating = rating;
    review.comment = comment;
    await review.save();

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error updating review', error });
  }
};

exports.softDeleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const userId = req.user.id;

    const review = await Review.findOne({ _id: reviewId, user: userId });
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found or unauthorized' });
    }

    review.isDeleted = true;
    await review.save();

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review', error });
  }
};



exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ isDeleted: false })
      .populate('user', 'fullName profilePic')
      .sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};