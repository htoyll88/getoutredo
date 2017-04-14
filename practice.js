'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
              // return reply('helo');
                reply.file('./material-login-form/index.html');
            }
        });

        server.route({
      method: 'GET',
      path: '/css/{file*}',
      handler: {
        directory: {
          path: './material-login-form/css'
        }
      }
    })

    server.route({
  method: 'GET',
  path: '/js/{file*}',
  handler: {
    directory: {
      path: './material-login-form/css'
    }
  }
})

server.start((err) => {

       if (err) {
           throw err;
       }

       console.log('Server running at:', server.info.uri);
   });
});
