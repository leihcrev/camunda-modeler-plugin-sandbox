'use strict';
//@ts-check

class LoggingPlugin {

  // `eventBus` will be injected through dependency injection
  constructor(eventBus, injector) {
    // log injector
    console.log('injector', injector);

    // log 'eventBus.fire()'
    const fire = eventBus.fire.bind(eventBus);
    eventBus.fire = (type, data) => {
      if (type.toString() !== 'element.mousemove') { // ignore 'element.mousemove'
        console.log('type', type, 'data', data);
      }
      fire(type, data);
    };
  }
}

// Use `$inject` to specify what modules should be injected
LoggingPlugin.$inject = [ 'eventBus', 'injector' ];

// Specify the module using a unique name
// Use __init__ to make sure an instance will be created
export default {
  __init__: [ 'loggingPlugin' ],
  loggingPlugin: [ 'type', LoggingPlugin ]
};
