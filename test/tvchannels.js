const checker = require('./propertyCheck');
const properties = {
    "id": "number",
    "name": "string",
    "icon": "string",
    "country": "string",
    "iso2": "string",
    "lang": "array"
};

module.exports = function(data, errors) {
    if (! data.hasOwnProperty('tvchannels')) {
        errors.push('Data does not have tvchannels');
    } else {
        if (data.tvchannels.length === 0) {
            errors.push('At least 1 tvchannel should be defined');
        } else {
            checker(data, errors, 'tvchannels', null, 'TV Channel', properties);
        }
    }
};
