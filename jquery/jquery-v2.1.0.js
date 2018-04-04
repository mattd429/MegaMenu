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
// Pass this is window is not defined yet  
}(typeof window !== "undefined" ? window : this, functon( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
  
var arr = [];
  
var slice = arr.slice;
  
var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;  
  
var class2Type = {};
 
// convert to String   
var toString = class2Type.toString;
  
var hasOwn = class2type.hasOwnProperty;
  
var trim = "".trim;
  
var support = {};
  
  
var
    // Use the correct document accordingly with window argument (sandbox)
    document = window.document,
  
    version = "2.1.0",
  
    // Define a local copy of jQuery
    jQuery = function( selector, context ) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called  ( just allow error to be thrown if not included)
        return new jQuery.fn.init( selector, context );
    },
      
    // Matches dashed string for camelizing
    rmsPrefix = /^-ms-/,
    rdashAlpha = /-([\da-z])/gi,
      
    // Used by jQuery.camelCase as callback to replace()
    fcamelCase = function( all, letter ) {
        return letter.toUpperCase();
    };
  }))
