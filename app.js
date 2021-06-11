const yargs = require("yargs");
const contact = require('./contact');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact pelanggan',
    builder: {
        nama: {
            describe: 'Menambahkan nama pelanggan',
            demandOption: true,
            type: 'string'
        },
        noHP: {
            describe: 'Menambahkan no HP pelanggan',
            demandOption: true,
            type: 'string'
        },
        order: {
            describe: 'Menambahkan produk yang diorder pelanggan',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        contact.simpanContact(argv.nama, argv.noHP, argv.order);
    },
})
.demandCommand();

yargs.command({
    command: 'list',
    describe: 'Menampilkan daftar nama dan no HP',
    handler(){
        contact.listContact();
    }
});

yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail contact',
    builder: {
        nama: {
            describe: 'Menampilkan nama',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        contact.detailContact(argv.nama);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Menghapus contact dari nama',
    builder: {
        nama: {
            describe: 'Menampilkan nama',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        contact.deleteContact(argv.nama);
    }
});

yargs.parse();