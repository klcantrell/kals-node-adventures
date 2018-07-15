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

/***/ "../node_modules/method-override/index.js":
/*!************************************************!*\
  !*** ../node_modules/method-override/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * method-override\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2014 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n */\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('method-override')\nvar methods = __webpack_require__(/*! methods */ \"methods\")\nvar parseurl = __webpack_require__(/*! parseurl */ \"parseurl\")\nvar querystring = __webpack_require__(/*! querystring */ \"querystring\")\nvar vary = __webpack_require__(/*! vary */ \"vary\")\n\n/**\n * Method Override:\n *\n * Provides faux HTTP method support.\n *\n * Pass an optional `getter` to use when checking for\n * a method override.\n *\n * A string is converted to a getter that will look for\n * the method in `req.body[getter]` and a function will be\n * called with `req` and expects the method to be returned.\n * If the string starts with `X-` then it will look in\n * `req.headers[getter]` instead.\n *\n * The original method is available via `req.originalMethod`.\n *\n * @param {string|function} [getter=X-HTTP-Method-Override]\n * @param {object} [options]\n * @return {function}\n * @api public\n */\n\nmodule.exports = function methodOverride (getter, options) {\n  var opts = options || {}\n\n  // get the getter fn\n  var get = typeof getter === 'function'\n    ? getter\n    : createGetter(getter || 'X-HTTP-Method-Override')\n\n  // get allowed request methods to examine\n  var methods = opts.methods === undefined\n    ? ['POST']\n    : opts.methods\n\n  return function methodOverride (req, res, next) {\n    var method\n    var val\n\n    req.originalMethod = req.originalMethod || req.method\n\n    // validate request is an allowed method\n    if (methods && methods.indexOf(req.originalMethod) === -1) {\n      return next()\n    }\n\n    val = get(req, res)\n    method = Array.isArray(val)\n      ? val[0]\n      : val\n\n    // replace\n    if (method !== undefined && supports(method)) {\n      req.method = method.toUpperCase()\n      debug('override %s as %s', req.originalMethod, req.method)\n    }\n\n    next()\n  }\n}\n\n/**\n * Create a getter for the given string.\n */\n\nfunction createGetter (str) {\n  if (str.substr(0, 2).toUpperCase() === 'X-') {\n    // header getter\n    return createHeaderGetter(str)\n  }\n\n  return createQueryGetter(str)\n}\n\n/**\n * Create a getter for the given query key name.\n */\n\nfunction createQueryGetter (key) {\n  return function (req, res) {\n    var url = parseurl(req)\n    var query = querystring.parse(url.query || '')\n    return query[key]\n  }\n}\n\n/**\n * Create a getter for the given header name.\n */\n\nfunction createHeaderGetter (str) {\n  var name = str.toLowerCase()\n\n  return function (req, res) {\n    // set appropriate Vary header\n    vary(res, str)\n\n    // get header\n    var header = req.headers[name]\n\n    if (!header) {\n      return undefined\n    }\n\n    // multiple headers get joined with comma by node.js core\n    var index = header.indexOf(',')\n\n    // return first value\n    return index !== -1\n      ? header.substr(0, index).trim()\n      : header.trim()\n  }\n}\n\n/**\n * Check if node supports `method`.\n */\n\nfunction supports (method) {\n  return method &&\n    typeof method === 'string' &&\n    methods.indexOf(method.toLowerCase()) !== -1\n}\n\n\n//# sourceURL=webpack:///../node_modules/method-override/index.js?");

/***/ }),

/***/ "./db/config/config.json":
/*!*******************************!*\
  !*** ./db/config/config.json ***!
  \*******************************/
/*! exports provided: development, test, default */
/***/ (function(module) {

eval("module.exports = {\"development\":{\"username\":\"postgres\",\"password\":\"14!wonderwall\",\"database\":\"restful_blog\",\"host\":\"127.0.0.1\",\"port\":\"5432\",\"dialect\":\"postgres\"},\"test\":{\"username\":\"postgres\",\"password\":\"14!wonderwall\",\"database\":\"restful_blog\",\"host\":\"127.0.0.1\",\"port\":\"5432\",\"dialect\":\"postgres\"}};\n\n//# sourceURL=webpack:///./db/config/config.json?");

/***/ }),

/***/ "./db/models/index.js":
/*!****************************!*\
  !*** ./db/models/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar env = \"development\" || 'development';\nvar modelspath = _path2.default.join(__dirname, 'db/models');\nvar config = __webpack_require__(/*! ../config/config.json */ \"./db/config/config.json\")[env];\nvar basename = 'index.js';\nvar db = {};\n\nvar sequelize = void 0;\nif (config.use_env_variable) {\n  sequelize = new _sequelize2.default(process.env[config.use_env_variable], config);\n} else {\n  sequelize = new _sequelize2.default(config.database, config.username, config.password, config);\n}\n\n_fs2.default.readdirSync(modelspath).filter(function (file) {\n  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';\n}).forEach(function (file) {\n  var model = sequelize['import'](_path2.default.join(modelspath, file));\n  db[model.name] = model;\n});\n\nObject.keys(db).forEach(function (modelName) {\n  if (db[modelName].associate) {\n    db[modelName].associate(db);\n  }\n});\n\ndb.sequelize = sequelize;\ndb.Sequelize = _sequelize2.default;\n\nexports.default = db;\n\n//# sourceURL=webpack:///./db/models/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nvar _methodOverride = __webpack_require__(/*! method-override */ \"../node_modules/method-override/index.js\");\n\nvar _methodOverride2 = _interopRequireDefault(_methodOverride);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.set('view engine', 'pug');\napp.use(_express2.default.static('public'));\napp.use(_express2.default.urlencoded({ extended: true }));\napp.use((0, _methodOverride2.default)(\"_method\"));\n\napp.get('/', function (req, res) {\n  res.redirect('/blogs');\n});\n\napp.get('/blogs', function (req, res) {\n  _models2.default.Blog.all().then(function (blogs) {\n    res.render('index', { blogs: blogs });\n  }).catch(function (err) {\n    return res.send(err);\n  });\n});\n\napp.post('/blogs', function (req, res) {\n  var _req$body$blog = req.body.blog,\n      title = _req$body$blog.title,\n      image = _req$body$blog.image,\n      body = _req$body$blog.body;\n\n  _models2.default.Blog.create({ title: title, image: image, body: body }).then(function () {\n    res.redirect('/blogs');\n  }).catch(function (err) {\n    return res.send(err);\n  });\n});\n\napp.get('/blogs/new', function (req, res) {\n  res.render('new');\n});\n\napp.get('/blogs/:id', function (req, res) {\n  _models2.default.Blog.findById(req.params.id).then(function (blog) {\n    return res.render('show', { blog: blog });\n  }).catch(function (err) {\n    return res.redirect('/blogs');\n  });\n});\n\napp.get('/blogs/:id/edit', function (req, res) {\n  _models2.default.Blog.findById(req.params.id).then(function (blog) {\n    res.render('edit', { blog: blog });\n  });\n});\n\napp.put('/blogs/:id', function (req, res) {\n  var _req$body$blog2 = req.body.blog,\n      title = _req$body$blog2.title,\n      image = _req$body$blog2.image,\n      body = _req$body$blog2.body;\n\n  _models2.default.Blog.findById(req.params.id).then(function (blog) {\n    if (!blog) {\n      return res.status(404).send(\"Todo not found\");\n    }\n    return blog.update({ title: title, image: image, body: body }).then(function () {\n      res.redirect('/blogs/' + blog.id);\n    });\n  }).catch(function (err) {\n    return res.redirect('/blogs');\n  });\n});\n\napp.listen(3000, function () {\n  console.log('Restul Blog server is running');\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "methods":
/*!**************************!*\
  !*** external "methods" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"methods\");\n\n//# sourceURL=webpack:///external_%22methods%22?");

/***/ }),

/***/ "parseurl":
/*!***************************!*\
  !*** external "parseurl" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"parseurl\");\n\n//# sourceURL=webpack:///external_%22parseurl%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "vary":
/*!***********************!*\
  !*** external "vary" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vary\");\n\n//# sourceURL=webpack:///external_%22vary%22?");

/***/ })

/******/ });