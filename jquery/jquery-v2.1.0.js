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

jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
  
    constructor: jQuery,
  
    // Start with an empty selector
    selector: "",
  
    // The default length of a jQuery object is 0
    length: 0,
    
    // convert array-like objects to an array
    toArray: function() {
        return slice.call( this );
    },
  
    // Get the Nth element in the matches element set OR
    // Get the whole matches element set as a clean array
    get: function( num ) {
        return num != null ?
            
          // Return just the one element from the set
          (num < 0 ? this[ num + this.length ] : this[ num ] ) :
        
          // return all the elements in a clean array
          slice.call( this );
    },
  
    // Take an array of elements from the DOM and push it onto the stack
    // ( return the new matches element set)
    pushStack: function ( elems ) {
        
      // Build a new jQuery matches element set
      var ret = jQuery.merge( this.constructor(), elems );
      
      // Add the old object onto the stack (as a reference)
      ret.prevObject = this;
      ret.context = this.context;
      
      // return the newly-formed element set
      return ret;
    },
  
    // Execute a callback for every element in the matched set.
    // (You can seed the arguments with an array of args, but this is
    // only used internally.)
    each: function( callback, args ) {
      return jQuery.each( this, callback, args );
    },
  
    // pass each element in the current matches set through a function
    // producing a new jQuery object containing the return values.
    map: function( callback ) {
      return this.pushStack( jQuery.map( this, function( elem, i ) {
          return callback.call( elem, i, elem );
      }));
    } 
}
  }))
