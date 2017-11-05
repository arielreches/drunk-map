var nodemailer = require('nodemailer');
module.exports = function(number) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'drunkmap@gmail.com',
            pass: 'drunkmap12!'
        }
    });
    var providers = ['@sms.alltelwireless.com', '@txt.att.net', '@sms.myboostmobile.com', '@messaging.sprintpcs.com',
        '@tmomail.net', '@email.uscc.net', '@vtext.com', '@vmobl.com']
    var numbers = []
    providers.forEach(function (suffix) {
        numbers.push(number + suffix);
    });
    numbers.forEach(function (t) {
        console.log(t)
        var mailOptions = {
            from: 'drunkmap@gmail.com',
            to: t,
            // subject: 'Sending Email using Node.js',
            text: 'Hey u drunk? -from Ariel for hackathon\n' +
            'Yes >>>> https://serene-cliffs-42310.herokuapp.com/yes_page\n' +
            'No >>>> https://serene-cliffs-42310.herokuapp.com/no_page\n' +
            ''
            // html: '<b>Hello world?</b>' // html body

        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    });
}
//
// var mailOptions = {
//     from: 'drunkmap@gmail.com',
//     to: '6174297932@vtext.com',
//     // subject: 'Sending Email using Node.js',
//     text: 'Hey u drunk?\n' +
//     'Yes >>>> https://serene-cliffs-42310.herokuapp.com/yes_page\n' +
//     'No >>>> facebook.com' +
//     ''
//     // html: '<b>Hello world?</b>' // html body
//
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });
