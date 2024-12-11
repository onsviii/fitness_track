const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const admin = require('firebase-admin');
const firebaseRoutes = require('./routes/firebaseRoutes');

dotenv.config();

const serviceAccount = require('./config/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', firebaseRoutes);

app.post('/signup', async (req, res) => {
    const userResponse = await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled: false
    })
    res.json(userResponse);
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
