webpackJsonp([2],{"./app/containers/Login/index.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r("./node_modules/react/react.js"),a=r.n(s),l=r("./node_modules/react-redux/lib/index.js"),c=(r.n(l),r("./node_modules/react-helmet/lib/Helmet.js")),f=r.n(c),p=r("./node_modules/qrcode.react/lib/index.js"),d=r.n(p);r("./app/containers/Login/actions.js");r.d(t,"Login",function(){return y});var h=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,u=arguments.length-3;if(r||0===u||(r={}),r&&i)for(var s in i)void 0===r[s]&&(r[s]=i[s]);else r||(r=i||{});if(1===u)r.children=o;else if(u>1){for(var a=Array(u),l=0;l<u;l++)a[l]=arguments[l+3];r.children=a}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),g=h("h5",{},void 0,"Loading..."),T=h("div",{className:"col-sm-6"},void 0,h("div",{className:"app-desc"},void 0,h("h1",{},void 0,"Sorted Web"))),y=function(e){function t(e){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),m(t,[{key:"render",value:function(){return h("div",{className:"login-wrap"},void 0,h(f.a,{title:"Login",meta:[{name:"description",content:"Description of Login"}]}),h("div",{className:"login"},void 0,h("div",{className:"cont"},void 0,h("div",{className:"row"},void 0,h("div",{className:"col-sm-6"},void 0,h("div",{className:"qr text-center"},void 0,this.props.Login.qrCode?h(d.a,{value:this.props.Login.qrCode,size:230}):g)),T))))}}]),t}(a.a.Component),v=function(e){return{Login:e.login}};t.default=r.i(l.connect)(v,u)(y)},"./node_modules/deep-equal/index.js":function(e,t,r){function n(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,r){var i,c;if(n(e)||n(t))return!1;if(e.prototype!==t.prototype)return!1;if(a(e))return!!a(t)&&(e=u.call(e),t=u.call(t),l(e,t,r));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=s(e),p=s(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(c=f[i],!l(e[c],t[c],r))return!1;return typeof e==typeof t}var u=Array.prototype.slice,s=r("./node_modules/deep-equal/lib/keys.js"),a=r("./node_modules/deep-equal/lib/is_arguments.js"),l=e.exports=function(e,t,r){return r||(r={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?r.strict?e===t:e==t:i(e,t,r))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function r(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function n(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?r:n,t.supported=r,t.unsupported=n},"./node_modules/deep-equal/lib/keys.js":function(e,t){function r(e){var t=[];for(var r in e)t.push(r);return t}t=e.exports="function"==typeof Object.keys?Object.keys:r,t.shim=r},"./node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,r){"use strict";var n=r("./node_modules/fbjs/lib/emptyFunction.js"),o=r("./node_modules/fbjs/lib/invariant.js");e.exports=function(){function e(){o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},"./node_modules/prop-types/index.js":function(e,t,r){e.exports=r("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/qr.js/lib/8BitByte.js":function(e,t,r){function n(e){this.mode=o.MODE_8BIT_BYTE,this.data=e}var o=r("./node_modules/qr.js/lib/mode.js");n.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}},e.exports=n},"./node_modules/qr.js/lib/BitBuffer.js":function(e,t){function r(){this.buffer=new Array,this.length=0}r.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=r},"./node_modules/qr.js/lib/ErrorCorrectLevel.js":function(e,t){e.exports={L:1,M:0,Q:3,H:2}},"./node_modules/qr.js/lib/Polynomial.js":function(e,t,r){function n(e,t){if(void 0==e.length)throw new Error(e.length+"/"+t);for(var r=0;r<e.length&&0==e[r];)r++;this.num=new Array(e.length-r+t);for(var n=0;n<e.length-r;n++)this.num[n]=e[n+r]}var o=r("./node_modules/qr.js/lib/math.js");n.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<e.getLength();i++)t[r+i]^=o.gexp(o.glog(this.get(r))+o.glog(e.get(i)));return new n(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=o.glog(this.get(0))-o.glog(e.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(var i=0;i<e.getLength();i++)r[i]^=o.gexp(o.glog(e.get(i))+t);return new n(r,0).mod(e)}},e.exports=n},"./node_modules/qr.js/lib/QRCode.js":function(e,t,r){function n(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var o=r("./node_modules/qr.js/lib/8BitByte.js"),i=r("./node_modules/qr.js/lib/RSBlock.js"),u=r("./node_modules/qr.js/lib/BitBuffer.js"),s=r("./node_modules/qr.js/lib/util.js"),a=r("./node_modules/qr.js/lib/Polynomial.js"),l=n.prototype;l.addData=function(e){var t=new o(e);this.dataList.push(t),this.dataCache=null},l.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},l.getModuleCount=function(){return this.moduleCount},l.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=i.getRSBlocks(e,this.errorCorrectLevel),r=new u,n=0,o=0;o<t.length;o++)n+=t[o].dataCount;for(var o=0;o<this.dataList.length;o++){var a=this.dataList[o];r.put(a.mode,4),r.put(a.getLength(),s.getLengthInBits(a.mode,e)),a.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},l.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},l.setupPositionProbePattern=function(e,t){for(var r=-1;r<=7;r++)if(!(e+r<=-1||this.moduleCount<=e+r))for(var n=-1;n<=7;n++)t+n<=-1||this.moduleCount<=t+n||(this.modules[e+r][t+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},l.getBestMaskPattern=function(){for(var e=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=s.getLostPoint(this);(0==r||e>n)&&(e=n,t=r)}return t},l.createMovieClip=function(e,t,r){var n=e.createEmptyMovieClip(t,r),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var u=i*o,s=0;s<this.modules[i].length;s++){var a=s*o,l=this.modules[i][s];l&&(n.beginFill(0,100),n.moveTo(a,u),n.lineTo(a+o,u),n.lineTo(a+o,u+o),n.lineTo(a,u+o),n.endFill())}return n},l.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},l.setupPositionAdjustPattern=function(){for(var e=s.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var r=0;r<e.length;r++){var n=e[t],o=e[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var u=-2;u<=2;u++)this.modules[n+i][o+u]=-2==i||2==i||-2==u||2==u||0==i&&0==u}},l.setupTypeNumber=function(e){for(var t=s.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!e&&1==(t>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(var r=0;r<18;r++){var n=!e&&1==(t>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},l.setupTypeInfo=function(e,t){for(var r=this.errorCorrectLevel<<3|t,n=s.getBCHTypeInfo(r),o=0;o<15;o++){var i=!e&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(var o=0;o<15;o++){var i=!e&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!e},l.mapData=function(e,t){for(var r=-1,n=this.moduleCount-1,o=7,i=0,u=this.moduleCount-1;u>0;u-=2)for(6==u&&u--;;){for(var a=0;a<2;a++)if(null==this.modules[n][u-a]){var l=!1;i<e.length&&(l=1==(e[i]>>>o&1));var c=s.getMask(t,n,u-a);c&&(l=!l),this.modules[n][u-a]=l,o--,-1==o&&(i++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},n.PAD0=236,n.PAD1=17,n.createData=function(e,t,r){for(var o=i.getRSBlocks(e,t),a=new u,l=0;l<r.length;l++){var c=r[l];a.put(c.mode,4),a.put(c.getLength(),s.getLengthInBits(c.mode,e)),c.write(a)}for(var f=0,l=0;l<o.length;l++)f+=o[l].dataCount;if(a.getLengthInBits()>8*f)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*f+")");for(a.getLengthInBits()+4<=8*f&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;;){if(a.getLengthInBits()>=8*f)break;if(a.put(n.PAD0,8),a.getLengthInBits()>=8*f)break;a.put(n.PAD1,8)}return n.createBytes(a,o)},n.createBytes=function(e,t){for(var r=0,n=0,o=0,i=new Array(t.length),u=new Array(t.length),l=0;l<t.length;l++){var c=t[l].dataCount,f=t[l].totalCount-c;n=Math.max(n,c),o=Math.max(o,f),i[l]=new Array(c);for(var p=0;p<i[l].length;p++)i[l][p]=255&e.buffer[p+r];r+=c;var d=s.getErrorCorrectPolynomial(f),h=new a(i[l],d.getLength()-1),m=h.mod(d);u[l]=new Array(d.getLength()-1);for(var p=0;p<u[l].length;p++){var g=p+m.getLength()-u[l].length;u[l][p]=g>=0?m.get(g):0}}for(var T=0,p=0;p<t.length;p++)T+=t[p].totalCount;for(var y=new Array(T),v=0,p=0;p<n;p++)for(var l=0;l<t.length;l++)p<i[l].length&&(y[v++]=i[l][p]);for(var p=0;p<o;p++)for(var l=0;l<t.length;l++)p<u[l].length&&(y[v++]=u[l][p]);return y},e.exports=n},"./node_modules/qr.js/lib/RSBlock.js":function(e,t,r){function n(e,t){this.totalCount=e,this.dataCount=t}var o=r("./node_modules/qr.js/lib/ErrorCorrectLevel.js");n.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],n.getRSBlocks=function(e,t){var r=n.getRsBlockTable(e,t);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var o=r.length/3,i=new Array,u=0;u<o;u++)for(var s=r[3*u+0],a=r[3*u+1],l=r[3*u+2],c=0;c<s;c++)i.push(new n(a,l));return i},n.getRsBlockTable=function(e,t){switch(t){case o.L:return n.RS_BLOCK_TABLE[4*(e-1)+0];case o.M:return n.RS_BLOCK_TABLE[4*(e-1)+1];case o.Q:return n.RS_BLOCK_TABLE[4*(e-1)+2];case o.H:return n.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},e.exports=n},"./node_modules/qr.js/lib/math.js":function(e,t){for(var r={glog:function(e){if(e<1)throw new Error("glog("+e+")");return r.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return r.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},n=0;n<8;n++)r.EXP_TABLE[n]=1<<n;for(var n=8;n<256;n++)r.EXP_TABLE[n]=r.EXP_TABLE[n-4]^r.EXP_TABLE[n-5]^r.EXP_TABLE[n-6]^r.EXP_TABLE[n-8];for(var n=0;n<255;n++)r.LOG_TABLE[r.EXP_TABLE[n]]=n;e.exports=r},"./node_modules/qr.js/lib/mode.js":function(e,t){e.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},"./node_modules/qr.js/lib/util.js":function(e,t,r){var n=r("./node_modules/qr.js/lib/mode.js"),o=r("./node_modules/qr.js/lib/Polynomial.js"),i=r("./node_modules/qr.js/lib/math.js"),u={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;s.getBCHDigit(t)-s.getBCHDigit(s.G15)>=0;)t^=s.G15<<s.getBCHDigit(t)-s.getBCHDigit(s.G15);return(e<<10|t)^s.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;s.getBCHDigit(t)-s.getBCHDigit(s.G18)>=0;)t^=s.G18<<s.getBCHDigit(t)-s.getBCHDigit(s.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return s.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,r){switch(e){case u.PATTERN000:return(t+r)%2==0;case u.PATTERN001:return t%2==0;case u.PATTERN010:return r%3==0;case u.PATTERN011:return(t+r)%3==0;case u.PATTERN100:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case u.PATTERN101:return t*r%2+t*r%3==0;case u.PATTERN110:return(t*r%2+t*r%3)%2==0;case u.PATTERN111:return(t*r%3+(t+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new o([1],0),r=0;r<e;r++)t=t.multiply(new o([1,i.gexp(r)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,n=0;n<t;n++)for(var o=0;o<t;o++){for(var i=0,u=e.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||t<=n+s))for(var a=-1;a<=1;a++)o+a<0||t<=o+a||0==s&&0==a||u==e.isDark(n+s,o+a)&&i++;i>5&&(r+=3+i-5)}for(var n=0;n<t-1;n++)for(var o=0;o<t-1;o++){var l=0;e.isDark(n,o)&&l++,e.isDark(n+1,o)&&l++,e.isDark(n,o+1)&&l++,e.isDark(n+1,o+1)&&l++,0!=l&&4!=l||(r+=3)}for(var n=0;n<t;n++)for(var o=0;o<t-6;o++)e.isDark(n,o)&&!e.isDark(n,o+1)&&e.isDark(n,o+2)&&e.isDark(n,o+3)&&e.isDark(n,o+4)&&!e.isDark(n,o+5)&&e.isDark(n,o+6)&&(r+=40);for(var o=0;o<t;o++)for(var n=0;n<t-6;n++)e.isDark(n,o)&&!e.isDark(n+1,o)&&e.isDark(n+2,o)&&e.isDark(n+3,o)&&e.isDark(n+4,o)&&!e.isDark(n+5,o)&&e.isDark(n+6,o)&&(r+=40);for(var c=0,o=0;o<t;o++)for(var n=0;n<t;n++)e.isDark(n,o)&&c++;return r+=Math.abs(100*c/t/t-50)/5*10}};e.exports=s},"./node_modules/qrcode.react/lib/index.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r("./node_modules/react/react.js"),l=r("./node_modules/prop-types/index.js"),c=r("./node_modules/qr.js/lib/QRCode.js"),f=r("./node_modules/qr.js/lib/ErrorCorrectLevel.js"),p=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"shouldComponentUpdate",value:function(e){var r=this;return Object.keys(t.propTypes).some(function(t){return r.props[t]!==e[t]})}},{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){var e=this.props,t=e.value,r=e.size,n=e.level,o=e.bgColor,i=e.fgColor,s=new c(-1,f[n]);if(s.addData(t),s.make(),null!=this._canvas){var a=this._canvas,l=a.getContext("2d");if(!l)return;var p=s.modules,d=r/p.length,h=r/p.length,m=(window.devicePixelRatio||1)/u(l);a.height=a.width=r*m,l.scale(m,m),p.forEach(function(e,t){e.forEach(function(e,r){l&&(l.fillStyle=e?i:o);var n=Math.ceil((r+1)*d)-Math.floor(r*d),u=Math.ceil((t+1)*h)-Math.floor(t*h);l&&l.fillRect(Math.round(r*d),Math.round(t*h),n,u)})})}}},{key:"render",value:function(){var e=this;return a.createElement("canvas",{style:{height:this.props.size,width:this.props.size},height:this.props.size,width:this.props.size,ref:function(t){return e._canvas=t}})}}]),t}(a.Component);Object.defineProperty(p,"defaultProps",{enumerable:!0,writable:!0,value:{size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000"}}),Object.defineProperty(p,"propTypes",{enumerable:!0,writable:!0,value:{value:l.string.isRequired,size:l.number,level:l.oneOf(["L","M","Q","H"]),bgColor:l.string,fgColor:l.string}}),e.exports=p},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.__esModule=!0;var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=r("./node_modules/react/react.js"),f=n(c),p=r("./node_modules/react-side-effect/lib/index.js"),d=n(p),h=r("./node_modules/deep-equal/index.js"),m=n(h),g=r("./node_modules/object-assign/index.js"),T=n(g),y=r("./node_modules/react-helmet/lib/HelmetConstants.js"),v=r("./node_modules/react-helmet/lib/PlainComponent.js"),b=n(v),E="data-react-helmet",_=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},A=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n[t])return n[t]}return null},P=function(e){var t=A(e,"title"),r=A(e,"titleTemplate");if(r&&t)return r.replace(/%s/g,function(){return t});var n=A(e,"defaultTitle");return t||n||""},j=function(e){return A(e,"onChangeClientState")||function(){}},w=function(e){return e.filter(function(e){return void 0!==e[y.TAG_NAMES.HTML]}).map(function(e){return e[y.TAG_NAMES.HTML]}).reduce(function(e,t){return l({},e,t)},{})},O=function(e,t){return t.filter(function(e){return void 0!==e[y.TAG_NAMES.BASE]}).map(function(e){return e[y.TAG_NAMES.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o],u=i.toLowerCase();if(-1!==e.indexOf(u))return t.concat(r)}return t},[])},C=function(e,t,r){var n={};return r.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var o={};r.filter(function(e){for(var r=void 0,i=Object.keys(e),u=0;u<i.length;u++){var s=i[u],a=s.toLowerCase();-1===t.indexOf(a)||r===y.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||a===y.TAG_PROPERTIES.REL&&"stylesheet"===e[a].toLowerCase()||(r=a),-1===t.indexOf(s)||s!==y.TAG_PROPERTIES.INNER_HTML&&s!==y.TAG_PROPERTIES.CSS_TEXT||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),u=0;u<i.length;u++){var s=i[u],a=(0,T.default)({},n[s],o[s]);n[s]=a}return e},[]).reverse()},L=function(e){document.title=e||document.title},S=function(e){for(var t=document.getElementsByTagName("html")[0],r=t.getAttribute(E),n=r?r.split(","):[],o=[].concat(n),i=Object.keys(e),u=0;u<i.length;u++){var s=i[u],a=e[s]||"";t.setAttribute(s,a),-1===n.indexOf(s)&&n.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var c=o.length-1;c>=0;c--)t.removeAttribute(o[c]);n.length===o.length?t.removeAttribute(E):t.setAttribute(E,n.join(","))},M=function(e,t){var r=document.head||document.querySelector("head"),n=r.querySelectorAll(e+"["+E+"]"),o=Array.prototype.slice.call(n),i=[],u=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if("innerHTML"===n)r.innerHTML=t.innerHTML;else if("cssText"===n)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(E,"true"),o.some(function(e,t){return u=t,r.isEqualNode(e)})?o.splice(u,1):i.push(r)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return r.appendChild(e)}),{oldTags:o,newTags:i}},R=function(e){for(var t=Object.keys(e),r="",n=0;n<t.length;n++){var o=t[n];r+=(void 0!==e[o]?o+'="'+e[o]+'"':""+o)+" "}return r.trim()},N=function(e,t){return"<"+e+" "+E+'="true">'+_(t)+"</"+e+">"},k=function(e,t){return t.map(function(t){var r=Object.keys(t).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).map(function(e){return void 0===t[e]?e:e+'="'+_(t[e])+'"'}).join(" ").trim(),n=t.innerHTML||t.cssText||"",o=-1===[y.TAG_NAMES.NOSCRIPT,y.TAG_NAMES.SCRIPT,y.TAG_NAMES.STYLE].indexOf(e);return"<"+e+" "+E+'="true" '+r+(o?"/>":">"+n+"</"+e+">")}).join("")},B=function(e,t){return[f.default.createElement(y.TAG_NAMES.TITLE,s({key:t},E,!0),t)]},x=function(e,t){return t.map(function(t,r){var n=s({key:r},E,!0);return Object.keys(t).forEach(function(e){var r=y.REACT_TAG_MAP[e]||e;if("innerHTML"===r||"cssText"===r){var o=t.innerHTML||t.cssText;n.dangerouslySetInnerHTML={__html:o}}else n[r]=t[e]}),f.default.createElement(e,n)})},I=function(e,t){switch(e){case y.TAG_NAMES.TITLE:return{toComponent:function(){return B(e,t)},toString:function(){return N(e,t)}};case y.TAG_NAMES.HTML:return{toComponent:function(){return t},toString:function(){return R(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return k(e,t)}}}},D=function(e){var t=e.htmlAttributes,r=e.title,n=e.baseTag,o=e.metaTags,i=e.linkTags,u=e.scriptTags,s=e.noscriptTags,a=e.styleTags;return{htmlAttributes:I(y.TAG_NAMES.HTML,t),title:I(y.TAG_NAMES.TITLE,r),base:I(y.TAG_NAMES.BASE,n),meta:I(y.TAG_NAMES.META,o),link:I(y.TAG_NAMES.LINK,i),script:I(y.TAG_NAMES.SCRIPT,u),noscript:I(y.TAG_NAMES.NOSCRIPT,s),style:I(y.TAG_NAMES.STYLE,a)}},G=function(e){var t=function(t){function r(){return o(this,r),i(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return u(r,t),a(r,[{key:"shouldComponentUpdate",value:function(e){return!(0,m.default)(this.props,e)}},{key:"render",value:function(){return f.default.createElement(e,this.props)}}],[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(f.default.Component);return t.propTypes={htmlAttributes:f.default.PropTypes.object,title:f.default.PropTypes.string,defaultTitle:f.default.PropTypes.string,titleTemplate:f.default.PropTypes.string,base:f.default.PropTypes.object,meta:f.default.PropTypes.arrayOf(f.default.PropTypes.object),link:f.default.PropTypes.arrayOf(f.default.PropTypes.object),script:f.default.PropTypes.arrayOf(f.default.PropTypes.object),noscript:f.default.PropTypes.arrayOf(f.default.PropTypes.object),style:f.default.PropTypes.arrayOf(f.default.PropTypes.object),onChangeClientState:f.default.PropTypes.func},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=D({htmlAttributes:[],title:"",baseTag:[],metaTags:[],linkTags:[],scriptTags:[],noscriptTags:[],styleTags:[]})),t},t},H=function(e){return{htmlAttributes:w(e),title:P(e),baseTag:O([y.TAG_PROPERTIES.HREF],e),metaTags:C(y.TAG_NAMES.META,[y.TAG_PROPERTIES.NAME,y.TAG_PROPERTIES.CHARSET,y.TAG_PROPERTIES.HTTPEQUIV,y.TAG_PROPERTIES.PROPERTY],e),linkTags:C(y.TAG_NAMES.LINK,[y.TAG_PROPERTIES.REL,y.TAG_PROPERTIES.HREF],e),scriptTags:C(y.TAG_NAMES.SCRIPT,[y.TAG_PROPERTIES.SRC,y.TAG_PROPERTIES.INNER_HTML],e),noscriptTags:C(y.TAG_NAMES.NOSCRIPT,[y.TAG_PROPERTIES.INNER_HTML],e),styleTags:C(y.TAG_NAMES.STYLE,[y.TAG_PROPERTIES.CSS_TEXT],e),onChangeClientState:j(e)}},q=function(e){var t=e.htmlAttributes,r=e.title,n=e.baseTag,o=e.metaTags,i=e.linkTags,u=e.scriptTags,s=e.noscriptTags,a=e.styleTags,l=e.onChangeClientState;S(t),L(r);var c={baseTag:M(y.TAG_NAMES.BASE,n),metaTags:M(y.TAG_NAMES.META,o),linkTags:M(y.TAG_NAMES.LINK,i),scriptTags:M(y.TAG_NAMES.SCRIPT,u),noscriptTags:M(y.TAG_NAMES.NOSCRIPT,s),styleTags:M(y.TAG_NAMES.STYLE,a)},f={},p={};Object.keys(c).forEach(function(e){var t=c[e],r=t.newTags,n=t.oldTags;r.length&&(f[e]=r),n.length&&(p[e]=c[e].oldTags)}),l(e,f,p)},U=(0,d.default)(H,q,D);t.default=G(U(b.default)),e.exports=t.default},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;t.TAG_NAMES={HTML:"htmlAttributes",TITLE:"title",BASE:"base",META:"meta",LINK:"link",SCRIPT:"script",NOSCRIPT:"noscript",STYLE:"style"},t.TAG_PROPERTIES={NAME:"name",CHARSET:"charset",HTTPEQUIV:"http-equiv",REL:"rel",HREF:"href",PROPERTY:"property",SRC:"src",INNER_HTML:"innerHTML",CSS_TEXT:"cssText"},t.REACT_TAG_MAP={charset:"charSet","http-equiv":"httpEquiv"}},"./node_modules/react-helmet/lib/PlainComponent.js":function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r("./node_modules/react/react.js"),l=n(a),c=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"render",value:function(){return null}}]),t}(l.default.Component);t.default=c,e.exports=t.default},"./node_modules/react-side-effect/lib/index.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r("./node_modules/react/react.js"),a=n(s),l=r("./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js"),c=n(l),f=r("./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js"),p=n(f);e.exports=function(e,t,r){function n(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function f(){h=e(d.map(function(e){return e.props})),m.canUseDOM?t(h):r&&(h=r(h))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],h=void 0,m=function(e){function t(){o(this,t),e.apply(this,arguments)}return i(t,e),t.peek=function(){return h},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=h;return h=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!p.default(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),f()},t.prototype.render=function(){return a.default.createElement(l,this.props)},u(t,null,[{key:"displayName",value:"SideEffect("+n(l)+")",enumerable:!0},{key:"canUseDOM",value:c.default.canUseDOM,enumerable:!0}]),t}(s.Component);return m}}},"./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js":function(e,t,r){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};e.exports=o},"./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js":function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var i=o.bind(t),u=0;u<r.length;u++)if(!i(r[u])||e[r[u]]!==t[r[u]])return!1;return!0}var o=Object.prototype.hasOwnProperty;e.exports=n}});