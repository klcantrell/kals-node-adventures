/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/jwt-simple/index.js":
/*!********************************************************************************************!*\
  !*** C:/Users/kcantrell/Desktop/dev/kals-node-adventures/node_modules/jwt-simple/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/jwt */ \"../../node_modules/jwt-simple/lib/jwt.js\");\n\n\n//# sourceURL=webpack:///C:/Users/kcantrell/Desktop/dev/kals-node-adventures/node_modules/jwt-simple/index.js?");

/***/ }),

/***/ "../../node_modules/jwt-simple/lib/jwt.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/kcantrell/Desktop/dev/kals-node-adventures/node_modules/jwt-simple/lib/jwt.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n * jwt-simple\n *\n * JSON Web Token encode and decode module for node.js\n *\n * Copyright(c) 2011 Kazuhito Hokamura\n * MIT Licensed\n */\n\n/**\n * module dependencies\n */\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\n\n/**\n * support algorithm mapping\n */\nvar algorithmMap = {\n  HS256: 'sha256',\n  HS384: 'sha384',\n  HS512: 'sha512',\n  RS256: 'RSA-SHA256'\n};\n\n/**\n * Map algorithm to hmac or sign type, to determine which crypto function to use\n */\nvar typeMap = {\n  HS256: 'hmac',\n  HS384: 'hmac',\n  HS512: 'hmac',\n  RS256: 'sign'\n};\n\n\n/**\n * expose object\n */\nvar jwt = module.exports;\n\n\n/**\n * version\n */\njwt.version = '0.5.1';\n\n/**\n * Decode jwt\n *\n * @param {Object} token\n * @param {String} key\n * @param {Boolean} noVerify\n * @param {String} algorithm\n * @return {Object} payload\n * @api public\n */\njwt.decode = function jwt_decode(token, key, noVerify, algorithm) {\n  // check token\n  if (!token) {\n    throw new Error('No token supplied');\n  }\n  // check segments\n  var segments = token.split('.');\n  if (segments.length !== 3) {\n    throw new Error('Not enough or too many segments');\n  }\n\n  // All segment should be base64\n  var headerSeg = segments[0];\n  var payloadSeg = segments[1];\n  var signatureSeg = segments[2];\n\n  // base64 decode and parse JSON\n  var header = JSON.parse(base64urlDecode(headerSeg));\n  var payload = JSON.parse(base64urlDecode(payloadSeg));\n\n  if (!noVerify) {\n    var signingMethod = algorithmMap[algorithm || header.alg];\n    var signingType = typeMap[algorithm || header.alg];\n    if (!signingMethod || !signingType) {\n      throw new Error('Algorithm not supported');\n    }\n\n    // verify signature. `sign` will return base64 string.\n    var signingInput = [headerSeg, payloadSeg].join('.');\n    if (!verify(signingInput, key, signingMethod, signingType, signatureSeg)) {\n      throw new Error('Signature verification failed');\n    }\n\n    // Support for nbf and exp claims.\n    // According to the RFC, they should be in seconds.\n    if (payload.nbf && Date.now() < payload.nbf*1000) {\n      throw new Error('Token not yet active');\n    }\n\n    if (payload.exp && Date.now() > payload.exp*1000) {\n      throw new Error('Token expired');\n    }\n  }\n\n  return payload;\n};\n\n\n/**\n * Encode jwt\n *\n * @param {Object} payload\n * @param {String} key\n * @param {String} algorithm\n * @param {Object} options\n * @return {String} token\n * @api public\n */\njwt.encode = function jwt_encode(payload, key, algorithm, options) {\n  // Check key\n  if (!key) {\n    throw new Error('Require key');\n  }\n\n  // Check algorithm, default is HS256\n  if (!algorithm) {\n    algorithm = 'HS256';\n  }\n\n  var signingMethod = algorithmMap[algorithm];\n  var signingType = typeMap[algorithm];\n  if (!signingMethod || !signingType) {\n    throw new Error('Algorithm not supported');\n  }\n\n  // header, typ is fixed value.\n  var header = { typ: 'JWT', alg: algorithm };\n  if (options && options.header) {\n    assignProperties(header, options.header);\n  }\n\n  // create segments, all segments should be base64 string\n  var segments = [];\n  segments.push(base64urlEncode(JSON.stringify(header)));\n  segments.push(base64urlEncode(JSON.stringify(payload)));\n  segments.push(sign(segments.join('.'), key, signingMethod, signingType));\n\n  return segments.join('.');\n};\n\n/**\n * private util functions\n */\n\nfunction assignProperties(dest, source) {\n  for (var attr in source) {\n    if (source.hasOwnProperty(attr)) {\n      dest[attr] = source[attr];\n    }\n  }\n}\n\nfunction verify(input, key, method, type, signature) {\n  if(type === \"hmac\") {\n    return (signature === sign(input, key, method, type));\n  }\n  else if(type == \"sign\") {\n    return crypto.createVerify(method)\n                 .update(input)\n                 .verify(key, base64urlUnescape(signature), 'base64');\n  }\n  else {\n    throw new Error('Algorithm type not recognized');\n  }\n}\n\nfunction sign(input, key, method, type) {\n  var base64str;\n  if(type === \"hmac\") {\n    base64str = crypto.createHmac(method, key).update(input).digest('base64');\n  }\n  else if(type == \"sign\") {\n    base64str = crypto.createSign(method).update(input).sign(key, 'base64');\n  }\n  else {\n    throw new Error('Algorithm type not recognized');\n  }\n\n  return base64urlEscape(base64str);\n}\n\nfunction base64urlDecode(str) {\n  return new Buffer(base64urlUnescape(str), 'base64').toString();\n}\n\nfunction base64urlUnescape(str) {\n  str += new Array(5 - str.length % 4).join('=');\n  return str.replace(/\\-/g, '+').replace(/_/g, '/');\n}\n\nfunction base64urlEncode(str) {\n  return base64urlEscape(new Buffer(str).toString('base64'));\n}\n\nfunction base64urlEscape(str) {\n  return str.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=/g, '');\n}\n\n\n//# sourceURL=webpack:///C:/Users/kcantrell/Desktop/dev/kals-node-adventures/node_modules/jwt-simple/lib/jwt.js?");

/***/ }),

/***/ "./controllers/authentication.js":
/*!***************************************!*\
  !*** ./controllers/authentication.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signup = undefined;\n\nvar _jwtSimple = __webpack_require__(/*! jwt-simple */ \"../../node_modules/jwt-simple/index.js\");\n\nvar _jwtSimple2 = _interopRequireDefault(_jwtSimple);\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst { User } = _models2.default;\n\nconst tokenForUser = user => {\n  const timestamp = new Date().getTime();\n  return _jwtSimple2.default.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);\n};\n\nconst signup = (req, res, next) => {\n  const { email, password } = req.body;\n  if (!email || !password) {\n    return res.status(422).send({ error: 'You must provide a email and password' });\n  }\n  // See if a user with given email exists\n  User.findOne({\n    where: {\n      email\n    }\n  }).then(user => {\n    // If user with email exists, return error\n    if (user) {\n      return res.status(422).send({ error: 'Email is in use' });\n    }\n    // If a user with email does NOT exist, create and save user\n    User.create({\n      email,\n      password\n    }).then(user => {\n      // Respond to request indicating user was created\n      res.json({ token: tokenForUser(user) });\n    }).catch(err => {\n      return next(err);\n    });\n  }).catch(err => {\n    return next(err);\n  });\n};\n\nexports.signup = signup;\n\n//# sourceURL=webpack:///./controllers/authentication.js?");

/***/ }),

/***/ "./db/config/config.js":
/*!*****************************!*\
  !*** ./db/config/config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../../env */ \"./env.js\");\nconst env = \"development\" || 'development';\n\nconst config = {\n  development: {\n    username: process.env.DB_USERNAME,\n    password: process.env.DB_PASSWORD,\n    database: \"grider_auth\",\n    host: \"127.0.0.1\",\n    port: \"5432\",\n    dialect: \"postgres\"\n  },\n  production: {\n    use_env_variable: \"DATABASE_URL\",\n    dialect: \"postgres\"\n  }\n};\n\nmodule.exports = config[env];\n\n//# sourceURL=webpack:///./db/config/config.js?");

/***/ }),

/***/ "./db/models/index.js":
/*!****************************!*\
  !*** ./db/models/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _user = __webpack_require__(/*! ./user */ \"./db/models/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _config = __webpack_require__(/*! ../config/config.js */ \"./db/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst models = {};\n\nlet sequelize;\nif (_config2.default.use_env_variable) {\n  sequelize = new _sequelize2.default(process.env[_config2.default.use_env_variable], _config2.default);\n} else {\n  sequelize = new _sequelize2.default(_config2.default.database, _config2.default.username, _config2.default.password, _config2.default);\n}\n\nconst modelModules = [_user2.default];\n\nmodelModules.forEach(modelModule => {\n  const model = modelModule(sequelize, _sequelize2.default);\n  models[model.name] = model;\n});\n\nObject.keys(models).forEach(modelName => {\n  if (models[modelName].associate) {\n    models[modelName].associate(models);\n  }\n});\n\nmodels.sequelize = sequelize;\nmodels.Sequelize = _sequelize2.default;\n\nexports.default = models;\n\n//# sourceURL=webpack:///./db/models/index.js?");

/***/ }),

/***/ "./db/models/user.js":
/*!***************************!*\
  !*** ./db/models/user.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nvar _bcrypt2 = _interopRequireDefault(_bcrypt);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (sequelize, DataTypes) => {\n  const User = sequelize.define('User', {\n    email: {\n      type: DataTypes.STRING,\n      unique: true\n    },\n    password: DataTypes.STRING\n  }, {});\n  User.beforeCreate((user, options) => {\n    return _bcrypt2.default.genSalt(10).then(salt => {\n      // needed to return the promise here for hook to fire\n      return _bcrypt2.default.hash(user.password, salt).then(hash => {\n        user.password = hash;\n      }).catch(err => {\n        return sequelize.Promise.reject(err);\n      });\n    }).catch(err => {\n      return sequelize.Promise.reject(err);\n    });\n  });\n  return User;\n};\n\n//# sourceURL=webpack:///./db/models/user.js?");

/***/ }),

/***/ "./env.js":
/*!****************!*\
  !*** ./env.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\nvar _dotenv2 = _interopRequireDefault(_dotenv);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_dotenv2.default.config({ silent: true });\n\n//# sourceURL=webpack:///./env.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _http = __webpack_require__(/*! http */ \"http\");\n\nvar _http2 = _interopRequireDefault(_http);\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _env = __webpack_require__(/*! ./env */ \"./env.js\");\n\nvar _env2 = _interopRequireDefault(_env);\n\nvar _router = __webpack_require__(/*! ./router */ \"./router.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)();\nconst PORT = process.env.PORT || 3000;\n\n// APP SETUP\napp.set('view engine', 'pug');\napp.use((0, _morgan2.default)('combined'));\napp.use(_express2.default.json({ type: '*/*' }));\n(0, _router2.default)(app);\n\n// SERVER SETUP\nconst server = _http2.default.createServer(app);\nserver.listen(PORT);\nconsole.log('Server listening on:', PORT);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _authentication = __webpack_require__(/*! ./controllers/authentication */ \"./controllers/authentication.js\");\n\nvar Auth = _interopRequireWildcard(_authentication);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.default = app => {\n  app.post('/signup', Auth.signup);\n};\n\n//# sourceURL=webpack:///./router.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });