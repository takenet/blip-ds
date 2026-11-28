var __extends=this&&this.__extends||function(){var r=function(t,n){r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))r[n]=t[n]};return r(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");r(t,n);function e(){this.constructor=t}t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}}();var __makeTemplateObject=this&&this.__makeTemplateObject||function(r,t){if(Object.defineProperty){Object.defineProperty(r,"raw",{value:t})}else{r.raw=t}return r};var __assign=this&&this.__assign||function(){__assign=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++){t=arguments[n];for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))r[i]=t[i]}return r};return __assign.apply(this,arguments)};var __awaiter=this&&this.__awaiter||function(r,t,n,e){function i(r){return r instanceof n?r:new n((function(t){t(r)}))}return new(n||(n=Promise))((function(n,u){function a(r){try{o(e.next(r))}catch(r){u(r)}}function f(r){try{o(e["throw"](r))}catch(r){u(r)}}function o(r){r.done?n(r.value):i(r.value).then(a,f)}o((e=e.apply(r,t||[])).next())}))};var __generator=this&&this.__generator||function(r,t){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},e,i,u,a=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return a.next=f(0),a["throw"]=f(1),a["return"]=f(2),typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function f(r){return function(t){return o([r,t])}}function o(f){if(e)throw new TypeError("Generator is already executing.");while(a&&(a=0,f[0]&&(n=0)),n)try{if(e=1,i&&(u=f[0]&2?i["return"]:f[0]?i["throw"]||((u=i["return"])&&u.call(i),0):i.next)&&!(u=u.call(i,f[1])).done)return u;if(i=0,u)f=[f[0]&2,u.value];switch(f[0]){case 0:case 1:u=f;break;case 4:n.label++;return{value:f[1],done:false};case 5:n.label++;i=f[1];f=[0];continue;case 7:f=n.ops.pop();n.trys.pop();continue;default:if(!(u=n.trys,u=u.length>0&&u[u.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!u||f[1]>u[0]&&f[1]<u[3])){n.label=f[1];break}if(f[0]===6&&n.label<u[1]){n.label=u[1];u=f;break}if(u&&n.label<u[2]){n.label=u[2];n.ops.push(f);break}if(u[2])n.ops.pop();n.trys.pop();continue}f=t.call(r,n)}catch(r){f=[6,r];i=0}finally{e=u=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:true}}};var __rest=this&&this.__rest||function(r,t){var n={};for(var e in r)if(Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0)n[e]=r[e];if(r!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,e=Object.getOwnPropertySymbols(r);i<e.length;i++){if(t.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(r,e[i]))n[e[i]]=r[e[i]]}return n};var __spreadArray=this&&this.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,i=t.length,u;e<i;e++){if(u||!(e in t)){if(!u)u=Array.prototype.slice.call(t,0,e);u[e]=t[e]}}return r.concat(u||Array.prototype.slice.call(t))};System.register(["./p-Btp-603e.system.js","./p-Cfmv9p1t.system.js","./p-B0FfrtuT.system.js"],(function(r){"use strict";var t,n,e,i,u,a,f;return{setters:[function(r){t=r.r;n=r.c;e=r.h;i=r.H;u=r.g},function(r){a=r.w},function(r){f=r.U}],execute:function(){
//#region \0rolldown/runtime.js
var o=Object.defineProperty;var s=function(r,t){var n={};for(var e in r)o(n,e,{get:r[e],enumerable:true});o(n,Symbol.toStringTag,{value:"Module"});return n};
// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function l(r){this.content=r}l.prototype={constructor:l,find:function(r){for(var t=0;t<this.content.length;t+=2)if(this.content[t]===r)return t;return-1},
// :: (string) → ?any
// Retrieve the value stored under `key`, or return undefined when
// no such key exists.
get:function(r){var t=this.find(r);return t==-1?undefined:this.content[t+1]},
// :: (string, any, ?string) → OrderedMap
// Create a new map by replacing the value of `key` with a new
// value, or adding a binding to the end of the map. If `newKey` is
// given, the key of the binding will be replaced with that key.
update:function(r,t,n){var e=n&&n!=r?this.remove(n):this;var i=e.find(r),u=e.content.slice();if(i==-1){u.push(n||r,t)}else{u[i+1]=t;if(n)u[i]=n}return new l(u)},
// :: (string) → OrderedMap
// Return a map with the given key removed, if it existed.
remove:function(r){var t=this.find(r);if(t==-1)return this;var n=this.content.slice();n.splice(t,2);return new l(n)},
// :: (string, any) → OrderedMap
// Add a new key to the start of the map.
addToStart:function(r,t){return new l([r,t].concat(this.remove(r).content))},
// :: (string, any) → OrderedMap
// Add a new key to the end of the map.
addToEnd:function(r,t){var n=this.remove(r).content.slice();n.push(r,t);return new l(n)},
// :: (string, string, any) → OrderedMap
// Add a key after the given key. If `place` is not found, the new
// key is added to the end.
addBefore:function(r,t,n){var e=this.remove(t),i=e.content.slice();var u=e.find(r);i.splice(u==-1?i.length:u,0,t,n);return new l(i)},
// :: ((key: string, value: any))
// Call the given function for each key/value pair in the map, in
// order.
forEach:function(r){for(var t=0;t<this.content.length;t+=2)r(this.content[t],this.content[t+1])},
// :: (union<Object, OrderedMap>) → OrderedMap
// Create a new map by prepending the keys in this map that don't
// appear in `map` before the keys in `map`.
prepend:function(r){r=l.from(r);if(!r.size)return this;return new l(r.content.concat(this.subtract(r).content))},
// :: (union<Object, OrderedMap>) → OrderedMap
// Create a new map by appending the keys in this map that don't
// appear in `map` after the keys in `map`.
append:function(r){r=l.from(r);if(!r.size)return this;return new l(this.subtract(r).content.concat(r.content))},
// :: (union<Object, OrderedMap>) → OrderedMap
// Create a map containing all the keys in this map that don't
// appear in `map`.
subtract:function(r){var t=this;r=l.from(r);for(var n=0;n<r.content.length;n+=2)t=t.remove(r.content[n]);return t},
// :: () → Object
// Turn ordered map into a plain object.
toObject:function(){var r={};this.forEach((function(t,n){r[t]=n}));return r},
// :: number
// The amount of keys in this map.
get size(){return this.content.length>>1}};
// :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.
l.from=function(r){if(r instanceof l)return r;var t=[];if(r)for(var n in r)t.push(n,r[n]);return new l(t)};function v(r,t,n){for(var e=0;;e++){if(e==r.childCount||e==t.childCount)return r.childCount==t.childCount?null:n;var i=r.child(e),u=t.child(e);if(i==u){n+=i.nodeSize;continue}if(!i.sameMarkup(u))return n;if(i.isText&&i.text!=u.text){var a=i.text,f=u.text,o=0;for(;a[o]==f[o];o++)n++;if(o&&o<a.length&&o<f.length&&d(a.charCodeAt(o-1))&&h(a.charCodeAt(o)))n--;return n}if(i.content.size||u.content.size){var s=v(i.content,u.content,n+1);if(s!=null)return s}n+=i.nodeSize}}function c(r,t,n,e){for(var i=r.childCount,u=t.childCount;;){if(i==0||u==0)return i==u?null:{a:n,b:e};var a=r.child(--i),f=t.child(--u),o=a.nodeSize;if(a==f){n-=o;e-=o;continue}if(!a.sameMarkup(f))return{a:n,b:e};if(a.isText&&a.text!=f.text){var s=a.text,l=f.text,v=s.length,p=l.length;while(v>0&&p>0&&s[v-1]==l[p-1]){v--;p--;n--;e--}if(v&&p&&v<s.length&&d(s.charCodeAt(v-1))&&h(s.charCodeAt(v))){n++;e++}return{a:n,b:e}}if(a.content.size||f.content.size){var b=c(a.content,f.content,n-1,e-1);if(b)return b}n-=o;e-=o}}function h(r){return r>=56320&&r<57344}function d(r){return r>=55296&&r<56320}
/**
            A fragment represents a node's collection of child nodes.

            Like nodes, fragments are persistent data structures, and you
            should not mutate them or their content. Rather, you create new
            instances whenever needed. The API tries to make this easy.
            */var p=/** @class */function(){
/**
                @internal
                */
function r(
/**
                The child nodes in this fragment.
                */
r,t){this.content=r;this.size=t||0;if(t==null)for(var n=0;n<r.length;n++)this.size+=r[n].nodeSize}
/**
                Invoke a callback for all descendant nodes between the given two
                positions (relative to start of this fragment). Doesn't descend
                into a node when the callback returns `false`.
                */r.prototype.nodesBetween=function(r,t,n,e,i){if(e===void 0){e=0}for(var u=0,a=0;a<t;u++){var f=this.content[u],o=a+f.nodeSize;if(o>r&&n(f,e+a,i||null,u)!==false&&f.content.size){var s=a+1;f.nodesBetween(Math.max(0,r-s),Math.min(f.content.size,t-s),n,e+s)}a=o}};
/**
                Call the given callback for every descendant node. `pos` will be
                relative to the start of the fragment. The callback may return
                `false` to prevent traversal of a given node's children.
                */r.prototype.descendants=function(r){this.nodesBetween(0,this.size,r)};
/**
                Extract the text between `from` and `to`. See the same method on
                [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
                */r.prototype.textBetween=function(r,t,n,e){var i="",u=true;this.nodesBetween(r,t,(function(a,f){var o=a.isText?a.text.slice(Math.max(r,f)-f,t-f):!a.isLeaf?"":e?typeof e==="function"?e(a):e:a.type.spec.leafText?a.type.spec.leafText(a):"";if(a.isBlock&&(a.isLeaf&&o||a.isTextblock)&&n){if(u)u=false;else i+=n}i+=o}),0);return i};
/**
                Create a new fragment containing the combined content of this
                fragment and the other.
                */r.prototype.append=function(t){if(!t.size)return this;if(!this.size)return t;var n=this.lastChild,e=t.firstChild,i=this.content.slice(),u=0;if(n.isText&&n.sameMarkup(e)){i[i.length-1]=n.withText(n.text+e.text);u=1}for(;u<t.content.length;u++)i.push(t.content[u]);return new r(i,this.size+t.size)};
/**
                Cut out the sub-fragment between the two given positions.
                */r.prototype.cut=function(t,n){if(n===void 0){n=this.size}if(t==0&&n==this.size)return this;var e=[],i=0;if(n>t)for(var u=0,a=0;a<n;u++){var f=this.content[u],o=a+f.nodeSize;if(o>t){if(a<t||o>n){if(f.isText)f=f.cut(Math.max(0,t-a),Math.min(f.text.length,n-a));else f=f.cut(Math.max(0,t-a-1),Math.min(f.content.size,n-a-1))}e.push(f);i+=f.nodeSize}a=o}return new r(e,i)};
/**
                @internal
                */r.prototype.cutByIndex=function(t,n){if(t==n)return r.empty;if(t==0&&n==this.content.length)return this;return new r(this.content.slice(t,n))};
/**
                Create a new fragment in which the node at the given index is
                replaced by the given node.
                */r.prototype.replaceChild=function(t,n){var e=this.content[t];if(e==n)return this;var i=this.content.slice();var u=this.size+n.nodeSize-e.nodeSize;i[t]=n;return new r(i,u)};
/**
                Create a new fragment by prepending the given node to this
                fragment.
                */r.prototype.addToStart=function(t){return new r([t].concat(this.content),this.size+t.nodeSize)};
/**
                Create a new fragment by appending the given node to this
                fragment.
                */r.prototype.addToEnd=function(t){return new r(this.content.concat(t),this.size+t.nodeSize)};
/**
                Compare this fragment to another one.
                */r.prototype.eq=function(r){if(this.content.length!=r.content.length)return false;for(var t=0;t<this.content.length;t++)if(!this.content[t].eq(r.content[t]))return false;return true};Object.defineProperty(r.prototype,"firstChild",{
/**
                    The first child of the fragment, or `null` if it is empty.
                    */
get:function(){return this.content.length?this.content[0]:null},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"lastChild",{
/**
                    The last child of the fragment, or `null` if it is empty.
                    */
get:function(){return this.content.length?this.content[this.content.length-1]:null},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"childCount",{
/**
                    The number of child nodes in this fragment.
                    */
get:function(){return this.content.length},enumerable:false,configurable:true});
/**
                Get the child node at the given index. Raise an error when the
                index is out of range.
                */r.prototype.child=function(r){var t=this.content[r];if(!t)throw new RangeError("Index "+r+" out of range for "+this);return t};
/**
                Get the child node at the given index, if it exists.
                */r.prototype.maybeChild=function(r){return this.content[r]||null};
/**
                Call `f` for every child node, passing the node, its offset
                into this parent node, and its index.
                */r.prototype.forEach=function(r){for(var t=0,n=0;t<this.content.length;t++){var e=this.content[t];r(e,n,t);n+=e.nodeSize}};
/**
                Find the first position at which this fragment and another
                fragment differ, or `null` if they are the same.
                */r.prototype.findDiffStart=function(r,t){if(t===void 0){t=0}return v(this,r,t)};
/**
                Find the first position, searching from the end, at which this
                fragment and the given fragment differ, or `null` if they are
                the same. Since this position will not be the same in both
                nodes, an object with two separate positions is returned.
                */r.prototype.findDiffEnd=function(r,t,n){if(t===void 0){t=this.size}if(n===void 0){n=r.size}return c(this,r,t,n)};
/**
                Find the index and inner offset corresponding to a given relative
                position in this fragment. The result object will be reused
                (overwritten) the next time the function is called. @internal
                */r.prototype.findIndex=function(r){if(r==0)return g(0,r);if(r==this.size)return g(this.content.length,r);if(r>this.size||r<0)throw new RangeError("Position ".concat(r," outside of fragment (").concat(this,")"));for(var t=0,n=0;;t++){var e=this.child(t),i=n+e.nodeSize;if(i>=r){if(i==r)return g(t+1,i);return g(t,n)}n=i}};
/**
                Return a debugging string that describes this fragment.
                */r.prototype.toString=function(){return"<"+this.toStringInner()+">"};
/**
                @internal
                */r.prototype.toStringInner=function(){return this.content.join(", ")};
/**
                Create a JSON-serializeable representation of this fragment.
                */r.prototype.toJSON=function(){return this.content.length?this.content.map((function(r){return r.toJSON()})):null};
/**
                Deserialize a fragment from its JSON representation.
                */r.fromJSON=function(t,n){if(!n)return r.empty;if(!Array.isArray(n))throw new RangeError("Invalid input for Fragment.fromJSON");return r.fromArray(n.map(t.nodeFromJSON))};
/**
                Build a fragment from an array of nodes. Ensures that adjacent
                text nodes with the same marks are joined together.
                */r.fromArray=function(t){if(!t.length)return r.empty;var n,e=0;for(var i=0;i<t.length;i++){var u=t[i];e+=u.nodeSize;if(i&&u.isText&&t[i-1].sameMarkup(u)){if(!n)n=t.slice(0,i);n[n.length-1]=u.withText(n[n.length-1].text+u.text)}else if(n){n.push(u)}}return new r(n||t,e)};
/**
                Create a fragment from something that can be interpreted as a
                set of nodes. For `null`, it returns the empty fragment. For a
                fragment, the fragment itself. For a node or array of nodes, a
                fragment containing those nodes.
                */r.from=function(t){if(!t)return r.empty;if(t instanceof r)return t;if(Array.isArray(t))return this.fromArray(t);if(t.attrs)return new r([t],t.nodeSize);throw new RangeError("Can not convert "+t+" to a Fragment"+(t.nodesBetween?" (looks like multiple versions of prosemirror-model were loaded)":""))};return r}();
/**
            An empty fragment. Intended to be reused whenever a node doesn't
            contain anything (rather than allocating a new empty fragment for
            each leaf node).
            */p.empty=new p([],0);var b={index:0,offset:0};function g(r,t){b.index=r;b.offset=t;return b}function m(r,t){if(r===t)return true;if(!(r&&typeof r=="object")||!(t&&typeof t=="object"))return false;var n=Array.isArray(r);if(Array.isArray(t)!=n)return false;if(n){if(r.length!=t.length)return false;for(var e=0;e<r.length;e++)if(!m(r[e],t[e]))return false}else{for(var i in r)if(!(i in t)||!m(r[i],t[i]))return false;for(var i in t)if(!(i in r))return false}return true}
/**
            A mark is a piece of information that can be attached to a node,
            such as it being emphasized, in code font, or a link. It has a
            type and optionally a set of attributes that provide further
            information (such as the target of the link). Marks are created
            through a `Schema`, which controls which types exist and which
            attributes they have.
            */var w=/** @class */function(){
/**
                @internal
                */
function r(
/**
                The type of this mark.
                */
r,
/**
                The attributes associated with this mark.
                */
t){this.type=r;this.attrs=t}
/**
                Given a set of marks, create a new set which contains this one as
                well, in the right position. If this mark is already in the set,
                the set itself is returned. If any marks that are set to be
                [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
                those are replaced by this one.
                */r.prototype.addToSet=function(r){var t,n=false;for(var e=0;e<r.length;e++){var i=r[e];if(this.eq(i))return r;if(this.type.excludes(i.type)){if(!t)t=r.slice(0,e)}else if(i.type.excludes(this.type)){return r}else{if(!n&&i.type.rank>this.type.rank){if(!t)t=r.slice(0,e);t.push(this);n=true}if(t)t.push(i)}}if(!t)t=r.slice();if(!n)t.push(this);return t};
/**
                Remove this mark from the given set, returning a new set. If this
                mark is not in the set, the set itself is returned.
                */r.prototype.removeFromSet=function(r){for(var t=0;t<r.length;t++)if(this.eq(r[t]))return r.slice(0,t).concat(r.slice(t+1));return r};
/**
                Test whether this mark is in the given set of marks.
                */r.prototype.isInSet=function(r){for(var t=0;t<r.length;t++)if(this.eq(r[t]))return true;return false};
/**
                Test whether this mark has the same type and attributes as
                another mark.
                */r.prototype.eq=function(r){return this==r||this.type==r.type&&m(this.attrs,r.attrs)};
/**
                Convert this mark to a JSON-serializeable representation.
                */r.prototype.toJSON=function(){var r={type:this.type.name};for(var t in this.attrs){r.attrs=this.attrs;break}return r};
/**
                Deserialize a mark from JSON.
                */r.fromJSON=function(r,t){if(!t)throw new RangeError("Invalid input for Mark.fromJSON");var n=r.marks[t.type];if(!n)throw new RangeError("There is no mark type ".concat(t.type," in this schema"));var e=n.create(t.attrs);return e};
/**
                Test whether two sets of marks are identical.
                */r.sameSet=function(r,t){if(r==t)return true;if(r.length!=t.length)return false;for(var n=0;n<r.length;n++)if(!r[n].eq(t[n]))return false;return true};
/**
                Create a properly sorted mark set from null, a single mark, or an
                unsorted array of marks.
                */r.setFrom=function(t){if(!t||Array.isArray(t)&&t.length==0)return r.none;if(t instanceof r)return[t];var n=t.slice();n.sort((function(r,t){return r.type.rank-t.type.rank}));return n};return r}();
/**
            The empty set of marks.
            */w.none=[];
/**
            Error type raised by [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) when
            given an invalid replacement.
            */var y=/** @class */function(r){__extends(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t}(Error);
/**
            A slice represents a piece cut out of a larger document. It
            stores not only a fragment, but also the depth up to which nodes on
            both side are ‘open’ (cut through).
            */var k=/** @class */function(){
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
function r(
/**
                The slice's content.
                */
r,
/**
                The open depth at the start of the fragment.
                */
t,
/**
                The open depth at the end.
                */
n){this.content=r;this.openStart=t;this.openEnd=n}Object.defineProperty(r.prototype,"size",{
/**
                    The size this slice would add when inserted into a document.
                    */
get:function(){return this.content.size-this.openStart-this.openEnd},enumerable:false,configurable:true});
/**
                @internal
                */r.prototype.insertAt=function(t,n){var e=x(this.content,t+this.openStart,n,this.openStart+1,this.openEnd+1);return e&&new r(e,this.openStart,this.openEnd)};
/**
                @internal
                */r.prototype.removeBetween=function(t,n){return new r(_(this.content,t+this.openStart,n+this.openStart),this.openStart,this.openEnd)};
/**
                Tests whether this slice is equal to another slice.
                */r.prototype.eq=function(r){return this.content.eq(r.content)&&this.openStart==r.openStart&&this.openEnd==r.openEnd};
/**
                @internal
                */r.prototype.toString=function(){return this.content+"("+this.openStart+","+this.openEnd+")"};
/**
                Convert a slice to a JSON-serializable representation.
                */r.prototype.toJSON=function(){if(!this.content.size)return null;var r={content:this.content.toJSON()};if(this.openStart>0)r.openStart=this.openStart;if(this.openEnd>0)r.openEnd=this.openEnd;return r};
/**
                Deserialize a slice from its JSON representation.
                */r.fromJSON=function(t,n){if(!n)return r.empty;var e=n.openStart||0,i=n.openEnd||0;if(typeof e!="number"||typeof i!="number")throw new RangeError("Invalid input for Slice.fromJSON");return new r(p.fromJSON(t,n.content),e,i)};
/**
                Create a slice from a fragment by taking the maximum possible
                open value on both side of the fragment.
                */r.maxOpen=function(t,n){if(n===void 0){n=true}var e=0,i=0;for(var u=t.firstChild;u&&!u.isLeaf&&(n||!u.type.spec.isolating);u=u.firstChild)e++;for(var u=t.lastChild;u&&!u.isLeaf&&(n||!u.type.spec.isolating);u=u.lastChild)i++;return new r(t,e,i)};return r}();
/**
            The empty slice.
            */k.empty=new k(p.empty,0,0);function _(r,t,n){var e=r.findIndex(t),i=e.index,u=e.offset,a=r.maybeChild(i);var f=r.findIndex(n),o=f.index,s=f.offset;if(u==t||a.isText){if(s!=n&&!r.child(o).isText)throw new RangeError("Removing non-flat range");return r.cut(0,t).append(r.cut(n))}if(i!=o)throw new RangeError("Removing non-flat range");return r.replaceChild(i,a.copy(_(a.content,t-u-1,n-u-1)))}function x(r,t,n,e,i,u){var a=r.findIndex(t),f=a.index,o=a.offset,s=r.maybeChild(f);if(o==t||s.isText){if(u&&e<=0&&i<=0&&!u.canReplace(f,f,n))return null;return r.cut(0,t).append(n).append(r.cut(t))}var l=x(s.content,t-o-1,n,f==0?e-1:0,f==r.childCount-1?i-1:0,s);return l&&r.replaceChild(f,s.copy(l))}function M(r,t,n){if(n.openStart>r.depth)throw new y("Inserted content deeper than insertion position");if(r.depth-n.openStart!=t.depth-n.openEnd)throw new y("Inconsistent open depths");return O(r,t,n,0)}function O(r,t,n,e){var i=r.index(e),u=r.node(e);if(i==t.index(e)&&e<r.depth-n.openStart){var a=O(r,t,n,e+1);return u.copy(u.content.replaceChild(i,a))}else if(!n.content.size){return C(u,R(r,t,e))}else if(!n.openStart&&!n.openEnd&&r.depth==e&&t.depth==e){// Simple, flat case
var f=r.parent,o=f.content;return C(f,o.cut(0,r.parentOffset).append(n.content).append(o.cut(t.parentOffset)))}else{var s=L(n,r),l=s.start,v=s.end;return C(u,j(r,l,v,t,e))}}function T(r,t){if(!t.type.compatibleContent(r.type))throw new y("Cannot join "+t.type.name+" onto "+r.type.name)}function A(r,t,n){var e=r.node(n);T(e,t.node(n));return e}function E(r,t){var n=t.length-1;if(n>=0&&r.isText&&r.sameMarkup(t[n]))t[n]=r.withText(t[n].text+r.text);else t.push(r)}function S(r,t,n,e){var i=(t||r).node(n);var u=0,a=t?t.index(n):i.childCount;if(r){u=r.index(n);if(r.depth>n){u++}else if(r.textOffset){E(r.nodeAfter,e);u++}}for(var f=u;f<a;f++)E(i.child(f),e);if(t&&t.depth==n&&t.textOffset)E(t.nodeBefore,e)}function C(r,t){if(!r.type.validContent(t))throw new y("Invalid content for node "+r.type.name);return r.copy(t)}function j(r,t,n,e,i){var u=r.depth>i&&A(r,t,i+1);var a=e.depth>i&&A(n,e,i+1);var f=[];S(null,r,i,f);if(u&&a&&t.index(i)==n.index(i)){T(u,a);E(C(u,j(r,t,n,e,i+1)),f)}else{if(u)E(C(u,R(r,t,i+1)),f);S(t,n,i,f);if(a)E(C(a,R(n,e,i+1)),f)}S(e,null,i,f);return new p(f)}function R(r,t,n){var e=[];S(null,r,n,e);if(r.depth>n){var i=A(r,t,n+1);E(C(i,R(r,t,n+1)),e)}S(t,null,n,e);return new p(e)}function L(r,t){var n=t.depth-r.openStart,e=t.node(n);var i=e.copy(r.content);for(var u=n-1;u>=0;u--)i=t.node(u).copy(p.from(i));return{start:i.resolveNoCache(r.openStart+n),end:i.resolveNoCache(i.content.size-r.openEnd-n)}}
/**
            You can [_resolve_](https://prosemirror.net/docs/ref/#model.Node.resolve) a position to get more
            information about it. Objects of this class represent such a
            resolved position, providing various pieces of context
            information, and some helper methods.

            Throughout this interface, methods that take an optional `depth`
            parameter will interpret undefined as `this.depth` and negative
            numbers as `this.depth + value`.
            */var N=/** @class */function(){
/**
                @internal
                */
function r(
/**
                The position that was resolved.
                */
r,
/**
                @internal
                */
t,
/**
                The offset this position has into its parent node.
                */
n){this.pos=r;this.path=t;this.parentOffset=n;this.depth=t.length/3-1}
/**
                @internal
                */r.prototype.resolveDepth=function(r){if(r==null)return this.depth;if(r<0)return this.depth+r;return r};Object.defineProperty(r.prototype,"parent",{
/**
                    The parent node that the position points into. Note that even if
                    a position points into a text node, that node is not considered
                    the parent—text nodes are ‘flat’ in this model, and have no content.
                    */
get:function(){return this.node(this.depth)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"doc",{
/**
                    The root node in which the position was resolved.
                    */
get:function(){return this.node(0)},enumerable:false,configurable:true});
/**
                The ancestor node at the given level. `p.node(p.depth)` is the
                same as `p.parent`.
                */r.prototype.node=function(r){return this.path[this.resolveDepth(r)*3]};
/**
                The index into the ancestor at the given level. If this points
                at the 3rd node in the 2nd paragraph on the top level, for
                example, `p.index(0)` is 1 and `p.index(1)` is 2.
                */r.prototype.index=function(r){return this.path[this.resolveDepth(r)*3+1]};
/**
                The index pointing after this position into the ancestor at the
                given level.
                */r.prototype.indexAfter=function(r){r=this.resolveDepth(r);return this.index(r)+(r==this.depth&&!this.textOffset?0:1)};
/**
                The (absolute) position at the start of the node at the given
                level.
                */r.prototype.start=function(r){r=this.resolveDepth(r);return r==0?0:this.path[r*3-1]+1};
/**
                The (absolute) position at the end of the node at the given
                level.
                */r.prototype.end=function(r){r=this.resolveDepth(r);return this.start(r)+this.node(r).content.size};
/**
                The (absolute) position directly before the wrapping node at the
                given level, or, when `depth` is `this.depth + 1`, the original
                position.
                */r.prototype.before=function(r){r=this.resolveDepth(r);if(!r)throw new RangeError("There is no position before the top-level node");return r==this.depth+1?this.pos:this.path[r*3-1]};
/**
                The (absolute) position directly after the wrapping node at the
                given level, or the original position when `depth` is `this.depth + 1`.
                */r.prototype.after=function(r){r=this.resolveDepth(r);if(!r)throw new RangeError("There is no position after the top-level node");return r==this.depth+1?this.pos:this.path[r*3-1]+this.path[r*3].nodeSize};Object.defineProperty(r.prototype,"textOffset",{
/**
                    When this position points into a text node, this returns the
                    distance between the position and the start of the text node.
                    Will be zero for positions that point between nodes.
                    */
get:function(){return this.pos-this.path[this.path.length-1]},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"nodeAfter",{
/**
                    Get the node directly after the position, if any. If the position
                    points into a text node, only the part of that node after the
                    position is returned.
                    */
get:function(){var r=this.parent,t=this.index(this.depth);if(t==r.childCount)return null;var n=this.pos-this.path[this.path.length-1],e=r.child(t);return n?r.child(t).cut(n):e},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"nodeBefore",{
/**
                    Get the node directly before the position, if any. If the
                    position points into a text node, only the part of that node
                    before the position is returned.
                    */
get:function(){var r=this.index(this.depth);var t=this.pos-this.path[this.path.length-1];if(t)return this.parent.child(r).cut(0,t);return r==0?null:this.parent.child(r-1)},enumerable:false,configurable:true});
/**
                Get the position at the given index in the parent node at the
                given depth (which defaults to `this.depth`).
                */r.prototype.posAtIndex=function(r,t){t=this.resolveDepth(t);var n=this.path[t*3],e=t==0?0:this.path[t*3-1]+1;for(var i=0;i<r;i++)e+=n.child(i).nodeSize;return e};
/**
                Get the marks at this position, factoring in the surrounding
                marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
                position is at the start of a non-empty node, the marks of the
                node after it (if any) are returned.
                */r.prototype.marks=function(){var r=this.parent,t=this.index();
// In an empty parent, return the empty array
if(r.content.size==0)return w.none;
// When inside a text node, just return the text node's marks
if(this.textOffset)return r.child(t).marks;var n=r.maybeChild(t-1),e=r.maybeChild(t);
// If the `after` flag is true of there is no node before, make
// the node after this position the main reference.
if(!n){var i=n;n=e;e=i}
// Use all marks in the main node, except those that have
// `inclusive` set to false and are not present in the other node.
var u=n.marks;for(var a=0;a<u.length;a++)if(u[a].type.spec.inclusive===false&&(!e||!u[a].isInSet(e.marks)))u=u[a--].removeFromSet(u);return u};
/**
                Get the marks after the current position, if any, except those
                that are non-inclusive and not present at position `$end`. This
                is mostly useful for getting the set of marks to preserve after a
                deletion. Will return `null` if this position is at the end of
                its parent node or its parent node isn't a textblock (in which
                case no marks should be preserved).
                */r.prototype.marksAcross=function(r){var t=this.parent.maybeChild(this.index());if(!t||!t.isInline)return null;var n=t.marks,e=r.parent.maybeChild(r.index());for(var i=0;i<n.length;i++)if(n[i].type.spec.inclusive===false&&(!e||!n[i].isInSet(e.marks)))n=n[i--].removeFromSet(n);return n};
/**
                The depth up to which this position and the given (non-resolved)
                position share the same parent nodes.
                */r.prototype.sharedDepth=function(r){for(var t=this.depth;t>0;t--)if(this.start(t)<=r&&this.end(t)>=r)return t;return 0};
/**
                Returns a range based on the place where this position and the
                given position diverge around block content. If both point into
                the same textblock, for example, a range around that textblock
                will be returned. If they point into different blocks, the range
                around those blocks in their shared ancestor is returned. You can
                pass in an optional predicate that will be called with a parent
                node to see if a range into that parent is acceptable.
                */r.prototype.blockRange=function(r,t){if(r===void 0){r=this}if(r.pos<this.pos)return r.blockRange(this);for(var n=this.depth-(this.parent.inlineContent||this.pos==r.pos?1:0);n>=0;n--)if(r.pos<=this.end(n)&&(!t||t(this.node(n))))return new D(this,r,n);return null};
/**
                Query whether the given position shares the same parent node.
                */r.prototype.sameParent=function(r){return this.pos-this.parentOffset==r.pos-r.parentOffset};
/**
                Return the greater of this and the given position.
                */r.prototype.max=function(r){return r.pos>this.pos?r:this};
/**
                Return the smaller of this and the given position.
                */r.prototype.min=function(r){return r.pos<this.pos?r:this};
/**
                @internal
                */r.prototype.toString=function(){var r="";for(var t=1;t<=this.depth;t++)r+=(r?"/":"")+this.node(t).type.name+"_"+this.index(t-1);return r+":"+this.parentOffset};
/**
                @internal
                */r.resolve=function(t,n){if(!(n>=0&&n<=t.content.size))throw new RangeError("Position "+n+" out of range");var e=[];var i=0,u=n;for(var a=t;;){var f=a.content.findIndex(u),o=f.index,s=f.offset;var l=u-s;e.push(a,o,i+s);if(!l)break;a=a.child(o);if(a.isText)break;u=l-1;i+=s+1}return new r(n,e,u)};
/**
                @internal
                */r.resolveCached=function(t,n){var e=H.get(t);if(e){for(var i=0;i<e.elts.length;i++){var u=e.elts[i];if(u.pos==n)return u}}else{H.set(t,e=new P)}var a=e.elts[e.i]=r.resolve(t,n);e.i=(e.i+1)%I;return a};return r}();var P=/** @class */function(){function r(){this.elts=[];this.i=0}return r}();var I=12,H=new WeakMap;
/**
            Represents a flat range of content, i.e. one that starts and
            ends in the same node.
            */var D=/** @class */function(){
/**
                Construct a node range. `$from` and `$to` should point into the
                same node until at least the given `depth`, since a node range
                denotes an adjacent set of nodes in a single parent node.
                */
function r(
/**
                A resolved position along the start of the content. May have a
                `depth` greater than this object's `depth` property, since
                these are the positions that were used to compute the range,
                not re-resolved positions directly at its boundaries.
                */
r,
/**
                A position along the end of the content. See
                caveat for [`$from`](https://prosemirror.net/docs/ref/#model.NodeRange.$from).
                */
t,
/**
                The depth of the node that this range points into.
                */
n){this.$from=r;this.$to=t;this.depth=n}Object.defineProperty(r.prototype,"start",{
/**
                    The position at the start of the range.
                    */
get:function(){return this.$from.before(this.depth+1)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"end",{
/**
                    The position at the end of the range.
                    */
get:function(){return this.$to.after(this.depth+1)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"parent",{
/**
                    The parent node that the range points into.
                    */
get:function(){return this.$from.node(this.depth)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"startIndex",{
/**
                    The start index of the range in the parent node.
                    */
get:function(){return this.$from.index(this.depth)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"endIndex",{
/**
                    The end index of the range in the parent node.
                    */
get:function(){return this.$to.indexAfter(this.depth)},enumerable:false,configurable:true});return r}();var z=Object.create(null);
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
            */var B=/** @class */function(){
/**
                @internal
                */
function r(
/**
                The type of node that this is.
                */
r,
/**
                An object mapping attribute names to values. The kind of
                attributes allowed and required are
                [determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.
                */
t,
// A fragment holding the node's children.
n,
/**
                The marks (things like whether it is emphasized or part of a
                link) applied to this node.
                */
e){if(e===void 0){e=w.none}this.type=r;this.attrs=t;this.marks=e;this.content=n||p.empty}Object.defineProperty(r.prototype,"children",{
/**
                    The array of this node's child nodes.
                    */
get:function(){return this.content.content},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"nodeSize",{
/**
                    The size of this node, as defined by the integer-based [indexing
                    scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
                    amount of characters. For other leaf nodes, it is one. For
                    non-leaf nodes, it is the size of the content plus two (the
                    start and end token).
                    */
get:function(){return this.isLeaf?1:2+this.content.size},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"childCount",{
/**
                    The number of children that the node has.
                    */
get:function(){return this.content.childCount},enumerable:false,configurable:true});
/**
                Get the child node at the given index. Raises an error when the
                index is out of range.
                */r.prototype.child=function(r){return this.content.child(r)};
/**
                Get the child node at the given index, if it exists.
                */r.prototype.maybeChild=function(r){return this.content.maybeChild(r)};
/**
                Call `f` for every child node, passing the node, its offset
                into this parent node, and its index.
                */r.prototype.forEach=function(r){this.content.forEach(r)};
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
                */r.prototype.nodesBetween=function(r,t,n,e){if(e===void 0){e=0}this.content.nodesBetween(r,t,n,e,this)};
/**
                Call the given callback for every descendant node. Doesn't
                descend into a node when the callback returns `false`.
                */r.prototype.descendants=function(r){this.nodesBetween(0,this.content.size,r)};Object.defineProperty(r.prototype,"textContent",{
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
                */r.prototype.textBetween=function(r,t,n,e){return this.content.textBetween(r,t,n,e)};Object.defineProperty(r.prototype,"firstChild",{
/**
                    Returns this node's first child, or `null` if there are no
                    children.
                    */
get:function(){return this.content.firstChild},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"lastChild",{
/**
                    Returns this node's last child, or `null` if there are no
                    children.
                    */
get:function(){return this.content.lastChild},enumerable:false,configurable:true});
/**
                Test whether two nodes represent the same piece of document.
                */r.prototype.eq=function(r){return this==r||this.sameMarkup(r)&&this.content.eq(r.content)};
/**
                Compare the markup (type, attributes, and marks) of this node to
                those of another. Returns `true` if both have the same markup.
                */r.prototype.sameMarkup=function(r){return this.hasMarkup(r.type,r.attrs,r.marks)};
/**
                Check whether this node's markup correspond to the given type,
                attributes, and marks.
                */r.prototype.hasMarkup=function(r,t,n){return this.type==r&&m(this.attrs,t||r.defaultAttrs||z)&&w.sameSet(this.marks,n||w.none)};
/**
                Create a new node with the same markup as this node, containing
                the given content (or empty, if no content is given).
                */r.prototype.copy=function(t){if(t===void 0){t=null}if(t==this.content)return this;return new r(this.type,this.attrs,t,this.marks)};
/**
                Create a copy of this node, with the given set of marks instead
                of the node's own marks.
                */r.prototype.mark=function(t){return t==this.marks?this:new r(this.type,this.attrs,this.content,t)};
/**
                Create a copy of this node with only the content between the
                given positions. If `to` is not given, it defaults to the end of
                the node.
                */r.prototype.cut=function(r,t){if(t===void 0){t=this.content.size}if(r==0&&t==this.content.size)return this;return this.copy(this.content.cut(r,t))};
/**
                Cut out the part of the document between the given positions, and
                return it as a `Slice` object.
                */r.prototype.slice=function(r,t,n){if(t===void 0){t=this.content.size}if(n===void 0){n=false}if(r==t)return k.empty;var e=this.resolve(r),i=this.resolve(t);var u=n?0:e.sharedDepth(t);var a=e.start(u),f=e.node(u);var o=f.content.cut(e.pos-a,i.pos-a);return new k(o,e.depth-u,i.depth-u)};
/**
                Replace the part of the document between the given positions with
                the given slice. The slice must 'fit', meaning its open sides
                must be able to connect to the surrounding content, and its
                content nodes must be valid children for the node they are placed
                into. If any of this is violated, an error of type
                [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
                */r.prototype.replace=function(r,t,n){return M(this.resolve(r),this.resolve(t),n)};
/**
                Find the node directly after the given position.
                */r.prototype.nodeAt=function(r){for(var t=this;;){var n=t.content.findIndex(r),e=n.index,i=n.offset;t=t.maybeChild(e);if(!t)return null;if(i==r||t.isText)return t;r-=i+1}};
/**
                Find the (direct) child node after the given offset, if any,
                and return it along with its index and offset relative to this
                node.
                */r.prototype.childAfter=function(r){var t=this.content.findIndex(r),n=t.index,e=t.offset;return{node:this.content.maybeChild(n),index:n,offset:e}};
/**
                Find the (direct) child node before the given offset, if any,
                and return it along with its index and offset relative to this
                node.
                */r.prototype.childBefore=function(r){if(r==0)return{node:null,index:0,offset:0};var t=this.content.findIndex(r),n=t.index,e=t.offset;if(e<r)return{node:this.content.child(n),index:n,offset:e};var i=this.content.child(n-1);return{node:i,index:n-1,offset:e-i.nodeSize}};
/**
                Resolve the given position in the document, returning an
                [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
                */r.prototype.resolve=function(r){return N.resolveCached(this,r)};
/**
                @internal
                */r.prototype.resolveNoCache=function(r){return N.resolve(this,r)};
/**
                Test whether a given mark or mark type occurs in this document
                between the two given positions.
                */r.prototype.rangeHasMark=function(r,t,n){var e=false;if(t>r)this.nodesBetween(r,t,(function(r){if(n.isInSet(r.marks))e=true;return!e}));return e};Object.defineProperty(r.prototype,"isBlock",{
/**
                    True when this is a block (non-inline node)
                    */
get:function(){return this.type.isBlock},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"isTextblock",{
/**
                    True when this is a textblock node, a block node with inline
                    content.
                    */
get:function(){return this.type.isTextblock},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"inlineContent",{
/**
                    True when this node allows inline content.
                    */
get:function(){return this.type.inlineContent},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"isInline",{
/**
                    True when this is an inline node (a text node or a node that can
                    appear among text).
                    */
get:function(){return this.type.isInline},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"isText",{
/**
                    True when this is a text node.
                    */
get:function(){return this.type.isText},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"isLeaf",{
/**
                    True when this is a leaf node.
                    */
get:function(){return this.type.isLeaf},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"isAtom",{
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
                */r.prototype.toString=function(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);var r=this.type.name;if(this.content.size)r+="("+this.content.toStringInner()+")";return K(this.marks,r)};
/**
                Get the content match in this node at the given index.
                */r.prototype.contentMatchAt=function(r){var t=this.type.contentMatch.matchFragment(this.content,0,r);if(!t)throw new Error("Called contentMatchAt on a node with invalid content");return t};
/**
                Test whether replacing the range between `from` and `to` (by
                child index) with the given replacement fragment (which defaults
                to the empty fragment) would leave the node's content valid. You
                can optionally pass `start` and `end` indices into the
                replacement fragment.
                */r.prototype.canReplace=function(r,t,n,e,i){if(n===void 0){n=p.empty}if(e===void 0){e=0}if(i===void 0){i=n.childCount}var u=this.contentMatchAt(r).matchFragment(n,e,i);var a=u&&u.matchFragment(this.content,t);if(!a||!a.validEnd)return false;for(var f=e;f<i;f++)if(!this.type.allowsMarks(n.child(f).marks))return false;return true};
/**
                Test whether replacing the range `from` to `to` (by index) with
                a node of the given type would leave the node's content valid.
                */r.prototype.canReplaceWith=function(r,t,n,e){if(e&&!this.type.allowsMarks(e))return false;var i=this.contentMatchAt(r).matchType(n);var u=i&&i.matchFragment(this.content,t);return u?u.validEnd:false};
/**
                Test whether the given node's content could be appended to this
                node. If that node is empty, this will only return true if there
                is at least one node type that can appear in both nodes (to avoid
                merging completely incompatible nodes).
                */r.prototype.canAppend=function(r){if(r.content.size)return this.canReplace(this.childCount,this.childCount,r.content);else return this.type.compatibleContent(r.type)};
/**
                Check whether this node and its descendants conform to the
                schema, and raise an exception when they do not.
                */r.prototype.check=function(){this.type.checkContent(this.content);F(this.type.attrs,this.attrs,"node",this.type.name);var r=w.none;for(var t=0;t<this.marks.length;t++){var n=this.marks[t];F(n.type.attrs,n.attrs,"mark",n.type.name);r=n.addToSet(r)}if(!w.sameSet(r,this.marks))throw new RangeError("Invalid collection of marks for node ".concat(this.type.name,": ").concat(this.marks.map((function(r){return r.type.name}))));this.content.forEach((function(r){return r.check()}))};
/**
                Return a JSON-serializeable representation of this node.
                */r.prototype.toJSON=function(){var r={type:this.type.name};for(var t in this.attrs){r.attrs=this.attrs;break}if(this.content.size)r.content=this.content.toJSON();if(this.marks.length)r.marks=this.marks.map((function(r){return r.toJSON()}));return r};
/**
                Deserialize a node from its JSON representation.
                */r.fromJSON=function(r,t){if(!t)throw new RangeError("Invalid input for Node.fromJSON");var n=undefined;if(t.marks){if(!Array.isArray(t.marks))throw new RangeError("Invalid mark data for Node.fromJSON");n=t.marks.map(r.markFromJSON)}if(t.type=="text"){if(typeof t.text!="string")throw new RangeError("Invalid text node in JSON");return r.text(t.text,n)}var e=p.fromJSON(r,t.content);var i=r.nodeType(t.type).create(t.attrs,e,n);return i};return r}();B.prototype.text=undefined;
// V8 can leak big strings if you take a slice from them and hang on
// to the slice (https://issues.chromium.org/issues/41480525). If it
// looks like we're on V8 (by stack trace pattern), use such strings
// as index to an object first to intern them to avoid leaking memory
// in, for example, inverted steps stored in history. (#1609)
var U=function(){var r=new Error("/").stack;if(!r||!/\n\s*at\s/.test(r))return function(r){return r};return function(r){return r}}();var $=/** @class */function(r){__extends(t,r);
/**
                @internal
                */function t(t,n,e,i){var u=r.call(this,t,n,null,i)||this;if(!e)throw new RangeError("Empty text nodes are not allowed");u.text=e;return u}t.prototype.toString=function(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);return K(this.marks,JSON.stringify(this.text))};Object.defineProperty(t.prototype,"textContent",{get:function(){return this.text},enumerable:false,configurable:true});t.prototype.textBetween=function(r,t){return U(this.text.slice(r,t))};Object.defineProperty(t.prototype,"nodeSize",{get:function(){return this.text.length},enumerable:false,configurable:true});t.prototype.mark=function(r){return r==this.marks?this:new t(this.type,this.attrs,this.text,r)};t.prototype.withText=function(r){if(r==this.text)return this;return new t(this.type,this.attrs,r,this.marks)};t.prototype.cut=function(r,t){if(r===void 0){r=0}if(t===void 0){t=this.text.length}if(r==0&&t==this.text.length)return this;return this.withText(U(this.text.slice(r,t)))};t.prototype.eq=function(r){return this.sameMarkup(r)&&this.text==r.text};t.prototype.toJSON=function(){var t=r.prototype.toJSON.call(this);t.text=this.text;return t};return t}(B);function K(r,t){for(var n=r.length-1;n>=0;n--)t=r[n].type.name+"("+t+")";return t}function F(r,t,n,e){for(var i in t)if(!(i in r))throw new RangeError("Unsupported attribute ".concat(i," for ").concat(n," of type ").concat(e));for(var i in r){if(r[i].validate)r[i].validate(t[i])}}
/**
            Instances of this class represent a match state of a node type's
            [content expression](https://prosemirror.net/docs/ref/#model.NodeSpec.content), and can be used to
            find out whether further content matches here, and whether a given
            position is a valid end of the node.
            */var W=/** @class */function(){
/**
                @internal
                */
function r(
/**
                True when this match state represents a valid end of the node.
                */
r){this.validEnd=r;
/**
                    @internal
                    */this.next=[];
/**
                    @internal
                    */this.wrapCache=[]}
/**
                @internal
                */r.parse=function(t,n){var e=new q(t,n);if(e.next==null)return r.empty;var i=V(e);if(e.next)e.err("Unexpected trailing text");var u=er(rr(i));ir(u,e);return u};
/**
                Match a node type, returning a match after that node if
                successful.
                */r.prototype.matchType=function(r){for(var t=0;t<this.next.length;t++)if(this.next[t].type==r)return this.next[t].next;return null};
/**
                Try to match a fragment. Returns the resulting match when
                successful.
                */r.prototype.matchFragment=function(r,t,n){if(t===void 0){t=0}if(n===void 0){n=r.childCount}var e=this;for(var i=t;e&&i<n;i++)e=e.matchType(r.child(i).type);return e};Object.defineProperty(r.prototype,"inlineContent",{
/**
                    @internal
                    */
get:function(){return this.next.length!=0&&this.next[0].type.isInline},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"defaultType",{
/**
                    Get the first matching node type at this match position that can
                    be generated.
                    */
get:function(){for(var r=0;r<this.next.length;r++){var t=this.next[r].type;if(!(t.isText||t.hasRequiredAttrs()))return t}return null},enumerable:false,configurable:true});
/**
                @internal
                */r.prototype.compatible=function(r){for(var t=0;t<this.next.length;t++)for(var n=0;n<r.next.length;n++)if(this.next[t].type==r.next[n].type)return true;return false};
/**
                Try to match the given fragment, and if that fails, see if it can
                be made to match by inserting nodes in front of it. When
                successful, return a fragment of inserted nodes (which may be
                empty if nothing had to be inserted). When `toEnd` is true, only
                return a fragment if the resulting match goes to the end of the
                content expression.
                */r.prototype.fillBefore=function(r,t,n){if(t===void 0){t=false}if(n===void 0){n=0}var e=[this];function i(u,a){var f=u.matchFragment(r,n);if(f&&(!t||f.validEnd))return p.from(a.map((function(r){return r.createAndFill()})));for(var o=0;o<u.next.length;o++){var s=u.next[o],l=s.type,v=s.next;if(!(l.isText||l.hasRequiredAttrs())&&e.indexOf(v)==-1){e.push(v);var c=i(v,a.concat(l));if(c)return c}}return null}return i(this,[])};
/**
                Find a set of wrapping node types that would allow a node of the
                given type to appear at this position. The result may be empty
                (when it fits directly) and will be null when no such wrapping
                exists.
                */r.prototype.findWrapping=function(r){for(var t=0;t<this.wrapCache.length;t+=2)if(this.wrapCache[t]==r)return this.wrapCache[t+1];var n=this.computeWrapping(r);this.wrapCache.push(r,n);return n};
/**
                @internal
                */r.prototype.computeWrapping=function(r){var t=Object.create(null),n=[{match:this,type:null,via:null}];while(n.length){var e=n.shift(),i=e.match;if(i.matchType(r)){var u=[];for(var a=e;a.type;a=a.via)u.push(a.type);return u.reverse()}for(var f=0;f<i.next.length;f++){var o=i.next[f],s=o.type,l=o.next;if(!s.isLeaf&&!s.hasRequiredAttrs()&&!(s.name in t)&&(!e.type||l.validEnd)){n.push({match:s.contentMatch,type:s,via:e});t[s.name]=true}}}return null};Object.defineProperty(r.prototype,"edgeCount",{
/**
                    The number of outgoing edges this node has in the finite
                    automaton that describes the content expression.
                    */
get:function(){return this.next.length},enumerable:false,configurable:true});
/**
                Get the _n_​th outgoing edge from this node in the finite
                automaton that describes the content expression.
                */r.prototype.edge=function(r){if(r>=this.next.length)throw new RangeError("There's no ".concat(r,"th edge in this content match"));return this.next[r]};
/**
                @internal
                */r.prototype.toString=function(){var r=[];function t(n){r.push(n);for(var e=0;e<n.next.length;e++)if(r.indexOf(n.next[e].next)==-1)t(n.next[e].next)}t(this);return r.map((function(t,n){var e=n+(t.validEnd?"*":" ")+" ";for(var i=0;i<t.next.length;i++)e+=(i?", ":"")+t.next[i].type.name+"->"+r.indexOf(t.next[i].next);return e})).join("\n")};return r}();
/**
            @internal
            */W.empty=new W(true);var q=/** @class */function(){function r(r,t){this.string=r;this.nodeTypes=t;this.inline=null;this.pos=0;this.tokens=r.split(/\s*(?=\b|\W|$)/);if(this.tokens[this.tokens.length-1]=="")this.tokens.pop();if(this.tokens[0]=="")this.tokens.shift()}Object.defineProperty(r.prototype,"next",{get:function(){return this.tokens[this.pos]},enumerable:false,configurable:true});r.prototype.eat=function(r){return this.next==r&&(this.pos++||true)};r.prototype.err=function(r){throw new SyntaxError(r+" (in content expression '"+this.string+"')")};return r}();function V(r){var t=[];do{t.push(G(r))}while(r.eat("|"));return t.length==1?t[0]:{type:"choice",exprs:t}}function G(r){var t=[];do{t.push(J(r))}while(r.next&&r.next!=")"&&r.next!="|");return t.length==1?t[0]:{type:"seq",exprs:t}}function J(r){var t=Z(r);for(;;){if(r.eat("+"))t={type:"plus",expr:t};else if(r.eat("*"))t={type:"star",expr:t};else if(r.eat("?"))t={type:"opt",expr:t};else if(r.eat("{"))t=Y(r,t);else break}return t}function X(r){if(/\D/.test(r.next))r.err("Expected number, got '"+r.next+"'");var t=Number(r.next);r.pos++;return t}function Y(r,t){var n=X(r),e=n;if(r.eat(",")){if(r.next!="}")e=X(r);else e=-1}if(!r.eat("}"))r.err("Unclosed braced range");return{type:"range",min:n,max:e,expr:t}}function Q(r,t){var n=r.nodeTypes,e=n[t];if(e)return[e];var i=[];for(var u in n){var a=n[u];if(a.isInGroup(t))i.push(a)}if(i.length==0)r.err("No node type or group '"+t+"' found");return i}function Z(r){if(r.eat("(")){var t=V(r);if(!r.eat(")"))r.err("Missing closing paren");return t}else if(!/\W/.test(r.next)){var n=Q(r,r.next).map((function(t){if(r.inline==null)r.inline=t.isInline;else if(r.inline!=t.isInline)r.err("Mixing inline and block content");return{type:"name",value:t}}));r.pos++;return n.length==1?n[0]:{type:"choice",exprs:n}}else{r.err("Unexpected token '"+r.next+"'")}}
// Construct an NFA from an expression as returned by the parser. The
// NFA is represented as an array of states, which are themselves
// arrays of edges, which are `{term, to}` objects. The first state is
// the entry state and the last node is the success state.

// Note that unlike typical NFAs, the edge ordering in this one is
// significant, in that it is used to contruct filler content when
// necessary.
function rr(r){var t=[[]];i(u(r,0),n());return t;function n(){return t.push([])-1}function e(r,n,e){var i={term:e,to:n};t[r].push(i);return i}function i(r,t){r.forEach((function(r){return r.to=t}))}function u(r,t){if(r.type=="choice"){return r.exprs.reduce((function(r,n){return r.concat(u(n,t))}),[])}else if(r.type=="seq"){for(var a=0;;a++){var f=u(r.exprs[a],t);if(a==r.exprs.length-1)return f;i(f,t=n())}}else if(r.type=="star"){var o=n();e(t,o);i(u(r.expr,o),o);return[e(o)]}else if(r.type=="plus"){var o=n();i(u(r.expr,t),o);i(u(r.expr,o),o);return[e(o)]}else if(r.type=="opt"){return[e(t)].concat(u(r.expr,t))}else if(r.type=="range"){var s=t;for(var l=0;l<r.min;l++){var f=n();i(u(r.expr,s),f);s=f}if(r.max==-1){i(u(r.expr,s),s)}else{for(var v=r.min;v<r.max;v++){var f=n();e(s,f);i(u(r.expr,s),f);s=f}}return[e(s)]}else if(r.type=="name"){return[e(t,undefined,r.value)]}else{throw new Error("Unknown expr type")}}}function tr(r,t){return t-r}
// Get the set of nodes reachable by null edges from `node`. Omit
// nodes with only a single null-out-edge, since they may lead to
// needless duplicated nodes.
function nr(r,t){var n=[];e(t);return n.sort(tr);function e(t){var i=r[t];if(i.length==1&&!i[0].term)return e(i[0].to);n.push(t);for(var u=0;u<i.length;u++){var a=i[u],f=a.term,o=a.to;if(!f&&n.indexOf(o)==-1)e(o)}}}
// Compiles an NFA as produced by `nfa` into a DFA, modeled as a set
// of state objects (`ContentMatch` instances) with transitions
// between them.
function er(r){var t=Object.create(null);return n(nr(r,0));function n(e){var i=[];e.forEach((function(t){r[t].forEach((function(t){var n=t.term,e=t.to;if(!n)return;var u;for(var a=0;a<i.length;a++)if(i[a][0]==n)u=i[a][1];nr(r,e).forEach((function(r){if(!u)i.push([n,u=[]]);if(u.indexOf(r)==-1)u.push(r)}))}))}));var u=t[e.join(",")]=new W(e.indexOf(r.length-1)>-1);for(var a=0;a<i.length;a++){var f=i[a][1].sort(tr);u.next.push({type:i[a][0],next:t[f.join(",")]||n(f)})}return u}}function ir(r,t){for(var n=0,e=[r];n<e.length;n++){var i=e[n],u=!i.validEnd,a=[];for(var f=0;f<i.next.length;f++){var o=i.next[f],s=o.type,l=o.next;a.push(s.name);if(u&&!(s.isText||s.hasRequiredAttrs()))u=false;if(e.indexOf(l)==-1)e.push(l)}if(u)t.err("Only non-generatable nodes ("+a.join(", ")+") in a required position (see https://prosemirror.net/docs/guide/#generatable)")}}
// For node types where all attrs have a default value (or which don't
// have any attributes), build up a single reusable default attribute
// object, and use it for all nodes that don't specify specific
// attributes.
function ur(r){var t=Object.create(null);for(var n in r){var e=r[n];if(!e.hasDefault)return null;t[n]=e.default}return t}function ar(r,t){var n=Object.create(null);for(var e in r){var i=r[e];var u=t&&t[e];if(u===undefined){if(i.hasDefault)u=i.default;else throw new RangeError("No value supplied for attribute "+e)}else if(i.validate){i.validate(u)}n[e]=u}return n}function fr(r,t){var n=Object.create(null);if(t)for(var e in t)n[e]=new lr(r,e,t[e]);return n}
/**
            Node types are objects allocated once per `Schema` and used to
            [tag](https://prosemirror.net/docs/ref/#model.Node.type) `Node` instances. They contain information
            about the node type, such as its name and what kind of node it
            represents.
            */var or=/** @class */function(){
/**
                @internal
                */
function r(
/**
                The name the node type has in this schema.
                */
r,
/**
                A link back to the `Schema` the node type belongs to.
                */
t,
/**
                The spec that this type is based on
                */
n){this.name=r;this.schema=t;this.spec=n;
/**
                    The set of marks allowed in this node. `null` means all marks
                    are allowed.
                    */this.markSet=null;this.groups=n.group?n.group.split(" "):[];this.attrs=fr(r,n.attrs);this.defaultAttrs=ur(this.attrs);this.contentMatch=null;this.inlineContent=null;this.isBlock=!(n.inline||r=="text");this.isText=r=="text"}Object.defineProperty(r.prototype,"isInline",{
/**
                    True if this is an inline type.
                    */
get:function(){return!this.isBlock},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"isTextblock",{
/**
                    True if this is a textblock type, a block that contains inline
                    content.
                    */
get:function(){return this.isBlock&&this.inlineContent},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"isLeaf",{
/**
                    True for node types that allow no content.
                    */
get:function(){return this.contentMatch==W.empty},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"isAtom",{
/**
                    True when this node is an atom, i.e. when it does not have
                    directly editable content.
                    */
get:function(){return this.isLeaf||!!this.spec.atom},enumerable:false,configurable:true});
/**
                Return true when this node type is part of the given
                [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
                */r.prototype.isInGroup=function(r){return this.groups.indexOf(r)>-1};Object.defineProperty(r.prototype,"whitespace",{
/**
                    The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
                    */
get:function(){return this.spec.whitespace||(this.spec.code?"pre":"normal")},enumerable:false,configurable:true});
/**
                Tells you whether this node type has any required attributes.
                */r.prototype.hasRequiredAttrs=function(){for(var r in this.attrs)if(this.attrs[r].isRequired)return true;return false};
/**
                Indicates whether this node allows some of the same content as
                the given node type.
                */r.prototype.compatibleContent=function(r){return this==r||this.contentMatch.compatible(r.contentMatch)};
/**
                @internal
                */r.prototype.computeAttrs=function(r){if(!r&&this.defaultAttrs)return this.defaultAttrs;else return ar(this.attrs,r)};
/**
                Create a `Node` of this type. The given attributes are
                checked and defaulted (you can pass `null` to use the type's
                defaults entirely, if no required attributes exist). `content`
                may be a `Fragment`, a node, an array of nodes, or
                `null`. Similarly `marks` may be `null` to default to the empty
                set of marks.
                */r.prototype.create=function(r,t,n){if(r===void 0){r=null}if(this.isText)throw new Error("NodeType.create can't construct text nodes");return new B(this,this.computeAttrs(r),p.from(t),w.setFrom(n))};
/**
                Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
                against the node type's content restrictions, and throw an error
                if it doesn't match.
                */r.prototype.createChecked=function(r,t,n){if(r===void 0){r=null}t=p.from(t);this.checkContent(t);return new B(this,this.computeAttrs(r),t,w.setFrom(n))};
/**
                Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
                necessary to add nodes to the start or end of the given fragment
                to make it fit the node. If no fitting wrapping can be found,
                return null. Note that, due to the fact that required nodes can
                always be created, this will always succeed if you pass null or
                `Fragment.empty` as content.
                */r.prototype.createAndFill=function(r,t,n){if(r===void 0){r=null}r=this.computeAttrs(r);t=p.from(t);if(t.size){var e=this.contentMatch.fillBefore(t);if(!e)return null;t=e.append(t)}var i=this.contentMatch.matchFragment(t);var u=i&&i.fillBefore(p.empty,true);if(!u)return null;return new B(this,r,t.append(u),w.setFrom(n))};
/**
                Returns true if the given fragment is valid content for this node
                type.
                */r.prototype.validContent=function(r){var t=this.contentMatch.matchFragment(r);if(!t||!t.validEnd)return false;for(var n=0;n<r.childCount;n++)if(!this.allowsMarks(r.child(n).marks))return false;return true};
/**
                Throws a RangeError if the given fragment is not valid content for this
                node type.
                @internal
                */r.prototype.checkContent=function(r){if(!this.validContent(r))throw new RangeError("Invalid content for node ".concat(this.name,": ").concat(r.toString().slice(0,50)))};
/**
                @internal no longer useful, but called by old prosemirror-view versions
                */r.prototype.checkAttrs=function(r){};
/**
                Check whether the given mark type is allowed in this node.
                */r.prototype.allowsMarkType=function(r){return this.markSet==null||this.markSet.indexOf(r)>-1};
/**
                Test whether the given set of marks are allowed in this node.
                */r.prototype.allowsMarks=function(r){if(this.markSet==null)return true;for(var t=0;t<r.length;t++)if(!this.allowsMarkType(r[t].type))return false;return true};
/**
                Removes the marks that are not allowed in this node from the given set.
                */r.prototype.allowedMarks=function(r){if(this.markSet==null)return r;var t;for(var n=0;n<r.length;n++){if(!this.allowsMarkType(r[n].type)){if(!t)t=r.slice(0,n)}else if(t){t.push(r[n])}}return!t?r:t.length?t:w.none};
/**
                @internal
                */r.compile=function(t,n){var e=Object.create(null);t.forEach((function(t,i){return e[t]=new r(t,n,i)}));var i=n.spec.topNode||"doc";if(!e[i])throw new RangeError("Schema is missing its top node type ('"+i+"')");if(!e.text)throw new RangeError("Every schema needs a 'text' type");for(var u in e.text.attrs)throw new RangeError("The text node type should not have attributes");return e};return r}();function sr(r,t,n){var e=n.split("|");return function(n){var i=n===null?"null":typeof n;if(e.indexOf(i)<0)throw new RangeError("Expected value of type ".concat(e," for attribute ").concat(t," on type ").concat(r,", got ").concat(i))}}
// Attribute descriptors
var lr=/** @class */function(){function r(r,t,n){this.hasDefault=Object.prototype.hasOwnProperty.call(n,"default");this.default=n.default;this.validate=typeof n.validate=="string"?sr(r,t,n.validate):n.validate}Object.defineProperty(r.prototype,"isRequired",{get:function(){return!this.hasDefault},enumerable:false,configurable:true});return r}();
// Marks
/**
            Like nodes, marks (which are associated with nodes to signify
            things like emphasis or being part of a link) are
            [tagged](https://prosemirror.net/docs/ref/#model.Mark.type) with type objects, which are
            instantiated once per `Schema`.
            */var vr=/** @class */function(){
/**
                @internal
                */
function r(
/**
                The name of the mark type.
                */
r,
/**
                @internal
                */
t,
/**
                The schema that this mark type instance is part of.
                */
n,
/**
                The spec on which the type is based.
                */
e){this.name=r;this.rank=t;this.schema=n;this.spec=e;this.attrs=fr(r,e.attrs);this.excluded=null;var i=ur(this.attrs);this.instance=i?new w(this,i):null}
/**
                Create a mark of this type. `attrs` may be `null` or an object
                containing only some of the mark's attributes. The others, if
                they have defaults, will be added.
                */r.prototype.create=function(r){if(r===void 0){r=null}if(!r&&this.instance)return this.instance;return new w(this,ar(this.attrs,r))};
/**
                @internal
                */r.compile=function(t,n){var e=Object.create(null),i=0;t.forEach((function(t,u){return e[t]=new r(t,i++,n,u)}));return e};
/**
                When there is a mark of this type in the given set, a new set
                without it is returned. Otherwise, the input set is returned.
                */r.prototype.removeFromSet=function(r){for(var t=0;t<r.length;t++)if(r[t].type==this){r=r.slice(0,t).concat(r.slice(t+1));t--}return r};
/**
                Tests whether there is a mark of this type in the given set.
                */r.prototype.isInSet=function(r){for(var t=0;t<r.length;t++)if(r[t].type==this)return r[t]};
/**
                Queries whether a given mark type is
                [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
                */r.prototype.excludes=function(r){return this.excluded.indexOf(r)>-1};return r}();
/**
            A document schema. Holds [node](https://prosemirror.net/docs/ref/#model.NodeType) and [mark
            type](https://prosemirror.net/docs/ref/#model.MarkType) objects for the nodes and marks that may
            occur in conforming documents, and provides functionality for
            creating and deserializing such documents.

            When given, the type parameters provide the names of the nodes and
            marks in this schema.
            */var cr=/** @class */function(){
/**
                Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
                */
function r(r){var t=this;
/**
                    The [linebreak
                    replacement](https://prosemirror.net/docs/ref/#model.NodeSpec.linebreakReplacement) node defined
                    in this schema, if any.
                    */this.linebreakReplacement=null;
/**
                    An object for storing whatever values modules may want to
                    compute and cache per schema. (If you want to store something
                    in it, try to use property names unlikely to clash.)
                    */this.cached=Object.create(null);var n=this.spec={};for(var e in r)n[e]=r[e];n.nodes=l.from(r.nodes),n.marks=l.from(r.marks||{}),this.nodes=or.compile(this.spec.nodes,this);this.marks=vr.compile(this.spec.marks,this);var i=Object.create(null);for(var e in this.nodes){if(e in this.marks)throw new RangeError(e+" can not be both a node and a mark");var u=this.nodes[e],a=u.spec.content||"",f=u.spec.marks;u.contentMatch=i[a]||(i[a]=W.parse(a,this.nodes));u.inlineContent=u.contentMatch.inlineContent;if(u.spec.linebreakReplacement){if(this.linebreakReplacement)throw new RangeError("Multiple linebreak nodes defined");if(!u.isInline||!u.isLeaf)throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");this.linebreakReplacement=u}u.markSet=f=="_"?null:f?hr(this,f.split(" ")):f==""||!u.inlineContent?[]:null}for(var e in this.marks){var u=this.marks[e],o=u.spec.excludes;u.excluded=o==null?[u]:o==""?[]:hr(this,o.split(" "))}this.nodeFromJSON=function(r){return B.fromJSON(t,r)};this.markFromJSON=function(r){return w.fromJSON(t,r)};this.topNodeType=this.nodes[this.spec.topNode||"doc"];this.cached.wrappings=Object.create(null)}
/**
                Create a node in this schema. The `type` may be a string or a
                `NodeType` instance. Attributes will be extended with defaults,
                `content` may be a `Fragment`, `null`, a `Node`, or an array of
                nodes.
                */r.prototype.node=function(r,t,n,e){if(t===void 0){t=null}if(typeof r=="string")r=this.nodeType(r);else if(!(r instanceof or))throw new RangeError("Invalid node type: "+r);else if(r.schema!=this)throw new RangeError("Node type from different schema used ("+r.name+")");return r.createChecked(t,n,e)};
/**
                Create a text node in the schema. Empty text nodes are not
                allowed.
                */r.prototype.text=function(r,t){var n=this.nodes.text;return new $(n,n.defaultAttrs,r,w.setFrom(t))};
/**
                Create a mark with the given type and attributes.
                */r.prototype.mark=function(r,t){if(typeof r=="string")r=this.marks[r];return r.create(t)};
/**
                @internal
                */r.prototype.nodeType=function(r){var t=this.nodes[r];if(!t)throw new RangeError("Unknown node type: "+r);return t};return r}();function hr(r,t){var n=[];for(var e=0;e<t.length;e++){var i=t[e],u=r.marks[i],a=u;if(u){n.push(u)}else{for(var f in r.marks){var o=r.marks[f];if(i=="_"||o.spec.group&&o.spec.group.split(" ").indexOf(i)>-1)n.push(a=o)}}if(!a)throw new SyntaxError("Unknown mark type: '"+t[e]+"'")}return n}function dr(r){return r.tag!=null}function pr(r){return r.style!=null}
/**
            A DOM parser represents a strategy for parsing DOM content into a
            ProseMirror document conforming to a given schema. Its behavior is
            defined by an array of [rules](https://prosemirror.net/docs/ref/#model.ParseRule).
            */var br=/** @class */function(){
/**
                Create a parser that targets the given schema, using the given
                parsing rules.
                */
function r(
/**
                The schema into which the parser parses.
                */
r,
/**
                The set of [parse rules](https://prosemirror.net/docs/ref/#model.ParseRule) that the parser
                uses, in order of precedence.
                */
t){var n=this;this.schema=r;this.rules=t;
/**
                    @internal
                    */this.tags=[];
/**
                    @internal
                    */this.styles=[];var e=this.matchedStyles=[];t.forEach((function(r){if(dr(r)){n.tags.push(r)}else if(pr(r)){var t=/[^=]*/.exec(r.style)[0];if(e.indexOf(t)<0)e.push(t);n.styles.push(r)}}));
// Only normalize list elements when lists in the schema can't directly contain themselves
this.normalizeLists=!this.tags.some((function(t){if(!/^(ul|ol)\b/.test(t.tag)||!t.node)return false;var n=r.nodes[t.node];return n.contentMatch.matchType(n)}))}
/**
                Parse a document from the content of a DOM node.
                */r.prototype.parse=function(r,t){if(t===void 0){t={}}var n=new Or(this,t,false);n.addAll(r,w.none,t.from,t.to);return n.finish()};
/**
                Parses the content of the given DOM node, like
                [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
                options. But unlike that method, which produces a whole node,
                this one returns a slice that is open at the sides, meaning that
                the schema constraints aren't applied to the start of nodes to
                the left of the input and the end of nodes at the end.
                */r.prototype.parseSlice=function(r,t){if(t===void 0){t={}}var n=new Or(this,t,true);n.addAll(r,w.none,t.from,t.to);return k.maxOpen(n.finish())};
/**
                @internal
                */r.prototype.matchTag=function(r,t,n){for(var e=n?this.tags.indexOf(n)+1:0;e<this.tags.length;e++){var i=this.tags[e];if(Ar(r,i.tag)&&(i.namespace===undefined||r.namespaceURI==i.namespace)&&(!i.context||t.matchesContext(i.context))){if(i.getAttrs){var u=i.getAttrs(r);if(u===false)continue;i.attrs=u||undefined}return i}}};
/**
                @internal
                */r.prototype.matchStyle=function(r,t,n,e){for(var i=e?this.styles.indexOf(e)+1:0;i<this.styles.length;i++){var u=this.styles[i],a=u.style;if(a.indexOf(r)!=0||u.context&&!n.matchesContext(u.context)||
// Test that the style string either precisely matches the prop,
// or has an '=' sign after the prop, followed by the given
// value.
a.length>r.length&&(a.charCodeAt(r.length)!=61||a.slice(r.length+1)!=t))continue;if(u.getAttrs){var f=u.getAttrs(t);if(f===false)continue;u.attrs=f||undefined}return u}};
/**
                @internal
                */r.schemaRules=function(r){var t=[];function n(r){var n=r.priority==null?50:r.priority,e=0;for(;e<t.length;e++){var i=t[e],u=i.priority==null?50:i.priority;if(u<n)break}t.splice(e,0,r)}var e=function(t){var e=r.marks[t].spec.parseDOM;if(e)e.forEach((function(r){n(r=Er(r));if(!(r.mark||r.ignore||r.clearMark))r.mark=t}))};for(var i in r.marks){e(i)}var u=function(t){var e=r.nodes[t].spec.parseDOM;if(e)e.forEach((function(r){n(r=Er(r));if(!(r.node||r.ignore||r.mark))r.node=t}))};for(var i in r.nodes){u(i)}return t};
/**
                Construct a DOM parser using the parsing rules listed in a
                schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
                [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
                */r.fromSchema=function(t){return t.cached.domParser||(t.cached.domParser=new r(t,r.schemaRules(t)))};return r}();var gr={address:true,article:true,aside:true,blockquote:true,body:true,canvas:true,dd:true,div:true,dl:true,fieldset:true,figcaption:true,figure:true,footer:true,form:true,h1:true,h2:true,h3:true,h4:true,h5:true,h6:true,header:true,hgroup:true,hr:true,li:true,noscript:true,ol:true,output:true,p:true,pre:true,section:true,table:true,tfoot:true,ul:true};var mr={head:true,noscript:true,object:true,script:true,style:true,title:true};var wr={ol:true,ul:true};
// Using a bitfield for node context options
var yr=1,kr=2,_r=4;function xr(r,t,n){if(t!=null)return(t?yr:0)|(t==="full"?kr:0);return r&&r.whitespace=="pre"?yr|kr:n&~_r}var Mr=/** @class */function(){function r(r,t,n,e,i,u){this.type=r;this.attrs=t;this.marks=n;this.solid=e;this.options=u;this.content=[];
// Marks applied to the node's children
this.activeMarks=w.none;this.match=i||(u&_r?null:r.contentMatch)}r.prototype.findWrapping=function(r){if(!this.match){if(!this.type)return[];var t=this.type.contentMatch.fillBefore(p.from(r));if(t){this.match=this.type.contentMatch.matchFragment(t)}else{var n=this.type.contentMatch,e;if(e=n.findWrapping(r.type)){this.match=n;return e}else{return null}}}return this.match.findWrapping(r.type)};r.prototype.finish=function(r){if(!(this.options&yr)){// Strip trailing whitespace
var t=this.content[this.content.length-1],n=void 0;if(t&&t.isText&&(n=/[ \t\r\n\u000c]+$/.exec(t.text))){var e=t;if(t.text.length==n[0].length)this.content.pop();else this.content[this.content.length-1]=e.withText(e.text.slice(0,e.text.length-n[0].length))}}var i=p.from(this.content);if(!r&&this.match)i=i.append(this.match.fillBefore(p.empty,true));return this.type?this.type.create(this.attrs,i,this.marks):i};r.prototype.inlineContext=function(r){if(this.type)return this.type.inlineContent;if(this.content.length)return this.content[0].isInline;return r.parentNode&&!gr.hasOwnProperty(r.parentNode.nodeName.toLowerCase())};return r}();var Or=/** @class */function(){function r(
// The parser we are using.
r,
// The options passed to this parse.
t,n){this.parser=r;this.options=t;this.isOpen=n;this.open=0;this.localPreserveWS=false;var e=t.topNode,i;var u=xr(null,t.preserveWhitespace,0)|(n?_r:0);if(e)i=new Mr(e.type,e.attrs,w.none,true,t.topMatch||e.type.contentMatch,u);else if(n)i=new Mr(null,null,w.none,true,null,u);else i=new Mr(r.schema.topNodeType,null,w.none,true,null,u);this.nodes=[i];this.find=t.findPositions;this.needsBlock=false}Object.defineProperty(r.prototype,"top",{get:function(){return this.nodes[this.open]},enumerable:false,configurable:true});
// Add a DOM node to the content. Text is inserted as text node,
// otherwise, the node is passed to `addElement` or, if it has a
// `style` attribute, `addElementWithStyles`.
r.prototype.addDOM=function(r,t){if(r.nodeType==3)this.addTextNode(r,t);else if(r.nodeType==1)this.addElement(r,t)};r.prototype.addTextNode=function(r,t){var n=r.nodeValue;var e=this.top,i=e.options&kr?"full":this.localPreserveWS||(e.options&yr)>0;var u=this.parser.schema;if(i==="full"||e.inlineContext(r)||/[^ \t\r\n\u000c]/.test(n)){if(!i){n=n.replace(/[ \t\r\n\u000c]+/g," ");
// If this starts with whitespace, and there is no node before it, or
// a hard break, or a text node that ends with whitespace, strip the
// leading space.
if(/^[ \t\r\n\u000c]/.test(n)&&this.open==this.nodes.length-1){var a=e.content[e.content.length-1];var f=r.previousSibling;if(!a||f&&f.nodeName=="BR"||a.isText&&/[ \t\r\n\u000c]$/.test(a.text))n=n.slice(1)}}else if(i==="full"){n=n.replace(/\r\n?/g,"\n")}else if(u.linebreakReplacement&&/[\r\n]/.test(n)&&this.top.findWrapping(u.linebreakReplacement.create())){var o=n.split(/\r?\n|\r/);for(var s=0;s<o.length;s++){if(s)this.insertNode(u.linebreakReplacement.create(),t,true);if(o[s])this.insertNode(u.text(o[s]),t,!/\S/.test(o[s]))}n=""}else{n=n.replace(/\r?\n|\r/g," ")}if(n)this.insertNode(u.text(n),t,!/\S/.test(n));this.findInText(r)}else{this.findInside(r)}};
// Try to find a handler for the given tag and use that to parse. If
// none is found, the element's content nodes are added directly.
r.prototype.addElement=function(r,t,n){var e=this.localPreserveWS,i=this.top;if(r.tagName=="PRE"||/pre/.test(r.style&&r.style.whiteSpace))this.localPreserveWS=true;var u=r.nodeName.toLowerCase(),a;if(wr.hasOwnProperty(u)&&this.parser.normalizeLists)Tr(r);var f=this.options.ruleFromNode&&this.options.ruleFromNode(r)||(a=this.parser.matchTag(r,this,n));r:if(f?f.ignore:mr.hasOwnProperty(u)){this.findInside(r);this.ignoreFallback(r,t)}else if(!f||f.skip||f.closeParent){if(f&&f.closeParent)this.open=Math.max(0,this.open-1);else if(f&&f.skip.nodeType)r=f.skip;var o=void 0,s=this.needsBlock;if(gr.hasOwnProperty(u)){if(i.content.length&&i.content[0].isInline&&this.open){this.open--;i=this.top}o=true;if(!i.type)this.needsBlock=true}else if(!r.firstChild){this.leafFallback(r,t);break r}var l=f&&f.skip?t:this.readStyles(r,t);if(l)this.addAll(r,l);if(o)this.sync(i);this.needsBlock=s}else{var l=this.readStyles(r,t);if(l)this.addElementByRule(r,f,l,f.consuming===false?a:undefined)}this.localPreserveWS=e};
// Called for leaf DOM nodes that would otherwise be ignored
r.prototype.leafFallback=function(r,t){if(r.nodeName=="BR"&&this.top.type&&this.top.type.inlineContent)this.addTextNode(r.ownerDocument.createTextNode("\n"),t)};
// Called for ignored nodes
r.prototype.ignoreFallback=function(r,t){
// Ignored BR nodes should at least create an inline context
if(r.nodeName=="BR"&&(!this.top.type||!this.top.type.inlineContent))this.findPlace(this.parser.schema.text("-"),t,true)};
// Run any style parser associated with the node's styles. Either
// return an updated array of marks, or null to indicate some of the
// styles had a rule with `ignore` set.
r.prototype.readStyles=function(r,t){var n=r.style;
// Because many properties will only show up in 'normalized' form
// in `style.item` (i.e. text-decoration becomes
// text-decoration-line, text-decoration-color, etc), we directly
// query the styles mentioned in our rules instead of iterating
// over the items.
if(n&&n.length)for(var e=0;e<this.parser.matchedStyles.length;e++){var i=this.parser.matchedStyles[e],u=n.getPropertyValue(i);if(u){var a=function(r){var n=f.parser.matchStyle(i,u,f,r);if(!n)return o=r,"break";if(n.ignore)return{value:null};if(n.clearMark)t=t.filter((function(r){return!n.clearMark(r)}));else t=t.concat(f.parser.schema.marks[n.mark].create(n.attrs));if(n.consuming===false)r=n;else return o=r,"break";o=r};var f=this,o;for(var s=undefined;;){var l=a(s);s=o;if(typeof l==="object")return l.value;if(l==="break")break}}}return t};
// Look up a handler for the given node. If none are found, return
// false. Otherwise, apply it, use its return value to drive the way
// the node's content is wrapped, and return true.
r.prototype.addElementByRule=function(r,t,n,e){var i=this;var u,a;if(t.node){a=this.parser.schema.nodes[t.node];if(!a.isLeaf){var f=this.enter(a,t.attrs||null,n,t.preserveWhitespace);if(f){u=true;n=f}}else if(!this.insertNode(a.create(t.attrs),n,r.nodeName=="BR")){this.leafFallback(r,n)}}else{var o=this.parser.schema.marks[t.mark];n=n.concat(o.create(t.attrs))}var s=this.top;if(a&&a.isLeaf){this.findInside(r)}else if(e){this.addElement(r,n,e)}else if(t.getContent){this.findInside(r);t.getContent(r,this.parser.schema).forEach((function(r){return i.insertNode(r,n,false)}))}else{var l=r;if(typeof t.contentElement=="string")l=r.querySelector(t.contentElement);else if(typeof t.contentElement=="function")l=t.contentElement(r);else if(t.contentElement)l=t.contentElement;this.findAround(r,l,true);this.addAll(l,n);this.findAround(r,l,false)}if(u&&this.sync(s))this.open--};
// Add all child nodes between `startIndex` and `endIndex` (or the
// whole node, if not given). If `sync` is passed, use it to
// synchronize after every block element.
r.prototype.addAll=function(r,t,n,e){var i=n||0;for(var u=n?r.childNodes[n]:r.firstChild,a=e==null?null:r.childNodes[e];u!=a;u=u.nextSibling,++i){this.findAtPoint(r,i);this.addDOM(u,t)}this.findAtPoint(r,i)};
// Try to find a way to fit the given node type into the current
// context. May add intermediate wrappers and/or leave non-solid
// nodes that we're in.
r.prototype.findPlace=function(r,t,n){var e,i;for(var u=this.open,a=0;u>=0;u--){var f=this.nodes[u];var o=f.findWrapping(r);if(o&&(!e||e.length>o.length+a)){e=o;i=f;if(!o.length)break}if(f.solid){if(n)break;a+=2}}if(!e)return null;this.sync(i);for(var s=0;s<e.length;s++)t=this.enterInner(e[s],null,t,false);return t};
// Try to insert the given node, adjusting the context when needed.
r.prototype.insertNode=function(r,t,n){if(r.isInline&&this.needsBlock&&!this.top.type){var e=this.textblockFromContext();if(e)t=this.enterInner(e,null,t)}var i=this.findPlace(r,t,n);if(i){this.closeExtra();var u=this.top;if(u.match)u.match=u.match.matchType(r.type);var a=w.none;for(var f=0,o=i.concat(r.marks);f<o.length;f++){var s=o[f];if(u.type?u.type.allowsMarkType(s.type):Sr(s.type,r.type))a=s.addToSet(a)}u.content.push(r.mark(a));return true}return false};
// Try to start a node of the given type, adjusting the context when
// necessary.
r.prototype.enter=function(r,t,n,e){var i=this.findPlace(r.create(t),n,false);if(i)i=this.enterInner(r,t,n,true,e);return i};
// Open a node of the given type
r.prototype.enterInner=function(r,t,n,e,i){if(e===void 0){e=false}this.closeExtra();var u=this.top;u.match=u.match&&u.match.matchType(r);var a=xr(r,i,u.options);if(u.options&_r&&u.content.length==0)a|=_r;var f=w.none;n=n.filter((function(t){if(u.type?u.type.allowsMarkType(t.type):Sr(t.type,r)){f=t.addToSet(f);return false}return true}));this.nodes.push(new Mr(r,t,f,e,null,a));this.open++;return n};
// Make sure all nodes above this.open are finished and added to
// their parents
r.prototype.closeExtra=function(r){if(r===void 0){r=false}var t=this.nodes.length-1;if(t>this.open){for(;t>this.open;t--)this.nodes[t-1].content.push(this.nodes[t].finish(r));this.nodes.length=this.open+1}};r.prototype.finish=function(){this.open=0;this.closeExtra(this.isOpen);return this.nodes[0].finish(!!(this.isOpen||this.options.topOpen))};r.prototype.sync=function(r){for(var t=this.open;t>=0;t--){if(this.nodes[t]==r){this.open=t;return true}else if(this.localPreserveWS){this.nodes[t].options|=yr}}return false};Object.defineProperty(r.prototype,"currentPos",{get:function(){this.closeExtra();var r=0;for(var t=this.open;t>=0;t--){var n=this.nodes[t].content;for(var e=n.length-1;e>=0;e--)r+=n[e].nodeSize;if(t)r++}return r},enumerable:false,configurable:true});r.prototype.findAtPoint=function(r,t){if(this.find)for(var n=0;n<this.find.length;n++){if(this.find[n].node==r&&this.find[n].offset==t)this.find[n].pos=this.currentPos}};r.prototype.findInside=function(r){if(this.find)for(var t=0;t<this.find.length;t++){if(this.find[t].pos==null&&r.nodeType==1&&r.contains(this.find[t].node))this.find[t].pos=this.currentPos}};r.prototype.findAround=function(r,t,n){if(r!=t&&this.find)for(var e=0;e<this.find.length;e++){if(this.find[e].pos==null&&r.nodeType==1&&r.contains(this.find[e].node)){var i=t.compareDocumentPosition(this.find[e].node);if(i&(n?2:4))this.find[e].pos=this.currentPos}}};r.prototype.findInText=function(r){if(this.find)for(var t=0;t<this.find.length;t++){if(this.find[t].node==r)this.find[t].pos=this.currentPos-(r.nodeValue.length-this.find[t].offset)}};
// Determines whether the given context string matches this context.
r.prototype.matchesContext=function(r){var t=this;if(r.indexOf("|")>-1)return r.split(/\s*\|\s*/).some(this.matchesContext,this);var n=r.split("/");var e=this.options.context;var i=!this.isOpen&&(!e||e.parent.type==this.nodes[0].type);var u=-(e?e.depth+1:0)+(i?0:1);var a=function(r,f){for(;r>=0;r--){var o=n[r];if(o==""){if(r==n.length-1||r==0)continue;for(;f>=u;f--)if(a(r-1,f))return true;return false}else{var s=f>0||f==0&&i?t.nodes[f].type:e&&f>=u?e.node(f-u).type:null;if(!s||s.name!=o&&!s.isInGroup(o))return false;f--}}return true};return a(n.length-1,this.open)};r.prototype.textblockFromContext=function(){var r=this.options.context;if(r)for(var t=r.depth;t>=0;t--){var n=r.node(t).contentMatchAt(r.indexAfter(t)).defaultType;if(n&&n.isTextblock&&n.defaultAttrs)return n}for(var e in this.parser.schema.nodes){var i=this.parser.schema.nodes[e];if(i.isTextblock&&i.defaultAttrs)return i}};return r}();
// Kludge to work around directly nested list nodes produced by some
// tools and allowed by browsers to mean that the nested list is
// actually part of the list item above it.
function Tr(r){for(var t=r.firstChild,n=null;t;t=t.nextSibling){var e=t.nodeType==1?t.nodeName.toLowerCase():null;if(e&&wr.hasOwnProperty(e)&&n){n.appendChild(t);t=n}else if(e=="li"){n=t}else if(e){n=null}}}
// Apply a CSS selector.
function Ar(r,t){return(r.matches||r.msMatchesSelector||r.webkitMatchesSelector||r.mozMatchesSelector).call(r,t)}function Er(r){var t={};for(var n in r)t[n]=r[n];return t}
// Used when finding a mark at the top level of a fragment parse.
// Checks whether it would be reasonable to apply a given mark type to
// a given node, by looking at the way the mark occurs in the schema.
function Sr(r,t){var n=t.schema.nodes;var e=function(e){var i=n[e];if(!i.allowsMarkType(r))return"continue";var u=[],a=function(r){u.push(r);for(var n=0;n<r.edgeCount;n++){var e=r.edge(n),i=e.type,f=e.next;if(i==t)return true;if(u.indexOf(f)<0&&a(f))return true}};if(a(i.contentMatch))return{value:true}};for(var i in n){var u=e(i);if(typeof u==="object")return u.value}}
/**
            A DOM serializer knows how to convert ProseMirror nodes and
            marks of various types to DOM nodes.
            */var Cr=/** @class */function(){
/**
                Create a serializer. `nodes` should map node names to functions
                that take a node and return a description of the corresponding
                DOM. `marks` does the same for mark names, but also gets an
                argument that tells it whether the mark's content is block or
                inline content (for typical use, it'll always be inline). A mark
                serializer may be `null` to indicate that marks of that type
                should not be serialized.
                */
function r(
/**
                The node serialization functions.
                */
r,
/**
                The mark serialization functions.
                */
t){this.nodes=r;this.marks=t}
/**
                Serialize the content of this fragment to a DOM fragment. When
                not in the browser, the `document` option, containing a DOM
                document, should be passed so that the serializer can create
                nodes.
                */r.prototype.serializeFragment=function(r,t,n){var e=this;if(t===void 0){t={}}if(!n)n=Rr(t).createDocumentFragment();var i=n,u=[];r.forEach((function(r){if(u.length||r.marks.length){var n=0,a=0;while(n<u.length&&a<r.marks.length){var f=r.marks[a];if(!e.marks[f.type.name]){a++;continue}if(!f.eq(u[n][0])||f.type.spec.spanning===false)break;n++;a++}while(n<u.length)i=u.pop()[1];while(a<r.marks.length){var o=r.marks[a++];var s=e.serializeMark(o,r.isInline,t);if(s){u.push([o,i]);i.appendChild(s.dom);i=s.contentDOM||s.dom}}}i.appendChild(e.serializeNodeInner(r,t))}));return n};
/**
                @internal
                */r.prototype.serializeNodeInner=function(r,t){if(r.isText)return Rr(t).createTextNode(r.text);var n=Ir(Rr(t),this.nodes[r.type.name](r),null,r.attrs),e=n.dom,i=n.contentDOM;if(i){if(r.isLeaf)throw new RangeError("Content hole not allowed in a leaf node spec");this.serializeFragment(r.content,t,i)}return e};
/**
                Serialize this node to a DOM node. This can be useful when you
                need to serialize a part of a document, as opposed to the whole
                document. To serialize a whole document, use
                [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
                its [content](https://prosemirror.net/docs/ref/#model.Node.content).
                */r.prototype.serializeNode=function(r,t){if(t===void 0){t={}}var n=this.serializeNodeInner(r,t);for(var e=r.marks.length-1;e>=0;e--){var i=this.serializeMark(r.marks[e],r.isInline,t);if(i){(i.contentDOM||i.dom).appendChild(n);n=i.dom}}return n};
/**
                @internal
                */r.prototype.serializeMark=function(r,t,n){if(n===void 0){n={}}var e=this.marks[r.type.name];return e&&Ir(Rr(n),e(r,t),null,r.attrs)};r.renderSpec=function(r,t,n,e){if(n===void 0){n=null}
// Kludge for backwards-compatibility with accidental original behavious
if(typeof t=="string")return{dom:r.createTextNode(t)};return Ir(r,t,n,e)};
/**
                Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
                properties in a schema's node and mark specs.
                */r.fromSchema=function(t){return t.cached.domSerializer||(t.cached.domSerializer=new r(this.nodesFromSchema(t),this.marksFromSchema(t)))};
/**
                Gather the serializers in a schema's node specs into an object.
                This can be useful as a base to build a custom serializer from.
                */r.nodesFromSchema=function(r){var t=jr(r.nodes);if(!t.text)t.text=function(r){return r.text};return t};
/**
                Gather the serializers in a schema's mark specs into an object.
                */r.marksFromSchema=function(r){return jr(r.marks)};return r}();function jr(r){var t={};for(var n in r){var e=r[n].spec.toDOM;if(e)t[n]=e}return t}function Rr(r){return r.document||window.document}var Lr=new WeakMap;function Nr(r){var t=Lr.get(r);if(t===undefined)Lr.set(r,t=Pr(r));return t}function Pr(r){var t=null;function n(r){if(r&&typeof r=="object"){if(Array.isArray(r)){if(typeof r[0]=="string"){if(!t)t=[];t.push(r)}else{for(var e=0;e<r.length;e++)n(r[e])}}else{for(var i in r)n(r[i])}}}n(r);return t}function Ir(r,t,n,e){if(t.nodeType==1)return{dom:t};if(t.dom&&t.dom.nodeType==1)return t;var i=t[0],u;if(typeof i!="string")throw new RangeError("Invalid array passed to renderSpec");if(e&&(u=Nr(e))&&u.indexOf(t)>-1)throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");var a=i.indexOf(" ");if(a>0){n=i.slice(0,a);i=i.slice(a+1)}var f;var o=n?r.createElementNS(n,i):r.createElement(i);var s=t[1],l=1;if(s&&typeof s=="object"&&s.nodeType==null&&!Array.isArray(s)){l=2;for(var v in s)if(s[v]!=null){var c=v.indexOf(" ");if(c>0)o.setAttributeNS(v.slice(0,c),v.slice(c+1),s[v]);else if(v=="style"&&o.style)o.style.cssText=s[v];else o.setAttribute(v,s[v])}}for(var h=l;h<t.length;h++){var d=t[h];if(d===0){if(h<t.length-1||h>l)throw new RangeError("Content hole must be the only child of its parent node");return{dom:o,contentDOM:o}}else if(typeof d=="string"){o.appendChild(r.createTextNode(d))}else{var p=Ir(r,d,n,e),b=p.dom,g=p.contentDOM;o.appendChild(b);if(g){if(f)throw new RangeError("Multiple content holes");f=g}}}return{dom:o,contentDOM:f}}
// Recovery values encode a range index and an offset. They are
// represented as numbers, because tons of them will be created when
// mapping, for example, a large number of decorations. The number's
// lower 16 bits provide the index, the remaining bits the offset.

// Note: We intentionally don't use bit shift operators to en- and
// decode these, since those clip to 32 bits, which we might in rare
// cases want to overflow. A 64-bit float can represent 48-bit
// integers precisely.
var Hr=65535;var Dr=Math.pow(2,16);function zr(r,t){return r+t*Dr}function Br(r){return r&Hr}function Ur(r){return(r-(r&Hr))/Dr}var $r=1,Kr=2,Fr=4,Wr=8;
/**
            An object representing a mapped position with extra
            information.
            */var qr=/** @class */function(){
/**
                @internal
                */
function r(
/**
                The mapped version of the position.
                */
r,
/**
                @internal
                */
t,
/**
                @internal
                */
n){this.pos=r;this.delInfo=t;this.recover=n}Object.defineProperty(r.prototype,"deleted",{
/**
                    Tells you whether the position was deleted, that is, whether the
                    step removed the token on the side queried (via the `assoc`)
                    argument from the document.
                    */
get:function(){return(this.delInfo&Wr)>0},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"deletedBefore",{
/**
                    Tells you whether the token before the mapped position was deleted.
                    */
get:function(){return(this.delInfo&($r|Fr))>0},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"deletedAfter",{
/**
                    True when the token after the mapped position was deleted.
                    */
get:function(){return(this.delInfo&(Kr|Fr))>0},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"deletedAcross",{
/**
                    Tells whether any of the steps mapped through deletes across the
                    position (including both the token before and after the
                    position).
                    */
get:function(){return(this.delInfo&Fr)>0},enumerable:false,configurable:true});return r}();
/**
            A map describing the deletions and insertions made by a step, which
            can be used to find the correspondence between positions in the
            pre-step version of a document and the same position in the
            post-step version.
            */var Vr=/** @class */function(){
/**
                Create a position map. The modifications to the document are
                represented as an array of numbers, in which each group of three
                represents a modified chunk as `[start, oldSize, newSize]`.
                */
function r(
/**
                @internal
                */
t,
/**
                @internal
                */
n){if(n===void 0){n=false}this.ranges=t;this.inverted=n;if(!t.length&&r.empty)return r.empty}
/**
                @internal
                */r.prototype.recover=function(r){var t=0,n=Br(r);if(!this.inverted)for(var e=0;e<n;e++)t+=this.ranges[e*3+2]-this.ranges[e*3+1];return this.ranges[n*3]+t+Ur(r)};r.prototype.mapResult=function(r,t){if(t===void 0){t=1}return this._map(r,t,false)};r.prototype.map=function(r,t){if(t===void 0){t=1}return this._map(r,t,true)};
/**
                @internal
                */r.prototype._map=function(r,t,n){var e=0,i=this.inverted?2:1,u=this.inverted?1:2;for(var a=0;a<this.ranges.length;a+=3){var f=this.ranges[a]-(this.inverted?e:0);if(f>r)break;var o=this.ranges[a+i],s=this.ranges[a+u],l=f+o;if(r<=l){var v=!o?t:r==f?-1:r==l?1:t;var c=f+e+(v<0?0:s);if(n)return c;var h=r==(t<0?f:l)?null:zr(a/3,r-f);var d=0;if(o){d|=r==f?Kr:r==l?$r:Fr;if(t<0?r!=f:r!=l)d|=Wr}return new qr(c,d,h)}e+=s-o}return n?r+e:new qr(r+e,0,null)};
/**
                @internal
                */r.prototype.touches=function(r,t){var n=0,e=Br(t);var i=this.inverted?2:1,u=this.inverted?1:2;for(var a=0;a<this.ranges.length;a+=3){var f=this.ranges[a]-(this.inverted?n:0);if(f>r)break;var o=this.ranges[a+i],s=f+o;if(r<=s&&a==e*3)return true;n+=this.ranges[a+u]-o}return false};
/**
                Calls the given function on each of the changed ranges included in
                this map.
                */r.prototype.forEach=function(r){var t=this.inverted?2:1,n=this.inverted?1:2;for(var e=0,i=0;e<this.ranges.length;e+=3){var u=this.ranges[e],a=u-(this.inverted?i:0),f=u+(this.inverted?0:i);var o=this.ranges[e+t],s=this.ranges[e+n];r(a,a+o,f,f+s);i+=s-o}};
/**
                Create an inverted version of this map. The result can be used to
                map positions in the post-step document to the pre-step document.
                */r.prototype.invert=function(){return new r(this.ranges,!this.inverted)};
/**
                @internal
                */r.prototype.toString=function(){return(this.inverted?"-":"")+JSON.stringify(this.ranges)};
/**
                Create a map that moves all positions by offset `n` (which may be
                negative). This can be useful when applying steps meant for a
                sub-document to a larger document, or vice-versa.
                */r.offset=function(t){return t==0?r.empty:new r(t<0?[0,-t,0]:[0,0,t])};return r}();
/**
            A StepMap that contains no changed ranges.
            */Vr.empty=new Vr([]);
/**
            A mapping represents a pipeline of zero or more [step
            maps](https://prosemirror.net/docs/ref/#transform.StepMap). It has special provisions for losslessly
            handling mapping positions through a series of steps in which some
            steps are inverted versions of earlier steps. (This comes up when
            ‘[rebasing](https://prosemirror.net/docs/guide/#transform.rebasing)’ steps for
            collaboration or history management.)
            */var Gr=/** @class */function(){
/**
                Create a new mapping with the given position maps.
                */
function r(r,
/**
                @internal
                */
t,
/**
                The starting position in the `maps` array, used when `map` or
                `mapResult` is called.
                */
n,
/**
                The end position in the `maps` array.
                */
e){if(n===void 0){n=0}if(e===void 0){e=r?r.length:0}this.mirror=t;this.from=n;this.to=e;this._maps=r||[];this.ownData=!(r||t)}Object.defineProperty(r.prototype,"maps",{
/**
                    The step maps in this mapping.
                    */
get:function(){return this._maps},enumerable:false,configurable:true});
/**
                Create a mapping that maps only through a part of this one.
                */r.prototype.slice=function(t,n){if(t===void 0){t=0}if(n===void 0){n=this.maps.length}return new r(this._maps,this.mirror,t,n)};
/**
                Add a step map to the end of this mapping. If `mirrors` is
                given, it should be the index of the step map that is the mirror
                image of this one.
                */r.prototype.appendMap=function(r,t){if(!this.ownData){this._maps=this._maps.slice();this.mirror=this.mirror&&this.mirror.slice();this.ownData=true}this.to=this._maps.push(r);if(t!=null)this.setMirror(this._maps.length-1,t)};
/**
                Add all the step maps in a given mapping to this one (preserving
                mirroring information).
                */r.prototype.appendMapping=function(r){for(var t=r.from,n=this._maps.length;t<r.to;t++){var e=r.getMirror(t);if(e!=null)e=e<t&&e>=r.from?n+(e-r.from):undefined;this.appendMap(r._maps[t],e)}};
/**
                Finds the offset of the step map that mirrors the map at the
                given offset, in this mapping (as per the second argument to
                `appendMap`).
                */r.prototype.getMirror=function(r){if(this.mirror)for(var t=0;t<this.mirror.length;t++)if(this.mirror[t]==r)return this.mirror[t+(t%2?-1:1)]};
/**
                @internal
                */r.prototype.setMirror=function(r,t){if(!this.mirror)this.mirror=[];this.mirror.push(r,t)};
/**
                Append the inverse of the given mapping to this one.
                */r.prototype.appendMappingInverted=function(r){for(var t=r.to-1,n=this._maps.length+r._maps.length;t>=r.from;t--){var e=r.getMirror(t);if(e!=null)e=e>t&&e<r.to?n-(e-r.from)-1:undefined;this.appendMap(r._maps[t].invert(),e)}};
/**
                Create an inverted version of this mapping.
                */r.prototype.invert=function(){var t=new r;t.appendMappingInverted(this);return t};
/**
                Map a position through this mapping.
                */r.prototype.map=function(r,t){if(t===void 0){t=1}if(this.mirror)return this._map(r,t,true);for(var n=this.from;n<this.to;n++)r=this._maps[n].map(r,t);return r};
/**
                Map a position through this mapping, returning a mapping
                result.
                */r.prototype.mapResult=function(r,t){if(t===void 0){t=1}return this._map(r,t,false)};
/**
                @internal
                */r.prototype._map=function(r,t,n){var e=0;for(var i=this.from;i<this.to;i++){var u=this._maps[i],a=u.mapResult(r,t);if(a.recover!=null){var f=this.getMirror(i);if(f!=null&&f>i&&f<this.to){i=f;r=this._maps[f].recover(a.recover);continue}}e|=a.delInfo;r=a.pos}return n?r:new qr(r,e,null)};return r}();var Jr=Object.create(null);
/**
            A step object represents an atomic change. It generally applies
            only to the document it was created for, since the positions
            stored in it will only make sense for that document.

            New steps are defined by creating classes that extend `Step`,
            overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
            methods, and registering your class with a unique
            JSON-serialization identifier using
            [`Step.jsonID`](https://prosemirror.net/docs/ref/#transform.Step^jsonID).
            */var Xr=/** @class */function(){function r(){}
/**
                Get the step map that represents the changes made by this step,
                and which can be used to transform between positions in the old
                and the new document.
                */r.prototype.getMap=function(){return Vr.empty};
/**
                Try to merge this step with another one, to be applied directly
                after it. Returns the merged step when possible, null if the
                steps can't be merged.
                */r.prototype.merge=function(r){return null};
/**
                Deserialize a step from its JSON representation. Will call
                through to the step class' own implementation of this method.
                */r.fromJSON=function(r,t){if(!t||!t.stepType)throw new RangeError("Invalid input for Step.fromJSON");var n=Jr[t.stepType];if(!n)throw new RangeError("No step type ".concat(t.stepType," defined"));return n.fromJSON(r,t)};
/**
                To be able to serialize steps to JSON, each step needs a string
                ID to attach to its JSON representation. Use this method to
                register an ID for your step classes. Try to pick something
                that's unlikely to clash with steps from other modules.
                */r.jsonID=function(r,t){if(r in Jr)throw new RangeError("Duplicate use of step JSON ID "+r);Jr[r]=t;t.prototype.jsonID=r;return t};return r}();
/**
            The result of [applying](https://prosemirror.net/docs/ref/#transform.Step.apply) a step. Contains either a
            new document or a failure value.
            */var Yr=/** @class */function(){
/**
                @internal
                */
function r(
/**
                The transformed document, if successful.
                */
r,
/**
                The failure message, if unsuccessful.
                */
t){this.doc=r;this.failed=t}
/**
                Create a successful step result.
                */r.ok=function(t){return new r(t,null)};
/**
                Create a failed step result.
                */r.fail=function(t){return new r(null,t)};
/**
                Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
                arguments. Create a successful result if it succeeds, and a
                failed one if it throws a `ReplaceError`.
                */r.fromReplace=function(t,n,e,i){try{return r.ok(t.replace(n,e,i))}catch(t){if(t instanceof y)return r.fail(t.message);throw t}};return r}();function Qr(r,t,n){var e=[];for(var i=0;i<r.childCount;i++){var u=r.child(i);if(u.content.size)u=u.copy(Qr(u.content,t,u));if(u.isInline)u=t(u,n,i);e.push(u)}return p.fromArray(e)}
/**
            Add a mark to all inline content between two positions.
            */var Zr=/** @class */function(r){__extends(t,r);
/**
                Create a mark step.
                */function t(
/**
                The start of the marked range.
                */
t,
/**
                The end of the marked range.
                */
n,
/**
                The mark to add.
                */
e){var i=r.call(this)||this;i.from=t;i.to=n;i.mark=e;return i}t.prototype.apply=function(r){var t=this;var n=r.slice(this.from,this.to),e=r.resolve(this.from);var i=e.node(e.sharedDepth(this.to));var u=new k(Qr(n.content,(function(r,n){if(!r.isAtom||!n.type.allowsMarkType(t.mark.type))return r;return r.mark(t.mark.addToSet(r.marks))}),i),n.openStart,n.openEnd);return Yr.fromReplace(r,this.from,this.to,u)};t.prototype.invert=function(r){var n=this;var e=[];r.nodesBetween(this.from,this.to,(function(r,i){if(r.isInline&&r.isAtom){var u=n.mark.addToSet(r.marks);if(!w.sameSet(u,r.marks)){var a=Math.max(n.from,i),f=Math.min(n.to,i+r.nodeSize);tt(rt,a,f,n.mark,e);for(var o=0,s=r.marks;o<s.length;o++){var l=s[o];if(!l.isInSet(u))tt(t,a,f,l,e)}}}}));return e.length==1?e[0]:new nt(e)};t.prototype.map=function(r){var n=r.map(this.from,1),e=r.map(this.to,-1);if(n>=e)return null;return new t(n,e,this.mark)};t.prototype.merge=function(r){if(r instanceof t&&r.mark.eq(this.mark)&&this.from<=r.to&&this.to>=r.from)return new t(Math.min(this.from,r.from),Math.max(this.to,r.to),this.mark);return null};t.prototype.toJSON=function(){return{stepType:"addMark",mark:this.mark.toJSON(),from:this.from,to:this.to}};
/**
                @internal
                */t.fromJSON=function(r,n){if(typeof n.from!="number"||typeof n.to!="number")throw new RangeError("Invalid input for AddMarkStep.fromJSON");return new t(n.from,n.to,r.markFromJSON(n.mark))};return t}(Xr);Xr.jsonID("addMark",Zr);
/**
            Remove a mark from all inline content between two positions.
            */var rt=/** @class */function(r){__extends(t,r);
/**
                Create a mark-removing step.
                */function t(
/**
                The start of the unmarked range.
                */
t,
/**
                The end of the unmarked range.
                */
n,
/**
                The mark to remove.
                */
e){var i=r.call(this)||this;i.from=t;i.to=n;i.mark=e;return i}t.prototype.apply=function(r){var t=this;var n=r.slice(this.from,this.to);var e=new k(Qr(n.content,(function(r){return r.mark(t.mark.removeFromSet(r.marks))}),r),n.openStart,n.openEnd);return Yr.fromReplace(r,this.from,this.to,e)};t.prototype.invert=function(r){var t=this;var n=[];r.nodesBetween(this.from,this.to,(function(r,e){if(r.isInline&&r.isAtom&&t.mark.isInSet(r.marks))tt(Zr,Math.max(t.from,e),Math.min(t.to,e+r.nodeSize),t.mark,n)}));return n.length==1?n[0]:new nt(n)};t.prototype.map=function(r){var n=r.map(this.from,1),e=r.map(this.to,-1);if(n>=e)return null;return new t(n,e,this.mark)};t.prototype.merge=function(r){if(r instanceof t&&r.mark.eq(this.mark)&&this.from<=r.to&&this.to>=r.from)return new t(Math.min(this.from,r.from),Math.max(this.to,r.to),this.mark);return null};t.prototype.toJSON=function(){return{stepType:"removeMark",mark:this.mark.toJSON(),from:this.from,to:this.to}};
/**
                @internal
                */t.fromJSON=function(r,n){if(typeof n.from!="number"||typeof n.to!="number")throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");return new t(n.from,n.to,r.markFromJSON(n.mark))};return t}(Xr);Xr.jsonID("removeMark",rt);function tt(r,t,n,e,i){var u=i.length?i[i.length-1]:null;if(u&&u instanceof r&&u.to==t&&u.mark.eq(e)){i[i.length-1]=new r(u.from,n,e)}else{i.push(new r(t,n,e))}}var nt=/** @class */function(r){__extends(t,r);function t(t){var n=r.call(this)||this;n.steps=t;return n}t.prototype.apply=function(r){for(var t=0,n=this.steps;t<n.length;t++){var e=n[t];var i=e.apply(r);if(!i.doc)return i;r=i.doc}return new Yr(r,null)};t.prototype.invert=function(r){return new t(this.steps.map((function(t){return t.invert(r)})))};t.prototype.map=function(r){var n=[];for(var e=0,i=this.steps;e<i.length;e++){var u=i[e];var a=u.map(r);if(a)n.push(a)}return n.length?new t(n):null};t.prototype.toJSON=function(){return{stepType:"markSet",steps:this.steps.map((function(r){return r.toJSON()}))}};t.fromJSON=function(r,n){if(!Array.isArray(n.steps)||!n.steps.every((function(r){return r.stepType=="addMark"||r.stepType=="removeMark"})))throw new RangeError("Invalid JSON for MarkSetStep");return new t(n.steps.map((function(t){return Xr.fromJSON(r,t)})))};return t}(Xr);Xr.jsonID("markSet",nt);
/**
            Add a mark to a specific node.
            */var et=/** @class */function(r){__extends(t,r);
/**
                Create a node mark step.
                */function t(
/**
                The position of the target node.
                */
t,
/**
                The mark to add.
                */
n){var e=r.call(this)||this;e.pos=t;e.mark=n;return e}t.prototype.apply=function(r){var t=r.nodeAt(this.pos);if(!t)return Yr.fail("No node at mark step's position");var n=t.type.create(t.attrs,null,this.mark.addToSet(t.marks));return Yr.fromReplace(r,this.pos,this.pos+1,new k(p.from(n),0,t.isLeaf?0:1))};t.prototype.invert=function(r){var n=r.nodeAt(this.pos);if(n){var e=this.mark.addToSet(n.marks);if(e.length==n.marks.length){for(var i=0;i<n.marks.length;i++)if(!n.marks[i].isInSet(e))return new t(this.pos,n.marks[i]);return new t(this.pos,this.mark)}}return new it(this.pos,this.mark)};t.prototype.map=function(r){var n=r.mapResult(this.pos,1);return n.deletedAfter?null:new t(n.pos,this.mark)};t.prototype.toJSON=function(){return{stepType:"addNodeMark",pos:this.pos,mark:this.mark.toJSON()}};
/**
                @internal
                */t.fromJSON=function(r,n){if(typeof n.pos!="number")throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");return new t(n.pos,r.markFromJSON(n.mark))};return t}(Xr);Xr.jsonID("addNodeMark",et);
/**
            Remove a mark from a specific node.
            */var it=/** @class */function(r){__extends(t,r);
/**
                Create a mark-removing step.
                */function t(
/**
                The position of the target node.
                */
t,
/**
                The mark to remove.
                */
n){var e=r.call(this)||this;e.pos=t;e.mark=n;return e}t.prototype.apply=function(r){var t=r.nodeAt(this.pos);if(!t)return Yr.fail("No node at mark step's position");var n=t.type.create(t.attrs,null,this.mark.removeFromSet(t.marks));return Yr.fromReplace(r,this.pos,this.pos+1,new k(p.from(n),0,t.isLeaf?0:1))};t.prototype.invert=function(r){var t=r.nodeAt(this.pos);if(!t||!this.mark.isInSet(t.marks))return this;return new et(this.pos,this.mark)};t.prototype.map=function(r){var n=r.mapResult(this.pos,1);return n.deletedAfter?null:new t(n.pos,this.mark)};t.prototype.toJSON=function(){return{stepType:"removeNodeMark",pos:this.pos,mark:this.mark.toJSON()}};
/**
                @internal
                */t.fromJSON=function(r,n){if(typeof n.pos!="number")throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");return new t(n.pos,r.markFromJSON(n.mark))};return t}(Xr);Xr.jsonID("removeNodeMark",it);
/**
            Replace a part of the document with a slice of new content.
            */var ut=/** @class */function(r){__extends(t,r);
/**
                The given `slice` should fit the 'gap' between `from` and
                `to`—the depths must line up, and the surrounding nodes must be
                able to be joined with the open sides of the slice. When
                `structure` is true, the step will fail if the content between
                from and to is not just a sequence of closing and then opening
                tokens (this is to guard against rebased replace steps
                overwriting something they weren't supposed to).
                */function t(
/**
                The start position of the replaced range.
                */
t,
/**
                The end position of the replaced range.
                */
n,
/**
                The slice to insert.
                */
e,
/**
                @internal
                */
i){if(i===void 0){i=false}var u=r.call(this)||this;u.from=t;u.to=n;u.slice=e;u.structure=i;return u}t.prototype.apply=function(r){if(this.structure&&ft(r,this.from,this.to))return Yr.fail("Structure replace would overwrite content");return Yr.fromReplace(r,this.from,this.to,this.slice)};t.prototype.getMap=function(){return new Vr([this.from,this.to-this.from,this.slice.size])};t.prototype.invert=function(r){return new t(this.from,this.from+this.slice.size,r.slice(this.from,this.to))};t.prototype.map=function(r){var n=r.mapResult(this.to,-1);var e=this.from==this.to&&t.MAP_BIAS<0?n:r.mapResult(this.from,1);if(e.deletedAcross&&n.deletedAcross)return null;return new t(e.pos,Math.max(e.pos,n.pos),this.slice,this.structure)};t.prototype.merge=function(r){if(!(r instanceof t)||r.structure||this.structure)return null;if(this.from+this.slice.size==r.from&&!this.slice.openEnd&&!r.slice.openStart){var n=this.slice.size+r.slice.size==0?k.empty:new k(this.slice.content.append(r.slice.content),this.slice.openStart,r.slice.openEnd);return new t(this.from,this.to+(r.to-r.from),n,this.structure)}else if(r.to==this.from&&!this.slice.openStart&&!r.slice.openEnd){var n=this.slice.size+r.slice.size==0?k.empty:new k(r.slice.content.append(this.slice.content),r.slice.openStart,this.slice.openEnd);return new t(r.from,this.to,n,this.structure)}else{return null}};t.prototype.toJSON=function(){var r={stepType:"replace",from:this.from,to:this.to};if(this.slice.size)r.slice=this.slice.toJSON();if(this.structure)r.structure=true;return r};
/**
                @internal
                */t.fromJSON=function(r,n){if(typeof n.from!="number"||typeof n.to!="number")throw new RangeError("Invalid input for ReplaceStep.fromJSON");return new t(n.from,n.to,k.fromJSON(r,n.slice),!!n.structure)};return t}(Xr);
/**
            By default, for backwards compatibility, an inserting step
            mapped over an insertion at that same position fill move after
            the inserted content. In a collaborative editing situation, that
            can make redone insertions appear in unexpected places. You can
            set this to -1 to make such mapping keep the step before the
            insertion instead.
            */ut.MAP_BIAS=1;Xr.jsonID("replace",ut);
/**
            Replace a part of the document with a slice of content, but
            preserve a range of the replaced content by moving it into the
            slice.
            */var at=/** @class */function(r){__extends(t,r);
/**
                Create a replace-around step with the given range and gap.
                `insert` should be the point in the slice into which the content
                of the gap should be moved. `structure` has the same meaning as
                it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
                */function t(
/**
                The start position of the replaced range.
                */
t,
/**
                The end position of the replaced range.
                */
n,
/**
                The start of preserved range.
                */
e,
/**
                The end of preserved range.
                */
i,
/**
                The slice to insert.
                */
u,
/**
                The position in the slice where the preserved range should be
                inserted.
                */
a,
/**
                @internal
                */
f){if(f===void 0){f=false}var o=r.call(this)||this;o.from=t;o.to=n;o.gapFrom=e;o.gapTo=i;o.slice=u;o.insert=a;o.structure=f;return o}t.prototype.apply=function(r){if(this.structure&&(ft(r,this.from,this.gapFrom)||ft(r,this.gapTo,this.to)))return Yr.fail("Structure gap-replace would overwrite content");var t=r.slice(this.gapFrom,this.gapTo);if(t.openStart||t.openEnd)return Yr.fail("Gap is not a flat range");var n=this.slice.insertAt(this.insert,t.content);if(!n)return Yr.fail("Content does not fit in gap");return Yr.fromReplace(r,this.from,this.to,n)};t.prototype.getMap=function(){return new Vr([this.from,this.gapFrom-this.from,this.insert,this.gapTo,this.to-this.gapTo,this.slice.size-this.insert])};t.prototype.invert=function(r){var n=this.gapTo-this.gapFrom;return new t(this.from,this.from+this.slice.size+n,this.from+this.insert,this.from+this.insert+n,r.slice(this.from,this.to).removeBetween(this.gapFrom-this.from,this.gapTo-this.from),this.gapFrom-this.from,this.structure)};t.prototype.map=function(r){var n=r.mapResult(this.from,1),e=r.mapResult(this.to,-1);var i=this.from==this.gapFrom?n.pos:r.map(this.gapFrom,-1);var u=this.to==this.gapTo?e.pos:r.map(this.gapTo,1);if(n.deletedAcross&&e.deletedAcross||i<n.pos||u>e.pos||i>u)return null;return new t(n.pos,e.pos,i,u,this.slice,this.insert,this.structure)};t.prototype.toJSON=function(){var r={stepType:"replaceAround",from:this.from,to:this.to,gapFrom:this.gapFrom,gapTo:this.gapTo,insert:this.insert};if(this.slice.size)r.slice=this.slice.toJSON();if(this.structure)r.structure=true;return r};
/**
                @internal
                */t.fromJSON=function(r,n){if(typeof n.from!="number"||typeof n.to!="number"||typeof n.gapFrom!="number"||typeof n.gapTo!="number"||typeof n.insert!="number")throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");return new t(n.from,n.to,n.gapFrom,n.gapTo,k.fromJSON(r,n.slice),n.insert,!!n.structure)};return t}(Xr);Xr.jsonID("replaceAround",at);function ft(r,t,n){var e=r.resolve(t),i=n-t,u=e.depth;while(i>0&&u>0&&e.indexAfter(u)==e.node(u).childCount){u--;i--}if(i>0){var a=e.node(u).maybeChild(e.indexAfter(u));while(i>0){if(!a||a.isLeaf)return true;a=a.firstChild;i--}}return false}function ot(r,t,n,e){var i=[];r.doc.nodesBetween(t,n,(function(r,u,a){if(!r.isInline)return;var f=r.marks;if(!e.isInSet(f)&&a.type.allowsMarkType(e.type)){var o=Math.max(u,t),s=Math.min(u+r.nodeSize,n);tt(Zr,o,s,e,i)}}));i.forEach((function(t){return r.step(t)}))}function st(r,t,n,e){var i=[],u=0;r.doc.nodesBetween(t,n,(function(r,a){if(!r.isInline||!r.isAtom)return;u++;var f=null;if(e instanceof vr){var o=r.marks,s;while(s=e.isInSet(o)){(f||(f=[])).push(s);o=s.removeFromSet(o)}}else if(e){if(e.isInSet(r.marks))f=[e]}else{f=r.marks}if(f&&f.length){var l=Math.min(a+r.nodeSize,n);for(var v=0;v<f.length;v++){var c=f[v],h=void 0;for(var d=0;d<i.length;d++){var p=i[d];if(p.step==u-1&&c.eq(i[d].style))h=p}if(h){h.to=l;h.step=u}else{i.push({style:c,from:Math.max(a,t),to:l,step:u})}}}}));i.forEach((function(t){return r.step(new rt(t.from,t.to,t.style))}))}function lt(r,t,n,e,i){if(e===void 0){e=n.contentMatch}if(i===void 0){i=true}var u=r.doc.nodeAt(t);var a=[],f=t+1;for(var o=0;o<u.childCount;o++){var s=u.child(o),l=f+s.nodeSize;var v=e.matchType(s.type);if(!v){a.push(new ut(f,l,k.empty))}else{e=v;for(var c=0;c<s.marks.length;c++)if(!n.allowsMarkType(s.marks[c].type))r.step(new rt(f,l,s.marks[c]));if(i&&s.isText&&n.whitespace!="pre"){var h=void 0,d=/\r?\n|\r/g,b=void 0;while(h=d.exec(s.text)){if(!b)b=new k(p.from(n.schema.text(" ",n.allowedMarks(s.marks))),0,0);a.push(new ut(f+h.index,f+h.index+h[0].length,b))}}}f=l}if(!e.validEnd){var g=e.fillBefore(p.empty,true);r.replace(f,f,new k(g,0,0))}for(var m=a.length-1;m>=0;m--)r.step(a[m])}function vt(r,t,n){return(t==0||r.canReplace(t,r.childCount))&&(n==r.childCount||r.canReplace(0,n))}
/**
            Try to find a target depth to which the content in the given range
            can be lifted. Will not go across
            [isolating](https://prosemirror.net/docs/ref/#model.NodeSpec.isolating) parent nodes.
            */function ct(r){var t=r.parent;var n=t.content.cutByIndex(r.startIndex,r.endIndex);for(var e=r.depth,i=0,u=0;;--e){var a=r.$from.node(e);var f=r.$from.index(e)+i,o=r.$to.indexAfter(e)-u;if(e<r.depth&&a.canReplace(f,o,n))return e;if(e==0||a.type.spec.isolating||!vt(a,f,o))break;if(f)i=1;if(o<a.childCount)u=1}return null}function ht(r,t,n){var e=t.$from,i=t.$to,u=t.depth;var a=e.before(u+1),f=i.after(u+1);var o=a,s=f;var l=p.empty,v=0;for(var c=u,h=false;c>n;c--)if(h||e.index(c)>0){h=true;l=p.from(e.node(c).copy(l));v++}else{o--}var d=p.empty,b=0;for(var c=u,h=false;c>n;c--)if(h||i.after(c+1)<i.end(c)){h=true;d=p.from(i.node(c).copy(d));b++}else{s++}r.step(new at(o,s,a,f,new k(l.append(d),v,b),l.size-v,true))}
/**
            Try to find a valid way to wrap the content in the given range in a
            node of the given type. May introduce extra nodes around and inside
            the wrapper node, if necessary. Returns null if no valid wrapping
            could be found. When `innerRange` is given, that range's content is
            used as the content to fit into the wrapping, instead of the
            content of `range`.
            */function dt(r,t,n,e){if(n===void 0){n=null}if(e===void 0){e=r}var i=bt(r,t);var u=i&&gt(e,t);if(!u)return null;return i.map(pt).concat({type:t,attrs:n}).concat(u.map(pt))}function pt(r){return{type:r,attrs:null}}function bt(r,t){var n=r.parent,e=r.startIndex,i=r.endIndex;var u=n.contentMatchAt(e).findWrapping(t);if(!u)return null;var a=u.length?u[0]:t;return n.canReplaceWith(e,i,a)?u:null}function gt(r,t){var n=r.parent,e=r.startIndex,i=r.endIndex;var u=n.child(e);var a=t.contentMatch.findWrapping(u.type);if(!a)return null;var f=a.length?a[a.length-1]:t;var o=f.contentMatch;for(var s=e;o&&s<i;s++)o=o.matchType(n.child(s).type);if(!o||!o.validEnd)return null;return a}function mt(r,t,n){var e=p.empty;for(var i=n.length-1;i>=0;i--){if(e.size){var u=n[i].type.contentMatch.matchFragment(e);if(!u||!u.validEnd)throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")}e=p.from(n[i].type.create(n[i].attrs,e))}var a=t.start,f=t.end;r.step(new at(a,f,a,f,new k(e,0,0),n.length,true))}function wt(r,t,n,e,i){if(!e.isTextblock)throw new RangeError("Type given to setBlockType should be a textblock");var u=r.steps.length;r.doc.nodesBetween(t,n,(function(t,n){var a=typeof i=="function"?i(t):i;if(t.isTextblock&&!t.hasMarkup(e,a)&&_t(r.doc,r.mapping.slice(u).map(n),e)){var f=null;if(e.schema.linebreakReplacement){var o=e.whitespace=="pre",s=!!e.contentMatch.matchType(e.schema.linebreakReplacement);if(o&&!s)f=false;else if(!o&&s)f=true}
// Ensure all markup that isn't allowed in the new node type is cleared
if(f===false)kt(r,t,n,u);lt(r,r.mapping.slice(u).map(n,1),e,undefined,f===null);var l=r.mapping.slice(u);var v=l.map(n,1),c=l.map(n+t.nodeSize,1);r.step(new at(v,c,v+1,c-1,new k(p.from(e.create(a,null,t.marks)),0,0),1,true));if(f===true)yt(r,t,n,u);return false}}))}function yt(r,t,n,e){t.forEach((function(i,u){if(i.isText){var a=void 0,f=/\r?\n|\r/g;while(a=f.exec(i.text)){var o=r.mapping.slice(e).map(n+1+u+a.index);r.replaceWith(o,o+1,t.type.schema.linebreakReplacement.create())}}}))}function kt(r,t,n,e){t.forEach((function(i,u){if(i.type==i.type.schema.linebreakReplacement){var a=r.mapping.slice(e).map(n+1+u);r.replaceWith(a,a+1,t.type.schema.text("\n"))}}))}function _t(r,t,n){var e=r.resolve(t),i=e.index();return e.parent.canReplaceWith(i,i+1,n)}
/**
            Change the type, attributes, and/or marks of the node at `pos`.
            When `type` isn't given, the existing node type is preserved,
            */function xt(r,t,n,e,i){var u=r.doc.nodeAt(t);if(!u)throw new RangeError("No node at given position");if(!n)n=u.type;var a=n.create(e,null,i||u.marks);if(u.isLeaf)return r.replaceWith(t,t+u.nodeSize,a);if(!n.validContent(u.content))throw new RangeError("Invalid content for node type "+n.name);r.step(new at(t,t+u.nodeSize,t+1,t+u.nodeSize-1,new k(p.from(a),0,0),1,true))}
/**
            Check whether splitting at the given position is allowed.
            */function Mt(r,t,n,e){if(n===void 0){n=1}var i=r.resolve(t),u=i.depth-n;var a=e&&e[e.length-1]||i.parent;if(u<0||i.parent.type.spec.isolating||!i.parent.canReplace(i.index(),i.parent.childCount)||!a.type.validContent(i.parent.content.cutByIndex(i.index(),i.parent.childCount)))return false;for(var f=i.depth-1,o=n-2;f>u;f--,o--){var s=i.node(f),l=i.index(f);if(s.type.spec.isolating)return false;var v=s.content.cutByIndex(l,s.childCount);var c=e&&e[o+1];if(c)v=v.replaceChild(0,c.type.create(c.attrs));var h=e&&e[o]||s;if(!s.canReplace(l+1,s.childCount)||!h.type.validContent(v))return false}var d=i.indexAfter(u);var p=e&&e[0];return i.node(u).canReplaceWith(d,d,p?p.type:i.node(u+1).type)}function Ot(r,t,n,e){if(n===void 0){n=1}var i=r.doc.resolve(t),u=p.empty,a=p.empty;for(var f=i.depth,o=i.depth-n,s=n-1;f>o;f--,s--){u=p.from(i.node(f).copy(u));var l=e&&e[s];a=p.from(l?l.type.create(l.attrs,a):i.node(f).copy(a))}r.step(new ut(t,t,new k(u.append(a),n,n),true))}
/**
            Test whether the blocks before and after a given position can be
            joined.
            */function Tt(r,t){var n=r.resolve(t),e=n.index();return Et(n.nodeBefore,n.nodeAfter)&&n.parent.canReplace(e,e+1)}function At(r,t){if(!t.content.size)r.type.compatibleContent(t.type);var n=r.contentMatchAt(r.childCount);var e=r.type.schema.linebreakReplacement;for(var i=0;i<t.childCount;i++){var u=t.child(i);var a=u.type==e?r.type.schema.nodes.text:u.type;n=n.matchType(a);if(!n)return false;if(!r.type.allowsMarks(u.marks))return false}return n.validEnd}function Et(r,t){return!!(r&&t&&!r.isLeaf&&At(r,t))}
/**
            Find an ancestor of the given position that can be joined to the
            block before (or after if `dir` is positive). Returns the joinable
            point, if any.
            */function St(r,t,n){if(n===void 0){n=-1}var e=r.resolve(t);for(var i=e.depth;;i--){var u=void 0,a=void 0,f=e.index(i);if(i==e.depth){u=e.nodeBefore;a=e.nodeAfter}else if(n>0){u=e.node(i+1);f++;a=e.node(i).maybeChild(f)}else{u=e.node(i).maybeChild(f-1);a=e.node(i+1)}if(u&&!u.isTextblock&&Et(u,a)&&e.node(i).canReplace(f,f+1))return t;if(i==0)break;t=n<0?e.before(i):e.after(i)}}function Ct(r,t,n){var e=null;var i=r.doc.type.schema.linebreakReplacement;var u=r.doc.resolve(t-n),a=u.node().type;if(i&&a.inlineContent){var f=a.whitespace=="pre";var o=!!a.contentMatch.matchType(i);if(f&&!o)e=false;else if(!f&&o)e=true}var s=r.steps.length;if(e===false){var l=r.doc.resolve(t+n);kt(r,l.node(),l.before(),s)}if(a.inlineContent)lt(r,t+n-1,a,u.node().contentMatchAt(u.index()),e==null);var v=r.mapping.slice(s),c=v.map(t-n);r.step(new ut(c,v.map(t+n,-1),k.empty,true));if(e===true){var h=r.doc.resolve(c);yt(r,h.node(),h.before(),r.steps.length)}return r}
/**
            Try to find a point where a node of the given type can be inserted
            near `pos`, by searching up the node hierarchy when `pos` itself
            isn't a valid place but is at the start or end of a node. Return
            null if no position was found.
            */function jt(r,t,n){var e=r.resolve(t);if(e.parent.canReplaceWith(e.index(),e.index(),n))return t;if(e.parentOffset==0)for(var i=e.depth-1;i>=0;i--){var u=e.index(i);if(e.node(i).canReplaceWith(u,u,n))return e.before(i+1);if(u>0)return null}if(e.parentOffset==e.parent.content.size)for(var i=e.depth-1;i>=0;i--){var u=e.indexAfter(i);if(e.node(i).canReplaceWith(u,u,n))return e.after(i+1);if(u<e.node(i).childCount)return null}return null}
/**
            Finds a position at or around the given position where the given
            slice can be inserted. Will look at parent nodes' nearest boundary
            and try there, even if the original position wasn't directly at the
            start or end of that node. Returns null when no position was found.
            */function Rt(r,t,n){var e=r.resolve(t);if(!n.content.size)return t;var i=n.content;for(var u=0;u<n.openStart;u++)i=i.firstChild.content;for(var a=1;a<=(n.openStart==0&&n.size?2:1);a++){for(var f=e.depth;f>=0;f--){var o=f==e.depth?0:e.pos<=(e.start(f+1)+e.end(f+1))/2?-1:1;for(var s=0;s<2;s++){if(s){if(!o)break;o=-o}var l=e.index(f)+(o>0?1:0);var v=e.node(f),c=false;if(a==1){c=v.canReplace(l,l,i)}else{var h=v.contentMatchAt(l).findWrapping(i.firstChild.type);c=h&&v.canReplaceWith(l,l,h[0])}if(c)return o==0?e.pos:o<0?e.before(f+1):e.after(f+1)}}}return null}
/**
            ‘Fit’ a slice into a given position in the document, producing a
            [step](https://prosemirror.net/docs/ref/#transform.Step) that inserts it. Will return null if
            there's no meaningful way to insert the slice here, or inserting it
            would be a no-op (an empty slice over an empty range).
            */function Lt(r,t,n,e){if(n===void 0){n=t}if(e===void 0){e=k.empty}if(t==n&&!e.size)return null;var i=r.resolve(t),u=r.resolve(n);
// Optimization -- avoid work if it's obvious that it's not needed.
if(Nt(i,u,e))return new ut(t,n,e);return new Pt(i,u,e).fit()}function Nt(r,t,n){return!n.openStart&&!n.openEnd&&r.start()==t.start()&&r.parent.canReplace(r.index(),t.index(),n.content)}
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
var Pt=/** @class */function(){function r(r,t,n){this.$from=r;this.$to=t;this.unplaced=n;this.frontier=[];this.placed=p.empty;for(var e=0;e<=r.depth;e++){var i=r.node(e);this.frontier.push({type:i.type,match:i.contentMatchAt(r.indexAfter(e))})}for(var u=r.depth;u>0;u--)this.placed=p.from(r.node(u).copy(this.placed))}Object.defineProperty(r.prototype,"depth",{get:function(){return this.frontier.length-1},enumerable:false,configurable:true});r.prototype.fit=function(){
// As long as there's unplaced content, try to place some of it.
// If that fails, either increase the open score of the unplaced
// slice, or drop nodes from it, and then try again.
while(this.unplaced.size){var r=this.findFittable();if(r)this.placeNodes(r);else this.openMore()||this.dropNode()}
// When there's inline content directly after the frontier _and_
// directly after `this.$to`, we must generate a `ReplaceAround`
// step that pulls that content into the node after the frontier.
// That means the fitting must be done to the end of the textblock
// node after `this.$to`, not `this.$to` itself.
var t=this.mustMoveInline(),n=this.placed.size-this.depth-this.$from.depth;var e=this.$from,i=this.close(t<0?this.$to:e.doc.resolve(t));if(!i)return null;
// If closing to `$to` succeeded, create a step
var u=this.placed,a=e.depth,f=i.depth;while(a&&f&&u.childCount==1){// Normalize by dropping open parent nodes
u=u.firstChild.content;a--;f--}var o=new k(u,a,f);if(t>-1)return new at(e.pos,t,this.$to.pos,this.$to.end(),o,n);if(o.size||e.pos!=this.$to.pos)// Don't generate no-op steps
return new ut(e.pos,i.pos,o);return null};
// Find a position on the start spine of `this.unplaced` that has
// content that can be moved somewhere on the frontier. Returns two
// depths, one for the slice and one for the frontier.
r.prototype.findFittable=function(){var r=this.unplaced.openStart;for(var t=this.unplaced.content,n=0,e=this.unplaced.openEnd;n<r;n++){var i=t.firstChild;if(t.childCount>1)e=0;if(i.type.spec.isolating&&e<=n){r=n;break}t=i.content}
// Only try wrapping nodes (pass 2) after finding a place without
// wrapping failed.
for(var u=1;u<=2;u++){for(var a=u==1?r:this.unplaced.openStart;a>=0;a--){var f=void 0,o=null;if(a){o=Dt(this.unplaced.content,a-1).firstChild;f=o.content}else{f=this.unplaced.content}var s=f.firstChild;for(var l=this.depth;l>=0;l--){var v=this.frontier[l],c=v.type,h=v.match,d=void 0,b=null;
// In pass 1, if the next node matches, or there is no next
// node but the parents look compatible, we've found a
// place.
if(u==1&&(s?h.matchType(s.type)||(b=h.fillBefore(p.from(s),false)):o&&c.compatibleContent(o.type)))return{sliceDepth:a,frontierDepth:l,parent:o,inject:b};
// In pass 2, look for a set of wrapping nodes that make
// `first` fit here.
else if(u==2&&s&&(d=h.findWrapping(s.type)))return{sliceDepth:a,frontierDepth:l,parent:o,wrap:d};
// Don't continue looking further up if the parent node
// would fit here.
if(o&&h.matchType(o.type))break}}}};r.prototype.openMore=function(){var r=this.unplaced,t=r.content,n=r.openStart,e=r.openEnd;if(Kt(t,-1)<=n)return false;if(this.unplaced.size>1&&Kt(t,1)>e)e++;this.unplaced=new k(t,n+1,e);return true};r.prototype.dropNode=function(){var r=this.unplaced,t=r.content,n=r.openStart,e=r.openEnd;var i=Dt(t,n);if(i.childCount<=1&&n>0){var u=t.size-n<=n+i.size;this.unplaced=new k(It(t,n-1,1),n-1,u?n-1:e)}else{this.unplaced=new k(It(t,n,1),n,e)}};
// Move content from the unplaced slice at `sliceDepth` to the
// frontier node at `frontierDepth`. Close that frontier node when
// applicable.
r.prototype.placeNodes=function(r){var t=r.sliceDepth,n=r.frontierDepth,e=r.parent,i=r.inject,u=r.wrap;while(this.depth>n)this.closeFrontierNode();if(u)for(var a=0;a<u.length;a++)this.openFrontierNode(u[a]);var f=this.unplaced,o=e?e.content:f.content;var s=f.openStart-t;var l=0,v=[];var c=this.frontier[n],h=c.match,d=c.type;if(i){for(var b=0;b<i.childCount;b++)v.push(i.child(b));h=h.matchFragment(i)}
// Computes the amount of (end) open nodes at the end of the
// fragment. When 0, the parent is open, but no more. When
// negative, nothing is open.
var g=o.size+t-(f.content.size-f.openEnd);
// Scan over the fragment, fitting as many child nodes as
// possible.
while(l<o.childCount){var m=o.child(l),w=h.matchType(m.type);if(!w)break;l++;if(l>1||s==0||m.content.size){// Drop empty open nodes
h=w;v.push(zt(m.mark(d.allowedMarks(m.marks)),l==1?s:0,l==o.childCount?g:-1))}}var y=l==o.childCount;if(!y)g=-1;this.placed=Ht(this.placed,n,p.from(v));this.frontier[n].match=h;
// If the parent types match, and the entire node was moved, and
// it's not open, close this frontier node right away.
if(y&&g<0&&e&&e.type==this.frontier[this.depth].type&&this.frontier.length>1)this.closeFrontierNode();
// Add new frontier nodes for any open nodes at the end.
for(var _=0,x=v[v.length-1];x&&_<g;_++){this.frontier.push({type:x.type,match:x.contentMatchAt(x.childCount)});x=x.lastChild}
// Update `this.unplaced`. Drop the entire node from which we
// placed it we got to its end, otherwise just drop the placed
// nodes.
this.unplaced=!y?new k(It(f.content,t,l),t,f.openEnd):t==0?k.empty:new k(It(f.content,t-1,1),t-1,g<0?f.openEnd:t-1)};r.prototype.mustMoveInline=function(){if(!this.$to.parent.isTextblock)return-1;var r=this.frontier[this.depth],t;if(!r.type.isTextblock||!Bt(this.$to,this.$to.depth,r.type,r.match,false)||this.$to.depth==this.depth&&(t=this.findCloseLevel(this.$to))&&t.depth==this.depth)return-1;var n=this.$to.depth,e=this.$to.after(n);while(n>1&&e==this.$to.end(--n))++e;return e};r.prototype.findCloseLevel=function(r){r:for(var t=Math.min(this.depth,r.depth);t>=0;t--){var n=this.frontier[t],e=n.match,i=n.type;var u=t<r.depth&&r.end(t+1)==r.pos+(r.depth-(t+1));var a=Bt(r,t,i,e,u);if(!a)continue;for(var f=t-1;f>=0;f--){var o=this.frontier[f],s=o.match,l=o.type;var v=Bt(r,f,l,s,true);if(!v||v.childCount)continue r}return{depth:t,fit:a,move:u?r.doc.resolve(r.after(t+1)):r}}};r.prototype.close=function(r){var t=this.findCloseLevel(r);if(!t)return null;while(this.depth>t.depth)this.closeFrontierNode();if(t.fit.childCount)this.placed=Ht(this.placed,t.depth,t.fit);r=t.move;for(var n=t.depth+1;n<=r.depth;n++){var e=r.node(n),i=e.type.contentMatch.fillBefore(e.content,true,r.index(n));this.openFrontierNode(e.type,e.attrs,i)}return r};r.prototype.openFrontierNode=function(r,t,n){if(t===void 0){t=null}var e=this.frontier[this.depth];e.match=e.match.matchType(r);this.placed=Ht(this.placed,this.depth,p.from(r.create(t,n)));this.frontier.push({type:r,match:r.contentMatch})};r.prototype.closeFrontierNode=function(){var r=this.frontier.pop();var t=r.match.fillBefore(p.empty,true);if(t.childCount)this.placed=Ht(this.placed,this.frontier.length,t)};return r}();function It(r,t,n){if(t==0)return r.cutByIndex(n,r.childCount);return r.replaceChild(0,r.firstChild.copy(It(r.firstChild.content,t-1,n)))}function Ht(r,t,n){if(t==0)return r.append(n);return r.replaceChild(r.childCount-1,r.lastChild.copy(Ht(r.lastChild.content,t-1,n)))}function Dt(r,t){for(var n=0;n<t;n++)r=r.firstChild.content;return r}function zt(r,t,n){if(t<=0)return r;var e=r.content;if(t>1)e=e.replaceChild(0,zt(e.firstChild,t-1,e.childCount==1?n-1:0));if(t>0){e=r.type.contentMatch.fillBefore(e).append(e);if(n<=0)e=e.append(r.type.contentMatch.matchFragment(e).fillBefore(p.empty,true))}return r.copy(e)}function Bt(r,t,n,e,i){var u=r.node(t),a=i?r.indexAfter(t):r.index(t);if(a==u.childCount&&!n.compatibleContent(u.type))return null;var f=e.fillBefore(u.content,true,a);return f&&!Ut(n,u.content,a)?f:null}function Ut(r,t,n){for(var e=n;e<t.childCount;e++)if(!r.allowsMarks(t.child(e).marks))return true;return false}function $t(r){return r.spec.defining||r.spec.definingForContent}function Kt(r,t){for(var n=0;;n++){var e=t<0?r.firstChild:r.lastChild;if(!e||e.isAtom)return n;r=e.content}}function Ft(r,t,n,e){if(!e.size)return r.deleteRange(t,n);var i=r.doc.resolve(t),u=r.doc.resolve(n);if(Nt(i,u,e))return r.step(new ut(t,n,e));var a=Gt(i,u);
// Can't replace the whole document, so remove 0 if it's present
if(a[a.length-1]==0)a.pop();
// Negative numbers represent not expansion over the whole node at
// that depth, but replacing from $from.before(-D) to $to.pos.
var f=-(i.depth+1);a.unshift(f);
// This loop picks a preferred target depth, if one of the covering
// depths is not outside of a defining node, and adds negative
// depths for any depth that has $from at its start and does not
// cross a defining node.
for(var o=i.depth,s=i.pos-1;o>0;o--,s--){var l=i.node(o).type.spec;if(l.defining||l.definingAsContext||l.isolating)break;if(a.indexOf(o)>-1)f=o;else if(i.before(o)==s)a.splice(1,0,-o)}
// Try to fit each possible depth of the slice into each possible
// target depth, starting with the preferred depths.
var v=a.indexOf(f);var c=[],h=e.openStart;for(var d=e.content,p=0;;p++){var b=d.firstChild;c.push(b);if(p==e.openStart)break;d=b.content}
// Back up preferredDepth to cover defining textblocks directly
// above it, possibly skipping a non-defining textblock.
for(var o=h-1;o>=0;o--){var g=c[o],m=$t(g.type);if(m&&!g.sameMarkup(i.node(Math.abs(f)-1)))h=o;else if(m||!g.type.isTextblock)break}for(var w=e.openStart;w>=0;w--){var y=(w+h+1)%(e.openStart+1);var _=c[y];if(!_)continue;for(var x=0;x<a.length;x++){
// Loop over possible expansion levels, starting with the
// preferred one
var M=a[(x+v)%a.length],O=true;if(M<0){O=false;M=-M}var T=i.node(M-1),A=i.index(M-1);if(T.canReplaceWith(A,A,_.type,_.marks))return r.replace(i.before(M),O?u.after(M):n,new k(Wt(e.content,0,e.openStart,y),y,e.openEnd))}}var E=r.steps.length;for(var S=a.length-1;S>=0;S--){r.replace(t,n,e);if(r.steps.length>E)break;var C=a[S];if(C<0)continue;t=i.before(C);n=u.after(C)}}function Wt(r,t,n,e,i){if(t<n){var u=r.firstChild;r=r.replaceChild(0,u.copy(Wt(u.content,t+1,n,e,u)))}if(t>e){var a=i.contentMatchAt(0);var f=a.fillBefore(r).append(r);r=f.append(a.matchFragment(f).fillBefore(p.empty,true))}return r}function qt(r,t,n,e){if(!e.isInline&&t==n&&r.doc.resolve(t).parent.content.size){var i=jt(r.doc,t,e.type);if(i!=null)t=n=i}r.replaceRange(t,n,new k(p.from(e),0,0))}function Vt(r,t,n){var e=r.doc.resolve(t),i=r.doc.resolve(n);
// When the deleted range spans from the start of one textblock to
// the start of another one, move out of the start of both blocks.
if(e.parent.isTextblock&&i.parent.isTextblock&&e.start()!=i.start()&&e.parentOffset==0&&i.parentOffset==0){var u=e.sharedDepth(n),a=false;for(var f=e.depth;f>u;f--)if(e.node(f).type.spec.isolating)a=true;for(var f=i.depth;f>u;f--)if(i.node(f).type.spec.isolating)a=true;if(!a){for(var f=e.depth;f>0&&t==e.start(f);f--)t=e.before(f);for(var f=i.depth;f>0&&n==i.start(f);f--)n=i.before(f);e=r.doc.resolve(t);i=r.doc.resolve(n)}}var o=Gt(e,i);for(var s=0;s<o.length;s++){var l=o[s],v=s==o.length-1;if(v&&l==0||e.node(l).type.contentMatch.validEnd)return r.delete(e.start(l),i.end(l));if(l>0&&(v||e.node(l-1).canReplace(e.index(l-1),i.indexAfter(l-1))))return r.delete(e.before(l),i.after(l))}for(var f=1;f<=e.depth&&f<=i.depth;f++){if(t-e.start(f)==e.depth-f&&n>e.end(f)&&i.end(f)-n!=i.depth-f&&e.start(f-1)==i.start(f-1)&&e.node(f-1).canReplace(e.index(f-1),i.index(f-1)))return r.delete(e.before(f),n)}r.delete(t,n)}
// Returns an array of all depths for which $from - $to spans the
// whole content of the nodes at that depth.
function Gt(r,t){var n=[],e=Math.min(r.depth,t.depth);for(var i=e;i>=0;i--){var u=r.start(i);if(u<r.pos-(r.depth-i)||t.end(i)>t.pos+(t.depth-i)||r.node(i).type.spec.isolating||t.node(i).type.spec.isolating)break;if(u==t.start(i)||i==r.depth&&i==t.depth&&r.parent.inlineContent&&t.parent.inlineContent&&i&&t.start(i-1)==u-1)n.push(i)}return n}
/**
            Update an attribute in a specific node.
            */var Jt=/** @class */function(r){__extends(t,r);
/**
                Construct an attribute step.
                */function t(
/**
                The position of the target node.
                */
t,
/**
                The attribute to set.
                */
n,
// The attribute's new value.
e){var i=r.call(this)||this;i.pos=t;i.attr=n;i.value=e;return i}t.prototype.apply=function(r){var t=r.nodeAt(this.pos);if(!t)return Yr.fail("No node at attribute step's position");var n=Object.create(null);for(var e in t.attrs)n[e]=t.attrs[e];n[this.attr]=this.value;var i=t.type.create(n,null,t.marks);return Yr.fromReplace(r,this.pos,this.pos+1,new k(p.from(i),0,t.isLeaf?0:1))};t.prototype.getMap=function(){return Vr.empty};t.prototype.invert=function(r){return new t(this.pos,this.attr,r.nodeAt(this.pos).attrs[this.attr])};t.prototype.map=function(r){var n=r.mapResult(this.pos,1);return n.deletedAfter?null:new t(n.pos,this.attr,this.value)};t.prototype.toJSON=function(){return{stepType:"attr",pos:this.pos,attr:this.attr,value:this.value}};t.fromJSON=function(r,n){if(typeof n.pos!="number"||typeof n.attr!="string")throw new RangeError("Invalid input for AttrStep.fromJSON");return new t(n.pos,n.attr,n.value)};return t}(Xr);Xr.jsonID("attr",Jt);
/**
            Update an attribute in the doc node.
            */var Xt=/** @class */function(r){__extends(t,r);
/**
                Construct an attribute step.
                */function t(
/**
                The attribute to set.
                */
t,
// The attribute's new value.
n){var e=r.call(this)||this;e.attr=t;e.value=n;return e}t.prototype.apply=function(r){var t=Object.create(null);for(var n in r.attrs)t[n]=r.attrs[n];t[this.attr]=this.value;var e=r.type.create(t,r.content,r.marks);return Yr.ok(e)};t.prototype.getMap=function(){return Vr.empty};t.prototype.invert=function(r){return new t(this.attr,r.attrs[this.attr])};t.prototype.map=function(r){return this};t.prototype.toJSON=function(){return{stepType:"docAttr",attr:this.attr,value:this.value}};t.fromJSON=function(r,n){if(typeof n.attr!="string")throw new RangeError("Invalid input for DocAttrStep.fromJSON");return new t(n.attr,n.value)};return t}(Xr);Xr.jsonID("docAttr",Xt);
/**
            @internal
            */var Yt=/** @class */function(r){__extends(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t}(Error);Yt=function r(t){var n=Error.call(this,t);n.__proto__=r.prototype;return n};Yt.prototype=Object.create(Error.prototype);Yt.prototype.constructor=Yt;Yt.prototype.name="TransformError";
/**
            Abstraction to build up and track an array of
            [steps](https://prosemirror.net/docs/ref/#transform.Step) representing a document transformation.

            Most transforming methods return the `Transform` object itself, so
            that they can be chained.
            */var Qt=/** @class */function(){
/**
                Create a transform that starts with the given document.
                */
function r(
/**
                The current document (the result of applying the steps in the
                transform).
                */
r){this.doc=r;
/**
                    The steps in this transform.
                    */this.steps=[];
/**
                    The documents before each of the steps.
                    */this.docs=[];
/**
                    A mapping with the maps for each of the steps in this transform.
                    */this.mapping=new Gr}Object.defineProperty(r.prototype,"before",{
/**
                    The starting document.
                    */
get:function(){return this.docs.length?this.docs[0]:this.doc},enumerable:false,configurable:true});
/**
                Apply a new step in this transform, saving the result. Throws an
                error when the step fails.
                */r.prototype.step=function(r){var t=this.maybeStep(r);if(t.failed)throw new Yt(t.failed);return this};
/**
                Try to apply a step in this transformation, ignoring it if it
                fails. Returns the step result.
                */r.prototype.maybeStep=function(r){var t=r.apply(this.doc);if(!t.failed)this.addStep(r,t.doc);return t};Object.defineProperty(r.prototype,"docChanged",{
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
                */r.prototype.changedRange=function(){var r=1e9,t=-1e9;for(var n=0;n<this.mapping.maps.length;n++){var e=this.mapping.maps[n];if(n){r=e.map(r,1);t=e.map(t,-1)}e.forEach((function(n,e,i,u){r=Math.min(r,i);t=Math.max(t,u)}))}return r==1e9?null:{from:r,to:t}};
/**
                @internal
                */r.prototype.addStep=function(r,t){this.docs.push(this.doc);this.steps.push(r);this.mapping.appendMap(r.getMap());this.doc=t};
/**
                Replace the part of the document between `from` and `to` with the
                given `slice`.
                */r.prototype.replace=function(r,t,n){if(t===void 0){t=r}if(n===void 0){n=k.empty}var e=Lt(this.doc,r,t,n);if(e)this.step(e);return this};
/**
                Replace the given range with the given content, which may be a
                fragment, node, or array of nodes.
                */r.prototype.replaceWith=function(r,t,n){return this.replace(r,t,new k(p.from(n),0,0))};
/**
                Delete the content between the given positions.
                */r.prototype.delete=function(r,t){return this.replace(r,t,k.empty)};
/**
                Insert the given content at the given position.
                */r.prototype.insert=function(r,t){return this.replaceWith(r,r,t)};
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
                */r.prototype.replaceRange=function(r,t,n){Ft(this,r,t,n);return this};
/**
                Replace the given range with a node, but use `from` and `to` as
                hints, rather than precise positions. When from and to are the same
                and are at the start or end of a parent node in which the given
                node doesn't fit, this method may _move_ them out towards a parent
                that does allow the given node to be placed. When the given range
                completely covers a parent node, this method may completely replace
                that parent node.
                */r.prototype.replaceRangeWith=function(r,t,n){qt(this,r,t,n);return this};
/**
                Delete the given range, expanding it to cover fully covered
                parent nodes until a valid replace is found.
                */r.prototype.deleteRange=function(r,t){Vt(this,r,t);return this};
/**
                Split the content in the given range off from its parent, if there
                is sibling content before or after it, and move it up the tree to
                the depth specified by `target`. You'll probably want to use
                [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
                sure the lift is valid.
                */r.prototype.lift=function(r,t){ht(this,r,t);return this};
/**
                Join the blocks around the given position. If depth is 2, their
                last and first siblings are also joined, and so on.
                */r.prototype.join=function(r,t){if(t===void 0){t=1}Ct(this,r,t);return this};
/**
                Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
                The wrappers are assumed to be valid in this position, and should
                probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
                */r.prototype.wrap=function(r,t){mt(this,r,t);return this};
/**
                Set the type of all textblocks (partly) between `from` and `to` to
                the given node type with the given attributes.
                */r.prototype.setBlockType=function(r,t,n,e){if(t===void 0){t=r}if(e===void 0){e=null}wt(this,r,t,n,e);return this};
/**
                Change the type, attributes, and/or marks of the node at `pos`.
                When `type` isn't given, the existing node type is preserved,
                */r.prototype.setNodeMarkup=function(r,t,n,e){if(n===void 0){n=null}xt(this,r,t,n,e);return this};
/**
                Set a single attribute on a given node to a new value.
                The `pos` addresses the document content. Use `setDocAttribute`
                to set attributes on the document itself.
                */r.prototype.setNodeAttribute=function(r,t,n){this.step(new Jt(r,t,n));return this};
/**
                Set a single attribute on the document to a new value.
                */r.prototype.setDocAttribute=function(r,t){this.step(new Xt(r,t));return this};
/**
                Add a mark to the node at position `pos`.
                */r.prototype.addNodeMark=function(r,t){this.step(new et(r,t));return this};
/**
                Remove a mark (or all marks of the given type) from the node at
                position `pos`.
                */r.prototype.removeNodeMark=function(r,t){var n=this.doc.nodeAt(r);if(!n)throw new RangeError("No node at position "+r);if(t instanceof w){if(t.isInSet(n.marks))this.step(new it(r,t))}else{var e=n.marks,i,u=[];while(i=t.isInSet(e)){u.push(new it(r,i));e=i.removeFromSet(e)}for(var a=u.length-1;a>=0;a--)this.step(u[a])}return this};
/**
                Split the node at the given position, and optionally, if `depth` is
                greater than one, any number of nodes above that. By default, the
                parts split off will inherit the node type of the original node.
                This can be changed by passing an array of types and attributes to
                use after the split (with the outermost nodes coming first).
                */r.prototype.split=function(r,t,n){if(t===void 0){t=1}Ot(this,r,t,n);return this};
/**
                Add the given mark to the inline content between `from` and `to`.
                */r.prototype.addMark=function(r,t,n){ot(this,r,t,n);return this};
/**
                Remove marks from inline nodes between `from` and `to`. When
                `mark` is a single mark, remove precisely that mark. When it is
                a mark type, remove all marks of that type. When it is null,
                remove all marks of any type.
                */r.prototype.removeMark=function(r,t,n){st(this,r,t,n);return this};
/**
                Removes all marks and nodes from the content of the node at
                `pos` that don't match the given new parent node type. Accepts
                an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
                third argument.
                */r.prototype.clearIncompatible=function(r,t,n){lt(this,r,t,n);return this};return r}();var Zt=Object.create(null);
/**
            Superclass for editor selections. Every selection type should
            extend this. Should not be instantiated directly.
            */var rn=/** @class */function(){
/**
                Initialize a selection with the head and anchor and ranges. If no
                ranges are given, constructs a single range across `$anchor` and
                `$head`.
                */
function r(
/**
                The resolved anchor of the selection (the side that stays in
                place when the selection is modified).
                */
r,
/**
                The resolved head of the selection (the side that moves when
                the selection is modified).
                */
t,n){this.$anchor=r;this.$head=t;this.ranges=n||[new tn(r.min(t),r.max(t))]}Object.defineProperty(r.prototype,"anchor",{
/**
                    The selection's anchor, as an unresolved position.
                    */
get:function(){return this.$anchor.pos},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"head",{
/**
                    The selection's head.
                    */
get:function(){return this.$head.pos},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"from",{
/**
                    The lower bound of the selection's main range.
                    */
get:function(){return this.$from.pos},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"to",{
/**
                    The upper bound of the selection's main range.
                    */
get:function(){return this.$to.pos},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"$from",{
/**
                    The resolved lower  bound of the selection's main range.
                    */
get:function(){return this.ranges[0].$from},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"$to",{
/**
                    The resolved upper bound of the selection's main range.
                    */
get:function(){return this.ranges[0].$to},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"empty",{
/**
                    Indicates whether the selection contains any content.
                    */
get:function(){var r=this.ranges;for(var t=0;t<r.length;t++)if(r[t].$from.pos!=r[t].$to.pos)return false;return true},enumerable:false,configurable:true});
/**
                Get the content of this selection as a slice.
                */r.prototype.content=function(){return this.$from.doc.slice(this.from,this.to,true)};
/**
                Replace the selection with a slice or, if no slice is given,
                delete the selection. Will append to the given transaction.
                */r.prototype.replace=function(r,t){if(t===void 0){t=k.empty}
// Put the new selection at the position after the inserted
// content. When that ended in an inline node, search backwards,
// to get the position after that node. If not, search forward.
var n=t.content.lastChild,e=null;for(var i=0;i<t.openEnd;i++){e=n;n=n.lastChild}var u=r.steps.length,a=this.ranges;for(var f=0;f<a.length;f++){var o=a[f],s=o.$from,l=o.$to,v=r.mapping.slice(u);r.replaceRange(v.map(s.pos),v.map(l.pos),f?k.empty:t);if(f==0)cn(r,u,(n?n.isInline:e&&e.isTextblock)?-1:1)}};
/**
                Replace the selection with the given node, appending the changes
                to the given transaction.
                */r.prototype.replaceWith=function(r,t){var n=r.steps.length,e=this.ranges;for(var i=0;i<e.length;i++){var u=e[i],a=u.$from,f=u.$to,o=r.mapping.slice(n);var s=o.map(a.pos),l=o.map(f.pos);if(i){r.deleteRange(s,l)}else{r.replaceRangeWith(s,l,t);cn(r,n,t.isInline?-1:1)}}};
/**
                Find a valid cursor or leaf node selection starting at the given
                position and searching back if `dir` is negative, and forward if
                positive. When `textOnly` is true, only consider cursor
                selections. Will return null when no valid selection position is
                found.
                */r.findFrom=function(r,t,n){if(n===void 0){n=false}var e=r.parent.inlineContent?new un(r):vn(r.node(0),r.parent,r.pos,r.index(),t,n);if(e)return e;for(var i=r.depth-1;i>=0;i--){var u=t<0?vn(r.node(0),r.node(i),r.before(i+1),r.index(i),t,n):vn(r.node(0),r.node(i),r.after(i+1),r.index(i)+1,t,n);if(u)return u}return null};
/**
                Find a valid cursor or leaf node selection near the given
                position. Searches forward first by default, but if `bias` is
                negative, it will search backwards first.
                */r.near=function(r,t){if(t===void 0){t=1}return this.findFrom(r,t)||this.findFrom(r,-t)||new sn(r.node(0))};
/**
                Find the cursor or leaf node selection closest to the start of
                the given document. Will return an
                [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
                exists.
                */r.atStart=function(r){return vn(r,r,0,0,1)||new sn(r)};
/**
                Find the cursor or leaf node selection closest to the end of the
                given document.
                */r.atEnd=function(r){return vn(r,r,r.content.size,r.childCount,-1)||new sn(r)};
/**
                Deserialize the JSON representation of a selection. Must be
                implemented for custom classes (as a static class method).
                */r.fromJSON=function(r,t){if(!t||!t.type)throw new RangeError("Invalid input for Selection.fromJSON");var n=Zt[t.type];if(!n)throw new RangeError("No selection type ".concat(t.type," defined"));return n.fromJSON(r,t)};
/**
                To be able to deserialize selections from JSON, custom selection
                classes must register themselves with an ID string, so that they
                can be disambiguated. Try to pick something that's unlikely to
                clash with classes from other modules.
                */r.jsonID=function(r,t){if(r in Zt)throw new RangeError("Duplicate use of selection JSON ID "+r);Zt[r]=t;t.prototype.jsonID=r;return t};
/**
                Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
                which is a value that can be mapped without having access to a
                current document, and later resolved to a real selection for a
                given document again. (This is used mostly by the history to
                track and restore old selections.) The default implementation of
                this method just converts the selection to a text selection and
                returns the bookmark for that.
                */r.prototype.getBookmark=function(){return un.between(this.$anchor,this.$head).getBookmark()};return r}();rn.prototype.visible=true;
/**
            Represents a selected range in a document.
            */var tn=/** @class */function(){
/**
                Create a range.
                */
function r(
/**
                The lower bound of the range.
                */
r,
/**
                The upper bound of the range.
                */
t){this.$from=r;this.$to=t}return r}();var nn=false;function en(r){if(!nn&&!r.parent.inlineContent){nn=true;console["warn"]("TextSelection endpoint not pointing into a node with inline content ("+r.parent.type.name+")")}}
/**
            A text selection represents a classical editor selection, with a
            head (the moving side) and anchor (immobile side), both of which
            point into textblock nodes. It can be empty (a regular cursor
            position).
            */var un=/** @class */function(r){__extends(t,r);
/**
                Construct a text selection between the given points.
                */function t(t,n){if(n===void 0){n=t}en(t);en(n);return r.call(this,t,n)||this}Object.defineProperty(t.prototype,"$cursor",{
/**
                    Returns a resolved position if this is a cursor selection (an
                    empty text selection), and null otherwise.
                    */
get:function(){return this.$anchor.pos==this.$head.pos?this.$head:null},enumerable:false,configurable:true});t.prototype.map=function(r,n){var e=r.resolve(n.map(this.head));if(!e.parent.inlineContent)return rn.near(e);var i=r.resolve(n.map(this.anchor));return new t(i.parent.inlineContent?i:e,e)};t.prototype.replace=function(t,n){if(n===void 0){n=k.empty}r.prototype.replace.call(this,t,n);if(n==k.empty){var e=this.$from.marksAcross(this.$to);if(e)t.ensureMarks(e)}};t.prototype.eq=function(r){return r instanceof t&&r.anchor==this.anchor&&r.head==this.head};t.prototype.getBookmark=function(){return new an(this.anchor,this.head)};t.prototype.toJSON=function(){return{type:"text",anchor:this.anchor,head:this.head}};
/**
                @internal
                */t.fromJSON=function(r,n){if(typeof n.anchor!="number"||typeof n.head!="number")throw new RangeError("Invalid input for TextSelection.fromJSON");return new t(r.resolve(n.anchor),r.resolve(n.head))};
/**
                Create a text selection from non-resolved positions.
                */t.create=function(r,t,n){if(n===void 0){n=t}var e=r.resolve(t);return new this(e,n==t?e:r.resolve(n))};
/**
                Return a text selection that spans the given positions or, if
                they aren't text positions, find a text selection near them.
                `bias` determines whether the method searches forward (default)
                or backwards (negative number) first. Will fall back to calling
                [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
                doesn't contain a valid text position.
                */t.between=function(r,n,e){var i=r.pos-n.pos;if(!e||i)e=i>=0?1:-1;if(!n.parent.inlineContent){var u=rn.findFrom(n,e,true)||rn.findFrom(n,-e,true);if(u)n=u.$head;else return rn.near(n,e)}if(!r.parent.inlineContent){if(i==0){r=n}else{r=(rn.findFrom(r,-e,true)||rn.findFrom(r,e,true)).$anchor;if(r.pos<n.pos!=i<0)r=n}}return new t(r,n)};return t}(rn);rn.jsonID("text",un);var an=/** @class */function(){function r(r,t){this.anchor=r;this.head=t}r.prototype.map=function(t){return new r(t.map(this.anchor),t.map(this.head))};r.prototype.resolve=function(r){return un.between(r.resolve(this.anchor),r.resolve(this.head))};return r}();
/**
            A node selection is a selection that points at a single node. All
            nodes marked [selectable](https://prosemirror.net/docs/ref/#model.NodeSpec.selectable) can be the
            target of a node selection. In such a selection, `from` and `to`
            point directly before and after the selected node, `anchor` equals
            `from`, and `head` equals `to`..
            */var fn=/** @class */function(r){__extends(t,r);
/**
                Create a node selection. Does not verify the validity of its
                argument.
                */function t(t){var n=this;var e=t.nodeAfter;var i=t.node(0).resolve(t.pos+e.nodeSize);n=r.call(this,t,i)||this;n.node=e;return n}t.prototype.map=function(r,n){var e=n.mapResult(this.anchor),i=e.deleted,u=e.pos;var a=r.resolve(u);if(i)return rn.near(a);return new t(a)};t.prototype.content=function(){return new k(p.from(this.node),0,0)};t.prototype.eq=function(r){return r instanceof t&&r.anchor==this.anchor};t.prototype.toJSON=function(){return{type:"node",anchor:this.anchor}};t.prototype.getBookmark=function(){return new on(this.anchor)};
/**
                @internal
                */t.fromJSON=function(r,n){if(typeof n.anchor!="number")throw new RangeError("Invalid input for NodeSelection.fromJSON");return new t(r.resolve(n.anchor))};
/**
                Create a node selection from non-resolved positions.
                */t.create=function(r,n){return new t(r.resolve(n))};
/**
                Determines whether the given node may be selected as a node
                selection.
                */t.isSelectable=function(r){return!r.isText&&r.type.spec.selectable!==false};return t}(rn);fn.prototype.visible=false;rn.jsonID("node",fn);var on=/** @class */function(){function r(r){this.anchor=r}r.prototype.map=function(t){var n=t.mapResult(this.anchor),e=n.deleted,i=n.pos;return e?new an(i,i):new r(i)};r.prototype.resolve=function(r){var t=r.resolve(this.anchor),n=t.nodeAfter;if(n&&fn.isSelectable(n))return new fn(t);return rn.near(t)};return r}();
/**
            A selection type that represents selecting the whole document
            (which can not necessarily be expressed with a text selection, when
            there are for example leaf block nodes at the start or end of the
            document).
            */var sn=/** @class */function(r){__extends(t,r);
/**
                Create an all-selection over the given document.
                */function t(t){return r.call(this,t.resolve(0),t.resolve(t.content.size))||this}t.prototype.replace=function(t,n){if(n===void 0){n=k.empty}if(n==k.empty){t.delete(0,t.doc.content.size);var e=rn.atStart(t.doc);if(!e.eq(t.selection))t.setSelection(e)}else{r.prototype.replace.call(this,t,n)}};t.prototype.toJSON=function(){return{type:"all"}};
/**
                @internal
                */t.fromJSON=function(r){return new t(r)};t.prototype.map=function(r){return new t(r)};t.prototype.eq=function(r){return r instanceof t};t.prototype.getBookmark=function(){return ln};return t}(rn);rn.jsonID("all",sn);var ln={map:function(){return this},resolve:function(r){return new sn(r)}};
// FIXME we'll need some awareness of text direction when scanning for selections
// Try to find a selection inside the given node. `pos` points at the
// position where the search starts. When `text` is true, only return
// text selections.
function vn(r,t,n,e,i,u){if(u===void 0){u=false}if(t.inlineContent)return un.create(r,n);for(var a=e-(i>0?0:1);i>0?a<t.childCount:a>=0;a+=i){var f=t.child(a);if(!f.isAtom){var o=vn(r,f,n+i,i<0?f.childCount:0,i,u);if(o)return o}else if(!u&&fn.isSelectable(f)){return fn.create(r,n-(i<0?f.nodeSize:0))}n+=f.nodeSize*i}return null}function cn(r,t,n){var e=r.steps.length-1;if(e<t)return;var i=r.steps[e];if(!(i instanceof ut||i instanceof at))return;var u=r.mapping.maps[e],a;u.forEach((function(r,t,n,e){if(a==null)a=e}));r.setSelection(rn.near(r.doc.resolve(a),n))}var hn=1,dn=2,pn=4;
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
            */var bn=/** @class */function(r){__extends(t,r);
/**
                @internal
                */function t(t){var n=r.call(this,t.doc)||this;
// The step count for which the current selection is valid.
n.curSelectionFor=0;
// Bitfield to track which aspects of the state were updated by
// this transaction.
n.updated=0;
// Object used to store metadata properties for the transaction.
n.meta=Object.create(null);n.time=Date.now();n.curSelection=t.selection;n.storedMarks=t.storedMarks;return n}Object.defineProperty(t.prototype,"selection",{
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
                */t.prototype.setSelection=function(r){if(r.$from.doc!=this.doc)throw new RangeError("Selection passed to setSelection must point at the current document");this.curSelection=r;this.curSelectionFor=this.steps.length;this.updated=(this.updated|hn)&~dn;this.storedMarks=null;return this};Object.defineProperty(t.prototype,"selectionSet",{
/**
                    Whether the selection was explicitly updated by this transaction.
                    */
get:function(){return(this.updated&hn)>0},enumerable:false,configurable:true});
/**
                Set the current stored marks.
                */t.prototype.setStoredMarks=function(r){this.storedMarks=r;this.updated|=dn;return this};
/**
                Make sure the current stored marks or, if that is null, the marks
                at the selection, match the given set of marks. Does nothing if
                this is already the case.
                */t.prototype.ensureMarks=function(r){if(!w.sameSet(this.storedMarks||this.selection.$from.marks(),r))this.setStoredMarks(r);return this};
/**
                Add a mark to the set of stored marks.
                */t.prototype.addStoredMark=function(r){return this.ensureMarks(r.addToSet(this.storedMarks||this.selection.$head.marks()))};
/**
                Remove a mark or mark type from the set of stored marks.
                */t.prototype.removeStoredMark=function(r){return this.ensureMarks(r.removeFromSet(this.storedMarks||this.selection.$head.marks()))};Object.defineProperty(t.prototype,"storedMarksSet",{
/**
                    Whether the stored marks were explicitly set for this transaction.
                    */
get:function(){return(this.updated&dn)>0},enumerable:false,configurable:true});
/**
                @internal
                */t.prototype.addStep=function(t,n){r.prototype.addStep.call(this,t,n);this.updated=this.updated&~dn;this.storedMarks=null};
/**
                Update the timestamp for the transaction.
                */t.prototype.setTime=function(r){this.time=r;return this};
/**
                Replace the current selection with the given slice.
                */t.prototype.replaceSelection=function(r){this.selection.replace(this,r);return this};
/**
                Replace the selection with the given node. When `inheritMarks` is
                true and the content is inline, it inherits the marks from the
                place where it is inserted.
                */t.prototype.replaceSelectionWith=function(r,t){if(t===void 0){t=true}var n=this.selection;if(t)r=r.mark(this.storedMarks||(n.empty?n.$from.marks():n.$from.marksAcross(n.$to)||w.none));n.replaceWith(this,r);return this};
/**
                Delete the selection.
                */t.prototype.deleteSelection=function(){this.selection.replace(this);return this};
/**
                Replace the given range, or the selection if no range is given,
                with a text node containing the given string.
                */t.prototype.insertText=function(r,t,n){var e=this.doc.type.schema;if(t==null){if(!r)return this.deleteSelection();return this.replaceSelectionWith(e.text(r),true)}else{if(n==null)n=t;if(!r)return this.deleteRange(t,n);var i=this.storedMarks;if(!i){var u=this.doc.resolve(t);i=n==t?u.marks():u.marksAcross(this.doc.resolve(n))}this.replaceRangeWith(t,n,e.text(r,i));if(!this.selection.empty&&this.selection.to==t+r.length)this.setSelection(rn.near(this.selection.$to));return this}};
/**
                Store a metadata property in this transaction, keyed either by
                name or by plugin.
                */t.prototype.setMeta=function(r,t){this.meta[typeof r=="string"?r:r.key]=t;return this};
/**
                Retrieve a metadata property for a given name or plugin.
                */t.prototype.getMeta=function(r){return this.meta[typeof r=="string"?r:r.key]};Object.defineProperty(t.prototype,"isGeneric",{
/**
                    Returns true if this transaction doesn't contain any metadata,
                    and can thus safely be extended.
                    */
get:function(){for(var r in this.meta)return false;return true},enumerable:false,configurable:true});
/**
                Indicate that the editor should scroll the selection into view
                when updated to the state produced by this transaction.
                */t.prototype.scrollIntoView=function(){this.updated|=pn;return this};Object.defineProperty(t.prototype,"scrolledIntoView",{
/**
                    True when this transaction has had `scrollIntoView` called on it.
                    */
get:function(){return(this.updated&pn)>0},enumerable:false,configurable:true});return t}(Qt);function gn(r,t){return!t||!r?r:r.bind(t)}var mn=/** @class */function(){function r(r,t,n){this.name=r;this.init=gn(t.init,n);this.apply=gn(t.apply,n)}return r}();var wn=[new mn("doc",{init:function(r){return r.doc||r.schema.topNodeType.createAndFill()},apply:function(r){return r.doc}}),new mn("selection",{init:function(r,t){return r.selection||rn.atStart(t.doc)},apply:function(r){return r.selection}}),new mn("storedMarks",{init:function(r){return r.storedMarks||null},apply:function(r,t,n,e){return e.selection.$cursor?r.storedMarks:null}}),new mn("scrollToSelection",{init:function(){return 0},apply:function(r,t){return r.scrolledIntoView?t+1:t}})];
// Object wrapping the part of a state object that stays the same
// across transactions. Stored in the state's `config` property.
var yn=/** @class */function(){function r(r,t){var n=this;this.schema=r;this.plugins=[];this.pluginsByKey=Object.create(null);this.fields=wn.slice();if(t)t.forEach((function(r){if(n.pluginsByKey[r.key])throw new RangeError("Adding different instances of a keyed plugin ("+r.key+")");n.plugins.push(r);n.pluginsByKey[r.key]=r;if(r.spec.state)n.fields.push(new mn(r.key,r.spec.state,r))}))}return r}();
/**
            The state of a ProseMirror editor is represented by an object of
            this type. A state is a persistent data structure—it isn't
            updated, but rather a new state value is computed from an old one
            using the [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) method.

            A state holds a number of built-in fields, and plugins can
            [define](https://prosemirror.net/docs/ref/#state.PluginSpec.state) additional fields.
            */var kn=/** @class */function(){
/**
                @internal
                */
function r(
/**
                @internal
                */
r){this.config=r}Object.defineProperty(r.prototype,"schema",{
/**
                    The schema of the state's document.
                    */
get:function(){return this.config.schema},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"plugins",{
/**
                    The plugins that are active in this state.
                    */
get:function(){return this.config.plugins},enumerable:false,configurable:true});
/**
                Apply the given transaction to produce a new state.
                */r.prototype.apply=function(r){return this.applyTransaction(r).state};
/**
                @internal
                */r.prototype.filterTransaction=function(r,t){if(t===void 0){t=-1}for(var n=0;n<this.config.plugins.length;n++)if(n!=t){var e=this.config.plugins[n];if(e.spec.filterTransaction&&!e.spec.filterTransaction.call(e,r,this))return false}return true};
/**
                Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
                returns the precise transactions that were applied (which might
                be influenced by the [transaction
                hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
                plugins) along with the new state.
                */r.prototype.applyTransaction=function(r){if(!this.filterTransaction(r))return{state:this,transactions:[]};var t=[r],n=this.applyInner(r),e=null;
// This loop repeatedly gives plugins a chance to respond to
// transactions as new transactions are added, making sure to only
// pass the transactions the plugin did not see before.
for(;;){var i=false;for(var u=0;u<this.config.plugins.length;u++){var a=this.config.plugins[u];if(a.spec.appendTransaction){var f=e?e[u].n:0,o=e?e[u].state:this;var s=f<t.length&&a.spec.appendTransaction.call(a,f?t.slice(f):t,o,n);if(s&&n.filterTransaction(s,u)){s.setMeta("appendedTransaction",r);if(!e){e=[];for(var l=0;l<this.config.plugins.length;l++)e.push(l<u?{state:n,n:t.length}:{state:this,n:0})}t.push(s);n=n.applyInner(s);i=true}if(e)e[u]={state:n,n:t.length}}}if(!i)return{state:n,transactions:t}}};
/**
                @internal
                */r.prototype.applyInner=function(t){if(!t.before.eq(this.doc))throw new RangeError("Applying a mismatched transaction");var n=new r(this.config),e=this.config.fields;for(var i=0;i<e.length;i++){var u=e[i];n[u.name]=u.apply(t,this[u.name],this,n)}return n};Object.defineProperty(r.prototype,"tr",{
/**
                    Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
                    */
get:function(){return new bn(this)},enumerable:false,configurable:true});
/**
                Create a new state.
                */r.create=function(t){var n=new yn(t.doc?t.doc.type.schema:t.schema,t.plugins);var e=new r(n);for(var i=0;i<n.fields.length;i++)e[n.fields[i].name]=n.fields[i].init(t,e);return e};
/**
                Create a new state based on this one, but with an adjusted set
                of active plugins. State fields that exist in both sets of
                plugins are kept unchanged. Those that no longer exist are
                dropped, and those that are new are initialized using their
                [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
                configuration object..
                */r.prototype.reconfigure=function(t){var n=new yn(this.schema,t.plugins);var e=n.fields,i=new r(n);for(var u=0;u<e.length;u++){var a=e[u].name;i[a]=this.hasOwnProperty(a)?this[a]:e[u].init(t,i)}return i};
/**
                Serialize this state to JSON. If you want to serialize the state
                of plugins, pass an object mapping property names to use in the
                resulting JSON object to plugin objects. The argument may also be
                a string or number, in which case it is ignored, to support the
                way `JSON.stringify` calls `toString` methods.
                */r.prototype.toJSON=function(r){var t={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks)t.storedMarks=this.storedMarks.map((function(r){return r.toJSON()}));if(r&&typeof r=="object")for(var n in r){if(n=="doc"||n=="selection")throw new RangeError("The JSON fields `doc` and `selection` are reserved");var e=r[n],i=e.spec.state;if(i&&i.toJSON)t[n]=i.toJSON.call(e,this[e.key])}return t};
/**
                Deserialize a JSON representation of a state. `config` should
                have at least a `schema` field, and should contain array of
                plugins to initialize the state with. `pluginFields` can be used
                to deserialize the state of plugins, by associating plugin
                instances with the property names they use in the JSON object.
                */r.fromJSON=function(t,n,e){if(!n)throw new RangeError("Invalid input for EditorState.fromJSON");if(!t.schema)throw new RangeError("Required config field 'schema' missing");var i=new yn(t.schema,t.plugins);var u=new r(i);i.fields.forEach((function(r){if(r.name=="doc"){u.doc=B.fromJSON(t.schema,n.doc)}else if(r.name=="selection"){u.selection=rn.fromJSON(u.doc,n.selection)}else if(r.name=="storedMarks"){if(n.storedMarks)u.storedMarks=n.storedMarks.map(t.schema.markFromJSON)}else{if(e)for(var i in e){var a=e[i],f=a.spec.state;if(a.key==r.name&&f&&f.fromJSON&&Object.prototype.hasOwnProperty.call(n,i)){u[r.name]=f.fromJSON.call(a,t,n[i],u);return}}u[r.name]=r.init(t,u)}}));return u};return r}();function _n(r,t,n){for(var e in r){var i=r[e];if(i instanceof Function)i=i.bind(t);else if(e=="handleDOMEvents")i=_n(i,t,{});n[e]=i}return n}
/**
            Plugins bundle functionality that can be added to an editor.
            They are part of the [editor state](https://prosemirror.net/docs/ref/#state.EditorState) and
            may influence that state and the view that contains it.
            */var xn=/** @class */function(){
/**
                Create a plugin.
                */
function r(
/**
                The plugin's [spec object](https://prosemirror.net/docs/ref/#state.PluginSpec).
                */
r){this.spec=r;
/**
                    The [props](https://prosemirror.net/docs/ref/#view.EditorProps) exported by this plugin.
                    */this.props={};if(r.props)_n(r.props,this,this.props);this.key=r.key?r.key.key:On("plugin")}
/**
                Extract the plugin's state field from an editor state.
                */r.prototype.getState=function(r){return r[this.key]};return r}();var Mn=Object.create(null);function On(r){if(r in Mn)return r+"$"+ ++Mn[r];Mn[r]=0;return r+"$"}
/**
            A key is used to [tag](https://prosemirror.net/docs/ref/#state.PluginSpec.key) plugins in a way
            that makes it possible to find them, given an editor state.
            Assigning a key does mean only one plugin of that type can be
            active in a state.
            */var Tn=/** @class */function(){
/**
                Create a plugin key.
                */
function r(r){if(r===void 0){r="key"}this.key=On(r)}
/**
                Get the active plugin with this key, if any, from an editor
                state.
                */r.prototype.get=function(r){return r.config.pluginsByKey[this.key]};
/**
                Get the plugin's state from an editor state.
                */r.prototype.getState=function(r){return r[this.key]};return r}();function An(r,t){var n=r.selection.$cursor;if(!n||(t?!t.endOfTextblock("backward",r):n.parentOffset>0))return null;return n}
/**
            If the selection is empty and at the start of a textblock, try to
            reduce the distance between that block and the one before it—if
            there's a block directly before it that can be joined, join them.
            If not, try to move the selected block closer to the next one in
            the document structure by lifting it out of its parent or moving it
            into a parent of the previous block. Will use the view for accurate
            (bidi-aware) start-of-textblock detection if given.
            */var En=function(r,t,n){var e=An(r,n);if(!e)return false;var i=Nn(e);
// If there is no node before this, try to lift
if(!i){var u=e.blockRange(),a=u&&ct(u);if(a==null)return false;if(t)t(r.tr.lift(u,a).scrollIntoView());return true}var f=i.nodeBefore;
// Apply the joining algorithm
if(Jn(r,i,t,-1))return true;
// If the node below has no content and the node above is
// selectable, delete the node below and select the one above.
if(e.parent.content.size==0&&(Rn(f,"end")||fn.isSelectable(f))){for(var o=e.depth;;o--){var s=Lt(r.doc,e.before(o),e.after(o),k.empty);if(s&&s.slice.size<s.to-s.from){if(t){var l=r.tr.step(s);l.setSelection(Rn(f,"end")?rn.findFrom(l.doc.resolve(l.mapping.map(i.pos,-1)),-1):fn.create(l.doc,i.pos-f.nodeSize));t(l.scrollIntoView())}return true}if(o==1||e.node(o-1).childCount>1)break}}
// If the node before is an atom, delete it
if(f.isAtom&&i.depth==e.depth-1){if(t)t(r.tr.delete(i.pos-f.nodeSize,i.pos).scrollIntoView());return true}return false};
/**
            A more limited form of [`joinBackward`](https://prosemirror.net/docs/ref/#commands.joinBackward)
            that only tries to join the current textblock to the one before
            it, if the cursor is at the start of a textblock.
            */var Sn=function(r,t,n){var e=An(r,n);if(!e)return false;var i=Nn(e);return i?jn(r,i,t):false};
/**
            A more limited form of [`joinForward`](https://prosemirror.net/docs/ref/#commands.joinForward)
            that only tries to join the current textblock to the one after
            it, if the cursor is at the end of a textblock.
            */var Cn=function(r,t,n){var e=Pn(r,n);if(!e)return false;var i=Dn(e);return i?jn(r,i,t):false};function jn(r,t,n){var e=t.nodeBefore,i=e,u=t.pos-1;for(;!i.isTextblock;u--){if(i.type.spec.isolating)return false;var a=i.lastChild;if(!a)return false;i=a}var f=t.nodeAfter,o=f,s=t.pos+1;for(;!o.isTextblock;s++){if(o.type.spec.isolating)return false;var a=o.firstChild;if(!a)return false;o=a}var l=Lt(r.doc,u,s,k.empty);if(!l||l.from!=u||l instanceof ut&&l.slice.size>=s-u)return false;if(n){var v=r.tr.step(l);v.setSelection(un.create(v.doc,u));n(v.scrollIntoView())}return true}function Rn(r,t,n){if(n===void 0){n=false}for(var e=r;e;e=t=="start"?e.firstChild:e.lastChild){if(e.isTextblock)return true;if(n&&e.childCount!=1)return false}return false}
/**
            When the selection is empty and at the start of a textblock, select
            the node before that textblock, if possible. This is intended to be
            bound to keys like backspace, after
            [`joinBackward`](https://prosemirror.net/docs/ref/#commands.joinBackward) or other deleting
            commands, as a fall-back behavior when the schema doesn't allow
            deletion at the selected point.
            */var Ln=function(r,t,n){var e=r.selection,i=e.$head,u=e.empty,a=i;if(!u)return false;if(i.parent.isTextblock){if(n?!n.endOfTextblock("backward",r):i.parentOffset>0)return false;a=Nn(i)}var f=a&&a.nodeBefore;if(!f||!fn.isSelectable(f))return false;if(t)t(r.tr.setSelection(fn.create(r.doc,a.pos-f.nodeSize)).scrollIntoView());return true};function Nn(r){if(!r.parent.type.spec.isolating)for(var t=r.depth-1;t>=0;t--){if(r.index(t)>0)return r.doc.resolve(r.before(t+1));if(r.node(t).type.spec.isolating)break}return null}function Pn(r,t){var n=r.selection.$cursor;if(!n||(t?!t.endOfTextblock("forward",r):n.parentOffset<n.parent.content.size))return null;return n}
/**
            If the selection is empty and the cursor is at the end of a
            textblock, try to reduce or remove the boundary between that block
            and the one after it, either by joining them or by moving the other
            block closer to this one in the tree structure. Will use the view
            for accurate start-of-textblock detection if given.
            */var In=function(r,t,n){var e=Pn(r,n);if(!e)return false;var i=Dn(e);
// If there is no node after this, there's nothing to do
if(!i)return false;var u=i.nodeAfter;
// Try the joining algorithm
if(Jn(r,i,t,1))return true;
// If the node above has no content and the node below is
// selectable, delete the node above and select the one below.
if(e.parent.content.size==0&&(Rn(u,"start")||fn.isSelectable(u))){var a=Lt(r.doc,e.before(),e.after(),k.empty);if(a&&a.slice.size<a.to-a.from){if(t){var f=r.tr.step(a);f.setSelection(Rn(u,"start")?rn.findFrom(f.doc.resolve(f.mapping.map(i.pos)),1):fn.create(f.doc,f.mapping.map(i.pos)));t(f.scrollIntoView())}return true}}
// If the next node is an atom, delete it
if(u.isAtom&&i.depth==e.depth-1){if(t)t(r.tr.delete(i.pos,i.pos+u.nodeSize).scrollIntoView());return true}return false};
/**
            When the selection is empty and at the end of a textblock, select
            the node coming after that textblock, if possible. This is intended
            to be bound to keys like delete, after
            [`joinForward`](https://prosemirror.net/docs/ref/#commands.joinForward) and similar deleting
            commands, to provide a fall-back behavior when the schema doesn't
            allow deletion at the selected point.
            */var Hn=function(r,t,n){var e=r.selection,i=e.$head,u=e.empty,a=i;if(!u)return false;if(i.parent.isTextblock){if(n?!n.endOfTextblock("forward",r):i.parentOffset<i.parent.content.size)return false;a=Dn(i)}var f=a&&a.nodeAfter;if(!f||!fn.isSelectable(f))return false;if(t)t(r.tr.setSelection(fn.create(r.doc,a.pos)).scrollIntoView());return true};function Dn(r){if(!r.parent.type.spec.isolating)for(var t=r.depth-1;t>=0;t--){var n=r.node(t);if(r.index(t)+1<n.childCount)return r.doc.resolve(r.after(t+1));if(n.type.spec.isolating)break}return null}
/**
            Join the selected block or, if there is a text selection, the
            closest ancestor block of the selection that can be joined, with
            the sibling above it.
            */var zn=function(r,t){var n=r.selection,e=n instanceof fn,i;if(e){if(n.node.isTextblock||!Tt(r.doc,n.from))return false;i=n.from}else{i=St(r.doc,n.from,-1);if(i==null)return false}if(t){var u=r.tr.join(i);if(e)u.setSelection(fn.create(u.doc,i-r.doc.resolve(i).nodeBefore.nodeSize));t(u.scrollIntoView())}return true};
/**
            Join the selected block, or the closest ancestor of the selection
            that can be joined, with the sibling after it.
            */var Bn=function(r,t){var n=r.selection,e;if(n instanceof fn){if(n.node.isTextblock||!Tt(r.doc,n.to))return false;e=n.to}else{e=St(r.doc,n.to,1);if(e==null)return false}if(t)t(r.tr.join(e).scrollIntoView());return true};
/**
            Lift the selected block, or the closest ancestor block of the
            selection that can be lifted, out of its parent node.
            */var Un=function(r,t){var n=r.selection,e=n.$from,i=n.$to;var u=e.blockRange(i),a=u&&ct(u);if(a==null)return false;if(t)t(r.tr.lift(u,a).scrollIntoView());return true};
/**
            If the selection is in a node whose type has a truthy
            [`code`](https://prosemirror.net/docs/ref/#model.NodeSpec.code) property in its spec, replace the
            selection with a newline character.
            */var $n=function(r,t){var n=r.selection,e=n.$head,i=n.$anchor;if(!e.parent.type.spec.code||!e.sameParent(i))return false;if(t)t(r.tr.insertText("\n").scrollIntoView());return true};function Kn(r){for(var t=0;t<r.edgeCount;t++){var n=r.edge(t).type;if(n.isTextblock&&!n.hasRequiredAttrs())return n}return null}
/**
            When the selection is in a node with a truthy
            [`code`](https://prosemirror.net/docs/ref/#model.NodeSpec.code) property in its spec, create a
            default block after the code block, and move the cursor there.
            */var Fn=function(r,t){var n=r.selection,e=n.$head,i=n.$anchor;if(!e.parent.type.spec.code||!e.sameParent(i))return false;var u=e.node(-1),a=e.indexAfter(-1),f=Kn(u.contentMatchAt(a));if(!f||!u.canReplaceWith(a,a,f))return false;if(t){var o=e.after(),s=r.tr.replaceWith(o,o,f.createAndFill());s.setSelection(rn.near(s.doc.resolve(o),1));t(s.scrollIntoView())}return true};
/**
            If a block node is selected, create an empty paragraph before (if
            it is its parent's first child) or after it.
            */var Wn=function(r,t){var n=r.selection,e=n.$from,i=n.$to;if(n instanceof sn||e.parent.inlineContent||i.parent.inlineContent)return false;var u=Kn(i.parent.contentMatchAt(i.indexAfter()));if(!u||!u.isTextblock)return false;if(t){var a=(!e.parentOffset&&i.index()<i.parent.childCount?e:i).pos;var f=r.tr.insert(a,u.createAndFill());f.setSelection(un.create(f.doc,a+1));t(f.scrollIntoView())}return true};
/**
            If the cursor is in an empty textblock that can be lifted, lift the
            block.
            */var qn=function(r,t){var n=r.selection.$cursor;if(!n||n.parent.content.size)return false;if(n.depth>1&&n.after()!=n.end(-1)){var e=n.before();if(Mt(r.doc,e)){if(t)t(r.tr.split(e).scrollIntoView());return true}}var i=n.blockRange(),u=i&&ct(i);if(u==null)return false;if(t)t(r.tr.lift(i,u).scrollIntoView());return true};
/**
            Move the selection to the node wrapping the current selection, if
            any. (Will not select the document node.)
            */var Vn=function(r,t){var n=r.selection,e=n.$from,i=n.to,u;var a=e.sharedDepth(i);if(a==0)return false;u=e.before(a);if(t)t(r.tr.setSelection(fn.create(r.doc,u)));return true};function Gn(r,t,n){var e=t.nodeBefore,i=t.nodeAfter,u=t.index();if(!e||!i||!e.type.compatibleContent(i.type))return false;if(!e.content.size&&t.parent.canReplace(u-1,u)){if(n)n(r.tr.delete(t.pos-e.nodeSize,t.pos).scrollIntoView());return true}if(!t.parent.canReplace(u,u+1)||!(i.isTextblock||Tt(r.doc,t.pos)))return false;if(n)n(r.tr.join(t.pos).scrollIntoView());return true}function Jn(r,t,n,e){var i=t.nodeBefore,u=t.nodeAfter,a,f;var o=i.type.spec.isolating||u.type.spec.isolating;if(!o&&Gn(r,t,n))return true;var s=!o&&t.parent.canReplace(t.index(),t.index()+1);if(s&&(a=(f=i.contentMatchAt(i.childCount)).findWrapping(u.type))&&f.matchType(a[0]||u.type).validEnd){if(n){var l=t.pos+u.nodeSize,v=p.empty;for(var c=a.length-1;c>=0;c--)v=p.from(a[c].create(null,v));v=p.from(i.copy(v));var h=r.tr.step(new at(t.pos-1,l,t.pos,l,new k(v,1,0),a.length,true));var d=h.doc.resolve(l+2*a.length);if(d.nodeAfter&&d.nodeAfter.type==i.type&&Tt(h.doc,d.pos))h.join(d.pos);n(h.scrollIntoView())}return true}var b=u.type.spec.isolating||e>0&&o?null:rn.findFrom(t,1);var g=b&&b.$from.blockRange(b.$to),m=g&&ct(g);if(m!=null&&m>=t.depth){if(n)n(r.tr.lift(g,m).scrollIntoView());return true}if(s&&Rn(u,"start",true)&&Rn(i,"end")){var w=i,y=[];for(;;){y.push(w);if(w.isTextblock)break;w=w.lastChild}var _=u,x=1;for(;!_.isTextblock;_=_.firstChild)x++;if(w.canReplace(w.childCount,w.childCount,_.content)){if(n){var l=p.empty;for(var M=y.length-1;M>=0;M--)l=p.from(y[M].copy(l));var O=r.tr.step(new at(t.pos-y.length,t.pos+u.nodeSize,t.pos+x,t.pos+u.nodeSize-x,new k(l,y.length,0),0,true));n(O.scrollIntoView())}return true}}return false}function Xn(r){return function(t,n){var e=t.selection,i=r<0?e.$from:e.$to;var u=i.depth;while(i.node(u).isInline){if(!u)return false;u--}if(!i.node(u).isTextblock)return false;if(n)n(t.tr.setSelection(un.create(t.doc,r<0?i.start(u):i.end(u))));return true}}
/**
            Moves the cursor to the start of current text block.
            */var Yn=Xn(-1);
/**
            Moves the cursor to the end of current text block.
            */var Qn=Xn(1);
// Parameterized commands
/**
            Wrap the selection in a node of the given type with the given
            attributes.
            */function Zn(r,t){if(t===void 0){t=null}return function(n,e){var i=n.selection,u=i.$from,a=i.$to;var f=u.blockRange(a),o=f&&dt(f,r,t);if(!o)return false;if(e)e(n.tr.wrap(f,o).scrollIntoView());return true}}
/**
            Returns a command that tries to set the selected textblocks to the
            given node type with the given attributes.
            */function re(r,t){if(t===void 0){t=null}return function(n,e){var i=false;for(var u=0;u<n.selection.ranges.length&&!i;u++){var a=n.selection.ranges[u],f=a.$from.pos,o=a.$to.pos;n.doc.nodesBetween(f,o,(function(e,u){if(i)return false;if(!e.isTextblock||e.hasMarkup(r,t))return;if(e.type==r){i=true}else{var a=n.doc.resolve(u),f=a.index();i=a.parent.canReplaceWith(f,f+1,r)}}))}if(!i)return false;if(e){var s=n.tr;for(var l=0;l<n.selection.ranges.length;l++){var v=n.selection.ranges[l],f=v.$from.pos,o=v.$to.pos;s.setBlockType(f,o,r,t)}e(s.scrollIntoView())}return true}}typeof navigator!="undefined"?/Mac|iP(hone|[oa]d)/.test(navigator.platform):typeof os!="undefined"&&os.platform?os.platform()=="darwin":false;
/**
            Returns a command function that wraps the selection in a list with
            the given type an attributes. If `dispatch` is null, only return a
            value to indicate whether this is possible, but don't actually
            perform the change.
            */function te(r,t){if(t===void 0){t=null}return function(n,e){var i=n.selection,u=i.$from,a=i.$to;var f=u.blockRange(a);if(!f)return false;var o=e?n.tr:null;if(!ne(o,f,r,t))return false;if(e)e(o.scrollIntoView());return true}}
/**
            Try to wrap the given node range in a list of the given type.
            Return `true` when this is possible, `false` otherwise. When `tr`
            is non-null, the wrapping is added to that transaction. When it is
            `null`, the function only queries whether the wrapping is
            possible.
            */function ne(r,t,n,e){if(e===void 0){e=null}var i=false,u=t,a=t.$from.doc;
// This is at the top of an existing list item
if(t.depth>=2&&t.$from.node(t.depth-1).type.compatibleContent(n)&&t.startIndex==0){
// Don't do anything if this is the top of the list
if(t.$from.index(t.depth-1)==0)return false;var f=a.resolve(t.start-2);u=new D(f,f,t.depth);if(t.endIndex<t.parent.childCount)t=new D(t.$from,a.resolve(t.$to.end(t.depth)),t.depth);i=true}var o=dt(u,n,e,t);if(!o)return false;if(r)ee(r,t,o,i,n);return true}function ee(r,t,n,e,i){var u=p.empty;for(var a=n.length-1;a>=0;a--)u=p.from(n[a].type.create(n[a].attrs,u));r.step(new at(t.start-(e?2:0),t.end,t.start,t.end,new k(u,0,0),n.length,true));var f=0;for(var o=0;o<n.length;o++)if(n[o].type==i)f=o+1;var s=n.length-f;var l=t.start+n.length-(e?2:0),v=t.parent;for(var c=t.startIndex,h=t.endIndex,d=true;c<h;c++,d=false){if(!d&&s&&Mt(r.doc,l,s)){r.split(l,s);l+=2*s}l+=v.child(c).nodeSize}return r}function ie(r,t){return r instanceof or?t==r:r.indexOf(t)>-1}
/**
            Create a command to lift the list item around the selection up into
            a wrapping list. `itemType` may be an array of list item types.
            */function ue(r){return function(t,n){var e=t.selection,i=e.$from,u=e.$to;var a=i.blockRange(u,(function(t){return t.childCount>0&&ie(r,t.firstChild.type)}));if(!a)return false;if(!n)return true;if(ie(r,i.node(a.depth-1).type))// Inside a parent list
return ae(t,n,a);else// Outer list node
return fe(t,n,a)}}function ae(r,t,n){var e=r.tr,i=n.end,u=n.$to.end(n.depth);var a=n.parent.child(n.endIndex-1).type;if(i<u){
// There are siblings after the lifted items, which must become
// children of the last item
e.step(new at(i-1,u,i,u,new k(p.from(a.create(null,n.parent.copy())),1,0),1,true));n=new D(e.doc.resolve(n.$from.pos),e.doc.resolve(u),n.depth)}var f=ct(n);if(f==null)return false;e.lift(n,f);var o=e.doc.resolve(e.mapping.map(i,-1)-1);if(Tt(e.doc,o.pos)&&o.nodeBefore.type==o.nodeAfter.type)e.join(o.pos);t(e.scrollIntoView());return true}function fe(r,t,n){var e=r.tr,i=n.parent;
// Merge the list items into a single big item
for(var u=n.end,a=n.endIndex-1,f=n.startIndex;a>f;a--){u-=i.child(a).nodeSize;e.delete(u-1,u+1)}var o=e.doc.resolve(n.start),s=o.nodeAfter;if(e.mapping.map(n.end)!=n.start+o.nodeAfter.nodeSize)return false;var l=n.startIndex==0,v=n.endIndex==i.childCount;var c=o.node(-1),h=o.index(-1);if(!c.canReplace(h+(l?0:1),h+1,s.content.append(v?p.empty:p.from(i))))return false;var d=o.pos,b=d+s.nodeSize;
// Strip off the surrounding list. At the sides where we're not at
// the end of the list, the existing list is closed. At sides where
// this is the end, it is overwritten to its end.
e.step(new at(d-(l?1:0),b+(v?1:0),d+1,b-1,new k((l?p.empty:p.from(i.copy(p.empty))).append(v?p.empty:p.from(i.copy(p.empty))),l?0:1,v?0:1),l?0:1));t(e.scrollIntoView());return true}
/**
            Create a command to sink the list item around the selection down
            into an inner list. `itemType` may be an array of list item types.
            */function oe(r){return function(t,n){var e=t.selection,i=e.$from,u=e.$to;var a=i.blockRange(u,(function(t){return t.childCount>0&&ie(r,t.firstChild.type)}));if(!a)return false;var f=a.startIndex;if(f==0)return false;var o=a.parent,s=o.child(f-1);if(!ie(r,s.type))return false;if(n){var l=s.lastChild&&s.lastChild.type==o.type;var v=p.from(l?s.lastChild.lastChild.type.create():null);var c=new k(p.from(s.type.create(null,p.from(o.type.create(null,v)))),l?3:1,0);var h=a.start,d=a.end;n(t.tr.step(new at(h-(l?3:1),d,h,d,c,1,true)).scrollIntoView())}return true}}var se=function(r){for(var t=0;;t++){r=r.previousSibling;if(!r)return t}};function le(r){var t=r.assignedSlot||r.parentNode;return t&&t.nodeType==11?t.host:t}var ve=null;
// Note that this will always return the same range, because DOM range
// objects are every expensive, and keep slowing down subsequent DOM
// updates, for some reason.
function ce(r,t,n){var e=ve||(ve=document.createRange());e.setEnd(r,n==null?r.nodeValue.length:n);e.setStart(r,t||0);return e}function he(){ve=null}
// Scans forward and backward through DOM positions equivalent to the
// given one to see if the two are in the same place (i.e. after a
// text node vs at the end of that text node)
function de(r,t,n,e){return n&&(be(r,t,n,e,-1)||be(r,t,n,e,1))}var pe=/^(img|br|input|textarea|hr)$/i;function be(r,t,n,e,i){var u;for(;;){if(r==n&&t==e)return true;if(t==(i<0?0:ge(r))){var a=r.parentNode;if(!a||!me(a)||Me(r)||(pe.test(r.nodeName)||r.contentEditable=="false"))return false;t=se(r)+(i<0?0:1);r=a}else if(me(r)){var f=r.childNodes[t+(i<0?-1:0)];if(me(f)&&f.contentEditable=="false"){if((u=f.pmViewDesc)===null||u===void 0?void 0:u.ignoreForSelection)t+=i;else return false}else{r=f;t=i<0?ge(r):0}}else{return false}}}function ge(r){return r.nodeType==3?r.nodeValue.length:r.childNodes.length}function me(r){return r.nodeType==1}function we(r){return r.nodeType==3}function ye(r,t){return t?r.contains(me(t)?t:t.parentNode):false}function ke(r,t){for(;;){if(we(r)&&t)return r;if(me(r)&&t>0){if(r.contentEditable=="false")return null;r=r.childNodes[t-1];t=ge(r)}else if(r.parentNode&&!Me(r)){t=se(r);r=r.parentNode}else{return null}}}function _e(r,t){for(;;){if(we(r)&&t<r.nodeValue.length)return r;if(me(r)&&t<r.childNodes.length){if(r.contentEditable=="false")return null;r=r.childNodes[t];t=0}else if(r.parentNode&&!Me(r)){t=se(r)+1;r=r.parentNode}else{return null}}}function xe(r,t,n){for(var e=t==0,i=t==ge(r);e||i;){if(r==n)return true;var u=se(r);r=r.parentNode;if(!r)return false;e=e&&u==0;i=i&&u==ge(r)}}function Me(r){var t;for(var n=r;n;n=n.parentNode)if(t=n.pmViewDesc)break;return t&&t.node&&t.node.isBlock&&(t.dom==r||t.contentDOM==r)}
// Work around Chrome issue https://bugs.chromium.org/p/chromium/issues/detail?id=447523
// (isCollapsed inappropriately returns true in shadow dom)
function Oe(r){return r.focusNode&&de(r.focusNode,r.focusOffset,r.anchorNode,r.anchorOffset)}function Te(r,t){r.collapse(t.anchorNode,t.anchorOffset);if(t.focusNode!=t.anchorNode||t.focusOffset!=t.anchorOffset)r.extend(t.focusNode,t.focusOffset)}function Ae(r,t){var n=document.createEvent("Event");n.initEvent("keydown",true,true);n.keyCode=r;n.key=n.code=t;return n}function Ee(r){var t=r.activeElement;while(t&&t.shadowRoot)t=t.shadowRoot.activeElement;return t}function Se(r,t,n){if(r.caretPositionFromPoint){try{// Firefox throws for this call in hard-to-predict circumstances (#994)
var e=r.caretPositionFromPoint(t,n);
// Clip the offset, because Chrome will return a text offset
// into <input> nodes, which can't be treated as a regular DOM
// offset
if(e)return{node:e.offsetNode,offset:Math.min(ge(e.offsetNode),e.offset)}}catch(r){}}if(r.caretRangeFromPoint){var i=r.caretRangeFromPoint(t,n);if(i)return{node:i.startContainer,offset:Math.min(ge(i.startContainer),i.startOffset)}}}var Ce=typeof navigator!="undefined"?navigator:null;var je=typeof document!="undefined"?document:null;var Re=Ce&&Ce.userAgent||"";var Le=/gecko\/(\d+)/i.test(Re)&&!/edge?\//i.test(Re);var Ne=/Chrome\/(\d+)/.exec(Re);var Pe=!!Ne;var Ie=Ne?+Ne[1]:0;var He=!!Ce&&/Apple Computer/.test(Ce.vendor);
// Is true for both iOS and iPadOS for convenience
var De=He&&(/Mobile\/\w+/.test(Re)||!!Ce&&Ce.maxTouchPoints>2);var ze=De||(Ce?/Mac/.test(Ce.platform):false);var Be=Ce?/Win/.test(Ce.platform):false;var Ue=/Android \d/.test(Re);var $e=!!je&&"webkitFontSmoothing"in je.documentElement.style;var Ke=$e?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0;function Fe(r){var t=r.defaultView&&r.defaultView.visualViewport;if(t)return{left:0,right:t.width,top:0,bottom:t.height};return{left:0,right:r.documentElement.clientWidth,top:0,bottom:r.documentElement.clientHeight}}function We(r,t){return typeof r=="number"?r:r[t]}function qe(r){var t=r.getBoundingClientRect();
// Adjust for elements with style "transform: scale()"
var n=t.width/r.offsetWidth||1;var e=t.height/r.offsetHeight||1;
// Make sure scrollbar width isn't included in the rectangle
return{left:t.left,right:t.left+r.clientWidth*n,top:t.top,bottom:t.top+r.clientHeight*e}}function Ve(r,t,n){
// Skip empty rects with all sides at 0, for example, when the element has no CSS box (display: none)
if(!oi(t)&&t.left==0)return;var e=r.someProp("scrollThreshold")||0,i=r.someProp("scrollMargin")||5;var u=r.dom.ownerDocument;for(var a=n||r.dom;;){if(!a)break;if(!me(a)){a=le(a);continue}var f=a==u.body;var o=f?Fe(u):qe(a);var s=0,l=0;if(t.top<o.top+We(e,"top"))l=-(o.top-t.top+We(i,"top"));else if(t.bottom>o.bottom-We(e,"bottom"))l=t.bottom-t.top>o.bottom-o.top?t.top+We(i,"top")-o.top:t.bottom-o.bottom+We(i,"bottom");if(t.left<o.left+We(e,"left"))s=-(o.left-t.left+We(i,"left"));else if(t.right>o.right-We(e,"right"))s=t.right-o.right+We(i,"right");if(s||l){if(f){u.defaultView.scrollBy(s,l)}else{var v=a.scrollLeft,c=a.scrollTop;if(l)a.scrollTop+=l;if(s)a.scrollLeft+=s;var h=a.scrollLeft-v,d=a.scrollTop-c;t={left:t.left-h,top:t.top-d,right:t.right-h,bottom:t.bottom-d}}}var p=f?"fixed":getComputedStyle(a).position;if(/^(fixed|sticky)$/.test(p))break;a=p=="absolute"?a.offsetParent:le(a)}}
// Store the scroll position of the editor's parent nodes, along with
// the top position of an element near the top of the editor, which
// will be used to make sure the visible viewport remains stable even
// when the size of the content above changes.
function Ge(r){var t=r.dom.getBoundingClientRect(),n=Math.max(0,t.top);var e,i;for(var u=(t.left+t.right)/2,a=n+1;a<Math.min(innerHeight,t.bottom);a+=5){var f=r.root.elementFromPoint(u,a);if(!f||f==r.dom||!r.dom.contains(f))continue;var o=f.getBoundingClientRect();if(o.top>=n-20){e=f;i=o.top;break}}return{refDOM:e,refTop:i,stack:Je(r.dom)}}function Je(r){var t=[],n=r.ownerDocument;for(var e=r;e;e=le(e)){t.push({dom:e,top:e.scrollTop,left:e.scrollLeft});if(r==n)break}return t}
// Reset the scroll position of the editor's parent nodes to that what
// it was before, when storeScrollPos was called.
function Xe(r){var t=r.refDOM,n=r.refTop,e=r.stack;var i=t?t.getBoundingClientRect().top:0;Ye(e,i==0?0:i-n)}function Ye(r,t){for(var n=0;n<r.length;n++){var e=r[n],i=e.dom,u=e.top,a=e.left;if(i.scrollTop!=u+t)i.scrollTop=u+t;if(i.scrollLeft!=a)i.scrollLeft=a}}var Qe=null;
// Feature-detects support for .focus({preventScroll: true}), and uses
// a fallback kludge when not supported.
function Ze(r){if(r.setActive)return r.setActive();// in IE
if(Qe)return r.focus(Qe);var t=Je(r);r.focus(Qe==null?{get preventScroll(){Qe={preventScroll:true};return true}}:undefined);if(!Qe){Qe=false;Ye(t,0)}}function ri(r,t){var n;var e=2e8,i,u=0;var a=t.top,f=t.top;var o,s;for(var l=r.firstChild,v=0;l;l=l.nextSibling,v++){var c=void 0;if(me(l))c=l.getClientRects();else if(we(l))c=ce(l).getClientRects();else continue;for(var h=0;h<c.length;h++){var d=c[h];if(d.top<=a&&d.bottom>=f){a=Math.max(d.bottom,a);f=Math.min(d.top,f);var p=d.left>t.left?d.left-t.left:d.right<t.left?t.left-d.right:0;if(p<e){n=l;e=p;i=p&&we(n)?{left:d.right<t.left?d.right:d.left,top:t.top}:t;if(me(l)&&p)u=v+(t.left>=(d.left+d.right)/2?1:0);continue}}else if(d.top>t.top&&!o&&d.left<=t.left&&d.right>=t.left){o=l;s={left:Math.max(d.left,Math.min(d.right,t.left)),top:d.top}}if(!n&&(t.left>=d.right&&t.top>=d.top||t.left>=d.left&&t.top>=d.bottom))u=v+1}}if(!n&&o){n=o;i=s;e=0}if(n&&we(n))return ti(n,i);if(!n||e)return{node:r,offset:u};return ri(n,i)}function ti(r,t){var n=r.nodeValue.length;var e=document.createRange(),i;for(var u=0;u<n;u++){e.setEnd(r,u+1);e.setStart(r,u);var a=si(e,1);if(a.top==a.bottom)continue;if(ni(t,a)){i={node:r,offset:u+(t.left>=(a.left+a.right)/2?1:0)};break}}e.detach();return i||{node:r,offset:0}}function ni(r,t){return r.left>=t.left-1&&r.left<=t.right+1&&r.top>=t.top-1&&r.top<=t.bottom+1}function ei(r,t){var n=r.parentNode;if(n&&/^li$/i.test(n.nodeName)&&t.left<r.getBoundingClientRect().left)return n;return r}function ii(r,t,n){var e=ri(t,n),i=e.node,u=e.offset,a=-1;if(me(i)&&!i.firstChild){var f=i.getBoundingClientRect();a=f.left!=f.right&&n.left>(f.left+f.right)/2?1:-1}return r.docView.posFromDOM(i,u,a)}function ui(r,t,n,e){
// Browser (in caretPosition/RangeFromPoint) will agressively
// normalize towards nearby inline nodes. Since we are interested in
// positions between block nodes too, we first walk up the hierarchy
// of nodes to see if there are block nodes that the coordinates
// fall outside of. If so, we take the position before/after that
// block. If not, we call `posFromDOM` on the raw node/offset.
var i=-1;for(var u=t,a=false;;){if(u==r.dom)break;var f=r.docView.nearestDesc(u,true),o=void 0;if(!f)return null;if(me(f.dom)&&(f.node.isBlock&&f.parent||!f.contentDOM)&&(
// Ignore elements with zero-size bounding rectangles
(o=f.dom.getBoundingClientRect()).width||o.height)){if(f.node.isBlock&&f.parent&&!/^T(R|BODY|HEAD|FOOT)$/.test(f.dom.nodeName)){
// Only apply the horizontal test to the innermost block. Vertical for any parent.
if(!a&&o.left>e.left||o.top>e.top)i=f.posBefore;else if(!a&&o.right<e.left||o.bottom<e.top)i=f.posAfter;a=true}if(!f.contentDOM&&i<0&&!f.node.isText){
// If we are inside a leaf, return the side of the leaf closer to the coords
var s=f.node.isBlock?e.top<(o.top+o.bottom)/2:e.left<(o.left+o.right)/2;return s?f.posBefore:f.posAfter}}u=f.dom.parentNode}return i>-1?i:r.docView.posFromDOM(t,n,-1)}function ai(r,t,n){var e=r.childNodes.length;if(e&&n.top<n.bottom){for(var i=Math.max(0,Math.min(e-1,Math.floor(e*(t.top-n.top)/(n.bottom-n.top))-2)),u=i;;){var a=r.childNodes[u];if(me(a)){var f=a.getClientRects();for(var o=0;o<f.length;o++){var s=f[o];if(ni(t,s))return ai(a,t,s)}}if((u=(u+1)%e)==i)break}}return r}
// Given an x,y position on the editor, get the position in the document.
function fi(r,t){var n=r.dom.ownerDocument,e,i=0;var u=Se(n,t.left,t.top);if(u)e=u.node,i=u.offset;var a=(r.root.elementFromPoint?r.root:n).elementFromPoint(t.left,t.top);var f;if(!a||!r.dom.contains(a)){var o=r.dom.getBoundingClientRect();if(!ni(t,o))return null;a=ai(r.dom,t,o);if(!a)return null}
// Safari's caretRangeFromPoint returns nonsense when on a draggable element
if(He){for(var s=a;e&&s;s=le(s))if(s.draggable)e=undefined}a=ei(a,t);if(e){if(Le&&me(e)){
// Firefox will sometimes return offsets into <input> nodes, which
// have no actual children, from caretPositionFromPoint (#953)
i=Math.min(i,e.childNodes.length);
// It'll also move the returned position before image nodes,
// even if those are behind it.
if(i<e.childNodes.length){var l=e.childNodes[i],o=void 0;if(l.nodeName=="IMG"&&(o=l.getBoundingClientRect()).right<=t.left&&o.bottom>t.top)i++}}var v=void 0;
// When clicking above the right side of an uneditable node, Chrome will report a cursor position after that node.
if($e&&i&&me(e)&&me(v=e.childNodes[i-1])&&v.contentEditable=="false"&&v.getBoundingClientRect().top>=t.top)i--;
// Suspiciously specific kludge to work around caret*FromPoint
// never returning a position at the end of the document
if(e==r.dom&&i==e.childNodes.length-1&&me(e.lastChild)&&t.top>e.lastChild.getBoundingClientRect().bottom)f=r.state.doc.content.size;
// Ignore positions directly after a BR, since caret*FromPoint
// 'round up' positions that would be more accurately placed
// before the BR node.
else if(i==0||!me(e)||e.childNodes[i-1].nodeName!="BR")f=ui(r,e,i,t)}if(f==null)f=ii(r,a,t);var c=r.docView.nearestDesc(a,true);return{pos:f,inside:c?c.posAtStart-c.border:-1}}function oi(r){return r.top<r.bottom||r.left<r.right}function si(r,t){var n=r.getClientRects();if(n.length){var e=n[t<0?0:n.length-1];if(oi(e))return e}return Array.prototype.find.call(n,oi)||r.getBoundingClientRect()}var li=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
// Given a position in the document model, get a bounding box of the
// character at that position, relative to the window.
function vi(r,t,n){var e=r.docView.domFromPos(t,n<0?-1:1),i=e.node,u=e.offset,a=e.atom;var f=$e||Le;if(we(i)){
// These browsers support querying empty text ranges. Prefer that in
// bidi context or when at the end of a node.
if(f&&(li.test(i.nodeValue)||(n<0?!u:u==i.nodeValue.length))){var o=si(ce(i,u,u),n);
// Firefox returns bad results (the position before the space)
// when querying a position directly after line-broken
// whitespace. Detect this situation and and kludge around it
if(Le&&u&&/\s/.test(i.nodeValue[u-1])&&u<i.nodeValue.length){var s=si(ce(i,u-1,u-1),-1);if(s.top==o.top){var l=si(ce(i,u,u+1),-1);if(l.top!=o.top)return ci(l,l.left<s.left)}}return o}else{var v=u,c=u,h=n<0?1:-1;if(n<0&&!u){c++;h=-1}else if(n>=0&&u==i.nodeValue.length){v--;h=1}else if(n<0){v--}else{c++}return ci(si(ce(i,v,c),h),h<0)}}var d=r.state.doc.resolve(t-(a||0));
// Return a horizontal line in block context
if(!d.parent.inlineContent){if(a==null&&u&&(n<0||u==ge(i))){var p=i.childNodes[u-1];if(me(p))return hi(p.getBoundingClientRect(),false)}if(a==null&&u<ge(i)){var b=i.childNodes[u];if(me(b))return hi(b.getBoundingClientRect(),true)}return hi(i.getBoundingClientRect(),n>=0)}
// Inline, not in text node (this is not Bidi-safe)
if(a==null&&u&&(n<0||u==ge(i))){var p=i.childNodes[u-1];var g=we(p)?ce(p,ge(p)-(f?0:1)):me(p)&&(p.nodeName!="BR"||!p.nextSibling)?p:null;if(g)return ci(si(g,1),false)}if(a==null&&u<ge(i)){var b=i.childNodes[u];while(b.pmViewDesc&&b.pmViewDesc.ignoreForCoords)b=b.nextSibling;var g=!b?null:we(b)?ce(b,0,f?0:1):me(b)?b:null;if(g)return ci(si(g,-1),true)}
// All else failed, just try to get a rectangle for the target node
return ci(si(we(i)?ce(i):i,-n),n>=0)}function ci(r,t){if(r.width==0)return r;var n=t?r.left:r.right;return{top:r.top,bottom:r.bottom,left:n,right:n}}function hi(r,t){if(r.height==0)return r;var n=t?r.top:r.bottom;return{top:n,bottom:n,left:r.left,right:r.right}}function di(r,t,n){var e=r.state,i=r.root.activeElement;if(e!=t)r.updateState(t);if(i!=r.dom)r.focus();try{return n()}finally{if(e!=t)r.updateState(e);if(i!=r.dom&&i)i.focus()}}
// Whether vertical position motion in a given direction
// from a position would leave a text block.
function pi(r,t,n){var e=t.selection;var i=n=="up"?e.$from:e.$to;return di(r,t,(function(){var t=r.docView.domFromPos(i.pos,n=="up"?-1:1).node;for(;;){var e=r.docView.nearestDesc(t,true);if(!e)break;if(e.node.isBlock){t=e.contentDOM||e.dom;break}t=e.dom.parentNode}var u=vi(r,i.pos,1);for(var a=t.firstChild;a;a=a.nextSibling){var f=void 0;if(me(a))f=a.getClientRects();else if(we(a))f=ce(a,0,a.nodeValue.length).getClientRects();else continue;for(var o=0;o<f.length;o++){var s=f[o];if(s.bottom>s.top+1&&(n=="up"?u.top-s.top>(s.bottom-u.top)*2:s.bottom-u.bottom>(u.bottom-s.top)*2))return false}}return true}))}var bi=/[\u0590-\u08ac]/;function gi(r,t,n){var e=t.selection.$head;if(!e.parent.isTextblock)return false;var i=e.parentOffset,u=!i,a=i==e.parent.content.size;var f=r.domSelection();if(!f)return e.pos==e.start()||e.pos==e.end();
// If the textblock is all LTR, or the browser doesn't support
// Selection.modify (Edge), fall back to a primitive approach
if(!bi.test(e.parent.textContent)||!f.modify)return n=="left"||n=="backward"?u:a;return di(r,t,(function(){
// This is a huge hack, but appears to be the best we can
// currently do: use `Selection.modify` to move the selection by
// one character, and see if that moves the cursor out of the
// textblock (or doesn't move it at all, when at the start/end of
// the document).
var t=r.domSel.readRange();var i=f.caretBidiLevel;f.modify("move",n,"character");var u=e.depth?r.docView.domAfterPos(e.before()):r.dom;var a=r.domSel.readRange(),o=a.focusNode,s=a.focusOffset;var l=o&&!ye(u,o)||t.focusNode==o&&t.focusOffset==s;
// Restore the previous selection
Te(f,t);if(i!=null)f.caretBidiLevel=i;return l}))}var mi=null;var wi=null;var yi=false;function ki(r,t,n){if(mi==t&&wi==n)return yi;mi=t;wi=n;return yi=n=="up"||n=="down"?pi(r,t,n):gi(r,t,n)}
// Superclass for the various kinds of descriptions. Defines their
// basic structure and shared methods.
var _i=/** @class */function(){function r(r,t,n,
// This is the node that holds the child views. It may be null for
// descs that don't have children.
e){this.parent=r;this.children=t;this.dom=n;this.contentDOM=e;this.damage=0/* Damage.None */;
// An expando property on the DOM node provides a link back to its
// description.
n.pmViewDesc=this}
// Used to check whether a given description corresponds to a
// widget/mark/node.
r.prototype.matchesWidget=function(r){return false};r.prototype.matchesMark=function(r){return false};r.prototype.matchesNode=function(r,t,n){return false};r.prototype.matchesHack=function(r){return false};
// When parsing in-editor content (in domchange.js), we allow
// descriptions to determine the parse rules that should be used to
// parse them.
r.prototype.parseRule=function(r){return null};
// Used by the editor's event handler to ignore events that come
// from certain descs.
r.prototype.stopEvent=function(r){return false};Object.defineProperty(r.prototype,"size",{
// The size of the content represented by this desc.
get:function(){var r=0;for(var t=0;t<this.children.length;t++)r+=this.children[t].size;return r},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"border",{
// For block nodes, this represents the space taken up by their
// start/end tokens.
get:function(){return 0},enumerable:false,configurable:true});r.prototype.destroy=function(){this.parent=undefined;if(this.dom.pmViewDesc==this)this.dom.pmViewDesc=undefined;for(var r=0;r<this.children.length;r++)this.children[r].destroy()};r.prototype.posBeforeChild=function(r){for(var t=0,n=this.posAtStart;;t++){var e=this.children[t];if(e==r)return n;n+=e.size}};Object.defineProperty(r.prototype,"posBefore",{get:function(){return this.parent.posBeforeChild(this)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"posAtStart",{get:function(){return this.parent?this.parent.posBeforeChild(this)+this.border:0},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"posAfter",{get:function(){return this.posBefore+this.size},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"posAtEnd",{get:function(){return this.posAtStart+this.size-2*this.border},enumerable:false,configurable:true});r.prototype.localPosFromDOM=function(r,t,n){var e=this;
// If the DOM position is in the content, use the child desc after
// it to figure out a position.
if(this.contentDOM&&ye(this.contentDOM,r)){if(n<0){var i=void 0,u=void 0;if(r==this.contentDOM){i=r.childNodes[t-1]}else{while(r.parentNode!=this.contentDOM)r=r.parentNode;i=r.previousSibling}while(i&&!((u=i.pmViewDesc)&&u.parent==this))i=i.previousSibling;return i?this.posBeforeChild(u)+u.size:this.posAtStart}else{var a=void 0,u=void 0;if(r==this.contentDOM){a=r.childNodes[t]}else{while(r.parentNode!=this.contentDOM)r=r.parentNode;a=r.nextSibling}while(a&&!((u=a.pmViewDesc)&&u.parent==this))a=a.nextSibling;return a?this.posBeforeChild(u):this.posAtEnd}}
// Otherwise, use various heuristics, falling back on the bias
// parameter, to determine whether to return the position at the
// start or at the end of this view desc.
var f;if(r==this.dom&&this.contentDOM){f=t>se(this.contentDOM)}else if(this.contentDOM&&this.contentDOM!=this.dom&&this.dom.contains(this.contentDOM)){var o=r.compareDocumentPosition(this.contentDOM);if(o&16){// this.contentDOM is inside dom
f=t>Array.from(r.childNodes).findIndex((function(r){return r.contains(e.contentDOM)}))}else{// Check if after or before
f=!(o&4)}}else if(this.dom.firstChild){if(t==0)for(var s=r;;s=s.parentNode){if(s==this.dom){f=false;break}if(s.previousSibling)break}if(f==null&&t==r.childNodes.length)for(var s=r;;s=s.parentNode){if(s==this.dom){f=true;break}if(s.nextSibling)break}}return(f==null?n>0:f)?this.posAtEnd:this.posAtStart};r.prototype.nearestDesc=function(r,t){if(t===void 0){t=false}for(var n=true,e=r;e;e=e.parentNode){var i=this.getDesc(e),u=void 0;if(i&&(!t||i.node)){
// If dom is outside of this desc's nodeDOM, don't count it.
if(n&&(u=i.nodeDOM)&&!(me(u)?ye(u,r):u==r))n=false;else return i}}};r.prototype.getDesc=function(r){var t=r.pmViewDesc;for(var n=t;n;n=n.parent)if(n==this)return t};r.prototype.posFromDOM=function(r,t,n){for(var e=r;e;e=e.parentNode){var i=this.getDesc(e);if(i)return i.localPosFromDOM(r,t,n)}return-1};
// Find the desc for the node after the given pos, if any. (When a
// parent node overrode rendering, there might not be one.)
r.prototype.descAt=function(r){for(var t=0,n=0;t<this.children.length;t++){var e=this.children[t],i=n+e.size;if(n==r&&i!=n){while(!e.border&&e.children.length){for(var u=0;u<e.children.length;u++){var a=e.children[u];if(a.size){e=a;break}}}return e}if(r<i)return e.descAt(r-n-e.border);n=i}};r.prototype.domFromPos=function(r,t){if(!this.contentDOM)return{node:this.dom,offset:0,atom:r+1};
// First find the position in the child array
var n=0,e=0;for(var i=0;n<this.children.length;n++){var u=this.children[n],a=i+u.size;if(a>r){e=r-i;break}i=a}
// If this points into the middle of a child, call through
if(e)return this.children[n].domFromPos(e-this.children[n].border,t);
// Go back if there were any zero-length widgets with side >= 0 before this point
for(;n>0;n--){var f=this.children[n-1];if(f.size||!(f instanceof Si||f instanceof xi&&f.side>=0))break}
// Scan towards the first useable node
if(t<=0){var f=void 0,o=true;for(;;n--,o=false){f=n?this.children[n-1]:null;if(!f||f.dom.parentNode==this.contentDOM)break}if(f&&t&&o&&!f.border&&!f.domAtom)return f.domFromPos(f.size,t);return{node:this.contentDOM,offset:f?se(f.dom)+1:0}}else{var s=void 0,l=true;for(;;n++,l=false){s=n<this.children.length?this.children[n]:null;if(!s||s.dom.parentNode==this.contentDOM)break}if(s&&l&&!s.border&&!s.domAtom)return s.domFromPos(0,t);return{node:this.contentDOM,offset:s?se(s.dom):this.contentDOM.childNodes.length}}};
// Used to find a DOM range in a single parent for a given changed
// range.
r.prototype.parseRange=function(r,t,n){if(n===void 0){n=0}if(this.children.length==0)return{node:this.contentDOM,from:r,to:t,fromOffset:0,toOffset:this.contentDOM.childNodes.length};var e=-1,i=-1;for(var u=n,a=0;;a++){var f=this.children[a],o=u+f.size;if(e==-1&&r<=o){var s=u+f.border;
// FIXME maybe descend mark views to parse a narrower range?
if(r>=s&&t<=o-f.border&&f.node&&f.contentDOM&&this.contentDOM.contains(f.contentDOM))return f.parseRange(r,t,s);r=u;for(var l=a;l>0;l--){var v=this.children[l-1];if(v.size&&v.dom.parentNode==this.contentDOM&&!v.emptyChildAt(1)){e=se(v.dom)+1;break}r-=v.size}if(e==-1)e=0}if(e>-1&&(o>t||a==this.children.length-1)){t=o;for(var l=a+1;l<this.children.length;l++){var c=this.children[l];if(c.size&&c.dom.parentNode==this.contentDOM&&!c.emptyChildAt(-1)){i=se(c.dom);break}t+=c.size}if(i==-1)i=this.contentDOM.childNodes.length;break}u=o}return{node:this.contentDOM,from:r,to:t,fromOffset:e,toOffset:i}};r.prototype.emptyChildAt=function(r){if(this.border||!this.contentDOM||!this.children.length)return false;var t=this.children[r<0?0:this.children.length-1];return t.size==0||t.emptyChildAt(r)};r.prototype.domAfterPos=function(r){var t=this.domFromPos(r,0),n=t.node,e=t.offset;if(!me(n)||e==n.childNodes.length)throw new RangeError("No node after pos "+r);return n.childNodes[e]};r.prototype.ignoreMutation=function(r){return!this.contentDOM&&r.type!="selection"};Object.defineProperty(r.prototype,"contentLost",{get:function(){return this.contentDOM&&this.contentDOM!=this.dom&&!this.dom.contains(this.contentDOM)},enumerable:false,configurable:true});r.prototype.markDamage=function(r){if(r){this.damage|=r;this.markParentDamage()}};r.prototype.markParentDamage=function(){for(var r=this;;){var t=r.parent;if(!t||t.damage&1/* Damage.Child */)break;t.damage|=1/* Damage.Child */;r=t}};Object.defineProperty(r.prototype,"domAtom",{get:function(){return false},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"ignoreForCoords",{get:function(){return false},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"ignoreForSelection",{get:function(){return false},enumerable:false,configurable:true});r.prototype.isText=function(r){return false};return r}();
// A widget desc represents a widget decoration, which is a DOM node
// drawn between the document nodes.
var xi=/** @class */function(r){__extends(t,r);function t(t,n,e,i){var u=this;var a,f=n.type.toDOM;if(typeof f=="function")f=f(e,(function(){if(!a)return i;if(a.parent)return a.parent.posBeforeChild(a)}));if(!n.type.spec.raw){var o=me(f)?f:document.createElement("span");if(o!=f){o.appendChild(f);f=o}if(!o.hasAttribute("contenteditable"))o.contentEditable="false";o.classList.add("ProseMirror-widget")}u=r.call(this,t,[],f,null)||this;u.widget=n;u.widget=n;a=u;return u}t.prototype.matchesWidget=function(r){return!this.damage&&r.type.eq(this.widget.type)};t.prototype.parseRule=function(){return{ignore:true}};t.prototype.stopEvent=function(r){var t=this.widget.spec.stopEvent;return t?t(r):false};t.prototype.ignoreMutation=function(r){return r.type!="selection"||this.widget.spec.ignoreSelection};t.prototype.destroy=function(){this.widget.type.destroy(this.dom);r.prototype.destroy.call(this)};Object.defineProperty(t.prototype,"domAtom",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ignoreForSelection",{get:function(){return!!this.widget.type.spec.relaxedSide},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"side",{get:function(){return this.widget.type.side},enumerable:false,configurable:true});return t}(_i);var Mi=/** @class */function(r){__extends(t,r);function t(t,n,e,i){var u=r.call(this,t,[],n,null)||this;u.textDOM=e;u.text=i;return u}Object.defineProperty(t.prototype,"size",{get:function(){return this.text.length},enumerable:false,configurable:true});t.prototype.localPosFromDOM=function(r,t){if(r!=this.textDOM)return this.posAtStart+(t?this.size:0);return this.posAtStart+t};t.prototype.domFromPos=function(r){return{node:this.textDOM,offset:r}};t.prototype.ignoreMutation=function(r){return r.type==="characterData"&&r.target.nodeValue==r.oldValue};return t}(_i);
// A mark desc represents a mark. May have multiple children,
// depending on how the mark is split. Note that marks are drawn using
// a fixed nesting order, for simplicity and predictability, so in
// some cases they will be split more often than would appear
// necessary.
var Oi=/** @class */function(r){__extends(t,r);function t(t,n,e,i,u){var a=r.call(this,t,[],e,i)||this;a.mark=n;a.spec=u;return a}t.create=function(r,n,e,i){var u=i.nodeViews[n.type.name];var a=u&&u(n,i,e);if(!a||!a.dom)a=Cr.renderSpec(document,n.type.spec.toDOM(n,e),null,n.attrs);return new t(r,n,a.dom,a.contentDOM||a.dom,a)};t.prototype.parseRule=function(){if(this.damage&4/* Damage.Structure */||this.mark.type.spec.reparseInView)return null;return{mark:this.mark.type.name,attrs:this.mark.attrs,contentElement:this.contentDOM}};t.prototype.matchesMark=function(r){return!(this.damage&4/* Damage.Structure */)&&this.mark.eq(r)};t.prototype.markDamage=function(r){var t;this.damage|=r;(t=this.parent)===null||t===void 0?void 0:t.markDamage(2/* Damage.ChildList */)};t.prototype.slice=function(r,n,e){var i=t.create(this.parent,this.mark,true,e);var u=this.children,a=this.size;if(n<a)u=qi(u,n,a,e);if(r>0)u=qi(u,0,r,e);for(var f=0;f<u.length;f++)u[f].parent=i;i.children=u;return i};t.prototype.ignoreMutation=function(t){return this.spec.ignoreMutation?this.spec.ignoreMutation(t):r.prototype.ignoreMutation.call(this,t)};t.prototype.destroy=function(){if(this.spec.destroy)this.spec.destroy();r.prototype.destroy.call(this)};return t}(_i);
// Node view descs are the main, most common type of view desc, and
// correspond to an actual node in the document. Unlike mark descs,
// they populate their child array themselves.
var Ti=/** @class */function(r){__extends(t,r);function t(t,n,e,i,u,a,f){var o=r.call(this,t,[],u,a)||this;o.node=n;o.outerDeco=e;o.innerDeco=i;o.nodeDOM=f;return o}
// By default, a node is rendered using the `toDOM` method from the
// node type spec. But client code can use the `nodeViews` spec to
// supply a custom node view, which can influence various aspects of
// the way the node works.

// (Using subclassing for this was intentionally decided against,
// since it'd require exposing a whole slew of finicky
// implementation details to the user code that they probably will
// never need.)
t.create=function(r,n,e,i,u,a){var f=u.nodeViews[n.type.name],o;var s=f&&f(n,u,(function(){
// (This is a function that allows the custom view to find its
// own position)
if(!o)return a;if(o.parent)return o.parent.posBeforeChild(o)}),e,i);var l=s&&s.dom,v=s&&s.contentDOM;if(n.isText){if(!l)l=document.createTextNode(n.text);else if(!we(l))throw new RangeError("Text must be rendered as a DOM text node")}else if(!l){var c=Cr.renderSpec(document,n.type.spec.toDOM(n),null,n.attrs);l=c.dom,v=c.contentDOM}if(!v&&!n.isText&&l.nodeName!="BR"){// Chrome gets confused by <br contenteditable=false>
if(!l.hasAttribute("contenteditable"))l.contentEditable="false";if(n.type.spec.draggable)l.draggable=true}var h=l;l=Hi(l,e,n);if(s)return o=new Ci(r,n,e,i,l,v||null,h,s);else if(n.isText)return new Ei(r,n,e,i,l,h);else return new t(r,n,e,i,l,v||null,h)};t.prototype.parseRule=function(r){var t=this;
// Experimental kludge to allow opt-in re-parsing of nodes
if(this.node.type.spec.reparseInView)return null;
// FIXME the assumption that this can always return the current
// attrs means that if the user somehow manages to change the
// attrs in the dom, that won't be picked up. Not entirely sure
// whether this is a problem
var n={node:this.node.type.name,attrs:this.node.attrs};if(this.node.type.whitespace=="pre")n.preserveWhitespace="full";if(!this.contentDOM){n.getContent=function(){return t.node.content}}else if(!this.contentLost){n.contentElement=this.contentDOM}else{
// Chrome likes to randomly recreate parent nodes when
// backspacing things. When that happens, this tries to find the
// new parent.
for(var e=this.children.length-1;e>=0;e--){var i=this.children[e];if(this.dom.contains(i.dom.parentNode)){n.contentElement=i.dom.parentNode;break}}if(!n.contentElement){var u=r&&r.find((function(n){return me(n)&&r.indexOf(n.parentNode)<0&&t.dom.contains(n)}));if(u)n.contentElement=u;else n.getContent=function(){return p.empty}}}return n};t.prototype.matchesNode=function(r,t,n){return!this.damage&&r.eq(this.node)&&Di(t,this.outerDeco)&&n.eq(this.innerDeco)};Object.defineProperty(t.prototype,"size",{get:function(){return this.node.nodeSize},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"border",{get:function(){return this.node.isLeaf?0:1},enumerable:false,configurable:true});
// Syncs `this.children` to match `this.node.content` and the local
// decorations, possibly introducing nesting for marks. Then, in a
// separate step, syncs the DOM inside `this.contentDOM` to
// `this.children`.
t.prototype.updateChildren=function(r,t){var n=this;var e=this.node.inlineContent,i=t;var u=r.composing?this.localCompositionInfo(r,t):null;var a=u&&u.pos>-1?u:null;var f=u&&u.pos<0;var o=new Bi(this,a&&a.node,r);var s=this.node.inlineContent,l=s&&this.node.isBlock;Ki(this.node,this.innerDeco,(function(t,u,a){if(t.spec.marks)o.syncToMarks(t.spec.marks,e,r,u);else if(t.type.side>=0&&!a)o.syncToMarks(u==n.node.childCount?w.none:n.node.child(u).marks,e,r,u);
// If the next node is a desc matching this widget, reuse it,
// otherwise insert the widget as a new view desc.
o.placeWidget(t,r,i)}),(function(t,n,a,v){
// Make sure the wrapping mark descs match the node's marks.
o.syncToMarks(t.marks,e,r,v);if(l&&t.isAtom&&!t.isText)o.addHackNode("IMG",o.top);
// Try several strategies for drawing this node
var c;if(o.findNodeMatch(t,n,a,v));else if(f&&r.state.selection.from>i&&r.state.selection.to<i+t.nodeSize&&(c=o.findIndexWithChild(u.node))>-1&&o.updateNodeAt(t,n,a,c,r,i));else if(o.updateNextNode(t,n,a,r,v,i));else{
// Add it as a new view
o.addNode(t,n,a,r,i)}i+=t.nodeSize;if(s)l=t.isAtom&&!t.isText}));
// Drop all remaining descs after the current position.
o.syncToMarks([],e,r,0);if(this.node.isTextblock)o.addTextblockHacks();o.destroyRest();
// Sync the DOM if anything changed
if(o.changed||this.damage&2/* Damage.ChildList */){
// May have to protect focused DOM from being changed if a composition is active
if(a)this.protectLocalComposition(r,a);ji(this.contentDOM,this.children,r);if(De)Fi(this.dom)}};t.prototype.localCompositionInfo=function(r,t){
// Only do something if both the selection and a focused text node
// are inside of this node
var n=r.state.selection,e=n.from,i=n.to;if(!(r.state.selection instanceof un)||e<t||i>t+this.node.content.size)return null;var u=r.input.compositionNode;if(!u||!this.dom.contains(u.parentNode))return null;if(this.node.inlineContent){
// Find the text in the focused node in the node, stop if it's not
// there (may have been modified through other means, in which
// case it should overwritten)
var a=u.nodeValue;var f=Wi(this.node.content,a,e-t,i-t);return f<0?null:{node:u,pos:f,text:a}}else{return{node:u,pos:-1,text:""}}};t.prototype.protectLocalComposition=function(r,t){var n=t.node,e=t.pos,i=t.text;
// The node is already part of a local view desc, leave it there
if(this.getDesc(n))return;
// Create a composition view for the orphaned nodes
var u=n;for(;;u=u.parentNode){if(u.parentNode==this.contentDOM)break;while(u.previousSibling)u.parentNode.removeChild(u.previousSibling);while(u.nextSibling)u.parentNode.removeChild(u.nextSibling);if(u.pmViewDesc)u.pmViewDesc=undefined}var a=new Mi(this,u,n,i);r.input.compositionNodes.push(a);
// Patch up this.children to contain the composition view
this.children=qi(this.children,e,e+i.length,r,a)};
// If this desc must be updated to match the given node decoration,
// do so and return true. pos is the position before the node, or -1
// for the document.
t.prototype.update=function(r,t,n,e,i){if(this.damage&4/* Damage.Structure */||!r.sameMarkup(this.node))return false;this.updateInner(r,t,n,e,i);return true};t.prototype.updateInner=function(r,t,n,e,i){this.updateOuterDeco(t);this.node=r;this.innerDeco=n;if(this.contentDOM)this.updateChildren(e,i+1);this.damage=0/* Damage.None */};t.prototype.updateOuterDeco=function(r){if(Di(r,this.outerDeco))return;var t=!me(this.nodeDOM);var n=this.dom;this.dom=Pi(this.dom,this.nodeDOM,Ni(this.outerDeco,this.node,t),Ni(r,this.node,t));if(this.dom!=n){n.pmViewDesc=undefined;this.dom.pmViewDesc=this}this.outerDeco=r};
// Mark this node as being the selected node.
t.prototype.selectNode=function(){if(me(this.nodeDOM)){this.nodeDOM.classList.add("ProseMirror-selectednode");if(this.contentDOM||!this.node.type.spec.draggable)this.nodeDOM.draggable=true}};
// Remove selected node marking from this node.
t.prototype.deselectNode=function(){if(me(this.nodeDOM)){this.nodeDOM.classList.remove("ProseMirror-selectednode");if(this.contentDOM||!this.node.type.spec.draggable)this.nodeDOM.removeAttribute("draggable")}};Object.defineProperty(t.prototype,"domAtom",{get:function(){return this.node.isAtom},enumerable:false,configurable:true});return t}(_i);
// Create a view desc for the top-level document node, to be exported
// and used by the view class.
function Ai(r,t,n,e,i,u){if(!u)Hi(e,t,r);else Pi(e,e,Ni(u,r,false),Ni(t,r,false));var a=new Ti(undefined,r,t,n,e,e,e);if(a.contentDOM)a.updateChildren(i,0);return a}var Ei=/** @class */function(r){__extends(t,r);function t(t,n,e,i,u,a){return r.call(this,t,n,e,i,u,null,a)||this}t.prototype.parseRule=function(){var r=this.nodeDOM.parentNode;while(r&&r!=this.dom&&!r.pmIsDeco)r=r.parentNode;return{skip:r||true}};t.prototype.update=function(r,t,n,e){if(this.damage&4/* Damage.Structure */||this.damage&&!this.inParent()||!r.sameMarkup(this.node))return false;this.updateOuterDeco(t);if((this.damage&8/* Damage.Text */||r.text!=this.node.text)&&r.text!=this.nodeDOM.nodeValue){this.nodeDOM.nodeValue=r.text;if(e.trackWrites==this.nodeDOM)e.trackWrites=null}this.node=r;this.damage=0/* Damage.None */;return true};t.prototype.inParent=function(){var r=this.parent.contentDOM;for(var t=this.nodeDOM;t;t=t.parentNode)if(t==r)return true;return false};t.prototype.domFromPos=function(r){return{node:this.nodeDOM,offset:r}};t.prototype.localPosFromDOM=function(t,n,e){if(t==this.nodeDOM)return this.posAtStart+Math.min(n,this.node.text.length);return r.prototype.localPosFromDOM.call(this,t,n,e)};t.prototype.ignoreMutation=function(r){return false};t.prototype.slice=function(r,n,e){var i=this.node.cut(r,n),u=document.createTextNode(i.text);return new t(this.parent,i,this.outerDeco,this.innerDeco,u,u)};Object.defineProperty(t.prototype,"domAtom",{get:function(){return false},enumerable:false,configurable:true});t.prototype.isText=function(r){return this.node.text==r};return t}(Ti);
// A dummy desc used to tag extra BR or IMG nodes created to work
// around contentEditable terribleness.
var Si=/** @class */function(r){__extends(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}t.prototype.parseRule=function(){return{ignore:true}};t.prototype.matchesHack=function(r){return!this.damage&&this.dom.nodeName==r};Object.defineProperty(t.prototype,"domAtom",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ignoreForCoords",{get:function(){return this.dom.nodeName=="IMG"},enumerable:false,configurable:true});return t}(_i);
// A separate subclass is used for customized node views, so that the
// extra checks only have to be made for nodes that are actually
// customized.
var Ci=/** @class */function(r){__extends(t,r);function t(t,n,e,i,u,a,f,o){var s=r.call(this,t,n,e,i,u,a,f)||this;s.spec=o;return s}
// A custom `update` method gets to decide whether the update goes
// through. If it does, and there's a `contentDOM` node, our logic
// updates the children.
t.prototype.update=function(t,n,e,i,u){if(this.damage&4/* Damage.Structure */)return false;if(this.spec.update&&(this.node.type==t.type||this.spec.multiType)){var a=this.spec.update(t,n,e);if(a)this.updateInner(t,n,e,i,u);return a}else if(!this.contentDOM&&!t.isLeaf){return false}else{return r.prototype.update.call(this,t,n,e,i,u)}};t.prototype.selectNode=function(){this.spec.selectNode?this.spec.selectNode():r.prototype.selectNode.call(this)};t.prototype.deselectNode=function(){this.spec.deselectNode?this.spec.deselectNode():r.prototype.deselectNode.call(this)};t.prototype.destroy=function(){if(this.spec.destroy)this.spec.destroy();r.prototype.destroy.call(this)};t.prototype.stopEvent=function(r){return this.spec.stopEvent?this.spec.stopEvent(r):false};t.prototype.ignoreMutation=function(t){return this.spec.ignoreMutation?this.spec.ignoreMutation(t):r.prototype.ignoreMutation.call(this,t)};return t}(Ti);
// Sync the content of the given DOM node with the nodes associated
// with the given array of view descs, recursing into mark descs
// because this should sync the subtree for a whole node at a time.
function ji(r,t,n){var e=r.firstChild,i=false;for(var u=0;u<t.length;u++){var a=t[u],f=a.dom;if(f.parentNode==r){while(f!=e){e=zi(e);i=true}e=e.nextSibling}else{i=true;r.insertBefore(f,e)}if(a instanceof Oi){var o=e?e.previousSibling:r.lastChild;ji(a.contentDOM,a.children,n);e=o?o.nextSibling:r.firstChild}}while(e){e=zi(e);i=true}if(i&&n.trackWrites==r)n.trackWrites=null}var Ri=function(r){if(r)this.nodeName=r};Ri.prototype=Object.create(null);var Li=[new Ri];function Ni(r,t,n){if(r.length==0)return Li;var e=n?Li[0]:new Ri,i=[e];for(var u=0;u<r.length;u++){var a=r[u].type.attrs;if(!a)continue;if(a.nodeName)i.push(e=new Ri(a.nodeName));for(var f in a){var o=a[f];if(o==null)continue;if(n&&i.length==1)i.push(e=new Ri(t.isInline?"span":"div"));if(f=="class")e.class=(e.class?e.class+" ":"")+o;else if(f=="style")e.style=(e.style?e.style+";":"")+o;else if(f!="nodeName")e[f]=o}}return i}function Pi(r,t,n,e){
// Shortcut for trivial case
if(n==Li&&e==Li)return t;var i=t;for(var u=0;u<e.length;u++){var a=e[u],f=n[u];if(u){var o=void 0;if(f&&f.nodeName==a.nodeName&&i!=r&&(o=i.parentNode)&&o.nodeName.toLowerCase()==a.nodeName){i=o}else{o=document.createElement(a.nodeName);o.pmIsDeco=true;o.appendChild(i);f=Li[0];i=o}}Ii(i,f||Li[0],a)}return i}function Ii(r,t,n){for(var e in t)if(e!="class"&&e!="style"&&e!="nodeName"&&!(e in n))r.removeAttribute(e);for(var e in n)if(e!="class"&&e!="style"&&e!="nodeName"&&n[e]!=t[e])r.setAttribute(e,n[e]);if(t.class!=n.class){var i=t.class?t.class.split(" ").filter(Boolean):[];var u=n.class?n.class.split(" ").filter(Boolean):[];for(var a=0;a<i.length;a++)if(u.indexOf(i[a])==-1)r.classList.remove(i[a]);for(var f=0;f<u.length;f++)if(i.indexOf(u[f])==-1)r.classList.add(u[f]);if(r.classList.length==0)r.removeAttribute("class")}if(t.style!=n.style){if(t.style){var o=/\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,s=void 0;while(s=o.exec(t.style))r.style.removeProperty(s[1])}if(n.style)r.style.cssText+=n.style}}function Hi(r,t,n){return Pi(r,r,Li,Ni(t,n,!me(r)))}function Di(r,t){if(r.length!=t.length)return false;for(var n=0;n<r.length;n++)if(!r[n].type.eq(t[n].type))return false;return true}
// Remove a DOM node and return its next sibling.
function zi(r){var t=r.nextSibling;r.parentNode.removeChild(r);return t}
// Helper class for incrementally updating a tree of mark descs and
// the widget and node descs inside of them.
var Bi=/** @class */function(){function r(r,t,n){this.lock=t;this.view=n;
// Index into `this.top`'s child array, represents the current
// update position.
this.index=0;
// When entering a mark, the current top and index are pushed
// onto this.
this.stack=[];
// Tracks whether anything was changed
this.changed=false;this.top=r;this.preMatch=Ui(r.node.content,r)}
// Destroy and remove the children between the given indices in
// `this.top`.
r.prototype.destroyBetween=function(r,t){if(r==t)return;for(var n=r;n<t;n++)this.top.children[n].destroy();this.top.children.splice(r,t-r);this.changed=true};
// Destroy all remaining children in `this.top`.
r.prototype.destroyRest=function(){this.destroyBetween(this.index,this.top.children.length)};
// Sync the current stack of mark descs with the given array of
// marks, reusing existing mark descs when possible.
r.prototype.syncToMarks=function(r,t,n,e){var i=0,u=this.stack.length>>1;var a=Math.min(u,r.length);while(i<a&&(i==u-1?this.top:this.stack[i+1<<1]).matchesMark(r[i])&&r[i].type.spec.spanning!==false)i++;while(i<u){this.destroyRest();this.top.damage=0/* Damage.None */;this.index=this.stack.pop();this.top=this.stack.pop();u--}while(u<r.length){this.stack.push(this.top,this.index+1);var f=-1,o=this.top.children.length;if(e<this.preMatch.index)o=Math.min(this.index+3,o);for(var s=this.index;s<o;s++){var l=this.top.children[s];if(l.matchesMark(r[u])&&!this.isLocked(l.dom)){f=s;break}}
// When nothing matches, try to update the mark view at this position
// in place, so a custom mark view can adapt to a changed mark without
// re-creating its DOM.
if(f<0&&this.index<this.top.children.length){var v=this.top.children[this.index];if(v instanceof Oi&&!(v.damage&4/* Damage.Structure */)&&v.mark.type==r[u].type&&v.spec.update&&!this.isLocked(v.dom)&&v.spec.update(r[u])){v.mark=r[u];f=this.index;this.changed=true}}if(f>-1){if(f>this.index){this.changed=true;this.destroyBetween(this.index,f)}this.top=this.top.children[this.index]}else{var c=Oi.create(this.top,r[u],t,n);this.top.children.splice(this.index,0,c);this.top=c;this.changed=true}this.index=0;u++}};
// Try to find a node desc matching the given data. Skip over it and
// return true when successful.
r.prototype.findNodeMatch=function(r,t,n,e){var i=-1,u;if(e>=this.preMatch.index&&(u=this.preMatch.matches[e-this.preMatch.index]).parent==this.top&&u.matchesNode(r,t,n)){i=this.top.children.indexOf(u,this.index)}else{for(var a=this.index,f=Math.min(this.top.children.length,a+5);a<f;a++){var o=this.top.children[a];if(o.matchesNode(r,t,n)&&!this.preMatch.matched.has(o)){i=a;break}}}if(i<0)return false;this.destroyBetween(this.index,i);this.index++;return true};r.prototype.updateNodeAt=function(r,t,n,e,i,u){var a=this.top.children[e];if(a.damage&4/* Damage.Structure */&&a.dom==a.contentDOM)a.damage=2/* Damage.ChildList */;if(!a.update(r,t,n,i,u))return false;this.destroyBetween(this.index,e);this.index++;return true};r.prototype.findIndexWithChild=function(r){for(;;){var t=r.parentNode;if(!t)return-1;if(t==this.top.contentDOM){var n=r.pmViewDesc;if(n)for(var e=this.index;e<this.top.children.length;e++){if(this.top.children[e]==n)return e}return-1}r=t}};
// Try to update the next node, if any, to the given data. Checks
// pre-matches to avoid overwriting nodes that could still be used.
r.prototype.updateNextNode=function(r,t,n,e,i,u){for(var a=this.index;a<this.top.children.length;a++){var f=this.top.children[a];if(f instanceof Ti){var o=this.preMatch.matched.get(f);if(o!=null&&o!=i)return false;var s=f.dom,l=void 0;
// Can't update if nextDOM is or contains this.lock, except if
// it's a text node whose content already matches the new text
// and whose decorations match the new ones.
var v=this.isLocked(s)&&!(r.isText&&f.node&&f.node.isText&&f.nodeDOM.nodeValue==r.text&&!(f.damage&4/* Damage.Structure */)&&Di(t,f.outerDeco));if(!v&&f.update(r,t,n,e,u)){this.destroyBetween(this.index,a);if(f.dom!=s)this.changed=true;this.index++;return true}else if(!v&&(l=this.recreateWrapper(f,r,t,n,e,u))){this.destroyBetween(this.index,a);this.top.children[this.index]=l;if(l.contentDOM){l.damage|=2/* Damage.ChildList */;l.updateChildren(e,u+1);l.damage=0/* Damage.None */}this.changed=true;this.index++;return true}break}}return false};
// When a node with content is replaced by a different node with
// identical content, move over its children.
r.prototype.recreateWrapper=function(r,t,n,e,i,u){if(r.damage&(2/* Damage.ChildList */|1/* Damage.Child */)||t.isAtom||!r.children.length||!r.node.content.eq(t.content)||!Di(n,r.outerDeco)||!e.eq(r.innerDeco))return null;var a=Ti.create(this.top,t,n,e,i,u);if(a.contentDOM){a.children=r.children;r.children=[];for(var f=0,o=a.children;f<o.length;f++){var s=o[f];s.parent=a}}r.destroy();return a};
// Insert the node as a newly created node desc.
r.prototype.addNode=function(r,t,n,e,i){var u=Ti.create(this.top,r,t,n,e,i);if(u.contentDOM)u.updateChildren(e,i+1);this.top.children.splice(this.index++,0,u);this.changed=true};r.prototype.placeWidget=function(r,t,n){var e=this.index<this.top.children.length?this.top.children[this.index]:null;if(e&&e.matchesWidget(r)&&(r==e.widget||!e.widget.type.toDOM.parentNode)){this.index++}else{var i=new xi(this.top,r,t,n);this.top.children.splice(this.index++,0,i);this.changed=true}};
// Make sure a textblock looks and behaves correctly in
// contentEditable.
r.prototype.addTextblockHacks=function(){var r=this.top.children[this.index-1],t=this.top;while(r instanceof Oi){t=r;r=t.children[t.children.length-1]}if(!r||// Empty textblock
!(r instanceof Ei)||/\n$/.test(r.node.text)||this.view.requiresGeckoHackNode&&/\s$/.test(r.node.text)){
// Avoid bugs in Safari's cursor drawing (#1165) and Chrome's mouse selection (#1152)
if((He||Pe)&&r&&r.dom.contentEditable=="false")this.addHackNode("IMG",t);this.addHackNode("BR",this.top)}};r.prototype.addHackNode=function(r,t){if(t==this.top&&this.index<t.children.length&&t.children[this.index].matchesHack(r)){this.index++}else{var n=document.createElement(r);if(r=="IMG"){n.className="ProseMirror-separator";n.alt=""}if(r=="BR")n.className="ProseMirror-trailingBreak";var e=new Si(this.top,[],n,null);if(t!=this.top)t.children.push(e);else t.children.splice(this.index++,0,e);this.changed=true}};r.prototype.isLocked=function(r){return this.lock&&(r==this.lock||me(r)&&r.contains(this.lock.parentNode))};return r}();
// Iterate from the end of the fragment and array of descs to find
// directly matching ones, in order to avoid overeagerly reusing those
// for other nodes.
function Ui(r,t){var n=t,e=n.children.length,i=[];var u=r.childCount,a=new Map,f=[];r:while(u>0){var o=void 0;for(;;){if(e){var s=n.children[e-1];if(s instanceof Oi){i.push(e-1);n=s;e=s.children.length}else{o=s;e--;break}}else if(n==t){break r}else{e=i.pop();n=n.parent}}var l=o.node;if(!l)continue;if(l!=r.child(u-1))break;--u;a.set(o,u);f.push(o)}return{index:u,matched:a,matches:f.reverse()}}function $i(r,t){return r.type.side-t.type.side}
// This function abstracts iterating over the nodes and decorations in
// a fragment. Calls `onNode` for each node, with its local and child
// decorations. Splits text nodes when there is a decoration starting
// or ending inside of them. Calls `onWidget` for each widget.
function Ki(r,t,n,e){var i=t.locals(r),u=0;
// Simple, cheap variant for when there are no local decorations
if(i.length==0){for(var a=0;a<r.childCount;a++){var f=r.child(a);e(f,i,t.forChild(u,f),a);u+=f.nodeSize}return}var o=0,s=[],l=null;for(var v=0;;){var c=void 0,h=void 0;while(o<i.length&&i[o].to==u){var d=i[o++];if(d.widget){if(!c)c=d;else(h||(h=[c])).push(d)}}if(c){if(h){h.sort($i);for(var p=0;p<h.length;p++)n(h[p],v,!!l)}else{n(c,v,!!l)}}var f=void 0,b=void 0;if(l){b=-1;f=l;l=null}else if(v<r.childCount){b=v;f=r.child(v++)}else{break}for(var g=0;g<s.length;g++)if(s[g].to<=u)s.splice(g--,1);while(o<i.length&&i[o].from<=u&&i[o].to>u)s.push(i[o++]);var m=u+f.nodeSize;if(f.isText){var w=m;if(o<i.length&&i[o].from<w)w=i[o].from;for(var y=0;y<s.length;y++)if(s[y].to<w)w=s[y].to;if(w<m){l=f.cut(w-u);f=f.cut(0,w-u);m=w;b=-1}}else{while(o<i.length&&i[o].to<m)o++}var k=f.isInline&&!f.isLeaf?s.filter((function(r){return!r.inline})):s.slice();e(f,k,t.forChild(u,f),b);u=m}}
// List markers in Mobile Safari will mysteriously disappear
// sometimes. This works around that.
function Fi(r){if(r.nodeName=="UL"||r.nodeName=="OL"){var t=r.style.cssText;r.style.cssText=t+"; list-style: square !important";window.getComputedStyle(r).listStyle;r.style.cssText=t}}
// Find a piece of text in an inline fragment, overlapping from-to
function Wi(r,t,n,e){for(var i=0,u=0;i<r.childCount&&u<=e;){var a=r.child(i++),f=u;u+=a.nodeSize;if(!a.isText)continue;var o=a.text;while(i<r.childCount){var s=r.child(i++);u+=s.nodeSize;if(!s.isText)break;o+=s.text}if(u>=n){if(u>=e&&o.slice(e-t.length-f,e-f)==t)return e-t.length;var l=f<e?o.lastIndexOf(t,e-f-1):-1;if(l>=0&&l+t.length+f>=n)return f+l;if(n==e&&o.length>=e+t.length-f&&o.slice(e-f,e-f+t.length)==t)return e}}return-1}
// Replace range from-to in an array of view descs with replacement
// (may be null to just delete). This goes very much against the grain
// of the rest of this code, which tends to create nodes with the
// right shape in one go, rather than messing with them after
// creation, but is necessary in the composition hack.
function qi(r,t,n,e,i){var u=[];for(var a=0,f=0;a<r.length;a++){var o=r[a],s=f,l=f+=o.size;if(s>=n||l<=t){u.push(o)}else{if(s<t)u.push(o.slice(0,t-s,e));if(i){u.push(i);i=undefined}if(l>n)u.push(o.slice(n-s,o.size,e))}}return u}function Vi(r,t){var n=r.selection,e=n.$anchor,i=n.$head;var u=t>0?e.max(i):e.min(i);var a=!u.parent.inlineContent?u:u.depth?r.doc.resolve(t>0?u.after():u.before()):null;return a&&rn.findFrom(a,t)}function Gi(r,t){r.dispatch(r.state.tr.setSelection(t).scrollIntoView());return true}function Ji(r,t,n){var e=r.state.selection;if(e instanceof un){if(n.indexOf("s")>-1){var i=e.$head,u=i.textOffset?null:t<0?i.nodeBefore:i.nodeAfter;if(!u||u.isText||!u.isLeaf)return false;var a=r.state.doc.resolve(i.pos+u.nodeSize*(t<0?-1:1));return Gi(r,new un(e.$anchor,a))}else if(!e.empty){return false}else if(r.endOfTextblock(t>0?"forward":"backward")){var f=Vi(r.state,t);if(f&&f instanceof fn)return Gi(r,f);return false}else if(!ze||n.indexOf("m")<0){var i=e.$head,u=i.textOffset?null:t<0?i.nodeBefore:i.nodeAfter,o=void 0;if(!u||u.isText)return false;var s=t<0?i.pos-u.nodeSize:i.pos;if(!(u.isAtom||(o=r.docView.descAt(s))&&!o.contentDOM))return false;if(fn.isSelectable(u)){return Gi(r,new fn(t<0?r.state.doc.resolve(i.pos-u.nodeSize):i))}else{
// Chrome and Safari will introduce extra pointless cursor
// positions around inline uneditable nodes (#937), and
// Firefox will sometimes just plain refuse to move across
// them (#1592), so in this situation we move the cursor
// ourselves.
return Gi(r,new un(r.state.doc.resolve(t<0?s:s+u.nodeSize)))}}}else if(e instanceof fn&&e.node.isInline){return Gi(r,new un(t>0?e.$to:e.$from))}else{var f=Vi(r.state,t);if(f)return Gi(r,f);return false}}function Xi(r,t){var n=r.pmViewDesc;return n?n.size==0&&(t<0||r.nextSibling||r.nodeName!="BR"):me(r)&&r.contentEditable=="false"}function Yi(r,t){return t<0?Qi(r):Zi(r)}
// Make sure the cursor isn't directly after one or more ignored
// nodes, which will confuse the browser's cursor motion logic.
function Qi(r){var t=r.domSel.readRange();var n=t.focusNode,e=t.focusOffset;if(!n)return;var i,u,a=false;
// Gecko will do odd things when the selection is directly in front
// of a non-editable node, so in that case, move it into the next
// node if possible. Issue prosemirror/prosemirror#832.
if(Le&&me(n)&&e<ge(n)&&Xi(n.childNodes[e],-1))a=true;for(;;){if(e>0){if(!me(n))break;var f=n.childNodes[e-1];if(Xi(f,-1)){i=n;u=--e}else if(we(f)){n=f;e=n.nodeValue.length}else{break}}else if(ru(n)){break}else{var o=n.previousSibling;while(o&&Xi(o,-1)){i=n.parentNode;u=se(o);o=o.previousSibling}if(!o){n=n.parentNode;if(n==r.dom)break;e=0}else{n=o;e=ge(n)}}}if(a)eu(r,n,e);else if(i)eu(r,i,u)}
// Make sure the cursor isn't directly before one or more ignored
// nodes.
function Zi(r){var t=r.domSel.readRange();var n=t.focusNode,e=t.focusOffset;if(!n)return;var i=ge(n);var u,a;for(;;){if(e<i){if(!me(n))break;var f=n.childNodes[e];if(Xi(f,1)){u=n;a=++e}else{break}}else if(ru(n)){break}else{var o=n.nextSibling;while(o&&Xi(o,1)){u=o.parentNode;a=se(o)+1;o=o.nextSibling}if(!o){n=n.parentNode;if(n==r.dom)break;e=i=0}else{n=o;e=0;i=ge(n)}}}if(u)eu(r,u,a)}function ru(r){for(var t=r;t;t=t.parentNode){var n=t.pmViewDesc;if(n)return n.node?n.node.isBlock:false}return false}function tu(r,t){while(r&&t==r.childNodes.length&&!Me(r)){t=se(r)+1;r=r.parentNode}while(r&&t<r.childNodes.length){var n=r.childNodes[t];if(we(n))return n;if(me(n)&&n.contentEditable=="false")break;r=n;t=0}}function nu(r,t){while(r&&!t&&!Me(r)){t=se(r);r=r.parentNode}while(r&&t){var n=r.childNodes[t-1];if(we(n))return n;if(me(n)&&n.contentEditable=="false")break;r=n;t=r.childNodes.length}}function eu(r,t,n){if(!we(t)){var e=void 0,i=void 0;if(i=tu(t,n)){t=i;n=0}else if(e=nu(t,n)){t=e;n=e.nodeValue.length}}var u=r.domSelection(),a=r.domSel.readRange();if(!u)return;if(Oe(a)){u.collapse(t,n)}else if(u.extend){u.collapse(a.anchorNode,a.anchorOffset);u.extend(t,n)}r.domSel.ignore();var f=r.state;
// If no state update ends up happening, reset the selection.
setTimeout((function(){if(r.state==f)r.domSel.sync()}),50)}function iu(r,t){var n=r.state.doc.resolve(t);if(!(Pe||Be)&&n.parent.inlineContent){var e=r.coordsAtPos(t);if(t>n.start()){var i=r.coordsAtPos(t-1);var u=(i.top+i.bottom)/2;if(u>e.top&&u<e.bottom&&Math.abs(i.left-e.left)>1)return i.left<e.left?"ltr":"rtl"}if(t<n.end()){var a=r.coordsAtPos(t+1);var u=(a.top+a.bottom)/2;if(u>e.top&&u<e.bottom&&Math.abs(a.left-e.left)>1)return a.left>e.left?"ltr":"rtl"}}var f=r.dom;for(var o=n.depth;o>0;o--)if(n.node(o).isBlock){f=r.nodeDOM(n.before(o))||f;break}var s=getComputedStyle(f).direction;return s=="rtl"?"rtl":"ltr"}
// Check whether vertical selection motion would involve node
// selections. If so, apply it (if not, the result is left to the
// browser)
function uu(r,t,n){var e=r.state.selection;if(e instanceof un&&!e.empty||n.indexOf("s")>-1)return false;if(ze&&n.indexOf("m")>-1)return false;var i=e.$from,u=e.$to;if(!i.parent.inlineContent||r.endOfTextblock(t<0?"up":"down")){var a=Vi(r.state,t);if(a&&a instanceof fn)return Gi(r,a)}if(!i.parent.inlineContent){var f=t<0?i:u;var o=e instanceof sn?rn.near(f,t):rn.findFrom(f,t);return o?Gi(r,o):false}return false}function au(r,t){if(!(r.state.selection instanceof un))return true;var n=r.state.selection,e=n.$head,i=n.$anchor,u=n.empty;if(!e.sameParent(i))return true;if(!u)return false;if(r.endOfTextblock(t>0?"forward":"backward"))return true;var a=!e.textOffset&&(t<0?e.nodeBefore:e.nodeAfter);if(a&&!a.isText){var f=r.state.tr;if(t<0)f.delete(e.pos-a.nodeSize,e.pos);else f.delete(e.pos,e.pos+a.nodeSize);r.dispatch(f);return true}return false}function fu(r,t,n){r.domObserver.stopped((function(){return t.contentEditable=n}))}
// Issue #867 / #1090 / https://bugs.chromium.org/p/chromium/issues/detail?id=903821
// In which Safari (and at some point in the past, Chrome) does really
// wrong things when the down arrow is pressed when the cursor is
// directly at the start of a textblock and has an uneditable node
// after it
function ou(r){if(!He||r.state.selection.$head.parentOffset>0)return false;var t=r.domSel.readRange(),n=t.focusNode,e=t.focusOffset;if(n&&me(n)&&e==0&&n.firstChild&&me(n.firstChild)&&n.firstChild.contentEditable=="false"){var i=n.firstChild;fu(r,i,"true");setTimeout((function(){return fu(r,i,"false")}),20)}return false}
// A backdrop key mapping used to make sure we always suppress keys
// that have a dangerous default effect, even if the commands they are
// bound to return false, and to make sure that cursor-motion keys
// find a cursor (as opposed to a node selection) when pressed. For
// cursor-motion keys, the code in the handlers also takes care of
// block selections.
function su(r){var t="";if(r.ctrlKey)t+="c";if(r.metaKey)t+="m";if(r.altKey)t+="a";if(r.shiftKey)t+="s";return t}function lu(r,t){var n=t.keyCode,e=su(t);if(n==8||ze&&n==72&&e=="c"){// Backspace, Ctrl-h on Mac
return au(r,-1)||Yi(r,-1)}else if(n==46&&!t.shiftKey||ze&&n==68&&e=="c"){// Delete, Ctrl-d on Mac
return au(r,1)||Yi(r,1)}else if(n==13||n==27){// Enter, Esc
return true}else if(n==37||ze&&n==66&&e=="c"){// Left arrow, Ctrl-b on Mac
var i=n==37?iu(r,r.state.selection.from)=="ltr"?-1:1:-1;return Ji(r,i,e)||Yi(r,i)}else if(n==39||ze&&n==70&&e=="c"){// Right arrow, Ctrl-f on Mac
var i=n==39?iu(r,r.state.selection.from)=="ltr"?1:-1:1;return Ji(r,i,e)||Yi(r,i)}else if(n==38||ze&&n==80&&e=="c"){// Up arrow, Ctrl-p on Mac
return uu(r,-1,e)||Yi(r,-1)}else if(n==40||ze&&n==78&&e=="c"){// Down arrow, Ctrl-n on Mac
return ou(r)||uu(r,1,e)||Yi(r,1)}else if(e==(ze?"m":"c")&&(n==66||n==73||n==89||n==90)){// Mod-[biyz]
return true}return false}function vu(r,t){r.someProp("transformCopied",(function(n){t=n(t,r)}));var n=[],e=t.content,i=t.openStart,u=t.openEnd;while(i>1&&u>1&&e.childCount==1&&e.firstChild.childCount==1){i--;u--;var a=e.firstChild;n.push(a.type.name,a.attrs!=a.type.defaultAttrs?a.attrs:null);e=a.content}var f=r.someProp("clipboardSerializer")||Cr.fromSchema(r.state.schema);var o=ku(),s=o.createElement("div");s.appendChild(f.serializeFragment(e,{document:o}));var l=s.firstChild,v,c=0;while(l&&me(l)&&(v=yu[l.nodeName.toLowerCase()])){for(var h=v.length-1;h>=0;h--){var d=o.createElement(v[h]);while(s.firstChild)d.appendChild(s.firstChild);s.appendChild(d);c++}l=s.firstChild}if(l&&me(l))l.setAttribute("data-pm-slice","".concat(i," ").concat(u).concat(c?" -".concat(c):""," ").concat(JSON.stringify(n)));var p=r.someProp("clipboardTextSerializer",(function(n){return n(t,r)}))||t.content.textBetween(0,t.content.size,"\n\n");return{dom:s,text:p,slice:t}}
// Read a slice of content from the clipboard (or drop data).
function cu(r,t,n,e,i){var u=i.parent.type.spec.code;var a,f;if(!n&&!t)return null;var o=!!t&&(e||u||!n);if(o){r.someProp("transformPastedText",(function(n){t=n(t,u||e,r)}));if(u){f=new k(p.from(r.state.schema.text(t.replace(/\r\n?/g,"\n"))),0,0);r.someProp("transformPasted",(function(t){f=t(f,r,true)}));return f}var s=r.someProp("clipboardTextParser",(function(n){return n(t,i,e,r)}));if(s){f=s}else{var l=i.marks();var v=r.state.schema,c=Cr.fromSchema(v);a=document.createElement("div");t.split(/(?:\r\n?|\n)+/).forEach((function(r){var t=a.appendChild(document.createElement("p"));if(r)t.appendChild(c.serializeNode(v.text(r,l)))}))}}else{r.someProp("transformPastedHTML",(function(t){n=t(n,r)}));a=Mu(n);if($e)Ou(a)}var h=a&&a.querySelector("[data-pm-slice]");var d=h&&/^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(h.getAttribute("data-pm-slice")||"");if(d&&d[3])for(var b=+d[3];b>0;b--){var g=a.firstChild;while(g&&!me(g))g=g.nextSibling;if(!g)break;a=g}if(!f){var m=r.someProp("clipboardParser")||r.someProp("domParser")||br.fromSchema(r.state.schema);f=m.parseSlice(a,{preserveWhitespace:!!(o||d),context:i,ruleFromNode:function(r){if(r.nodeName=="BR"&&!r.nextSibling&&r.parentNode&&!hu.test(r.parentNode.nodeName))return{ignore:true};return null}})}if(d){f=Tu(wu(f,+d[1],+d[2]),d[4])}else{// HTML wasn't created by ProseMirror. Make sure top-level siblings are coherent
f=k.maxOpen(du(f.content,i),true);if(f.openStart||f.openEnd){var w=0,y=0;for(var _=f.content.firstChild;w<f.openStart&&!_.type.spec.isolating;w++,_=_.firstChild){}for(var _=f.content.lastChild;y<f.openEnd&&!_.type.spec.isolating;y++,_=_.lastChild){}f=wu(f,w,y)}}r.someProp("transformPasted",(function(t){f=t(f,r,e)}));return f}var hu=/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
// Takes a slice parsed with parseSlice, which means there hasn't been
// any content-expression checking done on the top nodes, tries to
// find a parent node in the current context that might fit the nodes,
// and if successful, rebuilds the slice so that it fits into that parent.

// This addresses the problem that Transform.replace expects a
// coherent slice, and will fail to place a set of siblings that don't
// fit anywhere in the schema.
function du(r,t){if(r.childCount<2)return r;var n=function(n){var e=t.node(n);var i=e.contentMatchAt(t.index(n));var u,a=[];r.forEach((function(r){if(!a)return;var t=i.findWrapping(r.type),n;if(!t)return a=null;if(n=a.length&&u.length&&bu(t,u,r,a[a.length-1],0)){a[a.length-1]=n}else{if(a.length)a[a.length-1]=gu(a[a.length-1],u.length);var e=pu(r,t);a.push(e);i=i.matchType(e.type);u=t}}));if(a)return{value:p.from(a)}};for(var e=t.depth;e>=0;e--){var i=n(e);if(typeof i==="object")return i.value}return r}function pu(r,t,n){if(n===void 0){n=0}for(var e=t.length-1;e>=n;e--)r=t[e].create(null,p.from(r));return r}
// Used to group adjacent nodes wrapped in similar parents by
// normalizeSiblings into the same parent node
function bu(r,t,n,e,i){if(i<r.length&&i<t.length&&r[i]==t[i]){var u=bu(r,t,n,e.lastChild,i+1);if(u)return e.copy(e.content.replaceChild(e.childCount-1,u));var a=e.contentMatchAt(e.childCount);if(a.matchType(i==r.length-1?n.type:r[i+1]))return e.copy(e.content.append(p.from(pu(n,r,i+1))))}}function gu(r,t){if(t==0)return r;var n=r.content.replaceChild(r.childCount-1,gu(r.lastChild,t-1));var e=r.contentMatchAt(r.childCount).fillBefore(p.empty,true);return r.copy(n.append(e))}function mu(r,t,n,e,i,u){var a=t<0?r.firstChild:r.lastChild,f=a.content;if(r.childCount>1)u=0;if(i<e-1)f=mu(f,t,n,e,i+1,u);if(i>=n)f=t<0?a.contentMatchAt(0).fillBefore(f,u<=i).append(f):f.append(a.contentMatchAt(a.childCount).fillBefore(p.empty,true));return r.replaceChild(t<0?0:r.childCount-1,a.copy(f))}function wu(r,t,n){if(t<r.openStart)r=new k(mu(r.content,-1,t,r.openStart,0,r.openEnd),t,r.openEnd);if(n<r.openEnd)r=new k(mu(r.content,1,n,r.openEnd,0,0),r.openStart,n);return r}
// Trick from jQuery -- some elements must be wrapped in other
// elements for innerHTML to work. I.e. if you do `div.innerHTML =
// "<td>..</td>"` the table cells are ignored.
var yu={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]};function ku(){return document.implementation.createHTMLDocument("title")}var _u=null;function xu(r){var t=window.trustedTypes;if(!t)return r;
// With the require-trusted-types-for CSP, Chrome will block
// innerHTML, even on a detached document. This wraps the string in
// a way that makes the browser allow us to use its parser again.
if(!_u){if(_u=t.defaultPolicy)try{return _u.createHTML(r)}catch(r){}_u=t.createPolicy("ProseMirrorClipboard",{createHTML:function(r){return r}})}return _u.createHTML(r)}function Mu(r){var t=/^(\s*<meta [^>]*>)*/.exec(r);if(t)r=r.slice(t[0].length);var n=ku(),e=n.body;var i=/<([a-z][^>\s]+)/i.exec(r),u;if(u=i&&yu[i[1].toLowerCase()])r=u.map((function(r){return"<"+r+">"})).join("")+r+u.map((function(r){return"</"+r+">"})).reverse().join("");e.innerHTML=xu(r);if(u)for(var a=0;a<u.length;a++)e=e.querySelector(u[a])||e;
// Inline styles defined in the pasted content, so that parse rules pick them up
for(var f=0;f<n.styleSheets.length;f++){var o=n.styleSheets[f];for(var s=0;s<o.rules.length;s++){var l=o.rules[s];if(l instanceof CSSStyleRule){var v=e.querySelectorAll(l.selectorText);for(var c=0;c<v.length;c++)v[c].style.cssText+=l.style.cssText}}}return e}
// Webkit browsers do some hard-to-predict replacement of regular
// spaces with non-breaking spaces when putting content on the
// clipboard. This tries to convert such non-breaking spaces (which
// will be wrapped in a plain span on Chrome, a span with class
// Apple-converted-space on Safari) back to regular spaces.
function Ou(r){var t=r.querySelectorAll(Pe?"span:not([class]):not([style])":"span.Apple-converted-space");for(var n=0;n<t.length;n++){var e=t[n];if(e.childNodes.length==1&&e.textContent==" "&&e.parentNode)e.parentNode.replaceChild(r.ownerDocument.createTextNode(" "),e)}}function Tu(r,t){if(!r.size)return r;var n=r.content.firstChild.type.schema,e;try{e=JSON.parse(t)}catch(t){return r}var i=r.content,u=r.openStart,a=r.openEnd;for(var f=e.length-2;f>=0;f-=2){var o=n.nodes[e[f]];if(!o||o.hasRequiredAttrs()||!o.createAndFill(null,i))break;try{i=p.from(o.create(e[f+1],i))}catch(r){break}u++;a++}return new k(i,u,a)}var Au=/** @class */function(){function r(r,t,n,e){this.anchorNode=r;this.anchorOffset=t;this.focusNode=n;this.focusOffset=e}r.from=function(t){if(t instanceof r)return t;return new r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset)};r.prototype.eq=function(r){return r.anchorNode==this.anchorNode&&r.anchorOffset==this.anchorOffset&&r.focusNode==this.focusNode&&r.focusOffset==this.focusOffset};return r}();Au.null=new Au(null,0,null,0);
// Tracks the relation between the DOM selection and the editor state
// selection. Caches the current selection range for cheap access.

// Will read the DOM selection state on selectionchange events and
// when explicitly synced. Not guaranteed to hold the _current_ DOM
// selection unless you are on a code path where you know it was
// synced. So for one-off event handlers, it's safer to use
// `domSel.readRange()` (fetches the range from the DOM), whereas in
// things like the DOM flush logic, `domSel.range` is safe and cheap
// to use.
var Eu=/** @class */function(){function r(r){this.view=r;
// The last read selection range. Updated by `read`, `sync`,
// `ignore`, and `clear`. Only means anything when `active` is true.
this.range=Au.null;
// Indicates whether the editor has focus and selection
this.active=false;
// True when we are active and the current range has been synced
// with the state selection
this.synced=false;this.suppress=false;this.currentDocument=null;this.onSelectionChange=this.onSelectionChange.bind(this)}r.prototype.ensureListener=function(){var r=this.view.dom.ownerDocument;if(r!=this.currentDocument){if(this.currentDocument)this.currentDocument.removeEventListener("selectionchange",this.onSelectionChange);this.currentDocument=r;r.addEventListener("selectionchange",this.onSelectionChange)}};r.prototype.destroy=function(){if(this.currentDocument){this.currentDocument.removeEventListener("selectionchange",this.onSelectionChange);this.currentDocument=null}this.active=false;this.range=Au.null};r.prototype.suppressChanges=function(){var r=this;this.suppress=true;setTimeout((function(){return r.suppress=false}),50)};r.prototype.onSelectionChange=function(){if(this.suppress&&this.view.hasFocus())return this.sync();if(this.read())this.view.domObserver.flush(false)};
// Reads the active range from the DOM, if any.
r.prototype.readRange=function(){var r=this.view;var t=r.dom.isConnected!==false&&r.domSelection();if(!t)return Au.null;if(He&&r.root.nodeType===11&&Ee(r.dom.ownerDocument)==r.dom)return Au.from(Su(r,t)||t);return Au.from(t)};r.prototype.read=function(){this.ensureListener();var r=Wu(this.view);if(!r){this.active=false;this.range=Au.null;return}this.active=true;if(this.range.eq(r))return false;this.range=r;this.synced=false;return true};
// Sync the DOM selection to the state selection
r.prototype.sync=function(r){var t=this;if(r===void 0){r=false}var n=this.view;if(!n.docView)return;this.ensureListener();n.domObserver.stopped((function(){$u(n,n.state.selection);var e=n.state.selection;if(Ru(n)){var i=Nu(n.docView,e.from,e.to,0),u=i.desc,a=i.start;if(n.cursorWrapper){Uu(n)}else if(u instanceof Ci&&u.spec.setSelection){u.spec.setSelection(e.anchor-a,e.head-a,n.root)}else{Lu(n,r,u,a)}t.synced=t.active=true}if(e.visible==n.dom.classList.contains("ProseMirror-hideselection")){if(e.visible){n.dom.classList.remove("ProseMirror-hideselection")}else{n.dom.classList.add("ProseMirror-hideselection");Bu(n)}}t.range=t.readRange()}))};r.prototype.ignore=function(r){if(r===void 0){r=this.readRange()}this.range=Au.from(r);this.synced=true};
// Called when the editor is blurred
r.prototype.deactivate=function(){this.range=Au.null;this.active=this.synced=false};return r}();
// Used to work around the fact that is is rather hard to get the
// selection in a shadow root in Safari.
function Su(r,t){if(t.getComposedRanges){var n=t.getComposedRanges(r.root)[0];if(n)return Cu(r,n)}var e;function i(r){r.preventDefault();r.stopImmediatePropagation();e=r.getTargetRanges()[0]}
// Because Safari (at least in 2018-2022) doesn't provide regular
// access to the selection inside a shadowRoot, we have to perform a
// ridiculous hack to get at it—using `execCommand` to trigger a
// `beforeInput` event so that we can read the target range from the
// event.
r.dom.addEventListener("beforeinput",i,true);document.execCommand("indent");r.dom.removeEventListener("beforeinput",i,true);return e?Cu(r,e):null}function Cu(r,t){var n;var e=t.startContainer,i=t.startOffset;var u=t.endContainer,a=t.endOffset;var f=r.domAtPos(r.state.selection.anchor);
// Since such a range doesn't distinguish between anchor and head,
// use a heuristic that flips it around if its end matches the
// current anchor.
if(de(f.node,f.offset,u,a))n=[u,a,e,i],e=n[0],i=n[1],u=n[2],a=n[3];return new Au(e,i,u,a)}function ju(r,t,n){var e;if(n===void 0){n=null}var i=r.state.doc;if(!t.focusNode)return null;var u=r.docView.nearestDesc(t.focusNode),a=u&&u.size==0;var f=r.docView.posFromDOM(t.focusNode,t.focusOffset,1);if(f<0)return null;var o=i.resolve(f),s,l;if(Oe(t)){s=f;while(u&&!u.node)u=u.parent;if(u&&u.node.isAtom&&fn.isSelectable(u.node)&&u.parent&&!(u.node.isInline&&xe(t.focusNode,t.focusOffset,u.dom))){var v=u.posBefore;l=new fn(f==v?o:i.resolve(v))}else if(Le&&n=="key"&&f>r.state.selection.to&&me(t.focusNode)&&t.focusOffset==t.focusNode.childNodes.length&&u&&u.posAtStart>r.state.selection.to){
// Firefox will jump across scrollable wrapper nodes on keyboard
// cursor motion (#1594). This tries to detect this situation
// and work around it.
for(var c=t.focusNode;;c=c.parentNode){if(getComputedStyle(c).overflow!="visible"){l=rn.findFrom(i.resolve(u.posAtStart),1);break}if(c==u.dom||c.nextSibling||!c.parentNode||!me(c.parentNode))break}}}else{if(t instanceof r.dom.ownerDocument.defaultView.Selection&&t.rangeCount>1){var h=f,d=f;for(var p=0;p<t.rangeCount;p++){var b=t.getRangeAt(p);h=Math.min(h,r.docView.posFromDOM(b.startContainer,b.startOffset,1));d=Math.max(d,r.docView.posFromDOM(b.endContainer,b.endOffset,-1))}if(h<0)return null;e=d==r.state.selection.anchor?[d,h]:[h,d],s=e[0],f=e[1];o=i.resolve(f)}else{s=r.docView.posFromDOM(t.anchorNode,t.anchorOffset,1)}if(s<0)return null}var g=i.resolve(s);if(!l){var m=n=="pointer"||r.state.selection.head<o.pos&&!a?1:-1;l=Fu(r,g,o,m)}return l}function Ru(r){return r.editable?r.hasFocus():qu(r,r.domSel.readRange())&&(!document.activeElement||document.activeElement.contains(r.dom))}function Lu(r,t,n,e){var i=r.state.selection;var u=i.anchor,a=i.head,f,o;if(Iu&&!(i instanceof un)){if(!i.$from.parent.inlineContent)f=Hu(r,i.from);if(!i.empty&&!i.$from.parent.inlineContent)o=Hu(r,i.to)}var s=n.domFromPos(u-e,u>e?-1:1);var l=a==u?s:n.domFromPos(a-e,a>e?-1:1);Pu(u,a,s,l,r,t);if(Iu){if(f)zu(f);if(o)zu(o)}}
// See if the selection falls within a custom node view that overrides it
function Nu(r,t,n,e){if(e===void 0){e=0}for(var i=0,u=e;i<r.children.length;i++){var a=r.children[i],f=u+a.size;if(t>u&&n<f)return Nu(a,t,n,u+a.border);u=f}return{desc:r,start:e}}function Pu(r,t,n,e,i,u){var a=false;
// On Firefox, using Selection.collapse to put the cursor after a
// BR node for some reason doesn't always work (#1073). On Safari,
// the cursor sometimes inexplicable visually lags behind its
// reported position in such situations (#1092).
if((Le||He)&&r==t){var f=n.node,o=n.offset;if(we(f)){a=!!(o&&f.nodeValue[o-1]=="\n");
// Issue #1128
if(a&&o==f.nodeValue.length){for(var s=f,l=void 0;s;s=s.parentNode){if(l=s.nextSibling){if(l.nodeName=="BR")n=e={node:l.parentNode,offset:se(l)+1};break}var v=s.pmViewDesc;if(v&&v.node&&v.node.isBlock)break}}}else{var c=f.childNodes[o-1];a=c&&(c.nodeName=="BR"||c.contentEditable=="false")}}var h=i.domSel.readRange();
// Firefox can act strangely when the selection is in front of an
// uneditable node. See #1163 and https://bugzilla.mozilla.org/show_bug.cgi?id=1709536
if(Le&&h.focusNode&&h.focusNode!=e.node&&me(h.focusNode)){var l=h.focusNode.childNodes[h.focusOffset];if(l&&l.contentEditable=="false")u=true}if(!(u||a&&He)&&de(n.node,n.offset,h.anchorNode,h.anchorOffset)&&de(e.node,e.offset,h.focusNode,h.focusOffset))return;Te(i.domSelection(),{focusNode:e.node,focusOffset:e.offset,anchorNode:n.node,anchorOffset:n.offset})}
// Kludge to work around Webkit not allowing a selection to start/end
// between non-editable block nodes. We briefly make something
// editable, set the selection, then set it uneditable again.
var Iu=He||Pe&&Ie<63;function Hu(r,t){var n=r.docView.domFromPos(t,0),e=n.node,i=n.offset;var u=i<e.childNodes.length?e.childNodes[i]:null;var a=i?e.childNodes[i-1]:null;if(He&&u&&u.contentEditable=="false")return Du(u);if((!u||u.contentEditable=="false")&&(!a||a.contentEditable=="false")){if(u)return Du(u);else if(a)return Du(a)}}function Du(r){r.contentEditable="true";if(He&&r.draggable){r.draggable=false;r.wasDraggable=true}return r}function zu(r){r.contentEditable="false";if(r.wasDraggable){r.draggable=true;r.wasDraggable=null}}function Bu(r){var t=r.dom.ownerDocument;t.removeEventListener("selectionchange",r.input.hideSelectionGuard);var n=r.domSel.readRange();var e=n.anchorNode,i=n.anchorOffset;t.addEventListener("selectionchange",r.input.hideSelectionGuard=function(){if(n.anchorNode!=e||n.anchorOffset!=i){t.removeEventListener("selectionchange",r.input.hideSelectionGuard);setTimeout((function(){if(!Ru(r)||r.state.selection.visible)r.dom.classList.remove("ProseMirror-hideselection")}),20)}})}function Uu(r){var t=r.domSelection();if(!t)return;var n=r.cursorWrapper.dom,e=n.nodeName=="IMG";if(e)t.collapse(n.parentNode,se(n)+1);else t.collapse(n,0)}function $u(r,t){if(t instanceof fn){var n=r.docView.descAt(t.from);if(n!=r.lastSelectedViewDesc){Ku(r);if(n)n.selectNode();r.lastSelectedViewDesc=n}}else{Ku(r)}}
// Clear all DOM statefulness of the last node selection.
function Ku(r){if(r.lastSelectedViewDesc){if(r.lastSelectedViewDesc.parent)r.lastSelectedViewDesc.deselectNode();r.lastSelectedViewDesc=undefined}}function Fu(r,t,n,e){var i=r.someProp("createSelectionBetween",(function(e){return e(r,t,n)}))||un.between(t,n,e);r.someProp("adjustSelectionFromDOM",(function(t){i=t(r,i)}));return i}function Wu(r){if(r.editable&&!r.hasFocus())return null;var t=r.domSel.readRange();return t&&qu(r,t)?t:null}function qu(r,t){if(!t.anchorNode)return false;try{
// Firefox will raise 'permission denied' errors when accessing
// properties of `sel.anchorNode` when it's in a generated CSS
// element.
return ye(r.dom,t.anchorNode)&&(r.editable||ye(r.dom,t.focusNode))}catch(r){return false}}
// A collection of DOM events that occur within the editor, and callback functions
// to invoke when the event fires.
var Vu={};var Gu={};var Ju={touchstart:true,touchmove:true};var Xu=/** @class */function(){function r(){this.shiftKey=false;this.mouseDown=null;this.lastKeyCode=null;this.lastKeyCodeTime=0;this.lastKeyDispatched=false;this.lastClick={time:0,x:0,y:0,type:"",button:0};this.lastSelectionOrigin=null;this.lastSelectionTime=0;this.lastIOSEnter=0;this.lastIOSEnterFallbackTimeout=-1;this.lastFocus=0;this.lastTouch=0;this.lastChromeDelete=0;this.composing=false;this.compositionNode=null;this.composingTimeout=-1;this.compositionNodes=[];this.compositionEndedAt=-2e8;this.compositionID=1;this.badSafariComposition=false;
// Set to a composition ID when there are pending changes at compositionend
this.compositionPendingChanges=0;this.domChangeCount=0;this.eventHandlers=Object.create(null);this.hideSelectionGuard=null}return r}();function Yu(r){var t=function(t){var n=Vu[t];r.dom.addEventListener(t,r.input.eventHandlers[t]=function(t){if(!na(r,t))return;if(r.input.composing&&(t.type=="keydown"||t.type=="beforeinput")&&t.isComposing===false)Oa(r,true);if(!ta(r,t)&&(r.editable||!(t.type in Gu)))n(r,t)},Ju[t]?{passive:true}:undefined)};for(var n in Vu){t(n)}
// On Safari, for reasons beyond my understanding, adding an input
// event handler makes an issue where the composition vanishes when
// you press enter go away.
if(He)r.dom.addEventListener("input",(function(){return null}));ra(r)}function Qu(r,t){r.input.lastSelectionOrigin=t;r.input.lastSelectionTime=Date.now()}function Zu(r){if(r.input.mouseDown)r.input.mouseDown.done();r.domObserver.stop();for(var t in r.input.eventHandlers)r.dom.removeEventListener(t,r.input.eventHandlers[t]);clearTimeout(r.input.composingTimeout);clearTimeout(r.input.lastIOSEnterFallbackTimeout)}function ra(r){r.someProp("handleDOMEvents",(function(t){for(var n in t)if(!r.input.eventHandlers[n])r.dom.addEventListener(n,r.input.eventHandlers[n]=function(t){return ta(r,t)})}))}function ta(r,t){return r.someProp("handleDOMEvents",(function(n){var e=n[t.type];return e?e(r,t)||t.defaultPrevented:false}))}function na(r,t){if(!t.bubbles)return true;if(t.defaultPrevented)return false;for(var n=t.target;n!=r.dom;n=n.parentNode)if(!n||n.nodeType==11||n.pmViewDesc&&n.pmViewDesc.stopEvent(t))return false;return true}function ea(r,t){if(!ta(r,t)&&Vu[t.type]&&(r.editable||!(t.type in Gu)))Vu[t.type](r,t)}function ia(r,t){var n=r.input;if(n.lastKeyDispatched||r.composing)return false;n.lastKeyDispatched=true;if(typeof t=="string")t=Ae(t=="Backspace"?8:13,t);return r.someProp("handleKeyDown",(function(n){return n(r,t)}))}Gu.keydown=function(r,t){var n=t;r.input.shiftKey=n.keyCode==16||n.shiftKey;r.input.lastKeyCode=n.keyCode;r.input.lastKeyCodeTime=Date.now();r.input.lastKeyDispatched=false;
// Suppress enter key events on Chrome Android, because those tend
// to be part of a confused sequence of composition events fired,
// and handling them eagerly tends to corrupt the input.
if(Ue&&Pe&&n.keyCode==13)return;
// On iOS, if we preventDefault enter key presses, the virtual
// keyboard gets confused. So the hack here is to set a flag that
// makes the DOM change code recognize that what just happens should
// be replaced by whatever the Enter key handlers do.
if(De&&n.keyCode==13&&!n.ctrlKey&&!n.altKey&&!n.metaKey){var e=Date.now();r.input.lastIOSEnter=e;r.input.lastIOSEnterFallbackTimeout=setTimeout((function(){if(r.input.lastIOSEnter==e){ia(r,"Enter");r.input.lastIOSEnter=0}}),200);return}if(n.keyCode!=229)r.domObserver.forceFlush(true);if(ia(r,n)||lu(r,n))n.preventDefault();else Qu(r,"key")};Gu.keyup=function(r,t){if(t.keyCode==16)r.input.shiftKey=false};Gu.keypress=function(r,t){var n=t;if(_a(r)||!n.charCode||n.ctrlKey&&!n.altKey||ze&&n.metaKey)return;if(r.someProp("handleKeyPress",(function(t){return t(r,n)}))){n.preventDefault();return}var e=r.state.selection;if(!(e instanceof un)||!e.$from.sameParent(e.$to)){var i=String.fromCharCode(n.charCode);var u=function(){return r.state.tr.insertText(i).scrollIntoView()};if(!/[\r\n]/.test(i)&&!r.someProp("handleTextInput",(function(t){return t(r,e.$from.pos,e.$to.pos,i,u)})))r.dispatch(u());n.preventDefault()}};function ua(r){return{left:r.clientX,top:r.clientY}}function aa(r,t){var n=t.x-r.clientX,e=t.y-r.clientY;return n*n+e*e<100}function fa(r,t,n,e,i){if(e==-1)return false;var u=r.state.doc.resolve(e);var a=function(e){if(r.someProp(t,(function(t){return e>u.depth?t(r,n,u.nodeAfter,u.before(e),i,true):t(r,n,u.node(e),u.before(e),i,false)})))return{value:true}};for(var f=u.depth+1;f>0;f--){var o=a(f);if(typeof o==="object")return o.value}return false}function oa(r,t,n){if(!r.focused)r.focus();if(r.state.selection.eq(t))return;var e=r.state.tr.setSelection(t);e.setMeta("pointer",true);r.dispatch(e)}function sa(r,t){if(t==-1)return false;var n=r.state.doc.resolve(t),e=n.nodeAfter;if(e&&e.isAtom&&fn.isSelectable(e)){oa(r,new fn(n));return true}return false}function la(r,t){if(t==-1)return false;var n=r.state.selection,e,i;if(n instanceof fn)e=n.node;var u=r.state.doc.resolve(t);for(var a=u.depth+1;a>0;a--){var f=a>u.depth?u.nodeAfter:u.node(a);if(fn.isSelectable(f)){if(e&&n.$from.depth>0&&a>=n.$from.depth&&u.before(n.$from.depth+1)==n.$from.pos)i=u.before(n.$from.depth);else i=u.before(a);break}}if(i!=null){oa(r,fn.create(r.state.doc,i));return true}else{return false}}function va(r,t,n,e,i){return fa(r,"handleClickOn",t,n,e)||r.someProp("handleClick",(function(n){return n(r,t,e)}))||(i?la(r,n):sa(r,n))}function ca(r,t,n,e){return fa(r,"handleDoubleClickOn",t,n,e)||r.someProp("handleDoubleClick",(function(n){return n(r,t,e)}))}function ha(r,t,n,e){return fa(r,"handleTripleClickOn",t,n,e)||r.someProp("handleTripleClick",(function(n){return n(r,t,e)}))}function da(r,t,n){if(t==-1)return r.inlineContent?un.create(r,0,r.content.size):null;var e=r.resolve(t);for(var i=e.depth+1;i>0;i--){var u=i>e.depth?e.nodeAfter:e.node(i);var a=e.before(i);if(u.inlineContent)return un.create(r,a+1,a+1+u.content.size);else if(n&&fn.isSelectable(u))return fn.create(r,a)}return null}var pa=/[\w_\u00a1-\uffff]+/g;try{pa=new RegExp("[\\p{L}\\p{N}_]+","gu")}catch(r){}function ba(r,t){var n=r.resolve(t),e=n.node();var i="",u=t,a=t;for(var f=n.indexAfter(),o=false;f>0;f--){var s=e.child(f-1);if(!s.text)break;var l=u==t?t-n.posAtIndex(f-1):s.text.length,v=l;for(;v>0;v--){if(/\S/.test(s.text[v-1]))o=true;else if(o)break}i=s.text.slice(v,l)+i;u-=l-v;if(v||u<t-50)break}for(var c=n.index(),o=false;c<e.childCount;c++){var h=e.child(c);if(!h.text)break;var v=a==t?t-n.posAtIndex(c):0,l=v;for(;l<h.text.length;l++){if(/\S/.test(h.text[l]))o=true;else if(o)break}i+=h.text.slice(v,l);a+=l-v;if(l<h.text.length||a>t+50)break}var d=u,p=a;if(Intl.Segmenter){for(var b=0,g=new Intl.Segmenter(undefined,{granularity:"word"}).segment(i);b<g.length;b++){var m=g[b];if(m.isWordLike){var v=m.index+u,l=v+m.segment.length;if(l<t)d=l;else if(v>t){p=v;break}else return un.create(r,v,l)}}}else{pa.lastIndex=0;for(var w=void 0;w=pa.exec(i);){var v=w.index+u,l=v+w[0].length;if(l<t)d=l;else if(v>t){p=v;break}else return un.create(r,v,l)}}var y=i.slice(d-u,t-u),k=i.slice(t-u,p-u);var _=/\S*$/.exec(y)[0].length,x=/^\S*/.exec(k)[0].length;if(_||x)return un.create(r,t-_,t+x);var M=/\s*$/.exec(y)[0].length,O=/^\s*/.exec(k)[0].length;return un.create(r,t-M,t+O)}var ga=ze?"metaKey":"ctrlKey";Vu.mousedown=function(r,t){var n=t,e=Date.now();r.input.shiftKey=n.shiftKey;if(r.input.lastTouch>e-500)return false;// Ignore touch interaction
Sa(r);var i="singleClick";if(e-r.input.lastClick.time<500&&aa(n,r.input.lastClick)&&!n[ga]&&r.input.lastClick.button==n.button){if(r.input.lastClick.type=="singleClick")i="doubleClick";else if(r.input.lastClick.type=="doubleClick")i="tripleClick"}r.input.lastClick={time:e,x:n.clientX,y:n.clientY,type:i,button:n.button};if(r.input.mouseDown)r.input.mouseDown.done();var u=r.posAtCoords(ua(n));if(!u)return;if(n.button==0){if(!r.hasFocus()){Ze(r.dom);var a=r.root.activeElement;if(a&&!a.contains(r.dom))a.blur()}var f=r.input.mouseDown=new ma(r,u,n,i);if(!f.mightDrag)n.preventDefault()}else{Qu(r,"pointer")}};var ma=/** @class */function(){function r(r,t,n,e){var i;this.view=r;this.startPos=t;this.event=n;this.type=e;this.didMove=false;this.lastPos=-1;
// Anchor for the selection. With shift held, this will be the
// original start selection. Otherwise, it'll be the selection
// created for the initial position.
this.anchorRange=null;this.startDoc=r.state.doc;this.selectNode=!!n[ga];this.extend=n.shiftKey;this.anchorDoc=this.startDoc;var u=wa(r);if(this.extend){var a=r.state.selection;this.anchorRange=a instanceof fn?{from:a.from,to:a.to}:{from:a.anchor,to:a.anchor};var f=a instanceof fn?r.nodeDOM(a.from).getBoundingClientRect():r.coordsAtPos(a.anchor);this.anchorOffset={x:(f.left+f.right)/2-u.x,y:(f.top+f.bottom)/2-u.y}}else{this.anchorOffset={x:n.clientX-u.x,y:n.clientY-u.y}}if(e=="singleClick"){var o=r.state.selection;var s=void 0,l=void 0,v=false;if(o instanceof fn&&o.from<=t.pos&&o.to>=t.pos){l=o.from;s=o.node;v=true}else if(t.inside>-1){s=r.state.doc.nodeAt(t.inside);l=t.inside}else{var c=r.state.doc.resolve(t.pos);s=c.parent;l=c.depth?c.before():-1}if(v||l>-1&&s.type.spec.draggable&&s.type.spec.selectable!==false){var h=(i=r.docView.descAt(l))===null||i===void 0?void 0:i.nodeDOM;this.mightDrag={node:s,elt:h,pos:l,addAttr:false};if(h&&!h.draggable){this.mightDrag.addAttr=true;r.domObserver.stopped((function(){return h.draggable=true}))}}else{this.mightDrag=ka(r,n)}}else{this.mightDrag=false}r.root.addEventListener("mouseup",this.up=this.up.bind(this));r.root.addEventListener("mousemove",this.move=this.move.bind(this));if(!this.mightDrag)this.select(this.startPos,true)}r.prototype.done=function(){var r=this;this.view.root.removeEventListener("mouseup",this.up);this.view.root.removeEventListener("mousemove",this.move);if(this.view.input.mouseDown==this)this.view.input.mouseDown=null;if(typeof this.mightDrag=="object"&&this.mightDrag.addAttr){this.view.domObserver.stopped((function(){return r.mightDrag.elt.removeAttribute("draggable")}))}};r.prototype.maybeRunHandler=function(r,t){var n=this.type=="singleClick"?va:this.type=="doubleClick"?ca:ha;return n(this.view,r.pos,r.inside,t,this.selectNode)};r.prototype.up=function(r){this.done();if(!this.view.dom.contains(r.target))return;var t=this.startPos;if(this.view.state.doc!=this.startDoc)t=this.view.posAtCoords(ua(r));if(!t)return;if(!this.didMove){this.maybeRunHandler(t,r)||this.select(t,true)}r.preventDefault()};r.prototype.move=function(r){if(r.buttons==0){this.done();return}if(!this.didMove&&(Math.abs(this.event.x-r.clientX)>8||Math.abs(this.event.y-r.clientY)>8)){this.didMove=true;this.mightDrag=false}if(!this.mightDrag){var t=this.view.posAtCoords(ua(r));if(t)this.select(t,false)}r.preventDefault()};r.prototype.select=function(r,t){if(r.pos==this.lastPos)return;this.lastPos=r.pos;var n=this.view,e=n.state.doc;var i=this.type=="singleClick"?ya(n,e,r):this.type=="doubleClick"?ba(e,r.pos):da(e,r.inside,t);if(!i)return;if(t&&!this.extend){this.anchorRange=i}else if(!t||this.extend){if(!e.eq(this.anchorDoc))this.restoreAnchor();if(this.anchorRange&&this.anchorRange.from<i.from)i=Fu(n,e.resolve(this.anchorRange.from),e.resolve(i.to));else if(this.anchorRange&&this.anchorRange.to>i.to)i=Fu(n,e.resolve(this.anchorRange.to),e.resolve(i.from))}if(!i.eq(n.state.selection))n.dispatch(n.state.tr.setSelection(i).setMeta("pointer",true).scrollIntoView())};r.prototype.restoreAnchor=function(){var r=wa(this.view);var t=this.view.posAtCoords({left:this.anchorOffset.x+r.x,top:this.anchorOffset.y+r.y});if(!t){this.anchorRange=null}else{var n=this.view.state.doc;this.anchorRange=this.type=="singleClick"?ya(this.view,n,t):this.type=="doubleClick"?ba(n,t.pos):da(n,t.inside,false);this.anchorDoc=this.view.state.doc}};return r}();function wa(r){var t=r.dom.getBoundingClientRect();return{x:t.left-r.dom.scrollLeft,y:t.top-r.dom.scrollTop}}function ya(r,t,n){if(n.inside>-1){var e=t.nodeAt(n.inside);if(e.isAtom&&fn.isSelectable(e))return fn.create(t,n.inside)}var i=t.resolve(n.pos);return Fu(r,i,i)}function ka(r,t){var n=r.state.selection;if(n.empty)return false;var e=r.domSelection();if(!e||e.rangeCount==0)return true;var i=e.getRangeAt(0).getClientRects();for(var u=0;u<i.length;u++){var a=i[u];if(a.left<=t.clientX&&a.right>=t.clientX&&a.top<=t.clientY&&a.bottom>=t.clientY)return true}return false}Vu.touchstart=function(r){r.input.lastTouch=Date.now();Sa(r);Qu(r,"pointer")};Vu.touchmove=function(r){r.input.lastTouch=Date.now();Qu(r,"pointer")};Vu.contextmenu=function(r){return Sa(r)};function _a(r,t){if(r.composing)return true;
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
if(He&&Math.abs(Date.now()-r.input.compositionEndedAt)<500){r.input.compositionEndedAt=-2e8;return true}return false}
// Drop active composition after 5 seconds of inactivity on Android
var xa=Ue?5e3:-1;Gu.compositionstart=Gu.compositionupdate=function(r){if(!r.composing){r.domObserver.flush();var t=r.state,n=t.selection.$to;if(t.selection instanceof un&&t.selection.empty&&(t.storedMarks||!n.textOffset&&n.parentOffset&&n.nodeBefore.marks.some((function(r){return r.type.spec.inclusive===false}))||Pe&&Be&&Ma(r))){// Issue #1500
// Need to wrap the cursor in mark nodes different from the ones in the DOM context
r.markCursor=r.state.storedMarks||n.marks();Sa(r,true);r.markCursor=null}else{Sa(r,!t.selection.empty);
// In firefox, if the cursor is after but outside a marked node,
// the inserted text won't inherit the marks. So this moves it
// inside if necessary.
if(Le&&r.domSel.active&&t.selection.empty&&n.parentOffset&&!n.textOffset&&n.nodeBefore.marks.length){for(var e=r.domSel.range,i=e.focusNode,u=e.focusOffset;i&&me(i)&&u!=0;){var a=u<0?i.lastChild:i.childNodes[u-1];if(!a)break;if(we(a)){var f=r.domSelection();if(f)f.collapse(a,a.nodeValue.length);break}else{i=a;u=-1}}}}r.input.composing=true}Ta(r,xa)};function Ma(r){var t=r.domSel.range,n=t.focusNode,e=t.focusOffset;if(!n||!me(n)||e>=n.childNodes.length)return false;var i=n.childNodes[e];return me(i)&&i.contentEditable=="false"}Gu.compositionend=function(r,t){if(r.composing)Oa(r)};function Oa(r,t){if(t===void 0){t=false}r.input.composing=false;r.input.compositionEndedAt=Date.now();r.input.compositionPendingChanges=r.domObserver.pendingRecords().length?r.input.compositionID:0;r.input.compositionNode=null;if(r.input.badSafariComposition)r.domObserver.forceFlush();else if(r.input.compositionPendingChanges)Promise.resolve().then((function(){return r.domObserver.flush()}));r.input.compositionID++;if(t)Sa(r);else Ta(r,20)}function Ta(r,t){clearTimeout(r.input.composingTimeout);if(t>-1)r.input.composingTimeout=setTimeout((function(){return Sa(r)}),t)}function Aa(r){if(r.composing){r.input.composing=false;r.input.compositionEndedAt=Date.now()}for(var t=void 0;t=r.input.compositionNodes.pop();)t.markParentDamage()}function Ea(r){var t=r.domSel.range;if(!r.domSel.active||!t.focusNode)return null;var n=ke(t.focusNode,t.focusOffset);var e=_e(t.focusNode,t.focusOffset);if(n&&e&&n!=e){var i=e.pmViewDesc,u=r.domObserver.lastChangedTextNode;if(n==u||e==u)return u;if(!i||!i.isText(e.nodeValue)){return e}else if(r.input.compositionNode==e){var a=n.pmViewDesc;if(!(!a||!a.isText(n.nodeValue)))return e}}return n||e}
/**
            @internal
            */function Sa(r,t){if(t===void 0){t=false}if(Ue&&r.domObserver.flushingSoon>=0)return;r.domObserver.forceFlush();Aa(r);if(t||r.docView&&r.docView.damage){var n=ju(r,r.domSel.readRange()),e=r.state.selection;if(n&&!n.eq(e))r.dispatch(r.state.tr.setSelection(n));else if((r.markCursor||t)&&!e.$from.node(e.$from.sharedDepth(e.to)).inlineContent)r.dispatch(r.state.tr.deleteSelection());else r.updateState(r.state)}}function Ca(r,t){
// The extra wrapper is somehow necessary on IE/Edge to prevent the
// content from being mangled when it is put onto the clipboard
if(!r.dom.parentNode)return;var n=r.dom.parentNode.appendChild(document.createElement("div"));n.appendChild(t);n.style.cssText="position: fixed; left: -10000px; top: 10px";var e=getSelection(),i=document.createRange();i.selectNodeContents(t);
// Done because IE will fire a selectionchange moving the selection
// to its start when removeAllRanges is called and the editor still
// has focus (which will mess up the editor's selection state).
r.dom.blur();e.removeAllRanges();e.addRange(i);setTimeout((function(){if(n.parentNode)n.parentNode.removeChild(n);r.focus()}),50)}
// This is very crude, but unfortunately old iOS Safari versions
// _pretend_ that they have a clipboard API—all the objects and
// methods are there, they just don't work, and they are hard to test.
var ja=De&&Ke<604;Vu.copy=Gu.cut=function(r,t){var n=t;var e=r.state.selection,i=n.type=="cut";if(e.empty)return;
// IE and Edge's clipboard interface is completely broken
var u=ja?null:n.clipboardData;var a=e.content(),f=vu(r,a),o=f.dom,s=f.text;if(u){n.preventDefault();u.clearData();u.setData("text/html",o.innerHTML);u.setData("text/plain",s)}else{Ca(r,o)}if(i)r.dispatch(r.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent","cut"))};function Ra(r){return r.openStart==0&&r.openEnd==0&&r.content.childCount==1?r.content.firstChild:null}function La(r,t){if(!r.dom.parentNode)return;var n=r.input.shiftKey||r.state.selection.$from.parent.type.spec.code;var e=r.dom.parentNode.appendChild(document.createElement(n?"textarea":"div"));if(!n)e.contentEditable="true";e.style.cssText="position: fixed; left: -10000px; top: 10px";e.focus();var i=r.input.shiftKey&&r.input.lastKeyCode!=45;setTimeout((function(){r.focus();if(e.parentNode)e.parentNode.removeChild(e);if(n)Na(r,e.value,null,i,t);else Na(r,e.textContent,e.innerHTML,i,t)}),50)}function Na(r,t,n,e,i){var u=cu(r,t,n,e,r.state.selection.$from);if(r.someProp("handlePaste",(function(t){return t(r,i,u||k.empty)})))return true;if(!u)return false;var a=Ra(u);var f=a?r.state.tr.replaceSelectionWith(a,e):r.state.tr.replaceSelection(u);r.dispatch(f.scrollIntoView().setMeta("paste",true).setMeta("uiEvent","paste"));return true}function Pa(r){var t=r.getData("text/plain")||r.getData("Text");if(t)return t;var n=r.getData("text/uri-list");return n?n.replace(/\r?\n/g," "):""}Gu.paste=function(r,t){var n=t;
// Handling paste from JavaScript during composition is very poorly
// handled by browsers, so as a dodgy but preferable kludge, we just
// let the browser do its native thing there, except on Android,
// where the editor is almost always composing.
if(r.composing&&!Ue)return;var e=ja?null:n.clipboardData;var i=r.input.shiftKey&&r.input.lastKeyCode!=45;if(e&&Na(r,Pa(e),e.getData("text/html"),i,n))n.preventDefault();else La(r,n)};var Ia=/** @class */function(){function r(r,t,n){this.slice=r;this.move=t;this.node=n}return r}();var Ha=ze?"altKey":"ctrlKey";function Da(r,t){var n;r.someProp("dragCopies",(function(r){n=n||r(t)}));return n!=null?!n:!t[Ha]}Vu.dragstart=function(r,t){var n=t;var e=r.input.mouseDown;if(e)e.done();if(!n.dataTransfer)return;var i=r.state.selection;var u=i.empty?null:r.posAtCoords(ua(n));var a;if(u&&u.pos>=i.from&&u.pos<=(i instanceof fn?i.to-1:i.to));else if(e&&typeof e.mightDrag=="object"){a=fn.create(r.state.doc,e.mightDrag.pos)}else if(n.target&&me(n.target)){var f=r.docView.nearestDesc(n.target,true);if(f&&f.node.type.spec.draggable&&f!=r.docView)a=fn.create(r.state.doc,f.posBefore)}var o=(a||r.state.selection).content();var s=vu(r,o),l=s.dom,v=s.text,c=s.slice;
// Pre-120 Chrome versions clear files when calling `clearData` (#1472)
if(!n.dataTransfer.files.length||!Pe||Ie>120)n.dataTransfer.clearData();n.dataTransfer.setData(ja?"Text":"text/html",l.innerHTML);
// See https://code.haverbeke.berlin/prosemirror/prosemirror/issues/1156
n.dataTransfer.effectAllowed="copyMove";if(!ja)n.dataTransfer.setData("text/plain",v);r.dragging=new Ia(c,Da(r,n),a)};Vu.dragend=function(r){var t=r.dragging;window.setTimeout((function(){if(r.dragging==t)r.dragging=null}),50)};Gu.dragover=Gu.dragenter=function(r,t){return t.preventDefault()};Gu.drop=function(r,t){try{za(r,t,r.dragging)}finally{r.dragging=null}};function za(r,t,n){if(!t.dataTransfer)return;var e=r.posAtCoords(ua(t));if(!e)return;var i=r.state.doc.resolve(e.pos);var u=n&&n.slice;if(u){r.someProp("transformPasted",(function(t){u=t(u,r,false)}))}else{u=cu(r,Pa(t.dataTransfer),ja?null:t.dataTransfer.getData("text/html"),false,i)}var a=!!(n&&Da(r,t));if(r.someProp("handleDrop",(function(n){return n(r,t,u||k.empty,a)}))){t.preventDefault();return}if(!u)return;t.preventDefault();var f=u?Rt(r.state.doc,i.pos,u):i.pos;if(f==null)f=i.pos;var o=r.state.tr;if(a){var s=n.node;if(s)s.replace(o);else o.deleteSelection()}var l=o.mapping.map(f);var v=u.openStart==0&&u.openEnd==0&&u.content.childCount==1;var c=o.doc;if(v)o.replaceRangeWith(l,l,u.content.firstChild);else o.replaceRange(l,l,u);if(o.doc.eq(c))return;var h=o.doc.resolve(l);if(v&&fn.isSelectable(u.content.firstChild)&&h.nodeAfter&&h.nodeAfter.sameMarkup(u.content.firstChild)){o.setSelection(new fn(h))}else{var d=o.mapping.map(f);o.mapping.maps[o.mapping.maps.length-1].forEach((function(r,t,n,e){return d=e}));o.setSelection(Fu(r,h,o.doc.resolve(d)))}r.focus();r.dispatch(o.setMeta("uiEvent","drop"))}Vu.focus=function(r){r.input.lastFocus=Date.now();if(!r.focused){r.domObserver.stopped((function(){return r.dom.classList.add("ProseMirror-focused")}));r.focused=true;r.domSel.read();if(!r.domSel.synced){var t=r.domSel.range;setTimeout((function(){var n=r.domSel.readRange();if(n&&t.eq(n))r.domSel.sync()}),20)}}};Vu.blur=function(r,t){var n=t;if(r.focused){r.domObserver.stopped((function(){return r.dom.classList.remove("ProseMirror-focused")}));if(n.relatedTarget&&r.dom.contains(n.relatedTarget))r.domSel.deactivate();r.focused=false}};Vu.beforeinput=function(r,t){var n=t;
// We should probably do more with beforeinput events, but support
// is so spotty that I'm still waiting to see where they are going.
// Very specific hack to deal with backspace sometimes failing on
// Chrome and Firefox Android when after an uneditable node.
if(Ue&&n.inputType=="deleteContentBackward"){r.domObserver.flushSoon();var e=r.input.domChangeCount;setTimeout((function(){if(r.input.domChangeCount!=e||r.domObserver.pendingRecords().length)return;// Event already had some effect
// This bug tends to close the virtual keyboard, so we refocus
r.dom.blur();r.focus();if(ia(r,"Backspace"))return;var t=r.state.selection.$cursor;
// Crude approximation of backspace behavior when no command handled it
if(t&&t.pos>0)r.dispatch(r.state.tr.delete(t.pos-1,t.pos).scrollIntoView())}),50)}};
// Make sure all handlers get registered
for(var Ba in Gu)Vu[Ba]=Gu[Ba];function Ua(r,t){if(r==t)return true;for(var n in r)if(r[n]!==t[n])return false;for(var n in t)if(!(n in r))return false;return true}var $a=/** @class */function(){function r(r){this.frag=r;this.index=0;this.off=0}r.prototype.nodeAt=function(r){while(this.off<=r&&this.index<this.frag.childCount){var t=this.frag.child(this.index);if(this.off==r)return t;this.off+=t.nodeSize;this.index++}return null};return r}();var Ka=/** @class */function(){function r(r,t){this.toDOM=r;this.spec=t||Ga;this.side=this.spec.side||0}r.prototype.map=function(r,t,n,e){var i=r.mapResult(t.from+e,this.side<0?-1:1),u=i.pos,a=i.deleted;return a?null:new qa(u-n,u-n,this)};r.prototype.valid=function(){return true};r.prototype.eq=function(t){return this==t||t instanceof r&&(this.spec.key&&this.spec.key==t.spec.key||this.toDOM==t.toDOM&&Ua(this.spec,t.spec))};r.prototype.destroy=function(r){if(this.spec.destroy)this.spec.destroy(r)};return r}();var Fa=/** @class */function(){function r(r,t){this.attrs=r;this.spec=t||Ga}r.prototype.map=function(r,t,n,e){var i=r.map(t.from+e,this.spec.inclusiveStart?-1:1)-n;var u=r.map(t.to+e,this.spec.inclusiveEnd?1:-1)-n;return i>=u?null:new qa(i,u,this)};r.prototype.valid=function(r,t){return t.from<t.to};r.prototype.eq=function(t){return this==t||t instanceof r&&Ua(this.attrs,t.attrs)&&Ua(this.spec,t.spec)};r.is=function(t){return t.type instanceof r};r.prototype.destroy=function(){};return r}();var Wa=/** @class */function(){function r(r,t){this.attrs=r;this.spec=t||Ga}r.prototype.map=function(r,t,n,e){var i=r.mapResult(t.from+e,1);if(i.deleted)return null;var u=r.mapResult(t.to+e,-1);if(u.deleted||u.pos<=i.pos)return null;return new qa(i.pos-n,u.pos-n,this)};r.prototype.valid=function(r,t,n){var e=n.nodeAt(t.from);return!!e&&!e.isText&&t.from+e.nodeSize==t.to};r.prototype.eq=function(t){return this==t||t instanceof r&&Ua(this.attrs,t.attrs)&&Ua(this.spec,t.spec)};r.prototype.destroy=function(){};return r}();
/**
            Decoration objects can be provided to the view through the
            [`decorations` prop](https://prosemirror.net/docs/ref/#view.EditorProps.decorations). They come in
            several variants—see the static members of this class for details.
            */var qa=/** @class */function(){
/**
                @internal
                */
function r(
/**
                The start position of the decoration.
                */
r,
/**
                The end position. Will be the same as `from` for [widget
                decorations](https://prosemirror.net/docs/ref/#view.Decoration^widget).
                */
t,
/**
                @internal
                */
n){this.from=r;this.to=t;this.type=n}
/**
                @internal
                */r.prototype.copy=function(t,n){return new r(t,n,this.type)};
/**
                @internal
                */r.prototype.eq=function(r,t){if(t===void 0){t=0}return this.type.eq(r.type)&&this.from+t==r.from&&this.to+t==r.to};
/**
                @internal
                */r.prototype.map=function(r,t,n){return this.type.map(r,this,t,n)};
/**
                Creates a widget decoration, which is a DOM node that's shown in
                the document at the given position. It is recommended that you
                delay rendering the widget by passing a function that will be
                called when the widget is actually drawn in a view, but you can
                also directly pass a DOM node. `getPos` can be used to find the
                widget's current document position.
                */r.widget=function(t,n,e){return new r(t,t,new Ka(n,e))};
/**
                Creates an inline decoration, which adds the given attributes to
                each inline node between `from` and `to`.
                */r.inline=function(t,n,e,i){return new r(t,n,new Fa(e,i))};
/**
                Creates a node decoration. `from` and `to` should point precisely
                before and after a node in the document. That node, and only that
                node, will receive the given attributes.
                */r.node=function(t,n,e,i){return new r(t,n,new Wa(e,i))};Object.defineProperty(r.prototype,"spec",{
/**
                    The spec provided when creating this decoration. Can be useful
                    if you've stored extra information in that object.
                    */
get:function(){return this.type.spec},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"inline",{
/**
                    @internal
                    */
get:function(){return this.type instanceof Fa},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"widget",{
/**
                    @internal
                    */
get:function(){return this.type instanceof Ka},enumerable:false,configurable:true});return r}();var Va=[],Ga={};
/**
            A collection of [decorations](https://prosemirror.net/docs/ref/#view.Decoration), organized in such
            a way that the drawing algorithm can efficiently use and compare
            them. This is a persistent data structure—it is not modified,
            updates create a new value.
            */var Ja=/** @class */function(){
/**
                @internal
                */
function r(r,t){this.local=r.length?r:Va;this.children=t.length?t:Va}
/**
                Create a set of decorations, using the structure of the given
                document. This will consume (modify) the `decorations` array, so
                you must make a copy if you want need to preserve that.
                */r.create=function(r,t){return t.length?ef(t,r,0,Ga):Xa};
/**
                Find all decorations in this set which touch the given range
                (including decorations that start or end directly at the
                boundaries) and match the given predicate on their spec. When
                `start` and `end` are omitted, all decorations in the set are
                considered. When `predicate` isn't given, all decorations are
                assumed to match.
                */r.prototype.find=function(r,t,n){var e=[];this.findInner(r==null?0:r,t==null?1e9:t,e,0,n);return e};r.prototype.findInner=function(r,t,n,e,i){for(var u=0;u<this.local.length;u++){var a=this.local[u];
// Spans are sorted by start position.
if(a.from>t)break;if(a.to>=r&&(!i||i(a.spec)))n.push(a.copy(a.from+e,a.to+e))}for(var f=0;f<this.children.length;f+=3){
// Children are sorted by start position.
if(this.children[f]>=t)break;if(this.children[f+1]>r){var o=this.children[f]+1;this.children[f+2].findInner(r-o,t-o,n,e+o,i)}}};
/**
                Map the set of decorations in response to a change in the
                document.
                */r.prototype.map=function(r,t,n){if(this==Xa||r.maps.length==0)return this;return this.mapInner(r,t,0,0,n||Ga)};
/**
                @internal
                */r.prototype.mapInner=function(t,n,e,i,u){var a;if(this.local.length){var f=new $a(n.content);for(var o=0;o<this.local.length;o++){var s=this.local[o].map(t,e,i);if(s&&s.type.valid(n,s,f))(a||(a=[])).push(s);else if(u.onRemove)u.onRemove(this.local[o].spec)}}if(this.children.length)return Qa(this.children,a||[],t,n,e,i,u);else return a?new r(a.sort(uf),Va):Xa};
/**
                Add the given array of decorations to the ones in the set,
                producing a new set. Consumes the `decorations` array. Needs
                access to the current document to create the appropriate tree
                structure.
                */r.prototype.add=function(t,n){if(!n.length)return this;if(this==Xa)return r.create(t,n);return this.addInner(t,n,0)};r.prototype.addInner=function(t,n,e){var i=this;var u,a=0;t.forEach((function(r,t){var f=t+e,o;if(!(o=tf(n,r,f)))return;if(!u)u=i.children.slice();while(a<u.length&&u[a]<t)a+=3;if(u[a]==t)u[a+2]=u[a+2].addInner(r,o,f+1);else u.splice(a,0,t,t+r.nodeSize,ef(o,r,f+1,Ga));a+=3}));var f=Za(a?nf(n):n,-e).sort(uf);if(f.length){var o=new $a(t.content);for(var s=0;s<f.length;s++)if(!f[s].type.valid(t,f[s],o))f.splice(s--,1)}return new r(f.length?this.local.concat(f).sort(uf):this.local,u||this.children)};
/**
                Create a new set that contains the decorations in this set, minus
                the ones in the given array.
                */r.prototype.remove=function(r){if(r.length==0||this==Xa)return this;return this.removeInner(r,0)};r.prototype.removeInner=function(t,n){var e=this.children,i=this.local;for(var u=0;u<e.length;u+=3){var a=void 0;var f=e[u]+n,o=e[u+1]+n;for(var s=0,l=void 0;s<t.length;s++)if(l=t[s]){if(l.from>f&&l.to<o){t[s]=null;(a||(a=[])).push(l)}}if(!a)continue;if(e==this.children)e=this.children.slice();var v=e[u+2].removeInner(a,f+1);if(v!=Xa){e[u+2]=v}else{e.splice(u,3);u-=3}}if(i.length)for(var c=0,l=void 0;c<t.length;c++)if(l=t[c]){for(var s=0;s<i.length;s++)if(i[s].eq(l,n)){if(i==this.local)i=this.local.slice();i.splice(s--,1)}}if(e==this.children&&i==this.local)return this;return i.length||e.length?new r(i,e):Xa};r.prototype.forChild=function(t,n){if(this==Xa)return this;if(n.isLeaf)return r.empty;var e,i;
// Children are sorted triples of start, end, and decoration set.
var u=0,a=this.children.length/3;while(u<a){var f=u+a>>>1,o=f*3,s=this.children[o];if(s<t){u=f+1}else if(s>t){a=f}else{e=this.children[o+2];break}}var l=t+1,v=l+n.content.size;for(var c=0;c<this.local.length;c++){var h=this.local[c];if(h.from<v&&h.to>l&&h.type instanceof Fa){var d=Math.max(l,h.from)-l,p=Math.min(v,h.to)-l;if(d<p)(i||(i=[])).push(h.copy(d,p))}}if(i){var b=new r(i.sort(uf),Va);return e?new Ya([b,e]):b}return e||Xa};
/**
                @internal
                */r.prototype.eq=function(t){if(this==t)return true;if(!(t instanceof r)||this.local.length!=t.local.length||this.children.length!=t.children.length)return false;for(var n=0;n<this.local.length;n++)if(!this.local[n].eq(t.local[n]))return false;for(var e=0;e<this.children.length;e+=3)if(this.children[e]!=t.children[e]||this.children[e+1]!=t.children[e+1]||!this.children[e+2].eq(t.children[e+2]))return false;return true};
/**
                @internal
                */r.prototype.locals=function(r){return af(this.localsInner(r))};
/**
                @internal
                */r.prototype.localsInner=function(r){if(this==Xa)return Va;if(r.inlineContent||!this.local.some(Fa.is))return this.local;var t=[];for(var n=0;n<this.local.length;n++){if(!(this.local[n].type instanceof Fa))t.push(this.local[n])}return t};r.prototype.forEachSet=function(r){r(this)};return r}();
/**
            The empty set of decorations.
            */Ja.empty=new Ja([],[]);
/**
            @internal
            */Ja.removeOverlap=af;var Xa=Ja.empty;
// An abstraction that allows the code dealing with decorations to
// treat multiple DecorationSet objects as if it were a single object
// with (a subset of) the same interface.
var Ya=/** @class */function(){function r(r){this.members=r}r.prototype.map=function(t,n){var e=this.members.map((function(r){return r.map(t,n,Ga)}));return r.from(e)};r.prototype.forChild=function(t,n){if(n.isLeaf)return Ja.empty;var e=[];for(var i=0;i<this.members.length;i++){var u=this.members[i].forChild(t,n);if(u==Xa)continue;if(u instanceof r)e=e.concat(u.members);else e.push(u)}return r.from(e)};r.prototype.eq=function(t){if(!(t instanceof r)||t.members.length!=this.members.length)return false;for(var n=0;n<this.members.length;n++)if(!this.members[n].eq(t.members[n]))return false;return true};r.prototype.locals=function(r){var t,n=true;for(var e=0;e<this.members.length;e++){var i=this.members[e].localsInner(r);if(!i.length)continue;if(!t){t=i}else{if(n){t=t.slice();n=false}for(var u=0;u<i.length;u++)t.push(i[u])}}return t?af(n?t:t.sort(uf)):Va};
// Create a group for the given array of decoration sets, or return
// a single set when possible.
r.from=function(t){switch(t.length){case 0:return Xa;case 1:return t[0];default:return new r(t.every((function(r){return r instanceof Ja}))?t:t.reduce((function(r,t){return r.concat(t instanceof Ja?t:t.members)}),[]))}};r.prototype.forEachSet=function(r){for(var t=0;t<this.members.length;t++)this.members[t].forEachSet(r)};return r}();function Qa(r,t,n,e,i,u,a){var f=r.slice();var o=function(r,t){var e=0;n.maps[r].forEach((function(r,n,i,u){var a=u-i-(n-r);for(var o=0;o<f.length;o+=3){var s=f[o+1];if(s<0||r>s+t-e)continue;var l=f[o]+t-e;if(n>=l){f[o+1]=r<=l?-2:-1}else if(r>=t&&a){f[o]+=a;f[o+1]+=a}}e+=a}));t=n.maps[r].map(t,-1);s=t};var s;
// Mark the children that are directly touched by changes, and
// move those that are after the changes.
for(var l=0,v=u;l<n.maps.length;l++){o(l,v);v=s}
// Find the child nodes that still correspond to a single node,
// recursively call mapInner on them and update their positions.
var c=false;for(var h=0;h<f.length;h+=3)if(f[h+1]<0){// Touched nodes
if(f[h+1]==-2){c=true;f[h+1]=-1;continue}var d=n.map(r[h]+u),p=d-i;if(p<0||p>=e.content.size){c=true;continue}
// Must read oldChildren because children was tagged with -1
var b=n.map(r[h+1]+u,-1),g=b-i;var m=e.content.findIndex(p),w=m.index,y=m.offset;var k=e.maybeChild(w);if(k&&y==p&&y+k.nodeSize==g){var _=f[h+2].mapInner(n,k,d+1,r[h]+u+1,a);if(_!=Xa){f[h]=p;f[h+1]=g;f[h+2]=_}else{f[h+1]=-2;c=true}}else{c=true}}
// Remaining children must be collected and rebuilt into the appropriate structure
if(c){var x=rf(f,r,t,n,i,u,a);var M=ef(x,e,0,a);t=M.local;for(var O=0;O<f.length;O+=3)if(f[O+1]<0){f.splice(O,3);O-=3}for(var T=0,A=0;T<M.children.length;T+=3){var d=M.children[T];while(A<f.length&&f[A]<d)A+=3;f.splice(A,0,M.children[T],M.children[T+1],M.children[T+2])}}return new Ja(t.sort(uf),f)}function Za(r,t){if(!t||!r.length)return r;var n=[];for(var e=0;e<r.length;e++){var i=r[e];n.push(new qa(i.from+t,i.to+t,i.type))}return n}function rf(r,t,n,e,i,u,a){
// Gather all decorations from the remaining marked children
function f(r,t){for(var u=0;u<r.local.length;u++){var o=r.local[u].map(e,i,t);if(o)n.push(o);else if(a.onRemove)a.onRemove(r.local[u].spec)}for(var s=0;s<r.children.length;s+=3)f(r.children[s+2],r.children[s]+t+1)}for(var o=0;o<r.length;o+=3)if(r[o+1]==-1)f(r[o+2],t[o]+u+1);return n}function tf(r,t,n){if(t.isLeaf)return null;var e=n+t.nodeSize,i=null;for(var u=0,a=void 0;u<r.length;u++){if((a=r[u])&&a.from>n&&a.to<e){(i||(i=[])).push(a);r[u]=null}}return i}function nf(r){var t=[];for(var n=0;n<r.length;n++)if(r[n]!=null)t.push(r[n]);return t}
// Build up a tree that corresponds to a set of decorations. `offset`
// is a base offset that should be subtracted from the `from` and `to`
// positions in the spans (so that we don't have to allocate new spans
// for recursive calls).
function ef(r,t,n,e){var i=[],u=false;t.forEach((function(t,a){var f=tf(r,t,a+n);if(f){u=true;var o=ef(f,t,n+a+1,e);if(o!=Xa)i.push(a,a+t.nodeSize,o)}}));var a=Za(u?nf(r):r,-n).sort(uf);if(a.length){var f=new $a(t.content);for(var o=0;o<a.length;o++)if(!a[o].type.valid(t,a[o],f)){if(e.onRemove)e.onRemove(a[o].spec);a.splice(o--,1)}}return a.length||i.length?new Ja(a,i):Xa}
// Used to sort decorations so that ones with a low start position
// come first, and within a set with the same start position, those
// with an smaller end position come first.
function uf(r,t){return r.from-t.from||r.to-t.to}
// Scan a sorted array of decorations for partially overlapping spans,
// and split those so that only fully overlapping spans are left (to
// make subsequent rendering easier). Will return the input array if
// no partially overlapping spans are found (the common case).
function af(r){var t=r;for(var n=0;n<t.length-1;n++){var e=t[n];if(e.from!=e.to)for(var i=n+1;i<t.length;i++){var u=t[i];if(u.from==e.from){if(u.to!=e.to){if(t==r)t=r.slice();
// Followed by a partially overlapping larger span. Split that
// span.
t[i]=u.copy(u.from,e.to);ff(t,i+1,u.copy(e.to,u.to))}continue}else{if(u.from<e.to){if(t==r)t=r.slice();
// The end of this one overlaps with a subsequent span. Split
// this one.
t[n]=e.copy(e.from,u.from);ff(t,i,e.copy(u.from,e.to))}break}}}return t}function ff(r,t,n){while(t<r.length&&uf(n,r[t])>0)t++;r.splice(t,0,n)}
// Get the decorations associated with the current props of a view.
function of(r){var t=[];r.someProp("decorations",(function(n){var e=n(r.state);if(e&&e!=Xa)t.push(e)}));if(r.cursorWrapper)t.push(Ja.create(r.state.doc,[r.cursorWrapper.deco]));return Ya.from(t)}
// Note that all referencing and parsing is done with the
// start-of-operation selection and document, since that's the one
// that the DOM represents. If any changes came in in the meantime,
// the modification is mapped over those before it is applied, in
// readDOMChange.
function sf(r,t,n,e){var i=r.docView.parseRange(t,n),u=i.node,a=i.fromOffset,f=i.toOffset,o=i.from,s=i.to;var l=r.domSel.range;var v;var c=l.anchorNode;if(c&&ye(r.dom,c)){v=[{node:c,offset:l.anchorOffset}];if(!Oe(l))v.push({node:l.focusNode,offset:l.focusOffset})}
// Work around issue in Chrome where backspacing sometimes replaces
// the deleted content with a random BR node (issues #799, #831)
if(Pe&&r.input.lastKeyCode===8){for(var h=f;h>a;h--){var d=u.childNodes[h-1],p=d.pmViewDesc;if(d.nodeName=="BR"&&!p){f=h;break}if(!p||p.size)break}}var b=r.state.doc;var g=r.someProp("domParser")||br.fromSchema(r.state.schema);var m=b.resolve(o);var w=null,y=g.parse(u,{topNode:m.parent,topMatch:m.parent.contentMatchAt(m.index()),topOpen:true,from:a,to:f,preserveWhitespace:m.parent.type.whitespace=="pre"?"full":true,findPositions:v,ruleFromNode:lf(e),context:m});if(v&&v[0].pos!=null){var k=v[0].pos,_=v[1]&&v[1].pos;if(_==null)_=k;w={anchor:k+o,head:_+o}}return{doc:y,sel:w,from:o,to:s}}var lf=function(r){return function(t){var n=t.pmViewDesc;if(n){return n.parseRule(r)}else if(t.nodeName=="BR"&&t.parentNode){
// Safari replaces the list item or table cell with a BR
// directly in the list node (?!) if you delete the last
// character in a list item or table cell (#708, #862)
if(He&&/^(ul|ol)$/i.test(t.parentNode.nodeName)){var e=document.createElement("div");e.appendChild(document.createElement("li"));return{skip:e}}else if(t.parentNode.lastChild==t||He&&/^(tr|table)$/i.test(t.parentNode.nodeName)){return{ignore:true}}}else if(t.nodeName=="IMG"&&t.getAttribute("mark-placeholder")){return{ignore:true}}return null}};var vf=/^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;function cf(r,t,n,e,i,u){var a=r.input.compositionPendingChanges||(r.composing?r.input.compositionID:0);r.input.compositionPendingChanges=0;if(t<0){var f=r.input.lastSelectionTime>Date.now()-50?r.input.lastSelectionOrigin:null;var o=ju(r,r.domSel.range,f);if(o&&!r.state.selection.eq(o)&&r.domSel.active){if(Pe&&Ue&&r.input.lastKeyCode===13&&Date.now()-100<r.input.lastKeyCodeTime&&ia(r,"Enter"))return;var s=r.state.tr.setSelection(o);if(f=="pointer")s.setMeta("pointer",true);else if(f=="key")s.scrollIntoView();if(a)s.setMeta("composition",a);r.dispatch(s)}return}var l=r.state.doc.resolve(t);var v=l.sharedDepth(n);t=l.before(v+1);n=r.state.doc.resolve(n).after(v+1);var c=r.state.selection;var h=sf(r,t,n,u);var d=r.state.doc,p=d.slice(h.from,h.to);var b,g;
// Prefer anchoring to end when Backspace is pressed
if(r.input.lastKeyCode===8&&Date.now()-100<r.input.lastKeyCodeTime){b=r.state.selection.to;g="end"}else{b=r.state.selection.from;g="start"}r.input.lastKeyCode=null;var m=mf(p.content,h.doc.content,h.from,b,g);if(m)r.input.domChangeCount++;if((De&&r.input.lastIOSEnter>Date.now()-225||Ue)&&u.some((function(r){return me(r)&&!vf.test(r.nodeName)}))&&(!m||m.endA>=m.endB)&&ia(r,"Enter")){r.input.lastIOSEnter=0;return}if(!m){if(i&&c instanceof un&&!c.empty&&c.$head.sameParent(c.$anchor)&&!r.composing&&!(h.sel&&h.sel.anchor!=h.sel.head)){m={start:c.from,endA:c.to,endB:c.to}}else{if(h.sel){var w=hf(r,r.state.doc,h.sel);if(w&&!w.eq(r.state.selection)){var y=r.state.tr.setSelection(w);if(a)y.setMeta("composition",a);r.dispatch(y)}}return}}
// Handle the case where overwriting a selection by typing matches
// the start or end of the selected content, creating a change
// that's smaller than what was actually overwritten.
if(r.state.selection.from<r.state.selection.to&&m.start==m.endB&&r.state.selection instanceof un){if(m.start>r.state.selection.from&&m.start<=r.state.selection.from+2&&r.state.selection.from>=h.from){m.start=r.state.selection.from}else if(m.endA<r.state.selection.to&&m.endA>=r.state.selection.to-2&&r.state.selection.to<=h.to){m.endB+=r.state.selection.to-m.endA;m.endA=r.state.selection.to}}var k=h.doc.resolveNoCache(m.start-h.from);var _=h.doc.resolveNoCache(m.endB-h.from);var x=d.resolve(m.start);var M=k.sameParent(_)&&k.parent.inlineContent&&x.end()>=m.endA;
// If this looks like the effect of pressing Enter (or was recorded
// as being an iOS enter press), just dispatch an Enter key instead.
if((De&&r.input.lastIOSEnter>Date.now()-225&&(!M||u.some((function(r){return r.nodeName=="DIV"||r.nodeName=="P"})))||!M&&bf(h.doc,k.pos,_.pos))&&ia(r,"Enter")){r.input.lastIOSEnter=0;return}
// Same for backspace
if(r.state.selection.anchor>m.start&&(M?m.endA>m.start&&m.endB==m.start:pf(d,m.start,m.endA,k,_))&&ia(r,"Backspace")){if(Ue&&Pe)r.domSel.suppressChanges();return}
// Chrome will occasionally, during composition, delete the
// entire composition and then immediately insert it again. This is
// used to detect that situation.
if(Pe&&m.endB==m.start)r.input.lastChromeDelete=Date.now();
// This tries to detect Android virtual keyboard
// enter-and-pick-suggestion action. That sometimes (see issue
// #1059) first fires a DOM mutation, before moving the selection to
// the newly created block. And then, because ProseMirror cleans up
// the DOM selection, it gives up moving the selection entirely,
// leaving the cursor in the wrong place. When that happens, we drop
// the new paragraph from the initial change, and fire a simulated
// enter key afterwards.
if(Ue&&!M&&k.start()!=_.start()&&_.parentOffset==0&&k.depth==_.depth&&h.sel&&h.sel.anchor==h.sel.head&&h.sel.head==m.endA){m.endB-=2;_=h.doc.resolveNoCache(m.endB-h.from);setTimeout((function(){return ia(r,"Enter")}),20)}var O=m.start,T=m.endA;var A=function(t){var n=t||r.state.tr.replace(O,T,h.doc.slice(m.start-h.from,m.endB-h.from));if(h.sel){var e=hf(r,n.doc,h.sel);
// Chrome will sometimes, during composition, report the
// selection in the wrong place. If it looks like that is
// happening, don't update the selection.
if(e&&!(Pe&&r.composing&&e.empty&&(m.start!=m.endB||r.input.lastChromeDelete<Date.now()-100)&&(e.head==O||e.head==n.mapping.map(T)-1)))n.setSelection(e)}if(a)n.setMeta("composition",a);return n.scrollIntoView()};var E;if(M){if(k.pos==_.pos){// Deletion
var S=A(r.state.tr.delete(O,T));var C=d.resolve(m.start).marksAcross(d.resolve(m.endA));if(C)S.ensureMarks(C);r.dispatch(S)}else if(// Adding or removing a mark
m.endA==m.endB&&(E=df(k.parent.content.cut(k.parentOffset,_.parentOffset),x.parent.content.cut(x.parentOffset,m.endA-x.start())))){var j=A(r.state.tr);if(E.type=="add")j.addMark(O,T,E.mark);else j.removeMark(O,T,E.mark);r.dispatch(j)}else if(k.parent.child(k.index()).isText&&k.index()==_.index()-(_.textOffset?0:1)){
// Both positions in the same text node -- simply insert text
var R=k.parent.textBetween(k.parentOffset,_.parentOffset);var L=function(){return A(r.state.tr.insertText(R,O,T))};if(!r.someProp("handleTextInput",(function(t){return t(r,O,T,R,L)})))r.dispatch(L())}else{r.dispatch(A())}}else{r.dispatch(A())}}function hf(r,t,n){if(Math.max(n.anchor,n.head)>t.content.size)return null;return Fu(r,t.resolve(n.anchor),t.resolve(n.head))}
// Given two same-length, non-empty fragments of inline content,
// determine whether the first could be created from the second by
// removing or adding a single mark type.
function df(r,t){var n=r.firstChild.marks,e=t.firstChild.marks;var i=n,u=e,a,f,o;for(var s=0;s<e.length;s++)i=e[s].removeFromSet(i);for(var l=0;l<n.length;l++)u=n[l].removeFromSet(u);if(i.length==1&&u.length==0){f=i[0];a="add";o=function(r){return r.mark(f.addToSet(r.marks))}}else if(i.length==0&&u.length==1){f=u[0];a="remove";o=function(r){return r.mark(f.removeFromSet(r.marks))}}else{return null}var v=[];for(var c=0;c<t.childCount;c++)v.push(o(t.child(c)));if(p.from(v).eq(r))return{mark:f,type:a}}function pf(r,t,n,e,i){if(// The content must have shrunk
n-t<=i.pos-e.pos||
// newEnd must point directly at or after the end of the block that newStart points into
gf(e,true,false)<i.pos)return false;var u=r.resolve(t);
// Handle the case where, rather than joining blocks, the change just removed an entire block
if(!e.parent.inlineContent){var a=u.nodeAfter;return a!=null&&n==t+a.nodeSize}
// Start must be at the end of a block
if(u.parentOffset<u.parent.content.size||!u.parent.isTextblock)return false;var f=r.resolve(gf(u,true,true));
// The next textblock must start before end and end near it
if(!f.parent.isTextblock||f.pos>n||gf(f,true,false)<n)return false;
// The fragments after the join point must match
return e.parent.content.cut(e.parentOffset).eq(f.parent.content)}function bf(r,t,n){var e=0,i=0;r.nodesBetween(t,n,(function(r,u){if(r.isTextblock&&u>=t&&u<n)e++;else if(r.isText?/\S/.test(r.text.slice(Math.max(0,t-u),Math.min(r.nodeSize,n-u))):r.isLeaf)i++}));return i==0&&e==1}function gf(r,t,n){var e=r.depth,i=t?r.end():r.pos;while(e>0&&(t||r.indexAfter(e)==r.node(e).childCount)){e--;i++;t=false}if(n){var u=r.node(e).maybeChild(r.indexAfter(e));while(u&&!u.isLeaf){u=u.firstChild;i++}}return i}function mf(r,t,n,e,i){var u=r.findDiffStart(t,n),a=n+r.size,f=n+t.size;if(u==null)return null;var o=r.findDiffEnd(t,a,f),s=o.a,l=o.b;if(i=="end"){var v=Math.max(0,u-Math.min(s,l));e-=s+v-u}if(s<u&&a<f){var c=e<=u&&e>=s?u-e:0;u-=c;l=u+(l-s);s=u}else if(l<u){var c=e<=u&&e>=l?u-e:0;u-=c;s=u+(s-l);l=u}return{start:u,endA:s,endB:l}}var wf={childList:true,characterData:true,characterDataOldValue:true,attributes:true,attributeOldValue:true,subtree:true};var yf=/** @class */function(){function r(r){var t=this;this.view=r;this.queue=[];this.flushingSoon=-1;this.suppressingSelectionUpdates=false;this.lastChangedTextNode=null;this.started=false;this.observer=new window.MutationObserver((function(n){for(var e=0;e<n.length;e++)t.queue.push(n[e]);if(He&&r.composing&&n.some((function(r){return r.type=="childList"&&r.target.nodeName=="TR"}))){
// Safari does weird stuff when finishing a composition in a
// table cell, which tends to involve inserting inappropriate
// nodes in the table row.
r.input.badSafariComposition=true;t.flushSoon()}else{t.flush()}}))}r.prototype.flushSoon=function(){var r=this;if(this.flushingSoon<0)this.flushingSoon=window.setTimeout((function(){r.flushingSoon=-1;r.flush()}),20)};r.prototype.forceFlush=function(r){if(r===void 0){r=false}if(this.flushingSoon>-1){window.clearTimeout(this.flushingSoon);this.flushingSoon=-1;this.flush(true)}else if(r){this.flush(true)}};r.prototype.start=function(){this.observer.takeRecords();this.observer.observe(this.view.dom,wf);this.started=true};r.prototype.stop=function(){var r=this;var t=this.observer.takeRecords();if(t.length){for(var n=0;n<t.length;n++)this.queue.push(t[n]);window.setTimeout((function(){return r.flush()}),20)}this.observer.disconnect();this.started=false};r.prototype.stopped=function(r){if(!this.started)return r();this.stop();try{return r()}finally{this.start()}};r.prototype.ignoreSelectionChange=function(r){if(!r.focusNode)return true;var t=new Set,n;for(var e=r.focusNode;e;e=le(e))t.add(e);for(var e=r.anchorNode;e;e=le(e))if(t.has(e)){n=e;break}var i=n&&this.view.docView.nearestDesc(n);if(i&&i.ignoreMutation({type:"selection",target:we(n)?n.parentNode:n})){this.view.domSel.ignore(r);return true}};r.prototype.pendingRecords=function(){for(var r=0,t=this.observer.takeRecords();r<t.length;r++){var n=t[r];this.queue.push(n)}return this.queue};r.prototype.flush=function(r){if(r===void 0){r=true}var t=this.view;if(!t.docView||this.flushingSoon>-1)return;var n=this.pendingRecords();if(n.length)this.queue=[];if(r)t.domSel.read();var e=!t.domSel.suppress&&!t.domSel.synced&&!!Wu(t)&&!this.ignoreSelectionChange(t.domSel.range);var i=-1,u=-1,a=false,f=[];if(t.editable){for(var o=0;o<n.length;o++){var s=this.registerMutation(n[o],f);if(s){i=i<0?s.from:Math.min(s.from,i);u=u<0?s.to:Math.max(s.to,u);if(s.typeOver)a=true}}}if(f.some((function(r){return r.nodeName=="BR"}))&&(t.input.lastKeyCode==8||t.input.lastKeyCode==46||Pe&&(t.composing||t.input.compositionEndedAt>Date.now()-50)&&n.some((function(r){return r.type=="childList"&&r.removedNodes.length})))){
// Browsers sometimes insert a bogus break node if you
// backspace out the last bit of text before an inline-flex node (#1552)
for(var l=0,v=f;l<v.length;l++){var c=v[l];if(c.nodeName=="BR"&&c.parentNode){var h=c.nextSibling;while(h&&me(h)){if(h.contentEditable=="false"){c.parentNode.removeChild(c);break}h=h.firstChild}}}}else if(Le&&f.length){var d=f.filter((function(r){return r.nodeName=="BR"}));if(d.length==2){var p=d[0],b=d[1];if(p.parentNode&&p.parentNode.parentNode==b.parentNode)b.remove();else p.remove()}else{var g=t.domSel.range.focusNode;for(var m=0,w=d;m<w.length;m++){var y=w[m];var k=y.parentNode;if(k&&k.nodeName=="LI"&&(!g||Mf(t,g)!=k))y.remove()}}}var _=null;
// If it looks like the browser has reset the selection to the
// start of the document after focus, restore the selection from
// the state
if(i<0&&e&&t.domSel.active&&t.input.lastFocus>Date.now()-200&&Math.max(t.input.lastTouch,t.input.lastClick.time)<Date.now()-300&&Oe(t.domSel.range)&&(_=ju(t,t.domSel.range))&&_.eq(rn.near(t.state.doc.resolve(0),1))){t.input.lastFocus=0;t.domSel.sync();t.scrollToSelection()}else if(i>-1||e){if(i>-1)xf(t);if(t.input.badSafariComposition){t.input.badSafariComposition=false;Of(t,f)}cf(this.view,i,u,e,a,f);if(t.docView&&t.docView.damage)t.updateState(t.state);else if(e)t.domSel.sync()}};r.prototype.registerMutation=function(r,t){var n;
// Ignore mutations inside nodes that were already noted as inserted
if(t.indexOf(r.target)>-1)return null;var e;for(var i=r.target;i;i=i.parentNode){if(e=this.view.docView.getDesc(i))break}if(r.type=="attributes"&&(e==this.view.docView||r.attributeName=="contenteditable"||
// Firefox sometimes fires spurious events for null/empty styles
r.attributeName=="style"&&!r.oldValue&&!r.target.getAttribute("style")))return null;if(!e||e.ignoreMutation(r))return null;if(r.type=="childList"){for(var u=0;u<r.addedNodes.length;u++){var a=r.addedNodes[u];t.push(a);if(we(a))this.lastChangedTextNode=a}if(e.contentDOM&&e.contentDOM!=e.dom&&!e.contentDOM.contains(r.target)){e.markDamage(4/* Damage.Structure */);return{from:e.posBefore,to:e.posAfter}}var f=r.previousSibling,o=r.nextSibling;var s=f&&f.parentNode==r.target?se(f)+1:0;var l=e.localPosFromDOM(r.target,s,-1);var v=o&&o.parentNode==r.target?se(o):r.target.childNodes.length;var c=e.localPosFromDOM(r.target,v,1);e.markDamage(((n=e.contentDOM)===null||n===void 0?void 0:n.contains(r.target))?2/* Damage.ChildList */:4/* Damage.Structure */);return{from:l,to:c}}else if(r.type=="attributes"){e.markDamage(4/* Damage.Structure */);return{from:e.posAtStart-e.border,to:e.posAtEnd+e.border}}else{// "characterData"
this.lastChangedTextNode=r.target;e.markDamage(e instanceof Ei&&r.target==e.nodeDOM?8/* Damage.Text */:4/* Damage.Structure */);return{from:e.posAtStart,to:e.posAtEnd,
// An event was generated for a text change that didn't change
// any text. Mark the dom change to fall back to assuming the
// selection was typed over with an identical value if it can't
// find another change.
typeOver:r.target.nodeValue==r.oldValue}}};return r}();var kf=new WeakMap;var _f=false;function xf(r){if(kf.has(r))return;kf.set(r,null);if(["normal","nowrap","pre-line"].indexOf(getComputedStyle(r.dom).whiteSpace)!==-1){r.requiresGeckoHackNode=Le;if(_f)return;console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");_f=true}}function Mf(r,t){for(var n=t.parentNode;n&&n!=r.dom;n=n.parentNode){var e=r.docView.nearestDesc(n,true);if(e&&e.node.isBlock)return n}return null}
// Kludge for a Safari bug where, on ending a composition in an
// otherwise empty table cell, it randomly moves the composed text
// into the table row around that cell, greatly confusing everything
// (#188).
function Of(r,t){var n;var e=r.domSel.range,i=e.focusNode,u=e.focusOffset;for(var a=0,f=t;a<f.length;a++){var o=f[a];if(((n=o.parentNode)===null||n===void 0?void 0:n.nodeName)=="TR"){var s=o.nextSibling;while(s&&(s.nodeName!="TD"&&s.nodeName!="TH"))s=s.nextSibling;if(s){var l=s;for(;;){var v=l.firstChild;if(!v||!me(v)||v.contentEditable=="false"||/^(BR|IMG)$/.test(v.nodeName))break;l=v}l.insertBefore(o,l.firstChild);if(i==o)r.domSelection().collapse(o,u)}else{o.parentNode.removeChild(o)}}}}
/**
            An editor view manages the DOM structure that represents an
            editable document. Its state and behavior are determined by its
            [props](https://prosemirror.net/docs/ref/#view.DirectEditorProps).
            */var Tf=/** @class */function(){
/**
                Create a view. `place` may be a DOM node that the editor should
                be appended to, a function that will place it into the document,
                or an object whose `mount` property holds the node to use as the
                document container. If it is `null`, the editor will not be
                added to the document.
                */
function r(r,t){this._root=null;
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
                    */this.input=new Xu;this.prevDirectPlugins=[];this.pluginViews=[];
/**
                    Holds `true` when a hack node is needed in Firefox to prevent the
                    [space is eaten issue](https://code.haverbeke.berlin/prosemirror/prosemirror/issues/651)
                    @internal
                    */this.requiresGeckoHackNode=false;
/**
                    When editor content is being dragged, this object contains
                    information about the dragged slice and whether it is being
                    copied or moved. At any other time, it is null.
                    */this.dragging=null;this._props=t;this.state=t.state;this.directPlugins=t.plugins||[];this.directPlugins.forEach(Lf);this.dispatch=this.dispatch.bind(this);this.dom=r&&r.mount||document.createElement("div");if(r){if(r.appendChild)r.appendChild(this.dom);else if(typeof r=="function")r(this.dom);else if(r.mount)this.mounted=true}this.editable=Sf(this);Ef(this);this.nodeViews=jf(this);this.docView=Ai(this.state.doc,Af(this),of(this),this.dom,this);this.domObserver=new yf(this);this.domSel=new Eu(this);this.domObserver.start();this.domSel.read();Yu(this);this.updatePluginViews()}Object.defineProperty(r.prototype,"composing",{
/**
                    Holds `true` when a
                    [composition](https://w3c.github.io/uievents/#events-compositionevents)
                    is active.
                    */
get:function(){return this.input.composing},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"props",{
/**
                    The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
                    */
get:function(){if(this._props.state!=this.state){var r=this._props;this._props={};for(var t in r)this._props[t]=r[t];this._props.state=this.state}return this._props},enumerable:false,configurable:true});
/**
                Update the view's props. Will immediately cause an update to
                the DOM.
                */r.prototype.update=function(r){if(r.handleDOMEvents!=this._props.handleDOMEvents)ra(this);var t=this._props;this._props=r;if(r.plugins){r.plugins.forEach(Lf);this.directPlugins=r.plugins}this.updateStateInner(r.state,t)};
/**
                Update the view by updating existing props object with the object
                given as argument. Equivalent to `view.update(Object.assign({},
                view.props, props))`.
                */r.prototype.setProps=function(r){var t={};for(var n in this._props)t[n]=this._props[n];t.state=this.state;for(var n in r)t[n]=r[n];this.update(t)};
/**
                Update the editor's `state` prop, without touching any of the
                other props.
                */r.prototype.updateState=function(r){this.updateStateInner(r,this._props)};r.prototype.updateStateInner=function(r,t){var n=this;var e;var i=this.state,u=false,a=false;
// When stored marks are added, stop composition, so that they can
// be displayed.
if(r.storedMarks&&this.composing){Aa(this);a=true}this.state=r;var f=i.plugins!=r.plugins||this._props.plugins!=t.plugins;if(f||this._props.plugins!=t.plugins||this._props.nodeViews!=t.nodeViews){var o=jf(this);if(Rf(o,this.nodeViews)){this.nodeViews=o;u=true}}if(f||t.handleDOMEvents!=this._props.handleDOMEvents){ra(this)}this.editable=Sf(this);Ef(this);var s=of(this),l=Af(this);var v=i.plugins!=r.plugins&&!i.doc.eq(r.doc)?"reset":r.scrollToSelection>i.scrollToSelection?"to selection":"preserve";var c=u||!this.docView.matchesNode(r.doc,l,s);if(c||!r.selection.eq(i.selection))a=true;var h=v=="preserve"&&a&&this.dom.style.overflowAnchor==null&&Ge(this);if(a)this.domObserver.stopped((function(){
// Work around an issue in Chrome where changing the DOM around
// an active selection puts it into a broken state where the
// thing the user sees differs from the selection reported by
// the Selection object (#710, #973, #1011, #1013, #1035).
var t=c&&Pe&&!n.composing&&!i.selection.empty&&!r.selection.empty&&Cf(i.selection,r.selection);if(c){
// If the node that the selection points into is written to,
// Chrome sometimes starts misreporting the selection, so this
// tracks that and forces a selection reset when our update
// did write to the node.
var e=Pe?n.trackWrites=n.domSel.range.focusNode:null;if(n.composing)n.input.compositionNode=Ea(n);if(u||!n.docView.update(r.doc,l,s,n,-1)){var a=n.docView.outerDeco;n.docView.destroy();n.docView=Ai(r.doc,l,s,n.dom,n,a)}if(e&&(!n.trackWrites||!n.dom.contains(n.trackWrites)))t=true}n.domSel.sync(t)}));this.updatePluginViews(i);if(((e=this.dragging)===null||e===void 0?void 0:e.node)&&!i.doc.eq(r.doc))this.updateDraggedNode(this.dragging,i);if(v=="reset"){this.dom.scrollTop=0}else if(v=="to selection"){this.scrollToSelection()}else if(h){Xe(h)}};
/**
                @internal
                */r.prototype.scrollToSelection=function(){var r=this;var t=this.domSel.range.focusNode;if(!t||!this.domSel.active);else if(this.someProp("handleScrollToSelection",(function(t){return t(r)})));else if(this.state.selection instanceof fn){var n=this.docView.domAfterPos(this.state.selection.from);if(me(n))Ve(this,n.getBoundingClientRect(),t)}else{Ve(this,this.coordsAtPos(this.state.selection.head,1),t)}};r.prototype.destroyPluginViews=function(){var r;while(r=this.pluginViews.pop())if(r.destroy)r.destroy()};r.prototype.updatePluginViews=function(r){if(!r||r.plugins!=this.state.plugins||this.directPlugins!=this.prevDirectPlugins){this.prevDirectPlugins=this.directPlugins;this.destroyPluginViews();for(var t=0;t<this.directPlugins.length;t++){var n=this.directPlugins[t];if(n.spec.view)this.pluginViews.push(n.spec.view(this))}for(var e=0;e<this.state.plugins.length;e++){var n=this.state.plugins[e];if(n.spec.view)this.pluginViews.push(n.spec.view(this))}}else{for(var i=0;i<this.pluginViews.length;i++){var u=this.pluginViews[i];if(u.update)u.update(this,r)}}};r.prototype.updateDraggedNode=function(r,t){var n=r.node,e=-1;if(n.from<this.state.doc.content.size&&this.state.doc.nodeAt(n.from)==n.node){e=n.from}else{var i=n.from+(this.state.doc.content.size-t.doc.content.size);var u=i>0&&i<this.state.doc.content.size&&this.state.doc.nodeAt(i);if(u==n.node)e=i}this.dragging=new Ia(r.slice,r.move,e<0?undefined:fn.create(this.state.doc,e))};r.prototype.someProp=function(r,t){var n=this._props&&this._props[r],e;if(n!=null&&(e=t?t(n):n))return e;for(var i=0;i<this.directPlugins.length;i++){var u=this.directPlugins[i].props[r];if(u!=null&&(e=t?t(u):u))return e}var a=this.state.plugins;if(a)for(var f=0;f<a.length;f++){var o=a[f].props[r];if(o!=null&&(e=t?t(o):o))return e}};
/**
                Query whether the view has focus.
                */r.prototype.hasFocus=function(){return this.root.activeElement==this.dom};
/**
                Focus the editor.
                */r.prototype.focus=function(){if(this.editable)Ze(this.dom);this.domSel.sync()};Object.defineProperty(r.prototype,"root",{
/**
                    Get the document root in which the editor exists. This will
                    usually be the top-level `document`, but might be a [shadow
                    DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
                    root if the editor is inside one.
                    */
get:function(){var r=this.dom.isConnected!==false;if(!r)this._root=null;var t=this._root;if(t==null&&r){var n=function(r){if(r.nodeType==9||r.nodeType==11&&r.host){if(!r.getSelection)Object.getPrototypeOf(r).getSelection=function(){return r.ownerDocument.getSelection()};return{value:e._root=r}}};var e=this;for(var i=this.dom.parentNode;i;i=i.parentNode){var u=n(i);if(typeof u==="object")return u.value}}return t||document},enumerable:false,configurable:true});
/**
                When an existing editor view is moved to a new document or
                shadow tree, call this to make it recompute its root.
                */r.prototype.updateRoot=function(){this._root=null};
/**
                Given a pair of viewport coordinates, return the document
                position that corresponds to them. May return null if the given
                coordinates aren't inside of the editor. When an object is
                returned, its `pos` property is the position nearest to the
                coordinates, and its `inside` property holds the position of the
                inner node that the position falls inside of, or -1 if it is at
                the top level, not in any node.
                */r.prototype.posAtCoords=function(r){return fi(this,r)};
/**
                Returns the viewport rectangle at a given document position.
                `left` and `right` will be the same number, as this returns a
                flat cursor-ish rectangle. If the position is between two things
                that aren't directly adjacent, `side` determines which element
                is used. When < 0, the element before the position is used,
                otherwise the element after.
                */r.prototype.coordsAtPos=function(r,t){if(t===void 0){t=1}return vi(this,r,t)};
/**
                Find the DOM position that corresponds to the given document
                position. When `side` is negative, find the position as close as
                possible to the content before the position. When positive,
                prefer positions close to the content after the position. When
                zero, prefer as shallow a position as possible.
                
                Note that you should **not** mutate the editor's internal DOM,
                only inspect it (and even that is usually not necessary).
                */r.prototype.domAtPos=function(r,t){if(t===void 0){t=0}return this.docView.domFromPos(r,t)};
/**
                Find the DOM node that represents the document node after the
                given position. May return `null` when the position doesn't point
                in front of a node or if the node is inside an opaque node view.
                
                This is intended to be able to call things like
                `getBoundingClientRect` on that DOM node. Do **not** mutate the
                editor DOM directly, or add styling this way, since that will be
                immediately overriden by the editor as it redraws the node.
                */r.prototype.nodeDOM=function(r){var t=this.docView.descAt(r);return t?t.nodeDOM:null};
/**
                Find the document position that corresponds to a given DOM
                position. (Whenever possible, it is preferable to inspect the
                document structure directly, rather than poking around in the
                DOM, but sometimes—for example when interpreting an event
                target—you don't have a choice.)
                
                The `bias` parameter can be used to influence which side of a DOM
                node to use when the position is inside a leaf node.
                */r.prototype.posAtDOM=function(r,t,n){if(n===void 0){n=-1}var e=this.docView.posFromDOM(r,t,n);if(e==null)throw new RangeError("DOM position not inside the editor");return e};
/**
                Find out whether the selection is at the end of a textblock when
                moving in a given direction. When, for example, given `"left"`,
                it will return true if moving left from the current cursor
                position would leave that position's parent textblock. Will apply
                to the view's current state by default, but it is possible to
                pass a different state.
                */r.prototype.endOfTextblock=function(r,t){return ki(this,t||this.state,r)};
/**
                Run the editor's paste logic with the given HTML string. The
                `event`, if given, will be passed to the
                [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
                */r.prototype.pasteHTML=function(r,t){return Na(this,"",r,false,t||new ClipboardEvent("paste"))};
/**
                Run the editor's paste logic with the given plain-text input.
                */r.prototype.pasteText=function(r,t){return Na(this,r,null,true,t||new ClipboardEvent("paste"))};
/**
                Serialize the given slice as it would be if it was copied from
                this editor. Returns a DOM element that contains a
                representation of the slice as its children, a textual
                representation, and the transformed slice (which can be
                different from the given input due to hooks like
                [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
                */r.prototype.serializeForClipboard=function(r){return vu(this,r)};
/**
                Removes the editor from the DOM and destroys all [node
                views](https://prosemirror.net/docs/ref/#view.NodeView).
                */r.prototype.destroy=function(){if(!this.docView)return;Zu(this);// disconnects this.domObserver
this.domSel.destroy();this.destroyPluginViews();if(this.mounted){this.docView.update(this.state.doc,[],of(this),this,-1);this.dom.textContent=""}else if(this.dom.parentNode){this.dom.parentNode.removeChild(this.dom)}this.docView.destroy();this.docView=null;he()};Object.defineProperty(r.prototype,"isDestroyed",{
/**
                    This is true when the view has been
                    [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
                    used anymore).
                    */
get:function(){return this.docView==null},enumerable:false,configurable:true});
/**
                Used for testing.
                */r.prototype.dispatchEvent=function(r){return ea(this,r)};
/**
                @internal
                */r.prototype.domSelection=function(){return this.root.getSelection()};return r}();Tf.prototype.dispatch=function(r){var t=this._props.dispatchTransaction;if(t)t.call(this,r);else this.updateState(this.state.apply(r))};function Af(r){var t=Object.create(null);t.class="ProseMirror";t.contenteditable=String(r.editable);r.someProp("attributes",(function(n){if(typeof n=="function")n=n(r.state);if(n)for(var e in n){if(e=="class")t.class+=" "+n[e];else if(e=="style")t.style=(t.style?t.style+";":"")+n[e];else if(!t[e]&&e!="contenteditable"&&e!="nodeName")t[e]=String(n[e])}}));if(!t.translate)t.translate="no";return[qa.node(0,r.state.doc.content.size,t)]}function Ef(r){if(r.markCursor){var t=document.createElement("img");t.className="ProseMirror-separator";t.setAttribute("mark-placeholder","true");t.setAttribute("alt","");r.cursorWrapper={dom:t,deco:qa.widget(r.state.selection.from,t,{raw:true,marks:r.markCursor})}}else{r.cursorWrapper=null}}function Sf(r){return!r.someProp("editable",(function(t){return t(r.state)===false}))}function Cf(r,t){var n=Math.min(r.$anchor.sharedDepth(r.head),t.$anchor.sharedDepth(t.head));return r.$anchor.start(n)!=t.$anchor.start(n)}function jf(r){var t=Object.create(null);function n(r){for(var n in r)if(!Object.prototype.hasOwnProperty.call(t,n))t[n]=r[n]}r.someProp("nodeViews",n);r.someProp("markViews",n);return t}function Rf(r,t){var n=0,e=0;for(var i in r){if(r[i]!=t[i])return true;n++}for(var u in t)e++;return n!=e}function Lf(r){if(r.spec.state||r.spec.filterTransaction||r.spec.appendTransaction)throw new RangeError("Plugins passed directly to the view must not have a state component")}var Nf={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};var Pf={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'};var If=typeof navigator!="undefined"&&/Mac/.test(navigator.platform);var Hf=typeof navigator!="undefined"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
// Fill in the digit keys
for(var Df=0;Df<10;Df++)Nf[48+Df]=Nf[96+Df]=String(Df);
// The function keys
for(var Df=1;Df<=24;Df++)Nf[Df+111]="F"+Df;
// And the alphabetic keys
for(var Df=65;Df<=90;Df++){Nf[Df]=String.fromCharCode(Df+32);Pf[Df]=String.fromCharCode(Df)}
// For each code that doesn't have a shift-equivalent, copy the base name
for(var zf in Nf)if(!Pf.hasOwnProperty(zf))Pf[zf]=Nf[zf];function Bf(r){
// On macOS, keys held with Shift and Cmd don't reflect the effect of Shift in `.key`.
// On IE, shift effect is never included in `.key`.
var t=If&&r.metaKey&&r.shiftKey&&!r.ctrlKey&&!r.altKey||Hf&&r.shiftKey&&r.key&&r.key.length==1||r.key=="Unidentified";var n=!t&&r.key||(r.shiftKey?Pf:Nf)[r.keyCode]||r.key||"Unidentified";
// Edge sometimes produces wrong names (Issue #3)
if(n=="Esc")n="Escape";if(n=="Del")n="Delete";
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
if(n=="Left")n="ArrowLeft";if(n=="Up")n="ArrowUp";if(n=="Right")n="ArrowRight";if(n=="Down")n="ArrowDown";return n}var Uf=typeof navigator!="undefined"&&/Mac|iP(hone|[oa]d)/.test(navigator.platform);var $f=typeof navigator!="undefined"&&/Win/.test(navigator.platform);function Kf(r){var t=r.split(/-(?!$)/),n=t[t.length-1];if(n=="Space")n=" ";var e,i,u,a;for(var f=0;f<t.length-1;f++){var o=t[f];if(/^(cmd|meta|m)$/i.test(o))a=true;else if(/^a(lt)?$/i.test(o))e=true;else if(/^(c|ctrl|control)$/i.test(o))i=true;else if(/^s(hift)?$/i.test(o))u=true;else if(/^mod$/i.test(o)){if(Uf)a=true;else i=true}else throw new Error("Unrecognized modifier name: "+o)}if(e)n="Alt-"+n;if(i)n="Ctrl-"+n;if(a)n="Meta-"+n;if(u)n="Shift-"+n;return n}function Ff(r){var t=Object.create(null);for(var n in r)t[Kf(n)]=r[n];return t}function Wf(r,t,n){if(n===void 0){n=true}if(t.altKey)r="Alt-"+r;if(t.ctrlKey)r="Ctrl-"+r;if(t.metaKey)r="Meta-"+r;if(n&&t.shiftKey)r="Shift-"+r;return r}
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
            */function qf(r){return new xn({props:{handleKeyDown:Vf(r)}})}
/**
            Given a set of bindings (using the same format as
            [`keymap`](https://prosemirror.net/docs/ref/#keymap.keymap)), return a [keydown
            handler](https://prosemirror.net/docs/ref/#view.EditorProps.handleKeyDown) that handles them.
            */function Vf(r){var t=Ff(r);return function(r,n){var e=Bf(n),i,u=t[Wf(e,n)];if(u&&u(r.state,r.dispatch,r))return true;
// A character key
if(e.length==1&&e!=" "){if(n.shiftKey){
// In case the name was already modified by shift, try looking
// it up without its shift modifier
var a=t[Wf(e,n,false)];if(a&&a(r.state,r.dispatch,r))return true}if((n.altKey||n.metaKey||n.ctrlKey)&&
// Ctrl-Alt may be used for AltGr on Windows
!($f&&n.ctrlKey&&n.altKey)&&(i=Nf[n.keyCode])&&i!=e){
// Try falling back to the keyCode when there's a modifier
// active or the character produced isn't ASCII, and our table
// produces a different name from the the keyCode. See #668,
// #1060, #1529.
var f=t[Wf(i,n)];if(f&&f(r.state,r.dispatch,r))return true}}return false}}var Gf=200;
// :: class<T> A rope sequence is a persistent sequence data structure
// that supports appending, prepending, and slicing without doing a
// full copy. It is represented as a mostly-balanced tree.
var Jf=function r(){};Jf.prototype.append=function r(t){if(!t.length){return this}t=Jf.from(t);return!this.length&&t||t.length<Gf&&this.leafAppend(t)||this.length<Gf&&t.leafPrepend(this)||this.appendInner(t)};
// :: (union<[T], RopeSequence<T>>) → RopeSequence<T>
// Prepend an array or other rope to this one, returning a new rope.
Jf.prototype.prepend=function r(t){if(!t.length){return this}return Jf.from(t).append(this)};Jf.prototype.appendInner=function r(t){return new Yf(this,t)};
// :: (?number, ?number) → RopeSequence<T>
// Create a rope repesenting a sub-sequence of this rope.
Jf.prototype.slice=function r(t,n){if(t===void 0)t=0;if(n===void 0)n=this.length;if(t>=n){return Jf.empty}return this.sliceInner(Math.max(0,t),Math.min(this.length,n))};
// :: (number) → T
// Retrieve the element at the given position from this rope.
Jf.prototype.get=function r(t){if(t<0||t>=this.length){return undefined}return this.getInner(t)};
// :: ((element: T, index: number) → ?bool, ?number, ?number)
// Call the given function for each element between the given
// indices. This tends to be more efficient than looping over the
// indices and calling `get`, because it doesn't have to descend the
// tree for every element.
Jf.prototype.forEach=function r(t,n,e){if(n===void 0)n=0;if(e===void 0)e=this.length;if(n<=e){this.forEachInner(t,n,e,0)}else{this.forEachInvertedInner(t,n,e,0)}};
// :: ((element: T, index: number) → U, ?number, ?number) → [U]
// Map the given functions over the elements of the rope, producing
// a flat array.
Jf.prototype.map=function r(t,n,e){if(n===void 0)n=0;if(e===void 0)e=this.length;var i=[];this.forEach((function(r,n){return i.push(t(r,n))}),n,e);return i};
// :: (?union<[T], RopeSequence<T>>) → RopeSequence<T>
// Create a rope representing the given array, or return the rope
// itself if a rope was given.
Jf.from=function r(t){if(t instanceof Jf){return t}return t&&t.length?new Xf(t):Jf.empty};var Xf=function(r){function t(t){r.call(this);this.values=t}if(r)t.__proto__=r;t.prototype=Object.create(r&&r.prototype);t.prototype.constructor=t;var n={length:{configurable:true},depth:{configurable:true}};t.prototype.flatten=function r(){return this.values};t.prototype.sliceInner=function r(n,e){if(n==0&&e==this.length){return this}return new t(this.values.slice(n,e))};t.prototype.getInner=function r(t){return this.values[t]};t.prototype.forEachInner=function r(t,n,e,i){for(var u=n;u<e;u++){if(t(this.values[u],i+u)===false){return false}}};t.prototype.forEachInvertedInner=function r(t,n,e,i){for(var u=n-1;u>=e;u--){if(t(this.values[u],i+u)===false){return false}}};t.prototype.leafAppend=function r(n){if(this.length+n.length<=Gf){return new t(this.values.concat(n.flatten()))}};t.prototype.leafPrepend=function r(n){if(this.length+n.length<=Gf){return new t(n.flatten().concat(this.values))}};n.length.get=function(){return this.values.length};n.depth.get=function(){return 0};Object.defineProperties(t.prototype,n);return t}(Jf);
// :: RopeSequence
// The empty rope sequence.
Jf.empty=new Xf([]);var Yf=function(r){function t(t,n){r.call(this);this.left=t;this.right=n;this.length=t.length+n.length;this.depth=Math.max(t.depth,n.depth)+1}if(r)t.__proto__=r;t.prototype=Object.create(r&&r.prototype);t.prototype.constructor=t;t.prototype.flatten=function r(){return this.left.flatten().concat(this.right.flatten())};t.prototype.getInner=function r(t){return t<this.left.length?this.left.get(t):this.right.get(t-this.left.length)};t.prototype.forEachInner=function r(t,n,e,i){var u=this.left.length;if(n<u&&this.left.forEachInner(t,n,Math.min(e,u),i)===false){return false}if(e>u&&this.right.forEachInner(t,Math.max(n-u,0),Math.min(this.length,e)-u,i+u)===false){return false}};t.prototype.forEachInvertedInner=function r(t,n,e,i){var u=this.left.length;if(n>u&&this.right.forEachInvertedInner(t,n-u,Math.max(e,u)-u,i+u)===false){return false}if(e<u&&this.left.forEachInvertedInner(t,Math.min(n,u),e,i)===false){return false}};t.prototype.sliceInner=function r(t,n){if(t==0&&n==this.length){return this}var e=this.left.length;if(n<=e){return this.left.slice(t,n)}if(t>=e){return this.right.slice(t-e,n-e)}return this.left.slice(t,e).append(this.right.slice(0,n-e))};t.prototype.leafAppend=function r(n){var e=this.right.leafAppend(n);if(e){return new t(this.left,e)}};t.prototype.leafPrepend=function r(n){var e=this.left.leafPrepend(n);if(e){return new t(e,this.right)}};t.prototype.appendInner=function r(n){if(this.left.depth>=Math.max(this.right.depth,n.depth)+1){return new t(this.left,new t(this.right,n))}return new t(this,n)};return t}(Jf);
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
var Qf=500;var Zf=/** @class */function(){function r(r,t){this.items=r;this.eventCount=t}
// Pop the latest event off the branch's history and apply it
// to a document transform.
r.prototype.popEvent=function(t,n){var e=this;if(this.eventCount==0)return null;var i=this.items.length;for(;;i--){var u=this.items.get(i-1);if(u.selection){--i;break}}var a,f;if(n){a=this.remapping(i,this.items.length);f=a.maps.length}var o=t.tr;var s,l;var v=[],c=[];this.items.forEach((function(t,n){if(!t.step){if(!a){a=e.remapping(i,n+1);f=a.maps.length}f--;c.push(t);return}if(a){c.push(new to(t.map));var u=t.step.map(a.slice(f)),h=void 0;if(u&&o.maybeStep(u).doc){h=o.mapping.maps[o.mapping.maps.length-1];v.push(new to(h,undefined,undefined,v.length+c.length))}f--;if(h)a.appendMap(h,f)}else{o.maybeStep(t.step)}if(t.selection){s=a?t.selection.map(a.slice(f)):t.selection;l=new r(e.items.slice(0,i).append(c.reverse().concat(v)),e.eventCount-1);return false}}),this.items.length,0);return{remaining:l,transform:o,selection:s}};
// Create a new branch with the given transform added.
r.prototype.addTransform=function(t,n,e,i){var u=[],a=this.eventCount;var f=this.items,o=!i&&f.length?f.get(f.length-1):null;for(var s=0;s<t.steps.length;s++){var l=t.steps[s].invert(t.docs[s]);var v=new to(t.mapping.maps[s],l,n),c=void 0;if(c=o&&o.merge(v)){v=c;if(s)u.pop();else f=f.slice(0,f.length-1)}u.push(v);if(n){a++;n=undefined}if(!i)o=v}var h=a-e.depth;if(h>eo){f=ro(f,h);a-=h}return new r(f.append(u),a)};r.prototype.remapping=function(r,t){var n=new Gr;this.items.forEach((function(t,e){var i=t.mirrorOffset!=null&&e-t.mirrorOffset>=r?n.maps.length-t.mirrorOffset:undefined;n.appendMap(t.map,i)}),r,t);return n};r.prototype.addMaps=function(t){if(this.eventCount==0)return this;return new r(this.items.append(t.map((function(r){return new to(r)}))),this.eventCount)};
// When the collab module receives remote changes, the history has
// to know about those, so that it can adjust the steps that were
// rebased on top of the remote changes, and include the position
// maps for the remote changes in its array of items.
r.prototype.rebased=function(t,n){if(!this.eventCount)return this;n=Math.min(this.items.length,n);var e=[],i=this.items.length-n;var u=t.mapping;var a=t.steps.length;var f=this.eventCount;this.items.forEach((function(r){if(r.selection)f--}),i);var o=n;this.items.forEach((function(r){var n=u.getMirror(--o);if(n==null)return;a=Math.min(a,n);var i=u.maps[n];if(r.step){var s=t.steps[n].invert(t.docs[n]);var l=r.selection&&r.selection.map(u.slice(o+1,n));if(l)f++;e.push(new to(i,s,l))}else{e.push(new to(i))}}),i);var s=[];for(var l=n;l<a;l++)s.push(new to(u.maps[l]));var v=this.items.slice(0,i).append(s).append(e);var c=new r(v,f);if(c.emptyItemCount()>Qf)c=c.compress(this.items.length-e.length);return c};r.prototype.emptyItemCount=function(){var r=0;this.items.forEach((function(t){if(!t.step)r++}));return r};
// Compressing a branch means rewriting it to push the air (map-only
// items) out. During collaboration, these naturally accumulate
// because each remote change adds one. The `upto` argument is used
// to ensure that only the items below a given level are compressed,
// because `rebased` relies on a clean, untouched set of items in
// order to associate old items with rebased steps.
r.prototype.compress=function(t){if(t===void 0){t=this.items.length}var n=this.remapping(0,t),e=n.maps.length;var i=[],u=0;this.items.forEach((function(r,a){if(a>=t){i.push(r);if(r.selection)u++}else if(r.step){var f=r.step.map(n.slice(e)),o=f&&f.getMap();e--;if(o)n.appendMap(o,e);if(f){var s=r.selection&&r.selection.map(n.slice(e));if(s)u++;var l=new to(o.invert(),f,s),v=void 0,c=i.length-1;if(v=i.length&&i[c].merge(l))i[c]=v;else i.push(l)}}else if(r.map){e--}}),this.items.length,0);return new r(Jf.from(i.reverse()),u)};return r}();Zf.empty=new Zf(Jf.empty,0);function ro(r,t){var n;r.forEach((function(r,e){if(r.selection&&t--==0){n=e;return false}}));return r.slice(n)}var to=/** @class */function(){function r(
// The (forward) step map for this item.
r,
// The inverted step
t,
// If this is non-null, this item is the start of a group, and
// this selection is the starting selection for the group (the one
// that was active before the first step was applied)
n,
// If this item is the inverse of a previous mapping on the stack,
// this points at the inverse's offset
e){this.map=r;this.step=t;this.selection=n;this.mirrorOffset=e}r.prototype.merge=function(t){if(this.step&&t.step&&!t.selection){var n=t.step.merge(this.step);if(n)return new r(n.getMap().invert(),n,this.selection)}};return r}();
// The value of the state field that tracks undo/redo history for that
// state. Will be stored in the plugin state when the history plugin
// is active.
var no=/** @class */function(){function r(r,t,n,e,i){this.done=r;this.undone=t;this.prevRanges=n;this.prevTime=e;this.prevComposition=i}return r}();var eo=20;
// Record a transformation in undo history.
function io(r,t,n,e){var i=n.getMeta(po),u;if(i)return i.historyState;if(n.getMeta(bo))r=new no(r.done,r.undone,null,0,-1);var a=n.getMeta("appendedTransaction");if(n.steps.length==0){return r}else if(a&&a.getMeta(po)){if(a.getMeta(po).redo)return new no(r.done.addTransform(n,undefined,e,co(t)),r.undone,ao(n.mapping.maps),r.prevTime,r.prevComposition);else return new no(r.done,r.undone.addTransform(n,undefined,e,co(t)),null,r.prevTime,r.prevComposition)}else if(n.getMeta("addToHistory")!==false&&!(a&&a.getMeta("addToHistory")===false)){
// Group transforms that occur in quick succession into one event.
var f=n.getMeta("composition");var o=r.prevTime==0||!a&&r.prevComposition!=f&&(r.prevTime<(n.time||0)-e.newGroupDelay||!uo(n,r.prevRanges));var s=a?fo(r.prevRanges,n.mapping):ao(n.mapping.maps);return new no(r.done.addTransform(n,o?t.selection.getBookmark():undefined,e,co(t)),Zf.empty,s,n.time,f==null?r.prevComposition:f)}else if(u=n.getMeta("rebased")){
// Used by the collab module to tell the history that some of its
// content has been rebased.
return new no(r.done.rebased(n,u),r.undone.rebased(n,u),fo(r.prevRanges,n.mapping),r.prevTime,r.prevComposition)}else{return new no(r.done.addMaps(n.mapping.maps),r.undone.addMaps(n.mapping.maps),fo(r.prevRanges,n.mapping),r.prevTime,r.prevComposition)}}function uo(r,t){if(!t)return false;if(!r.docChanged)return true;var n=false;r.mapping.maps[0].forEach((function(r,e){for(var i=0;i<t.length;i+=2)if(r<=t[i+1]&&e>=t[i])n=true}));return n}function ao(r){var t=[];for(var n=r.length-1;n>=0&&t.length==0;n--)r[n].forEach((function(r,n,e,i){return t.push(e,i)}));return t}function fo(r,t){if(!r)return null;var n=[];for(var e=0;e<r.length;e+=2){var i=t.map(r[e],1),u=t.map(r[e+1],-1);if(i<=u)n.push(i,u)}return n}
// Get a selection (valid in state.doc) at the end of the first change
// that we can determine a position for. Fall back to state.selection.
function oo(r,t){var n=function(n){var e=t.mapping.maps[n],i=-1;e.forEach((function(r,t){return i=t}));if(i<0){var u=t.steps[n];if(u instanceof Zr||u instanceof rt)i=u.to}if(i>-1)return{value:rn.near(r.doc.resolve(i))}};for(var e=0;e<t.steps.length;e++){var i=n(e);if(typeof i==="object")return i.value}return r.selection}
// Apply the latest event from one branch to the document and shift the event
// onto the other branch.
function so(r,t,n){var e=co(t);var i=po.get(t).spec.config;var u=(n?r.undone:r.done).popEvent(t,e);if(!u)return null;var a=u.selection.resolve(u.transform.doc);var f=(n?r.done:r.undone).addTransform(u.transform,oo(t,u.transform).getBookmark(),i,e);var o=new no(n?f:u.remaining,n?u.remaining:f,null,0,-1);return u.transform.setSelection(a).setMeta(po,{redo:n,historyState:o})}var lo=false,vo=null;
// Check whether any plugin in the given state has a
// `historyPreserveItems` property in its spec, in which case we must
// preserve steps exactly as they came in, so that they can be
// rebased.
function co(r){var t=r.plugins;if(vo!=t){lo=false;vo=t;for(var n=0;n<t.length;n++)if(t[n].spec.historyPreserveItems){lo=true;break}}return lo}
/**
            Set a flag on the given transaction that will prevent further steps
            from being appended to an existing history event (so that they
            require a separate undo command to undo).
            */function ho(r){return r.setMeta(bo,true)}var po=new Tn("history");var bo=new Tn("closeHistory");
/**
            Returns a plugin that enables the undo history for an editor. The
            plugin will track undo and redo stacks, which can be used with the
            [`undo`](https://prosemirror.net/docs/ref/#history.undo) and [`redo`](https://prosemirror.net/docs/ref/#history.redo) commands.

            You can set an `"addToHistory"` [metadata
            property](https://prosemirror.net/docs/ref/#state.Transaction.setMeta) of `false` on a transaction
            to prevent it from being rolled back by undo.
            */function go(r){if(r===void 0){r={}}r={depth:r.depth||100,newGroupDelay:r.newGroupDelay||500};return new xn({key:po,state:{init:function(){return new no(Zf.empty,Zf.empty,null,0,-1)},apply:function(t,n,e){return io(n,e,t,r)}},config:r,props:{handleDOMEvents:{beforeinput:function(r,t){var n=t.inputType;var e=n=="historyUndo"?wo:n=="historyRedo"?yo:null;if(!e||!r.editable)return false;t.preventDefault();return e(r.state,r.dispatch)}}}})}function mo(r,t){return function(n,e){var i=po.getState(n);if(!i||(r?i.undone:i.done).eventCount==0)return false;if(e){var u=so(i,n,r);if(u)e(t?u.scrollIntoView():u)}return true}}
/**
            A command function that undoes the last change, if any.
            */var wo=mo(false,true);
/**
            A command function that redoes the last undone change, if any.
            */var yo=mo(true,true);
/**
            Returns true if the given transaction was generated by the history
            plugin.
            */function ko(r){return r.getMeta(po)!=null}
//#region src/helpers/createChainableState.ts
/**
            * Takes a Transaction & Editor State and turns it into a chainable state object
            * @param config The transaction and state to create the chainable state from
            * @returns A chainable Editor state object
            */function _o(r){var t=r.state,n=r.transaction;var e=n.selection;var i=n.doc;var u=n.storedMarks;return __assign(__assign({},t),{apply:t.apply.bind(t),applyTransaction:t.applyTransaction.bind(t),plugins:t.plugins,schema:t.schema,reconfigure:t.reconfigure.bind(t),toJSON:t.toJSON.bind(t),get storedMarks(){return u},get selection(){return e},get doc(){return i},get tr(){e=n.selection;i=n.doc;u=n.storedMarks;return n}})}
//#endregion
//#region src/CommandManager.ts
var xo=/** @class */function(){function r(r){this.editor=r.editor;this.rawCommands=this.editor.extensionManager.commands;this.customState=r.state}Object.defineProperty(r.prototype,"hasCustomState",{get:function(){return!!this.customState},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"state",{get:function(){return this.customState||this.editor.state},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"commands",{get:function(){var r=this;var t=this,n=t.rawCommands,e=t.editor,i=t.state;var u=e.view;var a=i.tr;var f=this.buildProps(a);return Object.fromEntries(Object.entries(n).map((function(t){var n=t[0],e=t[1];var i=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}var i=e.apply(void 0,t)(f);if(!a.getMeta("preventDispatch")&&!r.hasCustomState)u.dispatch(a);return i};return[n,i]})))},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"chain",{get:function(){var r=this;return function(){return r.createChain()}},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"can",{get:function(){var r=this;return function(){return r.createCan()}},enumerable:false,configurable:true});r.prototype.createChain=function(r,t){var n=this;if(t===void 0){t=true}var e=this,i=e.rawCommands,u=e.editor,a=e.state;var f=u.view;var o=[];var s=!!r;var l=r||a.tr;var v=function(){if(!s&&t&&!l.getMeta("preventDispatch")&&!n.hasCustomState)f.dispatch(l);return o.every((function(r){return r===true}))};var c=__assign(__assign({},Object.fromEntries(Object.entries(i).map((function(r){var e=r[0],i=r[1];var u=function(){var r=[];for(var e=0;e<arguments.length;e++){r[e]=arguments[e]}var u=n.buildProps(l,t);var a=i.apply(void 0,r)(u);o.push(a);return c};return[e,u]})))),{run:v});return c};
/**
                * Creates a chain that safely returns `false` when run.
                * @returns A non-dispatching command chain.
                * @example
                * const chain = CommandManager.createFakeChain()
                * chain.focus().run() // false
                */r.createFakeChain=function(){var r=new Proxy({},{get:function(t,n){if(n==="then")return;if(n==="run")return function(){return false};return function(){return r}}});return r};r.prototype.createCan=function(r){var t=this;var n=this,e=n.rawCommands,i=n.state;var u=false;var a=r||i.tr;var f=this.buildProps(a,u);return __assign(__assign({},Object.fromEntries(Object.entries(e).map((function(r){var t=r[0],n=r[1];return[t,function(){var r=[];for(var t=0;t<arguments.length;t++){r[t]=arguments[t]}return n.apply(void 0,r)(__assign(__assign({},f),{dispatch:void 0}))}]})))),{chain:function(){return t.createChain(a,u)}})};
/**
                * Creates capability checks that safely return `false`.
                * @returns A non-dispatching capability checker.
                * @example
                * const can = CommandManager.createFallbackCan()
                * can.focus() // false
                */r.createFallbackCan=function(){var t=r.createFakeChain();return new Proxy({chain:function(){return t}},{get:function(r,t){if(t==="then")return;if(t==="chain")return r.chain;return function(){return false}}})};r.prototype.buildProps=function(r,t){var n=this;if(t===void 0){t=true}var e=this,i=e.rawCommands,u=e.editor,a=e.state;var f=u.view;var o={tr:r,editor:u,view:f,state:_o({state:a,transaction:r}),dispatch:t?function(){return void 0}:void 0,chain:function(){return n.createChain(r,t)},can:function(){return n.createCan(r)},get commands(){return Object.fromEntries(Object.entries(i).map((function(r){var t=r[0],n=r[1];return[t,function(){var r=[];for(var t=0;t<arguments.length;t++){r[t]=arguments[t]}return n.apply(void 0,r)(o)}]})))}};return o};return r}();
//#endregion
//#region src/commands/blur.ts
var Mo=function(){return function(r){var t=r.editor,n=r.view;requestAnimationFrame((function(){if(!t.isDestroyed){var r;n.dom.blur();(r=window)===null||r===void 0||(r=r.getSelection())===null||r===void 0||r.removeAllRanges()}}));return true}};
//#endregion
//#region src/commands/clearContent.ts
var Oo=function(r){if(r===void 0){r=true}return function(t){var n=t.commands;return n.setContent("",{emitUpdate:r})}};
//#endregion
//#region src/commands/clearNodes.ts
var To=function(){return function(r){var t=r.tr,n=r.dispatch;var e=t.selection;var i=e.ranges;if(!n)return true;var u=t.mapping.maps.length;i.forEach((function(r){var n=r.$from,e=r.$to;var i=n.pos;var a=e.pos;var f=t.mapping.slice(u);var o=1;t.doc.nodesBetween(f.map(i),f.map(a),(function(r,n){o=Math.max(o,t.doc.resolve(n).depth+1)}));var s=function(r){var n=t.doc;var e=t.mapping.maps.length;var f=t.mapping.slice(u);var o=e;var s=t.mapping.slice(e);var l=f.map(i);var v=f.map(a);n.nodesBetween(l,v,(function(r,n){if(r.type.isText)return;if(t.mapping.maps.length!==o){o=t.mapping.maps.length;s=t.mapping.slice(e)}var i=t.doc.resolve(s.map(n));var u=t.doc.resolve(s.map(n+r.nodeSize));var a=i.blockRange(u);if(!a)return;var f=ct(a);if(r.type.isTextblock){var l=i.parent.contentMatchAt(i.index()).defaultType;var v=t.doc.nodeAt(a.start);if(l&&v&&!v.hasMarkup(l)&&l.validContent(v.content))t.setNodeMarkup(a.start,l)}if(f||f===0)t.lift(a,f)}));if(t.doc.eq(n))return"break"};for(var l=0;l<o;l+=1){var v=s(l);if(v==="break")break}}));return true}};
//#endregion
//#region src/commands/command.ts
var Ao=function(r){return function(t){return r(t)}};
//#endregion
//#region src/commands/createParagraphNear.ts
var Eo=function(){return function(r){var t=r.state,n=r.dispatch;return Wn(t,n)}};
//#endregion
//#region src/commands/cut.ts
var So=function(r,t){return function(n){var e=n.editor,i=n.tr;var u=e.state;var a=u.doc.slice(r.from,r.to);i.deleteRange(r.from,r.to);var f=i.mapping.map(t);i.insert(f,a.content);i.setSelection(new un(i.doc.resolve(Math.max(f-1,0))));return true}};
//#endregion
//#region src/commands/deleteCurrentNode.ts
var Co=function(){return function(r){var t=r.tr,n=r.dispatch;var e=t.selection;var i=e.$anchor.node();if(i.content.size>0)return false;var u=t.selection.$anchor;for(var a=u.depth;a>0;a-=1)if(u.node(a).type===i.type){if(n){var f=u.before(a);var o=u.after(a);t.delete(f,o).scrollIntoView()}return true}return false}};
//#endregion
//#region src/helpers/getNodeType.ts
function jo(r,t){if(typeof r==="string"){if(!t.nodes[r])throw Error("There is no node type named '".concat(r,"'. Maybe you forgot to add the extension?"));return t.nodes[r]}return r}
//#endregion
//#region src/commands/deleteNode.ts
var Ro=function(r){return function(t){var n=t.tr,e=t.state,i=t.dispatch;var u=jo(r,e.schema);var a=n.selection.$anchor;for(var f=a.depth;f>0;f-=1)if(a.node(f).type===u){if(i){var o=a.before(f);var s=a.after(f);n.delete(o,s).scrollIntoView()}return true}return false}};
//#endregion
//#region src/commands/deleteRange.ts
var Lo=function(r){return function(t){var n=t.tr,e=t.dispatch;var i=r.from,u=r.to;if(e)n.delete(i,u);return true}};
//#endregion
//#region src/commands/deleteSelection.ts
/**
            * Check if a node has text content based on its content specification.
            * Returns true if the node's content spec matches text* or text+ patterns.
            */var No=function(r){if(!r.content)return false;return/^text(\*|\+)/.test(r.content)};
/**
            * Expand selection position for a specific side (left or right) to handle inline text nodes.
            * This function checks if the position is within an inline node with text content and
            * expands it to include the entire node boundaries for proper deletion.
            * @param $pos - The resolved position to expand
            * @param schema - The ProseMirror schema
            * @param side - Which side to expand ('left' or 'right')
            * @returns The expanded position for deletion
            */var Po=function(r,t,n){if(!r.parent.isInline)return r.pos;if(n==="left"&&r.pos>r.start()||n==="right"&&r.pos<r.end())return r.pos;var e=t.nodes[r.parent.type.name].spec;if(!No(e))return r.pos;return n==="left"?r.start()-1:r.end()+1};
/**
            * Expand selection range to properly handle deletion of inline text nodes.
            * Inline text nodes don't collapse correctly when text inside is deleted,
            * so we need to expand the selection to include the entire node.
            * See: https://code.haverbeke.berlin/prosemirror/prosemirror/issues/1365
            */var Io=function(r,t,n){return{from:Po(r,n,"left"),to:Po(t,n,"right")}};var Ho=function(){return function(r){var t=r.state,n=r.dispatch;if(t.selection.empty)return false;if(n){var e=t.tr;var i=t.selection.ranges;var u=t.selection instanceof un?t.selection.$from.marksAcross(t.selection.$to):null;var a=e.steps.length;i.forEach((function(r){var n=e.mapping.slice(a);var i=e.doc.resolve(n.map(r.$from.pos));var u=e.doc.resolve(n.map(r.$to.pos));var f=Io(i,u,t.schema),o=f.from,s=f.to;e.deleteRange(o,s)}));if(!e.selection.empty)e.setSelection(un.near(e.doc.resolve(e.selection.from)));if(u)e.ensureMarks(u);e.scrollIntoView();n(e)}return true}};
//#endregion
//#region src/commands/enter.ts
var Do=function(){return function(r){var t=r.commands;return t.keyboardShortcut("Enter")}};
//#endregion
//#region src/commands/exitCode.ts
var zo=function(){return function(r){var t=r.state,n=r.dispatch;return Fn(t,n)}};
//#endregion
//#region src/utilities/isRegExp.ts
function Bo(r){return Object.prototype.toString.call(r)==="[object RegExp]"}
//#endregion
//#region src/utilities/objectIncludes.ts
/**
            * Check if object1 includes object2
            * @param object1 Object
            * @param object2 Object
            */function Uo(r,t,n){if(n===void 0){n={strict:true}}var e=Object.keys(t);if(!e.length)return true;return e.every((function(e){if(n.strict)return t[e]===r[e];if(Bo(t[e]))return t[e].test(r[e]);return t[e]===r[e]}))}
//#endregion
//#region src/helpers/getMarkRange.ts
function $o(r,t,n){if(n===void 0){n={}}return r.find((function(r){return r.type===t&&Uo(Object.fromEntries(Object.keys(n).map((function(t){return[t,r.attrs[t]]}))),n)}))}function Ko(r,t,n){if(n===void 0){n={}}return!!$o(r,t,n)}
/**
            * Get the range of a mark at a resolved position.
            */function Fo(r,t,n){if(!r||!t)return;var e=r.parent.childAfter(r.parentOffset);if(!e.node||!e.node.marks.some((function(r){return r.type===t})))e=r.parent.childBefore(r.parentOffset);if(!e.node||!e.node.marks.some((function(r){return r.type===t})))return;if(!n){var i=e.node.marks.find((function(r){return r.type===t}));if(i)n=i.attrs}if(!$o(__spreadArray([],e.node.marks,true),t,n))return;var u=e.index;var a=r.start()+e.offset;var f=u+1;var o=a+e.node.nodeSize;while(u>0&&Ko(__spreadArray([],r.parent.child(u-1).marks,true),t,n)){u-=1;a-=r.parent.child(u).nodeSize}while(f<r.parent.childCount&&Ko(__spreadArray([],r.parent.child(f).marks,true),t,n)){o+=r.parent.child(f).nodeSize;f+=1}return{from:a,to:o}}
//#endregion
//#region src/helpers/getMarkType.ts
function Wo(r,t){if(typeof r==="string"){if(!t.marks[r])throw Error("There is no mark type named '".concat(r,"'. Maybe you forgot to add the extension?"));return t.marks[r]}return r}
//#endregion
//#region src/commands/extendMarkRange.ts
var qo=function(r,t){return function(n){var e=n.tr,i=n.state,u=n.dispatch;var a=Wo(r,i.schema);var f=e.doc,o=e.selection;var s=o.$from,l=o.from,v=o.to;if(u){var c=Fo(s,a,t);if(c&&c.from<=l&&c.to>=v){var h=un.create(f,c.from,c.to);e.setSelection(h)}}return true}};
//#endregion
//#region src/commands/first.ts
var Vo=function(r){return function(t){var n=typeof r==="function"?r(t):r;for(var e=0;e<n.length;e+=1)if(n[e](t))return true;return false}};
//#endregion
//#region src/helpers/isTextSelection.ts
function Go(r){return r instanceof un}
//#endregion
//#region src/utilities/minMax.ts
function Jo(r,t,n){if(r===void 0){r=0}if(t===void 0){t=0}if(n===void 0){n=0}return Math.min(Math.max(r,t),n)}
//#endregion
//#region src/helpers/resolveFocusPosition.ts
function Xo(r,t){if(t===void 0){t=null}if(!t)return null;var n=rn.atStart(r);var e=rn.atEnd(r);if(t==="start"||t===true)return n;if(t==="end")return e;var i=n.from;var u=e.to;if(t==="all")return un.create(r,Jo(0,i,u),Jo(r.content.size,i,u));return un.create(r,Jo(t,i,u),Jo(t,i,u))}
//#endregion
//#region src/utilities/isAndroid.ts
function Yo(){return["Android"].includes(navigator.platform)||/android/i.test(navigator.userAgent)}
//#endregion
//#region src/utilities/isiOS.ts
function Qo(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}
//#endregion
//#region src/utilities/isSafari.ts
/**
            * Detects if the current browser is Safari (but not iOS Safari or Chrome).
            * @returns `true` if the browser is Safari, `false` otherwise.
            * @example
            * if (isSafari()) {
            *   // Safari-specific handling
            * }
            */function Zo(){return typeof navigator!=="undefined"?/^((?!chrome|android).)*safari/i.test(navigator.userAgent):false}
//#endregion
//#region src/commands/focus.ts
var rs=function(r,t){if(r===void 0){r=null}if(t===void 0){t={}}return function(n){var e=n.editor,i=n.view,u=n.tr,a=n.dispatch;t=__assign({scrollIntoView:true},t);var f=function(){if(Qo()||Yo())i.dom.focus();if(Zo()&&!Qo()&&!Yo())i.dom.focus({preventScroll:true});requestAnimationFrame((function(){if(!e.isDestroyed){i.focus();if(t===null||t===void 0?void 0:t.scrollIntoView)e.commands.scrollIntoView()}}))};try{if(i.hasFocus()&&r===null||r===false)return true}catch(r){return false}if(a&&r===null&&!Go(e.state.selection)){f();return true}var o=Xo(u.doc,r)||e.state.selection;var s=e.state.selection.eq(o);if(a){if(!s)u.setSelection(o);if(s&&u.storedMarks)u.setStoredMarks(u.storedMarks);f()}return true}};
//#endregion
//#region src/commands/forEach.ts
var ts=function(r,t){return function(n){return r.every((function(r,e){return t(r,__assign(__assign({},n),{index:e}))}))}};
//#endregion
//#region src/commands/insertContent.ts
var ns=function(r,t){return function(n){var e=n.tr,i=n.commands;return i.insertContentAt({from:e.selection.from,to:e.selection.to},r,t)}};
//#endregion
//#region src/utilities/elementFromString.ts
var es=function(r){var t=r.childNodes;for(var n=t.length-1;n>=0;n-=1){var e=t[n];if(e.nodeType===3&&e.nodeValue&&/^(\n\s\s|\n)$/.test(e.nodeValue))r.removeChild(e);else if(e.nodeType===1)es(e)}return r};function is(r){if(typeof window==="undefined")throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");var t="<body>".concat(r,"</body>");var n=(new window.DOMParser).parseFromString(t,"text/html").body;return es(n)}
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
            */function us(r){return typeof(r===null||r===void 0?void 0:r.nodesBetween)==="function"}
//#endregion
//#region src/helpers/createNodeFromContent.ts
/**
            * Takes a JSON or HTML content and creates a Prosemirror node or fragment from it.
            * @param content The JSON or HTML content to create the node from
            * @param schema The Prosemirror schema to use for the node
            * @param options Options for the parser
            * @returns The created Prosemirror node or fragment
            */function as(r,t,n){if(us(r))return r;var e=typeof r==="object"&&r!==null;n=__assign({slice:true,parseOptions:{}},n);var i=typeof r==="string";if(e)try{if(Array.isArray(r)&&r.length>0)return p.fromArray(r.map((function(r){return t.nodeFromJSON(r)})));var u=t.nodeFromJSON(r);if(n.errorOnInvalidContent)u.check();return u}catch(e){if(n.errorOnInvalidContent)throw new Error("[tiptap error]: Invalid JSON content",{cause:e});console.warn("[tiptap warn]: Invalid content.","Passed value:",r,"Error:",e);return as("",t,n)}if(i){if(n.errorOnInvalidContent){var a=false;var f="";var o=new cr({topNode:t.spec.topNode,marks:t.spec.marks,nodes:t.spec.nodes.append({__tiptap__private__unknown__catch__all__node:{content:"inline*",group:"block",parseDOM:[{tag:"*",getAttrs:function(r){a=true;f=typeof r==="string"?r:r.outerHTML;return null}}]}})});if(n.slice)br.fromSchema(o).parseSlice(is(r),n.parseOptions);else br.fromSchema(o).parse(is(r),n.parseOptions);if(n.errorOnInvalidContent&&a)throw new Error("[tiptap error]: Invalid HTML content",{cause:new Error("Invalid element found: ".concat(f))})}var s=br.fromSchema(t);if(n.slice)return s.parseSlice(is(r),n.parseOptions).content;return s.parse(is(r),n.parseOptions)}return as("",t,n)}
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
            */function fs(r){return!("type"in r)}
//#endregion
//#region src/helpers/selectionToInsertionEnd.ts
function ss(r,t,n){var e=r.steps.length-1;if(e<t)return;var i=r.steps[e];if(!(i instanceof ut||i instanceof at))return;var u=r.mapping.maps[e];var a=0;u.forEach((function(r,t,n,e){if(a===0)a=e}));r.setSelection(rn.near(r.doc.resolve(a),n))}
//#endregion
//#region src/commands/insertContentAt.ts
var ls=function(r,t,n){return function(e){var i=e.tr,u=e.dispatch,a=e.editor;if(u){n=__assign({parseOptions:a.options.parseOptions,updateSelection:true,applyInputRules:false,applyPasteRules:false},n);var f=void 0;var o=function(r){a.emit("contentError",{editor:a,error:r,disableCollaboration:function(){if("collaboration"in a.storage&&typeof a.storage.collaboration==="object"&&a.storage.collaboration)a.storage.collaboration.isDisabled=true}})};var s=__assign({preserveWhitespace:"full"},n.parseOptions);if(!n.errorOnInvalidContent&&!a.options.enableContentCheck&&a.options.emitContentError)try{as(t,a.schema,{parseOptions:s,errorOnInvalidContent:true})}catch(r){o(r)}try{var l;f=as(t,a.schema,{parseOptions:s,errorOnInvalidContent:(l=n.errorOnInvalidContent)!==null&&l!==void 0?l:a.options.enableContentCheck})}catch(r){o(r);return false}var v=typeof r==="number"?{from:r,to:r}:{from:r.from,to:r.to},c=v.from,h=v.to;var d=true;var b=true;var g=fs(f)?f.content:[f];g.forEach((function(r){r.check();d=d?r.isText&&r.marks.length===0:false;b=b?r.isBlock:false}));if(c===h&&b){var m=i.doc.resolve(c).parent;if(m.isTextblock&&!m.type.spec.code&&!m.childCount){c-=1;h+=1}}var w=void 0;if(d){if(Array.isArray(t))w=t.map((function(r){return r.text||""})).join("");else if(us(t))w=g.map((function(r){var t;return(t=r.text)!==null&&t!==void 0?t:""})).join("");else if(typeof t==="object"&&!!t&&!!t.text)w=t.text;else w=t;i.insertText(w,c,h)}else{w=p.from(g);var y=i.doc.resolve(c);var k=y.node();var _=y.parentOffset===0;var x=k.isText||k.isTextblock;var M=k.content.size>0;if(_&&x&&M&&b)c=Math.max(0,c-1);i.replaceWith(c,h,g)}if(n.updateSelection)ss(i,i.steps.length-1,-1);if(n.applyInputRules)i.setMeta("applyInputRules",{from:c,text:w});if(n.applyPasteRules)i.setMeta("applyPasteRules",{from:c,text:w})}return true}};
//#endregion
//#region src/helpers/defaultBlockAt.ts
/**
            * Gets the default block type at a given match
            * @param match The content match to get the default block type from
            * @returns The default block type or null
            */function vs(r){for(var t=0;t<r.edgeCount;t+=1){var n=r.edge(t).type;if(n.isTextblock&&!n.hasRequiredAttrs())return n}return null}
//#endregion
//#region src/commands/insertDefaultBlock.ts
var cs=function(r){if(r===void 0){r={}}return function(t){var n=t.tr,e=t.dispatch,i=t.editor;var u=r.pos,a=r.attrs,f=r.content,o=r.updateSelection,s=o===void 0?true:o;var l;if(typeof u==="number")l=n.doc.resolve(u);else if(u)l=u;else l=n.selection.$from;var v=vs(l.parent.contentMatchAt(l.index()));if(!v)return false;var c=Object.keys(v.spec.attrs||{});var h=a?Object.fromEntries(Object.entries(a).filter((function(r){var t=r[0];return c.includes(t)}))):{};var d;if(f){var p=as(f,i.schema);d=v.createAndFill(h,p)}else d=v.createAndFill(h);if(!d)return false;if(e){n.insert(l.pos,d);if(s)ss(n,n.steps.length-1,-1)}return true}};
//#endregion
//#region src/commands/join.ts
var hs=function(){return function(r){var t=r.state,n=r.dispatch;return zn(t,n)}};var ds=function(){return function(r){var t=r.state,n=r.dispatch;return Bn(t,n)}};var ps=function(){return function(r){var t=r.state,n=r.dispatch;return En(t,n)}};var bs=function(){return function(r){var t=r.state,n=r.dispatch;return In(t,n)}};
//#endregion
//#region src/commands/canJoinItemsAt.ts
var gs=function(r,t){var n=r.resolve(t);var e=n.nodeBefore;var i=n.nodeAfter;if(!e||!i)return false;return!e.type.spec.isolating&&!i.type.spec.isolating};
//#endregion
//#region src/commands/joinItemBackward.ts
var ms=function(){return function(r){var t=r.state,n=r.dispatch,e=r.tr;try{var i=St(t.doc,t.selection.$from.pos,-1);if(i===null||i===void 0)return false;if(!gs(t.doc,i))return false;e.join(i,2);if(n)n(e);return true}catch(r){return false}}};
//#endregion
//#region src/commands/joinItemForward.ts
var ws=function(){return function(r){var t=r.state,n=r.dispatch,e=r.tr;try{var i=St(t.doc,t.selection.$from.pos,1);if(i===null||i===void 0)return false;if(!gs(t.doc,i))return false;e.join(i,2);if(n)n(e);return true}catch(r){return false}}};
//#endregion
//#region src/commands/joinTextblockBackward.ts
var ys=function(){return function(r){var t=r.state,n=r.dispatch;return Sn(t,n)}};
//#endregion
//#region src/commands/joinTextblockForward.ts
var ks=function(){return function(r){var t=r.state,n=r.dispatch;return Cn(t,n)}};
//#endregion
//#region src/utilities/isMacOS.ts
function _s(){return typeof navigator!=="undefined"?/Mac/.test(navigator.platform):false}
//#endregion
//#region src/commands/keyboardShortcut.ts
function xs(r){var t=r.split(/-(?!$)/);var n=t[t.length-1];if(n==="Space")n=" ";var e;var i;var u;var a;for(var f=0;f<t.length-1;f+=1){var o=t[f];if(/^(cmd|meta|m)$/i.test(o))a=true;else if(/^a(lt)?$/i.test(o))e=true;else if(/^(c|ctrl|control)$/i.test(o))i=true;else if(/^s(hift)?$/i.test(o))u=true;else if(/^mod$/i.test(o)){if(Qo()||_s())a=true;else i=true}else throw new Error("Unrecognized modifier name: ".concat(o))}if(e)n="Alt-".concat(n);if(i)n="Ctrl-".concat(n);if(a)n="Meta-".concat(n);if(u)n="Shift-".concat(n);return n}var Ms=function(r){return function(t){var n=t.editor,e=t.view,i=t.tr,u=t.dispatch;var a=xs(r).split(/-(?!$)/);var f=a.find((function(r){return!["Alt","Ctrl","Meta","Shift"].includes(r)}));var o=new KeyboardEvent("keydown",{key:f==="Space"?" ":f,altKey:a.includes("Alt"),ctrlKey:a.includes("Ctrl"),metaKey:a.includes("Meta"),shiftKey:a.includes("Shift"),bubbles:true,cancelable:true});var s=n.captureTransaction((function(){e.someProp("handleKeyDown",(function(r){return r(e,o)}))}));s===null||s===void 0||s.steps.forEach((function(r){var t=r.map(i.mapping);if(t&&u)i.maybeStep(t)}));return true}};
//#endregion
//#region src/helpers/isNodeActive.ts
function Os(r,t,n){if(n===void 0){n={}}var e=r.selection,i=e.from,u=e.to,a=e.empty;var f=t?jo(t,r.schema):null;var o=[];r.doc.nodesBetween(i,u,(function(r,t){if(r.isText)return;var n=Math.max(i,t);var e=Math.min(u,t+r.nodeSize);o.push({node:r,from:n,to:e})}));var s=u-i;var l=o.filter((function(r){if(!f)return true;return f.name===r.node.type.name})).filter((function(r){return Uo(r.node.attrs,n,{strict:false})}));if(a)return!!l.length;return l.reduce((function(r,t){return r+t.to-t.from}),0)>=s}
//#endregion
//#region src/commands/lift.ts
var Ts=function(r,t){if(t===void 0){t={}}return function(n){var e=n.state,i=n.dispatch;if(!Os(e,jo(r,e.schema),t))return false;return Un(e,i)}};
//#endregion
//#region src/commands/liftEmptyBlock.ts
var As=function(){return function(r){var t=r.state,n=r.dispatch;return qn(t,n)}};
//#endregion
//#region src/commands/liftListItem.ts
var Es=function(r){return function(t){var n=t.state,e=t.dispatch;var i=jo(r,n.schema);return ue(i)(n,e)}};
//#endregion
//#region src/commands/newlineInCode.ts
var Ss=function(){return function(r){var t=r.state,n=r.dispatch;return $n(t,n)}};
//#endregion
//#region src/helpers/getSchemaTypeNameByName.ts
/**
            * Get the type of a schema item by its name.
            * @param name The name of the schema item
            * @param schema The Prosemiror schema to search in
            * @returns The type of the schema item (`node` or `mark`), or null if it doesn't exist
            */function Cs(r,t){if(t.nodes[r])return"node";if(t.marks[r])return"mark";return null}
//#endregion
//#region src/utilities/deleteProps.ts
/**
            * Remove a property or an array of properties from an object
            * @param obj Object
            * @param key Key to remove
            */function js(r,t){var n=typeof t==="string"?[t]:t;return Object.keys(r).reduce((function(t,e){if(!n.includes(e))t[e]=r[e];return t}),{})}
//#endregion
//#region src/commands/resetAttributes.ts
var Rs=function(r,t){return function(n){var e=n.tr,i=n.state,u=n.dispatch;var a=null;var f=null;var o=Cs(typeof r==="string"?r:r.name,i.schema);if(!o)return false;if(o==="node")a=jo(r,i.schema);if(o==="mark")f=Wo(r,i.schema);var s=false;e.selection.ranges.forEach((function(r){i.doc.nodesBetween(r.$from.pos,r.$to.pos,(function(r,n){if(a&&a===r.type){s=true;if(u)e.setNodeMarkup(n,void 0,js(r.attrs,t))}if(f&&r.marks.length)r.marks.forEach((function(i){if(f===i.type){s=true;if(u)e.addMark(n,n+r.nodeSize,f.create(js(i.attrs,t)))}}))}))}));return s}};
//#endregion
//#region src/commands/scrollIntoView.ts
var Ls=function(){return function(r){var t=r.tr,n=r.dispatch;if(n)t.scrollIntoView();return true}};
//#endregion
//#region src/commands/selectAll.ts
var Ns=function(){return function(r){var t=r.tr,n=r.dispatch;if(n){var e=new sn(t.doc);t.setSelection(e)}return true}};
//#endregion
//#region src/commands/selectNodeBackward.ts
var Ps=function(){return function(r){var t=r.state,n=r.dispatch;return Ln(t,n)}};
//#endregion
//#region src/commands/selectNodeForward.ts
var Is=function(){return function(r){var t=r.state,n=r.dispatch;return Hn(t,n)}};
//#endregion
//#region src/commands/selectParentNode.ts
var Hs=function(){return function(r){var t=r.state,n=r.dispatch;return Vn(t,n)}};
//#endregion
//#region src/commands/selectTextblockEnd.ts
var Ds=function(){return function(r){var t=r.state,n=r.dispatch;return Qn(t,n)}};
//#endregion
//#region src/commands/selectTextblockStart.ts
var zs=function(){return function(r){var t=r.state,n=r.dispatch;return Yn(t,n)}};
//#endregion
//#region src/helpers/createDocument.ts
/**
            * Create a new Prosemirror document node from content.
            * @param content The JSON or HTML content to create the document from
            * @param schema The Prosemirror schema to use for the document
            * @param parseOptions Options for the parser
            * @returns The created Prosemirror document node
            */function Bs(r,t,n,e){if(n===void 0){n={}}if(e===void 0){e={}}return as(r,t,{slice:false,parseOptions:n,errorOnInvalidContent:e.errorOnInvalidContent})}
//#endregion
//#region src/commands/setContent.ts
var Us=function(r,t){var n=t===void 0?{}:t,e=n.errorOnInvalidContent,i=n.emitUpdate,u=i===void 0?true:i,a=n.parseOptions,f=a===void 0?{}:a;return function(t){var n=t.editor,i=t.tr,a=t.dispatch,o=t.commands;var s=i.doc;if(f.preserveWhitespace!=="full"){var l=Bs(r,n.schema,f,{errorOnInvalidContent:e!==null&&e!==void 0?e:n.options.enableContentCheck});if(a){var v=fs(l)?l.content:[l];i.replaceWith(0,s.content.size,v).setMeta("preventUpdate",!u)}return true}if(a)i.setMeta("preventUpdate",!u);return o.insertContentAt({from:0,to:s.content.size},r,{parseOptions:f,errorOnInvalidContent:e!==null&&e!==void 0?e:n.options.enableContentCheck})}};
//#endregion
//#region src/helpers/getMarkAttributes.ts
function $s(r,t){var n=Wo(t,r.schema);var e=r.selection,i=e.from,u=e.to,a=e.empty;var f=[];if(a){if(r.storedMarks)f.push.apply(f,r.storedMarks);f.push.apply(f,r.selection.$head.marks())}else r.doc.nodesBetween(i,u,(function(r){f.push.apply(f,r.marks)}));var o=f.find((function(r){return r.type.name===n.name}));if(!o)return{};return __assign({},o.attrs)}
//#endregion
//#region src/helpers/combineTransactionSteps.ts
/**
            * Returns a new `Transform` based on all steps of the passed transactions.
            * @param oldDoc The Prosemirror node to start from
            * @param transactions The transactions to combine
            * @returns A new `Transform` with all steps of the passed transactions
            */function Ks(r,t){var n=new Qt(r);t.forEach((function(r){r.steps.forEach((function(r){n.step(r)}))}));return n}
//#endregion
//#region src/helpers/findChildrenInRange.ts
/**
            * Same as `findChildren` but searches only within a `range`.
            * @param node The Prosemirror node to search in
            * @param range The range to search in
            * @param predicate The predicate to match
            * @returns An array of nodes with their positions
            */function Fs(r,t,n){var e=[];r.nodesBetween(t.from,t.to,(function(r,t){if(n(r))e.push({node:r,pos:t})}));return e}
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
            */function Ws(r,t){for(var n=r.depth;n>0;n-=1){var e=r.node(n);if(t(e))return{pos:n>0?r.before(n):0,start:r.start(n),depth:n,node:e}}}
//#endregion
//#region src/helpers/findParentNode.ts
/**
            * Finds the closest parent node to the current selection that matches a predicate.
            * @param predicate The predicate to match
            * @returns A command that finds the closest parent node to the current selection that matches the predicate
            * @example ```js
            * findParentNode(node => node.type.name === 'paragraph')
            * ```
            */function qs(r){return function(t){return Ws(t.$from,r)}}
//#endregion
//#region src/helpers/getExtensionField.ts
/**
            * Returns a field from an extension
            * @param extension The Tiptap extension
            * @param field The field, for example `renderHTML` or `priority`
            * @param context The context object that should be passed as `this` into the function
            * @returns The field value
            */function Vs(r,t,n){if(r.config[t]===void 0&&r.parent)return Vs(r.parent,t,n);if(typeof r.config[t]==="function")return r.config[t].bind(__assign(__assign({},n),{parent:r.parent?Vs(r.parent,t,n):null}));return r.config[t]}
//#endregion
//#region src/helpers/flattenExtensions.ts
/**
            * Create a flattened array of extensions by traversing the `addExtensions` field.
            * @param extensions An array of Tiptap extensions
            * @returns A flattened array of Tiptap extensions
            */function Gs(r){return r.map((function(r){var t=Vs(r,"addExtensions",{name:r.name,options:r.options,storage:r.storage});if(t)return __spreadArray([r],Gs(t()),true);return r})).flat(10)}
//#endregion
//#region src/helpers/getHTMLFromFragment.ts
function Js(r,t){var n=Cr.fromSchema(t).serializeFragment(r);var e=document.implementation.createHTMLDocument().createElement("div");e.appendChild(n);return e.innerHTML}
//#endregion
//#region src/schema/getSchemaAttributes.ts
/**
            * Combines external attribute structure with local attribute behavior.
            * @param attributes The attributes from resolved local extensions
            * @param schema The schema that defines the allowed attributes
            * @returns Only attributes present in the schema
            */function Xs(r,t){var n=new Map;for(var e=0,i=r;e<i.length;e++){var u=i[e];var a;var f=(a=n.get(u.type))!==null&&a!==void 0?a:new Map;f.set(u.name,u);n.set(u.type,f)}return __spreadArray(__spreadArray([],Object.values(t.nodes),true),Object.values(t.marks),true).flatMap((function(r){var t;return Object.entries((t=r.spec.attrs)!==null&&t!==void 0?t:{}).map((function(t){var e=t[0],i=t[1];var u;var a=(u=n.get(r.name))===null||u===void 0?void 0:u.get(e);var f=Object.hasOwn(i,"default");return{type:r.name,name:e,attribute:__assign(__assign({rendered:true,renderHTML:null,parseHTML:null,keepOnSplit:true},a===null||a===void 0?void 0:a.attribute),{default:i.default,isRequired:!f,validate:i.validate})}}))}))}
//#endregion
//#region src/schema/schemaSpecFields.ts
var Ys={content:"string",marks:"string",group:"string",inline:"boolean",atom:"boolean",selectable:"boolean",draggable:"boolean",code:"boolean",whitespace:["pre","normal"],definingAsContext:"boolean",definingForContent:"boolean",defining:"boolean",isolating:"boolean",linebreakReplacement:"boolean"};var Qs={inclusive:"boolean",excludes:"string",group:"string",spanning:"boolean",code:"boolean"};
//#endregion
//#region src/schema/mergeSchemaSpec.ts
function Zs(r,t,n){return Object.fromEntries(Object.entries(t).flatMap((function(t){var e=t[0],i=t[1];var u=r[e];if(u===void 0)return[];if(!(typeof i==="string"?typeof u===i:typeof u==="string"&&i.includes(u)))throw new RangeError("Invalid schemaSpec field '".concat(n,".").concat(e,"'"));return[[e,u]]})))}function rl(r,t,n,e){return __assign(__assign(__assign({},Object.fromEntries(Object.entries(t).filter((function(r){var t=r[0];return t!=="attrs"&&!Object.hasOwn(e,t)})))),Zs(n,e,r)),{attrs:n.attrs})}function tl(r,t,n){for(var e=0,i=Object.keys(t);e<i.length;e++){var u=i[e];if(!Object.hasOwn(r,u))throw new RangeError("schemaSpec requires a local ".concat(n," extension named '").concat(u,"'"))}for(var a=0,f=Object.keys(r);a<f.length;a++){var u=f[a];if(!Object.hasOwn(t,u))throw new RangeError("Local ".concat(n," extension '").concat(u,"' is not in schemaSpec"))}}
/**
            * Combines external structure with local DOM behavior and extension metadata.
            * @param local The specifications generated by resolved local extensions
            * @param external The schema compiled from the provided specification
            * @returns A specification in the external schema's node and mark order
            */function nl(r,t){tl(r.nodes,t.nodes,"node");tl(r.marks,t.marks,"mark");var n=t.spec.nodes;var e=t.spec.marks;t.spec.nodes.forEach((function(t,e){n=n.update(t,rl(t,r.nodes[t],e,Ys))}));t.spec.marks.forEach((function(t,n){e=e.update(t,rl(t,r.marks[t],n,Qs))}));return{topNode:t.topNodeType.name,nodes:n,marks:e}}
//#endregion
//#region src/utilities/findDuplicates.ts
/**
            * Find duplicates in an array.
            */function el(r){var t=r.filter((function(t,n){return r.indexOf(t)!==n}));return Array.from(new Set(t))}
//#endregion
//#region src/helpers/splitExtensions.ts
function il(r){return{baseExtensions:r.filter((function(r){return r.type==="extension"})),nodeExtensions:r.filter((function(r){return r.type==="node"})),markExtensions:r.filter((function(r){return r.type==="mark"}))}}
//#endregion
//#region src/helpers/getAttributesFromExtensions.ts
/**
            * Get a list of all extension attributes defined in `addAttribute` and `addGlobalAttribute`.
            * @param extensions List of extensions
            */function ul(r){var t=[];var n=il(r),e=n.nodeExtensions,i=n.markExtensions;var u=__spreadArray(__spreadArray([],e,true),i,true);var a={default:null,validate:void 0,rendered:true,renderHTML:null,parseHTML:null,keepOnSplit:true,isRequired:false};var f=e.filter((function(r){return r.name!=="text"})).map((function(r){return r.name}));var o=i.map((function(r){return r.name}));var s=__spreadArray(__spreadArray([],f,true),o,true);r.forEach((function(r){var n=Vs(r,"addGlobalAttributes",{name:r.name,options:r.options,storage:r.storage,extensions:u});if(!n)return;n().forEach((function(r){var n;if(Array.isArray(r.types))n=r.types;else if(r.types==="*")n=s;else if(r.types==="nodes")n=f;else if(r.types==="marks")n=o;else n=[];n.forEach((function(n){Object.entries(r.attributes).forEach((function(r){var e=r[0],i=r[1];t.push({type:n,name:e,attribute:__assign(__assign({},a),i)})}))}))}))}));u.forEach((function(r){var n=Vs(r,"addAttributes",{name:r.name,options:r.options,storage:r.storage});if(!n)return;var e=n();Object.entries(e).forEach((function(n){var e=n[0],i=n[1];var u=__assign(__assign({},a),i);if(typeof(u===null||u===void 0?void 0:u.default)==="function")u.default=u.default();if((u===null||u===void 0?void 0:u.isRequired)&&(u===null||u===void 0?void 0:u.default)===void 0)delete u.default;t.push({type:r.name,name:e,attribute:u})}))}));return t}
//#endregion
//#region src/utilities/isFunction.ts
function al(r){return typeof r==="function"}
//#endregion
//#region src/utilities/callOrReturn.ts
/**
            * Optionally calls `value` as a function.
            * Otherwise it is returned directly.
            * @param value Function or any value.
            * @param context Optional context to bind to function.
            * @param props Optional props to pass to function.
            */function fl(r,t){if(t===void 0){t=void 0}var n=[];for(var e=2;e<arguments.length;e++){n[e-2]=arguments[e]}if(al(r)){if(t)return r.bind(t).apply(void 0,n);return r.apply(void 0,n)}return r}
//#endregion
//#region src/utilities/isEmptyObject.ts
function ol(r){if(r===void 0){r={}}return Object.keys(r).length===0&&r.constructor===Object}
//#endregion
//#region src/utilities/mergeAttributes.ts
/** Splits a CSS style string into declarations, ignoring semicolons inside quotes/parentheses. */function sl(r){var t=[];var n="";var e=false;var i=false;var u=0;var a=r.length;for(var f=0;f<a;f+=1){var o=r[f];if(o==="'"&&!i){e=!e;n+=o;continue}if(o==='"'&&!e){i=!i;n+=o;continue}if(!e&&!i){if(o==="("){u+=1;n+=o;continue}if(o===")"&&u>0){u-=1;n+=o;continue}if(o===";"&&u===0){t.push(n);n="";continue}}n+=o}if(n)t.push(n);return t}
/** Yields property/value pairs from a style string. */function ll(r){var t=[];var n=sl(r||"");var e=n.length;for(var i=0;i<e;i+=1){var u=n[i];var a=u.indexOf(":");if(a===-1)continue;var f=u.slice(0,a).trim();var o=u.slice(a+1).trim();if(f&&o)t.push([f,o])}return t}function vl(){var r=[];for(var t=0;t<arguments.length;t++){r[t]=arguments[t]}return r.filter((function(r){return!!r})).reduce((function(r,t){var n=__assign({},r);Object.entries(t).forEach((function(r){var t=r[0],e=r[1];if(t==="__proto__"){Object.defineProperty(n,t,{configurable:true,enumerable:true,value:e,writable:true});return}if(!n[t]){n[t]=e;return}if(t==="class"){var i=e?String(e).split(" "):[];var u=n[t]?n[t].split(" "):[];var a=i.filter((function(r){return!u.includes(r)}));n[t]=__spreadArray(__spreadArray([],u,true),a,true).join(" ")}else if(t==="style"){var f=new Map(__spreadArray(__spreadArray([],ll(n[t]),true),ll(e),true));n[t]=Array.from(f.entries()).map((function(r){var t=r[0],n=r[1];return"".concat(t,": ").concat(n)})).join("; ")}else n[t]=e}));return n}),{})}
//#endregion
//#region src/helpers/getRenderedAttributes.ts
function cl(r,t){return t.filter((function(t){return t.type===r.type.name})).filter((function(r){return r.attribute.rendered})).map((function(t){var n;if(!t.attribute.renderHTML)return n={},n[t.name]=r.attrs[t.name],n;return t.attribute.renderHTML(r.attrs)||{}})).reduce((function(r,t){return vl(r,t)}),{})}
//#endregion
//#region src/utilities/fromString.ts
function hl(r){if(typeof r!=="string")return r;if(r.match(/^[+-]?(?:\d*\.)?\d+$/))return Number(r);if(r==="true")return true;if(r==="false")return false;return r}
//#endregion
//#region src/helpers/injectExtensionAttributesToParseRule.ts
/**
            * This function merges extension attributes into parserule attributes (`attrs` or `getAttrs`).
            * Cancels when `getAttrs` returned `false`.
            * @param parseRule ProseMirror ParseRule
            * @param extensionAttributes List of attributes to inject
            */function dl(r,t){if("style"in r)return r;return __assign(__assign({},r),{getAttrs:function(n){var e=r.getAttrs?r.getAttrs(n):r.attrs;if(e===false)return false;var i=t.reduce((function(r,t){var e;var i=t.attribute.parseHTML?t.attribute.parseHTML(n):hl(n.getAttribute(t.name));if(i===null||i===void 0)return r;return __assign(__assign({},r),(e={},e[t.name]=i,e))}),{});return __assign(__assign({},e),i)}})}
//#endregion
//#region src/helpers/getSchemaSpecByResolvedExtensions.ts
function pl(r){return Object.fromEntries(Object.entries(r).filter((function(r){var t=r[0],n=r[1];if(t==="attrs"&&ol(n))return false;return n!==null&&n!==void 0})))}
/**
            * Builds an attribute spec tuple for ProseMirror schema from an extension attribute.
            * @param extensionAttribute The extension attribute to build the spec for
            * @returns A tuple of [attributeName, spec]
            */function bl(r){var t,n;var e={};if(!(r===null||r===void 0||(t=r.attribute)===null||t===void 0?void 0:t.isRequired)&&"default"in((r===null||r===void 0?void 0:r.attribute)||{}))e.default=r.attribute.default;if((r===null||r===void 0||(n=r.attribute)===null||n===void 0?void 0:n.validate)!==void 0)e.validate=r.attribute.validate;return[r.name,e]}
/**
            * Builds schema specifications without compiling content expressions.
            * @param extensions An array of Tiptap extensions
            * @param editor The editor instance
            * @param allAttributes The effective attributes used for schema and DOM behavior
            * @returns The node and mark specifications
            */function gl(r,t,n){if(n===void 0){n=ul(r)}var e;var i=il(r),u=i.nodeExtensions,a=i.markExtensions;return{topNode:(e=u.find((function(r){return Vs(r,"topNode")})))===null||e===void 0?void 0:e.name,nodes:Object.fromEntries(u.map((function(e){var i=n.filter((function(r){return r.type===e.name}));var u={name:e.name,options:e.options,storage:e.storage,editor:t};var a=pl(__assign(__assign({},r.reduce((function(r,t){var n=Vs(t,"extendNodeSchema",u);return __assign(__assign({},r),n?n(e):{})}),{})),{content:fl(Vs(e,"content",u)),marks:fl(Vs(e,"marks",u)),group:fl(Vs(e,"group",u)),inline:fl(Vs(e,"inline",u)),atom:fl(Vs(e,"atom",u)),selectable:fl(Vs(e,"selectable",u)),draggable:fl(Vs(e,"draggable",u)),code:fl(Vs(e,"code",u)),whitespace:fl(Vs(e,"whitespace",u)),linebreakReplacement:fl(Vs(e,"linebreakReplacement",u)),defining:fl(Vs(e,"defining",u)),isolating:fl(Vs(e,"isolating",u)),attrs:Object.fromEntries(i.map(bl))}));var f=fl(Vs(e,"parseHTML",u));if(f)a.parseDOM=f.map((function(r){return dl(r,i)}));var o=Vs(e,"renderHTML",u);if(o)a.toDOM=function(r){return o({node:r,HTMLAttributes:cl(r,i)})};var s=Vs(e,"renderText",u);if(s)a.toText=s;return[e.name,a]}))),marks:Object.fromEntries(a.map((function(e){var i=n.filter((function(r){return r.type===e.name}));var u={name:e.name,options:e.options,storage:e.storage,editor:t};var a=pl(__assign(__assign({},r.reduce((function(r,t){var n=Vs(t,"extendMarkSchema",u);return __assign(__assign({},r),n?n(e):{})}),{})),{inclusive:fl(Vs(e,"inclusive",u)),excludes:fl(Vs(e,"excludes",u)),group:fl(Vs(e,"group",u)),spanning:fl(Vs(e,"spanning",u)),code:fl(Vs(e,"code",u)),attrs:Object.fromEntries(i.map(bl))}));var f=fl(Vs(e,"parseHTML",u));if(f)a.parseDOM=f.map((function(r){return dl(r,i)}));var o=Vs(e,"renderHTML",u);if(o)a.toDOM=function(r){return o({mark:r,HTMLAttributes:cl(r,i)})};return[e.name,a]})))}}
//#endregion
//#region src/helpers/getSchemaByResolvedExtensions.ts
/**
            * Creates a ProseMirror schema from resolved extensions.
            * @param extensions The flattened and sorted extensions
            * @param editor The editor instance
            * @param schemaSpec The external structure to use with local extension behavior
            * @returns A ProseMirror schema
            */function ml(r,t,n){if(n===void 0)return new cr(gl(r,t));var e=el(r.filter((function(r){return r.type!=="extension"})).map((function(r){return r.name})));if(e.length)throw new RangeError("Duplicate local schema types: ".concat(e.join(", ")));var i=new cr(n);var u=gl(r,t,Xs(ul(r),i));return new cr(nl(u,i))}
//#endregion
//#region src/helpers/sortExtensions.ts
/**
            * Sort extensions by priority.
            * @param extensions An array of Tiptap extensions
            * @returns A sorted array of Tiptap extensions by priority
            */function wl(r){var t=100;return r.sort((function(r,n){var e=Vs(r,"priority")||t;var i=Vs(n,"priority")||t;if(e>i)return-1;if(e<i)return 1;return 0}))}
//#endregion
//#region src/helpers/resolveExtensions.ts
/**
            * Returns a flattened and sorted extension list while
            * also checking for duplicated extensions and warns the user.
            * @param extensions An array of Tiptap extensions
            * @returns An flattened and sorted array of Tiptap extensions
            */function yl(r){var t=wl(Gs(r));var n=el(t.map((function(r){return r.name})));if(n.length)console.warn("[tiptap warn]: Duplicate extension names found: [".concat(n.map((function(r){return"'".concat(r,"'")})).join(", "),"]. This can lead to issues."));return t}
//#endregion
//#region src/helpers/getTextBetween.ts
/**
            * Gets the text between two positions in a Prosemirror node
            * and serializes it using the given text serializers and block separator (see getText)
            * @param startNode The Prosemirror node to start from
            * @param range The range of the text to get
            * @param options Options for the text serializer & block separator
            * @returns The text between the two positions
            */function kl(r,t,n){var e=t.from,i=t.to;var u=n||{},a=u.blockSeparator,f=a===void 0?"\n\n":a,o=u.textSerializers,s=o===void 0?{}:o;var l="";r.nodesBetween(e,i,(function(r,n,u,a){if(r.isBlock&&n>e)l+=f;var o=s===null||s===void 0?void 0:s[r.type.name];if(o){if(u)l+=o({node:r,pos:n,parent:u,index:a,range:t});return false}if(r.isText){var v;l+=r===null||r===void 0||(v=r.text)===null||v===void 0?void 0:v.slice(Math.max(e,n)-n,i-n)}}));return l}
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
            */function _l(r,t){return kl(r,{from:0,to:r.content.size},t)}
//#endregion
//#region src/helpers/getTextSerializersFromSchema.ts
/**
            * Find text serializers `toText` in a Prosemirror schema
            * @param schema The Prosemirror schema to search in
            * @returns A record of text serializers by node name
            */function xl(r){return Object.fromEntries(Object.entries(r.nodes).filter((function(r){var t=r[1];return t.spec.toText})).map((function(r){var t=r[0],n=r[1];return[t,n.spec.toText]})))}
//#endregion
//#region src/helpers/getNodeAttributes.ts
function Ml(r,t){var n=jo(t,r.schema);var e=r.selection,i=e.from,u=e.to;var a=[];r.doc.nodesBetween(i,u,(function(r){a.push(r)}));var f=a.reverse().find((function(r){return r.type.name===n.name}));if(!f)return{};return __assign({},f.attrs)}
//#endregion
//#region src/helpers/getAttributes.ts
/**
            * Get node or mark attributes by type or name on the current editor state
            * @param state The current editor state
            * @param typeOrName The node or mark type or name
            * @returns The attributes of the node or mark or an empty object
            */function Ol(r,t){var n=Cs(typeof t==="string"?t:t.name,r.schema);if(n==="node")return Ml(r,t);if(n==="mark")return $s(r,t);return{}}
//#endregion
//#region src/utilities/removeDuplicates.ts
/**
            * Removes duplicated values within an array.
            * Supports numbers, strings and objects.
            */function Tl(r,t){if(t===void 0){t=JSON.stringify}var n={};return r.filter((function(r){var e=t(r);return Object.prototype.hasOwnProperty.call(n,e)?false:n[e]=true}))}
//#endregion
//#region src/helpers/getChangedRanges.ts
/**
            * Removes duplicated ranges and ranges that are
            * fully captured by other ranges.
            */function Al(r){var t=Tl(r);return t.length===1?t:t.filter((function(r,n){return!t.filter((function(r,t){return t!==n})).some((function(t){return r.oldRange.from>=t.oldRange.from&&r.oldRange.to<=t.oldRange.to&&r.newRange.from>=t.newRange.from&&r.newRange.to<=t.newRange.to}))}))}
/**
            * Returns a list of changed ranges
            * based on the first and last state of all steps.
            */function El(r){var t=r.mapping,n=r.steps;var e=[];var i=t.invert();t.maps.forEach((function(r,u){var a=[];if(!r.ranges.length){var f=n[u],o=f.from,s=f.to;if(o===void 0||s===void 0)return;a.push({from:o,to:s})}else r.forEach((function(r,t){a.push({from:r,to:t})}));var l=t.slice(u);a.forEach((function(r){var t=r.from,n=r.to;var u=l.map(t,-1);var a=l.map(n);var f=i.map(u,-1);var o=i.map(a);e.push({oldRange:{from:f,to:o},newRange:{from:u,to:a}})}))}));return Al(e)}
//#endregion
//#region src/helpers/getMarksBetween.ts
function Sl(r,t,n){var e=[];if(r===t)n.resolve(r).marks().forEach((function(t){var i=Fo(n.resolve(r),t.type);if(!i)return;e.push(__assign({mark:t},i))}));else n.nodesBetween(r,t,(function(r,t){if(!r||(r===null||r===void 0?void 0:r.nodeSize)===void 0)return;e.push.apply(e,r.marks.map((function(n){return{from:t,to:t+r.nodeSize,mark:n}})))}));return e}
//#endregion
//#region src/helpers/getNodeAtPosition.ts
/**
            * Finds the first node of a given type or name in the current selection.
            * @param state The editor state.
            * @param typeOrName The node type or name.
            * @param pos The position to start searching from.
            * @param maxDepth The maximum depth to search.
            * @returns The node and the depth as an array.
            */var Cl=function(r,t,n,e){if(e===void 0){e=20}var i=r.doc.resolve(n);var u=e;var a=null;while(u>0&&a===null){var f=i.node(u);if((f===null||f===void 0?void 0:f.type.name)===t)a=f;else u-=1}return[a,u]};
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
            */var jl=function(r){var t=r.depth-1;if(t<0)return null;var n=r.index(t);if(n===0)return null;return r.node(t).child(n-1)};
//#endregion
//#region src/helpers/getSchemaTypeByName.ts
/**
            * Tries to get a node or mark type by its name.
            * @param name The name of the node or mark type
            * @param schema The Prosemiror schema to search in
            * @returns The node or mark type, or null if it doesn't exist
            */function Rl(r,t){return t.nodes[r]||t.marks[r]||null}
//#endregion
//#region src/helpers/getSplittedAttributes.ts
/**
            * Return attributes of an extension that should be splitted by keepOnSplit flag
            * @param extensionAttributes Array of extension attributes
            * @param typeName The type of the extension
            * @param attributes The attributes of the extension
            * @returns The splitted attributes
            */function Ll(r,t,n){return Object.fromEntries(Object.entries(n).filter((function(n){var e=n[0];var i=r.find((function(r){return r.type===t&&r.name===e}));if(!i)return false;return i.attribute.keepOnSplit})))}
//#endregion
//#region src/helpers/getTextContentFromNodes.ts
/**
            * Returns the text content of a resolved prosemirror position
            * @param $from The resolved position to get the text content from
            * @param maxMatch The maximum number of characters to match
            * @returns The text content
            */var Nl=function(r,t){if(t===void 0){t=500}var n="";var e=r.parentOffset;r.parent.nodesBetween(Math.max(0,e-t),e,(function(r,t,i,u){var a,f;var o=((a=(f=r.type.spec).toText)===null||a===void 0?void 0:a.call(f,{node:r,pos:t,parent:i,index:u}))||r.textContent||"%leaf%";n+=r.isAtom&&!r.isText?o:o.slice(0,Math.max(0,e-t))}));return n};
//#endregion
//#region src/helpers/isMarkActive.ts
function Pl(r,t,n){if(n===void 0){n={}}var e=r.selection,i=e.empty,u=e.ranges;var a=t?Wo(t,r.schema):null;if(i)return!!(r.storedMarks||r.selection.$from.marks()).filter((function(r){if(!a)return true;return a.name===r.type.name})).find((function(r){return Uo(r.attrs,n,{strict:false})}));var f=0;var o=[];u.forEach((function(t){var n=t.$from,e=t.$to;var i=n.pos;var u=e.pos;r.doc.nodesBetween(i,u,(function(r,t){if(a&&r.inlineContent&&!r.type.allowsMarkType(a))return false;if(!r.isText&&!r.marks.length)return;var n=Math.max(i,t);var e=Math.min(u,t+r.nodeSize);var s=e-n;f+=s;o.push.apply(o,r.marks.map((function(r){return{mark:r,from:n,to:e}})))}))}));if(f===0)return false;var s=o.filter((function(r){if(!a)return true;return a.name===r.mark.type.name})).filter((function(r){return Uo(r.mark.attrs,n,{strict:false})})).reduce((function(r,t){return r+t.to-t.from}),0);var l=o.filter((function(r){if(!a)return true;return r.mark.type!==a&&r.mark.type.excludes(a)})).reduce((function(r,t){return r+t.to-t.from}),0);return(s>0?s+l:s)>=f}
//#endregion
//#region src/helpers/isActive.ts
function Il(r,t,n){if(n===void 0){n={}}if(!t)return Os(r,null,n)||Pl(r,null,n);var e=Cs(t,r.schema);if(e==="node")return Os(r,t,n);if(e==="mark")return Pl(r,t,n);return false}
//#endregion
//#region src/helpers/isAtEndOfNode.ts
var Hl=function(r,t){var n=r.selection,e=n.$from,i=n.$to,u=n.$anchor;if(t){var a=qs((function(r){return r.type.name===t}))(r.selection);if(!a)return false;var f=r.doc.resolve(a.pos+1);if(u.pos+1===f.end())return true;return false}if(i.parentOffset<i.parent.nodeSize-2||e.pos!==i.pos)return false;return true};
//#endregion
//#region src/helpers/isAtStartOfNode.ts
var Dl=function(r){var t=r.selection,n=t.$from,e=t.$to;if(n.parentOffset>0||n.pos!==e.pos)return false;return true};
//#endregion
//#region src/helpers/isExtensionRulesEnabled.ts
function zl(r,t){if(Array.isArray(t))return t.some((function(t){return(typeof t==="string"?t:t.name)===r.name}));return t}
//#endregion
//#region src/helpers/isList.ts
function Bl(r,t){var n=il(t).nodeExtensions;var e=n.find((function(t){return t.name===r}));if(!e)return false;var i=fl(Vs(e,"group",{name:e.name,options:e.options,storage:e.storage}));if(typeof i!=="string")return false;return i.split(" ").includes("list")}
//#endregion
//#region src/helpers/isNodeEmpty.ts
/**
            * Returns true if the given prosemirror node is empty.
            */function Ul(r,t){var n=t===void 0?{}:t,e=n.checkChildren,i=e===void 0?true:e,u=n.ignoreWhitespace,a=u===void 0?false:u;if(a){if(r.type.name==="hardBreak")return true;if(r.isText){var f;return!/\S/.test((f=r.text)!==null&&f!==void 0?f:"")}}if(r.isText)return!r.text;if(r.isAtom||r.isLeaf)return false;if(r.content.childCount===0)return true;if(i){var o=true;r.content.forEach((function(r){if(o===false)return;if(!Ul(r,{ignoreWhitespace:a,checkChildren:i}))o=false}));return o}return false}
//#endregion
//#region src/helpers/isNodeSelection.ts
function $l(r){return r instanceof fn}
//#endregion
//#region src/helpers/isProseMirrorStep.ts
/**
            * Checks if a value is a ProseMirror step
            * @param value The value to check
            * @returns - A boolean, if the boolean is true the value is a ProseMirror Step
            * @example ```js
            * isProseMirrorStep(transaction.steps[0])
            * ```
            */function Kl(r){if(r===null||typeof r!=="object")return false;var t=r;if(typeof t.apply!=="function"||typeof t.getMap!=="function"||typeof t.invert!=="function"||typeof t.map!=="function"||typeof t.merge!=="function"||typeof t.toJSON!=="function")return false;return true}
//#endregion
//#region src/helpers/isProseMirrorReplaceStep.ts
/**
            * Checks if a value is a ProseMirror replace step result
            * @param value The value to check
            * @returns - A boolean, if the boolean is true the value is a ProseMirror ReplaceStep
            * @example ```js
            * isProseMirrorReplaceStep(transaction.steps[0])
            * ```
            */function Fl(r){if(r===null||typeof r!=="object")return false;var t=r;if(!Kl(t))return false;var n=t.toJSON();if(n===null||typeof n!=="object"||n.stepType!=="replace")return false;return true}
//#endregion
//#region src/helpers/MappablePosition.ts
/**
            * A class that represents a mappable position in the editor. It can be extended
            * by other extensions to add additional position mapping capabilities.
            */var Wl=/** @class */function(){function r(r){this.position=r}
/**
                * Creates a MappablePosition from a JSON object.
                */r.fromJSON=function(t){return new r(t.position)};
/**
                * Converts the MappablePosition to a JSON object.
                */r.prototype.toJSON=function(){return{position:this.position}};return r}();
/**
            * Calculates the new position after applying a transaction.
            *
            * @returns The new mappable position and the map result.
            */function ql(r,t){var n=t.mapping.mapResult(r.position);return{position:new Wl(n.pos),mapResult:n}}
/**
            * Creates a MappablePosition from a position number. This is the default
            * implementation for Tiptap core. It can be overridden by other Tiptap
            * extensions.
            *
            * @param position The position (as a number) where the MappablePosition will be created.
            * @returns A new MappablePosition instance at the given position.
            */function Vl(r){return new Wl(r)}
//#endregion
//#region src/commands/setMark.ts
function Gl(r,t,n){var e=t.selection;var i=null;if(Go(e))i=e.$cursor;if(i){var u;var a=(u=r.storedMarks)!==null&&u!==void 0?u:i.marks();return i.parent.type.allowsMarkType(n)&&(!!n.isInSet(a)||!a.some((function(r){return r.type.excludes(n)})))}var f=e.ranges;return f.some((function(t){var e=t.$from,i=t.$to;var u=e.depth===0?r.doc.inlineContent&&r.doc.type.allowsMarkType(n):false;r.doc.nodesBetween(e.pos,i.pos,(function(r,t,e){if(u)return false;if(r.isInline){var i=!e||e.type.allowsMarkType(n);var a=!!n.isInSet(r.marks)||!r.marks.some((function(r){return r.type.excludes(n)}));u=i&&a}return!u}));return u}))}var Jl=function(r,t){if(t===void 0){t={}}return function(n){var e=n.tr,i=n.state,u=n.dispatch;var a=e.selection;var f=a.empty,o=a.ranges;var s=Wo(r,i.schema);if(u){if(f){var l=$s(i,s);e.addStoredMark(s.create(__assign(__assign({},l),t)))}else o.forEach((function(r){var n=r.$from.pos;var u=r.$to.pos;i.doc.nodesBetween(n,u,(function(r,i){var a=Math.max(i,n);var f=Math.min(i+r.nodeSize,u);if(r.marks.find((function(r){return r.type===s})))r.marks.forEach((function(r){if(s===r.type)e.addMark(a,f,s.create(__assign(__assign({},r.attrs),t)))}));else e.addMark(a,f,s.create(t))}))}))}return Gl(i,e,s)}};
//#endregion
//#region src/commands/setMeta.ts
var Xl=function(r,t){return function(n){var e=n.tr;e.setMeta(r,t);return true}};
//#endregion
//#region src/commands/setNode.ts
var Yl=function(r,t){if(t===void 0){t={}}return function(n){var e=n.state,i=n.dispatch,u=n.chain;var a=jo(r,e.schema);var f;if(e.selection.$anchor.sameParent(e.selection.$head))f=e.selection.$anchor.parent.attrs;if(!a.isTextblock){console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');return false}return u().command((function(r){var n=r.commands;if(re(a,__assign(__assign({},f),t))(e))return true;return n.clearNodes()})).command((function(r){var n=r.state;return re(a,__assign(__assign({},f),t))(n,i)})).run()}};
//#endregion
//#region src/commands/setNodeSelection.ts
var Ql=function(r){return function(t){var n=t.tr,e=t.dispatch;if(e){var i=n.doc;var u=Jo(r,0,i.content.size);var a=fn.create(i,u);n.setSelection(a)}return true}};
//#endregion
//#region src/commands/setTextDirection.ts
var Zl=function(r,t){return function(n){var e=n.tr,i=n.state,u=n.dispatch;var a=i.selection;var f;var o;if(typeof t==="number"){f=t;o=t}else if(t&&"from"in t&&"to"in t){f=t.from;o=t.to}else{f=a.from;o=a.to}if(u)e.doc.nodesBetween(f,o,(function(t,n){if(t.isText)return;e.setNodeMarkup(n,void 0,__assign(__assign({},t.attrs),{dir:r}))}));return true}};
//#endregion
//#region src/commands/setTextSelection.ts
var rv=function(r){return function(t){var n=t.tr,e=t.dispatch;if(e){var i=n.doc;var u=typeof r==="number"?{from:r,to:r}:r,a=u.from,f=u.to;var o=un.atStart(i).from;var s=un.atEnd(i).to;var l=Jo(a,o,s);var v=Jo(f,o,s);var c=un.create(i,l,v);n.setSelection(c)}return true}};
//#endregion
//#region src/commands/sinkListItem.ts
var tv=function(r){return function(t){var n=t.state,e=t.dispatch;var i=jo(r,n.schema);return oe(i)(n,e)}};
//#endregion
//#region src/commands/splitBlock.ts
function nv(r,t){var n=r.storedMarks||r.selection.$to.parentOffset&&r.selection.$from.marks();if(n){var e=n.filter((function(r){return t===null||t===void 0?void 0:t.includes(r.type.name)}));r.tr.ensureMarks(e)}}var ev=function(r){var t=r===void 0?{}:r,n=t.keepMarks,e=n===void 0?true:n;return function(r){var t=r.tr,n=r.state,i=r.dispatch,u=r.editor;var a=t.selection,f=t.doc;var o=a.$from,s=a.$to;var l=u.extensionManager.attributes;var v=Ll(l,o.node().type.name,o.node().attrs);if(a instanceof fn&&a.node.isBlock){if(!o.parentOffset||!Mt(f,o.pos))return false;if(i){if(e)nv(n,u.extensionManager.splittableMarks);t.split(o.pos).scrollIntoView()}return true}if(!o.parent.isBlock)return false;var c=s.parentOffset===s.parent.content.size;var h=o.depth===0?void 0:vs(o.node(-1).contentMatchAt(o.indexAfter(-1)));var d=c&&h?[{type:h,attrs:v}]:void 0;var p=a instanceof un&&!a.empty?kn.create({doc:t.doc,selection:a}).tr.deleteSelection():null;var b=p?p.doc:t.doc;var g=p?p.mapping.map(o.pos):o.pos;var m=Mt(b,g,1,d);if(!d&&!m&&Mt(b,g,1,h?[{type:h}]:void 0)){m=true;d=h?[{type:h,attrs:v}]:void 0}if(i){if(m){var w=t.steps.length;if(a instanceof un)t.deleteSelection();t.split(t.mapping.slice(w).map(o.pos),1,d);if(h&&!c&&!o.parentOffset&&o.parent.type!==h){var y=t.mapping.slice(w).map(o.before());var k=t.doc.resolve(y);if(o.node(-1).canReplaceWith(k.index(),k.index()+1,h))t.setNodeMarkup(t.mapping.slice(w).map(o.before()),h)}}if(e)nv(n,u.extensionManager.splittableMarks);t.scrollIntoView()}return m}};
//#endregion
//#region src/commands/splitListItem.ts
var iv=function(r,t){if(t===void 0){t={}}return function(n){var e=n.tr,i=n.state,u=n.dispatch,a=n.editor;var f=jo(r,i.schema);var o=i.selection,s=o.$from,l=o.$to;var v=i.selection.node;if(v&&v.isBlock||s.depth<2||!s.sameParent(l))return false;var c=s.node(-1);if(c.type!==f)return false;var h=a.extensionManager.attributes;if(s.parent.content.size===0&&s.node(-1).childCount===s.indexAfter(-1)){if(s.depth===2||s.node(-3).type!==f||s.index(-2)!==s.node(-2).childCount-1)return false;if(u){var d;var b=p.empty;var g=s.index(-1)?1:s.index(-2)?2:3;for(var m=s.depth-g;m>=s.depth-3;m-=1)b=p.from(s.node(m).copy(b));var w=s.indexAfter(-1)<s.node(-2).childCount?1:s.indexAfter(-2)<s.node(-3).childCount?2:3;var y=__assign(__assign({},Ll(h,s.node().type.name,s.node().attrs)),t);var _=((d=f.contentMatch.defaultType)===null||d===void 0?void 0:d.createAndFill(y))||void 0;b=b.append(p.from(f.createAndFill(null,_)||void 0));var x=s.before(s.depth-(g-1));e.replace(x,s.after(-w),new k(b,4-g,0));var M=-1;e.doc.nodesBetween(x,e.doc.content.size,(function(r,t){if(M>-1)return false;if(r.isTextblock&&r.content.size===0)M=t+1}));if(M>-1)e.setSelection(un.near(e.doc.resolve(M)));e.scrollIntoView()}return true}var O=l.pos===s.end()?c.contentMatchAt(0).defaultType:null;var T=__assign(__assign({},Ll(h,c.type.name,c.attrs)),t);var A=__assign(__assign({},Ll(h,s.node().type.name,s.node().attrs)),t);var E=s.parentOffset===0&&s.index(-1)===0;var S=s.before(-1);e.delete(s.pos,l.pos);var C=E?c.attrs:T;var j=O?[{type:f,attrs:C},{type:O,attrs:A}]:[{type:f,attrs:C}];if(!Mt(e.doc,s.pos,2))return false;if(u){var R=i.selection,L=i.storedMarks;var N=a.extensionManager.splittableMarks;var P=L||R.$to.parentOffset&&R.$from.marks();e.split(s.pos,2,j).scrollIntoView();if(E)e.setNodeMarkup(S,void 0,T);if(!P||!u)return true;var I=P.filter((function(r){return N.includes(r.type.name)}));e.ensureMarks(I)}return true}};
//#endregion
//#region src/commands/utils/createNode.ts
/** Creates a node when its content and required attributes are valid. */function uv(r,t,n){if(!r.validContent(t))return null;try{return r.create(n,t)}catch(r){return null}}
//#endregion
//#region src/commands/utils/flushPendingContent.ts
/** Converts and appends the content accumulated for the current list item. */function av(r,t){if(r.pendingContent.length===0)return true;var n=uv(t,p.from(r.pendingContent));if(!n)return false;r.items.push(n);r.pendingContent=[];return true}
//#endregion
//#region src/commands/utils/appendContentNode.ts
/** Appends a content node to the current item or starts a new item when needed. */function fv(r,t,n){if(n.validContent(p.from(__spreadArray(__spreadArray([],t.pendingContent,true),[r],false)))){t.pendingContent.push(r);return true}if(!av(t,n)||!n.validContent(p.from(r)))return false;t.pendingContent.push(r);return true}
//#endregion
//#region src/commands/utils/appendNestedList.ts
/** Preserves a nested list when supported or flattens its converted items. */function ov(r,t,n,e){var i;var u=e(r,n);if(!u)return false;var a=uv(n.listType,p.from(u),r.attrs);if(!a)return false;if(n.itemType.validContent(p.from(__spreadArray(__spreadArray([],t.pendingContent,true),[a],false)))){t.pendingContent.push(a);return true}if(!av(t,n.itemType))return false;(i=t.items).push.apply(i,u);return true}
//#endregion
//#region src/commands/utils/convertListItem.ts
/** Converts one source list item into one or more target list items. */function sv(r,t,n){var e={items:[],pendingContent:[]};for(var i=0;i<r.childCount;i+=1){var u=r.child(i);if(!(t.isListNode(u)?ov(u,e,t,n):fv(u,e,t.itemType)))return null}return av(e,t.itemType)?e.items:null}
//#endregion
//#region src/commands/utils/convertListItems.ts
/** Recursively converts all items in a source list to the target list schema. */function lv(r,t){var n=[];for(var e=0;e<r.childCount;e+=1){var i=sv(r.child(e),t,lv);if(!i)return null;n.push.apply(n,i)}return n}
//#endregion
//#region src/commands/utils/findNodePosition.ts
/** Finds a descendant node's position relative to its root node. */function vv(r,t){var n=null;r.descendants((function(r,e){if(r!==t)return true;n=e;return false}));return n}
//#endregion
//#region src/commands/toggleList.ts
/**
            * Normalise a list type attribute for comparison.
            * Treats null, undefined, and "1" as equivalent (the default numeric type).
            */function cv(r){return!r||r==="1"?null:r}
/**
            * Check if two list type attributes are compatible for joining.
            * Lists can only join when they have the same type (both default, or both the same non-default type).
            */function hv(r,t){return cv(r)===cv(t)}var dv=function(r,t){var n=qs((function(r){return r.type===t}))(r.selection);if(!n)return true;var e=r.doc.resolve(Math.max(0,n.pos-1)).before(n.depth);if(e===void 0)return true;var i=r.doc.nodeAt(e);if(!(n.node.type===(i===null||i===void 0?void 0:i.type)&&Tt(r.doc,n.pos)))return true;if(!hv(n.node.attrs.type,i===null||i===void 0?void 0:i.attrs.type))return true;r.join(n.pos);return true};var pv=function(r,t){var n=qs((function(r){return r.type===t}))(r.selection);if(!n)return true;var e=r.doc.resolve(n.start).after(n.depth);if(e===void 0)return true;var i=r.doc.nodeAt(e);if(!(n.node.type===(i===null||i===void 0?void 0:i.type)&&Tt(r.doc,e)))return true;if(!hv(n.node.attrs.type,i===null||i===void 0?void 0:i.attrs.type))return true;r.join(e);return true};function bv(r){var t=r.doc;var n=t.firstChild;if(!n)return null;var e=t.resolve(1);var i=t.resolve(n.nodeSize-1);return un.between(e,i)}var gv=function(r,t,n,e){if(e===void 0){e={}}return function(i){var u=i.editor,a=i.tr,f=i.state,o=i.dispatch,s=i.chain,l=i.commands,v=i.can;var c=u.extensionManager,h=c.extensions,d=c.splittableMarks;var b=jo(r,f.schema);var g=jo(t,f.schema);var m=f.selection,w=f.storedMarks;var y=m.$from,k=m.$to;var _=y.blockRange(k);var x=w||m.$to.parentOffset&&m.$from.marks();if(!_)return false;var M=qs((function(r){return Bl(r.type.name,h)}))(m);var O=m.from===0&&m.to===f.doc.content.size;var T=f.doc.content.content;var A=T.length===1?T[0]:null;var E=O&&A&&Bl(A.type.name,h)?{node:A,pos:0}:null;var S=M!==null&&M!==void 0?M:E;var C=!!M&&_.depth>=1&&_.depth-M.depth<=1;var j=!!E;if((C||j)&&S){if(S.node.type===b){if(O&&j)return s().command((function(r){var t=r.tr,n=r.dispatch;var e=bv(t);if(!e)return false;t.setSelection(e);if(n)n(t);return true})).liftListItem(g).run();return l.liftListItem(g)}if(Bl(S.node.type.name,h)&&b.validContent(S.node.content))return s().command((function(){a.setNodeMarkup(S.pos,b);return true})).command((function(){return dv(a,b)})).command((function(){return pv(a,b)})).run();if(Bl(S.node.type.name,h)){var R;var L=(R=S.node.firstChild)===null||R===void 0?void 0:R.type;if(L&&L!==g){var N=lv(S.node,{listType:b,itemType:g,isListNode:function(r){return Bl(r.type.name,h)}});var P=N?p.from(N):null;if(!P||!b.validContent(P))return false;return s().command((function(){var r=a.selection,t=r.$anchor,n=r.$head;var i=t.parent;var u=n.parent;var f=t.parentOffset;var o=n.parentOffset;var s;try{s=b.create(e,P)}catch(r){return false}a.replaceWith(S.pos,S.pos+S.node.nodeSize,s);if(i.inlineContent&&u.inlineContent){var l=vv(s,i);var v=vv(s,u);if(l!==null&&v!==null){var c=S.pos+l+2+f;var h=S.pos+v+2+o;a.setSelection(un.create(a.doc,c,h))}}return true})).command((function(){return dv(a,b)})).command((function(){return pv(a,b)})).run()}}}if(!n||!x||!o)return s().command((function(){if(v().wrapInList(b,e))return true;return l.clearNodes()})).wrapInList(b,e).command((function(){return dv(a,b)})).command((function(){return pv(a,b)})).run();return s().command((function(){var r=v().wrapInList(b,e);var t=x.filter((function(r){return d.includes(r.type.name)}));a.ensureMarks(t);if(r)return true;return l.clearNodes()})).wrapInList(b,e).command((function(){return dv(a,b)})).command((function(){return pv(a,b)})).run()}};
//#endregion
//#region src/commands/toggleMark.ts
var mv=function(r,t,n){if(t===void 0){t={}}if(n===void 0){n={}}return function(e){var i=e.state,u=e.commands;var a=n.extendEmptyMarkRange,f=a===void 0?false:a;var o=Wo(r,i.schema);if(Pl(i,o,t))return u.unsetMark(o,{extendEmptyMarkRange:f});return u.setMark(o,t)}};
//#endregion
//#region src/commands/toggleNode.ts
var wv=function(r,t,n){if(n===void 0){n={}}return function(e){var i=e.state,u=e.commands;var a=jo(r,i.schema);var f=jo(t,i.schema);var o=Os(i,a,n);var s;if(i.selection.$anchor.sameParent(i.selection.$head))s=i.selection.$anchor.parent.attrs;if(o)return u.setNode(f,s);return u.setNode(a,__assign(__assign({},s),n))}};
//#endregion
//#region src/commands/toggleWrap.ts
var yv=function(r,t){if(t===void 0){t={}}return function(n){var e=n.state,i=n.commands;var u=jo(r,e.schema);if(Os(e,u,t))return i.lift(u);return i.wrapIn(u,t)}};
//#endregion
//#region src/commands/undoInputRule.ts
var kv=function(){return function(r){var t=r.state,n=r.dispatch;var e=t.plugins;for(var i=0;i<e.length;i+=1){var u=e[i];var a=void 0;if(u.spec.isInputRules&&(a=u.getState(t))){if(n){var f=t.tr;var o=a.transform;for(var s=o.steps.length-1;s>=0;s-=1)f.step(o.steps[s].invert(o.docs[s]));if(a.text){var l=f.doc.resolve(a.from).marks();f.replaceWith(a.from,a.to,t.schema.text(a.text,l))}else f.delete(a.from,a.to)}return true}}return false}};
//#endregion
//#region src/commands/unsetAllMarks.ts
var _v=function(r){if(r===void 0){r={}}return function(t){var n=t.tr,e=t.dispatch,i=t.editor;var u=r.ignoreClearable,a=u===void 0?false:u;var f=n.selection;var o=f.empty,s=f.ranges;if(o)return true;var l=i.extensionManager.nonClearableMarks;if(e){var v=Object.values(i.schema.marks).filter((function(r){return a||!l.includes(r.name)}));s.forEach((function(r){for(var t=0,e=v;t<e.length;t++){var i=e[t];n.removeMark(r.$from.pos,r.$to.pos,i)}}))}return true}};
//#endregion
//#region src/commands/unsetMark.ts
var xv=function(r,t){if(t===void 0){t={}}return function(n){var e=n.tr,i=n.state,u=n.dispatch;var a=t.extendEmptyMarkRange,f=a===void 0?false:a;var o=e.selection;var s=Wo(r,i.schema);var l=o.$from,v=o.empty,c=o.ranges;if(!u)return true;if(v&&f){var h;var d=o.from,p=o.to;var b=Fo(l,s,(h=l.marks().find((function(r){return r.type===s})))===null||h===void 0?void 0:h.attrs);if(b){d=b.from;p=b.to}e.removeMark(d,p,s)}else c.forEach((function(r){e.removeMark(r.$from.pos,r.$to.pos,s)}));e.removeStoredMark(s);return true}};
//#endregion
//#region src/commands/unsetTextDirection.ts
var Mv=function(r){return function(t){var n=t.tr,e=t.state,i=t.dispatch;var u=e.selection;var a;var f;if(typeof r==="number"){a=r;f=r}else if(r&&"from"in r&&"to"in r){a=r.from;f=r.to}else{a=u.from;f=u.to}if(i)n.doc.nodesBetween(a,f,(function(r,t){if(r.isText)return;var e=__assign({},r.attrs);delete e.dir;n.setNodeMarkup(t,void 0,e)}));return true}};
//#endregion
//#region src/commands/updateAttributes.ts
var Ov=function(r,t){if(t===void 0){t={}}return function(n){var e=n.tr,i=n.state,u=n.dispatch;var a=null;var f=null;var o=Cs(typeof r==="string"?r:r.name,i.schema);if(!o)return false;if(o==="node")a=jo(r,i.schema);if(o==="mark")f=Wo(r,i.schema);var s=false;e.selection.ranges.forEach((function(r){var n=r.$from.pos;var o=r.$to.pos;var l;var v;var c;var h;if(e.selection.empty)i.doc.nodesBetween(n,o,(function(r,t){if(a&&a===r.type){s=true;c=Math.max(t,n);h=Math.min(t+r.nodeSize,o);l=t;v=r}}));else i.doc.nodesBetween(n,o,(function(r,i){if(i<n&&a&&a===r.type){s=true;c=Math.max(i,n);h=Math.min(i+r.nodeSize,o);l=i;v=r}if(i>=n&&i<=o){if(a&&a===r.type){s=true;if(u)e.setNodeMarkup(i,void 0,__assign(__assign({},r.attrs),t))}if(f&&r.marks.length)r.marks.forEach((function(a){if(f===a.type){s=true;if(u){var l=Math.max(i,n);var v=Math.min(i+r.nodeSize,o);e.addMark(l,v,f.create(__assign(__assign({},a.attrs),t)))}}}))}}));if(v){if(l!==void 0&&u)e.setNodeMarkup(l,void 0,__assign(__assign({},v.attrs),t));if(f&&v.marks.length)v.marks.forEach((function(r){if(f===r.type&&u)e.addMark(c,h,f.create(__assign(__assign({},r.attrs),t)))}))}}));return s}};var Tv=new Tn("__tiptap_decorations__");
//#endregion
//#region src/commands/updateDecorations.ts
var Av=function(r){return function(t){var n=t.tr,e=t.dispatch;if(e)n.setMeta(Tv,{type:"force",name:r});return true}};
//#endregion
//#region src/commands/wrapIn.ts
var Ev=function(r,t){if(t===void 0){t={}}return function(n){var e=n.state,i=n.dispatch;var u=jo(r,e.schema);return Zn(u,t)(e,i)}};
//#endregion
//#region src/commands/wrapInList.ts
var Sv=function(r,t){if(t===void 0){t={}}return function(n){var e=n.state,i=n.dispatch;var u=jo(r,e.schema);return te(u,t)(e,i)}};
//#endregion
//#region src/commands/index.ts
var Cv=s({blur:function(){return Mo},clearContent:function(){return Oo},clearNodes:function(){return To},command:function(){return Ao},createParagraphNear:function(){return Eo},cut:function(){return So},deleteCurrentNode:function(){return Co},deleteNode:function(){return Ro},deleteRange:function(){return Lo},deleteSelection:function(){return Ho},enter:function(){return Do},exitCode:function(){return zo},extendMarkRange:function(){return qo},first:function(){return Vo},focus:function(){return rs},forEach:function(){return ts},insertContent:function(){return ns},insertContentAt:function(){return ls},insertDefaultBlock:function(){return cs},joinBackward:function(){return ps},joinDown:function(){return ds},joinForward:function(){return bs},joinItemBackward:function(){return ms},joinItemForward:function(){return ws},joinTextblockBackward:function(){return ys},joinTextblockForward:function(){return ks},joinUp:function(){return hs},keyboardShortcut:function(){return Ms},lift:function(){return Ts},liftEmptyBlock:function(){return As},liftListItem:function(){return Es},newlineInCode:function(){return Ss},resetAttributes:function(){return Rs},scrollIntoView:function(){return Ls},selectAll:function(){return Ns},selectNodeBackward:function(){return Ps},selectNodeForward:function(){return Is},selectParentNode:function(){return Hs},selectTextblockEnd:function(){return Ds},selectTextblockStart:function(){return zs},setContent:function(){return Us},setMark:function(){return Jl},setMeta:function(){return Xl},setNode:function(){return Yl},setNodeSelection:function(){return Ql},setTextDirection:function(){return Zl},setTextSelection:function(){return rv},sinkListItem:function(){return tv},splitBlock:function(){return ev},splitListItem:function(){return iv},toggleList:function(){return gv},toggleMark:function(){return mv},toggleNode:function(){return wv},toggleWrap:function(){return yv},undoInputRule:function(){return kv},unsetAllMarks:function(){return _v},unsetMark:function(){return xv},unsetTextDirection:function(){return Mv},updateAttributes:function(){return Ov},updateDecorations:function(){return Av},wrapIn:function(){return Ev},wrapInList:function(){return Sv}});
//#endregion
//#region src/decorations/decorationApplyScope.ts
/**
            * Tracks which editors are running decoration create() callbacks inside state.apply,
            * using a private WeakMap to keep this off the public Editor surface.
            */var jv=new WeakMap;
/**
            * Marks callback as decoration-apply work for editor, so editor.state can warn
            * about stale reads. Counts depth to handle nested applies.
            *
            * @param editor The editor the decorations belong to
            * @param callback The work to run inside the scope
            * @returns Whatever `callback` returns
            * @example
            * runInDecorationApplyScope(editor, () => spec.create({ editor, state, view }))
            */function Rv(r,t){var n;jv.set(r,((n=jv.get(r))!==null&&n!==void 0?n:0)+1);try{return t()}finally{var e;var i=((e=jv.get(r))!==null&&e!==void 0?e:1)-1;if(i>0)jv.set(r,i);else jv.delete(r)}}
//#endregion
//#region src/EventEmitter.ts
var Lv=/** @class */function(){function r(){this.callbacks={}}r.prototype.on=function(r,t){if(!this.callbacks[r])this.callbacks[r]=[];this.callbacks[r].push(t);return this};r.prototype.emit=function(r){var t=this;var n=[];for(var e=1;e<arguments.length;e++){n[e-1]=arguments[e]}var i=this.callbacks[r];if(i)i.forEach((function(r){return r.apply(t,n)}));return this};r.prototype.off=function(r,t){var n=this.callbacks[r];if(n){if(t)this.callbacks[r]=n.filter((function(r){return r!==t}));else delete this.callbacks[r]}return this};r.prototype.once=function(r,t){var n=this;var e=function(){var i=[];for(var u=0;u<arguments.length;u++){i[u]=arguments[u]}n.off(r,e);t.apply(n,i)};return this.on(r,e)};r.prototype.removeAllListeners=function(){this.callbacks={}};return r}();
//#endregion
//#region src/decorations/helpers/decorationsToPMDecorations.ts
function Nv(r){return r.kind==="widget"}
/**
            * Converts a list of decorations to ProseMirror decorations.
            * @param decorations The decorations to convert.
            * @param extensionName The name of the extension that created the decorations.
            * @returns The converted decorations and the widget keys.
            */function Pv(r,t){var n=[];var e=new Set;for(var i=0,u=r;i<u.length;i++){var a=u[i];if(a.kind==="widget"){if(Nv(a))e.add(a.key)}n.push(a.toPMDecoration(t))}return{decorations:n,widgetKeys:e}}
//#endregion
//#region src/decorations/helpers/buildDecorationSet.ts
/**
            * Builds a DecorationSet from a list of decorations.
            * @param doc The document to build the decoration set for.
            * @param decorations The decorations to build the set from.
            * @param extensionName The name of the extension that created the decorations.
            * @returns The built decoration set and the widget keys.
            */function Iv(r,t,n){var e=Pv(t,n),i=e.decorations,u=e.widgetKeys;return{set:Ja.create(r,i),widgetKeys:u}}
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
            */function Hv(r){var t=r.position,n=r.from,e=r.to,i=r.docSize;if(t<n)return false;if(t<e)return true;return t===e&&e===i}
//#endregion
//#region src/decorations/helpers/filterOutOfRangeDecorations.ts
/**
            * Filter decorations the block range `[from, to)` does not own.
            * Must match the stale sweep in `DecorationManager.rebuildRanges`.
            *
            * @param options The decorations, the range, and the warning bookkeeping.
            * @returns The filtered decorations.
            */function Dv(r){var t=r.decorations,n=r.from,e=r.to,i=r.docSize,u=r.extensionName,a=r.warnedExtensions;return t.filter((function(r){if(Hv({position:r.anchor,from:n,to:e,docSize:i}))return true;if(r.anchor===e)return false;if(!a.has(u)){a.add(u);console.warn('[tiptap warn]: Extension "'.concat(u,'" returned a decoration outside the requested range [').concat(n,", ").concat(e,"). It was ignored."))}return false}))}
//#endregion
//#region src/decorations/helpers/widgetKeyOf.ts
/**
            * Extracts the widget key from a decoration spec.
            * @param decoration The decoration to extract the key from.
            * @returns The widget key, or undefined if the decoration has no key.
            */function zv(r){var t;var n=(t=r.spec)===null||t===void 0?void 0:t.key;return typeof n==="string"?n:void 0}
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
            */function Bv(r){return r.jsonID==="attr"}
//#endregion
//#region src/decorations/helpers/hasResolvableChangedRange.ts
/**
            * Check if a step has a resolvable changed range.
            * @param step The step to check.
            * @returns True if the step has a resolvable changed range, false otherwise.
            */function Uv(r){var t=false;r.getMap().forEach((function(){t=true}));if(t||Bv(r))return true;var n=r;return typeof n.from==="number"&&typeof n.to==="number"}
//#endregion
//#region src/decorations/helpers/getRebuildRanges.ts
/**
            * Expands a changed range to the top-level blocks it touches. Blocks are
            * ordered, so the walk stops as soon as it passes the range.
            */function $v(r,t){var n=null;var e=0;var i=0;for(var u=0;u<r.childCount;u+=1){if(i>t.to)break;var a=i+r.child(u).nodeSize;if(a>=t.from){if(n===null)n=i;e=a}i=a}return n===null?null:{from:n,to:e}}
/**
            * Returns the top-level block ranges to recompute after a transaction,
            * or `{ type: 'full' }` when the whole document must be rebuilt.
            * @param tr The transaction to inspect.
            * @param doc The new document after the transaction.
            * @returns The block ranges to recompute, or a full-recompute signal.
            */function Kv(r,t){if(r.steps.some((function(r){return!Uv(r)})))return{type:"full"};var n=El(r).map((function(r){var t=r.newRange;return t}));r.steps.forEach((function(t,e){if(!Bv(t))return;var i=r.mapping.slice(e);n.push({from:i.map(t.pos,-1),to:i.map(t.pos+1)})}));var e=[];for(var i=0,u=n;i<u.length;i++){var a=u[i];var f=$v(t,a);if(f)e.push(f)}e.sort((function(r,t){return r.from-t.from}));var o=[];for(var s=0,l=e;s<l.length;s++){var v=l[s];var c=o[o.length-1];if(c&&v.from<=c.to)c.to=Math.max(c.to,v.to);else o.push(__assign({},v))}return{type:"ranges",ranges:o}}
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
            */function Fv(r,t,n,e){return r.map(t,n,{onRemove:function(r){var t=r===null||r===void 0?void 0:r.key;if(typeof t==="string")e.delete(t)}})}
//#endregion
//#region src/decorations/helpers/mapDecorations.ts
/**
            * Moves an extension's existing decorations to their new positions after a
            * transaction, and prunes widget keys for any widget whose position was deleted.
            * @param name The name of the decoration extension.
            * @param previous The previous decoration manager state.
            * @param tr The transaction to map through.
            * @returns The updated decoration set and widget keys.
            */function Wv(r,t,n){var e,i;var u=(e=t.decorationSetsByExtension[r])!==null&&e!==void 0?e:Ja.empty;var a=new Set((i=t.widgetKeysByExtension[r])!==null&&i!==void 0?i:[]);return{set:Fv(u,n.mapping,n.doc,a),widgetKeys:a}}
//#endregion
//#region src/decorations/helpers/mergeDecorationSets.ts
/**
            * Merges multiple decoration sets into a single decoration set.
            * @param doc The document to merge the decoration sets for.
            * @param decorationSetsByExtension The decoration sets to merge.
            * @returns The merged decoration set.
            */function qv(r,t){var n=Object.values(t).flatMap((function(r){return r.find()}));return Ja.create(r,n)}
//#endregion
//#region src/decorations/helpers/unionWidgetKeys.ts
/**
            * Unions all widget keys from multiple extensions into a single set.
            * @param widgetKeysByExtension The widget keys to union.
            * @returns The unioned widget keys.
            */function Vv(r){var t=new Set;for(var n=0,e=Object.values(r);n<e.length;n++){var i=e[n];for(var u=0,a=i;u<a.length;u++){var f=a[u];t.add(f)}}return t}
//#endregion
//#region src/decorations/helpers/validateDecorationSpec.ts
/**
            * Validates a decoration spec to ensure it follows the correct pattern for its update strategy.
            * @param name The name of the extension.
            * @param spec The decoration spec to validate
            */function Gv(r,t){var n;switch((n=t.update)!==null&&n!==void 0?n:"document"){case"document":if(t.createInRange)throw new Error('[tiptap error]: Extension "'.concat(r,'" provides createInRange() but does not use the "changedRanges" decoration update strategy.'));return;case"changedRanges":if(!t.createInRange)throw new Error('[tiptap error]: Extension "'.concat(r,'" uses the "changedRanges" decoration update strategy but does not provide createInRange().'));return;case"manual":if(t.createInRange)throw new Error('[tiptap error]: Extension "'.concat(r,'" uses the "manual" decoration update strategy, which is not compatible with createInRange(). createInRange() requires the "changedRanges" strategy.'));if(t.shouldUpdate)throw new Error('[tiptap error]: Extension "'.concat(r,'" cannot combine the "manual" decoration update strategy with shouldUpdate().'));return;default:throw new Error('[tiptap error]: Extension "'.concat(r,'" uses an unknown decoration update strategy. Expected "document", "changedRanges", or "manual".'))}}
//#endregion
//#region src/decorations/helpers/shouldRecomputeDecoration.ts
/**
            * Decides whether a decoration spec should be recomputed for a transaction.
            * @param spec The decoration spec to check.
            * @param props Properties containing editor, transaction, and state.
            * @param forced Whether recomputation was forced.
            * @returns `true` if the decoration should be recomputed.
            */function Jv(r,t,n){if(n)return true;if(r.update==="manual")return false;return r.shouldUpdate?r.shouldUpdate(t):t.tr.docChanged}
//#endregion
//#region src/decorations/DecorationManager.ts
var Xv=new Set;var Yv=/** @class */function(){function r(r){var t=this;this.warnedWidgetKeys=new Set;this.warnedOutOfRangeExtensions=new Set;this.handleBeforeTransaction=function(r){var n=r.nextState;var e=Tv.getState(n);if(e)t.warnDuplicateWidgetKeys(e)};this.editor=r.editor;this.entries=this.resolveEntries(r.entries);this.entries.forEach((function(r){var t=r.name,n=r.spec;return Gv(t,n)}));this.plugin=this.entries.length>0?this.createPlugin():null;this.editor.on("beforeTransaction",this.handleBeforeTransaction)}r.prototype.destroy=function(){this.editor.off("beforeTransaction",this.handleBeforeTransaction)};
/**
                * Returns the set of live widget keys from all decoration extensions.
                * @returns A readonly set of widget keys
                */r.prototype.liveWidgetKeys=function(){var r,t;return(r=(t=Tv.getState(this.editor.state))===null||t===void 0?void 0:t.widgetKeys)!==null&&r!==void 0?r:Xv};Object.defineProperty(r.prototype,"mountedView",{
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
                */r.prototype.resolveEntries=function(r){var t=[];for(var n=0,e=r;n<e.length;n++){var i=e[n],u=i.name,a=i.addDecorations;var f=a();if(f)t.push({name:u,spec:f})}return t};
/**
                * Creates the ProseMirror plugin for managing decorations.
                * @returns A ProseMirror plugin with state management
                */r.prototype.createPlugin=function(){var r=this;var t=this,n=t.editor,e=t.entries;return new xn({key:Tv,state:{init:function(t,n){var i={};var u={};for(var a=0,f=e;a<f.length;a++){var o=f[a],s=o.name,l=o.spec;var v=r.buildFullSet(s,l,n),c=v.set,h=v.widgetKeys;i[s]=c;u[s]=h}var d={decorationSetsByExtension:i,widgetKeysByExtension:u,mergedDecorationSet:r.buildMergedSet(n.doc,i),widgetKeys:Vv(u)};r.warnDuplicateWidgetKeys(d);return d},apply:function(t,i,u,a){var f=t.getMeta(Tv);var o=(f===null||f===void 0?void 0:f.type)==="force"&&!f.name;var s=(f===null||f===void 0?void 0:f.type)==="force"?f.name:void 0;var l={};var v={};var c=new Set;Rv(n,(function(){for(var f=0,h=e;f<h.length;f++){var d=h[f],p=d.name,b=d.spec;var g=o||s===p;if(!Jv(b,{editor:n,tr:t,oldState:u,newState:a},g)){var m=Wv(p,i,t);l[p]=m.set;v[p]=m.widgetKeys}else if(b.update==="changedRanges"&&t.docChanged&&!g){var m=r.applyChangedRangesRecompute(p,b,i,t,a);l[p]=m.set;v[p]=m.widgetKeys;c.add(p)}else{var w=r.buildFullSet(p,b,a),y=w.set,k=w.widgetKeys;l[p]=y;v[p]=k;c.add(p)}}}));if(c.size===0&&!t.docChanged)return i;return{decorationSetsByExtension:l,widgetKeysByExtension:v,mergedDecorationSet:r.mergeAfterApply({entries:e,previous:i,tr:t,decorationSetsByExtension:l,recomputedNames:c}),widgetKeys:Vv(v)}}},props:{decorations:function(r){var t,n;return(t=(n=Tv.getState(r))===null||n===void 0?void 0:n.mergedDecorationSet)!==null&&t!==void 0?t:Ja.empty}}})};
/**
                * Applies changed ranges recomputation to a decoration set, dropping stale decorations and rebuilding only the touched blocks.
                * @param name The name of the decoration extension
                * @param spec The decoration spec
                * @param previous The previous decoration manager state
                * @param tr The transaction to apply
                * @param newState The new editor state
                * @returns The updated decoration set and widget keys
                */r.prototype.applyChangedRangesRecompute=function(r,t,n,e,i){var u=Kv(e,i.doc);if(u.type==="full")return this.buildFullSet(r,t,i);return this.rebuildRanges(r,t,n,e,i,u.ranges)};
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
                */r.prototype.rebuildRanges=function(r,t,n,e,i,u){var a=this;var f,o;var s=(f=n.decorationSetsByExtension[r])!==null&&f!==void 0?f:Ja.empty;var l=new Set((o=n.widgetKeysByExtension[r])!==null&&o!==void 0?o:[]);var v=Fv(s,e.mapping,e.doc,l);var c=i.doc.content.size;var h=function(n,e){var u=v.find(n,e).filter((function(r){return Hv({position:r.from,from:n,to:e,docSize:c})}));for(var f=0,o=u;f<o.length;f++){var s=o[f];var h=zv(s);if(h)l.delete(h)}v=v.remove(u);var p=Pv(Dv({decorations:d.runCreate(r,"createInRange",(function(){return t.createInRange({editor:a.editor,state:i,view:a.mountedView,from:n,to:e})})),from:n,to:e,docSize:c,extensionName:r,warnedExtensions:d.warnedOutOfRangeExtensions}),r),b=p.decorations,g=p.widgetKeys;v=v.add(i.doc,b);for(var m=0,w=g;m<w.length;m++){var h=w[m];l.add(h)}};var d=this;for(var p=0,b=u;p<b.length;p++){var g=b[p],m=g.from,w=g.to;h(m,w)}return{set:v,widgetKeys:l}};
/**
                * Builds a full decoration set for the entire document.
                * @param name The name of the decoration extension
                * @param spec The decoration spec
                * @param state The editor state
                * @returns The decoration set and widget keys
                */r.prototype.buildFullSet=function(r,t,n){var e=this;var i=this.runCreate(r,"create",(function(){return t.create({editor:e.editor,state:n,view:e.mountedView})}));return Iv(n.doc,i,r)};
/**
                * Runs a decoration callback and swallows anything it throws. These run inside
                * `state.apply`, where an uncaught error would abort the whole transaction.
                * @param name The extension name.
                * @param method The callback name, used in the error message.
                * @param create The callback to run.
                * @returns The decorations, or an empty array if the callback threw.
                */r.prototype.runCreate=function(r,t,n){try{return n()}catch(n){console.error('[tiptap error]: Extension "'.concat(r,'" threw in `addDecorations().').concat(t,"()`. Its decorations were dropped for this update."),n);return[]}};r.prototype.warnDuplicateWidgetKeys=function(r){return};
/**
                * Builds the merged DecorationSet during init. Skips the merge for a
                * single extension since its per-extension set is already correct.
                * @param doc The document to build the merged set for.
                * @param decorationSetsByExtension The per-extension decoration sets.
                * @returns The merged decoration set.
                */r.prototype.buildMergedSet=function(r,t){var n=Object.keys(t);if(n.length===1)return t[n[0]];return qv(r,t)};
/**
                * Computes the merged DecorationSet after apply. Single extension skips the
                * merge; nothing recomputed maps the previous merged set forward; otherwise
                * the merge is rebuilt from the per-extension sets.
                */r.prototype.mergeAfterApply=function(r){var t=r.entries,n=r.previous,e=r.tr,i=r.decorationSetsByExtension,u=r.recomputedNames;if(t.length===1)return i[t[0].name];if(u.size===0)return n.mergedDecorationSet.map(e.mapping,e.doc);return qv(e.doc,i)};return r}();
//#endregion
//#region src/utilities/canInsertNode.ts
function Qv(r,t){var n=r.selection;var e=n.$from;if(n instanceof fn){var i=e.index();return e.parent.canReplaceWith(i,i+1,t)}var u=e.depth;while(u>=0){var i=e.index(u);if(e.node(u).contentMatchAt(i).matchType(t))return true;u-=1}return false}
//#endregion
//#region src/utilities/createStyleTag.ts
function Zv(r,t,n){var e=document.querySelector("style[data-tiptap-style".concat("","]"));if(e!==null)return e;var i=document.createElement("style");if(t)i.setAttribute("nonce",t);i.setAttribute("data-tiptap-style".concat(""),"");i.innerHTML=r;document.getElementsByTagName("head")[0].appendChild(i);return i}
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
            */function rc(r,t){var n=r.getAttribute("style");if(!n)return null;var e=n.split(";").map((function(r){return r.trim()})).filter(Boolean);var i=t.toLowerCase();for(var u=e.length-1;u>=0;u-=1){var a=e[u];var f=a.indexOf(":");if(f===-1)continue;if(a.slice(0,f).trim().toLowerCase()===i)return a.slice(f+1).trim()}return null}
//#endregion
//#region src/utilities/isNumber.ts
function tc(r){return typeof r==="number"}
//#endregion
//#region src/utilities/isPlainObject.ts
function nc(r){return Object.prototype.toString.call(r).slice(8,-1)}function ec(r){if(nc(r)!=="Object")return false;return r.constructor===Object&&Object.getPrototypeOf(r)===Object.prototype}
//#endregion
//#region src/utilities/isValidCSSStyleValue.ts
/**
            * Checks whether a value can be inserted into one CSS declaration.
            * @param value - The CSS property value.
            * @returns Whether the value stays inside one declaration.
            */function ic(r){return typeof r==="string"&&r.trim().length>0&&!/[;{}]/.test(r)}
//#endregion
//#region src/utilities/markdown/parseIndentedBlocks.ts
function uc(r,t){return r.replace(/^[ \t]*/,(function(r){var n=4;var e=0;for(var i=0,u=r;i<u.length;i++){var a=u[i];e+=a==="\t"?n-e%n:1}return" ".repeat(Math.max(0,e-t))}))}function ac(r,t){var n="text\n".concat(r,"\n");var e=t(n)[0];return((e===null||e===void 0?void 0:e.type)==="paragraph"||(e===null||e===void 0?void 0:e.type)==="text")&&e.raw===n}
/** Joins paragraph continuation lines and leaves nested blocks for separate parsing. */function fc(r,t,n){var e;var i=t.split("\n");var u=(e=n.isParagraphContinuation)!==null&&e!==void 0?e:function(r){return ac(r,n.blockTokens)};var a=0;for(var f=0,o=i;f<o.length;f++){var s=o[f];if(!s.trim()||!u(s))break;a+=1}return{mainContent:__spreadArray([r],i.slice(0,a).map((function(r){return r.trimStart()})),true).join("\n"),nestedContent:i.slice(a).join("\n")}}
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
            */function oc(r,t,n){var e=r.split("\n");var i=[];var u="";var a=0;var f=t.baseIndentSize||2;var o=function(){var r=e[a];var o=r.match(t.itemPattern);if(!o){if(i.length>0)return"break";else if(r.trim()===""){a+=1;u="".concat(u).concat(r,"\n");return"continue"}else return{value:void 0}}var v=t.extractItemData(o);var c=v.indentLevel,h=v.mainContent;u="".concat(u).concat(r,"\n");var d=[h];a+=1;while(a<e.length){var p=e[a];if(p.trim()===""){var b=e.slice(a+1).findIndex((function(r){return r.trim()!==""}));if(b===-1)break;if((((l=e[a+1+b].match(/^(\s*)/))===null||l===void 0||(l=l[1])===null||l===void 0?void 0:l.length)||0)>c){d.push(p);u="".concat(u).concat(p,"\n");a+=1;continue}else break}if((((s=p.match(/^(\s*)/))===null||s===void 0||(s=s[1])===null||s===void 0?void 0:s.length)||0)>c){d.push(p);u="".concat(u).concat(p,"\n");a+=1}else break}var g=void 0;var m=d.slice(1);if(m.length>0){var w=fc(h,m.map((function(r){return uc(r,c+f)})).join("\n"),n);v.mainContent=w.mainContent;var y=w.nestedContent;if(y.trim()){if(t.customNestedParser)g=t.customNestedParser(y);else g=n.blockTokens(y)}}var k=t.createToken(v,g);i.push(k)};var s,l;while(a<e.length){var v=o();if(typeof v==="object")return v.value;if(v==="break")break}if(i.length===0)return;return{items:i,raw:u.slice(0,r.length)}}
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
            */var sc=4;
/** Width of indentation in Markdown columns, where a tab runs to the next tab stop. */function lc(r){var t=0;for(var n=0,e=r;n<e.length;n++){var i=e[n];t=i==="\t"?t+sc-t%sc:t+1}return t}function vc(r,t,n,e,i){if(!r||!Array.isArray(r.content))return"";var u=typeof n==="function"?n(e):n;var a=r.content,f=a[0],o=a.slice(1);var s=t.renderChildren([f]);var l="".concat(u).concat((i===null||i===void 0?void 0:i.indentMainContent)?s.split("\n").map((function(r,n){return n===0?r:t.indent(r)})).join("\n"):s);if(o&&o.length>0)o.forEach((function(r,n){var e,a;var f=(e=(a=t.renderChild)===null||a===void 0?void 0:a.call(t,r,n+1))!==null&&e!==void 0?e:t.renderChildren([r]);if(f!==void 0&&f!==null){var o=function(r){if(!(i===null||i===void 0?void 0:i.alignNestedToPrefix))return t.indent(r);var n=t.indent("");var e=lc(u);return(lc(n)>=e?n:" ".repeat(e))+r};var s=f.split("\n").map((function(r){return r?o(r):o("")})).join("\n");l+=r.type==="paragraph"?"\n\n".concat(s):"\n".concat(s)}}));return l}
//#endregion
//#region src/utilities/mergeDeep.ts
function cc(r,t){var n=__assign({},r);if(ec(r)&&ec(t))Object.keys(t).forEach((function(e){if(ec(t[e])&&ec(r[e]))n[e]=cc(r[e],t[e]);else n[e]=t[e]}));return n}
//#endregion
//#region src/MarkView.ts
function hc(r,t,n){if(n===void 0){n={}}var e=t.state;var i=e.doc,u=e.tr;var a=r;i.descendants((function(t,e){var i=u.mapping.map(e);var f=u.mapping.map(e)+t.nodeSize;var o=null;t.marks.forEach((function(r){if(r!==a)return false;o=r}));if(!o)return;var s=false;Object.keys(n).forEach((function(r){if(n[r]!==o.attrs[r])s=true}));if(s){var l=r.type.create(__assign(__assign({},r.attrs),n));u.removeMark(i,f,r.type);u.addMark(i,f,l)}}));if(u.docChanged)t.view.dispatch(u)}
//#endregion
//#region src/InputRule.ts
var dc=/** @class */function(){function r(r){var t;this.find=r.find;this.handler=r.handler;this.undoable=(t=r.undoable)!==null&&t!==void 0?t:true}return r}();var pc=function(r,t){if(Bo(t))return t.exec(r);var n=t(r);if(!n)return null;var e=[n.text];e.index=n.index;e.input=r;e.data=n.data;if(n.replaceWith){if(!n.text.includes(n.replaceWith))console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');e.push(n.replaceWith)}return e};
/**
            * Prepares the typed text so the rule handler can inspect the resulting document.
            */function bc(r){var t=r.editor,n=r.from,e=r.to,i=r.text,u=r.insertText;if(!u)return{inputTransaction:null,tr:t.view.state.tr};var a=t.view.state.tr.insertText(i,n,e);return{inputTransaction:a,tr:kn.create({doc:a.doc,selection:a.selection,storedMarks:a.storedMarks}).tr}}
/**
            * Runs a matching rule and dispatches the typed text before its conversion.
            */function gc(r){var t=r.editor,n=r.from,e=r.to,i=r.text,u=r.rule,a=r.match,f=r.plugin,o=r.insertText;var s=t.view;var l=bc({editor:t,from:n,to:e,text:i,insertText:o}),v=l.inputTransaction,c=l.tr;var h=v?n+i.length:e;var d=_o({state:s.state,transaction:c});var p={from:n-(a[0].length-i.length),to:h};var b=new xo({editor:t,state:d}),g=b.commands,m=b.chain,w=b.can;if(u.handler({state:d,range:p,match:a,commands:g,chain:m,can:w})===null||!c.steps.length)return false;if(v){s.dispatch(v);if(!s.state.doc.eq(v.doc))return true}ho(c);c.setMeta("inputRule",true);if(u.undoable)c.setMeta(f,{transform:c,from:n,to:h,text:i});s.dispatch(c);return true}
/**
            * Checks that the part of a match already in the document has matching positions.
            */function mc(r,t,n){var e=t[0].length-n.length;if(e<=0)return true;var i=r.parentOffset-e;return i>=0&&r.parent.textBetween(i,r.parentOffset)===t[0].slice(0,e)}function wc(r){var t;var n=r.editor,e=r.from,i=r.to,u=r.text,a=r.rules,f=r.plugin,o=r.insertText;var s=n.view;if(s.composing)return false;var l=s.state.doc.resolve(e);if(l.parent.type.spec.code||!!((t=l.nodeBefore||l.nodeAfter)===null||t===void 0?void 0:t.marks.find((function(r){return r.type.spec.code}))))return false;var v=Nl(l)+u;for(var c=0,h=a;c<h.length;c++){var d=h[c];var p=pc(v,d.find);if(!p||!mc(l,p,u))continue;if(gc({editor:n,from:e,to:i,text:u,rule:d,match:p,plugin:f,insertText:o}))return true}return false}
/**
            * Create an input rules plugin. When enabled, it will cause text
            * input that matches any of the given rules to trigger the rule’s
            * action.
            */function yc(r){var t=r.editor,n=r.rules;var e=new xn({state:{init:function(){return null},apply:function(r,i,u){var a;var f=r.getMeta(e);if(f)return f;if(i&&((a=r.getMeta("appendedTransaction"))===null||a===void 0?void 0:a.getMeta(e))){var o=new Qt(i.transform.before);for(var s=0,l=__spreadArray(__spreadArray([],i.transform.steps,true),r.steps,true);s<l.length;s++){var v=l[s];o.step(v)}return __assign(__assign({},i),{transform:o})}var c=r.getMeta("applyInputRules");if(!!c)setTimeout((function(){var r=c.text;if(typeof r==="string")r=r;else r=Js(p.from(r),u.schema);var i=c.from;var a=i+r.length;wc({editor:t,from:i,to:a,text:r,rules:n,plugin:e})}));return r.selectionSet||r.docChanged?null:i}},props:{handleTextInput:function(r,i,u,a){return wc({editor:t,from:i,to:u,text:a,rules:n,plugin:e,insertText:true})},handleDOMEvents:{compositionend:function(r){setTimeout((function(){var i=r.state.selection.$cursor;if(i)wc({editor:t,from:i.pos,to:i.pos,text:"",rules:n,plugin:e})}));return false}},handleKeyDown:function(r,i){if(i.key!=="Enter")return false;var u=r.state.selection.$cursor;if(u)return wc({editor:t,from:u.pos,to:u.pos,text:"\n",rules:n,plugin:e});return false}},isInputRules:true});return e}
//#endregion
//#region src/Extendable.ts
var kc=/** @class */function(){function r(r){if(r===void 0){r={}}this.type="extendable";this.parent=null;this.child=null;this.name="";this.config={name:this.name};this.config=__assign(__assign({},this.config),r);this.name=this.config.name}Object.defineProperty(r.prototype,"options",{get:function(){return __assign({},fl(Vs(this,"addOptions",{name:this.name})))},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"storage",{get:function(){return __assign({},fl(Vs(this,"addStorage",{name:this.name,options:this.options})))},enumerable:false,configurable:true});r.prototype.configure=function(r){var t=this;if(r===void 0){r={}}var n=this.extend(__assign(__assign({},this.config),{addOptions:function(){return cc(t.options,r)}}));n.name=this.name;n.parent=this.parent;this.child=null;return n};r.prototype.extend=function(r){if(r===void 0){r={}}var t=new this.constructor(__assign(__assign({},this.config),r));t.parent=this;this.child=t;t.name="name"in r?r.name:t.parent.name;return t};return r}();
//#endregion
//#region src/Mark.ts
/**
            * The Mark class is used to create custom mark extensions.
            * @see https://tiptap.dev/api/extensions#create-a-new-extension
            */var _c=/** @class */function(r){__extends(t,r);function t(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}var e=r.apply(this,t)||this;e.type="mark";return e}
/**
                * Create a new Mark instance
                * @param config - Mark configuration object or a function that returns a configuration object
                */t.create=function(r){if(r===void 0){r={}}var n=typeof r==="function"?r():r;return new t(n)};t.handleExit=function(r){var t=r.editor,n=r.mark;var e=t.state.tr;var i=t.state.selection.$from;if(i.pos===i.end()){var u=i.marks();if(!!!u.find((function(r){return(r===null||r===void 0?void 0:r.type.name)===n.name})))return false;var a=u.find((function(r){return(r===null||r===void 0?void 0:r.type.name)===n.name}));if(a)e.removeStoredMark(a);e.insertText(" ",i.pos);t.view.dispatch(e);return true}return false};t.prototype.configure=function(t){return r.prototype.configure.call(this,t)};t.prototype.extend=function(t){var n=typeof t==="function"?t():t;return r.prototype.extend.call(this,n)};return t}(kc);
//#endregion
//#region src/PasteRule.ts
/**
            * Paste rules are used to react to pasted content.
            * @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#paste-rules
            */var xc=/** @class */function(){function r(r){this.find=r.find;this.handler=r.handler}return r}();var Mc=function(r,t,n){if(Bo(t))return __spreadArray([],r.matchAll(t),true);var e=t(r,n);if(!e)return[];return e.map((function(t){var n=[t.text];n.index=t.index;n.input=r;n.data=t.data;if(t.replaceWith){if(!t.text.includes(t.replaceWith))console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');n.push(t.replaceWith)}return n}))};function Oc(r){var t=r.editor,n=r.state,e=r.from,i=r.to,u=r.rule,a=r.pasteEvent,f=r.dropEvent;var o=new xo({editor:t,state:n}),s=o.commands,l=o.chain,v=o.can;var c=[];n.doc.nodesBetween(e,i,(function(r,t){var o,h,d,p;if(((o=r.type)===null||o===void 0||(o=o.spec)===null||o===void 0?void 0:o.code)||!(r.isText||r.isTextblock||r.isInline))return;var b=(h=(d=(p=r.content)===null||p===void 0?void 0:p.size)!==null&&d!==void 0?d:r.nodeSize)!==null&&h!==void 0?h:0;var g=Math.max(e,t);var m=Math.min(i,t+b);if(g>=m)return;var w=r.isText?r.text||"":r.textBetween(g-t,m-t,void 0,"￼");Mc(w,u.find,a).forEach((function(r){if(r.index===void 0)return;var t=g+r.index+1;var e=t+r[0].length;var i={from:n.tr.mapping.map(t),to:n.tr.mapping.map(e)};var o=u.handler({state:n,range:i,match:r,commands:s,chain:l,can:v,pasteEvent:a,dropEvent:f});c.push(o)}))}));return c.every((function(r){return r!==null}))}var Tc=null;var Ac=function(r){var t;var n=new ClipboardEvent("paste",{clipboardData:new DataTransfer});(t=n.clipboardData)===null||t===void 0||t.setData("text/html",r);return n};
/**
            * Create an paste rules plugin. When enabled, it will cause pasted
            * text that matches any of the given rules to trigger the rule’s
            * action.
            */function Ec(r){var t=r.editor,n=r.rules;var e=null;var i=false;var u=false;var a=typeof ClipboardEvent!=="undefined"?new ClipboardEvent("paste"):null;var f;try{f=typeof DragEvent!=="undefined"?new DragEvent("drop"):null}catch(r){f=null}var o=function(r){var n=r.state,e=r.from,i=r.to,u=r.rule,o=r.pasteEvt;var s=n.tr;var l=_o({state:n,transaction:s});if(!Oc({editor:t,state:l,from:Math.max(e-1,0),to:i.b-1,rule:u,pasteEvent:o,dropEvent:f})||!s.steps.length)return;try{f=typeof DragEvent!=="undefined"?new DragEvent("drop"):null}catch(r){f=null}a=typeof ClipboardEvent!=="undefined"?new ClipboardEvent("paste"):null;return s};t.on("destroy",(function(){if(Tc===t)Tc=null}));return n.map((function(r){return new xn({view:function(r){var n=function(n){var i;e=((i=r.dom.parentElement)===null||i===void 0?void 0:i.contains(n.target))?r.dom.parentElement:null;if(e)Tc=t};var i=function(){if(Tc)Tc=null};window.addEventListener("dragstart",n);window.addEventListener("dragend",i);return{destroy:function(){window.removeEventListener("dragstart",n);window.removeEventListener("dragend",i)}}},props:{handleDOMEvents:{drop:function(r,t){u=e===r.dom.parentElement;f=t;if(!u){var n=Tc;if(n===null||n===void 0?void 0:n.isEditable)setTimeout((function(){if(n.isDestroyed)return;var r=n.state.selection;if(r)n.commands.deleteRange({from:r.from,to:r.to})}),10)}return false},paste:function(r,t){var n;var e=(n=t.clipboardData)===null||n===void 0?void 0:n.getData("text/html");a=t;i=!!(e===null||e===void 0?void 0:e.includes("data-pm-slice"));return false}}},appendTransaction:function(t,n,e){var f=t[0];var s=f.getMeta("uiEvent")==="paste"&&!i;var l=f.getMeta("uiEvent")==="drop"&&!u;var v=f.getMeta("applyPasteRules");var c=!!v;if(!s&&!l&&!c)return;if(c){var h=v.text;if(typeof h==="string")h=h;else h=Js(p.from(h),e.schema);var d=v.from;var b=d+h.length;var g=Ac(h);return o({rule:r,state:e,from:d,to:{b:b},pasteEvt:g})}var m=n.doc.content.findDiffStart(e.doc.content);var w=n.doc.content.findDiffEnd(e.doc.content);if(!tc(m)||!w||m===w.b)return;return o({rule:r,state:e,from:m,to:w,pasteEvt:a})}})}))}
//#endregion
//#region src/ExtensionManager.ts
var Sc=/** @class */function(){function r(r,t){this.splittableMarks=[];this.nonClearableMarks=[];this.decorationManager=null;this.editor=t;this.baseExtensions=r;this.extensions=yl(r);this.hasSchemaSpec=t.options.schemaSpec!==void 0;this.schema=ml(this.extensions,t,t.options.schemaSpec);this.setupExtensions()}Object.defineProperty(r.prototype,"commands",{
/**
                    * Get all commands from the extensions.
                    * @returns An object with all commands where the key is the command name and the value is the command function
                    */
get:function(){var r=this;return this.extensions.reduce((function(t,n){var e=Vs(n,"addCommands",{name:n.name,options:n.options,storage:r.editor.extensionStorage[n.name],editor:r.editor,type:Rl(n.name,r.schema)});if(!e)return t;return __assign(__assign({},t),e())}),{})},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"plugins",{
/**
                    * Get all registered Prosemirror plugins from the extensions.
                    * @returns An array of Prosemirror plugins
                    */
get:function(){var r=this;var t=this.editor;var n=wl(__spreadArray([],this.extensions,true).reverse()).flatMap((function(n){var e={name:n.name,options:n.options,storage:r.editor.extensionStorage[n.name],editor:t,type:Rl(n.name,r.schema)};var i=[];var u=Vs(n,"addKeyboardShortcuts",e);var a={};if(n.type==="mark"&&Vs(n,"exitable",e))a.ArrowRight=function(){return _c.handleExit({editor:t,mark:n})};if(u){var f=Object.fromEntries(Object.entries(u()).map((function(r){var n=r[0],e=r[1];return[n,function(){return e({editor:t})}]})));a=__assign(__assign({},a),f)}var o=qf(a);i.push(o);var s=Vs(n,"addInputRules",e);if(zl(n,t.options.enableInputRules)&&s){var l=s();if(l&&l.length){var v=yc({editor:t,rules:l});var c=Array.isArray(v)?v:[v];i.push.apply(i,c)}}var h=Vs(n,"addPasteRules",e);if(zl(n,t.options.enablePasteRules)&&h){var l=h();if(l&&l.length){var d=Ec({editor:t,rules:l});i.push.apply(i,d)}}var p=Vs(n,"addProseMirrorPlugins",e);if(p){var b=p();i.push.apply(i,b)}return i}));var e=this.createDecorationPlugin();if(e)n.push(e);return n},enumerable:false,configurable:true});
/**
                * Aggregates decorations from extensions into a single plugin, or returns null
                * if none exist. Destroys the previous manager to avoid orphaned listeners.
                * @returns A ProseMirror plugin or `null`
                * @example
                * const plugin = editor.extensionManager.createDecorationPlugin()
                */r.prototype.createDecorationPlugin=function(){var r=this;var t;var n=this.editor;(t=this.decorationManager)===null||t===void 0||t.destroy();var e=[];this.extensions.forEach((function(t){var i=Vs(t,"addDecorations",{name:t.name,options:t.options,storage:r.editor.extensionStorage[t.name],editor:n,type:Rl(t.name,r.schema)});if(!i)return;e.push({name:t.name,addDecorations:i})}));this.decorationManager=new Yv({editor:n,entries:e});return this.decorationManager.plugin};Object.defineProperty(r.prototype,"attributes",{
/**
                    * Get all attributes from the extensions.
                    * @returns An array of attributes
                    */
get:function(){var r=ul(this.extensions);return this.hasSchemaSpec?Xs(r,this.schema):r},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"nodeViews",{
/**
                    * Get all node views from the extensions.
                    * @returns An object with all node views where the key is the node name and the value is the node view function
                    */
get:function(){var r=this;var t=this.editor;var n=il(this.extensions).nodeExtensions;return Object.fromEntries(n.filter((function(r){return!!Vs(r,"addNodeView")})).map((function(n){var e=r.attributes.filter((function(r){return r.type===n.name}));var i=Vs(n,"addNodeView",{name:n.name,options:n.options,storage:r.editor.extensionStorage[n.name],editor:t,type:jo(n.name,r.schema)});if(!i)return[];var u=i();if(!u)return[];var a=function(r,i,a,f,o){var s=cl(r,e);return u({node:r,view:i,getPos:a,decorations:f,innerDecorations:o,editor:t,extension:n,HTMLAttributes:s})};return[n.name,a]})))},enumerable:false,configurable:true});
/**
                * Get the composed dispatchTransaction function from all extensions.
                * @param baseDispatch The base dispatch function (e.g. from the editor or user props)
                * @returns A composed dispatch function
                */r.prototype.dispatchTransaction=function(r){var t=this;var n=this.editor;return wl(__spreadArray([],this.extensions,true).reverse()).reduceRight((function(r,e){var i={name:e.name,options:e.options,storage:t.editor.extensionStorage[e.name],editor:n,type:Rl(e.name,t.schema)};var u=Vs(e,"dispatchTransaction",i);if(!u)return r;return function(t){u.call(i,{transaction:t,next:r})}}),r)};
/**
                * Get the composed transformPastedHTML function from all extensions.
                * @param baseTransform The base transform function (e.g. from the editor props)
                * @returns A composed transform function that chains all extension transforms
                */r.prototype.transformPastedHTML=function(r){var t=this;var n=this.editor;return wl(__spreadArray([],this.extensions,true)).reduce((function(r,e){var i={name:e.name,options:e.options,storage:t.editor.extensionStorage[e.name],editor:n,type:Rl(e.name,t.schema)};var u=Vs(e,"transformPastedHTML",i);if(!u)return r;return function(t,n){var e=r(t,n);return u.call(i,e)}}),r||function(r){return r})};Object.defineProperty(r.prototype,"markViews",{get:function(){var r=this;var t=this.editor;var n=il(this.extensions).markExtensions;return Object.fromEntries(n.filter((function(r){return!!Vs(r,"addMarkView")})).map((function(n){var e=r.attributes.filter((function(r){return r.type===n.name}));var i=Vs(n,"addMarkView",{name:n.name,options:n.options,storage:r.editor.extensionStorage[n.name],editor:t,type:Wo(n.name,r.schema)});if(!i)return[];var u=function(r,u,a){var f=cl(r,e);return i()({mark:r,view:u,inline:a,editor:t,extension:n,HTMLAttributes:f,updateAttributes:function(n){hc(r,t,n)}})};return[n.name,u]})))},enumerable:false,configurable:true});
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
                */r.prototype.destroy=function(){var r;(r=this.decorationManager)===null||r===void 0||r.destroy();this.extensions.forEach((function(r){var t=r;while(t.parent){var n=t.parent;if(n.child===t)n.child=null;t=n}}));this.extensions=[];this.baseExtensions=[];this.decorationManager=null;this.schema=null;this.editor=null};
/**
                * Go through all extensions, create extension storages & setup marks
                * & bind editor event listener.
                */r.prototype.setupExtensions=function(){var r=this;var t=this.extensions;this.editor.extensionStorage=Object.fromEntries(t.map((function(r){return[r.name,r.storage]})));t.forEach((function(t){var n={name:t.name,options:t.options,storage:r.editor.extensionStorage[t.name],editor:r.editor,type:Rl(t.name,r.schema)};if(t.type==="mark"){var e,i;if((e=fl(Vs(t,"keepOnSplit",n)))!==null&&e!==void 0?e:true)r.splittableMarks.push(t.name);if(!((i=fl(Vs(t,"clearable",n)))!==null&&i!==void 0?i:true))r.nonClearableMarks.push(t.name)}var u=Vs(t,"onBeforeCreate",n);var a=Vs(t,"onCreate",n);var f=Vs(t,"onUpdate",n);var o=Vs(t,"onSelectionUpdate",n);var s=Vs(t,"onTransaction",n);var l=Vs(t,"onFocus",n);var v=Vs(t,"onBlur",n);var c=Vs(t,"onDestroy",n);if(u)r.editor.on("beforeCreate",u);if(a)r.editor.on("create",a);if(f)r.editor.on("update",f);if(o)r.editor.on("selectionUpdate",o);if(s)r.editor.on("transaction",s);if(l)r.editor.on("focus",l);if(v)r.editor.on("blur",v);if(c)r.editor.on("destroy",c)}))};return r}();Sc.resolve=yl;Sc.sort=wl;Sc.flatten=Gs;
//#endregion
//#region src/Extension.ts
/**
            * The Extension class is the base class for all extensions.
            * @see https://tiptap.dev/api/extensions#create-a-new-extension
            */var Cc=/** @class */function(r){__extends(t,r);function t(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}var e=r.apply(this,t)||this;e.type="extension";return e}
/**
                * Create a new Extension instance
                * @param config - Extension configuration object or a function that returns a configuration object
                */t.create=function(r){if(r===void 0){r={}}var n=typeof r==="function"?r():r;return new t(n)};t.prototype.configure=function(t){return r.prototype.configure.call(this,t)};t.prototype.extend=function(t){var n=typeof t==="function"?t():t;return r.prototype.extend.call(this,n)};return t}(kc);
//#endregion
//#region src/extensions/clipboardTextSerializer.ts
var jc=Cc.create({name:"clipboardTextSerializer",addOptions:function(){return{blockSeparator:void 0}},addProseMirrorPlugins:function(){var r=this;return[new xn({key:new Tn("clipboardTextSerializer"),props:{clipboardTextSerializer:function(){var t=r.editor;var n=t.state,e=t.schema;var i=n.doc,u=n.selection;var a=xl(e);var f=r.options.blockSeparator;var o=__assign(__assign({},f!==void 0?{blockSeparator:f}:{}),{textSerializers:a});return __spreadArray([],u.ranges,true).sort((function(r,t){return r.$from.pos-t.$from.pos})).map((function(r){var t=r.$from,n=r.$to;return kl(i,{from:t.pos,to:n.pos},o)})).join(f!==null&&f!==void 0?f:"\n\n")}}})]}});
//#endregion
//#region src/extensions/commands.ts
var Rc=Cc.create({name:"commands",addCommands:function(){return __assign({},Cv)}});
//#endregion
//#region src/extensions/delete.ts
/**
            * This extension allows you to be notified when the user deletes content you are interested in.
            */var Lc=Cc.create({name:"delete",onUpdate:function(r){var t=this;var n=r.transaction,e=r.appendedTransactions;var i,u;var a=function(){var r,i,u;if((r=(i=t.editor.options.coreExtensionOptions)===null||i===void 0||(i=i.delete)===null||i===void 0||(u=i.filterTransaction)===null||u===void 0?void 0:u.call(i,n))!==null&&r!==void 0?r:n.getMeta("y-sync$"))return;var a=Ks(n.before,__spreadArray([n],e,true));El(a).forEach((function(r){if(a.mapping.mapResult(r.oldRange.from).deletedAfter&&a.mapping.mapResult(r.oldRange.to).deletedBefore)a.before.nodesBetween(r.oldRange.from,r.oldRange.to,(function(e,i){var u=i+e.nodeSize-2;var f=r.oldRange.from<=i&&u<=r.oldRange.to;t.editor.emit("delete",{type:"node",node:e,from:i,to:u,newFrom:a.mapping.map(i),newTo:a.mapping.map(u),deletedRange:r.oldRange,newRange:r.newRange,partial:!f,editor:t.editor,transaction:n,combinedTransform:a})}))}));var f=a.mapping;a.steps.forEach((function(r,e){if(r instanceof rt){var i,u;var o=f.slice(e).map(r.from,-1);var s=f.slice(e).map(r.to);var l=f.invert().map(o,-1);var v=f.invert().map(s);var c=o>0?(i=a.doc.nodeAt(o-1))===null||i===void 0?void 0:i.marks.some((function(t){return t.eq(r.mark)})):false;var h=(u=a.doc.nodeAt(s))===null||u===void 0?void 0:u.marks.some((function(t){return t.eq(r.mark)}));t.editor.emit("delete",{type:"mark",mark:r.mark,from:r.from,to:r.to,deletedRange:{from:l,to:v},newRange:{from:o,to:s},partial:Boolean(h||c),editor:t.editor,transaction:n,combinedTransform:a})}}))};if((i=(u=this.editor.options.coreExtensionOptions)===null||u===void 0||(u=u.delete)===null||u===void 0?void 0:u.async)!==null&&i!==void 0?i:true)setTimeout(a,0);else a()}});
//#endregion
//#region src/extensions/drop.ts
var Nc=Cc.create({name:"drop",addProseMirrorPlugins:function(){var r=this;return[new xn({key:new Tn("tiptapDrop"),props:{handleDrop:function(t,n,e,i){r.editor.emit("drop",{editor:r.editor,event:n,slice:e,moved:i})}}})]}});
//#endregion
//#region src/extensions/editable.ts
var Pc=Cc.create({name:"editable",addProseMirrorPlugins:function(){var r=this;return[new xn({key:new Tn("editable"),props:{editable:function(){return r.editor.options.editable}}})]}});
//#endregion
//#region src/extensions/focusEvents.ts
var Ic=new Tn("focusEvents");var Hc=Cc.create({name:"focusEvents",addProseMirrorPlugins:function(){var r=this.editor;return[new xn({key:Ic,props:{handleDOMEvents:{focus:function(t,n){r.isFocused=true;var e=r.state.tr.setMeta("focus",{event:n}).setMeta("addToHistory",false);t.dispatch(e);return false},blur:function(t,n){r.isFocused=false;var e=r.state.tr.setMeta("blur",{event:n}).setMeta("addToHistory",false);t.dispatch(e);return false}}}})]}});
//#endregion
//#region src/extensions/keymap.ts
/** Checks if a non-empty selection spans the whole document. */function Dc(r){var t=r.selection,n=t.empty,e=t.from,i=t.to;if(n)return false;return e===rn.atStart(r.doc).from&&i===rn.atEnd(r.doc).to}var zc=Cc.create({name:"keymap",addKeyboardShortcuts:function(){var r=this;var t=function(){return r.editor.commands.first((function(r){var t=r.commands;return[function(){return t.undoInputRule()},function(){return t.command((function(r){var n=r.tr;var e=n.selection,i=n.doc;var u=e.empty,a=e.$anchor;var f=a.pos,o=a.parent;var s=a.parent.isTextblock&&f>0?n.doc.resolve(f-1):a;var l=s.parent.type.spec.isolating;var v=a.pos-a.parentOffset;var c=l&&s.parent.childCount===1?v===a.pos:rn.atStart(i).from===f;if(!u||!o.type.isTextblock||o.textContent.length||!c||c&&a.parent.type.name==="paragraph")return false;return t.clearNodes()}))},function(){return t.deleteSelection()},function(){return t.joinBackward()},function(){return t.selectNodeBackward()}]}))};var n=function(){return r.editor.commands.first((function(r){var t=r.commands;return[function(){return t.deleteSelection()},function(){return t.deleteCurrentNode()},function(){return t.joinForward()},function(){return t.selectNodeForward()}]}))};var e=function(){return r.editor.commands.first((function(r){var t=r.commands;return[function(){return t.newlineInCode()},function(){return t.createParagraphNear()},function(){return t.liftEmptyBlock()},function(){return t.splitBlock()}]}))};var i={Enter:e,"Mod-Enter":function(){return r.editor.commands.exitCode()},Backspace:t,"Mod-Backspace":t,"Shift-Backspace":t,Delete:n,"Mod-Delete":n,"Mod-a":function(){return r.editor.commands.selectAll()}};var u=__assign({},i);var a=__assign(__assign({},i),{"Ctrl-h":t,"Alt-Backspace":t,"Ctrl-d":n,"Ctrl-Alt-Backspace":n,"Alt-Delete":n,"Alt-d":n,"Ctrl-a":function(){return r.editor.commands.selectTextblockStart()},"Ctrl-e":function(){return r.editor.commands.selectTextblockEnd()}});if(Qo()||_s())return a;return u},addProseMirrorPlugins:function(){var r=this;return[new xn({key:new Tn("clearDocument"),appendTransaction:function(t,n,e){if(t.some((function(r){return r.getMeta("composition")})))return;var i=t.some((function(r){return r.docChanged}))&&!n.doc.eq(e.doc);var u=t.some((function(r){return r.getMeta("preventClearDocument")}));if(!i||u)return;if(!Dc(n))return;if(!Ul(e.doc))return;var a=e.tr;var f=_o({state:e,transaction:a});var o=new xo({editor:r.editor,state:f}).commands;o.clearNodes();if(!a.steps.length&&!e.storedMarks)return;return a.setStoredMarks(null)}})]}});
//#endregion
//#region src/extensions/paste.ts
var Bc=Cc.create({name:"paste",addProseMirrorPlugins:function(){var r=this;return[new xn({key:new Tn("tiptapPaste"),props:{handlePaste:function(t,n,e){r.editor.emit("paste",{editor:r.editor,event:n,slice:e})}}})]}});
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
            */var Uc=Cc.create({name:"tabindex",addOptions:function(){return{value:void 0}},addProseMirrorPlugins:function(){var r=this;return[new xn({key:new Tn("tabindex"),props:{attributes:function(){var t;if(!r.editor.isEditable&&r.options.value===void 0)return{};return{tabindex:(t=r.options.value)!==null&&t!==void 0?t:"0"}}}})]}});
//#endregion
//#region src/extensions/textDirection.ts
/**
            * The TextDirection extension adds support for setting text direction (LTR/RTL/auto)
            * on all nodes in the editor.
            *
            * This extension adds a global `dir` attribute to all node types, which can be used
            * to control bidirectional text rendering. The direction can be set globally via
            * editor options or per-node using commands.
            */var $c=Cc.create({name:"textDirection",addOptions:function(){return{direction:void 0}},addGlobalAttributes:function(){var r=this;if(!this.options.direction)return[];var t=il(this.extensions).nodeExtensions;return[{types:t.filter((function(r){return r.name!=="text"})).map((function(r){return r.name})),attributes:{dir:{default:this.options.direction,parseHTML:function(t){var n=t.getAttribute("dir");if(n&&(n==="ltr"||n==="rtl"||n==="auto"))return n;return r.options.direction},renderHTML:function(r){if(!r.dir)return{};return{dir:r.dir}}}}}]},addProseMirrorPlugins:function(){var r=this;return[new xn({key:new Tn("textDirection"),props:{attributes:function(){var t=r.options.direction;if(!t)return{};return{dir:t}}}})]}});
//#endregion
//#region src/helpers/warnOnDuplicatedProseMirrorModel.ts
var Kc=false;
/**
            * Warns once when prosemirror-model is loaded twice
            * @param schema The editor schema
            * @returns void
            * @example ```js
            * warnOnDuplicatedProseMirrorModel(editor.schema)
            * ```
            */function Fc(r){if(Kc)return;Kc=true;var t;try{var n=ut.fromJSON(r,{from:0,to:0});if(!Fl(n))return;t=n.slice.content}catch(r){return}if(t instanceof p)return;console.warn("[tiptap warn]: prosemirror-model is loaded more than once. Wrapping and splitting nodes will fail. Deduplicate it in your lock file, or alias it to a single copy in your bundler.")}
//#endregion
//#region src/NodePos.ts
var Wc=/** @class */function(){function r(r,t,n,e){if(n===void 0){n=false}if(e===void 0){e=null}this.currentNode=null;this.actualDepth=null;this.isBlock=n;this.resolvedPos=r;this.editor=t;this.currentNode=e}Object.defineProperty(r.prototype,"name",{get:function(){return this.node.type.name},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"node",{get:function(){return this.currentNode||this.resolvedPos.node()},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"element",{get:function(){return this.editor.view.domAtPos(this.pos).node},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"depth",{get:function(){var r;return(r=this.actualDepth)!==null&&r!==void 0?r:this.resolvedPos.depth},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"pos",{get:function(){return this.resolvedPos.pos},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"content",{get:function(){return this.node.content},set:function(r){var t=this.from;var n=this.to;if(this.isBlock){if(this.content.size===0){console.error("You can’t set content on a block node. Tried to set content on ".concat(this.name," at ").concat(this.pos));return}t=this.from+1;n=this.to-1}this.editor.commands.insertContentAt({from:t,to:n},r)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"attributes",{get:function(){return this.node.attrs},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"textContent",{get:function(){return this.node.textContent},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"size",{get:function(){return this.node.nodeSize},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"from",{get:function(){if(this.isBlock)return this.pos;return this.resolvedPos.start(this.resolvedPos.depth)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"range",{get:function(){return{from:this.from,to:this.to}},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"to",{get:function(){if(this.isBlock)return this.pos+this.size;return this.resolvedPos.end(this.resolvedPos.depth)+(this.node.isText?0:1)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"parent",{get:function(){if(this.depth===0)return null;var t=this.resolvedPos.start(this.resolvedPos.depth-1);var n=this.resolvedPos.doc.resolve(t);return new r(n,this.editor)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"before",{get:function(){var t=this.resolvedPos.doc.resolve(this.from-(this.isBlock?1:2));if(t.depth!==this.depth)t=this.resolvedPos.doc.resolve(this.from-3);return new r(t,this.editor)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"after",{get:function(){var t=this.resolvedPos.doc.resolve(this.to+(this.isBlock?2:1));if(t.depth!==this.depth)t=this.resolvedPos.doc.resolve(this.to+3);return new r(t,this.editor)},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"children",{get:function(){var t=this;var n=[];this.node.content.forEach((function(e,i){var u=e.isBlock&&!e.isTextblock;var a=e.isAtom&&!e.isText;var f=e.isInline;var o=t.pos+i+(a?0:1);if(o<0||o>t.resolvedPos.doc.nodeSize-2)return;var s=t.resolvedPos.doc.resolve(o);if(!u&&!f&&s.depth<=t.depth)return;var l=new r(s,t.editor,u,u||f?e:null);if(u)l.actualDepth=t.depth+1;n.push(l)}));return n},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"firstChild",{get:function(){return this.children[0]||null},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"lastChild",{get:function(){var r=this.children;return r[r.length-1]||null},enumerable:false,configurable:true});r.prototype.closest=function(r,t){if(t===void 0){t={}}var n=null;var e=this.parent;while(e&&!n){if(e.node.type.name===r){if(Object.keys(t).length>0);else n=e}e=e.parent}return n};r.prototype.querySelector=function(r,t){if(t===void 0){t={}}return this.querySelectorAll(r,t,true)[0]||null};r.prototype.querySelectorAll=function(r,t,n){if(t===void 0){t={}}if(n===void 0){n=false}var e=[];if(!this.children||this.children.length===0)return e;var i=Object.keys(t);
/**
                    * Finds all children recursively that match the selector and attributes
                    * If firstItemOnly is true, it will return the first item found
                    */this.children.forEach((function(u){if(n&&e.length>0)return;if(u.node.type.name===r){if(i.every((function(r){return t[r]===u.node.attrs[r]})))e.push(u)}if(n&&e.length>0)return;e=e.concat(u.querySelectorAll(r,t,n))}));return e};r.prototype.setAttribute=function(r){var t=this.editor.state.tr;t.setNodeMarkup(this.from,void 0,__assign(__assign({},this.node.attrs),r));this.editor.view.dispatch(t)};return r}();
//#endregion
//#region src/style.ts
var qc='.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}';
//#endregion
//#region src/Editor.ts
var Vc=/** @class */function(r){__extends(t,r);function t(t){if(t===void 0){t={}}var n=r.call(this)||this;n.css=null;n.className="tiptap";n.editorView=null;n.isFocused=false;n.destroyed=false;n.isInitialized=false;n.extensionStorage={};n.instanceId=Math.random().toString(36).slice(2,9);n.hasWarnedStaleDecorationRead=false;n.options={element:typeof document!=="undefined"?document.createElement("div"):null,content:"",injectCSS:true,injectNonce:void 0,extensions:[],autofocus:false,editable:true,textDirection:void 0,editorProps:{},parseOptions:{},coreExtensionOptions:{},enableInputRules:true,enablePasteRules:true,enableCoreExtensions:true,enableContentCheck:false,emitContentError:false,onBeforeCreate:function(){return null},onCreate:function(){return null},onMount:function(){return null},onUnmount:function(){return null},onUpdate:function(){return null},onSelectionUpdate:function(){return null},onTransaction:function(){return null},onFocus:function(){return null},onBlur:function(){return null},onDestroy:function(){return null},onContentError:function(r){var t=r.error;throw t},onPaste:function(){return null},onDrop:function(){return null},onDelete:function(){return null},enableExtensionDispatchTransaction:true};n.isCapturingTransaction=false;n.capturedTransaction=null;n.utils={getUpdatedPosition:ql,createMappablePosition:Vl};n.setOptions(t);n.createExtensionManager();n.createCommandManager();n.createSchema();n.on("beforeCreate",n.options.onBeforeCreate);n.emit("beforeCreate",{editor:n});n.on("mount",n.options.onMount);n.on("unmount",n.options.onUnmount);n.on("contentError",n.options.onContentError);n.on("create",n.options.onCreate);n.on("update",n.options.onUpdate);n.on("selectionUpdate",n.options.onSelectionUpdate);n.on("transaction",n.options.onTransaction);n.on("focus",n.options.onFocus);n.on("blur",n.options.onBlur);n.on("destroy",n.options.onDestroy);n.on("drop",(function(r){var t=r.event,e=r.slice,i=r.moved;return n.options.onDrop(t,e,i)}));n.on("paste",(function(r){var t=r.event,e=r.slice;return n.options.onPaste(t,e)}));n.on("delete",n.options.onDelete);var e=n.createDoc();if(!n.editorState){var i=Xo(e,n.options.autofocus);n.editorState=kn.create({doc:e,schema:n.schema,selection:i||void 0})}Fc(n.schema);if(n.options.element)n.mount(n.options.element);return n}
/**
                * Attach the editor to the DOM, creating a new editor view.
                */t.prototype.mount=function(r){var t=this;if(typeof document==="undefined")throw new Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");this.createView(r);this.emit("mount",{editor:this});if(this.css&&!document.head.contains(this.css))document.head.appendChild(this.css);window.setTimeout((function(){if(t.isDestroyed)return;if(t.options.autofocus!==false&&t.options.autofocus!==null)t.commands.focus(t.options.autofocus);t.emit("create",{editor:t});t.isInitialized=true}),0)};
/**
                * Remove the editor from the DOM, but still allow remounting at a different point in time
                */t.prototype.unmount=function(){if(this.editorView){this.editorState=this.editorView.state;var r=this.editorView.dom;if(r===null||r===void 0?void 0:r.editor)delete r.editor;this.editorView.destroy()}this.editorView=null;this.isInitialized=false;if(this.css&&!document.querySelectorAll(".".concat(this.className)).length)try{if(typeof this.css.remove==="function")this.css.remove();else if(this.css.parentNode)this.css.parentNode.removeChild(this.css)}catch(r){console.warn("Failed to remove CSS element:",r)}this.css=null;this.emit("unmount",{editor:this})};Object.defineProperty(t.prototype,"storage",{
/**
                    * Returns the editor storage.
                    */
get:function(){return this.extensionStorage},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"commands",{
/**
                    * An object of all registered commands.
                    */
get:function(){return this.commandManager.commands},enumerable:false,configurable:true});
/**
                * Create a command chain to call multiple commands at once.
                */t.prototype.chain=function(){if(!this.commandManager)return xo.createFakeChain();return this.commandManager.chain()};
/**
                * Check if a command or a command chain can be executed. Without executing it.
                */t.prototype.can=function(){if(!this.commandManager)return xo.createFallbackCan();return this.commandManager.can()};
/**
                * Inject CSS styles.
                */t.prototype.injectCSS=function(){if(this.options.injectCSS&&typeof document!=="undefined")this.css=Zv(qc,this.options.injectNonce)};
/**
                * Update editor options.
                *
                * @param options A list of options
                */t.prototype.setOptions=function(r){if(r===void 0){r={}}this.options=__assign(__assign({},this.options),r);if(!this.editorView||!this.state||this.isDestroyed)return;if(this.options.editorProps)this.view.setProps(__assign(__assign({},this.options.editorProps),{attributes:this.getEditorViewAttributes()}));this.view.updateState(this.state)};
/**
                * Update editable state of the editor.
                */t.prototype.setEditable=function(r,t){if(t===void 0){t=true}this.setOptions({editable:r});if(t)this.emit("update",{editor:this,transaction:this.state.tr,appendedTransactions:[]})};Object.defineProperty(t.prototype,"isEditable",{
/**
                    * Returns whether the editor is editable.
                    */
get:function(){return this.options.editable&&this.view&&this.view.editable},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"view",{
/**
                    * Returns the editor view.
                    */
get:function(){var r=this;if(this.editorView)return this.editorView;return new Proxy({state:this.editorState,updateState:function(t){r.editorState=t},dispatch:function(t){r.dispatchTransaction(t)},composing:false,dragging:null,editable:true,isDestroyed:false},{get:function(t,n){if(r.editorView)return r.editorView[n];if(n==="state")return r.editorState;if(n in t)return Reflect.get(t,n);throw new Error("[tiptap error]: The editor view is not available. Cannot access view['".concat(n,"']. The editor may not be mounted yet."))}})},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"state",{
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
                */t.prototype.registerPlugin=function(r,t){var n=al(t)?t(r,__spreadArray([],this.state.plugins,true)):__spreadArray(__spreadArray([],this.state.plugins,true),[r],false);var e=this.state.reconfigure({plugins:n});this.view.updateState(e);return e};
/**
                * Unregister a ProseMirror plugin.
                *
                * @param nameOrPluginKeyToRemove The plugins name
                * @returns The new editor state or undefined if the editor is destroyed
                */t.prototype.unregisterPlugin=function(r){if(this.isDestroyed)return;var t=this.state.plugins;var n=t;[].concat(r).forEach((function(r){var t=typeof r==="string"?"".concat(r,"$"):r.key;n=n.filter((function(r){return!r.key.startsWith(t)}))}));if(t.length===n.length)return;var e=this.state.reconfigure({plugins:n});this.view.updateState(e);return e};
/**
                * Creates an extension manager.
                */t.prototype.createExtensionManager=function(){var r=this;var t,n;var e=__spreadArray(__spreadArray([],this.options.enableCoreExtensions?[Pc,jc.configure({blockSeparator:(t=this.options.coreExtensionOptions)===null||t===void 0||(t=t.clipboardTextSerializer)===null||t===void 0?void 0:t.blockSeparator}),Rc,Hc,zc,Uc.configure({value:(n=this.options.coreExtensionOptions)===null||n===void 0||(n=n.tabindex)===null||n===void 0?void 0:n.value}),Nc,Bc,Lc,$c.configure({direction:this.options.textDirection})].filter((function(t){if(typeof r.options.enableCoreExtensions==="object")return r.options.enableCoreExtensions[t.name]!==false;return true})):[],true),this.options.extensions,true).filter((function(r){return["extension","node","mark"].includes(r===null||r===void 0?void 0:r.type)}));this.extensionManager=new Sc(e,this)};
/**
                * Creates an command manager.
                */t.prototype.createCommandManager=function(){this.commandManager=new xo({editor:this})};
/**
                * Creates a ProseMirror schema.
                */t.prototype.createSchema=function(){this.schema=this.extensionManager.schema};
/**
                * Creates the initial document.
                */t.prototype.createDoc=function(){var r=this;var t;try{t=Bs(this.options.content,this.schema,this.options.parseOptions,{errorOnInvalidContent:this.options.enableContentCheck})}catch(t){if(!(t instanceof Error)||!["[tiptap error]: Invalid JSON content","[tiptap error]: Invalid HTML content"].includes(t.message))throw t;var n=Bs(this.options.content,this.schema,this.options.parseOptions,{errorOnInvalidContent:false});this.editorState=kn.create({doc:n,schema:this.schema,selection:Xo(n,this.options.autofocus)||void 0});this.emit("contentError",{editor:this,error:t,disableCollaboration:function(){if("collaboration"in r.storage&&typeof r.storage.collaboration==="object"&&r.storage.collaboration)r.storage.collaboration.isDisabled=true;r.options.extensions=r.options.extensions.filter((function(r){return r.name!=="collaboration"}));r.createExtensionManager()}});return this.editorState.doc}return t};
/**
                * Returns the attributes for the editor element.
                * Merges the default `role="textbox"` with the attributes from `editorProps`,
                * so the role is kept no matter when the props are applied.
                */t.prototype.getEditorViewAttributes=function(){var r;var t=(r=this.options.editorProps)===null||r===void 0?void 0:r.attributes;if(al(t))return function(r){return __assign({role:"textbox"},t(r))};return __assign({role:"textbox"},t)};
/**
                * Creates a ProseMirror view.
                */t.prototype.createView=function(r){var t=this.options,n=t.editorProps,e=t.enableExtensionDispatchTransaction;var i=n.dispatchTransaction||this.dispatchTransaction.bind(this);var u=e?this.extensionManager.dispatchTransaction(i):i;var a=n.transformPastedHTML;var f=this.extensionManager.transformPastedHTML(a);this.editorView=new Tf(r,__assign(__assign({},n),{attributes:this.getEditorViewAttributes(),dispatchTransaction:u,transformPastedHTML:f,state:this.editorState,markViews:this.extensionManager.markViews,nodeViews:this.extensionManager.nodeViews}));var o=this.state.reconfigure({plugins:this.extensionManager.plugins});this.view.updateState(o);this.prependClass();this.injectCSS();var s=this.view.dom;s.editor=this};
/**
                * Creates all node and mark views.
                */t.prototype.createNodeViews=function(){if(this.view.isDestroyed)return;this.view.setProps({markViews:this.extensionManager.markViews,nodeViews:this.extensionManager.nodeViews})};
/**
                * Prepend class name to element.
                */t.prototype.prependClass=function(){this.view.dom.className="".concat(this.className," ").concat(this.view.dom.className)};t.prototype.captureTransaction=function(r){this.isCapturingTransaction=true;r();this.isCapturingTransaction=false;var t=this.capturedTransaction;this.capturedTransaction=null;return t};
/**
                * The callback over which to send transactions (state updates) produced by the view.
                *
                * @param transaction An editor state transaction
                */t.prototype.dispatchTransaction=function(r){var t=this;if(this.view.isDestroyed)return;if(this.isCapturingTransaction){if(!this.capturedTransaction){this.capturedTransaction=r;return}r.steps.forEach((function(r){var n;return(n=t.capturedTransaction)===null||n===void 0?void 0:n.step(r)}));return}var n=this.state.applyTransaction(r),e=n.state,i=n.transactions;var u=!this.state.selection.eq(e.selection);var a=i.includes(r);var f=this.state;this.emit("beforeTransaction",{editor:this,transaction:r,nextState:e});if(!a)return;this.view.updateState(e);this.emit("transaction",{editor:this,transaction:r,appendedTransactions:i.slice(1)});if(u)this.emit("selectionUpdate",{editor:this,transaction:r});var o=i.findLast((function(r){return r.getMeta("focus")||r.getMeta("blur")}));var s=o===null||o===void 0?void 0:o.getMeta("focus");var l=o===null||o===void 0?void 0:o.getMeta("blur");if(s)this.emit("focus",{editor:this,event:s.event,transaction:o});if(l)this.emit("blur",{editor:this,event:l.event,transaction:o});if(r.getMeta("preventUpdate")||!i.some((function(r){return r.docChanged}))||f.doc.eq(e.doc))return;this.emit("update",{editor:this,transaction:r,appendedTransactions:i.slice(1)})};
/**
                * Get attributes of the currently selected node or mark.
                */t.prototype.getAttributes=function(r){return Ol(this.state,r)};t.prototype.isActive=function(r,t){var n=typeof r==="string"?r:null;var e=typeof r==="string"?t:r;return Il(this.state,n,e)};
/**
                * Get the document as JSON.
                */t.prototype.getJSON=function(){return this.state.doc.toJSON()};
/**
                * Get the document as HTML.
                */t.prototype.getHTML=function(){return Js(this.state.doc.content,this.schema)};
/**
                * Get the document as text.
                */t.prototype.getText=function(r){var t=r||{},n=t.blockSeparator,e=n===void 0?"\n\n":n,i=t.textSerializers,u=i===void 0?{}:i;return _l(this.state.doc,{blockSeparator:e,textSerializers:__assign(__assign({},xl(this.schema)),u)})};Object.defineProperty(t.prototype,"isEmpty",{
/**
                    * Check if there is no content.
                    */
get:function(){return Ul(this.state.doc)},enumerable:false,configurable:true});
/**
                * Destroy the editor.
                */t.prototype.destroy=function(){if(this.destroyed)return;this.destroyed=true;this.emit("destroy");this.unmount();this.removeAllListeners();this.extensionManager.destroy();this.extensionManager=null;this.schema=null;this.commandManager=null;this.extensionStorage={}};Object.defineProperty(t.prototype,"isDestroyed",{
/**
                    * Check if the editor is already destroyed.
                    */
get:function(){var r,t;return(r=(t=this.editorView)===null||t===void 0?void 0:t.isDestroyed)!==null&&r!==void 0?r:true},enumerable:false,configurable:true});t.prototype.$node=function(r,t){var n;return((n=this.$doc)===null||n===void 0?void 0:n.querySelector(r,t))||null};t.prototype.$nodes=function(r,t){var n;return((n=this.$doc)===null||n===void 0?void 0:n.querySelectorAll(r,t))||null};t.prototype.$pos=function(r){var t=this.state.doc.resolve(r);var n=r>0&&t.nodeAfter&&!t.nodeAfter.isText&&t.nodeAfter.isAtom?t.nodeAfter:null;return new Wc(t,this,false,n)};Object.defineProperty(t.prototype,"$doc",{get:function(){return this.$pos(0)},enumerable:false,configurable:true});return t}(Lv);
//#endregion
//#region src/inputRules/markInputRule.ts
/**
            * Build an input rule that adds a mark when the
            * matched text is typed into it.
            * @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#input-rules
            */function Gc(r){return new dc({find:r.find,handler:function(t){var n=t.state,e=t.range,i=t.match;var u=fl(r.getAttributes,void 0,i);if(u===false||u===null)return null;var a=n.tr;var f=i[i.length-1];var o=i[0];if(f){var s=o.search(/\S/);var l=e.from+o.indexOf(f);var v=l+f.length;if(Sl(e.from,e.to,n.doc).filter((function(t){return t.mark.type.excluded.find((function(n){return n===r.type&&n!==t.mark.type}))})).filter((function(r){return r.to>l})).length)return null;if(v<e.to)a.delete(v,e.to);if(l>e.from)a.delete(e.from+s,l);var c=e.from+s+f.length;a.addMark(e.from+s,c,r.type.create(u||{}));a.removeStoredMark(r.type)}},undoable:r.undoable})}
//#endregion
//#region src/inputRules/nodeInputRule.ts
/**
            * Build an input rule that adds a node when the
            * matched text is typed into it.
            * @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#input-rules
            */function Jc(r){return new dc({find:r.find,handler:function(t){var n=t.state,e=t.range,i=t.match;var u=fl(r.getAttributes,void 0,i)||{};var a=n.tr;var f=e.from;var o=e.to;var s=r.type.create(u);if(i[1]){var l=f+i[0].lastIndexOf(i[1]);if(l>o)l=o;else o=l+i[1].length;var v=i[0][i[0].length-1];a.insertText(v,f+i[0].length-1);a.replaceWith(l,o,s)}else if(i[0]){var c=r.type.isInline?f:f-1;a.insert(c,r.type.create(u)).delete(a.mapping.map(f),a.mapping.map(o))}a.scrollIntoView()},undoable:r.undoable})}
//#endregion
//#region src/inputRules/textblockTypeInputRule.ts
/**
            * Build an input rule that changes the type of a textblock when the
            * matched text is typed into it. When using a regular expresion you’ll
            * probably want the regexp to start with `^`, so that the pattern can
            * only occur at the start of a textblock.
            * @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#input-rules
            */function Xc(r){return new dc({find:r.find,handler:function(t){var n=t.state,e=t.range,i=t.match;var u=n.doc.resolve(e.from);var a=fl(r.getAttributes,void 0,i)||{};if(!u.node(-1).canReplaceWith(u.index(-1),u.indexAfter(-1),r.type))return null;n.tr.delete(e.from,e.to).setBlockType(e.from,e.from,r.type,a)},undoable:r.undoable})}
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
            */function Yc(r){return new dc({find:r.find,handler:function(t){var n=t.state,e=t.range,i=t.match,u=t.chain;var a=fl(r.getAttributes,void 0,i)||{};var f=n.tr.delete(e.from,e.to);var o=f.doc.resolve(e.from).blockRange();var s=o&&dt(o,r.type,a);if(!s)return null;f.wrap(o,s);if(r.keepMarks&&r.editor){var l=n.selection,v=n.storedMarks;var c=r.editor.extensionManager.splittableMarks;var h=v||l.$to.parentOffset&&l.$from.marks();if(h){var d=h.filter((function(r){return c.includes(r.type.name)}));f.ensureMarks(d)}}if(r.keepAttributes){
/** If the nodeType is `bulletList` or `orderedList` set the `nodeType` as `listItem` */
var p=r.type.name==="bulletList"||r.type.name==="orderedList"?"listItem":"taskList";u().updateAttributes(p,a).run()}var b=f.doc.resolve(e.from-1).nodeBefore;if(b&&b.type===r.type&&Tt(f.doc,e.from-1)&&(!r.joinPredicate||r.joinPredicate(i,b)))f.join(e.from-1)},undoable:r.undoable})}
//#endregion
//#region src/lib/ResizableNodeView.ts
var Qc=function(r){return"touches"in r};
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
            */var Zc=/** @class */function(){
/**
                * Creates a new ResizableNodeView instance.
                *
                * The constructor sets up the resize handles, applies initial sizing from
                * node attributes, and configures all resize behavior options.
                *
                * @param options - Configuration options for the resizable node view
                */
function r(r){var t=this;var n,e,i,u,a,f;this.directions=["bottom-left","bottom-right","top-left","top-right"];this.minSize={height:8,width:8};this.preserveAspectRatio=false;this.classNames={container:"",wrapper:"",handle:"",resizing:""};this.initialWidth=0;this.initialHeight=0;this.aspectRatio=1;this.isResizing=false;this.activeHandle=null;this.startX=0;this.startY=0;this.startWidth=0;this.startHeight=0;this.isShiftKeyPressed=false;this.lastEditableState=void 0;this.handleMap=new Map;this.handleEditorUpdate=function(){var r=t.editor.isEditable;if(r===t.lastEditableState)return;t.lastEditableState=r;if(!r)t.removeHandles();else if(r&&t.handleMap.size===0)t.attachHandles()};this.handleMouseMove=function(r){if(!t.isResizing||!t.activeHandle)return;var n=r.clientX-t.startX;var e=r.clientY-t.startY;t.handleResize(n,e)};this.handleTouchMove=function(r){if(!t.isResizing||!t.activeHandle)return;var n=r.touches[0];if(!n)return;var e=n.clientX-t.startX;var i=n.clientY-t.startY;t.handleResize(e,i)};this.handleMouseUp=function(){if(!t.isResizing)return;var r=t.element.offsetWidth;var n=t.element.offsetHeight;t.onCommit(r,n);t.isResizing=false;t.activeHandle=null;t.container.dataset.resizeState="false";if(t.classNames.resizing)t.container.classList.remove(t.classNames.resizing);document.removeEventListener("mousemove",t.handleMouseMove);document.removeEventListener("mouseup",t.handleMouseUp);document.removeEventListener("keydown",t.handleKeyDown);document.removeEventListener("keyup",t.handleKeyUp)};this.handleKeyDown=function(r){if(r.key==="Shift")t.isShiftKeyPressed=true};this.handleKeyUp=function(r){if(r.key==="Shift")t.isShiftKeyPressed=false};this.node=r.node;this.editor=r.editor;this.element=r.element;this.element.draggable=false;this.contentElement=r.contentElement;this.getPos=r.getPos;this.onResize=r.onResize;this.onCommit=r.onCommit;this.onUpdate=r.onUpdate;if((n=r.options)===null||n===void 0?void 0:n.min)this.minSize=__assign(__assign({},this.minSize),r.options.min);if((e=r.options)===null||e===void 0?void 0:e.max)this.maxSize=r.options.max;if(r===null||r===void 0||(i=r.options)===null||i===void 0?void 0:i.directions)this.directions=r.options.directions;if((u=r.options)===null||u===void 0?void 0:u.preserveAspectRatio)this.preserveAspectRatio=r.options.preserveAspectRatio;if((a=r.options)===null||a===void 0?void 0:a.className)this.classNames={container:r.options.className.container||"",wrapper:r.options.className.wrapper||"",handle:r.options.className.handle||"",resizing:r.options.className.resizing||""};if((f=r.options)===null||f===void 0?void 0:f.createCustomHandle)this.createCustomHandle=r.options.createCustomHandle;this.wrapper=this.createWrapper();this.container=this.createContainer();this.applyInitialSize();this.attachHandles();this.editor.on("update",this.handleEditorUpdate)}Object.defineProperty(r.prototype,"dom",{
/**
                    * Returns the top-level DOM node that should be placed in the editor.
                    *
                    * This is required by the ProseMirror NodeView interface. The container
                    * includes the wrapper, handles, and the actual content element.
                    *
                    * @returns The container element to be inserted into the editor
                    */
get:function(){return this.container},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"contentDOM",{get:function(){var r;return(r=this.contentElement)!==null&&r!==void 0?r:null},enumerable:false,configurable:true});
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
                */r.prototype.update=function(r,t,n){if(r.type!==this.node.type)return false;this.node=r;if(this.onUpdate)return this.onUpdate(r,t,n);return true};
/**
                * Cleanup method called when the node view is being removed.
                *
                * Removes all event listeners to prevent memory leaks. This is required
                * by the ProseMirror NodeView interface. If a resize is active when
                * destroy is called, it will be properly cancelled.
                */r.prototype.destroy=function(){if(this.isResizing){this.container.dataset.resizeState="false";if(this.classNames.resizing)this.container.classList.remove(this.classNames.resizing);document.removeEventListener("mousemove",this.handleMouseMove);document.removeEventListener("mouseup",this.handleMouseUp);document.removeEventListener("keydown",this.handleKeyDown);document.removeEventListener("keyup",this.handleKeyUp);this.isResizing=false;this.activeHandle=null}this.editor.off("update",this.handleEditorUpdate);this.container.remove()};
/**
                * Creates the outer container element.
                *
                * The container is the top-level element returned by the NodeView and
                * wraps the entire resizable node. It's set up with flexbox to handle
                * alignment and includes data attributes for styling and identification.
                *
                * @returns The container element
                */r.prototype.createContainer=function(){var r=document.createElement("div");r.dataset.resizeContainer="";r.dataset.node=this.node.type.name;r.style.display=this.node.type.isInline?"inline-flex":"flex";if(this.classNames.container)r.className=this.classNames.container;r.appendChild(this.wrapper);return r};
/**
                * Creates the wrapper element that contains the content and handles.
                *
                * The wrapper uses relative positioning so that resize handles can be
                * positioned absolutely within it. This is the direct parent of the
                * content element being made resizable.
                *
                * @returns The wrapper element
                */r.prototype.createWrapper=function(){var r=document.createElement("div");r.style.position="relative";r.style.display="block";r.dataset.resizeWrapper="";if(this.classNames.wrapper)r.className=this.classNames.wrapper;r.appendChild(this.element);return r};
/**
                * Creates a resize handle element for a specific direction.
                *
                * Each handle is absolutely positioned and includes a data attribute
                * identifying its direction for styling purposes.
                *
                * @param direction - The resize direction for this handle
                * @returns The handle element
                */r.prototype.createHandle=function(r){var t=document.createElement("div");t.dataset.resizeHandle=r;t.style.position="absolute";if(this.classNames.handle)t.className=this.classNames.handle;return t};
/**
                * Positions a handle element according to its direction.
                *
                * Corner handles (e.g., 'top-left') are positioned at the intersection
                * of two edges. Edge handles (e.g., 'top') span the full width or height.
                *
                * @param handle - The handle element to position
                * @param direction - The direction determining the position
                */r.prototype.positionHandle=function(r,t){var n=t.includes("top");var e=t.includes("bottom");var i=t.includes("left");var u=t.includes("right");if(n)r.style.top="0";if(e)r.style.bottom="0";if(i)r.style.left="0";if(u)r.style.right="0";if(t==="top"||t==="bottom"){r.style.left="0";r.style.right="0"}if(t==="left"||t==="right"){r.style.top="0";r.style.bottom="0"}};
/**
                * Creates and attaches all resize handles to the wrapper.
                *
                * Iterates through the configured directions, creates a handle for each,
                * positions it, attaches the mousedown listener, and appends it to the DOM.
                */r.prototype.attachHandles=function(){var r=this;this.directions.forEach((function(t){var n;if(r.createCustomHandle)n=r.createCustomHandle(t);else n=r.createHandle(t);if(!(n instanceof HTMLElement)){console.warn('[ResizableNodeView] createCustomHandle("'.concat(t,'") did not return an HTMLElement. Falling back to default handle.'));n=r.createHandle(t)}if(!r.createCustomHandle)r.positionHandle(n,t);n.addEventListener("mousedown",(function(n){return r.handleResizeStart(n,t)}));n.addEventListener("touchstart",(function(n){return r.handleResizeStart(n,t)}));r.handleMap.set(t,n);r.wrapper.appendChild(n)}))};
/**
                * Removes all resize handles from the wrapper.
                *
                * Cleans up the handle map and removes each handle element from the DOM.
                */r.prototype.removeHandles=function(){this.handleMap.forEach((function(r){return r.remove()}));this.handleMap.clear()};
/**
                * Applies initial sizing from node attributes to the element.
                *
                * If width/height attributes exist on the node, they're applied to the element.
                * Otherwise, the element's natural/current dimensions are measured. The aspect
                * ratio is calculated for later use in aspect-ratio-preserving resizes.
                */r.prototype.applyInitialSize=function(){var r=this.node.attrs.width;var t=this.node.attrs.height;if(r){this.element.style.width="".concat(r,"px");this.initialWidth=r}else this.initialWidth=this.element.offsetWidth;if(t){this.element.style.height="".concat(t,"px");this.initialHeight=t}else this.initialHeight=this.element.offsetHeight;if(this.initialWidth>0&&this.initialHeight>0)this.aspectRatio=this.initialWidth/this.initialHeight};
/**
                * Initiates a resize operation when a handle is clicked.
                *
                * Captures the starting mouse position and element dimensions, sets up
                * the resize state, adds the resizing class and state attribute, and
                * attaches document-level listeners for mouse movement and keyboard input.
                *
                * @param event - The mouse down event
                * @param direction - The direction of the handle being dragged
                */r.prototype.handleResizeStart=function(r,t){r.preventDefault();r.stopPropagation();this.isResizing=true;this.activeHandle=t;if(Qc(r)){this.startX=r.touches[0].clientX;this.startY=r.touches[0].clientY}else{this.startX=r.clientX;this.startY=r.clientY}this.startWidth=this.element.offsetWidth;this.startHeight=this.element.offsetHeight;if(this.startWidth>0&&this.startHeight>0)this.aspectRatio=this.startWidth/this.startHeight;if(this.getPos()!==void 0);this.container.dataset.resizeState="true";if(this.classNames.resizing)this.container.classList.add(this.classNames.resizing);document.addEventListener("mousemove",this.handleMouseMove);document.addEventListener("touchmove",this.handleTouchMove);document.addEventListener("mouseup",this.handleMouseUp);document.addEventListener("keydown",this.handleKeyDown);document.addEventListener("keyup",this.handleKeyUp)};r.prototype.handleResize=function(r,t){if(!this.activeHandle)return;var n=this.preserveAspectRatio||this.isShiftKeyPressed;var e=this.calculateNewDimensions(this.activeHandle,r,t),i=e.width,u=e.height;var a=this.applyConstraints(i,u,n);this.element.style.width="".concat(a.width,"px");this.element.style.height="".concat(a.height,"px");if(this.onResize)this.onResize(a.width,a.height)};
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
                */r.prototype.calculateNewDimensions=function(r,t,n){var e=this.startWidth;var i=this.startHeight;var u=r.includes("right");var a=r.includes("left");var f=r.includes("bottom");var o=r.includes("top");if(u)e=this.startWidth+t;else if(a)e=this.startWidth-t;if(f)i=this.startHeight+n;else if(o)i=this.startHeight-n;if(r==="right"||r==="left")e=this.startWidth+(u?t:-t);if(r==="top"||r==="bottom")i=this.startHeight+(f?n:-n);if(this.preserveAspectRatio||this.isShiftKeyPressed)return this.applyAspectRatio(e,i,r);return{width:e,height:i}};
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
                */r.prototype.applyConstraints=function(r,t,n){var e,i;if(!n){var u,a;var f=Math.max(this.minSize.width,r);var o=Math.max(this.minSize.height,t);if((u=this.maxSize)===null||u===void 0?void 0:u.width)f=Math.min(this.maxSize.width,f);if((a=this.maxSize)===null||a===void 0?void 0:a.height)o=Math.min(this.maxSize.height,o);return{width:f,height:o}}var s=r;var l=t;if(s<this.minSize.width){s=this.minSize.width;l=s/this.aspectRatio}if(l<this.minSize.height){l=this.minSize.height;s=l*this.aspectRatio}if(((e=this.maxSize)===null||e===void 0?void 0:e.width)&&s>this.maxSize.width){s=this.maxSize.width;l=s/this.aspectRatio}if(((i=this.maxSize)===null||i===void 0?void 0:i.height)&&l>this.maxSize.height){l=this.maxSize.height;s=l*this.aspectRatio}return{width:s,height:l}};
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
                */r.prototype.applyAspectRatio=function(r,t,n){var e=n==="left"||n==="right";var i=n==="top"||n==="bottom";if(e)return{width:r,height:r/this.aspectRatio};if(i)return{width:t*this.aspectRatio,height:t};return{width:r,height:r/this.aspectRatio}};return r}();
//#endregion
//#region src/Node.ts
/**
            * The Node class is used to create custom node extensions.
            * @see https://tiptap.dev/api/extensions#create-a-new-extension
            */var rh=/** @class */function(r){__extends(t,r);function t(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}var e=r.apply(this,t)||this;e.type="node";return e}
/**
                * Create a new Node instance
                * @param config - Node configuration object or a function that returns a configuration object
                */t.create=function(r){if(r===void 0){r={}}var n=typeof r==="function"?r():r;return new t(n)};t.prototype.configure=function(t){return r.prototype.configure.call(this,t)};t.prototype.extend=function(t){var n=typeof t==="function"?t():t;return r.prototype.extend.call(this,n)};return t}(kc);
//#endregion
//#region src/pasteRules/markPasteRule.ts
/**
            * Build an paste rule that adds a mark when the
            * matched text is pasted into it.
            * @see https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#paste-rules
            */function th(r){return new xc({find:r.find,handler:function(t){var n=t.state,e=t.range,i=t.match,u=t.pasteEvent;var a=fl(r.getAttributes,void 0,i,u);if(a===false||a===null)return null;var f=n.tr;var o=i[i.length-1];var s=i[0];var l=e.to;if(o){var v=s.search(/\S/);var c=e.from+s.indexOf(o);var h=c+o.length;if(Sl(e.from,e.to,n.doc).filter((function(t){return t.mark.type.excluded.find((function(n){return n===r.type&&n!==t.mark.type}))})).filter((function(r){return r.to>c})).length)return null;if(h<e.to)f.delete(h,e.to);if(c>e.from)f.delete(e.from+v,c);l=e.from+v+o.length;f.addMark(e.from+v,l,r.type.create(a||{}));if(!(i.index!==void 0&&i.input!==void 0&&i.index+i[0].length>=i.input.length))f.removeStoredMark(r.type)}}})}
//#region src/image.ts
/**
            * Matches an image to a ![image](src "title") on input.
            */var nh=/(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
/**
            * This extension allows you to insert images.
            * @see https://www.tiptap.dev/api/nodes/image
            */var eh=rh.create({name:"image",addOptions:function(){return{inline:false,allowBase64:false,HTMLAttributes:{},resize:false}},inline:function(){return this.options.inline},group:function(){return this.options.inline?"inline":"block"},draggable:true,addAttributes:function(){return{src:{default:null},alt:{default:null},title:{default:null},width:{default:null},height:{default:null}}},parseHTML:function(){return[{tag:this.options.allowBase64?"img[src]":'img[src]:not([src^="data:"])'}]},renderHTML:function(r){var t=r.HTMLAttributes;return["img",vl(this.options.HTMLAttributes,t)]},parseMarkdown:function(r,t){return t.createNode("image",{src:r.href,title:r.title,alt:r.text})},renderMarkdown:function(r){var t,n,e,i,u,a;var f=(t=(n=r.attrs)===null||n===void 0?void 0:n.src)!==null&&t!==void 0?t:"";var o=(e=(i=r.attrs)===null||i===void 0?void 0:i.alt)!==null&&e!==void 0?e:"";var s=(u=(a=r.attrs)===null||a===void 0?void 0:a.title)!==null&&u!==void 0?u:"";return s?"![".concat(o,"](").concat(f,' "').concat(s,'")'):"![".concat(o,"](").concat(f,")")},addNodeView:function(){var r=this;if(!this.options.resize||!this.options.resize.enabled||typeof document==="undefined")return null;var t=this.options.resize,n=t.directions,e=t.minWidth,i=t.minHeight,u=t.alwaysPreserveAspectRatio;var a=new Set(["src","width","height"]);return function(t){var f=t.node,o=t.getPos,s=t.HTMLAttributes,l=t.editor;var v=document.createElement("img");v.draggable=false;var c=vl(r.options.HTMLAttributes,s);Object.entries(c).forEach((function(r){var t=r[0],n=r[1];if(n!=null)switch(t){case"src":case"width":case"height":break;default:v.setAttribute(t,n)}}));if(c.src!==null)v.src=c.src;var h=__assign({},s);var d=function(r){if(typeof r==="string"&&r!==""){if(v.getAttribute("src")!==r)v.src=r;return}if(v.hasAttribute("src"))v.removeAttribute("src");if(v.src!=="")v.src=""};d(s.src);var p=function(r){if(r.type!==f.type)return false;var t=l.extensionManager.attributes.filter((function(t){return t.type===r.type.name}));var n=cl(r,t);Object.keys(h).forEach((function(r){if(!a.has(r)&&!(r in n))v.removeAttribute(r)}));Object.entries(n).forEach((function(r){var t=r[0],n=r[1];if(a.has(t))return;if(n!=null)v.setAttribute(t,n);else v.removeAttribute(t)}));d(n.src);h=n;return true};var b=new Zc({element:v,editor:l,node:f,getPos:o,onResize:function(r,t){v.style.width="".concat(r,"px");v.style.height="".concat(t,"px")},onCommit:function(t,n){var e=o();if(e===void 0)return;r.editor.chain().setNodeSelection(e).updateAttributes(r.name,{width:t,height:n}).run()},onUpdate:p,options:{directions:n,min:{width:e,height:i},preserveAspectRatio:u===true}});var g=b.dom;var m=function(){g.style.visibility="";g.style.pointerEvents=""};g.style.visibility="hidden";g.style.pointerEvents="none";if(v.complete&&v.naturalWidth>0)m();else{v.onload=m;v.onerror=m}return b}},addCommands:function(){var r=this;return{setImage:function(t){return function(n){var e=n.commands;return e.insertContent({type:r.name,attrs:t})}}}},addInputRules:function(){return[Jc({find:nh,type:this.type,getAttributes:function(r){var t=r[2],n=r[3],e=r[4];return{src:n,alt:t,title:e}}})]}});
//#region src/tablemap.ts
var ih;var uh;if(typeof WeakMap!="undefined"){var ah=new WeakMap;ih=function(r){return ah.get(r)};uh=function(r,t){ah.set(r,t);return t}}else{var fh=[];var oh=10;var sh=0;ih=function(r){for(var t=0;t<fh.length;t+=2)if(fh[t]==r)return fh[t+1]};uh=function(r,t){if(sh==oh)sh=0;fh[sh++]=r;return fh[sh++]=t}}
/**
            * A table map describes the structure of a given table. To avoid
            * recomputing them all the time, they are cached per table node. To
            * be able to do that, positions saved in the map are relative to the
            * start of the table, rather than the start of the document.
            *
            * @public
            */var lh=/** @class */function(){function r(r,t,n,e){this.width=r;this.height=t;this.map=n;this.problems=e}r.prototype.findCell=function(r){for(var t=0;t<this.map.length;t++){var n=this.map[t];if(n!=r)continue;var e=t%this.width;var i=t/this.width|0;var u=e+1;var a=i+1;for(var f=1;u<this.width&&this.map[t+f]==n;f++)u++;for(var f=1;a<this.height&&this.map[t+this.width*f]==n;f++)a++;return{left:e,top:i,right:u,bottom:a}}throw new RangeError("No cell with offset ".concat(r," found"))};r.prototype.colCount=function(r){for(var t=0;t<this.map.length;t++)if(this.map[t]==r)return t%this.width;throw new RangeError("No cell with offset ".concat(r," found"))};r.prototype.nextCell=function(r,t,n){var e=this.findCell(r),i=e.left,u=e.right,a=e.top,f=e.bottom;if(t=="horiz"){if(n<0?i==0:u==this.width)return null;return this.map[a*this.width+(n<0?i-1:u)]}else{if(n<0?a==0:f==this.height)return null;return this.map[i+this.width*(n<0?a-1:f)]}};r.prototype.rectBetween=function(r,t){var n=this.findCell(r),e=n.left,i=n.right,u=n.top,a=n.bottom;var f=this.findCell(t),o=f.left,s=f.right,l=f.top,v=f.bottom;return{left:Math.min(e,o),top:Math.min(u,l),right:Math.max(i,s),bottom:Math.max(a,v)}};r.prototype.cellsInRect=function(r){var t=[];var n={};for(var e=r.top;e<r.bottom;e++)for(var i=r.left;i<r.right;i++){var u=e*this.width+i;var a=this.map[u];if(n[a])continue;n[a]=true;if(i==r.left&&i&&this.map[u-1]==a||e==r.top&&e&&this.map[u-this.width]==a)continue;t.push(a)}return t};r.prototype.positionAt=function(r,t,n){for(var e=0,i=0;;e++){var u=i+n.child(e).nodeSize;if(e==r){var a=t+r*this.width;var f=(r+1)*this.width;while(a<f&&this.map[a]<i)a++;return a==f?u-1:this.map[a]}i=u}};r.get=function(r){return ih(r)||uh(r,vh(r))};return r}();function vh(r){if(r.type.spec.tableRole!="table")throw new RangeError("Not a table node: "+r.type.name);var t=ch(r),n=r.childCount;var e=[];var i=0;var u=null;var a=[];for(var f=0,o=t*n;f<o;f++)e[f]=0;for(var s=0,l=0;s<n;s++){var v=r.child(s);l++;for(var c=0;;c++){while(i<e.length&&e[i]!=0)i++;if(c==v.childCount)break;var h=v.child(c);var d=h.attrs,p=d.colspan,b=d.rowspan,g=d.colwidth;for(var m=0;m<b;m++){if(m+s>=n){(u||(u=[])).push({type:"overlong_rowspan",pos:l,n:b-m});break}var w=i+m*t;for(var y=0;y<p;y++){if(e[w+y]==0)e[w+y]=l;else(u||(u=[])).push({type:"collision",row:s,pos:l,n:p-y});var k=g&&g[y];if(k){var _=(w+y)%t*2,x=a[_];if(x==null||x!=k&&a[_+1]==1){a[_]=k;a[_+1]=1}else if(x==k)a[_+1]++}}}i+=p;l+=h.nodeSize}var M=(s+1)*t;var O=0;while(i<M)if(e[i++]==0)O++;if(O)(u||(u=[])).push({type:"missing",row:s,n:O});l++}if(t===0||n===0)(u||(u=[])).push({type:"zero_sized"});var T=new lh(t,n,e,u);var A=false;for(var E=0;!A&&E<a.length;E+=2)if(a[E]!=null&&a[E+1]<n)A=true;if(A)hh(T,a,r);return T}function ch(r){var t=-1;var n=false;for(var e=0;e<r.childCount;e++){var i=r.child(e);var u=0;if(n)for(var a=0;a<e;a++){var f=r.child(a);for(var o=0;o<f.childCount;o++){var s=f.child(o);if(a+s.attrs.rowspan>e)u+=s.attrs.colspan}}for(var l=0;l<i.childCount;l++){var s=i.child(l);u+=s.attrs.colspan;if(s.attrs.rowspan>1)n=true}if(t==-1)t=u;else if(t!=u)t=Math.max(t,u)}return t}function hh(r,t,n){if(!r.problems)r.problems=[];var e={};for(var i=0;i<r.map.length;i++){var u=r.map[i];if(e[u])continue;e[u]=true;var a=n.nodeAt(u);if(!a)throw new RangeError("No cell with offset ".concat(u," found"));var f=null;var o=a.attrs;for(var s=0;s<o.colspan;s++){var l=t[(i+s)%r.width*2];if(l!=null&&(!o.colwidth||o.colwidth[s]!=l))(f||(f=dh(o)))[s]=l}if(f)r.problems.unshift({type:"colwidth mismatch",pos:u,colwidth:f})}}function dh(r){if(r.colwidth)return r.colwidth.slice();var t=[];for(var n=0;n<r.colspan;n++)t.push(0);return t}
/**
            * @public
            */function ph(r){var t=r.cached.tableNodeTypes;if(!t){t=r.cached.tableNodeTypes={};for(var n in r.nodes){var e=r.nodes[n],i=e.spec.tableRole;if(i)t[i]=e}}return t}
//#endregion
//#region src/util.ts
/**
            * @public
            */var bh=new Tn("selectingCells");
/**
            * @public
            */function gh(r){for(var t=r.depth-1;t>0;t--)if(r.node(t).type.spec.tableRole=="row")return r.node(0).resolve(r.before(t+1));return null}function mh(r){for(var t=r.depth;t>0;t--){var n=r.node(t).type.spec.tableRole;if(n==="cell"||n==="header_cell")return r.node(t)}return null}
/**
            * @public
            */function wh(r){var t=r.selection.$head;for(var n=t.depth;n>0;n--)if(t.node(n).type.spec.tableRole=="row")return true;return false}
/**
            * @internal
            */function yh(r){var t=r.selection;if("$anchorCell"in t&&t.$anchorCell)return t.$anchorCell.pos>t.$headCell.pos?t.$anchorCell:t.$headCell;else if("node"in t&&t.node&&t.node.type.spec.tableRole=="cell")return t.$anchor;var n=gh(t.$head)||kh(t.$head);if(n)return n;throw new RangeError("No cell found around position ".concat(t.head))}
/**
            * @public
            */function kh(r){for(var t=r.nodeAfter,n=r.pos;t;t=t.firstChild,n++){var e=t.type.spec.tableRole;if(e=="cell"||e=="header_cell")return r.doc.resolve(n)}for(var i=r.nodeBefore,n=r.pos;i;i=i.lastChild,n--){var e=i.type.spec.tableRole;if(e=="cell"||e=="header_cell")return r.doc.resolve(n-i.nodeSize)}}
/**
            * @public
            */function _h(r){return r.parent.type.spec.tableRole=="row"&&!!r.nodeAfter}
/**
            * @public
            */function xh(r){return r.node(0).resolve(r.pos+r.nodeAfter.nodeSize)}
/**
            * @internal
            */function Mh(r,t){return r.depth==t.depth&&r.pos>=t.start(-1)&&r.pos<=t.end(-1)}
/**
            * @public
            */function Oh(r,t,n){var e=r.node(-1);var i=lh.get(e);var u=r.start(-1);var a=i.nextCell(r.pos-u,t,n);return a==null?null:r.node(0).resolve(u+a)}
/**
            * @public
            */function Th(r,t,n){if(n===void 0){n=1}var e=__assign(__assign({},r),{colspan:r.colspan-n});if(e.colwidth){e.colwidth=e.colwidth.slice();e.colwidth.splice(t,n);if(!e.colwidth.some((function(r){return r>0})))e.colwidth=null}return e}
/**
            * @public
            */function Ah(r,t,n){if(n===void 0){n=1}var e=__assign(__assign({},r),{colspan:r.colspan+n});if(e.colwidth){e.colwidth=e.colwidth.slice();for(var i=0;i<n;i++)e.colwidth.splice(t,0,0)}return e}
/**
            * @public
            */function Eh(r,t,n){var e=ph(t.type.schema).header_cell;for(var i=0;i<r.height;i++)if(t.nodeAt(r.map[n+i*r.width]).type!=e)return false;return true}
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
            */var Sh=/** @class */function(r){__extends(t,r);function t(t,n){if(n===void 0){n=t}var e=this;var i=t.node(-1);var u=lh.get(i);var a=t.start(-1);var f=u.rectBetween(t.pos-a,n.pos-a);var o=t.node(0);var s=u.cellsInRect(f).filter((function(r){return r!=n.pos-a}));s.unshift(n.pos-a);var l=s.map((function(r){var t=i.nodeAt(r);if(!t)throw new RangeError("No cell with offset ".concat(r," found"));var n=a+r+1;return new tn(o.resolve(n),o.resolve(n+t.content.size))}));e=r.call(this,l[0].$from,l[0].$to,l)||this;e.$anchorCell=t;e.$headCell=n;return e}t.prototype.map=function(r,n){var e=r.resolve(n.map(this.$anchorCell.pos));var i=r.resolve(n.map(this.$headCell.pos));if(_h(e)&&_h(i)&&Mh(e,i)){var u=this.$anchorCell.node(-1)!=e.node(-1);if(u&&this.isRowSelection())return t.rowSelection(e,i);else if(u&&this.isColSelection())return t.colSelection(e,i);else return new t(e,i)}return un.between(e,i)};t.prototype.content=function(){var r=this.$anchorCell.node(-1);var t=lh.get(r);var n=this.$anchorCell.start(-1);var e=t.rectBetween(this.$anchorCell.pos-n,this.$headCell.pos-n);var i={};var u=[];for(var a=e.top;a<e.bottom;a++){var f=[];for(var o=a*t.width+e.left,s=e.left;s<e.right;s++,o++){var l=t.map[o];if(i[l])continue;i[l]=true;var v=t.findCell(l);var c=r.nodeAt(l);if(!c)throw new RangeError("No cell with offset ".concat(l," found"));var h=e.left-v.left;var d=v.right-e.right;if(h>0||d>0){var b=c.attrs;if(h>0)b=Th(b,0,h);if(d>0)b=Th(b,b.colspan-d,d);if(v.left<e.left){c=c.type.createAndFill(b);if(!c)throw new RangeError("Could not create cell with attrs ".concat(JSON.stringify(b)))}else c=c.type.create(b,c.content)}if(v.top<e.top||v.bottom>e.bottom){var b=__assign(__assign({},c.attrs),{rowspan:Math.min(v.bottom,e.bottom)-Math.max(v.top,e.top)});if(v.top<e.top)c=c.type.createAndFill(b);else c=c.type.create(b,c.content)}f.push(c)}u.push(r.child(a).copy(p.from(f)))}var g=this.isColSelection()&&this.isRowSelection()?r:u;return new k(p.from(g),1,1)};t.prototype.replace=function(r,t){if(t===void 0){t=k.empty}var n=r.steps.length,e=this.ranges;for(var i=0;i<e.length;i++){var u=e[i],a=u.$from,f=u.$to,o=r.mapping.slice(n);r.replace(o.map(a.pos),o.map(f.pos),i?k.empty:t)}var s=rn.findFrom(r.doc.resolve(r.mapping.slice(n).map(this.to)),-1);if(s)r.setSelection(s)};t.prototype.replaceWith=function(r,t){this.replace(r,new k(p.from(t),0,0))};t.prototype.forEachCell=function(r){var t=this.$anchorCell.node(-1);var n=lh.get(t);var e=this.$anchorCell.start(-1);var i=n.cellsInRect(n.rectBetween(this.$anchorCell.pos-e,this.$headCell.pos-e));for(var u=0;u<i.length;u++)r(t.nodeAt(i[u]),e+i[u])};t.prototype.isColSelection=function(){var r=this.$anchorCell.index(-1);var t=this.$headCell.index(-1);if(Math.min(r,t)>0)return false;var n=r+this.$anchorCell.nodeAfter.attrs.rowspan;var e=t+this.$headCell.nodeAfter.attrs.rowspan;return Math.max(n,e)==this.$headCell.node(-1).childCount};t.colSelection=function(r,n){if(n===void 0){n=r}var e=r.node(-1);var i=lh.get(e);var u=r.start(-1);var a=i.findCell(r.pos-u);var f=i.findCell(n.pos-u);var o=r.node(0);if(a.top<=f.top){if(a.top>0)r=o.resolve(u+i.map[a.left]);if(f.bottom<i.height)n=o.resolve(u+i.map[i.width*(i.height-1)+f.right-1])}else{if(f.top>0)n=o.resolve(u+i.map[f.left]);if(a.bottom<i.height)r=o.resolve(u+i.map[i.width*(i.height-1)+a.right-1])}return new t(r,n)};t.prototype.isRowSelection=function(){var r=this.$anchorCell.node(-1);var t=lh.get(r);var n=this.$anchorCell.start(-1);var e=t.colCount(this.$anchorCell.pos-n);var i=t.colCount(this.$headCell.pos-n);if(Math.min(e,i)>0)return false;var u=e+this.$anchorCell.nodeAfter.attrs.colspan;var a=i+this.$headCell.nodeAfter.attrs.colspan;return Math.max(u,a)==t.width};t.prototype.eq=function(r){return r instanceof t&&r.$anchorCell.pos==this.$anchorCell.pos&&r.$headCell.pos==this.$headCell.pos};t.rowSelection=function(r,n){if(n===void 0){n=r}var e=r.node(-1);var i=lh.get(e);var u=r.start(-1);var a=i.findCell(r.pos-u);var f=i.findCell(n.pos-u);var o=r.node(0);if(a.left<=f.left){if(a.left>0)r=o.resolve(u+i.map[a.top*i.width]);if(f.right<i.width)n=o.resolve(u+i.map[i.width*(f.top+1)-1])}else{if(f.left>0)n=o.resolve(u+i.map[f.top*i.width]);if(a.right<i.width)r=o.resolve(u+i.map[i.width*(a.top+1)-1])}return new t(r,n)};t.prototype.toJSON=function(){return{type:"cell",anchor:this.$anchorCell.pos,head:this.$headCell.pos}};t.fromJSON=function(r,n){return new t(r.resolve(n.anchor),r.resolve(n.head))};t.create=function(r,n,e){if(e===void 0){e=n}return new t(r.resolve(n),r.resolve(e))};t.prototype.getBookmark=function(){return new Ch(this.$anchorCell.pos,this.$headCell.pos)};return t}(rn);Sh.prototype.visible=false;rn.jsonID("cell",Sh);
/**
            * @public
            */var Ch=/** @class */function(){function r(r,t){this.anchor=r;this.head=t}r.prototype.map=function(t){return new r(t.map(this.anchor),t.map(this.head))};r.prototype.resolve=function(r){var t=r.resolve(this.anchor),n=r.resolve(this.head);if(t.parent.type.spec.tableRole=="row"&&n.parent.type.spec.tableRole=="row"&&t.index()<t.parent.childCount&&n.index()<n.parent.childCount&&Mh(t,n))return new Sh(t,n);else return rn.near(n,1)};return r}();function jh(r){if(!(r.selection instanceof Sh))return null;var t=[];r.selection.forEachCell((function(r,n){t.push(qa.node(n,n+r.nodeSize,{class:"selectedCell"}))}));return Ja.create(r.doc,t)}function Rh(r){var t=r.$from,n=r.$to;if(t.pos==n.pos||t.pos<n.pos-6)return false;var e=t.pos;var i=n.pos;var u=t.depth;for(;u>=0;u--,e++)if(t.after(u+1)<t.end(u))break;for(var a=n.depth;a>=0;a--,i--)if(n.before(a+1)>n.start(a))break;return e==i&&/row|table/.test(t.node(u).type.spec.tableRole)}function Lh(r){var t=r.$from,n=r.$to;var e;var i;for(var u=t.depth;u>0;u--){var a=t.node(u);if(a.type.spec.tableRole==="cell"||a.type.spec.tableRole==="header_cell"){e=a;break}}for(var f=n.depth;f>0;f--){var a=n.node(f);if(a.type.spec.tableRole==="cell"||a.type.spec.tableRole==="header_cell"){i=a;break}}return e!==i&&n.parentOffset===0}function Nh(r,t,n){var e=(t||r).selection;var i=(t||r).doc;var u;var a;if(e instanceof fn&&(a=e.node.type.spec.tableRole)){if(a=="cell"||a=="header_cell")u=Sh.create(i,e.from);else if(a=="row"){var f=i.resolve(e.from+1);u=Sh.rowSelection(f,f)}else if(!n){var o=lh.get(e.node);var s=e.from+1;var l=s+o.map[o.width*o.height-1];u=Sh.create(i,s+1,l)}}else if(e instanceof un&&Rh(e))u=un.create(i,e.from);else if(e instanceof un&&Lh(e))u=un.create(i,e.$from.start(),e.$from.end());if(u)(t||(t=r.tr)).setSelection(u);return t}
//#endregion
//#region src/fixtables.ts
/**
            * @public
            */var Ph=new Tn("fix-tables");
/**
            * Helper for iterating through the nodes in a document that changed
            * compared to the given previous document. Useful for avoiding
            * duplicate work on each transaction.
            *
            * @public
            */function Ih(r,t,n,e){var i=r.childCount,u=t.childCount;r:for(var a=0,f=0;a<u;a++){var o=t.child(a);for(var s=f,l=Math.min(i,a+3);s<l;s++)if(r.child(s)==o){f=s+1;n+=o.nodeSize;continue r}e(o,n);if(f<i&&r.child(f).sameMarkup(o))Ih(r.child(f),o,n+1,e);else o.nodesBetween(0,o.content.size,e,n+1);n+=o.nodeSize}}
/**
            * Inspect all tables in the given state's document and return a
            * transaction that fixes them, if necessary. If `oldState` was
            * provided, that is assumed to hold a previous, known-good state,
            * which will be used to avoid re-scanning unchanged parts of the
            * document.
            *
            * @public
            */function Hh(r,t){var n;var e=function(t,e){if(t.type.spec.tableRole=="table")n=Dh(r,t,e,n)};if(!t)r.doc.descendants(e);else if(t.doc!=r.doc)Ih(t.doc,r.doc,0,e);return n}function Dh(r,t,n,e){var i=lh.get(t);if(!i.problems)return e;if(!e)e=r.tr;var u=[];for(var a=0;a<i.height;a++)u.push(0);for(var f=0;f<i.problems.length;f++){var o=i.problems[f];if(o.type=="collision"){var s=t.nodeAt(o.pos);if(!s)continue;var l=s.attrs;for(var v=0;v<l.rowspan;v++)u[o.row+v]+=o.n;e.setNodeMarkup(e.mapping.map(n+1+o.pos),null,Th(l,l.colspan-o.n,o.n))}else if(o.type=="missing")u[o.row]+=o.n;else if(o.type=="overlong_rowspan"){var s=t.nodeAt(o.pos);if(!s)continue;e.setNodeMarkup(e.mapping.map(n+1+o.pos),null,__assign(__assign({},s.attrs),{rowspan:s.attrs.rowspan-o.n}))}else if(o.type=="colwidth mismatch"){var s=t.nodeAt(o.pos);if(!s)continue;e.setNodeMarkup(e.mapping.map(n+1+o.pos),null,__assign(__assign({},s.attrs),{colwidth:o.colwidth}))}else if(o.type=="zero_sized"){var c=e.mapping.map(n);e.delete(c,c+t.nodeSize)}}var h,d;for(var p=0;p<u.length;p++)if(u[p]){if(h==null)h=p;d=p}for(var b=0,c=n+1;b<i.height;b++){var g=t.child(b);var m=c+g.nodeSize;var w=u[b];if(w>0){var y="cell";if(g.firstChild)y=g.firstChild.type.spec.tableRole;var k=[];for(var v=0;v<w;v++){var _=ph(r.schema)[y].createAndFill();if(_)k.push(_)}var x=(b==0||h==b-1)&&d==b?c+1:m-1;e.insert(e.mapping.map(x),k)}c=m}return e.setMeta(Ph,{fixTables:true})}
//#endregion
//#region src/commands.ts
/**
            * Helper to get the selected rectangle in a table, if any. Adds table
            * map, table node, and table start offset to the object for
            * convenience.
            *
            * @public
            */function zh(r){var t=r.selection;var n=yh(r);var e=n.node(-1);var i=n.start(-1);var u=lh.get(e);return __assign(__assign({},t instanceof Sh?u.rectBetween(t.$anchorCell.pos-i,t.$headCell.pos-i):u.findCell(n.pos-i)),{tableStart:i,map:u,table:e})}
/**
            * Add a column at the given position in a table.
            *
            * @public
            */function Bh(r,t,n){var e=t.map,i=t.tableStart,u=t.table;var a=n>0?-1:0;if(Eh(e,u,n+a))a=n==0||n==e.width?null:0;for(var f=0;f<e.height;f++){var o=f*e.width+n;if(n>0&&n<e.width&&e.map[o-1]==e.map[o]){var s=e.map[o];var l=u.nodeAt(s);r.setNodeMarkup(r.mapping.map(i+s),null,Ah(l.attrs,n-e.colCount(s)));f+=l.attrs.rowspan-1}else{var v=a==null?ph(u.type.schema).cell:u.nodeAt(e.map[o+a]).type;var s=e.positionAt(f,n,u);r.insert(r.mapping.map(i+s),v.createAndFill())}}return r}
/**
            * Command to add a column before the column with the selection.
            *
            * @public
            */function Uh(r,t){if(!wh(r))return false;if(t){var n=zh(r);t(Bh(r.tr,n,n.left))}return true}
/**
            * Command to add a column after the column with the selection.
            *
            * @public
            */function $h(r,t){if(!wh(r))return false;if(t){var n=zh(r);t(Bh(r.tr,n,n.right))}return true}
/**
            * @public
            */function Kh(r,t,n){var e=t.map,i=t.table,u=t.tableStart;var a=r.mapping.maps.length;for(var f=0;f<e.height;){var o=f*e.width+n;var s=e.map[o];var l=i.nodeAt(s);var v=l.attrs;if(n>0&&e.map[o-1]==s||n<e.width-1&&e.map[o+1]==s)r.setNodeMarkup(r.mapping.slice(a).map(u+s),null,Th(v,n-e.colCount(s)));else{var c=r.mapping.slice(a).map(u+s);r.delete(c,c+l.nodeSize)}f+=v.rowspan}}
/**
            * Command function that removes the selected columns from a table.
            *
            * @public
            */function Fh(r,t){if(!wh(r))return false;if(t){var n=zh(r);var e=r.tr;if(n.left==0&&n.right==n.map.width)return false;for(var i=n.right-1;;i--){Kh(e,n,i);if(i==n.left)break;var u=n.tableStart?e.doc.nodeAt(n.tableStart-1):e.doc;if(!u)throw new RangeError("No table found");n.table=u;n.map=lh.get(u)}t(e)}return true}
/**
            * @public
            */function Wh(r,t,n){var e;var i=ph(t.type.schema).header_cell;for(var u=0;u<r.width;u++)if(((e=t.nodeAt(r.map[u+n*r.width]))===null||e===void 0?void 0:e.type)!=i)return false;return true}
/**
            * @public
            */function qh(r,t,n){var e=t.map,i=t.tableStart,u=t.table;var a=i;for(var f=0;f<n;f++)a+=u.child(f).nodeSize;var o=[];var s=n>0?-1:0;if(Wh(e,u,n+s))s=n==0||n==e.height?null:0;for(var l=0,v=e.width*n;l<e.width;l++,v++)if(n>0&&n<e.height&&e.map[v]==e.map[v-e.width]){var c=e.map[v];var h=u.nodeAt(c).attrs;r.setNodeMarkup(i+c,null,__assign(__assign({},h),{rowspan:h.rowspan+1}));l+=h.colspan-1}else{var d;var p=s==null?ph(u.type.schema).cell:(d=u.nodeAt(e.map[v+s*e.width]))===null||d===void 0?void 0:d.type;var b=p===null||p===void 0?void 0:p.createAndFill();if(b)o.push(b)}r.insert(a,ph(u.type.schema).row.create(null,o));return r}
/**
            * Add a table row before the selection.
            *
            * @public
            */function Vh(r,t){if(!wh(r))return false;if(t){var n=zh(r);t(qh(r.tr,n,n.top))}return true}
/**
            * Add a table row after the selection.
            *
            * @public
            */function Gh(r,t){if(!wh(r))return false;if(t){var n=zh(r);t(qh(r.tr,n,n.bottom))}return true}
/**
            * @public
            */function Jh(r,t,n){var e=t.map,i=t.table,u=t.tableStart;var a=0;for(var f=0;f<n;f++)a+=i.child(f).nodeSize;var o=a+i.child(n).nodeSize;var s=r.mapping.maps.length;r.delete(a+u,o+u);var l=new Set;for(var v=0,c=n*e.width;v<e.width;v++,c++){var h=e.map[c];if(l.has(h))continue;l.add(h);if(n>0&&h==e.map[c-e.width]){var d=i.nodeAt(h).attrs;r.setNodeMarkup(r.mapping.slice(s).map(h+u),null,__assign(__assign({},d),{rowspan:d.rowspan-1}));v+=d.colspan-1}else if(n<e.height&&h==e.map[c+e.width]){var p=i.nodeAt(h);var d=p.attrs;var b=p.type.create(__assign(__assign({},d),{rowspan:p.attrs.rowspan-1}),p.content);var g=e.positionAt(n+1,v,i);r.insert(r.mapping.slice(s).map(u+g),b);v+=d.colspan-1}}}
/**
            * Remove the selected rows from a table.
            *
            * @public
            */function Xh(r,t){if(!wh(r))return false;if(t){var n=zh(r),e=r.tr;if(n.top==0&&n.bottom==n.map.height)return false;for(var i=n.bottom-1;;i--){Jh(e,n,i);if(i==n.top)break;var u=n.tableStart?e.doc.nodeAt(n.tableStart-1):e.doc;if(!u)throw new RangeError("No table found");n.table=u;n.map=lh.get(n.table)}t(e)}return true}function Yh(r){var t=r.content;return t.childCount==1&&t.child(0).isTextblock&&t.child(0).childCount==0}function Qh(r,t){var n=r.width,e=r.height,i=r.map;var u=t.top*n+t.left,a=u;var f=(t.bottom-1)*n+t.left,o=u+(t.right-t.left-1);for(var s=t.top;s<t.bottom;s++){if(t.left>0&&i[a]==i[a-1]||t.right<n&&i[o]==i[o+1])return true;a+=n;o+=n}for(var l=t.left;l<t.right;l++){if(t.top>0&&i[u]==i[u-n]||t.bottom<e&&i[f]==i[f+n])return true;u++;f++}return false}
/**
            * Merge the selected cells into a single cell. Only available when
            * the selected cells' outline forms a rectangle.
            *
            * @public
            */function Zh(r,t){var n=r.selection;if(!(n instanceof Sh)||n.$anchorCell.pos==n.$headCell.pos)return false;var e=zh(r),i=e.map;if(Qh(i,e))return false;if(t){var u=r.tr;var a={};var f=p.empty;var o=void 0;var s=void 0;for(var l=e.top;l<e.bottom;l++)for(var v=e.left;v<e.right;v++){var c=i.map[l*i.width+v];var h=e.table.nodeAt(c);if(a[c]||!h)continue;a[c]=true;if(o==null){o=c;s=h}else{if(!Yh(h))f=f.append(h.content);var d=u.mapping.map(c+e.tableStart);u.delete(d,d+h.nodeSize)}}if(o==null||s==null)return true;u.setNodeMarkup(o+e.tableStart,null,__assign(__assign({},Ah(s.attrs,s.attrs.colspan,e.right-e.left-s.attrs.colspan)),{rowspan:e.bottom-e.top}));if(f.size>0){var b=o+1+s.content.size;var g=Yh(s)?o+1:b;u.replaceWith(g+e.tableStart,b+e.tableStart,f)}u.setSelection(new Sh(u.doc.resolve(o+e.tableStart)));t(u)}return true}
/**
            * Split a selected cell, whose rowpan or colspan is greater than one,
            * into smaller cells. Use the first cell type for the new cells.
            *
            * @public
            */function rd(r,t){var n=ph(r.schema);return td((function(r){var t=r.node;return n[t.type.spec.tableRole]}))(r,t)}
/**
            * Split a selected cell, whose rowpan or colspan is greater than one,
            * into smaller cells with the cell type (th, td) returned by getType function.
            *
            * @public
            */function td(r){return function(t,n){var e=t.selection;var i;var u;if(!(e instanceof Sh)){var a;i=mh(e.$from);if(!i)return false;u=(a=gh(e.$from))===null||a===void 0?void 0:a.pos}else{if(e.$anchorCell.pos!=e.$headCell.pos)return false;i=e.$anchorCell.nodeAfter;u=e.$anchorCell.pos}if(i==null||u==null)return false;if(i.attrs.colspan==1&&i.attrs.rowspan==1)return false;if(n){var f=i.attrs;var o=[];var s=f.colwidth;if(f.rowspan>1)f=__assign(__assign({},f),{rowspan:1});if(f.colspan>1)f=__assign(__assign({},f),{colspan:1});var l=zh(t),v=t.tr;for(var c=0;c<l.right-l.left;c++)o.push(s?__assign(__assign({},f),{colwidth:s&&s[c]?[s[c]]:null}):f);var h=void 0;for(var d=l.top;d<l.bottom;d++){var p=l.map.positionAt(d,l.left,l.table);if(d==l.top)p+=i.nodeSize;for(var b=l.left,g=0;b<l.right;b++,g++){if(b==l.left&&d==l.top)continue;v.insert(h=v.mapping.map(p+l.tableStart,1),r({node:i,row:d,col:b}).createAndFill(o[g]))}}v.setNodeMarkup(u,r({node:i,row:l.top,col:l.left}),o[0]);if(e instanceof Sh)v.setSelection(new Sh(v.doc.resolve(e.$anchorCell.pos),h?v.doc.resolve(h):void 0));n(v)}return true}}
/**
            * Returns a command that sets the given attribute to the given value,
            * and is only available when the currently selected cell doesn't
            * already have that attribute set to that value.
            *
            * @public
            */function nd(r,t){return function(n,e){var i;if(!wh(n))return false;var u=yh(n);if(u.nodeAfter.attrs[r]===t)return false;if(e){var a=n.tr;if(n.selection instanceof Sh)n.selection.forEachCell((function(n,e){var i;if(n.attrs[r]!==t)a.setNodeMarkup(e,null,__assign(__assign({},n.attrs),(i={},i[r]=t,i)))}));else a.setNodeMarkup(u.pos,null,__assign(__assign({},u.nodeAfter.attrs),(i={},i[r]=t,i)));e(a)}return true}}function ed(r){return function(t,n){if(!wh(t))return false;if(n){var e=ph(t.schema);var i=zh(t),u=t.tr;var a=i.map.cellsInRect(r=="column"?{left:i.left,top:0,right:i.right,bottom:i.map.height}:r=="row"?{left:0,top:i.top,right:i.map.width,bottom:i.bottom}:i);var f=a.map((function(r){return i.table.nodeAt(r)}));for(var o=0;o<a.length;o++)if(f[o].type==e.header_cell)u.setNodeMarkup(i.tableStart+a[o],e.cell,f[o].attrs);if(u.steps.length===0)for(var s=0;s<a.length;s++)u.setNodeMarkup(i.tableStart+a[s],e.header_cell,f[s].attrs);n(u)}return true}}function id(r,t,n){var e=t.map.cellsInRect({left:0,top:0,right:r=="row"?t.map.width:1,bottom:r=="column"?t.map.height:1});for(var i=0;i<e.length;i++){var u=t.table.nodeAt(e[i]);if(u&&u.type!==n.header_cell)return false}return true}
/**
            * Toggles between row/column header and normal cells (Only applies to first row/column).
            * For deprecated behavior pass `useDeprecatedLogic` in options with true.
            *
            * @public
            */function ud(r,t){t=t||{useDeprecatedLogic:false};if(t.useDeprecatedLogic)return ed(r);return function(t,n){if(!wh(t))return false;if(n){var e=ph(t.schema);var i=zh(t),u=t.tr;var a=id("row",i,e);var f=id("column",i,e);var o=(r==="column"?a:r==="row"?f:false)?1:0;var s=r=="column"?{left:0,top:o,right:1,bottom:i.map.height}:r=="row"?{left:o,top:0,right:i.map.width,bottom:1}:i;var l=r=="column"?f?e.cell:e.header_cell:r=="row"?a?e.cell:e.header_cell:e.cell;i.map.cellsInRect(s).forEach((function(r){var t=r+i.tableStart;var n=u.doc.nodeAt(t);if(n)u.setNodeMarkup(t,l,n.attrs)}));n(u)}return true}}
/**
            * Toggles whether the selected row contains header cells.
            *
            * @public
            */ud("row",{useDeprecatedLogic:true});
/**
            * Toggles whether the selected column contains header cells.
            *
            * @public
            */ud("column",{useDeprecatedLogic:true});
/**
            * Toggles whether the selected cells are header cells.
            *
            * @public
            */var ad=ud("cell",{useDeprecatedLogic:true});function fd(r,t){if(t<0){var n=r.nodeBefore;if(n)return r.pos-n.nodeSize;for(var e=r.index(-1)-1,i=r.before();e>=0;e--){var u=r.node(-1).child(e);var a=u.lastChild;if(a)return i-1-a.nodeSize;i-=u.nodeSize}}else{if(r.index()<r.parent.childCount-1)return r.pos+r.nodeAfter.nodeSize;var f=r.node(-1);for(var e=r.indexAfter(-1),o=r.after();e<f.childCount;e++){var u=f.child(e);if(u.childCount)return o+1;o+=u.nodeSize}}return null}
/**
            * Returns a command for selecting the next (direction=1) or previous
            * (direction=-1) cell in a table.
            *
            * @public
            */function od(r){return function(t,n){if(!wh(t))return false;var e=fd(yh(t),r);if(e==null)return false;if(n){var i=t.doc.resolve(e);n(t.tr.setSelection(un.between(i,xh(i))).scrollIntoView())}return true}}
/**
            * Deletes the table around the selection, if any.
            *
            * @public
            */function sd(r,t){var n=r.selection.$anchor;for(var e=n.depth;e>0;e--)if(n.node(e).type.spec.tableRole=="table"){if(t)t(r.tr.delete(n.before(e),n.after(e)).scrollIntoView());return true}return false}
/**
            * Deletes the content of the selected cells, if they are not empty.
            *
            * @public
            */function ld(r,t){var n=r.selection;if(!(n instanceof Sh))return false;if(t){var e=r.tr;var i=ph(r.schema).cell.createAndFill().content;n.forEachCell((function(r,t){if(!r.content.eq(i))e.replace(e.mapping.map(t+1),e.mapping.map(t+r.nodeSize-1),new k(i,0,0))}));if(e.docChanged)t(e)}return true}
//#endregion
//#region src/copypaste.ts
/**
            * Get a rectangular area of cells from a slice, or null if the outer
            * nodes of the slice aren't table cells or rows.
            *
            * @internal
            */function vd(r){if(r.size===0)return null;var t=r.content,n=r.openStart,e=r.openEnd;while(t.childCount==1&&(n>0&&e>0||t.child(0).type.spec.tableRole=="table")){n--;e--;t=t.child(0).content}var i=t.child(0);var u=i.type.spec.tableRole;var a=i.type.schema,f=[];if(u=="row")for(var o=0;o<t.childCount;o++){var s=t.child(o).content;var l=o?0:Math.max(0,n-1);var v=o<t.childCount-1?0:Math.max(0,e-1);if(l||v)s=hd(ph(a).row,new k(s,l,v)).content;f.push(s)}else if(u=="cell"||u=="header_cell")f.push(n||e?hd(ph(a).row,new k(t,n,e)).content:t);else return null;return cd(a,f)}function cd(r,t){var n=[];for(var e=0;e<t.length;e++){var i=t[e];for(var u=i.childCount-1;u>=0;u--){var a=i.child(u).attrs,f=a.rowspan,o=a.colspan;for(var s=e;s<e+f;s++)n[s]=(n[s]||0)+o}}var l=0;for(var s=0;s<n.length;s++)l=Math.max(l,n[s]);for(var s=0;s<n.length;s++){if(s>=t.length)t.push(p.empty);if(n[s]<l){var v=ph(r).cell.createAndFill();var c=[];for(var h=n[s];h<l;h++)c.push(v);t[s]=t[s].append(p.from(c))}}return{height:t.length,width:l,rows:t}}function hd(r,t){var n=r.createAndFill();return new Qt(n).replace(0,n.content.size,t).doc}
/**
            * Clip or extend (repeat) the given set of cells to cover the given
            * width and height. Will clip rowspan/colspan cells at the edges when
            * they stick out.
            *
            * @internal
            */function dd(r,t,n){var e=r.width,i=r.height,u=r.rows;if(e!=t){var a=[];var f=[];for(var o=0;o<u.length;o++){var s=u[o],l=[];for(var v=a[o]||0,c=0;v<t;c++){var h=s.child(c%s.childCount);if(v+h.attrs.colspan>t)h=h.type.createChecked(Th(h.attrs,h.attrs.colspan,v+h.attrs.colspan-t),h.content);l.push(h);v+=h.attrs.colspan;for(var d=1;d<h.attrs.rowspan;d++)a[o+d]=(a[o+d]||0)+h.attrs.colspan}f.push(p.from(l))}u=f;e=t}if(i!=n){var f=[];for(var o=0,b=0;o<n;o++,b++){var l=[],g=u[b%i];for(var d=0;d<g.childCount;d++){var h=g.child(d);if(o+h.attrs.rowspan>n)h=h.type.create(__assign(__assign({},h.attrs),{rowspan:Math.max(1,n-h.attrs.rowspan)}),h.content);l.push(h)}f.push(p.from(l))}u=f;i=n}return{width:e,height:i,rows:u}}function pd(r,t,n,e,i,u,a){var f=r.doc.type.schema;var o=ph(f);var s;var l;if(i>t.width)for(var v=0,c=0;v<t.height;v++){var h=n.child(v);c+=h.nodeSize;var d=[];var b=void 0;if(h.lastChild==null||h.lastChild.type==o.cell)b=s||(s=o.cell.createAndFill());else b=l||(l=o.header_cell.createAndFill());for(var g=t.width;g<i;g++)d.push(b);r.insert(r.mapping.slice(a).map(c-1+e),d)}if(u>t.height){var d=[];for(var m=0,w=(t.height-1)*t.width;m<Math.max(t.width,i);m++){var y=m>=t.width?false:n.nodeAt(t.map[w+m]).type==o.header_cell;d.push(y?l||(l=o.header_cell.createAndFill()):s||(s=o.cell.createAndFill()))}var k=o.row.create(null,p.from(d)),_=[];for(var x=t.height;x<u;x++)_.push(k);r.insert(r.mapping.slice(a).map(e+n.nodeSize-2),_)}return!!(s||l)}function bd(r,t,n,e,i,u,a,f){if(a==0||a==t.height)return false;var o=false;for(var s=i;s<u;s++){var l=a*t.width+s,v=t.map[l];if(t.map[l-t.width]==v){o=true;var c=n.nodeAt(v);var h=t.findCell(v),d=h.top,p=h.left;r.setNodeMarkup(r.mapping.slice(f).map(v+e),null,__assign(__assign({},c.attrs),{rowspan:a-d}));r.insert(r.mapping.slice(f).map(t.positionAt(a,p,n)),c.type.createAndFill(__assign(__assign({},c.attrs),{rowspan:d+c.attrs.rowspan-a})));s+=c.attrs.colspan-1}}return o}function gd(r,t,n,e,i,u,a,f){if(a==0||a==t.width)return false;var o=false;for(var s=i;s<u;s++){var l=s*t.width+a,v=t.map[l];if(t.map[l-1]==v){o=true;var c=n.nodeAt(v);var h=t.colCount(v);var d=r.mapping.slice(f).map(v+e);r.setNodeMarkup(d,null,Th(c.attrs,a-h,c.attrs.colspan-(a-h)));r.insert(d+c.nodeSize,c.type.createAndFill(Th(c.attrs,0,a-h)));s+=c.attrs.rowspan-1}}return o}
/**
            * Insert the given set of cells (as returned by `pastedCells`) into a
            * table, at the position pointed at by rect.
            *
            * @internal
            */function md(r,t,n,e,i){var u=n?r.doc.nodeAt(n-1):r.doc;if(!u)throw new Error("No table found");var a=lh.get(u);var f=e.top,o=e.left;var s=o+i.width,l=f+i.height;var v=r.tr;var c=0;function h(){u=n?v.doc.nodeAt(n-1):v.doc;if(!u)throw new Error("No table found");a=lh.get(u);c=v.mapping.maps.length}if(pd(v,a,u,n,s,l,c))h();if(bd(v,a,u,n,o,s,f,c))h();if(bd(v,a,u,n,o,s,l,c))h();if(gd(v,a,u,n,f,l,o,c))h();if(gd(v,a,u,n,f,l,s,c))h();for(var d=f;d<l;d++){var p=a.positionAt(d,o,u),b=a.positionAt(d,s,u);v.replace(v.mapping.slice(c).map(p+n),v.mapping.slice(c).map(b+n),new k(i.rows[d-f],0,0))}h();v.setSelection(new Sh(v.doc.resolve(n+a.positionAt(f,o,u)),v.doc.resolve(n+a.positionAt(l-1,s-1,u))));t(v)}
//#endregion
//#region src/input.ts
var wd=Vf({ArrowLeft:kd("horiz",-1),ArrowRight:kd("horiz",1),ArrowUp:kd("vert",-1),ArrowDown:kd("vert",1),"Shift-ArrowLeft":_d("horiz",-1),"Shift-ArrowRight":_d("horiz",1),"Shift-ArrowUp":_d("vert",-1),"Shift-ArrowDown":_d("vert",1),Backspace:ld,"Mod-Backspace":ld,Delete:ld,"Mod-Delete":ld});function yd(r,t,n){if(n.eq(r.selection))return false;if(t)t(r.tr.setSelection(n).scrollIntoView());return true}
/**
            * @internal
            */function kd(r,t){return function(n,e,i){if(!i)return false;var u=n.selection;if(u instanceof Sh)return yd(n,e,rn.near(u.$headCell,t));if(r!="horiz"&&!u.empty)return false;var a=Td(i,r,t);if(a==null)return false;if(r=="horiz")return yd(n,e,rn.near(n.doc.resolve(u.head+t),t));else{var f=n.doc.resolve(a);var o=Oh(f,r,t);var s=void 0;if(o)s=rn.near(o,1);else if(t<0)s=rn.near(n.doc.resolve(f.before(-1)),-1);else s=rn.near(n.doc.resolve(f.after(-1)),1);return yd(n,e,s)}}}function _d(r,t){return function(n,e,i){if(!i)return false;var u=n.selection;var a;if(u instanceof Sh)a=u;else{var f=Td(i,r,t);if(f==null)return false;a=new Sh(n.doc.resolve(f))}var o=Oh(a.$headCell,r,t);if(!o)return false;return yd(n,e,new Sh(a.$anchorCell,o))}}function xd(r,t){var n=r.state.doc,e=gh(n.resolve(t));if(!e)return false;r.dispatch(r.state.tr.setSelection(new Sh(e)));return true}
/**
            * @public
            */function Md(r,t,n){if(!wh(r.state))return false;var e=vd(n);var i=r.state.selection;if(i instanceof Sh){if(!e)e={width:1,height:1,rows:[p.from(hd(ph(r.state.schema).cell,n))]};var u=i.$anchorCell.node(-1);var a=i.$anchorCell.start(-1);var f=lh.get(u).rectBetween(i.$anchorCell.pos-a,i.$headCell.pos-a);e=dd(e,f.right-f.left,f.bottom-f.top);md(r.state,r.dispatch,a,f,e);return true}else if(e){var o=yh(r.state);var a=o.start(-1);md(r.state,r.dispatch,a,lh.get(o.node(-1)).findCell(o.pos-a),e);return true}else return false}function Od(r,t){var n;if(t.button!=0)return;if(t.ctrlKey||t.metaKey)return;var e=Ad(r,t.target);var i;if(t.shiftKey&&r.state.selection instanceof Sh){u(r.state.selection.$anchorCell,t);t.preventDefault()}else if(t.shiftKey&&e&&(i=gh(r.state.selection.$anchor))!=null&&((n=Ed(r,t))===null||n===void 0?void 0:n.pos)!=i.pos){u(i,t);t.preventDefault()}else if(!e)return;function u(t,n){var e=Ed(r,n);var i=bh.getState(r.state)==null;if(!e||!Mh(t,e))if(i)e=t;else return;var u=new Sh(t,e);if(i||!r.state.selection.eq(u)){var a=r.state.tr.setSelection(u);if(i)a.setMeta(bh,t.pos);r.dispatch(a)}}function a(){r.root.removeEventListener("mouseup",a);r.root.removeEventListener("dragstart",a);r.root.removeEventListener("mousemove",f);if(bh.getState(r.state)!=null)r.dispatch(r.state.tr.setMeta(bh,-1))}function f(n){var i=n;var f=bh.getState(r.state);var o;if(f!=null)o=r.state.doc.resolve(f);else if(Ad(r,i.target)!=e){o=Ed(r,t);if(!o)return a()}if(o)u(o,i)}r.root.addEventListener("mouseup",a);r.root.addEventListener("dragstart",a);r.root.addEventListener("mousemove",f)}function Td(r,t,n){if(!(r.state.selection instanceof un))return null;var e=r.state.selection.$head;for(var i=e.depth-1;i>=0;i--){var u=e.node(i);if((n<0?e.index(i):e.indexAfter(i))!=(n<0?0:u.childCount))return null;if(u.type.spec.tableRole=="cell"||u.type.spec.tableRole=="header_cell"){var a=e.before(i);var f=t=="vert"?n>0?"down":"up":n>0?"right":"left";return r.endOfTextblock(f)?a:null}}return null}function Ad(r,t){for(;t&&t!=r.dom;t=t.parentNode)if(t.nodeName=="TD"||t.nodeName=="TH")return t;return null}function Ed(r,t){var n=r.posAtCoords({left:t.clientX,top:t.clientY});if(!n)return null;var e=n.inside,i=n.pos;return e>=0&&gh(r.state.doc.resolve(e))||gh(r.state.doc.resolve(i))}
//#endregion
//#region src/tableview.ts
/**
            * @public
            */var Sd=/** @class */function(){function r(r,t){this.node=r;this.defaultCellMinWidth=t;this.dom=document.createElement("div");this.dom.className="tableWrapper";this.table=this.dom.appendChild(document.createElement("table"));this.table.style.setProperty("--default-cell-min-width","".concat(t,"px"));this.colgroup=this.table.appendChild(document.createElement("colgroup"));Cd(r,this.colgroup,this.table,t);this.contentDOM=this.table.appendChild(document.createElement("tbody"))}r.prototype.update=function(r){if(r.type!=this.node.type)return false;this.node=r;Cd(r,this.colgroup,this.table,this.defaultCellMinWidth);return true};r.prototype.ignoreMutation=function(r){return r.type=="attributes"&&(r.target==this.table||this.colgroup.contains(r.target))};return r}();
/**
            * @public
            */function Cd(r,t,n,e,i,u){var a=0;var f=true;var o=t.firstChild;var s=r.firstChild;if(!s)return;for(var l=0,v=0;l<s.childCount;l++){var c=s.child(l).attrs,h=c.colspan,d=c.colwidth;for(var p=0;p<h;p++,v++){var b=i==v?u:d&&d[p];var g=b?b+"px":"";a+=b||e;if(!b)f=false;if(!o){var m=document.createElement("col");m.style.width=g;t.appendChild(m)}else{if(o.style.width!=g)o.style.width=g;o=o.nextSibling}}}while(o){var w;var y=o.nextSibling;(w=o.parentNode)===null||w===void 0||w.removeChild(o);o=y}if(f){n.style.width=a+"px";n.style.minWidth=""}else{n.style.width="";n.style.minWidth=a+"px"}}
//#endregion
//#region src/columnresizing.ts
/**
            * @public
            */var jd=new Tn("tableColumnResizing");
/**
            * @public
            */function Rd(r){var t=r===void 0?{}:r,n=t.handleWidth,e=n===void 0?5:n,i=t.cellMinWidth,u=i===void 0?25:i,a=t.defaultCellMinWidth,f=a===void 0?100:a,o=t.View,s=o===void 0?Sd:o,l=t.lastColumnResizable,v=l===void 0?true:l;var c=new xn({key:jd,state:{init:function(r,t){var n;var e=(n=c.spec)===null||n===void 0||(n=n.props)===null||n===void 0?void 0:n.nodeViews;var i=ph(t.schema).table.name;if(s&&e)e[i]=function(r,t){return new s(r,f,t)};return new Ld(-1,false)},apply:function(r,t){return t.apply(r)}},props:{attributes:function(r){var t=jd.getState(r);return t&&t.activeHandle>-1?{class:"resize-cursor"}:{}},handleDOMEvents:{mousemove:function(r,t){Nd(r,t,e,v)},mouseleave:function(r){Pd(r)},mousedown:function(r,t){Id(r,t,u,f)}},decorations:function(r){var t=jd.getState(r);if(t&&t.activeHandle>-1)return Wd(r,t.activeHandle)},nodeViews:{}}});return c}
/**
            * @public
            */var Ld=/** @class */function(){function r(r,t){this.activeHandle=r;this.dragging=t}r.prototype.apply=function(t){var n=this;var e=t.getMeta(jd);if(e&&e.setHandle!=null)return new r(e.setHandle,false);if(e&&e.setDragging!==void 0)return new r(n.activeHandle,e.setDragging);if(n.activeHandle>-1&&t.docChanged){var i=t.mapping.map(n.activeHandle,-1);if(!_h(t.doc.resolve(i)))i=-1;return new r(i,n.dragging)}return n};return r}();function Nd(r,t,n,e){if(!r.editable)return;var i=jd.getState(r.state);if(!i)return;if(!i.dragging){var u=Dd(t.target);var a=-1;if(u){var f=u.getBoundingClientRect(),o=f.left,s=f.right;if(t.clientX-o<=n)a=zd(r,t,"left",n);else if(s-t.clientX<=n)a=zd(r,t,"right",n)}if(a!=i.activeHandle){if(!e&&a!==-1){var l=r.state.doc.resolve(a);var v=l.node(-1);var c=lh.get(v);var h=l.start(-1);if(c.colCount(l.pos-h)+l.nodeAfter.attrs.colspan-1==c.width-1)return}Ud(r,a)}}}function Pd(r){if(!r.editable)return;var t=jd.getState(r.state);if(t&&t.activeHandle>-1&&!t.dragging)Ud(r,-1)}function Id(r,t,n,e){var i;if(!r.editable)return false;var u=(i=r.dom.ownerDocument.defaultView)!==null&&i!==void 0?i:window;var a=jd.getState(r.state);if(!a||a.activeHandle==-1||a.dragging)return false;var f=r.state.doc.nodeAt(a.activeHandle);var o=Hd(r,a.activeHandle,f.attrs);r.dispatch(r.state.tr.setMeta(jd,{setDragging:{startX:t.clientX,startWidth:o}}));function s(t){u.removeEventListener("mouseup",s);u.removeEventListener("mousemove",l);var e=jd.getState(r.state);if(e===null||e===void 0?void 0:e.dragging){$d(r,e.activeHandle,Bd(e.dragging,t,n));r.dispatch(r.state.tr.setMeta(jd,{setDragging:null}))}}function l(t){if(!t.which)return s(t);var i=jd.getState(r.state);if(!i)return;if(i.dragging){var u=Bd(i.dragging,t,n);Kd(r,i.activeHandle,u,e)}}Kd(r,a.activeHandle,o,e);u.addEventListener("mouseup",s);u.addEventListener("mousemove",l);t.preventDefault();return true}function Hd(r,t,n){var e=n.colspan,i=n.colwidth;var u=i&&i[i.length-1];if(u)return u;var a=r.domAtPos(t);var f=a.node.childNodes[a.offset].offsetWidth,o=e;if(i){for(var s=0;s<e;s++)if(i[s]){f-=i[s];o--}}return f/o}function Dd(r){while(r&&r.nodeName!="TD"&&r.nodeName!="TH")r=r.classList&&r.classList.contains("ProseMirror")?null:r.parentNode;return r}function zd(r,t,n,e){var i=n=="right"?-e:e;var u=r.posAtCoords({left:t.clientX+i,top:t.clientY});if(!u)return-1;var a=u.pos;var f=gh(r.state.doc.resolve(a));if(!f)return-1;if(n=="right")return f.pos;var o=lh.get(f.node(-1)),s=f.start(-1);var l=o.map.indexOf(f.pos-s);return l%o.width==0?-1:s+o.map[l-1]}function Bd(r,t,n){var e=t.clientX-r.startX;return Math.max(n,r.startWidth+e)}function Ud(r,t){r.dispatch(r.state.tr.setMeta(jd,{setHandle:t}))}function $d(r,t,n){var e=r.state.doc.resolve(t);var i=e.node(-1),u=lh.get(i),a=e.start(-1);var f=u.colCount(e.pos-a)+e.nodeAfter.attrs.colspan-1;var o=r.state.tr;for(var s=0;s<u.height;s++){var l=s*u.width+f;if(s&&u.map[l]==u.map[l-u.width])continue;var v=u.map[l];var c=i.nodeAt(v).attrs;var h=c.colspan==1?0:f-u.colCount(v);if(c.colwidth&&c.colwidth[h]==n)continue;var d=c.colwidth?c.colwidth.slice():Fd(c.colspan);d[h]=n;o.setNodeMarkup(a+v,null,__assign(__assign({},c),{colwidth:d}))}if(o.docChanged)r.dispatch(o)}function Kd(r,t,n,e){var i=r.state.doc.resolve(t);var u=i.node(-1),a=i.start(-1);var f=lh.get(u).colCount(i.pos-a)+i.nodeAfter.attrs.colspan-1;var o=r.domAtPos(i.start(-1)).node;while(o&&o.nodeName!="TABLE")o=o.parentNode;if(!o)return;Cd(u,o.firstChild,o,e,f,n)}function Fd(r){return Array(r).fill(0)}function Wd(r,t){var n=[];var e=r.doc.resolve(t);var i=e.node(-1);if(!i)return Ja.empty;var u=lh.get(i);var a=e.start(-1);var f=u.colCount(e.pos-a)+e.nodeAfter.attrs.colspan-1;for(var o=0;o<u.height;o++){var s=f+o*u.width;if((f==u.width-1||u.map[s]!=u.map[s+1])&&(o==0||u.map[s]!=u.map[s-u.width])){var l;var v=u.map[s];var c=a+v+i.nodeAt(v).nodeSize-1;var h=document.createElement("div");h.className="column-resize-handle";if((l=jd.getState(r))===null||l===void 0?void 0:l.dragging)n.push(qa.node(a+v,a+v+i.nodeAt(v).nodeSize,{class:"column-resize-dragging"}));n.push(qa.widget(c,h))}}return Ja.create(r.doc,n)}
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
            */function qd(r){var t=r===void 0?{}:r,n=t.allowTableNodeSelection,e=n===void 0?false:n;return new xn({key:bh,state:{init:function(){return null},apply:function(r,t){var n=r.getMeta(bh);if(n!=null)return n==-1?null:n;if(t==null||!r.docChanged)return t;var e=r.mapping.mapResult(t),i=e.deleted,u=e.pos;return i?null:u}},props:{decorations:jh,handleDOMEvents:{mousedown:Od},createSelectionBetween:function(r){return bh.getState(r.state)!=null?r.state.selection:null},handleTripleClick:xd,handleKeyDown:wd,handlePaste:Md},appendTransaction:function(r,t,n){return Nh(n,Hh(n,t),e)}})}
//#region src/utils/parseAlign.ts
/**
            * Normalize unknown input into a supported table alignment
            *
            * @param value - A potential alignment value
            * @returns A valid TableCellAlign value or null
            */function Vd(r){if(r==="left"||r==="right"||r==="center")return r;return null}
/**
            * Parse table cell alignment from an HTML element
            *
            * Prefers inline style (${"`"}text-align${"`"}) and falls back to the legacy
            * ${"`"}align${"`"} attribute.
            *
            * @param element - The table cell/header DOM element
            * @returns A valid TableCellAlign value or null
            */function Gd(r){var t=(r.style.textAlign||"").trim().toLowerCase();var n=(r.getAttribute("align")||"").trim().toLowerCase();return Vd(t||n)}
/**
            * Normalize alignment from a generic attrs object that may include an align field
            *
            * @param attributes - A node attrs-like object with an optional align field
            * @returns A valid TableCellAlign value or null.
            */function Jd(r){return Vd(r===null||r===void 0?void 0:r.align)}
/**
            * Create a reusable Tiptap attribute config for table alignment
            *
            * @returns A Tiptap Attribute definition that parses and renders table alignment
            */function Xd(){return{default:null,parseHTML:function(r){return Gd(r)},renderHTML:function(r){var t=Vd(r.align);if(!ic(t))return{};return{style:"text-align: ".concat(t)}}}}
//#endregion
//#region src/utils/parseColwidth.ts
/**
            * reads the width of the `<col>` element matching a cell's column from the table's `<colgroup>`
            *
            * @param element - The table cell/header DOM element
            * @returns - An array with the column width in pixels or null
            */function Yd(r){var t;var n=r.parentElement;var e=r.closest("table");if(!n||!e)return null;var i=Array.from(n.children).indexOf(r);var u=(t=e.querySelectorAll("colgroup > col")[i])===null||t===void 0?void 0:t.getAttribute("width");return u?[parseInt(u,10)]:null}
/**
            * Parse the column width/s of a table cell/header from an HTML element.
            * it prefers the `colwidth` attribute and if not-provided falls back to the `width` attribute
            * of the matching `<col>` element in the table's `<colgroup>`.
            *
            * @param element - The table cell/header DOM element
            * @returns - An array of column widths in pixels or null
            */function Qd(r){var t=r.getAttribute("colwidth");if(t)return t.split(",").map((function(r){return parseInt(r,10)}));return Yd(r)}
//#endregion
//#region src/utils/fillEmptyCellContent.ts
var Zd=/[ \t\r\n\f]+/g;
/** Whether a cell/header element has no child elements and only collapsible whitespace. */function rp(r){var t;if(r.children.length>0)return false;return((t=r.textContent)!==null&&t!==void 0?t:"").replace(Zd,"")===""}
/** Builds a cell/header's minimal `block+` content, derived from the node type. */function tp(r){var t=r.createAndFill();if(!t)throw new Error('[tiptap error]: "'.concat(r.name,'" has no default content to backfill.'));return t.content}
//#endregion
//#region src/utils/omitDefaultSpanAttribute.ts
function np(r,t,n){if(!(n in t))return;var e=t[n];if(e===1||e==="1"||e===null||e===void 0)delete r[n]}
//#endregion
//#region src/cell/table-cell.ts
/**
            * This extension allows you to create table cells.
            * @see https://www.tiptap.dev/api/nodes/table-cell
            */var ep=rh.create({name:"tableCell",addOptions:function(){return{HTMLAttributes:{}}},content:"block+",addAttributes:function(){return{colspan:{default:1},rowspan:{default:1},colwidth:{default:null,parseHTML:Qd},align:Xd()}},tableRole:"cell",isolating:true,parseHTML:function(){var r=this;return[{tag:"td",getAttrs:function(r){return rp(r)?{}:false},getContent:function(t,n){return tp(n.nodes[r.name])}},{tag:"td"}]},renderHTML:function(r){var t=r.HTMLAttributes;var n=vl(this.options.HTMLAttributes,t);np(n,t,"colspan");np(n,t,"rowspan");return["td",n,0]}});
//#endregion
//#region src/header/table-header.ts
/**
            * This extension allows you to create table headers.
            * @see https://www.tiptap.dev/api/nodes/table-header
            */var ip=rh.create({name:"tableHeader",addOptions:function(){return{HTMLAttributes:{}}},content:"block+",addAttributes:function(){return{colspan:{default:1},rowspan:{default:1},colwidth:{default:null,parseHTML:Qd},align:Xd()}},tableRole:"header_cell",isolating:true,parseHTML:function(){var r=this;return[{tag:"th",getAttrs:function(r){return rp(r)?{}:false},getContent:function(t,n){return tp(n.nodes[r.name])}},{tag:"th"}]},renderHTML:function(r){var t=r.HTMLAttributes;var n=vl(this.options.HTMLAttributes,t);np(n,t,"colspan");np(n,t,"rowspan");return["th",n,0]}});
//#endregion
//#region src/row/table-row.ts
/**
            * This extension allows you to create table rows.
            * @see https://www.tiptap.dev/api/nodes/table-row
            */var up=rh.create({name:"tableRow",addOptions:function(){return{HTMLAttributes:{}}},content:"(tableCell | tableHeader)*",tableRole:"row",parseHTML:function(){return[{tag:"tr"}]},renderHTML:function(r){var t=r.HTMLAttributes;return["tr",vl(this.options.HTMLAttributes,t),0]}});
//#endregion
//#region src/table/utilities/colStyle.ts
function ap(r,t){if(t)return["width","".concat(Math.max(t,r),"px")];return["min-width","".concat(r,"px")]}
//#endregion
//#region src/table/TableView.ts
function fp(r,t,n,e,i,u){var a=0;var f=true;var o=t.firstChild;var s=r.firstChild;if(s!==null)for(var l=0,v=0;l<s.childCount;l+=1){var c=s.child(l).attrs,h=c.colspan,d=c.colwidth;for(var p=0;p<h;p+=1,v+=1){var b=i===v?u:d&&d[p];var g=b?"".concat(b,"px"):"";a+=b||e;if(!b)f=false;if(!o){var m=document.createElement("col");var w=ap(e,b),y=w[0],k=w[1];m.style.setProperty(y,k);t.appendChild(m)}else{if(o.style.width!==g){var _=ap(e,b),y=_[0],k=_[1];o.style.setProperty(y,k)}o=o.nextSibling}}}while(o){var x;var M=o.nextSibling;(x=o.parentNode)===null||x===void 0||x.removeChild(o);o=M}var O=r.attrs.style&&typeof r.attrs.style==="string"&&/\bwidth\s*:/i.test(r.attrs.style);if(f&&!O){n.style.width="".concat(a,"px");n.style.minWidth=""}else{n.style.width="";n.style.minWidth="".concat(a,"px")}}var op=/** @class */function(){function r(r,t,n,e){if(e===void 0){e={}}this.node=r;this.cellMinWidth=t;this.dom=document.createElement("div");this.dom.className="tableWrapper";this.table=this.dom.appendChild(document.createElement("table"));for(var i=0,u=Object.entries(e);i<u.length;i++){var a=u[i],f=a[0],o=a[1];if(o!==void 0&&o!==null){if(f==="style")this.table.style.cssText=String(o);else this.table.setAttribute(f,String(o))}}if(r.attrs.style)this.table.style.cssText=r.attrs.style;this.colgroup=this.table.appendChild(document.createElement("colgroup"));fp(r,this.colgroup,this.table,t);this.contentDOM=this.table.appendChild(document.createElement("tbody"))}r.prototype.update=function(r){if(!r.sameMarkup(this.node))return false;this.node=r;fp(r,this.colgroup,this.table,this.cellMinWidth);return true};r.prototype.ignoreMutation=function(r){var t=r.target;var n=this.dom.contains(t);var e=this.contentDOM.contains(t);if(n&&!e){if(r.type==="attributes"||r.type==="childList"||r.type==="characterData")return true}return false};return r}();
//#endregion
//#region src/table/utilities/createColGroup.ts
function sp(r,t,n,e){var i=0;var u=true;var a=[];var f=r.firstChild;if(!f)return{};for(var o=0,s=0;o<f.childCount;o+=1){var l=f.child(o).attrs,v=l.colspan,c=l.colwidth;for(var h=0;h<v;h+=1,s+=1){var d=n===s?e:c&&c[h];i+=d||t;if(!d)u=false;var p=ap(t,d),b=p[0],g=p[1];a.push(["col",{style:"".concat(b,": ").concat(g)}])}}var m=u?"".concat(i,"px"):"";var w=u?"":"".concat(i,"px");return{colgroup:__spreadArray(["colgroup",{}],a,true),tableWidth:m,tableMinWidth:w}}
//#endregion
//#region src/table/utilities/createCell.ts
function lp(r,t){return r.createAndFill()}
//#endregion
//#region src/table/utilities/getTableNodeTypes.ts
function vp(r){if(r.cached.tableNodeTypes)return r.cached.tableNodeTypes;var t={};Object.keys(r.nodes).forEach((function(n){var e=r.nodes[n];if(e.spec.tableRole)t[e.spec.tableRole]=e}));r.cached.tableNodeTypes=t;return t}
//#endregion
//#region src/table/utilities/createTable.ts
function cp(r,t,n,e,i){var u=vp(r);var a=[];var f=[];for(var o=0;o<n;o+=1){var s=lp(u.cell);if(s)f.push(s);if(e){var l=lp(u.header_cell);if(l)a.push(l)}}var v=[];for(var o=0;o<t;o+=1)v.push(u.row.createChecked(null,e&&o===0?a:f));return u.table.createChecked(null,v)}
//#endregion
//#region src/table/utilities/isCellSelection.ts
function hp(r){return r instanceof Sh}
//#endregion
//#region src/table/utilities/deleteTableWhenAllCellsSelected.ts
var dp=function(r){var t=r.editor;var n=t.state.selection;if(!hp(n))return false;var e=0;var i=Ws(n.ranges[0].$from,(function(r){return r.type.name==="table"}));i===null||i===void 0||i.node.descendants((function(r){if(r.type.name==="table")return false;if(["tableCell","tableHeader"].includes(r.type.name))e+=1}));if(!(e===n.ranges.length))return false;t.commands.deleteTable();return true};
//#endregion
//#region src/table/utilities/keepCursorInTable.ts
function pp(r,t){var n=r.mapping.map(t);var e=Ws(r.selection.$from,(function(r){return r.type.name==="table"}));if((e===null||e===void 0?void 0:e.pos)===n)return;var i=r.doc.nodeAt(n);if(!i)return;var u=n+i.nodeSize-1;r.setSelection(un.near(r.doc.resolve(u),-1))}
/**
            * Walk a single table-row line and escape any `|` characters that appear
            * inside backtick code spans so marked's cell splitter ignores them.
            * Backslash escape sequences outside code spans are passed through untouched.
            * If a backtick run has no matching closer on the same line it is emitted
            * as-is — no over-escaping for malformed input.
            */function bp(r){var t="";var n=0;while(n<r.length){if(r[n]==="\\"&&n+1<r.length){t+=r[n]+r[n+1];n+=2;continue}if(r[n]!=="`"){t+=r[n++];continue}var e=0;while(n+e<r.length&&r[n+e]==="`")e+=1;var i=n+e;var u=false;while(i<r.length){if(r[i]!=="`"){i+=1;continue}var a=0;while(i+a<r.length&&r[i+a]==="`")a+=1;if(a===e){var f=r.slice(n+e,i);t+=r.slice(n,n+e)+f.replace(/\\\||\|/g,(function(r){return r==="|"?"\\|":r}))+r.slice(i,i+e);n=i+e;u=true;break}i+=a}if(!u){t+=r.slice(n,n+e);n+=e}}return t}
/**
            * Escape pipe characters inside backtick code spans on table-row lines.
            * marked's `splitCells` only recognises backslash-escaped pipes (`\|`) and
            * splits on every other `|`, so \`a || b\` in a table cell would be treated
            * as multiple column delimiters. Escaping them here lets `splitCells` skip
            * them; it already converts `\|` → `|` after splitting, so the cell content
            * is restored correctly.
            */function gp(r){return r.split("\n").map((function(r){if(!r.includes("|")||!r.includes("`"))return r;return bp(r)})).join("\n")}function mp(r){return(r||"").replaceAll(""," ").replace(/\s+/g," ").trim()}function wp(r,t){if(!t)return r;return r.split(t).join("\n")}function yp(r){return r.replace(/\\.|\|/g,(function(r){return r==="|"?"\\|":r}))}function kp(r,t,n){if(n===void 0){n={}}if(!r||!r.content||r.content.length===0)return"";var e=[];r.content.forEach((function(r){var i=[];if(r.content)r.content.forEach((function(r){var e="";if(r.content&&Array.isArray(r.content)&&r.content.length>1)e=r.content.map((function(r){return wp(t.renderChildren(r),n.cellLineSeparator)})).join("\n");else e=wp(r.content?t.renderChildren(r.content):"",n.cellLineSeparator);var u=yp(mp(e.replace(/[ \t]*\r?\n[ \t]*/g,"<br>")));var a=r.type==="tableHeader";var f=Jd(r.attrs);i.push({text:u,isHeader:a,align:f})}));e.push(i)}));var i=e.reduce((function(r,t){return Math.max(r,t.length)}),0);if(i===0)return"";var u=Array.from({length:i}).fill(0);e.forEach((function(r){for(var t=0;t<i;t+=1){var n;var e=(((n=r[t])===null||n===void 0?void 0:n.text)||"").length;if(e>u[t])u[t]=e;if(u[t]<3)u[t]=3}}));var a=function(r,t){return r+" ".repeat(Math.max(0,t-r.length))};var f=e[0];var o=f.some((function(r){return r.isHeader}));var s=Array.from({length:i}).fill(null);e.forEach((function(r){for(var t=0;t<i;t+=1){var n;if(!s[t]&&((n=r[t])===null||n===void 0?void 0:n.align))s[t]=r[t].align}}));var l="\n";var v=Array.from({length:i}).map((function(r,t){return o?f[t]&&f[t].text||"":""}));l+="| ".concat(v.map((function(r,t){return a(r,u[t])})).join(" | ")," |\n");l+="| ".concat(u.map((function(r,t){var n=Math.max(3,r);var e=s[t];if(e==="left")return":".concat("-".repeat(n));if(e==="right")return"".concat("-".repeat(n),":");if(e==="center")return":".concat("-".repeat(n),":");return"-".repeat(n)})).join(" | ")," |\n");(o?e.slice(1):e).forEach((function(r){l+="| ".concat(Array.from({length:i}).fill(0).map((function(t,n){return a(r[n]&&r[n].text||"",u[n])})).join(" | ")," |\n")}));return l}
//#endregion
//#region src/table/utilities/preserveCellSelectionOnContextMenu.ts
var _p=new Tn("preserveCellSelectionOnContextMenu");function xp(r,t){var n=r.posAtCoords({left:t.clientX,top:t.clientY});if(n)return n.pos;if(!(t.target instanceof Node))return null;try{return r.posAtDOM(t.target,0)}catch(r){return null}}function Mp(r,t){var n=false;r.forEachCell((function(r,e){if(t>=e&&t<e+r.nodeSize)n=true}));return n}function Op(){return new xn({key:_p,props:{handleDOMEvents:{mousedown:function(r,t){if(t.button!==2)return false;var n=r.state.selection;if(!hp(n)||n.ranges.length<2)return false;var e=xp(r,t);if(e==null||!Mp(n,e))return false;t.preventDefault();return true}}}})}
//#endregion
//#region src/table/table.ts
/**
            * This extension allows you to create tables.
            * @see https://www.tiptap.dev/api/nodes/table
            */var Tp=rh.create({name:"table",addOptions:function(){return{HTMLAttributes:{},resizable:false,renderWrapper:false,handleWidth:5,cellMinWidth:25,View:op,lastColumnResizable:true,allowTableNodeSelection:false}},content:"tableRow+",tableRole:"table",isolating:true,group:"block",parseHTML:function(){return[{tag:"table"}]},renderHTML:function(r){var t=r.node,n=r.HTMLAttributes;var e=sp(t,this.options.cellMinWidth),i=e.colgroup,u=e.tableWidth,a=e.tableMinWidth;var f=n.style;function o(){if(f)return f;return u?"width: ".concat(u):"min-width: ".concat(a)}var s=["table",vl(this.options.HTMLAttributes,n,{style:o()}),i,["tbody",0]];return this.options.renderWrapper?["div",{class:"tableWrapper"},s]:s},parseMarkdown:function(r,t){var n=[];var e=Array.isArray(r.align)?r.align:[];if(r.header){var i=[];r.header.forEach((function(r,n){var u;var a=Vd((u=e[n])!==null&&u!==void 0?u:r.align);var f=a?{align:a}:{};i.push(t.createNode("tableHeader",f,[{type:"paragraph",content:t.parseInline(r.tokens)}]))}));n.push(t.createNode("tableRow",{},i))}if(r.rows)r.rows.forEach((function(r){var i=[];r.forEach((function(r,n){var u;var a=Vd((u=e[n])!==null&&u!==void 0?u:r.align);var f=a?{align:a}:{};i.push(t.createNode("tableCell",f,[{type:"paragraph",content:t.parseInline(r.tokens)}]))}));n.push(t.createNode("tableRow",{},i))}));return t.createNode("table",void 0,n)},renderMarkdown:function(r,t){return kp(r,t)},markdownTokenizer:{name:"table",level:"block",start:function(r){var t=r.split("\n");if(t.length<2)return-1;var n=t[1];if(!/^[ \t|:]*-[ \t|:-]*$/.test(n)||!n.includes("|"))return-1;return t[0].includes("|")?0:-1},tokenize:function(r,t,n){var e=r.indexOf("\n\n");var i=e>=0?r.slice(0,e):r;var u=i.split("\n");if(u.length<2)return void 0;var a=u[1];if(!/^[ \t|:]*-[ \t|:-]*$/.test(a)||!a.includes("|"))return void 0;var f=gp(i);if(f===i)return void 0;var o=n.blockTokens(f)[0];if((o===null||o===void 0?void 0:o.type)!=="table"||!o.raw)return void 0;var s=o.raw.split("\n").length;var l=r.split("\n").slice(0,s).join("\n");return __assign(__assign({},o),{raw:l})}},addCommands:function(){return{insertTable:function(r){var t=r===void 0?{}:r,n=t.rows,e=n===void 0?3:n,i=t.cols,u=i===void 0?3:i,a=t.withHeaderRow,f=a===void 0?true:a;return function(r){var t=r.tr,n=r.dispatch,i=r.editor;var a=cp(i.schema,e,u,f);if(n){var o=t.selection.from+1;t.replaceSelectionWith(a).scrollIntoView().setSelection(un.near(t.doc.resolve(o)))}return true}},addColumnBefore:function(){return function(r){var t=r.state,n=r.dispatch;return Uh(t,n)}},addColumnAfter:function(){return function(r){var t=r.state,n=r.dispatch;return $h(t,n)}},deleteColumn:function(){return function(r){var t=r.state,n=r.dispatch;var e=Ws(t.selection.$from,(function(r){return r.type.name==="table"}));return Fh(t,n&&function(r){if(e)pp(r,e.pos);n(r)})}},addRowBefore:function(){return function(r){var t=r.state,n=r.dispatch;return Vh(t,n)}},addRowAfter:function(){return function(r){var t=r.state,n=r.dispatch;return Gh(t,n)}},deleteRow:function(){return function(r){var t=r.state,n=r.dispatch;var e=Ws(t.selection.$from,(function(r){return r.type.name==="table"}));return Xh(t,n&&function(r){if(e)pp(r,e.pos);n(r)})}},deleteTable:function(){return function(r){var t=r.state,n=r.dispatch;return sd(t,n)}},mergeCells:function(){return function(r){var t=r.state,n=r.dispatch;return Zh(t,n)}},splitCell:function(){return function(r){var t=r.state,n=r.dispatch;return rd(t,n)}},toggleHeaderColumn:function(){return function(r){var t=r.state,n=r.dispatch;return ud("column")(t,n)}},toggleHeaderRow:function(){return function(r){var t=r.state,n=r.dispatch;return ud("row")(t,n)}},toggleHeaderCell:function(){return function(r){var t=r.state,n=r.dispatch;return ad(t,n)}},mergeOrSplit:function(){return function(r){var t=r.state,n=r.dispatch;if(Zh(t,n))return true;return rd(t,n)}},setCellAttribute:function(r,t){return function(n){var e=n.state,i=n.dispatch;return nd(r,t)(e,i)}},goToNextCell:function(){return function(r){var t=r.state,n=r.dispatch;return od(1)(t,n)}},goToPreviousCell:function(){return function(r){var t=r.state,n=r.dispatch;return od(-1)(t,n)}},fixTables:function(){return function(r){var t=r.state,n=r.dispatch;if(n)Hh(t);return true}},setCellSelection:function(r){return function(t){var n=t.tr,e=t.dispatch;if(e){var i=Sh.create(n.doc,r.anchorCell,r.headCell);n.setSelection(i)}return true}}}},addKeyboardShortcuts:function(){var r=this;return{Tab:function(){if(r.editor.commands.goToNextCell())return true;if(!r.editor.can().addRowAfter())return false;return r.editor.chain().addRowAfter().goToNextCell().run()},"Shift-Tab":function(){return r.editor.commands.goToPreviousCell()},Backspace:dp,"Mod-Backspace":dp,Delete:dp,"Mod-Delete":dp}},addProseMirrorPlugins:function(){return __spreadArray(__spreadArray([],this.options.resizable&&this.editor.isEditable?[Rd({handleWidth:this.options.handleWidth,cellMinWidth:this.options.cellMinWidth,defaultCellMinWidth:this.options.cellMinWidth,View:null,lastColumnResizable:this.options.lastColumnResizable})]:[],true),[qd({allowTableNodeSelection:this.options.allowTableNodeSelection}),Op()],false)},addNodeView:function(){var r=this;var t=this.options.View;if(!t)return null;return function(n){var e=n.node,i=n.view,u=n.HTMLAttributes;var a=vl(r.options.HTMLAttributes,u);return new t(e,r.options.cellMinWidth,i,a)}},extendNodeSchema:function(r){var t={name:r.name,options:r.options,storage:r.storage};return{tableRole:fl(Vs(r,"tableRole",t))}}});
//#endregion
//#region src/kit/index.ts
/**
            * The table kit is a collection of table editor extensions.
            *
            * It’s a good starting point for building your own table in Tiptap.
            */Cc.create({name:"tableKit",addExtensions:function(){var r=[];if(this.options.table!==false)r.push(Tp.configure(this.options.table));if(this.options.tableCell!==false)r.push(ep.configure(this.options.tableCell));if(this.options.tableHeader!==false)r.push(ip.configure(this.options.tableHeader));if(this.options.tableRow!==false)r.push(up.configure(this.options.tableRow));return r}});
//#region src/text-align.ts
/**
            * This extension allows you to align text.
            * @see https://www.tiptap.dev/api/extensions/text-align
            */var Ap=Cc.create({name:"textAlign",addOptions:function(){return{types:[],alignments:["left","center","right","justify"],defaultAlignment:null}},addGlobalAttributes:function(){var r=this;return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:function(t){var n=t.style.textAlign;return r.options.alignments.includes(n)?n:r.options.defaultAlignment},renderHTML:function(t){if(!ic(t.textAlign)||!r.options.alignments.includes(t.textAlign))return{};return{style:"text-align: ".concat(t.textAlign)}}}}}]},addCommands:function(){var r=this;return{setTextAlign:function(t){return function(n){var e=n.commands;if(!r.options.alignments.includes(t))return false;return r.options.types.map((function(r){return e.updateAttributes(r,{textAlign:t})})).some((function(r){return r}))}},unsetTextAlign:function(){return function(t){var n=t.commands;return r.options.types.map((function(r){return n.resetAttributes(r,"textAlign")})).some((function(r){return r}))}},toggleTextAlign:function(t){return function(n){var e=n.editor,i=n.commands;if(!r.options.alignments.includes(t))return false;if(e.isActive({textAlign:t}))return i.unsetTextAlign();return i.setTextAlign(t)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-Shift-l":function(){return r.editor.commands.setTextAlign("left")},"Mod-Shift-e":function(){return r.editor.commands.setTextAlign("center")},"Mod-Shift-r":function(){return r.editor.commands.setTextAlign("right")},"Mod-Shift-j":function(){return r.editor.commands.setTextAlign("justify")}}}});
//#region src/text-style/index.ts
var Ep=20;
/**
            * Returns all next child spans, either direct children or nested deeper
            * but won't traverse deeper into child spans found, will only go MAX_FIND_CHILD_SPAN_DEPTH levels deep (default: 20)
            */var Sp=function(r,t){if(t===void 0){t=0}var n=[];if(!r.children.length||t>Ep)return n;Array.from(r.children).forEach((function(r){if(r.tagName==="SPAN")n.push(r);else if(r.children.length)n.push.apply(n,Sp(r,t+1))}));return n};var Cp=function(r){if(!r.children.length)return;var t=Sp(r);if(!t)return;t.forEach((function(r){var t;var n=r.getAttribute("style");var e=(t=r.parentElement)===null||t===void 0||(t=t.closest("span"))===null||t===void 0?void 0:t.getAttribute("style");r.setAttribute("style","".concat(e,";").concat(n))}))};
/**
            * This extension allows you to create text styles. It is required by default
            * for the `text-color` and `font-family` extensions.
            * @see https://www.tiptap.dev/api/marks/text-style
            */var jp=_c.create({name:"textStyle",priority:101,addOptions:function(){return{HTMLAttributes:{},mergeNestedSpanStyles:true}},parseHTML:function(){var r=this;return[{tag:"span",consuming:false,getAttrs:function(t){if(!t.hasAttribute("style"))return false;if(r.options.mergeNestedSpanStyles)Cp(t);return{}}}]},renderHTML:function(r){var t=r.HTMLAttributes;return["span",vl(this.options.HTMLAttributes,t),0]},addCommands:function(){var r=this;return{toggleTextStyle:function(t){return function(n){var e=n.commands;return e.toggleMark(r.name,t)}},removeEmptyTextStyle:function(){return function(t){var n=t.tr;var e=n.selection;n.doc.nodesBetween(e.from,e.to,(function(t,e){if(!t.isInline)return true;if(!t.marks.filter((function(t){return t.type===r.type})).some((function(r){return Object.values(r.attrs).some((function(r){return!!r}))})))n.removeMark(e,e+t.nodeSize,r.type)}));return true}}}}});
//#endregion
//#region src/background-color/background-color.ts
/**
            * This extension allows you to color your text.
            * @see https://tiptap.dev/api/extensions/background-color
            */var Rp=Cc.create({name:"backgroundColor",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{backgroundColor:{default:null,parseHTML:function(r){var t;var n=(t=rc(r,"background-color"))!==null&&t!==void 0?t:r.style.backgroundColor;return n===null||n===void 0?void 0:n.replace(/['"]+/g,"")},renderHTML:function(r){if(!ic(r.backgroundColor))return{};return{style:"background-color: ".concat(r.backgroundColor)}}}}}]},addCommands:function(){return{setBackgroundColor:function(r){return function(t){var n=t.chain;return n().setMark("textStyle",{backgroundColor:r}).run()}},unsetBackgroundColor:function(){return function(r){var t=r.chain;return t().setMark("textStyle",{backgroundColor:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/color/color.ts
/**
            * This extension allows you to color your text.
            * @see https://tiptap.dev/api/extensions/color
            */var Lp=Cc.create({name:"color",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{color:{default:null,parseHTML:function(r){var t;var n=(t=rc(r,"color"))!==null&&t!==void 0?t:r.style.color;return n===null||n===void 0?void 0:n.replace(/['"]+/g,"")},renderHTML:function(r){if(!ic(r.color))return{};return{style:"color: ".concat(r.color)}}}}}]},addCommands:function(){return{setColor:function(r){return function(t){var n=t.chain;return n().setMark("textStyle",{color:r}).run()}},unsetColor:function(){return function(r){var t=r.chain;return t().setMark("textStyle",{color:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/font-family/font-family.ts
/**
            * This extension allows you to set a font family for text.
            * @see https://www.tiptap.dev/api/extensions/font-family
            */var Np=Cc.create({name:"fontFamily",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{fontFamily:{default:null,parseHTML:function(r){var t;return(t=rc(r,"font-family"))!==null&&t!==void 0?t:r.style.fontFamily},renderHTML:function(r){if(!ic(r.fontFamily))return{};return{style:"font-family: ".concat(r.fontFamily)}}}}}]},addCommands:function(){return{setFontFamily:function(r){return function(t){var n=t.chain;return n().setMark("textStyle",{fontFamily:r}).run()}},unsetFontFamily:function(){return function(r){var t=r.chain;return t().setMark("textStyle",{fontFamily:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/font-size/font-size.ts
/**
            * This extension allows you to set a font size for text.
            * @see https://www.tiptap.dev/api/extensions/font-size
            */var Pp=Cc.create({name:"fontSize",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{fontSize:{default:null,parseHTML:function(r){var t;return(t=rc(r,"font-size"))!==null&&t!==void 0?t:r.style.fontSize},renderHTML:function(r){if(!ic(r.fontSize))return{};return{style:"font-size: ".concat(r.fontSize)}}}}}]},addCommands:function(){return{setFontSize:function(r){return function(t){var n=t.chain;return n().setMark("textStyle",{fontSize:r}).run()}},unsetFontSize:function(){return function(r){var t=r.chain;return t().setMark("textStyle",{fontSize:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/line-height/line-height.ts
/**
            * This extension allows you to set the line-height for text.
            * @see https://www.tiptap.dev/api/extensions/line-height
            */var Ip=Cc.create({name:"lineHeight",addOptions:function(){return{types:["textStyle"]}},addGlobalAttributes:function(){return[{types:this.options.types,attributes:{lineHeight:{default:null,parseHTML:function(r){var t;return(t=rc(r,"line-height"))!==null&&t!==void 0?t:r.style.lineHeight},renderHTML:function(r){if(!ic(r.lineHeight))return{};return{style:"line-height: ".concat(r.lineHeight)}}}}}]},addCommands:function(){return{setLineHeight:function(r){return function(t){var n=t.chain;return n().setMark("textStyle",{lineHeight:r}).run()}},unsetLineHeight:function(){return function(r){var t=r.chain;return t().setMark("textStyle",{lineHeight:null}).removeEmptyTextStyle().run()}}}}});
//#endregion
//#region src/text-style-kit/index.ts
/**
            * The table kit is a collection of table editor extensions.
            *
            * It’s a good starting point for building your own table in Tiptap.
            */Cc.create({name:"textStyleKit",addExtensions:function(){var r=[];if(this.options.backgroundColor!==false)r.push(Rp.configure(this.options.backgroundColor));if(this.options.color!==false)r.push(Lp.configure(this.options.color));if(this.options.fontFamily!==false)r.push(Np.configure(this.options.fontFamily));if(this.options.fontSize!==false)r.push(Pp.configure(this.options.fontSize));if(this.options.lineHeight!==false)r.push(Ip.configure(this.options.lineHeight));if(this.options.textStyle!==false)r.push(jp.configure(this.options.textStyle));return r}});
/**
            Create a plugin that, when added to a ProseMirror instance,
            causes a decoration to show up at the drop position when something
            is dragged over the editor.

            Nodes may add a `disableDropCursor` property to their spec to
            control the showing of a drop cursor inside them. This may be a
            boolean or a function, which will be called with a view and a
            position, and should return a boolean.
            */function Hp(r){if(r===void 0){r={}}return new xn({view:function(t){return new Dp(t,r)}})}var Dp=/** @class */function(){function r(r,t){var n=this;var e;this.editorView=r;this.cursorPos=null;this.element=null;this.timeout=-1;this.lastDragEvent=null;this.width=(e=t.width)!==null&&e!==void 0?e:1;this.color=t.color===false?undefined:t.color||"black";this.class=t.class;this.handlers=["dragover","dragend","drop","dragleave"].map((function(t){var e=function(r){n[t](r)};r.dom.addEventListener(t,e);return{name:t,handler:e}}))}r.prototype.destroy=function(){var r=this;this.setCursor(null);this.handlers.forEach((function(t){var n=t.name,e=t.handler;return r.editorView.dom.removeEventListener(n,e)}))};r.prototype.update=function(r,t){if(this.cursorPos!=null&&t.doc!=r.state.doc){
// if we currently have an on-going drag event
// we need to update the cursor position again and update the overlay
if(this.lastDragEvent){var n=this.computeTarget(this.lastDragEvent);if(n==this.cursorPos)this.updateOverlay();else this.setCursor(n)}else{this.updateOverlay()}}};r.prototype.setCursor=function(r){if(r==this.cursorPos)return;this.cursorPos=r;if(r==null){this.element.parentNode.removeChild(this.element);this.element=null}else{this.updateOverlay()}};r.prototype.updateOverlay=function(){var r=this.editorView.state.doc.resolve(this.cursorPos);var t=!r.parent.inlineContent,n;var e=this.editorView.dom,i=e.getBoundingClientRect();var u=i.width/e.offsetWidth,a=i.height/e.offsetHeight;if(t){var f=r.nodeBefore,o=r.nodeAfter;if(f||o){var s=this.editorView.nodeDOM(this.cursorPos-(f?f.nodeSize:0));if(s){var l=s.getBoundingClientRect();var v=f?l.bottom:l.top;if(f&&o)v=(v+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2;var c=this.width/2*a;n={left:l.left,right:l.right,top:v-c,bottom:v+c}}}}if(!n){var h=this.editorView.coordsAtPos(this.cursorPos);var c=this.width/2*u;n={left:h.left-c,right:h.left+c,top:h.top,bottom:h.bottom}}var d=this.editorView.dom.offsetParent;if(!this.element){this.element=d.appendChild(document.createElement("div"));if(this.class)this.element.className=this.class;this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none;";if(this.color){this.element.style.backgroundColor=this.color}}this.element.classList.toggle("prosemirror-dropcursor-block",t);this.element.classList.toggle("prosemirror-dropcursor-inline",!t);var p,b;if(!d||d==document.body&&getComputedStyle(d).position=="static"){p=-pageXOffset;b=-pageYOffset}else{var g=d.getBoundingClientRect();var m=g.width/d.offsetWidth,w=g.height/d.offsetHeight;p=g.left-d.scrollLeft*m;b=g.top-d.scrollTop*w}this.element.style.left=(n.left-p)/u+"px";this.element.style.top=(n.top-b)/a+"px";this.element.style.width=(n.right-n.left)/u+"px";this.element.style.height=(n.bottom-n.top)/a+"px"};r.prototype.scheduleRemoval=function(r){var t=this;clearTimeout(this.timeout);this.timeout=setTimeout((function(){return t.setCursor(null)}),r)};r.prototype.computeTarget=function(r){var t=this.editorView.posAtCoords({left:r.clientX,top:r.clientY});var n=t&&t.inside>=0&&this.editorView.state.doc.nodeAt(t.inside);var e=n&&n.type.spec.disableDropCursor;var i=typeof e=="function"?e(this.editorView,t,r):e;if(!t||i)return null;var u=t.pos;if(this.editorView.dragging&&this.editorView.dragging.slice){var a=Rt(this.editorView.state.doc,u,this.editorView.dragging.slice);if(a!=null)u=a}return u};r.prototype.dragover=function(r){if(!this.editorView.editable)return;this.lastDragEvent=r;var t=this.computeTarget(r);if(t!=null){this.setCursor(t);this.scheduleRemoval(5e3)}};r.prototype.dragend=function(){this.scheduleRemoval(20)};r.prototype.drop=function(){this.scheduleRemoval(20)};r.prototype.dragleave=function(r){if(!this.editorView.dom.contains(r.relatedTarget))this.setCursor(null)};return r}();
/**
            Gap cursor selections are represented using this class. Its
            `$anchor` and `$head` properties both point at the cursor position.
            */var zp=/** @class */function(r){__extends(t,r);
/**
                Create a gap cursor.
                */function t(t){return r.call(this,t,t)||this}t.prototype.map=function(r,n){var e=r.resolve(n.map(this.head));return t.valid(e)?new t(e):rn.near(e)};t.prototype.content=function(){return k.empty};t.prototype.eq=function(r){return r instanceof t&&r.head==this.head};t.prototype.toJSON=function(){return{type:"gapcursor",pos:this.head}};
/**
                @internal
                */t.fromJSON=function(r,n){if(typeof n.pos!="number")throw new RangeError("Invalid input for GapCursor.fromJSON");return new t(r.resolve(n.pos))};
/**
                @internal
                */t.prototype.getBookmark=function(){return new Bp(this.anchor)};
/**
                @internal
                */t.valid=function(r){var t=r.parent;if(t.inlineContent||!$p(r)||!Kp(r))return false;var n=t.type.spec.allowGapCursor;if(n!=null)return n;var e=t.contentMatchAt(r.index()).defaultType;return e&&e.isTextblock};
/**
                @internal
                */t.findGapCursorFrom=function(r,n,e){if(e===void 0){e=false}r:for(;;){if(!e&&t.valid(r))return r;var i=r.pos,u=null;
// Scan up from this position
for(var a=r.depth;;a--){var f=r.node(a);if(n>0?r.indexAfter(a)<f.childCount:r.index(a)>0){u=f.child(n>0?r.indexAfter(a):r.index(a)-1);break}else if(a==0){return null}i+=n;var o=r.doc.resolve(i);if(t.valid(o))return o}
// And then down into the next node
for(;;){var s=n>0?u.firstChild:u.lastChild;if(!s){if(u.isAtom&&!u.isText&&!fn.isSelectable(u)){r=r.doc.resolve(i+u.nodeSize*n);e=false;continue r}break}u=s;i+=n;var o=r.doc.resolve(i);if(t.valid(o))return o}return null}};return t}(rn);zp.prototype.visible=false;zp.findFrom=zp.findGapCursorFrom;rn.jsonID("gapcursor",zp);var Bp=/** @class */function(){function r(r){this.pos=r}r.prototype.map=function(t){return new r(t.map(this.pos))};r.prototype.resolve=function(r){var t=r.resolve(this.pos);return zp.valid(t)?new zp(t):rn.near(t)};return r}();function Up(r){return r.isAtom||r.spec.isolating||r.spec.createGapCursor}function $p(r){for(var t=r.depth;t>=0;t--){var n=r.index(t),e=r.node(t);
// At the start of this parent, look at next one
if(n==0){if(e.type.spec.isolating)return true;continue}
// See if the node before (or its first ancestor) is closed
for(var i=e.child(n-1);;i=i.lastChild){if(i.childCount==0&&!i.inlineContent||Up(i.type))return true;if(i.inlineContent)return false}}
// Hit start of document
return true}function Kp(r){for(var t=r.depth;t>=0;t--){var n=r.indexAfter(t),e=r.node(t);if(n==e.childCount){if(e.type.spec.isolating)return true;continue}for(var i=e.child(n);;i=i.firstChild){if(i.childCount==0&&!i.inlineContent||Up(i.type))return true;if(i.inlineContent)return false}}return true}
/**
            Create a gap cursor plugin. When enabled, this will capture clicks
            near and arrow-key-motion past places that don't have a normally
            selectable position nearby, and create a gap cursor selection for
            them. The cursor is drawn as an element with class
            `ProseMirror-gapcursor`. You can either include
            `style/gapcursor.css` from the package's directory or add your own
            styles to make it visible.
            */function Fp(){return new xn({props:{decorations:Jp,createSelectionBetween:function(r,t,n){return t.pos==n.pos&&zp.valid(n)?new zp(n):null},handleClick:Vp,handleKeyDown:Wp,handleDOMEvents:{beforeinput:Gp}}})}var Wp=Vf({ArrowLeft:qp("horiz",-1),ArrowRight:qp("horiz",1),ArrowUp:qp("vert",-1),ArrowDown:qp("vert",1)});function qp(r,t){var n=r=="vert"?t>0?"down":"up":t>0?"right":"left";return function(r,e,i){var u=r.selection;var a=t>0?u.$to:u.$from,f=u.empty;if(u instanceof un){if(!i.endOfTextblock(n)||a.depth==0)return false;f=false;a=r.doc.resolve(t>0?a.after():a.before())}var o=zp.findGapCursorFrom(a,t,f);if(!o)return false;if(e)e(r.tr.setSelection(new zp(o)));return true}}function Vp(r,t,n){if(!r||!r.editable)return false;var e=r.state.doc.resolve(t);if(!zp.valid(e))return false;var i=r.posAtCoords({left:n.clientX,top:n.clientY});if(i&&i.inside>-1&&fn.isSelectable(r.state.doc.nodeAt(i.inside)))return false;r.dispatch(r.state.tr.setSelection(new zp(e)));return true}
// This is a hack that, when a composition starts while a gap cursor
// is active, quickly creates an inline context for the composition to
// happen in, to avoid it being aborted by the DOM selection being
// moved into a valid position.
function Gp(r,t){if(t.inputType!="insertCompositionText"||!(r.state.selection instanceof zp))return false;var n=r.state.selection.$from;var e=n.parent.contentMatchAt(n.index()).findWrapping(r.state.schema.nodes.text);if(!e)return false;var i=p.empty;for(var u=e.length-1;u>=0;u--)i=p.from(e[u].createAndFill(null,i));var a=r.state.tr.replace(n.pos,n.pos,new k(i,0,0));a.setSelection(un.near(a.doc.resolve(n.pos+1)));r.dispatch(a);return false}function Jp(r){if(!(r.selection instanceof zp))return null;var t=document.createElement("div");t.className="ProseMirror-gapcursor";return Ja.create(r.doc,[qa.widget(r.selection.head,t,{key:"gapcursor"})])}
//#region src/character-count/character-count.ts
/**
            * This extension allows you to count the characters and words of your document.
            * @see https://tiptap.dev/api/extensions/character-count
            */Cc.create({name:"characterCount",addOptions:function(){return{limit:null,autoTrim:true,mode:"textSize",textCounter:function(r){return r.length},wordCounter:function(r){return r.split(" ").filter((function(r){return r!==""})).length}}},addStorage:function(){return{characters:function(){return 0},words:function(){return 0}}},onBeforeCreate:function(){var r=this;this.storage.characters=function(t){var n=(t===null||t===void 0?void 0:t.node)||r.editor.state.doc;if(((t===null||t===void 0?void 0:t.mode)||r.options.mode)==="textSize"){var e=n.textBetween(0,n.content.size,void 0," ");return r.options.textCounter(e)}return n.nodeSize};this.storage.words=function(t){var n=(t===null||t===void 0?void 0:t.node)||r.editor.state.doc;var e=n.textBetween(0,n.content.size," "," ");return r.options.wordCounter(e)}},addProseMirrorPlugins:function(){var r=this;var t=false;return[new xn({key:new Tn("characterCount"),appendTransaction:function(n,e,i){if(t)return;var u=r.options.limit;var a=r.options.autoTrim;if(u===null||u===void 0||u===0||a===false){t=true;return}var f=r.storage.characters({node:i.doc});if(f>u){var o=f-u;var s=0;var l=o;console.warn("[CharacterCount] Initial content exceeded limit of ".concat(u," characters. Content was automatically trimmed."));var v=i.tr.deleteRange(s,l);t=true;return v}t=true},filterTransaction:function(t,n){var e=r.options.limit;if(!t.docChanged||e===0||e===null||e===void 0)return true;var i=r.storage.characters({node:n.doc});var u=r.storage.characters({node:t.doc});if(u<=e)return true;if(i>e&&u>e&&u<=i)return true;if(i>e&&u>e&&u>i)return false;if(!t.getMeta("paste"))return false;var a=t.selection.$head.pos;var f=a-(u-e);var o=a;t.deleteRange(f,o);if(r.storage.characters({node:t.doc})>e)return false;return true}})]}});
//#endregion
//#region src/drop-cursor/drop-cursor.ts
/**
            * This extension allows you to add a drop cursor to your editor.
            * A drop cursor is a line that appears when you drag and drop content
            * in-between nodes.
            * @see https://tiptap.dev/api/extensions/dropcursor
            */var Xp=Cc.create({name:"dropCursor",addOptions:function(){return{color:"currentColor",width:1,class:void 0}},addProseMirrorPlugins:function(){return[Hp(this.options)]}});
//#endregion
//#region src/focus/focus.ts
/**
            * This extension allows you to add a class to the focused node.
            * @see https://www.tiptap.dev/api/extensions/focus
            */Cc.create({name:"focus",addOptions:function(){return{className:"has-focus",mode:"all"}},addProseMirrorPlugins:function(){var r=this;return[new xn({key:new Tn("focus"),props:{decorations:function(t){var n=t.doc,e=t.selection;var i=r.editor,u=i.isEditable,a=i.isFocused;var f=e.anchor;var o=[];if(!u||!a)return Ja.create(n,[]);var s=0;if(r.options.mode==="deepest")n.descendants((function(r,t){if(r.isText)return;if(!(f>=t&&f<=t+r.nodeSize-1))return false;s+=1}));var l=0;n.descendants((function(t,n){if(t.isText)return false;if(!(f>=n&&f<=n+t.nodeSize-1))return false;l+=1;if(r.options.mode==="deepest"&&s-l>0||r.options.mode==="shallowest"&&l>1)return r.options.mode==="deepest";o.push(qa.node(n,n+t.nodeSize,{class:r.options.className}))}));return Ja.create(n,o)}}})]}});
//#endregion
//#region src/gap-cursor/gap-cursor.ts
/**
            * This extension allows you to add a gap cursor to your editor.
            * A gap cursor is a cursor that appears when you click on a place
            * where no content is present, for example inbetween nodes.
            * @see https://tiptap.dev/api/extensions/gapcursor
            */var Yp=Cc.create({name:"gapCursor",addProseMirrorPlugins:function(){return[Fp()]},extendNodeSchema:function(r){var t;var n={name:r.name,options:r.options,storage:r.storage};return{allowGapCursor:(t=fl(Vs(r,"allowGapCursor",n)))!==null&&t!==void 0?t:null}}});
//#endregion
//#region src/placeholder/constants.ts
/** The default data attribute label */var Qp="placeholder";
/** The plugin key used to store and read the placeholder decoration set */var Zp=new Tn("tiptap__placeholder");
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
            */function rb(r){var t;var n=r.editor,e=r.placeholder,i=r.dataAttribute,u=r.pos,a=r.node,f=r.isEmptyDoc,o=r.hasAnchor,s=r.classes,l=s.emptyNode,v=s.emptyEditor;var c=[l];if(f)c.push(v);return qa.node(u,u+a.nodeSize,(t={class:c.join(" ")},t[i]=typeof e==="function"?e({editor:n,node:a,pos:u,hasAnchor:o}):e,t))}
//#endregion
//#region src/placeholder/utils/buildPlaceholderDecorations.ts
function tb(r,t){return typeof r==="function"?r(t):r}
/**
            * Scans a document range for empty textblocks that should receive placeholder
            * decorations. Used by the slow path and incremental state updates.
            */function nb(r){var t=r.editor,n=r.options,e=r.dataAttribute,i=r.doc,u=r.selection,a=r.from,f=r.to;var o=u.anchor;var s=[];var l=t.isEmpty;i.nodesBetween(a,f,(function(r,i){var u=o>=i&&o<=i+r.nodeSize;var a=!r.isLeaf&&Ul(r);if(!r.type.isTextblock)return n.includeChildren;if((u||!n.showOnlyCurrent)&&a)s.push(rb({editor:t,isEmptyDoc:l,dataAttribute:e,hasAnchor:u,placeholder:n.placeholder,classes:{emptyEditor:n.emptyEditorClass,emptyNode:tb(n.emptyNodeClass,{editor:t,node:r,pos:i,hasAnchor:u})},node:r,pos:i}));return n.includeChildren}));return s}
/**
            * Builds the placeholder decorations for the current document state.
            * @param options.editor - The editor instance.
            * @param options.options - The resolved placeholder options.
            * @param options.dataAttribute - The prepared `data-*` attribute name.
            * @param options.doc - The current document node.
            * @param options.selection - The current selection.
            * @returns A decoration set, or `null` when no placeholders should be shown.
            */function eb(r){var t=r.editor,n=r.options,e=r.dataAttribute,i=r.doc,u=r.selection;if(!(t.isEditable||!n.showOnlyWhenEditable))return null;var a=u.anchor;var f=[];var o=t.isEmpty;if(n.showOnlyCurrent&&!n.includeChildren){var s=i.resolve(a);var l=s.depth>0?s.node(1):s.nodeAfter;var v=s.depth>0?s.before(1):a;if(l&&l.type.isTextblock&&Ul(l)){var c=a>=v&&a<=v+l.nodeSize;f.push(rb({editor:t,isEmptyDoc:o,dataAttribute:e,hasAnchor:c,placeholder:n.placeholder,classes:{emptyEditor:n.emptyEditorClass,emptyNode:tb(n.emptyNodeClass,{editor:t,node:l,pos:v,hasAnchor:c})},node:l,pos:v}))}}else f.push.apply(f,nb({editor:t,options:n,dataAttribute:e,doc:i,selection:u,from:0,to:i.content.size}));return Ja.create(i,f)}
//#endregion
//#region src/placeholder/utils/resolveTopLevelRange.ts
/**
            * Resolves a document position to the `[from, to)` range of its containing
            * top-level block node in absolute document positions.
            */function ib(r,t){var n=r.resolve(t);if(n.depth===0){var e;var i=(e=n.nodeAfter)!==null&&e!==void 0?e:n.nodeBefore;if(!i)return{from:t,to:t};var u=n.nodeAfter?t:t-i.nodeSize;return{from:u,to:u+i.nodeSize}}var a=n.before(1);return{from:a,to:a+n.node(1).nodeSize}}
/**
            * Clamps a top-level block range from `resolveTopLevelRange` to the document
            * content, giving the positions used by `Node#nodesBetween` and `Node#forEach`
            * offsets.
            *
            * A top-level node at `Node#forEach` offset `n` already sits at document
            * position `n`, so the range must not be shifted: a node decoration spans
            * exactly `[n, n + nodeSize]` and has to stay inside the range to be replaced.
            */function ub(r,t){return{from:Math.max(0,t.from),to:Math.min(r.content.size,t.to)}}
/**
            * Returns the top-level block ranges that intersect a document change range.
            * Input `from`/`to` are absolute positions (e.g. from `getChangedRanges`).
            * Returned ranges are content-relative, matching `Node#forEach` offsets.
            */function ab(r,t,n){var e=[];r.forEach((function(r,i){var u=i;var a=u+r.nodeSize;var f=u+1;var o=a+1;if(f<n&&o>t)e.push({from:u,to:a})}));return e}
/**
            * Sorts ranges by start position and merges overlapping or adjacent ranges.
            */function fb(r){if(r.length===0)return[];var t=__spreadArray([],r,true).sort((function(r,t){return r.from-t.from}));var n=[__assign({},t[0])];for(var e=1;e<t.length;e+=1){var i=n[n.length-1];var u=t[e];if(u.from<=i.to)i.to=Math.max(i.to,u.to);else n.push(__assign({},u))}return n}
//#endregion
//#region src/placeholder/utils/placeholderStateField.ts
/**
            * Expands a single changed range to the top-level blocks it touches.
            * Also resolves blocks at range boundaries so split/merge edits update
            * adjacent empty nodes (e.g. a new paragraph after Enter).
            */function ob(r,t){var n=ab(r,t.from,t.to);n.push(ub(r,ib(r,t.from)));if(t.to>t.from)n.push(ub(r,ib(r,Math.min(t.to,r.content.size+1)-1)));else if(t.from<r.content.size+1)n.push(ub(r,ib(r,Math.min(t.from+1,r.content.size))));return n}
/**
            * Collects content-relative top-level block ranges that need placeholder
            * decorations recomputed after a transaction.
            */function sb(r,t,n){var e=[];if(r.docChanged){var i=El(r);for(var u=0,a=i;u<a.length;u++){var f=a[u];e.push.apply(e,ob(n.doc,f.newRange))}}if(r.selectionSet){e.push(ub(n.doc,ib(n.doc,r.mapping.map(t.selection.anchor))));e.push(ub(n.doc,ib(n.doc,n.selection.anchor)))}return fb(e)}
/** Clamps a content-relative range to `[0, doc.content.size]`. */function lb(r,t,n){var e=Math.max(0,Math.min(r,n.content.size));return{from:e,to:Math.max(e,Math.min(t,n.content.size))}}
/**
            * Removes and rebuilds placeholder decorations within the given ranges.
            * Only drops decorations fully contained in a range so mapped decorations
            * on neighbouring blocks (e.g. at a block boundary) are kept intact.
            */function vb(r){var t=r.decorations,n=r.ranges,e=r.editor,i=r.options,u=r.dataAttribute,a=r.doc,f=r.selection;var o=t;var s=function(r){var t=lb(r.from,r.to,a),n=t.from,s=t.to;var l=o.find(n,s).filter((function(r){return r.from>=n&&r.to<=s}));if(l.length)o=o.remove(l);var v=nb({editor:e,options:i,dataAttribute:u,doc:a,selection:f,from:n,to:s});if(v.length)o=o.add(a,v)};for(var l=0,v=n;l<v.length;l++){var c=v[l];s(c)}return o}
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
            */function cb(r){var t=r.editor,n=r.options,e=r.dataAttribute;return{init:function(r,i){var u=eb({editor:t,options:n,dataAttribute:e,doc:i.doc,selection:i.selection});return u!==null&&u!==void 0?u:Ja.empty},apply:function(r,i,u,a){if(!r.docChanged&&!r.selectionSet)return i;return vb({decorations:i.map(r.mapping,r.doc),ranges:sb(r,u,a),editor:t,options:n,dataAttribute:e,doc:a.doc,selection:a.selection})}}}
//#endregion
//#region src/placeholder/utils/preparePlaceholderAttribute.ts
/**
            * Prepares the placeholder attribute by ensuring it is properly formatted.
            * @param attr - The placeholder attribute string.
            * @returns The prepared placeholder attribute string.
            */function hb(r){return r.replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-]/g,"").replace(/^[0-9-]+/,"").replace(/^-+/,"").toLowerCase()}
//#endregion
//#region src/placeholder/plugins/PlaceholderPlugin.ts
/**
            * Creates the ProseMirror plugin that renders placeholder decorations.
            * @param options.editor - The editor instance.
            * @param options.options - The resolved placeholder options.
            * @returns The configured placeholder plugin.
            */function db(r){var t=r.editor,n=r.options;var e=n.dataAttribute?"data-".concat(hb(n.dataAttribute)):"data-".concat(Qp);var i=n.showOnlyCurrent&&!n.includeChildren;return new xn(__assign(__assign({key:Zp},i?{}:{state:cb({editor:t,options:n,dataAttribute:e})}),{props:{decorations:i?function(r){var i=r.doc,u=r.selection;return eb({editor:t,options:n,dataAttribute:e,doc:i,selection:u})}:function(r){var e;if(n.showOnlyWhenEditable&&!t.isEditable)return Ja.empty;return(e=Zp.getState(r))!==null&&e!==void 0?e:Ja.empty}}}))}
//#endregion
//#region src/placeholder/placeholder.ts
/**
            * This extension allows you to add a placeholder to your editor.
            * A placeholder is a text that appears when the editor or a node is empty.
            * @see https://www.tiptap.dev/api/extensions/placeholder
            */var pb=Cc.create({name:"placeholder",addOptions:function(){return{emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",dataAttribute:Qp,placeholder:"Write something …",showOnlyWhenEditable:true,showOnlyCurrent:true,includeChildren:false}},addProseMirrorPlugins:function(){return[db({editor:this.editor,options:this.options})]}});
//#endregion
//#region src/selection/selection.ts
/**
            * Whether the native browser selection should be cleared on blur and restored on focus.
            * Only applies to non-empty text selections in an editable editor.
            */function bb(r,t){return!r.selection.empty&&!$l(r.selection)&&t.isEditable}
/**
            * Whether the selection decoration should be rendered to keep the selection
            * visible while the editor is blurred (and not dragging).
            */function gb(r,t){return bb(r,t)&&!t.isFocused&&!t.view.dragging}function mb(){var r;(r=window.getSelection())===null||r===void 0||r.removeAllRanges()}
/**
            * Sync the native selection from the editor state.
            * @see https://prosemirror.net/docs/ref/#view.EditorView.focus
            */function wb(r){r.focus()}
/**
            * This extension allows you to add a class to the selected text when the editor is blurred.
            * It clears the native browser selection on blur (so `::selection` styles do not overlap the
            * decoration) and restores it when the editor is focused again.
            * @see https://www.tiptap.dev/api/extensions/selection
            */Cc.create({name:"selection",addOptions:function(){return{className:"selection"}},addProseMirrorPlugins:function(){var r=this,t=r.editor,n=r.options;return[new xn({key:new Tn("selection"),props:{decorations:function(r){if(!gb(r,t))return null;return Ja.create(r.doc,[qa.inline(r.selection.from,r.selection.to,{class:n.className})])},handleDOMEvents:{blur:function(r){if(!bb(r.state,t))return false;mb();return false},focus:function(r){if(!bb(r.state,t))return false;requestAnimationFrame((function(){if(!t.isDestroyed&&r.hasFocus())wb(r)}));return false}}}})]}});function yb(r){var t=r.types,n=r.node;return n&&Array.isArray(t)&&t.includes(n.type)||(n===null||n===void 0?void 0:n.type)===t}
/**
            * This extension allows you to add an extra node at the end of the document.
            * @see https://www.tiptap.dev/api/extensions/trailing-node
            */var kb=Cc.create({name:"trailingNode",addOptions:function(){return{node:void 0,notAfter:[]}},addProseMirrorPlugins:function(){var r=this;var t;var n=new Tn(this.name);var e=this.options.node||((t=this.editor.schema.topNodeType.contentMatch.defaultType)===null||t===void 0?void 0:t.name)||"paragraph";var i=Object.entries(this.editor.schema.nodes).map((function(r){var t=r[1];return t})).filter((function(t){return(r.options.notAfter||[]).concat(e).includes(t.name)}));return[new xn({key:n,appendTransaction:function(r,t,i){var u=i.doc,a=i.tr,f=i.schema;var o=n.getState(i);var s=u.content.size;var l=f.nodes[e];if(r.some((function(r){return r.getMeta("skipTrailingNode")})))return;if(!o)return;return a.insert(s,l.create())},state:{init:function(r,t){var n=t.tr.doc.lastChild;return!yb({node:n,types:i})},apply:function(r,t){if(!r.docChanged)return t;if(r.getMeta("__uniqueIDTransaction"))return t;var n=r.doc.lastChild;return!yb({node:n,types:i})}}})]}});
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
            */var _b=Cc.create({name:"undoRedo",addOptions:function(){return{depth:100,newGroupDelay:500}},addCommands:function(){return{undo:function(){return function(r){var t=r.state,n=r.dispatch;return wo(t,n)}},redo:function(){return function(r){var t=r.state,n=r.dispatch;return yo(t,n)}}}},addProseMirrorPlugins:function(){return[go(this.options)]},addKeyboardShortcuts:function(){var r=this;return{"Mod-z":function(){return r.editor.commands.undo()},"Shift-Mod-z":function(){return r.editor.commands.redo()},"Mod-y":function(){return r.editor.commands.redo()},"Mod-я":function(){return r.editor.commands.undo()},"Shift-Mod-я":function(){return r.editor.commands.redo()}}}});
//#region src/jsx-runtime.ts
var xb=new WeakSet;var Mb=new WeakSet;
/** Create a new JSX element from the given spec */function Ob(r){var t=r;xb.add(t);return t}
/** Check if a spec is a JSX element */function Tb(r){return Array.isArray(r)&&xb.has(r)}function Ab(r){return r.flatMap((function(r){if(r==null)return[];if(Array.isArray(r)&&Mb.has(r)&&!Tb(r))return Ab(r);return[r]}))}function Eb(r,t){if(r==="slot")return 0;if(r instanceof Function){var n=r(t);if(Array.isArray(n)&&!Tb(n)&&!Mb.has(n))return Ob(n);return n}var e=t!==null&&t!==void 0?t:{},i=e.children,u=__rest(e,["children"]);if(r==="svg")throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");if(Array.isArray(i)){if(Tb(i))return Ob([r,u,i]);if(i.length===0)return Ob([r,u]);var a=Ab(i);if(a.length===0)return Ob([r,u]);return Ob(__spreadArray([r,u],a,true))}if(i!==void 0&&i!==null)return Ob([r,u,i]);return Ob([r,u])}var Sb=function(r,t){return Eb(r,t)};
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
            */var Cb=function(r,t){var n;var e=r.state;var i=e.selection;if(!i.empty)return false;var u=i.$from;if(u.parentOffset!==0)return false;var a=u.depth-1;if(a<0)return false;var f=u.node(a);var o=u.index(a);if(o===0)return false;if(f.type===t)return r.commands.lift(t.name);var s=f.child(o-1);if(s.type!==t||!((n=s.lastChild)===null||n===void 0?void 0:n.isTextblock))return false;var l=u.before()-1-1;return r.commands.command((function(r){var t=r.tr,n=r.dispatch;if(!n)return true;var e=u.parent.content;var i=new k(e,0,0);t.replace(l,u.after(),i);t.setSelection(un.create(t.doc,l));t.scrollIntoView();n(t);return true}))};
//#endregion
//#region src/blockquote.tsx
/** @jsxImportSource @tiptap/core */
/**
            * Matches a blockquote to a `>` as input.
            */var jb=/^\s*>\s$/;
/**
            * This extension allows you to create blockquotes.
            * @see https://tiptap.dev/api/nodes/blockquote
            */var Rb=rh.create({name:"blockquote",addOptions:function(){return{HTMLAttributes:{}}},content:"block+",group:"block",defining:true,parseHTML:function(){return[{tag:"blockquote"}]},renderHTML:function(r){var t=r.HTMLAttributes;
return Sb("blockquote",__assign(__assign({},vl(this.options.HTMLAttributes,t)),{children:Sb("slot",{})}))},parseMarkdown:function(r,t){var n;var e=(n=t.parseBlockChildren)!==null&&n!==void 0?n:t.parseChildren;return t.createNode("blockquote",void 0,e(r.tokens||[]))},renderMarkdown:function(r,t){if(!r.content)return"";var n=">";var e=[];r.content.forEach((function(r,i){var u,a;var f=((u=(a=t.renderChild)===null||a===void 0?void 0:a.call(t,r,i))!==null&&u!==void 0?u:t.renderChildren([r])).split("\n").map((function(r){if(r.trim()==="")return n;return"".concat(n," ").concat(r)}));e.push(f.join("\n"))}));return e.join("\n".concat(n,"\n"))},addCommands:function(){var r=this;return{setBlockquote:function(){return function(t){var n=t.commands;return n.wrapIn(r.name)}},toggleBlockquote:function(){return function(t){var n=t.commands;return n.toggleWrap(r.name)}},unsetBlockquote:function(){return function(t){var n=t.commands;return n.lift(r.name)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-Shift-b":function(){return r.editor.commands.toggleBlockquote()},Backspace:function(){return Cb(r.editor,r.type)}}},addInputRules:function(){return[Yc({find:jb,type:this.type})]}});
//#region src/bold.tsx
/** @jsxImportSource @tiptap/core */
/**
            * Matches bold text via `**` as input.
            */var Lb=/(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/;
/**
            * Matches bold text via `**` while pasting.
            */var Nb=/(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g;
/**
            * Matches bold text via `__` as input.
            */var Pb=/(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/;
/**
            * Matches bold text via `__` while pasting.
            */var Ib=/(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
/**
            * This extension allows you to mark text as bold.
            * @see https://tiptap.dev/api/marks/bold
            */var Hb=_c.create({name:"bold",addOptions:function(){return{HTMLAttributes:{}}},parseHTML:function(){var r=this;return[{tag:"strong"},{tag:"b",getAttrs:function(r){return r.style.fontWeight!=="normal"&&null}},{style:"font-weight=400",clearMark:function(t){return t.type.name===r.name}},{style:"font-weight",getAttrs:function(r){return/^(bold(er)?|[5-9]\d{2,})$/.test(r)&&null}}]},renderHTML:function(r){var t=r.HTMLAttributes;
return Sb("strong",__assign(__assign({},vl(this.options.HTMLAttributes,t)),{children:Sb("slot",{})}))},markdownTokenName:"strong",parseMarkdown:function(r,t){return t.applyMark("bold",t.parseInline(r.tokens||[]))},markdownOptions:{htmlReopen:{open:"<strong>",close:"</strong>"}},renderMarkdown:function(r,t){return"**".concat(t.renderChildren(r),"**")},addCommands:function(){var r=this;return{setBold:function(){return function(t){var n=t.commands;return n.setMark(r.name)}},toggleBold:function(){return function(t){var n=t.commands;return n.toggleMark(r.name)}},unsetBold:function(){return function(t){var n=t.commands;return n.unsetMark(r.name)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-b":function(){return r.editor.commands.toggleBold()},"Mod-B":function(){return r.editor.commands.toggleBold()}}},addInputRules:function(){return[Gc({find:Lb,type:this.type}),Gc({find:Pb,type:this.type})]},addPasteRules:function(){return[th({find:Nb,type:this.type}),th({find:Ib,type:this.type})]}});
/**
            * A function-based finder for the inline code input rule.
            * Used internally by the extension to ensure the preceding character
            * is not consumed as part of the match, preventing it from being deleted.
            */var Db=function(r){var t=/`([^`]+)`(?!`)$/.exec(r);if(!t)return null;if(t.index>0&&r[t.index-1]==="`")return null;return{index:t.index,text:t[0],replaceWith:t[1]}};
/**
            * A function-based finder for the inline code paste rule.
            * Used internally by the extension to avoid consuming the preceding
            * character as part of the match.
            */var zb=function(r){var t=/`([^`]+)`(?!`)/g;var n=[];var e;while((e=t.exec(r))!==null){if(e.index>0&&r[e.index-1]==="`")continue;n.push({index:e.index,text:e[0],replaceWith:e[1]})}return n};function Bb(r){var t=new Set((r.match(/`+/g)||[]).map((function(r){return r.length})));var n=1;while(t.has(n))n+=1;return n}
/**
            * This extension allows you to mark text as inline code.
            * @see https://tiptap.dev/api/marks/code
            */var Ub=_c.create({name:"code",addOptions:function(){return{HTMLAttributes:{}}},excludes:"_",code:true,exitable:true,parseHTML:function(){return[{tag:"code"}]},renderHTML:function(r){var t=r.HTMLAttributes;return["code",vl(this.options.HTMLAttributes,t),0]},markdownTokenName:"codespan",parseMarkdown:function(r,t){return t.applyMark("code",[{type:"text",text:r.text||""}])},renderMarkdown:function(r,t,n){var e;if(!r.content)return"";var i=typeof(n===null||n===void 0||(e=n.meta)===null||e===void 0?void 0:e.markText)==="string"?n.meta.markText:"";var u="`".repeat(Bb(i));var a=i.startsWith("`")||i.endsWith("`")?" ":"";return"".concat(u).concat(a).concat(t.renderChildren(r.content)).concat(a).concat(u)},addCommands:function(){var r=this;return{setCode:function(){return function(t){var n=t.commands;return n.setMark(r.name)}},toggleCode:function(){return function(t){var n=t.commands;return n.toggleMark(r.name)}},unsetCode:function(){return function(t){var n=t.commands;return n.unsetMark(r.name)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-e":function(){return r.editor.commands.toggleCode()}}},addInputRules:function(){return[Gc({find:Db,type:this.type})]},addPasteRules:function(){return[th({find:zb,type:this.type})]}});
//#region src/code-block.ts
var $b=4;
/**
            * Matches a code block with backticks.
            */var Kb=/^```([a-z]+)?[\s\n]$/;
/**
            * Matches a code block with tildes.
            */var Fb=/^~~~([a-z]+)?[\s\n]$/;
/**
            * This extension allows you to create code blocks.
            * @see https://tiptap.dev/api/nodes/code-block
            */var Wb=rh.create({name:"codeBlock",addOptions:function(){return{languageClassPrefix:"language-",exitOnTripleEnter:true,exitOnArrowDown:true,exitOnArrowUp:true,defaultLanguage:null,enableTabIndentation:false,tabSize:$b,HTMLAttributes:{}}},content:"text*",marks:"",group:"block",code:true,defining:true,addAttributes:function(){var r=this;return{language:{default:this.options.defaultLanguage,parseHTML:function(t){var n;var e=r.options.languageClassPrefix;if(!e)return null;var i=__spreadArray([],((n=t.firstElementChild)===null||n===void 0?void 0:n.classList)||[],true).filter((function(r){return r.startsWith(e)})).map((function(r){return r.replace(e,"")}))[0];if(!i)return null;return i},rendered:false}}},parseHTML:function(){return[{tag:"pre",preserveWhitespace:"full"}]},renderHTML:function(r){var t=r.node,n=r.HTMLAttributes;return["pre",vl(this.options.HTMLAttributes,n),["code",{class:t.attrs.language?this.options.languageClassPrefix+t.attrs.language:null},0]]},markdownTokenName:"code",parseMarkdown:function(r,t){var n,e;if(((n=r.raw)===null||n===void 0?void 0:n.startsWith("```"))===false&&((e=r.raw)===null||e===void 0?void 0:e.startsWith("~~~"))===false&&r.codeBlockStyle!=="indented")return[];return t.createNode("codeBlock",{language:r.lang||null},r.text?[t.createTextNode(r.text)]:[])},renderMarkdown:function(r,t){var n;var e="";var i=((n=r.attrs)===null||n===void 0?void 0:n.language)||"";if(!r.content)e="```".concat(i,"\n\n```");else e=["```".concat(i),t.renderChildren(r.content),"```"].join("\n");return e},addCommands:function(){var r=this;return{setCodeBlock:function(t){return function(n){var e=n.commands;return e.setNode(r.name,t)}},toggleCodeBlock:function(t){return function(n){var e=n.commands;return e.toggleNode(r.name,"paragraph",t)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-Alt-c":function(){return r.editor.commands.toggleCodeBlock()},Backspace:function(){var t=r.editor.state.selection,n=t.empty,e=t.$anchor;var i=e.pos===1;if(!n||e.parent.type.name!==r.name)return false;if(i||!e.parent.textContent.length)return r.editor.commands.clearNodes();return false},Tab:function(t){var n=t.editor;var e;if(!r.options.enableTabIndentation)return false;var i=(e=r.options.tabSize)!==null&&e!==void 0?e:$b;var u=n.state;var a=u.selection;var f=a.$from,o=a.empty;if(f.parent.type!==r.type)return false;var s=" ".repeat(i);if(o)return n.commands.insertContent(s);return n.commands.command((function(r){var t=r.tr;var n=a.from,e=a.to;var i=u.doc.textBetween(n,e,"\n","\n").split("\n").map((function(r){return s+r})).join("\n");t.replaceWith(n,e,u.schema.text(i));return true}))},"Shift-Tab":function(t){var n=t.editor;var e;if(!r.options.enableTabIndentation)return false;var i=(e=r.options.tabSize)!==null&&e!==void 0?e:$b;var u=n.state;var a=u.selection;var f=a.$from,o=a.empty;if(f.parent.type!==r.type)return false;if(o)return n.commands.command((function(r){var t=r.tr;var n;var e=f.pos;var a=f.start();var o=f.end();var s=u.doc.textBetween(a,o,"\n","\n").split("\n");var l=0;var v=0;var c=e-a;for(var h=0;h<s.length;h+=1){if(v+s[h].length>=c){l=h;break}v+=s[h].length+1}var d=((n=s[l].match(/^ */))===null||n===void 0?void 0:n[0])||"";var p=Math.min(d.length,i);if(p===0)return true;var b=a;for(var g=0;g<l;g+=1)b+=s[g].length+1;t.delete(b,b+p);if(e-b<=p)t.setSelection(un.create(t.doc,b));return true}));return n.commands.command((function(r){var t=r.tr;var n=a.from,e=a.to;var f=u.doc.textBetween(n,e,"\n","\n").split("\n").map((function(r){var t;var n=((t=r.match(/^ */))===null||t===void 0?void 0:t[0])||"";var e=Math.min(n.length,i);return r.slice(e)})).join("\n");t.replaceWith(n,e,u.schema.text(f));return true}))},Enter:function(t){var n=t.editor;if(!r.options.exitOnTripleEnter)return false;var e=n.state;var i=e.selection;var u=i.$from,a=i.empty;if(!a||u.parent.type!==r.type)return false;var f=u.parentOffset===u.parent.nodeSize-2;var o=u.parent.textContent.endsWith("\n\n");if(!f||!o)return false;return n.chain().command((function(r){var t=r.tr;t.delete(u.pos-2,u.pos);return true})).exitCode().run()},ArrowUp:function(t){var n=t.editor;if(!r.options.exitOnArrowUp)return false;var e=n.state;var i=e.selection;var u=i.$from,a=i.empty;if(!a||u.parent.type!==r.type)return false;if(u.parentOffset!==0)return false;var f=u.before();if(f>0)return false;return n.commands.insertDefaultBlock({pos:f})},ArrowDown:function(t){var n=t.editor;if(!r.options.exitOnArrowDown)return false;var e=n.state;var i=e.selection,u=e.doc;var a=i.$from,f=i.empty;if(!f||a.parent.type!==r.type)return false;if(!(a.parentOffset===a.parent.nodeSize-2))return false;var o=a.after();if(o===void 0)return false;if(u.nodeAt(o))return n.commands.command((function(r){var t=r.tr;t.setSelection(rn.near(u.resolve(o)));return true}));return n.commands.exitCode()}}},addInputRules:function(){return[Xc({find:Kb,type:this.type,getAttributes:function(r){return{language:r[1]}}}),Xc({find:Fb,type:this.type,getAttributes:function(r){return{language:r[1]}}})]},addProseMirrorPlugins:function(){var r=this;return[new xn({key:new Tn("codeBlockVSCodeHandler"),props:{handlePaste:function(t,n){if(!n.clipboardData)return false;if(r.editor.isActive(r.type.name))return false;var e=n.clipboardData.getData("text/plain");var i=n.clipboardData.getData("vscode-editor-data");var u=i?JSON.parse(i):void 0;var a=u===null||u===void 0?void 0:u.mode;if(!e||!a)return false;var f=t.state,o=f.tr,s=f.schema;var l=s.text(e.replace(/\r\n?/g,"\n"));o.replaceSelectionWith(r.type.create({language:a},l));if(o.selection.$from.parent.type!==r.type)o.setSelection(un.near(o.doc.resolve(Math.max(0,o.selection.from-2))));o.setMeta("paste",true);t.dispatch(o);return true}}})]}});
//#region src/document.ts
/**
            * The default document node which represents the top level node of the editor.
            * @see https://tiptap.dev/api/nodes/document
            */var qb=rh.create({name:"doc",topNode:true,content:"block+",renderMarkdown:function(r,t){if(!r.content)return"";return t.renderChildren(r.content,"\n\n")}});
//#region src/hard-break.ts
/**
            * This extension allows you to insert hard breaks.
            * @see https://www.tiptap.dev/api/nodes/hard-break
            */var Vb=rh.create({name:"hardBreak",markdownTokenName:"br",addOptions:function(){return{keepMarks:true,HTMLAttributes:{}}},inline:true,group:"inline",selectable:false,linebreakReplacement:true,parseHTML:function(){return[{tag:"br"}]},renderHTML:function(r){var t=r.HTMLAttributes;return["br",vl(this.options.HTMLAttributes,t)]},renderText:function(){return"\n"},renderMarkdown:function(){return"  \n"},parseMarkdown:function(){return{type:"hardBreak"}},addCommands:function(){var r=this;return{setHardBreak:function(){return function(t){var n=t.commands,e=t.chain,i=t.state,u=t.editor;return n.first([function(){return n.exitCode()},function(){return n.command((function(){var t=i.selection,n=i.storedMarks;if(t.$from.parent.type.spec.isolating)return false;var a=r.options.keepMarks;var f=u.extensionManager.splittableMarks;var o=n||t.$to.parentOffset&&t.$from.marks();return e().insertContent({type:r.name}).command((function(r){var t=r.tr,n=r.dispatch;if(n&&o&&a){var e=o.filter((function(r){return f.includes(r.type.name)}));t.ensureMarks(e)}return true})).scrollIntoView().run()}))}])}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-Enter":function(){return r.editor.commands.setHardBreak()},"Shift-Enter":function(){return r.editor.commands.setHardBreak()}}}});
//#region src/heading.ts
/**
            * This extension allows you to create headings.
            * @see https://www.tiptap.dev/api/nodes/heading
            */var Gb=rh.create({name:"heading",addOptions:function(){return{levels:[1,2,3,4,5,6],HTMLAttributes:{}}},content:"inline*",group:"block",defining:true,addAttributes:function(){return{level:{default:1,rendered:false}}},parseHTML:function(){return this.options.levels.map((function(r){return{tag:"h".concat(r),attrs:{level:r}}}))},renderHTML:function(r){var t=r.node,n=r.HTMLAttributes;return["h".concat(this.options.levels.includes(t.attrs.level)?t.attrs.level:this.options.levels[0]),vl(this.options.HTMLAttributes,n),0]},parseMarkdown:function(r,t){var n=r.depth||1;if(!this.options.levels.includes(n))return t.createNode("paragraph",void 0,t.parseInline(r.tokens||[]));return t.createNode("heading",{level:n},t.parseInline(r.tokens||[]))},renderMarkdown:function(r,t){var n;var e=((n=r.attrs)===null||n===void 0?void 0:n.level)?parseInt(r.attrs.level,10):1;var i="#".repeat(e);if(!r.content)return"";return"".concat(i," ").concat(t.renderChildren(r.content))},addCommands:function(){var r=this;return{setHeading:function(t){return function(n){var e=n.commands;if(!r.options.levels.includes(t.level))return false;return e.setNode(r.name,t)}},toggleHeading:function(t){return function(n){var e=n.commands;if(!r.options.levels.includes(t.level))return false;return e.toggleNode(r.name,"paragraph",t)}}}},addKeyboardShortcuts:function(){var r=this;return this.options.levels.reduce((function(t,n){var e;return __assign(__assign({},t),(e={},e["Mod-Alt-".concat(n)]=function(){return r.editor.commands.toggleHeading({level:n})},e))}),{})},addInputRules:function(){var r=this;return this.options.levels.map((function(t){return Xc({find:new RegExp("^(#{".concat(Math.min.apply(Math,r.options.levels),",").concat(t,"})\\s$")),type:r.type,getAttributes:{level:t}})}))}});
//#region src/horizontal-rule.ts
/**
            * This extension allows you to insert horizontal rules.
            * @see https://www.tiptap.dev/api/nodes/horizontal-rule
            */var Jb=rh.create({name:"horizontalRule",addOptions:function(){return{HTMLAttributes:{},nextNodeType:"paragraph"}},group:"block",parseHTML:function(){return[{tag:"hr"}]},renderHTML:function(r){var t=r.HTMLAttributes;return["hr",vl(this.options.HTMLAttributes,t)]},markdownTokenName:"hr",parseMarkdown:function(r,t){return t.createNode("horizontalRule")},renderMarkdown:function(){return"---"},addCommands:function(){var r=this;return{setHorizontalRule:function(){return function(t){var n=t.chain,e=t.state;if(!Qv(e,e.schema.nodes[r.name]))return false;var i=e.selection;var u=i.$to;var a=n();if($l(i))a.insertContentAt(u.pos,{type:r.name});else a.insertContent({type:r.name});return a.command((function(t){var n=t.state,e=t.tr,i=t.dispatch;if(i){var u=e.selection.$to;var a=u.end();if(u.nodeAfter){if(u.nodeAfter.isTextblock)e.setSelection(un.create(e.doc,u.pos+1));else if(u.nodeAfter.isBlock)e.setSelection(fn.create(e.doc,u.pos));else e.setSelection(un.create(e.doc,u.pos))}else{var f=n.schema.nodes[r.options.nextNodeType]||u.parent.type.contentMatch.defaultType;var o=f===null||f===void 0?void 0:f.create();if(o){e.insert(a,o);e.setSelection(un.create(e.doc,a+1))}}e.scrollIntoView()}return true})).run()}}}},addInputRules:function(){return[Jc({find:/^(?:---|—-|___\s|\*\*\*\s)$/,type:this.type})]}});
//#region src/italic.ts
/**
            * Matches an italic to a *italic* on input.
            */var Xb=/(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/;
/**
            * Matches an italic to a *italic* on paste.
            */var Yb=/(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g;
/**
            * Matches an italic to a _italic_ on input.
            */var Qb=/(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/;
/**
            * Matches an italic to a _italic_ on paste.
            */var Zb=/(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
/**
            * This extension allows you to create italic text.
            * @see https://www.tiptap.dev/api/marks/italic
            */var rg=_c.create({name:"italic",addOptions:function(){return{HTMLAttributes:{}}},parseHTML:function(){var r=this;return[{tag:"em"},{tag:"i",getAttrs:function(r){return r.style.fontStyle!=="normal"&&null}},{style:"font-style=normal",clearMark:function(t){return t.type.name===r.name}},{style:"font-style=italic"}]},renderHTML:function(r){var t=r.HTMLAttributes;return["em",vl(this.options.HTMLAttributes,t),0]},addCommands:function(){var r=this;return{setItalic:function(){return function(t){var n=t.commands;return n.setMark(r.name)}},toggleItalic:function(){return function(t){var n=t.commands;return n.toggleMark(r.name)}},unsetItalic:function(){return function(t){var n=t.commands;return n.unsetMark(r.name)}}}},markdownTokenName:"em",parseMarkdown:function(r,t){return t.applyMark("italic",t.parseInline(r.tokens||[]))},markdownOptions:{htmlReopen:{open:"<em>",close:"</em>"}},renderMarkdown:function(r,t){return"*".concat(t.renderChildren(r),"*")},addKeyboardShortcuts:function(){var r=this;return{"Mod-i":function(){return r.editor.commands.toggleItalic()},"Mod-I":function(){return r.editor.commands.toggleItalic()}}},addInputRules:function(){return[Gc({find:Xb,type:this.type}),Gc({find:Qb,type:this.type})]},addPasteRules:function(){return[th({find:Yb,type:this.type}),th({find:Zb,type:this.type})]}});
// THIS FILE IS AUTOMATICALLY GENERATED DO NOT EDIT DIRECTLY
// See update-tlds.js for encoding/decoding format
// https://data.iana.org/TLD/tlds-alpha-by-domain.txt
var tg="aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos6kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12b0cam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2";
// Internationalized domain names containing non-ASCII
var ng="ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2";
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
var eg="numeric";var ig="ascii";var ug="alpha";var ag="asciinumeric";var fg="alphanumeric";var og="domain";var sg="emoji";var lg="scheme";var vg="slashscheme";var cg="whitespace";
/**
             * @template T
             * @param {string} name
             * @param {Collections<T>} groups to register in
             * @returns {T[]} Current list of tokens in the given collection
             */function hg(r,t){if(!(r in t)){t[r]=[]}return t[r]}
/**
             * @template T
             * @param {T} t token to add
             * @param {Collections<T>} groups
             * @param {Flags} flags
             */function dg(r,t,n){if(t[eg]){t[ag]=true;t[fg]=true}if(t[ig]){t[ag]=true;t[ug]=true}if(t[ag]){t[fg]=true}if(t[ug]){t[fg]=true}if(t[fg]){t[og]=true}if(t[sg]){t[og]=true}for(var e in t){var i=hg(e,n);if(i.indexOf(r)<0){i.push(r)}}}
/**
             * @template T
             * @param {T} t token to check
             * @param {Collections<T>} groups
             * @returns {Flags} group flags that contain this token
             */function pg(r,t){var n={};for(var e in t){if(t[e].indexOf(r)>=0){n[e]=true}}return n}
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
             */function bg(r){if(r===void 0){r=null}
// this.n = null; // DEBUG: State name
/** @type {{ [input: string]: State<T> }} j */this.j={};// IMPLEMENTATION 1
// this.j = []; // IMPLEMENTATION 2
/** @type {[RegExp, State<T>][]} jr */this.jr=[];
/** @type {?State<T>} jd */this.jd=null;
/** @type {?T} t */this.t=r}
/**
             * Scanner token groups
             * @type Collections<string>
             */bg.groups={};bg.prototype={accepts:function(){return!!this.t},
/**
                 * Follow an existing transition from the given input to the next state.
                 * Does not mutate.
                 * @param {string} input character or token type to transition on
                 * @returns {?State<T>} the next state, if any
                 */
go:function(r){var t=this;var n=t.j[r];if(n){return n}for(var e=0;e<t.jr.length;e++){var i=t.jr[e][0];var u=t.jr[e][1];// note: might be empty to prevent default jump
if(u&&i.test(r)){return u}}
// Nowhere left to jump! Return default, if any
return t.jd},
/**
                 * Whether the state has a transition for the given input. Set the second
                 * argument to true to only look for an exact match (and not a default or
                 * regular-expression-based transition)
                 * @param {string} input
                 * @param {boolean} exactOnly
                 */
has:function(r,t){if(t===void 0){t=false}return t?r in this.j:!!this.go(r)},
/**
                 * Short for "transition all"; create a transition from the array of items
                 * in the given list to the same final resulting state.
                 * @param {string | string[]} inputs Group of inputs to transition on
                 * @param {Transition<T> | State<T>} [next] Transition options
                 * @param {Flags} [flags] Collections flags to add token to
                 * @param {Collections<T>} [groups] Master list of token groups
                 */
ta:function(r,t,n,e){for(var i=0;i<r.length;i++){this.tt(r[i],t,n,e)}},
/**
                 * Short for "take regexp transition"; defines a transition for this state
                 * when it encounters a token which matches the given regular expression
                 * @param {RegExp} regexp Regular expression transition (populate first)
                 * @param {T | State<T>} [next] Transition options
                 * @param {Flags} [flags] Collections flags to add token to
                 * @param {Collections<T>} [groups] Master list of token groups
                 * @returns {State<T>} taken after the given input
                 */
tr:function(r,t,n,e){e=e||bg.groups;var i;if(t&&t.j){i=t}else{
// Token with maybe token groups
i=new bg(t);if(n&&e){dg(t,n,e)}}this.jr.push([r,i]);return i},
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
ts:function(r,t,n,e){var i=this;var u=r.length;if(!u){return i}for(var a=0;a<u-1;a++){i=i.tt(r[a])}return i.tt(r[u-1],t,n,e)},
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
tt:function(r,t,n,e){e=e||bg.groups;var i=this;
// Check if existing state given, just a basic transition
if(t&&t.j){i.j[r]=t;return t}var u=t;
// Take the transition with the usual default mechanisms and use that as
// a template for creating the next state
var a,f=i.go(r);if(f){a=new bg;Object.assign(a.j,f.j);a.jr.push.apply(a.jr,f.jr);a.jd=f.jd;a.t=f.t}else{a=new bg}if(u){
// Ensure newly token is in the same groups as the old token
if(e){if(a.t&&typeof a.t==="string"){var o=Object.assign(pg(a.t,e),n);dg(u,o,e)}else if(n){dg(u,n,e)}}a.t=u;// overwrite anything that was previously there
}i.j[r]=a;return a}};
// Helper functions to improve minification (not exported outside linkifyjs module)
/**
             * @template T
             * @param {State<T>} state
             * @param {string | string[]} input
             * @param {Flags} [flags]
             * @param {Collections<T>} [groups]
             */var gg=function(r,t,n,e,i){return r.ta(t,n,e,i)};
/**
             * @template T
             * @param {State<T>} state
             * @param {RegExp} regexp
             * @param {T | State<T>} [next]
             * @param {Flags} [flags]
             * @param {Collections<T>} [groups]
             */var mg=function(r,t,n,e,i){return r.tr(t,n,e,i)};
/**
             * @template T
             * @param {State<T>} state
             * @param {string | string[]} input
             * @param {T | State<T>} [next]
             * @param {Flags} [flags]
             * @param {Collections<T>} [groups]
             */var wg=function(r,t,n,e,i){return r.ts(t,n,e,i)};
/**
             * @template T
             * @param {State<T>} state
             * @param {string} input
             * @param {T | State<T>} [next]
             * @param {Collections<T>} [groups]
             * @param {Flags} [flags]
             */var yg=function(r,t,n,e,i){return r.tt(t,n,e,i)};
/******************************************************************************
            Text Tokens
            Identifiers for token outputs from the regexp scanner
            ******************************************************************************/
// A valid web domain token
var kg="WORD";// only contains a-z
var _g="UWORD";// contains letters other than a-z, used for IDN
var xg="ASCIINUMERICAL";// contains a-z, 0-9
var Mg="ALPHANUMERICAL";// contains numbers and letters other than a-z, used for IDN
// Special case of word
var Og="LOCALHOST";
// Valid top-level domain, special case of WORD (see tlds.js)
var Tg="TLD";
// Valid IDN TLD, special case of UWORD (see tlds.js)
var Ag="UTLD";
// The scheme portion of a web URI protocol. Supported types include: `mailto`,
// `file`, and user-defined custom protocols. Limited to schemes that contain
// only letters
var Eg="SCHEME";
// Similar to SCHEME, except makes distinction for schemes that must always be
// followed by `://`, not just `:`. Supported types include `http`, `https`,
// `ftp`, `ftps`
var Sg="SLASH_SCHEME";
// Any sequence of digits 0-9
var Cg="NUM";
// Any number of consecutive whitespace characters that are not newline
var jg="WS";
// New line (unix style)
var Rg="NL";// \n
// Opening/closing bracket classes
// TODO: Rename OPEN -> LEFT and CLOSE -> RIGHT in v5 to fit with Unicode names
// Also rename angle brackes to LESSTHAN and GREATER THAN
var Lg="OPENBRACE";// {
var Ng="CLOSEBRACE";// }
var Pg="OPENBRACKET";// [
var Ig="CLOSEBRACKET";// ]
var Hg="OPENPAREN";// (
var Dg="CLOSEPAREN";// )
var zg="OPENANGLEBRACKET";// <
var Bg="CLOSEANGLEBRACKET";// >
var Ug="FULLWIDTHLEFTPAREN";// （
var $g="FULLWIDTHRIGHTPAREN";// ）
var Kg="LEFTCORNERBRACKET";// 「
var Fg="RIGHTCORNERBRACKET";// 」
var Wg="LEFTWHITECORNERBRACKET";// 『
var qg="RIGHTWHITECORNERBRACKET";// 』
var Vg="FULLWIDTHLESSTHAN";// ＜
var Gg="FULLWIDTHGREATERTHAN";// ＞
// Various symbols
var Jg="AMPERSAND";// &
var Xg="APOSTROPHE";// '
var Yg="ASTERISK";// *
var Qg="AT";// @
var Zg="BACKSLASH";// \
var rm="BACKTICK";// `
var tm="CARET";// ^
var nm="COLON";// :
var em="COMMA";// ,
var im="DOLLAR";// $
var um="DOT";// .
var am="EQUALS";// =
var fm="EXCLAMATION";// !
var om="HYPHEN";// -
var sm="PERCENT";// %
var lm="PIPE";// |
var vm="PLUS";// +
var cm="POUND";// #
var hm="QUERY";// ?
var dm="QUOTE";// "
var pm="FULLWIDTHMIDDLEDOT";// ・
var bm="SEMI";// ;
var gm="SLASH";// /
var mm="TILDE";// ~
var wm="UNDERSCORE";// _
// Emoji symbol
var ym="EMOJI";
// Default token - anything that is not one of the above
var km="SYM";var _m=Object.freeze({__proto__:null,ALPHANUMERICAL:Mg,AMPERSAND:Jg,APOSTROPHE:Xg,ASCIINUMERICAL:xg,ASTERISK:Yg,AT:Qg,BACKSLASH:Zg,BACKTICK:rm,CARET:tm,CLOSEANGLEBRACKET:Bg,CLOSEBRACE:Ng,CLOSEBRACKET:Ig,CLOSEPAREN:Dg,COLON:nm,COMMA:em,DOLLAR:im,DOT:um,EMOJI:ym,EQUALS:am,EXCLAMATION:fm,FULLWIDTHGREATERTHAN:Gg,FULLWIDTHLEFTPAREN:Ug,FULLWIDTHLESSTHAN:Vg,FULLWIDTHMIDDLEDOT:pm,FULLWIDTHRIGHTPAREN:$g,HYPHEN:om,LEFTCORNERBRACKET:Kg,LEFTWHITECORNERBRACKET:Wg,LOCALHOST:Og,NL:Rg,NUM:Cg,OPENANGLEBRACKET:zg,OPENBRACE:Lg,OPENBRACKET:Pg,OPENPAREN:Hg,PERCENT:sm,PIPE:lm,PLUS:vm,POUND:cm,QUERY:hm,QUOTE:dm,RIGHTCORNERBRACKET:Fg,RIGHTWHITECORNERBRACKET:qg,SCHEME:Eg,SEMI:bm,SLASH:gm,SLASH_SCHEME:Sg,SYM:km,TILDE:mm,TLD:Tg,UNDERSCORE:wm,UTLD:Ag,UWORD:_g,WORD:kg,WS:jg});
// Note that these two Unicode ones expand into a really big one with Babel
var xm=/[a-z]/;
// `\p{}` property escapes need ICU, which some embedded JS runtimes ship
// without (e.g. NativeScript's V8). The literal form throws a SyntaxError
// at parse time — before any user code can catch it — so build them
// dynamically and keep ASCII-range fallbacks for engines without Unicode
// property escapes.
var Mm=/[a-z]/i;// Any Unicode character with letter data type
var Om=/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]|\u{FE0F}/u;// Any Unicode emoji character
try{Mm=new RegExp("\\p{L}","u");Om=new RegExp("\\p{Emoji}","u")}catch(r){
// use ASCII fallbacks
}var Tm=/\d/;var Am=/\s/;
/**
                The scanner provides an interface that takes a string of text as input, and
                outputs an array of tokens instances that can be used for easy URL parsing.
            */var Em="\r";// carriage-return character
var Sm="\n";// line-feed character
var Cm="️";// Variation selector, follows heart and others
var jm="‍";// zero-width joiner
var Rm="￼";// whitespace placeholder that sometimes appears in rich text editors
var Lm=null,Nm=null;// don't change so only have to be computed once
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
             */function Pm(r){var t,n,e,i,u,a,f,o,s,l,v;if(r===void 0){r=[]}
// Frequently used states (name argument removed during minification)
/** @type Collections<string> */var c={};// of tokens
bg.groups=c;
/** @type State<string> */var h=new bg;if(Lm==null){Lm=zm(tg)}if(Nm==null){Nm=zm(ng)}
// States for special URL symbols that accept immediately after start
yg(h,"'",Xg);yg(h,"{",Lg);yg(h,"}",Ng);yg(h,"[",Pg);yg(h,"]",Ig);yg(h,"(",Hg);yg(h,")",Dg);yg(h,"<",zg);yg(h,">",Bg);yg(h,"（",Ug);yg(h,"）",$g);yg(h,"「",Kg);yg(h,"」",Fg);yg(h,"『",Wg);yg(h,"』",qg);yg(h,"＜",Vg);yg(h,"＞",Gg);yg(h,"&",Jg);yg(h,"*",Yg);yg(h,"@",Qg);yg(h,"`",rm);yg(h,"^",tm);yg(h,":",nm);yg(h,",",em);yg(h,"$",im);yg(h,".",um);yg(h,"=",am);yg(h,"!",fm);yg(h,"-",om);yg(h,"%",sm);yg(h,"|",lm);yg(h,"+",vm);yg(h,"#",cm);yg(h,"?",hm);yg(h,'"',dm);yg(h,"/",gm);yg(h,";",bm);yg(h,"~",mm);yg(h,"_",wm);yg(h,"\\",Zg);yg(h,"・",pm);var d=mg(h,Tm,Cg,(t={},t[eg]=true,t));mg(d,Tm,d);var p=mg(d,xm,xg,(n={},n[ag]=true,n));var b=mg(d,Mm,Mg,(e={},e[fg]=true,e));
// State which emits a word token
var g=mg(h,xm,kg,(i={},i[ig]=true,i));mg(g,Tm,p);mg(g,xm,g);mg(p,Tm,p);mg(p,xm,p);
// Same as previous, but specific to non-fsm.ascii alphabet words
var m=mg(h,Mm,_g,(u={},u[ug]=true,u));mg(m,xm);// Non-accepting
mg(m,Tm,b);mg(m,Mm,m);mg(b,Tm,b);mg(b,xm);// Non-accepting
mg(b,Mm,b);// Non-accepting
// Whitespace jumps
// Tokens of only non-newline whitespace are arbitrarily long
// If any whitespace except newline, more whitespace!
var w=yg(h,Sm,Rg,(a={},a[cg]=true,a));var y=yg(h,Em,jg,(f={},f[cg]=true,f));var k=mg(h,Am,jg,(o={},o[cg]=true,o));yg(h,Rm,k);yg(y,Sm,w);// \r\n
yg(y,Rm,k);mg(y,Am,k);yg(k,Em);// non-accepting state to avoid mixing whitespaces
yg(k,Sm);// non-accepting state to avoid mixing whitespaces
mg(k,Am,k);yg(k,Rm,k);
// Emoji tokens. They are not grouped by the scanner except in cases where a
// zero-width joiner is present
var _=mg(h,Om,ym,(s={},s[sg]=true,s));yg(_,"#");// no transition, emoji regex seems to match #
mg(_,Om,_);yg(_,Cm,_);
// tt(Start, EMOJI_VARIATION, Emoji); // This one is sketchy
var x=yg(_,jm);yg(x,"#");mg(x,Om,_);
// tt(EmojiJoiner, EMOJI_VARIATION, Emoji); // also sketchy
// Generates states for top-level domains
// Note that this is most accurate when tlds are in alphabetical order
var M=[[xm,g],[Tm,p]];var O=[[xm,null],[Mm,m],[Tm,b]];for(var T=0;T<Lm.length;T++){Dm(h,Lm[T],Tg,kg,M)}for(var A=0;A<Nm.length;A++){Dm(h,Nm[A],Ag,_g,O)}dg(Tg,{tld:true,ascii:true},c);dg(Ag,{utld:true,alpha:true},c);
// Collect the states generated by different protocols. NOTE: If any new TLDs
// get added that are also protocols, set the token to be the same as the
// protocol to ensure parsing works as expected.
Dm(h,"file",Eg,kg,M);Dm(h,"mailto",Eg,kg,M);Dm(h,"http",Sg,kg,M);Dm(h,"https",Sg,kg,M);Dm(h,"ftp",Sg,kg,M);Dm(h,"ftps",Sg,kg,M);dg(Eg,{scheme:true,ascii:true},c);dg(Sg,{slashscheme:true,ascii:true},c);
// Register custom schemes. Assumes each scheme is asciinumeric with hyphens
r=r.sort((function(r,t){return r[0]>t[0]?1:-1}));for(var E=0;E<r.length;E++){var S=r[E][0];var C=r[E][1];var j=C?(l={},l[lg]=true,l):(v={},v[vg]=true,v);if(S.indexOf("-")>=0){j[og]=true}else if(!xm.test(S)){j[eg]=true;// numbers only
}else if(Tm.test(S)){j[ag]=true}else{j[ig]=true}wg(h,S,S,j)}
// Localhost token
wg(h,"localhost",Og,{ascii:true});
// Set default transition for start state (some symbol)
h.jd=new bg(km);return{start:h,tokens:Object.assign({groups:c},_m)}}
/**
                Given a string, returns an array of TOKEN instances representing the
                composition of that string.

                @method run
                @param {State<string>} start scanner starting state
                @param {string} str input string to scan
                @return {Token[]} list of tokens, each with a type and value
            */function Im(r,t){
// State machine is not case sensitive, so input is tokenized in lowercased
// form (still returns regular case). Uses selective `toLowerCase` because
// lowercasing the entire string causes the length and character position to
// vary in some non-English strings with V8-based runtimes.
var n=Hm(t.replace(/[A-Z]/g,(function(r){return r.toLowerCase()})));var e=n.length;// <= len if there are emojis, etc
var i=[];// return value
// cursor through the string itself, accounting for characters that have
// width with length 2 such as emojis
var u=0;
// Cursor through the array-representation of the string
var a=0;
// Tokenize the string
while(a<e){var f=r;var o=null;var s=0;var l=null;var v=-1;var c=-1;while(a<e&&(o=f.go(n[a]))){f=o;
// Keep track of the latest accepting state
if(f.accepts()){v=0;c=0;l=f}else if(v>=0){v+=n[a].length;c++}s+=n[a].length;u+=n[a].length;a++}
// Roll back to the latest accepting state
u-=v;a-=c;s-=v;
// No more jumps, just make a new token from the last accepting one
i.push({t:l.t,
// token type/name
v:t.slice(u-s,u),
// string value
s:u-s,
// start index
e:u})}return i}
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
             */function Hm(r){var t=[];var n=r.length;var e=0;while(e<n){var i=r.charCodeAt(e);var u=void 0;var a=i<55296||i>56319||e+1===n||(u=r.charCodeAt(e+1))<56320||u>57343?r[e]:r.slice(e,e+2);// two-index characters
t.push(a);e+=a.length}return t}
/**
             * Fast version of ts function for when transition defaults are well known
             * @param {State<string>} state
             * @param {string} input
             * @param {string} t
             * @param {string} defaultt
             * @param {[RegExp, State<string>][]} jr
             * @returns {State<string>}
             */function Dm(r,t,n,e,i){var u;var a=t.length;for(var f=0;f<a-1;f++){var o=t[f];if(r.j[o]){u=r.j[o]}else{u=new bg(e);u.jr=i.slice();r.j[o]=u}r=u}u=new bg(n);u.jr=i.slice();r.j[t[a-1]]=u;return u}
/**
             * Converts a string of Top-Level Domain names encoded in update-tlds.js back
             * into a list of strings.
             * @param {str} encoded encoded TLDs string
             * @returns {str[]} original TLDs list
             */function zm(r){var t=[];var n=[];var e=0;var i="0123456789";while(e<r.length){var u=0;while(i.indexOf(r[e+u])>=0){u++;// encountered some digits, have to pop to go one level up trie
}if(u>0){t.push(n.join(""));// whatever preceded the pop digits must be a word
for(var a=parseInt(r.substring(e,e+u),10);a>0;a--){n.pop()}e+=u}else{n.push(r[e]);// drop down a level into the trie
e++}}return t}
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
             */var Bm={defaultProtocol:"http",events:null,format:$m,formatHref:$m,nl2br:false,tagName:"a",target:null,rel:null,validate:true,truncate:Infinity,className:null,attributes:null,ignoreTags:[],ignoreClasses:[],render:null};
/**
             * Utility class for linkify interfaces to apply specified
             * {@link Opts formatting and rendering options}.
             *
             * @param {Opts | Options} [opts] Option value overrides.
             * @param {(ir: IntermediateRepresentation) => any} [defaultRender] (For
             *   internal use) default render function that determines how to generate an
             *   HTML element based on a link token's derived tagName, attributes and HTML.
             *   Similar to render option
             */function Um(r,t){if(t===void 0){t=null}var n=Object.assign({},Bm);if(r){n=Object.assign(n,r instanceof Um?r.o:r)}
// Ensure all ignored tags are uppercase
var e=n.ignoreTags;var i=[];for(var u=0;u<e.length;u++){i.push(e[u].toUpperCase())}
/** @protected */this.o=n;if(t){this.defaultRender=t}this.ignoreTags=i;this.ignoreClasses=n.ignoreClasses.slice()}Um.prototype={o:Bm,
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
isIgnoredClass:function(r){if(typeof r!=="string"||this.ignoreClasses.length===0){return false}var t=r.split(/\s+/);for(var n=0;n<t.length;n++){if(this.ignoreClasses.indexOf(t[n])>=0){return true}}return false},
/**
                 * @param {IntermediateRepresentation} ir
                 * @returns {any}
                 */
defaultRender:function(r){return r},
/**
                 * Returns true or false based on whether a token should be displayed as a
                 * link based on the user options.
                 * @param {MultiToken} token
                 * @returns {boolean}
                 */
check:function(r){return this.get("validate",r.toString(),r)},
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
get:function(r,t,n){var e=t!=null;var i=this.o[r];if(!i){return i}if(typeof i==="object"){i=n.t in i?i[n.t]:Bm[r];if(typeof i==="function"&&e){i=i(t,n)}}else if(typeof i==="function"&&e){i=i(t,n.t,n)}return i},
/**
                 * @template {keyof Opts} L
                 * @param {L} key Name of options object to use
                 * @param {string} [operator]
                 * @param {MultiToken} [token]
                 * @returns {Opts[L] | any}
                 */
getObj:function(r,t,n){var e=this.o[r];if(typeof e==="function"&&t!=null){e=e(t,n.t,n)}return e},
/**
                 * Convert the given token to a rendered element that may be added to the
                 * calling-interface's DOM
                 * @param {MultiToken} token Token to render to an HTML element
                 * @returns {any} Render result; e.g., HTML string, DOM element, React
                 *   Component, etc.
                 */
render:function(r){var t=r.render(this);// intermediate representation
var n=this.get("render",null,r)||this.defaultRender;return n(t,r.t,r)}};function $m(r){return r}
/******************************************************************************
                Multi-Tokens
                Tokens composed of arrays of TextTokens
            ******************************************************************************/
/**
             * @param {string} value
             * @param {Token[]} tokens
             */function Km(r,t){this.t="token";this.v=r;this.tk=t}
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
             */Km.prototype={isLink:false,
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
toHref:function(r){return this.toString()},
/**
                 * @param {Options} options Formatting options
                 * @returns {string}
                 */
toFormattedString:function(r){var t=this.toString();var n=r.get("truncate",t,this);var e=r.get("format",t,this);return n&&e.length>n?e.substring(0,n)+"…":e},
/**
                 *
                 * @param {Options} options
                 * @returns {string}
                 */
toFormattedHref:function(r){return r.get("formatHref",this.toHref(r.get("defaultProtocol")),this)},
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
toObject:function(r){if(r===void 0){r=Bm.defaultProtocol}return{type:this.t,value:this.toString(),isLink:this.isLink,href:this.toHref(r),start:this.startIndex(),end:this.endIndex()}},
/**
                 *
                 * @param {Options} options Formatting option
                 */
toFormattedObject:function(r){return{type:this.t,value:this.toFormattedString(r),isLink:this.isLink,href:this.toFormattedHref(r),start:this.startIndex(),end:this.endIndex()}},
/**
                 * Whether this token should be rendered as a link according to the given options
                 * @param {Options} options
                 * @returns {boolean}
                 */
validate:function(r){return r.get("validate",this.toString(),this)},
/**
                 * Return an object that represents how this link should be rendered.
                 * @param {Options} options Formattinng options
                 */
render:function(r){var t=this;var n=this.toHref(r.get("defaultProtocol"));var e=r.get("formatHref",n,this);var i=r.get("tagName",n,t);var u=this.toFormattedString(r);var a={};var f=r.get("className",n,t);var o=r.get("target",n,t);var s=r.get("rel",n,t);var l=r.getObj("attributes",n,t);var v=r.getObj("events",n,t);a.href=e;if(f){a.class=f}if(o){a.target=o}if(s){a.rel=s}if(l){Object.assign(a,l)}return{tagName:i,attributes:a,content:u,eventListeners:v}}};
/**
             * Create a new token that can be emitted by the parser state machine
             * @param {string} type readable type of the token
             * @param {object} props properties to assign or override, including isLink = true or false
             * @returns {new (value: string, tokens: Token[]) => MultiToken} new token class
             */function Fm(r,t){var n=/** @class */function(t){__extends(n,t);function n(n,e){var i=t.call(this,n,e)||this;i.t=r;return i}return n}(Km);for(var e in t){n.prototype[e]=t[e]}n.t=r;return n}
/**
                Represents a list of tokens making up a valid email address
            */var Wm=Fm("email",{isLink:true,toHref:function(){return"mailto:"+this.toString()}});
/**
                Represents some plain text
            */var qm=Fm("text");
/**
                Multi-linebreak token - represents a line break
                @class Nl
            */var Vm=Fm("nl");
/**
                Represents a list of text tokens making up a valid URL
                @class Url
            */var Gm=Fm("url",{isLink:true,
/**
                  Lowercases relevant parts of the domain and adds the protocol if
                  required. Note that this will not escape unsafe HTML characters in the
                  URL.
                      @param {string} [scheme] default scheme (e.g., 'https')
                  @return {string} the full href
                */
toHref:function(r){if(r===void 0){r=Bm.defaultProtocol}
// Check if already has a prefix scheme
return this.hasProtocol()?this.v:"".concat(r,"://").concat(this.v)},
/**
                 * Check whether this URL token has a protocol
                 * @return {boolean}
                 */
hasProtocol:function(){var r=this.tk;return r.length>=2&&r[0].t!==Og&&r[1].t===nm}});
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
            */var Jm=function(r){return new bg(r)};
/**
             * Generate the parser multi token-based state machine
             * @param {{ groups: Collections<string> }} tokens
             */function Xm(r){var t=r.groups;
// Types of characters the URL can definitely end in
var n=t.domain.concat([Jg,Yg,Qg,Zg,rm,tm,im,am,om,Cg,sm,lm,vm,cm,gm,km,mm,wm]);
// Types of tokens that can follow a URL and be part of the query string
// but cannot be the very last characters
// Characters that cannot appear in the URL at all should be excluded
var e=[Xg,nm,em,um,fm,sm,hm,dm,bm,zg,Bg,Lg,Ng,Ig,Pg,Hg,Dg,Ug,$g,Kg,Fg,Wg,qg,Vg,Gg];
// For addresses without the mailto prefix
// Tokens allowed in the localpart of the email
var i=[Jg,Xg,Yg,Zg,rm,tm,im,am,om,Lg,Ng,sm,lm,vm,cm,hm,gm,km,mm,wm];
// The universal starting state.
/**
                 * @type State<Token>
                 */var u=Jm();var a=yg(u,mm);// Local part of the email address
gg(a,i,a);gg(a,t.domain,a);var f=Jm(),o=Jm(),s=Jm();gg(u,t.domain,f);// parsed string ends with a potential domain name (A)
gg(u,t.scheme,o);// e.g., 'mailto'
gg(u,t.slashscheme,s);// e.g., 'http'
gg(f,i,a);gg(f,t.domain,f);var l=yg(f,Qg);// Local part of the email address plus @
yg(a,Qg,l);// close to an email address now
// Local part of an email address can be e.g. 'http' or 'mailto'
yg(o,Qg,l);yg(s,Qg,l);var v=yg(a,um);// Local part of the email address plus '.' (localpart cannot end in .)
gg(v,i,a);gg(v,t.domain,a);var c=Jm();gg(l,t.domain,c);// parsed string starts with local email info + @ with a potential domain name
gg(c,t.domain,c);var h=yg(c,um);// domain followed by DOT
gg(h,t.domain,c);var d=Jm(Wm);// Possible email address (could have more tlds)
gg(h,t.tld,d);gg(h,t.utld,d);yg(l,Og,d);
// Hyphen can jump back to a domain name
var p=yg(c,om);// parsed string starts with local email info + @ with a potential domain name
yg(p,om,p);gg(p,t.domain,c);gg(d,t.domain,c);yg(d,um,h);yg(d,om,p);
// Account for dots and hyphens. Hyphens are usually parts of domain names
// (but not TLDs)
var b=yg(f,om);// domain followed by hyphen
var g=yg(f,um);// domain followed by DOT
yg(b,om,b);gg(b,t.domain,f);gg(g,i,a);gg(g,t.domain,f);var m=Jm(Gm);// Simplest possible URL with no query string
gg(g,t.tld,m);gg(g,t.utld,m);gg(m,t.domain,f);gg(m,i,a);yg(m,um,g);yg(m,om,b);yg(m,Qg,l);var w=yg(m,nm);// URL followed by colon (potential port number here)
var y=Jm(Gm);// TLD followed by a port number
gg(w,t.numeric,y);
// Long URL with optional port and maybe query string
var k=Jm(Gm);
// URL with extra symbols at the end, followed by an opening bracket
var _=Jm();// URL followed by some symbols (will not be part of the final URL)
// Query strings
gg(k,n,k);gg(k,e,_);gg(_,n,k);gg(_,e,_);
// Become real URLs after `SLASH` or `COLON NUM SLASH`
// Here works with or without scheme:// prefix
yg(m,gm,k);yg(y,gm,k);
// A query string or fragment may also follow the domain (or port) directly,
// without a path slash (e.g. `example.com?q=1`, `example.com#frag`). Mirror
// how the `Url` state treats these tokens: `?` is non-accepting (a trailing
// `?` is trimmed), `#` is accepting.
yg(m,hm,_);yg(m,cm,k);yg(y,hm,_);yg(y,cm,k);
// Note that domains that begin with schemes are treated slighly differently
var x=yg(o,nm);// e.g., 'mailto:'
var M=yg(s,nm);// e.g., 'http:'
var O=yg(M,gm);// e.g., 'http:/'
var T=yg(O,gm);// e.g., 'http://'
// Scheme states can transition to domain states
gg(o,t.domain,f);yg(o,um,g);yg(o,om,b);gg(s,t.domain,f);yg(s,um,g);yg(s,om,b);
// Force URL with scheme prefix followed by anything sane
gg(x,t.domain,k);yg(x,gm,k);yg(x,hm,k);gg(T,t.domain,k);gg(T,n,k);yg(T,gm,k);var A=[[Lg,Ng],
// {}
[Pg,Ig],
// []
[Hg,Dg],
// ()
[zg,Bg],
// <>
[Ug,$g],
// （）
[Kg,Fg],
// 「」
[Wg,qg],
// 『』
[Vg,Gg]];for(var E=0;E<A.length;E++){var S=A[E],C=S[0],j=S[1];var R=yg(k,C);// URL followed by open bracket
// Continue not accepting for open brackets
yg(_,C,R);
// URL that begins with an opening bracket, followed by a symbols.
// Note that the final state can still be `UrlOpen` (if the URL has a
// single opening bracket for some reason).
var L=Jm(Gm);gg(R,n,L);var N=Jm();// UrlOpen followed by some symbols it cannot end it
gg(R,e,N);
// Closing bracket component. This character WILL be included in the URL.
// Must come after qsNonAccepting (which includes all close-bracket tokens)
// so that CLOSE -> Url wins over CLOSE -> UrlOpenSyms.
yg(R,j,k);
// URL that begins with an opening bracket, followed by some symbols
gg(L,n,L);gg(L,e,N);gg(N,n,L);gg(N,e,N);
// Close brace/bracket to become regular URL
yg(L,j,k);yg(N,j,k)}yg(u,Og,m);// localhost is a valid URL state
yg(u,Rg,Vm);// single new line
return{start:u,tokens:_m}}
/**
             * Run the parser state machine on a list of scanned string-based tokens to
             * create a list of multi tokens, each of which represents a URL, email address,
             * plain text, etc.
             *
             * @param {State<MultiToken>} start parser start state
             * @param {string} input the original input used to generate the given tokens
             * @param {Token[]} tokens list of scanned tokens
             * @returns {MultiToken[]}
             */function Ym(r,t,n){var e=n.length;var i=0;var u=[];var a=[];
// Memo of parser states that are known not to lead to any accepting state
// when reached at a given cursor position. dead[i] is a Set of states that,
// once reached right before tokens[i], can never reach another accepting
// state. Because the parser is deterministic, a run that reaches one of
// these (state, cursor) pairs can stop there with the same result as
// continuing. Without this, inputs where every token can extend a
// potential link that never completes (e.g., 'a.a.a.a.…') make each
// failed attempt rescan to the end of the input, which is quadratic.
// See https://github.com/Hypercontext/linkifyjs/issues/568
/** @type {Array<Set<State<MultiToken>> | undefined>} */var f=[];while(i<e){var o=r;var s=null;var l=null;var v=0;var c=null;var h=-1;
// States reached since the latest accepting state (or since the start
// of this attempt), in order. visited[k] is the state reached right
// before tokens[cursor - visited.length + k + 1]
var d=[];while(i<e&&!(s=o.go(n[i].t))){
// Starting tokens with nowhere to jump to.
// Consider these to be just plain text
a.push(n[i++])}while(i<e&&(l=s||o.go(n[i].t))){
// Get the next state
s=null;o=l;i++;v++;
// Keep track of the latest accepting state
if(o.accepts()){h=0;c=o;d=[]}else{if(h>=0){h++}d.push(o);if(f[i]&&f[i].has(o)){
// Already known that no accepting state is reachable from here
break}}}
// None of the states visited since the latest accepting state lead to
// another accepting state; remember them so later attempts that reach
// the same state at the same position can stop early.
for(var p=0,b=i-d.length+1;p<d.length;p++,b++){(f[b]||(f[b]=new Set)).add(d[p])}if(h<0){
// No accepting state was found, part of a regular text token add
// the first text token to the text tokens array and try again from
// the next
i-=v;if(i<e){a.push(n[i]);i++}}else{
// Accepting state!
// First close off the textTokens (if available)
if(a.length>0){u.push(Qm(qm,t,a));a=[]}
// Roll back to the latest accepting state
i-=h;v-=h;
// Create a new multitoken
var g=c.t;var m=n.slice(i-v,i);u.push(Qm(g,t,m))}}
// Finally close off the textTokens (if available)
if(a.length>0){u.push(Qm(qm,t,a))}return u}
/**
             * Utility function for instantiating a new multitoken with all the relevant
             * fields during parsing.
             * @param {new (value: string, tokens: Token[]) => MultiToken} Multi class to instantiate
             * @param {string} input original input string
             * @param {Token[]} tokens consecutive tokens scanned from input string
             * @returns {MultiToken}
             */function Qm(r,t,n){var e=n[0].s;var i=n[n.length-1].e;var u=t.slice(e,i);return new r(u,n)}var Zm=typeof console!=="undefined"&&console&&console.warn||function(){};var rw="until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.";
// Side-effect initialization state
var tw={scanner:null,parser:null,tokenQueue:[],pluginQueue:[],customSchemes:[],initialized:false};
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
             */function nw(){bg.groups={};tw.scanner=null;tw.parser=null;tw.tokenQueue=[];tw.pluginQueue=[];tw.customSchemes=[];tw.initialized=false;return tw}
/**
             * Detect URLs with the following additional protocol. Anything with format
             * "protocol://..." will be considered a link. If `optionalSlashSlash` is set to
             * `true`, anything with format "protocol:..." will be considered a link.
             * @param {string} scheme
             * @param {boolean} [optionalSlashSlash]
             */function ew(r,t){if(t===void 0){t=false}if(tw.initialized){Zm('linkifyjs: already initialized - will not register custom scheme "'.concat(r,'" ').concat(rw))}if(!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(r)){throw new Error('linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or "-"\n2. Cannot start or end with "-"\n3. "-" cannot repeat')}tw.customSchemes.push([r,t])}
/**
             * Initialize the linkify state machine. Called automatically the first time
             * linkify is called on a string, but may be called manually as well.
             */function iw(){
// Initialize scanner state machine and plugins
tw.scanner=Pm(tw.customSchemes);for(var r=0;r<tw.tokenQueue.length;r++){tw.tokenQueue[r][1]({scanner:tw.scanner})}
// Initialize parser state machine and plugins
tw.parser=Xm(tw.scanner.tokens);for(var t=0;t<tw.pluginQueue.length;t++){tw.pluginQueue[t][1]({scanner:tw.scanner,parser:tw.parser})}tw.initialized=true;return tw}
/**
             * Parse a string into tokens that represent linkable and non-linkable sub-components
             * @param {string} str
             * @return {MultiToken[]} tokens
             */function uw(r){if(!tw.initialized){iw()}return Ym(tw.parser.start,r,Im(tw.scanner.start,r))}uw.scan=Im;// for testing
/**
             * Find a list of linkable items in the given string.
             * @param {string} str string to find links in
             * @param {string | Opts} [type] either formatting options or specific type of
             * links to find, e.g., 'url' or 'email'
             * @param {Opts} [opts] formatting options for final output. Cannot be specified
             * if opts already provided in `type` argument
             */function aw(r,t,n){if(t===void 0){t=null}if(n===void 0){n=null}if(t&&typeof t==="object"){if(n){throw Error("linkifyjs: Invalid link type ".concat(t,"; must be a string"))}n=t;t=null}var e=new Um(n);var i=uw(r);var u=[];for(var a=0;a<i.length;a++){var f=i[a];if(f.isLink&&(!t||f.t===t)&&e.check(f)){u.push(f.toFormattedObject(e))}}return u}
//#region src/helpers/whitespace.ts
var fw="[\0-   ᠎ -\u2029 　]";var ow=new RegExp(fw);var sw=new RegExp("".concat(fw,"$"));var lw=new RegExp("".concat(fw,"+$"));var vw=new RegExp(fw,"g");
//#endregion
//#region src/helpers/unlinkTrailingWhitespace.ts
function cw(r,t,n){var e,i;var u=r.doc.resolve(t.to);if(!((e=u.nodeBefore)===null||e===void 0?void 0:e.isText))return;var a=(i=r.doc.textBetween(t.from,t.to,"￼","￼").match(lw))===null||i===void 0?void 0:i[0];if(!a)return;var f=t.to-a.length;var o=Sl(f,t.to,r.doc).filter((function(r){return r.mark.type===n}));if(!o.length)return;var s=u.nodeAfter;if(!!s&&o.some((function(r){return r.mark.isInSet(s.marks)})))return;var l=r.storedMarks;r.removeMark(f,t.to,n);r.setStoredMarks(l);if(r.selection.empty&&r.selection.from===t.to)r.removeStoredMark(n)}
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
            */function hw(r){if(r.length===1)return r[0].isLink;if(r.length===3&&r[1].isLink)return["()","[]"].includes(r[0].value+r[2].value);return false}
/**
            * This plugin allows you to automatically add links to your editor.
            * @param options The plugin options
            * @returns The plugin instance
            */function dw(r){return new xn({key:new Tn("autolink"),appendTransaction:function(t,n,e){
/**
                        * Does the transaction change the document?
                        */
var i=t.some((function(r){return r.docChanged}))&&!n.doc.eq(e.doc);
/**
                        * Prevent autolink if the transaction is not a document change or if the transaction has the meta `preventAutolink`.
                        */var u=t.some((function(r){return r.getMeta("preventAutolink")}));
/**
                        * Prevent autolink if the transaction is not a document change
                        * or if the transaction has the meta `preventAutolink`.
                        */if(!i||u)return;var a=e.tr;var f=Ks(n.doc,__spreadArray([],t,true));if(!t.some(ko)){var o=[];f.steps.forEach((function(r,t){if(!(r instanceof ut)||!r.slice.size)return;var n=f.mapping.slice(t+1);var e=n.map(r.from,1);var i=n.map(r.from+r.slice.size,-1);if(e<i)o.push({from:e,to:i})}));o.sort((function(r,t){return t.to-r.to}));o.forEach((function(t){return cw(a,t,r.type)}))}El(f).forEach((function(t){var n=t.newRange;var i=Fs(e.doc,n,(function(r){return r.isTextblock}));var u;var f;if(i.length>1){u=i[0];f=e.doc.textBetween(u.pos,u.pos+u.node.nodeSize,void 0," ")}else if(i.length){var o=e.doc.textBetween(n.from,n.to," "," ");if(!sw.test(o))return;u=i[0];f=e.doc.textBetween(u.pos,n.to,void 0," ")}if(u&&f){var s=f.split(ow).filter(Boolean);if(s.length<=0)return false;var l=s[s.length-1];var v=u.pos+f.lastIndexOf(l);if(!l)return false;var c=uw(l).map((function(t){return t.toObject(r.defaultProtocol)}));if(!hw(c))return false;c.filter((function(r){return r.isLink})).map((function(r){return __assign(__assign({},r),{from:v+r.start+1,to:v+r.end+1})})).filter((function(r){if(!e.schema.marks.code)return true;return!e.doc.rangeHasMark(r.from,r.to,e.schema.marks.code)})).filter((function(t){return r.validate(t.value)})).filter((function(t){return r.shouldAutoLink(t.value)})).forEach((function(t){if(Sl(t.from,t.to,e.doc).some((function(t){return t.mark.type===r.type})))return;a.addMark(t.from,t.to,r.type.create({href:t.href}))}))}}));if(!a.steps.length)return;return a}})}
//#endregion
//#region src/helpers/clickHandler.ts
function pw(r){return new xn({key:new Tn("handleClickLink"),props:{handleClick:function(t,n,e){if(e.button!==0)return false;if(!t.editable)return false;var i=null;if(e.target instanceof HTMLAnchorElement)i=e.target;else{var u=e.target;if(!u)return false;var a=r.editor.view.dom;i=u.closest("a");if(i&&!a.contains(i))i=null}if(!i)return false;var f=false;if(r.enableClickSelection)f=r.editor.commands.extendMarkRange(r.type.name);if(r.openOnClick){var o,s;var l=Ol(t.state,r.type.name);var v=(o=i.href)!==null&&o!==void 0?o:l.href;var u=(s=i.target)!==null&&s!==void 0?s:l.target;if(v){window.open(v,u);f=true}}return f}}})}
//#endregion
//#region src/helpers/markdownLink.ts
/**
            * Matches a Markdown link with an optional quoted title.
            * for ex: [Tiptap](https://tiptap.dev) or [Tiptap](https://tiptap.dev "some title")
            * the URL may also contain one level of balanced parentheses, as in CommonMark
            * (titles accept curly quotes too, the Typography extension swaps them in while typing)
            * the title delimiters must come in matching pairs
            */var bw=/\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)$/;
/**
            * Same as the input regex but global, to find every Markdown link in pasted text.
            */var gw=/\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)/g;function mw(r,t){var n=0;for(var e=t-1;e>=0&&r[e]==="\\";e-=1)n+=1;return n%2===1}
/**
            * Pairs the backtick runs before the match by length, as CommonMark does.
            * A run left open means the match sits in an unfinished code span.
            */function ww(r,t){var n=0;var e=0;while(e<t){if(r[e]!=="`"){e+=1;continue}if(n===0&&mw(r,e)){e+=1;continue}var i=0;while(e<t&&r[e]==="`"){i+=1;e+=1}if(n===0)n=i;else if(i===n)n=0}return n>0}function yw(r,t,n){var e,i;var u=t[1],a=t[2];if((t.index?r[t.index-1]:void 0)==="!"||mw(r,(e=t.index)!==null&&e!==void 0?e:0))return false;if(ww(r,(i=t.index)!==null&&i!==void 0?i:0))return false;return!!u.trim()&&n(a)}function kw(r){var t,n;var e=r[0],i=r[1],u=r[2],a=r[4],f=r[5],o=r[6];var s=(t=a!==null&&a!==void 0?a:f)!==null&&t!==void 0?t:o;return{index:(n=r.index)!==null&&n!==void 0?n:0,text:e,replaceWith:i,data:{href:u,title:s||null,markdown:true}}}function _w(r,t){return r.index<t.index+t.text.length&&t.index<r.index+r.text.length}function xw(r){var t,n,e;return{href:(t=r.data)===null||t===void 0?void 0:t.href,title:(n=(e=r.data)===null||e===void 0?void 0:e.title)!==null&&n!==void 0?n:null}}
/**
            * Turns typed Markdown link syntax into a link mark as soon as the closing `)` comes in.
            * The transaction gets flagged so autolink doesn't touch the converted text again.
            */function Mw(r){var t=Gc({find:function(t){var n=bw.exec(t);if(!n||!yw(t,n,r.isAllowedHref))return null;return kw(n)},type:r.type,getAttributes:xw});return new dc({find:t.find,handler:function(r){var n=t.handler(r);if(n!==null&&r.state.tr.steps.length)r.state.tr.setMeta("preventAutolink",true);return n}})}
/**
            * Same for pasting, converts every Markdown link found in the pasted text
            * and links the plain URLs from `findPlainUrls`.
            */function Ow(r){var t=th({find:function(t){var n,e;var i=[];for(var u=0,a=t.matchAll(gw);u<a.length;u++){var f=a[u];if(yw(t,f,r.isAllowedHref))i.push(kw(f))}var o=((n=(e=r.findPlainUrls)===null||e===void 0?void 0:e.call(r,t))!==null&&n!==void 0?n:[]).filter((function(r){return!i.some((function(t){return _w(t,r)}))}));return __spreadArray(__spreadArray([],i,true),o,true)},type:r.type,getAttributes:xw});return new xc({find:t.find,handler:function(r){var n;var e=t.handler(r);if(e!==null&&r.state.tr.steps.length&&((n=r.match.data)===null||n===void 0?void 0:n.markdown))r.state.tr.setMeta("preventAutolink",true);return e}})}
//#endregion
//#region src/helpers/pasteHandler.ts
function Tw(r){return new xn({key:new Tn("handlePasteLink"),props:{handlePaste:function(t,n,e){var i=r.shouldAutoLink;var u=t.state;var a=u.selection;var f=a.empty;if(f)return false;var o="";e.content.forEach((function(r){o+=r.textContent}));var s=aw(o,{defaultProtocol:r.defaultProtocol}).find((function(r){return r.isLink&&r.value===o}));if(!o||!s||i!==void 0&&!i(s.value))return false;return r.editor.commands.setMark(r.type,{href:s.href})}}})}function Aw(r,t){var n=["http","https","ftp","ftps","mailto","tel","callto","sms","cid","xmpp"];if(t)t.forEach((function(r){var t=typeof r==="string"?r:r.scheme;if(t)n.push(t)}));return!r||r.replace(vw,"").match(new RegExp("^(?:(?:".concat(n.map((function(r){return r.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")})).join("|"),"):|[^a-z]|[a-z0-9+.\\-]+(?:[^a-z+.\\-:]|$))"),"i"))}
/**
            * This extension allows you to create links.
            * @see https://www.tiptap.dev/api/marks/link
            */var Ew=_c.create({name:"link",priority:1e3,keepOnSplit:false,exitable:true,onCreate:function(){if(this.options.validate&&!this.options.shouldAutoLink){this.options.shouldAutoLink=this.options.validate;console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")}this.options.protocols.forEach((function(r){if(typeof r==="string"){ew(r);return}ew(r.scheme,r.optionalSlashes)}))},onDestroy:function(){nw()},inclusive:function(){return this.options.autolink},addOptions:function(){return{openOnClick:true,enableClickSelection:false,linkOnPaste:true,markdownLinks:false,autolink:true,protocols:[],defaultProtocol:"http",HTMLAttributes:{target:"_blank",rel:"noopener noreferrer nofollow",class:null},isAllowedUri:function(r,t){return!!Aw(r,t.protocols)},validate:function(r){return!!r},shouldAutoLink:function(r){var t=/^[a-z][a-z0-9+.-]*:\/\//i.test(r);var n=/^[a-z][a-z0-9+.-]*:/i.test(r);if(t||n&&!r.includes("@"))return true;var e=(r.includes("@")?r.split("@").pop():r).split(/[/?#:]/)[0];if(/^\d{1,3}(\.\d{1,3}){3}$/.test(e))return false;if(!/\./.test(e))return false;return true}}},addAttributes:function(){var r,t,n;return{href:{default:null,parseHTML:function(r){return r.getAttribute("href")}},target:{default:(r=this.options.HTMLAttributes.target)!==null&&r!==void 0?r:null},rel:{default:(t=this.options.HTMLAttributes.rel)!==null&&t!==void 0?t:null},class:{default:(n=this.options.HTMLAttributes.class)!==null&&n!==void 0?n:null},title:{default:null}}},parseHTML:function(){var r=this;return[{tag:"a[href]",getAttrs:function(t){var n=t.getAttribute("href");if(!n||!r.options.isAllowedUri(n,{defaultValidate:function(t){return!!Aw(t,r.options.protocols)},protocols:r.options.protocols,defaultProtocol:r.options.defaultProtocol}))return false;return null}}]},renderHTML:function(r){var t=this;var n=r.HTMLAttributes;if(!this.options.isAllowedUri(n.href,{defaultValidate:function(r){return!!Aw(r,t.options.protocols)},protocols:this.options.protocols,defaultProtocol:this.options.defaultProtocol}))return["a",vl(this.options.HTMLAttributes,__assign(__assign({},n),{href:""})),0];return["a",vl(this.options.HTMLAttributes,n),0]},markdownTokenName:"link",parseMarkdown:function(r,t){return t.applyMark("link",t.parseInline(r.tokens||[]),{href:r.href,title:r.title||null})},renderMarkdown:function(r,t){var n,e,i,u;var a=(n=(e=r.attrs)===null||e===void 0?void 0:e.href)!==null&&n!==void 0?n:"";var f=(i=(u=r.attrs)===null||u===void 0?void 0:u.title)!==null&&i!==void 0?i:"";var o=t.renderChildren(r);return f?"[".concat(o,"](").concat(a,' "').concat(f,'")'):"[".concat(o,"](").concat(a,")")},addCommands:function(){var r=this;return{setLink:function(t){return function(n){var e=n.chain;var i=t.href;if(!r.options.isAllowedUri(i,{defaultValidate:function(t){return!!Aw(t,r.options.protocols)},protocols:r.options.protocols,defaultProtocol:r.options.defaultProtocol}))return false;return e().setMark(r.name,t).setMeta("preventAutolink",true).run()}},toggleLink:function(t){return function(n){var e=n.chain;var i=(t||{}).href;if(i&&!r.options.isAllowedUri(i,{defaultValidate:function(t){return!!Aw(t,r.options.protocols)},protocols:r.options.protocols,defaultProtocol:r.options.defaultProtocol}))return false;return e().toggleMark(r.name,t,{extendEmptyMarkRange:true}).setMeta("preventAutolink",true).run()}},unsetLink:function(){return function(t){var n=t.chain;return n().unsetMark(r.name,{extendEmptyMarkRange:true}).setMeta("preventAutolink",true).run()}}}},addInputRules:function(){var r=this;if(!this.options.markdownLinks)return[];return[Mw({type:this.type,isAllowedHref:function(t){return r.options.isAllowedUri(t,{defaultValidate:function(t){return!!Aw(t,r.options.protocols)},protocols:r.options.protocols,defaultProtocol:r.options.defaultProtocol})}})]},addPasteRules:function(){var r=this;var t=function(t){var n=[];if(t){var e=r.options,i=e.protocols,u=e.defaultProtocol;aw(t,{defaultProtocol:u}).filter((function(t){return t.isLink&&r.options.isAllowedUri(t.value,{defaultValidate:function(r){return!!Aw(r,i)},protocols:i,defaultProtocol:u})})).forEach((function(t){if(!r.options.shouldAutoLink(t.value))return;n.push({text:t.value,data:{href:t.href},index:t.start})}))}return n};if(this.options.markdownLinks)return[Ow({type:this.type,isAllowedHref:function(t){return r.options.isAllowedUri(t,{defaultValidate:function(t){return!!Aw(t,r.options.protocols)},protocols:r.options.protocols,defaultProtocol:r.options.defaultProtocol})},findPlainUrls:t})];return[th({find:t,type:this.type,getAttributes:function(r){var t;return{href:(t=r.data)===null||t===void 0?void 0:t.href}}})]},addProseMirrorPlugins:function(){var r=this;var t=[];var n=this.options,e=n.protocols,i=n.defaultProtocol;if(this.options.autolink)t.push(dw({type:this.type,defaultProtocol:this.options.defaultProtocol,validate:function(t){return r.options.isAllowedUri(t,{defaultValidate:function(r){return!!Aw(r,e)},protocols:e,defaultProtocol:i})},shouldAutoLink:this.options.shouldAutoLink}));t.push(pw({type:this.type,editor:this.editor,openOnClick:this.options.openOnClick==="whenNotEditable"?true:this.options.openOnClick,enableClickSelection:this.options.enableClickSelection}));if(this.options.linkOnPaste)t.push(Tw({editor:this.editor,defaultProtocol:this.options.defaultProtocol,type:this.type,shouldAutoLink:this.options.shouldAutoLink}));return t}});
//#region src/bullet-list/bullet-list.ts
var Sw="listItem";var Cw="textStyle";
/**
            * Matches a bullet list to a dash or asterisk.
            */var jw=/^\s*([-+*])\s$/;
/**
            * This extension allows you to create bullet lists.
            * This requires the ListItem extension
            * @see https://tiptap.dev/api/nodes/bullet-list
            * @see https://tiptap.dev/api/nodes/list-item.
            */var Rw=rh.create({name:"bulletList",addOptions:function(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:false,keepAttributes:false}},group:"block list",content:function(){return"".concat(this.options.itemTypeName,"+")},parseHTML:function(){return[{tag:"ul"}]},renderHTML:function(r){var t=r.HTMLAttributes;return["ul",vl(this.options.HTMLAttributes,t),0]},markdownTokenName:"list",parseMarkdown:function(r,t){if(r.type!=="list"||r.ordered)return[];return{type:"bulletList",content:r.items?t.parseChildren(r.items):[]}},renderMarkdown:function(r,t){if(!r.content)return"";return t.renderChildren(r.content,"\n")},markdownOptions:{indentsContent:true},addCommands:function(){var r=this;return{toggleBulletList:function(){return function(t){var n=t.commands,e=t.chain;if(r.options.keepAttributes)return e().toggleList(r.name,r.options.itemTypeName,r.options.keepMarks).updateAttributes(Sw,r.editor.getAttributes(Cw)).run();return n.toggleList(r.name,r.options.itemTypeName,r.options.keepMarks)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-Shift-8":function(){return r.editor.commands.toggleBulletList()}}},addInputRules:function(){var r=this;var t=Yc({find:jw,type:this.type});if(this.options.keepMarks||this.options.keepAttributes)t=Yc({find:jw,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:function(){return r.editor.getAttributes(Cw)},editor:this.editor});return[t]}});
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
            */var Lw=function(r,t,n){var e=r.selection;if(!e.empty)return null;var i=e.$from;if(!i.parent.isTextblock)return null;if(i.parentOffset!==i.parent.content.size)return null;var u=-1;for(var a=i.depth;a>0;a-=1)if(i.node(a).type.name===t){u=a;break}if(u<0)return null;var f=i.node(u);var o=i.index(u);if(o+1>=f.childCount)return null;var s=f.child(o+1);if(!n.includes(s.type.name))return null;var l=r.schema.nodes[t];var v=false;s.forEach((function(r){if(r.type===l&&r.childCount>1)v=true}));if(!v)return null;var c=r.doc.resolve(i.after()).nodeAfter;if(!c||!n.includes(c.type.name))return null;var h=[];c.forEach((function(r){h.push(r)}));if(h.length===0)return null;return{listItemDepth:u,nestedList:c,nestedListPos:i.after(),insertPos:i.after(u),items:h}};
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
            */var Nw=function(r,t,n,e){var i=Lw(r,n,e);if(!i)return false;var u=r.selection;var a=i.nestedList,f=i.nestedListPos,o=i.insertPos,s=i.items;var l=r.tr;l.delete(f,f+a.nodeSize);var v=l.mapping.map(o);l.insert(v,p.from(s));l.setSelection(u.map(l.doc,l.mapping));if(t)t(l);return true};
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
            */var Pw=function(r,t,n){return Nw(r.state,r.view.dispatch,t,n)};
//#endregion
//#region src/helpers/createBranchingListDeleteKeymap.ts
/**
            * Creates a high-priority keymap extension that handles Delete for branching nested lists.
            * Kept separate from the list item node so Enter/Tab shortcuts keep their default priority.
            */var Iw=function(r,t){return Cc.create({name:"".concat(r,"BranchingDeleteKeymap"),priority:101,addKeyboardShortcuts:function(){var n=this;var e=function(){return Pw(n.editor,r,t)};return{Delete:e,"Mod-Delete":e}}})};
//#endregion
//#region src/ordered-list/roman.ts
var Hw=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]];var Dw="abcdefghijklmnopqrstuvwxyz";
/**
            * Marker segment for ordered list lines: numeric, roman, or 1–2 letter alpha.
            * Roman is matched before alpha so "iii" is roman; invalid romans like "aa" fall through to alpha.
            */var zw=String.raw(__makeTemplateObject(["d+|[ivxlcdmIVXLCDM]+|",""],["\\d+|[ivxlcdmIVXLCDM]+|",""]),"[a-zA-Z]{1,2}");
/**
            * Convert a number to lowercase roman numerals.
            * @example toRoman(1) // 'i'
            * @example toRoman(4) // 'iv'
            */function Bw(r){var t=r;var n="";for(var e=0,i=Hw;e<i.length;e++){var u=i[e],a=u[0],f=u[1];while(t>=a){n+=f;t-=a}}return n}
/**
            * Convert a number to uppercase roman numerals.
            * @example toRomanUpper(1) // 'I'
            * @example toRomanUpper(4) // 'IV'
            */function Uw(r){return Bw(r).toUpperCase()}function $w(r){var t=r.toLowerCase();var n=0;var e=0;while(n<t.length){var i=false;for(var u=0,a=Hw;u<a.length;u++){var f=a[u],o=f[0],s=f[1];if(t.startsWith(s,n)){e+=o;n+=s.length;i=true;break}}if(!i)return 0}return e}function Kw(r){if(!/^[ivxlcdmIVXLCDM]+$/.test(r))return false;var t=$w(r);if(t<=0)return false;return(r===r.toLowerCase()?Bw(t):Uw(t))===r}function Fw(r){var t=r.toLowerCase();if(t.length===1)return t.charCodeAt(0)-"a".charCodeAt(0)+1;if(t.length===2){var n=t.charCodeAt(0)-"a".charCodeAt(0);var e=t.charCodeAt(1)-"a".charCodeAt(0);return(n+1)*26+e+1}return 0}function Ww(r){if(r<=26)return Dw[r-1];var t=Math.floor((r-1)/26)-1;var n=(r-1)%26;if(t<0)return Dw[n];return Dw[t]+Dw[n]}
/**
            * Extract the list marker type from a marker string.
            * Supports "1", "a", "A", "i", "I" marker styles.
            *
            * @param marker The text content of the list marker (e.g. "a", "1", "iii", "b")
            * @returns The normalized type string, or undefined for default numeric type
            */function qw(r){if(!r||/^\d+$/.test(r))return;if(Kw(r))return r===r.toLowerCase()?"i":"I";if(/^[a-z]{1,2}$/.test(r))return"a";if(/^[A-Z]{1,2}$/.test(r))return"A"}
/**
            * Convert a list marker string to its numeric start position.
            *
            * @param marker The text content of the list marker (e.g. "3", "b", "II")
            * @returns The 1-based start value for the ordered list
            */function Vw(r){if(/^\d+$/.test(r))return parseInt(r,10);var t=qw(r);if(t==="i"||t==="I")return $w(r);if(t==="a"||t==="A"){var n=Fw(r);return n>0?n:1}var e=parseInt(r,10);return Number.isNaN(e)?1:e}function Gw(r,t){if(r==="numeric")return String(t);switch(r){case"a":return Ww(t);case"A":return Ww(t).toUpperCase();case"i":return Bw(t);case"I":return Uw(t);default:return String(t)}}
/**
            * Returns true when all markers share the same style and increment by 1.
            * Style is inferred from the first marker so ambiguous letters (e.g. "c", "i")
            * are not re-classified differently on later lines.
            */function Jw(r){var t;if(r.length===0)return false;var n=(t=qw(r[0]))!==null&&t!==void 0?t:"numeric";var e=Vw(r[0]);if(e<1)return false;for(var i=0;i<r.length;i++){var u=Gw(n,e+i);if(r[i]!==u)return false}return true}
/**
            * Parse a list marker into HTML ordered-list attrs (type + start).
            */function Xw(r){return{type:qw(r),start:Vw(r)}}
/**
            * Build orderedList node attrs from the first list item marker.
            */function Yw(r){var t=Xw(r),n=t.type,e=t.start;var i={};if(n)i.type=n;if(e!==1)i.start=e;return i}
/**
            * Returns the list marker prefix for a given item at a given index.
            *
            * @param type The list type attribute (e.g. "a", "A", "i", "I", null/undefined for default)
            * @param index The zero-based index of the list item
            * @param separator The separator to use (default: ". ")
            * @returns The marker string (e.g. "a. ", "I. ", "1. ")
            */function Qw(r,t,n){if(n===void 0){n=". "}var e=t+1;if(!r||r==="1")return"".concat(e).concat(n);switch(r){case"a":return"".concat(Ww(e)).concat(n);case"A":return"".concat(Ww(e).toUpperCase()).concat(n);case"i":return"".concat(Bw(e)).concat(n);case"I":return"".concat(Uw(e)).concat(n);default:return"".concat(e).concat(n)}}
//#endregion
//#region src/item/ensureLeadingParagraph.ts
function Zw(r){if(!r[0]||r[0].type==="paragraph")return r;return __spreadArray([{type:"paragraph",content:[]}],r,true)}
//#endregion
//#region src/item/hasEmptyLeadingParagraph.ts
function ry(r){var t,n;var e=(t=r.content)===null||t===void 0?void 0:t[0];return(e===null||e===void 0?void 0:e.type)==="paragraph"&&!((n=e.content)===null||n===void 0?void 0:n.length)}
//#endregion
//#region src/item/list-item.ts
var ty="&nbsp;";var ny=1;var ey=function(r){var t;return((t=r===null||r===void 0?void 0:r.level)!==null&&t!==void 0?t:ny)>ny};function iy(r){var t,n;var e=(t=r.tokens)===null||t===void 0?void 0:t[0];return Boolean(r.text&&((n=r.tokens)===null||n===void 0?void 0:n.length)===1&&(e===null||e===void 0?void 0:e.type)==="list"&&e.ordered&&e.raw===r.text)}function uy(r,t){if(t.tokenizeInline)return t.parseInline(t.tokenizeInline(r));return t.parseInline([{type:"text",raw:r,text:r}])}
/**
            * This extension allows you to create list items.
            * @see https://www.tiptap.dev/api/nodes/list-item
            */var ay=rh.create({name:"listItem",addOptions:function(){return{HTMLAttributes:{},bulletListTypeName:"bulletList",orderedListTypeName:"orderedList"}},content:"paragraph block*",defining:true,parseHTML:function(){return[{tag:"li"}]},renderHTML:function(r){var t=r.HTMLAttributes;return["li",vl(this.options.HTMLAttributes,t),0]},markdownTokenName:"list_item",parseMarkdown:function(r,t){var n;if(r.type!=="list_item")return[];var e=(n=t.parseBlockChildren)!==null&&n!==void 0?n:t.parseChildren;var i=[];if(r.tokens&&r.tokens.length>0){if(iy(r))return{type:"listItem",content:[{type:"paragraph",content:uy(r.text||"",t)}]};var u=r.tokens,a=u[0],f=u.slice(1);if(a.type==="heading"){var o;return{type:"listItem",content:__spreadArray([{type:"paragraph",content:t.parseInline((o=a.tokens)!==null&&o!==void 0?o:[])}],f.length>0?e(f):[],true)}}if(r.tokens.some((function(r){return r.type==="paragraph"})))i=e(r.tokens);else if(a.type==="text"&&a.tokens&&a.tokens.length>0){i=[{type:"paragraph",content:t.parseInline(a.tokens)}];if(r.tokens.length>1){var s=e(r.tokens.slice(1));i.push.apply(i,s)}}else i=e(r.tokens)}if(i.length===0)i=[{type:"paragraph",content:[]}];return{type:"listItem",content:Zw(i)}},renderMarkdown:function(r,t,n){var e=function(r){if(r.parentType==="bulletList")return"- ";if(r.parentType==="orderedList"){var t,n;var e=((t=r.meta)===null||t===void 0||(t=t.parentAttrs)===null||t===void 0?void 0:t.start)||1;return Qw((n=r.meta)===null||n===void 0||(n=n.parentAttrs)===null||n===void 0?void 0:n.type,e-1+(r.index||0),". ")}return"- "};var i=vc(r,t,e,n,{alignNestedToPrefix:(n===null||n===void 0?void 0:n.parentType)==="orderedList"});if(!ry(r)||!ey(n))return i;var u=e(n);return"".concat(u).concat(ty).concat(i.slice(u.length))},addExtensions:function(){return[Iw(this.name,[this.options.bulletListTypeName,this.options.orderedListTypeName])]},addKeyboardShortcuts:function(){var r=this;return{Enter:function(){return r.editor.commands.splitListItem(r.name)},Tab:function(){return r.editor.commands.sinkListItem(r.name)},"Shift-Tab":function(){return r.editor.commands.liftListItem(r.name)}}}});
//#endregion
//#region src/keymap/listHelpers/findListItemPos.ts
var fy=function(r,t){var n=t.selection.$from;var e=jo(r,t.schema);var i=null;var u=n.depth;var a=n.pos;var f=null;while(u>0&&f===null){i=n.node(u);if(i.type===e)f=u;else{u-=1;a-=1}}if(f===null)return null;return{$pos:t.doc.resolve(a),depth:f}};
//#endregion
//#region src/keymap/listHelpers/getNextListDepth.ts
var oy=function(r,t){var n=fy(r,t);if(!n)return false;var e=Cl(t,r,n.$pos.pos+4),i=e[1];return i};
//#endregion
//#region src/keymap/listHelpers/hasListBefore.ts
var sy=function(r,t,n){var e=r.selection.$anchor;var i=Math.max(0,e.pos-2);var u=r.doc.resolve(i).node();if(!u||!n.includes(u.type.name))return false;return true};
//#endregion
//#region src/keymap/listHelpers/handleBackspace.ts
var ly=function(r,t,n){if(r.commands.undoInputRule())return true;if(r.state.selection.from!==r.state.selection.to)return false;if(!Os(r.state,t)&&sy(r.state,t,n)){var e=r.state.selection.$anchor;var i=r.state.doc.resolve(e.before()-1);var u=[];i.node().descendants((function(r,n){if(r.type.name===t)u.push({node:r,pos:n})}));var a=u.at(-1);if(!a)return false;var f=r.state.doc.resolve(i.start()+a.pos+1);return r.chain().command((function(r){var t=r.tr;var n=f.end();t.delete(e.before(),e.after()).insert(n,e.parent);t.setSelection(un.create(t.doc,n+1));return true})).command((function(r){var t=r.state,n=r.dispatch;Sn(t,n);return true})).run()}if(!Os(r.state,t))return false;if(!Dl(r.state))return false;var o=r.state.selection.$from;var s=o.depth-1;if(o.node(s).type!==r.schema.nodes[t]||o.index(s)!==0)return false;return r.chain().liftListItem(t).run()};
//#endregion
//#region src/keymap/listHelpers/nextListIsDeeper.ts
var vy=function(r,t){var n=oy(r,t);var e=fy(r,t);if(!e||!n)return false;if(n>e.depth)return true;return false};
//#endregion
//#region src/keymap/listHelpers/nextListIsHigher.ts
var cy=function(r,t){var n=oy(r,t);var e=fy(r,t);if(!e||!n)return false;if(n<e.depth)return true;return false};
//#endregion
//#region src/keymap/listHelpers/handleDelete.ts
var hy=function(r,t){if(!Os(r.state,t))return false;if(!Hl(r.state,t))return false;if(!r.state.selection.empty)return false;if(vy(t,r.state))return r.chain().focus(r.state.selection.from+4).lift(t).joinBackward().run();if(cy(t,r.state))return r.commands.command((function(r){var t=r.state,n=r.dispatch;return Cn(t,n)}));return r.commands.joinItemForward()};
//#endregion
//#region src/keymap/listHelpers/handleTab.ts
var dy=function(r,t,n){var e=r.state;var i=e.selection;if(!i.empty)return false;var u=i.$from;if(u.parentOffset!==0)return false;if(!u.parent.isTextblock)return false;if(Os(e,t))return false;var a=jl(u);if(!a||!n.includes(a.type.name))return false;var f=a.lastChild;if(!f||f.type.name!==t)return false;var o=u.parent;if(!f.canReplace(f.childCount,f.childCount,p.from(o)))return false;var s=u.before();var l=u.after();var v=s-2;return r.commands.command((function(r){var t=r.tr,n=r.dispatch;if(n){t.delete(s,l).insert(v,p.from(o));t.setSelection(un.create(t.doc,v+1));t.scrollIntoView()}return true}))};
//#endregion
//#region src/keymap/list-keymap.ts
/**
            * This extension registers custom keymaps to change the behaviour of the backspace and delete keys.
            * By default Prosemirror keyhandling will always lift or sink items so paragraphs are joined into
            * the adjacent or previous list item. This extension will prevent this behaviour and instead will
            * try to join paragraphs from two list items into a single list item.
            * @see https://www.tiptap.dev/api/extensions/list-keymap
            */var py=Cc.create({name:"listKeymap",addOptions:function(){return{listTypes:[{itemName:"listItem",wrapperNames:["bulletList","orderedList"]},{itemName:"taskItem",wrapperNames:["taskList"]}]}},addKeyboardShortcuts:function(){var r=this;return{Delete:function(t){var n=t.editor;var e=false;r.options.listTypes.forEach((function(r){var t=r.itemName;if(n.state.schema.nodes[t]===void 0)return;if(hy(n,t))e=true}));return e},"Mod-Delete":function(t){var n=t.editor;var e=false;r.options.listTypes.forEach((function(r){var t=r.itemName;if(n.state.schema.nodes[t]===void 0)return;if(hy(n,t))e=true}));return e},Backspace:function(t){var n=t.editor;var e=false;r.options.listTypes.forEach((function(r){var t=r.itemName,i=r.wrapperNames;if(n.state.schema.nodes[t]===void 0)return;if(ly(n,t,i))e=true}));return e},"Mod-Backspace":function(t){var n=t.editor;var e=false;r.options.listTypes.forEach((function(r){var t=r.itemName,i=r.wrapperNames;if(n.state.schema.nodes[t]===void 0)return;if(ly(n,t,i))e=true}));return e},Tab:function(t){var n=t.editor;for(var e=0,i=r.options.listTypes;e<i.length;e++){var u=i[e],a=u.itemName,f=u.wrapperNames;if(n.state.schema.nodes[a]===void 0)continue;if(dy(n,a,f))return true}return false}}}});
//#endregion
//#region src/ordered-list/utils.ts
/**
            * Matches an ordered list item line with optional leading whitespace.
            * Captures: (1) indentation spaces, (2) item marker (number, letter, or roman numeral),
            * (3) separator (. or )), (4) content after marker
            *
            * Examples: "1. Item", "  a) Nested item", "    I. Roman item", "iii. Another", "aa. Item 27"
            */var by=new RegExp("^(\\s*)(".concat(zw,")([.)])\\s+(.*)$"));
/**
            * Matches any line that starts with whitespace (indented content).
            * Used to identify continuation content that belongs to a list item.
            */var gy=/^\s/;
/**
            * This are blocks that can interrupt a paragraph, so a line starting with one of
            * them can never be lazy continuation text of a list item
            */var my={heading:/^#{1,6}(?:\s|$)/,bulletItem:/^[-+*]\s+/,codeFence:/^(?:```|~~~)/,blockMath:/^\$\$/,thematicBreak:/^(?:(?:-[ \t]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})$/};function wy(r){return by.test(r.trimStart())}function yy(r){var t=r.trimStart();return my.bulletItem.test(t)||wy(t)||my.heading.test(t)||my.thematicBreak.test(t)&&!t.startsWith("-")||/^>\s?/.test(t)||my.codeFence.test(t)||my.blockMath.test(t)}function ky(r){return Object.values(my).some((function(t){return t.test(r)}))}function _y(r){var t=[];var n=[];var e=false;r.forEach((function(r){if(e){n.push(r);return}if(r.trim()===""){e=true;n.push(r);return}if(t.length>0&&yy(r)){e=true;n.push(r);return}t.push(r)}));return{paragraphLines:t,blockLines:n}}
/**
            * Collects all ordered list items from lines, parsing them into a flat array
            * with indentation information. Stops collecting continuation content when
            * encountering nested list items, allowing them to be processed separately.
            *
            * @param lines - Array of source lines to parse
            * @returns Tuple of [listItems array, number of lines consumed]
            */function xy(r){var t=[];var n=0;var e=0;while(n<r.length){var i=r[n];var u=i.match(by);if(!u)break;var a=u[1],f=u[2],o=u[3],s=u[4];var l=a.length;var v=parseInt(f,10);var c=isNaN(v)?qw(f):void 0;var h=isNaN(v)?Vw(f):v;var d=[s];var p=n+1;var b=[i];var g=false;while(p<r.length){var m=r[p];if(m.match(by))break;if(m.trim()===""){b.push(m);d.push("");g=true;p+=1}else if(m.match(gy)){var w=m.length-m.trimStart().length;var y=l+f.length+1;b.push(m);d.push(m.slice(Math.min(w,y)));p+=1}else{if(g||ky(m))break;b.push(m);d.push(m);p+=1}}t.push({indent:l,number:h,type:c,content:d.join("\n").trim(),contentLines:d,raw:b.join("\n")});e=p;n=p}return[t,e]}var My=new RegExp("^(".concat(zw,")([.)])\\s+(.+)$"));
/**
            * Parse plain-text pasted ordered list lines into JSONContent, or null if not a typed list.
            */function Oy(r){var t=r.split("\n").filter((function(r){return r.trim().length>0}));if(t.length===0)return null;var n=[];for(var e=0,i=t;e<i.length;e++){var u=i[e];var a=u.trim().match(My);if(!a)return null;n.push({marker:a[1],content:a[3]})}if(!Jw(n.map((function(r){return r.marker}))))return null;return{type:"orderedList",attrs:Yw(n[0].marker),content:n.map((function(r){return{type:"listItem",content:[{type:"paragraph",content:[{type:"text",text:r.content}]}]}}))}}
/**
            * Recursively builds a nested structure from a flat array of list items
            * based on their indentation levels. Creates proper markdown tokens with
            * nested lists where appropriate.
            *
            * @param items - Flat array of list items with indentation info
            * @param baseIndent - The indentation level to process at this recursion level
            * @param lexer - Markdown lexer for parsing inline and block content
            * @returns Array of list_item tokens with proper nesting
            */function Ty(r,t,n){var e=[];var i=0;while(i<r.length){var u=r[i];if(u.indent===t){var a=_y(u.contentLines),f=a.paragraphLines,o=a.blockLines;var s=f.join("\n").trim();var l=[];if(s)l.push({type:"paragraph",raw:s,tokens:n.inlineTokens(s)});var v=o.join("\n").trim();if(v){var c=n.blockTokens(v);l.push.apply(l,c)}var h=i+1;var d=[];while(h<r.length&&r[h].indent>t){d.push(r[h]);h+=1}if(d.length>0){var p=Ty(d,Math.min.apply(Math,d.map((function(r){return r.indent}))),n);l.push({type:"list",ordered:true,start:d[0].number,typeMarker:d[0].type,items:p,raw:d.map((function(r){return r.raw})).join("\n")})}e.push({type:"list_item",raw:u.raw,tokens:l});i=h}else i+=1}return e}
/**
            * Parses markdown list item tokens into Tiptap JSONContent structure,
            * ensuring text content is properly wrapped in paragraph nodes.
            *
            * @param items - Array of markdown tokens representing list items
            * @param helpers - Markdown parse helpers for recursive parsing
            * @returns Array of listItem JSONContent nodes
            */function Ay(r,t){return r.map((function(r){if(r.type!=="list_item")return t.parseChildren([r])[0];var n=[];if(r.tokens&&r.tokens.length>0)r.tokens.forEach((function(r){if(r.type==="paragraph"||r.type==="list"||r.type==="blockquote"||r.type==="code")n.push.apply(n,t.parseChildren([r]));else if(r.type==="text"&&r.tokens){var e=t.parseChildren([r]);n.push({type:"paragraph",content:e})}else{var i=t.parseChildren([r]);if(i.length>0)n.push.apply(n,i)}}));return{type:"listItem",content:n}}))}
//#endregion
//#region src/ordered-list/collectOrderedListItemsFromSource.ts
var Ey=64;function Sy(r,t){var n=[];var e=0;while(n.length<t){var i=r.indexOf("\n",e);if(i===-1){n.push(r.slice(e));return n}n.push(r.slice(e,i));e=i+1}return n}
/**
            * Collect ordered list items from the start of `source`, reading only the lines the list needs.
            *
            * @param source Markdown beginning at a block boundary.
            * @returns The items, how many lines they consumed, and the lines that were read.
            * @example
            *   collectOrderedListItemsFromSource('1. one\n2. two\n\nAfter')
            *   // → [[item, item], 3, ['1. one', '2. two', '', 'After']]
            */function Cy(r){var t=r.indexOf("\n");var n=t===-1?r:r.slice(0,t);if(!by.test(n))return[[],0,[]];var e=Ey;var i=Sy(r,e);var u=xy(i);while(u[1]===i.length&&i.length===e){e*=2;i=Sy(r,e);u=xy(i)}return[u[0],u[1],i]}
//#endregion
//#region src/ordered-list/ordered-list.ts
var jy="listItem";var Ry="textStyle";
/**
            * Matches an ordered list to a 1. on input (or any number followed by a dot).
            */var Ly=/^(\d+)\.\s$/;
/**
            * Maps CSS list-style-type values to HTML type attribute values.
            * Google Docs and Word often use CSS instead of the HTML type attribute.
            */function Ny(r){var t=r.match(/list-style-type\s*:\s*([^;]+)/i);if(!t)return null;switch(t[1].trim().toLowerCase()){case"upper-roman":return"I";case"lower-roman":return"i";case"upper-alpha":case"upper-latin":return"A";case"lower-alpha":case"lower-latin":return"a";default:return null}}
/**
            * This extension allows you to create ordered lists.
            * This requires the ListItem extension
            * @see https://www.tiptap.dev/api/nodes/ordered-list
            * @see https://www.tiptap.dev/api/nodes/list-item
            */var Py=rh.create({name:"orderedList",addOptions:function(){return{itemTypeName:"listItem",HTMLAttributes:{},keepMarks:false,keepAttributes:false}},group:"block list",content:function(){return"".concat(this.options.itemTypeName,"+")},addAttributes:function(){return{start:{default:1,parseHTML:function(r){return r.hasAttribute("start")?parseInt(r.getAttribute("start")||"",10):1}},type:{default:null,parseHTML:function(r){var t=r.getAttribute("type");if(t)return t;var n=r.getAttribute("style");if(n){var e=Ny(n);if(e)return e}var i=r.querySelector("li");if(i){var u=i.getAttribute("style");if(u){var a=Ny(u);if(a)return a}}return null}}}},parseHTML:function(){return[{tag:"ol"}]},renderHTML:function(r){var t=r.HTMLAttributes;var n=t.start,e=t.type,i=__rest(t,["start","type"]);var u=vl(this.options.HTMLAttributes,i);if(n!==1)u.start=n;if(e&&e!=="1")u.type=e;return["ol",u,0]},markdownTokenName:"list",parseMarkdown:function(r,t){if(r.type!=="list"||!r.ordered)return[];var n=r.start||1;var e=r.typeMarker;var i=r.items?Ay(r.items,t):[];var u={};if(n!==1)u.start=n;if(e)u.type=e;if(Object.keys(u).length>0)return{type:"orderedList",attrs:u,content:i};return{type:"orderedList",content:i}},renderMarkdown:function(r,t){if(!r.content)return"";return t.renderChildren(r.content,"\n")},markdownTokenizer:{name:"orderedList",level:"block",start:function(){return-1},tokenize:function(r,t,n){var e,i;var u=Cy(r),a=u[0],f=u[1],o=u[2];if(a.length===0)return;var s=Ty(a,a[0].indent,n);if(s.length===0)return;return{type:"list",ordered:true,start:((e=a[0])===null||e===void 0?void 0:e.number)||1,typeMarker:(i=a[0])===null||i===void 0?void 0:i.type,items:s,raw:o.slice(0,f).join("\n")}}},markdownOptions:{indentsContent:true},addCommands:function(){var r=this;return{toggleOrderedList:function(){return function(t){var n=t.commands,e=t.chain;if(r.options.keepAttributes)return e().toggleList(r.name,r.options.itemTypeName,r.options.keepMarks).updateAttributes(jy,r.editor.getAttributes(Ry)).run();return n.toggleList(r.name,r.options.itemTypeName,r.options.keepMarks)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-Shift-7":function(){return r.editor.commands.toggleOrderedList()}}},addProseMirrorPlugins:function(){return[new xn({props:{handlePaste:function(r,t){var n,e;var i=(n=t.clipboardData)===null||n===void 0?void 0:n.getData("text/html");if(i===null||i===void 0?void 0:i.trim())return false;var u=(e=t.clipboardData)===null||e===void 0?void 0:e.getData("text/plain");if(!u)return false;var a=Oy(u);if(!a)return false;try{var f=r.state.schema.nodeFromJSON(a);var o=r.state.tr.replaceSelectionWith(f);r.dispatch(o);return true}catch(r){return false}}}})]},addInputRules:function(){var r=this;var t=function(r,t){return(!t.attrs.type||t.attrs.type==="1")&&t.childCount+t.attrs.start===+r[1]};var n=Yc({find:Ly,type:this.type,getAttributes:function(r){return{start:+r[1]}},joinPredicate:t});if(this.options.keepMarks||this.options.keepAttributes)n=Yc({find:Ly,type:this.type,keepMarks:this.options.keepMarks,keepAttributes:this.options.keepAttributes,getAttributes:function(t){return __assign({start:+t[1]},r.editor.getAttributes(Ry))},joinPredicate:t,editor:this.editor});return[n]}});
//#endregion
//#region src/task-item/task-item.ts
/**
            * Matches a task item to a - [ ] on input.
            */var Iy=/^\s*(\[([( |x])?\])\s$/;
/**
            * Hides the checkbox label visually while keeping it in the accessibility tree.
            */var Hy="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0";var Dy=function(r,t,n){var e;return(n===null||n===void 0||(e=n.checkboxLabel)===null||e===void 0?void 0:e.call(n,r,t))||"Task item checkbox for ".concat(r.textContent||"empty task item")};
/**
            * This extension allows you to create task items.
            * @see https://www.tiptap.dev/api/nodes/task-item
            */var zy=rh.create({name:"taskItem",addOptions:function(){return{nested:false,HTMLAttributes:{},taskListTypeName:"taskList",a11y:void 0}},content:function(){return this.options.nested?"paragraph block*":"paragraph+"},defining:true,addAttributes:function(){return{checked:{default:false,keepOnSplit:false,parseHTML:function(r){var t=r.getAttribute("data-checked");return t===""||t==="true"},renderHTML:function(r){return{"data-checked":r.checked}}}}},parseHTML:function(){return[{tag:'li[data-type="'.concat(this.name,'"]'),priority:51,contentElement:function(r){var t;return(t=r.querySelector("div"))!==null&&t!==void 0?t:r}}]},renderHTML:function(r){var t=r.node,n=r.HTMLAttributes;return["li",vl(this.options.HTMLAttributes,n,{"data-type":this.name}),["label",["input",{type:"checkbox",checked:t.attrs.checked?"checked":null}],["span"]],["div",0]]},parseMarkdown:function(r,t){var n=[];if(r.tokens&&r.tokens.length>0)n.push(t.createNode("paragraph",{},t.parseInline(r.tokens)));else if(r.text)n.push(t.createNode("paragraph",{},[t.createNode("text",{text:r.text})]));else n.push(t.createNode("paragraph",{},[]));if(r.nestedTokens&&r.nestedTokens.length>0){var e=t.parseChildren(r.nestedTokens);n.push.apply(n,e)}return t.createNode("taskItem",{checked:r.checked||false},n)},renderMarkdown:function(r,t){var n;var e="- [".concat(((n=r.attrs)===null||n===void 0?void 0:n.checked)?"x":" ","] ");return vc(r,t,e,void 0,{indentMainContent:true})},addExtensions:function(){if(!this.options.nested)return[];return[Iw(this.name,[this.options.taskListTypeName])]},addKeyboardShortcuts:function(){var r=this;var t={Enter:function(){return r.editor.commands.splitListItem(r.name)},"Shift-Tab":function(){return r.editor.commands.liftListItem(r.name)}};if(!this.options.nested)return t;return __assign(__assign({},t),{Tab:function(){return r.editor.commands.sinkListItem(r.name)}})},addNodeView:function(){var r=this;return function(t){var n=t.node,e=t.HTMLAttributes,i=t.getPos,u=t.editor;var a=document.createElement("li");var f=document.createElement("label");var o=document.createElement("span");var s=document.createElement("input");var l=document.createElement("div");o.style.cssText=Hy;var v=function(t){var n=Dy(t,t.attrs.checked,r.options.a11y);s.setAttribute("aria-label",n);o.textContent=n};v(n);f.contentEditable="false";s.type="checkbox";s.addEventListener("mousedown",(function(r){return r.preventDefault()}));s.addEventListener("change",(function(t){if(!u.isEditable&&!r.options.onReadOnlyChecked){s.checked=!s.checked;return}var e=t.target.checked;if(u.isEditable&&typeof i==="function")u.chain().focus(void 0,{scrollIntoView:false}).command((function(r){var t=r.tr;var n=i();if(typeof n!=="number")return false;var u=t.doc.nodeAt(n);t.setNodeMarkup(n,void 0,__assign(__assign({},u===null||u===void 0?void 0:u.attrs),{checked:e}));return true})).run();if(!u.isEditable&&r.options.onReadOnlyChecked){if(!r.options.onReadOnlyChecked(n,e))s.checked=!s.checked}}));Object.entries(r.options.HTMLAttributes).forEach((function(r){var t=r[0],n=r[1];a.setAttribute(t,n)}));a.dataset.checked=n.attrs.checked;s.checked=n.attrs.checked;f.append(s,o);a.append(f,l);Object.entries(e).forEach((function(r){var t=r[0],n=r[1];a.setAttribute(t,n)}));var c=new Set(Object.keys(e));return{dom:a,contentDOM:l,update:function(t){if(t.type!==r.type)return false;a.dataset.checked=t.attrs.checked;s.checked=t.attrs.checked;v(t);var n=u.extensionManager.attributes;var e=cl(t,n);var i=new Set(Object.keys(e));var f=r.options.HTMLAttributes;c.forEach((function(r){if(!i.has(r)){if(r in f)a.setAttribute(r,f[r]);else a.removeAttribute(r)}}));Object.entries(e).forEach((function(r){var t=r[0],n=r[1];if(n===null||n===void 0){if(t in f)a.setAttribute(t,f[t]);else a.removeAttribute(t)}else a.setAttribute(t,n)}));c=i;return true}}}},addInputRules:function(){return[Yc({find:Iy,type:this.type,getAttributes:function(r){return{checked:r[r.length-1]==="x"}}})]}});
//#endregion
//#region src/task-list/task-list.ts
/**
            * This extension allows you to create task lists.
            * @see https://www.tiptap.dev/api/nodes/task-list
            */var By=rh.create({name:"taskList",addOptions:function(){return{itemTypeName:"taskItem",HTMLAttributes:{}}},group:"block list",content:function(){return"".concat(this.options.itemTypeName,"+")},parseHTML:function(){return[{tag:'ul[data-type="'.concat(this.name,'"]'),priority:51}]},renderHTML:function(r){var t=r.HTMLAttributes;return["ul",vl(this.options.HTMLAttributes,t,{"data-type":this.name}),0]},parseMarkdown:function(r,t){return t.createNode("taskList",{},t.parseChildren(r.items||[]))},renderMarkdown:function(r,t){if(!r.content)return"";return t.renderChildren(r.content,"\n")},markdownTokenizer:{name:"taskList",level:"block",start:function(r){var t;var n=(t=r.match(/^\s*[-+*]\s+\[([ xX])\]\s+/))===null||t===void 0?void 0:t.index;return n!==void 0?n:-1},tokenize:function(r,t,n){var e=function(r){var t=oc(r,{itemPattern:/^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,extractItemData:function(r){return{indentLevel:r[1].length,mainContent:r[4],checked:r[3].toLowerCase()==="x"}},createToken:function(r,t){return{type:"taskItem",raw:"",mainContent:r.mainContent,indentLevel:r.indentLevel,checked:r.checked,text:r.mainContent,tokens:n.inlineTokens(r.mainContent),nestedTokens:t}},customNestedParser:e},n);if(t){var i={type:"taskList",raw:t.raw,items:t.items};var u=r.slice(t.raw.length);if(u.trim())return __spreadArray([i],n.blockTokens(u),true);return[i]}return n.blockTokens(r)};var i=oc(r,{itemPattern:/^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,extractItemData:function(r){return{indentLevel:r[1].length,mainContent:r[4],checked:r[3].toLowerCase()==="x"}},createToken:function(r,t){return{type:"taskItem",raw:"",mainContent:r.mainContent,indentLevel:r.indentLevel,checked:r.checked,text:r.mainContent,tokens:n.inlineTokens(r.mainContent),nestedTokens:t}},customNestedParser:e},n);if(!i)return;return{type:"taskList",raw:i.raw,items:i.items}}},markdownOptions:{indentsContent:true},addCommands:function(){var r=this;return{toggleTaskList:function(){return function(t){var n=t.commands;return n.toggleList(r.name,r.options.itemTypeName)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-Shift-9":function(){return r.editor.commands.toggleTaskList()}}}});
//#endregion
//#region src/kit/index.ts
/**
            * The table kit is a collection of table editor extensions.
            *
            * It’s a good starting point for building your own table in Tiptap.
            */Cc.create({name:"listKit",addExtensions:function(){var r=[];if(this.options.bulletList!==false)r.push(Rw.configure(this.options.bulletList));if(this.options.listItem!==false)r.push(ay.configure(this.options.listItem));if(this.options.listKeymap!==false)r.push(py.configure(this.options.listKeymap));if(this.options.orderedList!==false)r.push(Py.configure(this.options.orderedList));if(this.options.taskItem!==false)r.push(zy.configure(this.options.taskItem));if(this.options.taskList!==false)r.push(By.configure(this.options.taskList));return r}});
//#region src/paragraph.ts
/**
            * Markdown marker for empty paragraphs to preserve blank lines.
            * Using &nbsp; (non-breaking space HTML entity) ensures the paragraph
            * is not collapsed by markdown parsers while remaining human-readable.
            */var Uy="&nbsp;";
/**
            * Unicode character for non-breaking space (U+00A0).
            * Some markdown parsers may convert &nbsp; entities to this literal character.
            */var $y=" ";
/**
            * This extension allows you to create paragraphs.
            * @see https://www.tiptap.dev/api/nodes/paragraph
            */var Ky=rh.create({name:"paragraph",priority:1e3,addOptions:function(){return{HTMLAttributes:{}}},group:"block",content:"inline*",parseHTML:function(){return[{tag:"p"}]},renderHTML:function(r){var t=r.HTMLAttributes;return["p",vl(this.options.HTMLAttributes,t),0]},parseMarkdown:function(r,t){var n=r.tokens||[];if(n.length===1&&n[0].type==="image")return t.parseChildren([n[0]]);var e=t.parseInline(n);if(n.length===1&&n[0].type==="text"&&(n[0].raw===Uy||n[0].text===Uy||n[0].raw===$y||n[0].text===$y)&&e.length===1&&e[0].type==="text"&&(e[0].text===Uy||e[0].text===$y))return t.createNode("paragraph",void 0,[]);return t.createNode("paragraph",void 0,e)},renderMarkdown:function(r,t,n){if(!r)return"";var e=Array.isArray(r.content)?r.content:[];if(e.length===0){var i,u;var a=Array.isArray(n===null||n===void 0||(i=n.previousNode)===null||i===void 0?void 0:i.content)?n.previousNode.content:[];return(n===null||n===void 0||(u=n.previousNode)===null||u===void 0?void 0:u.type)==="paragraph"&&a.length===0?Uy:""}return t.renderChildren(e)},addCommands:function(){var r=this;return{setParagraph:function(){return function(t){var n=t.commands;return n.setNode(r.name)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-Alt-0":function(){return r.editor.commands.setParagraph()}}}});
//#region src/strike.ts
/**
            * Matches a strike to a ~~strike~~ on input.
            */var Fy=/(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
/**
            * Matches a strike to a ~~strike~~ on paste.
            */var Wy=/(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
/**
            * This extension allows you to create strike text.
            * @see https://www.tiptap.dev/api/marks/strike
            */var qy=_c.create({name:"strike",addOptions:function(){return{HTMLAttributes:{}}},parseHTML:function(){return[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",consuming:false,getAttrs:function(r){return r.includes("line-through")?{}:false}}]},renderHTML:function(r){var t=r.HTMLAttributes;return["s",vl(this.options.HTMLAttributes,t),0]},markdownTokenName:"del",parseMarkdown:function(r,t){return t.applyMark("strike",t.parseInline(r.tokens||[]))},renderMarkdown:function(r,t){return"~~".concat(t.renderChildren(r),"~~")},addCommands:function(){var r=this;return{setStrike:function(){return function(t){var n=t.commands;return n.setMark(r.name)}},toggleStrike:function(){return function(t){var n=t.commands;return n.toggleMark(r.name)}},unsetStrike:function(){return function(t){var n=t.commands;return n.unsetMark(r.name)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-Shift-s":function(){return r.editor.commands.toggleStrike()}}},addInputRules:function(){return[Gc({find:Fy,type:this.type})]},addPasteRules:function(){return[th({find:Wy,type:this.type})]}});
//#region src/text.ts
/**
            * This extension allows you to create text nodes.
            * @see https://www.tiptap.dev/api/nodes/text
            */var Vy=rh.create({name:"text",group:"inline",parseMarkdown:function(r){return{type:"text",text:r.text||""}},renderMarkdown:function(r){return r.text||""}});
//#region src/underline.ts
/**
            * This extension allows you to create underline text.
            * @see https://www.tiptap.dev/api/marks/underline
            */var Gy=_c.create({name:"underline",addOptions:function(){return{HTMLAttributes:{}}},parseHTML:function(){return[{tag:"u"},{style:"text-decoration",consuming:false,getAttrs:function(r){return r.includes("underline")?{}:false}}]},renderHTML:function(r){var t=r.HTMLAttributes;return["u",vl(this.options.HTMLAttributes,t),0]},parseMarkdown:function(r,t){return t.applyMark(this.name||"underline",t.parseInline(r.tokens||[]))},renderMarkdown:function(r,t){return"<u>".concat(t.renderChildren(r),"</u>")},markdownTokenizer:{name:"underline",level:"inline",start:function(r){return r.toLowerCase().indexOf("<u>")},tokenize:function(r,t,n){if(!/^<u>/i.test(r))return;var e=/\\[\s\S]|`+|<\/u>/gi;e.lastIndex=3;var i=e.exec(r);while(i){if(i[0].startsWith("`")){var u=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/.exec(r.slice(i.index));if(u)e.lastIndex=i.index+u[0].length}else if(!i[0].startsWith("\\")){var a=r.slice(3,i.index);if(!a)return;return{type:"underline",raw:r.slice(0,e.lastIndex),text:a,tokens:n.inlineTokens(a)}}i=e.exec(r)}}},addCommands:function(){var r=this;return{setUnderline:function(){return function(t){var n=t.commands;return n.setMark(r.name)}},toggleUnderline:function(){return function(t){var n=t.commands;return n.toggleMark(r.name)}},unsetUnderline:function(){return function(t){var n=t.commands;return n.unsetMark(r.name)}}}},addKeyboardShortcuts:function(){var r=this;return{"Mod-u":function(){return r.editor.commands.toggleUnderline()},"Mod-U":function(){return r.editor.commands.toggleUnderline()}}}});
//#region src/starter-kit.ts
/**
            * The starter kit is a collection of essential editor extensions.
            *
            * It’s a good starting point for building your own editor.
            */var Jy=Cc.create({name:"starterKit",addExtensions:function(){var r=[];if(this.options.bold!==false)r.push(Hb.configure(this.options.bold));if(this.options.blockquote!==false)r.push(Rb.configure(this.options.blockquote));if(this.options.bulletList!==false)r.push(Rw.configure(this.options.bulletList));if(this.options.code!==false)r.push(Ub.configure(this.options.code));if(this.options.codeBlock!==false)r.push(Wb.configure(this.options.codeBlock));if(this.options.document!==false)r.push(qb.configure(this.options.document));if(this.options.dropcursor!==false)r.push(Xp.configure(this.options.dropcursor));if(this.options.gapcursor!==false)r.push(Yp.configure(this.options.gapcursor));if(this.options.hardBreak!==false)r.push(Vb.configure(this.options.hardBreak));if(this.options.heading!==false)r.push(Gb.configure(this.options.heading));if(this.options.undoRedo!==false)r.push(_b.configure(this.options.undoRedo));if(this.options.horizontalRule!==false)r.push(Jb.configure(this.options.horizontalRule));if(this.options.italic!==false)r.push(rg.configure(this.options.italic));if(this.options.listItem!==false)r.push(ay.configure(this.options.listItem));if(this.options.listKeymap!==false){var t;r.push(py.configure((t=this.options)===null||t===void 0?void 0:t.listKeymap))}if(this.options.link!==false){var n;r.push(Ew.configure((n=this.options)===null||n===void 0?void 0:n.link))}if(this.options.orderedList!==false)r.push(Py.configure(this.options.orderedList));if(this.options.paragraph!==false)r.push(Ky.configure(this.options.paragraph));if(this.options.strike!==false)r.push(qy.configure(this.options.strike));if(this.options.text!==false)r.push(Vy.configure(this.options.text));if(this.options.underline!==false){var e;r.push(Gy.configure((e=this.options)===null||e===void 0?void 0:e.underline))}if(this.options.trailingNode!==false){var i;r.push(kb.configure((i=this.options)===null||i===void 0?void 0:i.trailingNode))}return r}});var Xy=[{label:"Cinza escuro",value:"#242729"},{label:"Cinza",value:"#5f676d"},{label:"Azul",value:"#0073e5"},{label:"Verde",value:"#3da329"},{label:"Laranja",value:"#ff8000"},{label:"Vermelho",value:"#cf0022"},{label:"Roxo",value:"#a855f7"},{label:"Ciano",value:"#00c6d7"}];var Yy=[{label:"Azul claro",value:"#eff6ff"},{label:"Verde claro",value:"#ecfdf5"},{label:"Laranja claro",value:"#fff7ed"},{label:"Vermelho claro",value:"#fef2f2"}];var Qy={text:Xy,highlight:Yy};var Zy=[["history"],["heading"],["bold","italic","underline","strike","code"],["textColor","highlight"],["link","image","table"],["bulletList","orderedList","blockquote","horizontalRule"],["textAlign"],["clearFormatting"]];var rk={groups:Zy};
/**
             * Features of the uai-rich-text field. Each one is a boolean prop of the component, off by default: a feature that is
             * off has no toolbar button, no keyboard shortcut and is dropped from the content (when it is pasted or set through
             * `value`), so the HTML a field can produce is only what was turned on. Undo and redo (Ctrl/Cmd + Z) always work; the
             * `history` prop only shows their buttons.
             */var tk=rk.groups;var nk=tk.flat();
/**
             * Colors offered for text and highlight (uai-rich-text-colors.json). They are content colors written into the edited
             * HTML, which is used outside the design system, so they are plain values (the light theme values of the UAI tokens),
             * not `--uai-*` variables.
             */var ek=Qy.text;var ik=Qy.highlight;var uk=/^(https?:|mailto:|tel:|\/|#)/i;
/** Whether a link or image address is safe to keep: http(s), mailto, tel, or a relative path. Never javascript: or data:. */var ak=function(r){return uk.test(r.trim())};
/** Adds https:// to an address typed without a protocol, such as "blip.ai". */var fk=function(r){var t=r.trim();if(!t||/^[a-z][a-z0-9+.-]*:/i.test(t)||t.startsWith("/")||t.startsWith("#"))return t;return"https://".concat(t)};var ok=function(){return':host{--rich-text-background:var(--uai-surface-paper, #ffffff);--rich-text-border:var(--uai-border-input, #adb4b8);--rich-text-content:var(--uai-content-primary, #242729);--rich-text-label:var(--uai-content-primary, #242729);--rich-text-message:var(--uai-content-secondary, #5f676d);--rich-text-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:100%}:host(.uai-rich-text--danger){--rich-text-border:var(--uai-feedback-error, #cf0022);--rich-text-label:var(--uai-feedback-error, #cf0022);--rich-text-message:var(--uai-feedback-error, #cf0022)}:host(.uai-rich-text--success){--rich-text-border:var(--uai-feedback-success, #3da329);--rich-text-message:var(--uai-feedback-success, #3da329)}:host(.uai-rich-text--disabled){--rich-text-background:var(--uai-surface-muted, #f2f3f3);--rich-text-border:var(--uai-border-default, #e4e6e7);--rich-text-content:var(--uai-content-disabled, #848e94);--rich-text-label:var(--uai-content-disabled, #848e94);--rich-text-message:var(--uai-content-disabled, #848e94)}:host(.uai-rich-text--readonly){--rich-text-background:var(--uai-surface-muted, #f2f3f3)}.rich-text{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.rich-text__label,.rich-text__message{--uai-typo-color:currentColor}.rich-text__label{color:var(--rich-text-label)}.rich-text__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--rich-text-message)}.rich-text__control{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;border:var(--uai-border-width-default, 1px) solid var(--rich-text-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--rich-text-background);color:var(--rich-text-content);-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.rich-text__control{-webkit-transition:none;transition:none}}.rich-text__control:focus-within{border-color:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--rich-text-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--rich-text-halo)}:host(.uai-rich-text--danger) .rich-text__control:focus-within{border-color:var(--uai-feedback-error, #cf0022)}.rich-text__toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-3xs, 0.125rem);padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-xs, 0.5rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);background-color:var(--uai-surface-paper, #ffffff)}.rich-text__divider{-ms-flex-item-align:stretch;align-self:stretch;margin:var(--uai-spacing-2xs, 0.25rem);-webkit-border-start:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-inline-start:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.rich-text__heading{width:calc(var(--uai-width-menu, 14rem) * 0.75)}.rich-text__form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-sm, 0.75rem)}.rich-text__form-actions{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem)}.rich-text__table-menu{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.rich-text__swatches{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.rich-text__swatch{width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);padding:0;border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:var(--uai-radius-full, 624.9375rem);background-color:var(--swatch-color);cursor:pointer}.rich-text__swatch:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.rich-text__swatch--selected{-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--uai-border-ring, #242729);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--uai-border-ring, #242729)}.rich-text__editor{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:calc(var(--uai-sizing-5xl, 4.5rem) * 2);overflow-y:auto;cursor:text}.rich-text__content{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:inherit;padding:var(--uai-spacing-sm, 0.75rem);outline:none;white-space:pre-wrap;word-wrap:break-word;font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem);-webkit-font-variant-ligatures:none;font-variant-ligatures:none;-webkit-font-feature-settings:"liga" 0;font-feature-settings:"liga" 0}.rich-text__content [contenteditable=false]{white-space:normal}.rich-text__content>:first-child{margin-top:0}.rich-text__content>:last-child{margin-bottom:0}.rich-text__content p{margin:0 0 var(--uai-spacing-xs, 0.5rem)}.rich-text__content h1,.rich-text__content h2,.rich-text__content h3{margin:var(--uai-spacing-md, 1rem) 0 var(--uai-spacing-xs, 0.5rem);font-weight:var(--uai-font-weight-semibold, 600)}.rich-text__content h1{font-size:var(--uai-heading-md-font-size, 1.25rem);line-height:var(--uai-heading-md-line-height, 1.75rem)}.rich-text__content h2{font-size:var(--uai-title-lg-font-size, 1.125rem);line-height:var(--uai-title-lg-line-height, 1.5rem)}.rich-text__content h3{font-size:var(--uai-title-md-font-size, 1rem);line-height:var(--uai-title-md-line-height, 1.5rem)}.rich-text__content ul,.rich-text__content ol{margin:0 0 var(--uai-spacing-xs, 0.5rem);-webkit-padding-start:var(--uai-spacing-lg, 1.5rem);padding-inline-start:var(--uai-spacing-lg, 1.5rem)}.rich-text__content li{position:relative}.rich-text__content li>p{margin:0}.rich-text__content blockquote{margin:0 0 var(--uai-spacing-xs, 0.5rem);-webkit-padding-start:var(--uai-spacing-sm, 0.75rem);padding-inline-start:var(--uai-spacing-sm, 0.75rem);-webkit-border-start:var(--uai-border-width-thick, 2px) solid var(--uai-border-default, #e4e6e7);border-inline-start:var(--uai-border-width-thick, 2px) solid var(--uai-border-default, #e4e6e7);color:var(--uai-content-secondary, #5f676d)}.rich-text__content code{padding:0 var(--uai-spacing-3xs, 0.125rem);border-radius:var(--uai-radius-sm, 0.25rem);background-color:var(--uai-surface-muted, #f2f3f3);font-family:monospace}.rich-text__content pre{margin:0 0 var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-sm, 0.75rem);overflow-x:auto;border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--uai-surface-muted, #f2f3f3)}.rich-text__content pre code{padding:0;background:none}.rich-text__content a{color:var(--uai-content-link, #0073e5);text-decoration:underline}.rich-text__content hr{margin:var(--uai-spacing-md, 1rem) 0;border:0;border-top:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.rich-text__content img{display:block;max-width:100%;height:auto;border-radius:var(--uai-radius-md, 0.5rem)}.rich-text__content table{width:100%;margin:0 0 var(--uai-spacing-xs, 0.5rem);overflow:hidden;border-collapse:collapse;table-layout:fixed}.rich-text__content th,.rich-text__content td{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:var(--uai-sizing-4xl, 4rem);padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);vertical-align:top}.rich-text__content th>p,.rich-text__content td>p{margin:0}.rich-text__content th{background-color:var(--uai-surface-muted, #f2f3f3);font-weight:var(--uai-font-weight-semibold, 600);text-align:start}.rich-text__content .selectedCell::after{content:"";position:absolute;inset:0;background-color:var(--uai-overlay-selected, rgba(0, 0, 0, 0.06));pointer-events:none}.rich-text__content .tableWrapper{overflow-x:auto}.rich-text__content p.is-editor-empty:first-child::before{content:attr(data-placeholder);float:inline-start;height:0;color:var(--uai-content-secondary, #5f676d);pointer-events:none}.rich-text__content .ProseMirror-selectednode{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729)}.rich-text__content .ProseMirror-gapcursor{display:none;position:absolute;pointer-events:none}.rich-text__content.ProseMirror-focused .ProseMirror-gapcursor{display:block}:host(.uai-rich-text--disabled) .rich-text__editor{cursor:not-allowed}'};var sk=0;var lk=function(){return typeof navigator!=="undefined"&&/Mac|iPhone|iPad/.test(navigator.platform||"")};
/** Text of a tool tooltip: its name and, when it has one, the keyboard shortcut (⌘ on macOS, Ctrl elsewhere). */var vk=function(r,t){return t?"".concat(r," (").concat(lk()?"⌘":"Ctrl","+").concat(t,")"):r};var ck=r("uai_rich_text",/** @class */function(){function r(r){var e=this;t(this,r);this.uaiInput=n(this,"uaiInput");this.uaiChange=n(this,"uaiChange");this.uaiFocus=n(this,"uaiFocus");this.uaiBlur=n(this,"uaiBlur");if(r.$hostElement$["s-ei"]){this.internals=r.$hostElement$["s-ei"]}else{this.internals=r.$hostElement$.attachInternals();r.$hostElement$["s-ei"]=this.internals}
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
/** Menu (dropdown) of the toolbar that is open, so its tooltip stays hidden while the panel is shown. */this.openMenu=null;this.id="uai-rich-text-".concat(sk++);this.buttons=new Map;this.valueOnFocus="";
/** Value restored by a form reset: the content the field started with, after the editor normalized it. */this.initialValue="";this.onHeadingChange=function(r){var t;var n=((t=r.detail)===null||t===void 0?void 0:t.value)==null?null:String(r.detail.value);if(!e.editor||!n||n===e.headingValue())return;if(n==="paragraph")e.chain().setParagraph().run();else e.chain().toggleHeading({level:Number(n.slice(1))}).run()};this.applyLink=function(r){var t;var n=fk(((t=e.linkInput)===null||t===void 0?void 0:t.value)||"");if(!n)e.chain().extendMarkRange("link").unsetLink().run();else if(ak(n))e.chain().extendMarkRange("link").setLink({href:n}).run();e.closeDropdown(r.currentTarget)};this.removeLink=function(r){e.chain().extendMarkRange("link").unsetLink().run();e.closeDropdown(r.currentTarget)};this.insertImage=function(r){var t,n;var i=fk(((t=e.imageUrlInput)===null||t===void 0?void 0:t.value)||"");if(i&&ak(i)){e.chain().setImage({src:i,alt:((n=e.imageAltInput)===null||n===void 0?void 0:n.value)||""}).run();if(e.imageUrlInput)e.imageUrlInput.value="";if(e.imageAltInput)e.imageAltInput.value=""}e.closeDropdown(r.currentTarget)};this.setColor=function(r,t,n){var i;if(t==="color"){if(n)e.chain().setColor(n).run();else e.chain().unsetColor().run()}else if(n){
// Highlights are light colors: text without its own color gets the dark text color, so it stays readable in
// the editor (also in the dark theme) and on the published page.
var u=e.chain().setBackgroundColor(n);if(!((i=e.editor.getAttributes("textStyle"))===null||i===void 0?void 0:i.color))u.setColor(ek[0].value);u.run()}else e.chain().unsetBackgroundColor().run();e.closeDropdown(r.currentTarget)};this.tableAction=function(r,t){t(e.chain());e.closeDropdown(r.currentTarget)}}
/** Focuses the content area. */r.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(t){(r=this.editor)===null||r===void 0?void 0:r.commands.focus("end");return[2/*return*/]}))}))};
/** Returns the current HTML value ('' when empty). */r.prototype.getContent=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){return[2/*return*/,this.html()]}))}))};
/** Removes all the content. */r.prototype.clear=function(){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(t){(r=this.editor)===null||r===void 0?void 0:r.commands.clearContent(true);return[2/*return*/]}))}))};r.prototype.valueChanged=function(r){if(!this.editor||(r||"")===this.html())return;this.editor.commands.setContent(r||"",{emitUpdate:false});this.syncForm()};r.prototype.editableChanged=function(){var r;(r=this.editor)===null||r===void 0?void 0:r.setEditable(this.isEditable())};
// A feature adds or removes parts of the editor schema, so the editor is built again, keeping the content.
r.prototype.featuresChanged=function(){if(this.editor)this.createEditor(this.html())};r.prototype.requiredChanged=function(){this.syncForm()};r.prototype.componentWillLoad=function(){if(!this.label&&!this.ariaLabel){a("uai-rich-text","accessible-name","Set label or aria-label so the field has an accessible name.")}};r.prototype.componentDidLoad=function(){var r=this;this.formControl=new f({internals:this.internals,defaultValue:function(){return r.initialValue},onReset:function(t){var n;(n=r.editor)===null||n===void 0?void 0:n.commands.setContent(typeof t==="string"?t:"",{emitUpdate:false});r.value=r.html();r.syncForm()},onDisabledChange:function(t){var n;r.disabledByForm=t;(n=r.editor)===null||n===void 0?void 0:n.setEditable(r.isEditable())}});this.createEditor(this.value||"");
// Normalize the initial value to what the editor keeps (unsafe markup dropped); a form reset goes back to it.
this.initialValue=this.html();this.value=this.initialValue;this.formControl.setValue(this.initialValue);this.syncForm();
// The editable element did not exist in the first render, so its attributes are set here too.
this.syncEditorAttributes()};r.prototype.features=function(){var r=this;return new Set(nk.filter((function(t){return r[t]===true})))};
/** Builds the editor with only the extensions of the features that are on. */r.prototype.createEditor=function(r){var t=this;var n;var e=this.features();var i=e.has("bulletList")||e.has("orderedList");(n=this.editor)===null||n===void 0?void 0:n.destroy();this.editor=new Vc({element:this.editorEl,injectCSS:false,editable:this.isEditable(),content:r,extensions:__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([Jy.configure({heading:e.has("heading")?{levels:[1,2,3]}:false,bold:e.has("bold")?{}:false,italic:e.has("italic")?{}:false,underline:e.has("underline")?{}:false,strike:e.has("strike")?{}:false,code:e.has("code")?{}:false,codeBlock:e.has("code")?{}:false,bulletList:e.has("bulletList")?{}:false,orderedList:e.has("orderedList")?{}:false,listItem:i?{}:false,listKeymap:i?{}:false,blockquote:e.has("blockquote")?{}:false,horizontalRule:e.has("horizontalRule")?{}:false,link:e.has("link")?{openOnClick:false,autolink:true,defaultProtocol:"https",isAllowedUri:function(r,t){var n=t.defaultValidate;return n(r)&&ak(r)}}:false})],e.has("textColor")||e.has("highlight")?[jp,Lp]:[],true),e.has("highlight")?[Rp]:[],true),e.has("textAlign")?[Ap.configure({types:["heading","paragraph"]})]:[],true),e.has("image")?[eh.configure({allowBase64:false})]:[],true),e.has("table")?[Tp.configure({resizable:false}),up,ip,ep]:[],true),[pb.configure({placeholder:function(){return t.placeholder||""}})],false),editorProps:{attributes:{role:"textbox","aria-multiline":"true",id:"".concat(this.id,"-editor"),class:"rich-text__content"}},onUpdate:function(){return t.onEditorUpdate()},onTransaction:function(){return t.revision+=1},onFocus:function(){t.valueOnFocus=t.html();t.uaiFocus.emit()},onBlur:function(){var r=t.html();if(r!==t.valueOnFocus)t.uaiChange.emit({value:r});t.uaiBlur.emit()}});this.revision+=1};r.prototype.componentDidRender=function(){this.syncEditorAttributes();this.syncPressedButtons()};r.prototype.disconnectedCallback=function(){var r;(r=this.editor)===null||r===void 0?void 0:r.destroy();this.editor=undefined};r.prototype.formResetCallback=function(){var r;(r=this.formControl)===null||r===void 0?void 0:r.reset()};r.prototype.formDisabledCallback=function(r){var t;(t=this.formControl)===null||t===void 0?void 0:t.setDisabled(r)};
// The value is '' only for a document that is a single empty paragraph. editor.isEmpty is not used: it also counts
// as empty a document with only an empty table, which would drop the table from the value.
r.prototype.html=function(){if(!this.editor)return"";var r=this.editor.state.doc;var t=r.firstChild;if(r.childCount===1&&(t===null||t===void 0?void 0:t.type.name)==="paragraph"&&t.content.size===0)return"";return this.editor.getHTML()};r.prototype.isEditable=function(){return!this.disabled&&!this.disabledByForm&&!this.readonly};r.prototype.onEditorUpdate=function(){var r=this.html();this.value=r;this.syncForm();this.uaiInput.emit({value:r})};r.prototype.syncForm=function(){if(!this.formControl)return;
// The value is always set; the `name` attribute decides whether the form submits it, as with native fields.
this.formControl.setValue(this.html());this.formControl.validateRequired(this.required,this.requiredErrorMessage,this.editorEl);if(this.validationDanger&&this.formControl.validity.valid){this.validationDanger=false;this.validationText=""}};
/** Shows the validation message when the form finds the field invalid (submit or reportValidity). */r.prototype.onInvalid=function(){var r;this.validationDanger=true;this.validationText=((r=this.formControl)===null||r===void 0?void 0:r.validationMessage)||this.requiredErrorMessage};
// Attributes of the editable element that depend on props (it is created by the editor, not by render).
r.prototype.syncEditorAttributes=function(){var r;var t=(r=this.editorEl)===null||r===void 0?void 0:r.querySelector(".rich-text__content");if(!t)return;var n=function(r,n){return n===null?t.removeAttribute(r):t.setAttribute(r,n)};var e=this.danger||this.validationDanger;n("aria-labelledby",this.label?"".concat(this.id,"-label"):null);n("aria-label",this.label?null:this.ariaLabel);n("aria-invalid",e?"true":null);n("aria-required",this.required?"true":null);n("aria-readonly",this.readonly?"true":null);n("aria-disabled",this.disabled||this.disabledByForm?"true":null);n("aria-describedby",this.message()?"".concat(this.id,"-message"):null);n("data-test",this.dataTest)};r.prototype.syncPressedButtons=function(){var r,t;for(var n=0,e=this.toolButtons();n<e.length;n++){var i=e[n];if(!i.active)continue;void((t=(r=this.buttons.get(i.tool))===null||r===void 0?void 0:r.isActive)===null||t===void 0?void 0:t.call(r,i.active()))}};r.prototype.message=function(){var r=this.danger||this.validationDanger;if(this.danger)return this.errorMessage||this.validationText;if(r)return this.validationText;if(this.success)return this.successMessage;return this.helperMessage};r.prototype.chain=function(){return this.editor.chain().focus()};r.prototype.toolButtons=function(){var r=this;var t=this.editor;var n=function(r,n){return function(){return!!(t===null||t===void 0?void 0:t.isActive(r,n))}};var e=function(r){return function(){return!!(t===null||t===void 0?void 0:t.isActive({textAlign:r}))}};return[{tool:"undo",shortcut:"Z",icon:"undo",label:"Desfazer",run:function(){return r.chain().undo().run()},disabled:function(){return!(t===null||t===void 0?void 0:t.can().undo())}},{tool:"redo",shortcut:"Shift+Z",icon:"redo",label:"Refazer",run:function(){return r.chain().redo().run()},disabled:function(){return!(t===null||t===void 0?void 0:t.can().redo())}},{tool:"bold",shortcut:"B",icon:"text-style-bold",label:"Negrito",active:n("bold"),run:function(){return r.chain().toggleBold().run()}},{tool:"italic",shortcut:"I",icon:"text-style-italic",label:"Itálico",active:n("italic"),run:function(){return r.chain().toggleItalic().run()}},{tool:"underline",shortcut:"U",icon:"text-style-underline",label:"Sublinhado",active:n("underline"),run:function(){return r.chain().toggleUnderline().run()}},{tool:"strike",shortcut:"Shift+S",icon:"text-style-strikethrough",label:"Tachado",active:n("strike"),run:function(){return r.chain().toggleStrike().run()}},{tool:"code",shortcut:"E",icon:"code",label:"Código",active:n("code"),run:function(){return r.chain().toggleCode().run()}},{tool:"bulletList",shortcut:"Shift+8",icon:"unordered-list",label:"Lista com marcadores",active:n("bulletList"),run:function(){return r.chain().toggleBulletList().run()}},{tool:"orderedList",shortcut:"Shift+7",icon:"ordered-list",label:"Lista numerada",active:n("orderedList"),run:function(){return r.chain().toggleOrderedList().run()}},{tool:"blockquote",shortcut:"Shift+B",icon:"quote",label:"Citação",active:n("blockquote"),run:function(){return r.chain().toggleBlockquote().run()}},{tool:"horizontalRule",icon:"less",label:"Linha divisória",run:function(){return r.chain().setHorizontalRule().run()}},{tool:"align-left",shortcut:"Shift+L",icon:"align-left",label:"Alinhar à esquerda",active:e("left"),run:function(){return r.chain().setTextAlign("left").run()}},{tool:"align-center",shortcut:"Shift+E",icon:"align-center",label:"Centralizar",active:e("center"),run:function(){return r.chain().setTextAlign("center").run()}},{tool:"align-right",shortcut:"Shift+R",icon:"align-right",label:"Alinhar à direita",active:e("right"),run:function(){return r.chain().setTextAlign("right").run()}},{tool:"clearFormatting",icon:"delete",label:"Limpar formatação",run:function(){return r.chain().unsetAllMarks().clearNodes().run()}}]};r.prototype.headingValue=function(){var r;for(var t=0,n=[1,2,3];t<n.length;t++){var e=n[t];if((r=this.editor)===null||r===void 0?void 0:r.isActive("heading",{level:e}))return"h".concat(e)}return"paragraph"};r.prototype.closeDropdown=function(r){var t,n;var e=(t=r===null||r===void 0?void 0:r.closest)===null||t===void 0?void 0:t.call(r,"uai-dropdown");void((n=e===null||e===void 0?void 0:e.setClose)===null||n===void 0?void 0:n.call(e))};r.prototype.renderButton=function(r,t){var n=this;var i;var u=t||!!((i=r.disabled)===null||i===void 0?void 0:i.call(r));return e("uai-tooltip",{key:r.tool,class:"rich-text__tip",tooltipText:vk(r.label,r.shortcut),position:"bottom-center"},e("uai-button",{ref:function(t){return t&&n.buttons.set(r.tool,t)},class:"rich-text__tool",variant:"text",color:"content",size:"short",iconLeft:r.icon,"aria-label":r.label,disabled:u,onClick:r.run}))};r.prototype.renderMenu=function(r,t,n,i,u){var a=this;
// The tooltip wraps the whole dropdown (not the activator, which the dropdown needs as its direct child) and is
// turned off while the panel is open, so it does not cover the panel.
return e("uai-tooltip",{key:r,class:"rich-text__tip",tooltipText:n,position:"bottom-center",disabled:this.openMenu===r},e("uai-dropdown",{class:"rich-text__menu",label:n,position:"bottom-left",onUaiToggle:function(t){if(t.detail.value)a.openMenu=r;else if(a.openMenu===r)a.openMenu=null}},e("uai-button",{slot:"activator",class:"rich-text__tool",variant:"text",color:"content",size:"short",iconLeft:t,iconRight:"arrow-down","aria-label":n,disabled:i}),u))};r.prototype.renderSwatches=function(r){var t=this;var n,i;var u=r==="color"?ek:ik;var a=(i=(n=this.editor)===null||n===void 0?void 0:n.getAttributes("textStyle"))===null||i===void 0?void 0:i[r==="color"?"color":"backgroundColor"];return e("div",{class:"rich-text__swatches",role:"group","aria-label":r==="color"?"Cor do texto":"Cor de destaque"},u.map((function(n){return e("button",{type:"button",class:{"rich-text__swatch":true,"rich-text__swatch--selected":a===n.value},style:{"--swatch-color":n.value},"aria-label":n.label,"aria-pressed":a===n.value?"true":"false",onClick:function(e){return t.setColor(e,r,n.value)}})})),e("uai-button",{class:"rich-text__swatch-reset",variant:"text",color:"content",size:"short",onClick:function(n){return t.setColor(n,r,null)}},"Padrão"))};r.prototype.renderToolbar=function(r,t){var n=this;var i,u,a;var f=new Map(this.toolButtons().map((function(r){return[r.tool,r]})));var o=!!((i=this.editor)===null||i===void 0?void 0:i.isActive("table"));var s=((a=(u=this.editor)===null||u===void 0?void 0:u.getAttributes("link"))===null||a===void 0?void 0:a.href)||"";var l=tk.map((function(i){return i.filter((function(t){return r.has(t)})).map((function(r){switch(r){case"heading":return e("uai-select",{key:"heading",class:"rich-text__heading",size:"short","aria-label":"Estilo do texto",value:n.headingValue(),disabled:t,onUaiChange:n.onHeadingChange,options:[{value:"paragraph",label:"Parágrafo"},{value:"h1",label:"Título 1"},{value:"h2",label:"Título 2"},{value:"h3",label:"Título 3"}]});case"history":return["undo","redo"].map((function(r){return n.renderButton(f.get(r),t)}));case"textColor":return n.renderMenu("color","paint","Cor do texto",t,n.renderSwatches("color"));case"highlight":return n.renderMenu("highlight","mark","Cor de destaque",t,n.renderSwatches("highlight"));case"link":return n.renderMenu("link","link","Link",t,e("div",{class:"rich-text__form"},e("uai-input",{ref:function(r){return n.linkInput=r},label:"Endereço do link",placeholder:"https://",value:s}),e("div",{class:"rich-text__form-actions"},e("uai-button",{variant:"text",color:"content",size:"short",onClick:n.removeLink},"Remover"),e("uai-button",{size:"short",onClick:n.applyLink},"Aplicar"))));case"image":return n.renderMenu("image","file-image","Imagem",t,e("div",{class:"rich-text__form"},e("uai-input",{ref:function(r){return n.imageUrlInput=r},label:"Endereço da imagem",placeholder:"https://"}),e("uai-input",{ref:function(r){return n.imageAltInput=r},label:"Descrição (texto alternativo)"}),e("div",{class:"rich-text__form-actions"},e("uai-button",{size:"short",onClick:n.insertImage},"Inserir imagem"))));case"table":return n.renderMenu("table","table","Tabela",t,e("div",{class:"rich-text__table-menu",role:"group","aria-label":"Ações de tabela"},[{label:"Inserir tabela 3 × 3",show:!o,run:function(r){return r.insertTable({rows:3,cols:3,withHeaderRow:true})}},{label:"Linha acima",show:o,run:function(r){return r.addRowBefore()}},{label:"Linha abaixo",show:o,run:function(r){return r.addRowAfter()}},{label:"Coluna à esquerda",show:o,run:function(r){return r.addColumnBefore()}},{label:"Coluna à direita",show:o,run:function(r){return r.addColumnAfter()}},{label:"Alternar linha de cabeçalho",show:o,run:function(r){return r.toggleHeaderRow()}},{label:"Excluir linha",show:o,run:function(r){return r.deleteRow()}},{label:"Excluir coluna",show:o,run:function(r){return r.deleteColumn()}},{label:"Excluir tabela",show:o,run:function(r){return r.deleteTable()}}].filter((function(r){return r.show})).map((function(r){return e("uai-button",{variant:"text",color:"content",size:"short",fullWidth:true,justifyContent:"space-between",onClick:function(t){return n.tableAction(t,(function(t){return r.run(t).run()}))}},r.label)}))));case"textAlign":return["align-left","align-center","align-right"].map((function(r){return n.renderButton(f.get(r),t)}));default:return n.renderButton(f.get(r),t)}}))})).filter((function(r){return r.length}));return e("div",{class:"rich-text__toolbar",part:"toolbar",role:"toolbar","aria-label":"Formatação","aria-controls":"".concat(this.id,"-editor")},l.map((function(r,t){return[t>0&&e("span",{class:"rich-text__divider","aria-hidden":"true"}),r]})))};r.prototype.render=function(){var r=this;var t=this.disabled||this.disabledByForm;var n=this.danger||this.validationDanger;var u=this.success&&!n;var a=this.message();var f=this.features();return e(i,{key:"6774f0c859af41b427b89563d65796e126da745e","aria-disabled":t?"true":null,class:{"uai-rich-text--danger":n,"uai-rich-text--success":u,"uai-rich-text--disabled":t,"uai-rich-text--readonly":this.readonly&&!t}},e("div",{key:"0095bc5969c49aed60c025a403d5e693bcce08bc",class:"rich-text"},this.label&&e("span",{key:"a13ada4812242a24a75e178a63ab24287e32dc42",id:"".concat(this.id,"-label"),class:"rich-text__label"},e("uai-typo",{key:"9678e9ded9079a582d7f988b18dd1698c8b1f765",variant:"caption",bold:"semibold",tag:"span",margin:false},this.label)),e("div",{key:"efcfae3d606c5517f2cb42b739fb13f467810c17",class:"rich-text__control",part:"input-container"},!this.readonly&&f.size>0&&this.renderToolbar(f,t),e("div",{key:"283084c5a32097320a8be1be8f880de422940be9",class:"rich-text__editor",part:"editor",ref:function(t){return r.editorEl=t},style:Object.assign(Object.assign({},this.minHeight!==undefined?{minHeight:"".concat(this.minHeight,"px")}:{}),this.maxHeight!==undefined?{maxHeight:"".concat(this.maxHeight,"px")}:{})})),a&&e("div",{key:"06a03297ccc8eee31bb5f59446093600b3d7d29a",id:"".concat(this.id,"-message"),class:"rich-text__message",part:"input__message"},e("uai-typo",{key:"546d3c6e37f65f89f3d24f075795809a1b43643b",variant:"caption",tag:"span",margin:false},a))))};Object.defineProperty(r,"delegatesFocus",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(r,"formAssociated",{get:function(){return true},enumerable:false,configurable:true});Object.defineProperty(r.prototype,"el",{get:function(){return u(this)},enumerable:false,configurable:true});Object.defineProperty(r,"watchers",{get:function(){return{value:[{valueChanged:0}],disabled:[{editableChanged:0}],readonly:[{editableChanged:0}],history:[{featuresChanged:0}],heading:[{featuresChanged:0}],bold:[{featuresChanged:0}],italic:[{featuresChanged:0}],underline:[{featuresChanged:0}],strike:[{featuresChanged:0}],code:[{featuresChanged:0}],textColor:[{featuresChanged:0}],highlight:[{featuresChanged:0}],link:[{featuresChanged:0}],image:[{featuresChanged:0}],table:[{featuresChanged:0}],bulletList:[{featuresChanged:0}],orderedList:[{featuresChanged:0}],blockquote:[{featuresChanged:0}],horizontalRule:[{featuresChanged:0}],textAlign:[{featuresChanged:0}],clearFormatting:[{featuresChanged:0}],required:[{requiredChanged:0}]}},enumerable:false,configurable:true});return r}());ck.style=ok()}}}));