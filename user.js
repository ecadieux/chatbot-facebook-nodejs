'use strict';
const request = require('request');
const config = require('./config');
const pg = require('pg');
pg.defaults.ssl = true;


module.exports = function(callback, userId) {
  console.log("User ID :"+userId);
  console.log("Callback:"+callback);
  console.log("FB Page Token :"+config.FB_PAGE_TOKEN);
  request({
    uri: 'https://graph.facebook.com/v2.7/' + userId,
    qs: {
        access_token: config.FB_PAGE_TOKEN
    }

}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("This is body :"+body);


        console.log("This is the result of JSON parse:"+JSON.parse(body))
        var user = JSON.parse(body);


        if (user.first_name) {
          console.log("The first name is: "+user.first_name);

            var pool = new pg.Pool(config.PG_CONFIG);
            pool.connect(function(err, client, done) {
                if (err) {
                    return console.error('Error acquiring client', err.stack);
                }
                var rows = [];

                client.query(`SELECT id FROM users WHERE fb_id='${user.id}' LIMIT 1`,
                    function(err, result) {
                        console.log('query result ' + result);
                        if (err) {
                            console.log('Query error: ' + err);
                        } else {
                            console.log('rows: ' + result.rows.length);
                            if (result.rows.length === 0) {
                                let sql = 'INSERT INTO users (fb_id, first_name, last_name, profile_pic, ' +
                                    'locale, timezone, gender) VALUES ($1, $2, $3, $4, $5, $6, $7)';
                                console.log('sql: ' + sql);
                                client.query(sql,
                                    [
                                        userId,
                                        user.first_name,
                                        user.last_name,
                                        user.profile_pic,
                                        user.locale,
                                        user.timezone,
                                        user.gender
                                    ])
                            }
                        }


                    });
                    done();
                    callback(user);
                    console.log('This is the callback log at the end of the user function :'+callback(user));
                    console.log('This is user at this end of the user function'+user);
            });
            pool.end();

        } else {
            console.log("Cannot get data for fb user with id",
                userId);
            console.log("This is the result of user.first_name "+user.first_name);
        }
    } else {
        console.error(response.error);
    }

});
}
