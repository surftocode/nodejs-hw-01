import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const deletedFile = await fs.writeFile(PATH_DB, [],'utf-8');
    console.log('All items are deleted succesfully!');
  } catch (err) {
    console.error('Cannot delete items:', err);
  }
};

removeAllContacts();
