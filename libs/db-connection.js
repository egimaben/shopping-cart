const mongoose = require('mongoose');
const { MONGO_URL } = require('../config/keys');
const Products = require('../models/Product');

// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true });
// Validation
var products = [{ "name": "Windbreaker jacket", "price": 30, "photo": "http://www.tshirtsinteramerica.com/wp-content/uploads/jacket-taslan-150x150.png" },
{ "name": "Gray sack", "price": 30, "photo": "https://www.bridgfordgear.com/wp-content/uploads/2014/05/LSW289_Heather-Grey-150x150.png" },
{ "name": "Black T-shirt", "price": 11, "photo": "https://cdn.shopify.com/s/files/1/2387/8337/products/DynamicImageHandler_cbc8ec4a-fad3-4a35-82f1-06a0c663fd30_150x150.png?v=1521650532" },
{ "name": "T-shirt", "price": 10, "photo": "http://i0.wp.com/www.lifehouseink.com/wp-content/uploads/2015/03/txorangewh.png?resize=150%2C150" },
{ "name": "Normal yellow T-shirt", "price": 9, "photo": "https://www.promopays.com/baseball-jerseys/wp-content/uploads/2016/02/1504-1.png" },
{ "name": "Gray musical T-shirt", "price": 15, "photo": "https://cdn.shopify.com/s/files/1/2417/4365/products/oys1w6j5qv_CDBMaVDr4JeFV3b3UHhtnM3n7xjx5tSilver_150x150.png?v=1507958342" },
{ "name": "Blue musical T-shirt", "price": 19, "photo": "https://cdn.shopify.com/s/files/1/2417/4365/products/njt9s5cr8n_CDBMaVDr4JeFV3b3UHhtnM3n7xjx5tTrue_Royal_150x150.png?v=1509762212" }]
function onInsert(err, docs) {
    if (err) {
        console.error(err);
    } else {
        console.info('%d products were successfully stored.', docs.length);
    }
}



mongoose.connection
    .on('open', () => {
        console.info('Database connected!');
        Products.collection.deleteMany({});
        Products.collection.insertMany(products, onInsert);
    })
    .on('error', err => console.info('Create a database and put the link into config/index.js/MONGO_URL'));