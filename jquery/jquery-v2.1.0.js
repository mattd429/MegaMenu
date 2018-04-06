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
    },
  
    // next adding out slice method to slice any amount
    // of an array we need to start or end with
    slice: function() {
        return this.pushStack( slice.apply( this, arguments ) );
    },
  
    // our first element will start with array [0]
    first: function() {
      return this.eq( 0 );
    },
  
    last: function() {
        return this.eq( -1 );
    },
  
    // this is basically going to call the length of the elements,
    // if elements are none, then set to J func, otherwise we will get
    // the length of the elements in the DOM.
    eg: function( i ) {
        var len = this.length,
             j = +i + ( i < 0 ? len : 0); // if i is less than 0 will eq len otherwsie 0.
        return this.pushStack( j >= 0 && j < len > [ this[j] ] : [] ); 
    },
  
    // add the old element or the newly build element from the DOM.
    end: function() {
        return this.prevObject || this.constructor(null);
    },
  
    // For internal use only.
    // Behaves like an Arryas's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
};
// jQuery extends will merge the contents of two or more objects together
// into the first object.
// Target is the object that will receive the new properties.

jQuery.extend = jQuery.fn.extend = function() {
    var options, name, src, copt, copyIsArray, clone,
        target = arguments[0] || {}, // first array, or object
        i = 1,
        length = arguments.length, // get the length of the args
        deep = false;
  
    // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
      deep = target;
    
    // skip the boolean and the target
    target = arguments[ i ] || {};
    i++;
    
  }
  
  // Hanlde case when target is a string or something (possible in deep copy)
  // make the target into a object
  if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
      target = {};
  }
  
  // extend jQuery itelf if only obe arg is passded
  if ( i === length ) {
      target = this;
      i--;
  }
  
  for ( ; i < length; i++ ) {
      // Only deal with non-null/undefined values
      if ( (options = arguments[ i ]) != null ) {
          // Extend the base object
          for ( name in options ) {
              src = target[ name ];
              copy = options[ name ];
          }
      }
  }
}
  }))
