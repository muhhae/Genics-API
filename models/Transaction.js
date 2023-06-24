const {
    Schema,
    model
} = require("mongoose");

const Transaction = Schema(
    {
        product: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        paid: {
            type: Number,
            required: true,
        },
        change: {
            type: Number,
            required: false,
        }
    }
);

module.exports = model('Transaction', Transaction);