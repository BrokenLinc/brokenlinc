'use strict';

var statik = require('statik');
var server = statik.createServer('./public');
server.listen();
