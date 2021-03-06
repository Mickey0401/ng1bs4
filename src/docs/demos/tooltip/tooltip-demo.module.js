// Import Angular Resources
import template from './tooltip-demo.html';
import controller from './tooltip-demo.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./tooltip-demo.html';
import ControllerRaw from '!raw-loader!./tooltip-demo.controller.js';
import MarkdownRaw from '!raw-loader!./tooltip-demo.md';

// manipulate controller to pass raw files up to demo
controller.prototype.$onInit = function() {
  this.demo.html = TemplateRaw;
  this.demo.js = ControllerRaw;
  this.demo.md = MarkdownRaw;
};

// Component definition
const Component = {
  require: {
    demo: '^demo'
  },
  template,
  controller
};

// Register module, register component and export name
export default angular
  .module('ng1bs4.docs.tooltipDemo', [])
  .component('tooltipDemo', Component)
  .name;
