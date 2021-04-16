const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const logger = require('../utils/winstonConfig');

const dbUrl = 'mongodb://localhost:27017';

const dbName = 'nodejs_cheatSheet';
const client = mongoClient(dbUrl);

const dbConnection = client.connect(function(err) {
    assert.equal(null, err);
    logger.info('Connected to server');

    const db = client.db(dbName);

    client.close();
});

module.exports = {
    dbConnection,
};
