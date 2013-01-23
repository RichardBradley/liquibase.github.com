var DOKU_BASE   = '/';var DOKU_TPL    = '/lib/tpl/battlehorse/';var alertText   = 'Please enter the text you want to format.\nIt will be appended to the end of the document.';var notSavedYet = 'Unsaved changes will be lost.\nReally continue?';var reallyDel   = 'Really delete selected item(s)?';LANG = {"keepopen":"Keep window open on selection","hidedetails":"Hide Details","nosmblinks":"Linking to Windows shares only works in Microsoft Internet Explorer.\nYou still can copy and paste the link.","mu_btn":"Upload multiple files at once","plugins":[]};


/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/helpers.js XXXXXXXXXX */

/**
 * Differrent helper functions
 *
 * @author Ilya Lebedev <ilya@lebedev.net>
 * @license LGPL
 */
//-----------------------------------------------------------------------------
//  Variable/property checks
//-----------------------------------------------------------------------------
/**
 *  Checks if property is undefined
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isUndefined (prop /* :Object */) /* :Boolean */ {
  return (typeof prop == 'undefined');
}
/**
 *  Checks if property is function
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isFunction (prop /* :Object */) /* :Boolean */ {
  return (typeof prop == 'function');
}
/**
 *  Checks if property is string
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isString (prop /* :Object */) /* :Boolean */ {
  return (typeof prop == 'string');
}
/**
 *  Checks if property is number
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isNumber (prop /* :Object */) /* :Boolean */ {
  return (typeof prop == 'number');
}
/**
 *  Checks if property is the calculable number
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isNumeric (prop /* :Object */) /* :Boolean */ {
  return isNumber(prop)&&!isNaN(prop)&&isFinite(prop);
}
/**
 *  Checks if property is array
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isArray (prop /* :Object */) /* :Boolean */ {
  return (prop instanceof Array);
}
/**
 *  Checks if property is regexp
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isRegExp (prop /* :Object */) /* :Boolean */ {
  return (prop instanceof RegExp);
}
/**
 *  Checks if property is a boolean value
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isBoolean (prop /* :Object */) /* :Boolean */ {
  return ('boolean' == typeof prop);
}
/**
 *  Checks if property is a scalar value (value that could be used as the hash key)
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isScalar (prop /* :Object */) /* :Boolean */ {
  return isNumeric(prop)||isString(prop);
}
/**
 *  Checks if property is empty
 *
 *  @param {Object} prop value to check
 *  @return {Boolean} true if matched
 *  @scope public
 */
function isEmpty (prop /* :Object */) /* :Boolean */ {
  if (isBoolean(prop)) return false;
  if (isRegExp(prop) && new RegExp("").toString() == prop.toString()) return true;
  if (isString(prop) || isNumber(prop)) return !prop;
  if (Boolean(prop)&&false != prop) {
    for (var i in prop) if(prop.hasOwnProperty(i)) return false
  }
  return true;
}

/**
 *  Checks if property is derived from prototype, applies method if it is not exists
 *
 *  @param string property name
 *  @return bool true if prototyped
 *  @access public
 */
if ('undefined' == typeof Object.hasOwnProperty) {
  Object.prototype.hasOwnProperty = function (prop) {
    return !('undefined' == typeof this[prop] || this.constructor && this.constructor.prototype[prop] && this[prop] === this.constructor.prototype[prop]);
  }
}

/**
 * Very simplistic Flash plugin check, probably works for Flash 8 and higher only
 */
function hasFlash(version){
    var ver = 0;
    try{
        if(navigator.plugins != null && navigator.plugins.length > 0){
           ver = navigator.plugins["Shockwave Flash"].description.split(' ')[2].split('.')[0];
        }else{
           var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
           ver = axo.GetVariable("$version").split(' ')[1].split(',')[0];
        }
    }catch(e){ }

    if(ver >= version) return true;
    return false;
}


/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/helpers.js XXXXXXXXXX */



/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/events.js XXXXXXXXXX */

// written by Dean Edwards, 2005
// with input from Tino Zijdel

// http://dean.edwards.name/weblog/2005/10/add-event/

function addEvent(element, type, handler) {
    // assign each event handler a unique ID
    if (!handler.$$guid) handler.$$guid = addEvent.guid++;
    // create a hash table of event types for the element
    if (!element.events) element.events = {};
    // create a hash table of event handlers for each element/event pair
    var handlers = element.events[type];
    if (!handlers) {
        handlers = element.events[type] = {};
        // store the existing event handler (if there is one)
        if (element["on" + type]) {
            handlers[0] = element["on" + type];
        }
    }
    // store the event handler in the hash table
    handlers[handler.$$guid] = handler;
    // assign a global event handler to do all the work
    element["on" + type] = handleEvent;
};
// a counter used to create unique IDs
addEvent.guid = 1;

function removeEvent(element, type, handler) {
    // delete the event handler from the hash table
    if (element.events && element.events[type]) {
        delete element.events[type][handler.$$guid];
    }
};

function handleEvent(event) {
    var returnValue = true;
    // grab the event object (IE uses a global event object)
    event = event || fixEvent(window.event);
    // get a reference to the hash table of event handlers
    var handlers = this.events[event.type];
    // execute each event handler
    for (var i in handlers) {
        if (!handlers.hasOwnProperty(i)) continue;
        this.$$handleEvent = handlers[i];
        if (this.$$handleEvent(event) === false) {
            returnValue = false;
        }
    }
    return returnValue;
};

function fixEvent(event) {
    // add W3C standard event methods
    event.preventDefault = fixEvent.preventDefault;
    event.stopPropagation = fixEvent.stopPropagation;
    // fix target
    event.target = event.srcElement;
    return event;
};
fixEvent.preventDefault = function() {
    this.returnValue = false;
};
fixEvent.stopPropagation = function() {
    this.cancelBubble = true;
};


/**
 * Pseudo event handler to be fired after the DOM was parsed or
 * on window load at last.
 *
 * @author based upon some code by Dean Edwards
 * @author Dean Edwards
 * @link   http://dean.edwards.name/weblog/2006/06/again/
 */
window.fireoninit = function() {
  // quit if this function has already been called
  if (arguments.callee.done) return;
  // flag this function so we don't do the same thing twice
  arguments.callee.done = true;
  // kill the timer
  if (_timer) {
     clearInterval(_timer);
     _timer = null;
  }

  if (typeof window.oninit == 'function') {
        window.oninit();
  }
};

/**
 * Run the fireoninit function as soon as possible after
 * the DOM was loaded, using different methods for different
 * Browsers
 *
 * @author Dean Edwards
 * @link   http://dean.edwards.name/weblog/2006/06/again/
 */
  // for Mozilla
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", window.fireoninit, null);
  }

  // for Internet Explorer (using conditional comments)
  /*@cc_on @*/
  /*@if (@_win32)
    document.write("<scr" + "ipt id=\"__ie_init\" defer=\"true\" src=\"//:\"><\/script>");
    var script = document.getElementById("__ie_init");
    script.onreadystatechange = function() {
        if (this.readyState == "complete") {
            window.fireoninit(); // call the onload handler
        }
    };
  /*@end @*/

  // for Safari
  if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            window.fireoninit(); // call the onload handler
        }
    }, 10);
  }

  // for other browsers
  window.onload = window.fireoninit;


/**
 * This is a pseudo Event that will be fired by the fireoninit
 * function above.
 *
 * Use addInitEvent to bind to this event!
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @see fireoninit()
 */
window.oninit = function(){};

/**
 * Bind a function to the window.init pseudo event
 *
 * @author Simon Willison
 * @see http://simon.incutio.com/archive/2004/05/26/addLoadEvent
 */
function addInitEvent(func) {
  var oldoninit = window.oninit;
  if (typeof window.oninit != 'function') {
    window.oninit = func;
  } else {
    window.oninit = function() {
      oldoninit();
      func();
    };
  }
}




/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/events.js XXXXXXXXXX */



/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/cookie.js XXXXXXXXXX */

/**
 * Handles the cookie used by several JavaScript functions
 *
 * Only a single cookie is written and read. You may only save
 * sime name-value pairs - no complex types!
 *
 * You should only use the getValue and setValue methods
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
DokuCookie = {
    data: Array(),
    name: 'DOKU_PREFS',

    /**
     * Save a value to the cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    setValue: function(key,val){
        DokuCookie.init();
        DokuCookie.data[key] = val;

        // prepare expire date
        var now = new Date();
        DokuCookie.fixDate(now);
        now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000); //expire in a year

        //save the whole data array
        var text = '';
        for(var key in DokuCookie.data){
            if (!DokuCookie.data.hasOwnProperty(key)) continue;
            text += '#'+escape(key)+'#'+DokuCookie.data[key];
        }
        DokuCookie.setCookie(DokuCookie.name,text.substr(1),now,DOKU_BASE);
    },

    /**
     * Get a Value from the Cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    getValue: function(key){
        DokuCookie.init();
        return DokuCookie.data[key];
    },

    /**
     * Loads the current set cookie
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    init: function(){
        if(DokuCookie.data.length) return;
        var text  = DokuCookie.getCookie(DokuCookie.name);
        if(text){
            var parts = text.split('#');
            for(var i=0; i<parts.length; i+=2){
                DokuCookie.data[unescape(parts[i])] = unescape(parts[i+1]);
            }
        }
    },

    /**
     * This sets a cookie by JavaScript
     *
     * @link http://www.webreference.com/js/column8/functions.html
     */
    setCookie: function(name, value, expires, path, domain, secure) {
        var curCookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires.toGMTString() : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
        document.cookie = curCookie;
    },

    /**
     * This reads a cookie by JavaScript
     *
     * @link http://www.webreference.com/js/column8/functions.html
     */
    getCookie: function(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin !== 0){ return null; }
        } else {
            begin += 2;
        }
        var end = document.cookie.indexOf(";", begin);
        if (end == -1){
            end = dc.length;
        }
        return unescape(dc.substring(begin + prefix.length, end));
    },

    /**
     * This is needed for the cookie functions
     *
     * @link http://www.webreference.com/js/column8/functions.html
     */
    fixDate: function(date) {
        var base = new Date(0);
        var skew = base.getTime();
        if (skew > 0){
            date.setTime(date.getTime() - skew);
        }
    }
};


/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/cookie.js XXXXXXXXXX */



/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/script.js XXXXXXXXXX */

/**
 * Some of these scripts were taken from wikipedia.org and were modified for DokuWiki
 */

/**
 * Some browser detection
 */
var clientPC  = navigator.userAgent.toLowerCase(); // Get client info
var is_macos  = navigator.appVersion.indexOf('Mac') != -1;
var is_gecko  = ((clientPC.indexOf('gecko')!=-1) && (clientPC.indexOf('spoofer')==-1) &&
                (clientPC.indexOf('khtml') == -1) && (clientPC.indexOf('netscape/7.0')==-1));
var is_safari = ((clientPC.indexOf('AppleWebKit')!=-1) && (clientPC.indexOf('spoofer')==-1));
var is_khtml  = (navigator.vendor == 'KDE' || ( document.childNodes && !document.all && !navigator.taintEnabled ));
if (clientPC.indexOf('opera')!=-1) {
    var is_opera = true;
    var is_opera_preseven = (window.opera && !document.childNodes);
    var is_opera_seven = (window.opera && document.childNodes);
}

// prepare empty toolbar for checks by lazy plugins
var toolbar = '';

/**
 * Handy shortcut to document.getElementById
 *
 * This function was taken from the prototype library
 *
 * @link http://prototype.conio.net/
 */
function $() {
  var elements = new Array();

  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;

    elements.push(element);
  }

  return elements;
}

/**
 * Simple function to check if a global var is defined
 *
 * @author Kae Verens
 * @link http://verens.com/archives/2005/07/25/isset-for-javascript/#comment-2835
 */
function isset(varname){
  return(typeof(window[varname])!='undefined');
}

/**
 * Select elements by their class name
 *
 * @author Dustin Diaz <dustin [at] dustindiaz [dot] com>
 * @link   http://www.dustindiaz.com/getelementsbyclass/
 */
function getElementsByClass(searchClass,node,tag) {
    var classElements = new Array();
    if ( node == null )
        node = document;
    if ( tag == null )
        tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
            classElements[j] = els[i];
            j++;
        }
    }
    return classElements;
}

/**
 * Get the X offset of the top left corner of the given object
 *
 * @link http://www.quirksmode.org/index.html?/js/findpos.html
 */
function findPosX(object){
  var curleft = 0;
  var obj = $(object);
  if (obj.offsetParent){
    while (obj.offsetParent){
      curleft += obj.offsetLeft;
      obj = obj.offsetParent;
    }
  }
  else if (obj.x){
    curleft += obj.x;
  }
  return curleft;
} //end findPosX function

/**
 * Get the Y offset of the top left corner of the given object
 *
 * @link http://www.quirksmode.org/index.html?/js/findpos.html
 */
function findPosY(object){
  var curtop = 0;
  var obj = $(object);
  if (obj.offsetParent){
    while (obj.offsetParent){
      curtop += obj.offsetTop;
      obj = obj.offsetParent;
    }
  }
  else if (obj.y){
    curtop += obj.y;
  }
  return curtop;
} //end findPosY function

/**
 * Escape special chars in JavaScript
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function jsEscape(text){
    var re=new RegExp("\\\\","g");
    text=text.replace(re,"\\\\");
    re=new RegExp("'","g");
    text=text.replace(re,"\\'");
    re=new RegExp('"',"g");
    text=text.replace(re,'&quot;');
    re=new RegExp("\\\\\\\\n","g");
    text=text.replace(re,"\\n");
    return text;
}

/**
 * This function escapes some special chars
 * @deprecated by above function
 */
function escapeQuotes(text) {
  var re=new RegExp("'","g");
  text=text.replace(re,"\\'");
  re=new RegExp('"',"g");
  text=text.replace(re,'&quot;');
  re=new RegExp("\\n","g");
  text=text.replace(re,"\\n");
  return text;
}

/**
 * Adds a node as the first childenode to the given parent
 *
 * @see appendChild()
 */
function prependChild(parent,element) {
    if(!parent.firstChild){
        parent.appendChild(element);
    }else{
        parent.insertBefore(element,parent.firstChild);
    }
}

/**
 * Prints a animated gif to show the search is performed
 *
 * Because we need to modify the DOM here before the document is loaded
 * and parsed completely we have to rely on document.write()
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function showLoadBar(){

  document.write('<img src="'+DOKU_BASE+'lib/images/loading.gif" '+
                 'width="150" height="12" alt="..." />');

  /* this does not work reliable in IE
  obj = $(id);

  if(obj){
    obj.innerHTML = '<img src="'+DOKU_BASE+'lib/images/loading.gif" '+
                    'width="150" height="12" alt="..." />';
    obj.style.display="block";
  }
  */
}

/**
 * Disables the animated gif to show the search is done
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
function hideLoadBar(id){
  obj = $(id);
  if(obj) obj.style.display="none";
}

/**
 * Adds the toggle switch to the TOC
 */
function addTocToggle() {
    if(!document.getElementById) return;
    var header = $('toc__header');
    if(!header) return;

    var obj          = document.createElement('span');
    obj.id           = 'toc__toggle';
    obj.innerHTML    = '<span>&minus;</span>';
    obj.className    = 'toc_close';
    obj.style.cursor = 'pointer';

    prependChild(header,obj);
    obj.parentNode.onclick = toggleToc;
    try {
       obj.parentNode.style.cursor = 'pointer';
       obj.parentNode.style.cursor = 'hand';
    }catch(e){}
}

/**
 * This toggles the visibility of the Table of Contents
 */
function toggleToc() {
  var toc = $('toc__inside');
  var obj = $('toc__toggle');
  if(toc.style.display == 'none') {
    toc.style.display   = '';
    obj.innerHTML       = '<span>&minus;</span>';
    obj.className       = 'toc_close';
  } else {
    toc.style.display   = 'none';
    obj.innerHTML       = '<span>+</span>';
    obj.className       = 'toc_open';
  }
}

/**
 * This enables/disables checkboxes for acl-administration
 *
 * @author Frank Schubert <frank@schokilade.de>
 */
function checkAclLevel(){
  if(document.getElementById) {
    var scope = $('acl_scope').value;

    //check for namespace
    if( (scope.indexOf(":*") > 0) || (scope == "*") ){
      document.getElementsByName('acl_checkbox[4]')[0].disabled=false;
      document.getElementsByName('acl_checkbox[8]')[0].disabled=false;
    }else{
      document.getElementsByName('acl_checkbox[4]')[0].checked=false;
      document.getElementsByName('acl_checkbox[8]')[0].checked=false;

      document.getElementsByName('acl_checkbox[4]')[0].disabled=true;
      document.getElementsByName('acl_checkbox[8]')[0].disabled=true;
    }
  }
}

/**
 * Display an insitu footnote popup
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 * @author Chris Smith <chris@jalakai.co.uk>
 */
function footnote(e){
    var obj = e.target;
    var id = obj.id.substr(5);

    // get or create the footnote popup div
    var fndiv = $('insitu__fn');
    if(!fndiv){
        fndiv = document.createElement('div');
        fndiv.id        = 'insitu__fn';
        fndiv.className = 'insitu-footnote JSpopup dokuwiki';

        // autoclose on mouseout - ignoring bubbled up events
        addEvent(fndiv,'mouseout',function(e){
            if(e.target != fndiv){
                e.stopPropagation();
                return;
            }
            // check if the element was really left
            if(e.pageX){        // Mozilla
                var bx1 = findPosX(fndiv);
                var bx2 = bx1 + fndiv.offsetWidth;
                var by1 = findPosY(fndiv);
                var by2 = by1 + fndiv.offsetHeight;
                var x = e.pageX;
                var y = e.pageY;
                if(x > bx1 && x < bx2 && y > by1 && y < by2){
                    // we're still inside boundaries
                    e.stopPropagation();
                    return;
                }
            }else{              // IE
                if(e.offsetX > 0 && e.offsetX < fndiv.offsetWidth-1 &&
                   e.offsetY > 0 && e.offsetY < fndiv.offsetHeight-1){
                    // we're still inside boundaries
                    e.stopPropagation();
                    return;
                }
            }
            // okay, hide it
            fndiv.style.display='none';
        });
        document.body.appendChild(fndiv);
    }

    // locate the footnote anchor element
    var a = $( "fn__"+id );
    if (!a){ return; }

    // anchor parent is the footnote container, get its innerHTML
    var content = new String (a.parentNode.parentNode.innerHTML);

    // strip the leading content anchors and their comma separators
    content = content.replace(/<sup>.*<\/sup>/gi, '');
    content = content.replace(/^\s+(,\s+)+/,'');

    // prefix ids on any elements with "insitu__" to ensure they remain unique
    content = content.replace(/\bid=\"(.*?)\"/gi,'id="insitu__$1');

    // now put the content into the wrapper
    fndiv.innerHTML = content;

    // position the div and make it visible
    var x; var y;
    if(e.pageX){        // Mozilla
        x = e.pageX;
        y = e.pageY;
    }else{              // IE
        x = e.offsetX;
        y = e.offsetY;
    }
    fndiv.style.position = 'absolute';
    fndiv.style.left = (x+2)+'px';
    fndiv.style.top  = (y+2)+'px';
    fndiv.style.display = '';
}

/**
 * Add the event handlers to footnotes
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
addInitEvent(function(){
    var elems = getElementsByClass('fn_top',null,'a');
    for(var i=0; i<elems.length; i++){
        addEvent(elems[i],'mouseover',function(e){footnote(e);});
    }
});

/**
 * Add the edit window size controls
 */
function initSizeCtl(ctlid,edid){
    if(!document.getElementById){ return; }

    var ctl      = $(ctlid);
    var textarea = $(edid);
    if(!ctl || !textarea) return;

    var hgt = DokuCookie.getValue('sizeCtl');
    if(hgt){
      textarea.style.height = hgt;
    }else{
      textarea.style.height = '300px';
    }

    var wrp = DokuCookie.getValue('wrapCtl');
    if(wrp){
      setWrap(textarea, wrp);
    } // else use default value

    var l = document.createElement('img');
    var s = document.createElement('img');
    var w = document.createElement('img');
    l.src = DOKU_BASE+'lib/images/larger.gif';
    s.src = DOKU_BASE+'lib/images/smaller.gif';
    w.src = DOKU_BASE+'lib/images/wrap.gif';
    addEvent(l,'click',function(){sizeCtl(edid,100);});
    addEvent(s,'click',function(){sizeCtl(edid,-100);});
    addEvent(w,'click',function(){toggleWrap(edid);});
    ctl.appendChild(l);
    ctl.appendChild(s);
    ctl.appendChild(w);
}

/**
 * This sets the vertical size of the editbox
 */
function sizeCtl(edid,val){
  var textarea = $(edid);
  var height = parseInt(textarea.style.height.substr(0,textarea.style.height.length-2));
  height += val;
  textarea.style.height = height+'px';

  DokuCookie.setValue('sizeCtl',textarea.style.height);
}

/**
 * Toggle the wrapping mode of a textarea
 */
function toggleWrap(edid){
    var textarea = $(edid);
    var wrap = textarea.getAttribute('wrap');
    if(wrap && wrap.toLowerCase() == 'off'){
        setWrap(textarea, 'soft');
    }else{
        setWrap(textarea, 'off');
    }

    DokuCookie.setValue('wrapCtl',textarea.getAttribute('wrap'));
}

/**
 * Set the wrapping mode of a textarea
 *
 * @author Fluffy Convict <fluffyconvict@hotmail.com>
 * @author <shutdown@flashmail.com>
 * @link   http://news.hping.org/comp.lang.javascript.archive/12265.html
 * @link   https://bugzilla.mozilla.org/show_bug.cgi?id=41464
 */
function setWrap(textarea, wrapAttrValue){
    textarea.setAttribute('wrap', wrapAttrValue);

    // Fix display for mozilla
    var parNod = textarea.parentNode;
    var nxtSib = textarea.nextSibling;
    parNod.removeChild(textarea);
    parNod.insertBefore(textarea, nxtSib);
}

/**
 * Handler to close all open Popups
 */
function closePopups(){
  if(!document.getElementById){ return; }

  var divs = document.getElementsByTagName('div');
  for(var i=0; i < divs.length; i++){
    if(divs[i].className.indexOf('JSpopup') != -1){
            divs[i].style.display = 'none';
    }
  }
}

/**
 * Looks for an element with the ID scroll__here at scrolls to it
 */
function scrollToMarker(){
    var obj = $('scroll__here');
    if(obj) obj.scrollIntoView();
}

/**
 * Looks for an element with the ID focus__this at sets focus to it
 */
function focusMarker(){
    var obj = $('focus__this');
    if(obj) obj.focus();
}

/**
 * Remove messages
 */
function cleanMsgArea(){
    var elems = getElementsByClass('(success|info|error)',document,'div');
    if(elems){
        for(var i=0; i<elems.length; i++){
            elems[i].style.display = 'none';
        }
    }
}

/**
 * disable multiple revisions checkboxes if two are checked
 *
 * @author Anika Henke <anika@selfthinker.org>
 */
addInitEvent(function(){
    var revForm = $('page__revisions');
    if (!revForm) return;
    var elems = revForm.elements;
    var countTicks = 0;
    for (var i=0; i<elems.length; i++) {
        var input1 = elems[i];
        if (input1.type=='checkbox') {
            addEvent(input1,'click',function(e){
                if (this.checked) countTicks++;
                else countTicks--;
                for (var j=0; j<elems.length; j++) {
                    var input2 = elems[j];
                    if (countTicks >= 2) input2.disabled = (input2.type=='checkbox' && !input2.checked);
                    else input2.disabled = (input2.type!='checkbox');
                }
            });
        }
    }
});

/**
 * Add the event handler to the actiondropdown
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */
addInitEvent(function(){
    var selector = $('action__selector');
    if(!selector) return;

    addEvent(selector,'change',function(e){
        this.form.submit();
    });

    $('action__selectorbtn').style.display = 'none';
});

/**
 * Display error for Windows Shares on browsers other than IE
 *
 * Michael Klier <chi@chimeric.de>
 */
function checkWindowsShares() {
    var elems = getElementsByClass('windows',document,'a');
    if(elems){
        for(var i=0; i<elems.length; i++){
            var share = elems[i];
            addEvent(share,'click',function(){
                if(document.all == null) {
                    alert(LANG['nosmblinks']);
                }
            });
        }
    }
}

/**
 * Add the event handler for the Windows Shares check
 *
 * Michael Klier <chi@chimeric.de>
 */
addInitEvent(function(){
    checkWindowsShares();
});


/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/tw-sack.js XXXXXXXXXX */

/* Simple AJAX Code-Kit (SACK) */
/* ©2005 Gregory Wild-Smith */
/* www.twilightuniverse.com */
/* Software licenced under a modified X11 licence, see documentation or authors website for more details */

function sack(file){
  this.AjaxFailedAlert = "Your browser does not support the enhanced functionality of this website, and therefore you will have an experience that differs from the intended one.\n";
  this.requestFile = file;
  this.method = "POST";
  this.URLString = "";
  this.encodeURIString = true;
  this.execute = false;

  this.onLoading = function() { };
  this.onLoaded = function() { };
  this.onInteractive = function() { };
  this.onCompletion = function() { };
  this.afterCompletion = function() { };

  this.createAJAX = function() {
    try {
      this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (err) {
        this.xmlhttp = null;
      }
    }
    if(!this.xmlhttp && typeof XMLHttpRequest != "undefined"){
      this.xmlhttp = new XMLHttpRequest();
    }
    if (!this.xmlhttp){
      this.failed = true;
    }
  };

  this.setVar = function(name, value){
    if (this.URLString.length < 3){
      this.URLString = name + "=" + value;
    } else {
      this.URLString += "&" + name + "=" + value;
    }
  };

  this.encVar = function(name, value){
    var varString = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return varString;
  };

  this.encodeURLString = function(string){
    varArray = string.split('&');
    for (i = 0; i < varArray.length; i++){
      urlVars = varArray[i].split('=');
      if (urlVars[0].indexOf('amp;') != -1){
        urlVars[0] = urlVars[0].substring(4);
      }
      varArray[i] = this.encVar(urlVars[0],urlVars[1]);
    }
  return varArray.join('&');
  };

  this.runResponse = function(){
    eval(this.response);
  };

  this.runAJAX = function(urlstring){
    this.responseStatus = new Array(2);
    if(this.failed && this.AjaxFailedAlert){
      alert(this.AjaxFailedAlert);
    } else {
      if (urlstring){
        if (this.URLString.length){
          this.URLString = this.URLString + "&" + urlstring;
        } else {
          this.URLString = urlstring;
        }
      }
      if (this.encodeURIString){
        var timeval = new Date().getTime();
        this.URLString = this.encodeURLString(this.URLString);
        this.setVar("rndval", timeval);
      }
      if (this.element) { this.elementObj = document.getElementById(this.element); }
      if (this.xmlhttp) {
        var self = this;
        if (this.method == "GET") {
          var totalurlstring = this.requestFile + "?" + this.URLString;
          this.xmlhttp.open(this.method, totalurlstring, true);
        } else {
          this.xmlhttp.open(this.method, this.requestFile, true);
        }
        if (this.method == "POST"){
          try {
             this.xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
          } catch (e) {}
        }

        this.xmlhttp.onreadystatechange = function() {
          switch (self.xmlhttp.readyState){
            case 1:
              self.onLoading();
            break;
            case 2:
              self.onLoaded();
            break;
            case 3:
              self.onInteractive();
            break;
            case 4:
              self.response = self.xmlhttp.responseText;
              self.responseXML = self.xmlhttp.responseXML;
              self.responseStatus[0] = self.xmlhttp.status;
              self.responseStatus[1] = self.xmlhttp.statusText;
              self.onCompletion();
              if(self.execute){ self.runResponse(); }
              if (self.elementObj) {
                var elemNodeName = self.elementObj.nodeName;
                elemNodeName.toLowerCase();
                if (elemNodeName == "input" || elemNodeName == "select" || elemNodeName == "option" || elemNodeName == "textarea"){
                  self.elementObj.value = self.response;
                } else {
                  self.elementObj.innerHTML = self.response;
                }
              }
              self.afterCompletion();
              self.URLString = "";
            break;
          }
        };
        this.xmlhttp.send(this.URLString);
      }
    }
  };
this.createAJAX();
}


/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/tw-sack.js XXXXXXXXXX */



/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/ajax.js XXXXXXXXXX */

/**
 * AJAX functions for the pagename quicksearch
 *
 * We're using a global object with self referencing methods
 * here to make callbacks work
 *
 * @license  GPL2 (http://www.gnu.org/licenses/gpl.html)
 * @author   Andreas Gohr <andi@splitbrain.org>
 */

//prepare class
function ajax_qsearch_class(){
  this.sack = null;
  this.inObj = null;
  this.outObj = null;
  this.timer = null;
}

//create global object and add functions
var ajax_qsearch = new ajax_qsearch_class();
ajax_qsearch.sack = new sack(DOKU_BASE + 'lib/exe/ajax.php');
ajax_qsearch.sack.AjaxFailedAlert = '';
ajax_qsearch.sack.encodeURIString = false;

ajax_qsearch.init = function(inID,outID){
  ajax_qsearch.inObj  = document.getElementById(inID);
  ajax_qsearch.outObj = document.getElementById(outID);

  // objects found?
  if(ajax_qsearch.inObj === null){ return; }
  if(ajax_qsearch.outObj === null){ return; }

  // attach eventhandler to search field
  addEvent(ajax_qsearch.inObj,'keyup',ajax_qsearch.call);

  // attach eventhandler to output field
  addEvent(ajax_qsearch.outObj,'click',function(){ ajax_qsearch.outObj.style.display='none'; });
};

ajax_qsearch.clear = function(){
  ajax_qsearch.outObj.style.display = 'none';
  ajax_qsearch.outObj.innerHTML = '';
  if(ajax_qsearch.timer !== null){
    window.clearTimeout(ajax_qsearch.timer);
    ajax_qsearch.timer = null;
  }
};

ajax_qsearch.exec = function(){
  ajax_qsearch.clear();
  var value = ajax_qsearch.inObj.value;
  if(value === ''){ return; }
  ajax_qsearch.sack.runAJAX('call=qsearch&q='+encodeURI(value));
};

ajax_qsearch.sack.onCompletion = function(){
  var data = ajax_qsearch.sack.response;
  if(data === ''){ return; }

  ajax_qsearch.outObj.innerHTML = data;
  ajax_qsearch.outObj.style.display = 'block';
};

ajax_qsearch.call = function(){
  ajax_qsearch.clear();
  ajax_qsearch.timer = window.setTimeout("ajax_qsearch.exec()",500);
};



/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/ajax.js XXXXXXXXXX */



/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/index.js XXXXXXXXXX */

/**
 * Javascript for index view
 *
 * @author Andreas Gohr <andi@splitbrain.org>
 */

index = {

     /**
     * Delay in ms before showing the throbber.
     * Used to skip the throbber for fast AJAX calls.
     */
    throbber_delay: 500,

    /**
     * Attach event handlers to all "folders" below the given element
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    treeattach: function(obj){
        if(!obj) return;

        var items = getElementsByClass('idx_dir',obj,'a');
        for(var i=0; i<items.length; i++){
            var elem = items[i];

            // attach action to make the link clickable by AJAX
            addEvent(elem,'click',function(e){ return index.toggle(e,this); });

            // get the listitem the elem belongs to
            var listitem = elem.parentNode;
            while (listitem.tagName != 'LI') {
              listitem = listitem.parentNode;
            }
            //when there are uls under this listitem mark this listitem as opened
            if (listitem.getElementsByTagName('ul').length) {
              listitem.open = true;
            }
        }
    },

    /**
     * Open or close a subtree using AJAX
     * The contents of subtrees are "cached" untill the page is reloaded.
     * A "loading" indicator is shown only when the AJAX call is slow.
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     * @author Ben Coburn <btcoburn@silicodon.net>
     */
    toggle: function(e,clicky){
        var listitem = clicky.parentNode.parentNode;

        listitem.open = !listitem.open;
        // listitem.open represents now the action to be done

        // if already open, close by removing the sublist
        var sublists = listitem.getElementsByTagName('ul');
        if(!listitem.open){
            if (sublists.length) {
              sublists[0].style.display='none';
            }
            listitem.className='closed';
            e.preventDefault();
            return false;
        }

        // just show if already loaded
        if(sublists.length && listitem.open){
            sublists[0].style.display='';
            listitem.className='open';
            e.preventDefault();
            return false;
        }

        // prepare an AJAX call to fetch the subtree
        var ajax = new sack(DOKU_BASE + 'lib/exe/ajax.php');
        ajax.AjaxFailedAlert = '';
        ajax.encodeURIString = false;
        if(ajax.failed) return true;

        //prepare the new ul
        var ul = document.createElement('ul');
        ul.className = 'idx';
        timeout = window.setTimeout(function(){
            // show the throbber as needed
            if (listitem.open) {
              ul.innerHTML = '<li><img src="'+DOKU_BASE+'lib/images/throbber.gif" alt="loading..." title="loading..." /></li>';
              listitem.appendChild(ul);
              listitem.className='open';
            }
        }, this.throbber_delay);
        ajax.elementObj = ul;
        ajax.afterCompletion = function(){
            window.clearTimeout(timeout);
            index.treeattach(ul);
            if (listitem.className!='open') {
              if (!listitem.open) {
                ul.style.display='none';
              }
              listitem.appendChild(ul);
              if (listitem.open) {
                listitem.className='open';
              }
            }
        };
        ajax.runAJAX(clicky.search.substr(1)+'&call=index');
        e.preventDefault();
        return false;
    }
};


addInitEvent(function(){
    index.treeattach($('index__tree'));
});


/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/scripts/index.js XXXXXXXXXX */



/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/tpl/battlehorse/script.js XXXXXXXXXX */



/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/tpl/battlehorse/script.js XXXXXXXXXX */

addInitEvent(function(){ ajax_qsearch.init('qsearch__in','qsearch__out'); });
addInitEvent(function(){ addEvent(document,'click',closePopups); });
addInitEvent(function(){ addTocToggle(); });


/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/plugins/acl/script.js XXXXXXXXXX */

acl = {
    init: function(){
        this.ctl = $('acl_manager');
        if(!this.ctl) return;

        var sel = $('acl__user').getElementsByTagName('select')[0];

        addEvent(sel,'change',acl.userselhandler);
        addEvent($('acl__tree'),'click',acl.treehandler);
        addEvent($('acl__user').getElementsByTagName('input')[1],'click',acl.loadinfo);
    },


    /**
     * Handle user dropdown
     */
    userselhandler: function(e){
        // make entry field visible/invisible
        if(this.value == '__g__' || this.value == '__u__'){
            $('acl__user').getElementsByTagName('input')[0].style.display = ''; //acl_w
            $('acl__user').getElementsByTagName('input')[1].style.display = ''; //submit
        }else{
            $('acl__user').getElementsByTagName('input')[0].style.display = 'none';
            $('acl__user').getElementsByTagName('input')[1].style.display = 'none';
        }

        acl.loadinfo();
    },

    /**
     * Load the current permission info and edit form
     *
     * @param frm - Form element with needed data
     */
    loadinfo: function(){
        // get form
        var frm = $('acl__detail').getElementsByTagName('form')[0];

        // prepare an AJAX call
        var ajax = new sack(DOKU_BASE + 'lib/plugins/acl/ajax.php');
        ajax.AjaxFailedAlert = '';
        ajax.encodeURIString = false;
        if(ajax.failed) return true;

        // prepare data
        var data = Array();
        data[0] = ajax.encVar('ns',frm.elements['ns'].value);
        data[1] = ajax.encVar('id',frm.elements['id'].value);
        data[2] = ajax.encVar('acl_t',frm.elements['acl_t'].value);
        data[3] = ajax.encVar('acl_w',frm.elements['acl_w'].value);
        data[4] = ajax.encVar('ajax','info');

        ajax.elementObj = $('acl__info');

        ajax.runAJAX(data.join('&'));
        return false;
    },

    /**
     * parse URL attributes into a associative array
     *
     * @todo put into global script lib?
     */
    parseatt: function(str){
        if(str[0] == '?') str = str.substr(1);
        var attributes = {};
        var all = str.split('&');
        for(var i=0; i<all.length; i++){
            var att = all[i].split('=');
            attributes[att[0]] = decodeURIComponent(att[1]);
        }
        return attributes;
    },

    /**
     * htmlspecialchars equivalent
     *
     * @todo put in gloabl scripts lib?
     */
    hsc: function(str) {
        str = str.replace(/&/g,"&amp;");
        str = str.replace(/\"/g,"&quot;");
        str = str.replace(/\'/g,"&#039;");
        str = str.replace(/</g,"&lt;");
        str = str.replace(/>/g,"&gt;");
        return str;
    },


    /**
     * Open or close a subtree using AJAX
     *
     * @author Andreas Gohr <andi@splitbrain.org>
     */
    treetoggle: function(clicky){
        var listitem = clicky.parentNode.parentNode;

        // if already open, close by removing the sublist
        var sublists = listitem.getElementsByTagName('ul');
        if(sublists.length){
            listitem.removeChild(sublists[0]);
            clicky.src = DOKU_BASE+'lib/images/plus.gif';
            clicky.alt = '+';
            return false;
        }

        // get the enclosed link (is always the first one)
        var link = listitem.getElementsByTagName('a')[0];

        // prepare an AJAX call to fetch the subtree
        var ajax = new sack(DOKU_BASE + 'lib/plugins/acl/ajax.php');
        ajax.AjaxFailedAlert = '';
        ajax.encodeURIString = false;
        if(ajax.failed) return true;

        //prepare the new ul
        var ul = document.createElement('ul');
        listitem.appendChild(ul);
        ajax.elementObj = ul;
        ajax.runAJAX(link.search.substr(1)+'&ajax=tree');
        clicky.src = DOKU_BASE+'lib/images/minus.gif';
        return false;
    },

    /**
     * Handles all clicks in the tree, dispatching the right action based on the
     * clicked element
     */
    treehandler: function(e){
        if(e.target.src){ // is it an image?
            acl.treetoggle(e.target);
        } else if(e.target.href){ // is it a link?
            // remove highlighting
            var obj = getElementsByClass('cur',$('acl__tree'),'a');
            for(var i=0; i<obj.length; i++){
                obj[i].className = obj[i].className.replace(/ cur/,'');
            }

            // add new highlighting
            e.target.className += ' cur';

            // set new page to detail form
            var frm = $('acl__detail').getElementsByTagName('form')[0];
            if(e.target.className.search(/wikilink1/) > -1){
                frm.elements['ns'].value = '';
                frm.elements['id'].value = acl.hsc(acl.parseatt(e.target.search)['id']);
            }else if(e.target.className.search(/idx_dir/) > -1){
                frm.elements['ns'].value = acl.hsc(acl.parseatt(e.target.search)['ns']);
                frm.elements['id'].value = '';
            }

            acl.loadinfo();
        }

        e.stopPropagation();
        e.preventDefault();
        return false;
    }

};

addInitEvent(acl.init);


/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/plugins/acl/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/plugins/usermanager/script.js XXXXXXXXXX */

/**
 * Add JavaScript confirmation to the User Delete button
 */
function usrmgr_delconfirm(){
    if($('usrmgr__del')){
        addEvent( $('usrmgr__del'),'click',function(){ return confirm(reallyDel); } );
    }
};
addInitEvent(usrmgr_delconfirm);


/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/plugins/usermanager/script.js XXXXXXXXXX */



/* XXXXXXXXXX begin of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/plugins/captcha/script.js XXXXXXXXXX */

/**
 * Autofill and hide the whole captcha stuff in the simple JS mode
 */
addInitEvent(function(){
    var code = $('plugin__captcha_code');
    if(!code) return;

    var box  = $('plugin__captcha');
    box.value=code.innerHTML;

    $('plugin__captcha_wrapper').style.display = 'none';
});


/* XXXXXXXXXX end of /home/content/l/i/q/liquibase2008/html/lib/exe/../../lib/plugins/captcha/script.js XXXXXXXXXX */

addInitEvent(function(){ scrollToMarker(); });
addInitEvent(function(){ focusMarker(); });
