// program to display time and date
// get time and date
const date = new Date(2021, 20, 01, 9, 35, 30);

// get date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

//display tine 
console.log('Time: ' + time);
