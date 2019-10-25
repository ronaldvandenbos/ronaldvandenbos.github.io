
/*!---- jquery-ui-1-12-1-----*/
/*! jQuery UI - v1.12.1 - 2019-01-11
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, keycode.js, scroll-parent.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/datepicker.js, widgets/menu.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,n)}function n(){t.datepicker._isDisabledDatepicker(c.inline?c.dpDiv.parent()[0]:c.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function o(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.ui=t.ui||{},t.ui.version="1.12.1";var a=0,r=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=r.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=r.call(arguments,1),l=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(l=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):l=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=a++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var l=!1;t(document).on("mouseup",function(){l=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!l){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),l=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,l=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}
},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,l,h,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=s.snapElements[d].left-s.margins.left,h=l+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,l-g>_||m>h+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(l-_),r=g>=Math.abs(h-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(l-m),r=g>=Math.abs(h-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&h(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var h=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,l=a+e.helperProportions.height,h=i.offset.left,c=i.offset.top,u=h+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=h&&u>=r&&a>=c&&d>=l;case"intersect":return o+e.helperProportions.width/2>h&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>l-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,h,i.proportions().width);case"touch":return(a>=c&&d>=a||l>=c&&d>=l||c>a&&l>d)&&(o>=h&&u>=o||r>=h&&u>=r||h>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&h(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=h(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],l=r&&n.collapsible,h=l?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:l?t():a,newPanel:h};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=l?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,l=t.css("box-sizing"),h=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=h&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;
e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var c;t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return o(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,a){var r,l,h,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),o(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),c===n&&(c=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,a,r,l,h=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),h&&(this._curInst===h&&this._hideDatepicker(),a=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),o(h.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==n.dateFormat&&void 0===n.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,a),this._updateAlternate(h),this._updateDatepicker(h)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(i=t("input",i.parentNode)[0]),!t.datepicker._isDisabledDatepicker(i)&&t.datepicker._lastInput!==i){var s,n,a,r,l,h,c;s=t.datepicker._getInst(i),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),a=n?n.apply(i,[i,s]):{},a!==!1&&(o(s.settings,a),s.lastVal=null,t.datepicker._lastInput=i,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(i.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(i),t.datepicker._pos[1]+=i.offsetHeight),r=!1,t(i).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),l=t.datepicker._checkOffset(s,l,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),s.inline||(h=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",e(t(i))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?s.dpDiv.show(h,t.datepicker._get(s,"showOptions"),c):s.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))}},_updateDatepicker:function(e){this.maxRows=4,c=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),o=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&n.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),o>1&&e.dpDiv.addClass("ui-datepicker-multi-"+o).css("width",a*o+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>l&&l>n?Math.abs(i.left+n-l):0),i.top-=Math.min(i.top,i.top+o>h&&h>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,l=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(l).match(o);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(l,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],l+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+l},x=function(){if(i.charAt(l)!==e.charAt(n))throw"Unexpected literal at position "+l;l++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>l&&(a=i.substr(l),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},h=function(t,e,i){var s=""+e;if(l(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return l(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||l("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),l=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=l.exec(i);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":a+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}h=l.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,l,h,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,T,I,M,P,S,N,H,A,z,O,E,W,F,L,R=new Date,Y=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-U[0]*U[1]+1,Q.getDate())),e=J&&J>e?J:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:Y,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),T=" ui-corner-all",I="",$){if(I+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+(B?"right":"left");
break;case U[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+(B?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===k?B?o:s:"")+(/all|right/.test(T)&&0===k?B?s:o:"")+this._generateMonthYearHeader(t,Z,te,J,Q,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)P=(w+c)%7,M+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[P]+"'>"+p[P]+"</span></th>";for(I+=M+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),N=(this._getFirstDayOfMonth(te,Z)-c+7)%7,H=Math.ceil((N+S)/7),A=$?this.maxRows>H?this.maxRows:H:H,this.maxRows=A,z=this._daylightSavingAdjust(new Date(te,Z,1-N)),O=0;A>O;O++){for(I+="<tr>",E=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(z)+"</td>":"",w=0;7>w;w++)W=m?m.apply(t.input?t.input[0]:null,[z]):[!0,""],F=z.getMonth()!==Z,L=F&&!v||!W[0]||J&&J>z||Q&&z>Q,E+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+W[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===Y.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===Y.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);I+=E+"</tr>"}Z++,Z>11&&(Z=0,te++),I+="</tbody></table>"+($?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=I}y+=x}return y+=h,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var l,h,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=s&&s.getFullYear()===i,h=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=s.getMonth())&&(!h||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker});
/*!---- solrautocomplete-----*/
function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  document.body.appendChild(outer);
  
  var widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = "scroll";
  
  // add innerdiv
  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);        
  
  var widthWithScroll = inner.offsetWidth;
  
  // remove divs
  outer.parentNode.removeChild(outer);
  
  return widthNoScroll - widthWithScroll;
}

$j(window).resize(function(){
  if($j(window).width() > 991){
    //if($j('#twocolright').hasClass('active')){  
    $j('.solarLeftSide').slideDown();
    $j('#twocolright').removeClass('active');
    //}
  }
  if($j(window).width() <= 991){
    if(!$j('#twocolright').hasClass('active')){
      $j('.solarLeftSide').slideUp();
      $j('#twocolright').removeClass('active');
    }
  }
});

$j(window).on("load", function() {

  if(window.location.href.indexOf('/site-services/search-results') > 0) {
    $j("#searchTextbox").val($j('#solrstrap-searchbox').val());
    //alert(window.location.href);
  }

  /*
  setTimeout(function(){
    siteTabs();
  },500);
  */
  $j('.solr-search-tab-mobiDropdown').text($j('#contentwrapper .solr-search-tab ul li a.active').text());  
  
});

$j(document).ajaxComplete(function(){
  
  $j('.solr-search-tab-mobiDropdown').text($j('#contentwrapper .solr-search-tab ul li a.active').text());
  /*
  setTimeout(function(){
    siteTabs();
  },500);
  */
  setTimeout(function(){
    if($j('#solrstrap-tabs .solr-search-tab').length > 1){
      $j('#solrstrap-tabs .solr-search-tab:first-child').remove();
      $j('.solr-search-tab-mobiDropdown').text($j('#contentwrapper .solr-search-tab ul li a.active').text());
    }
  },600);  
  
});

function handle_submit2(event) {
  
  if($j('#searchTextbox').val().length <= 0){
    return false;
  }
  
  $j('#solrstrap-searchbox').val($j('#searchTextbox').val());
  $j('#searchTextboxMobi').val($j('#searchTextbox').val());
  $j('#submitButton').click();
  
  $j('#solrstrap-searchbox').focus();
  //$j("#searchbox").removeClass("search-popup");
  
  $j('#searchbox').fadeOut(600 ,function(){
    
  });
  $j('#searchbox').slideUp(1000 ,function(){        
    $j("body").removeClass("posfixed");
    $j("#searchTextbox").removeClass("opened");
  });  
  return false;
}

function handle_submit3(event) {
  
  $j("#solrstrap-searchbox").val($j('#searchTextboxMobi').val());
  $j("#searchTextbox").val($j('#searchTextboxMobi').val());
  $j('.search-link').trigger('click');
  return false;
}


function siteTabs() {
  var TotalLiwidth = 0;
  var TabsWidth = $j('.solr-search-tab').width();
  
  $j('ul.tab-links-main').show();
  $j('ul.tab-links-main > li').each(function() {
    
    TotalLiwidth += $j(this).width();
  });
  
  if (TotalLiwidth >= TabsWidth) {
    $j('.solr-search-tab').addClass('isDropdown');
    $j('ul.tab-links-main').hide();
    $j('.solr-search-tab-mobiDropdown').show();
  } else {
    $j('.solr-search-tab').removeClass('isDropdown');
    $j('ul.tab-links-main').show();
    $j('.solr-search-tab-mobiDropdown').hide();
  }  
  
}


$j(document).ready(function () {

  $j(".rdMenu ul > .level1.haschildren > a").click(function(e){
    //$j('#solrstrap-searchbox').focus();
    //$j("#searchbox").removeClass("search-popup");
    $j('#searchbox').fadeOut(600 ,function(){      
    });
    $j('#searchbox').slideUp(1000 ,function(){
      $j("body").removeClass("posfixed");
      $j("#searchTextbox").removeClass("opened");
    });
  });


  /*
  $j.fn.loadSolrResultsWhenVisible = function (q, fq, offset) {
    elem = this;
    q = getURLParam('q');
    //dont instantsearch and autoload at the same time
    if ($j('#searchTextbox').val() != q) {
      handle_submit2();
    }
    q = getURLParam('q');
    $j(elem).attr('loaded', true);
    fq = getURLParam('fq');
    $j(elem).getSolrResults(q, fq, offset);                
  };
  */
  $j('#submitButton').click(function (e) {
    $j("#searchTextbox").val($j('#solrstrap-searchbox').val());
    $j("#searchTextboxMobi").val($j('#solrstrap-searchbox').val());
  });
  $j(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $j('#solrstrap-searchbox').focus();
      $j('#searchbox').fadeOut(600 ,function(){
        
      });
      $j('#searchbox').slideUp(1000 ,function(){        
        $j("body").removeClass("posfixed");
        $j("#searchTextbox").removeClass("opened");
      });
      
    }
  });
  
  $j(document).on('click', '.searchOPEN', function(e) {
    setTimeout(function(){
      $j('#searchTextbox').click();
      $j('#searchTextbox').focus();
    },1000);
    
    if ($j("#searchTextbox").hasClass("opened")) {
      $j("#searchTextbox").removeClass("opened");
      $j('#searchbox').fadeOut(400 ,function(){      });
      $j("body").removeClass("posfixed"); 
      var wRDscroll = $j(window).scrollTop();
      if (wRDscroll < 400) {
        $j("body").removeClass("stckIt");
        $j("#logo").removeClass("stickyLogo");
        }
      
    }else{
      $j("#searchTextbox").addClass("opened");
      
      $j('#searchbox').fadeIn(400 ,function(){ });
      $j("body").addClass("posfixed");
      $j("body").addClass("stckIt");
      $j("#logo").addClass("stickyLogo");       

    }
  });
  
  $j('.popup-search-close').on('click', function(e) {
     $j('#searchbox').fadeOut(400 ,function(){    });
    $j("#searchTextbox").removeClass("opened");
    $j("body").removeClass("posfixed");
      var wRDscroll2 = $j(window).scrollTop();
      if (wRDscroll2 < 400) {
        $j("body").removeClass("stckIt");
        $j("#logo").removeClass("stickyLogo");
        }
     
  });
  
  
  
  $j('#searchButton2').click(handle_submit2);
  $j('#searchButtonMobi').click(handle_submit3);
  
  $j(document).on('click','.solr-search-tab-mobiDropdown',function(){   
    if($j(this).parent().hasClass('active')){
      $j(this).parent().removeClass('active');
      $j(this).parent().find('ul').slideUp();
    }else{
      $j(this).parent().addClass('active');
      $j(this).parent().find('ul').slideDown(); 
    }      
  });
  
  $j(document).on('click','.showAdvSearchMobi',function(){    
    if($j(this).parent().hasClass('active')){
      $j(this).parent().removeClass('active');
      $j(this).parent().find('.solarLeftSide').slideUp();
    }else{
      $j(this).parent().addClass('active');
      $j(this).parent().find('.solarLeftSide').slideDown(); 
    }      
  });
  
  
  $j('#solrstrap-searchbox').keyup(keyuphandler);
  $j('#searchTextbox').keyup(keyuphandler2);
  $j('#searchTextboxMobi').keyup(keyuphandler3);
  
  $j("#solrstrap-searchbox").keypress(function(e) {
    if (e.keyCode == 13) {
      document.getElementById("submitButton").click();
      /*setTimeout(function(){
        $j('#searchTextboxContainerSolr .ui-autocomplete').css('display','none');
      },500);*/    
      return false;
    }
  });
  
  $j("#searchTextbox").keypress(function(e) {
    if (e.keyCode == 13) {
      document.getElementById("searchButton2").click();
      return false;
    }
  });
  
  $j("#searchTextboxMobi").keypress(function(e) {
    if (e.keyCode == 13) {
      document.getElementById("searchButtonMobi").click();
      return false;
    }
  });
  
  //$j(document).on('click','#searchButton2',function(){
  $j("#searchButton2").click(function (e) {
    
    if($j('#searchTextbox').val().length <= 0){
      return false;
    }
    
    //if($j("#searchTextbox").val() !== null && $j("#searchTextbox").val() !== ""){
    if (window.location.href.indexOf('/site-services/search-results') < 0) {
      window.location.href = "/site-services/search-results#queryType=Exact&keywordtracking=1&q=" + encodeURIComponent(encodeURIComponent($j("#searchTextbox").val()))  + "&sort=score";
    }else{
      window.location.href = "/site-services/search-results#queryType=Exact&keywordtracking=1&q=" + encodeURIComponent(encodeURIComponent($j("#searchTextbox").val()))  + "&sort=score";
    }
    //}
  });
  
  
  $j("#searchButtonMobi").click(function (e) {
    if (window.location.href.indexOf('/site-services/search-results') < 0) {      
      window.location.href = "/site-services/search-results#queryType=Exact&keywordtracking=1&q=" + encodeURIComponent(encodeURIComponent($j("#searchTextboxMobi").val())) + "&sort=score";
    }else{
      window.location.href = "/site-services/search-results#queryType=Exact&keywordtracking=1&q=" + encodeURIComponent(encodeURIComponent($j("#searchTextboxMobi").val())) + "&sort=score";
    }
  });
  
   });


function keyuphandler() {
  var q = $j.trim($j('#solrstrap-searchbox').val());
  if (q.length > 2 ) {
    AutocompleteText();
  }
}

function keyuphandler2() {
  var q = $j.trim($j('#searchTextbox').val());
  if (q.length > 2 ) {
    AutocompleteText2();
  }
}

function keyuphandler3() {
  var q = $j.trim($j('#searchTextboxMobi').val());
  if (q.length > 2 ) {
    AutocompleteText3();
  }
}

$j("#solrstrap-searchbox").keypress(function(e){ 
  if (!e) e = window.event;   
  if (e.keyCode == '13'){
    $j('#solrstrap-searchbox').autocomplete('close');
    return false;
  }
});

function AutocompleteText() {
  $j("#solrstrap-searchbox").autocomplete({
    appendTo:"#searchTextboxContainerSolr",
    source: function (request, response) {
      var inputs = {
        'Handler': 'autocomplete',
        'Query': buildAutocompleParams()
      };
      $j.ajax({
        url: APIURI,
        data: inputs,
        type: 'POST',
        dataType: 'json',
        success: function (data) {
          if(data !== null && data !== "" && data != "Failure")
          {
            //Create a json that is understood by render item easily
            var json = JSON.parse(data);
            //faceted autocomplete field
            json = json.facet_counts.facet_fields[AUTOCOMPLETEFIELD];
            var autocompleteresult = "[";
            for (var i = 0; i < json.length; i++) {
              if ((i % 2) === 0)
                autocompleteresult += '{"label":"' + json[i];
              else
                autocompleteresult += '","value":' + json[i] + '},';
            }
            autocompleteresult = autocompleteresult.replace(/\,$/, '');
            autocompleteresult += "]";
            autocompleteresult = JSON.parse(autocompleteresult);
            response(autocompleteresult);
          }
        },
        error: function (result) {          
        }
      }
             );
    },
    minLength: 1,
    select: function (event, ui) {
      event.preventDefault();
      $j("#solrstrap-searchbox").val(ui.item.label);
      if(document.getElementById("submitButton")!==null)
      {
        $j('#submitButton').trigger("click");
        $j("#searchTextbox").val($j('#solrstrap-searchbox').val());
      }else{
        $j('#submitButton').trigger("click");      
        $j("#searchTextbox").val($j('#solrstrap-searchbox').val());
      }
    },
    focus: function (event, ui) {
      event.preventDefault();
      $j("#solrstrap-searchbox").val(ui.item.label);
    }
  }).data("ui-autocomplete")._renderItem = function (ul, item) {
    return $j("<li class='ui-corner-all'>")
    .append("<a> <span style='float:left;'>" + decodeURIComponent(item.label) + "</span><span style='float:right;'>(" + item.value + ")</span></a>").appendTo(ul);
  };
  
}

function AutocompleteText2() {
  $j("#searchTextbox").autocomplete({
    appendTo:"#searchTextboxContainer",
    source: function (request, response) {
      var inputs = {
        'Handler': 'autocomplete',
        'Query': buildAutocompleParams2()
      };
      $j.ajax({
        url: APIURI,
        data: inputs,
        type: 'POST',
        dataType: 'json',
        success: function (data) {
		 if(data !== null && data !== "" && data != "Failure")
          {
			  //Create a json that is understood by render item easily
			  var json = JSON.parse(data);
			  //faceted autocomplete field
			  json = json.facet_counts.facet_fields[AUTOCOMPLETEFIELD];
			  var autocompleteresult = "[";
			  for (var i = 0; i < json.length; i++) {
				if ((i % 2) === 0)
				  autocompleteresult += '{"label":"' + json[i];
				else
				  autocompleteresult += '","value":' + json[i] + '},';
			  }
			  autocompleteresult = autocompleteresult.replace(/\,$/, '');
			  autocompleteresult += "]";
			  autocompleteresult = JSON.parse(autocompleteresult);
			  response(autocompleteresult);
		  }
        },
        error: function (result) {          
        }
      }
             );
    },
    minLength: 1,
    select: function (event, ui) {
      event.preventDefault();
      $j("#searchTextbox").val(ui.item.label);
      if(document.getElementById("searchButton2")!==null)
        $j('#searchButton2').trigger("click");      
      else
        $j('#searchButton2').trigger("click");      
    },
    focus: function (event, ui) {
      event.preventDefault();
      $j("#searchTextbox").val(ui.item.label);
    }
  }).data("ui-autocomplete")._renderItem = function (ul, item) {
    return $j("<li class='ui-corner-all'>")
    .append("<a> <span style='float:left;'>" + decodeURIComponent(item.label) + "</span><span style='float:right;'>(" + item.value + ")</span></a>").appendTo(ul);
  };
  
  
}

function AutocompleteText3() {
  $j("#searchTextboxMobi").autocomplete({
    appendTo:"#searchTextboxContainerMobi",
    source: function (request, response) {
      var inputs = {
        'Handler': 'autocomplete',
        'Query': buildAutocompleParams3()
      };
      $j.ajax({
        url: APIURI,
        data: inputs,
        type: 'POST',
        dataType: 'json',
        success: function (data) {
		if(data !== null && data !== "" && data != "Failure")
          {
		  //Create a json that is understood by render item easily
          var json = JSON.parse(data);
          //faceted autocomplete field
          json = json.facet_counts.facet_fields[AUTOCOMPLETEFIELD];
          var autocompleteresult = "[";
          for (var i = 0; i < json.length; i++) {
            if ((i % 2) === 0)
              autocompleteresult += '{"label":"' + json[i];
            else
              autocompleteresult += '","value":' + json[i] + '},';
          }
          autocompleteresult = autocompleteresult.replace(/\,$/, '');
          autocompleteresult += "]";
          autocompleteresult = JSON.parse(autocompleteresult);
          response(autocompleteresult);					
		  }
        },
        error: function (result) {          
        }
      }
             );
    },
    minLength: 1,
    select: function (event, ui) {
      event.preventDefault();
      $j("#searchTextboxMobi").val(ui.item.label);
      if(document.getElementById("searchButtonMobi")!==null)
        $j('#searchButtonMobi').trigger("click");      
      else
        $j('#searchButtonMobi').trigger("click");      
    },
    focus: function (event, ui) {
      event.preventDefault();
      $j("#searchTextboxMobi").val(ui.item.label);
    }
  }).data("ui-autocomplete")._renderItem = function (ul, item) {
    return $j("<li class='ui-corner-all'>")
    .append("<a> <span style='float:left;'>" + decodeURIComponent(item.label) + "</span><span style='float:right;'>(" + item.value + ")</span></a>").appendTo(ul);
  };
}

function buildAutocompleParams() {
  var ret = {
    //'q': "(client:" + CLIENT + " AND (otplanguage:" + OTPLANGUAGE + " OR language:" + LANGUAGE + "))",
    'q': "(client:" + CLIENT + " AND (otplanguage:" + OTPLANGUAGE + " OR language:[\"\" TO *] ))",    
    'enablegeneralsearch':ENABLEDGENERALSEARCH,
    "facet.prefix": encodeURIComponent($j.trim($j('#solrstrap-searchbox').val()).toLowerCase()),
    "facet.method" : "enum"
  };
  return JSON.stringify(ret);
}

function buildAutocompleParams2() {
  var ret = {
    //'q': "(client:" + CLIENT + " AND (otplanguage:" + OTPLANGUAGE + " OR language:" + LANGUAGE + "))",
    'q': "(client:" + CLIENT + " AND (otplanguage:" + OTPLANGUAGE + " OR language:[\"\" TO *] ))",    
    'enablegeneralsearch':ENABLEDGENERALSEARCH,
    "facet.prefix": encodeURIComponent($j.trim($j('#searchTextbox').val()).toLowerCase()),
    "facet.method" : "enum"
  };
  return JSON.stringify(ret);
}

function buildAutocompleParams3() {
  var ret = {
    //'q': "(client:" + CLIENT + " AND (otplanguage:" + OTPLANGUAGE + " OR language:" + LANGUAGE + "))",
    'q': "(client:" + CLIENT + " AND (otplanguage:" + OTPLANGUAGE + " OR language:[\"\" TO *] ))",    
    'enablegeneralsearch':ENABLEDGENERALSEARCH,
    "facet.prefix": encodeURIComponent($j.trim($j('#searchTextboxMobi').val()).toLowerCase()),
    "facet.method" : "enum"
  };
  return JSON.stringify(ret);
}
/*!---- mmenu-----*/
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_js = factory(root.jQuery);
  }
}(this, function($j) {
/*
 * jQuery mmenu v6.1.5
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(t){function e(){t[n].glbl||(o={$wndw:t(window),$docu:t(document),$html:t("html"),$body:t("body")},s={},a={},r={},t.each([s,a,r],function(t,e){e.add=function(t){t=t.split(" ");for(var n=0,i=t.length;n<i;n++)e[t[n]]=e.mm(t[n])}}),s.mm=function(t){return"mm-"+t},s.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"),s.umm=function(t){return"mm-"==t.slice(0,3)&&(t=t.slice(3)),t},a.mm=function(t){return"mm-"+t},a.add("parent child"),r.mm=function(t){return t+".mm"},r.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),t[n]._c=s,t[n]._d=a,t[n]._e=r,t[n].glbl=o)}var n="mmenu",i="6.1.5";if(!(t[n]&&t[n].version>i)){t[n]=function(t,e,n){return this.$menu=t,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=e,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initAddons(),this._initExtensions(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},t[n].version=i,t[n].addons={},t[n].uniqueId=0,t[n].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},t[n].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},t[n].prototype={getInstance:function(){return this},initPanels:function(t){this._initPanels(t)},openPanel:function(e,i){if(this.trigger("openPanel:before",e),e&&e.length&&(e.is("."+s.panel)||(e=e.closest("."+s.panel)),e.is("."+s.panel))){var r=this;if("boolean"!=typeof i&&(i=!0),e.hasClass(s.vertical))e.add(e.parents("."+s.vertical)).removeClass(s.hidden).parent("li").addClass(s.opened),this.openPanel(e.parents("."+s.panel).not("."+s.vertical).first()),this.trigger("openPanel:start",e),this.trigger("openPanel:finish",e);else{if(e.hasClass(s.opened))return;var o=this.$pnls.children("."+s.panel),l=o.filter("."+s.opened);if(!t[n].support.csstransitions)return l.addClass(s.hidden).removeClass(s.opened),e.removeClass(s.hidden).addClass(s.opened),this.trigger("openPanel:start",e),void this.trigger("openPanel:finish",e);o.not(e).removeClass(s.subopened);for(var d=e.data(a.parent);d;)d=d.closest("."+s.panel),d.is("."+s.vertical)||d.addClass(s.subopened),d=d.data(a.parent);o.removeClass(s.highest).not(l).not(e).addClass(s.hidden),e.removeClass(s.hidden);var c=function(){l.removeClass(s.opened),e.addClass(s.opened),e.hasClass(s.subopened)?(l.addClass(s.highest),e.removeClass(s.subopened)):(l.addClass(s.subopened),e.addClass(s.highest)),this.trigger("openPanel:start",e)},h=function(){l.removeClass(s.highest).addClass(s.hidden),e.removeClass(s.highest),this.trigger("openPanel:finish",e)};i&&!e.hasClass(s.noanimation)?setTimeout(function(){r.__transitionend(e,function(){h.call(r)},r.conf.transitionDuration),c.call(r)},this.conf.openingInterval):(c.call(this),h.call(this))}this.trigger("openPanel:after",e)}},closePanel:function(t){this.trigger("closePanel:before",t);var e=t.parent();e.hasClass(s.vertical)&&(e.removeClass(s.opened),this.trigger("closePanel",t)),this.trigger("closePanel:after",t)},closeAllPanels:function(){this.trigger("closeAllPanels:before"),this.$pnls.find("."+s.listview).children().removeClass(s.selected).filter("."+s.vertical).removeClass(s.opened);var t=this.$pnls.children("."+s.panel),e=t.first();this.$pnls.children("."+s.panel).not(e).removeClass(s.subopened).removeClass(s.opened).removeClass(s.highest).addClass(s.hidden),this.openPanel(e),this.trigger("closeAllPanels:after")},togglePanel:function(t){var e=t.parent();e.hasClass(s.vertical)&&this[e.hasClass(s.opened)?"closePanel":"openPanel"](t)},setSelected:function(t){this.trigger("setSelected:before",t),this.$menu.find("."+s.listview).children("."+s.selected).removeClass(s.selected),t.addClass(s.selected),this.trigger("setSelected:after",t)},bind:function(t,e){this.cbck[t]=this.cbck[t]||[],this.cbck[t].push(e)},trigger:function(){var t=this,e=Array.prototype.slice.call(arguments),n=e.shift();if(this.cbck[n])for(var i=0,s=this.cbck[n].length;i<s;i++)this.cbck[n][i].apply(t,e)},matchMedia:function(t,e,n){var i={yes:e,no:n};this.mtch[t]=this.mtch[t]||[],this.mtch[t].push(i)},_initAddons:function(){this.trigger("initAddons:before");var e;for(e in t[n].addons)t[n].addons[e].add.call(this),t[n].addons[e].add=function(){};for(e in t[n].addons)t[n].addons[e].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var t=this;this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions});for(var e in this.opts.extensions)this.opts.extensions[e]=this.opts.extensions[e].length?"mm-"+this.opts.extensions[e].join(" mm-"):"",this.opts.extensions[e]&&!function(e){t.matchMedia(e,function(){this.$menu.addClass(this.opts.extensions[e])},function(){this.$menu.removeClass(this.opts.extensions[e])})}(e);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){t(this).attr("id",s.mm(t(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=t('<div class="'+s.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);var e=[s.menu];this.opts.slidingSubmenus||e.push(s.vertical),this.$menu.addClass(e.join(" ")).parent().addClass(s.wrapper),this.trigger("initMenu:after")},_initPanels:function(e){this.trigger("initPanels:before",e),e=e||this.$pnls.children(this.conf.panelNodetype);var n=t(),i=this,a=function(e){e.filter(this.conf.panelNodetype).each(function(){var e=i._initPanel(t(this));if(e){i._initNavbar(e),i._initListview(e),n=n.add(e);var r=e.children("."+s.listview).children("li").children(i.conf.panelNodeType).add(e.children("."+i.conf.classNames.panel));r.length&&a.call(i,r)}})};a.call(this,e),this.opts.initPanels.call(this,n),this.trigger("initPanels:after",n)},_initPanel:function(t){this.trigger("initPanel:before",t);if(t.hasClass(s.panel))return t;if(this.__refactorClass(t,this.conf.classNames.panel,"panel"),this.__refactorClass(t,this.conf.classNames.nopanel,"nopanel"),this.__refactorClass(t,this.conf.classNames.vertical,"vertical"),this.__refactorClass(t,this.conf.classNames.inset,"inset"),t.filter("."+s.inset).addClass(s.nopanel),t.hasClass(s.nopanel))return!1;var e=t.hasClass(s.vertical)||!this.opts.slidingSubmenus;t.removeClass(s.vertical);var n=t.attr("id")||this.__getUniqueId();t.removeAttr("id"),t.is("ul, ol")&&(t.wrap("<div />"),t=t.parent()),t.addClass(s.panel+" "+s.hidden).attr("id",n);var i=t.parent("li");return e?t.add(i).addClass(s.vertical):t.appendTo(this.$pnls),i.length&&(i.data(a.child,t),t.data(a.parent,i)),this.trigger("initPanel:after",t),t},_initNavbar:function(e){if(this.trigger("initNavbar:before",e),!e.children("."+s.navbar).length){var i=e.data(a.parent),r=t('<div class="'+s.navbar+'" />'),o=t[n].i18n(this.opts.navbar.title),l="";if(i&&i.length){if(i.hasClass(s.vertical))return;if(i.parent().is("."+s.listview))var d=i.children("a, span").not("."+s.next);else var d=i.closest("."+s.panel).find('a[href="#'+e.attr("id")+'"]');d=d.first(),i=d.closest("."+s.panel);var c=i.attr("id");switch(o=d.text(),this.opts.navbar.titleLink){case"anchor":l=d.attr("href");break;case"parent":l="#"+c}r.append('<a class="'+s.btn+" "+s.prev+'" href="#'+c+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&e.addClass(s.hasnavbar),r.append('<a class="'+s.title+'"'+(l.length?' href="'+l+'"':"")+">"+o+"</a>").prependTo(e),this.trigger("initNavbar:after",e)}},_initListview:function(e){this.trigger("initListview:before",e);var n=this.__childAddBack(e,"ul, ol");this.__refactorClass(n,this.conf.classNames.nolistview,"nolistview"),n.filter("."+this.conf.classNames.inset).addClass(s.nolistview);var i=n.not("."+s.nolistview).addClass(s.listview).children();this.__refactorClass(i,this.conf.classNames.selected,"selected"),this.__refactorClass(i,this.conf.classNames.divider,"divider"),this.__refactorClass(i,this.conf.classNames.spacer,"spacer");var r=e.data(a.parent);if(r&&r.parent().is("."+s.listview)&&!r.children("."+s.next).length){var o=r.children("a, span").first(),l=t('<a class="'+s.next+'" href="#'+e.attr("id")+'" />').insertBefore(o);o.is("span")&&l.addClass(s.fullsubopen)}this.trigger("initListview:after",e)},_initOpened:function(){this.trigger("initOpened:before");var t=this.$pnls.find("."+s.listview).children("."+s.selected).removeClass(s.selected).last().addClass(s.selected),e=t.length?t.closest("."+s.panel):this.$pnls.children("."+s.panel).first();this.openPanel(e,!1),this.trigger("initOpened:after")},_initAnchors:function(){var e=this;o.$body.on(r.click+"-oncanvas","a[href]",function(i){var a=t(this),r=!1,o=e.$menu.find(a).length;for(var l in t[n].addons)if(t[n].addons[l].clickAnchor.call(e,a,o)){r=!0;break}var d=a.attr("href");if(!r&&o&&d.length>1&&"#"==d.slice(0,1))try{var c=t(d,e.$menu);c.is("."+s.panel)&&(r=!0,e[a.parent().hasClass(s.vertical)?"togglePanel":"openPanel"](c))}catch(h){}if(r&&i.preventDefault(),!r&&o&&a.is("."+s.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){e.__valueOrFn(e.opts.onClick.setSelected,a)&&e.setSelected(t(i.target).parent());var f=e.__valueOrFn(e.opts.onClick.preventDefault,a,"#"==d.slice(0,1));f&&i.preventDefault(),e.__valueOrFn(e.opts.onClick.close,a,f)&&e.close()}})},_initMatchMedia:function(){var t=this;this._fireMatchMedia(),o.$wndw.on(r.resize,function(e){t._fireMatchMedia()})},_fireMatchMedia:function(){for(var t in this.mtch)for(var e=window.matchMedia&&window.matchMedia(t).matches?"yes":"no",n=0;n<this.mtch[t].length;n++)this.mtch[t][n][e].call(this)},_getOriginalMenuId:function(){var t=this.$menu.attr("id");return this.conf.clone&&t&&t.length&&(t=s.umm(t)),t},__api:function(){var e=this,n={};return t.each(this._api,function(t){var i=this;n[i]=function(){var t=e[i].apply(e,arguments);return"undefined"==typeof t?n:t}}),n},__valueOrFn:function(t,e,n){return"function"==typeof t?t.call(e[0]):"undefined"==typeof t&&"undefined"!=typeof n?n:t},__refactorClass:function(t,e,n){return t.filter("."+e).removeClass(e).addClass(s[n])},__findAddBack:function(t,e){return t.find(e).add(t.filter(e))},__childAddBack:function(t,e){return t.children(e).add(t.filter(e))},__filterListItems:function(t){return t.not("."+s.divider).not("."+s.hidden)},__filterListItemAnchors:function(t){return this.__filterListItems(t).children("a").not("."+s.next)},__transitionend:function(t,e,n){var i=!1,s=function(n){"undefined"!=typeof n&&n.target!=t[0]||(i||(t.unbind(r.transitionend),t.unbind(r.webkitTransitionEnd),e.call(t[0])),i=!0)};t.on(r.transitionend,s),t.on(r.webkitTransitionEnd,s),setTimeout(s,1.1*n)},__getUniqueId:function(){return s.mm(t[n].uniqueId++)}},t.fn[n]=function(i,s){e(),i=t.extend(!0,{},t[n].defaults,i),s=t.extend(!0,{},t[n].configuration,s);var a=t();return this.each(function(){var e=t(this);if(!e.data(n)){var r=new t[n](e,i,s);r.$menu.data(n,r.__api()),a=a.add(r.$menu)}}),a},t[n].i18n=function(){var e={};return function(n){switch(typeof n){case"object":return t.extend(e,n),e;case"string":return e[n]||n;case"undefined":default:return e}}}(),t[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransitions||Modernizr.csstransitions}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransf
orms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var s,a,r,o}}($j),/*
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(t){var e="mmenu",n="offCanvas";t[e].addons[n]={setup:function(){if(this.opts[n]){var s=this,a=this.opts[n],o=this.conf[n];r=t[e].glbl,this._api=t.merge(this._api,["open","close","setPage"]),"object"!=typeof a&&(a={}),"top"!=a.position&&"bottom"!=a.position||(a.zposition="front"),a=this.opts[n]=t.extend(!0,{},t[e].defaults[n],a),"string"!=typeof o.pageSelector&&(o.pageSelector="> "+o.pageNodetype),r.$allMenus=(r.$allMenus||t()).add(this.$menu),this.vars.opened=!1;var l=[i.offcanvas];"left"!=a.position&&l.push(i.mm(a.position)),"back"!=a.zposition&&l.push(i.mm(a.zposition)),t[e].support.csstransforms||l.push(i["no-csstransforms"]),t[e].support.csstransforms3d||l.push(i["no-csstransforms3d"]),this.bind("initMenu:after",function(){var t=this;this.setPage(r.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu.addClass(l.join(" ")).parent("."+i.wrapper).removeClass(i.wrapper),this.$menu[o.menuInsertMethod](o.menuInsertSelector);var e=window.location.hash;if(e){var s=this._getOriginalMenuId();s&&s==e.slice(1)&&setTimeout(function(){t.open()},1e3)}}),this.bind("initExtensions:after",function(){for(var t=[i.mm("widescreen"),i.mm("iconbar")],e=0;e<t.length;e++)for(var n in this.opts.extensions)if(this.opts.extensions[n].indexOf(t[e])>-1){!function(e,n){s.matchMedia(e,function(){r.$html.addClass(t[n])},function(){r.$html.removeClass(t[n])})}(n,e);break}}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)})}},add:function(){i=t[e]._c,s=t[e]._d,a=t[e]._e,i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),s.add("style")},clickAnchor:function(t,e){var s=this;if(this.opts[n]){var a=this._getOriginalMenuId();if(a&&t.is('[href="#'+a+'"]')){if(e)return!0;var o=t.closest("."+i.menu);if(o.length){var l=o.data("mmenu");if(l&&l.close)return l.close(),s.__transitionend(o,function(){s.open()},s.conf.transitionDuration),!0}return this.open(),!0}if(r.$page)return a=r.$page.first().attr("id"),a&&t.is('[href="#'+a+'"]')?(this.close(),!0):void 0}}},t[e].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},t[e].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuInsertMethod:"prependTo",menuInsertSelector:"body"},t[e].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var t=this;this._openSetup(),setTimeout(function(){t._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},t[e].prototype._openSetup=function(){var e=this,o=this.opts[n];this.closeAllOthers(),r.$page.each(function(){t(this).data(s.style,t(this).attr("style")||"")}),r.$wndw.trigger(a.resize+"-"+n,[!0]);var l=[i.opened];o.blockUI&&l.push(i.blocking),"modal"==o.blockUI&&l.push(i.modal),o.moveBackground&&l.push(i.background),"left"!=o.position&&l.push(i.mm(this.opts[n].position)),"back"!=o.zposition&&l.push(i.mm(this.opts[n].zposition)),r.$html.addClass(l.join(" ")),setTimeout(function(){e.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(i.opened)},t[e].prototype._openFinish=function(){var t=this;this.__transitionend(r.$page.first(),function(){t.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),r.$html.addClass(i.opening)},t[e].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var e=this;this.__transitionend(r.$page.first(),function(){e.$menu.removeClass(i.opened);var a=[i.opened,i.blocking,i.modal,i.background,i.mm(e.opts[n].position),i.mm(e.opts[n].zposition)];r.$html.removeClass(a.join(" ")),r.$page.each(function(){t(this).attr("style",t(this).data(s.style))}),e.vars.opened=!1,e.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),r.$html.removeClass(i.opening),this.trigger("close:after")}},t[e].prototype.closeAllOthers=function(){r.$allMenus.not(this.$menu).each(function(){var n=t(this).data(e);n&&n.close&&n.close()})},t[e].prototype.setPage=function(e){this.trigger("setPage:before",e);var s=this,a=this.conf[n];e&&e.length||(e=r.$body.find(a.pageSelector),a.noPageSelector.length&&(e=e.not(a.noPageSelector.join(", "))),e.length>1&&a.wrapPageIfNeeded&&(e=e.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),e.each(function(){t(this).attr("id",t(this).attr("id")||s.__getUniqueId())}),e.addClass(i.page+" "+i.slideout),r.$page=e,this.trigger("setPage:after",e)},t[e].prototype["_initWindow_"+n]=function(){r.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(t){if(r.$html.hasClass(i.opened)&&9==t.keyCode)return t.preventDefault(),!1});var t=0;r.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(e,n){if(1==r.$page.length&&(n||r.$html.hasClass(i.opened))){var s=r.$wndw.height();(n||s!=t)&&(t=s,r.$page.css("minHeight",s))}})},t[e].prototype._initBlocker=function(){var e=this;this.opts[n].blockUI&&(r.$blck||(r.$blck=t('<div id="'+i.blocker+'" class="'+i.slideout+'" />')),r.$blck.appendTo(r.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(t){t.preventDefault(),t.stopPropagation(),r.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(t){t.preventDefault(),r.$html.hasClass(i.modal)||(e.closeAllOthers(),e.close())}))};var i,s,a,r}($j),/*
 * jQuery mmenu scrollBugFix add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(t){var e="mmenu",n="scrollBugFix";t[e].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];r=t[e].glbl,t[e].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof s&&(s={fix:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=t.extend(!0,{},t[e].defaults[n],s),s.fix&&(this.bind("open:start",function(){this.$pnls.children("."+i.opened).scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+n]()})))},add:function(){i=t[e]._c,s=t[e]._d,a=t[e]._e},clickAnchor:function(t,e){}},t[e].defaults[n]={fix:!0},t[e].prototype["_initWindow_"+n]=function(){var e=this;r.$docu.off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,function(t){r.$html.hasClass(i.opened)&&t.preventDefault()});var s=!1;r.$body.off(a.touchstart+"-"+n).on(a.touchstart+"-"+n,"."+i.panels+"> ."+i.panel,function(t){r.$html.hasClass(i.opened)&&(s||(s=!0,0===t.currentTarget.scrollTop?t.currentTarget.scrollTop=1:t.currentTarget.scrollHeight===t.currentTarget.scrollTop+t.currentTarget.offsetHeight&&(t.currentTarget.scrollTop-=1),s=!1))}).off(a.touchmove+"-"+n).on(a.touchmove+"-"+n,"."+i.panels+"> ."+i.panel,function(e){r.$html.hasClass(i.opened)&&t(this)[0].scrollHeight>t(this).innerHeight()&&e.stopPropagation()}),r.$wndw.off(a.orientationchange+"-"+n).on(a.orientationchange+"-"+n,function(){e.$pnls.children("."+i.opened).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})};var i,s,a,r}($j),/*
 * jQuery mmenu keyboardNavigation add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */function(e){function t(t,n){t=t||this.$pnls.children("."+a.opened);var i=e(),s=this.$menu.children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar);s.find(d).filter(":focus").length||("default"==n&&(i=t.children("."+a.listview).find("a[href]").not("."+a.hidden),i.length||(i=t.find(d).not("."+a.hidden)),i.length||(i=s.find(d).not("."+a.hidden))),i.length||(i=this.$menu.children("."+a.tabstart)),i.first().focus())}function n(e){e||(e=this.$pnls.children("."+a.opened));var t=this.$pnls.children("."+a.panel),n=t.not(e);n.find(d).attr("tabindex",-1),e.find(d).attr("tabindex",0),e.find("."+a.mm("toggle")+", ."+a.mm("check")).attr("tabindex",-1),e.children("."+a.navbar).children("."+a.title).attr("tabindex",-1)}var i="mmenu",s="keyboardNavigation";e[i].addons[s]={setup:function(){if(!e[i].support.touch){var o=this.opts[s];this.conf[s];if(l=e[i].glbl,"boolean"!=typeof o&&"string"!=typeof o||(o={enable:o}),"object"!=typeof o&&(o={}),o=this.opts[s]=e.extend(!0,{},e[i].defaults[s],o),o.enable){var r=e('<button class="'+a.tabstart+'" tabindex="0" type="button" />'),d=e('<button class="'+a.tabend+'" tabindex="0" type="button" />');this.bind("initMenu:after",function(){o.enhance&&this.$menu.addClass(a.keyboardfocus),this["_initWindow_"+s](o.enhance)}),this.bind("initOpened:before",function(){this.$menu.prepend(r).append(d).children("."+a.mm("navbars-top")+", ."+a.mm("navbars-bottom")).children("."+a.navbar).children("a."+a.title).attr("tabindex",-1)}),this.bind("open:start",function(){n.call(this)}),this.bind("open:finish",function(){t.call(this,null,o.enable)}),this.bind("openPanel:start",function(e){n.call(this,e)}),this.bind("openPanel:finish",function(e){t.call(this,e,o.enable)}),this.bind("initOpened:after",function(){this.__sr_aria(this.$menu.children("."+a.mm("tabstart")+", ."+a.mm("tabend")),"hidden",!0)})}}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e,a.add("tabstart tabend keyboardfocus"),r.add("focusin keydown")},clickAnchor:function(e,t){}},e[i].defaults[s]={enable:!1,enhance:!1},e[i].configuration[s]={},e[i].prototype["_initWindow_"+s]=function(t){l.$wndw.off(r.keydown+"-offCanvas"),l.$wndw.off(r.focusin+"-"+s).on(r.focusin+"-"+s,function(t){if(l.$html.hasClass(a.opened)){var n=e(t.target);n.is("."+a.tabend)&&n.parent().find("."+a.tabstart).focus()}}),l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){i.data("mmenu");if(n.is("input, textarea"));else switch(t.keyCode){case 13:(n.is(".mm-toggle")||n.is(".mm-check"))&&n.trigger(r.click);break;case 32:case 37:case 38:case 39:case 40:t.preventDefault()}}}),t&&l.$wndw.off(r.keydown+"-"+s).on(r.keydown+"-"+s,function(t){var n=e(t.target),i=n.closest("."+a.menu);if(i.length){var s=i.data("mmenu");if(n.is("input, textarea"))switch(t.keyCode){case 27:n.val("")}else switch(t.keyCode){case 8:var r=n.closest("."+a.panel).data(o.parent);r&&r.length&&s.openPanel(r.closest("."+a.panel));break;case 27:i.hasClass(a.offcanvas)&&s.close()}}})};var a,o,r,l,d="input, select, textarea, button, label, a[href]"}($j),
function(e){var t="mmenu",n="navbars";e[t].addons[n]={setup:function(){var s=this,a=this.opts[n],r=this.conf[n];if(o=e[t].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);var l={},d={};a.length&&(e.each(a,function(o){var c=a[o];"boolean"==typeof c&&c&&(c={}),"object"!=typeof c&&(c={}),"undefined"==typeof c.content&&(c.content=["prev","title"]),c.content instanceof Array||(c.content=[c.content]),c=e.extend(!0,{},s.opts.navbar,c);var h=e('<div class="'+i.navbar+'" />'),f=c.height;"number"!=typeof f&&(f=1),f=Math.min(4,Math.max(1,f)),h.addClass(i.navbar+"-size-"+f);var u=c.position;"bottom"!=u&&(u="top"),l[u]||(l[u]=0),l[u]+=f,d[u]||(d[u]=e('<div class="'+i.navbars+"-"+u+'" />')),d[u].append(h);for(var p=0,v=0,m=c.content.length;v<m;v++){var b=e[t].addons[n][c.content[v]]||!1;b?p+=b.call(s,h,c,r):(b=c.content[v],b instanceof e||(b=e(c.content[v])),h.append(b))}p+=Math.ceil(h.children().not("."+i.btn).length/f),p>1&&h.addClass(i.navbar+"-content-"+p),h.children("."+i.btn).length&&h.addClass(i.hasbtns)}),this.bind("initMenu:after",function(){for(var e in l)this.$menu.addClass(i.hasnavbar+"-"+e+"-"+l[e]),this.$menu["bottom"==e?"append":"prepend"](d[e])}))}},add:function(){i=e[t]._c,s=e[t]._d,a=e[t]._e,i.add("navbars close hasbtns")},clickAnchor:function(e,t){}},e[t].configuration[n]={breadcrumbSeparator:"/"},e[t].configuration.classNames[n]={};var i,s,a,o}($j),function(e){var t="mmenu",n="navbars",i="breadcrumbs";e[t].addons[n][i]=function(n,i,s){var a=this,o=e[t]._c,r=e[t]._d;o.add("breadcrumbs separator");var l=e('<span class="'+o.breadcrumbs+'" />').appendTo(n);return this.bind("initNavbar:after",function(t){t.removeClass(o.hasnavbar);for(var n=[],i=e('<span class="'+o.breadcrumbs+'"></span>'),a=t,l=!0;a&&a.length;){if(a.is("."+o.panel)||(a=a.closest("."+o.panel)),!a.hasClass(o.vertical)){var d=a.children("."+o.navbar).children("."+o.title).text();n.unshift(l?"<span>"+d+"</span>":'<a href="#'+a.attr("id")+'">'+d+"</a>"),l=!1}a=a.data(r.parent)}i.append(n.join('<span class="'+o.separator+'">'+s.breadcrumbSeparator+"</span>")).appendTo(t.children("."+o.navbar))}),this.bind("openPanel:start",function(e){l.html(e.children("."+o.navbar).children("."+o.breadcrumbs).html()||"")}),this.bind("initNavbar:after:sr-aria",function(t){t.children("."+o.navbar).children("."+o.breadcrumbs).children("a").each(function(){a.__sr_aria(e(this),"owns",e(this).attr("href").slice(1))})}),0}}($j),function(e){var t="mmenu",n="navbars",i="close";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=(e[t].glbl,e('<a class="'+s.close+" "+s.btn+'" href="#" />').appendTo(n));return this.bind("setPage:after",function(e){a.attr("href","#"+e.attr("id"))}),this.bind("setPage:after:sr-text",function(n){a.html(this.__sr_text(e[t].i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(a,"owns",a.attr("href").slice(1))}),-1}}($j),function(e){var t="mmenu",n="navbars",i="next";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.next+" "+l.btn+'" href="#" />').appendTo(i);return this.bind("openPanel:start",function(e){a=e.find("."+this.conf.classNames[n].panelNext),o=a.attr("href"),r=a.html(),o?d.attr("href",o):d.removeAttr("href"),d[o||r?"removeClass":"addClass"](l.hidden),d.html(r)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(d,"hidden",d.hasClass(l.hidden)),this.__sr_aria(d,"owns",(d.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelNext="Next"}($j),function(e){var t="mmenu",n="navbars",i="prev";e[t].addons[n][i]=function(i,s){var a=e[t]._c,o=e('<a class="'+a.prev+" "+a.btn+'" href="#" />').appendTo(i);this.bind("initNavbar:after",function(e){e.removeClass(a.hasnavbar)});var r,l,d;return this.bind("openPanel:start",function(e){e.hasClass(a.vertical)||(r=e.find("."+this.conf.classNames[n].panelPrev),r.length||(r=e.children("."+a.navbar).children("."+a.prev)),l=r.attr("href"),d=r.html(),l?o.attr("href",l):o.removeAttr("href"),o[l||d?"removeClass":"addClass"](a.hidden),o.html(d))}),this.bind("initNavbar:after:sr-aria",function(e){var t=e.children("."+a.navbar);this.__sr_aria(t,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(e){this.__sr_aria(o,"hidden",o.hasClass(a.hidden)),this.__sr_aria(o,"owns",(o.attr("href")||"").slice(1))}),-1},e[t].configuration.classNames[n].panelPrev="Prev"}($j),/*
 * jQuery mmenu navbar add-on searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="searchfield";e[t].addons[n][i]=function(n,i){var s=e[t]._c,a=e('<div class="'+s.search+'" />').appendTo(n);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=a,0}}($j),/*
 * jQuery mmenu navbar add-on title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="navbars",i="title";e[t].addons[n][i]=function(i,s){var a,o,r,l=e[t]._c,d=e('<a class="'+l.title+'" />').appendTo(i);this.bind("openPanel:start",function(e){e.hasClass(l.vertical)||(r=e.find("."+this.conf.classNames[n].panelTitle),r.length||(r=e.children("."+l.navbar).children("."+l.title)),a=r.attr("href"),o=r.html()||s.title,a?d.attr("href",a):d.removeAttr("href"),d[a||o?"removeClass":"addClass"](l.hidden),d.html(o))});var c;return this.bind("openPanel:start:sr-aria",function(e){if(this.opts.screenReader.text&&(c||(c=this.$menu.children("."+l.navbars+"-top, ."+l.navbars+"-bottom").children("."+l.navbar).children("."+l.prev)),c.length)){var t=!0;"parent"==this.opts.navbar.titleLink&&(t=!c.hasClass(l.hidden)),this.__sr_aria(d,"hidden",t)}}),0},e[t].configuration.classNames[n].panelTitle="Title"}($j),
/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(t){var e="mmenu",n="screenReader";t[e].addons[n]={setup:function(){var a=this,o=this.opts[n],l=this.conf[n];r=t[e].glbl,"boolean"==typeof o&&(o={aria:o,text:o}),"object"!=typeof o&&(o={}),o=this.opts[n]=t.extend(!0,{},t[e].defaults[n],o),o.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("open:finish",function(){this.trigger("open:finish:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+i.listview).children().each(function(){a.__sr_aria(t(this),"hidden",t(this).is("."+i.hidden))})}),this.bind("openPanel:start",function(t){var e=this.$menu.find("."+i.panel).not(t).not(t.parents("."+i.panel)),n=t.add(t.find("."+i.vertical+"."+i.opened).children("."+i.panel));this.__sr_aria(e,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(t){this.__sr_aria(t,"hidden",!0)}),this.bind("initPanels:after",function(e){var n=e.find("."+i.prev+", ."+i.next).each(function(){a.__sr_aria(t(this),"owns",t(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(t){var e=t.children("."+i.navbar);this.__sr_aria(e,"hidden",!t.hasClass(i.hasnavbar))}),o.text&&(this.bind("initlistview:after",function(t){var e=t.find("."+i.listview).find("."+i.fullsubopen).parent().children("span");this.__sr_aria(e,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(t){var e=t.children("."+i.navbar),n=!!e.children("."+i.prev).length;this.__sr_aria(e.children("."+i.title),"hidden",n)}))),o.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var s=n.children("."+i.navbar),a=s.children("."+i.title).text(),r=t[e].i18n(l.text.closeSubmenu);a&&(r+=" ("+a+")"),s.children("."+i.prev).html(this.__sr_text(r))}),this.bind("initListview:after",function(n){var r=n.data(s.parent);if(r&&r.length){var o=r.children("."+i.next),d=o.nextAll("span, a").first().text(),c=t[e].i18n(l.text[o.parent().is("."+i.vertical)?"toggleSubmenu":"openSubmenu"]);d&&(c+=" ("+d+")"),o.html(a.__sr_text(c))}}))},add:function(){i=t[e]._c,s=t[e]._d,a=t[e]._e,i.add("sronly")},clickAnchor:function(t,e){}},t[e].defaults[n]={aria:!0,text:!0},t[e].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},t[e].prototype.__sr_aria=function(t,e,n){t.prop("aria-"+e,n)[n?"attr":"removeAttr"]("aria-"+e,n)},t[e].prototype.__sr_text=function(t){return'<span class="'+i.sronly+'">'+t+"</span>"};var i,s,a,r}($j);return true;
}));


$j( document ).ready(function() {

  var foooterContent = $j("#toplinks .top-group-container").html(); 
//   $j("#menu-links .top-group-container").html('');
 
/*--- Check Ip3 edit class Starts ---*/ 
 if(!$j('body').hasClass('ip3-edit')){

	$j('#topnavigation').mmenu({
   extensions	: [ 'fx-menu-slide', 'shadow-page', 'shadow-panels', 'listview-large', 'pagedim-black'],
					iconPanels	: false,
					counters	: false,
					keyboardNavigation : {
						enable	: true,
						enhance	: true
					},
					navbars: [
						{
							position	: 'bottom',
							content		: ["<div class='bottomContet'>"+foooterContent+"</div>" ],
						}
					],
	  "offCanvas": {
      "position": "right",
      "zposition" : "front"
    }
	},{
    offCanvas:{
      pageSelector:"#MainWrapper",
      position: "right",
      menuInsertSelector:'#MainForm'
    }
});

 
//$j(foooterContent).wrapAll("<div class='has-mm-navbar'></div>").insertAfter('.mm-panel:last-child'); 
$j('span.closemmenu').prependTo("#topnavigation > .mm-panels > .mm-panel");

$j('.mm-navbars-bottom .group-sites a').click(function(){
     $j('.mm-navbars-bottom').toggleClass('active');	
});

 /*$j("#topnavigation").mmenu({
extensions: ["multiline"],
    navbar: {
      title: ""
    },
    "navbars": [
      {
        "position": "top",
        "content": [""]
      },
      {
        "position": "bottom",
        "content": ["<div class='bottonContet'>"+foooterContent+"</div>"]
      }
    ],
    "offCanvas": {
      "position": "right",
      "zposition" : "front"
    },
  },{
    offCanvas:{
      pageSelector:"#MainWrapper",
      position: "right",
      menuWrapperSelector:'#MainForm'
    }
  });*/
  
  
  $j.mmenu.configuration.classNames.navbars = {
    panelTitle  : "Title",
    panelNext   : "Next",
    panelPrev   : "Prev"/*,
    fixed		: "Fixed"*/
   };
  
  $j('.mm-navbar').each(function(e){
    var text_menu = $j(this).find('a.mm-prev').text();
    $j(this).find('a.mm-prev').text('Back');
    //$j(this).append($j( "<span class='newSubtitle'>"+text_menu+"</span>"));
  });
 
//  $j(".mm-listview").append("<div class='mm-footer'><div class='bottonContet'>"+foooterContent+"</div></div>");
 
 API = $j("#topnavigation").data( "mmenu" ); 
/*  $j(document).on('touchstart click','.hide-content',function(){
    $j("body").removeClass("mobiclicked opaque1");
    $j(".hambg").removeClass("active");
    API.close();
  });*/
  
$j('.closemmenu').click(function(){
    $j("body").removeClass("mobiclicked opaque1");
    $j("#topnavigation").removeClass("active");
    API.close();
  });
$j('.mobi-menu-wrapper li.haschildren a.mm-next').each(function(){
	var NxtId = $j(this).attr('aria-owns');
	var NxtPage = $j(this).next('a').attr('href');
	$j("#"+NxtId+" .mm-navbar .mm-title").attr('href',NxtPage);
  });


if(window.location.href.indexOf('site-services') > -1){
    
  }
  else{
    if(!$j('#topnavigation ul li').hasClass('current')){    
      var cur = $j('#topnavigation ul li.selected.haschildren').last().find('.mm-next').attr('href');
      $j('.mm-panel').removeClass('mm-current mm-opened');
      $j(cur).addClass('mm-current mm-opened').removeClass('mm-hidden');
    }
    else {
      var cur = $j('#topnavigation ul li.current').closest('.mm-panel');
      $j('.mm-panel').removeClass('mm-current mm-opened');
      $j(cur).addClass('mm-current mm-opened').removeClass('mm-hidden');           
    }
  }  
  
  if (!$j('.mm-panels > div').hasClass('mm-current mm-opened')) {
    $j('#mm-0').addClass('mm-current mm-opened').removeClass('mm-hidden');        
  }

var BackID = $j('.mobi-menu-wrapper .mm-panel.mm-current .mm-btn.mm-prev').attr('href');
$j(".mobi-menu-wrapper "+BackID).addClass('mm-subopened');

$j(".mm-panel .mm-title:contains('FutureSmart MiningTM')").html("FutureSmart Mining<sup>TM</sup>");  

}
  
});
/*!---- responsive-----*/
/*!
 * jQuery lightweight responsive web adaptation plugin
 * Original author: @stildv
 * Copyright © 2011: Devrim Vardar, @stildv -- http://stild.com/
 * Further changes, comments: @stildv -- http://stild.com/code/jquery-responsive-web/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://stild.com/license/
 * Date: Thu Oct 20 01:27:32 2011 +0300
 * Version: 1.00 (20-OCT-2010)
 * PS. I am not a wonderful coder, I neither have the patience nor the repertoire so this is almost as good as I get. Cheers. :)
 */

(function($j, window, document, undefined) { 
  $j.responsiveWeb = function(element, options) {
    var windowadaptTimeout;
    var tempCounter = 0;
    var winWidth;
    var winHeight;
    this.options = {};
    var that = this;
    element.data('responsiveWeb', this);
    this.init = function(element, options) {
      this.options = $j.extend({}, $j.responsiveWeb.defaultOptions, options);
      options = this.options;
      element.resize(checkResize);
      checkResize();
      if (options.manipulateDesign) {
        manipulateDesign();
      }
    };
    
    function delayedResize() {
      options = that.options;
      //window.status = ++tempCounter;
      var winNewWidth = $j(window).width();
      var winNewHeight = $j(window).height();
      if (winWidth != winNewWidth || winHeight != winNewHeight) {
        winWidth = winNewWidth;
        winHeight = winNewHeight;
        if (options.applyBodyClasses) {
          applyBodyClasses();
        }
        if (options.rearrangeObjects) {
          rearrangeObjects();
        }
      }
      //$j('body div.loadingDiv').remove();
    }
    
    function checkResize() {
      //window.scrollTo(0, 1);
      //$j('body').append('<div class="loadingDiv" style="width:100%;height:100%;position:absolute;left:0;top:0;zoom:1;filter:alpha(opacity=85);opacity:0.85;background:#AAA url(\'img/loading.gif\') no-repeat center center;">loading...</div>');
      window.clearTimeout(windowadaptTimeout);
      windowadaptTimeout = window.setTimeout(delayedResize, 250);
    }
    
    function applyBodyClasses() {
      options = that.options;
      clearBodyClasses();
      var currcC = '';
      var tmpWidth = decideResolution();
      var tmpArrWidth = tmpWidth.split(" ");
      tmpWidth = tmpArrWidth[0];
      if (options.applyPlatform) {
        currcC += decidePlatform();
      }
      if (options.applyBrowser) {
        currcC += decideBrowser();
      }
      if (options.applyResolution) {
        currcC += decideResolution();
      }
      $j('body').addClass(currcC);
      $j('body').attr("data-width", tmpWidth.substr(1));
      if (options.debug) {
        log(winWidth + 'x' + winHeight + ' || ' + $j('body').attr('class'));
      }
    }
    
    function log(str) {
      var debugDiv = '<div class="debugDiv" style="position:absolute;top:0;right:0;padding:2px;background:black;color:lime;font-size:9px;line-height:9px;"></div>';
      if ($j('.debugDiv ul').length) {
        $j('.debugDiv ul').append('<li>' + str + '</li>');
      } else {
        $j('body').append(debugDiv);
        $j('.debugDiv').append('<ul></ul>');
        $j('.debugDiv ul').append('<li>' + str + '</li>');
      }
    }
    
    function decidePlatform() {
      var cC = '';
      var platform = navigator.userAgent;
      if (platform.indexOf('Windows') > 0) {
        cC = 'windows' + ' ';
      } else if (platform.indexOf('Linux') > 0 && platform.indexOf('Android') < 0) {
        cC = 'linux' + ' ';
      } else if (platform.indexOf('Mac') > 0 && (platform.indexOf('iphone') < 0 || platform.indexOf('ipad') < 0)) {
        cC = 'mac' + ' ';
      } else if (platform.indexOf('iPhone') > 0) {
        cC = 'iphone' + ' ';
      } else if (platform.indexOf('iPad') > 0) {
        cC = 'ipad' + ' ';
      } else if (platform.indexOf('Android') > 0) {
        cC = 'android' + ' ';
      }
      return cC;
    }
    
    function decideBrowser() {
      var cC = '';
      options = that.options;
      var nVer = navigator.appVersion;
      var nAgt = navigator.userAgent;
      var browserName = navigator.appName;
      var fullVersion = '' + parseFloat(navigator.appVersion);
      var majorVersion = parseInt(navigator.appVersion, 10);
      var nameOffset, verOffset, ix;
      if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "opera";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
          fullVersion = nAgt.substring(verOffset + 8);
      } else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browserName = "msie";
        fullVersion = nAgt.substring(verOffset + 5);
      } else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "chrome";
        fullVersion = nAgt.substring(verOffset + 7);
      } else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "safari";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
          fullVersion = nAgt.substring(verOffset + 8);
      } else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "firefox";
        fullVersion = nAgt.substring(verOffset + 8);
      } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
          browserName = navigator.appName;
        }
      }
      if ((ix = fullVersion.indexOf(";")) != -1) fullVersion = fullVersion.substring(0, ix);
      if ((ix = fullVersion.indexOf(" ")) != -1) fullVersion = fullVersion.substring(0, ix);
      majorVersion = parseInt('' + fullVersion, 10);
      if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
      }
      if (options.applyBrowser) {
        cC += browserName + ' ';
      }
      if (options.applyBrowserVersion) {
        cC += browserName + majorVersion + ' ';
      }
      return cC;
    }
    
    function decideResolution() {
      var h = $j(window).height();
      var w = $j(window).width();
      var cC = '';
      if (w >= 1880) {
        cC = 'w1920' + ' ';
      } else if (w >= 1560) {
        cC = 'w1600' + ' ';
      } else if (w >= 1400) {
        cC = 'w1440' + ' ';
      } else if (w >= 1240) {
        cC = 'w1280' + ' ';
      } else if (w >= 984) {
        cC = 'w1024' + ' ';
      } else if (w >= 728) {
        cC = 'w768' + ' ';
      } else if (w >= 440) {
        cC = 'w480' + ' ';
      } else if (w >= 280) {
        cC = 'w320' + ' ';
      } else {
        cC = 'wtiny' + ' ';
      }
      if (h >= 864) {
        cC += 'h1024' + ' ';
      } else if (h >= 740) {
        cC += 'h900' + ' ';
      } else if (h >= 608) {
        cC += 'h768' + ' ';
      } else if (h >= 440) {
        cC += 'h600' + ' ';
      } else if (h >= 320) {
        cC += 'h480' + ' ';
      } else {
        cC += 'htiny' + ' ';
      }
      return cC;
    }
    
    function clearBodyClasses() {
      $j('body').removeClass('w1920 w1600 w1440 w1280 w1024 w768 w480 w320 wtiny h1024 h900 h768 h600 h480 htiny');
    }
    this.init(element, options);
  };
  $j.fn.responsiveWeb = function(options) {
    return this.each(function() {
      (new $j.responsiveWeb($j(this), options));
    });
  };
  $j.responsiveWeb.defaultOptions = {
    applyBodyClasses: true,
    applyResolution: true,
    applyPlatform: true,
    applyBrowser: true,
    applyBrowserVersion: true,
    manipulateDesign: true,
    rearrangeObjects: true,
    debug: false
  };
})($j, window, document);

function manipulateDesign() {}

function checkForReadmoreButton(selectedDiv){
  var h1=$j(selectedDiv).find('.testimonial-right-content').outerHeight();
  var h2=$j(selectedDiv).find('.testimonial-right-content-inner').outerHeight();
  
  if(h2 > h1){
    $j(selectedDiv).addClass('enable-readmore');
  }else{
    $j(selectedDiv).removeClass('enable-readmore');
  }
}
  
function rearrangeObjects() {
  /*testimonial functioanlity*/
  $j('.module-testimonial').each(function(moduleIndex){
    var testimonialID=$j(this).find('.mt-slider-for .testimonial-content:visible').attr('id');
    checkForReadmoreButton('#'+testimonialID+'.testimonial-content');
  });
  
  if(typeof API != 'undefined'){
    API.close();
  }
  //window.setTimeout(FrameManager.resizeFrames, 300);
  currWidth = $j(window).width();
  winHeight = $j(window).height();
  
  /*card carousal*/
  if($j('.card-carousel-wrapper .card-content-wrap').length>0){
  setTimeout(function(){
    setEqualHeight_CommonClass('.card-carousel-wrapper .card-content-wrap');
  }, 100);
  }
  
  /*Module tabs with 3 col cards*/
  $j('.mod-tabs-3col-cards').each(function(){
    var modId=$j(this).attr('id');
    setCardItemEqualHeight(modId);
  });
  
  $j('.mod-3column-cards').each(function(){
    var modId=$j(this).attr('id');
    setCardItemEqualHeight1(modId);
  });
  /*Module tabs with 3 col cards*/
  
  if ( currWidth > 767) {
    if ( $j('#ourworld').attr('dir') == 'ltr' ) {
      $j('#ourworld').attr('dir', 'rtl');
    }
  }
  else{
    if ( $j('#ourworld').attr('dir') == 'rtl' ) {
      $j('#ourworld').attr('dir', 'ltr');
    }
  }
  
  /*--  Leadership for mobile starts  --*/
  /*---   For Leadership team page starts   ---*/  
  /*--  new logic starts  --*/
  if ( currWidth < 767 ) {
 setEqualHeight_CommonClass('.our-stories .small-bod-item');
    $j( window ).on( "orientationchange", function( event ) {
if( $j(".module-bod-wrapper.two-col .bod-item .active").length > 0 ){
      $j(".module-bod-wrapper.two-col .bod-item .active").removeClass('active');
      $j('.module-bod-wrapper.two-col .bod-item').removeClass('fadded');
      $j(".module-bod-wrapper.two-col .bod-full-wrap").removeClass('active').css('display','none');
    }
});
    
  }
  /*--  New logic ends  --*/
  
  /*--  Leadership for mobile ends  --*/
  
  /*--  Glossary page scrolling tabs starts  --*/
  if( $j('.glossary-page').length > 0 ) {
    if( currWidth < 992 ){
      if( $j(".scrtabs-tabs-movable-container").length <= 0 ){
        
        $j('.glossary-navigation ul').scrollingTabs({
          disableScrollArrowsOnFullyScrolled: true
        });
      }
    }
    else{
      if( $j(".scrtabs-tabs-movable-container").length > 0 ){
        $j('.glossary-navigation ul').scrollingTabs('destroy');
      }
    }
  }
  
  if( $j('.glossary-ir-page').length > 0 ) {
    if( currWidth < 992 ){
      if( $j(".scrtabs-tabs-movable-container").length <= 0 ){
        
        $j('.glossary-ir-content ul.glossary-link').scrollingTabs({
          disableScrollArrowsOnFullyScrolled: true
        });
      }
    }
    else{
      if( $j(".scrtabs-tabs-movable-container").length > 0 ){
        $j('.glossary-ir-content ul.glossary-link').scrollingTabs('destroy');
      }
    }
  }
  
  /*--  Glossary tabs scrolling tabs ends  --*/
  
  /*--  Signpost carousel module left offset starts  --*/
  if( currWidth > 992 ){
    if( $j(".offset-marker").length > 0 ){
      
      var x = $j(".module-signpost-carousel .offset-marker").offset();
      $j(".sco-wrap").css("margin-left", Math.round(x.left - 4));
      
    }
  }
  
  //if( currWidth >= 768 ){
  
  setTimeout(function(){
    $j('.swiper-container').each(function(index){
      swiper[index].update();
      //swiper[index].scrollbar.updateSize();
      //swiper[index].virtual.update();
      //swiper[index].pagination.update();
    });
  },500);
  
  //}
  
  /*--  Signpost carousel module left offset ends  --*/
  
  /*--  Leadership team page starts  --*/
  if( !$j(".leadership-team-landing ul.rb-tabs li#rb-board").hasClass("current") ){
    $j(".leadership-team-landing ul.rb-tabs li#rb-board > a").trigger('click');
  }
  /*--  Leadership team page ends  --*/
  
  /*---   Bind unbind click   ---*/
  
  if ( currWidth > 639 ) {
    $j('.leadership-team-landing .bod-item .bod-item-inner').off();
    $j('.leadership-team-landing .bod-item:not(.no-bio) .bod-item-inner').on("click", function() {
      
      bodDetails = $j(this).next().html();      
      $j(this).parent().nextAll('.bod-full-wrap.dsktp').find('.inner').html(bodDetails);
      
      if ($j(this).hasClass("active")) 
      {
        $j(this).removeClass("active");      
        $j(this).parents('.module-bod-wrapper').find('.bod-full-wrap.dsktp').removeClass("active").slideUp(600);
        $j(this).parents('.module-bod-wrapper').find('.bod-item').removeClass("fadded");
      }
      else{
        $j(this).parents('.module-bod-wrapper').find('.bod-full-wrap.dsktp').removeClass("active").hide();
        $j(this).parent().siblings('.bod-full-wrap.dsktp').addClass("active").slideDown(600);
        $j(this).parents('.module-bod-wrapper').find('.bod-item').addClass("fadded");
        $j(this).parent().removeClass("fadded");
        $j(this).parents('.module-bod-wrapper').find('.bod-item-inner').removeClass("active");
        $j(this).addClass("active");
      }
    });
  }
  else{
    $j('.leadership-team-landing .bod-item .bod-item-inner').off();
    $j('.leadership-team-landing .bod-item:not(.no-bio) .bod-item-inner').on("click", function() {    
           
      if ($j(this).hasClass("active")) 
      {
        $j(this).removeClass("active");      
        $j(this).next().removeClass("active").slideUp();
        $j('.bod-item-inner').parent().removeClass("fadded");
      }
      else{
        $j(this).parents('.module-bod-wrapper').find('.bod-item-inner').removeClass("active");
        $j('.bod-item-inner').not(this).next('.bod-full-wrap.mbl').removeClass("active").slideUp();
        $j(this).parents('.module-bod-wrapper').find('.bod-item').addClass("fadded");
        $j(this).parent().removeClass("fadded");
        $j(this).addClass("active");      
        $j(this).next().addClass("active").slideDown(600);
      }
    });
  }
  
  /*---   Bind unbind click   ---*/
  
} //  End of rearrangeObjects fn

function is_touch_device() {
  return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

$j(document).ready(function () {
  $j(window).responsiveWeb({
    applyBodyClasses: true,
    applyResolution: true,
    applyPlatform: true,
    applyBrowser: true,
    applyBrowserVersion: false,
    manipulateDesign: true,
    rearrangeObjects: true
  });
  
  /*--- error page redirection and counter starts --------*/
  if ($j('body').attr('id') == 'error-page' && !$j('body').hasClass('ip3-edit')) {
    var counter_value = parseInt($j('.counter').html());
    var cnt = setInterval(function() {
      counter_value--;
      if(counter_value < 10){
        $j('.counter').html('0' + counter_value);
      }
      else{
        $j('.counter').html(counter_value);
      }
      if (counter_value <= 0) {
        window.location.href = window.location.protocol + '//' + window.location.hostname;
        clearInterval(cnt);
      }
    }, 1000);
    
  }
  /*--- error page redirection and counter ends --------*/
  
});
/*!---- slick-min-----*/
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
  'use strict';
  /*if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        
    }*/
  factory($j);
}(function($j) {
  'use strict';
  var Slick = window.Slick || {};
  
  Slick = (function() {
    
    var instanceUid = 0;
    
    function Slick(element, settings) {
      
      var _ = this, dataSettings;
      
      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $j(element),
        appendDots: $j(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function(slider, i) {
          return $j('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      
      $j.extend(_, _.initials);
      
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $j(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      
      dataSettings = $j(element).data('slick') || {};
      
      _.options = $j.extend({}, _.defaults, settings, dataSettings);
      
      _.currentSlide = _.options.initialSlide;
      
      _.originalSettings = _.options;
      
      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }
      
      _.autoPlay = $j.proxy(_.autoPlay, _);
      _.autoPlayClear = $j.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $j.proxy(_.autoPlayIterator, _);
      _.changeSlide = $j.proxy(_.changeSlide, _);
      _.clickHandler = $j.proxy(_.clickHandler, _);
      _.selectHandler = $j.proxy(_.selectHandler, _);
      _.setPosition = $j.proxy(_.setPosition, _);
      _.swipeHandler = $j.proxy(_.swipeHandler, _);
      _.dragHandler = $j.proxy(_.dragHandler, _);
      _.keyHandler = $j.proxy(_.keyHandler, _);
      
      _.instanceUid = instanceUid++;
      
      // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      
      
      _.registerBreakpoints();
      _.init(true);
      
    }
    
    return Slick;
    
  }());
  
  Slick.prototype.activateADA = function() {
    var _ = this;
    
    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
    
  };
  
  Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
    
    var _ = this;
    
    if (typeof(index) === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || (index >= _.slideCount)) {
      return false;
    }
    
    _.unload();
    
    if (typeof(index) === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $j(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $j(markup).insertBefore(_.$slides.eq(index));
      } else {
        $j(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $j(markup).prependTo(_.$slideTrack);
      } else {
        $j(markup).appendTo(_.$slideTrack);
      }
    }
    
    _.$slides = _.$slideTrack.children(this.options.slide);
    
    _.$slideTrack.children(this.options.slide).detach();
    
    _.$slideTrack.append(_.$slides);
    
    _.$slides.each(function(index, element) {
      $j(element).attr('data-slick-index', index);
    });
    
    _.$slidesCache = _.$slides;
    
    _.reinit();
    
  };
  
  Slick.prototype.animateHeight = function() {
    var _ = this;
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };
  
  Slick.prototype.animateSlide = function(targetLeft, callback) {
    
    var animProps = {},
        _ = this;
    
    _.animateHeight();
    
    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
      
    } else {
      
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -(_.currentLeft);
        }
        $j({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function(now) {
            now = Math.ceil(now);
            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' +
                now + 'px, 0px)';
              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' +
                now + 'px)';
              _.$slideTrack.css(animProps);
            }
          },
          complete: function() {
            if (callback) {
              callback.call();
            }
          }
        });
        
      } else {
        
        _.applyTransition();
        targetLeft = Math.ceil(targetLeft);
        
        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }
        _.$slideTrack.css(animProps);
        
        if (callback) {
          setTimeout(function() {
            
            _.disableTransition();
            
            callback.call();
          }, _.options.speed);
        }
        
      }
      
    }
    
  };
  
  Slick.prototype.getNavTarget = function() {
    
    var _ = this,
        asNavFor = _.options.asNavFor;
    
    if ( asNavFor && asNavFor !== null ) {
      asNavFor = $j(asNavFor).not(_.$slider);
    }
    
    return asNavFor;
    
  };
  
  Slick.prototype.asNavFor = function(index) {
    
    var _ = this,
        asNavFor = _.getNavTarget();
    
    if ( asNavFor !== null && typeof asNavFor === 'object' ) {
      asNavFor.each(function() {
        var target = $j(this).slick('getSlick');
        if(!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
    
  };
  
  Slick.prototype.applyTransition = function(slide) {
    
    var _ = this,
        transition = {};
    
    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }
    
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
    
  };
  
  Slick.prototype.autoPlay = function() {
    
    var _ = this;
    
    _.autoPlayClear();
    
    if ( _.slideCount > _.options.slidesToShow ) {
      _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
    }
    
  };
  
  Slick.prototype.autoPlayClear = function() {
    
    var _ = this;
    
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
    
  };
  
  Slick.prototype.autoPlayIterator = function() {
    
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;
    
    if ( !_.paused && !_.interrupted && !_.focussed ) {
      
      if ( _.options.infinite === false ) {
        
        if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
          _.direction = 0;
        }
        
        else if ( _.direction === 0 ) {
          
          slideTo = _.currentSlide - _.options.slidesToScroll;
          
          if ( _.currentSlide - 1 === 0 ) {
            _.direction = 1;
          }
          
        }
        
      }
      
      _.slideHandler( slideTo );
      
    }
    
  };
  
  Slick.prototype.buildArrows = function() {
    
    var _ = this;
    
    if (_.options.arrows === true ) {
      
      _.$prevArrow = $j(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $j(_.options.nextArrow).addClass('slick-arrow');
      
      if( _.slideCount > _.options.slidesToShow ) {
        
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }
        
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }
        
        if (_.options.infinite !== true) {
          _.$prevArrow
          .addClass('slick-disabled')
          .attr('aria-disabled', 'true');
        }
        
      } else {
        
        _.$prevArrow.add( _.$nextArrow )
        
        .addClass('slick-hidden')
        .attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
        
      }
      
    }
    
  };
  
  Slick.prototype.buildDots = function() {
    
    var _ = this,
        i, dot;
    
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      
      _.$slider.addClass('slick-dotted');
      
      dot = $j('<ul />').addClass(_.options.dotsClass);
      
      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($j('<li />').append(_.options.customPaging.call(this, _, i)));
      }
      
      _.$dots = dot.appendTo(_.options.appendDots);
      
      _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
      
    }
    
  };
  
  Slick.prototype.buildOut = function() {
    
    var _ = this;
    
    _.$slides =
      _.$slider
    .children( _.options.slide + ':not(.slick-cloned)')
    .addClass('slick-slide');
    
    _.slideCount = _.$slides.length;
    
    _.$slides.each(function(index, element) {
      $j(element)
      .attr('data-slick-index', index)
      .data('originalStyling', $j(element).attr('style') || '');
    });
    
    _.$slider.addClass('slick-slider');
    
    _.$slideTrack = (_.slideCount === 0) ?
      $j('<div class="slick-track"/>').appendTo(_.$slider) :
    _.$slides.wrapAll('<div class="slick-track"/>').parent();
    
    _.$list = _.$slideTrack.wrap(
      '<div aria-live="polite" class="slick-list"/>').parent();
    _.$slideTrack.css('opacity', 0);
    
    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }
    
    $j('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
    
    _.setupInfinite();
    
    _.buildArrows();
    
    _.buildDots();
    
    _.updateDots();
    
    
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    
    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
    
  };
  
  Slick.prototype.buildRows = function() {
    
    var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;
    
    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();
    
    if(_.options.rows > 1) {
      
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(
        originalSlides.length / slidesPerSection
      );
      
      for(a = 0; a < numOfSlides; a++){
        var slide = document.createElement('div');
        for(b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');
          for(c = 0; c < _.options.slidesPerRow; c++) {
            var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      
      _.$slider.empty().append(newSlides);
      _.$slider.children().children().children()
      .css({
        'width':(100 / _.options.slidesPerRow) + '%',
        'display': 'inline-block'
      });
      
    }
    
  };
  
  Slick.prototype.checkResponsive = function(initial, forceUpdate) {
    
    var _ = this,
        breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
    var sliderWidth = _.$slider.width();
    var windowWidth = window.innerWidth || $j(window).width();
    
    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }
    
    if ( _.options.responsive &&
        _.options.responsive.length &&
        _.options.responsive !== null) {
      
      targetBreakpoint = null;
      
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }
      
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint =
              targetBreakpoint;
            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $j.extend({}, _.originalSettings,
                                    _.breakpointSettings[
                                      targetBreakpoint]);
              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }
              _.refresh(initial);
            }
            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;
          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $j.extend({}, _.originalSettings,
                                  _.breakpointSettings[
                                    targetBreakpoint]);
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;
          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }
          _.refresh(initial);
          triggerBreakpoint = targetBreakpoint;
        }
      }
      
      // only trigger breakpoints during an actual break. not on initialize.
      if( !initial && triggerBreakpoint !== false ) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
    
  };
  
  Slick.prototype.changeSlide = function(event, dontAnimate) {
    
    var _ = this,
        $target = $j(event.currentTarget),
        indexOffset, slideOffset, unevenOffset;
    
    // If target is a link, prevent default action.
    if($target.is('a')) {
      event.preventDefault();
    }
    
    // If target is not the <li> element (ie: a child), find the <li>.
    if(!$target.is('li')) {
      $target = $target.closest('li');
    }
    
    unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
    
    switch (event.data.message) {
        
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }
        break;
        
      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }
        break;
        
      case 'index':
        var index = event.data.index === 0 ? 0 :
        event.data.index || $target.index() * _.options.slidesToScroll;
        
        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger('focus');
        break;
        
      default:
        return;
    }
    
  };
  
  Slick.prototype.checkNavigable = function(index) {
    
    var _ = this,
        navigables, prevNavigable;
    
    navigables = _.getNavigableIndexes();
    prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    
    return index;
  };
  
  Slick.prototype.cleanUpEvents = function() {
    
    var _ = this;
    
    if (_.options.dots && _.$dots !== null) {
      
      $j('li', _.$dots)
      .off('click.slick', _.changeSlide)
      .off('mouseenter.slick', $j.proxy(_.interrupt, _, true))
      .off('mouseleave.slick', $j.proxy(_.interrupt, _, false));
      
    }
    
    _.$slider.off('focus.slick blur.slick');
    
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
    }
    
    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
    
    _.$list.off('click.slick', _.clickHandler);
    
    $j(document).off(_.visibilityChange, _.visibility);
    
    _.cleanUpSlideEvents();
    
    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }
    
    if (_.options.focusOnSelect === true) {
      $j(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }
    
    $j(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    
    $j(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    
    $j('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    
    $j(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    $j(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    
  };
  
  Slick.prototype.cleanUpSlideEvents = function() {
    
    var _ = this;
    
    _.$list.off('mouseenter.slick', $j.proxy(_.interrupt, _, true));
    _.$list.off('mouseleave.slick', $j.proxy(_.interrupt, _, false));
    
  };
  
  Slick.prototype.cleanUpRows = function() {
    
    var _ = this, originalSlides;
    
    if(_.options.rows > 1) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');
      _.$slider.empty().append(originalSlides);
    }
    
  };
  
  Slick.prototype.clickHandler = function(event) {
    
    var _ = this;
    
    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
    
  };
  
  Slick.prototype.destroy = function(refresh) {
    
    var _ = this;
    
    _.autoPlayClear();
    
    _.touchObject = {};
    
    _.cleanUpEvents();
    
    $j('.slick-cloned', _.$slider).detach();
    
    if (_.$dots) {
      _.$dots.remove();
    }
    
    
    if ( _.$prevArrow && _.$prevArrow.length ) {
      
      _.$prevArrow
      .removeClass('slick-disabled slick-arrow slick-hidden')
      .removeAttr('aria-hidden aria-disabled tabindex')
      .css('display','');
      
      if ( _.htmlExpr.test( _.options.prevArrow )) {
        _.$prevArrow.remove();
      }
    }
    
    if ( _.$nextArrow && _.$nextArrow.length ) {
      
      _.$nextArrow
      .removeClass('slick-disabled slick-arrow slick-hidden')
      .removeAttr('aria-hidden aria-disabled tabindex')
      .css('display','');
      
      if ( _.htmlExpr.test( _.options.nextArrow )) {
        _.$nextArrow.remove();
      }
      
    }
    
    
    if (_.$slides) {
      
      _.$slides
      .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
      .removeAttr('aria-hidden')
      .removeAttr('data-slick-index')
      .each(function(){
        $j(this).attr('style', $j(this).data('originalStyling'));
      });
      
      _.$slideTrack.children(this.options.slide).detach();
      
      _.$slideTrack.detach();
      
      _.$list.detach();
      
      _.$slider.append(_.$slides);
    }
    
    _.cleanUpRows();
    
    _.$slider.removeClass('slick-slider');
    _.$slider.removeClass('slick-initialized');
    _.$slider.removeClass('slick-dotted');
    
    _.unslicked = true;
    
    if(!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
    
  };
  
  Slick.prototype.disableTransition = function(slide) {
    
    var _ = this,
        transition = {};
    
    transition[_.transitionType] = '';
    
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
    
  };
  
  Slick.prototype.fadeSlide = function(slideIndex, callback) {
    
    var _ = this;
    
    if (_.cssTransitions === false) {
      
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });
      
      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
      
    } else {
      
      _.applyTransition(slideIndex);
      
      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });
      
      if (callback) {
        setTimeout(function() {
          
          _.disableTransition(slideIndex);
          
          callback.call();
        }, _.options.speed);
      }
      
    }
    
  };
  
  Slick.prototype.fadeSlideOut = function(slideIndex) {
    
    var _ = this;
    
    if (_.cssTransitions === false) {
      
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
      
    } else {
      
      _.applyTransition(slideIndex);
      
      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
      
    }
    
  };
  
  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
    
    var _ = this;
    
    if (filter !== null) {
      
      _.$slidesCache = _.$slides;
      
      _.unload();
      
      _.$slideTrack.children(this.options.slide).detach();
      
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
      
      _.reinit();
      
    }
    
  };
  
  Slick.prototype.focusHandler = function() {
    
    var _ = this;
    
    _.$slider
    .off('focus.slick blur.slick')
    .on('focus.slick blur.slick',
        '*:not(.slick-arrow)', function(event) {
          
          event.stopImmediatePropagation();
          var $sf = $j(this);
          
          setTimeout(function() {
            
            if( _.options.pauseOnFocus ) {
              _.focussed = $sf.is(':focus');
              _.autoPlay();
            }
            
          }, 0);
          
        });
  };
  
  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
    
    var _ = this;
    return _.currentSlide;
    
  };
  
  Slick.prototype.getDotCount = function() {
    
    var _ = this;
    
    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;
    
    if (_.options.infinite === true) {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if(!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    }else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }
    
    return pagerQty - 1;
    
  };
  
  Slick.prototype.getLeft = function(slideIndex) {
    
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide;
    
    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);
    
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
        verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
            verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
          } else {
            _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
            verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
        verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
      }
    }
    
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }
    
    if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }
    
    if (_.options.vertical === false) {
      targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
    } else {
      targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
    }
    
    if (_.options.variableWidth === true) {
      
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }
      
      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft =  0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }
      
      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }
        
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft =  0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }
        
        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }
    
    return targetLeft;
    
  };
  
  Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
    
    var _ = this;
    
    return _.options[option];
    
  };
  
  Slick.prototype.getNavigableIndexes = function() {
    
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;
    
    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }
    
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }
    
    return indexes;
    
  };
  
  Slick.prototype.getSlick = function() {
    
    return this;
    
  };
  
  Slick.prototype.getSlideCount = function() {
    
    var _ = this,
        slidesTraversed, swipedSlide, centerOffset;
    
    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
    
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function(index, slide) {
        if (slide.offsetLeft - centerOffset + ($j(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
          swipedSlide = slide;
          return false;
        }
      });
      
      slidesTraversed = Math.abs($j(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      
      return slidesTraversed;
      
    } else {
      return _.options.slidesToScroll;
    }
    
  };
  
  Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
    
    var _ = this;
    
    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
    
  };
  
  Slick.prototype.init = function(creation) {
    
    var _ = this;
    
    if (!$j(_.$slider).hasClass('slick-initialized')) {
      
      $j(_.$slider).addClass('slick-initialized');
      
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
      _.checkResponsive(true);
      _.focusHandler();
      
    }
    
    if (creation) {
      _.$slider.trigger('init', [_]);
    }
    
    if (_.options.accessibility === true) {
      _.initADA();
    }
    
    if ( _.options.autoplay ) {
      
      _.paused = false;
      _.autoPlay();
      
    }
    
  };
  
  Slick.prototype.initADA = function() {
    var _ = this;
    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });
    
    _.$slideTrack.attr('role', 'listbox');
    
    _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
      $j(this).attr({
        'role': 'option',
        'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
      });
    });
    
    if (_.$dots !== null) {
      _.$dots.attr('role', 'tablist').find('li').each(function(i) {
        $j(this).attr({
          'role': 'presentation',
          'aria-selected': 'false',
          'aria-controls': 'navigation' + _.instanceUid + i + '',
          'id': 'slick-slide' + _.instanceUid + i + ''
        });
      })
      .first().attr('aria-selected', 'true').end()
      .find('button').attr('role', 'button').end()
      .closest('div').attr('role', 'toolbar');
    }
    _.activateADA();
    
  };
  
  Slick.prototype.initArrowEvents = function() {
    
    var _ = this;
    
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow
      .off('click.slick')
      .on('click.slick', {
        message: 'previous'
      }, _.changeSlide);
      _.$nextArrow
      .off('click.slick')
      .on('click.slick', {
        message: 'next'
      }, _.changeSlide);
    }
    
  };
  
  Slick.prototype.initDotEvents = function() {
    
    var _ = this;
    
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $j('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);
    }
    
    if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {
      
      $j('li', _.$dots)
      .on('mouseenter.slick', $j.proxy(_.interrupt, _, true))
      .on('mouseleave.slick', $j.proxy(_.interrupt, _, false));
      
    }
    
  };
  
  Slick.prototype.initSlideEvents = function() {
    
    var _ = this;
    
    if ( _.options.pauseOnHover ) {
      
      _.$list.on('mouseenter.slick', $j.proxy(_.interrupt, _, true));
      _.$list.on('mouseleave.slick', $j.proxy(_.interrupt, _, false));
      
    }
    
  };
  
  Slick.prototype.initializeEvents = function() {
    
    var _ = this;
    
    _.initArrowEvents();
    
    _.initDotEvents();
    _.initSlideEvents();
    
    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);
    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);
    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);
    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);
    
    _.$list.on('click.slick', _.clickHandler);
    
    $j(document).on(_.visibilityChange, $j.proxy(_.visibility, _));
    
    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }
    
    if (_.options.focusOnSelect === true) {
      $j(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    
    $j(window).on('orientationchange.slick.slick-' + _.instanceUid, $j.proxy(_.orientationChange, _));
    
    $j(window).on('resize.slick.slick-' + _.instanceUid, $j.proxy(_.resize, _));
    
    $j('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    
    $j(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $j(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    
  };
  
  Slick.prototype.initUI = function() {
    
    var _ = this;
    
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      
      _.$prevArrow.show();
      _.$nextArrow.show();
      
    }
    
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      
      _.$dots.show();
      
    }
    
  };
  
  Slick.prototype.keyHandler = function(event) {
    
    var _ = this;
    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
    if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' :  'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
    
  };
  
  Slick.prototype.lazyLoad = function() {
    
    var _ = this,
        loadRange, cloneRange, rangeStart, rangeEnd;
    
    function loadImages(imagesScope) {
      
      $j('img[data-lazy]', imagesScope).each(function() {
        
        var image = $j(this),
            imageSource = $j(this).attr('data-lazy'),
            imageToLoad = document.createElement('img');
        
        imageToLoad.onload = function() {
          
          image
          .animate({ opacity: 0 }, 100, function() {
            image
            .attr('src', imageSource)
            .animate({ opacity: 1 }, 200, function() {
              image
              .removeAttr('data-lazy')
              .removeClass('slick-loading');
            });
            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
          
        };
        
        imageToLoad.onerror = function() {
          
          image
          .removeAttr( 'data-lazy' )
          .removeClass( 'slick-loading' )
          .addClass( 'slick-lazyload-error' );
          
          _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
          
        };
        
        imageToLoad.src = imageSource;
        
      });
      
    }
    
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    
    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
    loadImages(loadRange);
    
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else
      if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
        cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
        loadImages(cloneRange);
      } else if (_.currentSlide === 0) {
        cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
        loadImages(cloneRange);
      }
    
  };
  
  Slick.prototype.loadSlider = function() {
    
    var _ = this;
    
    _.setPosition();
    
    _.$slideTrack.css({
      opacity: 1
    });
    
    _.$slider.removeClass('slick-loading');
    
    _.initUI();
    
    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
    
  };
  
  Slick.prototype.next = Slick.prototype.slickNext = function() {
    
    var _ = this;
    
    _.changeSlide({
      data: {
        message: 'next'
      }
    });
    
  };
  
  Slick.prototype.orientationChange = function() {
    
    var _ = this;
    
    _.checkResponsive();
    _.setPosition();
    
  };
  
  Slick.prototype.pause = Slick.prototype.slickPause = function() {
    
    var _ = this;
    
    _.autoPlayClear();
    _.paused = true;
    
  };
  
  Slick.prototype.play = Slick.prototype.slickPlay = function() {
    
    var _ = this;
    
    _.autoPlay();
    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
    
  };
  
  Slick.prototype.postSlide = function(index) {
    
    var _ = this;
    
    if( !_.unslicked ) {
      
      _.$slider.trigger('afterChange', [_, index]);
      
      _.animating = false;
      
      _.setPosition();
      
      _.swipeLeft = null;
      
      if ( _.options.autoplay ) {
        _.autoPlay();
      }
      
      if (_.options.accessibility === true) {
        _.initADA();
      }
      
    }
    
  };
  
  Slick.prototype.prev = Slick.prototype.slickPrev = function() {
    
    var _ = this;
    
    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
    
  };
  
  Slick.prototype.preventDefault = function(event) {
    
    event.preventDefault();
    
  };
  
  Slick.prototype.progressiveLazyLoad = function( tryCount ) {
    
    tryCount = tryCount || 1;
    
    var _ = this,
        $imgsToLoad = $j( 'img[data-lazy]', _.$slider ),
        image,
        imageSource,
        imageToLoad;
    
    if ( $imgsToLoad.length ) {
      
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageToLoad = document.createElement('img');
      
      imageToLoad.onload = function() {
        
        image
        .attr( 'src', imageSource )
        .removeAttr('data-lazy')
        .removeClass('slick-loading');
        
        if ( _.options.adaptiveHeight === true ) {
          _.setPosition();
        }
        
        _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
        _.progressiveLazyLoad();
        
      };
      
      imageToLoad.onerror = function() {
        
        if ( tryCount < 3 ) {
          
          /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
          setTimeout( function() {
            _.progressiveLazyLoad( tryCount + 1 );
          }, 500 );
          
        } else {
          
          image
          .removeAttr( 'data-lazy' )
          .removeClass( 'slick-loading' )
          .addClass( 'slick-lazyload-error' );
          
          _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
          
          _.progressiveLazyLoad();
          
        }
        
      };
      
      imageToLoad.src = imageSource;
      
    } else {
      
      _.$slider.trigger('allImagesLoaded', [ _ ]);
      
    }
    
  };
  
  Slick.prototype.refresh = function( initializing ) {
    
    var _ = this, currentSlide, lastVisibleIndex;
    
    lastVisibleIndex = _.slideCount - _.options.slidesToShow;
    
    // in non-infinite sliders, we don't want to go past the
    // last visible index.
    if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
      _.currentSlide = lastVisibleIndex;
    }
    
    // if less slides than to show, go to start.
    if ( _.slideCount <= _.options.slidesToShow ) {
      _.currentSlide = 0;
      
    }
    
    currentSlide = _.currentSlide;
    
    _.destroy(true);
    
    $j.extend(_, _.initials, { currentSlide: currentSlide });
    
    _.init();
    
    if( !initializing ) {
      
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
      
    }
    
  };
  
  Slick.prototype.registerBreakpoints = function() {
    
    var _ = this, breakpoint, currentBreakpoint, l,
        responsiveSettings = _.options.responsive || null;
    
    if ( $j.type(responsiveSettings) === 'array' && responsiveSettings.length ) {
      
      _.respondTo = _.options.respondTo || 'window';
      
      for ( breakpoint in responsiveSettings ) {
        
        l = _.breakpoints.length-1;
        currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
        
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          
          // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.
          while( l >= 0 ) {
            if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
              _.breakpoints.splice(l,1);
            }
            l--;
          }
          
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
          
        }
        
      }
      
      _.breakpoints.sort(function(a, b) {
        return ( _.options.mobileFirst ) ? a-b : b-a;
      });
      
    }
    
  };
  
  Slick.prototype.reinit = function() {
    
    var _ = this;
    
    _.$slides =
      _.$slideTrack
    .children(_.options.slide)
    .addClass('slick-slide');
    
    _.slideCount = _.$slides.length;
    
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }
    
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }
    
    _.registerBreakpoints();
    
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.cleanUpSlideEvents();
    _.initSlideEvents();
    
    _.checkResponsive(false, true);
    
    if (_.options.focusOnSelect === true) {
      $j(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    
    _.setPosition();
    _.focusHandler();
    
    _.paused = !_.options.autoplay;
    _.autoPlay();
    
    _.$slider.trigger('reInit', [_]);
    
  };
  
  Slick.prototype.resize = function() {
    
    var _ = this;
    
    if ($j(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function() {
        _.windowWidth = $j(window).width();
        _.checkResponsive();
        if( !_.unslicked ) { _.setPosition(); }
      }, 50);
    }
  };
  
  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
    
    var _ = this;
    
    if (typeof(index) === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }
    
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }
    
    _.unload();
    
    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }
    
    _.$slides = _.$slideTrack.children(this.options.slide);
    
    _.$slideTrack.children(this.options.slide).detach();
    
    _.$slideTrack.append(_.$slides);
    
    _.$slidesCache = _.$slides;
    
    _.reinit();
    
  };
  
  Slick.prototype.setCSS = function(position) {
    
    var _ = this,
        positionProps = {},
        x, y;
    
    if (_.options.rtl === true) {
      position = -position;
    }
    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    
    positionProps[_.positionProp] = position;
    
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};
      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
        _.$slideTrack.css(positionProps);
      }
    }
    
  };
  
  Slick.prototype.setDimensions = function() {
    
    var _ = this;
    
    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: ('0px ' + _.options.centerPadding)
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: (_.options.centerPadding + ' 0px')
        });
      }
    }
    
    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();
    
    
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
      _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
      
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);
      _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
    }
    
    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    
  };
  
  Slick.prototype.setFade = function() {
    
    var _ = this,
        targetLeft;
    
    _.$slides.each(function(index, element) {
      targetLeft = (_.slideWidth * index) * -1;
      if (_.options.rtl === true) {
        $j(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $j(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });
    
    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
    
  };
  
  Slick.prototype.setHeight = function() {
    
    var _ = this;
    
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
      _.$list.css('height', targetHeight);
    }
    
  };
  
  Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {
    
    /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */
    
    var _ = this, l, item, option, value, refresh = false, type;
    
    if( $j.type( arguments[0] ) === 'object' ) {
      
      option =  arguments[0];
      refresh = arguments[1];
      type = 'multiple';
      
    } else if ( $j.type( arguments[0] ) === 'string' ) {
      
      option =  arguments[0];
      value = arguments[1];
      refresh = arguments[2];
      
      if ( arguments[0] === 'responsive' && $j.type( arguments[1] ) === 'array' ) {
        
        type = 'responsive';
        
      } else if ( typeof arguments[1] !== 'undefined' ) {
        
        type = 'single';
        
      }
      
    }
    
    if ( type === 'single' ) {
      
      _.options[option] = value;
      
      
    } else if ( type === 'multiple' ) {
      
      $j.each( option , function( opt, val ) {
        
        _.options[opt] = val;
        
      });
      
      
    } else if ( type === 'responsive' ) {
      
      for ( item in value ) {
        
        if( $j.type( _.options.responsive ) !== 'array' ) {
          
          _.options.responsive = [ value[item] ];
          
        } else {
          
          l = _.options.responsive.length-1;
          
          // loop through the responsive object and splice out duplicates.
          while( l >= 0 ) {
            
            if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
              
              _.options.responsive.splice(l,1);
              
            }
            
            l--;
            
          }
          
          _.options.responsive.push( value[item] );
          
        }
        
      }
      
    }
    
    if ( refresh ) {
      
      _.unload();
      _.reinit();
      
    }
    
  };
  
  Slick.prototype.setPosition = function() {
    
    var _ = this;
    
    _.setDimensions();
    
    _.setHeight();
    
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }
    
    _.$slider.trigger('setPosition', [_]);
    
  };
  
  Slick.prototype.setProps = function() {
    
    var _ = this,
        bodyStyle = document.body.style;
    
    _.positionProp = _.options.vertical === true ? 'top' : 'left';
    
    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }
    
    if (bodyStyle.WebkitTransition !== undefined ||
        bodyStyle.MozTransition !== undefined ||
        bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }
    
    if ( _.options.fade ) {
      if ( typeof _.options.zIndex === 'number' ) {
        if( _.options.zIndex < 3 ) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }
    
    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }
    _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
  };
  
  
  Slick.prototype.setSlideClasses = function(index) {
    
    var _ = this,
        centerOffset, allSlides, indexOffset, remainder;
    
    allSlides = _.$slider
    .find('.slick-slide')
    .removeClass('slick-active slick-center slick-current')
    .attr('aria-hidden', 'true');
    
    _.$slides
    .eq(index)
    .addClass('slick-current');
    
    if (_.options.centerMode === true) {
      
      centerOffset = Math.floor(_.options.slidesToShow / 2);
      
      if (_.options.infinite === true) {
        
        if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
          
          _.$slides
          .slice(index - centerOffset, index + centerOffset + 1)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
          
        } else {
          
          indexOffset = _.options.slidesToShow + index;
          allSlides
          .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
          
        }
        
        if (index === 0) {
          
          allSlides
          .eq(allSlides.length - 1 - _.options.slidesToShow)
          .addClass('slick-center');
          
        } else if (index === _.slideCount - 1) {
          
          allSlides
          .eq(_.options.slidesToShow)
          .addClass('slick-center');
          
        }
        
      }
      
      _.$slides
      .eq(index)
      .addClass('slick-center');
      
    } else {
      
      if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
        
        _.$slides
        .slice(index, index + _.options.slidesToShow)
        .addClass('slick-active')
        .attr('aria-hidden', 'false');
        
      } else if (allSlides.length <= _.options.slidesToShow) {
        
        allSlides
        .addClass('slick-active')
        .attr('aria-hidden', 'false');
        
      } else {
        
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
        
        if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
          
          allSlides
          .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
          
        } else {
          
          allSlides
          .slice(indexOffset, indexOffset + _.options.slidesToShow)
          .addClass('slick-active')
          .attr('aria-hidden', 'false');
          
        }
        
      }
      
    }
    
    if (_.options.lazyLoad === 'ondemand') {
      _.lazyLoad();
    }
    
  };
  
  Slick.prototype.setupInfinite = function() {
    
    var _ = this,
        i, slideIndex, infiniteCount;
    
    if (_.options.fade === true) {
      _.options.centerMode = false;
    }
    
    if (_.options.infinite === true && _.options.fade === false) {
      
      slideIndex = null;
      
      if (_.slideCount > _.options.slidesToShow) {
        
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }
        
        for (i = _.slideCount; i > (_.slideCount -
                                    infiniteCount); i -= 1) {
          slideIndex = i - 1;
          $j(_.$slides[slideIndex]).clone(true).attr('id', '')
          .attr('data-slick-index', slideIndex - _.slideCount)
          .prependTo(_.$slideTrack).addClass('slick-cloned');
        }
        for (i = 0; i < infiniteCount; i += 1) {
          slideIndex = i;
          $j(_.$slides[slideIndex]).clone(true).attr('id', '')
          .attr('data-slick-index', slideIndex + _.slideCount)
          .appendTo(_.$slideTrack).addClass('slick-cloned');
        }
        _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
          $j(this).attr('id', '');
        });
        
      }
      
    }
    
  };
  
  Slick.prototype.interrupt = function( toggle ) {
    
    var _ = this;
    
    if( !toggle ) {
      _.autoPlay();
    }
    _.interrupted = toggle;
    
  };
  
  Slick.prototype.selectHandler = function(event) {
    
    var _ = this;
    
    var targetElement =
        $j(event.target).is('.slick-slide') ?
        $j(event.target) :
    $j(event.target).parents('.slick-slide');
    
    var index = parseInt(targetElement.attr('data-slick-index'));
    
    if (!index) index = 0;
    
    if (_.slideCount <= _.options.slidesToShow) {
      
      _.setSlideClasses(index);
      _.asNavFor(index);
      return;
      
    }
    
    _.slideHandler(index);
    
  };
  
  Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
    
    var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
        _ = this, navTarget;
    
    sync = sync || false;
    
    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }
    
    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }
    
    if (_.slideCount <= _.options.slidesToShow) {
      return;
    }
    
    if (sync === false) {
      _.asNavFor(index);
    }
    
    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
    
    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function() {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function() {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }
    
    if ( _.options.autoplay ) {
      clearInterval(_.autoPlayTimer);
    }
    
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }
    
    _.animating = true;
    
    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
    
    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;
    
    _.setSlideClasses(_.currentSlide);
    
    if ( _.options.asNavFor ) {
      
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');
      
      if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
        navTarget.setSlideClasses(_.currentSlide);
      }
      
    }
    
    _.updateDots();
    _.updateArrows();
    
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        
        _.fadeSlideOut(oldSlide);
        
        _.fadeSlide(animSlide, function() {
          _.postSlide(animSlide);
        });
        
      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }
    
    if (dontAnimate !== true) {
      _.animateSlide(targetLeft, function() {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
    
  };
  
  Slick.prototype.startLoad = function() {
    
    var _ = this;
    
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      
      _.$prevArrow.hide();
      _.$nextArrow.hide();
      
    }
    
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      
      _.$dots.hide();
      
    }
    
    _.$slider.addClass('slick-loading');
    
  };
  
  Slick.prototype.swipeDirection = function() {
    
    var xDist, yDist, r, swipeAngle, _ = this;
    
    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    
    if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
      return (_.options.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
      return (_.options.rtl === false ? 'left' : 'right');
    }
    if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
      return (_.options.rtl === false ? 'right' : 'left');
    }
    if (_.options.verticalSwiping === true) {
      if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
        return 'down';
      } else {
        return 'up';
      }
    }
    
    return 'vertical';
    
  };
  
  Slick.prototype.swipeEnd = function(event) {
    
    var _ = this,
        slideCount,
        direction;
    
    _.dragging = false;
    _.interrupted = false;
    _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;
    
    if ( _.touchObject.curX === undefined ) {
      return false;
    }
    
    if ( _.touchObject.edgeHit === true ) {
      _.$slider.trigger('edge', [_, _.swipeDirection() ]);
    }
    
    if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {
      
      direction = _.swipeDirection();
      
      switch ( direction ) {
          
        case 'left':
        case 'down':
          
          slideCount =
            _.options.swipeToSlide ?
            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
          _.currentSlide + _.getSlideCount();
          
          _.currentDirection = 0;
          
          break;
          
        case 'right':
        case 'up':
          
          slideCount =
            _.options.swipeToSlide ?
            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
          _.currentSlide - _.getSlideCount();
          
          _.currentDirection = 1;
          
          break;
          
        default:
          
          
      }
      
      if( direction != 'vertical' ) {
        
        _.slideHandler( slideCount );
        _.touchObject = {};
        _.$slider.trigger('swipe', [_, direction ]);
        
      }
      
    } else {
      
      if ( _.touchObject.startX !== _.touchObject.curX ) {
        
        _.slideHandler( _.currentSlide );
        _.touchObject = {};
        
      }
      
    }
    
  };
  
  Slick.prototype.swipeHandler = function(event) {
    
    var _ = this;
    
    if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }
    
    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
      event.originalEvent.touches.length : 1;
    
    _.touchObject.minSwipe = _.listWidth / _.options
    .touchThreshold;
    
    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options
      .touchThreshold;
    }
    
    switch (event.data.action) {
        
      case 'start':
        _.swipeStart(event);
        break;
        
      case 'move':
        _.swipeMove(event);
        break;
        
      case 'end':
        _.swipeEnd(event);
        break;
        
    }
    
  };
  
  Slick.prototype.swipeMove = function(event) {
    
    var _ = this,
        edgeWasHit = false,
        curLeft, swipeDirection, swipeLength, positionOffset, touches;
    
    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
    
    if (!_.dragging || touches && touches.length !== 1) {
      return false;
    }
    
    curLeft = _.getLeft(_.currentSlide);
    
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    
    _.touchObject.swipeLength = Math.round(Math.sqrt(
      Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    
    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = Math.round(Math.sqrt(
        Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
    }
    
    swipeDirection = _.swipeDirection();
    
    if (swipeDirection === 'vertical') {
      return;
    }
    
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      event.preventDefault();
    }
    
    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }
    
    
    swipeLength = _.touchObject.swipeLength;
    
    _.touchObject.edgeHit = false;
    
    if (_.options.infinite === false) {
      if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }
    
    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }
    
    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }
    
    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }
    
    _.setCSS(_.swipeLeft);
    
  };
  
  Slick.prototype.swipeStart = function(event) {
    
    var _ = this,
        touches;
    
    _.interrupted = true;
    
    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }
    
    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }
    
    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    
    _.dragging = true;
    
  };
  
  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
    
    var _ = this;
    
    if (_.$slidesCache !== null) {
      
      _.unload();
      
      _.$slideTrack.children(this.options.slide).detach();
      
      _.$slidesCache.appendTo(_.$slideTrack);
      
      _.reinit();
      
    }
    
  };
  
  Slick.prototype.unload = function() {
    
    var _ = this;
    
    $j('.slick-cloned', _.$slider).remove();
    
    if (_.$dots) {
      _.$dots.remove();
    }
    
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }
    
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }
    
    _.$slides
    .removeClass('slick-slide slick-active slick-visible slick-current')
    .attr('aria-hidden', 'true')
    .css('width', '');
    
  };
  
  Slick.prototype.unslick = function(fromBreakpoint) {
    
    var _ = this;
    _.$slider.trigger('unslick', [_, fromBreakpoint]);
    _.destroy();
    
  };
  
  Slick.prototype.updateArrows = function() {
    
    var _ = this,
        centerOffset;
    
    centerOffset = Math.floor(_.options.slidesToShow / 2);
    
    if ( _.options.arrows === true &&
        _.slideCount > _.options.slidesToShow &&
        !_.options.infinite ) {
      
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      
      if (_.currentSlide === 0) {
        
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
        
      }
      
    }
    
  };
  
  Slick.prototype.updateDots = function() {
    
    var _ = this;
    
    if (_.$dots !== null) {
      
      _.$dots
      .find('li')
      .removeClass('slick-active')
      .attr('aria-hidden', 'true');
      
      _.$dots
      .find('li')
      .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
      .addClass('slick-active')
      .attr('aria-hidden', 'false');
      
    }
    
  };
  
  Slick.prototype.visibility = function() {
    
    var _ = this;
    
    if ( _.options.autoplay ) {
      
      if ( document[_.hidden] ) {
        
        _.interrupted = true;
        
      } else {
        
        _.interrupted = false;
        
      }
      
    }
    
  };
  
  $j.fn.slick = function() {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;
    for (i = 0; i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined')
        _[i].slick = new Slick(_[i], opt);
      else
        ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  };
  
}));

var homemarketSlider;
/*!---- equal-height-----*/
$j(document).ready(function () {

/*---   Module Related stories starts  ---*/
$j(".module-related-stories").each(function(){

var d = $j(this).find('.story-item-box-wrap .story-content');
$j(d).getSameTopGroups({
      commonParent: '.row'
    },function(gc) {
      for (i = 1; i <= gc; i++) {
        setEqualHeight_CommonClass(d);
      }
    });

});
/*---   Module Related stories ends  ---*/

/*--  BCC Impact module boxes  --*/
  $j('.media-card-wrapper').getSameTopGroups({commonParent:'.media-card-wrapper'}, function() {
      setEqualHeight_CommonClass(".media-card-item");
  });

/*--  Signpost carousel boxes  --*/
  $j('.signpost-carousel-wrapper').getSameTopGroups({commonParent:'.signpost-carousel-wrapper'}, function() {
      setEqualHeight_CommonClass(".signpost-carousel-item");
  });

});

/*--------Equal height plugin starts-----------*/

;
(function($j) {
    var defaults = {
        waitforimages: true,
        waitforfonts: false,
        areSiblings: true,
        commonParent: ''
    }; // default settings
    $j.fn.getSameTopGroups = function(options, callback) {
        //var settings = {};
        if ($j(this).length < 1) {
            return false;
        }
        var settings = $j.extend(true, {}, defaults, options);
        var $jelement = $j(this).children().not( ".content-pagination" );
		var _parent = $j(this);
        //$jelement['settings'] = $j.extend(true, {}, defaults, options)
        var winEvents = false;
        var totElements = 0;
        var reload = function(isInit, $jelementObj, groupCounter) {
            var parentWidth;
           
            if ($j(settings.commonParent).length > 0) {
                //if (settings.commonParent === '') {
                //    parentWidth = getStyle($jelement.first().parent()[0], 'width');
                //} else {
                parentWidth = getStyle(_parent[0], 'width');
                //}
            } else {
                return false;
            }
            if (isInit) {
                totElements = $jelement.length;
                $jelement.removeClass('gg-taken');
                $jelement.removeClass(function(index, css) {
                    return (css.match(/\bgg-g-\S+/g) || []).join(' ');
                });
                $jelementObj = $jelement.first();
                var groupCounter = 1;
                var childWidth = getOuterWidthWithMargin($jelementObj, true);
                $jelementObj.addClass('gg-taken gg-g-' + groupCounter);
                --totElements;
                if (totElements === 0) {
                    callback(groupCounter);
                }
            } else {
                --totElements;
                childWidth = getOuterWidthWithMargin($jelementObj, true);
                $jelementObj.addClass('gg-taken gg-g-' + groupCounter);
                if (totElements === 0) {
                    callback(groupCounter);
                }
            }
            $jelement.not('.gg-taken').each(function(index) {
                childWidth = childWidth + getOuterWidthWithMargin($j(this), true);
                if (Math.floor(childWidth) > Math.floor(parentWidth)) {
                    childWidth = childWidth - getOuterWidthWithMargin($j(this), true);
                    ++groupCounter;
                    reload(false, $j(this), groupCounter);
                    return false;
                } else {
                    $j(this).addClass('gg-taken gg-g-' + groupCounter);
                    --totElements;
                }
                if (totElements === 0) {
                    callback(groupCounter);
                }
            });
        };
        var timeOut;
        var resFun = function() {
            clearTimeout(timeOut);
            timeOut = setTimeout(function() {
                reload(true);
            }, 300);
        };
        $jelement.reGroup = function() {
           // $jelement = $j($jelement['selector']);
		   $jelement = _parent.children().not( ".content-pagination" );;
            reload(true);
        };
        $j(window).on('load', function() {
            reload(true);
        });
        $j(document).on('ajaxComplete', function() {
           // $jelement = $j($jelement['selector']);
			$jelement = _parent.children().not( ".content-pagination" );;
			
            reload(true);
        });
        $j(window).on('resize', resFun);
        return $jelement;
    };
    var getStyle = function(el, prop) {
        if (getComputedStyle !== 'undefined') {
            return parseFloat(getComputedStyle(el, null).getPropertyValue(prop));
        } else {
            
            return parseFloat(el.currentStyle[prop]);
        }
    };
    var getOuterWidthWithMargin = function(el, isBorderBox) {
        if (!isBorderBox)
            return getStyle(el[0], 'margin-left') + getStyle(el[0], 'margin-right') + getStyle(el[0], 'padding-left') + getStyle(el[0], 'padding-right') + getStyle(el[0], 'width');
        else
            return getStyle(el[0], 'margin-left') + getStyle(el[0], 'margin-right') + getStyle(el[0], 'width');
    };
})($j);


function setEqualHeight_CommonClass(arr) {
    var x = new Array([]);
    $j(arr).each(function(i) {
        $j(this).height('auto');
        x[i] = $j(this).outerHeight();
    });
    Max_Value = Array.max(x);
    $j(arr).each(function(i) {
        //if($j(arr[i]).height() != Max_Value)
        //	{x[i] = $j(arr[i]).height(Max_Value);}
        $j(this).outerHeight(Max_Value);
    });
}

function setEqualHeight(arr) {
    var x = new Array([]);
    for (i = 0; i < arr.length; i++) {
        x[i] = $j(arr[i]).height('auto');
        x[i] = $j(arr[i]).outerHeight();
    }
    Max_Value = Array.max(x);
    for (i = 0; i < arr.length; i++) {
        //if($j(arr[i]).height() != Max_Value)
        // {x[i] = $j(arr[i]).height(Max_Value);}
        x[i] = $j(arr[i]).outerHeight(Max_Value);
    }
}
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

Array.max = function(array) {
    return Math.max.apply(Math, array);
};
/*--------Equal height plugin Ends-----------*/
/*!---- main-----*/
/*-------------------Global Functions------------------*/
var showChar = 205;  // How many characters are shown by default
var ellipsestext = "...";
var moretext = "show more";
var lesstext = "show less";

function generateShowmoreLink(){
  // Configure/customize these variables.
  $j('.dd-notes-text p').each(function() {
    var content = $j(this).html();
    if(content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);
      var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><a href="javascript:;" class="readmore-text"><img src="/~/media/E62ACAC30517462F82FD74FBC39A17D7.svg" alt=""/></a><span class="morecontent">' + h + '</span>';
      $j(this).html(html);
      $j(this).prev().append('<span class="morelink">' + moretext + '</span>');
    }
  });
}

function Trim(myval) {
  var chklen = myval.length;
  var pos = 0;
  mychar = myval.charAt(0);
  if (mychar.charCodeAt(0) == 10) {
    myval = myval.substr(1);
  }
  while (pos >= 0 || lstpos >= 0) {
    pos = myval.indexOf(" ");
    if (pos == 0) {
      myval = myval.substring(1, chklen);
      chklen = myval.length;
      mychar = myval.charAt(0);
    }
    lstpos = myval.lastIndexOf(" ");
    if (lstpos == chklen - 1) {
      myval = myval.substring(0, chklen - 1);
      chklen = myval.length;
      mychar = myval.charAt(chklen - 1);
    }
    if (mychar != " ") {
      break;
    }
  }
  return myval;
} 

function wordLimit(myWords, myLimit, myWordsHide) {
  var dataTemp = myWordsHide.text();
  if (dataTemp.length < myLimit) {}
  dataTemp = dataTemp.substring(0, myLimit);
  dataTemp = dataTemp.substring(0, dataTemp.lastIndexOf(" "));
  dataTemp = Trim(dataTemp) + "...";
  myWords.text(dataTemp);
}

function wordLimitnew(myWords, myLimit, myWordsHide) {
  var dataTemp = myWordsHide.html();
  if (dataTemp.length < myLimit) {
    return;
  }
  dataTemp = dataTemp.substring(0, myLimit);
  dataTemp = dataTemp.substring(0, dataTemp.lastIndexOf(" "));
  dataTemp = Trim(dataTemp) + "...";
  myWords.html(dataTemp);
}

function setEqualHeight_CommonClass(arr) {
  var x = new Array([]);
  $j(arr).each(function(i) {
    $j(this).height('auto');
    x[i] = $j(this).height();
  });
  Max_Value = Array.max(x);
  $j(arr).each(function(i) {
    //if($j(arr[i]).height() != Max_Value)
    // {x[i] = $j(arr[i]).height(Max_Value);}
    $j(this).height(Max_Value);
  });
}

function setEqualHeight(arr) {
  var x = new Array([]);
  for (i = 0; i < arr.length; i++) {
    x[i] = $j(arr[i]).height("auto");
    x[i] = $j(arr[i]).height();
  }
  Max_Value = Array.max(x);
  for (i = 0; i < arr.length; i++) {
    if ($j(arr[i]).height() != Max_Value) {
      if ($j("body").hasClass("ie7")) {
        x[i] = $j(arr[i]).attr("style", "height:" + Max_Value + "px");
      } else {
        x[i] = $j(arr[i]).height(Max_Value);
      }
    }
  }
}
Array.max = function(array) {
  return Math.max.apply(Math, array);
};


function isIEMobile() {
  var regExp = new RegExp("IEMobile", "i");
  return navigator.userAgent.match(regExp);
}

$j.fn.inView = function() {
  return this.each(function() {
    var t = $j(this);
    t.each(function() {
      $j(this).addClass('js-animate').removeClass('animate');
    });
    var show = function() {
      var elT = t[0].getBoundingClientRect().top,
          elB = t[0].getBoundingClientRect().bottom,
          elV = (elB >= 0 && elT <= (window.innerHeight || document.documentElement.clientHeight));
      if( elV ) {
        t.addClass('animate').removeClass('js-animate');
        t.find('.vline').addClass('anit');
        t.find('.hline').addClass('anit');
        t.find('.hLine').addClass('anit');
        t.find('.vLine').addClass('anit');
      }                
    };
    $j(window).scroll(function() { show(); }); show();
  });
};

function is_touch_device() {
  return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

(function ($) 
 {
   $.fn.imagesLoaded = function (callback) 
   {
     var elems = this.find('img'),
         len = elems.length,
         blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
     elems.bind('load', function () 
                {
                  // check image src to prevent firing twice (thx doug jones (cjboco))
                  if (--len <= 0 && this.src !== blank) 
                  {
                    callback.call(elems, this);
                  }
                }).each(function () 
                        {
                          if (this.complete || this.complete === undefined) 
                          {
                            var src = this.src;
                            this.src = blank;
                            this.src = src;
                          }
                        });
   };
 }(inv_mainConfiguration.inv_videoJQuery));

$j(document).ready(function() {

/*--  Module application schedule slick slider starts  --*/
$j('.blast-application-schedule-right-mobi').slick({ dots: true, arrows: false });
/*--  Module application schedule slick slider ends  --*/

$j(".download-image p input").on('click', function(){
  $j(this).parent('p').addClass('downloading');
  setTimeout(function(){
    $j('.download-image p').removeClass('downloading');
  },3000);
});

// $j(".download-image p input").on('click', function(){
//   $j(this).next().find('img').css('opacity','1').addClass('downloading');
//   setTimeout(function(){
//     $j(this).next().find('img').css('opacity','0');
//   },3000);
// });


/*--  close search overlay if clicked mmenu  --*/

$j(".mobi-menu-trigger").on("click",function(){
  $j('.popup-search-close').trigger('click');
});

/*--  Glossary IR page click starts  --*/
$j(document).on("click",".glossary-ir-content ul.glossary-link li:not(.active)",function(){
$j(".glossary-ir-content ul.glossary-link li").removeClass("active");
$j(this).addClass("active");
$j.ajax({
type:'GET',
url:window.location.href + "?async=1&pagename=" + $j(this).data("id"),
success:function(data){
$j(".glossary-ir-content-inner").html(data);
$j(".glossary-ir-content-inner").css("visibility","visible");
}
});
});
/*--  Glossary IR page click ends  --*/

/*
$j('.glossary-ir-content ul.glossary-link li a').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $j(this.hash);
      target = target.length ? target : $j('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
      $j('.glossary-ir-content ul.glossary-link li').removeClass('active');
      $j(this).parent().addClass('active');
        var tLength = target.offset().top - 27;
        $j('html,#glossary').animate({
          scrollTop: tLength
        }, 1000);
        return false;
      }
    }
  });
*/
  
/*--  Glossary It page click Ends  --*/

  $j('.content-page-wrapper table:not(".inv-responsive, .rad-responsive")').each(function () {
    if ($j(this).parents('div.scroll-table-container').length < 1) {
      $j(this).wrap('<div class="scroll-table-container"></div>');
    }
  }); 
  
  $j('.contentwrapper table:not(".inv-responsive, .rad-responsive"), .further-content-wrapper table:not(".inv-responsive, .rad-responsive")').each(function () {
    if ($j(this).parents('div.scroll-table-container').length < 1) {
      $j(this).wrap('<div class="scroll-table-container"></div>');
    }
  }); 
  
  setTimeout(function(){
    //Logic to prepend skip to main content to the top
    $j("#skipToMainContentLink").prependTo("body");
  },200);
  
  (function($j, window, document, undefined) {
    $j.fn.doubleTapToGo = function(params) {
      if (!('ontouchstart' in window) &&
          !navigator.msMaxTouchPoints &&
          !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return false;
      this.each(function() {
        var curItem = false;
        $j(this).on('click', function(e) {
          var item = $j(this);
          if (item[0] != curItem[0]) {
            e.preventDefault();
            curItem = item;
          }
        });
        $j(document).on('click touchstart MSPointerDown', function(e) {
          var resetItem = true,
              parents = $j(e.target).parents();
          for (var i = 0; i < parents.length; i++)
            if (parents[i] == curItem[0])
              resetItem = false;
          if (resetItem)
            curItem = false;
        });
      });
      return this;
    };
  })(jQuery, window, document);
  
  //$j('.our-stories .small-bod-item:has(".story")').doubleTapToGo();
  
  
});

/* Module tabs with 3 col cards */
function setCardItemEqualHeight(modId){
  var currWidth = $j(window).width();
  if(currWidth>767){
    /*$j('#'+modId+' .card-equal-height').getSameTopGroups({
      commonParent: '#'+modId+' .mod-tabs-3col-cards-wrapper'
    },function(gc) {
      for (i = 1; i <= gc; i++) {
        setEqualHeight_CommonClass("#"+modId+" .gg-g-" + i + " .mod-tabs-3col-card-item");
      }
    });*/
    setEqualHeight_CommonClass("#"+modId+" .mod-tabs-3col-card-item");
  }else{
    $j('.mod-tabs-3col-card-item').css('height','auto');
  }
}
/* Module tabs with 3 col cards */ 

/* Module 3 col cards */
function setCardItemEqualHeight1(modId){
  var currWidth = $j(window).width();
  if(currWidth>767){
    $j('#'+modId+' .mod-3column-cards-wrapper').getSameTopGroups({
      commonParent: '#'+modId+' .mod-3column-cards-wrapper'
    },function(gc) {
      for (i = 1; i <= gc; i++) {
        setEqualHeight_CommonClass("#"+modId+" .gg-g-" + i + " .mod-3column-card-item");
      }
    });
  }else{
    $j('.mod-3column-card-item').css('height','auto');
  }
}
/* Module 3 col cards */ 

$j(document).ready(function(){

  $j(".tabs-container ul").each(function() {
    if($j(this).has("li").length == 0) {
      $j(this).closest('.tabs-container').hide();
    }
  });

if (/Edge/.test(navigator.userAgent)) {
    $j('body').addClass('ms-edge');
}

  if (is_touch_device()) { 
    $j('body').addClass('touch');
  }else{
    $j('body').addClass('no-touch');
  }
  
  $j(".module-section .inv_playerContainer").each(function() {
    var vidId = $j(this).attr('id');
    $j("#"+vidId).InvPlayer();
    //var videoPlayerInstance = $j(vidId);
  });

  $j(".contentwrapper .inv_playerContainer").each(function() {
    var vidId = $j(this).attr('id');
    $j("#"+vidId).InvPlayer();
    //var videoPlayerInstance = $j(vidId);
  });
    
  $j('.js-animate').inView();
  
  $j(".mobi.sharetext").click(function(){
    $j(".share-options ul").animate({opacity: "toggle"}, "slow");    
  });	
  
  /* ------------------ File extension to UPPERCASE in title attribute ------------------ */
  $j(".text-signpost-wrap a.box-link.mdlnk[Title], .pr-item-container a.md-link[Title], .pr-main-content .pr-title p a[title], a.media-link.rad-link[title], a.media-link.cta-link[title],a.media-link.cta-button[title], a.media-link.doc-link[title], a.doc-dwnld-link[title], .media-card-item a.box-link[title], .three-col-signpost .signpost-wrap a[title]").each(function () {
    var tmpTxt = $j(this).attr("title").split(",");
    if (tmpTxt.length > 1) {
      tmpTxt[0] = tmpTxt[0].toUpperCase();
    }
    $j(this).attr("title", tmpTxt.join());
  });
  /* --------*/    
/*----    Async Tabs tabs starts    ----*/

$j(".tabs-container.asyncTabs > a").text($j(".tabs-container.asyncTabs ul li.current a").text());

    $j('.tabs-container.asyncTabs > a').click(function(){
      if($j(this).hasClass('active')){
        $j(this).removeClass('active');
        $j(this).next('ul').removeClass('active');
      }else{
        $j(this).addClass('active');
        $j(this).next('ul').addClass('active');
      }
    });
    $j('.tabs-container.asyncTabs ul li > a').click(function(){
        $j(this).closest('ul').removeClass('active');
        $j(this).closest('ul').siblings('a').removeClass('active');
        $j(".tabs-container.asyncTabs > a").text($j(this).text());
    });
/*----    Async Tabs tabs ends    ----*/

  /*note text for document download*/
  if(!$j('body').hasClass('ip3-edit')){
    generateShowmoreLink();
    $j('.dd-notes-text').on('click','.readmore-text', function(){
      $j(this).parent().find('.morecontent').fadeIn();
      $j(this).parents('.dd-notes-text').addClass('opened');
    });
    $j('.dd-notes-text').on('click','.viewmore_mob', function(){
      $j(this).parent().find('.morecontent').fadeIn();
      $j(this).parents().addClass('opened');
    });
  }
  /* Module tabs with 3 col cards */
  $j('.mod-3column-cards').each(function(){
    var modId=$j(this).attr('id');
    setCardItemEqualHeight1(modId);
  });
  
  $j('.mod-tabs-3col-cards').each(function(){
    var modId=$j(this).attr('id');
    setCardItemEqualHeight(modId);
  });
  
  $j(".mod-tabs-3col-cards-wrapper a.showmycontent" ).click(function(e) {
    var modId=$j(this).parents('.module-section').attr('id');
    e.preventDefault();
    
    var dataName =$j(this).data("name");
    if(!$j(this).hasClass('selected')) {
      $j('#'+modId+' .mod-tabs-3col-cards-wrapper a.showmycontent').removeClass('selected');
      $j(this).addClass('selected');
      $j('#'+modId+' .mod-3columncards-details').hide();
      $j('#'+modId+' [data-content='+dataName+']').fadeIn('slow');
      
      var offsetTop=$j(this).offset().top;
      $j('html,body').animate({scrollTop:offsetTop-100},500);
    }
  });
  /* Module tabs with 3 col cards */
  
  /*data stats module*/
  $j('.module-data-stats-wrapper').each(function(){
    var slideCnt=$j(this).attr('data-item');
    var modId=$j(this).parents('.module-section').attr('id');
    
    if(typeof slideCnt !='undefined' &&  slideCnt!=''){
      $j('#'+modId+' .module-datastats-slider').slick({
        dots: true,
        accessibility:true,
        centerPadding:'15px',
        slidesToShow: slideCnt,
        slidesToScroll: 1,
        prevArrow: '#'+modId+' .slider-nav-inner .slick-prev-arrow', 
        nextArrow: '#'+modId+' .slider-nav-inner .slick-next-arrow', 
        appendArrows: '#'+modId+' .slider-nav-inner', 
        appendDots: '#'+modId+' .slider-nav-inner',
        responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
	}]
    });
    }
  });
  /*data stats module*/
  
  /*Product data stats module*/
  $j('.module-product-data-stats-wrapper').each(function(){
    var slideCnt=$j(this).attr('data-item');
    var modId=$j(this).parents('.module-section').attr('id');
    
    if(typeof slideCnt !='undefined' &&  slideCnt!=''){
      $j('#'+modId+' .module-product-datastats-slider').slick({
        dots: true,
        accessibility:true,
        centerPadding:'15px',
        slidesToShow: slideCnt,
        slidesToScroll: 1,
        prevArrow: '#'+modId+' .slider-nav-inner .slick-prev-arrow', 
        nextArrow: '#'+modId+' .slider-nav-inner .slick-next-arrow', 
        appendArrows: '#'+modId+' .slider-nav-inner', 
        appendDots: '#'+modId+' .slider-nav-inner',
        responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
	}]
    });
    }
  });
  /*Product stats module*/
  
  /*publication module*/
  $j('.module-publications-wrapper').each(function(){
    var slideCnt=$j(this).attr('data-item');
    var modId=$j(this).parents('.module-section').attr('id');
    
    if(typeof slideCnt !='undefined' &&  slideCnt!=''){
      $j('#'+modId+' .module-publication-slider').slick({
        dots: true,
        accessibility:true,
        centerPadding:'15px',
        slidesToShow: slideCnt,
        slidesToScroll: 1,
        prevArrow: '#'+modId+' .slider-nav-inner .slick-prev-arrow', 
        nextArrow: '#'+modId+' .slider-nav-inner .slick-next-arrow', 
        appendArrows: '#'+modId+' .slider-nav-inner', 
        appendDots: '#'+modId+' .slider-nav-inner',
        responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
	});
    }
  });
  /*publication module*/
  
  /*data stats module*/
  if ($j(window).width() < 768) {
    
    $j('.three-col-signpost .signpost-cover').each(function(){
      var modId=$j(this).parents('.module-section').attr('id');
      
      $j('#'+modId+' .signpost-cover').slick({
        dots: true,
        accessibility:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '#'+modId+' .slider-nav-inner .slick-prev-arrow', 
        nextArrow: '#'+modId+' .slider-nav-inner .slick-next-arrow',
        appendArrows: '#'+modId+' .slider-nav-inner', 
        appendDots: '#'+modId+' .slider-nav-inner',
        responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: '40px'
      }
	}]
    });
    });
  }
  /*data stats module*/
  
   /*close dropdown if click outside*/
  $j(document).on('click touchstart', function(e){
  e.stopPropagation();
    if($j(e.target).parents('.module-tabs-tab').length!=1){
      $j('.module-tabs-tab .module-tab-selected').removeClass('active');
      $j('.module-tabs-tab .module-tabs').removeClass('active');
    }
    
    if($j(e.target).parents('.result-centre-tab').length!=1){
      $j('.result-centre-tab .dd-head').removeClass('active');
      $j('.result-centre-tab .rc-tabs').removeClass('active');
    }
    
    if($j(e.target).parents('.dd-related-list').length!=1){
      $j('.dd-related-list .dd-dropdown').removeClass('selected');
      $j('.dd-related-list .dd-list').hide();
    }
    
   if($j(e.target).parents('.pr-year-tabs').length!=1){
      $j('.pr-year-tabs a.pr-tab').removeClass('active');
      $j('.pr-year-tabs > ul').removeClass('active');
    }
    
   if($j(e.target).parents('.tabs-container.asyncTabs').length!=1){
      $j('.tabs-container.asyncTabs a.pr-tab').removeClass('active');
      $j('.tabs-container.asyncTabs > ul').removeClass('active');
    }

/*-- solr search drop down  --*/
 if($j(e.target).parents('.solr-search-tab').length!=1){
      $j('.solr-search-tab.isDropdown').removeClass('active');
      $j('#contentwrapper .solr-search-tab ul').slideUp();
    }

/*--  Horizontal nested tabs module  --*/
e.stopPropagation();
    if($j(e.target).parents('.htab-menu').length!=1){
      $j('.htab-menu .module-tab-selected').removeClass('active');
      $j('.htab-menu .httab-menuTab').removeClass('active');
    }

  });
  
  /*** Module Tab with 2 Col Content starts ***/
  var IsTabModule = $j('.module-tabs').length;
  if(IsTabModule > 0){
    $j("ul.module-tabs li.first").addClass("current");
    $j(".module-tab-details.first").addClass("selected").show();
    
    $j('.module-tabs-tab').each(function(){
		var selectedTab = $j(this).find('ul.module-tabs li.first a').html();
        //alert(selectedTab);
        $j(this).find('.module-tab-selected').html(selectedTab);
    });
    
    $j('.module-tabs-tab .module-tab-selected').click(function(){
      if($j(this).hasClass('active')){
        $j(this).removeClass('active');
        $j(this).next('ul.module-tabs').removeClass('active');
      }else{
        $j(this).addClass('active');
        $j(this).next('ul.module-tabs').addClass('active');
      }
    });

    $j('.module-vertical-horizontal-tabs .module-tab-selected').click(function(){
      if($j(this).hasClass('active')){
        $j(this).removeClass('active');
        $j(this).next('ul.htab-menu').removeClass('active');
      }else{
        $j(this).addClass('active');
        $j(this).next('ul.htab-menu').addClass('active');
      }
    });
    
    $j("ul.module-tabs > li").each(function( index ) {
      $j(this).click(function(e) {
        e.preventDefault();
        var modID=$j(this).parents('.module-section').attr('id');
        
        $j('#'+modID+' .module-tabs-tab li.module-yeartab').removeClass("current");
        $j(this).addClass("current");
        
        $j('#'+modID+' .module-tab-selected').removeClass('active');
        $j(this).parent().removeClass('active');
        
        $j('#'+modID+' .module-tab-selected').html($j(this).text());
        
        var myTargetDiv = $j(this).attr("id");
        myTargetDiv = "#"+myTargetDiv.replace("-tab1","")+"-detail";
        
        
        $j('#'+modID+' .module-tabs-tab-content .module-tab-details').hide();
        $j('#'+modID+' .module-tabs-tab-content .module-tab-details').removeClass("selected");
        
        $j(myTargetDiv).addClass("selected");
        $j(myTargetDiv).fadeIn();
        
        if($j(myTargetDiv).hasClass('content-video-tab')){
          if(!$j(myTargetDiv).find('.inv_playerContainer').hasClass('inv_initialLoad')){
            var vid=$j(myTargetDiv).find('.video-contentpage-inner').attr('id');
            /*$j(myTargetDiv).find('.inv_playerContainer').embedCode({
              playerType:"singleplayer",videoId:vid,overlayPlay:true,autoPlay:false});*/
          }
        }
      });
    });
	
    if($j(".module-tab-details.content-video-tab.selected").length>0){
		var vid=$j(".module-tab-details.content-video-tab.selected").find('.video-contentpage-inner').attr('id');
      /*$j(".module-tab-details.content-video-tab.selected").find('.video-contentpage-inner > .inv_playerContainer').embedCode({
        playerType:"singleplayer",videoId:vid,overlayPlay:true,autoPlay:false});*/
    }
	         
  }
  /*** Module Tab with 2 Col Content starts ***/
 
  /*** Module Image Tabs starts ***/
  $j('.module-image-tabs').each(function(){
      $j(this).find('.image-tabs-nav').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        focusOnSelect: true,
        centerMode: true,
        variableWidth: true
      }).on('afterChange', function(event, slick, currentSlide){
        var modID=$j(slick.$slider).attr('id');
        modID=modID.replace('_modImgTab','');
        //console.log(modID);
        
        var targetID=$j(slick.$slider).find('.image-tab-item.slick-current').attr('id');
        targetID=targetID.replace('_tab','');
        //console.log(targetID);
        
        if($j('#'+modID).find('.image-tabs-content-wrapper > #'+targetID+'_content.image-tab-content').is(":visible")){
          //already selected content
        }else{
          $j('#'+modID).find('.image-tabs-content-wrapper > .image-tab-content').hide();
          $j('#'+modID).find('.image-tabs-content-wrapper > #'+targetID+'_content.image-tab-content').slideDown('slow');
        }
        
        
      });
      
    });
    
    $j('.image-tabs-content-wrapper').each(function(){
      $j(this).find('.image-tab-content').each(function(){
        $j(this).find('.image-tab-list-content-inner').hide();
        $j(this).find('.image-tab-list-content-inner.activeContent').slideDown();
        $j(this).find('.image-tab-list-content-inner.activeContent').removeClass('activeContent');
        
        $j(this).find('.image-tab-list-selected > .selected-text').html($j(this).find('.image-tab-list-item.activeTab').text());
        
        var currWidth = $j(window).width();
        if(currWidth < 768){
          $j(this).find('.image-tab-list').hide();
        }
      });
      $j(this).find('.image-tab-content').hide();
      $j(this).find('.image-tab-content.active').slideDown();
      $j(this).find('.image-tab-content.active').removeClass('active');
    });
    
    
    $j('.image-tab-list-item').click(function(){
      if($j(this).hasClass('activeTab')){
        //do nothing
      }else{
        $j(this).parent('.image-tab-list').find('.image-tab-list-item').removeClass('activeTab');
        $j(this).addClass('activeTab');
        $j(this).parents('.image-tab-list-wrapper').find('.image-tab-list-selected > .selected-text').html($j(this).text());
        
        $j(this).parents('.image-tab-content').find('.image-tab-list-content > .image-tab-list-content-inner').hide();
        var targetID=$j(this).attr('id');
        targetID=targetID.replace('_tab','');
        
        $j(this).parents('.image-tab-content').find('#'+targetID+'_content.image-tab-list-content-inner').fadeIn('slow');
        
        var currWidth = $j(window).width();
        if(currWidth < 768){
          $j(this).parent().hide();
          $j('.image-tab-list-selected.active').removeClass('active');
        }
      }
    });
    
    $j('.image-tab-list-selected').click(function(){
      if($j(this).hasClass('active')){
        $j(this).removeClass('active');
        $j(this).next().slideUp();
      }else{
        $j(this).addClass('active');
        $j(this).next().slideDown();
      }
    });
    /*** Module Image Tabs ends ***/
  
  /*** Module Image Carousel starts ***/
  var IsSusgallery = $j('.module-image-carousel-gallery').length;
  if(IsSusgallery > 0){
    $j('.module-image-carousel-gallery').slick({
      dots: false,
      control:false,
      infinite: true,
      arrows: true,
      autoplay: false,
      accessibility:true
    });
  }
  
  $j(".module-imagecarousel-nav .imagecarousel-slick-prev").on('click',function(e){
    e.preventDefault();
    
    $j(this).parent(".module-imagecarousel-nav").prev(".module-image-carousel-gallery").children(".slick-prev").trigger("click");
  });
  
  $j(".module-imagecarousel-nav .imagecarousel-slick-next").on('click',function(e){
    e.preventDefault();
    
    $j(this).parent(".module-imagecarousel-nav").prev(".module-image-carousel-gallery").children(".slick-next").trigger("click");
  });
  /*** Module Image Carousel ends ***/
  
  /*** Module document download starts ***/
  $j('.dd-dropdown').click(function(e) {
    if ($j(this).hasClass('selected')) {
      $j(this).parent().find('.dd-list').slideUp();
      $j(this).removeClass('selected');
    } else {
      $j(this).parent().find('.dd-list').slideDown();
      $j(this).addClass('selected');
    }
  });
  
  $j('.dd-item').click(function(e) {  
    var docSection=$j(this).parents('.dd-document-section');
    var ddList= $j(this).text();
    var ddItem=$j(this).data('ddtitle');
    
    docSection.find('.dd-item').removeClass('selected');
    $j(this).addClass('selected');
    docSection.find('.dd-doc-item').hide();
    docSection.find('[data-dd='+ddItem+']').fadeIn(2000);
    docSection.find('.dd-dropdown').text(ddList);
    docSection.find('.dd-list').slideUp();
    docSection.find('.dd-dropdown').removeClass('selected');
    docSection.find('.dd-dropdown').data('seleced',ddItem);
  });
  /*** Module document download ends ***/
  
  
  /*** Module vertical tabs starts ***/
  $j('.module-vertical-tabs').each(function(moduleIndex){
    var modId=$j(this).attr('id');
    
    /*Assign attr to each links*/
    $j(this).find('.module-vertical-container .vtab-link').each(function(i){
      $j(this).attr('data-slide-index','mvt-'+moduleIndex+'-link-'+i);
    });
    $j(this).find('.module-horizontal-slider .vtab-link').each(function(i){
      $j(this).attr('data-slide-index','mvt-'+moduleIndex+'-link-'+i);
    });
    
    $j('#'+modId+' .module-vertical-tabs-content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      easing:'ease-in-out',
      adaptiveHeight:true,
      asNavFor: '#'+modId+' .module-horizontal-slider'
    });
    $j('#'+modId+' .module-horizontal-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '#'+modId+' .module-vertical-tabs-content',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
      {
      breakpoint: 767,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
    }
	]
    });
    $j('#'+modId+' .module-horizontal-slider').on('afterChange', function(event, slick, currentSlide){
      var verticalTabLink=$j(slick.$slides[currentSlide]).attr('data-slide-index');
      var verticalTabWrap=$j('.module-vertical-tabs-left .module-vertical-container a[data-slide-index="'+verticalTabLink+'"]').parent();
      verticalTabWrap.find('a.vtab-link').removeClass('current');
      verticalTabWrap.find('a.vtab-link[data-slide-index="'+verticalTabLink+'"]').addClass('current');
    });
    //show first link of module as current;
    $j(this).find('.module-vertical-container .vtab-link:first').addClass('current');
  });
  
  $j('.module-vertical-container .vtab-link').click(function(){
    if(!$j(this).hasClass('current')){
      var modId= $j(this).parents('.module-section').attr('id');
      
      /*------*/
      var currentId = $j(this).attr('id').slice(0, -4)+"-content";
      $j(this).closest(".module-vertical-tabs-wrapper").find("#"+currentId).find(".httab-menuTab").children("li.first").children("a").focus();
      /*------*/
      
      $j('#'+modId+' .module-vertical-container .vtab-link').removeClass('current');
      $j(this).addClass('current');
      
      var slideIndex=$j(this).index();
      
      if($j('#'+modId+' .module-vertical-tabs-content').hasClass('slick-initialized')){
        $j('#'+modId+' .module-vertical-tabs-content').slick('slickGoTo', slideIndex);
      }
    }
  });
  /*** Module vertical tabs ends ***/
  
  /*** Module testimonial tabs starts ***/
  $j('.module-testimonial').each(function(moduleIndex){
    var modId=$j(this).attr('id');
    
    /*Assign attr to each links*/
    $j(this).find('.mt-testimonial-scrollbar .testimonial-item').each(function(i){
      $j(this).attr('data-slide-index','mts-'+moduleIndex+'-link-'+i);
    });
    
    $j(this).find('.mt-slider-nav .testimonial-item').each(function(i){
      $j(this).attr('data-slide-index','mts-'+moduleIndex+'-link-'+i);
    });
    
    $j(this).find('.mt-slider-for .testimonial-content').each(function(i){
      $j(this).attr('data-slide-index','mts-'+moduleIndex+'-link-'+i);
      
      if(i>0){ 
        $j(this).hide();
      }else{
        checkForReadmoreButton(this);
      }
    });
    
    
    $j('#'+modId+' .mt-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      /*asNavFor: '#'+modId+' .mt-slider-for',*/
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
		}]
	});
    
    /*$j('#'+modId+' .mt-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      easing:'ease-in-out',
      adaptiveHeight:true,
      swipe:false,
      asNavFor: '#'+modId+' .mt-slider-nav'
    });*/
    
    $j('.testimonial-readmore').click(function(){
      var readmore=$j(this).attr('data-readmore');
      var readless=$j(this).attr('data-readless');
      if($j(this).hasClass('active')){
        $j(this).removeClass('active').html(readmore);
        //$j(this).parent().removeClass('show');
        $j(this).parent().animate({height: "430px"},function(){
			$j(this).removeClass('show');
            $j(this).css('height','');
        });
      }else{
        $j(this).addClass('active').html(readless);
        //$j(this).parent().addClass('show');
        var h=$j(this).parent().find('.testimonial-right-content-inner').outerHeight();
        //h=h+90;
        $j(this).parent().animate({height: h+"px"}, function(){
			$j(this).addClass('show');
            $j(this).css('height','');
        });
      }
    });
    
    $j('#'+modId+' .mt-slider-nav').on('afterChange', function(event, slick, currentSlide){
      var testiTabLink=$j(slick.$slides[currentSlide]).attr('data-slide-index');
      var testiTabWrap=$j('.mt-testimonial-scrollbar .testimonial-item[data-slide-index="'+testiTabLink+'"]').parent();
      testiTabWrap.find('.testimonial-item').removeClass('current');
      testiTabWrap.find('.testimonial-item[data-slide-index="'+testiTabLink+'"]').addClass('current');
      
      $j('#'+modId+' .mt-slider-for .testimonial-content').hide();
      $j('#'+modId+' .mt-slider-for .testimonial-content[data-slide-index="'+testiTabLink+'"]').fadeIn(600,'linear');
      
      $j('.testimonial-right-content').removeClass('show');
      $j('.testimonial-readmore').removeClass('active');
      
      checkForReadmoreButton('#'+modId+' .mt-slider-for .testimonial-content[data-slide-index="'+testiTabLink+'"]');
    });
    
    $j('#'+modId+' .module-testimonial-tabs .testimonial-item:first-child').addClass('current');
    
  });
  
  /*change slide on item click*/
  $j('.mt-testimonial-scrollbar .testimonial-item > a').click(function(){
    if(!$j(this).parent().hasClass('current')){
      var modId= $j(this).parents('.module-section').attr('id');
      
      $j(this).parents('.module-testimonial-wrapper').find('.testimonial-item').removeClass('current');
      $j(this).parent().addClass('current');
      
      var slideIndex=$j(this).parent().attr('data-slide-index');
      $j('#'+modId+' .mt-slider-for .testimonial-content').hide();
      $j('#'+modId+' .mt-slider-for .testimonial-content[data-slide-index="'+slideIndex+'"]').fadeIn(600,'linear');
      
      $j('.testimonial-right-content').removeClass('show');
      $j('.testimonial-readmore').removeClass('active');
      checkForReadmoreButton('#'+modId+' .mt-slider-for .testimonial-content[data-slide-index="'+slideIndex+'"]');
      
      /*var slideIndex=$j(this).parent().index();
      if($j('#'+modId+' .mt-slider-for').hasClass('slick-initialized')){
        $j('#'+modId+' .mt-slider-for').slick('slickGoTo', slideIndex);
      }*/
    }
  });
  
  
  /*** Module testimonial tabs ends ***/
});

/*-------------------Global Functions end------------------*/

/*-------------------Group Site Header------------------*/

$j(document).ready(function() {
  
  /*---------------Accessibility JS----------------------*/
  $j(document).keydown(function(e) {
    // Tab  
    if (!(e.shiftKey) && e.keyCode == 9) {
      console.log('tab');
      if($j(e.target).closest('.group-sites.active').length){
        $j(e.target).closest('.group-sites.active').siblings('.groupSitesContainer').find('.groupSitesgroup-sitesUL li:eq(0)').children('a').focus();
      }
      if($j(e.target).closest('li.level2').hasClass('active')){
        console.log('level2 out');
        $j(e.target).siblings('ul').find('.level3-title').children('a').focus();
      }
      //       if(($j(e.target).closest('li.level3').hasClass('last'))){
      //         console.log('level3 out');
      //         $j(e.target).closest('li.level2').next('li').children('a').focus();
      //       }
      
      //       if($j(e.target).closest('li.level2').hasClass('active')){
      //         $j(e.target).parent('li').find('li:first-child a').focus();
      //       }
      
      if((!$j(e.target).hasClass('activemeganav')) && ($j(e.target).parent('.haschildren').length) && (!$j(e.target).closest(".tabs-container").length)){
        e.preventDefault();
        if((!$j(e.target).closest('li').next('li').length)){
          $j(e.target).closest('.second-level').siblings('.top-group-container').find('.group-sites').children('a').focus();
        } else {
          $j(e.target).closest('li').next('li').children('a').focus();
        }
      }
      if((!$j(e.target).hasClass('activemeganav')) && ($j(e.target).parent('.level1.haschildren.last').length)){
        e.preventDefault();
        if((!$j(e.target).closest('li').next('li').length)){
          $j(e.target).closest('.rdMenuwrapper').siblings('.openSearch').children('a').focus();
        }
      }
      
      /*-- as aa-831 --*/
      if($j(e.target).closest('.rd-level2 > li.level2.active').length){
       if($j(e.target).siblings("ul").length){
        $j(e.target).siblings("ul").children(".level3-title").find("a").focus();
       }
      }
      
      if($j(e.target).closest('.rd-level2 > li.level2.last').length){
        if($j(e.target).closest(".rdsubmenu-wrapper").find(".level3-menu").length){
          e.preventDefault();
          $j(e.target).closest(".rdsubmenu-wrapper").find(".level3-menu").find(".rdSubNavSectionClose").children("a").focus();
        }
      }
      
      if($j(e.target).closest('.bod-full-wrap.dsktp').length){
         if(!$j(e.target).hasClass("bod-close")){
         e.preventDefault();
           $j(e.target).closest('.bod-full-wrap.dsktp').find(".bod-close").focus();
         } else {
           e.preventDefault();
           $j(e.target).click();
         }
      }

      if(($j(e.target).closest('.module-vertical-tabs-left').length) && ($j(e.target).hasClass('current','first'))){
      var currId = $j(e.target).attr('id').slice(0, -4)+"-content";
      if($j(e.target).closest(".module-vertical-tabs-wrapper").find("#"+currId).find(".httab-menuTab").children("li.first").children("a").length){
      e.preventDefault();
      $j(e.target).closest(".module-vertical-tabs-wrapper").find("#"+currId).find(".httab-menuTab").children("li.first").children("a").focus();
      }
      }
      
      if(($j(e.target).closest('.module-vertical-tabs-left').length) && ($j(e.target).hasClass('last'))){
      e.preventDefault();
        if(!$j(e.target).hasClass('current')){
          if($j(e.target).closest(".module-vertical-tabs").next("section").length){
            $j(e.target).closest(".module-vertical-tabs").next("section").find("a:eq(0)").focus();
          } else { 
            $j("footer").find("a:eq(0)").focus();
          }
        }
      }
      
      if(($j(e.target).closest('.module-vertical-tabs-content').length) && ($j(e.target).parents(".htabmenu").hasClass('current'))){
        var myTargetDiv2 = $j(e.target).parents(".htabmenu").attr("id");
        myTargetDiv2 = "#"+myTargetDiv2.replace("-htlink","")+"-htcntnt";
        if($j(myTargetDiv2).find(".focus-first").length){
          e.preventDefault();
          $j(myTargetDiv2).find(".focus-first").focus(); 
        } else if($j(e.target).parents(".htabmenu").next("li").length){
          e.preventDefault();
          $j(e.target).parents(".htabmenu").next("li").children("a").focus();
        }      
      } else if(($j(e.target).closest('.module-vertical-tabs-content').length) && ($j(e.target).hasClass("htabanchor"))){
        if(!$j(e.target).parents(".htabmenu").next("li").length){
         var myTargetDiv14 = $j(e.target).closest(".module-vTabs-content").attr("id");
          myTargetDiv14 = "#"+myTargetDiv14.replace("-content","")+"-tab";
         if(!$j(e.target).closest(".module-vertical-tabs-wrapper").find(myTargetDiv14).next("a").length){
         e.preventDefault();
           if($j(e.target).closest(".module-vertical-tabs").next("section").length){
            $j(e.target).closest(".module-vertical-tabs").next("section").find("a:eq(0)").focus();
          } else { 
            $j("footer").find("a:eq(0)").focus();
          }
         
         } else {
          e.preventDefault();
          var myTargetDiv4 = $j(e.target).closest(".module-vTabs-content").attr("id");
          myTargetDiv4 = "#"+myTargetDiv4.replace("-content","")+"-tab";
          if($j(e.target).closest(".module-vertical-tabs-wrapper").find(myTargetDiv4).next("a").length){
            $j(e.target).closest(".module-vertical-tabs-wrapper").find(myTargetDiv4).next("a").focus();
          } else {
            $j(e.target).closest(".module-vertical-tabs-wrapper").find(myTargetDiv4).focus();
          }
          }
        }
      } 

      

/*------ Last item of tab content -----*/
      if($j(e.target).hasClass('focus-last')){
        var myTargetDiv3 = $j(e.target).closest(".htab-content-item").attr("id");
        myTargetDiv3 = "#"+myTargetDiv3.replace("-htcntnt","")+"-htlink";
        if($j(e.target).closest(".module-vertical-tabs-wrapper").find(myTargetDiv3).next("li").length){
          e.preventDefault();
          $j(e.target).closest(".module-vertical-tabs-wrapper").find(myTargetDiv3).next("li").children("a").focus();
        } else {
          var myTargetDiv4 = $j(e.target).closest(".module-vTabs-content").attr("id");
          myTargetDiv4 = "#"+myTargetDiv4.replace("-content","")+"-tab";
          if($j(e.target).closest(".module-vertical-tabs-wrapper").find(myTargetDiv4).next("a").length){
          e.preventDefault();
          $j(e.target).closest(".module-vertical-tabs-wrapper").find(myTargetDiv4).next("a").focus();
          }
        }
      }
      
      if(($j(e.target).closest(".sco-wrap").length) && ($j(e.target).closest(".swiper-slide").length)){
        if($j(e.target).closest(".swiper-slide").hasClass("gg-g-2")){
        
          if($j(e.target).closest(".signpost-carousel-wrapper").siblings(".swiper-button-next").length){
          e.preventDefault();
            $j(e.target).closest(".signpost-carousel-wrapper").siblings(".swiper-button-next").focus();
          }
        }
      } 
      
       
      
      
      /*-- as aa-831 --*/
      
    }
    
    // Shift + Tab
    if ((e.shiftKey) && e.keyCode == 9) {
      console.log("Tab");
      if((!$j(e.target).siblings('.submenuopened').length) && ($j(e.target).closest('.haschildren').length)) {
        e.preventDefault();
        if((!$j(e.target).closest('li').prev('li').length)){
          $j(e.target).closest('.headerwrapper').find('.top-group-container').find('.group-sites').children('a').focus();
        } else {
          $j(e.target).closest('li').prev('li').children('a').focus();
        }
      }
      if((!$j(e.target).closest('.group-sites.active').length) && ($j(e.target).closest('.group-sites').length)){
        $j(e.target).closest('.top-group-container').siblings('.second-level').find('li:eq(0)').children('a').focus();
      }
    }
    
    //Down Arrow
    if(e.keyCode == 40) {
      console.log("Down");
      if(($j(e.target).siblings('.rdsubmenu-wrapper').length) && (!$j(e.target).siblings('.rdsubmenu-wrapper.submenuopened').length))
      {
        e.preventDefault();
        $j('.second-level li a, .main-menu li a').removeClass('activemeganav');
        $j('.rdsubmenu-wrapper').removeClass('submenuopened');
        $j(e.target).addClass('activemeganav');
        $j(e.target).siblings('.rdsubmenu-wrapper').addClass('submenuopened');
      }   
    }
    
    //Escape Key
    if(e.keyCode == 27) {
      console.log("Escape");  
      
      $j('.second-level li a, .main-menu li a').removeClass('activemeganav');
      $j('.rdsubmenu-wrapper').removeClass('submenuopened');
    }
    
  });
  /*---------------Accessibility JS End----------------------*/
  
  
  $j(".group-sites a").click(function(e) {
    $j(".groupSitesContainer li").last().addClass("last");
    e.preventDefault();
    $j(".groupSitesContainer").slideToggle('500', function() {
      if ($j(".groupSitesContainer").is(':visible'))
        $j(".group-sites").addClass("active");
      else
        $j(".group-sites").removeClass("active");
      //       if ($j(".group-sites").hasClass("active")) {
      //           $j(".groupSitesContainer").slideUp('500', function() {
      //             $j(".group-sites").removeClass("active");
      //             $j(".mm-navbars-bottom").removeClass("active");
      //           });
      //       }
    });
  });
  
  
  $j(window).scroll(function() {
    if($j(".ip3-selfserve").length <= 0){
      var wRDscroll = $j(window).scrollTop();
      if (wRDscroll >= "15") {
        $j('#logo').addClass('stickyLogo');
        //  $j('body').addClass('stckIt');
      }
      else{
        $j('#logo').removeClass('stickyLogo');
        // $j('body').removeClass('stckIt');
      }
    }  
  });
  
  
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  //var navbarHeight = $j('header').outerHeight();
  
  $j(window).scroll(function(event){
    didScroll = true;
  });
  
  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  
  function hasScrolled() {
    var st = $j(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > 400){
      // Scroll Down
      $j('body').removeClass('stckIt').addClass('nav-up');
      
    } else {
      // Scroll Up
      if(st + $j(window).height() < $j(document).height()) {
        $j('body').removeClass('nav-up').addClass('stckIt');
      }
    }
    if (st <= 15){
      // Scroll Down
      $j('body').removeClass('stckIt');
    } 
    lastScrollTop = st;
  }
  
  //setTimeout(setEqualHeight_CommonClass('.share-price-3-col .ticker-wrapper'),15000);
  setEqualHeight_CommonClass('.text-signpost-cover .text-signpost-wrap');
  setEqualHeight_CommonClass('footer .footer-height');
  setEqualHeight_CommonClass('.calendar-row > div');
  setEqualHeight_CommonClass('.calendar-event .calendar-event-details h3');
  setEqualHeight_CommonClass('.image-gallery-container .small-bod-item');
  //setEqualHeight_CommonClass('.video-gallery-content .video-item'); 
  var Isgallery = $j('.module-imagecarousel-gallery').length;
  if(Isgallery > 0){
	$j('.module-imagecarousel-gallery').slick({
      dots: false,
      control:false,
      infinite: true,
      arrows: true,
      autoplay: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true
        }
      }]
      
    }); 
  }
  $j(".module-imagecarousel-gallery-Images-nav .img-slick-prev").on('click',function(e){
    e.preventDefault();
    $j(".module-imagecarousel-gallery").find(".slick-prev").trigger("click");
  });
  
  $j(".module-imagecarousel-gallery-Images-nav .img-slick-next").on('click',function(e){
    e.preventDefault();
    $j(".module-imagecarousel-gallery").find(".slick-next").trigger("click");
  });
  
});

/*-------------------Slick for Banner------------------*/

$j('.hero-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: true,  
  autoplay: true,
  speed: 500,  
  autoplaySpeed: 10000,
  asNavFor: '.slider-nav-thumbnails'
});

$j('.slider-nav-thumbnails').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.hero-slider',
  infinite: true,  
  autoplay: true,
  autoplaySpeed: 7000,
  dots: true,
  focusOnSelect: true
});
//remove active class from all thumbnail slides
$j('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
//set active class to first thumbnail slides
$j('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
// On before slide change match active thumbnail to current slide
$j('.hero-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $j('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
  $j('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});


/* icon card carousal module */
  $j('.card-carousel-content').each(function(){
    var modId=$j(this).parents('.module-section').attr('id');
    $j('#'+modId+' .card-carousel-wrapper').slick({
      dots:true,
      infinite:true,
      prevArrow: '#'+modId+' .slider-nav-inner .slick-prev-arrow', 
      nextArrow: '#'+modId+' .slider-nav-inner .slick-next-arrow', 
      appendDots: '#'+modId+' .slider-nav-inner',
      variableWidth: true,
      centerMode: true,
      centerPadding: '150px',
      responsive: [
        {
          breakpoint:991,
          settings: {
            variableWidth: false,
            centerPadding:'100px',
            slidesToShow:1,
            slidesToScroll:1
          }
        },
        {
          breakpoint:767,
          settings: {
            variableWidth: false,
            centerPadding:'45px',
            slidesToShow:1,
            slidesToScroll:1
          }
        },
        {
          breakpoint:480,
          settings: {
            variableWidth: false,
            centerPadding:'30px',
            slidesToShow:1,
            slidesToScroll:1
          }
        }
      ]
    });
  });
  setTimeout(function(){
    setEqualHeight_CommonClass('.card-carousel-wrapper .card-content-wrap');
  }, 100);
  
  /* Icon card carousal module */

/*-------------------Main Menu Banner------------------*/

$j(window).on("load", function() {
setEqualHeight_CommonClass('.video-gallery-content .video-item'); 
var currWidth = $j(window).width();
  if(currWidth<767){
$j(window).resize(function() {
function resizeVid(){
$j(".video-gallery-content .video-item").css("height","auto");
setEqualHeight_CommonClass('.video-gallery-content .video-item'); 
var height1 = $j(window).height();
  var width1 = $j(window).width();
  if(width1 == height1){
  setEqualHeight_CommonClass('.video-gallery-content .video-item'); 
  }
  }
  resizeVid();
});
}

/* var h = $j("#iframe-container iframe.responsive").height();
$j("#iframe-container iframe.responsive").height(h+5); */


setTimeout(function(){
	setEqualHeight_CommonClass('.our-stories .story-content'); 
},2000);



  $j(".main-menu .level1.haschildren").each(function() {
    var count = 0;
    var content = "";
    var wrappercontent = "";
    // var cls = $j(this).find("ul").attr("class");
    var id = $j(this).find("ul").attr("id");
    $j(this).children("ul").each(function() {
      count = count + 1;
      $j(this).find("li.level2.haschildren").each(function() {
        var title2 = $j(this).children("a").text();
        var titleHref = $j(this).children("a").attr('href');
        $j(this).children('a').append("<span class='icon-right-arrow'></span>");
        $j(this).children("ul").prepend("<li class='level3-title'><a href='" + titleHref + "'><span>"  + title2 + "</span></a></li>");
      });   
      // Level3Title = content2 + "<div class='level3-title'><span>"  + title2 + "</span></div>";
      content = content + $j(this).html();
      $j(this).remove();
    });
    
    if (content !== "") {
      wrappercontent = wrappercontent + "<ul class='rd-level2' data-id='" + id + "'>" + content + "</ul>";
    }
    var aid = $j(this).attr("id");
    var title = $j("#" + aid + " > a").html();
    var titleLink = $j("#" + aid + " > a").attr("href");
    var mainwrapper = "<div class='rdsubmenu-wrapper'><div class='rd-leftmenuwrapper'><p class='rdSubNavSectionTitle'><span class='rdSubNavSectionTitlelable'><a href='" + titleLink + "'>" + title + "</a></span></p><div class='rdsubmenu'>" + wrappercontent  + "</div></div></div>";
    $j(this).append(mainwrapper);
    
    if ($j("#rdSubNavSignPost ." + aid).length > 0) {
      var signposthtml = $j("#rdSubNavSignPost ." + aid).html();
      var signpostwrapper = "<div class='navsignpost-wrapper'>" + signposthtml + " <span class='rdSubNavSectionClose'><a href='javascript:;' onClick='CloseSubMenu();'>Close <span class='icon-close-btn'></span></a></span></div>";
      $j(this).find(".rdsubmenu-wrapper").append(signpostwrapper);
    }
    //setEqualHeight_CommonClass('.rdsubmenu-wrapper > div');
  });
  
  $j('.main-menu ul > .level1.haschildren.first').children(".rdsubmenu-wrapper").addClass('left-menu');
  $j('.main-menu ul > .level1.haschildren.last').prev().children(".rdsubmenu-wrapper").addClass('right-menu');
  $j(".second-level ul > li").each(function() {
    if ($j(this).children(".rdsubmenu-wrapper").find("li").length < 1) {
      $j(this).children(".rdsubmenu-wrapper").remove();
    }else{
      $j(this).addClass("haschildren");
    }
  });
  
  $j(".main-menu .rdsubmenu ul > li.level2 > a").click(function(event) {
    if ($j(this).parent().hasClass("haschildren")) {
      event.preventDefault();
      if ($j(this).parent().hasClass("active")) {
        $j(this).parent().removeClass("active");
        $j(".main-menu .navsignpost-wrapper").removeClass("level3-menu");
      }else{
        $j(".main-menu .rdsubmenu ul > li.level2").removeClass("active");
        $j(".main-menu .navsignpost-wrapper").removeClass("level3-menu");
        $j(this).closest('.rdsubmenu-wrapper').find(".navsignpost-wrapper").addClass("level3-menu");
        $j(this).parent().addClass("active");
      }
    }
  });  
  
  $j('.rdsubmenu-wrapper li.level2.haschildren.selected').closest('.rdsubmenu-wrapper').find(".navsignpost-wrapper").addClass("level3-menu");
  $j('.rdsubmenu-wrapper li.level2.selected').addClass("active");
  

  $j(".second-level.menu-list ul li").each(function(){
  var id=$j(this).data('class');
  var url=$j("#PageLevel").data("url");
  var myPage = url.split(/[\\\/]/); 
  if(myPage.indexOf(id) != -1){
    $j(this).addClass("current");
    $j(this).closest(".first-nav").addClass("selected");
	}
  });

  if (!is_touch_device()) { 
    $j(".second-level ul > li, .main-menu ul > li.level1.haschildren").hover(function() {
      $j(this).children('a').toggleClass("activemeganav");
      $j(this).children(".rdsubmenu-wrapper").toggleClass("submenuopened");
     }, function() {
      $j('.second-level li a, .main-menu li a').removeClass('activemeganav');
      $j('.rdsubmenu-wrapper').removeClass('submenuopened');  
     });
  } 
  if (is_touch_device()) { 
    $j(".second-level ul > li > a, .main-menu ul > li.level1.haschildren > a").click(function() {
      $j('.second-level li a, .main-menu li a').removeClass('activemeganav');
      $j('.rdsubmenu-wrapper').removeClass('submenuopened');  
      $j(this).addClass("activemeganav");
      $j(this).closest('li').children(".rdsubmenu-wrapper").addClass("submenuopened");
    });
  } 
  
  $j("span.rdSubNavSectionClose a").click(function(){
    if (is_touch_device()) {
      $j('.second-level li a, .main-menu li a').removeClass('activemeganav');
      $j('.rdsubmenu-wrapper').removeClass('submenuopened');  
    }
    $j(this).closest('.rdsubmenu-wrapper').addClass("closed");
    $j(this).closest('li').addClass("closed");
    //$j('.second-level li a, .main-menu li a').removeClass('activemeganav');
    //$j('.rdsubmenu-wrapper').removeClass('submenuopened');
    
    setTimeout(function(){
      $j('.rdsubmenu-wrapper').removeClass("closed");
      $j('.main-menu li.level1, .second-level li').removeClass("closed");
    }, 1500);
  });


  $j('.rdsubmenu-wrapper').each(function() {
    var Menu1Width = $j(this).children('.rd-leftmenuwrapper').outerWidth();
    var Menu2Width = $j(this).children('.navsignpost-wrapper').outerWidth();
    $j(this).css('width', Menu1Width + Menu2Width);
  });
  
});
function CloseSubMenu() {
}


$j(document).ready(function() {
  // Hide shareholder news if more then 1 - end
  $j(document).on('click touchstart', function(event) {
    if (!$j(event.target).closest('.main-menu').length) {
      CloseSubMenu();
    }
  });
  if (is_touch_device()) {
    if ($j(window).width() > 991) {
      if (!(window.navigator.msPointerEnabled)) {
        $j('.second-level ul > li.first-nav > a').doubleTapToGo();
        $j('.main-menu ul > .level1.haschildren > a').doubleTapToGo();
      }
    }
  }
  
  /*----    BOD Module starts    ----*/
  /*
  $j(".module-bod .module-bod-wrapper.four-col").each(function(){
    $j(this).find(".bod-row:eq(0) .bod-item:eq(0) .bod-item-inner").addClass("active");
    $j(this).find(".bod-row .bod-item").addClass("fadded");
    $j(this).find(".bod-row:eq(0) .bod-item:eq(0)").removeClass("fadded");
    var bodDetailsF = $j(this).find(".bod-row:eq(0) .bod-item:eq(0) .bod-details").html();
    $j(this).find(".bod-row:eq(0) .bod-full-wrap .inner").html(bodDetailsF);
    $j(this).find(".bod-row:eq(0) .bod-full-wrap.dsktp").css("display","block").addClass("active");
    $j(this).find(".bod-row:eq(0) .bod-item:eq(0) .bod-full-wrap.mbl").css("display","block").addClass("active");
  });
  
  $j(".module-bod .module-bod-wrapper.two-col").each(function(){
    $j(this).find(".bod-row:eq(0) .bod-item:eq(0) .bod-item-inner").addClass("active");
    $j(this).find(".bod-row .bod-item").addClass("fadded");
    $j(this).find(".bod-row:eq(0) .bod-item:eq(0)").removeClass("fadded");
    var bodDetailsF = $j(this).find(".bod-row:eq(0) .bod-item:eq(0) .bod-details").html();
    $j(this).find(".bod-row:eq(0) .bod-full-wrap .inner").html(bodDetailsF);
    $j(this).find(".bod-row:eq(0) .bod-full-wrap.dsktp").css("display","block").addClass("active");
    $j(this).find(".bod-row:eq(0) .bod-item:eq(0) .bod-full-wrap.mbl").css("display","block").addClass("active");
  });
  
  $j(".leadership-team-landing .module-bod-wrapper.four-col .bod-row:eq(0) .bod-item:eq(0) .bod-item-inner").addClass("active");
  $j(".leadership-team-landing .module-bod-wrapper.four-col .bod-row .bod-item").addClass("fadded");
  $j(".leadership-team-landing .module-bod-wrapper.four-col .bod-row:eq(0) .bod-item:eq(0)").removeClass("fadded");
  var bodDetailsF = $j(".leadership-team-landing .module-bod-wrapper.four-col .bod-row:eq(0) .bod-item:eq(0) .bod-details").html();
  $j(".leadership-team-landing .module-bod-wrapper.four-col .bod-row:eq(0) .bod-full-wrap .inner").html(bodDetailsF);
  $j(".leadership-team-landing .module-bod-wrapper.four-col .bod-row:eq(0) .bod-full-wrap.dsktp").css("display","block").addClass("active");
  $j(".leadership-team-landing .module-bod-wrapper.four-col .bod-row:eq(0) .bod-item:eq(0) .bod-full-wrap.mbl").css("display","block").addClass("active");
  
  $j(".leadership-team-landing .module-bod-wrapper.two-col .bod-row:eq(0) .bod-item:eq(0) .bod-item-inner").addClass("active");
  $j(".leadership-team-landing .module-bod-wrapper.two-col .bod-row .bod-item").addClass("fadded");
  $j(".leadership-team-landing .module-bod-wrapper.two-col .bod-row:eq(0) .bod-item:eq(0)").removeClass("fadded");
  var bodDetailsF = $j(".leadership-team-landing .module-bod-wrapper.two-col .bod-row:eq(0) .bod-item:eq(0) .bod-details").html();
  $j(".leadership-team-landing .module-bod-wrapper.two-col .bod-row:eq(0) .bod-full-wrap .inner").html(bodDetailsF);
  $j(".leadership-team-landing .module-bod-wrapper.two-col .bod-row:eq(0) .bod-full-wrap.dsktp").css("display","block").addClass("active");
  $j(".leadership-team-landing .module-bod-wrapper.two-col .bod-row:eq(0) .bod-item:eq(0) .bod-full-wrap.mbl").css("display","block").addClass("active");
  */

  /*---   For BOD module click starts   ---*/
  if ($j(window).width() > 767) {
    $j('.module-bod .bod-item .bod-item-inner').on("click", function() {
      bodDetails = $j(this).next().html();
      //$j('.bod-item-inner').not(this).removeClass("active");
      
      $j(this).parent().nextAll('.bod-full-wrap.dsktp').find('.inner').html(bodDetails);
      
      if ($j(this).hasClass("active")) 
      {
        $j(this).removeClass("active"); 
        $j(this).parents('.module-bod-wrapper').find('.bod-full-wrap.dsktp').removeClass("active").slideUp(600);
        $j(this).parents('.module-bod-wrapper').find('.bod-item').removeClass("fadded");
      }
      else{
        $j(this).parents('.module-bod-wrapper').find('.bod-full-wrap.dsktp').removeClass("active").hide();        
        
        $j(this).parents('.module-bod-wrapper').find('.bod-item').addClass("fadded");
        $j(this).parent().removeClass("fadded");
        
        $j(this).parents('.module-bod-wrapper').find('.bod-item-inner').removeClass("active");
        $j(this).addClass("active");      
        $j(this).parent().siblings('.bod-full-wrap.dsktp').slideDown(600);
        
        if($j(this).parent().siblings('.bod-full-wrap.dsktp').find(".bod-right-col a").length){
          $j(this).parent().siblings('.bod-full-wrap.dsktp').find(".bod-right-col a").focus();
        } else if($j(this).parent().siblings('.bod-full-wrap.dsktp').find(".bod-close").length){
          $j(this).parent().siblings('.bod-full-wrap.dsktp').find(".bod-close").focus();
        }
        
      }
    });
  }
  else{
    $j('.module-bod .bod-item .bod-item-inner').on("click", function() {    
      // $j('.bod-item-inner').not(this).removeClass("active");
      
      if ($j(this).hasClass("active")) 
      {
        $j(this).removeClass("active");      
        $j(this).next().removeClass("active").slideUp();
        $j(this).parents('.module-bod-wrapper').find('.bod-item-inner').parent().removeClass("fadded");
      }
      else{
        //$j('.bod-item-inner').not(this).next('.bod-full-wrap.mbl').removeClass("active").slideUp();
        $j(this).parents('.module-bod-wrapper').find('.bod-full-wrap.mbl').removeClass("active").slideUp();
        
        $j(this).parents('.module-bod-wrapper').find('.bod-item').addClass("fadded");
        $j(this).parent().removeClass("fadded");
        $j(this).parents('.module-bod-wrapper').find('.bod-item-inner').removeClass("active");
        $j(this).addClass("active");      
        $j(this).next().addClass("active").slideDown();
      }
    });
  }
  /*---   For BOD Module click ends   ---*/
  
  $j('.leadership-team-landing .module-bod-wrapper .bod-close').on("click", function() {
    $j(this).parents('.module-bod-wrapper').find('.bod-item').removeClass("fadded");
    $j(this).parents('.module-bod-wrapper').find('.bod-item-inner.active').removeClass('active');
    $j(this).parent().slideUp().removeClass('active');  
  });
  
  $j('.module-bod .module-bod-wrapper .bod-close').on("click", function() {
    $j(this).parents(".bod-full-wrap").siblings(".bod-item").not(".fadded").find(".bod-item-inner").focus();
    $j(this).parents('.module-bod-wrapper').find('.bod-item').removeClass("fadded");
    $j(this).parents('.module-bod-wrapper').find('.bod-item-inner.active').removeClass('active');
    $j(this).parent().slideUp().removeClass('active');  
    
  });
  
  $j('.module-bod .module-bod-wrapper .bod-mb-close').on("click", function() {
    $j(this).parents('.module-bod-wrapper').find('.bod-item').removeClass("fadded");
    $j(this).parents('.module-bod-wrapper').find('.bod-item-inner.active').removeClass('active');
    $j(this).parents('.bod-details.mbl').slideUp().removeClass('active');
  });
  
  /*--- For Leadership team page ends ---*/
if($j(".video-contentpage-inner").hasClass("inv_FullScreen_Other")) {
  $j("#auto-top-link").addClass("hide");
}
else{
  $j("#auto-top-link").removeClass("hide");
}  
  /*---- BOD Module ends ----*/
});
$j(".slider-nav-thumbnails .slide-thumb").on("click",function(){
	$j(".banner-bg").removeClass("zoom-animation");
});
/* Replace icon from Ext URL to ZIP */
function ulrtozip(){
$j(".download-doc .ext-lnk" ).each(function() {
  var extname = jQuery(".download-doc .ext-lnk").attr("href");
var extension = extname.substr(extname.lastIndexOf(".") + 1);

if(extension == "zip"){
   
   $j(this).find("span").hide();
   $j(this).addClass("doc-dwnld-link");
    $j(this).html($j(this).html().replace(/URL/g,"ZIP"));   
}
});
}

/* Video Gallery*/
$j(document).ready(function(){
$j(".video-gallery-module-wrapper .tabs-container ul li:first-child").addClass("current");
$j(".tabs-container ul li").each(function(e){
var innerPageName = window.location.href.split('/').slice(-2)[0];
var pageName = document.location.href.match(/[^\/]+$/)[0];
var thisDetails = $j(this).attr('data-tab');
if(thisDetails == pageName || thisDetails == innerPageName){
$j(".video-gallery-module-wrapper .tabs-container ul li").removeClass("current");
$j(this).addClass("current");
}
});
if($j(".tags").children().length == 0){
$j(".our-stories-container2,.image-category-filter").addClass("hide");
}

 ulrtozip();
});

/* share price ticker */
$j(window).on("load",function(){
	setEqualHeight_CommonClass('.share-price-3-col .ticker-wrapper');
});

$j(window).on("orientationchange load resize", function () {
  setEqualHeight_CommonClass('.calendar-event .calendar-event-details h3');
   setEqualHeight_CommonClass('.video-gallery-container .video-item-content');
});
/*!---- main-2-----*/
var swiper = [];
var swiperSettings = [];

$j(document).ready(function(){
  
  $j(".story-detail .inv_playerContainer").each(function() {
    var vidId = $j(this).attr('id');
    $j("#"+vidId).InvPlayer();
  });
  
  $j(".sitesearchpagination ul li.pagerlink:last").addClass("last");
  
  /*----    PR Year tabs starts    ----*/
  
  $j(".pr-year-tabs > a").text($j(".pr-year-tabs ul li.current a").text());
  
  $j('.pr-year-tabs > a').click(function(){
    if($j(this).hasClass('active')){
      $j(this).removeClass('active');
      $j(this).next('ul').removeClass('active');
    }else{
      $j(this).addClass('active');
      $j(this).next('ul').addClass('active');
    }
  });
  
  /*----    PR Year tabs ends    ----*/
  
  /*----    Copy text to clipboard for press releases starts    ----*/
  
  $j(".pr-main-content .pr-share.ir p a").on("click", function(e){
    
    if( !($j(this).hasClass('current')) ){
      
      var ele = $j(this).next();
      var eleHref = $j(this).attr("data-shareUrl");
      var aurl = window.location.origin;
      
      if(eleHref.indexOf("http") != -1){
        $j(this).next().val(eleHref);
      }
      else{
        $j(this).next().val(aurl+eleHref);
      }
      
      /* Select the text field */
      ele.select();
      ele.prop( "disabled", true );
      ele.prop( "disabled", false );
      
      /* Copy the text inside the text field */
      document.execCommand("copy");
      
      $j(".pr-main-content .pr-share p a").removeClass('current');
      $j(".pr-main-content .pr-share p.copy-txt-status").removeClass('on');
      $j(this).addClass('current');
      $j(this).parent().next().addClass('on');
      
    }
    
    setTimeout(function() {
      $j(".pr-main-content .pr-share p.copy-txt-status.on").removeClass('on');
      $j(".pr-main-content .pr-share p a").removeClass('current');
    }, 5000 );
    
    e.preventDefault();
    return false;
    
  });
  
  $j(".pr-main-content .pr-share:not(.ir) p a").on("click", function(e){
    
    if( !($j(this).hasClass('current')) ){
      
      var ele = $j(this).next();
      var eleHref = $j(this).attr("data-shareUrl");
      $j(this).next().val(eleHref);
      
      /* Select the text field */
      ele.select();
      ele.prop( "disabled", true );
      ele.prop( "disabled", false );
      
      /* Copy the text inside the text field */
      document.execCommand("copy");
      
      $j(".pr-main-content .pr-share p a").removeClass('current');
      $j(".pr-main-content .pr-share p.copy-txt-status").removeClass('on');
      $j(this).addClass('current');
      $j(this).parent().next().addClass('on');
      
    }
    
    setTimeout(function() {
      $j(".pr-main-content .pr-share p.copy-txt-status.on").removeClass('on');
      $j(".pr-main-content .pr-share p a").removeClass('current');
    }, 5000 );
    
    e.preventDefault();
    return false;
    
  });
  
  /*----   Copy text to clipboard for press releases ends    ----*/
  
  /*----    Accordian Module starts    ----*/
  
  /*$j(".module-accordian").each(function(){
    $j(this).find(".accordian-item:eq(0)").addClass("active");
    $j(this).find('.accordian-item:eq(0) .accordian-title').addClass("active");
    $j(this).find('.accordian-item:eq(0) .accordian-content').addClass("active");
    $j(this).find('.accordian-item:eq(0) .accordian-content').css("display","block");
  });*/
  
  $j('.module-accordian .accordian-title').on("click", function() {
    
    if ($j(this).hasClass("active")) 
    {
      $j(this).parent().removeClass("active");        
      $j(this).removeClass("active");
      $j(this).next().removeClass("active").slideUp();
    }
    else{
      $j('.accordian-item').removeClass("active");
      $j(".module-accordian .accordian-title").removeClass("active");
      $j('.module-accordian .accordian-content').removeClass("active").slideUp();
      $j(this).addClass("active");      
      $j(this).parent().addClass("active");      
      $j(this).next().addClass("active").slideDown();
    }
  });
  
  /*--  Scrollable table starts  --*/
  
  $j('.module-section table:not(".inv-responsive, .rad-responsive, .rad-bar-chart")').each(function () {
    if ($j(this).parents('div.scroll-table-container').length < 1) {
      $j(this).wrap('<div class="scroll-table-container"></div>');
    }
  });
  
  /*--  Scrollable table ends  --*/
  
  $j(".module-accordian").each(function(){
    if( $j(this).find(".accordian-content .accordian-inner .report-library-item").length > 0 ){
      $j(this).addClass("with-docs");
    }
  });
  
  
  /*----    Accordian Module ends    ----*/
  
  /*--  Media link Title capitalisation starts  --*/
  $j(".accordian-content a[title], .bod-right-col a.cta-link[title]").each(function() {
    var tmpTxt = $j(this).attr("title").split(",");
    if (tmpTxt.length > 1) {
      tmpTxt[0] = tmpTxt[0].toUpperCase();
    }
    $j(this).attr("title", tmpTxt.join());
  });
  
  /*--  Media link Title capitalisation ends  --*/
  
  /*----    Signpost carousel starts    ----*/
  
  $j(".swiper-scrollbar").each(function(index){
    $j(this).addClass('tt'+index);
  });
  
  $j(".swiper-container").each(function(index) {
    
    var $this = $j(this);
    
    $j(this).addClass('s' + index);
    
    swiper[index] = new Swiper($this, {
      on: {
        init: function () {
          
          setTimeout(function(){
            $j(".swiper-container-initialized").each(function(index) {
              
              var $k = $j(this);
              
              if( $k.find('.swiper-button-prev.swiper-button-disabled').length > 0 && $k.find('.swiper-button-next.swiper-button-disabled').length > 0 ){                
                $k.find('.swiper-button-prev.swiper-button-disabled').hide();
                $k.find('.swiper-button-next.swiper-button-disabled').hide();
              }
              else{
                $k.find('.swiper-button-prev').show();
                $k.find('.swiper-button-next').show();
              }
              
            });
          },1000);
          
        }
      },
      slidesPerView: 'auto',
      observer: true,
      scrollbar: {
        el: '.tt' + index,
        draggable: true,
        dragSize: 783
      },
      spaceBetween: 12,
      breakpoints: {
        1170: {
          scrollbar: {
            dragSize: 250
          }
        },
        767: {
          //slidesPerView: 2,
          scrollbar: {
            dragSize: 100
          }
        },
        640: {
          //slidesPerView: 2,
          scrollbar: {
            dragSize: 80
          }
        },
        480: {
          slidesPerView: 1,
          scrollbar: {
            dragSize: 60
          }
        },
        360: {
          scrollbar: {
            slidesPerView: 1,
            dragSize: 50
          }
        }
      },
      navigation: {
        nextEl: $this.find(".swiper-button-next")[0],
        prevEl: $this.find(".swiper-button-prev")[0]
      }
    });
    
  }); //  End of each
  
  /*--  Hide disabled button starts 
$j(".swiper-container-initialized").each(function(index) {

if( $j(this).find('.swiper-button-prev.swiper-button-disabled').length > 0 && $j(this).find('.swiper-button-next.swiper-button-disabled').length > 0 ){
$j(this).find('.swiper-button-prev.swiper-button-disabled').hide();
$j(this).find('.swiper-button-next.swiper-button-disabled').hide();
}
else{
$j(this).find('.swiper-button-prev').show();
$j(this).find('.swiper-button-next').show();
}

}); --*/
  
  /*--  Hide disabled button ends  --*/
  
  /*----    Signpost carousel ends    ----*/
  
  /*----    Horizontal module tabs starts    ----*/
  /*** Module Horizontal Tab starts ***/
  var IsHTabModule = $j('.module-vertical-horizontal-tabs').length;
  if(IsHTabModule > 0){
    $j("ul.httab-menuTab li.first").addClass("current");
    $j(".htab-content-item.first").addClass("selected").show();
    
    $j('.htab-menu').each(function(){
		$j(this).find('.module-tab-selected').html($j(this).find('ul.httab-menuTab li.first').text());
    });
    
    $j('.htab-menu .module-tab-selected').on("click", function(){
      
      if($j(this).next('ul.httab-menuTab').hasClass('active')){
        
        $j(this).removeClass('active');
        $j(this).next('ul.httab-menuTab').removeClass('active');
      }else{
        
        $j(this).addClass('active');
        $j(this).next('ul.httab-menuTab').addClass('active');
      }
    });
    
    $j("ul.httab-menuTab > li").each(function( index ) {
      $j(this).click(function(e) {
if( !$j(this).hasClass("current") ){
        e.preventDefault();
        var hmodID=$j(this).parents('.module-section').attr('id');
        var hvtc = $j(this).parents('.module-vTabs-content').attr('id');
        
        $j('#'+hmodID+ ' #' + hvtc +' .htab-menu li.htabmenu').removeClass("current");
        $j(this).addClass("current");
        
        $j('#'+hmodID+ ' #' + hvtc +' .module-tab-selected').removeClass('active');
        $j(this).parent().removeClass('active');
        
        $j('#'+hmodID+ ' #' + hvtc +' .module-tab-selected').html($j(this).text());
        
        var myTargetDiv2 = $j(this).attr("id");
        myTargetDiv2 = "#"+myTargetDiv2.replace("-htlink","")+"-htcntnt";
        
        
        $j('#' + hmodID + ' #' + hvtc+ ' .htab-content-wrapper .htab-content-item').hide();
        $j('#' + hmodID + ' #' + hvtc+ ' .htab-content-wrapper .htab-content-item').removeClass("selected");
        //alert(myTargetDiv2);
        $j('#'+hmodID).find(myTargetDiv2).addClass("selected");
        $j('#'+hmodID).find(myTargetDiv2).fadeIn();
        

$j('#'+ hmodID +' .module-vertical-tabs-content').slick('setPosition');
        }
      });
    });
	         
  }
  /*----    Horizontal module tabs ends    ----*/
  
});  //  End of document ready

$j(window).resize(function(){

  //if(typeof mySwiper!='undefined' && mySwiper!=''){
  $j(".swiper-container").each(function(index) {
    var $this = $j(this);
    if($j(window).width() < 767){
      swiper[index].destroy();
      swiper[index] = new Swiper($this, {
        on: {
          init: function () {
            
            $j(".swiper-container-initialized").each(function(index) {
              
              var $t = $j(this);
              
              if( $t.find('.swiper-button-prev.swiper-button-disabled').length > 0 && $t.find('.swiper-button-next.swiper-button-disabled').length > 0 ){
                $t.find('.swiper-button-prev.swiper-button-disabled').hide();
                $t.find('.swiper-button-next.swiper-button-disabled').hide();
              }
              else{
                $t.find('.swiper-button-prev').show();
                $t.find('.swiper-button-next').show();
              }
              
            });
            
          }
        },
        slidesPerView: 'auto',
        observer: true,
        scrollbar: {
          el: '.tt' + index,
          draggable: true,
          dragSize: 100
        },
        spaceBetween: 12,
        breakpoints: {
          640: {
            scrollbar: {
              dragSize: 80
            }
          },
          480: {
            slidesPerView: 1,
            scrollbar: {
              dragSize: 60
            }
          },
          360: {
            scrollbar: {
              slidesPerView: 1,
              dragSize: 50
            }
          }
        },
        navigation: {
          nextEl: $this.find(".swiper-button-next")[0],
          prevEl: $this.find(".swiper-button-prev")[0]
        }
      });
      
    }
    //  } 
  });
  
  $j(".swiper-container-initialized").each(function(index) {
    
    var $ss = $j(this);
    
    if( $ss.find('.swiper-button-prev.swiper-button-disabled').length > 0 && $ss.find('.swiper-button-next.swiper-button-disabled').length > 0 ){
      $ss.find('.swiper-button-prev.swiper-button-disabled').hide();
      $ss.find('.swiper-button-next.swiper-button-disabled').hide();
    }
    else{
      $ss.find('.swiper-button-prev').show();
      $ss.find('.swiper-button-next').show();
    }
    
  });
  
});  //  End of resize fn

$j(window).on("load",function(){
  $j(".htab-content-item").each(function(){
    var anchorLen =  $j(this).find("a").length;
    $j(this).find("a:eq("+(anchorLen - 1)+")").addClass("focus-last");
    $j(this).find("a:eq(0)").addClass("focus-first");
  }); 
});
/*!---- frame-manager-----*/
/* iFrame Resizer (iframeSizer.min.js ) - v2.6.2 - 2014-10-11
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2014 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 *	Requires: iframeResizer_child.js on I-framed page.
 */
!function(){function a(a,b,c){"addEventListener" in window?a.addEventListener(b,c,!1):"attachEvent" in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!w;a+=1){w=window[b[a]+"RequestAnimationFrame"]}w||c(" RequestAnimationFrame not supported")}function c(a){y.log&&"object"==typeof console&&console.log(s+"[Host page"+u+"]"+a)}function d(a){function b(){function a(){h(z),f(),y.resizedCallback(z)}i(a,z,"resetPage")}function d(a){var b=a.id;c(" Removing iFrame: "+b),a.parentNode.removeChild(a),y.closedCallback(b),c(" --")}function e(){var a=x.substr(t).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function j(a){var b=Number(y["max"+a]),d=Number(y["min"+a]),e=a.toLowerCase(),f=Number(z[e]);if(d>b){throw new Error("Value for min"+a+" can not be greater than max"+a)}c(" Checking "+e+" is in range "+d+"-"+b),d>f&&(f=d,c(" Set "+e+" to min value")),f>b&&(f=b,c(" Set "+e+" to max value")),z[e]=""+f}function k(){var b=a.origin,d=z.iframe.src.split("/").slice(0,3).join("/");if(y.checkOrigin&&(c(" Checking connection is from: "+d),""+b!="null"&&b!==d)){throw new Error("Unexpected message received from: "+b+" for "+z.iframe.id+". Message was: "+a.data+". This error can be disabled by adding the checkOrigin: false option.")}return !0}function l(){return s===(""+x).substr(0,t)}function m(){var a=z.type in {"true":1,"false":1};return a&&c(" Ignoring init message from meta parent page"),a}function n(){var a=x.substr(x.indexOf(":")+r+6);c(" MessageCallback passed: {iframe: "+z.iframe.id+", message: "+a+"}"),y.messageCallback({iframe:z.iframe,message:a}),c(" --")}function o(){if(null===z.iframe){throw new Error("iFrame ("+z.id+") does not exist on "+u)}return !0}function q(){c(" Reposition requested from iFrame"),v={x:z.width,y:z.height},f()}function w(){switch(z.type){case"close":d(z.iframe),y.resizedCallback(z);break;case"message":n();break;case"scrollTo":q();break;case"reset":g(z);break;case"init":b(),y.initCallback(z.iframe);break;default:b()}}var x=a.data,z={};l()&&(c(" Received: "+x),z=e(),j("Height"),j("Width"),!m()&&o()&&k()&&(w(),p=!1))}function e(){null===v&&(v={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},c(" Get position: "+v.x+","+v.y))}function f(){null!==v&&(window.scrollTo(v.x,v.y),c(" Set position: "+v.x+","+v.y),v=null)}function g(a){function b(){h(a),j("reset","reset",a.iframe)}c(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),e(),i(b,a,"init")}function h(a){function b(b){a.iframe.style[b]=a[b]+"px",c(" IFrame ("+a.iframe.id+") "+b+" set to "+a[b]+"px")}y.sizeHeight&&b("height"),y.sizeWidth&&b("width")}function i(a,b,d){d!==b.type&&w?(c(" Requesting animation frame"),w(a)):a()}function j(a,b,d){c("["+a+"] Sending msg to iframe ("+b+")"),d.contentWindow.postMessage(s+b,"*")}function k(){function b(){function a(a){1/0!==y[a]&&0!==y[a]&&(k.style[a]=y[a]+"px",c(" Set "+a+" = "+y[a]+"px"))}a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function d(a){return""===a&&(k.id=a="iFrameResizer"+o++,c(" Added missing iframe ID: "+a+" ("+k.src+")")),a}function e(){c(" IFrame scrolling "+(y.scrolling?"enabled":"disabled")+" for "+l),k.style.overflow=!1===y.scrolling?"hidden":"auto",k.scrolling=!1===y.scrolling?"no":"yes"}function f(){("number"==typeof y.bodyMargin||"0"===y.bodyMargin)&&(y.bodyMarginV1=y.bodyMargin,y.bodyMargin=""+y.bodyMargin+"px")}function h(){return l+":"+y.bodyMarginV1+":"+y.sizeWidth+":"+y.log+":"+y.interval+":"+y.enablePublicMethods+":"+y.autoResize+":"+y.bodyMargin+":"+y.heightCalculationMethod+":"+y.bodyBackground+":"+y.bodyPadding+":"+y.tolerance}function i(b){a(k,"load",function(){var a=p;j("iFrame.onload",b,k),!a&&y.heightCalculationMethod in x&&g({iframe:k,height:0,width:0,type:"init"})}),j("init",b,k)}var k=this,l=d(k.id);e(),b(),f(),i(h())}function l(a){if("object"!=typeof a){throw new TypeError("Options is not an object.")}}function m(){function a(a){if("IFRAME"!==a.tagName.toUpperCase()){throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.")}k.call(a)}function b(a){a=a||{},l(a);for(var b in z){z.hasOwnProperty(b)&&(y[b]=a.hasOwnProperty(b)?a[b]:z[b])}}return function(c,d){b(c),Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a)}}function n(a){a.fn.iFrameResize=function(b){return b=b||{},l(b),y=a.extend({},z,b),this.filter("iframe").each(k).end()}}var o=0,p=!0,q="message",r=q.length,s="[iFrameSizer]",t=s.length,u="",v=null,w=window.requestAnimationFrame,x={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},y={},z={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){}};b(),a(window,"message",d),"jQuery" in window&&n($j),"function"==typeof define&&define.amd?define(function(){return m()}):window.iFrameResize=m()}();if(!Array.prototype.forEach){Array.prototype.forEach=function(fun){if(this===void 0||this===null||typeof fun!=="function"){throw new TypeError()}var t=Object(this),len=t.length>>>0,thisArg=arguments.length>=2?arguments[1]:void 0;for(var i=0;i<len;i++){if(i in t){fun.call(thisArg,t[i],i,t)}}}}$j(document).ready(function(){$j("iframe").attr("allowtransparency","true").attr("frameborder","0");$j("iframe.responsive").iFrameResize({log:false,enablePublicMethods:true,messageCallback:function(msg){var newVar1=$j("iframe.responsive");var snaptop=parseInt(msg.message);scrollVal=snaptop+$j(newVar1).offset().top-$j("header").height()-50;$j("html, body").animate({scrollTop:scrollVal},1500,"easeOutCirc")}})});$j(window).resize(function(){if($j("iframe.responsive").length>0){$j("iframe.responsive").each(function(){$j(this).css("width",$j(this).parent("div").width()+"px")})}});var __iframe;$j(document).ready(function(){sendDimensions();if(__iframe!==undefined){if(__iframe.addEventListener){__iframe.addEventListener("load",sendDimensions,false)}else{__iframe.attachEvent("onload",sendDimensions)}}});$j(window).scroll(function(){sendDimensions()});$j(window).resize(function(){sendDimensions()});function sendDimensions(){fundamentalIndex=-1;$j("iframe").each(function(index){tmpSrc=$j(this).attr("src");if(tmpSrc.indexOf("fundamental=true")>0){fundamentalIndex=index}});if(fundamentalIndex>=0){__iframe=document.querySelectorAll("iframe.responsive")[fundamentalIndex];var iFrameWindow=__iframe.contentWindow;var iframeSrcHost=getToolHostName(__iframe.src);iFrameWindow.postMessage("[Fundamentals_PageViewport]:"+$j(window).height()+":"+$j(window).scrollTop()+":"+$j(__iframe).offset().top+":"+$j(__iframe).height(),iframeSrcHost)}}function getToolHostName(url){var urlParser=document.createElement("a");urlParser.href=url;return urlParser.protocol+"//"+urlParser.host};



$j(document).ready(function()
{
    $j('iframe.responsive').iFrameResize({log:false});
});
/*!---- back-to-top-----*/
/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($j){var h=$j.scrollTo=function(a,b,c){$j(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($j.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $j(window)._scrollable()};$j.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$j.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$j.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$j.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$j(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$j(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$j(targ)).offset()}$j.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$j(a).is('html,body'))return a[scroll]-$j(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

$j.fn.topLink = function (settings) {
    settings = jQuery.extend({
        min: 1,
        fadeSpeed: 200,
        ieOffset: 50
    }, settings);
    return this.each(function () {
        //listen for scroll
        var el = $j(this);
        el.css('display', 'none'); //in case the user forgot
        $j(window).scroll(function () {
            if (!jQuery.support.hrefNormalized) {
                el.css({
                    //'position': 'absolute',
                    //'top': $j(window).scrollTop() + $j(window).height() - settings.ieOffset
                });
            }
            if ($j(window).scrollTop() >= settings.min) {
                el.fadeIn(settings.fadeSpeed);
            } else {
                el.fadeOut(settings.fadeSpeed);
            }
        });
    });
};

$j(document).ready(function () {
    $j("footer").append('<a href="#MainForm" id="auto-top-link"><span class="icon-arrow-down"></span></a>');
    $j('#auto-top-link').topLink({
        min: 400,
        fadeSpeed: 500
    });

    //smoothscroll
    $j('#auto-top-link').click(function (e) {
        e.preventDefault();
        $j('html,body').animate({scrollTop:0},400);
    });
});
/*!---- swiper-slider-----*/
/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Swiper = factory());
}(this, function () { 'use strict';

  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */
  var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  } : document; // eslint-disable-line

  var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
  } : window; // eslint-disable-line

  /**
   * Dom7 2.1.3
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2019, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: February 11, 2019
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $j(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) { arr.push(els[i]); }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $j.fn = Dom7.prototype;
  $j.Class = Dom7;
  $j.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) { return false; }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) { return this[0].getAttribute(attrs); }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute(("data-" + key));
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) { return; }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($j(target).is(targetSelector)) { listener.apply(target, eventData); }
      else {
        var parents = $j(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($j(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = (void 0);
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = (void 0);
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) { return; }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) { return win.getComputedStyle(this[0], null); }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) { return this; }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') { return false; }
    if (typeof selector === 'string') {
      if (el.matches) { return el.matches(selector); }
      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

      compareWith = $j(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    } else if (selector === doc) { return el === doc; }
    else if (selector === win) { return el === win; }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) { i += 1; }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') { return this; }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) { return new Dom7([]); }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $j(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($j(next).is(selector)) { nextEls.push(next); }
      } else { nextEls.push(next); }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $j(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($j(prev).is(selector)) { prevEls.push(prev); }
      } else { prevEls.push(prev); }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($j(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $j(unique(parents));
  }
  function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($j(parent).is(selector)) { parents.push(parent); }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $j(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
        } else if (childNodes[j].nodeType === 1 && $j(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
    }
    return this;
  }
  function add() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $j(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $j.fn[methodName] = Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if ( delay === void 0 ) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if ( axis === void 0 ) axis = 'x';

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[4]); }
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[5]); }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [], len$1 = arguments.length;
      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    var testDiv = doc.createElement('div');
    return {
      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
        return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
      }()),

      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0)),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,

      transition: (function checkTransition() {
        var style = testDiv.style;
        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
      }()),
      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
        var style = testDiv.style;
        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
      }()),

      flexbox: (function checkFlexbox() {
        var style = testDiv.style;
        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) { return true; }
        }
        return false;
      }()),

      observer: (function checkObserver() {
        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
      }()),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),

      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());

  var SwiperClass = function SwiperClass(params) {
    if ( params === void 0 ) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };

  SwiperClass.prototype.on = function on (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    function onceHandler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      handler.apply(self, args);
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off (events, handler) {
    var self = this;
    if (!self.eventsListeners) { return self; }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;
    if (!self.eventsListeners) { return self; }
    var events;
    var data;
    var context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules (modulesParams) {
      if ( modulesParams === void 0 ) modulesParams = {};

    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) { return; }
    Class.use(components);
  };

  SwiperClass.installModule = function installModule (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };

  SwiperClass.use = function use (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) { return Class.installModule(m); });
      return Class;
    }
    return Class.installModule.apply(Class, [ module ].concat( params ));
  };

  Object.defineProperties( SwiperClass, staticAccessors );

  function updateSize () {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }

    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides () {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
    else { slides.css({ marginRight: '', marginBottom: '' }); }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = (void 0);
        var column = (void 0);
        var row = (void 0);
        if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide
          .css(
            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
          )
          .attr('data-swiper-column', column)
          .attr('data-swiper-row', row);
      }
      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width'));
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            var boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height'));
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing$1 && boxSizing$1 === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);


      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
    }
    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) { snapGrid = [0]; }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
        else { slides.css({ marginRight: (spaceBetween + "px") }); }
      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight (speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) { break; }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
  }

  function updateSlidesOffset () {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) { return; }
    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

    var offsetCenter = -translate;
    if (rtl) { offsetCenter = translate; }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size)
                  || (slideAfter > 0 && slideAfter <= swiper.size)
                  || (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $j(swiper.visibleSlides);
  }

  function updateProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses () {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex (newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }

  function updateClickedSlide (e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $j(e.target).closest(("." + (params.slideClass)))[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) { slideFound = true; }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($j(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $j(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate (axis) {
    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) { currentTranslate = -currentTranslate; }

    return currentTranslate || 0;
  }

  function setTranslate (translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (!params.virtualTranslate) {
      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate () {
    return (-this.snapGrid[0]);
  }

  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
  };

  function setTransition (duration, byController) {
    var swiper = this;

    swiper.$wrapperEl.transition(duration);

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1 (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) { slideIndex = 0; }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) { return false; }
      }
    }

    var direction;
    if (slideIndex > activeIndex) { direction = 'next'; }
    else if (slideIndex < activeIndex) { direction = 'prev'; }
    else { direction = 'reset'; }


    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }

    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) { return -Math.floor(Math.abs(val)); }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) { return; }
      realIndex = parseInt($j(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

    var slides = $wrapperEl.children(("." + (params.slideClass)));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $j(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(("." + (params.slideClass)));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $j(el);
      if (index < swiper.loopedSlides) { appendSlides.push(el); }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
      slide.attr('data-swiper-slide-index', index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($j(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($j(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix () {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();


    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy () {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor (moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor () {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide (slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.append(slides[i]); }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide (slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide (index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide (slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides () {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap,
    };

    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


    // Windows
    if (windows) {
      device.os = 'windows';
      device.osVersion = windows[2];
      device.windows = true;
    }
    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }

    // Desktop
    device.desktop = !(device.os || device.android || device.webView);

    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

    // Minimal UI
    if (device.os && device.os === 'ios') {
      var osVersionArr = device.osVersion.split('.');
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi = !device.webView
        && (ipod || iphone)
        && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
        && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  }());

  function onTouchStart (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
    if (data.isTouched && data.isMoved) { return; }
    if (params.noSwiping && $j(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$j(e).closest(params.swipeHandler)[0]) { return; }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection
      && ((startX <= edgeSwipeThreshold)
      || (startX >= win.screen.width - edgeSwipeThreshold))
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) { data.allowThresholdMove = false; }
    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($j(e.target).is(data.formElements)) { preventDefault = false; }
      if (
        doc.activeElement
        && $j(doc.activeElement).is(data.formElements)
        && doc.activeElement !== e.target
      ) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') { return; }
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $j(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) { return; }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) { diff = -diff; }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }


    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger) { return; }

    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd (event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) { return; }
          swiper.emit('click', e);
        }, 300);
      }
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        swiper.emit('doubleTap', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) { swiper.allowClick = true; }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) { newPosition = -newPosition; }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
            swiper.emit('momentumBounce');

            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize () {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) { return; }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    if (params.freeMode) {
      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick (e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) { e.preventDefault(); }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

    // Set breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') { return; }
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      Utils.extend(swiper.params, breakpointParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint (breakpoints) {
    var swiper = this;
    // Get breakpoint for window width
    if (!breakpoints) { return undefined; }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (swiper.params.breakpointsInverse) {
        if (point <= win.innerWidth) {
          breakpoint = point;
        }
      } else if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

  function addClasses () {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push('initialized');
    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (!Support.flexbox) {
      suffixes.push('no-flexbox');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
    // WP8 Touch Events Fix
    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      suffixes.push(("wp8-" + (params.direction)));
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(' '));
  }

  function removeClasses () {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(' '));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) { callback(); }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages () {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) { swiper.update(); }
        swiper.emit('imagesReady');
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;

    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventInteractionOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsInverse: false,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',

    // Callbacks
    runCallbacksOnInit: true,
  };

  /* eslint no-param-reassign: "off" */

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/(function (SwiperClass) {
    function Swiper() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var el;
      var params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        (assign = args, el = assign[0], params = assign[1]);
      }
      if (!params) { params = {}; }

      params = Utils.extend({}, params);
      if (el && !params.el) { params.el = el; }

      SwiperClass.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object'
            && !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $j(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper);

      // Find Wrapper
      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $j(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          } else if (Support.prefixedPointerEvents) {
            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,

      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if ( SwiperClass ) Swiper.__proto__ = SwiperClass;
    Swiper.prototype = Object.create( SwiperClass && SwiperClass.prototype );
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };

    Swiper.prototype.update = function update () {
      var swiper = this;
      if (!swiper || swiper.destroyed) { return; }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };

    Swiper.prototype.changeDirection = function changeDirection (newDirection, needUpdate) {
      if ( needUpdate === void 0 ) needUpdate = true;

      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
        return swiper;
      }

      if (currentDirection === 'vertical') {
        swiper.$el
          .removeClass(((swiper.params.containerModifierClass) + "vertical wp8-vertical"))
          .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
        }
      }
      if (currentDirection === 'horizontal') {
        swiper.$el
          .removeClass(((swiper.params.containerModifierClass) + "horizontal wp8-horizontal"))
          .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
        }
      }

      swiper.params.direction = newDirection;

      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });

      swiper.emit('changeDirection');
      if (needUpdate) { swiper.update(); }

      return swiper;
    };

    Swiper.prototype.init = function init () {
      var swiper = this;
      if (swiper.initialized) { return; }

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    };

    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
      if ( deleteInstance === void 0 ) deleteInstance = true;
      if ( cleanStyles === void 0 ) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index')
            .removeAttr('data-swiper-column')
            .removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };

    Swiper.extendDefaults = function extendDefaults (newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties( Swiper, staticAccessors );

    return Swiper;
  }(SwiperClass));

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener('resize', swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if ( options === void 0 ) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });

      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) { return; }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) { offsetProp = 'right'; }
      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, (offset + "px"));
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) { appendIndexes.push(i$1); }
            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $j(params.renderSlide.call(swiper, slide, index))
        : $j(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.push(slides[i]); }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.unshift(slides[i]); }
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) { return; }
      var activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) { activeIndex -= 1; }
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) { activeIndex -= 1; }
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };

  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth
            && point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) { return undefined; }
      }
      if (swiper.isHorizontal()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
        if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (kc === 40) { swiper.slideNext(); }
        if (kc === 38) { swiper.slidePrev(); }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) { return; }
      $j(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) { return; }
      $j(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported
      && doc.implementation
      && doc.implementation.hasFeature
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && doc.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    }()),
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
          else { return true; }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
        else { return true; }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) { return true; }

      if (params.invert) { delta = -delta; }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) { return true; }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        }
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
      } else {
        // Freemode or scrollContainer:
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + (delta * params.sensitivity);
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        }
        // Emit event
        swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
      }

      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $j(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (!swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $j(swiper.params.mousewheel.eventsTarged);
      }
      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) { return; }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) { return; }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) { return; }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $j(params.nextEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.nextEl === 'string'
          && $nextEl.length > 1
          && swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $j(params.prevEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.prevEl === 'string'
          && $prevEl.length > 1
          && swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick
          && !$j(e.target).is($prevEl)
          && !$j(e.target).is($nextEl)
        ) {
          var isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit('navigationShow', swiper);
          } else {
            swiper.emit('navigationHide', swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) { current -= total; }
        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $j(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(((params.bulletActiveClass) + "-main"));
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
            }
            $firstDisplayedBullet
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev"))
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev-prev"));
            $lastDisplayedBullet
              .next()
              .addClass(((params.bulletActiveClass) + "-next"))
              .next()
              .addClass(((params.bulletActiveClass) + "-next-next"));
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
          + ' / '
          + "<span class=\"" + (params.totalClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) { return; }

      var $el = $j(params.el);
      if ($el.length === 0) { return; }

      if (
        swiper.params.uniqueNavElements
        && typeof params.el === 'string'
        && $el.length > 1
        && swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
          e.preventDefault();
          var index = $j(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) { index += swiper.loopedSlides; }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
      if (params.clickable) {
        $el.off('click', ("." + (params.bulletClass)));
      }
    },
  };

  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) { return number; },
        formatFractionTotal: function (number) { return number; },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el
          && swiper.params.pagination.hideOnClick
          && swiper.pagination.$el.length > 0
          && !$j(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            swiper.emit('paginationShow', swiper);
          } else {
            swiper.emit('paginationHide', swiper);
          }
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
        } else {
          $dragEl.transform(("translateX(" + newPos + "px)"));
        }
        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
        } else {
          $dragEl.transform(("translateY(" + newPos + "px)"));
        }
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;

      var pointerPosition;
      if (swiper.isHorizontal()) {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
      } else {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
      }
      var positionRatio;
      positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) { return; }
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) { return; }
      swiper.scrollbar.isTouched = false;
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $j(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
      if ($dragEl.length === 0) {
        $dragEl = $j(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $j(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if ((x).indexOf('%') >= 0) {
        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
      } else {
        x = (x * progress * rtlFactor) + "px";
      }
      if ((y).indexOf('%') >= 0) {
        y = (parseInt(y, 10) * progress) + "%";
      } else {
        y = (y * progress) + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
      } else {
        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $j(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if ( duration === void 0 ) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, parallaxEl) {
          var $parallaxEl = $j(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) { parallaxDuration = 0; }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) { return 1; }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $j(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
      }
      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (image.isTouched) { return; }
      if (Device.android) { e.preventDefault(); }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) { return; }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal()
          && (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } if (
          !swiper.isHorizontal()
          && (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();

      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
      }

      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
      }

      // Velocity
      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');

        zoom.scale = 1;
        zoom.currentScale = 1;

        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $j(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $j(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) { return; }
      zoom.enabled = true;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) { return; }

      swiper.zoom.enabled = false;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
  };

  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };

      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom,
      });

      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') { return; }
      if (swiper.slides.length === 0) { return; }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
        : swiper.slides.eq(index);

      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) { return; }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $j(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');

        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
          if (background) {
            $imageEl.css('background-image', ("url(\"" + background + "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(("." + (params.preloaderClass))).remove();
          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });

        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
            return true;
          }
        } else if (slides[index]) { return true; }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $j(slideEl).attr('data-swiper-slide-index');
        }
        return $j(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
          var index = isVirtual ? $j(slideEl).attr('data-swiper-slide-index') : $j(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
          }
        } else {
          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
        }
      }
    },
  };

  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) { return 0; }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) { return; }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) { return; }
      var $targetEl = $j(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) { return; }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $j(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $j(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) { return; }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) { return; }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
        if (typeof newIndex === 'undefined') { return; }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $j(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $j(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
      if (swiper.autoplay.running) { return false; }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) { return false; }
      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) { return; }
      if (swiper.autoplay.paused) { return; }
      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };

  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $j('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: (swiperWidth + "px") });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $j('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $j(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $j(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          var multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
        }
      }
      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };

  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $j(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $j(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
        $slideEl
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          // if (!$j(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) { translateX = 0; }
        if (Math.abs(translateY) < 0.001) { translateY = 0; }
        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $j(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $j(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }

        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        }));
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $j(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($j(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
        else { slideToIndex = prevIndex; }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }

      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;

      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
          else { newThumbsIndex = prevThumbsIndex; }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) { return; }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1
  ];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);

  return Swiper;

}));
/*!---- custom-scrollbar-----*/
/*
== malihu jquery custom scrollbar plugin == 
Version: 3.1.5 
Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller 
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
The code below is fairly long, fully commented and should be normally used in development. 
For production, use either the minified jquery.mCustomScrollbar.min.js script or 
the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin 
and dependencies (minified). 
*/

(function(factory){
  if(typeof define==="function" && define.amd){
    define(["jquery"],factory);
  }else if(typeof module!=="undefined" && module.exports){
    module.exports=factory;
  }else{
    factory($j,window,document);
  }
}(function($){
  (function(init){
    var _rjs=typeof define==="function" && define.amd, /* RequireJS */
        _njs=typeof module !== "undefined" && module.exports, /* NodeJS */
        _dlp=("https:"==document.location.protocol) ? "https:" : "http:", /* location protocol */
        _url="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
    if(!_rjs){
      if(_njs){
        require("jquery-mousewheel")($);
      }else{
        /* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS 
			(works when mCustomScrollbar fn is called on window load) */
        $.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src="+_dlp+"//"+_url+"%3E%3C/script%3E"));
      }
    }
    init();
  }(function(){
    
    /* 
	----------------------------------------
	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S) 
	----------------------------------------
	*/
    
    var pluginNS="mCustomScrollbar",
        pluginPfx="mCS",
        defaultSelector=".mCustomScrollbar",
        
        
        
        
        
        /* 
	----------------------------------------
	DEFAULT OPTIONS 
	----------------------------------------
	*/
        
        defaults={
          /*
			set element/content width/height programmatically 
			values: boolean, pixels, percentage 
				option						default
				-------------------------------------
				setWidth					false
				setHeight					false
			*/
          /*
			set the initial css top property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
          setTop:0,
          /*
			set the initial css left property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
          setLeft:0,
          /* 
			scrollbar axis (vertical and/or horizontal scrollbars) 
			values (string): "y", "x", "yx"
			*/
          axis:"y",
          /*
			position of scrollbar relative to content  
			values (string): "inside", "outside" ("outside" requires elements with position:relative)
			*/
          scrollbarPosition:"inside",
          /*
			scrolling inertia
			values: integer (milliseconds)
			*/
          scrollInertia:950,
          /* 
			auto-adjust scrollbar dragger length
			values: boolean
			*/
          autoDraggerLength:true,
          /*
			auto-hide scrollbar when idle 
			values: boolean
				option						default
				-------------------------------------
				autoHideScrollbar			false
			*/
          /*
			auto-expands scrollbar on mouse-over and dragging
			values: boolean
				option						default
				-------------------------------------
				autoExpandScrollbar			false
			*/
          /*
			always show scrollbar, even when there's nothing to scroll 
			values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
			*/
          alwaysShowScrollbar:0,
          /*
			scrolling always snaps to a multiple of this number in pixels
			values: integer, array ([y,x])
				option						default
				-------------------------------------
				snapAmount					null
			*/
          /*
			when snapping, snap with this number in pixels as an offset 
			values: integer
			*/
          snapOffset:0,
          /* 
			mouse-wheel scrolling
			*/
          mouseWheel:{
            /* 
				enable mouse-wheel scrolling
				values: boolean
				*/
          enable:true,
          /* 
				scrolling amount in pixels
				values: "auto", integer 
				*/
          scrollAmount:"auto",
          /* 
				mouse-wheel scrolling axis 
				the default scrolling direction when both vertical and horizontal scrollbars are present 
				values (string): "y", "x" 
				*/
          axis:"y",
          /* 
				prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached 
				values: boolean
					option						default
					-------------------------------------
					preventDefault				null
				*/
          /*
				the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.  
				values: "auto", integer 
				"auto" uses the default OS/browser value 
				*/
          deltaFactor:"auto",
          /*
				normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration) 
				values: boolean
					option						default
					-------------------------------------
					normalizeDelta				null
				*/
          /*
				invert mouse-wheel scrolling direction 
				values: boolean
					option						default
					-------------------------------------
					invert						null
				*/
          /*
				the tags that disable mouse-wheel when cursor is over them
				*/
          disableOver:["select","option","keygen","datalist","textarea"]
        },
          /* 
			scrollbar buttons
			*/
          scrollButtons:{ 
            /*
				enable scrollbar buttons
				values: boolean
					option						default
					-------------------------------------
					enable						null
				*/
          /*
				scrollbar buttons scrolling type 
				values (string): "stepless", "stepped"
				*/
          scrollType:"stepless",
          /*
				scrolling amount in pixels
				values: "auto", integer 
				*/
          scrollAmount:"auto"
          /*
				tabindex of the scrollbar buttons
				values: false, integer
					option						default
					-------------------------------------
					tabindex					null
				*/
        },
          /* 
			keyboard scrolling
			*/
          keyboard:{ 
            /*
				enable scrolling via keyboard
				values: boolean
				*/
          enable:true,
          /*
				keyboard scrolling type 
				values (string): "stepless", "stepped"
				*/
          scrollType:"stepless",
          /*
				scrolling amount in pixels
				values: "auto", integer 
				*/
          scrollAmount:"auto"
        },
          /*
			enable content touch-swipe scrolling 
			values: boolean, integer, string (number)
			integer values define the axis-specific minimum amount required for scrolling momentum
			*/
          contentTouchScroll:25,
          /*
			enable/disable document (default) touch-swipe scrolling 
			*/
          documentTouchScroll:true,
          /*
			advanced option parameters
			*/
          advanced:{
            /*
				auto-expand content horizontally (for "x" or "yx" axis) 
				values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
					option						default
					-------------------------------------
					autoExpandHorizontalScroll	null
				*/
          /*
				auto-scroll to elements with focus
				*/
          autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
          /*
				auto-update scrollbars on content, element or viewport resize 
				should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc. 
				values: boolean
				*/
          updateOnContentResize:true,
          /*
				auto-update scrollbars each time each image inside the element is fully loaded 
				values: "auto", boolean
				*/
          updateOnImageLoad:"auto",
          /*
				auto-update scrollbars based on the amount and size changes of specific selectors 
				useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size 
				values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed) 
				a value of true (boolean) will auto-update scrollbars each time any element is changed
					option						default
					-------------------------------------
					updateOnSelectorChange		null
				*/
          /*
				extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					extraDraggableSelectors		null
				*/
          /*
				extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					releaseDraggableSelectors	null
				*/
          /*
				auto-update timeout 
				values: integer (milliseconds)
				*/
          autoUpdateTimeout:60
        },
          /* 
			scrollbar theme 
			values: string (see CSS/plugin URI for a list of ready-to-use themes)
			*/
          theme:"light",
          /*
			user defined callback functions
			*/
          callbacks:{
            /*
				Available callbacks: 
					callback					default
					-------------------------------------
					onCreate					null
					onInit						null
					onScrollStart				null
					onScroll					null
					onTotalScroll				null
					onTotalScrollBack			null
					whileScrolling				null
					onOverflowY					null
					onOverflowX					null
					onOverflowYNone				null
					onOverflowXNone				null
					onImageLoad					null
					onSelectorChange			null
					onBeforeUpdate				null
					onUpdate					null
				*/
          onTotalScrollOffset:0,
          onTotalScrollBackOffset:0,
          alwaysTriggerOffsets:true
        }
          /*
			add scrollbar(s) on all elements matching the current selector, now and in the future 
			values: boolean, string 
			string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
			liveSelector values: string (selector)
				option						default
				-------------------------------------
				live						false
				liveSelector				null
			*/
        },
        
        
        
        
        
        /* 
	----------------------------------------
	VARS, CONSTANTS 
	----------------------------------------
	*/
        
        totalInstances=0, /* plugin instances amount */
        liveTimers={}, /* live option timers */
        oldIE=(window.attachEvent && !window.addEventListener) ? 1 : 0, /* detect IE < 9 */
        touchActive=false,touchable, /* global touch vars (for touch and pointer events) */
        /* general plugin classes */
        classes=[
          "mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar",
          "mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer",
          "mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"
        ],
        
        
        
        
        
        /* 
	----------------------------------------
	METHODS 
	----------------------------------------
	*/
        
        methods={
          
          /* 
			plugin initialization method 
			creates the scrollbar(s), plugin data object and options
			----------------------------------------
			*/
          
          init:function(options){
            
            var options=$.extend(true,{},defaults,options),
                selector=_selector.call(this); /* validate selector */
            
            /* 
				if live option is enabled, monitor for elements matching the current selector and 
				apply scrollbar(s) when found (now and in the future) 
				*/
          if(options.live){
            var liveSelector=options.liveSelector || this.selector || defaultSelector, /* live selector(s) */
                $liveSelector=$(liveSelector); /* live selector(s) as jquery object */
            if(options.live==="off"){
              /* 
						disable live if requested 
						usage: $(selector).mCustomScrollbar({live:"off"}); 
						*/
                removeLiveTimers(liveSelector);
                return;
              }
              liveTimers[liveSelector]=setTimeout(function(){
                /* call mCustomScrollbar fn on live selector(s) every half-second */
                $liveSelector.mCustomScrollbar(options);
                if(options.live==="once" && $liveSelector.length){
                  /* disable live after first invocation */
                  removeLiveTimers(liveSelector);
                }
              },500);
            }else{
              removeLiveTimers(liveSelector);
            }
          
          /* options backward compatibility (for versions < 3.0.0) and normalization */
          options.setWidth=(options.set_width) ? options.set_width : options.setWidth;
          options.setHeight=(options.set_height) ? options.set_height : options.setHeight;
          options.axis=(options.horizontalScroll) ? "x" : _findAxis(options.axis);
          options.scrollInertia=options.scrollInertia>0 && options.scrollInertia<17 ? 17 : options.scrollInertia;
          if(typeof options.mouseWheel!=="object" &&  options.mouseWheel==true){ /* old school mouseWheel option (non-object) */
            options.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}
          }
          options.mouseWheel.scrollAmount=!options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
          options.mouseWheel.normalizeDelta=!options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
          options.scrollButtons.scrollType=_findScrollButtonsType(options.scrollButtons.scrollType); 
          
          _theme(options); /* theme-specific options */
          
          /* plugin constructor */
          return $(selector).each(function(){
            
            var $this=$(this);
            
            if(!$this.data(pluginPfx)){ /* prevent multiple instantiations */
              
              /* store options and create objects in jquery data */
              $this.data(pluginPfx,{
                idx:++totalInstances, /* instance index */
                opt:options, /* options */
                scrollRatio:{y:null,x:null}, /* scrollbar to content ratio */
                overflowed:null, /* overflowed axis */
                contentReset:{y:null,x:null}, /* object to check when content resets */
                bindEvents:false, /* object to check if events are bound */
                tweenRunning:false, /* object to check if tween is running */
                sequential:{}, /* sequential scrolling object */
                langDir:$this.css("direction"), /* detect/store direction (ltr or rtl) */
                cbOffsets:null, /* object to check whether callback offsets always trigger */
                /* 
							object to check how scrolling events where last triggered 
							"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method) 
							usage: object.data("mCS").trigger
							*/
                  trigger:null,
                  /* 
							object to check for changes in elements in order to call the update method automatically 
							*/
                  poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}
                });
                
                var d=$this.data(pluginPfx),o=d.opt,
                    /* HTML data attributes */
                    htmlDataAxis=$this.data("mcs-axis"),htmlDataSbPos=$this.data("mcs-scrollbar-position"),htmlDataTheme=$this.data("mcs-theme");
                
                if(htmlDataAxis){o.axis=htmlDataAxis;} /* usage example: data-mcs-axis="y" */
                if(htmlDataSbPos){o.scrollbarPosition=htmlDataSbPos;} /* usage example: data-mcs-scrollbar-position="outside" */
                if(htmlDataTheme){ /* usage example: data-mcs-theme="minimal" */
                  o.theme=htmlDataTheme;
                  _theme(o); /* theme-specific options */
                }
                
                _pluginMarkup.call(this); /* add plugin markup */
                
                if(d && o.callbacks.onCreate && typeof o.callbacks.onCreate==="function"){o.callbacks.onCreate.call(this);} /* callbacks: onCreate */
                
                $("#mCSB_"+d.idx+"_container img:not(."+classes[2]+")").addClass(classes[2]); /* flag loaded images */
                
                methods.update.call(null,$this); /* call the update method */
                
              }
              
            });
          
        },
          /* ---------------------------------------- */
          
          
          
          /* 
			plugin update method 
			updates content and scrollbar(s) values, events and status 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("update");
			*/
          
          update:function(el,cb){
            
            var selector=el || _selector.call(this); /* validate selector */
            
            return $(selector).each(function(){
              
              var $this=$(this);
              
              if($this.data(pluginPfx)){ /* check if plugin has initialized */
                
                var d=$this.data(pluginPfx),o=d.opt,
                    mCSB_container=$("#mCSB_"+d.idx+"_container"),
                    mCustomScrollBox=$("#mCSB_"+d.idx),
                    mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
                
                if(!mCSB_container.length){return;}
                
                if(d.tweenRunning){_stop($this);} /* stop any running tweens while updating */
                
                if(cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate==="function"){o.callbacks.onBeforeUpdate.call(this);} /* callbacks: onBeforeUpdate */
                
                /* if element was disabled or destroyed, remove class(es) */
                if($this.hasClass(classes[3])){$this.removeClass(classes[3]);}
                if($this.hasClass(classes[4])){$this.removeClass(classes[4]);}
                
                /* css flexbox fix, detect/set max-height */
                mCustomScrollBox.css("max-height","none");
                if(mCustomScrollBox.height()!==$this.height()){mCustomScrollBox.css("max-height",$this.height());}
                
                _expandContentHorizontally.call(this); /* expand content horizontally */
                
                if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
                  mCSB_container.css("width",_contentWidth(mCSB_container));
                }
                
                d.overflowed=_overflowed.call(this); /* determine if scrolling is required */
                
                _scrollbarVisibility.call(this); /* show/hide scrollbar(s) */
                
                /* auto-adjust scrollbar dragger length analogous to content */
                if(o.autoDraggerLength){_setDraggerLength.call(this);}
                
                _scrollRatio.call(this); /* calculate and store scrollbar to content ratio */
                
                _bindEvents.call(this); /* bind scrollbar events */
                
                /* reset scrolling position and/or events */
                var to=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)];
                if(o.axis!=="x"){ /* y/yx axis */
                  if(!d.overflowed[0]){ /* y scrolling is not required */
                    _resetContentPosition.call(this); /* reset content position */
                    if(o.axis==="y"){
                      _unbindEvents.call(this);
                    }else if(o.axis==="yx" && d.overflowed[1]){
                      _scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
                    }
                  }else if(mCSB_dragger[0].height()>mCSB_dragger[0].parent().height()){
                    _resetContentPosition.call(this); /* reset content position */
                  }else{ /* y scrolling is required */
                    _scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
                    d.contentReset.y=null;
                  }
                }
                if(o.axis!=="y"){ /* x/yx axis */
                  if(!d.overflowed[1]){ /* x scrolling is not required */
                    _resetContentPosition.call(this); /* reset content position */
                    if(o.axis==="x"){
                      _unbindEvents.call(this);
                    }else if(o.axis==="yx" && d.overflowed[0]){
                      _scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
                    }
                  }else if(mCSB_dragger[1].width()>mCSB_dragger[1].parent().width()){
                    _resetContentPosition.call(this); /* reset content position */
                  }else{ /* x scrolling is required */
                    _scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
                    d.contentReset.x=null;
                  }
                }
                
                /* callbacks: onImageLoad, onSelectorChange, onUpdate */
                if(cb && d){
                  if(cb===2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad==="function"){
                    o.callbacks.onImageLoad.call(this);
                  }else if(cb===3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange==="function"){
                    o.callbacks.onSelectorChange.call(this);
                  }else if(o.callbacks.onUpdate && typeof o.callbacks.onUpdate==="function"){
                    o.callbacks.onUpdate.call(this);
                  }
                }
                
                _autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */
                
              }
              
            });
            
          },
          /* ---------------------------------------- */
          
          
          
          /* 
			plugin scrollTo method 
			triggers a scrolling event to a specific value
			----------------------------------------
			usage: $(selector).mCustomScrollbar("scrollTo",value,options);
			*/
          
          scrollTo:function(val,options){
            
            /* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
            if(typeof val=="undefined" || val==null){return;}
            
            var selector=_selector.call(this); /* validate selector */
            
            return $(selector).each(function(){
              
              var $this=$(this);
              
              if($this.data(pluginPfx)){ /* check if plugin has initialized */
                
                var d=$this.data(pluginPfx),o=d.opt,
                    /* method default options */
                    methodDefaults={
                      trigger:"external", /* method is by default triggered externally (e.g. from other scripts) */
                      scrollInertia:o.scrollInertia, /* scrolling inertia (animation duration) */
                      scrollEasing:"mcsEaseInOut", /* animation easing */
                      moveDragger:false, /* move dragger instead of content */
                      timeout:60, /* scroll-to delay */
                      callbacks:true, /* enable/disable callbacks */
                      onStart:true,
                      onUpdate:true,
                      onComplete:true
                    },
                    methodOptions=$.extend(true,{},methodDefaults,options),
                    to=_arr.call(this,val),dur=methodOptions.scrollInertia>0 && methodOptions.scrollInertia<17 ? 17 : methodOptions.scrollInertia;
                
                /* translate yx values to actual scroll-to positions */
                to[0]=_to.call(this,to[0],"y");
                to[1]=_to.call(this,to[1],"x");
                
                /* 
						check if scroll-to value moves the dragger instead of content. 
						Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.) 
						*/
                if(methodOptions.moveDragger){
                  to[0]*=d.scrollRatio.y;
                  to[1]*=d.scrollRatio.x;
                }
                
                methodOptions.dur=_isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden
                
                setTimeout(function(){ 
                  /* do the scrolling */
                  if(to[0]!==null && typeof to[0]!=="undefined" && o.axis!=="x" && d.overflowed[0]){ /* scroll y */
                    methodOptions.dir="y";
                    methodOptions.overwrite="all";
                    _scrollTo($this,to[0].toString(),methodOptions);
                  }
                  if(to[1]!==null && typeof to[1]!=="undefined" && o.axis!=="y" && d.overflowed[1]){ /* scroll x */
                    methodOptions.dir="x";
                    methodOptions.overwrite="none";
                    _scrollTo($this,to[1].toString(),methodOptions);
                  }
                },methodOptions.timeout);
                
              }
              
            });
            
          },
          /* ---------------------------------------- */
          
          
          
          /*
			plugin stop method 
			stops scrolling animation
			----------------------------------------
			usage: $(selector).mCustomScrollbar("stop");
			*/
          stop:function(){
            
            var selector=_selector.call(this); /* validate selector */
            
            return $(selector).each(function(){
              
              var $this=$(this);
              
              if($this.data(pluginPfx)){ /* check if plugin has initialized */
                
                _stop($this);
                
              }
              
            });
            
          },
          /* ---------------------------------------- */
          
          
          
          /*
			plugin disable method 
			temporarily disables the scrollbar(s) 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("disable",reset); 
			reset (boolean): resets content position to 0 
			*/
          disable:function(r){
            
            var selector=_selector.call(this); /* validate selector */
            
            return $(selector).each(function(){
              
              var $this=$(this);
              
              if($this.data(pluginPfx)){ /* check if plugin has initialized */
                
                var d=$this.data(pluginPfx);
                
                _autoUpdate.call(this,"remove"); /* remove automatic updating */
                
                _unbindEvents.call(this); /* unbind events */
                
                if(r){_resetContentPosition.call(this);} /* reset content position */
                
                _scrollbarVisibility.call(this,true); /* show/hide scrollbar(s) */
                
                $this.addClass(classes[3]); /* add disable class */
                
              }
              
            });
            
          },
          /* ---------------------------------------- */
          
          
          
          /*
			plugin destroy method 
			completely removes the scrollbar(s) and returns the element to its original state
			----------------------------------------
			usage: $(selector).mCustomScrollbar("destroy"); 
			*/
          destroy:function(){
            
            var selector=_selector.call(this); /* validate selector */
            
            return $(selector).each(function(){
              
              var $this=$(this);
              
              if($this.data(pluginPfx)){ /* check if plugin has initialized */
                
                var d=$this.data(pluginPfx),o=d.opt,
                    mCustomScrollBox=$("#mCSB_"+d.idx),
                    mCSB_container=$("#mCSB_"+d.idx+"_container"),
                    scrollbar=$(".mCSB_"+d.idx+"_scrollbar");
                
                if(o.live){removeLiveTimers(o.liveSelector || $(selector).selector);} /* remove live timers */
                
                _autoUpdate.call(this,"remove"); /* remove automatic updating */
                
                _unbindEvents.call(this); /* unbind events */
                
                _resetContentPosition.call(this); /* reset content position */
                
                $this.removeData(pluginPfx); /* remove plugin data object */
                
                _delete(this,"mcs"); /* delete callbacks object */
                
                /* remove plugin markup */
                scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
                mCSB_container.find("img."+classes[2]).removeClass(classes[2]); /* remove loaded images flag */
                mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */
                /* remove plugin classes from the element and add destroy class */
                $this.removeClass(pluginNS+" _"+pluginPfx+"_"+d.idx+" "+classes[6]+" "+classes[7]+" "+classes[5]+" "+classes[3]).addClass(classes[4]);
                
              }
              
            });
            
          }
          /* ---------------------------------------- */
          
        },
        
        
        
        
        
        /* 
	----------------------------------------
	FUNCTIONS
	----------------------------------------
	*/
        
        /* validates selector (if selector is invalid or undefined uses the default one) */
        _selector=function(){
          return (typeof $(this)!=="object" || $(this).length<1) ? defaultSelector : this;
        },
        /* -------------------- */
        
        
        /* changes options according to theme */
        _theme=function(obj){
          var fixedSizeScrollbarThemes=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],
              nonExpandedScrollbarThemes=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],
              disabledScrollButtonsThemes=["minimal","minimal-dark"],
              enabledAutoHideScrollbarThemes=["minimal","minimal-dark"],
              scrollbarPositionOutsideThemes=["minimal","minimal-dark"];
          obj.autoDraggerLength=$.inArray(obj.theme,fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
          obj.autoExpandScrollbar=$.inArray(obj.theme,nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
          obj.scrollButtons.enable=$.inArray(obj.theme,disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
          obj.autoHideScrollbar=$.inArray(obj.theme,enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
          obj.scrollbarPosition=$.inArray(obj.theme,scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
        },
        /* -------------------- */
        
        
        /* live option timers removal */
        removeLiveTimers=function(selector){
          if(liveTimers[selector]){
            clearTimeout(liveTimers[selector]);
            _delete(liveTimers,selector);
          }
        },
        /* -------------------- */
        
        
        /* normalizes axis option to valid values: "y", "x", "yx" */
        _findAxis=function(val){
          return (val==="yx" || val==="xy" || val==="auto") ? "yx" : (val==="x" || val==="horizontal") ? "x" : "y";
        },
        /* -------------------- */
        
        
        /* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
        _findScrollButtonsType=function(val){
          return (val==="stepped" || val==="pixels" || val==="step" || val==="click") ? "stepped" : "stepless";
        },
        /* -------------------- */
        
        
        /* generates plugin markup */
        _pluginMarkup=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              expandClass=o.autoExpandScrollbar ? " "+classes[1]+"_expand" : "",
              scrollbar=["<div id='mCSB_"+d.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+d.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
              wrapperClass=o.axis==="yx" ? "mCSB_vertical_horizontal" : o.axis==="x" ? "mCSB_horizontal" : "mCSB_vertical",
              scrollbars=o.axis==="yx" ? scrollbar[0]+scrollbar[1] : o.axis==="x" ? scrollbar[1] : scrollbar[0],
              contentWrapper=o.axis==="yx" ? "<div id='mCSB_"+d.idx+"_container_wrapper' class='mCSB_container_wrapper' />" : "",
              autoHideClass=o.autoHideScrollbar ? " "+classes[6] : "",
              scrollbarDirClass=(o.axis!=="x" && d.langDir==="rtl") ? " "+classes[7] : "";
          if(o.setWidth){$this.css("width",o.setWidth);} /* set element width */
          if(o.setHeight){$this.css("height",o.setHeight);} /* set element height */
          o.setLeft=(o.axis!=="y" && d.langDir==="rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
          $this.addClass(pluginNS+" _"+pluginPfx+"_"+d.idx+autoHideClass+scrollbarDirClass).wrapInner("<div id='mCSB_"+d.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+wrapperClass+"'><div id='mCSB_"+d.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir='"+d.langDir+"' /></div>");
          var mCustomScrollBox=$("#mCSB_"+d.idx),
              mCSB_container=$("#mCSB_"+d.idx+"_container");
          if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
            mCSB_container.css("width",_contentWidth(mCSB_container));
          }
          if(o.scrollbarPosition==="outside"){
            if($this.css("position")==="static"){ /* requires elements with non-static position */
              $this.css("position","relative");
            }
            $this.css("overflow","visible");
            mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
          }else{
            mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
            mCSB_container.wrap(contentWrapper);
          }
          _scrollButtons.call(this); /* add scrollbar buttons */
          /* minimum dragger length */
          var mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
          mCSB_dragger[0].css("min-height",mCSB_dragger[0].height());
          mCSB_dragger[1].css("min-width",mCSB_dragger[1].width());
        },
        /* -------------------- */
        
        
        /* calculates content width */
        _contentWidth=function(el){
          var val=[el[0].scrollWidth,Math.max.apply(Math,el.children().map(function(){return $(this).outerWidth(true);}).get())],w=el.parent().width();
          return val[0]>w ? val[0] : val[1]>w ? val[1] : "100%";
        },
        /* -------------------- */
        
        
        /* expands content horizontally */
        _expandContentHorizontally=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              mCSB_container=$("#mCSB_"+d.idx+"_container");
          if(o.advanced.autoExpandHorizontalScroll && o.axis!=="y"){
            /* calculate scrollWidth */
            mCSB_container.css({"width":"auto","min-width":0,"overflow-x":"scroll"});
            var w=Math.ceil(mCSB_container[0].scrollWidth);
            if(o.advanced.autoExpandHorizontalScroll===3 || (o.advanced.autoExpandHorizontalScroll!==2 && w>mCSB_container.parent().width())){
              mCSB_container.css({"width":w,"min-width":"100%","overflow-x":"inherit"});
            }else{
              /* 
					wrap content with an infinite width div and set its position to absolute and width to auto. 
					Setting width to auto before calculating the actual width is important! 
					We must let the browser set the width as browser zoom values are impossible to calculate.
					*/
              mCSB_container.css({"overflow-x":"inherit","position":"absolute"})
              .wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
              .css({ /* set actual width, original position and un-wrap */
                /* 
							get the exact width (with decimals) and then round-up. 
							Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
							*/
                "width":(Math.ceil(mCSB_container[0].getBoundingClientRect().right+0.4)-Math.floor(mCSB_container[0].getBoundingClientRect().left)),
                "min-width":"100%",
                "position":"relative"
              }).unwrap();
            }
          }
        },
        /* -------------------- */
        
        
        /* adds scrollbar buttons */
        _scrollButtons=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              mCSB_scrollTools=$(".mCSB_"+d.idx+"_scrollbar:first"),
              tabindex=!_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='"+o.scrollButtons.tabindex+"'",
                btnHTML=[
                "<a href='#' class='"+classes[13]+"' "+tabindex+" />",
                "<a href='#' class='"+classes[14]+"' "+tabindex+" />",
                "<a href='#' class='"+classes[15]+"' "+tabindex+" />",
                "<a href='#' class='"+classes[16]+"' "+tabindex+" />"
              ],
                btn=[(o.axis==="x" ? btnHTML[2] : btnHTML[0]),(o.axis==="x" ? btnHTML[3] : btnHTML[1]),btnHTML[2],btnHTML[3]];
          if(o.scrollButtons.enable){
            mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
          }
        },
        /* -------------------- */
        
        
        /* auto-adjusts scrollbar dragger length */
        _setDraggerLength=function(){
          var $this=$(this),d=$this.data(pluginPfx),
              mCustomScrollBox=$("#mCSB_"+d.idx),
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
              ratio=[mCustomScrollBox.height()/mCSB_container.outerHeight(false),mCustomScrollBox.width()/mCSB_container.outerWidth(false)],
              l=[
                parseInt(mCSB_dragger[0].css("min-height")),Math.round(ratio[0]*mCSB_dragger[0].parent().height()),
                parseInt(mCSB_dragger[1].css("min-width")),Math.round(ratio[1]*mCSB_dragger[1].parent().width())
              ],
              h=oldIE && (l[1]<l[0]) ? l[0] : l[1],w=oldIE && (l[3]<l[2]) ? l[2] : l[3];
          mCSB_dragger[0].css({
            "height":h,"max-height":(mCSB_dragger[0].parent().height()-10)
          }).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"});
          mCSB_dragger[1].css({
            "width":w,"max-width":(mCSB_dragger[1].parent().width()-10)
          });
        },
        /* -------------------- */
        
        
        /* calculates scrollbar to content ratio */
        _scrollRatio=function(){
          var $this=$(this),d=$this.data(pluginPfx),
              mCustomScrollBox=$("#mCSB_"+d.idx),
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
              scrollAmount=[mCSB_container.outerHeight(false)-mCustomScrollBox.height(),mCSB_container.outerWidth(false)-mCustomScrollBox.width()],
              ratio=[
                scrollAmount[0]/(mCSB_dragger[0].parent().height()-mCSB_dragger[0].height()),
                scrollAmount[1]/(mCSB_dragger[1].parent().width()-mCSB_dragger[1].width())
              ];
          d.scrollRatio={y:ratio[0],x:ratio[1]};
        },
        /* -------------------- */
        
        
        /* toggles scrolling classes */
        _onDragClasses=function(el,action,xpnd){
          var expandClass=xpnd ? classes[0]+"_expanded" : "",
              scrollbar=el.closest(".mCSB_scrollTools");
          if(action==="active"){
            el.toggleClass(classes[0]+" "+expandClass); scrollbar.toggleClass(classes[1]); 
            el[0]._draggable=el[0]._draggable ? 0 : 1;
          }else{
            if(!el[0]._draggable){
              if(action==="hide"){
                el.removeClass(classes[0]); scrollbar.removeClass(classes[1]);
              }else{
                el.addClass(classes[0]); scrollbar.addClass(classes[1]);
              }
            }
          }
        },
        /* -------------------- */
        
        
        /* checks if content overflows its container to determine if scrolling is required */
        _overflowed=function(){
          var $this=$(this),d=$this.data(pluginPfx),
              mCustomScrollBox=$("#mCSB_"+d.idx),
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              contentHeight=d.overflowed==null ? mCSB_container.height() : mCSB_container.outerHeight(false),
              contentWidth=d.overflowed==null ? mCSB_container.width() : mCSB_container.outerWidth(false),
              h=mCSB_container[0].scrollHeight,w=mCSB_container[0].scrollWidth;
          if(h>contentHeight){contentHeight=h;}
          if(w>contentWidth){contentWidth=w;}
          return [contentHeight>mCustomScrollBox.height(),contentWidth>mCustomScrollBox.width()];
        },
        /* -------------------- */
        
        
        /* resets content position to 0 */
        _resetContentPosition=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              mCustomScrollBox=$("#mCSB_"+d.idx),
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
          _stop($this); /* stop any current scrolling before resetting */
          if((o.axis!=="x" && !d.overflowed[0]) || (o.axis==="y" && d.overflowed[0])){ /* reset y */
            mCSB_dragger[0].add(mCSB_container).css("top",0);
            _scrollTo($this,"_resetY");
          }
          if((o.axis!=="y" && !d.overflowed[1]) || (o.axis==="x" && d.overflowed[1])){ /* reset x */
            var cx=dx=0;
            if(d.langDir==="rtl"){ /* adjust left position for rtl direction */
              cx=mCustomScrollBox.width()-mCSB_container.outerWidth(false);
              dx=Math.abs(cx/d.scrollRatio.x);
            }
            mCSB_container.css("left",cx);
            mCSB_dragger[1].css("left",dx);
            _scrollTo($this,"_resetX");
          }
        },
        /* -------------------- */
        
        
        /* binds scrollbar events */
        _bindEvents=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt;
          if(!d.bindEvents){ /* check if events are already bound */
            _draggable.call(this);
            if(o.contentTouchScroll){_contentDraggable.call(this);}
            _selectable.call(this);
            if(o.mouseWheel.enable){ /* bind mousewheel fn when plugin is available */
              function _mwt(){
                mousewheelTimeout=setTimeout(function(){
                  if(!$.event.special.mousewheel){
                    _mwt();
                  }else{
                    clearTimeout(mousewheelTimeout);
                    _mousewheel.call($this[0]);
                  }
                },100);
              }
              var mousewheelTimeout;
              _mwt();
            }
            _draggerRail.call(this);
            _wrapperScroll.call(this);
            if(o.advanced.autoScrollOnFocus){_focus.call(this);}
            if(o.scrollButtons.enable){_buttons.call(this);}
            if(o.keyboard.enable){_keyboard.call(this);}
            d.bindEvents=true;
          }
        },
        /* -------------------- */
        
        
        /* unbinds scrollbar events */
        _unbindEvents=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              namespace=pluginPfx+"_"+d.idx,
              sb=".mCSB_"+d.idx+"_scrollbar",
              sel=$("#mCSB_"+d.idx+",#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,"+sb+" ."+classes[12]+",#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal,"+sb+">a"),
              mCSB_container=$("#mCSB_"+d.idx+"_container");
          if(o.advanced.releaseDraggableSelectors){sel.add($(o.advanced.releaseDraggableSelectors));}
          if(o.advanced.extraDraggableSelectors){sel.add($(o.advanced.extraDraggableSelectors));}
          if(d.bindEvents){ /* check if events are bound */
            /* unbind namespaced events from document/selectors */
            $(document).add($(!_canAccessIFrame() || top.document)).unbind("."+namespace);
            sel.each(function(){
              $(this).unbind("."+namespace);
            });
            /* clear and delete timeouts/objects */
            clearTimeout($this[0]._focusTimeout); _delete($this[0],"_focusTimeout");
            clearTimeout(d.sequential.step); _delete(d.sequential,"step");
            clearTimeout(mCSB_container[0].onCompleteTimeout); _delete(mCSB_container[0],"onCompleteTimeout");
            d.bindEvents=false;
          }
        },
        /* -------------------- */
        
        
        /* toggles scrollbar visibility */
        _scrollbarVisibility=function(disabled){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              contentWrapper=$("#mCSB_"+d.idx+"_container_wrapper"),
              content=contentWrapper.length ? contentWrapper : $("#mCSB_"+d.idx+"_container"),
              scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],
              mCSB_dragger=[scrollbar[0].find(".mCSB_dragger"),scrollbar[1].find(".mCSB_dragger")];
          if(o.axis!=="x"){
            if(d.overflowed[0] && !disabled){
              scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display","block");
              content.removeClass(classes[8]+" "+classes[10]);
            }else{
              if(o.alwaysShowScrollbar){
                if(o.alwaysShowScrollbar!==2){mCSB_dragger[0].css("display","none");}
                content.removeClass(classes[10]);
              }else{
                scrollbar[0].css("display","none");
                content.addClass(classes[10]);
              }
              content.addClass(classes[8]);
            }
          }
          if(o.axis!=="y"){
            if(d.overflowed[1] && !disabled){
              scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display","block");
              content.removeClass(classes[9]+" "+classes[11]);
            }else{
              if(o.alwaysShowScrollbar){
                if(o.alwaysShowScrollbar!==2){mCSB_dragger[1].css("display","none");}
                content.removeClass(classes[11]);
              }else{
                scrollbar[1].css("display","none");
                content.addClass(classes[11]);
              }
              content.addClass(classes[9]);
            }
          }
          if(!d.overflowed[0] && !d.overflowed[1]){
            $this.addClass(classes[5]);
          }else{
            $this.removeClass(classes[5]);
          }
        },
        /* -------------------- */
        
        
        /* returns input coordinates of pointer, touch and mouse events (relative to document) */
        _coordinates=function(e){
          var t=e.type,o=e.target.ownerDocument!==document && frameElement!==null ? [$(frameElement).offset().top,$(frameElement).offset().left] : null,
              io=_canAccessIFrame() && e.target.ownerDocument!==top.document && frameElement!==null ? [$(e.view.frameElement).offset().top,$(e.view.frameElement).offset().left] : [0,0];
          switch(t){
            case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp":
              return o ? [e.originalEvent.pageY-o[0]+io[0],e.originalEvent.pageX-o[1]+io[1],false] : [e.originalEvent.pageY,e.originalEvent.pageX,false];
              break;
            case "touchstart": case "touchmove": case "touchend":
              var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                  touches=e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
              return e.target.ownerDocument!==document ? [touch.screenY,touch.screenX,touches>1] : [touch.pageY,touch.pageX,touches>1];
              break;
            default:
              return o ? [e.pageY-o[0]+io[0],e.pageX-o[1]+io[1],false] : [e.pageY,e.pageX,false];
          }
        },
        /* -------------------- */
        
        
        /* 
		SCROLLBAR DRAG EVENTS
		scrolls content via scrollbar dragging 
		*/
        _draggable=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              namespace=pluginPfx+"_"+d.idx,
              draggerId=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              mCSB_dragger=$("#"+draggerId[0]+",#"+draggerId[1]),
              draggable,dragY,dragX,
              rds=o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
              eds=o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
          mCSB_dragger.bind("contextmenu."+namespace,function(e){
            e.preventDefault(); //prevent right click
          }).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
            e.stopImmediatePropagation();
            e.preventDefault();
            if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
            touchActive=true;
            if(oldIE){document.onselectstart=function(){return false;}} /* disable text selection for IE < 9 */
            _iframe.call(mCSB_container,false); /* enable scrollbar dragging over iframes by disabling their events */
            _stop($this);
            draggable=$(this);
            var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
                h=draggable.height()+offset.top,w=draggable.width()+offset.left;
            if(y<h && y>0 && x<w && x>0){
              dragY=y; 
              dragX=x;
            }
            _onDragClasses(draggable,"active",o.autoExpandScrollbar); 
          }).bind("touchmove."+namespace,function(e){
            e.stopImmediatePropagation();
            e.preventDefault();
            var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
            _drag(dragY,dragX,y,x);
          });
          $(document).add(eds).bind("mousemove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace,function(e){
            if(draggable){
              var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
              if(dragY===y && dragX===x){return;} /* has it really moved? */
              _drag(dragY,dragX,y,x);
            }
          }).add(rds).bind("mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
            if(draggable){
              _onDragClasses(draggable,"active",o.autoExpandScrollbar); 
              draggable=null;
            }
            touchActive=false;
            if(oldIE){document.onselectstart=null;} /* enable text selection for IE < 9 */
            _iframe.call(mCSB_container,true); /* enable iframes events */
          });
          function _drag(dragY,dragX,y,x){
            mCSB_container[0].idleTimer=o.scrollInertia<233 ? 250 : 0;
            if(draggable.attr("id")===draggerId[1]){
              var dir="x",to=((draggable[0].offsetLeft-dragX)+x)*d.scrollRatio.x;
            }else{
              var dir="y",to=((draggable[0].offsetTop-dragY)+y)*d.scrollRatio.y;
            }
            _scrollTo($this,to.toString(),{dir:dir,drag:true});
          }
        },
        /* -------------------- */
        
        
        /* 
		TOUCH SWIPE EVENTS
		scrolls content via touch swipe 
		Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices 
		*/
        _contentDraggable=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              namespace=pluginPfx+"_"+d.idx,
              mCustomScrollBox=$("#mCSB_"+d.idx),
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
              draggable,dragY,dragX,touchStartY,touchStartX,touchMoveY=[],touchMoveX=[],startTime,runningTime,endTime,distance,speed,amount,
              durA=0,durB,overwrite=o.axis==="yx" ? "none" : "all",touchIntent=[],touchDrag,docDrag,
              iframe=mCSB_container.find("iframe"),
              events=[
                "touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace, //start
                "touchmove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace, //move
                "touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace //end
              ],
              touchAction=document.body.style.touchAction!==undefined && document.body.style.touchAction!=="";
          mCSB_container.bind(events[0],function(e){
            _onTouchstart(e);
          }).bind(events[1],function(e){
            _onTouchmove(e);
          });
          mCustomScrollBox.bind(events[0],function(e){
            _onTouchstart2(e);
          }).bind(events[2],function(e){
            _onTouchend(e);
          });
          if(iframe.length){
            iframe.each(function(){
              $(this).bind("load",function(){
                /* bind events on accessible iframes */
                if(_canAccessIFrame(this)){
                  $(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
                    _onTouchstart(e);
                    _onTouchstart2(e);
                  }).bind(events[1],function(e){
                    _onTouchmove(e);
                  }).bind(events[2],function(e){
                    _onTouchend(e);
                  });
                }
              });
            });
          }
          function _onTouchstart(e){
            if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
            touchable=1; touchDrag=0; docDrag=0; draggable=1;
            $this.removeClass("mCS_touch_action");
            var offset=mCSB_container.offset();
            dragY=_coordinates(e)[0]-offset.top;
            dragX=_coordinates(e)[1]-offset.left;
            touchIntent=[_coordinates(e)[0],_coordinates(e)[1]];
          }
          function _onTouchmove(e){
            if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
            if(!o.documentTouchScroll){e.preventDefault();} 
            e.stopImmediatePropagation();
            if(docDrag && !touchDrag){return;}
            if(draggable){
              runningTime=_getTime();
              var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
                  easing="mcsLinearOut";
              touchMoveY.push(y);
              touchMoveX.push(x);
              touchIntent[2]=Math.abs(_coordinates(e)[0]-touchIntent[0]); touchIntent[3]=Math.abs(_coordinates(e)[1]-touchIntent[1]);
              if(d.overflowed[0]){
                var limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
                    prevent=((dragY-y)>0 && (y-dragY)>-(limit*d.scrollRatio.y) && (touchIntent[3]*2<touchIntent[2] || o.axis==="yx"));
              }
              if(d.overflowed[1]){
                var limitX=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
                    preventX=((dragX-x)>0 && (x-dragX)>-(limitX*d.scrollRatio.x) && (touchIntent[2]*2<touchIntent[3] || o.axis==="yx"));
              }
              if(prevent || preventX){ /* prevent native document scrolling */
                if(!touchAction){e.preventDefault();} 
                touchDrag=1;
              }else{
                docDrag=1;
                $this.addClass("mCS_touch_action");
              }
              if(touchAction){e.preventDefault();} 
              amount=o.axis==="yx" ? [(dragY-y),(dragX-x)] : o.axis==="x" ? [null,(dragX-x)] : [(dragY-y),null];
              mCSB_container[0].idleTimer=250;
              if(d.overflowed[0]){_drag(amount[0],durA,easing,"y","all",true);}
              if(d.overflowed[1]){_drag(amount[1],durA,easing,"x",overwrite,true);}
            }
          }
          function _onTouchstart2(e){
            if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
            touchable=1;
            e.stopImmediatePropagation();
            _stop($this);
            startTime=_getTime();
            var offset=mCustomScrollBox.offset();
            touchStartY=_coordinates(e)[0]-offset.top;
            touchStartX=_coordinates(e)[1]-offset.left;
            touchMoveY=[]; touchMoveX=[];
          }
          function _onTouchend(e){
            if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
            draggable=0;
            e.stopImmediatePropagation();
            touchDrag=0; docDrag=0;
            endTime=_getTime();
            var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
            if((endTime-runningTime)>30){return;}
            speed=1000/(endTime-startTime);
            var easing="mcsEaseOut",slow=speed<2.5,
                diff=slow ? [touchMoveY[touchMoveY.length-2],touchMoveX[touchMoveX.length-2]] : [0,0];
            distance=slow ? [(y-diff[0]),(x-diff[1])] : [y-touchStartY,x-touchStartX];
            var absDistance=[Math.abs(distance[0]),Math.abs(distance[1])];
            speed=slow ? [Math.abs(distance[0]/4),Math.abs(distance[1]/4)] : [speed,speed];
            var a=[
              Math.abs(mCSB_container[0].offsetTop)-(distance[0]*_m((absDistance[0]/speed[0]),speed[0])),
              Math.abs(mCSB_container[0].offsetLeft)-(distance[1]*_m((absDistance[1]/speed[1]),speed[1]))
            ];
            amount=o.axis==="yx" ? [a[0],a[1]] : o.axis==="x" ? [null,a[1]] : [a[0],null];
            durB=[(absDistance[0]*4)+o.scrollInertia,(absDistance[1]*4)+o.scrollInertia];
            var md=parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
            amount[0]=absDistance[0]>md ? amount[0] : 0;
            amount[1]=absDistance[1]>md ? amount[1] : 0;
            if(d.overflowed[0]){_drag(amount[0],durB[0],easing,"y",overwrite,false);}
            if(d.overflowed[1]){_drag(amount[1],durB[1],easing,"x",overwrite,false);}
          }
          function _m(ds,s){
            var r=[s*1.5,s*2,s/1.5,s/2];
            if(ds>90){
              return s>4 ? r[0] : r[3];
            }else if(ds>60){
              return s>3 ? r[3] : r[2];
            }else if(ds>30){
              return s>8 ? r[1] : s>6 ? r[0] : s>4 ? s : r[2];
            }else{
              return s>8 ? s : r[3];
            }
          }
          function _drag(amount,dur,easing,dir,overwrite,drag){
            if(!amount){return;}
            _scrollTo($this,amount.toString(),{dur:dur,scrollEasing:easing,dir:dir,overwrite:overwrite,drag:drag});
          }
        },
        /* -------------------- */
        
        
        /* 
		SELECT TEXT EVENTS 
		scrolls content when text is selected 
		*/
        _selectable=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
              namespace=pluginPfx+"_"+d.idx,
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              wrapper=mCSB_container.parent(),
              action;
          mCSB_container.bind("mousedown."+namespace,function(e){
            if(touchable){return;}
            if(!action){action=1; touchActive=true;}
          }).add(document).bind("mousemove."+namespace,function(e){
            if(!touchable && action && _sel()){
              var offset=mCSB_container.offset(),
                  y=_coordinates(e)[0]-offset.top+mCSB_container[0].offsetTop,x=_coordinates(e)[1]-offset.left+mCSB_container[0].offsetLeft;
              if(y>0 && y<wrapper.height() && x>0 && x<wrapper.width()){
                if(seq.step){_seq("off",null,"stepped");}
              }else{
                if(o.axis!=="x" && d.overflowed[0]){
                  if(y<0){
                    _seq("on",38);
                  }else if(y>wrapper.height()){
                    _seq("on",40);
                  }
                }
                if(o.axis!=="y" && d.overflowed[1]){
                  if(x<0){
                    _seq("on",37);
                  }else if(x>wrapper.width()){
                    _seq("on",39);
                  }
                }
              }
            }
          }).bind("mouseup."+namespace+" dragend."+namespace,function(e){
            if(touchable){return;}
            if(action){action=0; _seq("off",null);}
            touchActive=false;
          });
          function _sel(){
            return 	window.getSelection ? window.getSelection().toString() : 
            document.selection && document.selection.type!="Control" ? document.selection.createRange().text : 0;
          }
          function _seq(a,c,s){
            seq.type=s && action ? "stepped" : "stepless";
            seq.scrollAmount=10;
            _sequentialScroll($this,a,c,"mcsLinearOut",s ? 60 : null);
          }
        },
        /* -------------------- */
        
        
        /* 
		MOUSE WHEEL EVENT
		scrolls content via mouse-wheel 
		via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
		*/
        _mousewheel=function(){
          if(!$(this).data(pluginPfx)){return;} /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              namespace=pluginPfx+"_"+d.idx,
              mCustomScrollBox=$("#mCSB_"+d.idx),
              mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
              iframe=$("#mCSB_"+d.idx+"_container").find("iframe");
          if(iframe.length){
            iframe.each(function(){
              $(this).bind("load",function(){
                /* bind events on accessible iframes */
                if(_canAccessIFrame(this)){
                  $(this.contentDocument || this.contentWindow.document).bind("mousewheel."+namespace,function(e,delta){
                    _onMousewheel(e,delta);
                  });
                }
              });
            });
          }
          mCustomScrollBox.bind("mousewheel."+namespace,function(e,delta){
            _onMousewheel(e,delta);
          });
          function _onMousewheel(e,delta){
            _stop($this);
            if(_disableMousewheel($this,e.target)){return;} /* disables mouse-wheel when hovering specific elements */
            var deltaFactor=o.mouseWheel.deltaFactor!=="auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor<100) ? 100 : e.deltaFactor || 100,
                dur=o.scrollInertia;
            if(o.axis==="x" || o.mouseWheel.axis==="x"){
              var dir="x",
                  px=[Math.round(deltaFactor*d.scrollRatio.x),parseInt(o.mouseWheel.scrollAmount)],
                  amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.width() ? mCustomScrollBox.width()*0.9 : px[0],
                  contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetLeft),
                  draggerPos=mCSB_dragger[1][0].offsetLeft,
                  limit=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
                  dlt=o.mouseWheel.axis==="y" ? (e.deltaY || delta) : e.deltaX;
            }else{
              var dir="y",
                  px=[Math.round(deltaFactor*d.scrollRatio.y),parseInt(o.mouseWheel.scrollAmount)],
                  amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.height() ? mCustomScrollBox.height()*0.9 : px[0],
                  contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetTop),
                  draggerPos=mCSB_dragger[0][0].offsetTop,
                  limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
                  dlt=e.deltaY || delta;
            }
            if((dir==="y" && !d.overflowed[0]) || (dir==="x" && !d.overflowed[1])){return;}
            if(o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice){dlt=-dlt;}
            if(o.mouseWheel.normalizeDelta){dlt=dlt<0 ? -1 : 1;}
            if((dlt>0 && draggerPos!==0) || (dlt<0 && draggerPos!==limit) || o.mouseWheel.preventDefault){
              e.stopImmediatePropagation();
              e.preventDefault();
            }
            if(e.deltaFactor<5 && !o.mouseWheel.normalizeDelta){
              //very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
              amount=e.deltaFactor; dur=17;
            }
            _scrollTo($this,(contentPos-(dlt*amount)).toString(),{dir:dir,dur:dur});
          }
        },
        /* -------------------- */
        
        
        /* checks if iframe can be accessed */
        _canAccessIFrameCache=new Object(),
        _canAccessIFrame=function(iframe){
          var result=false,cacheKey=false,html=null;
          if(iframe===undefined){
            cacheKey="#empty";
          }else if($(iframe).attr("id")!==undefined){
            cacheKey=$(iframe).attr("id");
          }
          if(cacheKey!==false && _canAccessIFrameCache[cacheKey]!==undefined){
            return _canAccessIFrameCache[cacheKey];
          }
          if(!iframe){
            try{
              var doc=top.document;
              html=doc.body.innerHTML;
            }catch(err){/* do nothing */}
            result=(html!==null);
          }else{
            try{
              var doc=iframe.contentDocument || iframe.contentWindow.document;
              html=doc.body.innerHTML;
            }catch(err){/* do nothing */}
            result=(html!==null);
          }
          if(cacheKey!==false){_canAccessIFrameCache[cacheKey]=result;}
          return result;
        },
        /* -------------------- */
        
        
        /* switches iframe's pointer-events property (drag, mousewheel etc. over cross-domain iframes) */
        _iframe=function(evt){
          var el=this.find("iframe");
          if(!el.length){return;} /* check if content contains iframes */
          var val=!evt ? "none" : "auto";
          el.css("pointer-events",val); /* for IE11, iframe's display property should not be "block" */
        },
        /* -------------------- */
        
        
        /* disables mouse-wheel when hovering specific elements like select, datalist etc. */
        _disableMousewheel=function(el,target){
          var tag=target.nodeName.toLowerCase(),
              tags=el.data(pluginPfx).opt.mouseWheel.disableOver,
              /* elements that require focus */
              focusTags=["select","textarea"];
          return $.inArray(tag,tags) > -1 && !($.inArray(tag,focusTags) > -1 && !$(target).is(":focus"));
        },
        /* -------------------- */
        
        
        /* 
		DRAGGER RAIL CLICK EVENT
		scrolls content via dragger rail 
		*/
        _draggerRail=function(){
          var $this=$(this),d=$this.data(pluginPfx),
              namespace=pluginPfx+"_"+d.idx,
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              wrapper=mCSB_container.parent(),
              mCSB_draggerContainer=$(".mCSB_"+d.idx+"_scrollbar ."+classes[12]),
              clickable;
          mCSB_draggerContainer.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
            touchActive=true;
            if(!$(e.target).hasClass("mCSB_dragger")){clickable=1;}
          }).bind("touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
            touchActive=false;
          }).bind("click."+namespace,function(e){
            if(!clickable){return;}
            clickable=0;
            if($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")){
              _stop($this);
              var el=$(this),mCSB_dragger=el.find(".mCSB_dragger");
              if(el.parent(".mCSB_scrollTools_horizontal").length>0){
                if(!d.overflowed[1]){return;}
                var dir="x",
                    clickDir=e.pageX>mCSB_dragger.offset().left ? -1 : 1,
                    to=Math.abs(mCSB_container[0].offsetLeft)-(clickDir*(wrapper.width()*0.9));
              }else{
                if(!d.overflowed[0]){return;}
                var dir="y",
                    clickDir=e.pageY>mCSB_dragger.offset().top ? -1 : 1,
                    to=Math.abs(mCSB_container[0].offsetTop)-(clickDir*(wrapper.height()*0.9));
              }
              _scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
            }
          });
        },
        /* -------------------- */
        
        
        /* 
		FOCUS EVENT
		scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
		*/
        _focus=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              namespace=pluginPfx+"_"+d.idx,
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              wrapper=mCSB_container.parent();
          mCSB_container.bind("focusin."+namespace,function(e){
            var el=$(document.activeElement),
                nested=mCSB_container.find(".mCustomScrollBox").length,
                dur=0;
            if(!el.is(o.advanced.autoScrollOnFocus)){return;}
            _stop($this);
            clearTimeout($this[0]._focusTimeout);
            $this[0]._focusTimer=nested ? (dur+17)*nested : 0;
            $this[0]._focusTimeout=setTimeout(function(){
              var	to=[_childPos(el)[0],_childPos(el)[1]],
                  contentPos=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft],
                  isVisible=[
                    (contentPos[0]+to[0]>=0 && contentPos[0]+to[0]<wrapper.height()-el.outerHeight(false)),
                    (contentPos[1]+to[1]>=0 && contentPos[0]+to[1]<wrapper.width()-el.outerWidth(false))
                  ],
                  overwrite=(o.axis==="yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
              if(o.axis!=="x" && !isVisible[0]){
                _scrollTo($this,to[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
              }
              if(o.axis!=="y" && !isVisible[1]){
                _scrollTo($this,to[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
              }
            },$this[0]._focusTimer);
          });
        },
        /* -------------------- */
        
        
        /* sets content wrapper scrollTop/scrollLeft always to 0 */
        _wrapperScroll=function(){
          var $this=$(this),d=$this.data(pluginPfx),
              namespace=pluginPfx+"_"+d.idx,
              wrapper=$("#mCSB_"+d.idx+"_container").parent();
          wrapper.bind("scroll."+namespace,function(e){
            if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){
              $(".mCSB_"+d.idx+"_scrollbar").css("visibility","hidden"); /* hide scrollbar(s) */
            }
          });
        },
        /* -------------------- */
        
        
        /* 
		BUTTONS EVENTS
		scrolls content via up, down, left and right buttons 
		*/
        _buttons=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
              namespace=pluginPfx+"_"+d.idx,
              sel=".mCSB_"+d.idx+"_scrollbar",
              btn=$(sel+">a");
          btn.bind("contextmenu."+namespace,function(e){
            e.preventDefault(); //prevent right click
          }).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace+" mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace+" mouseout."+namespace+" pointerout."+namespace+" MSPointerOut."+namespace+" click."+namespace,function(e){
            e.preventDefault();
            if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
            var btnClass=$(this).attr("class");
            seq.type=o.scrollButtons.scrollType;
            switch(e.type){
              case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown":
                if(seq.type==="stepped"){return;}
                touchActive=true;
                d.tweenRunning=false;
                _seq("on",btnClass);
                break;
              case "mouseup": case "touchend": case "pointerup": case "MSPointerUp":
              case "mouseout": case "pointerout": case "MSPointerOut":
                if(seq.type==="stepped"){return;}
                touchActive=false;
                if(seq.dir){_seq("off",btnClass);}
                break;
              case "click":
                if(seq.type!=="stepped" || d.tweenRunning){return;}
                _seq("on",btnClass);
                break;
            }
            function _seq(a,c){
              seq.scrollAmount=o.scrollButtons.scrollAmount;
              _sequentialScroll($this,a,c);
            }
          });
        },
        /* -------------------- */
        
        
        /* 
		KEYBOARD EVENTS
		scrolls content via keyboard 
		Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
		*/
        _keyboard=function(){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
              namespace=pluginPfx+"_"+d.idx,
              mCustomScrollBox=$("#mCSB_"+d.idx),
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              wrapper=mCSB_container.parent(),
              editables="input,textarea,select,datalist,keygen,[contenteditable='true']",
              iframe=mCSB_container.find("iframe"),
              events=["blur."+namespace+" keydown."+namespace+" keyup."+namespace];
          if(iframe.length){
            iframe.each(function(){
              $(this).bind("load",function(){
                /* bind events on accessible iframes */
                if(_canAccessIFrame(this)){
                  $(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
                    _onKeyboard(e);
                  });
                }
              });
            });
          }
          mCustomScrollBox.attr("tabindex","0").bind(events[0],function(e){
            _onKeyboard(e);
          });
          function _onKeyboard(e){
            switch(e.type){
              case "blur":
                if(d.tweenRunning && seq.dir){_seq("off",null);}
                break;
              case "keydown": case "keyup":
                var code=e.keyCode ? e.keyCode : e.which,action="on";
                if((o.axis!=="x" && (code===38 || code===40)) || (o.axis!=="y" && (code===37 || code===39))){
                  /* up (38), down (40), left (37), right (39) arrows */
                  if(((code===38 || code===40) && !d.overflowed[0]) || ((code===37 || code===39) && !d.overflowed[1])){return;}
                  if(e.type==="keyup"){action="off";}
                  if(!$(document.activeElement).is(editables)){
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    _seq(action,code);
                  }
                }else if(code===33 || code===34){
                  /* PgUp (33), PgDn (34) */
                  if(d.overflowed[0] || d.overflowed[1]){
                    e.preventDefault();
                    e.stopImmediatePropagation();
                  }
                  if(e.type==="keyup"){
                    _stop($this);
                    var keyboardDir=code===34 ? -1 : 1;
                    if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
                      var dir="x",to=Math.abs(mCSB_container[0].offsetLeft)-(keyboardDir*(wrapper.width()*0.9));
                    }else{
                      var dir="y",to=Math.abs(mCSB_container[0].offsetTop)-(keyboardDir*(wrapper.height()*0.9));
                    }
                    _scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
                  }
                }else if(code===35 || code===36){
                  /* End (35), Home (36) */
                  if(!$(document.activeElement).is(editables)){
                    if(d.overflowed[0] || d.overflowed[1]){
                      e.preventDefault();
                      e.stopImmediatePropagation();
                    }
                    if(e.type==="keyup"){
                      if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
                        var dir="x",to=code===35 ? Math.abs(wrapper.width()-mCSB_container.outerWidth(false)) : 0;
                      }else{
                        var dir="y",to=code===35 ? Math.abs(wrapper.height()-mCSB_container.outerHeight(false)) : 0;
                      }
                      _scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
                    }
                  }
                }
                break;
            }
            function _seq(a,c){
              seq.type=o.keyboard.scrollType;
              seq.scrollAmount=o.keyboard.scrollAmount;
              if(seq.type==="stepped" && d.tweenRunning){return;}
              _sequentialScroll($this,a,c);
            }
          }
        },
        /* -------------------- */
        
        
        /* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
        _sequentialScroll=function(el,action,trigger,e,s){
          var d=el.data(pluginPfx),o=d.opt,seq=d.sequential,
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              once=seq.type==="stepped" ? true : false,
              steplessSpeed=o.scrollInertia < 26 ? 26 : o.scrollInertia, /* 26/1.5=17 */
              steppedSpeed=o.scrollInertia < 1 ? 17 : o.scrollInertia;
          switch(action){
            case "on":
              seq.dir=[
                (trigger===classes[16] || trigger===classes[15] || trigger===39 || trigger===37 ? "x" : "y"),
                (trigger===classes[13] || trigger===classes[15] || trigger===38 || trigger===37 ? -1 : 1)
              ];
              _stop(el);
              if(_isNumeric(trigger) && seq.type==="stepped"){return;}
              _on(once);
              break;
            case "off":
              _off();
              if(once || (d.tweenRunning && seq.dir)){
                _on(true);
              }
              break;
          }
          
          /* starts sequence */
          function _on(once){
            if(o.snapAmount){seq.scrollAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0]==="x" ? o.snapAmount[1] : o.snapAmount[0];} /* scrolling snapping */
            var c=seq.type!=="stepped", /* continuous scrolling */
                t=s ? s : !once ? 1000/60 : c ? steplessSpeed/1.5 : steppedSpeed, /* timer */
                m=!once ? 2.5 : c ? 7.5 : 40, /* multiplier */
                contentPos=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)],
                ratio=[d.scrollRatio.y>10 ? 10 : d.scrollRatio.y,d.scrollRatio.x>10 ? 10 : d.scrollRatio.x],
                amount=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*(ratio[1]*m)) : contentPos[0]+(seq.dir[1]*(ratio[0]*m)),
                px=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*parseInt(seq.scrollAmount)) : contentPos[0]+(seq.dir[1]*parseInt(seq.scrollAmount)),
                to=seq.scrollAmount!=="auto" ? px : amount,
                easing=e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
                onComplete=!once ? false : true;
            if(once && t<17){
              to=seq.dir[0]==="x" ? contentPos[1] : contentPos[0];
            }
            _scrollTo(el,to.toString(),{dir:seq.dir[0],scrollEasing:easing,dur:t,onComplete:onComplete});
            if(once){
              seq.dir=false;
              return;
            }
            clearTimeout(seq.step);
            seq.step=setTimeout(function(){
              _on();
            },t);
          }
          /* stops sequence */
          function _off(){
            clearTimeout(seq.step);
            _delete(seq,"step");
            _stop(el);
          }
        },
        /* -------------------- */
        
        
        /* returns a yx array from value */
        _arr=function(val){
          var o=$(this).data(pluginPfx).opt,vals=[];
          if(typeof val==="function"){val=val();} /* check if the value is a single anonymous function */
          /* check if value is object or array, its length and create an array with yx values */
          if(!(val instanceof Array)){ /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
            vals[0]=val.y ? val.y : val.x || o.axis==="x" ? null : val;
            vals[1]=val.x ? val.x : val.y || o.axis==="y" ? null : val;
          }else{ /* array value (e.g. [100,100]) */
            vals=val.length>1 ? [val[0],val[1]] : o.axis==="x" ? [null,val[0]] : [val[0],null];
          }
          /* check if array values are anonymous functions */
          if(typeof vals[0]==="function"){vals[0]=vals[0]();}
          if(typeof vals[1]==="function"){vals[1]=vals[1]();}
          return vals;
        },
        /* -------------------- */
        
        
        /* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
        _to=function(val,dir){
          if(val==null || typeof val=="undefined"){return;}
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              wrapper=mCSB_container.parent(),
              t=typeof val;
          if(!dir){dir=o.axis==="x" ? "x" : "y";}
          var contentLength=dir==="x" ? mCSB_container.outerWidth(false)-wrapper.width() : mCSB_container.outerHeight(false)-wrapper.height(),
              contentPos=dir==="x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
              cssProp=dir==="x" ? "left" : "top";
          switch(t){
            case "function": /* this currently is not used. Consider removing it */
              return val();
              break;
            case "object": /* js/jquery object */
              var obj=val.jquery ? val : $(val);
              if(!obj.length){return;}
              return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
              break;
            case "string": case "number":
              if(_isNumeric(val)){ /* numeric value */
                return Math.abs(val);
              }else if(val.indexOf("%")!==-1){ /* percentage value */
                return Math.abs(contentLength*parseInt(val)/100);
              }else if(val.indexOf("-=")!==-1){ /* decrease value */
                return Math.abs(contentPos-parseInt(val.split("-=")[1]));
              }else if(val.indexOf("+=")!==-1){ /* inrease value */
                var p=(contentPos+parseInt(val.split("+=")[1]));
                return p>=0 ? 0 : Math.abs(p);
              }else if(val.indexOf("px")!==-1 && _isNumeric(val.split("px")[0])){ /* pixels string value (e.g. "100px") */
                return Math.abs(val.split("px")[0]);
              }else{
                if(val==="top" || val==="left"){ /* special strings */
                  return 0;
                }else if(val==="bottom"){
                  return Math.abs(wrapper.height()-mCSB_container.outerHeight(false));
                }else if(val==="right"){
                  return Math.abs(wrapper.width()-mCSB_container.outerWidth(false));
                }else if(val==="first" || val==="last"){
                  var obj=mCSB_container.find(":"+val);
                  return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
                }else{
                  if($(val).length){ /* jquery selector */
                    return dir==="x" ? _childPos($(val))[1] : _childPos($(val))[0];
                  }else{ /* other values (e.g. "100em") */
                    mCSB_container.css(cssProp,val);
                    methods.update.call(null,$this[0]);
                    return;
                  }
                }
              }
              break;
          }
        },
        /* -------------------- */
        
        
        /* calls the update method automatically */
        _autoUpdate=function(rem){
          var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
              mCSB_container=$("#mCSB_"+d.idx+"_container");
          if(rem){
            /* 
				removes autoUpdate timer 
				usage: _autoUpdate.call(this,"remove");
				*/
            clearTimeout(mCSB_container[0].autoUpdate);
            _delete(mCSB_container[0],"autoUpdate");
            return;
          }
          upd();
          function upd(){
            clearTimeout(mCSB_container[0].autoUpdate);
            if($this.parents("html").length===0){
              /* check element in dom tree */
              $this=null;
              return;
            }
            mCSB_container[0].autoUpdate=setTimeout(function(){
              /* update on specific selector(s) length and size change */
              if(o.advanced.updateOnSelectorChange){
                d.poll.change.n=sizesSum();
                if(d.poll.change.n!==d.poll.change.o){
                  d.poll.change.o=d.poll.change.n;
                  doUpd(3);
                  return;
                }
              }
              /* update on main element and scrollbar size changes */
              if(o.advanced.updateOnContentResize){
                d.poll.size.n=$this[0].scrollHeight+$this[0].scrollWidth+mCSB_container[0].offsetHeight+$this[0].offsetHeight+$this[0].offsetWidth;
                if(d.poll.size.n!==d.poll.size.o){
                  d.poll.size.o=d.poll.size.n;
                  doUpd(1);
                  return;
                }
              }
              /* update on image load */
              if(o.advanced.updateOnImageLoad){
                if(!(o.advanced.updateOnImageLoad==="auto" && o.axis==="y")){ //by default, it doesn't run on vertical content
                  d.poll.img.n=mCSB_container.find("img").length;
                  if(d.poll.img.n!==d.poll.img.o){
                    d.poll.img.o=d.poll.img.n;
                    mCSB_container.find("img").each(function(){
                      imgLoader(this);
                    });
                    return;
                  }
                }
              }
              if(o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad){upd();}
            },o.advanced.autoUpdateTimeout);
          }
          /* a tiny image loader */
          function imgLoader(el){
            if($(el).hasClass(classes[2])){doUpd(); return;}
            var img=new Image();
            function createDelegate(contextObject,delegateMethod){
              return function(){return delegateMethod.apply(contextObject,arguments);}
            }
            function imgOnLoad(){
              this.onload=null;
              $(el).addClass(classes[2]);
              doUpd(2);
            }
            img.onload=createDelegate(img,imgOnLoad);
            img.src=el.src;
          }
          /* returns the total height and width sum of all elements matching the selector */
          function sizesSum(){
            if(o.advanced.updateOnSelectorChange===true){o.advanced.updateOnSelectorChange="*";}
            var total=0,sel=mCSB_container.find(o.advanced.updateOnSelectorChange);
            if(o.advanced.updateOnSelectorChange && sel.length>0){sel.each(function(){total+=this.offsetHeight+this.offsetWidth;});}
            return total;
          }
          /* calls the update method */
          function doUpd(cb){
            clearTimeout(mCSB_container[0].autoUpdate);
            methods.update.call(null,$this[0],cb);
          }
        },
        /* -------------------- */
        
        
        /* snaps scrolling to a multiple of a pixels number */
        _snapAmount=function(to,amount,offset){
          return (Math.round(to/amount)*amount-offset); 
        },
        /* -------------------- */
        
        
        /* stops content and scrollbar animations */
        _stop=function(el){
          var d=el.data(pluginPfx),
              sel=$("#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal");
          sel.each(function(){
            _stopTween.call(this);
          });
        },
        /* -------------------- */
        
        
        /* 
		ANIMATES CONTENT 
		This is where the actual scrolling happens
		*/
        _scrollTo=function(el,to,options){
          var d=el.data(pluginPfx),o=d.opt,
              defaults={
                trigger:"internal",
                dir:"y",
                scrollEasing:"mcsEaseOut",
                drag:false,
                dur:o.scrollInertia,
                overwrite:"all",
                callbacks:true,
                onStart:true,
                onUpdate:true,
                onComplete:true
              },
              options=$.extend(defaults,options),
              dur=[options.dur,(options.drag ? 0 : options.dur)],
              mCustomScrollBox=$("#mCSB_"+d.idx),
              mCSB_container=$("#mCSB_"+d.idx+"_container"),
              wrapper=mCSB_container.parent(),
              totalScrollOffsets=o.callbacks.onTotalScrollOffset ? _arr.call(el,o.callbacks.onTotalScrollOffset) : [0,0],
              totalScrollBackOffsets=o.callbacks.onTotalScrollBackOffset ? _arr.call(el,o.callbacks.onTotalScrollBackOffset) : [0,0];
          d.trigger=options.trigger;
          if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){ /* always reset scrollTop/Left */
            $(".mCSB_"+d.idx+"_scrollbar").css("visibility","visible");
            wrapper.scrollTop(0).scrollLeft(0);
          }
          if(to==="_resetY" && !d.contentReset.y){
            /* callbacks: onOverflowYNone */
            if(_cb("onOverflowYNone")){o.callbacks.onOverflowYNone.call(el[0]);}
            d.contentReset.y=1;
          }
          if(to==="_resetX" && !d.contentReset.x){
            /* callbacks: onOverflowXNone */
            if(_cb("onOverflowXNone")){o.callbacks.onOverflowXNone.call(el[0]);}
            d.contentReset.x=1;
          }
          if(to==="_resetY" || to==="_resetX"){return;}
          if((d.contentReset.y || !el[0].mcs) && d.overflowed[0]){
            /* callbacks: onOverflowY */
            if(_cb("onOverflowY")){o.callbacks.onOverflowY.call(el[0]);}
            d.contentReset.x=null;
          }
          if((d.contentReset.x || !el[0].mcs) && d.overflowed[1]){
            /* callbacks: onOverflowX */
            if(_cb("onOverflowX")){o.callbacks.onOverflowX.call(el[0]);}
            d.contentReset.x=null;
          }
          if(o.snapAmount){ /* scrolling snapping */
            var snapAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : options.dir==="x" ? o.snapAmount[1] : o.snapAmount[0];
            to=_snapAmount(to,snapAmount,o.snapOffset);
          }
          switch(options.dir){
            case "x":
              var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_horizontal"),
                  property="left",
                  contentPos=mCSB_container[0].offsetLeft,
                  limit=[
                    mCustomScrollBox.width()-mCSB_container.outerWidth(false),
                    mCSB_dragger.parent().width()-mCSB_dragger.width()
                  ],
                  scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.x)],
                  tso=totalScrollOffsets[1],
                  tsbo=totalScrollBackOffsets[1],
                  totalScrollOffset=tso>0 ? tso/d.scrollRatio.x : 0,
                  totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.x : 0;
              break;
            case "y":
              var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_vertical"),
                  property="top",
                  contentPos=mCSB_container[0].offsetTop,
                  limit=[
                    mCustomScrollBox.height()-mCSB_container.outerHeight(false),
                    mCSB_dragger.parent().height()-mCSB_dragger.height()
                  ],
                  scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.y)],
                  tso=totalScrollOffsets[0],
                  tsbo=totalScrollBackOffsets[0],
                  totalScrollOffset=tso>0 ? tso/d.scrollRatio.y : 0,
                  totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.y : 0;
              break;
          }
          if(scrollTo[1]<0 || (scrollTo[0]===0 && scrollTo[1]===0)){
            scrollTo=[0,0];
          }else if(scrollTo[1]>=limit[1]){
            scrollTo=[limit[0],limit[1]];
          }else{
            scrollTo[0]=-scrollTo[0];
          }
          if(!el[0].mcs){
            _mcs();  /* init mcs object (once) to make it available before callbacks */
            if(_cb("onInit")){o.callbacks.onInit.call(el[0]);} /* callbacks: onInit */
          }
          clearTimeout(mCSB_container[0].onCompleteTimeout);
          _tweenTo(mCSB_dragger[0],property,Math.round(scrollTo[1]),dur[1],options.scrollEasing);
          if(!d.tweenRunning && ((contentPos===0 && scrollTo[0]>=0) || (contentPos===limit[0] && scrollTo[0]<=limit[0]))){return;}
          _tweenTo(mCSB_container[0],property,Math.round(scrollTo[0]),dur[0],options.scrollEasing,options.overwrite,{
            onStart:function(){
              if(options.callbacks && options.onStart && !d.tweenRunning){
                /* callbacks: onScrollStart */
                if(_cb("onScrollStart")){_mcs(); o.callbacks.onScrollStart.call(el[0]);}
                d.tweenRunning=true;
                _onDragClasses(mCSB_dragger);
                d.cbOffsets=_cbOffsets();
              }
            },onUpdate:function(){
              if(options.callbacks && options.onUpdate){
                /* callbacks: whileScrolling */
                if(_cb("whileScrolling")){_mcs(); o.callbacks.whileScrolling.call(el[0]);}
              }
            },onComplete:function(){
              if(options.callbacks && options.onComplete){
                if(o.axis==="yx"){clearTimeout(mCSB_container[0].onCompleteTimeout);}
                var t=mCSB_container[0].idleTimer || 0;
                mCSB_container[0].onCompleteTimeout=setTimeout(function(){
                  /* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
                  if(_cb("onScroll")){_mcs(); o.callbacks.onScroll.call(el[0]);}
                  if(_cb("onTotalScroll") && scrollTo[1]>=limit[1]-totalScrollOffset && d.cbOffsets[0]){_mcs(); o.callbacks.onTotalScroll.call(el[0]);}
                  if(_cb("onTotalScrollBack") && scrollTo[1]<=totalScrollBackOffset && d.cbOffsets[1]){_mcs(); o.callbacks.onTotalScrollBack.call(el[0]);}
                  d.tweenRunning=false;
                  mCSB_container[0].idleTimer=0;
                  _onDragClasses(mCSB_dragger,"hide");
                },t);
              }
            }
          });
          /* checks if callback function exists */
          function _cb(cb){
            return d && o.callbacks[cb] && typeof o.callbacks[cb]==="function";
          }
          /* checks whether callback offsets always trigger */
          function _cbOffsets(){
            return [o.callbacks.alwaysTriggerOffsets || contentPos>=limit[0]+tso,o.callbacks.alwaysTriggerOffsets || contentPos<=-tsbo];
          }
          /* 
			populates object with useful values for the user 
			values: 
				content: this.mcs.content
				content top position: this.mcs.top 
				content left position: this.mcs.left 
				dragger top position: this.mcs.draggerTop 
				dragger left position: this.mcs.draggerLeft 
				scrolling y percentage: this.mcs.topPct 
				scrolling x percentage: this.mcs.leftPct 
				scrolling direction: this.mcs.direction
			*/
          function _mcs(){
            var cp=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft], /* content position */
                dp=[mCSB_dragger[0].offsetTop,mCSB_dragger[0].offsetLeft], /* dragger position */
                cl=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false)], /* content length */
                pl=[mCustomScrollBox.height(),mCustomScrollBox.width()]; /* content parent length */
            el[0].mcs={
              content:mCSB_container, /* original content wrapper as jquery object */
              top:cp[0],left:cp[1],draggerTop:dp[0],draggerLeft:dp[1],
              topPct:Math.round((100*Math.abs(cp[0]))/(Math.abs(cl[0])-pl[0])),leftPct:Math.round((100*Math.abs(cp[1]))/(Math.abs(cl[1])-pl[1])),
              direction:options.dir
            };
            /* 
				this refers to the original element containing the scrollbar(s)
				usage: this.mcs.top, this.mcs.leftPct etc. 
				*/
          }
        },
        /* -------------------- */
        
        
        /* 
		CUSTOM JAVASCRIPT ANIMATION TWEEN 
		Lighter and faster than jquery animate() and css transitions 
		Animates top/left properties and includes easings 
		*/
        _tweenTo=function(el,prop,to,duration,easing,overwrite,callbacks){
          if(!el._mTween){el._mTween={top:{},left:{}};}
          var callbacks=callbacks || {},
              onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){},
              startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style,_request,tobj=el._mTween[prop];
          if(prop==="left"){from=el.offsetLeft;}
          var diff=to-from;
          tobj.stop=0;
          if(overwrite!=="none"){_cancelTween();}
          _startTween();
          function _step(){
            if(tobj.stop){return;}
            if(!progress){onStart.call();}
            progress=_getTime()-startTime;
            _tween();
            if(progress>=tobj.time){
              tobj.time=(progress>tobj.time) ? progress+_delay-(progress-tobj.time) : progress+_delay-1;
              if(tobj.time<progress+1){tobj.time=progress+1;}
            }
            if(tobj.time<duration){tobj.id=_request(_step);}else{onComplete.call();}
          }
          function _tween(){
            if(duration>0){
              tobj.currVal=_ease(tobj.time,from,diff,duration,easing);
              elStyle[prop]=Math.round(tobj.currVal)+"px";
            }else{
              elStyle[prop]=to+"px";
            }
            onUpdate.call();
          }
          function _startTween(){
            _delay=1000/60;
            tobj.time=progress+_delay;
            _request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;
            tobj.id=_request(_step);
          }
          function _cancelTween(){
            if(tobj.id==null){return;}
            if(!window.requestAnimationFrame){clearTimeout(tobj.id);
                                             }else{window.cancelAnimationFrame(tobj.id);}
            tobj.id=null;
          }
          function _ease(t,b,c,d,type){
            switch(type){
              case "linear": case "mcsLinear":
                return c*t/d + b;
                break;
              case "mcsLinearOut":
                t/=d; t--; return c * Math.sqrt(1 - t*t) + b;
                break;
              case "easeInOutSmooth":
                t/=d/2;
                if(t<1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
                break;
              case "easeInOutStrong":
                t/=d/2;
                if(t<1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
                t--;
                return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
                break;
              case "easeInOut": case "mcsEaseInOut":
                t/=d/2;
                if(t<1) return c/2*t*t*t + b;
                t-=2;
                return c/2*(t*t*t + 2) + b;
                break;
              case "easeOutSmooth":
                t/=d; t--;
                return -c * (t*t*t*t - 1) + b;
                break;
              case "easeOutStrong":
                return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
                break;
              case "easeOut": case "mcsEaseOut": default:
                var ts=(t/=d)*t,tc=ts*t;
                return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);
            }
          }
        },
        /* -------------------- */
        
        
        /* returns current time */
        _getTime=function(){
          if(window.performance && window.performance.now){
            return window.performance.now();
          }else{
            if(window.performance && window.performance.webkitNow){
              return window.performance.webkitNow();
            }else{
              if(Date.now){return Date.now();}else{return new Date().getTime();}
            }
          }
        },
        /* -------------------- */
        
        
        /* stops a tween */
        _stopTween=function(){
          var el=this;
          if(!el._mTween){el._mTween={top:{},left:{}};}
          var props=["top","left"];
          for(var i=0; i<props.length; i++){
            var prop=props[i];
            if(el._mTween[prop].id){
              if(!window.requestAnimationFrame){clearTimeout(el._mTween[prop].id);
                                               }else{window.cancelAnimationFrame(el._mTween[prop].id);}
              el._mTween[prop].id=null;
              el._mTween[prop].stop=1;
            }
          }
        },
        /* -------------------- */
        
        
        /* deletes a property (avoiding the exception thrown by IE) */
        _delete=function(c,m){
          try{delete c[m];}catch(e){c[m]=null;}
        },
        /* -------------------- */
        
        
        /* detects left mouse button */
        _mouseBtnLeft=function(e){
          return !(e.which && e.which!==1);
        },
        /* -------------------- */
        
        
        /* detects if pointer type event is touch */
        _pointerTouch=function(e){
          var t=e.originalEvent.pointerType;
          return !(t && t!=="touch" && t!==2);
        },
        /* -------------------- */
        
        
        /* checks if value is numeric */
        _isNumeric=function(val){
          return !isNaN(parseFloat(val)) && isFinite(val);
        },
        /* -------------------- */
        
        
        /* returns element position according to content */
        _childPos=function(el){
          var p=el.parents(".mCSB_container");
          return [el.offset().top-p.offset().top,el.offset().left-p.offset().left];
        },
        /* -------------------- */
        
        
        /* checks if browser tab is hidden/inactive via Page Visibility API */
        _isTabHidden=function(){
          var prop=_getHiddenProp();
          if(!prop) return false;
          return document[prop];
          function _getHiddenProp(){
            var pfx=["webkit","moz","ms","o"];
            if("hidden" in document) return "hidden"; //natively supported
            for(var i=0; i<pfx.length; i++){ //prefixed
              if((pfx[i]+"Hidden") in document) 
                return pfx[i]+"Hidden";
            }
            return null; //not supported
          }
        };
    /* -------------------- */
    
    
    
    
    
    /* 
	----------------------------------------
	PLUGIN SETUP 
	----------------------------------------
	*/
    
    /* plugin constructor functions */
    $.fn[pluginNS]=function(method){ /* usage: $(selector).mCustomScrollbar(); */
      if(methods[method]){
        return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
      }else if(typeof method==="object" || !method){
        return methods.init.apply(this,arguments);
      }else{
        $.error("Method "+method+" does not exist");
      }
    };
    $[pluginNS]=function(method){ /* usage: $.mCustomScrollbar(); */
      if(methods[method]){
        return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
      }else if(typeof method==="object" || !method){
        return methods.init.apply(this,arguments);
      }else{
        $.error("Method "+method+" does not exist");
      }
    };
    
    /* 
	allow setting plugin default options. 
	usage: $.mCustomScrollbar.defaults.scrollInertia=500; 
	to apply any changed default options on default selectors (below), use inside document ready fn 
	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
	*/
    $[pluginNS].defaults=defaults;
    
    /* 
	add window object (window.mCustomScrollbar) 
	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
	*/
    window[pluginNS]=true;
    
    $(window).bind("load",function(){
      
      $(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */
      
      /* extend jQuery expressions */
      $.extend($.expr[":"],{
        /* checks if element is within scrollable viewport */
        mcsInView:$.expr[":"].mcsInView || function(el){
          var $el=$(el),content=$el.parents(".mCSB_container"),wrapper,cPos;
          if(!content.length){return;}
          wrapper=content.parent();
          cPos=[content[0].offsetTop,content[0].offsetLeft];
          return 	cPos[0]+_childPos($el)[0]>=0 && cPos[0]+_childPos($el)[0]<wrapper.height()-$el.outerHeight(false) && 
            cPos[1]+_childPos($el)[1]>=0 && cPos[1]+_childPos($el)[1]<wrapper.width()-$el.outerWidth(false);
        },
        /* checks if element or part of element is in view of scrollable viewport */
        mcsInSight:$.expr[":"].mcsInSight || function(el,i,m){
          var $el=$(el),elD,content=$el.parents(".mCSB_container"),wrapperView,pos,wrapperViewPct,
              pctVals=m[3]==="exact" ? [[1,0],[1,0]] : [[0.9,0.1],[0.6,0.4]];
          if(!content.length){return;}
          elD=[$el.outerHeight(false),$el.outerWidth(false)];
          pos=[content[0].offsetTop+_childPos($el)[0],content[0].offsetLeft+_childPos($el)[1]];
          wrapperView=[content.parent()[0].offsetHeight,content.parent()[0].offsetWidth];
          wrapperViewPct=[elD[0]<wrapperView[0] ? pctVals[0] : pctVals[1],elD[1]<wrapperView[1] ? pctVals[0] : pctVals[1]];
          return 	pos[0]-(wrapperView[0]*wrapperViewPct[0][0])<0 && pos[0]+elD[0]-(wrapperView[0]*wrapperViewPct[0][1])>=0 && 
            pos[1]-(wrapperView[1]*wrapperViewPct[1][0])<0 && pos[1]+elD[1]-(wrapperView[1]*wrapperViewPct[1][1])>=0;
        },
        /* checks if element is overflowed having visible scrollbar(s) */
        mcsOverflow:$.expr[":"].mcsOverflow || function(el){
          var d=$(el).data(pluginPfx);
          if(!d){return;}
          return d.overflowed[0] || d.overflowed[1];
        }
      });
      
    });
    
  }))}));



function generateTestimonialScroll(targetDiv){
  var cWidth = $j(window).width();
  if(cWidth>991){
    if($j('#'+targetDiv+' .module-testimonial-tabs').hasClass('mCustomScrollbar')){
      $j('#'+targetDiv+' .module-testimonial-tabs').mCustomScrollbar("destroy");
    }
    $j('#'+targetDiv+' .module-testimonial-tabs').mCustomScrollbar({ 
      axis:"y", 
      theme:"dark-thin",
      advanced:{autoExpandHorizontalScroll:true}
    });
  }else{
    if($j('#'+targetDiv+' .module-testimonial-tabs').hasClass('mCustomScrollbar')){
      $j('#'+targetDiv+' .module-testimonial-tabs').mCustomScrollbar("destroy");
    }
  }
}

$j(document).ready(function(){
  $j('.module-testimonial').each(function(){
    var modId=$j(this).attr('id');
    generateTestimonialScroll(modId)
  });
});

$j(window).resize(function(){
  
  $j('.module-testimonial').each(function(){
    var modId=$j(this).attr('id');
    generateTestimonialScroll(modId)
  });
});
/*!---- inv-video-----*/
$j(document).ready(function () {
  //$j('.banner-text-wrap .videoplay a, .video-item-content a').click(function() {
  var w;
  if($j(window).width()>1440){
    w=840;
  }else if($j(window).width()>480 && $j(window).width()<767){
    w=$j(window).width()*0.6;
  }else{
    w=$j(window).width()*0.8;
  }
  var h=((w/16)*9);
  var htube=((w/16)*9 + 10);
  if(h<=160){
    h = 160;
  }
  var vidDiv = $j('.banner-text-wrap, .three-col-signpost, .download-doc').find('.videowrapper .angloVideoContainer');
  var vidDivInsta = "#"+$j(vidDiv).children('div').attr('id');
	//$j(vidDivInsta).InvPlayer();
var vidID1 = $j(vidDiv).children('div').attr('id');
if( vidID1 && vidID1 !== undefined ){
    $j(vidDivInsta).InvPlayer();
}

  var cboxOptions1 = {
    href:vidDiv,
    inline:true,
    width:w,
    height:h,
    escKey:true,
    maxWidth: 840,
    maxHeight: 474,
    onOpen:function(){
      $j(".videowrapper").show();
      $j(vidDivInsta).InvPlayer();
      $j('body').addClass('colorbox-on');
    },onClosed:function(){ 
      $j(".hero-inner-banner .banner-bg > .angloVideoContainer .inv_playerContainer").InvPlayer().done(function(e) {
        e.playVideo();
      });
      $j(".videowrapper").hide();
      $j('body').removeClass('colorbox-on');
      $j(vidDivInsta).InvPlayer().done(function(e) {
        e.pauseVideo();
      });
    },onCleanup:function(){ 
      $j(".videowrapper").hide();
      $j(vidDivInsta).InvPlayer().done(function(e) {
        e.pauseVideo();
      });
    }
  };
  $j(".video-thumb-wrapper a").colorbox(cboxOptions1);
  

  var cboxOptionsVidMod = {
    //href:vidDiv,
    inline:true,
    width:w,
    height:h,
    escKey:true,
    maxWidth: 840,
    maxHeight: 474,
    href:"#video-mod-content",
    onOpen:function(){
    vId = $j(this).attr('data-video-id');
    DvType = $j(this).attr('data-video-type');
    if (DvType === ""){
      $j("#video-mod-content").html('<div class="angloVideoContainer"><div id="'+vId+'" class="inv_playerContainer" data-inv_videoDataType="brightcove" data-inv_videoId="'+vId+'" data-inv_playerType="singleplayer"></div></div>');
    }
    else{
      $j("#video-mod-content").html('<div class="angloVideoContainer"><div id="inv_playerContainer" class="inv_playerContainer" data-inv_videoDataType="youtube" data-inv_videoId="'+vId+'" data-inv_playerType="singleplayer"></div></div>');    
    }
   // console.log('div[data-inv_videoid="'+vId+'"]');
      $j('div[data-inv_videoid="'+vId+'"]').InvPlayer();
      $j('div[data-inv_videoid="'+vId+'"]').InvPlayer().done(function(e) {
        setTimeout(function(){
          e.playVideo();
        },5000);
     });

    },onCleanup:function(){      
      $j('div[cboxOptionsVidMod="'+vId+'"]').InvPlayer().done(function(e) {
        e.stopVideo();
      $j('div[data-inv_videoid="'+vId+'"]').hide();	
      });
    },onClosed:function(){
      $j('div[data-inv_videoid="'+vId+'"]').empty();
      $j('div[data-inv_videoid="'+vId+'"]').remove();
    }
  }  ;
$j(".video-gallery-module a.play-video,.video-gallery-content-wrapper a.play-video").colorbox(cboxOptionsVidMod);
  
  /*---   Video popup for ir presentation starts   ---*/
  var rcCboxOptionsIRP = {
    width:w,
    height:h,
    maxWidth: 840,
    maxHeight: 474,
    inline:true,
    escKey:false,
    href:"#irp-video-content",
    onOpen:function(){
      vId = $j(this).attr("href");
      $j("#irp-video-content").html('<div class="angloVideoContainer"><div id="inv_playerContainer_irp" class="inv_playerContainer" data-inv_videoDataType="brightcove" data-inv_videoId="'+vId+'" data-inv_playerType="singleplayer"></div></div>');
      $j("#inv_playerContainer_irp").InvPlayer();
    },onCleanup:function(){      
      $j("#inv_playerContainer_irp").InvPlayer().done(function(e) {
        e.stopVideo();
      });
    },onClosed:function(){
      $j("#inv_playerContainer_irp").hide();	
      $j("#inv_playerContainer_irp").empty();
      $j("#inv_playerContainer_irp").remove();
      $j("#cboxClose").addClass("vclosebtn");
    }
  };
  $j(".ir-announcements-page a.irp-vid-lnk, .ir-presentation-page a.irp-vid-lnk").colorbox(rcCboxOptionsIRP);
  /*---   Video popup for investor presentation   ---*/
  

  var cboxOptions = {
    //iframe:true,
    width:w,
    height:htube,
    maxWidth: 840,
    maxHeight: 474,
    inline:true,
    escKey:false,
    href:"#video-content",
    onOpen:function(){
      vId = $j(this).attr("data-href");
      $j("#video-content").html('<div class="angloVideoContainer"><div id="inv_playerContainer" class="inv_playerContainer" data-inv_videoDataType="youtube" data-inv_videoId="'+vId+'" data-inv_playerType="singleplayer"></div></div>');
    $j("#inv_playerContainer").InvPlayer();
      $j("#inv_playerContainer").InvPlayer().done(function(e) {
        setTimeout(function(){
          e.playVideo();
        },5000);
      });
    },onCleanup:function(){
      
      $j("#inv_playerContainer").InvPlayer().done(function(e) {
        e.stopVideo();
      });
    },onClosed:function(){
      $j("#inv_playerContainer").hide();	
      $j("#inv_playerContainer").empty();
      $j("#inv_playerContainer").remove();
      $j("#cboxClose").addClass("vclosebtn");
    }
  };
  $j(".download-doc .rc-item-link.prevres-videolink").colorbox(cboxOptions);
  
  $j(".video-gallery-container .video-item").each(function(){
    var videoUrl = $j(this).find(".video-item-content > a").attr("data-href");
    if (videoUrl == undefined){
    }
    else{
     // var videoSplash = videoUrl.split("/");
     // var videoIdMix = videoSplash[videoSplash.length-1];
      var videoId = "";
//       if(videoIdMix.indexOf("?") != "-1")
//         videoId = videoIdMix.substring(0,videoSplash[videoSplash.length-1].indexOf("?"));
//       else
      //  videoId = videoIdMix;
      $j(this).find(".video-thumbnail").attr("src","https://img.youtube.com/vi/"+videoUrl+"/mqdefault.jpg");
        setEqualHeight_CommonClass('.video-gallery-container .video-item-content');

    }
  });
  
  $j(".video-item-content a").colorbox(cboxOptions);
  
  $j(".hero-inner-banner .banner-bg > .angloVideoContainer .inv_playerContainer, .hero-slider .banner-bg > .angloVideoContainer .inv_playerContainer").each(function() {
    var vidId = $j(this).attr('id');
    $j("#"+vidId).InvPlayer().done(function(e) {
      e.playVideo();
    });
  });
  

 
  /*result centre video item*/
  var rcCboxOptions = {
    //iframe:true,
    width:w,
    height:h,
    maxWidth: 840,
    maxHeight: 474,
    inline:true,
    escKey:false,
    href:"#rc-video-content",
    onOpen:function(){
      vId = $j(this).attr("data-href");
      vType = $j(this).attr("data-videotype");
      $j("#rc-video-content").html('<div class="angloVideoContainer"><div id="inv_playerContainer_rc" class="inv_playerContainer" data-inv_videoDataType="'+vType+'" data-inv_videoId="'+vId+'" data-inv_playerType="singleplayer" data-inv_enableChapters="true" data-inv_enableTranscripts="true"></div></div>');
      $j("#inv_playerContainer_rc").InvPlayer();
    },onCleanup:function(){
      
      $j("#inv_playerContainer_rc").InvPlayer().done(function(e) {
        e.stopVideo();
      });
    },onClosed:function(){
      $j("#inv_playerContainer_rc").hide();	
      $j("#inv_playerContainer_rc").empty();
      $j("#inv_playerContainer_rc").remove();
      $j("#cboxClose").addClass("vclosebtn");
    }
  };
  //$j(".result-centre-content .rc-item-link.prevres-videolink").colorbox(rcCboxOptions);
    $j(".result-centre-content .rc-item-link.prevres-videolink").colorbox(rcCboxOptions);

  
  /*module 2 col block with image item*/
  var rcCboxOptions1 = {
    //iframe:true,
    width:w,
    height:h,
    maxWidth: 840,
    maxHeight: 474,
    inline:true,
    escKey:false,
    href:"#rc-video-content",
    onOpen:function(){
      vId = $j(this).attr("data-href");
      vType = $j(this).attr("data-videotype");
      $j("#rc-video-content").html('<div class="angloVideoContainer"><div id="inv_playerContainer_rc" class="inv_playerContainer" data-inv_videoDataType="'+vType+'" data-inv_videoId="'+vId+'" data-inv_playerType="singleplayer" data-inv_enableChapters="true" data-inv_enableTranscripts="true"></div></div>');
      $j("#inv_playerContainer_rc").InvPlayer();
    },onCleanup:function(){
      
      $j("#inv_playerContainer_rc").InvPlayer().done(function(e) {
        e.stopVideo();
      });
    },onClosed:function(){
      $j("#inv_playerContainer_rc").hide();	
      $j("#inv_playerContainer_rc").empty();
      $j("#inv_playerContainer_rc").remove();
      $j("#cboxClose").addClass("vclosebtn");
    }
  };
  $j("a.video-signpost-link").colorbox(rcCboxOptions);
/*----------meet-the-difference-makers----------*/
setTimeout(function(){
if (window.location.href.indexOf("#") > -1) {
    var url=window.location.href;
    var arr=url.split('#')[1];
    var VidArr=url.split('=')[1];
    $j('div[data-video-id="'+VidArr+'"]').trigger('click');
  }
},5000);

});



function resizeVideoPlayer(){
  var obj={};
  //var widthInPercentage=90;
  var hightOfContentExceptVideoPlayer=15;
  if($j(window).width()>1440){
    obj.w=840;
  }else if($j(window).width()>480 && $j(window).width()<767){
    obj.w=$j(window).width()*0.6;
  }else{
    obj.w=($j(window).width()*0.8);
  }
  obj.h=(obj.w/16)*9 - hightOfContentExceptVideoPlayer + 10;	
  if(obj.h<=160){
    obj.h = 160;
  }
  $j.fn.colorbox.resize({width:(obj.w+'px'),height:(obj.h+'px')});					
}

$j(window).resize(function(){resizeVideoPlayer();});


$j('.body').on('click', '.inv_fullscreenBtn', function() {
    alert();
    $j("#auto-top-link").addClass("hide");
});
$j(document).keydown(function(e){
  if(e.keyCode == 27) {
    if($j(".video-contentpage-inner").hasClass("inv_FullScreen_Other")){
     	$j("#auto-top-link").removeClass("hide");
    } 	
  }  
});
/*!---- cookies-consent-----*/
var _cookiePlaceHolderSelector = "#headerwrapper"; // placeholder for cookie consent data and accept button
var _cookieWrapper = "_cookieConsentWrapper";
var _cookieName = "_cookieConsent"; // name of the cookie which will be used to store flag if user has clicked on i accept button
//var _cookieTimeout = 16; // Time in SECONDS after which the cookie consent will disappear

var _cookieContent = '<div class="cookie-consent-inner"><p>This site uses cookies. To see how cookies are used, please review our <a href="/site-services/cookie-policy">cookie policy</a>. If you agree to our use of cookies, please continue to use our site.</p> <input name="cookieagree" id="cookie-agree" onclick="setCookies();" value="Continue" type="button"></div>';

// disclaimer content
document.write('<style type="text/css">');
document.write('#' + _cookieWrapper + '{padding:15px 5px 20px; position: fixed; bottom: 0; width: 100%; z-index: 99999; border-top: 3px solid #00368b;}');
document.write('#' + _cookieWrapper + ' p{color:#545454; margin:0 5px; padding-bottom:0; line-height:26px;}');
document.write('#' + _cookieWrapper + ' a{color:#545454;text-decoration:underline}');
document.write('#' + _cookieWrapper + ' a:hover{color:#545454;}');
document.write('#' + _cookieWrapper + ' input{cursor:pointer; border:0px;}');
document.write('</style>');

function setCookies(name, value, hours) {

    name = typeof name !== 'undefined' ? name : _cookieName;
    value = typeof value !== 'undefined' ? value : 'yes';
    hours = typeof hours !== 'undefined' ? hours : 8760;
    var expire = "";
    if (hours != null) {
        expire = new Date((new Date()).getTime() + hours * 86400000);
        expire = "; expires=" + expire.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expire + "; path=/";
    $j("#" + _cookieWrapper).slideUp().promise().done(function() {
  });
  
/*-------------------------Setting of Section Div height Etc on cookie wrapper close Ends-----------------------*/ 
}

function GetCookie(name) {
    var cookieValue = "";
    var search = name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) end = document.cookie.length;
            cookieValue = unescape(document.cookie.substring(offset, end));
        }
    }
    return cookieValue;
}

function checkCookies() {
    var cval = GetCookie(_cookieName);
    if (cval == "yes") {
        $j("#" + _cookieWrapper).css("display", "none");
    } else {
        $j("#" + _cookieWrapper).slideDown(800);
        //startTimeout();
    }
}
/*function startTimeout(){
	setTimeout(function(){
		$j("#" + _cookieWrapper).slideUp(600).promise().done(function() {
  });
    },_cookieTimeout*1000);
}*/
function cookieSetup() {
    wrapperDiv = '<div id="' + _cookieWrapper + '">' + _cookieContent + '</div>';
    $j(wrapperDiv).insertBefore($j(_cookiePlaceHolderSelector));
    checkCookies();
}
window.onload = cookieSetup;
/*!---- leadership-team-----*/
$j(document).ready(function () {

/*---   BOD Module Starts   ---*/
if( $j(".module-bod .module-bod-wrapper.two-col .bod-item").length > 0 && $j(".module-bod .module-bod-wrapper.two-col .bod-item a.stmtlink").length > 0 ) {
$j(".module-bod .module-bod-wrapper.two-col .bod-item").each(function(){

var hrf = $j(this).find('a.stmtlink').attr('data-frh');
var str2 = "/leadership-team/";
if(hrf.indexOf(str2) != -1){
    $j(this).find('a.stmtlink').attr('href',hrf);
}
});
}
/*---   BOD Module Ends   ---*/

/*----    Leadership age calculation starts    ----*/
if ( $j('span.bod-age').length > 0 ) {
  $j('span.bod-age').each(function () {
    
    //var dateString, dateFinal;
    var dateString = $j(this).text().split(' ');    
    var dateFinal = dateString[0];
    
    if (isDate(dateFinal) ) {
    var age = calculateAge(parseDate(dateFinal), new Date());
     //alert(age);
if( isNaN(age) ){
 var age = '';
 var ht = $j(this).prev().html() + age + ".";
}
else{
var ht = $j(this).prev().html() + ", " + age + ".";
}
      $j(this).prev().html(ht);
    } else {
      $j(this).text('');
    }   
    
  });
}
  /*----    Leadership age calculation ends    ----*/

/*----    Leadership team async starts    ----*/
  $j('ul.rb-tabs li:eq(0)').addClass('current');

  $j('.leadership-team-landing ul.rb-tabs li a').on("click", function(e) {

e.preventDefault();

var dtnm = $j(this).parent().attr("data-year");
$j('.leadership-team-landing .bod-introtext div').each(function(){
if( $j(this).attr("data-intro") == 'intro-' + dtnm ){
$j('.leadership-team-landing .bod-introtext div').hide();
$j(this).fadeIn();
}
});
    
    if (!($j(this).parent().hasClass("current"))) {
      
      $j('ul.rb-tabs li').removeClass('current');      
      $j(this).parent().addClass('current');
      
    }
return false;
  });
/*----    Leadership team async ends    ----*/

});  //  End of document ready

//convert the date string in the format of dd/mm/yyyy into a JS date object
function parseDate(dateStr) {
  var dateParts = dateStr.split("/");
  return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
}

//is valid date format
function calculateAge (dateOfBirth, dateToCalculate) {
  var calculateYear = dateToCalculate.getFullYear();
  var calculateMonth = dateToCalculate.getMonth();
  var calculateDay = dateToCalculate.getDate();
  
  var birthYear = dateOfBirth.getFullYear();
  var birthMonth = dateOfBirth.getMonth();
  var birthDay = dateOfBirth.getDate();
  
  var age = calculateYear - birthYear;
  var ageMonth = calculateMonth - birthMonth;
  var ageDay = calculateDay - birthDay;
  
  if (ageMonth < 0 || (ageMonth == 0 && ageDay < 0)) {
    age = parseInt(age) - 1;
  }
  return age;
}

function isDate(txtDate) {
  var currVal = txtDate;
  if (currVal == '')
    return true;
  
  //Declare Regex
  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
  var dtArray = currVal.match(rxDatePattern); // is format OK?
  
  if (dtArray == null)
    return false;
  
  //Checks for dd/mm/yyyy format.
  var dtDay = dtArray[1];
  var dtMonth = dtArray[3];
  var dtYear = dtArray[5];
  
  if (dtMonth < 1 || dtMonth > 12)
    return false;
  else if (dtDay < 1 || dtDay > 31)
    return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
      return false;
      else if (dtMonth == 2) {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap))
          return false;
      }
  
  return true;
}
/*!---- plc-main-----*/
$j(window).on("load", function() {
	$j('.main-menu #rd-nav-media-level1').remove();
    $j('.main-menu #rd-nav-suppliers-level1').remove();
    $j('.main-menu #rd-nav-contact-us-level1').remove();
    $j('.main-menu ul li:last-child').addClass('last');
});

/*!---- solrsearchglobal-----*/
//CONST- CHANGE ALL THESE TO TELL SOLRSTRAP ABOUT THE LOCATION AND STRUCTURE OF YOUR SOLR
var APIURI = "/tools/urlproxy/advurlproxy.aspx?settingname=solrservice"; //API URI
//CONST- CHANGE ALL THESE TO TELL SOLRSTRAP ABOUT THE LOCATION AND STRUCTURE OF YOUR SOLR
var APIPOPULARSEARCH = "/tools/urlproxy/advurlproxy.aspx?settingname=popularsearch"; //API URI

//Site specific parameters
var CLIENT = "Anglo";
var LANGUAGE = "en";
//var AUTOCOMPLETEFIELD = "tnt_txt_" + LANGUAGE;
var AUTOCOMPLETEFIELD = "general_text";
var ENABLEDGENERALSEARCH = "true";
var TAB_METATAG = "meta_section";
var HOST_NAME = "angloamerican.com";

var FIELDS = "absoluteurl, title, titleh1, score, id, header_date_publish-date, otptoolname, solrdocumenttype, meta_about, meta_thumb, meta_products, meta_date,meta_suppliers,meta_sustainability,meta_media,meta_investors,meta_careers,meta_futuresmart,meta_image,meta_video,meta_isfeatured,meta_date,metanum_filesize";
//By default: absoluteurl,title,score,id,publishdate
var HITTITLE = 'title';
var HITTITLEH1 = 'titleh1';
//Name of the title field- the heading of each hit
var HITBODY = 'text';
var HITPUBLISHDATE = "header_date_publish-date";
var HITSPERPAGE = 15;
var PAGESIZE = 0;
var CURRENTPAGE = 0;
//page size- hits per page
var FACETS = ['solrdocumenttype','meta_site', 'meta_domain', 'otptoolname'];
var FACETS_TITLES = {
  'solrdocumenttype': 'Content type',
  'meta_site': 'Group website',
  'meta_domain': 'Related domains',
  'header_date_publish-date': 'Publish Date',
  'otptoolname': 'Feeds'
};
var TABS = ['about', 'products', 'sustainability', 'media', 'investors', 'suppliers', 'careers', 'futuresmart'];
var TABS_TITLES = {
  'about': 'About Us',
  'products': 'Products',
  'sustainability': 'Sustainability',
  'media': 'Media',
  'investors': 'Investors',
  'suppliers': 'Suppliers',
  'careers': 'Careers',
  'futuresmart': 'Futuresmart'
};
var FACETS_ALIAS = {
  'american': 'Anglo American',
  'australia': 'Australia',
  'brazil': 'Brazil',
  'chile': 'Chile',
  'china': 'China',
  'finland': 'Finland',
  'peru': 'Peru',
  'southafrica': 'South Africa',
  'angloamericangroupfoundation': 'Anglo American Group Foundation',
  'debeersgroup': 'De Beers Group',  
  'anglokumba': 'Kumba Iron Ore',
  'platinum': 'Platinum',
  'history': 'History',
  'RNS': 'Regulatory news',
  'anglo': 'Anglo American',
  'WebPage': 'Web page'
};
var SEARCHKEYWORDBOAST = "meta_searchkeywords_txt_";
var TITLEBOAST = "title_txt_";
var H1TAGBOAST = "titleh1_txt_";
var METADESCRIPTIONBOAST = "description_txt_";
var HITID = 'id';
var HITLINK = 'absoluteurl';
var THUMB_URL = 'meta_thumb';
var VIDEO_URL = 'meta_video';
var IMAGE_URL = 'meta_image';
var BOD_NAME = 'meta_bodname';
var FILE_SIZE = "metanum_filesize";
var SHOW_DATE = "meta_date";
var HL = true;
var HL_FL = METADESCRIPTIONBOAST + LANGUAGE + ",text";
var HL_SIMPLE_PRE = '%3Cb%3E';
var HL_SIMPLE_POST = '%3C%2Fb%3E';
var HL_SNIPPETS = 1;
var HL_FRAGSIZE = 320;
var FORMTYPE = "meta_seccategory";
var TAG = 'otptoolname';
var AUTOSEARCH_DELAY = 5;
var OTPENABLED = 'true';
var OTPLANGUAGE = 'en-GB';
var OTPTOOLS = ['rns'];
var OTPCAT = [];
var submitClicked = false;   
var MINDESCRIPTIONLENGTH = 5;
var TEMPLATES;
var solrPDFimg = '/~/media/images/a/Anglo-American-Group/Universal/css/pdf-doc-icon.jpg';
var solrXLSimg = '/~/media/images/a/Anglo-American-Group/Universal/css/excel-icon.jpg';
var solrDOCimg = '/~/media/images/a/Anglo-American-Group/Universal/css/word-icon.jpg';
var solrPPTimg= '/~/media/images/a/Anglo-American-Group/Universal/css/ppt-icon.jpg';
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/*!---- futuresmart-new-----*/
$j(document).ready(function(){	


//Soms code for Glossary

$j(document).on("click",".glossary-navigation ul li:not(.active)",function(){
$j(".glossary-navigation ul li").removeClass("active");
$j(this).addClass("active");
$j.ajax({
type:'GET',
url:window.location.href + "?async=1&pagename=" + $j(this).data("id"),
success:function(data){
$j(".glossary-content").html(data);
$j(".glossary-content").css("visibility","visible");
}
});
});

/*$j(".lin").on('click',function(){
var onclick = $j(this).attr('href');
onclick="window.open(this.href,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'),return false;";
});*/

	$j(".story-twocolimg:empty").hide();        
    setEqualHeight_CommonClass('.story-wrap .story-content');
    setEqualHeight_CommonClass('.slidercat-landing .story-content');
    setEqualHeight_CommonClass('.sec2-eqht');
    setEqualHeight_CommonClass('#ourindustry .gr-slide-text-box-wrapper');
	setEqualHeight_CommonClass('#ourworld .gr-slide-text-box-wrapper');
    
    setEqualHeight_CommonClass('.storyeqht');	
    
    if ( $j(window).width() < 767) {	
    $j(".slider-section-slides-wrapper").attr("dir", "ltr");
	}
     
	if($j(".story-detail").length > 0){ 
	var z = 1;
    $j(".pagySet ul li").each(function() {
         $j(this).attr("data-counter", z);
         if ($j(this).hasClass("current") && !$j(this).hasClass("first") && !$j(this).hasClass("last")) {             
             var nextLink = $j(this).next().attr("data-url");             
             var nextTitle = $j(this).next().html();
             var prevLink = $j(this).prev().attr("data-url");
             var prevTitle = $j(this).prev().html();
             $j(".storynav.next a").attr("href", nextLink);
             $j(".storynav.next a").html(nextTitle);
             $j(".storynav.prev a").attr("href", prevLink);
             $j(".storynav.prev a").html(prevTitle);
         }
         else if($j(this).hasClass("current") && $j(this).hasClass("first")){
         	 var nextLink = $j(this).next().attr("data-url");             
             var nextTitle = $j(this).next().html();
             var prevLink = $j(".pagySet ul li.last").attr("data-url");
             var prevTitle = $j(".pagySet ul li.last").html();
             $j(".storynav.next a").attr("href", nextLink);
             $j(".storynav.next a").html(nextTitle);
             $j(".storynav.prev a").attr("href", prevLink);
             $j(".storynav.prev a").html(prevTitle);
         }
          else if($j(this).hasClass("current") && $j(this).hasClass("last")){
         	 var nextLink = $j(".pagySet ul li.first").attr("data-url");             
             var nextTitle = $j(".pagySet ul li.first").html();
             var prevLink = $j(".pagySet ul li.last").attr("data-url");
             var prevTitle = $j(".pagySet ul li.last").html();
             $j(".storynav.next a").attr("href", nextLink);
             $j(".storynav.next a").html(nextTitle);
             $j(".storynav.prev a").attr("href", prevLink);
             $j(".storynav.prev a").html(prevTitle);
         }
         z++;
     });  
     //if($j(".full-list li.last").hasClass("current"))
		//$j(".storynav.next").hide();     
      //if($j(".full-list li.first").hasClass("current"))     
		//$j(".storynav.prev").hide();     
  }
   
$j(".device-subnav-title").click(function(){
    $j(".subcategorynav").slideToggle();
    $j(".device-subnav-title").toggleClass("active");
     //added by Soms 15 Jan 2018
       if($j(".device-category-title").hasClass("active")){
       $j(".maincategorynav-wrapper").slideToggle();
    $j(".device-category-title").toggleClass("active");
       }
       
});

$j(".sharetablet-icn").click(function(){
    $j(".story-item-social").animate({
            /*height: "toggle",*/
            opacity: "toggle"
        }, "slow");    
});

$j(".device-category-title").click(function(){
    $j(".maincategorynav-wrapper").slideToggle();
    $j(".device-category-title").toggleClass("active");
    //added by Soms 15 Jan 2018
    if($j(".device-subnav-title").hasClass("active")){
    $j(".subcategorynav").slideToggle();
    $j(".device-subnav-title").toggleClass("active");
    }
     
});

function rearrangeObjects() {
 

}
});



$j(window).on("orientationchange load resize", function () {
setEqualHeight_CommonClass('.story-wrap .story-content');

//setEqualHeight_CommonClass('.storyeqht');

setTimeout(function(){
setEqualHeight_CommonClass('.eq-heightsection1');
setEqualHeight_CommonClass('.eq-heightsection2');
}, 200);

setTimeout(function(){
setEqualHeight_CommonClass('.gr-slide-text-box-wrapper');
setEqualHeight_CommonClass('.sec2-eqht');
currWidth = $j(window).width();
if (currWidth < 767) {
setEqualHeight_CommonClass('.nextprev-story-content');
}
}, 100);
});


$j(window).on("load", function() {

$j(".glossary-navigation ul li:first-child").trigger("click");

setEqualHeight_CommonClass('.story-wrap .story-content');
setEqualHeight_CommonClass('.slidercat-landing .story-content');
setEqualHeight_CommonClass('.storyeqht');
setEqualHeight_CommonClass('.eq-heightsection1');
setEqualHeight_CommonClass('.eq-heightsection2');
if ($j(window).width() < 767) {
setEqualHeight_CommonClass('.nextprev-story-content');
}
});

function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}
if (isTouchDevice() === true) {   

$j(".banner-img-static").show(); 
$j(".banner-img-static").addClass("ipad");

} 








/*!---- future-smart-slick-----*/
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory($j);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {








        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };




    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/* -- -- -- -- -- -- -- -- -- -- -- -- */
if ($j('#ourindustry.slider-section-slides-wrapper').length > 0) {
       if (!$j('#ourindustry.slider-section-slides-wrapper').hasClass('slick-initialized')) {
            $j('#ourindustry.slider-section-slides-wrapper').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                currentSlide:0,
                dots: false,
		variableWidth:true,
                responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false                        
                    }
                },{
                  breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        infinite: true
                        }
                    }]
            });
        }
    }
	
if ($j('.slidercat-landing').length > 0) {
       if (!$j('.slidercat-landing').hasClass('slick-initialized')) {
            $j('.slidercat-landing').slick({
                slidesToShow: 3,
                slidesToScroll: 1,				
                infinite: true,
                currentSlide:0,
                dots: false,
		variableWidth: false,
                responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                        
                    }
                },
                {
                  breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                        }
                    },
                    {
                  breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                        }
                    }]               
            });
        }
    }
	
	if ($j('#ourworld.slider-section-slides-wrapper').length > 0) {
       if (!$j('#ourworld.slider-section-slides-wrapper').hasClass('slick-initialized')) {
            $j('#ourworld.slider-section-slides-wrapper').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
		rtl: true,
                infinite: false,
                currentSlide:0,
                dots: false,
		variableWidth:true,
                responsive: [{
                    breakpoint: 1400,
                    settings: { rtl: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false                        
                    }
                },{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },{
                    breakpoint: 768,
                    settings: {
                      rtl: false
                    }
                }]
            });
        }
    }
/*Sliders*/