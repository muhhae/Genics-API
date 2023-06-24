const Transaction = require('../models/Transaction');

const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.find();
    res.status(200).json({
      message: "Get transaction success",
      data: transaction
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Get transaction failed",
      data: error
    })
  }
};

const saveTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    const savedTransaction = await transaction.save();

    res.status(201).json({
      message: "Save transaction success",
      data: savedTransaction
    });
  }
  catch (error) {
    res.status(500).json({
      message: "Save transaction failed",
    })
  }
};

const updateTransaction = async (req, res) => {
  const transactionID = req.params.id
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(transactionID, req.body, {
      new: true
    });
    res.status(200).json({
      message: "Update transaction  success",
      data: updatedTransaction
    })
  }
  catch (e) {
    res.status(500).json({
      message: "Update transaction failed",
      data: e
    })
  }
};

const deleteTransaction = async (req, res) => {
  const transactionID = req.params.id
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(transactionID,)
    res.status(200).json({
      message: "Delete success",
      data: deletedTransaction
    })
  }
  catch (e) {
    res.status(500).json({
      message: "Delete failed",
      data: e
    })
  }
};



module.exports = {
  getTransaction,
  saveTransaction,
  updateTransaction,
  deleteTransaction
}