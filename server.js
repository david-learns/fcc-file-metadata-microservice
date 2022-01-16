const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  res.send({ name: req.file.originalname, type: req.file.mimetype, size: req.file.size });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
