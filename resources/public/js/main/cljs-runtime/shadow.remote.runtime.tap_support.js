goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__56195,p__56196){
var map__56198 = p__56195;
var map__56198__$1 = (((((!((map__56198 == null))))?(((((map__56198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56198):map__56198);
var svc = map__56198__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56199 = p__56196;
var map__56199__$1 = (((((!((map__56199 == null))))?(((((map__56199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56199):map__56199);
var msg = map__56199__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56199__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56199__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56199__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56199__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__56226,p__56227){
var map__56229 = p__56226;
var map__56229__$1 = (((((!((map__56229 == null))))?(((((map__56229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56229):map__56229);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56229__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__56230 = p__56227;
var map__56230__$1 = (((((!((map__56230 == null))))?(((((map__56230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56230):map__56230);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56230__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__56239,p__56240){
var map__56241 = p__56239;
var map__56241__$1 = (((((!((map__56241 == null))))?(((((map__56241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56241):map__56241);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56241__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56241__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56242 = p__56240;
var map__56242__$1 = (((((!((map__56242 == null))))?(((((map__56242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56242):map__56242);
var msg = map__56242__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56242__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__56252,tid){
var map__56253 = p__56252;
var map__56253__$1 = (((((!((map__56253 == null))))?(((((map__56253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56253):map__56253);
var svc = map__56253__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56253__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__56264 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__56265 = null;
var count__56266 = (0);
var i__56267 = (0);
while(true){
if((i__56267 < count__56266)){
var vec__56275 = chunk__56265.cljs$core$IIndexed$_nth$arity$2(null,i__56267);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56275,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56275,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56319 = seq__56264;
var G__56320 = chunk__56265;
var G__56321 = count__56266;
var G__56322 = (i__56267 + (1));
seq__56264 = G__56319;
chunk__56265 = G__56320;
count__56266 = G__56321;
i__56267 = G__56322;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56264);
if(temp__5735__auto__){
var seq__56264__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56264__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56264__$1);
var G__56326 = cljs.core.chunk_rest(seq__56264__$1);
var G__56327 = c__4550__auto__;
var G__56328 = cljs.core.count(c__4550__auto__);
var G__56329 = (0);
seq__56264 = G__56326;
chunk__56265 = G__56327;
count__56266 = G__56328;
i__56267 = G__56329;
continue;
} else {
var vec__56278 = cljs.core.first(seq__56264__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56278,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56278,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56333 = cljs.core.next(seq__56264__$1);
var G__56334 = null;
var G__56335 = (0);
var G__56336 = (0);
seq__56264 = G__56333;
chunk__56265 = G__56334;
count__56266 = G__56335;
i__56267 = G__56336;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__56257_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__56257_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__56260_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__56260_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__56261_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__56261_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__56262_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__56262_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__56284){
var map__56285 = p__56284;
var map__56285__$1 = (((((!((map__56285 == null))))?(((((map__56285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56285):map__56285);
var svc = map__56285__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56285__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56285__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
