const express = require('express');
const admin = require('firebase-admin');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection('users').get();
    const users = snapshot.docs.map(doc => doc.data());
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

router.post('/users', async (req, res) => {
  const { uid, email, name } = req.body;
  try {
    await admin.firestore().collection('users').doc(uid).set({
      email,
      name,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Error adding user', error });
  }
});

module.exports = router;

