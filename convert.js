
// 1 Inch = 1 Feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const height = inchToFeet(75);
console.log(height);