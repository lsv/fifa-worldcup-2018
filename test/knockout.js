const checker = require('./propertyCheck');
const matchproperties = {
    "name": "number",
    "type": "string",
    "home_team": "number|string",
    "away_team": "number|string",
    "home_result": "null|number",
    "away_result": "null|number",
    "home_penalty": "null|number",
    "away_penalty": "null|number",
    "winner": "null|number",
    "date": "datetime",
    "stadium": "number",
    "channels": "array",
    "finished": "boolean"
};

function validateKnockoutnames(knockouts, errors) {
    const types = {
        'round_16': 8,
        'round_8': 4,
        'round_4': 2,
        'round_2_loser': 1,
        'round_2': 1
    };

    Object.keys(types).forEach((type) => {
        if (! knockouts.hasOwnProperty(type)) {
            errors.push(`Knockout ${type} not set`);
        } else {
            checker(knockouts[type], errors, 'matches', types[type], `Knockout ${type} - Matches`, matchproperties);
        }
    });
}

module.exports = function(data, errors) {
    if (! data.hasOwnProperty('knockout')) {
        errors.push('Knockout not set');
    } else {
        validateKnockoutnames(data.knockout, errors);
    }

};