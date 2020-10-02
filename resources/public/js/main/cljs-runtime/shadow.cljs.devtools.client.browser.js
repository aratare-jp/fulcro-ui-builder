goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58329 = arguments.length;
var i__4731__auto___58330 = (0);
while(true){
if((i__4731__auto___58330 < len__4730__auto___58329)){
args__4736__auto__.push((arguments[i__4731__auto___58330]));

var G__58331 = (i__4731__auto___58330 + (1));
i__4731__auto___58330 = G__58331;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq58008){
var G__58009 = cljs.core.first(seq58008);
var seq58008__$1 = cljs.core.next(seq58008);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58009,seq58008__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__58030 = cljs.core.seq(sources);
var chunk__58031 = null;
var count__58032 = (0);
var i__58033 = (0);
while(true){
if((i__58033 < count__58032)){
var map__58070 = chunk__58031.cljs$core$IIndexed$_nth$arity$2(null,i__58033);
var map__58070__$1 = (((((!((map__58070 == null))))?(((((map__58070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58070):map__58070);
var src = map__58070__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58070__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58070__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58070__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58070__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e58084){var e_58332 = e58084;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58332);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58332.message)].join('')));
}

var G__58333 = seq__58030;
var G__58334 = chunk__58031;
var G__58335 = count__58032;
var G__58336 = (i__58033 + (1));
seq__58030 = G__58333;
chunk__58031 = G__58334;
count__58032 = G__58335;
i__58033 = G__58336;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58030);
if(temp__5735__auto__){
var seq__58030__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58030__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58030__$1);
var G__58337 = cljs.core.chunk_rest(seq__58030__$1);
var G__58338 = c__4550__auto__;
var G__58339 = cljs.core.count(c__4550__auto__);
var G__58340 = (0);
seq__58030 = G__58337;
chunk__58031 = G__58338;
count__58032 = G__58339;
i__58033 = G__58340;
continue;
} else {
var map__58092 = cljs.core.first(seq__58030__$1);
var map__58092__$1 = (((((!((map__58092 == null))))?(((((map__58092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58092):map__58092);
var src = map__58092__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58092__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e58095){var e_58341 = e58095;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58341);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58341.message)].join('')));
}

var G__58342 = cljs.core.next(seq__58030__$1);
var G__58343 = null;
var G__58344 = (0);
var G__58345 = (0);
seq__58030 = G__58342;
chunk__58031 = G__58343;
count__58032 = G__58344;
i__58033 = G__58345;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__58117 = cljs.core.seq(js_requires);
var chunk__58118 = null;
var count__58119 = (0);
var i__58120 = (0);
while(true){
if((i__58120 < count__58119)){
var js_ns = chunk__58118.cljs$core$IIndexed$_nth$arity$2(null,i__58120);
var require_str_58346 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58346);


var G__58347 = seq__58117;
var G__58348 = chunk__58118;
var G__58349 = count__58119;
var G__58350 = (i__58120 + (1));
seq__58117 = G__58347;
chunk__58118 = G__58348;
count__58119 = G__58349;
i__58120 = G__58350;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58117);
if(temp__5735__auto__){
var seq__58117__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58117__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58117__$1);
var G__58351 = cljs.core.chunk_rest(seq__58117__$1);
var G__58352 = c__4550__auto__;
var G__58353 = cljs.core.count(c__4550__auto__);
var G__58354 = (0);
seq__58117 = G__58351;
chunk__58118 = G__58352;
count__58119 = G__58353;
i__58120 = G__58354;
continue;
} else {
var js_ns = cljs.core.first(seq__58117__$1);
var require_str_58355 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58355);


var G__58356 = cljs.core.next(seq__58117__$1);
var G__58357 = null;
var G__58358 = (0);
var G__58359 = (0);
seq__58117 = G__58356;
chunk__58118 = G__58357;
count__58119 = G__58358;
i__58120 = G__58359;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__58148){
var map__58151 = p__58148;
var map__58151__$1 = (((((!((map__58151 == null))))?(((((map__58151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58151):map__58151);
var msg = map__58151__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58151__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58157(s__58158){
return (new cljs.core.LazySeq(null,(function (){
var s__58158__$1 = s__58158;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58158__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__58165 = cljs.core.first(xs__6292__auto__);
var map__58165__$1 = (((((!((map__58165 == null))))?(((((map__58165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58165):map__58165);
var src = map__58165__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58165__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58165__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__58158__$1,map__58165,map__58165__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58151,map__58151__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58157_$_iter__58159(s__58160){
return (new cljs.core.LazySeq(null,((function (s__58158__$1,map__58165,map__58165__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58151,map__58151__$1,msg,info,reload_info){
return (function (){
var s__58160__$1 = s__58160;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58160__$1);
if(temp__5735__auto____$1){
var s__58160__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58160__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58160__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58162 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58161 = (0);
while(true){
if((i__58161 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__58161);
cljs.core.chunk_append(b__58162,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58369 = (i__58161 + (1));
i__58161 = G__58369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58162),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58157_$_iter__58159(cljs.core.chunk_rest(s__58160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58162),null);
}
} else {
var warning = cljs.core.first(s__58160__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58157_$_iter__58159(cljs.core.rest(s__58160__$2)));
}
} else {
return null;
}
break;
}
});})(s__58158__$1,map__58165,map__58165__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58151,map__58151__$1,msg,info,reload_info))
,null,null));
});})(s__58158__$1,map__58165,map__58165__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58151,map__58151__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58157(cljs.core.rest(s__58158__$1)));
} else {
var G__58370 = cljs.core.rest(s__58158__$1);
s__58158__$1 = G__58370;
continue;
}
} else {
var G__58371 = cljs.core.rest(s__58158__$1);
s__58158__$1 = G__58371;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__58171_58372 = cljs.core.seq(warnings);
var chunk__58172_58373 = null;
var count__58173_58374 = (0);
var i__58174_58375 = (0);
while(true){
if((i__58174_58375 < count__58173_58374)){
var map__58188_58376 = chunk__58172_58373.cljs$core$IIndexed$_nth$arity$2(null,i__58174_58375);
var map__58188_58377__$1 = (((((!((map__58188_58376 == null))))?(((((map__58188_58376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58188_58376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58188_58376):map__58188_58376);
var w_58378 = map__58188_58377__$1;
var msg_58379__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188_58377__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188_58377__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188_58377__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58188_58377__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58382)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58380),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58381),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58379__$1)].join(''));


var G__58383 = seq__58171_58372;
var G__58384 = chunk__58172_58373;
var G__58385 = count__58173_58374;
var G__58386 = (i__58174_58375 + (1));
seq__58171_58372 = G__58383;
chunk__58172_58373 = G__58384;
count__58173_58374 = G__58385;
i__58174_58375 = G__58386;
continue;
} else {
var temp__5735__auto___58387 = cljs.core.seq(seq__58171_58372);
if(temp__5735__auto___58387){
var seq__58171_58388__$1 = temp__5735__auto___58387;
if(cljs.core.chunked_seq_QMARK_(seq__58171_58388__$1)){
var c__4550__auto___58389 = cljs.core.chunk_first(seq__58171_58388__$1);
var G__58390 = cljs.core.chunk_rest(seq__58171_58388__$1);
var G__58391 = c__4550__auto___58389;
var G__58392 = cljs.core.count(c__4550__auto___58389);
var G__58393 = (0);
seq__58171_58372 = G__58390;
chunk__58172_58373 = G__58391;
count__58173_58374 = G__58392;
i__58174_58375 = G__58393;
continue;
} else {
var map__58192_58394 = cljs.core.first(seq__58171_58388__$1);
var map__58192_58395__$1 = (((((!((map__58192_58394 == null))))?(((((map__58192_58394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58192_58394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58192_58394):map__58192_58394);
var w_58396 = map__58192_58395__$1;
var msg_58397__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192_58395__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192_58395__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192_58395__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192_58395__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58400)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58398),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58399),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58397__$1)].join(''));


var G__58401 = cljs.core.next(seq__58171_58388__$1);
var G__58402 = null;
var G__58403 = (0);
var G__58404 = (0);
seq__58171_58372 = G__58401;
chunk__58172_58373 = G__58402;
count__58173_58374 = G__58403;
i__58174_58375 = G__58404;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__58147_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__58147_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__58226){
var map__58227 = p__58226;
var map__58227__$1 = (((((!((map__58227 == null))))?(((((map__58227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58227):map__58227);
var msg = map__58227__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__58231 = cljs.core.seq(updates);
var chunk__58233 = null;
var count__58234 = (0);
var i__58235 = (0);
while(true){
if((i__58235 < count__58234)){
var path = chunk__58233.cljs$core$IIndexed$_nth$arity$2(null,i__58235);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58266_58405 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58269_58406 = null;
var count__58270_58407 = (0);
var i__58271_58408 = (0);
while(true){
if((i__58271_58408 < count__58270_58407)){
var node_58411 = chunk__58269_58406.cljs$core$IIndexed$_nth$arity$2(null,i__58271_58408);
var path_match_58412 = shadow.cljs.devtools.client.browser.match_paths(node_58411.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58412)){
var new_link_58413 = (function (){var G__58282 = node_58411.cloneNode(true);
G__58282.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58412),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58282;
})();
(new_link_58413.onload = ((function (seq__58266_58405,chunk__58269_58406,count__58270_58407,i__58271_58408,seq__58231,chunk__58233,count__58234,i__58235,new_link_58413,path_match_58412,node_58411,path,map__58227,map__58227__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_58411);
});})(seq__58266_58405,chunk__58269_58406,count__58270_58407,i__58271_58408,seq__58231,chunk__58233,count__58234,i__58235,new_link_58413,path_match_58412,node_58411,path,map__58227,map__58227__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58412], 0));

goog.dom.insertSiblingAfter(new_link_58413,node_58411);


var G__58414 = seq__58266_58405;
var G__58415 = chunk__58269_58406;
var G__58416 = count__58270_58407;
var G__58417 = (i__58271_58408 + (1));
seq__58266_58405 = G__58414;
chunk__58269_58406 = G__58415;
count__58270_58407 = G__58416;
i__58271_58408 = G__58417;
continue;
} else {
var G__58418 = seq__58266_58405;
var G__58419 = chunk__58269_58406;
var G__58420 = count__58270_58407;
var G__58421 = (i__58271_58408 + (1));
seq__58266_58405 = G__58418;
chunk__58269_58406 = G__58419;
count__58270_58407 = G__58420;
i__58271_58408 = G__58421;
continue;
}
} else {
var temp__5735__auto___58422 = cljs.core.seq(seq__58266_58405);
if(temp__5735__auto___58422){
var seq__58266_58423__$1 = temp__5735__auto___58422;
if(cljs.core.chunked_seq_QMARK_(seq__58266_58423__$1)){
var c__4550__auto___58424 = cljs.core.chunk_first(seq__58266_58423__$1);
var G__58425 = cljs.core.chunk_rest(seq__58266_58423__$1);
var G__58426 = c__4550__auto___58424;
var G__58427 = cljs.core.count(c__4550__auto___58424);
var G__58428 = (0);
seq__58266_58405 = G__58425;
chunk__58269_58406 = G__58426;
count__58270_58407 = G__58427;
i__58271_58408 = G__58428;
continue;
} else {
var node_58429 = cljs.core.first(seq__58266_58423__$1);
var path_match_58430 = shadow.cljs.devtools.client.browser.match_paths(node_58429.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58430)){
var new_link_58431 = (function (){var G__58283 = node_58429.cloneNode(true);
G__58283.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58430),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58283;
})();
(new_link_58431.onload = ((function (seq__58266_58405,chunk__58269_58406,count__58270_58407,i__58271_58408,seq__58231,chunk__58233,count__58234,i__58235,new_link_58431,path_match_58430,node_58429,seq__58266_58423__$1,temp__5735__auto___58422,path,map__58227,map__58227__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_58429);
});})(seq__58266_58405,chunk__58269_58406,count__58270_58407,i__58271_58408,seq__58231,chunk__58233,count__58234,i__58235,new_link_58431,path_match_58430,node_58429,seq__58266_58423__$1,temp__5735__auto___58422,path,map__58227,map__58227__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58430], 0));

goog.dom.insertSiblingAfter(new_link_58431,node_58429);


var G__58434 = cljs.core.next(seq__58266_58423__$1);
var G__58435 = null;
var G__58436 = (0);
var G__58437 = (0);
seq__58266_58405 = G__58434;
chunk__58269_58406 = G__58435;
count__58270_58407 = G__58436;
i__58271_58408 = G__58437;
continue;
} else {
var G__58438 = cljs.core.next(seq__58266_58423__$1);
var G__58439 = null;
var G__58440 = (0);
var G__58441 = (0);
seq__58266_58405 = G__58438;
chunk__58269_58406 = G__58439;
count__58270_58407 = G__58440;
i__58271_58408 = G__58441;
continue;
}
}
} else {
}
}
break;
}


var G__58442 = seq__58231;
var G__58443 = chunk__58233;
var G__58444 = count__58234;
var G__58445 = (i__58235 + (1));
seq__58231 = G__58442;
chunk__58233 = G__58443;
count__58234 = G__58444;
i__58235 = G__58445;
continue;
} else {
var G__58446 = seq__58231;
var G__58447 = chunk__58233;
var G__58448 = count__58234;
var G__58449 = (i__58235 + (1));
seq__58231 = G__58446;
chunk__58233 = G__58447;
count__58234 = G__58448;
i__58235 = G__58449;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58231);
if(temp__5735__auto__){
var seq__58231__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58231__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58231__$1);
var G__58450 = cljs.core.chunk_rest(seq__58231__$1);
var G__58451 = c__4550__auto__;
var G__58452 = cljs.core.count(c__4550__auto__);
var G__58453 = (0);
seq__58231 = G__58450;
chunk__58233 = G__58451;
count__58234 = G__58452;
i__58235 = G__58453;
continue;
} else {
var path = cljs.core.first(seq__58231__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58284_58458 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58287_58459 = null;
var count__58288_58460 = (0);
var i__58289_58461 = (0);
while(true){
if((i__58289_58461 < count__58288_58460)){
var node_58462 = chunk__58287_58459.cljs$core$IIndexed$_nth$arity$2(null,i__58289_58461);
var path_match_58463 = shadow.cljs.devtools.client.browser.match_paths(node_58462.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58463)){
var new_link_58464 = (function (){var G__58295 = node_58462.cloneNode(true);
G__58295.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58463),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58295;
})();
(new_link_58464.onload = ((function (seq__58284_58458,chunk__58287_58459,count__58288_58460,i__58289_58461,seq__58231,chunk__58233,count__58234,i__58235,new_link_58464,path_match_58463,node_58462,path,seq__58231__$1,temp__5735__auto__,map__58227,map__58227__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_58462);
});})(seq__58284_58458,chunk__58287_58459,count__58288_58460,i__58289_58461,seq__58231,chunk__58233,count__58234,i__58235,new_link_58464,path_match_58463,node_58462,path,seq__58231__$1,temp__5735__auto__,map__58227,map__58227__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58463], 0));

goog.dom.insertSiblingAfter(new_link_58464,node_58462);


var G__58465 = seq__58284_58458;
var G__58466 = chunk__58287_58459;
var G__58467 = count__58288_58460;
var G__58468 = (i__58289_58461 + (1));
seq__58284_58458 = G__58465;
chunk__58287_58459 = G__58466;
count__58288_58460 = G__58467;
i__58289_58461 = G__58468;
continue;
} else {
var G__58469 = seq__58284_58458;
var G__58470 = chunk__58287_58459;
var G__58471 = count__58288_58460;
var G__58472 = (i__58289_58461 + (1));
seq__58284_58458 = G__58469;
chunk__58287_58459 = G__58470;
count__58288_58460 = G__58471;
i__58289_58461 = G__58472;
continue;
}
} else {
var temp__5735__auto___58473__$1 = cljs.core.seq(seq__58284_58458);
if(temp__5735__auto___58473__$1){
var seq__58284_58474__$1 = temp__5735__auto___58473__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58284_58474__$1)){
var c__4550__auto___58475 = cljs.core.chunk_first(seq__58284_58474__$1);
var G__58476 = cljs.core.chunk_rest(seq__58284_58474__$1);
var G__58477 = c__4550__auto___58475;
var G__58478 = cljs.core.count(c__4550__auto___58475);
var G__58479 = (0);
seq__58284_58458 = G__58476;
chunk__58287_58459 = G__58477;
count__58288_58460 = G__58478;
i__58289_58461 = G__58479;
continue;
} else {
var node_58480 = cljs.core.first(seq__58284_58474__$1);
var path_match_58481 = shadow.cljs.devtools.client.browser.match_paths(node_58480.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58481)){
var new_link_58482 = (function (){var G__58296 = node_58480.cloneNode(true);
G__58296.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58481),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58296;
})();
(new_link_58482.onload = ((function (seq__58284_58458,chunk__58287_58459,count__58288_58460,i__58289_58461,seq__58231,chunk__58233,count__58234,i__58235,new_link_58482,path_match_58481,node_58480,seq__58284_58474__$1,temp__5735__auto___58473__$1,path,seq__58231__$1,temp__5735__auto__,map__58227,map__58227__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_58480);
});})(seq__58284_58458,chunk__58287_58459,count__58288_58460,i__58289_58461,seq__58231,chunk__58233,count__58234,i__58235,new_link_58482,path_match_58481,node_58480,seq__58284_58474__$1,temp__5735__auto___58473__$1,path,seq__58231__$1,temp__5735__auto__,map__58227,map__58227__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58481], 0));

goog.dom.insertSiblingAfter(new_link_58482,node_58480);


var G__58483 = cljs.core.next(seq__58284_58474__$1);
var G__58484 = null;
var G__58485 = (0);
var G__58486 = (0);
seq__58284_58458 = G__58483;
chunk__58287_58459 = G__58484;
count__58288_58460 = G__58485;
i__58289_58461 = G__58486;
continue;
} else {
var G__58487 = cljs.core.next(seq__58284_58474__$1);
var G__58488 = null;
var G__58489 = (0);
var G__58490 = (0);
seq__58284_58458 = G__58487;
chunk__58287_58459 = G__58488;
count__58288_58460 = G__58489;
i__58289_58461 = G__58490;
continue;
}
}
} else {
}
}
break;
}


var G__58491 = cljs.core.next(seq__58231__$1);
var G__58492 = null;
var G__58493 = (0);
var G__58494 = (0);
seq__58231 = G__58491;
chunk__58233 = G__58492;
count__58234 = G__58493;
i__58235 = G__58494;
continue;
} else {
var G__58495 = cljs.core.next(seq__58231__$1);
var G__58496 = null;
var G__58497 = (0);
var G__58498 = (0);
seq__58231 = G__58495;
chunk__58233 = G__58496;
count__58234 = G__58497;
i__58235 = G__58498;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__58297){
var map__58298 = p__58297;
var map__58298__$1 = (((((!((map__58298 == null))))?(((((map__58298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58298):map__58298);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58298__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__58300){
var map__58301 = p__58300;
var map__58301__$1 = (((((!((map__58301 == null))))?(((((map__58301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58301):map__58301);
var _ = map__58301__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58301__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__58303,done,error){
var map__58304 = p__58303;
var map__58304__$1 = (((((!((map__58304 == null))))?(((((map__58304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58304):map__58304);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__58306,done,error){
var map__58307 = p__58306;
var map__58307__$1 = (((((!((map__58307 == null))))?(((((map__58307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58307):map__58307);
var msg = map__58307__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58307__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58309){
var map__58310 = p__58309;
var map__58310__$1 = (((((!((map__58310 == null))))?(((((map__58310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58310):map__58310);
var src = map__58310__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__58312 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__58312) : done.call(null,G__58312));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__58313){
var map__58314 = p__58313;
var map__58314__$1 = (((((!((map__58314 == null))))?(((((map__58314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58314):map__58314);
var msg__$1 = map__58314__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58314__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e58316){var ex = e58316;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__58317){
var map__58318 = p__58317;
var map__58318__$1 = (((((!((map__58318 == null))))?(((((map__58318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58318):map__58318);
var env = map__58318__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__58320){
var map__58321 = p__58320;
var map__58321__$1 = (((((!((map__58321 == null))))?(((((map__58321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58321):map__58321);
var msg = map__58321__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58321__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__58323){
var map__58324 = p__58323;
var map__58324__$1 = (((((!((map__58324 == null))))?(((((map__58324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58324):map__58324);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58324__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58324__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__58326){
var map__58327 = p__58326;
var map__58327__$1 = (((((!((map__58327 == null))))?(((((map__58327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58327):map__58327);
var svc = map__58327__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
