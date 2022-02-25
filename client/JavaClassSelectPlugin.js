'use strict';
//@ts-check

import { SelectEntry, isSelectEntryEdited } from '@bpmn-io/properties-panel';
import { useService } from 'bpmn-js-properties-panel';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';

isSelectEntryEdited
class JavaClassSelectPlugin {
  constructor(camundaPlatformPropertiesProvider, injector) {
    const getGroups = camundaPlatformPropertiesProvider.getGroups.bind(camundaPlatformPropertiesProvider);
    camundaPlatformPropertiesProvider.getGroups = (element) => {
      const updater = getGroups(element).bind(camundaPlatformPropertiesProvider);
      return groups => {
        groups = updater(groups);
        console.log('groups', groups);
        groups.forEach(group => {
          if (group.entries != undefined) {
            group.entries.forEach(entry => {
              if (entry.id === 'javaClass' && entry.component.type.name !== 'JavaClassSelect') {
                console.log('Replace javaClass', entry);
                entry.component = <JavaClassSelect element={ element } />;
                entry.isEdited = isSelectEntryEdited;
              }
            })
          }
        });
        return groups;
      };
    };
  }
}

function JavaClassSelect(props) {
  const {
    element,
    businessObject = getBusinessObject(element),
    id = 'javaClass'
  } = props;

  const commandStack = useService('commandStack');
  const translate = useService('translate');

  const getValue = () => {
    return businessObject.get('camunda:class');
  };

  const setValue = (value) => {
    commandStack.execute('element.updateModdleProperties', {
      element,
      moddleElement: businessObject,
      properties: {
        'camunda:class': value
      }
    });
  };

  const getOptions = () => {
    const options = [
      { value: 'package.ClassA', label: 'Class A' },
      { value: 'package.ClassB', label: 'Class B' },
      { value: 'package.ClassC', label: 'Class C' },
      { value: 'package.ClassD', label: 'Class D' }
    ];
    return options;
  };

  return SelectEntry({
    element,
    id,
    label: translate('Java class'),
    getValue,
    setValue,
    getOptions
  });
}

// Use `$inject` to specify what modules should be injected
JavaClassSelectPlugin.$inject = [ 'camundaPlatformPropertiesProvider', 'injector' ];

// Specify the module using a unique name
// Use __init__ to make sure an instance will be created
export default {
  __init__: [ 'javaClassSelectPlugin' ],
  javaClassSelectPlugin: [ 'type', JavaClassSelectPlugin ]
};
