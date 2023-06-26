import { Component, h, Element, State, Prop, Event, EventEmitter } from '@stencil/core';
import { termTranslate, languages } from './languages';
import background from '../../assets/svg/pattern.svg';

@Component({
  tag: 'bds-upload',
  styleUrl: 'bds-upload.scss',
  shadow: true,
})
export class BdsUpload {
  @Element() private dropArea: HTMLElement;
  @State() files: string[] = [];
  @State() haveFiles = false;
  @State() hover = false;
  @State() background: string;
  @State() size: number[] = [];
  /**
   * Set the language for fixed texts.
   */
  @Prop() language?: languages = 'pt_BR';
  /**
   * Used for add a text on title.
   */
  @Prop() titleName: string;
  /**
   * Used for add a text on subtitle.
   */
  @Prop() subtitle: string;
  /**
   * Used for add a error message. In case a verify.
   */
  @Prop() error: string;
  /**
   * Used to allow upload multiple files.
   */
  @Prop() multiple: boolean;
  /**
   * Used to accept a especific type of file.
   */
  @Prop() accept: string;
  /**
   * Event emited when delete a item from the list.
   */
  @Event() bdsUploadDelete: EventEmitter;
  /**
   * Event emited when change the value of Upload.
   */
  @Event() bdsUploadChange: EventEmitter;

  componentDidLoad() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.dropArea.shadowRoot.addEventListener(eventName, this.preventDefaults, false);
      this.dropArea.shadowRoot.addEventListener(eventName, () => this.hoverFile(true), false);
    });
    ['dragenter', 'dragover'].forEach((eventName) => {
      this.dropArea.shadowRoot.addEventListener(eventName, () => this.preventDefaults, false);
      this.dropArea.shadowRoot.addEventListener(eventName, () => this.hoverFile(true), false);
    });
    ['dragleave', 'drop'].forEach((eventName) => {
      this.dropArea.shadowRoot.addEventListener(eventName, () => this.preventDefaults, false);
      this.dropArea.shadowRoot.addEventListener(eventName, () => this.hoverFile(false), false);
    });
    this.dropArea.shadowRoot.addEventListener('drop', this.handleDrop, false);
  }
  /**
   * Recive the file data using drag and drop.
   */
  handleDrop = (Event) => {
    this.haveFiles = true;
    const dt = Event.dataTransfer;
    const files = dt.files;
    this.handleFiles(files);
  };

  /**
   * Verify if allow the state recive one or more items.
   */
  handleFiles = (files) => {
    if (!this.multiple) {
      this.files = [files[0]];
    } else {
      this.files = [...this.files, ...files];
    }
    this.bdsUploadChange.emit({ value: this.files });
  };
  /**
   * Prevent the screen to reload.
   */
  preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  /**
   * Definy if are hover to aply styles in drop area.
   */
  hoverFile(boolean) {
    this.hover = boolean;
  }
  /**
   * Recive the file data using click.
   */
  public onUploadClick(files) {
    if (files.length > 0) {
      if (!this.multiple) {
        this.files = [files[0]];
      } else {
        this.files = [...this.files, ...files];
      }
      this.haveFiles = true;
      this.getSize();
    } else {
      return false;
    }
    this.bdsUploadChange.emit({ value: this.files });
  }
  /**
   * Return the size information from the file.
   */
  getSize() {
    this.files.map((size: any) => {
      const listSize = size.size;
      this.size.push(listSize);
    });
  }
  /**
   * Used for delete a item from the list.
   */
  deleteFile(index) {
    const fileToDelete = this.files.filter((item, i) => i == index && item);
    this.bdsUploadDelete.emit({ value: fileToDelete });
    this.files.splice(index, 1);
    this.files = [...this.files];
    if (this.files.length === 0) {
      this.haveFiles = false;
    } else {
      this.haveFiles = true;
    }
    this.bdsUploadChange.emit({ value: this.files });
  }

  render() {
    return (
      <div class="upload">
        <div class="upload-header">
          <bds-icon class="upload-header_icon" size="xxx-large" name="upload"></bds-icon>
          <div class="upload-header_text">
            <bds-typo variant="fs-16" bold="bold">
              {this.titleName}
            </bds-typo>
            <bds-typo variant="fs-14" bold="regular">
              {this.subtitle}
            </bds-typo>
          </div>
        </div>
        {this.error ? (
          <bds-banner context="inside" variant="error">
            {this.error}
          </bds-banner>
        ) : (
          ''
        )}
        {this.haveFiles ? (
          <div>
            <div class="list-preview">
              {this.files.map((names: any, index) => (
                <div class="upload__preview" key={index} id="drop-area">
                  <div class="preview" id="preview">
                    <bds-icon size="x-small" name="attach"></bds-icon>
                    <p class="preview-text" id="preview-text">
                      {names.name}
                    </p>
                    <bds-button-icon
                      class="preview-icon"
                      size="short"
                      icon="trash"
                      variant="secondary"
                      onClick={() => this.deleteFile(index)}
                    ></bds-button-icon>
                  </div>
                </div>
              ))}
            </div>
            {this.multiple ? (
              <bds-typo variant="fs-14" italic class="preview-length">
                {this.files.length > 1 ? `${this.files.length} ${termTranslate(this.language, 'uploaded')}` : ''}
              </bds-typo>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
        <div class={{ upload__edit: true }}>
          <label
            class={{ 'upload__edit--label': true, 'upload__edit--hover': this.hover }}
            id="file-label"
            htmlFor="file"
          >
            <div class={{ 'text-box': true, 'text-box--hover': this.hover }} id="file-text_box">
              {this.hover ? (
                <bds-typo class="text" variant="fs-14" bold="regular">
                  {termTranslate(this.language, 'dropHere')}
                </bds-typo>
              ) : (
                <bds-typo class="text" variant="fs-14" bold="regular">
                  {termTranslate(this.language, 'dropOrClick')}
                </bds-typo>
              )}
            </div>
            <img class={{ 'upload__img--invisible': true, 'upload__img--visible': this.hover }} src={background} />
          </label>
          <input
            type="file"
            name="files[]"
            id="file"
            class="upload__input"
            multiple={this.multiple}
            accept={this.accept}
            onChange={($event: any) => this.onUploadClick($event.target.files)}
          />
        </div>
      </div>
    );
  }
}
