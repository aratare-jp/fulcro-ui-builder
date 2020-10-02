goog.provide('com.fulcrologic.fulcro.algorithms.form_state');
com.fulcrologic.fulcro.algorithms.form_state.ident_generator = (function com$fulcrologic$fulcro$algorithms$form_state$ident_generator(){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("other","by-id","other/by-id",-2109321389),(9)], null)]));
});
/**
 * Returns the set of defined form fields for the given component class (or instance).
 */
com.fulcrologic.fulcro.algorithms.form_state.get_form_fields = (function com$fulcrologic$fulcro$algorithms$form_state$get_form_fields(class$){
return com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form-fields","form-fields",35924568)], 0));
});
/**
 * Returns the form database table ID for the given entity ident.
 */
com.fulcrologic.fulcro.algorithms.form_state.form_id = (function com$fulcrologic$fulcro$algorithms$form_state$form_id(entity_ident){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.first(entity_ident),new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.second(entity_ident)], null);
});

var options__60420__auto___63655 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$fulcro$algorithms$form_state$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$fulcrologic$fulcro$algorithms$form_state$ident_STAR_(this$,p__63286){
var map__63287 = p__63286;
var map__63287__$1 = (((((!((map__63287 == null))))?(((((map__63287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63287):map__63287);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63287__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63287__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63287__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63287__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63287__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","forms-by-ident","com.fulcrologic.fulcro.algorithms.form-state/forms-by-ident",827952006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.first(id),new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.second(id)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro$algorithms$form_state$render_FormConfig(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__63295 = com.fulcrologic.fulcro.components.props(this$);
var map__63295__$1 = (((((!((map__63295 == null))))?(((((map__63295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63295):map__63295);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63295__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63295__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63295__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63295__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63295__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.form_state !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.form_state.FormConfig !== 'undefined')){
} else {
/**
 * A component supporting normalization of form state configuration. Use Fulcro Inspect for viewing that data.
 *   Rendering isn't supported on this component so it will work with React Native.
 *   Can also render the form config, if that is useful to you.
 */
com.fulcrologic.fulcro.algorithms.form_state.FormConfig = (function com$fulcrologic$fulcro$algorithms$form_state$FormConfig(props__60421__auto__){
var this__60422__auto__ = this;
var temp__5733__auto___63659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__60420__auto___63655,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___63659)){
var init_state__60423__auto___63660 = temp__5733__auto___63659;
(this__60422__auto__.state = (function (){var obj63300 = ({"fulcro$state":(function (){var G__63301 = this__60422__auto__;
var G__63302 = goog.object.get(props__60421__auto__,"fulcro$value");
return (init_state__60423__auto___63660.cljs$core$IFn$_invoke$arity$2 ? init_state__60423__auto___63660.cljs$core$IFn$_invoke$arity$2(G__63301,G__63302) : init_state__60423__auto___63660.call(null,G__63301,G__63302));
})()});
return obj63300;
})());
} else {
(this__60422__auto__.state = (function (){var obj63305 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj63305;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro.algorithms.form_state.FormConfig,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","FormConfig","com.fulcrologic.fulcro.algorithms.form-state/FormConfig",-841101890),options__60420__auto___63655);
/**
 * A query join to ::form-config. This should be added to the query of a component that is
 *   using form state support.
 */
com.fulcrologic.fulcro.algorithms.form_state.form_config_join = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.algorithms.form_state.FormConfig)], null);
/**
 * Generate a form config given:
 * 
 *   entity-ident - The ident of the entity you're configuring forms for.
 *   fields - A set of keywords on the entity that is the form.
 *   subforms - An optional set of keywords on the entity that is the form, for the joins to subforms.
 */
com.fulcrologic.fulcro.algorithms.form_state.form_config = (function com$fulcrologic$fulcro$algorithms$form_state$form_config(var_args){
var G__63323 = arguments.length;
switch (G__63323) {
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$2 = (function (entity_ident,fields){
return com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$3(entity_ident,fields,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$core$IFn$_invoke$arity$3 = (function (entity_ident,fields,subforms){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833),fields,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__63338){
var vec__63339 = p__63338;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63339,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),v], null))]);
})),subforms)], null);
}));

(com.fulcrologic.fulcro.algorithms.form_state.form_config.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.algorithms.form_state.derive_form_info = (function com$fulcrologic$fulcro$algorithms$form_state$derive_form_info(class$){
var query_nodes = (function (){var G__63353 = class$;
var G__63353__$1 = (((G__63353 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(G__63353));
var G__63353__$2 = (((G__63353__$1 == null))?null:edn_query_language.core.query__GT_ast(G__63353__$1));
if((G__63353__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__63353__$2);
}
})();
var query_nodes_by_key = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(n),n], null);
})),query_nodes);
var join_component = (function (k){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(query_nodes_by_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"component","component",1555936782)], null));
});
var map__63351 = cljs.core.group_by(new cljs.core.Keyword(null,"type","type",1174270348),query_nodes);
var map__63351__$1 = (((((!((map__63351 == null))))?(((((map__63351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63351):map__63351);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63351__$1,new cljs.core.Keyword(null,"prop","prop",-515168332));
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63351__$1,new cljs.core.Keyword(null,"join","join",-758861890));
var join_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),joins));
var prop_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),props));
var queries_for_config_QMARK_ = cljs.core.contains_QMARK_(join_keys,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var all_fields = com.fulcrologic.fulcro.algorithms.form_state.get_form_fields(class$);
var has_fields_QMARK_ = cljs.core.seq(all_fields);
var fields = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(all_fields,prop_keys);
var subform_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(all_fields,join_keys);
var subforms = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),join_component(k)], null))], null);
})),subform_keys);
if(queries_for_config_QMARK_){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to add form configuration to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(class$)),", but it does not query for config!"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offending-component","offending-component",385750063),class$], null));
}

if(has_fields_QMARK_){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to add form configuration to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(class$)),", but it does not declare any fields!"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offending-component","offending-component",385750063),class$], null));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fields,subforms,subform_keys], null);
});
/**
 * Add form configuration data to a *denormalized* entity (e.g. pre-merge). This is useful in
 *   initial state or when using `merge-component!`. This function *will not* touch an entity
 *   that already has form config but will recurse the entire form set. It can therefore be
 *   invoked on the top-level of the form set when adding, for example, an instance of a sub-form.
 * 
 *   class - The component class.
 *   entity - A denormalized (tree) of data that matches the given component class.
 * 
 *   Returns the (possibly updated) denormalized entity, ready to merge.
 */
com.fulcrologic.fulcro.algorithms.form_state.add_form_config = (function com$fulcrologic$fulcro$algorithms$form_state$add_form_config(class$,entity){
var vec__63388 = com.fulcrologic.fulcro.algorithms.form_state.derive_form_info(class$);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63388,(0),null);
var subform_classmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63388,(1),null);
var subform_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63388,(2),null);
var local_entity = ((cljs.core.contains_QMARK_(entity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)))?entity:(function (){var pristine_state = cljs.core.select_keys(entity,fields);
var subform_ident = (function (k,entity__$1){
var G__63391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subform_classmap,k);
var G__63391__$1 = (((G__63391 == null))?null:cljs.core.meta(G__63391));
var G__63391__$2 = (((G__63391__$1 == null))?null:new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__63391__$1));
if((G__63391__$2 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__63391__$2,entity__$1);
}
});
var subform_keys__$1 = cljs.core.set(cljs.core.keys(subform_classmap));
var subform_refs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (refs,k){
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,k);
if(cljs.core.map_QMARK_(items)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(refs,k,subform_ident(k,items));
} else {
if(cljs.core.vector_QMARK_(items)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(refs,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63375_SHARP_){
return subform_ident(k,p1__63375_SHARP_);
}),items));
} else {
return refs;

}
}
}),cljs.core.PersistentArrayMap.EMPTY,subform_keys__$1);
var pristine_state__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pristine_state,subform_refs], 0));
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,entity),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833),fields,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),pristine_state__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705),(function (){var or__4120__auto__ = subform_classmap;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854),config], null)], 0));
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (resulting_entity,k){
var c = (function (){var G__63397 = subform_classmap;
var G__63397__$1 = (((G__63397 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__63397,k));
var G__63397__$2 = (((G__63397__$1 == null))?null:cljs.core.meta(G__63397__$1));
if((G__63397__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__63397__$2);
}
})();
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resulting_entity,k);
try{if(cljs.core.truth_((function (){var and__4109__auto__ = c;
if(cljs.core.truth_(and__4109__auto__)){
var and__4109__auto____$1 = child;
if(cljs.core.truth_(and__4109__auto____$1)){
return cljs.core.vector_QMARK_(child);
} else {
return and__4109__auto____$1;
}
} else {
return and__4109__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resulting_entity,k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63379_SHARP_){
return (com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(c,p1__63379_SHARP_) : com.fulcrologic.fulcro.algorithms.form_state.add_form_config.call(null,c,p1__63379_SHARP_));
}),child));
} else {
if(cljs.core.truth_((function (){var and__4109__auto__ = c;
if(cljs.core.truth_(and__4109__auto__)){
return child;
} else {
return and__4109__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resulting_entity,k,(com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(c,child) : com.fulcrologic.fulcro.algorithms.form_state.add_form_config.call(null,c,child)));
} else {
return resulting_entity;

}
}
}catch (e63399){var e = e63399;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(c))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(class$))," failed to initialize."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested-exception","nested-exception",162394239),e], null));
}}),local_entity,subform_keys);
});
/**
 * Identical to `add-form-config`, but works against normalized entities in the
 *   app state. This makes it ideal for composition within mutations.
 * 
 *   state-map - The application state database (map, not atom).
 *   class - The component class. Must have declared form fields.
 *   entity-ident - The ident of the normalized entity of the given class that you wish to initialize.
 * 
 *   Returns an updated state map with normalized form configuration in place for the entity.
 */
com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$add_form_config_STAR_(state_map,class$,entity_ident){
var vec__63410 = com.fulcrologic.fulcro.algorithms.form_state.derive_form_info(class$);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63410,(0),null);
var subform_classmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63410,(1),null);
var subform_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63410,(2),null);
var entity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,entity_ident);
var updated_state_map = ((cljs.core.contains_QMARK_(entity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)))?state_map:(function (){var pristine_state = cljs.core.select_keys(entity,clojure.set.union.cljs$core$IFn$_invoke$arity$2(subform_keys,fields));
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965),entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833),fields,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),pristine_state,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705),(function (){var or__4120__auto__ = subform_classmap;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
var cfg_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","forms-by-ident","com.fulcrologic.fulcro.algorithms.form-state/forms-by-ident",827952006),com.fulcrologic.fulcro.algorithms.form_state.form_id(entity_ident)], null);
return cljs.core.assoc_in(cljs.core.assoc_in(state_map,cfg_ident,config),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854)),cfg_ident);
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (smap,subform_key){
var subform_class = (function (){var G__63415 = subform_classmap;
var G__63415__$1 = (((G__63415 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__63415,subform_key));
var G__63415__$2 = (((G__63415__$1 == null))?null:cljs.core.meta(G__63415__$1));
if((G__63415__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__63415__$2);
}
})();
var subform_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,subform_key);
try{if(cljs.core.truth_((function (){var and__4109__auto__ = subform_class;
if(cljs.core.truth_(and__4109__auto__)){
var and__4109__auto____$1 = subform_target;
if(cljs.core.truth_(and__4109__auto____$1)){
return cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,subform_target);
} else {
return and__4109__auto____$1;
}
} else {
return and__4109__auto__;
}
})())){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,subform_ident){
return (com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3(s,subform_class,subform_ident) : com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.call(null,s,subform_class,subform_ident));
}),smap,subform_target);
} else {
if(cljs.core.truth_((function (){var and__4109__auto__ = subform_class;
if(cljs.core.truth_(and__4109__auto__)){
return edn_query_language.core.ident_QMARK_(subform_target);
} else {
return and__4109__auto__;
}
})())){
return (com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3(smap,subform_class,subform_target) : com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.call(null,smap,subform_class,subform_target));
} else {
return smap;

}
}
}catch (e63419){var e = e63419;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Subform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(subform_class))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.component_name(class$))," failed to initialize."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested-exception","nested-exception",162394239),e], null));
}}),updated_state_map,subform_keys);
});
/**
 * Get the instances of the immediate subforms that are joined into the given entity by
 * subform-join-keys (works with to-one and to-many).
 * 
 * - `entity` - a denormalized (UI) entity.
 * - `subform-join-keys` - The keys of the subforms of this entity, as a set.
 * 
 * Returns a sequence of those entities (all denormalized).
 */
com.fulcrologic.fulcro.algorithms.form_state.immediate_subforms = (function com$fulcrologic$fulcro$algorithms$form_state$immediate_subforms(entity,subform_join_keys){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__63424_SHARP_){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,p1__63424_SHARP_);
if(cljs.core.sequential_QMARK_(v)){
return v;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subform_join_keys], 0)));
});
/**
 * Returns false if and only if the given key has a spec, and the spec is not valid for the value found in the given
 *   map of entity props (e.g. `(s/valid? key (get entity-props key))`).
 * 
 *   Returns true otherwise.
 */
com.fulcrologic.fulcro.algorithms.form_state.no_spec_or_valid_QMARK_ = (function com$fulcrologic$fulcro$algorithms$form_state$no_spec_or_valid_QMARK_(entity_props,key){
return ((cljs.core.not(cljs.spec.alpha.get_spec(key))) || (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity_props,key))));
});
/**
 * Returns a new validity based on the combination of two.
 * 
 *   * :valid :valid = :valid
 *   * :valid :invalid = :invalid
 *   * :valid :unchecked = :unchecked
 *   * :invalid :valid = :invalid
 *   * :invalid :invalid = :invalid
 *   * :invalid :unchecked = :unchecked
 *   * :unchecked :valid = :unchecked
 *   * :unchecked :invalid = :unchecked
 *   * :unchecked :unchecked = :unchecked
 *   
 */
com.fulcrologic.fulcro.algorithms.form_state.merge_validity = (function com$fulcrologic$fulcro$algorithms$form_state$merge_validity(a,b){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","validity","com.fulcrologic.fulcro.algorithms.form-state/validity",-1003224837),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","validity","com.fulcrologic.fulcro.algorithms.form-state/validity",-1003224837),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","validity","com.fulcrologic.fulcro.algorithms.form-state/validity",-1003224837)], null);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unchecked","unchecked",924418378),a)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unchecked","unchecked",924418378),b)))){
return new cljs.core.Keyword(null,"unchecked","unchecked",924418378);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),b)))){
return new cljs.core.Keyword(null,"valid","valid",155614240);
} else {
return new cljs.core.Keyword(null,"invalid","invalid",412869516);

}
}
});
/**
 * Create a form/field validation function using a supplied field checker. The field checker will be given
 *   then entire form (denormalized) and a single field key that is to be checked. It must return
 *   a boolean indicating if that given field is valid.
 * 
 *   During a recursive check for a form, the validation function will be in the correct context (e.g. the form supplied will contain
 *   the field. There is no need to search for it in subforms).
 * 
 *   make-validator returns a dual arity function:
 * 
 *   - `(fn [form] ...)` - Calling this version will return :unchecked, :valid, or :invalid for the entire form.
 *   - `(fn [form field] ...)` - Calling this version will return :unchecked, :valid, or :invalid for the single field.
 * 
 *   Typical usage would be to show messages around the form fields:
 * 
 *   ```
 *   (def field-valid? [form field] true) ; just say everything is valid
 * 
 *   (def my-validator (make-validator field-valid?))
 * 
 *   (defn valid? [form field]
 *   (= :valid (my-validator form field)))
 * 
 *   (defn checked? [form field]
 *   (not= :unchecked (my-validator form field)))
 *   ```
 *   
 */
com.fulcrologic.fulcro.algorithms.form_state.make_validator = (function com$fulcrologic$fulcro$algorithms$form_state$make_validator(field_valid_QMARK_){
return (function() {
var com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_ = null;
var com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___1 = (function (ui_entity_props){
var map__63448 = ui_entity_props;
var map__63448__$1 = (((((!((map__63448 == null))))?(((((map__63448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63448):map__63448);
var map__63449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63448__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var map__63449__$1 = (((((!((map__63449 == null))))?(((((map__63449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63449):map__63449);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63449__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63449__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var immediate_subforms = com.fulcrologic.fulcro.algorithms.form_state.immediate_subforms(ui_entity_props,cljs.core.set(cljs.core.keys(subforms)));
var field_validity = (function (current_validity,k){
return com.fulcrologic.fulcro.algorithms.form_state.merge_validity(current_validity,com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_.cljs$core$IFn$_invoke$arity$2(ui_entity_props,k));
});
var subform_validities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_,immediate_subforms);
var subform_validity = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.algorithms.form_state.merge_validity,new cljs.core.Keyword(null,"valid","valid",155614240),subform_validities);
var this_validity = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(field_validity,new cljs.core.Keyword(null,"valid","valid",155614240),fields);
return com.fulcrologic.fulcro.algorithms.form_state.merge_validity(this_validity,subform_validity);
});
var com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___2 = (function (ui_entity_props,field){
var map__63437 = ui_entity_props;
var map__63437__$1 = (((((!((map__63437 == null))))?(((((map__63437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63437):map__63437);
var map__63438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63437__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var map__63438__$1 = (((((!((map__63438 == null))))?(((((map__63438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63438):map__63438);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63438__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
var complete_QMARK___$1 = (function (){var or__4120__auto__ = complete_QMARK_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.not((complete_QMARK___$1.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK___$1.cljs$core$IFn$_invoke$arity$1(field) : complete_QMARK___$1.call(null,field)))){
return new cljs.core.Keyword(null,"unchecked","unchecked",924418378);
} else {
if(cljs.core.not((field_valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? field_valid_QMARK_.cljs$core$IFn$_invoke$arity$2(ui_entity_props,field) : field_valid_QMARK_.call(null,ui_entity_props,field)))){
return new cljs.core.Keyword(null,"invalid","invalid",412869516);
} else {
return new cljs.core.Keyword(null,"valid","valid",155614240);

}
}
});
com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_ = function(ui_entity_props,field){
switch(arguments.length){
case 1:
return com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___1.call(this,ui_entity_props);
case 2:
return com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___2.call(this,ui_entity_props,field);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___1;
com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR___2;
return com$fulcrologic$fulcro$algorithms$form_state$make_validator_$_custom_get_validity_STAR_;
})()
});
var spec_validator_63713 = com.fulcrologic.fulcro.algorithms.form_state.make_validator(com.fulcrologic.fulcro.algorithms.form_state.no_spec_or_valid_QMARK_);
/**
 * Get the validity (:valid :invalid or :unchecked) for the given form/field using Clojure specs of the field keys.
 * 
 *  - `ui-entity-props` : A denormalized (UI) entity, which can have subforms.
 *  - `field` : Optional. Returns the validity of just the single field on the top-level form.
 * 
 *  Returns `:invalid` if all of the fields have been interacted with, and *any* are invalid.
 * 
 *  Returns `:unchecked` if any field is not yet been interacted with.
 * 
 *  Fields are marked as having been interacted with by programmatic action on your part via
 *  the validate* mutation helper can be used in a mutation to mark fields ready for validation.
 * 
 *  If given a field then it checks just that field.
 */
com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity = (function com$fulcrologic$fulcro$algorithms$form_state$get_spec_validity(var_args){
var G__63461 = arguments.length;
switch (G__63461) {
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$1 = (function (form){
return spec_validator_63713(form);
}));

(com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$2 = (function (form,field){
return spec_validator_63713(form,field);
}));

(com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the given field (or the entire denormalized (UI) form recursively) is :valid
 *   according to clojure specs. Returns false if unchecked or invalid. Use `checked-spec?` or `get-spec-validity`
 *   for better detail.
 */
com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_ = (function com$fulcrologic$fulcro$algorithms$form_state$valid_spec_QMARK_(var_args){
var G__63472 = arguments.length;
switch (G__63472) {
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ui_form){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$1(ui_form));
}));

(com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ui_form,field){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$2(ui_form,field));
}));

(com.fulcrologic.fulcro.algorithms.form_state.valid_spec_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the given field (or any field if only a form is given) in the denormalized (UI) form is :invalid
 *   (recursively) according to clojure specs. Returns false if the field is marked unchecked. Use `checked-spec?` or
 *   `get-spec-validity` for better detail.
 */
com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_ = (function com$fulcrologic$fulcro$algorithms$form_state$invalid_spec_QMARK_(var_args){
var G__63475 = arguments.length;
switch (G__63475) {
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ui_form){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$1(ui_form));
}));

(com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ui_form,field){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),com.fulcrologic.fulcro.algorithms.form_state.get_spec_validity.cljs$core$IFn$_invoke$arity$2(ui_form,field));
}));

(com.fulcrologic.fulcro.algorithms.form_state.invalid_spec_QMARK_.cljs$lang$maxFixedArity = 2);

var do_not_care_63723 = cljs.core.constantly(true);
var carefree_validator_63724 = com.fulcrologic.fulcro.algorithms.form_state.make_validator(do_not_care_63723);
/**
 * Returns true if the field (or entire denormalized (UI) form) is ready to be checked for validation.
 *  Until this returns true validators will simply return :unchecked for a form/field.
 */
com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_ = (function com$fulcrologic$fulcro$algorithms$form_state$checked_QMARK_(var_args){
var G__63482 = arguments.length;
switch (G__63482) {
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ui_form){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unchecked","unchecked",924418378),carefree_validator_63724(ui_form));
}));

(com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ui_form,field){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unchecked","unchecked",924418378),carefree_validator_63724(ui_form,field));
}));

(com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Get the idents of the immediate subforms that are joined into entity by
 * subform-join-keys (works with to-one and to-many). Entity is a NORMALIZED entity from the state map.
 * 
 * Returns a sequence of those idents.
 */
com.fulcrologic.fulcro.algorithms.form_state.immediate_subform_idents = (function com$fulcrologic$fulcro$algorithms$form_state$immediate_subform_idents(entity,subform_join_keys){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function com$fulcrologic$fulcro$algorithms$form_state$immediate_subform_idents_$_immediate_subform_idents_step(k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,k);
var result = ((((cljs.core.sequential_QMARK_(v)) && (cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,v))))?v:((edn_query_language.core.ident_QMARK_(v))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null):cljs.core.PersistentVector.EMPTY
));
return result;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subform_join_keys], 0)));
});
/**
 * Recursively update a form and its subforms. This function works against the state database (normalized state).
 * 
 *   `state-map` : The application state map
 *   `xform` : A function (fn [entity form-config] [entity' form-config']) that is passed the normalized entity and form-config,
 *  and must return an updated version of them.
 *   `starting-entity-ident` : An ident in the state map of an entity that has been initialized as a form.
 * 
 *   Returns the updated state map.
 */
com.fulcrologic.fulcro.algorithms.form_state.update_forms = (function com$fulcrologic$fulcro$algorithms$form_state$update_forms(state_map,xform,starting_entity_ident){
var entity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,starting_entity_ident);
var config_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,config_ident);
var map__63492 = config;
var map__63492__$1 = (((((!((map__63492 == null))))?(((((map__63492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63492):map__63492);
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63492__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var vec__63493 = (xform.cljs$core$IFn$_invoke$arity$2 ? xform.cljs$core$IFn$_invoke$arity$2(entity,config) : xform.call(null,entity,config));
var updated_entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63493,(0),null);
var updated_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63493,(1),null);
var subform_idents = com.fulcrologic.fulcro.algorithms.form_state.immediate_subform_idents(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,starting_entity_ident),cljs.core.set(cljs.core.keys(subforms)));
var sm = state_map;
var sm__$1 = cljs.core.assoc_in(sm,starting_entity_ident,updated_entity);
var sm__$2 = cljs.core.assoc_in(sm__$1,config_ident,updated_config);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,id){
return (com.fulcrologic.fulcro.algorithms.form_state.update_forms.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.algorithms.form_state.update_forms.cljs$core$IFn$_invoke$arity$3(s,xform,id) : com.fulcrologic.fulcro.algorithms.form_state.update_forms.call(null,s,xform,id));
}),sm__$2,subform_idents);
});
/**
 * Obtains all of the dirty fields for the given (denormalized) ui-entity, recursively. This works against UI props
 *   because submission mutations should close over the data as parameters to a mutation. In other words, your form
 *   submission to a server should be triggered from UI with the output of this function as parameters:
 * 
 *   ```
 *   (dom/input { :onClick #(comp/transact! this `[(some-submit-function {:diff ~(f/dirty-fields props true)})]) })
 *   ```
 * 
 *   - `ui-entity` - The entity (denormalized) from the UI.
 *   - `as-delta?` - If false, each field's reported (new) value will just be the new value. When true, each value will be a map with :before and :after keys
 *   with the old and new values (useful for optimistic transaction semantics).
 * 
 *   Returns a map keyed by form ID (for each form/subform) whose values are maps of key/value pairs of
 *   changes. Fields from entities that have a temporary IDs will always be included.
 * 
 *   In other words, a change that happened for an entity with ident `entity-ident` on field `:field`:
 * 
 *   With `as-delta?` true:
 * 
 *   ```
 *   {entity-ident {:field {:before 1 :after 2}}}
 *   ```
 * 
 *   with `as-delta?` false:
 * 
 *   ```
 *   {entity-ident {:field 2}}
 *   ```
 * 
 *   If ui-entity has tempid in ident or has `:new-entity? true` in opts map, then all fields for that form will be
 *   included in result regardless of pristine state.
 *   
 */
com.fulcrologic.fulcro.algorithms.form_state.dirty_fields = (function com$fulcrologic$fulcro$algorithms$form_state$dirty_fields(var_args){
var G__63512 = arguments.length;
switch (G__63512) {
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2 = (function (ui_entity,as_delta_QMARK_){
return com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$3(ui_entity,as_delta_QMARK_,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$3 = (function (ui_entity,as_delta_QMARK_,p__63515){
var map__63516 = p__63515;
var map__63516__$1 = (((((!((map__63516 == null))))?(((((map__63516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63516):map__63516);
var opts = map__63516__$1;
var new_entity_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63516__$1,new cljs.core.Keyword(null,"new-entity?","new-entity?",-10736379));
var map__63523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var map__63523__$1 = (((((!((map__63523 == null))))?(((((map__63523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63523):map__63523);
var config = map__63523__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63523__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63523__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63523__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63523__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var subform_keys = cljs.core.set(cljs.core.keys(subforms));
var subform_ident = (function (k,entity){
var G__63528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subforms,k);
var G__63528__$1 = (((G__63528 == null))?null:cljs.core.meta(G__63528));
var G__63528__$2 = (((G__63528__$1 == null))?null:new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__63528__$1));
if((G__63528__$2 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__63528__$2,entity);
}
});
var new_entity_QMARK___$1 = (function (){var or__4120__auto__ = new_entity_QMARK_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(cljs.core.second(id));
}
})();
var delta = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pristine_state,k);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity,k);
if(cljs.core.truth_((function (){var or__4120__auto__ = new_entity_QMARK___$1;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(before,after);
}
})())){
if(cljs.core.truth_(as_delta_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,after], null);
}
} else {
return null;
}
}),fields));
var delta_with_refs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(delta,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity,k);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui_entity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),k], null));
var current_value = ((cljs.core.map_QMARK_(items))?subform_ident(k,items):((cljs.core.vector_QMARK_(items))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63504_SHARP_){
return subform_ident(k,p1__63504_SHARP_);
}),items):items
));
var has_tempids_QMARK_ = ((cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,current_value))?cljs.core.some((function (p1__63505_SHARP_){
return com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(cljs.core.second(p1__63505_SHARP_));
}),current_value):com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(cljs.core.second(current_value)));
if(cljs.core.truth_((function (){var or__4120__auto__ = new_entity_QMARK___$1;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var or__4120__auto____$1 = has_tempids_QMARK_;
if(cljs.core.truth_(or__4120__auto____$1)){
return or__4120__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_value,current_value);
}
}
})())){
if(cljs.core.truth_(as_delta_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),old_value,new cljs.core.Keyword(null,"after","after",594996914),current_value], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,current_value], null);
}
} else {
return null;
}
}),subform_keys));
var local_dirty_fields = ((cljs.core.empty_QMARK_(delta_with_refs))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.createAsIfByAssoc([id,delta_with_refs]));
var complete_delta = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (dirty_fields_so_far,subform_join_field){
var subform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity,subform_join_field);
if(cljs.core.vector_QMARK_(subform)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d,com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$3(f,as_delta_QMARK_,opts)], 0));
}),dirty_fields_so_far,subform);
} else {
if(cljs.core.map_QMARK_(subform)){
var dirty_subform_fields = com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$3(subform,as_delta_QMARK_,opts);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dirty_fields_so_far,dirty_subform_fields], 0));
} else {
return dirty_fields_so_far;

}
}
}),local_dirty_fields,subform_keys);
return complete_delta;
}));

(com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if the given ui-entity-props that are configured as a form differ from the pristine version.
 *   Recursively follows subforms if given no field. Returns true if anything doesn't match up.
 * 
 *   If given a field, it only checks that field.
 */
com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_ = (function com$fulcrologic$fulcro$algorithms$form_state$dirty_QMARK_(var_args){
var G__63543 = arguments.length;
switch (G__63543) {
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ui_entity_props,field){
var map__63544 = ui_entity_props;
var map__63544__$1 = (((((!((map__63544 == null))))?(((((map__63544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63544):map__63544);
var map__63545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63544__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var map__63545__$1 = (((((!((map__63545 == null))))?(((((map__63545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63545):map__63545);
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63545__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_entity_props,field);
var original = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pristine_state,field);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current,original);
}));

(com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ui_entity_props){
return cljs.core.boolean$(cljs.core.seq(com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2(ui_entity_props,false)));
}));

(com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Mark the fields incomplete so that validation checks will no longer return values. This function works on an app state database
 *   map (not atom) and is meant to be composed into mutations. See the `mark-incomplete!` mutation if you do not need to combine
 *   this with other operations.
 * 
 *   Follows the subforms recursively through state, unless a specific field is given.
 */
com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$clear_complete_STAR_(var_args){
var G__63556 = arguments.length;
switch (G__63556) {
case 3:
return com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (state_map,entity_ident,field){
var form_config_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var form_config_path__$1 = ((edn_query_language.core.ident_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_config_path)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_config_path):(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.form-state",null,485,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["FORM NOT NORMALIZED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_ident)].join('')], null);
}),null)),null,937862731);

return form_config_path;
})()
);
var complete_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_config_path__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state_map,complete_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),field);
}));

(com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (state_map,entity_ident){
return com.fulcrologic.fulcro.algorithms.form_state.update_forms(state_map,(function com$fulcrologic$fulcro$algorithms$form_state$mark_STAR__step(e,form_config){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_config,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),cljs.core.PersistentHashSet.EMPTY)], null);
}),entity_ident);
}));

(com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Mark the fields complete so that validation checks will return values. This function works on a app state database
 *   map (not atom) and is meant to be composed into mutations. See the `mark-complete!` mutation if you do not need to combine
 *   this with other operations.
 * 
 *   Follows the subforms recursively through state, unless a specific field is given.
 */
com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$mark_complete_STAR_(var_args){
var G__63569 = arguments.length;
switch (G__63569) {
case 3:
return com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (state_map,entity_ident,field){
var form_config_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entity_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854));
var form_config_path__$1 = ((edn_query_language.core.ident_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_config_path)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_config_path):(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.form-state",null,506,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["FORM NOT NORMALIZED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(entity_ident)].join('')], null);
}),null)),null,6098378);

return form_config_path;
})()
);
var complete_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_config_path__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state_map,complete_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),field);
}));

(com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (state_map,entity_ident){
return com.fulcrologic.fulcro.algorithms.form_state.update_forms(state_map,(function com$fulcrologic$fulcro$algorithms$form_state$mark_STAR__step(e,form_config){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_config,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833).cljs$core$IFn$_invoke$arity$1(form_config))], null);
}),entity_ident);
}));

(com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Removes copies of entities used by form-state logic.
 */
com.fulcrologic.fulcro.algorithms.form_state.delete_form_state_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$delete_form_state_STAR_(state_map,entity_ident_or_idents){
var entity_idents = ((edn_query_language.core.ident_QMARK_(entity_ident_or_idents))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_ident_or_idents], null):entity_ident_or_idents);
var ks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__63580){
var vec__63581 = p__63580;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63581,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63581,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),t,new cljs.core.Keyword(null,"row","row",-570139521),r], null);
}),entity_idents);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","forms-by-ident","com.fulcrologic.fulcro.algorithms.form-state/forms-by-ident",827952006),(function (s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,s,ks);
}));
});
/**
 * Copy the pristine state over top of the originating entity of the given form. Meant to be used inside of a
 *   mutation. Recursively follows subforms in app state. Returns the new app state map.
 * 
 *   state-map - The normalized state database (map, not atom)
 *   entity-ident - The ident of the entity that you wish to restore to its original pristine state.
 * 
 *   Only affects declared fields and sub-forms.
 */
com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$pristine__GT_entity_STAR_(state_map,entity_ident){
return com.fulcrologic.fulcro.algorithms.form_state.update_forms(state_map,(function com$fulcrologic$fulcro$algorithms$form_state$pristine__GT_entity_STAR__$_reset_form_step(e,p__63590){
var map__63591 = p__63590;
var map__63591__$1 = (((((!((map__63591 == null))))?(((((map__63591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63591):map__63591);
var config = map__63591__$1;
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63591__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,pristine_state], 0)),config], null);
}),entity_ident);
});
/**
 * Overwrite the pristine state (form state's copy) of the entity. This is meant to be used from a mutation
 *   to update the form state tracking recursively to make the form as 'unmodified'. That is to say, as if you
 *   committed the values to the server, and the current entity state is now the pristine state.
 * 
 *   This function does no sanity checks, so you should ensure the entity is valid!
 * 
 *   Recursively updates all sub forms.
 * 
 *   Returns the updated state-map (database).
 */
com.fulcrologic.fulcro.algorithms.form_state.entity__GT_pristine_STAR_ = (function com$fulcrologic$fulcro$algorithms$form_state$entity__GT_pristine_STAR_(state_map,entity_ident){
return com.fulcrologic.fulcro.algorithms.form_state.update_forms(state_map,(function com$fulcrologic$fulcro$algorithms$form_state$entity__GT_pristine_STAR__$_commit_form_step(e,p__63598){
var map__63599 = p__63598;
var map__63599__$1 = (((((!((map__63599 == null))))?(((((map__63599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63599):map__63599);
var config = map__63599__$1;
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63599__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63599__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var subform_keys = cljs.core.set(cljs.core.keys(subforms));
var new_pristine_state = cljs.core.select_keys(e,clojure.set.union.cljs$core$IFn$_invoke$arity$2(subform_keys,fields));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282),new_pristine_state)], null);
}),entity_ident);
});
/**
 * Mutation: Reset the form (recursively) to its (last recorded) pristine state. If form ident is not supplied it uses the ident
 * of the calling component. See `pristine->entity*` for a function you can compose into your own mutations.
 */
com.fulcrologic.fulcro.algorithms.form_state.reset_form_BANG_ = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","reset-form!","com.fulcrologic.fulcro.algorithms.form-state/reset-form!",-1216636000,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","reset-form!","com.fulcrologic.fulcro.algorithms.form-state/reset-form!",-1216636000,null),(function (fulcro_mutation_env_symbol){
var map__63606 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__63606__$1 = (((((!((map__63606 == null))))?(((((map__63606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63606):map__63606);
var form_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63606__$1,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$algorithms$form_state$action(p__63613){
var map__63614 = p__63613;
var map__63614__$1 = (((((!((map__63614 == null))))?(((((map__63614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63614):map__63614);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63614__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63614__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,(function (){var or__4120__auto__ = form_ident;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return ref;
}
})());

return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
})], null);
}));
/**
 * Mutation: Mark a given form (recursively) or field complete.
 * 
 *   entity-ident - The ident of the entity to mark complete. This is optional, but if not supplied it will derive it from
 *               the ident of the invoking component.
 *   field - (optional) limit the marking to a single field.
 * 
 *   See `mark-complete*` for a function you can compose into your own mutations.
 */
com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_ = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","mark-complete!","com.fulcrologic.fulcro.algorithms.form-state/mark-complete!",1441268369,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","mark-complete!","com.fulcrologic.fulcro.algorithms.form-state/mark-complete!",1441268369,null),(function (fulcro_mutation_env_symbol){
var map__63620 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__63620__$1 = (((((!((map__63620 == null))))?(((((map__63620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63620):map__63620);
var entity_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63620__$1,new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63620__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$algorithms$form_state$action(p__63627){
var map__63628 = p__63627;
var map__63628__$1 = (((((!((map__63628 == null))))?(((((map__63628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63628):map__63628);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63628__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63628__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var entity_ident_63796__$1 = (function (){var or__4120__auto__ = entity_ident;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return ref;
}
})();
if(cljs.core.truth_(field)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,entity_ident_63796__$1,field);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,entity_ident_63796__$1);
}

return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
})], null);
}));
/**
 * Mutation: Mark a given form (recursively) or field incomplete.
 * 
 *   entity-ident - The ident of the entity to mark. This is optional, but if not supplied it will derive it from
 *               the ident of the invoking component.
 *   field - (optional) limit the marking to a single field.
 * 
 *   See `clear-complete*` for a function you can compose into your own mutations.
 */
com.fulcrologic.fulcro.algorithms.form_state.clear_complete_BANG_ = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","clear-complete!","com.fulcrologic.fulcro.algorithms.form-state/clear-complete!",-143538490,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.form-state","clear-complete!","com.fulcrologic.fulcro.algorithms.form-state/clear-complete!",-143538490,null),(function (fulcro_mutation_env_symbol){
var map__63638 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__63638__$1 = (((((!((map__63638 == null))))?(((((map__63638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63638):map__63638);
var entity_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$algorithms$form_state$action(p__63640){
var map__63641 = p__63640;
var map__63641__$1 = (((((!((map__63641 == null))))?(((((map__63641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63641):map__63641);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63641__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63641__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var entity_ident_63799__$1 = (function (){var or__4120__auto__ = entity_ident;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return ref;
}
})();
if(cljs.core.truth_(field)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_,entity_ident_63799__$1,field);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.form_state.clear_complete_STAR_,entity_ident_63799__$1);
}

return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
})], null);
}));

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.form_state.js.map
