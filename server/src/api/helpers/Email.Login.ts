import nodemailer from 'nodemailer';

const emailLogin = (email: string) => {
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
    subject: 'Your Login ',
    text: 'here is your info',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

export default emailLogin;
