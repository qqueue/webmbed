(function(){
  "use strict";
  var webmbed, res$, i$, len$, c, MAGIC, out$ = typeof exports != 'undefined' && exports || this;
  out$.webmbed = webmbed = {};
  res$ = [];
  for (i$ = 0, len$ = '\xff\xd9webmbed'.length; i$ < len$; ++i$) {
    c = '\xff\xd9webmbed'[i$];
    res$.push(c.charCodeAt(0));
  }
  MAGIC = res$;
  webmbed.extract = function(file, cb){
    var x$, f;
    x$ = f = new FileReader;
    x$.readAsArrayBuffer(file);
    f.addEventListener('load', function(){
      var data, pos, i, to$, j, ref$, len$, c;
      data = new Uint8Array(this.result);
      pos = -1;
      search: for (i = 0, to$ = data.length; i < to$; ++i) {
        for (j = 0, len$ = (ref$ = MAGIC).length; j < len$; ++j) {
          c = ref$[j];
          if (data[i + j] !== c) {
            continue search;
          }
        }
        pos = i;
        break;
      }
      if (pos === -1) {
        cb(new Error("Couldn't find anything MAGICAL about this image"));
      } else {
        cb(null, new Blob([data.subarray(pos + MAGIC.length)], {
          type: 'video/webm'
        }));
      }
    });
  };
}).call(this);
