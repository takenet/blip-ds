var __extends=this&&this.__extends||function(){var t=function(e,r){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r))t[r]=e[r]};return t(e,r)};return function(e,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __makeTemplateObject=this&&this.__makeTemplateObject||function(t,e){if(Object.defineProperty){Object.defineProperty(t,"raw",{value:e})}else{t.raw=e}return t};var __assign=this&&this.__assign||function(){__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))t[i]=e[i]}return t};return __assign.apply(this,arguments)};var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{s(n.next(t))}catch(t){a(t)}}function u(t){try{s(n["throw"](t))}catch(t){a(t)}}function s(t){t.done?r(t.value):i(t.value).then(o,u)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return o.next=u(0),o["throw"]=u(1),o["return"]=u(2),typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return s([t,e])}}function s(u){if(n)throw new TypeError("Generator is already executing.");while(o&&(o=0,u[0]&&(r=0)),r)try{if(n=1,i&&(a=u[0]&2?i["return"]:u[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;if(i=0,a)u=[u[0]&2,a.value];switch(u[0]){case 0:case 1:a=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){r.label=u[1];break}if(u[0]===6&&r.label<a[1]){r.label=a[1];a=u;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(u);break}if(a[2])r.ops.pop();r.trys.pop();continue}u=e.call(t,r)}catch(t){u=[6,t];i=0}finally{n=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __rest=this&&this.__rest||function(t,e){var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0)r[n]=t[n];if(t!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++){if(e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i]))r[n[i]]=t[n[i]]}return r};var __spreadArray=this&&this.__spreadArray||function(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,a;n<i;n++){if(a||!(n in e)){if(!a)a=Array.prototype.slice.call(e,0,n);a[n]=e[n]}}return t.concat(a||Array.prototype.slice.call(e))};import{r as registerInstance,c as createEvent,h as h$1,H as Host,g as getElement}from"./index-B3G05Lxx.js";import{w as warnOnce}from"./deprecation-B4L0JRQZ.js";import{U as UaiFormControl}from"./uai-form-control-BkRP7pRQ.js";
//#region \0rolldown/runtime.js
var __defProp=Object.defineProperty;var __exportAll=function(t,e){var r={};for(var n in t)__defProp(r,n,{get:t[n],enumerable:true});__defProp(r,Symbol.toStringTag,{value:"Module"});return r};
// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function OrderedMap(t){this.content=t}OrderedMap.prototype={constructor:OrderedMap,find:function(t){for(var e=0;e<this.content.length;e+=2)if(this.content[e]===t)return e;return-1},
// :: (string) → ?any
// Retrieve the value stored under `key`, or return undefined when
// no such key exists.
get:function(t){var e=this.find(t);return e==-1?undefined:this.content[e+1]},
// :: (string, any, ?string) → OrderedMap
// Create a new map by replacing the value of `key` with a new
// value, or adding a binding to the end of the map. If `newKey` is
// given, the key of the binding will be replaced with that key.
update:function(t,e,r){var n=r&&r!=t?this.remove(r):this;var i=n.find(t),a=n.content.slice();if(i==-1){a.push(r||t,e)}else{a[i+1]=e;if(r)a[i]=r}return new OrderedMap(a)},
// :: (string) → OrderedMap
// Return a map with the given key removed, if it existed.
remove:function(t){var e=this.find(t);if(e==-1)return this;var r=this.content.slice();r.splice(e,2);return new OrderedMap(r)},
// :: (string, any) → OrderedMap
// Add a new key to the start of the map.
addToStart:function(t,e){return new OrderedMap([t,e].concat(this.remove(t).content))},
// :: (string, any) → OrderedMap
// Add a new key to the end of the map.
addToEnd:function(t,e){var r=this.remove(t).content.slice();r.push(t,e);return new OrderedMap(r)},
// :: (string, string, any) → OrderedMap
// Add a key after the given key. If `place` is not found, the new
// key is added to the end.
addBefore:function(t,e,r){var n=this.remove(e),i=n.content.slice();var a=n.find(t);i.splice(a==-1?i.length:a,0,e,r);return new OrderedMap(i)},
// :: ((key: string, value: any))
// Call the given function for each key/value pair in the map, in
// order.
forEach:function(t){for(var e=0;e<this.content.length;e+=2)t(this.content[e],this.content[e+1])},
// :: (union<Object, OrderedMap>) → OrderedMap
// Create a new map by prepending the keys in this map that don't
// appear in `map` before the keys in `map`.
prepend:function(t){t=OrderedMap.from(t);if(!t.size)return this;return new OrderedMap(t.content.concat(this.subtract(t).content))},
// :: (union<Object, OrderedMap>) → OrderedMap
// Create a new map by appending the keys in this map that don't
// appear in `map` after the keys in `map`.
append:function(t){t=OrderedMap.from(t);if(!t.size)return this;return new OrderedMap(this.subtract(t).content.concat(t.content))},
// :: (union<Object, OrderedMap>) → OrderedMap
// Create a map containing all the keys in this map that don't
// appear in `map`.
subtract:function(t){var e=this;t=OrderedMap.from(t);for(var r=0;r<t.content.length;r+=2)e=e.remove(t.content[r]);return e},
// :: () → Object
// Turn ordered map into a plain object.
toObject:function(){var t={};this.forEach((function(e,r){t[e]=r}));return t},
// :: number
// The amount of keys in this map.
get size(){return this.content.length>>1}};
// :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.
OrderedMap.from=function(t){if(t instanceof OrderedMap)return t;var e=[];if(t)for(var r in t)e.push(r,t[r]);return new OrderedMap(e)};function findDiffStart(t,e,r){for(var n=0;;n++){if(n==t.childCount||n==e.childCount)return t.childCount==e.childCount?null:r;var i=t.child(n),a=e.child(n);if(i==a){r+=i.nodeSize;continue}if(!i.sameMarkup(a))return r;if(i.isText&&i.text!=a.text){var o=i.text,u=a.text,s=0;for(;o[s]==u[s];s++)r++;if(s&&s<o.length&&s<u.length&&surrogateHigh(o.charCodeAt(s-1))&&surrogateLow(o.charCodeAt(s)))r--;return r}if(i.content.size||a.content.size){var f=findDiffStart(i.content,a.content,r+1);if(f!=null)return f}r+=i.nodeSize}}function findDiffEnd(t,e,r,n){for(var i=t.childCount,a=e.childCount;;){if(i==0||a==0)return i==a?null:{a:r,b:n};var o=t.child(--i),u=e.child(--a),s=o.nodeSize;if(o==u){r-=s;n-=s;continue}if(!o.sameMarkup(u))return{a:r,b:n};if(o.isText&&o.text!=u.text){var f=o.text,l=u.text,c=f.length,v=l.length;while(c>0&&v>0&&f[c-1]==l[v-1]){c--;v--;r--;n--}if(c&&v&&c<f.length&&surrogateHigh(f.charCodeAt(c-1))&&surrogateLow(f.charCodeAt(c))){r++;n++}return{a:r,b:n}}if(o.content.size||u.content.size){var h=findDiffEnd(o.content,u.content,r-1,n-1);if(h)return h}r-=s;n-=s}}function surrogateLow(t){return t>=56320&&t<57344}function surrogateHigh(t){return t>=55296&&t<56320}
/**
A fragment represents a node's collection of child nodes.

Like nodes, fragments are persistent data structures, and you
should not mutate them or their content. Rather, you create new
instances whenever needed. The API tries to make this easy.
*/var Fragment=/** @class */function(){
/**
    @internal
    */
function t(
/**
    The child nodes in this fragment.
    */
t,e){this.content=t;this.size=e||0;if(e==null)for(var r=0;r<t.length;r++)this.size+=t[r].nodeSize}
/**
    Invoke a callback for all descendant nodes between the given two
    positions (relative to start of this fragment). Doesn't descend
    into a node when the callback returns `false`.
    */t.prototype.nodesBetween=function(t,e,r,n,i){if(n===void 0){n=0}for(var a=0,o=0;o<e;a++){var u=this.content[a],s=o+u.nodeSize;if(s>t&&r(u,n+o,i||null,a)!==false&&u.content.size){var f=o+1;u.nodesBetween(Math.max(0,t-f),Math.min(u.content.size,e-f),r,n+f)}o=s}};
/**
    Call the given callback for every descendant node. `pos` will be
    relative to the start of the fragment. The callback may return
    `false` to prevent traversal of a given node's children.
    */t.prototype.descendants=function(t){this.nodesBetween(0,this.size,t)};
/**
    Extract the text between `from` and `to`. See the same method on
    [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
    */t.prototype.textBetween=function(t,e,r,n){var i="",a=true;this.nodesBetween(t,e,(function(o,u){var s=o.isText?o.text.slice(Math.max(t,u)-u,e-u):!o.isLeaf?"":n?typeof n==="function"?n(o):n:o.type.spec.leafText?o.type.spec.leafText(o):"";if(o.isBlock&&(o.isLeaf&&s||o.isTextblock)&&r){if(a)a=false;else i+=r}i+=s}),0);return i};
/**
    Create a new fragment containing the combined content of this
    fragment and the other.
    */t.prototype.append=function(e){if(!e.size)return this;if(!this.size)return e;var r=this.lastChild,n=e.firstChild,i=this.content.slice(),a=0;if(r.isText&&r.sameMarkup(n)){i[i.length-1]=r.withText(r.text+n.text);a=1}for(;a<e.content.length;a++)i.push(e.content[a]);return new t(i,this.size+e.size)};
/**
    Cut out the sub-fragment between the two given positions.
    */t.prototype.cut=function(e,r){if(r===void 0){r=this.size}if(e==0&&r==this.size)return this;var n=[],i=0;if(r>e)for(var a=0,o=0;o<r;a++){var u=this.content[a],s=o+u.nodeSize;if(s>e){if(o<e||s>r){if(u.isText)u=u.cut(Math.max(0,e-o),Math.min(u.text.length,r-o));else u=u.cut(Math.max(0,e-o-1),Math.min(u.content.size,r-o-1))}n.push(u);i+=u.nodeSize}o=s}return new t(n,i)};
/**
    @internal
    */t.prototype.cutByIndex=function(e,r){if(e==r)return t.empty;if(e==0&&r==this.content.length)return this;return new t(this.content.slice(e,r))};
/**
    Create a new fragment in which the node at the given index is
    replaced by the given node.
    */t.prototype.replaceChild=function(e,r){var n=this.content[e];if(n==r)return this;var i=this.content.slice();var a=this.size+r.nodeSize-n.nodeSize;i[e]=r;return new t(i,a)};
/**
    Create a new fragment by prepending the given node to this
    fragment.
    */t.prototype.addToStart=function(e){return new t([e].concat(this.content),this.size+e.nodeSize)};
/**
    Create a new fragment by appending the given node to this
    fragment.
    */t.prototype.addToEnd=function(e){return new t(this.content.concat(e),this.size+e.nodeSize)};
/**
    Compare this fragment to another one.
    */t.prototype.eq=function(t){if(this.content.length!=t.content.length)return false;for(var e=0;e<this.content.length;e++)if(!this.content[e].eq(t.content[e]))return false;return true};Object.defineProperty(t.prototype,"firstChild",{
/**
        The first child of the fragment, or `null` if it is empty.
        */
get:function(){return this.content.length?this.content[0]:null},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"lastChild",{
/**
        The last child of the fragment, or `null` if it is empty.
        */
get:function(){return this.content.length?this.content[this.content.length-1]:null},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"childCount",{
/**
        The number of child nodes in this fragment.
        */
get:function(){return this.content.length},enumerable:false,configurable:true});
/**
    Get the child node at the given index. Raise an error when the
    index is out of range.
    */t.prototype.child=function(t){var e=this.content[t];if(!e)throw new RangeError("Index "+t+" out of range for "+this);return e};
/**
    Get the child node at the given index, if it exists.
    */t.prototype.maybeChild=function(t){return this.content[t]||null};
/**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */t.prototype.forEach=function(t){for(var e=0,r=0;e<this.content.length;e++){var n=this.content[e];t(n,r,e);r+=n.nodeSize}};
/**
    Find the first position at which this fragment and another
    fragment differ, or `null` if they are the same.
    */t.prototype.findDiffStart=function(t,e){if(e===void 0){e=0}return findDiffStart(this,t,e)};
/**
    Find the first position, searching from the end, at which this
    fragment and the given fragment differ, or `null` if they are
    the same. Since this position will not be the same in both
    nodes, an object with two separate positions is returned.
    */t.prototype.findDiffEnd=function(t,e,r){if(e===void 0){e=this.size}if(r===void 0){r=t.size}return findDiffEnd(this,t,e,r)};
/**
    Find the index and inner offset corresponding to a given relative
    position in this fragment. The result object will be reused
    (overwritten) the next time the function is called. @internal
    */t.prototype.findIndex=function(t){if(t==0)return retIndex(0,t);if(t==this.size)return retIndex(this.content.length,t);if(t>this.size||t<0)throw new RangeError("Position ".concat(t," outside of fragment (").concat(this,")"));for(var e=0,r=0;;e++){var n=this.child(e),i=r+n.nodeSize;if(i>=t){if(i==t)return retIndex(e+1,i);return retIndex(e,r)}r=i}};
/**
    Return a debugging string that describes this fragment.
    */t.prototype.toString=function(){return"<"+this.toStringInner()+">"};
/**
    @internal
    */t.prototype.toStringInner=function(){return this.content.join(", ")};
/**
    Create a JSON-serializeable representation of this fragment.
    */t.prototype.toJSON=function(){return this.content.length?this.content.map((function(t){return t.toJSON()})):null};
/**
    Deserialize a fragment from its JSON representation.
    */t.fromJSON=function(e,r){if(!r)return t.empty;if(!Array.isArray(r))throw new RangeError("Invalid input for Fragment.fromJSON");return t.fromArray(r.map(e.nodeFromJSON))};
/**
    Build a fragment from an array of nodes. Ensures that adjacent
    text nodes with the same marks are joined together.
    */t.fromArray=function(e){if(!e.length)return t.empty;var r,n=0;for(var i=0;i<e.length;i++){var a=e[i];n+=a.nodeSize;if(i&&a.isText&&e[i-1].sameMarkup(a)){if(!r)r=e.slice(0,i);r[r.length-1]=a.withText(r[r.length-1].text+a.text)}else if(r){r.push(a)}}return new t(r||e,n)};
/**
    Create a fragment from something that can be interpreted as a
    set of nodes. For `null`, it returns the empty fragment. For a
    fragment, the fragment itself. For a node or array of nodes, a
    fragment containing those nodes.
    */t.from=function(e){if(!e)return t.empty;if(e instanceof t)return e;if(Array.isArray(e))return this.fromArray(e);if(e.attrs)return new t([e],e.nodeSize);throw new RangeError("Can not convert "+e+" to a Fragment"+(e.nodesBetween?" (looks like multiple versions of prosemirror-model were loaded)":""))};return t}();
/**
An empty fragment. Intended to be reused whenever a node doesn't
contain anything (rather than allocating a new empty fragment for
each leaf node).
*/Fragment.empty=new Fragment([],0);var found={index:0,offset:0};function retIndex(t,e){found.index=t;found.offset=e;return found}function compareDeep(t,e){if(t===e)return true;if(!(t&&typeof t=="object")||!(e&&typeof e=="object"))return false;var r=Array.isArray(t);if(Array.isArray(e)!=r)return false;if(r){if(t.length!=e.length)return false;for(var n=0;n<t.length;n++)if(!compareDeep(t[n],e[n]))return false}else{for(var i in t)if(!(i in e)||!compareDeep(t[i],e[i]))return false;for(var i in e)if(!(i in t))return false}return true}
/**
A mark is a piece of information that can be attached to a node,
such as it being emphasized, in code font, or a link. It has a
type and optionally a set of attributes that provide further
information (such as the target of the link). Marks are created
through a `Schema`, which controls which types exist and which
attributes they have.
*/var Mark$1=/** @class */function(){
/**
    @internal
    */
function t(
/**
    The type of this mark.
    */
t,
/**
    The attributes associated with this mark.
    */
e){this.type=t;this.attrs=e}
/**
    Given a set of marks, create a new set which contains this one as
    well, in the right position. If this mark is already in the set,
    the set itself is returned. If any marks that are set to be
    [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
    those are replaced by this one.
    */t.prototype.addToSet=function(t){var e,r=false;for(var n=0;n<t.length;n++){var i=t[n];if(this.eq(i))return t;if(this.type.excludes(i.type)){if(!e)e=t.slice(0,n)}else if(i.type.excludes(this.type)){return t}else{if(!r&&i.type.rank>this.type.rank){if(!e)e=t.slice(0,n);e.push(this);r=true}if(e)e.push(i)}}if(!e)e=t.slice();if(!r)e.push(this);return e};
/**
    Remove this mark from the given set, returning a new set. If this
    mark is not in the set, the set itself is returned.
    */t.prototype.removeFromSet=function(t){for(var e=0;e<t.length;e++)if(this.eq(t[e]))return t.slice(0,e).concat(t.slice(e+1));return t};
/**
    Test whether this mark is in the given set of marks.
    */t.prototype.isInSet=function(t){for(var e=0;e<t.length;e++)if(this.eq(t[e]))return true;return false};
/**
    Test whether this mark has the same type and attributes as
    another mark.
    */t.prototype.eq=function(t){return this==t||this.type==t.type&&compareDeep(this.attrs,t.attrs)};
/**
    Convert this mark to a JSON-serializeable representation.
    */t.prototype.toJSON=function(){var t={type:this.type.name};for(var e in this.attrs){t.attrs=this.attrs;break}return t};
/**
    Deserialize a mark from JSON.
    */t.fromJSON=function(t,e){if(!e)throw new RangeError("Invalid input for Mark.fromJSON");var r=t.marks[e.type];if(!r)throw new RangeError("There is no mark type ".concat(e.type," in this schema"));var n=r.create(e.attrs);return n};
/**
    Test whether two sets of marks are identical.
    */t.sameSet=function(t,e){if(t==e)return true;if(t.length!=e.length)return false;for(var r=0;r<t.length;r++)if(!t[r].eq(e[r]))return false;return true};
/**
    Create a properly sorted mark set from null, a single mark, or an
    unsorted array of marks.
    */t.setFrom=function(e){if(!e||Array.isArray(e)&&e.length==0)return t.none;if(e instanceof t)return[e];var r=e.slice();r.sort((function(t,e){return t.type.rank-e.type.rank}));return r};return t}();
/**
The empty set of marks.
*/Mark$1.none=[];
/**
Error type raised by [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) when
given an invalid replacement.
*/var ReplaceError=/** @class */function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e}(Error);
/**
A slice represents a piece cut out of a larger document. It
stores not only a fragment, but also the depth up to which nodes on
both side are ‘open’ (cut through).
*/var Slice=/** @class */function(){
/**
    Create a slice. When specifying a non-zero open depth, you must
    make sure that there are nodes of at least that depth at the
    appropriate side of the fragment—i.e. if the fragment is an
    empty paragraph node, `openStart` and `openEnd` can't be greater
    than 1.
    
    It is not necessary for the content of open nodes to conform to
    the schema's content constraints, though it should be a valid
    start/end/middle for such a node, depending on which sides are
    open.
    */
function t(
/**
    The slice's content.
    */
t,
/**
    The open depth at the start of the fragment.
    */
e,
/**
    The open depth at the end.
    */
r){this.content=t;this.openStart=e;this.openEnd=r}Object.defineProperty(t.prototype,"size",{
/**
        The size this slice would add when inserted into a document.
        */
get:function(){return this.content.size-this.openStart-this.openEnd},enumerable:false,configurable:true});
/**
    @internal
    */t.prototype.insertAt=function(e,r){var n=insertInto(this.content,e+this.openStart,r,this.openStart+1,this.openEnd+1);return n&&new t(n,this.openStart,this.openEnd)};
/**
    @internal
    */t.prototype.removeBetween=function(e,r){return new t(removeRange(this.content,e+this.openStart,r+this.openStart),this.openStart,this.openEnd)};
/**
    Tests whether this slice is equal to another slice.
    */t.prototype.eq=function(t){return this.content.eq(t.content)&&this.openStart==t.openStart&&this.openEnd==t.openEnd};
/**
    @internal
    */t.prototype.toString=function(){return this.content+"("+this.openStart+","+this.openEnd+")"};
/**
    Convert a slice to a JSON-serializable representation.
    */t.prototype.toJSON=function(){if(!this.content.size)return null;var t={content:this.content.toJSON()};if(this.openStart>0)t.openStart=this.openStart;if(this.openEnd>0)t.openEnd=this.openEnd;return t};
/**
    Deserialize a slice from its JSON representation.
    */t.fromJSON=function(e,r){if(!r)return t.empty;var n=r.openStart||0,i=r.openEnd||0;if(typeof n!="number"||typeof i!="number")throw new RangeError("Invalid input for Slice.fromJSON");return new t(Fragment.fromJSON(e,r.content),n,i)};
/**
    Create a slice from a fragment by taking the maximum possible
    open value on both side of the fragment.
    */t.maxOpen=function(e,r){if(r===void 0){r=true}var n=0,i=0;for(var a=e.firstChild;a&&!a.isLeaf&&(r||!a.type.spec.isolating);a=a.firstChild)n++;for(var a=e.lastChild;a&&!a.isLeaf&&(r||!a.type.spec.isolating);a=a.lastChild)i++;return new t(e,n,i)};return t}();
/**
The empty slice.
*/Slice.empty=new Slice(Fragment.empty,0,0);function removeRange(t,e,r){var n=t.findIndex(e),i=n.index,a=n.offset,o=t.maybeChild(i);var u=t.findIndex(r),s=u.index,f=u.offset;if(a==e||o.isText){if(f!=r&&!t.child(s).isText)throw new RangeError("Removing non-flat range");return t.cut(0,e).append(t.cut(r))}if(i!=s)throw new RangeError("Removing non-flat range");return t.replaceChild(i,o.copy(removeRange(o.content,e-a-1,r-a-1)))}function insertInto(t,e,r,n,i,a){var o=t.findIndex(e),u=o.index,s=o.offset,f=t.maybeChild(u);if(s==e||f.isText){if(a&&n<=0&&i<=0&&!a.canReplace(u,u,r))return null;return t.cut(0,e).append(r).append(t.cut(e))}var l=insertInto(f.content,e-s-1,r,u==0?n-1:0,u==t.childCount-1?i-1:0,f);return l&&t.replaceChild(u,f.copy(l))}function replace(t,e,r){if(r.openStart>t.depth)throw new ReplaceError("Inserted content deeper than insertion position");if(t.depth-r.openStart!=e.depth-r.openEnd)throw new ReplaceError("Inconsistent open depths");return replaceOuter(t,e,r,0)}function replaceOuter(t,e,r,n){var i=t.index(n),a=t.node(n);if(i==e.index(n)&&n<t.depth-r.openStart){var o=replaceOuter(t,e,r,n+1);return a.copy(a.content.replaceChild(i,o))}else if(!r.content.size){return close(a,replaceTwoWay(t,e,n))}else if(!r.openStart&&!r.openEnd&&t.depth==n&&e.depth==n){// Simple, flat case
var u=t.parent,s=u.content;return close(u,s.cut(0,t.parentOffset).append(r.content).append(s.cut(e.parentOffset)))}else{var f=prepareSliceForReplace(r,t),l=f.start,c=f.end;return close(a,replaceThreeWay(t,l,c,e,n))}}function checkJoin(t,e){if(!e.type.compatibleContent(t.type))throw new ReplaceError("Cannot join "+e.type.name+" onto "+t.type.name)}function joinable$1(t,e,r){var n=t.node(r);checkJoin(n,e.node(r));return n}function addNode(t,e){var r=e.length-1;if(r>=0&&t.isText&&t.sameMarkup(e[r]))e[r]=t.withText(e[r].text+t.text);else e.push(t)}function addRange(t,e,r,n){var i=(e||t).node(r);var a=0,o=e?e.index(r):i.childCount;if(t){a=t.index(r);if(t.depth>r){a++}else if(t.textOffset){addNode(t.nodeAfter,n);a++}}for(var u=a;u<o;u++)addNode(i.child(u),n);if(e&&e.depth==r&&e.textOffset)addNode(e.nodeBefore,n)}function close(t,e){if(!t.type.validContent(e))throw new ReplaceError("Invalid content for node "+t.type.name);return t.copy(e)}function replaceThreeWay(t,e,r,n,i){var a=t.depth>i&&joinable$1(t,e,i+1);var o=n.depth>i&&joinable$1(r,n,i+1);var u=[];addRange(null,t,i,u);if(a&&o&&e.index(i)==r.index(i)){checkJoin(a,o);addNode(close(a,replaceThreeWay(t,e,r,n,i+1)),u)}else{if(a)addNode(close(a,replaceTwoWay(t,e,i+1)),u);addRange(e,r,i,u);if(o)addNode(close(o,replaceTwoWay(r,n,i+1)),u)}addRange(n,null,i,u);return new Fragment(u)}function replaceTwoWay(t,e,r){var n=[];addRange(null,t,r,n);if(t.depth>r){var i=joinable$1(t,e,r+1);addNode(close(i,replaceTwoWay(t,e,r+1)),n)}addRange(e,null,r,n);return new Fragment(n)}function prepareSliceForReplace(t,e){var r=e.depth-t.openStart,n=e.node(r);var i=n.copy(t.content);for(var a=r-1;a>=0;a--)i=e.node(a).copy(Fragment.from(i));return{start:i.resolveNoCache(t.openStart+r),end:i.resolveNoCache(i.content.size-t.openEnd-r)}}
/**
You can [_resolve_](https://prosemirror.net/docs/ref/#model.Node.resolve) a position to get more
information about it. Objects of this class represent such a
resolved position, providing various pieces of context
information, and some helper methods.

Throughout this interface, methods that take an optional `depth`
parameter will interpret undefined as `this.depth` and negative
numbers as `this.depth + value`.
*/var ResolvedPos=/** @class */function(){
/**
    @internal
    */
function t(
/**
    The position that was resolved.
    */
t,
/**
    @internal
    */
e,
/**
    The offset this position has into its parent node.
    */
r){this.pos=t;this.path=e;this.parentOffset=r;this.depth=e.length/3-1}
/**
    @internal
    */t.prototype.resolveDepth=function(t){if(t==null)return this.depth;if(t<0)return this.depth+t;return t};Object.defineProperty(t.prototype,"parent",{
/**
        The parent node that the position points into. Note that even if
        a position points into a text node, that node is not considered
        the parent—text nodes are ‘flat’ in this model, and have no content.
        */
get:function(){return this.node(this.depth)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"doc",{
/**
        The root node in which the position was resolved.
        */
get:function(){return this.node(0)},enumerable:false,configurable:true});
/**
    The ancestor node at the given level. `p.node(p.depth)` is the
    same as `p.parent`.
    */t.prototype.node=function(t){return this.path[this.resolveDepth(t)*3]};
/**
    The index into the ancestor at the given level. If this points
    at the 3rd node in the 2nd paragraph on the top level, for
    example, `p.index(0)` is 1 and `p.index(1)` is 2.
    */t.prototype.index=function(t){return this.path[this.resolveDepth(t)*3+1]};
/**
    The index pointing after this position into the ancestor at the
    given level.
    */t.prototype.indexAfter=function(t){t=this.resolveDepth(t);return this.index(t)+(t==this.depth&&!this.textOffset?0:1)};
/**
    The (absolute) position at the start of the node at the given
    level.
    */t.prototype.start=function(t){t=this.resolveDepth(t);return t==0?0:this.path[t*3-1]+1};
/**
    The (absolute) position at the end of the node at the given
    level.
    */t.prototype.end=function(t){t=this.resolveDepth(t);return this.start(t)+this.node(t).content.size};
/**
    The (absolute) position directly before the wrapping node at the
    given level, or, when `depth` is `this.depth + 1`, the original
    position.
    */t.prototype.before=function(t){t=this.resolveDepth(t);if(!t)throw new RangeError("There is no position before the top-level node");return t==this.depth+1?this.pos:this.path[t*3-1]};
/**
    The (absolute) position directly after the wrapping node at the
    given level, or the original position when `depth` is `this.depth + 1`.
    */t.prototype.after=function(t){t=this.resolveDepth(t);if(!t)throw new RangeError("There is no position after the top-level node");return t==this.depth+1?this.pos:this.path[t*3-1]+this.path[t*3].nodeSize};Object.defineProperty(t.prototype,"textOffset",{
/**
        When this position points into a text node, this returns the
        distance between the position and the start of the text node.
        Will be zero for positions that point between nodes.
        */
get:function(){return this.pos-this.path[this.path.length-1]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"nodeAfter",{
/**
        Get the node directly after the position, if any. If the position
        points into a text node, only the part of that node after the
        position is returned.
        */
get:function(){var t=this.parent,e=this.index(this.depth);if(e==t.childCount)return null;var r=this.pos-this.path[this.path.length-1],n=t.child(e);return r?t.child(e).cut(r):n},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"nodeBefore",{
/**
        Get the node directly before the position, if any. If the
        position points into a text node, only the part of that node
        before the position is returned.
        */
get:function(){var t=this.index(this.depth);var e=this.pos-this.path[this.path.length-1];if(e)return this.parent.child(t).cut(0,e);return t==0?null:this.parent.child(t-1)},enumerable:false,configurable:true});
/**
    Get the position at the given index in the parent node at the
    given depth (which defaults to `this.depth`).
    */t.prototype.posAtIndex=function(t,e){e=this.resolveDepth(e);var r=this.path[e*3],n=e==0?0:this.path[e*3-1]+1;for(var i=0;i<t;i++)n+=r.child(i).nodeSize;return n};
/**
    Get the marks at this position, factoring in the surrounding
    marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
    position is at the start of a non-empty node, the marks of the
    node after it (if any) are returned.
    */t.prototype.marks=function(){var t=this.parent,e=this.index();
// In an empty parent, return the empty array
if(t.content.size==0)return Mark$1.none;
// When inside a text node, just return the text node's marks
if(this.textOffset)return t.child(e).marks;var r=t.maybeChild(e-1),n=t.maybeChild(e);
// If the `after` flag is true of there is no node before, make
// the node after this position the main reference.
if(!r){var i=r;r=n;n=i}
// Use all marks in the main node, except those that have
// `inclusive` set to false and are not present in the other node.
var a=r.marks;for(var o=0;o<a.length;o++)if(a[o].type.spec.inclusive===false&&(!n||!a[o].isInSet(n.marks)))a=a[o--].removeFromSet(a);return a};
/**
    Get the marks after the current position, if any, except those
    that are non-inclusive and not present at position `$end`. This
    is mostly useful for getting the set of marks to preserve after a
    deletion. Will return `null` if this position is at the end of
    its parent node or its parent node isn't a textblock (in which
    case no marks should be preserved).
    */t.prototype.marksAcross=function(t){var e=this.parent.maybeChild(this.index());if(!e||!e.isInline)return null;var r=e.marks,n=t.parent.maybeChild(t.index());for(var i=0;i<r.length;i++)if(r[i].type.spec.inclusive===false&&(!n||!r[i].isInSet(n.marks)))r=r[i--].removeFromSet(r);return r};
/**
    The depth up to which this position and the given (non-resolved)
    position share the same parent nodes.
    */t.prototype.sharedDepth=function(t){for(var e=this.depth;e>0;e--)if(this.start(e)<=t&&this.end(e)>=t)return e;return 0};
/**
    Returns a range based on the place where this position and the
    given position diverge around block content. If both point into
    the same textblock, for example, a range around that textblock
    will be returned. If they point into different blocks, the range
    around those blocks in their shared ancestor is returned. You can
    pass in an optional predicate that will be called with a parent
    node to see if a range into that parent is acceptable.
    */t.prototype.blockRange=function(t,e){if(t===void 0){t=this}if(t.pos<this.pos)return t.blockRange(this);for(var r=this.depth-(this.parent.inlineContent||this.pos==t.pos?1:0);r>=0;r--)if(t.pos<=this.end(r)&&(!e||e(this.node(r))))return new NodeRange(this,t,r);return null};
/**
    Query whether the given position shares the same parent node.
    */t.prototype.sameParent=function(t){return this.pos-this.parentOffset==t.pos-t.parentOffset};
/**
    Return the greater of this and the given position.
    */t.prototype.max=function(t){return t.pos>this.pos?t:this};
/**
    Return the smaller of this and the given position.
    */t.prototype.min=function(t){return t.pos<this.pos?t:this};
/**
    @internal
    */t.prototype.toString=function(){var t="";for(var e=1;e<=this.depth;e++)t+=(t?"/":"")+this.node(e).type.name+"_"+this.index(e-1);return t+":"+this.parentOffset};
/**
    @internal
    */t.resolve=function(e,r){if(!(r>=0&&r<=e.content.size))throw new RangeError("Position "+r+" out of range");var n=[];var i=0,a=r;for(var o=e;;){var u=o.content.findIndex(a),s=u.index,f=u.offset;var l=a-f;n.push(o,s,i+f);if(!l)break;o=o.child(s);if(o.isText)break;a=l-1;i+=f+1}return new t(r,n,a)};
/**
    @internal
    */t.resolveCached=function(e,r){var n=resolveCache.get(e);if(n){for(var i=0;i<n.elts.length;i++){var a=n.elts[i];if(a.pos==r)return a}}else{resolveCache.set(e,n=new ResolveCache)}var o=n.elts[n.i]=t.resolve(e,r);n.i=(n.i+1)%resolveCacheSize;return o};return t}();var ResolveCache=/** @class */function(){function t(){this.elts=[];this.i=0}return t}();var resolveCacheSize=12,resolveCache=new WeakMap;
/**
Represents a flat range of content, i.e. one that starts and
ends in the same node.
*/var NodeRange=/** @class */function(){
/**
    Construct a node range. `$from` and `$to` should point into the
    same node until at least the given `depth`, since a node range
    denotes an adjacent set of nodes in a single parent node.
    */
function t(
/**
    A resolved position along the start of the content. May have a
    `depth` greater than this object's `depth` property, since
    these are the positions that were used to compute the range,
    not re-resolved positions directly at its boundaries.
    */
t,
/**
    A position along the end of the content. See
    caveat for [`$from`](https://prosemirror.net/docs/ref/#model.NodeRange.$from).
    */
e,
/**
    The depth of the node that this range points into.
    */
r){this.$from=t;this.$to=e;this.depth=r}Object.defineProperty(t.prototype,"start",{
/**
        The position at the start of the range.
        */
get:function(){return this.$from.before(this.depth+1)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"end",{
/**
        The position at the end of the range.
        */
get:function(){return this.$to.after(this.depth+1)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"parent",{
/**
        The parent node that the range points into.
        */
get:function(){return this.$from.node(this.depth)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"startIndex",{
/**
        The start index of the range in the parent node.
        */
get:function(){return this.$from.index(this.depth)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"endIndex",{
/**
        The end index of the range in the parent node.
        */
get:function(){return this.$to.indexAfter(this.depth)},enumerable:false,configurable:true});return t}();var emptyAttrs=Object.create(null);
/**
This class represents a node in the tree that makes up a
ProseMirror document. So a document is an instance of `Node`, with
children that are also instances of `Node`.

Nodes are persistent data structures. Instead of changing them, you
create new ones with the content you want. Old ones keep pointing
at the old document shape. This is made cheaper by sharing
structure between the old and new data as much as possible, which a
tree shape like this (without back pointers) makes easy.

**Do not** directly mutate the properties of a `Node` object. See
[the guide](https://prosemirror.net/docs/guide/#doc) for more information.
*/var Node$2=/** @class */function(){
/**
    @internal
    */
function t(
/**
    The type of node that this is.
    */
t,
/**
    An object mapping attribute names to values. The kind of
    attributes allowed and required are
    [determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.
    */
e,
// A fragment holding the node's children.
r,
/**
    The marks (things like whether it is emphasized or part of a
    link) applied to this node.
    */
n){if(n===void 0){n=Mark$1.none}this.type=t;this.attrs=e;this.marks=n;this.content=r||Fragment.empty}Object.defineProperty(t.prototype,"children",{
/**
        The array of this node's child nodes.
        */
get:function(){return this.content.content},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"nodeSize",{
/**
        The size of this node, as defined by the integer-based [indexing
        scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
        amount of characters. For other leaf nodes, it is one. For
        non-leaf nodes, it is the size of the content plus two (the
        start and end token).
        */
get:function(){return this.isLeaf?1:2+this.content.size},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"childCount",{
/**
        The number of children that the node has.
        */
get:function(){return this.content.childCount},enumerable:false,configurable:true});
/**
    Get the child node at the given index. Raises an error when the
    index is out of range.
    */t.prototype.child=function(t){return this.content.child(t)};
/**
    Get the child node at the given index, if it exists.
    */t.prototype.maybeChild=function(t){return this.content.maybeChild(t)};
/**
    Call `f` for every child node, passing the node, its offset
    into this parent node, and its index.
    */t.prototype.forEach=function(t){this.content.forEach(t)};
/**
    Invoke a callback for all descendant nodes recursively overlapping
    the given two positions that are relative to start of this
    node's content. This includes all ancestors of the nodes
    containing the two positions. The callback is invoked with the
    node, its position relative to the original node (method receiver),
    its parent node, and its child index. When the callback returns
    false for a given node, that node's children will not be
    recursed over. The last parameter can be used to specify a
    starting position to count from.
    */t.prototype.nodesBetween=function(t,e,r,n){if(n===void 0){n=0}this.content.nodesBetween(t,e,r,n,this)};
/**
    Call the given callback for every descendant node. Doesn't
    descend into a node when the callback returns `false`.
    */t.prototype.descendants=function(t){this.nodesBetween(0,this.content.size,t)};Object.defineProperty(t.prototype,"textContent",{
/**
        Concatenates all the text nodes found in this fragment and its
        children.
        */
get:function(){return this.isLeaf&&this.type.spec.leafText?this.type.spec.leafText(this):this.textBetween(0,this.content.size,"")},enumerable:false,configurable:true});
/**
    Get all text between positions `from` and `to`. When
    `blockSeparator` is given, it will be inserted to separate text
    from different block nodes. If `leafText` is given, it'll be
    inserted for every non-text leaf node encountered, otherwise
    [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
    */t.prototype.textBetween=function(t,e,r,n){return this.content.textBetween(t,e,r,n)};Object.defineProperty(t.prototype,"firstChild",{
/**
        Returns this node's first child, or `null` if there are no
        children.
        */
get:function(){return this.content.firstChild},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"lastChild",{
/**
        Returns this node's last child, or `null` if there are no
        children.
        */
get:function(){return this.content.lastChild},enumerable:false,configurable:true});
/**
    Test whether two nodes represent the same piece of document.
    */t.prototype.eq=function(t){return this==t||this.sameMarkup(t)&&this.content.eq(t.content)};
/**
    Compare the markup (type, attributes, and marks) of this node to
    those of another. Returns `true` if both have the same markup.
    */t.prototype.sameMarkup=function(t){return this.hasMarkup(t.type,t.attrs,t.marks)};
/**
    Check whether this node's markup correspond to the given type,
    attributes, and marks.
    */t.prototype.hasMarkup=function(t,e,r){return this.type==t&&compareDeep(this.attrs,e||t.defaultAttrs||emptyAttrs)&&Mark$1.sameSet(this.marks,r||Mark$1.none)};
/**
    Create a new node with the same markup as this node, containing
    the given content (or empty, if no content is given).
    */t.prototype.copy=function(e){if(e===void 0){e=null}if(e==this.content)return this;return new t(this.type,this.attrs,e,this.marks)};
/**
    Create a copy of this node, with the given set of marks instead
    of the node's own marks.
    */t.prototype.mark=function(e){return e==this.marks?this:new t(this.type,this.attrs,this.content,e)};
/**
    Create a copy of this node with only the content between the
    given positions. If `to` is not given, it defaults to the end of
    the node.
    */t.prototype.cut=function(t,e){if(e===void 0){e=this.content.size}if(t==0&&e==this.content.size)return this;return this.copy(this.content.cut(t,e))};
/**
    Cut out the part of the document between the given positions, and
    return it as a `Slice` object.
    */t.prototype.slice=function(t,e,r){if(e===void 0){e=this.content.size}if(r===void 0){r=false}if(t==e)return Slice.empty;var n=this.resolve(t),i=this.resolve(e);var a=r?0:n.sharedDepth(e);var o=n.start(a),u=n.node(a);var s=u.content.cut(n.pos-o,i.pos-o);return new Slice(s,n.depth-a,i.depth-a)};
/**
    Replace the part of the document between the given positions with
    the given slice. The slice must 'fit', meaning its open sides
    must be able to connect to the surrounding content, and its
    content nodes must be valid children for the node they are placed
    into. If any of this is violated, an error of type
    [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
    */t.prototype.replace=function(t,e,r){return replace(this.resolve(t),this.resolve(e),r)};
/**
    Find the node directly after the given position.
    */t.prototype.nodeAt=function(t){for(var e=this;;){var r=e.content.findIndex(t),n=r.index,i=r.offset;e=e.maybeChild(n);if(!e)return null;if(i==t||e.isText)return e;t-=i+1}};
/**
    Find the (direct) child node after the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */t.prototype.childAfter=function(t){var e=this.content.findIndex(t),r=e.index,n=e.offset;return{node:this.content.maybeChild(r),index:r,offset:n}};
/**
    Find the (direct) child node before the given offset, if any,
    and return it along with its index and offset relative to this
    node.
    */t.prototype.childBefore=function(t){if(t==0)return{node:null,index:0,offset:0};var e=this.content.findIndex(t),r=e.index,n=e.offset;if(n<t)return{node:this.content.child(r),index:r,offset:n};var i=this.content.child(r-1);return{node:i,index:r-1,offset:n-i.nodeSize}};
/**
    Resolve the given position in the document, returning an
    [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
    */t.prototype.resolve=function(t){return ResolvedPos.resolveCached(this,t)};
/**
    @internal
    */t.prototype.resolveNoCache=function(t){return ResolvedPos.resolve(this,t)};
/**
    Test whether a given mark or mark type occurs in this document
    between the two given positions.
    */t.prototype.rangeHasMark=function(t,e,r){var n=false;if(e>t)this.nodesBetween(t,e,(function(t){if(r.isInSet(t.marks))n=true;return!n}));return n};Object.defineProperty(t.prototype,"isBlock",{
/**
        True when this is a block (non-inline node)
        */
get:function(){return this.type.isBlock},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isTextblock",{
/**
        True when this is a textblock node, a block node with inline
        content.
        */
get:function(){return this.type.isTextblock},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"inlineContent",{
/**
        True when this node allows inline content.
        */
get:function(){return this.type.inlineContent},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isInline",{
/**
        True when this is an inline node (a text node or a node that can
        appear among text).
        */
get:function(){return this.type.isInline},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isText",{
/**
        True when this is a text node.
        */
get:function(){return this.type.isText},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isLeaf",{
/**
        True when this is a leaf node.
        */
get:function(){return this.type.isLeaf},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isAtom",{
/**
        True when this is an atom, i.e. when it does not have directly
        editable content. This is usually the same as `isLeaf`, but can
        be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
        on a node's spec (typically used when the node is displayed as
        an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
        */
get:function(){return this.type.isAtom},enumerable:false,configurable:true});
/**
    Return a string representation of this node for debugging
    purposes.
    */t.prototype.toString=function(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);var t=this.type.name;if(this.content.size)t+="("+this.content.toStringInner()+")";return wrapMarks(this.marks,t)};
/**
    Get the content match in this node at the given index.
    */t.prototype.contentMatchAt=function(t){var e=this.type.contentMatch.matchFragment(this.content,0,t);if(!e)throw new Error("Called contentMatchAt on a node with invalid content");return e};
/**
    Test whether replacing the range between `from` and `to` (by
    child index) with the given replacement fragment (which defaults
    to the empty fragment) would leave the node's content valid. You
    can optionally pass `start` and `end` indices into the
    replacement fragment.
    */t.prototype.canReplace=function(t,e,r,n,i){if(r===void 0){r=Fragment.empty}if(n===void 0){n=0}if(i===void 0){i=r.childCount}var a=this.contentMatchAt(t).matchFragment(r,n,i);var o=a&&a.matchFragment(this.content,e);if(!o||!o.validEnd)return false;for(var u=n;u<i;u++)if(!this.type.allowsMarks(r.child(u).marks))return false;return true};
/**
    Test whether replacing the range `from` to `to` (by index) with
    a node of the given type would leave the node's content valid.
    */t.prototype.canReplaceWith=function(t,e,r,n){if(n&&!this.type.allowsMarks(n))return false;var i=this.contentMatchAt(t).matchType(r);var a=i&&i.matchFragment(this.content,e);return a?a.validEnd:false};
/**
    Test whether the given node's content could be appended to this
    node. If that node is empty, this will only return true if there
    is at least one node type that can appear in both nodes (to avoid
    merging completely incompatible nodes).
    */t.prototype.canAppend=function(t){if(t.content.size)return this.canReplace(this.childCount,this.childCount,t.content);else return this.type.compatibleContent(t.type)};
/**
    Check whether this node and its descendants conform to the
    schema, and raise an exception when they do not.
    */t.prototype.check=function(){this.type.checkContent(this.content);checkAttrs(this.type.attrs,this.attrs,"node",this.type.name);var t=Mark$1.none;for(var e=0;e<this.marks.length;e++){var r=this.marks[e];checkAttrs(r.type.attrs,r.attrs,"mark",r.type.name);t=r.addToSet(t)}if(!Mark$1.sameSet(t,this.marks))throw new RangeError("Invalid collection of marks for node ".concat(this.type.name,": ").concat(this.marks.map((function(t){return t.type.name}))));this.content.forEach((function(t){return t.check()}))};
/**
    Return a JSON-serializeable representation of this node.
    */t.prototype.toJSON=function(){var t={type:this.type.name};for(var e in this.attrs){t.attrs=this.attrs;break}if(this.content.size)t.content=this.content.toJSON();if(this.marks.length)t.marks=this.marks.map((function(t){return t.toJSON()}));return t};
/**
    Deserialize a node from its JSON representation.
    */t.fromJSON=function(t,e){if(!e)throw new RangeError("Invalid input for Node.fromJSON");var r=undefined;if(e.marks){if(!Array.isArray(e.marks))throw new RangeError("Invalid mark data for Node.fromJSON");r=e.marks.map(t.markFromJSON)}if(e.type=="text"){if(typeof e.text!="string")throw new RangeError("Invalid text node in JSON");return t.text(e.text,r)}var n=Fragment.fromJSON(t,e.content);var i=t.nodeType(e.type).create(e.attrs,n,r);return i};return t}();Node$2.prototype.text=undefined;
// V8 can leak big strings if you take a slice from them and hang on
// to the slice (https://issues.chromium.org/issues/41480525). If it
// looks like we're on V8 (by stack trace pattern), use such strings
// as index to an object first to intern them to avoid leaking memory
// in, for example, inverted steps stored in history. (#1609)
var v8InternHack=function(){var t=new Error("/").stack;if(!t||!/\n\s*at\s/.test(t))return function(t){return t};return function(t){return t}}();var TextNode=/** @class */function(t){__extends(e,t);
/**
    @internal
    */function e(e,r,n,i){var a=t.call(this,e,r,null,i)||this;if(!n)throw new RangeError("Empty text nodes are not allowed");a.text=n;return a}e.prototype.toString=function(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);return wrapMarks(this.marks,JSON.stringify(this.text))};Object.defineProperty(e.prototype,"textContent",{get:function(){return this.text},enumerable:false,configurable:true});e.prototype.textBetween=function(t,e){return v8InternHack(this.text.slice(t,e))};Object.defineProperty(e.prototype,"nodeSize",{get:function(){return this.text.length},enumerable:false,configurable:true});e.prototype.mark=function(t){return t==this.marks?this:new e(this.type,this.attrs,this.text,t)};e.prototype.withText=function(t){if(t==this.text)return this;return new e(this.type,this.attrs,t,this.marks)};e.prototype.cut=function(t,e){if(t===void 0){t=0}if(e===void 0){e=this.text.length}if(t==0&&e==this.text.length)return this;return this.withText(v8InternHack(this.text.slice(t,e)))};e.prototype.eq=function(t){return this.sameMarkup(t)&&this.text==t.text};e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);e.text=this.text;return e};return e}(Node$2);function wrapMarks(t,e){for(var r=t.length-1;r>=0;r--)e=t[r].type.name+"("+e+")";return e}function checkAttrs(t,e,r,n){for(var i in e)if(!(i in t))throw new RangeError("Unsupported attribute ".concat(i," for ").concat(r," of type ").concat(n));for(var i in t){if(t[i].validate)t[i].validate(e[i])}}
/**
Instances of this class represent a match state of a node type's
[content expression](https://prosemirror.net/docs/ref/#model.NodeSpec.content), and can be used to
find out whether further content matches here, and whether a given
position is a valid end of the node.
*/var ContentMatch=/** @class */function(){
/**
    @internal
    */
function t(
/**
    True when this match state represents a valid end of the node.
    */
t){this.validEnd=t;
/**
        @internal
        */this.next=[];
/**
        @internal
        */this.wrapCache=[]}
/**
    @internal
    */t.parse=function(e,r){var n=new TokenStream(e,r);if(n.next==null)return t.empty;var i=parseExpr(n);if(n.next)n.err("Unexpected trailing text");var a=dfa(nfa(i));checkForDeadEnds(a,n);return a};
/**
    Match a node type, returning a match after that node if
    successful.
    */t.prototype.matchType=function(t){for(var e=0;e<this.next.length;e++)if(this.next[e].type==t)return this.next[e].next;return null};
/**
    Try to match a fragment. Returns the resulting match when
    successful.
    */t.prototype.matchFragment=function(t,e,r){if(e===void 0){e=0}if(r===void 0){r=t.childCount}var n=this;for(var i=e;n&&i<r;i++)n=n.matchType(t.child(i).type);return n};Object.defineProperty(t.prototype,"inlineContent",{
/**
        @internal
        */
get:function(){return this.next.length!=0&&this.next[0].type.isInline},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"defaultType",{
/**
        Get the first matching node type at this match position that can
        be generated.
        */
get:function(){for(var t=0;t<this.next.length;t++){var e=this.next[t].type;if(!(e.isText||e.hasRequiredAttrs()))return e}return null},enumerable:false,configurable:true});
/**
    @internal
    */t.prototype.compatible=function(t){for(var e=0;e<this.next.length;e++)for(var r=0;r<t.next.length;r++)if(this.next[e].type==t.next[r].type)return true;return false};
/**
    Try to match the given fragment, and if that fails, see if it can
    be made to match by inserting nodes in front of it. When
    successful, return a fragment of inserted nodes (which may be
    empty if nothing had to be inserted). When `toEnd` is true, only
    return a fragment if the resulting match goes to the end of the
    content expression.
    */t.prototype.fillBefore=function(t,e,r){if(e===void 0){e=false}if(r===void 0){r=0}var n=[this];function i(a,o){var u=a.matchFragment(t,r);if(u&&(!e||u.validEnd))return Fragment.from(o.map((function(t){return t.createAndFill()})));for(var s=0;s<a.next.length;s++){var f=a.next[s],l=f.type,c=f.next;if(!(l.isText||l.hasRequiredAttrs())&&n.indexOf(c)==-1){n.push(c);var v=i(c,o.concat(l));if(v)return v}}return null}return i(this,[])};
/**
    Find a set of wrapping node types that would allow a node of the
    given type to appear at this position. The result may be empty
    (when it fits directly) and will be null when no such wrapping
    exists.
    */t.prototype.findWrapping=function(t){for(var e=0;e<this.wrapCache.length;e+=2)if(this.wrapCache[e]==t)return this.wrapCache[e+1];var r=this.computeWrapping(t);this.wrapCache.push(t,r);return r};
/**
    @internal
    */t.prototype.computeWrapping=function(t){var e=Object.create(null),r=[{match:this,type:null,via:null}];while(r.length){var n=r.shift(),i=n.match;if(i.matchType(t)){var a=[];for(var o=n;o.type;o=o.via)a.push(o.type);return a.reverse()}for(var u=0;u<i.next.length;u++){var s=i.next[u],f=s.type,l=s.next;if(!f.isLeaf&&!f.hasRequiredAttrs()&&!(f.name in e)&&(!n.type||l.validEnd)){r.push({match:f.contentMatch,type:f,via:n});e[f.name]=true}}}return null};Object.defineProperty(t.prototype,"edgeCount",{
/**
        The number of outgoing edges this node has in the finite
        automaton that describes the content expression.
        */
get:function(){return this.next.length},enumerable:false,configurable:true});
/**
    Get the _n_​th outgoing edge from this node in the finite
    automaton that describes the content expression.
    */t.prototype.edge=function(t){if(t>=this.next.length)throw new RangeError("There's no ".concat(t,"th edge in this content match"));return this.next[t]};
/**
    @internal
    */t.prototype.toString=function(){var t=[];function e(r){t.push(r);for(var n=0;n<r.next.length;n++)if(t.indexOf(r.next[n].next)==-1)e(r.next[n].next)}e(this);return t.map((function(e,r){var n=r+(e.validEnd?"*":" ")+" ";for(var i=0;i<e.next.length;i++)n+=(i?", ":"")+e.next[i].type.name+"->"+t.indexOf(e.next[i].next);return n})).join("\n")};return t}();
/**
@internal
*/ContentMatch.empty=new ContentMatch(true);var TokenStream=/** @class */function(){function t(t,e){this.string=t;this.nodeTypes=e;this.inline=null;this.pos=0;this.tokens=t.split(/\s*(?=\b|\W|$)/);if(this.tokens[this.tokens.length-1]=="")this.tokens.pop();if(this.tokens[0]=="")this.tokens.shift()}Object.defineProperty(t.prototype,"next",{get:function(){return this.tokens[this.pos]},enumerable:false,configurable:true});t.prototype.eat=function(t){return this.next==t&&(this.pos++||true)};t.prototype.err=function(t){throw new SyntaxError(t+" (in content expression '"+this.string+"')")};return t}();function parseExpr(t){var e=[];do{e.push(parseExprSeq(t))}while(t.eat("|"));return e.length==1?e[0]:{type:"choice",exprs:e}}function parseExprSeq(t){var e=[];do{e.push(parseExprSubscript(t))}while(t.next&&t.next!=")"&&t.next!="|");return e.length==1?e[0]:{type:"seq",exprs:e}}function parseExprSubscript(t){var e=parseExprAtom(t);for(;;){if(t.eat("+"))e={type:"plus",expr:e};else if(t.eat("*"))e={type:"star",expr:e};else if(t.eat("?"))e={type:"opt",expr:e};else if(t.eat("{"))e=parseExprRange(t,e);else break}return e}function parseNum(t){if(/\D/.test(t.next))t.err("Expected number, got '"+t.next+"'");var e=Number(t.next);t.pos++;return e}function parseExprRange(t,e){var r=parseNum(t),n=r;if(t.eat(",")){if(t.next!="}")n=parseNum(t);else n=-1}if(!t.eat("}"))t.err("Unclosed braced range");return{type:"range",min:r,max:n,expr:e}}function resolveName(t,e){var r=t.nodeTypes,n=r[e];if(n)return[n];var i=[];for(var a in r){var o=r[a];if(o.isInGroup(e))i.push(o)}if(i.length==0)t.err("No node type or group '"+e+"' found");return i}function parseExprAtom(t){if(t.eat("(")){var e=parseExpr(t);if(!t.eat(")"))t.err("Missing closing paren");return e}else if(!/\W/.test(t.next)){var r=resolveName(t,t.next).map((function(e){if(t.inline==null)t.inline=e.isInline;else if(t.inline!=e.isInline)t.err("Mixing inline and block content");return{type:"name",value:e}}));t.pos++;return r.length==1?r[0]:{type:"choice",exprs:r}}else{t.err("Unexpected token '"+t.next+"'")}}
// Construct an NFA from an expression as returned by the parser. The
// NFA is represented as an array of states, which are themselves
// arrays of edges, which are `{term, to}` objects. The first state is
// the entry state and the last node is the success state.

// Note that unlike typical NFAs, the edge ordering in this one is
// significant, in that it is used to contruct filler content when
// necessary.
function nfa(t){var e=[[]];i(a(t,0),r());return e;function r(){return e.push([])-1}function n(t,r,n){var i={term:n,to:r};e[t].push(i);return i}function i(t,e){t.forEach((function(t){return t.to=e}))}function a(t,e){if(t.type=="choice"){return t.exprs.reduce((function(t,r){return t.concat(a(r,e))}),[])}else if(t.type=="seq"){for(var o=0;;o++){var u=a(t.exprs[o],e);if(o==t.exprs.length-1)return u;i(u,e=r())}}else if(t.type=="star"){var s=r();n(e,s);i(a(t.expr,s),s);return[n(s)]}else if(t.type=="plus"){var s=r();i(a(t.expr,e),s);i(a(t.expr,s),s);return[n(s)]}else if(t.type=="opt"){return[n(e)].concat(a(t.expr,e))}else if(t.type=="range"){var f=e;for(var l=0;l<t.min;l++){var u=r();i(a(t.expr,f),u);f=u}if(t.max==-1){i(a(t.expr,f),f)}else{for(var c=t.min;c<t.max;c++){var u=r();n(f,u);i(a(t.expr,f),u);f=u}}return[n(f)]}else if(t.type=="name"){return[n(e,undefined,t.value)]}else{throw new Error("Unknown expr type")}}}function cmp(t,e){return e-t}
// Get the set of nodes reachable by null edges from `node`. Omit
// nodes with only a single null-out-edge, since they may lead to
// needless duplicated nodes.
function nullFrom(t,e){var r=[];n(e);return r.sort(cmp);function n(e){var i=t[e];if(i.length==1&&!i[0].term)return n(i[0].to);r.push(e);for(var a=0;a<i.length;a++){var o=i[a],u=o.term,s=o.to;if(!u&&r.indexOf(s)==-1)n(s)}}}
// Compiles an NFA as produced by `nfa` into a DFA, modeled as a set
// of state objects (`ContentMatch` instances) with transitions
// between them.
function dfa(t){var e=Object.create(null);return r(nullFrom(t,0));function r(n){var i=[];n.forEach((function(e){t[e].forEach((function(e){var r=e.term,n=e.to;if(!r)return;var a;for(var o=0;o<i.length;o++)if(i[o][0]==r)a=i[o][1];nullFrom(t,n).forEach((function(t){if(!a)i.push([r,a=[]]);if(a.indexOf(t)==-1)a.push(t)}))}))}));var a=e[n.join(",")]=new ContentMatch(n.indexOf(t.length-1)>-1);for(var o=0;o<i.length;o++){var u=i[o][1].sort(cmp);a.next.push({type:i[o][0],next:e[u.join(",")]||r(u)})}return a}}function checkForDeadEnds(t,e){for(var r=0,n=[t];r<n.length;r++){var i=n[r],a=!i.validEnd,o=[];for(var u=0;u<i.next.length;u++){var s=i.next[u],f=s.type,l=s.next;o.push(f.name);if(a&&!(f.isText||f.hasRequiredAttrs()))a=false;if(n.indexOf(l)==-1)n.push(l)}if(a)e.err("Only non-generatable nodes ("+o.join(", ")+") in a required position (see https://prosemirror.net/docs/guide/#generatable)")}}
// For node types where all attrs have a default value (or which don't
// have any attributes), build up a single reusable default attribute
// object, and use it for all nodes that don't specify specific
// attributes.
function defaultAttrs(t){var e=Object.create(null);for(var r in t){var n=t[r];if(!n.hasDefault)return null;e[r]=n.default}return e}function computeAttrs(t,e){var r=Object.create(null);for(var n in t){var i=t[n];var a=e&&e[n];if(a===undefined){if(i.hasDefault)a=i.default;else throw new RangeError("No value supplied for attribute "+n)}else if(i.validate){i.validate(a)}r[n]=a}return r}function initAttrs(t,e){var r=Object.create(null);if(e)for(var n in e)r[n]=new Attribute(t,n,e[n]);return r}
/**
Node types are objects allocated once per `Schema` and used to
[tag](https://prosemirror.net/docs/ref/#model.Node.type) `Node` instances. They contain information
about the node type, such as its name and what kind of node it
represents.
*/var NodeType$1=/** @class */function(){
/**
    @internal
    */
function t(
/**
    The name the node type has in this schema.
    */
t,
/**
    A link back to the `Schema` the node type belongs to.
    */
e,
/**
    The spec that this type is based on
    */
r){this.name=t;this.schema=e;this.spec=r;
/**
        The set of marks allowed in this node. `null` means all marks
        are allowed.
        */this.markSet=null;this.groups=r.group?r.group.split(" "):[];this.attrs=initAttrs(t,r.attrs);this.defaultAttrs=defaultAttrs(this.attrs);this.contentMatch=null;this.inlineContent=null;this.isBlock=!(r.inline||t=="text");this.isText=t=="text"}Object.defineProperty(t.prototype,"isInline",{
/**
        True if this is an inline type.
        */
get:function(){return!this.isBlock},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isTextblock",{
/**
        True if this is a textblock type, a block that contains inline
        content.
        */
get:function(){return this.isBlock&&this.inlineContent},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isLeaf",{
/**
        True for node types that allow no content.
        */
get:function(){return this.contentMatch==ContentMatch.empty},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isAtom",{
/**
        True when this node is an atom, i.e. when it does not have
        directly editable content.
        */
get:function(){return this.isLeaf||!!this.spec.atom},enumerable:false,configurable:true});
/**
    Return true when this node type is part of the given
    [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
    */t.prototype.isInGroup=function(t){return this.groups.indexOf(t)>-1};Object.defineProperty(t.prototype,"whitespace",{
/**
        The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
        */
get:function(){return this.spec.whitespace||(this.spec.code?"pre":"normal")},enumerable:false,configurable:true});
/**
    Tells you whether this node type has any required attributes.
    */t.prototype.hasRequiredAttrs=function(){for(var t in this.attrs)if(this.attrs[t].isRequired)return true;return false};
/**
    Indicates whether this node allows some of the same content as
    the given node type.
    */t.prototype.compatibleContent=function(t){return this==t||this.contentMatch.compatible(t.contentMatch)};
/**
    @internal
    */t.prototype.computeAttrs=function(t){if(!t&&this.defaultAttrs)return this.defaultAttrs;else return computeAttrs(this.attrs,t)};
/**
    Create a `Node` of this type. The given attributes are
    checked and defaulted (you can pass `null` to use the type's
    defaults entirely, if no required attributes exist). `content`
    may be a `Fragment`, a node, an array of nodes, or
    `null`. Similarly `marks` may be `null` to default to the empty
    set of marks.
    */t.prototype.create=function(t,e,r){if(t===void 0){t=null}if(this.isText)throw new Error("NodeType.create can't construct text nodes");return new Node$2(this,this.computeAttrs(t),Fragment.from(e),Mark$1.setFrom(r))};
/**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
    against the node type's content restrictions, and throw an error
    if it doesn't match.
    */t.prototype.createChecked=function(t,e,r){if(t===void 0){t=null}e=Fragment.from(e);this.checkContent(e);return new Node$2(this,this.computeAttrs(t),e,Mark$1.setFrom(r))};
/**
    Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
    necessary to add nodes to the start or end of the given fragment
    to make it fit the node. If no fitting wrapping can be found,
    return null. Note that, due to the fact that required nodes can
    always be created, this will always succeed if you pass null or
    `Fragment.empty` as content.
    */t.prototype.createAndFill=function(t,e,r){if(t===void 0){t=null}t=this.computeAttrs(t);e=Fragment.from(e);if(e.size){var n=this.contentMatch.fillBefore(e);if(!n)return null;e=n.append(e)}var i=this.contentMatch.matchFragment(e);var a=i&&i.fillBefore(Fragment.empty,true);if(!a)return null;return new Node$2(this,t,e.append(a),Mark$1.setFrom(r))};
/**
    Returns true if the given fragment is valid content for this node
    type.
    */t.prototype.validContent=function(t){var e=this.contentMatch.matchFragment(t);if(!e||!e.validEnd)return false;for(var r=0;r<t.childCount;r++)if(!this.allowsMarks(t.child(r).marks))return false;return true};
/**
    Throws a RangeError if the given fragment is not valid content for this
    node type.
    @internal
    */t.prototype.checkContent=function(t){if(!this.validContent(t))throw new RangeError("Invalid content for node ".concat(this.name,": ").concat(t.toString().slice(0,50)))};
/**
    @internal no longer useful, but called by old prosemirror-view versions
    */t.prototype.checkAttrs=function(t){};
/**
    Check whether the given mark type is allowed in this node.
    */t.prototype.allowsMarkType=function(t){return this.markSet==null||this.markSet.indexOf(t)>-1};
/**
    Test whether the given set of marks are allowed in this node.
    */t.prototype.allowsMarks=function(t){if(this.markSet==null)return true;for(var e=0;e<t.length;e++)if(!this.allowsMarkType(t[e].type))return false;return true};
/**
    Removes the marks that are not allowed in this node from the given set.
    */t.prototype.allowedMarks=function(t){if(this.markSet==null)return t;var e;for(var r=0;r<t.length;r++){if(!this.allowsMarkType(t[r].type)){if(!e)e=t.slice(0,r)}else if(e){e.push(t[r])}}return!e?t:e.length?e:Mark$1.none};
/**
    @internal
    */t.compile=function(e,r){var n=Object.create(null);e.forEach((function(e,i){return n[e]=new t(e,r,i)}));var i=r.spec.topNode||"doc";if(!n[i])throw new RangeError("Schema is missing its top node type ('"+i+"')");if(!n.text)throw new RangeError("Every schema needs a 'text' type");for(var a in n.text.attrs)throw new RangeError("The text node type should not have attributes");return n};return t}();function validateType(t,e,r){var n=r.split("|");return function(r){var i=r===null?"null":typeof r;if(n.indexOf(i)<0)throw new RangeError("Expected value of type ".concat(n," for attribute ").concat(e," on type ").concat(t,", got ").concat(i))}}
// Attribute descriptors
var Attribute=/** @class */function(){function t(t,e,r){this.hasDefault=Object.prototype.hasOwnProperty.call(r,"default");this.default=r.default;this.validate=typeof r.validate=="string"?validateType(t,e,r.validate):r.validate}Object.defineProperty(t.prototype,"isRequired",{get:function(){return!this.hasDefault},enumerable:false,configurable:true});return t}();
// Marks
/**
Like nodes, marks (which are associated with nodes to signify
things like emphasis or being part of a link) are
[tagged](https://prosemirror.net/docs/ref/#model.Mark.type) with type objects, which are
instantiated once per `Schema`.
*/var MarkType=/** @class */function(){
/**
    @internal
    */
function t(
/**
    The name of the mark type.
    */
t,
/**
    @internal
    */
e,
/**
    The schema that this mark type instance is part of.
    */
r,
/**
    The spec on which the type is based.
    */
n){this.name=t;this.rank=e;this.schema=r;this.spec=n;this.attrs=initAttrs(t,n.attrs);this.excluded=null;var i=defaultAttrs(this.attrs);this.instance=i?new Mark$1(this,i):null}
/**
    Create a mark of this type. `attrs` may be `null` or an object
    containing only some of the mark's attributes. The others, if
    they have defaults, will be added.
    */t.prototype.create=function(t){if(t===void 0){t=null}if(!t&&this.instance)return this.instance;return new Mark$1(this,computeAttrs(this.attrs,t))};
/**
    @internal
    */t.compile=function(e,r){var n=Object.create(null),i=0;e.forEach((function(e,a){return n[e]=new t(e,i++,r,a)}));return n};
/**
    When there is a mark of this type in the given set, a new set
    without it is returned. Otherwise, the input set is returned.
    */t.prototype.removeFromSet=function(t){for(var e=0;e<t.length;e++)if(t[e].type==this){t=t.slice(0,e).concat(t.slice(e+1));e--}return t};
/**
    Tests whether there is a mark of this type in the given set.
    */t.prototype.isInSet=function(t){for(var e=0;e<t.length;e++)if(t[e].type==this)return t[e]};
/**
    Queries whether a given mark type is
    [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
    */t.prototype.excludes=function(t){return this.excluded.indexOf(t)>-1};return t}();
/**
A document schema. Holds [node](https://prosemirror.net/docs/ref/#model.NodeType) and [mark
type](https://prosemirror.net/docs/ref/#model.MarkType) objects for the nodes and marks that may
occur in conforming documents, and provides functionality for
creating and deserializing such documents.

When given, the type parameters provide the names of the nodes and
marks in this schema.
*/var Schema=/** @class */function(){
/**
    Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
    */
function t(t){var e=this;
/**
        The [linebreak
        replacement](https://prosemirror.net/docs/ref/#model.NodeSpec.linebreakReplacement) node defined
        in this schema, if any.
        */this.linebreakReplacement=null;
/**
        An object for storing whatever values modules may want to
        compute and cache per schema. (If you want to store something
        in it, try to use property names unlikely to clash.)
        */this.cached=Object.create(null);var r=this.spec={};for(var n in t)r[n]=t[n];r.nodes=OrderedMap.from(t.nodes),r.marks=OrderedMap.from(t.marks||{}),this.nodes=NodeType$1.compile(this.spec.nodes,this);this.marks=MarkType.compile(this.spec.marks,this);var i=Object.create(null);for(var n in this.nodes){if(n in this.marks)throw new RangeError(n+" can not be both a node and a mark");var a=this.nodes[n],o=a.spec.content||"",u=a.spec.marks;a.contentMatch=i[o]||(i[o]=ContentMatch.parse(o,this.nodes));a.inlineContent=a.contentMatch.inlineContent;if(a.spec.linebreakReplacement){if(this.linebreakReplacement)throw new RangeError("Multiple linebreak nodes defined");if(!a.isInline||!a.isLeaf)throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");this.linebreakReplacement=a}a.markSet=u=="_"?null:u?gatherMarks(this,u.split(" ")):u==""||!a.inlineContent?[]:null}for(var n in this.marks){var a=this.marks[n],s=a.spec.excludes;a.excluded=s==null?[a]:s==""?[]:gatherMarks(this,s.split(" "))}this.nodeFromJSON=function(t){return Node$2.fromJSON(e,t)};this.markFromJSON=function(t){return Mark$1.fromJSON(e,t)};this.topNodeType=this.nodes[this.spec.topNode||"doc"];this.cached.wrappings=Object.create(null)}
/**
    Create a node in this schema. The `type` may be a string or a
    `NodeType` instance. Attributes will be extended with defaults,
    `content` may be a `Fragment`, `null`, a `Node`, or an array of
    nodes.
    */t.prototype.node=function(t,e,r,n){if(e===void 0){e=null}if(typeof t=="string")t=this.nodeType(t);else if(!(t instanceof NodeType$1))throw new RangeError("Invalid node type: "+t);else if(t.schema!=this)throw new RangeError("Node type from different schema used ("+t.name+")");return t.createChecked(e,r,n)};
/**
    Create a text node in the schema. Empty text nodes are not
    allowed.
    */t.prototype.text=function(t,e){var r=this.nodes.text;return new TextNode(r,r.defaultAttrs,t,Mark$1.setFrom(e))};
/**
    Create a mark with the given type and attributes.
    */t.prototype.mark=function(t,e){if(typeof t=="string")t=this.marks[t];return t.create(e)};
/**
    @internal
    */t.prototype.nodeType=function(t){var e=this.nodes[t];if(!e)throw new RangeError("Unknown node type: "+t);return e};return t}();function gatherMarks(t,e){var r=[];for(var n=0;n<e.length;n++){var i=e[n],a=t.marks[i],o=a;if(a){r.push(a)}else{for(var u in t.marks){var s=t.marks[u];if(i=="_"||s.spec.group&&s.spec.group.split(" ").indexOf(i)>-1)r.push(o=s)}}if(!o)throw new SyntaxError("Unknown mark type: '"+e[n]+"'")}return r}function isTagRule(t){return t.tag!=null}function isStyleRule(t){return t.style!=null}
/**
A DOM parser represents a strategy for parsing DOM content into a
ProseMirror document conforming to a given schema. Its behavior is
defined by an array of [rules](https://prosemirror.net/docs/ref/#model.ParseRule).
*/var DOMParser=/** @class */function(){
/**
    Create a parser that targets the given schema, using the given
    parsing rules.
    */
function t(
/**
    The schema into which the parser parses.
    */
t,
/**
    The set of [parse rules](https://prosemirror.net/docs/ref/#model.ParseRule) that the parser
    uses, in order of precedence.
    */
e){var r=this;this.schema=t;this.rules=e;
/**
        @internal
        */this.tags=[];
/**
        @internal
        */this.styles=[];var n=this.matchedStyles=[];e.forEach((function(t){if(isTagRule(t)){r.tags.push(t)}else if(isStyleRule(t)){var e=/[^=]*/.exec(t.style)[0];if(n.indexOf(e)<0)n.push(e);r.styles.push(t)}}));
// Only normalize list elements when lists in the schema can't directly contain themselves
this.normalizeLists=!this.tags.some((function(e){if(!/^(ul|ol)\b/.test(e.tag)||!e.node)return false;var r=t.nodes[e.node];return r.contentMatch.matchType(r)}))}
/**
    Parse a document from the content of a DOM node.
    */t.prototype.parse=function(t,e){if(e===void 0){e={}}var r=new ParseContext(this,e,false);r.addAll(t,Mark$1.none,e.from,e.to);return r.finish()};
/**
    Parses the content of the given DOM node, like
    [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
    options. But unlike that method, which produces a whole node,
    this one returns a slice that is open at the sides, meaning that
    the schema constraints aren't applied to the start of nodes to
    the left of the input and the end of nodes at the end.
    */t.prototype.parseSlice=function(t,e){if(e===void 0){e={}}var r=new ParseContext(this,e,true);r.addAll(t,Mark$1.none,e.from,e.to);return Slice.maxOpen(r.finish())};
/**
    @internal
    */t.prototype.matchTag=function(t,e,r){for(var n=r?this.tags.indexOf(r)+1:0;n<this.tags.length;n++){var i=this.tags[n];if(matches(t,i.tag)&&(i.namespace===undefined||t.namespaceURI==i.namespace)&&(!i.context||e.matchesContext(i.context))){if(i.getAttrs){var a=i.getAttrs(t);if(a===false)continue;i.attrs=a||undefined}return i}}};
/**
    @internal
    */t.prototype.matchStyle=function(t,e,r,n){for(var i=n?this.styles.indexOf(n)+1:0;i<this.styles.length;i++){var a=this.styles[i],o=a.style;if(o.indexOf(t)!=0||a.context&&!r.matchesContext(a.context)||
// Test that the style string either precisely matches the prop,
// or has an '=' sign after the prop, followed by the given
// value.
o.length>t.length&&(o.charCodeAt(t.length)!=61||o.slice(t.length+1)!=e))continue;if(a.getAttrs){var u=a.getAttrs(e);if(u===false)continue;a.attrs=u||undefined}return a}};
/**
    @internal
    */t.schemaRules=function(t){var e=[];function r(t){var r=t.priority==null?50:t.priority,n=0;for(;n<e.length;n++){var i=e[n],a=i.priority==null?50:i.priority;if(a<r)break}e.splice(n,0,t)}var n=function(e){var n=t.marks[e].spec.parseDOM;if(n)n.forEach((function(t){r(t=copy(t));if(!(t.mark||t.ignore||t.clearMark))t.mark=e}))};for(var i in t.marks){n(i)}var a=function(e){var n=t.nodes[e].spec.parseDOM;if(n)n.forEach((function(t){r(t=copy(t));if(!(t.node||t.ignore||t.mark))t.node=e}))};for(var i in t.nodes){a(i)}return e};
/**
    Construct a DOM parser using the parsing rules listed in a
    schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
    [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
    */t.fromSchema=function(e){return e.cached.domParser||(e.cached.domParser=new t(e,t.schemaRules(e)))};return t}();var blockTags={address:true,article:true,aside:true,blockquote:true,body:true,canvas:true,dd:true,div:true,dl:true,fieldset:true,figcaption:true,figure:true,footer:true,form:true,h1:true,h2:true,h3:true,h4:true,h5:true,h6:true,header:true,hgroup:true,hr:true,li:true,noscript:true,ol:true,output:true,p:true,pre:true,section:true,table:true,tfoot:true,ul:true};var ignoreTags={head:true,noscript:true,object:true,script:true,style:true,title:true};var listTags={ol:true,ul:true};
// Using a bitfield for node context options
var OPT_PRESERVE_WS=1,OPT_PRESERVE_WS_FULL=2,OPT_OPEN_LEFT=4;function wsOptionsFor(t,e,r){if(e!=null)return(e?OPT_PRESERVE_WS:0)|(e==="full"?OPT_PRESERVE_WS_FULL:0);return t&&t.whitespace=="pre"?OPT_PRESERVE_WS|OPT_PRESERVE_WS_FULL:r&~OPT_OPEN_LEFT}var NodeContext=/** @class */function(){function t(t,e,r,n,i,a){this.type=t;this.attrs=e;this.marks=r;this.solid=n;this.options=a;this.content=[];
// Marks applied to the node's children
this.activeMarks=Mark$1.none;this.match=i||(a&OPT_OPEN_LEFT?null:t.contentMatch)}t.prototype.findWrapping=function(t){if(!this.match){if(!this.type)return[];var e=this.type.contentMatch.fillBefore(Fragment.from(t));if(e){this.match=this.type.contentMatch.matchFragment(e)}else{var r=this.type.contentMatch,n;if(n=r.findWrapping(t.type)){this.match=r;return n}else{return null}}}return this.match.findWrapping(t.type)};t.prototype.finish=function(t){if(!(this.options&OPT_PRESERVE_WS)){// Strip trailing whitespace
var e=this.content[this.content.length-1],r=void 0;if(e&&e.isText&&(r=/[ \t\r\n\u000c]+$/.exec(e.text))){var n=e;if(e.text.length==r[0].length)this.content.pop();else this.content[this.content.length-1]=n.withText(n.text.slice(0,n.text.length-r[0].length))}}var i=Fragment.from(this.content);if(!t&&this.match)i=i.append(this.match.fillBefore(Fragment.empty,true));return this.type?this.type.create(this.attrs,i,this.marks):i};t.prototype.inlineContext=function(t){if(this.type)return this.type.inlineContent;if(this.content.length)return this.content[0].isInline;return t.parentNode&&!blockTags.hasOwnProperty(t.parentNode.nodeName.toLowerCase())};return t}();var ParseContext=/** @class */function(){function t(
// The parser we are using.
t,
// The options passed to this parse.
e,r){this.parser=t;this.options=e;this.isOpen=r;this.open=0;this.localPreserveWS=false;var n=e.topNode,i;var a=wsOptionsFor(null,e.preserveWhitespace,0)|(r?OPT_OPEN_LEFT:0);if(n)i=new NodeContext(n.type,n.attrs,Mark$1.none,true,e.topMatch||n.type.contentMatch,a);else if(r)i=new NodeContext(null,null,Mark$1.none,true,null,a);else i=new NodeContext(t.schema.topNodeType,null,Mark$1.none,true,null,a);this.nodes=[i];this.find=e.findPositions;this.needsBlock=false}Object.defineProperty(t.prototype,"top",{get:function(){return this.nodes[this.open]},enumerable:false,configurable:true});
// Add a DOM node to the content. Text is inserted as text node,
// otherwise, the node is passed to `addElement` or, if it has a
// `style` attribute, `addElementWithStyles`.
t.prototype.addDOM=function(t,e){if(t.nodeType==3)this.addTextNode(t,e);else if(t.nodeType==1)this.addElement(t,e)};t.prototype.addTextNode=function(t,e){var r=t.nodeValue;var n=this.top,i=n.options&OPT_PRESERVE_WS_FULL?"full":this.localPreserveWS||(n.options&OPT_PRESERVE_WS)>0;var a=this.parser.schema;if(i==="full"||n.inlineContext(t)||/[^ \t\r\n\u000c]/.test(r)){if(!i){r=r.replace(/[ \t\r\n\u000c]+/g," ");
// If this starts with whitespace, and there is no node before it, or
// a hard break, or a text node that ends with whitespace, strip the
// leading space.
if(/^[ \t\r\n\u000c]/.test(r)&&this.open==this.nodes.length-1){var o=n.content[n.content.length-1];var u=t.previousSibling;if(!o||u&&u.nodeName=="BR"||o.isText&&/[ \t\r\n\u000c]$/.test(o.text))r=r.slice(1)}}else if(i==="full"){r=r.replace(/\r\n?/g,"\n")}else if(a.linebreakReplacement&&/[\r\n]/.test(r)&&this.top.findWrapping(a.linebreakReplacement.create())){var s=r.split(/\r?\n|\r/);for(var f=0;f<s.length;f++){if(f)this.insertNode(a.linebreakReplacement.create(),e,true);if(s[f])this.insertNode(a.text(s[f]),e,!/\S/.test(s[f]))}r=""}else{r=r.replace(/\r?\n|\r/g," ")}if(r)this.insertNode(a.text(r),e,!/\S/.test(r));this.findInText(t)}else{this.findInside(t)}};
// Try to find a handler for the given tag and use that to parse. If
// none is found, the element's content nodes are added directly.
t.prototype.addElement=function(t,e,r){var n=this.localPreserveWS,i=this.top;if(t.tagName=="PRE"||/pre/.test(t.style&&t.style.whiteSpace))this.localPreserveWS=true;var a=t.nodeName.toLowerCase(),o;if(listTags.hasOwnProperty(a)&&this.parser.normalizeLists)normalizeList(t);var u=this.options.ruleFromNode&&this.options.ruleFromNode(t)||(o=this.parser.matchTag(t,this,r));t:if(u?u.ignore:ignoreTags.hasOwnProperty(a)){this.findInside(t);this.ignoreFallback(t,e)}else if(!u||u.skip||u.closeParent){if(u&&u.closeParent)this.open=Math.max(0,this.open-1);else if(u&&u.skip.nodeType)t=u.skip;var s=void 0,f=this.needsBlock;if(blockTags.hasOwnProperty(a)){if(i.content.length&&i.content[0].isInline&&this.open){this.open--;i=this.top}s=true;if(!i.type)this.needsBlock=true}else if(!t.firstChild){this.leafFallback(t,e);break t}var l=u&&u.skip?e:this.readStyles(t,e);if(l)this.addAll(t,l);if(s)this.sync(i);this.needsBlock=f}else{var l=this.readStyles(t,e);if(l)this.addElementByRule(t,u,l,u.consuming===false?o:undefined)}this.localPreserveWS=n};
// Called for leaf DOM nodes that would otherwise be ignored
t.prototype.leafFallback=function(t,e){if(t.nodeName=="BR"&&this.top.type&&this.top.type.inlineContent)this.addTextNode(t.ownerDocument.createTextNode("\n"),e)};
// Called for ignored nodes
t.prototype.ignoreFallback=function(t,e){
// Ignored BR nodes should at least create an inline context
if(t.nodeName=="BR"&&(!this.top.type||!this.top.type.inlineContent))this.findPlace(this.parser.schema.text("-"),e,true)};
// Run any style parser associated with the node's styles. Either
// return an updated array of marks, or null to indicate some of the
// styles had a rule with `ignore` set.
t.prototype.readStyles=function(t,e){var r=t.style;
// Because many properties will only show up in 'normalized' form
// in `style.item` (i.e. text-decoration becomes
// text-decoration-line, text-decoration-color, etc), we directly
// query the styles mentioned in our rules instead of iterating
// over the items.
if(r&&r.length)for(var n=0;n<this.parser.matchedStyles.length;n++){var i=this.parser.matchedStyles[n],a=r.getPropertyValue(i);if(a){var o=function(t){var r=u.parser.matchStyle(i,a,u,t);if(!r)return s=t,"break";if(r.ignore)return{value:null};if(r.clearMark)e=e.filter((function(t){return!r.clearMark(t)}));else e=e.concat(u.parser.schema.marks[r.mark].create(r.attrs));if(r.consuming===false)t=r;else return s=t,"break";s=t};var u=this,s;for(var f=undefined;;){var l=o(f);f=s;if(typeof l==="object")return l.value;if(l==="break")break}}}return e};
// Look up a handler for the given node. If none are found, return
// false. Otherwise, apply it, use its return value to drive the way
// the node's content is wrapped, and return true.
t.prototype.addElementByRule=function(t,e,r,n){var i=this;var a,o;if(e.node){o=this.parser.schema.nodes[e.node];if(!o.isLeaf){var u=this.enter(o,e.attrs||null,r,e.preserveWhitespace);if(u){a=true;r=u}}else if(!this.insertNode(o.create(e.attrs),r,t.nodeName=="BR")){this.leafFallback(t,r)}}else{var s=this.parser.schema.marks[e.mark];r=r.concat(s.create(e.attrs))}var f=this.top;if(o&&o.isLeaf){this.findInside(t)}else if(n){this.addElement(t,r,n)}else if(e.getContent){this.findInside(t);e.getContent(t,this.parser.schema).forEach((function(t){return i.insertNode(t,r,false)}))}else{var l=t;if(typeof e.contentElement=="string")l=t.querySelector(e.contentElement);else if(typeof e.contentElement=="function")l=e.contentElement(t);else if(e.contentElement)l=e.contentElement;this.findAround(t,l,true);this.addAll(l,r);this.findAround(t,l,false)}if(a&&this.sync(f))this.open--};
// Add all child nodes between `startIndex` and `endIndex` (or the
// whole node, if not given). If `sync` is passed, use it to
// synchronize after every block element.
t.prototype.addAll=function(t,e,r,n){var i=r||0;for(var a=r?t.childNodes[r]:t.firstChild,o=n==null?null:t.childNodes[n];a!=o;a=a.nextSibling,++i){this.findAtPoint(t,i);this.addDOM(a,e)}this.findAtPoint(t,i)};
// Try to find a way to fit the given node type into the current
// context. May add intermediate wrappers and/or leave non-solid
// nodes that we're in.
t.prototype.findPlace=function(t,e,r){var n,i;for(var a=this.open,o=0;a>=0;a--){var u=this.nodes[a];var s=u.findWrapping(t);if(s&&(!n||n.length>s.length+o)){n=s;i=u;if(!s.length)break}if(u.solid){if(r)break;o+=2}}if(!n)return null;this.sync(i);for(var f=0;f<n.length;f++)e=this.enterInner(n[f],null,e,false);return e};
// Try to insert the given node, adjusting the context when needed.
t.prototype.insertNode=function(t,e,r){if(t.isInline&&this.needsBlock&&!this.top.type){var n=this.textblockFromContext();if(n)e=this.enterInner(n,null,e)}var i=this.findPlace(t,e,r);if(i){this.closeExtra();var a=this.top;if(a.match)a.match=a.match.matchType(t.type);var o=Mark$1.none;for(var u=0,s=i.concat(t.marks);u<s.length;u++){var f=s[u];if(a.type?a.type.allowsMarkType(f.type):markMayApply(f.type,t.type))o=f.addToSet(o)}a.content.push(t.mark(o));return true}return false};
// Try to start a node of the given type, adjusting the context when
// necessary.
t.prototype.enter=function(t,e,r,n){var i=this.findPlace(t.create(e),r,false);if(i)i=this.enterInner(t,e,r,true,n);return i};
// Open a node of the given type
t.prototype.enterInner=function(t,e,r,n,i){if(n===void 0){n=false}this.closeExtra();var a=this.top;a.match=a.match&&a.match.matchType(t);var o=wsOptionsFor(t,i,a.options);if(a.options&OPT_OPEN_LEFT&&a.content.length==0)o|=OPT_OPEN_LEFT;var u=Mark$1.none;r=r.filter((function(e){if(a.type?a.type.allowsMarkType(e.type):markMayApply(e.type,t)){u=e.addToSet(u);return false}return true}));this.nodes.push(new NodeContext(t,e,u,n,null,o));this.open++;return r};
// Make sure all nodes above this.open are finished and added to
// their parents
t.prototype.closeExtra=function(t){if(t===void 0){t=false}var e=this.nodes.length-1;if(e>this.open){for(;e>this.open;e--)this.nodes[e-1].content.push(this.nodes[e].finish(t));this.nodes.length=this.open+1}};t.prototype.finish=function(){this.open=0;this.closeExtra(this.isOpen);return this.nodes[0].finish(!!(this.isOpen||this.options.topOpen))};t.prototype.sync=function(t){for(var e=this.open;e>=0;e--){if(this.nodes[e]==t){this.open=e;return true}else if(this.localPreserveWS){this.nodes[e].options|=OPT_PRESERVE_WS}}return false};Object.defineProperty(t.prototype,"currentPos",{get:function(){this.closeExtra();var t=0;for(var e=this.open;e>=0;e--){var r=this.nodes[e].content;for(var n=r.length-1;n>=0;n--)t+=r[n].nodeSize;if(e)t++}return t},enumerable:false,configurable:true});t.prototype.findAtPoint=function(t,e){if(this.find)for(var r=0;r<this.find.length;r++){if(this.find[r].node==t&&this.find[r].offset==e)this.find[r].pos=this.currentPos}};t.prototype.findInside=function(t){if(this.find)for(var e=0;e<this.find.length;e++){if(this.find[e].pos==null&&t.nodeType==1&&t.contains(this.find[e].node))this.find[e].pos=this.currentPos}};t.prototype.findAround=function(t,e,r){if(t!=e&&this.find)for(var n=0;n<this.find.length;n++){if(this.find[n].pos==null&&t.nodeType==1&&t.contains(this.find[n].node)){var i=e.compareDocumentPosition(this.find[n].node);if(i&(r?2:4))this.find[n].pos=this.currentPos}}};t.prototype.findInText=function(t){if(this.find)for(var e=0;e<this.find.length;e++){if(this.find[e].node==t)this.find[e].pos=this.currentPos-(t.nodeValue.length-this.find[e].offset)}};
// Determines whether the given context string matches this context.
t.prototype.matchesContext=function(t){var e=this;if(t.indexOf("|")>-1)return t.split(/\s*\|\s*/).some(this.matchesContext,this);var r=t.split("/");var n=this.options.context;var i=!this.isOpen&&(!n||n.parent.type==this.nodes[0].type);var a=-(n?n.depth+1:0)+(i?0:1);var o=function(t,u){for(;t>=0;t--){var s=r[t];if(s==""){if(t==r.length-1||t==0)continue;for(;u>=a;u--)if(o(t-1,u))return true;return false}else{var f=u>0||u==0&&i?e.nodes[u].type:n&&u>=a?n.node(u-a).type:null;if(!f||f.name!=s&&!f.isInGroup(s))return false;u--}}return true};return o(r.length-1,this.open)};t.prototype.textblockFromContext=function(){var t=this.options.context;if(t)for(var e=t.depth;e>=0;e--){var r=t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;if(r&&r.isTextblock&&r.defaultAttrs)return r}for(var n in this.parser.schema.nodes){var i=this.parser.schema.nodes[n];if(i.isTextblock&&i.defaultAttrs)return i}};return t}();
// Kludge to work around directly nested list nodes produced by some
// tools and allowed by browsers to mean that the nested list is
// actually part of the list item above it.
function normalizeList(t){for(var e=t.firstChild,r=null;e;e=e.nextSibling){var n=e.nodeType==1?e.nodeName.toLowerCase():null;if(n&&listTags.hasOwnProperty(n)&&r){r.appendChild(e);e=r}else if(n=="li"){r=e}else if(n){r=null}}}
// Apply a CSS selector.
function matches(t,e){return(t.matches||t.msMatchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector).call(t,e)}function copy(t){var e={};for(var r in t)e[r]=t[r];return e}
// Used when finding a mark at the top level of a fragment parse.
// Checks whether it would be reasonable to apply a given mark type to
// a given node, by looking at the way the mark occurs in the schema.
function markMayApply(t,e){var r=e.schema.nodes;var n=function(n){var i=r[n];if(!i.allowsMarkType(t))return"continue";var a=[],o=function(t){a.push(t);for(var r=0;r<t.edgeCount;r++){var n=t.edge(r),i=n.type,u=n.next;if(i==e)return true;if(a.indexOf(u)<0&&o(u))return true}};if(o(i.contentMatch))return{value:true}};for(var i in r){var a=n(i);if(typeof a==="object")return a.value}}
/**
A DOM serializer knows how to convert ProseMirror nodes and
marks of various types to DOM nodes.
*/var DOMSerializer=/** @class */function(){
/**
    Create a serializer. `nodes` should map node names to functions
    that take a node and return a description of the corresponding
    DOM. `marks` does the same for mark names, but also gets an
    argument that tells it whether the mark's content is block or
    inline content (for typical use, it'll always be inline). A mark
    serializer may be `null` to indicate that marks of that type
    should not be serialized.
    */
function t(
/**
    The node serialization functions.
    */
t,
/**
    The mark serialization functions.
    */
e){this.nodes=t;this.marks=e}
/**
    Serialize the content of this fragment to a DOM fragment. When
    not in the browser, the `document` option, containing a DOM
    document, should be passed so that the serializer can create
    nodes.
    */t.prototype.serializeFragment=function(t,e,r){var n=this;if(e===void 0){e={}}if(!r)r=doc$1(e).createDocumentFragment();var i=r,a=[];t.forEach((function(t){if(a.length||t.marks.length){var r=0,o=0;while(r<a.length&&o<t.marks.length){var u=t.marks[o];if(!n.marks[u.type.name]){o++;continue}if(!u.eq(a[r][0])||u.type.spec.spanning===false)break;r++;o++}while(r<a.length)i=a.pop()[1];while(o<t.marks.length){var s=t.marks[o++];var f=n.serializeMark(s,t.isInline,e);if(f){a.push([s,i]);i.appendChild(f.dom);i=f.contentDOM||f.dom}}}i.appendChild(n.serializeNodeInner(t,e))}));return r};
/**
    @internal
    */t.prototype.serializeNodeInner=function(t,e){if(t.isText)return doc$1(e).createTextNode(t.text);var r=renderSpec(doc$1(e),this.nodes[t.type.name](t),null,t.attrs),n=r.dom,i=r.contentDOM;if(i){if(t.isLeaf)throw new RangeError("Content hole not allowed in a leaf node spec");this.serializeFragment(t.content,e,i)}return n};
/**
    Serialize this node to a DOM node. This can be useful when you
    need to serialize a part of a document, as opposed to the whole
    document. To serialize a whole document, use
    [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
    its [content](https://prosemirror.net/docs/ref/#model.Node.content).
    */t.prototype.serializeNode=function(t,e){if(e===void 0){e={}}var r=this.serializeNodeInner(t,e);for(var n=t.marks.length-1;n>=0;n--){var i=this.serializeMark(t.marks[n],t.isInline,e);if(i){(i.contentDOM||i.dom).appendChild(r);r=i.dom}}return r};
/**
    @internal
    */t.prototype.serializeMark=function(t,e,r){if(r===void 0){r={}}var n=this.marks[t.type.name];return n&&renderSpec(doc$1(r),n(t,e),null,t.attrs)};t.renderSpec=function(t,e,r,n){if(r===void 0){r=null}
// Kludge for backwards-compatibility with accidental original behavious
if(typeof e=="string")return{dom:t.createTextNode(e)};return renderSpec(t,e,r,n)};
/**
    Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
    properties in a schema's node and mark specs.
    */t.fromSchema=function(e){return e.cached.domSerializer||(e.cached.domSerializer=new t(this.nodesFromSchema(e),this.marksFromSchema(e)))};
/**
    Gather the serializers in a schema's node specs into an object.
    This can be useful as a base to build a custom serializer from.
    */t.nodesFromSchema=function(t){var e=gatherToDOM(t.nodes);if(!e.text)e.text=function(t){return t.text};return e};
/**
    Gather the serializers in a schema's mark specs into an object.
    */t.marksFromSchema=function(t){return gatherToDOM(t.marks)};return t}();function gatherToDOM(t){var e={};for(var r in t){var n=t[r].spec.toDOM;if(n)e[r]=n}return e}function doc$1(t){return t.document||window.document}var suspiciousAttributeCache=new WeakMap;function suspiciousAttributes(t){var e=suspiciousAttributeCache.get(t);if(e===undefined)suspiciousAttributeCache.set(t,e=suspiciousAttributesInner(t));return e}function suspiciousAttributesInner(t){var e=null;function r(t){if(t&&typeof t=="object"){if(Array.isArray(t)){if(typeof t[0]=="string"){if(!e)e=[];e.push(t)}else{for(var n=0;n<t.length;n++)r(t[n])}}else{for(var i in t)r(t[i])}}}r(t);return e}function renderSpec(t,e,r,n){if(e.nodeType==1)return{dom:e};if(e.dom&&e.dom.nodeType==1)return e;var i=e[0],a;if(typeof i!="string")throw new RangeError("Invalid array passed to renderSpec");if(n&&(a=suspiciousAttributes(n))&&a.indexOf(e)>-1)throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");var o=i.indexOf(" ");if(o>0){r=i.slice(0,o);i=i.slice(o+1)}var u;var s=r?t.createElementNS(r,i):t.createElement(i);var f=e[1],l=1;if(f&&typeof f=="object"&&f.nodeType==null&&!Array.isArray(f)){l=2;for(var c in f)if(f[c]!=null){var v=c.indexOf(" ");if(v>0)s.setAttributeNS(c.slice(0,v),c.slice(v+1),f[c]);else if(c=="style"&&s.style)s.style.cssText=f[c];else s.setAttribute(c,f[c])}}for(var h=l;h<e.length;h++){var d=e[h];if(d===0){if(h<e.length-1||h>l)throw new RangeError("Content hole must be the only child of its parent node");return{dom:s,contentDOM:s}}else if(typeof d=="string"){s.appendChild(t.createTextNode(d))}else{var p=renderSpec(t,d,r,n),g=p.dom,m=p.contentDOM;s.appendChild(g);if(m){if(u)throw new RangeError("Multiple content holes");u=m}}}return{dom:s,contentDOM:u}}
// Recovery values encode a range index and an offset. They are
// represented as numbers, because tons of them will be created when
// mapping, for example, a large number of decorations. The number's
// lower 16 bits provide the index, the remaining bits the offset.

// Note: We intentionally don't use bit shift operators to en- and
// decode these, since those clip to 32 bits, which we might in rare
// cases want to overflow. A 64-bit float can represent 48-bit
// integers precisely.
var lower16=65535;var factor16=Math.pow(2,16);function makeRecover(t,e){return t+e*factor16}function recoverIndex(t){return t&lower16}function recoverOffset(t){return(t-(t&lower16))/factor16}var DEL_BEFORE=1,DEL_AFTER=2,DEL_ACROSS=4,DEL_SIDE=8;
/**
An object representing a mapped position with extra
information.
*/var MapResult=/** @class */function(){
/**
    @internal
    */
function t(
/**
    The mapped version of the position.
    */
t,
/**
    @internal
    */
e,
/**
    @internal
    */
r){this.pos=t;this.delInfo=e;this.recover=r}Object.defineProperty(t.prototype,"deleted",{
/**
        Tells you whether the position was deleted, that is, whether the
        step removed the token on the side queried (via the `assoc`)
        argument from the document.
        */
get:function(){return(this.delInfo&DEL_SIDE)>0},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"deletedBefore",{
/**
        Tells you whether the token before the mapped position was deleted.
        */
get:function(){return(this.delInfo&(DEL_BEFORE|DEL_ACROSS))>0},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"deletedAfter",{
/**
        True when the token after the mapped position was deleted.
        */
get:function(){return(this.delInfo&(DEL_AFTER|DEL_ACROSS))>0},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"deletedAcross",{
/**
        Tells whether any of the steps mapped through deletes across the
        position (including both the token before and after the
        position).
        */
get:function(){return(this.delInfo&DEL_ACROSS)>0},enumerable:false,configurable:true});return t}();
/**
A map describing the deletions and insertions made by a step, which
can be used to find the correspondence between positions in the
pre-step version of a document and the same position in the
post-step version.
*/var StepMap=/** @class */function(){
/**
    Create a position map. The modifications to the document are
    represented as an array of numbers, in which each group of three
    represents a modified chunk as `[start, oldSize, newSize]`.
    */
function t(
/**
    @internal
    */
e,
/**
    @internal
    */
r){if(r===void 0){r=false}this.ranges=e;this.inverted=r;if(!e.length&&t.empty)return t.empty}
/**
    @internal
    */t.prototype.recover=function(t){var e=0,r=recoverIndex(t);if(!this.inverted)for(var n=0;n<r;n++)e+=this.ranges[n*3+2]-this.ranges[n*3+1];return this.ranges[r*3]+e+recoverOffset(t)};t.prototype.mapResult=function(t,e){if(e===void 0){e=1}return this._map(t,e,false)};t.prototype.map=function(t,e){if(e===void 0){e=1}return this._map(t,e,true)};
/**
    @internal
    */t.prototype._map=function(t,e,r){var n=0,i=this.inverted?2:1,a=this.inverted?1:2;for(var o=0;o<this.ranges.length;o+=3){var u=this.ranges[o]-(this.inverted?n:0);if(u>t)break;var s=this.ranges[o+i],f=this.ranges[o+a],l=u+s;if(t<=l){var c=!s?e:t==u?-1:t==l?1:e;var v=u+n+(c<0?0:f);if(r)return v;var h=t==(e<0?u:l)?null:makeRecover(o/3,t-u);var d=0;if(s){d|=t==u?DEL_AFTER:t==l?DEL_BEFORE:DEL_ACROSS;if(e<0?t!=u:t!=l)d|=DEL_SIDE}return new MapResult(v,d,h)}n+=f-s}return r?t+n:new MapResult(t+n,0,null)};
/**
    @internal
    */t.prototype.touches=function(t,e){var r=0,n=recoverIndex(e);var i=this.inverted?2:1,a=this.inverted?1:2;for(var o=0;o<this.ranges.length;o+=3){var u=this.ranges[o]-(this.inverted?r:0);if(u>t)break;var s=this.ranges[o+i],f=u+s;if(t<=f&&o==n*3)return true;r+=this.ranges[o+a]-s}return false};
/**
    Calls the given function on each of the changed ranges included in
    this map.
    */t.prototype.forEach=function(t){var e=this.inverted?2:1,r=this.inverted?1:2;for(var n=0,i=0;n<this.ranges.length;n+=3){var a=this.ranges[n],o=a-(this.inverted?i:0),u=a+(this.inverted?0:i);var s=this.ranges[n+e],f=this.ranges[n+r];t(o,o+s,u,u+f);i+=f-s}};
/**
    Create an inverted version of this map. The result can be used to
    map positions in the post-step document to the pre-step document.
    */t.prototype.invert=function(){return new t(this.ranges,!this.inverted)};
/**
    @internal
    */t.prototype.toString=function(){return(this.inverted?"-":"")+JSON.stringify(this.ranges)};
/**
    Create a map that moves all positions by offset `n` (which may be
    negative). This can be useful when applying steps meant for a
    sub-document to a larger document, or vice-versa.
    */t.offset=function(e){return e==0?t.empty:new t(e<0?[0,-e,0]:[0,0,e])};return t}();
/**
A StepMap that contains no changed ranges.
*/StepMap.empty=new StepMap([]);
/**
A mapping represents a pipeline of zero or more [step
maps](https://prosemirror.net/docs/ref/#transform.StepMap). It has special provisions for losslessly
handling mapping positions through a series of steps in which some
steps are inverted versions of earlier steps. (This comes up when
‘[rebasing](https://prosemirror.net/docs/guide/#transform.rebasing)’ steps for
collaboration or history management.)
*/var Mapping=/** @class */function(){
/**
    Create a new mapping with the given position maps.
    */
function t(t,
/**
    @internal
    */
e,
/**
    The starting position in the `maps` array, used when `map` or
    `mapResult` is called.
    */
r,
/**
    The end position in the `maps` array.
    */
n){if(r===void 0){r=0}if(n===void 0){n=t?t.length:0}this.mirror=e;this.from=r;this.to=n;this._maps=t||[];this.ownData=!(t||e)}Object.defineProperty(t.prototype,"maps",{
/**
        The step maps in this mapping.
        */
get:function(){return this._maps},enumerable:false,configurable:true});
/**
    Create a mapping that maps only through a part of this one.
    */t.prototype.slice=function(e,r){if(e===void 0){e=0}if(r===void 0){r=this.maps.length}return new t(this._maps,this.mirror,e,r)};
/**
    Add a step map to the end of this mapping. If `mirrors` is
    given, it should be the index of the step map that is the mirror
    image of this one.
    */t.prototype.appendMap=function(t,e){if(!this.ownData){this._maps=this._maps.slice();this.mirror=this.mirror&&this.mirror.slice();this.ownData=true}this.to=this._maps.push(t);if(e!=null)this.setMirror(this._maps.length-1,e)};
/**
    Add all the step maps in a given mapping to this one (preserving
    mirroring information).
    */t.prototype.appendMapping=function(t){for(var e=t.from,r=this._maps.length;e<t.to;e++){var n=t.getMirror(e);if(n!=null)n=n<e&&n>=t.from?r+(n-t.from):undefined;this.appendMap(t._maps[e],n)}};
/**
    Finds the offset of the step map that mirrors the map at the
    given offset, in this mapping (as per the second argument to
    `appendMap`).
    */t.prototype.getMirror=function(t){if(this.mirror)for(var e=0;e<this.mirror.length;e++)if(this.mirror[e]==t)return this.mirror[e+(e%2?-1:1)]};
/**
    @internal
    */t.prototype.setMirror=function(t,e){if(!this.mirror)this.mirror=[];this.mirror.push(t,e)};
/**
    Append the inverse of the given mapping to this one.
    */t.prototype.appendMappingInverted=function(t){for(var e=t.to-1,r=this._maps.length+t._maps.length;e>=t.from;e--){var n=t.getMirror(e);if(n!=null)n=n>e&&n<t.to?r-(n-t.from)-1:undefined;this.appendMap(t._maps[e].invert(),n)}};
/**
    Create an inverted version of this mapping.
    */t.prototype.invert=function(){var e=new t;e.appendMappingInverted(this);return e};
/**
    Map a position through this mapping.
    */t.prototype.map=function(t,e){if(e===void 0){e=1}if(this.mirror)return this._map(t,e,true);for(var r=this.from;r<this.to;r++)t=this._maps[r].map(t,e);return t};
/**
    Map a position through this mapping, returning a mapping
    result.
    */t.prototype.mapResult=function(t,e){if(e===void 0){e=1}return this._map(t,e,false)};
/**
    @internal
    */t.prototype._map=function(t,e,r){var n=0;for(var i=this.from;i<this.to;i++){var a=this._maps[i],o=a.mapResult(t,e);if(o.recover!=null){var u=this.getMirror(i);if(u!=null&&u>i&&u<this.to){i=u;t=this._maps[u].recover(o.recover);continue}}n|=o.delInfo;t=o.pos}return r?t:new MapResult(t,n,null)};return t}();var stepsByID=Object.create(null);
/**
A step object represents an atomic change. It generally applies
only to the document it was created for, since the positions
stored in it will only make sense for that document.

New steps are defined by creating classes that extend `Step`,
overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
methods, and registering your class with a unique
JSON-serialization identifier using
[`Step.jsonID`](https://prosemirror.net/docs/ref/#transform.Step^jsonID).
*/var Step=/** @class */function(){function t(){}
/**
    Get the step map that represents the changes made by this step,
    and which can be used to transform between positions in the old
    and the new document.
    */t.prototype.getMap=function(){return StepMap.empty};
/**
    Try to merge this step with another one, to be applied directly
    after it. Returns the merged step when possible, null if the
    steps can't be merged.
    */t.prototype.merge=function(t){return null};
/**
    Deserialize a step from its JSON representation. Will call
    through to the step class' own implementation of this method.
    */t.fromJSON=function(t,e){if(!e||!e.stepType)throw new RangeError("Invalid input for Step.fromJSON");var r=stepsByID[e.stepType];if(!r)throw new RangeError("No step type ".concat(e.stepType," defined"));return r.fromJSON(t,e)};
/**
    To be able to serialize steps to JSON, each step needs a string
    ID to attach to its JSON representation. Use this method to
    register an ID for your step classes. Try to pick something
    that's unlikely to clash with steps from other modules.
    */t.jsonID=function(t,e){if(t in stepsByID)throw new RangeError("Duplicate use of step JSON ID "+t);stepsByID[t]=e;e.prototype.jsonID=t;return e};return t}();
/**
The result of [applying](https://prosemirror.net/docs/ref/#transform.Step.apply) a step. Contains either a
new document or a failure value.
*/var StepResult=/** @class */function(){
/**
    @internal
    */
function t(
/**
    The transformed document, if successful.
    */
t,
/**
    The failure message, if unsuccessful.
    */
e){this.doc=t;this.failed=e}
/**
    Create a successful step result.
    */t.ok=function(e){return new t(e,null)};
/**
    Create a failed step result.
    */t.fail=function(e){return new t(null,e)};
/**
    Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
    arguments. Create a successful result if it succeeds, and a
    failed one if it throws a `ReplaceError`.
    */t.fromReplace=function(e,r,n,i){try{return t.ok(e.replace(r,n,i))}catch(e){if(e instanceof ReplaceError)return t.fail(e.message);throw e}};return t}();function mapFragment(t,e,r){var n=[];for(var i=0;i<t.childCount;i++){var a=t.child(i);if(a.content.size)a=a.copy(mapFragment(a.content,e,a));if(a.isInline)a=e(a,r,i);n.push(a)}return Fragment.fromArray(n)}
/**
Add a mark to all inline content between two positions.
*/var AddMarkStep=/** @class */function(t){__extends(e,t);
/**
    Create a mark step.
    */function e(
/**
    The start of the marked range.
    */
e,
/**
    The end of the marked range.
    */
r,
/**
    The mark to add.
    */
n){var i=t.call(this)||this;i.from=e;i.to=r;i.mark=n;return i}e.prototype.apply=function(t){var e=this;var r=t.slice(this.from,this.to),n=t.resolve(this.from);var i=n.node(n.sharedDepth(this.to));var a=new Slice(mapFragment(r.content,(function(t,r){if(!t.isAtom||!r.type.allowsMarkType(e.mark.type))return t;return t.mark(e.mark.addToSet(t.marks))}),i),r.openStart,r.openEnd);return StepResult.fromReplace(t,this.from,this.to,a)};e.prototype.invert=function(t){var r=this;var n=[];t.nodesBetween(this.from,this.to,(function(t,i){if(t.isInline&&t.isAtom){var a=r.mark.addToSet(t.marks);if(!Mark$1.sameSet(a,t.marks)){var o=Math.max(r.from,i),u=Math.min(r.to,i+t.nodeSize);pushMarkStep(RemoveMarkStep,o,u,r.mark,n);for(var s=0,f=t.marks;s<f.length;s++){var l=f[s];if(!l.isInSet(a))pushMarkStep(e,o,u,l,n)}}}}));return n.length==1?n[0]:new MarkSetStep(n)};e.prototype.map=function(t){var r=t.map(this.from,1),n=t.map(this.to,-1);if(r>=n)return null;return new e(r,n,this.mark)};e.prototype.merge=function(t){if(t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from)return new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark);return null};e.prototype.toJSON=function(){return{stepType:"addMark",mark:this.mark.toJSON(),from:this.from,to:this.to}};
/**
    @internal
    */e.fromJSON=function(t,r){if(typeof r.from!="number"||typeof r.to!="number")throw new RangeError("Invalid input for AddMarkStep.fromJSON");return new e(r.from,r.to,t.markFromJSON(r.mark))};return e}(Step);Step.jsonID("addMark",AddMarkStep);
/**
Remove a mark from all inline content between two positions.
*/var RemoveMarkStep=/** @class */function(t){__extends(e,t);
/**
    Create a mark-removing step.
    */function e(
/**
    The start of the unmarked range.
    */
e,
/**
    The end of the unmarked range.
    */
r,
/**
    The mark to remove.
    */
n){var i=t.call(this)||this;i.from=e;i.to=r;i.mark=n;return i}e.prototype.apply=function(t){var e=this;var r=t.slice(this.from,this.to);var n=new Slice(mapFragment(r.content,(function(t){return t.mark(e.mark.removeFromSet(t.marks))}),t),r.openStart,r.openEnd);return StepResult.fromReplace(t,this.from,this.to,n)};e.prototype.invert=function(t){var e=this;var r=[];t.nodesBetween(this.from,this.to,(function(t,n){if(t.isInline&&t.isAtom&&e.mark.isInSet(t.marks))pushMarkStep(AddMarkStep,Math.max(e.from,n),Math.min(e.to,n+t.nodeSize),e.mark,r)}));return r.length==1?r[0]:new MarkSetStep(r)};e.prototype.map=function(t){var r=t.map(this.from,1),n=t.map(this.to,-1);if(r>=n)return null;return new e(r,n,this.mark)};e.prototype.merge=function(t){if(t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from)return new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark);return null};e.prototype.toJSON=function(){return{stepType:"removeMark",mark:this.mark.toJSON(),from:this.from,to:this.to}};
/**
    @internal
    */e.fromJSON=function(t,r){if(typeof r.from!="number"||typeof r.to!="number")throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");return new e(r.from,r.to,t.markFromJSON(r.mark))};return e}(Step);Step.jsonID("removeMark",RemoveMarkStep);function pushMarkStep(t,e,r,n,i){var a=i.length?i[i.length-1]:null;if(a&&a instanceof t&&a.to==e&&a.mark.eq(n)){i[i.length-1]=new t(a.from,r,n)}else{i.push(new t(e,r,n))}}var MarkSetStep=/** @class */function(t){__extends(e,t);function e(e){var r=t.call(this)||this;r.steps=e;return r}e.prototype.apply=function(t){for(var e=0,r=this.steps;e<r.length;e++){var n=r[e];var i=n.apply(t);if(!i.doc)return i;t=i.doc}return new StepResult(t,null)};e.prototype.invert=function(t){return new e(this.steps.map((function(e){return e.invert(t)})))};e.prototype.map=function(t){var r=[];for(var n=0,i=this.steps;n<i.length;n++){var a=i[n];var o=a.map(t);if(o)r.push(o)}return r.length?new e(r):null};e.prototype.toJSON=function(){return{stepType:"markSet",steps:this.steps.map((function(t){return t.toJSON()}))}};e.fromJSON=function(t,r){if(!Array.isArray(r.steps)||!r.steps.every((function(t){return t.stepType=="addMark"||t.stepType=="removeMark"})))throw new RangeError("Invalid JSON for MarkSetStep");return new e(r.steps.map((function(e){return Step.fromJSON(t,e)})))};return e}(Step);Step.jsonID("markSet",MarkSetStep);
/**
Add a mark to a specific node.
*/var AddNodeMarkStep=/** @class */function(t){__extends(e,t);
/**
    Create a node mark step.
    */function e(
/**
    The position of the target node.
    */
e,
/**
    The mark to add.
    */
r){var n=t.call(this)||this;n.pos=e;n.mark=r;return n}e.prototype.apply=function(t){var e=t.nodeAt(this.pos);if(!e)return StepResult.fail("No node at mark step's position");var r=e.type.create(e.attrs,null,this.mark.addToSet(e.marks));return StepResult.fromReplace(t,this.pos,this.pos+1,new Slice(Fragment.from(r),0,e.isLeaf?0:1))};e.prototype.invert=function(t){var r=t.nodeAt(this.pos);if(r){var n=this.mark.addToSet(r.marks);if(n.length==r.marks.length){for(var i=0;i<r.marks.length;i++)if(!r.marks[i].isInSet(n))return new e(this.pos,r.marks[i]);return new e(this.pos,this.mark)}}return new RemoveNodeMarkStep(this.pos,this.mark)};e.prototype.map=function(t){var r=t.mapResult(this.pos,1);return r.deletedAfter?null:new e(r.pos,this.mark)};e.prototype.toJSON=function(){return{stepType:"addNodeMark",pos:this.pos,mark:this.mark.toJSON()}};
/**
    @internal
    */e.fromJSON=function(t,r){if(typeof r.pos!="number")throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");return new e(r.pos,t.markFromJSON(r.mark))};return e}(Step);Step.jsonID("addNodeMark",AddNodeMarkStep);
/**
Remove a mark from a specific node.
*/var RemoveNodeMarkStep=/** @class */function(t){__extends(e,t);
/**
    Create a mark-removing step.
    */function e(
/**
    The position of the target node.
    */
e,
/**
    The mark to remove.
    */
r){var n=t.call(this)||this;n.pos=e;n.mark=r;return n}e.prototype.apply=function(t){var e=t.nodeAt(this.pos);if(!e)return StepResult.fail("No node at mark step's position");var r=e.type.create(e.attrs,null,this.mark.removeFromSet(e.marks));return StepResult.fromReplace(t,this.pos,this.pos+1,new Slice(Fragment.from(r),0,e.isLeaf?0:1))};e.prototype.invert=function(t){var e=t.nodeAt(this.pos);if(!e||!this.mark.isInSet(e.marks))return this;return new AddNodeMarkStep(this.pos,this.mark)};e.prototype.map=function(t){var r=t.mapResult(this.pos,1);return r.deletedAfter?null:new e(r.pos,this.mark)};e.prototype.toJSON=function(){return{stepType:"removeNodeMark",pos:this.pos,mark:this.mark.toJSON()}};
/**
    @internal
    */e.fromJSON=function(t,r){if(typeof r.pos!="number")throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");return new e(r.pos,t.markFromJSON(r.mark))};return e}(Step);Step.jsonID("removeNodeMark",RemoveNodeMarkStep);
/**
Replace a part of the document with a slice of new content.
*/var ReplaceStep=/** @class */function(t){__extends(e,t);
/**
    The given `slice` should fit the 'gap' between `from` and
    `to`—the depths must line up, and the surrounding nodes must be
    able to be joined with the open sides of the slice. When
    `structure` is true, the step will fail if the content between
    from and to is not just a sequence of closing and then opening
    tokens (this is to guard against rebased replace steps
    overwriting something they weren't supposed to).
    */function e(
/**
    The start position of the replaced range.
    */
e,
/**
    The end position of the replaced range.
    */
r,
/**
    The slice to insert.
    */
n,
/**
    @internal
    */
i){if(i===void 0){i=false}var a=t.call(this)||this;a.from=e;a.to=r;a.slice=n;a.structure=i;return a}e.prototype.apply=function(t){if(this.structure&&contentBetween(t,this.from,this.to))return StepResult.fail("Structure replace would overwrite content");return StepResult.fromReplace(t,this.from,this.to,this.slice)};e.prototype.getMap=function(){return new StepMap([this.from,this.to-this.from,this.slice.size])};e.prototype.invert=function(t){return new e(this.from,this.from+this.slice.size,t.slice(this.from,this.to))};e.prototype.map=function(t){var r=t.mapResult(this.to,-1);var n=this.from==this.to&&e.MAP_BIAS<0?r:t.mapResult(this.from,1);if(n.deletedAcross&&r.deletedAcross)return null;return new e(n.pos,Math.max(n.pos,r.pos),this.slice,this.structure)};e.prototype.merge=function(t){if(!(t instanceof e)||t.structure||this.structure)return null;if(this.from+this.slice.size==t.from&&!this.slice.openEnd&&!t.slice.openStart){var r=this.slice.size+t.slice.size==0?Slice.empty:new Slice(this.slice.content.append(t.slice.content),this.slice.openStart,t.slice.openEnd);return new e(this.from,this.to+(t.to-t.from),r,this.structure)}else if(t.to==this.from&&!this.slice.openStart&&!t.slice.openEnd){var r=this.slice.size+t.slice.size==0?Slice.empty:new Slice(t.slice.content.append(this.slice.content),t.slice.openStart,this.slice.openEnd);return new e(t.from,this.to,r,this.structure)}else{return null}};e.prototype.toJSON=function(){var t={stepType:"replace",from:this.from,to:this.to};if(this.slice.size)t.slice=this.slice.toJSON();if(this.structure)t.structure=true;return t};
/**
    @internal
    */e.fromJSON=function(t,r){if(typeof r.from!="number"||typeof r.to!="number")throw new RangeError("Invalid input for ReplaceStep.fromJSON");return new e(r.from,r.to,Slice.fromJSON(t,r.slice),!!r.structure)};return e}(Step);
/**
By default, for backwards compatibility, an inserting step
mapped over an insertion at that same position fill move after
the inserted content. In a collaborative editing situation, that
can make redone insertions appear in unexpected places. You can
set this to -1 to make such mapping keep the step before the
insertion instead.
*/ReplaceStep.MAP_BIAS=1;Step.jsonID("replace",ReplaceStep);
/**
Replace a part of the document with a slice of content, but
preserve a range of the replaced content by moving it into the
slice.
*/var ReplaceAroundStep=/** @class */function(t){__extends(e,t);
/**
    Create a replace-around step with the given range and gap.
    `insert` should be the point in the slice into which the content
    of the gap should be moved. `structure` has the same meaning as
    it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
    */function e(
/**
    The start position of the replaced range.
    */
e,
/**
    The end position of the replaced range.
    */
r,
/**
    The start of preserved range.
    */
n,
/**
    The end of preserved range.
    */
i,
/**
    The slice to insert.
    */
a,
/**
    The position in the slice where the preserved range should be
    inserted.
    */
o,
/**
    @internal
    */
u){if(u===void 0){u=false}var s=t.call(this)||this;s.from=e;s.to=r;s.gapFrom=n;s.gapTo=i;s.slice=a;s.insert=o;s.structure=u;return s}e.prototype.apply=function(t){if(this.structure&&(contentBetween(t,this.from,this.gapFrom)||contentBetween(t,this.gapTo,this.to)))return StepResult.fail("Structure gap-replace would overwrite content");var e=t.slice(this.gapFrom,this.gapTo);if(e.openStart||e.openEnd)return StepResult.fail("Gap is not a flat range");var r=this.slice.insertAt(this.insert,e.content);if(!r)return StepResult.fail("Content does not fit in gap");return StepResult.fromReplace(t,this.from,this.to,r)};e.prototype.getMap=function(){return new StepMap([this.from,this.gapFrom-this.from,this.insert,this.gapTo,this.to-this.gapTo,this.slice.size-this.insert])};e.prototype.invert=function(t){var r=this.gapTo-this.gapFrom;return new e(this.from,this.from+this.slice.size+r,this.from+this.insert,this.from+this.insert+r,t.slice(this.from,this.to).removeBetween(this.gapFrom-this.from,this.gapTo-this.from),this.gapFrom-this.from,this.structure)};e.prototype.map=function(t){var r=t.mapResult(this.from,1),n=t.mapResult(this.to,-1);var i=this.from==this.gapFrom?r.pos:t.map(this.gapFrom,-1);var a=this.to==this.gapTo?n.pos:t.map(this.gapTo,1);if(r.deletedAcross&&n.deletedAcross||i<r.pos||a>n.pos||i>a)return null;return new e(r.pos,n.pos,i,a,this.slice,this.insert,this.structure)};e.prototype.toJSON=function(){var t={stepType:"replaceAround",from:this.from,to:this.to,gapFrom:this.gapFrom,gapTo:this.gapTo,insert:this.insert};if(this.slice.size)t.slice=this.slice.toJSON();if(this.structure)t.structure=true;return t};
/**
    @internal
    */e.fromJSON=function(t,r){if(typeof r.from!="number"||typeof r.to!="number"||typeof r.gapFrom!="number"||typeof r.gapTo!="number"||typeof r.insert!="number")throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");return new e(r.from,r.to,r.gapFrom,r.gapTo,Slice.fromJSON(t,r.slice),r.insert,!!r.structure)};return e}(Step);Step.jsonID("replaceAround",ReplaceAroundStep);function contentBetween(t,e,r){var n=t.resolve(e),i=r-e,a=n.depth;while(i>0&&a>0&&n.indexAfter(a)==n.node(a).childCount){a--;i--}if(i>0){var o=n.node(a).maybeChild(n.indexAfter(a));while(i>0){if(!o||o.isLeaf)return true;o=o.firstChild;i--}}return false}function addMark(t,e,r,n){var i=[];t.doc.nodesBetween(e,r,(function(t,a,o){if(!t.isInline)return;var u=t.marks;if(!n.isInSet(u)&&o.type.allowsMarkType(n.type)){var s=Math.max(a,e),f=Math.min(a+t.nodeSize,r);pushMarkStep(AddMarkStep,s,f,n,i)}}));i.forEach((function(e){return t.step(e)}))}function removeMark(t,e,r,n){var i=[],a=0;t.doc.nodesBetween(e,r,(function(t,o){if(!t.isInline||!t.isAtom)return;a++;var u=null;if(n instanceof MarkType){var s=t.marks,f;while(f=n.isInSet(s)){(u||(u=[])).push(f);s=f.removeFromSet(s)}}else if(n){if(n.isInSet(t.marks))u=[n]}else{u=t.marks}if(u&&u.length){var l=Math.min(o+t.nodeSize,r);for(var c=0;c<u.length;c++){var v=u[c],h=void 0;for(var d=0;d<i.length;d++){var p=i[d];if(p.step==a-1&&v.eq(i[d].style))h=p}if(h){h.to=l;h.step=a}else{i.push({style:v,from:Math.max(o,e),to:l,step:a})}}}}));i.forEach((function(e){return t.step(new RemoveMarkStep(e.from,e.to,e.style))}))}function clearIncompatible(t,e,r,n,i){if(n===void 0){n=r.contentMatch}if(i===void 0){i=true}var a=t.doc.nodeAt(e);var o=[],u=e+1;for(var s=0;s<a.childCount;s++){var f=a.child(s),l=u+f.nodeSize;var c=n.matchType(f.type);if(!c){o.push(new ReplaceStep(u,l,Slice.empty))}else{n=c;for(var v=0;v<f.marks.length;v++)if(!r.allowsMarkType(f.marks[v].type))t.step(new RemoveMarkStep(u,l,f.marks[v]));if(i&&f.isText&&r.whitespace!="pre"){var h=void 0,d=/\r?\n|\r/g,p=void 0;while(h=d.exec(f.text)){if(!p)p=new Slice(Fragment.from(r.schema.text(" ",r.allowedMarks(f.marks))),0,0);o.push(new ReplaceStep(u+h.index,u+h.index+h[0].length,p))}}}u=l}if(!n.validEnd){var g=n.fillBefore(Fragment.empty,true);t.replace(u,u,new Slice(g,0,0))}for(var m=o.length-1;m>=0;m--)t.step(o[m])}function canCut(t,e,r){return(e==0||t.canReplace(e,t.childCount))&&(r==t.childCount||t.canReplace(0,r))}
/**
Try to find a target depth to which the content in the given range
can be lifted. Will not go across
[isolating](https://prosemirror.net/docs/ref/#model.NodeSpec.isolating) parent nodes.
*/function liftTarget(t){var e=t.parent;var r=e.content.cutByIndex(t.startIndex,t.endIndex);for(var n=t.depth,i=0,a=0;;--n){var o=t.$from.node(n);var u=t.$from.index(n)+i,s=t.$to.indexAfter(n)-a;if(n<t.depth&&o.canReplace(u,s,r))return n;if(n==0||o.type.spec.isolating||!canCut(o,u,s))break;if(u)i=1;if(s<o.childCount)a=1}return null}function lift$2(t,e,r){var n=e.$from,i=e.$to,a=e.depth;var o=n.before(a+1),u=i.after(a+1);var s=o,f=u;var l=Fragment.empty,c=0;for(var v=a,h=false;v>r;v--)if(h||n.index(v)>0){h=true;l=Fragment.from(n.node(v).copy(l));c++}else{s--}var d=Fragment.empty,p=0;for(var v=a,h=false;v>r;v--)if(h||i.after(v+1)<i.end(v)){h=true;d=Fragment.from(i.node(v).copy(d));p++}else{f++}t.step(new ReplaceAroundStep(s,f,o,u,new Slice(l.append(d),c,p),l.size-c,true))}
/**
Try to find a valid way to wrap the content in the given range in a
node of the given type. May introduce extra nodes around and inside
the wrapper node, if necessary. Returns null if no valid wrapping
could be found. When `innerRange` is given, that range's content is
used as the content to fit into the wrapping, instead of the
content of `range`.
*/function findWrapping(t,e,r,n){if(r===void 0){r=null}if(n===void 0){n=t}var i=findWrappingOutside(t,e);var a=i&&findWrappingInside(n,e);if(!a)return null;return i.map(withAttrs).concat({type:e,attrs:r}).concat(a.map(withAttrs))}function withAttrs(t){return{type:t,attrs:null}}function findWrappingOutside(t,e){var r=t.parent,n=t.startIndex,i=t.endIndex;var a=r.contentMatchAt(n).findWrapping(e);if(!a)return null;var o=a.length?a[0]:e;return r.canReplaceWith(n,i,o)?a:null}function findWrappingInside(t,e){var r=t.parent,n=t.startIndex,i=t.endIndex;var a=r.child(n);var o=e.contentMatch.findWrapping(a.type);if(!o)return null;var u=o.length?o[o.length-1]:e;var s=u.contentMatch;for(var f=n;s&&f<i;f++)s=s.matchType(r.child(f).type);if(!s||!s.validEnd)return null;return o}function wrap(t,e,r){var n=Fragment.empty;for(var i=r.length-1;i>=0;i--){if(n.size){var a=r[i].type.contentMatch.matchFragment(n);if(!a||!a.validEnd)throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")}n=Fragment.from(r[i].type.create(r[i].attrs,n))}var o=e.start,u=e.end;t.step(new ReplaceAroundStep(o,u,o,u,new Slice(n,0,0),r.length,true))}function setBlockType$1(t,e,r,n,i){if(!n.isTextblock)throw new RangeError("Type given to setBlockType should be a textblock");var a=t.steps.length;t.doc.nodesBetween(e,r,(function(e,r){var o=typeof i=="function"?i(e):i;if(e.isTextblock&&!e.hasMarkup(n,o)&&canChangeType(t.doc,t.mapping.slice(a).map(r),n)){var u=null;if(n.schema.linebreakReplacement){var s=n.whitespace=="pre",f=!!n.contentMatch.matchType(n.schema.linebreakReplacement);if(s&&!f)u=false;else if(!s&&f)u=true}
// Ensure all markup that isn't allowed in the new node type is cleared
if(u===false)replaceLinebreaks(t,e,r,a);clearIncompatible(t,t.mapping.slice(a).map(r,1),n,undefined,u===null);var l=t.mapping.slice(a);var c=l.map(r,1),v=l.map(r+e.nodeSize,1);t.step(new ReplaceAroundStep(c,v,c+1,v-1,new Slice(Fragment.from(n.create(o,null,e.marks)),0,0),1,true));if(u===true)replaceNewlines(t,e,r,a);return false}}))}function replaceNewlines(t,e,r,n){e.forEach((function(i,a){if(i.isText){var o=void 0,u=/\r?\n|\r/g;while(o=u.exec(i.text)){var s=t.mapping.slice(n).map(r+1+a+o.index);t.replaceWith(s,s+1,e.type.schema.linebreakReplacement.create())}}}))}function replaceLinebreaks(t,e,r,n){e.forEach((function(i,a){if(i.type==i.type.schema.linebreakReplacement){var o=t.mapping.slice(n).map(r+1+a);t.replaceWith(o,o+1,e.type.schema.text("\n"))}}))}function canChangeType(t,e,r){var n=t.resolve(e),i=n.index();return n.parent.canReplaceWith(i,i+1,r)}
/**
Change the type, attributes, and/or marks of the node at `pos`.
When `type` isn't given, the existing node type is preserved,
*/function setNodeMarkup(t,e,r,n,i){var a=t.doc.nodeAt(e);if(!a)throw new RangeError("No node at given position");if(!r)r=a.type;var o=r.create(n,null,i||a.marks);if(a.isLeaf)return t.replaceWith(e,e+a.nodeSize,o);if(!r.validContent(a.content))throw new RangeError("Invalid content for node type "+r.name);t.step(new ReplaceAroundStep(e,e+a.nodeSize,e+1,e+a.nodeSize-1,new Slice(Fragment.from(o),0,0),1,true))}
/**
Check whether splitting at the given position is allowed.
*/function canSplit(t,e,r,n){if(r===void 0){r=1}var i=t.resolve(e),a=i.depth-r;var o=n&&n[n.length-1]||i.parent;if(a<0||i.parent.type.spec.isolating||!i.parent.canReplace(i.index(),i.parent.childCount)||!o.type.validContent(i.parent.content.cutByIndex(i.index(),i.parent.childCount)))return false;for(var u=i.depth-1,s=r-2;u>a;u--,s--){var f=i.node(u),l=i.index(u);if(f.type.spec.isolating)return false;var c=f.content.cutByIndex(l,f.childCount);var v=n&&n[s+1];if(v)c=c.replaceChild(0,v.type.create(v.attrs));var h=n&&n[s]||f;if(!f.canReplace(l+1,f.childCount)||!h.type.validContent(c))return false}var d=i.indexAfter(a);var p=n&&n[0];return i.node(a).canReplaceWith(d,d,p?p.type:i.node(a+1).type)}function split(t,e,r,n){if(r===void 0){r=1}var i=t.doc.resolve(e),a=Fragment.empty,o=Fragment.empty;for(var u=i.depth,s=i.depth-r,f=r-1;u>s;u--,f--){a=Fragment.from(i.node(u).copy(a));var l=n&&n[f];o=Fragment.from(l?l.type.create(l.attrs,o):i.node(u).copy(o))}t.step(new ReplaceStep(e,e,new Slice(a.append(o),r,r),true))}
/**
Test whether the blocks before and after a given position can be
joined.
*/function canJoin(t,e){var r=t.resolve(e),n=r.index();return joinable(r.nodeBefore,r.nodeAfter)&&r.parent.canReplace(n,n+1)}function canAppendWithSubstitutedLinebreaks(t,e){if(!e.content.size)t.type.compatibleContent(e.type);var r=t.contentMatchAt(t.childCount);var n=t.type.schema.linebreakReplacement;for(var i=0;i<e.childCount;i++){var a=e.child(i);var o=a.type==n?t.type.schema.nodes.text:a.type;r=r.matchType(o);if(!r)return false;if(!t.type.allowsMarks(a.marks))return false}return r.validEnd}function joinable(t,e){return!!(t&&e&&!t.isLeaf&&canAppendWithSubstitutedLinebreaks(t,e))}
/**
Find an ancestor of the given position that can be joined to the
block before (or after if `dir` is positive). Returns the joinable
point, if any.
*/function joinPoint(t,e,r){if(r===void 0){r=-1}var n=t.resolve(e);for(var i=n.depth;;i--){var a=void 0,o=void 0,u=n.index(i);if(i==n.depth){a=n.nodeBefore;o=n.nodeAfter}else if(r>0){a=n.node(i+1);u++;o=n.node(i).maybeChild(u)}else{a=n.node(i).maybeChild(u-1);o=n.node(i+1)}if(a&&!a.isTextblock&&joinable(a,o)&&n.node(i).canReplace(u,u+1))return e;if(i==0)break;e=r<0?n.before(i):n.after(i)}}function join(t,e,r){var n=null;var i=t.doc.type.schema.linebreakReplacement;var a=t.doc.resolve(e-r),o=a.node().type;if(i&&o.inlineContent){var u=o.whitespace=="pre";var s=!!o.contentMatch.matchType(i);if(u&&!s)n=false;else if(!u&&s)n=true}var f=t.steps.length;if(n===false){var l=t.doc.resolve(e+r);replaceLinebreaks(t,l.node(),l.before(),f)}if(o.inlineContent)clearIncompatible(t,e+r-1,o,a.node().contentMatchAt(a.index()),n==null);var c=t.mapping.slice(f),v=c.map(e-r);t.step(new ReplaceStep(v,c.map(e+r,-1),Slice.empty,true));if(n===true){var h=t.doc.resolve(v);replaceNewlines(t,h.node(),h.before(),t.steps.length)}return t}
/**
Try to find a point where a node of the given type can be inserted
near `pos`, by searching up the node hierarchy when `pos` itself
isn't a valid place but is at the start or end of a node. Return
null if no position was found.
*/function insertPoint(t,e,r){var n=t.resolve(e);if(n.parent.canReplaceWith(n.index(),n.index(),r))return e;if(n.parentOffset==0)for(var i=n.depth-1;i>=0;i--){var a=n.index(i);if(n.node(i).canReplaceWith(a,a,r))return n.before(i+1);if(a>0)return null}if(n.parentOffset==n.parent.content.size)for(var i=n.depth-1;i>=0;i--){var a=n.indexAfter(i);if(n.node(i).canReplaceWith(a,a,r))return n.after(i+1);if(a<n.node(i).childCount)return null}return null}
/**
Finds a position at or around the given position where the given
slice can be inserted. Will look at parent nodes' nearest boundary
and try there, even if the original position wasn't directly at the
start or end of that node. Returns null when no position was found.
*/function dropPoint(t,e,r){var n=t.resolve(e);if(!r.content.size)return e;var i=r.content;for(var a=0;a<r.openStart;a++)i=i.firstChild.content;for(var o=1;o<=(r.openStart==0&&r.size?2:1);o++){for(var u=n.depth;u>=0;u--){var s=u==n.depth?0:n.pos<=(n.start(u+1)+n.end(u+1))/2?-1:1;for(var f=0;f<2;f++){if(f){if(!s)break;s=-s}var l=n.index(u)+(s>0?1:0);var c=n.node(u),v=false;if(o==1){v=c.canReplace(l,l,i)}else{var h=c.contentMatchAt(l).findWrapping(i.firstChild.type);v=h&&c.canReplaceWith(l,l,h[0])}if(v)return s==0?n.pos:s<0?n.before(u+1):n.after(u+1)}}}return null}
/**
‘Fit’ a slice into a given position in the document, producing a
[step](https://prosemirror.net/docs/ref/#transform.Step) that inserts it. Will return null if
there's no meaningful way to insert the slice here, or inserting it
would be a no-op (an empty slice over an empty range).
*/function replaceStep(t,e,r,n){if(r===void 0){r=e}if(n===void 0){n=Slice.empty}if(e==r&&!n.size)return null;var i=t.resolve(e),a=t.resolve(r);
// Optimization -- avoid work if it's obvious that it's not needed.
if(fitsTrivially(i,a,n))return new ReplaceStep(e,r,n);return new Fitter(i,a,n).fit()}function fitsTrivially(t,e,r){return!r.openStart&&!r.openEnd&&t.start()==e.start()&&t.parent.canReplace(t.index(),e.index(),r.content)}
// Algorithm for 'placing' the elements of a slice into a gap:

// We consider the content of each node that is open to the left to be
// independently placeable. I.e. in <p("foo"), p("bar")>, when the
// paragraph on the left is open, "foo" can be placed (somewhere on
// the left side of the replacement gap) independently from p("bar").

// This class tracks the state of the placement progress in the
// following properties:

//  - `frontier` holds a stack of `{type, match}` objects that
//    represent the open side of the replacement. It starts at
//    `$from`, then moves forward as content is placed, and is finally
//    reconciled with `$to`.

//  - `unplaced` is a slice that represents the content that hasn't
//    been placed yet.

//  - `placed` is a fragment of placed content. Its open-start value
//    is implicit in `$from`, and its open-end value in `frontier`.
var Fitter=/** @class */function(){function t(t,e,r){this.$from=t;this.$to=e;this.unplaced=r;this.frontier=[];this.placed=Fragment.empty;for(var n=0;n<=t.depth;n++){var i=t.node(n);this.frontier.push({type:i.type,match:i.contentMatchAt(t.indexAfter(n))})}for(var a=t.depth;a>0;a--)this.placed=Fragment.from(t.node(a).copy(this.placed))}Object.defineProperty(t.prototype,"depth",{get:function(){return this.frontier.length-1},enumerable:false,configurable:true});t.prototype.fit=function(){
// As long as there's unplaced content, try to place some of it.
// If that fails, either increase the open score of the unplaced
// slice, or drop nodes from it, and then try again.
while(this.unplaced.size){var t=this.findFittable();if(t)this.placeNodes(t);else this.openMore()||this.dropNode()}
// When there's inline content directly after the frontier _and_
// directly after `this.$to`, we must generate a `ReplaceAround`
// step that pulls that content into the node after the frontier.
// That means the fitting must be done to the end of the textblock
// node after `this.$to`, not `this.$to` itself.
var e=this.mustMoveInline(),r=this.placed.size-this.depth-this.$from.depth;var n=this.$from,i=this.close(e<0?this.$to:n.doc.resolve(e));if(!i)return null;
// If closing to `$to` succeeded, create a step
var a=this.placed,o=n.depth,u=i.depth;while(o&&u&&a.childCount==1){// Normalize by dropping open parent nodes
a=a.firstChild.content;o--;u--}var s=new Slice(a,o,u);if(e>-1)return new ReplaceAroundStep(n.pos,e,this.$to.pos,this.$to.end(),s,r);if(s.size||n.pos!=this.$to.pos)// Don't generate no-op steps
return new ReplaceStep(n.pos,i.pos,s);return null};
// Find a position on the start spine of `this.unplaced` that has
// content that can be moved somewhere on the frontier. Returns two
// depths, one for the slice and one for the frontier.
t.prototype.findFittable=function(){var t=this.unplaced.openStart;for(var e=this.unplaced.content,r=0,n=this.unplaced.openEnd;r<t;r++){var i=e.firstChild;if(e.childCount>1)n=0;if(i.type.spec.isolating&&n<=r){t=r;break}e=i.content}
// Only try wrapping nodes (pass 2) after finding a place without
// wrapping failed.
for(var a=1;a<=2;a++){for(var o=a==1?t:this.unplaced.openStart;o>=0;o--){var u=void 0,s=null;if(o){s=contentAt(this.unplaced.content,o-1).firstChild;u=s.content}else{u=this.unplaced.content}var f=u.firstChild;for(var l=this.depth;l>=0;l--){var c=this.frontier[l],v=c.type,h=c.match,d=void 0,p=null;
// In pass 1, if the next node matches, or there is no next
// node but the parents look compatible, we've found a
// place.
if(a==1&&(f?h.matchType(f.type)||(p=h.fillBefore(Fragment.from(f),false)):s&&v.compatibleContent(s.type)))return{sliceDepth:o,frontierDepth:l,parent:s,inject:p};
// In pass 2, look for a set of wrapping nodes that make
// `first` fit here.
else if(a==2&&f&&(d=h.findWrapping(f.type)))return{sliceDepth:o,frontierDepth:l,parent:s,wrap:d};
// Don't continue looking further up if the parent node
// would fit here.
if(s&&h.matchType(s.type))break}}}};t.prototype.openMore=function(){var t=this.unplaced,e=t.content,r=t.openStart,n=t.openEnd;if(maxOpen(e,-1)<=r)return false;if(this.unplaced.size>1&&maxOpen(e,1)>n)n++;this.unplaced=new Slice(e,r+1,n);return true};t.prototype.dropNode=function(){var t=this.unplaced,e=t.content,r=t.openStart,n=t.openEnd;var i=contentAt(e,r);if(i.childCount<=1&&r>0){var a=e.size-r<=r+i.size;this.unplaced=new Slice(dropFromFragment(e,r-1,1),r-1,a?r-1:n)}else{this.unplaced=new Slice(dropFromFragment(e,r,1),r,n)}};
// Move content from the unplaced slice at `sliceDepth` to the
// frontier node at `frontierDepth`. Close that frontier node when
// applicable.
t.prototype.placeNodes=function(t){var e=t.sliceDepth,r=t.frontierDepth,n=t.parent,i=t.inject,a=t.wrap;while(this.depth>r)this.closeFrontierNode();if(a)for(var o=0;o<a.length;o++)this.openFrontierNode(a[o]);var u=this.unplaced,s=n?n.content:u.content;var f=u.openStart-e;var l=0,c=[];var v=this.frontier[r],h=v.match,d=v.type;if(i){for(var p=0;p<i.childCount;p++)c.push(i.child(p));h=h.matchFragment(i)}
// Computes the amount of (end) open nodes at the end of the
// fragment. When 0, the parent is open, but no more. When
// negative, nothing is open.
var g=s.size+e-(u.content.size-u.openEnd);
// Scan over the fragment, fitting as many child nodes as
// possible.
while(l<s.childCount){var m=s.child(l),b=h.matchType(m.type);if(!b)break;l++;if(l>1||f==0||m.content.size){// Drop empty open nodes
h=b;c.push(closeNodeStart(m.mark(d.allowedMarks(m.marks)),l==1?f:0,l==s.childCount?g:-1))}}var w=l==s.childCount;if(!w)g=-1;this.placed=addToFragment(this.placed,r,Fragment.from(c));this.frontier[r].match=h;
// If the parent types match, and the entire node was moved, and
// it's not open, close this frontier node right away.
if(w&&g<0&&n&&n.type==this.frontier[this.depth].type&&this.frontier.length>1)this.closeFrontierNode();
// Add new frontier nodes for any open nodes at the end.
for(var S=0,E=c[c.length-1];E&&S<g;S++){this.frontier.push({type:E.type,match:E.contentMatchAt(E.childCount)});E=E.lastChild}
// Update `this.unplaced`. Drop the entire node from which we
// placed it we got to its end, otherwise just drop the placed
// nodes.
this.unplaced=!w?new Slice(dropFromFragment(u.content,e,l),e,u.openEnd):e==0?Slice.empty:new Slice(dropFromFragment(u.content,e-1,1),e-1,g<0?u.openEnd:e-1)};t.prototype.mustMoveInline=function(){if(!this.$to.parent.isTextblock)return-1;var t=this.frontier[this.depth],e;if(!t.type.isTextblock||!contentAfterFits(this.$to,this.$to.depth,t.type,t.match,false)||this.$to.depth==this.depth&&(e=this.findCloseLevel(this.$to))&&e.depth==this.depth)return-1;var r=this.$to.depth,n=this.$to.after(r);while(r>1&&n==this.$to.end(--r))++n;return n};t.prototype.findCloseLevel=function(t){t:for(var e=Math.min(this.depth,t.depth);e>=0;e--){var r=this.frontier[e],n=r.match,i=r.type;var a=e<t.depth&&t.end(e+1)==t.pos+(t.depth-(e+1));var o=contentAfterFits(t,e,i,n,a);if(!o)continue;for(var u=e-1;u>=0;u--){var s=this.frontier[u],f=s.match,l=s.type;var c=contentAfterFits(t,u,l,f,true);if(!c||c.childCount)continue t}return{depth:e,fit:o,move:a?t.doc.resolve(t.after(e+1)):t}}};t.prototype.close=function(t){var e=this.findCloseLevel(t);if(!e)return null;while(this.depth>e.depth)this.closeFrontierNode();if(e.fit.childCount)this.placed=addToFragment(this.placed,e.depth,e.fit);t=e.move;for(var r=e.depth+1;r<=t.depth;r++){var n=t.node(r),i=n.type.contentMatch.fillBefore(n.content,true,t.index(r));this.openFrontierNode(n.type,n.attrs,i)}return t};t.prototype.openFrontierNode=function(t,e,r){if(e===void 0){e=null}var n=this.frontier[this.depth];n.match=n.match.matchType(t);this.placed=addToFragment(this.placed,this.depth,Fragment.from(t.create(e,r)));this.frontier.push({type:t,match:t.contentMatch})};t.prototype.closeFrontierNode=function(){var t=this.frontier.pop();var e=t.match.fillBefore(Fragment.empty,true);if(e.childCount)this.placed=addToFragment(this.placed,this.frontier.length,e)};return t}();function dropFromFragment(t,e,r){if(e==0)return t.cutByIndex(r,t.childCount);return t.replaceChild(0,t.firstChild.copy(dropFromFragment(t.firstChild.content,e-1,r)))}function addToFragment(t,e,r){if(e==0)return t.append(r);return t.replaceChild(t.childCount-1,t.lastChild.copy(addToFragment(t.lastChild.content,e-1,r)))}function contentAt(t,e){for(var r=0;r<e;r++)t=t.firstChild.content;return t}function closeNodeStart(t,e,r){if(e<=0)return t;var n=t.content;if(e>1)n=n.replaceChild(0,closeNodeStart(n.firstChild,e-1,n.childCount==1?r-1:0));if(e>0){n=t.type.contentMatch.fillBefore(n).append(n);if(r<=0)n=n.append(t.type.contentMatch.matchFragment(n).fillBefore(Fragment.empty,true))}return t.copy(n)}function contentAfterFits(t,e,r,n,i){var a=t.node(e),o=i?t.indexAfter(e):t.index(e);if(o==a.childCount&&!r.compatibleContent(a.type))return null;var u=n.fillBefore(a.content,true,o);return u&&!invalidMarks(r,a.content,o)?u:null}function invalidMarks(t,e,r){for(var n=r;n<e.childCount;n++)if(!t.allowsMarks(e.child(n).marks))return true;return false}function definesContent(t){return t.spec.defining||t.spec.definingForContent}function maxOpen(t,e){for(var r=0;;r++){var n=e<0?t.firstChild:t.lastChild;if(!n||n.isAtom)return r;t=n.content}}function replaceRange(t,e,r,n){if(!n.size)return t.deleteRange(e,r);var i=t.doc.resolve(e),a=t.doc.resolve(r);if(fitsTrivially(i,a,n))return t.step(new ReplaceStep(e,r,n));var o=coveredDepths(i,a);
// Can't replace the whole document, so remove 0 if it's present
if(o[o.length-1]==0)o.pop();
// Negative numbers represent not expansion over the whole node at
// that depth, but replacing from $from.before(-D) to $to.pos.
var u=-(i.depth+1);o.unshift(u);
// This loop picks a preferred target depth, if one of the covering
// depths is not outside of a defining node, and adds negative
// depths for any depth that has $from at its start and does not
// cross a defining node.
for(var s=i.depth,f=i.pos-1;s>0;s--,f--){var l=i.node(s).type.spec;if(l.defining||l.definingAsContext||l.isolating)break;if(o.indexOf(s)>-1)u=s;else if(i.before(s)==f)o.splice(1,0,-s)}
// Try to fit each possible depth of the slice into each possible
// target depth, starting with the preferred depths.
var c=o.indexOf(u);var v=[],h=n.openStart;for(var d=n.content,p=0;;p++){var g=d.firstChild;v.push(g);if(p==n.openStart)break;d=g.content}
// Back up preferredDepth to cover defining textblocks directly
// above it, possibly skipping a non-defining textblock.
for(var s=h-1;s>=0;s--){var m=v[s],b=definesContent(m.type);if(b&&!m.sameMarkup(i.node(Math.abs(u)-1)))h=s;else if(b||!m.type.isTextblock)break}for(var w=n.openStart;w>=0;w--){var S=(w+h+1)%(n.openStart+1);var E=v[S];if(!E)continue;for(var T=0;T<o.length;T++){
// Loop over possible expansion levels, starting with the
// preferred one
var y=o[(T+c)%o.length],k=true;if(y<0){k=false;y=-y}var R=i.node(y-1),x=i.index(y-1);if(R.canReplaceWith(x,x,E.type,E.marks))return t.replace(i.before(y),k?a.after(y):r,new Slice(closeFragment(n.content,0,n.openStart,S),S,n.openEnd))}}var A=t.steps.length;for(var C=o.length-1;C>=0;C--){t.replace(e,r,n);if(t.steps.length>A)break;var _=o[C];if(_<0)continue;e=i.before(_);r=a.after(_)}}function closeFragment(t,e,r,n,i){if(e<r){var a=t.firstChild;t=t.replaceChild(0,a.copy(closeFragment(a.content,e+1,r,n,a)))}if(e>n){var o=i.contentMatchAt(0);var u=o.fillBefore(t).append(t);t=u.append(o.matchFragment(u).fillBefore(Fragment.empty,true))}return t}function replaceRangeWith(t,e,r,n){if(!n.isInline&&e==r&&t.doc.resolve(e).parent.content.size){var i=insertPoint(t.doc,e,n.type);if(i!=null)e=r=i}t.replaceRange(e,r,new Slice(Fragment.from(n),0,0))}function deleteRange$1(t,e,r){var n=t.doc.resolve(e),i=t.doc.resolve(r);
// When the deleted range spans from the start of one textblock to
// the start of another one, move out of the start of both blocks.
if(n.parent.isTextblock&&i.parent.isTextblock&&n.start()!=i.start()&&n.parentOffset==0&&i.parentOffset==0){var a=n.sharedDepth(r),o=false;for(var u=n.depth;u>a;u--)if(n.node(u).type.spec.isolating)o=true;for(var u=i.depth;u>a;u--)if(i.node(u).type.spec.isolating)o=true;if(!o){for(var u=n.depth;u>0&&e==n.start(u);u--)e=n.before(u);for(var u=i.depth;u>0&&r==i.start(u);u--)r=i.before(u);n=t.doc.resolve(e);i=t.doc.resolve(r)}}var s=coveredDepths(n,i);for(var f=0;f<s.length;f++){var l=s[f],c=f==s.length-1;if(c&&l==0||n.node(l).type.contentMatch.validEnd)return t.delete(n.start(l),i.end(l));if(l>0&&(c||n.node(l-1).canReplace(n.index(l-1),i.indexAfter(l-1))))return t.delete(n.before(l),i.after(l))}for(var u=1;u<=n.depth&&u<=i.depth;u++){if(e-n.start(u)==n.depth-u&&r>n.end(u)&&i.end(u)-r!=i.depth-u&&n.start(u-1)==i.start(u-1)&&n.node(u-1).canReplace(n.index(u-1),i.index(u-1)))return t.delete(n.before(u),r)}t.delete(e,r)}
// Returns an array of all depths for which $from - $to spans the
// whole content of the nodes at that depth.
function coveredDepths(t,e){var r=[],n=Math.min(t.depth,e.depth);for(var i=n;i>=0;i--){var a=t.start(i);if(a<t.pos-(t.depth-i)||e.end(i)>e.pos+(e.depth-i)||t.node(i).type.spec.isolating||e.node(i).type.spec.isolating)break;if(a==e.start(i)||i==t.depth&&i==e.depth&&t.parent.inlineContent&&e.parent.inlineContent&&i&&e.start(i-1)==a-1)r.push(i)}return r}
/**
Update an attribute in a specific node.
*/var AttrStep=/** @class */function(t){__extends(e,t);
/**
    Construct an attribute step.
    */function e(
/**
    The position of the target node.
    */
e,
/**
    The attribute to set.
    */
r,
// The attribute's new value.
n){var i=t.call(this)||this;i.pos=e;i.attr=r;i.value=n;return i}e.prototype.apply=function(t){var e=t.nodeAt(this.pos);if(!e)return StepResult.fail("No node at attribute step's position");var r=Object.create(null);for(var n in e.attrs)r[n]=e.attrs[n];r[this.attr]=this.value;var i=e.type.create(r,null,e.marks);return StepResult.fromReplace(t,this.pos,this.pos+1,new Slice(Fragment.from(i),0,e.isLeaf?0:1))};e.prototype.getMap=function(){return StepMap.empty};e.prototype.invert=function(t){return new e(this.pos,this.attr,t.nodeAt(this.pos).attrs[this.attr])};e.prototype.map=function(t){var r=t.mapResult(this.pos,1);return r.deletedAfter?null:new e(r.pos,this.attr,this.value)};e.prototype.toJSON=function(){return{stepType:"attr",pos:this.pos,attr:this.attr,value:this.value}};e.fromJSON=function(t,r){if(typeof r.pos!="number"||typeof r.attr!="string")throw new RangeError("Invalid input for AttrStep.fromJSON");return new e(r.pos,r.attr,r.value)};return e}(Step);Step.jsonID("attr",AttrStep);
/**
Update an attribute in the doc node.
*/var DocAttrStep=/** @class */function(t){__extends(e,t);
/**
    Construct an attribute step.
    */function e(
/**
    The attribute to set.
    */
e,
// The attribute's new value.
r){var n=t.call(this)||this;n.attr=e;n.value=r;return n}e.prototype.apply=function(t){var e=Object.create(null);for(var r in t.attrs)e[r]=t.attrs[r];e[this.attr]=this.value;var n=t.type.create(e,t.content,t.marks);return StepResult.ok(n)};e.prototype.getMap=function(){return StepMap.empty};e.prototype.invert=function(t){return new e(this.attr,t.attrs[this.attr])};e.prototype.map=function(t){return this};e.prototype.toJSON=function(){return{stepType:"docAttr",attr:this.attr,value:this.value}};e.fromJSON=function(t,r){if(typeof r.attr!="string")throw new RangeError("Invalid input for DocAttrStep.fromJSON");return new e(r.attr,r.value)};return e}(Step);Step.jsonID("docAttr",DocAttrStep);
/**
@internal
*/var TransformError=/** @class */function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e}(Error);TransformError=function t(e){var r=Error.call(this,e);r.__proto__=t.prototype;return r};TransformError.prototype=Object.create(Error.prototype);TransformError.prototype.constructor=TransformError;TransformError.prototype.name="TransformError";
/**
Abstraction to build up and track an array of
[steps](https://prosemirror.net/docs/ref/#transform.Step) representing a document transformation.

Most transforming methods return the `Transform` object itself, so
that they can be chained.
*/var Transform=/** @class */function(){
/**
    Create a transform that starts with the given document.
    */
function t(
/**
    The current document (the result of applying the steps in the
    transform).
    */
t){this.doc=t;
/**
        The steps in this transform.
        */this.steps=[];
/**
        The documents before each of the steps.
        */this.docs=[];
/**
        A mapping with the maps for each of the steps in this transform.
        */this.mapping=new Mapping}Object.defineProperty(t.prototype,"before",{
/**
        The starting document.
        */
get:function(){return this.docs.length?this.docs[0]:this.doc},enumerable:false,configurable:true});
/**
    Apply a new step in this transform, saving the result. Throws an
    error when the step fails.
    */t.prototype.step=function(t){var e=this.maybeStep(t);if(e.failed)throw new TransformError(e.failed);return this};
/**
    Try to apply a step in this transformation, ignoring it if it
    fails. Returns the step result.
    */t.prototype.maybeStep=function(t){var e=t.apply(this.doc);if(!e.failed)this.addStep(t,e.doc);return e};Object.defineProperty(t.prototype,"docChanged",{
/**
        True when the document has been changed (when there are any
        steps).
        */
get:function(){return this.steps.length>0},enumerable:false,configurable:true});
/**
    Return a single range, in post-transform document positions,
    that covers all content changed by this transform. Returns null
    if no replacements are made. Note that this will ignore changes
    that add/remove marks without replacing the underlying content.
    */t.prototype.changedRange=function(){var t=1e9,e=-1e9;for(var r=0;r<this.mapping.maps.length;r++){var n=this.mapping.maps[r];if(r){t=n.map(t,1);e=n.map(e,-1)}n.forEach((function(r,n,i,a){t=Math.min(t,i);e=Math.max(e,a)}))}return t==1e9?null:{from:t,to:e}};
/**
    @internal
    */t.prototype.addStep=function(t,e){this.docs.push(this.doc);this.steps.push(t);this.mapping.appendMap(t.getMap());this.doc=e};
/**
    Replace the part of the document between `from` and `to` with the
    given `slice`.
    */t.prototype.replace=function(t,e,r){if(e===void 0){e=t}if(r===void 0){r=Slice.empty}var n=replaceStep(this.doc,t,e,r);if(n)this.step(n);return this};
/**
    Replace the given range with the given content, which may be a
    fragment, node, or array of nodes.
    */t.prototype.replaceWith=function(t,e,r){return this.replace(t,e,new Slice(Fragment.from(r),0,0))};
/**
    Delete the content between the given positions.
    */t.prototype.delete=function(t,e){return this.replace(t,e,Slice.empty)};
/**
    Insert the given content at the given position.
    */t.prototype.insert=function(t,e){return this.replaceWith(t,t,e)};
/**
    Replace a range of the document with a given slice, using
    `from`, `to`, and the slice's
    [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
    than fixed start and end points. This method may grow the
    replaced area or close open nodes in the slice in order to get a
    fit that is more in line with WYSIWYG expectations, by dropping
    fully covered parent nodes of the replaced region when they are
    marked [non-defining as
    context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
    open parent node from the slice that _is_ marked as [defining
    its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
    
    This is the method, for example, to handle paste. The similar
    [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
    primitive tool which will _not_ move the start and end of its given
    range, and is useful in situations where you need more precise
    control over what happens.
    */t.prototype.replaceRange=function(t,e,r){replaceRange(this,t,e,r);return this};
/**
    Replace the given range with a node, but use `from` and `to` as
    hints, rather than precise positions. When from and to are the same
    and are at the start or end of a parent node in which the given
    node doesn't fit, this method may _move_ them out towards a parent
    that does allow the given node to be placed. When the given range
    completely covers a parent node, this method may completely replace
    that parent node.
    */t.prototype.replaceRangeWith=function(t,e,r){replaceRangeWith(this,t,e,r);return this};
/**
    Delete the given range, expanding it to cover fully covered
    parent nodes until a valid replace is found.
    */t.prototype.deleteRange=function(t,e){deleteRange$1(this,t,e);return this};
/**
    Split the content in the given range off from its parent, if there
    is sibling content before or after it, and move it up the tree to
    the depth specified by `target`. You'll probably want to use
    [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
    sure the lift is valid.
    */t.prototype.lift=function(t,e){lift$2(this,t,e);return this};
/**
    Join the blocks around the given position. If depth is 2, their
    last and first siblings are also joined, and so on.
    */t.prototype.join=function(t,e){if(e===void 0){e=1}join(this,t,e);return this};
/**
    Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
    The wrappers are assumed to be valid in this position, and should
    probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
    */t.prototype.wrap=function(t,e){wrap(this,t,e);return this};
/**
    Set the type of all textblocks (partly) between `from` and `to` to
    the given node type with the given attributes.
    */t.prototype.setBlockType=function(t,e,r,n){if(e===void 0){e=t}if(n===void 0){n=null}setBlockType$1(this,t,e,r,n);return this};
/**
    Change the type, attributes, and/or marks of the node at `pos`.
    When `type` isn't given, the existing node type is preserved,
    */t.prototype.setNodeMarkup=function(t,e,r,n){if(r===void 0){r=null}setNodeMarkup(this,t,e,r,n);return this};
/**
    Set a single attribute on a given node to a new value.
    The `pos` addresses the document content. Use `setDocAttribute`
    to set attributes on the document itself.
    */t.prototype.setNodeAttribute=function(t,e,r){this.step(new AttrStep(t,e,r));return this};
/**
    Set a single attribute on the document to a new value.
    */t.prototype.setDocAttribute=function(t,e){this.step(new DocAttrStep(t,e));return this};
/**
    Add a mark to the node at position `pos`.
    */t.prototype.addNodeMark=function(t,e){this.step(new AddNodeMarkStep(t,e));return this};
/**
    Remove a mark (or all marks of the given type) from the node at
    position `pos`.
    */t.prototype.removeNodeMark=function(t,e){var r=this.doc.nodeAt(t);if(!r)throw new RangeError("No node at position "+t);if(e instanceof Mark$1){if(e.isInSet(r.marks))this.step(new RemoveNodeMarkStep(t,e))}else{var n=r.marks,i,a=[];while(i=e.isInSet(n)){a.push(new RemoveNodeMarkStep(t,i));n=i.removeFromSet(n)}for(var o=a.length-1;o>=0;o--)this.step(a[o])}return this};
/**
    Split the node at the given position, and optionally, if `depth` is
    greater than one, any number of nodes above that. By default, the
    parts split off will inherit the node type of the original node.
    This can be changed by passing an array of types and attributes to
    use after the split (with the outermost nodes coming first).
    */t.prototype.split=function(t,e,r){if(e===void 0){e=1}split(this,t,e,r);return this};
/**
    Add the given mark to the inline content between `from` and `to`.
    */t.prototype.addMark=function(t,e,r){addMark(this,t,e,r);return this};
/**
    Remove marks from inline nodes between `from` and `to`. When
    `mark` is a single mark, remove precisely that mark. When it is
    a mark type, remove all marks of that type. When it is null,
    remove all marks of any type.
    */t.prototype.removeMark=function(t,e,r){removeMark(this,t,e,r);return this};
/**
    Removes all marks and nodes from the content of the node at
    `pos` that don't match the given new parent node type. Accepts
    an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
    third argument.
    */t.prototype.clearIncompatible=function(t,e,r){clearIncompatible(this,t,e,r);return this};return t}();var classesById=Object.create(null);
/**
Superclass for editor selections. Every selection type should
extend this. Should not be instantiated directly.
*/var Selection=/** @class */function(){
/**
    Initialize a selection with the head and anchor and ranges. If no
    ranges are given, constructs a single range across `$anchor` and
    `$head`.
    */
function t(
/**
    The resolved anchor of the selection (the side that stays in
    place when the selection is modified).
    */
t,
/**
    The resolved head of the selection (the side that moves when
    the selection is modified).
    */
e,r){this.$anchor=t;this.$head=e;this.ranges=r||[new SelectionRange(t.min(e),t.max(e))]}Object.defineProperty(t.prototype,"anchor",{
/**
        The selection's anchor, as an unresolved position.
        */
get:function(){return this.$anchor.pos},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"head",{
/**
        The selection's head.
        */
get:function(){return this.$head.pos},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"from",{
/**
        The lower bound of the selection's main range.
        */
get:function(){return this.$from.pos},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"to",{
/**
        The upper bound of the selection's main range.
        */
get:function(){return this.$to.pos},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"$from",{
/**
        The resolved lower  bound of the selection's main range.
        */
get:function(){return this.ranges[0].$from},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"$to",{
/**
        The resolved upper bound of the selection's main range.
        */
get:function(){return this.ranges[0].$to},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"empty",{
/**
        Indicates whether the selection contains any content.
        */
get:function(){var t=this.ranges;for(var e=0;e<t.length;e++)if(t[e].$from.pos!=t[e].$to.pos)return false;return true},enumerable:false,configurable:true});
/**
    Get the content of this selection as a slice.
    */t.prototype.content=function(){return this.$from.doc.slice(this.from,this.to,true)};
/**
    Replace the selection with a slice or, if no slice is given,
    delete the selection. Will append to the given transaction.
    */t.prototype.replace=function(t,e){if(e===void 0){e=Slice.empty}
// Put the new selection at the position after the inserted
// content. When that ended in an inline node, search backwards,
// to get the position after that node. If not, search forward.
var r=e.content.lastChild,n=null;for(var i=0;i<e.openEnd;i++){n=r;r=r.lastChild}var a=t.steps.length,o=this.ranges;for(var u=0;u<o.length;u++){var s=o[u],f=s.$from,l=s.$to,c=t.mapping.slice(a);t.replaceRange(c.map(f.pos),c.map(l.pos),u?Slice.empty:e);if(u==0)selectionToInsertionEnd$1(t,a,(r?r.isInline:n&&n.isTextblock)?-1:1)}};
/**
    Replace the selection with the given node, appending the changes
    to the given transaction.
    */t.prototype.replaceWith=function(t,e){var r=t.steps.length,n=this.ranges;for(var i=0;i<n.length;i++){var a=n[i],o=a.$from,u=a.$to,s=t.mapping.slice(r);var f=s.map(o.pos),l=s.map(u.pos);if(i){t.deleteRange(f,l)}else{t.replaceRangeWith(f,l,e);selectionToInsertionEnd$1(t,r,e.isInline?-1:1)}}};
/**
    Find a valid cursor or leaf node selection starting at the given
    position and searching back if `dir` is negative, and forward if
    positive. When `textOnly` is true, only consider cursor
    selections. Will return null when no valid selection position is
    found.
    */t.findFrom=function(t,e,r){if(r===void 0){r=false}var n=t.parent.inlineContent?new TextSelection(t):findSelectionIn(t.node(0),t.parent,t.pos,t.index(),e,r);if(n)return n;for(var i=t.depth-1;i>=0;i--){var a=e<0?findSelectionIn(t.node(0),t.node(i),t.before(i+1),t.index(i),e,r):findSelectionIn(t.node(0),t.node(i),t.after(i+1),t.index(i)+1,e,r);if(a)return a}return null};
/**
    Find a valid cursor or leaf node selection near the given
    position. Searches forward first by default, but if `bias` is
    negative, it will search backwards first.
    */t.near=function(t,e){if(e===void 0){e=1}return this.findFrom(t,e)||this.findFrom(t,-e)||new AllSelection(t.node(0))};
/**
    Find the cursor or leaf node selection closest to the start of
    the given document. Will return an
    [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
    exists.
    */t.atStart=function(t){return findSelectionIn(t,t,0,0,1)||new AllSelection(t)};
/**
    Find the cursor or leaf node selection closest to the end of the
    given document.
    */t.atEnd=function(t){return findSelectionIn(t,t,t.content.size,t.childCount,-1)||new AllSelection(t)};
/**
    Deserialize the JSON representation of a selection. Must be
    implemented for custom classes (as a static class method).
    */t.fromJSON=function(t,e){if(!e||!e.type)throw new RangeError("Invalid input for Selection.fromJSON");var r=classesById[e.type];if(!r)throw new RangeError("No selection type ".concat(e.type," defined"));return r.fromJSON(t,e)};
/**
    To be able to deserialize selections from JSON, custom selection
    classes must register themselves with an ID string, so that they
    can be disambiguated. Try to pick something that's unlikely to
    clash with classes from other modules.
    */t.jsonID=function(t,e){if(t in classesById)throw new RangeError("Duplicate use of selection JSON ID "+t);classesById[t]=e;e.prototype.jsonID=t;return e};
/**
    Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
    which is a value that can be mapped without having access to a
    current document, and later resolved to a real selection for a
    given document again. (This is used mostly by the history to
    track and restore old selections.) The default implementation of
    this method just converts the selection to a text selection and
    returns the bookmark for that.
    */t.prototype.getBookmark=function(){return TextSelection.between(this.$anchor,this.$head).getBookmark()};return t}();Selection.prototype.visible=true;
/**
Represents a selected range in a document.
*/var SelectionRange=/** @class */function(){
/**
    Create a range.
    */
function t(
/**
    The lower bound of the range.
    */
t,
/**
    The upper bound of the range.
    */
e){this.$from=t;this.$to=e}return t}();var warnedAboutTextSelection=false;function checkTextSelection(t){if(!warnedAboutTextSelection&&!t.parent.inlineContent){warnedAboutTextSelection=true;console["warn"]("TextSelection endpoint not pointing into a node with inline content ("+t.parent.type.name+")")}}
/**
A text selection represents a classical editor selection, with a
head (the moving side) and anchor (immobile side), both of which
point into textblock nodes. It can be empty (a regular cursor
position).
*/var TextSelection=/** @class */function(t){__extends(e,t);
/**
    Construct a text selection between the given points.
    */function e(e,r){if(r===void 0){r=e}checkTextSelection(e);checkTextSelection(r);return t.call(this,e,r)||this}Object.defineProperty(e.prototype,"$cursor",{
/**
        Returns a resolved position if this is a cursor selection (an
        empty text selection), and null otherwise.
        */
get:function(){return this.$anchor.pos==this.$head.pos?this.$head:null},enumerable:false,configurable:true});e.prototype.map=function(t,r){var n=t.resolve(r.map(this.head));if(!n.parent.inlineContent)return Selection.near(n);var i=t.resolve(r.map(this.anchor));return new e(i.parent.inlineContent?i:n,n)};e.prototype.replace=function(e,r){if(r===void 0){r=Slice.empty}t.prototype.replace.call(this,e,r);if(r==Slice.empty){var n=this.$from.marksAcross(this.$to);if(n)e.ensureMarks(n)}};e.prototype.eq=function(t){return t instanceof e&&t.anchor==this.anchor&&t.head==this.head};e.prototype.getBookmark=function(){return new TextBookmark(this.anchor,this.head)};e.prototype.toJSON=function(){return{type:"text",anchor:this.anchor,head:this.head}};
/**
    @internal
    */e.fromJSON=function(t,r){if(typeof r.anchor!="number"||typeof r.head!="number")throw new RangeError("Invalid input for TextSelection.fromJSON");return new e(t.resolve(r.anchor),t.resolve(r.head))};
/**
    Create a text selection from non-resolved positions.
    */e.create=function(t,e,r){if(r===void 0){r=e}var n=t.resolve(e);return new this(n,r==e?n:t.resolve(r))};
/**
    Return a text selection that spans the given positions or, if
    they aren't text positions, find a text selection near them.
    `bias` determines whether the method searches forward (default)
    or backwards (negative number) first. Will fall back to calling
    [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
    doesn't contain a valid text position.
    */e.between=function(t,r,n){var i=t.pos-r.pos;if(!n||i)n=i>=0?1:-1;if(!r.parent.inlineContent){var a=Selection.findFrom(r,n,true)||Selection.findFrom(r,-n,true);if(a)r=a.$head;else return Selection.near(r,n)}if(!t.parent.inlineContent){if(i==0){t=r}else{t=(Selection.findFrom(t,-n,true)||Selection.findFrom(t,n,true)).$anchor;if(t.pos<r.pos!=i<0)t=r}}return new e(t,r)};return e}(Selection);Selection.jsonID("text",TextSelection);var TextBookmark=/** @class */function(){function t(t,e){this.anchor=t;this.head=e}t.prototype.map=function(e){return new t(e.map(this.anchor),e.map(this.head))};t.prototype.resolve=function(t){return TextSelection.between(t.resolve(this.anchor),t.resolve(this.head))};return t}();
/**
A node selection is a selection that points at a single node. All
nodes marked [selectable](https://prosemirror.net/docs/ref/#model.NodeSpec.selectable) can be the
target of a node selection. In such a selection, `from` and `to`
point directly before and after the selected node, `anchor` equals
`from`, and `head` equals `to`..
*/var NodeSelection=/** @class */function(t){__extends(e,t);
/**
    Create a node selection. Does not verify the validity of its
    argument.
    */function e(e){var r=this;var n=e.nodeAfter;var i=e.node(0).resolve(e.pos+n.nodeSize);r=t.call(this,e,i)||this;r.node=n;return r}e.prototype.map=function(t,r){var n=r.mapResult(this.anchor),i=n.deleted,a=n.pos;var o=t.resolve(a);if(i)return Selection.near(o);return new e(o)};e.prototype.content=function(){return new Slice(Fragment.from(this.node),0,0)};e.prototype.eq=function(t){return t instanceof e&&t.anchor==this.anchor};e.prototype.toJSON=function(){return{type:"node",anchor:this.anchor}};e.prototype.getBookmark=function(){return new NodeBookmark(this.anchor)};
/**
    @internal
    */e.fromJSON=function(t,r){if(typeof r.anchor!="number")throw new RangeError("Invalid input for NodeSelection.fromJSON");return new e(t.resolve(r.anchor))};
/**
    Create a node selection from non-resolved positions.
    */e.create=function(t,r){return new e(t.resolve(r))};
/**
    Determines whether the given node may be selected as a node
    selection.
    */e.isSelectable=function(t){return!t.isText&&t.type.spec.selectable!==false};return e}(Selection);NodeSelection.prototype.visible=false;Selection.jsonID("node",NodeSelection);var NodeBookmark=/** @class */function(){function t(t){this.anchor=t}t.prototype.map=function(e){var r=e.mapResult(this.anchor),n=r.deleted,i=r.pos;return n?new TextBookmark(i,i):new t(i)};t.prototype.resolve=function(t){var e=t.resolve(this.anchor),r=e.nodeAfter;if(r&&NodeSelection.isSelectable(r))return new NodeSelection(e);return Selection.near(e)};return t}();
/**
A selection type that represents selecting the whole document
(which can not necessarily be expressed with a text selection, when
there are for example leaf block nodes at the start or end of the
document).
*/var AllSelection=/** @class */function(t){__extends(e,t);
/**
    Create an all-selection over the given document.
    */function e(e){return t.call(this,e.resolve(0),e.resolve(e.content.size))||this}e.prototype.replace=function(e,r){if(r===void 0){r=Slice.empty}if(r==Slice.empty){e.delete(0,e.doc.content.size);var n=Selection.atStart(e.doc);if(!n.eq(e.selection))e.setSelection(n)}else{t.prototype.replace.call(this,e,r)}};e.prototype.toJSON=function(){return{type:"all"}};
/**
    @internal
    */e.fromJSON=function(t){return new e(t)};e.prototype.map=function(t){return new e(t)};e.prototype.eq=function(t){return t instanceof e};e.prototype.getBookmark=function(){return AllBookmark};return e}(Selection);Selection.jsonID("all",AllSelection);var AllBookmark={map:function(){return this},resolve:function(t){return new AllSelection(t)}};
// FIXME we'll need some awareness of text direction when scanning for selections
// Try to find a selection inside the given node. `pos` points at the
// position where the search starts. When `text` is true, only return
// text selections.
function findSelectionIn(t,e,r,n,i,a){if(a===void 0){a=false}if(e.inlineContent)return TextSelection.create(t,r);for(var o=n-(i>0?0:1);i>0?o<e.childCount:o>=0;o+=i){var u=e.child(o);if(!u.isAtom){var s=findSelectionIn(t,u,r+i,i<0?u.childCount:0,i,a);if(s)return s}else if(!a&&NodeSelection.isSelectable(u)){return NodeSelection.create(t,r-(i<0?u.nodeSize:0))}r+=u.nodeSize*i}return null}function selectionToInsertionEnd$1(t,e,r){var n=t.steps.length-1;if(n<e)return;var i=t.steps[n];if(!(i instanceof ReplaceStep||i instanceof ReplaceAroundStep))return;var a=t.mapping.maps[n],o;a.forEach((function(t,e,r,n){if(o==null)o=n}));t.setSelection(Selection.near(t.doc.resolve(o),r))}var UPDATED_SEL=1,UPDATED_MARKS=2,UPDATED_SCROLL=4;
/**
An editor state transaction, which can be applied to a state to
create an updated state. Use
[`EditorState.tr`](https://prosemirror.net/docs/ref/#state.EditorState.tr) to create an instance.

Transactions track changes to the document (they are a subclass of
[`Transform`](https://prosemirror.net/docs/ref/#transform.Transform)), but also other state changes,
like selection updates and adjustments of the set of [stored
marks](https://prosemirror.net/docs/ref/#state.EditorState.storedMarks). In addition, you can store
metadata properties in a transaction, which are extra pieces of
information that client code or plugins can use to describe what a
transaction represents, so that they can update their [own
state](https://prosemirror.net/docs/ref/#state.StateField) accordingly.

The [editor view](https://prosemirror.net/docs/ref/#view.EditorView) uses a few metadata
properties: it will attach a property `"pointer"` with the value
`true` to selection transactions directly caused by mouse or touch
input, a `"composition"` property holding an ID identifying the
composition that caused it to transactions caused by composed DOM
input, and a `"uiEvent"` property of that may be `"paste"`,
`"cut"`, or `"drop"`.
*/var Transaction=/** @class */function(t){__extends(e,t);
/**
    @internal
    */function e(e){var r=t.call(this,e.doc)||this;
// The step count for which the current selection is valid.
r.curSelectionFor=0;
// Bitfield to track which aspects of the state were updated by
// this transaction.
r.updated=0;
// Object used to store metadata properties for the transaction.
r.meta=Object.create(null);r.time=Date.now();r.curSelection=e.selection;r.storedMarks=e.storedMarks;return r}Object.defineProperty(e.prototype,"selection",{
/**
        The transaction's current selection. This defaults to the editor
        selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
        transaction, but can be overwritten with
        [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
        */
get:function(){if(this.curSelectionFor<this.steps.length){this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor));this.curSelectionFor=this.steps.length}return this.curSelection},enumerable:false,configurable:true});
/**
    Update the transaction's current selection. Will determine the
    selection that the editor gets when the transaction is applied.
    */e.prototype.setSelection=function(t){if(t.$from.doc!=this.doc)throw new RangeError("Selection passed to setSelection must point at the current document");this.curSelection=t;this.curSelectionFor=this.steps.length;this.updated=(this.updated|UPDATED_SEL)&~UPDATED_MARKS;this.storedMarks=null;return this};Object.defineProperty(e.prototype,"selectionSet",{
/**
        Whether the selection was explicitly updated by this transaction.
        */
get:function(){return(this.updated&UPDATED_SEL)>0},enumerable:false,configurable:true});
/**
    Set the current stored marks.
    */e.prototype.setStoredMarks=function(t){this.storedMarks=t;this.updated|=UPDATED_MARKS;return this};
/**
    Make sure the current stored marks or, if that is null, the marks
    at the selection, match the given set of marks. Does nothing if
    this is already the case.
    */e.prototype.ensureMarks=function(t){if(!Mark$1.sameSet(this.storedMarks||this.selection.$from.marks(),t))this.setStoredMarks(t);return this};
/**
    Add a mark to the set of stored marks.
    */e.prototype.addStoredMark=function(t){return this.ensureMarks(t.addToSet(this.storedMarks||this.selection.$head.marks()))};
/**
    Remove a mark or mark type from the set of stored marks.
    */e.prototype.removeStoredMark=function(t){return this.ensureMarks(t.removeFromSet(this.storedMarks||this.selection.$head.marks()))};Object.defineProperty(e.prototype,"storedMarksSet",{
/**
        Whether the stored marks were explicitly set for this transaction.
        */
get:function(){return(this.updated&UPDATED_MARKS)>0},enumerable:false,configurable:true});
/**
    @internal
    */e.prototype.addStep=function(e,r){t.prototype.addStep.call(this,e,r);this.updated=this.updated&~UPDATED_MARKS;this.storedMarks=null};
/**
    Update the timestamp for the transaction.
    */e.prototype.setTime=function(t){this.time=t;return this};
/**
    Replace the current selection with the given slice.
    */e.prototype.replaceSelection=function(t){this.selection.replace(this,t);return this};
/**
    Replace the selection with the given node. When `inheritMarks` is
    true and the content is inline, it inherits the marks from the
    place where it is inserted.
    */e.prototype.replaceSelectionWith=function(t,e){if(e===void 0){e=true}var r=this.selection;if(e)t=t.mark(this.storedMarks||(r.empty?r.$from.marks():r.$from.marksAcross(r.$to)||Mark$1.none));r.replaceWith(this,t);return this};
/**
    Delete the selection.
    */e.prototype.deleteSelection=function(){this.selection.replace(this);return this};
/**
    Replace the given range, or the selection if no range is given,
    with a text node containing the given string.
    */e.prototype.insertText=function(t,e,r){var n=this.doc.type.schema;if(e==null){if(!t)return this.deleteSelection();return this.replaceSelectionWith(n.text(t),true)}else{if(r==null)r=e;if(!t)return this.deleteRange(e,r);var i=this.storedMarks;if(!i){var a=this.doc.resolve(e);i=r==e?a.marks():a.marksAcross(this.doc.resolve(r))}this.replaceRangeWith(e,r,n.text(t,i));if(!this.selection.empty&&this.selection.to==e+t.length)this.setSelection(Selection.near(this.selection.$to));return this}};
/**
    Store a metadata property in this transaction, keyed either by
    name or by plugin.
    */e.prototype.setMeta=function(t,e){this.meta[typeof t=="string"?t:t.key]=e;return this};
/**
    Retrieve a metadata property for a given name or plugin.
    */e.prototype.getMeta=function(t){return this.meta[typeof t=="string"?t:t.key]};Object.defineProperty(e.prototype,"isGeneric",{
/**
        Returns true if this transaction doesn't contain any metadata,
        and can thus safely be extended.
        */
get:function(){for(var t in this.meta)return false;return true},enumerable:false,configurable:true});
/**
    Indicate that the editor should scroll the selection into view
    when updated to the state produced by this transaction.
    */e.prototype.scrollIntoView=function(){this.updated|=UPDATED_SCROLL;return this};Object.defineProperty(e.prototype,"scrolledIntoView",{
/**
        True when this transaction has had `scrollIntoView` called on it.
        */
get:function(){return(this.updated&UPDATED_SCROLL)>0},enumerable:false,configurable:true});return e}(Transform);function bind(t,e){return!e||!t?t:t.bind(e)}var FieldDesc=/** @class */function(){function t(t,e,r){this.name=t;this.init=bind(e.init,r);this.apply=bind(e.apply,r)}return t}();var baseFields=[new FieldDesc("doc",{init:function(t){return t.doc||t.schema.topNodeType.createAndFill()},apply:function(t){return t.doc}}),new FieldDesc("selection",{init:function(t,e){return t.selection||Selection.atStart(e.doc)},apply:function(t){return t.selection}}),new FieldDesc("storedMarks",{init:function(t){return t.storedMarks||null},apply:function(t,e,r,n){return n.selection.$cursor?t.storedMarks:null}}),new FieldDesc("scrollToSelection",{init:function(){return 0},apply:function(t,e){return t.scrolledIntoView?e+1:e}})];
// Object wrapping the part of a state object that stays the same
// across transactions. Stored in the state's `config` property.
var Configuration=/** @class */function(){function t(t,e){var r=this;this.schema=t;this.plugins=[];this.pluginsByKey=Object.create(null);this.fields=baseFields.slice();if(e)e.forEach((function(t){if(r.pluginsByKey[t.key])throw new RangeError("Adding different instances of a keyed plugin ("+t.key+")");r.plugins.push(t);r.pluginsByKey[t.key]=t;if(t.spec.state)r.fields.push(new FieldDesc(t.key,t.spec.state,t))}))}return t}();
/**
The state of a ProseMirror editor is represented by an object of
this type. A state is a persistent data structure—it isn't
updated, but rather a new state value is computed from an old one
using the [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) method.

A state holds a number of built-in fields, and plugins can
[define](https://prosemirror.net/docs/ref/#state.PluginSpec.state) additional fields.
*/var EditorState=/** @class */function(){
/**
    @internal
    */
function t(
/**
    @internal
    */
t){this.config=t}Object.defineProperty(t.prototype,"schema",{
/**
        The schema of the state's document.
        */
get:function(){return this.config.schema},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"plugins",{
/**
        The plugins that are active in this state.
        */
get:function(){return this.config.plugins},enumerable:false,configurable:true});
/**
    Apply the given transaction to produce a new state.
    */t.prototype.apply=function(t){return this.applyTransaction(t).state};
/**
    @internal
    */t.prototype.filterTransaction=function(t,e){if(e===void 0){e=-1}for(var r=0;r<this.config.plugins.length;r++)if(r!=e){var n=this.config.plugins[r];if(n.spec.filterTransaction&&!n.spec.filterTransaction.call(n,t,this))return false}return true};
/**
    Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
    returns the precise transactions that were applied (which might
    be influenced by the [transaction
    hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
    plugins) along with the new state.
    */t.prototype.applyTransaction=function(t){if(!this.filterTransaction(t))return{state:this,transactions:[]};var e=[t],r=this.applyInner(t),n=null;
// This loop repeatedly gives plugins a chance to respond to
// transactions as new transactions are added, making sure to only
// pass the transactions the plugin did not see before.
for(;;){var i=false;for(var a=0;a<this.config.plugins.length;a++){var o=this.config.plugins[a];if(o.spec.appendTransaction){var u=n?n[a].n:0,s=n?n[a].state:this;var f=u<e.length&&o.spec.appendTransaction.call(o,u?e.slice(u):e,s,r);if(f&&r.filterTransaction(f,a)){f.setMeta("appendedTransaction",t);if(!n){n=[];for(var l=0;l<this.config.plugins.length;l++)n.push(l<a?{state:r,n:e.length}:{state:this,n:0})}e.push(f);r=r.applyInner(f);i=true}if(n)n[a]={state:r,n:e.length}}}if(!i)return{state:r,transactions:e}}};
/**
    @internal
    */t.prototype.applyInner=function(e){if(!e.before.eq(this.doc))throw new RangeError("Applying a mismatched transaction");var r=new t(this.config),n=this.config.fields;for(var i=0;i<n.length;i++){var a=n[i];r[a.name]=a.apply(e,this[a.name],this,r)}return r};Object.defineProperty(t.prototype,"tr",{
/**
        Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
        */
get:function(){return new Transaction(this)},enumerable:false,configurable:true});
/**
    Create a new state.
    */t.create=function(e){var r=new Configuration(e.doc?e.doc.type.schema:e.schema,e.plugins);var n=new t(r);for(var i=0;i<r.fields.length;i++)n[r.fields[i].name]=r.fields[i].init(e,n);return n};
/**
    Create a new state based on this one, but with an adjusted set
    of active plugins. State fields that exist in both sets of
    plugins are kept unchanged. Those that no longer exist are
    dropped, and those that are new are initialized using their
    [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
    configuration object..
    */t.prototype.reconfigure=function(e){var r=new Configuration(this.schema,e.plugins);var n=r.fields,i=new t(r);for(var a=0;a<n.length;a++){var o=n[a].name;i[o]=this.hasOwnProperty(o)?this[o]:n[a].init(e,i)}return i};
/**
    Serialize this state to JSON. If you want to serialize the state
    of plugins, pass an object mapping property names to use in the
    resulting JSON object to plugin objects. The argument may also be
    a string or number, in which case it is ignored, to support the
    way `JSON.stringify` calls `toString` methods.
    */t.prototype.toJSON=function(t){var e={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks)e.storedMarks=this.storedMarks.map((function(t){return t.toJSON()}));if(t&&typeof t=="object")for(var r in t){if(r=="doc"||r=="selection")throw new RangeError("The JSON fields `doc` and `selection` are reserved");var n=t[r],i=n.spec.state;if(i&&i.toJSON)e[r]=i.toJSON.call(n,this[n.key])}return e};
/**
    Deserialize a JSON representation of a state. `config` should
    have at least a `schema` field, and should contain array of
    plugins to initialize the state with. `pluginFields` can be used
    to deserialize the state of plugins, by associating plugin
    instances with the property names they use in the JSON object.
    */t.fromJSON=function(e,r,n){if(!r)throw new RangeError("Invalid input for EditorState.fromJSON");if(!e.schema)throw new RangeError("Required config field 'schema' missing");var i=new Configuration(e.schema,e.plugins);var a=new t(i);i.fields.forEach((function(t){if(t.name=="doc"){a.doc=Node$2.fromJSON(e.schema,r.doc)}else if(t.name=="selection"){a.selection=Selection.fromJSON(a.doc,r.selection)}else if(t.name=="storedMarks"){if(r.storedMarks)a.storedMarks=r.storedMarks.map(e.schema.markFromJSON)}else{if(n)for(var i in n){var o=n[i],u=o.spec.state;if(o.key==t.name&&u&&u.fromJSON&&Object.prototype.hasOwnProperty.call(r,i)){a[t.name]=u.fromJSON.call(o,e,r[i],a);return}}a[t.name]=t.init(e,a)}}));return a};return t}();function bindProps(t,e,r){for(var n in t){var i=t[n];if(i instanceof Function)i=i.bind(e);else if(n=="handleDOMEvents")i=bindProps(i,e,{});r[n]=i}return r}
/**
Plugins bundle functionality that can be added to an editor.
They are part of the [editor state](https://prosemirror.net/docs/ref/#state.EditorState) and
may influence that state and the view that contains it.
*/var Plugin=/** @class */function(){
/**
    Create a plugin.
    */
function t(
/**
    The plugin's [spec object](https://prosemirror.net/docs/ref/#state.PluginSpec).
    */
t){this.spec=t;
/**
        The [props](https://prosemirror.net/docs/ref/#view.EditorProps) exported by this plugin.
        */this.props={};if(t.props)bindProps(t.props,this,this.props);this.key=t.key?t.key.key:createKey("plugin")}
/**
    Extract the plugin's state field from an editor state.
    */t.prototype.getState=function(t){return t[this.key]};return t}();var keys=Object.create(null);function createKey(t){if(t in keys)return t+"$"+ ++keys[t];keys[t]=0;return t+"$"}
/**
A key is used to [tag](https://prosemirror.net/docs/ref/#state.PluginSpec.key) plugins in a way
that makes it possible to find them, given an editor state.
Assigning a key does mean only one plugin of that type can be
active in a state.
*/var PluginKey=/** @class */function(){
/**
    Create a plugin key.
    */
function t(t){if(t===void 0){t="key"}this.key=createKey(t)}
/**
    Get the active plugin with this key, if any, from an editor
    state.
    */t.prototype.get=function(t){return t.config.pluginsByKey[this.key]};
/**
    Get the plugin's state from an editor state.
    */t.prototype.getState=function(t){return t[this.key]};return t}();function atBlockStart(t,e){var r=t.selection.$cursor;if(!r||(e?!e.endOfTextblock("backward",t):r.parentOffset>0))return null;return r}
/**
If the selection is empty and at the start of a textblock, try to
reduce the distance between that block and the one before it—if
there's a block directly before it that can be joined, join them.
If not, try to move the selected block closer to the next one in
the document structure by lifting it out of its parent or moving it
into a parent of the previous block. Will use the view for accurate
(bidi-aware) start-of-textblock detection if given.
*/var joinBackward=function(t,e,r){var n=atBlockStart(t,r);if(!n)return false;var i=findCutBefore(n);
// If there is no node before this, try to lift
if(!i){var a=n.blockRange(),o=a&&liftTarget(a);if(o==null)return false;if(e)e(t.tr.lift(a,o).scrollIntoView());return true}var u=i.nodeBefore;
// Apply the joining algorithm
if(deleteBarrier(t,i,e,-1))return true;
// If the node below has no content and the node above is
// selectable, delete the node below and select the one above.
if(n.parent.content.size==0&&(textblockAt(u,"end")||NodeSelection.isSelectable(u))){for(var s=n.depth;;s--){var f=replaceStep(t.doc,n.before(s),n.after(s),Slice.empty);if(f&&f.slice.size<f.to-f.from){if(e){var l=t.tr.step(f);l.setSelection(textblockAt(u,"end")?Selection.findFrom(l.doc.resolve(l.mapping.map(i.pos,-1)),-1):NodeSelection.create(l.doc,i.pos-u.nodeSize));e(l.scrollIntoView())}return true}if(s==1||n.node(s-1).childCount>1)break}}
// If the node before is an atom, delete it
if(u.isAtom&&i.depth==n.depth-1){if(e)e(t.tr.delete(i.pos-u.nodeSize,i.pos).scrollIntoView());return true}return false};
/**
A more limited form of [`joinBackward`](https://prosemirror.net/docs/ref/#commands.joinBackward)
that only tries to join the current textblock to the one before
it, if the cursor is at the start of a textblock.
*/var joinTextblockBackward=function(t,e,r){var n=atBlockStart(t,r);if(!n)return false;var i=findCutBefore(n);return i?joinTextblocksAround(t,i,e):false};
/**
A more limited form of [`joinForward`](https://prosemirror.net/docs/ref/#commands.joinForward)
that only tries to join the current textblock to the one after
it, if the cursor is at the end of a textblock.
*/var joinTextblockForward=function(t,e,r){var n=atBlockEnd(t,r);if(!n)return false;var i=findCutAfter(n);return i?joinTextblocksAround(t,i,e):false};function joinTextblocksAround(t,e,r){var n=e.nodeBefore,i=n,a=e.pos-1;for(;!i.isTextblock;a--){if(i.type.spec.isolating)return false;var o=i.lastChild;if(!o)return false;i=o}var u=e.nodeAfter,s=u,f=e.pos+1;for(;!s.isTextblock;f++){if(s.type.spec.isolating)return false;var o=s.firstChild;if(!o)return false;s=o}var l=replaceStep(t.doc,a,f,Slice.empty);if(!l||l.from!=a||l instanceof ReplaceStep&&l.slice.size>=f-a)return false;if(r){var c=t.tr.step(l);c.setSelection(TextSelection.create(c.doc,a));r(c.scrollIntoView())}return true}function textblockAt(t,e,r){if(r===void 0){r=false}for(var n=t;n;n=e=="start"?n.firstChild:n.lastChild){if(n.isTextblock)return true;if(r&&n.childCount!=1)return false}return false}
/**
When the selection is empty and at the start of a textblock, select
the node before that textblock, if possible. This is intended to be
bound to keys like backspace, after
[`joinBackward`](https://prosemirror.net/docs/ref/#commands.joinBackward) or other deleting
commands, as a fall-back behavior when the schema doesn't allow
deletion at the selected point.
*/var selectNodeBackward=function(t,e,r){var n=t.selection,i=n.$head,a=n.empty,o=i;if(!a)return false;if(i.parent.isTextblock){if(r?!r.endOfTextblock("backward",t):i.parentOffset>0)return false;o=findCutBefore(i)}var u=o&&o.nodeBefore;if(!u||!NodeSelection.isSelectable(u))return false;if(e)e(t.tr.setSelection(NodeSelection.create(t.doc,o.pos-u.nodeSize)).scrollIntoView());return true};function findCutBefore(t){if(!t.parent.type.spec.isolating)for(var e=t.depth-1;e>=0;e--){if(t.index(e)>0)return t.doc.resolve(t.before(e+1));if(t.node(e).type.spec.isolating)break}return null}function atBlockEnd(t,e){var r=t.selection.$cursor;if(!r||(e?!e.endOfTextblock("forward",t):r.parentOffset<r.parent.content.size))return null;return r}
/**
If the selection is empty and the cursor is at the end of a
textblock, try to reduce or remove the boundary between that block
and the one after it, either by joining them or by moving the other
block closer to this one in the tree structure. Will use the view
for accurate start-of-textblock detection if given.
*/var joinForward=function(t,e,r){var n=atBlockEnd(t,r);if(!n)return false;var i=findCutAfter(n);
// If there is no node after this, there's nothing to do
if(!i)return false;var a=i.nodeAfter;
// Try the joining algorithm
if(deleteBarrier(t,i,e,1))return true;
// If the node above has no content and the node below is
// selectable, delete the node above and select the one below.
if(n.parent.content.size==0&&(textblockAt(a,"start")||NodeSelection.isSelectable(a))){var o=replaceStep(t.doc,n.before(),n.after(),Slice.empty);if(o&&o.slice.size<o.to-o.from){if(e){var u=t.tr.step(o);u.setSelection(textblockAt(a,"start")?Selection.findFrom(u.doc.resolve(u.mapping.map(i.pos)),1):NodeSelection.create(u.doc,u.mapping.map(i.pos)));e(u.scrollIntoView())}return true}}
// If the next node is an atom, delete it
if(a.isAtom&&i.depth==n.depth-1){if(e)e(t.tr.delete(i.pos,i.pos+a.nodeSize).scrollIntoView());return true}return false};
/**
When the selection is empty and at the end of a textblock, select
the node coming after that textblock, if possible. This is intended
to be bound to keys like delete, after
[`joinForward`](https://prosemirror.net/docs/ref/#commands.joinForward) and similar deleting
commands, to provide a fall-back behavior when the schema doesn't
allow deletion at the selected point.
*/var selectNodeForward=function(t,e,r){var n=t.selection,i=n.$head,a=n.empty,o=i;if(!a)return false;if(i.parent.isTextblock){if(r?!r.endOfTextblock("forward",t):i.parentOffset<i.parent.content.size)return false;o=findCutAfter(i)}var u=o&&o.nodeAfter;if(!u||!NodeSelection.isSelectable(u))return false;if(e)e(t.tr.setSelection(NodeSelection.create(t.doc,o.pos)).scrollIntoView());return true};function findCutAfter(t){if(!t.parent.type.spec.isolating)for(var e=t.depth-1;e>=0;e--){var r=t.node(e);if(t.index(e)+1<r.childCount)return t.doc.resolve(t.after(e+1));if(r.type.spec.isolating)break}return null}
/**
Join the selected block or, if there is a text selection, the
closest ancestor block of the selection that can be joined, with
the sibling above it.
*/var joinUp=function(t,e){var r=t.selection,n=r instanceof NodeSelection,i;if(n){if(r.node.isTextblock||!canJoin(t.doc,r.from))return false;i=r.from}else{i=joinPoint(t.doc,r.from,-1);if(i==null)return false}if(e){var a=t.tr.join(i);if(n)a.setSelection(NodeSelection.create(a.doc,i-t.doc.resolve(i).nodeBefore.nodeSize));e(a.scrollIntoView())}return true};
/**
Join the selected block, or the closest ancestor of the selection
that can be joined, with the sibling after it.
*/var joinDown=function(t,e){var r=t.selection,n;if(r instanceof NodeSelection){if(r.node.isTextblock||!canJoin(t.doc,r.to))return false;n=r.to}else{n=joinPoint(t.doc,r.to,1);if(n==null)return false}if(e)e(t.tr.join(n).scrollIntoView());return true};
/**
Lift the selected block, or the closest ancestor block of the
selection that can be lifted, out of its parent node.
*/var lift=function(t,e){var r=t.selection,n=r.$from,i=r.$to;var a=n.blockRange(i),o=a&&liftTarget(a);if(o==null)return false;if(e)e(t.tr.lift(a,o).scrollIntoView());return true};
/**
If the selection is in a node whose type has a truthy
[`code`](https://prosemirror.net/docs/ref/#model.NodeSpec.code) property in its spec, replace the
selection with a newline character.
*/var newlineInCode=function(t,e){var r=t.selection,n=r.$head,i=r.$anchor;if(!n.parent.type.spec.code||!n.sameParent(i))return false;if(e)e(t.tr.insertText("\n").scrollIntoView());return true};function defaultBlockAt$1(t){for(var e=0;e<t.edgeCount;e++){var r=t.edge(e).type;if(r.isTextblock&&!r.hasRequiredAttrs())return r}return null}
/**
When the selection is in a node with a truthy
[`code`](https://prosemirror.net/docs/ref/#model.NodeSpec.code) property in its spec, create a
default block after the code block, and move the cursor there.
*/var exitCode=function(t,e){var r=t.selection,n=r.$head,i=r.$anchor;if(!n.parent.type.spec.code||!n.sameParent(i))return false;var a=n.node(-1),o=n.indexAfter(-1),u=defaultBlockAt$1(a.contentMatchAt(o));if(!u||!a.canReplaceWith(o,o,u))return false;if(e){var s=n.after(),f=t.tr.replaceWith(s,s,u.createAndFill());f.setSelection(Selection.near(f.doc.resolve(s),1));e(f.scrollIntoView())}return true};
/**
If a block node is selected, create an empty paragraph before (if
it is its parent's first child) or after it.
*/var createParagraphNear=function(t,e){var r=t.selection,n=r.$from,i=r.$to;if(r instanceof AllSelection||n.parent.inlineContent||i.parent.inlineContent)return false;var a=defaultBlockAt$1(i.parent.contentMatchAt(i.indexAfter()));if(!a||!a.isTextblock)return false;if(e){var o=(!n.parentOffset&&i.index()<i.parent.childCount?n:i).pos;var u=t.tr.insert(o,a.createAndFill());u.setSelection(TextSelection.create(u.doc,o+1));e(u.scrollIntoView())}return true};
/**
If the cursor is in an empty textblock that can be lifted, lift the
block.
*/var liftEmptyBlock=function(t,e){var r=t.selection.$cursor;if(!r||r.parent.content.size)return false;if(r.depth>1&&r.after()!=r.end(-1)){var n=r.before();if(canSplit(t.doc,n)){if(e)e(t.tr.split(n).scrollIntoView());return true}}var i=r.blockRange(),a=i&&liftTarget(i);if(a==null)return false;if(e)e(t.tr.lift(i,a).scrollIntoView());return true};
/**
Move the selection to the node wrapping the current selection, if
any. (Will not select the document node.)
*/var selectParentNode=function(t,e){var r=t.selection,n=r.$from,i=r.to,a;var o=n.sharedDepth(i);if(o==0)return false;a=n.before(o);if(e)e(t.tr.setSelection(NodeSelection.create(t.doc,a)));return true};function joinMaybeClear(t,e,r){var n=e.nodeBefore,i=e.nodeAfter,a=e.index();if(!n||!i||!n.type.compatibleContent(i.type))return false;if(!n.content.size&&e.parent.canReplace(a-1,a)){if(r)r(t.tr.delete(e.pos-n.nodeSize,e.pos).scrollIntoView());return true}if(!e.parent.canReplace(a,a+1)||!(i.isTextblock||canJoin(t.doc,e.pos)))return false;if(r)r(t.tr.join(e.pos).scrollIntoView());return true}function deleteBarrier(t,e,r,n){var i=e.nodeBefore,a=e.nodeAfter,o,u;var s=i.type.spec.isolating||a.type.spec.isolating;if(!s&&joinMaybeClear(t,e,r))return true;var f=!s&&e.parent.canReplace(e.index(),e.index()+1);if(f&&(o=(u=i.contentMatchAt(i.childCount)).findWrapping(a.type))&&u.matchType(o[0]||a.type).validEnd){if(r){var l=e.pos+a.nodeSize,c=Fragment.empty;for(var v=o.length-1;v>=0;v--)c=Fragment.from(o[v].create(null,c));c=Fragment.from(i.copy(c));var h=t.tr.step(new ReplaceAroundStep(e.pos-1,l,e.pos,l,new Slice(c,1,0),o.length,true));var d=h.doc.resolve(l+2*o.length);if(d.nodeAfter&&d.nodeAfter.type==i.type&&canJoin(h.doc,d.pos))h.join(d.pos);r(h.scrollIntoView())}return true}var p=a.type.spec.isolating||n>0&&s?null:Selection.findFrom(e,1);var g=p&&p.$from.blockRange(p.$to),m=g&&liftTarget(g);if(m!=null&&m>=e.depth){if(r)r(t.tr.lift(g,m).scrollIntoView());return true}if(f&&textblockAt(a,"start",true)&&textblockAt(i,"end")){var b=i,w=[];for(;;){w.push(b);if(b.isTextblock)break;b=b.lastChild}var S=a,E=1;for(;!S.isTextblock;S=S.firstChild)E++;if(b.canReplace(b.childCount,b.childCount,S.content)){if(r){var l=Fragment.empty;for(var T=w.length-1;T>=0;T--)l=Fragment.from(w[T].copy(l));var y=t.tr.step(new ReplaceAroundStep(e.pos-w.length,e.pos+a.nodeSize,e.pos+E,e.pos+a.nodeSize-E,new Slice(l,w.length,0),0,true));r(y.scrollIntoView())}return true}}return false}function selectTextblockSide(t){return function(e,r){var n=e.selection,i=t<0?n.$from:n.$to;var a=i.depth;while(i.node(a).isInline){if(!a)return false;a--}if(!i.node(a).isTextblock)return false;if(r)r(e.tr.setSelection(TextSelection.create(e.doc,t<0?i.start(a):i.end(a))));return true}}
/**
Moves the cursor to the start of current text block.
*/var selectTextblockStart=selectTextblockSide(-1);
/**
Moves the cursor to the end of current text block.
*/var selectTextblockEnd=selectTextblockSide(1);
// Parameterized commands
/**
Wrap the selection in a node of the given type with the given
attributes.
*/function wrapIn(t,e){if(e===void 0){e=null}return function(r,n){var i=r.selection,a=i.$from,o=i.$to;var u=a.blockRange(o),s=u&&findWrapping(u,t,e);if(!s)return false;if(n)n(r.tr.wrap(u,s).scrollIntoView());return true}}
/**
Returns a command that tries to set the selected textblocks to the
given node type with the given attributes.
*/function setBlockType(t,e){if(e===void 0){e=null}return function(r,n){var i=false;for(var a=0;a<r.selection.ranges.length&&!i;a++){var o=r.selection.ranges[a],u=o.$from.pos,s=o.$to.pos;r.doc.nodesBetween(u,s,(function(n,a){if(i)return false;if(!n.isTextblock||n.hasMarkup(t,e))return;if(n.type==t){i=true}else{var o=r.doc.resolve(a),u=o.index();i=o.parent.canReplaceWith(u,u+1,t)}}))}if(!i)return false;if(n){var f=r.tr;for(var l=0;l<r.selection.ranges.length;l++){var c=r.selection.ranges[l],u=c.$from.pos,s=c.$to.pos;f.setBlockType(u,s,t,e)}n(f.scrollIntoView())}return true}}typeof navigator!="undefined"?/Mac|iP(hone|[oa]d)/.test(navigator.platform):typeof os!="undefined"&&os.platform?os.platform()=="darwin":false;
/**
Returns a command function that wraps the selection in a list with
the given type an attributes. If `dispatch` is null, only return a
value to indicate whether this is possible, but don't actually
perform the change.
*/function wrapInList(t,e){if(e===void 0){e=null}return function(r,n){var i=r.selection,a=i.$from,o=i.$to;var u=a.blockRange(o);if(!u)return false;var s=n?r.tr:null;if(!wrapRangeInList(s,u,t,e))return false;if(n)n(s.scrollIntoView());return true}}
/**
Try to wrap the given node range in a list of the given type.
Return `true` when this is possible, `false` otherwise. When `tr`
is non-null, the wrapping is added to that transaction. When it is
`null`, the function only queries whether the wrapping is
possible.
*/function wrapRangeInList(t,e,r,n){if(n===void 0){n=null}var i=false,a=e,o=e.$from.doc;
// This is at the top of an existing list item
if(e.depth>=2&&e.$from.node(e.depth-1).type.compatibleContent(r)&&e.startIndex==0){
// Don't do anything if this is the top of the list
if(e.$from.index(e.depth-1)==0)return false;var u=o.resolve(e.start-2);a=new NodeRange(u,u,e.depth);if(e.endIndex<e.parent.childCount)e=new NodeRange(e.$from,o.resolve(e.$to.end(e.depth)),e.depth);i=true}var s=findWrapping(a,r,n,e);if(!s)return false;if(t)doWrapInList(t,e,s,i,r);return true}function doWrapInList(t,e,r,n,i){var a=Fragment.empty;for(var o=r.length-1;o>=0;o--)a=Fragment.from(r[o].type.create(r[o].attrs,a));t.step(new ReplaceAroundStep(e.start-(n?2:0),e.end,e.start,e.end,new Slice(a,0,0),r.length,true));var u=0;for(var s=0;s<r.length;s++)if(r[s].type==i)u=s+1;var f=r.length-u;var l=e.start+r.length-(n?2:0),c=e.parent;for(var v=e.startIndex,h=e.endIndex,d=true;v<h;v++,d=false){if(!d&&f&&canSplit(t.doc,l,f)){t.split(l,f);l+=2*f}l+=c.child(v).nodeSize}return t}function isItem(t,e){return t instanceof NodeType$1?e==t:t.indexOf(e)>-1}
/**
Create a command to lift the list item around the selection up into
a wrapping list. `itemType` may be an array of list item types.
*/function liftListItem(t){return function(e,r){var n=e.selection,i=n.$from,a=n.$to;var o=i.blockRange(a,(function(e){return e.childCount>0&&isItem(t,e.firstChild.type)}));if(!o)return false;if(!r)return true;if(isItem(t,i.node(o.depth-1).type))// Inside a parent list
return liftToOuterList(e,r,o);else// Outer list node
return liftOutOfList(e,r,o)}}function liftToOuterList(t,e,r){var n=t.tr,i=r.end,a=r.$to.end(r.depth);var o=r.parent.child(r.endIndex-1).type;if(i<a){
// There are siblings after the lifted items, which must become
// children of the last item
n.step(new ReplaceAroundStep(i-1,a,i,a,new Slice(Fragment.from(o.create(null,r.parent.copy())),1,0),1,true));r=new NodeRange(n.doc.resolve(r.$from.pos),n.doc.resolve(a),r.depth)}var u=liftTarget(r);if(u==null)return false;n.lift(r,u);var s=n.doc.resolve(n.mapping.map(i,-1)-1);if(canJoin(n.doc,s.pos)&&s.nodeBefore.type==s.nodeAfter.type)n.join(s.pos);e(n.scrollIntoView());return true}function liftOutOfList(t,e,r){var n=t.tr,i=r.parent;
// Merge the list items into a single big item
for(var a=r.end,o=r.endIndex-1,u=r.startIndex;o>u;o--){a-=i.child(o).nodeSize;n.delete(a-1,a+1)}var s=n.doc.resolve(r.start),f=s.nodeAfter;if(n.mapping.map(r.end)!=r.start+s.nodeAfter.nodeSize)return false;var l=r.startIndex==0,c=r.endIndex==i.childCount;var v=s.node(-1),h=s.index(-1);if(!v.canReplace(h+(l?0:1),h+1,f.content.append(c?Fragment.empty:Fragment.from(i))))return false;var d=s.pos,p=d+f.nodeSize;
// Strip off the surrounding list. At the sides where we're not at
// the end of the list, the existing list is closed. At sides where
// this is the end, it is overwritten to its end.
n.step(new ReplaceAroundStep(d-(l?1:0),p+(c?1:0),d+1,p-1,new Slice((l?Fragment.empty:Fragment.from(i.copy(Fragment.empty))).append(c?Fragment.empty:Fragment.from(i.copy(Fragment.empty))),l?0:1,c?0:1),l?0:1));e(n.scrollIntoView());return true}
/**
Create a command to sink the list item around the selection down
into an inner list. `itemType` may be an array of list item types.
*/function sinkListItem(t){return function(e,r){var n=e.selection,i=n.$from,a=n.$to;var o=i.blockRange(a,(function(e){return e.childCount>0&&isItem(t,e.firstChild.type)}));if(!o)return false;var u=o.startIndex;if(u==0)return false;var s=o.parent,f=s.child(u-1);if(!isItem(t,f.type))return false;if(r){var l=f.lastChild&&f.lastChild.type==s.type;var c=Fragment.from(l?f.lastChild.lastChild.type.create():null);var v=new Slice(Fragment.from(f.type.create(null,Fragment.from(s.type.create(null,c)))),l?3:1,0);var h=o.start,d=o.end;r(e.tr.step(new ReplaceAroundStep(h-(l?3:1),d,h,d,v,1,true)).scrollIntoView())}return true}}var domIndex=function(t){for(var e=0;;e++){t=t.previousSibling;if(!t)return e}};function parentNode(t){var e=t.assignedSlot||t.parentNode;return e&&e.nodeType==11?e.host:e}var reusedRange=null;
// Note that this will always return the same range, because DOM range
// objects are every expensive, and keep slowing down subsequent DOM
// updates, for some reason.
function textRange(t,e,r){var n=reusedRange||(reusedRange=document.createRange());n.setEnd(t,r==null?t.nodeValue.length:r);n.setStart(t,e||0);return n}function clearReusedRange(){reusedRange=null}
// Scans forward and backward through DOM positions equivalent to the
// given one to see if the two are in the same place (i.e. after a
// text node vs at the end of that text node)
function isEquivalentPosition(t,e,r,n){return r&&(scanFor(t,e,r,n,-1)||scanFor(t,e,r,n,1))}var atomElements=/^(img|br|input|textarea|hr)$/i;function scanFor(t,e,r,n,i){var a;for(;;){if(t==r&&e==n)return true;if(e==(i<0?0:nodeSize(t))){var o=t.parentNode;if(!o||!isElt(o)||hasBlockDesc(t)||(atomElements.test(t.nodeName)||t.contentEditable=="false"))return false;e=domIndex(t)+(i<0?0:1);t=o}else if(isElt(t)){var u=t.childNodes[e+(i<0?-1:0)];if(isElt(u)&&u.contentEditable=="false"){if((a=u.pmViewDesc)===null||a===void 0?void 0:a.ignoreForSelection)e+=i;else return false}else{t=u;e=i<0?nodeSize(t):0}}else{return false}}}function nodeSize(t){return t.nodeType==3?t.nodeValue.length:t.childNodes.length}function isElt(t){return t.nodeType==1}function isText(t){return t.nodeType==3}function contains(t,e){return e?t.contains(isElt(e)?e:e.parentNode):false}function textNodeBefore$1(t,e){for(;;){if(isText(t)&&e)return t;if(isElt(t)&&e>0){if(t.contentEditable=="false")return null;t=t.childNodes[e-1];e=nodeSize(t)}else if(t.parentNode&&!hasBlockDesc(t)){e=domIndex(t);t=t.parentNode}else{return null}}}function textNodeAfter$1(t,e){for(;;){if(isText(t)&&e<t.nodeValue.length)return t;if(isElt(t)&&e<t.childNodes.length){if(t.contentEditable=="false")return null;t=t.childNodes[e];e=0}else if(t.parentNode&&!hasBlockDesc(t)){e=domIndex(t)+1;t=t.parentNode}else{return null}}}function isOnEdge(t,e,r){for(var n=e==0,i=e==nodeSize(t);n||i;){if(t==r)return true;var a=domIndex(t);t=t.parentNode;if(!t)return false;n=n&&a==0;i=i&&a==nodeSize(t)}}function hasBlockDesc(t){var e;for(var r=t;r;r=r.parentNode)if(e=r.pmViewDesc)break;return e&&e.node&&e.node.isBlock&&(e.dom==t||e.contentDOM==t)}
// Work around Chrome issue https://bugs.chromium.org/p/chromium/issues/detail?id=447523
// (isCollapsed inappropriately returns true in shadow dom)
function selectionCollapsed(t){return t.focusNode&&isEquivalentPosition(t.focusNode,t.focusOffset,t.anchorNode,t.anchorOffset)}function writeSelection(t,e){t.collapse(e.anchorNode,e.anchorOffset);if(e.focusNode!=e.anchorNode||e.focusOffset!=e.anchorOffset)t.extend(e.focusNode,e.focusOffset)}function keyEvent(t,e){var r=document.createEvent("Event");r.initEvent("keydown",true,true);r.keyCode=t;r.key=r.code=e;return r}function deepActiveElement(t){var e=t.activeElement;while(e&&e.shadowRoot)e=e.shadowRoot.activeElement;return e}function caretFromPoint(t,e,r){if(t.caretPositionFromPoint){try{// Firefox throws for this call in hard-to-predict circumstances (#994)
var n=t.caretPositionFromPoint(e,r);
// Clip the offset, because Chrome will return a text offset
// into <input> nodes, which can't be treated as a regular DOM
// offset
if(n)return{node:n.offsetNode,offset:Math.min(nodeSize(n.offsetNode),n.offset)}}catch(t){}}if(t.caretRangeFromPoint){var i=t.caretRangeFromPoint(e,r);if(i)return{node:i.startContainer,offset:Math.min(nodeSize(i.startContainer),i.startOffset)}}}var nav=typeof navigator!="undefined"?navigator:null;var doc=typeof document!="undefined"?document:null;var agent=nav&&nav.userAgent||"";var gecko=/gecko\/(\d+)/i.test(agent)&&!/edge?\//i.test(agent);var _chrome=/Chrome\/(\d+)/.exec(agent);var chrome=!!_chrome;var chrome_version=_chrome?+_chrome[1]:0;var safari=!!nav&&/Apple Computer/.test(nav.vendor);
// Is true for both iOS and iPadOS for convenience
var ios=safari&&(/Mobile\/\w+/.test(agent)||!!nav&&nav.maxTouchPoints>2);var mac$2=ios||(nav?/Mac/.test(nav.platform):false);var windows$1=nav?/Win/.test(nav.platform):false;var android=/Android \d/.test(agent);var webkit=!!doc&&"webkitFontSmoothing"in doc.documentElement.style;var webkit_version=webkit?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0;function windowRect(t){var e=t.defaultView&&t.defaultView.visualViewport;if(e)return{left:0,right:e.width,top:0,bottom:e.height};return{left:0,right:t.documentElement.clientWidth,top:0,bottom:t.documentElement.clientHeight}}function getSide(t,e){return typeof t=="number"?t:t[e]}function clientRect(t){var e=t.getBoundingClientRect();
// Adjust for elements with style "transform: scale()"
var r=e.width/t.offsetWidth||1;var n=e.height/t.offsetHeight||1;
// Make sure scrollbar width isn't included in the rectangle
return{left:e.left,right:e.left+t.clientWidth*r,top:e.top,bottom:e.top+t.clientHeight*n}}function scrollRectIntoView(t,e,r){
// Skip empty rects with all sides at 0, for example, when the element has no CSS box (display: none)
if(!nonZero(e)&&e.left==0)return;var n=t.someProp("scrollThreshold")||0,i=t.someProp("scrollMargin")||5;var a=t.dom.ownerDocument;for(var o=r||t.dom;;){if(!o)break;if(!isElt(o)){o=parentNode(o);continue}var u=o==a.body;var s=u?windowRect(a):clientRect(o);var f=0,l=0;if(e.top<s.top+getSide(n,"top"))l=-(s.top-e.top+getSide(i,"top"));else if(e.bottom>s.bottom-getSide(n,"bottom"))l=e.bottom-e.top>s.bottom-s.top?e.top+getSide(i,"top")-s.top:e.bottom-s.bottom+getSide(i,"bottom");if(e.left<s.left+getSide(n,"left"))f=-(s.left-e.left+getSide(i,"left"));else if(e.right>s.right-getSide(n,"right"))f=e.right-s.right+getSide(i,"right");if(f||l){if(u){a.defaultView.scrollBy(f,l)}else{var c=o.scrollLeft,v=o.scrollTop;if(l)o.scrollTop+=l;if(f)o.scrollLeft+=f;var h=o.scrollLeft-c,d=o.scrollTop-v;e={left:e.left-h,top:e.top-d,right:e.right-h,bottom:e.bottom-d}}}var p=u?"fixed":getComputedStyle(o).position;if(/^(fixed|sticky)$/.test(p))break;o=p=="absolute"?o.offsetParent:parentNode(o)}}
// Store the scroll position of the editor's parent nodes, along with
// the top position of an element near the top of the editor, which
// will be used to make sure the visible viewport remains stable even
// when the size of the content above changes.
function storeScrollPos(t){var e=t.dom.getBoundingClientRect(),r=Math.max(0,e.top);var n,i;for(var a=(e.left+e.right)/2,o=r+1;o<Math.min(innerHeight,e.bottom);o+=5){var u=t.root.elementFromPoint(a,o);if(!u||u==t.dom||!t.dom.contains(u))continue;var s=u.getBoundingClientRect();if(s.top>=r-20){n=u;i=s.top;break}}return{refDOM:n,refTop:i,stack:scrollStack(t.dom)}}function scrollStack(t){var e=[],r=t.ownerDocument;for(var n=t;n;n=parentNode(n)){e.push({dom:n,top:n.scrollTop,left:n.scrollLeft});if(t==r)break}return e}
// Reset the scroll position of the editor's parent nodes to that what
// it was before, when storeScrollPos was called.
function resetScrollPos(t){var e=t.refDOM,r=t.refTop,n=t.stack;var i=e?e.getBoundingClientRect().top:0;restoreScrollStack(n,i==0?0:i-r)}function restoreScrollStack(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=n.dom,a=n.top,o=n.left;if(i.scrollTop!=a+e)i.scrollTop=a+e;if(i.scrollLeft!=o)i.scrollLeft=o}}var preventScrollSupported=null;
// Feature-detects support for .focus({preventScroll: true}), and uses
// a fallback kludge when not supported.
function focusPreventScroll(t){if(t.setActive)return t.setActive();// in IE
if(preventScrollSupported)return t.focus(preventScrollSupported);var e=scrollStack(t);t.focus(preventScrollSupported==null?{get preventScroll(){preventScrollSupported={preventScroll:true};return true}}:undefined);if(!preventScrollSupported){preventScrollSupported=false;restoreScrollStack(e,0)}}function findOffsetInNode(t,e){var r;var n=2e8,i,a=0;var o=e.top,u=e.top;var s,f;for(var l=t.firstChild,c=0;l;l=l.nextSibling,c++){var v=void 0;if(isElt(l))v=l.getClientRects();else if(isText(l))v=textRange(l).getClientRects();else continue;for(var h=0;h<v.length;h++){var d=v[h];if(d.top<=o&&d.bottom>=u){o=Math.max(d.bottom,o);u=Math.min(d.top,u);var p=d.left>e.left?d.left-e.left:d.right<e.left?e.left-d.right:0;if(p<n){r=l;n=p;i=p&&isText(r)?{left:d.right<e.left?d.right:d.left,top:e.top}:e;if(isElt(l)&&p)a=c+(e.left>=(d.left+d.right)/2?1:0);continue}}else if(d.top>e.top&&!s&&d.left<=e.left&&d.right>=e.left){s=l;f={left:Math.max(d.left,Math.min(d.right,e.left)),top:d.top}}if(!r&&(e.left>=d.right&&e.top>=d.top||e.left>=d.left&&e.top>=d.bottom))a=c+1}}if(!r&&s){r=s;i=f;n=0}if(r&&isText(r))return findOffsetInText(r,i);if(!r||n)return{node:t,offset:a};return findOffsetInNode(r,i)}function findOffsetInText(t,e){var r=t.nodeValue.length;var n=document.createRange(),i;for(var a=0;a<r;a++){n.setEnd(t,a+1);n.setStart(t,a);var o=singleRect(n,1);if(o.top==o.bottom)continue;if(inRect(e,o)){i={node:t,offset:a+(e.left>=(o.left+o.right)/2?1:0)};break}}n.detach();return i||{node:t,offset:0}}function inRect(t,e){return t.left>=e.left-1&&t.left<=e.right+1&&t.top>=e.top-1&&t.top<=e.bottom+1}function targetKludge(t,e){var r=t.parentNode;if(r&&/^li$/i.test(r.nodeName)&&e.left<t.getBoundingClientRect().left)return r;return t}function posFromElement(t,e,r){var n=findOffsetInNode(e,r),i=n.node,a=n.offset,o=-1;if(isElt(i)&&!i.firstChild){var u=i.getBoundingClientRect();o=u.left!=u.right&&r.left>(u.left+u.right)/2?1:-1}return t.docView.posFromDOM(i,a,o)}function posFromCaret(t,e,r,n){
// Browser (in caretPosition/RangeFromPoint) will agressively
// normalize towards nearby inline nodes. Since we are interested in
// positions between block nodes too, we first walk up the hierarchy
// of nodes to see if there are block nodes that the coordinates
// fall outside of. If so, we take the position before/after that
// block. If not, we call `posFromDOM` on the raw node/offset.
var i=-1;for(var a=e,o=false;;){if(a==t.dom)break;var u=t.docView.nearestDesc(a,true),s=void 0;if(!u)return null;if(isElt(u.dom)&&(u.node.isBlock&&u.parent||!u.contentDOM)&&(
// Ignore elements with zero-size bounding rectangles
(s=u.dom.getBoundingClientRect()).width||s.height)){if(u.node.isBlock&&u.parent&&!/^T(R|BODY|HEAD|FOOT)$/.test(u.dom.nodeName)){
// Only apply the horizontal test to the innermost block. Vertical for any parent.
if(!o&&s.left>n.left||s.top>n.top)i=u.posBefore;else if(!o&&s.right<n.left||s.bottom<n.top)i=u.posAfter;o=true}if(!u.contentDOM&&i<0&&!u.node.isText){
// If we are inside a leaf, return the side of the leaf closer to the coords
var f=u.node.isBlock?n.top<(s.top+s.bottom)/2:n.left<(s.left+s.right)/2;return f?u.posBefore:u.posAfter}}a=u.dom.parentNode}return i>-1?i:t.docView.posFromDOM(e,r,-1)}function elementFromPoint(t,e,r){var n=t.childNodes.length;if(n&&r.top<r.bottom){for(var i=Math.max(0,Math.min(n-1,Math.floor(n*(e.top-r.top)/(r.bottom-r.top))-2)),a=i;;){var o=t.childNodes[a];if(isElt(o)){var u=o.getClientRects();for(var s=0;s<u.length;s++){var f=u[s];if(inRect(e,f))return elementFromPoint(o,e,f)}}if((a=(a+1)%n)==i)break}}return t}
// Given an x,y position on the editor, get the position in the document.
function posAtCoords(t,e){var r=t.dom.ownerDocument,n,i=0;var a=caretFromPoint(r,e.left,e.top);if(a)n=a.node,i=a.offset;var o=(t.root.elementFromPoint?t.root:r).elementFromPoint(e.left,e.top);var u;if(!o||!t.dom.contains(o)){var s=t.dom.getBoundingClientRect();if(!inRect(e,s))return null;o=elementFromPoint(t.dom,e,s);if(!o)return null}
// Safari's caretRangeFromPoint returns nonsense when on a draggable element
if(safari){for(var f=o;n&&f;f=parentNode(f))if(f.draggable)n=undefined}o=targetKludge(o,e);if(n){if(gecko&&isElt(n)){
// Firefox will sometimes return offsets into <input> nodes, which
// have no actual children, from caretPositionFromPoint (#953)
i=Math.min(i,n.childNodes.length);
// It'll also move the returned position before image nodes,
// even if those are behind it.
if(i<n.childNodes.length){var l=n.childNodes[i],s=void 0;if(l.nodeName=="IMG"&&(s=l.getBoundingClientRect()).right<=e.left&&s.bottom>e.top)i++}}var c=void 0;
// When clicking above the right side of an uneditable node, Chrome will report a cursor position after that node.
if(webkit&&i&&isElt(n)&&isElt(c=n.childNodes[i-1])&&c.contentEditable=="false"&&c.getBoundingClientRect().top>=e.top)i--;
// Suspiciously specific kludge to work around caret*FromPoint
// never returning a position at the end of the document
if(n==t.dom&&i==n.childNodes.length-1&&isElt(n.lastChild)&&e.top>n.lastChild.getBoundingClientRect().bottom)u=t.state.doc.content.size;
// Ignore positions directly after a BR, since caret*FromPoint
// 'round up' positions that would be more accurately placed
// before the BR node.
else if(i==0||!isElt(n)||n.childNodes[i-1].nodeName!="BR")u=posFromCaret(t,n,i,e)}if(u==null)u=posFromElement(t,o,e);var v=t.docView.nearestDesc(o,true);return{pos:u,inside:v?v.posAtStart-v.border:-1}}function nonZero(t){return t.top<t.bottom||t.left<t.right}function singleRect(t,e){var r=t.getClientRects();if(r.length){var n=r[e<0?0:r.length-1];if(nonZero(n))return n}return Array.prototype.find.call(r,nonZero)||t.getBoundingClientRect()}var BIDI=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
// Given a position in the document model, get a bounding box of the
// character at that position, relative to the window.
function coordsAtPos(t,e,r){var n=t.docView.domFromPos(e,r<0?-1:1),i=n.node,a=n.offset,o=n.atom;var u=webkit||gecko;if(isText(i)){
// These browsers support querying empty text ranges. Prefer that in
// bidi context or when at the end of a node.
if(u&&(BIDI.test(i.nodeValue)||(r<0?!a:a==i.nodeValue.length))){var s=singleRect(textRange(i,a,a),r);
// Firefox returns bad results (the position before the space)
// when querying a position directly after line-broken
// whitespace. Detect this situation and and kludge around it
if(gecko&&a&&/\s/.test(i.nodeValue[a-1])&&a<i.nodeValue.length){var f=singleRect(textRange(i,a-1,a-1),-1);if(f.top==s.top){var l=singleRect(textRange(i,a,a+1),-1);if(l.top!=s.top)return flattenV(l,l.left<f.left)}}return s}else{var c=a,v=a,h=r<0?1:-1;if(r<0&&!a){v++;h=-1}else if(r>=0&&a==i.nodeValue.length){c--;h=1}else if(r<0){c--}else{v++}return flattenV(singleRect(textRange(i,c,v),h),h<0)}}var d=t.state.doc.resolve(e-(o||0));
// Return a horizontal line in block context
if(!d.parent.inlineContent){if(o==null&&a&&(r<0||a==nodeSize(i))){var p=i.childNodes[a-1];if(isElt(p))return flattenH(p.getBoundingClientRect(),false)}if(o==null&&a<nodeSize(i)){var g=i.childNodes[a];if(isElt(g))return flattenH(g.getBoundingClientRect(),true)}return flattenH(i.getBoundingClientRect(),r>=0)}
// Inline, not in text node (this is not Bidi-safe)
if(o==null&&a&&(r<0||a==nodeSize(i))){var p=i.childNodes[a-1];var m=isText(p)?textRange(p,nodeSize(p)-(u?0:1)):isElt(p)&&(p.nodeName!="BR"||!p.nextSibling)?p:null;if(m)return flattenV(singleRect(m,1),false)}if(o==null&&a<nodeSize(i)){var g=i.childNodes[a];while(g.pmViewDesc&&g.pmViewDesc.ignoreForCoords)g=g.nextSibling;var m=!g?null:isText(g)?textRange(g,0,u?0:1):isElt(g)?g:null;if(m)return flattenV(singleRect(m,-1),true)}
// All else failed, just try to get a rectangle for the target node
return flattenV(singleRect(isText(i)?textRange(i):i,-r),r>=0)}function flattenV(t,e){if(t.width==0)return t;var r=e?t.left:t.right;return{top:t.top,bottom:t.bottom,left:r,right:r}}function flattenH(t,e){if(t.height==0)return t;var r=e?t.top:t.bottom;return{top:r,bottom:r,left:t.left,right:t.right}}function withFlushedState(t,e,r){var n=t.state,i=t.root.activeElement;if(n!=e)t.updateState(e);if(i!=t.dom)t.focus();try{return r()}finally{if(n!=e)t.updateState(n);if(i!=t.dom&&i)i.focus()}}
// Whether vertical position motion in a given direction
// from a position would leave a text block.
function endOfTextblockVertical(t,e,r){var n=e.selection;var i=r=="up"?n.$from:n.$to;return withFlushedState(t,e,(function(){var e=t.docView.domFromPos(i.pos,r=="up"?-1:1).node;for(;;){var n=t.docView.nearestDesc(e,true);if(!n)break;if(n.node.isBlock){e=n.contentDOM||n.dom;break}e=n.dom.parentNode}var a=coordsAtPos(t,i.pos,1);for(var o=e.firstChild;o;o=o.nextSibling){var u=void 0;if(isElt(o))u=o.getClientRects();else if(isText(o))u=textRange(o,0,o.nodeValue.length).getClientRects();else continue;for(var s=0;s<u.length;s++){var f=u[s];if(f.bottom>f.top+1&&(r=="up"?a.top-f.top>(f.bottom-a.top)*2:f.bottom-a.bottom>(a.bottom-f.top)*2))return false}}return true}))}var maybeRTL=/[\u0590-\u08ac]/;function endOfTextblockHorizontal(t,e,r){var n=e.selection.$head;if(!n.parent.isTextblock)return false;var i=n.parentOffset,a=!i,o=i==n.parent.content.size;var u=t.domSelection();if(!u)return n.pos==n.start()||n.pos==n.end();
// If the textblock is all LTR, or the browser doesn't support
// Selection.modify (Edge), fall back to a primitive approach
if(!maybeRTL.test(n.parent.textContent)||!u.modify)return r=="left"||r=="backward"?a:o;return withFlushedState(t,e,(function(){
// This is a huge hack, but appears to be the best we can
// currently do: use `Selection.modify` to move the selection by
// one character, and see if that moves the cursor out of the
// textblock (or doesn't move it at all, when at the start/end of
// the document).
var e=t.domSel.readRange();var i=u.caretBidiLevel;u.modify("move",r,"character");var a=n.depth?t.docView.domAfterPos(n.before()):t.dom;var o=t.domSel.readRange(),s=o.focusNode,f=o.focusOffset;var l=s&&!contains(a,s)||e.focusNode==s&&e.focusOffset==f;
// Restore the previous selection
writeSelection(u,e);if(i!=null)u.caretBidiLevel=i;return l}))}var cachedState=null;var cachedDir=null;var cachedResult=false;function endOfTextblock(t,e,r){if(cachedState==e&&cachedDir==r)return cachedResult;cachedState=e;cachedDir=r;return cachedResult=r=="up"||r=="down"?endOfTextblockVertical(t,e,r):endOfTextblockHorizontal(t,e,r)}
// Superclass for the various kinds of descriptions. Defines their
// basic structure and shared methods.
var ViewDesc=/** @class */function(){function t(t,e,r,
// This is the node that holds the child views. It may be null for
// descs that don't have children.
n){this.parent=t;this.children=e;this.dom=r;this.contentDOM=n;this.damage=0/* Damage.None */;
// An expando property on the DOM node provides a link back to its
// description.
r.pmViewDesc=this}
// Used to check whether a given description corresponds to a
// widget/mark/node.
t.prototype.matchesWidget=function(t){return false};t.prototype.matchesMark=function(t){return false};t.prototype.matchesNode=function(t,e,r){return false};t.prototype.matchesHack=function(t){return false};
// When parsing in-editor content (in domchange.js), we allow
// descriptions to determine the parse rules that should be used to
// parse them.
t.prototype.parseRule=function(t){return null};
// Used by the editor's event handler to ignore events that come
// from certain descs.
t.prototype.stopEvent=function(t){return false};Object.defineProperty(t.prototype,"size",{
// The size of the content represented by this desc.
get:function(){var t=0;for(var e=0;e<this.children.length;e++)t+=this.children[e].size;return t},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"border",{
// For block nodes, this represents the space taken up by their
// start/end tokens.
get:function(){return 0},enumerable:false,configurable:true});t.prototype.destroy=function(){this.parent=undefined;if(this.dom.pmViewDesc==this)this.dom.pmViewDesc=undefined;for(var t=0;t<this.children.length;t++)this.children[t].destroy()};t.prototype.posBeforeChild=function(t){for(var e=0,r=this.posAtStart;;e++){var n=this.children[e];if(n==t)return r;r+=n.size}};Object.defineProperty(t.prototype,"posBefore",{get:function(){return this.parent.posBeforeChild(this)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"posAtStart",{get:function(){return this.parent?this.parent.posBeforeChild(this)+this.border:0},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"posAfter",{get:function(){return this.posBefore+this.size},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"posAtEnd",{get:function(){return this.posAtStart+this.size-2*this.border},enumerable:false,configurable:true});t.prototype.localPosFromDOM=function(t,e,r){var n=this;
// If the DOM position is in the content, use the child desc after
// it to figure out a position.
if(this.contentDOM&&contains(this.contentDOM,t)){if(r<0){var i=void 0,a=void 0;if(t==this.contentDOM){i=t.childNodes[e-1]}else{while(t.parentNode!=this.contentDOM)t=t.parentNode;i=t.previousSibling}while(i&&!((a=i.pmViewDesc)&&a.parent==this))i=i.previousSibling;return i?this.posBeforeChild(a)+a.size:this.posAtStart}else{var o=void 0,a=void 0;if(t==this.contentDOM){o=t.childNodes[e]}else{while(t.parentNode!=this.contentDOM)t=t.parentNode;o=t.nextSibling}while(o&&!((a=o.pmViewDesc)&&a.parent==this))o=o.nextSibling;return o?this.posBeforeChild(a):this.posAtEnd}}
// Otherwise, use various heuristics, falling back on the bias
// parameter, to determine whether to return the position at the
// start or at the end of this view desc.
var u;if(t==this.dom&&this.contentDOM){u=e>domIndex(this.contentDOM)}else if(this.contentDOM&&this.contentDOM!=this.dom&&this.dom.contains(this.contentDOM)){var s=t.compareDocumentPosition(this.contentDOM);if(s&16){// this.contentDOM is inside dom
u=e>Array.from(t.childNodes).findIndex((function(t){return t.contains(n.contentDOM)}))}else{// Check if after or before
u=!(s&4)}}else if(this.dom.firstChild){if(e==0)for(var f=t;;f=f.parentNode){if(f==this.dom){u=false;break}if(f.previousSibling)break}if(u==null&&e==t.childNodes.length)for(var f=t;;f=f.parentNode){if(f==this.dom){u=true;break}if(f.nextSibling)break}}return(u==null?r>0:u)?this.posAtEnd:this.posAtStart};t.prototype.nearestDesc=function(t,e){if(e===void 0){e=false}for(var r=true,n=t;n;n=n.parentNode){var i=this.getDesc(n),a=void 0;if(i&&(!e||i.node)){
// If dom is outside of this desc's nodeDOM, don't count it.
if(r&&(a=i.nodeDOM)&&!(isElt(a)?contains(a,t):a==t))r=false;else return i}}};t.prototype.getDesc=function(t){var e=t.pmViewDesc;for(var r=e;r;r=r.parent)if(r==this)return e};t.prototype.posFromDOM=function(t,e,r){for(var n=t;n;n=n.parentNode){var i=this.getDesc(n);if(i)return i.localPosFromDOM(t,e,r)}return-1};
// Find the desc for the node after the given pos, if any. (When a
// parent node overrode rendering, there might not be one.)
t.prototype.descAt=function(t){for(var e=0,r=0;e<this.children.length;e++){var n=this.children[e],i=r+n.size;if(r==t&&i!=r){while(!n.border&&n.children.length){for(var a=0;a<n.children.length;a++){var o=n.children[a];if(o.size){n=o;break}}}return n}if(t<i)return n.descAt(t-r-n.border);r=i}};t.prototype.domFromPos=function(t,e){if(!this.contentDOM)return{node:this.dom,offset:0,atom:t+1};
// First find the position in the child array
var r=0,n=0;for(var i=0;r<this.children.length;r++){var a=this.children[r],o=i+a.size;if(o>t){n=t-i;break}i=o}
// If this points into the middle of a child, call through
if(n)return this.children[r].domFromPos(n-this.children[r].border,e);
// Go back if there were any zero-length widgets with side >= 0 before this point
for(;r>0;r--){var u=this.children[r-1];if(u.size||!(u instanceof BufferHackViewDesc||u instanceof WidgetViewDesc&&u.side>=0))break}
// Scan towards the first useable node
if(e<=0){var u=void 0,s=true;for(;;r--,s=false){u=r?this.children[r-1]:null;if(!u||u.dom.parentNode==this.contentDOM)break}if(u&&e&&s&&!u.border&&!u.domAtom)return u.domFromPos(u.size,e);return{node:this.contentDOM,offset:u?domIndex(u.dom)+1:0}}else{var f=void 0,l=true;for(;;r++,l=false){f=r<this.children.length?this.children[r]:null;if(!f||f.dom.parentNode==this.contentDOM)break}if(f&&l&&!f.border&&!f.domAtom)return f.domFromPos(0,e);return{node:this.contentDOM,offset:f?domIndex(f.dom):this.contentDOM.childNodes.length}}};
// Used to find a DOM range in a single parent for a given changed
// range.
t.prototype.parseRange=function(t,e,r){if(r===void 0){r=0}if(this.children.length==0)return{node:this.contentDOM,from:t,to:e,fromOffset:0,toOffset:this.contentDOM.childNodes.length};var n=-1,i=-1;for(var a=r,o=0;;o++){var u=this.children[o],s=a+u.size;if(n==-1&&t<=s){var f=a+u.border;
// FIXME maybe descend mark views to parse a narrower range?
if(t>=f&&e<=s-u.border&&u.node&&u.contentDOM&&this.contentDOM.contains(u.contentDOM))return u.parseRange(t,e,f);t=a;for(var l=o;l>0;l--){var c=this.children[l-1];if(c.size&&c.dom.parentNode==this.contentDOM&&!c.emptyChildAt(1)){n=domIndex(c.dom)+1;break}t-=c.size}if(n==-1)n=0}if(n>-1&&(s>e||o==this.children.length-1)){e=s;for(var l=o+1;l<this.children.length;l++){var v=this.children[l];if(v.size&&v.dom.parentNode==this.contentDOM&&!v.emptyChildAt(-1)){i=domIndex(v.dom);break}e+=v.size}if(i==-1)i=this.contentDOM.childNodes.length;break}a=s}return{node:this.contentDOM,from:t,to:e,fromOffset:n,toOffset:i}};t.prototype.emptyChildAt=function(t){if(this.border||!this.contentDOM||!this.children.length)return false;var e=this.children[t<0?0:this.children.length-1];return e.size==0||e.emptyChildAt(t)};t.prototype.domAfterPos=function(t){var e=this.domFromPos(t,0),r=e.node,n=e.offset;if(!isElt(r)||n==r.childNodes.length)throw new RangeError("No node after pos "+t);return r.childNodes[n]};t.prototype.ignoreMutation=function(t){return!this.contentDOM&&t.type!="selection"};Object.defineProperty(t.prototype,"contentLost",{get:function(){return this.contentDOM&&this.contentDOM!=this.dom&&!this.dom.contains(this.contentDOM)},enumerable:false,configurable:true});t.prototype.markDamage=function(t){if(t){this.damage|=t;this.markParentDamage()}};t.prototype.markParentDamage=function(){for(var t=this;;){var e=t.parent;if(!e||e.damage&1/* Damage.Child */)break;e.damage|=1/* Damage.Child */;t=e}};Object.defineProperty(t.prototype,"domAtom",{get:function(){return false},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ignoreForCoords",{get:function(){return false},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ignoreForSelection",{get:function(){return false},enumerable:false,configurable:true});t.prototype.isText=function(t){return false};return t}();
// A widget desc represents a widget decoration, which is a DOM node
// drawn between the document nodes.
var WidgetViewDesc=/** @class */function(t){__extends(e,t);function e(e,r,n,i){var a=this;var o,u=r.type.toDOM;if(typeof u=="function")u=u(n,(function(){if(!o)return i;if(o.parent)return o.parent.posBeforeChild(o)}));if(!r.type.spec.raw){var s=isElt(u)?u:document.createElement("span");if(s!=u){s.appendChild(u);u=s}if(!s.hasAttribute("contenteditable"))s.contentEditable="false";s.classList.add("ProseMirror-widget")}a=t.call(this,e,[],u,null)||this;a.widget=r;a.widget=r;o=a;return a}e.prototype.matchesWidget=function(t){return!this.damage&&t.type.eq(this.widget.type)};e.prototype.parseRule=function(){return{ignore:true}};e.prototype.stopEvent=function(t){var e=this.widget.spec.stopEvent;return e?e(t):false};e.prototype.ignoreMutation=function(t){return t.type!="selection"||this.widget.spec.ignoreSelection};e.prototype.destroy=function(){this.widget.type.destroy(this.dom);t.prototype.destroy.call(this)};Object.defineProperty(e.prototype,"domAtom",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"ignoreForSelection",{get:function(){return!!this.widget.type.spec.relaxedSide},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"side",{get:function(){return this.widget.type.side},enumerable:false,configurable:true});return e}(ViewDesc);var CompositionViewDesc=/** @class */function(t){__extends(e,t);function e(e,r,n,i){var a=t.call(this,e,[],r,null)||this;a.textDOM=n;a.text=i;return a}Object.defineProperty(e.prototype,"size",{get:function(){return this.text.length},enumerable:false,configurable:true});e.prototype.localPosFromDOM=function(t,e){if(t!=this.textDOM)return this.posAtStart+(e?this.size:0);return this.posAtStart+e};e.prototype.domFromPos=function(t){return{node:this.textDOM,offset:t}};e.prototype.ignoreMutation=function(t){return t.type==="characterData"&&t.target.nodeValue==t.oldValue};return e}(ViewDesc);
// A mark desc represents a mark. May have multiple children,
// depending on how the mark is split. Note that marks are drawn using
// a fixed nesting order, for simplicity and predictability, so in
// some cases they will be split more often than would appear
// necessary.
var MarkViewDesc=/** @class */function(t){__extends(e,t);function e(e,r,n,i,a){var o=t.call(this,e,[],n,i)||this;o.mark=r;o.spec=a;return o}e.create=function(t,r,n,i){var a=i.nodeViews[r.type.name];var o=a&&a(r,i,n);if(!o||!o.dom)o=DOMSerializer.renderSpec(document,r.type.spec.toDOM(r,n),null,r.attrs);return new e(t,r,o.dom,o.contentDOM||o.dom,o)};e.prototype.parseRule=function(){if(this.damage&4/* Damage.Structure */||this.mark.type.spec.reparseInView)return null;return{mark:this.mark.type.name,attrs:this.mark.attrs,contentElement:this.contentDOM}};e.prototype.matchesMark=function(t){return!(this.damage&4/* Damage.Structure */)&&this.mark.eq(t)};e.prototype.markDamage=function(t){var e;this.damage|=t;(e=this.parent)===null||e===void 0?void 0:e.markDamage(2/* Damage.ChildList */)};e.prototype.slice=function(t,r,n){var i=e.create(this.parent,this.mark,true,n);var a=this.children,o=this.size;if(r<o)a=replaceNodes(a,r,o,n);if(t>0)a=replaceNodes(a,0,t,n);for(var u=0;u<a.length;u++)a[u].parent=i;i.children=a;return i};e.prototype.ignoreMutation=function(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):t.prototype.ignoreMutation.call(this,e)};e.prototype.destroy=function(){if(this.spec.destroy)this.spec.destroy();t.prototype.destroy.call(this)};return e}(ViewDesc);
// Node view descs are the main, most common type of view desc, and
// correspond to an actual node in the document. Unlike mark descs,
// they populate their child array themselves.
var NodeViewDesc=/** @class */function(t){__extends(e,t);function e(e,r,n,i,a,o,u){var s=t.call(this,e,[],a,o)||this;s.node=r;s.outerDeco=n;s.innerDeco=i;s.nodeDOM=u;return s}
// By default, a node is rendered using the `toDOM` method from the
// node type spec. But client code can use the `nodeViews` spec to
// supply a custom node view, which can influence various aspects of
// the way the node works.

// (Using subclassing for this was intentionally decided against,
// since it'd require exposing a whole slew of finicky
// implementation details to the user code that they probably will
// never need.)
e.create=function(t,r,n,i,a,o){var u=a.nodeViews[r.type.name],s;var f=u&&u(r,a,(function(){
// (This is a function that allows the custom view to find its
// own position)
if(!s)return o;if(s.parent)return s.parent.posBeforeChild(s)}),n,i);var l=f&&f.dom,c=f&&f.contentDOM;if(r.isText){if(!l)l=document.createTextNode(r.text);else if(!isText(l))throw new RangeError("Text must be rendered as a DOM text node")}else if(!l){var v=DOMSerializer.renderSpec(document,r.type.spec.toDOM(r),null,r.attrs);l=v.dom,c=v.contentDOM}if(!c&&!r.isText&&l.nodeName!="BR"){// Chrome gets confused by <br contenteditable=false>
if(!l.hasAttribute("contenteditable"))l.contentEditable="false";if(r.type.spec.draggable)l.draggable=true}var h=l;l=applyOuterDeco(l,n,r);if(f)return s=new CustomNodeViewDesc(t,r,n,i,l,c||null,h,f);else if(r.isText)return new TextViewDesc(t,r,n,i,l,h);else return new e(t,r,n,i,l,c||null,h)};e.prototype.parseRule=function(t){var e=this;
// Experimental kludge to allow opt-in re-parsing of nodes
if(this.node.type.spec.reparseInView)return null;
// FIXME the assumption that this can always return the current
// attrs means that if the user somehow manages to change the
// attrs in the dom, that won't be picked up. Not entirely sure
// whether this is a problem
var r={node:this.node.type.name,attrs:this.node.attrs};if(this.node.type.whitespace=="pre")r.preserveWhitespace="full";if(!this.contentDOM){r.getContent=function(){return e.node.content}}else if(!this.contentLost){r.contentElement=this.contentDOM}else{
// Chrome likes to randomly recreate parent nodes when
// backspacing things. When that happens, this tries to find the
// new parent.
for(var n=this.children.length-1;n>=0;n--){var i=this.children[n];if(this.dom.contains(i.dom.parentNode)){r.contentElement=i.dom.parentNode;break}}if(!r.contentElement){var a=t&&t.find((function(r){return isElt(r)&&t.indexOf(r.parentNode)<0&&e.dom.contains(r)}));if(a)r.contentElement=a;else r.getContent=function(){return Fragment.empty}}}return r};e.prototype.matchesNode=function(t,e,r){return!this.damage&&t.eq(this.node)&&sameOuterDeco(e,this.outerDeco)&&r.eq(this.innerDeco)};Object.defineProperty(e.prototype,"size",{get:function(){return this.node.nodeSize},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"border",{get:function(){return this.node.isLeaf?0:1},enumerable:false,configurable:true});
// Syncs `this.children` to match `this.node.content` and the local
// decorations, possibly introducing nesting for marks. Then, in a
// separate step, syncs the DOM inside `this.contentDOM` to
// `this.children`.
e.prototype.updateChildren=function(t,e){var r=this;var n=this.node.inlineContent,i=e;var a=t.composing?this.localCompositionInfo(t,e):null;var o=a&&a.pos>-1?a:null;var u=a&&a.pos<0;var s=new ViewTreeUpdater(this,o&&o.node,t);var f=this.node.inlineContent,l=f&&this.node.isBlock;iterDeco(this.node,this.innerDeco,(function(e,a,o){if(e.spec.marks)s.syncToMarks(e.spec.marks,n,t,a);else if(e.type.side>=0&&!o)s.syncToMarks(a==r.node.childCount?Mark$1.none:r.node.child(a).marks,n,t,a);
// If the next node is a desc matching this widget, reuse it,
// otherwise insert the widget as a new view desc.
s.placeWidget(e,t,i)}),(function(e,r,o,c){
// Make sure the wrapping mark descs match the node's marks.
s.syncToMarks(e.marks,n,t,c);if(l&&e.isAtom&&!e.isText)s.addHackNode("IMG",s.top);
// Try several strategies for drawing this node
var v;if(s.findNodeMatch(e,r,o,c));else if(u&&t.state.selection.from>i&&t.state.selection.to<i+e.nodeSize&&(v=s.findIndexWithChild(a.node))>-1&&s.updateNodeAt(e,r,o,v,t,i));else if(s.updateNextNode(e,r,o,t,c,i));else{
// Add it as a new view
s.addNode(e,r,o,t,i)}i+=e.nodeSize;if(f)l=e.isAtom&&!e.isText}));
// Drop all remaining descs after the current position.
s.syncToMarks([],n,t,0);if(this.node.isTextblock)s.addTextblockHacks();s.destroyRest();
// Sync the DOM if anything changed
if(s.changed||this.damage&2/* Damage.ChildList */){
// May have to protect focused DOM from being changed if a composition is active
if(o)this.protectLocalComposition(t,o);renderDescs(this.contentDOM,this.children,t);if(ios)iosHacks(this.dom)}};e.prototype.localCompositionInfo=function(t,e){
// Only do something if both the selection and a focused text node
// are inside of this node
var r=t.state.selection,n=r.from,i=r.to;if(!(t.state.selection instanceof TextSelection)||n<e||i>e+this.node.content.size)return null;var a=t.input.compositionNode;if(!a||!this.dom.contains(a.parentNode))return null;if(this.node.inlineContent){
// Find the text in the focused node in the node, stop if it's not
// there (may have been modified through other means, in which
// case it should overwritten)
var o=a.nodeValue;var u=findTextInFragment(this.node.content,o,n-e,i-e);return u<0?null:{node:a,pos:u,text:o}}else{return{node:a,pos:-1,text:""}}};e.prototype.protectLocalComposition=function(t,e){var r=e.node,n=e.pos,i=e.text;
// The node is already part of a local view desc, leave it there
if(this.getDesc(r))return;
// Create a composition view for the orphaned nodes
var a=r;for(;;a=a.parentNode){if(a.parentNode==this.contentDOM)break;while(a.previousSibling)a.parentNode.removeChild(a.previousSibling);while(a.nextSibling)a.parentNode.removeChild(a.nextSibling);if(a.pmViewDesc)a.pmViewDesc=undefined}var o=new CompositionViewDesc(this,a,r,i);t.input.compositionNodes.push(o);
// Patch up this.children to contain the composition view
this.children=replaceNodes(this.children,n,n+i.length,t,o)};
// If this desc must be updated to match the given node decoration,
// do so and return true. pos is the position before the node, or -1
// for the document.
e.prototype.update=function(t,e,r,n,i){if(this.damage&4/* Damage.Structure */||!t.sameMarkup(this.node))return false;this.updateInner(t,e,r,n,i);return true};e.prototype.updateInner=function(t,e,r,n,i){this.updateOuterDeco(e);this.node=t;this.innerDeco=r;if(this.contentDOM)this.updateChildren(n,i+1);this.damage=0/* Damage.None */};e.prototype.updateOuterDeco=function(t){if(sameOuterDeco(t,this.outerDeco))return;var e=!isElt(this.nodeDOM);var r=this.dom;this.dom=patchOuterDeco(this.dom,this.nodeDOM,computeOuterDeco(this.outerDeco,this.node,e),computeOuterDeco(t,this.node,e));if(this.dom!=r){r.pmViewDesc=undefined;this.dom.pmViewDesc=this}this.outerDeco=t};
// Mark this node as being the selected node.
e.prototype.selectNode=function(){if(isElt(this.nodeDOM)){this.nodeDOM.classList.add("ProseMirror-selectednode");if(this.contentDOM||!this.node.type.spec.draggable)this.nodeDOM.draggable=true}};
// Remove selected node marking from this node.
e.prototype.deselectNode=function(){if(isElt(this.nodeDOM)){this.nodeDOM.classList.remove("ProseMirror-selectednode");if(this.contentDOM||!this.node.type.spec.draggable)this.nodeDOM.removeAttribute("draggable")}};Object.defineProperty(e.prototype,"domAtom",{get:function(){return this.node.isAtom},enumerable:false,configurable:true});return e}(ViewDesc);
// Create a view desc for the top-level document node, to be exported
// and used by the view class.
function docViewDesc(t,e,r,n,i,a){if(!a)applyOuterDeco(n,e,t);else patchOuterDeco(n,n,computeOuterDeco(a,t,false),computeOuterDeco(e,t,false));var o=new NodeViewDesc(undefined,t,e,r,n,n,n);if(o.contentDOM)o.updateChildren(i,0);return o}var TextViewDesc=/** @class */function(t){__extends(e,t);function e(e,r,n,i,a,o){return t.call(this,e,r,n,i,a,null,o)||this}e.prototype.parseRule=function(){var t=this.nodeDOM.parentNode;while(t&&t!=this.dom&&!t.pmIsDeco)t=t.parentNode;return{skip:t||true}};e.prototype.update=function(t,e,r,n){if(this.damage&4/* Damage.Structure */||this.damage&&!this.inParent()||!t.sameMarkup(this.node))return false;this.updateOuterDeco(e);if((this.damage&8/* Damage.Text */||t.text!=this.node.text)&&t.text!=this.nodeDOM.nodeValue){this.nodeDOM.nodeValue=t.text;if(n.trackWrites==this.nodeDOM)n.trackWrites=null}this.node=t;this.damage=0/* Damage.None */;return true};e.prototype.inParent=function(){var t=this.parent.contentDOM;for(var e=this.nodeDOM;e;e=e.parentNode)if(e==t)return true;return false};e.prototype.domFromPos=function(t){return{node:this.nodeDOM,offset:t}};e.prototype.localPosFromDOM=function(e,r,n){if(e==this.nodeDOM)return this.posAtStart+Math.min(r,this.node.text.length);return t.prototype.localPosFromDOM.call(this,e,r,n)};e.prototype.ignoreMutation=function(t){return false};e.prototype.slice=function(t,r,n){var i=this.node.cut(t,r),a=document.createTextNode(i.text);return new e(this.parent,i,this.outerDeco,this.innerDeco,a,a)};Object.defineProperty(e.prototype,"domAtom",{get:function(){return false},enumerable:false,configurable:true});e.prototype.isText=function(t){return this.node.text==t};return e}(NodeViewDesc);
// A dummy desc used to tag extra BR or IMG nodes created to work
// around contentEditable terribleness.
var BufferHackViewDesc=/** @class */function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.prototype.parseRule=function(){return{ignore:true}};e.prototype.matchesHack=function(t){return!this.damage&&this.dom.nodeName==t};Object.defineProperty(e.prototype,"domAtom",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"ignoreForCoords",{get:function(){return this.dom.nodeName=="IMG"},enumerable:false,configurable:true});return e}(ViewDesc);
// A separate subclass is used for customized node views, so that the
// extra checks only have to be made for nodes that are actually
// customized.
var CustomNodeViewDesc=/** @class */function(t){__extends(e,t);function e(e,r,n,i,a,o,u,s){var f=t.call(this,e,r,n,i,a,o,u)||this;f.spec=s;return f}
// A custom `update` method gets to decide whether the update goes
// through. If it does, and there's a `contentDOM` node, our logic
// updates the children.
e.prototype.update=function(e,r,n,i,a){if(this.damage&4/* Damage.Structure */)return false;if(this.spec.update&&(this.node.type==e.type||this.spec.multiType)){var o=this.spec.update(e,r,n);if(o)this.updateInner(e,r,n,i,a);return o}else if(!this.contentDOM&&!e.isLeaf){return false}else{return t.prototype.update.call(this,e,r,n,i,a)}};e.prototype.selectNode=function(){this.spec.selectNode?this.spec.selectNode():t.prototype.selectNode.call(this)};e.prototype.deselectNode=function(){this.spec.deselectNode?this.spec.deselectNode():t.prototype.deselectNode.call(this)};e.prototype.destroy=function(){if(this.spec.destroy)this.spec.destroy();t.prototype.destroy.call(this)};e.prototype.stopEvent=function(t){return this.spec.stopEvent?this.spec.stopEvent(t):false};e.prototype.ignoreMutation=function(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):t.prototype.ignoreMutation.call(this,e)};return e}(NodeViewDesc);
// Sync the content of the given DOM node with the nodes associated
// with the given array of view descs, recursing into mark descs
// because this should sync the subtree for a whole node at a time.
function renderDescs(t,e,r){var n=t.firstChild,i=false;for(var a=0;a<e.length;a++){var o=e[a],u=o.dom;if(u.parentNode==t){while(u!=n){n=rm(n);i=true}n=n.nextSibling}else{i=true;t.insertBefore(u,n)}if(o instanceof MarkViewDesc){var s=n?n.previousSibling:t.lastChild;renderDescs(o.contentDOM,o.children,r);n=s?s.nextSibling:t.firstChild}}while(n){n=rm(n);i=true}if(i&&r.trackWrites==t)r.trackWrites=null}var OuterDecoLevel=function(t){if(t)this.nodeName=t};OuterDecoLevel.prototype=Object.create(null);var noDeco=[new OuterDecoLevel];function computeOuterDeco(t,e,r){if(t.length==0)return noDeco;var n=r?noDeco[0]:new OuterDecoLevel,i=[n];for(var a=0;a<t.length;a++){var o=t[a].type.attrs;if(!o)continue;if(o.nodeName)i.push(n=new OuterDecoLevel(o.nodeName));for(var u in o){var s=o[u];if(s==null)continue;if(r&&i.length==1)i.push(n=new OuterDecoLevel(e.isInline?"span":"div"));if(u=="class")n.class=(n.class?n.class+" ":"")+s;else if(u=="style")n.style=(n.style?n.style+";":"")+s;else if(u!="nodeName")n[u]=s}}return i}function patchOuterDeco(t,e,r,n){
// Shortcut for trivial case
if(r==noDeco&&n==noDeco)return e;var i=e;for(var a=0;a<n.length;a++){var o=n[a],u=r[a];if(a){var s=void 0;if(u&&u.nodeName==o.nodeName&&i!=t&&(s=i.parentNode)&&s.nodeName.toLowerCase()==o.nodeName){i=s}else{s=document.createElement(o.nodeName);s.pmIsDeco=true;s.appendChild(i);u=noDeco[0];i=s}}patchAttributes(i,u||noDeco[0],o)}return i}function patchAttributes(t,e,r){for(var n in e)if(n!="class"&&n!="style"&&n!="nodeName"&&!(n in r))t.removeAttribute(n);for(var n in r)if(n!="class"&&n!="style"&&n!="nodeName"&&r[n]!=e[n])t.setAttribute(n,r[n]);if(e.class!=r.class){var i=e.class?e.class.split(" ").filter(Boolean):[];var a=r.class?r.class.split(" ").filter(Boolean):[];for(var o=0;o<i.length;o++)if(a.indexOf(i[o])==-1)t.classList.remove(i[o]);for(var u=0;u<a.length;u++)if(i.indexOf(a[u])==-1)t.classList.add(a[u]);if(t.classList.length==0)t.removeAttribute("class")}if(e.style!=r.style){if(e.style){var s=/\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,f=void 0;while(f=s.exec(e.style))t.style.removeProperty(f[1])}if(r.style)t.style.cssText+=r.style}}function applyOuterDeco(t,e,r){return patchOuterDeco(t,t,noDeco,computeOuterDeco(e,r,!isElt(t)))}function sameOuterDeco(t,e){if(t.length!=e.length)return false;for(var r=0;r<t.length;r++)if(!t[r].type.eq(e[r].type))return false;return true}
// Remove a DOM node and return its next sibling.
function rm(t){var e=t.nextSibling;t.parentNode.removeChild(t);return e}
// Helper class for incrementally updating a tree of mark descs and
// the widget and node descs inside of them.
var ViewTreeUpdater=/** @class */function(){function t(t,e,r){this.lock=e;this.view=r;
// Index into `this.top`'s child array, represents the current
// update position.
this.index=0;
// When entering a mark, the current top and index are pushed
// onto this.
this.stack=[];
// Tracks whether anything was changed
this.changed=false;this.top=t;this.preMatch=preMatch(t.node.content,t)}
// Destroy and remove the children between the given indices in
// `this.top`.
t.prototype.destroyBetween=function(t,e){if(t==e)return;for(var r=t;r<e;r++)this.top.children[r].destroy();this.top.children.splice(t,e-t);this.changed=true};
// Destroy all remaining children in `this.top`.
t.prototype.destroyRest=function(){this.destroyBetween(this.index,this.top.children.length)};
// Sync the current stack of mark descs with the given array of
// marks, reusing existing mark descs when possible.
t.prototype.syncToMarks=function(t,e,r,n){var i=0,a=this.stack.length>>1;var o=Math.min(a,t.length);while(i<o&&(i==a-1?this.top:this.stack[i+1<<1]).matchesMark(t[i])&&t[i].type.spec.spanning!==false)i++;while(i<a){this.destroyRest();this.top.damage=0/* Damage.None */;this.index=this.stack.pop();this.top=this.stack.pop();a--}while(a<t.length){this.stack.push(this.top,this.index+1);var u=-1,s=this.top.children.length;if(n<this.preMatch.index)s=Math.min(this.index+3,s);for(var f=this.index;f<s;f++){var l=this.top.children[f];if(l.matchesMark(t[a])&&!this.isLocked(l.dom)){u=f;break}}
// When nothing matches, try to update the mark view at this position
// in place, so a custom mark view can adapt to a changed mark without
// re-creating its DOM.
if(u<0&&this.index<this.top.children.length){var c=this.top.children[this.index];if(c instanceof MarkViewDesc&&!(c.damage&4/* Damage.Structure */)&&c.mark.type==t[a].type&&c.spec.update&&!this.isLocked(c.dom)&&c.spec.update(t[a])){c.mark=t[a];u=this.index;this.changed=true}}if(u>-1){if(u>this.index){this.changed=true;this.destroyBetween(this.index,u)}this.top=this.top.children[this.index]}else{var v=MarkViewDesc.create(this.top,t[a],e,r);this.top.children.splice(this.index,0,v);this.top=v;this.changed=true}this.index=0;a++}};
// Try to find a node desc matching the given data. Skip over it and
// return true when successful.
t.prototype.findNodeMatch=function(t,e,r,n){var i=-1,a;if(n>=this.preMatch.index&&(a=this.preMatch.matches[n-this.preMatch.index]).parent==this.top&&a.matchesNode(t,e,r)){i=this.top.children.indexOf(a,this.index)}else{for(var o=this.index,u=Math.min(this.top.children.length,o+5);o<u;o++){var s=this.top.children[o];if(s.matchesNode(t,e,r)&&!this.preMatch.matched.has(s)){i=o;break}}}if(i<0)return false;this.destroyBetween(this.index,i);this.index++;return true};t.prototype.updateNodeAt=function(t,e,r,n,i,a){var o=this.top.children[n];if(o.damage&4/* Damage.Structure */&&o.dom==o.contentDOM)o.damage=2/* Damage.ChildList */;if(!o.update(t,e,r,i,a))return false;this.destroyBetween(this.index,n);this.index++;return true};t.prototype.findIndexWithChild=function(t){for(;;){var e=t.parentNode;if(!e)return-1;if(e==this.top.contentDOM){var r=t.pmViewDesc;if(r)for(var n=this.index;n<this.top.children.length;n++){if(this.top.children[n]==r)return n}return-1}t=e}};
// Try to update the next node, if any, to the given data. Checks
// pre-matches to avoid overwriting nodes that could still be used.
t.prototype.updateNextNode=function(t,e,r,n,i,a){for(var o=this.index;o<this.top.children.length;o++){var u=this.top.children[o];if(u instanceof NodeViewDesc){var s=this.preMatch.matched.get(u);if(s!=null&&s!=i)return false;var f=u.dom,l=void 0;
// Can't update if nextDOM is or contains this.lock, except if
// it's a text node whose content already matches the new text
// and whose decorations match the new ones.
var c=this.isLocked(f)&&!(t.isText&&u.node&&u.node.isText&&u.nodeDOM.nodeValue==t.text&&!(u.damage&4/* Damage.Structure */)&&sameOuterDeco(e,u.outerDeco));if(!c&&u.update(t,e,r,n,a)){this.destroyBetween(this.index,o);if(u.dom!=f)this.changed=true;this.index++;return true}else if(!c&&(l=this.recreateWrapper(u,t,e,r,n,a))){this.destroyBetween(this.index,o);this.top.children[this.index]=l;if(l.contentDOM){l.damage|=2/* Damage.ChildList */;l.updateChildren(n,a+1);l.damage=0/* Damage.None */}this.changed=true;this.index++;return true}break}}return false};
// When a node with content is replaced by a different node with
// identical content, move over its children.
t.prototype.recreateWrapper=function(t,e,r,n,i,a){if(t.damage&(2/* Damage.ChildList */|1/* Damage.Child */)||e.isAtom||!t.children.length||!t.node.content.eq(e.content)||!sameOuterDeco(r,t.outerDeco)||!n.eq(t.innerDeco))return null;var o=NodeViewDesc.create(this.top,e,r,n,i,a);if(o.contentDOM){o.children=t.children;t.children=[];for(var u=0,s=o.children;u<s.length;u++){var f=s[u];f.parent=o}}t.destroy();return o};
// Insert the node as a newly created node desc.
t.prototype.addNode=function(t,e,r,n,i){var a=NodeViewDesc.create(this.top,t,e,r,n,i);if(a.contentDOM)a.updateChildren(n,i+1);this.top.children.splice(this.index++,0,a);this.changed=true};t.prototype.placeWidget=function(t,e,r){var n=this.index<this.top.children.length?this.top.children[this.index]:null;if(n&&n.matchesWidget(t)&&(t==n.widget||!n.widget.type.toDOM.parentNode)){this.index++}else{var i=new WidgetViewDesc(this.top,t,e,r);this.top.children.splice(this.index++,0,i);this.changed=true}};
// Make sure a textblock looks and behaves correctly in
// contentEditable.
t.prototype.addTextblockHacks=function(){var t=this.top.children[this.index-1],e=this.top;while(t instanceof MarkViewDesc){e=t;t=e.children[e.children.length-1]}if(!t||// Empty textblock
!(t instanceof TextViewDesc)||/\n$/.test(t.node.text)||this.view.requiresGeckoHackNode&&/\s$/.test(t.node.text)){
// Avoid bugs in Safari's cursor drawing (#1165) and Chrome's mouse selection (#1152)
if((safari||chrome)&&t&&t.dom.contentEditable=="false")this.addHackNode("IMG",e);this.addHackNode("BR",this.top)}};t.prototype.addHackNode=function(t,e){if(e==this.top&&this.index<e.children.length&&e.children[this.index].matchesHack(t)){this.index++}else{var r=document.createElement(t);if(t=="IMG"){r.className="ProseMirror-separator";r.alt=""}if(t=="BR")r.className="ProseMirror-trailingBreak";var n=new BufferHackViewDesc(this.top,[],r,null);if(e!=this.top)e.children.push(n);else e.children.splice(this.index++,0,n);this.changed=true}};t.prototype.isLocked=function(t){return this.lock&&(t==this.lock||isElt(t)&&t.contains(this.lock.parentNode))};return t}();
// Iterate from the end of the fragment and array of descs to find
// directly matching ones, in order to avoid overeagerly reusing those
// for other nodes.
function preMatch(t,e){var r=e,n=r.children.length,i=[];var a=t.childCount,o=new Map,u=[];t:while(a>0){var s=void 0;for(;;){if(n){var f=r.children[n-1];if(f instanceof MarkViewDesc){i.push(n-1);r=f;n=f.children.length}else{s=f;n--;break}}else if(r==e){break t}else{n=i.pop();r=r.parent}}var l=s.node;if(!l)continue;if(l!=t.child(a-1))break;--a;o.set(s,a);u.push(s)}return{index:a,matched:o,matches:u.reverse()}}function compareSide(t,e){return t.type.side-e.type.side}
// This function abstracts iterating over the nodes and decorations in
// a fragment. Calls `onNode` for each node, with its local and child
// decorations. Splits text nodes when there is a decoration starting
// or ending inside of them. Calls `onWidget` for each widget.
function iterDeco(t,e,r,n){var i=e.locals(t),a=0;
// Simple, cheap variant for when there are no local decorations
if(i.length==0){for(var o=0;o<t.childCount;o++){var u=t.child(o);n(u,i,e.forChild(a,u),o);a+=u.nodeSize}return}var s=0,f=[],l=null;for(var c=0;;){var v=void 0,h=void 0;while(s<i.length&&i[s].to==a){var d=i[s++];if(d.widget){if(!v)v=d;else(h||(h=[v])).push(d)}}if(v){if(h){h.sort(compareSide);for(var p=0;p<h.length;p++)r(h[p],c,!!l)}else{r(v,c,!!l)}}var u=void 0,g=void 0;if(l){g=-1;u=l;l=null}else if(c<t.childCount){g=c;u=t.child(c++)}else{break}for(var m=0;m<f.length;m++)if(f[m].to<=a)f.splice(m--,1);while(s<i.length&&i[s].from<=a&&i[s].to>a)f.push(i[s++]);var b=a+u.nodeSize;if(u.isText){var w=b;if(s<i.length&&i[s].from<w)w=i[s].from;for(var S=0;S<f.length;S++)if(f[S].to<w)w=f[S].to;if(w<b){l=u.cut(w-a);u=u.cut(0,w-a);b=w;g=-1}}else{while(s<i.length&&i[s].to<b)s++}var E=u.isInline&&!u.isLeaf?f.filter((function(t){return!t.inline})):f.slice();n(u,E,e.forChild(a,u),g);a=b}}
// List markers in Mobile Safari will mysteriously disappear
// sometimes. This works around that.
function iosHacks(t){if(t.nodeName=="UL"||t.nodeName=="OL"){var e=t.style.cssText;t.style.cssText=e+"; list-style: square !important";window.getComputedStyle(t).listStyle;t.style.cssText=e}}
// Find a piece of text in an inline fragment, overlapping from-to
function findTextInFragment(t,e,r,n){for(var i=0,a=0;i<t.childCount&&a<=n;){var o=t.child(i++),u=a;a+=o.nodeSize;if(!o.isText)continue;var s=o.text;while(i<t.childCount){var f=t.child(i++);a+=f.nodeSize;if(!f.isText)break;s+=f.text}if(a>=r){if(a>=n&&s.slice(n-e.length-u,n-u)==e)return n-e.length;var l=u<n?s.lastIndexOf(e,n-u-1):-1;if(l>=0&&l+e.length+u>=r)return u+l;if(r==n&&s.length>=n+e.length-u&&s.slice(n-u,n-u+e.length)==e)return n}}return-1}
// Replace range from-to in an array of view descs with replacement
// (may be null to just delete). This goes very much against the grain
// of the rest of this code, which tends to create nodes with the
// right shape in one go, rather than messing with them after
// creation, but is necessary in the composition hack.
function replaceNodes(t,e,r,n,i){var a=[];for(var o=0,u=0;o<t.length;o++){var s=t[o],f=u,l=u+=s.size;if(f>=r||l<=e){a.push(s)}else{if(f<e)a.push(s.slice(0,e-f,n));if(i){a.push(i);i=undefined}if(l>r)a.push(s.slice(r-f,s.size,n))}}return a}function moveSelectionBlock(t,e){var r=t.selection,n=r.$anchor,i=r.$head;var a=e>0?n.max(i):n.min(i);var o=!a.parent.inlineContent?a:a.depth?t.doc.resolve(e>0?a.after():a.before()):null;return o&&Selection.findFrom(o,e)}function apply(t,e){t.dispatch(t.state.tr.setSelection(e).scrollIntoView());return true}function selectHorizontally(t,e,r){var n=t.state.selection;if(n instanceof TextSelection){if(r.indexOf("s")>-1){var i=n.$head,a=i.textOffset?null:e<0?i.nodeBefore:i.nodeAfter;if(!a||a.isText||!a.isLeaf)return false;var o=t.state.doc.resolve(i.pos+a.nodeSize*(e<0?-1:1));return apply(t,new TextSelection(n.$anchor,o))}else if(!n.empty){return false}else if(t.endOfTextblock(e>0?"forward":"backward")){var u=moveSelectionBlock(t.state,e);if(u&&u instanceof NodeSelection)return apply(t,u);return false}else if(!mac$2||r.indexOf("m")<0){var i=n.$head,a=i.textOffset?null:e<0?i.nodeBefore:i.nodeAfter,s=void 0;if(!a||a.isText)return false;var f=e<0?i.pos-a.nodeSize:i.pos;if(!(a.isAtom||(s=t.docView.descAt(f))&&!s.contentDOM))return false;if(NodeSelection.isSelectable(a)){return apply(t,new NodeSelection(e<0?t.state.doc.resolve(i.pos-a.nodeSize):i))}else{
// Chrome and Safari will introduce extra pointless cursor
// positions around inline uneditable nodes (#937), and
// Firefox will sometimes just plain refuse to move across
// them (#1592), so in this situation we move the cursor
// ourselves.
return apply(t,new TextSelection(t.state.doc.resolve(e<0?f:f+a.nodeSize)))}}}else if(n instanceof NodeSelection&&n.node.isInline){return apply(t,new TextSelection(e>0?n.$to:n.$from))}else{var u=moveSelectionBlock(t.state,e);if(u)return apply(t,u);return false}}function isIgnorable(t,e){var r=t.pmViewDesc;return r?r.size==0&&(e<0||t.nextSibling||t.nodeName!="BR"):isElt(t)&&t.contentEditable=="false"}function skipIgnoredNodes(t,e){return e<0?skipIgnoredNodesBefore(t):skipIgnoredNodesAfter(t)}
// Make sure the cursor isn't directly after one or more ignored
// nodes, which will confuse the browser's cursor motion logic.
function skipIgnoredNodesBefore(t){var e=t.domSel.readRange();var r=e.focusNode,n=e.focusOffset;if(!r)return;var i,a,o=false;
// Gecko will do odd things when the selection is directly in front
// of a non-editable node, so in that case, move it into the next
// node if possible. Issue prosemirror/prosemirror#832.
if(gecko&&isElt(r)&&n<nodeSize(r)&&isIgnorable(r.childNodes[n],-1))o=true;for(;;){if(n>0){if(!isElt(r))break;var u=r.childNodes[n-1];if(isIgnorable(u,-1)){i=r;a=--n}else if(isText(u)){r=u;n=r.nodeValue.length}else{break}}else if(isBlockNode(r)){break}else{var s=r.previousSibling;while(s&&isIgnorable(s,-1)){i=r.parentNode;a=domIndex(s);s=s.previousSibling}if(!s){r=r.parentNode;if(r==t.dom)break;n=0}else{r=s;n=nodeSize(r)}}}if(o)setSelFocus(t,r,n);else if(i)setSelFocus(t,i,a)}
// Make sure the cursor isn't directly before one or more ignored
// nodes.
function skipIgnoredNodesAfter(t){var e=t.domSel.readRange();var r=e.focusNode,n=e.focusOffset;if(!r)return;var i=nodeSize(r);var a,o;for(;;){if(n<i){if(!isElt(r))break;var u=r.childNodes[n];if(isIgnorable(u,1)){a=r;o=++n}else{break}}else if(isBlockNode(r)){break}else{var s=r.nextSibling;while(s&&isIgnorable(s,1)){a=s.parentNode;o=domIndex(s)+1;s=s.nextSibling}if(!s){r=r.parentNode;if(r==t.dom)break;n=i=0}else{r=s;n=0;i=nodeSize(r)}}}if(a)setSelFocus(t,a,o)}function isBlockNode(t){for(var e=t;e;e=e.parentNode){var r=e.pmViewDesc;if(r)return r.node?r.node.isBlock:false}return false}function textNodeAfter(t,e){while(t&&e==t.childNodes.length&&!hasBlockDesc(t)){e=domIndex(t)+1;t=t.parentNode}while(t&&e<t.childNodes.length){var r=t.childNodes[e];if(isText(r))return r;if(isElt(r)&&r.contentEditable=="false")break;t=r;e=0}}function textNodeBefore(t,e){while(t&&!e&&!hasBlockDesc(t)){e=domIndex(t);t=t.parentNode}while(t&&e){var r=t.childNodes[e-1];if(isText(r))return r;if(isElt(r)&&r.contentEditable=="false")break;t=r;e=t.childNodes.length}}function setSelFocus(t,e,r){if(!isText(e)){var n=void 0,i=void 0;if(i=textNodeAfter(e,r)){e=i;r=0}else if(n=textNodeBefore(e,r)){e=n;r=n.nodeValue.length}}var a=t.domSelection(),o=t.domSel.readRange();if(!a)return;if(selectionCollapsed(o)){a.collapse(e,r)}else if(a.extend){a.collapse(o.anchorNode,o.anchorOffset);a.extend(e,r)}t.domSel.ignore();var u=t.state;
// If no state update ends up happening, reset the selection.
setTimeout((function(){if(t.state==u)t.domSel.sync()}),50)}function findDirection(t,e){var r=t.state.doc.resolve(e);if(!(chrome||windows$1)&&r.parent.inlineContent){var n=t.coordsAtPos(e);if(e>r.start()){var i=t.coordsAtPos(e-1);var a=(i.top+i.bottom)/2;if(a>n.top&&a<n.bottom&&Math.abs(i.left-n.left)>1)return i.left<n.left?"ltr":"rtl"}if(e<r.end()){var o=t.coordsAtPos(e+1);var a=(o.top+o.bottom)/2;if(a>n.top&&a<n.bottom&&Math.abs(o.left-n.left)>1)return o.left>n.left?"ltr":"rtl"}}var u=t.dom;for(var s=r.depth;s>0;s--)if(r.node(s).isBlock){u=t.nodeDOM(r.before(s))||u;break}var f=getComputedStyle(u).direction;return f=="rtl"?"rtl":"ltr"}
// Check whether vertical selection motion would involve node
// selections. If so, apply it (if not, the result is left to the
// browser)
function selectVertically(t,e,r){var n=t.state.selection;if(n instanceof TextSelection&&!n.empty||r.indexOf("s")>-1)return false;if(mac$2&&r.indexOf("m")>-1)return false;var i=n.$from,a=n.$to;if(!i.parent.inlineContent||t.endOfTextblock(e<0?"up":"down")){var o=moveSelectionBlock(t.state,e);if(o&&o instanceof NodeSelection)return apply(t,o)}if(!i.parent.inlineContent){var u=e<0?i:a;var s=n instanceof AllSelection?Selection.near(u,e):Selection.findFrom(u,e);return s?apply(t,s):false}return false}function stopNativeHorizontalDelete(t,e){if(!(t.state.selection instanceof TextSelection))return true;var r=t.state.selection,n=r.$head,i=r.$anchor,a=r.empty;if(!n.sameParent(i))return true;if(!a)return false;if(t.endOfTextblock(e>0?"forward":"backward"))return true;var o=!n.textOffset&&(e<0?n.nodeBefore:n.nodeAfter);if(o&&!o.isText){var u=t.state.tr;if(e<0)u.delete(n.pos-o.nodeSize,n.pos);else u.delete(n.pos,n.pos+o.nodeSize);t.dispatch(u);return true}return false}function switchEditable(t,e,r){t.domObserver.stopped((function(){return e.contentEditable=r}))}
// Issue #867 / #1090 / https://bugs.chromium.org/p/chromium/issues/detail?id=903821
// In which Safari (and at some point in the past, Chrome) does really
// wrong things when the down arrow is pressed when the cursor is
// directly at the start of a textblock and has an uneditable node
// after it
function safariDownArrowBug(t){if(!safari||t.state.selection.$head.parentOffset>0)return false;var e=t.domSel.readRange(),r=e.focusNode,n=e.focusOffset;if(r&&isElt(r)&&n==0&&r.firstChild&&isElt(r.firstChild)&&r.firstChild.contentEditable=="false"){var i=r.firstChild;switchEditable(t,i,"true");setTimeout((function(){return switchEditable(t,i,"false")}),20)}return false}
// A backdrop key mapping used to make sure we always suppress keys
// that have a dangerous default effect, even if the commands they are
// bound to return false, and to make sure that cursor-motion keys
// find a cursor (as opposed to a node selection) when pressed. For
// cursor-motion keys, the code in the handlers also takes care of
// block selections.
function getMods(t){var e="";if(t.ctrlKey)e+="c";if(t.metaKey)e+="m";if(t.altKey)e+="a";if(t.shiftKey)e+="s";return e}function captureKeyDown(t,e){var r=e.keyCode,n=getMods(e);if(r==8||mac$2&&r==72&&n=="c"){// Backspace, Ctrl-h on Mac
return stopNativeHorizontalDelete(t,-1)||skipIgnoredNodes(t,-1)}else if(r==46&&!e.shiftKey||mac$2&&r==68&&n=="c"){// Delete, Ctrl-d on Mac
return stopNativeHorizontalDelete(t,1)||skipIgnoredNodes(t,1)}else if(r==13||r==27){// Enter, Esc
return true}else if(r==37||mac$2&&r==66&&n=="c"){// Left arrow, Ctrl-b on Mac
var i=r==37?findDirection(t,t.state.selection.from)=="ltr"?-1:1:-1;return selectHorizontally(t,i,n)||skipIgnoredNodes(t,i)}else if(r==39||mac$2&&r==70&&n=="c"){// Right arrow, Ctrl-f on Mac
var i=r==39?findDirection(t,t.state.selection.from)=="ltr"?1:-1:1;return selectHorizontally(t,i,n)||skipIgnoredNodes(t,i)}else if(r==38||mac$2&&r==80&&n=="c"){// Up arrow, Ctrl-p on Mac
return selectVertically(t,-1,n)||skipIgnoredNodes(t,-1)}else if(r==40||mac$2&&r==78&&n=="c"){// Down arrow, Ctrl-n on Mac
return safariDownArrowBug(t)||selectVertically(t,1,n)||skipIgnoredNodes(t,1)}else if(n==(mac$2?"m":"c")&&(r==66||r==73||r==89||r==90)){// Mod-[biyz]
return true}return false}function serializeForClipboard(t,e){t.someProp("transformCopied",(function(r){e=r(e,t)}));var r=[],n=e.content,i=e.openStart,a=e.openEnd;while(i>1&&a>1&&n.childCount==1&&n.firstChild.childCount==1){i--;a--;var o=n.firstChild;r.push(o.type.name,o.attrs!=o.type.defaultAttrs?o.attrs:null);n=o.content}var u=t.someProp("clipboardSerializer")||DOMSerializer.fromSchema(t.state.schema);var s=detachedDoc(),f=s.createElement("div");f.appendChild(u.serializeFragment(n,{document:s}));var l=f.firstChild,c,v=0;while(l&&isElt(l)&&(c=wrapMap[l.nodeName.toLowerCase()])){for(var h=c.length-1;h>=0;h--){var d=s.createElement(c[h]);while(f.firstChild)d.appendChild(f.firstChild);f.appendChild(d);v++}l=f.firstChild}if(l&&isElt(l))l.setAttribute("data-pm-slice","".concat(i," ").concat(a).concat(v?" -".concat(v):""," ").concat(JSON.stringify(r)));var p=t.someProp("clipboardTextSerializer",(function(r){return r(e,t)}))||e.content.textBetween(0,e.content.size,"\n\n");return{dom:f,text:p,slice:e}}
// Read a slice of content from the clipboard (or drop data).
function parseFromClipboard(t,e,r,n,i){var a=i.parent.type.spec.code;var o,u;if(!r&&!e)return null;var s=!!e&&(n||a||!r);if(s){t.someProp("transformPastedText",(function(r){e=r(e,a||n,t)}));if(a){u=new Slice(Fragment.from(t.state.schema.text(e.replace(/\r\n?/g,"\n"))),0,0);t.someProp("transformPasted",(function(e){u=e(u,t,true)}));return u}var f=t.someProp("clipboardTextParser",(function(r){return r(e,i,n,t)}));if(f){u=f}else{var l=i.marks();var c=t.state.schema,v=DOMSerializer.fromSchema(c);o=document.createElement("div");e.split(/(?:\r\n?|\n)+/).forEach((function(t){var e=o.appendChild(document.createElement("p"));if(t)e.appendChild(v.serializeNode(c.text(t,l)))}))}}else{t.someProp("transformPastedHTML",(function(e){r=e(r,t)}));o=readHTML(r);if(webkit)restoreReplacedSpaces(o)}var h=o&&o.querySelector("[data-pm-slice]");var d=h&&/^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(h.getAttribute("data-pm-slice")||"");if(d&&d[3])for(var p=+d[3];p>0;p--){var g=o.firstChild;while(g&&!isElt(g))g=g.nextSibling;if(!g)break;o=g}if(!u){var m=t.someProp("clipboardParser")||t.someProp("domParser")||DOMParser.fromSchema(t.state.schema);u=m.parseSlice(o,{preserveWhitespace:!!(s||d),context:i,ruleFromNode:function(t){if(t.nodeName=="BR"&&!t.nextSibling&&t.parentNode&&!inlineParents.test(t.parentNode.nodeName))return{ignore:true};return null}})}if(d){u=addContext(closeSlice(u,+d[1],+d[2]),d[4])}else{// HTML wasn't created by ProseMirror. Make sure top-level siblings are coherent
u=Slice.maxOpen(normalizeSiblings(u.content,i),true);if(u.openStart||u.openEnd){var b=0,w=0;for(var S=u.content.firstChild;b<u.openStart&&!S.type.spec.isolating;b++,S=S.firstChild){}for(var S=u.content.lastChild;w<u.openEnd&&!S.type.spec.isolating;w++,S=S.lastChild){}u=closeSlice(u,b,w)}}t.someProp("transformPasted",(function(e){u=e(u,t,n)}));return u}var inlineParents=/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
// Takes a slice parsed with parseSlice, which means there hasn't been
// any content-expression checking done on the top nodes, tries to
// find a parent node in the current context that might fit the nodes,
// and if successful, rebuilds the slice so that it fits into that parent.

// This addresses the problem that Transform.replace expects a
// coherent slice, and will fail to place a set of siblings that don't
// fit anywhere in the schema.
function normalizeSiblings(t,e){if(t.childCount<2)return t;var r=function(r){var n=e.node(r);var i=n.contentMatchAt(e.index(r));var a,o=[];t.forEach((function(t){if(!o)return;var e=i.findWrapping(t.type),r;if(!e)return o=null;if(r=o.length&&a.length&&addToSibling(e,a,t,o[o.length-1],0)){o[o.length-1]=r}else{if(o.length)o[o.length-1]=closeRight(o[o.length-1],a.length);var n=withWrappers(t,e);o.push(n);i=i.matchType(n.type);a=e}}));if(o)return{value:Fragment.from(o)}};for(var n=e.depth;n>=0;n--){var i=r(n);if(typeof i==="object")return i.value}return t}function withWrappers(t,e,r){if(r===void 0){r=0}for(var n=e.length-1;n>=r;n--)t=e[n].create(null,Fragment.from(t));return t}
// Used to group adjacent nodes wrapped in similar parents by
// normalizeSiblings into the same parent node
function addToSibling(t,e,r,n,i){if(i<t.length&&i<e.length&&t[i]==e[i]){var a=addToSibling(t,e,r,n.lastChild,i+1);if(a)return n.copy(n.content.replaceChild(n.childCount-1,a));var o=n.contentMatchAt(n.childCount);if(o.matchType(i==t.length-1?r.type:t[i+1]))return n.copy(n.content.append(Fragment.from(withWrappers(r,t,i+1))))}}function closeRight(t,e){if(e==0)return t;var r=t.content.replaceChild(t.childCount-1,closeRight(t.lastChild,e-1));var n=t.contentMatchAt(t.childCount).fillBefore(Fragment.empty,true);return t.copy(r.append(n))}function closeRange(t,e,r,n,i,a){var o=e<0?t.firstChild:t.lastChild,u=o.content;if(t.childCount>1)a=0;if(i<n-1)u=closeRange(u,e,r,n,i+1,a);if(i>=r)u=e<0?o.contentMatchAt(0).fillBefore(u,a<=i).append(u):u.append(o.contentMatchAt(o.childCount).fillBefore(Fragment.empty,true));return t.replaceChild(e<0?0:t.childCount-1,o.copy(u))}function closeSlice(t,e,r){if(e<t.openStart)t=new Slice(closeRange(t.content,-1,e,t.openStart,0,t.openEnd),e,t.openEnd);if(r<t.openEnd)t=new Slice(closeRange(t.content,1,r,t.openEnd,0,0),t.openStart,r);return t}
// Trick from jQuery -- some elements must be wrapped in other
// elements for innerHTML to work. I.e. if you do `div.innerHTML =
// "<td>..</td>"` the table cells are ignored.
var wrapMap={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]};function detachedDoc(){return document.implementation.createHTMLDocument("title")}var _policy=null;function maybeWrapTrusted(t){var e=window.trustedTypes;if(!e)return t;
// With the require-trusted-types-for CSP, Chrome will block
// innerHTML, even on a detached document. This wraps the string in
// a way that makes the browser allow us to use its parser again.
if(!_policy){if(_policy=e.defaultPolicy)try{return _policy.createHTML(t)}catch(t){}_policy=e.createPolicy("ProseMirrorClipboard",{createHTML:function(t){return t}})}return _policy.createHTML(t)}function readHTML(t){var e=/^(\s*<meta [^>]*>)*/.exec(t);if(e)t=t.slice(e[0].length);var r=detachedDoc(),n=r.body;var i=/<([a-z][^>\s]+)/i.exec(t),a;if(a=i&&wrapMap[i[1].toLowerCase()])t=a.map((function(t){return"<"+t+">"})).join("")+t+a.map((function(t){return"</"+t+">"})).reverse().join("");n.innerHTML=maybeWrapTrusted(t);if(a)for(var o=0;o<a.length;o++)n=n.querySelector(a[o])||n;
// Inline styles defined in the pasted content, so that parse rules pick them up
for(var u=0;u<r.styleSheets.length;u++){var s=r.styleSheets[u];for(var f=0;f<s.rules.length;f++){var l=s.rules[f];if(l instanceof CSSStyleRule){var c=n.querySelectorAll(l.selectorText);for(var v=0;v<c.length;v++)c[v].style.cssText+=l.style.cssText}}}return n}
// Webkit browsers do some hard-to-predict replacement of regular
// spaces with non-breaking spaces when putting content on the
// clipboard. This tries to convert such non-breaking spaces (which
// will be wrapped in a plain span on Chrome, a span with class
// Apple-converted-space on Safari) back to regular spaces.
function restoreReplacedSpaces(t){var e=t.querySelectorAll(chrome?"span:not([class]):not([style])":"span.Apple-converted-space");for(var r=0;r<e.length;r++){var n=e[r];if(n.childNodes.length==1&&n.textContent==" "&&n.parentNode)n.parentNode.replaceChild(t.ownerDocument.createTextNode(" "),n)}}function addContext(t,e){if(!t.size)return t;var r=t.content.firstChild.type.schema,n;try{n=JSON.parse(e)}catch(e){return t}var i=t.content,a=t.openStart,o=t.openEnd;for(var u=n.length-2;u>=0;u-=2){var s=r.nodes[n[u]];if(!s||s.hasRequiredAttrs()||!s.createAndFill(null,i))break;try{i=Fragment.from(s.create(n[u+1],i))}catch(t){break}a++;o++}return new Slice(i,a,o)}var StoredDOMSel=/** @class */function(){function t(t,e,r,n){this.anchorNode=t;this.anchorOffset=e;this.focusNode=r;this.focusOffset=n}t.from=function(e){if(e instanceof t)return e;return new t(e.anchorNode,e.anchorOffset,e.focusNode,e.focusOffset)};t.prototype.eq=function(t){return t.anchorNode==this.anchorNode&&t.anchorOffset==this.anchorOffset&&t.focusNode==this.focusNode&&t.focusOffset==this.focusOffset};return t}();StoredDOMSel.null=new StoredDOMSel(null,0,null,0);
// Tracks the relation between the DOM selection and the editor state
// selection. Caches the current selection range for cheap access.

// Will read the DOM selection state on selectionchange events and
// when explicitly synced. Not guaranteed to hold the _current_ DOM
// selection unless you are on a code path where you know it was
// synced. So for one-off event handlers, it's safer to use
// `domSel.readRange()` (fetches the range from the DOM), whereas in
// things like the DOM flush logic, `domSel.range` is safe and cheap
// to use.
var DOMSelState=/** @class */function(){function t(t){this.view=t;
// The last read selection range. Updated by `read`, `sync`,
// `ignore`, and `clear`. Only means anything when `active` is true.
this.range=StoredDOMSel.null;
// Indicates whether the editor has focus and selection
this.active=false;
// True when we are active and the current range has been synced
// with the state selection
this.synced=false;this.suppress=false;this.currentDocument=null;this.onSelectionChange=this.onSelectionChange.bind(this)}t.prototype.ensureListener=function(){var t=this.view.dom.ownerDocument;if(t!=this.currentDocument){if(this.currentDocument)this.currentDocument.removeEventListener("selectionchange",this.onSelectionChange);this.currentDocument=t;t.addEventListener("selectionchange",this.onSelectionChange)}};t.prototype.destroy=function(){if(this.currentDocument){this.currentDocument.removeEventListener("selectionchange",this.onSelectionChange);this.currentDocument=null}this.active=false;this.range=StoredDOMSel.null};t.prototype.suppressChanges=function(){var t=this;this.suppress=true;setTimeout((function(){return t.suppress=false}),50)};t.prototype.onSelectionChange=function(){if(this.suppress&&this.view.hasFocus())return this.sync();if(this.read())this.view.domObserver.flush(false)};
// Reads the active range from the DOM, if any.
t.prototype.readRange=function(){var t=this.view;var e=t.dom.isConnected!==false&&t.domSelection();if(!e)return StoredDOMSel.null;if(safari&&t.root.nodeType===11&&deepActiveElement(t.dom.ownerDocument)==t.dom)return StoredDOMSel.from(safariShadowSelectionRange(t,e)||e);return StoredDOMSel.from(e)};t.prototype.read=function(){this.ensureListener();var t=hasFocusAndSelection(this.view);if(!t){this.active=false;this.range=StoredDOMSel.null;return}this.active=true;if(this.range.eq(t))return false;this.range=t;this.synced=false;return true};
// Sync the DOM selection to the state selection
t.prototype.sync=function(t){var e=this;if(t===void 0){t=false}var r=this.view;if(!r.docView)return;this.ensureListener();r.domObserver.stopped((function(){syncNodeSelection(r,r.state.selection);var n=r.state.selection;if(editorOwnsSelection(r)){var i=innerViewDesc(r.docView,n.from,n.to,0),a=i.desc,o=i.start;if(r.cursorWrapper){selectCursorWrapper(r)}else if(a instanceof CustomNodeViewDesc&&a.spec.setSelection){a.spec.setSelection(n.anchor-o,n.head-o,r.root)}else{selectionToDOM(r,t,a,o)}e.synced=e.active=true}if(n.visible==r.dom.classList.contains("ProseMirror-hideselection")){if(n.visible){r.dom.classList.remove("ProseMirror-hideselection")}else{r.dom.classList.add("ProseMirror-hideselection");removeClassOnSelectionChange(r)}}e.range=e.readRange()}))};t.prototype.ignore=function(t){if(t===void 0){t=this.readRange()}this.range=StoredDOMSel.from(t);this.synced=true};
// Called when the editor is blurred
t.prototype.deactivate=function(){this.range=StoredDOMSel.null;this.active=this.synced=false};return t}();
// Used to work around the fact that is is rather hard to get the
// selection in a shadow root in Safari.
function safariShadowSelectionRange(t,e){if(e.getComposedRanges){var r=e.getComposedRanges(t.root)[0];if(r)return rangeToSelectionRange(t,r)}var n;function i(t){t.preventDefault();t.stopImmediatePropagation();n=t.getTargetRanges()[0]}
// Because Safari (at least in 2018-2022) doesn't provide regular
// access to the selection inside a shadowRoot, we have to perform a
// ridiculous hack to get at it—using `execCommand` to trigger a
// `beforeInput` event so that we can read the target range from the
// event.
t.dom.addEventListener("beforeinput",i,true);document.execCommand("indent");t.dom.removeEventListener("beforeinput",i,true);return n?rangeToSelectionRange(t,n):null}function rangeToSelectionRange(t,e){var r;var n=e.startContainer,i=e.startOffset;var a=e.endContainer,o=e.endOffset;var u=t.domAtPos(t.state.selection.anchor);
// Since such a range doesn't distinguish between anchor and head,
// use a heuristic that flips it around if its end matches the
// current anchor.
if(isEquivalentPosition(u.node,u.offset,a,o))r=[a,o,n,i],n=r[0],i=r[1],a=r[2],o=r[3];return new StoredDOMSel(n,i,a,o)}function selectionFromDOM(t,e,r){var n;if(r===void 0){r=null}var i=t.state.doc;if(!e.focusNode)return null;var a=t.docView.nearestDesc(e.focusNode),o=a&&a.size==0;var u=t.docView.posFromDOM(e.focusNode,e.focusOffset,1);if(u<0)return null;var s=i.resolve(u),f,l;if(selectionCollapsed(e)){f=u;while(a&&!a.node)a=a.parent;if(a&&a.node.isAtom&&NodeSelection.isSelectable(a.node)&&a.parent&&!(a.node.isInline&&isOnEdge(e.focusNode,e.focusOffset,a.dom))){var c=a.posBefore;l=new NodeSelection(u==c?s:i.resolve(c))}else if(gecko&&r=="key"&&u>t.state.selection.to&&isElt(e.focusNode)&&e.focusOffset==e.focusNode.childNodes.length&&a&&a.posAtStart>t.state.selection.to){
// Firefox will jump across scrollable wrapper nodes on keyboard
// cursor motion (#1594). This tries to detect this situation
// and work around it.
for(var v=e.focusNode;;v=v.parentNode){if(getComputedStyle(v).overflow!="visible"){l=Selection.findFrom(i.resolve(a.posAtStart),1);break}if(v==a.dom||v.nextSibling||!v.parentNode||!isElt(v.parentNode))break}}}else{if(e instanceof t.dom.ownerDocument.defaultView.Selection&&e.rangeCount>1){var h=u,d=u;for(var p=0;p<e.rangeCount;p++){var g=e.getRangeAt(p);h=Math.min(h,t.docView.posFromDOM(g.startContainer,g.startOffset,1));d=Math.max(d,t.docView.posFromDOM(g.endContainer,g.endOffset,-1))}if(h<0)return null;n=d==t.state.selection.anchor?[d,h]:[h,d],f=n[0],u=n[1];s=i.resolve(u)}else{f=t.docView.posFromDOM(e.anchorNode,e.anchorOffset,1)}if(f<0)return null}var m=i.resolve(f);if(!l){var b=r=="pointer"||t.state.selection.head<s.pos&&!o?1:-1;l=selectionBetween(t,m,s,b)}return l}function editorOwnsSelection(t){return t.editable?t.hasFocus():hasSelection(t,t.domSel.readRange())&&(!document.activeElement||document.activeElement.contains(t.dom))}function selectionToDOM(t,e,r,n){var i=t.state.selection;var a=i.anchor,o=i.head,u,s;if(brokenSelectBetweenUneditable&&!(i instanceof TextSelection)){if(!i.$from.parent.inlineContent)u=temporarilyEditableNear(t,i.from);if(!i.empty&&!i.$from.parent.inlineContent)s=temporarilyEditableNear(t,i.to)}var f=r.domFromPos(a-n,a>n?-1:1);var l=o==a?f:r.domFromPos(o-n,o>n?-1:1);setSelection(a,o,f,l,t,e);if(brokenSelectBetweenUneditable){if(u)resetEditable(u);if(s)resetEditable(s)}}
// See if the selection falls within a custom node view that overrides it
function innerViewDesc(t,e,r,n){if(n===void 0){n=0}for(var i=0,a=n;i<t.children.length;i++){var o=t.children[i],u=a+o.size;if(e>a&&r<u)return innerViewDesc(o,e,r,a+o.border);a=u}return{desc:t,start:n}}function setSelection(t,e,r,n,i,a){var o=false;
// On Firefox, using Selection.collapse to put the cursor after a
// BR node for some reason doesn't always work (#1073). On Safari,
// the cursor sometimes inexplicable visually lags behind its
// reported position in such situations (#1092).
if((gecko||safari)&&t==e){var u=r.node,s=r.offset;if(isText(u)){o=!!(s&&u.nodeValue[s-1]=="\n");
// Issue #1128
if(o&&s==u.nodeValue.length){for(var f=u,l=void 0;f;f=f.parentNode){if(l=f.nextSibling){if(l.nodeName=="BR")r=n={node:l.parentNode,offset:domIndex(l)+1};break}var c=f.pmViewDesc;if(c&&c.node&&c.node.isBlock)break}}}else{var v=u.childNodes[s-1];o=v&&(v.nodeName=="BR"||v.contentEditable=="false")}}var h=i.domSel.readRange();
// Firefox can act strangely when the selection is in front of an
// uneditable node. See #1163 and https://bugzilla.mozilla.org/show_bug.cgi?id=1709536
if(gecko&&h.focusNode&&h.focusNode!=n.node&&isElt(h.focusNode)){var l=h.focusNode.childNodes[h.focusOffset];if(l&&l.contentEditable=="false")a=true}if(!(a||o&&safari)&&isEquivalentPosition(r.node,r.offset,h.anchorNode,h.anchorOffset)&&isEquivalentPosition(n.node,n.offset,h.focusNode,h.focusOffset))return;writeSelection(i.domSelection(),{focusNode:n.node,focusOffset:n.offset,anchorNode:r.node,anchorOffset:r.offset})}
// Kludge to work around Webkit not allowing a selection to start/end
// between non-editable block nodes. We briefly make something
// editable, set the selection, then set it uneditable again.
var brokenSelectBetweenUneditable=safari||chrome&&chrome_version<63;function temporarilyEditableNear(t,e){var r=t.docView.domFromPos(e,0),n=r.node,i=r.offset;var a=i<n.childNodes.length?n.childNodes[i]:null;var o=i?n.childNodes[i-1]:null;if(safari&&a&&a.contentEditable=="false")return setEditable(a);if((!a||a.contentEditable=="false")&&(!o||o.contentEditable=="false")){if(a)return setEditable(a);else if(o)return setEditable(o)}}function setEditable(t){t.contentEditable="true";if(safari&&t.draggable){t.draggable=false;t.wasDraggable=true}return t}function resetEditable(t){t.contentEditable="false";if(t.wasDraggable){t.draggable=true;t.wasDraggable=null}}function removeClassOnSelectionChange(t){var e=t.dom.ownerDocument;e.removeEventListener("selectionchange",t.input.hideSelectionGuard);var r=t.domSel.readRange();var n=r.anchorNode,i=r.anchorOffset;e.addEventListener("selectionchange",t.input.hideSelectionGuard=function(){if(r.anchorNode!=n||r.anchorOffset!=i){e.removeEventListener("selectionchange",t.input.hideSelectionGuard);setTimeout((function(){if(!editorOwnsSelection(t)||t.state.selection.visible)t.dom.classList.remove("ProseMirror-hideselection")}),20)}})}function selectCursorWrapper(t){var e=t.domSelection();if(!e)return;var r=t.cursorWrapper.dom,n=r.nodeName=="IMG";if(n)e.collapse(r.parentNode,domIndex(r)+1);else e.collapse(r,0)}function syncNodeSelection(t,e){if(e instanceof NodeSelection){var r=t.docView.descAt(e.from);if(r!=t.lastSelectedViewDesc){clearNodeSelection(t);if(r)r.selectNode();t.lastSelectedViewDesc=r}}else{clearNodeSelection(t)}}
// Clear all DOM statefulness of the last node selection.
function clearNodeSelection(t){if(t.lastSelectedViewDesc){if(t.lastSelectedViewDesc.parent)t.lastSelectedViewDesc.deselectNode();t.lastSelectedViewDesc=undefined}}function selectionBetween(t,e,r,n){var i=t.someProp("createSelectionBetween",(function(n){return n(t,e,r)}))||TextSelection.between(e,r,n);t.someProp("adjustSelectionFromDOM",(function(e){i=e(t,i)}));return i}function hasFocusAndSelection(t){if(t.editable&&!t.hasFocus())return null;var e=t.domSel.readRange();return e&&hasSelection(t,e)?e:null}function hasSelection(t,e){if(!e.anchorNode)return false;try{
// Firefox will raise 'permission denied' errors when accessing
// properties of `sel.anchorNode` when it's in a generated CSS
// element.
return contains(t.dom,e.anchorNode)&&(t.editable||contains(t.dom,e.focusNode))}catch(t){return false}}
// A collection of DOM events that occur within the editor, and callback functions
// to invoke when the event fires.
var handlers={};var editHandlers={};var passiveHandlers={touchstart:true,touchmove:true};var InputState=/** @class */function(){function t(){this.shiftKey=false;this.mouseDown=null;this.lastKeyCode=null;this.lastKeyCodeTime=0;this.lastKeyDispatched=false;this.lastClick={time:0,x:0,y:0,type:"",button:0};this.lastSelectionOrigin=null;this.lastSelectionTime=0;this.lastIOSEnter=0;this.lastIOSEnterFallbackTimeout=-1;this.lastFocus=0;this.lastTouch=0;this.lastChromeDelete=0;this.composing=false;this.compositionNode=null;this.composingTimeout=-1;this.compositionNodes=[];this.compositionEndedAt=-2e8;this.compositionID=1;this.badSafariComposition=false;
// Set to a composition ID when there are pending changes at compositionend
this.compositionPendingChanges=0;this.domChangeCount=0;this.eventHandlers=Object.create(null);this.hideSelectionGuard=null}return t}();function initInput(t){var e=function(e){var r=handlers[e];t.dom.addEventListener(e,t.input.eventHandlers[e]=function(e){if(!eventBelongsToView(t,e))return;if(t.input.composing&&(e.type=="keydown"||e.type=="beforeinput")&&e.isComposing===false)leaveComposition(t,true);if(!runCustomHandler(t,e)&&(t.editable||!(e.type in editHandlers)))r(t,e)},passiveHandlers[e]?{passive:true}:undefined)};for(var r in handlers){e(r)}
// On Safari, for reasons beyond my understanding, adding an input
// event handler makes an issue where the composition vanishes when
// you press enter go away.
if(safari)t.dom.addEventListener("input",(function(){return null}));ensureListeners(t)}function setSelectionOrigin(t,e){t.input.lastSelectionOrigin=e;t.input.lastSelectionTime=Date.now()}function destroyInput(t){if(t.input.mouseDown)t.input.mouseDown.done();t.domObserver.stop();for(var e in t.input.eventHandlers)t.dom.removeEventListener(e,t.input.eventHandlers[e]);clearTimeout(t.input.composingTimeout);clearTimeout(t.input.lastIOSEnterFallbackTimeout)}function ensureListeners(t){t.someProp("handleDOMEvents",(function(e){for(var r in e)if(!t.input.eventHandlers[r])t.dom.addEventListener(r,t.input.eventHandlers[r]=function(e){return runCustomHandler(t,e)})}))}function runCustomHandler(t,e){return t.someProp("handleDOMEvents",(function(r){var n=r[e.type];return n?n(t,e)||e.defaultPrevented:false}))}function eventBelongsToView(t,e){if(!e.bubbles)return true;if(e.defaultPrevented)return false;for(var r=e.target;r!=t.dom;r=r.parentNode)if(!r||r.nodeType==11||r.pmViewDesc&&r.pmViewDesc.stopEvent(e))return false;return true}function dispatchEvent(t,e){if(!runCustomHandler(t,e)&&handlers[e.type]&&(t.editable||!(e.type in editHandlers)))handlers[e.type](t,e)}function dispatchKey(t,e){var r=t.input;if(r.lastKeyDispatched||t.composing)return false;r.lastKeyDispatched=true;if(typeof e=="string")e=keyEvent(e=="Backspace"?8:13,e);return t.someProp("handleKeyDown",(function(r){return r(t,e)}))}editHandlers.keydown=function(t,e){var r=e;t.input.shiftKey=r.keyCode==16||r.shiftKey;t.input.lastKeyCode=r.keyCode;t.input.lastKeyCodeTime=Date.now();t.input.lastKeyDispatched=false;
// Suppress enter key events on Chrome Android, because those tend
// to be part of a confused sequence of composition events fired,
// and handling them eagerly tends to corrupt the input.
if(android&&chrome&&r.keyCode==13)return;
// On iOS, if we preventDefault enter key presses, the virtual
// keyboard gets confused. So the hack here is to set a flag that
// makes the DOM change code recognize that what just happens should
// be replaced by whatever the Enter key handlers do.
if(ios&&r.keyCode==13&&!r.ctrlKey&&!r.altKey&&!r.metaKey){var n=Date.now();t.input.lastIOSEnter=n;t.input.lastIOSEnterFallbackTimeout=setTimeout((function(){if(t.input.lastIOSEnter==n){dispatchKey(t,"Enter");t.input.lastIOSEnter=0}}),200);return}if(r.keyCode!=229)t.domObserver.forceFlush(true);if(dispatchKey(t,r)||captureKeyDown(t,r))r.preventDefault();else setSelectionOrigin(t,"key")};editHandlers.keyup=function(t,e){if(e.keyCode==16)t.input.shiftKey=false};editHandlers.keypress=function(t,e){var r=e;if(inOrNearComposition(t)||!r.charCode||r.ctrlKey&&!r.altKey||mac$2&&r.metaKey)return;if(t.someProp("handleKeyPress",(function(e){return e(t,r)}))){r.preventDefault();return}var n=t.state.selection;if(!(n instanceof TextSelection)||!n.$from.sameParent(n.$to)){var i=String.fromCharCode(r.charCode);var a=function(){return t.state.tr.insertText(i).scrollIntoView()};if(!/[\r\n]/.test(i)&&!t.someProp("handleTextInput",(function(e){return e(t,n.$from.pos,n.$to.pos,i,a)})))t.dispatch(a());r.preventDefault()}};function eventCoords(t){return{left:t.clientX,top:t.clientY}}function isNear(t,e){var r=e.x-t.clientX,n=e.y-t.clientY;return r*r+n*n<100}function runHandlerOnContext(t,e,r,n,i){if(n==-1)return false;var a=t.state.doc.resolve(n);var o=function(n){if(t.someProp(e,(function(e){return n>a.depth?e(t,r,a.nodeAfter,a.before(n),i,true):e(t,r,a.node(n),a.before(n),i,false)})))return{value:true}};for(var u=a.depth+1;u>0;u--){var s=o(u);if(typeof s==="object")return s.value}return false}function updateSelection(t,e,r){if(!t.focused)t.focus();if(t.state.selection.eq(e))return;var n=t.state.tr.setSelection(e);n.setMeta("pointer",true);t.dispatch(n)}function selectClickedLeaf(t,e){if(e==-1)return false;var r=t.state.doc.resolve(e),n=r.nodeAfter;if(n&&n.isAtom&&NodeSelection.isSelectable(n)){updateSelection(t,new NodeSelection(r));return true}return false}function selectClickedNode(t,e){if(e==-1)return false;var r=t.state.selection,n,i;if(r instanceof NodeSelection)n=r.node;var a=t.state.doc.resolve(e);for(var o=a.depth+1;o>0;o--){var u=o>a.depth?a.nodeAfter:a.node(o);if(NodeSelection.isSelectable(u)){if(n&&r.$from.depth>0&&o>=r.$from.depth&&a.before(r.$from.depth+1)==r.$from.pos)i=a.before(r.$from.depth);else i=a.before(o);break}}if(i!=null){updateSelection(t,NodeSelection.create(t.state.doc,i));return true}else{return false}}function handleSingleClick(t,e,r,n,i){return runHandlerOnContext(t,"handleClickOn",e,r,n)||t.someProp("handleClick",(function(r){return r(t,e,n)}))||(i?selectClickedNode(t,r):selectClickedLeaf(t,r))}function handleDoubleClick(t,e,r,n){return runHandlerOnContext(t,"handleDoubleClickOn",e,r,n)||t.someProp("handleDoubleClick",(function(r){return r(t,e,n)}))}function handleTripleClick$1(t,e,r,n){return runHandlerOnContext(t,"handleTripleClickOn",e,r,n)||t.someProp("handleTripleClick",(function(r){return r(t,e,n)}))}function selectionForTripleClick(t,e,r){if(e==-1)return t.inlineContent?TextSelection.create(t,0,t.content.size):null;var n=t.resolve(e);for(var i=n.depth+1;i>0;i--){var a=i>n.depth?n.nodeAfter:n.node(i);var o=n.before(i);if(a.inlineContent)return TextSelection.create(t,o+1,o+1+a.content.size);else if(r&&NodeSelection.isSelectable(a))return NodeSelection.create(t,o)}return null}var wordRE=/[\w_\u00a1-\uffff]+/g;try{wordRE=new RegExp("[\\p{L}\\p{N}_]+","gu")}catch(t){}function getWordAt(t,e){var r=t.resolve(e),n=r.node();var i="",a=e,o=e;for(var u=r.indexAfter(),s=false;u>0;u--){var f=n.child(u-1);if(!f.text)break;var l=a==e?e-r.posAtIndex(u-1):f.text.length,c=l;for(;c>0;c--){if(/\S/.test(f.text[c-1]))s=true;else if(s)break}i=f.text.slice(c,l)+i;a-=l-c;if(c||a<e-50)break}for(var v=r.index(),s=false;v<n.childCount;v++){var h=n.child(v);if(!h.text)break;var c=o==e?e-r.posAtIndex(v):0,l=c;for(;l<h.text.length;l++){if(/\S/.test(h.text[l]))s=true;else if(s)break}i+=h.text.slice(c,l);o+=l-c;if(l<h.text.length||o>e+50)break}var d=a,p=o;if(Intl.Segmenter){for(var g=0,m=new Intl.Segmenter(undefined,{granularity:"word"}).segment(i);g<m.length;g++){var b=m[g];if(b.isWordLike){var c=b.index+a,l=c+b.segment.length;if(l<e)d=l;else if(c>e){p=c;break}else return TextSelection.create(t,c,l)}}}else{wordRE.lastIndex=0;for(var w=void 0;w=wordRE.exec(i);){var c=w.index+a,l=c+w[0].length;if(l<e)d=l;else if(c>e){p=c;break}else return TextSelection.create(t,c,l)}}var S=i.slice(d-a,e-a),E=i.slice(e-a,p-a);var T=/\S*$/.exec(S)[0].length,y=/^\S*/.exec(E)[0].length;if(T||y)return TextSelection.create(t,e-T,e+y);var k=/\s*$/.exec(S)[0].length,R=/^\s*/.exec(E)[0].length;return TextSelection.create(t,e-k,e+R)}var selectNodeModifier=mac$2?"metaKey":"ctrlKey";handlers.mousedown=function(t,e){var r=e,n=Date.now();t.input.shiftKey=r.shiftKey;if(t.input.lastTouch>n-500)return false;// Ignore touch interaction
endComposition(t);var i="singleClick";if(n-t.input.lastClick.time<500&&isNear(r,t.input.lastClick)&&!r[selectNodeModifier]&&t.input.lastClick.button==r.button){if(t.input.lastClick.type=="singleClick")i="doubleClick";else if(t.input.lastClick.type=="doubleClick")i="tripleClick"}t.input.lastClick={time:n,x:r.clientX,y:r.clientY,type:i,button:r.button};if(t.input.mouseDown)t.input.mouseDown.done();var a=t.posAtCoords(eventCoords(r));if(!a)return;if(r.button==0){if(!t.hasFocus()){focusPreventScroll(t.dom);var o=t.root.activeElement;if(o&&!o.contains(t.dom))o.blur()}var u=t.input.mouseDown=new MouseDown(t,a,r,i);if(!u.mightDrag)r.preventDefault()}else{setSelectionOrigin(t,"pointer")}};var MouseDown=/** @class */function(){function t(t,e,r,n){var i;this.view=t;this.startPos=e;this.event=r;this.type=n;this.didMove=false;this.lastPos=-1;
// Anchor for the selection. With shift held, this will be the
// original start selection. Otherwise, it'll be the selection
// created for the initial position.
this.anchorRange=null;this.startDoc=t.state.doc;this.selectNode=!!r[selectNodeModifier];this.extend=r.shiftKey;this.anchorDoc=this.startDoc;var a=docBase(t);if(this.extend){var o=t.state.selection;this.anchorRange=o instanceof NodeSelection?{from:o.from,to:o.to}:{from:o.anchor,to:o.anchor};var u=o instanceof NodeSelection?t.nodeDOM(o.from).getBoundingClientRect():t.coordsAtPos(o.anchor);this.anchorOffset={x:(u.left+u.right)/2-a.x,y:(u.top+u.bottom)/2-a.y}}else{this.anchorOffset={x:r.clientX-a.x,y:r.clientY-a.y}}if(n=="singleClick"){var s=t.state.selection;var f=void 0,l=void 0,c=false;if(s instanceof NodeSelection&&s.from<=e.pos&&s.to>=e.pos){l=s.from;f=s.node;c=true}else if(e.inside>-1){f=t.state.doc.nodeAt(e.inside);l=e.inside}else{var v=t.state.doc.resolve(e.pos);f=v.parent;l=v.depth?v.before():-1}if(c||l>-1&&f.type.spec.draggable&&f.type.spec.selectable!==false){var h=(i=t.docView.descAt(l))===null||i===void 0?void 0:i.nodeDOM;this.mightDrag={node:f,elt:h,pos:l,addAttr:false};if(h&&!h.draggable){this.mightDrag.addAttr=true;t.domObserver.stopped((function(){return h.draggable=true}))}}else{this.mightDrag=isInSelection(t,r)}}else{this.mightDrag=false}t.root.addEventListener("mouseup",this.up=this.up.bind(this));t.root.addEventListener("mousemove",this.move=this.move.bind(this));if(!this.mightDrag)this.select(this.startPos,true)}t.prototype.done=function(){var t=this;this.view.root.removeEventListener("mouseup",this.up);this.view.root.removeEventListener("mousemove",this.move);if(this.view.input.mouseDown==this)this.view.input.mouseDown=null;if(typeof this.mightDrag=="object"&&this.mightDrag.addAttr){this.view.domObserver.stopped((function(){return t.mightDrag.elt.removeAttribute("draggable")}))}};t.prototype.maybeRunHandler=function(t,e){var r=this.type=="singleClick"?handleSingleClick:this.type=="doubleClick"?handleDoubleClick:handleTripleClick$1;return r(this.view,t.pos,t.inside,e,this.selectNode)};t.prototype.up=function(t){this.done();if(!this.view.dom.contains(t.target))return;var e=this.startPos;if(this.view.state.doc!=this.startDoc)e=this.view.posAtCoords(eventCoords(t));if(!e)return;if(!this.didMove){this.maybeRunHandler(e,t)||this.select(e,true)}t.preventDefault()};t.prototype.move=function(t){if(t.buttons==0){this.done();return}if(!this.didMove&&(Math.abs(this.event.x-t.clientX)>8||Math.abs(this.event.y-t.clientY)>8)){this.didMove=true;this.mightDrag=false}if(!this.mightDrag){var e=this.view.posAtCoords(eventCoords(t));if(e)this.select(e,false)}t.preventDefault()};t.prototype.select=function(t,e){if(t.pos==this.lastPos)return;this.lastPos=t.pos;var r=this.view,n=r.state.doc;var i=this.type=="singleClick"?clickedRange(r,n,t):this.type=="doubleClick"?getWordAt(n,t.pos):selectionForTripleClick(n,t.inside,e);if(!i)return;if(e&&!this.extend){this.anchorRange=i}else if(!e||this.extend){if(!n.eq(this.anchorDoc))this.restoreAnchor();if(this.anchorRange&&this.anchorRange.from<i.from)i=selectionBetween(r,n.resolve(this.anchorRange.from),n.resolve(i.to));else if(this.anchorRange&&this.anchorRange.to>i.to)i=selectionBetween(r,n.resolve(this.anchorRange.to),n.resolve(i.from))}if(!i.eq(r.state.selection))r.dispatch(r.state.tr.setSelection(i).setMeta("pointer",true).scrollIntoView())};t.prototype.restoreAnchor=function(){var t=docBase(this.view);var e=this.view.posAtCoords({left:this.anchorOffset.x+t.x,top:this.anchorOffset.y+t.y});if(!e){this.anchorRange=null}else{var r=this.view.state.doc;this.anchorRange=this.type=="singleClick"?clickedRange(this.view,r,e):this.type=="doubleClick"?getWordAt(r,e.pos):selectionForTripleClick(r,e.inside,false);this.anchorDoc=this.view.state.doc}};return t}();function docBase(t){var e=t.dom.getBoundingClientRect();return{x:e.left-t.dom.scrollLeft,y:e.top-t.dom.scrollTop}}function clickedRange(t,e,r){if(r.inside>-1){var n=e.nodeAt(r.inside);if(n.isAtom&&NodeSelection.isSelectable(n))return NodeSelection.create(e,r.inside)}var i=e.resolve(r.pos);return selectionBetween(t,i,i)}function isInSelection(t,e){var r=t.state.selection;if(r.empty)return false;var n=t.domSelection();if(!n||n.rangeCount==0)return true;var i=n.getRangeAt(0).getClientRects();for(var a=0;a<i.length;a++){var o=i[a];if(o.left<=e.clientX&&o.right>=e.clientX&&o.top<=e.clientY&&o.bottom>=e.clientY)return true}return false}handlers.touchstart=function(t){t.input.lastTouch=Date.now();endComposition(t);setSelectionOrigin(t,"pointer")};handlers.touchmove=function(t){t.input.lastTouch=Date.now();setSelectionOrigin(t,"pointer")};handlers.contextmenu=function(t){return endComposition(t)};function inOrNearComposition(t,e){if(t.composing)return true;
// See https://www.stum.de/2016/06/24/handling-ime-events-in-javascript/.
// On Japanese input method editors (IMEs), the Enter key is used to confirm character
// selection. On Safari, when Enter is pressed, compositionend and keydown events are
// emitted. The keydown event triggers newline insertion, which we don't want.
// This method returns true if the keydown event should be ignored.
// We only ignore it once, as pressing Enter a second time *should* insert a newline.
// Furthermore, the keydown event timestamp must be close to the compositionEndedAt timestamp.
// This guards against the case where compositionend is triggered without the keyboard
// (e.g. character confirmation may be done with the mouse), and keydown is triggered
// afterwards- we wouldn't want to ignore the keydown event in this case.
if(safari&&Math.abs(Date.now()-t.input.compositionEndedAt)<500){t.input.compositionEndedAt=-2e8;return true}return false}
// Drop active composition after 5 seconds of inactivity on Android
var timeoutComposition=android?5e3:-1;editHandlers.compositionstart=editHandlers.compositionupdate=function(t){if(!t.composing){t.domObserver.flush();var e=t.state,r=e.selection.$to;if(e.selection instanceof TextSelection&&e.selection.empty&&(e.storedMarks||!r.textOffset&&r.parentOffset&&r.nodeBefore.marks.some((function(t){return t.type.spec.inclusive===false}))||chrome&&windows$1&&selectionBeforeUneditable(t))){// Issue #1500
// Need to wrap the cursor in mark nodes different from the ones in the DOM context
t.markCursor=t.state.storedMarks||r.marks();endComposition(t,true);t.markCursor=null}else{endComposition(t,!e.selection.empty);
// In firefox, if the cursor is after but outside a marked node,
// the inserted text won't inherit the marks. So this moves it
// inside if necessary.
if(gecko&&t.domSel.active&&e.selection.empty&&r.parentOffset&&!r.textOffset&&r.nodeBefore.marks.length){for(var n=t.domSel.range,i=n.focusNode,a=n.focusOffset;i&&isElt(i)&&a!=0;){var o=a<0?i.lastChild:i.childNodes[a-1];if(!o)break;if(isText(o)){var u=t.domSelection();if(u)u.collapse(o,o.nodeValue.length);break}else{i=o;a=-1}}}}t.input.composing=true}scheduleComposeEnd(t,timeoutComposition)};function selectionBeforeUneditable(t){var e=t.domSel.range,r=e.focusNode,n=e.focusOffset;if(!r||!isElt(r)||n>=r.childNodes.length)return false;var i=r.childNodes[n];return isElt(i)&&i.contentEditable=="false"}editHandlers.compositionend=function(t,e){if(t.composing)leaveComposition(t)};function leaveComposition(t,e){if(e===void 0){e=false}t.input.composing=false;t.input.compositionEndedAt=Date.now();t.input.compositionPendingChanges=t.domObserver.pendingRecords().length?t.input.compositionID:0;t.input.compositionNode=null;if(t.input.badSafariComposition)t.domObserver.forceFlush();else if(t.input.compositionPendingChanges)Promise.resolve().then((function(){return t.domObserver.flush()}));t.input.compositionID++;if(e)endComposition(t);else scheduleComposeEnd(t,20)}function scheduleComposeEnd(t,e){clearTimeout(t.input.composingTimeout);if(e>-1)t.input.composingTimeout=setTimeout((function(){return endComposition(t)}),e)}function clearComposition(t){if(t.composing){t.input.composing=false;t.input.compositionEndedAt=Date.now()}for(var e=void 0;e=t.input.compositionNodes.pop();)e.markParentDamage()}function findCompositionNode(t){var e=t.domSel.range;if(!t.domSel.active||!e.focusNode)return null;var r=textNodeBefore$1(e.focusNode,e.focusOffset);var n=textNodeAfter$1(e.focusNode,e.focusOffset);if(r&&n&&r!=n){var i=n.pmViewDesc,a=t.domObserver.lastChangedTextNode;if(r==a||n==a)return a;if(!i||!i.isText(n.nodeValue)){return n}else if(t.input.compositionNode==n){var o=r.pmViewDesc;if(!(!o||!o.isText(r.nodeValue)))return n}}return r||n}
/**
@internal
*/function endComposition(t,e){if(e===void 0){e=false}if(android&&t.domObserver.flushingSoon>=0)return;t.domObserver.forceFlush();clearComposition(t);if(e||t.docView&&t.docView.damage){var r=selectionFromDOM(t,t.domSel.readRange()),n=t.state.selection;if(r&&!r.eq(n))t.dispatch(t.state.tr.setSelection(r));else if((t.markCursor||e)&&!n.$from.node(n.$from.sharedDepth(n.to)).inlineContent)t.dispatch(t.state.tr.deleteSelection());else t.updateState(t.state)}}function captureCopy(t,e){
// The extra wrapper is somehow necessary on IE/Edge to prevent the
// content from being mangled when it is put onto the clipboard
if(!t.dom.parentNode)return;var r=t.dom.parentNode.appendChild(document.createElement("div"));r.appendChild(e);r.style.cssText="position: fixed; left: -10000px; top: 10px";var n=getSelection(),i=document.createRange();i.selectNodeContents(e);
// Done because IE will fire a selectionchange moving the selection
// to its start when removeAllRanges is called and the editor still
// has focus (which will mess up the editor's selection state).
t.dom.blur();n.removeAllRanges();n.addRange(i);setTimeout((function(){if(r.parentNode)r.parentNode.removeChild(r);t.focus()}),50)}
// This is very crude, but unfortunately old iOS Safari versions
// _pretend_ that they have a clipboard API—all the objects and
// methods are there, they just don't work, and they are hard to test.
var brokenClipboardAPI=ios&&webkit_version<604;handlers.copy=editHandlers.cut=function(t,e){var r=e;var n=t.state.selection,i=r.type=="cut";if(n.empty)return;
// IE and Edge's clipboard interface is completely broken
var a=brokenClipboardAPI?null:r.clipboardData;var o=n.content(),u=serializeForClipboard(t,o),s=u.dom,f=u.text;if(a){r.preventDefault();a.clearData();a.setData("text/html",s.innerHTML);a.setData("text/plain",f)}else{captureCopy(t,s)}if(i)t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent","cut"))};function sliceSingleNode(t){return t.openStart==0&&t.openEnd==0&&t.content.childCount==1?t.content.firstChild:null}function capturePaste(t,e){if(!t.dom.parentNode)return;var r=t.input.shiftKey||t.state.selection.$from.parent.type.spec.code;var n=t.dom.parentNode.appendChild(document.createElement(r?"textarea":"div"));if(!r)n.contentEditable="true";n.style.cssText="position: fixed; left: -10000px; top: 10px";n.focus();var i=t.input.shiftKey&&t.input.lastKeyCode!=45;setTimeout((function(){t.focus();if(n.parentNode)n.parentNode.removeChild(n);if(r)doPaste(t,n.value,null,i,e);else doPaste(t,n.textContent,n.innerHTML,i,e)}),50)}function doPaste(t,e,r,n,i){var a=parseFromClipboard(t,e,r,n,t.state.selection.$from);if(t.someProp("handlePaste",(function(e){return e(t,i,a||Slice.empty)})))return true;if(!a)return false;var o=sliceSingleNode(a);var u=o?t.state.tr.replaceSelectionWith(o,n):t.state.tr.replaceSelection(a);t.dispatch(u.scrollIntoView().setMeta("paste",true).setMeta("uiEvent","paste"));return true}function getText$1(t){var e=t.getData("text/plain")||t.getData("Text");if(e)return e;var r=t.getData("text/uri-list");return r?r.replace(/\r?\n/g," "):""}editHandlers.paste=function(t,e){var r=e;
// Handling paste from JavaScript during composition is very poorly
// handled by browsers, so as a dodgy but preferable kludge, we just
// let the browser do its native thing there, except on Android,
// where the editor is almost always composing.
if(t.composing&&!android)return;var n=brokenClipboardAPI?null:r.clipboardData;var i=t.input.shiftKey&&t.input.lastKeyCode!=45;if(n&&doPaste(t,getText$1(n),n.getData("text/html"),i,r))r.preventDefault();else capturePaste(t,r)};var Dragging=/** @class */function(){function t(t,e,r){this.slice=t;this.move=e;this.node=r}return t}();var dragCopyModifier=mac$2?"altKey":"ctrlKey";function dragMoves(t,e){var r;t.someProp("dragCopies",(function(t){r=r||t(e)}));return r!=null?!r:!e[dragCopyModifier]}handlers.dragstart=function(t,e){var r=e;var n=t.input.mouseDown;if(n)n.done();if(!r.dataTransfer)return;var i=t.state.selection;var a=i.empty?null:t.posAtCoords(eventCoords(r));var o;if(a&&a.pos>=i.from&&a.pos<=(i instanceof NodeSelection?i.to-1:i.to));else if(n&&typeof n.mightDrag=="object"){o=NodeSelection.create(t.state.doc,n.mightDrag.pos)}else if(r.target&&isElt(r.target)){var u=t.docView.nearestDesc(r.target,true);if(u&&u.node.type.spec.draggable&&u!=t.docView)o=NodeSelection.create(t.state.doc,u.posBefore)}var s=(o||t.state.selection).content();var f=serializeForClipboard(t,s),l=f.dom,c=f.text,v=f.slice;
// Pre-120 Chrome versions clear files when calling `clearData` (#1472)
if(!r.dataTransfer.files.length||!chrome||chrome_version>120)r.dataTransfer.clearData();r.dataTransfer.setData(brokenClipboardAPI?"Text":"text/html",l.innerHTML);
// See https://code.haverbeke.berlin/prosemirror/prosemirror/issues/1156
r.dataTransfer.effectAllowed="copyMove";if(!brokenClipboardAPI)r.dataTransfer.setData("text/plain",c);t.dragging=new Dragging(v,dragMoves(t,r),o)};handlers.dragend=function(t){var e=t.dragging;window.setTimeout((function(){if(t.dragging==e)t.dragging=null}),50)};editHandlers.dragover=editHandlers.dragenter=function(t,e){return e.preventDefault()};editHandlers.drop=function(t,e){try{handleDrop(t,e,t.dragging)}finally{t.dragging=null}};function handleDrop(t,e,r){if(!e.dataTransfer)return;var n=t.posAtCoords(eventCoords(e));if(!n)return;var i=t.state.doc.resolve(n.pos);var a=r&&r.slice;if(a){t.someProp("transformPasted",(function(e){a=e(a,t,false)}))}else{a=parseFromClipboard(t,getText$1(e.dataTransfer),brokenClipboardAPI?null:e.dataTransfer.getData("text/html"),false,i)}var o=!!(r&&dragMoves(t,e));if(t.someProp("handleDrop",(function(r){return r(t,e,a||Slice.empty,o)}))){e.preventDefault();return}if(!a)return;e.preventDefault();var u=a?dropPoint(t.state.doc,i.pos,a):i.pos;if(u==null)u=i.pos;var s=t.state.tr;if(o){var f=r.node;if(f)f.replace(s);else s.deleteSelection()}var l=s.mapping.map(u);var c=a.openStart==0&&a.openEnd==0&&a.content.childCount==1;var v=s.doc;if(c)s.replaceRangeWith(l,l,a.content.firstChild);else s.replaceRange(l,l,a);if(s.doc.eq(v))return;var h=s.doc.resolve(l);if(c&&NodeSelection.isSelectable(a.content.firstChild)&&h.nodeAfter&&h.nodeAfter.sameMarkup(a.content.firstChild)){s.setSelection(new NodeSelection(h))}else{var d=s.mapping.map(u);s.mapping.maps[s.mapping.maps.length-1].forEach((function(t,e,r,n){return d=n}));s.setSelection(selectionBetween(t,h,s.doc.resolve(d)))}t.focus();t.dispatch(s.setMeta("uiEvent","drop"))}handlers.focus=function(t){t.input.lastFocus=Date.now();if(!t.focused){t.domObserver.stopped((function(){return t.dom.classList.add("ProseMirror-focused")}));t.focused=true;t.domSel.read();if(!t.domSel.synced){var e=t.domSel.range;setTimeout((function(){var r=t.domSel.readRange();if(r&&e.eq(r))t.domSel.sync()}),20)}}};handlers.blur=function(t,e){var r=e;if(t.focused){t.domObserver.stopped((function(){return t.dom.classList.remove("ProseMirror-focused")}));if(r.relatedTarget&&t.dom.contains(r.relatedTarget))t.domSel.deactivate();t.focused=false}};handlers.beforeinput=function(t,e){var r=e;
// We should probably do more with beforeinput events, but support
// is so spotty that I'm still waiting to see where they are going.
// Very specific hack to deal with backspace sometimes failing on
// Chrome and Firefox Android when after an uneditable node.
if(android&&r.inputType=="deleteContentBackward"){t.domObserver.flushSoon();var n=t.input.domChangeCount;setTimeout((function(){if(t.input.domChangeCount!=n||t.domObserver.pendingRecords().length)return;// Event already had some effect
// This bug tends to close the virtual keyboard, so we refocus
t.dom.blur();t.focus();if(dispatchKey(t,"Backspace"))return;var e=t.state.selection.$cursor;
// Crude approximation of backspace behavior when no command handled it
if(e&&e.pos>0)t.dispatch(t.state.tr.delete(e.pos-1,e.pos).scrollIntoView())}),50)}};
// Make sure all handlers get registered
for(var prop in editHandlers)handlers[prop]=editHandlers[prop];function compareObjs(t,e){if(t==e)return true;for(var r in t)if(t[r]!==e[r])return false;for(var r in e)if(!(r in t))return false;return true}var FragmentCursor=/** @class */function(){function t(t){this.frag=t;this.index=0;this.off=0}t.prototype.nodeAt=function(t){while(this.off<=t&&this.index<this.frag.childCount){var e=this.frag.child(this.index);if(this.off==t)return e;this.off+=e.nodeSize;this.index++}return null};return t}();var WidgetType=/** @class */function(){function t(t,e){this.toDOM=t;this.spec=e||noSpec;this.side=this.spec.side||0}t.prototype.map=function(t,e,r,n){var i=t.mapResult(e.from+n,this.side<0?-1:1),a=i.pos,o=i.deleted;return o?null:new Decoration(a-r,a-r,this)};t.prototype.valid=function(){return true};t.prototype.eq=function(e){return this==e||e instanceof t&&(this.spec.key&&this.spec.key==e.spec.key||this.toDOM==e.toDOM&&compareObjs(this.spec,e.spec))};t.prototype.destroy=function(t){if(this.spec.destroy)this.spec.destroy(t)};return t}();var InlineType=/** @class */function(){function t(t,e){this.attrs=t;this.spec=e||noSpec}t.prototype.map=function(t,e,r,n){var i=t.map(e.from+n,this.spec.inclusiveStart?-1:1)-r;var a=t.map(e.to+n,this.spec.inclusiveEnd?1:-1)-r;return i>=a?null:new Decoration(i,a,this)};t.prototype.valid=function(t,e){return e.from<e.to};t.prototype.eq=function(e){return this==e||e instanceof t&&compareObjs(this.attrs,e.attrs)&&compareObjs(this.spec,e.spec)};t.is=function(e){return e.type instanceof t};t.prototype.destroy=function(){};return t}();var NodeType=/** @class */function(){function t(t,e){this.attrs=t;this.spec=e||noSpec}t.prototype.map=function(t,e,r,n){var i=t.mapResult(e.from+n,1);if(i.deleted)return null;var a=t.mapResult(e.to+n,-1);if(a.deleted||a.pos<=i.pos)return null;return new Decoration(i.pos-r,a.pos-r,this)};t.prototype.valid=function(t,e,r){var n=r.nodeAt(e.from);return!!n&&!n.isText&&e.from+n.nodeSize==e.to};t.prototype.eq=function(e){return this==e||e instanceof t&&compareObjs(this.attrs,e.attrs)&&compareObjs(this.spec,e.spec)};t.prototype.destroy=function(){};return t}();
/**
Decoration objects can be provided to the view through the
[`decorations` prop](https://prosemirror.net/docs/ref/#view.EditorProps.decorations). They come in
several variants—see the static members of this class for details.
*/var Decoration=/** @class */function(){
/**
    @internal
    */
function t(
/**
    The start position of the decoration.
    */
t,
/**
    The end position. Will be the same as `from` for [widget
    decorations](https://prosemirror.net/docs/ref/#view.Decoration^widget).
    */
e,
/**
    @internal
    */
r){this.from=t;this.to=e;this.type=r}
/**
    @internal
    */t.prototype.copy=function(e,r){return new t(e,r,this.type)};
/**
    @internal
    */t.prototype.eq=function(t,e){if(e===void 0){e=0}return this.type.eq(t.type)&&this.from+e==t.from&&this.to+e==t.to};
/**
    @internal
    */t.prototype.map=function(t,e,r){return this.type.map(t,this,e,r)};
/**
    Creates a widget decoration, which is a DOM node that's shown in
    the document at the given position. It is recommended that you
    delay rendering the widget by passing a function that will be
    called when the widget is actually drawn in a view, but you can
    also directly pass a DOM node. `getPos` can be used to find the
    widget's current document position.
    */t.widget=function(e,r,n){return new t(e,e,new WidgetType(r,n))};
/**
    Creates an inline decoration, which adds the given attributes to
    each inline node between `from` and `to`.
    */t.inline=function(e,r,n,i){return new t(e,r,new InlineType(n,i))};
/**
    Creates a node decoration. `from` and `to` should point precisely
    before and after a node in the document. That node, and only that
    node, will receive the given attributes.
    */t.node=function(e,r,n,i){return new t(e,r,new NodeType(n,i))};Object.defineProperty(t.prototype,"spec",{
/**
        The spec provided when creating this decoration. Can be useful
        if you've stored extra information in that object.
        */
get:function(){return this.type.spec},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"inline",{
/**
        @internal
        */
get:function(){return this.type instanceof InlineType},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"widget",{
/**
        @internal
        */
get:function(){return this.type instanceof WidgetType},enumerable:false,configurable:true});return t}();var none=[],noSpec={};
/**
A collection of [decorations](https://prosemirror.net/docs/ref/#view.Decoration), organized in such
a way that the drawing algorithm can efficiently use and compare
them. This is a persistent data structure—it is not modified,
updates create a new value.
*/var DecorationSet=/** @class */function(){
/**
    @internal
    */
function t(t,e){this.local=t.length?t:none;this.children=e.length?e:none}
/**
    Create a set of decorations, using the structure of the given
    document. This will consume (modify) the `decorations` array, so
    you must make a copy if you want need to preserve that.
    */t.create=function(t,e){return e.length?buildTree(e,t,0,noSpec):empty};
/**
    Find all decorations in this set which touch the given range
    (including decorations that start or end directly at the
    boundaries) and match the given predicate on their spec. When
    `start` and `end` are omitted, all decorations in the set are
    considered. When `predicate` isn't given, all decorations are
    assumed to match.
    */t.prototype.find=function(t,e,r){var n=[];this.findInner(t==null?0:t,e==null?1e9:e,n,0,r);return n};t.prototype.findInner=function(t,e,r,n,i){for(var a=0;a<this.local.length;a++){var o=this.local[a];
// Spans are sorted by start position.
if(o.from>e)break;if(o.to>=t&&(!i||i(o.spec)))r.push(o.copy(o.from+n,o.to+n))}for(var u=0;u<this.children.length;u+=3){
// Children are sorted by start position.
if(this.children[u]>=e)break;if(this.children[u+1]>t){var s=this.children[u]+1;this.children[u+2].findInner(t-s,e-s,r,n+s,i)}}};
/**
    Map the set of decorations in response to a change in the
    document.
    */t.prototype.map=function(t,e,r){if(this==empty||t.maps.length==0)return this;return this.mapInner(t,e,0,0,r||noSpec)};
/**
    @internal
    */t.prototype.mapInner=function(e,r,n,i,a){var o;if(this.local.length){var u=new FragmentCursor(r.content);for(var s=0;s<this.local.length;s++){var f=this.local[s].map(e,n,i);if(f&&f.type.valid(r,f,u))(o||(o=[])).push(f);else if(a.onRemove)a.onRemove(this.local[s].spec)}}if(this.children.length)return mapChildren(this.children,o||[],e,r,n,i,a);else return o?new t(o.sort(byPos),none):empty};
/**
    Add the given array of decorations to the ones in the set,
    producing a new set. Consumes the `decorations` array. Needs
    access to the current document to create the appropriate tree
    structure.
    */t.prototype.add=function(e,r){if(!r.length)return this;if(this==empty)return t.create(e,r);return this.addInner(e,r,0)};t.prototype.addInner=function(e,r,n){var i=this;var a,o=0;e.forEach((function(t,e){var u=e+n,s;if(!(s=takeSpansForNode(r,t,u)))return;if(!a)a=i.children.slice();while(o<a.length&&a[o]<e)o+=3;if(a[o]==e)a[o+2]=a[o+2].addInner(t,s,u+1);else a.splice(o,0,e,e+t.nodeSize,buildTree(s,t,u+1,noSpec));o+=3}));var u=moveSpans(o?withoutNulls(r):r,-n).sort(byPos);if(u.length){var s=new FragmentCursor(e.content);for(var f=0;f<u.length;f++)if(!u[f].type.valid(e,u[f],s))u.splice(f--,1)}return new t(u.length?this.local.concat(u).sort(byPos):this.local,a||this.children)};
/**
    Create a new set that contains the decorations in this set, minus
    the ones in the given array.
    */t.prototype.remove=function(t){if(t.length==0||this==empty)return this;return this.removeInner(t,0)};t.prototype.removeInner=function(e,r){var n=this.children,i=this.local;for(var a=0;a<n.length;a+=3){var o=void 0;var u=n[a]+r,s=n[a+1]+r;for(var f=0,l=void 0;f<e.length;f++)if(l=e[f]){if(l.from>u&&l.to<s){e[f]=null;(o||(o=[])).push(l)}}if(!o)continue;if(n==this.children)n=this.children.slice();var c=n[a+2].removeInner(o,u+1);if(c!=empty){n[a+2]=c}else{n.splice(a,3);a-=3}}if(i.length)for(var v=0,l=void 0;v<e.length;v++)if(l=e[v]){for(var f=0;f<i.length;f++)if(i[f].eq(l,r)){if(i==this.local)i=this.local.slice();i.splice(f--,1)}}if(n==this.children&&i==this.local)return this;return i.length||n.length?new t(i,n):empty};t.prototype.forChild=function(e,r){if(this==empty)return this;if(r.isLeaf)return t.empty;var n,i;
// Children are sorted triples of start, end, and decoration set.
var a=0,o=this.children.length/3;while(a<o){var u=a+o>>>1,s=u*3,f=this.children[s];if(f<e){a=u+1}else if(f>e){o=u}else{n=this.children[s+2];break}}var l=e+1,c=l+r.content.size;for(var v=0;v<this.local.length;v++){var h=this.local[v];if(h.from<c&&h.to>l&&h.type instanceof InlineType){var d=Math.max(l,h.from)-l,p=Math.min(c,h.to)-l;if(d<p)(i||(i=[])).push(h.copy(d,p))}}if(i){var g=new t(i.sort(byPos),none);return n?new DecorationGroup([g,n]):g}return n||empty};
/**
    @internal
    */t.prototype.eq=function(e){if(this==e)return true;if(!(e instanceof t)||this.local.length!=e.local.length||this.children.length!=e.children.length)return false;for(var r=0;r<this.local.length;r++)if(!this.local[r].eq(e.local[r]))return false;for(var n=0;n<this.children.length;n+=3)if(this.children[n]!=e.children[n]||this.children[n+1]!=e.children[n+1]||!this.children[n+2].eq(e.children[n+2]))return false;return true};
/**
    @internal
    */t.prototype.locals=function(t){return removeOverlap(this.localsInner(t))};
/**
    @internal
    */t.prototype.localsInner=function(t){if(this==empty)return none;if(t.inlineContent||!this.local.some(InlineType.is))return this.local;var e=[];for(var r=0;r<this.local.length;r++){if(!(this.local[r].type instanceof InlineType))e.push(this.local[r])}return e};t.prototype.forEachSet=function(t){t(this)};return t}();
/**
The empty set of decorations.
*/DecorationSet.empty=new DecorationSet([],[]);
/**
@internal
*/DecorationSet.removeOverlap=removeOverlap;var empty=DecorationSet.empty;
// An abstraction that allows the code dealing with decorations to
// treat multiple DecorationSet objects as if it were a single object
// with (a subset of) the same interface.
var DecorationGroup=/** @class */function(){function t(t){this.members=t}t.prototype.map=function(e,r){var n=this.members.map((function(t){return t.map(e,r,noSpec)}));return t.from(n)};t.prototype.forChild=function(e,r){if(r.isLeaf)return DecorationSet.empty;var n=[];for(var i=0;i<this.members.length;i++){var a=this.members[i].forChild(e,r);if(a==empty)continue;if(a instanceof t)n=n.concat(a.members);else n.push(a)}return t.from(n)};t.prototype.eq=function(e){if(!(e instanceof t)||e.members.length!=this.members.length)return false;for(var r=0;r<this.members.length;r++)if(!this.members[r].eq(e.members[r]))return false;return true};t.prototype.locals=function(t){var e,r=true;for(var n=0;n<this.members.length;n++){var i=this.members[n].localsInner(t);if(!i.length)continue;if(!e){e=i}else{if(r){e=e.slice();r=false}for(var a=0;a<i.length;a++)e.push(i[a])}}return e?removeOverlap(r?e:e.sort(byPos)):none};
// Create a group for the given array of decoration sets, or return
// a single set when possible.
t.from=function(e){switch(e.length){case 0:return empty;case 1:return e[0];default:return new t(e.every((function(t){return t instanceof DecorationSet}))?e:e.reduce((function(t,e){return t.concat(e instanceof DecorationSet?e:e.members)}),[]))}};t.prototype.forEachSet=function(t){for(var e=0;e<this.members.length;e++)this.members[e].forEachSet(t)};return t}();function mapChildren(t,e,r,n,i,a,o){var u=t.slice();var s=function(t,e){var n=0;r.maps[t].forEach((function(t,r,i,a){var o=a-i-(r-t);for(var s=0;s<u.length;s+=3){var f=u[s+1];if(f<0||t>f+e-n)continue;var l=u[s]+e-n;if(r>=l){u[s+1]=t<=l?-2:-1}else if(t>=e&&o){u[s]+=o;u[s+1]+=o}}n+=o}));e=r.maps[t].map(e,-1);f=e};var f;
// Mark the children that are directly touched by changes, and
// move those that are after the changes.
for(var l=0,c=a;l<r.maps.length;l++){s(l,c);c=f}
// Find the child nodes that still correspond to a single node,
// recursively call mapInner on them and update their positions.
var v=false;for(var h=0;h<u.length;h+=3)if(u[h+1]<0){// Touched nodes
if(u[h+1]==-2){v=true;u[h+1]=-1;continue}var d=r.map(t[h]+a),p=d-i;if(p<0||p>=n.content.size){v=true;continue}
// Must read oldChildren because children was tagged with -1
var g=r.map(t[h+1]+a,-1),m=g-i;var b=n.content.findIndex(p),w=b.index,S=b.offset;var E=n.maybeChild(w);if(E&&S==p&&S+E.nodeSize==m){var T=u[h+2].mapInner(r,E,d+1,t[h]+a+1,o);if(T!=empty){u[h]=p;u[h+1]=m;u[h+2]=T}else{u[h+1]=-2;v=true}}else{v=true}}
// Remaining children must be collected and rebuilt into the appropriate structure
if(v){var y=mapAndGatherRemainingDecorations(u,t,e,r,i,a,o);var k=buildTree(y,n,0,o);e=k.local;for(var R=0;R<u.length;R+=3)if(u[R+1]<0){u.splice(R,3);R-=3}for(var x=0,A=0;x<k.children.length;x+=3){var d=k.children[x];while(A<u.length&&u[A]<d)A+=3;u.splice(A,0,k.children[x],k.children[x+1],k.children[x+2])}}return new DecorationSet(e.sort(byPos),u)}function moveSpans(t,e){if(!e||!t.length)return t;var r=[];for(var n=0;n<t.length;n++){var i=t[n];r.push(new Decoration(i.from+e,i.to+e,i.type))}return r}function mapAndGatherRemainingDecorations(t,e,r,n,i,a,o){
// Gather all decorations from the remaining marked children
function u(t,e){for(var a=0;a<t.local.length;a++){var s=t.local[a].map(n,i,e);if(s)r.push(s);else if(o.onRemove)o.onRemove(t.local[a].spec)}for(var f=0;f<t.children.length;f+=3)u(t.children[f+2],t.children[f]+e+1)}for(var s=0;s<t.length;s+=3)if(t[s+1]==-1)u(t[s+2],e[s]+a+1);return r}function takeSpansForNode(t,e,r){if(e.isLeaf)return null;var n=r+e.nodeSize,i=null;for(var a=0,o=void 0;a<t.length;a++){if((o=t[a])&&o.from>r&&o.to<n){(i||(i=[])).push(o);t[a]=null}}return i}function withoutNulls(t){var e=[];for(var r=0;r<t.length;r++)if(t[r]!=null)e.push(t[r]);return e}
// Build up a tree that corresponds to a set of decorations. `offset`
// is a base offset that should be subtracted from the `from` and `to`
// positions in the spans (so that we don't have to allocate new spans
// for recursive calls).
function buildTree(t,e,r,n){var i=[],a=false;e.forEach((function(e,o){var u=takeSpansForNode(t,e,o+r);if(u){a=true;var s=buildTree(u,e,r+o+1,n);if(s!=empty)i.push(o,o+e.nodeSize,s)}}));var o=moveSpans(a?withoutNulls(t):t,-r).sort(byPos);if(o.length){var u=new FragmentCursor(e.content);for(var s=0;s<o.length;s++)if(!o[s].type.valid(e,o[s],u)){if(n.onRemove)n.onRemove(o[s].spec);o.splice(s--,1)}}return o.length||i.length?new DecorationSet(o,i):empty}
// Used to sort decorations so that ones with a low start position
// come first, and within a set with the same start position, those
// with an smaller end position come first.
function byPos(t,e){return t.from-e.from||t.to-e.to}
// Scan a sorted array of decorations for partially overlapping spans,
// and split those so that only fully overlapping spans are left (to
// make subsequent rendering easier). Will return the input array if
// no partially overlapping spans are found (the common case).
function removeOverlap(t){var e=t;for(var r=0;r<e.length-1;r++){var n=e[r];if(n.from!=n.to)for(var i=r+1;i<e.length;i++){var a=e[i];if(a.from==n.from){if(a.to!=n.to){if(e==t)e=t.slice();
// Followed by a partially overlapping larger span. Split that
// span.
e[i]=a.copy(a.from,n.to);insertAhead(e,i+1,a.copy(n.to,a.to))}continue}else{if(a.from<n.to){if(e==t)e=t.slice();
// The end of this one overlaps with a subsequent span. Split
// this one.
e[r]=n.copy(n.from,a.from);insertAhead(e,i,n.copy(a.from,n.to))}break}}}return e}function insertAhead(t,e,r){while(e<t.length&&byPos(r,t[e])>0)e++;t.splice(e,0,r)}
// Get the decorations associated with the current props of a view.
function viewDecorations(t){var e=[];t.someProp("decorations",(function(r){var n=r(t.state);if(n&&n!=empty)e.push(n)}));if(t.cursorWrapper)e.push(DecorationSet.create(t.state.doc,[t.cursorWrapper.deco]));return DecorationGroup.from(e)}
// Note that all referencing and parsing is done with the
// start-of-operation selection and document, since that's the one
// that the DOM represents. If any changes came in in the meantime,
// the modification is mapped over those before it is applied, in
// readDOMChange.
function parseBetween(t,e,r,n){var i=t.docView.parseRange(e,r),a=i.node,o=i.fromOffset,u=i.toOffset,s=i.from,f=i.to;var l=t.domSel.range;var c;var v=l.anchorNode;if(v&&contains(t.dom,v)){c=[{node:v,offset:l.anchorOffset}];if(!selectionCollapsed(l))c.push({node:l.focusNode,offset:l.focusOffset})}
// Work around issue in Chrome where backspacing sometimes replaces
// the deleted content with a random BR node (issues #799, #831)
if(chrome&&t.input.lastKeyCode===8){for(var h=u;h>o;h--){var d=a.childNodes[h-1],p=d.pmViewDesc;if(d.nodeName=="BR"&&!p){u=h;break}if(!p||p.size)break}}var g=t.state.doc;var m=t.someProp("domParser")||DOMParser.fromSchema(t.state.schema);var b=g.resolve(s);var w=null,S=m.parse(a,{topNode:b.parent,topMatch:b.parent.contentMatchAt(b.index()),topOpen:true,from:o,to:u,preserveWhitespace:b.parent.type.whitespace=="pre"?"full":true,findPositions:c,ruleFromNode:ruleFromNode(n),context:b});if(c&&c[0].pos!=null){var E=c[0].pos,T=c[1]&&c[1].pos;if(T==null)T=E;w={anchor:E+s,head:T+s}}return{doc:S,sel:w,from:s,to:f}}var ruleFromNode=function(t){return function(e){var r=e.pmViewDesc;if(r){return r.parseRule(t)}else if(e.nodeName=="BR"&&e.parentNode){
// Safari replaces the list item or table cell with a BR
// directly in the list node (?!) if you delete the last
// character in a list item or table cell (#708, #862)
if(safari&&/^(ul|ol)$/i.test(e.parentNode.nodeName)){var n=document.createElement("div");n.appendChild(document.createElement("li"));return{skip:n}}else if(e.parentNode.lastChild==e||safari&&/^(tr|table)$/i.test(e.parentNode.nodeName)){return{ignore:true}}}else if(e.nodeName=="IMG"&&e.getAttribute("mark-placeholder")){return{ignore:true}}return null}};var isInline=/^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;function readDOMChange(t,e,r,n,i,a){var o=t.input.compositionPendingChanges||(t.composing?t.input.compositionID:0);t.input.compositionPendingChanges=0;if(e<0){var u=t.input.lastSelectionTime>Date.now()-50?t.input.lastSelectionOrigin:null;var s=selectionFromDOM(t,t.domSel.range,u);if(s&&!t.state.selection.eq(s)&&t.domSel.active){if(chrome&&android&&t.input.lastKeyCode===13&&Date.now()-100<t.input.lastKeyCodeTime&&dispatchKey(t,"Enter"))return;var f=t.state.tr.setSelection(s);if(u=="pointer")f.setMeta("pointer",true);else if(u=="key")f.scrollIntoView();if(o)f.setMeta("composition",o);t.dispatch(f)}return}var l=t.state.doc.resolve(e);var c=l.sharedDepth(r);e=l.before(c+1);r=t.state.doc.resolve(r).after(c+1);var v=t.state.selection;var h=parseBetween(t,e,r,a);var d=t.state.doc,p=d.slice(h.from,h.to);var g,m;
// Prefer anchoring to end when Backspace is pressed
if(t.input.lastKeyCode===8&&Date.now()-100<t.input.lastKeyCodeTime){g=t.state.selection.to;m="end"}else{g=t.state.selection.from;m="start"}t.input.lastKeyCode=null;var b=findDiff(p.content,h.doc.content,h.from,g,m);if(b)t.input.domChangeCount++;if((ios&&t.input.lastIOSEnter>Date.now()-225||android)&&a.some((function(t){return isElt(t)&&!isInline.test(t.nodeName)}))&&(!b||b.endA>=b.endB)&&dispatchKey(t,"Enter")){t.input.lastIOSEnter=0;return}if(!b){if(i&&v instanceof TextSelection&&!v.empty&&v.$head.sameParent(v.$anchor)&&!t.composing&&!(h.sel&&h.sel.anchor!=h.sel.head)){b={start:v.from,endA:v.to,endB:v.to}}else{if(h.sel){var w=resolveSelection(t,t.state.doc,h.sel);if(w&&!w.eq(t.state.selection)){var S=t.state.tr.setSelection(w);if(o)S.setMeta("composition",o);t.dispatch(S)}}return}}
// Handle the case where overwriting a selection by typing matches
// the start or end of the selected content, creating a change
// that's smaller than what was actually overwritten.
if(t.state.selection.from<t.state.selection.to&&b.start==b.endB&&t.state.selection instanceof TextSelection){if(b.start>t.state.selection.from&&b.start<=t.state.selection.from+2&&t.state.selection.from>=h.from){b.start=t.state.selection.from}else if(b.endA<t.state.selection.to&&b.endA>=t.state.selection.to-2&&t.state.selection.to<=h.to){b.endB+=t.state.selection.to-b.endA;b.endA=t.state.selection.to}}var E=h.doc.resolveNoCache(b.start-h.from);var T=h.doc.resolveNoCache(b.endB-h.from);var y=d.resolve(b.start);var k=E.sameParent(T)&&E.parent.inlineContent&&y.end()>=b.endA;
// If this looks like the effect of pressing Enter (or was recorded
// as being an iOS enter press), just dispatch an Enter key instead.
if((ios&&t.input.lastIOSEnter>Date.now()-225&&(!k||a.some((function(t){return t.nodeName=="DIV"||t.nodeName=="P"})))||!k&&looksLikeEnter(h.doc,E.pos,T.pos))&&dispatchKey(t,"Enter")){t.input.lastIOSEnter=0;return}
// Same for backspace
if(t.state.selection.anchor>b.start&&(k?b.endA>b.start&&b.endB==b.start:looksLikeBlockJoin(d,b.start,b.endA,E,T))&&dispatchKey(t,"Backspace")){if(android&&chrome)t.domSel.suppressChanges();return}
// Chrome will occasionally, during composition, delete the
// entire composition and then immediately insert it again. This is
// used to detect that situation.
if(chrome&&b.endB==b.start)t.input.lastChromeDelete=Date.now();
// This tries to detect Android virtual keyboard
// enter-and-pick-suggestion action. That sometimes (see issue
// #1059) first fires a DOM mutation, before moving the selection to
// the newly created block. And then, because ProseMirror cleans up
// the DOM selection, it gives up moving the selection entirely,
// leaving the cursor in the wrong place. When that happens, we drop
// the new paragraph from the initial change, and fire a simulated
// enter key afterwards.
if(android&&!k&&E.start()!=T.start()&&T.parentOffset==0&&E.depth==T.depth&&h.sel&&h.sel.anchor==h.sel.head&&h.sel.head==b.endA){b.endB-=2;T=h.doc.resolveNoCache(b.endB-h.from);setTimeout((function(){return dispatchKey(t,"Enter")}),20)}var R=b.start,x=b.endA;var A=function(e){var r=e||t.state.tr.replace(R,x,h.doc.slice(b.start-h.from,b.endB-h.from));if(h.sel){var n=resolveSelection(t,r.doc,h.sel);
// Chrome will sometimes, during composition, report the
// selection in the wrong place. If it looks like that is
// happening, don't update the selection.
if(n&&!(chrome&&t.composing&&n.empty&&(b.start!=b.endB||t.input.lastChromeDelete<Date.now()-100)&&(n.head==R||n.head==r.mapping.map(x)-1)))r.setSelection(n)}if(o)r.setMeta("composition",o);return r.scrollIntoView()};var C;if(k){if(E.pos==T.pos){// Deletion
var _=A(t.state.tr.delete(R,x));var O=d.resolve(b.start).marksAcross(d.resolve(b.endA));if(O)_.ensureMarks(O);t.dispatch(_)}else if(// Adding or removing a mark
b.endA==b.endB&&(C=isMarkChange(E.parent.content.cut(E.parentOffset,T.parentOffset),y.parent.content.cut(y.parentOffset,b.endA-y.start())))){var M=A(t.state.tr);if(C.type=="add")M.addMark(R,x,C.mark);else M.removeMark(R,x,C.mark);t.dispatch(M)}else if(E.parent.child(E.index()).isText&&E.index()==T.index()-(T.textOffset?0:1)){
// Both positions in the same text node -- simply insert text
var N=E.parent.textBetween(E.parentOffset,T.parentOffset);var L=function(){return A(t.state.tr.insertText(N,R,x))};if(!t.someProp("handleTextInput",(function(e){return e(t,R,x,N,L)})))t.dispatch(L())}else{t.dispatch(A())}}else{t.dispatch(A())}}function resolveSelection(t,e,r){if(Math.max(r.anchor,r.head)>e.content.size)return null;return selectionBetween(t,e.resolve(r.anchor),e.resolve(r.head))}
// Given two same-length, non-empty fragments of inline content,
// determine whether the first could be created from the second by
// removing or adding a single mark type.
function isMarkChange(t,e){var r=t.firstChild.marks,n=e.firstChild.marks;var i=r,a=n,o,u,s;for(var f=0;f<n.length;f++)i=n[f].removeFromSet(i);for(var l=0;l<r.length;l++)a=r[l].removeFromSet(a);if(i.length==1&&a.length==0){u=i[0];o="add";s=function(t){return t.mark(u.addToSet(t.marks))}}else if(i.length==0&&a.length==1){u=a[0];o="remove";s=function(t){return t.mark(u.removeFromSet(t.marks))}}else{return null}var c=[];for(var v=0;v<e.childCount;v++)c.push(s(e.child(v)));if(Fragment.from(c).eq(t))return{mark:u,type:o}}function looksLikeBlockJoin(t,e,r,n,i){if(// The content must have shrunk
r-e<=i.pos-n.pos||
// newEnd must point directly at or after the end of the block that newStart points into
skipClosingAndOpening(n,true,false)<i.pos)return false;var a=t.resolve(e);
// Handle the case where, rather than joining blocks, the change just removed an entire block
if(!n.parent.inlineContent){var o=a.nodeAfter;return o!=null&&r==e+o.nodeSize}
// Start must be at the end of a block
if(a.parentOffset<a.parent.content.size||!a.parent.isTextblock)return false;var u=t.resolve(skipClosingAndOpening(a,true,true));
// The next textblock must start before end and end near it
if(!u.parent.isTextblock||u.pos>r||skipClosingAndOpening(u,true,false)<r)return false;
// The fragments after the join point must match
return n.parent.content.cut(n.parentOffset).eq(u.parent.content)}function looksLikeEnter(t,e,r){var n=0,i=0;t.nodesBetween(e,r,(function(t,a){if(t.isTextblock&&a>=e&&a<r)n++;else if(t.isText?/\S/.test(t.text.slice(Math.max(0,e-a),Math.min(t.nodeSize,r-a))):t.isLeaf)i++}));return i==0&&n==1}function skipClosingAndOpening(t,e,r){var n=t.depth,i=e?t.end():t.pos;while(n>0&&(e||t.indexAfter(n)==t.node(n).childCount)){n--;i++;e=false}if(r){var a=t.node(n).maybeChild(t.indexAfter(n));while(a&&!a.isLeaf){a=a.firstChild;i++}}return i}function findDiff(t,e,r,n,i){var a=t.findDiffStart(e,r),o=r+t.size,u=r+e.size;if(a==null)return null;var s=t.findDiffEnd(e,o,u),f=s.a,l=s.b;if(i=="end"){var c=Math.max(0,a-Math.min(f,l));n-=f+c-a}if(f<a&&o<u){var v=n<=a&&n>=f?a-n:0;a-=v;l=a+(l-f);f=a}else if(l<a){var v=n<=a&&n>=l?a-n:0;a-=v;f=a+(f-l);l=a}return{start:a,endA:f,endB:l}}var observeOptions={childList:true,characterData:true,characterDataOldValue:true,attributes:true,attributeOldValue:true,subtree:true};var DOMObserver=/** @class */function(){function t(t){var e=this;this.view=t;this.queue=[];this.flushingSoon=-1;this.suppressingSelectionUpdates=false;this.lastChangedTextNode=null;this.started=false;this.observer=new window.MutationObserver((function(r){for(var n=0;n<r.length;n++)e.queue.push(r[n]);if(safari&&t.composing&&r.some((function(t){return t.type=="childList"&&t.target.nodeName=="TR"}))){
// Safari does weird stuff when finishing a composition in a
// table cell, which tends to involve inserting inappropriate
// nodes in the table row.
t.input.badSafariComposition=true;e.flushSoon()}else{e.flush()}}))}t.prototype.flushSoon=function(){var t=this;if(this.flushingSoon<0)this.flushingSoon=window.setTimeout((function(){t.flushingSoon=-1;t.flush()}),20)};t.prototype.forceFlush=function(t){if(t===void 0){t=false}if(this.flushingSoon>-1){window.clearTimeout(this.flushingSoon);this.flushingSoon=-1;this.flush(true)}else if(t){this.flush(true)}};t.prototype.start=function(){this.observer.takeRecords();this.observer.observe(this.view.dom,observeOptions);this.started=true};t.prototype.stop=function(){var t=this;var e=this.observer.takeRecords();if(e.length){for(var r=0;r<e.length;r++)this.queue.push(e[r]);window.setTimeout((function(){return t.flush()}),20)}this.observer.disconnect();this.started=false};t.prototype.stopped=function(t){if(!this.started)return t();this.stop();try{return t()}finally{this.start()}};t.prototype.ignoreSelectionChange=function(t){if(!t.focusNode)return true;var e=new Set,r;for(var n=t.focusNode;n;n=parentNode(n))e.add(n);for(var n=t.anchorNode;n;n=parentNode(n))if(e.has(n)){r=n;break}var i=r&&this.view.docView.nearestDesc(r);if(i&&i.ignoreMutation({type:"selection",target:isText(r)?r.parentNode:r})){this.view.domSel.ignore(t);return true}};t.prototype.pendingRecords=function(){for(var t=0,e=this.observer.takeRecords();t<e.length;t++){var r=e[t];this.queue.push(r)}return this.queue};t.prototype.flush=function(t){if(t===void 0){t=true}var e=this.view;if(!e.docView||this.flushingSoon>-1)return;var r=this.pendingRecords();if(r.length)this.queue=[];if(t)e.domSel.read();var n=!e.domSel.suppress&&!e.domSel.synced&&!!hasFocusAndSelection(e)&&!this.ignoreSelectionChange(e.domSel.range);var i=-1,a=-1,o=false,u=[];if(e.editable){for(var s=0;s<r.length;s++){var f=this.registerMutation(r[s],u);if(f){i=i<0?f.from:Math.min(f.from,i);a=a<0?f.to:Math.max(f.to,a);if(f.typeOver)o=true}}}if(u.some((function(t){return t.nodeName=="BR"}))&&(e.input.lastKeyCode==8||e.input.lastKeyCode==46||chrome&&(e.composing||e.input.compositionEndedAt>Date.now()-50)&&r.some((function(t){return t.type=="childList"&&t.removedNodes.length})))){
// Browsers sometimes insert a bogus break node if you
// backspace out the last bit of text before an inline-flex node (#1552)
for(var l=0,c=u;l<c.length;l++){var v=c[l];if(v.nodeName=="BR"&&v.parentNode){var h=v.nextSibling;while(h&&isElt(h)){if(h.contentEditable=="false"){v.parentNode.removeChild(v);break}h=h.firstChild}}}}else if(gecko&&u.length){var d=u.filter((function(t){return t.nodeName=="BR"}));if(d.length==2){var p=d[0],g=d[1];if(p.parentNode&&p.parentNode.parentNode==g.parentNode)g.remove();else p.remove()}else{var m=e.domSel.range.focusNode;for(var b=0,w=d;b<w.length;b++){var S=w[b];var E=S.parentNode;if(E&&E.nodeName=="LI"&&(!m||blockParent(e,m)!=E))S.remove()}}}var T=null;
// If it looks like the browser has reset the selection to the
// start of the document after focus, restore the selection from
// the state
if(i<0&&n&&e.domSel.active&&e.input.lastFocus>Date.now()-200&&Math.max(e.input.lastTouch,e.input.lastClick.time)<Date.now()-300&&selectionCollapsed(e.domSel.range)&&(T=selectionFromDOM(e,e.domSel.range))&&T.eq(Selection.near(e.state.doc.resolve(0),1))){e.input.lastFocus=0;e.domSel.sync();e.scrollToSelection()}else if(i>-1||n){if(i>-1)checkCSS(e);if(e.input.badSafariComposition){e.input.badSafariComposition=false;fixUpBadSafariComposition(e,u)}readDOMChange(this.view,i,a,n,o,u);if(e.docView&&e.docView.damage)e.updateState(e.state);else if(n)e.domSel.sync()}};t.prototype.registerMutation=function(t,e){var r;
// Ignore mutations inside nodes that were already noted as inserted
if(e.indexOf(t.target)>-1)return null;var n;for(var i=t.target;i;i=i.parentNode){if(n=this.view.docView.getDesc(i))break}if(t.type=="attributes"&&(n==this.view.docView||t.attributeName=="contenteditable"||
// Firefox sometimes fires spurious events for null/empty styles
t.attributeName=="style"&&!t.oldValue&&!t.target.getAttribute("style")))return null;if(!n||n.ignoreMutation(t))return null;if(t.type=="childList"){for(var a=0;a<t.addedNodes.length;a++){var o=t.addedNodes[a];e.push(o);if(isText(o))this.lastChangedTextNode=o}if(n.contentDOM&&n.contentDOM!=n.dom&&!n.contentDOM.contains(t.target)){n.markDamage(4/* Damage.Structure */);return{from:n.posBefore,to:n.posAfter}}var u=t.previousSibling,s=t.nextSibling;var f=u&&u.parentNode==t.target?domIndex(u)+1:0;var l=n.localPosFromDOM(t.target,f,-1);var c=s&&s.parentNode==t.target?domIndex(s):t.target.childNodes.length;var v=n.localPosFromDOM(t.target,c,1);n.markDamage(((r=n.contentDOM)===null||r===void 0?void 0:r.contains(t.target))?2/* Damage.ChildList */:4/* Damage.Structure */);return{from:l,to:v}}else if(t.type=="attributes"){n.markDamage(4/* Damage.Structure */);return{from:n.posAtStart-n.border,to:n.posAtEnd+n.border}}else{// "characterData"
this.lastChangedTextNode=t.target;n.markDamage(n instanceof TextViewDesc&&t.target==n.nodeDOM?8/* Damage.Text */:4/* Damage.Structure */);return{from:n.posAtStart,to:n.posAtEnd,
// An event was generated for a text change that didn't change
// any text. Mark the dom change to fall back to assuming the
// selection was typed over with an identical value if it can't
// find another change.
typeOver:t.target.nodeValue==t.oldValue}}};return t}();var cssChecked=new WeakMap;var cssCheckWarned=false;function checkCSS(t){if(cssChecked.has(t))return;cssChecked.set(t,null);if(["normal","nowrap","pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace)!==-1){t.requiresGeckoHackNode=gecko;if(cssCheckWarned)return;console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");cssCheckWarned=true}}function blockParent(t,e){for(var r=e.parentNode;r&&r!=t.dom;r=r.parentNode){var n=t.docView.nearestDesc(r,true);if(n&&n.node.isBlock)return r}return null}
// Kludge for a Safari bug where, on ending a composition in an
// otherwise empty table cell, it randomly moves the composed text
// into the table row around that cell, greatly confusing everything
// (#188).
function fixUpBadSafariComposition(t,e){var r;var n=t.domSel.range,i=n.focusNode,a=n.focusOffset;for(var o=0,u=e;o<u.length;o++){var s=u[o];if(((r=s.parentNode)===null||r===void 0?void 0:r.nodeName)=="TR"){var f=s.nextSibling;while(f&&(f.nodeName!="TD"&&f.nodeName!="TH"))f=f.nextSibling;if(f){var l=f;for(;;){var c=l.firstChild;if(!c||!isElt(c)||c.contentEditable=="false"||/^(BR|IMG)$/.test(c.nodeName))break;l=c}l.insertBefore(s,l.firstChild);if(i==s)t.domSelection().collapse(s,a)}else{s.parentNode.removeChild(s)}}}}
/**
An editor view manages the DOM structure that represents an
editable document. Its state and behavior are determined by its
[props](https://prosemirror.net/docs/ref/#view.DirectEditorProps).
*/var EditorView=/** @class */function(){
/**
    Create a view. `place` may be a DOM node that the editor should
    be appended to, a function that will place it into the document,
    or an object whose `mount` property holds the node to use as the
    document container. If it is `null`, the editor will not be
    added to the document.
    */
function t(t,e){this._root=null;
/**
        @internal
        */this.focused=false;
/**
        Kludge used to work around a Chrome bug @internal
        */this.trackWrites=null;this.mounted=false;
/**
        @internal
        */this.markCursor=null;
/**
        @internal
        */this.cursorWrapper=null;
/**
        @internal
        */this.lastSelectedViewDesc=undefined;
/**
        @internal
        */this.input=new InputState;this.prevDirectPlugins=[];this.pluginViews=[];
/**
        Holds `true` when a hack node is needed in Firefox to prevent the
        [space is eaten issue](https://code.haverbeke.berlin/prosemirror/prosemirror/issues/651)
        @internal
        */this.requiresGeckoHackNode=false;
/**
        When editor content is being dragged, this object contains
        information about the dragged slice and whether it is being
        copied or moved. At any other time, it is null.
        */this.dragging=null;this._props=e;this.state=e.state;this.directPlugins=e.plugins||[];this.directPlugins.forEach(checkStateComponent);this.dispatch=this.dispatch.bind(this);this.dom=t&&t.mount||document.createElement("div");if(t){if(t.appendChild)t.appendChild(this.dom);else if(typeof t=="function")t(this.dom);else if(t.mount)this.mounted=true}this.editable=getEditable(this);updateCursorWrapper(this);this.nodeViews=buildNodeViews(this);this.docView=docViewDesc(this.state.doc,computeDocDeco(this),viewDecorations(this),this.dom,this);this.domObserver=new DOMObserver(this);this.domSel=new DOMSelState(this);this.domObserver.start();this.domSel.read();initInput(this);this.updatePluginViews()}Object.defineProperty(t.prototype,"composing",{
/**
        Holds `true` when a
        [composition](https://w3c.github.io/uievents/#events-compositionevents)
        is active.
        */
get:function(){return this.input.composing},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"props",{
/**
        The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
        */
get:function(){if(this._props.state!=this.state){var t=this._props;this._props={};for(var e in t)this._props[e]=t[e];this._props.state=this.state}return this._props},enumerable:false,configurable:true});
/**
    Update the view's props. Will immediately cause an update to
    the DOM.
    */t.prototype.update=function(t){if(t.handleDOMEvents!=this._props.handleDOMEvents)ensureListeners(this);var e=this._props;this._props=t;if(t.plugins){t.plugins.forEach(checkStateComponent);this.directPlugins=t.plugins}this.updateStateInner(t.state,e)};
/**
    Update the view by updating existing props object with the object
    given as argument. Equivalent to `view.update(Object.assign({},
    view.props, props))`.
    */t.prototype.setProps=function(t){var e={};for(var r in this._props)e[r]=this._props[r];e.state=this.state;for(var r in t)e[r]=t[r];this.update(e)};
/**
    Update the editor's `state` prop, without touching any of the
    other props.
    */t.prototype.updateState=function(t){this.updateStateInner(t,this._props)};t.prototype.updateStateInner=function(t,e){var r=this;var n;var i=this.state,a=false,o=false;
// When stored marks are added, stop composition, so that they can
// be displayed.
if(t.storedMarks&&this.composing){clearComposition(this);o=true}this.state=t;var u=i.plugins!=t.plugins||this._props.plugins!=e.plugins;if(u||this._props.plugins!=e.plugins||this._props.nodeViews!=e.nodeViews){var s=buildNodeViews(this);if(changedNodeViews(s,this.nodeViews)){this.nodeViews=s;a=true}}if(u||e.handleDOMEvents!=this._props.handleDOMEvents){ensureListeners(this)}this.editable=getEditable(this);updateCursorWrapper(this);var f=viewDecorations(this),l=computeDocDeco(this);var c=i.plugins!=t.plugins&&!i.doc.eq(t.doc)?"reset":t.scrollToSelection>i.scrollToSelection?"to selection":"preserve";var v=a||!this.docView.matchesNode(t.doc,l,f);if(v||!t.selection.eq(i.selection))o=true;var h=c=="preserve"&&o&&this.dom.style.overflowAnchor==null&&storeScrollPos(this);if(o)this.domObserver.stopped((function(){
// Work around an issue in Chrome where changing the DOM around
// an active selection puts it into a broken state where the
// thing the user sees differs from the selection reported by
// the Selection object (#710, #973, #1011, #1013, #1035).
var e=v&&chrome&&!r.composing&&!i.selection.empty&&!t.selection.empty&&selectionContextChanged(i.selection,t.selection);if(v){
// If the node that the selection points into is written to,
// Chrome sometimes starts misreporting the selection, so this
// tracks that and forces a selection reset when our update
// did write to the node.
var n=chrome?r.trackWrites=r.domSel.range.focusNode:null;if(r.composing)r.input.compositionNode=findCompositionNode(r);if(a||!r.docView.update(t.doc,l,f,r,-1)){var o=r.docView.outerDeco;r.docView.destroy();r.docView=docViewDesc(t.doc,l,f,r.dom,r,o)}if(n&&(!r.trackWrites||!r.dom.contains(r.trackWrites)))e=true}r.domSel.sync(e)}));this.updatePluginViews(i);if(((n=this.dragging)===null||n===void 0?void 0:n.node)&&!i.doc.eq(t.doc))this.updateDraggedNode(this.dragging,i);if(c=="reset"){this.dom.scrollTop=0}else if(c=="to selection"){this.scrollToSelection()}else if(h){resetScrollPos(h)}};
/**
    @internal
    */t.prototype.scrollToSelection=function(){var t=this;var e=this.domSel.range.focusNode;if(!e||!this.domSel.active);else if(this.someProp("handleScrollToSelection",(function(e){return e(t)})));else if(this.state.selection instanceof NodeSelection){var r=this.docView.domAfterPos(this.state.selection.from);if(isElt(r))scrollRectIntoView(this,r.getBoundingClientRect(),e)}else{scrollRectIntoView(this,this.coordsAtPos(this.state.selection.head,1),e)}};t.prototype.destroyPluginViews=function(){var t;while(t=this.pluginViews.pop())if(t.destroy)t.destroy()};t.prototype.updatePluginViews=function(t){if(!t||t.plugins!=this.state.plugins||this.directPlugins!=this.prevDirectPlugins){this.prevDirectPlugins=this.directPlugins;this.destroyPluginViews();for(var e=0;e<this.directPlugins.length;e++){var r=this.directPlugins[e];if(r.spec.view)this.pluginViews.push(r.spec.view(this))}for(var n=0;n<this.state.plugins.length;n++){var r=this.state.plugins[n];if(r.spec.view)this.pluginViews.push(r.spec.view(this))}}else{for(var i=0;i<this.pluginViews.length;i++){var a=this.pluginViews[i];if(a.update)a.update(this,t)}}};t.prototype.updateDraggedNode=function(t,e){var r=t.node,n=-1;if(r.from<this.state.doc.content.size&&this.state.doc.nodeAt(r.from)==r.node){n=r.from}else{var i=r.from+(this.state.doc.content.size-e.doc.content.size);var a=i>0&&i<this.state.doc.content.size&&this.state.doc.nodeAt(i);if(a==r.node)n=i}this.dragging=new Dragging(t.slice,t.move,n<0?undefined:NodeSelection.create(this.state.doc,n))};t.prototype.someProp=function(t,e){var r=this._props&&this._props[t],n;if(r!=null&&(n=e?e(r):r))return n;for(var i=0;i<this.directPlugins.length;i++){var a=this.directPlugins[i].props[t];if(a!=null&&(n=e?e(a):a))return n}var o=this.state.plugins;if(o)for(var u=0;u<o.length;u++){var s=o[u].props[t];if(s!=null&&(n=e?e(s):s))return n}};
/**
    Query whether the view has focus.
    */t.prototype.hasFocus=function(){return this.root.activeElement==this.dom};
/**
    Focus the editor.
    */t.prototype.focus=function(){if(this.editable)focusPreventScroll(this.dom);this.domSel.sync()};Object.defineProperty(t.prototype,"root",{
/**
        Get the document root in which the editor exists. This will
        usually be the top-level `document`, but might be a [shadow
        DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
        root if the editor is inside one.
        */
get:function(){var t=this.dom.isConnected!==false;if(!t)this._root=null;var e=this._root;if(e==null&&t){var r=function(t){if(t.nodeType==9||t.nodeType==11&&t.host){if(!t.getSelection)Object.getPrototypeOf(t).getSelection=function(){return t.ownerDocument.getSelection()};return{value:n._root=t}}};var n=this;for(var i=this.dom.parentNode;i;i=i.parentNode){var a=r(i);if(typeof a==="object")return a.value}}return e||document},enumerable:false,configurable:true});
/**
    When an existing editor view is moved to a new document or
    shadow tree, call this to make it recompute its root.
    */t.prototype.updateRoot=function(){this._root=null};
/**
    Given a pair of viewport coordinates, return the document
    position that corresponds to them. May return null if the given
    coordinates aren't inside of the editor. When an object is
    returned, its `pos` property is the position nearest to the
    coordinates, and its `inside` property holds the position of the
    inner node that the position falls inside of, or -1 if it is at
    the top level, not in any node.
    */t.prototype.posAtCoords=function(t){return posAtCoords(this,t)};
/**
    Returns the viewport rectangle at a given document position.
    `left` and `right` will be the same number, as this returns a
    flat cursor-ish rectangle. If the position is between two things
    that aren't directly adjacent, `side` determines which element
    is used. When < 0, the element before the position is used,
    otherwise the element after.
    */t.prototype.coordsAtPos=function(t,e){if(e===void 0){e=1}return coordsAtPos(this,t,e)};
/**
    Find the DOM position that corresponds to the given document
    position. When `side` is negative, find the position as close as
    possible to the content before the position. When positive,
    prefer positions close to the content after the position. When
    zero, prefer as shallow a position as possible.
    
    Note that you should **not** mutate the editor's internal DOM,
    only inspect it (and even that is usually not necessary).
    */t.prototype.domAtPos=function(t,e){if(e===void 0){e=0}return this.docView.domFromPos(t,e)};
/**
    Find the DOM node that represents the document node after the
    given position. May return `null` when the position doesn't point
    in front of a node or if the node is inside an opaque node view.
    
    This is intended to be able to call things like
    `getBoundingClientRect` on that DOM node. Do **not** mutate the
    editor DOM directly, or add styling this way, since that will be
    immediately overriden by the editor as it redraws the node.
    */t.prototype.nodeDOM=function(t){var e=this.docView.descAt(t);return e?e.nodeDOM:null};
/**
    Find the document position that corresponds to a given DOM
    position. (Whenever possible, it is preferable to inspect the
    document structure directly, rather than poking around in the
    DOM, but sometimes—for example when interpreting an event
    target—you don't have a choice.)
    
    The `bias` parameter can be used to influence which side of a DOM
    node to use when the position is inside a leaf node.
    */t.prototype.posAtDOM=function(t,e,r){if(r===void 0){r=-1}var n=this.docView.posFromDOM(t,e,r);if(n==null)throw new RangeError("DOM position not inside the editor");return n};
/**
    Find out whether the selection is at the end of a textblock when
    moving in a given direction. When, for example, given `"left"`,
    it will return true if moving left from the current cursor
    position would leave that position's parent textblock. Will apply
    to the view's current state by default, but it is possible to
    pass a different state.
    */t.prototype.endOfTextblock=function(t,e){return endOfTextblock(this,e||this.state,t)};
/**
    Run the editor's paste logic with the given HTML string. The
    `event`, if given, will be passed to the
    [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
    */t.prototype.pasteHTML=function(t,e){return doPaste(this,"",t,false,e||new ClipboardEvent("paste"))};
/**
    Run the editor's paste logic with the given plain-text input.
    */t.prototype.pasteText=function(t,e){return doPaste(this,t,null,true,e||new ClipboardEvent("paste"))};
/**
    Serialize the given slice as it would be if it was copied from
    this editor. Returns a DOM element that contains a
    representation of the slice as its children, a textual
    representation, and the transformed slice (which can be
    different from the given input due to hooks like
    [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
    */t.prototype.serializeForClipboard=function(t){return serializeForClipboard(this,t)};
/**
    Removes the editor from the DOM and destroys all [node
    views](https://prosemirror.net/docs/ref/#view.NodeView).
    */t.prototype.destroy=function(){if(!this.docView)return;destroyInput(this);// disconnects this.domObserver
this.domSel.destroy();this.destroyPluginViews();if(this.mounted){this.docView.update(this.state.doc,[],viewDecorations(this),this,-1);this.dom.textContent=""}else if(this.dom.parentNode){this.dom.parentNode.removeChild(this.dom)}this.docView.destroy();this.docView=null;clearReusedRange()};Object.defineProperty(t.prototype,"isDestroyed",{
/**
        This is true when the view has been
        [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
        used anymore).
        */
get:function(){return this.docView==null},enumerable:false,configurable:true});
/**
    Used for testing.
    */t.prototype.dispatchEvent=function(t){return dispatchEvent(this,t)};
/**
    @internal
    */t.prototype.domSelection=function(){return this.root.getSelection()};return t}();EditorView.prototype.dispatch=function(t){var e=this._props.dispatchTransaction;if(e)e.call(this,t);else this.updateState(this.state.apply(t))};function computeDocDeco(t){var e=Object.create(null);e.class="ProseMirror";e.contenteditable=String(t.editable);t.someProp("attributes",(function(r){if(typeof r=="function")r=r(t.state);if(r)for(var n in r){if(n=="class")e.class+=" "+r[n];else if(n=="style")e.style=(e.style?e.style+";":"")+r[n];else if(!e[n]&&n!="contenteditable"&&n!="nodeName")e[n]=String(r[n])}}));if(!e.translate)e.translate="no";return[Decoration.node(0,t.state.doc.content.size,e)]}function updateCursorWrapper(t){if(t.markCursor){var e=document.createElement("img");e.className="ProseMirror-separator";e.setAttribute("mark-placeholder","true");e.setAttribute("alt","");t.cursorWrapper={dom:e,deco:Decoration.widget(t.state.selection.from,e,{raw:true,marks:t.markCursor})}}else{t.cursorWrapper=null}}function getEditable(t){return!t.someProp("editable",(function(e){return e(t.state)===false}))}function selectionContextChanged(t,e){var r=Math.min(t.$anchor.sharedDepth(t.head),e.$anchor.sharedDepth(e.head));return t.$anchor.start(r)!=e.$anchor.start(r)}function buildNodeViews(t){var e=Object.create(null);function r(t){for(var r in t)if(!Object.prototype.hasOwnProperty.call(e,r))e[r]=t[r]}t.someProp("nodeViews",r);t.someProp("markViews",r);return e}function changedNodeViews(t,e){var r=0,n=0;for(var i in t){if(t[i]!=e[i])return true;r++}for(var a in e)n++;return r!=n}function checkStateComponent(t){if(t.spec.state||t.spec.filterTransaction||t.spec.appendTransaction)throw new RangeError("Plugins passed directly to the view must not have a state component")}var base={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};var shift={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'};var mac$1=typeof navigator!="undefined"&&/Mac/.test(navigator.platform);var ie=typeof navigator!="undefined"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
// Fill in the digit keys
for(var i=0;i<10;i++)base[48+i]=base[96+i]=String(i);
// The function keys
for(var i=1;i<=24;i++)base[i+111]="F"+i;
// And the alphabetic keys
for(var i=65;i<=90;i++){base[i]=String.fromCharCode(i+32);shift[i]=String.fromCharCode(i)}
// For each code that doesn't have a shift-equivalent, copy the base name
for(var code in base)if(!shift.hasOwnProperty(code))shift[code]=base[code];function keyName(t){
// On macOS, keys held with Shift and Cmd don't reflect the effect of Shift in `.key`.
// On IE, shift effect is never included in `.key`.
var e=mac$1&&t.metaKey&&t.shiftKey&&!t.ctrlKey&&!t.altKey||ie&&t.shiftKey&&t.key&&t.key.length==1||t.key=="Unidentified";var r=!e&&t.key||(t.shiftKey?shift:base)[t.keyCode]||t.key||"Unidentified";
// Edge sometimes produces wrong names (Issue #3)
if(r=="Esc")r="Escape";if(r=="Del")r="Delete";
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
if(r=="Left")r="ArrowLeft";if(r=="Up")r="ArrowUp";if(r=="Right")r="ArrowRight";if(r=="Down")r="ArrowDown";return r}var mac=typeof navigator!="undefined"&&/Mac|iP(hone|[oa]d)/.test(navigator.platform);var windows=typeof navigator!="undefined"&&/Win/.test(navigator.platform);function normalizeKeyName$1(t){var e=t.split(/-(?!$)/),r=e[e.length-1];if(r=="Space")r=" ";var n,i,a,o;for(var u=0;u<e.length-1;u++){var s=e[u];if(/^(cmd|meta|m)$/i.test(s))o=true;else if(/^a(lt)?$/i.test(s))n=true;else if(/^(c|ctrl|control)$/i.test(s))i=true;else if(/^s(hift)?$/i.test(s))a=true;else if(/^mod$/i.test(s)){if(mac)o=true;else i=true}else throw new Error("Unrecognized modifier name: "+s)}if(n)r="Alt-"+r;if(i)r="Ctrl-"+r;if(o)r="Meta-"+r;if(a)r="Shift-"+r;return r}function normalize(t){var e=Object.create(null);for(var r in t)e[normalizeKeyName$1(r)]=t[r];return e}function modifiers(t,e,r){if(r===void 0){r=true}if(e.altKey)t="Alt-"+t;if(e.ctrlKey)t="Ctrl-"+t;if(e.metaKey)t="Meta-"+t;if(r&&e.shiftKey)t="Shift-"+t;return t}
/**
Create a keymap plugin for the given set of bindings.

Bindings should map key names to [command](https://prosemirror.net/docs/ref/#commands)-style
functions, which will be called with `(EditorState, dispatch,
EditorView)` arguments, and should return true when they've handled
the key. Note that the view argument isn't part of the command
protocol, but can be used as an escape hatch if a binding needs to
directly interact with the UI.

Key names may be strings like `"Shift-Ctrl-Enter"`—a key
identifier prefixed with zero or more modifiers. Key identifiers
are based on the strings that can appear in
[`KeyEvent.key`](https:developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key).
Use lowercase letters to refer to letter keys (or uppercase letters
if you want shift to be held). You may use `"Space"` as an alias
for the `" "` name.

Modifiers can be given in any order. `Shift-` (or `s-`), `Alt-` (or
`a-`), `Ctrl-` (or `c-` or `Control-`) and `Cmd-` (or `m-` or
`Meta-`) are recognized. For characters that are created by holding
shift, the `Shift-` prefix is implied, and should not be added
explicitly.

You can use `Mod-` as a shorthand for `Cmd-` on Mac and `Ctrl-` on
other platforms.

You can add multiple keymap plugins to an editor. The order in
which they appear determines their precedence (the ones early in
the array get to dispatch first).
*/function keymap(t){return new Plugin({props:{handleKeyDown:keydownHandler(t)}})}
/**
Given a set of bindings (using the same format as
[`keymap`](https://prosemirror.net/docs/ref/#keymap.keymap)), return a [keydown
handler](https://prosemirror.net/docs/ref/#view.EditorProps.handleKeyDown) that handles them.
*/function keydownHandler(t){var e=normalize(t);return function(t,r){var n=keyName(r),i,a=e[modifiers(n,r)];if(a&&a(t.state,t.dispatch,t))return true;
// A character key
if(n.length==1&&n!=" "){if(r.shiftKey){
// In case the name was already modified by shift, try looking
// it up without its shift modifier
var o=e[modifiers(n,r,false)];if(o&&o(t.state,t.dispatch,t))return true}if((r.altKey||r.metaKey||r.ctrlKey)&&
// Ctrl-Alt may be used for AltGr on Windows
!(windows&&r.ctrlKey&&r.altKey)&&(i=base[r.keyCode])&&i!=n){
// Try falling back to the keyCode when there's a modifier
// active or the character produced isn't ASCII, and our table
// produces a different name from the the keyCode. See #668,
// #1060, #1529.
var u=e[modifiers(i,r)];if(u&&u(t.state,t.dispatch,t))return true}}return false}}var GOOD_LEAF_SIZE=200;
// :: class<T> A rope sequence is a persistent sequence data structure
// that supports appending, prepending, and slicing without doing a
// full copy. It is represented as a mostly-balanced tree.
var RopeSequence=function t(){};RopeSequence.prototype.append=function t(e){if(!e.length){return this}e=RopeSequence.from(e);return!this.length&&e||e.length<GOOD_LEAF_SIZE&&this.leafAppend(e)||this.length<GOOD_LEAF_SIZE&&e.leafPrepend(this)||this.appendInner(e)};
// :: (union<[T], RopeSequence<T>>) → RopeSequence<T>
// Prepend an array or other rope to this one, returning a new rope.
RopeSequence.prototype.prepend=function t(e){if(!e.length){return this}return RopeSequence.from(e).append(this)};RopeSequence.prototype.appendInner=function t(e){return new Append(this,e)};
// :: (?number, ?number) → RopeSequence<T>
// Create a rope repesenting a sub-sequence of this rope.
RopeSequence.prototype.slice=function t(e,r){if(e===void 0)e=0;if(r===void 0)r=this.length;if(e>=r){return RopeSequence.empty}return this.sliceInner(Math.max(0,e),Math.min(this.length,r))};
// :: (number) → T
// Retrieve the element at the given position from this rope.
RopeSequence.prototype.get=function t(e){if(e<0||e>=this.length){return undefined}return this.getInner(e)};
// :: ((element: T, index: number) → ?bool, ?number, ?number)
// Call the given function for each element between the given
// indices. This tends to be more efficient than looping over the
// indices and calling `get`, because it doesn't have to descend the
// tree for every element.
RopeSequence.prototype.forEach=function t(e,r,n){if(r===void 0)r=0;if(n===void 0)n=this.length;if(r<=n){this.forEachInner(e,r,n,0)}else{this.forEachInvertedInner(e,r,n,0)}};
// :: ((element: T, index: number) → U, ?number, ?number) → [U]
// Map the given functions over the elements of the rope, producing
// a flat array.
RopeSequence.prototype.map=function t(e,r,n){if(r===void 0)r=0;if(n===void 0)n=this.length;var i=[];this.forEach((function(t,r){return i.push(e(t,r))}),r,n);return i};
// :: (?union<[T], RopeSequence<T>>) → RopeSequence<T>
// Create a rope representing the given array, or return the rope
// itself if a rope was given.
RopeSequence.from=function t(e){if(e instanceof RopeSequence){return e}return e&&e.length?new Leaf(e):RopeSequence.empty};var Leaf=function(t){function e(e){t.call(this);this.values=e}if(t)e.__proto__=t;e.prototype=Object.create(t&&t.prototype);e.prototype.constructor=e;var r={length:{configurable:true},depth:{configurable:true}};e.prototype.flatten=function t(){return this.values};e.prototype.sliceInner=function t(r,n){if(r==0&&n==this.length){return this}return new e(this.values.slice(r,n))};e.prototype.getInner=function t(e){return this.values[e]};e.prototype.forEachInner=function t(e,r,n,i){for(var a=r;a<n;a++){if(e(this.values[a],i+a)===false){return false}}};e.prototype.forEachInvertedInner=function t(e,r,n,i){for(var a=r-1;a>=n;a--){if(e(this.values[a],i+a)===false){return false}}};e.prototype.leafAppend=function t(r){if(this.length+r.length<=GOOD_LEAF_SIZE){return new e(this.values.concat(r.flatten()))}};e.prototype.leafPrepend=function t(r){if(this.length+r.length<=GOOD_LEAF_SIZE){return new e(r.flatten().concat(this.values))}};r.length.get=function(){return this.values.length};r.depth.get=function(){return 0};Object.defineProperties(e.prototype,r);return e}(RopeSequence);
// :: RopeSequence
// The empty rope sequence.
RopeSequence.empty=new Leaf([]);var Append=function(t){function e(e,r){t.call(this);this.left=e;this.right=r;this.length=e.length+r.length;this.depth=Math.max(e.depth,r.depth)+1}if(t)e.__proto__=t;e.prototype=Object.create(t&&t.prototype);e.prototype.constructor=e;e.prototype.flatten=function t(){return this.left.flatten().concat(this.right.flatten())};e.prototype.getInner=function t(e){return e<this.left.length?this.left.get(e):this.right.get(e-this.left.length)};e.prototype.forEachInner=function t(e,r,n,i){var a=this.left.length;if(r<a&&this.left.forEachInner(e,r,Math.min(n,a),i)===false){return false}if(n>a&&this.right.forEachInner(e,Math.max(r-a,0),Math.min(this.length,n)-a,i+a)===false){return false}};e.prototype.forEachInvertedInner=function t(e,r,n,i){var a=this.left.length;if(r>a&&this.right.forEachInvertedInner(e,r-a,Math.max(n,a)-a,i+a)===false){return false}if(n<a&&this.left.forEachInvertedInner(e,Math.min(r,a),n,i)===false){return false}};e.prototype.sliceInner=function t(e,r){if(e==0&&r==this.length){return this}var n=this.left.length;if(r<=n){return this.left.slice(e,r)}if(e>=n){return this.right.slice(e-n,r-n)}return this.left.slice(e,n).append(this.right.slice(0,r-n))};e.prototype.leafAppend=function t(r){var n=this.right.leafAppend(r);if(n){return new e(this.left,n)}};e.prototype.leafPrepend=function t(r){var n=this.left.leafPrepend(r);if(n){return new e(n,this.right)}};e.prototype.appendInner=function t(r){if(this.left.depth>=Math.max(this.right.depth,r.depth)+1){return new e(this.left,new e(this.right,r))}return new e(this,r)};return e}(RopeSequence);
// ProseMirror's history isn't simply a way to roll back to a previous
// state, because ProseMirror supports applying changes without adding
// them to the history (for example during collaboration).

// To this end, each 'Branch' (one for the undo history and one for
// the redo history) keeps an array of 'Items', which can optionally
// hold a step (an actual undoable change), and always hold a position
// map (which is needed to move changes below them to apply to the
// current document).

// An item that has both a step and a selection bookmark is the start
// of an 'event' — a group of changes that will be undone or redone at
// once. (It stores only the bookmark, since that way we don't have to
// provide a document until the selection is actually applied, which
// is useful when compressing.)
// Used to schedule history compression
var max_empty_items=500;var Branch=/** @class */function(){function t(t,e){this.items=t;this.eventCount=e}
// Pop the latest event off the branch's history and apply it
// to a document transform.
t.prototype.popEvent=function(e,r){var n=this;if(this.eventCount==0)return null;var i=this.items.length;for(;;i--){var a=this.items.get(i-1);if(a.selection){--i;break}}var o,u;if(r){o=this.remapping(i,this.items.length);u=o.maps.length}var s=e.tr;var f,l;var c=[],v=[];this.items.forEach((function(e,r){if(!e.step){if(!o){o=n.remapping(i,r+1);u=o.maps.length}u--;v.push(e);return}if(o){v.push(new Item(e.map));var a=e.step.map(o.slice(u)),h=void 0;if(a&&s.maybeStep(a).doc){h=s.mapping.maps[s.mapping.maps.length-1];c.push(new Item(h,undefined,undefined,c.length+v.length))}u--;if(h)o.appendMap(h,u)}else{s.maybeStep(e.step)}if(e.selection){f=o?e.selection.map(o.slice(u)):e.selection;l=new t(n.items.slice(0,i).append(v.reverse().concat(c)),n.eventCount-1);return false}}),this.items.length,0);return{remaining:l,transform:s,selection:f}};
// Create a new branch with the given transform added.
t.prototype.addTransform=function(e,r,n,i){var a=[],o=this.eventCount;var u=this.items,s=!i&&u.length?u.get(u.length-1):null;for(var f=0;f<e.steps.length;f++){var l=e.steps[f].invert(e.docs[f]);var c=new Item(e.mapping.maps[f],l,r),v=void 0;if(v=s&&s.merge(c)){c=v;if(f)a.pop();else u=u.slice(0,u.length-1)}a.push(c);if(r){o++;r=undefined}if(!i)s=c}var h=o-n.depth;if(h>DEPTH_OVERFLOW){u=cutOffEvents(u,h);o-=h}return new t(u.append(a),o)};t.prototype.remapping=function(t,e){var r=new Mapping;this.items.forEach((function(e,n){var i=e.mirrorOffset!=null&&n-e.mirrorOffset>=t?r.maps.length-e.mirrorOffset:undefined;r.appendMap(e.map,i)}),t,e);return r};t.prototype.addMaps=function(e){if(this.eventCount==0)return this;return new t(this.items.append(e.map((function(t){return new Item(t)}))),this.eventCount)};
// When the collab module receives remote changes, the history has
// to know about those, so that it can adjust the steps that were
// rebased on top of the remote changes, and include the position
// maps for the remote changes in its array of items.
t.prototype.rebased=function(e,r){if(!this.eventCount)return this;r=Math.min(this.items.length,r);var n=[],i=this.items.length-r;var a=e.mapping;var o=e.steps.length;var u=this.eventCount;this.items.forEach((function(t){if(t.selection)u--}),i);var s=r;this.items.forEach((function(t){var r=a.getMirror(--s);if(r==null)return;o=Math.min(o,r);var i=a.maps[r];if(t.step){var f=e.steps[r].invert(e.docs[r]);var l=t.selection&&t.selection.map(a.slice(s+1,r));if(l)u++;n.push(new Item(i,f,l))}else{n.push(new Item(i))}}),i);var f=[];for(var l=r;l<o;l++)f.push(new Item(a.maps[l]));var c=this.items.slice(0,i).append(f).append(n);var v=new t(c,u);if(v.emptyItemCount()>max_empty_items)v=v.compress(this.items.length-n.length);return v};t.prototype.emptyItemCount=function(){var t=0;this.items.forEach((function(e){if(!e.step)t++}));return t};
// Compressing a branch means rewriting it to push the air (map-only
// items) out. During collaboration, these naturally accumulate
// because each remote change adds one. The `upto` argument is used
// to ensure that only the items below a given level are compressed,
// because `rebased` relies on a clean, untouched set of items in
// order to associate old items with rebased steps.
t.prototype.compress=function(e){if(e===void 0){e=this.items.length}var r=this.remapping(0,e),n=r.maps.length;var i=[],a=0;this.items.forEach((function(t,o){if(o>=e){i.push(t);if(t.selection)a++}else if(t.step){var u=t.step.map(r.slice(n)),s=u&&u.getMap();n--;if(s)r.appendMap(s,n);if(u){var f=t.selection&&t.selection.map(r.slice(n));if(f)a++;var l=new Item(s.invert(),u,f),c=void 0,v=i.length-1;if(c=i.length&&i[v].merge(l))i[v]=c;else i.push(l)}}else if(t.map){n--}}),this.items.length,0);return new t(RopeSequence.from(i.reverse()),a)};return t}();Branch.empty=new Branch(RopeSequence.empty,0);function cutOffEvents(t,e){var r;t.forEach((function(t,n){if(t.selection&&e--==0){r=n;return false}}));return t.slice(r)}var Item=/** @class */function(){function t(
// The (forward) step map for this item.
t,
// The inverted step
e,
// If this is non-null, this item is the start of a group, and
// this selection is the starting selection for the group (the one
// that was active before the first step was applied)
r,
// If this item is the inverse of a previous mapping on the stack,
// this points at the inverse's offset
n){this.map=t;this.step=e;this.selection=r;this.mirrorOffset=n}t.prototype.merge=function(e){if(this.step&&e.step&&!e.selection){var r=e.step.merge(this.step);if(r)return new t(r.getMap().invert(),r,this.selection)}};return t}();
// The value of the state field that tracks undo/redo history for that
// state. Will be stored in the plugin state when the history plugin
// is active.
var HistoryState=/** @class */function(){function t(t,e,r,n,i){this.done=t;this.undone=e;this.prevRanges=r;this.prevTime=n;this.prevComposition=i}return t}();var DEPTH_OVERFLOW=20;
// Record a transformation in undo history.
function applyTransaction(t,e,r,n){var i=r.getMeta(historyKey),a;if(i)return i.historyState;if(r.getMeta(closeHistoryKey))t=new HistoryState(t.done,t.undone,null,0,-1);var o=r.getMeta("appendedTransaction");if(r.steps.length==0){return t}else if(o&&o.getMeta(historyKey)){if(o.getMeta(historyKey).redo)return new HistoryState(t.done.addTransform(r,undefined,n,mustPreserveItems(e)),t.undone,rangesFor(r.mapping.maps),t.prevTime,t.prevComposition);else return new HistoryState(t.done,t.undone.addTransform(r,undefined,n,mustPreserveItems(e)),null,t.prevTime,t.prevComposition)}else if(r.getMeta("addToHistory")!==false&&!(o&&o.getMeta("addToHistory")===false)){
// Group transforms that occur in quick succession into one event.
var u=r.getMeta("composition");var s=t.prevTime==0||!o&&t.prevComposition!=u&&(t.prevTime<(r.time||0)-n.newGroupDelay||!isAdjacentTo(r,t.prevRanges));var f=o?mapRanges(t.prevRanges,r.mapping):rangesFor(r.mapping.maps);return new HistoryState(t.done.addTransform(r,s?e.selection.getBookmark():undefined,n,mustPreserveItems(e)),Branch.empty,f,r.time,u==null?t.prevComposition:u)}else if(a=r.getMeta("rebased")){
// Used by the collab module to tell the history that some of its
// content has been rebased.
return new HistoryState(t.done.rebased(r,a),t.undone.rebased(r,a),mapRanges(t.prevRanges,r.mapping),t.prevTime,t.prevComposition)}else{return new HistoryState(t.done.addMaps(r.mapping.maps),t.undone.addMaps(r.mapping.maps),mapRanges(t.prevRanges,r.mapping),t.prevTime,t.prevComposition)}}function isAdjacentTo(t,e){if(!e)return false;if(!t.docChanged)return true;var r=false;t.mapping.maps[0].forEach((function(t,n){for(var i=0;i<e.length;i+=2)if(t<=e[i+1]&&n>=e[i])r=true}));return r}function rangesFor(t){var e=[];for(var r=t.length-1;r>=0&&e.length==0;r--)t[r].forEach((function(t,r,n,i){return e.push(n,i)}));return e}function mapRanges(t,e){if(!t)return null;var r=[];for(var n=0;n<t.length;n+=2){var i=e.map(t[n],1),a=e.map(t[n+1],-1);if(i<=a)r.push(i,a)}return r}
// Get a selection (valid in state.doc) at the end of the first change
// that we can determine a position for. Fall back to state.selection.
function selectionFromChanges(t,e){var r=function(r){var n=e.mapping.maps[r],i=-1;n.forEach((function(t,e){return i=e}));if(i<0){var a=e.steps[r];if(a instanceof AddMarkStep||a instanceof RemoveMarkStep)i=a.to}if(i>-1)return{value:Selection.near(t.doc.resolve(i))}};for(var n=0;n<e.steps.length;n++){var i=r(n);if(typeof i==="object")return i.value}return t.selection}
// Apply the latest event from one branch to the document and shift the event
// onto the other branch.
function histTransaction(t,e,r){var n=mustPreserveItems(e);var i=historyKey.get(e).spec.config;var a=(r?t.undone:t.done).popEvent(e,n);if(!a)return null;var o=a.selection.resolve(a.transform.doc);var u=(r?t.done:t.undone).addTransform(a.transform,selectionFromChanges(e,a.transform).getBookmark(),i,n);var s=new HistoryState(r?u:a.remaining,r?a.remaining:u,null,0,-1);return a.transform.setSelection(o).setMeta(historyKey,{redo:r,historyState:s})}var cachedPreserveItems=false,cachedPreserveItemsPlugins=null;
// Check whether any plugin in the given state has a
// `historyPreserveItems` property in its spec, in which case we must
// preserve steps exactly as they came in, so that they can be
// rebased.
function mustPreserveItems(t){var e=t.plugins;if(cachedPreserveItemsPlugins!=e){cachedPreserveItems=false;cachedPreserveItemsPlugins=e;for(var r=0;r<e.length;r++)if(e[r].spec.historyPreserveItems){cachedPreserveItems=true;break}}return cachedPreserveItems}
/**
Set a flag on the given transaction that will prevent further steps
from being appended to an existing history event (so that they
require a separate undo command to undo).
*/function closeHistory(t){return t.setMeta(closeHistoryKey,true)}var historyKey=new PluginKey("history");var closeHistoryKey=new PluginKey("closeHistory");
/**
Returns a plugin that enables the undo history for an editor. The
plugin will track undo and redo stacks, which can be used with the
[`undo`](https://prosemirror.net/docs/ref/#history.undo) and [`redo`](https://prosemirror.net/docs/ref/#history.redo) commands.

You can set an `"addToHistory"` [metadata
property](https://prosemirror.net/docs/ref/#state.Transaction.setMeta) of `false` on a transaction
to prevent it from being rolled back by undo.
*/function history(t){if(t===void 0){t={}}t={depth:t.depth||100,newGroupDelay:t.newGroupDelay||500};return new Plugin({key:historyKey,state:{init:function(){return new HistoryState(Branch.empty,Branch.empty,null,0,-1)},apply:function(e,r,n){return applyTransaction(r,n,e,t)}},config:t,props:{handleDOMEvents:{beforeinput:function(t,e){var r=e.inputType;var n=r=="historyUndo"?undo:r=="historyRedo"?redo:null;if(!n||!t.editable)return false;e.preventDefault();return n(t.state,t.dispatch)}}}})}function buildCommand(t,e){return function(r,n){var i=historyKey.getState(r);if(!i||(t?i.undone:i.done).eventCount==0)return false;if(n){var a=histTransaction(i,r,t);if(a)n(e?a.scrollIntoView():a)}return true}}
/**
A command function that undoes the last change, if any.
*/var undo=buildCommand(false,true);
/**
A command function that redoes the last undone change, if any.
*/var redo=buildCommand(true,true);
/**
Returns true if the given transaction was generated by the history
plugin.
*/function isHistoryTransaction(t){return t.getMeta(historyKey)!=null}
//#region src/helpers/createChainableState.ts
/**
* Takes a Transaction & Editor State and turns it into a chainable state object
* @param config The transaction and state to create the chainable state from
* @returns A chainable Editor state object
*/function createChainableState(t){var e=t.state,r=t.transaction;var n=r.selection;var i=r.doc;var a=r.storedMarks;return __assign(__assign({},e),{apply:e.apply.bind(e),applyTransaction:e.applyTransaction.bind(e),plugins:e.plugins,schema:e.schema,reconfigure:e.reconfigure.bind(e),toJSON:e.toJSON.bind(e),get storedMarks(){return a},get selection(){return n},get doc(){return i},get tr(){n=r.selection;i=r.doc;a=r.storedMarks;return r}})}
//#endregion
//#region src/CommandManager.ts
var CommandManager=/** @class */function(){function t(t){this.editor=t.editor;this.rawCommands=this.editor.extensionManager.commands;this.customState=t.state}Object.defineProperty(t.prototype,"hasCustomState",{get:function(){return!!this.customState},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"state",{get:function(){return this.customState||this.editor.state},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"commands",{get:function(){var t=this;var e=this,r=e.rawCommands,n=e.editor,i=e.state;var a=n.view;var o=i.tr;var u=this.buildProps(o);return Object.fromEntries(Object.entries(r).map((function(e){var r=e[0],n=e[1];var i=function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var i=n.apply(void 0,e)(u);if(!o.getMeta("preventDispatch")&&!t.hasCustomState)a.dispatch(o);return i};return[r,i]})))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"chain",{get:function(){var t=this;return function(){return t.createChain()}},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"can",{get:function(){var t=this;return function(){return t.createCan()}},enumerable:false,configurable:true});t.prototype.createChain=function(t,e){var r=this;if(e===void 0){e=true}var n=this,i=n.rawCommands,a=n.editor,o=n.state;var u=a.view;var s=[];var f=!!t;var l=t||o.tr;var c=function(){if(!f&&e&&!l.getMeta("preventDispatch")&&!r.hasCustomState)u.dispatch(l);return s.every((function(t){return t===true}))};var v=__assign(__assign({},Object.fromEntries(Object.entries(i).map((function(t){var n=t[0],i=t[1];var a=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}var a=r.buildProps(l,e);var o=i.apply(void 0,t)(a);s.push(o);return v};return[n,a]})))),{run:c});return v};
/**
    * Creates a chain that safely returns `false` when run.
    * @returns A non-dispatching command chain.
    * @example
    * const chain = CommandManager.createFakeChain()
    * chain.focus().run() // false
    */t.createFakeChain=function(){var t=new Proxy({},{get:function(e,r){if(r==="then")return;if(r==="run")return function(){return false};return function(){return t}}});return t};t.prototype.createCan=function(t){var e=this;var r=this,n=r.rawCommands,i=r.state;var a=false;var o=t||i.tr;var u=this.buildProps(o,a);return __assign(__assign({},Object.fromEntries(Object.entries(n).map((function(t){var e=t[0],r=t[1];return[e,function(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}return r.apply(void 0,t)(__assign(__assign({},u),{dispatch:void 0}))}]})))),{chain:function(){return e.createChain(o,a)}})};
/**
    * Creates capability checks that safely return `false`.
    * @returns A non-dispatching capability checker.
    * @example
    * const can = CommandManager.createFallbackCan()
    * can.focus() // false
    */t.createFallbackCan=function(){var e=t.createFakeChain();return new Proxy({chain:function(){return e}},{get:function(t,e){if(e==="then")return;if(e==="chain")return t.chain;return function(){return false}}})};t.prototype.buildProps=function(t,e){var r=this;if(e===void 0){e=true}var n=this,i=n.rawCommands,a=n.editor,o=n.state;var u=a.view;var s={tr:t,editor:a,view:u,state:createChainableState({state:o,transaction:t}),dispatch:e?function(){return void 0}:void 0,chain:function(){return r.createChain(t,e)},can:function(){return r.createCan(t)},get commands(){return Object.fromEntries(Object.entries(i).map((function(t){var e=t[0],r=t[1];return[e,function(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}return r.apply(void 0,t)(s)}]})))}};return s};return t}();
//#endregion
//#region src/commands/blur.ts
var blur=function(){return function(t){var e=t.editor,r=t.view;requestAnimationFrame((function(){if(!e.isDestroyed){var t;r.dom.blur();(t=window)===null||t===void 0||(t=t.getSelection())===null||t===void 0||t.removeAllRanges()}}));return true}};
//#endregion
//#region src/commands/clearContent.ts
var clearContent=function(t){if(t===void 0){t=true}return function(e){var r=e.commands;return r.setContent("",{emitUpdate:t})}};
//#endregion
//#region src/commands/clearNodes.ts
var clearNodes=function(){return function(t){var e=t.tr,r=t.dispatch;var n=e.selection;var i=n.ranges;if(!r)return true;var a=e.mapping.maps.length;i.forEach((function(t){var r=t.$from,n=t.$to;var i=r.pos;var o=n.pos;var u=e.mapping.slice(a);var s=1;e.doc.nodesBetween(u.map(i),u.map(o),(function(t,r){s=Math.max(s,e.doc.resolve(r).depth+1)}));var f=function(t){var r=e.doc;var n=e.mapping.maps.length;var u=e.mapping.slice(a);var s=n;var f=e.mapping.slice(n);var l=u.map(i);var c=u.map(o);r.nodesBetween(l,c,(function(t,r){if(t.type.isText)return;if(e.mapping.maps.length!==s){s=e.mapping.maps.length;f=e.mapping.slice(n)}var i=e.doc.resolve(f.map(r));var a=e.doc.resolve(f.map(r+t.nodeSize));var o=i.blockRange(a);if(!o)return;var u=liftTarget(o);if(t.type.isTextblock){var l=i.parent.contentMatchAt(i.index()).defaultType;var c=e.doc.nodeAt(o.start);if(l&&c&&!c.hasMarkup(l)&&l.validContent(c.content))e.setNodeMarkup(o.start,l)}if(u||u===0)e.lift(o,u)}));if(e.doc.eq(r))return"break"};for(var l=0;l<s;l+=1){var c=f(l);if(c==="break")break}}));return true}};
//#endregion
//#region src/commands/command.ts
var command=function(t){return function(e){return t(e)}};
//#endregion
//#region src/commands/createParagraphNear.ts
var createParagraphNear$1=function(){return function(t){var e=t.state,r=t.dispatch;return createParagraphNear(e,r)}};
//#endregion
//#region src/commands/cut.ts
var cut=function(t,e){return function(r){var n=r.editor,i=r.tr;var a=n.state;var o=a.doc.slice(t.from,t.to);i.deleteRange(t.from,t.to);var u=i.mapping.map(e);i.insert(u,o.content);i.setSelection(new TextSelection(i.doc.resolve(Math.max(u-1,0))));return true}};
//#endregion
//#region src/commands/deleteCurrentNode.ts
var deleteCurrentNode=function(){return function(t){var e=t.tr,r=t.dispatch;var n=e.selection;var i=n.$anchor.node();if(i.content.size>0)return false;var a=e.selection.$anchor;for(var o=a.depth;o>0;o-=1)if(a.node(o).type===i.type){if(r){var u=a.before(o);var s=a.after(o);e.delete(u,s).scrollIntoView()}return true}return false}};
//#endregion
//#region src/helpers/getNodeType.ts
function getNodeType(t,e){if(typeof t==="string"){if(!e.nodes[t])throw Error("There is no node type named '".concat(t,"'. Maybe you forgot to add the extension?"));return e.nodes[t]}return t}
//#endregion
//#region src/commands/deleteNode.ts
var deleteNode=function(t){return function(e){var r=e.tr,n=e.state,i=e.dispatch;var a=getNodeType(t,n.schema);var o=r.selection.$anchor;for(var u=o.depth;u>0;u-=1)if(o.node(u).type===a){if(i){var s=o.before(u);var f=o.after(u);r.delete(s,f).scrollIntoView()}return true}return false}};
//#endregion
//#region src/commands/deleteRange.ts
var deleteRange=function(t){return function(e){var r=e.tr,n=e.dispatch;var i=t.from,a=t.to;if(n)r.delete(i,a);return true}};
//#endregion
//#region src/commands/deleteSelection.ts
/**
* Check if a node has text content based on its content specification.
* Returns true if the node's content spec matches text* or text+ patterns.
*/var hasTextContent=function(t){if(!t.content)return false;return/^text(\*|\+)/.test(t.content)};
/**
* Expand selection position for a specific side (left or right) to handle inline text nodes.
* This function checks if the position is within an inline node with text content and
* expands it to include the entire node boundaries for proper deletion.
* @param $pos - The resolved position to expand
* @param schema - The ProseMirror schema
* @param side - Which side to expand ('left' or 'right')
* @returns The expanded position for deletion
*/var expandSelectionForSide=function(t,e,r){if(!t.parent.isInline)return t.pos;if(r==="left"&&t.pos>t.start()||r==="right"&&t.pos<t.end())return t.pos;var n=e.nodes[t.parent.type.name].spec;if(!hasTextContent(n))return t.pos;return r==="left"?t.start()-1:t.end()+1};
/**
* Expand selection range to properly handle deletion of inline text nodes.
* Inline text nodes don't collapse correctly when text inside is deleted,
* so we need to expand the selection to include the entire node.
* See: https://code.haverbeke.berlin/prosemirror/prosemirror/issues/1365
*/var expandSelectionForInlineText=function(t,e,r){return{from:expandSelectionForSide(t,r,"left"),to:expandSelectionForSide(e,r,"right")}};var deleteSelection=function(){return function(t){var e=t.state,r=t.dispatch;if(e.selection.empty)return false;if(r){var n=e.tr;var i=e.selection.ranges;var a=e.selection instanceof TextSelection?e.selection.$from.marksAcross(e.selection.$to):null;var o=n.steps.length;i.forEach((function(t){var r=n.mapping.slice(o);var i=n.doc.resolve(r.map(t.$from.pos));var a=n.doc.resolve(r.map(t.$to.pos));var u=expandSelectionForInlineText(i,a,e.schema),s=u.from,f=u.to;n.deleteRange(s,f)}));if(!n.selection.empty)n.setSelection(TextSelection.near(n.doc.resolve(n.selection.from)));if(a)n.ensureMarks(a);n.scrollIntoView();r(n)}return true}};
//#endregion
//#region src/commands/enter.ts
var enter=function(){return function(t){var e=t.commands;return e.keyboardShortcut("Enter")}};
//#endregion
//#region src/commands/exitCode.ts
var exitCode$1=function(){return function(t){var e=t.state,r=t.dispatch;return exitCode(e,r)}};
//#endregion
//#region src/utilities/isRegExp.ts
function isRegExp(t){return Object.prototype.toString.call(t)==="[object RegExp]"}
//#endregion
//#region src/utilities/objectIncludes.ts
/**
* Check if object1 includes object2
* @param object1 Object
* @param object2 Object
*/function objectIncludes(t,e,r){if(r===void 0){r={strict:true}}var n=Object.keys(e);if(!n.length)return true;return n.every((function(n){if(r.strict)return e[n]===t[n];if(isRegExp(e[n]))return e[n].test(t[n]);return e[n]===t[n]}))}
//#endregion
//#region src/helpers/getMarkRange.ts
function findMarkInSet(t,e,r){if(r===void 0){r={}}return t.find((function(t){return t.type===e&&objectIncludes(Object.fromEntries(Object.keys(r).map((function(e){return[e,t.attrs[e]]}))),r)}))}function isMarkInSet(t,e,r){if(r===void 0){r={}}return!!findMarkInSet(t,e,r)}
/**
* Get the range of a mark at a resolved position.
*/function getMarkRange(t,e,r){if(!t||!e)return;var n=t.parent.childAfter(t.parentOffset);if(!n.node||!n.node.marks.some((function(t){return t.type===e})))n=t.parent.childBefore(t.parentOffset);if(!n.node||!n.node.marks.some((function(t){return t.type===e})))return;if(!r){var i=n.node.marks.find((function(t){return t.type===e}));if(i)r=i.attrs}if(!findMarkInSet(__spreadArray([],n.node.marks,true),e,r))return;var a=n.index;var o=t.start()+n.offset;var u=a+1;var s=o+n.node.nodeSize;while(a>0&&isMarkInSet(__spreadArray([],t.parent.child(a-1).marks,true),e,r)){a-=1;o-=t.parent.child(a).nodeSize}while(u<t.parent.childCount&&isMarkInSet(__spreadArray([],t.parent.child(u).marks,true),e,r)){s+=t.parent.child(u).nodeSize;u+=1}return{from:o,to:s}}
//#endregion
//#region src/helpers/getMarkType.ts
function getMarkType(t,e){if(typeof t==="string"){if(!e.marks[t])throw Error("There is no mark type named '".concat(t,"'. Maybe you forgot to add the extension?"));return e.marks[t]}return t}
//#endregion
//#region src/commands/extendMarkRange.ts
var extendMarkRange=function(t,e){return function(r){var n=r.tr,i=r.state,a=r.dispatch;var o=getMarkType(t,i.schema);var u=n.doc,s=n.selection;var f=s.$from,l=s.from,c=s.to;if(a){var v=getMarkRange(f,o,e);if(v&&v.from<=l&&v.to>=c){var h=TextSelection.create(u,v.from,v.to);n.setSelection(h)}}return true}};
//#endregion
//#region src/commands/first.ts
var first=function(t){return function(e){var r=typeof t==="function"?t(e):t;for(var n=0;n<r.length;n+=1)if(r[n](e))return true;return false}};
//#endregion
//#region src/helpers/isTextSelection.ts
function isTextSelection(t){return t instanceof TextSelection}
//#endregion
//#region src/utilities/minMax.ts
function minMax(t,e,r){if(t===void 0){t=0}if(e===void 0){e=0}if(r===void 0){r=0}return Math.min(Math.max(t,e),r)}
//#endregion
//#region src/helpers/resolveFocusPosition.ts
function resolveFocusPosition(t,e){if(e===void 0){e=null}if(!e)return null;var r=Selection.atStart(t);var n=Selection.atEnd(t);if(e==="start"||e===true)return r;if(e==="end")return n;var i=r.from;var a=n.to;if(e==="all")return TextSelection.create(t,minMax(0,i,a),minMax(t.content.size,i,a));return TextSelection.create(t,minMax(e,i,a),minMax(e,i,a))}
//#endregion
//#region src/utilities/isAndroid.ts
function isAndroid(){return["Android"].includes(navigator.platform)||/android/i.test(navigator.userAgent)}
//#endregion
//#region src/utilities/isiOS.ts
function isiOS(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}
//#endregion
//#region src/utilities/isSafari.ts
/**
* Detects if the current browser is Safari (but not iOS Safari or Chrome).
* @returns `true` if the browser is Safari, `false` otherwise.
* @example
* if (isSafari()) {
*   // Safari-specific handling
* }
*/function isSafari(){return typeof navigator!=="undefined"?/^((?!chrome|android).)*safari/i.test(navigator.userAgent):false}
//#endregion
//#region src/commands/focus.ts
var focus=function(t,e){if(t===void 0){t=null}if(e===void 0){e={}}return function(r){var n=r.editor,i=r.view,a=r.tr,o=r.dispatch;e=__assign({scrollIntoView:true},e);var u=function(){if(isiOS()||isAndroid())i.dom.focus();if(isSafari()&&!isiOS()&&!isAndroid())i.dom.focus({preventScroll:true});requestAnimationFrame((function(){if(!n.isDestroyed){i.focus();if(e===null||e===void 0?void 0:e.scrollIntoView)n.commands.scrollIntoView()}}))};try{if(i.hasFocus()&&t===null||t===false)return true}catch(t){return false}if(o&&t===null&&!isTextSelection(n.state.selection)){u();return true}var s=resolveFocusPosition(a.doc,t)||n.state.selection;var f=n.state.selection.eq(s);if(o){if(!f)a.setSelection(s);if(f&&a.storedMarks)a.setStoredMarks(a.storedMarks);u()}return true}};
//#endregion
//#region src/commands/forEach.ts
var forEach=function(t,e){return function(r){return t.every((function(t,n){return e(t,__assign(__assign({},r),{index:n}))}))}};
//#endregion
//#region src/commands/insertContent.ts
var insertContent=function(t,e){return function(r){var n=r.tr,i=r.commands;return i.insertContentAt({from:n.selection.from,to:n.selection.to},t,e)}};
//#endregion
//#region src/utilities/elementFromString.ts
var removeWhitespaces=function(t){var e=t.childNodes;for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(n.nodeType===3&&n.nodeValue&&/^(\n\s\s|\n)$/.test(n.nodeValue))t.removeChild(n);else if(n.nodeType===1)removeWhitespaces(n)}return t};function elementFromString(t){if(typeof window==="undefined")throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");var e="<body>".concat(t,"</body>");var r=(new window.DOMParser).parseFromString(e,"text/html").body;return removeWhitespaces(r)}
//#endregion
//#region src/helpers/isProseMirrorContent.ts
/**
* Checks whether a value is already a ProseMirror node or fragment. Looks for the
* `nodesBetween` method, because `instanceof` fails when prosemirror-model is loaded twice.
* @param value Any value that could be passed as content
* @returns True for a node or a fragment, false for JSON, HTML and everything else
* @example ```js
* isProseMirrorContent(editor.state.doc)
* ```
*/function isProseMirrorContent(t){return typeof(t===null||t===void 0?void 0:t.nodesBetween)==="function"}
//#endregion
//#region src/helpers/createNodeFromContent.ts
/**
* Takes a JSON or HTML content and creates a Prosemirror node or fragment from it.
* @param content The JSON or HTML content to create the node from
* @param schema The Prosemirror schema to use for the node
* @param options Options for the parser
* @returns The created Prosemirror node or fragment
*/function createNodeFromContent(t,e,r){if(isProseMirrorContent(t))return t;var n=typeof t==="object"&&t!==null;r=__assign({slice:true,parseOptions:{}},r);var i=typeof t==="string";if(n)try{if(Array.isArray(t)&&t.length>0)return Fragment.fromArray(t.map((function(t){return e.nodeFromJSON(t)})));var a=e.nodeFromJSON(t);if(r.errorOnInvalidContent)a.check();return a}catch(n){if(r.errorOnInvalidContent)throw new Error("[tiptap error]: Invalid JSON content",{cause:n});console.warn("[tiptap warn]: Invalid content.","Passed value:",t,"Error:",n);return createNodeFromContent("",e,r)}if(i){if(r.errorOnInvalidContent){var o=false;var u="";var s=new Schema({topNode:e.spec.topNode,marks:e.spec.marks,nodes:e.spec.nodes.append({__tiptap__private__unknown__catch__all__node:{content:"inline*",group:"block",parseDOM:[{tag:"*",getAttrs:function(t){o=true;u=typeof t==="string"?t:t.outerHTML;return null}}]}})});if(r.slice)DOMParser.fromSchema(s).parseSlice(elementFromString(t),r.parseOptions);else DOMParser.fromSchema(s).parse(elementFromString(t),r.parseOptions);if(r.errorOnInvalidContent&&o)throw new Error("[tiptap error]: Invalid HTML content",{cause:new Error("Invalid element found: ".concat(u))})}var f=DOMParser.fromSchema(e);if(r.slice)return f.parseSlice(elementFromString(t),r.parseOptions).content;return f.parse(elementFromString(t),r.parseOptions)}return createNodeFromContent("",e,r)}
//#endregion
//#region src/helpers/isFragment.ts
/**
* Checks whether a node or fragment is a fragment. Looks for a missing `type` field,
* because `instanceof` fails when prosemirror-model is loaded twice.
* @param nodeOrFragment A ProseMirror node or fragment
* @returns True for a fragment, false for a node
* @example ```js
* isFragment(editor.state.doc.content)
* ```
*/function isFragment(t){return!("type"in t)}
//#endregion
//#region src/helpers/selectionToInsertionEnd.ts
function selectionToInsertionEnd(t,e,r){var n=t.steps.length-1;if(n<e)return;var i=t.steps[n];if(!(i instanceof ReplaceStep||i instanceof ReplaceAroundStep))return;var a=t.mapping.maps[n];var o=0;a.forEach((function(t,e,r,n){if(o===0)o=n}));t.setSelection(Selection.near(t.doc.resolve(o),r))}
//#endregion
//#region src/commands/insertContentAt.ts
var insertContentAt=function(t,e,r){return function(n){var i=n.tr,a=n.dispatch,o=n.editor;if(a){r=__assign({parseOptions:o.options.parseOptions,updateSelection:true,applyInputRules:false,applyPasteRules:false},r);var u=void 0;var s=function(t){o.emit("contentError",{editor:o,error:t,disableCollaboration:function(){if("collaboration"in o.storage&&typeof o.storage.collaboration==="object"&&o.storage.collaboration)o.storage.collaboration.isDisabled=true}})};var f=__assign({preserveWhitespace:"full"},r.parseOptions);if(!r.errorOnInvalidContent&&!o.options.enableContentCheck&&o.options.emitContentError)try{createNodeFromContent(e,o.schema,{parseOptions:f,errorOnInvalidContent:true})}catch(t){s(t)}try{var l;u=createNodeFromContent(e,o.schema,{parseOptions:f,errorOnInvalidContent:(l=r.errorOnInvalidContent)!==null&&l!==void 0?l:o.options.enableContentCheck})}catch(t){s(t);return false}var c=typeof t==="number"?{from:t,to:t}:{from:t.from,to:t.to},v=c.from,h=c.to;var d=true;var p=true;var g=isFragment(u)?u.content:[u];g.forEach((function(t){t.check();d=d?t.isText&&t.marks.length===0:false;p=p?t.isBlock:false}));if(v===h&&p){var m=i.doc.resolve(v).parent;if(m.isTextblock&&!m.type.spec.code&&!m.childCount){v-=1;h+=1}}var b=void 0;if(d){if(Array.isArray(e))b=e.map((function(t){return t.text||""})).join("");else if(isProseMirrorContent(e))b=g.map((function(t){var e;return(e=t.text)!==null&&e!==void 0?e:""})).join("");else if(typeof e==="object"&&!!e&&!!e.text)b=e.text;else b=e;i.insertText(b,v,h)}else{b=Fragment.from(g);var w=i.doc.resolve(v);var S=w.node();var E=w.parentOffset===0;var T=S.isText||S.isTextblock;var y=S.content.size>0;if(E&&T&&y&&p)v=Math.max(0,v-1);i.replaceWith(v,h,g)}if(r.updateSelection)selectionToInsertionEnd(i,i.steps.length-1,-1);if(r.applyInputRules)i.setMeta("applyInputRules",{from:v,text:b});if(r.applyPasteRules)i.setMeta("applyPasteRules",{from:v,text:b})}return true}};
//#endregion
//#region src/helpers/defaultBlockAt.ts
/**
* Gets the default block type at a given match
* @param match The content match to get the default block type from
* @returns The default block type or null
*/function defaultBlockAt(t){for(var e=0;e<t.edgeCount;e+=1){var r=t.edge(e).type;if(r.isTextblock&&!r.hasRequiredAttrs())return r}return null}
//#endregion
//#region src/commands/insertDefaultBlock.ts
var insertDefaultBlock=function(t){if(t===void 0){t={}}return function(e){var r=e.tr,n=e.dispatch,i=e.editor;var a=t.pos,o=t.attrs,u=t.content,s=t.updateSelection,f=s===void 0?true:s;var l;if(typeof a==="number")l=r.doc.resolve(a);else if(a)l=a;else l=r.selection.$from;var c=defaultBlockAt(l.parent.contentMatchAt(l.index()));if(!c)return false;var v=Object.keys(c.spec.attrs||{});var h=o?Object.fromEntries(Object.entries(o).filter((function(t){var e=t[0];return v.includes(e)}))):{};var d;if(u){var p=createNodeFromContent(u,i.schema);d=c.createAndFill(h,p)}else d=c.createAndFill(h);if(!d)return false;if(n){r.insert(l.pos,d);if(f)selectionToInsertionEnd(r,r.steps.length-1,-1)}return true}};
//#endregion
//#region src/commands/join.ts
var joinUp$1=function(){return function(t){var e=t.state,r=t.dispatch;return joinUp(e,r)}};var joinDown$1=function(){return function(t){var e=t.state,r=t.dispatch;return joinDown(e,r)}};var joinBackward$1=function(){return function(t){var e=t.state,r=t.dispatch;return joinBackward(e,r)}};var joinForward$1=function(){return function(t){var e=t.state,r=t.dispatch;return joinForward(e,r)}};
//#endregion
//#region src/commands/canJoinItemsAt.ts
var canJoinItemsAt=function(t,e){var r=t.resolve(e);var n=r.nodeBefore;var i=r.nodeAfter;if(!n||!i)return false;return!n.type.spec.isolating&&!i.type.spec.isolating};
//#endregion
//#region src/commands/joinItemBackward.ts
var joinItemBackward=function(){return function(t){var e=t.state,r=t.dispatch,n=t.tr;try{var i=joinPoint(e.doc,e.selection.$from.pos,-1);if(i===null||i===void 0)return false;if(!canJoinItemsAt(e.doc,i))return false;n.join(i,2);if(r)r(n);return true}catch(t){return false}}};
//#endregion
//#region src/commands/joinItemForward.ts
var joinItemForward=function(){return function(t){var e=t.state,r=t.dispatch,n=t.tr;try{var i=joinPoint(e.doc,e.selection.$from.pos,1);if(i===null||i===void 0)return false;if(!canJoinItemsAt(e.doc,i))return false;n.join(i,2);if(r)r(n);return true}catch(t){return false}}};
//#endregion
//#region src/commands/joinTextblockBackward.ts
var joinTextblockBackward$1=function(){return function(t){var e=t.state,r=t.dispatch;return joinTextblockBackward(e,r)}};
//#endregion
//#region src/commands/joinTextblockForward.ts
var joinTextblockForward$1=function(){return function(t){var e=t.state,r=t.dispatch;return joinTextblockForward(e,r)}};
//#endregion
//#region src/utilities/isMacOS.ts
function isMacOS(){return typeof navigator!=="undefined"?/Mac/.test(navigator.platform):false}
//#endregion
//#region src/commands/keyboardShortcut.ts
function normalizeKeyName(t){var e=t.split(/-(?!$)/);var r=e[e.length-1];if(r==="Space")r=" ";var n;var i;var a;var o;for(var u=0;u<e.length-1;u+=1){var s=e[u];if(/^(cmd|meta|m)$/i.test(s))o=true;else if(/^a(lt)?$/i.test(s))n=true;else if(/^(c|ctrl|control)$/i.test(s))i=true;else if(/^s(hift)?$/i.test(s))a=true;else if(/^mod$/i.test(s)){if(isiOS()||isMacOS())o=true;else i=true}else throw new Error("Unrecognized modifier name: ".concat(s))}if(n)r="Alt-".concat(r);if(i)r="Ctrl-".concat(r);if(o)r="Meta-".concat(r);if(a)r="Shift-".concat(r);return r}var keyboardShortcut=function(t){return function(e){var r=e.editor,n=e.view,i=e.tr,a=e.dispatch;var o=normalizeKeyName(t).split(/-(?!$)/);var u=o.find((function(t){return!["Alt","Ctrl","Meta","Shift"].includes(t)}));var s=new KeyboardEvent("keydown",{key:u==="Space"?" ":u,altKey:o.includes("Alt"),ctrlKey:o.includes("Ctrl"),metaKey:o.includes("Meta"),shiftKey:o.includes("Shift"),bubbles:true,cancelable:true});var f=r.captureTransaction((function(){n.someProp("handleKeyDown",(function(t){return t(n,s)}))}));f===null||f===void 0||f.steps.forEach((function(t){var e=t.map(i.mapping);if(e&&a)i.maybeStep(e)}));return true}};
//#endregion
//#region src/helpers/isNodeActive.ts
function isNodeActive(t,e,r){if(r===void 0){r={}}var n=t.selection,i=n.from,a=n.to,o=n.empty;var u=e?getNodeType(e,t.schema):null;var s=[];t.doc.nodesBetween(i,a,(function(t,e){if(t.isText)return;var r=Math.max(i,e);var n=Math.min(a,e+t.nodeSize);s.push({node:t,from:r,to:n})}));var f=a-i;var l=s.filter((function(t){if(!u)return true;return u.name===t.node.type.name})).filter((function(t){return objectIncludes(t.node.attrs,r,{strict:false})}));if(o)return!!l.length;return l.reduce((function(t,e){return t+e.to-e.from}),0)>=f}
//#endregion
//#region src/commands/lift.ts
var lift$1=function(t,e){if(e===void 0){e={}}return function(r){var n=r.state,i=r.dispatch;if(!isNodeActive(n,getNodeType(t,n.schema),e))return false;return lift(n,i)}};
//#endregion
//#region src/commands/liftEmptyBlock.ts
var liftEmptyBlock$1=function(){return function(t){var e=t.state,r=t.dispatch;return liftEmptyBlock(e,r)}};
//#endregion
//#region src/commands/liftListItem.ts
var liftListItem$1=function(t){return function(e){var r=e.state,n=e.dispatch;var i=getNodeType(t,r.schema);return liftListItem(i)(r,n)}};
//#endregion
//#region src/commands/newlineInCode.ts
var newlineInCode$1=function(){return function(t){var e=t.state,r=t.dispatch;return newlineInCode(e,r)}};
//#endregion
//#region src/helpers/getSchemaTypeNameByName.ts
/**
* Get the type of a schema item by its name.
* @param name The name of the schema item
* @param schema The Prosemiror schema to search in
* @returns The type of the schema item (`node` or `mark`), or null if it doesn't exist
*/function getSchemaTypeNameByName(t,e){if(e.nodes[t])return"node";if(e.marks[t])return"mark";return null}
//#endregion
//#region src/utilities/deleteProps.ts
/**
* Remove a property or an array of properties from an object
* @param obj Object
* @param key Key to remove
*/function deleteProps(t,e){var r=typeof e==="string"?[e]:e;return Object.keys(t).reduce((function(e,n){if(!r.includes(n))e[n]=t[n];return e}),{})}
//#endregion
//#region src/commands/resetAttributes.ts
var resetAttributes=function(t,e){return function(r){var n=r.tr,i=r.state,a=r.dispatch;var o=null;var u=null;var s=getSchemaTypeNameByName(typeof t==="string"?t:t.name,i.schema);if(!s)return false;if(s==="node")o=getNodeType(t,i.schema);if(s==="mark")u=getMarkType(t,i.schema);var f=false;n.selection.ranges.forEach((function(t){i.doc.nodesBetween(t.$from.pos,t.$to.pos,(function(t,r){if(o&&o===t.type){f=true;if(a)n.setNodeMarkup(r,void 0,deleteProps(t.attrs,e))}if(u&&t.marks.length)t.marks.forEach((function(i){if(u===i.type){f=true;if(a)n.addMark(r,r+t.nodeSize,u.create(deleteProps(i.attrs,e)))}}))}))}));return f}};
//#endregion
//#region src/commands/scrollIntoView.ts
var scrollIntoView=function(){return function(t){var e=t.tr,r=t.dispatch;if(r)e.scrollIntoView();return true}};
//#endregion
//#region src/commands/selectAll.ts
var selectAll=function(){return function(t){var e=t.tr,r=t.dispatch;if(r){var n=new AllSelection(e.doc);e.setSelection(n)}return true}};
//#endregion
//#region src/commands/selectNodeBackward.ts
var selectNodeBackward$1=function(){return function(t){var e=t.state,r=t.dispatch;return selectNodeBackward(e,r)}};
//#endregion
//#region src/commands/selectNodeForward.ts
var selectNodeForward$1=function(){return function(t){var e=t.state,r=t.dispatch;return selectNodeForward(e,r)}};
//#endregion
//#region src/commands/selectParentNode.ts
var selectParentNode$1=function(){return function(t){var e=t.state,r=t.dispatch;return selectParentNode(e,r)}};
//#endregion
//#region src/commands/selectTextblockEnd.ts
var selectTextblockEnd$1=function(){return function(t){var e=t.state,r=t.dispatch;return selectTextblockEnd(e,r)}};
//#endregion
//#region src/commands/selectTextblockStart.ts
var selectTextblockStart$1=function(){return function(t){var e=t.state,r=t.dispatch;return selectTextblockStart(e,r)}};
//#endregion
//#region src/helpers/createDocument.ts
/**
* Create a new Prosemirror document node from content.
* @param content The JSON or HTML content to create the document from
* @param schema The Prosemirror schema to use for the document
* @param parseOptions Options for the parser
* @returns The created Prosemirror document node
*/function createDocument(t,e,r,n){if(r===void 0){r={}}if(n===void 0){n={}}return createNodeFromContent(t,e,{slice:false,parseOptions:r,errorOnInvalidContent:n.errorOnInvalidContent})}
//#endregion
//#region src/commands/setContent.ts
var setContent=function(t,e){var r=e===void 0?{}:e,n=r.errorOnInvalidContent,i=r.emitUpdate,a=i===void 0?true:i,o=r.parseOptions,u=o===void 0?{}:o;return function(e){var r=e.editor,i=e.tr,o=e.dispatch,s=e.commands;var f=i.doc;if(u.preserveWhitespace!=="full"){var l=createDocument(t,r.schema,u,{errorOnInvalidContent:n!==null&&n!==void 0?n:r.options.enableContentCheck});if(o){var c=isFragment(l)?l.content:[l];i.replaceWith(0,f.content.size,c).setMeta("preventUpdate",!a)}return true}if(o)i.setMeta("preventUpdate",!a);return s.insertContentAt({from:0,to:f.content.size},t,{parseOptions:u,errorOnInvalidContent:n!==null&&n!==void 0?n:r.options.enableContentCheck})}};
//#endregion
//#region src/helpers/getMarkAttributes.ts
function getMarkAttributes(t,e){var r=getMarkType(e,t.schema);var n=t.selection,i=n.from,a=n.to,o=n.empty;var u=[];if(o){if(t.storedMarks)u.push.apply(u,t.storedMarks);u.push.apply(u,t.selection.$head.marks())}else t.doc.nodesBetween(i,a,(function(t){u.push.apply(u,t.marks)}));var s=u.find((function(t){return t.type.name===r.name}));if(!s)return{};return __assign({},s.attrs)}
//#endregion
//#region src/helpers/combineTransactionSteps.ts
/**
* Returns a new `Transform` based on all steps of the passed transactions.
* @param oldDoc The Prosemirror node to start from
* @param transactions The transactions to combine
* @returns A new `Transform` with all steps of the passed transactions
*/function combineTransactionSteps(t,e){var r=new Transform(t);e.forEach((function(t){t.steps.forEach((function(t){r.step(t)}))}));return r}
//#endregion
//#region src/helpers/findChildrenInRange.ts
/**
* Same as `findChildren` but searches only within a `range`.
* @param node The Prosemirror node to search in
* @param range The range to search in
* @param predicate The predicate to match
* @returns An array of nodes with their positions
*/function findChildrenInRange(t,e,r){var n=[];t.nodesBetween(e.from,e.to,(function(t,e){if(r(t))n.push({node:t,pos:e})}));return n}
//#endregion
//#region src/helpers/findParentNodeClosestToPos.ts
/**
* Finds the closest parent node to a resolved position that matches a predicate.
* @param $pos The resolved position to search from
* @param predicate The predicate to match
* @returns The closest parent node to the resolved position that matches the predicate
* @example ```js
* findParentNodeClosestToPos($from, node => node.type.name === 'paragraph')
* ```
*/function findParentNodeClosestToPos(t,e){for(var r=t.depth;r>0;r-=1){var n=t.node(r);if(e(n))return{pos:r>0?t.before(r):0,start:t.start(r),depth:r,node:n}}}
//#endregion
//#region src/helpers/findParentNode.ts
/**
* Finds the closest parent node to the current selection that matches a predicate.
* @param predicate The predicate to match
* @returns A command that finds the closest parent node to the current selection that matches the predicate
* @example ```js
* findParentNode(node => node.type.name === 'paragraph')
* ```
*/function findParentNode(t){return function(e){return findParentNodeClosestToPos(e.$from,t)}}
//#endregion
//#region src/helpers/getExtensionField.ts
/**
* Returns a field from an extension
* @param extension The Tiptap extension
* @param field The field, for example `renderHTML` or `priority`
* @param context The context object that should be passed as `this` into the function
* @returns The field value
*/function getExtensionField(t,e,r){if(t.config[e]===void 0&&t.parent)return getExtensionField(t.parent,e,r);if(typeof t.config[e]==="function")return t.config[e].bind(__assign(__assign({},r),{parent:t.parent?getExtensionField(t.parent,e,r):null}));return t.config[e]}
//#endregion
//#region src/helpers/flattenExtensions.ts
/**
* Create a flattened array of extensions by traversing the `addExtensions` field.
* @param extensions An array of Tiptap extensions
* @returns A flattened array of Tiptap extensions
*/function flattenExtensions(t){return t.map((function(t){var e=getExtensionField(t,"addExtensions",{name:t.name,options:t.options,storage:t.storage});if(e)return __spreadArray([t],flattenExtensions(e()),true);return t})).flat(10)}
//#endregion
//#region src/helpers/getHTMLFromFragment.ts
function getHTMLFromFragment(t,e){var r=DOMSerializer.fromSchema(e).serializeFragment(t);var n=document.implementation.createHTMLDocument().createElement("div");n.appendChild(r);return n.innerHTML}
//#endregion
//#region src/schema/getSchemaAttributes.ts
/**
* Combines external attribute structure with local attribute behavior.
* @param attributes The attributes from resolved local extensions
* @param schema The schema that defines the allowed attributes
* @returns Only attributes present in the schema
*/function getSchemaAttributes(t,e){var r=new Map;for(var n=0,i=t;n<i.length;n++){var a=i[n];var o;var u=(o=r.get(a.type))!==null&&o!==void 0?o:new Map;u.set(a.name,a);r.set(a.type,u)}return __spreadArray(__spreadArray([],Object.values(e.nodes),true),Object.values(e.marks),true).flatMap((function(t){var e;return Object.entries((e=t.spec.attrs)!==null&&e!==void 0?e:{}).map((function(e){var n=e[0],i=e[1];var a;var o=(a=r.get(t.name))===null||a===void 0?void 0:a.get(n);var u=Object.hasOwn(i,"default");return{type:t.name,name:n,attribute:__assign(__assign({rendered:true,renderHTML:null,parseHTML:null,keepOnSplit:true},o===null||o===void 0?void 0:o.attribute),{default:i.default,isRequired:!u,validate:i.validate})}}))}))}
//#endregion
//#region src/schema/schemaSpecFields.ts
var nodeSchemaFields={content:"string",marks:"string",group:"string",inline:"boolean",atom:"boolean",selectable:"boolean",draggable:"boolean",code:"boolean",whitespace:["pre","normal"],definingAsContext:"boolean",definingForContent:"boolean",defining:"boolean",isolating:"boolean",linebreakReplacement:"boolean"};var markSchemaFields={inclusive:"boolean",excludes:"string",group:"string",spanning:"boolean",code:"boolean"};
//#endregion
//#region src/schema/mergeSchemaSpec.ts
function structuralFields(t,e,r){return Object.fromEntries(Object.entries(e).flatMap((function(e){var n=e[0],i=e[1];var a=t[n];if(a===void 0)return[];if(!(typeof i==="string"?typeof a===i:typeof a==="string"&&i.includes(a)))throw new RangeError("Invalid schemaSpec field '".concat(r,".").concat(n,"'"));return[[n,a]]})))}function mergeType(t,e,r,n){return __assign(__assign(__assign({},Object.fromEntries(Object.entries(e).filter((function(t){var e=t[0];return e!=="attrs"&&!Object.hasOwn(n,e)})))),structuralFields(r,n,t)),{attrs:r.attrs})}function checkTypes(t,e,r){for(var n=0,i=Object.keys(e);n<i.length;n++){var a=i[n];if(!Object.hasOwn(t,a))throw new RangeError("schemaSpec requires a local ".concat(r," extension named '").concat(a,"'"))}for(var o=0,u=Object.keys(t);o<u.length;o++){var a=u[o];if(!Object.hasOwn(e,a))throw new RangeError("Local ".concat(r," extension '").concat(a,"' is not in schemaSpec"))}}
/**
* Combines external structure with local DOM behavior and extension metadata.
* @param local The specifications generated by resolved local extensions
* @param external The schema compiled from the provided specification
* @returns A specification in the external schema's node and mark order
*/function mergeSchemaSpec(t,e){checkTypes(t.nodes,e.nodes,"node");checkTypes(t.marks,e.marks,"mark");var r=e.spec.nodes;var n=e.spec.marks;e.spec.nodes.forEach((function(e,n){r=r.update(e,mergeType(e,t.nodes[e],n,nodeSchemaFields))}));e.spec.marks.forEach((function(e,r){n=n.update(e,mergeType(e,t.marks[e],r,markSchemaFields))}));return{topNode:e.topNodeType.name,nodes:r,marks:n}}
//#endregion
//#region src/utilities/findDuplicates.ts
/**
* Find duplicates in an array.
*/function findDuplicates(t){var e=t.filter((function(e,r){return t.indexOf(e)!==r}));return Array.from(new Set(e))}
//#endregion
//#region src/helpers/splitExtensions.ts
function splitExtensions(t){return{baseExtensions:t.filter((function(t){return t.type==="extension"})),nodeExtensions:t.filter((function(t){return t.type==="node"})),markExtensions:t.filter((function(t){return t.type==="mark"}))}}
//#endregion
//#region src/helpers/getAttributesFromExtensions.ts
/**
* Get a list of all extension attributes defined in `addAttribute` and `addGlobalAttribute`.
* @param extensions List of extensions
*/function getAttributesFromExtensions(t){var e=[];var r=splitExtensions(t),n=r.nodeExtensions,i=r.markExtensions;var a=__spreadArray(__spreadArray([],n,true),i,true);var o={default:null,validate:void 0,rendered:true,renderHTML:null,parseHTML:null,keepOnSplit:true,isRequired:false};var u=n.filter((function(t){return t.name!=="text"})).map((function(t){return t.name}));var s=i.map((function(t){return t.name}));var f=__spreadArray(__spreadArray([],u,true),s,true);t.forEach((function(t){var r=getExtensionField(t,"addGlobalAttributes",{name:t.name,options:t.options,storage:t.storage,extensions:a});if(!r)return;r().forEach((function(t){var r;if(Array.isArray(t.types))r=t.types;else if(t.types==="*")r=f;else if(t.types==="nodes")r=u;else if(t.types==="marks")r=s;else r=[];r.forEach((function(r){Object.entries(t.attributes).forEach((function(t){var n=t[0],i=t[1];e.push({type:r,name:n,attribute:__assign(__assign({},o),i)})}))}))}))}));a.forEach((function(t){var r=getExtensionField(t,"addAttributes",{name:t.name,options:t.options,storage:t.storage});if(!r)return;var n=r();Object.entries(n).forEach((function(r){var n=r[0],i=r[1];var a=__assign(__assign({},o),i);if(typeof(a===null||a===void 0?void 0:a.default)==="function")a.default=a.default();if((a===null||a===void 0?void 0:a.isRequired)&&(a===null||a===void 0?void 0:a.default)===void 0)delete a.default;e.push({type:t.name,name:n,attribute:a})}))}));return e}
//#endregion
//#region src/utilities/isFunction.ts
function isFunction(t){return typeof t==="function"}
//#endregion
//#region src/utilities/callOrReturn.ts
/**
* Optionally calls `value` as a function.
* Otherwise it is returned directly.
* @param value Function or any value.
* @param context Optional context to bind to function.
* @param props Optional props to pass to function.
*/function callOrReturn(t,e){if(e===void 0){e=void 0}var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}if(isFunction(t)){if(e)return t.bind(e).apply(void 0,r);return t.apply(void 0,r)}return t}
//#endregion
//#region src/utilities/isEmptyObject.ts
function isEmptyObject(t){if(t===void 0){t={}}return Object.keys(t).length===0&&t.constructor===Object}
//#endregion
//#region src/utilities/mergeAttributes.ts
/** Splits a CSS style string into declarations, ignoring semicolons inside quotes/parentheses. */function splitStyleDeclarations(t){var e=[];var r="";var n=false;var i=false;var a=0;var o=t.length;for(var u=0;u<o;u+=1){var s=t[u];if(s==="'"&&!i){n=!n;r+=s;continue}if(s==='"'&&!n){i=!i;r+=s;continue}if(!n&&!i){if(s==="("){a+=1;r+=s;continue}if(s===")"&&a>0){a-=1;r+=s;continue}if(s===";"&&a===0){e.push(r);r="";continue}}r+=s}if(r)e.push(r);return e}
/** Yields property/value pairs from a style string. */function parseStyleEntries(t){var e=[];var r=splitStyleDeclarations(t||"");var n=r.length;for(var i=0;i<n;i+=1){var a=r[i];var o=a.indexOf(":");if(o===-1)continue;var u=a.slice(0,o).trim();var s=a.slice(o+1).trim();if(u&&s)e.push([u,s])}return e}function mergeAttributes(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}return t.filter((function(t){return!!t})).reduce((function(t,e){var r=__assign({},t);Object.entries(e).forEach((function(t){var e=t[0],n=t[1];if(e==="__proto__"){Object.defineProperty(r,e,{configurable:true,enumerable:true,value:n,writable:true});return}if(!r[e]){r[e]=n;return}if(e==="class"){var i=n?String(n).split(" "):[];var a=r[e]?r[e].split(" "):[];var o=i.filter((function(t){return!a.includes(t)}));r[e]=__spreadArray(__spreadArray([],a,true),o,true).join(" ")}else if(e==="style"){var u=new Map(__spreadArray(__spreadArray([],parseStyleEntries(r[e]),true),parseStyleEntries(n),true));r[e]=Array.from(u.entries()).map((function(t){var e=t[0],r=t[1];return"".concat(e,": ").concat(r)})).join("; ")}else r[e]=n}));return r}),{})}
//#endregion
//#region src/helpers/getRenderedAttributes.ts
function getRenderedAttributes(t,e){return e.filter((function(e){return e.type===t.type.name})).filter((function(t){return t.attribute.rendered})).map((function(e){var r;if(!e.attribute.renderHTML)return r={},r[e.name]=t.attrs[e.name],r;return e.attribute.renderHTML(t.attrs)||{}})).reduce((function(t,e){return mergeAttributes(t,e)}),{})}
//#endregion
//#region src/utilities/fromString.ts
function fromString(t){if(typeof t!=="string")return t;if(t.match(/^[+-]?(?:\d*\.)?\d+$/))return Number(t);if(t==="true")return true;if(t==="false")return false;return t}
//#endregion
//#region src/helpers/injectExtensionAttributesToParseRule.ts
/**
* This function merges extension attributes into parserule attributes (`attrs` or `getAttrs`).
* Cancels when `getAttrs` returned `false`.
* @param parseRule ProseMirror ParseRule
* @param extensionAttributes List of attributes to inject
*/function injectExtensionAttributesToParseRule(t,e){if("style"in t)return t;return __assign(__assign({},t),{getAttrs:function(r){var n=t.getAttrs?t.getAttrs(r):t.attrs;if(n===false)return false;var i=e.reduce((function(t,e){var n;var i=e.attribute.parseHTML?e.attribute.parseHTML(r):fromString(r.getAttribute(e.name));if(i===null||i===void 0)return t;return __assign(__assign({},t),(n={},n[e.name]=i,n))}),{});return __assign(__assign({},n),i)}})}
//#endregion
//#region src/helpers/getSchemaSpecByResolvedExtensions.ts
function cleanUpSchemaItem(t){return Object.fromEntries(Object.entries(t).filter((function(t){var e=t[0],r=t[1];if(e==="attrs"&&isEmptyObject(r))return false;return r!==null&&r!==void 0})))}
/**
* Builds an attribute spec tuple for ProseMirror schema from an extension attribute.
* @param extensionAttribute The extension attribute to build the spec for
* @returns A tuple of [attributeName, spec]
*/function buildAttributeSpec(t){var e,r;var n={};if(!(t===null||t===void 0||(e=t.attribute)===null||e===void 0?void 0:e.isRequired)&&"default"in((t===null||t===void 0?void 0:t.attribute)||{}))n.default=t.attribute.default;if((t===null||t===void 0||(r=t.attribute)===null||r===void 0?void 0:r.validate)!==void 0)n.validate=t.attribute.validate;return[t.name,n]}
/**
* Builds schema specifications without compiling content expressions.
* @param extensions An array of Tiptap extensions
* @param editor The editor instance
* @param allAttributes The effective attributes used for schema and DOM behavior
* @returns The node and mark specifications
*/function getSchemaSpecByResolvedExtensions(t,e,r){if(r===void 0){r=getAttributesFromExtensions(t)}var n;var i=splitExtensions(t),a=i.nodeExtensions,o=i.markExtensions;return{topNode:(n=a.find((function(t){return getExtensionField(t,"topNode")})))===null||n===void 0?void 0:n.name,nodes:Object.fromEntries(a.map((function(n){var i=r.filter((function(t){return t.type===n.name}));var a={name:n.name,options:n.options,storage:n.storage,editor:e};var o=cleanUpSchemaItem(__assign(__assign({},t.reduce((function(t,e){var r=getExtensionField(e,"extendNodeSchema",a);return __assign(__assign({},t),r?r(n):{})}),{})),{content:callOrReturn(getExtensionField(n,"content",a)),marks:callOrReturn(getExtensionField(n,"marks",a)),group:callOrReturn(getExtensionField(n,"group",a)),inline:callOrReturn(getExtensionField(n,"inline",a)),atom:callOrReturn(getExtensionField(n,"atom",a)),selectable:callOrReturn(getExtensionField(n,"selectable",a)),draggable:callOrReturn(getExtensionField(n,"draggable",a)),code:callOrReturn(getExtensionField(n,"code",a)),whitespace:callOrReturn(getExtensionField(n,"whitespace",a)),linebreakReplacement:callOrReturn(getExtensionField(n,"linebreakReplacement",a)),defining:callOrReturn(getExtensionField(n,"defining",a)),isolating:callOrReturn(getExtensionField(n,"isolating",a)),attrs:Object.fromEntries(i.map(buildAttributeSpec))}));var u=callOrReturn(getExtensionField(n,"parseHTML",a));if(u)o.parseDOM=u.map((function(t){return injectExtensionAttributesToParseRule(t,i)}));var s=getExtensionField(n,"renderHTML",a);if(s)o.toDOM=function(t){return s({node:t,HTMLAttributes:getRenderedAttributes(t,i)})};var f=getExtensionField(n,"renderText",a);if(f)o.toText=f;return[n.name,o]}))),marks:Object.fromEntries(o.map((function(n){var i=r.filter((function(t){return t.type===n.name}));var a={name:n.name,options:n.options,storage:n.storage,editor:e};var o=cleanUpSchemaItem(__assign(__assign({},t.reduce((function(t,e){var r=getExtensionField(e,"extendMarkSchema",a);return __assign(__assign({},t),r?r(n):{})}),{})),{inclusive:callOrReturn(getExtensionField(n,"inclusive",a)),excludes:callOrReturn(getExtensionField(n,"excludes",a)),group:callOrReturn(getExtensionField(n,"group",a)),spanning:callOrReturn(getExtensionField(n,"spanning",a)),code:callOrReturn(getExtensionField(n,"code",a)),attrs:Object.fromEntries(i.map(buildAttributeSpec))}));var u=callOrReturn(getExtensionField(n,"parseHTML",a));if(u)o.parseDOM=u.map((function(t){return injectExtensionAttributesToParseRule(t,i)}));var s=getExtensionField(n,"renderHTML",a);if(s)o.toDOM=function(t){return s({mark:t,HTMLAttributes:getRenderedAttributes(t,i)})};return[n.name,o]})))}}
//#endregion
//#region src/helpers/getSchemaByResolvedExtensions.ts
/**
* Creates a ProseMirror schema from resolved extensions.
* @param extensions The flattened and sorted extensions
* @param editor The editor instance
* @param schemaSpec The external structure to use with local extension behavior
* @returns A ProseMirror schema
*/function getSchemaByResolvedExtensions(t,e,r){if(r===void 0)return new Schema(getSchemaSpecByResolvedExtensions(t,e));var n=findDuplicates(t.filter((function(t){return t.type!=="extension"})).map((function(t){return t.name})));if(n.length)throw new RangeError("Duplicate local schema types: ".concat(n.join(", ")));var i=new Schema(r);var a=getSchemaSpecByResolvedExtensions(t,e,getSchemaAttributes(getAttributesFromExtensions(t),i));return new Schema(mergeSchemaSpec(a,i))}
//#endregion
//#region src/helpers/sortExtensions.ts
/**
* Sort extensions by priority.
* @param extensions An array of Tiptap extensions
* @returns A sorted array of Tiptap extensions by priority
*/function sortExtensions(t){var e=100;return t.sort((function(t,r){var n=getExtensionField(t,"priority")||e;var i=getExtensionField(r,"priority")||e;if(n>i)return-1;if(n<i)return 1;return 0}))}
//#endregion
//#region src/helpers/resolveExtensions.ts
/**
* Returns a flattened and sorted extension list while
* also checking for duplicated extensions and warns the user.
* @param extensions An array of Tiptap extensions
* @returns An flattened and sorted array of Tiptap extensions
*/function resolveExtensions(t){var e=sortExtensions(flattenExtensions(t));var r=findDuplicates(e.map((function(t){return t.name})));if(r.length)console.warn("[tiptap warn]: Duplicate extension names found: [".concat(r.map((function(t){return"'".concat(t,"'")})).join(", "),"]. This can lead to issues."));return e}
//#endregion
//#region src/helpers/getTextBetween.ts
/**
* Gets the text between two positions in a Prosemirror node
* and serializes it using the given text serializers and block separator (see getText)
* @param startNode The Prosemirror node to start from
* @param range The range of the text to get
* @param options Options for the text serializer & block separator
* @returns The text between the two positions
*/function getTextBetween(t,e,r){var n=e.from,i=e.to;var a=r||{},o=a.blockSeparator,u=o===void 0?"\n\n":o,s=a.textSerializers,f=s===void 0?{}:s;var l="";t.nodesBetween(n,i,(function(t,r,a,o){if(t.isBlock&&r>n)l+=u;var s=f===null||f===void 0?void 0:f[t.type.name];if(s){if(a)l+=s({node:t,pos:r,parent:a,index:o,range:e});return false}if(t.isText){var c;l+=t===null||t===void 0||(c=t.text)===null||c===void 0?void 0:c.slice(Math.max(n,r)-r,i-r)}}));return l}
//#endregion
//#region src/helpers/getText.ts
/**
* Gets the text of a Prosemirror node
* @param node The Prosemirror node
* @param options Options for the text serializer & block separator
* @returns The text of the node
* @example ```js
* const text = getText(node, { blockSeparator: '\n' })
* ```
*/function getText(t,e){return getTextBetween(t,{from:0,to:t.content.size},e)}
//#endregion
//#region src/helpers/getTextSerializersFromSchema.ts
/**
* Find text serializers `toText` in a Prosemirror schema
* @param schema The Prosemirror schema to search in
* @returns A record of text serializers by node name
*/function getTextSerializersFromSchema(t){return Object.fromEntries(Object.entries(t.nodes).filter((function(t){var e=t[1];return e.spec.toText})).map((function(t){var e=t[0],r=t[1];return[e,r.spec.toText]})))}
//#endregion
//#region src/helpers/getNodeAttributes.ts
function getNodeAttributes(t,e){var r=getNodeType(e,t.schema);var n=t.selection,i=n.from,a=n.to;var o=[];t.doc.nodesBetween(i,a,(function(t){o.push(t)}));var u=o.reverse().find((function(t){return t.type.name===r.name}));if(!u)return{};return __assign({},u.attrs)}
//#endregion
//#region src/helpers/getAttributes.ts
/**
* Get node or mark attributes by type or name on the current editor state
* @param state The current editor state
* @param typeOrName The node or mark type or name
* @returns The attributes of the node or mark or an empty object
*/function getAttributes(t,e){var r=getSchemaTypeNameByName(typeof e==="string"?e:e.name,t.schema);if(r==="node")return getNodeAttributes(t,e);if(r==="mark")return getMarkAttributes(t,e);return{}}
//#endregion
//#region src/utilities/removeDuplicates.ts
/**
* Removes duplicated values within an array.
* Supports numbers, strings and objects.
*/function removeDuplicates(t,e){if(e===void 0){e=JSON.stringify}var r={};return t.filter((function(t){var n=e(t);return Object.prototype.hasOwnProperty.call(r,n)?false:r[n]=true}))}
//#endregion
//#region src/helpers/getChangedRanges.ts
/**
* Removes duplicated ranges and ranges that are
* fully captured by other ranges.
*/function simplifyChangedRanges(t){var e=removeDuplicates(t);return e.length===1?e:e.filter((function(t,r){return!e.filter((function(t,e){return e!==r})).some((function(e){return t.oldRange.from>=e.oldRange.from&&t.oldRange.to<=e.oldRange.to&&t.newRange.from>=e.newRange.from&&t.newRange.to<=e.newRange.to}))}))}
/**
* Returns a list of changed ranges
* based on the first and last state of all steps.
*/function getChangedRanges(t){var e=t.mapping,r=t.steps;var n=[];var i=e.invert();e.maps.forEach((function(t,a){var o=[];if(!t.ranges.length){var u=r[a],s=u.from,f=u.to;if(s===void 0||f===void 0)return;o.push({from:s,to:f})}else t.forEach((function(t,e){o.push({from:t,to:e})}));var l=e.slice(a);o.forEach((function(t){var e=t.from,r=t.to;var a=l.map(e,-1);var o=l.map(r);var u=i.map(a,-1);var s=i.map(o);n.push({oldRange:{from:u,to:s},newRange:{from:a,to:o}})}))}));return simplifyChangedRanges(n)}
//#endregion
//#region src/helpers/getMarksBetween.ts
function getMarksBetween(t,e,r){var n=[];if(t===e)r.resolve(t).marks().forEach((function(e){var i=getMarkRange(r.resolve(t),e.type);if(!i)return;n.push(__assign({mark:e},i))}));else r.nodesBetween(t,e,(function(t,e){if(!t||(t===null||t===void 0?void 0:t.nodeSize)===void 0)return;n.push.apply(n,t.marks.map((function(r){return{from:e,to:e+t.nodeSize,mark:r}})))}));return n}
//#endregion
//#region src/helpers/getNodeAtPosition.ts
/**
* Finds the first node of a given type or name in the current selection.
* @param state The editor state.
* @param typeOrName The node type or name.
* @param pos The position to start searching from.
* @param maxDepth The maximum depth to search.
* @returns The node and the depth as an array.
*/var getNodeAtPosition=function(t,e,r,n){if(n===void 0){n=20}var i=t.doc.resolve(r);var a=n;var o=null;while(a>0&&o===null){var u=i.node(a);if((u===null||u===void 0?void 0:u.type.name)===e)o=u;else a-=1}return[o,a]};
//#endregion
//#region src/helpers/getPreviousBlockSibling.ts
/**
* Returns the block-level sibling immediately before the cursor's textblock
* (or null when the cursor is at the first child of its block parent).
*
* The position does not have to sit inside a textblock: for any resolved
* position, the result is the sibling immediately before `$pos.parent`. At a
* GapCursor position this is the sibling before the whole container, not the
* node before the gap.
*
* @param $pos The resolved position to look around
* @returns The previous block-level sibling, or null
* @example ```js
* // Cursor in a top-level paragraph after a list:
* // <ul><li>A</li></ul><p>|B</p>
* getPreviousBlockSibling($from) // <ul>
*
* // Cursor in the second paragraph of a list item:
* // <ul><li><p>A</p><p>|B</p></li></ul>
* getPreviousBlockSibling($from) // <p>A</p>
*
* // Cursor in the first child of its block parent:
* // <doc><p>|A</p></doc>
* getPreviousBlockSibling($from) // null
* ```
*/var getPreviousBlockSibling=function(t){var e=t.depth-1;if(e<0)return null;var r=t.index(e);if(r===0)return null;return t.node(e).child(r-1)};
//#endregion
//#region src/helpers/getSchemaTypeByName.ts
/**
* Tries to get a node or mark type by its name.
* @param name The name of the node or mark type
* @param schema The Prosemiror schema to search in
* @returns The node or mark type, or null if it doesn't exist
*/function getSchemaTypeByName(t,e){return e.nodes[t]||e.marks[t]||null}
//#endregion
//#region src/helpers/getSplittedAttributes.ts
/**
* Return attributes of an extension that should be splitted by keepOnSplit flag
* @param extensionAttributes Array of extension attributes
* @param typeName The type of the extension
* @param attributes The attributes of the extension
* @returns The splitted attributes
*/function getSplittedAttributes(t,e,r){return Object.fromEntries(Object.entries(r).filter((function(r){var n=r[0];var i=t.find((function(t){return t.type===e&&t.name===n}));if(!i)return false;return i.attribute.keepOnSplit})))}
//#endregion
//#region src/helpers/getTextContentFromNodes.ts
/**
* Returns the text content of a resolved prosemirror position
* @param $from The resolved position to get the text content from
* @param maxMatch The maximum number of characters to match
* @returns The text content
*/var getTextContentFromNodes=function(t,e){if(e===void 0){e=500}var r="";var n=t.parentOffset;t.parent.nodesBetween(Math.max(0,n-e),n,(function(t,e,i,a){var o,u;var s=((o=(u=t.type.spec).toText)===null||o===void 0?void 0:o.call(u,{node:t,pos:e,parent:i,index:a}))||t.textContent||"%leaf%";r+=t.isAtom&&!t.isText?s:s.slice(0,Math.max(0,n-e))}));return r};
//#endregion
//#region src/helpers/isMarkActive.ts
function isMarkActive(t,e,r){if(r===void 0){r={}}var n=t.selection,i=n.empty,a=n.ranges;var o=e?getMarkType(e,t.schema):null;if(i)return!!(t.storedMarks||t.selection.$from.marks()).filter((function(t){if(!o)return true;return o.name===t.type.name})).find((function(t){return objectIncludes(t.attrs,r,{strict:false})}));var u=0;var s=[];a.forEach((function(e){var r=e.$from,n=e.$to;var i=r.pos;var a=n.pos;t.doc.nodesBetween(i,a,(function(t,e){if(o&&t.inlineContent&&!t.type.allowsMarkType(o))return false;if(!t.isText&&!t.marks.length)return;var r=Math.max(i,e);var n=Math.min(a,e+t.nodeSize);var f=n-r;u+=f;s.push.apply(s,t.marks.map((function(t){return{mark:t,from:r,to:n}})))}))}));if(u===0)return false;var f=s.filter((function(t){if(!o)return true;return o.name===t.mark.type.name})).filter((function(t){return objectIncludes(t.mark.attrs,r,{strict:false})})).reduce((function(t,e){return t+e.to-e.from}),0);var l=s.filter((function(t){if(!o)return true;return t.mark.type!==o&&t.mark.type.excludes(o)})).reduce((function(t,e){return t+e.to-e.from}),0);return(f>0?f+l:f)>=u}
//#endregion
//#region src/helpers/isActive.ts
function isActive(t,e,r){if(r===void 0){r={}}if(!e)return isNodeActive(t,null,r)||isMarkActive(t,null,r);var n=getSchemaTypeNameByName(e,t.schema);if(n==="node")return isNodeActive(t,e,r);if(n==="mark")return isMarkActive(t,e,r);return false}
//#endregion
//#region src/helpers/isAtEndOfNode.ts
var isAtEndOfNode=function(t,e){var r=t.selection,n=r.$from,i=r.$to,a=r.$anchor;if(e){var o=findParentNode((function(t){return t.type.name===e}))(t.selection);if(!o)return false;var u=t.doc.resolve(o.pos+1);if(a.pos+1===u.end())return true;return false}if(i.parentOffset<i.parent.nodeSize-2||n.pos!==i.pos)return false;return true};
//#endregion
//#region src/helpers/isAtStartOfNode.ts
var isAtStartOfNode=function(t){var e=t.selection,r=e.$from,n=e.$to;if(r.parentOffset>0||r.pos!==n.pos)return false;return true};
//#endregion
//#region src/helpers/isExtensionRulesEnabled.ts
function isExtensionRulesEnabled(t,e){if(Array.isArray(e))return e.some((function(e){return(typeof e==="string"?e:e.name)===t.name}));return e}
//#endregion
//#region src/helpers/isList.ts
function isList(t,e){var r=splitExtensions(e).nodeExtensions;var n=r.find((function(e){return e.name===t}));if(!n)return false;var i=callOrReturn(getExtensionField(n,"group",{name:n.name,options:n.options,storage:n.storage}));if(typeof i!=="string")return false;return i.split(" ").includes("list")}
//#endregion
//#region src/helpers/isNodeEmpty.ts
/**
* Returns true if the given prosemirror node is empty.
*/function isNodeEmpty(t,e){var r=e===void 0?{}:e,n=r.checkChildren,i=n===void 0?true:n,a=r.ignoreWhitespace,o=a===void 0?false:a;if(o){if(t.type.name==="hardBreak")return true;if(t.isText){var u;return!/\S/.test((u=t.text)!==null&&u!==void 0?u:"")}}if(t.isText)return!t.text;if(t.isAtom||t.isLeaf)return false;if(t.content.childCount===0)return true;if(i){var s=true;t.content.forEach((function(t){if(s===false)return;if(!isNodeEmpty(t,{ignoreWhitespace:o,checkChildren:i}))s=false}));return s}return false}
//#endregion
//#region src/helpers/isNodeSelection.ts
function isNodeSelection(t){return t instanceof NodeSelection}
//#endregion
//#region src/helpers/isProseMirrorStep.ts
/**
* Checks if a value is a ProseMirror step
* @param value The value to check
* @returns - A boolean, if the boolean is true the value is a ProseMirror Step
* @example ```js
* isProseMirrorStep(transaction.steps[0])
* ```
*/function isProseMirrorStep(t){if(t===null||typeof t!=="object")return false;var e=t;if(typeof e.apply!=="function"||typeof e.getMap!=="function"||typeof e.invert!=="function"||typeof e.map!=="function"||typeof e.merge!=="function"||typeof e.toJSON!=="function")return false;return true}
//#endregion
//#region src/helpers/isProseMirrorReplaceStep.ts
/**
* Checks if a value is a ProseMirror replace step result
* @param value The value to check
* @returns - A boolean, if the boolean is true the value is a ProseMirror ReplaceStep
* @example ```js
* isProseMirrorReplaceStep(transaction.steps[0])
* ```
*/function isProseMirrorReplaceStep(t){if(t===null||typeof t!=="object")return false;var e=t;if(!isProseMirrorStep(e))return false;var r=e.toJSON();if(r===null||typeof r!=="object"||r.stepType!=="replace")return false;return true}
//#endregion
//#region src/helpers/MappablePosition.ts
/**
* A class that represents a mappable position in the editor. It can be extended
* by other extensions to add additional position mapping capabilities.
*/var MappablePosition=/** @class */function(){function t(t){this.position=t}
/**
    * Creates a MappablePosition from a JSON object.
    */t.fromJSON=function(e){return new t(e.position)};
/**
    * Converts the MappablePosition to a JSON object.
    */t.prototype.toJSON=function(){return{position:this.position}};return t}();
/**
* Calculates the new position after applying a transaction.
*
* @returns The new mappable position and the map result.
*/function getUpdatedPosition(t,e){var r=e.mapping.mapResult(t.position);return{position:new MappablePosition(r.pos),mapResult:r}}
/**
* Creates a MappablePosition from a position number. This is the default
* implementation for Tiptap core. It can be overridden by other Tiptap
* extensions.
*
* @param position The position (as a number) where the MappablePosition will be created.
* @returns A new MappablePosition instance at the given position.
*/function createMappablePosition(t){return new MappablePosition(t)}
//#endregion
//#region src/commands/setMark.ts
function canSetMark(t,e,r){var n=e.selection;var i=null;if(isTextSelection(n))i=n.$cursor;if(i){var a;var o=(a=t.storedMarks)!==null&&a!==void 0?a:i.marks();return i.parent.type.allowsMarkType(r)&&(!!r.isInSet(o)||!o.some((function(t){return t.type.excludes(r)})))}var u=n.ranges;return u.some((function(e){var n=e.$from,i=e.$to;var a=n.depth===0?t.doc.inlineContent&&t.doc.type.allowsMarkType(r):false;t.doc.nodesBetween(n.pos,i.pos,(function(t,e,n){if(a)return false;if(t.isInline){var i=!n||n.type.allowsMarkType(r);var o=!!r.isInSet(t.marks)||!t.marks.some((function(t){return t.type.excludes(r)}));a=i&&o}return!a}));return a}))}var setMark=function(t,e){if(e===void 0){e={}}return function(r){var n=r.tr,i=r.state,a=r.dispatch;var o=n.selection;var u=o.empty,s=o.ranges;var f=getMarkType(t,i.schema);if(a){if(u){var l=getMarkAttributes(i,f);n.addStoredMark(f.create(__assign(__assign({},l),e)))}else s.forEach((function(t){var r=t.$from.pos;var a=t.$to.pos;i.doc.nodesBetween(r,a,(function(t,i){var o=Math.max(i,r);var u=Math.min(i+t.nodeSize,a);if(t.marks.find((function(t){return t.type===f})))t.marks.forEach((function(t){if(f===t.type)n.addMark(o,u,f.create(__assign(__assign({},t.attrs),e)))}));else n.addMark(o,u,f.create(e))}))}))}return canSetMark(i,n,f)}};
//#endregion
//#region src/commands/setMeta.ts
var setMeta=function(t,e){return function(r){var n=r.tr;n.setMeta(t,e);return true}};
//#endregion
//#region src/commands/setNode.ts
var setNode=function(t,e){if(e===void 0){e={}}return function(r){var n=r.state,i=r.dispatch,a=r.chain;var o=getNodeType(t,n.schema);var u;if(n.selection.$anchor.sameParent(n.selection.$head))u=n.selection.$anchor.parent.attrs;if(!o.isTextblock){console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');return false}return a().command((function(t){var r=t.commands;if(setBlockType(o,__assign(__assign({},u),e))(n))return true;return r.clearNodes()})).command((function(t){var r=t.state;return setBlockType(o,__assign(__assign({},u),e))(r,i)})).run()}};
//#endregion
//#region src/commands/setNodeSelection.ts
var setNodeSelection=function(t){return function(e){var r=e.tr,n=e.dispatch;if(n){var i=r.doc;var a=minMax(t,0,i.content.size);var o=NodeSelection.create(i,a);r.setSelection(o)}return true}};
//#endregion
//#region src/commands/setTextDirection.ts
var setTextDirection=function(t,e){return function(r){var n=r.tr,i=r.state,a=r.dispatch;var o=i.selection;var u;var s;if(typeof e==="number"){u=e;s=e}else if(e&&"from"in e&&"to"in e){u=e.from;s=e.to}else{u=o.from;s=o.to}if(a)n.doc.nodesBetween(u,s,(function(e,r){if(e.isText)return;n.setNodeMarkup(r,void 0,__assign(__assign({},e.attrs),{dir:t}))}));return true}};
//#endregion
//#region src/commands/setTextSelection.ts
var setTextSelection=function(t){return function(e){var r=e.tr,n=e.dispatch;if(n){var i=r.doc;var a=typeof t==="number"?{from:t,to:t}:t,o=a.from,u=a.to;var s=TextSelection.atStart(i).from;var f=TextSelection.atEnd(i).to;var l=minMax(o,s,f);var c=minMax(u,s,f);var v=TextSelection.create(i,l,c);r.setSelection(v)}return true}};
//#endregion
//#region src/commands/sinkListItem.ts
var sinkListItem$1=function(t){return function(e){var r=e.state,n=e.dispatch;var i=getNodeType(t,r.schema);return sinkListItem(i)(r,n)}};
//#endregion
//#region src/commands/splitBlock.ts
function ensureMarks(t,e){var r=t.storedMarks||t.selection.$to.parentOffset&&t.selection.$from.marks();if(r){var n=r.filter((function(t){return e===null||e===void 0?void 0:e.includes(t.type.name)}));t.tr.ensureMarks(n)}}var splitBlock=function(t){var e=t===void 0?{}:t,r=e.keepMarks,n=r===void 0?true:r;return function(t){var e=t.tr,r=t.state,i=t.dispatch,a=t.editor;var o=e.selection,u=e.doc;var s=o.$from,f=o.$to;var l=a.extensionManager.attributes;var c=getSplittedAttributes(l,s.node().type.name,s.node().attrs);if(o instanceof NodeSelection&&o.node.isBlock){if(!s.parentOffset||!canSplit(u,s.pos))return false;if(i){if(n)ensureMarks(r,a.extensionManager.splittableMarks);e.split(s.pos).scrollIntoView()}return true}if(!s.parent.isBlock)return false;var v=f.parentOffset===f.parent.content.size;var h=s.depth===0?void 0:defaultBlockAt(s.node(-1).contentMatchAt(s.indexAfter(-1)));var d=v&&h?[{type:h,attrs:c}]:void 0;var p=o instanceof TextSelection&&!o.empty?EditorState.create({doc:e.doc,selection:o}).tr.deleteSelection():null;var g=p?p.doc:e.doc;var m=p?p.mapping.map(s.pos):s.pos;var b=canSplit(g,m,1,d);if(!d&&!b&&canSplit(g,m,1,h?[{type:h}]:void 0)){b=true;d=h?[{type:h,attrs:c}]:void 0}if(i){if(b){var w=e.steps.length;if(o instanceof TextSelection)e.deleteSelection();e.split(e.mapping.slice(w).map(s.pos),1,d);if(h&&!v&&!s.parentOffset&&s.parent.type!==h){var S=e.mapping.slice(w).map(s.before());var E=e.doc.resolve(S);if(s.node(-1).canReplaceWith(E.index(),E.index()+1,h))e.setNodeMarkup(e.mapping.slice(w).map(s.before()),h)}}if(n)ensureMarks(r,a.extensionManager.splittableMarks);e.scrollIntoView()}return b}};
//#endregion
//#region src/commands/splitListItem.ts
var splitListItem=function(t,e){if(e===void 0){e={}}return function(r){var n=r.tr,i=r.state,a=r.dispatch,o=r.editor;var u=getNodeType(t,i.schema);var s=i.selection,f=s.$from,l=s.$to;var c=i.selection.node;if(c&&c.isBlock||f.depth<2||!f.sameParent(l))return false;var v=f.node(-1);if(v.type!==u)return false;var h=o.extensionManager.attributes;if(f.parent.content.size===0&&f.node(-1).childCount===f.indexAfter(-1)){if(f.depth===2||f.node(-3).type!==u||f.index(-2)!==f.node(-2).childCount-1)return false;if(a){var d;var p=Fragment.empty;var g=f.index(-1)?1:f.index(-2)?2:3;for(var m=f.depth-g;m>=f.depth-3;m-=1)p=Fragment.from(f.node(m).copy(p));var b=f.indexAfter(-1)<f.node(-2).childCount?1:f.indexAfter(-2)<f.node(-3).childCount?2:3;var w=__assign(__assign({},getSplittedAttributes(h,f.node().type.name,f.node().attrs)),e);var S=((d=u.contentMatch.defaultType)===null||d===void 0?void 0:d.createAndFill(w))||void 0;p=p.append(Fragment.from(u.createAndFill(null,S)||void 0));var E=f.before(f.depth-(g-1));n.replace(E,f.after(-b),new Slice(p,4-g,0));var T=-1;n.doc.nodesBetween(E,n.doc.content.size,(function(t,e){if(T>-1)return false;if(t.isTextblock&&t.content.size===0)T=e+1}));if(T>-1)n.setSelection(TextSelection.near(n.doc.resolve(T)));n.scrollIntoView()}return true}var y=l.pos===f.end()?v.contentMatchAt(0).defaultType:null;var k=__assign(__assign({},getSplittedAttributes(h,v.type.name,v.attrs)),e);var R=__assign(__assign({},getSplittedAttributes(h,f.node().type.name,f.node().attrs)),e);var x=f.parentOffset===0&&f.index(-1)===0;var A=f.before(-1);n.delete(f.pos,l.pos);var C=x?v.attrs:k;var _=y?[{type:u,attrs:C},{type:y,attrs:R}]:[{type:u,attrs:C}];if(!canSplit(n.doc,f.pos,2))return false;if(a){var O=i.selection,M=i.storedMarks;var N=o.extensionManager.splittableMarks;var L=M||O.$to.parentOffset&&O.$from.marks();n.split(f.pos,2,_).scrollIntoView();if(x)n.setNodeMarkup(A,void 0,k);if(!L||!a)return true;var I=L.filter((function(t){return N.includes(t.type.name)}));n.ensureMarks(I)}return true}};
//#endregion
//#region src/commands/utils/createNode.ts
/** Creates a node when its content and required attributes are valid. */function createNode(t,e,r){if(!t.validContent(e))return null;try{return t.create(r,e)}catch(t){return null}}
//#endregion
//#region src/commands/utils/flushPendingContent.ts
/** Converts and appends the content accumulated for the current list item. */function flushPendingContent(t,e){if(t.pendingContent.length===0)return true;var r=createNode(e,Fragment.from(t.pendingContent));if(!r)return false;t.items.push(r);t.pendingContent=[];return true}
//#endregion
//#region src/commands/utils/appendContentNode.ts
/** Appends a content node to the current item or starts a new item when needed. */function appendContentNode(t,e,r){if(r.validContent(Fragment.from(__spreadArray(__spreadArray([],e.pendingContent,true),[t],false)))){e.pendingContent.push(t);return true}if(!flushPendingContent(e,r)||!r.validContent(Fragment.from(t)))return false;e.pendingContent.push(t);return true}
//#endregion
//#region src/commands/utils/appendNestedList.ts
/** Preserves a nested list when supported or flattens its converted items. */function appendNestedList(t,e,r,n){var i;var a=n(t,r);if(!a)return false;var o=createNode(r.listType,Fragment.from(a),t.attrs);if(!o)return false;if(r.itemType.validContent(Fragment.from(__spreadArray(__spreadArray([],e.pendingContent,true),[o],false)))){e.pendingContent.push(o);return true}if(!flushPendingContent(e,r.itemType))return false;(i=e.items).push.apply(i,a);return true}
//#endregion
//#region src/commands/utils/convertListItem.ts
/** Converts one source list item into one or more target list items. */function convertListItem(t,e,r){var n={items:[],pendingContent:[]};for(var i=0;i<t.childCount;i+=1){var a=t.child(i);if(!(e.isListNode(a)?appendNestedList(a,n,e,r):appendContentNode(a,n,e.itemType)))return null}return flushPendingContent(n,e.itemType)?n.items:null}
//#endregion
//#region src/commands/utils/convertListItems.ts
/** Recursively converts all items in a source list to the target list schema. */function convertListItems(t,e){var r=[];for(var n=0;n<t.childCount;n+=1){var i=convertListItem(t.child(n),e,convertListItems);if(!i)return null;r.push.apply(r,i)}return r}
//#endregion
//#region src/commands/utils/findNodePosition.ts
/** Finds a descendant node's position relative to its root node. */function findNodePosition(t,e){var r=null;t.descendants((function(t,n){if(t!==e)return true;r=n;return false}));return r}
//#endregion
//#region src/commands/toggleList.ts
/**
* Normalise a list type attribute for comparison.
* Treats null, undefined, and "1" as equivalent (the default numeric type).
*/function normalizeListType(t){return!t||t==="1"?null:t}
/**
* Check if two list type attributes are compatible for joining.
* Lists can only join when they have the same type (both default, or both the same non-default type).
*/function areListTypesCompatible(t,e){return normalizeListType(t)===normalizeListType(e)}var joinListBackwards=function(t,e){var r=findParentNode((function(t){return t.type===e}))(t.selection);if(!r)return true;var n=t.doc.resolve(Math.max(0,r.pos-1)).before(r.depth);if(n===void 0)return true;var i=t.doc.nodeAt(n);if(!(r.node.type===(i===null||i===void 0?void 0:i.type)&&canJoin(t.doc,r.pos)))return true;if(!areListTypesCompatible(r.node.attrs.type,i===null||i===void 0?void 0:i.attrs.type))return true;t.join(r.pos);return true};var joinListForwards=function(t,e){var r=findParentNode((function(t){return t.type===e}))(t.selection);if(!r)return true;var n=t.doc.resolve(r.start).after(r.depth);if(n===void 0)return true;var i=t.doc.nodeAt(n);if(!(r.node.type===(i===null||i===void 0?void 0:i.type)&&canJoin(t.doc,n)))return true;if(!areListTypesCompatible(r.node.attrs.type,i===null||i===void 0?void 0:i.attrs.type))return true;t.join(n);return true};function createInnerSelectionForWholeDocList(t){var e=t.doc;var r=e.firstChild;if(!r)return null;var n=e.resolve(1);var i=e.resolve(r.nodeSize-1);return TextSelection.between(n,i)}var toggleList=function(t,e,r,n){if(n===void 0){n={}}return function(i){var a=i.editor,o=i.tr,u=i.state,s=i.dispatch,f=i.chain,l=i.commands,c=i.can;var v=a.extensionManager,h=v.extensions,d=v.splittableMarks;var p=getNodeType(t,u.schema);var g=getNodeType(e,u.schema);var m=u.selection,b=u.storedMarks;var w=m.$from,S=m.$to;var E=w.blockRange(S);var T=b||m.$to.parentOffset&&m.$from.marks();if(!E)return false;var y=findParentNode((function(t){return isList(t.type.name,h)}))(m);var k=m.from===0&&m.to===u.doc.content.size;var R=u.doc.content.content;var x=R.length===1?R[0]:null;var A=k&&x&&isList(x.type.name,h)?{node:x,pos:0}:null;var C=y!==null&&y!==void 0?y:A;var _=!!y&&E.depth>=1&&E.depth-y.depth<=1;var O=!!A;if((_||O)&&C){if(C.node.type===p){if(k&&O)return f().command((function(t){var e=t.tr,r=t.dispatch;var n=createInnerSelectionForWholeDocList(e);if(!n)return false;e.setSelection(n);if(r)r(e);return true})).liftListItem(g).run();return l.liftListItem(g)}if(isList(C.node.type.name,h)&&p.validContent(C.node.content))return f().command((function(){o.setNodeMarkup(C.pos,p);return true})).command((function(){return joinListBackwards(o,p)})).command((function(){return joinListForwards(o,p)})).run();if(isList(C.node.type.name,h)){var M;var N=(M=C.node.firstChild)===null||M===void 0?void 0:M.type;if(N&&N!==g){var L=convertListItems(C.node,{listType:p,itemType:g,isListNode:function(t){return isList(t.type.name,h)}});var I=L?Fragment.from(L):null;if(!I||!p.validContent(I))return false;return f().command((function(){var t=o.selection,e=t.$anchor,r=t.$head;var i=e.parent;var a=r.parent;var u=e.parentOffset;var s=r.parentOffset;var f;try{f=p.create(n,I)}catch(t){return false}o.replaceWith(C.pos,C.pos+C.node.nodeSize,f);if(i.inlineContent&&a.inlineContent){var l=findNodePosition(f,i);var c=findNodePosition(f,a);if(l!==null&&c!==null){var v=C.pos+l+2+u;var h=C.pos+c+2+s;o.setSelection(TextSelection.create(o.doc,v,h))}}return true})).command((function(){return joinListBackwards(o,p)})).command((function(){return joinListForwards(o,p)})).run()}}}if(!r||!T||!s)return f().command((function(){if(c().wrapInList(p,n))return true;return l.clearNodes()})).wrapInList(p,n).command((function(){return joinListBackwards(o,p)})).command((function(){return joinListForwards(o,p)})).run();return f().command((function(){var t=c().wrapInList(p,n);var e=T.filter((function(t){return d.includes(t.type.name)}));o.ensureMarks(e);if(t)return true;return l.clearNodes()})).wrapInList(p,n).command((function(){return joinListBackwards(o,p)})).command((function(){return joinListForwards(o,p)})).run()}};
//#endregion
//#region src/commands/toggleMark.ts
var toggleMark=function(t,e,r){if(e===void 0){e={}}if(r===void 0){r={}}return function(n){var i=n.state,a=n.commands;var o=r.extendEmptyMarkRange,u=o===void 0?false:o;var s=getMarkType(t,i.schema);if(isMarkActive(i,s,e))return a.unsetMark(s,{extendEmptyMarkRange:u});return a.setMark(s,e)}};
//#endregion
//#region src/commands/toggleNode.ts
var toggleNode=function(t,e,r){if(r===void 0){r={}}return function(n){var i=n.state,a=n.commands;var o=getNodeType(t,i.schema);var u=getNodeType(e,i.schema);var s=isNodeActive(i,o,r);var f;if(i.selection.$anchor.sameParent(i.selection.$head))f=i.selection.$anchor.parent.attrs;if(s)return a.setNode(u,f);return a.setNode(o,__assign(__assign({},f),r))}};
//#endregion
//#region src/commands/toggleWrap.ts
var toggleWrap=function(t,e){if(e===void 0){e={}}return function(r){var n=r.state,i=r.commands;var a=getNodeType(t,n.schema);if(isNodeActive(n,a,e))return i.lift(a);return i.wrapIn(a,e)}};
//#endregion
//#region src/commands/undoInputRule.ts
var undoInputRule=function(){return function(t){var e=t.state,r=t.dispatch;var n=e.plugins;for(var i=0;i<n.length;i+=1){var a=n[i];var o=void 0;if(a.spec.isInputRules&&(o=a.getState(e))){if(r){var u=e.tr;var s=o.transform;for(var f=s.steps.length-1;f>=0;f-=1)u.step(s.steps[f].invert(s.docs[f]));if(o.text){var l=u.doc.resolve(o.from).marks();u.replaceWith(o.from,o.to,e.schema.text(o.text,l))}else u.delete(o.from,o.to)}return true}}return false}};
//#endregion
//#region src/commands/unsetAllMarks.ts
var unsetAllMarks=function(t){if(t===void 0){t={}}return function(e){var r=e.tr,n=e.dispatch,i=e.editor;var a=t.ignoreClearable,o=a===void 0?false:a;var u=r.selection;var s=u.empty,f=u.ranges;if(s)return true;var l=i.extensionManager.nonClearableMarks;if(n){var c=Object.values(i.schema.marks).filter((function(t){return o||!l.includes(t.name)}));f.forEach((function(t){for(var e=0,n=c;e<n.length;e++){var i=n[e];r.removeMark(t.$from.pos,t.$to.pos,i)}}))}return true}};
//#endregion
//#region src/commands/unsetMark.ts
var unsetMark=function(t,e){if(e===void 0){e={}}return function(r){var n=r.tr,i=r.state,a=r.dispatch;var o=e.extendEmptyMarkRange,u=o===void 0?false:o;var s=n.selection;var f=getMarkType(t,i.schema);var l=s.$from,c=s.empty,v=s.ranges;if(!a)return true;if(c&&u){var h;var d=s.from,p=s.to;var g=getMarkRange(l,f,(h=l.marks().find((function(t){return t.type===f})))===null||h===void 0?void 0:h.attrs);if(g){d=g.from;p=g.to}n.removeMark(d,p,f)}else v.forEach((function(t){n.removeMark(t.$from.pos,t.$to.pos,f)}));n.removeStoredMark(f);return true}};
//#endregion
//#region src/commands/unsetTextDirection.ts
var unsetTextDirection=function(t){return function(e){var r=e.tr,n=e.state,i=e.dispatch;var a=n.selection;var o;var u;if(typeof t==="number"){o=t;u=t}else if(t&&"from"in t&&"to"in t){o=t.from;u=t.to}else{o=a.from;u=a.to}if(i)r.doc.nodesBetween(o,u,(function(t,e){if(t.isText)return;var n=__assign({},t.attrs);delete n.dir;r.setNodeMarkup(e,void 0,n)}));return true}};
//#endregion
//#region src/commands/updateAttributes.ts
var updateAttributes=function(t,e){if(e===void 0){e={}}return function(r){var n=r.tr,i=r.state,a=r.dispatch;var o=null;var u=null;var s=getSchemaTypeNameByName(typeof t==="string"?t:t.name,i.schema);if(!s)return false;if(s==="node")o=getNodeType(t,i.schema);if(s==="mark")u=getMarkType(t,i.schema);var f=false;n.selection.ranges.forEach((function(t){var r=t.$from.pos;var s=t.$to.pos;var l;var c;var v;var h;if(n.selection.empty)i.doc.nodesBetween(r,s,(function(t,e){if(o&&o===t.type){f=true;v=Math.max(e,r);h=Math.min(e+t.nodeSize,s);l=e;c=t}}));else i.doc.nodesBetween(r,s,(function(t,i){if(i<r&&o&&o===t.type){f=true;v=Math.max(i,r);h=Math.min(i+t.nodeSize,s);l=i;c=t}if(i>=r&&i<=s){if(o&&o===t.type){f=true;if(a)n.setNodeMarkup(i,void 0,__assign(__assign({},t.attrs),e))}if(u&&t.marks.length)t.marks.forEach((function(o){if(u===o.type){f=true;if(a){var l=Math.max(i,r);var c=Math.min(i+t.nodeSize,s);n.addMark(l,c,u.create(__assign(__assign({},o.attrs),e)))}}}))}}));if(c){if(l!==void 0&&a)n.setNodeMarkup(l,void 0,__assign(__assign({},c.attrs),e));if(u&&c.marks.length)c.marks.forEach((function(t){if(u===t.type&&a)n.addMark(v,h,u.create(__assign(__assign({},t.attrs),e)))}))}}));return f}};var DECORATION_MANAGER_PLUGIN_KEY=new PluginKey("__tiptap_decorations__");
//#endregion
//#region src/commands/updateDecorations.ts
var updateDecorations=function(t){return function(e){var r=e.tr,n=e.dispatch;if(n)r.setMeta(DECORATION_MANAGER_PLUGIN_KEY,{type:"force",name:t});return true}};
//#endregion
//#region src/commands/wrapIn.ts
var wrapIn$1=function(t,e){if(e===void 0){e={}}return function(r){var n=r.state,i=r.dispatch;var a=getNodeType(t,n.schema);return wrapIn(a,e)(n,i)}};
//#endregion
//#region src/commands/wrapInList.ts
var wrapInList$1=function(t,e){if(e===void 0){e={}}return function(r){var n=r.state,i=r.dispatch;var a=getNodeType(t,n.schema);return wrapInList(a,e)(n,i)}};
//#endregion
//#region src/commands/index.ts
var commands_exports=__exportAll({blur:function(){return blur},clearContent:function(){return clearContent},clearNodes:function(){return clearNodes},command:function(){return command},createParagraphNear:function(){return createParagraphNear$1},cut:function(){return cut},deleteCurrentNode:function(){return deleteCurrentNode},deleteNode:function(){return deleteNode},deleteRange:function(){return deleteRange},deleteSelection:function(){return deleteSelection},enter:function(){return enter},exitCode:function(){return exitCode$1},extendMarkRange:function(){return extendMarkRange},first:function(){return first},focus:function(){return focus},forEach:function(){return forEach},insertContent:function(){return insertContent},insertContentAt:function(){return insertContentAt},insertDefaultBlock:function(){return insertDefaultBlock},joinBackward:function(){return joinBackward$1},joinDown:function(){return joinDown$1},joinForward:function(){return joinForward$1},joinItemBackward:function(){return joinItemBackward},joinItemForward:function(){return joinItemForward},joinTextblockBackward:function(){return joinTextblockBackward$1},joinTextblockForward:function(){return joinTextblockForward$1},joinUp:function(){return joinUp$1},keyboardShortcut:function(){return keyboardShortcut},lift:function(){return lift$1},liftEmptyBlock:function(){return liftEmptyBlock$1},liftListItem:function(){return liftListItem$1},newlineInCode:function(){return newlineInCode$1},resetAttributes:function(){return resetAttributes},scrollIntoView:function(){return scrollIntoView},selectAll:function(){return selectAll},selectNodeBackward:function(){return selectNodeBackward$1},selectNodeForward:function(){return selectNodeForward$1},selectParentNode:function(){return selectParentNode$1},selectTextblockEnd:function(){return selectTextblockEnd$1},selectTextblockStart:function(){return selectTextblockStart$1},setContent:function(){return setContent},setMark:function(){return setMark},setMeta:function(){return setMeta},setNode:function(){return setNode},setNodeSelection:function(){return setNodeSelection},setTextDirection:function(){return setTextDirection},setTextSelection:function(){return setTextSelection},sinkListItem:function(){return sinkListItem$1},splitBlock:function(){return splitBlock},splitListItem:function(){return splitListItem},toggleList:function(){return toggleList},toggleMark:function(){return toggleMark},toggleNode:function(){return toggleNode},toggleWrap:function(){return toggleWrap},undoInputRule:function(){return undoInputRule},unsetAllMarks:function(){return unsetAllMarks},unsetMark:function(){return unsetMark},unsetTextDirection:function(){return unsetTextDirection},updateAttributes:function(){return updateAttributes},updateDecorations:function(){return updateDecorations},wrapIn:function(){return wrapIn$1},wrapInList:function(){return wrapInList$1}});
//#endregion
//#region src/decorations/decorationApplyScope.ts
/**
* Tracks which editors are running decoration create() callbacks inside state.apply,
* using a private WeakMap to keep this off the public Editor surface.
*/var depthByEditor=new WeakMap;
/**
* Marks callback as decoration-apply work for editor, so editor.state can warn
* about stale reads. Counts depth to handle nested applies.
*
* @param editor The editor the decorations belong to
* @param callback The work to run inside the scope
* @returns Whatever `callback` returns
* @example
* runInDecorationApplyScope(editor, () => spec.create({ editor, state, view }))
*/function runInDecorationApplyScope(t,e){var r;depthByEditor.set(t,((r=depthByEditor.get(t))!==null&&r!==void 0?r:0)+1);try{return e()}finally{var n;var i=((n=depthByEditor.get(t))!==null&&n!==void 0?n:1)-1;if(i>0)depthByEditor.set(t,i);else depthByEditor.delete(t)}}
//#endregion
//#region src/EventEmitter.ts
var EventEmitter=/** @class */function(){function t(){this.callbacks={}}t.prototype.on=function(t,e){if(!this.callbacks[t])this.callbacks[t]=[];this.callbacks[t].push(e);return this};t.prototype.emit=function(t){var e=this;var r=[];for(var n=1;n<arguments.length;n++){r[n-1]=arguments[n]}var i=this.callbacks[t];if(i)i.forEach((function(t){return t.apply(e,r)}));return this};t.prototype.off=function(t,e){var r=this.callbacks[t];if(r){if(e)this.callbacks[t]=r.filter((function(t){return t!==e}));else delete this.callbacks[t]}return this};t.prototype.once=function(t,e){var r=this;var n=function(){var i=[];for(var a=0;a<arguments.length;a++){i[a]=arguments[a]}r.off(t,n);e.apply(r,i)};return this.on(t,n)};t.prototype.removeAllListeners=function(){this.callbacks={}};return t}();
//#endregion
//#region src/decorations/helpers/decorationsToPMDecorations.ts
function isWidgetDecoration(t){return t.kind==="widget"}
/**
* Converts a list of decorations to ProseMirror decorations.
* @param decorations The decorations to convert.
* @param extensionName The name of the extension that created the decorations.
* @returns The converted decorations and the widget keys.
*/function decorationsToPMDecorations(t,e){var r=[];var n=new Set;for(var i=0,a=t;i<a.length;i++){var o=a[i];if(o.kind==="widget"){if(isWidgetDecoration(o))n.add(o.key)}r.push(o.toPMDecoration(e))}return{decorations:r,widgetKeys:n}}
//#endregion
//#region src/decorations/helpers/buildDecorationSet.ts
/**
* Builds a DecorationSet from a list of decorations.
* @param doc The document to build the decoration set for.
* @param decorations The decorations to build the set from.
* @param extensionName The name of the extension that created the decorations.
* @returns The built decoration set and the widget keys.
*/function buildDecorationSet(t,e,r){var n=decorationsToPMDecorations(e,r),i=n.decorations,a=n.widgetKeys;return{set:DecorationSet.create(t,i),widgetKeys:a}}
//#endregion
//#region src/decorations/helpers/rangeOwnsPosition.ts
/**
* Whether the block range `[from, to)` owns a decoration at `position`.
*
* `to` is the next block's start, so that block owns it. The last block is the
* exception: nothing follows it, so it owns the end of the document.
*
* @param options The position, the range, and the document size.
* @returns True when the range owns the position.
* @example
* // <p>foo</p><p>bar</p>, blocks [0, 5] and [5, 10]
* rangeOwnsPosition({ position: 5, from: 0, to: 5, docSize: 10 }) // false, block 2 owns it
* rangeOwnsPosition({ position: 5, from: 5, to: 10, docSize: 10 }) // true
* rangeOwnsPosition({ position: 10, from: 5, to: 10, docSize: 10 }) // true, end of document
*/function rangeOwnsPosition(t){var e=t.position,r=t.from,n=t.to,i=t.docSize;if(e<r)return false;if(e<n)return true;return e===n&&n===i}
//#endregion
//#region src/decorations/helpers/filterOutOfRangeDecorations.ts
/**
* Filter decorations the block range `[from, to)` does not own.
* Must match the stale sweep in `DecorationManager.rebuildRanges`.
*
* @param options The decorations, the range, and the warning bookkeeping.
* @returns The filtered decorations.
*/function filterOutOfRangeDecorations(t){var e=t.decorations,r=t.from,n=t.to,i=t.docSize,a=t.extensionName,o=t.warnedExtensions;return e.filter((function(t){if(rangeOwnsPosition({position:t.anchor,from:r,to:n,docSize:i}))return true;if(t.anchor===n)return false;if(!o.has(a)){o.add(a);console.warn('[tiptap warn]: Extension "'.concat(a,'" returned a decoration outside the requested range [').concat(r,", ").concat(n,"). It was ignored."))}return false}))}
//#endregion
//#region src/decorations/helpers/widgetKeyOf.ts
/**
* Extracts the widget key from a decoration spec.
* @param decoration The decoration to extract the key from.
* @returns The widget key, or undefined if the decoration has no key.
*/function widgetKeyOf(t){var e;var r=(e=t.spec)===null||e===void 0?void 0:e.key;return typeof r==="string"?r:void 0}
//#endregion
//#region src/decorations/helpers/isAttrStep.ts
/**
* Whether a step only sets a node attribute.
*
* Matched by `jsonID` rather than `instanceof`, which fails when two copies of
* prosemirror-transform are loaded.
*
* @param step The step to check.
* @returns `true` for an `AttrStep`, which carries the target node's position.
* @example
* if (isAttrStep(step)) {
*   rebuildBlockAt(step.pos)
* }
*/function isAttrStep(t){return t.jsonID==="attr"}
//#endregion
//#region src/decorations/helpers/hasResolvableChangedRange.ts
/**
* Check if a step has a resolvable changed range.
* @param step The step to check.
* @returns True if the step has a resolvable changed range, false otherwise.
*/function hasResolvableChangedRange(t){var e=false;t.getMap().forEach((function(){e=true}));if(e||isAttrStep(t))return true;var r=t;return typeof r.from==="number"&&typeof r.to==="number"}
//#endregion
//#region src/decorations/helpers/getRebuildRanges.ts
/**
* Expands a changed range to the top-level blocks it touches. Blocks are
* ordered, so the walk stops as soon as it passes the range.
*/function blockRangeFor(t,e){var r=null;var n=0;var i=0;for(var a=0;a<t.childCount;a+=1){if(i>e.to)break;var o=i+t.child(a).nodeSize;if(o>=e.from){if(r===null)r=i;n=o}i=o}return r===null?null:{from:r,to:n}}
/**
* Returns the top-level block ranges to recompute after a transaction,
* or `{ type: 'full' }` when the whole document must be rebuilt.
* @param tr The transaction to inspect.
* @param doc The new document after the transaction.
* @returns The block ranges to recompute, or a full-recompute signal.
*/function getRebuildRanges(t,e){if(t.steps.some((function(t){return!hasResolvableChangedRange(t)})))return{type:"full"};var r=getChangedRanges(t).map((function(t){var e=t.newRange;return e}));t.steps.forEach((function(e,n){if(!isAttrStep(e))return;var i=t.mapping.slice(n);r.push({from:i.map(e.pos,-1),to:i.map(e.pos+1)})}));var n=[];for(var i=0,a=r;i<a.length;i++){var o=a[i];var u=blockRangeFor(e,o);if(u)n.push(u)}n.sort((function(t,e){return t.from-e.from}));var s=[];for(var f=0,l=n;f<l.length;f++){var c=l[f];var v=s[s.length-1];if(v&&c.from<=v.to)v.to=Math.max(v.to,c.to);else s.push(__assign({},c))}return{type:"ranges",ranges:s}}
//#endregion
//#region src/decorations/helpers/mapDecorationSet.ts
/**
* Maps a decoration set through a mapping and prunes the keys of any widget
* dropped because its position was deleted.
* @param set The decoration set to map.
* @param mapping The mapping to use.
* @param doc The document to map the set through.
* @param widgetKeys The set of widget keys to prune.
* @returns The mapped decoration set.
*/function mapDecorationSet(t,e,r,n){return t.map(e,r,{onRemove:function(t){var e=t===null||t===void 0?void 0:t.key;if(typeof e==="string")n.delete(e)}})}
//#endregion
//#region src/decorations/helpers/mapDecorations.ts
/**
* Moves an extension's existing decorations to their new positions after a
* transaction, and prunes widget keys for any widget whose position was deleted.
* @param name The name of the decoration extension.
* @param previous The previous decoration manager state.
* @param tr The transaction to map through.
* @returns The updated decoration set and widget keys.
*/function mapDecorations(t,e,r){var n,i;var a=(n=e.decorationSetsByExtension[t])!==null&&n!==void 0?n:DecorationSet.empty;var o=new Set((i=e.widgetKeysByExtension[t])!==null&&i!==void 0?i:[]);return{set:mapDecorationSet(a,r.mapping,r.doc,o),widgetKeys:o}}
//#endregion
//#region src/decorations/helpers/mergeDecorationSets.ts
/**
* Merges multiple decoration sets into a single decoration set.
* @param doc The document to merge the decoration sets for.
* @param decorationSetsByExtension The decoration sets to merge.
* @returns The merged decoration set.
*/function mergeDecorationSets(t,e){var r=Object.values(e).flatMap((function(t){return t.find()}));return DecorationSet.create(t,r)}
//#endregion
//#region src/decorations/helpers/unionWidgetKeys.ts
/**
* Unions all widget keys from multiple extensions into a single set.
* @param widgetKeysByExtension The widget keys to union.
* @returns The unioned widget keys.
*/function unionWidgetKeys(t){var e=new Set;for(var r=0,n=Object.values(t);r<n.length;r++){var i=n[r];for(var a=0,o=i;a<o.length;a++){var u=o[a];e.add(u)}}return e}
//#endregion
//#region src/decorations/helpers/validateDecorationSpec.ts
/**
* Validates a decoration spec to ensure it follows the correct pattern for its update strategy.
* @param name The name of the extension.
* @param spec The decoration spec to validate
*/function validateDecorationSpec(t,e){var r;switch((r=e.update)!==null&&r!==void 0?r:"document"){case"document":if(e.createInRange)throw new Error('[tiptap error]: Extension "'.concat(t,'" provides createInRange() but does not use the "changedRanges" decoration update strategy.'));return;case"changedRanges":if(!e.createInRange)throw new Error('[tiptap error]: Extension "'.concat(t,'" uses the "changedRanges" decoration update strategy but does not provide createInRange().'));return;case"manual":if(e.createInRange)throw new Error('[tiptap error]: Extension "'.concat(t,'" uses the "manual" decoration update strategy, which is not compatible with createInRange(). createInRange() requires the "changedRanges" strategy.'));if(e.shouldUpdate)throw new Error('[tiptap error]: Extension "'.concat(t,'" cannot combine the "manual" decoration update strategy with shouldUpdate().'));return;default:throw new Error('[tiptap error]: Extension "'.concat(t,'" uses an unknown decoration update strategy. Expected "document", "changedRanges", or "manual".'))}}
//#endregion
//#region src/decorations/helpers/shouldRecomputeDecoration.ts
/**
* Decides whether a decoration spec should be recomputed for a transaction.
* @param spec The decoration spec to check.
* @param props Properties containing editor, transaction, and state.
* @param forced Whether recomputation was forced.
* @returns `true` if the decoration should be recomputed.
*/function shouldRecomputeDecoration(t,e,r){if(r)return true;if(t.update==="manual")return false;return t.shouldUpdate?t.shouldUpdate(e):e.tr.docChanged}
//#endregion
//#region src/decorations/DecorationManager.ts
var EMPTY_KEYS=new Set;var DecorationManager=/** @class */function(){function t(t){var e=this;this.warnedWidgetKeys=new Set;this.warnedOutOfRangeExtensions=new Set;this.handleBeforeTransaction=function(t){var r=t.nextState;var n=DECORATION_MANAGER_PLUGIN_KEY.getState(r);if(n)e.warnDuplicateWidgetKeys(n)};this.editor=t.editor;this.entries=this.resolveEntries(t.entries);this.entries.forEach((function(t){var e=t.name,r=t.spec;return validateDecorationSpec(e,r)}));this.plugin=this.entries.length>0?this.createPlugin():null;this.editor.on("beforeTransaction",this.handleBeforeTransaction)}t.prototype.destroy=function(){this.editor.off("beforeTransaction",this.handleBeforeTransaction)};
/**
    * Returns the set of live widget keys from all decoration extensions.
    * @returns A readonly set of widget keys
    */t.prototype.liveWidgetKeys=function(){var t,e;return(t=(e=DECORATION_MANAGER_PLUGIN_KEY.getState(this.editor.state))===null||e===void 0?void 0:e.widgetKeys)!==null&&t!==void 0?t:EMPTY_KEYS};Object.defineProperty(t.prototype,"mountedView",{
/**
        * The mounted editor view, or `null` when destroyed. Decoration callbacks
        * must never receive the placeholder view `editor.view` falls back to.
        * @returns The mounted editor view, or `null`
        */
get:function(){return this.editor.isDestroyed?null:this.editor.view},enumerable:false,configurable:true});
/**
    * Resolves decoration entries by calling the addDecorations function for each extension entry.
    * @param entries The decoration manager entries to resolve
    * @returns An array of resolved decoration entries
    */t.prototype.resolveEntries=function(t){var e=[];for(var r=0,n=t;r<n.length;r++){var i=n[r],a=i.name,o=i.addDecorations;var u=o();if(u)e.push({name:a,spec:u})}return e};
/**
    * Creates the ProseMirror plugin for managing decorations.
    * @returns A ProseMirror plugin with state management
    */t.prototype.createPlugin=function(){var t=this;var e=this,r=e.editor,n=e.entries;return new Plugin({key:DECORATION_MANAGER_PLUGIN_KEY,state:{init:function(e,r){var i={};var a={};for(var o=0,u=n;o<u.length;o++){var s=u[o],f=s.name,l=s.spec;var c=t.buildFullSet(f,l,r),v=c.set,h=c.widgetKeys;i[f]=v;a[f]=h}var d={decorationSetsByExtension:i,widgetKeysByExtension:a,mergedDecorationSet:t.buildMergedSet(r.doc,i),widgetKeys:unionWidgetKeys(a)};t.warnDuplicateWidgetKeys(d);return d},apply:function(e,i,a,o){var u=e.getMeta(DECORATION_MANAGER_PLUGIN_KEY);var s=(u===null||u===void 0?void 0:u.type)==="force"&&!u.name;var f=(u===null||u===void 0?void 0:u.type)==="force"?u.name:void 0;var l={};var c={};var v=new Set;runInDecorationApplyScope(r,(function(){for(var u=0,h=n;u<h.length;u++){var d=h[u],p=d.name,g=d.spec;var m=s||f===p;if(!shouldRecomputeDecoration(g,{editor:r,tr:e,oldState:a,newState:o},m)){var b=mapDecorations(p,i,e);l[p]=b.set;c[p]=b.widgetKeys}else if(g.update==="changedRanges"&&e.docChanged&&!m){var b=t.applyChangedRangesRecompute(p,g,i,e,o);l[p]=b.set;c[p]=b.widgetKeys;v.add(p)}else{var w=t.buildFullSet(p,g,o),S=w.set,E=w.widgetKeys;l[p]=S;c[p]=E;v.add(p)}}}));if(v.size===0&&!e.docChanged)return i;return{decorationSetsByExtension:l,widgetKeysByExtension:c,mergedDecorationSet:t.mergeAfterApply({entries:n,previous:i,tr:e,decorationSetsByExtension:l,recomputedNames:v}),widgetKeys:unionWidgetKeys(c)}}},props:{decorations:function(t){var e,r;return(e=(r=DECORATION_MANAGER_PLUGIN_KEY.getState(t))===null||r===void 0?void 0:r.mergedDecorationSet)!==null&&e!==void 0?e:DecorationSet.empty}}})};
/**
    * Applies changed ranges recomputation to a decoration set, dropping stale decorations and rebuilding only the touched blocks.
    * @param name The name of the decoration extension
    * @param spec The decoration spec
    * @param previous The previous decoration manager state
    * @param tr The transaction to apply
    * @param newState The new editor state
    * @returns The updated decoration set and widget keys
    */t.prototype.applyChangedRangesRecompute=function(t,e,r,n,i){var a=getRebuildRanges(n,i.doc);if(a.type==="full")return this.buildFullSet(t,e,i);return this.rebuildRanges(t,e,r,n,i,a.ranges)};
/**
    * Rebuilds decorations for the changed block ranges: maps the previous set
    * forward, then for each range removes stale decorations, calls
    * `createInRange`, and adds the new ones while syncing widget keys.
    * @param name The extension name.
    * @param spec The decoration spec.
    * @param previous The previous decoration manager state.
    * @param tr The transaction to apply.
    * @param newState The new editor state.
    * @param ranges The block ranges to rebuild.
    * @returns The updated decoration set and widget keys.
    */t.prototype.rebuildRanges=function(t,e,r,n,i,a){var o=this;var u,s;var f=(u=r.decorationSetsByExtension[t])!==null&&u!==void 0?u:DecorationSet.empty;var l=new Set((s=r.widgetKeysByExtension[t])!==null&&s!==void 0?s:[]);var c=mapDecorationSet(f,n.mapping,n.doc,l);var v=i.doc.content.size;var h=function(r,n){var a=c.find(r,n).filter((function(t){return rangeOwnsPosition({position:t.from,from:r,to:n,docSize:v})}));for(var u=0,s=a;u<s.length;u++){var f=s[u];var h=widgetKeyOf(f);if(h)l.delete(h)}c=c.remove(a);var p=decorationsToPMDecorations(filterOutOfRangeDecorations({decorations:d.runCreate(t,"createInRange",(function(){return e.createInRange({editor:o.editor,state:i,view:o.mountedView,from:r,to:n})})),from:r,to:n,docSize:v,extensionName:t,warnedExtensions:d.warnedOutOfRangeExtensions}),t),g=p.decorations,m=p.widgetKeys;c=c.add(i.doc,g);for(var b=0,w=m;b<w.length;b++){var h=w[b];l.add(h)}};var d=this;for(var p=0,g=a;p<g.length;p++){var m=g[p],b=m.from,w=m.to;h(b,w)}return{set:c,widgetKeys:l}};
/**
    * Builds a full decoration set for the entire document.
    * @param name The name of the decoration extension
    * @param spec The decoration spec
    * @param state The editor state
    * @returns The decoration set and widget keys
    */t.prototype.buildFullSet=function(t,e,r){var n=this;var i=this.runCreate(t,"create",(function(){return e.create({editor:n.editor,state:r,view:n.mountedView})}));return buildDecorationSet(r.doc,i,t)};
/**
    * Runs a decoration callback and swallows anything it throws. These run inside
    * `state.apply`, where an uncaught error would abort the whole transaction.
    * @param name The extension name.
    * @param method The callback name, used in the error message.
    * @param create The callback to run.
    * @returns The decorations, or an empty array if the callback threw.
    */t.prototype.runCreate=function(t,e,r){try{return r()}catch(r){console.error('[tiptap error]: Extension "'.concat(t,'" threw in `addDecorations().').concat(e,"()`. Its decorations were dropped for this update."),r);return[]}};t.prototype.warnDuplicateWidgetKeys=function(t){return};
/**
    * Builds the merged DecorationSet during init. Skips the merge for a
    * single extension since its per-extension set is already correct.
    * @param doc The document to build the merged set for.
    * @param decorationSetsByExtension The per-extension decoration sets.
    * @returns The merged decoration set.
    */t.prototype.buildMergedSet=function(t,e){var r=Object.keys(e);if(r.length===1)return e[r[0]];return mergeDecorationSets(t,e)};
/**
    * Computes the merged DecorationSet after apply. Single extension skips the
    * merge; nothing recomputed maps the previous merged set forward; otherwise
    * the merge is rebuilt from the per-extension sets.
    */t.prototype.mergeAfterApply=function(t){var e=t.entries,r=t.previous,n=t.tr,i=t.decorationSetsByExtension,a=t.recomputedNames;if(e.length===1)return i[e[0].name];if(a.size===0)return r.mergedDecorationSet.map(n.mapping,n.doc);return mergeDecorationSets(n.doc,i)};return t}();
//#endregion
//#region src/utilities/canInsertNode.ts
function canInsertNode(t,e){var r=t.selection;var n=r.$from;if(r instanceof NodeSelection){var i=n.index();return n.parent.canReplaceWith(i,i+1,e)}var a=n.depth;while(a>=0){var i=n.index(a);if(n.node(a).contentMatchAt(i).matchType(e))return true;a-=1}return false}
//#endregion
//#region src/utilities/createStyleTag.ts
function createStyleTag(t,e,r){var n=document.querySelector("style[data-tiptap-style".concat("","]"));if(n!==null)return n;var i=document.createElement("style");if(e)i.setAttribute("nonce",e);i.setAttribute("data-tiptap-style".concat(""),"");i.innerHTML=t;document.getElementsByTagName("head")[0].appendChild(i);return i}
//#endregion
//#region src/utilities/getStyleProperty.ts
/**
* Read a CSS property value directly from an element's raw inline `style`
* attribute, bypassing the CSSOM (e.g. `element.style.fontFamily`) which
* canonicalizes values and can change formatting. The original format is
* preserved (quotes, hex vs rgb, etc.).
*
* When a property is declared more than once, the last declaration wins —
* this matches CSS cascade order and is useful when nested spans are merged
* and the child's value should take priority.
*
* Property name comparison is case-insensitive.
*
* @param element - The element whose `style` attribute should be read.
* @param propertyName - The CSS property name (e.g. `font-family`).
* @returns The raw value string, or `null` if the property is not present.
*
* @example
* ```ts
* parseHTML: element => getStyleProperty(element, 'font-family')
* ```
*/function getStyleProperty(t,e){var r=t.getAttribute("style");if(!r)return null;var n=r.split(";").map((function(t){return t.trim()})).filter(Boolean);var i=e.toLowerCase();for(var a=n.length-1;a>=0;a-=1){var o=n[a];var u=o.indexOf(":");if(u===-1)continue;if(o.slice(0,u).trim().toLowerCase()===i)return o.slice(u+1).trim()}return null}
//#endregion
//#region src/utilities/isNumber.ts
function isNumber(t){return typeof t==="number"}
//#endregion
//#region src/utilities/isPlainObject.ts
function getType(t){return Object.prototype.toString.call(t).slice(8,-1)}function isPlainObject(t){if(getType(t)!=="Object")return false;return t.constructor===Object&&Object.getPrototypeOf(t)===Object.prototype}
//#endregion
//#region src/utilities/isValidCSSStyleValue.ts
/**
* Checks whether a value can be inserted into one CSS declaration.
* @param value - The CSS property value.
* @returns Whether the value stays inside one declaration.
*/function isValidCSSStyleValue(t){return typeof t==="string"&&t.trim().length>0&&!/[;{}]/.test(t)}
//#endregion
//#region src/utilities/markdown/parseIndentedBlocks.ts
function dedentLine(t,e){return t.replace(/^[ \t]*/,(function(t){var r=4;var n=0;for(var i=0,a=t;i<a.length;i++){var o=a[i];n+=o==="\t"?r-n%r:1}return" ".repeat(Math.max(0,n-e))}))}function continuesParagraph(t,e){var r="text\n".concat(t,"\n");var n=e(r)[0];return((n===null||n===void 0?void 0:n.type)==="paragraph"||(n===null||n===void 0?void 0:n.type)==="text")&&n.raw===r}
/** Joins paragraph continuation lines and leaves nested blocks for separate parsing. */function parseContinuation(t,e,r){var n;var i=e.split("\n");var a=(n=r.isParagraphContinuation)!==null&&n!==void 0?n:function(t){return continuesParagraph(t,r.blockTokens)};var o=0;for(var u=0,s=i;u<s.length;u++){var f=s[u];if(!f.trim()||!a(f))break;o+=1}return{mainContent:__spreadArray([t],i.slice(0,o).map((function(t){return t.trimStart()})),true).join("\n"),nestedContent:i.slice(o).join("\n")}}
/**
* Parses markdown text into hierarchical indented blocks with proper nesting.
*
* This utility handles:
* - Line-by-line parsing with pattern matching
* - Hierarchical nesting based on indentation levels
* - Nested content collection and parsing
* - Empty line handling
* - Content dedenting for nested blocks
*
* The key difference from flat parsing is that this maintains the hierarchical
* structure where nested items become `nestedTokens` of their parent items,
* rather than being flattened into a single array.
*
* @param src - The markdown source text to parse
* @param config - Configuration object defining how to parse and create tokens
* @param lexer - Markdown lexer for parsing nested content
* @returns Parsed result with hierarchical items, or undefined if no matches
*
* @example
* ```ts
* const result = parseIndentedBlocks(src, {
*   itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
*   extractItemData: (match) => ({
*     indentLevel: match[1].length,
*     mainContent: match[4],
*     checked: match[3].toLowerCase() === 'x'
*   }),
*   createToken: (data, nestedTokens) => ({
*     type: 'taskItem',
*     checked: data.checked,
*     text: data.mainContent,
*     nestedTokens
*   })
* }, lexer)
* ```
*/function parseIndentedBlocks(t,e,r){var n=t.split("\n");var i=[];var a="";var o=0;var u=e.baseIndentSize||2;var s=function(){var t=n[o];var s=t.match(e.itemPattern);if(!s){if(i.length>0)return"break";else if(t.trim()===""){o+=1;a="".concat(a).concat(t,"\n");return"continue"}else return{value:void 0}}var c=e.extractItemData(s);var v=c.indentLevel,h=c.mainContent;a="".concat(a).concat(t,"\n");var d=[h];o+=1;while(o<n.length){var p=n[o];if(p.trim()===""){var g=n.slice(o+1).findIndex((function(t){return t.trim()!==""}));if(g===-1)break;if((((l=n[o+1+g].match(/^(\s*)/))===null||l===void 0||(l=l[1])===null||l===void 0?void 0:l.length)||0)>v){d.push(p);a="".concat(a).concat(p,"\n");o+=1;continue}else break}if((((f=p.match(/^(\s*)/))===null||f===void 0||(f=f[1])===null||f===void 0?void 0:f.length)||0)>v){d.push(p);a="".concat(a).concat(p,"\n");o+=1}else break}var m=void 0;var b=d.slice(1);if(b.length>0){var w=parseContinuation(h,b.map((function(t){return dedentLine(t,v+u)})).join("\n"),r);c.mainContent=w.mainContent;var S=w.nestedContent;if(S.trim()){if(e.customNestedParser)m=e.customNestedParser(S);else m=r.blockTokens(S)}}var E=e.createToken(c,m);i.push(E)};var f,l;while(o<n.length){var c=s();if(typeof c==="object")return c.value;if(c==="break")break}if(i.length===0)return;return{items:i,raw:a.slice(0,t.length)}}
//#endregion
//#region src/utilities/markdown/renderNestedMarkdownContent.ts
/**
* @fileoverview Utility functions for rendering nested content in markdown.
*
* This module provides reusable utilities for extensions that need to render
* content with a prefix on the main line and properly indented nested content.
*/
/**
* Utility function for rendering content with a main line prefix and nested indented content.
*
* This function handles the common pattern of rendering content with:
* 1. A main line with a prefix (like "- " for lists, "> " for blockquotes, etc.)
* 2. Nested content that gets indented properly
*
* @param node - The ProseMirror node representing the content
* @param h - The markdown renderer helper
* @param prefixOrGenerator - Either a string prefix or a function that generates the prefix from context
* @param ctx - Optional context object (used when prefixOrGenerator is a function)
* @param options - Optional rendering options
* @param options.alignNestedToPrefix - Indent nested content to the width of the prefix
* instead of the configured indent size, when the configured one is narrower
* @param options.indentMainContent - Indent continuation lines in the opening paragraph
* @returns The rendered markdown string
*
* @example
* ```ts
* // For a bullet list item with static prefix
* return renderNestedMarkdownContent(node, h, '- ')
*
* // For a task item with static prefix
* const prefix = `- [${node.attrs?.checked ? 'x' : ' '}] `
* return renderNestedMarkdownContent(node, h, prefix)
*
* // For an ordered list item, where the nested block has to line up with the marker
* return renderNestedMarkdownContent(node, h, '10. ', ctx, { alignNestedToPrefix: true })
*
* // For a blockquote with static prefix
* return renderNestedMarkdownContent(node, h, '> ')
*
* // For content with dynamic prefix based on context
* return renderNestedMarkdownContent(node, h, ctx => {
*   if (ctx.parentType === 'orderedList') {
*     return `${ctx.index + 1}. `
*   }
*   return '- '
* }, ctx)
*
* // Custom extension example
* const CustomContainer = Node.create({
*   name: 'customContainer',
*   // ... other config
*   markdown: {
*     render: (node, h) => {
*       const type = node.attrs?.type || 'info'
*       return renderNestedMarkdownContent(node, h, `[${type}] `)
*     }
*   }
* })
* ```
*/var TAB_STOP=4;
/** Width of indentation in Markdown columns, where a tab runs to the next tab stop. */function columnWidth(t){var e=0;for(var r=0,n=t;r<n.length;r++){var i=n[r];e=i==="\t"?e+TAB_STOP-e%TAB_STOP:e+1}return e}function renderNestedMarkdownContent(t,e,r,n,i){if(!t||!Array.isArray(t.content))return"";var a=typeof r==="function"?r(n):r;var o=t.content,u=o[0],s=o.slice(1);var f=e.renderChildren([u]);var l="".concat(a).concat((i===null||i===void 0?void 0:i.indentMainContent)?f.split("\n").map((function(t,r){return r===0?t:e.indent(t)})).join("\n"):f);if(s&&s.length>0)s.forEach((function(t,r){var n,o;var u=(n=(o=e.renderChild)===null||o===void 0?void 0:o.call(e,t,r+1))!==null&&n!==void 0?n:e.renderChildren([t]);if(u!==void 0&&u!==null){var s=function(t){if(!(i===null||i===void 0?void 0:i.alignNestedToPrefix))return e.indent(t);var r=e.indent("");var n=columnWidth(a);return(columnWidth(r)>=n?r:" ".repeat(n))+t};var f=u.split("\n").map((function(t){return t?s(t):s("")})).join("\n");l+=t.type==="paragraph"?"\n\n".concat(f):"\n".concat(f)}}));return l}
//#endregion
//#region src/utilities/mergeDeep.ts
function mergeDeep(t,e){var r=__assign({},t);if(isPlainObject(t)&&isPlainObject(e))Object.keys(e).forEach((function(n){if(isPlainObject(e[n])&&isPlainObject(t[n]))r[n]=mergeDeep(t[n],e[n]);else r[n]=e[n]}));return r}
//#endregion
//#region src/MarkView.ts
function updateMarkViewAttributes(t,e,r){if(r===void 0){r={}}var n=e.state;var i=n.doc,a=n.tr;var o=t;i.descendants((function(e,n){var i=a.mapping.map(n);var u=a.mapping.map(n)+e.nodeSize;var s=null;e.marks.forEach((function(t){if(t!==o)return false;s=t}));if(!s)return;var f=false;Object.keys(r).forEach((function(t){if(r[t]!==s.attrs[t])f=true}));if(f){var l=t.type.create(__assign(__assign({},t.attrs),r));a.removeMark(i,u,t.type);a.addMark(i,u,l)}}));if(a.docChanged)e.view.dispatch(a)}
//#endregion
//#region src/InputRule.ts
var InputRule=/** @class */function(){function t(t){var e;this.find=t.find;this.handler=t.handler;this.undoable=(e=t.undoable)!==null&&e!==void 0?e:true}return t}();var inputRuleMatcherHandler=function(t,e){if(isRegExp(e))return e.exec(t);var r=e(t);if(!r)return null;var n=[r.text];n.index=r.index;n.input=t;n.data=r.data;if(r.replaceWith){if(!r.text.includes(r.replaceWith))console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');n.push(r.replaceWith)}return n};
/**
* Prepares the typed text so the rule handler can inspect the resulting document.
*/function createRuleTransaction(t){var e=t.editor,r=t.from,n=t.to,i=t.text,a=t.insertText;if(!a)return{inputTransaction:null,tr:e.view.state.tr};var o=e.view.state.tr.insertText(i,r,n);return{inputTransaction:o,tr:EditorState.create({doc:o.doc,selection:o.selection,storedMarks:o.storedMarks}).tr}}
/**
* Runs a matching rule and dispatches the typed text before its conversion.
*/function applyRule(t){var e=t.editor,r=t.from,n=t.to,i=t.text,a=t.rule,o=t.match,u=t.plugin,s=t.insertText;var f=e.view;var l=createRuleTransaction({editor:e,from:r,to:n,text:i,insertText:s}),c=l.inputTransaction,v=l.tr;var h=c?r+i.length:n;var d=createChainableState({state:f.state,transaction:v});var p={from:r-(o[0].length-i.length),to:h};var g=new CommandManager({editor:e,state:d}),m=g.commands,b=g.chain,w=g.can;if(a.handler({state:d,range:p,match:o,commands:m,chain:b,can:w})===null||!v.steps.length)return false;if(c){f.dispatch(c);if(!f.state.doc.eq(c.doc))return true}closeHistory(v);v.setMeta("inputRule",true);if(a.undoable)v.setMeta(u,{transform:v,from:r,to:h,text:i});f.dispatch(v);return true}
/**
* Checks that the part of a match already in the document has matching positions.
*/function matchesDocument(t,e,r){var n=e[0].length-r.length;if(n<=0)return true;var i=t.parentOffset-n;return i>=0&&t.parent.textBetween(i,t.parentOffset)===e[0].slice(0,n)}function run$1$1(t){var e;var r=t.editor,n=t.from,i=t.to,a=t.text,o=t.rules,u=t.plugin,s=t.insertText;var f=r.view;if(f.composing)return false;var l=f.state.doc.resolve(n);if(l.parent.type.spec.code||!!((e=l.nodeBefore||l.nodeAfter)===null||e===void 0?void 0:e.marks.find((function(t){return t.type.spec.code}))))return false;var c=getTextContentFromNodes(l)+a;for(var v=0,h=o;v<h.length;v++){var d=h[v];var p=inputRuleMatcherHandler(c,d.find);if(!p||!matchesDocument(l,p,a))continue;if(applyRule({editor:r,from:n,to:i,text:a,rule:d,match:p,plugin:u,insertText:s}))return true}return false}
/**
* Create an input rules plugin. When enabled, it will cause text
* input that matches any of the given rules to trigger the rule’s
* action.
*/function inputRulesPlugin(t){var e=t.editor,r=t.rules;var n=new Plugin({state:{init:function(){return null},apply:function(t,i,a){var o;var u=t.getMeta(n);if(u)return u;if(i&&((o=t.getMeta("appendedTransaction"))===null||o===void 0?void 0:o.getMeta(n))){var s=new Transform(i.transform.before);for(var f=0,l=__spreadArray(__spreadArray([],i.transform.steps,true),t.steps,true);f<l.length;f++){var c=l[f];s.step(c)}return __assign(__assign({},i),{transform:s})}var v=t.getMeta("applyInputRules");if(!!v)setTimeout((function(){var t=v.text;if(typeof t==="string")t=t;else t=getHTMLFromFragment(Fragment.from(t),a.schema);var i=v.from;var o=i+t.length;run$1$1({editor:e,from:i,to:o,text:t,rules:r,plugin:n})}));return t.selectionSet||t.docChanged?null:i}},props:{handleTextInput:function(t,i,a,o){return run$1$1({editor:e,from:i,to:a,text:o,rules:r,plugin:n,insertText:true})},handleDOMEvents:{compositionend:function(t){setTimeout((function(){var i=t.state.selection.$cursor;if(i)run$1$1({editor:e,from:i.pos,to:i.pos,text:"",rules:r,plugin:n})}));return false}},handleKeyDown:function(t,i){if(i.key!=="Enter")return false;var a=t.state.selection.$cursor;if(a)return run$1$1({editor:e,from:a.pos,to:a.pos,text:"\n",rules:r,plugin:n});return false}},isInputRules:true});return n}
//#endregion
//#region src/Extendable.ts
var Extendable=/** @class */function(){function t(t){if(t===void 0){t={}}this.type="extendable";this.parent=null;this.child=null;this.name="";this.config={name:this.name};this.config=__assign(__assign({},this.config),t);this.name=this.config.name}Object.defineProperty(t.prototype,"options",{get:function(){return __assign({},callOrReturn(getExtensionField(this,"addOptions",{name:this.name})))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"storage",{get:function(){return __assign({},callOrReturn(getExtensionField(this,"addStorage",{name:this.name,options:this.options})))},enumerable:false,configurable:true});t.prototype.configure=function(t){var e=this;if(t===void 0){t={}}var r=this.extend(__assign(__assign({},this.config),{addOptions:function(){return mergeDeep(e.options,t)}}));r.name=this.name;r.parent=this.parent;this.child=null;return r};t.prototype.extend=function(t){if(t===void 0){t={}}var e=new this.constructor(__assign(__assign({},this.config),t));e.parent=this;this.child=e;e.name="name"in t?t.name:e.parent.name;return e};return t}();
//#endregion
//#region src/Mark.ts
/**
* The Mark class is used to create custom mark extensions.
* @see https://tiptap.dev/api/extensions#create-a-new-extension
*/var Mark=/** @class */function(t){__extends(e,t);function e(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var n=t.apply(this,e)||this;n.type="mark";return n}
/**
    * Create a new Mark instance
    * @param config - Mark configuration object or a function that returns a configuration object
    */e.create=function(t){if(t===void 0){t={}}var r=typeof t==="function"?t():t;return new e(r)};e.handleExit=function(t){var e=t.editor,r=t.mark;var n=e.state.tr;var i=e.state.selection.$from;if(i.pos===i.end()){var a=i.marks();if(!!!a.find((function(t){return(t===null||t===void 0?void 0:t.type.name)===r.name})))return false;var o=a.find((function(t){return(t===null||t===void 0?void 0:t.type.name)===r.name}));if(o)n.removeStoredMark(o);n.insertText(" ",i.pos);e.view.dispatch(n);return true}return false};e.prototype.configure=function(e){return t.prototype.configure.call(this,e)};e.prototype.extend=function(e){var r=typeof e==="function"?e():e;return t.prototype.extend.call(this,r)};return e}(Extendable);
//#endregion
//#region src/PasteRule.ts
/**
* Paste rules are used to react to pasted content.
* @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#paste-rules
*/var PasteRule=/** @class */function(){function t(t){this.find=t.find;this.handler=t.handler}return t}();var pasteRuleMatcherHandler=function(t,e,r){if(isRegExp(e))return __spreadArray([],t.matchAll(e),true);var n=e(t,r);if(!n)return[];return n.map((function(e){var r=[e.text];r.index=e.index;r.input=t;r.data=e.data;if(e.replaceWith){if(!e.text.includes(e.replaceWith))console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');r.push(e.replaceWith)}return r}))};function run$2(t){var e=t.editor,r=t.state,n=t.from,i=t.to,a=t.rule,o=t.pasteEvent,u=t.dropEvent;var s=new CommandManager({editor:e,state:r}),f=s.commands,l=s.chain,c=s.can;var v=[];r.doc.nodesBetween(n,i,(function(t,e){var s,h,d,p;if(((s=t.type)===null||s===void 0||(s=s.spec)===null||s===void 0?void 0:s.code)||!(t.isText||t.isTextblock||t.isInline))return;var g=(h=(d=(p=t.content)===null||p===void 0?void 0:p.size)!==null&&d!==void 0?d:t.nodeSize)!==null&&h!==void 0?h:0;var m=Math.max(n,e);var b=Math.min(i,e+g);if(m>=b)return;var w=t.isText?t.text||"":t.textBetween(m-e,b-e,void 0,"￼");pasteRuleMatcherHandler(w,a.find,o).forEach((function(t){if(t.index===void 0)return;var e=m+t.index+1;var n=e+t[0].length;var i={from:r.tr.mapping.map(e),to:r.tr.mapping.map(n)};var s=a.handler({state:r,range:i,match:t,commands:f,chain:l,can:c,pasteEvent:o,dropEvent:u});v.push(s)}))}));return v.every((function(t){return t!==null}))}var tiptapDragFromOtherEditor=null;var createClipboardPasteEvent=function(t){var e;var r=new ClipboardEvent("paste",{clipboardData:new DataTransfer});(e=r.clipboardData)===null||e===void 0||e.setData("text/html",t);return r};
/**
* Create an paste rules plugin. When enabled, it will cause pasted
* text that matches any of the given rules to trigger the rule’s
* action.
*/function pasteRulesPlugin(t){var e=t.editor,r=t.rules;var n=null;var i=false;var a=false;var o=typeof ClipboardEvent!=="undefined"?new ClipboardEvent("paste"):null;var u;try{u=typeof DragEvent!=="undefined"?new DragEvent("drop"):null}catch(t){u=null}var s=function(t){var r=t.state,n=t.from,i=t.to,a=t.rule,s=t.pasteEvt;var f=r.tr;var l=createChainableState({state:r,transaction:f});if(!run$2({editor:e,state:l,from:Math.max(n-1,0),to:i.b-1,rule:a,pasteEvent:s,dropEvent:u})||!f.steps.length)return;try{u=typeof DragEvent!=="undefined"?new DragEvent("drop"):null}catch(t){u=null}o=typeof ClipboardEvent!=="undefined"?new ClipboardEvent("paste"):null;return f};e.on("destroy",(function(){if(tiptapDragFromOtherEditor===e)tiptapDragFromOtherEditor=null}));return r.map((function(t){return new Plugin({view:function(t){var r=function(r){var i;n=((i=t.dom.parentElement)===null||i===void 0?void 0:i.contains(r.target))?t.dom.parentElement:null;if(n)tiptapDragFromOtherEditor=e};var i=function(){if(tiptapDragFromOtherEditor)tiptapDragFromOtherEditor=null};window.addEventListener("dragstart",r);window.addEventListener("dragend",i);return{destroy:function(){window.removeEventListener("dragstart",r);window.removeEventListener("dragend",i)}}},props:{handleDOMEvents:{drop:function(t,e){a=n===t.dom.parentElement;u=e;if(!a){var r=tiptapDragFromOtherEditor;if(r===null||r===void 0?void 0:r.isEditable)setTimeout((function(){if(r.isDestroyed)return;var t=r.state.selection;if(t)r.commands.deleteRange({from:t.from,to:t.to})}),10)}return false},paste:function(t,e){var r;var n=(r=e.clipboardData)===null||r===void 0?void 0:r.getData("text/html");o=e;i=!!(n===null||n===void 0?void 0:n.includes("data-pm-slice"));return false}}},appendTransaction:function(e,r,n){var u=e[0];var f=u.getMeta("uiEvent")==="paste"&&!i;var l=u.getMeta("uiEvent")==="drop"&&!a;var c=u.getMeta("applyPasteRules");var v=!!c;if(!f&&!l&&!v)return;if(v){var h=c.text;if(typeof h==="string")h=h;else h=getHTMLFromFragment(Fragment.from(h),n.schema);var d=c.from;var p=d+h.length;var g=createClipboardPasteEvent(h);return s({rule:t,state:n,from:d,to:{b:p},pasteEvt:g})}var m=r.doc.content.findDiffStart(n.doc.content);var b=r.doc.content.findDiffEnd(n.doc.content);if(!isNumber(m)||!b||m===b.b)return;return s({rule:t,state:n,from:m,to:b,pasteEvt:o})}})}))}
//#endregion
//#region src/ExtensionManager.ts
var ExtensionManager=/** @class */function(){function t(t,e){this.splittableMarks=[];this.nonClearableMarks=[];this.decorationManager=null;this.editor=e;this.baseExtensions=t;this.extensions=resolveExtensions(t);this.hasSchemaSpec=e.options.schemaSpec!==void 0;this.schema=getSchemaByResolvedExtensions(this.extensions,e,e.options.schemaSpec);this.setupExtensions()}Object.defineProperty(t.prototype,"commands",{
/**
        * Get all commands from the extensions.
        * @returns An object with all commands where the key is the command name and the value is the command function
        */
get:function(){var t=this;return this.extensions.reduce((function(e,r){var n=getExtensionField(r,"addCommands",{name:r.name,options:r.options,storage:t.editor.extensionStorage[r.name],editor:t.editor,type:getSchemaTypeByName(r.name,t.schema)});if(!n)return e;return __assign(__assign({},e),n())}),{})},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"plugins",{
/**
        * Get all registered Prosemirror plugins from the extensions.
        * @returns An array of Prosemirror plugins
        */
get:function(){var t=this;var e=this.editor;var r=sortExtensions(__spreadArray([],this.extensions,true).reverse()).flatMap((function(r){var n={name:r.name,options:r.options,storage:t.editor.extensionStorage[r.name],editor:e,type:getSchemaTypeByName(r.name,t.schema)};var i=[];var a=getExtensionField(r,"addKeyboardShortcuts",n);var o={};if(r.type==="mark"&&getExtensionField(r,"exitable",n))o.ArrowRight=function(){return Mark.handleExit({editor:e,mark:r})};if(a){var u=Object.fromEntries(Object.entries(a()).map((function(t){var r=t[0],n=t[1];return[r,function(){return n({editor:e})}]})));o=__assign(__assign({},o),u)}var s=keymap(o);i.push(s);var f=getExtensionField(r,"addInputRules",n);if(isExtensionRulesEnabled(r,e.options.enableInputRules)&&f){var l=f();if(l&&l.length){var c=inputRulesPlugin({editor:e,rules:l});var v=Array.isArray(c)?c:[c];i.push.apply(i,v)}}var h=getExtensionField(r,"addPasteRules",n);if(isExtensionRulesEnabled(r,e.options.enablePasteRules)&&h){var l=h();if(l&&l.length){var d=pasteRulesPlugin({editor:e,rules:l});i.push.apply(i,d)}}var p=getExtensionField(r,"addProseMirrorPlugins",n);if(p){var g=p();i.push.apply(i,g)}return i}));var n=this.createDecorationPlugin();if(n)r.push(n);return r},enumerable:false,configurable:true});
/**
    * Aggregates decorations from extensions into a single plugin, or returns null
    * if none exist. Destroys the previous manager to avoid orphaned listeners.
    * @returns A ProseMirror plugin or `null`
    * @example
    * const plugin = editor.extensionManager.createDecorationPlugin()
    */t.prototype.createDecorationPlugin=function(){var t=this;var e;var r=this.editor;(e=this.decorationManager)===null||e===void 0||e.destroy();var n=[];this.extensions.forEach((function(e){var i=getExtensionField(e,"addDecorations",{name:e.name,options:e.options,storage:t.editor.extensionStorage[e.name],editor:r,type:getSchemaTypeByName(e.name,t.schema)});if(!i)return;n.push({name:e.name,addDecorations:i})}));this.decorationManager=new DecorationManager({editor:r,entries:n});return this.decorationManager.plugin};Object.defineProperty(t.prototype,"attributes",{
/**
        * Get all attributes from the extensions.
        * @returns An array of attributes
        */
get:function(){var t=getAttributesFromExtensions(this.extensions);return this.hasSchemaSpec?getSchemaAttributes(t,this.schema):t},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"nodeViews",{
/**
        * Get all node views from the extensions.
        * @returns An object with all node views where the key is the node name and the value is the node view function
        */
get:function(){var t=this;var e=this.editor;var r=splitExtensions(this.extensions).nodeExtensions;return Object.fromEntries(r.filter((function(t){return!!getExtensionField(t,"addNodeView")})).map((function(r){var n=t.attributes.filter((function(t){return t.type===r.name}));var i=getExtensionField(r,"addNodeView",{name:r.name,options:r.options,storage:t.editor.extensionStorage[r.name],editor:e,type:getNodeType(r.name,t.schema)});if(!i)return[];var a=i();if(!a)return[];var o=function(t,i,o,u,s){var f=getRenderedAttributes(t,n);return a({node:t,view:i,getPos:o,decorations:u,innerDecorations:s,editor:e,extension:r,HTMLAttributes:f})};return[r.name,o]})))},enumerable:false,configurable:true});
/**
    * Get the composed dispatchTransaction function from all extensions.
    * @param baseDispatch The base dispatch function (e.g. from the editor or user props)
    * @returns A composed dispatch function
    */t.prototype.dispatchTransaction=function(t){var e=this;var r=this.editor;return sortExtensions(__spreadArray([],this.extensions,true).reverse()).reduceRight((function(t,n){var i={name:n.name,options:n.options,storage:e.editor.extensionStorage[n.name],editor:r,type:getSchemaTypeByName(n.name,e.schema)};var a=getExtensionField(n,"dispatchTransaction",i);if(!a)return t;return function(e){a.call(i,{transaction:e,next:t})}}),t)};
/**
    * Get the composed transformPastedHTML function from all extensions.
    * @param baseTransform The base transform function (e.g. from the editor props)
    * @returns A composed transform function that chains all extension transforms
    */t.prototype.transformPastedHTML=function(t){var e=this;var r=this.editor;return sortExtensions(__spreadArray([],this.extensions,true)).reduce((function(t,n){var i={name:n.name,options:n.options,storage:e.editor.extensionStorage[n.name],editor:r,type:getSchemaTypeByName(n.name,e.schema)};var a=getExtensionField(n,"transformPastedHTML",i);if(!a)return t;return function(e,r){var n=t(e,r);return a.call(i,n)}}),t||function(t){return t})};Object.defineProperty(t.prototype,"markViews",{get:function(){var t=this;var e=this.editor;var r=splitExtensions(this.extensions).markExtensions;return Object.fromEntries(r.filter((function(t){return!!getExtensionField(t,"addMarkView")})).map((function(r){var n=t.attributes.filter((function(t){return t.type===r.name}));var i=getExtensionField(r,"addMarkView",{name:r.name,options:r.options,storage:t.editor.extensionStorage[r.name],editor:e,type:getMarkType(r.name,t.schema)});if(!i)return[];var a=function(t,a,o){var u=getRenderedAttributes(t,n);return i()({mark:t,view:a,inline:o,editor:e,extension:r,HTMLAttributes:u,updateAttributes:function(r){updateMarkViewAttributes(t,e,r)}})};return[r.name,a]})))},enumerable:false,configurable:true});
/**
    * Destroy the extension manager and clean up all extension references
    * to prevent memory leaks through parent/child extension chains.
    *
    * Walks each extension's full parent chain and nulls every forward
    * `parent.child → current` link where the parent still points to the
    * current node. This breaks the retention path from module-scope
    * singleton roots through deep extend() chains.
    *
    * Only ancestor `.child` links matching the current chain are cleared.
    * The `.parent` pointer on ancestors is never touched — extensions
    * may be shared across live editors, so their own backward references
    * and non-matching forward links must remain intact.
    */t.prototype.destroy=function(){var t;(t=this.decorationManager)===null||t===void 0||t.destroy();this.extensions.forEach((function(t){var e=t;while(e.parent){var r=e.parent;if(r.child===e)r.child=null;e=r}}));this.extensions=[];this.baseExtensions=[];this.decorationManager=null;this.schema=null;this.editor=null};
/**
    * Go through all extensions, create extension storages & setup marks
    * & bind editor event listener.
    */t.prototype.setupExtensions=function(){var t=this;var e=this.extensions;this.editor.extensionStorage=Object.fromEntries(e.map((function(t){return[t.name,t.storage]})));e.forEach((function(e){var r={name:e.name,options:e.options,storage:t.editor.extensionStorage[e.name],editor:t.editor,type:getSchemaTypeByName(e.name,t.schema)};if(e.type==="mark"){var n,i;if((n=callOrReturn(getExtensionField(e,"keepOnSplit",r)))!==null&&n!==void 0?n:true)t.splittableMarks.push(e.name);if(!((i=callOrReturn(getExtensionField(e,"clearable",r)))!==null&&i!==void 0?i:true))t.nonClearableMarks.push(e.name)}var a=getExtensionField(e,"onBeforeCreate",r);var o=getExtensionField(e,"onCreate",r);var u=getExtensionField(e,"onUpdate",r);var s=getExtensionField(e,"onSelectionUpdate",r);var f=getExtensionField(e,"onTransaction",r);var l=getExtensionField(e,"onFocus",r);var c=getExtensionField(e,"onBlur",r);var v=getExtensionField(e,"onDestroy",r);if(a)t.editor.on("beforeCreate",a);if(o)t.editor.on("create",o);if(u)t.editor.on("update",u);if(s)t.editor.on("selectionUpdate",s);if(f)t.editor.on("transaction",f);if(l)t.editor.on("focus",l);if(c)t.editor.on("blur",c);if(v)t.editor.on("destroy",v)}))};return t}();ExtensionManager.resolve=resolveExtensions;ExtensionManager.sort=sortExtensions;ExtensionManager.flatten=flattenExtensions;
//#endregion
//#region src/Extension.ts
/**
* The Extension class is the base class for all extensions.
* @see https://tiptap.dev/api/extensions#create-a-new-extension
*/var Extension=/** @class */function(t){__extends(e,t);function e(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var n=t.apply(this,e)||this;n.type="extension";return n}
/**
    * Create a new Extension instance
    * @param config - Extension configuration object or a function that returns a configuration object
    */e.create=function(t){if(t===void 0){t={}}var r=typeof t==="function"?t():t;return new e(r)};e.prototype.configure=function(e){return t.prototype.configure.call(this,e)};e.prototype.extend=function(e){var r=typeof e==="function"?e():e;return t.prototype.extend.call(this,r)};return e}(Extendable);
//#endregion
//#region src/extensions/clipboardTextSerializer.ts
var ClipboardTextSerializer=Extension.create({name:"clipboardTextSerializer",addOptions:function(){return{blockSeparator:void 0}},addProseMirrorPlugins:function(){var t=this;return[new Plugin({key:new PluginKey("clipboardTextSerializer"),props:{clipboardTextSerializer:function(){var e=t.editor;var r=e.state,n=e.schema;var i=r.doc,a=r.selection;var o=getTextSerializersFromSchema(n);var u=t.options.blockSeparator;var s=__assign(__assign({},u!==void 0?{blockSeparator:u}:{}),{textSerializers:o});return __spreadArray([],a.ranges,true).sort((function(t,e){return t.$from.pos-e.$from.pos})).map((function(t){var e=t.$from,r=t.$to;return getTextBetween(i,{from:e.pos,to:r.pos},s)})).join(u!==null&&u!==void 0?u:"\n\n")}}})]}});
//#endregion
//#region src/extensions/commands.ts
var Commands=Extension.create({name:"commands",addCommands:function(){return __assign({},commands_exports)}});
//#endregion
//#region src/extensions/delete.ts
/**
* This extension allows you to be notified when the user deletes content you are interested in.
*/var Delete=Extension.create({name:"delete",onUpdate:function(t){var e=this;var r=t.transaction,n=t.appendedTransactions;var i,a;var o=function(){var t,i,a;if((t=(i=e.editor.options.coreExtensionOptions)===null||i===void 0||(i=i.delete)===null||i===void 0||(a=i.filterTransaction)===null||a===void 0?void 0:a.call(i,r))!==null&&t!==void 0?t:r.getMeta("y-sync$"))return;var o=combineTransactionSteps(r.before,__spreadArray([r],n,true));getChangedRanges(o).forEach((function(t){if(o.mapping.mapResult(t.oldRange.from).deletedAfter&&o.mapping.mapResult(t.oldRange.to).deletedBefore)o.before.nodesBetween(t.oldRange.from,t.oldRange.to,(function(n,i){var a=i+n.nodeSize-2;var u=t.oldRange.from<=i&&a<=t.oldRange.to;e.editor.emit("delete",{type:"node",node:n,from:i,to:a,newFrom:o.mapping.map(i),newTo:o.mapping.map(a),deletedRange:t.oldRange,newRange:t.newRange,partial:!u,editor:e.editor,transaction:r,combinedTransform:o})}))}));var u=o.mapping;o.steps.forEach((function(t,n){if(t instanceof RemoveMarkStep){var i,a;var s=u.slice(n).map(t.from,-1);var f=u.slice(n).map(t.to);var l=u.invert().map(s,-1);var c=u.invert().map(f);var v=s>0?(i=o.doc.nodeAt(s-1))===null||i===void 0?void 0:i.marks.some((function(e){return e.eq(t.mark)})):false;var h=(a=o.doc.nodeAt(f))===null||a===void 0?void 0:a.marks.some((function(e){return e.eq(t.mark)}));e.editor.emit("delete",{type:"mark",mark:t.mark,from:t.from,to:t.to,deletedRange:{from:l,to:c},newRange:{from:s,to:f},partial:Boolean(h||v),editor:e.editor,transaction:r,combinedTransform:o})}}))};if((i=(a=this.editor.options.coreExtensionOptions)===null||a===void 0||(a=a.delete)===null||a===void 0?void 0:a.async)!==null&&i!==void 0?i:true)setTimeout(o,0);else o()}});
//#endregion
//#region src/extensions/drop.ts
var Drop=Extension.create({name:"drop",addProseMirrorPlugins:function(){var t=this;return[new Plugin({key:new PluginKey("tiptapDrop"),props:{handleDrop:function(e,r,n,i){t.editor.emit("drop",{editor:t.editor,event:r,slice:n,moved:i})}}})]}});
//#endregion
//#region src/extensions/editable.ts
var Editable=Extension.create({name:"editable",addProseMirrorPlugins:function(){var t=this;return[new Plugin({key:new PluginKey("editable"),props:{editable:function(){return t.editor.options.editable}}})]}});
//#endregion
//#region src/extensions/focusEvents.ts
var focusEventsPluginKey=new PluginKey("focusEvents");var FocusEvents=Extension.create({name:"focusEvents",addProseMirrorPlugins:function(){var t=this.editor;return[new Plugin({key:focusEventsPluginKey,props:{handleDOMEvents:{focus:function(e,r){t.isFocused=true;var n=t.state.tr.setMeta("focus",{event:r}).setMeta("addToHistory",false);e.dispatch(n);return false},blur:function(e,r){t.isFocused=false;var n=t.state.tr.setMeta("blur",{event:r}).setMeta("addToHistory",false);e.dispatch(n);return false}}}})]}});
//#endregion
//#region src/extensions/keymap.ts
/** Checks if a non-empty selection spans the whole document. */function isWholeDocumentSelected(t){var e=t.selection,r=e.empty,n=e.from,i=e.to;if(r)return false;return n===Selection.atStart(t.doc).from&&i===Selection.atEnd(t.doc).to}var Keymap=Extension.create({name:"keymap",addKeyboardShortcuts:function(){var t=this;var e=function(){return t.editor.commands.first((function(t){var e=t.commands;return[function(){return e.undoInputRule()},function(){return e.command((function(t){var r=t.tr;var n=r.selection,i=r.doc;var a=n.empty,o=n.$anchor;var u=o.pos,s=o.parent;var f=o.parent.isTextblock&&u>0?r.doc.resolve(u-1):o;var l=f.parent.type.spec.isolating;var c=o.pos-o.parentOffset;var v=l&&f.parent.childCount===1?c===o.pos:Selection.atStart(i).from===u;if(!a||!s.type.isTextblock||s.textContent.length||!v||v&&o.parent.type.name==="paragraph")return false;return e.clearNodes()}))},function(){return e.deleteSelection()},function(){return e.joinBackward()},function(){return e.selectNodeBackward()}]}))};var r=function(){return t.editor.commands.first((function(t){var e=t.commands;return[function(){return e.deleteSelection()},function(){return e.deleteCurrentNode()},function(){return e.joinForward()},function(){return e.selectNodeForward()}]}))};var n=function(){return t.editor.commands.first((function(t){var e=t.commands;return[function(){return e.newlineInCode()},function(){return e.createParagraphNear()},function(){return e.liftEmptyBlock()},function(){return e.splitBlock()}]}))};var i={Enter:n,"Mod-Enter":function(){return t.editor.commands.exitCode()},Backspace:e,"Mod-Backspace":e,"Shift-Backspace":e,Delete:r,"Mod-Delete":r,"Mod-a":function(){return t.editor.commands.selectAll()}};var a=__assign({},i);var o=__assign(__assign({},i),{"Ctrl-h":e,"Alt-Backspace":e,"Ctrl-d":r,"Ctrl-Alt-Backspace":r,"Alt-Delete":r,"Alt-d":r,"Ctrl-a":function(){return t.editor.commands.selectTextblockStart()},"Ctrl-e":function(){return t.editor.commands.selectTextblockEnd()}});if(isiOS()||isMacOS())return o;return a},addProseMirrorPlugins:function(){var t=this;return[new Plugin({key:new PluginKey("clearDocument"),appendTransaction:function(e,r,n){if(e.some((function(t){return t.getMeta("composition")})))return;var i=e.some((function(t){return t.docChanged}))&&!r.doc.eq(n.doc);var a=e.some((function(t){return t.getMeta("preventClearDocument")}));if(!i||a)return;if(!isWholeDocumentSelected(r))return;if(!isNodeEmpty(n.doc))return;var o=n.tr;var u=createChainableState({state:n,transaction:o});var s=new CommandManager({editor:t.editor,state:u}).commands;s.clearNodes();if(!o.steps.length&&!n.storedMarks)return;return o.setStoredMarks(null)}})]}});
//#endregion
//#region src/extensions/paste.ts
var Paste=Extension.create({name:"paste",addProseMirrorPlugins:function(){var t=this;return[new Plugin({key:new PluginKey("tiptapPaste"),props:{handlePaste:function(e,r,n){t.editor.emit("paste",{editor:t.editor,event:r,slice:n})}}})]}});
//#endregion
//#region src/extensions/tabindex.ts
/**
* The Tabindex extension adds a configurable tabindex attribute to the editor.
*
* By default, the editor gets tabindex="0" when editable. This can be customized
* via coreExtensionOptions to support specific focus ordering requirements in forms
* or to enable focusing on non-editable editors.
*
* @example
* ```ts
* new Editor({
*   coreExtensionOptions: {
*     tabindex: {
*       value: '-1',
*     },
*   },
* })
* ```
*/var Tabindex=Extension.create({name:"tabindex",addOptions:function(){return{value:void 0}},addProseMirrorPlugins:function(){var t=this;return[new Plugin({key:new PluginKey("tabindex"),props:{attributes:function(){var e;if(!t.editor.isEditable&&t.options.value===void 0)return{};return{tabindex:(e=t.options.value)!==null&&e!==void 0?e:"0"}}}})]}});
//#endregion
//#region src/extensions/textDirection.ts
/**
* The TextDirection extension adds support for setting text direction (LTR/RTL/auto)
* on all nodes in the editor.
*
* This extension adds a global `dir` attribute to all node types, which can be used
* to control bidirectional text rendering. The direction can be set globally via
* editor options or per-node using commands.
*/var TextDirection=Extension.create({name:"textDirection",addOptions:function(){return{direction:void 0}},addGlobalAttributes:function(){var t=this;if(!this.options.direction)return[];var e=splitExtensions(this.extensions).nodeExtensions;return[{types:e.filter((function(t){return t.name!=="text"})).map((function(t){return t.name})),attributes:{dir:{default:this.options.direction,parseHTML:function(e){var r=e.getAttribute("dir");if(r&&(r==="ltr"||r==="rtl"||r==="auto"))return r;return t.options.direction},renderHTML:function(t){if(!t.dir)return{};return{dir:t.dir}}}}}]},addProseMirrorPlugins:function(){var t=this;return[new Plugin({key:new PluginKey("textDirection"),props:{attributes:function(){var e=t.options.direction;if(!e)return{};return{dir:e}}}})]}});
//#endregion
//#region src/helpers/warnOnDuplicatedProseMirrorModel.ts
var hasChecked=false;
/**
* Warns once when prosemirror-model is loaded twice
* @param schema The editor schema
* @returns void
* @example ```js
* warnOnDuplicatedProseMirrorModel(editor.schema)
* ```
*/function warnOnDuplicatedProseMirrorModel(t){if(hasChecked)return;hasChecked=true;var e;try{var r=ReplaceStep.fromJSON(t,{from:0,to:0});if(!isProseMirrorReplaceStep(r))return;e=r.slice.content}catch(t){return}if(e instanceof Fragment)return;console.warn("[tiptap warn]: prosemirror-model is loaded more than once. Wrapping and splitting nodes will fail. Deduplicate it in your lock file, or alias it to a single copy in your bundler.")}
//#endregion
//#region src/NodePos.ts
var NodePos=/** @class */function(){function t(t,e,r,n){if(r===void 0){r=false}if(n===void 0){n=null}this.currentNode=null;this.actualDepth=null;this.isBlock=r;this.resolvedPos=t;this.editor=e;this.currentNode=n}Object.defineProperty(t.prototype,"name",{get:function(){return this.node.type.name},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"node",{get:function(){return this.currentNode||this.resolvedPos.node()},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"element",{get:function(){return this.editor.view.domAtPos(this.pos).node},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"depth",{get:function(){var t;return(t=this.actualDepth)!==null&&t!==void 0?t:this.resolvedPos.depth},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"pos",{get:function(){return this.resolvedPos.pos},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"content",{get:function(){return this.node.content},set:function(t){var e=this.from;var r=this.to;if(this.isBlock){if(this.content.size===0){console.error("You can’t set content on a block node. Tried to set content on ".concat(this.name," at ").concat(this.pos));return}e=this.from+1;r=this.to-1}this.editor.commands.insertContentAt({from:e,to:r},t)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"attributes",{get:function(){return this.node.attrs},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"textContent",{get:function(){return this.node.textContent},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"size",{get:function(){return this.node.nodeSize},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"from",{get:function(){if(this.isBlock)return this.pos;return this.resolvedPos.start(this.resolvedPos.depth)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"range",{get:function(){return{from:this.from,to:this.to}},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"to",{get:function(){if(this.isBlock)return this.pos+this.size;return this.resolvedPos.end(this.resolvedPos.depth)+(this.node.isText?0:1)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"parent",{get:function(){if(this.depth===0)return null;var e=this.resolvedPos.start(this.resolvedPos.depth-1);var r=this.resolvedPos.doc.resolve(e);return new t(r,this.editor)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"before",{get:function(){var e=this.resolvedPos.doc.resolve(this.from-(this.isBlock?1:2));if(e.depth!==this.depth)e=this.resolvedPos.doc.resolve(this.from-3);return new t(e,this.editor)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"after",{get:function(){var e=this.resolvedPos.doc.resolve(this.to+(this.isBlock?2:1));if(e.depth!==this.depth)e=this.resolvedPos.doc.resolve(this.to+3);return new t(e,this.editor)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"children",{get:function(){var e=this;var r=[];this.node.content.forEach((function(n,i){var a=n.isBlock&&!n.isTextblock;var o=n.isAtom&&!n.isText;var u=n.isInline;var s=e.pos+i+(o?0:1);if(s<0||s>e.resolvedPos.doc.nodeSize-2)return;var f=e.resolvedPos.doc.resolve(s);if(!a&&!u&&f.depth<=e.depth)return;var l=new t(f,e.editor,a,a||u?n:null);if(a)l.actualDepth=e.depth+1;r.push(l)}));return r},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"firstChild",{get:function(){return this.children[0]||null},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"lastChild",{get:function(){var t=this.children;return t[t.length-1]||null},enumerable:false,configurable:true});t.prototype.closest=function(t,e){if(e===void 0){e={}}var r=null;var n=this.parent;while(n&&!r){if(n.node.type.name===t){if(Object.keys(e).length>0);else r=n}n=n.parent}return r};t.prototype.querySelector=function(t,e){if(e===void 0){e={}}return this.querySelectorAll(t,e,true)[0]||null};t.prototype.querySelectorAll=function(t,e,r){if(e===void 0){e={}}if(r===void 0){r=false}var n=[];if(!this.children||this.children.length===0)return n;var i=Object.keys(e);
/**
        * Finds all children recursively that match the selector and attributes
        * If firstItemOnly is true, it will return the first item found
        */this.children.forEach((function(a){if(r&&n.length>0)return;if(a.node.type.name===t){if(i.every((function(t){return e[t]===a.node.attrs[t]})))n.push(a)}if(r&&n.length>0)return;n=n.concat(a.querySelectorAll(t,e,r))}));return n};t.prototype.setAttribute=function(t){var e=this.editor.state.tr;e.setNodeMarkup(this.from,void 0,__assign(__assign({},this.node.attrs),t));this.editor.view.dispatch(e)};return t}();
//#endregion
//#region src/style.ts
var style='.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}';
//#endregion
//#region src/Editor.ts
var Editor=/** @class */function(t){__extends(e,t);function e(e){if(e===void 0){e={}}var r=t.call(this)||this;r.css=null;r.className="tiptap";r.editorView=null;r.isFocused=false;r.destroyed=false;r.isInitialized=false;r.extensionStorage={};r.instanceId=Math.random().toString(36).slice(2,9);r.hasWarnedStaleDecorationRead=false;r.options={element:typeof document!=="undefined"?document.createElement("div"):null,content:"",injectCSS:true,injectNonce:void 0,extensions:[],autofocus:false,editable:true,textDirection:void 0,editorProps:{},parseOptions:{},coreExtensionOptions:{},enableInputRules:true,enablePasteRules:true,enableCoreExtensions:true,enableContentCheck:false,emitContentError:false,onBeforeCreate:function(){return null},onCreate:function(){return null},onMount:function(){return null},onUnmount:function(){return null},onUpdate:function(){return null},onSelectionUpdate:function(){return null},onTransaction:function(){return null},onFocus:function(){return null},onBlur:function(){return null},onDestroy:function(){return null},onContentError:function(t){var e=t.error;throw e},onPaste:function(){return null},onDrop:function(){return null},onDelete:function(){return null},enableExtensionDispatchTransaction:true};r.isCapturingTransaction=false;r.capturedTransaction=null;r.utils={getUpdatedPosition:getUpdatedPosition,createMappablePosition:createMappablePosition};r.setOptions(e);r.createExtensionManager();r.createCommandManager();r.createSchema();r.on("beforeCreate",r.options.onBeforeCreate);r.emit("beforeCreate",{editor:r});r.on("mount",r.options.onMount);r.on("unmount",r.options.onUnmount);r.on("contentError",r.options.onContentError);r.on("create",r.options.onCreate);r.on("update",r.options.onUpdate);r.on("selectionUpdate",r.options.onSelectionUpdate);r.on("transaction",r.options.onTransaction);r.on("focus",r.options.onFocus);r.on("blur",r.options.onBlur);r.on("destroy",r.options.onDestroy);r.on("drop",(function(t){var e=t.event,n=t.slice,i=t.moved;return r.options.onDrop(e,n,i)}));r.on("paste",(function(t){var e=t.event,n=t.slice;return r.options.onPaste(e,n)}));r.on("delete",r.options.onDelete);var n=r.createDoc();if(!r.editorState){var i=resolveFocusPosition(n,r.options.autofocus);r.editorState=EditorState.create({doc:n,schema:r.schema,selection:i||void 0})}warnOnDuplicatedProseMirrorModel(r.schema);if(r.options.element)r.mount(r.options.element);return r}
/**
    * Attach the editor to the DOM, creating a new editor view.
    */e.prototype.mount=function(t){var e=this;if(typeof document==="undefined")throw new Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");this.createView(t);this.emit("mount",{editor:this});if(this.css&&!document.head.contains(this.css))document.head.appendChild(this.css);window.setTimeout((function(){if(e.isDestroyed)return;if(e.options.autofocus!==false&&e.options.autofocus!==null)e.commands.focus(e.options.autofocus);e.emit("create",{editor:e});e.isInitialized=true}),0)};
/**
    * Remove the editor from the DOM, but still allow remounting at a different point in time
    */e.prototype.unmount=function(){if(this.editorView){this.editorState=this.editorView.state;var t=this.editorView.dom;if(t===null||t===void 0?void 0:t.editor)delete t.editor;this.editorView.destroy()}this.editorView=null;this.isInitialized=false;if(this.css&&!document.querySelectorAll(".".concat(this.className)).length)try{if(typeof this.css.remove==="function")this.css.remove();else if(this.css.parentNode)this.css.parentNode.removeChild(this.css)}catch(t){console.warn("Failed to remove CSS element:",t)}this.css=null;this.emit("unmount",{editor:this})};Object.defineProperty(e.prototype,"storage",{
/**
        * Returns the editor storage.
        */
get:function(){return this.extensionStorage},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"commands",{
/**
        * An object of all registered commands.
        */
get:function(){return this.commandManager.commands},enumerable:false,configurable:true});
/**
    * Create a command chain to call multiple commands at once.
    */e.prototype.chain=function(){if(!this.commandManager)return CommandManager.createFakeChain();return this.commandManager.chain()};
/**
    * Check if a command or a command chain can be executed. Without executing it.
    */e.prototype.can=function(){if(!this.commandManager)return CommandManager.createFallbackCan();return this.commandManager.can()};
/**
    * Inject CSS styles.
    */e.prototype.injectCSS=function(){if(this.options.injectCSS&&typeof document!=="undefined")this.css=createStyleTag(style,this.options.injectNonce)};
/**
    * Update editor options.
    *
    * @param options A list of options
    */e.prototype.setOptions=function(t){if(t===void 0){t={}}this.options=__assign(__assign({},this.options),t);if(!this.editorView||!this.state||this.isDestroyed)return;if(this.options.editorProps)this.view.setProps(__assign(__assign({},this.options.editorProps),{attributes:this.getEditorViewAttributes()}));this.view.updateState(this.state)};
/**
    * Update editable state of the editor.
    */e.prototype.setEditable=function(t,e){if(e===void 0){e=true}this.setOptions({editable:t});if(e)this.emit("update",{editor:this,transaction:this.state.tr,appendedTransactions:[]})};Object.defineProperty(e.prototype,"isEditable",{
/**
        * Returns whether the editor is editable.
        */
get:function(){return this.options.editable&&this.view&&this.view.editable},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"view",{
/**
        * Returns the editor view.
        */
get:function(){var t=this;if(this.editorView)return this.editorView;return new Proxy({state:this.editorState,updateState:function(e){t.editorState=e},dispatch:function(e){t.dispatchTransaction(e)},composing:false,dragging:null,editable:true,isDestroyed:false},{get:function(e,r){if(t.editorView)return t.editorView[r];if(r==="state")return t.editorState;if(r in e)return Reflect.get(e,r);throw new Error("[tiptap error]: The editor view is not available. Cannot access view['".concat(r,"']. The editor may not be mounted yet."))}})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"state",{
/**
        * Returns the editor state.
        */
get:function(){if(this.editorView)this.editorState=this.view.state;return this.editorState},enumerable:false,configurable:true});
/**
    * Register a ProseMirror plugin.
    *
    * @param plugin A ProseMirror plugin
    * @param handlePlugins Control how to merge the plugin into the existing plugins.
    * @returns The new editor state
    */e.prototype.registerPlugin=function(t,e){var r=isFunction(e)?e(t,__spreadArray([],this.state.plugins,true)):__spreadArray(__spreadArray([],this.state.plugins,true),[t],false);var n=this.state.reconfigure({plugins:r});this.view.updateState(n);return n};
/**
    * Unregister a ProseMirror plugin.
    *
    * @param nameOrPluginKeyToRemove The plugins name
    * @returns The new editor state or undefined if the editor is destroyed
    */e.prototype.unregisterPlugin=function(t){if(this.isDestroyed)return;var e=this.state.plugins;var r=e;[].concat(t).forEach((function(t){var e=typeof t==="string"?"".concat(t,"$"):t.key;r=r.filter((function(t){return!t.key.startsWith(e)}))}));if(e.length===r.length)return;var n=this.state.reconfigure({plugins:r});this.view.updateState(n);return n};
/**
    * Creates an extension manager.
    */e.prototype.createExtensionManager=function(){var t=this;var e,r;var n=__spreadArray(__spreadArray([],this.options.enableCoreExtensions?[Editable,ClipboardTextSerializer.configure({blockSeparator:(e=this.options.coreExtensionOptions)===null||e===void 0||(e=e.clipboardTextSerializer)===null||e===void 0?void 0:e.blockSeparator}),Commands,FocusEvents,Keymap,Tabindex.configure({value:(r=this.options.coreExtensionOptions)===null||r===void 0||(r=r.tabindex)===null||r===void 0?void 0:r.value}),Drop,Paste,Delete,TextDirection.configure({direction:this.options.textDirection})].filter((function(e){if(typeof t.options.enableCoreExtensions==="object")return t.options.enableCoreExtensions[e.name]!==false;return true})):[],true),this.options.extensions,true).filter((function(t){return["extension","node","mark"].includes(t===null||t===void 0?void 0:t.type)}));this.extensionManager=new ExtensionManager(n,this)};
/**
    * Creates an command manager.
    */e.prototype.createCommandManager=function(){this.commandManager=new CommandManager({editor:this})};
/**
    * Creates a ProseMirror schema.
    */e.prototype.createSchema=function(){this.schema=this.extensionManager.schema};
/**
    * Creates the initial document.
    */e.prototype.createDoc=function(){var t=this;var e;try{e=createDocument(this.options.content,this.schema,this.options.parseOptions,{errorOnInvalidContent:this.options.enableContentCheck})}catch(e){if(!(e instanceof Error)||!["[tiptap error]: Invalid JSON content","[tiptap error]: Invalid HTML content"].includes(e.message))throw e;var r=createDocument(this.options.content,this.schema,this.options.parseOptions,{errorOnInvalidContent:false});this.editorState=EditorState.create({doc:r,schema:this.schema,selection:resolveFocusPosition(r,this.options.autofocus)||void 0});this.emit("contentError",{editor:this,error:e,disableCollaboration:function(){if("collaboration"in t.storage&&typeof t.storage.collaboration==="object"&&t.storage.collaboration)t.storage.collaboration.isDisabled=true;t.options.extensions=t.options.extensions.filter((function(t){return t.name!=="collaboration"}));t.createExtensionManager()}});return this.editorState.doc}return e};
/**
    * Returns the attributes for the editor element.
    * Merges the default `role="textbox"` with the attributes from `editorProps`,
    * so the role is kept no matter when the props are applied.
    */e.prototype.getEditorViewAttributes=function(){var t;var e=(t=this.options.editorProps)===null||t===void 0?void 0:t.attributes;if(isFunction(e))return function(t){return __assign({role:"textbox"},e(t))};return __assign({role:"textbox"},e)};
/**
    * Creates a ProseMirror view.
    */e.prototype.createView=function(t){var e=this.options,r=e.editorProps,n=e.enableExtensionDispatchTransaction;var i=r.dispatchTransaction||this.dispatchTransaction.bind(this);var a=n?this.extensionManager.dispatchTransaction(i):i;var o=r.transformPastedHTML;var u=this.extensionManager.transformPastedHTML(o);this.editorView=new EditorView(t,__assign(__assign({},r),{attributes:this.getEditorViewAttributes(),dispatchTransaction:a,transformPastedHTML:u,state:this.editorState,markViews:this.extensionManager.markViews,nodeViews:this.extensionManager.nodeViews}));var s=this.state.reconfigure({plugins:this.extensionManager.plugins});this.view.updateState(s);this.prependClass();this.injectCSS();var f=this.view.dom;f.editor=this};
/**
    * Creates all node and mark views.
    */e.prototype.createNodeViews=function(){if(this.view.isDestroyed)return;this.view.setProps({markViews:this.extensionManager.markViews,nodeViews:this.extensionManager.nodeViews})};
/**
    * Prepend class name to element.
    */e.prototype.prependClass=function(){this.view.dom.className="".concat(this.className," ").concat(this.view.dom.className)};e.prototype.captureTransaction=function(t){this.isCapturingTransaction=true;t();this.isCapturingTransaction=false;var e=this.capturedTransaction;this.capturedTransaction=null;return e};
/**
    * The callback over which to send transactions (state updates) produced by the view.
    *
    * @param transaction An editor state transaction
    */e.prototype.dispatchTransaction=function(t){var e=this;if(this.view.isDestroyed)return;if(this.isCapturingTransaction){if(!this.capturedTransaction){this.capturedTransaction=t;return}t.steps.forEach((function(t){var r;return(r=e.capturedTransaction)===null||r===void 0?void 0:r.step(t)}));return}var r=this.state.applyTransaction(t),n=r.state,i=r.transactions;var a=!this.state.selection.eq(n.selection);var o=i.includes(t);var u=this.state;this.emit("beforeTransaction",{editor:this,transaction:t,nextState:n});if(!o)return;this.view.updateState(n);this.emit("transaction",{editor:this,transaction:t,appendedTransactions:i.slice(1)});if(a)this.emit("selectionUpdate",{editor:this,transaction:t});var s=i.findLast((function(t){return t.getMeta("focus")||t.getMeta("blur")}));var f=s===null||s===void 0?void 0:s.getMeta("focus");var l=s===null||s===void 0?void 0:s.getMeta("blur");if(f)this.emit("focus",{editor:this,event:f.event,transaction:s});if(l)this.emit("blur",{editor:this,event:l.event,transaction:s});if(t.getMeta("preventUpdate")||!i.some((function(t){return t.docChanged}))||u.doc.eq(n.doc))return;this.emit("update",{editor:this,transaction:t,appendedTransactions:i.slice(1)})};
/**
    * Get attributes of the currently selected node or mark.
    */e.prototype.getAttributes=function(t){return getAttributes(this.state,t)};e.prototype.isActive=function(t,e){var r=typeof t==="string"?t:null;var n=typeof t==="string"?e:t;return isActive(this.state,r,n)};
/**
    * Get the document as JSON.
    */e.prototype.getJSON=function(){return this.state.doc.toJSON()};
/**
    * Get the document as HTML.
    */e.prototype.getHTML=function(){return getHTMLFromFragment(this.state.doc.content,this.schema)};
/**
    * Get the document as text.
    */e.prototype.getText=function(t){var e=t||{},r=e.blockSeparator,n=r===void 0?"\n\n":r,i=e.textSerializers,a=i===void 0?{}:i;return getText(this.state.doc,{blockSeparator:n,textSerializers:__assign(__assign({},getTextSerializersFromSchema(this.schema)),a)})};Object.defineProperty(e.prototype,"isEmpty",{
/**
        * Check if there is no content.
        */
get:function(){return isNodeEmpty(this.state.doc)},enumerable:false,configurable:true});
/**
    * Destroy the editor.
    */e.prototype.destroy=function(){if(this.destroyed)return;this.destroyed=true;this.emit("destroy");this.unmount();this.removeAllListeners();this.extensionManager.destroy();this.extensionManager=null;this.schema=null;this.commandManager=null;this.extensionStorage={}};Object.defineProperty(e.prototype,"isDestroyed",{
/**
        * Check if the editor is already destroyed.
        */
get:function(){var t,e;return(t=(e=this.editorView)===null||e===void 0?void 0:e.isDestroyed)!==null&&t!==void 0?t:true},enumerable:false,configurable:true});e.prototype.$node=function(t,e){var r;return((r=this.$doc)===null||r===void 0?void 0:r.querySelector(t,e))||null};e.prototype.$nodes=function(t,e){var r;return((r=this.$doc)===null||r===void 0?void 0:r.querySelectorAll(t,e))||null};e.prototype.$pos=function(t){var e=this.state.doc.resolve(t);var r=t>0&&e.nodeAfter&&!e.nodeAfter.isText&&e.nodeAfter.isAtom?e.nodeAfter:null;return new NodePos(e,this,false,r)};Object.defineProperty(e.prototype,"$doc",{get:function(){return this.$pos(0)},enumerable:false,configurable:true});return e}(EventEmitter);
//#endregion
//#region src/inputRules/markInputRule.ts
/**
* Build an input rule that adds a mark when the
* matched text is typed into it.
* @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#input-rules
*/function markInputRule(t){return new InputRule({find:t.find,handler:function(e){var r=e.state,n=e.range,i=e.match;var a=callOrReturn(t.getAttributes,void 0,i);if(a===false||a===null)return null;var o=r.tr;var u=i[i.length-1];var s=i[0];if(u){var f=s.search(/\S/);var l=n.from+s.indexOf(u);var c=l+u.length;if(getMarksBetween(n.from,n.to,r.doc).filter((function(e){return e.mark.type.excluded.find((function(r){return r===t.type&&r!==e.mark.type}))})).filter((function(t){return t.to>l})).length)return null;if(c<n.to)o.delete(c,n.to);if(l>n.from)o.delete(n.from+f,l);var v=n.from+f+u.length;o.addMark(n.from+f,v,t.type.create(a||{}));o.removeStoredMark(t.type)}},undoable:t.undoable})}
//#endregion
//#region src/inputRules/nodeInputRule.ts
/**
* Build an input rule that adds a node when the
* matched text is typed into it.
* @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#input-rules
*/function nodeInputRule(t){return new InputRule({find:t.find,handler:function(e){var r=e.state,n=e.range,i=e.match;var a=callOrReturn(t.getAttributes,void 0,i)||{};var o=r.tr;var u=n.from;var s=n.to;var f=t.type.create(a);if(i[1]){var l=u+i[0].lastIndexOf(i[1]);if(l>s)l=s;else s=l+i[1].length;var c=i[0][i[0].length-1];o.insertText(c,u+i[0].length-1);o.replaceWith(l,s,f)}else if(i[0]){var v=t.type.isInline?u:u-1;o.insert(v,t.type.create(a)).delete(o.mapping.map(u),o.mapping.map(s))}o.scrollIntoView()},undoable:t.undoable})}
//#endregion
//#region src/inputRules/textblockTypeInputRule.ts
/**
* Build an input rule that changes the type of a textblock when the
* matched text is typed into it. When using a regular expresion you’ll
* probably want the regexp to start with `^`, so that the pattern can
* only occur at the start of a textblock.
* @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#input-rules
*/function textblockTypeInputRule(t){return new InputRule({find:t.find,handler:function(e){var r=e.state,n=e.range,i=e.match;var a=r.doc.resolve(n.from);var o=callOrReturn(t.getAttributes,void 0,i)||{};if(!a.node(-1).canReplaceWith(a.index(-1),a.indexAfter(-1),t.type))return null;r.tr.delete(n.from,n.to).setBlockType(n.from,n.from,t.type,o)},undoable:t.undoable})}
//#endregion
//#region src/inputRules/wrappingInputRule.ts
/**
* Build an input rule for automatically wrapping a textblock when a
* given string is typed. When using a regular expresion you’ll
* probably want the regexp to start with `^`, so that the pattern can
* only occur at the start of a textblock.
*
* `type` is the type of node to wrap in.
*
* By default, if there’s a node with the same type above the newly
* wrapped node, the rule will try to join those
* two nodes. You can pass a join predicate, which takes a regular
* expression match and the node before the wrapped node, and can
* return a boolean to indicate whether a join should happen.
* @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#input-rules
*/function wrappingInputRule(t){return new InputRule({find:t.find,handler:function(e){var r=e.state,n=e.range,i=e.match,a=e.chain;var o=callOrReturn(t.getAttributes,void 0,i)||{};var u=r.tr.delete(n.from,n.to);var s=u.doc.resolve(n.from).blockRange();var f=s&&findWrapping(s,t.type,o);if(!f)return null;u.wrap(s,f);if(t.keepMarks&&t.editor){var l=r.selection,c=r.storedMarks;var v=t.editor.extensionManager.splittableMarks;var h=c||l.$to.parentOffset&&l.$from.marks();if(h){var d=h.filter((function(t){return v.includes(t.type.name)}));u.ensureMarks(d)}}if(t.keepAttributes){
/** If the nodeType is `bulletList` or `orderedList` set the `nodeType` as `listItem` */
var p=t.type.name==="bulletList"||t.type.name==="orderedList"?"listItem":"taskList";a().updateAttributes(p,o).run()}var g=u.doc.resolve(n.from-1).nodeBefore;if(g&&g.type===t.type&&canJoin(u.doc,n.from-1)&&(!t.joinPredicate||t.joinPredicate(i,g)))u.join(n.from-1)},undoable:t.undoable})}
//#endregion
//#region src/lib/ResizableNodeView.ts
var isTouchEvent=function(t){return"touches"in t};
/**
* A NodeView implementation that adds resize handles to any DOM element.
*
* This class creates a resizable node view for Tiptap/ProseMirror editors.
* It wraps your element with resize handles and manages the resize interaction,
* including aspect ratio preservation, min/max constraints, and keyboard modifiers.
*
* @example
* ```ts
* // Basic usage in a Tiptap extension
* addNodeView() {
*   return ({ node, getPos }) => {
*     const img = document.createElement('img')
*     img.src = node.attrs.src
*
*     return new ResizableNodeView({
*       element: img,
*       node,
*       getPos,
*       onResize: (width, height) => {
*         img.style.width = `${width}px`
*         img.style.height = `${height}px`
*       },
*       onCommit: (width, height) => {
*         this.editor.commands.updateAttributes('image', { width, height })
*       },
*       onUpdate: () => true,
*       options: {
*         min: { width: 100, height: 100 },
*         preserveAspectRatio: true
*       }
*     })
*   }
* }
* ```
*/var ResizableNodeView=/** @class */function(){
/**
    * Creates a new ResizableNodeView instance.
    *
    * The constructor sets up the resize handles, applies initial sizing from
    * node attributes, and configures all resize behavior options.
    *
    * @param options - Configuration options for the resizable node view
    */
function t(t){var e=this;var r,n,i,a,o,u;this.directions=["bottom-left","bottom-right","top-left","top-right"];this.minSize={height:8,width:8};this.preserveAspectRatio=false;this.classNames={container:"",wrapper:"",handle:"",resizing:""};this.initialWidth=0;this.initialHeight=0;this.aspectRatio=1;this.isResizing=false;this.activeHandle=null;this.startX=0;this.startY=0;this.startWidth=0;this.startHeight=0;this.isShiftKeyPressed=false;this.lastEditableState=void 0;this.handleMap=new Map;this.handleEditorUpdate=function(){var t=e.editor.isEditable;if(t===e.lastEditableState)return;e.lastEditableState=t;if(!t)e.removeHandles();else if(t&&e.handleMap.size===0)e.attachHandles()};this.handleMouseMove=function(t){if(!e.isResizing||!e.activeHandle)return;var r=t.clientX-e.startX;var n=t.clientY-e.startY;e.handleResize(r,n)};this.handleTouchMove=function(t){if(!e.isResizing||!e.activeHandle)return;var r=t.touches[0];if(!r)return;var n=r.clientX-e.startX;var i=r.clientY-e.startY;e.handleResize(n,i)};this.handleMouseUp=function(){if(!e.isResizing)return;var t=e.element.offsetWidth;var r=e.element.offsetHeight;e.onCommit(t,r);e.isResizing=false;e.activeHandle=null;e.container.dataset.resizeState="false";if(e.classNames.resizing)e.container.classList.remove(e.classNames.resizing);document.removeEventListener("mousemove",e.handleMouseMove);document.removeEventListener("mouseup",e.handleMouseUp);document.removeEventListener("keydown",e.handleKeyDown);document.removeEventListener("keyup",e.handleKeyUp)};this.handleKeyDown=function(t){if(t.key==="Shift")e.isShiftKeyPressed=true};this.handleKeyUp=function(t){if(t.key==="Shift")e.isShiftKeyPressed=false};this.node=t.node;this.editor=t.editor;this.element=t.element;this.element.draggable=false;this.contentElement=t.contentElement;this.getPos=t.getPos;this.onResize=t.onResize;this.onCommit=t.onCommit;this.onUpdate=t.onUpdate;if((r=t.options)===null||r===void 0?void 0:r.min)this.minSize=__assign(__assign({},this.minSize),t.options.min);if((n=t.options)===null||n===void 0?void 0:n.max)this.maxSize=t.options.max;if(t===null||t===void 0||(i=t.options)===null||i===void 0?void 0:i.directions)this.directions=t.options.directions;if((a=t.options)===null||a===void 0?void 0:a.preserveAspectRatio)this.preserveAspectRatio=t.options.preserveAspectRatio;if((o=t.options)===null||o===void 0?void 0:o.className)this.classNames={container:t.options.className.container||"",wrapper:t.options.className.wrapper||"",handle:t.options.className.handle||"",resizing:t.options.className.resizing||""};if((u=t.options)===null||u===void 0?void 0:u.createCustomHandle)this.createCustomHandle=t.options.createCustomHandle;this.wrapper=this.createWrapper();this.container=this.createContainer();this.applyInitialSize();this.attachHandles();this.editor.on("update",this.handleEditorUpdate)}Object.defineProperty(t.prototype,"dom",{
/**
        * Returns the top-level DOM node that should be placed in the editor.
        *
        * This is required by the ProseMirror NodeView interface. The container
        * includes the wrapper, handles, and the actual content element.
        *
        * @returns The container element to be inserted into the editor
        */
get:function(){return this.container},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"contentDOM",{get:function(){var t;return(t=this.contentElement)!==null&&t!==void 0?t:null},enumerable:false,configurable:true});
/**
    * Called when the node's content or attributes change.
    *
    * Updates the internal node reference. If a custom `onUpdate` callback
    * was provided, it will be called to handle additional update logic.
    *
    * @param node - The new/updated node
    * @param decorations - Node decorations
    * @param innerDecorations - Inner decorations
    * @returns `false` if the node type has changed (requires full rebuild), otherwise the result of `onUpdate` or `true`
    */t.prototype.update=function(t,e,r){if(t.type!==this.node.type)return false;this.node=t;if(this.onUpdate)return this.onUpdate(t,e,r);return true};
/**
    * Cleanup method called when the node view is being removed.
    *
    * Removes all event listeners to prevent memory leaks. This is required
    * by the ProseMirror NodeView interface. If a resize is active when
    * destroy is called, it will be properly cancelled.
    */t.prototype.destroy=function(){if(this.isResizing){this.container.dataset.resizeState="false";if(this.classNames.resizing)this.container.classList.remove(this.classNames.resizing);document.removeEventListener("mousemove",this.handleMouseMove);document.removeEventListener("mouseup",this.handleMouseUp);document.removeEventListener("keydown",this.handleKeyDown);document.removeEventListener("keyup",this.handleKeyUp);this.isResizing=false;this.activeHandle=null}this.editor.off("update",this.handleEditorUpdate);this.container.remove()};
/**
    * Creates the outer container element.
    *
    * The container is the top-level element returned by the NodeView and
    * wraps the entire resizable node. It's set up with flexbox to handle
    * alignment and includes data attributes for styling and identification.
    *
    * @returns The container element
    */t.prototype.createContainer=function(){var t=document.createElement("div");t.dataset.resizeContainer="";t.dataset.node=this.node.type.name;t.style.display=this.node.type.isInline?"inline-flex":"flex";if(this.classNames.container)t.className=this.classNames.container;t.appendChild(this.wrapper);return t};
/**
    * Creates the wrapper element that contains the content and handles.
    *
    * The wrapper uses relative positioning so that resize handles can be
    * positioned absolutely within it. This is the direct parent of the
    * content element being made resizable.
    *
    * @returns The wrapper element
    */t.prototype.createWrapper=function(){var t=document.createElement("div");t.style.position="relative";t.style.display="block";t.dataset.resizeWrapper="";if(this.classNames.wrapper)t.className=this.classNames.wrapper;t.appendChild(this.element);return t};
/**
    * Creates a resize handle element for a specific direction.
    *
    * Each handle is absolutely positioned and includes a data attribute
    * identifying its direction for styling purposes.
    *
    * @param direction - The resize direction for this handle
    * @returns The handle element
    */t.prototype.createHandle=function(t){var e=document.createElement("div");e.dataset.resizeHandle=t;e.style.position="absolute";if(this.classNames.handle)e.className=this.classNames.handle;return e};
/**
    * Positions a handle element according to its direction.
    *
    * Corner handles (e.g., 'top-left') are positioned at the intersection
    * of two edges. Edge handles (e.g., 'top') span the full width or height.
    *
    * @param handle - The handle element to position
    * @param direction - The direction determining the position
    */t.prototype.positionHandle=function(t,e){var r=e.includes("top");var n=e.includes("bottom");var i=e.includes("left");var a=e.includes("right");if(r)t.style.top="0";if(n)t.style.bottom="0";if(i)t.style.left="0";if(a)t.style.right="0";if(e==="top"||e==="bottom"){t.style.left="0";t.style.right="0"}if(e==="left"||e==="right"){t.style.top="0";t.style.bottom="0"}};
/**
    * Creates and attaches all resize handles to the wrapper.
    *
    * Iterates through the configured directions, creates a handle for each,
    * positions it, attaches the mousedown listener, and appends it to the DOM.
    */t.prototype.attachHandles=function(){var t=this;this.directions.forEach((function(e){var r;if(t.createCustomHandle)r=t.createCustomHandle(e);else r=t.createHandle(e);if(!(r instanceof HTMLElement)){console.warn('[ResizableNodeView] createCustomHandle("'.concat(e,'") did not return an HTMLElement. Falling back to default handle.'));r=t.createHandle(e)}if(!t.createCustomHandle)t.positionHandle(r,e);r.addEventListener("mousedown",(function(r){return t.handleResizeStart(r,e)}));r.addEventListener("touchstart",(function(r){return t.handleResizeStart(r,e)}));t.handleMap.set(e,r);t.wrapper.appendChild(r)}))};
/**
    * Removes all resize handles from the wrapper.
    *
    * Cleans up the handle map and removes each handle element from the DOM.
    */t.prototype.removeHandles=function(){this.handleMap.forEach((function(t){return t.remove()}));this.handleMap.clear()};
/**
    * Applies initial sizing from node attributes to the element.
    *
    * If width/height attributes exist on the node, they're applied to the element.
    * Otherwise, the element's natural/current dimensions are measured. The aspect
    * ratio is calculated for later use in aspect-ratio-preserving resizes.
    */t.prototype.applyInitialSize=function(){var t=this.node.attrs.width;var e=this.node.attrs.height;if(t){this.element.style.width="".concat(t,"px");this.initialWidth=t}else this.initialWidth=this.element.offsetWidth;if(e){this.element.style.height="".concat(e,"px");this.initialHeight=e}else this.initialHeight=this.element.offsetHeight;if(this.initialWidth>0&&this.initialHeight>0)this.aspectRatio=this.initialWidth/this.initialHeight};
/**
    * Initiates a resize operation when a handle is clicked.
    *
    * Captures the starting mouse position and element dimensions, sets up
    * the resize state, adds the resizing class and state attribute, and
    * attaches document-level listeners for mouse movement and keyboard input.
    *
    * @param event - The mouse down event
    * @param direction - The direction of the handle being dragged
    */t.prototype.handleResizeStart=function(t,e){t.preventDefault();t.stopPropagation();this.isResizing=true;this.activeHandle=e;if(isTouchEvent(t)){this.startX=t.touches[0].clientX;this.startY=t.touches[0].clientY}else{this.startX=t.clientX;this.startY=t.clientY}this.startWidth=this.element.offsetWidth;this.startHeight=this.element.offsetHeight;if(this.startWidth>0&&this.startHeight>0)this.aspectRatio=this.startWidth/this.startHeight;if(this.getPos()!==void 0);this.container.dataset.resizeState="true";if(this.classNames.resizing)this.container.classList.add(this.classNames.resizing);document.addEventListener("mousemove",this.handleMouseMove);document.addEventListener("touchmove",this.handleTouchMove);document.addEventListener("mouseup",this.handleMouseUp);document.addEventListener("keydown",this.handleKeyDown);document.addEventListener("keyup",this.handleKeyUp)};t.prototype.handleResize=function(t,e){if(!this.activeHandle)return;var r=this.preserveAspectRatio||this.isShiftKeyPressed;var n=this.calculateNewDimensions(this.activeHandle,t,e),i=n.width,a=n.height;var o=this.applyConstraints(i,a,r);this.element.style.width="".concat(o.width,"px");this.element.style.height="".concat(o.height,"px");if(this.onResize)this.onResize(o.width,o.height)};
/**
    * Calculates new dimensions based on mouse delta and resize direction.
    *
    * Takes the starting dimensions and applies the mouse movement delta
    * according to the handle direction. For corner handles, both dimensions
    * are affected. For edge handles, only one dimension changes. If aspect
    * ratio should be preserved, delegates to applyAspectRatio.
    *
    * @param direction - The active resize handle direction
    * @param deltaX - Horizontal mouse movement since resize start
    * @param deltaY - Vertical mouse movement since resize start
    * @returns The calculated width and height
    */t.prototype.calculateNewDimensions=function(t,e,r){var n=this.startWidth;var i=this.startHeight;var a=t.includes("right");var o=t.includes("left");var u=t.includes("bottom");var s=t.includes("top");if(a)n=this.startWidth+e;else if(o)n=this.startWidth-e;if(u)i=this.startHeight+r;else if(s)i=this.startHeight-r;if(t==="right"||t==="left")n=this.startWidth+(a?e:-e);if(t==="top"||t==="bottom")i=this.startHeight+(u?r:-r);if(this.preserveAspectRatio||this.isShiftKeyPressed)return this.applyAspectRatio(n,i,t);return{width:n,height:i}};
/**
    * Applies min/max constraints to dimensions.
    *
    * When aspect ratio is NOT preserved, constraints are applied independently
    * to width and height. When aspect ratio IS preserved, constraints are
    * applied while maintaining the aspect ratio—if one dimension hits a limit,
    * the other is recalculated proportionally.
    *
    * This ensures that aspect ratio is never broken when constrained.
    *
    * @param width - The unconstrained width
    * @param height - The unconstrained height
    * @param preserveAspectRatio - Whether to maintain aspect ratio while constraining
    * @returns The constrained dimensions
    */t.prototype.applyConstraints=function(t,e,r){var n,i;if(!r){var a,o;var u=Math.max(this.minSize.width,t);var s=Math.max(this.minSize.height,e);if((a=this.maxSize)===null||a===void 0?void 0:a.width)u=Math.min(this.maxSize.width,u);if((o=this.maxSize)===null||o===void 0?void 0:o.height)s=Math.min(this.maxSize.height,s);return{width:u,height:s}}var f=t;var l=e;if(f<this.minSize.width){f=this.minSize.width;l=f/this.aspectRatio}if(l<this.minSize.height){l=this.minSize.height;f=l*this.aspectRatio}if(((n=this.maxSize)===null||n===void 0?void 0:n.width)&&f>this.maxSize.width){f=this.maxSize.width;l=f/this.aspectRatio}if(((i=this.maxSize)===null||i===void 0?void 0:i.height)&&l>this.maxSize.height){l=this.maxSize.height;f=l*this.aspectRatio}return{width:f,height:l}};
/**
    * Adjusts dimensions to maintain the original aspect ratio.
    *
    * For horizontal handles (left/right), uses width as the primary dimension
    * and calculates height from it. For vertical handles (top/bottom), uses
    * height as primary and calculates width. For corner handles, uses width
    * as the primary dimension.
    *
    * @param width - The new width
    * @param height - The new height
    * @param direction - The active resize direction
    * @returns Dimensions adjusted to preserve aspect ratio
    */t.prototype.applyAspectRatio=function(t,e,r){var n=r==="left"||r==="right";var i=r==="top"||r==="bottom";if(n)return{width:t,height:t/this.aspectRatio};if(i)return{width:e*this.aspectRatio,height:e};return{width:t,height:t/this.aspectRatio}};return t}();
//#endregion
//#region src/Node.ts
/**
* The Node class is used to create custom node extensions.
* @see https://tiptap.dev/api/extensions#create-a-new-extension
*/var Node$1=/** @class */function(t){__extends(e,t);function e(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var n=t.apply(this,e)||this;n.type="node";return n}
/**
    * Create a new Node instance
    * @param config - Node configuration object or a function that returns a configuration object
    */e.create=function(t){if(t===void 0){t={}}var r=typeof t==="function"?t():t;return new e(r)};e.prototype.configure=function(e){return t.prototype.configure.call(this,e)};e.prototype.extend=function(e){var r=typeof e==="function"?e():e;return t.prototype.extend.call(this,r)};return e}(Extendable);
//#endregion
//#region src/pasteRules/markPasteRule.ts
/**
* Build an paste rule that adds a mark when the
* matched text is pasted into it.
* @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#paste-rules
*/function markPasteRule(t){return new PasteRule({find:t.find,handler:function(e){var r=e.state,n=e.range,i=e.match,a=e.pasteEvent;var o=callOrReturn(t.getAttributes,void 0,i,a);if(o===false||o===null)return null;var u=r.tr;var s=i[i.length-1];var f=i[0];var l=n.to;if(s){var c=f.search(/\S/);var v=n.from+f.indexOf(s);var h=v+s.length;if(getMarksBetween(n.from,n.to,r.doc).filter((function(e){return e.mark.type.excluded.find((function(r){return r===t.type&&r!==e.mark.type}))})).filter((function(t){return t.to>v})).length)return null;if(h<n.to)u.delete(h,n.to);if(v>n.from)u.delete(n.from+c,v);l=n.from+c+s.length;u.addMark(n.from+c,l,t.type.create(o||{}));if(!(i.index!==void 0&&i.input!==void 0&&i.index+i[0].length>=i.input.length))u.removeStoredMark(t.type)}}})}
//#region src/image.ts
/**
* Matches an image to a ![image](src "title") on input.
*/var inputRegex$3=/(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
/**
* This extension allows you to insert images.
* @see https://www.tiptap.dev/api/nodes/image
*/var Image=Node$1.create({name:"image",addOptions:function(){return{inline:false,allowBase64:false,HTMLAttributes:{},resize:false}},inline:function(){return this.options.inline},group:function(){return this.options.inline?"inline":"block"},draggable:true,addAttributes:function(){return{src:{default:null},alt:{default:null},title:{default:null},width:{default:null},height:{default:null}}},parseHTML:function(){return[{tag:this.options.allowBase64?"img[src]":'img[src]:not([src^="data:"])'}]},renderHTML:function(t){var e=t.HTMLAttributes;return["img",mergeAttributes(this.options.HTMLAttributes,e)]},parseMarkdown:function(t,e){return e.createNode("image",{src:t.href,title:t.title,alt:t.text})},renderMarkdown:function(t){var e,r,n,i,a,o;var u=(e=(r=t.attrs)===null||r===void 0?void 0:r.src)!==null&&e!==void 0?e:"";var s=(n=(i=t.attrs)===null||i===void 0?void 0:i.alt)!==null&&n!==void 0?n:"";var f=(a=(o=t.attrs)===null||o===void 0?void 0:o.title)!==null&&a!==void 0?a:"";return f?"![".concat(s,"](").concat(u,' "').concat(f,'")'):"![".concat(s,"](").concat(u,")")},addNodeView:function(){var t=this;if(!this.options.resize||!this.options.resize.enabled||typeof document==="undefined")return null;var e=this.options.resize,r=e.directions,n=e.minWidth,i=e.minHeight,a=e.alwaysPreserveAspectRatio;var o=new Set(["src","width","height"]);return function(e){var u=e.node,s=e.getPos,f=e.HTMLAttributes,l=e.editor;var c=document.createElement("img");c.draggable=false;var v=mergeAttributes(t.options.HTMLAttributes,f);Object.entries(v).forEach((function(t){var e=t[0],r=t[1];if(r!=null)switch(e){case"src":case"width":case"height":break;default:c.setAttribute(e,r)}}));if(v.src!==null)c.src=v.src;var h=__assign({},f);var d=function(t){if(typeof t==="string"&&t!==""){if(c.getAttribute("src")!==t)c.src=t;return}if(c.hasAttribute("src"))c.removeAttribute("src");if(c.src!=="")c.src=""};d(f.src);var p=function(t){if(t.type!==u.type)return false;var e=l.extensionManager.attributes.filter((function(e){return e.type===t.type.name}));var r=getRenderedAttributes(t,e);Object.keys(h).forEach((function(t){if(!o.has(t)&&!(t in r))c.removeAttribute(t)}));Object.entries(r).forEach((function(t){var e=t[0],r=t[1];if(o.has(e))return;if(r!=null)c.setAttribute(e,r);else c.removeAttribute(e)}));d(r.src);h=r;return true};var g=new ResizableNodeView({element:c,editor:l,node:u,getPos:s,onResize:function(t,e){c.style.width="".concat(t,"px");c.style.height="".concat(e,"px")},onCommit:function(e,r){var n=s();if(n===void 0)return;t.editor.chain().setNodeSelection(n).updateAttributes(t.name,{width:e,height:r}).run()},onUpdate:p,options:{directions:r,min:{width:n,height:i},preserveAspectRatio:a===true}});var m=g.dom;var b=function(){m.style.visibility="";m.style.pointerEvents=""};m.style.visibility="hidden";m.style.pointerEvents="none";if(c.complete&&c.naturalWidth>0)b();else{c.onload=b;c.onerror=b}return g}},addCommands:function(){var t=this;return{setImage:function(e){return function(r){var n=r.commands;return n.insertContent({type:t.name,attrs:e})}}}},addInputRules:function(){return[nodeInputRule({find:inputRegex$3,type:this.type,getAttributes:function(t){var e=t[2],r=t[3],n=t[4];return{src:r,alt:e,title:n}}})]}});
//#region src/tablemap.ts
var readFromCache;var addToCache;if(typeof WeakMap!="undefined"){var cache_1=new WeakMap;readFromCache=function(t){return cache_1.get(t)};addToCache=function(t,e){cache_1.set(t,e);return e}}else{var cache_2=[];var cacheSize_1=10;var cachePos_1=0;readFromCache=function(t){for(var e=0;e<cache_2.length;e+=2)if(cache_2[e]==t)return cache_2[e+1]};addToCache=function(t,e){if(cachePos_1==cacheSize_1)cachePos_1=0;cache_2[cachePos_1++]=t;return cache_2[cachePos_1++]=e}}
/**
* A table map describes the structure of a given table. To avoid
* recomputing them all the time, they are cached per table node. To
* be able to do that, positions saved in the map are relative to the
* start of the table, rather than the start of the document.
*
* @public
*/var TableMap=/** @class */function(){function t(t,e,r,n){this.width=t;this.height=e;this.map=r;this.problems=n}t.prototype.findCell=function(t){for(var e=0;e<this.map.length;e++){var r=this.map[e];if(r!=t)continue;var n=e%this.width;var i=e/this.width|0;var a=n+1;var o=i+1;for(var u=1;a<this.width&&this.map[e+u]==r;u++)a++;for(var u=1;o<this.height&&this.map[e+this.width*u]==r;u++)o++;return{left:n,top:i,right:a,bottom:o}}throw new RangeError("No cell with offset ".concat(t," found"))};t.prototype.colCount=function(t){for(var e=0;e<this.map.length;e++)if(this.map[e]==t)return e%this.width;throw new RangeError("No cell with offset ".concat(t," found"))};t.prototype.nextCell=function(t,e,r){var n=this.findCell(t),i=n.left,a=n.right,o=n.top,u=n.bottom;if(e=="horiz"){if(r<0?i==0:a==this.width)return null;return this.map[o*this.width+(r<0?i-1:a)]}else{if(r<0?o==0:u==this.height)return null;return this.map[i+this.width*(r<0?o-1:u)]}};t.prototype.rectBetween=function(t,e){var r=this.findCell(t),n=r.left,i=r.right,a=r.top,o=r.bottom;var u=this.findCell(e),s=u.left,f=u.right,l=u.top,c=u.bottom;return{left:Math.min(n,s),top:Math.min(a,l),right:Math.max(i,f),bottom:Math.max(o,c)}};t.prototype.cellsInRect=function(t){var e=[];var r={};for(var n=t.top;n<t.bottom;n++)for(var i=t.left;i<t.right;i++){var a=n*this.width+i;var o=this.map[a];if(r[o])continue;r[o]=true;if(i==t.left&&i&&this.map[a-1]==o||n==t.top&&n&&this.map[a-this.width]==o)continue;e.push(o)}return e};t.prototype.positionAt=function(t,e,r){for(var n=0,i=0;;n++){var a=i+r.child(n).nodeSize;if(n==t){var o=e+t*this.width;var u=(t+1)*this.width;while(o<u&&this.map[o]<i)o++;return o==u?a-1:this.map[o]}i=a}};t.get=function(t){return readFromCache(t)||addToCache(t,computeMap(t))};return t}();function computeMap(t){if(t.type.spec.tableRole!="table")throw new RangeError("Not a table node: "+t.type.name);var e=findWidth(t),r=t.childCount;var n=[];var i=0;var a=null;var o=[];for(var u=0,s=e*r;u<s;u++)n[u]=0;for(var f=0,l=0;f<r;f++){var c=t.child(f);l++;for(var v=0;;v++){while(i<n.length&&n[i]!=0)i++;if(v==c.childCount)break;var h=c.child(v);var d=h.attrs,p=d.colspan,g=d.rowspan,m=d.colwidth;for(var b=0;b<g;b++){if(b+f>=r){(a||(a=[])).push({type:"overlong_rowspan",pos:l,n:g-b});break}var w=i+b*e;for(var S=0;S<p;S++){if(n[w+S]==0)n[w+S]=l;else(a||(a=[])).push({type:"collision",row:f,pos:l,n:p-S});var E=m&&m[S];if(E){var T=(w+S)%e*2,y=o[T];if(y==null||y!=E&&o[T+1]==1){o[T]=E;o[T+1]=1}else if(y==E)o[T+1]++}}}i+=p;l+=h.nodeSize}var k=(f+1)*e;var R=0;while(i<k)if(n[i++]==0)R++;if(R)(a||(a=[])).push({type:"missing",row:f,n:R});l++}if(e===0||r===0)(a||(a=[])).push({type:"zero_sized"});var x=new TableMap(e,r,n,a);var A=false;for(var C=0;!A&&C<o.length;C+=2)if(o[C]!=null&&o[C+1]<r)A=true;if(A)findBadColWidths(x,o,t);return x}function findWidth(t){var e=-1;var r=false;for(var n=0;n<t.childCount;n++){var i=t.child(n);var a=0;if(r)for(var o=0;o<n;o++){var u=t.child(o);for(var s=0;s<u.childCount;s++){var f=u.child(s);if(o+f.attrs.rowspan>n)a+=f.attrs.colspan}}for(var l=0;l<i.childCount;l++){var f=i.child(l);a+=f.attrs.colspan;if(f.attrs.rowspan>1)r=true}if(e==-1)e=a;else if(e!=a)e=Math.max(e,a)}return e}function findBadColWidths(t,e,r){if(!t.problems)t.problems=[];var n={};for(var i=0;i<t.map.length;i++){var a=t.map[i];if(n[a])continue;n[a]=true;var o=r.nodeAt(a);if(!o)throw new RangeError("No cell with offset ".concat(a," found"));var u=null;var s=o.attrs;for(var f=0;f<s.colspan;f++){var l=e[(i+f)%t.width*2];if(l!=null&&(!s.colwidth||s.colwidth[f]!=l))(u||(u=freshColWidth(s)))[f]=l}if(u)t.problems.unshift({type:"colwidth mismatch",pos:a,colwidth:u})}}function freshColWidth(t){if(t.colwidth)return t.colwidth.slice();var e=[];for(var r=0;r<t.colspan;r++)e.push(0);return e}
/**
* @public
*/function tableNodeTypes(t){var e=t.cached.tableNodeTypes;if(!e){e=t.cached.tableNodeTypes={};for(var r in t.nodes){var n=t.nodes[r],i=n.spec.tableRole;if(i)e[i]=n}}return e}
//#endregion
//#region src/util.ts
/**
* @public
*/var tableEditingKey=new PluginKey("selectingCells");
/**
* @public
*/function cellAround(t){for(var e=t.depth-1;e>0;e--)if(t.node(e).type.spec.tableRole=="row")return t.node(0).resolve(t.before(e+1));return null}function cellWrapping(t){for(var e=t.depth;e>0;e--){var r=t.node(e).type.spec.tableRole;if(r==="cell"||r==="header_cell")return t.node(e)}return null}
/**
* @public
*/function isInTable(t){var e=t.selection.$head;for(var r=e.depth;r>0;r--)if(e.node(r).type.spec.tableRole=="row")return true;return false}
/**
* @internal
*/function selectionCell(t){var e=t.selection;if("$anchorCell"in e&&e.$anchorCell)return e.$anchorCell.pos>e.$headCell.pos?e.$anchorCell:e.$headCell;else if("node"in e&&e.node&&e.node.type.spec.tableRole=="cell")return e.$anchor;var r=cellAround(e.$head)||cellNear(e.$head);if(r)return r;throw new RangeError("No cell found around position ".concat(e.head))}
/**
* @public
*/function cellNear(t){for(var e=t.nodeAfter,r=t.pos;e;e=e.firstChild,r++){var n=e.type.spec.tableRole;if(n=="cell"||n=="header_cell")return t.doc.resolve(r)}for(var i=t.nodeBefore,r=t.pos;i;i=i.lastChild,r--){var n=i.type.spec.tableRole;if(n=="cell"||n=="header_cell")return t.doc.resolve(r-i.nodeSize)}}
/**
* @public
*/function pointsAtCell(t){return t.parent.type.spec.tableRole=="row"&&!!t.nodeAfter}
/**
* @public
*/function moveCellForward(t){return t.node(0).resolve(t.pos+t.nodeAfter.nodeSize)}
/**
* @internal
*/function inSameTable(t,e){return t.depth==e.depth&&t.pos>=e.start(-1)&&t.pos<=e.end(-1)}
/**
* @public
*/function nextCell(t,e,r){var n=t.node(-1);var i=TableMap.get(n);var a=t.start(-1);var o=i.nextCell(t.pos-a,e,r);return o==null?null:t.node(0).resolve(a+o)}
/**
* @public
*/function removeColSpan(t,e,r){if(r===void 0){r=1}var n=__assign(__assign({},t),{colspan:t.colspan-r});if(n.colwidth){n.colwidth=n.colwidth.slice();n.colwidth.splice(e,r);if(!n.colwidth.some((function(t){return t>0})))n.colwidth=null}return n}
/**
* @public
*/function addColSpan(t,e,r){if(r===void 0){r=1}var n=__assign(__assign({},t),{colspan:t.colspan+r});if(n.colwidth){n.colwidth=n.colwidth.slice();for(var i=0;i<r;i++)n.colwidth.splice(e,0,0)}return n}
/**
* @public
*/function columnIsHeader(t,e,r){var n=tableNodeTypes(e.type.schema).header_cell;for(var i=0;i<t.height;i++)if(e.nodeAt(t.map[r+i*t.width]).type!=n)return false;return true}
//#endregion
//#region src/cellselection.ts
/**
* A [`Selection`](http://prosemirror.net/docs/ref/#state.Selection)
* subclass that represents a cell selection spanning part of a table.
* With the plugin enabled, these will be created when the user
* selects across cells, and will be drawn by giving selected cells a
* `selectedCell` CSS class.
*
* @public
*/var CellSelection=/** @class */function(t){__extends(e,t);function e(e,r){if(r===void 0){r=e}var n=this;var i=e.node(-1);var a=TableMap.get(i);var o=e.start(-1);var u=a.rectBetween(e.pos-o,r.pos-o);var s=e.node(0);var f=a.cellsInRect(u).filter((function(t){return t!=r.pos-o}));f.unshift(r.pos-o);var l=f.map((function(t){var e=i.nodeAt(t);if(!e)throw new RangeError("No cell with offset ".concat(t," found"));var r=o+t+1;return new SelectionRange(s.resolve(r),s.resolve(r+e.content.size))}));n=t.call(this,l[0].$from,l[0].$to,l)||this;n.$anchorCell=e;n.$headCell=r;return n}e.prototype.map=function(t,r){var n=t.resolve(r.map(this.$anchorCell.pos));var i=t.resolve(r.map(this.$headCell.pos));if(pointsAtCell(n)&&pointsAtCell(i)&&inSameTable(n,i)){var a=this.$anchorCell.node(-1)!=n.node(-1);if(a&&this.isRowSelection())return e.rowSelection(n,i);else if(a&&this.isColSelection())return e.colSelection(n,i);else return new e(n,i)}return TextSelection.between(n,i)};e.prototype.content=function(){var t=this.$anchorCell.node(-1);var e=TableMap.get(t);var r=this.$anchorCell.start(-1);var n=e.rectBetween(this.$anchorCell.pos-r,this.$headCell.pos-r);var i={};var a=[];for(var o=n.top;o<n.bottom;o++){var u=[];for(var s=o*e.width+n.left,f=n.left;f<n.right;f++,s++){var l=e.map[s];if(i[l])continue;i[l]=true;var c=e.findCell(l);var v=t.nodeAt(l);if(!v)throw new RangeError("No cell with offset ".concat(l," found"));var h=n.left-c.left;var d=c.right-n.right;if(h>0||d>0){var p=v.attrs;if(h>0)p=removeColSpan(p,0,h);if(d>0)p=removeColSpan(p,p.colspan-d,d);if(c.left<n.left){v=v.type.createAndFill(p);if(!v)throw new RangeError("Could not create cell with attrs ".concat(JSON.stringify(p)))}else v=v.type.create(p,v.content)}if(c.top<n.top||c.bottom>n.bottom){var p=__assign(__assign({},v.attrs),{rowspan:Math.min(c.bottom,n.bottom)-Math.max(c.top,n.top)});if(c.top<n.top)v=v.type.createAndFill(p);else v=v.type.create(p,v.content)}u.push(v)}a.push(t.child(o).copy(Fragment.from(u)))}var g=this.isColSelection()&&this.isRowSelection()?t:a;return new Slice(Fragment.from(g),1,1)};e.prototype.replace=function(t,e){if(e===void 0){e=Slice.empty}var r=t.steps.length,n=this.ranges;for(var i=0;i<n.length;i++){var a=n[i],o=a.$from,u=a.$to,s=t.mapping.slice(r);t.replace(s.map(o.pos),s.map(u.pos),i?Slice.empty:e)}var f=Selection.findFrom(t.doc.resolve(t.mapping.slice(r).map(this.to)),-1);if(f)t.setSelection(f)};e.prototype.replaceWith=function(t,e){this.replace(t,new Slice(Fragment.from(e),0,0))};e.prototype.forEachCell=function(t){var e=this.$anchorCell.node(-1);var r=TableMap.get(e);var n=this.$anchorCell.start(-1);var i=r.cellsInRect(r.rectBetween(this.$anchorCell.pos-n,this.$headCell.pos-n));for(var a=0;a<i.length;a++)t(e.nodeAt(i[a]),n+i[a])};e.prototype.isColSelection=function(){var t=this.$anchorCell.index(-1);var e=this.$headCell.index(-1);if(Math.min(t,e)>0)return false;var r=t+this.$anchorCell.nodeAfter.attrs.rowspan;var n=e+this.$headCell.nodeAfter.attrs.rowspan;return Math.max(r,n)==this.$headCell.node(-1).childCount};e.colSelection=function(t,r){if(r===void 0){r=t}var n=t.node(-1);var i=TableMap.get(n);var a=t.start(-1);var o=i.findCell(t.pos-a);var u=i.findCell(r.pos-a);var s=t.node(0);if(o.top<=u.top){if(o.top>0)t=s.resolve(a+i.map[o.left]);if(u.bottom<i.height)r=s.resolve(a+i.map[i.width*(i.height-1)+u.right-1])}else{if(u.top>0)r=s.resolve(a+i.map[u.left]);if(o.bottom<i.height)t=s.resolve(a+i.map[i.width*(i.height-1)+o.right-1])}return new e(t,r)};e.prototype.isRowSelection=function(){var t=this.$anchorCell.node(-1);var e=TableMap.get(t);var r=this.$anchorCell.start(-1);var n=e.colCount(this.$anchorCell.pos-r);var i=e.colCount(this.$headCell.pos-r);if(Math.min(n,i)>0)return false;var a=n+this.$anchorCell.nodeAfter.attrs.colspan;var o=i+this.$headCell.nodeAfter.attrs.colspan;return Math.max(a,o)==e.width};e.prototype.eq=function(t){return t instanceof e&&t.$anchorCell.pos==this.$anchorCell.pos&&t.$headCell.pos==this.$headCell.pos};e.rowSelection=function(t,r){if(r===void 0){r=t}var n=t.node(-1);var i=TableMap.get(n);var a=t.start(-1);var o=i.findCell(t.pos-a);var u=i.findCell(r.pos-a);var s=t.node(0);if(o.left<=u.left){if(o.left>0)t=s.resolve(a+i.map[o.top*i.width]);if(u.right<i.width)r=s.resolve(a+i.map[i.width*(u.top+1)-1])}else{if(u.left>0)r=s.resolve(a+i.map[u.top*i.width]);if(o.right<i.width)t=s.resolve(a+i.map[i.width*(o.top+1)-1])}return new e(t,r)};e.prototype.toJSON=function(){return{type:"cell",anchor:this.$anchorCell.pos,head:this.$headCell.pos}};e.fromJSON=function(t,r){return new e(t.resolve(r.anchor),t.resolve(r.head))};e.create=function(t,r,n){if(n===void 0){n=r}return new e(t.resolve(r),t.resolve(n))};e.prototype.getBookmark=function(){return new CellBookmark(this.$anchorCell.pos,this.$headCell.pos)};return e}(Selection);CellSelection.prototype.visible=false;Selection.jsonID("cell",CellSelection);
/**
* @public
*/var CellBookmark=/** @class */function(){function t(t,e){this.anchor=t;this.head=e}t.prototype.map=function(e){return new t(e.map(this.anchor),e.map(this.head))};t.prototype.resolve=function(t){var e=t.resolve(this.anchor),r=t.resolve(this.head);if(e.parent.type.spec.tableRole=="row"&&r.parent.type.spec.tableRole=="row"&&e.index()<e.parent.childCount&&r.index()<r.parent.childCount&&inSameTable(e,r))return new CellSelection(e,r);else return Selection.near(r,1)};return t}();function drawCellSelection(t){if(!(t.selection instanceof CellSelection))return null;var e=[];t.selection.forEachCell((function(t,r){e.push(Decoration.node(r,r+t.nodeSize,{class:"selectedCell"}))}));return DecorationSet.create(t.doc,e)}function isCellBoundarySelection(t){var e=t.$from,r=t.$to;if(e.pos==r.pos||e.pos<r.pos-6)return false;var n=e.pos;var i=r.pos;var a=e.depth;for(;a>=0;a--,n++)if(e.after(a+1)<e.end(a))break;for(var o=r.depth;o>=0;o--,i--)if(r.before(o+1)>r.start(o))break;return n==i&&/row|table/.test(e.node(a).type.spec.tableRole)}function isTextSelectionAcrossCells(t){var e=t.$from,r=t.$to;var n;var i;for(var a=e.depth;a>0;a--){var o=e.node(a);if(o.type.spec.tableRole==="cell"||o.type.spec.tableRole==="header_cell"){n=o;break}}for(var u=r.depth;u>0;u--){var o=r.node(u);if(o.type.spec.tableRole==="cell"||o.type.spec.tableRole==="header_cell"){i=o;break}}return n!==i&&r.parentOffset===0}function normalizeSelection(t,e,r){var n=(e||t).selection;var i=(e||t).doc;var a;var o;if(n instanceof NodeSelection&&(o=n.node.type.spec.tableRole)){if(o=="cell"||o=="header_cell")a=CellSelection.create(i,n.from);else if(o=="row"){var u=i.resolve(n.from+1);a=CellSelection.rowSelection(u,u)}else if(!r){var s=TableMap.get(n.node);var f=n.from+1;var l=f+s.map[s.width*s.height-1];a=CellSelection.create(i,f+1,l)}}else if(n instanceof TextSelection&&isCellBoundarySelection(n))a=TextSelection.create(i,n.from);else if(n instanceof TextSelection&&isTextSelectionAcrossCells(n))a=TextSelection.create(i,n.$from.start(),n.$from.end());if(a)(e||(e=t.tr)).setSelection(a);return e}
//#endregion
//#region src/fixtables.ts
/**
* @public
*/var fixTablesKey=new PluginKey("fix-tables");
/**
* Helper for iterating through the nodes in a document that changed
* compared to the given previous document. Useful for avoiding
* duplicate work on each transaction.
*
* @public
*/function changedDescendants(t,e,r,n){var i=t.childCount,a=e.childCount;t:for(var o=0,u=0;o<a;o++){var s=e.child(o);for(var f=u,l=Math.min(i,o+3);f<l;f++)if(t.child(f)==s){u=f+1;r+=s.nodeSize;continue t}n(s,r);if(u<i&&t.child(u).sameMarkup(s))changedDescendants(t.child(u),s,r+1,n);else s.nodesBetween(0,s.content.size,n,r+1);r+=s.nodeSize}}
/**
* Inspect all tables in the given state's document and return a
* transaction that fixes them, if necessary. If `oldState` was
* provided, that is assumed to hold a previous, known-good state,
* which will be used to avoid re-scanning unchanged parts of the
* document.
*
* @public
*/function fixTables(t,e){var r;var n=function(e,n){if(e.type.spec.tableRole=="table")r=fixTable(t,e,n,r)};if(!e)t.doc.descendants(n);else if(e.doc!=t.doc)changedDescendants(e.doc,t.doc,0,n);return r}function fixTable(t,e,r,n){var i=TableMap.get(e);if(!i.problems)return n;if(!n)n=t.tr;var a=[];for(var o=0;o<i.height;o++)a.push(0);for(var u=0;u<i.problems.length;u++){var s=i.problems[u];if(s.type=="collision"){var f=e.nodeAt(s.pos);if(!f)continue;var l=f.attrs;for(var c=0;c<l.rowspan;c++)a[s.row+c]+=s.n;n.setNodeMarkup(n.mapping.map(r+1+s.pos),null,removeColSpan(l,l.colspan-s.n,s.n))}else if(s.type=="missing")a[s.row]+=s.n;else if(s.type=="overlong_rowspan"){var f=e.nodeAt(s.pos);if(!f)continue;n.setNodeMarkup(n.mapping.map(r+1+s.pos),null,__assign(__assign({},f.attrs),{rowspan:f.attrs.rowspan-s.n}))}else if(s.type=="colwidth mismatch"){var f=e.nodeAt(s.pos);if(!f)continue;n.setNodeMarkup(n.mapping.map(r+1+s.pos),null,__assign(__assign({},f.attrs),{colwidth:s.colwidth}))}else if(s.type=="zero_sized"){var v=n.mapping.map(r);n.delete(v,v+e.nodeSize)}}var h,d;for(var p=0;p<a.length;p++)if(a[p]){if(h==null)h=p;d=p}for(var g=0,v=r+1;g<i.height;g++){var m=e.child(g);var b=v+m.nodeSize;var w=a[g];if(w>0){var S="cell";if(m.firstChild)S=m.firstChild.type.spec.tableRole;var E=[];for(var c=0;c<w;c++){var T=tableNodeTypes(t.schema)[S].createAndFill();if(T)E.push(T)}var y=(g==0||h==g-1)&&d==g?v+1:b-1;n.insert(n.mapping.map(y),E)}v=b}return n.setMeta(fixTablesKey,{fixTables:true})}
//#endregion
//#region src/commands.ts
/**
* Helper to get the selected rectangle in a table, if any. Adds table
* map, table node, and table start offset to the object for
* convenience.
*
* @public
*/function selectedRect(t){var e=t.selection;var r=selectionCell(t);var n=r.node(-1);var i=r.start(-1);var a=TableMap.get(n);return __assign(__assign({},e instanceof CellSelection?a.rectBetween(e.$anchorCell.pos-i,e.$headCell.pos-i):a.findCell(r.pos-i)),{tableStart:i,map:a,table:n})}
/**
* Add a column at the given position in a table.
*
* @public
*/function addColumn(t,e,r){var n=e.map,i=e.tableStart,a=e.table;var o=r>0?-1:0;if(columnIsHeader(n,a,r+o))o=r==0||r==n.width?null:0;for(var u=0;u<n.height;u++){var s=u*n.width+r;if(r>0&&r<n.width&&n.map[s-1]==n.map[s]){var f=n.map[s];var l=a.nodeAt(f);t.setNodeMarkup(t.mapping.map(i+f),null,addColSpan(l.attrs,r-n.colCount(f)));u+=l.attrs.rowspan-1}else{var c=o==null?tableNodeTypes(a.type.schema).cell:a.nodeAt(n.map[s+o]).type;var f=n.positionAt(u,r,a);t.insert(t.mapping.map(i+f),c.createAndFill())}}return t}
/**
* Command to add a column before the column with the selection.
*
* @public
*/function addColumnBefore(t,e){if(!isInTable(t))return false;if(e){var r=selectedRect(t);e(addColumn(t.tr,r,r.left))}return true}
/**
* Command to add a column after the column with the selection.
*
* @public
*/function addColumnAfter(t,e){if(!isInTable(t))return false;if(e){var r=selectedRect(t);e(addColumn(t.tr,r,r.right))}return true}
/**
* @public
*/function removeColumn(t,e,r){var n=e.map,i=e.table,a=e.tableStart;var o=t.mapping.maps.length;for(var u=0;u<n.height;){var s=u*n.width+r;var f=n.map[s];var l=i.nodeAt(f);var c=l.attrs;if(r>0&&n.map[s-1]==f||r<n.width-1&&n.map[s+1]==f)t.setNodeMarkup(t.mapping.slice(o).map(a+f),null,removeColSpan(c,r-n.colCount(f)));else{var v=t.mapping.slice(o).map(a+f);t.delete(v,v+l.nodeSize)}u+=c.rowspan}}
/**
* Command function that removes the selected columns from a table.
*
* @public
*/function deleteColumn(t,e){if(!isInTable(t))return false;if(e){var r=selectedRect(t);var n=t.tr;if(r.left==0&&r.right==r.map.width)return false;for(var i=r.right-1;;i--){removeColumn(n,r,i);if(i==r.left)break;var a=r.tableStart?n.doc.nodeAt(r.tableStart-1):n.doc;if(!a)throw new RangeError("No table found");r.table=a;r.map=TableMap.get(a)}e(n)}return true}
/**
* @public
*/function rowIsHeader(t,e,r){var n;var i=tableNodeTypes(e.type.schema).header_cell;for(var a=0;a<t.width;a++)if(((n=e.nodeAt(t.map[a+r*t.width]))===null||n===void 0?void 0:n.type)!=i)return false;return true}
/**
* @public
*/function addRow(t,e,r){var n=e.map,i=e.tableStart,a=e.table;var o=i;for(var u=0;u<r;u++)o+=a.child(u).nodeSize;var s=[];var f=r>0?-1:0;if(rowIsHeader(n,a,r+f))f=r==0||r==n.height?null:0;for(var l=0,c=n.width*r;l<n.width;l++,c++)if(r>0&&r<n.height&&n.map[c]==n.map[c-n.width]){var v=n.map[c];var h=a.nodeAt(v).attrs;t.setNodeMarkup(i+v,null,__assign(__assign({},h),{rowspan:h.rowspan+1}));l+=h.colspan-1}else{var d;var p=f==null?tableNodeTypes(a.type.schema).cell:(d=a.nodeAt(n.map[c+f*n.width]))===null||d===void 0?void 0:d.type;var g=p===null||p===void 0?void 0:p.createAndFill();if(g)s.push(g)}t.insert(o,tableNodeTypes(a.type.schema).row.create(null,s));return t}
/**
* Add a table row before the selection.
*
* @public
*/function addRowBefore(t,e){if(!isInTable(t))return false;if(e){var r=selectedRect(t);e(addRow(t.tr,r,r.top))}return true}
/**
* Add a table row after the selection.
*
* @public
*/function addRowAfter(t,e){if(!isInTable(t))return false;if(e){var r=selectedRect(t);e(addRow(t.tr,r,r.bottom))}return true}
/**
* @public
*/function removeRow(t,e,r){var n=e.map,i=e.table,a=e.tableStart;var o=0;for(var u=0;u<r;u++)o+=i.child(u).nodeSize;var s=o+i.child(r).nodeSize;var f=t.mapping.maps.length;t.delete(o+a,s+a);var l=new Set;for(var c=0,v=r*n.width;c<n.width;c++,v++){var h=n.map[v];if(l.has(h))continue;l.add(h);if(r>0&&h==n.map[v-n.width]){var d=i.nodeAt(h).attrs;t.setNodeMarkup(t.mapping.slice(f).map(h+a),null,__assign(__assign({},d),{rowspan:d.rowspan-1}));c+=d.colspan-1}else if(r<n.height&&h==n.map[v+n.width]){var p=i.nodeAt(h);var d=p.attrs;var g=p.type.create(__assign(__assign({},d),{rowspan:p.attrs.rowspan-1}),p.content);var m=n.positionAt(r+1,c,i);t.insert(t.mapping.slice(f).map(a+m),g);c+=d.colspan-1}}}
/**
* Remove the selected rows from a table.
*
* @public
*/function deleteRow(t,e){if(!isInTable(t))return false;if(e){var r=selectedRect(t),n=t.tr;if(r.top==0&&r.bottom==r.map.height)return false;for(var i=r.bottom-1;;i--){removeRow(n,r,i);if(i==r.top)break;var a=r.tableStart?n.doc.nodeAt(r.tableStart-1):n.doc;if(!a)throw new RangeError("No table found");r.table=a;r.map=TableMap.get(r.table)}e(n)}return true}function isEmpty(t){var e=t.content;return e.childCount==1&&e.child(0).isTextblock&&e.child(0).childCount==0}function cellsOverlapRectangle(t,e){var r=t.width,n=t.height,i=t.map;var a=e.top*r+e.left,o=a;var u=(e.bottom-1)*r+e.left,s=a+(e.right-e.left-1);for(var f=e.top;f<e.bottom;f++){if(e.left>0&&i[o]==i[o-1]||e.right<r&&i[s]==i[s+1])return true;o+=r;s+=r}for(var l=e.left;l<e.right;l++){if(e.top>0&&i[a]==i[a-r]||e.bottom<n&&i[u]==i[u+r])return true;a++;u++}return false}
/**
* Merge the selected cells into a single cell. Only available when
* the selected cells' outline forms a rectangle.
*
* @public
*/function mergeCells(t,e){var r=t.selection;if(!(r instanceof CellSelection)||r.$anchorCell.pos==r.$headCell.pos)return false;var n=selectedRect(t),i=n.map;if(cellsOverlapRectangle(i,n))return false;if(e){var a=t.tr;var o={};var u=Fragment.empty;var s=void 0;var f=void 0;for(var l=n.top;l<n.bottom;l++)for(var c=n.left;c<n.right;c++){var v=i.map[l*i.width+c];var h=n.table.nodeAt(v);if(o[v]||!h)continue;o[v]=true;if(s==null){s=v;f=h}else{if(!isEmpty(h))u=u.append(h.content);var d=a.mapping.map(v+n.tableStart);a.delete(d,d+h.nodeSize)}}if(s==null||f==null)return true;a.setNodeMarkup(s+n.tableStart,null,__assign(__assign({},addColSpan(f.attrs,f.attrs.colspan,n.right-n.left-f.attrs.colspan)),{rowspan:n.bottom-n.top}));if(u.size>0){var p=s+1+f.content.size;var g=isEmpty(f)?s+1:p;a.replaceWith(g+n.tableStart,p+n.tableStart,u)}a.setSelection(new CellSelection(a.doc.resolve(s+n.tableStart)));e(a)}return true}
/**
* Split a selected cell, whose rowpan or colspan is greater than one,
* into smaller cells. Use the first cell type for the new cells.
*
* @public
*/function splitCell(t,e){var r=tableNodeTypes(t.schema);return splitCellWithType((function(t){var e=t.node;return r[e.type.spec.tableRole]}))(t,e)}
/**
* Split a selected cell, whose rowpan or colspan is greater than one,
* into smaller cells with the cell type (th, td) returned by getType function.
*
* @public
*/function splitCellWithType(t){return function(e,r){var n=e.selection;var i;var a;if(!(n instanceof CellSelection)){var o;i=cellWrapping(n.$from);if(!i)return false;a=(o=cellAround(n.$from))===null||o===void 0?void 0:o.pos}else{if(n.$anchorCell.pos!=n.$headCell.pos)return false;i=n.$anchorCell.nodeAfter;a=n.$anchorCell.pos}if(i==null||a==null)return false;if(i.attrs.colspan==1&&i.attrs.rowspan==1)return false;if(r){var u=i.attrs;var s=[];var f=u.colwidth;if(u.rowspan>1)u=__assign(__assign({},u),{rowspan:1});if(u.colspan>1)u=__assign(__assign({},u),{colspan:1});var l=selectedRect(e),c=e.tr;for(var v=0;v<l.right-l.left;v++)s.push(f?__assign(__assign({},u),{colwidth:f&&f[v]?[f[v]]:null}):u);var h=void 0;for(var d=l.top;d<l.bottom;d++){var p=l.map.positionAt(d,l.left,l.table);if(d==l.top)p+=i.nodeSize;for(var g=l.left,m=0;g<l.right;g++,m++){if(g==l.left&&d==l.top)continue;c.insert(h=c.mapping.map(p+l.tableStart,1),t({node:i,row:d,col:g}).createAndFill(s[m]))}}c.setNodeMarkup(a,t({node:i,row:l.top,col:l.left}),s[0]);if(n instanceof CellSelection)c.setSelection(new CellSelection(c.doc.resolve(n.$anchorCell.pos),h?c.doc.resolve(h):void 0));r(c)}return true}}
/**
* Returns a command that sets the given attribute to the given value,
* and is only available when the currently selected cell doesn't
* already have that attribute set to that value.
*
* @public
*/function setCellAttr(t,e){return function(r,n){var i;if(!isInTable(r))return false;var a=selectionCell(r);if(a.nodeAfter.attrs[t]===e)return false;if(n){var o=r.tr;if(r.selection instanceof CellSelection)r.selection.forEachCell((function(r,n){var i;if(r.attrs[t]!==e)o.setNodeMarkup(n,null,__assign(__assign({},r.attrs),(i={},i[t]=e,i)))}));else o.setNodeMarkup(a.pos,null,__assign(__assign({},a.nodeAfter.attrs),(i={},i[t]=e,i)));n(o)}return true}}function deprecated_toggleHeader(t){return function(e,r){if(!isInTable(e))return false;if(r){var n=tableNodeTypes(e.schema);var i=selectedRect(e),a=e.tr;var o=i.map.cellsInRect(t=="column"?{left:i.left,top:0,right:i.right,bottom:i.map.height}:t=="row"?{left:0,top:i.top,right:i.map.width,bottom:i.bottom}:i);var u=o.map((function(t){return i.table.nodeAt(t)}));for(var s=0;s<o.length;s++)if(u[s].type==n.header_cell)a.setNodeMarkup(i.tableStart+o[s],n.cell,u[s].attrs);if(a.steps.length===0)for(var f=0;f<o.length;f++)a.setNodeMarkup(i.tableStart+o[f],n.header_cell,u[f].attrs);r(a)}return true}}function isHeaderEnabledByType(t,e,r){var n=e.map.cellsInRect({left:0,top:0,right:t=="row"?e.map.width:1,bottom:t=="column"?e.map.height:1});for(var i=0;i<n.length;i++){var a=e.table.nodeAt(n[i]);if(a&&a.type!==r.header_cell)return false}return true}
/**
* Toggles between row/column header and normal cells (Only applies to first row/column).
* For deprecated behavior pass `useDeprecatedLogic` in options with true.
*
* @public
*/function toggleHeader(t,e){e=e||{useDeprecatedLogic:false};if(e.useDeprecatedLogic)return deprecated_toggleHeader(t);return function(e,r){if(!isInTable(e))return false;if(r){var n=tableNodeTypes(e.schema);var i=selectedRect(e),a=e.tr;var o=isHeaderEnabledByType("row",i,n);var u=isHeaderEnabledByType("column",i,n);var s=(t==="column"?o:t==="row"?u:false)?1:0;var f=t=="column"?{left:0,top:s,right:1,bottom:i.map.height}:t=="row"?{left:s,top:0,right:i.map.width,bottom:1}:i;var l=t=="column"?u?n.cell:n.header_cell:t=="row"?o?n.cell:n.header_cell:n.cell;i.map.cellsInRect(f).forEach((function(t){var e=t+i.tableStart;var r=a.doc.nodeAt(e);if(r)a.setNodeMarkup(e,l,r.attrs)}));r(a)}return true}}
/**
* Toggles whether the selected row contains header cells.
*
* @public
*/toggleHeader("row",{useDeprecatedLogic:true});
/**
* Toggles whether the selected column contains header cells.
*
* @public
*/toggleHeader("column",{useDeprecatedLogic:true});
/**
* Toggles whether the selected cells are header cells.
*
* @public
*/var toggleHeaderCell=toggleHeader("cell",{useDeprecatedLogic:true});function findNextCell(t,e){if(e<0){var r=t.nodeBefore;if(r)return t.pos-r.nodeSize;for(var n=t.index(-1)-1,i=t.before();n>=0;n--){var a=t.node(-1).child(n);var o=a.lastChild;if(o)return i-1-o.nodeSize;i-=a.nodeSize}}else{if(t.index()<t.parent.childCount-1)return t.pos+t.nodeAfter.nodeSize;var u=t.node(-1);for(var n=t.indexAfter(-1),s=t.after();n<u.childCount;n++){var a=u.child(n);if(a.childCount)return s+1;s+=a.nodeSize}}return null}
/**
* Returns a command for selecting the next (direction=1) or previous
* (direction=-1) cell in a table.
*
* @public
*/function goToNextCell(t){return function(e,r){if(!isInTable(e))return false;var n=findNextCell(selectionCell(e),t);if(n==null)return false;if(r){var i=e.doc.resolve(n);r(e.tr.setSelection(TextSelection.between(i,moveCellForward(i))).scrollIntoView())}return true}}
/**
* Deletes the table around the selection, if any.
*
* @public
*/function deleteTable(t,e){var r=t.selection.$anchor;for(var n=r.depth;n>0;n--)if(r.node(n).type.spec.tableRole=="table"){if(e)e(t.tr.delete(r.before(n),r.after(n)).scrollIntoView());return true}return false}
/**
* Deletes the content of the selected cells, if they are not empty.
*
* @public
*/function deleteCellSelection(t,e){var r=t.selection;if(!(r instanceof CellSelection))return false;if(e){var n=t.tr;var i=tableNodeTypes(t.schema).cell.createAndFill().content;r.forEachCell((function(t,e){if(!t.content.eq(i))n.replace(n.mapping.map(e+1),n.mapping.map(e+t.nodeSize-1),new Slice(i,0,0))}));if(n.docChanged)e(n)}return true}
//#endregion
//#region src/copypaste.ts
/**
* Get a rectangular area of cells from a slice, or null if the outer
* nodes of the slice aren't table cells or rows.
*
* @internal
*/function pastedCells(t){if(t.size===0)return null;var e=t.content,r=t.openStart,n=t.openEnd;while(e.childCount==1&&(r>0&&n>0||e.child(0).type.spec.tableRole=="table")){r--;n--;e=e.child(0).content}var i=e.child(0);var a=i.type.spec.tableRole;var o=i.type.schema,u=[];if(a=="row")for(var s=0;s<e.childCount;s++){var f=e.child(s).content;var l=s?0:Math.max(0,r-1);var c=s<e.childCount-1?0:Math.max(0,n-1);if(l||c)f=fitSlice(tableNodeTypes(o).row,new Slice(f,l,c)).content;u.push(f)}else if(a=="cell"||a=="header_cell")u.push(r||n?fitSlice(tableNodeTypes(o).row,new Slice(e,r,n)).content:e);else return null;return ensureRectangular(o,u)}function ensureRectangular(t,e){var r=[];for(var n=0;n<e.length;n++){var i=e[n];for(var a=i.childCount-1;a>=0;a--){var o=i.child(a).attrs,u=o.rowspan,s=o.colspan;for(var f=n;f<n+u;f++)r[f]=(r[f]||0)+s}}var l=0;for(var f=0;f<r.length;f++)l=Math.max(l,r[f]);for(var f=0;f<r.length;f++){if(f>=e.length)e.push(Fragment.empty);if(r[f]<l){var c=tableNodeTypes(t).cell.createAndFill();var v=[];for(var h=r[f];h<l;h++)v.push(c);e[f]=e[f].append(Fragment.from(v))}}return{height:e.length,width:l,rows:e}}function fitSlice(t,e){var r=t.createAndFill();return new Transform(r).replace(0,r.content.size,e).doc}
/**
* Clip or extend (repeat) the given set of cells to cover the given
* width and height. Will clip rowspan/colspan cells at the edges when
* they stick out.
*
* @internal
*/function clipCells(t,e,r){var n=t.width,i=t.height,a=t.rows;if(n!=e){var o=[];var u=[];for(var s=0;s<a.length;s++){var f=a[s],l=[];for(var c=o[s]||0,v=0;c<e;v++){var h=f.child(v%f.childCount);if(c+h.attrs.colspan>e)h=h.type.createChecked(removeColSpan(h.attrs,h.attrs.colspan,c+h.attrs.colspan-e),h.content);l.push(h);c+=h.attrs.colspan;for(var d=1;d<h.attrs.rowspan;d++)o[s+d]=(o[s+d]||0)+h.attrs.colspan}u.push(Fragment.from(l))}a=u;n=e}if(i!=r){var u=[];for(var s=0,p=0;s<r;s++,p++){var l=[],g=a[p%i];for(var d=0;d<g.childCount;d++){var h=g.child(d);if(s+h.attrs.rowspan>r)h=h.type.create(__assign(__assign({},h.attrs),{rowspan:Math.max(1,r-h.attrs.rowspan)}),h.content);l.push(h)}u.push(Fragment.from(l))}a=u;i=r}return{width:n,height:i,rows:a}}function growTable(t,e,r,n,i,a,o){var u=t.doc.type.schema;var s=tableNodeTypes(u);var f;var l;if(i>e.width)for(var c=0,v=0;c<e.height;c++){var h=r.child(c);v+=h.nodeSize;var d=[];var p=void 0;if(h.lastChild==null||h.lastChild.type==s.cell)p=f||(f=s.cell.createAndFill());else p=l||(l=s.header_cell.createAndFill());for(var g=e.width;g<i;g++)d.push(p);t.insert(t.mapping.slice(o).map(v-1+n),d)}if(a>e.height){var d=[];for(var m=0,b=(e.height-1)*e.width;m<Math.max(e.width,i);m++){var w=m>=e.width?false:r.nodeAt(e.map[b+m]).type==s.header_cell;d.push(w?l||(l=s.header_cell.createAndFill()):f||(f=s.cell.createAndFill()))}var S=s.row.create(null,Fragment.from(d)),E=[];for(var T=e.height;T<a;T++)E.push(S);t.insert(t.mapping.slice(o).map(n+r.nodeSize-2),E)}return!!(f||l)}function isolateHorizontal(t,e,r,n,i,a,o,u){if(o==0||o==e.height)return false;var s=false;for(var f=i;f<a;f++){var l=o*e.width+f,c=e.map[l];if(e.map[l-e.width]==c){s=true;var v=r.nodeAt(c);var h=e.findCell(c),d=h.top,p=h.left;t.setNodeMarkup(t.mapping.slice(u).map(c+n),null,__assign(__assign({},v.attrs),{rowspan:o-d}));t.insert(t.mapping.slice(u).map(e.positionAt(o,p,r)),v.type.createAndFill(__assign(__assign({},v.attrs),{rowspan:d+v.attrs.rowspan-o})));f+=v.attrs.colspan-1}}return s}function isolateVertical(t,e,r,n,i,a,o,u){if(o==0||o==e.width)return false;var s=false;for(var f=i;f<a;f++){var l=f*e.width+o,c=e.map[l];if(e.map[l-1]==c){s=true;var v=r.nodeAt(c);var h=e.colCount(c);var d=t.mapping.slice(u).map(c+n);t.setNodeMarkup(d,null,removeColSpan(v.attrs,o-h,v.attrs.colspan-(o-h)));t.insert(d+v.nodeSize,v.type.createAndFill(removeColSpan(v.attrs,0,o-h)));f+=v.attrs.rowspan-1}}return s}
/**
* Insert the given set of cells (as returned by `pastedCells`) into a
* table, at the position pointed at by rect.
*
* @internal
*/function insertCells(t,e,r,n,i){var a=r?t.doc.nodeAt(r-1):t.doc;if(!a)throw new Error("No table found");var o=TableMap.get(a);var u=n.top,s=n.left;var f=s+i.width,l=u+i.height;var c=t.tr;var v=0;function h(){a=r?c.doc.nodeAt(r-1):c.doc;if(!a)throw new Error("No table found");o=TableMap.get(a);v=c.mapping.maps.length}if(growTable(c,o,a,r,f,l,v))h();if(isolateHorizontal(c,o,a,r,s,f,u,v))h();if(isolateHorizontal(c,o,a,r,s,f,l,v))h();if(isolateVertical(c,o,a,r,u,l,s,v))h();if(isolateVertical(c,o,a,r,u,l,f,v))h();for(var d=u;d<l;d++){var p=o.positionAt(d,s,a),g=o.positionAt(d,f,a);c.replace(c.mapping.slice(v).map(p+r),c.mapping.slice(v).map(g+r),new Slice(i.rows[d-u],0,0))}h();c.setSelection(new CellSelection(c.doc.resolve(r+o.positionAt(u,s,a)),c.doc.resolve(r+o.positionAt(l-1,f-1,a))));e(c)}
//#endregion
//#region src/input.ts
var handleKeyDown$1=keydownHandler({ArrowLeft:arrow$1("horiz",-1),ArrowRight:arrow$1("horiz",1),ArrowUp:arrow$1("vert",-1),ArrowDown:arrow$1("vert",1),"Shift-ArrowLeft":shiftArrow("horiz",-1),"Shift-ArrowRight":shiftArrow("horiz",1),"Shift-ArrowUp":shiftArrow("vert",-1),"Shift-ArrowDown":shiftArrow("vert",1),Backspace:deleteCellSelection,"Mod-Backspace":deleteCellSelection,Delete:deleteCellSelection,"Mod-Delete":deleteCellSelection});function maybeSetSelection(t,e,r){if(r.eq(t.selection))return false;if(e)e(t.tr.setSelection(r).scrollIntoView());return true}
/**
* @internal
*/function arrow$1(t,e){return function(r,n,i){if(!i)return false;var a=r.selection;if(a instanceof CellSelection)return maybeSetSelection(r,n,Selection.near(a.$headCell,e));if(t!="horiz"&&!a.empty)return false;var o=atEndOfCell(i,t,e);if(o==null)return false;if(t=="horiz")return maybeSetSelection(r,n,Selection.near(r.doc.resolve(a.head+e),e));else{var u=r.doc.resolve(o);var s=nextCell(u,t,e);var f=void 0;if(s)f=Selection.near(s,1);else if(e<0)f=Selection.near(r.doc.resolve(u.before(-1)),-1);else f=Selection.near(r.doc.resolve(u.after(-1)),1);return maybeSetSelection(r,n,f)}}}function shiftArrow(t,e){return function(r,n,i){if(!i)return false;var a=r.selection;var o;if(a instanceof CellSelection)o=a;else{var u=atEndOfCell(i,t,e);if(u==null)return false;o=new CellSelection(r.doc.resolve(u))}var s=nextCell(o.$headCell,t,e);if(!s)return false;return maybeSetSelection(r,n,new CellSelection(o.$anchorCell,s))}}function handleTripleClick(t,e){var r=t.state.doc,n=cellAround(r.resolve(e));if(!n)return false;t.dispatch(t.state.tr.setSelection(new CellSelection(n)));return true}
/**
* @public
*/function handlePaste(t,e,r){if(!isInTable(t.state))return false;var n=pastedCells(r);var i=t.state.selection;if(i instanceof CellSelection){if(!n)n={width:1,height:1,rows:[Fragment.from(fitSlice(tableNodeTypes(t.state.schema).cell,r))]};var a=i.$anchorCell.node(-1);var o=i.$anchorCell.start(-1);var u=TableMap.get(a).rectBetween(i.$anchorCell.pos-o,i.$headCell.pos-o);n=clipCells(n,u.right-u.left,u.bottom-u.top);insertCells(t.state,t.dispatch,o,u,n);return true}else if(n){var s=selectionCell(t.state);var o=s.start(-1);insertCells(t.state,t.dispatch,o,TableMap.get(s.node(-1)).findCell(s.pos-o),n);return true}else return false}function handleMouseDown$1(t,e){var r;if(e.button!=0)return;if(e.ctrlKey||e.metaKey)return;var n=domInCell(t,e.target);var i;if(e.shiftKey&&t.state.selection instanceof CellSelection){a(t.state.selection.$anchorCell,e);e.preventDefault()}else if(e.shiftKey&&n&&(i=cellAround(t.state.selection.$anchor))!=null&&((r=cellUnderMouse(t,e))===null||r===void 0?void 0:r.pos)!=i.pos){a(i,e);e.preventDefault()}else if(!n)return;function a(e,r){var n=cellUnderMouse(t,r);var i=tableEditingKey.getState(t.state)==null;if(!n||!inSameTable(e,n))if(i)n=e;else return;var a=new CellSelection(e,n);if(i||!t.state.selection.eq(a)){var o=t.state.tr.setSelection(a);if(i)o.setMeta(tableEditingKey,e.pos);t.dispatch(o)}}function o(){t.root.removeEventListener("mouseup",o);t.root.removeEventListener("dragstart",o);t.root.removeEventListener("mousemove",u);if(tableEditingKey.getState(t.state)!=null)t.dispatch(t.state.tr.setMeta(tableEditingKey,-1))}function u(r){var i=r;var u=tableEditingKey.getState(t.state);var s;if(u!=null)s=t.state.doc.resolve(u);else if(domInCell(t,i.target)!=n){s=cellUnderMouse(t,e);if(!s)return o()}if(s)a(s,i)}t.root.addEventListener("mouseup",o);t.root.addEventListener("dragstart",o);t.root.addEventListener("mousemove",u)}function atEndOfCell(t,e,r){if(!(t.state.selection instanceof TextSelection))return null;var n=t.state.selection.$head;for(var i=n.depth-1;i>=0;i--){var a=n.node(i);if((r<0?n.index(i):n.indexAfter(i))!=(r<0?0:a.childCount))return null;if(a.type.spec.tableRole=="cell"||a.type.spec.tableRole=="header_cell"){var o=n.before(i);var u=e=="vert"?r>0?"down":"up":r>0?"right":"left";return t.endOfTextblock(u)?o:null}}return null}function domInCell(t,e){for(;e&&e!=t.dom;e=e.parentNode)if(e.nodeName=="TD"||e.nodeName=="TH")return e;return null}function cellUnderMouse(t,e){var r=t.posAtCoords({left:e.clientX,top:e.clientY});if(!r)return null;var n=r.inside,i=r.pos;return n>=0&&cellAround(t.state.doc.resolve(n))||cellAround(t.state.doc.resolve(i))}
//#endregion
//#region src/tableview.ts
/**
* @public
*/var TableView$1=/** @class */function(){function t(t,e){this.node=t;this.defaultCellMinWidth=e;this.dom=document.createElement("div");this.dom.className="tableWrapper";this.table=this.dom.appendChild(document.createElement("table"));this.table.style.setProperty("--default-cell-min-width","".concat(e,"px"));this.colgroup=this.table.appendChild(document.createElement("colgroup"));updateColumnsOnResize(t,this.colgroup,this.table,e);this.contentDOM=this.table.appendChild(document.createElement("tbody"))}t.prototype.update=function(t){if(t.type!=this.node.type)return false;this.node=t;updateColumnsOnResize(t,this.colgroup,this.table,this.defaultCellMinWidth);return true};t.prototype.ignoreMutation=function(t){return t.type=="attributes"&&(t.target==this.table||this.colgroup.contains(t.target))};return t}();
/**
* @public
*/function updateColumnsOnResize(t,e,r,n,i,a){var o=0;var u=true;var s=e.firstChild;var f=t.firstChild;if(!f)return;for(var l=0,c=0;l<f.childCount;l++){var v=f.child(l).attrs,h=v.colspan,d=v.colwidth;for(var p=0;p<h;p++,c++){var g=i==c?a:d&&d[p];var m=g?g+"px":"";o+=g||n;if(!g)u=false;if(!s){var b=document.createElement("col");b.style.width=m;e.appendChild(b)}else{if(s.style.width!=m)s.style.width=m;s=s.nextSibling}}}while(s){var w;var S=s.nextSibling;(w=s.parentNode)===null||w===void 0||w.removeChild(s);s=S}if(u){r.style.width=o+"px";r.style.minWidth=""}else{r.style.width="";r.style.minWidth=o+"px"}}
//#endregion
//#region src/columnresizing.ts
/**
* @public
*/var columnResizingPluginKey=new PluginKey("tableColumnResizing");
/**
* @public
*/function columnResizing(t){var e=t===void 0?{}:t,r=e.handleWidth,n=r===void 0?5:r,i=e.cellMinWidth,a=i===void 0?25:i,o=e.defaultCellMinWidth,u=o===void 0?100:o,s=e.View,f=s===void 0?TableView$1:s,l=e.lastColumnResizable,c=l===void 0?true:l;var v=new Plugin({key:columnResizingPluginKey,state:{init:function(t,e){var r;var n=(r=v.spec)===null||r===void 0||(r=r.props)===null||r===void 0?void 0:r.nodeViews;var i=tableNodeTypes(e.schema).table.name;if(f&&n)n[i]=function(t,e){return new f(t,u,e)};return new ResizeState(-1,false)},apply:function(t,e){return e.apply(t)}},props:{attributes:function(t){var e=columnResizingPluginKey.getState(t);return e&&e.activeHandle>-1?{class:"resize-cursor"}:{}},handleDOMEvents:{mousemove:function(t,e){handleMouseMove(t,e,n,c)},mouseleave:function(t){handleMouseLeave(t)},mousedown:function(t,e){handleMouseDown(t,e,a,u)}},decorations:function(t){var e=columnResizingPluginKey.getState(t);if(e&&e.activeHandle>-1)return handleDecorations(t,e.activeHandle)},nodeViews:{}}});return v}
/**
* @public
*/var ResizeState=/** @class */function(){function t(t,e){this.activeHandle=t;this.dragging=e}t.prototype.apply=function(e){var r=this;var n=e.getMeta(columnResizingPluginKey);if(n&&n.setHandle!=null)return new t(n.setHandle,false);if(n&&n.setDragging!==void 0)return new t(r.activeHandle,n.setDragging);if(r.activeHandle>-1&&e.docChanged){var i=e.mapping.map(r.activeHandle,-1);if(!pointsAtCell(e.doc.resolve(i)))i=-1;return new t(i,r.dragging)}return r};return t}();function handleMouseMove(t,e,r,n){if(!t.editable)return;var i=columnResizingPluginKey.getState(t.state);if(!i)return;if(!i.dragging){var a=domCellAround(e.target);var o=-1;if(a){var u=a.getBoundingClientRect(),s=u.left,f=u.right;if(e.clientX-s<=r)o=edgeCell(t,e,"left",r);else if(f-e.clientX<=r)o=edgeCell(t,e,"right",r)}if(o!=i.activeHandle){if(!n&&o!==-1){var l=t.state.doc.resolve(o);var c=l.node(-1);var v=TableMap.get(c);var h=l.start(-1);if(v.colCount(l.pos-h)+l.nodeAfter.attrs.colspan-1==v.width-1)return}updateHandle(t,o)}}}function handleMouseLeave(t){if(!t.editable)return;var e=columnResizingPluginKey.getState(t.state);if(e&&e.activeHandle>-1&&!e.dragging)updateHandle(t,-1)}function handleMouseDown(t,e,r,n){var i;if(!t.editable)return false;var a=(i=t.dom.ownerDocument.defaultView)!==null&&i!==void 0?i:window;var o=columnResizingPluginKey.getState(t.state);if(!o||o.activeHandle==-1||o.dragging)return false;var u=t.state.doc.nodeAt(o.activeHandle);var s=currentColWidth(t,o.activeHandle,u.attrs);t.dispatch(t.state.tr.setMeta(columnResizingPluginKey,{setDragging:{startX:e.clientX,startWidth:s}}));function f(e){a.removeEventListener("mouseup",f);a.removeEventListener("mousemove",l);var n=columnResizingPluginKey.getState(t.state);if(n===null||n===void 0?void 0:n.dragging){updateColumnWidth(t,n.activeHandle,draggedWidth(n.dragging,e,r));t.dispatch(t.state.tr.setMeta(columnResizingPluginKey,{setDragging:null}))}}function l(e){if(!e.which)return f(e);var i=columnResizingPluginKey.getState(t.state);if(!i)return;if(i.dragging){var a=draggedWidth(i.dragging,e,r);displayColumnWidth(t,i.activeHandle,a,n)}}displayColumnWidth(t,o.activeHandle,s,n);a.addEventListener("mouseup",f);a.addEventListener("mousemove",l);e.preventDefault();return true}function currentColWidth(t,e,r){var n=r.colspan,i=r.colwidth;var a=i&&i[i.length-1];if(a)return a;var o=t.domAtPos(e);var u=o.node.childNodes[o.offset].offsetWidth,s=n;if(i){for(var f=0;f<n;f++)if(i[f]){u-=i[f];s--}}return u/s}function domCellAround(t){while(t&&t.nodeName!="TD"&&t.nodeName!="TH")t=t.classList&&t.classList.contains("ProseMirror")?null:t.parentNode;return t}function edgeCell(t,e,r,n){var i=r=="right"?-n:n;var a=t.posAtCoords({left:e.clientX+i,top:e.clientY});if(!a)return-1;var o=a.pos;var u=cellAround(t.state.doc.resolve(o));if(!u)return-1;if(r=="right")return u.pos;var s=TableMap.get(u.node(-1)),f=u.start(-1);var l=s.map.indexOf(u.pos-f);return l%s.width==0?-1:f+s.map[l-1]}function draggedWidth(t,e,r){var n=e.clientX-t.startX;return Math.max(r,t.startWidth+n)}function updateHandle(t,e){t.dispatch(t.state.tr.setMeta(columnResizingPluginKey,{setHandle:e}))}function updateColumnWidth(t,e,r){var n=t.state.doc.resolve(e);var i=n.node(-1),a=TableMap.get(i),o=n.start(-1);var u=a.colCount(n.pos-o)+n.nodeAfter.attrs.colspan-1;var s=t.state.tr;for(var f=0;f<a.height;f++){var l=f*a.width+u;if(f&&a.map[l]==a.map[l-a.width])continue;var c=a.map[l];var v=i.nodeAt(c).attrs;var h=v.colspan==1?0:u-a.colCount(c);if(v.colwidth&&v.colwidth[h]==r)continue;var d=v.colwidth?v.colwidth.slice():zeroes(v.colspan);d[h]=r;s.setNodeMarkup(o+c,null,__assign(__assign({},v),{colwidth:d}))}if(s.docChanged)t.dispatch(s)}function displayColumnWidth(t,e,r,n){var i=t.state.doc.resolve(e);var a=i.node(-1),o=i.start(-1);var u=TableMap.get(a).colCount(i.pos-o)+i.nodeAfter.attrs.colspan-1;var s=t.domAtPos(i.start(-1)).node;while(s&&s.nodeName!="TABLE")s=s.parentNode;if(!s)return;updateColumnsOnResize(a,s.firstChild,s,n,u,r)}function zeroes(t){return Array(t).fill(0)}function handleDecorations(t,e){var r=[];var n=t.doc.resolve(e);var i=n.node(-1);if(!i)return DecorationSet.empty;var a=TableMap.get(i);var o=n.start(-1);var u=a.colCount(n.pos-o)+n.nodeAfter.attrs.colspan-1;for(var s=0;s<a.height;s++){var f=u+s*a.width;if((u==a.width-1||a.map[f]!=a.map[f+1])&&(s==0||a.map[f]!=a.map[f-a.width])){var l;var c=a.map[f];var v=o+c+i.nodeAt(c).nodeSize-1;var h=document.createElement("div");h.className="column-resize-handle";if((l=columnResizingPluginKey.getState(t))===null||l===void 0?void 0:l.dragging)r.push(Decoration.node(o+c,o+c+i.nodeAt(c).nodeSize,{class:"column-resize-dragging"}));r.push(Decoration.widget(v,h))}}return DecorationSet.create(t.doc,r)}
//#endregion
//#region src/index.ts
/**
* Creates a [plugin](http://prosemirror.net/docs/ref/#state.Plugin)
* that, when added to an editor, enables cell-selection, handles
* cell-based copy/paste, and makes sure tables stay well-formed (each
* row has the same width, and cells don't overlap).
*
* You should probably put this plugin near the end of your array of
* plugins, since it handles mouse and arrow key events in tables
* rather broadly, and other plugins, like the gap cursor or the
* column-width dragging plugin, might want to get a turn first to
* perform more specific behavior.
*
* @public
*/function tableEditing(t){var e=t===void 0?{}:t,r=e.allowTableNodeSelection,n=r===void 0?false:r;return new Plugin({key:tableEditingKey,state:{init:function(){return null},apply:function(t,e){var r=t.getMeta(tableEditingKey);if(r!=null)return r==-1?null:r;if(e==null||!t.docChanged)return e;var n=t.mapping.mapResult(e),i=n.deleted,a=n.pos;return i?null:a}},props:{decorations:drawCellSelection,handleDOMEvents:{mousedown:handleMouseDown$1},createSelectionBetween:function(t){return tableEditingKey.getState(t.state)!=null?t.state.selection:null},handleTripleClick:handleTripleClick,handleKeyDown:handleKeyDown$1,handlePaste:handlePaste},appendTransaction:function(t,e,r){return normalizeSelection(r,fixTables(r,e),n)}})}
//#region src/utils/parseAlign.ts
/**
* Normalize unknown input into a supported table alignment
*
* @param value - A potential alignment value
* @returns A valid TableCellAlign value or null
*/function normalizeTableCellAlign(t){if(t==="left"||t==="right"||t==="center")return t;return null}
/**
* Parse table cell alignment from an HTML element
*
* Prefers inline style (${"`"}text-align${"`"}) and falls back to the legacy
* ${"`"}align${"`"} attribute.
*
* @param element - The table cell/header DOM element
* @returns A valid TableCellAlign value or null
*/function parseAlign(t){var e=(t.style.textAlign||"").trim().toLowerCase();var r=(t.getAttribute("align")||"").trim().toLowerCase();return normalizeTableCellAlign(e||r)}
/**
* Normalize alignment from a generic attrs object that may include an align field
*
* @param attributes - A node attrs-like object with an optional align field
* @returns A valid TableCellAlign value or null.
*/function normalizeTableCellAlignFromAttributes(t){return normalizeTableCellAlign(t===null||t===void 0?void 0:t.align)}
/**
* Create a reusable Tiptap attribute config for table alignment
*
* @returns A Tiptap Attribute definition that parses and renders table alignment
*/function createAlignAttribute(){return{default:null,parseHTML:function(t){return parseAlign(t)},renderHTML:function(t){var e=normalizeTableCellAlign(t.align);if(!isValidCSSStyleValue(e))return{};return{style:"text-align: ".concat(e)}}}}
//#endregion
//#region src/utils/parseColwidth.ts
/**
* reads the width of the `<col>` element matching a cell's column from the table's `<colgroup>`
*
* @param element - The table cell/header DOM element
* @returns - An array with the column width in pixels or null
*/function parseColgroupWidth(t){var e;var r=t.parentElement;var n=t.closest("table");if(!r||!n)return null;var i=Array.from(r.children).indexOf(t);var a=(e=n.querySelectorAll("colgroup > col")[i])===null||e===void 0?void 0:e.getAttribute("width");return a?[parseInt(a,10)]:null}
/**
* Parse the column width/s of a table cell/header from an HTML element.
* it prefers the `colwidth` attribute and if not-provided falls back to the `width` attribute
* of the matching `<col>` element in the table's `<colgroup>`.
*
* @param element - The table cell/header DOM element
* @returns - An array of column widths in pixels or null
*/function parseColwidth(t){var e=t.getAttribute("colwidth");if(e)return e.split(",").map((function(t){return parseInt(t,10)}));return parseColgroupWidth(t)}
//#endregion
//#region src/utils/fillEmptyCellContent.ts
var COLLAPSIBLE_WHITESPACE=/[ \t\r\n\f]+/g;
/** Whether a cell/header element has no child elements and only collapsible whitespace. */function isEmptyCellElement(t){var e;if(t.children.length>0)return false;return((e=t.textContent)!==null&&e!==void 0?e:"").replace(COLLAPSIBLE_WHITESPACE,"")===""}
/** Builds a cell/header's minimal `block+` content, derived from the node type. */function fillEmptyCellContent(t){var e=t.createAndFill();if(!e)throw new Error('[tiptap error]: "'.concat(t.name,'" has no default content to backfill.'));return e.content}
//#endregion
//#region src/utils/omitDefaultSpanAttribute.ts
function omitDefaultSpanAttribute(t,e,r){if(!(r in e))return;var n=e[r];if(n===1||n==="1"||n===null||n===void 0)delete t[r]}
//#endregion
//#region src/cell/table-cell.ts
/**
* This extension allows you to create table cells.
* @see https://www.tiptap.dev/api/nodes/table-cell
*/var TableCell=Node$1.create({name:"tableCell",addOptions:function(){return{HTMLAttributes:{}}},content:"block+",addAttributes:function(){return{colspan:{default:1},rowspan:{default:1},colwidth:{default:null,parseHTML:parseColwidth},align:createAlignAttribute()}},tableRole:"cell",isolating:true,parseHTML:function(){var t=this;return[{tag:"td",getAttrs:function(t){return isEmptyCellElement(t)?{}:false},getContent:function(e,r){return fillEmptyCellContent(r.nodes[t.name])}},{tag:"td"}]},renderHTML:function(t){var e=t.HTMLAttributes;var r=mergeAttributes(this.options.HTMLAttributes,e);omitDefaultSpanAttribute(r,e,"colspan");omitDefaultSpanAttribute(r,e,"rowspan");return["td",r,0]}});
//#endregion
//#region src/header/table-header.ts
/**
* This extension allows you to create table headers.
* @see https://www.tiptap.dev/api/nodes/table-header
*/var TableHeader=Node$1.create({name:"tableHeader",addOptions:function(){return{HTMLAttributes:{}}},content:"block+",addAttributes:function(){return{colspan:{default:1},rowspan:{default:1},colwidth:{default:null,parseHTML:parseColwidth},align:createAlignAttribute()}},tableRole:"header_cell",isolating:true,parseHTML:function(){var t=this;return[{tag:"th",getAttrs:function(t){return isEmptyCellElement(t)?{}:false},getContent:function(e,r){return fillEmptyCellContent(r.nodes[t.name])}},{tag:"th"}]},renderHTML:function(t){var e=t.HTMLAttributes;var r=mergeAttributes(this.options.HTMLAttributes,e);omitDefaultSpanAttribute(r,e,"colspan");omitDefaultSpanAttribute(r,e,"rowspan");return["th",r,0]}});
//#endregion
//#region src/row/table-row.ts
/**
* This extension allows you to create table rows.
* @see https://www.tiptap.dev/api/nodes/table-row
*/var TableRow=Node$1.create({name:"tableRow",addOptions:function(){return{HTMLAttributes:{}}},content:"(tableCell | tableHeader)*",tableRole:"row",parseHTML:function(){return[{tag:"tr"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["tr",mergeAttributes(this.options.HTMLAttributes,e),0]}});
//#endregion
//#region src/table/utilities/colStyle.ts
function getColStyleDeclaration(t,e){if(e)return["width","".concat(Math.max(e,t),"px")];return["min-width","".concat(t,"px")]}
//#endregion
//#region src/table/TableView.ts
function updateColumns(t,e,r,n,i,a){var o=0;var u=true;var s=e.firstChild;var f=t.firstChild;if(f!==null)for(var l=0,c=0;l<f.childCount;l+=1){var v=f.child(l).attrs,h=v.colspan,d=v.colwidth;for(var p=0;p<h;p+=1,c+=1){var g=i===c?a:d&&d[p];var m=g?"".concat(g,"px"):"";o+=g||n;if(!g)u=false;if(!s){var b=document.createElement("col");var w=getColStyleDeclaration(n,g),S=w[0],E=w[1];b.style.setProperty(S,E);e.appendChild(b)}else{if(s.style.width!==m){var T=getColStyleDeclaration(n,g),S=T[0],E=T[1];s.style.setProperty(S,E)}s=s.nextSibling}}}while(s){var y;var k=s.nextSibling;(y=s.parentNode)===null||y===void 0||y.removeChild(s);s=k}var R=t.attrs.style&&typeof t.attrs.style==="string"&&/\bwidth\s*:/i.test(t.attrs.style);if(u&&!R){r.style.width="".concat(o,"px");r.style.minWidth=""}else{r.style.width="";r.style.minWidth="".concat(o,"px")}}var TableView=/** @class */function(){function t(t,e,r,n){if(n===void 0){n={}}this.node=t;this.cellMinWidth=e;this.dom=document.createElement("div");this.dom.className="tableWrapper";this.table=this.dom.appendChild(document.createElement("table"));for(var i=0,a=Object.entries(n);i<a.length;i++){var o=a[i],u=o[0],s=o[1];if(s!==void 0&&s!==null){if(u==="style")this.table.style.cssText=String(s);else this.table.setAttribute(u,String(s))}}if(t.attrs.style)this.table.style.cssText=t.attrs.style;this.colgroup=this.table.appendChild(document.createElement("colgroup"));updateColumns(t,this.colgroup,this.table,e);this.contentDOM=this.table.appendChild(document.createElement("tbody"))}t.prototype.update=function(t){if(!t.sameMarkup(this.node))return false;this.node=t;updateColumns(t,this.colgroup,this.table,this.cellMinWidth);return true};t.prototype.ignoreMutation=function(t){var e=t.target;var r=this.dom.contains(e);var n=this.contentDOM.contains(e);if(r&&!n){if(t.type==="attributes"||t.type==="childList"||t.type==="characterData")return true}return false};return t}();
//#endregion
//#region src/table/utilities/createColGroup.ts
function createColGroup(t,e,r,n){var i=0;var a=true;var o=[];var u=t.firstChild;if(!u)return{};for(var s=0,f=0;s<u.childCount;s+=1){var l=u.child(s).attrs,c=l.colspan,v=l.colwidth;for(var h=0;h<c;h+=1,f+=1){var d=r===f?n:v&&v[h];i+=d||e;if(!d)a=false;var p=getColStyleDeclaration(e,d),g=p[0],m=p[1];o.push(["col",{style:"".concat(g,": ").concat(m)}])}}var b=a?"".concat(i,"px"):"";var w=a?"":"".concat(i,"px");return{colgroup:__spreadArray(["colgroup",{}],o,true),tableWidth:b,tableMinWidth:w}}
//#endregion
//#region src/table/utilities/createCell.ts
function createCell(t,e){return t.createAndFill()}
//#endregion
//#region src/table/utilities/getTableNodeTypes.ts
function getTableNodeTypes(t){if(t.cached.tableNodeTypes)return t.cached.tableNodeTypes;var e={};Object.keys(t.nodes).forEach((function(r){var n=t.nodes[r];if(n.spec.tableRole)e[n.spec.tableRole]=n}));t.cached.tableNodeTypes=e;return e}
//#endregion
//#region src/table/utilities/createTable.ts
function createTable(t,e,r,n,i){var a=getTableNodeTypes(t);var o=[];var u=[];for(var s=0;s<r;s+=1){var f=createCell(a.cell);if(f)u.push(f);if(n){var l=createCell(a.header_cell);if(l)o.push(l)}}var c=[];for(var s=0;s<e;s+=1)c.push(a.row.createChecked(null,n&&s===0?o:u));return a.table.createChecked(null,c)}
//#endregion
//#region src/table/utilities/isCellSelection.ts
function isCellSelection(t){return t instanceof CellSelection}
//#endregion
//#region src/table/utilities/deleteTableWhenAllCellsSelected.ts
var deleteTableWhenAllCellsSelected=function(t){var e=t.editor;var r=e.state.selection;if(!isCellSelection(r))return false;var n=0;var i=findParentNodeClosestToPos(r.ranges[0].$from,(function(t){return t.type.name==="table"}));i===null||i===void 0||i.node.descendants((function(t){if(t.type.name==="table")return false;if(["tableCell","tableHeader"].includes(t.type.name))n+=1}));if(!(n===r.ranges.length))return false;e.commands.deleteTable();return true};
//#endregion
//#region src/table/utilities/keepCursorInTable.ts
function keepCursorInTable(t,e){var r=t.mapping.map(e);var n=findParentNodeClosestToPos(t.selection.$from,(function(t){return t.type.name==="table"}));if((n===null||n===void 0?void 0:n.pos)===r)return;var i=t.doc.nodeAt(r);if(!i)return;var a=r+i.nodeSize-1;t.setSelection(TextSelection.near(t.doc.resolve(a),-1))}
/**
* Walk a single table-row line and escape any `|` characters that appear
* inside backtick code spans so marked's cell splitter ignores them.
* Backslash escape sequences outside code spans are passed through untouched.
* If a backtick run has no matching closer on the same line it is emitted
* as-is — no over-escaping for malformed input.
*/function escapeTableCellPipes(t){var e="";var r=0;while(r<t.length){if(t[r]==="\\"&&r+1<t.length){e+=t[r]+t[r+1];r+=2;continue}if(t[r]!=="`"){e+=t[r++];continue}var n=0;while(r+n<t.length&&t[r+n]==="`")n+=1;var i=r+n;var a=false;while(i<t.length){if(t[i]!=="`"){i+=1;continue}var o=0;while(i+o<t.length&&t[i+o]==="`")o+=1;if(o===n){var u=t.slice(r+n,i);e+=t.slice(r,r+n)+u.replace(/\\\||\|/g,(function(t){return t==="|"?"\\|":t}))+t.slice(i,i+n);r=i+n;a=true;break}i+=o}if(!a){e+=t.slice(r,r+n);r+=n}}return e}
/**
* Escape pipe characters inside backtick code spans on table-row lines.
* marked's `splitCells` only recognises backslash-escaped pipes (`\|`) and
* splits on every other `|`, so \`a || b\` in a table cell would be treated
* as multiple column delimiters. Escaping them here lets `splitCells` skip
* them; it already converts `\|` → `|` after splitting, so the cell content
* is restored correctly.
*/function preprocessTablePipes(t){return t.split("\n").map((function(t){if(!t.includes("|")||!t.includes("`"))return t;return escapeTableCellPipes(t)})).join("\n")}function collapseWhitespace(t){return(t||"").replaceAll(""," ").replace(/\s+/g," ").trim()}function replaceCellLineSeparator(t,e){if(!e)return t;return t.split(e).join("\n")}function escapePipesInCellText(t){return t.replace(/\\.|\|/g,(function(t){return t==="|"?"\\|":t}))}function renderTableToMarkdown(t,e,r){if(r===void 0){r={}}if(!t||!t.content||t.content.length===0)return"";var n=[];t.content.forEach((function(t){var i=[];if(t.content)t.content.forEach((function(t){var n="";if(t.content&&Array.isArray(t.content)&&t.content.length>1)n=t.content.map((function(t){return replaceCellLineSeparator(e.renderChildren(t),r.cellLineSeparator)})).join("\n");else n=replaceCellLineSeparator(t.content?e.renderChildren(t.content):"",r.cellLineSeparator);var a=escapePipesInCellText(collapseWhitespace(n.replace(/[ \t]*\r?\n[ \t]*/g,"<br>")));var o=t.type==="tableHeader";var u=normalizeTableCellAlignFromAttributes(t.attrs);i.push({text:a,isHeader:o,align:u})}));n.push(i)}));var i=n.reduce((function(t,e){return Math.max(t,e.length)}),0);if(i===0)return"";var a=Array.from({length:i}).fill(0);n.forEach((function(t){for(var e=0;e<i;e+=1){var r;var n=(((r=t[e])===null||r===void 0?void 0:r.text)||"").length;if(n>a[e])a[e]=n;if(a[e]<3)a[e]=3}}));var o=function(t,e){return t+" ".repeat(Math.max(0,e-t.length))};var u=n[0];var s=u.some((function(t){return t.isHeader}));var f=Array.from({length:i}).fill(null);n.forEach((function(t){for(var e=0;e<i;e+=1){var r;if(!f[e]&&((r=t[e])===null||r===void 0?void 0:r.align))f[e]=t[e].align}}));var l="\n";var c=Array.from({length:i}).map((function(t,e){return s?u[e]&&u[e].text||"":""}));l+="| ".concat(c.map((function(t,e){return o(t,a[e])})).join(" | ")," |\n");l+="| ".concat(a.map((function(t,e){var r=Math.max(3,t);var n=f[e];if(n==="left")return":".concat("-".repeat(r));if(n==="right")return"".concat("-".repeat(r),":");if(n==="center")return":".concat("-".repeat(r),":");return"-".repeat(r)})).join(" | ")," |\n");(s?n.slice(1):n).forEach((function(t){l+="| ".concat(Array.from({length:i}).fill(0).map((function(e,r){return o(t[r]&&t[r].text||"",a[r])})).join(" | ")," |\n")}));return l}
//#endregion
//#region src/table/utilities/preserveCellSelectionOnContextMenu.ts
var preserveCellSelectionOnContextMenuPluginKey=new PluginKey("preserveCellSelectionOnContextMenu");function resolveClickPos(t,e){var r=t.posAtCoords({left:e.clientX,top:e.clientY});if(r)return r.pos;if(!(e.target instanceof Node))return null;try{return t.posAtDOM(e.target,0)}catch(t){return null}}function isPosInsideCellSelection(t,e){var r=false;t.forEachCell((function(t,n){if(e>=n&&e<n+t.nodeSize)r=true}));return r}function preserveCellSelectionOnContextMenu(){return new Plugin({key:preserveCellSelectionOnContextMenuPluginKey,props:{handleDOMEvents:{mousedown:function(t,e){if(e.button!==2)return false;var r=t.state.selection;if(!isCellSelection(r)||r.ranges.length<2)return false;var n=resolveClickPos(t,e);if(n==null||!isPosInsideCellSelection(r,n))return false;e.preventDefault();return true}}}})}
//#endregion
//#region src/table/table.ts
/**
* This extension allows you to create tables.
* @see https://www.tiptap.dev/api/nodes/table
*/var Table=Node$1.create({name:"table",addOptions:function(){return{HTMLAttributes:{},resizable:false,renderWrapper:false,handleWidth:5,cellMinWidth:25,View:TableView,lastColumnResizable:true,allowTableNodeSelection:false}},content:"tableRow+",tableRole:"table",isolating:true,group:"block",parseHTML:function(){return[{tag:"table"}]},renderHTML:function(t){var e=t.node,r=t.HTMLAttributes;var n=createColGroup(e,this.options.cellMinWidth),i=n.colgroup,a=n.tableWidth,o=n.tableMinWidth;var u=r.style;function s(){if(u)return u;return a?"width: ".concat(a):"min-width: ".concat(o)}var f=["table",mergeAttributes(this.options.HTMLAttributes,r,{style:s()}),i,["tbody",0]];return this.options.renderWrapper?["div",{class:"tableWrapper"},f]:f},parseMarkdown:function(t,e){var r=[];var n=Array.isArray(t.align)?t.align:[];if(t.header){var i=[];t.header.forEach((function(t,r){var a;var o=normalizeTableCellAlign((a=n[r])!==null&&a!==void 0?a:t.align);var u=o?{align:o}:{};i.push(e.createNode("tableHeader",u,[{type:"paragraph",content:e.parseInline(t.tokens)}]))}));r.push(e.createNode("tableRow",{},i))}if(t.rows)t.rows.forEach((function(t){var i=[];t.forEach((function(t,r){var a;var o=normalizeTableCellAlign((a=n[r])!==null&&a!==void 0?a:t.align);var u=o?{align:o}:{};i.push(e.createNode("tableCell",u,[{type:"paragraph",content:e.parseInline(t.tokens)}]))}));r.push(e.createNode("tableRow",{},i))}));return e.createNode("table",void 0,r)},renderMarkdown:function(t,e){return renderTableToMarkdown(t,e)},markdownTokenizer:{name:"table",level:"block",start:function(t){var e=t.split("\n");if(e.length<2)return-1;var r=e[1];if(!/^[ \t|:]*-[ \t|:-]*$/.test(r)||!r.includes("|"))return-1;return e[0].includes("|")?0:-1},tokenize:function(t,e,r){var n=t.indexOf("\n\n");var i=n>=0?t.slice(0,n):t;var a=i.split("\n");if(a.length<2)return void 0;var o=a[1];if(!/^[ \t|:]*-[ \t|:-]*$/.test(o)||!o.includes("|"))return void 0;var u=preprocessTablePipes(i);if(u===i)return void 0;var s=r.blockTokens(u)[0];if((s===null||s===void 0?void 0:s.type)!=="table"||!s.raw)return void 0;var f=s.raw.split("\n").length;var l=t.split("\n").slice(0,f).join("\n");return __assign(__assign({},s),{raw:l})}},addCommands:function(){return{insertTable:function(t){var e=t===void 0?{}:t,r=e.rows,n=r===void 0?3:r,i=e.cols,a=i===void 0?3:i,o=e.withHeaderRow,u=o===void 0?true:o;return function(t){var e=t.tr,r=t.dispatch,i=t.editor;var o=createTable(i.schema,n,a,u);if(r){var s=e.selection.from+1;e.replaceSelectionWith(o).scrollIntoView().setSelection(TextSelection.near(e.doc.resolve(s)))}return true}},addColumnBefore:function(){return function(t){var e=t.state,r=t.dispatch;return addColumnBefore(e,r)}},addColumnAfter:function(){return function(t){var e=t.state,r=t.dispatch;return addColumnAfter(e,r)}},deleteColumn:function(){return function(t){var e=t.state,r=t.dispatch;var n=findParentNodeClosestToPos(e.selection.$from,(function(t){return t.type.name==="table"}));return deleteColumn(e,r&&function(t){if(n)keepCursorInTable(t,n.pos);r(t)})}},addRowBefore:function(){return function(t){var e=t.state,r=t.dispatch;return addRowBefore(e,r)}},addRowAfter:function(){return function(t){var e=t.state,r=t.dispatch;return addRowAfter(e,r)}},deleteRow:function(){return function(t){var e=t.state,r=t.dispatch;var n=findParentNodeClosestToPos(e.selection.$from,(function(t){return t.type.name==="table"}));return deleteRow(e,r&&function(t){if(n)keepCursorInTable(t,n.pos);r(t)})}},deleteTable:function(){return function(t){var e=t.state,r=t.dispatch;return deleteTable(e,r)}},mergeCells:function(){return function(t){var e=t.state,r=t.dispatch;return mergeCells(e,r)}},splitCell:function(){return function(t){var e=t.state,r=t.dispatch;return splitCell(e,r)}},toggleHeaderColumn:function(){return function(t){var e=t.state,r=t.dispatch;return toggleHeader("column")(e,r)}},toggleHeaderRow:function(){return function(t){var e=t.state,r=t.dispatch;return toggleHeader("row")(e,r)}},toggleHeaderCell:function(){return function(t){var e=t.state,r=t.dispatch;return toggleHeaderCell(e,r)}},mergeOrSplit:function(){return function(t){var e=t.state,r=t.dispatch;if(mergeCells(e,r))return true;return splitCell(e,r)}},setCellAttribute:function(t,e){return function(r){var n=r.state,i=r.dispatch;return setCellAttr(t,e)(n,i)}},goToNextCell:function(){return function(t){var e=t.state,r=t.dispatch;return goToNextCell(1)(e,r)}},goToPreviousCell:function(){return function(t){var e=t.state,r=t.dispatch;return goToNextCell(-1)(e,r)}},fixTables:function(){return function(t){var e=t.state,r=t.dispatch;if(r)fixTables(e);return true}},setCellSelection:function(t){return function(e){var r=e.tr,n=e.dispatch;if(n){var i=CellSelection.create(r.doc,t.anchorCell,t.headCell);r.setSelection(i)}return true}}}},addKeyboardShortcuts:function(){var t=this;return{Tab:function(){if(t.editor.commands.goToNextCell())return true;if(!t.editor.can().addRowAfter())return false;return t.editor.chain().addRowAfter().goToNextCell().run()},"Shift-Tab":function(){return t.editor.commands.goToPreviousCell()},Backspace:deleteTableWhenAllCellsSelected,"Mod-Backspace":deleteTableWhenAllCellsSelected,Delete:deleteTableWhenAllCellsSelected,"Mod-Delete":deleteTableWhenAllCellsSelected}},addProseMirrorPlugins:function(){return __spreadArray(__spreadArray([],this.options.resizable&&this.editor.isEditable?[columnResizing({handleWidth:this.options.handleWidth,cellMinWidth:this.options.cellMinWidth,defaultCellMinWidth:this.options.cellMinWidth,View:null,lastColumnResizable:this.options.lastColumnResizable})]:[],true),[tableEditing({allowTableNodeSelection:this.options.allowTableNodeSelection}),preserveCellSelectionOnContextMenu()],false)},addNodeView:function(){var t=this;var e=this.options.View;if(!e)return null;return function(r){var n=r.node,i=r.view,a=r.HTMLAttributes;var o=mergeAttributes(t.options.HTMLAttributes,a);return new e(n,t.options.cellMinWidth,i,o)}},extendNodeSchema:function(t){var e={name:t.name,options:t.options,storage:t.storage};return{tableRole:callOrReturn(getExtensionField(t,"tableRole",e))}}});
//#endregion
//#region src/kit/index.ts
/**
* The table kit is a collection of table editor extensions.
*
* It’s a good starting point for building your own table in Tiptap.
*/Extension.create({name:"tableKit",addExtensions:function(){var t=[];if(this.options.table!==false)t.push(Table.configure(this.options.table));if(this.options.tableCell!==false)t.push(TableCell.configure(this.options.tableCell));if(this.options.tableHeader!==false)t.push(TableHeader.configure(this.options.tableHeader));if(this.options.tableRow!==false)t.push(TableRow.configure(this.options.tableRow));return t}});
//#region src/text-align.ts
/**
* This extension allows you to align text.
* @see https://www.tiptap.dev/api/extensions/text-align
*/var TextAlign=Extension.create({name:"textAlign",addOptions:function(){return{types:[],alignments:["left","center","right","justify"],defaultAlignment:null}},addGlobalAttributes:function(){var t=this;return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:function(e){var r=e.style.textAlign;return t.options.alignments.includes(r)?r:t.options.defaultAlignment},renderHTML:function(e){if(!isValidCSSStyleValue(e.textAlign)||!t.options.alignments.includes(e.textAlign))return{};return{style:"text-align: ".concat(e.textAlign)}}}}}]},addCommands:function(){var t=this;return{setTextAlign:function(e){return function(r){var n=r.commands;if(!t.options.alignments.includes(e))return false;return t.options.types.map((function(t){return n.updateAttributes(t,{textAlign:e})})).some((function(t){return t}))}},unsetTextAlign:function(){return function(e){var r=e.commands;return t.options.types.map((function(t){return r.resetAttributes(t,"textAlign")})).some((function(t){return t}))}},toggleTextAlign:function(e){return function(r){var n=r.editor,i=r.commands;if(!t.options.alignments.includes(e))return false;if(n.isActive({textAlign:e}))return i.unsetTextAlign();return i.setTextAlign(e)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Shift-l":function(){return t.editor.commands.setTextAlign("left")},"Mod-Shift-e":function(){return t.editor.commands.setTextAlign("center")},"Mod-Shift-r":function(){return t.editor.commands.setTextAlign("right")},"Mod-Shift-j":function(){return t.editor.commands.setTextAlign("justify")}}}});
//#region src/text-style/index.ts
var MAX_FIND_CHILD_SPAN_DEPTH=20;
/**
* Returns all next child spans, either direct children or nested deeper
* but won't traverse deeper into child spans found, will only go MAX_FIND_CHILD_SPAN_DEPTH levels deep (default: 20)
*/var findChildSpans=function(t,e){if(e===void 0){e=0}var r=[];if(!t.children.length||e>MAX_FIND_CHILD_SPAN_DEPTH)return r;Array.from(t.children).forEach((function(t){if(t.tagName==="SPAN")r.push(t);else if(t.children.length)r.push.apply(r,findChildSpans(t,e+1))}));return r};var mergeNestedSpanStyles=function(t){if(!t.children.length)return;var e=findChildSpans(t);if(!e)return;e.forEach((function(t){var e;var r=t.getAttribute("style");var n=(e=t.parentElement)===null||e===void 0||(e=e.closest("span"))===null||e===void 0?void 0:e.getAttribute("style");t.setAttribute("style","".concat(n,";").concat(r))}))};
/**
* This extension allows you to create text styles. It is required by default
* for the `text-color` and `font-family` extensions.
* @see https://www.tiptap.dev/api/marks/text-style
*/var TextStyle=Mark.create({name:"textStyle",priority:101,addOptions:function(){return{HTMLAttributes:{},mergeNestedSpanStyles:true}},parseHTML:function(){var t=this;return[{tag:"span",consuming:false,getAttrs:function(e){if(!e.hasAttribute("style"))return false;if(t.options.mergeNestedSpanStyles)mergeNestedSpanStyles(e);return{}}}]},renderHTML:function(t){var e=t.HTMLAttributes;return["span",mergeAttributes(this.options.HTMLAttributes,e),0]},addCommands:function(){var t=this;return{toggleTextStyle:function(e){return function(r){var n=r.commands;return n.toggleMark(t.name,e)}},removeEmptyTextStyle:function(){return function(e){var r=e.tr;var n=r.selection;r.doc.nodesBetween(n.from,n.to,(function(e,n){if(!e.isInline)return true;if(!e.marks.filter((function(e){return e.type===t.type})).some((function(t){return Object.values(t.attrs).some((function(t){return!!t}))})))r.removeMark(n,n+e.nodeSize,t.type)}));return true}}}}});
//#endregion
//#region src/background-color/background-color.ts
/**
* This extension allows you to color your text.
* @see https://tiptap.dev/api/extensions/background-color
*/var BackgroundColor=Extension.create({name:"backgroundColor",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{backgroundColor:{default:null,parseHTML:function(t){var e;var r=(e=getStyleProperty(t,"background-color"))!==null&&e!==void 0?e:t.style.backgroundColor;return r===null||r===void 0?void 0:r.replace(/['"]+/g,"")},renderHTML:function(t){if(!isValidCSSStyleValue(t.backgroundColor))return{};return{style:"background-color: ".concat(t.backgroundColor)}}}}}]},addCommands:function(){return{setBackgroundColor:function(t){return function(e){var r=e.chain;return r().setMark("textStyle",{backgroundColor:t}).run()}},unsetBackgroundColor:function(){return function(t){var e=t.chain;return e().setMark("textStyle",{backgroundColor:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/color/color.ts
/**
* This extension allows you to color your text.
* @see https://tiptap.dev/api/extensions/color
*/var Color=Extension.create({name:"color",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{color:{default:null,parseHTML:function(t){var e;var r=(e=getStyleProperty(t,"color"))!==null&&e!==void 0?e:t.style.color;return r===null||r===void 0?void 0:r.replace(/['"]+/g,"")},renderHTML:function(t){if(!isValidCSSStyleValue(t.color))return{};return{style:"color: ".concat(t.color)}}}}}]},addCommands:function(){return{setColor:function(t){return function(e){var r=e.chain;return r().setMark("textStyle",{color:t}).run()}},unsetColor:function(){return function(t){var e=t.chain;return e().setMark("textStyle",{color:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/font-family/font-family.ts
/**
* This extension allows you to set a font family for text.
* @see https://www.tiptap.dev/api/extensions/font-family
*/var FontFamily=Extension.create({name:"fontFamily",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{fontFamily:{default:null,parseHTML:function(t){var e;return(e=getStyleProperty(t,"font-family"))!==null&&e!==void 0?e:t.style.fontFamily},renderHTML:function(t){if(!isValidCSSStyleValue(t.fontFamily))return{};return{style:"font-family: ".concat(t.fontFamily)}}}}}]},addCommands:function(){return{setFontFamily:function(t){return function(e){var r=e.chain;return r().setMark("textStyle",{fontFamily:t}).run()}},unsetFontFamily:function(){return function(t){var e=t.chain;return e().setMark("textStyle",{fontFamily:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/font-size/font-size.ts
/**
* This extension allows you to set a font size for text.
* @see https://www.tiptap.dev/api/extensions/font-size
*/var FontSize=Extension.create({name:"fontSize",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{fontSize:{default:null,parseHTML:function(t){var e;return(e=getStyleProperty(t,"font-size"))!==null&&e!==void 0?e:t.style.fontSize},renderHTML:function(t){if(!isValidCSSStyleValue(t.fontSize))return{};return{style:"font-size: ".concat(t.fontSize)}}}}}]},addCommands:function(){return{setFontSize:function(t){return function(e){var r=e.chain;return r().setMark("textStyle",{fontSize:t}).run()}},unsetFontSize:function(){return function(t){var e=t.chain;return e().setMark("textStyle",{fontSize:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/line-height/line-height.ts
/**
* This extension allows you to set the line-height for text.
* @see https://www.tiptap.dev/api/extensions/line-height
*/var LineHeight=Extension.create({name:"lineHeight",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{lineHeight:{default:null,parseHTML:function(t){var e;return(e=getStyleProperty(t,"line-height"))!==null&&e!==void 0?e:t.style.lineHeight},renderHTML:function(t){if(!isValidCSSStyleValue(t.lineHeight))return{};return{style:"line-height: ".concat(t.lineHeight)}}}}}]},addCommands:function(){return{setLineHeight:function(t){return function(e){var r=e.chain;return r().setMark("textStyle",{lineHeight:t}).run()}},unsetLineHeight:function(){return function(t){var e=t.chain;return e().setMark("textStyle",{lineHeight:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/text-style-kit/index.ts
/**
* The table kit is a collection of table editor extensions.
*
* It’s a good starting point for building your own table in Tiptap.
*/Extension.create({name:"textStyleKit",addExtensions:function(){var t=[];if(this.options.backgroundColor!==false)t.push(BackgroundColor.configure(this.options.backgroundColor));if(this.options.color!==false)t.push(Color.configure(this.options.color));if(this.options.fontFamily!==false)t.push(FontFamily.configure(this.options.fontFamily));if(this.options.fontSize!==false)t.push(FontSize.configure(this.options.fontSize));if(this.options.lineHeight!==false)t.push(LineHeight.configure(this.options.lineHeight));if(this.options.textStyle!==false)t.push(TextStyle.configure(this.options.textStyle));return t}});
/**
Create a plugin that, when added to a ProseMirror instance,
causes a decoration to show up at the drop position when something
is dragged over the editor.

Nodes may add a `disableDropCursor` property to their spec to
control the showing of a drop cursor inside them. This may be a
boolean or a function, which will be called with a view and a
position, and should return a boolean.
*/function dropCursor(t){if(t===void 0){t={}}return new Plugin({view:function(e){return new DropCursorView(e,t)}})}var DropCursorView=/** @class */function(){function t(t,e){var r=this;var n;this.editorView=t;this.cursorPos=null;this.element=null;this.timeout=-1;this.lastDragEvent=null;this.width=(n=e.width)!==null&&n!==void 0?n:1;this.color=e.color===false?undefined:e.color||"black";this.class=e.class;this.handlers=["dragover","dragend","drop","dragleave"].map((function(e){var n=function(t){r[e](t)};t.dom.addEventListener(e,n);return{name:e,handler:n}}))}t.prototype.destroy=function(){var t=this;this.setCursor(null);this.handlers.forEach((function(e){var r=e.name,n=e.handler;return t.editorView.dom.removeEventListener(r,n)}))};t.prototype.update=function(t,e){if(this.cursorPos!=null&&e.doc!=t.state.doc){
// if we currently have an on-going drag event
// we need to update the cursor position again and update the overlay
if(this.lastDragEvent){var r=this.computeTarget(this.lastDragEvent);if(r==this.cursorPos)this.updateOverlay();else this.setCursor(r)}else{this.updateOverlay()}}};t.prototype.setCursor=function(t){if(t==this.cursorPos)return;this.cursorPos=t;if(t==null){this.element.parentNode.removeChild(this.element);this.element=null}else{this.updateOverlay()}};t.prototype.updateOverlay=function(){var t=this.editorView.state.doc.resolve(this.cursorPos);var e=!t.parent.inlineContent,r;var n=this.editorView.dom,i=n.getBoundingClientRect();var a=i.width/n.offsetWidth,o=i.height/n.offsetHeight;if(e){var u=t.nodeBefore,s=t.nodeAfter;if(u||s){var f=this.editorView.nodeDOM(this.cursorPos-(u?u.nodeSize:0));if(f){var l=f.getBoundingClientRect();var c=u?l.bottom:l.top;if(u&&s)c=(c+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2;var v=this.width/2*o;r={left:l.left,right:l.right,top:c-v,bottom:c+v}}}}if(!r){var h=this.editorView.coordsAtPos(this.cursorPos);var v=this.width/2*a;r={left:h.left-v,right:h.left+v,top:h.top,bottom:h.bottom}}var d=this.editorView.dom.offsetParent;if(!this.element){this.element=d.appendChild(document.createElement("div"));if(this.class)this.element.className=this.class;this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none;";if(this.color){this.element.style.backgroundColor=this.color}}this.element.classList.toggle("prosemirror-dropcursor-block",e);this.element.classList.toggle("prosemirror-dropcursor-inline",!e);var p,g;if(!d||d==document.body&&getComputedStyle(d).position=="static"){p=-pageXOffset;g=-pageYOffset}else{var m=d.getBoundingClientRect();var b=m.width/d.offsetWidth,w=m.height/d.offsetHeight;p=m.left-d.scrollLeft*b;g=m.top-d.scrollTop*w}this.element.style.left=(r.left-p)/a+"px";this.element.style.top=(r.top-g)/o+"px";this.element.style.width=(r.right-r.left)/a+"px";this.element.style.height=(r.bottom-r.top)/o+"px"};t.prototype.scheduleRemoval=function(t){var e=this;clearTimeout(this.timeout);this.timeout=setTimeout((function(){return e.setCursor(null)}),t)};t.prototype.computeTarget=function(t){var e=this.editorView.posAtCoords({left:t.clientX,top:t.clientY});var r=e&&e.inside>=0&&this.editorView.state.doc.nodeAt(e.inside);var n=r&&r.type.spec.disableDropCursor;var i=typeof n=="function"?n(this.editorView,e,t):n;if(!e||i)return null;var a=e.pos;if(this.editorView.dragging&&this.editorView.dragging.slice){var o=dropPoint(this.editorView.state.doc,a,this.editorView.dragging.slice);if(o!=null)a=o}return a};t.prototype.dragover=function(t){if(!this.editorView.editable)return;this.lastDragEvent=t;var e=this.computeTarget(t);if(e!=null){this.setCursor(e);this.scheduleRemoval(5e3)}};t.prototype.dragend=function(){this.scheduleRemoval(20)};t.prototype.drop=function(){this.scheduleRemoval(20)};t.prototype.dragleave=function(t){if(!this.editorView.dom.contains(t.relatedTarget))this.setCursor(null)};return t}();
/**
Gap cursor selections are represented using this class. Its
`$anchor` and `$head` properties both point at the cursor position.
*/var GapCursor=/** @class */function(t){__extends(e,t);
/**
    Create a gap cursor.
    */function e(e){return t.call(this,e,e)||this}e.prototype.map=function(t,r){var n=t.resolve(r.map(this.head));return e.valid(n)?new e(n):Selection.near(n)};e.prototype.content=function(){return Slice.empty};e.prototype.eq=function(t){return t instanceof e&&t.head==this.head};e.prototype.toJSON=function(){return{type:"gapcursor",pos:this.head}};
/**
    @internal
    */e.fromJSON=function(t,r){if(typeof r.pos!="number")throw new RangeError("Invalid input for GapCursor.fromJSON");return new e(t.resolve(r.pos))};
/**
    @internal
    */e.prototype.getBookmark=function(){return new GapBookmark(this.anchor)};
/**
    @internal
    */e.valid=function(t){var e=t.parent;if(e.inlineContent||!closedBefore(t)||!closedAfter(t))return false;var r=e.type.spec.allowGapCursor;if(r!=null)return r;var n=e.contentMatchAt(t.index()).defaultType;return n&&n.isTextblock};
/**
    @internal
    */e.findGapCursorFrom=function(t,r,n){if(n===void 0){n=false}t:for(;;){if(!n&&e.valid(t))return t;var i=t.pos,a=null;
// Scan up from this position
for(var o=t.depth;;o--){var u=t.node(o);if(r>0?t.indexAfter(o)<u.childCount:t.index(o)>0){a=u.child(r>0?t.indexAfter(o):t.index(o)-1);break}else if(o==0){return null}i+=r;var s=t.doc.resolve(i);if(e.valid(s))return s}
// And then down into the next node
for(;;){var f=r>0?a.firstChild:a.lastChild;if(!f){if(a.isAtom&&!a.isText&&!NodeSelection.isSelectable(a)){t=t.doc.resolve(i+a.nodeSize*r);n=false;continue t}break}a=f;i+=r;var s=t.doc.resolve(i);if(e.valid(s))return s}return null}};return e}(Selection);GapCursor.prototype.visible=false;GapCursor.findFrom=GapCursor.findGapCursorFrom;Selection.jsonID("gapcursor",GapCursor);var GapBookmark=/** @class */function(){function t(t){this.pos=t}t.prototype.map=function(e){return new t(e.map(this.pos))};t.prototype.resolve=function(t){var e=t.resolve(this.pos);return GapCursor.valid(e)?new GapCursor(e):Selection.near(e)};return t}();function needsGap(t){return t.isAtom||t.spec.isolating||t.spec.createGapCursor}function closedBefore(t){for(var e=t.depth;e>=0;e--){var r=t.index(e),n=t.node(e);
// At the start of this parent, look at next one
if(r==0){if(n.type.spec.isolating)return true;continue}
// See if the node before (or its first ancestor) is closed
for(var i=n.child(r-1);;i=i.lastChild){if(i.childCount==0&&!i.inlineContent||needsGap(i.type))return true;if(i.inlineContent)return false}}
// Hit start of document
return true}function closedAfter(t){for(var e=t.depth;e>=0;e--){var r=t.indexAfter(e),n=t.node(e);if(r==n.childCount){if(n.type.spec.isolating)return true;continue}for(var i=n.child(r);;i=i.firstChild){if(i.childCount==0&&!i.inlineContent||needsGap(i.type))return true;if(i.inlineContent)return false}}return true}
/**
Create a gap cursor plugin. When enabled, this will capture clicks
near and arrow-key-motion past places that don't have a normally
selectable position nearby, and create a gap cursor selection for
them. The cursor is drawn as an element with class
`ProseMirror-gapcursor`. You can either include
`style/gapcursor.css` from the package's directory or add your own
styles to make it visible.
*/function gapCursor(){return new Plugin({props:{decorations:drawGapCursor,createSelectionBetween:function(t,e,r){return e.pos==r.pos&&GapCursor.valid(r)?new GapCursor(r):null},handleClick:handleClick,handleKeyDown:handleKeyDown,handleDOMEvents:{beforeinput:beforeinput}}})}var handleKeyDown=keydownHandler({ArrowLeft:arrow("horiz",-1),ArrowRight:arrow("horiz",1),ArrowUp:arrow("vert",-1),ArrowDown:arrow("vert",1)});function arrow(t,e){var r=t=="vert"?e>0?"down":"up":e>0?"right":"left";return function(t,n,i){var a=t.selection;var o=e>0?a.$to:a.$from,u=a.empty;if(a instanceof TextSelection){if(!i.endOfTextblock(r)||o.depth==0)return false;u=false;o=t.doc.resolve(e>0?o.after():o.before())}var s=GapCursor.findGapCursorFrom(o,e,u);if(!s)return false;if(n)n(t.tr.setSelection(new GapCursor(s)));return true}}function handleClick(t,e,r){if(!t||!t.editable)return false;var n=t.state.doc.resolve(e);if(!GapCursor.valid(n))return false;var i=t.posAtCoords({left:r.clientX,top:r.clientY});if(i&&i.inside>-1&&NodeSelection.isSelectable(t.state.doc.nodeAt(i.inside)))return false;t.dispatch(t.state.tr.setSelection(new GapCursor(n)));return true}
// This is a hack that, when a composition starts while a gap cursor
// is active, quickly creates an inline context for the composition to
// happen in, to avoid it being aborted by the DOM selection being
// moved into a valid position.
function beforeinput(t,e){if(e.inputType!="insertCompositionText"||!(t.state.selection instanceof GapCursor))return false;var r=t.state.selection.$from;var n=r.parent.contentMatchAt(r.index()).findWrapping(t.state.schema.nodes.text);if(!n)return false;var i=Fragment.empty;for(var a=n.length-1;a>=0;a--)i=Fragment.from(n[a].createAndFill(null,i));var o=t.state.tr.replace(r.pos,r.pos,new Slice(i,0,0));o.setSelection(TextSelection.near(o.doc.resolve(r.pos+1)));t.dispatch(o);return false}function drawGapCursor(t){if(!(t.selection instanceof GapCursor))return null;var e=document.createElement("div");e.className="ProseMirror-gapcursor";return DecorationSet.create(t.doc,[Decoration.widget(t.selection.head,e,{key:"gapcursor"})])}
//#region src/character-count/character-count.ts
/**
* This extension allows you to count the characters and words of your document.
* @see https://tiptap.dev/api/extensions/character-count
*/Extension.create({name:"characterCount",addOptions:function(){return{limit:null,autoTrim:true,mode:"textSize",textCounter:function(t){return t.length},wordCounter:function(t){return t.split(" ").filter((function(t){return t!==""})).length}}},addStorage:function(){return{characters:function(){return 0},words:function(){return 0}}},onBeforeCreate:function(){var t=this;this.storage.characters=function(e){var r=(e===null||e===void 0?void 0:e.node)||t.editor.state.doc;if(((e===null||e===void 0?void 0:e.mode)||t.options.mode)==="textSize"){var n=r.textBetween(0,r.content.size,void 0," ");return t.options.textCounter(n)}return r.nodeSize};this.storage.words=function(e){var r=(e===null||e===void 0?void 0:e.node)||t.editor.state.doc;var n=r.textBetween(0,r.content.size," "," ");return t.options.wordCounter(n)}},addProseMirrorPlugins:function(){var t=this;var e=false;return[new Plugin({key:new PluginKey("characterCount"),appendTransaction:function(r,n,i){if(e)return;var a=t.options.limit;var o=t.options.autoTrim;if(a===null||a===void 0||a===0||o===false){e=true;return}var u=t.storage.characters({node:i.doc});if(u>a){var s=u-a;var f=0;var l=s;console.warn("[CharacterCount] Initial content exceeded limit of ".concat(a," characters. Content was automatically trimmed."));var c=i.tr.deleteRange(f,l);e=true;return c}e=true},filterTransaction:function(e,r){var n=t.options.limit;if(!e.docChanged||n===0||n===null||n===void 0)return true;var i=t.storage.characters({node:r.doc});var a=t.storage.characters({node:e.doc});if(a<=n)return true;if(i>n&&a>n&&a<=i)return true;if(i>n&&a>n&&a>i)return false;if(!e.getMeta("paste"))return false;var o=e.selection.$head.pos;var u=o-(a-n);var s=o;e.deleteRange(u,s);if(t.storage.characters({node:e.doc})>n)return false;return true}})]}});
//#endregion
//#region src/drop-cursor/drop-cursor.ts
/**
* This extension allows you to add a drop cursor to your editor.
* A drop cursor is a line that appears when you drag and drop content
* in-between nodes.
* @see https://tiptap.dev/api/extensions/dropcursor
*/var Dropcursor=Extension.create({name:"dropCursor",addOptions:function(){return{color:"currentColor",width:1,class:void 0}},addProseMirrorPlugins:function(){return[dropCursor(this.options)]}});
//#endregion
//#region src/focus/focus.ts
/**
* This extension allows you to add a class to the focused node.
* @see https://www.tiptap.dev/api/extensions/focus
*/Extension.create({name:"focus",addOptions:function(){return{className:"has-focus",mode:"all"}},addProseMirrorPlugins:function(){var t=this;return[new Plugin({key:new PluginKey("focus"),props:{decorations:function(e){var r=e.doc,n=e.selection;var i=t.editor,a=i.isEditable,o=i.isFocused;var u=n.anchor;var s=[];if(!a||!o)return DecorationSet.create(r,[]);var f=0;if(t.options.mode==="deepest")r.descendants((function(t,e){if(t.isText)return;if(!(u>=e&&u<=e+t.nodeSize-1))return false;f+=1}));var l=0;r.descendants((function(e,r){if(e.isText)return false;if(!(u>=r&&u<=r+e.nodeSize-1))return false;l+=1;if(t.options.mode==="deepest"&&f-l>0||t.options.mode==="shallowest"&&l>1)return t.options.mode==="deepest";s.push(Decoration.node(r,r+e.nodeSize,{class:t.options.className}))}));return DecorationSet.create(r,s)}}})]}});
//#endregion
//#region src/gap-cursor/gap-cursor.ts
/**
* This extension allows you to add a gap cursor to your editor.
* A gap cursor is a cursor that appears when you click on a place
* where no content is present, for example inbetween nodes.
* @see https://tiptap.dev/api/extensions/gapcursor
*/var Gapcursor=Extension.create({name:"gapCursor",addProseMirrorPlugins:function(){return[gapCursor()]},extendNodeSchema:function(t){var e;var r={name:t.name,options:t.options,storage:t.storage};return{allowGapCursor:(e=callOrReturn(getExtensionField(t,"allowGapCursor",r)))!==null&&e!==void 0?e:null}}});
//#endregion
//#region src/placeholder/constants.ts
/** The default data attribute label */var DEFAULT_DATA_ATTRIBUTE="placeholder";
/** The plugin key used to store and read the placeholder decoration set */var PLUGIN_KEY=new PluginKey("tiptap__placeholder");
//#endregion
//#region src/placeholder/utils/createPlaceholderDecoration.ts
/**
* Creates a ProseMirror node decoration that applies a placeholder
* CSS class and data attribute to an empty node.
* @param options.editor - The editor instance
* @param options.pos - The position of the node in the document
* @param options.node - The ProseMirror node
* @param options.isEmptyDoc - Whether the entire document is empty
* @param options.hasAnchor - Whether the selection anchor is within the node
* @param options.dataAttribute - The data attribute name (e.g. `data-placeholder`)
* @param options.classes - CSS classes for empty nodes and the empty editor
* @param options.placeholder - The placeholder text or a function that returns it
* @returns A ProseMirror node decoration with placeholder classes and data attribute
*/function createPlaceholderDecoration(t){var e;var r=t.editor,n=t.placeholder,i=t.dataAttribute,a=t.pos,o=t.node,u=t.isEmptyDoc,s=t.hasAnchor,f=t.classes,l=f.emptyNode,c=f.emptyEditor;var v=[l];if(u)v.push(c);return Decoration.node(a,a+o.nodeSize,(e={class:v.join(" ")},e[i]=typeof n==="function"?n({editor:r,node:o,pos:a,hasAnchor:s}):n,e))}
//#endregion
//#region src/placeholder/utils/buildPlaceholderDecorations.ts
function resolveEmptyNodeClass(t,e){return typeof t==="function"?t(e):t}
/**
* Scans a document range for empty textblocks that should receive placeholder
* decorations. Used by the slow path and incremental state updates.
*/function scanRangeForDecorations(t){var e=t.editor,r=t.options,n=t.dataAttribute,i=t.doc,a=t.selection,o=t.from,u=t.to;var s=a.anchor;var f=[];var l=e.isEmpty;i.nodesBetween(o,u,(function(t,i){var a=s>=i&&s<=i+t.nodeSize;var o=!t.isLeaf&&isNodeEmpty(t);if(!t.type.isTextblock)return r.includeChildren;if((a||!r.showOnlyCurrent)&&o)f.push(createPlaceholderDecoration({editor:e,isEmptyDoc:l,dataAttribute:n,hasAnchor:a,placeholder:r.placeholder,classes:{emptyEditor:r.emptyEditorClass,emptyNode:resolveEmptyNodeClass(r.emptyNodeClass,{editor:e,node:t,pos:i,hasAnchor:a})},node:t,pos:i}));return r.includeChildren}));return f}
/**
* Builds the placeholder decorations for the current document state.
* @param options.editor - The editor instance.
* @param options.options - The resolved placeholder options.
* @param options.dataAttribute - The prepared `data-*` attribute name.
* @param options.doc - The current document node.
* @param options.selection - The current selection.
* @returns A decoration set, or `null` when no placeholders should be shown.
*/function buildPlaceholderDecorations(t){var e=t.editor,r=t.options,n=t.dataAttribute,i=t.doc,a=t.selection;if(!(e.isEditable||!r.showOnlyWhenEditable))return null;var o=a.anchor;var u=[];var s=e.isEmpty;if(r.showOnlyCurrent&&!r.includeChildren){var f=i.resolve(o);var l=f.depth>0?f.node(1):f.nodeAfter;var c=f.depth>0?f.before(1):o;if(l&&l.type.isTextblock&&isNodeEmpty(l)){var v=o>=c&&o<=c+l.nodeSize;u.push(createPlaceholderDecoration({editor:e,isEmptyDoc:s,dataAttribute:n,hasAnchor:v,placeholder:r.placeholder,classes:{emptyEditor:r.emptyEditorClass,emptyNode:resolveEmptyNodeClass(r.emptyNodeClass,{editor:e,node:l,pos:c,hasAnchor:v})},node:l,pos:c}))}}else u.push.apply(u,scanRangeForDecorations({editor:e,options:r,dataAttribute:n,doc:i,selection:a,from:0,to:i.content.size}));return DecorationSet.create(i,u)}
//#endregion
//#region src/placeholder/utils/resolveTopLevelRange.ts
/**
* Resolves a document position to the `[from, to)` range of its containing
* top-level block node in absolute document positions.
*/function resolveTopLevelRange(t,e){var r=t.resolve(e);if(r.depth===0){var n;var i=(n=r.nodeAfter)!==null&&n!==void 0?n:r.nodeBefore;if(!i)return{from:e,to:e};var a=r.nodeAfter?e:e-i.nodeSize;return{from:a,to:a+i.nodeSize}}var o=r.before(1);return{from:o,to:o+r.node(1).nodeSize}}
/**
* Clamps a top-level block range from `resolveTopLevelRange` to the document
* content, giving the positions used by `Node#nodesBetween` and `Node#forEach`
* offsets.
*
* A top-level node at `Node#forEach` offset `n` already sits at document
* position `n`, so the range must not be shifted: a node decoration spans
* exactly `[n, n + nodeSize]` and has to stay inside the range to be replaced.
*/function toContentRelativeRange(t,e){return{from:Math.max(0,e.from),to:Math.min(t.content.size,e.to)}}
/**
* Returns the top-level block ranges that intersect a document change range.
* Input `from`/`to` are absolute positions (e.g. from `getChangedRanges`).
* Returned ranges are content-relative, matching `Node#forEach` offsets.
*/function getTopLevelBlocksInRange(t,e,r){var n=[];t.forEach((function(t,i){var a=i;var o=a+t.nodeSize;var u=a+1;var s=o+1;if(u<r&&s>e)n.push({from:a,to:o})}));return n}
/**
* Sorts ranges by start position and merges overlapping or adjacent ranges.
*/function mergeRanges(t){if(t.length===0)return[];var e=__spreadArray([],t,true).sort((function(t,e){return t.from-e.from}));var r=[__assign({},e[0])];for(var n=1;n<e.length;n+=1){var i=r[r.length-1];var a=e[n];if(a.from<=i.to)i.to=Math.max(i.to,a.to);else r.push(__assign({},a))}return r}
//#endregion
//#region src/placeholder/utils/placeholderStateField.ts
/**
* Expands a single changed range to the top-level blocks it touches.
* Also resolves blocks at range boundaries so split/merge edits update
* adjacent empty nodes (e.g. a new paragraph after Enter).
*/function collectBlocksForChange(t,e){var r=getTopLevelBlocksInRange(t,e.from,e.to);r.push(toContentRelativeRange(t,resolveTopLevelRange(t,e.from)));if(e.to>e.from)r.push(toContentRelativeRange(t,resolveTopLevelRange(t,Math.min(e.to,t.content.size+1)-1)));else if(e.from<t.content.size+1)r.push(toContentRelativeRange(t,resolveTopLevelRange(t,Math.min(e.from+1,t.content.size))));return r}
/**
* Collects content-relative top-level block ranges that need placeholder
* decorations recomputed after a transaction.
*/function collectRescanRanges(t,e,r){var n=[];if(t.docChanged){var i=getChangedRanges(t);for(var a=0,o=i;a<o.length;a++){var u=o[a];n.push.apply(n,collectBlocksForChange(r.doc,u.newRange))}}if(t.selectionSet){n.push(toContentRelativeRange(r.doc,resolveTopLevelRange(r.doc,t.mapping.map(e.selection.anchor))));n.push(toContentRelativeRange(r.doc,resolveTopLevelRange(r.doc,r.selection.anchor)))}return mergeRanges(n)}
/** Clamps a content-relative range to `[0, doc.content.size]`. */function clampRange(t,e,r){var n=Math.max(0,Math.min(t,r.content.size));return{from:n,to:Math.max(n,Math.min(e,r.content.size))}}
/**
* Removes and rebuilds placeholder decorations within the given ranges.
* Only drops decorations fully contained in a range so mapped decorations
* on neighbouring blocks (e.g. at a block boundary) are kept intact.
*/function updateDecorationsInRanges(t){var e=t.decorations,r=t.ranges,n=t.editor,i=t.options,a=t.dataAttribute,o=t.doc,u=t.selection;var s=e;var f=function(t){var e=clampRange(t.from,t.to,o),r=e.from,f=e.to;var l=s.find(r,f).filter((function(t){return t.from>=r&&t.to<=f}));if(l.length)s=s.remove(l);var c=scanRangeForDecorations({editor:n,options:i,dataAttribute:a,doc:o,selection:u,from:r,to:f});if(c.length)s=s.add(o,c)};for(var l=0,c=r;l<c.length;l++){var v=c[l];f(v)}return s}
/**
* Creates the incremental `StateField<DecorationSet>` used by the slow path
* (`showOnlyCurrent: false` or `includeChildren: true`).
*
* Decorations are mapped through each transaction and only recomputed for
* top-level blocks touched by document or selection changes.
* @param options.editor - The editor instance.
* @param options.options - The resolved placeholder options.
* @param options.dataAttribute - The prepared `data-*` attribute name.
* @returns A ProseMirror state field storing the placeholder decoration set.
*/function createPlaceholderStateField(t){var e=t.editor,r=t.options,n=t.dataAttribute;return{init:function(t,i){var a=buildPlaceholderDecorations({editor:e,options:r,dataAttribute:n,doc:i.doc,selection:i.selection});return a!==null&&a!==void 0?a:DecorationSet.empty},apply:function(t,i,a,o){if(!t.docChanged&&!t.selectionSet)return i;return updateDecorationsInRanges({decorations:i.map(t.mapping,t.doc),ranges:collectRescanRanges(t,a,o),editor:e,options:r,dataAttribute:n,doc:o.doc,selection:o.selection})}}}
//#endregion
//#region src/placeholder/utils/preparePlaceholderAttribute.ts
/**
* Prepares the placeholder attribute by ensuring it is properly formatted.
* @param attr - The placeholder attribute string.
* @returns The prepared placeholder attribute string.
*/function preparePlaceholderAttribute(t){return t.replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-]/g,"").replace(/^[0-9-]+/,"").replace(/^-+/,"").toLowerCase()}
//#endregion
//#region src/placeholder/plugins/PlaceholderPlugin.ts
/**
* Creates the ProseMirror plugin that renders placeholder decorations.
* @param options.editor - The editor instance.
* @param options.options - The resolved placeholder options.
* @returns The configured placeholder plugin.
*/function createPlaceholderPlugin(t){var e=t.editor,r=t.options;var n=r.dataAttribute?"data-".concat(preparePlaceholderAttribute(r.dataAttribute)):"data-".concat(DEFAULT_DATA_ATTRIBUTE);var i=r.showOnlyCurrent&&!r.includeChildren;return new Plugin(__assign(__assign({key:PLUGIN_KEY},i?{}:{state:createPlaceholderStateField({editor:e,options:r,dataAttribute:n})}),{props:{decorations:i?function(t){var i=t.doc,a=t.selection;return buildPlaceholderDecorations({editor:e,options:r,dataAttribute:n,doc:i,selection:a})}:function(t){var n;if(r.showOnlyWhenEditable&&!e.isEditable)return DecorationSet.empty;return(n=PLUGIN_KEY.getState(t))!==null&&n!==void 0?n:DecorationSet.empty}}}))}
//#endregion
//#region src/placeholder/placeholder.ts
/**
* This extension allows you to add a placeholder to your editor.
* A placeholder is a text that appears when the editor or a node is empty.
* @see https://www.tiptap.dev/api/extensions/placeholder
*/var Placeholder=Extension.create({name:"placeholder",addOptions:function(){return{emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",dataAttribute:DEFAULT_DATA_ATTRIBUTE,placeholder:"Write something …",showOnlyWhenEditable:true,showOnlyCurrent:true,includeChildren:false}},addProseMirrorPlugins:function(){return[createPlaceholderPlugin({editor:this.editor,options:this.options})]}});
//#endregion
//#region src/selection/selection.ts
/**
* Whether the native browser selection should be cleared on blur and restored on focus.
* Only applies to non-empty text selections in an editable editor.
*/function shouldSyncDomSelection(t,e){return!t.selection.empty&&!isNodeSelection(t.selection)&&e.isEditable}
/**
* Whether the selection decoration should be rendered to keep the selection
* visible while the editor is blurred (and not dragging).
*/function shouldPreserveSelection(t,e){return shouldSyncDomSelection(t,e)&&!e.isFocused&&!e.view.dragging}function clearDomSelection(){var t;(t=window.getSelection())===null||t===void 0||t.removeAllRanges()}
/**
* Sync the native selection from the editor state.
* @see https://prosemirror.net/docs/ref/#view.EditorView.focus
*/function restoreDomSelection(t){t.focus()}
/**
* This extension allows you to add a class to the selected text when the editor is blurred.
* It clears the native browser selection on blur (so `::selection` styles do not overlap the
* decoration) and restores it when the editor is focused again.
* @see https://www.tiptap.dev/api/extensions/selection
*/Extension.create({name:"selection",addOptions:function(){return{className:"selection"}},addProseMirrorPlugins:function(){var t=this,e=t.editor,r=t.options;return[new Plugin({key:new PluginKey("selection"),props:{decorations:function(t){if(!shouldPreserveSelection(t,e))return null;return DecorationSet.create(t.doc,[Decoration.inline(t.selection.from,t.selection.to,{class:r.className})])},handleDOMEvents:{blur:function(t){if(!shouldSyncDomSelection(t.state,e))return false;clearDomSelection();return false},focus:function(t){if(!shouldSyncDomSelection(t.state,e))return false;requestAnimationFrame((function(){if(!e.isDestroyed&&t.hasFocus())restoreDomSelection(t)}));return false}}}})]}});function nodeEqualsType(t){var e=t.types,r=t.node;return r&&Array.isArray(e)&&e.includes(r.type)||(r===null||r===void 0?void 0:r.type)===e}
/**
* This extension allows you to add an extra node at the end of the document.
* @see https://www.tiptap.dev/api/extensions/trailing-node
*/var TrailingNode=Extension.create({name:"trailingNode",addOptions:function(){return{node:void 0,notAfter:[]}},addProseMirrorPlugins:function(){var t=this;var e;var r=new PluginKey(this.name);var n=this.options.node||((e=this.editor.schema.topNodeType.contentMatch.defaultType)===null||e===void 0?void 0:e.name)||"paragraph";var i=Object.entries(this.editor.schema.nodes).map((function(t){var e=t[1];return e})).filter((function(e){return(t.options.notAfter||[]).concat(n).includes(e.name)}));return[new Plugin({key:r,appendTransaction:function(t,e,i){var a=i.doc,o=i.tr,u=i.schema;var s=r.getState(i);var f=a.content.size;var l=u.nodes[n];if(t.some((function(t){return t.getMeta("skipTrailingNode")})))return;if(!s)return;return o.insert(f,l.create())},state:{init:function(t,e){var r=e.tr.doc.lastChild;return!nodeEqualsType({node:r,types:i})},apply:function(t,e){if(!t.docChanged)return e;if(t.getMeta("__uniqueIDTransaction"))return e;var r=t.doc.lastChild;return!nodeEqualsType({node:r,types:i})}}})]}});
//#endregion
//#region src/undo-redo/undo-redo.ts
/**
* This extension allows you to undo and redo recent changes.
* @see https://www.tiptap.dev/api/extensions/undo-redo
*
* **Important**: If the `@tiptap/extension-collaboration` package is used, make sure to remove
* the `undo-redo` extension, as it is not compatible with the `collaboration` extension.
*
* `@tiptap/extension-collaboration` uses its own history implementation.
*/var UndoRedo=Extension.create({name:"undoRedo",addOptions:function(){return{depth:100,newGroupDelay:500}},addCommands:function(){return{undo:function(){return function(t){var e=t.state,r=t.dispatch;return undo(e,r)}},redo:function(){return function(t){var e=t.state,r=t.dispatch;return redo(e,r)}}}},addProseMirrorPlugins:function(){return[history(this.options)]},addKeyboardShortcuts:function(){var t=this;return{"Mod-z":function(){return t.editor.commands.undo()},"Shift-Mod-z":function(){return t.editor.commands.redo()},"Mod-y":function(){return t.editor.commands.redo()},"Mod-я":function(){return t.editor.commands.undo()},"Shift-Mod-я":function(){return t.editor.commands.redo()}}}});
//#region src/jsx-runtime.ts
var jsxElements=new WeakSet;var jsxFragments=new WeakSet;
/** Create a new JSX element from the given spec */function createJSXElement(t){var e=t;jsxElements.add(e);return e}
/** Check if a spec is a JSX element */function isJSXElement(t){return Array.isArray(t)&&jsxElements.has(t)}function flattenFragmentChildren(t){return t.flatMap((function(t){if(t==null)return[];if(Array.isArray(t)&&jsxFragments.has(t)&&!isJSXElement(t))return flattenFragmentChildren(t);return[t]}))}function render(t,e){if(t==="slot")return 0;if(t instanceof Function){var r=t(e);if(Array.isArray(r)&&!isJSXElement(r)&&!jsxFragments.has(r))return createJSXElement(r);return r}var n=e!==null&&e!==void 0?e:{},i=n.children,a=__rest(n,["children"]);if(t==="svg")throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");if(Array.isArray(i)){if(isJSXElement(i))return createJSXElement([t,a,i]);if(i.length===0)return createJSXElement([t,a]);var o=flattenFragmentChildren(i);if(o.length===0)return createJSXElement([t,a]);return createJSXElement(__spreadArray([t,a],o,true))}if(i!==void 0&&i!==null)return createJSXElement([t,a,i]);return createJSXElement([t,a])}var h=function(t,e){return render(t,e)};
//#region src/handleBackspace.ts
/**
* Restructure the blockquote boundary at the caret.
*
* Two cases are handled in a single backspace:
*
* 1. Caret at the start of a non-first child of a blockquote — lift the
*    current child out, splitting the blockquote around it.
* 2. Caret at the start of a top-level textblock whose previous sibling is
*    a blockquote with a textblock last child — merge the current
*    textblock's inline content into the blockquote's last textblock
*    instead of letting joinBackward pull the paragraph back inside.
*
* Returns true when the backspace was consumed.
*/var handleBackspace$1=function(t,e){var r;var n=t.state;var i=n.selection;if(!i.empty)return false;var a=i.$from;if(a.parentOffset!==0)return false;var o=a.depth-1;if(o<0)return false;var u=a.node(o);var s=a.index(o);if(s===0)return false;if(u.type===e)return t.commands.lift(e.name);var f=u.child(s-1);if(f.type!==e||!((r=f.lastChild)===null||r===void 0?void 0:r.isTextblock))return false;var l=a.before()-1-1;return t.commands.command((function(t){var e=t.tr,r=t.dispatch;if(!r)return true;var n=a.parent.content;var i=new Slice(n,0,0);e.replace(l,a.after(),i);e.setSelection(TextSelection.create(e.doc,l));e.scrollIntoView();r(e);return true}))};
//#endregion
//#region src/blockquote.tsx
/** @jsxImportSource @tiptap/core */
/**
* Matches a blockquote to a `>` as input.
*/var inputRegex$2=/^\s*>\s$/;
/**
* This extension allows you to create blockquotes.
* @see https://tiptap.dev/api/nodes/blockquote
*/var Blockquote=Node$1.create({name:"blockquote",addOptions:function(){return{HTMLAttributes:{}}},content:"block+",group:"block",defining:true,parseHTML:function(){return[{tag:"blockquote"}]},renderHTML:function(t){var e=t.HTMLAttributes;
return h("blockquote",__assign(__assign({},mergeAttributes(this.options.HTMLAttributes,e)),{children:h("slot",{})}))},parseMarkdown:function(t,e){var r;var n=(r=e.parseBlockChildren)!==null&&r!==void 0?r:e.parseChildren;return e.createNode("blockquote",void 0,n(t.tokens||[]))},renderMarkdown:function(t,e){if(!t.content)return"";var r=">";var n=[];t.content.forEach((function(t,i){var a,o;var u=((a=(o=e.renderChild)===null||o===void 0?void 0:o.call(e,t,i))!==null&&a!==void 0?a:e.renderChildren([t])).split("\n").map((function(t){if(t.trim()==="")return r;return"".concat(r," ").concat(t)}));n.push(u.join("\n"))}));return n.join("\n".concat(r,"\n"))},addCommands:function(){var t=this;return{setBlockquote:function(){return function(e){var r=e.commands;return r.wrapIn(t.name)}},toggleBlockquote:function(){return function(e){var r=e.commands;return r.toggleWrap(t.name)}},unsetBlockquote:function(){return function(e){var r=e.commands;return r.lift(t.name)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Shift-b":function(){return t.editor.commands.toggleBlockquote()},Backspace:function(){return handleBackspace$1(t.editor,t.type)}}},addInputRules:function(){return[wrappingInputRule({find:inputRegex$2,type:this.type})]}});
//#region src/bold.tsx
/** @jsxImportSource @tiptap/core */
/**
* Matches bold text via `**` as input.
*/var starInputRegex$1=/(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/;
/**
* Matches bold text via `**` while pasting.
*/var starPasteRegex$1=/(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g;
/**
* Matches bold text via `__` as input.
*/var underscoreInputRegex$1=/(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/;
/**
* Matches bold text via `__` while pasting.
*/var underscorePasteRegex$1=/(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
/**
* This extension allows you to mark text as bold.
* @see https://tiptap.dev/api/marks/bold
*/var Bold=Mark.create({name:"bold",addOptions:function(){return{HTMLAttributes:{}}},parseHTML:function(){var t=this;return[{tag:"strong"},{tag:"b",getAttrs:function(t){return t.style.fontWeight!=="normal"&&null}},{style:"font-weight=400",clearMark:function(e){return e.type.name===t.name}},{style:"font-weight",getAttrs:function(t){return/^(bold(er)?|[5-9]\d{2,})$/.test(t)&&null}}]},renderHTML:function(t){var e=t.HTMLAttributes;
return h("strong",__assign(__assign({},mergeAttributes(this.options.HTMLAttributes,e)),{children:h("slot",{})}))},markdownTokenName:"strong",parseMarkdown:function(t,e){return e.applyMark("bold",e.parseInline(t.tokens||[]))},markdownOptions:{htmlReopen:{open:"<strong>",close:"</strong>"}},renderMarkdown:function(t,e){return"**".concat(e.renderChildren(t),"**")},addCommands:function(){var t=this;return{setBold:function(){return function(e){var r=e.commands;return r.setMark(t.name)}},toggleBold:function(){return function(e){var r=e.commands;return r.toggleMark(t.name)}},unsetBold:function(){return function(e){var r=e.commands;return r.unsetMark(t.name)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-b":function(){return t.editor.commands.toggleBold()},"Mod-B":function(){return t.editor.commands.toggleBold()}}},addInputRules:function(){return[markInputRule({find:starInputRegex$1,type:this.type}),markInputRule({find:underscoreInputRegex$1,type:this.type})]},addPasteRules:function(){return[markPasteRule({find:starPasteRegex$1,type:this.type}),markPasteRule({find:underscorePasteRegex$1,type:this.type})]}});
/**
* A function-based finder for the inline code input rule.
* Used internally by the extension to ensure the preceding character
* is not consumed as part of the match, preventing it from being deleted.
*/var inputRegexMatch=function(t){var e=/`([^`]+)`(?!`)$/.exec(t);if(!e)return null;if(e.index>0&&t[e.index-1]==="`")return null;return{index:e.index,text:e[0],replaceWith:e[1]}};
/**
* A function-based finder for the inline code paste rule.
* Used internally by the extension to avoid consuming the preceding
* character as part of the match.
*/var pasteRegexMatch=function(t){var e=/`([^`]+)`(?!`)/g;var r=[];var n;while((n=e.exec(t))!==null){if(n.index>0&&t[n.index-1]==="`")continue;r.push({index:n.index,text:n[0],replaceWith:n[1]})}return r};function shortestUnusedBacktickRun(t){var e=new Set((t.match(/`+/g)||[]).map((function(t){return t.length})));var r=1;while(e.has(r))r+=1;return r}
/**
* This extension allows you to mark text as inline code.
* @see https://tiptap.dev/api/marks/code
*/var Code=Mark.create({name:"code",addOptions:function(){return{HTMLAttributes:{}}},excludes:"_",code:true,exitable:true,parseHTML:function(){return[{tag:"code"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["code",mergeAttributes(this.options.HTMLAttributes,e),0]},markdownTokenName:"codespan",parseMarkdown:function(t,e){return e.applyMark("code",[{type:"text",text:t.text||""}])},renderMarkdown:function(t,e,r){var n;if(!t.content)return"";var i=typeof(r===null||r===void 0||(n=r.meta)===null||n===void 0?void 0:n.markText)==="string"?r.meta.markText:"";var a="`".repeat(shortestUnusedBacktickRun(i));var o=i.startsWith("`")||i.endsWith("`")?" ":"";return"".concat(a).concat(o).concat(e.renderChildren(t.content)).concat(o).concat(a)},addCommands:function(){var t=this;return{setCode:function(){return function(e){var r=e.commands;return r.setMark(t.name)}},toggleCode:function(){return function(e){var r=e.commands;return r.toggleMark(t.name)}},unsetCode:function(){return function(e){var r=e.commands;return r.unsetMark(t.name)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-e":function(){return t.editor.commands.toggleCode()}}},addInputRules:function(){return[markInputRule({find:inputRegexMatch,type:this.type})]},addPasteRules:function(){return[markPasteRule({find:pasteRegexMatch,type:this.type})]}});
//#region src/code-block.ts
var DEFAULT_TAB_SIZE=4;
/**
* Matches a code block with backticks.
*/var backtickInputRegex=/^```([a-z]+)?[\s\n]$/;
/**
* Matches a code block with tildes.
*/var tildeInputRegex=/^~~~([a-z]+)?[\s\n]$/;
/**
* This extension allows you to create code blocks.
* @see https://tiptap.dev/api/nodes/code-block
*/var CodeBlock=Node$1.create({name:"codeBlock",addOptions:function(){return{languageClassPrefix:"language-",exitOnTripleEnter:true,exitOnArrowDown:true,exitOnArrowUp:true,defaultLanguage:null,enableTabIndentation:false,tabSize:DEFAULT_TAB_SIZE,HTMLAttributes:{}}},content:"text*",marks:"",group:"block",code:true,defining:true,addAttributes:function(){var t=this;return{language:{default:this.options.defaultLanguage,parseHTML:function(e){var r;var n=t.options.languageClassPrefix;if(!n)return null;var i=__spreadArray([],((r=e.firstElementChild)===null||r===void 0?void 0:r.classList)||[],true).filter((function(t){return t.startsWith(n)})).map((function(t){return t.replace(n,"")}))[0];if(!i)return null;return i},rendered:false}}},parseHTML:function(){return[{tag:"pre",preserveWhitespace:"full"}]},renderHTML:function(t){var e=t.node,r=t.HTMLAttributes;return["pre",mergeAttributes(this.options.HTMLAttributes,r),["code",{class:e.attrs.language?this.options.languageClassPrefix+e.attrs.language:null},0]]},markdownTokenName:"code",parseMarkdown:function(t,e){var r,n;if(((r=t.raw)===null||r===void 0?void 0:r.startsWith("```"))===false&&((n=t.raw)===null||n===void 0?void 0:n.startsWith("~~~"))===false&&t.codeBlockStyle!=="indented")return[];return e.createNode("codeBlock",{language:t.lang||null},t.text?[e.createTextNode(t.text)]:[])},renderMarkdown:function(t,e){var r;var n="";var i=((r=t.attrs)===null||r===void 0?void 0:r.language)||"";if(!t.content)n="```".concat(i,"\n\n```");else n=["```".concat(i),e.renderChildren(t.content),"```"].join("\n");return n},addCommands:function(){var t=this;return{setCodeBlock:function(e){return function(r){var n=r.commands;return n.setNode(t.name,e)}},toggleCodeBlock:function(e){return function(r){var n=r.commands;return n.toggleNode(t.name,"paragraph",e)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Alt-c":function(){return t.editor.commands.toggleCodeBlock()},Backspace:function(){var e=t.editor.state.selection,r=e.empty,n=e.$anchor;var i=n.pos===1;if(!r||n.parent.type.name!==t.name)return false;if(i||!n.parent.textContent.length)return t.editor.commands.clearNodes();return false},Tab:function(e){var r=e.editor;var n;if(!t.options.enableTabIndentation)return false;var i=(n=t.options.tabSize)!==null&&n!==void 0?n:DEFAULT_TAB_SIZE;var a=r.state;var o=a.selection;var u=o.$from,s=o.empty;if(u.parent.type!==t.type)return false;var f=" ".repeat(i);if(s)return r.commands.insertContent(f);return r.commands.command((function(t){var e=t.tr;var r=o.from,n=o.to;var i=a.doc.textBetween(r,n,"\n","\n").split("\n").map((function(t){return f+t})).join("\n");e.replaceWith(r,n,a.schema.text(i));return true}))},"Shift-Tab":function(e){var r=e.editor;var n;if(!t.options.enableTabIndentation)return false;var i=(n=t.options.tabSize)!==null&&n!==void 0?n:DEFAULT_TAB_SIZE;var a=r.state;var o=a.selection;var u=o.$from,s=o.empty;if(u.parent.type!==t.type)return false;if(s)return r.commands.command((function(t){var e=t.tr;var r;var n=u.pos;var o=u.start();var s=u.end();var f=a.doc.textBetween(o,s,"\n","\n").split("\n");var l=0;var c=0;var v=n-o;for(var h=0;h<f.length;h+=1){if(c+f[h].length>=v){l=h;break}c+=f[h].length+1}var d=((r=f[l].match(/^ */))===null||r===void 0?void 0:r[0])||"";var p=Math.min(d.length,i);if(p===0)return true;var g=o;for(var m=0;m<l;m+=1)g+=f[m].length+1;e.delete(g,g+p);if(n-g<=p)e.setSelection(TextSelection.create(e.doc,g));return true}));return r.commands.command((function(t){var e=t.tr;var r=o.from,n=o.to;var u=a.doc.textBetween(r,n,"\n","\n").split("\n").map((function(t){var e;var r=((e=t.match(/^ */))===null||e===void 0?void 0:e[0])||"";var n=Math.min(r.length,i);return t.slice(n)})).join("\n");e.replaceWith(r,n,a.schema.text(u));return true}))},Enter:function(e){var r=e.editor;if(!t.options.exitOnTripleEnter)return false;var n=r.state;var i=n.selection;var a=i.$from,o=i.empty;if(!o||a.parent.type!==t.type)return false;var u=a.parentOffset===a.parent.nodeSize-2;var s=a.parent.textContent.endsWith("\n\n");if(!u||!s)return false;return r.chain().command((function(t){var e=t.tr;e.delete(a.pos-2,a.pos);return true})).exitCode().run()},ArrowUp:function(e){var r=e.editor;if(!t.options.exitOnArrowUp)return false;var n=r.state;var i=n.selection;var a=i.$from,o=i.empty;if(!o||a.parent.type!==t.type)return false;if(a.parentOffset!==0)return false;var u=a.before();if(u>0)return false;return r.commands.insertDefaultBlock({pos:u})},ArrowDown:function(e){var r=e.editor;if(!t.options.exitOnArrowDown)return false;var n=r.state;var i=n.selection,a=n.doc;var o=i.$from,u=i.empty;if(!u||o.parent.type!==t.type)return false;if(!(o.parentOffset===o.parent.nodeSize-2))return false;var s=o.after();if(s===void 0)return false;if(a.nodeAt(s))return r.commands.command((function(t){var e=t.tr;e.setSelection(Selection.near(a.resolve(s)));return true}));return r.commands.exitCode()}}},addInputRules:function(){return[textblockTypeInputRule({find:backtickInputRegex,type:this.type,getAttributes:function(t){return{language:t[1]}}}),textblockTypeInputRule({find:tildeInputRegex,type:this.type,getAttributes:function(t){return{language:t[1]}}})]},addProseMirrorPlugins:function(){var t=this;return[new Plugin({key:new PluginKey("codeBlockVSCodeHandler"),props:{handlePaste:function(e,r){if(!r.clipboardData)return false;if(t.editor.isActive(t.type.name))return false;var n=r.clipboardData.getData("text/plain");var i=r.clipboardData.getData("vscode-editor-data");var a=i?JSON.parse(i):void 0;var o=a===null||a===void 0?void 0:a.mode;if(!n||!o)return false;var u=e.state,s=u.tr,f=u.schema;var l=f.text(n.replace(/\r\n?/g,"\n"));s.replaceSelectionWith(t.type.create({language:o},l));if(s.selection.$from.parent.type!==t.type)s.setSelection(TextSelection.near(s.doc.resolve(Math.max(0,s.selection.from-2))));s.setMeta("paste",true);e.dispatch(s);return true}}})]}});
//#region src/document.ts
/**
* The default document node which represents the top level node of the editor.
* @see https://tiptap.dev/api/nodes/document
*/var Document=Node$1.create({name:"doc",topNode:true,content:"block+",renderMarkdown:function(t,e){if(!t.content)return"";return e.renderChildren(t.content,"\n\n")}});
//#region src/hard-break.ts
/**
* This extension allows you to insert hard breaks.
* @see https://www.tiptap.dev/api/nodes/hard-break
*/var HardBreak=Node$1.create({name:"hardBreak",markdownTokenName:"br",addOptions:function(){return{keepMarks:true,HTMLAttributes:{}}},inline:true,group:"inline",selectable:false,linebreakReplacement:true,parseHTML:function(){return[{tag:"br"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["br",mergeAttributes(this.options.HTMLAttributes,e)]},renderText:function(){return"\n"},renderMarkdown:function(){return"  \n"},parseMarkdown:function(){return{type:"hardBreak"}},addCommands:function(){var t=this;return{setHardBreak:function(){return function(e){var r=e.commands,n=e.chain,i=e.state,a=e.editor;return r.first([function(){return r.exitCode()},function(){return r.command((function(){var e=i.selection,r=i.storedMarks;if(e.$from.parent.type.spec.isolating)return false;var o=t.options.keepMarks;var u=a.extensionManager.splittableMarks;var s=r||e.$to.parentOffset&&e.$from.marks();return n().insertContent({type:t.name}).command((function(t){var e=t.tr,r=t.dispatch;if(r&&s&&o){var n=s.filter((function(t){return u.includes(t.type.name)}));e.ensureMarks(n)}return true})).scrollIntoView().run()}))}])}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Enter":function(){return t.editor.commands.setHardBreak()},"Shift-Enter":function(){return t.editor.commands.setHardBreak()}}}});
//#region src/heading.ts
/**
* This extension allows you to create headings.
* @see https://www.tiptap.dev/api/nodes/heading
*/var Heading=Node$1.create({name:"heading",addOptions:function(){return{levels:[1,2,3,4,5,6],HTMLAttributes:{}}},content:"inline*",group:"block",defining:true,addAttributes:function(){return{level:{default:1,rendered:false}}},parseHTML:function(){return this.options.levels.map((function(t){return{tag:"h".concat(t),attrs:{level:t}}}))},renderHTML:function(t){var e=t.node,r=t.HTMLAttributes;return["h".concat(this.options.levels.includes(e.attrs.level)?e.attrs.level:this.options.levels[0]),mergeAttributes(this.options.HTMLAttributes,r),0]},parseMarkdown:function(t,e){var r=t.depth||1;if(!this.options.levels.includes(r))return e.createNode("paragraph",void 0,e.parseInline(t.tokens||[]));return e.createNode("heading",{level:r},e.parseInline(t.tokens||[]))},renderMarkdown:function(t,e){var r;var n=((r=t.attrs)===null||r===void 0?void 0:r.level)?parseInt(t.attrs.level,10):1;var i="#".repeat(n);if(!t.content)return"";return"".concat(i," ").concat(e.renderChildren(t.content))},addCommands:function(){var t=this;return{setHeading:function(e){return function(r){var n=r.commands;if(!t.options.levels.includes(e.level))return false;return n.setNode(t.name,e)}},toggleHeading:function(e){return function(r){var n=r.commands;if(!t.options.levels.includes(e.level))return false;return n.toggleNode(t.name,"paragraph",e)}}}},addKeyboardShortcuts:function(){var t=this;return this.options.levels.reduce((function(e,r){var n;return __assign(__assign({},e),(n={},n["Mod-Alt-".concat(r)]=function(){return t.editor.commands.toggleHeading({level:r})},n))}),{})},addInputRules:function(){var t=this;return this.options.levels.map((function(e){return textblockTypeInputRule({find:new RegExp("^(#{".concat(Math.min.apply(Math,t.options.levels),",").concat(e,"})\\s$")),type:t.type,getAttributes:{level:e}})}))}});
//#region src/horizontal-rule.ts
/**
* This extension allows you to insert horizontal rules.
* @see https://www.tiptap.dev/api/nodes/horizontal-rule
*/var HorizontalRule=Node$1.create({name:"horizontalRule",addOptions:function(){return{HTMLAttributes:{},nextNodeType:"paragraph"}},group:"block",parseHTML:function(){return[{tag:"hr"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["hr",mergeAttributes(this.options.HTMLAttributes,e)]},markdownTokenName:"hr",parseMarkdown:function(t,e){return e.createNode("horizontalRule")},renderMarkdown:function(){return"---"},addCommands:function(){var t=this;return{setHorizontalRule:function(){return function(e){var r=e.chain,n=e.state;if(!canInsertNode(n,n.schema.nodes[t.name]))return false;var i=n.selection;var a=i.$to;var o=r();if(isNodeSelection(i))o.insertContentAt(a.pos,{type:t.name});else o.insertContent({type:t.name});return o.command((function(e){var r=e.state,n=e.tr,i=e.dispatch;if(i){var a=n.selection.$to;var o=a.end();if(a.nodeAfter){if(a.nodeAfter.isTextblock)n.setSelection(TextSelection.create(n.doc,a.pos+1));else if(a.nodeAfter.isBlock)n.setSelection(NodeSelection.create(n.doc,a.pos));else n.setSelection(TextSelection.create(n.doc,a.pos))}else{var u=r.schema.nodes[t.options.nextNodeType]||a.parent.type.contentMatch.defaultType;var s=u===null||u===void 0?void 0:u.create();if(s){n.insert(o,s);n.setSelection(TextSelection.create(n.doc,o+1))}}n.scrollIntoView()}return true})).run()}}}},addInputRules:function(){return[nodeInputRule({find:/^(?:---|—-|___\s|\*\*\*\s)$/,type:this.type})]}});
//#region src/italic.ts
/**
* Matches an italic to a *italic* on input.
*/var starInputRegex=/(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/;
/**
* Matches an italic to a *italic* on paste.
*/var starPasteRegex=/(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g;
/**
* Matches an italic to a _italic_ on input.
*/var underscoreInputRegex=/(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/;
/**
* Matches an italic to a _italic_ on paste.
*/var underscorePasteRegex=/(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
/**
* This extension allows you to create italic text.
* @see https://www.tiptap.dev/api/marks/italic
*/var Italic=Mark.create({name:"italic",addOptions:function(){return{HTMLAttributes:{}}},parseHTML:function(){var t=this;return[{tag:"em"},{tag:"i",getAttrs:function(t){return t.style.fontStyle!=="normal"&&null}},{style:"font-style=normal",clearMark:function(e){return e.type.name===t.name}},{style:"font-style=italic"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["em",mergeAttributes(this.options.HTMLAttributes,e),0]},addCommands:function(){var t=this;return{setItalic:function(){return function(e){var r=e.commands;return r.setMark(t.name)}},toggleItalic:function(){return function(e){var r=e.commands;return r.toggleMark(t.name)}},unsetItalic:function(){return function(e){var r=e.commands;return r.unsetMark(t.name)}}}},markdownTokenName:"em",parseMarkdown:function(t,e){return e.applyMark("italic",e.parseInline(t.tokens||[]))},markdownOptions:{htmlReopen:{open:"<em>",close:"</em>"}},renderMarkdown:function(t,e){return"*".concat(e.renderChildren(t),"*")},addKeyboardShortcuts:function(){var t=this;return{"Mod-i":function(){return t.editor.commands.toggleItalic()},"Mod-I":function(){return t.editor.commands.toggleItalic()}}},addInputRules:function(){return[markInputRule({find:starInputRegex,type:this.type}),markInputRule({find:underscoreInputRegex,type:this.type})]},addPasteRules:function(){return[markPasteRule({find:starPasteRegex,type:this.type}),markPasteRule({find:underscorePasteRegex,type:this.type})]}});
// THIS FILE IS AUTOMATICALLY GENERATED DO NOT EDIT DIRECTLY
// See update-tlds.js for encoding/decoding format
// https://data.iana.org/TLD/tlds-alpha-by-domain.txt
var encodedTlds="aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos6kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12b0cam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2";
// Internationalized domain names containing non-ASCII
var encodedUtlds="ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2";
/**
 * Finite State Machine generation utilities
 */
/**
 * @template T
 * @typedef {{ [group: string]: T[] }} Collections
 */
/**
 * @typedef {{ [group: string]: true }} Flags
 */
// Keys in scanner Collections instances
var numeric="numeric";var ascii="ascii";var alpha="alpha";var asciinumeric="asciinumeric";var alphanumeric="alphanumeric";var domain="domain";var emoji="emoji";var scheme="scheme";var slashscheme="slashscheme";var whitespace="whitespace";
/**
 * @template T
 * @param {string} name
 * @param {Collections<T>} groups to register in
 * @returns {T[]} Current list of tokens in the given collection
 */function registerGroup(t,e){if(!(t in e)){e[t]=[]}return e[t]}
/**
 * @template T
 * @param {T} t token to add
 * @param {Collections<T>} groups
 * @param {Flags} flags
 */function addToGroups(t,e,r){if(e[numeric]){e[asciinumeric]=true;e[alphanumeric]=true}if(e[ascii]){e[asciinumeric]=true;e[alpha]=true}if(e[asciinumeric]){e[alphanumeric]=true}if(e[alpha]){e[alphanumeric]=true}if(e[alphanumeric]){e[domain]=true}if(e[emoji]){e[domain]=true}for(var n in e){var i=registerGroup(n,r);if(i.indexOf(t)<0){i.push(t)}}}
/**
 * @template T
 * @param {T} t token to check
 * @param {Collections<T>} groups
 * @returns {Flags} group flags that contain this token
 */function flagsForToken(t,e){var r={};for(var n in e){if(e[n].indexOf(t)>=0){r[n]=true}}return r}
/**
 * @template T
 * @typedef {null | T } Transition
 */
/**
 * Define a basic state machine state. j is the list of character transitions,
 * jr is the list of regex-match transitions, jd is the default state to
 * transition to t is the accepting token type, if any. If this is the terminal
 * state, then it does not emit a token.
 *
 * The template type T represents the type of the token this state accepts. This
 * should be a string (such as of the token exports in `text.js`) or a
 * MultiToken subclass (from `multi.js`)
 *
 * @template T
 * @param {T} [token] Token that this state emits
 */function State(t){if(t===void 0){t=null}
// this.n = null; // DEBUG: State name
/** @type {{ [input: string]: State<T> }} j */this.j={};// IMPLEMENTATION 1
// this.j = []; // IMPLEMENTATION 2
/** @type {[RegExp, State<T>][]} jr */this.jr=[];
/** @type {?State<T>} jd */this.jd=null;
/** @type {?T} t */this.t=t}
/**
 * Scanner token groups
 * @type Collections<string>
 */State.groups={};State.prototype={accepts:function(){return!!this.t},
/**
     * Follow an existing transition from the given input to the next state.
     * Does not mutate.
     * @param {string} input character or token type to transition on
     * @returns {?State<T>} the next state, if any
     */
go:function(t){var e=this;var r=e.j[t];if(r){return r}for(var n=0;n<e.jr.length;n++){var i=e.jr[n][0];var a=e.jr[n][1];// note: might be empty to prevent default jump
if(a&&i.test(t)){return a}}
// Nowhere left to jump! Return default, if any
return e.jd},
/**
     * Whether the state has a transition for the given input. Set the second
     * argument to true to only look for an exact match (and not a default or
     * regular-expression-based transition)
     * @param {string} input
     * @param {boolean} exactOnly
     */
has:function(t,e){if(e===void 0){e=false}return e?t in this.j:!!this.go(t)},
/**
     * Short for "transition all"; create a transition from the array of items
     * in the given list to the same final resulting state.
     * @param {string | string[]} inputs Group of inputs to transition on
     * @param {Transition<T> | State<T>} [next] Transition options
     * @param {Flags} [flags] Collections flags to add token to
     * @param {Collections<T>} [groups] Master list of token groups
     */
ta:function(t,e,r,n){for(var i=0;i<t.length;i++){this.tt(t[i],e,r,n)}},
/**
     * Short for "take regexp transition"; defines a transition for this state
     * when it encounters a token which matches the given regular expression
     * @param {RegExp} regexp Regular expression transition (populate first)
     * @param {T | State<T>} [next] Transition options
     * @param {Flags} [flags] Collections flags to add token to
     * @param {Collections<T>} [groups] Master list of token groups
     * @returns {State<T>} taken after the given input
     */
tr:function(t,e,r,n){n=n||State.groups;var i;if(e&&e.j){i=e}else{
// Token with maybe token groups
i=new State(e);if(r&&n){addToGroups(e,r,n)}}this.jr.push([t,i]);return i},
/**
     * Short for "take transitions", will take as many sequential transitions as
     * the length of the given input and returns the
     * resulting final state.
     * @param {string | string[]} input
     * @param {T | State<T>} [next] Transition options
     * @param {Flags} [flags] Collections flags to add token to
     * @param {Collections<T>} [groups] Master list of token groups
     * @returns {State<T>} taken after the given input
     */
ts:function(t,e,r,n){var i=this;var a=t.length;if(!a){return i}for(var o=0;o<a-1;o++){i=i.tt(t[o])}return i.tt(t[a-1],e,r,n)},
/**
     * Short for "take transition", this is a method for building/working with
     * state machines.
     *
     * If a state already exists for the given input, returns it.
     *
     * If a token is specified, that state will emit that token when reached by
     * the linkify engine.
     *
     * If no state exists, it will be initialized with some default transitions
     * that resemble existing default transitions.
     *
     * If a state is given for the second argument, that state will be
     * transitioned to on the given input regardless of what that input
     * previously did.
     *
     * Specify a token group flags to define groups that this token belongs to.
     * The token will be added to corresponding entires in the given groups
     * object.
     *
     * @param {string} input character, token type to transition on
     * @param {T | State<T>} [next] Transition options
     * @param {Flags} [flags] Collections flags to add token to
     * @param {Collections<T>} [groups] Master list of groups
     * @returns {State<T>} taken after the given input
     */
tt:function(t,e,r,n){n=n||State.groups;var i=this;
// Check if existing state given, just a basic transition
if(e&&e.j){i.j[t]=e;return e}var a=e;
// Take the transition with the usual default mechanisms and use that as
// a template for creating the next state
var o,u=i.go(t);if(u){o=new State;Object.assign(o.j,u.j);o.jr.push.apply(o.jr,u.jr);o.jd=u.jd;o.t=u.t}else{o=new State}if(a){
// Ensure newly token is in the same groups as the old token
if(n){if(o.t&&typeof o.t==="string"){var s=Object.assign(flagsForToken(o.t,n),r);addToGroups(a,s,n)}else if(r){addToGroups(a,r,n)}}o.t=a;// overwrite anything that was previously there
}i.j[t]=o;return o}};
// Helper functions to improve minification (not exported outside linkifyjs module)
/**
 * @template T
 * @param {State<T>} state
 * @param {string | string[]} input
 * @param {Flags} [flags]
 * @param {Collections<T>} [groups]
 */var ta=function(t,e,r,n,i){return t.ta(e,r,n,i)};
/**
 * @template T
 * @param {State<T>} state
 * @param {RegExp} regexp
 * @param {T | State<T>} [next]
 * @param {Flags} [flags]
 * @param {Collections<T>} [groups]
 */var tr=function(t,e,r,n,i){return t.tr(e,r,n,i)};
/**
 * @template T
 * @param {State<T>} state
 * @param {string | string[]} input
 * @param {T | State<T>} [next]
 * @param {Flags} [flags]
 * @param {Collections<T>} [groups]
 */var ts=function(t,e,r,n,i){return t.ts(e,r,n,i)};
/**
 * @template T
 * @param {State<T>} state
 * @param {string} input
 * @param {T | State<T>} [next]
 * @param {Collections<T>} [groups]
 * @param {Flags} [flags]
 */var tt=function(t,e,r,n,i){return t.tt(e,r,n,i)};
/******************************************************************************
Text Tokens
Identifiers for token outputs from the regexp scanner
******************************************************************************/
// A valid web domain token
var WORD="WORD";// only contains a-z
var UWORD="UWORD";// contains letters other than a-z, used for IDN
var ASCIINUMERICAL="ASCIINUMERICAL";// contains a-z, 0-9
var ALPHANUMERICAL="ALPHANUMERICAL";// contains numbers and letters other than a-z, used for IDN
// Special case of word
var LOCALHOST="LOCALHOST";
// Valid top-level domain, special case of WORD (see tlds.js)
var TLD="TLD";
// Valid IDN TLD, special case of UWORD (see tlds.js)
var UTLD="UTLD";
// The scheme portion of a web URI protocol. Supported types include: `mailto`,
// `file`, and user-defined custom protocols. Limited to schemes that contain
// only letters
var SCHEME="SCHEME";
// Similar to SCHEME, except makes distinction for schemes that must always be
// followed by `://`, not just `:`. Supported types include `http`, `https`,
// `ftp`, `ftps`
var SLASH_SCHEME="SLASH_SCHEME";
// Any sequence of digits 0-9
var NUM="NUM";
// Any number of consecutive whitespace characters that are not newline
var WS="WS";
// New line (unix style)
var NL="NL";// \n
// Opening/closing bracket classes
// TODO: Rename OPEN -> LEFT and CLOSE -> RIGHT in v5 to fit with Unicode names
// Also rename angle brackes to LESSTHAN and GREATER THAN
var OPENBRACE="OPENBRACE";// {
var CLOSEBRACE="CLOSEBRACE";// }
var OPENBRACKET="OPENBRACKET";// [
var CLOSEBRACKET="CLOSEBRACKET";// ]
var OPENPAREN="OPENPAREN";// (
var CLOSEPAREN="CLOSEPAREN";// )
var OPENANGLEBRACKET="OPENANGLEBRACKET";// <
var CLOSEANGLEBRACKET="CLOSEANGLEBRACKET";// >
var FULLWIDTHLEFTPAREN="FULLWIDTHLEFTPAREN";// （
var FULLWIDTHRIGHTPAREN="FULLWIDTHRIGHTPAREN";// ）
var LEFTCORNERBRACKET="LEFTCORNERBRACKET";// 「
var RIGHTCORNERBRACKET="RIGHTCORNERBRACKET";// 」
var LEFTWHITECORNERBRACKET="LEFTWHITECORNERBRACKET";// 『
var RIGHTWHITECORNERBRACKET="RIGHTWHITECORNERBRACKET";// 』
var FULLWIDTHLESSTHAN="FULLWIDTHLESSTHAN";// ＜
var FULLWIDTHGREATERTHAN="FULLWIDTHGREATERTHAN";// ＞
// Various symbols
var AMPERSAND="AMPERSAND";// &
var APOSTROPHE="APOSTROPHE";// '
var ASTERISK="ASTERISK";// *
var AT="AT";// @
var BACKSLASH="BACKSLASH";// \
var BACKTICK="BACKTICK";// `
var CARET="CARET";// ^
var COLON="COLON";// :
var COMMA="COMMA";// ,
var DOLLAR="DOLLAR";// $
var DOT="DOT";// .
var EQUALS="EQUALS";// =
var EXCLAMATION="EXCLAMATION";// !
var HYPHEN="HYPHEN";// -
var PERCENT="PERCENT";// %
var PIPE="PIPE";// |
var PLUS="PLUS";// +
var POUND="POUND";// #
var QUERY="QUERY";// ?
var QUOTE="QUOTE";// "
var FULLWIDTHMIDDLEDOT="FULLWIDTHMIDDLEDOT";// ・
var SEMI="SEMI";// ;
var SLASH="SLASH";// /
var TILDE="TILDE";// ~
var UNDERSCORE="UNDERSCORE";// _
// Emoji symbol
var EMOJI$1="EMOJI";
// Default token - anything that is not one of the above
var SYM="SYM";var tk=Object.freeze({__proto__:null,ALPHANUMERICAL:ALPHANUMERICAL,AMPERSAND:AMPERSAND,APOSTROPHE:APOSTROPHE,ASCIINUMERICAL:ASCIINUMERICAL,ASTERISK:ASTERISK,AT:AT,BACKSLASH:BACKSLASH,BACKTICK:BACKTICK,CARET:CARET,CLOSEANGLEBRACKET:CLOSEANGLEBRACKET,CLOSEBRACE:CLOSEBRACE,CLOSEBRACKET:CLOSEBRACKET,CLOSEPAREN:CLOSEPAREN,COLON:COLON,COMMA:COMMA,DOLLAR:DOLLAR,DOT:DOT,EMOJI:EMOJI$1,EQUALS:EQUALS,EXCLAMATION:EXCLAMATION,FULLWIDTHGREATERTHAN:FULLWIDTHGREATERTHAN,FULLWIDTHLEFTPAREN:FULLWIDTHLEFTPAREN,FULLWIDTHLESSTHAN:FULLWIDTHLESSTHAN,FULLWIDTHMIDDLEDOT:FULLWIDTHMIDDLEDOT,FULLWIDTHRIGHTPAREN:FULLWIDTHRIGHTPAREN,HYPHEN:HYPHEN,LEFTCORNERBRACKET:LEFTCORNERBRACKET,LEFTWHITECORNERBRACKET:LEFTWHITECORNERBRACKET,LOCALHOST:LOCALHOST,NL:NL,NUM:NUM,OPENANGLEBRACKET:OPENANGLEBRACKET,OPENBRACE:OPENBRACE,OPENBRACKET:OPENBRACKET,OPENPAREN:OPENPAREN,PERCENT:PERCENT,PIPE:PIPE,PLUS:PLUS,POUND:POUND,QUERY:QUERY,QUOTE:QUOTE,RIGHTCORNERBRACKET:RIGHTCORNERBRACKET,RIGHTWHITECORNERBRACKET:RIGHTWHITECORNERBRACKET,SCHEME:SCHEME,SEMI:SEMI,SLASH:SLASH,SLASH_SCHEME:SLASH_SCHEME,SYM:SYM,TILDE:TILDE,TLD:TLD,UNDERSCORE:UNDERSCORE,UTLD:UTLD,UWORD:UWORD,WORD:WORD,WS:WS});
// Note that these two Unicode ones expand into a really big one with Babel
var ASCII_LETTER=/[a-z]/;
// `\p{}` property escapes need ICU, which some embedded JS runtimes ship
// without (e.g. NativeScript's V8). The literal form throws a SyntaxError
// at parse time — before any user code can catch it — so build them
// dynamically and keep ASCII-range fallbacks for engines without Unicode
// property escapes.
var LETTER=/[a-z]/i;// Any Unicode character with letter data type
var EMOJI=/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]|\u{FE0F}/u;// Any Unicode emoji character
try{LETTER=new RegExp("\\p{L}","u");EMOJI=new RegExp("\\p{Emoji}","u")}catch(t){
// use ASCII fallbacks
}var DIGIT=/\d/;var SPACE=/\s/;
/**
    The scanner provides an interface that takes a string of text as input, and
    outputs an array of tokens instances that can be used for easy URL parsing.
*/var CR="\r";// carriage-return character
var LF="\n";// line-feed character
var EMOJI_VARIATION="️";// Variation selector, follows heart and others
var EMOJI_JOINER="‍";// zero-width joiner
var OBJECT_REPLACEMENT="￼";// whitespace placeholder that sometimes appears in rich text editors
var tlds=null,utlds=null;// don't change so only have to be computed once
/**
 * Scanner output token:
 * - `t` is the token name (e.g., 'NUM', 'EMOJI', 'TLD')
 * - `v` is the value of the token (e.g., '123', '❤️', 'com')
 * - `s` is the start index of the token in the original string
 * - `e` is the end index of the token in the original string
 * @typedef {{t: string, v: string, s: number, e: number}} Token
 */
/**
 * @template T
 * @typedef {{ [collection: string]: T[] }} Collections
 */
/**
 * Initialize the scanner character-based state machine for the given start
 * state
 * @param {[string, boolean][]} customSchemes List of custom schemes, where each
 * item is a length-2 tuple with the first element set to the string scheme, and
 * the second element set to `true` if the `://` after the scheme is optional
 */function init$2(t){var e,r,n,i,a,o,u,s,f,l,c;if(t===void 0){t=[]}
// Frequently used states (name argument removed during minification)
/** @type Collections<string> */var v={};// of tokens
State.groups=v;
/** @type State<string> */var h=new State;if(tlds==null){tlds=decodeTlds(encodedTlds)}if(utlds==null){utlds=decodeTlds(encodedUtlds)}
// States for special URL symbols that accept immediately after start
tt(h,"'",APOSTROPHE);tt(h,"{",OPENBRACE);tt(h,"}",CLOSEBRACE);tt(h,"[",OPENBRACKET);tt(h,"]",CLOSEBRACKET);tt(h,"(",OPENPAREN);tt(h,")",CLOSEPAREN);tt(h,"<",OPENANGLEBRACKET);tt(h,">",CLOSEANGLEBRACKET);tt(h,"（",FULLWIDTHLEFTPAREN);tt(h,"）",FULLWIDTHRIGHTPAREN);tt(h,"「",LEFTCORNERBRACKET);tt(h,"」",RIGHTCORNERBRACKET);tt(h,"『",LEFTWHITECORNERBRACKET);tt(h,"』",RIGHTWHITECORNERBRACKET);tt(h,"＜",FULLWIDTHLESSTHAN);tt(h,"＞",FULLWIDTHGREATERTHAN);tt(h,"&",AMPERSAND);tt(h,"*",ASTERISK);tt(h,"@",AT);tt(h,"`",BACKTICK);tt(h,"^",CARET);tt(h,":",COLON);tt(h,",",COMMA);tt(h,"$",DOLLAR);tt(h,".",DOT);tt(h,"=",EQUALS);tt(h,"!",EXCLAMATION);tt(h,"-",HYPHEN);tt(h,"%",PERCENT);tt(h,"|",PIPE);tt(h,"+",PLUS);tt(h,"#",POUND);tt(h,"?",QUERY);tt(h,'"',QUOTE);tt(h,"/",SLASH);tt(h,";",SEMI);tt(h,"~",TILDE);tt(h,"_",UNDERSCORE);tt(h,"\\",BACKSLASH);tt(h,"・",FULLWIDTHMIDDLEDOT);var d=tr(h,DIGIT,NUM,(e={},e[numeric]=true,e));tr(d,DIGIT,d);var p=tr(d,ASCII_LETTER,ASCIINUMERICAL,(r={},r[asciinumeric]=true,r));var g=tr(d,LETTER,ALPHANUMERICAL,(n={},n[alphanumeric]=true,n));
// State which emits a word token
var m=tr(h,ASCII_LETTER,WORD,(i={},i[ascii]=true,i));tr(m,DIGIT,p);tr(m,ASCII_LETTER,m);tr(p,DIGIT,p);tr(p,ASCII_LETTER,p);
// Same as previous, but specific to non-fsm.ascii alphabet words
var b=tr(h,LETTER,UWORD,(a={},a[alpha]=true,a));tr(b,ASCII_LETTER);// Non-accepting
tr(b,DIGIT,g);tr(b,LETTER,b);tr(g,DIGIT,g);tr(g,ASCII_LETTER);// Non-accepting
tr(g,LETTER,g);// Non-accepting
// Whitespace jumps
// Tokens of only non-newline whitespace are arbitrarily long
// If any whitespace except newline, more whitespace!
var w=tt(h,LF,NL,(o={},o[whitespace]=true,o));var S=tt(h,CR,WS,(u={},u[whitespace]=true,u));var E=tr(h,SPACE,WS,(s={},s[whitespace]=true,s));tt(h,OBJECT_REPLACEMENT,E);tt(S,LF,w);// \r\n
tt(S,OBJECT_REPLACEMENT,E);tr(S,SPACE,E);tt(E,CR);// non-accepting state to avoid mixing whitespaces
tt(E,LF);// non-accepting state to avoid mixing whitespaces
tr(E,SPACE,E);tt(E,OBJECT_REPLACEMENT,E);
// Emoji tokens. They are not grouped by the scanner except in cases where a
// zero-width joiner is present
var T=tr(h,EMOJI,EMOJI$1,(f={},f[emoji]=true,f));tt(T,"#");// no transition, emoji regex seems to match #
tr(T,EMOJI,T);tt(T,EMOJI_VARIATION,T);
// tt(Start, EMOJI_VARIATION, Emoji); // This one is sketchy
var y=tt(T,EMOJI_JOINER);tt(y,"#");tr(y,EMOJI,T);
// tt(EmojiJoiner, EMOJI_VARIATION, Emoji); // also sketchy
// Generates states for top-level domains
// Note that this is most accurate when tlds are in alphabetical order
var k=[[ASCII_LETTER,m],[DIGIT,p]];var R=[[ASCII_LETTER,null],[LETTER,b],[DIGIT,g]];for(var x=0;x<tlds.length;x++){fastts(h,tlds[x],TLD,WORD,k)}for(var A=0;A<utlds.length;A++){fastts(h,utlds[A],UTLD,UWORD,R)}addToGroups(TLD,{tld:true,ascii:true},v);addToGroups(UTLD,{utld:true,alpha:true},v);
// Collect the states generated by different protocols. NOTE: If any new TLDs
// get added that are also protocols, set the token to be the same as the
// protocol to ensure parsing works as expected.
fastts(h,"file",SCHEME,WORD,k);fastts(h,"mailto",SCHEME,WORD,k);fastts(h,"http",SLASH_SCHEME,WORD,k);fastts(h,"https",SLASH_SCHEME,WORD,k);fastts(h,"ftp",SLASH_SCHEME,WORD,k);fastts(h,"ftps",SLASH_SCHEME,WORD,k);addToGroups(SCHEME,{scheme:true,ascii:true},v);addToGroups(SLASH_SCHEME,{slashscheme:true,ascii:true},v);
// Register custom schemes. Assumes each scheme is asciinumeric with hyphens
t=t.sort((function(t,e){return t[0]>e[0]?1:-1}));for(var C=0;C<t.length;C++){var _=t[C][0];var O=t[C][1];var M=O?(l={},l[scheme]=true,l):(c={},c[slashscheme]=true,c);if(_.indexOf("-")>=0){M[domain]=true}else if(!ASCII_LETTER.test(_)){M[numeric]=true;// numbers only
}else if(DIGIT.test(_)){M[asciinumeric]=true}else{M[ascii]=true}ts(h,_,_,M)}
// Localhost token
ts(h,"localhost",LOCALHOST,{ascii:true});
// Set default transition for start state (some symbol)
h.jd=new State(SYM);return{start:h,tokens:Object.assign({groups:v},tk)}}
/**
    Given a string, returns an array of TOKEN instances representing the
    composition of that string.

    @method run
    @param {State<string>} start scanner starting state
    @param {string} str input string to scan
    @return {Token[]} list of tokens, each with a type and value
*/function run$1(t,e){
// State machine is not case sensitive, so input is tokenized in lowercased
// form (still returns regular case). Uses selective `toLowerCase` because
// lowercasing the entire string causes the length and character position to
// vary in some non-English strings with V8-based runtimes.
var r=stringToArray(e.replace(/[A-Z]/g,(function(t){return t.toLowerCase()})));var n=r.length;// <= len if there are emojis, etc
var i=[];// return value
// cursor through the string itself, accounting for characters that have
// width with length 2 such as emojis
var a=0;
// Cursor through the array-representation of the string
var o=0;
// Tokenize the string
while(o<n){var u=t;var s=null;var f=0;var l=null;var c=-1;var v=-1;while(o<n&&(s=u.go(r[o]))){u=s;
// Keep track of the latest accepting state
if(u.accepts()){c=0;v=0;l=u}else if(c>=0){c+=r[o].length;v++}f+=r[o].length;a+=r[o].length;o++}
// Roll back to the latest accepting state
a-=c;o-=v;f-=c;
// No more jumps, just make a new token from the last accepting one
i.push({t:l.t,
// token type/name
v:e.slice(a-f,a),
// string value
s:a-f,
// start index
e:a})}return i}
/**
 * Convert a String to an Array of characters, taking into account that some
 * characters like emojis take up two string indexes.
 *
 * Adapted from core-js (MIT license)
 * https://github.com/zloirock/core-js/blob/2d69cf5f99ab3ea3463c395df81e5a15b68f49d9/packages/core-js/internals/string-multibyte.js
 *
 * @function stringToArray
 * @param {string} str
 * @returns {string[]}
 */function stringToArray(t){var e=[];var r=t.length;var n=0;while(n<r){var i=t.charCodeAt(n);var a=void 0;var o=i<55296||i>56319||n+1===r||(a=t.charCodeAt(n+1))<56320||a>57343?t[n]:t.slice(n,n+2);// two-index characters
e.push(o);n+=o.length}return e}
/**
 * Fast version of ts function for when transition defaults are well known
 * @param {State<string>} state
 * @param {string} input
 * @param {string} t
 * @param {string} defaultt
 * @param {[RegExp, State<string>][]} jr
 * @returns {State<string>}
 */function fastts(t,e,r,n,i){var a;var o=e.length;for(var u=0;u<o-1;u++){var s=e[u];if(t.j[s]){a=t.j[s]}else{a=new State(n);a.jr=i.slice();t.j[s]=a}t=a}a=new State(r);a.jr=i.slice();t.j[e[o-1]]=a;return a}
/**
 * Converts a string of Top-Level Domain names encoded in update-tlds.js back
 * into a list of strings.
 * @param {str} encoded encoded TLDs string
 * @returns {str[]} original TLDs list
 */function decodeTlds(t){var e=[];var r=[];var n=0;var i="0123456789";while(n<t.length){var a=0;while(i.indexOf(t[n+a])>=0){a++;// encountered some digits, have to pop to go one level up trie
}if(a>0){e.push(r.join(""));// whatever preceded the pop digits must be a word
for(var o=parseInt(t.substring(n,n+a),10);o>0;o--){r.pop()}n+=a}else{r.push(t[n]);// drop down a level into the trie
n++}}return e}
/**
 * An object where each key is a valid DOM Event Name such as `click` or `focus`
 * and each value is an event handler function.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Element#events
 * @typedef {?{ [event: string]: Function }} EventListeners
 */
/**
 * All formatted properties required to render a link, including `tagName`,
 * `attributes`, `content` and `eventListeners`.
 * @typedef {{ tagName: any, attributes: {[attr: string]: any}, content: string,
 * eventListeners: EventListeners }} IntermediateRepresentation
 */
/**
 * Specify either an object described by the template type `O` or a function.
 *
 * The function takes a string value (usually the link's href attribute), the
 * link type (`'url'`, `'hashtag`', etc.) and an internal token representation
 * of the link. It should return an object of the template type `O`
 * @template O
 * @typedef {O | ((value: string, type: string, token: MultiToken) => O)} OptObj
 */
/**
 * Specify either a function described by template type `F` or an object.
 *
 * Each key in the object should be a link type (`'url'`, `'hashtag`', etc.). Each
 * value should be a function with template type `F` that is called when the
 * corresponding link type is encountered.
 * @template F
 * @typedef {F | { [type: string]: F}} OptFn
 */
/**
 * Specify either a value with template type `V`, a function that returns `V` or
 * an object where each value resolves to `V`.
 *
 * The function takes a string value (usually the link's href attribute), the
 * link type (`'url'`, `'hashtag`', etc.) and an internal token representation
 * of the link. It should return an object of the template type `V`
 *
 * For the object, each key should be a link type (`'url'`, `'hashtag`', etc.).
 * Each value should either have type `V` or a function that returns V. This
 * function similarly takes a string value and a token.
 *
 * Example valid types for `Opt<string>`:
 *
 * ```js
 * 'hello'
 * (value, type, token) => 'world'
 * { url: 'hello', email: (value, token) => 'world'}
 * ```
 * @template V
 * @typedef {V | ((value: string, type: string, token: MultiToken) => V) | { [type: string]: V | ((value: string, token: MultiToken) => V) }} Opt
 */
/**
 * See available options: https://linkify.js.org/docs/options.html
 * @typedef {{
 * 	defaultProtocol?: string,
 *  events?: OptObj<EventListeners>,
 * 	format?: Opt<string>,
 * 	formatHref?: Opt<string>,
 * 	nl2br?: boolean,
 * 	tagName?: Opt<any>,
 * 	target?: Opt<string>,
 * 	rel?: Opt<string>,
 * 	validate?: Opt<boolean>,
 * 	truncate?: Opt<number>,
 * 	className?: Opt<string>,
 * 	attributes?: OptObj<({ [attr: string]: any })>,
 *  ignoreTags?: string[],
 *  ignoreClasses?: string[],
 * 	render?: OptFn<((ir: IntermediateRepresentation) => any)>
 * }} Opts
 */
/**
 * @type Required<Opts>
 */var defaults={defaultProtocol:"http",events:null,format:noop,formatHref:noop,nl2br:false,tagName:"a",target:null,rel:null,validate:true,truncate:Infinity,className:null,attributes:null,ignoreTags:[],ignoreClasses:[],render:null};
/**
 * Utility class for linkify interfaces to apply specified
 * {@link Opts formatting and rendering options}.
 *
 * @param {Opts | Options} [opts] Option value overrides.
 * @param {(ir: IntermediateRepresentation) => any} [defaultRender] (For
 *   internal use) default render function that determines how to generate an
 *   HTML element based on a link token's derived tagName, attributes and HTML.
 *   Similar to render option
 */function Options(t,e){if(e===void 0){e=null}var r=Object.assign({},defaults);if(t){r=Object.assign(r,t instanceof Options?t.o:t)}
// Ensure all ignored tags are uppercase
var n=r.ignoreTags;var i=[];for(var a=0;a<n.length;a++){i.push(n[a].toUpperCase())}
/** @protected */this.o=r;if(e){this.defaultRender=e}this.ignoreTags=i;this.ignoreClasses=r.ignoreClasses.slice()}Options.prototype={o:defaults,
/**
     * @type string[]
     */
ignoreTags:[],
/**
     * @type string[]
     */
ignoreClasses:[],
/**
     * Returns whether a whitespace-separated class attribute contains an
     * ignored class name.
     * @param {unknown} classNames
     * @returns {boolean}
     */
isIgnoredClass:function(t){if(typeof t!=="string"||this.ignoreClasses.length===0){return false}var e=t.split(/\s+/);for(var r=0;r<e.length;r++){if(this.ignoreClasses.indexOf(e[r])>=0){return true}}return false},
/**
     * @param {IntermediateRepresentation} ir
     * @returns {any}
     */
defaultRender:function(t){return t},
/**
     * Returns true or false based on whether a token should be displayed as a
     * link based on the user options.
     * @param {MultiToken} token
     * @returns {boolean}
     */
check:function(t){return this.get("validate",t.toString(),t)},
// Private methods
/**
     * Resolve an option's value based on the value of the option and the given
     * params. If operator and token are specified and the target option is
     * callable, automatically calls the function with the given argument.
     * @template {keyof Opts} K
     * @param {K} key Name of option to use
     * @param {string} [operator] will be passed to the target option if it's a
     * function. If not specified, RAW function value gets returned
     * @param {MultiToken} [token] The token from linkify.tokenize
     * @returns {Opts[K] | any}
     */
get:function(t,e,r){var n=e!=null;var i=this.o[t];if(!i){return i}if(typeof i==="object"){i=r.t in i?i[r.t]:defaults[t];if(typeof i==="function"&&n){i=i(e,r)}}else if(typeof i==="function"&&n){i=i(e,r.t,r)}return i},
/**
     * @template {keyof Opts} L
     * @param {L} key Name of options object to use
     * @param {string} [operator]
     * @param {MultiToken} [token]
     * @returns {Opts[L] | any}
     */
getObj:function(t,e,r){var n=this.o[t];if(typeof n==="function"&&e!=null){n=n(e,r.t,r)}return n},
/**
     * Convert the given token to a rendered element that may be added to the
     * calling-interface's DOM
     * @param {MultiToken} token Token to render to an HTML element
     * @returns {any} Render result; e.g., HTML string, DOM element, React
     *   Component, etc.
     */
render:function(t){var e=t.render(this);// intermediate representation
var r=this.get("render",null,t)||this.defaultRender;return r(e,t.t,t)}};function noop(t){return t}
/******************************************************************************
    Multi-Tokens
    Tokens composed of arrays of TextTokens
******************************************************************************/
/**
 * @param {string} value
 * @param {Token[]} tokens
 */function MultiToken(t,e){this.t="token";this.v=t;this.tk=e}
/**
 * Abstract class used for manufacturing tokens of text tokens. That is rather
 * than the value for a token being a small string of text, it's value an array
 * of text tokens.
 *
 * Used for grouping together URLs, emails, hashtags, and other potential
 * creations.
 * @class MultiToken
 * @property {string} t
 * @property {string} v
 * @property {Token[]} tk
 * @abstract
 */MultiToken.prototype={isLink:false,
/**
     * Return the string this token represents.
     * @return {string}
     */
toString:function(){return this.v},
/**
     * What should the value for this token be in the `href` HTML attribute?
     * Returns the `.toString` value by default.
     * @param {string} [scheme]
     * @return {string}
     */
toHref:function(t){return this.toString()},
/**
     * @param {Options} options Formatting options
     * @returns {string}
     */
toFormattedString:function(t){var e=this.toString();var r=t.get("truncate",e,this);var n=t.get("format",e,this);return r&&n.length>r?n.substring(0,r)+"…":n},
/**
     *
     * @param {Options} options
     * @returns {string}
     */
toFormattedHref:function(t){return t.get("formatHref",this.toHref(t.get("defaultProtocol")),this)},
/**
     * The start index of this token in the original input string
     * @returns {number}
     */
startIndex:function(){return this.tk[0].s},
/**
     * The end index of this token in the original input string (up to this
     * index but not including it)
     * @returns {number}
     */
endIndex:function(){return this.tk[this.tk.length-1].e},
/**
      Returns an object  of relevant values for this token, which includes keys
      * type - Kind of token ('url', 'email', etc.)
      * value - Original text
      * href - The value that should be added to the anchor tag's href
          attribute
          @method toObject
      @param {string} [protocol] `'http'` by default
    */
toObject:function(t){if(t===void 0){t=defaults.defaultProtocol}return{type:this.t,value:this.toString(),isLink:this.isLink,href:this.toHref(t),start:this.startIndex(),end:this.endIndex()}},
/**
     *
     * @param {Options} options Formatting option
     */
toFormattedObject:function(t){return{type:this.t,value:this.toFormattedString(t),isLink:this.isLink,href:this.toFormattedHref(t),start:this.startIndex(),end:this.endIndex()}},
/**
     * Whether this token should be rendered as a link according to the given options
     * @param {Options} options
     * @returns {boolean}
     */
validate:function(t){return t.get("validate",this.toString(),this)},
/**
     * Return an object that represents how this link should be rendered.
     * @param {Options} options Formattinng options
     */
render:function(t){var e=this;var r=this.toHref(t.get("defaultProtocol"));var n=t.get("formatHref",r,this);var i=t.get("tagName",r,e);var a=this.toFormattedString(t);var o={};var u=t.get("className",r,e);var s=t.get("target",r,e);var f=t.get("rel",r,e);var l=t.getObj("attributes",r,e);var c=t.getObj("events",r,e);o.href=n;if(u){o.class=u}if(s){o.target=s}if(f){o.rel=f}if(l){Object.assign(o,l)}return{tagName:i,attributes:o,content:a,eventListeners:c}}};
/**
 * Create a new token that can be emitted by the parser state machine
 * @param {string} type readable type of the token
 * @param {object} props properties to assign or override, including isLink = true or false
 * @returns {new (value: string, tokens: Token[]) => MultiToken} new token class
 */function createTokenClass(t,e){var r=/** @class */function(e){__extends(r,e);function r(r,n){var i=e.call(this,r,n)||this;i.t=t;return i}return r}(MultiToken);for(var n in e){r.prototype[n]=e[n]}r.t=t;return r}
/**
    Represents a list of tokens making up a valid email address
*/var Email=createTokenClass("email",{isLink:true,toHref:function(){return"mailto:"+this.toString()}});
/**
    Represents some plain text
*/var Text$1=createTokenClass("text");
/**
    Multi-linebreak token - represents a line break
    @class Nl
*/var Nl=createTokenClass("nl");
/**
    Represents a list of text tokens making up a valid URL
    @class Url
*/var Url=createTokenClass("url",{isLink:true,
/**
      Lowercases relevant parts of the domain and adds the protocol if
      required. Note that this will not escape unsafe HTML characters in the
      URL.
          @param {string} [scheme] default scheme (e.g., 'https')
      @return {string} the full href
    */
toHref:function(t){if(t===void 0){t=defaults.defaultProtocol}
// Check if already has a prefix scheme
return this.hasProtocol()?this.v:"".concat(t,"://").concat(this.v)},
/**
     * Check whether this URL token has a protocol
     * @return {boolean}
     */
hasProtocol:function(){var t=this.tk;return t.length>=2&&t[0].t!==LOCALHOST&&t[1].t===COLON}});
/**
    Not exactly parser, more like the second-stage scanner (although we can
    theoretically hotswap the code here with a real parser in the future... but
    for a little URL-finding utility abstract syntax trees may be a little
    overkill).

    URL format: http://en.wikipedia.org/wiki/URI_scheme
    Email format: http://en.wikipedia.org/wiki/EmailAddress (links to RFC in
    reference)

    @module linkify
    @submodule parser
    @main run
*/var makeState=function(t){return new State(t)};
/**
 * Generate the parser multi token-based state machine
 * @param {{ groups: Collections<string> }} tokens
 */function init$1(t){var e=t.groups;
// Types of characters the URL can definitely end in
var r=e.domain.concat([AMPERSAND,ASTERISK,AT,BACKSLASH,BACKTICK,CARET,DOLLAR,EQUALS,HYPHEN,NUM,PERCENT,PIPE,PLUS,POUND,SLASH,SYM,TILDE,UNDERSCORE]);
// Types of tokens that can follow a URL and be part of the query string
// but cannot be the very last characters
// Characters that cannot appear in the URL at all should be excluded
var n=[APOSTROPHE,COLON,COMMA,DOT,EXCLAMATION,PERCENT,QUERY,QUOTE,SEMI,OPENANGLEBRACKET,CLOSEANGLEBRACKET,OPENBRACE,CLOSEBRACE,CLOSEBRACKET,OPENBRACKET,OPENPAREN,CLOSEPAREN,FULLWIDTHLEFTPAREN,FULLWIDTHRIGHTPAREN,LEFTCORNERBRACKET,RIGHTCORNERBRACKET,LEFTWHITECORNERBRACKET,RIGHTWHITECORNERBRACKET,FULLWIDTHLESSTHAN,FULLWIDTHGREATERTHAN];
// For addresses without the mailto prefix
// Tokens allowed in the localpart of the email
var i=[AMPERSAND,APOSTROPHE,ASTERISK,BACKSLASH,BACKTICK,CARET,DOLLAR,EQUALS,HYPHEN,OPENBRACE,CLOSEBRACE,PERCENT,PIPE,PLUS,POUND,QUERY,SLASH,SYM,TILDE,UNDERSCORE];
// The universal starting state.
/**
     * @type State<Token>
     */var a=makeState();var o=tt(a,TILDE);// Local part of the email address
ta(o,i,o);ta(o,e.domain,o);var u=makeState(),s=makeState(),f=makeState();ta(a,e.domain,u);// parsed string ends with a potential domain name (A)
ta(a,e.scheme,s);// e.g., 'mailto'
ta(a,e.slashscheme,f);// e.g., 'http'
ta(u,i,o);ta(u,e.domain,u);var l=tt(u,AT);// Local part of the email address plus @
tt(o,AT,l);// close to an email address now
// Local part of an email address can be e.g. 'http' or 'mailto'
tt(s,AT,l);tt(f,AT,l);var c=tt(o,DOT);// Local part of the email address plus '.' (localpart cannot end in .)
ta(c,i,o);ta(c,e.domain,o);var v=makeState();ta(l,e.domain,v);// parsed string starts with local email info + @ with a potential domain name
ta(v,e.domain,v);var h=tt(v,DOT);// domain followed by DOT
ta(h,e.domain,v);var d=makeState(Email);// Possible email address (could have more tlds)
ta(h,e.tld,d);ta(h,e.utld,d);tt(l,LOCALHOST,d);
// Hyphen can jump back to a domain name
var p=tt(v,HYPHEN);// parsed string starts with local email info + @ with a potential domain name
tt(p,HYPHEN,p);ta(p,e.domain,v);ta(d,e.domain,v);tt(d,DOT,h);tt(d,HYPHEN,p);
// Account for dots and hyphens. Hyphens are usually parts of domain names
// (but not TLDs)
var g=tt(u,HYPHEN);// domain followed by hyphen
var m=tt(u,DOT);// domain followed by DOT
tt(g,HYPHEN,g);ta(g,e.domain,u);ta(m,i,o);ta(m,e.domain,u);var b=makeState(Url);// Simplest possible URL with no query string
ta(m,e.tld,b);ta(m,e.utld,b);ta(b,e.domain,u);ta(b,i,o);tt(b,DOT,m);tt(b,HYPHEN,g);tt(b,AT,l);var w=tt(b,COLON);// URL followed by colon (potential port number here)
var S=makeState(Url);// TLD followed by a port number
ta(w,e.numeric,S);
// Long URL with optional port and maybe query string
var E=makeState(Url);
// URL with extra symbols at the end, followed by an opening bracket
var T=makeState();// URL followed by some symbols (will not be part of the final URL)
// Query strings
ta(E,r,E);ta(E,n,T);ta(T,r,E);ta(T,n,T);
// Become real URLs after `SLASH` or `COLON NUM SLASH`
// Here works with or without scheme:// prefix
tt(b,SLASH,E);tt(S,SLASH,E);
// A query string or fragment may also follow the domain (or port) directly,
// without a path slash (e.g. `example.com?q=1`, `example.com#frag`). Mirror
// how the `Url` state treats these tokens: `?` is non-accepting (a trailing
// `?` is trimmed), `#` is accepting.
tt(b,QUERY,T);tt(b,POUND,E);tt(S,QUERY,T);tt(S,POUND,E);
// Note that domains that begin with schemes are treated slighly differently
var y=tt(s,COLON);// e.g., 'mailto:'
var k=tt(f,COLON);// e.g., 'http:'
var R=tt(k,SLASH);// e.g., 'http:/'
var x=tt(R,SLASH);// e.g., 'http://'
// Scheme states can transition to domain states
ta(s,e.domain,u);tt(s,DOT,m);tt(s,HYPHEN,g);ta(f,e.domain,u);tt(f,DOT,m);tt(f,HYPHEN,g);
// Force URL with scheme prefix followed by anything sane
ta(y,e.domain,E);tt(y,SLASH,E);tt(y,QUERY,E);ta(x,e.domain,E);ta(x,r,E);tt(x,SLASH,E);var A=[[OPENBRACE,CLOSEBRACE],
// {}
[OPENBRACKET,CLOSEBRACKET],
// []
[OPENPAREN,CLOSEPAREN],
// ()
[OPENANGLEBRACKET,CLOSEANGLEBRACKET],
// <>
[FULLWIDTHLEFTPAREN,FULLWIDTHRIGHTPAREN],
// （）
[LEFTCORNERBRACKET,RIGHTCORNERBRACKET],
// 「」
[LEFTWHITECORNERBRACKET,RIGHTWHITECORNERBRACKET],
// 『』
[FULLWIDTHLESSTHAN,FULLWIDTHGREATERTHAN]];for(var C=0;C<A.length;C++){var _=A[C],O=_[0],M=_[1];var N=tt(E,O);// URL followed by open bracket
// Continue not accepting for open brackets
tt(T,O,N);
// URL that begins with an opening bracket, followed by a symbols.
// Note that the final state can still be `UrlOpen` (if the URL has a
// single opening bracket for some reason).
var L=makeState(Url);ta(N,r,L);var I=makeState();// UrlOpen followed by some symbols it cannot end it
ta(N,n,I);
// Closing bracket component. This character WILL be included in the URL.
// Must come after qsNonAccepting (which includes all close-bracket tokens)
// so that CLOSE -> Url wins over CLOSE -> UrlOpenSyms.
tt(N,M,E);
// URL that begins with an opening bracket, followed by some symbols
ta(L,r,L);ta(L,n,I);ta(I,r,L);ta(I,n,I);
// Close brace/bracket to become regular URL
tt(L,M,E);tt(I,M,E)}tt(a,LOCALHOST,b);// localhost is a valid URL state
tt(a,NL,Nl);// single new line
return{start:a,tokens:tk}}
/**
 * Run the parser state machine on a list of scanned string-based tokens to
 * create a list of multi tokens, each of which represents a URL, email address,
 * plain text, etc.
 *
 * @param {State<MultiToken>} start parser start state
 * @param {string} input the original input used to generate the given tokens
 * @param {Token[]} tokens list of scanned tokens
 * @returns {MultiToken[]}
 */function run(t,e,r){var n=r.length;var i=0;var a=[];var o=[];
// Memo of parser states that are known not to lead to any accepting state
// when reached at a given cursor position. dead[i] is a Set of states that,
// once reached right before tokens[i], can never reach another accepting
// state. Because the parser is deterministic, a run that reaches one of
// these (state, cursor) pairs can stop there with the same result as
// continuing. Without this, inputs where every token can extend a
// potential link that never completes (e.g., 'a.a.a.a.…') make each
// failed attempt rescan to the end of the input, which is quadratic.
// See https://github.com/Hypercontext/linkifyjs/issues/568
/** @type {Array<Set<State<MultiToken>> | undefined>} */var u=[];while(i<n){var s=t;var f=null;var l=null;var c=0;var v=null;var h=-1;
// States reached since the latest accepting state (or since the start
// of this attempt), in order. visited[k] is the state reached right
// before tokens[cursor - visited.length + k + 1]
var d=[];while(i<n&&!(f=s.go(r[i].t))){
// Starting tokens with nowhere to jump to.
// Consider these to be just plain text
o.push(r[i++])}while(i<n&&(l=f||s.go(r[i].t))){
// Get the next state
f=null;s=l;i++;c++;
// Keep track of the latest accepting state
if(s.accepts()){h=0;v=s;d=[]}else{if(h>=0){h++}d.push(s);if(u[i]&&u[i].has(s)){
// Already known that no accepting state is reachable from here
break}}}
// None of the states visited since the latest accepting state lead to
// another accepting state; remember them so later attempts that reach
// the same state at the same position can stop early.
for(var p=0,g=i-d.length+1;p<d.length;p++,g++){(u[g]||(u[g]=new Set)).add(d[p])}if(h<0){
// No accepting state was found, part of a regular text token add
// the first text token to the text tokens array and try again from
// the next
i-=c;if(i<n){o.push(r[i]);i++}}else{
// Accepting state!
// First close off the textTokens (if available)
if(o.length>0){a.push(initMultiToken(Text$1,e,o));o=[]}
// Roll back to the latest accepting state
i-=h;c-=h;
// Create a new multitoken
var m=v.t;var b=r.slice(i-c,i);a.push(initMultiToken(m,e,b))}}
// Finally close off the textTokens (if available)
if(o.length>0){a.push(initMultiToken(Text$1,e,o))}return a}
/**
 * Utility function for instantiating a new multitoken with all the relevant
 * fields during parsing.
 * @param {new (value: string, tokens: Token[]) => MultiToken} Multi class to instantiate
 * @param {string} input original input string
 * @param {Token[]} tokens consecutive tokens scanned from input string
 * @returns {MultiToken}
 */function initMultiToken(t,e,r){var n=r[0].s;var i=r[r.length-1].e;var a=e.slice(n,i);return new t(a,r)}var warn=typeof console!=="undefined"&&console&&console.warn||function(){};var warnAdvice="until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.";
// Side-effect initialization state
var INIT={scanner:null,parser:null,tokenQueue:[],pluginQueue:[],customSchemes:[],initialized:false};
/**
 * @typedef {{
 * 	start: State<string>,
 * 	tokens: { groups: Collections<string> } & typeof tk
 * }} ScannerInit
 */
/**
 * @typedef {{
 * 	start: State<MultiToken>,
 * 	tokens: typeof multi
 * }} ParserInit
 */
/**
 * @typedef {(arg: { scanner: ScannerInit }) => void} TokenPlugin
 */
/**
 * @typedef {(arg: { scanner: ScannerInit, parser: ParserInit }) => void} Plugin
 */
/**
 * De-register all plugins and reset the internal state-machine. Used for
 * testing; not required in practice.
 * @private
 */function reset(){State.groups={};INIT.scanner=null;INIT.parser=null;INIT.tokenQueue=[];INIT.pluginQueue=[];INIT.customSchemes=[];INIT.initialized=false;return INIT}
/**
 * Detect URLs with the following additional protocol. Anything with format
 * "protocol://..." will be considered a link. If `optionalSlashSlash` is set to
 * `true`, anything with format "protocol:..." will be considered a link.
 * @param {string} scheme
 * @param {boolean} [optionalSlashSlash]
 */function registerCustomProtocol(t,e){if(e===void 0){e=false}if(INIT.initialized){warn('linkifyjs: already initialized - will not register custom scheme "'.concat(t,'" ').concat(warnAdvice))}if(!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t)){throw new Error('linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or "-"\n2. Cannot start or end with "-"\n3. "-" cannot repeat')}INIT.customSchemes.push([t,e])}
/**
 * Initialize the linkify state machine. Called automatically the first time
 * linkify is called on a string, but may be called manually as well.
 */function init(){
// Initialize scanner state machine and plugins
INIT.scanner=init$2(INIT.customSchemes);for(var t=0;t<INIT.tokenQueue.length;t++){INIT.tokenQueue[t][1]({scanner:INIT.scanner})}
// Initialize parser state machine and plugins
INIT.parser=init$1(INIT.scanner.tokens);for(var e=0;e<INIT.pluginQueue.length;e++){INIT.pluginQueue[e][1]({scanner:INIT.scanner,parser:INIT.parser})}INIT.initialized=true;return INIT}
/**
 * Parse a string into tokens that represent linkable and non-linkable sub-components
 * @param {string} str
 * @return {MultiToken[]} tokens
 */function tokenize(t){if(!INIT.initialized){init()}return run(INIT.parser.start,t,run$1(INIT.scanner.start,t))}tokenize.scan=run$1;// for testing
/**
 * Find a list of linkable items in the given string.
 * @param {string} str string to find links in
 * @param {string | Opts} [type] either formatting options or specific type of
 * links to find, e.g., 'url' or 'email'
 * @param {Opts} [opts] formatting options for final output. Cannot be specified
 * if opts already provided in `type` argument
 */function find(t,e,r){if(e===void 0){e=null}if(r===void 0){r=null}if(e&&typeof e==="object"){if(r){throw Error("linkifyjs: Invalid link type ".concat(e,"; must be a string"))}r=e;e=null}var n=new Options(r);var i=tokenize(t);var a=[];for(var o=0;o<i.length;o++){var u=i[o];if(u.isLink&&(!e||u.t===e)&&n.check(u)){a.push(u.toFormattedObject(n))}}return a}
//#region src/helpers/whitespace.ts
var UNICODE_WHITESPACE_PATTERN="[\0-   ᠎ -\u2029 　]";var UNICODE_WHITESPACE_REGEX=new RegExp(UNICODE_WHITESPACE_PATTERN);var UNICODE_WHITESPACE_REGEX_END=new RegExp("".concat(UNICODE_WHITESPACE_PATTERN,"$"));var UNICODE_WHITESPACE_REGEX_TRAILING=new RegExp("".concat(UNICODE_WHITESPACE_PATTERN,"+$"));var UNICODE_WHITESPACE_REGEX_GLOBAL=new RegExp(UNICODE_WHITESPACE_PATTERN,"g");
//#endregion
//#region src/helpers/unlinkTrailingWhitespace.ts
function unlinkTrailingWhitespace(t,e,r){var n,i;var a=t.doc.resolve(e.to);if(!((n=a.nodeBefore)===null||n===void 0?void 0:n.isText))return;var o=(i=t.doc.textBetween(e.from,e.to,"￼","￼").match(UNICODE_WHITESPACE_REGEX_TRAILING))===null||i===void 0?void 0:i[0];if(!o)return;var u=e.to-o.length;var s=getMarksBetween(u,e.to,t.doc).filter((function(t){return t.mark.type===r}));if(!s.length)return;var f=a.nodeAfter;if(!!f&&s.some((function(t){return t.mark.isInSet(f.marks)})))return;var l=t.storedMarks;t.removeMark(u,e.to,r);t.setStoredMarks(l);if(t.selection.empty&&t.selection.from===e.to)t.removeStoredMark(r)}
//#endregion
//#region src/helpers/autolink.ts
/**
* Check if the provided tokens form a valid link structure, which can either be a single link token
* or a link token surrounded by parentheses or square brackets.
*
* This ensures that only complete and valid text is hyperlinked, preventing cases where a valid
* top-level domain (TLD) is immediately followed by an invalid character, like a number. For
* example, with the `find` method from Linkify, entering `example.com1` would result in
* `example.com` being linked and the trailing `1` left as plain text. By using the `tokenize`
* method, we can perform more comprehensive validation on the input text.
*/function isValidLinkStructure(t){if(t.length===1)return t[0].isLink;if(t.length===3&&t[1].isLink)return["()","[]"].includes(t[0].value+t[2].value);return false}
/**
* This plugin allows you to automatically add links to your editor.
* @param options The plugin options
* @returns The plugin instance
*/function autolink(t){return new Plugin({key:new PluginKey("autolink"),appendTransaction:function(e,r,n){
/**
            * Does the transaction change the document?
            */
var i=e.some((function(t){return t.docChanged}))&&!r.doc.eq(n.doc);
/**
            * Prevent autolink if the transaction is not a document change or if the transaction has the meta `preventAutolink`.
            */var a=e.some((function(t){return t.getMeta("preventAutolink")}));
/**
            * Prevent autolink if the transaction is not a document change
            * or if the transaction has the meta `preventAutolink`.
            */if(!i||a)return;var o=n.tr;var u=combineTransactionSteps(r.doc,__spreadArray([],e,true));if(!e.some(isHistoryTransaction)){var s=[];u.steps.forEach((function(t,e){if(!(t instanceof ReplaceStep)||!t.slice.size)return;var r=u.mapping.slice(e+1);var n=r.map(t.from,1);var i=r.map(t.from+t.slice.size,-1);if(n<i)s.push({from:n,to:i})}));s.sort((function(t,e){return e.to-t.to}));s.forEach((function(e){return unlinkTrailingWhitespace(o,e,t.type)}))}getChangedRanges(u).forEach((function(e){var r=e.newRange;var i=findChildrenInRange(n.doc,r,(function(t){return t.isTextblock}));var a;var u;if(i.length>1){a=i[0];u=n.doc.textBetween(a.pos,a.pos+a.node.nodeSize,void 0," ")}else if(i.length){var s=n.doc.textBetween(r.from,r.to," "," ");if(!UNICODE_WHITESPACE_REGEX_END.test(s))return;a=i[0];u=n.doc.textBetween(a.pos,r.to,void 0," ")}if(a&&u){var f=u.split(UNICODE_WHITESPACE_REGEX).filter(Boolean);if(f.length<=0)return false;var l=f[f.length-1];var c=a.pos+u.lastIndexOf(l);if(!l)return false;var v=tokenize(l).map((function(e){return e.toObject(t.defaultProtocol)}));if(!isValidLinkStructure(v))return false;v.filter((function(t){return t.isLink})).map((function(t){return __assign(__assign({},t),{from:c+t.start+1,to:c+t.end+1})})).filter((function(t){if(!n.schema.marks.code)return true;return!n.doc.rangeHasMark(t.from,t.to,n.schema.marks.code)})).filter((function(e){return t.validate(e.value)})).filter((function(e){return t.shouldAutoLink(e.value)})).forEach((function(e){if(getMarksBetween(e.from,e.to,n.doc).some((function(e){return e.mark.type===t.type})))return;o.addMark(e.from,e.to,t.type.create({href:e.href}))}))}}));if(!o.steps.length)return;return o}})}
//#endregion
//#region src/helpers/clickHandler.ts
function clickHandler(t){return new Plugin({key:new PluginKey("handleClickLink"),props:{handleClick:function(e,r,n){if(n.button!==0)return false;if(!e.editable)return false;var i=null;if(n.target instanceof HTMLAnchorElement)i=n.target;else{var a=n.target;if(!a)return false;var o=t.editor.view.dom;i=a.closest("a");if(i&&!o.contains(i))i=null}if(!i)return false;var u=false;if(t.enableClickSelection)u=t.editor.commands.extendMarkRange(t.type.name);if(t.openOnClick){var s,f;var l=getAttributes(e.state,t.type.name);var c=(s=i.href)!==null&&s!==void 0?s:l.href;var a=(f=i.target)!==null&&f!==void 0?f:l.target;if(c){window.open(c,a);u=true}}return u}}})}
//#endregion
//#region src/helpers/markdownLink.ts
/**
* Matches a Markdown link with an optional quoted title.
* for ex: [Tiptap](https://tiptap.dev) or [Tiptap](https://tiptap.dev "some title")
* the URL may also contain one level of balanced parentheses, as in CommonMark
* (titles accept curly quotes too, the Typography extension swaps them in while typing)
* the title delimiters must come in matching pairs
*/var MARKDOWN_LINK_INPUT_REGEX=/\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)$/;
/**
* Same as the input regex but global, to find every Markdown link in pasted text.
*/var MARKDOWN_LINK_PASTE_REGEX=/\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)/g;function isEscaped(t,e){var r=0;for(var n=e-1;n>=0&&t[n]==="\\";n-=1)r+=1;return r%2===1}
/**
* Pairs the backtick runs before the match by length, as CommonMark does.
* A run left open means the match sits in an unfinished code span.
*/function isInsideCodeSpan(t,e){var r=0;var n=0;while(n<e){if(t[n]!=="`"){n+=1;continue}if(r===0&&isEscaped(t,n)){n+=1;continue}var i=0;while(n<e&&t[n]==="`"){i+=1;n+=1}if(r===0)r=i;else if(i===r)r=0}return r>0}function isConvertibleLink(t,e,r){var n,i;var a=e[1],o=e[2];if((e.index?t[e.index-1]:void 0)==="!"||isEscaped(t,(n=e.index)!==null&&n!==void 0?n:0))return false;if(isInsideCodeSpan(t,(i=e.index)!==null&&i!==void 0?i:0))return false;return!!a.trim()&&r(o)}function toRuleMatch(t){var e,r;var n=t[0],i=t[1],a=t[2],o=t[4],u=t[5],s=t[6];var f=(e=o!==null&&o!==void 0?o:u)!==null&&e!==void 0?e:s;return{index:(r=t.index)!==null&&r!==void 0?r:0,text:n,replaceWith:i,data:{href:a,title:f||null,markdown:true}}}function matchesOverlap(t,e){return t.index<e.index+e.text.length&&e.index<t.index+t.text.length}function getMarkdownLinkAttributes(t){var e,r,n;return{href:(e=t.data)===null||e===void 0?void 0:e.href,title:(r=(n=t.data)===null||n===void 0?void 0:n.title)!==null&&r!==void 0?r:null}}
/**
* Turns typed Markdown link syntax into a link mark as soon as the closing `)` comes in.
* The transaction gets flagged so autolink doesn't touch the converted text again.
*/function markdownLinkInputRule(t){var e=markInputRule({find:function(e){var r=MARKDOWN_LINK_INPUT_REGEX.exec(e);if(!r||!isConvertibleLink(e,r,t.isAllowedHref))return null;return toRuleMatch(r)},type:t.type,getAttributes:getMarkdownLinkAttributes});return new InputRule({find:e.find,handler:function(t){var r=e.handler(t);if(r!==null&&t.state.tr.steps.length)t.state.tr.setMeta("preventAutolink",true);return r}})}
/**
* Same for pasting, converts every Markdown link found in the pasted text
* and links the plain URLs from `findPlainUrls`.
*/function markdownLinkPasteRule(t){var e=markPasteRule({find:function(e){var r,n;var i=[];for(var a=0,o=e.matchAll(MARKDOWN_LINK_PASTE_REGEX);a<o.length;a++){var u=o[a];if(isConvertibleLink(e,u,t.isAllowedHref))i.push(toRuleMatch(u))}var s=((r=(n=t.findPlainUrls)===null||n===void 0?void 0:n.call(t,e))!==null&&r!==void 0?r:[]).filter((function(t){return!i.some((function(e){return matchesOverlap(e,t)}))}));return __spreadArray(__spreadArray([],i,true),s,true)},type:t.type,getAttributes:getMarkdownLinkAttributes});return new PasteRule({find:e.find,handler:function(t){var r;var n=e.handler(t);if(n!==null&&t.state.tr.steps.length&&((r=t.match.data)===null||r===void 0?void 0:r.markdown))t.state.tr.setMeta("preventAutolink",true);return n}})}
//#endregion
//#region src/helpers/pasteHandler.ts
function pasteHandler(t){return new Plugin({key:new PluginKey("handlePasteLink"),props:{handlePaste:function(e,r,n){var i=t.shouldAutoLink;var a=e.state;var o=a.selection;var u=o.empty;if(u)return false;var s="";n.content.forEach((function(t){s+=t.textContent}));var f=find(s,{defaultProtocol:t.defaultProtocol}).find((function(t){return t.isLink&&t.value===s}));if(!s||!f||i!==void 0&&!i(f.value))return false;return t.editor.commands.setMark(t.type,{href:f.href})}}})}function isAllowedUri(t,e){var r=["http","https","ftp","ftps","mailto","tel","callto","sms","cid","xmpp"];if(e)e.forEach((function(t){var e=typeof t==="string"?t:t.scheme;if(e)r.push(e)}));return!t||t.replace(UNICODE_WHITESPACE_REGEX_GLOBAL,"").match(new RegExp("^(?:(?:".concat(r.map((function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")})).join("|"),"):|[^a-z]|[a-z0-9+.\\-]+(?:[^a-z+.\\-:]|$))"),"i"))}
/**
* This extension allows you to create links.
* @see https://www.tiptap.dev/api/marks/link
*/var Link=Mark.create({name:"link",priority:1e3,keepOnSplit:false,exitable:true,onCreate:function(){if(this.options.validate&&!this.options.shouldAutoLink){this.options.shouldAutoLink=this.options.validate;console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")}this.options.protocols.forEach((function(t){if(typeof t==="string"){registerCustomProtocol(t);return}registerCustomProtocol(t.scheme,t.optionalSlashes)}))},onDestroy:function(){reset()},inclusive:function(){return this.options.autolink},addOptions:function(){return{openOnClick:true,enableClickSelection:false,linkOnPaste:true,markdownLinks:false,autolink:true,protocols:[],defaultProtocol:"http",HTMLAttributes:{target:"_blank",rel:"noopener noreferrer nofollow",class:null},isAllowedUri:function(t,e){return!!isAllowedUri(t,e.protocols)},validate:function(t){return!!t},shouldAutoLink:function(t){var e=/^[a-z][a-z0-9+.-]*:\/\//i.test(t);var r=/^[a-z][a-z0-9+.-]*:/i.test(t);if(e||r&&!t.includes("@"))return true;var n=(t.includes("@")?t.split("@").pop():t).split(/[/?#:]/)[0];if(/^\d{1,3}(\.\d{1,3}){3}$/.test(n))return false;if(!/\./.test(n))return false;return true}}},addAttributes:function(){var t,e,r;return{href:{default:null,parseHTML:function(t){return t.getAttribute("href")}},target:{default:(t=this.options.HTMLAttributes.target)!==null&&t!==void 0?t:null},rel:{default:(e=this.options.HTMLAttributes.rel)!==null&&e!==void 0?e:null},class:{default:(r=this.options.HTMLAttributes.class)!==null&&r!==void 0?r:null},title:{default:null}}},parseHTML:function(){var t=this;return[{tag:"a[href]",getAttrs:function(e){var r=e.getAttribute("href");if(!r||!t.options.isAllowedUri(r,{defaultValidate:function(e){return!!isAllowedUri(e,t.options.protocols)},protocols:t.options.protocols,defaultProtocol:t.options.defaultProtocol}))return false;return null}}]},renderHTML:function(t){var e=this;var r=t.HTMLAttributes;if(!this.options.isAllowedUri(r.href,{defaultValidate:function(t){return!!isAllowedUri(t,e.options.protocols)},protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol}))return["a",mergeAttributes(this.options.HTMLAttributes,__assign(__assign({},r),{href:""})),0];return["a",mergeAttributes(this.options.HTMLAttributes,r),0]},markdownTokenName:"link",parseMarkdown:function(t,e){return e.applyMark("link",e.parseInline(t.tokens||[]),{href:t.href,title:t.title||null})},renderMarkdown:function(t,e){var r,n,i,a;var o=(r=(n=t.attrs)===null||n===void 0?void 0:n.href)!==null&&r!==void 0?r:"";var u=(i=(a=t.attrs)===null||a===void 0?void 0:a.title)!==null&&i!==void 0?i:"";var s=e.renderChildren(t);return u?"[".concat(s,"](").concat(o,' "').concat(u,'")'):"[".concat(s,"](").concat(o,")")},addCommands:function(){var t=this;return{setLink:function(e){return function(r){var n=r.chain;var i=e.href;if(!t.options.isAllowedUri(i,{defaultValidate:function(e){return!!isAllowedUri(e,t.options.protocols)},protocols:t.options.protocols,defaultProtocol:t.options.defaultProtocol}))return false;return n().setMark(t.name,e).setMeta("preventAutolink",true).run()}},toggleLink:function(e){return function(r){var n=r.chain;var i=(e||{}).href;if(i&&!t.options.isAllowedUri(i,{defaultValidate:function(e){return!!isAllowedUri(e,t.options.protocols)},protocols:t.options.protocols,defaultProtocol:t.options.defaultProtocol}))return false;return n().toggleMark(t.name,e,{extendEmptyMarkRange:true}).setMeta("preventAutolink",true).run()}},unsetLink:function(){return function(e){var r=e.chain;return r().unsetMark(t.name,{extendEmptyMarkRange:true}).setMeta("preventAutolink",true).run()}}}},addInputRules:function(){var t=this;if(!this.options.markdownLinks)return[];return[markdownLinkInputRule({type:this.type,isAllowedHref:function(e){return t.options.isAllowedUri(e,{defaultValidate:function(e){return!!isAllowedUri(e,t.options.protocols)},protocols:t.options.protocols,defaultProtocol:t.options.defaultProtocol})}})]},addPasteRules:function(){var t=this;var e=function(e){var r=[];if(e){var n=t.options,i=n.protocols,a=n.defaultProtocol;find(e,{defaultProtocol:a}).filter((function(e){return e.isLink&&t.options.isAllowedUri(e.value,{defaultValidate:function(t){return!!isAllowedUri(t,i)},protocols:i,defaultProtocol:a})})).forEach((function(e){if(!t.options.shouldAutoLink(e.value))return;r.push({text:e.value,data:{href:e.href},index:e.start})}))}return r};if(this.options.markdownLinks)return[markdownLinkPasteRule({type:this.type,isAllowedHref:function(e){return t.options.isAllowedUri(e,{defaultValidate:function(e){return!!isAllowedUri(e,t.options.protocols)},protocols:t.options.protocols,defaultProtocol:t.options.defaultProtocol})},findPlainUrls:e})];return[markPasteRule({find:e,type:this.type,getAttributes:function(t){var e;return{href:(e=t.data)===null||e===void 0?void 0:e.href}}})]},addProseMirrorPlugins:function(){var t=this;var e=[];var r=this.options,n=r.protocols,i=r.defaultProtocol;if(this.options.autolink)e.push(autolink({type:this.type,defaultProtocol:this.options.defaultProtocol,validate:function(e){return t.options.isAllowedUri(e,{defaultValidate:function(t){return!!isAllowedUri(t,n)},protocols:n,defaultProtocol:i})},shouldAutoLink:this.options.shouldAutoLink}));e.push(clickHandler({type:this.type,editor:this.editor,openOnClick:this.options.openOnClick==="whenNotEditable"?true:this.options.openOnClick,enableClickSelection:this.options.enableClickSelection}));if(this.options.linkOnPaste)e.push(pasteHandler({editor:this.editor,defaultProtocol:this.options.defaultProtocol,type:this.type,shouldAutoLink:this.options.shouldAutoLink}));return e}});
//#region src/bullet-list/bullet-list.ts
var ListItemName$1="listItem";var TextStyleName$1="textStyle";
/**
* Matches a bullet list to a dash or asterisk.
*/var bulletListInputRegex=/^\s*([-+*])\s$/;
/**
* This extension allows you to create bullet lists.
* This requires the ListItem extension
* @see https://tiptap.dev/api/nodes/bullet-list
* @see https://tiptap.dev/api/nodes/list-item.
*/var BulletList=Node$1.create({name:"bulletList",addOptions:function(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:false,keepAttributes:false}},group:"block list",content:function(){return"".concat(this.options.itemTypeName,"+")},parseHTML:function(){return[{tag:"ul"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["ul",mergeAttributes(this.options.HTMLAttributes,e),0]},markdownTokenName:"list",parseMarkdown:function(t,e){if(t.type!=="list"||t.ordered)return[];return{type:"bulletList",content:t.items?e.parseChildren(t.items):[]}},renderMarkdown:function(t,e){if(!t.content)return"";return e.renderChildren(t.content,"\n")},markdownOptions:{indentsContent:true},addCommands:function(){var t=this;return{toggleBulletList:function(){return function(e){var r=e.commands,n=e.chain;if(t.options.keepAttributes)return n().toggleList(t.name,t.options.itemTypeName,t.options.keepMarks).updateAttributes(ListItemName$1,t.editor.getAttributes(TextStyleName$1)).run();return r.toggleList(t.name,t.options.itemTypeName,t.options.keepMarks)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Shift-8":function(){return t.editor.commands.toggleBulletList()}}},addInputRules:function(){var t=this;var e=wrappingInputRule({find:bulletListInputRegex,type:this.type});if(this.options.keepMarks||this.options.keepAttributes)e=wrappingInputRule({find:bulletListInputRegex,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:function(){return t.editor.getAttributes(TextStyleName$1)},editor:this.editor});return[e]}});
//#endregion
//#region src/helpers/getBranchingNestedListAtCursor.ts
/**
* Resolves a branching nested list immediately after the cursor when the selection is
* collapsed at the end of a textblock inside a list item.
*
* @param state - The editor state to inspect.
* @param itemName - The list item node name (for example `listItem` or `taskItem`).
* @param wrapperNames - List wrapper node names (for example `bulletList` and `orderedList`).
* @returns Resolved positions and nodes for hoisting, or `null` when not applicable.
*
* @example
* ```ts
* const context = getBranchingNestedListAtCursor(editor.state, 'listItem', [
*   'bulletList',
*   'orderedList',
* ])
*
* if (context) {
*   // cursor is at the end of Item 1 before a branching nested sublist
* }
* ```
*/var getBranchingNestedListAtCursor=function(t,e,r){var n=t.selection;if(!n.empty)return null;var i=n.$from;if(!i.parent.isTextblock)return null;if(i.parentOffset!==i.parent.content.size)return null;var a=-1;for(var o=i.depth;o>0;o-=1)if(i.node(o).type.name===e){a=o;break}if(a<0)return null;var u=i.node(a);var s=i.index(a);if(s+1>=u.childCount)return null;var f=u.child(s+1);if(!r.includes(f.type.name))return null;var l=t.schema.nodes[e];var c=false;f.forEach((function(t){if(t.type===l&&t.childCount>1)c=true}));if(!c)return null;var v=t.doc.resolve(i.after()).nodeAfter;if(!v||!r.includes(v.type.name))return null;var h=[];v.forEach((function(t){h.push(t)}));if(h.length===0)return null;return{listItemDepth:a,nestedList:v,nestedListPos:i.after(),insertPos:i.after(a),items:h}};
//#endregion
//#region src/helpers/hoistBranchingNestedList.ts
/**
* Hoists all list items from a branching nested list after the cursor into the parent list.
*
* Use this when `joinForward` cannot restructure a nested list that contains list items
* with sublists (see issue #6906).
*
* @param state - The editor state to transform.
* @param dispatch - Optional dispatch function for the transaction.
* @param itemName - The list item node name (for example `listItem` or `taskItem`).
* @param wrapperNames - List wrapper node names (for example `bulletList` and `orderedList`).
* @returns `true` when the nested list was hoisted, otherwise `false`.
*
* @example
* ```ts
* // Cursor at the end of "Item 1" before a nested list with branching items.
* hoistBranchingNestedList(editor.state, editor.view.dispatch, 'listItem', [
*   'bulletList',
*   'orderedList',
* ])
* ```
*/var hoistBranchingNestedList=function(t,e,r,n){var i=getBranchingNestedListAtCursor(t,r,n);if(!i)return false;var a=t.selection;var o=i.nestedList,u=i.nestedListPos,s=i.insertPos,f=i.items;var l=t.tr;l.delete(u,u+o.nodeSize);var c=l.mapping.map(s);l.insert(c,Fragment.from(f));l.setSelection(a.map(l.doc,l.mapping));if(e)e(l);return true};
//#endregion
//#region src/helpers/handleDeleteBranchingNestedList.ts
/**
* Handles Delete for a list item when a branching nested sublist follows the cursor.
*
* @param editor - The editor instance whose state should be updated.
* @param itemName - The list item node name (for example `listItem` or `taskItem`).
* @param wrapperNames - List wrapper node names (for example `bulletList` and `orderedList`).
* @returns `true` when the nested list was hoisted, otherwise `false`.
*
* @example
* ```ts
* Delete: () =>
*   handleDeleteBranchingNestedList(editor, 'listItem', ['bulletList', 'orderedList']),
* ```
*/var handleDeleteBranchingNestedList=function(t,e,r){return hoistBranchingNestedList(t.state,t.view.dispatch,e,r)};
//#endregion
//#region src/helpers/createBranchingListDeleteKeymap.ts
/**
* Creates a high-priority keymap extension that handles Delete for branching nested lists.
* Kept separate from the list item node so Enter/Tab shortcuts keep their default priority.
*/var createBranchingListDeleteKeymap=function(t,e){return Extension.create({name:"".concat(t,"BranchingDeleteKeymap"),priority:101,addKeyboardShortcuts:function(){var r=this;var n=function(){return handleDeleteBranchingNestedList(r.editor,t,e)};return{Delete:n,"Mod-Delete":n}}})};
//#endregion
//#region src/ordered-list/roman.ts
var ROMAN_NUMERALS=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]];var ALPHA_NUMERALS="abcdefghijklmnopqrstuvwxyz";
/**
* Marker segment for ordered list lines: numeric, roman, or 1–2 letter alpha.
* Roman is matched before alpha so "iii" is roman; invalid romans like "aa" fall through to alpha.
*/var ORDERED_LIST_MARKER_PATTERN=String.raw(templateObject_1||(templateObject_1=__makeTemplateObject(["d+|[ivxlcdmIVXLCDM]+|",""],["\\d+|[ivxlcdmIVXLCDM]+|",""])),"[a-zA-Z]{1,2}");
/**
* Convert a number to lowercase roman numerals.
* @example toRoman(1) // 'i'
* @example toRoman(4) // 'iv'
*/function toRoman(t){var e=t;var r="";for(var n=0,i=ROMAN_NUMERALS;n<i.length;n++){var a=i[n],o=a[0],u=a[1];while(e>=o){r+=u;e-=o}}return r}
/**
* Convert a number to uppercase roman numerals.
* @example toRomanUpper(1) // 'I'
* @example toRomanUpper(4) // 'IV'
*/function toRomanUpper(t){return toRoman(t).toUpperCase()}function fromRoman(t){var e=t.toLowerCase();var r=0;var n=0;while(r<e.length){var i=false;for(var a=0,o=ROMAN_NUMERALS;a<o.length;a++){var u=o[a],s=u[0],f=u[1];if(e.startsWith(f,r)){n+=s;r+=f.length;i=true;break}}if(!i)return 0}return n}function isValidRoman(t){if(!/^[ivxlcdmIVXLCDM]+$/.test(t))return false;var e=fromRoman(t);if(e<=0)return false;return(t===t.toLowerCase()?toRoman(e):toRomanUpper(e))===t}function fromAlpha(t){var e=t.toLowerCase();if(e.length===1)return e.charCodeAt(0)-"a".charCodeAt(0)+1;if(e.length===2){var r=e.charCodeAt(0)-"a".charCodeAt(0);var n=e.charCodeAt(1)-"a".charCodeAt(0);return(r+1)*26+n+1}return 0}function toRomanAlpha(t){if(t<=26)return ALPHA_NUMERALS[t-1];var e=Math.floor((t-1)/26)-1;var r=(t-1)%26;if(e<0)return ALPHA_NUMERALS[r];return ALPHA_NUMERALS[e]+ALPHA_NUMERALS[r]}
/**
* Extract the list marker type from a marker string.
* Supports "1", "a", "A", "i", "I" marker styles.
*
* @param marker The text content of the list marker (e.g. "a", "1", "iii", "b")
* @returns The normalized type string, or undefined for default numeric type
*/function detectMarkerType(t){if(!t||/^\d+$/.test(t))return;if(isValidRoman(t))return t===t.toLowerCase()?"i":"I";if(/^[a-z]{1,2}$/.test(t))return"a";if(/^[A-Z]{1,2}$/.test(t))return"A"}
/**
* Convert a list marker string to its numeric start position.
*
* @param marker The text content of the list marker (e.g. "3", "b", "II")
* @returns The 1-based start value for the ordered list
*/function markerToStart(t){if(/^\d+$/.test(t))return parseInt(t,10);var e=detectMarkerType(t);if(e==="i"||e==="I")return fromRoman(t);if(e==="a"||e==="A"){var r=fromAlpha(t);return r>0?r:1}var n=parseInt(t,10);return Number.isNaN(n)?1:n}function startToMarker(t,e){if(t==="numeric")return String(e);switch(t){case"a":return toRomanAlpha(e);case"A":return toRomanAlpha(e).toUpperCase();case"i":return toRoman(e);case"I":return toRomanUpper(e);default:return String(e)}}
/**
* Returns true when all markers share the same style and increment by 1.
* Style is inferred from the first marker so ambiguous letters (e.g. "c", "i")
* are not re-classified differently on later lines.
*/function areOrderedListMarkersSequential(t){var e;if(t.length===0)return false;var r=(e=detectMarkerType(t[0]))!==null&&e!==void 0?e:"numeric";var n=markerToStart(t[0]);if(n<1)return false;for(var i=0;i<t.length;i++){var a=startToMarker(r,n+i);if(t[i]!==a)return false}return true}
/**
* Parse a list marker into HTML ordered-list attrs (type + start).
*/function parseListMarker(t){return{type:detectMarkerType(t),start:markerToStart(t)}}
/**
* Build orderedList node attrs from the first list item marker.
*/function buildOrderedListAttrsFromMarker(t){var e=parseListMarker(t),r=e.type,n=e.start;var i={};if(r)i.type=r;if(n!==1)i.start=n;return i}
/**
* Returns the list marker prefix for a given item at a given index.
*
* @param type The list type attribute (e.g. "a", "A", "i", "I", null/undefined for default)
* @param index The zero-based index of the list item
* @param separator The separator to use (default: ". ")
* @returns The marker string (e.g. "a. ", "I. ", "1. ")
*/function getListMarker(t,e,r){if(r===void 0){r=". "}var n=e+1;if(!t||t==="1")return"".concat(n).concat(r);switch(t){case"a":return"".concat(toRomanAlpha(n)).concat(r);case"A":return"".concat(toRomanAlpha(n).toUpperCase()).concat(r);case"i":return"".concat(toRoman(n)).concat(r);case"I":return"".concat(toRomanUpper(n)).concat(r);default:return"".concat(n).concat(r)}}
//#endregion
//#region src/item/ensureLeadingParagraph.ts
function ensureLeadingParagraph(t){if(!t[0]||t[0].type==="paragraph")return t;return __spreadArray([{type:"paragraph",content:[]}],t,true)}
//#endregion
//#region src/item/hasEmptyLeadingParagraph.ts
function hasEmptyLeadingParagraph(t){var e,r;var n=(e=t.content)===null||e===void 0?void 0:e[0];return(n===null||n===void 0?void 0:n.type)==="paragraph"&&!((r=n.content)===null||r===void 0?void 0:r.length)}
//#endregion
//#region src/item/list-item.ts
var EMPTY_ITEM_TEXT="&nbsp;";var TOP_LEVEL=1;var isNested=function(t){var e;return((e=t===null||t===void 0?void 0:t.level)!==null&&e!==void 0?e:TOP_LEVEL)>TOP_LEVEL};function isSameLineOrderedListToken(t){var e,r;var n=(e=t.tokens)===null||e===void 0?void 0:e[0];return Boolean(t.text&&((r=t.tokens)===null||r===void 0?void 0:r.length)===1&&(n===null||n===void 0?void 0:n.type)==="list"&&n.ordered&&n.raw===t.text)}function parseSameLineOrderedListText(t,e){if(e.tokenizeInline)return e.parseInline(e.tokenizeInline(t));return e.parseInline([{type:"text",raw:t,text:t}])}
/**
* This extension allows you to create list items.
* @see https://www.tiptap.dev/api/nodes/list-item
*/var ListItem=Node$1.create({name:"listItem",addOptions:function(){return{HTMLAttributes:{},bulletListTypeName:"bulletList",orderedListTypeName:"orderedList"}},content:"paragraph block*",defining:true,parseHTML:function(){return[{tag:"li"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["li",mergeAttributes(this.options.HTMLAttributes,e),0]},markdownTokenName:"list_item",parseMarkdown:function(t,e){var r;if(t.type!=="list_item")return[];var n=(r=e.parseBlockChildren)!==null&&r!==void 0?r:e.parseChildren;var i=[];if(t.tokens&&t.tokens.length>0){if(isSameLineOrderedListToken(t))return{type:"listItem",content:[{type:"paragraph",content:parseSameLineOrderedListText(t.text||"",e)}]};var a=t.tokens,o=a[0],u=a.slice(1);if(o.type==="heading"){var s;return{type:"listItem",content:__spreadArray([{type:"paragraph",content:e.parseInline((s=o.tokens)!==null&&s!==void 0?s:[])}],u.length>0?n(u):[],true)}}if(t.tokens.some((function(t){return t.type==="paragraph"})))i=n(t.tokens);else if(o.type==="text"&&o.tokens&&o.tokens.length>0){i=[{type:"paragraph",content:e.parseInline(o.tokens)}];if(t.tokens.length>1){var f=n(t.tokens.slice(1));i.push.apply(i,f)}}else i=n(t.tokens)}if(i.length===0)i=[{type:"paragraph",content:[]}];return{type:"listItem",content:ensureLeadingParagraph(i)}},renderMarkdown:function(t,e,r){var n=function(t){if(t.parentType==="bulletList")return"- ";if(t.parentType==="orderedList"){var e,r;var n=((e=t.meta)===null||e===void 0||(e=e.parentAttrs)===null||e===void 0?void 0:e.start)||1;return getListMarker((r=t.meta)===null||r===void 0||(r=r.parentAttrs)===null||r===void 0?void 0:r.type,n-1+(t.index||0),". ")}return"- "};var i=renderNestedMarkdownContent(t,e,n,r,{alignNestedToPrefix:(r===null||r===void 0?void 0:r.parentType)==="orderedList"});if(!hasEmptyLeadingParagraph(t)||!isNested(r))return i;var a=n(r);return"".concat(a).concat(EMPTY_ITEM_TEXT).concat(i.slice(a.length))},addExtensions:function(){return[createBranchingListDeleteKeymap(this.name,[this.options.bulletListTypeName,this.options.orderedListTypeName])]},addKeyboardShortcuts:function(){var t=this;return{Enter:function(){return t.editor.commands.splitListItem(t.name)},Tab:function(){return t.editor.commands.sinkListItem(t.name)},"Shift-Tab":function(){return t.editor.commands.liftListItem(t.name)}}}});
//#endregion
//#region src/keymap/listHelpers/findListItemPos.ts
var findListItemPos=function(t,e){var r=e.selection.$from;var n=getNodeType(t,e.schema);var i=null;var a=r.depth;var o=r.pos;var u=null;while(a>0&&u===null){i=r.node(a);if(i.type===n)u=a;else{a-=1;o-=1}}if(u===null)return null;return{$pos:e.doc.resolve(o),depth:u}};
//#endregion
//#region src/keymap/listHelpers/getNextListDepth.ts
var getNextListDepth=function(t,e){var r=findListItemPos(t,e);if(!r)return false;var n=getNodeAtPosition(e,t,r.$pos.pos+4),i=n[1];return i};
//#endregion
//#region src/keymap/listHelpers/hasListBefore.ts
var hasListBefore=function(t,e,r){var n=t.selection.$anchor;var i=Math.max(0,n.pos-2);var a=t.doc.resolve(i).node();if(!a||!r.includes(a.type.name))return false;return true};
//#endregion
//#region src/keymap/listHelpers/handleBackspace.ts
var handleBackspace=function(t,e,r){if(t.commands.undoInputRule())return true;if(t.state.selection.from!==t.state.selection.to)return false;if(!isNodeActive(t.state,e)&&hasListBefore(t.state,e,r)){var n=t.state.selection.$anchor;var i=t.state.doc.resolve(n.before()-1);var a=[];i.node().descendants((function(t,r){if(t.type.name===e)a.push({node:t,pos:r})}));var o=a.at(-1);if(!o)return false;var u=t.state.doc.resolve(i.start()+o.pos+1);return t.chain().command((function(t){var e=t.tr;var r=u.end();e.delete(n.before(),n.after()).insert(r,n.parent);e.setSelection(TextSelection.create(e.doc,r+1));return true})).command((function(t){var e=t.state,r=t.dispatch;joinTextblockBackward(e,r);return true})).run()}if(!isNodeActive(t.state,e))return false;if(!isAtStartOfNode(t.state))return false;var s=t.state.selection.$from;var f=s.depth-1;if(s.node(f).type!==t.schema.nodes[e]||s.index(f)!==0)return false;return t.chain().liftListItem(e).run()};
//#endregion
//#region src/keymap/listHelpers/nextListIsDeeper.ts
var nextListIsDeeper=function(t,e){var r=getNextListDepth(t,e);var n=findListItemPos(t,e);if(!n||!r)return false;if(r>n.depth)return true;return false};
//#endregion
//#region src/keymap/listHelpers/nextListIsHigher.ts
var nextListIsHigher=function(t,e){var r=getNextListDepth(t,e);var n=findListItemPos(t,e);if(!n||!r)return false;if(r<n.depth)return true;return false};
//#endregion
//#region src/keymap/listHelpers/handleDelete.ts
var handleDelete=function(t,e){if(!isNodeActive(t.state,e))return false;if(!isAtEndOfNode(t.state,e))return false;if(!t.state.selection.empty)return false;if(nextListIsDeeper(e,t.state))return t.chain().focus(t.state.selection.from+4).lift(e).joinBackward().run();if(nextListIsHigher(e,t.state))return t.commands.command((function(t){var e=t.state,r=t.dispatch;return joinTextblockForward(e,r)}));return t.commands.joinItemForward()};
//#endregion
//#region src/keymap/listHelpers/handleTab.ts
var handleTab=function(t,e,r){var n=t.state;var i=n.selection;if(!i.empty)return false;var a=i.$from;if(a.parentOffset!==0)return false;if(!a.parent.isTextblock)return false;if(isNodeActive(n,e))return false;var o=getPreviousBlockSibling(a);if(!o||!r.includes(o.type.name))return false;var u=o.lastChild;if(!u||u.type.name!==e)return false;var s=a.parent;if(!u.canReplace(u.childCount,u.childCount,Fragment.from(s)))return false;var f=a.before();var l=a.after();var c=f-2;return t.commands.command((function(t){var e=t.tr,r=t.dispatch;if(r){e.delete(f,l).insert(c,Fragment.from(s));e.setSelection(TextSelection.create(e.doc,c+1));e.scrollIntoView()}return true}))};
//#endregion
//#region src/keymap/list-keymap.ts
/**
* This extension registers custom keymaps to change the behaviour of the backspace and delete keys.
* By default Prosemirror keyhandling will always lift or sink items so paragraphs are joined into
* the adjacent or previous list item. This extension will prevent this behaviour and instead will
* try to join paragraphs from two list items into a single list item.
* @see https://www.tiptap.dev/api/extensions/list-keymap
*/var ListKeymap=Extension.create({name:"listKeymap",addOptions:function(){return{listTypes:[{itemName:"listItem",wrapperNames:["bulletList","orderedList"]},{itemName:"taskItem",wrapperNames:["taskList"]}]}},addKeyboardShortcuts:function(){var t=this;return{Delete:function(e){var r=e.editor;var n=false;t.options.listTypes.forEach((function(t){var e=t.itemName;if(r.state.schema.nodes[e]===void 0)return;if(handleDelete(r,e))n=true}));return n},"Mod-Delete":function(e){var r=e.editor;var n=false;t.options.listTypes.forEach((function(t){var e=t.itemName;if(r.state.schema.nodes[e]===void 0)return;if(handleDelete(r,e))n=true}));return n},Backspace:function(e){var r=e.editor;var n=false;t.options.listTypes.forEach((function(t){var e=t.itemName,i=t.wrapperNames;if(r.state.schema.nodes[e]===void 0)return;if(handleBackspace(r,e,i))n=true}));return n},"Mod-Backspace":function(e){var r=e.editor;var n=false;t.options.listTypes.forEach((function(t){var e=t.itemName,i=t.wrapperNames;if(r.state.schema.nodes[e]===void 0)return;if(handleBackspace(r,e,i))n=true}));return n},Tab:function(e){var r=e.editor;for(var n=0,i=t.options.listTypes;n<i.length;n++){var a=i[n],o=a.itemName,u=a.wrapperNames;if(r.state.schema.nodes[o]===void 0)continue;if(handleTab(r,o,u))return true}return false}}}});
//#endregion
//#region src/ordered-list/utils.ts
/**
* Matches an ordered list item line with optional leading whitespace.
* Captures: (1) indentation spaces, (2) item marker (number, letter, or roman numeral),
* (3) separator (. or )), (4) content after marker
*
* Examples: "1. Item", "  a) Nested item", "    I. Roman item", "iii. Another", "aa. Item 27"
*/var ORDERED_LIST_ITEM_REGEX=new RegExp("^(\\s*)(".concat(ORDERED_LIST_MARKER_PATTERN,")([.)])\\s+(.*)$"));
/**
* Matches any line that starts with whitespace (indented content).
* Used to identify continuation content that belongs to a list item.
*/var INDENTED_LINE_REGEX=/^\s/;
/**
* This are blocks that can interrupt a paragraph, so a line starting with one of
* them can never be lazy continuation text of a list item
*/var PARAGRAPH_INTERRUPTERS={heading:/^#{1,6}(?:\s|$)/,bulletItem:/^[-+*]\s+/,codeFence:/^(?:```|~~~)/,blockMath:/^\$\$/,thematicBreak:/^(?:(?:-[ \t]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})$/};function isOrderedListMarkerLine(t){return ORDERED_LIST_ITEM_REGEX.test(t.trimStart())}function isBlockContentLine(t){var e=t.trimStart();return PARAGRAPH_INTERRUPTERS.bulletItem.test(e)||isOrderedListMarkerLine(e)||PARAGRAPH_INTERRUPTERS.heading.test(e)||PARAGRAPH_INTERRUPTERS.thematicBreak.test(e)&&!e.startsWith("-")||/^>\s?/.test(e)||PARAGRAPH_INTERRUPTERS.codeFence.test(e)||PARAGRAPH_INTERRUPTERS.blockMath.test(e)}function interruptsLazyContinuation(t){return Object.values(PARAGRAPH_INTERRUPTERS).some((function(e){return e.test(t)}))}function splitItemContent(t){var e=[];var r=[];var n=false;t.forEach((function(t){if(n){r.push(t);return}if(t.trim()===""){n=true;r.push(t);return}if(e.length>0&&isBlockContentLine(t)){n=true;r.push(t);return}e.push(t)}));return{paragraphLines:e,blockLines:r}}
/**
* Collects all ordered list items from lines, parsing them into a flat array
* with indentation information. Stops collecting continuation content when
* encountering nested list items, allowing them to be processed separately.
*
* @param lines - Array of source lines to parse
* @returns Tuple of [listItems array, number of lines consumed]
*/function collectOrderedListItems(t){var e=[];var r=0;var n=0;while(r<t.length){var i=t[r];var a=i.match(ORDERED_LIST_ITEM_REGEX);if(!a)break;var o=a[1],u=a[2],s=a[3],f=a[4];var l=o.length;var c=parseInt(u,10);var v=isNaN(c)?detectMarkerType(u):void 0;var h=isNaN(c)?markerToStart(u):c;var d=[f];var p=r+1;var g=[i];var m=false;while(p<t.length){var b=t[p];if(b.match(ORDERED_LIST_ITEM_REGEX))break;if(b.trim()===""){g.push(b);d.push("");m=true;p+=1}else if(b.match(INDENTED_LINE_REGEX)){var w=b.length-b.trimStart().length;var S=l+u.length+1;g.push(b);d.push(b.slice(Math.min(w,S)));p+=1}else{if(m||interruptsLazyContinuation(b))break;g.push(b);d.push(b);p+=1}}e.push({indent:l,number:h,type:v,content:d.join("\n").trim(),contentLines:d,raw:g.join("\n")});n=p;r=p}return[e,n]}var PLAIN_TEXT_ORDERED_LIST_LINE_REGEX=new RegExp("^(".concat(ORDERED_LIST_MARKER_PATTERN,")([.)])\\s+(.+)$"));
/**
* Parse plain-text pasted ordered list lines into JSONContent, or null if not a typed list.
*/function parsePlainTextOrderedListPaste(t){var e=t.split("\n").filter((function(t){return t.trim().length>0}));if(e.length===0)return null;var r=[];for(var n=0,i=e;n<i.length;n++){var a=i[n];var o=a.trim().match(PLAIN_TEXT_ORDERED_LIST_LINE_REGEX);if(!o)return null;r.push({marker:o[1],content:o[3]})}if(!areOrderedListMarkersSequential(r.map((function(t){return t.marker}))))return null;return{type:"orderedList",attrs:buildOrderedListAttrsFromMarker(r[0].marker),content:r.map((function(t){return{type:"listItem",content:[{type:"paragraph",content:[{type:"text",text:t.content}]}]}}))}}
/**
* Recursively builds a nested structure from a flat array of list items
* based on their indentation levels. Creates proper markdown tokens with
* nested lists where appropriate.
*
* @param items - Flat array of list items with indentation info
* @param baseIndent - The indentation level to process at this recursion level
* @param lexer - Markdown lexer for parsing inline and block content
* @returns Array of list_item tokens with proper nesting
*/function buildNestedStructure(t,e,r){var n=[];var i=0;while(i<t.length){var a=t[i];if(a.indent===e){var o=splitItemContent(a.contentLines),u=o.paragraphLines,s=o.blockLines;var f=u.join("\n").trim();var l=[];if(f)l.push({type:"paragraph",raw:f,tokens:r.inlineTokens(f)});var c=s.join("\n").trim();if(c){var v=r.blockTokens(c);l.push.apply(l,v)}var h=i+1;var d=[];while(h<t.length&&t[h].indent>e){d.push(t[h]);h+=1}if(d.length>0){var p=buildNestedStructure(d,Math.min.apply(Math,d.map((function(t){return t.indent}))),r);l.push({type:"list",ordered:true,start:d[0].number,typeMarker:d[0].type,items:p,raw:d.map((function(t){return t.raw})).join("\n")})}n.push({type:"list_item",raw:a.raw,tokens:l});i=h}else i+=1}return n}
/**
* Parses markdown list item tokens into Tiptap JSONContent structure,
* ensuring text content is properly wrapped in paragraph nodes.
*
* @param items - Array of markdown tokens representing list items
* @param helpers - Markdown parse helpers for recursive parsing
* @returns Array of listItem JSONContent nodes
*/function parseListItems(t,e){return t.map((function(t){if(t.type!=="list_item")return e.parseChildren([t])[0];var r=[];if(t.tokens&&t.tokens.length>0)t.tokens.forEach((function(t){if(t.type==="paragraph"||t.type==="list"||t.type==="blockquote"||t.type==="code")r.push.apply(r,e.parseChildren([t]));else if(t.type==="text"&&t.tokens){var n=e.parseChildren([t]);r.push({type:"paragraph",content:n})}else{var i=e.parseChildren([t]);if(i.length>0)r.push.apply(r,i)}}));return{type:"listItem",content:r}}))}
//#endregion
//#region src/ordered-list/collectOrderedListItemsFromSource.ts
var ORDERED_LIST_SCAN_WINDOW=64;function takeLines(t,e){var r=[];var n=0;while(r.length<e){var i=t.indexOf("\n",n);if(i===-1){r.push(t.slice(n));return r}r.push(t.slice(n,i));n=i+1}return r}
/**
* Collect ordered list items from the start of `source`, reading only the lines the list needs.
*
* @param source Markdown beginning at a block boundary.
* @returns The items, how many lines they consumed, and the lines that were read.
* @example
*   collectOrderedListItemsFromSource('1. one\n2. two\n\nAfter')
*   // → [[item, item], 3, ['1. one', '2. two', '', 'After']]
*/function collectOrderedListItemsFromSource(t){var e=t.indexOf("\n");var r=e===-1?t:t.slice(0,e);if(!ORDERED_LIST_ITEM_REGEX.test(r))return[[],0,[]];var n=ORDERED_LIST_SCAN_WINDOW;var i=takeLines(t,n);var a=collectOrderedListItems(i);while(a[1]===i.length&&i.length===n){n*=2;i=takeLines(t,n);a=collectOrderedListItems(i)}return[a[0],a[1],i]}
//#endregion
//#region src/ordered-list/ordered-list.ts
var ListItemName="listItem";var TextStyleName="textStyle";
/**
* Matches an ordered list to a 1. on input (or any number followed by a dot).
*/var orderedListInputRegex=/^(\d+)\.\s$/;
/**
* Maps CSS list-style-type values to HTML type attribute values.
* Google Docs and Word often use CSS instead of the HTML type attribute.
*/function cssListStyleTypeToHtmlType(t){var e=t.match(/list-style-type\s*:\s*([^;]+)/i);if(!e)return null;switch(e[1].trim().toLowerCase()){case"upper-roman":return"I";case"lower-roman":return"i";case"upper-alpha":case"upper-latin":return"A";case"lower-alpha":case"lower-latin":return"a";default:return null}}
/**
* This extension allows you to create ordered lists.
* This requires the ListItem extension
* @see https://www.tiptap.dev/api/nodes/ordered-list
* @see https://www.tiptap.dev/api/nodes/list-item
*/var OrderedList=Node$1.create({name:"orderedList",addOptions:function(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:false,keepAttributes:false}},group:"block list",content:function(){return"".concat(this.options.itemTypeName,"+")},addAttributes:function(){return{start:{default:1,parseHTML:function(t){return t.hasAttribute("start")?parseInt(t.getAttribute("start")||"",10):1}},type:{default:null,parseHTML:function(t){var e=t.getAttribute("type");if(e)return e;var r=t.getAttribute("style");if(r){var n=cssListStyleTypeToHtmlType(r);if(n)return n}var i=t.querySelector("li");if(i){var a=i.getAttribute("style");if(a){var o=cssListStyleTypeToHtmlType(a);if(o)return o}}return null}}}},parseHTML:function(){return[{tag:"ol"}]},renderHTML:function(t){var e=t.HTMLAttributes;var r=e.start,n=e.type,i=__rest(e,["start","type"]);var a=mergeAttributes(this.options.HTMLAttributes,i);if(r!==1)a.start=r;if(n&&n!=="1")a.type=n;return["ol",a,0]},markdownTokenName:"list",parseMarkdown:function(t,e){if(t.type!=="list"||!t.ordered)return[];var r=t.start||1;var n=t.typeMarker;var i=t.items?parseListItems(t.items,e):[];var a={};if(r!==1)a.start=r;if(n)a.type=n;if(Object.keys(a).length>0)return{type:"orderedList",attrs:a,content:i};return{type:"orderedList",content:i}},renderMarkdown:function(t,e){if(!t.content)return"";return e.renderChildren(t.content,"\n")},markdownTokenizer:{name:"orderedList",level:"block",start:function(){return-1},tokenize:function(t,e,r){var n,i;var a=collectOrderedListItemsFromSource(t),o=a[0],u=a[1],s=a[2];if(o.length===0)return;var f=buildNestedStructure(o,o[0].indent,r);if(f.length===0)return;return{type:"list",ordered:true,start:((n=o[0])===null||n===void 0?void 0:n.number)||1,typeMarker:(i=o[0])===null||i===void 0?void 0:i.type,items:f,raw:s.slice(0,u).join("\n")}}},markdownOptions:{indentsContent:true},addCommands:function(){var t=this;return{toggleOrderedList:function(){return function(e){var r=e.commands,n=e.chain;if(t.options.keepAttributes)return n().toggleList(t.name,t.options.itemTypeName,t.options.keepMarks).updateAttributes(ListItemName,t.editor.getAttributes(TextStyleName)).run();return r.toggleList(t.name,t.options.itemTypeName,t.options.keepMarks)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Shift-7":function(){return t.editor.commands.toggleOrderedList()}}},addProseMirrorPlugins:function(){return[new Plugin({props:{handlePaste:function(t,e){var r,n;var i=(r=e.clipboardData)===null||r===void 0?void 0:r.getData("text/html");if(i===null||i===void 0?void 0:i.trim())return false;var a=(n=e.clipboardData)===null||n===void 0?void 0:n.getData("text/plain");if(!a)return false;var o=parsePlainTextOrderedListPaste(a);if(!o)return false;try{var u=t.state.schema.nodeFromJSON(o);var s=t.state.tr.replaceSelectionWith(u);t.dispatch(s);return true}catch(t){return false}}}})]},addInputRules:function(){var t=this;var e=function(t,e){return(!e.attrs.type||e.attrs.type==="1")&&e.childCount+e.attrs.start===+t[1]};var r=wrappingInputRule({find:orderedListInputRegex,type:this.type,getAttributes:function(t){return{start:+t[1]}},joinPredicate:e});if(this.options.keepMarks||this.options.keepAttributes)r=wrappingInputRule({find:orderedListInputRegex,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:function(e){return __assign({start:+e[1]},t.editor.getAttributes(TextStyleName))},joinPredicate:e,editor:this.editor});return[r]}});
//#endregion
//#region src/task-item/task-item.ts
/**
* Matches a task item to a - [ ] on input.
*/var inputRegex$1=/^\s*(\[([( |x])?\])\s$/;
/**
* Hides the checkbox label visually while keeping it in the accessibility tree.
*/var visuallyHiddenStyle="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0";var getCheckboxLabel=function(t,e,r){var n;return(r===null||r===void 0||(n=r.checkboxLabel)===null||n===void 0?void 0:n.call(r,t,e))||"Task item checkbox for ".concat(t.textContent||"empty task item")};
/**
* This extension allows you to create task items.
* @see https://www.tiptap.dev/api/nodes/task-item
*/var TaskItem=Node$1.create({name:"taskItem",addOptions:function(){return{nested:false,HTMLAttributes:{},taskListTypeName:"taskList",a11y:void 0}},content:function(){return this.options.nested?"paragraph block*":"paragraph+"},defining:true,addAttributes:function(){return{checked:{default:false,keepOnSplit:false,parseHTML:function(t){var e=t.getAttribute("data-checked");return e===""||e==="true"},renderHTML:function(t){return{"data-checked":t.checked}}}}},parseHTML:function(){return[{tag:'li[data-type="'.concat(this.name,'"]'),priority:51,contentElement:function(t){var e;return(e=t.querySelector("div"))!==null&&e!==void 0?e:t}}]},renderHTML:function(t){var e=t.node,r=t.HTMLAttributes;return["li",mergeAttributes(this.options.HTMLAttributes,r,{"data-type":this.name}),["label",["input",{type:"checkbox",checked:e.attrs.checked?"checked":null}],["span"]],["div",0]]},parseMarkdown:function(t,e){var r=[];if(t.tokens&&t.tokens.length>0)r.push(e.createNode("paragraph",{},e.parseInline(t.tokens)));else if(t.text)r.push(e.createNode("paragraph",{},[e.createNode("text",{text:t.text})]));else r.push(e.createNode("paragraph",{},[]));if(t.nestedTokens&&t.nestedTokens.length>0){var n=e.parseChildren(t.nestedTokens);r.push.apply(r,n)}return e.createNode("taskItem",{checked:t.checked||false},r)},renderMarkdown:function(t,e){var r;var n="- [".concat(((r=t.attrs)===null||r===void 0?void 0:r.checked)?"x":" ","] ");return renderNestedMarkdownContent(t,e,n,void 0,{indentMainContent:true})},addExtensions:function(){if(!this.options.nested)return[];return[createBranchingListDeleteKeymap(this.name,[this.options.taskListTypeName])]},addKeyboardShortcuts:function(){var t=this;var e={Enter:function(){return t.editor.commands.splitListItem(t.name)},"Shift-Tab":function(){return t.editor.commands.liftListItem(t.name)}};if(!this.options.nested)return e;return __assign(__assign({},e),{Tab:function(){return t.editor.commands.sinkListItem(t.name)}})},addNodeView:function(){var t=this;return function(e){var r=e.node,n=e.HTMLAttributes,i=e.getPos,a=e.editor;var o=document.createElement("li");var u=document.createElement("label");var s=document.createElement("span");var f=document.createElement("input");var l=document.createElement("div");s.style.cssText=visuallyHiddenStyle;var c=function(e){var r=getCheckboxLabel(e,e.attrs.checked,t.options.a11y);f.setAttribute("aria-label",r);s.textContent=r};c(r);u.contentEditable="false";f.type="checkbox";f.addEventListener("mousedown",(function(t){return t.preventDefault()}));f.addEventListener("change",(function(e){if(!a.isEditable&&!t.options.onReadOnlyChecked){f.checked=!f.checked;return}var n=e.target.checked;if(a.isEditable&&typeof i==="function")a.chain().focus(void 0,{scrollIntoView:false}).command((function(t){var e=t.tr;var r=i();if(typeof r!=="number")return false;var a=e.doc.nodeAt(r);e.setNodeMarkup(r,void 0,__assign(__assign({},a===null||a===void 0?void 0:a.attrs),{checked:n}));return true})).run();if(!a.isEditable&&t.options.onReadOnlyChecked){if(!t.options.onReadOnlyChecked(r,n))f.checked=!f.checked}}));Object.entries(t.options.HTMLAttributes).forEach((function(t){var e=t[0],r=t[1];o.setAttribute(e,r)}));o.dataset.checked=r.attrs.checked;f.checked=r.attrs.checked;u.append(f,s);o.append(u,l);Object.entries(n).forEach((function(t){var e=t[0],r=t[1];o.setAttribute(e,r)}));var v=new Set(Object.keys(n));return{dom:o,contentDOM:l,update:function(e){if(e.type!==t.type)return false;o.dataset.checked=e.attrs.checked;f.checked=e.attrs.checked;c(e);var r=a.extensionManager.attributes;var n=getRenderedAttributes(e,r);var i=new Set(Object.keys(n));var u=t.options.HTMLAttributes;v.forEach((function(t){if(!i.has(t)){if(t in u)o.setAttribute(t,u[t]);else o.removeAttribute(t)}}));Object.entries(n).forEach((function(t){var e=t[0],r=t[1];if(r===null||r===void 0){if(e in u)o.setAttribute(e,u[e]);else o.removeAttribute(e)}else o.setAttribute(e,r)}));v=i;return true}}}},addInputRules:function(){return[wrappingInputRule({find:inputRegex$1,type:this.type,getAttributes:function(t){return{checked:t[t.length-1]==="x"}}})]}});
//#endregion
//#region src/task-list/task-list.ts
/**
* This extension allows you to create task lists.
* @see https://www.tiptap.dev/api/nodes/task-list
*/var TaskList=Node$1.create({name:"taskList",addOptions:function(){return{itemTypeName:"taskItem",HTMLAttributes:{}}},group:"block list",content:function(){return"".concat(this.options.itemTypeName,"+")},parseHTML:function(){return[{tag:'ul[data-type="'.concat(this.name,'"]'),priority:51}]},renderHTML:function(t){var e=t.HTMLAttributes;return["ul",mergeAttributes(this.options.HTMLAttributes,e,{"data-type":this.name}),0]},parseMarkdown:function(t,e){return e.createNode("taskList",{},e.parseChildren(t.items||[]))},renderMarkdown:function(t,e){if(!t.content)return"";return e.renderChildren(t.content,"\n")},markdownTokenizer:{name:"taskList",level:"block",start:function(t){var e;var r=(e=t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/))===null||e===void 0?void 0:e.index;return r!==void 0?r:-1},tokenize:function(t,e,r){var n=function(t){var e=parseIndentedBlocks(t,{itemPattern:/^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,extractItemData:function(t){return{indentLevel:t[1].length,mainContent:t[4],checked:t[3].toLowerCase()==="x"}},createToken:function(t,e){return{type:"taskItem",raw:"",mainContent:t.mainContent,indentLevel:t.indentLevel,checked:t.checked,text:t.mainContent,tokens:r.inlineTokens(t.mainContent),nestedTokens:e}},customNestedParser:n},r);if(e){var i={type:"taskList",raw:e.raw,items:e.items};var a=t.slice(e.raw.length);if(a.trim())return __spreadArray([i],r.blockTokens(a),true);return[i]}return r.blockTokens(t)};var i=parseIndentedBlocks(t,{itemPattern:/^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,extractItemData:function(t){return{indentLevel:t[1].length,mainContent:t[4],checked:t[3].toLowerCase()==="x"}},createToken:function(t,e){return{type:"taskItem",raw:"",mainContent:t.mainContent,indentLevel:t.indentLevel,checked:t.checked,text:t.mainContent,tokens:r.inlineTokens(t.mainContent),nestedTokens:e}},customNestedParser:n},r);if(!i)return;return{type:"taskList",raw:i.raw,items:i.items}}},markdownOptions:{indentsContent:true},addCommands:function(){var t=this;return{toggleTaskList:function(){return function(e){var r=e.commands;return r.toggleList(t.name,t.options.itemTypeName)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Shift-9":function(){return t.editor.commands.toggleTaskList()}}}});
//#endregion
//#region src/kit/index.ts
/**
* The table kit is a collection of table editor extensions.
*
* It’s a good starting point for building your own table in Tiptap.
*/Extension.create({name:"listKit",addExtensions:function(){var t=[];if(this.options.bulletList!==false)t.push(BulletList.configure(this.options.bulletList));if(this.options.listItem!==false)t.push(ListItem.configure(this.options.listItem));if(this.options.listKeymap!==false)t.push(ListKeymap.configure(this.options.listKeymap));if(this.options.orderedList!==false)t.push(OrderedList.configure(this.options.orderedList));if(this.options.taskItem!==false)t.push(TaskItem.configure(this.options.taskItem));if(this.options.taskList!==false)t.push(TaskList.configure(this.options.taskList));return t}});
//#region src/paragraph.ts
/**
* Markdown marker for empty paragraphs to preserve blank lines.
* Using &nbsp; (non-breaking space HTML entity) ensures the paragraph
* is not collapsed by markdown parsers while remaining human-readable.
*/var EMPTY_PARAGRAPH_MARKDOWN="&nbsp;";
/**
* Unicode character for non-breaking space (U+00A0).
* Some markdown parsers may convert &nbsp; entities to this literal character.
*/var NBSP_CHAR=" ";
/**
* This extension allows you to create paragraphs.
* @see https://www.tiptap.dev/api/nodes/paragraph
*/var Paragraph=Node$1.create({name:"paragraph",priority:1e3,addOptions:function(){return{HTMLAttributes:{}}},group:"block",content:"inline*",parseHTML:function(){return[{tag:"p"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["p",mergeAttributes(this.options.HTMLAttributes,e),0]},parseMarkdown:function(t,e){var r=t.tokens||[];if(r.length===1&&r[0].type==="image")return e.parseChildren([r[0]]);var n=e.parseInline(r);if(r.length===1&&r[0].type==="text"&&(r[0].raw===EMPTY_PARAGRAPH_MARKDOWN||r[0].text===EMPTY_PARAGRAPH_MARKDOWN||r[0].raw===NBSP_CHAR||r[0].text===NBSP_CHAR)&&n.length===1&&n[0].type==="text"&&(n[0].text===EMPTY_PARAGRAPH_MARKDOWN||n[0].text===NBSP_CHAR))return e.createNode("paragraph",void 0,[]);return e.createNode("paragraph",void 0,n)},renderMarkdown:function(t,e,r){if(!t)return"";var n=Array.isArray(t.content)?t.content:[];if(n.length===0){var i,a;var o=Array.isArray(r===null||r===void 0||(i=r.previousNode)===null||i===void 0?void 0:i.content)?r.previousNode.content:[];return(r===null||r===void 0||(a=r.previousNode)===null||a===void 0?void 0:a.type)==="paragraph"&&o.length===0?EMPTY_PARAGRAPH_MARKDOWN:""}return e.renderChildren(n)},addCommands:function(){var t=this;return{setParagraph:function(){return function(e){var r=e.commands;return r.setNode(t.name)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Alt-0":function(){return t.editor.commands.setParagraph()}}}});
//#region src/strike.ts
/**
* Matches a strike to a ~~strike~~ on input.
*/var inputRegex=/(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
/**
* Matches a strike to a ~~strike~~ on paste.
*/var pasteRegex=/(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
/**
* This extension allows you to create strike text.
* @see https://www.tiptap.dev/api/marks/strike
*/var Strike=Mark.create({name:"strike",addOptions:function(){return{HTMLAttributes:{}}},parseHTML:function(){return[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",consuming:false,getAttrs:function(t){return t.includes("line-through")?{}:false}}]},renderHTML:function(t){var e=t.HTMLAttributes;return["s",mergeAttributes(this.options.HTMLAttributes,e),0]},markdownTokenName:"del",parseMarkdown:function(t,e){return e.applyMark("strike",e.parseInline(t.tokens||[]))},renderMarkdown:function(t,e){return"~~".concat(e.renderChildren(t),"~~")},addCommands:function(){var t=this;return{setStrike:function(){return function(e){var r=e.commands;return r.setMark(t.name)}},toggleStrike:function(){return function(e){var r=e.commands;return r.toggleMark(t.name)}},unsetStrike:function(){return function(e){var r=e.commands;return r.unsetMark(t.name)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-Shift-s":function(){return t.editor.commands.toggleStrike()}}},addInputRules:function(){return[markInputRule({find:inputRegex,type:this.type})]},addPasteRules:function(){return[markPasteRule({find:pasteRegex,type:this.type})]}});
//#region src/text.ts
/**
* This extension allows you to create text nodes.
* @see https://www.tiptap.dev/api/nodes/text
*/var Text=Node$1.create({name:"text",group:"inline",parseMarkdown:function(t){return{type:"text",text:t.text||""}},renderMarkdown:function(t){return t.text||""}});
//#region src/underline.ts
/**
* This extension allows you to create underline text.
* @see https://www.tiptap.dev/api/marks/underline
*/var Underline=Mark.create({name:"underline",addOptions:function(){return{HTMLAttributes:{}}},parseHTML:function(){return[{tag:"u"},{style:"text-decoration",consuming:false,getAttrs:function(t){return t.includes("underline")?{}:false}}]},renderHTML:function(t){var e=t.HTMLAttributes;return["u",mergeAttributes(this.options.HTMLAttributes,e),0]},parseMarkdown:function(t,e){return e.applyMark(this.name||"underline",e.parseInline(t.tokens||[]))},renderMarkdown:function(t,e){return"<u>".concat(e.renderChildren(t),"</u>")},markdownTokenizer:{name:"underline",level:"inline",start:function(t){return t.toLowerCase().indexOf("<u>")},tokenize:function(t,e,r){if(!/^<u>/i.test(t))return;var n=/\\[\s\S]|`+|<\/u>/gi;n.lastIndex=3;var i=n.exec(t);while(i){if(i[0].startsWith("`")){var a=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/.exec(t.slice(i.index));if(a)n.lastIndex=i.index+a[0].length}else if(!i[0].startsWith("\\")){var o=t.slice(3,i.index);if(!o)return;return{type:"underline",raw:t.slice(0,n.lastIndex),text:o,tokens:r.inlineTokens(o)}}i=n.exec(t)}}},addCommands:function(){var t=this;return{setUnderline:function(){return function(e){var r=e.commands;return r.setMark(t.name)}},toggleUnderline:function(){return function(e){var r=e.commands;return r.toggleMark(t.name)}},unsetUnderline:function(){return function(e){var r=e.commands;return r.unsetMark(t.name)}}}},addKeyboardShortcuts:function(){var t=this;return{"Mod-u":function(){return t.editor.commands.toggleUnderline()},"Mod-U":function(){return t.editor.commands.toggleUnderline()}}}});
//#region src/starter-kit.ts
/**
* The starter kit is a collection of essential editor extensions.
*
* It’s a good starting point for building your own editor.
*/var StarterKit=Extension.create({name:"starterKit",addExtensions:function(){var t=[];if(this.options.bold!==false)t.push(Bold.configure(this.options.bold));if(this.options.blockquote!==false)t.push(Blockquote.configure(this.options.blockquote));if(this.options.bulletList!==false)t.push(BulletList.configure(this.options.bulletList));if(this.options.code!==false)t.push(Code.configure(this.options.code));if(this.options.codeBlock!==false)t.push(CodeBlock.configure(this.options.codeBlock));if(this.options.document!==false)t.push(Document.configure(this.options.document));if(this.options.dropcursor!==false)t.push(Dropcursor.configure(this.options.dropcursor));if(this.options.gapcursor!==false)t.push(Gapcursor.configure(this.options.gapcursor));if(this.options.hardBreak!==false)t.push(HardBreak.configure(this.options.hardBreak));if(this.options.heading!==false)t.push(Heading.configure(this.options.heading));if(this.options.undoRedo!==false)t.push(UndoRedo.configure(this.options.undoRedo));if(this.options.horizontalRule!==false)t.push(HorizontalRule.configure(this.options.horizontalRule));if(this.options.italic!==false)t.push(Italic.configure(this.options.italic));if(this.options.listItem!==false)t.push(ListItem.configure(this.options.listItem));if(this.options.listKeymap!==false){var e;t.push(ListKeymap.configure((e=this.options)===null||e===void 0?void 0:e.listKeymap))}if(this.options.link!==false){var r;t.push(Link.configure((r=this.options)===null||r===void 0?void 0:r.link))}if(this.options.orderedList!==false)t.push(OrderedList.configure(this.options.orderedList));if(this.options.paragraph!==false)t.push(Paragraph.configure(this.options.paragraph));if(this.options.strike!==false)t.push(Strike.configure(this.options.strike));if(this.options.text!==false)t.push(Text.configure(this.options.text));if(this.options.underline!==false){var n;t.push(Underline.configure((n=this.options)===null||n===void 0?void 0:n.underline))}if(this.options.trailingNode!==false){var i;t.push(TrailingNode.configure((i=this.options)===null||i===void 0?void 0:i.trailingNode))}return t}});var text=[{label:"Cinza escuro",value:"#242729"},{label:"Cinza",value:"#5f676d"},{label:"Azul",value:"#0073e5"},{label:"Verde",value:"#3da329"},{label:"Laranja",value:"#ff8000"},{label:"Vermelho",value:"#cf0022"},{label:"Roxo",value:"#a855f7"},{label:"Ciano",value:"#00c6d7"}];var highlight=[{label:"Azul claro",value:"#eff6ff"},{label:"Verde claro",value:"#ecfdf5"},{label:"Laranja claro",value:"#fff7ed"},{label:"Vermelho claro",value:"#fef2f2"}];var colors={text:text,highlight:highlight};var groups=[["history"],["heading"],["bold","italic","underline","strike","code"],["textColor","highlight"],["link","image","table"],["bulletList","orderedList","blockquote","horizontalRule"],["textAlign"],["clearFormatting"]];var features={groups:groups};
/**
 * Features of the uai-rich-text field. Each one is a boolean prop of the component, off by default: a feature that is
 * off has no toolbar button, no keyboard shortcut and is dropped from the content (when it is pasted or set through
 * `value`), so the HTML a field can produce is only what was turned on. Undo and redo (Ctrl/Cmd + Z) always work; the
 * `history` prop only shows their buttons.
 */var UAI_RICH_TEXT_FEATURE_GROUPS=features.groups;var UAI_RICH_TEXT_FEATURES=UAI_RICH_TEXT_FEATURE_GROUPS.flat();
/**
 * Colors offered for text and highlight (uai-rich-text-colors.json). They are content colors written into the edited
 * HTML, which is used outside the design system, so they are plain values (the light theme values of the UAI tokens),
 * not `--uai-*` variables.
 */var UAI_RICH_TEXT_TEXT_COLORS=colors.text;var UAI_RICH_TEXT_HIGHLIGHT_COLORS=colors.highlight;var SAFE_PROTOCOL=/^(https?:|mailto:|tel:|\/|#)/i;
/** Whether a link or image address is safe to keep: http(s), mailto, tel, or a relative path. Never javascript: or data:. */var isSafeUrl=function(t){return SAFE_PROTOCOL.test(t.trim())};
/** Adds https:// to an address typed without a protocol, such as "blip.ai". */var normalizeUrl=function(t){var e=t.trim();if(!e||/^[a-z][a-z0-9+.-]*:/i.test(e)||e.startsWith("/")||e.startsWith("#"))return e;return"https://".concat(e)};var uaiRichTextCss=function(){return':host{--rich-text-background:var(--uai-surface-paper, #ffffff);--rich-text-border:var(--uai-border-input, #adb4b8);--rich-text-content:var(--uai-content-primary, #242729);--rich-text-label:var(--uai-content-primary, #242729);--rich-text-message:var(--uai-content-secondary, #5f676d);--rich-text-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:100%}:host(.uai-rich-text--danger){--rich-text-border:var(--uai-feedback-error, #cf0022);--rich-text-label:var(--uai-feedback-error, #cf0022);--rich-text-message:var(--uai-feedback-error, #cf0022)}:host(.uai-rich-text--success){--rich-text-border:var(--uai-feedback-success, #3da329);--rich-text-message:var(--uai-feedback-success, #3da329)}:host(.uai-rich-text--disabled){--rich-text-background:var(--uai-surface-muted, #f2f3f3);--rich-text-border:var(--uai-border-default, #e4e6e7);--rich-text-content:var(--uai-content-disabled, #848e94);--rich-text-label:var(--uai-content-disabled, #848e94);--rich-text-message:var(--uai-content-disabled, #848e94)}:host(.uai-rich-text--readonly){--rich-text-background:var(--uai-surface-muted, #f2f3f3)}.rich-text{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.rich-text__label,.rich-text__message{--uai-typo-color:currentColor}.rich-text__label{color:var(--rich-text-label)}.rich-text__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--rich-text-message)}.rich-text__control{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;border:var(--uai-border-width-default, 1px) solid var(--rich-text-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--rich-text-background);color:var(--rich-text-content);-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.rich-text__control{-webkit-transition:none;transition:none}}.rich-text__control:focus-within{border-color:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--rich-text-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--rich-text-halo)}:host(.uai-rich-text--danger) .rich-text__control:focus-within{border-color:var(--uai-feedback-error, #cf0022)}.rich-text__toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-3xs, 0.125rem);padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-xs, 0.5rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);background-color:var(--uai-surface-paper, #ffffff)}.rich-text__divider{-ms-flex-item-align:stretch;align-self:stretch;margin:var(--uai-spacing-2xs, 0.25rem);-webkit-border-start:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-inline-start:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.rich-text__heading{width:calc(var(--uai-width-menu, 14rem) * 0.75)}.rich-text__form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-sm, 0.75rem)}.rich-text__form-actions{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}.rich-text__table-menu{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.rich-text__swatches{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.rich-text__swatch{width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);padding:0;border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:var(--uai-radius-full, 624.9375rem);background-color:var(--swatch-color);cursor:pointer}.rich-text__swatch:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.rich-text__swatch--selected{-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--uai-border-ring, #242729);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--uai-border-ring, #242729)}.rich-text__editor{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:calc(var(--uai-sizing-5xl, 4.5rem) * 2);overflow-y:auto;cursor:text}.rich-text__content{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:inherit;padding:var(--uai-spacing-sm, 0.75rem);outline:none;white-space:pre-wrap;word-wrap:break-word;font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem);-webkit-font-variant-ligatures:none;font-variant-ligatures:none;-webkit-font-feature-settings:"liga" 0;font-feature-settings:"liga" 0}.rich-text__content [contenteditable=false]{white-space:normal}.rich-text__content>:first-child{margin-top:0}.rich-text__content>:last-child{margin-bottom:0}.rich-text__content p{margin:0 0 var(--uai-spacing-xs, 0.5rem)}.rich-text__content h1,.rich-text__content h2,.rich-text__content h3{margin:var(--uai-spacing-md, 1rem) 0 var(--uai-spacing-xs, 0.5rem);font-weight:var(--uai-font-weight-semibold, 600)}.rich-text__content h1{font-size:var(--uai-heading-md-font-size, 1.25rem);line-height:var(--uai-heading-md-line-height, 1.75rem)}.rich-text__content h2{font-size:var(--uai-title-lg-font-size, 1.125rem);line-height:var(--uai-title-lg-line-height, 1.5rem)}.rich-text__content h3{font-size:var(--uai-title-md-font-size, 1rem);line-height:var(--uai-title-md-line-height, 1.5rem)}.rich-text__content ul,.rich-text__content ol{margin:0 0 var(--uai-spacing-xs, 0.5rem);-webkit-padding-start:var(--uai-spacing-lg, 1.5rem);padding-inline-start:var(--uai-spacing-lg, 1.5rem)}.rich-text__content li{position:relative}.rich-text__content li>p{margin:0}.rich-text__content blockquote{margin:0 0 var(--uai-spacing-xs, 0.5rem);-webkit-padding-start:var(--uai-spacing-sm, 0.75rem);padding-inline-start:var(--uai-spacing-sm, 0.75rem);-webkit-border-start:var(--uai-border-width-thick, 2px) solid var(--uai-border-default, #e4e6e7);border-inline-start:var(--uai-border-width-thick, 2px) solid var(--uai-border-default, #e4e6e7);color:var(--uai-content-secondary, #5f676d)}.rich-text__content code{padding:0 var(--uai-spacing-3xs, 0.125rem);border-radius:var(--uai-radius-sm, 0.25rem);background-color:var(--uai-surface-muted, #f2f3f3);font-family:monospace}.rich-text__content pre{margin:0 0 var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-sm, 0.75rem);overflow-x:auto;border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--uai-surface-muted, #f2f3f3)}.rich-text__content pre code{padding:0;background:none}.rich-text__content a{color:var(--uai-content-link, #0073e5);text-decoration:underline}.rich-text__content hr{margin:var(--uai-spacing-md, 1rem) 0;border:0;border-top:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.rich-text__content img{display:block;max-width:100%;height:auto;border-radius:var(--uai-radius-md, 0.5rem)}.rich-text__content table{width:100%;margin:0 0 var(--uai-spacing-xs, 0.5rem);overflow:hidden;border-collapse:collapse;table-layout:fixed}.rich-text__content th,.rich-text__content td{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:var(--uai-sizing-4xl, 4rem);padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);vertical-align:top}.rich-text__content th>p,.rich-text__content td>p{margin:0}.rich-text__content th{background-color:var(--uai-surface-muted, #f2f3f3);font-weight:var(--uai-font-weight-semibold, 600);text-align:start}.rich-text__content .selectedCell::after{content:"";position:absolute;inset:0;background-color:var(--uai-overlay-selected, rgba(0, 0, 0, 0.06));pointer-events:none}.rich-text__content .tableWrapper{overflow-x:auto}.rich-text__content p.is-editor-empty:first-child::before{content:attr(data-placeholder);float:inline-start;height:0;color:var(--uai-content-secondary, #5f676d);pointer-events:none}.rich-text__content .ProseMirror-selectednode{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729)}.rich-text__content .ProseMirror-gapcursor{display:none;position:absolute;pointer-events:none}.rich-text__content.ProseMirror-focused .ProseMirror-gapcursor{display:block}:host(.uai-rich-text--disabled) .rich-text__editor{cursor:not-allowed}'};var nextId=0;var isMac=function(){return typeof navigator!=="undefined"&&/Mac|iPhone|iPad/.test(navigator.platform||"")};
/** Text of a tool tooltip: its name and, when it has one, the keyboard shortcut (⌘ on macOS, Ctrl elsewhere). */var tipText=function(t,e){return e?"".concat(t," (").concat(isMac()?"⌘":"Ctrl","+").concat(e,")"):t};var UaiRichText=/** @class */function(){function t(t){var e=this;registerInstance(this,t);this.uaiInput=createEvent(this,"uaiInput");this.uaiChange=createEvent(this,"uaiChange");this.uaiFocus=createEvent(this,"uaiFocus");this.uaiBlur=createEvent(this,"uaiBlur");if(t.$hostElement$["s-ei"]){this.internals=t.$hostElement$["s-ei"]}else{this.internals=t.$hostElement$.attachInternals();t.$hostElement$["s-ei"]=this.internals}
/** HTML content. Unsafe markup (scripts, event attributes, javascript: links) is dropped when it is read. */this.value="";
/** Visible label of the field. Use a short noun phrase; without it, set aria-label. */this.label="";
/** Accessible name when there is no visible label. */this.ariaLabel=null;
/** Text shown while the content is empty. */this.placeholder="";
/** Helper text under the field. */this.helperMessage="";
/** Error text under the field; it is shown while `danger` is true. */this.errorMessage="";
/** Success text under the field; it is shown while `success` is true. */this.successMessage="";
/** Marks the field as invalid and shows `errorMessage`. */this.danger=false;
/** Marks the field as valid and shows `successMessage`. */this.success=false;
/** Requires content to submit the form. */this.required=false;
/** Message for an empty required field. */this.requiredErrorMessage="Este campo é obrigatório.";
/** Blocks editing and the toolbar. */this.disabled=false;
/** Shows the content without letting it be edited; the toolbar is hidden. */this.readonly=false;
/** Shows the undo and redo buttons. Undo and redo with Ctrl/Cmd + Z always work, with or without the buttons. */this.history=false;
/** Turns on headings (paragraph and levels 1 to 3), with a style selector in the toolbar. */this.heading=false;
/** Turns on bold (Ctrl/Cmd + B). */this.bold=false;
/** Turns on italic (Ctrl/Cmd + I). */this.italic=false;
/** Turns on underline (Ctrl/Cmd + U). */this.underline=false;
/** Turns on strikethrough (Ctrl/Cmd + Shift + S). */this.strike=false;
/** Turns on inline code and code blocks. */this.code=false;
/** Turns on the text color, from a palette. */this.textColor=false;
/** Turns on the highlight color (background of the text), from a palette. */this.highlight=false;
/** Turns on links, including the ones typed as an address, which are linked automatically. */this.link=false;
/** Turns on images, by address with a description (alternative text). */this.image=false;
/** Turns on tables, with a menu to add and remove rows and columns. */this.table=false;
/** Turns on bullet lists. */this.bulletList=false;
/** Turns on numbered lists. */this.orderedList=false;
/** Turns on quotes. */this.blockquote=false;
/** Turns on the divider line. */this.horizontalRule=false;
/** Turns on text alignment (left, center and right). */this.textAlign=false;
/** Shows the button that removes the formatting of the selection. */this.clearFormatting=false;
/** Test selector on the content area. */this.dataTest=null;
/** Changes on every editor transaction, so the toolbar shows the state of the current selection. */this.revision=0;this.disabledByForm=false;this.validationDanger=false;this.validationText="";
/** Menu (dropdown) of the toolbar that is open, so its tooltip stays hidden while the panel is shown. */this.openMenu=null;this.id="uai-rich-text-".concat(nextId++);this.buttons=new Map;this.valueOnFocus="";
/** Value restored by a form reset: the content the field started with, after the editor normalized it. */this.initialValue="";this.onHeadingChange=function(t){var r;var n=((r=t.detail)===null||r===void 0?void 0:r.value)==null?null:String(t.detail.value);if(!e.editor||!n||n===e.headingValue())return;if(n==="paragraph")e.chain().setParagraph().run();else e.chain().toggleHeading({level:Number(n.slice(1))}).run()};this.applyLink=function(t){var r;var n=normalizeUrl(((r=e.linkInput)===null||r===void 0?void 0:r.value)||"");if(!n)e.chain().extendMarkRange("link").unsetLink().run();else if(isSafeUrl(n))e.chain().extendMarkRange("link").setLink({href:n}).run();e.closeDropdown(t.currentTarget)};this.removeLink=function(t){e.chain().extendMarkRange("link").unsetLink().run();e.closeDropdown(t.currentTarget)};this.insertImage=function(t){var r,n;var i=normalizeUrl(((r=e.imageUrlInput)===null||r===void 0?void 0:r.value)||"");if(i&&isSafeUrl(i)){e.chain().setImage({src:i,alt:((n=e.imageAltInput)===null||n===void 0?void 0:n.value)||""}).run();if(e.imageUrlInput)e.imageUrlInput.value="";if(e.imageAltInput)e.imageAltInput.value=""}e.closeDropdown(t.currentTarget)};this.setColor=function(t,r,n){var i;if(r==="color"){if(n)e.chain().setColor(n).run();else e.chain().unsetColor().run()}else if(n){
// Highlights are light colors: text without its own color gets the dark text color, so it stays readable in
// the editor (also in the dark theme) and on the published page.
var a=e.chain().setBackgroundColor(n);if(!((i=e.editor.getAttributes("textStyle"))===null||i===void 0?void 0:i.color))a.setColor(UAI_RICH_TEXT_TEXT_COLORS[0].value);a.run()}else e.chain().unsetBackgroundColor().run();e.closeDropdown(t.currentTarget)};this.tableAction=function(t,r){r(e.chain());e.closeDropdown(t.currentTarget)}}
/** Focuses the content area. */t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){(t=this.editor)===null||t===void 0?void 0:t.commands.focus("end");return[2/*return*/]}))}))};
/** Returns the current HTML value ('' when empty). */t.prototype.getContent=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,this.html()]}))}))};
/** Removes all the content. */t.prototype.clear=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){(t=this.editor)===null||t===void 0?void 0:t.commands.clearContent(true);return[2/*return*/]}))}))};t.prototype.valueChanged=function(t){if(!this.editor||(t||"")===this.html())return;this.editor.commands.setContent(t||"",{emitUpdate:false});this.syncForm()};t.prototype.editableChanged=function(){var t;(t=this.editor)===null||t===void 0?void 0:t.setEditable(this.isEditable())};
// A feature adds or removes parts of the editor schema, so the editor is built again, keeping the content.
t.prototype.featuresChanged=function(){if(this.editor)this.createEditor(this.html())};t.prototype.requiredChanged=function(){this.syncForm()};t.prototype.componentWillLoad=function(){if(!this.label&&!this.ariaLabel){warnOnce("uai-rich-text","accessible-name","Set label or aria-label so the field has an accessible name.")}};t.prototype.componentDidLoad=function(){var t=this;this.formControl=new UaiFormControl({internals:this.internals,defaultValue:function(){return t.initialValue},onReset:function(e){var r;(r=t.editor)===null||r===void 0?void 0:r.commands.setContent(typeof e==="string"?e:"",{emitUpdate:false});t.value=t.html();t.syncForm()},onDisabledChange:function(e){var r;t.disabledByForm=e;(r=t.editor)===null||r===void 0?void 0:r.setEditable(t.isEditable())}});this.createEditor(this.value||"");
// Normalize the initial value to what the editor keeps (unsafe markup dropped); a form reset goes back to it.
this.initialValue=this.html();this.value=this.initialValue;this.formControl.setValue(this.initialValue);this.syncForm();
// The editable element did not exist in the first render, so its attributes are set here too.
this.syncEditorAttributes()};t.prototype.features=function(){var t=this;return new Set(UAI_RICH_TEXT_FEATURES.filter((function(e){return t[e]===true})))};
/** Builds the editor with only the extensions of the features that are on. */t.prototype.createEditor=function(t){var e=this;var r;var n=this.features();var i=n.has("bulletList")||n.has("orderedList");(r=this.editor)===null||r===void 0?void 0:r.destroy();this.editor=new Editor({element:this.editorEl,injectCSS:false,editable:this.isEditable(),content:t,extensions:__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([StarterKit.configure({heading:n.has("heading")?{levels:[1,2,3]}:false,bold:n.has("bold")?{}:false,italic:n.has("italic")?{}:false,underline:n.has("underline")?{}:false,strike:n.has("strike")?{}:false,code:n.has("code")?{}:false,codeBlock:n.has("code")?{}:false,bulletList:n.has("bulletList")?{}:false,orderedList:n.has("orderedList")?{}:false,listItem:i?{}:false,listKeymap:i?{}:false,blockquote:n.has("blockquote")?{}:false,horizontalRule:n.has("horizontalRule")?{}:false,link:n.has("link")?{openOnClick:false,autolink:true,defaultProtocol:"https",isAllowedUri:function(t,e){var r=e.defaultValidate;return r(t)&&isSafeUrl(t)}}:false})],n.has("textColor")||n.has("highlight")?[TextStyle,Color]:[],true),n.has("highlight")?[BackgroundColor]:[],true),n.has("textAlign")?[TextAlign.configure({types:["heading","paragraph"]})]:[],true),n.has("image")?[Image.configure({allowBase64:false})]:[],true),n.has("table")?[Table.configure({resizable:false}),TableRow,TableHeader,TableCell]:[],true),[Placeholder.configure({placeholder:function(){return e.placeholder||""}})],false),editorProps:{attributes:{role:"textbox","aria-multiline":"true",id:"".concat(this.id,"-editor"),class:"rich-text__content"}},onUpdate:function(){return e.onEditorUpdate()},onTransaction:function(){return e.revision+=1},onFocus:function(){e.valueOnFocus=e.html();e.uaiFocus.emit()},onBlur:function(){var t=e.html();if(t!==e.valueOnFocus)e.uaiChange.emit({value:t});e.uaiBlur.emit()}});this.revision+=1};t.prototype.componentDidRender=function(){this.syncEditorAttributes();this.syncPressedButtons()};t.prototype.disconnectedCallback=function(){var t;(t=this.editor)===null||t===void 0?void 0:t.destroy();this.editor=undefined};t.prototype.formResetCallback=function(){var t;(t=this.formControl)===null||t===void 0?void 0:t.reset()};t.prototype.formDisabledCallback=function(t){var e;(e=this.formControl)===null||e===void 0?void 0:e.setDisabled(t)};
// The value is '' only for a document that is a single empty paragraph. editor.isEmpty is not used: it also counts
// as empty a document with only an empty table, which would drop the table from the value.
t.prototype.html=function(){if(!this.editor)return"";var t=this.editor.state.doc;var e=t.firstChild;if(t.childCount===1&&(e===null||e===void 0?void 0:e.type.name)==="paragraph"&&e.content.size===0)return"";return this.editor.getHTML()};t.prototype.isEditable=function(){return!this.disabled&&!this.disabledByForm&&!this.readonly};t.prototype.onEditorUpdate=function(){var t=this.html();this.value=t;this.syncForm();this.uaiInput.emit({value:t})};t.prototype.syncForm=function(){if(!this.formControl)return;
// The value is always set; the `name` attribute decides whether the form submits it, as with native fields.
this.formControl.setValue(this.html());this.formControl.validateRequired(this.required,this.requiredErrorMessage,this.editorEl);if(this.validationDanger&&this.formControl.validity.valid){this.validationDanger=false;this.validationText=""}};
/** Shows the validation message when the form finds the field invalid (submit or reportValidity). */t.prototype.onInvalid=function(){var t;this.validationDanger=true;this.validationText=((t=this.formControl)===null||t===void 0?void 0:t.validationMessage)||this.requiredErrorMessage};
// Attributes of the editable element that depend on props (it is created by the editor, not by render).
t.prototype.syncEditorAttributes=function(){var t;var e=(t=this.editorEl)===null||t===void 0?void 0:t.querySelector(".rich-text__content");if(!e)return;var r=function(t,r){return r===null?e.removeAttribute(t):e.setAttribute(t,r)};var n=this.danger||this.validationDanger;r("aria-labelledby",this.label?"".concat(this.id,"-label"):null);r("aria-label",this.label?null:this.ariaLabel);r("aria-invalid",n?"true":null);r("aria-required",this.required?"true":null);r("aria-readonly",this.readonly?"true":null);r("aria-disabled",this.disabled||this.disabledByForm?"true":null);r("aria-describedby",this.message()?"".concat(this.id,"-message"):null);r("data-test",this.dataTest)};t.prototype.syncPressedButtons=function(){var t,e;for(var r=0,n=this.toolButtons();r<n.length;r++){var i=n[r];if(!i.active)continue;void((e=(t=this.buttons.get(i.tool))===null||t===void 0?void 0:t.isActive)===null||e===void 0?void 0:e.call(t,i.active()))}};t.prototype.message=function(){var t=this.danger||this.validationDanger;if(this.danger)return this.errorMessage||this.validationText;if(t)return this.validationText;if(this.success)return this.successMessage;return this.helperMessage};t.prototype.chain=function(){return this.editor.chain().focus()};t.prototype.toolButtons=function(){var t=this;var e=this.editor;var r=function(t,r){return function(){return!!(e===null||e===void 0?void 0:e.isActive(t,r))}};var n=function(t){return function(){return!!(e===null||e===void 0?void 0:e.isActive({textAlign:t}))}};return[{tool:"undo",shortcut:"Z",icon:"undo",label:"Desfazer",run:function(){return t.chain().undo().run()},disabled:function(){return!(e===null||e===void 0?void 0:e.can().undo())}},{tool:"redo",shortcut:"Shift+Z",icon:"redo",label:"Refazer",run:function(){return t.chain().redo().run()},disabled:function(){return!(e===null||e===void 0?void 0:e.can().redo())}},{tool:"bold",shortcut:"B",icon:"text-style-bold",label:"Negrito",active:r("bold"),run:function(){return t.chain().toggleBold().run()}},{tool:"italic",shortcut:"I",icon:"text-style-italic",label:"Itálico",active:r("italic"),run:function(){return t.chain().toggleItalic().run()}},{tool:"underline",shortcut:"U",icon:"text-style-underline",label:"Sublinhado",active:r("underline"),run:function(){return t.chain().toggleUnderline().run()}},{tool:"strike",shortcut:"Shift+S",icon:"text-style-strikethrough",label:"Tachado",active:r("strike"),run:function(){return t.chain().toggleStrike().run()}},{tool:"code",shortcut:"E",icon:"code",label:"Código",active:r("code"),run:function(){return t.chain().toggleCode().run()}},{tool:"bulletList",shortcut:"Shift+8",icon:"unordered-list",label:"Lista com marcadores",active:r("bulletList"),run:function(){return t.chain().toggleBulletList().run()}},{tool:"orderedList",shortcut:"Shift+7",icon:"ordered-list",label:"Lista numerada",active:r("orderedList"),run:function(){return t.chain().toggleOrderedList().run()}},{tool:"blockquote",shortcut:"Shift+B",icon:"quote",label:"Citação",active:r("blockquote"),run:function(){return t.chain().toggleBlockquote().run()}},{tool:"horizontalRule",icon:"less",label:"Linha divisória",run:function(){return t.chain().setHorizontalRule().run()}},{tool:"align-left",shortcut:"Shift+L",icon:"align-left",label:"Alinhar à esquerda",active:n("left"),run:function(){return t.chain().setTextAlign("left").run()}},{tool:"align-center",shortcut:"Shift+E",icon:"align-center",label:"Centralizar",active:n("center"),run:function(){return t.chain().setTextAlign("center").run()}},{tool:"align-right",shortcut:"Shift+R",icon:"align-right",label:"Alinhar à direita",active:n("right"),run:function(){return t.chain().setTextAlign("right").run()}},{tool:"clearFormatting",icon:"delete",label:"Limpar formatação",run:function(){return t.chain().unsetAllMarks().clearNodes().run()}}]};t.prototype.headingValue=function(){var t;for(var e=0,r=[1,2,3];e<r.length;e++){var n=r[e];if((t=this.editor)===null||t===void 0?void 0:t.isActive("heading",{level:n}))return"h".concat(n)}return"paragraph"};t.prototype.closeDropdown=function(t){var e,r;var n=(e=t===null||t===void 0?void 0:t.closest)===null||e===void 0?void 0:e.call(t,"uai-dropdown");void((r=n===null||n===void 0?void 0:n.setClose)===null||r===void 0?void 0:r.call(n))};t.prototype.renderButton=function(t,e){var r=this;var n;var i=e||!!((n=t.disabled)===null||n===void 0?void 0:n.call(t));return h$1("uai-tooltip",{key:t.tool,class:"rich-text__tip",tooltipText:tipText(t.label,t.shortcut),position:"bottom-center"},h$1("uai-button",{ref:function(e){return e&&r.buttons.set(t.tool,e)},class:"rich-text__tool",variant:"text",color:"content",size:"short",iconLeft:t.icon,"aria-label":t.label,disabled:i,onClick:t.run}))};t.prototype.renderMenu=function(t,e,r,n,i){var a=this;
// The tooltip wraps the whole dropdown (not the activator, which the dropdown needs as its direct child) and is
// turned off while the panel is open, so it does not cover the panel.
return h$1("uai-tooltip",{key:t,class:"rich-text__tip",tooltipText:r,position:"bottom-center",disabled:this.openMenu===t},h$1("uai-dropdown",{class:"rich-text__menu",label:r,position:"bottom-left",onUaiToggle:function(e){if(e.detail.value)a.openMenu=t;else if(a.openMenu===t)a.openMenu=null}},h$1("uai-button",{slot:"activator",class:"rich-text__tool",variant:"text",color:"content",size:"short",iconLeft:e,iconRight:"arrow-down","aria-label":r,disabled:n}),i))};t.prototype.renderSwatches=function(t){var e=this;var r,n;var i=t==="color"?UAI_RICH_TEXT_TEXT_COLORS:UAI_RICH_TEXT_HIGHLIGHT_COLORS;var a=(n=(r=this.editor)===null||r===void 0?void 0:r.getAttributes("textStyle"))===null||n===void 0?void 0:n[t==="color"?"color":"backgroundColor"];return h$1("div",{class:"rich-text__swatches",role:"group","aria-label":t==="color"?"Cor do texto":"Cor de destaque"},i.map((function(r){return h$1("button",{type:"button",class:{"rich-text__swatch":true,"rich-text__swatch--selected":a===r.value},style:{"--swatch-color":r.value},"aria-label":r.label,"aria-pressed":a===r.value?"true":"false",onClick:function(n){return e.setColor(n,t,r.value)}})})),h$1("uai-button",{class:"rich-text__swatch-reset",variant:"text",color:"content",size:"short",onClick:function(r){return e.setColor(r,t,null)}},"Padrão"))};t.prototype.renderToolbar=function(t,e){var r=this;var n,i,a;var o=new Map(this.toolButtons().map((function(t){return[t.tool,t]})));var u=!!((n=this.editor)===null||n===void 0?void 0:n.isActive("table"));var s=((a=(i=this.editor)===null||i===void 0?void 0:i.getAttributes("link"))===null||a===void 0?void 0:a.href)||"";var f=UAI_RICH_TEXT_FEATURE_GROUPS.map((function(n){return n.filter((function(e){return t.has(e)})).map((function(t){switch(t){case"heading":return h$1("uai-select",{key:"heading",class:"rich-text__heading",size:"short","aria-label":"Estilo do texto",value:r.headingValue(),disabled:e,onUaiChange:r.onHeadingChange,options:[{value:"paragraph",label:"Parágrafo"},{value:"h1",label:"Título 1"},{value:"h2",label:"Título 2"},{value:"h3",label:"Título 3"}]});case"history":return["undo","redo"].map((function(t){return r.renderButton(o.get(t),e)}));case"textColor":return r.renderMenu("color","paint","Cor do texto",e,r.renderSwatches("color"));case"highlight":return r.renderMenu("highlight","mark","Cor de destaque",e,r.renderSwatches("highlight"));case"link":return r.renderMenu("link","link","Link",e,h$1("div",{class:"rich-text__form"},h$1("uai-input",{ref:function(t){return r.linkInput=t},label:"Endereço do link",placeholder:"https://",value:s}),h$1("div",{class:"rich-text__form-actions"},h$1("uai-button",{variant:"text",color:"content",size:"short",onClick:r.removeLink},"Remover"),h$1("uai-button",{size:"short",onClick:r.applyLink},"Aplicar"))));case"image":return r.renderMenu("image","file-image","Imagem",e,h$1("div",{class:"rich-text__form"},h$1("uai-input",{ref:function(t){return r.imageUrlInput=t},label:"Endereço da imagem",placeholder:"https://"}),h$1("uai-input",{ref:function(t){return r.imageAltInput=t},label:"Descrição (texto alternativo)"}),h$1("div",{class:"rich-text__form-actions"},h$1("uai-button",{size:"short",onClick:r.insertImage},"Inserir imagem"))));case"table":return r.renderMenu("table","table","Tabela",e,h$1("div",{class:"rich-text__table-menu",role:"group","aria-label":"Ações de tabela"},[{label:"Inserir tabela 3 × 3",show:!u,run:function(t){return t.insertTable({rows:3,cols:3,withHeaderRow:true})}},{label:"Linha acima",show:u,run:function(t){return t.addRowBefore()}},{label:"Linha abaixo",show:u,run:function(t){return t.addRowAfter()}},{label:"Coluna à esquerda",show:u,run:function(t){return t.addColumnBefore()}},{label:"Coluna à direita",show:u,run:function(t){return t.addColumnAfter()}},{label:"Alternar linha de cabeçalho",show:u,run:function(t){return t.toggleHeaderRow()}},{label:"Excluir linha",show:u,run:function(t){return t.deleteRow()}},{label:"Excluir coluna",show:u,run:function(t){return t.deleteColumn()}},{label:"Excluir tabela",show:u,run:function(t){return t.deleteTable()}}].filter((function(t){return t.show})).map((function(t){return h$1("uai-button",{variant:"text",color:"content",size:"short",fullWidth:true,justifyContent:"space-between",onClick:function(e){return r.tableAction(e,(function(e){return t.run(e).run()}))}},t.label)}))));case"textAlign":return["align-left","align-center","align-right"].map((function(t){return r.renderButton(o.get(t),e)}));default:return r.renderButton(o.get(t),e)}}))})).filter((function(t){return t.length}));return h$1("div",{class:"rich-text__toolbar",part:"toolbar",role:"toolbar","aria-label":"Formatação","aria-controls":"".concat(this.id,"-editor")},f.map((function(t,e){return[e>0&&h$1("span",{class:"rich-text__divider","aria-hidden":"true"}),t]})))};t.prototype.render=function(){var t=this;var e=this.disabled||this.disabledByForm;var r=this.danger||this.validationDanger;var n=this.success&&!r;var i=this.message();var a=this.features();return h$1(Host,{key:"5d1d71e3e3afc04b40c9a4c78e63356f80e3d0dc","aria-disabled":e?"true":null,class:{"uai-rich-text--danger":r,"uai-rich-text--success":n,"uai-rich-text--disabled":e,"uai-rich-text--readonly":this.readonly&&!e}},h$1("div",{key:"02444087d29200df21bf49a2e769062bafef543b",class:"rich-text"},this.label&&h$1("span",{key:"cb76abdcb29c63ae30ff08dc86ea8941adbf9483",id:"".concat(this.id,"-label"),class:"rich-text__label"},h$1("uai-typo",{key:"c153e6abc182f632b272d1a895640e1df4e3967b",variant:"caption",bold:"semibold",tag:"span",margin:false},this.label)),h$1("div",{key:"07f1e1bd2722b1aa3c5abb2464ca7951f523f09c",class:"rich-text__control",part:"input-container"},!this.readonly&&a.size>0&&this.renderToolbar(a,e),h$1("div",{key:"8e295a14025b5a38f8adb04a37351d6403be9bb9",class:"rich-text__editor",part:"editor",ref:function(e){return t.editorEl=e},style:Object.assign(Object.assign({},this.minHeight!==undefined?{minHeight:"".concat(this.minHeight,"px")}:{}),this.maxHeight!==undefined?{maxHeight:"".concat(this.maxHeight,"px")}:{})})),i&&h$1("div",{key:"6d998ec77093c5e140d392db68d5d4e26f2f1d28",id:"".concat(this.id,"-message"),class:"rich-text__message",part:"input__message"},h$1("uai-typo",{key:"7fca22a6a7f8242194c2522678f4e7d07e6610d6",variant:"caption",tag:"span",margin:false},i))))};Object.defineProperty(t,"delegatesFocus",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(t,"formAssociated",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{value:[{valueChanged:0}],disabled:[{editableChanged:0}],readonly:[{editableChanged:0}],history:[{featuresChanged:0}],heading:[{featuresChanged:0}],bold:[{featuresChanged:0}],italic:[{featuresChanged:0}],underline:[{featuresChanged:0}],strike:[{featuresChanged:0}],code:[{featuresChanged:0}],textColor:[{featuresChanged:0}],highlight:[{featuresChanged:0}],link:[{featuresChanged:0}],image:[{featuresChanged:0}],table:[{featuresChanged:0}],bulletList:[{featuresChanged:0}],orderedList:[{featuresChanged:0}],blockquote:[{featuresChanged:0}],horizontalRule:[{featuresChanged:0}],textAlign:[{featuresChanged:0}],clearFormatting:[{featuresChanged:0}],required:[{requiredChanged:0}]}},enumerable:false,configurable:true});return t}();UaiRichText.style=uaiRichTextCss();export{UaiRichText as uai_rich_text};var templateObject_1;