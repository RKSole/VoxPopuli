
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Review = require("../models/Review");


const checkIDParam = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};
//READ a review 
router.get('/review', (req, res, next) => {
  console.log("Get reviews");
  Review.find()
    .then(reviewList => res.status(200).json(reviewList))
    .catch(e => res.status(500).json({ error: e.message }));
});

/* CREATE a new Review */
router.post('/review', (req, res, next) => {
  const { critic, firm, comments, punctuation, location } = req.body;
  const theReview = new Review({
    critic, firm, comments, punctuation, location
  });

  theReview.save()
    .then(p => res.status(200).json({
      message: 'New Review Created!',
      Review: p
    }))
    .catch(e => res.status(500).json({ error: e.message }));
});

/* GET a single Review. */
router.get('/review/:id', checkIDParam, (req, res) => {
  Review.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

router.get('/review/critic/:id', checkIDParam, (req, res) => {
  Review.find({critic : req.params.id})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

router.get('/review/comments/:id', checkIDParam, (req, res) => {
  Review.find({comments : req.params.id})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});


/* Update a Review. */
router.put('/review/:id', checkIDParam, (req, res) => {
  const {critic, firm, comments, punctuation, location} = req.body;
  const updates = {critic, firm, comments, punctuation, location};

  Review.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

router.delete('/review/:id',checkIDParam, (req, res) => {
  Review.findByIdAndRemove(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
});

/* Delete a Review. */
router.post("/:id/delete", (req, res) => {
  Review.findByIdAndRemove(req.params.id)
     .then(p => res.status(200).json(p))

    .catch(e => res.status(500).json({error:e.message})); 
  })

module.exports = router;