const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Find all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    // Find tag by primary key
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    // If tag is not found, return 404 status
    if (!tag) {
      res.status(404).json({ message: 'No tag found' });
      return;
    }
    // Return the found tag
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    // Create a new tag with the data from the request body
    const tagData = await Tag.create(req.body);
    // Respond with a 201 status and the created tag data
    res.status(200).json(tagData);
  } catch (err) {
    // If an error occurs, respond with a 400 status and the error message
    res.status(400).json({ message: 'Creation failed' });
  }
});


// Update a tag by its ID
router.put('/:id', async (req, res) => {
  try {
    // Update tag by ID
    const updated = await Tag.update(req.body, { where: { id: req.params.id } });

    // Check if the update operation was successful
    !updated[0] ? res.status(404).json({ message: 'No CategTagory found' }) : res.status(200).json(updated);
  } catch (err) {
    // Handle errors by responding with a 500 status and an internal server error message
    res.status(500).json({ message: "Tag was not updated", error: err });
  }
});



// Delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({
      where: {
        id: req.params.id,
      } 
    });

    // If the Tag is not found, respond with a 404 status and a message
    !deleted ? res.status(404).json({ message: 'No Tag found' }) : res.status(200).json(deleted);
  } catch (err) {
    // If an error occurs, respond with a 500 status and include the error message
    res.status(500).json({ message: "Tag was not deleted", error: err });
  }
});

module.exports = router;