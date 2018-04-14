const data = require('./../data');
const Stadium = require('./stadium');
const Tvchannel = require('./tvchannels');
const Team = require('./teams');
const Group = require('./group');
const Knockout = require('./knockout');

let errors = [];

Stadium(data, errors);
Tvchannel(data, errors);
Team(data, errors);
Group(data, errors);
Knockout(data, errors);

if (errors.length > 0) {
    console.log(errors);
    throw new Error();
}

console.log('No errors');
