const returnFirstTwoDrivers = function(arr){return arr.slice(0,2)}
const returnLastTwoDrivers = function(arr){return arr.slice(2,4)}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(n){
     return function fareMultiplier(fare){
        return n*fare;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arr,driversArr) => {
    return driversArr(arr)
}