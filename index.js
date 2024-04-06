// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqBlock = 42;
    const distance = Math.abs(hqBlock - someValue);
    return distance;
  }
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feet = blocks * 264;
    return feet;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetPerUnit = 264;
    const distance = Math.abs(destination - start);
    const distanceInFeet = distance * feetPerUnit;
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      const fare = (distance - 400) * 0.02;
      return fare;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
      return 'cannot travel that far';
    }
  }