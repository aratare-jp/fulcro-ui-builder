goog.provide('app.client');
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined')){
} else {
app.client.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.cards = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Hello",new cljs.core.Keyword(null,"message","message",-406056002),"Lorem ipsum dolor sit amet, consectetur adipisicing elit."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Hello",new cljs.core.Keyword(null,"message","message",-406056002),"Lorem ipsum dolor sit amet, consectetur adipisicing elit."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Hello",new cljs.core.Keyword(null,"message","message",-406056002),"Lorem ipsum dolor sit amet, consectetur adipisicing elit."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Hello",new cljs.core.Keyword(null,"message","message",-406056002),"Lorem ipsum dolor sit amet, consectetur adipisicing elit."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Hello",new cljs.core.Keyword(null,"message","message",-406056002),"Lorem ipsum dolor sit amet, consectetur adipisicing elit."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Hello",new cljs.core.Keyword(null,"message","message",-406056002),"Lorem ipsum dolor sit amet, consectetur adipisicing elit."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Hello",new cljs.core.Keyword(null,"message","message",-406056002),"Lorem ipsum dolor sit amet, consectetur adipisicing elit."], null)], null);

var options__46026__auto___50171 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Card(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__50153 = com.fulcrologic.fulcro.components.props(this$);
var map__50153__$1 = (((((!((map__50153 == null))))?(((((map__50153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50153):map__50153);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"title","title",636505583));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null),new cljs.core.Keyword(null,".uk-card-title",".uk-card-title",1032718033)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message], null),null)], null),new cljs.core.Keyword(null,".uk-card.uk-card-primary.uk-card-body",".uk-card.uk-card-primary.uk-card-body",924159370))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Card !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Card = (function app$client$Card(props__46027__auto__){
var this__46028__auto__ = this;
var temp__5733__auto___50172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46026__auto___50171,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___50172)){
var init_state__46029__auto___50173 = temp__5733__auto___50172;
(this__46028__auto__.state = (function (){var obj50156 = ({"fulcro$state":(function (){var G__50157 = this__46028__auto__;
var G__50158 = goog.object.get(props__46027__auto__,"fulcro$value");
return (init_state__46029__auto___50173.cljs$core$IFn$_invoke$arity$2 ? init_state__46029__auto___50173.cljs$core$IFn$_invoke$arity$2(G__50157,G__50158) : init_state__46029__auto___50173.call(null,G__50157,G__50158));
})()});
return obj50156;
})());
} else {
(this__46028__auto__.state = (function (){var obj50160 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj50160;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Card,new cljs.core.Keyword("app.client","Card","app.client/Card",164427400),options__46026__auto___50171);
app.client.card_ui = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.Card);

var options__46026__auto___50174 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = com.fulcrologic.fulcro.components.props(this$);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"uk-grid": "", "class": "uk-child-width-1-3@m uk-grid-small uk-grid-match", "uk-sortable": "handle: .uk-card"}),com.fulcrologic.fulcro.components.force_children(cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function app$client$render_Root_$_iter__50161(s__50162){
return (new cljs.core.LazySeq(null,(function (){
var s__50162__$1 = s__50162;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50162__$1);
if(temp__5735__auto__){
var s__50162__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50162__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50162__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50164 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50163 = (0);
while(true){
if((i__50163 < size__4522__auto__)){
var card = cljs.core._nth(c__4521__auto__,i__50163);
cljs.core.chunk_append(b__50164,(app.client.card_ui.cljs$core$IFn$_invoke$arity$1 ? app.client.card_ui.cljs$core$IFn$_invoke$arity$1(card) : app.client.card_ui.call(null,card)));

var G__50175 = (i__50163 + (1));
i__50163 = G__50175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50164),app$client$render_Root_$_iter__50161(cljs.core.chunk_rest(s__50162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50164),null);
}
} else {
var card = cljs.core.first(s__50162__$2);
return cljs.core.cons((app.client.card_ui.cljs$core$IFn$_invoke$arity$1 ? app.client.card_ui.cljs$core$IFn$_invoke$arity$1(card) : app.client.card_ui.call(null,card)),app$client$render_Root_$_iter__50161(cljs.core.rest(s__50162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(app.client.cards);
})()))]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"className": "uk-button uk-button-primary"}),"Create"])], null),new cljs.core.Keyword(null,".uk-overlay.uk-overlay-primary.uk-position-bottom",".uk-overlay.uk-overlay-primary.uk-position-bottom",307769837))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Root = (function app$client$Root(props__46027__auto__){
var this__46028__auto__ = this;
var temp__5733__auto___50176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46026__auto___50174,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___50176)){
var init_state__46029__auto___50177 = temp__5733__auto___50176;
(this__46028__auto__.state = (function (){var obj50166 = ({"fulcro$state":(function (){var G__50167 = this__46028__auto__;
var G__50168 = goog.object.get(props__46027__auto__,"fulcro$value");
return (init_state__46029__auto___50177.cljs$core$IFn$_invoke$arity$2 ? init_state__46029__auto___50177.cljs$core$IFn$_invoke$arity$2(G__50167,G__50168) : init_state__46029__auto___50177.call(null,G__50167,G__50168));
})()});
return obj50166;
})());
} else {
(this__46028__auto__.state = (function (){var obj50170 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj50170;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__46026__auto___50174);
/**
 * Shadow-cljs sets this up to be our entry-point function. See shadow-cljs.edn `:init-fn` in the modules of the main build.
 */
app.client.init = (function app$client$init(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

return console.log("Loaded");
});
goog.exportSymbol('app.client.init', app.client.init);
/**
 * During development, shadow-cljs will call this on every hot reload of source. See shadow-cljs.edn
 */
app.client.refresh = (function app$client$refresh(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app,app.client.Root,"app");

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(app.client.app);

return console.log("Hot reload");
});
goog.exportSymbol('app.client.refresh', app.client.refresh);

//# sourceMappingURL=app.client.js.map
