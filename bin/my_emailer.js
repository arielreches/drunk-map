var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'drunkmap@gmail.com',
        pass: 'drunkmap12!'
    }
});
var possible = [@sms.alltelwireless.com
AT&T	@txt.att.
Boost Mobile	@sms.myboostmobile.com
Sprint	@messaging.sprintpcs.com
T-Mobile	@tmomail.net
U.S. Cellular	@email.uscc.net
Verizon	@vtext.com
Virgin Mobile
var mailOptions = {
    from: 'drunkmap@gmail.com',
    to: '6174297932@vtext.com',
    // subject: 'Sending Email using Node.js',
    text: 'Hey u drunk?\n' +
    'Yes >>>> https://serene-cliffs-42310.herokuapp.com/yes_page\n' +
    'No >>>> facebook.com' +
    ''
    // html: '<b>Hello world?</b>' // html body

};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
