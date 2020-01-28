import {SanitizeHtmlPipe} from './sanitize-html.pipe';

describe('SanitizeHtmlPipePipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe(null);
    expect(pipe).toBeTruthy();
  });
});
