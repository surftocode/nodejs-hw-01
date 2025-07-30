import fs from "fs/promises"
import { PATH_DB } from "../constants/contacts.js";
import { isUtf8 } from "buffer";


export const getAllContacts = async () => {

    const contacts=[];
    try{
        const data=await fs.readFile(PATH_DB,isUtf8);
        const res=JSON.parse(data);
        contacts.push(res);
        console.log(contacts);

    }catch(err){
        console.error("Cannot read backend file")

    }
};

// console.log(await getAllContacts());
getAllContacts();
