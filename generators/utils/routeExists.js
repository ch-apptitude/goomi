/**
 * routeExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const pageComponents = fs.readdirSync('src/universal/features/routing/pages');

function componentExists(comp) {
    return pageComponents.indexOf(comp) >= 0;
}

module.exports = componentExists;
