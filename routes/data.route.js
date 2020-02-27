const router = require('express').Router();
let Data = require('../models/data.model');

router.route('/').get((req, res) => {
  Data.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Data.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Data.findById(req.params.id)
    .then(data => {
      data.question1 = req.body.question1
      data.question2 = req.body.question2
      data.question3 = req.body.question3
      data.question4 = req.body.question4
      data.question5 = req.body.question5
      data.question6 = req.body.question6
      data.question7 = req.body.question7
      data.question8 = req.body.question8
      data.question9 = req.body.question9
      data.question10 = req.body.question10
      data.question11 = req.body.question11
      data.question12 = req.body.question12
      data.question13 = req.body.question13
      data.question14 = req.body.question14
      data.question15 = req.body.question15
      data.question16 = req.body.question16
      data.question17 = req.body.question17
      data.question18 = req.body.question18
      data.question19 = req.body.question19
      data.question20 = req.body.question20
  
      data.save()
        .then(() => res.json('Data updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const question1 = req.body.question1;
  const question2 = req.body.question2;
  const question3 = req.body.question3;
  const question4 = req.body.question4;
  const question5 = req.body.question5;
  const question6 = req.body.question6;
  const question7 = req.body.question7;
  const question8 = req.body.question8;
  const question9 = req.body.question9;
  const question10 = req.body.question10;
  const question11 = req.body.question11;
  const question12 = req.body.question12;
  const question13 = req.body.question13;
  const question14 = req.body.question14;
  const question15 = req.body.question15;
  const question16 = req.body.question16;
  const question17 = req.body.question17;
  const question18 = req.body.question18;
  const question19 = req.body.question19;
  const question20 = req.body.question20;

  const newData = new Data({
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15,
    question16,
    question17,
    question18,
    question19,
    question20,
  });

  newData.save()
  .then(() => res.json('Data added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;