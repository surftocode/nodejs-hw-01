import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
      console.log(contacts);
    } catch (err) {
      console.error('Error is found:', err.message);
    }

    const newContact = createFakeContact();
    contacts.push(newContact);
    const jsonContacts = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, jsonContacts, 'utf-8');
    console.log(jsonContacts);
  } catch (err) {
    console.error('New contact could not added:', err.message);
  }
};

addOneContact();
