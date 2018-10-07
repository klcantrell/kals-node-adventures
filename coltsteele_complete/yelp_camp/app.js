!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(r(13)),a=d(r(14)),s=d(r(15)),o=d(r(16)),i=d(r(18));function d(e){return e&&e.__esModule?e:{default:e}}const u={};let l;l=i.default.use_env_variable?new n.default(process.env[i.default.use_env_variable],i.default):new n.default(i.default.database,i.default.username,i.default.password,i.default),[a.default,s.default,o.default].forEach(e=>{const t=e(l,n.default);u[t.name]=t}),Object.keys(u).forEach(e=>{u[e].associate&&u[e].associate(u)}),u.sequelize=l,u.Sequelize=n.default,t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.injectMessageIntoLocals=t.injectUserIntoLocals=t.isCommentOwner=t.isCampgroundOwner=t.isLoggedIn=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));const{Campground:a,Comment:s,User:o}=n.default;t.isLoggedIn=((e,t,r)=>{if(e.isAuthenticated())return r();e.flash("fail","You need to be logged in for that"),t.redirect("back")}),t.isCampgroundOwner=((e,t,r)=>{e.isAuthenticated()?a.findById(e.params.id,{include:[{model:o,as:"user"}]}).then(n=>{if(!n)return e.flash("fail","You do not have permission for that"),t.redirect("back");n.user.id===e.user.id?r():(e.flash("fail","You do not have permission for that"),t.redirect("back"))}).catch(r=>{e.flash("fail","Something went wrong"),t.redirect("back")}):(e.flash("fail","You need to be logged in for that"),t.redirect("back"))}),t.isCommentOwner=((e,t,r)=>{e.isAuthenticated()?s.findById(e.params.comment_id,{include:[{model:o,as:"author",attributes:["id"]}]}).then(n=>{if(!n)return e.flash("fail","You do not have permission for that"),t.redirect("back");n.author.id===e.user.id?r():(e.flash("fail","You do not have permission for that"),t.redirect("back"))}).catch(r=>{e.flash("fail","Something went wrong"),t.redirect("back")}):(e.flash("fail","You need to be logged in for that"),t.redirect("back"))}),t.injectUserIntoLocals=((e,t,r)=>{t.locals.currentUser=e.user,r()}),t.injectMessageIntoLocals=((e,t,r)=>{t.locals.successMessage=e.flash("success"),t.locals.failMessage=e.flash("fail"),r()})},function(e,t){e.exports=require("passport")},function(e,t,r){"use strict";var n=m(r(5)),a=m(r(0)),s=m(r(6)),o=m(r(7)),i=m(r(3)),d=m(r(8)),u=(m(r(9)),m(r(11))),l=m(r(19)),c=m(r(20)),f=m(r(23));function m(e){return e&&e.__esModule?e:{default:e}}const g=process.env.PORT||3e3,p=(0,a.default)();p.set("view engine","pug"),p.use(a.default.static(n.default.join(__dirname+"/public"))),p.use((0,d.default)("_method")),p.use(a.default.urlencoded({extended:!0})),p.use((0,s.default)({secret:"not all who wander are lost",resave:!1,saveUninitialized:!1})),p.use(i.default.initialize()),p.use(i.default.session()),(0,u.default)(i.default),p.use((0,o.default)()),p.use((0,l.default)(i.default)),p.use("/campgrounds",c.default),p.use("/campgrounds/:id/comments",f.default),p.listen(g,()=>{console.log("YelpCamp server has started")})},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express-session")},function(e,t){e.exports=require("connect-flash")},function(e,t){e.exports=require("method-override")},function(e,t,r){"use strict";(function(e){return e&&e.__esModule?e:{default:e}})(r(10)).default.config({silent:!0})},function(e,t){e.exports=require("dotenv")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s(r(3));var n=s(r(12)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.Strategy,{User:i}=a.default;t.default=(e=>{e.serializeUser(i.serialize()),e.deserializeUser(i.deserialize()),e.use("local-signup",new o({usernameField:"username",passwordField:"password",passReqToCallback:!0},(e,t,r,n)=>{i.findOne({where:{username:t}}).then(a=>{if(a)return n(null,!1,e.flash("fail","That username already exists"));i.create({username:t,password:i.generateHash(r)}).then(t=>t?n(null,t,e.flash("success",`Welcome to YelpCamp ${t.username}`)):n(null,!1,e.flash("fail","Something went wrong")))}).catch(t=>{console.log(t),e.flash("fail","Something went wrong")})})),e.use("local-login",new o({usernameField:"username",passwordField:"password",passReqToCallback:!0},(e,t,r,n)=>{i.findOne({where:{username:t}}).then(t=>t?t.validPassword(r)?n(null,t,e.flash("success",`Welcome back ${t.username}`)):n(null,!1,e.flash("fail","Password wrong")):n(null,!1,e.flash("fail","No user found"))).catch(t=>{console.log(t),e.flash("fail","Something went wrong")})}))})},function(e,t){e.exports=require("passport-local")},function(e,t){e.exports=require("sequelize")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>{const r=e.define("Campground",{name:t.STRING,image:t.STRING,imageId:t.STRING,description:t.STRING,price:t.STRING},{});return r.associate=(e=>{r.hasMany(e.Comment,{foreignKey:"campgroundId",as:"comments"}),r.belongsTo(e.User,{foreignKey:"userId",as:"user",onDelete:"CASCADE"})}),r})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>{const r=e.define("Comment",{text:t.STRING},{});return r.associate=(e=>{r.belongsTo(e.Campground,{foreignKey:"campgroundId",as:"campground",onDelete:"CASCADE"}),r.belongsTo(e.User,{foreignKey:"userId",as:"author",onDelete:"CASCADE"})}),r})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(17));t.default=((e,t)=>{const r=e.define("User",{username:t.STRING,password:t.STRING},{});return r.associate=(e=>{r.hasMany(e.Comment,{foreignKey:"userId",as:"comments"}),r.hasMany(e.Campground,{foreignKey:"userId",as:"campgrounds"})}),r.generateHash=(e=>n.default.hashSync(e,n.default.genSaltSync(8),null)),r.prototype.validPassword=function(e){return n.default.compareSync(e,this.password)},r.serialize=(()=>(e,t)=>{t(null,e.id)}),r.deserialize=(()=>(e,t)=>{r.findById(e).then(e=>{t(null,e.get())}).catch(e=>{t(e,null)})}),r})},function(e,t){e.exports=require("bcrypt")},function(e,t,r){"use strict";const n={development:{username:process.env.DB_USERNAME,password:process.env.DB_PASSWORD,database:"yelp_camp",host:"127.0.0.1",port:"5432",dialect:"postgres"},production:{use_env_variable:"DATABASE_URL",dialect:"postgres"}};e.exports=n.production},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0)),a=r(2);const s=n.default.Router();t.default=(e=>(s.use(a.injectUserIntoLocals,a.injectMessageIntoLocals),s.get("/",(e,t)=>{t.render("landing")}),s.get("/register",(e,t)=>{t.render("register")}),s.post("/register",e.authenticate("local-signup",{successRedirect:"/campgrounds",failureRedirect:"/register"})),s.get("/login",(e,t)=>{t.render("login")}),s.post("/login",e.authenticate("local-login",{successRedirect:"/campgrounds",failureRedirect:"/login"})),s.get("/logout",(e,t)=>{e.logout(),e.flash("success","You logged out"),t.redirect("/campgrounds")}),s))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(0)),s=u(r(21)),o=u(r(22)),i=u(r(1)),d=r(2);function u(e){return e&&e.__esModule?e:{default:e}}const l=a.default.Router(),{Campground:c,Comment:f,User:m}=i.default,g=s.default.diskStorage({filename:(e,t,r)=>{r(null,Date.now()+t.originalname)}}),p=(0,s.default)({storage:g,imageFilter:(e,t,r)=>{if(!t.originalname.match(/\.(jpg|jpeg|png|gif)$/i))return r(new error("Only image files are allowed!"),!1);r(null,!0)}});o.default.config({cloud_name:"kalalau",api_key:process.env.CLOUDINARY_KEY,api_secret:process.env.CLOUDINARY_SECRET}),l.get("/",(e,t)=>{c.findAll({include:[{model:m,as:"user"}]}).then(e=>{t.status(200).render("campgrounds/index",{campgrounds:e})}).catch(e=>{t.status(400).send(e)})}),l.post("/",d.isLoggedIn,p.single("image"),(e,t)=>{o.default.v2.uploader.upload(e.file.path,(r,n)=>{if(r)return e.flash("message","Something went wrong"),t.redirect("back");e.body.campground.image=n.secure_url,e.body.campground.imageId=n.public_id,e.body.campground.userId=e.user.id,c.create(e.body.campground).then(()=>t.status(200).redirect("/campgrounds")).catch(r=>{e.flash("message","Something went wrong"),t.redirect("back")})})}),l.get("/new",d.isLoggedIn,(e,t)=>{t.render("campgrounds/new")}),l.get("/:id",(e,t)=>{c.findAll({include:[{model:f,as:"comments",include:[{model:m,as:"author"}]},{model:m,as:"user"}]}).then(r=>{const n=r.filter(t=>t.id===Number(e.params.id))[0];t.render("campgrounds/show",{campground:n,allCampgrounds:r})}).catch(r=>{console.log(r),e.flash("fail","Something went wrong"),t.redirect("back")})}),l.get("/:id/edit",d.isCampgroundOwner,(e,t)=>{c.findById(e.params.id).then(e=>{t.render("campgrounds/edit",{campground:e})}).catch(r=>{e.flash("message","Something went wrong"),t.redirect("back")})}),l.put("/:id",d.isCampgroundOwner,p.single("image"),(e,t)=>{c.findById(e.params.id).then(async r=>{if(!r)return e.flash("message","Something went wrong"),t.redirect("back");let a=n({},r.values);if(e.file)try{await o.default.v2.uploader.destroy(r.imageId);const n=await o.default.v2.uploader.upload(e.file.path);a.image=n.secure_url,a.imageId=n.public_id}catch(r){e.flash("fail","Something went wrong"),t.redirect("back")}r.update(a).then(()=>{t.redirect(`/campgrounds/${r.id}`)}).catch(r=>{e.flash("message","Something went wrong"),t.redirect("back")})}).catch(()=>{e.flash("fail","Something went wrong"),t.redirect("back")})}),l.delete("/:id",d.isCampgroundOwner,(e,t)=>{c.findById(e.params.id).then(async r=>{r||(e.flash("fail","Something went wrong"),t.redirect("back"));try{await o.default.v2.uploader.destroy(r.imageId),await r.destroy(),t.redirect("/campgrounds")}catch(r){e.flash("fail","Something went wrong"),t.redirect("back")}}).catch(()=>{e.flash("fail","Something went wrong"),t.redirect("back")})}),t.default=l},function(e,t){e.exports=require("multer")},function(e,t){e.exports=require("cloudinary")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(0)),a=o(r(1)),s=r(2);function o(e){return e&&e.__esModule?e:{default:e}}const i=n.default.Router({mergeParams:!0}),{Campground:d,Comment:u,User:l}=a.default;i.get("/new",s.isLoggedIn,(e,t)=>{d.findById(e.params.id).then(e=>{t.render("comments/new",{campground:e})}).catch(e=>t.send(e))}),i.post("/",s.isLoggedIn,(e,t)=>{d.findById(e.params.id).then(r=>{u.create({text:e.body.comment.text,campgroundId:r.id,userId:e.user.id}).then(()=>t.redirect(`/campgrounds/${r.id}`)).catch(()=>t.redirect("/campgrounds/"))}).catch(e=>{t.redirect("/campgrounds")})}),i.get("/:comment_id/edit",s.isCommentOwner,(e,t)=>{u.findById(e.params.comment_id,{include:[{model:d,as:"campground"}]}).then(e=>{t.render("comments/edit",{comment:e})}).catch(e=>{console.log(e),t.redirect("campgrounds")})}),i.put("/:comment_id",s.isCommentOwner,(e,t)=>{u.findById(e.params.comment_id).then(r=>r?r.update(e.body.comment).then(()=>{t.redirect(`/campgrounds/${e.params.id}`)}).catch(r=>{e.flash("fail","Something went wrong"),t.redirect("back")}):(e.flash("fail","Comment not found"),t.redirect("back"))).catch(r=>{e.flash("fail","Something went wrong"),t.redirect("back")})}),i.delete("/:comment_id",s.isCommentOwner,(e,t)=>{u.findById(e.params.comment_id).then(r=>r?r.destroy().then(()=>{e.flash("sucess","Successfully deleted"),t.redirect(`/campgrounds/${e.params.id}`)}).catch(r=>{e.flash("fail","Something went wrong"),t.redirect("back")}):(e.flash("fail","Something went wrong"),t.redirect("back"))).catch(r=>{e.flash("fail","Something went wrong"),t.redirect("back")})}),t.default=i}]);