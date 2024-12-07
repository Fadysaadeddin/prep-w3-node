
import express from 'express';
import { register, login, getProfile, logout } from './users.js';

const app = express();
app.use(express.json());


app.post('/auth/register', register);  
app.post('/auth/login', login);       
app.get('/auth/profile', getProfile);  
app.post('/auth/logout', logout);     


app.use(express.static('client'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
