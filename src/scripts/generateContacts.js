import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  try {
    await writeContacts(newContacts);

    console.log(`${number} person added the contact list!`);
  } catch (err) {
    console.error('error message:', err.message);
  }
};

generateContacts(3);
