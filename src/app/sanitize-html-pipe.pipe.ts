import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtmlPipe'
})
export class SanitizeHtmlPipePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string): any {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
