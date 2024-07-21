const router = require('express').Router();
const { Category, Product } = require('../../models');

// Retrieve all products including associated categories and tags
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    // Handle errors by responding with a 500 status and an internal server error message
    res.sres.status(500).json({ message: "Category was not deleted", error: err });
  }
});

// Retrieve a single category and its associated products by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });

    if (!category) {
      // Respond with a 404 status and a message if the category is not found
      res.status(404).json({ message: 'No Category found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    // Handle errors by responding with a 500 status and an internal server error message
    res.status(500).json({ message: "Category was not deleted", error: err });
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    // Handle errors by responding with a 400 status and a message indicating creation failure
    res.status(400).json({ message: 'Creation failed' });
  }
});

// Update a category by its ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.update(req.body, { where: { id: req.params.id } });

    // Respond with a 404 status and a message if the category is not found; otherwise, return the updated data
    !updated[0] ? res.status(404).json({ message: 'No Category found' }) : res.status(200).json(updated);
  } catch (err) {
    // Handle errors by responding with a 500 status and an internal server error message
    res.status(500).json({ message: "Category was not deleted", error: err });
  }
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: {
        id: req.params.id,
      } 
    });

    // If the category is not found, respond with a 404 status and a message
    !deleted ? res.status(404).json({ message: 'No Category found' }) : res.status(200).json(deleted);
  } catch (err) {
    // If an error occurs, respond with a 500 status and include the error message
    res.status(500).json({ message: "Category was not deleted", error: err });
  }
});

// Export the router
module.exports = router;