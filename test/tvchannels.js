const properties = {
    "id": "number",
    "name": "string",
    "icon": "string",
};

module.exports = function(data, errors) {
    if (! data.hasOwnProperty('tvchannels')) {
        errors.push('Data does not have tvchannels');
    } else {
        if (data.tvchannels.length === 0) {
            errors.push('At least 1 tvchannel should be defined');
        } else {
            data.tvchannels.forEach((channel) => {
                Object.keys(properties).forEach(function(key) {
                    if (! channel.hasOwnProperty(key)) {
                        errors.push(`Tvchannel does not have property ${key}`);
                    } else {
                        if (typeof channel[key] !== properties[key]) {
                            errors.push(`Tvchannel property "${key}" is not correct format - expecting "${properties[key]}" got "${typeof channel[key]}"`);
                        }
                    }
                });
            })
        }
    }
};