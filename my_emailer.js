
module.exports = function(number) {

    var TMClient = require('textmagic-rest-client');
    var num = '+1' + number
    var message = 'Hey u drunk? -from Ariel for hackathon\n' +
            'Yes >>>> https://serene-cliffs-42310.herokuapp.com/yes_page\n' +
            'No >>>> https://serene-cliffs-42310.herokuapp.com/no_page\n'
    var c = new TMClient('arielreches', 'iFBTY3HmVEyyAFsI9835PGIH0glArR');
    c.Messages.send({text: message, phones:num}, function(err, res){
        console.log('Messages.send()', err, res);
    });

//
//
//     var request = require('request');
//
//     request.post('https://textbelt.com/text', {
//         form: {
//             phone: '6174297932',
//             message: 'Hey u drunk? -from Ariel for hackathon\n' +
//              'Yes >>>> https://serene-cliffs-42310.herokuapp.com/yes_page\n' +
//              'No >>>> https://serene-cliffs-42310.herokuapp.com/no_page\n'
//              ,
//             key: 'fc854d75a6aeacde744c93206a7096462d1ac8925qWyJElMAVk4hFgTPC2eRowmU',
//         },
//     }, function(err, httpResponse, body) {
//         if (err) {
//             console.error('Error:', err);
//             return;
//         }
//         console.log(JSON.parse(body));
//     })
// }
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'drunkmap@gmail.com',
//             pass: 'drunkmap12!'
//         }
//     });
//     var providers = ['@sms.alltelwireless.com', '@txt.att.net', '@sms.myboostmobile.com', '@messaging.sprintpcs.com',
//         '@tmomail.net', '@email.uscc.net', '@vtext.com', '@vmobl.com']
//     var numbers = []
//     providers.forEach(function (suffix) {
//         numbers.push(number + suffix);
//     });
//     numbers.forEach(function (t) {
//         console.log(t)
//         var mailOptions = {
//             from: 'drunkmap@gmail.com',
//             to: t,
//             // subject: 'Sending Email using Node.js',
//             text: 'Hey u drunk? -from Ariel for hackathon\n' +
//             'Yes >>>> https://serene-cliffs-42310.herokuapp.com/yes_page\n' +
//             'No >>>> https://serene-cliffs-42310.herokuapp.com/no_page\n' +
//             ''
//             // html: '<b>Hello world?</b>' // html body
//
//         };
//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log('Email sent: ' + info.response);
//             }
//         });
//
//     });
// }
//

}