const Transaction = require('../models/Transaction');

const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.find();
    res.status(200).json({
      success: true,
      message: "Get transaction success",
      data: transaction
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
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
      success: true,
      message: "Save transaction success",
      data: savedTransaction
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
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
      success: true,
      message: "Update transaction  success",
      data: updatedTransaction
    })
  }
  catch (e) {
    res.status(500).json({
      success: false,
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
      success: true,
      message: "Delete success",
      data: deletedTransaction
    })
  }
  catch (e) {
    res.status(500).json({
      success: false,
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