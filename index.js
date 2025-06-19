// Scuber HQ is at 42nd Street
const headquarters = 42;

function distanceFromHqInBlocks(someValue) {
  // Calculate the distance in blocks from headquarters (42)
  return Math.abs(someValue - headquarters);
}

function distanceFromHqInFeet(someValue) {
  // Use distanceFromHqInBlocks to get blocks, then convert to feet (1 block = 264 feet)
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  // Calculate distance traveled in blocks, then convert to feet
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // first 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // flat fare for distance between 2000 and 2500 feet
  } else {
    return 'cannot travel that far'; // no rides over 2500 feet
  }
}

