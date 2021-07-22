const { Model } = require('objection');

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'md5fed00378988618dcb0e5428515e0cfea',
        database: 'alimert'
    }
});

knex('table').insert({ a: 'b' }).returning('*').toString();


Model.knex(knex);
