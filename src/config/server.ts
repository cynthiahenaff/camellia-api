import * as Hapi from '@hapi/hapi';

const server = Hapi.server({
  port: 8080,
  host: 'localhost',
});

export default server
