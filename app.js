const express = require('express');
const bodyPraser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 8080;
//Mailgun
var mailgun = require("mailgun-js");
var api_key = 'key-bd02456a121270a7c35024fa73dd40ae'; //API Key
var DOMAIN = 'sandboxb0f03b03636e46baaad7275324642e81.mailgun.org'; //Domain name
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyPraser.urlencoded({ extended: false }));
app.use(bodyPraser.json());

app.get('/', (req, res) => {
    res.render('contact');
});

app.post('/', (req, res) => {
    var answer = "";
    if (req.body.answer == undefined) {
        answer = 'לא';
    } else {
        answer = 'כן';
    }
    const output = ` 
    
     יש לך פנייה חדשה   

שם: ${req.body.name}
זמר:  ${answer}
כלי נגינה:${req.body.instrument}       
 שם השיר:${req.body.song}
 אומן:${req.body.artist}
הודעה:${req.body.message} 
        
`;

    var data = {
        from: 'Open Stage <OpenStage@Night.com>',
        to: 'tzuk9800@gmail.com',
        subject: 'New Request',
        text: output
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });

    res.render('contact', { msg: '*ההודעה נשלחה בהצלחה! ניתן לבקש עד 2 שירים' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});





