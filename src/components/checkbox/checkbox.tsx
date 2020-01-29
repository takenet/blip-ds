import { Component, h } from '@stencil/core';

@Component({
  tag: 'bds-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})
export class Checkbox {

  render() {
    return (
      <div class="checkbox-wrapper">
        <input type="checkbox"
        // id="{{$ctrl.inputId}}"
        // name="{{$ctrl.group}}"
        // ng-model="$ctrl.model"
        // ng-checked="$ctrl.isChecked"
        // ng-disabled="$ctrl.disabled"
        ></input>
        <label class="flex items-center">
          {/* <label for="{{$ctrl.inputId}}" class="flex items-center"> */}
          {/* 
              <i 
                class="lh-solid" 
                ng-class="{
                  'icon-selectoff-1': !$ctrl.model, 
                  'icon-selecton': $ctrl.model, 
                  'disabled': $ctrl.disabled }">
              </i> 
            */}
          <i class="lh-solid"></i>

          <span class="text-gray ml3 flex items-center" ng-transclude> AAA
          </span>
        </label>
      </div>
    );
  }

}
