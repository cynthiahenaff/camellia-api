import test from './routes/v1/test';
import plants from './routes/v1/plants';
import plant from './routes/v1/plants/{plantId}';
import server from './config/server';
import database from './config/database';

require('dotenv').config();

const init = async () => {
  database.sync({ force: true }).then(() => {
    console.log(`Database & tables created!`);
  });

  test(server);
  plants(server);
  plant(server);

  await server.start();

  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
