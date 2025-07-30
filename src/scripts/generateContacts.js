import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import path from 'path';
import { writeContacts } from '../utils/writeContacts.js';

// const contactsPath = path.resolve('db.json');

const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  try {
    // await fs.writeFile(
    //   contactsPath,
    //   JSON.stringify(newContacts, null, 2),
    //   'utf-8',
    // );
    await writeContacts(newContacts);

    console.log(`${number} person added the contact list!`);
  } catch (err) {
    console.error('error message:', err.message);
  }
};

generateContacts(5);
