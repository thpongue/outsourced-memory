import { EscapeHtmlTagsPipe } from './escape-html-tags.pipe';

describe('EscapeHtmlTagsPipe', () => {
  it('create an instance', () => {
    const pipe = new EscapeHtmlTagsPipe();
    expect(pipe).toBeTruthy();
  });
});
