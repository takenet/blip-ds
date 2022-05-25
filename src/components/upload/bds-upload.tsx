import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
  tag: 'bds-upload',
  styleUrl: 'bds-upload.scss',
  shadow: true,
})
export class BdsUpload {
  @Element() public dropArea: HTMLElement;
  @State() public highlighted: boolean = false;
  @State() public uploads: boolean = false;
  @State() public files: Object[];
  @State() public dragHover: boolean = false;

  componentWillLoad() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.dropArea.addEventListener(eventName, this.preventDefaults, false);
      document.body.addEventListener(eventName, this.preventDefaults, false);
    });
    ['dragenter', 'dragover'].forEach((eventName) => {
      this.dropArea.addEventListener(eventName, () => this.handleHover(true), false);
    });
    ['dragleave', 'drop'].forEach((eventName) => {
      this.dropArea.addEventListener(eventName, () => this.handleHover(false), false);
    });
    this.dropArea.addEventListener('drop', this.handleDrop, false);
  }

  handleHover(boolean) {
    this.dragHover = boolean;
    this.dragHoverFunction;
  }

  handleDrop = (e) => {
    var dt = e.dataTransfer;
    var files = dt.files;

    this.handleFiles(files);
    this.uploads = true;
  };

  handleFiles = (files) => {
    this.files = [{ ...files }];
    this.previewFile;
  };
  previewFile = () => {
    const name = this.files.map(function (e) {
      return e[0].name;
    });
    return <div>{name}</div>;
  };

  preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  dragHoverFunction() {
    if (this.dragHover) {
      const hover = { 'drop-zone--over': true };
      return hover;
    }
  }

  render() {
    return (
      <Host>
        <div class="header">
          <bds-icon size="xxx-large" name="upload"></bds-icon>
          <div class="header-text">
            <bds-typo variant="fs-16" bold="bold" class="title">
              Title uploader
            </bds-typo>
            <bds-typo variant="fs-14" bold="regular" class="subtitle">
              Description uploads
            </bds-typo>
          </div>
        </div>
        <div class={{ body: true, ...this.dragHoverFunction() }}>
          {this.dragHover ? <div>coloque aqui</div> : <div>clique aqui</div>}
          <input type="file" id="drop-input" class="drop-box"></input>
          {this.files ? this.previewFile() : ''}
        </div>
      </Host>
    );
  }
}
