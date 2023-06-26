// require express and router
const router = require('express').Router();
// require model and associated models
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      // include associated model
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find specific tag by id
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: "No Tag with that id" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData); ``
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a tag's name by it's id value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag by that id!' });
      return;
    } 
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json(err);
  }
});

// delete tag by it's id 
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: 'no tag is found with that id'});
      return;
    } 
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// export router module
module.exports = router;
