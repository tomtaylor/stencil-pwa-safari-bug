import { TestWindow } from '@stencil/core/testing';
import { TyburnApp } from './tyburn-app';

describe('tyburn-app', () => {
  let window: TestWindow;

  beforeEach(async () => {
    window = new TestWindow();
    await window.load({
      components: [TyburnApp],
      html: '<tyburn-app></tyburn-app>'
    });
  });

  it('should update', async () => {
    await window.flush();
  });

});
