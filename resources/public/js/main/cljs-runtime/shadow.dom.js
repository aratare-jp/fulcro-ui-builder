goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_56186 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_56186(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_56263 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_56263(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__54983 = coll;
var G__54984 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__54983,G__54984) : shadow.dom.lazy_native_coll_seq.call(null,G__54983,G__54984));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__55024 = arguments.length;
switch (G__55024) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__55032 = arguments.length;
switch (G__55032) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__55040 = arguments.length;
switch (G__55040) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__55050 = arguments.length;
switch (G__55050) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__55056 = arguments.length;
switch (G__55056) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__55063 = arguments.length;
switch (G__55063) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e55066){if((e55066 instanceof Object)){
var e = e55066;
return console.log("didnt support attachEvent",el,e);
} else {
throw e55066;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__55076 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__55077 = null;
var count__55078 = (0);
var i__55079 = (0);
while(true){
if((i__55079 < count__55078)){
var el = chunk__55077.cljs$core$IIndexed$_nth$arity$2(null,i__55079);
var handler_56373__$1 = ((function (seq__55076,chunk__55077,count__55078,i__55079,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55076,chunk__55077,count__55078,i__55079,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56373__$1);


var G__56376 = seq__55076;
var G__56377 = chunk__55077;
var G__56378 = count__55078;
var G__56379 = (i__55079 + (1));
seq__55076 = G__56376;
chunk__55077 = G__56377;
count__55078 = G__56378;
i__55079 = G__56379;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55076);
if(temp__5735__auto__){
var seq__55076__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55076__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55076__$1);
var G__56381 = cljs.core.chunk_rest(seq__55076__$1);
var G__56382 = c__4550__auto__;
var G__56383 = cljs.core.count(c__4550__auto__);
var G__56384 = (0);
seq__55076 = G__56381;
chunk__55077 = G__56382;
count__55078 = G__56383;
i__55079 = G__56384;
continue;
} else {
var el = cljs.core.first(seq__55076__$1);
var handler_56385__$1 = ((function (seq__55076,chunk__55077,count__55078,i__55079,el,seq__55076__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55076,chunk__55077,count__55078,i__55079,el,seq__55076__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56385__$1);


var G__56386 = cljs.core.next(seq__55076__$1);
var G__56387 = null;
var G__56388 = (0);
var G__56389 = (0);
seq__55076 = G__56386;
chunk__55077 = G__56387;
count__55078 = G__56388;
i__55079 = G__56389;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__55097 = arguments.length;
switch (G__55097) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__55109 = cljs.core.seq(events);
var chunk__55110 = null;
var count__55111 = (0);
var i__55112 = (0);
while(true){
if((i__55112 < count__55111)){
var vec__55122 = chunk__55110.cljs$core$IIndexed$_nth$arity$2(null,i__55112);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55122,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56472 = seq__55109;
var G__56473 = chunk__55110;
var G__56474 = count__55111;
var G__56475 = (i__55112 + (1));
seq__55109 = G__56472;
chunk__55110 = G__56473;
count__55111 = G__56474;
i__55112 = G__56475;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55109);
if(temp__5735__auto__){
var seq__55109__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55109__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55109__$1);
var G__56478 = cljs.core.chunk_rest(seq__55109__$1);
var G__56479 = c__4550__auto__;
var G__56480 = cljs.core.count(c__4550__auto__);
var G__56481 = (0);
seq__55109 = G__56478;
chunk__55110 = G__56479;
count__55111 = G__56480;
i__55112 = G__56481;
continue;
} else {
var vec__55127 = cljs.core.first(seq__55109__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55127,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56483 = cljs.core.next(seq__55109__$1);
var G__56484 = null;
var G__56485 = (0);
var G__56486 = (0);
seq__55109 = G__56483;
chunk__55110 = G__56484;
count__55111 = G__56485;
i__55112 = G__56486;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__55134 = cljs.core.seq(styles);
var chunk__55135 = null;
var count__55136 = (0);
var i__55137 = (0);
while(true){
if((i__55137 < count__55136)){
var vec__55152 = chunk__55135.cljs$core$IIndexed$_nth$arity$2(null,i__55137);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55152,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56496 = seq__55134;
var G__56497 = chunk__55135;
var G__56498 = count__55136;
var G__56499 = (i__55137 + (1));
seq__55134 = G__56496;
chunk__55135 = G__56497;
count__55136 = G__56498;
i__55137 = G__56499;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55134);
if(temp__5735__auto__){
var seq__55134__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55134__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55134__$1);
var G__56502 = cljs.core.chunk_rest(seq__55134__$1);
var G__56503 = c__4550__auto__;
var G__56504 = cljs.core.count(c__4550__auto__);
var G__56505 = (0);
seq__55134 = G__56502;
chunk__55135 = G__56503;
count__55136 = G__56504;
i__55137 = G__56505;
continue;
} else {
var vec__55156 = cljs.core.first(seq__55134__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55156,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56513 = cljs.core.next(seq__55134__$1);
var G__56514 = null;
var G__56515 = (0);
var G__56516 = (0);
seq__55134 = G__56513;
chunk__55135 = G__56514;
count__55136 = G__56515;
i__55137 = G__56516;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__55161_56521 = key;
var G__55161_56522__$1 = (((G__55161_56521 instanceof cljs.core.Keyword))?G__55161_56521.fqn:null);
switch (G__55161_56522__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_56537 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_56537,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_56537,"aria-");
}
})())){
el.setAttribute(ks_56537,value);
} else {
(el[ks_56537] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__55186){
var map__55187 = p__55186;
var map__55187__$1 = (((((!((map__55187 == null))))?(((((map__55187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55187):map__55187);
var props = map__55187__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55187__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__55192 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55192,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55192,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55192,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__55195 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__55195,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__55195;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__55199 = arguments.length;
switch (G__55199) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__55206){
var vec__55208 = p__55206;
var seq__55209 = cljs.core.seq(vec__55208);
var first__55210 = cljs.core.first(seq__55209);
var seq__55209__$1 = cljs.core.next(seq__55209);
var nn = first__55210;
var first__55210__$1 = cljs.core.first(seq__55209__$1);
var seq__55209__$2 = cljs.core.next(seq__55209__$1);
var np = first__55210__$1;
var nc = seq__55209__$2;
var node = vec__55208;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55217 = nn;
var G__55218 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55217,G__55218) : create_fn.call(null,G__55217,G__55218));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55219 = nn;
var G__55220 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55219,G__55220) : create_fn.call(null,G__55219,G__55220));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__55224 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55224,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55224,(1),null);
var seq__55227_56588 = cljs.core.seq(node_children);
var chunk__55229_56589 = null;
var count__55230_56590 = (0);
var i__55231_56591 = (0);
while(true){
if((i__55231_56591 < count__55230_56590)){
var child_struct_56592 = chunk__55229_56589.cljs$core$IIndexed$_nth$arity$2(null,i__55231_56591);
var children_56594 = shadow.dom.dom_node(child_struct_56592);
if(cljs.core.seq_QMARK_(children_56594)){
var seq__55258_56598 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56594));
var chunk__55260_56599 = null;
var count__55261_56600 = (0);
var i__55262_56601 = (0);
while(true){
if((i__55262_56601 < count__55261_56600)){
var child_56602 = chunk__55260_56599.cljs$core$IIndexed$_nth$arity$2(null,i__55262_56601);
if(cljs.core.truth_(child_56602)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56602);


var G__56603 = seq__55258_56598;
var G__56604 = chunk__55260_56599;
var G__56605 = count__55261_56600;
var G__56606 = (i__55262_56601 + (1));
seq__55258_56598 = G__56603;
chunk__55260_56599 = G__56604;
count__55261_56600 = G__56605;
i__55262_56601 = G__56606;
continue;
} else {
var G__56607 = seq__55258_56598;
var G__56608 = chunk__55260_56599;
var G__56609 = count__55261_56600;
var G__56610 = (i__55262_56601 + (1));
seq__55258_56598 = G__56607;
chunk__55260_56599 = G__56608;
count__55261_56600 = G__56609;
i__55262_56601 = G__56610;
continue;
}
} else {
var temp__5735__auto___56611 = cljs.core.seq(seq__55258_56598);
if(temp__5735__auto___56611){
var seq__55258_56612__$1 = temp__5735__auto___56611;
if(cljs.core.chunked_seq_QMARK_(seq__55258_56612__$1)){
var c__4550__auto___56614 = cljs.core.chunk_first(seq__55258_56612__$1);
var G__56615 = cljs.core.chunk_rest(seq__55258_56612__$1);
var G__56616 = c__4550__auto___56614;
var G__56617 = cljs.core.count(c__4550__auto___56614);
var G__56618 = (0);
seq__55258_56598 = G__56615;
chunk__55260_56599 = G__56616;
count__55261_56600 = G__56617;
i__55262_56601 = G__56618;
continue;
} else {
var child_56621 = cljs.core.first(seq__55258_56612__$1);
if(cljs.core.truth_(child_56621)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56621);


var G__56622 = cljs.core.next(seq__55258_56612__$1);
var G__56623 = null;
var G__56624 = (0);
var G__56625 = (0);
seq__55258_56598 = G__56622;
chunk__55260_56599 = G__56623;
count__55261_56600 = G__56624;
i__55262_56601 = G__56625;
continue;
} else {
var G__56626 = cljs.core.next(seq__55258_56612__$1);
var G__56627 = null;
var G__56628 = (0);
var G__56629 = (0);
seq__55258_56598 = G__56626;
chunk__55260_56599 = G__56627;
count__55261_56600 = G__56628;
i__55262_56601 = G__56629;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56594);
}


var G__56635 = seq__55227_56588;
var G__56636 = chunk__55229_56589;
var G__56637 = count__55230_56590;
var G__56638 = (i__55231_56591 + (1));
seq__55227_56588 = G__56635;
chunk__55229_56589 = G__56636;
count__55230_56590 = G__56637;
i__55231_56591 = G__56638;
continue;
} else {
var temp__5735__auto___56639 = cljs.core.seq(seq__55227_56588);
if(temp__5735__auto___56639){
var seq__55227_56640__$1 = temp__5735__auto___56639;
if(cljs.core.chunked_seq_QMARK_(seq__55227_56640__$1)){
var c__4550__auto___56641 = cljs.core.chunk_first(seq__55227_56640__$1);
var G__56644 = cljs.core.chunk_rest(seq__55227_56640__$1);
var G__56645 = c__4550__auto___56641;
var G__56646 = cljs.core.count(c__4550__auto___56641);
var G__56647 = (0);
seq__55227_56588 = G__56644;
chunk__55229_56589 = G__56645;
count__55230_56590 = G__56646;
i__55231_56591 = G__56647;
continue;
} else {
var child_struct_56649 = cljs.core.first(seq__55227_56640__$1);
var children_56651 = shadow.dom.dom_node(child_struct_56649);
if(cljs.core.seq_QMARK_(children_56651)){
var seq__55272_56652 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56651));
var chunk__55274_56653 = null;
var count__55275_56654 = (0);
var i__55276_56655 = (0);
while(true){
if((i__55276_56655 < count__55275_56654)){
var child_56656 = chunk__55274_56653.cljs$core$IIndexed$_nth$arity$2(null,i__55276_56655);
if(cljs.core.truth_(child_56656)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56656);


var G__56657 = seq__55272_56652;
var G__56658 = chunk__55274_56653;
var G__56659 = count__55275_56654;
var G__56660 = (i__55276_56655 + (1));
seq__55272_56652 = G__56657;
chunk__55274_56653 = G__56658;
count__55275_56654 = G__56659;
i__55276_56655 = G__56660;
continue;
} else {
var G__56661 = seq__55272_56652;
var G__56662 = chunk__55274_56653;
var G__56663 = count__55275_56654;
var G__56664 = (i__55276_56655 + (1));
seq__55272_56652 = G__56661;
chunk__55274_56653 = G__56662;
count__55275_56654 = G__56663;
i__55276_56655 = G__56664;
continue;
}
} else {
var temp__5735__auto___56666__$1 = cljs.core.seq(seq__55272_56652);
if(temp__5735__auto___56666__$1){
var seq__55272_56668__$1 = temp__5735__auto___56666__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55272_56668__$1)){
var c__4550__auto___56669 = cljs.core.chunk_first(seq__55272_56668__$1);
var G__56670 = cljs.core.chunk_rest(seq__55272_56668__$1);
var G__56671 = c__4550__auto___56669;
var G__56672 = cljs.core.count(c__4550__auto___56669);
var G__56673 = (0);
seq__55272_56652 = G__56670;
chunk__55274_56653 = G__56671;
count__55275_56654 = G__56672;
i__55276_56655 = G__56673;
continue;
} else {
var child_56674 = cljs.core.first(seq__55272_56668__$1);
if(cljs.core.truth_(child_56674)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56674);


var G__56675 = cljs.core.next(seq__55272_56668__$1);
var G__56676 = null;
var G__56677 = (0);
var G__56678 = (0);
seq__55272_56652 = G__56675;
chunk__55274_56653 = G__56676;
count__55275_56654 = G__56677;
i__55276_56655 = G__56678;
continue;
} else {
var G__56679 = cljs.core.next(seq__55272_56668__$1);
var G__56680 = null;
var G__56681 = (0);
var G__56682 = (0);
seq__55272_56652 = G__56679;
chunk__55274_56653 = G__56680;
count__55275_56654 = G__56681;
i__55276_56655 = G__56682;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56651);
}


var G__56683 = cljs.core.next(seq__55227_56640__$1);
var G__56684 = null;
var G__56685 = (0);
var G__56686 = (0);
seq__55227_56588 = G__56683;
chunk__55229_56589 = G__56684;
count__55230_56590 = G__56685;
i__55231_56591 = G__56686;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__55301 = cljs.core.seq(node);
var chunk__55302 = null;
var count__55303 = (0);
var i__55304 = (0);
while(true){
if((i__55304 < count__55303)){
var n = chunk__55302.cljs$core$IIndexed$_nth$arity$2(null,i__55304);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56692 = seq__55301;
var G__56693 = chunk__55302;
var G__56694 = count__55303;
var G__56695 = (i__55304 + (1));
seq__55301 = G__56692;
chunk__55302 = G__56693;
count__55303 = G__56694;
i__55304 = G__56695;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55301);
if(temp__5735__auto__){
var seq__55301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55301__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55301__$1);
var G__56696 = cljs.core.chunk_rest(seq__55301__$1);
var G__56697 = c__4550__auto__;
var G__56698 = cljs.core.count(c__4550__auto__);
var G__56699 = (0);
seq__55301 = G__56696;
chunk__55302 = G__56697;
count__55303 = G__56698;
i__55304 = G__56699;
continue;
} else {
var n = cljs.core.first(seq__55301__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56700 = cljs.core.next(seq__55301__$1);
var G__56701 = null;
var G__56702 = (0);
var G__56703 = (0);
seq__55301 = G__56700;
chunk__55302 = G__56701;
count__55303 = G__56702;
i__55304 = G__56703;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__55331 = arguments.length;
switch (G__55331) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__55339 = arguments.length;
switch (G__55339) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__55347 = arguments.length;
switch (G__55347) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56787 = arguments.length;
var i__4731__auto___56788 = (0);
while(true){
if((i__4731__auto___56788 < len__4730__auto___56787)){
args__4736__auto__.push((arguments[i__4731__auto___56788]));

var G__56789 = (i__4731__auto___56788 + (1));
i__4731__auto___56788 = G__56789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__55363_56790 = cljs.core.seq(nodes);
var chunk__55364_56791 = null;
var count__55365_56792 = (0);
var i__55366_56793 = (0);
while(true){
if((i__55366_56793 < count__55365_56792)){
var node_56794 = chunk__55364_56791.cljs$core$IIndexed$_nth$arity$2(null,i__55366_56793);
fragment.appendChild(shadow.dom._to_dom(node_56794));


var G__56795 = seq__55363_56790;
var G__56796 = chunk__55364_56791;
var G__56797 = count__55365_56792;
var G__56798 = (i__55366_56793 + (1));
seq__55363_56790 = G__56795;
chunk__55364_56791 = G__56796;
count__55365_56792 = G__56797;
i__55366_56793 = G__56798;
continue;
} else {
var temp__5735__auto___56801 = cljs.core.seq(seq__55363_56790);
if(temp__5735__auto___56801){
var seq__55363_56803__$1 = temp__5735__auto___56801;
if(cljs.core.chunked_seq_QMARK_(seq__55363_56803__$1)){
var c__4550__auto___56804 = cljs.core.chunk_first(seq__55363_56803__$1);
var G__56805 = cljs.core.chunk_rest(seq__55363_56803__$1);
var G__56806 = c__4550__auto___56804;
var G__56807 = cljs.core.count(c__4550__auto___56804);
var G__56808 = (0);
seq__55363_56790 = G__56805;
chunk__55364_56791 = G__56806;
count__55365_56792 = G__56807;
i__55366_56793 = G__56808;
continue;
} else {
var node_56809 = cljs.core.first(seq__55363_56803__$1);
fragment.appendChild(shadow.dom._to_dom(node_56809));


var G__56810 = cljs.core.next(seq__55363_56803__$1);
var G__56811 = null;
var G__56812 = (0);
var G__56813 = (0);
seq__55363_56790 = G__56810;
chunk__55364_56791 = G__56811;
count__55365_56792 = G__56812;
i__55366_56793 = G__56813;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq55362){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55362));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__55396_56815 = cljs.core.seq(scripts);
var chunk__55397_56816 = null;
var count__55398_56817 = (0);
var i__55399_56818 = (0);
while(true){
if((i__55399_56818 < count__55398_56817)){
var vec__55415_56824 = chunk__55397_56816.cljs$core$IIndexed$_nth$arity$2(null,i__55399_56818);
var script_tag_56825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55415_56824,(0),null);
var script_body_56826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55415_56824,(1),null);
eval(script_body_56826);


var G__56829 = seq__55396_56815;
var G__56830 = chunk__55397_56816;
var G__56831 = count__55398_56817;
var G__56832 = (i__55399_56818 + (1));
seq__55396_56815 = G__56829;
chunk__55397_56816 = G__56830;
count__55398_56817 = G__56831;
i__55399_56818 = G__56832;
continue;
} else {
var temp__5735__auto___56833 = cljs.core.seq(seq__55396_56815);
if(temp__5735__auto___56833){
var seq__55396_56834__$1 = temp__5735__auto___56833;
if(cljs.core.chunked_seq_QMARK_(seq__55396_56834__$1)){
var c__4550__auto___56836 = cljs.core.chunk_first(seq__55396_56834__$1);
var G__56842 = cljs.core.chunk_rest(seq__55396_56834__$1);
var G__56843 = c__4550__auto___56836;
var G__56844 = cljs.core.count(c__4550__auto___56836);
var G__56845 = (0);
seq__55396_56815 = G__56842;
chunk__55397_56816 = G__56843;
count__55398_56817 = G__56844;
i__55399_56818 = G__56845;
continue;
} else {
var vec__55423_56848 = cljs.core.first(seq__55396_56834__$1);
var script_tag_56849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55423_56848,(0),null);
var script_body_56850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55423_56848,(1),null);
eval(script_body_56850);


var G__56851 = cljs.core.next(seq__55396_56834__$1);
var G__56852 = null;
var G__56853 = (0);
var G__56854 = (0);
seq__55396_56815 = G__56851;
chunk__55397_56816 = G__56852;
count__55398_56817 = G__56853;
i__55399_56818 = G__56854;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__55428){
var vec__55432 = p__55428;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55432,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55432,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__55456 = arguments.length;
switch (G__55456) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__55503 = cljs.core.seq(style_keys);
var chunk__55504 = null;
var count__55505 = (0);
var i__55506 = (0);
while(true){
if((i__55506 < count__55505)){
var it = chunk__55504.cljs$core$IIndexed$_nth$arity$2(null,i__55506);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56874 = seq__55503;
var G__56875 = chunk__55504;
var G__56876 = count__55505;
var G__56877 = (i__55506 + (1));
seq__55503 = G__56874;
chunk__55504 = G__56875;
count__55505 = G__56876;
i__55506 = G__56877;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55503);
if(temp__5735__auto__){
var seq__55503__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55503__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55503__$1);
var G__56884 = cljs.core.chunk_rest(seq__55503__$1);
var G__56885 = c__4550__auto__;
var G__56886 = cljs.core.count(c__4550__auto__);
var G__56887 = (0);
seq__55503 = G__56884;
chunk__55504 = G__56885;
count__55505 = G__56886;
i__55506 = G__56887;
continue;
} else {
var it = cljs.core.first(seq__55503__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56889 = cljs.core.next(seq__55503__$1);
var G__56890 = null;
var G__56891 = (0);
var G__56892 = (0);
seq__55503 = G__56889;
chunk__55504 = G__56890;
count__55505 = G__56891;
i__55506 = G__56892;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k55517,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__55533 = k55517;
var G__55533__$1 = (((G__55533 instanceof cljs.core.Keyword))?G__55533.fqn:null);
switch (G__55533__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55517,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__55541){
var vec__55542 = p__55541;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55542,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55542,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55516){
var self__ = this;
var G__55516__$1 = this;
return (new cljs.core.RecordIter((0),G__55516__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55518,other55519){
var self__ = this;
var this55518__$1 = this;
return (((!((other55519 == null)))) && ((this55518__$1.constructor === other55519.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55518__$1.x,other55519.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55518__$1.y,other55519.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55518__$1.__extmap,other55519.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__55516){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__55584 = cljs.core.keyword_identical_QMARK_;
var expr__55585 = k__4382__auto__;
if(cljs.core.truth_((pred__55584.cljs$core$IFn$_invoke$arity$2 ? pred__55584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__55585) : pred__55584.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__55585)))){
return (new shadow.dom.Coordinate(G__55516,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55584.cljs$core$IFn$_invoke$arity$2 ? pred__55584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__55585) : pred__55584.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__55585)))){
return (new shadow.dom.Coordinate(self__.x,G__55516,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__55516),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__55516){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__55516,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__55522){
var extmap__4413__auto__ = (function (){var G__55600 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55522,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__55522)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55600);
} else {
return G__55600;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__55522),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__55522),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k55622,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__55638 = k55622;
var G__55638__$1 = (((G__55638 instanceof cljs.core.Keyword))?G__55638.fqn:null);
switch (G__55638__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55622,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__55645){
var vec__55647 = p__55645;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55647,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55647,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55621){
var self__ = this;
var G__55621__$1 = this;
return (new cljs.core.RecordIter((0),G__55621__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55623,other55624){
var self__ = this;
var this55623__$1 = this;
return (((!((other55624 == null)))) && ((this55623__$1.constructor === other55624.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55623__$1.w,other55624.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55623__$1.h,other55624.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55623__$1.__extmap,other55624.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__55621){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__55718 = cljs.core.keyword_identical_QMARK_;
var expr__55719 = k__4382__auto__;
if(cljs.core.truth_((pred__55718.cljs$core$IFn$_invoke$arity$2 ? pred__55718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__55719) : pred__55718.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__55719)))){
return (new shadow.dom.Size(G__55621,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55718.cljs$core$IFn$_invoke$arity$2 ? pred__55718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__55719) : pred__55718.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__55719)))){
return (new shadow.dom.Size(self__.w,G__55621,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__55621),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__55621){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__55621,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__55629){
var extmap__4413__auto__ = (function (){var G__55741 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55629,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__55629)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55741);
} else {
return G__55741;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__55629),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__55629),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__57007 = (i + (1));
var G__57008 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__57007;
ret = G__57008;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55797){
var vec__55799 = p__55797;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55799,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__55805 = arguments.length;
switch (G__55805) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__57033 = ps;
var G__57034 = (i + (1));
el__$1 = G__57033;
i = G__57034;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__55883 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55883,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55883,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55883,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__55909_57039 = cljs.core.seq(props);
var chunk__55910_57040 = null;
var count__55911_57041 = (0);
var i__55912_57042 = (0);
while(true){
if((i__55912_57042 < count__55911_57041)){
var vec__55947_57043 = chunk__55910_57040.cljs$core$IIndexed$_nth$arity$2(null,i__55912_57042);
var k_57044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55947_57043,(0),null);
var v_57045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55947_57043,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_57044);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57044),v_57045);


var G__57048 = seq__55909_57039;
var G__57049 = chunk__55910_57040;
var G__57050 = count__55911_57041;
var G__57051 = (i__55912_57042 + (1));
seq__55909_57039 = G__57048;
chunk__55910_57040 = G__57049;
count__55911_57041 = G__57050;
i__55912_57042 = G__57051;
continue;
} else {
var temp__5735__auto___57053 = cljs.core.seq(seq__55909_57039);
if(temp__5735__auto___57053){
var seq__55909_57054__$1 = temp__5735__auto___57053;
if(cljs.core.chunked_seq_QMARK_(seq__55909_57054__$1)){
var c__4550__auto___57055 = cljs.core.chunk_first(seq__55909_57054__$1);
var G__57056 = cljs.core.chunk_rest(seq__55909_57054__$1);
var G__57057 = c__4550__auto___57055;
var G__57058 = cljs.core.count(c__4550__auto___57055);
var G__57059 = (0);
seq__55909_57039 = G__57056;
chunk__55910_57040 = G__57057;
count__55911_57041 = G__57058;
i__55912_57042 = G__57059;
continue;
} else {
var vec__55962_57061 = cljs.core.first(seq__55909_57054__$1);
var k_57062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55962_57061,(0),null);
var v_57063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55962_57061,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_57062);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57062),v_57063);


var G__57067 = cljs.core.next(seq__55909_57054__$1);
var G__57068 = null;
var G__57069 = (0);
var G__57070 = (0);
seq__55909_57039 = G__57067;
chunk__55910_57040 = G__57068;
count__55911_57041 = G__57069;
i__55912_57042 = G__57070;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__55983 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55983,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55983,(1),null);
var seq__55987_57074 = cljs.core.seq(node_children);
var chunk__55989_57075 = null;
var count__55990_57076 = (0);
var i__55991_57077 = (0);
while(true){
if((i__55991_57077 < count__55990_57076)){
var child_struct_57078 = chunk__55989_57075.cljs$core$IIndexed$_nth$arity$2(null,i__55991_57077);
if((!((child_struct_57078 == null)))){
if(typeof child_struct_57078 === 'string'){
var text_57079 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57079),child_struct_57078].join(''));
} else {
var children_57080 = shadow.dom.svg_node(child_struct_57078);
if(cljs.core.seq_QMARK_(children_57080)){
var seq__56043_57081 = cljs.core.seq(children_57080);
var chunk__56045_57082 = null;
var count__56046_57083 = (0);
var i__56047_57084 = (0);
while(true){
if((i__56047_57084 < count__56046_57083)){
var child_57085 = chunk__56045_57082.cljs$core$IIndexed$_nth$arity$2(null,i__56047_57084);
if(cljs.core.truth_(child_57085)){
node.appendChild(child_57085);


var G__57090 = seq__56043_57081;
var G__57091 = chunk__56045_57082;
var G__57092 = count__56046_57083;
var G__57093 = (i__56047_57084 + (1));
seq__56043_57081 = G__57090;
chunk__56045_57082 = G__57091;
count__56046_57083 = G__57092;
i__56047_57084 = G__57093;
continue;
} else {
var G__57095 = seq__56043_57081;
var G__57096 = chunk__56045_57082;
var G__57097 = count__56046_57083;
var G__57098 = (i__56047_57084 + (1));
seq__56043_57081 = G__57095;
chunk__56045_57082 = G__57096;
count__56046_57083 = G__57097;
i__56047_57084 = G__57098;
continue;
}
} else {
var temp__5735__auto___57099 = cljs.core.seq(seq__56043_57081);
if(temp__5735__auto___57099){
var seq__56043_57100__$1 = temp__5735__auto___57099;
if(cljs.core.chunked_seq_QMARK_(seq__56043_57100__$1)){
var c__4550__auto___57101 = cljs.core.chunk_first(seq__56043_57100__$1);
var G__57102 = cljs.core.chunk_rest(seq__56043_57100__$1);
var G__57103 = c__4550__auto___57101;
var G__57104 = cljs.core.count(c__4550__auto___57101);
var G__57105 = (0);
seq__56043_57081 = G__57102;
chunk__56045_57082 = G__57103;
count__56046_57083 = G__57104;
i__56047_57084 = G__57105;
continue;
} else {
var child_57106 = cljs.core.first(seq__56043_57100__$1);
if(cljs.core.truth_(child_57106)){
node.appendChild(child_57106);


var G__57111 = cljs.core.next(seq__56043_57100__$1);
var G__57112 = null;
var G__57113 = (0);
var G__57114 = (0);
seq__56043_57081 = G__57111;
chunk__56045_57082 = G__57112;
count__56046_57083 = G__57113;
i__56047_57084 = G__57114;
continue;
} else {
var G__57137 = cljs.core.next(seq__56043_57100__$1);
var G__57138 = null;
var G__57139 = (0);
var G__57140 = (0);
seq__56043_57081 = G__57137;
chunk__56045_57082 = G__57138;
count__56046_57083 = G__57139;
i__56047_57084 = G__57140;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57080);
}
}


var G__57141 = seq__55987_57074;
var G__57142 = chunk__55989_57075;
var G__57143 = count__55990_57076;
var G__57144 = (i__55991_57077 + (1));
seq__55987_57074 = G__57141;
chunk__55989_57075 = G__57142;
count__55990_57076 = G__57143;
i__55991_57077 = G__57144;
continue;
} else {
var G__57145 = seq__55987_57074;
var G__57146 = chunk__55989_57075;
var G__57147 = count__55990_57076;
var G__57148 = (i__55991_57077 + (1));
seq__55987_57074 = G__57145;
chunk__55989_57075 = G__57146;
count__55990_57076 = G__57147;
i__55991_57077 = G__57148;
continue;
}
} else {
var temp__5735__auto___57149 = cljs.core.seq(seq__55987_57074);
if(temp__5735__auto___57149){
var seq__55987_57151__$1 = temp__5735__auto___57149;
if(cljs.core.chunked_seq_QMARK_(seq__55987_57151__$1)){
var c__4550__auto___57152 = cljs.core.chunk_first(seq__55987_57151__$1);
var G__57153 = cljs.core.chunk_rest(seq__55987_57151__$1);
var G__57154 = c__4550__auto___57152;
var G__57155 = cljs.core.count(c__4550__auto___57152);
var G__57156 = (0);
seq__55987_57074 = G__57153;
chunk__55989_57075 = G__57154;
count__55990_57076 = G__57155;
i__55991_57077 = G__57156;
continue;
} else {
var child_struct_57157 = cljs.core.first(seq__55987_57151__$1);
if((!((child_struct_57157 == null)))){
if(typeof child_struct_57157 === 'string'){
var text_57158 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57158),child_struct_57157].join(''));
} else {
var children_57159 = shadow.dom.svg_node(child_struct_57157);
if(cljs.core.seq_QMARK_(children_57159)){
var seq__56075_57160 = cljs.core.seq(children_57159);
var chunk__56077_57161 = null;
var count__56078_57162 = (0);
var i__56079_57163 = (0);
while(true){
if((i__56079_57163 < count__56078_57162)){
var child_57164 = chunk__56077_57161.cljs$core$IIndexed$_nth$arity$2(null,i__56079_57163);
if(cljs.core.truth_(child_57164)){
node.appendChild(child_57164);


var G__57168 = seq__56075_57160;
var G__57169 = chunk__56077_57161;
var G__57170 = count__56078_57162;
var G__57171 = (i__56079_57163 + (1));
seq__56075_57160 = G__57168;
chunk__56077_57161 = G__57169;
count__56078_57162 = G__57170;
i__56079_57163 = G__57171;
continue;
} else {
var G__57172 = seq__56075_57160;
var G__57173 = chunk__56077_57161;
var G__57174 = count__56078_57162;
var G__57175 = (i__56079_57163 + (1));
seq__56075_57160 = G__57172;
chunk__56077_57161 = G__57173;
count__56078_57162 = G__57174;
i__56079_57163 = G__57175;
continue;
}
} else {
var temp__5735__auto___57180__$1 = cljs.core.seq(seq__56075_57160);
if(temp__5735__auto___57180__$1){
var seq__56075_57181__$1 = temp__5735__auto___57180__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56075_57181__$1)){
var c__4550__auto___57182 = cljs.core.chunk_first(seq__56075_57181__$1);
var G__57183 = cljs.core.chunk_rest(seq__56075_57181__$1);
var G__57184 = c__4550__auto___57182;
var G__57185 = cljs.core.count(c__4550__auto___57182);
var G__57186 = (0);
seq__56075_57160 = G__57183;
chunk__56077_57161 = G__57184;
count__56078_57162 = G__57185;
i__56079_57163 = G__57186;
continue;
} else {
var child_57187 = cljs.core.first(seq__56075_57181__$1);
if(cljs.core.truth_(child_57187)){
node.appendChild(child_57187);


var G__57188 = cljs.core.next(seq__56075_57181__$1);
var G__57189 = null;
var G__57190 = (0);
var G__57191 = (0);
seq__56075_57160 = G__57188;
chunk__56077_57161 = G__57189;
count__56078_57162 = G__57190;
i__56079_57163 = G__57191;
continue;
} else {
var G__57192 = cljs.core.next(seq__56075_57181__$1);
var G__57193 = null;
var G__57194 = (0);
var G__57195 = (0);
seq__56075_57160 = G__57192;
chunk__56077_57161 = G__57193;
count__56078_57162 = G__57194;
i__56079_57163 = G__57195;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57159);
}
}


var G__57196 = cljs.core.next(seq__55987_57151__$1);
var G__57197 = null;
var G__57198 = (0);
var G__57199 = (0);
seq__55987_57074 = G__57196;
chunk__55989_57075 = G__57197;
count__55990_57076 = G__57198;
i__55991_57077 = G__57199;
continue;
} else {
var G__57203 = cljs.core.next(seq__55987_57151__$1);
var G__57204 = null;
var G__57205 = (0);
var G__57206 = (0);
seq__55987_57074 = G__57203;
chunk__55989_57075 = G__57204;
count__55990_57076 = G__57205;
i__55991_57077 = G__57206;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57225 = arguments.length;
var i__4731__auto___57226 = (0);
while(true){
if((i__4731__auto___57226 < len__4730__auto___57225)){
args__4736__auto__.push((arguments[i__4731__auto___57226]));

var G__57241 = (i__4731__auto___57226 + (1));
i__4731__auto___57226 = G__57241;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq56123){
var G__56124 = cljs.core.first(seq56123);
var seq56123__$1 = cljs.core.next(seq56123);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56124,seq56123__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__56147 = arguments.length;
switch (G__56147) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__51875__auto___57273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_56160){
var state_val_56161 = (state_56160[(1)]);
if((state_val_56161 === (1))){
var state_56160__$1 = state_56160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56160__$1,(2),once_or_cleanup);
} else {
if((state_val_56161 === (2))){
var inst_56157 = (state_56160[(2)]);
var inst_56158 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_56160__$1 = (function (){var statearr_56168 = state_56160;
(statearr_56168[(7)] = inst_56157);

return statearr_56168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56160__$1,inst_56158);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__51474__auto__ = null;
var shadow$dom$state_machine__51474__auto____0 = (function (){
var statearr_56170 = [null,null,null,null,null,null,null,null];
(statearr_56170[(0)] = shadow$dom$state_machine__51474__auto__);

(statearr_56170[(1)] = (1));

return statearr_56170;
});
var shadow$dom$state_machine__51474__auto____1 = (function (state_56160){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_56160);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e56172){var ex__51477__auto__ = e56172;
var statearr_56173_57286 = state_56160;
(statearr_56173_57286[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_56160[(4)]))){
var statearr_56178_57287 = state_56160;
(statearr_56178_57287[(1)] = cljs.core.first((state_56160[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57292 = state_56160;
state_56160 = G__57292;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
shadow$dom$state_machine__51474__auto__ = function(state_56160){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__51474__auto____0.call(this);
case 1:
return shadow$dom$state_machine__51474__auto____1.call(this,state_56160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__51474__auto____0;
shadow$dom$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__51474__auto____1;
return shadow$dom$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_56179 = f__51876__auto__();
(statearr_56179[(6)] = c__51875__auto___57273);

return statearr_56179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
