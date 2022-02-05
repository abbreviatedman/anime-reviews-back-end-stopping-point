const express = require("express");
const {
  getAllReviews,
  getReview,
  newReview,
  updateReview,
  deleteReview,
  getAnimeReviews,
} = require("../queries/reviews");

const reviews = express.Router({ mergeParams: true });

reviews.get("/", async (req, res) => {
  const reviews = await getAnimeReviews(req.params.id);
  res.status(200).json(reviews);
});

reviews.get("/:id", async (req, res) => {
  console.log("GET to /reviews/:id");
  const review = await getReview(req.params.id);
  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404).json({ error: "review not found" });
  }
});

// GET to /anime/:id/reviews
// should give us all the reviews where the anime_id is the id from the params

reviews.post("/new", async (req, res) => {
  console.log("POST to /reviews/new");
  const review = req.body;
  const reviews = await newReview(review);
  if (reviews[0]) {
    res.status(200).json(reviews);
  } else {
    res.status(404).json({ error: "failed to create new review" });
  }
});

reviews.put("/:id/edit", async (req, res) => {
  console.log("PUT to /reviews/:id/edit");
  let { id } = req.params;
  let newInfo = req.body;
  const review = await updateReview(id, newInfo);
  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404).json({ error: "review could not be updated" });
  }
});

reviews.delete("/:id", async (req, res) => {
  console.log("DELETE to /reviews/:id");
  const { id } = req.params;
  const review = await deleteReview(id);
  if (review) {
    res.status(200).json(review);
  } else {
    res
      .status(404)
      .json({ error: `review with id of ${id} could not be deleted` });
  }
});

// GET all reviews that belong to a certain anime

module.exports = reviews;
