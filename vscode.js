

let britishCities = {
  london: 10,
  birmingham: 2,
  manchester: 1
};

function biggestTown(townUK) {
  if (britishCities.london > britishCities.birmingham) {
    return britishCities.london; 
  } else {
    return britishCities.birmingham;
  };
  return (biggestTown)
}
  

console.log(`The biggest town in UK is ${biggestTown}`);

