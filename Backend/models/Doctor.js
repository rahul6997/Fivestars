const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profile: 
  {
      age: { type: Number },
      qualifications: { type: String },
      speciality: { type: String },
      phoneNumber: { type: String },
  },
  appointments: [
    {
      appointmentId: mongoose.Types.ObjectId,
      patientName: { type: String },
      patientId: mongoose.Types.ObjectId,
      patientEmail: { type: String },
      patientAge: { type: Number },
      patientGender: { type: String },
      medicalReasons: { type: String },
      MedicationsSuggested: { type: String },
      date: { type: Date },
      timeSlot: { type: String },
      completed: { type: Boolean }
    }
  ],
  slots: [
    {
      time: { type: String },
      available: { type: Boolean }
    }
  ]
});

module.exports = mongoose.model('Doctor', doctorSchema);