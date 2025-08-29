// import sendMail from '@/lib/sendMail';

// interface ContactMailData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   message: string;
// }

// export const sendContactEmail = async (data: ContactMailData) => {
//   const { firstName, lastName, email, message } = data;
//   const fullName = `${firstName} ${lastName}`;

//   await sendMail({
//     to: process.env.CONTACT_RECEIVER_EMAIL || '',
//     subject: `New Contact Form Submission from ${fullName}`,
//     text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage:\n${message}`,
//     html: `
//       <h2>New Contact Form Submission</h2>
//       <p><strong>First Name:</strong> ${firstName}</p>
//       <p><strong>Last Name:</strong> ${lastName}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `,
//   });
// };
