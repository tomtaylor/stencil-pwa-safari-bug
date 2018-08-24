import { Component, Listen } from '@stencil/core';
import "@stencil/router";

@Component({
  tag: 'tyburn-app',
  styleUrl: 'tyburn-app.css'
})
export class TyburnApp {

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen('window:swUpdate')
  async onSWUpdate() {
    return new Promise<void>((resolve, _) => {
      resolve();
    });
  }

  render() {
    return (
      <stencil-router>
        <stencil-route url="/" component="app-home" exact={true}/>
      </stencil-router>
    );
  }
}
