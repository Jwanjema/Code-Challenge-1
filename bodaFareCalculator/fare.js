let distance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
distance = Number(distance);

const baseFare = 50;
const perKmCharge = 15;
const distanceCharge = distance * perKmCharge;
const totalFare = baseFare + distanceCharge;

console.log("Uko kwote? Io ni " + distance + " km:");
console.log("Ukikalia Pikipiki: KES " + baseFare);
console.log("Mpaka Uko: KSH " + distanceCharge);
console.log("Total: KSH " + totalFare);
console.log("Panda Pikipiki!");