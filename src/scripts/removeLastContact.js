import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeLastContact = async () => {
  try {
    const allContent = await fs.readFile(PATH_DB, 'utf-8');
    const data = JSON.parse(allContent);
    const deleteLastItem = data.slice(0, -1);
    console.log(deleteLastItem);
  } catch (err) {
    console.error('Error accured:', err);
  }
};

removeLastContact();
