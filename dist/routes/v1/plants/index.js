"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const trefle_1 = require("../../../client/trefle");
exports.default = (server) => server.route({
    method: 'GET',
    path: '/plants',
    handler: (request, h) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield trefle_1.getPlants();
        console.log(response);
        return 'Ceci est un test';
    }),
});
//# sourceMappingURL=index.js.map