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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db/config/config.json":
/*!*******************************!*\
  !*** ./db/config/config.json ***!
  \*******************************/
/*! exports provided: development, test, default */
/***/ (function(module) {

eval("module.exports = {\"development\":{\"username\":\"postgres\",\"password\":\"14!wonderwall\",\"database\":\"auth_practice\",\"host\":\"127.0.0.1\",\"port\":\"5432\",\"dialect\":\"postgres\"},\"test\":{\"username\":\"postgres\",\"password\":\"14!wonderwall\",\"database\":\"auth_practice\",\"host\":\"127.0.0.1\",\"port\":\"5432\",\"dialect\":\"postgres\"}};\n\n//# sourceURL=webpack:///./db/config/config.json?");

/***/ }),

/***/ "./db/models/index.js":
/*!****************************!*\
  !*** ./db/models/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _user = __webpack_require__(/*! ./user */ \"./db/models/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar env = \"development\" || 'development';\nvar config = __webpack_require__(/*! ../config/config.json */ \"./db/config/config.json\")[env];\nvar models = {};\n\nvar sequelize = void 0;\nif (config.use_env_variable) {\n  sequelize = new _sequelize2.default(process.env[config.use_env_variable], config);\n} else {\n  sequelize = new _sequelize2.default(config.database, config.username, config.password, config);\n}\n\nvar modelModules = [_user2.default];\n\nmodelModules.forEach(function (modelModule) {\n  var model = modelModule(sequelize, _sequelize2.default);\n  models[model.name] = model;\n});\n\nObject.keys(models).forEach(function (modelName) {\n  if (models[modelName].associate) {\n    models[modelName].associate(models);\n  }\n});\n\nmodels.sequelize = sequelize;\nmodels.Sequelize = _sequelize2.default;\n\nexports.default = models;\n\n//# sourceURL=webpack:///./db/models/index.js?");

/***/ }),

/***/ "./db/models/user.js":
/*!***************************!*\
  !*** ./db/models/user.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nvar _bcrypt2 = _interopRequireDefault(_bcrypt);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (sequelize, DataTypes) {\n  var User = sequelize.define('User', {\n    username: DataTypes.STRING,\n    password: DataTypes.STRING\n  }, {});\n  User.generateHash = function (password) {\n    return _bcrypt2.default.hashSync(password, _bcrypt2.default.genSaltSync(8), null);\n  };\n  User.validPassword = function (password) {\n    return _bcrypt2.default.compareSync(password, undefined.password);\n  };\n  User.serialize = function () {\n    return function (user, done) {\n      done(null, user.id);\n    };\n  };\n  User.deserialize = function () {\n    return function (id, done) {\n      User.findById(id).then(function (user) {\n        if (user) {\n          done(null, user.get());\n        } else {\n          done(user.errors, null);\n        }\n      });\n    };\n  };\n\n  return User;\n};\n\n//# sourceURL=webpack:///./db/models/user.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _expressSession = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar User = _models2.default.User;\n\napp.set('view engine', 'pug');\napp.use((0, _expressSession2.default)({\n  secret: 'not all who wander are lost',\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\n_passport2.default.serializeUser(User.serialize());\n_passport2.default.deserializeUser(User.deserialize());\n\napp.get('/', function (req, res) {\n  res.render('home');\n});\n\napp.get('/secret', function (req, res) {\n  res.render('secret');\n});\n\napp.listen(3000, function () {\n  console.log('Server started');\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

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