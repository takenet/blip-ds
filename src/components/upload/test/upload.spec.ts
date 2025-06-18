import { newSpecPage } from '@stencil/core/testing';
import { BdsUpload } from '../bds-upload';

// Mock File constructor for testing
class MockFile {
  name: string;
  size: number;
  type: string;
  constructor(bits: BlobPart[], name: string, options?: FilePropertyBag) {
    this.name = name;
    this.size = bits.reduce((size, bit) => {
      if (typeof bit === 'string') {
        return size + bit.length;
      }
      if (bit instanceof ArrayBuffer) {
        return size + bit.byteLength;
      }
      if (bit instanceof Blob) {
        return size + bit.size;
      }
      return size;
    }, 0);
    this.type = options?.type || '';
  }
}

// Add File to global for tests
(global as any).File = MockFile;

describe('bds-upload', () => {
  it('should render with default properties', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload title-name="Upload Files" subtitle="Select or drag files"></bds-upload>`,
    });

    const upload = page.rootInstance;
    expect(upload.language).toBe('pt_BR');
    expect(upload.titleName).toBe('Upload Files');
    expect(upload.subtitle).toBe('Select or drag files');
    expect(upload.error).toBe(undefined);
    expect(upload.multiple).toBe(undefined);
    expect(upload.accept).toBe(undefined);
    expect(upload.dataAccept).toEqual([]);
    expect(upload.files).toEqual([]);
    expect(upload.haveFiles).toBe(false);
    expect(upload.hover).toBe(false);
    expect(upload.formatError).toBe(false);
  });

  it('should render with custom properties', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `
        <bds-upload 
          title-name="Custom Upload" 
          subtitle="Custom subtitle"
          language="en_US"
          multiple="true"
          accept=".pdf,.doc"
          error="Custom error"
          dt-input-files="test-input"
          dt-label-add-file="test-label"
          dt-button-delete="test-delete">
        </bds-upload>
      `,
    });

    const upload = page.rootInstance;
    expect(upload.titleName).toBe('Custom Upload');
    expect(upload.subtitle).toBe('Custom subtitle');
    expect(upload.language).toBe('en_US');
    expect(upload.multiple).toBe(true);
    expect(upload.accept).toBe('.pdf,.doc');
    expect(upload.error).toBe('Custom error');
    expect(upload.dtInputFiles).toBe('test-input');
    expect(upload.dtLabelAddFile).toBe('test-label');
    expect(upload.dtButtonDelete).toBe('test-delete');
  });

  it('should handle dataAccept as string array', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload data-accept='[".pdf", ".doc", ".txt"]'></bds-upload>`,
    });

    const upload = page.rootInstance;
    expect(upload.internalAccepts).toEqual(['.pdf', '.doc', '.txt']);
  });

  it('should handle dataAccept as array', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    upload.dataAccept = ['.jpg', '.png', '.gif'];
    upload.dataAcceptChanged();
    
    expect(upload.internalAccepts).toEqual(['.jpg', '.png', '.gif']);
  });

  it('should handle invalid JSON in dataAccept', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload data-accept='invalid-json'></bds-upload>`,
    });

    const upload = page.rootInstance;
    expect(upload.internalAccepts).toEqual([]);
  });

  it('should render upload header with icon and text', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload title-name="Test Title" subtitle="Test Subtitle"></bds-upload>`,
    });

    const header = page.root.shadowRoot.querySelector('.upload-header');
    expect(header).toBeTruthy();

    const icon = header.querySelector('bds-icon');
    expect(icon.getAttribute('size')).toBe('xxx-large');
    expect(icon.getAttribute('name')).toBe('upload');

    const typos = header.querySelectorAll('bds-typo');
    expect(typos).toHaveLength(2);
    expect(typos[0].getAttribute('variant')).toBe('fs-16');
    expect(typos[0].getAttribute('bold')).toBe('bold');
    expect(typos[1].getAttribute('variant')).toBe('fs-14');
    expect(typos[1].getAttribute('bold')).toBe('regular');
  });

  it('should display error banner when error is present', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload error="Test error message"></bds-upload>`,
    });

    const banner = page.root.shadowRoot.querySelector('bds-banner');
    expect(banner).toBeTruthy();
    expect(banner.getAttribute('context')).toBe('inside');
    expect(banner.getAttribute('variant')).toBe('error');
    expect(banner.textContent).toBe('Test error message');
  });

  it('should not display error banner when no error', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const banner = page.root.shadowRoot.querySelector('bds-banner');
    expect(banner).toBeFalsy();
  });

  it('should render file input with correct attributes', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `
        <bds-upload 
          multiple="true" 
          accept=".jpg,.png" 
          dt-input-files="test-input">
        </bds-upload>
      `,
    });

    const input = page.root.shadowRoot.querySelector('input[type="file"]');
    expect(input).toBeTruthy();
    expect(input.getAttribute('multiple')).toBe('');
    expect(input.getAttribute('accept')).toBe('.jpg,.png');
    expect(input.getAttribute('data-test')).toBe('test-input');
  });

  it('should render label with correct data-test attribute', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload dt-label-add-file="test-label"></bds-upload>`,
    });

    const label = page.root.shadowRoot.querySelector('label');
    expect(label.getAttribute('data-test')).toBe('test-label');
  });

  it('should handle file upload through input', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    
    // Mock file
    const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
    const mockFiles = [mockFile];

    // Simulate file upload
    upload.onUploadClick(mockFiles);
    await page.waitForChanges();

    expect(upload.files).toEqual([mockFile]);
    expect(upload.haveFiles).toBe(true);
  });

  it('should handle multiple file uploads when multiple is true', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload multiple="true"></bds-upload>`,
    });

    const upload = page.rootInstance;
    
    const mockFile1 = new File(['content1'], 'test1.txt', { type: 'text/plain' });
    const mockFile2 = new File(['content2'], 'test2.txt', { type: 'text/plain' });
    const mockFiles = [mockFile1, mockFile2];

    upload.onUploadClick(mockFiles);
    await page.waitForChanges();

    expect(upload.files).toEqual([mockFile1, mockFile2]);
    expect(upload.haveFiles).toBe(true);
  });

  it('should limit to single file when multiple is false', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload multiple="false"></bds-upload>`,
    });

    const upload = page.rootInstance;
    
    const mockFile1 = new File(['content1'], 'test1.txt', { type: 'text/plain' });
    const mockFile2 = new File(['content2'], 'test2.txt', { type: 'text/plain' });
    const mockFiles = [mockFile1, mockFile2];

    upload.onUploadClick(mockFiles);
    await page.waitForChanges();

    expect(upload.files).toEqual([mockFile1]);
    expect(upload.haveFiles).toBe(true);
  });

  it('should render file preview when files are uploaded', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
    
    upload.files = [mockFile];
    upload.haveFiles = true;
    await page.waitForChanges();

    const preview = page.root.shadowRoot.querySelector('.upload__preview');
    expect(preview).toBeTruthy();

    const icon = preview.querySelector('bds-icon[name="attach"]');
    expect(icon).toBeTruthy();

    const fileName = preview.querySelector('.preview-text');
    expect(fileName.textContent).toBe('test.txt');

    const deleteButton = preview.querySelector('bds-button-icon[icon="trash"]');
    expect(deleteButton).toBeTruthy();
  });

  it('should show file count for multiple files', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload multiple="true"></bds-upload>`,
    });

    const upload = page.rootInstance;
    const mockFile1 = new File(['content1'], 'test1.txt', { type: 'text/plain' });
    const mockFile2 = new File(['content2'], 'test2.txt', { type: 'text/plain' });
    
    upload.files = [mockFile1, mockFile2];
    upload.haveFiles = true;
    await page.waitForChanges();

    const countText = page.root.shadowRoot.querySelector('.preview-length');
    expect(countText).toBeTruthy();
  });

  it('should delete file when delete button is clicked', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
    
    upload.files = [mockFile];
    upload.haveFiles = true;
    await page.waitForChanges();

    // Test deleteFile method
    await upload.deleteFile(0);

    expect(upload.files).toEqual([]);
    expect(upload.haveFiles).toBe(false);
  });

  it('should delete all files when deleteAllFiles is called', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    const mockFile1 = new File(['content1'], 'test1.txt', { type: 'text/plain' });
    const mockFile2 = new File(['content2'], 'test2.txt', { type: 'text/plain' });
    
    upload.files = [mockFile1, mockFile2];
    upload.haveFiles = true;
    await page.waitForChanges();

    await upload.deleteAllFiles();

    expect(upload.files).toEqual([]);
    expect(upload.haveFiles).toBe(false);
  });

  it('should emit bdsUploadChange event when files change', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
    
    let eventData;
    page.root.addEventListener('bdsUploadChange', (event: any) => {
      eventData = event.detail;
    });

    upload.onUploadClick([mockFile]);
    await page.waitForChanges();

    expect(eventData).toEqual({ value: [mockFile] });
  });

  it('should emit bdsUploadDelete event when file is deleted', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    const mockFile = new File(['content'], 'test.txt', { type: 'text/plain' });
    
    upload.files = [mockFile];
    upload.haveFiles = true;

    let eventData;
    page.root.addEventListener('bdsUploadDelete', (event: any) => {
      eventData = event.detail;
    });

    await upload.deleteFile(0);

    expect(eventData).toEqual({ value: [mockFile] });
  });

  it('should validate file format when dataAccept is provided', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload data-accept='[".pdf", ".doc"]'></bds-upload>`,
    });

    const upload = page.rootInstance;
    
    // Test valid file
    const validFile = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    upload.validationFiles(validFile, 0);
    expect(upload.formatError).toBe(false);

    // Test invalid file
    const invalidFile = new File(['content'], 'test.txt', { type: 'text/plain' });
    upload.validationFiles(invalidFile, 0);
    expect(upload.formatError).toBe(true);
  });

  it('should handle empty file list', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    
    const result = upload.onUploadClick([]);
    expect(result).toBe(false);
    expect(upload.haveFiles).toBe(false);
  });

  it('should update internal accepts when dataAccept changes', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    
    upload.dataAccept = ['.jpg', '.png'];
    upload.dataAcceptChanged();
    expect(upload.internalAccepts).toEqual(['.jpg', '.png']);

    upload.dataAccept = [];
    upload.dataAcceptChanged();
    expect(upload.internalAccepts).toEqual([]);
  });

  it('should handle keyboard events on label', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    const mockInput = {
      click: jest.fn()
    };
    upload.inputElement = mockInput as any;

    const enterEvent = {
      key: 'Enter'
    };

    upload.handleKeyDown(enterEvent);
    expect(mockInput.click).toHaveBeenCalled();
  });

  it('should not trigger click on non-Enter keys', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload></bds-upload>`,
    });

    const upload = page.rootInstance;
    const mockInput = {
      click: jest.fn()
    };
    upload.inputElement = mockInput as any;

    const spaceEvent = {
      key: 'Space'
    };

    upload.handleKeyDown(spaceEvent);
    expect(mockInput.click).not.toHaveBeenCalled();
  });

  it('should render different language translations', async () => {
    const page = await newSpecPage({
      components: [BdsUpload],
      html: `<bds-upload language="en_US"></bds-upload>`,
    });

    const upload = page.rootInstance;
    expect(upload.language).toBe('en_US');
  });
});
