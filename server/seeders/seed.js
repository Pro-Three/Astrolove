const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds');

db.once('open', async () => {
  await User.deleteMany({});
  await User.create(userSeeds);

  console.log('All users now seeded');
  process.exit(0);
});