const express = require('express');
const path = require('path');
const app = express();

const usersRoutes = require('./routes/api/users');

app.get('/api', (req, res) => {
  res.json({ msg: 'Hello world! This is my bloggin app' });
});

// Routes
app.use('/api/users', usersRoutes);
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'client', 'build', 'index.html')
    );
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
