// Code your solution here
/*function filter(collection, cb) {
    for (const user of collection) {
        console.log(user);
    }
}

*/

function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toUpperCase() === string.toUpperCase();
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.startsWith(string);
    }
)}

function matchName(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.name === string;
    })
}