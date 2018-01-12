// Doesn't work - `Uncaught TypeError: moment is not a function`
import * as moment from 'moment';

// Works - but throws error `Module 'moment' has no default export` in IDE, not in Parcel
// import moment from 'moment';

console.log(moment());
