const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// Assuming batteryBatches is already defined elsewhere
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);
console.log("Total batteries:", totalBatteries); // Output: 31