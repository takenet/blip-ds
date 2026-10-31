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
var isEmpty=function(t){return t===null||t===""};var UaiFormControl=/** @class */function(){function t(t){this.current=null;this.disabledByForm=false;this.options=t;this.setValue(t.defaultValue())}Object.defineProperty(t.prototype,"value",{get:function(){return this.current},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"form",{get:function(){return this.options.internals.form},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"disabled",{
/** True when an ancestor fieldset or form disables the control. */
get:function(){return this.disabledByForm},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"validity",{get:function(){return this.options.internals.validity},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"validationMessage",{get:function(){return this.options.internals.validationMessage},enumerable:false,configurable:true});
/** Sets the submitted value. `null` submits nothing. */t.prototype.setValue=function(t,i){if(i===void 0){i=t}this.current=t;this.options.internals.setFormValue(t,i)};
/**
     * Marks the control valid, or invalid with the given flags. The message is shown by the browser on
     * `reportValidity()`; pass the element that should receive focus as the anchor.
     */t.prototype.setValidity=function(t,i,e){if(t===void 0){t={}}if(i===void 0){i=""}var n=Object.values(t).some(Boolean);if(n)this.options.internals.setValidity(t,i,e);else this.options.internals.setValidity({})};
/** Shortcut for the `required` rule: invalid (valueMissing) while required and empty. */t.prototype.validateRequired=function(t,i,e){this.setValidity({valueMissing:t&&isEmpty(this.current)},i,e)};t.prototype.checkValidity=function(){return this.options.internals.checkValidity()};t.prototype.reportValidity=function(){return this.options.internals.reportValidity()};t.prototype.reset=function(){var t=this.options.defaultValue();this.setValue(t);this.options.onReset(t)};t.prototype.setDisabled=function(t){var i,e;this.disabledByForm=t;(e=(i=this.options).onDisabledChange)===null||e===void 0?void 0:e.call(i,t)};return t}();export{UaiFormControl as U};