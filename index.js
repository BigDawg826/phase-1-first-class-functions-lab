// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArr){
    return driversArr.slice(0,2);
}
const returnLastTwoDrivers = function(driversArr){
    return driversArr.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare) {
        return multiplier * fare;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArr,driversYouWant) {
    return driversYouWant(driversArr);
}
