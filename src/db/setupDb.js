const mongoose = require('mongoose');

const logger = require('../utils/winstonConfig');

const dbUrl = 'mongodb://localhost:27017/nodejs_cheatSheet';

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', () => logger.error('Connection error'));
db.once('open', function() {
    logger.info('Connected to server');

    const r1m1Schema = new mongoose.Schema({
        prp1: String,
        prp2: Boolean,
    });
    r1m1Schema.methods.methode1 = function() {
        logger.info('prp1: ' + this.prp1 + ' prp2: ' + this.prp2);
    };
    const r1m1 = mongoose.model('r1m1', r1m1Schema);

    const oneR1m1 = new r1m1({prp1: 'nameForOneR1m1', prp2: true});

    oneR1m1.save(function(err, oneR1m1) {
        if (err) return logger.error(err);
        oneR1m1.methode1();
    });
});

module.exports = {
    mongoose,
};
