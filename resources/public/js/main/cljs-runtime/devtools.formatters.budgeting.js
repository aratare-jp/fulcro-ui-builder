goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__41849__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41849__auto__["add"]).call(o__41849__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__41849__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41849__auto__["delete"]).call(o__41849__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__41849__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41849__auto__["has"]).call(o__41849__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__46593 = data;
var target__41880__auto__ = G__46593;
if(cljs.core.truth_(target__41880__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46593)].join(''),"\n","target__41880__auto__"].join('')));
}

(target__41880__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__46593;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_46656 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_46656);
} else {
var seq__46595_46657 = cljs.core.seq(json_ml);
var chunk__46596_46658 = null;
var count__46597_46659 = (0);
var i__46598_46660 = (0);
while(true){
if((i__46598_46660 < count__46597_46659)){
var item_46661 = chunk__46596_46658.cljs$core$IIndexed$_nth$arity$2(null,i__46598_46660);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_46661,new_depth_budget_46656) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_46661,new_depth_budget_46656));


var G__46664 = seq__46595_46657;
var G__46665 = chunk__46596_46658;
var G__46666 = count__46597_46659;
var G__46667 = (i__46598_46660 + (1));
seq__46595_46657 = G__46664;
chunk__46596_46658 = G__46665;
count__46597_46659 = G__46666;
i__46598_46660 = G__46667;
continue;
} else {
var temp__5735__auto___46668 = cljs.core.seq(seq__46595_46657);
if(temp__5735__auto___46668){
var seq__46595_46669__$1 = temp__5735__auto___46668;
if(cljs.core.chunked_seq_QMARK_(seq__46595_46669__$1)){
var c__4550__auto___46672 = cljs.core.chunk_first(seq__46595_46669__$1);
var G__46673 = cljs.core.chunk_rest(seq__46595_46669__$1);
var G__46674 = c__4550__auto___46672;
var G__46675 = cljs.core.count(c__4550__auto___46672);
var G__46676 = (0);
seq__46595_46657 = G__46673;
chunk__46596_46658 = G__46674;
count__46597_46659 = G__46675;
i__46598_46660 = G__46676;
continue;
} else {
var item_46679 = cljs.core.first(seq__46595_46669__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_46679,new_depth_budget_46656) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_46679,new_depth_budget_46656));


var G__46680 = cljs.core.next(seq__46595_46669__$1);
var G__46681 = null;
var G__46682 = (0);
var G__46683 = (0);
seq__46595_46657 = G__46680;
chunk__46596_46658 = G__46681;
count__46597_46659 = G__46682;
i__46598_46660 = G__46683;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5733__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5733__auto__)){
var initial_hierarchy_depth_budget = temp__5733__auto__;
var remaining_depth_budget = (function (){var or__4120__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
