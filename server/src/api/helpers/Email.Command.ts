import nodemailer from 'nodemailer';

const emailCommand = (email: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'testcoding975@gmail.com',
      pass: 'testCoding1998',
    },
  });

  const mailOptions = {
    from: 'testcoding975@gmail.com',
    to: email,
    subject: 'Command ',
    text: 'You have a new command',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

export default emailCommand;
