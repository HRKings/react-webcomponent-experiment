import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore next line
import reactToWebComponent from 'react-to-webcomponent';

const modules = import.meta.globEager('./components/**/*.ts')

for (const individualImport in modules) {
  const webComponent = reactToWebComponent(modules[individualImport], React, ReactDOM);
  customElements.define(modules[individualImport].displayName, webComponent);
}
