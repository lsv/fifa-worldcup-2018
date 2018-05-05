const checker = require('./propertyCheck');

function validateGroupnames(data, errors) {
    const groupnames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    groupnames.forEach((groupkey) => {
        if (! data.hasOwnProperty(groupkey)) {
            errors.push(`Group ${groupkey} not set`);
        }
    });
}

function validateGroup(groupname, group, errors) {
    if (! group.hasOwnProperty('winner')) {
        errors.push(`Group ${groupname} missing "winner"`);
    } else {
        if (! (typeof group.winner === 'number' || group.winner === null)) {
            errors.push(`Group ${groupname} "winner" expected type "object|number" got ${typeof group.winner}`);
        }
    }

    if (! group.hasOwnProperty('runnerup')) {
        errors.push(`Group ${groupname} missing "runnerup"`);
    } else {
        if (! (typeof group.runnerup === 'number' || group.runnerup === null)) {
            errors.push(`Group ${groupname} "runnerup" expected type "object|number" got ${typeof group.winner}`);
        }
    }

    const properties = {
        "name": "number",
        "type": "string",
        "home_team": "number",
        "away_team": "number",
        "home_result": "null|number",
        "away_result": "null|number",
        "date": "datetime",
        "stadium": "number",
        "channels": "array",
        "finished": "boolean",
        "matchday": "number",
    };
    checker(group, errors, 'matches', 6, `Group ${groupname} - Matches`, properties);
}

module.exports = function(data, errors) {
    if (! data.hasOwnProperty('groups')) {
        errors.push('Groups not set');
    } else {
        validateGroupnames(data.groups, errors);
        const groups = data.groups;
        Object.keys(groups).forEach((groupname) => {
            validateGroup(groupname, groups[groupname], errors);
        });
    }
};