const router = require("express").Router();
const {
    getTransaction,
    saveTransaction,
    updateTransaction,
    deleteTransaction
} = require('../controllers/transactionController');

router.get('/', getTransaction);

router.post('/', saveTransaction);

router.put('/:id', updateTransaction);

router.delete('/:id', deleteTransaction);

module.exports = router;