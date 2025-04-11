import { Component, h, Element, State, Prop, Method, Event, EventEmitter, Watch } from '@stencil/core';
import { termTranslate, languages } from './languages';

@Component({
  tag: 'bds-upload',
  styleUrl: 'bds-upload.scss',
  shadow: true,
})
export class BdsUpload {
  private inputElement?: HTMLInputElement;

  @Element() private dropArea: HTMLElement;
  @State() files: File[] = [];
  @State() haveFiles = false;
  @State() hover = false;
  @State() background: string;
  @State() size: number[] = [];
  @State() internalAccepts: string[] = [];
  @State() formatError = false;
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
  @Prop({ reflect: true, mutable: true }) error: string;
  /**
   * Used to allow upload multiple files.
   */
  @Prop() multiple: boolean;
  /**
   * Used to accept a especific type of file.
   */
  @Prop() accept: string;

  /**
   * Used to accept a especific type of file.
   */
  @Prop() dataAccept: string[] | string = [];

  /**
   * Data test is the prop to specifically test the component action object.
   * dtInputFiles is the data-test to button clear.
   */
  @Prop() dtInputFiles?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtLabelAddFile is the data-test to button clear.
   */
  @Prop() dtLabelAddFile?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonDelete is the data-test to button clear.
   */
  @Prop() dtButtonDelete?: string = null;
  /**
   * Event emited when delete a item from the list.
   */
  @Event() bdsUploadDelete: EventEmitter;
  /**
   * Event emited when change the value of Upload.
   */
  @Event() bdsUploadChange: EventEmitter;

  @Watch('dataAccept')
  protected dataAcceptChanged(): void {
    if (this.dataAccept) {
      if (typeof this.dataAccept === 'string') {
        try {
          this.internalAccepts = JSON.parse(this.dataAccept);
        } catch {
          this.internalAccepts = [];
        }
      } else {
        this.internalAccepts = this.dataAccept;
      }
    } else {
      this.internalAccepts = [];
    }
  }

  @Watch('files')
  protected filesChanged(): void {
    if (this.files.length > 0) {
      for (let i = 0; i < this.files.length; i++) {
        if (this.internalAccepts.length > 0) {
          this.validationFiles(this.files[i], i);
        }
      }
    }
  }

  @Watch('formatError')
  protected formatErrorChanged(value): void {
    if (value) {
      this.error = termTranslate(this.language, 'formatError');
      setTimeout(() => (this.error = null), 5000);
    }
  }

  componentWillLoad() {
    this.dataAcceptChanged();
  }

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

  validationFiles = (File: File, index: number) => {
    const filetype = `.${File.name.split('.').pop()}`;
    const validate = this.internalAccepts.includes(filetype);
    if (validate) {
      this.formatError = false;
      return;
    } else {
      this.formatError = true;
      this.deleteFile(index);
      return;
    }
  };

  /**
   * Recive the file data using drag and drop.
   */
  handleDrop = (Event) => {
    this.preventDefaults(Event);
    this.haveFiles = true;
    const dt = Event.dataTransfer;
    const files = dt.files;
    this.handleFiles(files);
    this.hover = false;
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
  @Method()
  async deleteFile(index) {
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

  /**
   * Used for delete a item from the list.
   */
  @Method()
  async deleteAllFiles() {
    this.bdsUploadDelete.emit({ value: this.files });
    this.files = [];
    if (this.files.length === 0) {
      this.haveFiles = false;
    } else {
      this.haveFiles = true;
    }
    this.bdsUploadChange.emit({ value: this.files });
  }

  private refInputElement = (el: HTMLInputElement): void => {
    this.inputElement = el as HTMLInputElement;
  };

  private handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.inputElement.click();
    }
  }

  render() {
    return (
      <div
        class={{ upload: true, 'upload__edit--hover': true, 'upload--drag':this.hover }}
      >
        <div 
        class={{ upload__overlay: true}}
        onDrop={this.handleDrop}
        onDragOver={this.preventDefaults}
        onKeyDown={this.handleKeyDown.bind(this)}>
        <div class="upload-header">
          <bds-icon class="upload-header_icon" size="x-large" name="upload"></bds-icon>
          <div class="upload-header_text">
            <bds-typo variant="fs-16" bold="bold" aria-label={this.titleName}>
              {this.titleName}
            </bds-typo>
            <bds-typo variant="fs-12" bold="regular" aria-label={this.subtitle}>
              {this.subtitle}
            </bds-typo>
          </div>
        </div>
        {this.error ? (
          <bds-grid padding="x-2">
            <bds-banner context="inside" variant="error" aria-label={this.error}>
            {this.error}
          </bds-banner>
          </bds-grid>
          
        ) : (
          ''
        )}
        {this.haveFiles ? (
          <div class="upload__list">
            <div class="list-preview">
              {this.files.map((names: any, index) => (
                <div class="upload__preview" key={index} id="drop-area">
                  <div class="preview" id="preview">
                    <bds-icon size="x-small" name="attach"></bds-icon>
                    <div class="preview-text-box">
                      <p class="preview-text" id="preview-text" aria-label={names.name}>
                        {names.name}
                      </p>
                    </div>
                    <bds-button
                      class="preview-icon"
                      size="short"
                      icon-left="trash"
                      variant="text"
                      color="content"
                      onClick={() => this.deleteFile(index)}
                      aria-label={`delete ${names.name}`}
                      data-test={`${this.dtButtonDelete}-${index}`}
                    ></bds-button>
                  </div>
                </div>
              ))}
            </div>
            {this.multiple ? (
              <bds-typo
                variant="fs-14"
                italic
                class="preview-length"
                aria-label={termTranslate(this.language, 'uploaded')}
              >
                {this.files.length > 1 ? `${this.files.length} ${termTranslate(this.language, 'uploaded')}` : ''}
              </bds-typo>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
        <bds-grid
          direction="row"
          flex-wrap="wrap"
          justify-content="center"
          align-items="center"
          padding="y-6"
          gap="1"
          class={{ 'upload__edit--label': true, 'upload__edit--drag': this.hover }}
        >
          {!this.hover && (
            <bds-button onClick={() => this.inputElement.click()} variant="solid" size="short" color="content">
              {termTranslate(this.language, 'chooseFiles')}
            </bds-button>
          )}
            <bds-grid padding="1" class={{ 'text-box': true, 'text-box--hover': this.hover }} id="file-text_box">
                <bds-typo
                class={{ [`text-${this.hover}`]: true }}
                variant="fs-14"
                bold='bold'
                aria-label={termTranslate(this.language, this.hover ? 'dropHere' : 'dropOrClick')}
                >
                {termTranslate(this.language, this.hover ? 'dropHere' : 'dropOrClick')}
                </bds-typo>
            </bds-grid>
            <input
              ref={this.refInputElement}
              type="file"
              name="files[]"
              id="file"
              class="upload__input"
              multiple={this.multiple}
              accept={this.internalAccepts.length > 0 ? this.internalAccepts.toString() : this.accept}
              onChange={($event: any) => this.onUploadClick($event.target.files)}
              data-test={this.dtInputFiles}
            />
        </bds-grid>
        </div>
      </div>
    );
  }
}
