const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');

// membuat directory

const dirPath = './data';

if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file directory

const path = 'data/contacts.json';

if(!fs.existsSync(path)){
    fs.writeFileSync(path, '[]', 'utf-8');
}

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}


const simpanContact = (nama, noHP, order) => {
    const contact = {nama, noHP, order};
    const contacts = loadContact();

    // cek no hp

    if(!validator.isMobilePhone(noHP, 'id-ID')){
        console.log(chalk.inverse.red.bold('no HP anda tidak valid'));
        return false;
    }

  
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(chalk.inverse.green.bold('Terimakasih telah mengisi data!'));
}

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.inverse.green.bold('Daftar contact: '));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    })
}



module.exports = {simpanContact, listContact};