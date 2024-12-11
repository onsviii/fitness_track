const express = require('express');
const admin = require('firebase-admin');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const users = await admin.auth().listUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

router.post('/users', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

module.exports = router;
