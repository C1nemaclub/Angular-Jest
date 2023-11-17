import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ErrorService } from '../../services/error.service';
import { ImageCompressorService } from '../../services/image-compressor.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  private errorService = inject(ErrorService);
  private imageCompressorService = inject(ImageCompressorService);
  @ViewChild('imageEl') imageEl: ElementRef | null = null;

  fileError(comp: string, ex: string) {
    this.errorService.handleError(comp, ex);
  }

  executeUpload() {
    const myFile = this.imageEl?.nativeElement.files[0];
    console.log(myFile);
    this.uploadFile(myFile);
  }

  uploadFile(image: File) {
    this.imageCompressorService
      .compress(image)
      .then((res) => {
        console.log(res, '📷');
      })
      .catch((e) => {
        const exception = e.stack || e;
        this.fileError('ImageComponent', JSON.stringify(exception));
      });
  }
}
