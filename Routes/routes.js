module.exports=(app)=>{
const Route = require('../Controller/RouteController');

app.post('/FlightRoutes',Route.NewOne);
app.get('/FlightRoutes',Route.getall);

const Flight = require('../Controller/FlightController');

app.post('/Flight',Flight.create);
app.get('/Flight',Flight.Showall);

const timing = require('../Controller/TimingController');

app.post('/FlightTimings',timing.NewOne);
app.get('/FlightTimings',timing.getall);

const User = require('../Controller/UserController');

app.post('/User',User.create);
app.get('/User',User.Showall);

const Booking = require('../Controller/BookingHistoryController');

app.post('/Booking',Booking.NewOne);
app.get('/Booking',Booking.getall);

}