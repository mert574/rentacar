var e=Object.prototype.hasOwnProperty,t=Array.isArray,r=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),o=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r},n={arrayToObject:o,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var r=[{obj:{o:e},prop:"o"}],o=[],n=0;n<r.length;++n)for(var i=r[n],a=i.obj[i.prop],l=Object.keys(a),c=0;c<l.length;++c){var s=l[c],f=a[s];"object"==typeof f&&null!==f&&-1===o.indexOf(f)&&(r.push({obj:a,prop:s}),o.push(f))}return function(e){for(;e.length>1;){var r=e.pop(),o=r.obj[r.prop];if(t(o)){for(var n=[],i=0;i<o.length;++i)void 0!==o[i]&&n.push(o[i]);r.obj[r.prop]=n}}}(r),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,o){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===o)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var i="",a=0;a<n.length;++a){var l=n.charCodeAt(a);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?i+=n.charAt(a):l<128?i+=r[l]:l<2048?i+=r[192|l>>6]+r[128|63&l]:l<55296||l>=57344?i+=r[224|l>>12]+r[128|l>>6&63]+r[128|63&l]:(a+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(a)),i+=r[240|l>>18]+r[128|l>>12&63]+r[128|l>>6&63]+r[128|63&l])}return i},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function r(n,i,a){if(!i)return n;if("object"!=typeof i){if(t(n))n.push(i);else{if(!n||"object"!=typeof n)return[n,i];(a&&(a.plainObjects||a.allowPrototypes)||!e.call(Object.prototype,i))&&(n[i]=!0)}return n}if(!n||"object"!=typeof n)return[n].concat(i);var l=n;return t(n)&&!t(i)&&(l=o(n,a)),t(n)&&t(i)?(i.forEach((function(t,o){if(e.call(n,o)){var i=n[o];i&&"object"==typeof i&&t&&"object"==typeof t?n[o]=r(i,t,a):n.push(t)}else n[o]=t})),n):Object.keys(i).reduce((function(t,o){var n=i[o];return e.call(t,o)?t[o]=r(t[o],n,a):t[o]=n,t}),l)}},i=String.prototype.replace,a=/%20/g,l={RFC1738:"RFC1738",RFC3986:"RFC3986"},c=n.assign({default:l.RFC3986,formatters:{RFC1738:function(e){return i.call(e,a,"+")},RFC3986:function(e){return String(e)}}},l),s=Object.prototype.hasOwnProperty,f={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},u=Array.isArray,p=Array.prototype.push,d=function(e,t){p.apply(e,u(t)?t:[t])},y=Date.prototype.toISOString,h=c.default,m={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:h,formatter:c.formatters[h],indices:!1,serializeDate:function(e){return y.call(e)},skipNulls:!1,strictNullHandling:!1},b=function e(t,r,o,i,a,l,c,s,f,p,y,h,b){var g,v=t;if("function"==typeof c?v=c(r,v):v instanceof Date?v=p(v):"comma"===o&&u(v)&&(v=v.join(",")),null===v){if(i)return l&&!h?l(r,m.encoder,b,"key"):r;v=""}if("string"==typeof(g=v)||"number"==typeof g||"boolean"==typeof g||"symbol"==typeof g||"bigint"==typeof g||n.isBuffer(v))return l?[y(h?r:l(r,m.encoder,b,"key"))+"="+y(l(v,m.encoder,b,"value"))]:[y(r)+"="+y(String(v))];var j,O=[];if(void 0===v)return O;if(u(c))j=c;else{var w=Object.keys(v);j=s?w.sort(s):w}for(var N=0;N<j.length;++N){var x=j[N];a&&null===v[x]||(u(v)?d(O,e(v[x],"function"==typeof o?o(r,x):r,o,i,a,l,c,s,f,p,y,h,b)):d(O,e(v[x],r+(f?"."+x:"["+x+"]"),o,i,a,l,c,s,f,p,y,h,b)))}return O},g=Object.prototype.hasOwnProperty,v=Array.isArray,j={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},O=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},w=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/g,i=r.depth>0&&/(\[[^[\]]*])/.exec(o),a=i?o.slice(0,i.index):o,l=[];if(a){if(!r.plainObjects&&g.call(Object.prototype,a)&&!r.allowPrototypes)return;l.push(a)}for(var c=0;r.depth>0&&null!==(i=n.exec(o))&&c<r.depth;){if(c+=1,!r.plainObjects&&g.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+o.slice(i.index)+"]"),function(e,t,r){for(var o=t,n=e.length-1;n>=0;--n){var i,a=e[n];if("[]"===a&&r.parseArrays)i=[].concat(o);else{i=r.plainObjects?Object.create(null):{};var l="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&a!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=o:i[l]=o:i={0:o}}o=i}return o}(l,t,r)}},N={formats:c,parse:function(e,t){var r=function(e){if(!e)return j;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?j.charset:e.charset;return{allowDots:void 0===e.allowDots?j.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:j.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:j.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:j.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:j.comma,decoder:"function"==typeof e.decoder?e.decoder:j.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:j.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:j.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:j.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:j.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:j.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:j.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?function(e,t){var r,o={},i=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,l=i.split(t.delimiter,a),c=-1,s=t.charset;if(t.charsetSentinel)for(r=0;r<l.length;++r)0===l[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===l[r]?s="utf-8":"utf8=%26%2310003%3B"===l[r]&&(s="iso-8859-1"),c=r,r=l.length);for(r=0;r<l.length;++r)if(r!==c){var f,u,p=l[r],d=p.indexOf("]="),y=-1===d?p.indexOf("="):d+1;-1===y?(f=t.decoder(p,j.decoder,s,"key"),u=t.strictNullHandling?null:""):(f=t.decoder(p.slice(0,y),j.decoder,s,"key"),u=t.decoder(p.slice(y+1),j.decoder,s,"value")),u&&t.interpretNumericEntities&&"iso-8859-1"===s&&(u=O(u)),u&&"string"==typeof u&&t.comma&&u.indexOf(",")>-1&&(u=u.split(",")),p.indexOf("[]=")>-1&&(u=v(u)?[u]:u),g.call(o,f)?o[f]=n.combine(o[f],u):o[f]=u}return o}(e,r):e,i=r.plainObjects?Object.create(null):{},a=Object.keys(o),l=0;l<a.length;++l){var c=a[l],s=w(c,o[c],r);i=n.merge(i,s,r)}return n.compact(i)},stringify:function(e,t){var r,o=e,n=function(e){if(!e)return m;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||m.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=c.default;if(void 0!==e.format){if(!s.call(c.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=c.formatters[r],n=m.filter;return("function"==typeof e.filter||u(e.filter))&&(n=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:m.addQueryPrefix,allowDots:void 0===e.allowDots?m.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:m.charsetSentinel,delimiter:void 0===e.delimiter?m.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:m.encode,encoder:"function"==typeof e.encoder?e.encoder:m.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:m.encodeValuesOnly,filter:n,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:m.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:m.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:m.strictNullHandling}}(t);"function"==typeof n.filter?o=(0,n.filter)("",o):u(n.filter)&&(r=n.filter);var i,a=[];if("object"!=typeof o||null===o)return"";i=t&&t.arrayFormat in f?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var l=f[i];r||(r=Object.keys(o)),n.sort&&r.sort(n.sort);for(var p=0;p<r.length;++p){var y=r[p];n.skipNulls&&null===o[y]||d(a,b(o[y],y,l,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var h=a.join(n.delimiter),g=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),h.length>0?g+h:""}};export{N as q};