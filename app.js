const nodemailer = require('nodemailer');


nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "be761c2e2d9ad4",
          pass: "004cf9a58d614b"
        }
      });

    // Message object
    let message = {
        from: 'Adarsh Khedekar <test@gmail.com>',
        to: 'Ashish <test@gmail.com>',
        subject: 'Learning to send emial',
        text: 'Dear unknown, This is the first mail i am sending to you do not reply!!',
        html: '<p>Dear unknown,</p><p>This is the first mail i am sending to you do not reply!!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        // console.log('Message sent: %s', info);
        console.log('Message sent: %s', info.envelope.to);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
