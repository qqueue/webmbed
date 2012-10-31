(function(){
  "use strict";
  var webmbed, MAGIC, MAGIC_LEN, out$ = typeof exports != 'undefined' && exports || this;
  out$.webmbed = webmbed = {};
  MAGIC = /\xff\xd9webmbed/;
  MAGIC_LEN = MAGIC.toSource().length;
  webmbed.extract = function(file, cb){
    var x$, f;
    x$ = f = new FileReader;
    x$.readAsBinaryString(file);
    f.addEventListener('load', function(){
      var pos;
      pos = this.result.search(MAGIC);
      if (pos === -1) {
        cb(new Error("Couldn't find anything MAGICAL about this image"));
        return;
      }
      cb(null, new Blob([pos.slice(pos + MAGIC_LEN)], {
        type: 'video/webm'
      }));
    });
  };
}).call(this);
