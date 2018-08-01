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

/***/ "./controllers/authentication.js":
/*!***************************************!*\
  !*** ./controllers/authentication.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = undefined;\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst { User } = _models2.default;\n\nconst signUp = (req, res, next) => {\n  const { email, password } = req.body;\n  if (!email || !password) {\n    return res.status(422).send({ error: 'You must provide a email and password' });\n  }\n  // See if a user with given email exists\n  User.findOne({\n    where: {\n      email\n    }\n  }).then(user => {\n    // If user with email exists, return error\n    if (user) {\n      return res.status(422).send({ error: 'Email is in use' });\n    }\n    // If a user with email does NOT exist, create and save user\n    User.create({\n      email,\n      password\n    }).then(user => {\n      // Respond to request indicating user was created\n      res.json({ success: true });\n    }).catch(err => {\n      return next(err);\n    });\n  }).catch(err => {\n    return next(err);\n  });\n};\n\nexports.signUp = signUp;\n\n//# sourceURL=webpack:///./controllers/authentication.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nvar _bcrypt2 = _interopRequireDefault(_bcrypt);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (sequelize, DataTypes) => {\n  const User = sequelize.define('User', {\n    email: {\n      type: DataTypes.STRING,\n      unique: true\n    },\n    password: DataTypes.STRING\n  }, {});\n  User.beforeCreate((user, options) => {\n    return _bcrypt2.default.genSalt(10).then(salt => {\n      _bcrypt2.default.hash(user.password, salt).then(hash => {\n        user.password = hash;\n      }).catch(err => {\n        return sequelize.Promise.reject(err);\n      });\n    }).catch(err => {\n      return sequelize.Promise.reject(err);\n    });\n  });\n  return User;\n};\n\n//# sourceURL=webpack:///./db/models/user.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _authentication = __webpack_require__(/*! ./controllers/authentication */ \"./controllers/authentication.js\");\n\nvar Auth = _interopRequireWildcard(_authentication);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.default = app => {\n  app.post('/signup', Auth.signUp);\n};\n\n//# sourceURL=webpack:///./router.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

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