import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'escapeHtmlTags'
})
export class EscapeHtmlTagsPipe implements PipeTransform {
  transform(html: string, type: string): any {
    let transformed: string = html.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

    if (type === 'code') {
      transformed = '<code>' + transformed + '</code>';
    }

    return transformed;
  }
}
