import { getPlants, searchPlant } from '../../../client/trefle';
import { ResponseToolkit, Request, Server } from '@hapi/hapi';
import { camelizeKeys } from 'humps';

export default (server: Server) => {
  server.route({
    method: 'GET',
    path: '/plants',
    handler: async (request: Request, h: ResponseToolkit) => {
      const { search } = request.query;

      if (Boolean(search)) {
        const { data } = await searchPlant({ search });
        return camelizeKeys(data);
      } else {
        const { data } = await getPlants();
        return camelizeKeys(data);
      }
    },
  });
};
