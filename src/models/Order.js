const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema ({
    name: { type: String, require: true, maxLength: 100 },
    address: { type: String, require: true, maxLength: 255 },
    city: { type: String, require: true, maxLength: 100 },
    phone: { type: String, require: true, maxLength: 14 },
    quantity: { type: Number, default: 1 },
    price: { type: Number, require: true },
    message: { type: String, maxLength: 1000},
    status: { type: String, default: 'Đang chờ xác nhận', maxLength: 100},
    pid: { type: Boolean, default: false},
    orderItem: {type: mongoose.Schema.Types.ObjectId, ref: "OrderItem"},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}

}, {
    timestamps: true,
})

Order.index({name: "text", description: "text"})

module.exports = mongoose.model('Order', Order)
