import db from '@/lib/database';
import sendMail from '@/lib/sendMail';
import { ResultSetHeader } from 'mysql2';

interface ContactData {
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

  // Ensure table exists
  await db.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(100) NOT NULL,
      lastName VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL,
      description TEXT NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Insert message
  const [result] = await db.query<ResultSetHeader>(
    'INSERT INTO messages (firstName, lastName, email, description) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, description]
  );

  // SEND EMAIL
await sendMail({
  to: process.env.CONTACT_RECEIVER_EMAIL!, // MUST be defined in .env
  subject: `New message from ${firstName} ${lastName}`,
  text: `Message from ${firstName} ${lastName}\nEmail: ${email}\n\n${description}`,
  html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${description}</p>
    `,
});

  return result.insertId;
};
