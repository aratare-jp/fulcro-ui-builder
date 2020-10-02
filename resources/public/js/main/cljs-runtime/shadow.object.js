goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_57272 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.object._id[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.object._id["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_57272(this$);
}
});

var shadow$object$IObject$_type$dyn_57274 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.object._type[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.object._type["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_57274(this$);
}
});

var shadow$object$IObject$_data$dyn_57291 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.object._data[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.object._data["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_57291(this$);
}
});

var shadow$object$IObject$_update$dyn_57294 = (function (this$,update_fn){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.object._update[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4423__auto__.call(null,this$,update_fn));
} else {
var m__4420__auto__ = (shadow.object._update["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4420__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_57294(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_57297 = (function (this$,cause){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4423__auto__.call(null,this$,cause));
} else {
var m__4420__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4420__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_57297(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__56288 = arguments.length;
switch (G__56288) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4120__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__57335 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__57335;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56312_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__56312_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__56316 = arguments.length;
switch (G__56316) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56318_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__56318_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__56323){
var map__56324 = p__56323;
var map__56324__$1 = (((((!((map__56324 == null))))?(((((map__56324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56324):map__56324);
var oref = map__56324__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56324__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__56337 = arguments.length;
switch (G__56337) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56331_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__56331_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__57404 = parent;
dom = G__57404;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57411 = arguments.length;
var i__4731__auto___57417 = (0);
while(true){
if((i__4731__auto___57417 < len__4730__auto___57411)){
args__4736__auto__.push((arguments[i__4731__auto___57417]));

var G__57427 = (i__4731__auto___57417 + (1));
i__4731__auto___57417 = G__57427;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__56348 = cljs.core.seq(reactions_to_trigger);
var chunk__56349 = null;
var count__56350 = (0);
var i__56351 = (0);
while(true){
if((i__56351 < count__56350)){
var rfn = chunk__56349.cljs$core$IIndexed$_nth$arity$2(null,i__56351);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__57452 = seq__56348;
var G__57453 = chunk__56349;
var G__57454 = count__56350;
var G__57455 = (i__56351 + (1));
seq__56348 = G__57452;
chunk__56349 = G__57453;
count__56350 = G__57454;
i__56351 = G__57455;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56348);
if(temp__5735__auto____$1){
var seq__56348__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56348__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56348__$1);
var G__57456 = cljs.core.chunk_rest(seq__56348__$1);
var G__57457 = c__4550__auto__;
var G__57458 = cljs.core.count(c__4550__auto__);
var G__57459 = (0);
seq__56348 = G__57456;
chunk__56349 = G__57457;
count__56350 = G__57458;
i__56351 = G__57459;
continue;
} else {
var rfn = cljs.core.first(seq__56348__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__57460 = cljs.core.next(seq__56348__$1);
var G__57461 = null;
var G__57462 = (0);
var G__57463 = (0);
seq__56348 = G__57460;
chunk__56349 = G__57461;
count__56350 = G__57462;
i__56351 = G__57463;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq56342){
var G__56343 = cljs.core.first(seq56342);
var seq56342__$1 = cljs.core.next(seq56342);
var G__56344 = cljs.core.first(seq56342__$1);
var seq56342__$2 = cljs.core.next(seq56342__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56343,G__56344,seq56342__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__56356_57471 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__56357_57472 = null;
var count__56358_57473 = (0);
var i__56359_57474 = (0);
while(true){
if((i__56359_57474 < count__56358_57473)){
var child_57479 = chunk__56357_57472.cljs$core$IIndexed$_nth$arity$2(null,i__56359_57474);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_57479,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_57479,ev,notify_fn));


var G__57481 = seq__56356_57471;
var G__57482 = chunk__56357_57472;
var G__57483 = count__56358_57473;
var G__57484 = (i__56359_57474 + (1));
seq__56356_57471 = G__57481;
chunk__56357_57472 = G__57482;
count__56358_57473 = G__57483;
i__56359_57474 = G__57484;
continue;
} else {
var temp__5735__auto___57485 = cljs.core.seq(seq__56356_57471);
if(temp__5735__auto___57485){
var seq__56356_57486__$1 = temp__5735__auto___57485;
if(cljs.core.chunked_seq_QMARK_(seq__56356_57486__$1)){
var c__4550__auto___57493 = cljs.core.chunk_first(seq__56356_57486__$1);
var G__57495 = cljs.core.chunk_rest(seq__56356_57486__$1);
var G__57496 = c__4550__auto___57493;
var G__57497 = cljs.core.count(c__4550__auto___57493);
var G__57498 = (0);
seq__56356_57471 = G__57495;
chunk__56357_57472 = G__57496;
count__56358_57473 = G__57497;
i__56359_57474 = G__57498;
continue;
} else {
var child_57500 = cljs.core.first(seq__56356_57486__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_57500,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_57500,ev,notify_fn));


var G__57504 = cljs.core.next(seq__56356_57486__$1);
var G__57505 = null;
var G__57506 = (0);
var G__57507 = (0);
seq__56356_57471 = G__57504;
chunk__56357_57472 = G__57505;
count__56358_57473 = G__57506;
i__56359_57474 = G__57507;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57510 = arguments.length;
var i__4731__auto___57511 = (0);
while(true){
if((i__4731__auto___57511 < len__4730__auto___57510)){
args__4736__auto__.push((arguments[i__4731__auto___57511]));

var G__57515 = (i__4731__auto___57511 + (1));
i__4731__auto___57511 = G__57515;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq56370){
var G__56371 = cljs.core.first(seq56370);
var seq56370__$1 = cljs.core.next(seq56370);
var G__56372 = cljs.core.first(seq56370__$1);
var seq56370__$2 = cljs.core.next(seq56370__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56371,G__56372,seq56370__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57518 = arguments.length;
var i__4731__auto___57519 = (0);
while(true){
if((i__4731__auto___57519 < len__4730__auto___57518)){
args__4736__auto__.push((arguments[i__4731__auto___57519]));

var G__57520 = (i__4731__auto___57519 + (1));
i__4731__auto___57519 = G__57520;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__57521 = shadow.object.get_parent(current);
current = G__57521;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq56390){
var G__56391 = cljs.core.first(seq56390);
var seq56390__$1 = cljs.core.next(seq56390);
var G__56392 = cljs.core.first(seq56390__$1);
var seq56390__$2 = cljs.core.next(seq56390__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56391,G__56392,seq56390__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57525 = arguments.length;
var i__4731__auto___57526 = (0);
while(true){
if((i__4731__auto___57526 < len__4730__auto___57525)){
args__4736__auto__.push((arguments[i__4731__auto___57526]));

var G__57529 = (i__4731__auto___57526 + (1));
i__4731__auto___57526 = G__57529;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq56399){
var G__56400 = cljs.core.first(seq56399);
var seq56399__$1 = cljs.core.next(seq56399);
var G__56401 = cljs.core.first(seq56399__$1);
var seq56399__$2 = cljs.core.next(seq56399__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56400,G__56401,seq56399__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__56422 = this$;
var G__56423 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__56422,G__56423) : custom_remove.call(null,G__56422,G__56423));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__56427 = arguments.length;
switch (G__56427) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__56436 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__56437 = null;
var count__56438 = (0);
var i__56439 = (0);
while(true){
if((i__56439 < count__56438)){
var vec__56461 = chunk__56437.cljs$core$IIndexed$_nth$arity$2(null,i__56439);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56461,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56461,(1),null);
var ev_def = vec__56461;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_57576__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__56436,chunk__56437,count__56438,i__56439,vec__56461,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__56436,chunk__56437,count__56438,i__56439,vec__56461,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__56436,chunk__56437,count__56438,i__56439,handler_57576__$1,vec__56461,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_57576__$1.cljs$core$IFn$_invoke$arity$3 ? handler_57576__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_57576__$1.call(null,oref,e,el));
});})(seq__56436,chunk__56437,count__56438,i__56439,handler_57576__$1,vec__56461,ev,handler,ev_def))
);


var G__57586 = seq__56436;
var G__57587 = chunk__56437;
var G__57588 = count__56438;
var G__57589 = (i__56439 + (1));
seq__56436 = G__57586;
chunk__56437 = G__57587;
count__56438 = G__57588;
i__56439 = G__57589;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56436);
if(temp__5735__auto__){
var seq__56436__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56436__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56436__$1);
var G__57590 = cljs.core.chunk_rest(seq__56436__$1);
var G__57591 = c__4550__auto__;
var G__57592 = cljs.core.count(c__4550__auto__);
var G__57593 = (0);
seq__56436 = G__57590;
chunk__56437 = G__57591;
count__56438 = G__57592;
i__56439 = G__57593;
continue;
} else {
var vec__56464 = cljs.core.first(seq__56436__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56464,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56464,(1),null);
var ev_def = vec__56464;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_57594__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__56436,chunk__56437,count__56438,i__56439,vec__56464,ev,handler,ev_def,seq__56436__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__56436,chunk__56437,count__56438,i__56439,vec__56464,ev,handler,ev_def,seq__56436__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__56436,chunk__56437,count__56438,i__56439,handler_57594__$1,vec__56464,ev,handler,ev_def,seq__56436__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_57594__$1.cljs$core$IFn$_invoke$arity$3 ? handler_57594__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_57594__$1.call(null,oref,e,el));
});})(seq__56436,chunk__56437,count__56438,i__56439,handler_57594__$1,vec__56464,ev,handler,ev_def,seq__56436__$1,temp__5735__auto__))
);


var G__57595 = cljs.core.next(seq__56436__$1);
var G__57596 = null;
var G__57597 = (0);
var G__57598 = (0);
seq__56436 = G__57595;
chunk__56437 = G__57596;
count__56438 = G__57597;
i__56439 = G__57598;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__56488){
var vec__56489 = p__56488;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56489,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56489,(1),null);
if(cljs.core.truth_((function (){var and__4109__auto__ = event;
if(cljs.core.truth_(and__4109__auto__)){
return handler;
} else {
return and__4109__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57605 = arguments.length;
var i__4731__auto___57606 = (0);
while(true){
if((i__4731__auto___57606 < len__4730__auto___57605)){
args__4736__auto__.push((arguments[i__4731__auto___57606]));

var G__57608 = (i__4731__auto___57606 + (1));
i__4731__auto___57606 = G__57608;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e56536){if((e56536 instanceof Object)){
var e = e56536;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e56536;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq56517){
var G__56519 = cljs.core.first(seq56517);
var seq56517__$1 = cljs.core.next(seq56517);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56519,seq56517__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__56544 = arguments.length;
switch (G__56544) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__56545 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__56545) : shadow.dom.build.call(null,G__56545));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k56547,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__56556 = k56547;
var G__56556__$1 = (((G__56556 instanceof cljs.core.Keyword))?G__56556.fqn:null);
switch (G__56556__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56547,else__4377__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__56561){
var vec__56562 = p__56561;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56562,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56562,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.object.Watch{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56546){
var self__ = this;
var G__56546__$1 = this;
return (new cljs.core.RecordIter((0),G__56546__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56548,other56549){
var self__ = this;
var this56548__$1 = this;
return (((!((other56549 == null)))) && ((this56548__$1.constructor === other56549.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56548__$1.key,other56549.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56548__$1.handler,other56549.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56548__$1.__extmap,other56549.__extmap)));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__56546){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__56576 = cljs.core.keyword_identical_QMARK_;
var expr__56577 = k__4382__auto__;
if(cljs.core.truth_((pred__56576.cljs$core$IFn$_invoke$arity$2 ? pred__56576.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__56577) : pred__56576.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__56577)))){
return (new shadow.object.Watch(G__56546,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56576.cljs$core$IFn$_invoke$arity$2 ? pred__56576.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__56577) : pred__56576.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__56577)))){
return (new shadow.object.Watch(self__.key,G__56546,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__56546),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__56546){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__56546,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__56551){
var extmap__4413__auto__ = (function (){var G__56587 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56551,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__56551)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56587);
} else {
return G__56587;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__56551),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__56551),null,cljs.core.not_empty(extmap__4413__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),other.shadow$object$IObject$_id$arity$1(null))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56593_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__56593_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__56705 = cljs.core.seq(self__.watches);
var chunk__56706 = null;
var count__56707 = (0);
var i__56708 = (0);
while(true){
if((i__56708 < count__56707)){
var map__56719 = chunk__56706.cljs$core$IIndexed$_nth$arity$2(null,i__56708);
var map__56719__$1 = (((((!((map__56719 == null))))?(((((map__56719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56719):map__56719);
var watch = map__56719__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56719__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56719__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__57737 = seq__56705;
var G__57738 = chunk__56706;
var G__57739 = count__56707;
var G__57740 = (i__56708 + (1));
seq__56705 = G__57737;
chunk__56706 = G__57738;
count__56707 = G__57739;
i__56708 = G__57740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56705);
if(temp__5735__auto__){
var seq__56705__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56705__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56705__$1);
var G__57745 = cljs.core.chunk_rest(seq__56705__$1);
var G__57746 = c__4550__auto__;
var G__57747 = cljs.core.count(c__4550__auto__);
var G__57748 = (0);
seq__56705 = G__57745;
chunk__56706 = G__57746;
count__56707 = G__57747;
i__56708 = G__57748;
continue;
} else {
var map__56724 = cljs.core.first(seq__56705__$1);
var map__56724__$1 = (((((!((map__56724 == null))))?(((((map__56724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56724):map__56724);
var watch = map__56724__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56724__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56724__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__57749 = cljs.core.next(seq__56705__$1);
var G__57750 = null;
var G__57751 = (0);
var G__57752 = (0);
seq__56705 = G__57749;
chunk__56706 = G__57750;
count__56707 = G__57751;
i__56708 = G__57752;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__56737_57779 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__56738_57780 = null;
var count__56739_57781 = (0);
var i__56740_57782 = (0);
while(true){
if((i__56740_57782 < count__56739_57781)){
var child_57785 = chunk__56738_57780.cljs$core$IIndexed$_nth$arity$2(null,i__56740_57782);
shadow.object._destroy_BANG_(child_57785,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__57791 = seq__56737_57779;
var G__57792 = chunk__56738_57780;
var G__57793 = count__56739_57781;
var G__57794 = (i__56740_57782 + (1));
seq__56737_57779 = G__57791;
chunk__56738_57780 = G__57792;
count__56739_57781 = G__57793;
i__56740_57782 = G__57794;
continue;
} else {
var temp__5735__auto___57795 = cljs.core.seq(seq__56737_57779);
if(temp__5735__auto___57795){
var seq__56737_57796__$1 = temp__5735__auto___57795;
if(cljs.core.chunked_seq_QMARK_(seq__56737_57796__$1)){
var c__4550__auto___57797 = cljs.core.chunk_first(seq__56737_57796__$1);
var G__57798 = cljs.core.chunk_rest(seq__56737_57796__$1);
var G__57799 = c__4550__auto___57797;
var G__57800 = cljs.core.count(c__4550__auto___57797);
var G__57801 = (0);
seq__56737_57779 = G__57798;
chunk__56738_57780 = G__57799;
count__56739_57781 = G__57800;
i__56740_57782 = G__57801;
continue;
} else {
var child_57807 = cljs.core.first(seq__56737_57796__$1);
shadow.object._destroy_BANG_(child_57807,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__57808 = cljs.core.next(seq__56737_57796__$1);
var G__57809 = null;
var G__57810 = (0);
var G__57811 = (0);
seq__56737_57779 = G__57808;
chunk__56738_57780 = G__57809;
count__56739_57781 = G__57810;
i__56740_57782 = G__57811;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_57817 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_57817 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_57817);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__56827 = arguments.length;
switch (G__56827) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__56861 = arguments.length;
switch (G__56861) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57835 = arguments.length;
var i__4731__auto___57836 = (0);
while(true){
if((i__4731__auto___57836 < len__4730__auto___57835)){
args__4736__auto__.push((arguments[i__4731__auto___57836]));

var G__57839 = (i__4731__auto___57836 + (1));
i__4731__auto___57836 = G__57839;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_57846 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___57848 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___57848)){
var dom_57849 = temp__5733__auto___57848;
shadow.dom.set_data(dom_57849,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_57849,dom_events_57846);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_57849], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_57849], 0));
} else {
var temp__5735__auto___57850 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___57850)){
var dom_fn_57853 = temp__5735__auto___57850;
var dom_57854 = (function (){var G__56920 = (dom_fn_57853.cljs$core$IFn$_invoke$arity$2 ? dom_fn_57853.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_57853.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__56920) : shadow.dom.build.call(null,G__56920));
})();
shadow.dom.set_data(dom_57854,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_57854], 0));

shadow.object.bind_dom_events(oref,dom_57854,dom_events_57846);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_57854], 0));
} else {
}
}

var temp__5735__auto___57857 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___57857)){
var watches_57858 = temp__5735__auto___57857;
var seq__56921_57859 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_57858));
var chunk__56925_57860 = null;
var count__56926_57861 = (0);
var i__56927_57862 = (0);
while(true){
if((i__56927_57862 < count__56926_57861)){
var vec__56936_57863 = chunk__56925_57860.cljs$core$IIndexed$_nth$arity$2(null,i__56927_57862);
var attr_57864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56936_57863,(0),null);
var handler_57865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56936_57863,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_57864,((function (seq__56921_57859,chunk__56925_57860,count__56926_57861,i__56927_57862,vec__56936_57863,attr_57864,handler_57865,watches_57858,temp__5735__auto___57857,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_57865.cljs$core$IFn$_invoke$arity$3 ? handler_57865.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_57865.call(null,oref,old,new$));
});})(seq__56921_57859,chunk__56925_57860,count__56926_57861,i__56927_57862,vec__56936_57863,attr_57864,handler_57865,watches_57858,temp__5735__auto___57857,oid,parent,result_chan,odef,obj,oref))
);


var G__57867 = seq__56921_57859;
var G__57868 = chunk__56925_57860;
var G__57869 = count__56926_57861;
var G__57870 = (i__56927_57862 + (1));
seq__56921_57859 = G__57867;
chunk__56925_57860 = G__57868;
count__56926_57861 = G__57869;
i__56927_57862 = G__57870;
continue;
} else {
var temp__5735__auto___57871__$1 = cljs.core.seq(seq__56921_57859);
if(temp__5735__auto___57871__$1){
var seq__56921_57872__$1 = temp__5735__auto___57871__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56921_57872__$1)){
var c__4550__auto___57873 = cljs.core.chunk_first(seq__56921_57872__$1);
var G__57874 = cljs.core.chunk_rest(seq__56921_57872__$1);
var G__57875 = c__4550__auto___57873;
var G__57876 = cljs.core.count(c__4550__auto___57873);
var G__57877 = (0);
seq__56921_57859 = G__57874;
chunk__56925_57860 = G__57875;
count__56926_57861 = G__57876;
i__56927_57862 = G__57877;
continue;
} else {
var vec__56939_57880 = cljs.core.first(seq__56921_57872__$1);
var attr_57881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56939_57880,(0),null);
var handler_57882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56939_57880,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_57881,((function (seq__56921_57859,chunk__56925_57860,count__56926_57861,i__56927_57862,vec__56939_57880,attr_57881,handler_57882,seq__56921_57872__$1,temp__5735__auto___57871__$1,watches_57858,temp__5735__auto___57857,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_57882.cljs$core$IFn$_invoke$arity$3 ? handler_57882.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_57882.call(null,oref,old,new$));
});})(seq__56921_57859,chunk__56925_57860,count__56926_57861,i__56927_57862,vec__56939_57880,attr_57881,handler_57882,seq__56921_57872__$1,temp__5735__auto___57871__$1,watches_57858,temp__5735__auto___57857,oid,parent,result_chan,odef,obj,oref))
);


var G__57920 = cljs.core.next(seq__56921_57872__$1);
var G__57921 = null;
var G__57922 = (0);
var G__57923 = (0);
seq__56921_57859 = G__57920;
chunk__56925_57860 = G__57921;
count__56926_57861 = G__57922;
i__56927_57862 = G__57923;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq56914){
var G__56915 = cljs.core.first(seq56914);
var seq56914__$1 = cljs.core.next(seq56914);
var G__56916 = cljs.core.first(seq56914__$1);
var seq56914__$2 = cljs.core.next(seq56914__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56915,G__56916,seq56914__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__56947 = arguments.length;
switch (G__56947) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__56944_SHARP_){
var G__56957 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__56944_SHARP_) : node_gen.call(null,p1__56944_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__56957) : shadow.dom.build.call(null,G__56957));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__56962_57940 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__56963_57941 = null;
var count__56964_57942 = (0);
var i__56965_57943 = (0);
while(true){
if((i__56965_57943 < count__56964_57942)){
var obj_57946 = chunk__56963_57941.cljs$core$IIndexed$_nth$arity$2(null,i__56965_57943);
var obj_57947__$1 = shadow.object.get_from_dom(obj_57946);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_57947__$1);


var G__57950 = seq__56962_57940;
var G__57951 = chunk__56963_57941;
var G__57952 = count__56964_57942;
var G__57953 = (i__56965_57943 + (1));
seq__56962_57940 = G__57950;
chunk__56963_57941 = G__57951;
count__56964_57942 = G__57952;
i__56965_57943 = G__57953;
continue;
} else {
var temp__5735__auto___57954 = cljs.core.seq(seq__56962_57940);
if(temp__5735__auto___57954){
var seq__56962_57955__$1 = temp__5735__auto___57954;
if(cljs.core.chunked_seq_QMARK_(seq__56962_57955__$1)){
var c__4550__auto___57956 = cljs.core.chunk_first(seq__56962_57955__$1);
var G__57957 = cljs.core.chunk_rest(seq__56962_57955__$1);
var G__57958 = c__4550__auto___57956;
var G__57959 = cljs.core.count(c__4550__auto___57956);
var G__57960 = (0);
seq__56962_57940 = G__57957;
chunk__56963_57941 = G__57958;
count__56964_57942 = G__57959;
i__56965_57943 = G__57960;
continue;
} else {
var obj_57961 = cljs.core.first(seq__56962_57955__$1);
var obj_57962__$1 = shadow.object.get_from_dom(obj_57961);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_57962__$1);


var G__57963 = cljs.core.next(seq__56962_57955__$1);
var G__57964 = null;
var G__57965 = (0);
var G__57966 = (0);
seq__56962_57940 = G__57963;
chunk__56963_57941 = G__57964;
count__56964_57942 = G__57965;
i__56965_57943 = G__57966;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__56979 = arguments.length;
switch (G__56979) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__56975_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__56975_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__56988){
var vec__56989 = p__56988;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56989,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56989,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__56998_57977 = cljs.core.seq((function (){var G__57004 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__57004) : coll_transform.call(null,G__57004));
})());
var chunk__56999_57978 = null;
var count__57000_57979 = (0);
var i__57001_57980 = (0);
while(true){
if((i__57001_57980 < count__57000_57979)){
var item_57982 = chunk__56999_57978.cljs$core$IIndexed$_nth$arity$2(null,i__57001_57980);
shadow.object.dom_enter(coll_dom,make_item_fn(item_57982));


var G__57984 = seq__56998_57977;
var G__57985 = chunk__56999_57978;
var G__57986 = count__57000_57979;
var G__57987 = (i__57001_57980 + (1));
seq__56998_57977 = G__57984;
chunk__56999_57978 = G__57985;
count__57000_57979 = G__57986;
i__57001_57980 = G__57987;
continue;
} else {
var temp__5735__auto___57989 = cljs.core.seq(seq__56998_57977);
if(temp__5735__auto___57989){
var seq__56998_57990__$1 = temp__5735__auto___57989;
if(cljs.core.chunked_seq_QMARK_(seq__56998_57990__$1)){
var c__4550__auto___57991 = cljs.core.chunk_first(seq__56998_57990__$1);
var G__57993 = cljs.core.chunk_rest(seq__56998_57990__$1);
var G__57994 = c__4550__auto___57991;
var G__57995 = cljs.core.count(c__4550__auto___57991);
var G__57996 = (0);
seq__56998_57977 = G__57993;
chunk__56999_57978 = G__57994;
count__57000_57979 = G__57995;
i__57001_57980 = G__57996;
continue;
} else {
var item_58001 = cljs.core.first(seq__56998_57990__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_58001));


var G__58002 = cljs.core.next(seq__56998_57990__$1);
var G__58003 = null;
var G__58004 = (0);
var G__58005 = (0);
seq__56998_57977 = G__58002;
chunk__56999_57978 = G__58003;
count__57000_57979 = G__58004;
i__57001_57980 = G__58005;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4211__auto__ = count_new;
var y__4212__auto__ = count_children;
return ((x__4211__auto__ < y__4212__auto__) ? x__4211__auto__ : y__4212__auto__);
})();
var n__4607__auto___58041 = count_children__$1;
var idx_58043 = (0);
while(true){
if((idx_58043 < n__4607__auto___58041)){
var cn_58044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_58043);
var cc_58045 = shadow.object.get_from_dom(cn_58044);
var ckey_58046 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_58045);
var cval_58047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_58045,item_key);
var vec__57022_58048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_58043);
var nkey_58049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57022_58048,(0),null);
var nval_58050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57022_58048,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_58046,nkey_58049)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_58047,nval_58050)))){
} else {
var new_obj_58060 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_58049,nval_58050], null));
shadow.dom.replace_node(cn_58044,new_obj_58060);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_58045);

shadow.object.notify_tree_BANG_(new_obj_58060,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__58062 = (idx_58043 + (1));
idx_58043 = G__58062;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__57029_58066 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__57030_58067 = null;
var count__57031_58068 = (0);
var i__57032_58069 = (0);
while(true){
if((i__57032_58069 < count__57031_58068)){
var item_58072 = chunk__57030_58067.cljs$core$IIndexed$_nth$arity$2(null,i__57032_58069);
shadow.object.dom_enter(coll_dom,make_item_fn(item_58072));


var G__58073 = seq__57029_58066;
var G__58074 = chunk__57030_58067;
var G__58075 = count__57031_58068;
var G__58076 = (i__57032_58069 + (1));
seq__57029_58066 = G__58073;
chunk__57030_58067 = G__58074;
count__57031_58068 = G__58075;
i__57032_58069 = G__58076;
continue;
} else {
var temp__5735__auto___58077 = cljs.core.seq(seq__57029_58066);
if(temp__5735__auto___58077){
var seq__57029_58078__$1 = temp__5735__auto___58077;
if(cljs.core.chunked_seq_QMARK_(seq__57029_58078__$1)){
var c__4550__auto___58079 = cljs.core.chunk_first(seq__57029_58078__$1);
var G__58080 = cljs.core.chunk_rest(seq__57029_58078__$1);
var G__58081 = c__4550__auto___58079;
var G__58082 = cljs.core.count(c__4550__auto___58079);
var G__58083 = (0);
seq__57029_58066 = G__58080;
chunk__57030_58067 = G__58081;
count__57031_58068 = G__58082;
i__57032_58069 = G__58083;
continue;
} else {
var item_58085 = cljs.core.first(seq__57029_58078__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_58085));


var G__58086 = cljs.core.next(seq__57029_58078__$1);
var G__58087 = null;
var G__58088 = (0);
var G__58089 = (0);
seq__57029_58066 = G__58086;
chunk__57030_58067 = G__58087;
count__57031_58068 = G__58088;
i__57032_58069 = G__58089;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4109__auto__ = key;
if(cljs.core.truth_(and__4109__auto__)){
return path;
} else {
return and__4109__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__57086 = "inspect!";
var G__57087 = shadow.object._id(oref);
var G__57088 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__57089 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__57086,G__57087,G__57088,G__57089) : shadow.object.info.call(null,G__57086,G__57087,G__57088,G__57089));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__57107_58097 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__57108_58098 = null;
var count__57109_58099 = (0);
var i__57110_58100 = (0);
while(true){
if((i__57110_58100 < count__57109_58099)){
var vec__57165_58101 = chunk__57108_58098.cljs$core$IIndexed$_nth$arity$2(null,i__57110_58100);
var id_58102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57165_58101,(0),null);
var oref_58103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57165_58101,(1),null);
var G__57176_58105 = "dump";
var G__57177_58106 = id_58102;
var G__57178_58107 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_58103)], 0));
var G__57179_58108 = cljs.core.deref(shadow.object._data(oref_58103));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__57176_58105,G__57177_58106,G__57178_58107,G__57179_58108) : shadow.object.info.call(null,G__57176_58105,G__57177_58106,G__57178_58107,G__57179_58108));


var G__58109 = seq__57107_58097;
var G__58110 = chunk__57108_58098;
var G__58111 = count__57109_58099;
var G__58112 = (i__57110_58100 + (1));
seq__57107_58097 = G__58109;
chunk__57108_58098 = G__58110;
count__57109_58099 = G__58111;
i__57110_58100 = G__58112;
continue;
} else {
var temp__5735__auto___58121 = cljs.core.seq(seq__57107_58097);
if(temp__5735__auto___58121){
var seq__57107_58122__$1 = temp__5735__auto___58121;
if(cljs.core.chunked_seq_QMARK_(seq__57107_58122__$1)){
var c__4550__auto___58124 = cljs.core.chunk_first(seq__57107_58122__$1);
var G__58125 = cljs.core.chunk_rest(seq__57107_58122__$1);
var G__58126 = c__4550__auto___58124;
var G__58127 = cljs.core.count(c__4550__auto___58124);
var G__58128 = (0);
seq__57107_58097 = G__58125;
chunk__57108_58098 = G__58126;
count__57109_58099 = G__58127;
i__57110_58100 = G__58128;
continue;
} else {
var vec__57200_58133 = cljs.core.first(seq__57107_58122__$1);
var id_58134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57200_58133,(0),null);
var oref_58135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57200_58133,(1),null);
var G__57207_58136 = "dump";
var G__57208_58137 = id_58134;
var G__57209_58138 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_58135)], 0));
var G__57210_58139 = cljs.core.deref(shadow.object._data(oref_58135));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__57207_58136,G__57208_58137,G__57209_58138,G__57210_58139) : shadow.object.info.call(null,G__57207_58136,G__57208_58137,G__57209_58138,G__57210_58139));


var G__58141 = cljs.core.next(seq__57107_58122__$1);
var G__58142 = null;
var G__58143 = (0);
var G__58144 = (0);
seq__57107_58097 = G__58141;
chunk__57108_58098 = G__58142;
count__57109_58099 = G__58143;
i__57110_58100 = G__58144;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
