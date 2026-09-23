'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');

const buttonGroupCss = ":host{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}";

const ButtonGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.buttonSelected = index.createEvent(this, "buttonSelected", 7);
    this.activeIndexes = new Set();
    this.size = 'medium';
    this.direction = 'row';
    this.color = 'primary';
    this.multiple = false;
  }
  componentDidLoad() {
    this.buttons = this.el.getElementsByTagName('bds-button');
    this.setupButtons();
  }
  componentDidUpdate() {
    this.setupButtons();
  }
  handlePropChanges() {
    // Re-setup buttons when props change
    this.setupButtons();
  }
  setupButtons() {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      button.setAttribute('data-index', i.toString());
      button.addEventListener('click', () => this.selectButton(i));
      button.setVariant('outline');
      this.updateButtonPosition(i);
      this.updateButtonDirection(i);
      this.updateButtonSize(i);
      this.updateButtonColor(i);
    }
  }
  async activateButton(index) {
    if (index >= 0 && index < this.buttons.length) {
      this.selectButton(index);
    }
  }
  selectButton(index) {
    if (this.multiple) {
      if (this.activeIndexes.has(index)) {
        this.activeIndexes.delete(index);
      }
      else {
        this.activeIndexes.add(index);
      }
    }
    else {
      if (this.activeIndexes.has(index)) {
        this.activeIndexes.clear();
      }
      else {
        this.activeIndexes.clear();
        this.activeIndexes.add(index);
      }
    }
    this.updateButtonStates(index);
  }
  updateButtonStates(clickedIndex) {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      if (this.activeIndexes.has(i)) {
        button.isActive(true);
        button.setVariant('solid');
        button.classList.add('active');
      }
      else {
        button.isActive(false);
        button.setVariant('outline');
        button.classList.remove('active');
      }
      if (i === clickedIndex) {
        this.buttonSelected.emit(button.id);
      }
    }
  }
  updateButtonPosition(index) {
    const button = this.buttons[index];
    if (index === 0) {
      button.setPosition('first');
    }
    else if (index === this.buttons.length - 1) {
      button.setPosition('last');
    }
    else {
      button.setPosition('middle');
    }
  }
  updateButtonDirection(index) {
    const button = this.buttons[index];
    this.direction === 'row' ? button.setDirection('row') : button.setDirection('column');
  }
  updateButtonSize(index) {
    const button = this.buttons[index];
    this.size === 'medium' ? button.setSize('medium') : button.setSize('large');
  }
  updateButtonColor(index) {
    const button = this.buttons[index];
    button.setColor(this.color);
  }
  render() {
    return (index.h(index.Host, { class: "button_group" }, index.h("bds-grid", { direction: this.direction }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "size": ["handlePropChanges"],
    "direction": ["handlePropChanges"],
    "color": ["handlePropChanges"],
    "multiple": ["handlePropChanges"]
  }; }
};
ButtonGroup.style = buttonGroupCss;

exports.bds_button_group = ButtonGroup;
