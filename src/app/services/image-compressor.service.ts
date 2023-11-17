import { Injectable } from '@angular/core';
import Compressor from 'compressorjs';

@Injectable({
  providedIn: 'root',
})
export class ImageCompressorService {
  compress(image: File): Promise<any> {
    return new Promise((resolve, reject) => {
      new Compressor(image, {
        quality: 0.6,
        success: (compressedImage) => {
          resolve(compressedImage);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }
}
