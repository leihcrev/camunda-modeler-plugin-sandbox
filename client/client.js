import { registerBpmnJSPlugin } from 'camunda-modeler-plugin-helpers';

import LoggingPlugin from './LoggingPlugin';
import JavaClassSelectPlugin from './JavaClassSelectPlugin';

// Register a plugin for bpmn-js
registerBpmnJSPlugin(LoggingPlugin);
registerBpmnJSPlugin(JavaClassSelectPlugin);
