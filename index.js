// Given Parameters
const velocityKmh = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const startingDistanceKm = 0; // distance (km)
const startingFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgs = 0.5; // fuel burn rate (kg/s)

// Calculates new distance
// Convert velocity from km/h to m/s
const velocityMs = (10000/3600);
const newDistance = startingDistanceKm + (velocityMs * timeInSeconds)

// Calculates remaining fuel
const remainingFuel = startingFuelKg - (fuelBurnRateKgs * timeInSeconds)

// Calculates new velocity
const calculateNewVelocity = (velocityKmh, accelerationMs2, timeInSeconds)
const newVelocityKmh = calculateNewVelocity + velocityKmh + (accelerationMs2 * timeInSeconds);

try {
console.log(`Corrected New Velocity: ${newVelocityKmh} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);

} catch (error) {
  console.error(`Error: ${error.message}`);
}