/** Database connection for Microblog. */

const { Client } = require("pg");

const client = new Client(process.env.MYBLOG_DB_URL || "postgresql:///my_blog");

client.connect();

module.exports = client;
