const Review = require('../models/reviews');
const OutingPlan = require('../models/outingPlan');

exports.addReview = async (req, res) => {
  try {
    const { outingPlanId, rating, comment } = req.body;
    const userId = req.user.id;

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
    const reviews = await Review.find({ outingPlan: outingPlanId })
      .populate('user', 'fullName profilePic');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};


exports.getPreviousOutings = async (req, res) => {
  try {
    const userId = req.user.id;
    const today = new Date();
    
    const plans = await OutingPlan.find({
      user: userId,
      date: { $lt: today }
    })
    .populate('partners')
    .sort({ date: -1 });
    
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching previous outings', error });
  }
};