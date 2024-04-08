const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Availability = require('./models/availability');
const Booking = require('./models/booking');

dotenv.config();

const MONGODB_URL = process.env.MONGO_URL;
const app = express();

// MiddleWares
app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => {
    console.error("MongoDB connection error", err);
});
db.once("open", () => {
    console.log("MongoDB is connected");
});

// Set Availability API
app.post('/api/availability', async (req, res) => {
  try {
    const avail = new Availability({
      day: req.body.day,
      slots:req.body.slots
  });

  const Available = await avail.save()
  return res.status(201).send({
      message: 'Availability set successfully!',
      success: true,
      Available
  })
} catch (error) {
    console.error("Error setting availability:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/availability', async (req, res) => {
  try {
    const availabilities = await Availability.find();
    res.status(200).json(availabilities);
  } catch (error) {
    console.error("Error fetching availabilities:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


///////////////////////////// BOOKING
app.post('/api/bookings', async (req, res) => {
  try {
    
    const booking = new Booking({
      userId: req.body.userId,
      date:req.body.date,
      slot:req.body.slot
  });

  
    // Save the booking
    await booking.save();

    

    return res.status(201).json({
      message: 'Booking scheduled successfully',
      success:true,
      booking
    });
  } catch (error) {
    console.error("Error scheduling booking:", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

///////////  LIST ALL BOOKED SLOTS
app.get('/api/bookings', async (req, res) => {
  try {
    const book = await Booking.find();
    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching availabilities:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
