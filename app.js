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
.demandCommand()

yargs.command({
    command: 'list',
    describe: 'Menampilkan daftar nama dan no HP',
    handler(){
        contact.listContact();
    }
})

yargs.parse();