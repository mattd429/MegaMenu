/*!
 * jQuery JavaScript Library v2.1.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:10Z
 */

(function( global, factory ) {

  if ( typeof module === "object" && typeof module.exports === "object" ) {
      // For CommonJS and CommonJS-Like environments where a proper window is present,
      // execute the factory($) and get jQuery
      // For environments tat do not inherently posses a window with a document
      // (such as Node.js), expose a jQuery-making factory as module.exports
      // This accentuates the need for the creation of a real window
      // e.g. var jQuery = require("jquery")(window);
      // See ticket #14549 for more infor
      module.exports = global.document ?
          factory( global, true ) :
          function ( w ) {
              if ( !w.document ) {
                  throw new Error("Jquery requies a window with a document" );
              }
              return factory( w );
        };
  } else {
      factory( global );
  } 
})
