goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
/**
 * Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__49546 = arguments.length;
switch (G__49546) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__49552){
var map__49554 = p__49552;
var map__49554__$1 = (((((!((map__49554 == null))))?(((((map__49554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49554):map__49554);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49554__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49554__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__4120__auto__ = app__$1;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var or__4120__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4120__auto____$1)){
return or__4120__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__49557 = app__$2;
var G__49557__$1 = (((G__49557 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__49557));
var G__49557__$2 = (((G__49557__$1 == null))?null:cljs.core.deref(G__49557__$1));
if((G__49557__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__49557__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__4109__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__4109__auto__)){
return (!(initialized_QMARK_));
} else {
return and__4109__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__49560_49704 = app__$2;
var G__49561_49705 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__49560_49704,G__49561_49705) : schedule_render_BANG_.call(null,G__49560_49704,G__49561_49705));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,286530771);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options."], null);
}),null)),null,1575242793);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__49569 = arguments.length;
switch (G__49569) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__49572){
var map__49573 = p__49572;
var map__49573__$1 = (((((!((map__49573 == null))))?(((((map__49573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49573):map__49573);
var options = map__49573__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49573__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__4120__auto__ = app__$1;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var or__4120__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4120__auto____$1)){
return or__4120__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = com.fulcrologic.fulcro.components.class__GT_registry_key(class$);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-289117029);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options."], null);
}),null)),null,1509482717);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__49575 = app__$1;
var G__49575__$1 = (((G__49575 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__49575));
if((G__49575__$1 == null)){
return null;
} else {
return cljs.core.deref(G__49575__$1);
}
})();
var known_roots = (function (){var G__49576 = app__$1;
var G__49576__$1 = (((G__49576 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__49576));
var G__49576__$2 = (((G__49576__$1 == null))?null:cljs.core.deref(G__49576__$1));
if((G__49576__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__49576__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__49577 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__49579 = null;
var count__49580 = (0);
var i__49581 = (0);
while(true){
if((i__49581 < count__49580)){
var k = chunk__49579.cljs$core$IIndexed$_nth$arity$2(null,i__49581);
var cls_49717 = com.fulcrologic.fulcro.components.registry_key__GT_class(k);
var query_49718 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_49717,state_map);
var root_props_49719 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_49718,state_map,state_map);
var seq__49599_49720 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__49600_49721 = null;
var count__49601_49722 = (0);
var i__49602_49723 = (0);
while(true){
if((i__49602_49723 < count__49601_49722)){
var root_49724 = chunk__49600_49721.cljs$core$IIndexed$_nth$arity$2(null,i__49602_49723);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_49724,root_props_49719);


var G__49725 = seq__49599_49720;
var G__49726 = chunk__49600_49721;
var G__49727 = count__49601_49722;
var G__49728 = (i__49602_49723 + (1));
seq__49599_49720 = G__49725;
chunk__49600_49721 = G__49726;
count__49601_49722 = G__49727;
i__49602_49723 = G__49728;
continue;
} else {
var temp__5735__auto___49729 = cljs.core.seq(seq__49599_49720);
if(temp__5735__auto___49729){
var seq__49599_49730__$1 = temp__5735__auto___49729;
if(cljs.core.chunked_seq_QMARK_(seq__49599_49730__$1)){
var c__4550__auto___49735 = cljs.core.chunk_first(seq__49599_49730__$1);
var G__49736 = cljs.core.chunk_rest(seq__49599_49730__$1);
var G__49737 = c__4550__auto___49735;
var G__49738 = cljs.core.count(c__4550__auto___49735);
var G__49739 = (0);
seq__49599_49720 = G__49736;
chunk__49600_49721 = G__49737;
count__49601_49722 = G__49738;
i__49602_49723 = G__49739;
continue;
} else {
var root_49740 = cljs.core.first(seq__49599_49730__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_49740,root_props_49719);


var G__49742 = cljs.core.next(seq__49599_49730__$1);
var G__49743 = null;
var G__49744 = (0);
var G__49745 = (0);
seq__49599_49720 = G__49742;
chunk__49600_49721 = G__49743;
count__49601_49722 = G__49744;
i__49602_49723 = G__49745;
continue;
}
} else {
}
}
break;
}


var G__49747 = seq__49577;
var G__49748 = chunk__49579;
var G__49749 = count__49580;
var G__49750 = (i__49581 + (1));
seq__49577 = G__49747;
chunk__49579 = G__49748;
count__49580 = G__49749;
i__49581 = G__49750;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49577);
if(temp__5735__auto__){
var seq__49577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49577__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49577__$1);
var G__49751 = cljs.core.chunk_rest(seq__49577__$1);
var G__49752 = c__4550__auto__;
var G__49753 = cljs.core.count(c__4550__auto__);
var G__49754 = (0);
seq__49577 = G__49751;
chunk__49579 = G__49752;
count__49580 = G__49753;
i__49581 = G__49754;
continue;
} else {
var k = cljs.core.first(seq__49577__$1);
var cls_49755 = com.fulcrologic.fulcro.components.registry_key__GT_class(k);
var query_49756 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_49755,state_map);
var root_props_49757 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_49756,state_map,state_map);
var seq__49608_49758 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__49609_49759 = null;
var count__49610_49760 = (0);
var i__49611_49761 = (0);
while(true){
if((i__49611_49761 < count__49610_49760)){
var root_49762 = chunk__49609_49759.cljs$core$IIndexed$_nth$arity$2(null,i__49611_49761);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_49762,root_props_49757);


var G__49763 = seq__49608_49758;
var G__49764 = chunk__49609_49759;
var G__49765 = count__49610_49760;
var G__49766 = (i__49611_49761 + (1));
seq__49608_49758 = G__49763;
chunk__49609_49759 = G__49764;
count__49610_49760 = G__49765;
i__49611_49761 = G__49766;
continue;
} else {
var temp__5735__auto___49767__$1 = cljs.core.seq(seq__49608_49758);
if(temp__5735__auto___49767__$1){
var seq__49608_49768__$1 = temp__5735__auto___49767__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49608_49768__$1)){
var c__4550__auto___49769 = cljs.core.chunk_first(seq__49608_49768__$1);
var G__49770 = cljs.core.chunk_rest(seq__49608_49768__$1);
var G__49771 = c__4550__auto___49769;
var G__49772 = cljs.core.count(c__4550__auto___49769);
var G__49773 = (0);
seq__49608_49758 = G__49770;
chunk__49609_49759 = G__49771;
count__49610_49760 = G__49772;
i__49611_49761 = G__49773;
continue;
} else {
var root_49775 = cljs.core.first(seq__49608_49768__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_49775,root_props_49757);


var G__49776 = cljs.core.next(seq__49608_49768__$1);
var G__49777 = null;
var G__49778 = (0);
var G__49779 = (0);
seq__49608_49758 = G__49776;
chunk__49609_49759 = G__49777;
count__49610_49760 = G__49778;
i__49611_49761 = G__49779;
continue;
}
} else {
}
}
break;
}


var G__49780 = cljs.core.next(seq__49577__$1);
var G__49781 = null;
var G__49782 = (0);
var G__49783 = (0);
seq__49577 = G__49780;
chunk__49579 = G__49781;
count__49580 = G__49782;
i__49581 = G__49783;
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
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__49619 = app__$1;
var map__49619__$1 = (((((!((map__49619 == null))))?(((((map__49619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49619):map__49619);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49619__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__49620 = cljs.core.deref(runtime_atom);
var map__49620__$1 = (((((!((map__49620 == null))))?(((((map__49620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49620):map__49620);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49620__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__49628 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__49628__$1 = (((((!((map__49628 == null))))?(((((map__49628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49628):map__49628);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628__$1,true);
var seq__49630 = cljs.core.seq(limited_idents);
var chunk__49631 = null;
var count__49632 = (0);
var i__49633 = (0);
while(true){
if((i__49633 < count__49632)){
var i = chunk__49631.cljs$core$IIndexed$_nth$arity$2(null,i__49633);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__49786 = seq__49630;
var G__49787 = chunk__49631;
var G__49788 = count__49632;
var G__49789 = (i__49633 + (1));
seq__49630 = G__49786;
chunk__49631 = G__49787;
count__49632 = G__49788;
i__49633 = G__49789;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49630);
if(temp__5735__auto__){
var seq__49630__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49630__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49630__$1);
var G__49790 = cljs.core.chunk_rest(seq__49630__$1);
var G__49791 = c__4550__auto__;
var G__49792 = cljs.core.count(c__4550__auto__);
var G__49793 = (0);
seq__49630 = G__49790;
chunk__49631 = G__49791;
count__49632 = G__49792;
i__49633 = G__49793;
continue;
} else {
var i = cljs.core.first(seq__49630__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__49794 = cljs.core.next(seq__49630__$1);
var G__49795 = null;
var G__49796 = (0);
var G__49797 = (0);
seq__49630 = G__49794;
chunk__49631 = G__49795;
count__49632 = G__49796;
i__49633 = G__49797;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 *   This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 *   (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 *   will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 *   ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 *   events that should really only affect a known set of components (like the input field).
 * 
 *   This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__49641 = arguments.length;
switch (G__49641) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__49645){
var map__49646 = p__49645;
var map__49646__$1 = (((((!((map__49646 == null))))?(((((map__49646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49646):map__49646);
var options = map__49646__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4120__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e49650){var e = e49650;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1879768834);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
goog.object.extend(cls.prototype,React.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__49515__auto__ = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return fulcro_app;
}
})();
var d__49516__auto__ = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (0);
}
})();
var _STAR_app_STAR__orig_val__49657 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__49658 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_depth_STAR__orig_val__49659 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_app_STAR__temp_val__49660 = app__49515__auto__;
var _STAR_shared_STAR__temp_val__49661 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__49515__auto__);
var _STAR_depth_STAR__temp_val__49662 = d__49516__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__49660);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49661);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49662);

try{var _STAR_denormalize_time_STAR__orig_val__49663 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__49664 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(fulcro_app)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__49664);

try{var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(UIRoot);
var state_map = (function (){var G__49666 = fulcro_app;
var G__49666__$1 = (((G__49666 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__49666));
if((G__49666__$1 == null)){
return null;
} else {
return cljs.core.deref(G__49666__$1);
}
})();
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__49670 = props;
var G__49671 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__49670,G__49671) : ui_root.call(null,G__49670,G__49671));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__49663);
}}finally {(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49659);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49658);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__49657);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__49674 = arguments.length;
switch (G__49674) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var _STAR_denormalize_time_STAR__orig_val__49682 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__49683 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__49683);

try{var state_map = (function (){var G__49686 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__49686__$1 = (((G__49686 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__49686));
if((G__49686__$1 == null)){
return null;
} else {
return cljs.core.deref(G__49686__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__49688 = (function (){var or__4120__auto__ = props;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__49689 = com.fulcrologic.fulcro.components.props(this$);
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__49688,G__49689) : ui_factory.call(null,G__49688,G__49689));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__49682);
}});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
