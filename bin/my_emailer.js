var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'drunkmap@gmail.com',
        pass: 'drunkmap12!'
    }
});

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
