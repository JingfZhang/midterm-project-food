// Twilio API
const accountSid = "AC5844c3ec0221d9a8bcdc409ee3ea64b5";
const authToken = "efd1859a46d440866a5db285c59ba44a";
const client = require('twilio')(accountSid, authToken);

console.log(client);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15067990251',
     to: '+16476464578'
   })
  .then(message => console.log(message.sid))
  .catch(console.error);
