require('dotenv').config();

const mongoose = require('mongoose');

/* Model */
const Person = require('./models/person');

/* Connect to the database */
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connection successful!');
  })
  .catch((err) => {
    console.error(`Database connection error: ${err}`);
  });

/* Create and Save a Record of a Model */
const createAndSavePerson = (done) => {
  // Create document instance
  const satoshi = new Person({
    name: 'Satosh',
    age: 19,
    favoriteFoods: ['Chocolate', 'Pankake', 'Banana'],
  });

  satoshi.save(function (err, data) {
    if (err) return console.error(err);

    done(null, data);
  });
};

/* Create Many Records with model.create() */
const arrayOfPeople = [
  {
    name: 'RobotMama',
    age: 999,
    favoriteFoods: ['Oil', 'hydrogen', 'Battery'],
  },
  {
    name: 'Mario',
    age: 32,
    favoriteFoods: ['Pizza', 'Pasta', 'Mushroom', 'Star'],
  },
  {
    name: 'Link',
    name: 17,
    favoriteFoods: ['Mushroom'],
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  // Create instances of models
  // MyModels.create() will trigger .save() middleware to save them in DB
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return console.error(err);

    done(null, data);
  });
};

/* Use model.find() to Search Database */
const findPeopleByName = (personName, done) => {
  // $lte => Less than or equal to a specified value...lists below
  // https://www.mongodb.com/docs/manual/reference/operator/query/
  Person.find(
    {name: personName /* age: {$lte: 20} */},
    function (err, personFound) {
      if (err) return console.error(err);

      console.log(personFound);
      done(null, personFound);
    }
  );
};

/* Use model.findOne() to Return a SINGLE Matching Document from the Database */
const findOneByFood = (food, done) => {
  Person.findOne(
    {favoriteFoods: food},
    /* 'name favoriteFoods', */
    function (err, dataByFood) {
      if (err) return console.error(err);

      console.log(dataByFood);
      done(null, dataByFood);
    }
  );
};

/* Use model.findById() to Search Database By _id */
const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, dataById) {
    if (err) return console.error(err);

    console.log(dataById);
    done(null, dataById);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = 'Mary';

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = 'burrito';

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
