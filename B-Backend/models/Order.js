const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    shoulder: { type: String, required: true },
    chest: { type: String, required: true },
    bust: { type: String, required: true },
    waist: { type: String, required: true },
    hipRound: { type: String, required: true },
    armRound: { type: String, required: true },
    sleeves: { type: String, required: true },
    paneltyCrease: { type: String, required: true },
    length: { type: String, required: true },
    backNeck: { type: String, required: true },
    frontNeck: { type: String, required: true },
    note: { type: String },
    dateOfDelivery: { type: Date, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
