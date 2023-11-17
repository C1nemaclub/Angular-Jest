import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';
import { ErrorService } from '../../services/error.service';
import { ImageCompressorService } from '../../services/image-compressor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ElementRef } from '@angular/core';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;
  let errorService: ErrorService;
  let imageCompressorService: ImageCompressorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    errorService = TestBed.inject(ErrorService);
    imageCompressorService = TestBed.inject(ImageCompressorService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleError when handleError is called', async () => {
    const newFile = new File(['a'], 'file.txt');

    jest
      .spyOn(imageCompressorService, 'compress')
      .mockImplementation(() => Promise.reject(new Error('error')));
    const handleErrorSpy = jest
      .spyOn(errorService, 'handleError')
      .mockImplementation(() => {});
    const fileErrorSpy = jest.spyOn(component, 'fileError');

    await component.uploadFile(newFile);

    expect(handleErrorSpy).toHaveBeenCalledTimes(1);
    expect(fileErrorSpy).toHaveBeenCalledTimes(1);
  });

  it('should console log a string', async () => {
    console.log = jest.fn();
    const newFile = new File(['a'], 'file.txt');
    jest
      .spyOn(imageCompressorService, 'compress')
      .mockImplementation(() => Promise.resolve('string'));
    await component.uploadFile(newFile);
    expect(console.log).toHaveBeenCalledWith('string', '📷');
  });
});
