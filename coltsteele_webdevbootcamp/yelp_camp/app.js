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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = (sequelize, DataTypes) => {\n  const Campground = sequelize.define('Campground', {\n    name: DataTypes.STRING,\n    image: DataTypes.STRING,\n    imageId: DataTypes.STRING,\n    description: DataTypes.STRING,\n    price: DataTypes.STRING\n  }, {});\n  Campground.associate = models => {\n    Campground.hasMany(models.Comment, {\n      foreignKey: 'campgroundId',\n      as: 'comments'\n    });\n    Campground.belongsTo(models.User, {\n      foreignKey: 'userId',\n      as: 'user'\n    });\n  };\n  return Campground;\n};\n\n//# sourceURL=webpack:///./db/models/campground.js?");

/***/ }),

/***/ "./db/models/comment.js":
/*!******************************!*\
  !*** ./db/models/comment.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = (sequelize, DataTypes) => {\n  const Comment = sequelize.define('Comment', {\n    text: DataTypes.STRING\n  }, {});\n  Comment.associate = models => {\n    Comment.belongsTo(models.Campground, {\n      foreignKey: 'campgroundId',\n      as: 'campground'\n    });\n    Comment.belongsTo(models.User, {\n      foreignKey: 'userId',\n      as: 'author'\n    });\n  };\n  return Comment;\n};\n\n//# sourceURL=webpack:///./db/models/comment.js?");

/***/ }),

/***/ "./db/models/index.js":
/*!****************************!*\
  !*** ./db/models/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _sequelize2 = _interopRequireDefault(_sequelize);\n\nvar _campground = __webpack_require__(/*! ./campground */ \"./db/models/campground.js\");\n\nvar _campground2 = _interopRequireDefault(_campground);\n\nvar _comment = __webpack_require__(/*! ./comment */ \"./db/models/comment.js\");\n\nvar _comment2 = _interopRequireDefault(_comment);\n\nvar _user = __webpack_require__(/*! ./user */ \"./db/models/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst env = \"development\" || 'development';\nconst config = __webpack_require__(/*! ../config/config.json */ \"./db/config/config.json\")[env];\nconst models = {};\n\nlet sequelize;\nif (config.use_env_variable) {\n  sequelize = new _sequelize2.default(process.env[config.use_env_variable], config);\n} else {\n  sequelize = new _sequelize2.default(config.database, config.username, config.password, config);\n}\n\nconst modelModules = [_campground2.default, _comment2.default, _user2.default];\n\nmodelModules.forEach(modelModule => {\n  const model = modelModule(sequelize, _sequelize2.default);\n  models[model.name] = model;\n});\n\nObject.keys(models).forEach(modelName => {\n  if (models[modelName].associate) {\n    models[modelName].associate(models);\n  }\n});\n\nmodels.sequelize = sequelize;\nmodels.Sequelize = _sequelize2.default;\n\nexports.default = models;\n\n//# sourceURL=webpack:///./db/models/index.js?");

/***/ }),

/***/ "./db/models/user.js":
/*!***************************!*\
  !*** ./db/models/user.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nvar _bcrypt2 = _interopRequireDefault(_bcrypt);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (sequelize, DataTypes) => {\n  const User = sequelize.define('User', {\n    username: DataTypes.STRING,\n    password: DataTypes.STRING\n  }, {});\n  User.associate = models => {\n    User.hasMany(models.Comment, {\n      foreignKey: 'userId',\n      as: 'comments'\n    });\n    User.hasMany(models.Campground, {\n      foreignKey: 'userId',\n      as: 'campgrounds'\n    });\n  };\n  User.generateHash = password => {\n    return _bcrypt2.default.hashSync(password, _bcrypt2.default.genSaltSync(8), null);\n  };\n  User.prototype.validPassword = function (password) {\n    return _bcrypt2.default.compareSync(password, this.password);\n  };\n  User.serialize = () => {\n    return (user, done) => {\n      done(null, user.id);\n    };\n  };\n  User.deserialize = () => {\n    return (id, done) => {\n      User.findById(id).then(user => {\n        done(null, user.get());\n      }).catch(err => {\n        done(err, null);\n      });\n    };\n  };\n  return User;\n};\n\n//# sourceURL=webpack:///./db/models/user.js?");

/***/ }),

/***/ "./routes/campgrounds.js":
/*!*******************************!*\
  !*** ./routes/campgrounds.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _multer = __webpack_require__(/*! multer */ \"multer\");\n\nvar _multer2 = _interopRequireDefault(_multer);\n\nvar _cloudinary = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n\nvar _cloudinary2 = _interopRequireDefault(_cloudinary);\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nvar _middleware = __webpack_require__(/*! ../src/middleware */ \"./src/middleware.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\nconst { Campground, Comment, User } = _models2.default;\n// MULTER SETUP\nconst storage = _multer2.default.diskStorage({\n  filename: (req, file, cb) => {\n    cb(null, Date.now() + file.originalname);\n  }\n});\nconst imageFilter = (req, file, cb) => {\n  if (!file.originalname.match(/\\.(jpg|jpeg|png|gif)$/i)) {\n    return cb(new error('Only image files are allowed!'), false);\n  }\n  cb(null, true);\n};\nconst upload = (0, _multer2.default)({ storage, imageFilter });\n// CLOUDINARY SETUP\n_cloudinary2.default.config({\n  cloud_name: 'kalalau',\n  api_key: process.env.CLOUDINARY_KEY,\n  api_secret: process.env.CLOUDINARY_SECRET\n});\n\nrouter.get('/', (req, res) => {\n  Campground.findAll({\n    include: [{\n      model: User,\n      as: 'user'\n    }]\n  }).then(campgrounds => {\n    res.status(200).render('campgrounds/index', { campgrounds });\n  }).catch(err => {\n    res.status(400).send(err);\n  });\n});\n\nrouter.post('/', _middleware.isLoggedIn, upload.single('image'), (req, res) => {\n  _cloudinary2.default.v2.uploader.upload(req.file.path, (err, result) => {\n    if (err) {\n      req.flash('message', 'Something went wrong');\n      return res.redirect('back');\n    }\n    req.body.campground.image = result.secure_url;\n    req.body.campground.imageId = result.public_id;\n    req.body.campground.userId = req.user.id;\n    Campground.create(req.body.campground).then(() => res.status(200).redirect('/campgrounds')).catch(err => {\n      req.flash('message', 'Something went wrong');\n      res.redirect('back');\n    });\n  });\n});\n\nrouter.get('/new', _middleware.isLoggedIn, (req, res) => {\n  res.render('campgrounds/new');\n});\n\nrouter.get('/:id', (req, res) => {\n  Campground.findAll({\n    include: [{\n      model: Comment,\n      as: 'comments',\n      include: [{\n        model: User,\n        as: 'author'\n      }]\n    }, {\n      model: User,\n      as: 'user'\n    }]\n  }).then(allCampgrounds => {\n    const featuredCampground = allCampgrounds.filter(c => c.id === Number(req.params.id))[0];\n    res.render('campgrounds/show', { campground: featuredCampground, allCampgrounds });\n  }).catch(err => {\n    console.log(err);\n    req.flash('fail', 'Something went wrong');\n    res.redirect('back');\n  });\n});\n\nrouter.get('/:id/edit', _middleware.isCampgroundOwner, (req, res) => {\n  Campground.findById(req.params.id).then(campground => {\n    res.render('campgrounds/edit', { campground });\n  }).catch(err => {\n    req.flash('message', 'Something went wrong');\n    res.redirect('back');\n  });\n});\n\nrouter.put('/:id', _middleware.isCampgroundOwner, upload.single('image'), (req, res) => {\n  Campground.findById(req.params.id).then(async campground => {\n    if (!campground) {\n      req.flash('message', 'Something went wrong');\n      return res.redirect('back');\n    }\n    let updatedCampground = _extends({}, campground.values);\n    if (req.file) {\n      try {\n        await _cloudinary2.default.v2.uploader.destroy(campground.imageId);\n        const result = await _cloudinary2.default.v2.uploader.upload(req.file.path);\n        updatedCampground.image = result.secure_url;\n        updatedCampground.imageId = result.public_id;\n      } catch (err) {\n        req.flash('fail', 'Something went wrong');\n        res.redirect('back');\n      }\n    }\n    campground.update(updatedCampground).then(() => {\n      res.redirect(`/campgrounds/${campground.id}`);\n    }).catch(err => {\n      req.flash('message', 'Something went wrong');\n      res.redirect('back');\n    });\n  }).catch(() => {\n    req.flash('fail', 'Something went wrong');\n    res.redirect('back');\n  });\n});\n\nrouter.delete('/:id', _middleware.isCampgroundOwner, (req, res) => {\n  Campground.findById(req.params.id).then(async campground => {\n    if (!campground) {\n      req.flash('fail', 'Something went wrong');\n      res.redirect('back');\n    }\n    try {\n      await _cloudinary2.default.v2.uploader.destroy(campground.imageId);\n      await campground.destroy();\n      res.redirect(\"/campgrounds\");\n    } catch (err) {\n      req.flash('fail', 'Something went wrong');\n      res.redirect('back');\n    }\n  }).catch(() => {\n    req.flash('fail', 'Something went wrong');\n    res.redirect('back');\n  });\n});\n\nexports.default = router;\n\n//# sourceURL=webpack:///./routes/campgrounds.js?");

/***/ }),

/***/ "./routes/comments.js":
/*!****************************!*\
  !*** ./routes/comments.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nvar _middleware = __webpack_require__(/*! ../src/middleware */ \"./src/middleware.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router({ mergeParams: true });\nconst { Campground, Comment, User } = _models2.default;\n\nrouter.get('/new', _middleware.isLoggedIn, (req, res) => {\n  Campground.findById(req.params.id).then(campground => {\n    res.render('comments/new', { campground });\n  }).catch(err => res.send(err));\n});\n\nrouter.post('/', _middleware.isLoggedIn, (req, res) => {\n  Campground.findById(req.params.id).then(campground => {\n    Comment.create({\n      text: req.body.comment.text,\n      campground_id: campground.id,\n      user_id: req.user.id\n    }).then(() => res.redirect(`/campgrounds/${campground.id}`)).catch(() => res.redirect(`/campgrounds/`));\n  }).catch(err => {\n    res.redirect('/campgrounds');\n  });\n});\n\nrouter.get('/:comment_id/edit', _middleware.isCommentOwner, (req, res) => {\n  Comment.findById(req.params.comment_id, {\n    include: [{\n      model: Campground,\n      as: 'campground'\n    }]\n  }).then(comment => {\n    res.render('comments/edit', { comment });\n  }).catch(err => {\n    console.log(err);\n    res.redirect('campgrounds');\n  });\n});\n\nrouter.put('/:comment_id', _middleware.isCommentOwner, (req, res) => {\n  Comment.findById(req.params.comment_id).then(comment => {\n    if (!comment) {\n      req.flash('fail', 'Comment not found');\n      return res.redirect('back');\n    }\n    return comment.update(req.body.comment).then(() => {\n      res.redirect(`/campgrounds/${req.params.id}`);\n    }).catch(err => {\n      req.flash('fail', 'Something went wrong');\n      res.redirect('back');\n    });\n  }).catch(err => {\n    req.flash('fail', 'Something went wrong');\n    res.redirect('back');\n  });\n});\n\nrouter.delete('/:comment_id', _middleware.isCommentOwner, (req, res) => {\n  Comment.findById(req.params.comment_id).then(comment => {\n    if (!comment) {\n      req.flash('fail', 'Something went wrong');\n      return res.redirect('back');\n    }\n    return comment.destroy().then(() => {\n      req.flash('sucess', 'Successfully deleted');\n      res.redirect(`/campgrounds/${req.params.id}`);\n    }).catch(err => {\n      req.flash('fail', 'Something went wrong');\n      res.redirect('back');\n    });\n  }).catch(err => {\n    req.flash('fail', 'Something went wrong');\n    res.redirect('back');\n  });\n});\n\nexports.default = router;\n\n//# sourceURL=webpack:///./routes/comments.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _middleware = __webpack_require__(/*! ../src/middleware */ \"./src/middleware.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nexports.default = passport => {\n  router.use(_middleware.injectUserIntoLocals, _middleware.injectMessageIntoLocals);\n\n  router.get('/', (req, res) => {\n    res.render('landing');\n  });\n\n  router.get('/register', (req, res) => {\n    res.render('register');\n  });\n\n  router.post('/register', passport.authenticate('local-signup', {\n    successRedirect: '/campgrounds',\n    failureRedirect: '/register'\n  }));\n\n  router.get('/login', (req, res) => {\n    res.render('login');\n  });\n\n  router.post('/login', passport.authenticate('local-login', {\n    successRedirect: '/campgrounds',\n    failureRedirect: '/login'\n  }));\n\n  router.get('/logout', (req, res) => {\n    req.logout();\n    req.flash('success', 'You logged out');\n    res.redirect('/campgrounds');\n  });\n\n  return router;\n};\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressSession = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _connectFlash = __webpack_require__(/*! connect-flash */ \"connect-flash\");\n\nvar _connectFlash2 = _interopRequireDefault(_connectFlash);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _methodOverride = __webpack_require__(/*! method-override */ \"method-override\");\n\nvar _methodOverride2 = _interopRequireDefault(_methodOverride);\n\nvar _env = __webpack_require__(/*! ./env */ \"./src/env.js\");\n\nvar _env2 = _interopRequireDefault(_env);\n\nvar _passport3 = __webpack_require__(/*! ../src/passport */ \"./src/passport.js\");\n\nvar _passport4 = _interopRequireDefault(_passport3);\n\nvar _index = __webpack_require__(/*! ../routes/index */ \"./routes/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _campgrounds = __webpack_require__(/*! ../routes/campgrounds */ \"./routes/campgrounds.js\");\n\nvar _campgrounds2 = _interopRequireDefault(_campgrounds);\n\nvar _comments = __webpack_require__(/*! ../routes/comments */ \"./routes/comments.js\");\n\nvar _comments2 = _interopRequireDefault(_comments);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)();\napp.set('view engine', 'pug');\napp.use(_express2.default.static(_path2.default.join(__dirname + '/public')));\napp.use((0, _methodOverride2.default)('_method'));\napp.use(_express2.default.urlencoded({ extended: true }));\napp.use((0, _expressSession2.default)({\n  secret: 'not all who wander are lost',\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\n(0, _passport4.default)(_passport2.default);\napp.use((0, _connectFlash2.default)());\n\napp.use((0, _index2.default)(_passport2.default));\napp.use('/campgrounds', _campgrounds2.default);\napp.use('/campgrounds/:id/comments', _comments2.default);\n\napp.listen(3000, () => {\n  console.log('YelpCamp server has started');\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\nvar _dotenv2 = _interopRequireDefault(_dotenv);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_dotenv2.default.config({ silent: true });\n\n//# sourceURL=webpack:///./src/env.js?");

/***/ }),

/***/ "./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.injectMessageIntoLocals = exports.injectUserIntoLocals = exports.isCommentOwner = exports.isCampgroundOwner = exports.isLoggedIn = undefined;\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst { Campground, Comment, User } = _models2.default;\n\nconst isLoggedIn = exports.isLoggedIn = (req, res, next) => {\n  if (req.isAuthenticated()) {\n    return next();\n  }\n  req.flash('fail', 'You need to be logged in for that');\n  res.redirect('back');\n};\n\nconst isCampgroundOwner = exports.isCampgroundOwner = (req, res, next) => {\n  if (req.isAuthenticated()) {\n    Campground.findById(req.params.id, {\n      include: [{\n        model: User,\n        as: 'user'\n      }]\n    }).then(campground => {\n      if (!campground) {\n        req.flash('fail', 'You do not have permission for that');\n        return res.redirect(`back`);\n      }\n      if (campground.user.id === req.user.id) {\n        next();\n      } else {\n        req.flash('fail', 'You do not have permission for that');\n        res.redirect(`back`);\n      }\n    }).catch(err => {\n      req.flash('fail', 'Something went wrong');\n      res.redirect('back');\n    });\n  } else {\n    req.flash('fail', 'You need to be logged in for that');\n    res.redirect('back');\n  }\n};\n\nconst isCommentOwner = exports.isCommentOwner = (req, res, next) => {\n  if (req.isAuthenticated()) {\n    Comment.findById(req.params.comment_id, {\n      include: [{\n        model: User,\n        as: 'author',\n        attributes: ['id']\n      }]\n    }).then(comment => {\n      if (!comment) {\n        req.flash('fail', 'You do not have permission for that');\n        return res.redirect(`back`);\n      }\n      if (comment.author.id === req.user.id) {\n        next();\n      } else {\n        req.flash('fail', 'You do not have permission for that');\n        res.redirect('back');\n      }\n    }).catch(err => {\n      req.flash('fail', 'Something went wrong');\n      res.redirect('back');\n    });\n  } else {\n    req.flash('fail', 'You need to be logged in for that');\n    res.redirect('back');\n  }\n};\n\nconst injectUserIntoLocals = exports.injectUserIntoLocals = (req, res, next) => {\n  res.locals.currentUser = req.user;\n  next();\n};\n\nconst injectMessageIntoLocals = exports.injectMessageIntoLocals = (req, res, next) => {\n  res.locals.successMessage = req.flash('success');\n  res.locals.failMessage = req.flash('fail');\n  next();\n};\n\n//# sourceURL=webpack:///./src/middleware.js?");

/***/ }),

/***/ "./src/passport.js":
/*!*************************!*\
  !*** ./src/passport.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _models = __webpack_require__(/*! ../db/models */ \"./db/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst LocalStrategy = _passportLocal2.default.Strategy;\nconst { User } = _models2.default;\n\nexports.default = passport => {\n  passport.serializeUser(User.serialize());\n  passport.deserializeUser(User.deserialize());\n  passport.use('local-signup', new LocalStrategy({\n    usernameField: 'username',\n    passwordField: 'password',\n    passReqToCallback: true\n  }, (req, username, password, done) => {\n    User.findOne({\n      where: {\n        username\n      }\n    }).then(user => {\n      if (user) {\n        return done(null, false, req.flash('fail', 'That username already exists'));\n      }\n      User.create({\n        username,\n        password: User.generateHash(password)\n      }).then(user => {\n        if (user) {\n          return done(null, user, req.flash('success', `Welcome to YelpCamp ${user.username}`));\n        } else {\n          return done(null, false, req.flash('fail', 'Something went wrong'));\n        }\n      });\n    }).catch(err => {\n      console.log(err);\n      req.flash('fail', 'Something went wrong');\n    });\n  }));\n  passport.use('local-login', new LocalStrategy({\n    usernameField: 'username',\n    passwordField: 'password',\n    passReqToCallback: true\n  }, (req, username, password, done) => {\n    User.findOne({\n      where: {\n        username\n      }\n    }).then(user => {\n      if (!user) {\n        return done(null, false, req.flash('fail', 'No user found'));\n      }\n      if (!user.validPassword(password)) {\n        return done(null, false, req.flash('fail', 'Password wrong'));\n      }\n      return done(null, user, req.flash('success', `Welcome back ${user.username}`));\n    }).catch(err => {\n      console.log(err);\n      req.flash('fail', 'Something went wrong');\n    });\n  }));\n};\n\n//# sourceURL=webpack:///./src/passport.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cloudinary\");\n\n//# sourceURL=webpack:///external_%22cloudinary%22?");

/***/ }),

/***/ "connect-flash":
/*!********************************!*\
  !*** external "connect-flash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-flash\");\n\n//# sourceURL=webpack:///external_%22connect-flash%22?");

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

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"method-override\");\n\n//# sourceURL=webpack:///external_%22method-override%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

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