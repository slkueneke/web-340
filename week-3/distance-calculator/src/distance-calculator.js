const planetAUFromSun = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.0,
  Mars: 1.52,
  Jupiter: 5.2,
  Saturn: 9.58,
  Uranus: 19.22,
  Neptune: 30.05,
};


function calculateDistance(planet1, planet2) {
  if (!planetAUFromSun.hasOwnProperty(planet1) || !planetAUFromSun.hasOwnProperty(planet2)) {
    throw Error("Inputs must be a valid planet in the Milky Way.");
  }
  return Math.abs(planetAUFromSun[planet1] - planetAUFromSun[planet2]).toFixed(2) + " AU";
}

module.exports = calculateDistance;