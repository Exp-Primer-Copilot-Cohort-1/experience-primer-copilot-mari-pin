//create new server
// @route   GET api/comments/:id
// @desc    Get comments by id
// @access  Public
router.get("/:id", (req, res) => {
    Comment.findById(req.params.id)
      .then(comment => res.json(comment))
      .catch(err =>
        res.status(404).json({ nocommentfound: "No comment found with that ID" })
      );
  });
  