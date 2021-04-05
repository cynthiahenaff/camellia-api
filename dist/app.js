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
const Hapi = require("@hapi/hapi");
const test_1 = require("./routes/v1/test");
require('@babel/register')({
    extensions: ['.js', '.ts'],
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
    });
    test_1.default(server);
    yield server.start();
    console.log('Server running on %s', server.info.uri);
});
process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});
init();
//# sourceMappingURL=app.js.map