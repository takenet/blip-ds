import{r,h as o,H as i}from"./p-93b809e8.js";const e=class{constructor(o){r(this,o),this.percent=0,this.size="default",this.color="default",this.text="",this.dataTest=null}render(){return o(i,null,o("div",{class:{progress_bar:!0,[`size_${this.size}`]:!0},"data-test":this.dataTest},o("div",{class:{bar_behind:!0}},o("div",{class:{progress:!0,[`color_${this.color}`]:!0},style:{width:`${this.percent?this.percent>100?100:this.percent:0}%`}}))),this.text&&o("div",{class:{typo_progress:!0}},o("bds-typo",{variant:"fs-14"},this.text)))}};e.style=":host{display:block}.progress_bar{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;border-radius:32px;border:1px solid var(--color-content-disable, #636363);margin-bottom:4px}.progress_bar.size_small{height:8px}.progress_bar.size_small .bar_behind .progress{border-radius:1px}.progress_bar.size_default{height:16px}.progress_bar.size_default .bar_behind .progress{border-radius:2px}.progress_bar .bar_behind{position:absolute;inset:0.5px 1px 1px 0.5px;border-radius:16px;overflow:hidden}.progress_bar .bar_behind .progress{position:absolute;height:100%;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;overflow:hidden}.progress_bar .bar_behind .progress.color_default{background-color:var(--color-extended-blue, #1968f0)}.progress_bar .bar_behind .progress.color_positive{background-color:var(--color-extended-green, #35de90)}.progress_bar .bar_behind .progress.color_information{background-color:var(--color-extended-yellow, #fbcf23)}.progress_bar .bar_behind .progress.color_warning{background-color:var(--color-extended-red, #e60f0f)}.progress_bar .bar_behind .progress .loading{position:absolute;left:-16px;width:calc(100% + 16px);height:100%;background:white;background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(75%, rgba(255, 255, 255, 0)), color-stop(75%, rgba(0, 0, 0, 0.26)));background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 0.26) 75%);background-size:4px;-webkit-transform:skewX(-15deg);transform:skewX(-15deg);-webkit-animation-name:load;animation-name:load;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.typo_progress{color:var(--color-content-default, #454545)}@-webkit-keyframes load{from{left:-16px}to{left:0}}@keyframes load{from{left:-16px}to{left:0}}";export{e as bds_progress_bar}