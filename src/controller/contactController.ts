import sendMail from '@/lib/sendMail';

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

export const SaveContactMessage = async (data: ContactData) => {
  const { firstName, lastName, email, description } = data;

  if (!firstName || !lastName || !email || !description) {
    throw new Error('All fields are required');
  }

  // Ensure environment variable exists
  if (!process.env.CONTACT_RECEIVER_EMAIL) {
    throw new Error('No contact receiver email set in .env');
  }

  // Send email only (no database)
  await sendMail({
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: `New message from ${firstName} ${lastName}`,
    text: `Message from ${firstName} ${lastName}\nEmail: ${email}\n\n${description}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${description}</p>
    `,
  });

  // Return a confirmation message instead of DB ID
  return { status: 'success', message: 'Email sent successfully' };
};
