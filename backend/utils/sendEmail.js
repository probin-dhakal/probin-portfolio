import nodemailer from "nodemailer";

export const sendReplyEmail = async (
  visitorEmail,
  visitorName,
  visitorSubject,
  visitorMessage
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const replyMailOptions = {
    from: process.env.EMAIL_USER,
    to: visitorEmail,
    subject: `Re: ${visitorSubject}`,
    text: `Hello ${visitorName},
  
Thank you for reaching out to me through my portfolio website! I have received your message, and I will get back to you as soon as possible.

Here’s a copy of the message you sent me:
---
Subject: ${visitorSubject}
Message: ${visitorMessage}
---

I appreciate your interest and will respond to your inquiry promptly.

Best regards,
Probin`,
  };
  await transporter.sendMail(replyMailOptions);
};
