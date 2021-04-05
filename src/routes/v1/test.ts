import { ResponseToolkit, Request, Server } from "@hapi/hapi";

export default (server: Server) =>
  server.route({
    method: 'GET',
    path: '/test',
    handler: (request: Request, h: ResponseToolkit) => {
      return 'Ceci est un test';
    },
  });
