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

eval("module.exports = {\"development\":{\"username\":\"postgres\",\"password\":\"14!wonderwall\",\"database\":\"associations_practice\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"},\"test\":{\"username\":\"postgres\",\"password\":\"14!wonderwall\",\"database\":\"associations_practice\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"}};\n\n//# sourceURL=webpack:///./db/config/config.json?");

/***/ }),

/***/ "./db/models/index.js":
/*!****************************!*\
  !*** ./db/models/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _user = __webpack_require__(/*! ./user */ \"./db/models/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _post = __webpack_require__(/*! ./post */ \"./db/models/post.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar env = \"development\" || 'development';\nvar config = __webpack_require__(/*! ../config/config.json */ \"./db/config/config.json\")[env];\nvar models = {};\n\nvar sequelize = void 0;\nif (config.use_env_variable) {\n  sequelize = new _sequelize2.default(process.env[config.use_env_variable], config);\n} else {\n  sequelize = new _sequelize2.default(config.database, config.username, config.password, config);\n}\n\nvar modelModules = [_user2.default, _post2.default];\n\nmodelModules.forEach(function (modelModule) {\n  var model = modelModule(sequelize, _sequelize2.default);\n  models[model.name] = model;\n});\n\nObject.keys(models).forEach(function (modelName) {\n  if (models[modelName].associate) {\n    models[modelName].associate(models);\n  }\n});\n\nmodels.sequelize = sequelize;\nmodels.Sequelize = _sequelize2.default;\n\nexports.default = models;\n\n//# sourceURL=webpack:///./db/models/index.js?");

/***/ }),

/***/ "./db/models/post.js":
/*!***************************!*\
  !*** ./db/models/post.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (sequelize, DataTypes) {\n  var Post = sequelize.define('Post', {\n    title: DataTypes.STRING,\n    content: DataTypes.STRING\n  }, {});\n  Post.associate = function (models) {\n    Post.belongsTo(models.User, {\n      foreignKey: 'userId',\n      onDelete: 'CASCADE'\n    });\n  };\n  return Post;\n};\n\n//# sourceURL=webpack:///./db/models/post.js?");

/***/ }),

/***/ "./db/models/user.js":
/*!***************************!*\
  !*** ./db/models/user.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (sequelize, DataTypes) {\n  var User = sequelize.define('User', {\n    email: DataTypes.STRING,\n    name: DataTypes.STRING\n  }, {});\n  User.associate = function (models) {\n    User.hasMany(models.Post, {\n      foreignKey: 'userId',\n      as: 'posts'\n    });\n  };\n  return User;\n};\n\n//# sourceURL=webpack:///./db/models/user.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar User = _models2.default.User,\n    Post = _models2.default.Post;\n\n// const testUser = User.build({\n//   email: 'cloud@strife.ff',\n//   name: 'Cloud Strife',\n// });\n\n// testUser\n//   .save()\n//   .then(savedUser => console.log(savedUser))\n//   .catch(err => console.log(err));\n\n// const testPost = Post.create({\n//   title: 'Reflections on Apples',\n//   content: 'They are delicious',\n//   userId: 1,\n// })\n//   .then(savedPost => console.log(savedPost))\n//   .catch(err => console.log(err));\n\nUser.findOne({\n  where: {\n    name: 'Cloud Strife'\n  },\n  include: [{\n    model: Post,\n    as: 'posts'\n  }]\n}).then(function (users) {\n  return console.log(users.posts);\n}).catch(function (err) {\n  return console.log(err);\n});\n\n//# sourceURL=webpack:///./src/app.js?");

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