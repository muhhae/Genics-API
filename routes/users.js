const router = require("express").Router();
const {
    getUsers,
    saveUser,
    deleteUser,
    updateUser,
} = require('../controllers/usersController');

router.get('/', getUsers);
router.post('/', saveUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;