const checkIfEqual = require('../lib/random.js');

test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});

function randomNumber() {
    return Math.floor(Math.random() * 9 +1);
}

module.exports = randomNumber;