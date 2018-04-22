const moment = require('moment');

function validateProperties(data, properties) {
    let result = false;
    properties.forEach((property) => {
        switch (property) {
            case 'null':
                if (data === null) {
                    result = true;
                }
                break;
            case 'datetime':
                if (moment(data) !== false) {
                    result = true;
                }
                break;
            case 'array':
                if (Array.isArray(data)) {
                    result = true;
                }
                break;
            default:
                if (typeof data === property) {
                    result = true;
                }
                break;
        }
    });
    return result;
}

module.exports = function (data, errors, datakey, length, type, properties) {
    if (! data.hasOwnProperty(datakey)) {
        errors.push(`${datakey} not set`);
    } else {
        if (length !== null && data[datakey].length !== length) {
            errors.push(`Not correct ${type} count - expected ${length} got ${data[datakey].length}`);
        } else {
            data[datakey].forEach((item) => {
                Object.keys(properties).forEach((key) => {
                    if (! item.hasOwnProperty(key)) {
                        errors.push(`${type} does not have property ${key}`);
                    } else {
                        if (! validateProperties(item[key], properties[key].split('|'))) {
                            errors.push(`${type} property "${key}" is not correct format - expecting "${properties[key]}" got "${typeof item[key]}" value (${item[key]})`);
                        }
                    }
                });
            })
        }
    }
};
