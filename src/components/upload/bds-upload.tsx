import { Component, Event, h, Element, EventEmitter, State, Prop } from '@stencil/core';

@Component({
  tag: 'bds-upload',
  styleUrl: 'bds-upload.scss',
  shadow: true,
})
export class BdsUpload {
  @Element() private dropArea: HTMLElement;
  @Event() uploadCompleted: EventEmitter<Blob>;
  @State() public files: any[];
  @State() public haveFiles = false;
  @State() public filesReader: string | ArrayBuffer;
  @Prop() title!: string;
  @Prop() subtitle: string;

  componentDidLoad() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.dropArea.shadowRoot.addEventListener(eventName, this.preventDefaults, true);
    });
    ['dragenter', 'dragover'].forEach((eventName) => {
      this.dropArea.shadowRoot.addEventListener(eventName, () => this.handleDrop(true), false);
    });
    ['dragleave', 'drop'].forEach((eventName) => {
      this.dropArea.shadowRoot.addEventListener(eventName, () => this.handleDrop(true), false);
    });
    this.dropArea.shadowRoot.addEventListener('drop', this.handleDrop, false);
  }

  handleDrop = (Event) => {
    const dt = Event.dataTransfer;
    const files = dt.files;
    this.handleFiles(files);
  };

  handleFiles = (files) => {
    this.files = [{ ...files }];
    this.previewFile();
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

  public onInputChange(files: FileList) {
    // check if 1 image is uploaded
    if (files.length === 1) {
      const imageFile = files[0];
      this.files = [{ ...files }];

      // upload image
      this.uploadImage(imageFile);
    } else {
      return false;
    }
  }

  private uploadImage(file) {
    // create a new instance of HTML5 FileReader api to handle uploading
    const reader = new FileReader();
    if (file) {
      this.haveFiles = true;
    }

    reader.onload = () => {
      const previewText: HTMLElement = this.dropArea.shadowRoot.querySelector('#preview-text');
      this.filesReader = reader.result;
      previewText.innerText = file.name;
      this.uploadCompleted.emit(file);
    };
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div class="upload">
        <div class="upload-header">
          <bds-icon size="xxx-large" name="upload"></bds-icon>
          <div class="upload-header_text">
            <bds-typo variant="fs-16" bold="bold">
              {this.title}
            </bds-typo>
            <bds-typo variant="fs-14" bold="regular">
              {this.subtitle}
            </bds-typo>
          </div>
        </div>
        {this.haveFiles ? (
          <div class="upload__preview" id="drop-area">
            <div class="preview" id="preview">
              <bds-icon size="x-small" name="attach"></bds-icon>
              <bds-typo variant="fs-14" bold="bold" class="preview-text" id="preview-text"></bds-typo>
              <bds-icon size="x-small" name="trash"></bds-icon>
            </div>
          </div>
        ) : (
          ''
        )}
        <div class="upload__edit">
          <label htmlFor="file">
            <bds-typo>Drag and drop your files here or click to upload file</bds-typo>
          </label>
          <input
            type="file"
            name="files[]"
            id="file"
            class="upload__input"
            onChange={($event: any) => this.onInputChange($event.target.files)}
          />
        </div>
      </div>
    );
  }
}
