(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[447],{"./blip-ds-react/dist/components.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{YY:()=>BdsAccordion,wU:()=>BdsAccordionBody,Tx:()=>BdsAccordionGroup,jW:()=>BdsAccordionHeader,Mg:()=>BdsAlert,bf:()=>BdsAlertActions,gG:()=>BdsAlertBody,Hc:()=>BdsAlertHeader,Ih:()=>BdsAutocomplete,JS:()=>BdsAvatar,oR:()=>BdsAvatarGroup,Tg:()=>BdsBadge,o6:()=>BdsBanner,O$:()=>BdsBannerLink,Ph:()=>BdsBreadcrumb,kd:()=>BdsButton,zA:()=>BdsButtonGroup,RE:()=>BdsButtonIcon,gw:()=>BdsCard,u7:()=>BdsCardBody,JK:()=>BdsCardFooter,tN:()=>BdsCardHeader,Sd:()=>BdsCardSubtitle,Ge:()=>BdsCardTitle,k2:()=>BdsCarousel,rl:()=>BdsCarouselItem,J4:()=>BdsCheckbox,Qy:()=>BdsChipClickable,Bf:()=>BdsChipSelected,gW:()=>BdsChipTag,w9:()=>BdsDataTable,Cf:()=>BdsDatepicker,P$:()=>BdsDivider,gh:()=>BdsGrid,v1:()=>BdsIcon,cy:()=>BdsIllustration,hi:()=>BdsImage,At:()=>BdsInput,rE:()=>BdsInputChips,CY:()=>BdsInputEditable,VW:()=>BdsInputPassword,xQ:()=>BdsInputPhoneNumber,yi:()=>BdsList,Jd:()=>BdsListItem,nv:()=>BdsLoadingBar,$4:()=>BdsLoadingPage,nX:()=>BdsLoadingSpinner,jl:()=>BdsModal,f6:()=>BdsModalAction,xS:()=>BdsNavTree,i6:()=>BdsNavTreeGroup,YW:()=>BdsNavTreeItem,Ob:()=>BdsNavbar,VV:()=>BdsNavbarContent,u2:()=>BdsPagination,Yg:()=>BdsPaper,gL:()=>BdsProgressBar,hZ:()=>BdsRadio,SR:()=>BdsRadioGroup,rL:()=>BdsRichText,QT:()=>BdsSelect,b0:()=>BdsSelectChips,Bm:()=>BdsSelectOption,uC:()=>BdsSidebar,bg:()=>BdsSkeleton,bL:()=>BdsSlider,Gb:()=>BdsStep,dG:()=>BdsStepper,Oc:()=>BdsSwitch,Kn:()=>BdsTabGroup,o$:()=>BdsTabItem,aQ:()=>BdsTable,_k:()=>BdsTableBody,yq:()=>BdsTableCell,ti:()=>BdsTableHeader,wh:()=>BdsTableRow,S6:()=>BdsTableTh,It:()=>BdsThemeProvider,p1:()=>BdsToast,jK:()=>BdsTooltip,QC:()=>BdsTypo,JO:()=>BdsUpload});var react=__webpack_require__("./node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+(eventNameSuffix=>"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix)(eventNameSuffix);let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createComponent_createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else node[name]=newProps[name],"string"==typeof newProps[name]&&node.setAttribute(camelToDashCase(name),newProps[name])}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)},BdsAccordion=createComponent_createReactComponent("bds-accordion"),BdsAccordionBody=createComponent_createReactComponent("bds-accordion-body"),BdsAccordionGroup=createComponent_createReactComponent("bds-accordion-group"),BdsAccordionHeader=createComponent_createReactComponent("bds-accordion-header"),BdsAlert=createComponent_createReactComponent("bds-alert"),BdsAlertActions=createComponent_createReactComponent("bds-alert-actions"),BdsAlertBody=createComponent_createReactComponent("bds-alert-body"),BdsAlertHeader=createComponent_createReactComponent("bds-alert-header"),BdsAutocomplete=createComponent_createReactComponent("bds-autocomplete"),BdsAvatar=createComponent_createReactComponent("bds-avatar"),BdsAvatarGroup=createComponent_createReactComponent("bds-avatar-group"),BdsBadge=createComponent_createReactComponent("bds-badge"),BdsBanner=createComponent_createReactComponent("bds-banner"),BdsBannerLink=createComponent_createReactComponent("bds-banner-link"),BdsBreadcrumb=createComponent_createReactComponent("bds-breadcrumb"),BdsButton=createComponent_createReactComponent("bds-button"),BdsButtonGroup=createComponent_createReactComponent("bds-button-group"),BdsButtonIcon=createComponent_createReactComponent("bds-button-icon"),BdsCard=createComponent_createReactComponent("bds-card"),BdsCardBody=createComponent_createReactComponent("bds-card-body"),BdsCardFooter=createComponent_createReactComponent("bds-card-footer"),BdsCardHeader=createComponent_createReactComponent("bds-card-header"),BdsCardSubtitle=createComponent_createReactComponent("bds-card-subtitle"),BdsCardTitle=createComponent_createReactComponent("bds-card-title"),BdsCarousel=createComponent_createReactComponent("bds-carousel"),BdsCarouselItem=createComponent_createReactComponent("bds-carousel-item"),BdsCheckbox=createComponent_createReactComponent("bds-checkbox"),BdsChipClickable=createComponent_createReactComponent("bds-chip-clickable"),BdsChipSelected=createComponent_createReactComponent("bds-chip-selected"),BdsChipTag=createComponent_createReactComponent("bds-chip-tag"),BdsDataTable=createComponent_createReactComponent("bds-data-table"),BdsDatepicker=createComponent_createReactComponent("bds-datepicker"),BdsDivider=createComponent_createReactComponent("bds-divider"),BdsGrid=createComponent_createReactComponent("bds-grid"),BdsIcon=createComponent_createReactComponent("bds-icon"),BdsIllustration=createComponent_createReactComponent("bds-illustration"),BdsImage=createComponent_createReactComponent("bds-image"),BdsInput=createComponent_createReactComponent("bds-input"),BdsInputChips=createComponent_createReactComponent("bds-input-chips"),BdsInputEditable=createComponent_createReactComponent("bds-input-editable"),BdsInputPassword=createComponent_createReactComponent("bds-input-password"),BdsInputPhoneNumber=createComponent_createReactComponent("bds-input-phone-number"),BdsList=createComponent_createReactComponent("bds-list"),BdsListItem=createComponent_createReactComponent("bds-list-item"),BdsLoadingBar=createComponent_createReactComponent("bds-loading-bar"),BdsLoadingPage=createComponent_createReactComponent("bds-loading-page"),BdsLoadingSpinner=createComponent_createReactComponent("bds-loading-spinner"),BdsModal=createComponent_createReactComponent("bds-modal"),BdsModalAction=createComponent_createReactComponent("bds-modal-action"),BdsNavTree=createComponent_createReactComponent("bds-nav-tree"),BdsNavTreeGroup=createComponent_createReactComponent("bds-nav-tree-group"),BdsNavTreeItem=createComponent_createReactComponent("bds-nav-tree-item"),BdsNavbar=createComponent_createReactComponent("bds-navbar"),BdsNavbarContent=createComponent_createReactComponent("bds-navbar-content"),BdsPagination=createComponent_createReactComponent("bds-pagination"),BdsPaper=createComponent_createReactComponent("bds-paper"),BdsProgressBar=createComponent_createReactComponent("bds-progress-bar"),BdsRadio=createComponent_createReactComponent("bds-radio"),BdsRadioGroup=createComponent_createReactComponent("bds-radio-group"),BdsRichText=createComponent_createReactComponent("bds-rich-text"),BdsSelect=createComponent_createReactComponent("bds-select"),BdsSelectChips=createComponent_createReactComponent("bds-select-chips"),BdsSelectOption=createComponent_createReactComponent("bds-select-option"),BdsSidebar=createComponent_createReactComponent("bds-sidebar"),BdsSkeleton=createComponent_createReactComponent("bds-skeleton"),BdsSlider=createComponent_createReactComponent("bds-slider"),BdsStep=createComponent_createReactComponent("bds-step"),BdsStepper=createComponent_createReactComponent("bds-stepper"),BdsSwitch=createComponent_createReactComponent("bds-switch"),BdsTabGroup=createComponent_createReactComponent("bds-tab-group"),BdsTabItem=createComponent_createReactComponent("bds-tab-item"),BdsTable=createComponent_createReactComponent("bds-table"),BdsTableBody=createComponent_createReactComponent("bds-table-body"),BdsTableCell=createComponent_createReactComponent("bds-table-cell"),BdsTableHeader=createComponent_createReactComponent("bds-table-header"),BdsTableRow=createComponent_createReactComponent("bds-table-row"),BdsTableTh=createComponent_createReactComponent("bds-table-th"),BdsThemeProvider=createComponent_createReactComponent("bds-theme-provider"),BdsToast=createComponent_createReactComponent("bds-toast"),BdsTooltip=createComponent_createReactComponent("bds-tooltip"),BdsTypo=createComponent_createReactComponent("bds-typo"),BdsUpload=createComponent_createReactComponent("bds-upload")},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src/components/tabs/tab-group.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Events:()=>Events,FrameworkReact:()=>FrameworkReact,Properties:()=>Properties,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./blip-ds-react/dist/components.js"),_tabs_mdx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tabs/tabs.mdx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tabs",parameters:{docs:{page:_tabs_mdx__WEBPACK_IMPORTED_MODULE_1__.default}}},contentDefault={color:"var(--color-content-default, #000)"},Properties=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("bds-tab-group",{align:args.align,"content-scrollable":args.contentScrollable,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-tab-item",{label:args.label,icon:args.icon,"icon-position":args.iconPosition,"icon-theme":args.iconTheme,badge:args.badge,"badge-shape":args.badgeShape,"badge-color":args.badgeColor,"badge-icon":args.badgeIcon,"badge-animation":args.badgeAnimation,"badge-number":args.badgeNumber,"badge-position":args.badgePosition,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-grid",{padding:"2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-16",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat. Integer arcu enim, placerat eget mauris sed, pretium congue augue."})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-tab-item",{disable:args.disable,label:"Advanced settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-grid",{padding:"2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-16",children:"Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac habitasse platea dictumst. Morbi non suscipit nisi."})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-tab-item",{open:args.open,label:"Very advanced settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-grid",{padding:"2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-16",children:"Suspendisse pellentesque quam porttitor enim rhoncus vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."})})})]});Properties.displayName="Properties",Properties.args={align:"center",contentScrollable:!0,disable:!1,label:"Basic settings",icon:"builder-publish-bot",iconPosition:"left",iconTheme:"outline",badge:!0,badgeShape:"circle",badgeColor:"warning",badgeIcon:"warning",badgeAnimation:!1,badgeNumber:null,badgePosition:"right",open:!1,dataTest:""},Properties.argTypes={align:{table:{defaultValue:{summary:"center"}},options:["center","left","right"],control:"select"},contentScrollable:{table:{defaultValue:{summary:"true"}},control:"boolean"},disable:{table:{defaultValue:{summary:"false"}},control:"boolean"},label:{table:{defaultValue:{summary:"vazio"}},control:"text"},icon:{table:{defaultValue:{summary:"vazio"}},control:"text"},iconPosition:{table:{defaultValue:{summary:"left"}},options:["left","right"],control:"select"},iconTheme:{table:{defaultValue:{summary:"solid"}},options:["solid","outline","emoji","logos"],control:"select"},badge:{table:{defaultValue:{summary:"true"}},control:"boolean"},badgeShape:{table:{defaultValue:{summary:"circle"}},options:["circle","square","triangle","triangle-reverse","polygon"],control:"select"},badgeColor:{table:{defaultValue:{summary:"vazio"}},control:"text"},badgeIcon:{table:{defaultValue:{summary:"system"}},options:["system","danger","warning","success","neutral"],control:"select"},badgeAnimation:{table:{defaultValue:{summary:"false"}},control:"boolean"},badgeNumber:{table:{defaultValue:{summary:"null"}},control:"number"},badgePosition:{table:{defaultValue:{summary:"right"}},options:["left","right"],control:"select"},open:{table:{defaultValue:{summary:"false"}},control:"boolean"},dataTest:{table:{defaultValue:{summary:"vazio"}},control:"text"}};const Events=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const tabs=document.getElementById("tabs");tabs.addEventListener("bdsTabChange",(()=>{console.log("Evento bdsTabChange funcionando")})),tabs.addEventListener("bdsTabDisabled",(()=>{console.log("Evento bdsTabDisabled funcionando")}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("bds-tab-group",{id:"tabs",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-tab-item",{label:"Basic settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{style:contentDefault,variant:"fs-16",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat. Integer arcu enim, placerat eget mauris sed, pretium congue augue."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-tab-item",{disable:!0,label:"Advanced settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{style:contentDefault,variant:"fs-16",children:"Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac habitasse platea dictumst. Morbi non suscipit nisi."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-tab-item",{label:"Very advanced settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{style:contentDefault,variant:"fs-16",children:"Suspendisse pellentesque quam porttitor enim rhoncus vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-tab-item",{label:"Personal settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{style:contentDefault,variant:"fs-16",children:"Phasellus eget semper ipsum. Vivamus interdum luctus varius. Nullam vel orci elit. Phasellus auctor augue vitae ultrices accumsan. In eget ornare orci, eu sollicitudin justo."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-tab-item",{label:"Common settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{style:contentDefault,variant:"fs-16",children:"Integer sollicitudin bibendum eros, quis scelerisque lorem vulputate sit amet. Aliquam cursus lacinia egestas. In hac habitasse platea dictumst. Aenean eu volutpat risus."})})]}));Events.displayName="Events";const FrameworkReact=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__.Kn,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__.o$,{label:"Basic settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__.QC,{variant:"fs-16",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat. Integer arcu enim, placerat eget mauris sed, pretium congue augue."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__.o$,{label:"Advanced settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__.QC,{variant:"fs-16",children:"Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac habitasse platea dictumst. Morbi non suscipit nisi."})})]})});Properties.parameters={...Properties.parameters,docs:{...Properties.parameters?.docs,source:{originalSource:'args => {\n  return <bds-tab-group align={args.align} content-scrollable={args.contentScrollable}>\n      <bds-tab-item label={args.label} icon={args.icon} icon-position={args.iconPosition} icon-theme={args.iconTheme} badge={args.badge} badge-shape={args.badgeShape} badge-color={args.badgeColor} badge-icon={args.badgeIcon} badge-animation={args.badgeAnimation} badge-number={args.badgeNumber} badge-position={args.badgePosition}>\n        <bds-grid padding="2">\n          <bds-typo variant="fs-16">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat. Integer arcu enim, placerat eget mauris sed, pretium congue augue.\n          </bds-typo>\n        </bds-grid>\n      </bds-tab-item>\n      <bds-tab-item disable={args.disable} label="Advanced settings">\n        <bds-grid padding="2">\n          <bds-typo variant="fs-16">\n            Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac habitasse platea dictumst. Morbi non suscipit nisi.\n          </bds-typo>\n        </bds-grid>\n      </bds-tab-item>\n      <bds-tab-item open={args.open} label="Very advanced settings">\n        <bds-grid padding="2">\n          <bds-typo variant="fs-16">\n            Suspendisse pellentesque quam porttitor enim rhoncus vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n          </bds-typo>\n        </bds-grid>\n      </bds-tab-item>\n    </bds-tab-group>;\n}',...Properties.parameters?.docs?.source}}},Events.parameters={...Events.parameters,docs:{...Events.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    const tabs = document.getElementById(\'tabs\');\n    tabs.addEventListener(\'bdsTabChange\', () => {\n      console.log(\'Evento bdsTabChange funcionando\');\n    });\n    tabs.addEventListener(\'bdsTabDisabled\', () => {\n      console.log(\'Evento bdsTabDisabled funcionando\');\n    });\n  });\n  return <bds-tab-group id="tabs">\n            <bds-tab-item label="Basic settings">\n              <bds-typo style={contentDefault} variant="fs-16">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat.\n                Integer arcu enim, placerat eget mauris sed, pretium congue augue.\n              </bds-typo>\n            </bds-tab-item>\n            <bds-tab-item disable={true} label="Advanced settings">\n              <bds-typo style={contentDefault} variant="fs-16">\n                Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac\n                habitasse platea dictumst. Morbi non suscipit nisi.\n              </bds-typo>\n            </bds-tab-item>\n            <bds-tab-item label="Very advanced settings">\n              <bds-typo style={contentDefault} variant="fs-16">\n                Suspendisse pellentesque quam porttitor enim rhoncus vehicula. Pellentesque habitant morbi tristique\n                senectus et netus et malesuada fames ac turpis egestas.\n              </bds-typo>\n            </bds-tab-item>\n            <bds-tab-item label="Personal settings">\n              <bds-typo style={contentDefault} variant="fs-16">\n                Phasellus eget semper ipsum. Vivamus interdum luctus varius. Nullam vel orci elit. Phasellus auctor\n                augue vitae ultrices accumsan. In eget ornare orci, eu sollicitudin justo.\n              </bds-typo>\n            </bds-tab-item>\n            <bds-tab-item label="Common settings">\n              <bds-typo style={contentDefault} variant="fs-16">\n                Integer sollicitudin bibendum eros, quis scelerisque lorem vulputate sit amet. Aliquam cursus lacinia\n                egestas. In hac habitasse platea dictumst. Aenean eu volutpat risus.\n              </bds-typo>\n            </bds-tab-item>\n          </bds-tab-group>;\n}',...Events.parameters?.docs?.source}}},FrameworkReact.parameters={...FrameworkReact.parameters,docs:{...FrameworkReact.parameters?.docs,source:{originalSource:'() => {\n  return <>\n          <BdsTabGroup>\n            <BdsTabItem label="Basic settings">\n              <BdsTypo variant="fs-16">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat.\n                Integer arcu enim, placerat eget mauris sed, pretium congue augue.\n              </BdsTypo>\n            </BdsTabItem>\n            <BdsTabItem label="Advanced settings">\n              <BdsTypo variant="fs-16">\n                Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In hac\n                habitasse platea dictumst. Morbi non suscipit nisi.\n              </BdsTypo>\n            </BdsTabItem>\n          </BdsTabGroup>\n    </>;\n}',...FrameworkReact.parameters?.docs?.source}}};const __namedExportsOrder=["Properties","Events","FrameworkReact"]},"./src/components/tabs/tabs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_blip_ds_blip_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_tab_group_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/tabs/tab-group.stories.jsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2"},(0,_home_runner_work_blip_ds_blip_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tabs",children:"Tabs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.figma.com/design/2bBnJVKkG09JPWCFBIcD1y/%5BDS%5D-Components?m=auto&node-id=88-4015&t=TyXNmrAZbhl7DmWw-1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Design e Acessibilidade"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"visão-geral",children:"Visão Geral"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"O componente Tabs permite organizar conteúdo em diferentes abas de navegação."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_tab_group_stories__WEBPACK_IMPORTED_MODULE_2__.Properties}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{isTemplate:!0}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"As propriedades a seguir são compartilhadas pelo componente Tabs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"eventos",children:"Eventos"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Alguns exemplos de eventos do componente Tabs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table",{border:"1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{children:"Evento"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{children:"Descrição"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{children:"Tipo"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tbody",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"bdsTabChange"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Evento retorna o valor do tab que alterou."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"CustomEvent<any>"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"bdsTabDisabled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"Evento retorna o valor do tab que foi desabilitado."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"CustomEvent<any>"})]})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{of:_tab_group_stories__WEBPACK_IMPORTED_MODULE_2__.Events}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usando-no-react",children:"Usando no React"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{of:_tab_group_stories__WEBPACK_IMPORTED_MODULE_2__.FrameworkReact})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_blip_ds_blip_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);