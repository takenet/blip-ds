System.register([],(function(t){"use strict";return{execute:function(){
/**
             * Internal form-association base (w0-primitivas-internas) for UAI controls. Wraps ElementInternals so every control
             * submits its value under its `name`, restores the default on form reset, reports validity and follows a disabled
             * fieldset the same way. The component declares `formAssociated: true`, attaches the internals with
             * `@AttachInternals()` and forwards the form callbacks:
             *
             *   formResetCallback() { this.formControl.reset(); }
             *   formDisabledCallback(disabled: boolean) { this.formControl.setDisabled(disabled); }
             *
             * Without a `name` attribute the control takes part in validation and reset but is left out of the submitted data,
             * as with native inputs.
             */
var e=function(t){return t===null||t===""};var i=/** @class */function(){function t(t){this.current=null;this.disabledByForm=false;this.options=t;this.setValue(t.defaultValue())}Object.defineProperty(t.prototype,"value",{get:function(){return this.current},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"form",{get:function(){return this.options.internals.form},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"disabled",{
/** True when an ancestor fieldset or form disables the control. */
get:function(){return this.disabledByForm},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"validity",{get:function(){return this.options.internals.validity},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"validationMessage",{get:function(){return this.options.internals.validationMessage},enumerable:false,configurable:true});
/** Sets the submitted value. `null` submits nothing. */t.prototype.setValue=function(t,e){if(e===void 0){e=t}this.current=t;this.options.internals.setFormValue(t,e)};
/**
                 * Marks the control valid, or invalid with the given flags. The message is shown by the browser on
                 * `reportValidity()`; pass the element that should receive focus as the anchor.
                 */t.prototype.setValidity=function(t,e,i){if(t===void 0){t={}}if(e===void 0){e=""}var n=Object.values(t).some(Boolean);if(n)this.options.internals.setValidity(t,e,i);else this.options.internals.setValidity({})};
/** Shortcut for the `required` rule: invalid (valueMissing) while required and empty. */t.prototype.validateRequired=function(t,i,n){this.setValidity({valueMissing:t&&e(this.current)},i,n)};t.prototype.checkValidity=function(){return this.options.internals.checkValidity()};t.prototype.reportValidity=function(){return this.options.internals.reportValidity()};t.prototype.reset=function(){var t=this.options.defaultValue();this.setValue(t);this.options.onReset(t)};t.prototype.setDisabled=function(t){var e,i;this.disabledByForm=t;(i=(e=this.options).onDisabledChange)===null||i===void 0?void 0:i.call(e,t)};return t}();t("U",i)}}}));