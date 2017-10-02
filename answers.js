'use strict';
const request = require('request');
const config = require('./config');
const pg = require('pg');
pg.defaults.ssl = true;

module.exports = {

  updateUserEmail: function(email, userId) {
         var pool = new pg.Pool(config.PG_CONFIG);
         pool.connect(function(err, client, done) {
             if (err) {
                 return console.error('Error acquiring client', err.stack);
             }

             let sql1 = `SELECT email FROM users WHERE fb_id='${userId}' LIMIT 1`;
             client
                 .query(sql1,
                     function(err, result) {
                         if (err) {
                             console.log('Query error: ' + err);
                         } else {
                             let sql;
                             if (result.rows.length === 0) {
                                 sql = 'INSERT INTO public.users (email, fb_id) VALUES ($1, $2)';
                             } else {
                                 sql = 'UPDATE public.users SET email=$1 WHERE fb_id=$2';
                             }
                             client.query(sql,
                             [
                                 email,
                                 userId
                             ]);
                         }
                     }
                     );

             done();
         });
         pool.end();
     }





    }
