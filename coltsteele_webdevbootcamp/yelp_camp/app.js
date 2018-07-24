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

eval("module.exports = {\"development\":{\"username\":\"postgres\",\"password\":\"14!wonderwall\",\"database\":\"yelp_camp\",\"host\":\"127.0.0.1\",\"port\":\"5432\",\"dialect\":\"postgres\"},\"test\":{\"username\":\"postgres\",\"password\":\"14!wonderwall\",\"database\":\"yelp_camp\",\"host\":\"127.0.0.1\",\"port\":\"5432\",\"dialect\":\"postgres\"}};\n\n//# sourceURL=webpack:///./db/config/config.json?");

/***/ }),

/***/ "./db/models/campground.js":
/*!*********************************!*\
  !*** ./db/models/campground.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (sequelize, DataTypes) {\n  var Campground = sequelize.define('Campground', {\n    name: DataTypes.STRING,\n    image: DataTypes.STRING,\n    description: DataTypes.STRING\n  }, {});\n  Campground.associate = function (models) {\n    Campground.hasMany(models.Comment, {\n      foreignKey: 'campground_id',\n      as: 'comments'\n    });\n  };\n  return Campground;\n};\n\n//# sourceURL=webpack:///./db/models/campground.js?");

/***/ }),

/***/ "./db/models/comment.js":
/*!******************************!*\
  !*** ./db/models/comment.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (sequelize, DataTypes) {\n  var Comment = sequelize.define('Comment', {\n    text: DataTypes.STRING\n  }, {});\n  Comment.associate = function (models) {\n    Comment.belongsTo(models.Campground, {\n      foreignKey: 'campground_id',\n      as: 'campground'\n    });\n    Comment.belongsTo(models.User, {\n      foreignKey: 'user_id',\n      as: 'author'\n    });\n  };\n  return Comment;\n};\n\n//# sourceURL=webpack:///./db/models/comment.js?");

/***/ }),

/***/ "./db/models/index.js":
/*!****************************!*\
  !*** ./db/models/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _campground = __webpack_require__(/*! ./campground */ \"./db/models/campground.js\");\n\nvar _campground2 = _interopRequireDefault(_campground);\n\nvar _comment = __webpack_require__(/*! ./comment */ \"./db/models/comment.js\");\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nvar _user = __webpack_require__(/*! ./user */ \"./db/models/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar env = \"development\" || 'development';\nvar config = __webpack_require__(/*! ../config/config.json */ \"./db/config/config.json\")[env];\nvar models = {};\n\nvar sequelize = void 0;\nif (config.use_env_variable) {\n  sequelize = new _sequelize2.default(process.env[config.use_env_variable], config);\n} else {\n  sequelize = new _sequelize2.default(config.database, config.username, config.password, config);\n}\n\nvar modelModules = [_campground2.default, _comment2.default, _user2.default];\n\nmodelModules.forEach(function (modelModule) {\n  var model = modelModule(sequelize, _sequelize2.default);\n  models[model.name] = model;\n});\n\nObject.keys(models).forEach(function (modelName) {\n  if (models[modelName].associate) {\n    models[modelName].associate(models);\n  }\n});\n\nmodels.sequelize = sequelize;\nmodels.Sequelize = _sequelize2.default;\n\nexports.default = models;\n\n//# sourceURL=webpack:///./db/models/index.js?");

/***/ }),

/***/ "./db/models/user.js":
/*!***************************!*\
  !*** ./db/models/user.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nvar _bcrypt2 = _interopRequireDefault(_bcrypt);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (sequelize, DataTypes) {\n  var User = sequelize.define('User', {\n    username: DataTypes.STRING,\n    password: DataTypes.STRING\n  }, {});\n  User.associate = function (models) {\n    User.hasMany(models.Comment, {\n      foreignKey: 'user_id',\n      as: 'comments'\n    });\n  };\n  User.generateHash = function (password) {\n    return _bcrypt2.default.hashSync(password, _bcrypt2.default.genSaltSync(8), null);\n  };\n  User.prototype.validPassword = function (password) {\n    return _bcrypt2.default.compareSync(password, this.password);\n  };\n  User.serialize = function () {\n    return function (user, done) {\n      done(null, user.id);\n    };\n  };\n  User.deserialize = function () {\n    return function (id, done) {\n      User.findById(id).then(function (user) {\n        done(null, user.get());\n      }).catch(function (err) {\n        done(err, null);\n      });\n    };\n  };\n  return User;\n};\n\n//# sourceURL=webpack:///./db/models/user.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _expressSession = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _connectFlash = __webpack_require__(/*! connect-flash */ \"connect-flash\");\n\nvar _connectFlash2 = _interopRequireDefault(_connectFlash);\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// SETUP\n\nvar app = (0, _express2.default)();\nvar LocalStrategy = _passportLocal2.default.Strategy;\nvar Campground = _models2.default.Campground,\n    Comment = _models2.default.Comment,\n    User = _models2.default.User;\n\napp.set('view engine', 'pug');\napp.use(_express2.default.static(_path2.default.join(__dirname + '/public')));\napp.use(_express2.default.urlencoded({ extended: true }));\napp.use((0, _expressSession2.default)({\n  secret: 'not all who wander are lost',\n  resave: false,\n  saveUninitialized: false\n}));\n\n// MIDDLEWARE\n\nvar isLoggedIn = function isLoggedIn(req, res, next) {\n  if (req.isAuthenticated()) {\n    return next();\n  }\n  res.redirect('/login');\n};\n\n// PASSPORT\n\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\napp.use((0, _connectFlash2.default)());\n_passport2.default.serializeUser(User.serialize());\n_passport2.default.deserializeUser(User.deserialize());\n_passport2.default.use('local-signup', new LocalStrategy({\n  usernameField: 'username',\n  passwordField: 'password',\n  passReqToCallback: true\n}, function (req, username, password, done) {\n  User.findOne({\n    where: {\n      username: username\n    }\n  }).then(function (user) {\n    if (user) {\n      return done(null, false, req.flash('signupMessage', 'That username already exists'));\n    }\n    User.create({\n      username: username,\n      password: User.generateHash(password)\n    }).then(function (user) {\n      if (user) {\n        return done(null, user);\n      } else {\n        return done(null, false);\n      }\n    });\n  }).catch(function (err) {\n    console.log(err);\n  });\n}));\n_passport2.default.use('local-login', new LocalStrategy({\n  usernameField: 'username',\n  passwordField: 'password',\n  passReqToCallback: true\n}, function (req, username, password, done) {\n  User.findOne({\n    where: {\n      username: username\n    }\n  }).then(function (user) {\n    if (!user) {\n      return done(null, false, req.flash('loginMessage', 'No user found'));\n    }\n    if (!user.validPassword(password)) {\n      return done(null, false, req.flash('loginMessage', 'Password wrong'));\n    }\n    return done(null, user);\n  }).catch(function (err) {\n    throw err;\n  });\n}));\n\n// ROUTES\n\napp.get('/', function (req, res) {\n  res.render('landing');\n});\n\napp.get('/campgrounds', function (req, res) {\n  Campground.findAll().then(function (campgrounds) {\n    res.status(200).render('campgrounds/index', { campgrounds: campgrounds });\n  }).catch(function (err) {\n    res.status(400).send(error);\n  });\n});\n\napp.post('/campgrounds', function (req, res) {\n  var _req$body = req.body,\n      name = _req$body.name,\n      image = _req$body.image,\n      description = _req$body.description;\n\n  Campground.create({ name: name, image: image, description: description }).then(function () {\n    return res.status(200).redirect('/campgrounds');\n  }).catch(function (err) {\n    return res.status(400).send(err);\n  });\n});\n\napp.get('/campgrounds/new', function (req, res) {\n  res.render('campgrounds/new');\n});\n\napp.get('/campgrounds/:id', function (req, res) {\n  Campground.findById(req.params.id, {\n    include: [{\n      model: Comment,\n      as: 'comments',\n      include: [{\n        model: User,\n        as: 'author'\n      }]\n    }]\n  }).then(function (campground) {\n    return res.status(200).render('campgrounds/show', { campground: campground });\n  }).catch(function (err) {\n    return res.status(400).send(err);\n  });\n});\n\napp.get('/campgrounds/:id/comments/new', function (req, res) {\n  Campground.findById(req.params.id).then(function (campground) {\n    res.render('comments/new', { campground: campground });\n  }).catch(function (err) {\n    return res.send(err);\n  });\n});\n\napp.post('/campgrounds/:id/comments', function (req, res) {\n  Campground.findById(req.params.id).then(function (campground) {\n    var user_id = 1;\n    Comment.create({\n      text: req.body.comment.text,\n      campground_id: campground.id,\n      user_id: user_id\n    }).then(function () {\n      return res.redirect('/campgrounds/' + campground.id);\n    }).catch(function () {\n      return res.redirect('/campgrounds/');\n    });\n  }).catch(function (err) {\n    res.redirect('/campgrounds');\n  });\n});\n\napp.get('/register', function (req, res) {\n  res.render('register', { message: req.flash('signupMessage') });\n});\n\napp.post('/register', _passport2.default.authenticate('local-signup', {\n  successRedirect: '/campgrounds',\n  failureRedirect: '/register'\n}));\n\napp.listen(3000, function () {\n  console.log('YelpCamp server has started');\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "connect-flash":
/*!********************************!*\
  !*** external "connect-flash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-flash\");\n\n//# sourceURL=webpack:///external_%22connect-flash%22?");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

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