import { getPlant } from '../../../client/trefle';
import { ResponseToolkit, Request, Server } from '@hapi/hapi';
import { camelizeKeys } from 'humps';
import { Plant } from '../../../config/database';
import { omit } from 'lodash';

export default (server: Server) => {
  server.route({
    method: 'GET',
    path: '/plants/{plantId}',
    handler: async (request: Request, h: ResponseToolkit) => {
      const { plantId } = request.params;
      try {
        const result = await Plant.findOne({
          where: { trefleId: Number(plantId) },
        });

        if (!Boolean(result)) {
          const { data } = await getPlant({ plantId });
          const newPlant = await Plant.create(
            camelizeKeys({
              ...omit(data, 'id'),
              trefleId: data.main_species_id,
            }),
          );
          return newPlant;
        }
        return result.dataValues;
      } catch (err) {
        console.dir(err);
      }
    },
  });
};
