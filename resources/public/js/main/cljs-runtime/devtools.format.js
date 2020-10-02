goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_42682 = (function (value){
var x__4422__auto__ = (((value == null))?null:value);
var m__4423__auto__ = (devtools.format._header[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4423__auto__.call(null,value));
} else {
var m__4420__auto__ = (devtools.format._header["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4420__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_42682(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_42690 = (function (value){
var x__4422__auto__ = (((value == null))?null:value);
var m__4423__auto__ = (devtools.format._has_body[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4423__auto__.call(null,value));
} else {
var m__4420__auto__ = (devtools.format._has_body["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4420__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_42690(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_42700 = (function (value){
var x__4422__auto__ = (((value == null))?null:value);
var m__4423__auto__ = (devtools.format._body[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4423__auto__.call(null,value));
} else {
var m__4420__auto__ = (devtools.format._body["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4420__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_42700(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o42439 = temp__5733__auto__;
var temp__5733__auto____$1 = (o42439["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o42440 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o42440["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o42441 = temp__5733__auto____$2;
return (o42441["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o42461 = temp__5733__auto__;
var temp__5733__auto____$1 = (o42461["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o42462 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o42462["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o42463 = temp__5733__auto____$2;
return (o42463["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o42474 = temp__5733__auto__;
var temp__5733__auto____$1 = (o42474["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o42475 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o42475["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o42476 = temp__5733__auto____$2;
return (o42476["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o42483 = temp__5733__auto__;
var temp__5733__auto____$1 = (o42483["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o42484 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o42484["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o42485 = temp__5733__auto____$2;
return (o42485["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o42492 = temp__5733__auto__;
var temp__5733__auto____$1 = (o42492["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o42493 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o42493["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o42494 = temp__5733__auto____$2;
return (o42494["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o42499 = temp__5733__auto__;
var temp__5733__auto____$1 = (o42499["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o42500 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o42500["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o42501 = temp__5733__auto____$2;
return (o42501["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o42506 = temp__5733__auto__;
var temp__5733__auto____$1 = (o42506["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o42507 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o42507["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o42508 = temp__5733__auto____$2;
return (o42508["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42762 = arguments.length;
var i__4731__auto___42763 = (0);
while(true){
if((i__4731__auto___42763 < len__4730__auto___42762)){
args__4736__auto__.push((arguments[i__4731__auto___42763]));

var G__42770 = (i__4731__auto___42763 + (1));
i__4731__auto___42763 = G__42770;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq42516){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42516));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42776 = arguments.length;
var i__4731__auto___42777 = (0);
while(true){
if((i__4731__auto___42777 < len__4730__auto___42776)){
args__4736__auto__.push((arguments[i__4731__auto___42777]));

var G__42778 = (i__4731__auto___42777 + (1));
i__4731__auto___42777 = G__42778;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq42530){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42530));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42782 = arguments.length;
var i__4731__auto___42783 = (0);
while(true){
if((i__4731__auto___42783 < len__4730__auto___42782)){
args__4736__auto__.push((arguments[i__4731__auto___42783]));

var G__42787 = (i__4731__auto___42783 + (1));
i__4731__auto___42783 = G__42787;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq42549){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42549));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42796 = arguments.length;
var i__4731__auto___42799 = (0);
while(true){
if((i__4731__auto___42799 < len__4730__auto___42796)){
args__4736__auto__.push((arguments[i__4731__auto___42799]));

var G__42801 = (i__4731__auto___42799 + (1));
i__4731__auto___42799 = G__42801;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42562){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42562));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42804 = arguments.length;
var i__4731__auto___42805 = (0);
while(true){
if((i__4731__auto___42805 < len__4730__auto___42804)){
args__4736__auto__.push((arguments[i__4731__auto___42805]));

var G__42806 = (i__4731__auto___42805 + (1));
i__4731__auto___42805 = G__42806;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq42579){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42579));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42819 = arguments.length;
var i__4731__auto___42820 = (0);
while(true){
if((i__4731__auto___42820 < len__4730__auto___42819)){
args__4736__auto__.push((arguments[i__4731__auto___42820]));

var G__42821 = (i__4731__auto___42820 + (1));
i__4731__auto___42820 = G__42821;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq42589){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42589));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42829 = arguments.length;
var i__4731__auto___42830 = (0);
while(true){
if((i__4731__auto___42830 < len__4730__auto___42829)){
args__4736__auto__.push((arguments[i__4731__auto___42830]));

var G__42835 = (i__4731__auto___42830 + (1));
i__4731__auto___42830 = G__42835;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq42604){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42604));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42840 = arguments.length;
var i__4731__auto___42844 = (0);
while(true){
if((i__4731__auto___42844 < len__4730__auto___42840)){
args__4736__auto__.push((arguments[i__4731__auto___42844]));

var G__42848 = (i__4731__auto___42844 + (1));
i__4731__auto___42844 = G__42848;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42627){
var vec__42630 = p__42627;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42630,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__42614_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__42614_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq42621){
var G__42622 = cljs.core.first(seq42621);
var seq42621__$1 = cljs.core.next(seq42621);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42622,seq42621__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__42649 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__42650 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__42651 = (function (){var G__42652 = new cljs.core.Keyword(null,"li","li",723558921);
var G__42653 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__42654 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__42652,G__42653,G__42654) : devtools.format.make_template_fn.call(null,G__42652,G__42653,G__42654));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__42649,G__42650,G__42651) : devtools.format.make_template_fn.call(null,G__42649,G__42650,G__42651));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42862 = arguments.length;
var i__4731__auto___42863 = (0);
while(true){
if((i__4731__auto___42863 < len__4730__auto___42862)){
args__4736__auto__.push((arguments[i__4731__auto___42863]));

var G__42872 = (i__4731__auto___42863 + (1));
i__4731__auto___42863 = G__42872;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq42655){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42655));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42877 = arguments.length;
var i__4731__auto___42878 = (0);
while(true){
if((i__4731__auto___42878 < len__4730__auto___42877)){
args__4736__auto__.push((arguments[i__4731__auto___42878]));

var G__42881 = (i__4731__auto___42878 + (1));
i__4731__auto___42878 = G__42881;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42667){
var G__42668 = cljs.core.first(seq42667);
var seq42667__$1 = cljs.core.next(seq42667);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42668,seq42667__$1);
}));


//# sourceMappingURL=devtools.format.js.map
