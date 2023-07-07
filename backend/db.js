/** Database connection for Microblog. */

const { Client } = require("pg");

const client = new Client("postgresql:///my_blog");
console.log("###", client, "###");

client.connect();

module.exports = client;
