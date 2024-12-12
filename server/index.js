const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const firebaseConfig = require('./config/firebase');
const firebaseRoutes = require('./routes/firebaseRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', firebaseRoutes);

app.get('/users', async (req, res) => {
  try {
    const usersSnapshot = await admin.firestore().collection('users').get();
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    res.status(200).json(usersList);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ message: 'Error getting users', error });
  }
});

app.post('/users', async (req, res) => {
  const { uid, email, name } = req.body;
  try {
    const userRef = admin.firestore().collection('users').doc(uid);
    await userRef.set({
      email,
      name,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: 'Error adding user', error });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
