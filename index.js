const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const totalBatteries = batteryBatches.reduce(function (allBatteries, batches) {
//     return allBatteries + batches;
// }, 0);

const totalBatteries = batteryBatches.reduce((allBatteries, batches) => allBatteries + batches
,0);

console.log(totalBatteries);