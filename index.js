// Code your solution in this file!
function distanceFromHqInBlocks(end_block) {
  if(end_block > 42){
    return end_block - 42;
  } else {
    return 42 - end_block;
  }
}

function distanceFromHqInFeet(end_block) {
  return distanceFromHqInBlocks(end_block) * 264;
}

function distanceTravelledInFeet(start_block, end_block){
  if(start_block > end_block){
    return (start_block - end_block) * 264;
  } else {
    return (end_block - start_block) * 264;
  }
}

function calculatesFarePrice(start_block, end_block){
  var distance_in_feet = distanceTravelledInFeet(start_block, end_block);
  if (distance_in_feet < 400) {
    return 0;
  } else if(distance_in_feet < 2000){
    return (distance_in_feet - 400) * .02;
  } else if (distance_in_feet < 2500){
    return 25
  } else {
    return "cannot travel that far"
  }
}
