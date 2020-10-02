goog.provide('com.fulcrologic.fulcro.dom');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__49352){
var vec__49354 = p__49352;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49354,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49354,(1),null);
var pair = vec__49354;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__49362){
var vec__49363 = p__49362;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49363,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49363,(1),null);
var pair = vec__49363;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__49379){
var vec__49382 = p__49379;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49382,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49382,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__49390 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49390,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__49390;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__49402 = arguments.length;
switch (G__49402) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__49411 = component.refs;
var G__49411__$1 = (((G__49411 == null))?null:goog.object.get(G__49411,name));
if((G__49411__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__49411__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5733__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5733__auto__)){
var ref = temp__5733__auto__;
var G__49423 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__49424 = (function (){var G__49425 = r;
if((G__49425 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__49425);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__49424) : ref.call(null,G__49424));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__49423) : factory.call(null,G__49423));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__49444 = arguments.length;
switch (G__49444) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___52062 = arguments.length;
var i__4731__auto___52063 = (0);
while(true){
if((i__4731__auto___52063 < len__4730__auto___52062)){
args_arr__4751__auto__.push((arguments[i__4731__auto___52063]));

var G__52064 = (i__4731__auto___52063 + (1));
i__4731__auto___52063 = G__52064;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq49437){
var G__49438 = cljs.core.first(seq49437);
var seq49437__$1 = cljs.core.next(seq49437);
var G__49440 = cljs.core.first(seq49437__$1);
var seq49437__$2 = cljs.core.next(seq49437__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49438,G__49440,seq49437__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4109__auto__ = tag;
if(cljs.core.truth_(and__4109__auto__)){
var G__49468 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49468) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__49468));
} else {
return and__4109__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x49487_52082 = ctor.prototype;
(x49487_52082.onChange = (function (event){
var this$ = this;
var temp__5735__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x49487_52082.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__49473_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__49473_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4109__auto__ = state_value;
if(cljs.core.truth_(and__4109__auto__)){
var and__4109__auto____$1 = element_value;
if(cljs.core.truth_(and__4109__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4109__auto____$1;
}
} else {
return and__4109__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
}),null)),null,-310252645);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x49487_52082.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__52089__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__52089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52090__i = 0, G__52090__a = new Array(arguments.length -  0);
while (G__52090__i < G__52090__a.length) {G__52090__a[G__52090__i] = arguments[G__52090__i + 0]; ++G__52090__i;}
  args = new cljs.core.IndexedSeq(G__52090__a,0,null);
} 
return G__52089__delegate.call(this,args);};
G__52089.cljs$lang$maxFixedArity = 0;
G__52089.cljs$lang$applyTo = (function (arglist__52092){
var args = cljs.core.seq(arglist__52092);
return G__52089__delegate(args);
});
G__52089.cljs$core$IFn$_invoke$arity$variadic = G__52089__delegate;
return G__52089;
})()
;
return (function() { 
var G__52097__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
var temp__5733__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__52097 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__52111__i = 0, G__52111__a = new Array(arguments.length -  1);
while (G__52111__i < G__52111__a.length) {G__52111__a[G__52111__i] = arguments[G__52111__i + 1]; ++G__52111__i;}
  children = new cljs.core.IndexedSeq(G__52111__a,0,null);
} 
return G__52097__delegate.call(this,props,children);};
G__52097.cljs$lang$maxFixedArity = 1;
G__52097.cljs$lang$applyTo = (function (arglist__52113){
var props = cljs.core.first(arglist__52113);
var children = cljs.core.rest(arglist__52113);
return G__52097__delegate(props,children);
});
G__52097.cljs$core$IFn$_invoke$arity$variadic = G__52097__delegate;
return G__52097;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__49522 = tag;
switch (G__49522) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49522)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__49531 = arguments.length;
switch (G__49531) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__49537 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__49538 = cljs.core.seq(vec__49537);
var first__49539 = cljs.core.first(seq__49538);
var seq__49538__$1 = cljs.core.next(seq__49538);
var head = first__49539;
var tail = seq__49538__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__49540 = (function (){var G__49541 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__49541,tail);

return G__49541;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49540) : f.call(null,G__49540));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__49543 = (function (){var G__49544 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__49544,args);

return G__49544;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49543) : f.call(null,G__49543));
} else {
if(cljs.core.object_QMARK_(head)){
var G__49547 = (function (){var G__49548 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__49548,tail);

return G__49548;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49547) : f.call(null,G__49547));
} else {
if(cljs.core.map_QMARK_(head)){
var G__49549 = (function (){var G__49550 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__49550,tail);

return G__49550;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49549) : f.call(null,G__49549));
} else {
var G__49551 = (function (){var G__49553 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__49553,args);

return G__49553;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49551) : f.call(null,G__49551));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__49559 = arguments.length;
switch (G__49559) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__49562 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__49563 = cljs.core.seq(vec__49562);
var first__49564 = cljs.core.first(seq__49563);
var seq__49563__$1 = cljs.core.next(seq__49563);
var head = first__49564;
var tail = seq__49563__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__49565 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__49565,tail);

return G__49565;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__49566 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__49566,args);

return G__49566;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__49568 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__49568,tail);

return G__49568;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__49570 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__49570,tail);

return G__49570;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__49571 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__49571,args);

return G__49571;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52177 = arguments.length;
var i__4731__auto___52178 = (0);
while(true){
if((i__4731__auto___52178 < len__4730__auto___52177)){
args__4736__auto__.push((arguments[i__4731__auto___52178]));

var G__52179 = (i__4731__auto___52178 + (1));
i__4731__auto___52178 = G__52179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49617 = conformed_args__47920__auto__;
var map__49617__$1 = (((((!((map__49617 == null))))?(((((map__49617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49617):map__49617);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49617__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49617__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49617__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq49612){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49612));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52192 = arguments.length;
var i__4731__auto___52194 = (0);
while(true){
if((i__4731__auto___52194 < len__4730__auto___52192)){
args__4736__auto__.push((arguments[i__4731__auto___52194]));

var G__52195 = (i__4731__auto___52194 + (1));
i__4731__auto___52194 = G__52195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49634 = conformed_args__47920__auto__;
var map__49634__$1 = (((((!((map__49634 == null))))?(((((map__49634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49634):map__49634);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq49627){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52205 = arguments.length;
var i__4731__auto___52206 = (0);
while(true){
if((i__4731__auto___52206 < len__4730__auto___52205)){
args__4736__auto__.push((arguments[i__4731__auto___52206]));

var G__52207 = (i__4731__auto___52206 + (1));
i__4731__auto___52206 = G__52207;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49642 = conformed_args__47920__auto__;
var map__49642__$1 = (((((!((map__49642 == null))))?(((((map__49642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49642):map__49642);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq49639){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49639));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52214 = arguments.length;
var i__4731__auto___52215 = (0);
while(true){
if((i__4731__auto___52215 < len__4730__auto___52214)){
args__4736__auto__.push((arguments[i__4731__auto___52215]));

var G__52218 = (i__4731__auto___52215 + (1));
i__4731__auto___52215 = G__52218;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49651 = conformed_args__47920__auto__;
var map__49651__$1 = (((((!((map__49651 == null))))?(((((map__49651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49651):map__49651);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq49649){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49649));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52226 = arguments.length;
var i__4731__auto___52228 = (0);
while(true){
if((i__4731__auto___52228 < len__4730__auto___52226)){
args__4736__auto__.push((arguments[i__4731__auto___52228]));

var G__52230 = (i__4731__auto___52228 + (1));
i__4731__auto___52228 = G__52230;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49668 = conformed_args__47920__auto__;
var map__49668__$1 = (((((!((map__49668 == null))))?(((((map__49668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49668):map__49668);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq49656){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49656));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52237 = arguments.length;
var i__4731__auto___52238 = (0);
while(true){
if((i__4731__auto___52238 < len__4730__auto___52237)){
args__4736__auto__.push((arguments[i__4731__auto___52238]));

var G__52239 = (i__4731__auto___52238 + (1));
i__4731__auto___52238 = G__52239;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49684 = conformed_args__47920__auto__;
var map__49684__$1 = (((((!((map__49684 == null))))?(((((map__49684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49684):map__49684);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq49676){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49676));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52245 = arguments.length;
var i__4731__auto___52246 = (0);
while(true){
if((i__4731__auto___52246 < len__4730__auto___52245)){
args__4736__auto__.push((arguments[i__4731__auto___52246]));

var G__52247 = (i__4731__auto___52246 + (1));
i__4731__auto___52246 = G__52247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49700 = conformed_args__47920__auto__;
var map__49700__$1 = (((((!((map__49700 == null))))?(((((map__49700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49700):map__49700);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq49694){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49694));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52254 = arguments.length;
var i__4731__auto___52255 = (0);
while(true){
if((i__4731__auto___52255 < len__4730__auto___52254)){
args__4736__auto__.push((arguments[i__4731__auto___52255]));

var G__52256 = (i__4731__auto___52255 + (1));
i__4731__auto___52255 = G__52256;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49711 = conformed_args__47920__auto__;
var map__49711__$1 = (((((!((map__49711 == null))))?(((((map__49711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49711):map__49711);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq49706){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49706));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52265 = arguments.length;
var i__4731__auto___52266 = (0);
while(true){
if((i__4731__auto___52266 < len__4730__auto___52265)){
args__4736__auto__.push((arguments[i__4731__auto___52266]));

var G__52268 = (i__4731__auto___52266 + (1));
i__4731__auto___52266 = G__52268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49741 = conformed_args__47920__auto__;
var map__49741__$1 = (((((!((map__49741 == null))))?(((((map__49741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49741):map__49741);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq49715){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49715));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52270 = arguments.length;
var i__4731__auto___52272 = (0);
while(true){
if((i__4731__auto___52272 < len__4730__auto___52270)){
args__4736__auto__.push((arguments[i__4731__auto___52272]));

var G__52273 = (i__4731__auto___52272 + (1));
i__4731__auto___52272 = G__52273;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49784 = conformed_args__47920__auto__;
var map__49784__$1 = (((((!((map__49784 == null))))?(((((map__49784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49784):map__49784);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq49774){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49774));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52282 = arguments.length;
var i__4731__auto___52283 = (0);
while(true){
if((i__4731__auto___52283 < len__4730__auto___52282)){
args__4736__auto__.push((arguments[i__4731__auto___52283]));

var G__52284 = (i__4731__auto___52283 + (1));
i__4731__auto___52283 = G__52284;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49803 = conformed_args__47920__auto__;
var map__49803__$1 = (((((!((map__49803 == null))))?(((((map__49803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49803):map__49803);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq49799){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49799));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52291 = arguments.length;
var i__4731__auto___52292 = (0);
while(true){
if((i__4731__auto___52292 < len__4730__auto___52291)){
args__4736__auto__.push((arguments[i__4731__auto___52292]));

var G__52293 = (i__4731__auto___52292 + (1));
i__4731__auto___52292 = G__52293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49811 = conformed_args__47920__auto__;
var map__49811__$1 = (((((!((map__49811 == null))))?(((((map__49811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49811):map__49811);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq49809){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49809));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52297 = arguments.length;
var i__4731__auto___52298 = (0);
while(true){
if((i__4731__auto___52298 < len__4730__auto___52297)){
args__4736__auto__.push((arguments[i__4731__auto___52298]));

var G__52299 = (i__4731__auto___52298 + (1));
i__4731__auto___52298 = G__52299;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49818 = conformed_args__47920__auto__;
var map__49818__$1 = (((((!((map__49818 == null))))?(((((map__49818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49818):map__49818);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49818__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49818__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq49813){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49813));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52307 = arguments.length;
var i__4731__auto___52308 = (0);
while(true){
if((i__4731__auto___52308 < len__4730__auto___52307)){
args__4736__auto__.push((arguments[i__4731__auto___52308]));

var G__52309 = (i__4731__auto___52308 + (1));
i__4731__auto___52308 = G__52309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49832 = conformed_args__47920__auto__;
var map__49832__$1 = (((((!((map__49832 == null))))?(((((map__49832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49832):map__49832);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq49825){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49825));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52317 = arguments.length;
var i__4731__auto___52318 = (0);
while(true){
if((i__4731__auto___52318 < len__4730__auto___52317)){
args__4736__auto__.push((arguments[i__4731__auto___52318]));

var G__52319 = (i__4731__auto___52318 + (1));
i__4731__auto___52318 = G__52319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49839 = conformed_args__47920__auto__;
var map__49839__$1 = (((((!((map__49839 == null))))?(((((map__49839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49839):map__49839);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq49834){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52323 = arguments.length;
var i__4731__auto___52324 = (0);
while(true){
if((i__4731__auto___52324 < len__4730__auto___52323)){
args__4736__auto__.push((arguments[i__4731__auto___52324]));

var G__52325 = (i__4731__auto___52324 + (1));
i__4731__auto___52324 = G__52325;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49844 = conformed_args__47920__auto__;
var map__49844__$1 = (((((!((map__49844 == null))))?(((((map__49844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49844):map__49844);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq49841){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49841));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52331 = arguments.length;
var i__4731__auto___52332 = (0);
while(true){
if((i__4731__auto___52332 < len__4730__auto___52331)){
args__4736__auto__.push((arguments[i__4731__auto___52332]));

var G__52333 = (i__4731__auto___52332 + (1));
i__4731__auto___52332 = G__52333;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49847 = conformed_args__47920__auto__;
var map__49847__$1 = (((((!((map__49847 == null))))?(((((map__49847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49847):map__49847);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49847__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49847__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49847__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq49846){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49846));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52338 = arguments.length;
var i__4731__auto___52339 = (0);
while(true){
if((i__4731__auto___52339 < len__4730__auto___52338)){
args__4736__auto__.push((arguments[i__4731__auto___52339]));

var G__52341 = (i__4731__auto___52339 + (1));
i__4731__auto___52339 = G__52341;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49850 = conformed_args__47920__auto__;
var map__49850__$1 = (((((!((map__49850 == null))))?(((((map__49850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49850):map__49850);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq49849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52347 = arguments.length;
var i__4731__auto___52348 = (0);
while(true){
if((i__4731__auto___52348 < len__4730__auto___52347)){
args__4736__auto__.push((arguments[i__4731__auto___52348]));

var G__52349 = (i__4731__auto___52348 + (1));
i__4731__auto___52348 = G__52349;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49853 = conformed_args__47920__auto__;
var map__49853__$1 = (((((!((map__49853 == null))))?(((((map__49853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49853):map__49853);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq49852){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49852));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52355 = arguments.length;
var i__4731__auto___52357 = (0);
while(true){
if((i__4731__auto___52357 < len__4730__auto___52355)){
args__4736__auto__.push((arguments[i__4731__auto___52357]));

var G__52359 = (i__4731__auto___52357 + (1));
i__4731__auto___52357 = G__52359;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49856 = conformed_args__47920__auto__;
var map__49856__$1 = (((((!((map__49856 == null))))?(((((map__49856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49856):map__49856);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq49855){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49855));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52367 = arguments.length;
var i__4731__auto___52368 = (0);
while(true){
if((i__4731__auto___52368 < len__4730__auto___52367)){
args__4736__auto__.push((arguments[i__4731__auto___52368]));

var G__52369 = (i__4731__auto___52368 + (1));
i__4731__auto___52368 = G__52369;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49861 = conformed_args__47920__auto__;
var map__49861__$1 = (((((!((map__49861 == null))))?(((((map__49861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49861):map__49861);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq49858){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49858));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52384 = arguments.length;
var i__4731__auto___52385 = (0);
while(true){
if((i__4731__auto___52385 < len__4730__auto___52384)){
args__4736__auto__.push((arguments[i__4731__auto___52385]));

var G__52386 = (i__4731__auto___52385 + (1));
i__4731__auto___52385 = G__52386;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49872 = conformed_args__47920__auto__;
var map__49872__$1 = (((((!((map__49872 == null))))?(((((map__49872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49872):map__49872);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq49870){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49870));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52398 = arguments.length;
var i__4731__auto___52399 = (0);
while(true){
if((i__4731__auto___52399 < len__4730__auto___52398)){
args__4736__auto__.push((arguments[i__4731__auto___52399]));

var G__52400 = (i__4731__auto___52399 + (1));
i__4731__auto___52399 = G__52400;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49886 = conformed_args__47920__auto__;
var map__49886__$1 = (((((!((map__49886 == null))))?(((((map__49886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49886):map__49886);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49886__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49886__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49886__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq49881){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49881));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52405 = arguments.length;
var i__4731__auto___52406 = (0);
while(true){
if((i__4731__auto___52406 < len__4730__auto___52405)){
args__4736__auto__.push((arguments[i__4731__auto___52406]));

var G__52407 = (i__4731__auto___52406 + (1));
i__4731__auto___52406 = G__52407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49896 = conformed_args__47920__auto__;
var map__49896__$1 = (((((!((map__49896 == null))))?(((((map__49896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49896):map__49896);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq49893){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49893));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52417 = arguments.length;
var i__4731__auto___52418 = (0);
while(true){
if((i__4731__auto___52418 < len__4730__auto___52417)){
args__4736__auto__.push((arguments[i__4731__auto___52418]));

var G__52419 = (i__4731__auto___52418 + (1));
i__4731__auto___52418 = G__52419;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49912 = conformed_args__47920__auto__;
var map__49912__$1 = (((((!((map__49912 == null))))?(((((map__49912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49912):map__49912);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq49901){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49901));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52426 = arguments.length;
var i__4731__auto___52427 = (0);
while(true){
if((i__4731__auto___52427 < len__4730__auto___52426)){
args__4736__auto__.push((arguments[i__4731__auto___52427]));

var G__52430 = (i__4731__auto___52427 + (1));
i__4731__auto___52427 = G__52430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49925 = conformed_args__47920__auto__;
var map__49925__$1 = (((((!((map__49925 == null))))?(((((map__49925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49925):map__49925);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq49921){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49921));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52435 = arguments.length;
var i__4731__auto___52436 = (0);
while(true){
if((i__4731__auto___52436 < len__4730__auto___52435)){
args__4736__auto__.push((arguments[i__4731__auto___52436]));

var G__52437 = (i__4731__auto___52436 + (1));
i__4731__auto___52436 = G__52437;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49936 = conformed_args__47920__auto__;
var map__49936__$1 = (((((!((map__49936 == null))))?(((((map__49936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49936):map__49936);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49936__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49936__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49936__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq49933){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49933));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52446 = arguments.length;
var i__4731__auto___52447 = (0);
while(true){
if((i__4731__auto___52447 < len__4730__auto___52446)){
args__4736__auto__.push((arguments[i__4731__auto___52447]));

var G__52448 = (i__4731__auto___52447 + (1));
i__4731__auto___52447 = G__52448;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49949 = conformed_args__47920__auto__;
var map__49949__$1 = (((((!((map__49949 == null))))?(((((map__49949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49949):map__49949);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq49945){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49945));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52457 = arguments.length;
var i__4731__auto___52458 = (0);
while(true){
if((i__4731__auto___52458 < len__4730__auto___52457)){
args__4736__auto__.push((arguments[i__4731__auto___52458]));

var G__52459 = (i__4731__auto___52458 + (1));
i__4731__auto___52458 = G__52459;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49957 = conformed_args__47920__auto__;
var map__49957__$1 = (((((!((map__49957 == null))))?(((((map__49957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49957):map__49957);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq49954){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49954));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52465 = arguments.length;
var i__4731__auto___52466 = (0);
while(true){
if((i__4731__auto___52466 < len__4730__auto___52465)){
args__4736__auto__.push((arguments[i__4731__auto___52466]));

var G__52467 = (i__4731__auto___52466 + (1));
i__4731__auto___52466 = G__52467;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49968 = conformed_args__47920__auto__;
var map__49968__$1 = (((((!((map__49968 == null))))?(((((map__49968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49968):map__49968);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq49961){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49961));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52474 = arguments.length;
var i__4731__auto___52476 = (0);
while(true){
if((i__4731__auto___52476 < len__4730__auto___52474)){
args__4736__auto__.push((arguments[i__4731__auto___52476]));

var G__52479 = (i__4731__auto___52476 + (1));
i__4731__auto___52476 = G__52479;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49976 = conformed_args__47920__auto__;
var map__49976__$1 = (((((!((map__49976 == null))))?(((((map__49976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49976):map__49976);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq49974){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49974));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52489 = arguments.length;
var i__4731__auto___52490 = (0);
while(true){
if((i__4731__auto___52490 < len__4730__auto___52489)){
args__4736__auto__.push((arguments[i__4731__auto___52490]));

var G__52491 = (i__4731__auto___52490 + (1));
i__4731__auto___52490 = G__52491;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49982 = conformed_args__47920__auto__;
var map__49982__$1 = (((((!((map__49982 == null))))?(((((map__49982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49982):map__49982);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49982__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49982__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49982__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq49980){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49980));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52497 = arguments.length;
var i__4731__auto___52498 = (0);
while(true){
if((i__4731__auto___52498 < len__4730__auto___52497)){
args__4736__auto__.push((arguments[i__4731__auto___52498]));

var G__52499 = (i__4731__auto___52498 + (1));
i__4731__auto___52498 = G__52499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49988 = conformed_args__47920__auto__;
var map__49988__$1 = (((((!((map__49988 == null))))?(((((map__49988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49988):map__49988);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq49986){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49986));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52505 = arguments.length;
var i__4731__auto___52506 = (0);
while(true){
if((i__4731__auto___52506 < len__4730__auto___52505)){
args__4736__auto__.push((arguments[i__4731__auto___52506]));

var G__52509 = (i__4731__auto___52506 + (1));
i__4731__auto___52506 = G__52509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49993 = conformed_args__47920__auto__;
var map__49993__$1 = (((((!((map__49993 == null))))?(((((map__49993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49993):map__49993);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq49991){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49991));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52513 = arguments.length;
var i__4731__auto___52514 = (0);
while(true){
if((i__4731__auto___52514 < len__4730__auto___52513)){
args__4736__auto__.push((arguments[i__4731__auto___52514]));

var G__52515 = (i__4731__auto___52514 + (1));
i__4731__auto___52514 = G__52515;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50010 = conformed_args__47920__auto__;
var map__50010__$1 = (((((!((map__50010 == null))))?(((((map__50010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50010):map__50010);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq49998){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49998));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52536 = arguments.length;
var i__4731__auto___52538 = (0);
while(true){
if((i__4731__auto___52538 < len__4730__auto___52536)){
args__4736__auto__.push((arguments[i__4731__auto___52538]));

var G__52539 = (i__4731__auto___52538 + (1));
i__4731__auto___52538 = G__52539;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50025 = conformed_args__47920__auto__;
var map__50025__$1 = (((((!((map__50025 == null))))?(((((map__50025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50025):map__50025);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq50023){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50023));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52546 = arguments.length;
var i__4731__auto___52547 = (0);
while(true){
if((i__4731__auto___52547 < len__4730__auto___52546)){
args__4736__auto__.push((arguments[i__4731__auto___52547]));

var G__52548 = (i__4731__auto___52547 + (1));
i__4731__auto___52547 = G__52548;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50045 = conformed_args__47920__auto__;
var map__50045__$1 = (((((!((map__50045 == null))))?(((((map__50045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50045):map__50045);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50045__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50045__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50045__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq50034){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50034));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52556 = arguments.length;
var i__4731__auto___52558 = (0);
while(true){
if((i__4731__auto___52558 < len__4730__auto___52556)){
args__4736__auto__.push((arguments[i__4731__auto___52558]));

var G__52561 = (i__4731__auto___52558 + (1));
i__4731__auto___52558 = G__52561;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50056 = conformed_args__47920__auto__;
var map__50056__$1 = (((((!((map__50056 == null))))?(((((map__50056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50056):map__50056);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50056__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50056__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50056__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq50051){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50051));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52574 = arguments.length;
var i__4731__auto___52575 = (0);
while(true){
if((i__4731__auto___52575 < len__4730__auto___52574)){
args__4736__auto__.push((arguments[i__4731__auto___52575]));

var G__52576 = (i__4731__auto___52575 + (1));
i__4731__auto___52575 = G__52576;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50067 = conformed_args__47920__auto__;
var map__50067__$1 = (((((!((map__50067 == null))))?(((((map__50067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50067):map__50067);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq50060){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50060));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52581 = arguments.length;
var i__4731__auto___52582 = (0);
while(true){
if((i__4731__auto___52582 < len__4730__auto___52581)){
args__4736__auto__.push((arguments[i__4731__auto___52582]));

var G__52584 = (i__4731__auto___52582 + (1));
i__4731__auto___52582 = G__52584;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50076 = conformed_args__47920__auto__;
var map__50076__$1 = (((((!((map__50076 == null))))?(((((map__50076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50076):map__50076);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50076__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50076__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50076__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq50073){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50073));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52589 = arguments.length;
var i__4731__auto___52590 = (0);
while(true){
if((i__4731__auto___52590 < len__4730__auto___52589)){
args__4736__auto__.push((arguments[i__4731__auto___52590]));

var G__52591 = (i__4731__auto___52590 + (1));
i__4731__auto___52590 = G__52591;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50101 = conformed_args__47920__auto__;
var map__50101__$1 = (((((!((map__50101 == null))))?(((((map__50101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50101):map__50101);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq50088){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50088));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52599 = arguments.length;
var i__4731__auto___52600 = (0);
while(true){
if((i__4731__auto___52600 < len__4730__auto___52599)){
args__4736__auto__.push((arguments[i__4731__auto___52600]));

var G__52601 = (i__4731__auto___52600 + (1));
i__4731__auto___52600 = G__52601;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50113 = conformed_args__47920__auto__;
var map__50113__$1 = (((((!((map__50113 == null))))?(((((map__50113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50113):map__50113);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq50111){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50111));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52604 = arguments.length;
var i__4731__auto___52606 = (0);
while(true){
if((i__4731__auto___52606 < len__4730__auto___52604)){
args__4736__auto__.push((arguments[i__4731__auto___52606]));

var G__52607 = (i__4731__auto___52606 + (1));
i__4731__auto___52606 = G__52607;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50124 = conformed_args__47920__auto__;
var map__50124__$1 = (((((!((map__50124 == null))))?(((((map__50124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50124):map__50124);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50124__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50124__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50124__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq50119){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50119));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52610 = arguments.length;
var i__4731__auto___52611 = (0);
while(true){
if((i__4731__auto___52611 < len__4730__auto___52610)){
args__4736__auto__.push((arguments[i__4731__auto___52611]));

var G__52612 = (i__4731__auto___52611 + (1));
i__4731__auto___52611 = G__52612;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50133 = conformed_args__47920__auto__;
var map__50133__$1 = (((((!((map__50133 == null))))?(((((map__50133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50133):map__50133);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq50130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50130));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52615 = arguments.length;
var i__4731__auto___52616 = (0);
while(true){
if((i__4731__auto___52616 < len__4730__auto___52615)){
args__4736__auto__.push((arguments[i__4731__auto___52616]));

var G__52618 = (i__4731__auto___52616 + (1));
i__4731__auto___52616 = G__52618;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50150 = conformed_args__47920__auto__;
var map__50150__$1 = (((((!((map__50150 == null))))?(((((map__50150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50150):map__50150);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50150__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50150__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50150__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq50140){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50140));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52621 = arguments.length;
var i__4731__auto___52622 = (0);
while(true){
if((i__4731__auto___52622 < len__4730__auto___52621)){
args__4736__auto__.push((arguments[i__4731__auto___52622]));

var G__52623 = (i__4731__auto___52622 + (1));
i__4731__auto___52622 = G__52623;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50160 = conformed_args__47920__auto__;
var map__50160__$1 = (((((!((map__50160 == null))))?(((((map__50160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50160):map__50160);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq50157){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50157));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52627 = arguments.length;
var i__4731__auto___52628 = (0);
while(true){
if((i__4731__auto___52628 < len__4730__auto___52627)){
args__4736__auto__.push((arguments[i__4731__auto___52628]));

var G__52629 = (i__4731__auto___52628 + (1));
i__4731__auto___52628 = G__52629;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50171 = conformed_args__47920__auto__;
var map__50171__$1 = (((((!((map__50171 == null))))?(((((map__50171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50171):map__50171);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq50166){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50166));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52639 = arguments.length;
var i__4731__auto___52640 = (0);
while(true){
if((i__4731__auto___52640 < len__4730__auto___52639)){
args__4736__auto__.push((arguments[i__4731__auto___52640]));

var G__52641 = (i__4731__auto___52640 + (1));
i__4731__auto___52640 = G__52641;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50185 = conformed_args__47920__auto__;
var map__50185__$1 = (((((!((map__50185 == null))))?(((((map__50185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50185):map__50185);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq50179){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50179));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52650 = arguments.length;
var i__4731__auto___52651 = (0);
while(true){
if((i__4731__auto___52651 < len__4730__auto___52650)){
args__4736__auto__.push((arguments[i__4731__auto___52651]));

var G__52652 = (i__4731__auto___52651 + (1));
i__4731__auto___52651 = G__52652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50196 = conformed_args__47920__auto__;
var map__50196__$1 = (((((!((map__50196 == null))))?(((((map__50196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50196):map__50196);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq50194){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50194));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52659 = arguments.length;
var i__4731__auto___52660 = (0);
while(true){
if((i__4731__auto___52660 < len__4730__auto___52659)){
args__4736__auto__.push((arguments[i__4731__auto___52660]));

var G__52662 = (i__4731__auto___52660 + (1));
i__4731__auto___52660 = G__52662;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50207 = conformed_args__47920__auto__;
var map__50207__$1 = (((((!((map__50207 == null))))?(((((map__50207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50207):map__50207);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq50205){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50205));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52669 = arguments.length;
var i__4731__auto___52670 = (0);
while(true){
if((i__4731__auto___52670 < len__4730__auto___52669)){
args__4736__auto__.push((arguments[i__4731__auto___52670]));

var G__52672 = (i__4731__auto___52670 + (1));
i__4731__auto___52670 = G__52672;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50215 = conformed_args__47920__auto__;
var map__50215__$1 = (((((!((map__50215 == null))))?(((((map__50215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50215):map__50215);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq50210){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50210));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52676 = arguments.length;
var i__4731__auto___52677 = (0);
while(true){
if((i__4731__auto___52677 < len__4730__auto___52676)){
args__4736__auto__.push((arguments[i__4731__auto___52677]));

var G__52680 = (i__4731__auto___52677 + (1));
i__4731__auto___52677 = G__52680;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50241 = conformed_args__47920__auto__;
var map__50241__$1 = (((((!((map__50241 == null))))?(((((map__50241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50241):map__50241);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq50236){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50236));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52685 = arguments.length;
var i__4731__auto___52686 = (0);
while(true){
if((i__4731__auto___52686 < len__4730__auto___52685)){
args__4736__auto__.push((arguments[i__4731__auto___52686]));

var G__52687 = (i__4731__auto___52686 + (1));
i__4731__auto___52686 = G__52687;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50266 = conformed_args__47920__auto__;
var map__50266__$1 = (((((!((map__50266 == null))))?(((((map__50266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50266):map__50266);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq50257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50257));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52694 = arguments.length;
var i__4731__auto___52695 = (0);
while(true){
if((i__4731__auto___52695 < len__4730__auto___52694)){
args__4736__auto__.push((arguments[i__4731__auto___52695]));

var G__52696 = (i__4731__auto___52695 + (1));
i__4731__auto___52695 = G__52696;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50282 = conformed_args__47920__auto__;
var map__50282__$1 = (((((!((map__50282 == null))))?(((((map__50282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50282):map__50282);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50282__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50282__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50282__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq50277){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50277));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52700 = arguments.length;
var i__4731__auto___52702 = (0);
while(true){
if((i__4731__auto___52702 < len__4730__auto___52700)){
args__4736__auto__.push((arguments[i__4731__auto___52702]));

var G__52703 = (i__4731__auto___52702 + (1));
i__4731__auto___52702 = G__52703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50292 = conformed_args__47920__auto__;
var map__50292__$1 = (((((!((map__50292 == null))))?(((((map__50292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50292):map__50292);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq50286){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50286));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52709 = arguments.length;
var i__4731__auto___52711 = (0);
while(true){
if((i__4731__auto___52711 < len__4730__auto___52709)){
args__4736__auto__.push((arguments[i__4731__auto___52711]));

var G__52712 = (i__4731__auto___52711 + (1));
i__4731__auto___52711 = G__52712;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50310 = conformed_args__47920__auto__;
var map__50310__$1 = (((((!((map__50310 == null))))?(((((map__50310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50310):map__50310);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq50300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50300));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52718 = arguments.length;
var i__4731__auto___52719 = (0);
while(true){
if((i__4731__auto___52719 < len__4730__auto___52718)){
args__4736__auto__.push((arguments[i__4731__auto___52719]));

var G__52721 = (i__4731__auto___52719 + (1));
i__4731__auto___52719 = G__52721;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50330 = conformed_args__47920__auto__;
var map__50330__$1 = (((((!((map__50330 == null))))?(((((map__50330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50330):map__50330);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50330__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50330__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq50325){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50325));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52727 = arguments.length;
var i__4731__auto___52728 = (0);
while(true){
if((i__4731__auto___52728 < len__4730__auto___52727)){
args__4736__auto__.push((arguments[i__4731__auto___52728]));

var G__52729 = (i__4731__auto___52728 + (1));
i__4731__auto___52728 = G__52729;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50344 = conformed_args__47920__auto__;
var map__50344__$1 = (((((!((map__50344 == null))))?(((((map__50344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50344):map__50344);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq50336){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50336));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52737 = arguments.length;
var i__4731__auto___52738 = (0);
while(true){
if((i__4731__auto___52738 < len__4730__auto___52737)){
args__4736__auto__.push((arguments[i__4731__auto___52738]));

var G__52739 = (i__4731__auto___52738 + (1));
i__4731__auto___52738 = G__52739;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50362 = conformed_args__47920__auto__;
var map__50362__$1 = (((((!((map__50362 == null))))?(((((map__50362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50362):map__50362);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq50359){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50359));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52745 = arguments.length;
var i__4731__auto___52746 = (0);
while(true){
if((i__4731__auto___52746 < len__4730__auto___52745)){
args__4736__auto__.push((arguments[i__4731__auto___52746]));

var G__52748 = (i__4731__auto___52746 + (1));
i__4731__auto___52746 = G__52748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50377 = conformed_args__47920__auto__;
var map__50377__$1 = (((((!((map__50377 == null))))?(((((map__50377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50377):map__50377);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50377__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50377__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50377__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq50373){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50373));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52758 = arguments.length;
var i__4731__auto___52763 = (0);
while(true){
if((i__4731__auto___52763 < len__4730__auto___52758)){
args__4736__auto__.push((arguments[i__4731__auto___52763]));

var G__52765 = (i__4731__auto___52763 + (1));
i__4731__auto___52763 = G__52765;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50389 = conformed_args__47920__auto__;
var map__50389__$1 = (((((!((map__50389 == null))))?(((((map__50389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50389):map__50389);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq50385){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50385));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52772 = arguments.length;
var i__4731__auto___52773 = (0);
while(true){
if((i__4731__auto___52773 < len__4730__auto___52772)){
args__4736__auto__.push((arguments[i__4731__auto___52773]));

var G__52777 = (i__4731__auto___52773 + (1));
i__4731__auto___52773 = G__52777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50405 = conformed_args__47920__auto__;
var map__50405__$1 = (((((!((map__50405 == null))))?(((((map__50405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50405):map__50405);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq50396){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50396));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52793 = arguments.length;
var i__4731__auto___52794 = (0);
while(true){
if((i__4731__auto___52794 < len__4730__auto___52793)){
args__4736__auto__.push((arguments[i__4731__auto___52794]));

var G__52795 = (i__4731__auto___52794 + (1));
i__4731__auto___52794 = G__52795;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50416 = conformed_args__47920__auto__;
var map__50416__$1 = (((((!((map__50416 == null))))?(((((map__50416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50416):map__50416);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq50412){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50412));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52805 = arguments.length;
var i__4731__auto___52806 = (0);
while(true){
if((i__4731__auto___52806 < len__4730__auto___52805)){
args__4736__auto__.push((arguments[i__4731__auto___52806]));

var G__52807 = (i__4731__auto___52806 + (1));
i__4731__auto___52806 = G__52807;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50427 = conformed_args__47920__auto__;
var map__50427__$1 = (((((!((map__50427 == null))))?(((((map__50427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50427):map__50427);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq50421){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50421));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52815 = arguments.length;
var i__4731__auto___52816 = (0);
while(true){
if((i__4731__auto___52816 < len__4730__auto___52815)){
args__4736__auto__.push((arguments[i__4731__auto___52816]));

var G__52817 = (i__4731__auto___52816 + (1));
i__4731__auto___52816 = G__52817;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50436 = conformed_args__47920__auto__;
var map__50436__$1 = (((((!((map__50436 == null))))?(((((map__50436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50436):map__50436);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq50433){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50433));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52822 = arguments.length;
var i__4731__auto___52823 = (0);
while(true){
if((i__4731__auto___52823 < len__4730__auto___52822)){
args__4736__auto__.push((arguments[i__4731__auto___52823]));

var G__52824 = (i__4731__auto___52823 + (1));
i__4731__auto___52823 = G__52824;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50446 = conformed_args__47920__auto__;
var map__50446__$1 = (((((!((map__50446 == null))))?(((((map__50446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50446):map__50446);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq50443){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50443));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52831 = arguments.length;
var i__4731__auto___52832 = (0);
while(true){
if((i__4731__auto___52832 < len__4730__auto___52831)){
args__4736__auto__.push((arguments[i__4731__auto___52832]));

var G__52833 = (i__4731__auto___52832 + (1));
i__4731__auto___52832 = G__52833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50462 = conformed_args__47920__auto__;
var map__50462__$1 = (((((!((map__50462 == null))))?(((((map__50462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50462):map__50462);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq50455){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50455));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52837 = arguments.length;
var i__4731__auto___52838 = (0);
while(true){
if((i__4731__auto___52838 < len__4730__auto___52837)){
args__4736__auto__.push((arguments[i__4731__auto___52838]));

var G__52839 = (i__4731__auto___52838 + (1));
i__4731__auto___52838 = G__52839;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50474 = conformed_args__47920__auto__;
var map__50474__$1 = (((((!((map__50474 == null))))?(((((map__50474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50474):map__50474);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq50471){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50471));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52846 = arguments.length;
var i__4731__auto___52847 = (0);
while(true){
if((i__4731__auto___52847 < len__4730__auto___52846)){
args__4736__auto__.push((arguments[i__4731__auto___52847]));

var G__52848 = (i__4731__auto___52847 + (1));
i__4731__auto___52847 = G__52848;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50482 = conformed_args__47920__auto__;
var map__50482__$1 = (((((!((map__50482 == null))))?(((((map__50482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50482):map__50482);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq50478){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50478));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52856 = arguments.length;
var i__4731__auto___52859 = (0);
while(true){
if((i__4731__auto___52859 < len__4730__auto___52856)){
args__4736__auto__.push((arguments[i__4731__auto___52859]));

var G__52861 = (i__4731__auto___52859 + (1));
i__4731__auto___52859 = G__52861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50495 = conformed_args__47920__auto__;
var map__50495__$1 = (((((!((map__50495 == null))))?(((((map__50495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50495):map__50495);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq50490){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50490));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52869 = arguments.length;
var i__4731__auto___52870 = (0);
while(true){
if((i__4731__auto___52870 < len__4730__auto___52869)){
args__4736__auto__.push((arguments[i__4731__auto___52870]));

var G__52871 = (i__4731__auto___52870 + (1));
i__4731__auto___52870 = G__52871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50507 = conformed_args__47920__auto__;
var map__50507__$1 = (((((!((map__50507 == null))))?(((((map__50507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50507):map__50507);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50507__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50507__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50507__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq50501){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50501));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52875 = arguments.length;
var i__4731__auto___52876 = (0);
while(true){
if((i__4731__auto___52876 < len__4730__auto___52875)){
args__4736__auto__.push((arguments[i__4731__auto___52876]));

var G__52877 = (i__4731__auto___52876 + (1));
i__4731__auto___52876 = G__52877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50522 = conformed_args__47920__auto__;
var map__50522__$1 = (((((!((map__50522 == null))))?(((((map__50522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50522):map__50522);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq50515){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50515));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52879 = arguments.length;
var i__4731__auto___52880 = (0);
while(true){
if((i__4731__auto___52880 < len__4730__auto___52879)){
args__4736__auto__.push((arguments[i__4731__auto___52880]));

var G__52881 = (i__4731__auto___52880 + (1));
i__4731__auto___52880 = G__52881;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50539 = conformed_args__47920__auto__;
var map__50539__$1 = (((((!((map__50539 == null))))?(((((map__50539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50539):map__50539);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50539__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50539__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq50534){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50534));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52885 = arguments.length;
var i__4731__auto___52886 = (0);
while(true){
if((i__4731__auto___52886 < len__4730__auto___52885)){
args__4736__auto__.push((arguments[i__4731__auto___52886]));

var G__52887 = (i__4731__auto___52886 + (1));
i__4731__auto___52886 = G__52887;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50546 = conformed_args__47920__auto__;
var map__50546__$1 = (((((!((map__50546 == null))))?(((((map__50546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50546):map__50546);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq50544){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50544));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52890 = arguments.length;
var i__4731__auto___52891 = (0);
while(true){
if((i__4731__auto___52891 < len__4730__auto___52890)){
args__4736__auto__.push((arguments[i__4731__auto___52891]));

var G__52892 = (i__4731__auto___52891 + (1));
i__4731__auto___52891 = G__52892;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50559 = conformed_args__47920__auto__;
var map__50559__$1 = (((((!((map__50559 == null))))?(((((map__50559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50559):map__50559);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq50555){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50555));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52897 = arguments.length;
var i__4731__auto___52898 = (0);
while(true){
if((i__4731__auto___52898 < len__4730__auto___52897)){
args__4736__auto__.push((arguments[i__4731__auto___52898]));

var G__52899 = (i__4731__auto___52898 + (1));
i__4731__auto___52898 = G__52899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50571 = conformed_args__47920__auto__;
var map__50571__$1 = (((((!((map__50571 == null))))?(((((map__50571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50571):map__50571);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq50569){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52902 = arguments.length;
var i__4731__auto___52903 = (0);
while(true){
if((i__4731__auto___52903 < len__4730__auto___52902)){
args__4736__auto__.push((arguments[i__4731__auto___52903]));

var G__52904 = (i__4731__auto___52903 + (1));
i__4731__auto___52903 = G__52904;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50580 = conformed_args__47920__auto__;
var map__50580__$1 = (((((!((map__50580 == null))))?(((((map__50580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50580):map__50580);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq50578){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50578));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52905 = arguments.length;
var i__4731__auto___52907 = (0);
while(true){
if((i__4731__auto___52907 < len__4730__auto___52905)){
args__4736__auto__.push((arguments[i__4731__auto___52907]));

var G__52908 = (i__4731__auto___52907 + (1));
i__4731__auto___52907 = G__52908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50583 = conformed_args__47920__auto__;
var map__50583__$1 = (((((!((map__50583 == null))))?(((((map__50583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50583):map__50583);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50583__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50583__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50583__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq50582){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50582));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52913 = arguments.length;
var i__4731__auto___52914 = (0);
while(true){
if((i__4731__auto___52914 < len__4730__auto___52913)){
args__4736__auto__.push((arguments[i__4731__auto___52914]));

var G__52915 = (i__4731__auto___52914 + (1));
i__4731__auto___52914 = G__52915;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50587 = conformed_args__47920__auto__;
var map__50587__$1 = (((((!((map__50587 == null))))?(((((map__50587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50587):map__50587);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50587__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50587__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50587__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq50585){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50585));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52917 = arguments.length;
var i__4731__auto___52918 = (0);
while(true){
if((i__4731__auto___52918 < len__4730__auto___52917)){
args__4736__auto__.push((arguments[i__4731__auto___52918]));

var G__52919 = (i__4731__auto___52918 + (1));
i__4731__auto___52918 = G__52919;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50592 = conformed_args__47920__auto__;
var map__50592__$1 = (((((!((map__50592 == null))))?(((((map__50592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50592):map__50592);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq50590){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50590));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52923 = arguments.length;
var i__4731__auto___52924 = (0);
while(true){
if((i__4731__auto___52924 < len__4730__auto___52923)){
args__4736__auto__.push((arguments[i__4731__auto___52924]));

var G__52925 = (i__4731__auto___52924 + (1));
i__4731__auto___52924 = G__52925;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50597 = conformed_args__47920__auto__;
var map__50597__$1 = (((((!((map__50597 == null))))?(((((map__50597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50597):map__50597);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq50596){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50596));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52927 = arguments.length;
var i__4731__auto___52928 = (0);
while(true){
if((i__4731__auto___52928 < len__4730__auto___52927)){
args__4736__auto__.push((arguments[i__4731__auto___52928]));

var G__52930 = (i__4731__auto___52928 + (1));
i__4731__auto___52928 = G__52930;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50605 = conformed_args__47920__auto__;
var map__50605__$1 = (((((!((map__50605 == null))))?(((((map__50605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50605):map__50605);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq50602){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50602));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52933 = arguments.length;
var i__4731__auto___52934 = (0);
while(true){
if((i__4731__auto___52934 < len__4730__auto___52933)){
args__4736__auto__.push((arguments[i__4731__auto___52934]));

var G__52936 = (i__4731__auto___52934 + (1));
i__4731__auto___52934 = G__52936;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50612 = conformed_args__47920__auto__;
var map__50612__$1 = (((((!((map__50612 == null))))?(((((map__50612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50612):map__50612);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq50607){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50607));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52943 = arguments.length;
var i__4731__auto___52944 = (0);
while(true){
if((i__4731__auto___52944 < len__4730__auto___52943)){
args__4736__auto__.push((arguments[i__4731__auto___52944]));

var G__52945 = (i__4731__auto___52944 + (1));
i__4731__auto___52944 = G__52945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50619 = conformed_args__47920__auto__;
var map__50619__$1 = (((((!((map__50619 == null))))?(((((map__50619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50619):map__50619);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq50617){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52954 = arguments.length;
var i__4731__auto___52955 = (0);
while(true){
if((i__4731__auto___52955 < len__4730__auto___52954)){
args__4736__auto__.push((arguments[i__4731__auto___52955]));

var G__52956 = (i__4731__auto___52955 + (1));
i__4731__auto___52955 = G__52956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50626 = conformed_args__47920__auto__;
var map__50626__$1 = (((((!((map__50626 == null))))?(((((map__50626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50626):map__50626);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50626__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50626__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50626__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq50625){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50625));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52961 = arguments.length;
var i__4731__auto___52962 = (0);
while(true){
if((i__4731__auto___52962 < len__4730__auto___52961)){
args__4736__auto__.push((arguments[i__4731__auto___52962]));

var G__52964 = (i__4731__auto___52962 + (1));
i__4731__auto___52962 = G__52964;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50630 = conformed_args__47920__auto__;
var map__50630__$1 = (((((!((map__50630 == null))))?(((((map__50630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50630):map__50630);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq50628){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50628));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52969 = arguments.length;
var i__4731__auto___52970 = (0);
while(true){
if((i__4731__auto___52970 < len__4730__auto___52969)){
args__4736__auto__.push((arguments[i__4731__auto___52970]));

var G__52971 = (i__4731__auto___52970 + (1));
i__4731__auto___52970 = G__52971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50638 = conformed_args__47920__auto__;
var map__50638__$1 = (((((!((map__50638 == null))))?(((((map__50638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50638):map__50638);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq50632){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50632));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52975 = arguments.length;
var i__4731__auto___52976 = (0);
while(true){
if((i__4731__auto___52976 < len__4730__auto___52975)){
args__4736__auto__.push((arguments[i__4731__auto___52976]));

var G__52980 = (i__4731__auto___52976 + (1));
i__4731__auto___52976 = G__52980;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50645 = conformed_args__47920__auto__;
var map__50645__$1 = (((((!((map__50645 == null))))?(((((map__50645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50645):map__50645);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq50642){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50642));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52988 = arguments.length;
var i__4731__auto___52989 = (0);
while(true){
if((i__4731__auto___52989 < len__4730__auto___52988)){
args__4736__auto__.push((arguments[i__4731__auto___52989]));

var G__52990 = (i__4731__auto___52989 + (1));
i__4731__auto___52989 = G__52990;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50658 = conformed_args__47920__auto__;
var map__50658__$1 = (((((!((map__50658 == null))))?(((((map__50658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50658):map__50658);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq50654){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50654));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52994 = arguments.length;
var i__4731__auto___52995 = (0);
while(true){
if((i__4731__auto___52995 < len__4730__auto___52994)){
args__4736__auto__.push((arguments[i__4731__auto___52995]));

var G__52996 = (i__4731__auto___52995 + (1));
i__4731__auto___52995 = G__52996;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50661 = conformed_args__47920__auto__;
var map__50661__$1 = (((((!((map__50661 == null))))?(((((map__50661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50661):map__50661);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq50660){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50660));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53003 = arguments.length;
var i__4731__auto___53004 = (0);
while(true){
if((i__4731__auto___53004 < len__4730__auto___53003)){
args__4736__auto__.push((arguments[i__4731__auto___53004]));

var G__53005 = (i__4731__auto___53004 + (1));
i__4731__auto___53004 = G__53005;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50664 = conformed_args__47920__auto__;
var map__50664__$1 = (((((!((map__50664 == null))))?(((((map__50664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50664):map__50664);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq50663){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50663));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53015 = arguments.length;
var i__4731__auto___53016 = (0);
while(true){
if((i__4731__auto___53016 < len__4730__auto___53015)){
args__4736__auto__.push((arguments[i__4731__auto___53016]));

var G__53017 = (i__4731__auto___53016 + (1));
i__4731__auto___53016 = G__53017;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50673 = conformed_args__47920__auto__;
var map__50673__$1 = (((((!((map__50673 == null))))?(((((map__50673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50673):map__50673);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq50672){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50672));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53019 = arguments.length;
var i__4731__auto___53020 = (0);
while(true){
if((i__4731__auto___53020 < len__4730__auto___53019)){
args__4736__auto__.push((arguments[i__4731__auto___53020]));

var G__53022 = (i__4731__auto___53020 + (1));
i__4731__auto___53020 = G__53022;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50681 = conformed_args__47920__auto__;
var map__50681__$1 = (((((!((map__50681 == null))))?(((((map__50681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50681):map__50681);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq50675){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53028 = arguments.length;
var i__4731__auto___53029 = (0);
while(true){
if((i__4731__auto___53029 < len__4730__auto___53028)){
args__4736__auto__.push((arguments[i__4731__auto___53029]));

var G__53031 = (i__4731__auto___53029 + (1));
i__4731__auto___53029 = G__53031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50685 = conformed_args__47920__auto__;
var map__50685__$1 = (((((!((map__50685 == null))))?(((((map__50685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50685):map__50685);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq50684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50684));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53037 = arguments.length;
var i__4731__auto___53038 = (0);
while(true){
if((i__4731__auto___53038 < len__4730__auto___53037)){
args__4736__auto__.push((arguments[i__4731__auto___53038]));

var G__53039 = (i__4731__auto___53038 + (1));
i__4731__auto___53038 = G__53039;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50694 = conformed_args__47920__auto__;
var map__50694__$1 = (((((!((map__50694 == null))))?(((((map__50694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50694):map__50694);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq50693){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50693));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53043 = arguments.length;
var i__4731__auto___53044 = (0);
while(true){
if((i__4731__auto___53044 < len__4730__auto___53043)){
args__4736__auto__.push((arguments[i__4731__auto___53044]));

var G__53045 = (i__4731__auto___53044 + (1));
i__4731__auto___53044 = G__53045;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50703 = conformed_args__47920__auto__;
var map__50703__$1 = (((((!((map__50703 == null))))?(((((map__50703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50703):map__50703);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq50699){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50699));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53051 = arguments.length;
var i__4731__auto___53053 = (0);
while(true){
if((i__4731__auto___53053 < len__4730__auto___53051)){
args__4736__auto__.push((arguments[i__4731__auto___53053]));

var G__53055 = (i__4731__auto___53053 + (1));
i__4731__auto___53053 = G__53055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50710 = conformed_args__47920__auto__;
var map__50710__$1 = (((((!((map__50710 == null))))?(((((map__50710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50710):map__50710);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50710__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50710__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50710__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq50705){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50705));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53060 = arguments.length;
var i__4731__auto___53061 = (0);
while(true){
if((i__4731__auto___53061 < len__4730__auto___53060)){
args__4736__auto__.push((arguments[i__4731__auto___53061]));

var G__53062 = (i__4731__auto___53061 + (1));
i__4731__auto___53061 = G__53062;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50718 = conformed_args__47920__auto__;
var map__50718__$1 = (((((!((map__50718 == null))))?(((((map__50718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50718):map__50718);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq50714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50714));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53066 = arguments.length;
var i__4731__auto___53067 = (0);
while(true){
if((i__4731__auto___53067 < len__4730__auto___53066)){
args__4736__auto__.push((arguments[i__4731__auto___53067]));

var G__53068 = (i__4731__auto___53067 + (1));
i__4731__auto___53067 = G__53068;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50724 = conformed_args__47920__auto__;
var map__50724__$1 = (((((!((map__50724 == null))))?(((((map__50724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50724):map__50724);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq50723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53072 = arguments.length;
var i__4731__auto___53073 = (0);
while(true){
if((i__4731__auto___53073 < len__4730__auto___53072)){
args__4736__auto__.push((arguments[i__4731__auto___53073]));

var G__53074 = (i__4731__auto___53073 + (1));
i__4731__auto___53073 = G__53074;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50733 = conformed_args__47920__auto__;
var map__50733__$1 = (((((!((map__50733 == null))))?(((((map__50733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50733):map__50733);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq50731){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50731));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53086 = arguments.length;
var i__4731__auto___53087 = (0);
while(true){
if((i__4731__auto___53087 < len__4730__auto___53086)){
args__4736__auto__.push((arguments[i__4731__auto___53087]));

var G__53088 = (i__4731__auto___53087 + (1));
i__4731__auto___53087 = G__53088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50741 = conformed_args__47920__auto__;
var map__50741__$1 = (((((!((map__50741 == null))))?(((((map__50741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50741):map__50741);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq50740){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50740));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53089 = arguments.length;
var i__4731__auto___53090 = (0);
while(true){
if((i__4731__auto___53090 < len__4730__auto___53089)){
args__4736__auto__.push((arguments[i__4731__auto___53090]));

var G__53091 = (i__4731__auto___53090 + (1));
i__4731__auto___53090 = G__53091;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50744 = conformed_args__47920__auto__;
var map__50744__$1 = (((((!((map__50744 == null))))?(((((map__50744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50744):map__50744);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq50743){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53094 = arguments.length;
var i__4731__auto___53095 = (0);
while(true){
if((i__4731__auto___53095 < len__4730__auto___53094)){
args__4736__auto__.push((arguments[i__4731__auto___53095]));

var G__53096 = (i__4731__auto___53095 + (1));
i__4731__auto___53095 = G__53096;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50747 = conformed_args__47920__auto__;
var map__50747__$1 = (((((!((map__50747 == null))))?(((((map__50747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50747):map__50747);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq50746){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50746));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53104 = arguments.length;
var i__4731__auto___53105 = (0);
while(true){
if((i__4731__auto___53105 < len__4730__auto___53104)){
args__4736__auto__.push((arguments[i__4731__auto___53105]));

var G__53106 = (i__4731__auto___53105 + (1));
i__4731__auto___53105 = G__53106;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50752 = conformed_args__47920__auto__;
var map__50752__$1 = (((((!((map__50752 == null))))?(((((map__50752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50752):map__50752);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq50751){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50751));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53107 = arguments.length;
var i__4731__auto___53108 = (0);
while(true){
if((i__4731__auto___53108 < len__4730__auto___53107)){
args__4736__auto__.push((arguments[i__4731__auto___53108]));

var G__53109 = (i__4731__auto___53108 + (1));
i__4731__auto___53108 = G__53109;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50761 = conformed_args__47920__auto__;
var map__50761__$1 = (((((!((map__50761 == null))))?(((((map__50761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50761):map__50761);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50761__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50761__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50761__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq50760){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50760));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53112 = arguments.length;
var i__4731__auto___53113 = (0);
while(true){
if((i__4731__auto___53113 < len__4730__auto___53112)){
args__4736__auto__.push((arguments[i__4731__auto___53113]));

var G__53117 = (i__4731__auto___53113 + (1));
i__4731__auto___53113 = G__53117;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50767 = conformed_args__47920__auto__;
var map__50767__$1 = (((((!((map__50767 == null))))?(((((map__50767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50767):map__50767);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq50763){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50763));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53122 = arguments.length;
var i__4731__auto___53123 = (0);
while(true){
if((i__4731__auto___53123 < len__4730__auto___53122)){
args__4736__auto__.push((arguments[i__4731__auto___53123]));

var G__53124 = (i__4731__auto___53123 + (1));
i__4731__auto___53123 = G__53124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50776 = conformed_args__47920__auto__;
var map__50776__$1 = (((((!((map__50776 == null))))?(((((map__50776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50776):map__50776);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq50773){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50773));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53126 = arguments.length;
var i__4731__auto___53127 = (0);
while(true){
if((i__4731__auto___53127 < len__4730__auto___53126)){
args__4736__auto__.push((arguments[i__4731__auto___53127]));

var G__53129 = (i__4731__auto___53127 + (1));
i__4731__auto___53127 = G__53129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50792 = conformed_args__47920__auto__;
var map__50792__$1 = (((((!((map__50792 == null))))?(((((map__50792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50792):map__50792);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq50787){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50787));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53132 = arguments.length;
var i__4731__auto___53136 = (0);
while(true){
if((i__4731__auto___53136 < len__4730__auto___53132)){
args__4736__auto__.push((arguments[i__4731__auto___53136]));

var G__53137 = (i__4731__auto___53136 + (1));
i__4731__auto___53136 = G__53137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50808 = conformed_args__47920__auto__;
var map__50808__$1 = (((((!((map__50808 == null))))?(((((map__50808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50808):map__50808);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq50796){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53142 = arguments.length;
var i__4731__auto___53143 = (0);
while(true){
if((i__4731__auto___53143 < len__4730__auto___53142)){
args__4736__auto__.push((arguments[i__4731__auto___53143]));

var G__53144 = (i__4731__auto___53143 + (1));
i__4731__auto___53143 = G__53144;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50826 = conformed_args__47920__auto__;
var map__50826__$1 = (((((!((map__50826 == null))))?(((((map__50826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50826):map__50826);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50826__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50826__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq50820){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50820));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53148 = arguments.length;
var i__4731__auto___53149 = (0);
while(true){
if((i__4731__auto___53149 < len__4730__auto___53148)){
args__4736__auto__.push((arguments[i__4731__auto___53149]));

var G__53154 = (i__4731__auto___53149 + (1));
i__4731__auto___53149 = G__53154;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50838 = conformed_args__47920__auto__;
var map__50838__$1 = (((((!((map__50838 == null))))?(((((map__50838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50838):map__50838);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50838__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq50834){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53155 = arguments.length;
var i__4731__auto___53156 = (0);
while(true){
if((i__4731__auto___53156 < len__4730__auto___53155)){
args__4736__auto__.push((arguments[i__4731__auto___53156]));

var G__53157 = (i__4731__auto___53156 + (1));
i__4731__auto___53156 = G__53157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50849 = conformed_args__47920__auto__;
var map__50849__$1 = (((((!((map__50849 == null))))?(((((map__50849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50849):map__50849);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq50845){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50845));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53161 = arguments.length;
var i__4731__auto___53162 = (0);
while(true){
if((i__4731__auto___53162 < len__4730__auto___53161)){
args__4736__auto__.push((arguments[i__4731__auto___53162]));

var G__53163 = (i__4731__auto___53162 + (1));
i__4731__auto___53162 = G__53163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50862 = conformed_args__47920__auto__;
var map__50862__$1 = (((((!((map__50862 == null))))?(((((map__50862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50862):map__50862);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50862__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50862__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50862__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq50861){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50861));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53164 = arguments.length;
var i__4731__auto___53165 = (0);
while(true){
if((i__4731__auto___53165 < len__4730__auto___53164)){
args__4736__auto__.push((arguments[i__4731__auto___53165]));

var G__53166 = (i__4731__auto___53165 + (1));
i__4731__auto___53165 = G__53166;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50882 = conformed_args__47920__auto__;
var map__50882__$1 = (((((!((map__50882 == null))))?(((((map__50882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50882):map__50882);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50882__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50882__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq50873){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50873));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53171 = arguments.length;
var i__4731__auto___53173 = (0);
while(true){
if((i__4731__auto___53173 < len__4730__auto___53171)){
args__4736__auto__.push((arguments[i__4731__auto___53173]));

var G__53174 = (i__4731__auto___53173 + (1));
i__4731__auto___53173 = G__53174;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50892 = conformed_args__47920__auto__;
var map__50892__$1 = (((((!((map__50892 == null))))?(((((map__50892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50892):map__50892);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50892__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq50887){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50887));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53177 = arguments.length;
var i__4731__auto___53178 = (0);
while(true){
if((i__4731__auto___53178 < len__4730__auto___53177)){
args__4736__auto__.push((arguments[i__4731__auto___53178]));

var G__53179 = (i__4731__auto___53178 + (1));
i__4731__auto___53178 = G__53179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50906 = conformed_args__47920__auto__;
var map__50906__$1 = (((((!((map__50906 == null))))?(((((map__50906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50906):map__50906);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50906__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50906__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50906__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq50904){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50904));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53183 = arguments.length;
var i__4731__auto___53184 = (0);
while(true){
if((i__4731__auto___53184 < len__4730__auto___53183)){
args__4736__auto__.push((arguments[i__4731__auto___53184]));

var G__53185 = (i__4731__auto___53184 + (1));
i__4731__auto___53184 = G__53185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50915 = conformed_args__47920__auto__;
var map__50915__$1 = (((((!((map__50915 == null))))?(((((map__50915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50915):map__50915);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50915__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50915__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50915__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq50914){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50914));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53187 = arguments.length;
var i__4731__auto___53188 = (0);
while(true){
if((i__4731__auto___53188 < len__4730__auto___53187)){
args__4736__auto__.push((arguments[i__4731__auto___53188]));

var G__53189 = (i__4731__auto___53188 + (1));
i__4731__auto___53188 = G__53189;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50923 = conformed_args__47920__auto__;
var map__50923__$1 = (((((!((map__50923 == null))))?(((((map__50923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50923):map__50923);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq50920){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50920));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53191 = arguments.length;
var i__4731__auto___53192 = (0);
while(true){
if((i__4731__auto___53192 < len__4730__auto___53191)){
args__4736__auto__.push((arguments[i__4731__auto___53192]));

var G__53194 = (i__4731__auto___53192 + (1));
i__4731__auto___53192 = G__53194;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50931 = conformed_args__47920__auto__;
var map__50931__$1 = (((((!((map__50931 == null))))?(((((map__50931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50931):map__50931);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50931__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50931__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50931__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq50928){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50928));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53197 = arguments.length;
var i__4731__auto___53199 = (0);
while(true){
if((i__4731__auto___53199 < len__4730__auto___53197)){
args__4736__auto__.push((arguments[i__4731__auto___53199]));

var G__53201 = (i__4731__auto___53199 + (1));
i__4731__auto___53199 = G__53201;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50937 = conformed_args__47920__auto__;
var map__50937__$1 = (((((!((map__50937 == null))))?(((((map__50937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50937):map__50937);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq50936){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50936));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53204 = arguments.length;
var i__4731__auto___53205 = (0);
while(true){
if((i__4731__auto___53205 < len__4730__auto___53204)){
args__4736__auto__.push((arguments[i__4731__auto___53205]));

var G__53206 = (i__4731__auto___53205 + (1));
i__4731__auto___53205 = G__53206;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50943 = conformed_args__47920__auto__;
var map__50943__$1 = (((((!((map__50943 == null))))?(((((map__50943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50943):map__50943);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq50941){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50941));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53209 = arguments.length;
var i__4731__auto___53210 = (0);
while(true){
if((i__4731__auto___53210 < len__4730__auto___53209)){
args__4736__auto__.push((arguments[i__4731__auto___53210]));

var G__53211 = (i__4731__auto___53210 + (1));
i__4731__auto___53210 = G__53211;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50956 = conformed_args__47920__auto__;
var map__50956__$1 = (((((!((map__50956 == null))))?(((((map__50956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50956):map__50956);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq50950){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50950));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53212 = arguments.length;
var i__4731__auto___53213 = (0);
while(true){
if((i__4731__auto___53213 < len__4730__auto___53212)){
args__4736__auto__.push((arguments[i__4731__auto___53213]));

var G__53214 = (i__4731__auto___53213 + (1));
i__4731__auto___53213 = G__53214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50966 = conformed_args__47920__auto__;
var map__50966__$1 = (((((!((map__50966 == null))))?(((((map__50966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50966):map__50966);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50966__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50966__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq50965){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50965));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53215 = arguments.length;
var i__4731__auto___53216 = (0);
while(true){
if((i__4731__auto___53216 < len__4730__auto___53215)){
args__4736__auto__.push((arguments[i__4731__auto___53216]));

var G__53217 = (i__4731__auto___53216 + (1));
i__4731__auto___53216 = G__53217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50975 = conformed_args__47920__auto__;
var map__50975__$1 = (((((!((map__50975 == null))))?(((((map__50975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50975):map__50975);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq50974){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50974));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53220 = arguments.length;
var i__4731__auto___53222 = (0);
while(true){
if((i__4731__auto___53222 < len__4730__auto___53220)){
args__4736__auto__.push((arguments[i__4731__auto___53222]));

var G__53223 = (i__4731__auto___53222 + (1));
i__4731__auto___53222 = G__53223;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50980 = conformed_args__47920__auto__;
var map__50980__$1 = (((((!((map__50980 == null))))?(((((map__50980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50980):map__50980);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50980__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50980__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq50979){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50979));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53227 = arguments.length;
var i__4731__auto___53228 = (0);
while(true){
if((i__4731__auto___53228 < len__4730__auto___53227)){
args__4736__auto__.push((arguments[i__4731__auto___53228]));

var G__53229 = (i__4731__auto___53228 + (1));
i__4731__auto___53228 = G__53229;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50988 = conformed_args__47920__auto__;
var map__50988__$1 = (((((!((map__50988 == null))))?(((((map__50988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50988):map__50988);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq50984){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50984));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53233 = arguments.length;
var i__4731__auto___53234 = (0);
while(true){
if((i__4731__auto___53234 < len__4730__auto___53233)){
args__4736__auto__.push((arguments[i__4731__auto___53234]));

var G__53235 = (i__4731__auto___53234 + (1));
i__4731__auto___53234 = G__53235;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50998 = conformed_args__47920__auto__;
var map__50998__$1 = (((((!((map__50998 == null))))?(((((map__50998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50998):map__50998);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50998__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50998__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50998__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq50996){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50996));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53239 = arguments.length;
var i__4731__auto___53240 = (0);
while(true){
if((i__4731__auto___53240 < len__4730__auto___53239)){
args__4736__auto__.push((arguments[i__4731__auto___53240]));

var G__53241 = (i__4731__auto___53240 + (1));
i__4731__auto___53240 = G__53241;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51009 = conformed_args__47920__auto__;
var map__51009__$1 = (((((!((map__51009 == null))))?(((((map__51009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51009):map__51009);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq51006){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53247 = arguments.length;
var i__4731__auto___53248 = (0);
while(true){
if((i__4731__auto___53248 < len__4730__auto___53247)){
args__4736__auto__.push((arguments[i__4731__auto___53248]));

var G__53250 = (i__4731__auto___53248 + (1));
i__4731__auto___53248 = G__53250;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51020 = conformed_args__47920__auto__;
var map__51020__$1 = (((((!((map__51020 == null))))?(((((map__51020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51020):map__51020);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51020__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51020__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq51014){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53268 = arguments.length;
var i__4731__auto___53269 = (0);
while(true){
if((i__4731__auto___53269 < len__4730__auto___53268)){
args__4736__auto__.push((arguments[i__4731__auto___53269]));

var G__53271 = (i__4731__auto___53269 + (1));
i__4731__auto___53269 = G__53271;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51028 = conformed_args__47920__auto__;
var map__51028__$1 = (((((!((map__51028 == null))))?(((((map__51028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51028):map__51028);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51028__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51028__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51028__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq51026){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51026));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53272 = arguments.length;
var i__4731__auto___53273 = (0);
while(true){
if((i__4731__auto___53273 < len__4730__auto___53272)){
args__4736__auto__.push((arguments[i__4731__auto___53273]));

var G__53274 = (i__4731__auto___53273 + (1));
i__4731__auto___53273 = G__53274;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51034 = conformed_args__47920__auto__;
var map__51034__$1 = (((((!((map__51034 == null))))?(((((map__51034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51034):map__51034);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51034__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51034__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51034__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq51033){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51033));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53279 = arguments.length;
var i__4731__auto___53280 = (0);
while(true){
if((i__4731__auto___53280 < len__4730__auto___53279)){
args__4736__auto__.push((arguments[i__4731__auto___53280]));

var G__53281 = (i__4731__auto___53280 + (1));
i__4731__auto___53280 = G__53281;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51046 = conformed_args__47920__auto__;
var map__51046__$1 = (((((!((map__51046 == null))))?(((((map__51046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51046):map__51046);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq51040){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51040));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53282 = arguments.length;
var i__4731__auto___53283 = (0);
while(true){
if((i__4731__auto___53283 < len__4730__auto___53282)){
args__4736__auto__.push((arguments[i__4731__auto___53283]));

var G__53284 = (i__4731__auto___53283 + (1));
i__4731__auto___53283 = G__53284;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51051 = conformed_args__47920__auto__;
var map__51051__$1 = (((((!((map__51051 == null))))?(((((map__51051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51051):map__51051);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq51049){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51049));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53286 = arguments.length;
var i__4731__auto___53287 = (0);
while(true){
if((i__4731__auto___53287 < len__4730__auto___53286)){
args__4736__auto__.push((arguments[i__4731__auto___53287]));

var G__53288 = (i__4731__auto___53287 + (1));
i__4731__auto___53287 = G__53288;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51058 = conformed_args__47920__auto__;
var map__51058__$1 = (((((!((map__51058 == null))))?(((((map__51058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51058):map__51058);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq51054){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51054));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53291 = arguments.length;
var i__4731__auto___53292 = (0);
while(true){
if((i__4731__auto___53292 < len__4730__auto___53291)){
args__4736__auto__.push((arguments[i__4731__auto___53292]));

var G__53293 = (i__4731__auto___53292 + (1));
i__4731__auto___53292 = G__53293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51066 = conformed_args__47920__auto__;
var map__51066__$1 = (((((!((map__51066 == null))))?(((((map__51066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51066):map__51066);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51066__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51066__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51066__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq51064){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51064));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53295 = arguments.length;
var i__4731__auto___53296 = (0);
while(true){
if((i__4731__auto___53296 < len__4730__auto___53295)){
args__4736__auto__.push((arguments[i__4731__auto___53296]));

var G__53297 = (i__4731__auto___53296 + (1));
i__4731__auto___53296 = G__53297;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51076 = conformed_args__47920__auto__;
var map__51076__$1 = (((((!((map__51076 == null))))?(((((map__51076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51076):map__51076);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51076__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51076__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51076__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq51072){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51072));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53298 = arguments.length;
var i__4731__auto___53299 = (0);
while(true){
if((i__4731__auto___53299 < len__4730__auto___53298)){
args__4736__auto__.push((arguments[i__4731__auto___53299]));

var G__53300 = (i__4731__auto___53299 + (1));
i__4731__auto___53299 = G__53300;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51087 = conformed_args__47920__auto__;
var map__51087__$1 = (((((!((map__51087 == null))))?(((((map__51087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51087):map__51087);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq51081){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51081));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53305 = arguments.length;
var i__4731__auto___53306 = (0);
while(true){
if((i__4731__auto___53306 < len__4730__auto___53305)){
args__4736__auto__.push((arguments[i__4731__auto___53306]));

var G__53307 = (i__4731__auto___53306 + (1));
i__4731__auto___53306 = G__53307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51095 = conformed_args__47920__auto__;
var map__51095__$1 = (((((!((map__51095 == null))))?(((((map__51095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51095):map__51095);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq51091){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51091));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53312 = arguments.length;
var i__4731__auto___53313 = (0);
while(true){
if((i__4731__auto___53313 < len__4730__auto___53312)){
args__4736__auto__.push((arguments[i__4731__auto___53313]));

var G__53315 = (i__4731__auto___53313 + (1));
i__4731__auto___53313 = G__53315;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51101 = conformed_args__47920__auto__;
var map__51101__$1 = (((((!((map__51101 == null))))?(((((map__51101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51101):map__51101);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq51100){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51100));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53341 = arguments.length;
var i__4731__auto___53342 = (0);
while(true){
if((i__4731__auto___53342 < len__4730__auto___53341)){
args__4736__auto__.push((arguments[i__4731__auto___53342]));

var G__53344 = (i__4731__auto___53342 + (1));
i__4731__auto___53342 = G__53344;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51106 = conformed_args__47920__auto__;
var map__51106__$1 = (((((!((map__51106 == null))))?(((((map__51106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51106):map__51106);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq51105){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51105));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53353 = arguments.length;
var i__4731__auto___53354 = (0);
while(true){
if((i__4731__auto___53354 < len__4730__auto___53353)){
args__4736__auto__.push((arguments[i__4731__auto___53354]));

var G__53358 = (i__4731__auto___53354 + (1));
i__4731__auto___53354 = G__53358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51116 = conformed_args__47920__auto__;
var map__51116__$1 = (((((!((map__51116 == null))))?(((((map__51116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51116):map__51116);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq51111){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51111));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53380 = arguments.length;
var i__4731__auto___53385 = (0);
while(true){
if((i__4731__auto___53385 < len__4730__auto___53380)){
args__4736__auto__.push((arguments[i__4731__auto___53385]));

var G__53386 = (i__4731__auto___53385 + (1));
i__4731__auto___53385 = G__53386;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51122 = conformed_args__47920__auto__;
var map__51122__$1 = (((((!((map__51122 == null))))?(((((map__51122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51122):map__51122);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq51118){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51118));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53409 = arguments.length;
var i__4731__auto___53410 = (0);
while(true){
if((i__4731__auto___53410 < len__4730__auto___53409)){
args__4736__auto__.push((arguments[i__4731__auto___53410]));

var G__53412 = (i__4731__auto___53410 + (1));
i__4731__auto___53410 = G__53412;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51131 = conformed_args__47920__auto__;
var map__51131__$1 = (((((!((map__51131 == null))))?(((((map__51131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51131):map__51131);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq51127){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51127));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53438 = arguments.length;
var i__4731__auto___53439 = (0);
while(true){
if((i__4731__auto___53439 < len__4730__auto___53438)){
args__4736__auto__.push((arguments[i__4731__auto___53439]));

var G__53440 = (i__4731__auto___53439 + (1));
i__4731__auto___53439 = G__53440;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51140 = conformed_args__47920__auto__;
var map__51140__$1 = (((((!((map__51140 == null))))?(((((map__51140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51140):map__51140);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq51136){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51136));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53448 = arguments.length;
var i__4731__auto___53449 = (0);
while(true){
if((i__4731__auto___53449 < len__4730__auto___53448)){
args__4736__auto__.push((arguments[i__4731__auto___53449]));

var G__53450 = (i__4731__auto___53449 + (1));
i__4731__auto___53449 = G__53450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51149 = conformed_args__47920__auto__;
var map__51149__$1 = (((((!((map__51149 == null))))?(((((map__51149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51149):map__51149);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq51145){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51145));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53452 = arguments.length;
var i__4731__auto___53453 = (0);
while(true){
if((i__4731__auto___53453 < len__4730__auto___53452)){
args__4736__auto__.push((arguments[i__4731__auto___53453]));

var G__53454 = (i__4731__auto___53453 + (1));
i__4731__auto___53453 = G__53454;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51156 = conformed_args__47920__auto__;
var map__51156__$1 = (((((!((map__51156 == null))))?(((((map__51156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51156):map__51156);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq51155){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51155));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53459 = arguments.length;
var i__4731__auto___53460 = (0);
while(true){
if((i__4731__auto___53460 < len__4730__auto___53459)){
args__4736__auto__.push((arguments[i__4731__auto___53460]));

var G__53463 = (i__4731__auto___53460 + (1));
i__4731__auto___53460 = G__53463;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51165 = conformed_args__47920__auto__;
var map__51165__$1 = (((((!((map__51165 == null))))?(((((map__51165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51165):map__51165);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq51161){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51161));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53470 = arguments.length;
var i__4731__auto___53471 = (0);
while(true){
if((i__4731__auto___53471 < len__4730__auto___53470)){
args__4736__auto__.push((arguments[i__4731__auto___53471]));

var G__53472 = (i__4731__auto___53471 + (1));
i__4731__auto___53471 = G__53472;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51182 = conformed_args__47920__auto__;
var map__51182__$1 = (((((!((map__51182 == null))))?(((((map__51182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51182):map__51182);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq51178){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51178));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53473 = arguments.length;
var i__4731__auto___53474 = (0);
while(true){
if((i__4731__auto___53474 < len__4730__auto___53473)){
args__4736__auto__.push((arguments[i__4731__auto___53474]));

var G__53475 = (i__4731__auto___53474 + (1));
i__4731__auto___53474 = G__53475;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51193 = conformed_args__47920__auto__;
var map__51193__$1 = (((((!((map__51193 == null))))?(((((map__51193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51193):map__51193);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq51189){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51189));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53480 = arguments.length;
var i__4731__auto___53481 = (0);
while(true){
if((i__4731__auto___53481 < len__4730__auto___53480)){
args__4736__auto__.push((arguments[i__4731__auto___53481]));

var G__53482 = (i__4731__auto___53481 + (1));
i__4731__auto___53481 = G__53482;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51201 = conformed_args__47920__auto__;
var map__51201__$1 = (((((!((map__51201 == null))))?(((((map__51201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51201):map__51201);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq51199){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51199));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53485 = arguments.length;
var i__4731__auto___53486 = (0);
while(true){
if((i__4731__auto___53486 < len__4730__auto___53485)){
args__4736__auto__.push((arguments[i__4731__auto___53486]));

var G__53487 = (i__4731__auto___53486 + (1));
i__4731__auto___53486 = G__53487;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51210 = conformed_args__47920__auto__;
var map__51210__$1 = (((((!((map__51210 == null))))?(((((map__51210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51210):map__51210);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq51206){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51206));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53488 = arguments.length;
var i__4731__auto___53489 = (0);
while(true){
if((i__4731__auto___53489 < len__4730__auto___53488)){
args__4736__auto__.push((arguments[i__4731__auto___53489]));

var G__53490 = (i__4731__auto___53489 + (1));
i__4731__auto___53489 = G__53490;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51217 = conformed_args__47920__auto__;
var map__51217__$1 = (((((!((map__51217 == null))))?(((((map__51217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51217):map__51217);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq51215){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51215));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53491 = arguments.length;
var i__4731__auto___53492 = (0);
while(true){
if((i__4731__auto___53492 < len__4730__auto___53491)){
args__4736__auto__.push((arguments[i__4731__auto___53492]));

var G__53493 = (i__4731__auto___53492 + (1));
i__4731__auto___53492 = G__53493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51223 = conformed_args__47920__auto__;
var map__51223__$1 = (((((!((map__51223 == null))))?(((((map__51223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51223):map__51223);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq51221){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51221));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53495 = arguments.length;
var i__4731__auto___53496 = (0);
while(true){
if((i__4731__auto___53496 < len__4730__auto___53495)){
args__4736__auto__.push((arguments[i__4731__auto___53496]));

var G__53497 = (i__4731__auto___53496 + (1));
i__4731__auto___53496 = G__53497;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51231 = conformed_args__47920__auto__;
var map__51231__$1 = (((((!((map__51231 == null))))?(((((map__51231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51231):map__51231);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq51230){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51230));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53502 = arguments.length;
var i__4731__auto___53503 = (0);
while(true){
if((i__4731__auto___53503 < len__4730__auto___53502)){
args__4736__auto__.push((arguments[i__4731__auto___53503]));

var G__53504 = (i__4731__auto___53503 + (1));
i__4731__auto___53503 = G__53504;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51240 = conformed_args__47920__auto__;
var map__51240__$1 = (((((!((map__51240 == null))))?(((((map__51240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51240):map__51240);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51240__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51240__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51240__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq51236){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51236));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53505 = arguments.length;
var i__4731__auto___53506 = (0);
while(true){
if((i__4731__auto___53506 < len__4730__auto___53505)){
args__4736__auto__.push((arguments[i__4731__auto___53506]));

var G__53507 = (i__4731__auto___53506 + (1));
i__4731__auto___53506 = G__53507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51249 = conformed_args__47920__auto__;
var map__51249__$1 = (((((!((map__51249 == null))))?(((((map__51249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51249):map__51249);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq51247){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51247));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53508 = arguments.length;
var i__4731__auto___53509 = (0);
while(true){
if((i__4731__auto___53509 < len__4730__auto___53508)){
args__4736__auto__.push((arguments[i__4731__auto___53509]));

var G__53510 = (i__4731__auto___53509 + (1));
i__4731__auto___53509 = G__53510;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51259 = conformed_args__47920__auto__;
var map__51259__$1 = (((((!((map__51259 == null))))?(((((map__51259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51259):map__51259);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq51252){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51252));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53515 = arguments.length;
var i__4731__auto___53516 = (0);
while(true){
if((i__4731__auto___53516 < len__4730__auto___53515)){
args__4736__auto__.push((arguments[i__4731__auto___53516]));

var G__53517 = (i__4731__auto___53516 + (1));
i__4731__auto___53516 = G__53517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51266 = conformed_args__47920__auto__;
var map__51266__$1 = (((((!((map__51266 == null))))?(((((map__51266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51266):map__51266);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq51262){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51262));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53519 = arguments.length;
var i__4731__auto___53520 = (0);
while(true){
if((i__4731__auto___53520 < len__4730__auto___53519)){
args__4736__auto__.push((arguments[i__4731__auto___53520]));

var G__53521 = (i__4731__auto___53520 + (1));
i__4731__auto___53520 = G__53521;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51273 = conformed_args__47920__auto__;
var map__51273__$1 = (((((!((map__51273 == null))))?(((((map__51273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51273):map__51273);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51273__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51273__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51273__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq51269){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51269));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53525 = arguments.length;
var i__4731__auto___53526 = (0);
while(true){
if((i__4731__auto___53526 < len__4730__auto___53525)){
args__4736__auto__.push((arguments[i__4731__auto___53526]));

var G__53527 = (i__4731__auto___53526 + (1));
i__4731__auto___53526 = G__53527;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51292 = conformed_args__47920__auto__;
var map__51292__$1 = (((((!((map__51292 == null))))?(((((map__51292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51292):map__51292);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq51290){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51290));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53531 = arguments.length;
var i__4731__auto___53532 = (0);
while(true){
if((i__4731__auto___53532 < len__4730__auto___53531)){
args__4736__auto__.push((arguments[i__4731__auto___53532]));

var G__53533 = (i__4731__auto___53532 + (1));
i__4731__auto___53532 = G__53533;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51299 = conformed_args__47920__auto__;
var map__51299__$1 = (((((!((map__51299 == null))))?(((((map__51299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51299):map__51299);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq51297){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51297));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53537 = arguments.length;
var i__4731__auto___53538 = (0);
while(true){
if((i__4731__auto___53538 < len__4730__auto___53537)){
args__4736__auto__.push((arguments[i__4731__auto___53538]));

var G__53539 = (i__4731__auto___53538 + (1));
i__4731__auto___53538 = G__53539;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51306 = conformed_args__47920__auto__;
var map__51306__$1 = (((((!((map__51306 == null))))?(((((map__51306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51306):map__51306);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq51303){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51303));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53543 = arguments.length;
var i__4731__auto___53544 = (0);
while(true){
if((i__4731__auto___53544 < len__4730__auto___53543)){
args__4736__auto__.push((arguments[i__4731__auto___53544]));

var G__53545 = (i__4731__auto___53544 + (1));
i__4731__auto___53544 = G__53545;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51313 = conformed_args__47920__auto__;
var map__51313__$1 = (((((!((map__51313 == null))))?(((((map__51313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51313):map__51313);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq51310){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51310));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53548 = arguments.length;
var i__4731__auto___53549 = (0);
while(true){
if((i__4731__auto___53549 < len__4730__auto___53548)){
args__4736__auto__.push((arguments[i__4731__auto___53549]));

var G__53550 = (i__4731__auto___53549 + (1));
i__4731__auto___53549 = G__53550;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51319 = conformed_args__47920__auto__;
var map__51319__$1 = (((((!((map__51319 == null))))?(((((map__51319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51319):map__51319);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq51317){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51317));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53551 = arguments.length;
var i__4731__auto___53552 = (0);
while(true){
if((i__4731__auto___53552 < len__4730__auto___53551)){
args__4736__auto__.push((arguments[i__4731__auto___53552]));

var G__53553 = (i__4731__auto___53552 + (1));
i__4731__auto___53552 = G__53553;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51327 = conformed_args__47920__auto__;
var map__51327__$1 = (((((!((map__51327 == null))))?(((((map__51327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51327):map__51327);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq51325){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51325));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53556 = arguments.length;
var i__4731__auto___53557 = (0);
while(true){
if((i__4731__auto___53557 < len__4730__auto___53556)){
args__4736__auto__.push((arguments[i__4731__auto___53557]));

var G__53558 = (i__4731__auto___53557 + (1));
i__4731__auto___53557 = G__53558;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51333 = conformed_args__47920__auto__;
var map__51333__$1 = (((((!((map__51333 == null))))?(((((map__51333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51333):map__51333);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51333__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51333__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51333__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq51331){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51331));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53561 = arguments.length;
var i__4731__auto___53562 = (0);
while(true){
if((i__4731__auto___53562 < len__4730__auto___53561)){
args__4736__auto__.push((arguments[i__4731__auto___53562]));

var G__53563 = (i__4731__auto___53562 + (1));
i__4731__auto___53562 = G__53563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51340 = conformed_args__47920__auto__;
var map__51340__$1 = (((((!((map__51340 == null))))?(((((map__51340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51340):map__51340);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq51337){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51337));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53567 = arguments.length;
var i__4731__auto___53568 = (0);
while(true){
if((i__4731__auto___53568 < len__4730__auto___53567)){
args__4736__auto__.push((arguments[i__4731__auto___53568]));

var G__53569 = (i__4731__auto___53568 + (1));
i__4731__auto___53568 = G__53569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51347 = conformed_args__47920__auto__;
var map__51347__$1 = (((((!((map__51347 == null))))?(((((map__51347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51347):map__51347);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq51344){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51344));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53570 = arguments.length;
var i__4731__auto___53571 = (0);
while(true){
if((i__4731__auto___53571 < len__4730__auto___53570)){
args__4736__auto__.push((arguments[i__4731__auto___53571]));

var G__53572 = (i__4731__auto___53571 + (1));
i__4731__auto___53571 = G__53572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51354 = conformed_args__47920__auto__;
var map__51354__$1 = (((((!((map__51354 == null))))?(((((map__51354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51354):map__51354);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51354__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51354__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq51351){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51351));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53575 = arguments.length;
var i__4731__auto___53576 = (0);
while(true){
if((i__4731__auto___53576 < len__4730__auto___53575)){
args__4736__auto__.push((arguments[i__4731__auto___53576]));

var G__53577 = (i__4731__auto___53576 + (1));
i__4731__auto___53576 = G__53577;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51359 = conformed_args__47920__auto__;
var map__51359__$1 = (((((!((map__51359 == null))))?(((((map__51359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51359):map__51359);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq51358){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51358));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53579 = arguments.length;
var i__4731__auto___53580 = (0);
while(true){
if((i__4731__auto___53580 < len__4730__auto___53579)){
args__4736__auto__.push((arguments[i__4731__auto___53580]));

var G__53582 = (i__4731__auto___53580 + (1));
i__4731__auto___53580 = G__53582;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51362 = conformed_args__47920__auto__;
var map__51362__$1 = (((((!((map__51362 == null))))?(((((map__51362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51362):map__51362);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq51361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51361));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53583 = arguments.length;
var i__4731__auto___53584 = (0);
while(true){
if((i__4731__auto___53584 < len__4730__auto___53583)){
args__4736__auto__.push((arguments[i__4731__auto___53584]));

var G__53585 = (i__4731__auto___53584 + (1));
i__4731__auto___53584 = G__53585;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51370 = conformed_args__47920__auto__;
var map__51370__$1 = (((((!((map__51370 == null))))?(((((map__51370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51370):map__51370);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq51364){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51364));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53586 = arguments.length;
var i__4731__auto___53587 = (0);
while(true){
if((i__4731__auto___53587 < len__4730__auto___53586)){
args__4736__auto__.push((arguments[i__4731__auto___53587]));

var G__53589 = (i__4731__auto___53587 + (1));
i__4731__auto___53587 = G__53589;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51376 = conformed_args__47920__auto__;
var map__51376__$1 = (((((!((map__51376 == null))))?(((((map__51376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51376):map__51376);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq51375){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51375));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53590 = arguments.length;
var i__4731__auto___53591 = (0);
while(true){
if((i__4731__auto___53591 < len__4730__auto___53590)){
args__4736__auto__.push((arguments[i__4731__auto___53591]));

var G__53592 = (i__4731__auto___53591 + (1));
i__4731__auto___53591 = G__53592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51391 = conformed_args__47920__auto__;
var map__51391__$1 = (((((!((map__51391 == null))))?(((((map__51391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51391):map__51391);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq51385){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51385));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53593 = arguments.length;
var i__4731__auto___53594 = (0);
while(true){
if((i__4731__auto___53594 < len__4730__auto___53593)){
args__4736__auto__.push((arguments[i__4731__auto___53594]));

var G__53595 = (i__4731__auto___53594 + (1));
i__4731__auto___53594 = G__53595;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51424 = conformed_args__47920__auto__;
var map__51424__$1 = (((((!((map__51424 == null))))?(((((map__51424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51424):map__51424);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51424__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51424__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq51411){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51411));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53597 = arguments.length;
var i__4731__auto___53598 = (0);
while(true){
if((i__4731__auto___53598 < len__4730__auto___53597)){
args__4736__auto__.push((arguments[i__4731__auto___53598]));

var G__53599 = (i__4731__auto___53598 + (1));
i__4731__auto___53598 = G__53599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51460 = conformed_args__47920__auto__;
var map__51460__$1 = (((((!((map__51460 == null))))?(((((map__51460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51460):map__51460);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq51452){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51452));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53600 = arguments.length;
var i__4731__auto___53601 = (0);
while(true){
if((i__4731__auto___53601 < len__4730__auto___53600)){
args__4736__auto__.push((arguments[i__4731__auto___53601]));

var G__53602 = (i__4731__auto___53601 + (1));
i__4731__auto___53601 = G__53602;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51470 = conformed_args__47920__auto__;
var map__51470__$1 = (((((!((map__51470 == null))))?(((((map__51470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51470):map__51470);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq51467){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51467));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53616 = arguments.length;
var i__4731__auto___53617 = (0);
while(true){
if((i__4731__auto___53617 < len__4730__auto___53616)){
args__4736__auto__.push((arguments[i__4731__auto___53617]));

var G__53618 = (i__4731__auto___53617 + (1));
i__4731__auto___53617 = G__53618;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51475 = conformed_args__47920__auto__;
var map__51475__$1 = (((((!((map__51475 == null))))?(((((map__51475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51475):map__51475);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq51474){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51474));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53620 = arguments.length;
var i__4731__auto___53621 = (0);
while(true){
if((i__4731__auto___53621 < len__4730__auto___53620)){
args__4736__auto__.push((arguments[i__4731__auto___53621]));

var G__53626 = (i__4731__auto___53621 + (1));
i__4731__auto___53621 = G__53626;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51516 = conformed_args__47920__auto__;
var map__51516__$1 = (((((!((map__51516 == null))))?(((((map__51516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51516):map__51516);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq51496){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51496));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53636 = arguments.length;
var i__4731__auto___53637 = (0);
while(true){
if((i__4731__auto___53637 < len__4730__auto___53636)){
args__4736__auto__.push((arguments[i__4731__auto___53637]));

var G__53639 = (i__4731__auto___53637 + (1));
i__4731__auto___53637 = G__53639;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51557 = conformed_args__47920__auto__;
var map__51557__$1 = (((((!((map__51557 == null))))?(((((map__51557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51557):map__51557);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51557__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51557__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51557__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq51551){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51551));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53647 = arguments.length;
var i__4731__auto___53648 = (0);
while(true){
if((i__4731__auto___53648 < len__4730__auto___53647)){
args__4736__auto__.push((arguments[i__4731__auto___53648]));

var G__53649 = (i__4731__auto___53648 + (1));
i__4731__auto___53648 = G__53649;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51577 = conformed_args__47920__auto__;
var map__51577__$1 = (((((!((map__51577 == null))))?(((((map__51577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51577):map__51577);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq51573){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51573));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53651 = arguments.length;
var i__4731__auto___53652 = (0);
while(true){
if((i__4731__auto___53652 < len__4730__auto___53651)){
args__4736__auto__.push((arguments[i__4731__auto___53652]));

var G__53653 = (i__4731__auto___53652 + (1));
i__4731__auto___53652 = G__53653;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51591 = conformed_args__47920__auto__;
var map__51591__$1 = (((((!((map__51591 == null))))?(((((map__51591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51591):map__51591);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq51587){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51587));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53657 = arguments.length;
var i__4731__auto___53658 = (0);
while(true){
if((i__4731__auto___53658 < len__4730__auto___53657)){
args__4736__auto__.push((arguments[i__4731__auto___53658]));

var G__53659 = (i__4731__auto___53658 + (1));
i__4731__auto___53658 = G__53659;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51600 = conformed_args__47920__auto__;
var map__51600__$1 = (((((!((map__51600 == null))))?(((((map__51600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51600):map__51600);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq51595){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51595));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53660 = arguments.length;
var i__4731__auto___53661 = (0);
while(true){
if((i__4731__auto___53661 < len__4730__auto___53660)){
args__4736__auto__.push((arguments[i__4731__auto___53661]));

var G__53662 = (i__4731__auto___53661 + (1));
i__4731__auto___53661 = G__53662;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51614 = conformed_args__47920__auto__;
var map__51614__$1 = (((((!((map__51614 == null))))?(((((map__51614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51614):map__51614);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq51607){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51607));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53663 = arguments.length;
var i__4731__auto___53664 = (0);
while(true){
if((i__4731__auto___53664 < len__4730__auto___53663)){
args__4736__auto__.push((arguments[i__4731__auto___53664]));

var G__53665 = (i__4731__auto___53664 + (1));
i__4731__auto___53664 = G__53665;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51634 = conformed_args__47920__auto__;
var map__51634__$1 = (((((!((map__51634 == null))))?(((((map__51634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51634):map__51634);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq51627){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53666 = arguments.length;
var i__4731__auto___53667 = (0);
while(true){
if((i__4731__auto___53667 < len__4730__auto___53666)){
args__4736__auto__.push((arguments[i__4731__auto___53667]));

var G__53668 = (i__4731__auto___53667 + (1));
i__4731__auto___53667 = G__53668;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51666 = conformed_args__47920__auto__;
var map__51666__$1 = (((((!((map__51666 == null))))?(((((map__51666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51666):map__51666);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq51656){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51656));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53669 = arguments.length;
var i__4731__auto___53670 = (0);
while(true){
if((i__4731__auto___53670 < len__4730__auto___53669)){
args__4736__auto__.push((arguments[i__4731__auto___53670]));

var G__53671 = (i__4731__auto___53670 + (1));
i__4731__auto___53670 = G__53671;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51694 = conformed_args__47920__auto__;
var map__51694__$1 = (((((!((map__51694 == null))))?(((((map__51694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51694):map__51694);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq51683){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51683));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53673 = arguments.length;
var i__4731__auto___53674 = (0);
while(true){
if((i__4731__auto___53674 < len__4730__auto___53673)){
args__4736__auto__.push((arguments[i__4731__auto___53674]));

var G__53675 = (i__4731__auto___53674 + (1));
i__4731__auto___53674 = G__53675;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51723 = conformed_args__47920__auto__;
var map__51723__$1 = (((((!((map__51723 == null))))?(((((map__51723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51723):map__51723);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq51713){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51713));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53676 = arguments.length;
var i__4731__auto___53677 = (0);
while(true){
if((i__4731__auto___53677 < len__4730__auto___53676)){
args__4736__auto__.push((arguments[i__4731__auto___53677]));

var G__53678 = (i__4731__auto___53677 + (1));
i__4731__auto___53677 = G__53678;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51740 = conformed_args__47920__auto__;
var map__51740__$1 = (((((!((map__51740 == null))))?(((((map__51740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51740):map__51740);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq51734){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51734));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53679 = arguments.length;
var i__4731__auto___53680 = (0);
while(true){
if((i__4731__auto___53680 < len__4730__auto___53679)){
args__4736__auto__.push((arguments[i__4731__auto___53680]));

var G__53681 = (i__4731__auto___53680 + (1));
i__4731__auto___53680 = G__53681;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51759 = conformed_args__47920__auto__;
var map__51759__$1 = (((((!((map__51759 == null))))?(((((map__51759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51759):map__51759);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq51748){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51748));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53682 = arguments.length;
var i__4731__auto___53683 = (0);
while(true){
if((i__4731__auto___53683 < len__4730__auto___53682)){
args__4736__auto__.push((arguments[i__4731__auto___53683]));

var G__53684 = (i__4731__auto___53683 + (1));
i__4731__auto___53683 = G__53684;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51781 = conformed_args__47920__auto__;
var map__51781__$1 = (((((!((map__51781 == null))))?(((((map__51781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51781):map__51781);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51781__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51781__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq51769){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51769));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53686 = arguments.length;
var i__4731__auto___53687 = (0);
while(true){
if((i__4731__auto___53687 < len__4730__auto___53686)){
args__4736__auto__.push((arguments[i__4731__auto___53687]));

var G__53688 = (i__4731__auto___53687 + (1));
i__4731__auto___53687 = G__53688;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51810 = conformed_args__47920__auto__;
var map__51810__$1 = (((((!((map__51810 == null))))?(((((map__51810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51810):map__51810);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq51796){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53689 = arguments.length;
var i__4731__auto___53690 = (0);
while(true){
if((i__4731__auto___53690 < len__4730__auto___53689)){
args__4736__auto__.push((arguments[i__4731__auto___53690]));

var G__53691 = (i__4731__auto___53690 + (1));
i__4731__auto___53690 = G__53691;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51832 = conformed_args__47920__auto__;
var map__51832__$1 = (((((!((map__51832 == null))))?(((((map__51832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51832):map__51832);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq51824){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51824));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53693 = arguments.length;
var i__4731__auto___53694 = (0);
while(true){
if((i__4731__auto___53694 < len__4730__auto___53693)){
args__4736__auto__.push((arguments[i__4731__auto___53694]));

var G__53695 = (i__4731__auto___53694 + (1));
i__4731__auto___53694 = G__53695;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51863 = conformed_args__47920__auto__;
var map__51863__$1 = (((((!((map__51863 == null))))?(((((map__51863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51863):map__51863);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq51851){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51851));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53696 = arguments.length;
var i__4731__auto___53697 = (0);
while(true){
if((i__4731__auto___53697 < len__4730__auto___53696)){
args__4736__auto__.push((arguments[i__4731__auto___53697]));

var G__53698 = (i__4731__auto___53697 + (1));
i__4731__auto___53697 = G__53698;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51888 = conformed_args__47920__auto__;
var map__51888__$1 = (((((!((map__51888 == null))))?(((((map__51888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51888):map__51888);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq51881){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51881));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53699 = arguments.length;
var i__4731__auto___53700 = (0);
while(true){
if((i__4731__auto___53700 < len__4730__auto___53699)){
args__4736__auto__.push((arguments[i__4731__auto___53700]));

var G__53701 = (i__4731__auto___53700 + (1));
i__4731__auto___53700 = G__53701;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51900 = conformed_args__47920__auto__;
var map__51900__$1 = (((((!((map__51900 == null))))?(((((map__51900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51900):map__51900);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51900__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51900__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51900__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq51892){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51892));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53702 = arguments.length;
var i__4731__auto___53703 = (0);
while(true){
if((i__4731__auto___53703 < len__4730__auto___53702)){
args__4736__auto__.push((arguments[i__4731__auto___53703]));

var G__53704 = (i__4731__auto___53703 + (1));
i__4731__auto___53703 = G__53704;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51935 = conformed_args__47920__auto__;
var map__51935__$1 = (((((!((map__51935 == null))))?(((((map__51935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51935):map__51935);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq51916){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51916));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53705 = arguments.length;
var i__4731__auto___53706 = (0);
while(true){
if((i__4731__auto___53706 < len__4730__auto___53705)){
args__4736__auto__.push((arguments[i__4731__auto___53706]));

var G__53707 = (i__4731__auto___53706 + (1));
i__4731__auto___53706 = G__53707;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47920__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__51962 = conformed_args__47920__auto__;
var map__51962__$1 = (((((!((map__51962 == null))))?(((((map__51962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51962):map__51962);
var attrs__47921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51962__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51962__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47923__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51962__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47922__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47922__auto__);
var attrs_value__47924__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__47921__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47924__auto__], null),children__47922__auto____$1),css__47923__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq51954){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51954));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
