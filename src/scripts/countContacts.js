import fs from "fs/promises"
import {PATH_DB} from "../constants/contacts.js"

export const countContacts = async () => {

try{
    const data=await fs.readFile(PATH_DB,"utf-8");
    const contacts=JSON.parse(data);
    contacts.forEach((contact,index)=>{
        const keyCount=Object.keys(contact).length;
        console.log(`Kişi ${index+1}, ${keyCount} tane "key" içeriyor.`)
    })


}catch(err){
    console.error("Cant found count: ",err.message)

}

};

countContacts();
