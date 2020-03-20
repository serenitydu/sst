var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPayModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'拒绝'])
Z([3,'点击领取'])
Z([3,'你妈妈买菜涨价辣！'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^error']],[[4],[[5],[[4],[[5],[1,'_error']]]]]]]],[[4],[[5],[[5],[1,'^success']],[[4],[[5],[[4],[[5],[1,'_success']]]]]]]]])
Z([3,'popup'])
Z([3,'优惠'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'拒绝'])
Z([3,'点击领取'])
Z([3,'你妈妈买菜涨价辣！'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^error']],[[4],[[5],[[4],[[5],[1,'_error']]]]]]]],[[4],[[5],[[5],[1,'^success']],[[4],[[5],[[4],[[5],[1,'_success']]]]]]]]])
Z([3,'popup'])
Z([3,'优惠'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'we-slide'])
Z([3,'height:90%;'])
Z([3,'index'])
Z([3,'itemName'])
Z([[7],[3,'community']])
Z(z[2])
Z([[2,'!='],[[6],[[6],[[7],[3,'itemName']],[3,'img']],[1,0]],[1,null]])
Z([3,'__e'])
Z([3,'xiaoneiBlock'])
Z([[6],[[7],[3,'itemName']],[3,'comDir']])
Z([[6],[[7],[3,'itemName']],[3,'_id']])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapComu']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'idx']])
Z([[7],[3,'itemName']])
Z([3,'likes'])
Z([3,'width:12%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:row;'])
Z([[2,'=='],[[7],[3,'voted']],[1,false]])
Z([[7],[3,'voted']])
Z([[2,'=='],[[6],[[6],[[7],[3,'itemName']],[3,'img']],[1,0]],[1,null]])
Z([[7],[3,'comMenu']])
Z(z[19])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'we-slide'])
Z([3,'height:96%;'])
Z([[7],[3,'comMenu']])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'message'])
Z([[7],[3,'messages']])
Z(z[0])
Z([3,'__e'])
Z([3,'mssView'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'makeRead']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'idx']])
Z([[2,'=='],[[6],[[7],[3,'message']],[3,'status']],[1,'unread']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'imgPop']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'拒绝'])
Z([3,'点击领取'])
Z([3,'你妈妈买菜涨价辣！'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^error']],[[4],[[5],[[4],[[5],[1,'_error']]]]]]]],[[4],[[5],[[5],[1,'^success']],[[4],[[5],[[4],[[5],[1,'_success']]]]]]]]])
Z([3,'popup'])
Z([3,'优惠'])
Z([3,'1'])
Z([[7],[3,'imgPop']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'preparePay']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z(z[2])
Z(z[2])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^success']],[[4],[[5],[[4],[[5],[1,'bindPaySuccess']]]]]]]],[[4],[[5],[[5],[1,'^fail']],[[4],[[5],[[4],[[5],[1,'bindPayFail']]]]]]]],[[4],[[5],[[5],[1,'^complete']],[[4],[[5],[[4],[[5],[1,'bindPayComplete']]]]]]]],[[4],[[5],[[5],[1,'^dataChange']],[[4],[[5],[[4],[[5],[1,'bindDataChange']]]]]]]]])
Z([[7],[3,'orderParams']])
Z([3,'1'])
Z([[2,'!'],[[7],[3,'weAv']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'cd']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'images']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'<'],[[6],[[7],[3,'images']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'weui-cells'])
Z([3,'__e'])
Z([3,'weui-cell weui-cell_access'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gotoAt']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'newAts']],[1,0]],[[2,'<='],[[7],[3,'newAts']],[1,99]]])
Z([[2,'>'],[[7],[3,'newAts']],[1,99]])
Z([[7],[3,'showMerc']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[6],[[7],[3,'loopimgs1']],[1,0]],[1,null]])
Z([[7],[3,'commenting']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./component/payjs/payjs.wxml','./component/popup/popup.wxml','./pages/Pintuan/Pintuan.wxml','./pages/Store/Store.wxml','./pages/commu/commu.wxml','./pages/ershou/ershou.wxml','./pages/inBox/inBox.wxml','./pages/index/index.wxml','./pages/item/item.wxml','./pages/login/login.wxml','./pages/mercPage/addItem/addItem.wxml','./pages/mercPage/manageItem/manageItem.wxml','./pages/mercPage/manageStore/manageStore.wxml','./pages/mercPage/mercIndex/mercIndex.wxml','./pages/navi/navi.wxml','./pages/newAt/newAt.wxml','./pages/pays/htvarify.wxml','./pages/pays/pay.wxml','./pages/postmanage/postmanage.wxml','./pages/pubPost/pubPost.wxml','./pages/pubReq/pubReq.wxml','./pages/register/register.wxml','./pages/showCP/showCP.wxml','./pages/testPage/test2.wxml','./pages/testPage/testThird.wxml','./pages/tuan/tuan.wxml','./pages/userInfo/userInfo.wxml','./pages/xiaonei/xiaonei.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=_mz(z,'popup',['bind:__l',0,'bind:error',1,'bind:success',1,'btn_no',2,'btn_ok',3,'content',4,'data-event-opts',5,'id',6,'title',7,'vueId',8],[],e,s,gg)
_(r,fE)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=_mz(z,'popup',['bind:__l',0,'bind:error',1,'bind:success',1,'btn_no',2,'btn_ok',3,'content',4,'data-event-opts',5,'id',6,'title',7,'vueId',8],[],e,s,gg)
_(r,hG)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cI=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var aL=_v()
_(cI,aL)
var tM=function(bO,eN,oP,gg){
var oR=_v()
_(oP,oR)
if(_oz(z,6,bO,eN,gg)){oR.wxVkey=1
var fS=_mz(z,'view',['bindtap',7,'class',1,'data-commuId',2,'data-commuListId',3,'data-event-opts',4,'data-ind',5,'data-naviParam',6],[],bO,eN,gg)
var cT=_mz(z,'view',['class',14,'style',1],[],bO,eN,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,16,bO,eN,gg)){hU.wxVkey=1
}
else{hU.wxVkey=2
var oV=_v()
_(hU,oV)
if(_oz(z,17,bO,eN,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
}
hU.wxXCkey=1
_(fS,cT)
_(oR,fS)
}
else{oR.wxVkey=2
var cW=_v()
_(oR,cW)
if(_oz(z,18,bO,eN,gg)){cW.wxVkey=1
}
cW.wxXCkey=1
}
oR.wxXCkey=1
return oP
}
aL.wxXCkey=2
_2z(z,4,tM,e,s,gg,aL,'itemName','index','index')
var oJ=_v()
_(cI,oJ)
if(_oz(z,19,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,20,e,s,gg)){lK.wxVkey=1
}
oJ.wxXCkey=1
lK.wxXCkey=1
_(r,cI)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var lY=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,2,e,s,gg)){aZ.wxVkey=1
}
var t1=_v()
_(lY,t1)
if(_oz(z,3,e,s,gg)){t1.wxVkey=1
}
aZ.wxXCkey=1
t1.wxXCkey=1
_(r,lY)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var b3=_v()
_(r,b3)
var o4=function(o6,x5,f7,gg){
var h9=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2,'data-ind',3],[],o6,x5,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,8,o6,x5,gg)){o0.wxVkey=1
}
o0.wxXCkey=1
_(f7,h9)
return f7
}
b3.wxXCkey=2
_2z(z,2,o4,e,s,gg,b3,'message','index','index')
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var eFB=_v()
_(r,eFB)
if(_oz(z,0,e,s,gg)){eFB.wxVkey=1
}
eFB.wxXCkey=1
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oHB=_n('view')
var oJB=_mz(z,'popup',['bind:__l',0,'bind:error',1,'bind:success',1,'btn_no',2,'btn_ok',3,'content',4,'data-event-opts',5,'id',6,'title',7,'vueId',8],[],e,s,gg)
_(oHB,oJB)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,10,e,s,gg)){xIB.wxVkey=1
}
xIB.wxXCkey=1
_(r,oHB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oPB=_n('view')
var lQB=_v()
_(oPB,lQB)
if(_oz(z,0,e,s,gg)){lQB.wxVkey=1
var tSB=_mz(z,'payjs',['bind:__l',1,'bind:complete',1,'bind:dataChange',2,'bind:fail',3,'bind:success',4,'data-event-opts',5,'params',6,'vueId',7],[],e,s,gg)
_(lQB,tSB)
}
var aRB=_v()
_(oPB,aRB)
if(_oz(z,9,e,s,gg)){aRB.wxVkey=1
}
lQB.wxXCkey=1
lQB.wxXCkey=3
aRB.wxXCkey=1
_(r,oPB)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var bUB=_v()
_(r,bUB)
if(_oz(z,0,e,s,gg)){bUB.wxVkey=1
}
bUB.wxXCkey=1
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var xWB=_v()
_(r,xWB)
if(_oz(z,0,e,s,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var fYB=_v()
_(r,fYB)
if(_oz(z,0,e,s,gg)){fYB.wxVkey=1
}
fYB.wxXCkey=1
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var a6B=_n('view')
_rz(z,a6B,'class',0,e,s,gg)
var e8B=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,4,e,s,gg)){b9B.wxVkey=1
}
else{b9B.wxVkey=2
var o0B=_v()
_(b9B,o0B)
if(_oz(z,5,e,s,gg)){o0B.wxVkey=1
}
o0B.wxXCkey=1
}
b9B.wxXCkey=1
_(a6B,e8B)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,6,e,s,gg)){t7B.wxVkey=1
}
t7B.wxXCkey=1
_(r,a6B)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var oBC=_n('view')
var fCC=_v()
_(oBC,fCC)
if(_oz(z,0,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(oBC,cDC)
if(_oz(z,1,e,s,gg)){cDC.wxVkey=1
}
fCC.wxXCkey=1
cDC.wxXCkey=1
_(r,oBC)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/userInfo/userInfo","pages/showCP/showCP","pages/mercPage/mercIndex/mercIndex","pages/testPage/test2","pages/mercPage/manageItem/manageItem","pages/mercPage/addItem/addItem","pages/mercPage/manageStore/manageStore","pages/Pintuan/Pintuan","pages/pubReq/pubReq","pages/newAt/newAt","pages/pays/htvarify","pages/commu/commu","pages/inBox/inBox","pages/pays/pay","pages/pubPost/pubPost","pages/navi/navi","pages/Store/Store","pages/item/item","component/popup/popup","pages/testPage/testThird","component/payjs/payjs","pages/tuan/tuan","pages/xiaonei/xiaonei","pages/postmanage/postmanage","pages/ershou/ershou","pages/login/login","pages/register/register"],"window":{"backgroundColor":"#FFD557","backgroundTextStyle":"light","navigationBarBackgroundColor":"#FFD557","navigationBarTitleText":"松鼠小镇","navigationBarTextStyle":"black"},"tabBar":{"color":"#403e3a","selectedColor":"#000000","borderStyle":"white","backgroundColor":"#FFD557","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"./static/icons/home.png","selectedIconPath":"./static/icons/home-active.png"},{"text":"交易","pagePath":"pages/ershou/ershou","iconPath":"./static/icons/web.png","selectedIconPath":"./static/icons/web-active.png"},{"text":"社区","pagePath":"pages/commu/commu","iconPath":"./static/icons/community.png","selectedIconPath":"./static/icons/community-active.png"},{"text":"个人","pagePath":"pages/userInfo/userInfo","iconPath":"./static/icons/user.png","selectedIconPath":"./static/icons/user-active.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"miniprogram-1","compilerVersion":"2.4.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['component/payjs/payjs.json']={"component":true,"usingComponents":{}};
__wxAppCode__['component/payjs/payjs.wxml']=$gwx('./component/payjs/payjs.wxml');

__wxAppCode__['component/popup/popup.json']={"component":true,"usingComponents":{}};
__wxAppCode__['component/popup/popup.wxml']=$gwx('./component/popup/popup.wxml');

__wxAppCode__['pages/commu/commu.json']={"enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/commu/commu.wxml']=$gwx('./pages/commu/commu.wxml');

__wxAppCode__['pages/ershou/ershou.json']={"enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/ershou/ershou.wxml']=$gwx('./pages/ershou/ershou.wxml');

__wxAppCode__['pages/inBox/inBox.json']={"usingComponents":{}};
__wxAppCode__['pages/inBox/inBox.wxml']=$gwx('./pages/inBox/inBox.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{"popup":"/component/popup/popup"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/item/item.json']={"usingComponents":{}};
__wxAppCode__['pages/item/item.wxml']=$gwx('./pages/item/item.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/mercPage/addItem/addItem.json']={"usingComponents":{}};
__wxAppCode__['pages/mercPage/addItem/addItem.wxml']=$gwx('./pages/mercPage/addItem/addItem.wxml');

__wxAppCode__['pages/mercPage/manageItem/manageItem.json']={"usingComponents":{}};
__wxAppCode__['pages/mercPage/manageItem/manageItem.wxml']=$gwx('./pages/mercPage/manageItem/manageItem.wxml');

__wxAppCode__['pages/mercPage/manageStore/manageStore.json']={"enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/mercPage/manageStore/manageStore.wxml']=$gwx('./pages/mercPage/manageStore/manageStore.wxml');

__wxAppCode__['pages/mercPage/mercIndex/mercIndex.json']={"usingComponents":{"popup":"/component/popup/popup"}};
__wxAppCode__['pages/mercPage/mercIndex/mercIndex.wxml']=$gwx('./pages/mercPage/mercIndex/mercIndex.wxml');

__wxAppCode__['pages/navi/navi.json']={"usingComponents":{}};
__wxAppCode__['pages/navi/navi.wxml']=$gwx('./pages/navi/navi.wxml');

__wxAppCode__['pages/newAt/newAt.json']={"usingComponents":{}};
__wxAppCode__['pages/newAt/newAt.wxml']=$gwx('./pages/newAt/newAt.wxml');

__wxAppCode__['pages/pays/htvarify.json']={"usingComponents":{}};
__wxAppCode__['pages/pays/htvarify.wxml']=$gwx('./pages/pays/htvarify.wxml');

__wxAppCode__['pages/pays/pay.json']={"usingComponents":{"payjs":"/component/payjs/payjs"}};
__wxAppCode__['pages/pays/pay.wxml']=$gwx('./pages/pays/pay.wxml');

__wxAppCode__['pages/Pintuan/Pintuan.json']={"usingComponents":{"popup":"/component/popup/popup"}};
__wxAppCode__['pages/Pintuan/Pintuan.wxml']=$gwx('./pages/Pintuan/Pintuan.wxml');

__wxAppCode__['pages/postmanage/postmanage.json']={"component":true,"usingComponents":{}};
__wxAppCode__['pages/postmanage/postmanage.wxml']=$gwx('./pages/postmanage/postmanage.wxml');

__wxAppCode__['pages/pubPost/pubPost.json']={"usingComponents":{}};
__wxAppCode__['pages/pubPost/pubPost.wxml']=$gwx('./pages/pubPost/pubPost.wxml');

__wxAppCode__['pages/pubReq/pubReq.json']={"usingComponents":{}};
__wxAppCode__['pages/pubReq/pubReq.wxml']=$gwx('./pages/pubReq/pubReq.wxml');

__wxAppCode__['pages/register/register.json']={"usingComponents":{}};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/showCP/showCP.json']={"usingComponents":{}};
__wxAppCode__['pages/showCP/showCP.wxml']=$gwx('./pages/showCP/showCP.wxml');

__wxAppCode__['pages/Store/Store.json']={"usingComponents":{"popup":"/component/popup/popup"}};
__wxAppCode__['pages/Store/Store.wxml']=$gwx('./pages/Store/Store.wxml');

__wxAppCode__['pages/testPage/test2.json']={"usingComponents":{}};
__wxAppCode__['pages/testPage/test2.wxml']=$gwx('./pages/testPage/test2.wxml');

__wxAppCode__['pages/testPage/testThird.json']={"usingComponents":{}};
__wxAppCode__['pages/testPage/testThird.wxml']=$gwx('./pages/testPage/testThird.wxml');

__wxAppCode__['pages/tuan/tuan.json']={"usingComponents":{}};
__wxAppCode__['pages/tuan/tuan.wxml']=$gwx('./pages/tuan/tuan.wxml');

__wxAppCode__['pages/userInfo/userInfo.json']={"enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/userInfo/userInfo.wxml']=$gwx('./pages/userInfo/userInfo.wxml');

__wxAppCode__['pages/xiaonei/xiaonei.json']={"usingComponents":{}};
__wxAppCode__['pages/xiaonei/xiaonei.wxml']=$gwx('./pages/xiaonei/xiaonei.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"17f8":function(t,e,n){"use strict";(function(t){n("81c2"),n("921b");var e=o(n("66fd")),a=o(n("a4c5"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,a.default.mpType="app";var l=new e.default(r({},a.default));t(l).$mount()}).call(this,n("6e42")["createApp"])},"3b85":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){var e=this,n=wx.getStorageSync("logs")||[];n.unshift(Date.now()),wx.setStorageSync("logs",n),t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",header:{"content-type":"application/json"},data:{mode:4,target:"ats",openId:"nihao"},success:function(t){"undefined"==typeof t.data.Items||(e.globalData.newAts=t.data.Items.length,e.globalData.newAts>0&&e.globalData.newAts<=99?wx.setTabBarBadge({index:3,text:e.globalData.newAts.toString()}):e.globalData.newAts>99?wx.setTabBarBadge({index:3,text:"99+"}):wx.removeTabBarBadge({index:3}))}})},globalData:{newAts:0,userInfo:null,payLink:"",htpay1:"",invoice:"",cmulid:"",orderItems:[],sid:"",openId:"nihao",var1:"111"},methods:{}};e.default=n}).call(this,n("6e42")["default"])},"72e7":function(t,e,n){"use strict";n.r(e);var a=n("3b85"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},9613:function(t,e,n){},a4c5:function(t,e,n){"use strict";n.r(e);var a=n("72e7");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("d74d");var r,u,l=n("2877"),c=Object(l["a"])(a["default"],r,u,!1,null,null,null);e["default"]=c.exports},d74d:function(t,e,n){"use strict";var a=n("9613"),o=n.n(a);o.a}},[["17f8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},3615:function(t,e,n){"use strict";var r=function(t){function e(t,e){return t<<e|t>>>32-e}function n(t,e){var n,r,o,i,a;return o=2147483648&t,i=2147483648&e,n=1073741824&t,r=1073741824&e,a=(1073741823&t)+(1073741823&e),n&r?2147483648^a^o^i:n|r?1073741824&a?3221225472^a^o^i:1073741824^a^o^i:a^o^i}function r(t,e,n){return t&e|~t&n}function o(t,e,n){return t&n|e&~n}function i(t,e,n){return t^e^n}function a(t,e,n){return e^(t|~n)}function s(t,o,i,a,s,u,c){return t=n(t,n(n(r(o,i,a),s),c)),n(e(t,u),o)}function u(t,r,i,a,s,u,c){return t=n(t,n(n(o(r,i,a),s),c)),n(e(t,u),r)}function c(t,r,o,a,s,u,c){return t=n(t,n(n(i(r,o,a),s),c)),n(e(t,u),r)}function l(t,r,o,i,s,u,c){return t=n(t,n(n(a(r,o,i),s),c)),n(e(t,u),r)}function f(t){var e,n=t.length,r=n+8,o=(r-r%64)/64,i=16*(o+1),a=Array(i-1),s=0,u=0;while(u<n)e=(u-u%4)/4,s=u%4*8,a[e]=a[e]|t.charCodeAt(u)<<s,u++;return e=(u-u%4)/4,s=u%4*8,a[e]=a[e]|128<<s,a[i-2]=n<<3,a[i-1]=n>>>29,a}function p(t){var e,n,r="",o="";for(n=0;n<=3;n++)e=t>>>8*n&255,o="0"+e.toString(16),r+=o.substr(o.length-2,2);return r}function h(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e+=String.fromCharCode(r):r>127&&r<2048?(e+=String.fromCharCode(r>>6|192),e+=String.fromCharCode(63&r|128)):(e+=String.fromCharCode(r>>12|224),e+=String.fromCharCode(r>>6&63|128),e+=String.fromCharCode(63&r|128))}return e}var d,v,g,y,_,m,b,w,A,$=Array(),O=7,S=12,k=17,x=22,C=5,j=9,D=14,E=20,P=4,T=11,I=16,B=23,R=6,L=10,M=15,N=21;for(t=h(t),$=f(t),m=1732584193,b=4023233417,w=2562383102,A=271733878,d=0;d<$.length;d+=16)v=m,g=b,y=w,_=A,m=s(m,b,w,A,$[d+0],O,3614090360),A=s(A,m,b,w,$[d+1],S,3905402710),w=s(w,A,m,b,$[d+2],k,606105819),b=s(b,w,A,m,$[d+3],x,3250441966),m=s(m,b,w,A,$[d+4],O,4118548399),A=s(A,m,b,w,$[d+5],S,1200080426),w=s(w,A,m,b,$[d+6],k,2821735955),b=s(b,w,A,m,$[d+7],x,4249261313),m=s(m,b,w,A,$[d+8],O,1770035416),A=s(A,m,b,w,$[d+9],S,2336552879),w=s(w,A,m,b,$[d+10],k,4294925233),b=s(b,w,A,m,$[d+11],x,2304563134),m=s(m,b,w,A,$[d+12],O,1804603682),A=s(A,m,b,w,$[d+13],S,4254626195),w=s(w,A,m,b,$[d+14],k,2792965006),b=s(b,w,A,m,$[d+15],x,1236535329),m=u(m,b,w,A,$[d+1],C,4129170786),A=u(A,m,b,w,$[d+6],j,3225465664),w=u(w,A,m,b,$[d+11],D,643717713),b=u(b,w,A,m,$[d+0],E,3921069994),m=u(m,b,w,A,$[d+5],C,3593408605),A=u(A,m,b,w,$[d+10],j,38016083),w=u(w,A,m,b,$[d+15],D,3634488961),b=u(b,w,A,m,$[d+4],E,3889429448),m=u(m,b,w,A,$[d+9],C,568446438),A=u(A,m,b,w,$[d+14],j,3275163606),w=u(w,A,m,b,$[d+3],D,4107603335),b=u(b,w,A,m,$[d+8],E,1163531501),m=u(m,b,w,A,$[d+13],C,2850285829),A=u(A,m,b,w,$[d+2],j,4243563512),w=u(w,A,m,b,$[d+7],D,1735328473),b=u(b,w,A,m,$[d+12],E,2368359562),m=c(m,b,w,A,$[d+5],P,4294588738),A=c(A,m,b,w,$[d+8],T,2272392833),w=c(w,A,m,b,$[d+11],I,1839030562),b=c(b,w,A,m,$[d+14],B,4259657740),m=c(m,b,w,A,$[d+1],P,2763975236),A=c(A,m,b,w,$[d+4],T,1272893353),w=c(w,A,m,b,$[d+7],I,4139469664),b=c(b,w,A,m,$[d+10],B,3200236656),m=c(m,b,w,A,$[d+13],P,681279174),A=c(A,m,b,w,$[d+0],T,3936430074),w=c(w,A,m,b,$[d+3],I,3572445317),b=c(b,w,A,m,$[d+6],B,76029189),m=c(m,b,w,A,$[d+9],P,3654602809),A=c(A,m,b,w,$[d+12],T,3873151461),w=c(w,A,m,b,$[d+15],I,530742520),b=c(b,w,A,m,$[d+2],B,3299628645),m=l(m,b,w,A,$[d+0],R,4096336452),A=l(A,m,b,w,$[d+7],L,1126891415),w=l(w,A,m,b,$[d+14],M,2878612391),b=l(b,w,A,m,$[d+5],N,4237533241),m=l(m,b,w,A,$[d+12],R,1700485571),A=l(A,m,b,w,$[d+3],L,2399980690),w=l(w,A,m,b,$[d+10],M,4293915773),b=l(b,w,A,m,$[d+1],N,2240044497),m=l(m,b,w,A,$[d+8],R,1873313359),A=l(A,m,b,w,$[d+15],L,4264355552),w=l(w,A,m,b,$[d+6],M,2734768916),b=l(b,w,A,m,$[d+13],N,1309151649),m=l(m,b,w,A,$[d+4],R,4149444226),A=l(A,m,b,w,$[d+11],L,3174756917),w=l(w,A,m,b,$[d+2],M,718787259),b=l(b,w,A,m,$[d+9],N,3951481745),m=n(m,v),b=n(b,g),w=n(w,y),A=n(A,_);var U=p(m)+p(b)+p(w)+p(A);return U.toLowerCase()};t.exports={MD5:r,md5:r}},"4ced":function(t,e,n){"use strict";(function(e){!function(e,n){t.exports=n()}(0,function(){var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===n.call(t)},a=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r,o=t.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!o&&!i)return!1;for(r in e);return void 0===r||t.call(e,r)},s=function(t,e){r&&"__proto__"===e.name?r(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},u=function(e,n){if("__proto__"===n){if(!t.call(e,n))return;if(o)return o(e,n).value}return e[n]},c=function t(){var e,n,r,o,c,l,f=arguments[0],p=1,h=arguments.length,d=!1;for("boolean"==typeof f&&(d=f,f=arguments[1]||{},p=2),(null==f||"object"!=typeof f&&"function"!=typeof f)&&(f={});p<h;++p)if(null!=(e=arguments[p]))for(n in e)r=u(f,n),f!==(o=u(e,n))&&(d&&o&&(a(o)||(c=i(o)))?(c?(c=!1,l=r&&i(r)?r:[]):l=r&&a(r)?r:{},s(f,{name:n,newValue:t(d,l,o)})):void 0!==o&&s(f,{name:n,newValue:o}));return f};function l(t){this.mode=p.MODE_8BIT_BYTE,this.data=t}function f(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}l.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},f.prototype={addData:function(t){var e=new l(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=k.getRSBlocks(t,this.errorCorrectLevel),n=new x,r=0,o=0;o<e.length;o++)r+=e[o].dataCount;for(o=0;o<this.dataList.length;o++){var i=this.dataList[o];n.put(i.mode,4),n.put(i.getLength(),A.getLengthInBits(i.mode,t)),i.write(n)}if(n.getLengthInBits()<=8*r)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=f.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=A.getLostPoint(this);(0==n||t>r)&&(t=r,e=n)}return e},createMovieClip:function(t,e,n){var r=t.createEmptyMovieClip(e,n);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,a=0;a<this.modules[o].length;a++){var s=1*a;this.modules[o][a]&&(r.beginFill(0,100),r.moveTo(s,i),r.lineTo(s+1,i),r.lineTo(s+1,i+1),r.lineTo(s,i+1),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=A.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],o=t[n];if(null==this.modules[r][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[r+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=A.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++)r=!t&&1==(e>>n&1),this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r},setupTypeInfo:function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=A.getBCHTypeInfo(n),o=0;o<15;o++){var i=!t&&1==(r>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++)i=!t&&1==(r>>o&1),o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var n=-1,r=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[r][a-s]){var u=!1;i<t.length&&(u=1==(t[i]>>>o&1)),A.getMask(e,r,a-s)&&(u=!u),this.modules[r][a-s]=u,-1==--o&&(i++,o=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}}},f.PAD0=236,f.PAD1=17,f.createData=function(t,e,n){for(var r=k.getRSBlocks(t,e),o=new x,i=0;i<n.length;i++){var a=n[i];o.put(a.mode,4),o.put(a.getLength(),A.getLengthInBits(a.mode,t)),a.write(o)}var s=0;for(i=0;i<r.length;i++)s+=r[i].dataCount;if(o.getLengthInBits()>8*s)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*s+")");for(o.getLengthInBits()+4<=8*s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*s||(o.put(f.PAD0,8),o.getLengthInBits()>=8*s));)o.put(f.PAD1,8);return f.createBytes(o,r)},f.createBytes=function(t,e){for(var n=0,r=0,o=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var u=e[s].dataCount,c=e[s].totalCount-u;r=Math.max(r,u),o=Math.max(o,c),i[s]=new Array(u);for(var l=0;l<i[s].length;l++)i[s][l]=255&t.buffer[l+n];n+=u;var f=A.getErrorCorrectPolynomial(c),p=new S(i[s],f.getLength()-1).mod(f);for(a[s]=new Array(f.getLength()-1),l=0;l<a[s].length;l++){var h=l+p.getLength()-a[s].length;a[s][l]=h>=0?p.get(h):0}}var d=0;for(l=0;l<e.length;l++)d+=e[l].totalCount;var v=new Array(d),g=0;for(l=0;l<r;l++)for(s=0;s<e.length;s++)l<i[s].length&&(v[g++]=i[s][l]);for(l=0;l<o;l++)for(s=0;s<e.length;s++)l<a[s].length&&(v[g++]=a[s][l]);return v};for(var p={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},h={L:1,M:0,Q:3,H:2},d=0,v=1,g=2,y=3,_=4,m=5,b=6,w=7,A={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;A.getBCHDigit(e)-A.getBCHDigit(A.G15)>=0;)e^=A.G15<<A.getBCHDigit(e)-A.getBCHDigit(A.G15);return(t<<10|e)^A.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;A.getBCHDigit(e)-A.getBCHDigit(A.G18)>=0;)e^=A.G18<<A.getBCHDigit(e)-A.getBCHDigit(A.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return A.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case d:return(e+n)%2==0;case v:return e%2==0;case g:return n%3==0;case y:return(e+n)%3==0;case _:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case m:return e*n%2+e*n%3==0;case b:return(e*n%2+e*n%3)%2==0;case w:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new S([1],0),n=0;n<t;n++)e=e.multiply(new S([1,$.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case p.MODE_NUMBER:return 10;case p.MODE_ALPHA_NUM:return 9;case p.MODE_8BIT_BYTE:case p.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case p.MODE_NUMBER:return 12;case p.MODE_ALPHA_NUM:return 11;case p.MODE_8BIT_BYTE:return 16;case p.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case p.MODE_NUMBER:return 14;case p.MODE_ALPHA_NUM:return 13;case p.MODE_8BIT_BYTE:return 16;case p.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(r,o),s=-1;s<=1;s++)if(!(r+s<0||e<=r+s))for(var u=-1;u<=1;u++)o+u<0||e<=o+u||0==s&&0==u||a==t.isDark(r+s,o+u)&&i++;i>5&&(n+=3+i-5)}for(r=0;r<e-1;r++)for(o=0;o<e-1;o++){var c=0;t.isDark(r,o)&&c++,t.isDark(r+1,o)&&c++,t.isDark(r,o+1)&&c++,t.isDark(r+1,o+1)&&c++,0!=c&&4!=c||(n+=3)}for(r=0;r<e;r++)for(o=0;o<e-6;o++)t.isDark(r,o)&&!t.isDark(r,o+1)&&t.isDark(r,o+2)&&t.isDark(r,o+3)&&t.isDark(r,o+4)&&!t.isDark(r,o+5)&&t.isDark(r,o+6)&&(n+=40);for(o=0;o<e;o++)for(r=0;r<e-6;r++)t.isDark(r,o)&&!t.isDark(r+1,o)&&t.isDark(r+2,o)&&t.isDark(r+3,o)&&t.isDark(r+4,o)&&!t.isDark(r+5,o)&&t.isDark(r+6,o)&&(n+=40);var l=0;for(o=0;o<e;o++)for(r=0;r<e;r++)t.isDark(r,o)&&l++;return n+Math.abs(100*l/e/e-50)/5*10}},$={glog:function(t){if(t<1)throw new Error("glog("+t+")");return $.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return $.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},O=0;O<8;O++)$.EXP_TABLE[O]=1<<O;for(O=8;O<256;O++)$.EXP_TABLE[O]=$.EXP_TABLE[O-4]^$.EXP_TABLE[O-5]^$.EXP_TABLE[O-6]^$.EXP_TABLE[O-8];for(O=0;O<255;O++)$.LOG_TABLE[$.EXP_TABLE[O]]=O;function S(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}function k(t,e){this.totalCount=t,this.dataCount=e}function x(){this.buffer=new Array,this.length=0}return S.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=$.gexp($.glog(this.get(n))+$.glog(t.get(r)));return new S(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=$.glog(this.get(0))-$.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<t.getLength();r++)n[r]^=$.gexp($.glog(t.get(r))+e);return new S(n,0).mod(t)}},k.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],k.getRSBlocks=function(t,e){var n=k.getRsBlockTable(t,e);if(void 0==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,o=new Array,i=0;i<r;i++)for(var a=n[3*i+0],s=n[3*i+1],u=n[3*i+2],c=0;c<a;c++)o.push(new k(s,u));return o},k.getRsBlockTable=function(t,e){switch(e){case h.L:return k.RS_BLOCK_TABLE[4*(t-1)+0];case h.M:return k.RS_BLOCK_TABLE[4*(t-1)+1];case h.Q:return k.RS_BLOCK_TABLE[4*(t-1)+2];case h.H:return k.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},x.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},function(t){t=t||{},(t=c(!0,{width:256,height:256,x:0,y:0,typeNumber:-1,correctLevel:h.H,background:"#ffffff",foreground:"#000000",image:{imageResource:"",dx:0,dy:0,dWidth:100,dHeight:100}},t)).canvasId||t.ctx?function(){var e,n=new f(t.typeNumber,t.correctLevel);n.addData(function(t){var e,n,r,o;for(e="",r=t.length,n=0;n<r;n++)(o=t.charCodeAt(n))>=1&&o<=127?e+=t.charAt(n):o>2047?(e+=String.fromCharCode(224|o>>12&15),e+=String.fromCharCode(128|o>>6&63),e+=String.fromCharCode(128|o>>0&63)):(e+=String.fromCharCode(192|o>>6&31),e+=String.fromCharCode(128|o>>0&63));return e}(t.text)),n.make(),e=t.ctx?t.ctx:t._this?wx.createCanvasContext&&wx.createCanvasContext(t.canvasId,t._this):wx.createCanvasContext&&wx.createCanvasContext(t.canvasId);for(var r=t.width/n.getModuleCount(),o=t.height/n.getModuleCount(),i=0;i<n.getModuleCount();i++)for(var a=0;a<n.getModuleCount();a++){var s=n.isDark(i,a)?t.foreground:t.background;e.setFillStyle(s);var u=Math.ceil((a+1)*r)-Math.floor(a*r),c=Math.ceil((i+1)*r)-Math.floor(i*r);e.fillRect(Math.round(a*r)+t.x,Math.round(i*o)+t.y,u,c)}t.image.imageResource&&e.drawImage(t.image.imageResource,t.image.dx,t.image.dy,t.image.dWidth,t.image.dHeight),e.draw(!1,function(e){t.callback&&t.callback(e)})}():console.warn(e("please set canvasId or ctx!"," at utils\\weapp.qrcode.min.js:524"))}})}).call(this,n("0de9")["default"])},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function l(t){return"[object Object]"===c.call(t)}function f(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,$=w(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),O=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,k=w(function(t){return t.replace(S,"-$1").toLowerCase()});function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function C(t,e){return t.bind(e)}var j=Function.prototype.bind?C:x;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function E(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&E(e,t[n]);return e}function T(t,e,n){}var I=function(t,e,n){return!1},B=function(t){return t};function R(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return R(t[n],e[n])})}catch(c){return!1}}function L(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var N=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:T,parsePlatformTagName:B,mustUseProp:I,async:!0,_lifecycleHooks:U},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^"+V.source+".$_\\d]");function z(t){if(!J.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,W="__proto__"in{},G="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Q=G&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Y),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(G)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===K&&(K=!G&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},it=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=T,lt=0,ft=function(){this.id=lt++,this.subs=[]};function pt(t){ft.SharedObject.targetStack.push(t),ft.SharedObject.target=t}function ht(){ft.SharedObject.targetStack.pop(),ft.SharedObject.target=ft.SharedObject.targetStack[ft.SharedObject.targetStack.length-1]}ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){_(this.subs,t)},ft.prototype.depend=function(){ft.SharedObject.target&&ft.SharedObject.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ft.SharedObject.target=null,ft.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function _t(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var At=Object.getOwnPropertyNames(bt),$t=!0;function Ot(t){$t=t}var St=function(t){this.value=t,this.dep=new ft,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(W?t.push!==t.__proto__.push?xt(t,bt,At):kt(t,bt):xt(t,bt,At),this.observeArray(t)):this.walk(t)};function kt(t,e){t.__proto__=e}function xt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function Ct(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof St?n=t.__ob__:$t&&!ot()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new St(t)),e&&n&&n.vmCount++,n}function jt(t,e,n,r,o){var i=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&Ct(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Pt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&Ct(e),i.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(jt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Et(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Pt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pt(e)}St.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)jt(t,e[n])},St.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ct(t[e])};var Tt=F.optionMergeStrategies;function It(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&l(r)&&l(o)&&It(r,o):Dt(t,n,o));return t}function Bt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?It(r,o):o}:e?t?function(){return It("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Lt(n):n}function Lt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Mt(t,e,n,r){var o=Object.create(t||null);return e?E(o,e):o}Tt.data=function(t,e,n){return n?Bt(t,e,n):e&&"function"!==typeof e?t:Bt(t,e)},U.forEach(function(t){Tt[t]=Rt}),N.forEach(function(t){Tt[t+"s"]=Mt}),Tt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in E(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Tt.props=Tt.methods=Tt.inject=Tt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return E(o,t),e&&E(o,e),o},Tt.provide=Bt;var Nt=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=$(o),a[i]={type:null})}else if(l(n))for(var s in n)o=n[s],i=$(s),a[i]=l(o)?o:{type:o};else 0;t.props=a}}function Ft(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(l(n))for(var i in n){var a=n[i];r[i]=l(a)?E({from:i},a):{from:a}}else 0}}function Vt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function qt(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),Ft(e,n),Vt(e),!e._base&&(e.extends&&(t=qt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=qt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=Tt[r]||Nt;a[r]=o(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=$(n);if(b(o,i))return o[i];var a=O(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Jt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Gt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===k(t)){var u=Gt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=zt(r,o,t);var c=$t;Ot(!0),Ct(a),Ot(c)}return a}function zt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Kt(e.type)?r.call(t):r}}function Kt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Wt(t,e){return Kt(t)===Kt(e)}function Gt(t,e){if(!Array.isArray(e))return Wt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Wt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(eo){Qt(eo,r,"errorCaptured hook")}}}Qt(t,e,n)}finally{ht()}}function Yt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Xt(eo,r,o)}return i}function Qt(t,e,n){if(F.errorHandler)try{return F.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Zt(eo,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!G&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(T)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Xt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function le(t){fe(t,ce),ce.clear()}function fe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)fe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)fe(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Yt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Yt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,a,s){var u,c,l,f;for(u in t)c=t[u],l=e[u],f=pe(u),r(c)||(r(l)?(r(c.fns)&&(c=t[u]=he(c,s)),i(f.once)&&(c=t[u]=a(f.name,c,f.capture)),n(f.name,c,f.capture,f.passive,f.params)):c!==l&&(l.fns=c,t[u]=l));for(u in e)r(t[u])&&(f=pe(u),o(f.name,e[u],f.capture))}function ve(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var l=k(c);ge(a,u,c,l,!0)||ge(a,s,c,l,!1)}return a}}function ge(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,l=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=l.length-1,c=l[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(l[u]=yt(c.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?me(c)?l[u]=yt(c.text+a):""!==a&&l.push(yt(a)):me(a)&&me(c)?l[u]=yt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),l.push(a)));return l}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ae(t){var e=$e(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach(function(n){jt(t,n,e[n])}),Ot(!0))}function $e(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Oe(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Se)&&delete n[c];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=xe(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=Ce(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",s),H(o,"$hasNormal",i),o}function xe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:_e(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ce(t,e){return function(){return t[e]}}function je(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length)),l=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function De(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=E(E({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Ee(t){return Ht(this.$options,"filters",t,!0)||B}function Pe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Te(t,e,n,r,o){var i=F.keyCodes[e]||n;return o&&r&&!F.keyCodes[e]?Pe(o,r):i?Pe(i,t):r?k(r)!==e:void 0}function Ie(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||F.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=$(a),c=k(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Be(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Le(r,"__static__"+t,!1),r)}function Re(t,e,n){return Le(t,"__once__"+e+(n?"_"+n:""),!0),t}function Le(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Me(t[r],e+"_"+r,n);else Me(t,e,n)}function Me(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ne(t,e){if(e)if(l(e)){var n=t.on=t.on?E({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ue(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ue(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Fe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ve(t,e){return"string"===typeof t?e+t:t}function qe(t){t._o=Re,t._n=v,t._s=d,t._l=je,t._t=De,t._q=R,t._i=L,t._m=Be,t._f=Ee,t._k=Te,t._b=Ie,t._v=yt,t._e=gt,t._u=Ue,t._g=Ne,t._d=Fe,t._p=Ve}function He(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var l=i(c._compiled),f=!l;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=$e(c.inject,o),this.slots=function(){return u.$slots||ke(t.scopedSlots,u.$slots=Oe(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),l&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=rn(s,t,e,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,f)}}function Je(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var l in c)u[l]=Jt(l,c,e||n);else o(r.attrs)&&Ke(u,r.attrs),o(r.props)&&Ke(u,r.props);var f=new He(r,u,a,i,t),p=s.render.call(null,f._c,f);if(p instanceof dt)return ze(p,r,f.parent,s,f);if(Array.isArray(p)){for(var h=_e(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=ze(h[v],r,f.parent,s,f);return d}}function ze(t,e,n,r,o){var i=_t(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Ke(t,e){for(var n in e)t[$(n)]=e[n]}qe(He.prototype);var We={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;We.prepatch(n,n)}else{var r=t.componentInstance=Ye(t,$n);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;xn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,En(n,"mounted")),t.data.keepAlive&&(e._isMounted?qn(n):jn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},Ge=Object.keys(We);function Xe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=dn(l,c),void 0===t))return hn(l,e,n,a,s);e=e||{},pr(t),o(e.model)&&tn(t.options,e);var f=ve(e,t,s);if(i(t.options.functional))return Je(t,f,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Qe(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:p,tag:s,children:a},l);return v}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ge.length;n++){var r=Ge[n],o=e[r],i=We[r];o===i||o&&o._merged||(e[r]=o?Ze(i,o):i)}}function Ze(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var en=1,nn=2;function rn(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return gt();if(o(n)&&o(n.is)&&(e=n.is),!e)return gt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=_e(r):i===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||F.getTagNamespace(e),a=F.isReservedTag(e)?new dt(F.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Ht(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Xe(u,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&an(a,s),o(n)&&sn(n),a):gt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&le(t.style),u(t.class)&&le(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Oe(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;jt(t,"$attrs",i&&i.attrs||n,null,!0),jt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,ln=null;function fn(t){qe(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=ke(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Xt(eo,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=o,t}}function pn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=gt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=ln;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,l=null;n.$on("hook:destroyed",function(){return _(a,n)});var f=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},p=M(function(n){t.resolved=pn(n,e),s?a.length=0:f(!0)}),d=M(function(e){o(t.errorComp)&&(t.error=!0,f(!0))}),v=t(p,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,f(!1))},v.delay||200)),o(v.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function _n(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function wn(t,e,n){cn=t,de(e,n||{},_n,mn,bn,t),cn=void 0}function An(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Yt(n[i],e,r,e,o)}return e}}var $n=null;function On(t){var e=$n;return $n=t,function(){$n=e}}function Sn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=On(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){En(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),En(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function xn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ot(!1);for(var l=t._props,f=t.$options._propKeys||[],p=0;p<f.length;p++){var h=f[p],d=t.$options.props;l[h]=Jt(h,d,e,t)}Ot(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,v),c&&(t.$slots=Oe(i,o.context),t.$forceUpdate())}function Cn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function jn(t,e){if(e){if(t._directInactive=!1,Cn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);En(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!Cn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);En(t,"deactivated")}}function En(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Yt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Pn=[],Tn=[],In={},Bn=!1,Rn=!1,Ln=0;function Mn(){Ln=Pn.length=Tn.length=0,In={},Bn=Rn=!1}var Nn=Date.now;if(G&&!Z){var Un=window.performance;Un&&"function"===typeof Un.now&&Nn()>document.createEvent("Event").timeStamp&&(Nn=function(){return Un.now()})}function Fn(){var t,e;for(Nn(),Rn=!0,Pn.sort(function(t,e){return t.id-e.id}),Ln=0;Ln<Pn.length;Ln++)t=Pn[Ln],t.before&&t.before(),e=t.id,In[e]=null,t.run();var n=Tn.slice(),r=Pn.slice();Mn(),Hn(n),Vn(r),it&&F.devtools&&it.emit("flush")}function Vn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&En(r,"updated")}}function qn(t){t._inactive=!1,Tn.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,jn(t[e],!0)}function Jn(t){var e=t.id;if(null==In[e]){if(In[e]=!0,Rn){var n=Pn.length-1;while(n>Ln&&Pn[n].id>t.id)n--;Pn.splice(n+1,0,t)}else Pn.push(t);Bn||(Bn=!0,ue(Fn))}}var zn=0,Kn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};Kn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Xt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),ht(),this.cleanupDeps()}return t},Kn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Kn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Kn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Jn(this)},Kn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Xt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Kn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Kn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Kn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Wn={enumerable:!0,configurable:!0,get:T,set:T};function Gn(t,e,n){Wn.get=function(){return this[e][n]},Wn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Wn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&ir(t,e.methods),e.data?Qn(t):Ct(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||Ot(!1);var a=function(i){o.push(i);var a=Jt(i,e,n,t);jt(r,i,a),i in t||Gn(t,"_props",i)};for(var s in e)a(s);Ot(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?Zn(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||q(i)||Gn(t,"_data",i)}Ct(e,!0)}function Zn(t,e){pt();try{return t.call(e,e)}catch(eo){return Xt(eo,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Kn(t,a||T,T,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Wn.get=r?rr(e):or(n),Wn.set=T):(Wn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):T,Wn.set=n.set||T),Object.defineProperty(t,e,Wn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?T:j(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Et,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new Kn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var cr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?fr(e,t):e.$options=qt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Sn(e),yn(e),un(e),En(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Ae(e),Xn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&En(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&E(t.extendOptions,o),e=t.options=qt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gr(t){t.mixin=function(t){return this.options=qt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=qt(n.options,t),a["super"]=n,a.options.props&&_r(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,N.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=E({},a.options),o[r]=a,a}}function _r(t){var e=t.options.props;for(var n in e)Gn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){N.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function Ar(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function $r(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=wr(a.componentOptions);s&&!e(s)&&Or(n,i,r,o)}}}function Or(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,_(n,e)}lr(dr),ur(dr),An(dr),kn(dr),fn(dr);var Sr=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Sr,exclude:Sr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Or(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){$r(t,function(t){return Ar(e,t)})}),this.$watch("exclude",function(e){$r(t,function(t){return!Ar(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var r=wr(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Ar(i,r))||a&&r&&Ar(a,r))return e;var s=this,u=s.cache,c=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[l]?(e.componentInstance=u[l].componentInstance,_(c,l),c.push(l)):(u[l]=e,c.push(l),this.max&&c.length>parseInt(this.max)&&Or(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},xr={KeepAlive:kr};function Cr(t){var e={get:function(){return F}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:E,mergeOptions:qt,defineReactive:jt},t.set=Dt,t.delete=Et,t.nextTick=ue,t.observable=function(t){return Ct(t),t},t.options=Object.create(null),N.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,E(t.options.components,xr),vr(t),gr(t),yr(t),br(t)}Cr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:He}),dr.version="2.6.10";var jr="[object Array]",Dr="[object Object]";function Er(t,e){var n={};return Pr(t,e),Tr(t,e,"",n),n}function Pr(t,e){if(t!==e){var n=Br(t),r=Br(e);if(n==Dr&&r==Dr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Pr(i,e[o])}}else n==jr&&r==jr&&t.length>=e.length&&e.forEach(function(e,n){Pr(t[n],e)})}}function Tr(t,e,n,r){if(t!==e){var o=Br(t),i=Br(e);if(o==Dr)if(i!=Dr||Object.keys(t).length<Object.keys(e).length)Ir(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Br(i),u=Br(a);if(s!=jr&&s!=Dr)i!=e[o]&&Ir(r,(""==n?"":n+".")+o,i);else if(s==jr)u!=jr?Ir(r,(""==n?"":n+".")+o,i):i.length<a.length?Ir(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Tr(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Dr)if(u!=Dr||Object.keys(i).length<Object.keys(a).length)Ir(r,(""==n?"":n+".")+o,i);else for(var c in i)Tr(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==jr?i!=jr?Ir(r,n,t):t.length<e.length?Ir(r,n,t):t.forEach(function(t,o){Tr(t,e[o],n+"["+o+"]",r)}):Ir(r,n,t)}}function Ir(t,e,n){t[e]=n}function Br(t){return Object.prototype.toString.call(t)}function Rr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Lr(t){return Pn.find(function(e){return t._watcher===e})}function Mr(t,e){if(!t.__next_tick_pending&&!Lr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Xt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Nr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ur=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Nr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Er(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Rr(n)})):Rr(this)}};function Fr(){}function Vr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Fr),t.$options.render||(t.$options.render=Fr),"mp-toutiao"!==t.mpHost&&En(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Kn(t,r,T,{before:function(){t._isMounted&&!t._isDestroyed&&En(t,"beforeUpdate")}},!0),n=!1,t}function qr(t,e){return o(t)||o(e)?Hr(t,Jr(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function Jr(t){return Array.isArray(t)?zr(t):u(t)?Kr(t):"string"===typeof t?t:""}function zr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Jr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Kr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Wr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Gr(t){return Array.isArray(t)?P(t):"string"===typeof t?Wr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Yr(t[r],n.slice(1).join("."))}function Qr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Mr(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=Ae,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Yt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return l(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yr(e||this,t)},t.prototype.__get_class=function(t,e){return qr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Gr(t),r=e?E(e,n):n;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var Zr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Zr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Zr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Zr}dr.prototype.__patch__=Ur,dr.prototype.$mount=function(t,e){return Vr(this,t,e)},to(dr),Qr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Oe,e.createPage=$e,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return h(t)||p(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function _(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,$=w(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),O=["invoke","success","fail","complete","returnValue"],S={},k={};function x(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?C(n):n}function C(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function j(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==O.indexOf(n)&&g(e[n])&&(t[n]=x(t[n],e[n]))})}function E(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==O.indexOf(n)&&g(e[n])&&j(t[n],e[n])})}function P(t,e){"string"===typeof t&&_(e)?D(k[t]||(k[t]={}),e):_(t)&&D(S,t)}function T(t,e){"string"===typeof t?_(e)?E(k[t],e):delete k[t]:_(t)&&E(S,t)}function I(t){return function(e){return t(e)||e}}function B(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(I(o));else{var i=o(e);if(B(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){R(t[n],e).then(function(t){return g(r)&&r(t)||t})}}}),e}function M(t,e){var n=[];Array.isArray(S.returnValue)&&n.push.apply(n,l(S.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,l(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(S).forEach(function(t){"returnValue"!==t&&(e[t]=S[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function U(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=N(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=R(a.invoke,n);return s.then(function(t){return e.apply(void 0,[L(a,t)].concat(o))})}return e.apply(void 0,[L(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var F={returnValue:function(t){return B(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},V=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,q=/^create|Manager$/,H=/^on/;function J(t){return q.test(t)}function z(t){return V.test(t)}function K(t){return H.test(t)&&"onPush"!==t}function W(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function G(t){return!(J(t)||z(t)||K(t))}function X(t,e){return G(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return g(n.success)||g(n.fail)||g(n.complete)?M(t,U.apply(void 0,[t,e,n].concat(o))):M(t,W(new Promise(function(r,i){U.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Q=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Z?.5:1:t<0?-n:n}var ot={promiseInterceptor:F},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:P,removeInterceptor:T}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function lt(t,e,n){return function(r){return e(pt(t,r,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var i=!0===o?e:{};for(var a in g(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];g(s)&&(s=s(e[a],e,i)),s?y(s)?i[s]=e[a]:_(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=lt(t,e[a],r):o||(i[a]=e[a]);return i}return g(e)&&(e=lt(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(at.returnValue)&&(e=at.returnValue(t,e)),ft(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;g(n)&&(o=n(e)),e=ft(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return z(t)?pt(t,a,o.returnValue,J(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(o),g(r)&&r(o)}}vt.forEach(function(t){dt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function mt(){return _t(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return _t(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return _t(yt(),"$once",Array.prototype.slice.call(arguments))}function At(){return _t(yt(),"$emit",Array.prototype.slice.call(arguments))}var $t=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:At});function Ot(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function St(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;Ot("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&St(e),e}var xt=Object.freeze({getSubNVueById:kt,requireNativePlugin:Ot}),Ct=Page,jt=Component,Dt=/:/g,Et=w(function(t){return $(t.replace(Dt,"-"))});function Pt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Et(n)].concat(o))}}}function Tt(t,e){var n=e[t];e[t]=n?function(){Pt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Pt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("onLoad",t),Ct(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("created",t),jt(t)};var It=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Bt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function Lt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Mt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ut(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ft(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return _(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Vt=[String,Number,Boolean,Object,Array,null];function qt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(r)&&r.props&&a.push(e({properties:zt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){_(t)&&t.props&&a.push(e({properties:zt(t.props,!0)}))}),a}function Jt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function zt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:qt(t)}}):_(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(_(r)){var o=r["default"];g(o)&&(o=o()),r.type=Jt(e,r.type),n[e]={type:-1!==Vt.indexOf(r.type)?r.type:null,value:o,observer:qt(e)}}else{var i=Jt(e,r);n[e]={type:-1!==Vt.indexOf(i)?i:null,observer:qt(e)}}}),n}function Kt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Wt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):_(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Gt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Wt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Gt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Xt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Kt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Zt;r=s?r.slice(1):r;var u=r.charAt(0)===Qt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var a=o[r];if(!g(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Yt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Bt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Lt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function le(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function fe(t){return re(t,{mocks:oe,initRefs:ce})}var pe=["onUniNViewMessage"];function he(t){var e=fe(t);return Lt(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Mt(r.default,t),s=i(a,2),u=s[0],c=s[1],l={multipleSlots:!0,addGlobalClass:!0},f={options:l,data:Ft(c,r.default.prototype),behaviors:Ht(c,ae),properties:zt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ut(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:le,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,u]}function ge(t){return ve(t,{isPage:se,initRelation:ue})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return Lt(n.methods,_e,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}_e.push.apply(_e,It);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ae(t){var e=be(t);return Lt(e.methods,we),e}function $e(t){return Component(Ae(t))}function Oe(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Se={};Object.keys(it).forEach(function(t){Se[t]=it[t]}),Object.keys($t).forEach(function(t){Se[t]=$t[t]}),Object.keys(xt).forEach(function(t){Se[t]=X(t,xt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Se[t]=X(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Se,t.UniEmitter=$t),wx.createApp=de,wx.createPage=$e,wx.createComponent=Oe;var ke=Se,xe=ke;e.default=xe}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"81c2":function(t,e,n){},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var f=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,g=10,y="__DC_STAT_UUID",_="__DC_UUID_VALUE";function m(){var e="";if("n"===$()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=_}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,_)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},A=function(){return parseInt((new Date).getTime()/1e3)},$=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},O=function(){var e="";return"wx"!==$()&&"qq"!==$()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},S=function(){return"n"===$()?plus.runtime.version:""},k=function(){var t=$(),e="";return"n"===t&&(e=plus.runtime.channel),e},x=function(e){var n=$(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},C="First__Visit__Time",j="Last__Visit__Time",D=function(){var e=t.getStorageSync(C),n=0;return e?n=e:(n=A(),t.setStorageSync(C,n),t.removeStorageSync(j)),n},E=function(){var e=t.getStorageSync(j),n=0;return n=e||"",t.setStorageSync(j,A()),n},P="__page__residence__time",T=0,I=0,B=function(){return T=A(),"n"===$()&&t.setStorageSync(P,A()),T},R=function(){return I=A(),"n"===$()&&(T=t.getStorageSync(P)),I-T},L="Total__Visit__Count",M=function(){var e=t.getStorageSync(L),n=1;return e&&(n=e,n++),t.setStorageSync(L,n),n},N=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},U=0,F=0,V=function(){var t=(new Date).getTime();return U=t,F=0,t},q=function(){var t=(new Date).getTime();return F=t,t},H=function(t){var e=0;if(0!==U&&(e=F-U),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},J=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===$()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},z=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===$()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},K=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},W=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},G=n("cd05").default,X=n("a99d").default||n("a99d"),Y=t.getSystemInfoSync(),Q=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:$(),mpn:O(),ak:X.appid,usv:f,v:S(),ch:k(),cn:"",pn:"",ct:"",t:A(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return l(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){q();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,q();var n=H();V();var r=z(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=z(this),e=J();if(this._navigationBarTitle.config=G&&G.pages[e]&&G.pages[e].titleNView&&G.pages[e].titleNView.titleText||G&&G.pages[e]&&G.pages[e].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=t);q(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){q();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=A(),this.statData.sc=x(t.scene),this.statData.fvts=D(),this.statData.lvts=E(),this.statData.tvc=M(),"n"===$()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:A(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=A(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===$()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===$()&&t.setStorageSync("__UNI__STAT__DATA",a),!(R()<g)||n){var s=this._reportingRequestData;"n"===$()&&(s=t.getStorageSync("__UNI__STAT__DATA")),B();var u=[],c=[],l=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?l.push(n):c.push(n)})};for(var h in s)p(h);u.push.apply(u,c.concat(l));var d={usv:f,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===$()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==$()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(N(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){W(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),l(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),l(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,B(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,K(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,K(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(n)}}]),n}(Q),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},a99d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:""};e.default=r},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},cd05:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{},"pages/userInfo/userInfo":{enablePullDownRefresh:!0},"pages/showCP/showCP":{},"pages/mercPage/mercIndex/mercIndex":{},"pages/testPage/test2":{},"pages/mercPage/manageItem/manageItem":{},"pages/mercPage/addItem/addItem":{},"pages/mercPage/manageStore/manageStore":{enablePullDownRefresh:!0},"pages/Pintuan/Pintuan":{},"pages/pubReq/pubReq":{},"pages/newAt/newAt":{},"pages/pays/htvarify":{},"pages/commu/commu":{enablePullDownRefresh:!0},"pages/inBox/inBox":{},"pages/pays/pay":{},"pages/pubPost/pubPost":{},"pages/navi/navi":{},"pages/Store/Store":{},"pages/item/item":{},"component/popup/popup":{component:!0},"pages/testPage/testThird":{},"component/payjs/payjs":{component:!0},"pages/tuan/tuan":{},"pages/xiaonei/xiaonei":{},"pages/postmanage/postmanage":{component:!0},"pages/ershou/ershou":{enablePullDownRefresh:!0},"pages/login/login":{},"pages/register/register":{}},globalStyle:{backgroundColor:"#FFD557",backgroundTextStyle:"light",navigationBarBackgroundColor:"#FFD557",navigationBarTitleText:"松鼠小镇",navigationBarTextStyle:"black"}};e.default=r},d445:function(t,e,n){"use strict";(function(e){var r="",o="sk_test_Iw0PWUCxhxBlsdz3x2NTsVtb00ZiYitB6y",i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e5,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999;return parseInt(Math.random()*(e-t+1)+t,10)},a=function(t){var e=Object.keys(t);e.sort();var r=[];e.forEach(function(e){null!=t[e]&&r.push(e+"="+t[e])}),r.push("key="+o);var i=r.join("&"),a=n("3615"),s=a.md5(i).toUpperCase();return s},s=function(){var t=100,e="小程序支付测试",n=i(),o=Date.now(),s="TEST-WXA-"+o+"-"+n,u=null,c=null,l={mchid:r,total_fee:t,out_trade_no:s,body:e,attach:c,notify_url:u,nonce:n},f=a(l);return l.sign=f,l};function u(t,e){for(var n=[],r=t,o=0;o<t.length;o++){for(var i=r[o].tags,a=0;a<i.length;a++)i[a]=i[a].toLowerCase();r[o].tags=i}var s=e.length;for(o=0;o<r.length;o++){var u=0,c=r[o];for(a=0;a<s;a++)c.tags.includes(e[a])&&u++;u==s&&n.push(c)}return n}function c(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o.name.toLowerCase().includes(e.toLowerCase())&&n.push(o)}return n}function l(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o.detail.toLowerCase().includes(e.toLowerCase())&&n.push(o)}return n}function f(t){var n=this,r=Date.parse(new Date)/1e3,o=r.toString(),i=n.formatTime2(new Date);console.log(e(o," at utils\\util.js:159")),console.log(e(n.formatTime(new Date(1e3*r))," at utils\\util.js:160")),wx.cloud.callFunction({name:"allAboutActionRec",data:{mode:1},success:function(o){if(console.log(e(o.result.data.length," at utils\\util.js:168")),0==o.result.data.length)wx.cloud.callFunction({name:"allAboutActionRec",data:{mode:3,lastRespon:[r],lastSignup:r,lastPost:r},success:function(r){console.log(e("added"," at utils\\util.js:181")),3!=t?n.giveExp(500):n.giveExp(100)}});else{var a=o.result.data[0];if(console.log(e("actionrecords"," at utils\\util.js:187")),console.log(e(a," at utils\\util.js:188")),console.log(e("actionrecords"," at utils\\util.js:189")),1==t){var s=n.formatTime2(new Date(1e3*a.lastPost));i.year>s.year||i.year==s.year&&i.month>s.month||i.year==s.year&&i.month==s.month&&i.day>s.day?wx.cloud.callFunction({name:"allAboutActionRec",data:{mode:2,lastRespon:a.lastRespon,lastSignup:a.lastSignup,lastPost:r},success:function(t){console.log(e("updated last post"," at utils\\util.js:205")),n.giveExp(500)}}):(console.log(e(i," at utils\\util.js:210")),console.log(e(s," at utils\\util.js:211")),console.log(e(r," at utils\\util.js:212")),console.log(e(a.lastPost," at utils\\util.js:213")),console.log(e("not a new day"," at utils\\util.js:214")))}else if(2==t){s=n.formatTime2(new Date(1e3*a.lastSignup));i.year>s.year||i.year==s.year&&i.month>s.month||i.year==s.year&&i.month==s.month&&i.day>s.day?wx.cloud.callFunction({name:"allAboutActionRec",data:{mode:2,lastRespon:a.lastRespon,lastSignup:r,lastPost:a.lastPost},success:function(t){console.log(e("updated last Signup"," at utils\\util.js:230")),n.giveExp(500)}}):(console.log(e(i," at utils\\util.js:235")),console.log(e(s," at utils\\util.js:236")),console.log(e("not a new day"," at utils\\util.js:237")))}else if(3==t){s=n.formatTime2(new Date(1e3*a.lastRespon[0]));if(console.log(e(s," at utils\\util.js:241")),console.log(e(i," at utils\\util.js:242")),a.lastRespon.length<5||i.year>s.year||i.year==s.year&&i.month>s.month||i.year==s.year&&i.month==s.month&&i.day>s.day){var u=a.lastRespon;a.lastRespon.length>4?(u.shift(),u.push(r)):u.push(r),wx.cloud.callFunction({name:"allAboutActionRec",data:{mode:2,lastRespon:u,lastSignup:a.lastSignup,lastPost:a.lastPost},success:function(t){console.log(e("updated last response"," at utils\\util.js:264")),n.giveExp(100)}})}else console.log(e(i.month>=s.month," at utils\\util.js:269")),console.log(e("not a new day"," at utils\\util.js:270"))}}}})}t.exports={getOrderParams:s,hex_sha256:h,sendRandom:D,formatTime:E,lvlFromExp:I,cloudRemove:B,removePost:R,giveExp:L,formatTime2:P,updateUserDateRecord:f,searchByTags:u,searchByTagsCom:l,searchByTagsSH:c};var p=0;function h(t){return v(d(g(t)))}function d(t){return _(C(y(t),8*t.length))}function v(t){for(var e,n=p?"0123456789ABCDEF":"0123456789abcdef",r="",o=0;o<t.length;o++)e=t.charCodeAt(o),r+=n.charAt(e>>>4&15)+n.charAt(15&e);return r}function g(t){var e,n,r="",o=-1;while(++o<t.length)e=t.charCodeAt(o),n=o+1<t.length?t.charCodeAt(o+1):0,55296<=e&&e<=56319&&56320<=n&&n<=57343&&(e=65536+((1023&e)<<10)+(1023&n),o++),e<=127?r+=String.fromCharCode(e):e<=2047?r+=String.fromCharCode(192|e>>>6&31,128|63&e):e<=65535?r+=String.fromCharCode(224|e>>>12&15,128|e>>>6&63,128|63&e):e<=2097151&&(r+=String.fromCharCode(240|e>>>18&7,128|e>>>12&63,128|e>>>6&63,128|63&e));return r}function y(t){for(var e=Array(t.length>>2),n=0;n<e.length;n++)e[n]=0;for(n=0;n<8*t.length;n+=8)e[n>>5]|=(255&t.charCodeAt(n/8))<<24-n%32;return e}function _(t){for(var e="",n=0;n<32*t.length;n+=8)e+=String.fromCharCode(t[n>>5]>>>24-n%32&255);return e}function m(t,e){return t>>>e|t<<32-e}function b(t,e){return t>>>e}function w(t,e,n){return t&e^~t&n}function A(t,e,n){return t&e^t&n^e&n}function $(t){return m(t,2)^m(t,13)^m(t,22)}function O(t){return m(t,6)^m(t,11)^m(t,25)}function S(t){return m(t,7)^m(t,18)^b(t,3)}function k(t){return m(t,17)^m(t,19)^b(t,10)}var x=new Array(1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998);function C(t,e){var n,r,o,i,a,s,u,c,l,f,p,h,d=new Array(1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225),v=new Array(64);for(t[e>>5]|=128<<24-e%32,t[15+(e+64>>9<<4)]=e,l=0;l<t.length;l+=16){for(n=d[0],r=d[1],o=d[2],i=d[3],a=d[4],s=d[5],u=d[6],c=d[7],f=0;f<64;f++)v[f]=f<16?t[f+l]:j(j(j(k(v[f-2]),v[f-7]),S(v[f-15])),v[f-16]),p=j(j(j(j(c,O(a)),w(a,s,u)),x[f]),v[f]),h=j($(n),A(n,r,o)),c=u,u=s,s=a,a=j(i,p),i=o,o=r,r=n,n=j(p,h);d[0]=j(n,d[0]),d[1]=j(r,d[1]),d[2]=j(o,d[2]),d[3]=j(i,d[3]),d[4]=j(a,d[4]),d[5]=j(s,d[5]),d[6]=j(u,d[6]),d[7]=j(c,d[7])}return d}function j(t,e){var n=(65535&t)+(65535&e),r=(t>>16)+(e>>16)+(n>>16);return r<<16|65535&n}function D(t){var n=Date.parse(new Date)/1e3,r=n.toString(),o=Math.floor(1e6*Math.random());console.log(e(o," at utils\\util.js:644"));var i=t,a=this.hex_sha256("appkey=9af7c74b29d7d97aec74d151c240f943&random="+o+"&time="+r+"&mobile="+i);console.log(e(a," at utils\\util.js:647")),wx.request({url:"https://yun.tim.qq.com/v5/tlssmssvr/sendsms?sdkappid=1400232308&random="+o,method:"POST",data:{ext:"",extend:"",params:[o],sig:a,sign:"Squirrel Town",tel:{mobile:i,nationcode:"1"},time:n,tpl_id:376617},success:function(t){console.log(e(t," at utils\\util.js:665"))}})}function E(t){var e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return[n,r,e].map(T).join("/")}function P(t){var e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return{year:e,month:n,day:r}}function T(t){return t=t.toString(),t[1]?t:"0"+t}function I(t){var e=t,n=1e3,r=1;while(e>=n)e-=n,n*=1.5,r++;return{resLvl:r,expToNext:n,remExp:e}}function B(t){wx.cloud.deleteFile({fileList:t,success:function(t){console.log(e(t," at utils\\util.js:716"))},fail:function(t){console.log(e("failed"," at utils\\util.js:720")),console.log(e(res," at utils\\util.js:721"))}})}function R(t,n,r){var o=this;wx.cloud.callFunction({name:"deleteWithId",data:{dbname:"xiaonei",id:n},success:function(n){wx.cloud.callFunction({name:"deleteWithId",data:{dbname:"commuList",id:t},success:function(t){console.log(e("Succc"," at utils\\util.js:742")),o.cloudRemove(r)},fail:function(t){console.log(e("disanceng"," at utils\\util.js:746")),console.log(e(t," at utils\\util.js:747"))}})},fail:function(t){console.log(e(t," at utils\\util.js:752"))}})}function L(t){wx.cloud.callFunction({name:"getUser",success:function(n){0==n.result.data.length?wx.cloud.callFunction({name:"applyExp",data:{mode:2,amount:t},success:function(t){console.log(e("added"," at utils\\util.js:769"))},fail:function(t){console.log(e("failed to add"," at utils\\util.js:772")),console.log(e(t," at utils\\util.js:773"))}}):wx.cloud.callFunction({name:"applyExp",data:{mode:1,amount:t},success:function(t){console.log(e("updated"," at utils\\util.js:784"))},fail:function(t){console.log(e("failed to update"," at utils\\util.js:787")),console.log(e(t," at utils\\util.js:788"))}})}})}}).call(this,n("0de9")["default"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'component/payjs/payjs';__wxRouteBegin = true;__wxAppCurrentFile__ = 'component/payjs/payjs.js';

define('component/payjs/payjs.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["component/payjs/payjs"], {
  2797: function _(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  3475: function _(t, e, n) {},
  4613: function _(t, e, n) {
    "use strict";

    (function (t) {
      n("81c2"), n("921b");
      a(n("66fd"));
      var e = a(n("fbb0"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      t(e.default);
    }).call(this, n("6e42")["createPage"]);
  },
  "9cd6": function cd6(t, e, n) {
    "use strict";

    var a = n("3475"),
        o = n.n(a);
    o.a;
  },
  a21b: function a21b(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        data: function data() {
          return {
            showPayModal: !1,
            paying: !1
          };
        },
        components: {},
        props: {
          params: {
            type: Object,
            default: function _default() {
              return null;
            }
          },
          envVersion: {
            type: String,
            default: "release"
          }
        },
        lifetimes: {
          attached: function attached() {
            var e = this;
            this.setPaying(!1), this.params || (console.error(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 错误：没有传递跳转参数", r, " at component\\payjs\\payjs.vue:42")), this.$emit("fail", {
              error: !0,
              navigateSuccess: !1
            }), this.$emit("complete")), wx.onAppShow(function (n) {
              if (e.paying && (e.setPaying(!1), 1038 === n.scene && "wx959c8c1fb2d877b5" === n.referrerInfo.appId)) {
                console.log(t("[PAYJS] 确认来源于 PAYJS 回调返回", " at component\\payjs\\payjs.vue:58"));
                var a = n.referrerInfo.extraData;
                a.success ? (e.$emit("success", a), e.$emit("complete")) : (e.$emit("fail", {
                  navigateSuccess: !0,
                  info: a
                }), e.$emit("complete"));
              }
            }), wx.navigateToMiniProgram({
              appId: "wx959c8c1fb2d877b5",
              path: "pages/pays",
              extraData: this.params,
              envVersion: this.envVersion,
              success: function success(n) {
                console.log(t("[PAYJS] 跳转到 PAYJS 小程序成功", n, " at component\\payjs\\payjs.vue:80")), e.setPaying(!0);
              },
              fail: function fail(n) {
                console.log(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 准备弹窗提醒跳转", n, " at component\\payjs\\payjs.vue:86")), e.setData({
                  showPayModal: !0
                });
              }
            });
          }
        },
        methods: {
          setPaying: function setPaying(t) {
            this.setData({
              paying: t
            }), this.$emit("dataChange", {
              paying: t
            });
          },
          onTapCancel: function onTapCancel() {
            console.log(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 用户点击了提醒窗体以外的地方", " at component\\payjs\\payjs.vue:107")), this.$emit("fail", {
              navigateSuccess: !1
            }), this.$emit("complete");
          },
          navigateSuccess: function navigateSuccess() {
            console.log(t("[PAYJS] 跳转到 PAYJS 小程序成功", " at component\\payjs\\payjs.vue:115")), this.setPaying(!0);
          },
          navigateFail: function navigateFail(e) {
            console.log(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 失败回调", e, " at component\\payjs\\payjs.vue:122")), this.$emit("fail", {
              navigateSuccess: !1,
              info: e
            }), this.$emit("complete");
          },
          setData: function setData(t, e) {
            var n,
                a,
                o = this,
                s = [];
            Object.keys(t).forEach(function (e) {
              s = e.split("."), n = t[e], a = o.$data, s.forEach(function (t, e) {
                e + 1 == s.length ? o.$set(a, t, n) : a[t] || o.$set(a, t, {}), a = a[t];
              });
            }), e && e();
          }
        }
      };
      e.default = n;
    }).call(this, n("0de9")["default"]);
  },
  c00a: function c00a(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("a21b"),
        o = n.n(a);

    for (var s in a) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(s);
    }

    e["default"] = o.a;
  },
  fbb0: function fbb0(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("2797"),
        o = n("c00a");

    for (var s in o) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(s);
    }

    n("9cd6");
    var i = n("2877"),
        c = Object(i["a"])(o["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = c.exports;
  }
}, [["4613", "common/runtime", "common/vendor"]]]);
});
require('component/payjs/payjs.js');
__wxRoute = 'component/popup/popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'component/popup/popup.js';

define('component/popup/popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["component/popup/popup"], {
  "00c2": function c2(t, n, e) {},
  "0bf4": function bf4(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      data: function data() {
        return {
          flag: !0
        };
      },
      components: {},
      props: {
        title_val: {
          type: String,
          default: "标题"
        },
        content_val: {
          type: String,
          default: "内容"
        },
        btn_no_val: {
          type: String,
          default: "取消"
        },
        btn_ok_val: {
          type: String,
          default: "确定"
        }
      },
      options: {
        multipleSlots: !0
      },
      methods: {
        hidePopup: function hidePopup() {
          this.setData({
            flag: !this.flag
          });
        },
        showPopup: function showPopup() {
          this.setData({
            flag: !this.flag
          });
        },
        _error: function _error() {
          this.$emit("error");
        },
        _success: function _success() {
          this.$emit("success");
        },
        setData: function setData(t, n) {
          var e,
              u,
              a = this,
              o = [];
          Object.keys(t).forEach(function (n) {
            o = n.split("."), e = t[n], u = a.$data, o.forEach(function (t, n) {
              n + 1 == o.length ? a.$set(u, t, e) : u[t] || a.$set(u, t, {}), u = u[t];
            });
          }), n && n();
        }
      }
    };
    n.default = u;
  },
  "34d0": function d0(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("0bf4"),
        a = e.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    n["default"] = a.a;
  },
  "69e7": function e7(t, n, e) {
    "use strict";

    (function (t) {
      e("81c2"), e("921b");
      u(e("66fd"));
      var n = u(e("fa3e"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      t(n.default);
    }).call(this, e("6e42")["createPage"]);
  },
  "9f55": function f55(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  b2c8: function b2c8(t, n, e) {
    "use strict";

    var u = e("00c2"),
        a = e.n(u);
    a.a;
  },
  fa3e: function fa3e(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("9f55"),
        a = e("34d0");

    for (var o in a) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(o);
    }

    e("b2c8");
    var c = e("2877"),
        f = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = f.exports;
  }
}, [["69e7", "common/runtime", "common/vendor"]]]);
});
require('component/popup/popup.js');
__wxRoute = 'pages/postmanage/postmanage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/postmanage/postmanage.js';

define('pages/postmanage/postmanage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/postmanage/postmanage"], {
  "1e18": function e18(t, e, a) {},
  "3f2b": function f2b(t, e, a) {
    "use strict";

    var s = function s() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    a.d(e, "a", function () {
      return s;
    }), a.d(e, "b", function () {
      return o;
    });
  },
  "41a9": function a9(t, e, a) {
    "use strict";

    var s = a("1e18"),
        o = a.n(s);
    o.a;
  },
  "451f": function f(t, e, a) {
    "use strict";

    a.r(e);
    var s = a("bb3b"),
        o = a.n(s);

    for (var n in s) {
      "default" !== n && function (t) {
        a.d(e, t, function () {
          return s[t];
        });
      }(n);
    }

    e["default"] = o.a;
  },
  bb3b: function bb3b(t, e, a) {
    "use strict";

    (function (t, s) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = 0,
          n = 0,
          u = !0,
          c = a("d445"),
          i = {
        data: function data() {
          return {
            posts: [],
            cd: !0,
            community: ""
          };
        },
        components: {},
        props: {},
        onLoad: function onLoad() {
          this.pullUserPost();
        },
        methods: {
          recordStart: function recordStart(e) {
            o = e.touches[0].clientX, n = this.posts[e.currentTarget.dataset.index].offsetX, console.log(t("start x ", o, " at pages\\postmanage\\postmanage.vue:63"));
          },
          recordMove: function recordMove(e) {
            console.log(t(e.currentTarget.dataset.index, " at pages\\postmanage\\postmanage.vue:66"));
            var a = this.posts,
                s = a[e.currentTarget.dataset.index],
                u = e.touches[0].clientX,
                c = o - u;
            console.log(t("move x ", c, " at pages\\postmanage\\postmanage.vue:71"));
            var i = n - c;
            i >= -80 && i <= 0 && (s.offsetX = i), this.setData({
              posts: a
            });
          },
          recordEnd: function recordEnd(e) {
            var a = this.posts,
                s = a[e.currentTarget.dataset.index];
            console.log(t("end x ", s.offsetX, " at pages\\postmanage\\postmanage.vue:85")), s.offsetX < -40 ? s.offsetX = -80 : s.offsetX = 0, this.setData({
              posts: a
            });
          },
          tapComu: function tapComu(e) {
            var a = this,
                o = e.currentTarget.dataset.index;
            getApp().globalData.var1 = e.currentTarget.dataset.commuid;
            var n = e.currentTarget.dataset.commulistid;
            s.request({
              url: "https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter",
              method: "POST",
              data: {
                postId: n,
                mode: 2
              },
              success: function success(e) {
                var s = a.posts;
                console.log(t(s, " at pages\\postmanage\\postmanage.vue:114")), s[o].vc++, a.setData({
                  community: s
                });
              }
            }), wx.navigateTo({
              url: "../xiaonei/xiaonei"
            });
          },
          deletePost: function deletePost(e) {
            console.log(t(e, " at pages\\postmanage\\postmanage.vue:127"));
            var a = this;

            if (u) {
              u = !1, this.setData({
                cd: !1
              });
              var o = e.currentTarget.dataset.targetind,
                  n = this.posts[e.currentTarget.dataset.targetind]._id,
                  i = this.posts[e.currentTarget.dataset.targetind].comDir,
                  r = (a = this, this.posts[e.currentTarget.dataset.targetind].img);
              s.request({
                url: "https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/deletewithid",
                method: "POST",
                data: {
                  dbname: "xiaonei",
                  id: i
                },
                success: function success(e) {
                  s.request({
                    url: "https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/deletewithid",
                    method: "POST",
                    data: {
                      dbname: "commuList",
                      id: n
                    },
                    success: function success(e) {
                      console.log(t("Succc", " at pages\\postmanage\\postmanage.vue:156")), c.cloudRemove(r);
                      var s = a.posts;
                      s.splice(o, 1), a.setData({
                        posts: s
                      }), u = !0, a.setData({
                        cd: !0
                      });
                    },
                    fail: function fail(e) {
                      console.log(t("disanceng", " at pages\\postmanage\\postmanage.vue:169")), console.log(t(e, " at pages\\postmanage\\postmanage.vue:170"));
                    }
                  });
                },
                fail: function fail(e) {
                  console.log(t(e, " at pages\\postmanage\\postmanage.vue:175"));
                }
              });
            }
          },
          pullUserPost: function pullUserPost() {
            console.log(t("loading user posts", " at pages\\postmanage\\postmanage.vue:182"));
            var e = this;
            s.request({
              url: "https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/managepost",
              method: "POST",
              data: {
                mode: 2,
                dbname: "commuList"
              },
              success: function success(a) {
                console.log(t(a.data.Items, " at pages\\postmanage\\postmanage.vue:192")), e.setData({
                  posts: a.data.Items
                });
              },
              fail: function fail(e) {
                console.log(t("fail", " at pages\\postmanage\\postmanage.vue:198")), console.log(t(e, " at pages\\postmanage\\postmanage.vue:199"));
              }
            });
          },
          setData: function setData(t, e) {
            var a,
                s,
                o = this,
                n = [];
            Object.keys(t).forEach(function (e) {
              n = e.split("."), a = t[e], s = o.$data, n.forEach(function (t, e) {
                e + 1 == n.length ? o.$set(s, t, a) : s[t] || o.$set(s, t, {}), s = s[t];
              });
            }), e && e();
          }
        }
      };
      e.default = i;
    }).call(this, a("0de9")["default"], a("6e42")["default"]);
  },
  c00f: function c00f(t, e, a) {
    "use strict";

    (function (t) {
      a("81c2"), a("921b");
      s(a("66fd"));
      var e = s(a("d3e0"));

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      t(e.default);
    }).call(this, a("6e42")["createPage"]);
  },
  d3e0: function d3e0(t, e, a) {
    "use strict";

    a.r(e);
    var s = a("3f2b"),
        o = a("451f");

    for (var n in o) {
      "default" !== n && function (t) {
        a.d(e, t, function () {
          return o[t];
        });
      }(n);
    }

    a("41a9");
    var u = a("2877"),
        c = Object(u["a"])(o["default"], s["a"], s["b"], !1, null, null, null);
    e["default"] = c.exports;
  }
}, [["c00f", "common/runtime", "common/vendor"]]]);
});
require('pages/postmanage/postmanage.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"00c2":function(t,e,n){},"0bf4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{flag:!0}},components:{},props:{title_val:{type:String,default:"标题"},content_val:{type:String,default:"内容"},btn_no_val:{type:String,default:"取消"},btn_ok_val:{type:String,default:"确定"}},options:{multipleSlots:!0},methods:{hidePopup:function(){this.setData({flag:!this.flag})},showPopup:function(){this.setData({flag:!this.flag})},_error:function(){this.$emit("error")},_success:function(){this.$emit("success")},setData:function(t,e){var n,a,o=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),n=t[e],a=o.$data,s.forEach(function(t,e){e+1==s.length?o.$set(a,t,n):a[t]||o.$set(a,t,{}),a=a[t]})}),e&&e()}}};e.default=a},"34d0":function(t,e,n){"use strict";n.r(e);var a=n("0bf4"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},"3cec":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("fa3e"));function o(t){return t&&t.__esModule?t:{default:t}}var s=20,u=0,i=0,r={data:function(){return{shops:"",loopimgs1:"",loopadsHT:"",loopadsWD:"",shopHT:"",userInfo:"",hasUserInfo:!1}},components:{popup:a.default},props:{},onPullDownRefresh:function(){this.onLoad()},onShow:function(){},onLoad:function(){var e=this;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdata",method:"POST",data:{dbname:"shops"},success:function(n){wx.stopPullDownRefresh();var a=[],o=n.data.Items;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser",method:"POST",data:{openId:getApp().globalData.openId},success:function(t){if(t.data.Items[0])for(var e=t.data.Items[0].address,n=0;n<o.length;n++){var u=o[n].address;wx.request({url:"https://maps.googleapis.com/maps/api/directions/json?origin="+u+"&destination="+e+"&key=AIzaSyBN4EcKh9xONylRy2pWlCRhtW4LBK5Voh0",success:function(t){621371e-9*t.data.routes[0].legs[0].distance.value<=s&&a.push({add:u})}})}}}),e.setData({shops:o})}}),t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdata",method:"POST",data:{dbname:"frontPageAds",openId:getApp().globalData.openId},success:function(t){e.setData({loopimgs1:t.data.Items})}}),wx.getSystemInfo({success:function(t){u=t.windowWidth,i=t.windowHeight}}),this.setData({loopadsHT:.4*i,loopadsWD:u,shopHT:.6*i})},methods:{getUserInfo:function(t){getApp().globalData.userInfo=t.detail.userInfo,this.setData({userInfo:t.detail.userInfo,hasUserInfo:!0})},clickonStore:function(t){wx.setStorageSync("shopid",t.currentTarget.dataset.shopid),"normal"==t.currentTarget.dataset.kind?wx.navigateTo({url:"../Store/Store"}):wx.navigateTo({url:"../Pintuan/Pintuan"})},loopTCHstart:function(){!1},loopTCHend:function(){!0},toAddPage:function(){wx.navigateTo({url:"../navi/navi"})},setData:function(t,e){var n,a,o=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),n=t[e],a=o.$data,s.forEach(function(t,e){e+1==s.length?o.$set(a,t,n):a[t]||o.$set(a,t,{}),a=a[t]})}),e&&e()}}};e.default=r}).call(this,n("6e42")["default"])},5930:function(t,e,n){},"617e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"78a0":function(t,e,n){"use strict";n.r(e);var a=n("3cec"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},"9f55":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},aff5:function(t,e,n){"use strict";n.r(e);var a=n("617e"),o=n("78a0");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("c311");var u=n("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},b2c8:function(t,e,n){"use strict";var a=n("00c2"),o=n.n(a);o.a},c311:function(t,e,n){"use strict";var a=n("5930"),o=n.n(a);o.a},ebc6:function(t,e,n){"use strict";(function(t){n("81c2"),n("921b");a(n("66fd"));var e=a(n("aff5"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fa3e:function(t,e,n){"use strict";n.r(e);var a=n("9f55"),o=n("34d0");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("b2c8");var u=n("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}},[["ebc6","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/userInfo/userInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userInfo/userInfo.js';

define('pages/userInfo/userInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userInfo/userInfo"],{3634:function(e,t,a){},"386a":function(e,t,a){"use strict";a.r(t);var n=a("d0cc"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},"45b5":function(e,t,a){"use strict";a.r(t);var n=a("71b6"),o=a("386a");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);a("b034");var u=a("2877"),d=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=d.exports},"71b6":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},b034:function(e,t,a){"use strict";var n=a("3634"),o=a.n(n);o.a},d0cc:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a("d445"),s={data:function(){return{showMerc:!1,userInfo:null,phoneInputDis:!0,addInputDis:!0,phoneData:"",addrData:"",scoin:0,gold:0,level:1,toNextLvl:1e3,exp:0,ExpGaugeRatio:.01,posts:[],newAts:0,phone:"",addr:""}},components:{},props:{},onLoad:function(){var t=this;this.updatePhone(),this.updateAddress(),this.updateProp(),e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:4,target:"ats",openId:getApp().globalData.openId},success:function(e){console.log(n("undefined"==typeof e.data.Items," at pages\\userInfo\\userInfo.vue:163")),"undefined"==typeof e.data.Items||t.setData({newAts:e.data.Items.length})}})},onReady:function(){},onShow:function(){var t=this;e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:4,target:"ats",openId:getApp().globalData.openId},success:function(e){console.log(n("undefined"==typeof e.data.Items," at pages\\userInfo\\userInfo.vue:193")),"undefined"==typeof e.data.Items||t.setData({newAts:e.data.Items.length})}})},onHide:function(){},onUnload:function(){},onReachBottom:function(){},onShareAppMessage:function(){},onPullDownRefresh:function(){this.onLoad()},methods:{tologin:function(){e.navigateTo({url:"../login/login"})},phoneNumInput:function(e){this.setData({phone:e.detail.value})},updatePhone:function(t){var a=this;e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser",method:"POST",data:{openId:getApp().globalData.openId},success:function(t){console.log(n(t," at pages\\userInfo\\userInfo.vue:246")),0==t.data.Items.length?e.navigateTo({url:"../register/register"}):"no"!=t.data.Items[0].merc&&a.setData({showMerc:!0}),0==t.data.Items.length||0==t.data.Items[0].phone.length?a.setData({phoneData:"未绑定"}):a.setData({phoneData:t.data.Items[0].phone})},fail:function(e){a.setData({phoneData:"未绑定"})}})},gotoAt:function(e){wx.removeTabBarBadge({index:3}),wx.navigateTo({url:"../newAt/newAt"})},updateAddress:function(t){var a=this;e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser",method:"POST",data:{openId:getApp().globalData.openId},success:function(e){0==e.data.Items.length||0==e.data.Items[0].address.length?a.setData({addrData:"未填写"}):a.setData({addrData:e.data.Items[0].address})},fail:function(e){a.setData({addrData:"未绑定"})}})},updateProp:function(t){var a=this;e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser",method:"POST",data:{openId:getApp().globalData.openId},success:function(e){if(0==!e.data.Items.length){var t=o.lvlFromExp(e.data.Items[0].exp),s=parseInt(t.remExp),u=parseInt(t.expToNext);console.log(n(t.remExp/t.expToNext," at pages\\userInfo\\userInfo.vue:322"));var d=t.resLvl;a.setData({scoin:e.data.Items[0].scoin,gold:e.data.Items[0].gold,level:d,toNextLvl:u,exp:s,ExpGaugeRatio:t.remExp/t.expToNext*100*.6})}},fail:function(e){console.log(n("no user found"," at pages\\userInfo\\userInfo.vue:335"))}})},goPostManage:function(e){wx.navigateTo({url:"../postmanage/postmanage"})},addInput:function(e){this.setData({addr:e.detail.value})},refreshPage:function(){this.updatePhone(),this.updateAddress(),this.updateProp()},signUp:function(){o.updateUserDateRecord(2);var t=this;e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:4,target:"ats"},success:function(e){"undefined"==typeof e.data.Items||t.setData({newAts:e.data.Items.length})}})},confirmPhoneNum:function(t){var a=this.phone,o=this;e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser",method:"POST",data:{openId:getApp().globalData.openId},success:function(t){0==t.data.Items.length?(console.log(n(t," at pages\\userInfo\\userInfo.vue:387")),e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adduserinfo",method:"POST",data:{mode:1,phone:a},success:function(e){o.updatePhone(),console.log(n(e," at pages\\userInfo\\userInfo.vue:398")),o.setData({phoneInputDis:!0,addInputDis:!0})},fail:function(e){console.log(n(e," at pages\\userInfo\\userInfo.vue:405"))}})):wx.cloud.callFunction({name:"updateUserInfo",data:{mode:1,phone:a},success:function(e){o.updatePhone(),console.log(n("update Succcccc"," at pages\\userInfo\\userInfo.vue:419")),o.setData({phoneInputDis:!0,addInputDis:!0})},fail:function(e){console.log(n("suck"," at pages\\userInfo\\userInfo.vue:426"))}})},fail:function(e){console.log(n(e," at pages\\userInfo\\userInfo.vue:432")),console.log(n("suck"," at pages\\userInfo\\userInfo.vue:433"))}})},confirmAddress:function(t){var a=this.addr,o=this;e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser",method:"POST",data:{openId:getApp().globalData.openId},success:function(t){0==t.data.Items.length?e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adduserinfo",method:"POST",data:{mode:2,address:a},success:function(e){o.updateAddress(),console.log(n("update Succcccc"," at pages\\userInfo\\userInfo.vue:460")),o.setData({phoneInputDis:!0,addInputDis:!0})},fail:function(e){console.log(n(e," at pages\\userInfo\\userInfo.vue:467"))}}):wx.cloud.callFunction({name:"updateUserInfo",data:{mode:2,address:a},success:function(e){o.updateAddress(),console.log(n("update Succcccc"," at pages\\userInfo\\userInfo.vue:481")),o.setData({phoneInputDis:!0,addInputDis:!0})},fail:function(e){console.log(n("suck"," at pages\\userInfo\\userInfo.vue:488"))}})},fail:function(e){console.log(n("suck"," at pages\\userInfo\\userInfo.vue:494"))}})},openPhone:function(){this.setData({phoneInputDis:!1})},openAddress:function(){this.setData({addInputDis:!1})},cancelInput:function(){this.setData({phoneInputDis:!0,addInputDis:!0})},goPostMerc:function(){wx.navigateTo({url:"../mercPage/mercIndex/mercIndex"})},setData:function(e,t){var a,n,o=this,s=[];Object.keys(e).forEach(function(t){s=t.split("."),a=e[t],n=o.$data,s.forEach(function(e,t){t+1==s.length?o.$set(n,e,a):n[e]||o.$set(n,e,{}),n=n[e]})}),t&&t()}}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},d387:function(e,t,a){"use strict";(function(e){a("81c2"),a("921b");n(a("66fd"));var t=n(a("45b5"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["d387","common/runtime","common/vendor"]]]);
});
require('pages/userInfo/userInfo.js');
__wxRoute = 'pages/showCP/showCP';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/showCP/showCP.js';

define('pages/showCP/showCP.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/showCP/showCP"],{"2cf2":function(n,t,e){"use strict";var o=e("d22a"),u=e.n(o);u.a},4874:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e("4ced"));function u(n){return n&&n.__esModule?n:{default:n}}var c={data:function(){return{cpId:"AAAAAAAAAAAA",sId:"FFFFFFFFF"}},components:{},props:{},onLoad:function(n){var t=this;(0,o.default)({width:200,height:200,canvasId:"myQrcode",text:t.cpId+t.sId,background:"#ffea76"})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{setData:function(n,t){var e,o,u=this,c=[];Object.keys(n).forEach(function(t){c=t.split("."),e=n[t],o=u.$data,c.forEach(function(n,t){t+1==c.length?u.$set(o,n,e):o[n]||u.$set(o,n,{}),o=o[n]})}),t&&t()}}};t.default=c},"9eb0":function(n,t,e){"use strict";(function(n){e("81c2"),e("921b");o(e("66fd"));var t=o(e("a75c"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},a75c:function(n,t,e){"use strict";e.r(t);var o=e("f70d"),u=e("bf2c");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("2cf2");var a=e("2877"),f=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=f.exports},bf2c:function(n,t,e){"use strict";e.r(t);var o=e("4874"),u=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);t["default"]=u.a},d22a:function(n,t,e){},f70d:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})}},[["9eb0","common/runtime","common/vendor"]]]);
});
require('pages/showCP/showCP.js');
__wxRoute = 'pages/mercPage/mercIndex/mercIndex';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mercPage/mercIndex/mercIndex.js';

define('pages/mercPage/mercIndex/mercIndex.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mercPage/mercIndex/mercIndex"],{"00c2":function(t,e,n){},"0bf4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{flag:!0}},components:{},props:{title_val:{type:String,default:"标题"},content_val:{type:String,default:"内容"},btn_no_val:{type:String,default:"取消"},btn_ok_val:{type:String,default:"确定"}},options:{multipleSlots:!0},methods:{hidePopup:function(){this.setData({flag:!this.flag})},showPopup:function(){this.setData({flag:!this.flag})},_error:function(){this.$emit("error")},_success:function(){this.$emit("success")},setData:function(t,e){var n,a,o=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),n=t[e],a=o.$data,s.forEach(function(t,e){e+1==s.length?o.$set(a,t,n):a[t]||o.$set(a,t,{}),a=a[t]})}),e&&e()}}};e.default=a},"10fb":function(t,e,n){"use strict";n.r(e);var a=n("accc"),o=n("3968");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("8d3a");var u=n("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},3471:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("fa3e"));function s(t){return t&&t.__esModule?t:{default:t}}var u=0,c=0,r={data:function(){return{shops:"",loopadsHT:"",loopadsWD:"",shopHT:"",userInfo:"",hasUserInfo:!1}},components:{popup:o.default},props:{},onPullDownRefresh:function(){this.onLoad()},onShow:function(){},onLoad:function(){var e=this;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdata",method:"POST",data:{dbname:"shops"},success:function(n){var o=n.data.Items;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getuser",method:"POST",success:function(t){var n=[];console.log(a(t.data.Items[0].open_Id," at pages\\mercPage\\mercIndex\\mercIndex.vue:81"));for(var s=t.data.Items[0].open_Id,u=0;u<o.length;u++)console.log(a(o[u].owner," at pages\\mercPage\\mercIndex\\mercIndex.vue:85")),o[u].owner.includes(s)&&n.push(o[u]);e.setData({shops:n})}}),wx.stopPullDownRefresh()}}),wx.getSystemInfo({success:function(t){u=t.windowWidth,c=t.windowHeight}}),this.setData({loopadsHT:.4*c,loopadsWD:u,shopHT:.6*c})},methods:{scanQRcode:function(){wx.scanCode({success:function(t){console.log(a(t," at pages\\mercPage\\mercIndex\\mercIndex.vue:140")),console.log(a(t.result," at pages\\mercPage\\mercIndex\\mercIndex.vue:142"))}})},getUserInfo:function(t){console.log(a(t," at pages\\mercPage\\mercIndex\\mercIndex.vue:147")),getApp().globalData.userInfo=t.detail.userInfo,this.setData({userInfo:t.detail.userInfo,hasUserInfo:!0})},clickonStore:function(t){wx.setStorageSync("shopid",t.currentTarget.dataset.shopid),wx.navigateTo({url:"../manageStore/manageStore"})},loopTCHstart:function(){!1},loopTCHend:function(){!0},setData:function(t,e){var n,a,o=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),n=t[e],a=o.$data,s.forEach(function(t,e){e+1==s.length?o.$set(a,t,n):a[t]||o.$set(a,t,{}),a=a[t]})}),e&&e()}}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},"34d0":function(t,e,n){"use strict";n.r(e);var a=n("0bf4"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},3968:function(t,e,n){"use strict";n.r(e);var a=n("3471"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},"525c":function(t,e,n){},"8d3a":function(t,e,n){"use strict";var a=n("525c"),o=n.n(a);o.a},"9f55":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},accc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},b2c8:function(t,e,n){"use strict";var a=n("00c2"),o=n.n(a);o.a},db5d:function(t,e,n){"use strict";(function(t){n("81c2"),n("921b");a(n("66fd"));var e=a(n("10fb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fa3e:function(t,e,n){"use strict";n.r(e);var a=n("9f55"),o=n("34d0");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("b2c8");var u=n("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["db5d","common/runtime","common/vendor"]]]);
});
require('pages/mercPage/mercIndex/mercIndex.js');
__wxRoute = 'pages/testPage/test2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/testPage/test2.js';

define('pages/testPage/test2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/testPage/test2"],{"38d5":function(t,n,e){"use strict";var o=e("47d5"),u=e.n(o);u.a},"47d5":function(t,n,e){},"6b2f":function(t,n,e){"use strict";(function(t){e("81c2"),e("921b");o(e("66fd"));var n=o(e("bca7"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"76fb":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},bca7:function(t,n,e){"use strict";e.r(n);var o=e("76fb"),u=e("c48f");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("38d5");var a=e("2877"),f=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=f.exports},c2d1:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e("4ced"));function u(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{}},components:{},props:{},onLoad:function(t){(0,o.default)({width:200,height:200,canvasId:"myQrcode",text:"松鼠小镇测试生成二维码"})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{scanC:function(){wx.scanCode({success:function(n){console.log(t(n," at pages\\testPage\\test2.vue:70")),console.log(t(n.result," at pages\\testPage\\test2.vue:72"))}})},setData:function(t,n){var e,o,u=this,c=[];Object.keys(t).forEach(function(n){c=n.split("."),e=t[n],o=u.$data,c.forEach(function(t,n){n+1==c.length?u.$set(o,t,e):o[t]||u.$set(o,t,{}),o=o[t]})}),n&&n()}}};n.default=c}).call(this,e("0de9")["default"])},c48f:function(t,n,e){"use strict";e.r(n);var o=e("c2d1"),u=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=u.a}},[["6b2f","common/runtime","common/vendor"]]]);
});
require('pages/testPage/test2.js');
__wxRoute = 'pages/mercPage/manageItem/manageItem';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mercPage/manageItem/manageItem.js';

define('pages/mercPage/manageItem/manageItem.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mercPage/manageItem/manageItem"],{2309:function(e,t,a){"use strict";(function(e,a){var n,s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=0,o=0,c={data:function(){return{title:"麻辣小龙虾",stitle:"$50",des:"大风大浪骄傲了大家很快就处女在u为撒发达",array1:["大","中","小"],index1:0,array2:[1,2,3,4,5,6,7,8,9],index2:0,flavor:"辣",customKey:"口味",newCustomKey:"口味",newTitle:"",newPrice:"",newFlav:"",newDesc:"",newImgStr:"aaa;sddd",newImg:[],imgPop:!1,coll:{},newKc:0,advic:"提交物品编辑",imght:"",imgwd:"",botht:""}},components:{},props:{},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onLoad:function(){var t=this;n=wx.getStorageSync("itemId"),s=wx.getStorageSync("shopid"),e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:n,mode:0},success:function(e){console.log(a(e.data.Items[0]," at pages\\mercPage\\manageItem\\manageItem.vue:97")),t.setData({coll:e.data.Items[0],newTitle:e.data.Items[0].title,newPrice:e.data.Items[0].stitle,newDesc:e.data.Items[0].des,newFlav:e.data.Items[0].flavor,newKc:e.data.Items[0].kc,customKey:e.data.Items[0].customKey,newCustomKey:e.data.Items[0].customKey})}}),wx.getSystemInfo({success:function(e){i=e.windowWidth,o=e.windowHeight}}),this.setData({imght:.4*o,imgwd:i,botht:.6*o})},methods:{parseNewImg:function(){var e=this.newImgStr.split(";");console.log(a(this.newImgStr.split(";")," at pages\\mercPage\\manageItem\\manageItem.vue:129"));var t=this.coll;t.img=this.newImgStr.split(";")[0],this.setData({coll:t,newImg:e,imgPop:!1})},openImg:function(){this.setData({imgPop:!0})},cancelImg:function(){this.setData({imgPop:!1})},bindPickerChange1:function(e){console.log(a(e.detail.value," at pages\\mercPage\\manageItem\\manageItem.vue:149")),this.setData({index1:e.detail.value})},bindPickerChange2:function(e){console.log(a(e.detail.value," at pages\\mercPage\\manageItem\\manageItem.vue:155")),this.setData({index2:e.detail.value})},updateTitle:function(e){console.log(a(e.detail.value," at pages\\mercPage\\manageItem\\manageItem.vue:161")),this.setData({newTitle:e.detail.value})},updatePrice:function(e){console.log(a(e.detail.value," at pages\\mercPage\\manageItem\\manageItem.vue:167")),this.setData({newPrice:e.detail.value.substring(1,e.detail.value.length)})},updateCK:function(e){console.log(a(e.detail.value," at pages\\mercPage\\manageItem\\manageItem.vue:173")),this.setData({newCustomKey:e.detail.value})},updateDesc:function(e){console.log(a(e.detail.value," at pages\\mercPage\\manageItem\\manageItem.vue:179")),this.setData({newDesc:e.detail.value})},updateKc:function(e){console.log(a(e.detail.value," at pages\\mercPage\\manageItem\\manageItem.vue:185")),this.setData({newKc:e.detail.value})},tapCart:function(e){wx.navigateTo({url:"../pays/pay"})},updateFlav:function(e){console.log(a(e.detail.value," at pages\\mercPage\\manageItem\\manageItem.vue:196")),this.setData({newFlav:e.detail.value})},updateImg:function(e){console.log(a(e.detail.value," at pages\\mercPage\\manageItem\\manageItem.vue:202")),this.setData({newImgStr:e.detail.value})},submitNew:function(){this.setData({advic:"上传中..."});var t=this,i=this.newPrice,o=this.newTitle,c=this.newDesc,m=this.newFlav,l=this.coll.img,u=this.newCustomKey,g=parseInt(this.newKc);e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateiteminfo",method:"POST",data:{mode:1,id:n,price:i,title:o,desc:c,img:l,flav:m,kc:g,ck:u},success:function(e){console.log(a(e," at pages\\mercPage\\manageItem\\manageItem.vue:235"))},fail:function(e){console.log(a(e," at pages\\mercPage\\manageItem\\manageItem.vue:238"))}}),e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey",method:"POST",data:{dbname:"items",shopId:s},success:function(c){console.log(a(c.data.Items[0].contents," at pages\\mercPage\\manageItem\\manageItem.vue:250"));for(var m=c.data.Items[0].contents,u=0;u<m.length;u++)for(var g=0;g<m[u].length;g++)m[u][g].itemId==n&&(m[u][g].img=l,m[u][g].price=i,m[u][g].title=o,e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateiteminfo",method:"POST",data:{mode:2,id:s,coll:m},success:function(e){console.log(a(e," at pages\\mercPage\\manageItem\\manageItem.vue:270")),t.setData({advic:"上传完成"})},fail:function(e){console.log(a(e," at pages\\mercPage\\manageItem\\manageItem.vue:276"))}}))}})},setData:function(e,t){var a,n,s=this,i=[];Object.keys(e).forEach(function(t){i=t.split("."),a=e[t],n=s.$data,i.forEach(function(e,t){t+1==i.length?s.$set(n,e,a):n[e]||s.$set(n,e,{}),n=n[e]})}),t&&t()}}};t.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},"39c5":function(e,t,a){"use strict";var n=a("cf80"),s=a.n(n);s.a},5402:function(e,t,a){"use strict";a.r(t);var n=a("2309"),s=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=s.a},9121:function(e,t,a){"use strict";(function(e){a("81c2"),a("921b");n(a("66fd"));var t=n(a("d95d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"9a61":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s})},cf80:function(e,t,a){},d95d:function(e,t,a){"use strict";a.r(t);var n=a("9a61"),s=a("5402");for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);a("39c5");var o=a("2877"),c=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports}},[["9121","common/runtime","common/vendor"]]]);
});
require('pages/mercPage/manageItem/manageItem.js');
__wxRoute = 'pages/mercPage/addItem/addItem';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mercPage/addItem/addItem.js';

define('pages/mercPage/addItem/addItem.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mercPage/addItem/addItem"],{"7d7f":function(e,t,a){"use strict";a.r(t);var s=a("deb8"),n=a("ddc8");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("b394");var d=a("2877"),o=Object(d["a"])(n["default"],s["a"],s["b"],!1,null,null,null);t["default"]=o.exports},a70e:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{result1:"返回结果:",cpb1:!0,cpb2:!0,newStoreId:"",kc:0,shopId:"",catagory:"",indexImg2:"",des:"",sizeList:"",price:"",itemName:"",brand:"",result2:""}},components:{},props:{},onLoad:function(){var t=wx.getStorageSync("shopid");this.setData({shopId:t}),console.log(e(t," at pages\\mercPage\\addItem\\addItem.vue:54"))},onPullDownRefresh:function(){wx.stopPullDownRefresh()},methods:{bindkc:function(e){this.setData({kc:e.detail.value})},bindShopId:function(e){this.setData({shopId:e.detail.value})},bindcata2:function(e){this.setData({catagory:e.detail.value})},bindimg2:function(e){this.setData({indexImg2:e.detail.value})},binddes:function(e){this.setData({des:e.detail.value})},bindsize:function(e){var t=e.detail.value,a=t.split(",");if(0==a[a.length-1].length)a.pop();this.setData({sizeList:a})},bindprice:function(e){this.setData({price:e.detail.value})},binditemName:function(e){this.setData({itemName:e.detail.value})},bindbrand:function(e){this.setData({brand:e.detail.value})},tapSubmig2:function(t){var s=this,n=parseInt(s.kc),i=0;a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemcounts",method:"POST",data:{},success:function(t){i=t.data.Items[0].value,a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adddata",method:"POST",data:{dbname:"itemInfo",dataSe:{array1:s.sizeList,array2:[1,2,3,4,5,6,7,8,9],des:s.des,flavor:"辣!",img:s.indexImg2,index1:0,index2:0,itemId:i,stitle:s.price,title:s.itemName,kc:n,customKey:"口味"}},success:function(t){console.log(e(t.result._id," at pages\\mercPage\\addItem\\addItem.vue:145")),s.setData({newStoreId:t.result._id,cpb2:!1,cpb1:!0}),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:1,target:"shops",iddd:s.shopId},success:function(t){console.log(e(t.data.Items[0].catagory," at pages\\mercPage\\addItem\\addItem.vue:161"));for(var n=t.data.Items[0].catagory,d=0,o=0;o<n.length;o++)if(0==n[o].localeCompare(s.catagory)){d=o;break}a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore",method:"POST",data:{mode:2,shopId:s.shopId},success:function(t){console.log(e("current item list"," at pages\\mercPage\\addItem\\addItem.vue:182")),console.log(e(t.data.Items[0].contents," at pages\\mercPage\\addItem\\addItem.vue:183"));var n=t.data.Items[0].contents,o={brand:s.brand,img:s.indexImg2,itemId:i,price:s.price,title:s.itemName};n[d].push(o),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore",method:"POST",data:{mode:1,newCont:n},success:function(e){a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore",method:"POST",data:{mode:3},success:function(e){a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore",method:"POST",data:{mode:4,shopId:s.shopId},success:function(e){s.setData({result2:"返回结果: 添加成功"}),wx.navigateTo({url:"../manageStore/manageStore"})}})}})}})}})},fail:function(e){s.setData({result1:"返回结果: 店家不存在"})}})}})}})},setData:function(e,t){var a,s,n=this,i=[];Object.keys(e).forEach(function(t){i=t.split("."),a=e[t],s=n.$data,i.forEach(function(e,t){t+1==i.length?n.$set(s,e,a):s[e]||n.$set(s,e,{}),s=s[e]})}),t&&t()}}};t.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},b394:function(e,t,a){"use strict";var s=a("e1db"),n=a.n(s);n.a},d20a:function(e,t,a){"use strict";(function(e){a("81c2"),a("921b");s(a("66fd"));var t=s(a("7d7f"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},ddc8:function(e,t,a){"use strict";a.r(t);var s=a("a70e"),n=a.n(s);for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);t["default"]=n.a},deb8:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n})},e1db:function(e,t,a){}},[["d20a","common/runtime","common/vendor"]]]);
});
require('pages/mercPage/addItem/addItem.js');
__wxRoute = 'pages/mercPage/manageStore/manageStore';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mercPage/manageStore/manageStore.js';

define('pages/mercPage/manageStore/manageStore.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mercPage/manageStore/manageStore"],{"2fc9":function(e,t,a){"use strict";(function(e){a("81c2"),a("921b");o(a("66fd"));var t=o(a("39e3"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"39e3":function(e,t,a){"use strict";a.r(t);var o=a("f549"),n=a("439d");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("8977");var r=a("2877"),c=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},"439d":function(e,t,a){"use strict";a.r(t);var o=a("a2c1"),n=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);t["default"]=n.a},8977:function(e,t,a){"use strict";var o=a("c723"),n=a.n(o);n.a},a2c1:function(e,t,a){"use strict";(function(e,a){var o;function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,r=0,c=0,u=!1,i=(o={data:function(){return{currentTab:0,user_openId:"AAA",shopid:"",imgPop:!1,newImgStr:"",newAds:"",loopimgs1:"",loopadsHT:"",loopadsWD:"",scrollHeight:"",initCardPos:"",cardHeight:"",goods:"",cata:""}},components:{},props:{},onReady:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onLoad:function(){s=wx.getStorageSync("shopid"),console.log(e(s," at pages\\mercPage\\manageStore\\manageStore.vue:111")),this.setData({shopid:s}),wx.getSystemInfo({success:function(e){r=e.windowWidth,c=e.windowHeight}}),this.setData({loopadsHT:.3*c,loopadsWD:r,scrollHeight:.64*c,initCardPos:.36*c,cardHeight:.64*c*.6});var t=this;a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey",method:"POST",data:{dbname:"StoreAds",shopId:s},success:function(e){t.setData({loopimgs1:e.result.data[0].contents})}}),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey",method:"POST",data:{dbname:"items",shopId:s},success:function(e){t.setData({goods:e.result.data[0].contents})}}),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:1,target:"shops",iddd:s},success:function(a){wx.stopPullDownRefresh(),console.log(e(a.data.Items[0].catagory," at pages\\mercPage\\manageStore\\manageStore.vue:167")),t.setData({cata:a.data.Items[0].catagory})},fail:function(t){console.log(e(t," at pages\\mercPage\\manageStore\\manageStore.vue:173"))}})}},n(o,"onPullDownRefresh",function(){this.onLoad(),console.log(e("call pulldown"," at pages\\mercPage\\manageStore\\manageStore.vue:179"))}),n(o,"methods",{updateImg:function(t){console.log(e(t.detail.value," at pages\\mercPage\\manageStore\\manageStore.vue:183")),this.setData({newImgStr:t.detail.value})},updateAds:function(t){console.log(e(t.detail.value," at pages\\mercPage\\manageStore\\manageStore.vue:189")),this.setData({newAds:t.detail.value})},parseNewImg:function(){var t=this.newImgStr,o=this.newAds,n=this,r=s;console.log(e(r," at pages\\mercPage\\manageStore\\manageStore.vue:199"));var c=[{des:o,img:t}];console.log(e(c," at pages\\mercPage\\manageStore\\manageStore.vue:204")),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postpost",method:"POST",data:{mode:3,sId:r,contents:c},success:function(t){console.log(e(t," at pages\\mercPage\\manageStore\\manageStore.vue:214")),n.setData({loopimgs1:c,imgPop:!1})},fail:function(e){n.setData({imgPop:!1})}})},cancelImg:function(){this.setData({imgPop:!1})},openAds:function(){this.setData({imgPop:!0})},clickTab:function(t){var a=this;if(this.currentTab===t.target.dataset.current)return!1;a.setData({currentTab:t.target.dataset.current}),console.log(e(this.currentTab," at pages\\mercPage\\manageStore\\manageStore.vue:248"))},stopTouchMove:function(){return!1},clickItem:function(t){console.log(e(t.currentTarget.dataset.itemid," at pages\\mercPage\\manageStore\\manageStore.vue:254")),wx.setStorageSync("itemId",t.currentTarget.dataset.itemid),wx.setStorageSync("shopid",s),wx.navigateTo({url:"../manageItem/manageItem"})},toAddPage:function(){wx.setStorageSync("shopid",this.shopid),wx.navigateTo({url:"../addItem/addItem"})},deletItem:function(t){if(!u){u=!0;var o=this;console.log(e(t.currentTarget.dataset.itemid," at pages\\mercPage\\manageStore\\manageStore.vue:272"));var n=t.currentTarget.dataset.itemid.itemId,s=t.currentTarget.dataset.index1,r=t.currentTarget.dataset.index2,c=this.goods;c[s].splice(r,1);a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postpost",method:"POST",data:{mode:1,sid:o.sid,contents:c},success:function(t){console.log(e(t," at pages\\mercPage\\manageStore\\manageStore.vue:288"))},fail:function(t){console.log(e(t," at pages\\mercPage\\manageStore\\manageStore.vue:291")),u=!1}}),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postpost",method:"POST",data:{mode:2,itemId:n},success:function(t){console.log(e(t," at pages\\mercPage\\manageStore\\manageStore.vue:304")),o.setData({goods:c}),u=!1},fail:function(t){console.log(e(t," at pages\\mercPage\\manageStore\\manageStore.vue:311")),u=!1}}),console.log(e(this.goods," at pages\\mercPage\\manageStore\\manageStore.vue:315"))}},setData:function(e,t){var a,o,n=this,s=[];Object.keys(e).forEach(function(t){s=t.split("."),a=e[t],o=n.$data,s.forEach(function(e,t){t+1==s.length?n.$set(o,e,a):o[e]||n.$set(o,e,{}),o=o[e]})}),t&&t()}}),o);t.default=i}).call(this,a("0de9")["default"],a("6e42")["default"])},c723:function(e,t,a){},f549:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})}},[["2fc9","common/runtime","common/vendor"]]]);
});
require('pages/mercPage/manageStore/manageStore.js');
__wxRoute = 'pages/Pintuan/Pintuan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Pintuan/Pintuan.js';

define('pages/Pintuan/Pintuan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Pintuan/Pintuan"],{"00c2":function(t,e,a){},"0bf4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{flag:!0}},components:{},props:{title_val:{type:String,default:"标题"},content_val:{type:String,default:"内容"},btn_no_val:{type:String,default:"取消"},btn_ok_val:{type:String,default:"确定"}},options:{multipleSlots:!0},methods:{hidePopup:function(){this.setData({flag:!this.flag})},showPopup:function(){this.setData({flag:!this.flag})},_error:function(){this.$emit("error")},_success:function(){this.$emit("success")},setData:function(t,e){var a,n,s=this,o=[];Object.keys(t).forEach(function(e){o=e.split("."),a=t[e],n=s.$data,o.forEach(function(t,e){e+1==o.length?s.$set(n,t,a):n[t]||s.$set(n,t,{}),n=n[t]})}),e&&e()}}};e.default=n},"16d7":function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");n(a("66fd"));var e=n(a("94f5"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"1d11":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"34d0":function(t,e,a){"use strict";a.r(e);var n=a("0bf4"),s=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},"94f5":function(t,e,a){"use strict";a.r(e);var n=a("1d11"),s=a("f2ac");for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);a("e854");var u=a("2877"),i=Object(u["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"9f55":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},b2b4:function(t,e,a){},b2c8:function(t,e,a){"use strict";var n=a("00c2"),s=a.n(n);s.a},e854:function(t,e,a){"use strict";var n=a("b2b4"),s=a.n(n);s.a},f2ac:function(t,e,a){"use strict";a.r(e);var n=a("fb5f"),s=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},fa3e:function(t,e,a){"use strict";a.r(e);var n=a("9f55"),s=a("34d0");for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);a("b2c8");var u=a("2877"),i=Object(u["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},fb5f:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o(a("fa3e"));function o(t){return t&&t.__esModule?t:{default:t}}var u,i=0,c=0,r=new Date(1999,11,11,11,11,11),l=r.getTime(),d=new Date(2019,8,8,11,11,11),p=d.getTime(),f={data:function(){return{currentTab:0,user_openId:"AAA",tuanCurrent:0,tuanTarget:700,ratio:0,showTime:"",loopadsHT:"",loopadsWD:"",scrollHeight:"",initCardPos:"",cardHeight:"",loopimgs1:"",goods:"",cata:""}},components:{popup:s.default},props:{},onReady:function(){this.popup=this.selectComponent("#popup")},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onLoad:function(){var e=this;r=new Date,l=r.getTime();var a=setInterval(function(){l+=1e3;var n=p-l;n<=0&&(n=0,e.setData({showTime:{day:0,hour:0,minute:0,second:0}})),console.log(t(n," at pages\\Pintuan\\Pintuan.vue:130")),e.setData({showTime:{day:parseInt(n/864e5),hour:parseInt(n%864e5/36e5),minute:parseInt(n%36e5/6e4),second:parseInt(n%6e4/1e3)}}),n<=0&&clearInterval(a)},1e3);u=wx.getStorageSync("shopid"),console.log(t(u," at pages\\Pintuan\\Pintuan.vue:145")),wx.getSystemInfo({success:function(t){i=t.windowWidth,c=t.windowHeight}}),this.setData({loopadsHT:.3*c,loopadsWD:i,scrollHeight:.64*c,initCardPos:.36*c,cardHeight:.64*c*.6}),n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey",method:"POST",data:{dbname:"StoreAds",shopId:u},success:function(t){e.setData({loopimgs1:t.data.Items[0].contents})}}),n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey",method:"POST",data:{dbname:"items",shopId:u},success:function(t){e.setData({goods:t.data.Items[0].contents})}}),n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:1,target:"shops",iddd:u},success:function(a){console.log(t(a.result[0]," at pages\\Pintuan\\Pintuan.vue:196")),d=new Date(a.result[0].tuanEnd),p=a.result[0].tuanEnd,e.setData({cata:a.result[0].catagory,tuanTarget:a.result[0].tuanTarget,tuanCurrent:a.result[0].tuanCurrent,ratio:60*a.result[0].tuanCurrent/a.result[0].tuanTarget}),console.log(t("ratio is: "+e.ratio," at pages\\Pintuan\\Pintuan.vue:205"))},fail:function(e){console.log(t(e," at pages\\Pintuan\\Pintuan.vue:208"))}})},methods:{showPopup:function(){this.popup.showPopup()},_error:function(){console.log(t("你点击了取消"," at pages\\Pintuan\\Pintuan.vue:219")),this.popup.hidePopup()},_success:function(){console.log(t("你点击了确定"," at pages\\Pintuan\\Pintuan.vue:225")),this.popup.hidePopup()},tapCart:function(t){wx.navigateTo({url:"../pays/pay"})},clickTab:function(e){var a=this;if(this.currentTab===e.target.dataset.current)return!1;a.setData({currentTab:e.target.dataset.current}),console.log(t(this.currentTab," at pages\\Pintuan\\Pintuan.vue:245"))},stopTouchMove:function(){return!1},clickItem:function(e){console.log(t(e.currentTarget.dataset.itemid," at pages\\Pintuan\\Pintuan.vue:251")),wx.setStorageSync("itemId",e.currentTarget.dataset.itemid),wx.setStorageSync("shopid",u),wx.navigateTo({url:"../item/item"})},addtoCart:function(e){this.showPopup();var a=this;n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts",method:"POST",data:{dbname:"carts",openId:getApp().globalData.openId},success:function(s){if(console.log(t(s," at pages\\Pintuan\\Pintuan.vue:271")),0==s.data.Items.length)n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/initcart",method:"POST",data:{shop_Id:u,openId:getApp().globalData.openId},success:function(s){var o=[];n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:e.target.dataset.itemid,mode:0},success:function(e){console.log(t("as1"," at pages\\Pintuan\\Pintuan.vue:293"));var s=0,i=1,c=0;for(s=0;s<o.length;s++)e.data.Items[0]._id==o[s].Item_Id&&(i=o[s].count+1,c=s);1==i?o.push({Item_Id:e.data.Items[0]._id,size:"Large",count:1}):o[c].count=i,n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:o,sid:u},success:function(e){console.log(t("succ"," at pages\\Pintuan\\Pintuan.vue:325")),a._success()},fail:console.error})}})}});else{var o=s.data.Items[0].items;console.log(t(o," at pages\\Pintuan\\Pintuan.vue:337")),u==s.data.Items[0].shop_Id?n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:e.target.dataset.itemid,mode:0},success:function(e){console.log(t("as1"," at pages\\Pintuan\\Pintuan.vue:349"));var s=0,i=1,c=0;for(s=0;s<o.length;s++)e.data.Items[0]._id==o[s].Item_Id&&(i=o[s].count+1,c=s);1==i?o.push({Item_Id:e.data.Items[0]._id,size:"Large",count:1}):o[c].count=i,n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:o,sid:u},success:function(e){console.log(t("succ"," at pages\\Pintuan\\Pintuan.vue:381")),a._success()},fail:console.error})}}):n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:e.target.dataset.itemid,mode:0},success:function(e){console.log(t(e.result," at pages\\Pintuan\\Pintuan.vue:400")),n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:[{Item_Id:e.data.Items[0]._id,size:"Large",count:1}],sid:u},success:function(e){console.log(t("succ"," at pages\\Pintuan\\Pintuan.vue:415")),a._success()},fail:console.error})}})}},fail:console.error})},setData:function(t,e){var a,n,s=this,o=[];Object.keys(t).forEach(function(e){o=e.split("."),a=t[e],n=s.$data,o.forEach(function(t,e){e+1==o.length?s.$set(n,t,a):n[t]||s.$set(n,t,{}),n=n[t]})}),e&&e()}}};e.default=f}).call(this,a("0de9")["default"],a("6e42")["default"])}},[["16d7","common/runtime","common/vendor"]]]);
});
require('pages/Pintuan/Pintuan.js');
__wxRoute = 'pages/pubReq/pubReq';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pubReq/pubReq.js';

define('pages/pubReq/pubReq.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pubReq/pubReq"],{1254:function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=!0,s=["日常用品","二手汽车","家具生活","其他"],i=a("d445"),u={data:function(){return{pickerColor:"#b3b3b3",buttonStatus:!1,startWord:"Catagory",cata:"撒旦发生",catal:s[3],price:0,oriPrice:0,index:0,array1:["top","jg","mid","bot","sup"],division:"",tag:[],pos:"",currentTab1:3,isRequest:!1,titleCount:0,contentCount:0,title:"",content:"",images:[]}},components:{},props:{},onLoad:function(){var t="";t=wx.getStorageSync("postR"),0!=t.localeCompare("出二手")&&0!=t.localeCompare("技能提供")||this.setData({isRequest:!0}),this.setData({cata:t})},methods:{clickTab1:function(e){var a=this;a.setData({currentTab1:e.target.dataset.current1,catal:s[e.target.dataset.current1]}),console.log(t(this.catal," at pages\\pubReq\\pubReq.vue:130"))},submit:function(e){var a=e.detail.userInfo.nickName,s=e.detail.userInfo.avatarUrl,u=this;if(this.setData({buttonStatus:!0}),n){var r=new Date;console.log(t(r.getHours().toString()+":"+r.getMinutes()," at pages\\pubReq\\pubReq.vue:142")),console.log(t(r.getMonth()+1+"/"+r.getDate().toString()+"/"+r.getFullYear().toString()," at pages\\pubReq\\pubReq.vue:143"));var c=(r.getMonth()+1).toString()+"/"+r.getDate().toString()+"/"+r.getFullYear().toString(),l=r.getHours().toString()+":"+r.getMinutes(),p=c+" "+l;this.clickable=!1,wx.setStorage({key:"newPost",data:this});var g=this.images,d=[],h=this.catal,f=this.title,b=this.content,m=this.price,v=this.oriprice,q=this.tag,R=this.pos,D=g.length,w=0;0!=g.length?g.forEach(function(e){var n="";console.log(t("尝试插入cloudpath："+e," at pages\\pubReq\\pubReq.vue:168")),0==e.substring(0,6).localeCompare("wxfile")?(n="ershouimg/"+e.substring(9),console.log(t("尝试插入cloudpath with wxfile："+n," at pages\\pubReq\\pubReq.vue:172"))):(n="ershouimg/"+e.substring(11),console.log(t("尝试插入cloudpath with http："+n," at pages\\pubReq\\pubReq.vue:175"))),wx.cloud.uploadFile({cloudPath:n,filePath:e}).then(function(e){w++,d.push("cloud://tempsqu-ennf2.7465-tempsqu-ennf2/"+n),w==D&&o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateershoudata",method:"POST",data:{openId:getApp().globalData.openId,cat:h,name:f,description:b,price:m,oriprice:v,tags:q,position:R,img:d,authorName:a,authorAva:s,timeStamp:p},success:function(t){u.setData({buttonStatus:!1}),i.updateUserDateRecord(1),wx.switchTab({url:"../commu/commu"})},fail:function(e){console.log(t(e," at pages\\pubReq\\pubReq.vue:215"))}}),console.log(t(n," at pages\\pubReq\\pubReq.vue:220")),console.log(t("uploaded"," at pages\\pubReq\\pubReq.vue:221"))})}):o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateershoudata",method:"POST",data:{openId:getApp().globalData.openId,cat:h,name:f,description:b,price:m,oriprice:v,tags:q,position:R,img:[],authorName:a,authorAva:s,timeStamp:p},success:function(t){u.setData({buttonStatus:!1}),i.updateUserDateRecord(1),wx.switchTab({url:"../commu/commu"})},fail:function(e){console.log(t(e," at pages\\pubReq\\pubReq.vue:253"))}})}},setTitle:function(t){this.setData({title:t.detail.value})},settags:function(t){var e=t.detail.value,a=[];a=e.split(";"),0==a[a.length-1].localeCompare("")&&a.pop(),this.setData({tag:a})},setDes:function(t){this.setData({content:t.detail.value})},setprice:function(t){this.setData({price:t.detail.value})},setpos:function(t){this.setData({pos:t.detail.value})},setoriPrice:function(t){this.setData({oriPrice:t.detail.value})},bindPickerChange:function(e){console.log(t(e.detail.value," at pages\\pubReq\\pubReq.vue:298")),this.setData({startWord:this.array1[e.detail.value]}),"Catagory"!=this.startWord&&this.setData({pickerColor:"black"})},handleTitleInput:function(t){var e=t.detail.value;-1!=e.lastIndexOf(" ")&&(e=e.substring(0,e.lastIndexOf(" ")));var a=e.length;a<=25&&this.setData({titleCount:a,title:e})},handleContentInput:function(t){var e=t.detail.value,a=e.length;a<=400&&this.setData({contentCount:a,content:e})},ImageOperator:function(){var e=this;wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var o=a.tempFilePaths,n=e.images,s=n.length,i=o.length;if(console.log(t(s," at pages\\pubReq\\pubReq.vue:355")),9==s&&console.log(t("数量已经有9张，请删除在添加..."," at pages\\pubReq\\pubReq.vue:358")),s<9){var u=[],r=9-s;u=r>=i?n.concat(o):n.concat(o.slice(0,r)),e.setData({images:u})}}})},chooseImage:function(){var t=this;0==this.images.length?wx.showToast({title:"请选择要上传的图片",icon:"none",duration:2e3,success:function(e){t.ImageOperator()}}):this.ImageOperator()},deleteImage:function(t){var e=t.currentTarget.dataset.id,a=this.images;a.splice(e,1),this.setData({images:a})},previewIamge:function(t){var e=t.currentTarget.dataset.id,a=this.images;wx.previewImage({current:a[e],urls:a})},setData:function(t,e){var a,o,n=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),a=t[e],o=n.$data,s.forEach(function(t,e){e+1==s.length?n.$set(o,t,a):o[t]||n.$set(o,t,{}),o=o[t]})}),e&&e()}}};e.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},"19a5":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},"5dda":function(t,e,a){"use strict";a.r(e);var o=a("1254"),n=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e["default"]=n.a},b776:function(t,e,a){"use strict";var o=a("f9e8"),n=a.n(o);n.a},b894:function(t,e,a){"use strict";a.r(e);var o=a("19a5"),n=a("5dda");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("b776");var i=a("2877"),u=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},dba9:function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");o(a("66fd"));var e=o(a("b894"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},f9e8:function(t,e,a){}},[["dba9","common/runtime","common/vendor"]]]);
});
require('pages/pubReq/pubReq.js');
__wxRoute = 'pages/newAt/newAt';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/newAt/newAt.js';

define('pages/newAt/newAt.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/newAt/newAt"],{5131:function(t,e,a){},"68d6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"6a92":function(t,e,a){"use strict";a.r(e);var n=a("68d6"),o=a("93ea");for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);a("74a6");var u=a("2877"),c=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"74a6":function(t,e,a){"use strict";var n=a("5131"),o=a.n(n);o.a},"93ea":function(t,e,a){"use strict";a.r(e);var n=a("cc97"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},cc97:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{lists:[]}},components:{},props:{},onLoad:function(e){var n=this;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:4,target:"ats"},success:function(t){console.log(a(t.result.data," at pages\\newAt\\newAt.vue:39")),"undefined"==typeof t.result.data||n.setData({lists:t.result.data})}})},onReady:function(){},onShow:function(){var e=this;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:4,target:"ats"},success:function(t){console.log(a(t.result.data," at pages\\newAt\\newAt.vue:68")),"undefined"==typeof t.result.data||e.setData({lists:t.result.data})}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{clickAt:function(e){var n=this;console.log(a(this.lists[e.currentTarget.dataset.ind]._id," at pages\\newAt\\newAt.vue:106")),t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:5,target:"ats",doc1:n.lists[e.currentTarget.dataset.ind]._id},success:function(t){console.log(a(n.lists[e.currentTarget.dataset.ind].commuid," at pages\\newAt\\newAt.vue:116")),getApp().globalData.var1=n.lists[e.currentTarget.dataset.ind].comuId,wx.navigateTo({url:"../xiaonei/xiaonei"})}})},setData:function(t,e){var a,n,o=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),a=t[e],n=o.$data,s.forEach(function(t,e){e+1==s.length?o.$set(n,t,a):n[t]||o.$set(n,t,{}),n=n[t]})}),e&&e()}}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},f411:function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");n(a("66fd"));var e=n(a("6a92"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["f411","common/runtime","common/vendor"]]]);
});
require('pages/newAt/newAt.js');
__wxRoute = 'pages/pays/htvarify';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pays/htvarify.js';

define('pages/pays/htvarify.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pays/htvarify"],{7821:function(t,e,a){"use strict";var n=a("a44c"),o=a.n(n);o.a},"7a5b":function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");n(a("66fd"));var e=n(a("b095"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"7d76":function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{invoice:""}},components:{},props:{},onLoad:function(e){console.log(t(getApp().globalData.invoice," at pages\\pays\\htvarify.vue:22"));var n=getApp().globalData.orderItems,o=getApp().globalData.shop_id;this.setData({invoice:getApp().globalData.invoice});var i=this,s="Bearer 05bcd02d83986b631ff81134e2bd85fe2934232329b5fa6a4d2fb3309d8e6800";console.log(t(i.invoice," at pages\\pays\\htvarify.vue:30")),wx.request({url:"https://api.hantepay.com/v1.3/transactions/merchant/"+i.invoice,header:{"Content-Type":"application/json",Authorization:s},method:"GET",success:function(e){console.log(t(e," at pages\\pays\\htvarify.vue:40"));var i=e.data;a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/ordermanager",method:"POST",data:{mode:0,time:i.time,status:i.status,ref:i.reference,itemList:n,shop_id:o,openId:getApp().globalData.openId},success:function(e){console.log(t(e," at pages\\pays\\htvarify.vue:55")),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/initcart",method:"POST",data:{shop_Id:"ssid"}})},fail:function(e){console.log(t(e," at pages\\pays\\htvarify.vue:65"))}})},fail:function(e){console.log(t(e," at pages\\pays\\htvarify.vue:70"))}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{setData:function(t,e){var a,n,o=this,i=[];Object.keys(t).forEach(function(e){i=e.split("."),a=t[e],n=o.$data,i.forEach(function(t,e){e+1==i.length?o.$set(n,t,a):n[t]||o.$set(n,t,{}),n=n[t]})}),e&&e()}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},a44c:function(t,e,a){},b095:function(t,e,a){"use strict";a.r(e);var n=a("be8b"),o=a("e10d");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("7821");var s=a("2877"),u=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},be8b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},e10d:function(t,e,a){"use strict";a.r(e);var n=a("7d76"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a}},[["7a5b","common/runtime","common/vendor"]]]);
});
require('pages/pays/htvarify.js');
__wxRoute = 'pages/commu/commu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/commu/commu.js';

define('pages/commu/commu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commu/commu"],{"0671":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},"13dd":function(t,e,a){},"3b49":function(t,e,a){"use strict";a.r(e);var o=a("c55e"),n=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e["default"]=n.a},5352:function(t,e,a){"use strict";a.r(e);var o=a("0671"),n=a("3b49");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("57ab");var c=a("2877"),u=Object(c["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"57ab":function(t,e,a){"use strict";var o=a("13dd"),n=a.n(o);n.a},c200:function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");o(a("66fd"));var e=o(a("5352"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},c55e:function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("d445"),s=getApp().globalData,c=0,u=0,i=0,r={data:function(){return{voted:!1,showtab:0,tabnav:{tabnum:5,tabitem:[{id:0,text:"全部"},{id:1,text:"社团活动"},{id:2,text:"美食"},{id:3,text:"电竞开黑"},{id:4,text:"二刺螈"},{id:5,text:"摄影"},{id:6,text:"兴趣"},{id:7,text:"汽车"},{id:8,text:"其他"}]},index1:0,avlLocations:["Columbus","D.C."],signed:!1,opaci:0,comMenu:!1,anncmt:"广告位，招租",midPos:0,community:0,naviParam:0,ratio:0,secondHandCarInfo:[],secondHandDailyInfo:[],secondHandFurnInfo:[],secondHandOthInfo:[],secondHandCarInfood:[],secondHandDailyInfood:[],secondHandFurnInfood:[],secondHandOthInfood:[],currentTab:0,currentTab1:0,upperTh:0,filterStyle:"",scrollheight:0,redirectorSize:0,loopimgs1:[],redSpace:0,loopadsHT:0,btnLineW:0,winWidth:0,winheight:0,textboxWD:0,textboxHT:0,searchbtnWD:0,searchbtnHT:0,searchAreaWD:0,searchAreaHT:0,motto:"Hello World",userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),upAvi:!0,avtUrl:"",author:"",communityod:"",locationIconSize:"",locationIconSpace:"",locationTextLeft:"",searchbarLength:"",searchIconSpace:"",searchBarLength:""}},components:{},props:{},onLoad:function(){getApp().globalData.var1,wx.getSystemInfo({success:function(e){c=e.windowWidth,u=e.windowHeight,console.log(t(c," at pages\\commu\\commu.vue:251"))}}),this.initialize();wx.getSystemInfoSync()},onShow:function(){i>=2&&(this.initialize(),console.log(t("call onshow"," at pages\\commu\\commu.vue:262")))},onPullDownRefresh:function(){this.initialize(),console.log(t("call pulldown"," at pages\\commu\\commu.vue:267"))},methods:{bindViewTap:function(){wx.navigateTo({url:"../logs/logs"})},comMenuRedirect:function(e){console.log(t(e.currentTarget.dataset," at pages\\commu\\commu.vue:277")),wx.setStorageSync("postR",e.currentTarget.dataset.postr),wx.navigateTo({url:"../pubReq/pubReq"})},comMenuRedirectPost:function(e){console.log(t(e.currentTarget.dataset," at pages\\commu\\commu.vue:284")),wx.setStorageSync("postR",e.currentTarget.dataset.postr),wx.navigateTo({url:"../pubPost/pubPost"})},tapComu:function(e){var a=this,n=e.currentTarget.dataset.ind;getApp().globalData.var1=e.currentTarget.dataset.commuid;var c=e.currentTarget.dataset.commulistid;console.log(t(e.currentTarget.dataset.commulistid," at pages\\commu\\commu.vue:297")),getApp().globalData.cmulid=e.currentTarget.dataset.commuid,o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter",method:"POST",data:{postId:c,mode:2,openId:s.openId},success:function(t){var e=a.community;e[n].vc++,a.setData({community:e})}}),wx.navigateTo({url:"../xiaonei/xiaonei"})},showMenu:function(){this.setData({comMenu:!this.comMenu})},tapErshou:function(e){wx.setStorage({key:"itemInfo",data:e.currentTarget.dataset.naviparam}),console.log(t(e.currentTarget.dataset.naviparam._id," at pages\\commu\\commu.vue:330")),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter",method:"POST",data:{postId:e.currentTarget.dataset.naviparam._id,mode:3,openId:s.openId},success:function(t){}}),wx.navigateTo({url:"../tuan/tuan"})},upVoteComment:function(e){if(this.upAvi){console.log(t(this.upAvi," at pages\\commu\\commu.vue:348")),this.setData({voted:!0,upAvi:!1});var a=this,n=e.currentTarget.dataset.commulist,c=e.currentTarget.dataset.ind;console.log(t(e.currentTarget.dataset.commulist," at pages\\commu\\commu.vue:356")),wx.cloud.callFunction({name:"login",success:function(e){console.log(t(n.upvoter," at pages\\commu\\commu.vue:360"));var u=e.result.openid;n.upvoter.includes(e.result.openid)?(console.log(t("already upvoted"," at pages\\commu\\commu.vue:387")),a.setData({upAvi:!0})):o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter",method:"POST",data:{postId:n._id,mode:1,openId:s.openId},success:function(t){var e=a.community;e[c].upC++,e[c].upvoter.push(u),a.setData({community:e,communityod:e}),a.setData({upAvi:!0})}})}})}},updateAnn:function(){},bindPickerChange1:function(e){console.log(t(e.detail.value," at pages\\commu\\commu.vue:405")),this.setData({index1:e.detail.value})},handleSearchInput:function(e){var a=e.detail.value,o=n.searchByTagsCom(this.communityod,a);console.log(t(o," at pages\\commu\\commu.vue:413")),this.setData({community:o}),o=n.searchByTagsSH(this.secondHandCarInfood,a),console.log(t(o," at pages\\commu\\commu.vue:418")),this.setData({secondHandCarInfo:o}),o=n.searchByTagsSH(this.secondHandDailyInfood,a),console.log(t(o," at pages\\commu\\commu.vue:423")),this.setData({secondHandDailyInfo:o}),o=n.searchByTagsSH(this.secondHandFurnInfood,a),console.log(t(o," at pages\\commu\\commu.vue:428")),this.setData({secondHandFurnInfo:o}),o=n.searchByTagsSH(this.secondHandOthInfood,a),console.log(t(o," at pages\\commu\\commu.vue:433")),this.setData({secondHandOthInfo:o})},handleTagSearch:function(e){var a=[];a=e.split(";"),a[a.length-1].localeCompare(""),console.log(t(a," at pages\\commu\\commu.vue:446"));var o=n.searchByTags(this.communityod,a);console.log(t(o," at pages\\commu\\commu.vue:448")),this.setData({community:o})},initialize:function(){this.updateAnn();var e=[],a=c/750;a*=138;var s=this;o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{target:"commuList",iddd:"",mode:3},success:function(e){console.log(t("commuLoaded"," at pages\\commu\\commu.vue:471")),wx.stopPullDownRefresh(),i++,console.log(t(e.data.Items[0]," at pages\\commu\\commu.vue:475"));for(var a=0;a<e.data.Items.length;a++)e.data.Items[a].lvl=1;s.setData({community:e.data.Items,communityod:e.data.Items});for(var c=e.data.Items,u=0;u<s.community.length;u++)o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getgroupuser",method:"POST",data:{openId:s.community[u].oid},success:function(e){for(var a=0;a<c.length;a++)if(c[a].oid==e.data.Items[0].open_Id){c[a].lvl=n.lvlFromExp(e.data.Items[0].exp).resLvl;var o=c[a].lvl;c[a].color=o<=2?"#cfcfcf":o<=4?"#67bf75":o<=6?"#7dc0ff":o<=8?"#7705a1":o<=10?"#f5b433":"#ff6e6e"}s.setData({community:c,communityod:c}),console.log(t("in commu?"," at pages\\commu\\commu.vue:506")),console.log(t(s.$data.community," at pages\\commu\\commu.vue:507")),console.log(t("in commu?"," at pages\\commu\\commu.vue:508"))}})}}),this.setData({midPos:325-(c-30)/6+50,btnLineW:u/667*60+10,winWidth:c,winheight:u,loopadsHT:.25*u,searchbtnHT:.07*u-10,textboxHT:.07*u-10,textboxWD:c-.07*u+10-15,searchbtnWD:.07*u-10,searchAreaWD:c,searchAreaHT:.07*u,loopimgs1:e,redirectorSize:(c-30)/3,redSpace:c/2-(c-60)/6,ratio:u-a,locationIconSize:.08*u*.8,locationIconSpace:.08*u*.1,locationTextLeft:.08*u*1.1,searchbarLength:.95*(.8*c-.08*u),searchIconSpace:.95*(.8*c-.08*u)-.08*u*.85,searchBarLength:.95*(.8*c-.08*u)-.08*u*.9}),this.setData({upperTh:this.loopadsHT+this.redirectorSize+this.loopadsHT+18,filterStyle:"width: "+this.winWidth.toString()+"px; height: "+(this.loopadsHT/2).toString()+"px;",scrollheight:this.winheight-this.searchbtnHT})},stopSwiper:function(){},clickTab:function(t){var e=this;if(this.currentTab===t.target.dataset.current)return!1;e.setData({currentTab:t.target.dataset.current})},clickTab1:function(t){var e=this;if(this.currentTab1===t.target.dataset.current1)return!1;e.setData({currentTab1:t.target.dataset.current1})},setTab:function(t){this.setData({showtab:t});var e=this.showtab;e=this.tabnav.tabitem[e].text,"全部"==e?this.handleTagSearch(""):this.handleTagSearch(e)},getUserInfo:function(e){console.log(t(e," at pages\\commu\\commu.vue:582")),getApp().globalData.userInfo=e.detail.userInfo,this.setData({userInfo:e.detail.userInfo,hasUserInfo:!0})},setData:function(t,e){var a,o,n=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),a=t[e],o=n.$data,s.forEach(function(t,e){e+1==s.length?n.$set(o,t,a):o[t]||n.$set(o,t,{}),o=o[t]})}),e&&e()}}};e.default=r}).call(this,a("0de9")["default"],a("6e42")["default"])}},[["c200","common/runtime","common/vendor"]]]);
});
require('pages/commu/commu.js');
__wxRoute = 'pages/inBox/inBox';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/inBox/inBox.js';

define('pages/inBox/inBox.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/inBox/inBox"],{"2f8d":function(t,e,a){"use strict";var n=a("91fa"),o=a.n(n);o.a},"91fa":function(t,e,a){},9774:function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");n(a("66fd"));var e=n(a("b6fd"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},b31d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},b6fd:function(t,e,a){"use strict";a.r(e);var n=a("b31d"),o=a("c254");for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);a("2f8d");var i=a("2877"),u=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},bf99:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{messages:[],input:"",indicator:"载入中......",targetOid:"",subable:!0,replyContent:""}},components:{},props:{},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onLoad:function(){this.setData({indicator:"载入中......"});var e=this;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox",method:"POST",data:{mode:2,openId:getApp().globalData.openId},success:function(n){console.log(a(n," at pages\\inBox\\inBox.vue:62")),0==n.data.Items.length?(console.log(a("user not exist, add it to db"," at pages\\inBox\\inBox.vue:65")),t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox",method:"POST",data:{mode:1,openId:getApp().globalData.openId},success:function(t){console.log(a(t," at pages\\inBox\\inBox.vue:75")),e.setData({indicator:"请选择回复信息"})}})):(console.log(a("user exist, pull it from db"," at pages\\inBox\\inBox.vue:83")),console.log(a(n.result.data[0].inbox," at pages\\inBox\\inBox.vue:84")),e.setData({messages:n.result.data[0].inbox,indicator:"请选择回复信息"}))}})},methods:{setInput:function(t){this.setData({input:t.detail.value})},replyTo:function(e){if(this.subable){this.setData({subable:!1}),this.setData({indicator:"上传回复中......"});var n=this,o=this.targetOid;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox",method:"POST",data:{mode:3,target_openId:o},success:function(s){console.log(a(s," at pages\\inBox\\inBox.vue:135"));var i=s;if(0==s.result.data.length)console.log(a("user not exist"," at pages\\inBox\\inBox.vue:140")),t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox",method:"POST",data:{mode:6,target_openId:o},success:function(o){console.log(a(o," at pages\\inBox\\inBox.vue:150"));for(var s=0,i=0;i<n.replyContent.length;i++)" "==n.replyContent.charAt(0)&&s++;var u="";for(i=0;i<s;i++)u+="&nbsp;";console.log(a(o.result._id," at pages\\inBox\\inBox.vue:167"));var r=o.result._id;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox",method:"POST",data:{mode:4,target_inBoxId:r,content:n.replyContent+"\n"+u+n.input,timeStamp:46545665,unm:e.detail.userInfo.nickName,openId:getApp().globalData.openId},success:function(t){console.log(a("成功发布"," at pages\\inBox\\inBox.vue:181")),n.setData({indicator:"成功发布回复"})}})}});else{for(var u=0,r=0;r<n.replyContent.length;r++)" "==n.replyContent.charAt(0)&&u++;var c="";for(r=0;r<u+2;r++)c+="&nbsp;";console.log(a(i.result.data[0]._id," at pages\\inBox\\inBox.vue:206"));var l=i.result.data[0]._id;t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox",method:"POST",data:{mode:4,target_inBoxId:l,content:n.replyContent+"\n"+c+n.input,timeStamp:46545665,unm:e.detail.userInfo.nickName,openId:getApp().globalData.openId},success:function(t){console.log(a("成功发布"," at pages\\inBox\\inBox.vue:220")),n.setData({indicator:"成功发布回复"})}})}}}),this.setData({subable:!0})}},makeRead:function(e){var n=this,o=this.messages,s=o[e.currentTarget.dataset.ind].oid,i=o[e.currentTarget.dataset.ind].userName,u=o[e.currentTarget.dataset.ind].content;console.log(a(e.currentTarget.dataset.ind," at pages\\inBox\\inBox.vue:240")),this.setData({indicator:"回复给 "+i,targetOid:s,replyContent:u}),"read"!=o[e.currentTarget.dataset.ind].status&&(o[e.currentTarget.dataset.ind].status="read",t.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/manageinbox",method:"POST",data:{mode:5,readBox:o,openId:getApp().globalData.openId},success:function(t){console.log(a("read"," at pages\\inBox\\inBox.vue:258")),n.setData({messages:o})}}))},refresh:function(){this.onLoad()},setData:function(t,e){var a,n,o=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),a=t[e],n=o.$data,s.forEach(function(t,e){e+1==s.length?o.$set(n,t,a):n[t]||o.$set(n,t,{}),n=n[t]})}),e&&e()}}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},c254:function(t,e,a){"use strict";a.r(e);var n=a("bf99"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=o.a}},[["9774","common/runtime","common/vendor"]]]);
});
require('pages/inBox/inBox.js');
__wxRoute = 'pages/pays/pay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pays/pay.js';

define('pages/pays/pay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pays/pay"],{"0dd5":function(t,e,a){"use strict";a.r(e);var s=a("8f2b"),n=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);e["default"]=n.a},"130b":function(t,e,a){},2797:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n})},3475:function(t,e,a){},"42be":function(t,e,a){"use strict";var s=a("130b"),n=a.n(s);n.a},"72c3":function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");s(a("66fd"));var e=s(a("fde3"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"841a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n})},"8f2b":function(t,e,a){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("fbb0"));function o(t){return t&&t.__esModule?t:{default:t}}var i=new Date,r=i.getHours(),l=i.getMinutes(),u=0,c=0,d="",p={data:function(){return{oid:"",weAv:!0,pplAv:!0,startDate:"Choose deliver time",multiArray:[["今天","明天","3-2","3-3","3-4","3-5"],[0,1,2,3,4,5,6],[0,10,20]],multiIndex:[0,0,0],orderParams:{},preparePay:!1,paying:!1,selectedAddress:"请确认已绑定地址和手机号\n载入中",orderItems:[{img:"https://media1.giphy.com/media/11FuEnXyGsXFba/source.gif",title:"载入中",size:"",sub:"",count:0,_id:""}],totalP:"$",totalRMB:"¥",orderResults:"",needRefreshOrderParams:!1,topH:"",wd:"",midH:"",exchangeRate:""}},components:{payjs:n.default},props:{},onLoad:function(e){var a=this,n=encodeURIComponent("USD"),o=encodeURIComponent("CNY"),i=n+"_"+o,r="https://free.currconv.com/api/v7/convert?q="+i+"&compact=ultra&apiKey=90f1c50a20c8d1f5168b";wx.getSystemInfo({success:function(t){u=t.windowWidth,c=t.windowHeight}}),this.setData({topH:.7*c,wd:u,midH:.15*c}),a.setData({selectedAddress:"正在获取汇率"}),wx.request({url:r,data:{},success:function(e){a.setData({exchangeRate:e.data.USD_CNY}),console.log(t(e.data.USD_CNY," at pages\\pays\\pay.vue:150")),a.setData({selectedAddress:"汇率获取成功"}),s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts",method:"POST",data:{dbname:"carts",openId:getApp().globalData.openId},success:function(e){a.setData({selectedAddress:"购物车加载成功"});var n=e.data.Items[0].shop_Id;d=n,s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getUser",method:"POST",data:{openId:getApp().globalData.openId},success:function(e){var o=e.data.Items[0].address;a.setData({selectedAddress:e.data.Items[0].address,oid:e.data.Items[0].open_Id}),s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:1,iddd:n,target:"shops"},success:function(e){var s=e.result[0].address;"undefined"!==typeof o&&o.length>0?wx.request({url:"https://maps.googleapis.com/maps/api/directions/json?origin="+e.result[0].address+"&destination="+o+"&key=AIzaSyBN4EcKh9xONylRy2pWlCRhtW4LBK5Voh0",success:function(e){console.log(t(e.data.routes[0].legs[0]," at pages\\pays\\pay.vue:197")),a.setData({selectedAddress:"From: "+s+"\nTo: "+a.selectedAddress+"\n Estimated Time: "+e.data.routes[0].legs[0].duration.text})}}):a.setData({selectedAddress:"请先设置送货地址\n Please set up your shipping address first."})},fail:function(e){console.log(t(e," at pages\\pays\\pay.vue:211"))}})}});for(var o=[],i=e.data.Items[0].size,r=e.data.Items[0].items,l=[],u=0,c=0;c<r.length;c++){var p={id:r[c].Item_Id,cnt:r[c].count};l.push(p);var g=r[c].Item_Id;s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:g,mode:1},success:function(e){for(var s,n=0;n<l.length;n++)if(l[n].id==e.data.Items[0]._id){s=l[n];break}u+=parseFloat(e.data.Items[0].stitle,10)*s.cnt;var r=(u*a.exchangeRate).toFixed(2);o.push({img:e.data.Items[0].img,title:e.data.Items[0].title,size:i,sub:"$"+e.data.Items[0].stitle,count:s.cnt,_id:e.data.Items[0]._id}),console.log(t(e.data.Items[0].stitle+"   "+s.cnt+"   "+parseInt(e.data.Items[0].stitle,10)," at pages\\pays\\pay.vue:258")),a.setData({orderItems:o,totalP:"$"+u.toFixed(2).toString(10),totalRMB:"¥"+r.toString(10)})},fail:console.error})}}})},fail:function(t){a.setData({selectedAddress:JSON.stringify(t)})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{onTapPay:function(){this.setData({preparePay:!0,orderParams:{}})},onTapPaywechat:function(){this.setData({selectedAddress:"初始化汉特pay"}),console.log(t("call wxpay"," at pages\\pays\\pay.vue:328"));if(this.weAv){this.setData({weAv:!1});var e=this.totalP;e=e.substring(1,e.length);var a=parseFloat(e);console.log(t(a," at pages\\pays\\pay.vue:338"));var s=new Date,n="ht"+s.getFullYear().toString().substring(2,4),o=(s.getMonth()+1).toString();1==o.length&&(o="0"+o),n+=o,o=s.getDate().toString(),1==o.length&&(o="0"+o),n+=o,o=s.getHours().toString(),1==o.length&&(o="0"+o),n+=o,o=s.getMinutes().toString(),1==o.length&&(o="0"+o),console.log(t("tmp1: "+o," at pages\\pays\\pay.vue:370")),n+=o+this.oid.substring(this.oid.length-1-8,this.oid.length),this.htPay("05bcd02d83986b631ff81134e2bd85fe2934232329b5fa6a4d2fb3309d8e6800",a,"USD",n)}},onTapPayPPL:function(){this.setData({selectedAddress:"初始化paypal"});if(this.pplAv){var e=new Date,a="pp"+e.getFullYear().toString().substring(2,4),s=(e.getMonth()+1).toString();1==s.length&&(s="0"+s),a+=s,s=e.getDate().toString(),1==s.length&&(s="0"+s),a+=s,s=e.getHours().toString(),1==s.length&&(s="0"+s),a+=s,s=e.getMinutes().toString(),1==s.length&&(s="0"+s),a+=s+this.oid.substring(this.oid-1-4,this.oid),this.setData({pplAv:!1});for(var n=[],o=0;o<this.orderItems.length;o++){var i=this.orderItems[o];"undefined"===typeof i.size&&(i.size="");var r={name:i.title,description:i.size,quantity:i.count.toString(),price:i.sub.substring(1,i.sub.length),tax:parseFloat((.075*parseFloat(i.sub.substring(1,i.sub.length))).toFixed(2)),sku:"d1w2",currency:"USD"};console.log(t("tax: "+parseFloat((.075*parseFloat(i.sub.substring(1,i.sub.length))).toFixed(2))," at pages\\pays\\pay.vue:435")),n.push(r)}this.pplPay("A21AAHUF_WYgW6biaVBjkPOJsi4W-cNsG4GU6DSqkoa9m3ZgzrRU6ISMcgAQO4sN3bxKeQNcn7al7eyXGM1HA-K6qpqqcbtZA",n,"15.99","0",a)}},bindPaySuccess:function(e){console.log(t("success",e," at pages\\pays\\pay.vue:454")),console.log(t("[支付成功] PAYJS 订单号：",e.detail.payjsOrderId," at pages\\pays\\pay.vue:455")),this.setData({orderResults:e.detail,needRefreshOrderParams:!0}),wx.showModal({title:"支付成功",content:"PAYJS 订单号："+e.detail.payjsOrderId,showCancel:!1})},bindPayFail:function(e){console.log(t("fail",e," at pages\\pays\\pay.vue:477")),e.detail.error?console.error(t("发起支付失败",e.detail.info," at pages\\pays\\pay.vue:480")):e.detail.navigateSuccess&&console.log(t("[取消支付] PAYJS 订单号：",e.detail.info.payjsOrderId," at pages\\pays\\pay.vue:482"))},bindPayComplete:function(){console.log(t("complete"," at pages\\pays\\pay.vue:493")),this.setData({preparePay:!1})},bindDataChange:function(t){t.detail.paying&&this.setData({paying:t.detail.paying})},tapminus:function(e){var a=0,n=e.currentTarget.dataset.tar,o=this;s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts",method:"POST",data:{dbname:"carts",openId:getApp().globalData.openId},success:function(e){for(var i=e.data.Items[0].shop_Id,r=e.data.Items[0].items,l=0;l<r.length;l++)if(console.log(t(r[l]," at pages\\pays\\pay.vue:530")),r[l].Item_Id==n){r[l].count=r[l].count-1,r[l].count<=0&&(r.splice(l,1),console.log(t("delete"," at pages\\pays\\pay.vue:537")),console.log(t(r," at pages\\pays\\pay.vue:538"))),s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:r,sid:i},success:function(e){console.log(t("succ"," at pages\\pays\\pay.vue:550")),s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts",method:"POST",data:{dbname:"carts",openId:getApp().globalData.openId},success:function(t){var e=[],n=t.data.Items[0].size,i=t.data.Items[0].items,r=[];if(0==i.length)o.setData({orderItems:[]});else for(var l=0;l<i.length;l++){var u={id:i[l].Item_Id,cnt:i[l].count};r.push(u);var c=i[l].Item_Id;s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:c,mode:1},success:function(t){for(var s,i=0;i<r.length;i++)if(r[i].id==t.data.Items[0]._id){s=r[i];break}a+=parseFloat(t.data.Items[0].stitle,10)*s.cnt;var l=(a*o.exchangeRate).toFixed(2);e.push({img:t.data.Items[0].img,title:t.data.Items[0].title,size:n,sub:"$"+t.data.Items[0].stitle,count:s.cnt,_id:t.data.Items[0]._id}),o.setData({orderItems:e,totalP:"$"+a.toFixed(2).toString(10),totalRMB:"¥"+l.toString(10)})},fail:console.error})}}})},fail:console.error});break}}})},tapplus:function(e){var a=0,n=e.currentTarget.dataset.tar,o=this;s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts",method:"POST",data:{dbname:"carts",openId:getApp().globalData.openId},success:function(e){for(var i=e.data.Items[0].shop_Id,r=e.data.Items[0].items,l=0;l<r.length;l++)if(r[l].Item_Id==n){r[l].count=r[l].count+1,s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:r,sid:i},success:function(e){console.log(t("succ"," at pages\\pays\\pay.vue:653")),s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts",method:"POST",data:{dbname:"carts",openId:getApp().globalData.openId},success:function(t){for(var e=[],n=t.data.Items[0].size,i=t.data.Items[0].items,r=[],l=0;l<i.length;l++){var u={id:i[l].Item_Id,cnt:i[l].count};r.push(u);var c=i[l].Item_Id;s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:c,mode:1},success:function(t){for(var s,i=0;i<r.length;i++)if(r[i].id==t.data.Items[0]._id){s=r[i];break}a+=parseFloat(t.data.Items[0].stitle,10)*s.cnt;var l=(a*o.exchangeRate).toFixed(2);e.push({img:t.data.Items[0].img,title:t.data.Items[0].title,size:n,sub:t.data.Items[0].stitle,count:s.cnt,_id:t.data.Items[0]._id}),o.setData({orderItems:e,totalP:"$"+a.toFixed(2).toString(10),totalRMB:"¥"+l.toString(10)})},fail:console.error})}}})},fail:console.error});break}}})},pickerTap:function(){i=new Date;var t=["今天","明天"],e=[],a=[];r=i.getHours(),l=i.getMinutes();for(var s=2;s<=28;s++){var n=new Date(i);n.setDate(i.getDate()+s);var o=n.getMonth()+1+"-"+n.getDate();t.push(o)}var u={multiArray:this.multiArray,multiIndex:this.multiIndex};0===u.multiIndex[0]?0===u.multiIndex[1]?this.loadData(e,a):this.loadMinute(e,a):this.loadHoursMinute(e,a),u.multiArray[0]=t,u.multiArray[1]=e,u.multiArray[2]=a,this.setData(u)},bindMultiPickerColumnChange:function(t){i=new Date;var e=this,a=[],s=[];r=i.getHours(),l=i.getMinutes();var n={multiArray:this.multiArray,multiIndex:this.multiIndex};n.multiIndex[t.detail.column]=t.detail.value,0===t.detail.column?(0===t.detail.value?e.loadData(a,s):e.loadHoursMinute(a,s),n.multiIndex[1]=0,n.multiIndex[2]=0):1===t.detail.column?(0===n.multiIndex[0]?0===t.detail.value?e.loadData(a,s):e.loadMinute(a,s):e.loadHoursMinute(a,s),n.multiIndex[2]=0):0===n.multiIndex[0]?0===n.multiIndex[1]?e.loadData(a,s):e.loadMinute(a,s):e.loadHoursMinute(a,s),n.multiArray[1]=a,n.multiArray[2]=s,this.setData(n)},loadData:function(t,e){var a;if(a=l>0&&l<=10?10:l>10&&l<=20?20:l>20&&l<=30?30:l>30&&l<=40?40:l>40&&l<=50?50:60,60==a){for(var s=r+1;s<24;s++)t.push(s);for(s=0;s<60;s+=10)e.push(s)}else{for(s=r;s<24;s++)t.push(s);for(s=a;s<60;s+=10)e.push(s)}},loadHoursMinute:function(t,e){for(var a=0;a<24;a++)t.push(a);for(a=0;a<60;a+=10)e.push(a)},loadMinute:function(t,e){var a;if(a=l>0&&l<=10?10:l>10&&l<=20?20:l>20&&l<=30?30:l>30&&l<=40?40:l>40&&l<=50?50:60,60==a)for(var s=r+1;s<24;s++)t.push(s);else for(s=r;s<24;s++)t.push(s);for(s=0;s<60;s+=10)e.push(s)},bindStartMultiPickerChange:function(t){var e=this,a=e.multiArray[0][t.detail.value[0]],s=e.multiArray[1][t.detail.value[1]],n=e.multiArray[2][t.detail.value[2]];if("今天"===a){var o=i.getMonth()+1,r=i.getDate();a=o+"月"+r+"日"}else if("明天"===a){var l=new Date(i);l.setDate(i.getDate()+1),a=l.getMonth()+1+"月"+l.getDate()+"日"}else{o=a.split("-")[0],r=a.split("-")[1];a=o+"月"+r+"日"}var u=a+" "+s+":"+n;e.setData({startDate:u})},pplPay:function(e,a,s,n,o){this.setData({selectedAddress:"正在进入paypal"});for(var i=this,r="Bearer "+e,l=0,u=0,c=0,d=0;d<a.length;d++){var p=parseFloat(a[d].quantity),g=parseFloat(a[d].price),m=parseFloat(a[d].tax)*p;l+=p*g,c+=m}u=l+parseFloat(s)+c-parseFloat(parseFloat(n).toFixed(2)),u=parseFloat(u.toFixed(2)),l=parseFloat(l.toFixed(2)),c=parseFloat(c.toFixed(2)),wx.request({url:"https://api.sandbox.paypal.com/v1/payments/payment",header:{"Content-Type":"application/json",Authorization:r},method:"POST",data:{intent:"sale",payer:{payment_method:"paypal"},transactions:[{amount:{total:u.toString(),currency:"USD",details:{subtotal:l.toString(),tax:c.toString(),shipping:s.toString(),discount:n.toString()}},description:"测试的松鼠小镇paypal支付.",custom:"EBAY_EMS_90048630024435",invoice_number:o.toString(),payment_options:{allowed_payment_method:"INSTANT_FUNDING_SOURCE"},soft_descriptor:"ECHI5786786",item_list:{items:a}}],note_to_payer:"Contact us for any questions on your order.",redirect_urls:{return_url:"https://example.com/return",cancel_url:"https://example.com/cancel"}},success:function(e){i.setData({selectedAddress:"paypal转接中"}),console.log(t(e," at pages\\pays\\pay.vue:1025")),console.log(t(e.data.links[1].href," at pages\\pays\\pay.vue:1026")),getApp().globalData.payLink=e.data.links[1].href,wx.navigateTo({url:"../testPage/testThird"}),i.setData({pplAv:!0})},fail:function(e){i.setData({selectedAddress:JSON.stringify(e)}),console.log(t(e," at pages\\pays\\pay.vue:1040")),getApp().globalData.invoice=o,i.setData({pplAv:!0})}})},htPay:function(e,a,s,n){console.log(t("invoicNum in htPay: "+n," at pages\\pays\\pay.vue:1076")),this.setData({selectedAddress:"正在进入汉特支付, amount is: "+a+", invoice: "+n}),console.log(t("amount is: "+a+", currency is: "+s," at pages\\pays\\pay.vue:1080"));var o=this,i="Bearer "+e;wx.request({url:"https://api.hantepay.com/v1.3/transactions/micropay",header:{"Content-Type":"application/json",Authorization:i},method:"POST",data:{amount:100*a,currency:s,vendor:"wechatpay",reference:n,ipn_url:"page/pays/pays",open_id:o.oid,client_ip:"http://139.199.112.175"},success:function(e){o.setData({selectedAddress:"汉特支付转接中"});var a=e.data;console.log(t(e," at pages\\pays\\pay.vue:1106")),o.setData({weAv:!0}),console.log(t(a," at pages\\pays\\pay.vue:1110")),wx.requestPayment({timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.wechatPackage,signType:"MD5",paySign:a.paySign,success:function(e){console.log(t(e," at pages\\pays\\pay.vue:1119")),getApp().globalData.invoice=n,getApp().globalData.orderItems=o.orderItems,getApp().globalData.sid=d,wx.navigateTo({url:"../pays/htvarify"})},fail:function(e){console.log(t(e," at pages\\pays\\pay.vue:1129"))}})},fail:function(t){o.setData({selectedAddress:JSON.stringify(t)}),o.setData({pplAv:!0})}})},setData:function(t,e){var a,s,n=this,o=[];Object.keys(t).forEach(function(e){o=e.split("."),a=t[e],s=n.$data,o.forEach(function(t,e){e+1==o.length?n.$set(s,t,a):s[t]||n.$set(s,t,{}),s=s[t]})}),e&&e()}}};e.default=p}).call(this,a("0de9")["default"],a("6e42")["default"])},"9cd6":function(t,e,a){"use strict";var s=a("3475"),n=a.n(s);n.a},a21b:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{showPayModal:!1,paying:!1}},components:{},props:{params:{type:Object,default:function(){return null}},envVersion:{type:String,default:"release"}},lifetimes:{attached:function(){var e=this;this.setPaying(!1),this.params||(console.error(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 错误：没有传递跳转参数",r," at component\\payjs\\payjs.vue:42")),this.$emit("fail",{error:!0,navigateSuccess:!1}),this.$emit("complete")),wx.onAppShow(function(a){if(e.paying&&(e.setPaying(!1),1038===a.scene&&"wx959c8c1fb2d877b5"===a.referrerInfo.appId)){console.log(t("[PAYJS] 确认来源于 PAYJS 回调返回"," at component\\payjs\\payjs.vue:58"));var s=a.referrerInfo.extraData;s.success?(e.$emit("success",s),e.$emit("complete")):(e.$emit("fail",{navigateSuccess:!0,info:s}),e.$emit("complete"))}}),wx.navigateToMiniProgram({appId:"wx959c8c1fb2d877b5",path:"pages/pays",extraData:this.params,envVersion:this.envVersion,success:function(a){console.log(t("[PAYJS] 跳转到 PAYJS 小程序成功",a," at component\\payjs\\payjs.vue:80")),e.setPaying(!0)},fail:function(a){console.log(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 准备弹窗提醒跳转",a," at component\\payjs\\payjs.vue:86")),e.setData({showPayModal:!0})}})}},methods:{setPaying:function(t){this.setData({paying:t}),this.$emit("dataChange",{paying:t})},onTapCancel:function(){console.log(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 用户点击了提醒窗体以外的地方"," at component\\payjs\\payjs.vue:107")),this.$emit("fail",{navigateSuccess:!1}),this.$emit("complete")},navigateSuccess:function(){console.log(t("[PAYJS] 跳转到 PAYJS 小程序成功"," at component\\payjs\\payjs.vue:115")),this.setPaying(!0)},navigateFail:function(e){console.log(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 失败回调",e," at component\\payjs\\payjs.vue:122")),this.$emit("fail",{navigateSuccess:!1,info:e}),this.$emit("complete")},setData:function(t,e){var a,s,n=this,o=[];Object.keys(t).forEach(function(e){o=e.split("."),a=t[e],s=n.$data,o.forEach(function(t,e){e+1==o.length?n.$set(s,t,a):s[t]||n.$set(s,t,{}),s=s[t]})}),e&&e()}}};e.default=a}).call(this,a("0de9")["default"])},c00a:function(t,e,a){"use strict";a.r(e);var s=a("a21b"),n=a.n(s);for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);e["default"]=n.a},fbb0:function(t,e,a){"use strict";a.r(e);var s=a("2797"),n=a("c00a");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("9cd6");var i=a("2877"),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports},fde3:function(t,e,a){"use strict";a.r(e);var s=a("841a"),n=a("0dd5");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("42be");var i=a("2877"),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports}},[["72c3","common/runtime","common/vendor"]]]);
});
require('pages/pays/pay.js');
__wxRoute = 'pages/pubPost/pubPost';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pubPost/pubPost.js';

define('pages/pubPost/pubPost.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pubPost/pubPost"],{"547c":function(t,e,a){"use strict";a.r(e);var s=a("ef7b"),o=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e["default"]=o.a},"590e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return o})},a04b:function(t,e,a){"use strict";var s=a("f27e"),o=a.n(s);o.a},ac63:function(t,e,a){"use strict";a.r(e);var s=a("590e"),o=a("547c");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("a04b");var u=a("2877"),n=Object(u["a"])(o["default"],s["a"],s["b"],!1,null,null,null);e["default"]=n.exports},b161:function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");s(a("66fd"));var e=s(a("ac63"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},ef7b:function(t,e,a){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=!0,i=a("d445"),u=["日常用品","二手汽车","家具生活","其他"],n={data:function(){return{applyList:[{Item_id:"10",Item_Name:"社区活动",isSelect:!1},{Item_id:"11",Item_Name:"美食",isSelect:!1},{Item_id:"12",Item_Name:"电竞开黑",isSelect:!1},{Item_id:"13",Item_Name:"二刺螈",isSelect:!1},{Item_id:"14",Item_Name:"摄影",isSelect:!1},{Item_id:"15",Item_Name:"兴趣",isSelect:!1},{Item_id:"16",Item_Name:"汽车",isSelect:!1},{Item_id:"17",Item_Name:"其他",isSelect:!1}],buttonStatus:!1,cata:"撒旦发生",catal:u[3],price:0,oriPrice:0,division:"",tag:[],pos:"",titleCount:0,contentCount:0,title:"",content:"",images:[],currentTab1:3,isRequest:!1}},components:{},props:{},onLoad:function(){var t="";t=wx.getStorageSync("postR"),0==t.localeCompare("出二手")&&this.setData({isRequest:!0}),this.setData({cata:t})},methods:{clickTab1:function(e){var a=this;a.setData({currentTab1:e.target.dataset.current1,catal:u[e.target.dataset.current1]}),console.log(t(this.catal," at pages\\pubPost\\pubPost.vue:144"))},submit:function(e){for(var a=[],u=0;u<this.applyList.length;u++)this.applyList[u].isSelect&&a.push(this.applyList[u].Item_Name);console.log(t(a," at pages\\pubPost\\pubPost.vue:155"));var n=this;if(this.setData({buttonStatus:!0}),wx.showLoading({title:"上传中"}),o){var c=new Date;console.log(t(c.getHours().toString()+":"+c.getMinutes()," at pages\\pubPost\\pubPost.vue:167")),console.log(t(c.getMonth()+1+"/"+c.getDate().toString()+"/"+c.getFullYear().toString()," at pages\\pubPost\\pubPost.vue:168"));var l=(c.getMonth()+1).toString()+"/"+c.getDate().toString()+"/"+c.getFullYear().toString(),r=c.getHours().toString()+":"+c.getMinutes(),p=l+" "+r;this.clickable=!1,wx.setStorage({key:"newPost",data:this});var g=this.images,d=[],m=(this.catal,this.title),h=this.content,f=h;h.length>=35&&(f=h.substring(0,35)+"...",console.log(t(f," at pages\\pubPost\\pubPost.vue:186")));this.price,this.oriprice,this.tag,this.pos;var v=g.length,b=0;0!=g.length?g.forEach(function(o){var u="";console.log(t("尝试插入cloudpath："+o," at pages\\pubPost\\pubPost.vue:199")),0==o.substring(0,6).localeCompare("wxfile")?(u="ershouimg/"+o.substring(9),console.log(t("尝试插入cloudpath with wxfile："+u," at pages\\pubPost\\pubPost.vue:203"))):(u="ershouimg/"+o.substring(11),console.log(t("尝试插入cloudpath with http："+u," at pages\\pubPost\\pubPost.vue:206"))),wx.cloud.uploadFile({cloudPath:u,filePath:o}).then(function(o){b++,d.push("cloud://tempsqu-ennf2.7465-tempsqu-ennf2/"+u),b==v&&s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postnewcommu",method:"POST",data:{author:e.detail.userInfo.nickName,avatarUrl:e.detail.userInfo.avatarUrl,comments:[],date:p,desc:h,images:d,title:m,imgs:d,tags:a,openId:getApp().globalData.openId},success:function(o){var u=o.result._id;s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postnewcommu",method:"POST",data:{author:e.detail.userInfo.nickName,authorImg:e.detail.userInfo.avatarUrl,comDir:u,date:p,detail:m,openId:getApp().globalData.openId,img:d,vc:0,upC:0,upvoter:[],text:f,tags:a},success:function(e){console.log(t("succc"," at pages\\pubPost\\pubPost.vue:255")),i.updateUserDateRecord(1)}}),n.setData({buttonStatus:!1}),wx.switchTab({url:"../commu/commu"})},fail:function(e){console.log(t(e," at pages\\pubPost\\pubPost.vue:267"))}}),console.log(t(u," at pages\\pubPost\\pubPost.vue:272")),console.log(t("uploaded"," at pages\\pubPost\\pubPost.vue:273"))})}):s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postnewcommu",method:"POST",data:{openId:getApp().globalData.openId,author:e.detail.userInfo.nickName,avatarUrl:e.detail.userInfo.avatarUrl,comments:[],date:p,desc:h,images:d,title:m,imgs:d,tags:a},success:function(o){var u=o.result._id;s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postnewcommulist",method:"POST",data:{openId:getApp().globalData.openId,author:e.detail.userInfo.nickName,authorImg:e.detail.userInfo.avatarUrl,comDir:u,date:p,detail:m,img:d,vc:0,upC:0,upvoter:[],text:f,tags:a},success:function(e){console.log(t("succc"," at pages\\pubPost\\pubPost.vue:315")),i.updateUserDateRecord(1)}}),n.setData({buttonStatus:!1}),wx.switchTab({url:"../commu/commu"})},fail:function(e){console.log(t(e," at pages\\pubPost\\pubPost.vue:327"))}})}},setTitle:function(t){this.setData({title:t.detail.value})},settags:function(t){var e=t.detail.value,a=[];a=e.split(";"),0==a[a.length-1].localeCompare("")&&a.pop(),this.setData({tag:a})},setDes:function(t){this.setData({content:t.detail.value})},setprice:function(t){this.setData({price:t.detail.value})},setpos:function(t){this.setData({pos:t.detail.value})},setoriPrice:function(t){this.setData({oriPrice:t.detail.value})},selectApply:function(t){var e=t.currentTarget.dataset.index,a=this.applyList[e];a.isSelect=!a.isSelect,this.setData({applyList:this.applyList})},handleTitleInput:function(t){var e=t.detail.value;-1!=e.lastIndexOf(" ")&&(e=e.substring(0,e.lastIndexOf(" ")));var a=e.length;a<=25&&this.setData({titleCount:a,title:e})},handleContentInput:function(t){var e=t.detail.value,a=e.length;a<=400&&this.setData({contentCount:a,content:e})},ImageOperator:function(){var e=this;wx.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var s=a.tempFilePaths,o=e.images,i=o.length,u=s.length;if(console.log(t(i," at pages\\pubPost\\pubPost.vue:426")),9==i&&console.log(t("数量已经有9张，请删除在添加..."," at pages\\pubPost\\pubPost.vue:429")),i<9){var n=[],c=9-i;n=c>=u?o.concat(s):o.concat(s.slice(0,c)),e.setData({images:n})}}})},chooseImage:function(){var t=this;0==this.images.length?wx.showToast({title:"请选择要上传的图片",icon:"none",duration:2e3,success:function(e){t.ImageOperator()}}):this.ImageOperator()},deleteImage:function(t){var e=t.currentTarget.dataset.id,a=this.images;a.splice(e,1),this.setData({images:a})},previewIamge:function(t){var e=t.currentTarget.dataset.id,a=this.images;wx.previewImage({current:a[e],urls:a})},setData:function(t,e){var a,s,o=this,i=[];Object.keys(t).forEach(function(e){i=e.split("."),a=t[e],s=o.$data,i.forEach(function(t,e){e+1==i.length?o.$set(s,t,a):s[t]||o.$set(s,t,{}),s=s[t]})}),e&&e()}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},f27e:function(t,e,a){}},[["b161","common/runtime","common/vendor"]]]);
});
require('pages/pubPost/pubPost.js');
__wxRoute = 'pages/navi/navi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/navi/navi.js';

define('pages/navi/navi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/navi/navi"],{2840:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{result1:"返回结果:",cpb1:!0,cpb2:!0,newStoreId:"",shopName:"",catagoryList:"",indexImg:"",adImg:"",adDes:"",shopAddr:"",shopId:"",catagory:"",indexImg2:"",des:"",sizeList:"",price:"",itemName:"",brand:"",result2:""}},components:{},props:{},onLoad:function(){},onPullDownRefresh:function(){wx.stopPullDownRefresh()},methods:{bindShopName:function(t){this.setData({shopName:t.detail.value})},bindcata:function(e){var a=e.detail.value,s=a.split(",");if(0==s[s.length-1].length)s.pop();console.log(t(" at pages\\navi\\navi.vue:85")),this.setData({catagoryList:s})},bindimg:function(t){this.setData({indexImg:t.detail.value})},bindadimg:function(t){this.setData({adImg:t.detail.value})},bindaddes:function(t){this.setData({adDes:t.detail.value})},bindadd:function(t){this.setData({shopAddr:t.detail.value})},copytoCPB:function(t){var e=this;wx.setClipboardData({data:e.newStoreId,success:function(t){wx.showToast({title:"复制成功"})}})},tapSubmig:function(e){var s=this;a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adddata",method:"POST",data:{dbname:"shops",dataSe:{count:0,img:s.indexImg,title:s.shopName,address:s.shopAddr,catagory:s.catagoryList,kind:"normal",owner:[]}},success:function(e){console.log(t(e.result._id," at pages\\navi\\navi.vue:142")),s.setData({newStoreId:e.result._id,cpb2:!0,cpb1:!1});var n,i=s.catagoryList.length,o=[];for(n=0;n<i;n++)o.push([]);a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adddata",method:"POST",data:{dbname:"items",dataSe:{contents:o,sId:s.newStoreId}},success:function(t){a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adddata",method:"POST",data:{dbname:"StoreAds",dataSe:{contents:[{des:s.adDes,img:s.adImg}],sId:s.newStoreId}},success:function(t){s.setData({result1:"返回结果: 添加成功，请保留店铺Id:"+t.result._id})}})}})}})},bindShopId:function(t){this.setData({shopId:t.detail.value})},bindcata2:function(t){this.setData({catagory:t.detail.value})},bindimg2:function(t){this.setData({indexImg2:t.detail.value})},binddes:function(t){this.setData({des:t.detail.value})},bindsize:function(t){var e=t.detail.value,a=e.split(",");if(0==a[a.length-1].length)a.pop();this.setData({sizeList:a})},bindprice:function(t){this.setData({price:t.detail.value})},binditemName:function(t){this.setData({itemName:t.detail.value})},bindbrand:function(t){this.setData({brand:t.detail.value})},tapSubmig2:function(e){var s=this,n=0;a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemcounts",method:"POST",data:{},success:function(e){n=e.data.Items[0].value,a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adddata",method:"POST",data:{dbname:"itemInfo",dataSe:{array1:s.sizeList,array2:[1,2,3,4,5,6,7,8,9],des:s.des,flavor:"辣!",img:s.indexImg2,index1:0,index2:0,itemId:n,stitle:s.price,title:s.itemName}},success:function(e){console.log(t(e.result._id," at pages\\navi\\navi.vue:268")),s.setData({newStoreId:e.result._id,cpb2:!1,cpb1:!0}),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:1,target:"shops",iddd:s.shopId},success:function(e){console.log(t(e.data.Items[0].catagory," at pages\\navi\\navi.vue:284"));for(var i=e.data.Items[0].catagory,o=0,d=0;d<i.length;d++)if(0==i[d].localeCompare(s.catagory)){o=d;break}a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore",method:"POST",data:{mode:2,shopId:s.shopId},success:function(e){console.log(t("current item list"," at pages\\navi\\navi.vue:305")),console.log(t(e.data.Items[0].contents," at pages\\navi\\navi.vue:306"));var i=e.data.Items[0].contents,d={brand:s.brand,img:s.indexImg2,itemId:n,price:s.price,title:s.itemName};i[o].push(d),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore",method:"POST",data:{mode:1,newCont:i},success:function(t){a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore",method:"POST",data:{mode:3},success:function(t){a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/addnewitemintostore",method:"POST",data:{mode:4,shopId:s.shopId},success:function(t){s.setData({result2:"返回结果: 添加成功"})}})}})}})}})},fail:function(t){s.setData({result1:"返回结果: 店家不存在"})}})}})}})},setData:function(t,e){var a,s,n=this,i=[];Object.keys(t).forEach(function(e){i=e.split("."),a=t[e],s=n.$data,i.forEach(function(t,e){e+1==i.length?n.$set(s,t,a):s[t]||n.$set(s,t,{}),s=s[t]})}),e&&e()}}};e.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},"53d7":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n})},"79f1":function(t,e,a){"use strict";var s=a("eb66"),n=a.n(s);n.a},"7e6e":function(t,e,a){"use strict";a.r(e);var s=a("53d7"),n=a("e7bf");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("79f1");var o=a("2877"),d=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=d.exports},a5d3:function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");s(a("66fd"));var e=s(a("7e6e"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},e7bf:function(t,e,a){"use strict";a.r(e);var s=a("2840"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e["default"]=n.a},eb66:function(t,e,a){}},[["a5d3","common/runtime","common/vendor"]]]);
});
require('pages/navi/navi.js');
__wxRoute = 'pages/Store/Store';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Store/Store.js';

define('pages/Store/Store.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Store/Store"],{"00c2":function(t,e,a){},"0bf4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{flag:!0}},components:{},props:{title_val:{type:String,default:"标题"},content_val:{type:String,default:"内容"},btn_no_val:{type:String,default:"取消"},btn_ok_val:{type:String,default:"确定"}},options:{multipleSlots:!0},methods:{hidePopup:function(){this.setData({flag:!this.flag})},showPopup:function(){this.setData({flag:!this.flag})},_error:function(){this.$emit("error")},_success:function(){this.$emit("success")},setData:function(t,e){var a,o,s=this,n=[];Object.keys(t).forEach(function(e){n=e.split("."),a=t[e],o=s.$data,n.forEach(function(t,e){e+1==n.length?s.$set(o,t,a):o[t]||s.$set(o,t,{}),o=o[t]})}),e&&e()}}};e.default=o},"1e20":function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");o(a("66fd"));var e=o(a("536d"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"34d0":function(t,e,a){"use strict";a.r(e);var o=a("0bf4"),s=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);e["default"]=s.a},"536d":function(t,e,a){"use strict";a.r(e);var o=a("c0bb"),s=a("8226");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("ab1e");var u=a("2877"),c=Object(u["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},"6bbb":function(t,e,a){},8226:function(t,e,a){"use strict";a.r(e);var o=a("d2b9"),s=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);e["default"]=s.a},"9f55":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return s})},ab1e:function(t,e,a){"use strict";var o=a("6bbb"),s=a.n(o);s.a},b2c8:function(t,e,a){"use strict";var o=a("00c2"),s=a.n(o);s.a},c0bb:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return s})},d2b9:function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(a("fa3e"));function n(t){return t&&t.__esModule?t:{default:t}}var u,c=0,r=0,i={data:function(){return{currentTab:0,user_openId:"AAA",loopadsHT:"",loopadsWD:"",scrollHeight:"",initCardPos:"",cardHeight:"",loopimgs1:"",goods:"",cata:""}},components:{popup:s.default},props:{},onReady:function(){this.popup=this.selectComponent("#popup")},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onLoad:function(){u=wx.getStorageSync("shopid"),console.log(t(u," at pages\\Store\\Store.vue:100")),wx.getSystemInfo({success:function(t){c=t.windowWidth,r=t.windowHeight}}),this.setData({loopadsHT:.3*r,loopadsWD:c,scrollHeight:.64*r,initCardPos:.36*r,cardHeight:.64*r*.6});var e=this;o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey",method:"POST",data:{dbname:"StoreAds",shopId:u},success:function(t){e.setData({loopimgs1:t.data.Items[0].contents})}}),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdatawithkey",method:"POST",data:{dbname:"items",shopId:u},success:function(t){e.setData({goods:t.data.Items[0].contents})}}),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{mode:1,target:"shops",iddd:u},success:function(a){console.log(t(a.result[0].catagory," at pages\\Store\\Store.vue:152")),e.setData({cata:a.result[0].catagory})},fail:function(e){console.log(t(e," at pages\\Store\\Store.vue:158"))}})},methods:{showPopup:function(){this.popup.showPopup()},_error:function(){console.log(t("你点击了取消"," at pages\\Store\\Store.vue:169")),this.popup.hidePopup()},_success:function(){console.log(t("你点击了确定"," at pages\\Store\\Store.vue:175")),this.popup.hidePopup()},tapCart:function(t){wx.navigateTo({url:"../pays/pay"})},clickTab:function(e){var a=this;if(this.currentTab===e.target.dataset.current)return!1;a.setData({currentTab:e.target.dataset.current}),console.log(t(this.currentTab," at pages\\Store\\Store.vue:195"))},stopTouchMove:function(){return!1},clickItem:function(e){console.log(t(e.currentTarget.dataset.itemid," at pages\\Store\\Store.vue:201")),wx.setStorageSync("itemId",e.currentTarget.dataset.itemid),wx.setStorageSync("shopid",u),wx.navigateTo({url:"../item/item"})},addtoCart:function(e){this.showPopup();var a=this;o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts",method:"POST",data:{dbname:"carts",openId:getApp().globalData.openId},success:function(s){if(console.log(t(s," at pages\\Store\\Store.vue:221")),0==s.data.Items.length)o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/initcart",method:"POST",data:{shop_Id:u},success:function(s){var n=[];o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:e.target.dataset.itemid,mode:0},success:function(e){console.log(t("as1"," at pages\\Store\\Store.vue:242"));var s=0,c=1,r=0;for(s=0;s<n.length;s++)e.data.Items[0]._id==n[s].Item_Id&&(c=n[s].count+1,r=s);1==c?n.push({Item_Id:e.data.Items[0]._id,size:"Large",count:1}):n[r].count=c,o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:n,sid:u},success:function(e){console.log(t("succ"," at pages\\Store\\Store.vue:274")),a._success()},fail:console.error})}})}});else{var n=s.data.Items[0].items;console.log(t(n," at pages\\Store\\Store.vue:286")),u==s.data.Items[0].shop_Id?o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:e.target.dataset.itemid,mode:0},success:function(e){console.log(t("as1"," at pages\\Store\\Store.vue:298"));var s=0,c=1,r=0;for(s=0;s<n.length;s++)e.data.Items[0]._id==n[s].Item_Id&&(c=n[s].count+1,r=s);1==c?n.push({Item_Id:e.data.Items[0]._id,size:"Large",count:1}):n[r].count=c,o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:n,sid:u},success:function(e){console.log(t("succ"," at pages\\Store\\Store.vue:330")),a._success()},fail:console.error})}}):o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:e.target.dataset.itemid,mode:0},success:function(e){console.log(t(e.result," at pages\\Store\\Store.vue:349")),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:[{Item_Id:e.data.Items[0]._id,size:"Large",count:1}],sid:u},success:function(e){console.log(t("succ"," at pages\\Store\\Store.vue:364")),a._success()},fail:console.error})}})}},fail:console.error})},setData:function(t,e){var a,o,s=this,n=[];Object.keys(t).forEach(function(e){n=e.split("."),a=t[e],o=s.$data,n.forEach(function(t,e){e+1==n.length?s.$set(o,t,a):o[t]||s.$set(o,t,{}),o=o[t]})}),e&&e()}}};e.default=i}).call(this,a("0de9")["default"],a("6e42")["default"])},fa3e:function(t,e,a){"use strict";a.r(e);var o=a("9f55"),s=a("34d0");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("b2c8");var u=a("2877"),c=Object(u["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports}},[["1e20","common/runtime","common/vendor"]]]);
});
require('pages/Store/Store.js');
__wxRoute = 'pages/item/item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/item/item.js';

define('pages/item/item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/item/item"],{3677:function(e,t,a){"use strict";var s=a("fe5f"),o=a.n(s);o.a},"61e2":function(e,t,a){"use strict";a.r(t);var s=a("87da"),o=a("caee");for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);a("3677");var n=a("2877"),u=Object(n["a"])(o["default"],s["a"],s["b"],!1,null,null,null);t["default"]=u.exports},"87da":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return o})},8843:function(e,t,a){"use strict";(function(e,a){var s,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=0,n=0,u={data:function(){return{title:"麻辣小龙虾",stitle:"$50",des:"大风大浪骄傲了大家很快就处女在u为撒发达",array1:["大","中","小"],index1:0,array2:[],index2:0,flavor:"辣",coll:"",imght:"",imgwd:"",botht:""}},components:{},props:{},onPullDownRefresh:function(){wx.stopPullDownRefresh()},onLoad:function(){var t=this;s=wx.getStorageSync("itemId"),o=wx.getStorageSync("shopid"),e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:s,mode:0},success:function(e){console.log(a(e.data.Items[0]," at pages\\item\\item.vue:83")),t.setData({coll:e.data.Items[0]});for(var s=t.coll.kc,o=[],i=1;i<=s;i++)o.push(i);t.setData({array2:o})}}),wx.getSystemInfo({success:function(e){i=e.windowWidth,n=e.windowHeight}}),this.setData({imght:.4*n,imgwd:i,botht:.6*n})},methods:{bindPickerChange1:function(e){console.log(a(e.detail.value," at pages\\item\\item.vue:116")),this.setData({index1:e.detail.value})},bindPickerChange2:function(e){console.log(a(e.detail.value," at pages\\item\\item.vue:122")),console.log(a(this.array2," at pages\\item\\item.vue:123")),this.setData({index2:e.detail.value})},tapCart:function(e){wx.navigateTo({url:"../pays/pay"})},addtoCart:function(t){e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/pullcarts",method:"POST",data:{dbname:"carts",openId:getApp().globalData.openId},success:function(t){if(console.log(a(t," at pages\\item\\item.vue:143")),0==t.data.Items.length)e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/initcart",method:"POST",data:{shop_Id:o},success:function(t){var i=[];e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:s,mode:0},success:function(t){console.log(a("as1"," at pages\\item\\item.vue:164"));var s=0,n=1,u=0;for(s=0;s<i.length;s++)t.data.Items[0]._id==i[s].Item_Id&&(n=i[s].count+1,u=s);1==n?i.push({Item_Id:t.data.Items[0]._id,size:"Large",count:1}):i[u].count=n,e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:i,sid:o},success:function(e){console.log(a("succ"," at pages\\item\\item.vue:196"))},fail:console.error})}})}});else{var i=t.data.Items[0].items;console.log(a(i," at pages\\item\\item.vue:206")),s==t.data.Items[0].shop_Id?e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:s,mode:0},success:function(t){console.log(a("as1"," at pages\\item\\item.vue:218"));var s=0,n=1,u=0;for(s=0;s<i.length;s++)t.data.Items[0]._id==i[s].Item_Id&&(n=i[s].count+1,u=s);1==n?i.push({Item_Id:t.data.Items[0]._id,size:"Large",count:1}):i[u].count=n,e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:i,sid:o},success:function(e){console.log(a("succ"," at pages\\item\\item.vue:250"))},fail:console.error})}}):e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getitemid",method:"POST",data:{itemId:s,mode:0},success:function(t){console.log(a(t.result," at pages\\item\\item.vue:267")),e.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updatecartitem",method:"POST",data:{openId:getApp().globalData.openId,itemList:[{Item_Id:t.data.Items[0]._id,size:"Large",count:1}],sid:o},success:function(e){console.log(a("succ"," at pages\\item\\item.vue:282"))},fail:console.error})}})}},fail:console.error})},setData:function(e,t){var a,s,o=this,i=[];Object.keys(e).forEach(function(t){i=t.split("."),a=e[t],s=o.$data,i.forEach(function(e,t){t+1==i.length?o.$set(s,e,a):s[e]||o.$set(s,e,{}),s=s[e]})}),t&&t()}}};t.default=u}).call(this,a("6e42")["default"],a("0de9")["default"])},bf57:function(e,t,a){"use strict";(function(e){a("81c2"),a("921b");s(a("66fd"));var t=s(a("61e2"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},caee:function(e,t,a){"use strict";a.r(t);var s=a("8843"),o=a.n(s);for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);t["default"]=o.a},fe5f:function(e,t,a){}},[["bf57","common/runtime","common/vendor"]]]);
});
require('pages/item/item.js');
__wxRoute = 'component/popup/popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'component/popup/popup.js';

define('component/popup/popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["component/popup/popup"],{"00c2":function(t,n,e){},"0bf4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{flag:!0}},components:{},props:{title_val:{type:String,default:"标题"},content_val:{type:String,default:"内容"},btn_no_val:{type:String,default:"取消"},btn_ok_val:{type:String,default:"确定"}},options:{multipleSlots:!0},methods:{hidePopup:function(){this.setData({flag:!this.flag})},showPopup:function(){this.setData({flag:!this.flag})},_error:function(){this.$emit("error")},_success:function(){this.$emit("success")},setData:function(t,n){var e,u,a=this,o=[];Object.keys(t).forEach(function(n){o=n.split("."),e=t[n],u=a.$data,o.forEach(function(t,n){n+1==o.length?a.$set(u,t,e):u[t]||a.$set(u,t,{}),u=u[t]})}),n&&n()}}};n.default=u},"34d0":function(t,n,e){"use strict";e.r(n);var u=e("0bf4"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=a.a},"69e7":function(t,n,e){"use strict";(function(t){e("81c2"),e("921b");u(e("66fd"));var n=u(e("fa3e"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"9f55":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},b2c8:function(t,n,e){"use strict";var u=e("00c2"),a=e.n(u);a.a},fa3e:function(t,n,e){"use strict";e.r(n);var u=e("9f55"),a=e("34d0");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("b2c8");var c=e("2877"),f=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports}},[["69e7","common/runtime","common/vendor"]]]);
});
require('component/popup/popup.js');
__wxRoute = 'pages/testPage/testThird';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/testPage/testThird.js';

define('pages/testPage/testThird.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/testPage/testThird"],{"20c9":function(n,t,e){"use strict";e.r(t);var o=e("ecba"),a=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=a.a},6014:function(n,t,e){},9194:function(n,t,e){"use strict";var o=e("6014"),a=e.n(o);a.a},b7a3:function(n,t,e){"use strict";(function(n){e("81c2"),e("921b");o(e("66fd"));var t=o(e("ebd2"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},ebd2:function(n,t,e){"use strict";e.r(t);var o=e("f192"),a=e("20c9");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);e("9194");var c=e("2877"),i=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},ecba:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{payLink:""}},components:{},props:{},onLoad:function(t){this.setData({payLink:getApp().globalData.payLink}),console.log(n(this.payLink," at pages\\testPage\\testThird.vue:24"))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{setData:function(n,t){var e,o,a=this,u=[];Object.keys(n).forEach(function(t){u=t.split("."),e=n[t],o=a.$data,u.forEach(function(n,t){t+1==u.length?a.$set(o,n,e):o[n]||a.$set(o,n,{}),o=o[n]})}),t&&t()}}};t.default=e}).call(this,e("0de9")["default"])},f192:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})}},[["b7a3","common/runtime","common/vendor"]]]);
});
require('pages/testPage/testThird.js');
__wxRoute = 'component/payjs/payjs';__wxRouteBegin = true;__wxAppCurrentFile__ = 'component/payjs/payjs.js';

define('component/payjs/payjs.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["component/payjs/payjs"],{2797:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},3475:function(t,e,n){},4613:function(t,e,n){"use strict";(function(t){n("81c2"),n("921b");a(n("66fd"));var e=a(n("fbb0"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9cd6":function(t,e,n){"use strict";var a=n("3475"),o=n.n(a);o.a},a21b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{showPayModal:!1,paying:!1}},components:{},props:{params:{type:Object,default:function(){return null}},envVersion:{type:String,default:"release"}},lifetimes:{attached:function(){var e=this;this.setPaying(!1),this.params||(console.error(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 错误：没有传递跳转参数",r," at component\\payjs\\payjs.vue:42")),this.$emit("fail",{error:!0,navigateSuccess:!1}),this.$emit("complete")),wx.onAppShow(function(n){if(e.paying&&(e.setPaying(!1),1038===n.scene&&"wx959c8c1fb2d877b5"===n.referrerInfo.appId)){console.log(t("[PAYJS] 确认来源于 PAYJS 回调返回"," at component\\payjs\\payjs.vue:58"));var a=n.referrerInfo.extraData;a.success?(e.$emit("success",a),e.$emit("complete")):(e.$emit("fail",{navigateSuccess:!0,info:a}),e.$emit("complete"))}}),wx.navigateToMiniProgram({appId:"wx959c8c1fb2d877b5",path:"pages/pays",extraData:this.params,envVersion:this.envVersion,success:function(n){console.log(t("[PAYJS] 跳转到 PAYJS 小程序成功",n," at component\\payjs\\payjs.vue:80")),e.setPaying(!0)},fail:function(n){console.log(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 准备弹窗提醒跳转",n," at component\\payjs\\payjs.vue:86")),e.setData({showPayModal:!0})}})}},methods:{setPaying:function(t){this.setData({paying:t}),this.$emit("dataChange",{paying:t})},onTapCancel:function(){console.log(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 用户点击了提醒窗体以外的地方"," at component\\payjs\\payjs.vue:107")),this.$emit("fail",{navigateSuccess:!1}),this.$emit("complete")},navigateSuccess:function(){console.log(t("[PAYJS] 跳转到 PAYJS 小程序成功"," at component\\payjs\\payjs.vue:115")),this.setPaying(!0)},navigateFail:function(e){console.log(t("[PAYJS] 跳转到 PAYJS 小程序失败 - 失败回调",e," at component\\payjs\\payjs.vue:122")),this.$emit("fail",{navigateSuccess:!1,info:e}),this.$emit("complete")},setData:function(t,e){var n,a,o=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),n=t[e],a=o.$data,s.forEach(function(t,e){e+1==s.length?o.$set(a,t,n):a[t]||o.$set(a,t,{}),a=a[t]})}),e&&e()}}};e.default=n}).call(this,n("0de9")["default"])},c00a:function(t,e,n){"use strict";n.r(e);var a=n("a21b"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},fbb0:function(t,e,n){"use strict";n.r(e);var a=n("2797"),o=n("c00a");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("9cd6");var i=n("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["4613","common/runtime","common/vendor"]]]);
});
require('component/payjs/payjs.js');
__wxRoute = 'pages/tuan/tuan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tuan/tuan.js';

define('pages/tuan/tuan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuan/tuan"],{"0736":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},2939:function(t,e,n){"use strict";(function(t){n("81c2"),n("921b");a(n("66fd"));var e=a(n("cc0e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},3234:function(t,e,n){},5219:function(t,e,n){"use strict";n.r(e);var a=n("6393"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},6393:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="",o=0,u=0,c={data:function(){return{avtUrl:"",author:"",date:"",width:0,height:0,loopht:0,desht:0,name:"",des:"",price:0,currency:"¥",loopimgs1:[],sliderht:0,botht:0,botbutwd:0,botbutht:0,botbutedge:0,bothht:"",coll:""}},components:{},props:{},onLoad:function(){var e=this;this.updateTuanInfoFromDB();a=getApp().globalData.var1,console.log(t("comdi"+a," at pages\\tuan\\tuan.vue:98")),wx.getSystemInfo({success:function(t){o=t.windowWidth,u=t.windowHeight}}),this.setData({width:o,height:u,loopht:.4*u,desht:.28*o,sliderht:u-.4*o*.4,bothht:.6*u,botht:.4*o*.4,botbutwd:.4*o,botbutht:.4*o*.4,botbutedge:.05*o});var c=a;n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{target:"secondHand",iddd:c,mode:1},success:function(n){console.log(t(n.result[0]," at pages\\tuan\\tuan.vue:128")),e.setData({coll:n.result[0],date:n.result[0].date,avtUrl:n.result[0].authorAva,author:n.result[0].authorName})}})},methods:{updateTuanInfoFromDB:function(){var t;t=wx.getStorageSync("itemInfo"),this.setData({name:t.name,des:t.description,price:t.price,loopimgs1:t.img,currency:t.currency})},buynow:function(){wx.navigateTo({url:"../payment/payment"})},atc:function(){},setData:function(t,e){var n,a,o=this,u=[];Object.keys(t).forEach(function(e){u=e.split("."),n=t[e],a=o.$data,u.forEach(function(t,e){e+1==u.length?o.$set(a,t,n):a[t]||o.$set(a,t,{}),a=a[t]})}),e&&e()}}};e.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},cc0e:function(t,e,n){"use strict";n.r(e);var a=n("0736"),o=n("5219");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("f85c");var c=n("2877"),r=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},f85c:function(t,e,n){"use strict";var a=n("3234"),o=n.n(a);o.a}},[["2939","common/runtime","common/vendor"]]]);
});
require('pages/tuan/tuan.js');
__wxRoute = 'pages/xiaonei/xiaonei';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/xiaonei/xiaonei.js';

define('pages/xiaonei/xiaonei.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaonei/xiaonei"],{1975:function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");o(a("66fd"));var e=o(a("52fd"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"46a0":function(t,e,a){"use strict";a.r(e);var o=a("98a1"),n=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e["default"]=n.a},"52fd":function(t,e,a){"use strict";a.r(e);var o=a("c1ba"),n=a("46a0");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("89f9");var i=a("2877"),u=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"89f9":function(t,e,a){"use strict";var o=a("d78f"),n=a.n(o);n.a},"98a1":function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="",s=0,i=0,u=a("d445"),r={data:function(){return{commenting:!1,aAcolor:"cyan",authorLvl:0,imgList:[],placeHolder:"输入评论",CurrentUserAvt:"",time:"",CurrentName:"",author:"",avtUrl:"",date:"",width:0,height:0,loopht:0,desht:0,name:"",des:"",price:0,currency:"¥",loopimgs1:[],sliderht:0,botht:0,botbutwd:0,botbutht:0,botbutedge:0,comments:[],postid:"",aid:"",commentInput:"",sttOid:""}},components:{},props:{},onLoad:function(){var e=this;n=getApp().globalData.var1,this.updateTuanInfoFromDB();var a=this;console.log(t(n," at pages\\xiaonei\\xiaonei.vue:145")),wx.getSystemInfo({success:function(t){s=t.windowWidth,i=t.windowHeight}}),this.setData({width:s,height:i-50,loopht:.6*i,desht:.28*s,sliderht:i-.4*s*.4,botht:.4*s*.4,botbutwd:.4*s,botbutht:.4*s*.4,botbutedge:.05*s});var r=n;o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{target:"xiaonei",iddd:r,mode:1},success:function(n){console.log(t(n.result[0]," at pages\\xiaonei\\xiaonei.vue:174")),e.setData({comments:n.result[0].comments,des:n.result[0].desc,loopimgs1:n.result[0].imgs,date:n.result[0].date,avtUrl:n.result[0].avatarUrl,author:n.result[0].author,name:n.result[0].title,aid:n.result[0].authorOID}),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getgroupuser",method:"POST",data:{openId:a.aid},success:function(t){var e=u.lvlFromExp(t.data.Items[0].exp).resLvl,o="";o=e<=2?"#cfcfcf":e<=4?"#67bf75":e<=6?"#7dc0ff":e<=8?"#7705a1":e<=10?"#f5b433":"#ff6e6e",a.setData({authorLvl:e,aAcolor:o})}});for(var s=a.comments,i=new Set([]),r=0;r<s.length;r++)i.add(s[r][4]);i=Array.from(i);for(r=0;r<i.length;r++)console.log(t(i[r]," at pages\\xiaonei\\xiaonei.vue:213")),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getgroupuser",method:"POST",data:{openId:i[r]},success:function(t){for(var e=0;e<s.length;e++)t.data.Items[0].open_Id==s[e][4]&&(s[e].push(u.lvlFromExp(t.data.Items[0].exp).resLvl),s[e][5]<=2?s[e].push("#cfcfcf"):s[e][5]<=4?s[e].push("#67bf75"):s[e][5]<=6?s[e].push("#7dc0ff"):s[e][5]<=8?s[e].push("#7705a1"):s[e][5]<=10?s[e].push("#f5b433"):s[e].push("#ff6e6e"));a.setData({comments:s})}})}})},methods:{updateTuanInfoFromDB:function(){var t;try{t=wx.getStorageSync("itemInfo")}catch(e){}this.setData({name:t.name,des:t.description,price:t.price,loopimgs1:t.img,currency:t.currency})},previewImg:function(t){var e=t.currentTarget.dataset.src,a=t.currentTarget.dataset.list;wx.previewImage({current:e,urls:a})},buynow:function(){wx.navigateTo({url:"../payment/payment"})},atc:function(){},setpos:function(t){this.setData({commentInput:t.detail.value})},clickComment:function(e){console.log(t(e.currentTarget.dataset.naviparam," at pages\\xiaonei\\xiaonei.vue:289"));var a=e.currentTarget.dataset.naviparam,o=this.comments[a][1];this.setData({placeHolder:"@"+o+" ",commentInput:"@"+o+" ",sttOid:this.comments[a]}),console.log(t(o," at pages\\xiaonei\\xiaonei.vue:297"))},upcomment:function(e){if(!this.commenting){this.setData({commenting:!0}),console.log(t(e," at pages\\xiaonei\\xiaonei.vue:304"));var a=this,s=new Date;console.log(t(s.getHours().toString()+":"+s.getMinutes()," at pages\\xiaonei\\xiaonei.vue:307")),console.log(t(s.getMonth()+1+"/"+s.getDate().toString()+"/"+s.getFullYear().toString()," at pages\\xiaonei\\xiaonei.vue:308"));var i=(s.getMonth()+1).toString()+"/"+s.getDate().toString()+"/"+s.getFullYear().toString(),r=s.getHours().toString()+":"+s.getMinutes(),c=u.formatTime2(new Date),l=(c.month,c.day,c.year,e.detail.userInfo.avatarUrl),m=e.detail.userInfo.nickName,d=getApp().globalData.cmulid;a.setData({CurrentUserAvt:l,CurrentName:m}),console.log(t(this.commentInput.charAt(0)," at pages\\xiaonei\\xiaonei.vue:321"));var g=this.commentInput;if(g.length>=25&&(g=g.substring(0,25)+"..."),"@"==this.commentInput.charAt(0)){var f=this.placeHolder;console.log(t(f," at pages\\xiaonei\\xiaonei.vue:332"));var h=this.sttOid[4];console.log(t(h," at pages\\xiaonei\\xiaonei.vue:335")),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adduserinfo",method:"POST",data:{mode:3,fromId:h,text:g,author:m,authorImg:l,time:i+" "+r,comuId:n},success:function(e){console.log(t(e," at pages\\xiaonei\\xiaonei.vue:349"))}})}else{h=this.aid;o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/adduserinfo",method:"POST",data:{mode:3,fromId:h,text:g,author:m,authorImg:l,time:i+" "+r,comuId:n},success:function(e){console.log(t(e," at pages\\xiaonei\\xiaonei.vue:368"))}})}o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postcomment",method:"POST",data:{id:n,comment:this.commentInput,name:e.detail.userInfo.nickName,avt:e.detail.userInfo.avatarUrl,date:i+" "+r},success:function(e){o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/postpost",method:"POST",data:{mode:4,cid:d},success:function(e){console.log(t("cc succ"," at pages\\xiaonei\\xiaonei.vue:393"))}}),console.log(t("succ"," at pages\\xiaonei\\xiaonei.vue:396")),u.updateUserDateRecord(3),a.setData({commenting:!1})},fail:function(e){console.log(t(e," at pages\\xiaonei\\xiaonei.vue:403"))}});var p=this.comments,v=[this.commentInput,this.CurrentName,this.CurrentUserAvt,this.date];p.push(v),this.setData({comments:p})}},setData:function(t,e){var a,o,n=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),a=t[e],o=n.$data,s.forEach(function(t,e){e+1==s.length?n.$set(o,t,a):o[t]||n.$set(o,t,{}),o=o[t]})}),e&&e()}}};e.default=r}).call(this,a("0de9")["default"],a("6e42")["default"])},c1ba:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},d78f:function(t,e,a){}},[["1975","common/runtime","common/vendor"]]]);
});
require('pages/xiaonei/xiaonei.js');
__wxRoute = 'pages/postmanage/postmanage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/postmanage/postmanage.js';

define('pages/postmanage/postmanage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/postmanage/postmanage"],{"1e18":function(t,e,a){},"3f2b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return o})},"41a9":function(t,e,a){"use strict";var s=a("1e18"),o=a.n(s);o.a},"451f":function(t,e,a){"use strict";a.r(e);var s=a("bb3b"),o=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=o.a},bb3b:function(t,e,a){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=0,n=0,u=!0,c=a("d445"),i={data:function(){return{posts:[],cd:!0,community:""}},components:{},props:{},onLoad:function(){this.pullUserPost()},methods:{recordStart:function(e){o=e.touches[0].clientX,n=this.posts[e.currentTarget.dataset.index].offsetX,console.log(t("start x ",o," at pages\\postmanage\\postmanage.vue:63"))},recordMove:function(e){console.log(t(e.currentTarget.dataset.index," at pages\\postmanage\\postmanage.vue:66"));var a=this.posts,s=a[e.currentTarget.dataset.index],u=e.touches[0].clientX,c=o-u;console.log(t("move x ",c," at pages\\postmanage\\postmanage.vue:71"));var i=n-c;i>=-80&&i<=0&&(s.offsetX=i),this.setData({posts:a})},recordEnd:function(e){var a=this.posts,s=a[e.currentTarget.dataset.index];console.log(t("end x ",s.offsetX," at pages\\postmanage\\postmanage.vue:85")),s.offsetX<-40?s.offsetX=-80:s.offsetX=0,this.setData({posts:a})},tapComu:function(e){var a=this,o=e.currentTarget.dataset.index;getApp().globalData.var1=e.currentTarget.dataset.commuid;var n=e.currentTarget.dataset.commulistid;s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter",method:"POST",data:{postId:n,mode:2},success:function(e){var s=a.posts;console.log(t(s," at pages\\postmanage\\postmanage.vue:114")),s[o].vc++,a.setData({community:s})}}),wx.navigateTo({url:"../xiaonei/xiaonei"})},deletePost:function(e){console.log(t(e," at pages\\postmanage\\postmanage.vue:127"));var a=this;if(u){u=!1,this.setData({cd:!1});var o=e.currentTarget.dataset.targetind,n=this.posts[e.currentTarget.dataset.targetind]._id,i=this.posts[e.currentTarget.dataset.targetind].comDir,r=(a=this,this.posts[e.currentTarget.dataset.targetind].img);s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/deletewithid",method:"POST",data:{dbname:"xiaonei",id:i},success:function(e){s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/deletewithid",method:"POST",data:{dbname:"commuList",id:n},success:function(e){console.log(t("Succc"," at pages\\postmanage\\postmanage.vue:156")),c.cloudRemove(r);var s=a.posts;s.splice(o,1),a.setData({posts:s}),u=!0,a.setData({cd:!0})},fail:function(e){console.log(t("disanceng"," at pages\\postmanage\\postmanage.vue:169")),console.log(t(e," at pages\\postmanage\\postmanage.vue:170"))}})},fail:function(e){console.log(t(e," at pages\\postmanage\\postmanage.vue:175"))}})}},pullUserPost:function(){console.log(t("loading user posts"," at pages\\postmanage\\postmanage.vue:182"));var e=this;s.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/managepost",method:"POST",data:{mode:2,dbname:"commuList"},success:function(a){console.log(t(a.data.Items," at pages\\postmanage\\postmanage.vue:192")),e.setData({posts:a.data.Items})},fail:function(e){console.log(t("fail"," at pages\\postmanage\\postmanage.vue:198")),console.log(t(e," at pages\\postmanage\\postmanage.vue:199"))}})},setData:function(t,e){var a,s,o=this,n=[];Object.keys(t).forEach(function(e){n=e.split("."),a=t[e],s=o.$data,n.forEach(function(t,e){e+1==n.length?o.$set(s,t,a):s[t]||o.$set(s,t,{}),s=s[t]})}),e&&e()}}};e.default=i}).call(this,a("0de9")["default"],a("6e42")["default"])},c00f:function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");s(a("66fd"));var e=s(a("d3e0"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},d3e0:function(t,e,a){"use strict";a.r(e);var s=a("3f2b"),o=a("451f");for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);a("41a9");var u=a("2877"),c=Object(u["a"])(o["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports}},[["c00f","common/runtime","common/vendor"]]]);
});
require('pages/postmanage/postmanage.js');
__wxRoute = 'pages/ershou/ershou';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ershou/ershou.js';

define('pages/ershou/ershou.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ershou/ershou"],{3384:function(t,e,a){"use strict";(function(t){a("81c2"),a("921b");o(a("66fd"));var e=o(a("a6d2"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},a6d2:function(t,e,a){"use strict";a.r(e);var o=a("b1b5"),n=a("ddb2");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("eef5");var c=a("2877"),u=Object(c["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},b1b5:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},c1c3:function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("d445"),s=getApp().globalData,c=0,u=0,r=0,i={data:function(){return{showtab:0,tabnav:{tabnum:6,tabitem:[{id:0,text:"日常用品",content:"secondHandDailyInfo"},{id:1,text:"二手汽车",content:"secondHandCarInfo"},{id:2,text:"家具生活",content:"secondHandFurnInfo"},{id:3,text:"电子产品",content:"secondHandElcInfo"},{id:4,text:"课本书籍",content:"secondHandBookInfo"},{id:5,text:"其他",content:"secondHandOthInfo"}]},index1:0,avlLocations:["Columbus","D.C."],signed:!1,opaci:0,comMenu:!1,anncmt:"广告位，招租",midPos:0,community:0,naviParam:0,ratio:0,secondHandCarInfo:[],secondHandDailyInfo:[],secondHandFurnInfo:[],secondHandOthInfo:[],secondHandElcInfo:[],secondHandBookInfo:[],secondHandCarInfood:[],secondHandDailyInfood:[],secondHandFurnInfood:[],secondHandOthInfood:[],secondHandElcInfood:[],secondHandBookInfood:[],totalList:[],currentTab:0,currentTab1:0,upperTh:0,filterStyle:"",scrollheight:0,redirectorSize:0,loopimgs1:[],redSpace:0,loopadsHT:0,btnLineW:0,winWidth:0,winheight:0,textboxWD:0,textboxHT:0,searchbtnWD:0,searchbtnHT:0,searchAreaWD:0,searchAreaHT:0,motto:"Hello World",userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),upAvi:!0,avtUrl:"",author:"",communityod:"",locationIconSize:"",locationIconSpace:"",locationTextLeft:"",searchbarLength:"",searchIconSpace:"",searchBarLength:"",coll:""}},components:{},props:{},onLoad:function(){getApp().globalData.var1,wx.getSystemInfo({success:function(t){c=t.windowWidth,u=t.windowHeight}}),this.initialize();wx.getSystemInfoSync()},onShow:function(){r>=2&&(this.initialize(),console.log(t("call onshow"," at pages\\ershou\\ershou.vue:254")))},onPullDownRefresh:function(){r>=2&&(this.initialize(),console.log(t("call pulldown"," at pages\\ershou\\ershou.vue:260")))},methods:{stopSwiper:function(){return!1},bindViewTap:function(){wx.navigateTo({url:"../logs/logs"})},comMenuRedirect:function(t){wx.setStorageSync("postR",t.currentTarget.dataset.postr),wx.navigateTo({url:"../pubReq/pubReq"})},comMenuRedirectPost:function(t){wx.setStorageSync("postR",t.currentTarget.dataset.postr),wx.navigateTo({url:"../pubPost/pubPost"})},tapComu:function(e){var a=this,n=e.currentTarget.dataset.ind;getApp().globalData.var1=e.currentTarget.dataset.commuid;var c=e.currentTarget.dataset.commulistid;console.log(t(e.currentTarget.dataset.commulistid," at pages\\ershou\\ershou.vue:292")),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter",method:"POST",data:{postId:c,mode:2,openId:s.openId},success:function(t){var e=a.community;e[n].vc++,a.setData({community:e})}}),wx.navigateTo({url:"../xiaonei/xiaonei"})},showMenu:function(){this.setData({comMenu:!this.comMenu})},tapErshou:function(e){console.log(t(e.currentTarget.dataset.naviparam," at pages\\ershou\\ershou.vue:319")),getApp().globalData.var1=e.currentTarget.dataset.naviparam._id,wx.setStorageSync("itemInfo",e.currentTarget.dataset.naviparam),console.log(t(e.currentTarget.dataset.naviparam._id," at pages\\ershou\\ershou.vue:324")),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter",method:"POST",data:{postId:e.currentTarget.dataset.naviparam._id,mode:3,openId:s.openId},success:function(t){}}),wx.navigateTo({url:"../tuan/tuan"})},upVoteComment:function(e){if(this.upAvi){console.log(t(this.upAvi," at pages\\ershou\\ershou.vue:342")),this.setData({upAvi:!1});var a=this,n=e.currentTarget.dataset.commulist,c=e.currentTarget.dataset.ind;console.log(t(e.currentTarget.dataset.commulist," at pages\\ershou\\ershou.vue:349")),wx.cloud.callFunction({name:"login",success:function(e){console.log(t(n.upvoter," at pages\\ershou\\ershou.vue:353"));var u=e.result.openid;n.upvoter.includes(e.result.openid)?(console.log(t("already upvoted"," at pages\\ershou\\ershou.vue:380")),a.setData({upAvi:!0})):o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/updateupvoter",method:"POST",data:{postId:n._id,mode:1,openId:s.openId},success:function(t){var e=a.community;e[c].upC++,e[c].upvoter.push(u),a.setData({community:e,communityod:e}),a.setData({upAvi:!0})}})}})}},updateAnn:function(){},bindPickerChange1:function(e){console.log(t(e.detail.value," at pages\\ershou\\ershou.vue:398")),this.setData({index1:e.detail.value})},handleSearchInput:function(e){var a=e.detail.value,o=n.searchByTagsCom(this.communityod,a);console.log(t(o," at pages\\ershou\\ershou.vue:406")),this.setData({community:o}),o=n.searchByTagsSH(this.secondHandCarInfood,a),console.log(t(o," at pages\\ershou\\ershou.vue:411")),this.setData({secondHandCarInfo:o}),o=n.searchByTagsSH(this.secondHandDailyInfood,a),console.log(t(o," at pages\\ershou\\ershou.vue:416")),this.setData({secondHandDailyInfo:o}),o=n.searchByTagsSH(this.secondHandFurnInfood,a),console.log(t(o," at pages\\ershou\\ershou.vue:421")),this.setData({secondHandFurnInfo:o}),o=n.searchByTagsSH(this.secondHandElcInfood,a),console.log(t(o," at pages\\ershou\\ershou.vue:426")),this.setData({secondHandElcInfo:o}),o=n.searchByTagsSH(this.secondHandBookInfood,a),console.log(t(o," at pages\\ershou\\ershou.vue:431")),this.setData({secondHandBookInfo:o}),o=n.searchByTagsSH(this.secondHandOthInfood,a),console.log(t(o," at pages\\ershou\\ershou.vue:436")),this.setData({secondHandOthInfo:o});var s=[];s.push(this.secondHandDailyInfo),s.push(this.secondHandCarInfo),s.push(this.secondHandFurnInfo),s.push(this.secondHandElcInfo),s.push(this.secondHandBookInfo),s.push(this.secondHandOthInfo),this.setData({totalList:s})},handleTagSearch:function(e){var a=[];a=e.split(";"),0==a[a.length-1].localeCompare("")&&a.pop(),console.log(t(a," at pages\\ershou\\ershou.vue:459"));var o=n.searchByTags(this.communityod,a);console.log(t(o," at pages\\ershou\\ershou.vue:461")),this.setData({community:o})},initialize:function(){this.updateAnn();var e=[],a=c/750;a*=138;var s=this;o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getfromdb",method:"POST",data:{target:"commuList",iddd:"",mode:3},success:function(t){r++,s.setData({community:t.data.Items,communityod:t.data.Items});for(var e=t.data.Items,a=0;a<s.community.length;a++)o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getgroupuser",method:"POST",data:{openId:s.community[a].oid},success:function(t){if(t.data.Items.length<0){for(var a=0;a<e.length;a++)e[a].oid==t.data.Items[0].open_Id&&(e[a].lvl=n.lvlFromExp(t.data.Items[0].exp).resLvl);s.setData({community:e,communityod:e})}}})}}),this.setData({midPos:325-(c-30)/6+50,btnLineW:u/667*60+10,winWidth:c,winheight:u,loopadsHT:.25*u,searchbtnHT:.07*u-10,textboxHT:.07*u-10,textboxWD:c-.07*u+10-15,searchbtnWD:.07*u-10,searchAreaWD:c,searchAreaHT:.07*u,loopimgs1:e,redirectorSize:(c-30)/3,redSpace:c/2-(c-60)/6,ratio:u-a,locationIconSize:.04*u*.8,locationIconSpace:.04*u*.1,locationTextLeft:.04*u*1.1,searchbarLength:.98*(.8*c-.04*u),searchIconSpace:.98*(.8*c-.04*u)-.04*u*.85,searchBarLength:.98*(.8*c-.04*u)-.04*u*.9}),this.setData({upperTh:this.loopadsHT+this.redirectorSize+this.loopadsHT+18,filterStyle:"width: "+this.winWidth.toString()+"px; height: "+(this.loopadsHT/2).toString()+"px;",scrollheight:this.winheight-this.searchbtnHT}),o.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/getdata",method:"POST",data:{dbname:"secondHand"}}).then(function(e){e=e[1],wx.stopPullDownRefresh(),console.log(t(e.data.Items," at pages\\ershou\\ershou.vue:557")),r++;for(var a=e.data.Items,o=[],n=[],c=[],u=[],i=[],d=[],h=0;h<a.length;h++)console.log(t(a[h].cat," at pages\\ershou\\ershou.vue:568")),"日常用品"==a[h].cat?o.push(a[h]):"二手汽车"==a[h].cat?n.push(a[h]):"家具生活"==a[h].cat?c.push(a[h]):"其他"==a[h].cat?d.push(a[h]):"电子产品"==a[h].cat?u.push(a[h]):"课本书籍"==a[h].cat&&i.push(a[h]);s.setData({secondHandDailyInfo:o,secondHandCarInfo:n,secondHandFurnInfo:c,secondHandElcInfo:u,secondHandBookInfo:i,secondHandOthInfo:d,secondHandDailyInfood:o,secondHandCarInfood:n,secondHandFurnInfood:c,secondHandElcInfood:u,secondHandBookInfood:i,secondHandOthInfood:d});var l=[];l.push(o),l.push(n),l.push(c),l.push(u),l.push(i),l.push(d),console.log(t(l[0][0]," at pages\\ershou\\ershou.vue:605")),l[0].push({img:["http://i2.hdslb.com/bfs/archive/ad24814ab2ba40487b1c3d4c2d6ef8bab9272e78.jpg"],currency:"$",authorOID:"GG",name:"山东菏泽曹县",upCount:0,vc:10,authorName:"GGjd",date:"10/6/2019 22:49",cat:"日常用品",_id:"f885cb355d9aa7c70ca5adc63196db26",authorAva:"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep5OvswlSNGsENwG6cXIOhQUaCXZv84ibxOdGzOsXPPTSnzsYOeXOp3MicD8y5fk9zLq1Els8VSgR1w/132",description:"牛逼，666，我的宝贝",price:"666",position:"43214",tags:[]}),s.setData({totalList:l})})},clickTab:function(t){var e=this;if(this.currentTab===t.target.dataset.current)return!1;e.setData({currentTab:t.target.dataset.current})},changeTab:function(t){this.clickTab1({target:{dataset:{current1:t.detail.current}}})},clickTab1:function(t){var e=this,a=t.target.dataset.current1;if(this.currentTab1===a)return!1;e.setData({showtab:a,currentTab1:a})},getUserInfo:function(t){getApp().globalData.userInfo=t.detail.userInfo,this.setData({userInfo:t.detail.userInfo,hasUserInfo:!0})},setData:function(t,e){var a,o,n=this,s=[];Object.keys(t).forEach(function(e){s=e.split("."),a=t[e],o=n.$data,s.forEach(function(t,e){e+1==s.length?n.$set(o,t,a):o[t]||n.$set(o,t,{}),o=o[t]})}),e&&e()}}};e.default=i}).call(this,a("0de9")["default"],a("6e42")["default"])},ddb2:function(t,e,a){"use strict";a.r(e);var o=a("c1c3"),n=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e["default"]=n.a},e988:function(t,e,a){},eef5:function(t,e,a){"use strict";var o=a("e988"),n=a.n(o);n.a}},[["3384","common/runtime","common/vendor"]]]);
});
require('pages/ershou/ershou.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"05c3":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{userName:"",userCode:"",clicked:!1}},components:{},props:{},onLoad:function(){console.log(t(this.$data.userName," at pages\\login\\login.vue:31"))},methods:{onClickSignin:function(){var e=this;if(!this.$data.userName||!this.$data.userName)return n.showToast({title:"请输入用户名或密码",icon:"none",position:"bottom"}),!1;this.$data.clicked||(this.setData({clicked:!0}),n.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/checkusercred",method:"POST",data:{userName:this.$data.userName,userCode:this.$data.userCode},success:function(o){console.log(t(o," at pages\\login\\login.vue:57")),0==o.data.localeCompare("Nope!")?(n.showToast({title:"用户名密码错误",icon:"none",position:"bottom"}),e.setData({clicked:!1})):(n.showToast({title:"登陆成功",icon:"none",position:"bottom"}),e.setData({clicked:!1}),n.navigateTo({url:"../userInfo/userInfo"}))}}))},setData:function(t,e){var n,o,a=this,i=[];Object.keys(t).forEach(function(e){i=e.split("."),n=t[e],o=a.$data,i.forEach(function(t,e){e+1==i.length?a.$set(o,t,n):o[t]||a.$set(o,t,{}),o=o[t]})}),e&&e()}}};e.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},"09e0":function(t,e,n){"use strict";var o=n("22d9"),a=n.n(o);a.a},"22d9":function(t,e,n){},"7ff9":function(t,e,n){"use strict";n.r(e);var o=n("05c3"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},a166:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},fa0f:function(t,e,n){"use strict";(function(t){n("81c2"),n("921b");o(n("66fd"));var e=o(n("ff6e"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ff6e:function(t,e,n){"use strict";n.r(e);var o=n("a166"),a=n("7ff9");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("09e0");var s=n("2877"),u=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports}},[["fa0f","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"5a94":function(e,t,a){"use strict";a.r(t);var r=a("72ea"),n=a("637d");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("88c3");var s=a("2877"),i=Object(s["a"])(n["default"],r["a"],r["b"],!1,null,null,null);t["default"]=i.exports},"637d":function(e,t,a){"use strict";a.r(t);var r=a("6907"),n=a.n(r);for(var o in r)"default"!==o&&function(e){a.d(t,e,function(){return r[e]})}(o);t["default"]=n.a},6907:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{userName:"",userCode:"",userCodeConfirm:"",clicked:!1}},components:{},props:{},onLoad:function(){console.log(e(this.$data.userName," at pages\\register\\register.vue:32"))},methods:{onClickRegi:function(){var t=this;this.$data.clicked||(this.$data.userCodeConfirm.length<6?console.log(e("密码需要至少6位"," at pages\\register\\register.vue:40")):0==this.$data.userCodeConfirm.localeCompare(this.$data.userCode)?(console.log(e("密码符合"," at pages\\register\\register.vue:45")),this.setData({clicked:!0}),a.request({url:"https://lej4kht0ig.execute-api.us-east-2.amazonaws.com/CLF/reginewuser",method:"POST",data:{userName:this.$data.userName,userCode:this.$data.userCodeConfirm},success:function(r){0==r.data.localeCompare("Nope!")?console.log(e("用户名已被使用"," at pages\\register\\register.vue:60")):(console.log(e("注册成功"," at pages\\register\\register.vue:63")),a.navigateTo({url:"../login/login"})),t.setData({clicked:!1})}})):console.log(e("密码不和"," at pages\\register\\register.vue:74")))},setData:function(e,t){var a,r,n=this,o=[];Object.keys(e).forEach(function(t){o=t.split("."),a=e[t],r=n.$data,o.forEach(function(e,t){t+1==o.length?n.$set(r,e,a):r[e]||n.$set(r,e,{}),r=r[e]})}),t&&t()}}};t.default=r}).call(this,a("0de9")["default"],a("6e42")["default"])},"72ea":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n})},"88c3":function(e,t,a){"use strict";var r=a("d9ed"),n=a.n(r);n.a},d85d:function(e,t,a){"use strict";(function(e){a("81c2"),a("921b");r(a("66fd"));var t=r(a("5a94"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d9ed:function(e,t,a){}},[["d85d","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

