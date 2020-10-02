goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51967 = arguments.length;
switch (G__51967) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51970 = (function (f,blockable,meta51971){
this.f = f;
this.blockable = blockable;
this.meta51971 = meta51971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51972,meta51971__$1){
var self__ = this;
var _51972__$1 = this;
return (new cljs.core.async.t_cljs$core$async51970(self__.f,self__.blockable,meta51971__$1));
}));

(cljs.core.async.t_cljs$core$async51970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51972){
var self__ = this;
var _51972__$1 = this;
return self__.meta51971;
}));

(cljs.core.async.t_cljs$core$async51970.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async51970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async51970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51971","meta51971",1801125125,null)], null);
}));

(cljs.core.async.t_cljs$core$async51970.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51970");

(cljs.core.async.t_cljs$core$async51970.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async51970");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51970.
 */
cljs.core.async.__GT_t_cljs$core$async51970 = (function cljs$core$async$__GT_t_cljs$core$async51970(f__$1,blockable__$1,meta51971){
return (new cljs.core.async.t_cljs$core$async51970(f__$1,blockable__$1,meta51971));
});

}

return (new cljs.core.async.t_cljs$core$async51970(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__51987 = arguments.length;
switch (G__51987) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__51991 = arguments.length;
switch (G__51991) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__52011 = arguments.length;
switch (G__52011) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_54822 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54822) : fn1.call(null,val_54822));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54822) : fn1.call(null,val_54822));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__52044 = arguments.length;
switch (G__52044) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___54831 = n;
var x_54832 = (0);
while(true){
if((x_54832 < n__4607__auto___54831)){
(a[x_54832] = x_54832);

var G__54835 = (x_54832 + (1));
x_54832 = G__54835;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52119 = (function (flag,meta52120){
this.flag = flag;
this.meta52120 = meta52120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52121,meta52120__$1){
var self__ = this;
var _52121__$1 = this;
return (new cljs.core.async.t_cljs$core$async52119(self__.flag,meta52120__$1));
}));

(cljs.core.async.t_cljs$core$async52119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52121){
var self__ = this;
var _52121__$1 = this;
return self__.meta52120;
}));

(cljs.core.async.t_cljs$core$async52119.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async52119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async52119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52120","meta52120",-1048726727,null)], null);
}));

(cljs.core.async.t_cljs$core$async52119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52119");

(cljs.core.async.t_cljs$core$async52119.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52119.
 */
cljs.core.async.__GT_t_cljs$core$async52119 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52119(flag__$1,meta52120){
return (new cljs.core.async.t_cljs$core$async52119(flag__$1,meta52120));
});

}

return (new cljs.core.async.t_cljs$core$async52119(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52134 = (function (flag,cb,meta52135){
this.flag = flag;
this.cb = cb;
this.meta52135 = meta52135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52136,meta52135__$1){
var self__ = this;
var _52136__$1 = this;
return (new cljs.core.async.t_cljs$core$async52134(self__.flag,self__.cb,meta52135__$1));
}));

(cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52136){
var self__ = this;
var _52136__$1 = this;
return self__.meta52135;
}));

(cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async52134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52135","meta52135",-1445341109,null)], null);
}));

(cljs.core.async.t_cljs$core$async52134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52134");

(cljs.core.async.t_cljs$core$async52134.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52134.
 */
cljs.core.async.__GT_t_cljs$core$async52134 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52134(flag__$1,cb__$1,meta52135){
return (new cljs.core.async.t_cljs$core$async52134(flag__$1,cb__$1,meta52135));
});

}

return (new cljs.core.async.t_cljs$core$async52134(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52154_SHARP_){
var G__52156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52154_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52156) : fret.call(null,G__52156));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52155_SHARP_){
var G__52157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52155_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52157) : fret.call(null,G__52157));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__54862 = (i + (1));
i = G__54862;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54867 = arguments.length;
var i__4731__auto___54868 = (0);
while(true){
if((i__4731__auto___54868 < len__4730__auto___54867)){
args__4736__auto__.push((arguments[i__4731__auto___54868]));

var G__54869 = (i__4731__auto___54868 + (1));
i__4731__auto___54868 = G__54869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52171){
var map__52172 = p__52171;
var map__52172__$1 = (((((!((map__52172 == null))))?(((((map__52172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52172):map__52172);
var opts = map__52172__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52161){
var G__52163 = cljs.core.first(seq52161);
var seq52161__$1 = cljs.core.next(seq52161);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52163,seq52161__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__52199 = arguments.length;
switch (G__52199) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__51875__auto___54886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_52248){
var state_val_52249 = (state_52248[(1)]);
if((state_val_52249 === (7))){
var inst_52242 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52257_54891 = state_52248__$1;
(statearr_52257_54891[(2)] = inst_52242);

(statearr_52257_54891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (1))){
var state_52248__$1 = state_52248;
var statearr_52258_54892 = state_52248__$1;
(statearr_52258_54892[(2)] = null);

(statearr_52258_54892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (4))){
var inst_52217 = (state_52248[(7)]);
var inst_52217__$1 = (state_52248[(2)]);
var inst_52219 = (inst_52217__$1 == null);
var state_52248__$1 = (function (){var statearr_52262 = state_52248;
(statearr_52262[(7)] = inst_52217__$1);

return statearr_52262;
})();
if(cljs.core.truth_(inst_52219)){
var statearr_52263_54896 = state_52248__$1;
(statearr_52263_54896[(1)] = (5));

} else {
var statearr_52264_54898 = state_52248__$1;
(statearr_52264_54898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (13))){
var state_52248__$1 = state_52248;
var statearr_52267_54901 = state_52248__$1;
(statearr_52267_54901[(2)] = null);

(statearr_52267_54901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (6))){
var inst_52217 = (state_52248[(7)]);
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52248__$1,(11),to,inst_52217);
} else {
if((state_val_52249 === (3))){
var inst_52244 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52248__$1,inst_52244);
} else {
if((state_val_52249 === (12))){
var state_52248__$1 = state_52248;
var statearr_52268_54902 = state_52248__$1;
(statearr_52268_54902[(2)] = null);

(statearr_52268_54902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (2))){
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52248__$1,(4),from);
} else {
if((state_val_52249 === (11))){
var inst_52235 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
if(cljs.core.truth_(inst_52235)){
var statearr_52270_54903 = state_52248__$1;
(statearr_52270_54903[(1)] = (12));

} else {
var statearr_52271_54904 = state_52248__$1;
(statearr_52271_54904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (9))){
var state_52248__$1 = state_52248;
var statearr_52272_54905 = state_52248__$1;
(statearr_52272_54905[(2)] = null);

(statearr_52272_54905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (5))){
var state_52248__$1 = state_52248;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52273_54908 = state_52248__$1;
(statearr_52273_54908[(1)] = (8));

} else {
var statearr_52274_54909 = state_52248__$1;
(statearr_52274_54909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (14))){
var inst_52240 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52277_54910 = state_52248__$1;
(statearr_52277_54910[(2)] = inst_52240);

(statearr_52277_54910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (10))){
var inst_52230 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52278_54911 = state_52248__$1;
(statearr_52278_54911[(2)] = inst_52230);

(statearr_52278_54911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (8))){
var inst_52223 = cljs.core.async.close_BANG_(to);
var state_52248__$1 = state_52248;
var statearr_52279_54912 = state_52248__$1;
(statearr_52279_54912[(2)] = inst_52223);

(statearr_52279_54912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_52284 = [null,null,null,null,null,null,null,null];
(statearr_52284[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_52284[(1)] = (1));

return statearr_52284;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_52248){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52248);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52285){var ex__51477__auto__ = e52285;
var statearr_52286_54914 = state_52248;
(statearr_52286_54914[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52248[(4)]))){
var statearr_52287_54915 = state_52248;
(statearr_52287_54915[(1)] = cljs.core.first((state_52248[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54921 = state_52248;
state_52248 = G__54921;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_52248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_52248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_52288 = f__51876__auto__();
(statearr_52288[(6)] = c__51875__auto___54886);

return statearr_52288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__52294){
var vec__52295 = p__52294;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52295,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52295,(1),null);
var job = vec__52295;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__51875__auto___54934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_52305){
var state_val_52306 = (state_52305[(1)]);
if((state_val_52306 === (1))){
var state_52305__$1 = state_52305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52305__$1,(2),res,v);
} else {
if((state_val_52306 === (2))){
var inst_52302 = (state_52305[(2)]);
var inst_52303 = cljs.core.async.close_BANG_(res);
var state_52305__$1 = (function (){var statearr_52310 = state_52305;
(statearr_52310[(7)] = inst_52302);

return statearr_52310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52305__$1,inst_52303);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0 = (function (){
var statearr_52311 = [null,null,null,null,null,null,null,null];
(statearr_52311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__);

(statearr_52311[(1)] = (1));

return statearr_52311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1 = (function (state_52305){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52305);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52312){var ex__51477__auto__ = e52312;
var statearr_52313_54946 = state_52305;
(statearr_52313_54946[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52305[(4)]))){
var statearr_52314_54949 = state_52305;
(statearr_52314_54949[(1)] = cljs.core.first((state_52305[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54951 = state_52305;
state_52305 = G__54951;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = function(state_52305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1.call(this,state_52305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_52316 = f__51876__auto__();
(statearr_52316[(6)] = c__51875__auto___54934);

return statearr_52316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__52318){
var vec__52319 = p__52318;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52319,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52319,(1),null);
var job = vec__52319;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___54968 = n;
var __54969 = (0);
while(true){
if((__54969 < n__4607__auto___54968)){
var G__52324_54970 = type;
var G__52324_54971__$1 = (((G__52324_54970 instanceof cljs.core.Keyword))?G__52324_54970.fqn:null);
switch (G__52324_54971__$1) {
case "compute":
var c__51875__auto___54973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54969,c__51875__auto___54973,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async){
return (function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = ((function (__54969,c__51875__auto___54973,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async){
return (function (state_52338){
var state_val_52339 = (state_52338[(1)]);
if((state_val_52339 === (1))){
var state_52338__$1 = state_52338;
var statearr_52343_54975 = state_52338__$1;
(statearr_52343_54975[(2)] = null);

(statearr_52343_54975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52339 === (2))){
var state_52338__$1 = state_52338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52338__$1,(4),jobs);
} else {
if((state_val_52339 === (3))){
var inst_52336 = (state_52338[(2)]);
var state_52338__$1 = state_52338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52338__$1,inst_52336);
} else {
if((state_val_52339 === (4))){
var inst_52327 = (state_52338[(2)]);
var inst_52328 = process(inst_52327);
var state_52338__$1 = state_52338;
if(cljs.core.truth_(inst_52328)){
var statearr_52347_54978 = state_52338__$1;
(statearr_52347_54978[(1)] = (5));

} else {
var statearr_52348_54979 = state_52338__$1;
(statearr_52348_54979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52339 === (5))){
var state_52338__$1 = state_52338;
var statearr_52349_54980 = state_52338__$1;
(statearr_52349_54980[(2)] = null);

(statearr_52349_54980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52339 === (6))){
var state_52338__$1 = state_52338;
var statearr_52350_54981 = state_52338__$1;
(statearr_52350_54981[(2)] = null);

(statearr_52350_54981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52339 === (7))){
var inst_52333 = (state_52338[(2)]);
var state_52338__$1 = state_52338;
var statearr_52352_54982 = state_52338__$1;
(statearr_52352_54982[(2)] = inst_52333);

(statearr_52352_54982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__54969,c__51875__auto___54973,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async))
;
return ((function (__54969,switch__51473__auto__,c__51875__auto___54973,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0 = (function (){
var statearr_52353 = [null,null,null,null,null,null,null];
(statearr_52353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__);

(statearr_52353[(1)] = (1));

return statearr_52353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1 = (function (state_52338){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52338);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52357){var ex__51477__auto__ = e52357;
var statearr_52358_54986 = state_52338;
(statearr_52358_54986[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52338[(4)]))){
var statearr_52359_54991 = state_52338;
(statearr_52359_54991[(1)] = cljs.core.first((state_52338[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54995 = state_52338;
state_52338 = G__54995;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = function(state_52338){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1.call(this,state_52338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__;
})()
;})(__54969,switch__51473__auto__,c__51875__auto___54973,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async))
})();
var state__51877__auto__ = (function (){var statearr_52361 = f__51876__auto__();
(statearr_52361[(6)] = c__51875__auto___54973);

return statearr_52361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
});})(__54969,c__51875__auto___54973,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async))
);


break;
case "async":
var c__51875__auto___55007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54969,c__51875__auto___55007,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async){
return (function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = ((function (__54969,c__51875__auto___55007,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async){
return (function (state_52374){
var state_val_52375 = (state_52374[(1)]);
if((state_val_52375 === (1))){
var state_52374__$1 = state_52374;
var statearr_52376_55015 = state_52374__$1;
(statearr_52376_55015[(2)] = null);

(statearr_52376_55015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52375 === (2))){
var state_52374__$1 = state_52374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52374__$1,(4),jobs);
} else {
if((state_val_52375 === (3))){
var inst_52372 = (state_52374[(2)]);
var state_52374__$1 = state_52374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52374__$1,inst_52372);
} else {
if((state_val_52375 === (4))){
var inst_52364 = (state_52374[(2)]);
var inst_52365 = async(inst_52364);
var state_52374__$1 = state_52374;
if(cljs.core.truth_(inst_52365)){
var statearr_52378_55017 = state_52374__$1;
(statearr_52378_55017[(1)] = (5));

} else {
var statearr_52379_55018 = state_52374__$1;
(statearr_52379_55018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52375 === (5))){
var state_52374__$1 = state_52374;
var statearr_52380_55020 = state_52374__$1;
(statearr_52380_55020[(2)] = null);

(statearr_52380_55020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52375 === (6))){
var state_52374__$1 = state_52374;
var statearr_52381_55021 = state_52374__$1;
(statearr_52381_55021[(2)] = null);

(statearr_52381_55021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52375 === (7))){
var inst_52370 = (state_52374[(2)]);
var state_52374__$1 = state_52374;
var statearr_52384_55022 = state_52374__$1;
(statearr_52384_55022[(2)] = inst_52370);

(statearr_52384_55022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__54969,c__51875__auto___55007,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async))
;
return ((function (__54969,switch__51473__auto__,c__51875__auto___55007,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0 = (function (){
var statearr_52385 = [null,null,null,null,null,null,null];
(statearr_52385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__);

(statearr_52385[(1)] = (1));

return statearr_52385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1 = (function (state_52374){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52374);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52386){var ex__51477__auto__ = e52386;
var statearr_52387_55025 = state_52374;
(statearr_52387_55025[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52374[(4)]))){
var statearr_52388_55027 = state_52374;
(statearr_52388_55027[(1)] = cljs.core.first((state_52374[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55031 = state_52374;
state_52374 = G__55031;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = function(state_52374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1.call(this,state_52374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__;
})()
;})(__54969,switch__51473__auto__,c__51875__auto___55007,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async))
})();
var state__51877__auto__ = (function (){var statearr_52391 = f__51876__auto__();
(statearr_52391[(6)] = c__51875__auto___55007);

return statearr_52391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
});})(__54969,c__51875__auto___55007,G__52324_54970,G__52324_54971__$1,n__4607__auto___54968,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52324_54971__$1)].join('')));

}

var G__55034 = (__54969 + (1));
__54969 = G__55034;
continue;
} else {
}
break;
}

var c__51875__auto___55036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_52414){
var state_val_52415 = (state_52414[(1)]);
if((state_val_52415 === (7))){
var inst_52410 = (state_52414[(2)]);
var state_52414__$1 = state_52414;
var statearr_52421_55038 = state_52414__$1;
(statearr_52421_55038[(2)] = inst_52410);

(statearr_52421_55038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52415 === (1))){
var state_52414__$1 = state_52414;
var statearr_52422_55042 = state_52414__$1;
(statearr_52422_55042[(2)] = null);

(statearr_52422_55042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52415 === (4))){
var inst_52395 = (state_52414[(7)]);
var inst_52395__$1 = (state_52414[(2)]);
var inst_52396 = (inst_52395__$1 == null);
var state_52414__$1 = (function (){var statearr_52426 = state_52414;
(statearr_52426[(7)] = inst_52395__$1);

return statearr_52426;
})();
if(cljs.core.truth_(inst_52396)){
var statearr_52427_55044 = state_52414__$1;
(statearr_52427_55044[(1)] = (5));

} else {
var statearr_52428_55046 = state_52414__$1;
(statearr_52428_55046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52415 === (6))){
var inst_52400 = (state_52414[(8)]);
var inst_52395 = (state_52414[(7)]);
var inst_52400__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52402 = [inst_52395,inst_52400__$1];
var inst_52403 = (new cljs.core.PersistentVector(null,2,(5),inst_52401,inst_52402,null));
var state_52414__$1 = (function (){var statearr_52430 = state_52414;
(statearr_52430[(8)] = inst_52400__$1);

return statearr_52430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52414__$1,(8),jobs,inst_52403);
} else {
if((state_val_52415 === (3))){
var inst_52412 = (state_52414[(2)]);
var state_52414__$1 = state_52414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52414__$1,inst_52412);
} else {
if((state_val_52415 === (2))){
var state_52414__$1 = state_52414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52414__$1,(4),from);
} else {
if((state_val_52415 === (9))){
var inst_52407 = (state_52414[(2)]);
var state_52414__$1 = (function (){var statearr_52431 = state_52414;
(statearr_52431[(9)] = inst_52407);

return statearr_52431;
})();
var statearr_52432_55051 = state_52414__$1;
(statearr_52432_55051[(2)] = null);

(statearr_52432_55051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52415 === (5))){
var inst_52398 = cljs.core.async.close_BANG_(jobs);
var state_52414__$1 = state_52414;
var statearr_52433_55054 = state_52414__$1;
(statearr_52433_55054[(2)] = inst_52398);

(statearr_52433_55054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52415 === (8))){
var inst_52400 = (state_52414[(8)]);
var inst_52405 = (state_52414[(2)]);
var state_52414__$1 = (function (){var statearr_52434 = state_52414;
(statearr_52434[(10)] = inst_52405);

return statearr_52434;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52414__$1,(9),results,inst_52400);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0 = (function (){
var statearr_52436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__);

(statearr_52436[(1)] = (1));

return statearr_52436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1 = (function (state_52414){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52414);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52437){var ex__51477__auto__ = e52437;
var statearr_52438_55058 = state_52414;
(statearr_52438_55058[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52414[(4)]))){
var statearr_52439_55059 = state_52414;
(statearr_52439_55059[(1)] = cljs.core.first((state_52414[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55065 = state_52414;
state_52414 = G__55065;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = function(state_52414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1.call(this,state_52414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_52440 = f__51876__auto__();
(statearr_52440[(6)] = c__51875__auto___55036);

return statearr_52440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


var c__51875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_52479){
var state_val_52480 = (state_52479[(1)]);
if((state_val_52480 === (7))){
var inst_52475 = (state_52479[(2)]);
var state_52479__$1 = state_52479;
var statearr_52485_55067 = state_52479__$1;
(statearr_52485_55067[(2)] = inst_52475);

(statearr_52485_55067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (20))){
var state_52479__$1 = state_52479;
var statearr_52486_55069 = state_52479__$1;
(statearr_52486_55069[(2)] = null);

(statearr_52486_55069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (1))){
var state_52479__$1 = state_52479;
var statearr_52487_55071 = state_52479__$1;
(statearr_52487_55071[(2)] = null);

(statearr_52487_55071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (4))){
var inst_52444 = (state_52479[(7)]);
var inst_52444__$1 = (state_52479[(2)]);
var inst_52445 = (inst_52444__$1 == null);
var state_52479__$1 = (function (){var statearr_52488 = state_52479;
(statearr_52488[(7)] = inst_52444__$1);

return statearr_52488;
})();
if(cljs.core.truth_(inst_52445)){
var statearr_52489_55074 = state_52479__$1;
(statearr_52489_55074[(1)] = (5));

} else {
var statearr_52490_55075 = state_52479__$1;
(statearr_52490_55075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (15))){
var inst_52457 = (state_52479[(8)]);
var state_52479__$1 = state_52479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52479__$1,(18),to,inst_52457);
} else {
if((state_val_52480 === (21))){
var inst_52470 = (state_52479[(2)]);
var state_52479__$1 = state_52479;
var statearr_52491_55080 = state_52479__$1;
(statearr_52491_55080[(2)] = inst_52470);

(statearr_52491_55080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (13))){
var inst_52472 = (state_52479[(2)]);
var state_52479__$1 = (function (){var statearr_52492 = state_52479;
(statearr_52492[(9)] = inst_52472);

return statearr_52492;
})();
var statearr_52493_55082 = state_52479__$1;
(statearr_52493_55082[(2)] = null);

(statearr_52493_55082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (6))){
var inst_52444 = (state_52479[(7)]);
var state_52479__$1 = state_52479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52479__$1,(11),inst_52444);
} else {
if((state_val_52480 === (17))){
var inst_52465 = (state_52479[(2)]);
var state_52479__$1 = state_52479;
if(cljs.core.truth_(inst_52465)){
var statearr_52494_55083 = state_52479__$1;
(statearr_52494_55083[(1)] = (19));

} else {
var statearr_52495_55084 = state_52479__$1;
(statearr_52495_55084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (3))){
var inst_52477 = (state_52479[(2)]);
var state_52479__$1 = state_52479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52479__$1,inst_52477);
} else {
if((state_val_52480 === (12))){
var inst_52454 = (state_52479[(10)]);
var state_52479__$1 = state_52479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52479__$1,(14),inst_52454);
} else {
if((state_val_52480 === (2))){
var state_52479__$1 = state_52479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52479__$1,(4),results);
} else {
if((state_val_52480 === (19))){
var state_52479__$1 = state_52479;
var statearr_52496_55098 = state_52479__$1;
(statearr_52496_55098[(2)] = null);

(statearr_52496_55098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (11))){
var inst_52454 = (state_52479[(2)]);
var state_52479__$1 = (function (){var statearr_52497 = state_52479;
(statearr_52497[(10)] = inst_52454);

return statearr_52497;
})();
var statearr_52498_55100 = state_52479__$1;
(statearr_52498_55100[(2)] = null);

(statearr_52498_55100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (9))){
var state_52479__$1 = state_52479;
var statearr_52499_55101 = state_52479__$1;
(statearr_52499_55101[(2)] = null);

(statearr_52499_55101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (5))){
var state_52479__$1 = state_52479;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52500_55102 = state_52479__$1;
(statearr_52500_55102[(1)] = (8));

} else {
var statearr_52501_55103 = state_52479__$1;
(statearr_52501_55103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (14))){
var inst_52457 = (state_52479[(8)]);
var inst_52457__$1 = (state_52479[(2)]);
var inst_52458 = (inst_52457__$1 == null);
var inst_52459 = cljs.core.not(inst_52458);
var state_52479__$1 = (function (){var statearr_52502 = state_52479;
(statearr_52502[(8)] = inst_52457__$1);

return statearr_52502;
})();
if(inst_52459){
var statearr_52503_55106 = state_52479__$1;
(statearr_52503_55106[(1)] = (15));

} else {
var statearr_52504_55107 = state_52479__$1;
(statearr_52504_55107[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (16))){
var state_52479__$1 = state_52479;
var statearr_52505_55108 = state_52479__$1;
(statearr_52505_55108[(2)] = false);

(statearr_52505_55108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (10))){
var inst_52451 = (state_52479[(2)]);
var state_52479__$1 = state_52479;
var statearr_52506_55116 = state_52479__$1;
(statearr_52506_55116[(2)] = inst_52451);

(statearr_52506_55116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (18))){
var inst_52462 = (state_52479[(2)]);
var state_52479__$1 = state_52479;
var statearr_52507_55117 = state_52479__$1;
(statearr_52507_55117[(2)] = inst_52462);

(statearr_52507_55117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52480 === (8))){
var inst_52448 = cljs.core.async.close_BANG_(to);
var state_52479__$1 = state_52479;
var statearr_52508_55118 = state_52479__$1;
(statearr_52508_55118[(2)] = inst_52448);

(statearr_52508_55118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0 = (function (){
var statearr_52509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__);

(statearr_52509[(1)] = (1));

return statearr_52509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1 = (function (state_52479){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52479);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52510){var ex__51477__auto__ = e52510;
var statearr_52511_55125 = state_52479;
(statearr_52511_55125[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52479[(4)]))){
var statearr_52512_55126 = state_52479;
(statearr_52512_55126[(1)] = cljs.core.first((state_52479[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55130 = state_52479;
state_52479 = G__55130;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__ = function(state_52479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1.call(this,state_52479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_52513 = f__51876__auto__();
(statearr_52513[(6)] = c__51875__auto__);

return statearr_52513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));

return c__51875__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52515 = arguments.length;
switch (G__52515) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52521 = arguments.length;
switch (G__52521) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52525 = arguments.length;
switch (G__52525) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__51875__auto___55162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_52553){
var state_val_52554 = (state_52553[(1)]);
if((state_val_52554 === (7))){
var inst_52549 = (state_52553[(2)]);
var state_52553__$1 = state_52553;
var statearr_52555_55165 = state_52553__$1;
(statearr_52555_55165[(2)] = inst_52549);

(statearr_52555_55165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (1))){
var state_52553__$1 = state_52553;
var statearr_52556_55166 = state_52553__$1;
(statearr_52556_55166[(2)] = null);

(statearr_52556_55166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (4))){
var inst_52530 = (state_52553[(7)]);
var inst_52530__$1 = (state_52553[(2)]);
var inst_52531 = (inst_52530__$1 == null);
var state_52553__$1 = (function (){var statearr_52557 = state_52553;
(statearr_52557[(7)] = inst_52530__$1);

return statearr_52557;
})();
if(cljs.core.truth_(inst_52531)){
var statearr_52558_55170 = state_52553__$1;
(statearr_52558_55170[(1)] = (5));

} else {
var statearr_52559_55172 = state_52553__$1;
(statearr_52559_55172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (13))){
var state_52553__$1 = state_52553;
var statearr_52562_55176 = state_52553__$1;
(statearr_52562_55176[(2)] = null);

(statearr_52562_55176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (6))){
var inst_52530 = (state_52553[(7)]);
var inst_52536 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52530) : p.call(null,inst_52530));
var state_52553__$1 = state_52553;
if(cljs.core.truth_(inst_52536)){
var statearr_52565_55178 = state_52553__$1;
(statearr_52565_55178[(1)] = (9));

} else {
var statearr_52566_55179 = state_52553__$1;
(statearr_52566_55179[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (3))){
var inst_52551 = (state_52553[(2)]);
var state_52553__$1 = state_52553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52553__$1,inst_52551);
} else {
if((state_val_52554 === (12))){
var state_52553__$1 = state_52553;
var statearr_52567_55180 = state_52553__$1;
(statearr_52567_55180[(2)] = null);

(statearr_52567_55180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (2))){
var state_52553__$1 = state_52553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52553__$1,(4),ch);
} else {
if((state_val_52554 === (11))){
var inst_52530 = (state_52553[(7)]);
var inst_52540 = (state_52553[(2)]);
var state_52553__$1 = state_52553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52553__$1,(8),inst_52540,inst_52530);
} else {
if((state_val_52554 === (9))){
var state_52553__$1 = state_52553;
var statearr_52568_55181 = state_52553__$1;
(statearr_52568_55181[(2)] = tc);

(statearr_52568_55181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (5))){
var inst_52533 = cljs.core.async.close_BANG_(tc);
var inst_52534 = cljs.core.async.close_BANG_(fc);
var state_52553__$1 = (function (){var statearr_52569 = state_52553;
(statearr_52569[(8)] = inst_52533);

return statearr_52569;
})();
var statearr_52570_55183 = state_52553__$1;
(statearr_52570_55183[(2)] = inst_52534);

(statearr_52570_55183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (14))){
var inst_52547 = (state_52553[(2)]);
var state_52553__$1 = state_52553;
var statearr_52571_55185 = state_52553__$1;
(statearr_52571_55185[(2)] = inst_52547);

(statearr_52571_55185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (10))){
var state_52553__$1 = state_52553;
var statearr_52572_55188 = state_52553__$1;
(statearr_52572_55188[(2)] = fc);

(statearr_52572_55188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52554 === (8))){
var inst_52542 = (state_52553[(2)]);
var state_52553__$1 = state_52553;
if(cljs.core.truth_(inst_52542)){
var statearr_52573_55190 = state_52553__$1;
(statearr_52573_55190[(1)] = (12));

} else {
var statearr_52574_55191 = state_52553__$1;
(statearr_52574_55191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_52575 = [null,null,null,null,null,null,null,null,null];
(statearr_52575[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_52575[(1)] = (1));

return statearr_52575;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_52553){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52553);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52576){var ex__51477__auto__ = e52576;
var statearr_52577_55198 = state_52553;
(statearr_52577_55198[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52553[(4)]))){
var statearr_52578_55200 = state_52553;
(statearr_52578_55200[(1)] = cljs.core.first((state_52553[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55201 = state_52553;
state_52553 = G__55201;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_52553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_52553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_52579 = f__51876__auto__();
(statearr_52579[(6)] = c__51875__auto___55162);

return statearr_52579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__51875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_52603){
var state_val_52604 = (state_52603[(1)]);
if((state_val_52604 === (7))){
var inst_52599 = (state_52603[(2)]);
var state_52603__$1 = state_52603;
var statearr_52609_55204 = state_52603__$1;
(statearr_52609_55204[(2)] = inst_52599);

(statearr_52609_55204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52604 === (1))){
var inst_52582 = init;
var inst_52583 = inst_52582;
var state_52603__$1 = (function (){var statearr_52610 = state_52603;
(statearr_52610[(7)] = inst_52583);

return statearr_52610;
})();
var statearr_52612_55205 = state_52603__$1;
(statearr_52612_55205[(2)] = null);

(statearr_52612_55205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52604 === (4))){
var inst_52586 = (state_52603[(8)]);
var inst_52586__$1 = (state_52603[(2)]);
var inst_52587 = (inst_52586__$1 == null);
var state_52603__$1 = (function (){var statearr_52614 = state_52603;
(statearr_52614[(8)] = inst_52586__$1);

return statearr_52614;
})();
if(cljs.core.truth_(inst_52587)){
var statearr_52615_55212 = state_52603__$1;
(statearr_52615_55212[(1)] = (5));

} else {
var statearr_52616_55214 = state_52603__$1;
(statearr_52616_55214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52604 === (6))){
var inst_52590 = (state_52603[(9)]);
var inst_52586 = (state_52603[(8)]);
var inst_52583 = (state_52603[(7)]);
var inst_52590__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52583,inst_52586) : f.call(null,inst_52583,inst_52586));
var inst_52591 = cljs.core.reduced_QMARK_(inst_52590__$1);
var state_52603__$1 = (function (){var statearr_52617 = state_52603;
(statearr_52617[(9)] = inst_52590__$1);

return statearr_52617;
})();
if(inst_52591){
var statearr_52618_55221 = state_52603__$1;
(statearr_52618_55221[(1)] = (8));

} else {
var statearr_52621_55222 = state_52603__$1;
(statearr_52621_55222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52604 === (3))){
var inst_52601 = (state_52603[(2)]);
var state_52603__$1 = state_52603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52603__$1,inst_52601);
} else {
if((state_val_52604 === (2))){
var state_52603__$1 = state_52603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52603__$1,(4),ch);
} else {
if((state_val_52604 === (9))){
var inst_52590 = (state_52603[(9)]);
var inst_52583 = inst_52590;
var state_52603__$1 = (function (){var statearr_52622 = state_52603;
(statearr_52622[(7)] = inst_52583);

return statearr_52622;
})();
var statearr_52623_55228 = state_52603__$1;
(statearr_52623_55228[(2)] = null);

(statearr_52623_55228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52604 === (5))){
var inst_52583 = (state_52603[(7)]);
var state_52603__$1 = state_52603;
var statearr_52624_55239 = state_52603__$1;
(statearr_52624_55239[(2)] = inst_52583);

(statearr_52624_55239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52604 === (10))){
var inst_52597 = (state_52603[(2)]);
var state_52603__$1 = state_52603;
var statearr_52625_55240 = state_52603__$1;
(statearr_52625_55240[(2)] = inst_52597);

(statearr_52625_55240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52604 === (8))){
var inst_52590 = (state_52603[(9)]);
var inst_52593 = cljs.core.deref(inst_52590);
var state_52603__$1 = state_52603;
var statearr_52626_55253 = state_52603__$1;
(statearr_52626_55253[(2)] = inst_52593);

(statearr_52626_55253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__51474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51474__auto____0 = (function (){
var statearr_52627 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52627[(0)] = cljs$core$async$reduce_$_state_machine__51474__auto__);

(statearr_52627[(1)] = (1));

return statearr_52627;
});
var cljs$core$async$reduce_$_state_machine__51474__auto____1 = (function (state_52603){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52603);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52628){var ex__51477__auto__ = e52628;
var statearr_52629_55264 = state_52603;
(statearr_52629_55264[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52603[(4)]))){
var statearr_52630_55265 = state_52603;
(statearr_52630_55265[(1)] = cljs.core.first((state_52603[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55266 = state_52603;
state_52603 = G__55266;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51474__auto__ = function(state_52603){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51474__auto____1.call(this,state_52603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51474__auto____0;
cljs$core$async$reduce_$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51474__auto____1;
return cljs$core$async$reduce_$_state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_52631 = f__51876__auto__();
(statearr_52631[(6)] = c__51875__auto__);

return statearr_52631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));

return c__51875__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__51875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_52644){
var state_val_52645 = (state_52644[(1)]);
if((state_val_52645 === (1))){
var inst_52639 = cljs.core.async.reduce(f__$1,init,ch);
var state_52644__$1 = state_52644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52644__$1,(2),inst_52639);
} else {
if((state_val_52645 === (2))){
var inst_52641 = (state_52644[(2)]);
var inst_52642 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52641) : f__$1.call(null,inst_52641));
var state_52644__$1 = state_52644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52644__$1,inst_52642);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__51474__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51474__auto____0 = (function (){
var statearr_52646 = [null,null,null,null,null,null,null];
(statearr_52646[(0)] = cljs$core$async$transduce_$_state_machine__51474__auto__);

(statearr_52646[(1)] = (1));

return statearr_52646;
});
var cljs$core$async$transduce_$_state_machine__51474__auto____1 = (function (state_52644){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52644);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52647){var ex__51477__auto__ = e52647;
var statearr_52648_55278 = state_52644;
(statearr_52648_55278[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52644[(4)]))){
var statearr_52649_55279 = state_52644;
(statearr_52649_55279[(1)] = cljs.core.first((state_52644[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55280 = state_52644;
state_52644 = G__55280;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51474__auto__ = function(state_52644){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51474__auto____1.call(this,state_52644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51474__auto____0;
cljs$core$async$transduce_$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51474__auto____1;
return cljs$core$async$transduce_$_state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_52652 = f__51876__auto__();
(statearr_52652[(6)] = c__51875__auto__);

return statearr_52652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));

return c__51875__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__52658 = arguments.length;
switch (G__52658) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__51875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_52683){
var state_val_52684 = (state_52683[(1)]);
if((state_val_52684 === (7))){
var inst_52665 = (state_52683[(2)]);
var state_52683__$1 = state_52683;
var statearr_52687_55283 = state_52683__$1;
(statearr_52687_55283[(2)] = inst_52665);

(statearr_52687_55283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (1))){
var inst_52659 = cljs.core.seq(coll);
var inst_52660 = inst_52659;
var state_52683__$1 = (function (){var statearr_52688 = state_52683;
(statearr_52688[(7)] = inst_52660);

return statearr_52688;
})();
var statearr_52689_55284 = state_52683__$1;
(statearr_52689_55284[(2)] = null);

(statearr_52689_55284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (4))){
var inst_52660 = (state_52683[(7)]);
var inst_52663 = cljs.core.first(inst_52660);
var state_52683__$1 = state_52683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52683__$1,(7),ch,inst_52663);
} else {
if((state_val_52684 === (13))){
var inst_52677 = (state_52683[(2)]);
var state_52683__$1 = state_52683;
var statearr_52692_55287 = state_52683__$1;
(statearr_52692_55287[(2)] = inst_52677);

(statearr_52692_55287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (6))){
var inst_52668 = (state_52683[(2)]);
var state_52683__$1 = state_52683;
if(cljs.core.truth_(inst_52668)){
var statearr_52693_55290 = state_52683__$1;
(statearr_52693_55290[(1)] = (8));

} else {
var statearr_52694_55292 = state_52683__$1;
(statearr_52694_55292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (3))){
var inst_52681 = (state_52683[(2)]);
var state_52683__$1 = state_52683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52683__$1,inst_52681);
} else {
if((state_val_52684 === (12))){
var state_52683__$1 = state_52683;
var statearr_52695_55293 = state_52683__$1;
(statearr_52695_55293[(2)] = null);

(statearr_52695_55293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (2))){
var inst_52660 = (state_52683[(7)]);
var state_52683__$1 = state_52683;
if(cljs.core.truth_(inst_52660)){
var statearr_52696_55296 = state_52683__$1;
(statearr_52696_55296[(1)] = (4));

} else {
var statearr_52697_55298 = state_52683__$1;
(statearr_52697_55298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (11))){
var inst_52674 = cljs.core.async.close_BANG_(ch);
var state_52683__$1 = state_52683;
var statearr_52700_55300 = state_52683__$1;
(statearr_52700_55300[(2)] = inst_52674);

(statearr_52700_55300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (9))){
var state_52683__$1 = state_52683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52701_55305 = state_52683__$1;
(statearr_52701_55305[(1)] = (11));

} else {
var statearr_52702_55306 = state_52683__$1;
(statearr_52702_55306[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (5))){
var inst_52660 = (state_52683[(7)]);
var state_52683__$1 = state_52683;
var statearr_52703_55307 = state_52683__$1;
(statearr_52703_55307[(2)] = inst_52660);

(statearr_52703_55307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (10))){
var inst_52679 = (state_52683[(2)]);
var state_52683__$1 = state_52683;
var statearr_52704_55313 = state_52683__$1;
(statearr_52704_55313[(2)] = inst_52679);

(statearr_52704_55313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52684 === (8))){
var inst_52660 = (state_52683[(7)]);
var inst_52670 = cljs.core.next(inst_52660);
var inst_52660__$1 = inst_52670;
var state_52683__$1 = (function (){var statearr_52705 = state_52683;
(statearr_52705[(7)] = inst_52660__$1);

return statearr_52705;
})();
var statearr_52706_55317 = state_52683__$1;
(statearr_52706_55317[(2)] = null);

(statearr_52706_55317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_52709 = [null,null,null,null,null,null,null,null];
(statearr_52709[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_52709[(1)] = (1));

return statearr_52709;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_52683){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52683);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e52710){var ex__51477__auto__ = e52710;
var statearr_52711_55332 = state_52683;
(statearr_52711_55332[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52683[(4)]))){
var statearr_52712_55333 = state_52683;
(statearr_52712_55333[(1)] = cljs.core.first((state_52683[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55337 = state_52683;
state_52683 = G__55337;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_52683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_52683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_52713 = f__51876__auto__();
(statearr_52713[(6)] = c__51875__auto__);

return statearr_52713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));

return c__51875__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52717 = arguments.length;
switch (G__52717) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_55343 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_55343(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_55370 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_55370(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_55371 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_55371(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_55377 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_55377(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52734 = (function (ch,cs,meta52735){
this.ch = ch;
this.cs = cs;
this.meta52735 = meta52735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52736,meta52735__$1){
var self__ = this;
var _52736__$1 = this;
return (new cljs.core.async.t_cljs$core$async52734(self__.ch,self__.cs,meta52735__$1));
}));

(cljs.core.async.t_cljs$core$async52734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52736){
var self__ = this;
var _52736__$1 = this;
return self__.meta52735;
}));

(cljs.core.async.t_cljs$core$async52734.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52734.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52734.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async52734.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async52734.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async52734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52735","meta52735",2137503538,null)], null);
}));

(cljs.core.async.t_cljs$core$async52734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52734");

(cljs.core.async.t_cljs$core$async52734.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52734.
 */
cljs.core.async.__GT_t_cljs$core$async52734 = (function cljs$core$async$mult_$___GT_t_cljs$core$async52734(ch__$1,cs__$1,meta52735){
return (new cljs.core.async.t_cljs$core$async52734(ch__$1,cs__$1,meta52735));
});

}

return (new cljs.core.async.t_cljs$core$async52734(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__51875__auto___55452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_52887){
var state_val_52888 = (state_52887[(1)]);
if((state_val_52888 === (7))){
var inst_52883 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
var statearr_52889_55457 = state_52887__$1;
(statearr_52889_55457[(2)] = inst_52883);

(statearr_52889_55457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (20))){
var inst_52781 = (state_52887[(7)]);
var inst_52793 = cljs.core.first(inst_52781);
var inst_52794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52793,(0),null);
var inst_52795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52793,(1),null);
var state_52887__$1 = (function (){var statearr_52890 = state_52887;
(statearr_52890[(8)] = inst_52794);

return statearr_52890;
})();
if(cljs.core.truth_(inst_52795)){
var statearr_52891_55470 = state_52887__$1;
(statearr_52891_55470[(1)] = (22));

} else {
var statearr_52892_55475 = state_52887__$1;
(statearr_52892_55475[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (27))){
var inst_52831 = (state_52887[(9)]);
var inst_52836 = (state_52887[(10)]);
var inst_52829 = (state_52887[(11)]);
var inst_52750 = (state_52887[(12)]);
var inst_52836__$1 = cljs.core._nth(inst_52829,inst_52831);
var inst_52837 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52836__$1,inst_52750,done);
var state_52887__$1 = (function (){var statearr_52898 = state_52887;
(statearr_52898[(10)] = inst_52836__$1);

return statearr_52898;
})();
if(cljs.core.truth_(inst_52837)){
var statearr_52900_55485 = state_52887__$1;
(statearr_52900_55485[(1)] = (30));

} else {
var statearr_52901_55488 = state_52887__$1;
(statearr_52901_55488[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (1))){
var state_52887__$1 = state_52887;
var statearr_52904_55491 = state_52887__$1;
(statearr_52904_55491[(2)] = null);

(statearr_52904_55491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (24))){
var inst_52781 = (state_52887[(7)]);
var inst_52802 = (state_52887[(2)]);
var inst_52803 = cljs.core.next(inst_52781);
var inst_52759 = inst_52803;
var inst_52760 = null;
var inst_52761 = (0);
var inst_52762 = (0);
var state_52887__$1 = (function (){var statearr_52906 = state_52887;
(statearr_52906[(13)] = inst_52759);

(statearr_52906[(14)] = inst_52761);

(statearr_52906[(15)] = inst_52802);

(statearr_52906[(16)] = inst_52762);

(statearr_52906[(17)] = inst_52760);

return statearr_52906;
})();
var statearr_52907_55500 = state_52887__$1;
(statearr_52907_55500[(2)] = null);

(statearr_52907_55500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (39))){
var state_52887__$1 = state_52887;
var statearr_52911_55501 = state_52887__$1;
(statearr_52911_55501[(2)] = null);

(statearr_52911_55501[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (4))){
var inst_52750 = (state_52887[(12)]);
var inst_52750__$1 = (state_52887[(2)]);
var inst_52751 = (inst_52750__$1 == null);
var state_52887__$1 = (function (){var statearr_52912 = state_52887;
(statearr_52912[(12)] = inst_52750__$1);

return statearr_52912;
})();
if(cljs.core.truth_(inst_52751)){
var statearr_52915_55508 = state_52887__$1;
(statearr_52915_55508[(1)] = (5));

} else {
var statearr_52916_55509 = state_52887__$1;
(statearr_52916_55509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (15))){
var inst_52759 = (state_52887[(13)]);
var inst_52761 = (state_52887[(14)]);
var inst_52762 = (state_52887[(16)]);
var inst_52760 = (state_52887[(17)]);
var inst_52777 = (state_52887[(2)]);
var inst_52778 = (inst_52762 + (1));
var tmp52908 = inst_52759;
var tmp52909 = inst_52761;
var tmp52910 = inst_52760;
var inst_52759__$1 = tmp52908;
var inst_52760__$1 = tmp52910;
var inst_52761__$1 = tmp52909;
var inst_52762__$1 = inst_52778;
var state_52887__$1 = (function (){var statearr_52920 = state_52887;
(statearr_52920[(18)] = inst_52777);

(statearr_52920[(13)] = inst_52759__$1);

(statearr_52920[(14)] = inst_52761__$1);

(statearr_52920[(16)] = inst_52762__$1);

(statearr_52920[(17)] = inst_52760__$1);

return statearr_52920;
})();
var statearr_52921_55534 = state_52887__$1;
(statearr_52921_55534[(2)] = null);

(statearr_52921_55534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (21))){
var inst_52806 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
var statearr_52926_55537 = state_52887__$1;
(statearr_52926_55537[(2)] = inst_52806);

(statearr_52926_55537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (31))){
var inst_52836 = (state_52887[(10)]);
var inst_52841 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52836);
var state_52887__$1 = state_52887;
var statearr_52929_55545 = state_52887__$1;
(statearr_52929_55545[(2)] = inst_52841);

(statearr_52929_55545[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (32))){
var inst_52831 = (state_52887[(9)]);
var inst_52829 = (state_52887[(11)]);
var inst_52830 = (state_52887[(19)]);
var inst_52828 = (state_52887[(20)]);
var inst_52843 = (state_52887[(2)]);
var inst_52844 = (inst_52831 + (1));
var tmp52922 = inst_52829;
var tmp52923 = inst_52830;
var tmp52924 = inst_52828;
var inst_52828__$1 = tmp52924;
var inst_52829__$1 = tmp52922;
var inst_52830__$1 = tmp52923;
var inst_52831__$1 = inst_52844;
var state_52887__$1 = (function (){var statearr_52930 = state_52887;
(statearr_52930[(9)] = inst_52831__$1);

(statearr_52930[(11)] = inst_52829__$1);

(statearr_52930[(19)] = inst_52830__$1);

(statearr_52930[(21)] = inst_52843);

(statearr_52930[(20)] = inst_52828__$1);

return statearr_52930;
})();
var statearr_52936_55552 = state_52887__$1;
(statearr_52936_55552[(2)] = null);

(statearr_52936_55552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (40))){
var inst_52856 = (state_52887[(22)]);
var inst_52860 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52856);
var state_52887__$1 = state_52887;
var statearr_52937_55560 = state_52887__$1;
(statearr_52937_55560[(2)] = inst_52860);

(statearr_52937_55560[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (33))){
var inst_52847 = (state_52887[(23)]);
var inst_52849 = cljs.core.chunked_seq_QMARK_(inst_52847);
var state_52887__$1 = state_52887;
if(inst_52849){
var statearr_52945_55563 = state_52887__$1;
(statearr_52945_55563[(1)] = (36));

} else {
var statearr_52946_55567 = state_52887__$1;
(statearr_52946_55567[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (13))){
var inst_52771 = (state_52887[(24)]);
var inst_52774 = cljs.core.async.close_BANG_(inst_52771);
var state_52887__$1 = state_52887;
var statearr_52947_55568 = state_52887__$1;
(statearr_52947_55568[(2)] = inst_52774);

(statearr_52947_55568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (22))){
var inst_52794 = (state_52887[(8)]);
var inst_52799 = cljs.core.async.close_BANG_(inst_52794);
var state_52887__$1 = state_52887;
var statearr_52954_55578 = state_52887__$1;
(statearr_52954_55578[(2)] = inst_52799);

(statearr_52954_55578[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (36))){
var inst_52847 = (state_52887[(23)]);
var inst_52851 = cljs.core.chunk_first(inst_52847);
var inst_52852 = cljs.core.chunk_rest(inst_52847);
var inst_52853 = cljs.core.count(inst_52851);
var inst_52828 = inst_52852;
var inst_52829 = inst_52851;
var inst_52830 = inst_52853;
var inst_52831 = (0);
var state_52887__$1 = (function (){var statearr_52961 = state_52887;
(statearr_52961[(9)] = inst_52831);

(statearr_52961[(11)] = inst_52829);

(statearr_52961[(19)] = inst_52830);

(statearr_52961[(20)] = inst_52828);

return statearr_52961;
})();
var statearr_52962_55582 = state_52887__$1;
(statearr_52962_55582[(2)] = null);

(statearr_52962_55582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (41))){
var inst_52847 = (state_52887[(23)]);
var inst_52862 = (state_52887[(2)]);
var inst_52863 = cljs.core.next(inst_52847);
var inst_52828 = inst_52863;
var inst_52829 = null;
var inst_52830 = (0);
var inst_52831 = (0);
var state_52887__$1 = (function (){var statearr_52963 = state_52887;
(statearr_52963[(9)] = inst_52831);

(statearr_52963[(11)] = inst_52829);

(statearr_52963[(19)] = inst_52830);

(statearr_52963[(20)] = inst_52828);

(statearr_52963[(25)] = inst_52862);

return statearr_52963;
})();
var statearr_52967_55601 = state_52887__$1;
(statearr_52967_55601[(2)] = null);

(statearr_52967_55601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (43))){
var state_52887__$1 = state_52887;
var statearr_52968_55602 = state_52887__$1;
(statearr_52968_55602[(2)] = null);

(statearr_52968_55602[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (29))){
var inst_52871 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
var statearr_52969_55603 = state_52887__$1;
(statearr_52969_55603[(2)] = inst_52871);

(statearr_52969_55603[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (44))){
var inst_52880 = (state_52887[(2)]);
var state_52887__$1 = (function (){var statearr_52974 = state_52887;
(statearr_52974[(26)] = inst_52880);

return statearr_52974;
})();
var statearr_52978_55606 = state_52887__$1;
(statearr_52978_55606[(2)] = null);

(statearr_52978_55606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (6))){
var inst_52817 = (state_52887[(27)]);
var inst_52816 = cljs.core.deref(cs);
var inst_52817__$1 = cljs.core.keys(inst_52816);
var inst_52818 = cljs.core.count(inst_52817__$1);
var inst_52819 = cljs.core.reset_BANG_(dctr,inst_52818);
var inst_52827 = cljs.core.seq(inst_52817__$1);
var inst_52828 = inst_52827;
var inst_52829 = null;
var inst_52830 = (0);
var inst_52831 = (0);
var state_52887__$1 = (function (){var statearr_52979 = state_52887;
(statearr_52979[(9)] = inst_52831);

(statearr_52979[(28)] = inst_52819);

(statearr_52979[(11)] = inst_52829);

(statearr_52979[(19)] = inst_52830);

(statearr_52979[(27)] = inst_52817__$1);

(statearr_52979[(20)] = inst_52828);

return statearr_52979;
})();
var statearr_52980_55619 = state_52887__$1;
(statearr_52980_55619[(2)] = null);

(statearr_52980_55619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (28))){
var inst_52828 = (state_52887[(20)]);
var inst_52847 = (state_52887[(23)]);
var inst_52847__$1 = cljs.core.seq(inst_52828);
var state_52887__$1 = (function (){var statearr_52983 = state_52887;
(statearr_52983[(23)] = inst_52847__$1);

return statearr_52983;
})();
if(inst_52847__$1){
var statearr_52984_55628 = state_52887__$1;
(statearr_52984_55628[(1)] = (33));

} else {
var statearr_52987_55630 = state_52887__$1;
(statearr_52987_55630[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (25))){
var inst_52831 = (state_52887[(9)]);
var inst_52830 = (state_52887[(19)]);
var inst_52833 = (inst_52831 < inst_52830);
var inst_52834 = inst_52833;
var state_52887__$1 = state_52887;
if(cljs.core.truth_(inst_52834)){
var statearr_52988_55632 = state_52887__$1;
(statearr_52988_55632[(1)] = (27));

} else {
var statearr_52989_55633 = state_52887__$1;
(statearr_52989_55633[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (34))){
var state_52887__$1 = state_52887;
var statearr_52991_55635 = state_52887__$1;
(statearr_52991_55635[(2)] = null);

(statearr_52991_55635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (17))){
var state_52887__$1 = state_52887;
var statearr_52992_55637 = state_52887__$1;
(statearr_52992_55637[(2)] = null);

(statearr_52992_55637[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (3))){
var inst_52885 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52887__$1,inst_52885);
} else {
if((state_val_52888 === (12))){
var inst_52811 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
var statearr_52993_55642 = state_52887__$1;
(statearr_52993_55642[(2)] = inst_52811);

(statearr_52993_55642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (2))){
var state_52887__$1 = state_52887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52887__$1,(4),ch);
} else {
if((state_val_52888 === (23))){
var state_52887__$1 = state_52887;
var statearr_52997_55646 = state_52887__$1;
(statearr_52997_55646[(2)] = null);

(statearr_52997_55646[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (35))){
var inst_52869 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
var statearr_52998_55676 = state_52887__$1;
(statearr_52998_55676[(2)] = inst_52869);

(statearr_52998_55676[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (19))){
var inst_52781 = (state_52887[(7)]);
var inst_52785 = cljs.core.chunk_first(inst_52781);
var inst_52786 = cljs.core.chunk_rest(inst_52781);
var inst_52787 = cljs.core.count(inst_52785);
var inst_52759 = inst_52786;
var inst_52760 = inst_52785;
var inst_52761 = inst_52787;
var inst_52762 = (0);
var state_52887__$1 = (function (){var statearr_52999 = state_52887;
(statearr_52999[(13)] = inst_52759);

(statearr_52999[(14)] = inst_52761);

(statearr_52999[(16)] = inst_52762);

(statearr_52999[(17)] = inst_52760);

return statearr_52999;
})();
var statearr_53001_55686 = state_52887__$1;
(statearr_53001_55686[(2)] = null);

(statearr_53001_55686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (11))){
var inst_52759 = (state_52887[(13)]);
var inst_52781 = (state_52887[(7)]);
var inst_52781__$1 = cljs.core.seq(inst_52759);
var state_52887__$1 = (function (){var statearr_53002 = state_52887;
(statearr_53002[(7)] = inst_52781__$1);

return statearr_53002;
})();
if(inst_52781__$1){
var statearr_53003_55687 = state_52887__$1;
(statearr_53003_55687[(1)] = (16));

} else {
var statearr_53004_55689 = state_52887__$1;
(statearr_53004_55689[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (9))){
var inst_52813 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
var statearr_53005_55692 = state_52887__$1;
(statearr_53005_55692[(2)] = inst_52813);

(statearr_53005_55692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (5))){
var inst_52757 = cljs.core.deref(cs);
var inst_52758 = cljs.core.seq(inst_52757);
var inst_52759 = inst_52758;
var inst_52760 = null;
var inst_52761 = (0);
var inst_52762 = (0);
var state_52887__$1 = (function (){var statearr_53006 = state_52887;
(statearr_53006[(13)] = inst_52759);

(statearr_53006[(14)] = inst_52761);

(statearr_53006[(16)] = inst_52762);

(statearr_53006[(17)] = inst_52760);

return statearr_53006;
})();
var statearr_53007_55695 = state_52887__$1;
(statearr_53007_55695[(2)] = null);

(statearr_53007_55695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (14))){
var state_52887__$1 = state_52887;
var statearr_53008_55698 = state_52887__$1;
(statearr_53008_55698[(2)] = null);

(statearr_53008_55698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (45))){
var inst_52877 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
var statearr_53011_55699 = state_52887__$1;
(statearr_53011_55699[(2)] = inst_52877);

(statearr_53011_55699[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (26))){
var inst_52817 = (state_52887[(27)]);
var inst_52873 = (state_52887[(2)]);
var inst_52874 = cljs.core.seq(inst_52817);
var state_52887__$1 = (function (){var statearr_53012 = state_52887;
(statearr_53012[(29)] = inst_52873);

return statearr_53012;
})();
if(inst_52874){
var statearr_53013_55700 = state_52887__$1;
(statearr_53013_55700[(1)] = (42));

} else {
var statearr_53014_55701 = state_52887__$1;
(statearr_53014_55701[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (16))){
var inst_52781 = (state_52887[(7)]);
var inst_52783 = cljs.core.chunked_seq_QMARK_(inst_52781);
var state_52887__$1 = state_52887;
if(inst_52783){
var statearr_53018_55702 = state_52887__$1;
(statearr_53018_55702[(1)] = (19));

} else {
var statearr_53019_55703 = state_52887__$1;
(statearr_53019_55703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (38))){
var inst_52866 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
var statearr_53020_55704 = state_52887__$1;
(statearr_53020_55704[(2)] = inst_52866);

(statearr_53020_55704[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (30))){
var state_52887__$1 = state_52887;
var statearr_53021_55705 = state_52887__$1;
(statearr_53021_55705[(2)] = null);

(statearr_53021_55705[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (10))){
var inst_52762 = (state_52887[(16)]);
var inst_52760 = (state_52887[(17)]);
var inst_52770 = cljs.core._nth(inst_52760,inst_52762);
var inst_52771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52770,(0),null);
var inst_52772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52770,(1),null);
var state_52887__$1 = (function (){var statearr_53022 = state_52887;
(statearr_53022[(24)] = inst_52771);

return statearr_53022;
})();
if(cljs.core.truth_(inst_52772)){
var statearr_53023_55721 = state_52887__$1;
(statearr_53023_55721[(1)] = (13));

} else {
var statearr_53024_55722 = state_52887__$1;
(statearr_53024_55722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (18))){
var inst_52809 = (state_52887[(2)]);
var state_52887__$1 = state_52887;
var statearr_53025_55724 = state_52887__$1;
(statearr_53025_55724[(2)] = inst_52809);

(statearr_53025_55724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (42))){
var state_52887__$1 = state_52887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52887__$1,(45),dchan);
} else {
if((state_val_52888 === (37))){
var inst_52856 = (state_52887[(22)]);
var inst_52750 = (state_52887[(12)]);
var inst_52847 = (state_52887[(23)]);
var inst_52856__$1 = cljs.core.first(inst_52847);
var inst_52857 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52856__$1,inst_52750,done);
var state_52887__$1 = (function (){var statearr_53027 = state_52887;
(statearr_53027[(22)] = inst_52856__$1);

return statearr_53027;
})();
if(cljs.core.truth_(inst_52857)){
var statearr_53028_55726 = state_52887__$1;
(statearr_53028_55726[(1)] = (39));

} else {
var statearr_53029_55727 = state_52887__$1;
(statearr_53029_55727[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52888 === (8))){
var inst_52761 = (state_52887[(14)]);
var inst_52762 = (state_52887[(16)]);
var inst_52764 = (inst_52762 < inst_52761);
var inst_52765 = inst_52764;
var state_52887__$1 = state_52887;
if(cljs.core.truth_(inst_52765)){
var statearr_53032_55730 = state_52887__$1;
(statearr_53032_55730[(1)] = (10));

} else {
var statearr_53035_55732 = state_52887__$1;
(statearr_53035_55732[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__51474__auto__ = null;
var cljs$core$async$mult_$_state_machine__51474__auto____0 = (function (){
var statearr_53038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53038[(0)] = cljs$core$async$mult_$_state_machine__51474__auto__);

(statearr_53038[(1)] = (1));

return statearr_53038;
});
var cljs$core$async$mult_$_state_machine__51474__auto____1 = (function (state_52887){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_52887);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e53039){var ex__51477__auto__ = e53039;
var statearr_53040_55746 = state_52887;
(statearr_53040_55746[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_52887[(4)]))){
var statearr_53041_55748 = state_52887;
(statearr_53041_55748[(1)] = cljs.core.first((state_52887[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55752 = state_52887;
state_52887 = G__55752;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51474__auto__ = function(state_52887){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51474__auto____1.call(this,state_52887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51474__auto____0;
cljs$core$async$mult_$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51474__auto____1;
return cljs$core$async$mult_$_state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_53043 = f__51876__auto__();
(statearr_53043[(6)] = c__51875__auto___55452);

return statearr_53043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__53049 = arguments.length;
switch (G__53049) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_55764 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_55764(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_55778 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_55778(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_55798 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_55798(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_55804 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_55804(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_55836 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_55836(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55843 = arguments.length;
var i__4731__auto___55844 = (0);
while(true){
if((i__4731__auto___55844 < len__4730__auto___55843)){
args__4736__auto__.push((arguments[i__4731__auto___55844]));

var G__55845 = (i__4731__auto___55844 + (1));
i__4731__auto___55844 = G__55845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__53082){
var map__53083 = p__53082;
var map__53083__$1 = (((((!((map__53083 == null))))?(((((map__53083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53083):map__53083);
var opts = map__53083__$1;
var statearr_53086_55853 = state;
(statearr_53086_55853[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_53087_55855 = state;
(statearr_53087_55855[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_53090_55858 = state;
(statearr_53090_55858[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq53077){
var G__53078 = cljs.core.first(seq53077);
var seq53077__$1 = cljs.core.next(seq53077);
var G__53079 = cljs.core.first(seq53077__$1);
var seq53077__$2 = cljs.core.next(seq53077__$1);
var G__53080 = cljs.core.first(seq53077__$2);
var seq53077__$3 = cljs.core.next(seq53077__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53078,G__53079,G__53080,seq53077__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53107 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53108){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta53108 = meta53108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53109,meta53108__$1){
var self__ = this;
var _53109__$1 = this;
return (new cljs.core.async.t_cljs$core$async53107(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53108__$1));
}));

(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53109){
var self__ = this;
var _53109__$1 = this;
return self__.meta53108;
}));

(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53107.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53108","meta53108",945687547,null)], null);
}));

(cljs.core.async.t_cljs$core$async53107.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53107");

(cljs.core.async.t_cljs$core$async53107.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53107");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53107.
 */
cljs.core.async.__GT_t_cljs$core$async53107 = (function cljs$core$async$mix_$___GT_t_cljs$core$async53107(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53108){
return (new cljs.core.async.t_cljs$core$async53107(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53108));
});

}

return (new cljs.core.async.t_cljs$core$async53107(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51875__auto___55892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_53233){
var state_val_53235 = (state_53233[(1)]);
if((state_val_53235 === (7))){
var inst_53139 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
var statearr_53237_55894 = state_53233__$1;
(statearr_53237_55894[(2)] = inst_53139);

(statearr_53237_55894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (20))){
var inst_53151 = (state_53233[(7)]);
var state_53233__$1 = state_53233;
var statearr_53238_55898 = state_53233__$1;
(statearr_53238_55898[(2)] = inst_53151);

(statearr_53238_55898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (27))){
var state_53233__$1 = state_53233;
var statearr_53239_55917 = state_53233__$1;
(statearr_53239_55917[(2)] = null);

(statearr_53239_55917[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (1))){
var inst_53125 = (state_53233[(8)]);
var inst_53125__$1 = calc_state();
var inst_53127 = (inst_53125__$1 == null);
var inst_53128 = cljs.core.not(inst_53127);
var state_53233__$1 = (function (){var statearr_53241 = state_53233;
(statearr_53241[(8)] = inst_53125__$1);

return statearr_53241;
})();
if(inst_53128){
var statearr_53242_55920 = state_53233__$1;
(statearr_53242_55920[(1)] = (2));

} else {
var statearr_53243_55921 = state_53233__$1;
(statearr_53243_55921[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (24))){
var inst_53177 = (state_53233[(9)]);
var inst_53202 = (state_53233[(10)]);
var inst_53186 = (state_53233[(11)]);
var inst_53202__$1 = (inst_53177.cljs$core$IFn$_invoke$arity$1 ? inst_53177.cljs$core$IFn$_invoke$arity$1(inst_53186) : inst_53177.call(null,inst_53186));
var state_53233__$1 = (function (){var statearr_53245 = state_53233;
(statearr_53245[(10)] = inst_53202__$1);

return statearr_53245;
})();
if(cljs.core.truth_(inst_53202__$1)){
var statearr_53247_55928 = state_53233__$1;
(statearr_53247_55928[(1)] = (29));

} else {
var statearr_53248_55933 = state_53233__$1;
(statearr_53248_55933[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (4))){
var inst_53142 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
if(cljs.core.truth_(inst_53142)){
var statearr_53250_55940 = state_53233__$1;
(statearr_53250_55940[(1)] = (8));

} else {
var statearr_53251_55942 = state_53233__$1;
(statearr_53251_55942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (15))){
var inst_53170 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
if(cljs.core.truth_(inst_53170)){
var statearr_53252_55950 = state_53233__$1;
(statearr_53252_55950[(1)] = (19));

} else {
var statearr_53253_55951 = state_53233__$1;
(statearr_53253_55951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (21))){
var inst_53175 = (state_53233[(12)]);
var inst_53175__$1 = (state_53233[(2)]);
var inst_53177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53175__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53175__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53175__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53233__$1 = (function (){var statearr_53255 = state_53233;
(statearr_53255[(9)] = inst_53177);

(statearr_53255[(13)] = inst_53178);

(statearr_53255[(12)] = inst_53175__$1);

return statearr_53255;
})();
return cljs.core.async.ioc_alts_BANG_(state_53233__$1,(22),inst_53179);
} else {
if((state_val_53235 === (31))){
var inst_53211 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
if(cljs.core.truth_(inst_53211)){
var statearr_53257_55965 = state_53233__$1;
(statearr_53257_55965[(1)] = (32));

} else {
var statearr_53258_55966 = state_53233__$1;
(statearr_53258_55966[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (32))){
var inst_53185 = (state_53233[(14)]);
var state_53233__$1 = state_53233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53233__$1,(35),out,inst_53185);
} else {
if((state_val_53235 === (33))){
var inst_53175 = (state_53233[(12)]);
var inst_53151 = inst_53175;
var state_53233__$1 = (function (){var statearr_53260 = state_53233;
(statearr_53260[(7)] = inst_53151);

return statearr_53260;
})();
var statearr_53262_55972 = state_53233__$1;
(statearr_53262_55972[(2)] = null);

(statearr_53262_55972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (13))){
var inst_53151 = (state_53233[(7)]);
var inst_53159 = inst_53151.cljs$lang$protocol_mask$partition0$;
var inst_53160 = (inst_53159 & (64));
var inst_53161 = inst_53151.cljs$core$ISeq$;
var inst_53162 = (cljs.core.PROTOCOL_SENTINEL === inst_53161);
var inst_53163 = ((inst_53160) || (inst_53162));
var state_53233__$1 = state_53233;
if(cljs.core.truth_(inst_53163)){
var statearr_53264_55979 = state_53233__$1;
(statearr_53264_55979[(1)] = (16));

} else {
var statearr_53265_55980 = state_53233__$1;
(statearr_53265_55980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (22))){
var inst_53185 = (state_53233[(14)]);
var inst_53186 = (state_53233[(11)]);
var inst_53184 = (state_53233[(2)]);
var inst_53185__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53184,(0),null);
var inst_53186__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53184,(1),null);
var inst_53188 = (inst_53185__$1 == null);
var inst_53189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53186__$1,change);
var inst_53190 = ((inst_53188) || (inst_53189));
var state_53233__$1 = (function (){var statearr_53267 = state_53233;
(statearr_53267[(14)] = inst_53185__$1);

(statearr_53267[(11)] = inst_53186__$1);

return statearr_53267;
})();
if(cljs.core.truth_(inst_53190)){
var statearr_53268_56041 = state_53233__$1;
(statearr_53268_56041[(1)] = (23));

} else {
var statearr_53269_56042 = state_53233__$1;
(statearr_53269_56042[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (36))){
var inst_53175 = (state_53233[(12)]);
var inst_53151 = inst_53175;
var state_53233__$1 = (function (){var statearr_53271 = state_53233;
(statearr_53271[(7)] = inst_53151);

return statearr_53271;
})();
var statearr_53272_56049 = state_53233__$1;
(statearr_53272_56049[(2)] = null);

(statearr_53272_56049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (29))){
var inst_53202 = (state_53233[(10)]);
var state_53233__$1 = state_53233;
var statearr_53274_56050 = state_53233__$1;
(statearr_53274_56050[(2)] = inst_53202);

(statearr_53274_56050[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (6))){
var state_53233__$1 = state_53233;
var statearr_53276_56051 = state_53233__$1;
(statearr_53276_56051[(2)] = false);

(statearr_53276_56051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (28))){
var inst_53197 = (state_53233[(2)]);
var inst_53198 = calc_state();
var inst_53151 = inst_53198;
var state_53233__$1 = (function (){var statearr_53278 = state_53233;
(statearr_53278[(15)] = inst_53197);

(statearr_53278[(7)] = inst_53151);

return statearr_53278;
})();
var statearr_53279_56057 = state_53233__$1;
(statearr_53279_56057[(2)] = null);

(statearr_53279_56057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (25))){
var inst_53225 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
var statearr_53281_56058 = state_53233__$1;
(statearr_53281_56058[(2)] = inst_53225);

(statearr_53281_56058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (34))){
var inst_53223 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
var statearr_53282_56059 = state_53233__$1;
(statearr_53282_56059[(2)] = inst_53223);

(statearr_53282_56059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (17))){
var state_53233__$1 = state_53233;
var statearr_53284_56060 = state_53233__$1;
(statearr_53284_56060[(2)] = false);

(statearr_53284_56060[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (3))){
var state_53233__$1 = state_53233;
var statearr_53285_56062 = state_53233__$1;
(statearr_53285_56062[(2)] = false);

(statearr_53285_56062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (12))){
var inst_53228 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53233__$1,inst_53228);
} else {
if((state_val_53235 === (2))){
var inst_53125 = (state_53233[(8)]);
var inst_53131 = inst_53125.cljs$lang$protocol_mask$partition0$;
var inst_53132 = (inst_53131 & (64));
var inst_53133 = inst_53125.cljs$core$ISeq$;
var inst_53134 = (cljs.core.PROTOCOL_SENTINEL === inst_53133);
var inst_53135 = ((inst_53132) || (inst_53134));
var state_53233__$1 = state_53233;
if(cljs.core.truth_(inst_53135)){
var statearr_53288_56083 = state_53233__$1;
(statearr_53288_56083[(1)] = (5));

} else {
var statearr_53289_56084 = state_53233__$1;
(statearr_53289_56084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (23))){
var inst_53185 = (state_53233[(14)]);
var inst_53192 = (inst_53185 == null);
var state_53233__$1 = state_53233;
if(cljs.core.truth_(inst_53192)){
var statearr_53291_56085 = state_53233__$1;
(statearr_53291_56085[(1)] = (26));

} else {
var statearr_53292_56086 = state_53233__$1;
(statearr_53292_56086[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (35))){
var inst_53214 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
if(cljs.core.truth_(inst_53214)){
var statearr_53293_56087 = state_53233__$1;
(statearr_53293_56087[(1)] = (36));

} else {
var statearr_53295_56089 = state_53233__$1;
(statearr_53295_56089[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (19))){
var inst_53151 = (state_53233[(7)]);
var inst_53172 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53151);
var state_53233__$1 = state_53233;
var statearr_53296_56096 = state_53233__$1;
(statearr_53296_56096[(2)] = inst_53172);

(statearr_53296_56096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (11))){
var inst_53151 = (state_53233[(7)]);
var inst_53156 = (inst_53151 == null);
var inst_53157 = cljs.core.not(inst_53156);
var state_53233__$1 = state_53233;
if(inst_53157){
var statearr_53298_56097 = state_53233__$1;
(statearr_53298_56097[(1)] = (13));

} else {
var statearr_53299_56098 = state_53233__$1;
(statearr_53299_56098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (9))){
var inst_53125 = (state_53233[(8)]);
var state_53233__$1 = state_53233;
var statearr_53304_56099 = state_53233__$1;
(statearr_53304_56099[(2)] = inst_53125);

(statearr_53304_56099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (5))){
var state_53233__$1 = state_53233;
var statearr_53307_56102 = state_53233__$1;
(statearr_53307_56102[(2)] = true);

(statearr_53307_56102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (14))){
var state_53233__$1 = state_53233;
var statearr_53309_56104 = state_53233__$1;
(statearr_53309_56104[(2)] = false);

(statearr_53309_56104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (26))){
var inst_53186 = (state_53233[(11)]);
var inst_53194 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_53186);
var state_53233__$1 = state_53233;
var statearr_53314_56107 = state_53233__$1;
(statearr_53314_56107[(2)] = inst_53194);

(statearr_53314_56107[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (16))){
var state_53233__$1 = state_53233;
var statearr_53318_56108 = state_53233__$1;
(statearr_53318_56108[(2)] = true);

(statearr_53318_56108[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (38))){
var inst_53219 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
var statearr_53323_56127 = state_53233__$1;
(statearr_53323_56127[(2)] = inst_53219);

(statearr_53323_56127[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (30))){
var inst_53177 = (state_53233[(9)]);
var inst_53186 = (state_53233[(11)]);
var inst_53178 = (state_53233[(13)]);
var inst_53206 = cljs.core.empty_QMARK_(inst_53177);
var inst_53207 = (inst_53178.cljs$core$IFn$_invoke$arity$1 ? inst_53178.cljs$core$IFn$_invoke$arity$1(inst_53186) : inst_53178.call(null,inst_53186));
var inst_53208 = cljs.core.not(inst_53207);
var inst_53209 = ((inst_53206) && (inst_53208));
var state_53233__$1 = state_53233;
var statearr_53328_56135 = state_53233__$1;
(statearr_53328_56135[(2)] = inst_53209);

(statearr_53328_56135[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (10))){
var inst_53125 = (state_53233[(8)]);
var inst_53147 = (state_53233[(2)]);
var inst_53148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53147,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53147,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53147,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53151 = inst_53125;
var state_53233__$1 = (function (){var statearr_53332 = state_53233;
(statearr_53332[(16)] = inst_53149);

(statearr_53332[(7)] = inst_53151);

(statearr_53332[(17)] = inst_53150);

(statearr_53332[(18)] = inst_53148);

return statearr_53332;
})();
var statearr_53333_56142 = state_53233__$1;
(statearr_53333_56142[(2)] = null);

(statearr_53333_56142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (18))){
var inst_53167 = (state_53233[(2)]);
var state_53233__$1 = state_53233;
var statearr_53335_56145 = state_53233__$1;
(statearr_53335_56145[(2)] = inst_53167);

(statearr_53335_56145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (37))){
var state_53233__$1 = state_53233;
var statearr_53337_56155 = state_53233__$1;
(statearr_53337_56155[(2)] = null);

(statearr_53337_56155[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53235 === (8))){
var inst_53125 = (state_53233[(8)]);
var inst_53144 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53125);
var state_53233__$1 = state_53233;
var statearr_53339_56162 = state_53233__$1;
(statearr_53339_56162[(2)] = inst_53144);

(statearr_53339_56162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__51474__auto__ = null;
var cljs$core$async$mix_$_state_machine__51474__auto____0 = (function (){
var statearr_53342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53342[(0)] = cljs$core$async$mix_$_state_machine__51474__auto__);

(statearr_53342[(1)] = (1));

return statearr_53342;
});
var cljs$core$async$mix_$_state_machine__51474__auto____1 = (function (state_53233){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_53233);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e53344){var ex__51477__auto__ = e53344;
var statearr_53345_56169 = state_53233;
(statearr_53345_56169[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_53233[(4)]))){
var statearr_53346_56171 = state_53233;
(statearr_53346_56171[(1)] = cljs.core.first((state_53233[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56175 = state_53233;
state_53233 = G__56175;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51474__auto__ = function(state_53233){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51474__auto____1.call(this,state_53233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51474__auto____0;
cljs$core$async$mix_$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51474__auto____1;
return cljs$core$async$mix_$_state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_53347 = f__51876__auto__();
(statearr_53347[(6)] = c__51875__auto___55892);

return statearr_53347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_56187 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_56187(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56200 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_56200(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56211 = (function() {
var G__56217 = null;
var G__56217__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__56217__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__56217 = function(p,v){
switch(arguments.length){
case 1:
return G__56217__1.call(this,p);
case 2:
return G__56217__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56217.cljs$core$IFn$_invoke$arity$1 = G__56217__1;
G__56217.cljs$core$IFn$_invoke$arity$2 = G__56217__2;
return G__56217;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53378 = arguments.length;
switch (G__53378) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56211(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56211(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__53411 = arguments.length;
switch (G__53411) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__53409_SHARP_){
if(cljs.core.truth_((p1__53409_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53409_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__53409_SHARP_.call(null,topic)))){
return p1__53409_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53409_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53426 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53427){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53427 = meta53427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53428,meta53427__$1){
var self__ = this;
var _53428__$1 = this;
return (new cljs.core.async.t_cljs$core$async53426(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53427__$1));
}));

(cljs.core.async.t_cljs$core$async53426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53428){
var self__ = this;
var _53428__$1 = this;
return self__.meta53427;
}));

(cljs.core.async.t_cljs$core$async53426.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53426.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async53426.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53426.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async53426.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async53426.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async53426.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async53426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53427","meta53427",-1933026591,null)], null);
}));

(cljs.core.async.t_cljs$core$async53426.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53426");

(cljs.core.async.t_cljs$core$async53426.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53426");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53426.
 */
cljs.core.async.__GT_t_cljs$core$async53426 = (function cljs$core$async$__GT_t_cljs$core$async53426(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53427){
return (new cljs.core.async.t_cljs$core$async53426(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53427));
});

}

return (new cljs.core.async.t_cljs$core$async53426(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51875__auto___56291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_53526){
var state_val_53527 = (state_53526[(1)]);
if((state_val_53527 === (7))){
var inst_53521 = (state_53526[(2)]);
var state_53526__$1 = state_53526;
var statearr_53529_56294 = state_53526__$1;
(statearr_53529_56294[(2)] = inst_53521);

(statearr_53529_56294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (20))){
var state_53526__$1 = state_53526;
var statearr_53530_56296 = state_53526__$1;
(statearr_53530_56296[(2)] = null);

(statearr_53530_56296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (1))){
var state_53526__$1 = state_53526;
var statearr_53531_56298 = state_53526__$1;
(statearr_53531_56298[(2)] = null);

(statearr_53531_56298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (24))){
var inst_53501 = (state_53526[(7)]);
var inst_53512 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53501);
var state_53526__$1 = state_53526;
var statearr_53534_56300 = state_53526__$1;
(statearr_53534_56300[(2)] = inst_53512);

(statearr_53534_56300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (4))){
var inst_53447 = (state_53526[(8)]);
var inst_53447__$1 = (state_53526[(2)]);
var inst_53449 = (inst_53447__$1 == null);
var state_53526__$1 = (function (){var statearr_53537 = state_53526;
(statearr_53537[(8)] = inst_53447__$1);

return statearr_53537;
})();
if(cljs.core.truth_(inst_53449)){
var statearr_53540_56303 = state_53526__$1;
(statearr_53540_56303[(1)] = (5));

} else {
var statearr_53542_56304 = state_53526__$1;
(statearr_53542_56304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (15))){
var inst_53494 = (state_53526[(2)]);
var state_53526__$1 = state_53526;
var statearr_53543_56305 = state_53526__$1;
(statearr_53543_56305[(2)] = inst_53494);

(statearr_53543_56305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (21))){
var inst_53517 = (state_53526[(2)]);
var state_53526__$1 = (function (){var statearr_53544 = state_53526;
(statearr_53544[(9)] = inst_53517);

return statearr_53544;
})();
var statearr_53545_56306 = state_53526__$1;
(statearr_53545_56306[(2)] = null);

(statearr_53545_56306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (13))){
var inst_53475 = (state_53526[(10)]);
var inst_53477 = cljs.core.chunked_seq_QMARK_(inst_53475);
var state_53526__$1 = state_53526;
if(inst_53477){
var statearr_53549_56307 = state_53526__$1;
(statearr_53549_56307[(1)] = (16));

} else {
var statearr_53550_56308 = state_53526__$1;
(statearr_53550_56308[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (22))){
var inst_53508 = (state_53526[(2)]);
var state_53526__$1 = state_53526;
if(cljs.core.truth_(inst_53508)){
var statearr_53551_56309 = state_53526__$1;
(statearr_53551_56309[(1)] = (23));

} else {
var statearr_53552_56310 = state_53526__$1;
(statearr_53552_56310[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (6))){
var inst_53447 = (state_53526[(8)]);
var inst_53501 = (state_53526[(7)]);
var inst_53503 = (state_53526[(11)]);
var inst_53501__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53447) : topic_fn.call(null,inst_53447));
var inst_53502 = cljs.core.deref(mults);
var inst_53503__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53502,inst_53501__$1);
var state_53526__$1 = (function (){var statearr_53560 = state_53526;
(statearr_53560[(7)] = inst_53501__$1);

(statearr_53560[(11)] = inst_53503__$1);

return statearr_53560;
})();
if(cljs.core.truth_(inst_53503__$1)){
var statearr_53561_56313 = state_53526__$1;
(statearr_53561_56313[(1)] = (19));

} else {
var statearr_53562_56314 = state_53526__$1;
(statearr_53562_56314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (25))){
var inst_53514 = (state_53526[(2)]);
var state_53526__$1 = state_53526;
var statearr_53564_56341 = state_53526__$1;
(statearr_53564_56341[(2)] = inst_53514);

(statearr_53564_56341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (17))){
var inst_53475 = (state_53526[(10)]);
var inst_53485 = cljs.core.first(inst_53475);
var inst_53486 = cljs.core.async.muxch_STAR_(inst_53485);
var inst_53487 = cljs.core.async.close_BANG_(inst_53486);
var inst_53488 = cljs.core.next(inst_53475);
var inst_53460 = inst_53488;
var inst_53461 = null;
var inst_53462 = (0);
var inst_53463 = (0);
var state_53526__$1 = (function (){var statearr_53566 = state_53526;
(statearr_53566[(12)] = inst_53462);

(statearr_53566[(13)] = inst_53461);

(statearr_53566[(14)] = inst_53487);

(statearr_53566[(15)] = inst_53460);

(statearr_53566[(16)] = inst_53463);

return statearr_53566;
})();
var statearr_53567_56365 = state_53526__$1;
(statearr_53567_56365[(2)] = null);

(statearr_53567_56365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (3))){
var inst_53523 = (state_53526[(2)]);
var state_53526__$1 = state_53526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53526__$1,inst_53523);
} else {
if((state_val_53527 === (12))){
var inst_53496 = (state_53526[(2)]);
var state_53526__$1 = state_53526;
var statearr_53573_56368 = state_53526__$1;
(statearr_53573_56368[(2)] = inst_53496);

(statearr_53573_56368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (2))){
var state_53526__$1 = state_53526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53526__$1,(4),ch);
} else {
if((state_val_53527 === (23))){
var state_53526__$1 = state_53526;
var statearr_53575_56369 = state_53526__$1;
(statearr_53575_56369[(2)] = null);

(statearr_53575_56369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (19))){
var inst_53447 = (state_53526[(8)]);
var inst_53503 = (state_53526[(11)]);
var inst_53506 = cljs.core.async.muxch_STAR_(inst_53503);
var state_53526__$1 = state_53526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53526__$1,(22),inst_53506,inst_53447);
} else {
if((state_val_53527 === (11))){
var inst_53475 = (state_53526[(10)]);
var inst_53460 = (state_53526[(15)]);
var inst_53475__$1 = cljs.core.seq(inst_53460);
var state_53526__$1 = (function (){var statearr_53577 = state_53526;
(statearr_53577[(10)] = inst_53475__$1);

return statearr_53577;
})();
if(inst_53475__$1){
var statearr_53578_56374 = state_53526__$1;
(statearr_53578_56374[(1)] = (13));

} else {
var statearr_53579_56375 = state_53526__$1;
(statearr_53579_56375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (9))){
var inst_53498 = (state_53526[(2)]);
var state_53526__$1 = state_53526;
var statearr_53581_56380 = state_53526__$1;
(statearr_53581_56380[(2)] = inst_53498);

(statearr_53581_56380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (5))){
var inst_53456 = cljs.core.deref(mults);
var inst_53458 = cljs.core.vals(inst_53456);
var inst_53459 = cljs.core.seq(inst_53458);
var inst_53460 = inst_53459;
var inst_53461 = null;
var inst_53462 = (0);
var inst_53463 = (0);
var state_53526__$1 = (function (){var statearr_53583 = state_53526;
(statearr_53583[(12)] = inst_53462);

(statearr_53583[(13)] = inst_53461);

(statearr_53583[(15)] = inst_53460);

(statearr_53583[(16)] = inst_53463);

return statearr_53583;
})();
var statearr_53584_56412 = state_53526__$1;
(statearr_53584_56412[(2)] = null);

(statearr_53584_56412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (14))){
var state_53526__$1 = state_53526;
var statearr_53595_56414 = state_53526__$1;
(statearr_53595_56414[(2)] = null);

(statearr_53595_56414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (16))){
var inst_53475 = (state_53526[(10)]);
var inst_53479 = cljs.core.chunk_first(inst_53475);
var inst_53480 = cljs.core.chunk_rest(inst_53475);
var inst_53482 = cljs.core.count(inst_53479);
var inst_53460 = inst_53480;
var inst_53461 = inst_53479;
var inst_53462 = inst_53482;
var inst_53463 = (0);
var state_53526__$1 = (function (){var statearr_53604 = state_53526;
(statearr_53604[(12)] = inst_53462);

(statearr_53604[(13)] = inst_53461);

(statearr_53604[(15)] = inst_53460);

(statearr_53604[(16)] = inst_53463);

return statearr_53604;
})();
var statearr_53606_56416 = state_53526__$1;
(statearr_53606_56416[(2)] = null);

(statearr_53606_56416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (10))){
var inst_53462 = (state_53526[(12)]);
var inst_53461 = (state_53526[(13)]);
var inst_53460 = (state_53526[(15)]);
var inst_53463 = (state_53526[(16)]);
var inst_53469 = cljs.core._nth(inst_53461,inst_53463);
var inst_53470 = cljs.core.async.muxch_STAR_(inst_53469);
var inst_53471 = cljs.core.async.close_BANG_(inst_53470);
var inst_53472 = (inst_53463 + (1));
var tmp53589 = inst_53462;
var tmp53590 = inst_53461;
var tmp53591 = inst_53460;
var inst_53460__$1 = tmp53591;
var inst_53461__$1 = tmp53590;
var inst_53462__$1 = tmp53589;
var inst_53463__$1 = inst_53472;
var state_53526__$1 = (function (){var statearr_53611 = state_53526;
(statearr_53611[(12)] = inst_53462__$1);

(statearr_53611[(13)] = inst_53461__$1);

(statearr_53611[(15)] = inst_53460__$1);

(statearr_53611[(17)] = inst_53471);

(statearr_53611[(16)] = inst_53463__$1);

return statearr_53611;
})();
var statearr_53613_56429 = state_53526__$1;
(statearr_53613_56429[(2)] = null);

(statearr_53613_56429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (18))){
var inst_53491 = (state_53526[(2)]);
var state_53526__$1 = state_53526;
var statearr_53614_56430 = state_53526__$1;
(statearr_53614_56430[(2)] = inst_53491);

(statearr_53614_56430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53527 === (8))){
var inst_53462 = (state_53526[(12)]);
var inst_53463 = (state_53526[(16)]);
var inst_53465 = (inst_53463 < inst_53462);
var inst_53466 = inst_53465;
var state_53526__$1 = state_53526;
if(cljs.core.truth_(inst_53466)){
var statearr_53619_56495 = state_53526__$1;
(statearr_53619_56495[(1)] = (10));

} else {
var statearr_53620_56500 = state_53526__$1;
(statearr_53620_56500[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_53629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53629[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_53629[(1)] = (1));

return statearr_53629;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_53526){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_53526);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e53630){var ex__51477__auto__ = e53630;
var statearr_53631_56508 = state_53526;
(statearr_53631_56508[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_53526[(4)]))){
var statearr_53632_56509 = state_53526;
(statearr_53632_56509[(1)] = cljs.core.first((state_53526[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56510 = state_53526;
state_53526 = G__56510;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_53526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_53526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_53639 = f__51876__auto__();
(statearr_53639[(6)] = c__51875__auto___56291);

return statearr_53639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__53645 = arguments.length;
switch (G__53645) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__53656 = arguments.length;
switch (G__53656) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__53668 = arguments.length;
switch (G__53668) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__51875__auto___56565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_53736){
var state_val_53738 = (state_53736[(1)]);
if((state_val_53738 === (7))){
var state_53736__$1 = state_53736;
var statearr_53743_56566 = state_53736__$1;
(statearr_53743_56566[(2)] = null);

(statearr_53743_56566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (1))){
var state_53736__$1 = state_53736;
var statearr_53745_56567 = state_53736__$1;
(statearr_53745_56567[(2)] = null);

(statearr_53745_56567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (4))){
var inst_53681 = (state_53736[(7)]);
var inst_53680 = (state_53736[(8)]);
var inst_53683 = (inst_53681 < inst_53680);
var state_53736__$1 = state_53736;
if(cljs.core.truth_(inst_53683)){
var statearr_53751_56571 = state_53736__$1;
(statearr_53751_56571[(1)] = (6));

} else {
var statearr_53752_56572 = state_53736__$1;
(statearr_53752_56572[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (15))){
var inst_53718 = (state_53736[(9)]);
var inst_53726 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53718);
var state_53736__$1 = state_53736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53736__$1,(17),out,inst_53726);
} else {
if((state_val_53738 === (13))){
var inst_53718 = (state_53736[(9)]);
var inst_53718__$1 = (state_53736[(2)]);
var inst_53719 = cljs.core.some(cljs.core.nil_QMARK_,inst_53718__$1);
var state_53736__$1 = (function (){var statearr_53754 = state_53736;
(statearr_53754[(9)] = inst_53718__$1);

return statearr_53754;
})();
if(cljs.core.truth_(inst_53719)){
var statearr_53755_56574 = state_53736__$1;
(statearr_53755_56574[(1)] = (14));

} else {
var statearr_53757_56575 = state_53736__$1;
(statearr_53757_56575[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (6))){
var state_53736__$1 = state_53736;
var statearr_53759_56579 = state_53736__$1;
(statearr_53759_56579[(2)] = null);

(statearr_53759_56579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (17))){
var inst_53728 = (state_53736[(2)]);
var state_53736__$1 = (function (){var statearr_53770 = state_53736;
(statearr_53770[(10)] = inst_53728);

return statearr_53770;
})();
var statearr_53771_56580 = state_53736__$1;
(statearr_53771_56580[(2)] = null);

(statearr_53771_56580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (3))){
var inst_53733 = (state_53736[(2)]);
var state_53736__$1 = state_53736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53736__$1,inst_53733);
} else {
if((state_val_53738 === (12))){
var _ = (function (){var statearr_53772 = state_53736;
(statearr_53772[(4)] = cljs.core.rest((state_53736[(4)])));

return statearr_53772;
})();
var state_53736__$1 = state_53736;
var ex53768 = (state_53736__$1[(2)]);
var statearr_53780_56584 = state_53736__$1;
(statearr_53780_56584[(5)] = ex53768);


if((ex53768 instanceof Object)){
var statearr_53785_56585 = state_53736__$1;
(statearr_53785_56585[(1)] = (11));

(statearr_53785_56585[(5)] = null);

} else {
throw ex53768;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (2))){
var inst_53679 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53680 = cnt;
var inst_53681 = (0);
var state_53736__$1 = (function (){var statearr_53788 = state_53736;
(statearr_53788[(11)] = inst_53679);

(statearr_53788[(7)] = inst_53681);

(statearr_53788[(8)] = inst_53680);

return statearr_53788;
})();
var statearr_53789_56586 = state_53736__$1;
(statearr_53789_56586[(2)] = null);

(statearr_53789_56586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (11))){
var inst_53692 = (state_53736[(2)]);
var inst_53693 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53736__$1 = (function (){var statearr_53793 = state_53736;
(statearr_53793[(12)] = inst_53692);

return statearr_53793;
})();
var statearr_53794_56613 = state_53736__$1;
(statearr_53794_56613[(2)] = inst_53693);

(statearr_53794_56613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (9))){
var inst_53681 = (state_53736[(7)]);
var _ = (function (){var statearr_53801 = state_53736;
(statearr_53801[(4)] = cljs.core.cons((12),(state_53736[(4)])));

return statearr_53801;
})();
var inst_53701 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53681) : chs__$1.call(null,inst_53681));
var inst_53702 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53681) : done.call(null,inst_53681));
var inst_53703 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53701,inst_53702);
var ___$1 = (function (){var statearr_53803 = state_53736;
(statearr_53803[(4)] = cljs.core.rest((state_53736[(4)])));

return statearr_53803;
})();
var state_53736__$1 = state_53736;
var statearr_53804_56620 = state_53736__$1;
(statearr_53804_56620[(2)] = inst_53703);

(statearr_53804_56620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (5))){
var inst_53716 = (state_53736[(2)]);
var state_53736__$1 = (function (){var statearr_53805 = state_53736;
(statearr_53805[(13)] = inst_53716);

return statearr_53805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53736__$1,(13),dchan);
} else {
if((state_val_53738 === (14))){
var inst_53723 = cljs.core.async.close_BANG_(out);
var state_53736__$1 = state_53736;
var statearr_53807_56630 = state_53736__$1;
(statearr_53807_56630[(2)] = inst_53723);

(statearr_53807_56630[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (16))){
var inst_53731 = (state_53736[(2)]);
var state_53736__$1 = state_53736;
var statearr_53809_56633 = state_53736__$1;
(statearr_53809_56633[(2)] = inst_53731);

(statearr_53809_56633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (10))){
var inst_53681 = (state_53736[(7)]);
var inst_53706 = (state_53736[(2)]);
var inst_53710 = (inst_53681 + (1));
var inst_53681__$1 = inst_53710;
var state_53736__$1 = (function (){var statearr_53810 = state_53736;
(statearr_53810[(14)] = inst_53706);

(statearr_53810[(7)] = inst_53681__$1);

return statearr_53810;
})();
var statearr_53811_56642 = state_53736__$1;
(statearr_53811_56642[(2)] = null);

(statearr_53811_56642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53738 === (8))){
var inst_53714 = (state_53736[(2)]);
var state_53736__$1 = state_53736;
var statearr_53813_56650 = state_53736__$1;
(statearr_53813_56650[(2)] = inst_53714);

(statearr_53813_56650[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_53814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53814[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_53814[(1)] = (1));

return statearr_53814;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_53736){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_53736);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e53816){var ex__51477__auto__ = e53816;
var statearr_53818_56688 = state_53736;
(statearr_53818_56688[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_53736[(4)]))){
var statearr_53820_56689 = state_53736;
(statearr_53820_56689[(1)] = cljs.core.first((state_53736[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56690 = state_53736;
state_53736 = G__56690;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_53736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_53736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_53821 = f__51876__auto__();
(statearr_53821[(6)] = c__51875__auto___56565);

return statearr_53821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__53827 = arguments.length;
switch (G__53827) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51875__auto___56704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_53866){
var state_val_53867 = (state_53866[(1)]);
if((state_val_53867 === (7))){
var inst_53843 = (state_53866[(7)]);
var inst_53841 = (state_53866[(8)]);
var inst_53841__$1 = (state_53866[(2)]);
var inst_53843__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53841__$1,(0),null);
var inst_53844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53841__$1,(1),null);
var inst_53845 = (inst_53843__$1 == null);
var state_53866__$1 = (function (){var statearr_53875 = state_53866;
(statearr_53875[(9)] = inst_53844);

(statearr_53875[(7)] = inst_53843__$1);

(statearr_53875[(8)] = inst_53841__$1);

return statearr_53875;
})();
if(cljs.core.truth_(inst_53845)){
var statearr_53876_56712 = state_53866__$1;
(statearr_53876_56712[(1)] = (8));

} else {
var statearr_53877_56713 = state_53866__$1;
(statearr_53877_56713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (1))){
var inst_53831 = cljs.core.vec(chs);
var inst_53832 = inst_53831;
var state_53866__$1 = (function (){var statearr_53880 = state_53866;
(statearr_53880[(10)] = inst_53832);

return statearr_53880;
})();
var statearr_53881_56715 = state_53866__$1;
(statearr_53881_56715[(2)] = null);

(statearr_53881_56715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (4))){
var inst_53832 = (state_53866[(10)]);
var state_53866__$1 = state_53866;
return cljs.core.async.ioc_alts_BANG_(state_53866__$1,(7),inst_53832);
} else {
if((state_val_53867 === (6))){
var inst_53862 = (state_53866[(2)]);
var state_53866__$1 = state_53866;
var statearr_53884_56717 = state_53866__$1;
(statearr_53884_56717[(2)] = inst_53862);

(statearr_53884_56717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (3))){
var inst_53864 = (state_53866[(2)]);
var state_53866__$1 = state_53866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53866__$1,inst_53864);
} else {
if((state_val_53867 === (2))){
var inst_53832 = (state_53866[(10)]);
var inst_53834 = cljs.core.count(inst_53832);
var inst_53835 = (inst_53834 > (0));
var state_53866__$1 = state_53866;
if(cljs.core.truth_(inst_53835)){
var statearr_53887_56721 = state_53866__$1;
(statearr_53887_56721[(1)] = (4));

} else {
var statearr_53888_56722 = state_53866__$1;
(statearr_53888_56722[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (11))){
var inst_53832 = (state_53866[(10)]);
var inst_53855 = (state_53866[(2)]);
var tmp53885 = inst_53832;
var inst_53832__$1 = tmp53885;
var state_53866__$1 = (function (){var statearr_53889 = state_53866;
(statearr_53889[(11)] = inst_53855);

(statearr_53889[(10)] = inst_53832__$1);

return statearr_53889;
})();
var statearr_53891_56723 = state_53866__$1;
(statearr_53891_56723[(2)] = null);

(statearr_53891_56723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (9))){
var inst_53843 = (state_53866[(7)]);
var state_53866__$1 = state_53866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53866__$1,(11),out,inst_53843);
} else {
if((state_val_53867 === (5))){
var inst_53860 = cljs.core.async.close_BANG_(out);
var state_53866__$1 = state_53866;
var statearr_53899_56732 = state_53866__$1;
(statearr_53899_56732[(2)] = inst_53860);

(statearr_53899_56732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (10))){
var inst_53858 = (state_53866[(2)]);
var state_53866__$1 = state_53866;
var statearr_53901_56733 = state_53866__$1;
(statearr_53901_56733[(2)] = inst_53858);

(statearr_53901_56733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53867 === (8))){
var inst_53844 = (state_53866[(9)]);
var inst_53832 = (state_53866[(10)]);
var inst_53843 = (state_53866[(7)]);
var inst_53841 = (state_53866[(8)]);
var inst_53847 = (function (){var cs = inst_53832;
var vec__53837 = inst_53841;
var v = inst_53843;
var c = inst_53844;
return (function (p1__53825_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53825_SHARP_);
});
})();
var inst_53851 = cljs.core.filterv(inst_53847,inst_53832);
var inst_53832__$1 = inst_53851;
var state_53866__$1 = (function (){var statearr_53907 = state_53866;
(statearr_53907[(10)] = inst_53832__$1);

return statearr_53907;
})();
var statearr_53910_56767 = state_53866__$1;
(statearr_53910_56767[(2)] = null);

(statearr_53910_56767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_53912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53912[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_53912[(1)] = (1));

return statearr_53912;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_53866){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_53866);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e53916){var ex__51477__auto__ = e53916;
var statearr_53919_56776 = state_53866;
(statearr_53919_56776[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_53866[(4)]))){
var statearr_53921_56777 = state_53866;
(statearr_53921_56777[(1)] = cljs.core.first((state_53866[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56778 = state_53866;
state_53866 = G__56778;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_53866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_53866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_53923 = f__51876__auto__();
(statearr_53923[(6)] = c__51875__auto___56704);

return statearr_53923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__53932 = arguments.length;
switch (G__53932) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51875__auto___56786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_53959){
var state_val_53960 = (state_53959[(1)]);
if((state_val_53960 === (7))){
var inst_53941 = (state_53959[(7)]);
var inst_53941__$1 = (state_53959[(2)]);
var inst_53942 = (inst_53941__$1 == null);
var inst_53943 = cljs.core.not(inst_53942);
var state_53959__$1 = (function (){var statearr_53972 = state_53959;
(statearr_53972[(7)] = inst_53941__$1);

return statearr_53972;
})();
if(inst_53943){
var statearr_53973_56823 = state_53959__$1;
(statearr_53973_56823[(1)] = (8));

} else {
var statearr_53974_56828 = state_53959__$1;
(statearr_53974_56828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53960 === (1))){
var inst_53936 = (0);
var state_53959__$1 = (function (){var statearr_53975 = state_53959;
(statearr_53975[(8)] = inst_53936);

return statearr_53975;
})();
var statearr_53976_56846 = state_53959__$1;
(statearr_53976_56846[(2)] = null);

(statearr_53976_56846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53960 === (4))){
var state_53959__$1 = state_53959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53959__$1,(7),ch);
} else {
if((state_val_53960 === (6))){
var inst_53954 = (state_53959[(2)]);
var state_53959__$1 = state_53959;
var statearr_53978_56858 = state_53959__$1;
(statearr_53978_56858[(2)] = inst_53954);

(statearr_53978_56858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53960 === (3))){
var inst_53956 = (state_53959[(2)]);
var inst_53957 = cljs.core.async.close_BANG_(out);
var state_53959__$1 = (function (){var statearr_53983 = state_53959;
(statearr_53983[(9)] = inst_53956);

return statearr_53983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53959__$1,inst_53957);
} else {
if((state_val_53960 === (2))){
var inst_53936 = (state_53959[(8)]);
var inst_53938 = (inst_53936 < n);
var state_53959__$1 = state_53959;
if(cljs.core.truth_(inst_53938)){
var statearr_53985_56869 = state_53959__$1;
(statearr_53985_56869[(1)] = (4));

} else {
var statearr_53987_56870 = state_53959__$1;
(statearr_53987_56870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53960 === (11))){
var inst_53936 = (state_53959[(8)]);
var inst_53946 = (state_53959[(2)]);
var inst_53947 = (inst_53936 + (1));
var inst_53936__$1 = inst_53947;
var state_53959__$1 = (function (){var statearr_53994 = state_53959;
(statearr_53994[(8)] = inst_53936__$1);

(statearr_53994[(10)] = inst_53946);

return statearr_53994;
})();
var statearr_53995_56873 = state_53959__$1;
(statearr_53995_56873[(2)] = null);

(statearr_53995_56873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53960 === (9))){
var state_53959__$1 = state_53959;
var statearr_53997_56881 = state_53959__$1;
(statearr_53997_56881[(2)] = null);

(statearr_53997_56881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53960 === (5))){
var state_53959__$1 = state_53959;
var statearr_53999_56882 = state_53959__$1;
(statearr_53999_56882[(2)] = null);

(statearr_53999_56882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53960 === (10))){
var inst_53951 = (state_53959[(2)]);
var state_53959__$1 = state_53959;
var statearr_54000_56883 = state_53959__$1;
(statearr_54000_56883[(2)] = inst_53951);

(statearr_54000_56883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53960 === (8))){
var inst_53941 = (state_53959[(7)]);
var state_53959__$1 = state_53959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53959__$1,(11),out,inst_53941);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_54001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54001[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_54001[(1)] = (1));

return statearr_54001;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_53959){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_53959);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e54002){var ex__51477__auto__ = e54002;
var statearr_54003_56894 = state_53959;
(statearr_54003_56894[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_53959[(4)]))){
var statearr_54004_56895 = state_53959;
(statearr_54004_56895[(1)] = cljs.core.first((state_53959[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56900 = state_53959;
state_53959 = G__56900;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_53959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_53959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_54006 = f__51876__auto__();
(statearr_54006[(6)] = c__51875__auto___56786);

return statearr_54006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54010 = (function (f,ch,meta54011){
this.f = f;
this.ch = ch;
this.meta54011 = meta54011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54012,meta54011__$1){
var self__ = this;
var _54012__$1 = this;
return (new cljs.core.async.t_cljs$core$async54010(self__.f,self__.ch,meta54011__$1));
}));

(cljs.core.async.t_cljs$core$async54010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54012){
var self__ = this;
var _54012__$1 = this;
return self__.meta54011;
}));

(cljs.core.async.t_cljs$core$async54010.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54010.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54010.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54010.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54010.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54018 = (function (f,ch,meta54011,_,fn1,meta54019){
this.f = f;
this.ch = ch;
this.meta54011 = meta54011;
this._ = _;
this.fn1 = fn1;
this.meta54019 = meta54019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54020,meta54019__$1){
var self__ = this;
var _54020__$1 = this;
return (new cljs.core.async.t_cljs$core$async54018(self__.f,self__.ch,self__.meta54011,self__._,self__.fn1,meta54019__$1));
}));

(cljs.core.async.t_cljs$core$async54018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54020){
var self__ = this;
var _54020__$1 = this;
return self__.meta54019;
}));

(cljs.core.async.t_cljs$core$async54018.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async54018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__54008_SHARP_){
var G__54024 = (((p1__54008_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__54008_SHARP_) : self__.f.call(null,p1__54008_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__54024) : f1.call(null,G__54024));
});
}));

(cljs.core.async.t_cljs$core$async54018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54011","meta54011",876244362,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async54010","cljs.core.async/t_cljs$core$async54010",-1297163491,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta54019","meta54019",1528368368,null)], null);
}));

(cljs.core.async.t_cljs$core$async54018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54018");

(cljs.core.async.t_cljs$core$async54018.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async54018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54018.
 */
cljs.core.async.__GT_t_cljs$core$async54018 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54018(f__$1,ch__$1,meta54011__$1,___$2,fn1__$1,meta54019){
return (new cljs.core.async.t_cljs$core$async54018(f__$1,ch__$1,meta54011__$1,___$2,fn1__$1,meta54019));
});

}

return (new cljs.core.async.t_cljs$core$async54018(self__.f,self__.ch,self__.meta54011,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__54038 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__54038) : self__.f.call(null,G__54038));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async54010.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54010.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async54010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54011","meta54011",876244362,null)], null);
}));

(cljs.core.async.t_cljs$core$async54010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54010");

(cljs.core.async.t_cljs$core$async54010.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async54010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54010.
 */
cljs.core.async.__GT_t_cljs$core$async54010 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54010(f__$1,ch__$1,meta54011){
return (new cljs.core.async.t_cljs$core$async54010(f__$1,ch__$1,meta54011));
});

}

return (new cljs.core.async.t_cljs$core$async54010(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54045 = (function (f,ch,meta54046){
this.f = f;
this.ch = ch;
this.meta54046 = meta54046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54047,meta54046__$1){
var self__ = this;
var _54047__$1 = this;
return (new cljs.core.async.t_cljs$core$async54045(self__.f,self__.ch,meta54046__$1));
}));

(cljs.core.async.t_cljs$core$async54045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54047){
var self__ = this;
var _54047__$1 = this;
return self__.meta54046;
}));

(cljs.core.async.t_cljs$core$async54045.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54045.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async54045.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async54045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54046","meta54046",1921648978,null)], null);
}));

(cljs.core.async.t_cljs$core$async54045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54045");

(cljs.core.async.t_cljs$core$async54045.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async54045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54045.
 */
cljs.core.async.__GT_t_cljs$core$async54045 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async54045(f__$1,ch__$1,meta54046){
return (new cljs.core.async.t_cljs$core$async54045(f__$1,ch__$1,meta54046));
});

}

return (new cljs.core.async.t_cljs$core$async54045(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54061 = (function (p,ch,meta54062){
this.p = p;
this.ch = ch;
this.meta54062 = meta54062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54063,meta54062__$1){
var self__ = this;
var _54063__$1 = this;
return (new cljs.core.async.t_cljs$core$async54061(self__.p,self__.ch,meta54062__$1));
}));

(cljs.core.async.t_cljs$core$async54061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54063){
var self__ = this;
var _54063__$1 = this;
return self__.meta54062;
}));

(cljs.core.async.t_cljs$core$async54061.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54061.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54061.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async54061.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async54061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54062","meta54062",-241832967,null)], null);
}));

(cljs.core.async.t_cljs$core$async54061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54061");

(cljs.core.async.t_cljs$core$async54061.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async54061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54061.
 */
cljs.core.async.__GT_t_cljs$core$async54061 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async54061(p__$1,ch__$1,meta54062){
return (new cljs.core.async.t_cljs$core$async54061(p__$1,ch__$1,meta54062));
});

}

return (new cljs.core.async.t_cljs$core$async54061(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__54100 = arguments.length;
switch (G__54100) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51875__auto___56967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_54130){
var state_val_54131 = (state_54130[(1)]);
if((state_val_54131 === (7))){
var inst_54125 = (state_54130[(2)]);
var state_54130__$1 = state_54130;
var statearr_54135_56968 = state_54130__$1;
(statearr_54135_56968[(2)] = inst_54125);

(statearr_54135_56968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54131 === (1))){
var state_54130__$1 = state_54130;
var statearr_54136_56970 = state_54130__$1;
(statearr_54136_56970[(2)] = null);

(statearr_54136_56970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54131 === (4))){
var inst_54111 = (state_54130[(7)]);
var inst_54111__$1 = (state_54130[(2)]);
var inst_54112 = (inst_54111__$1 == null);
var state_54130__$1 = (function (){var statearr_54139 = state_54130;
(statearr_54139[(7)] = inst_54111__$1);

return statearr_54139;
})();
if(cljs.core.truth_(inst_54112)){
var statearr_54140_56971 = state_54130__$1;
(statearr_54140_56971[(1)] = (5));

} else {
var statearr_54141_56972 = state_54130__$1;
(statearr_54141_56972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54131 === (6))){
var inst_54111 = (state_54130[(7)]);
var inst_54116 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54111) : p.call(null,inst_54111));
var state_54130__$1 = state_54130;
if(cljs.core.truth_(inst_54116)){
var statearr_54142_56973 = state_54130__$1;
(statearr_54142_56973[(1)] = (8));

} else {
var statearr_54143_56974 = state_54130__$1;
(statearr_54143_56974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54131 === (3))){
var inst_54127 = (state_54130[(2)]);
var state_54130__$1 = state_54130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54130__$1,inst_54127);
} else {
if((state_val_54131 === (2))){
var state_54130__$1 = state_54130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54130__$1,(4),ch);
} else {
if((state_val_54131 === (11))){
var inst_54119 = (state_54130[(2)]);
var state_54130__$1 = state_54130;
var statearr_54146_56977 = state_54130__$1;
(statearr_54146_56977[(2)] = inst_54119);

(statearr_54146_56977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54131 === (9))){
var state_54130__$1 = state_54130;
var statearr_54152_56980 = state_54130__$1;
(statearr_54152_56980[(2)] = null);

(statearr_54152_56980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54131 === (5))){
var inst_54114 = cljs.core.async.close_BANG_(out);
var state_54130__$1 = state_54130;
var statearr_54153_56983 = state_54130__$1;
(statearr_54153_56983[(2)] = inst_54114);

(statearr_54153_56983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54131 === (10))){
var inst_54122 = (state_54130[(2)]);
var state_54130__$1 = (function (){var statearr_54154 = state_54130;
(statearr_54154[(8)] = inst_54122);

return statearr_54154;
})();
var statearr_54157_56985 = state_54130__$1;
(statearr_54157_56985[(2)] = null);

(statearr_54157_56985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54131 === (8))){
var inst_54111 = (state_54130[(7)]);
var state_54130__$1 = state_54130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54130__$1,(11),out,inst_54111);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_54162 = [null,null,null,null,null,null,null,null,null];
(statearr_54162[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_54162[(1)] = (1));

return statearr_54162;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_54130){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_54130);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e54164){var ex__51477__auto__ = e54164;
var statearr_54167_56992 = state_54130;
(statearr_54167_56992[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_54130[(4)]))){
var statearr_54168_56993 = state_54130;
(statearr_54168_56993[(1)] = cljs.core.first((state_54130[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56994 = state_54130;
state_54130 = G__56994;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_54130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_54130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_54172 = f__51876__auto__();
(statearr_54172[(6)] = c__51875__auto___56967);

return statearr_54172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__54177 = arguments.length;
switch (G__54177) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__51875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_54250){
var state_val_54251 = (state_54250[(1)]);
if((state_val_54251 === (7))){
var inst_54246 = (state_54250[(2)]);
var state_54250__$1 = state_54250;
var statearr_54260_57003 = state_54250__$1;
(statearr_54260_57003[(2)] = inst_54246);

(statearr_54260_57003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (20))){
var inst_54215 = (state_54250[(7)]);
var inst_54227 = (state_54250[(2)]);
var inst_54228 = cljs.core.next(inst_54215);
var inst_54199 = inst_54228;
var inst_54200 = null;
var inst_54201 = (0);
var inst_54202 = (0);
var state_54250__$1 = (function (){var statearr_54266 = state_54250;
(statearr_54266[(8)] = inst_54202);

(statearr_54266[(9)] = inst_54199);

(statearr_54266[(10)] = inst_54201);

(statearr_54266[(11)] = inst_54200);

(statearr_54266[(12)] = inst_54227);

return statearr_54266;
})();
var statearr_54268_57009 = state_54250__$1;
(statearr_54268_57009[(2)] = null);

(statearr_54268_57009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (1))){
var state_54250__$1 = state_54250;
var statearr_54269_57013 = state_54250__$1;
(statearr_54269_57013[(2)] = null);

(statearr_54269_57013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (4))){
var inst_54186 = (state_54250[(13)]);
var inst_54186__$1 = (state_54250[(2)]);
var inst_54188 = (inst_54186__$1 == null);
var state_54250__$1 = (function (){var statearr_54274 = state_54250;
(statearr_54274[(13)] = inst_54186__$1);

return statearr_54274;
})();
if(cljs.core.truth_(inst_54188)){
var statearr_54275_57014 = state_54250__$1;
(statearr_54275_57014[(1)] = (5));

} else {
var statearr_54277_57015 = state_54250__$1;
(statearr_54277_57015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (15))){
var state_54250__$1 = state_54250;
var statearr_54283_57016 = state_54250__$1;
(statearr_54283_57016[(2)] = null);

(statearr_54283_57016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (21))){
var state_54250__$1 = state_54250;
var statearr_54285_57017 = state_54250__$1;
(statearr_54285_57017[(2)] = null);

(statearr_54285_57017[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (13))){
var inst_54202 = (state_54250[(8)]);
var inst_54199 = (state_54250[(9)]);
var inst_54201 = (state_54250[(10)]);
var inst_54200 = (state_54250[(11)]);
var inst_54211 = (state_54250[(2)]);
var inst_54212 = (inst_54202 + (1));
var tmp54279 = inst_54199;
var tmp54280 = inst_54201;
var tmp54281 = inst_54200;
var inst_54199__$1 = tmp54279;
var inst_54200__$1 = tmp54281;
var inst_54201__$1 = tmp54280;
var inst_54202__$1 = inst_54212;
var state_54250__$1 = (function (){var statearr_54287 = state_54250;
(statearr_54287[(8)] = inst_54202__$1);

(statearr_54287[(9)] = inst_54199__$1);

(statearr_54287[(10)] = inst_54201__$1);

(statearr_54287[(14)] = inst_54211);

(statearr_54287[(11)] = inst_54200__$1);

return statearr_54287;
})();
var statearr_54289_57046 = state_54250__$1;
(statearr_54289_57046[(2)] = null);

(statearr_54289_57046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (22))){
var state_54250__$1 = state_54250;
var statearr_54291_57047 = state_54250__$1;
(statearr_54291_57047[(2)] = null);

(statearr_54291_57047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (6))){
var inst_54186 = (state_54250[(13)]);
var inst_54197 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54186) : f.call(null,inst_54186));
var inst_54198 = cljs.core.seq(inst_54197);
var inst_54199 = inst_54198;
var inst_54200 = null;
var inst_54201 = (0);
var inst_54202 = (0);
var state_54250__$1 = (function (){var statearr_54294 = state_54250;
(statearr_54294[(8)] = inst_54202);

(statearr_54294[(9)] = inst_54199);

(statearr_54294[(10)] = inst_54201);

(statearr_54294[(11)] = inst_54200);

return statearr_54294;
})();
var statearr_54295_57052 = state_54250__$1;
(statearr_54295_57052[(2)] = null);

(statearr_54295_57052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (17))){
var inst_54215 = (state_54250[(7)]);
var inst_54219 = cljs.core.chunk_first(inst_54215);
var inst_54220 = cljs.core.chunk_rest(inst_54215);
var inst_54221 = cljs.core.count(inst_54219);
var inst_54199 = inst_54220;
var inst_54200 = inst_54219;
var inst_54201 = inst_54221;
var inst_54202 = (0);
var state_54250__$1 = (function (){var statearr_54297 = state_54250;
(statearr_54297[(8)] = inst_54202);

(statearr_54297[(9)] = inst_54199);

(statearr_54297[(10)] = inst_54201);

(statearr_54297[(11)] = inst_54200);

return statearr_54297;
})();
var statearr_54299_57060 = state_54250__$1;
(statearr_54299_57060[(2)] = null);

(statearr_54299_57060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (3))){
var inst_54248 = (state_54250[(2)]);
var state_54250__$1 = state_54250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54250__$1,inst_54248);
} else {
if((state_val_54251 === (12))){
var inst_54236 = (state_54250[(2)]);
var state_54250__$1 = state_54250;
var statearr_54304_57065 = state_54250__$1;
(statearr_54304_57065[(2)] = inst_54236);

(statearr_54304_57065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (2))){
var state_54250__$1 = state_54250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54250__$1,(4),in$);
} else {
if((state_val_54251 === (23))){
var inst_54244 = (state_54250[(2)]);
var state_54250__$1 = state_54250;
var statearr_54309_57066 = state_54250__$1;
(statearr_54309_57066[(2)] = inst_54244);

(statearr_54309_57066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (19))){
var inst_54231 = (state_54250[(2)]);
var state_54250__$1 = state_54250;
var statearr_54311_57071 = state_54250__$1;
(statearr_54311_57071[(2)] = inst_54231);

(statearr_54311_57071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (11))){
var inst_54199 = (state_54250[(9)]);
var inst_54215 = (state_54250[(7)]);
var inst_54215__$1 = cljs.core.seq(inst_54199);
var state_54250__$1 = (function (){var statearr_54314 = state_54250;
(statearr_54314[(7)] = inst_54215__$1);

return statearr_54314;
})();
if(inst_54215__$1){
var statearr_54316_57072 = state_54250__$1;
(statearr_54316_57072[(1)] = (14));

} else {
var statearr_54319_57073 = state_54250__$1;
(statearr_54319_57073[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (9))){
var inst_54238 = (state_54250[(2)]);
var inst_54239 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_54250__$1 = (function (){var statearr_54324 = state_54250;
(statearr_54324[(15)] = inst_54238);

return statearr_54324;
})();
if(cljs.core.truth_(inst_54239)){
var statearr_54325_57129 = state_54250__$1;
(statearr_54325_57129[(1)] = (21));

} else {
var statearr_54327_57130 = state_54250__$1;
(statearr_54327_57130[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (5))){
var inst_54191 = cljs.core.async.close_BANG_(out);
var state_54250__$1 = state_54250;
var statearr_54330_57131 = state_54250__$1;
(statearr_54330_57131[(2)] = inst_54191);

(statearr_54330_57131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (14))){
var inst_54215 = (state_54250[(7)]);
var inst_54217 = cljs.core.chunked_seq_QMARK_(inst_54215);
var state_54250__$1 = state_54250;
if(inst_54217){
var statearr_54335_57132 = state_54250__$1;
(statearr_54335_57132[(1)] = (17));

} else {
var statearr_54336_57133 = state_54250__$1;
(statearr_54336_57133[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (16))){
var inst_54234 = (state_54250[(2)]);
var state_54250__$1 = state_54250;
var statearr_54337_57134 = state_54250__$1;
(statearr_54337_57134[(2)] = inst_54234);

(statearr_54337_57134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54251 === (10))){
var inst_54202 = (state_54250[(8)]);
var inst_54200 = (state_54250[(11)]);
var inst_54209 = cljs.core._nth(inst_54200,inst_54202);
var state_54250__$1 = state_54250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54250__$1,(13),out,inst_54209);
} else {
if((state_val_54251 === (18))){
var inst_54215 = (state_54250[(7)]);
var inst_54225 = cljs.core.first(inst_54215);
var state_54250__$1 = state_54250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54250__$1,(20),out,inst_54225);
} else {
if((state_val_54251 === (8))){
var inst_54202 = (state_54250[(8)]);
var inst_54201 = (state_54250[(10)]);
var inst_54204 = (inst_54202 < inst_54201);
var inst_54205 = inst_54204;
var state_54250__$1 = state_54250;
if(cljs.core.truth_(inst_54205)){
var statearr_54344_57135 = state_54250__$1;
(statearr_54344_57135[(1)] = (10));

} else {
var statearr_54346_57136 = state_54250__$1;
(statearr_54346_57136[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51474__auto____0 = (function (){
var statearr_54347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54347[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51474__auto__);

(statearr_54347[(1)] = (1));

return statearr_54347;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51474__auto____1 = (function (state_54250){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_54250);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e54348){var ex__51477__auto__ = e54348;
var statearr_54349_57150 = state_54250;
(statearr_54349_57150[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_54250[(4)]))){
var statearr_54350_57211 = state_54250;
(statearr_54350_57211[(1)] = cljs.core.first((state_54250[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57212 = state_54250;
state_54250 = G__57212;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51474__auto__ = function(state_54250){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51474__auto____1.call(this,state_54250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_54351 = f__51876__auto__();
(statearr_54351[(6)] = c__51875__auto__);

return statearr_54351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));

return c__51875__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__54355 = arguments.length;
switch (G__54355) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__54368 = arguments.length;
switch (G__54368) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__54382 = arguments.length;
switch (G__54382) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51875__auto___57217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_54413){
var state_val_54414 = (state_54413[(1)]);
if((state_val_54414 === (7))){
var inst_54405 = (state_54413[(2)]);
var state_54413__$1 = state_54413;
var statearr_54426_57218 = state_54413__$1;
(statearr_54426_57218[(2)] = inst_54405);

(statearr_54426_57218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54414 === (1))){
var inst_54387 = null;
var state_54413__$1 = (function (){var statearr_54427 = state_54413;
(statearr_54427[(7)] = inst_54387);

return statearr_54427;
})();
var statearr_54428_57221 = state_54413__$1;
(statearr_54428_57221[(2)] = null);

(statearr_54428_57221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54414 === (4))){
var inst_54390 = (state_54413[(8)]);
var inst_54390__$1 = (state_54413[(2)]);
var inst_54391 = (inst_54390__$1 == null);
var inst_54392 = cljs.core.not(inst_54391);
var state_54413__$1 = (function (){var statearr_54430 = state_54413;
(statearr_54430[(8)] = inst_54390__$1);

return statearr_54430;
})();
if(inst_54392){
var statearr_54431_57222 = state_54413__$1;
(statearr_54431_57222[(1)] = (5));

} else {
var statearr_54432_57224 = state_54413__$1;
(statearr_54432_57224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54414 === (6))){
var state_54413__$1 = state_54413;
var statearr_54433_57228 = state_54413__$1;
(statearr_54433_57228[(2)] = null);

(statearr_54433_57228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54414 === (3))){
var inst_54407 = (state_54413[(2)]);
var inst_54408 = cljs.core.async.close_BANG_(out);
var state_54413__$1 = (function (){var statearr_54435 = state_54413;
(statearr_54435[(9)] = inst_54407);

return statearr_54435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54413__$1,inst_54408);
} else {
if((state_val_54414 === (2))){
var state_54413__$1 = state_54413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54413__$1,(4),ch);
} else {
if((state_val_54414 === (11))){
var inst_54390 = (state_54413[(8)]);
var inst_54399 = (state_54413[(2)]);
var inst_54387 = inst_54390;
var state_54413__$1 = (function (){var statearr_54441 = state_54413;
(statearr_54441[(7)] = inst_54387);

(statearr_54441[(10)] = inst_54399);

return statearr_54441;
})();
var statearr_54444_57245 = state_54413__$1;
(statearr_54444_57245[(2)] = null);

(statearr_54444_57245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54414 === (9))){
var inst_54390 = (state_54413[(8)]);
var state_54413__$1 = state_54413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54413__$1,(11),out,inst_54390);
} else {
if((state_val_54414 === (5))){
var inst_54387 = (state_54413[(7)]);
var inst_54390 = (state_54413[(8)]);
var inst_54394 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54390,inst_54387);
var state_54413__$1 = state_54413;
if(inst_54394){
var statearr_54447_57250 = state_54413__$1;
(statearr_54447_57250[(1)] = (8));

} else {
var statearr_54449_57252 = state_54413__$1;
(statearr_54449_57252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54414 === (10))){
var inst_54402 = (state_54413[(2)]);
var state_54413__$1 = state_54413;
var statearr_54451_57254 = state_54413__$1;
(statearr_54451_57254[(2)] = inst_54402);

(statearr_54451_57254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54414 === (8))){
var inst_54387 = (state_54413[(7)]);
var tmp54446 = inst_54387;
var inst_54387__$1 = tmp54446;
var state_54413__$1 = (function (){var statearr_54453 = state_54413;
(statearr_54453[(7)] = inst_54387__$1);

return statearr_54453;
})();
var statearr_54456_57264 = state_54413__$1;
(statearr_54456_57264[(2)] = null);

(statearr_54456_57264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_54459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54459[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_54459[(1)] = (1));

return statearr_54459;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_54413){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_54413);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e54466){var ex__51477__auto__ = e54466;
var statearr_54467_57283 = state_54413;
(statearr_54467_57283[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_54413[(4)]))){
var statearr_54470_57284 = state_54413;
(statearr_54470_57284[(1)] = cljs.core.first((state_54413[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57285 = state_54413;
state_54413 = G__57285;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_54413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_54413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_54475 = f__51876__auto__();
(statearr_54475[(6)] = c__51875__auto___57217);

return statearr_54475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__54482 = arguments.length;
switch (G__54482) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51875__auto___57295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_54547){
var state_val_54548 = (state_54547[(1)]);
if((state_val_54548 === (7))){
var inst_54542 = (state_54547[(2)]);
var state_54547__$1 = state_54547;
var statearr_54554_57296 = state_54547__$1;
(statearr_54554_57296[(2)] = inst_54542);

(statearr_54554_57296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (1))){
var inst_54498 = (new Array(n));
var inst_54499 = inst_54498;
var inst_54500 = (0);
var state_54547__$1 = (function (){var statearr_54555 = state_54547;
(statearr_54555[(7)] = inst_54500);

(statearr_54555[(8)] = inst_54499);

return statearr_54555;
})();
var statearr_54556_57298 = state_54547__$1;
(statearr_54556_57298[(2)] = null);

(statearr_54556_57298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (4))){
var inst_54511 = (state_54547[(9)]);
var inst_54511__$1 = (state_54547[(2)]);
var inst_54512 = (inst_54511__$1 == null);
var inst_54513 = cljs.core.not(inst_54512);
var state_54547__$1 = (function (){var statearr_54559 = state_54547;
(statearr_54559[(9)] = inst_54511__$1);

return statearr_54559;
})();
if(inst_54513){
var statearr_54560_57333 = state_54547__$1;
(statearr_54560_57333[(1)] = (5));

} else {
var statearr_54561_57334 = state_54547__$1;
(statearr_54561_57334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (15))){
var inst_54536 = (state_54547[(2)]);
var state_54547__$1 = state_54547;
var statearr_54563_57336 = state_54547__$1;
(statearr_54563_57336[(2)] = inst_54536);

(statearr_54563_57336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (13))){
var state_54547__$1 = state_54547;
var statearr_54588_57337 = state_54547__$1;
(statearr_54588_57337[(2)] = null);

(statearr_54588_57337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (6))){
var inst_54500 = (state_54547[(7)]);
var inst_54532 = (inst_54500 > (0));
var state_54547__$1 = state_54547;
if(cljs.core.truth_(inst_54532)){
var statearr_54589_57344 = state_54547__$1;
(statearr_54589_57344[(1)] = (12));

} else {
var statearr_54590_57347 = state_54547__$1;
(statearr_54590_57347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (3))){
var inst_54544 = (state_54547[(2)]);
var state_54547__$1 = state_54547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54547__$1,inst_54544);
} else {
if((state_val_54548 === (12))){
var inst_54499 = (state_54547[(8)]);
var inst_54534 = cljs.core.vec(inst_54499);
var state_54547__$1 = state_54547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54547__$1,(15),out,inst_54534);
} else {
if((state_val_54548 === (2))){
var state_54547__$1 = state_54547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54547__$1,(4),ch);
} else {
if((state_val_54548 === (11))){
var inst_54526 = (state_54547[(2)]);
var inst_54527 = (new Array(n));
var inst_54499 = inst_54527;
var inst_54500 = (0);
var state_54547__$1 = (function (){var statearr_54599 = state_54547;
(statearr_54599[(7)] = inst_54500);

(statearr_54599[(10)] = inst_54526);

(statearr_54599[(8)] = inst_54499);

return statearr_54599;
})();
var statearr_54602_57351 = state_54547__$1;
(statearr_54602_57351[(2)] = null);

(statearr_54602_57351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (9))){
var inst_54499 = (state_54547[(8)]);
var inst_54524 = cljs.core.vec(inst_54499);
var state_54547__$1 = state_54547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54547__$1,(11),out,inst_54524);
} else {
if((state_val_54548 === (5))){
var inst_54517 = (state_54547[(11)]);
var inst_54500 = (state_54547[(7)]);
var inst_54511 = (state_54547[(9)]);
var inst_54499 = (state_54547[(8)]);
var inst_54516 = (inst_54499[inst_54500] = inst_54511);
var inst_54517__$1 = (inst_54500 + (1));
var inst_54519 = (inst_54517__$1 < n);
var state_54547__$1 = (function (){var statearr_54606 = state_54547;
(statearr_54606[(11)] = inst_54517__$1);

(statearr_54606[(12)] = inst_54516);

return statearr_54606;
})();
if(cljs.core.truth_(inst_54519)){
var statearr_54607_57352 = state_54547__$1;
(statearr_54607_57352[(1)] = (8));

} else {
var statearr_54608_57353 = state_54547__$1;
(statearr_54608_57353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (14))){
var inst_54539 = (state_54547[(2)]);
var inst_54540 = cljs.core.async.close_BANG_(out);
var state_54547__$1 = (function (){var statearr_54610 = state_54547;
(statearr_54610[(13)] = inst_54539);

return statearr_54610;
})();
var statearr_54611_57364 = state_54547__$1;
(statearr_54611_57364[(2)] = inst_54540);

(statearr_54611_57364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (10))){
var inst_54530 = (state_54547[(2)]);
var state_54547__$1 = state_54547;
var statearr_54612_57365 = state_54547__$1;
(statearr_54612_57365[(2)] = inst_54530);

(statearr_54612_57365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54548 === (8))){
var inst_54517 = (state_54547[(11)]);
var inst_54499 = (state_54547[(8)]);
var tmp54609 = inst_54499;
var inst_54499__$1 = tmp54609;
var inst_54500 = inst_54517;
var state_54547__$1 = (function (){var statearr_54614 = state_54547;
(statearr_54614[(7)] = inst_54500);

(statearr_54614[(8)] = inst_54499__$1);

return statearr_54614;
})();
var statearr_54615_57370 = state_54547__$1;
(statearr_54615_57370[(2)] = null);

(statearr_54615_57370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_54616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54616[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_54616[(1)] = (1));

return statearr_54616;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_54547){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_54547);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e54617){var ex__51477__auto__ = e54617;
var statearr_54618_57377 = state_54547;
(statearr_54618_57377[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_54547[(4)]))){
var statearr_54619_57378 = state_54547;
(statearr_54619_57378[(1)] = cljs.core.first((state_54547[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57379 = state_54547;
state_54547 = G__57379;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_54547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_54547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_54620 = f__51876__auto__();
(statearr_54620[(6)] = c__51875__auto___57295);

return statearr_54620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__54628 = arguments.length;
switch (G__54628) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51875__auto___57475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__51876__auto__ = (function (){var switch__51473__auto__ = (function (state_54684){
var state_val_54685 = (state_54684[(1)]);
if((state_val_54685 === (7))){
var inst_54678 = (state_54684[(2)]);
var state_54684__$1 = state_54684;
var statearr_54686_57480 = state_54684__$1;
(statearr_54686_57480[(2)] = inst_54678);

(statearr_54686_57480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (1))){
var inst_54636 = [];
var inst_54638 = inst_54636;
var inst_54639 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54684__$1 = (function (){var statearr_54688 = state_54684;
(statearr_54688[(7)] = inst_54638);

(statearr_54688[(8)] = inst_54639);

return statearr_54688;
})();
var statearr_54689_57487 = state_54684__$1;
(statearr_54689_57487[(2)] = null);

(statearr_54689_57487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (4))){
var inst_54643 = (state_54684[(9)]);
var inst_54643__$1 = (state_54684[(2)]);
var inst_54644 = (inst_54643__$1 == null);
var inst_54645 = cljs.core.not(inst_54644);
var state_54684__$1 = (function (){var statearr_54692 = state_54684;
(statearr_54692[(9)] = inst_54643__$1);

return statearr_54692;
})();
if(inst_54645){
var statearr_54693_57492 = state_54684__$1;
(statearr_54693_57492[(1)] = (5));

} else {
var statearr_54696_57494 = state_54684__$1;
(statearr_54696_57494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (15))){
var inst_54672 = (state_54684[(2)]);
var state_54684__$1 = state_54684;
var statearr_54697_57499 = state_54684__$1;
(statearr_54697_57499[(2)] = inst_54672);

(statearr_54697_57499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (13))){
var state_54684__$1 = state_54684;
var statearr_54699_57502 = state_54684__$1;
(statearr_54699_57502[(2)] = null);

(statearr_54699_57502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (6))){
var inst_54638 = (state_54684[(7)]);
var inst_54667 = inst_54638.length;
var inst_54668 = (inst_54667 > (0));
var state_54684__$1 = state_54684;
if(cljs.core.truth_(inst_54668)){
var statearr_54707_57508 = state_54684__$1;
(statearr_54707_57508[(1)] = (12));

} else {
var statearr_54708_57509 = state_54684__$1;
(statearr_54708_57509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (3))){
var inst_54680 = (state_54684[(2)]);
var state_54684__$1 = state_54684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54684__$1,inst_54680);
} else {
if((state_val_54685 === (12))){
var inst_54638 = (state_54684[(7)]);
var inst_54670 = cljs.core.vec(inst_54638);
var state_54684__$1 = state_54684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54684__$1,(15),out,inst_54670);
} else {
if((state_val_54685 === (2))){
var state_54684__$1 = state_54684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54684__$1,(4),ch);
} else {
if((state_val_54685 === (11))){
var inst_54643 = (state_54684[(9)]);
var inst_54647 = (state_54684[(10)]);
var inst_54658 = (state_54684[(2)]);
var inst_54659 = [];
var inst_54660 = inst_54659.push(inst_54643);
var inst_54638 = inst_54659;
var inst_54639 = inst_54647;
var state_54684__$1 = (function (){var statearr_54716 = state_54684;
(statearr_54716[(11)] = inst_54660);

(statearr_54716[(7)] = inst_54638);

(statearr_54716[(8)] = inst_54639);

(statearr_54716[(12)] = inst_54658);

return statearr_54716;
})();
var statearr_54717_57517 = state_54684__$1;
(statearr_54717_57517[(2)] = null);

(statearr_54717_57517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (9))){
var inst_54638 = (state_54684[(7)]);
var inst_54656 = cljs.core.vec(inst_54638);
var state_54684__$1 = state_54684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54684__$1,(11),out,inst_54656);
} else {
if((state_val_54685 === (5))){
var inst_54643 = (state_54684[(9)]);
var inst_54647 = (state_54684[(10)]);
var inst_54639 = (state_54684[(8)]);
var inst_54647__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54643) : f.call(null,inst_54643));
var inst_54649 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54647__$1,inst_54639);
var inst_54650 = cljs.core.keyword_identical_QMARK_(inst_54639,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54651 = ((inst_54649) || (inst_54650));
var state_54684__$1 = (function (){var statearr_54722 = state_54684;
(statearr_54722[(10)] = inst_54647__$1);

return statearr_54722;
})();
if(cljs.core.truth_(inst_54651)){
var statearr_54723_57527 = state_54684__$1;
(statearr_54723_57527[(1)] = (8));

} else {
var statearr_54726_57530 = state_54684__$1;
(statearr_54726_57530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (14))){
var inst_54675 = (state_54684[(2)]);
var inst_54676 = cljs.core.async.close_BANG_(out);
var state_54684__$1 = (function (){var statearr_54728 = state_54684;
(statearr_54728[(13)] = inst_54675);

return statearr_54728;
})();
var statearr_54729_57539 = state_54684__$1;
(statearr_54729_57539[(2)] = inst_54676);

(statearr_54729_57539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (10))){
var inst_54664 = (state_54684[(2)]);
var state_54684__$1 = state_54684;
var statearr_54731_57544 = state_54684__$1;
(statearr_54731_57544[(2)] = inst_54664);

(statearr_54731_57544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (8))){
var inst_54638 = (state_54684[(7)]);
var inst_54643 = (state_54684[(9)]);
var inst_54647 = (state_54684[(10)]);
var inst_54653 = inst_54638.push(inst_54643);
var tmp54727 = inst_54638;
var inst_54638__$1 = tmp54727;
var inst_54639 = inst_54647;
var state_54684__$1 = (function (){var statearr_54734 = state_54684;
(statearr_54734[(7)] = inst_54638__$1);

(statearr_54734[(8)] = inst_54639);

(statearr_54734[(14)] = inst_54653);

return statearr_54734;
})();
var statearr_54737_57559 = state_54684__$1;
(statearr_54737_57559[(2)] = null);

(statearr_54737_57559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51474__auto__ = null;
var cljs$core$async$state_machine__51474__auto____0 = (function (){
var statearr_54738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54738[(0)] = cljs$core$async$state_machine__51474__auto__);

(statearr_54738[(1)] = (1));

return statearr_54738;
});
var cljs$core$async$state_machine__51474__auto____1 = (function (state_54684){
while(true){
var ret_value__51475__auto__ = (function (){try{while(true){
var result__51476__auto__ = switch__51473__auto__(state_54684);
if(cljs.core.keyword_identical_QMARK_(result__51476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51476__auto__;
}
break;
}
}catch (e54740){var ex__51477__auto__ = e54740;
var statearr_54741_57565 = state_54684;
(statearr_54741_57565[(2)] = ex__51477__auto__);


if(cljs.core.seq((state_54684[(4)]))){
var statearr_54743_57566 = state_54684;
(statearr_54743_57566[(1)] = cljs.core.first((state_54684[(4)])));

} else {
throw ex__51477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57567 = state_54684;
state_54684 = G__57567;
continue;
} else {
return ret_value__51475__auto__;
}
break;
}
});
cljs$core$async$state_machine__51474__auto__ = function(state_54684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51474__auto____1.call(this,state_54684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51474__auto____0;
cljs$core$async$state_machine__51474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51474__auto____1;
return cljs$core$async$state_machine__51474__auto__;
})()
})();
var state__51877__auto__ = (function (){var statearr_54748 = f__51876__auto__();
(statearr_54748[(6)] = c__51875__auto___57475);

return statearr_54748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51877__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
