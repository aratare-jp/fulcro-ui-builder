goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4109__auto__ = c;
if(cljs.core.truth_(and__4109__auto__)){
return ident;
} else {
return and__4109__auto__;
}
})())){
var map__47681 = app__$1;
var map__47681__$1 = (((((!((map__47681 == null))))?(((((map__47681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47681):map__47681);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47681__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
}),null)),null,-744238750);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-1359711598);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__47685 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__47686 = null;
var count__47687 = (0);
var i__47688 = (0);
while(true){
if((i__47688 < count__47687)){
var c = chunk__47686.cljs$core$IIndexed$_nth$arity$2(null,i__47688);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__47935 = seq__47685;
var G__47936 = chunk__47686;
var G__47937 = count__47687;
var G__47938 = (i__47688 + (1));
seq__47685 = G__47935;
chunk__47686 = G__47936;
count__47687 = G__47937;
i__47688 = G__47938;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47685);
if(temp__5735__auto__){
var seq__47685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47685__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47685__$1);
var G__47939 = cljs.core.chunk_rest(seq__47685__$1);
var G__47940 = c__4550__auto__;
var G__47941 = cljs.core.count(c__4550__auto__);
var G__47942 = (0);
seq__47685 = G__47939;
chunk__47686 = G__47940;
count__47687 = G__47941;
i__47688 = G__47942;
continue;
} else {
var c = cljs.core.first(seq__47685__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__47943 = cljs.core.next(seq__47685__$1);
var G__47944 = null;
var G__47945 = (0);
var G__47946 = (0);
seq__47685 = G__47943;
chunk__47686 = G__47944;
count__47687 = G__47945;
i__47688 = G__47946;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__47695 = app__$1;
var map__47695__$1 = (((((!((map__47695 == null))))?(((((map__47695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47695):map__47695);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47695__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__47696 = cljs.core.deref(runtime_atom);
var map__47696__$1 = (((((!((map__47696 == null))))?(((((map__47696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47696):map__47696);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47696__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__47697 = indexes;
var map__47697__$1 = (((((!((map__47697 == null))))?(((((map__47697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47697):map__47697);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47697__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47697__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47697__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4120__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__47701 = cljs.core.seq(classes);
var chunk__47702 = null;
var count__47703 = (0);
var i__47704 = (0);
while(true){
if((i__47704 < count__47703)){
var class$ = chunk__47702.cljs$core$IIndexed$_nth$arity$2(null,i__47704);
var seq__47751_47957 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__47753_47958 = null;
var count__47754_47959 = (0);
var i__47755_47960 = (0);
while(true){
if((i__47755_47960 < count__47754_47959)){
var component_47963 = chunk__47753_47958.cljs$core$IIndexed$_nth$arity$2(null,i__47755_47960);
var component_ident_47964 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_47963);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_47964,component_47963);


var G__47965 = seq__47751_47957;
var G__47966 = chunk__47753_47958;
var G__47967 = count__47754_47959;
var G__47968 = (i__47755_47960 + (1));
seq__47751_47957 = G__47965;
chunk__47753_47958 = G__47966;
count__47754_47959 = G__47967;
i__47755_47960 = G__47968;
continue;
} else {
var temp__5735__auto___47970 = cljs.core.seq(seq__47751_47957);
if(temp__5735__auto___47970){
var seq__47751_47971__$1 = temp__5735__auto___47970;
if(cljs.core.chunked_seq_QMARK_(seq__47751_47971__$1)){
var c__4550__auto___47972 = cljs.core.chunk_first(seq__47751_47971__$1);
var G__47974 = cljs.core.chunk_rest(seq__47751_47971__$1);
var G__47975 = c__4550__auto___47972;
var G__47976 = cljs.core.count(c__4550__auto___47972);
var G__47977 = (0);
seq__47751_47957 = G__47974;
chunk__47753_47958 = G__47975;
count__47754_47959 = G__47976;
i__47755_47960 = G__47977;
continue;
} else {
var component_47979 = cljs.core.first(seq__47751_47971__$1);
var component_ident_47980 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_47979);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_47980,component_47979);


var G__47981 = cljs.core.next(seq__47751_47971__$1);
var G__47982 = null;
var G__47983 = (0);
var G__47984 = (0);
seq__47751_47957 = G__47981;
chunk__47753_47958 = G__47982;
count__47754_47959 = G__47983;
i__47755_47960 = G__47984;
continue;
}
} else {
}
}
break;
}


var G__47987 = seq__47701;
var G__47988 = chunk__47702;
var G__47989 = count__47703;
var G__47990 = (i__47704 + (1));
seq__47701 = G__47987;
chunk__47702 = G__47988;
count__47703 = G__47989;
i__47704 = G__47990;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47701);
if(temp__5735__auto__){
var seq__47701__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47701__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47701__$1);
var G__47993 = cljs.core.chunk_rest(seq__47701__$1);
var G__47994 = c__4550__auto__;
var G__47995 = cljs.core.count(c__4550__auto__);
var G__47996 = (0);
seq__47701 = G__47993;
chunk__47702 = G__47994;
count__47703 = G__47995;
i__47704 = G__47996;
continue;
} else {
var class$ = cljs.core.first(seq__47701__$1);
var seq__47768_47997 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__47770_47998 = null;
var count__47771_47999 = (0);
var i__47772_48000 = (0);
while(true){
if((i__47772_48000 < count__47771_47999)){
var component_48001 = chunk__47770_47998.cljs$core$IIndexed$_nth$arity$2(null,i__47772_48000);
var component_ident_48002 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_48001);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_48002,component_48001);


var G__48005 = seq__47768_47997;
var G__48006 = chunk__47770_47998;
var G__48007 = count__47771_47999;
var G__48008 = (i__47772_48000 + (1));
seq__47768_47997 = G__48005;
chunk__47770_47998 = G__48006;
count__47771_47999 = G__48007;
i__47772_48000 = G__48008;
continue;
} else {
var temp__5735__auto___48009__$1 = cljs.core.seq(seq__47768_47997);
if(temp__5735__auto___48009__$1){
var seq__47768_48010__$1 = temp__5735__auto___48009__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47768_48010__$1)){
var c__4550__auto___48011 = cljs.core.chunk_first(seq__47768_48010__$1);
var G__48018 = cljs.core.chunk_rest(seq__47768_48010__$1);
var G__48019 = c__4550__auto___48011;
var G__48020 = cljs.core.count(c__4550__auto___48011);
var G__48021 = (0);
seq__47768_47997 = G__48018;
chunk__47770_47998 = G__48019;
count__47771_47999 = G__48020;
i__47772_48000 = G__48021;
continue;
} else {
var component_48022 = cljs.core.first(seq__47768_48010__$1);
var component_ident_48024 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_48022);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_48024,component_48022);


var G__48029 = cljs.core.next(seq__47768_48010__$1);
var G__48030 = null;
var G__48031 = (0);
var G__48032 = (0);
seq__47768_47997 = G__48029;
chunk__47770_47998 = G__48030;
count__47771_47999 = G__48031;
i__47772_48000 = G__48032;
continue;
}
} else {
}
}
break;
}


var G__48033 = cljs.core.next(seq__47701__$1);
var G__48034 = null;
var G__48035 = (0);
var G__48036 = (0);
seq__47701 = G__48033;
chunk__47702 = G__48034;
count__47703 = G__48035;
i__47704 = G__48036;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__47788 = app__$1;
var map__47788__$1 = (((((!((map__47788 == null))))?(((((map__47788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47788):map__47788);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47788__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__47789 = cljs.core.deref(runtime_atom);
var map__47789__$1 = (((((!((map__47789 == null))))?(((((map__47789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47789):map__47789);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47789__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__47790 = indexes;
var map__47790__$1 = (((((!((map__47790 == null))))?(((((map__47790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47790):map__47790);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47790__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47790__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__47785_SHARP_,p2__47786_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__47785_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__47786_SHARP_) : class__GT_components.call(null,p2__47786_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__47805 = app__$1;
var map__47805__$1 = (((((!((map__47805 == null))))?(((((map__47805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47805):map__47805);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47805__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47805__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__47807 = cljs.core.deref(runtime_atom);
var map__47807__$1 = (((((!((map__47807 == null))))?(((((map__47807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47807):map__47807);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47807__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47807__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47807__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47807__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__47808 = indexes;
var map__47808__$1 = (((((!((map__47808 == null))))?(((((map__47808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47808):map__47808);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47808__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47808__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47808__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47808__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__47822 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__47822__$1 = (((((!((map__47822 == null))))?(((((map__47822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47822):map__47822);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47822__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47822__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__47832_48075 = cljs.core.seq(limited_to_render);
var chunk__47834_48076 = null;
var count__47835_48077 = (0);
var i__47836_48078 = (0);
while(true){
if((i__47836_48078 < count__47835_48077)){
var c_48081 = chunk__47834_48076.cljs$core$IIndexed$_nth$arity$2(null,i__47836_48078);
var ident_48082 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_48081);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_48082,c_48081);


var G__48085 = seq__47832_48075;
var G__48086 = chunk__47834_48076;
var G__48087 = count__47835_48077;
var G__48088 = (i__47836_48078 + (1));
seq__47832_48075 = G__48085;
chunk__47834_48076 = G__48086;
count__47835_48077 = G__48087;
i__47836_48078 = G__48088;
continue;
} else {
var temp__5735__auto___48089 = cljs.core.seq(seq__47832_48075);
if(temp__5735__auto___48089){
var seq__47832_48090__$1 = temp__5735__auto___48089;
if(cljs.core.chunked_seq_QMARK_(seq__47832_48090__$1)){
var c__4550__auto___48091 = cljs.core.chunk_first(seq__47832_48090__$1);
var G__48092 = cljs.core.chunk_rest(seq__47832_48090__$1);
var G__48093 = c__4550__auto___48091;
var G__48094 = cljs.core.count(c__4550__auto___48091);
var G__48095 = (0);
seq__47832_48075 = G__48092;
chunk__47834_48076 = G__48093;
count__47835_48077 = G__48094;
i__47836_48078 = G__48095;
continue;
} else {
var c_48098 = cljs.core.first(seq__47832_48090__$1);
var ident_48099 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_48098);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_48099,c_48098);


var G__48103 = cljs.core.next(seq__47832_48090__$1);
var G__48104 = null;
var G__48105 = (0);
var G__48106 = (0);
seq__47832_48075 = G__48103;
chunk__47834_48076 = G__48104;
count__47835_48077 = G__48105;
i__47836_48078 = G__48106;
continue;
}
} else {
}
}
break;
}

var seq__47852 = cljs.core.seq(limited_idents);
var chunk__47853 = null;
var count__47854 = (0);
var i__47855 = (0);
while(true){
if((i__47855 < count__47854)){
var i = chunk__47853.cljs$core$IIndexed$_nth$arity$2(null,i__47855);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__48109 = seq__47852;
var G__48110 = chunk__47853;
var G__48111 = count__47854;
var G__48112 = (i__47855 + (1));
seq__47852 = G__48109;
chunk__47853 = G__48110;
count__47854 = G__48111;
i__47855 = G__48112;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47852);
if(temp__5735__auto__){
var seq__47852__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47852__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47852__$1);
var G__48113 = cljs.core.chunk_rest(seq__47852__$1);
var G__48114 = c__4550__auto__;
var G__48115 = cljs.core.count(c__4550__auto__);
var G__48116 = (0);
seq__47852 = G__48113;
chunk__47853 = G__48114;
count__47854 = G__48115;
i__47855 = G__48116;
continue;
} else {
var i = cljs.core.first(seq__47852__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__48119 = cljs.core.next(seq__47852__$1);
var G__48120 = null;
var G__48121 = (0);
var G__48122 = (0);
seq__47852 = G__48119;
chunk__47853 = G__48120;
count__47854 = G__48121;
i__47855 = G__48122;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4120__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__47874 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__47874__$1 = (((((!((map__47874 == null))))?(((((map__47874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47874):map__47874);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47874__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47874__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__47883_48132 = cljs.core.seq(all_idents);
var chunk__47884_48133 = null;
var count__47885_48134 = (0);
var i__47886_48135 = (0);
while(true){
if((i__47886_48135 < count__47885_48134)){
var i_48136 = chunk__47884_48133.cljs$core$IIndexed$_nth$arity$2(null,i__47886_48135);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_48136);


var G__48139 = seq__47883_48132;
var G__48140 = chunk__47884_48133;
var G__48141 = count__47885_48134;
var G__48142 = (i__47886_48135 + (1));
seq__47883_48132 = G__48139;
chunk__47884_48133 = G__48140;
count__47885_48134 = G__48141;
i__47886_48135 = G__48142;
continue;
} else {
var temp__5735__auto___48144 = cljs.core.seq(seq__47883_48132);
if(temp__5735__auto___48144){
var seq__47883_48146__$1 = temp__5735__auto___48144;
if(cljs.core.chunked_seq_QMARK_(seq__47883_48146__$1)){
var c__4550__auto___48148 = cljs.core.chunk_first(seq__47883_48146__$1);
var G__48149 = cljs.core.chunk_rest(seq__47883_48146__$1);
var G__48150 = c__4550__auto___48148;
var G__48151 = cljs.core.count(c__4550__auto___48148);
var G__48152 = (0);
seq__47883_48132 = G__48149;
chunk__47884_48133 = G__48150;
count__47885_48134 = G__48151;
i__47886_48135 = G__48152;
continue;
} else {
var i_48153 = cljs.core.first(seq__47883_48146__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_48153);


var G__48154 = cljs.core.next(seq__47883_48146__$1);
var G__48155 = null;
var G__48156 = (0);
var G__48157 = (0);
seq__47883_48132 = G__48154;
chunk__47884_48133 = G__48155;
count__47885_48134 = G__48156;
i__47886_48135 = G__48157;
continue;
}
} else {
}
}
break;
}

var seq__47900 = cljs.core.seq(extra_to_force);
var chunk__47901 = null;
var count__47902 = (0);
var i__47903 = (0);
while(true){
if((i__47903 < count__47902)){
var c = chunk__47901.cljs$core$IIndexed$_nth$arity$2(null,i__47903);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__48160 = seq__47900;
var G__48161 = chunk__47901;
var G__48162 = count__47902;
var G__48163 = (i__47903 + (1));
seq__47900 = G__48160;
chunk__47901 = G__48161;
count__47902 = G__48162;
i__47903 = G__48163;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47900);
if(temp__5735__auto__){
var seq__47900__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47900__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47900__$1);
var G__48167 = cljs.core.chunk_rest(seq__47900__$1);
var G__48168 = c__4550__auto__;
var G__48169 = cljs.core.count(c__4550__auto__);
var G__48170 = (0);
seq__47900 = G__48167;
chunk__47901 = G__48168;
count__47902 = G__48169;
i__47903 = G__48170;
continue;
} else {
var c = cljs.core.first(seq__47900__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__48173 = cljs.core.next(seq__47900__$1);
var G__48174 = null;
var G__48175 = (0);
var G__48176 = (0);
seq__47900 = G__48173;
chunk__47901 = G__48174;
count__47902 = G__48175;
i__47903 = G__48176;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__47910 = arguments.length;
switch (G__47910) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__47911){
var map__47912 = p__47911;
var map__47912__$1 = (((((!((map__47912 == null))))?(((((map__47912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47912):map__47912);
var options = map__47912__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47912__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47912__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4120__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e47919){var e = e47919;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,145,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-154024783);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
