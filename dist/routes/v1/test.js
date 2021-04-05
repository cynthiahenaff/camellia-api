"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (server) => server.route({
    method: 'GET',
    path: '/test',
    handler: (request, h) => {
        return 'Ceci est un test';
    },
});
//# sourceMappingURL=test.js.map