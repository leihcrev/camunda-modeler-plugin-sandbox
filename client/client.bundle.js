/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/JavaClassSelectPlugin.js":
/*!*****************************************!*\
  !*** ./client/JavaClassSelectPlugin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bpmn_io_properties_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bpmn-io/properties-panel */ "./node_modules/@bpmn-io/properties-panel/dist/index.esm.js");
/* harmony import */ var bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bpmn-js-properties-panel */ "./node_modules/bpmn-js-properties-panel/index.js");
/* harmony import */ var bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmn-js/lib/util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js");
/* harmony import */ var _bpmn_io_properties_panel_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bpmn-io/properties-panel/preact/jsx-runtime */ "./node_modules/@bpmn-io/properties-panel/preact/jsx-runtime/dist/jsxRuntime.module.js");
 //@ts-check





_bpmn_io_properties_panel__WEBPACK_IMPORTED_MODULE_0__["isSelectEntryEdited"];

class JavaClassSelectPlugin {
  constructor(camundaPlatformPropertiesProvider, injector) {
    const getGroups = camundaPlatformPropertiesProvider.getGroups.bind(camundaPlatformPropertiesProvider);

    camundaPlatformPropertiesProvider.getGroups = element => {
      const updater = getGroups(element).bind(camundaPlatformPropertiesProvider);
      return groups => {
        groups = updater(groups);
        console.log('groups', groups);
        groups.forEach(group => {
          if (group.entries != undefined) {
            group.entries.forEach(entry => {
              if (entry.id === 'javaClass' && entry.component.type.name !== 'JavaClassSelect') {
                console.log('Replace javaClass', entry);
                entry.component = Object(_bpmn_io_properties_panel_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(JavaClassSelect, {
                  element: element
                });
                entry.isEdited = _bpmn_io_properties_panel__WEBPACK_IMPORTED_MODULE_0__["isSelectEntryEdited"];
              }
            });
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
    businessObject = Object(bpmn_js_lib_util_ModelUtil__WEBPACK_IMPORTED_MODULE_2__["getBusinessObject"])(element),
    id = 'javaClass'
  } = props;
  const commandStack = Object(bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1__["useService"])('commandStack');
  const translate = Object(bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1__["useService"])('translate');
  const debounce = Object(bpmn_js_properties_panel__WEBPACK_IMPORTED_MODULE_1__["useService"])('debounceInput');

  const getValue = () => {
    return businessObject.get('camunda:class');
  };

  const setValue = value => {
    commandStack.execute('element.updateModdleProperties', {
      element,
      moddleElement: businessObject,
      properties: {
        'camunda:class': value
      }
    });
  };

  const getOptions = () => {
    const options = [{
      value: 'package.ClassA',
      label: 'Class A'
    }, {
      value: 'package.ClassB',
      label: 'Class B'
    }, {
      value: 'package.ClassC',
      label: 'Class C'
    }, {
      value: 'package.ClassD',
      label: 'Class D'
    }];
    return options;
  };

  return Object(_bpmn_io_properties_panel__WEBPACK_IMPORTED_MODULE_0__["SelectEntry"])({
    element,
    id,
    label: translate('Java class'),
    getValue,
    setValue,
    getOptions
  });
} // Use `$inject` to specify what modules should be injected


JavaClassSelectPlugin.$inject = ['camundaPlatformPropertiesProvider', 'injector']; // Specify the module using a unique name
// Use __init__ to make sure an instance will be created

/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: ['javaClassSelectPlugin'],
  javaClassSelectPlugin: ['type', JavaClassSelectPlugin]
});

/***/ }),

/***/ "./client/LoggingPlugin.js":
/*!*********************************!*\
  !*** ./client/LoggingPlugin.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 //@ts-check

class LoggingPlugin {
  // `eventBus` will be injected through dependency injection
  constructor(eventBus, injector) {
    // log injector
    console.log('injector', injector); // log 'eventBus.fire()'

    const fire = eventBus.fire.bind(eventBus);

    eventBus.fire = (type, data) => {
      if (type.toString() !== 'element.mousemove') {
        // ignore 'element.mousemove'
        console.log('type', type, 'data', data);
      }

      fire(type, data);
    };
  }

} // Use `$inject` to specify what modules should be injected


LoggingPlugin.$inject = ['eventBus', 'injector']; // Specify the module using a unique name
// Use __init__ to make sure an instance will be created

/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: ['loggingPlugin'],
  loggingPlugin: ['type', LoggingPlugin]
});

/***/ }),

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var _LoggingPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoggingPlugin */ "./client/LoggingPlugin.js");
/* harmony import */ var _JavaClassSelectPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JavaClassSelectPlugin */ "./client/JavaClassSelectPlugin.js");


 // Register a plugin for bpmn-js

Object(camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["registerBpmnJSPlugin"])(_LoggingPlugin__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["registerBpmnJSPlugin"])(_JavaClassSelectPlugin__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/@bpmn-io/properties-panel/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@bpmn-io/properties-panel/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: ArrowIcon, CheckboxEntry, CollapsibleEntry, CreateIcon, DebounceInputModule, DeleteIcon, DescriptionContext, DescriptionEntry, DropdownButton, Group, Header, HeaderButton, LayoutContext, ListEntry, ListGroup, ListItem, NumberFieldEntry, PropertiesPanel, SelectEntry, SimpleEntry, TextAreaEntry, TextFieldEntry, ToggleSwitchEntry, isCheckboxEntryEdited, isNumberFieldEntryEdited, isSelectEntryEdited, isSimpleEntryEdited, isTextAreaEntryEdited, isTextFieldEntryEdited, isToggleSwitchEntryEdited, useDescriptionContext, useKeyFactory, useLayoutState, usePrevious */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowIcon", function() { return ArrowIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxEntry", function() { return CheckboxEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleEntry", function() { return CollapsibleEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIcon", function() { return CreateIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceInputModule", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIcon", function() { return DeleteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionContext", function() { return DescriptionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionEntry", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownButton", function() { return DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderButton", function() { return HeaderButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContext", function() { return LayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEntry", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return ListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFieldEntry", function() { return NumberFieldEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesPanel", function() { return PropertiesPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEntry", function() { return SelectEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEntry", function() { return Simple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaEntry", function() { return TextAreaEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldEntry", function() { return TextfieldEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSwitchEntry", function() { return ToggleSwitchEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCheckboxEntryEdited", function() { return isEdited$6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberFieldEntryEdited", function() { return isEdited$5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectEntryEdited", function() { return isEdited$4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSimpleEntryEdited", function() { return isEdited$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextAreaEntryEdited", function() { return isEdited$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextFieldEntryEdited", function() { return isEdited$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToggleSwitchEntryEdited", function() { return isEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescriptionContext", function() { return useDescriptionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyFactory", function() { return useKeyFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutState", function() { return useLayoutState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony import */ var _preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../preact/hooks */ "./node_modules/@bpmn-io/properties-panel/preact/hooks/dist/hooks.module.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preact/jsx-runtime */ "./node_modules/@bpmn-io/properties-panel/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");
/* harmony import */ var _preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../preact */ "./node_modules/@bpmn-io/properties-panel/preact/dist/preact.module.js");
/* harmony import */ var _preact_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../preact/compat */ "./node_modules/@bpmn-io/properties-panel/preact/compat/dist/compat.module.js");








/**
 * @typedef { { getElementLabel: Function, getTypeLabel: Function, getElementIcon: Function } } HeaderProvider
 */

/**
 * @param {Object} props
 * @param {Object} props.element,
 * @param {HeaderProvider} props.headerProvider
 */
function Header(props) {
  const {
    element,
    headerProvider
  } = props;
  const {
    getElementLabel,
    getTypeLabel,
    getElementIcon
  } = headerProvider;
  const label = getElementLabel(element);
  const type = getTypeLabel(element);
  const ElementIcon = getElementIcon(element);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-header",
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      class: "bio-properties-panel-header-icon",
      children: ElementIcon && Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ElementIcon, {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      })
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      class: "bio-properties-panel-header-labels",
      children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        title: type,
        class: "bio-properties-panel-header-type",
        children: type
      }), getElementLabel(element) ? Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        title: label,
        class: "bio-properties-panel-header-label",
        children: label
      }) : null]
    })]
  });
}

/**
 * @pinussilvestrus: we need to introduce our own hook to persist the previous
 * state on updates.
 *
 * cf. https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */

function usePrevious(value) {
  const ref = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = value;
  });
  return ref.current;
}

const KEY_LENGTH = 6;
/**
 * Create a persistent key factory for plain objects without id.
 *
 * @example
 * ```jsx
 * function List({ objects }) {
 *   const getKey = useKeyFactory();
 *   return (<ol>{
 *     objects.map(obj => {
 *       const key = getKey(obj);
 *       return <li key={key}>obj.name</li>
 *     })
 *   }</ol>);
 * }
 * ```
 *
 * @param {any[]} dependencies
 * @returns {(element: object) => string}
 */

function useKeyFactory(dependencies = []) {
  const map = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => new Map(), dependencies);

  const getKey = el => {
    let key = map.get(el);

    if (!key) {
      key = Math.random().toString().slice(-KEY_LENGTH);
      map.set(el, key);
    }

    return key;
  };

  return getKey;
}

const DescriptionContext = Object(_preact__WEBPACK_IMPORTED_MODULE_5__["createContext"])({
  description: {},
  getDescriptionForId: () => {}
});

const LayoutContext = Object(_preact__WEBPACK_IMPORTED_MODULE_5__["createContext"])({
  layout: {},
  setLayout: () => {},
  getLayoutForKey: () => {},
  setLayoutForKey: () => {}
});

/**
 * Creates a state that persists in the global LayoutContext.
 *
 * @example
 * ```jsx
 * function Group(props) {
 *   const [ open, setOpen ] = useLayoutState([ 'groups', 'foo', 'open' ], false);
 * }
 * ```
 *
 * @param {(string|number)[]} path
 * @param {any} [defaultValue]
 *
 * @returns {[ any, Function ]}
 */

function useLayoutState(path, defaultValue) {
  const {
    getLayoutForKey,
    setLayoutForKey
  } = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LayoutContext);
  const layoutForKey = getLayoutForKey(path, defaultValue);
  const [value, set] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(layoutForKey);

  const setState = newValue => {
    // (1) set component state
    set(newValue); // (2) set context

    setLayoutForKey(path, newValue);
  };

  return [value, setState];
}

/**
 * Accesses the global DescriptionContext and returns a description for a given id and element.
 *
 * @example
 * ```jsx
 * function TextField(props) {
 *   const description = useDescriptionContext('input1', element);
 * }
 * ```
 *
 * @param {string} id
 * @param {djs.model.Base} element
 *
 * @returns {string}
 */

function useDescriptionContext(id, element) {
  const {
    getDescriptionForId
  } = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"])(DescriptionContext);
  return getDescriptionForId(id, element);
}

var ArrowIcon = function ArrowIcon(props) {
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", { ...props,
    children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
      fillRule: "evenodd",
      d: "m11.657 8-4.95 4.95a1 1 0 0 1-1.414-1.414L8.828 8 5.293 4.464A1 1 0 1 1 6.707 3.05L11.657 8z"
    })
  });
};

ArrowIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var CreateIcon = function CreateIcon(props) {
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", { ...props,
    children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
      fillRule: "evenodd",
      d: "M9 13V9h4a1 1 0 0 0 0-2H9V3a1 1 0 1 0-2 0v4H3a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0z"
    })
  });
};

CreateIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

var DeleteIcon = function DeleteIcon(props) {
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", { ...props,
    children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
      fillRule: "evenodd",
      d: "M12 6v7c0 1.1-.4 1.55-1.5 1.55h-5C4.4 14.55 4 14.1 4 13V6h8zm-1.5 1.5h-5v4.3c0 .66.5 1.2 1.111 1.2H9.39c.611 0 1.111-.54 1.111-1.2V7.5zM13 3h-2l-1-1H6L5 3H3v1.5h10V3z"
    })
  });
};

DeleteIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};

function Group(props) {
  const {
    id,
    entries = [],
    label
  } = props;
  const [open, setOpen] = useLayoutState(['groups', id, 'open'], false);

  const toggleOpen = () => setOpen(!open);

  const [edited, setEdited] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // set edited state depending on all entries

  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const hasOneEditedEntry = entries.find(entry => {
      const {
        id,
        isEdited
      } = entry;
      const entryNode = Object(min_dom__WEBPACK_IMPORTED_MODULE_4__["query"])(`[data-entry-id="${id}"]`);

      if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(isEdited) || !entryNode) {
        return false;
      }

      const inputNode = Object(min_dom__WEBPACK_IMPORTED_MODULE_4__["query"])('.bio-properties-panel-input', entryNode);
      return isEdited(inputNode);
    });
    setEdited(hasOneEditedEntry);
  }, [entries]);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-group",
    "data-group-id": 'group-' + id,
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-group-header', edited ? '' : 'empty', open ? 'open' : ''),
      onClick: toggleOpen,
      children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        title: label,
        class: "bio-properties-panel-group-header-title",
        children: label
      }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
        class: "bio-properties-panel-group-header-buttons",
        children: [edited && Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(DataMarker, {}), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
          title: "Toggle section",
          class: "bio-properties-panel-group-header-button bio-properties-panel-arrow",
          children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ArrowIcon, {
            class: open ? 'bio-properties-panel-arrow-down' : 'bio-properties-panel-arrow-right'
          })
        })]
      })]
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-group-entries', open ? 'open' : ''),
      children: entries.map(e => e.component)
    })]
  });
}

function DataMarker() {
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    title: "Section contains data",
    class: "bio-properties-panel-dot"
  });
}

const DEFAULT_LAYOUT = {
  open: true
};
const DEFAULT_DESCRIPTION = {};
/**
 * @typedef { {
 *    component: import('preact').ComponentChild,
 *    id: String,
 *    isEdited?: Function
 * } } EntryDefinition
 *
 * @typedef { {
 *    autoFocusEntry: String,
 *    autoOpen?: Boolean,
 *    entries: Array<EntryDefinition>,
 *    id: String,
 *    label: String,
 *    remove: (event: MouseEvent) => void
 * } } ListItemDefinition
 *
 * @typedef { {
 *    add: (event: MouseEvent) => void,
 *    component: import('preact').Component,
 *    element: Object,
 *    id: String,
 *    items: Array<ListItemDefinition>,
 *    label: String,
 *    shouldSort?: Boolean,
 *    shouldOpen?: Boolean
 * } } ListGroupDefinition
 *
 * @typedef { {
 *    component?: import('preact').Component,
 *    entries: Array<EntryDefinition>,
 *    id: String,
 *    label: String
 * } } GroupDefinition
 *
 *  @typedef { {
 *    [id: String]: GetDescriptionFunction
 * } } DescriptionConfig
 *
 * @callback { {
 * @param {string} id
 * @param {djs.model.base} element
 * @returns {string}
 * } } GetDescriptionFunction
 *
 */

/**
 * A basic properties panel component. Describes *how* content will be rendered, accepts
 * data from implementor to describe *what* will be rendered.
 *
 * @param {Object} props
 * @param {Object} props.element
 * @param {import('./components/Header').HeaderProvider} props.headerProvider
 * @param {Array<GroupDefinition|ListGroupDefinition>} props.groups
 * @param {Object} [props.layoutConfig]
 * @param {Function} [props.layoutChanged]
 * @param {DescriptionConfig} [props.descriptionConfig]
 * @param {Function} [props.descriptionLoaded]
 */

function PropertiesPanel(props) {
  const {
    element,
    headerProvider,
    groups,
    layoutConfig = {},
    layoutChanged,
    descriptionConfig = {},
    descriptionLoaded
  } = props; // set-up layout context

  const [layout, setLayout] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(createLayout(layoutConfig));
  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (typeof layoutChanged === 'function') {
      layoutChanged(layout);
    }
  }, [layout, layoutChanged]);

  const getLayoutForKey = (key, defaultValue) => {
    return Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["get"])(layout, key, defaultValue);
  };

  const setLayoutForKey = (key, config) => {
    const newLayout = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, layout);
    Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["set"])(newLayout, key, config);
    setLayout(newLayout);
  };

  const layoutContext = {
    layout,
    setLayout,
    getLayoutForKey,
    setLayoutForKey
  }; // set-up description context

  const description = createDescriptionContext(descriptionConfig);

  if (typeof descriptionLoaded === 'function') {
    descriptionLoaded(description);
  }

  const getDescriptionForId = (id, element) => {
    return description[id] && description[id](element);
  };

  const descriptionContext = {
    description,
    getDescriptionForId
  };

  if (!element) {
    return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      class: "bio-properties-panel-placeholder",
      children: "Select an element to edit its properties."
    });
  }

  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(DescriptionContext.Provider, {
    value: descriptionContext,
    children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(LayoutContext.Provider, {
      value: layoutContext,
      children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
        class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel', layout.open ? 'open' : ''),
        children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Header, {
          element: element,
          headerProvider: headerProvider
        }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
          class: "bio-properties-panel-scroll-container",
          children: groups.map(group => {
            const {
              component: GroupComponent = Group,
              id
            } = group;
            return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(GroupComponent, {
              element: element,
              ...group
            }, id);
          })
        })]
      })
    })
  });
} // helpers //////////////////

function createLayout(overrides) {
  return { ...DEFAULT_LAYOUT,
    ...overrides
  };
}

function createDescriptionContext(overrides) {
  return { ...DEFAULT_DESCRIPTION,
    ...overrides
  };
}

function DropdownButton(props) {
  const {
    class: className,
    children,
    menuItems = []
  } = props;
  const dropdownRef = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const menuRef = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [open, setOpen] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const close = () => setOpen(false);

  function onDropdownToggle(event) {
    if (menuRef.current && menuRef.current.contains(event.target)) {
      return;
    }

    event.stopPropagation();
    setOpen(open => !open);
  }

  function onActionClick(event, action) {
    event.stopPropagation();
    close();
    action();
  }

  useGlobalClick([dropdownRef.current], () => close());
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-dropdown-button', {
      open
    }, className),
    onClick: onDropdownToggle,
    ref: dropdownRef,
    children: [children, Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      class: "bio-properties-panel-dropdown-button__menu",
      ref: menuRef,
      children: menuItems.map((item, index) => Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(MenuItem, {
        onClick: onActionClick,
        item: item
      }, index))
    })]
  });
}

function MenuItem({
  item,
  onClick
}) {
  if (item.separator) {
    return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      class: "bio-properties-panel-dropdown-button__menu-item bio-properties-panel-dropdown-button__menu-item--separator"
    });
  }

  if (item.action) {
    return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
      class: "bio-properties-panel-dropdown-button__menu-item bio-properties-panel-dropdown-button__menu-item--actionable",
      onClick: event => onClick(event, item.action),
      children: item.entry
    });
  }

  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    class: "bio-properties-panel-dropdown-button__menu-item",
    children: item.entry
  });
}
/**
 *
 * @param {Array<null | Element>} ignoredElements
 * @param {Function} callback
 */


function useGlobalClick(ignoredElements, callback) {
  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    /**
     * @param {MouseEvent} event
     */
    function listener(event) {
      if (ignoredElements.some(element => element && element.contains(event.target))) {
        return;
      }

      callback();
    }

    document.addEventListener('click', listener, {
      capture: true
    });
    return () => document.removeEventListener('click', listener, {
      capture: true
    });
  }, [...ignoredElements, callback]);
}

function HeaderButton(props) {
  const {
    children = null,
    class: classname,
    onClick = () => {},
    ...otherProps
  } = props;
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", { ...otherProps,
    onClick: onClick,
    class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-group-header-button', classname),
    children: children
  });
}

function CollapsibleEntry(props) {
  const {
    id,
    entries = [],
    label,
    remove,
    open: shouldOpen
  } = props;
  const [open, setOpen] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(shouldOpen);

  const toggleOpen = () => setOpen(!open); // todo(pinussilvestrus): translate once we have a translate mechanism for the core


  const placeholderLabel = '<empty>';
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    "data-entry-id": id,
    class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-collapsible-entry', open ? 'open' : ''),
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      class: "bio-properties-panel-collapsible-entry-header",
      onClick: toggleOpen,
      children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        title: label || placeholderLabel,
        class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-collapsible-entry-header-title', !label && 'empty'),
        children: label || placeholderLabel
      }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
        title: "Toggle list item",
        class: "bio-properties-panel-arrow  bio-properties-panel-collapsible-entry-arrow",
        children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ArrowIcon, {
          class: open ? 'bio-properties-panel-arrow-down' : 'bio-properties-panel-arrow-right'
        })
      }), remove ? Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
        title: "Delete item",
        class: "bio-properties-panel-remove-entry",
        onClick: remove,
        children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(DeleteIcon, {})
      }) : null]
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-collapsible-entry-entries', open ? 'open' : ''),
      children: entries.map(e => e.component)
    })]
  });
}

function ListItem(props) {
  const {
    autoOpen,
    autoFocusEntry
  } = props; // focus specified entry on auto open

  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (autoOpen && autoFocusEntry) {
      const entry = Object(min_dom__WEBPACK_IMPORTED_MODULE_4__["query"])(`[data-entry-id="${autoFocusEntry}"]`);
      const focusableInput = Object(min_dom__WEBPACK_IMPORTED_MODULE_4__["query"])('.bio-properties-panel-input', entry);

      if (focusableInput) {
        if (Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(focusableInput.select)) {
          focusableInput.select();
        } else if (Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(focusableInput.focus)) {
          focusableInput.focus();
        }
      }
    }
  }, [autoOpen, autoFocusEntry]);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    class: "bio-properties-panel-list-item",
    children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CollapsibleEntry, { ...props,
      open: autoOpen
    })
  });
}

const noop = () => {};
/**
 * @param {import('../PropertiesPanel').ListGroupDefinition} props
 */


function ListGroup(props) {
  const {
    element,
    id,
    items,
    label,
    add,
    shouldSort = true,
    shouldOpen = true
  } = props;
  const [open, setOpen] = useLayoutState(['groups', id, 'open'], false);
  const [ordering, setOrdering] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [newItemAdded, setNewItemAdded] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const prevItems = usePrevious(items);
  const prevElement = usePrevious(element);
  const elementChanged = element !== prevElement;
  const shouldHandleEffects = !elementChanged && (shouldSort || shouldOpen); // reset initial ordering when element changes (before first render)

  if (elementChanged) {
    setOrdering(createOrdering(shouldSort ? sortItems(items) : items));
  } // keep ordering in sync to items - and open changes
  // (0) set initial ordering from given items


  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!prevItems || !shouldSort) {
      setOrdering(createOrdering(items));
    }
  }, [items, element]); // (1) items were added

  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (shouldHandleEffects && prevItems && items.length > prevItems.length) {
      let add = [];
      items.forEach(item => {
        if (!ordering.includes(item.id)) {
          add.push(item.id);
        }
      });
      let newOrdering = ordering; // open if not open and configured

      if (!open && shouldOpen) {
        toggleOpen(); // if I opened and I should sort, then sort items

        if (shouldSort) {
          newOrdering = createOrdering(sortItems(items));
        }
      } // add new items on top or bottom depending on sorting behavior


      newOrdering = newOrdering.filter(item => !add.includes(item));

      if (shouldSort) {
        newOrdering.unshift(...add);
      } else {
        newOrdering.push(...add);
      }

      setOrdering(newOrdering);
      setNewItemAdded(true);
    } else {
      setNewItemAdded(false);
    }
  }, [items, open, shouldHandleEffects]); // (2) sort items on open if shouldSort is set

  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (shouldSort && open && !newItemAdded) {
      setOrdering(createOrdering(sortItems(items)));
    }
  }, [open, shouldSort]); // (3) items were deleted

  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (shouldHandleEffects && prevItems && items.length < prevItems.length) {
      let keep = [];
      ordering.forEach(o => {
        if (getItem(items, o)) {
          keep.push(o);
        }
      });
      setOrdering(keep);
    }
  }, [items, shouldHandleEffects]);

  const toggleOpen = () => setOpen(!open);

  const hasItems = !!items.length;
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-group",
    "data-group-id": 'group-' + id,
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-group-header', hasItems ? '' : 'empty', hasItems && open ? 'open' : ''),
      onClick: hasItems ? toggleOpen : noop,
      children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        title: label,
        class: "bio-properties-panel-group-header-title",
        children: label
      }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
        class: "bio-properties-panel-group-header-buttons",
        children: [add ? Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("button", {
          title: "Create new list item",
          class: "bio-properties-panel-group-header-button bio-properties-panel-add-entry",
          onClick: add,
          children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CreateIcon, {}), !hasItems ? Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
            class: "bio-properties-panel-add-entry-label",
            children: "Create"
          }) : null]
        }) : null, hasItems ? Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
          title: `List contains ${items.length} item${items.length != 1 ? 's' : ''}`,
          class: "bio-properties-panel-list-badge",
          children: items.length
        }) : null, hasItems ? Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
          title: "Toggle section",
          class: "bio-properties-panel-group-header-button bio-properties-panel-arrow",
          children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ArrowIcon, {
            class: open ? 'bio-properties-panel-arrow-down' : 'bio-properties-panel-arrow-right'
          })
        }) : null]
      })]
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-list', open && hasItems ? 'open' : ''),
      children: ordering.map((o, index) => {
        const item = getItem(items, o);

        if (!item) {
          return;
        }

        return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ListItem, {
          // if item was added, open first or last item based on ordering
          autoOpen: newItemAdded && (shouldSort ? index === 0 : index === ordering.length - 1),
          ...item
        }, item.id);
      })
    })]
  });
} // helpers ////////////////////

/**
 * Sorts given items alphanumeric by label
 */

function sortItems(items) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(items, i => i.label.toLowerCase());
}

function getItem(items, id) {
  return Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["find"])(items, i => i.id === id);
}

function createOrdering(items) {
  return items.map(i => i.id);
}

function Description(props) {
  const {
    element,
    forId,
    value
  } = props;
  const contextDescription = useDescriptionContext(forId, element);
  const description = value || contextDescription;

  if (description) {
    return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      class: "bio-properties-panel-description",
      children: description
    });
  }
}

function Checkbox(props) {
  const {
    id,
    label,
    onChange,
    disabled,
    value = false
  } = props;

  const handleChange = ({
    target
  }) => {
    onChange(target.checked);
  };

  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-checkbox",
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", {
      id: prefixId$6(id),
      name: id,
      type: "checkbox",
      class: "bio-properties-panel-input",
      onChange: handleChange,
      checked: value,
      disabled: disabled
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
      for: prefixId$6(id),
      class: "bio-properties-panel-label",
      children: label
    })]
  });
}
/**
 * @param {Object} props
 * @param {Object} props.element
 * @param {String} props.id
 * @param {String} props.description
 * @param {String} props.label
 * @param {Function} props.getValue
 * @param {Function} props.setValue
 * @param {boolean} [props.disabled]
 */


function CheckboxEntry(props) {
  const {
    element,
    id,
    description,
    label,
    getValue,
    setValue,
    disabled
  } = props;
  const value = getValue(element);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-entry bio-properties-panel-checkbox-entry",
    "data-entry-id": id,
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Checkbox, {
      id: id,
      label: label,
      onChange: setValue,
      value: value,
      disabled: disabled
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Description, {
      forId: id,
      element: element,
      value: description
    })]
  });
}
function isEdited$6(node) {
  return node && !!node.checked;
} // helpers /////////////////

function prefixId$6(id) {
  return `bio-properties-panel-${id}`;
}

function List(props) {
  const {
    id,
    element,
    items = [],
    renderItem,
    label = '<empty>',
    open: shouldOpen,
    onAdd,
    onRemove,
    autoFocusEntry,
    compareFn
  } = props;
  const [open, setOpen] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!shouldOpen);
  const hasItems = !!items.length;

  const toggleOpen = () => hasItems && setOpen(!open);

  const opening = !usePrevious(open) && open;
  const elementChanged = usePrevious(element) !== element;
  const shouldReset = opening || elementChanged;
  const sortedItems = useSortedItems(items, compareFn, shouldReset);
  const newItems = useNewItems(items, elementChanged);
  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (open && !hasItems) {
      setOpen(false);
    }
  }, [open, hasItems]);
  /**
   * @param {MouseEvent} event
   */

  function addItem(event) {
    event.stopPropagation();
    onAdd();

    if (!open) {
      setOpen(true);
    }
  }

  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    "data-entry-id": id,
    class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-entry', 'bio-properties-panel-list-entry', hasItems ? '' : 'empty', open ? 'open' : ''),
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      class: "bio-properties-panel-list-entry-header",
      onClick: toggleOpen,
      children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        title: label,
        class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-list-entry-header-title', open && 'open'),
        children: label
      }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
        class: "bio-properties-panel-list-entry-header-buttons",
        children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("button", {
          title: "Create new list item",
          onClick: addItem,
          class: "bio-properties-panel-add-entry",
          children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CreateIcon, {}), !hasItems ? Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
            class: "bio-properties-panel-add-entry-label",
            children: "Create"
          }) : null]
        }), hasItems && Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
          title: `List contains ${items.length} item${items.length != 1 ? 's' : ''}`,
          class: "bio-properties-panel-list-badge",
          children: items.length
        }), hasItems && Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
          title: "Toggle list item",
          class: "bio-properties-panel-arrow",
          children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ArrowIcon, {
            class: open ? 'bio-properties-panel-arrow-down' : 'bio-properties-panel-arrow-right'
          })
        })]
      })]
    }), hasItems && Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ItemsList, {
      autoFocusEntry: autoFocusEntry,
      id: id,
      open: open,
      items: sortedItems,
      newItems: newItems,
      onRemove: onRemove,
      renderItem: renderItem
    })]
  });
}

function ItemsList(props) {
  const {
    autoFocusEntry,
    id,
    items,
    newItems,
    open,
    onRemove,
    renderItem
  } = props;
  const getKey = useKeyFactory();
  const newItem = newItems[0];
  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (newItem && autoFocusEntry) {
      // (0) select the parent entry (containing all list items)
      const entry = Object(min_dom__WEBPACK_IMPORTED_MODULE_4__["query"])(`[data-entry-id="${id}"]`); // (1) select the first input or a custom element to be focussed

      const selector = typeof autoFocusEntry === 'boolean' ? '.bio-properties-panel-input' : autoFocusEntry;
      const focusableInput = Object(min_dom__WEBPACK_IMPORTED_MODULE_4__["query"])(selector, entry); // (2) set focus

      if (focusableInput) {
        if (Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(focusableInput.select)) {
          focusableInput.select();
        } else if (Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(focusableInput.focus)) {
          focusableInput.focus();
        }
      }
    }
  }, [newItem, autoFocusEntry, id]);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ol", {
    class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-list-entry-items', open ? 'open' : ''),
    children: items.map((item, index) => {
      const key = getKey(item);
      return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
        class: "bio-properties-panel-list-entry-item",
        children: [renderItem(item, index, item === newItem), onRemove && Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
          type: "button",
          title: "Delete item",
          class: "bio-properties-panel-remove-entry bio-properties-panel-remove-list-entry",
          onClick: () => onRemove && onRemove(item),
          children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(DeleteIcon, {})
        })]
      }, key);
    })
  });
}
/**
 * Place new items in the beginning of the list and sort the rest with provided function.
 *
 * @template Item
 * @param {Item[]} currentItems
 * @param {(a: Item, b: Item) => 0 | 1 | -1} [compareFn] function used to sort items
 * @param {boolean} [shouldReset=false] set to `true` to reset state of the hook
 * @returns {Item[]}
 */


function useSortedItems(currentItems, compareFn, shouldReset = false) {
  const itemsRef = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"])(currentItems.slice()); // (1) Reset and optionally sort.

  if (shouldReset) {
    itemsRef.current = currentItems.slice();

    if (compareFn) {
      itemsRef.current.sort(compareFn);
    }
  } else {
    const items = itemsRef.current; // (2) Add new item to the list.

    for (const item of currentItems) {
      if (!items.includes(item)) {
        // Unshift or push depending on whether we have a compareFn
        compareFn ? items.unshift(item) : items.push(item);
      }
    } // (3) Filter out removed items.


    itemsRef.current = items.filter(item => currentItems.includes(item));
  }

  return itemsRef.current;
}

function useNewItems(items = [], shouldReset) {
  const previousItems = usePrevious(items.slice()) || [];

  if (shouldReset) {
    return [];
  }

  return previousItems ? items.filter(item => !previousItems.includes(item)) : [];
}

function NumberField(props) {
  const {
    debounce,
    disabled,
    id,
    label,
    max,
    min,
    onInput,
    step,
    value = ''
  } = props;
  const handleInput = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return debounce(event => {
      const {
        validity,
        value
      } = event.target;

      if (validity.valid) {
        onInput(value ? parseFloat(value) : undefined);
      }
    });
  }, [onInput, debounce]);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-numberfield",
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
      for: prefixId$5(id),
      class: "bio-properties-panel-label",
      children: label
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", {
      id: prefixId$5(id),
      type: "number",
      name: id,
      spellCheck: "false",
      autoComplete: "off",
      disabled: disabled,
      class: "bio-properties-panel-input",
      max: max,
      min: min,
      onInput: handleInput,
      step: step,
      value: value
    })]
  });
}
/**
 * @param {Object} props
 * @param {Boolean} props.debounce
 * @param {String} props.description
 * @param {Boolean} props.disabled
 * @param {Object} props.element
 * @param {Function} props.getValue
 * @param {String} props.id
 * @param {String} props.label
 * @param {String} props.max
 * @param {String} props.min
 * @param {Function} props.setValue
 * @param {String} props.step
 */


function NumberFieldEntry(props) {
  const {
    debounce,
    description,
    disabled,
    element,
    getValue,
    id,
    label,
    max,
    min,
    setValue,
    step
  } = props;
  const value = getValue(element);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-entry",
    "data-entry-id": id,
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(NumberField, {
      debounce: debounce,
      disabled: disabled,
      id: id,
      label: label,
      onInput: setValue,
      max: max,
      min: min,
      step: step,
      value: value
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Description, {
      forId: id,
      element: element,
      value: description
    })]
  });
}
function isEdited$5(node) {
  return node && !!node.value;
} // helpers /////////////////

function prefixId$5(id) {
  return `bio-properties-panel-${id}`;
}

function Select(props) {
  const {
    id,
    label,
    onChange,
    options = [],
    value,
    disabled
  } = props;

  const handleChange = ({
    target
  }) => {
    onChange(target.value);
  };

  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-select",
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
      for: prefixId$4(id),
      class: "bio-properties-panel-label",
      children: label
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("select", {
      id: prefixId$4(id),
      name: id,
      class: "bio-properties-panel-input",
      onInput: handleChange,
      value: value,
      disabled: disabled,
      children: options.map((option, idx) => {
        return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("option", {
          value: option.value,
          disabled: option.disabled,
          children: option.label
        }, idx);
      })
    })]
  });
}
/**
 * @param {object} props
 * @param {object} props.element
 * @param {string} props.id
 * @param {string} [props.description]
 * @param {string} props.label
 * @param {Function} props.getValue
 * @param {Function} props.setValue
 * @param {Function} props.getOptions
 * @param {boolean} [props.disabled]
 */


function SelectEntry(props) {
  const {
    element,
    id,
    description,
    label,
    getValue,
    setValue,
    getOptions,
    disabled
  } = props;
  const value = getValue(element);
  const options = getOptions(element);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-entry",
    "data-entry-id": id,
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Select, {
      id: id,
      label: label,
      value: value,
      onChange: setValue,
      options: options,
      disabled: disabled
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Description, {
      forId: id,
      element: element,
      value: description
    })]
  });
}
function isEdited$4(node) {
  return node && !!node.value;
} // helpers /////////////////

function prefixId$4(id) {
  return `bio-properties-panel-${id}`;
}

function Simple(props) {
  const {
    debounce,
    disabled,
    element,
    getValue,
    id,
    onBlur,
    onFocus,
    setValue
  } = props;
  const handleInput = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return debounce(({
      target
    }) => setValue(target.value.length ? target.value : undefined));
  }, [setValue, debounce]);
  const value = getValue(element);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    class: "bio-properties-panel-simple",
    children: Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", {
      id: prefixId$3(id),
      type: "text",
      name: id,
      spellCheck: "false",
      autoComplete: "off",
      disabled: disabled,
      class: "bio-properties-panel-input",
      onInput: handleInput,
      "aria-label": value || '<empty>',
      onFocus: onFocus,
      onBlur: onBlur,
      value: value || ''
    })
  });
}
function isEdited$3(node) {
  return node && !!node.value;
} // helpers /////////////////

function prefixId$3(id) {
  return `bio-properties-panel-${id}`;
}

function TextArea(props) {
  const {
    id,
    label,
    rows = 2,
    debounce,
    onInput,
    value = '',
    disabled,
    monospace
  } = props;
  const handleInput = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return debounce(({
      target
    }) => onInput(target.value.length ? target.value : undefined));
  }, [onInput, debounce]);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-textarea",
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
      for: prefixId$2(id),
      class: "bio-properties-panel-label",
      children: label
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("textarea", {
      id: prefixId$2(id),
      name: id,
      spellCheck: "false",
      class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-input', monospace ? 'bio-properties-panel-input-monospace' : ''),
      onInput: handleInput,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      rows: rows,
      value: value,
      disabled: disabled
    })]
  });
}
/**
 * @param {object} props
 * @param {object} props.element
 * @param {string} props.id
 * @param {string} props.description
 * @param {boolean} props.debounce
 * @param {string} props.label
 * @param {Function} props.getValue
 * @param {Function} props.setValue
 * @param {number} props.rows
 * @param {boolean} props.monospace
 * @param {boolean} [props.disabled]
 */


function TextAreaEntry(props) {
  const {
    element,
    id,
    description,
    debounce,
    label,
    getValue,
    setValue,
    rows,
    monospace,
    disabled
  } = props;
  const value = getValue(element);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-entry",
    "data-entry-id": id,
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TextArea, {
      id: id,
      label: label,
      value: value,
      onInput: setValue,
      rows: rows,
      debounce: debounce,
      monospace: monospace,
      disabled: disabled
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Description, {
      forId: id,
      element: element,
      value: description
    })]
  });
}
function isEdited$2(node) {
  return node && !!node.value;
} // helpers /////////////////

function prefixId$2(id) {
  return `bio-properties-panel-${id}`;
}

function Textfield(props) {
  const {
    debounce,
    disabled = false,
    id,
    label,
    onInput,
    value = ''
  } = props;
  const handleInput = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return debounce(({
      target
    }) => onInput(target.value.length ? target.value : undefined));
  }, [onInput, debounce]);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-textfield",
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
      for: prefixId$1(id),
      class: "bio-properties-panel-label",
      children: label
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", {
      id: prefixId$1(id),
      type: "text",
      name: id,
      spellCheck: "false",
      autoComplete: "off",
      disabled: disabled,
      class: "bio-properties-panel-input",
      onInput: handleInput,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      value: value || ''
    })]
  });
}
/**
 * @param {Object} props
 * @param {Object} props.element
 * @param {String} props.id
 * @param {String} props.description
 * @param {Boolean} props.debounce
 * @param {Boolean} props.disabled
 * @param {String} props.label
 * @param {Function} props.getValue
 * @param {Function} props.setValue
 * @param {Function} props.validate
 */


function TextfieldEntry(props) {
  const {
    element,
    id,
    description,
    debounce,
    disabled,
    label,
    getValue,
    setValue,
    validate
  } = props;
  const [error, setError] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [invalidValueCache, setInvalidValueCache] = Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let value = getValue(element);
  const prevValue = usePrevious(value); // validate again when value prop changed

  Object(_preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const err = validate ? validate(value) : null;
    setError(err);
  }, [value]); // validate on change

  const handleChange = newValue => {
    const err = validate ? validate(newValue) : null;

    if (err) {
      setInvalidValueCache(newValue);
    } else {
      setValue(newValue);
    }

    setError(err);
  }; // keep showing invalid value on errors, although it was not set


  if (prevValue === value && error) {
    value = invalidValueCache;
  }

  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bio-properties-panel-entry', error ? 'has-error' : ''),
    "data-entry-id": id,
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Textfield, {
      id: id,
      label: label,
      value: value,
      onInput: handleChange,
      debounce: debounce,
      disabled: disabled
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Description, {
      forId: id,
      element: element,
      value: description
    }), error && Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      class: "bio-properties-panel-error",
      children: error
    })]
  });
}
function isEdited$1(node) {
  return node && !!node.value;
} // helpers /////////////////

function prefixId$1(id) {
  return `bio-properties-panel-${id}`;
}

function ToggleSwitch(props) {
  const {
    id,
    label,
    onInput,
    value,
    switcherLabel
  } = props;

  const handleInput = async () => {
    onInput(!value);
  };

  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-toggle-switch",
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
      class: "bio-properties-panel-label",
      for: prefixId(id),
      children: label
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      class: "bio-properties-panel-field-wrapper",
      children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("label", {
        class: "bio-properties-panel-toggle-switch__switcher",
        children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", {
          id: prefixId(id),
          class: "bio-properties-panel-input",
          type: "checkbox",
          name: id,
          onInput: handleInput,
          checked: value
        }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
          class: "bio-properties-panel-toggle-switch__slider"
        })]
      }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        class: "bio-properties-panel-toggle-switch__label",
        children: switcherLabel
      })]
    })]
  });
}
/**
 * @param {Object} props
 * @param {Object} props.element
 * @param {String} props.id
 * @param {String} props.description
 * @param {String} props.label
 * @param {String} props.switcherLabel
 * @param {Function} props.getValue
 * @param {Function} props.setValue
 */


function ToggleSwitchEntry(props) {
  const {
    element,
    id,
    description,
    label,
    switcherLabel,
    getValue,
    setValue
  } = props;
  const value = getValue(element);
  return Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    class: "bio-properties-panel-entry bio-properties-panel-toggle-switch-entry",
    "data-entry-id": id,
    children: [Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ToggleSwitch, {
      id: id,
      label: label,
      value: value,
      onInput: setValue,
      switcherLabel: switcherLabel
    }), Object(_preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Description, {
      forId: id,
      element: element,
      value: description
    })]
  });
}
function isEdited(node) {
  return node && !!node.checked;
} // helpers /////////////////

function prefixId(id) {
  return `bio-properties-panel-${id}`;
}

const DEFAULT_DEBOUNCE_TIME = 300;
function debounceInput(debounceDelay) {
  return function _debounceInput(fn) {
    if (debounceDelay !== false) {
      var debounceTime = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(debounceDelay) ? debounceDelay : DEFAULT_DEBOUNCE_TIME;
      return Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(fn, debounceTime);
    } else {
      return fn;
    }
  };
}
debounceInput.$inject = ['config.debounceInput'];

var index = {
  debounceInput: ['factory', debounceInput]
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@bpmn-io/properties-panel/preact/compat/dist/compat.module.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@bpmn-io/properties-panel/preact/compat/dist/compat.module.js ***!
  \************************************************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, unstable_ImmediatePriority, unstable_UserBlockingPriority, unstable_NormalPriority, unstable_LowPriority, unstable_IdlePriority, unstable_runWithPriority, unstable_now */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return hn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_ImmediatePriority", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_UserBlockingPriority", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_NormalPriority", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_LowPriority", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_IdlePriority", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_runWithPriority", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_now", function() { return on; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks */ "./node_modules/@bpmn-io/properties-panel/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./node_modules/@bpmn-io/properties-panel/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return ___WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return ___WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return ___WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return ___WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return ___WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(___WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new ___WEBPACK_IMPORTED_MODULE_1__["Component"]).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=___WEBPACK_IMPORTED_MODULE_1__["options"].__b;___WEBPACK_IMPORTED_MODULE_1__["options"].__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:Object(___WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(Object(___WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).map(t))},k={map:N,forEach:N,count:function(n){return n?Object(___WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){var t=Object(___WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:___WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},A=___WEBPACK_IMPORTED_MODULE_1__["options"].__e;___WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=___WEBPACK_IMPORTED_MODULE_1__["options"].unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function D(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(___WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,u)}return u.displayName="Lazy",u.__f=!0,u}function F(){this.u=null,this.o=null}___WEBPACK_IMPORTED_MODULE_1__["options"].unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new ___WEBPACK_IMPORTED_MODULE_1__["Component"]).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&Object(___WEBPACK_IMPORTED_MODULE_1__["createElement"])(___WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,n.fallback);return u&&(u.__h=null),[Object(___WEBPACK_IMPORTED_MODULE_1__["createElement"])(___WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,t.__e?null:n.children),u]};var M=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function T(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var t=this,e=n.i;t.componentWillUnmount=function(){Object(___WEBPACK_IMPORTED_MODULE_1__["render"])(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),Object(___WEBPACK_IMPORTED_MODULE_1__["render"])(Object(___WEBPACK_IMPORTED_MODULE_1__["createElement"])(T,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function I(n,t){return Object(___WEBPACK_IMPORTED_MODULE_1__["createElement"])(j,{__v:n,i:t})}(F.prototype=new ___WEBPACK_IMPORTED_MODULE_1__["Component"]).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),M(t,n,r)):u()};e?e(o):o()}},F.prototype.render=function(n){this.u=null,this.o=new Map;var t=Object(___WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){M(n,e,t)})};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),Object(___WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return Object(___WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n,t),"function"==typeof e&&e(),n?n.__c:null}___WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(___WEBPACK_IMPORTED_MODULE_1__["Component"].prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=___WEBPACK_IMPORTED_MODULE_1__["options"].event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}___WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var q,G={configurable:!0,get:function(){return this.class}},J=___WEBPACK_IMPORTED_MODULE_1__["options"].vnode;___WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(___WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=Object(___WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=W,J&&J(n)};var K=___WEBPACK_IMPORTED_MODULE_1__["options"].__r;___WEBPACK_IMPORTED_MODULE_1__["options"].__r=function(n){K&&K(n),q=n.__c};var Q={ReactCurrentDispatcher:{current:{readContext:function(n){return q.__n[n.__c].props.value}}}},X=1,nn=2,tn=3,en=4,rn=5;function un(n,t){return t()}var on="object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()},ln="16.8.0";function fn(n){return ___WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function cn(n){return!!n&&n.$$typeof===W}function an(n){return cn(n)?___WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function sn(n){return!!n.__k&&(Object(___WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function hn(n){return n&&(n.base||1===n.nodeType&&n)||null}var pn=function(n,t){return n(t)},vn=___WEBPACK_IMPORTED_MODULE_1__["Fragment"];/* harmony default export */ __webpack_exports__["default"] = ({useState:_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"16.8.0",Children:k,render:z,hydrate:B,unmountComponentAtNode:sn,createPortal:I,createElement:___WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:___WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:fn,cloneElement:an,createRef:___WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:___WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:cn,findDOMNode:hn,Component:___WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:E,memo:g,forwardRef:x,unstable_batchedUpdates:pn,StrictMode:___WEBPACK_IMPORTED_MODULE_1__["Fragment"],Suspense:L,SuspenseList:F,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/@bpmn-io/properties-panel/preact/dist/preact.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@bpmn-io/properties-panel/preact/dist/preact.module.js ***!
  \*****************************************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)))})}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i)}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/@bpmn-io/properties-panel/preact/hooks/dist/hooks.module.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@bpmn-io/properties-panel/preact/hooks/dist/hooks.module.js ***!
  \**********************************************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return q; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./node_modules/@bpmn-io/properties-panel/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=___WEBPACK_IMPORTED_MODULE_0__["options"].__b,f=___WEBPACK_IMPORTED_MODULE_0__["options"].__r,e=___WEBPACK_IMPORTED_MODULE_0__["options"].diffed,a=___WEBPACK_IMPORTED_MODULE_0__["options"].__c,v=___WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function m(t,r){___WEBPACK_IMPORTED_MODULE_0__["options"].__h&&___WEBPACK_IMPORTED_MODULE_0__["options"].__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!___WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!___WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){___WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&___WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],___WEBPACK_IMPORTED_MODULE_0__["options"].__e(u,t.__v)}}),i=[]}___WEBPACK_IMPORTED_MODULE_0__["options"].__b=function(n){u=null,c&&c(n)},___WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},___WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===___WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=___WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},___WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],___WEBPACK_IMPORTED_MODULE_0__["options"].__e(r,t.__v)}}),a&&a(t,u)},___WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){___WEBPACK_IMPORTED_MODULE_0__["options"].__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/@bpmn-io/properties-panel/preact/jsx-runtime/dist/jsxRuntime.module.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@bpmn-io/properties-panel/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \*********************************************************************************************/
/*! exports provided: Fragment, jsx, jsxs, jsxDEV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsxs", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsxDEV", function() { return o; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./node_modules/@bpmn-io/properties-panel/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return ___WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

function o(_,o,e,n,t){var f={};for(var l in o)"ref"!=l&&(f[l]=o[l]);var s,u,a={type:_,props:f,key:e,ref:o&&o.ref,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:++___WEBPACK_IMPORTED_MODULE_0__["options"].__v,__source:n,__self:t};if("function"==typeof _&&(s=_.defaultProps))for(u in s)void 0===f[u]&&(f[u]=s[u]);return ___WEBPACK_IMPORTED_MODULE_0__["options"].vnode&&___WEBPACK_IMPORTED_MODULE_0__["options"].vnode(a),a}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/index.js":
/*!********************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/bpmn-js-properties-panel/lib/index.js");


/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/PropertiesPanel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/PropertiesPanel.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createDropdown = __webpack_require__(/*! ./Utils */ "./node_modules/bpmn-js-properties-panel/lib/Utils.js").createDropdown,
    escapeHTML = __webpack_require__(/*! ./Utils */ "./node_modules/bpmn-js-properties-panel/lib/Utils.js").escapeHTML;

var domify = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").domify,
    domQuery = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").query,
    domQueryAll = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").queryAll,
    domRemove = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").remove,
    domClasses = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").classes,
    domClosest = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").closest,
    domAttr = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").attr,
    domDelegate = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").delegate,
    domMatches = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").matches;

var forEach = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js"),
    filter = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js"),
    get = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"),
    keys = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js"),
    isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"),
    isArray = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js"),
    isFunction = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js"),
    xor = __webpack_require__(/*! lodash/xor */ "./node_modules/lodash/xor.js"),
    debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js"),
    flattenDeep = __webpack_require__(/*! lodash/flattenDeep */ "./node_modules/lodash/flattenDeep.js"),
    keyBy = __webpack_require__(/*! lodash/keyBy */ "./node_modules/lodash/keyBy.js"),
    map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"),
    reduce = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");

var updateSelection = __webpack_require__(/*! selection-update */ "./node_modules/selection-update/index.js");

var scrollTabs = __webpack_require__(/*! scroll-tabs */ "./node_modules/scroll-tabs/index.js").default;

var getBusinessObject = __webpack_require__(/*! bpmn-js/lib/util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js").getBusinessObject;

var HIDE_CLASS = 'bpp-hidden';
var DEBOUNCE_DELAY = 300;

var DEFAULT_PRIORITY = 1000;

function isToggle(node) {
  return node.type === 'checkbox' || node.type === 'radio';
}

function isSelect(node) {
  return node.type === 'select-one';
}

function isContentEditable(node) {
  return domAttr(node, 'contenteditable');
}

function getPropertyPlaceholders(node) {
  var selector = 'input[name], textarea[name], [data-value], [contenteditable]';
  var placeholders = domQueryAll(selector, node);
  if ((!placeholders || !placeholders.length) && domMatches(node, selector)) {
    placeholders = [ node ];
  }
  return placeholders;
}

/**
 * Return all active form controls.
 * This excludes the invisible controls unless all is true
 *
 * @param {Element} node
 * @param {Boolean} [all=false]
 */
function getFormControls(node, all) {
  var controls = domQueryAll('input[name], textarea[name], select[name], [contenteditable]', node);

  if (!controls || !controls.length) {
    controls = domMatches(node, 'option') ? [ node ] : controls;
  }

  if (!all) {
    controls = filter(controls, function(node) {
      return !domClosest(node, '.' + HIDE_CLASS);
    });
  }

  return controls;
}

function getFormControlValuesInScope(entryNode) {
  var values = {};

  var controlNodes = getFormControls(entryNode);

  forEach(controlNodes, function(controlNode) {
    var value = controlNode.value;

    var name = domAttr(controlNode, 'name') || domAttr(controlNode, 'data-name');

    // take toggle state into account for radio / checkboxes
    if (isToggle(controlNode)) {
      if (controlNode.checked) {
        if (!domAttr(controlNode, 'value')) {
          value = true;
        } else {
          value = controlNode.value;
        }
      } else {
        value = null;
      }
    } else
    if (isContentEditable(controlNode)) {
      value = controlNode.innerText;
    }

    if (value !== null) {

      // return the actual value
      // handle serialization in entry provider
      // (ie. if empty string should be serialized or not)
      values[name] = value;
    }
  });

  return values;

}

/**
 * Extract input values from entry node
 *
 * @param  {DOMElement} entryNode
 * @returns {Object}
 */
function getFormControlValues(entryNode) {

  var values;

  var listContainer = domQuery('[data-list-entry-container]', entryNode);
  if (listContainer) {
    values = [];
    var listNodes = listContainer.children || [];
    forEach(listNodes, function(listNode) {
      values.push(getFormControlValuesInScope(listNode));
    });
  } else {
    values = getFormControlValuesInScope(entryNode);
  }

  return values;
}

/**
 * Return true if the given form extracted value equals
 * to an old cached version.
 *
 * @param {Object} value
 * @param {Object} oldValue
 * @return {Boolean}
 */
function valueEqual(value, oldValue) {

  if (value && !oldValue) {
    return false;
  }

  var allKeys = keys(value).concat(keys(oldValue));

  return allKeys.every(function(key) {
    return value[key] === oldValue[key];
  });
}

/**
 * Return true if the given form extracted value(s)
 * equal an old cached version.
 *
 * @param {Array<Object>|Object} values
 * @param {Array<Object>|Object} oldValues
 * @return {Boolean}
 */
function valuesEqual(values, oldValues) {

  if (isArray(values)) {

    if (values.length !== oldValues.length) {
      return false;
    }

    return values.every(function(v, idx) {
      return valueEqual(v, oldValues[idx]);
    });
  }

  return valueEqual(values, oldValues);
}

/**
 * Return a mapping of { id: entry } for all entries in the given groups in the given tabs.
 *
 * @param {Object} tabs
 * @return {Object}
 */
function extractEntries(tabs) {
  return keyBy(flattenDeep(map(flattenDeep(map(tabs, 'groups')), 'entries')), 'id');
}

/**
 * Return a mapping of { id: group } for all groups in the given tabs.
 *
 * @param {Object} tabs
 * @return {Object}
 */
function extractGroups(tabs) {
  return keyBy(flattenDeep(map(tabs, 'groups')), 'id');
}

/**
 * A properties panel implementation.
 *
 * To use it provide a `propertiesProvider` component that knows
 * about which properties to display.
 *
 * Properties edit state / visibility can be intercepted
 * via a custom {@link PropertiesActivator}.
 *
 * @class
 * @constructor
 *
 * @param {Object} config
 * @param {didi.Injector} injector
 * @param {EventBus} eventBus
 * @param {Modeling} modeling
 * @param {Canvas} canvas
 * @param {CommandStack} commandStack
 */
function PropertiesPanel(config, injector, eventBus, modeling, commandStack, canvas) {

  this._eventBus = eventBus;
  this._modeling = modeling;
  this._commandStack = commandStack;
  this._canvas = canvas;

  var propertiesProvider = injector.get('propertiesProvider', false);

  if (propertiesProvider) {
    this.registerProvider(propertiesProvider);
  }

  this._init(config);
}

PropertiesPanel.$inject = [
  'config.propertiesPanel',
  'injector',
  'eventBus',
  'modeling',
  'commandStack',
  'canvas'
];

module.exports = PropertiesPanel;

/**
 * @param {number} [priority]
 * @param { { getTabs: any[] | (any) => (any[]) => any[]) } } provider
 */
PropertiesPanel.prototype.registerProvider = function(priority, provider) {

  if (!provider) {
    provider = priority;
    priority = DEFAULT_PRIORITY;
  }

  if (typeof provider.getTabs !== 'function') {
    console.error(
      'Properties provider does not impement #getTabs(element) API'
    );

    return;
  }

  this._eventBus.on('propertiesPanel.getProviders', priority, function(event) {
    event.providers.push(provider);
  });

  this._eventBus.fire('propertiesPanel.providersChanged');
};

PropertiesPanel.prototype._init = function(config) {

  var canvas = this._canvas,
      eventBus = this._eventBus;

  var self = this;

  /**
   * Select the root element once it is added to the canvas
   */
  eventBus.on('root.added', function(e) {
    var element = e.element;

    if (isImplicitRoot(element)) {
      return;
    }

    self.update(element);
  });

  eventBus.on('selection.changed', function(e) {
    var newElement = e.newSelection[0];

    var rootElement = canvas.getRootElement();

    if (isImplicitRoot(rootElement)) {
      return;
    }

    self.update(newElement);
  });

  // add / update tab-bar scrolling
  eventBus.on([
    'propertiesPanel.changed',
    'propertiesPanel.resized'
  ], function(event) {

    var tabBarNode = domQuery('.bpp-properties-tab-bar', self._container);

    if (!tabBarNode) {
      return;
    }

    var scroller = scrollTabs.get(tabBarNode);

    if (!scroller) {

      // we did not initialize yet, do that
      // now and make sure we select the active
      // tab on scroll update
      scroller = scrollTabs(tabBarNode, {
        selectors: {
          tabsContainer: '.bpp-properties-tabs-links',
          tab: '.bpp-properties-tabs-links li',
          ignore: '.bpp-hidden',
          active: '.bpp-active'
        }
      });


      scroller.on('scroll', function(newActiveNode, oldActiveNode, direction) {

        var linkNode = domQuery('[data-tab-target]', newActiveNode);

        var tabId = domAttr(linkNode, 'data-tab-target');

        self.activateTab(tabId);
      });
    }

    // react on tab changes and or tabContainer resize
    // and make sure the active tab is shown completely
    scroller.update();
  });

  eventBus.on('elements.changed', function(e) {

    var current = self._current;
    var element = current && current.element;

    if (element) {
      if (e.elements.indexOf(element) !== -1) {
        self.update(element);
      }
    }
  });

  eventBus.on([
    'elementTemplates.changed',
    'propertiesPanel.providersChanged'
  ], function() {
    var current = self._current;
    var element = current && current.element;

    if (element) {
      self.update(element);
    }
  });

  eventBus.on('diagram.destroy', function() {
    self.detach();
  });

  this._container = domify('<div class="bpp-properties-panel" input-handle-modified-keys="z,y"></div>');

  this._bindListeners(this._container);

  if (config && config.parent) {
    this.attachTo(config.parent);
  }
};


PropertiesPanel.prototype.attachTo = function(parentNode) {

  if (!parentNode) {
    throw new Error('parentNode required');
  }

  // ensure we detach from the
  // previous, old parent
  this.detach();

  // unwrap jQuery if provided
  if (parentNode.get && parentNode.constructor.prototype.jquery) {
    parentNode = parentNode.get(0);
  }

  if (typeof parentNode === 'string') {
    parentNode = domQuery(parentNode);
  }

  var container = this._container;

  parentNode.appendChild(container);

  this._emit('attach');
};

PropertiesPanel.prototype.detach = function() {

  var container = this._container,
      parentNode = container.parentNode;

  if (!parentNode) {
    return;
  }

  this._emit('detach');

  parentNode.removeChild(container);
};


/**
 * Activate tab. Fall back to first visible tab.
 *
 * @param {Object|string} tabId
 */
PropertiesPanel.prototype.activateTab = function(tabId) {
  if (isObject(tabId)) {
    tabId = tabId.id;
  }

  var tabs = domQueryAll('.bpp-properties-tab', this._current.panel),
      tabLinks = domQueryAll('.bpp-properties-tab-link', this._current.panel);

  // (1) Deactivate all tabs
  forEach(tabs, function(tab) {
    domClasses(tab).remove('bpp-active');
  });

  forEach(tabLinks, function(tabLink) {
    domClasses(tabLink).remove('bpp-active');
  });

  // (2) Activate tab, fall back to first visible tab
  var visibleTabs = filter(tabs, function(tab) {
    return !domClasses(tab).has(HIDE_CLASS);
  });

  var activeTab = reduce(visibleTabs, function(activeTab, tab) {
    if (domAttr(tab, 'data-tab') === tabId) {
      return tab;
    }

    return activeTab;
  }, visibleTabs[ 0 ]);

  if (activeTab) {
    domClasses(activeTab).add('bpp-active');
  }

  var visibleTabLinks = filter(tabLinks, function(tabLink) {
    return !domClasses(tabLink).has(HIDE_CLASS);
  });

  var activeTabLink = reduce(visibleTabLinks, function(activeTabLink, tabLink) {
    if (domAttr(domQuery('a[data-tab-target]', tabLink), 'data-tab-target') === tabId) {
      return tabLink;
    }

    return activeTabLink;
  }, visibleTabLinks[ 0 ]);

  if (activeTabLink) {
    domClasses(activeTabLink).add('bpp-active');
  }
};

PropertiesPanel.prototype._getProviders = function() {

  var event = this._eventBus.createEvent({
    type: 'propertiesPanel.getProviders',
    providers: []
  });

  this._eventBus.fire(event);

  return event.providers;
};

PropertiesPanel.prototype._getTabs = function(element) {
  var providers = this._getProviders();

  // loop through all providers and their entries.
  // group entries by id so that overriding an entry is possible
  return reduce(providers, function(tabs, provider) {
    var tabsOrUpdater = provider.getTabs(element);

    if (isFunction(tabsOrUpdater)) {
      return tabsOrUpdater(tabs);
    } else {
      return tabsOrUpdater;
    }
  }, []);
};

/**
 * Update properties panel to show properties of element. Create new properties panel if no previous
 * properties panel, element has changed or element has not changed but entries have.
 *
 * @param {ModdleElement|undefined} element
 */
PropertiesPanel.prototype.update = function(element) {

  // (1) Fall back to root element
  if (!element) {
    element = this._canvas.getRootElement();
  }

  // (2) Get tabs
  var tabs = this._getTabs(element);

  var activeTabId,
      activeTabNode;

  if (this._current) {
    activeTabNode = domQuery('.bpp-properties-tab.bpp-active', this._current.panel);

    if (activeTabNode) {
      activeTabId = domAttr(activeTabNode, 'data-tab');
    }
  }

  // (3) Create new properties panel if necessary
  if (!this._current
    || this._current.element !== element
    || this._entriesChanged(this._current.entries, extractEntries(tabs))) {

    if (this._current) {
      domRemove(this._current.panel);
    }

    this._current = this._create(element, tabs);
  }

  // (4) Update visibility of tabs, groups and entries
  this._updateActivation(this._current);

  // (5) Update active tab
  if (activeTabId) {
    this.activateTab(activeTabId);
  } else {
    this.activateTab(this._current.tabs[ 0 ]);
  }

  this._emit('changed');
};


/**
 * Check whether entries have changes.
 *
 * @param  {Array} prevEntries
 * @param  {Array} entries
 *
 * @returns {Boolean}
 */
PropertiesPanel.prototype._entriesChanged = function(prevEntries, entries) {
  var prevEntryIds = keys(prevEntries),
      entryIds = keys(entries);

  return !isEmpty(xor(prevEntryIds, entryIds));
};

PropertiesPanel.prototype._emit = function(event) {
  this._eventBus.fire('propertiesPanel.' + event, { panel: this, current: this._current });
};

PropertiesPanel.prototype._bindListeners = function(container) {

  var self = this;

  // handles a change for a given event
  var handleChange = function handleChange(event) {

    // see if we handle a change inside a [data-entry] element.
    // if not, drop out
    var inputNode = event.delegateTarget,
        entryNode = domClosest(inputNode, '[data-entry]'),
        entryId, entry;

    // change from outside a [data-entry] element, simply ignore
    if (!entryNode) {
      return;
    }

    entryId = domAttr(entryNode, 'data-entry');
    entry = self.getEntry(entryId);

    var values = getFormControlValues(entryNode);

    if (event.type === 'change') {

      // - if the "data-on-change" attribute is present and a value is changed,
      //   then the associated action is performed.
      // - if the associated action returns "true" then an update to the business
      //   object is done
      // - if it does not return "true", then only the DOM content is updated
      var onChangeAction = domAttr(inputNode, 'data-on-change');

      if (onChangeAction) {
        var isEntryDirty = self.executeAction(entry, entryNode, onChangeAction, event);

        if (!isEntryDirty) {
          return self.update(self._current.element);
        }
      }
    }
    self.applyChanges(entry, values, entryNode);
    self.updateState(entry, entryNode);
  };

  // debounce update only elements that are target of key events,
  // i.e. INPUT and TEXTAREA. SELECTs will trigger an immediate update anyway.
  domDelegate.bind(container, 'input, textarea, [contenteditable]', 'input', debounce(handleChange, DEBOUNCE_DELAY));
  domDelegate.bind(container, 'input, textarea, select, [contenteditable]', 'change', handleChange);

  // paste as plain text only
  domDelegate.bind(container, '[contenteditable]', 'paste', handlePaste);

  function handlePaste(event) {
    var text = (event.clipboardData || window.clipboardData).getData('text');

    text = normalizeEndOfLineSequences(text);

    document.execCommand('insertText', false, text);

    event.preventDefault();
  }

  // handle key events
  domDelegate.bind(container, 'select', 'keydown', function(e) {

    // DEL
    if (e.keyCode === 46) {
      e.stopPropagation();
      e.preventDefault();
    }
  });

  function handleSuggestItems(event) {

    // triggers on all inputs
    var inputNode = event.delegateTarget;

    var entryNode = domClosest(inputNode, '[data-entry]');

    // only work on data entries
    if (!entryNode) {
      return;
    }

    var action = domAttr(inputNode, 'data-auto-suggest'),
        entryId = domAttr(entryNode, 'data-entry');

    var entry = self.getEntry(entryId);

    self.executeAction(entry, entryNode, action, event);
  }

  domDelegate.bind(container, '[data-auto-suggest]', 'input', handleSuggestItems, true);

  domDelegate.bind(container, '[data-action]', 'click', function onClick(event) {

    // triggers on all inputs
    var inputNode = event.delegateTarget,
        entryNode = domClosest(inputNode, '[data-entry]');

    var actionId = domAttr(inputNode, 'data-action'),
        entryId = domAttr(entryNode, 'data-entry');

    var entry = self.getEntry(entryId);

    var isEntryDirty = self.executeAction(entry, entryNode, actionId, event);

    if (!isEntryDirty) {
      return self.update(self._current.element);
    }

    var values = getFormControlValues(entryNode);

    self.applyChanges(entry, values, entryNode);
    self.updateState(entry, entryNode);
  });

  function handleInput(event, element) {

    // triggers on all inputs
    var inputNode = event.delegateTarget;

    var entryNode = domClosest(inputNode, '[data-entry]');

    // only work on data entries
    if (!entryNode) {
      return;
    }

    var eventHandlerId = domAttr(inputNode, 'data-blur'),
        entryId = domAttr(entryNode, 'data-entry');

    var entry = self.getEntry(entryId);

    var isEntryDirty = self.executeAction(entry, entryNode, eventHandlerId, event);

    if (isEntryDirty) {
      var values = getFormControlValues(entryNode);

      self.applyChanges(entry, values, entryNode);
    }

    self.updateState(entry, entryNode);
  }

  domDelegate.bind(container, '[data-blur]', 'blur', handleInput, true);

  // make tab links interactive
  domDelegate.bind(container, '.bpp-properties-tabs-links [data-tab-target]', 'click', function(event) {
    event.preventDefault();

    var delegateTarget = event.delegateTarget;

    var tabId = domAttr(delegateTarget, 'data-tab-target');

    // activate tab on link click
    self.activateTab(tabId);
  });

};

PropertiesPanel.prototype.updateState = function(entry, entryNode) {
  this.updateShow(entry, entryNode);
  this.updateDisable(entry, entryNode);
};

/**
 * Update the visibility of the entry node in the DOM
 */
PropertiesPanel.prototype.updateShow = function(entry, node) {

  var current = this._current;

  if (!current) {
    return;
  }

  var showNodes = domQueryAll('[data-show]', node) || [];

  forEach(showNodes, function(showNode) {

    var expr = domAttr(showNode, 'data-show');
    var fn = get(entry, expr);
    if (fn) {
      var scope = domClosest(showNode, '[data-scope]') || node;
      var shouldShow = fn(current.element, node, showNode, scope) || false;
      if (shouldShow) {
        domClasses(showNode).remove(HIDE_CLASS);
      } else {
        domClasses(showNode).add(HIDE_CLASS);
      }
    }
  });
};

/**
 * Evaluates a given function. If it returns true, then the
 * node is marked as "disabled".
 */
PropertiesPanel.prototype.updateDisable = function(entry, node) {
  var current = this._current;

  if (!current) {
    return;
  }

  var nodes = domQueryAll('[data-disable]', node) || [];

  forEach(nodes, function(currentNode) {
    var expr = domAttr(currentNode, 'data-disable');
    var fn = get(entry, expr);
    if (fn) {
      var scope = domClosest(currentNode, '[data-scope]') || node;
      var shouldDisable = fn(current.element, node, currentNode, scope) || false;
      domAttr(currentNode, 'disabled', shouldDisable ? '' : null);
    }
  });
};

PropertiesPanel.prototype.executeAction = function(entry, entryNode, actionId, event) {
  var current = this._current;

  if (!current) {
    return;
  }

  var fn = get(entry, actionId);
  if (fn) {
    var scopeNode = domClosest(event.target, '[data-scope]') || entryNode;
    return fn.apply(entry, [ current.element, entryNode, event, scopeNode ]);
  }
};

/**
 * Apply changes to the business object by executing a command
 */
PropertiesPanel.prototype.applyChanges = function(entry, values, containerElement) {

  var element = this._current.element;

  // ensure we only update the model if we got dirty changes
  if (valuesEqual(values, entry.oldValues)) {
    return;
  }

  var command = entry.set(element, values, containerElement);

  var commandToExecute;

  if (isArray(command)) {
    if (command.length) {
      commandToExecute = {
        cmd: 'properties-panel.multi-command-executor',
        context: flattenDeep(command)
      };
    }
  } else {
    commandToExecute = command;
  }

  if (commandToExecute) {
    this._commandStack.execute(commandToExecute.cmd, commandToExecute.context || { element : element });
  } else {
    this.update(element);
  }
};


/**
 * apply validation errors in the DOM and show or remove an error message near the entry node.
 */
PropertiesPanel.prototype.applyValidationErrors = function(validationErrors, entryNode) {

  var valid = true;

  var controlNodes = getFormControls(entryNode, true);

  forEach(controlNodes, function(controlNode) {

    var name = domAttr(controlNode, 'name') || domAttr(controlNode, 'data-name');

    var error = validationErrors && validationErrors[name];

    var errorMessageNode = domQuery('.bpp-error-message', controlNode.parentNode);

    if (error) {
      valid = false;

      if (!errorMessageNode) {
        errorMessageNode = domify('<div></div>');

        domClasses(errorMessageNode).add('bpp-error-message');

        // insert errorMessageNode after controlNode
        controlNode.parentNode.insertBefore(errorMessageNode, controlNode.nextSibling);
      }

      errorMessageNode.textContent = error;

      domClasses(controlNode).add('invalid');
    } else {
      domClasses(controlNode).remove('invalid');

      if (errorMessageNode) {
        controlNode.parentNode.removeChild(errorMessageNode);
      }
    }
  });

  return valid;
};


/**
 * Check if the entry contains valid input
 */
PropertiesPanel.prototype.validate = function(entry, values, entryNode) {
  var self = this;

  var current = this._current;

  var valid = true;

  entryNode = entryNode || domQuery('[data-entry="' + entry.id + '"]', current.panel);

  if (values instanceof Array) {
    var listContainer = domQuery('[data-list-entry-container]', entryNode),
        listEntryNodes = listContainer.children || [];

    // create new elements
    for (var i = 0; i < values.length; i++) {
      var listValue = values[i];

      if (entry.validateListItem) {

        var validationErrors = entry.validateListItem(current.element, listValue, entryNode, i),
            listEntryNode = listEntryNodes[i];

        valid = self.applyValidationErrors(validationErrors, listEntryNode) && valid;
      }
    }
  } else {
    if (entry.validate) {
      this.validationErrors = entry.validate(current.element, values, entryNode);

      valid = self.applyValidationErrors(this.validationErrors, entryNode) && valid;
    }
  }

  return valid;
};

PropertiesPanel.prototype.getEntry = function(id) {
  return this._current && this._current.entries[id];
};

PropertiesPanel.prototype._create = function(element, tabs) {

  if (!element) {
    return null;
  }

  var containerNode = this._container;

  var panelNode = this._createPanel(element, tabs);

  containerNode.appendChild(panelNode);

  var entries = extractEntries(tabs);
  var groups = extractGroups(tabs);

  return {
    tabs: tabs,
    groups: groups,
    entries: entries,
    element: element,
    panel: panelNode
  };
};

/**
 * Update variable parts of the entry node on element changes.
 *
 * @param {djs.model.Base} element
 * @param {EntryDescriptor} entry
 * @param {Object} values
 * @param {HTMLElement} entryNode
 * @param {Number} idx
 */
PropertiesPanel.prototype._bindTemplate = function(element, entry, values, entryNode, idx) {

  var eventBus = this._eventBus;

  function isPropertyEditable(entry, propertyName) {
    return eventBus.fire('propertiesPanel.isPropertyEditable', {
      entry: entry,
      propertyName: propertyName,
      element: element
    });
  }

  var inputNodes = getPropertyPlaceholders(entryNode);

  forEach(inputNodes, function(node) {

    var name,
        newValue,
        editable;

    // we deal with an input element
    if ('value' in node || isContentEditable(node) === 'true') {
      name = domAttr(node, 'name') || domAttr(node, 'data-name');
      newValue = values[name];

      editable = isPropertyEditable(entry, name);
      if (editable && entry.editable) {
        editable = entry.editable(element, entryNode, node, name, newValue, idx);
      }

      domAttr(node, 'readonly', editable ? null : '');
      domAttr(node, 'disabled', editable ? null : '');

      // take full control over setting the value
      // and possibly updating the input in entry#setControlValue
      if (entry.setControlValue) {
        entry.setControlValue(element, entryNode, node, name, newValue, idx);
      } else if (isToggle(node)) {
        setToggleValue(node, newValue);
      } else if (isSelect(node)) {
        setSelectValue(node, newValue);
      } else {
        setInputValue(node, newValue);
      }
    }

    // we deal with some non-editable html element
    else {
      name = domAttr(node, 'data-value');
      newValue = values[name];
      if (entry.setControlValue) {
        entry.setControlValue(element, entryNode, node, name, newValue, idx);
      } else {
        setTextValue(node, newValue);
      }
    }
  });
};

// TODO(nikku): WTF freaking name? Change / clarify.
PropertiesPanel.prototype._updateActivation = function(current) {
  var self = this;

  var eventBus = this._eventBus;

  var element = current.element;

  function isEntryVisible(entry, group, tab) {
    return eventBus.fire('propertiesPanel.isEntryVisible', {
      element: element,
      entry: entry,
      group: group,
      tab: tab
    });
  }

  function isGroupVisible(group, element, groupNode) {
    if (isFunction(group.enabled)) {
      return group.enabled(element, groupNode);
    } else {
      return true;
    }
  }

  function isTabVisible(tab, element) {
    if (isFunction(tab.enabled)) {
      return tab.enabled(element);
    } else {
      return true;
    }
  }

  function toggleVisible(node, visible) {
    domClasses(node).toggle(HIDE_CLASS, !visible);
  }

  function updateLabel(element, selector, text) {
    var labelNode = domQuery(selector, element);

    if (!labelNode) {
      return;
    }

    labelNode.textContent = text;
  }

  var panelNode = current.panel;

  forEach(current.tabs, function(tab) {

    var tabNode = domQuery('[data-tab=' + tab.id + ']', panelNode);
    var tabLinkNode = domQuery('[data-tab-target=' + tab.id + ']', panelNode).parentNode;

    var tabVisible = false;

    forEach(tab.groups, function(group) {

      var groupVisible = false;

      var groupNode = domQuery('[data-group=' + group.id + ']', tabNode);

      forEach(group.entries, function(entry) {

        var entryNode = domQuery('[data-entry="' + entry.id + '"]', groupNode);

        var entryVisible = isEntryVisible(entry, group, tab);

        groupVisible = groupVisible || entryVisible;

        toggleVisible(entryNode, entryVisible);

        var values = 'get' in entry ? entry.get(element, entryNode) : {};

        if (values instanceof Array) {
          var listEntryContainer = domQuery('[data-list-entry-container]', entryNode);
          var existingElements = listEntryContainer.children || [];

          for (var i = 0; i < values.length; i++) {
            var listValue = values[i];
            var listItemNode = existingElements[i];
            if (!listItemNode) {
              listItemNode = domify(entry.createListEntryTemplate(listValue, i, listEntryContainer));
              listEntryContainer.appendChild(listItemNode);
            }
            domAttr(listItemNode, 'data-index', i);

            self._bindTemplate(element, entry, listValue, listItemNode, i);
          }

          var entriesToRemove = existingElements.length - values.length;

          for (var j = 0; j < entriesToRemove; j++) {

            // remove orphaned element
            listEntryContainer.removeChild(listEntryContainer.lastChild);
          }

        } else {
          self._bindTemplate(element, entry, values, entryNode);
        }

        // update conditionally visible elements
        self.updateState(entry, entryNode);
        self.validate(entry, values, entryNode);

        // remember initial state for later dirty checking
        entry.oldValues = getFormControlValues(entryNode);
      });

      if (typeof group.label === 'function') {
        updateLabel(groupNode, '.group-label', group.label(element, groupNode));
      }

      groupVisible = groupVisible && isGroupVisible(group, element, groupNode);

      tabVisible = tabVisible || groupVisible;

      toggleVisible(groupNode, groupVisible);
    });

    tabVisible = tabVisible && isTabVisible(tab, element);

    toggleVisible(tabNode, tabVisible);
    toggleVisible(tabLinkNode, tabVisible);
  });

  // inject elements id into header
  updateLabel(panelNode, '[data-label-id]', getBusinessObject(element).id || '');
};

PropertiesPanel.prototype._createPanel = function(element, tabs) {
  var self = this;

  var panelNode = domify('<div class="bpp-properties"></div>'),
      headerNode = domify('<div class="bpp-properties-header">' +
        '<div class="label" data-label-id></div>' +
      '</div>'),
      tabBarNode = domify('<div class="bpp-properties-tab-bar"></div>'),
      tabLinksNode = domify('<ul class="bpp-properties-tabs-links"></ul>'),
      tabContainerNode = domify('<div class="bpp-properties-tabs-container"></div>');

  panelNode.appendChild(headerNode);

  forEach(tabs, function(tab, tabIndex) {

    if (!tab.id) {
      throw new Error('tab must have an id');
    }

    var tabNode = domify('<div class="bpp-properties-tab" data-tab="' + escapeHTML(tab.id) + '"></div>'),
        tabLinkNode = domify('<li class="bpp-properties-tab-link">' +
          '<a href data-tab-target="' + escapeHTML(tab.id) + '">' + escapeHTML(tab.label) + '</a>' +
        '</li>');

    var groups = tab.groups;

    forEach(groups, function(group) {

      if (!group.id) {
        throw new Error('group must have an id');
      }

      var groupNode = domify('<div class="bpp-properties-group" data-group="' + escapeHTML(group.id) + '">' +
          '<span class="group-toggle"></span>' +
          '<div class="group-header">' +
            '<span class="group-label">' + escapeHTML(group.label) + '</span>' +
          '</div>' +
        '</div>');

      if (group.dropdown) {
        domQuery('.group-header', groupNode).appendChild(createDropdown(group.dropdown));
      }

      // TODO(nre): use event delegation to handle that...
      groupNode.querySelector('.group-toggle').addEventListener('click', function(evt) {
        domClasses(groupNode).toggle('group-closed');
        evt.preventDefault();
        evt.stopPropagation();
      });
      groupNode.addEventListener('click', function(evt) {
        if (!evt.defaultPrevented && domClasses(groupNode).has('group-closed')) {
          domClasses(groupNode).remove('group-closed');
        }
      });

      forEach(group.entries, function(entry) {

        if (!entry.id) {
          throw new Error('entry must have an id');
        }

        var html = entry.html;

        if (typeof html === 'string') {
          html = domify(html);
        }

        // unwrap jquery
        if (html.get && html.constructor.prototype.jquery) {
          html = html.get(0);
        }

        var entryNode = domify('<div class="bpp-properties-entry" data-entry="' + escapeHTML(entry.id) + '"></div>');

        forEach(entry.cssClasses || [], function(cssClass) {
          domClasses(entryNode).add(cssClass);
        });

        entryNode.appendChild(html);

        groupNode.appendChild(entryNode);

        // update conditionally visible elements
        self.updateState(entry, entryNode);
      });

      tabNode.appendChild(groupNode);
    });

    tabLinksNode.appendChild(tabLinkNode);
    tabContainerNode.appendChild(tabNode);
  });

  tabBarNode.appendChild(tabLinksNode);

  panelNode.appendChild(tabBarNode);
  panelNode.appendChild(tabContainerNode);

  return panelNode;
};



function setInputValue(node, value) {

  var contentEditable = isContentEditable(node);

  var oldValue = contentEditable ? node.innerText : node.value;

  var selection;

  // prevents input fields from having the value 'undefined'
  if (value === undefined) {
    value = '';
  }

  if (oldValue === value) {
    return;
  }

  // update selection on undo/redo
  if (document.activeElement === node) {
    selection = updateSelection(getSelection(node), oldValue, value);
  }

  if (contentEditable) {
    node.innerText = value;
  } else {
    node.value = value;
  }

  if (selection) {
    setSelection(node, selection);
  }
}

function setSelectValue(node, value) {
  if (value !== undefined) {
    node.value = value;
  }
}

function setToggleValue(node, value) {
  var nodeValue = node.value;

  node.checked = (value === nodeValue) || (!domAttr(node, 'value') && value);
}

function setTextValue(node, value) {
  node.textContent = value;
}

function getSelection(node) {

  return isContentEditable(node) ? getContentEditableSelection(node) : {
    start: node.selectionStart,
    end: node.selectionEnd
  };
}

function getContentEditableSelection(node) {

  var selection = window.getSelection();

  var focusNode = selection.focusNode,
      focusOffset = selection.focusOffset,
      anchorOffset = selection.anchorOffset;

  if (!focusNode) {
    throw new Error('not selected');
  }

  // verify we have selection on the current element
  if (!node.contains(focusNode)) {
    throw new Error('not selected');
  }

  return {
    start: Math.min(focusOffset, anchorOffset),
    end: Math.max(focusOffset, anchorOffset)
  };
}

function setSelection(node, selection) {

  if (isContentEditable(node)) {
    setContentEditableSelection(node, selection);
  } else {
    node.selectionStart = selection.start;
    node.selectionEnd = selection.end;
  }
}

function setContentEditableSelection(node, selection) {

  var focusNode,
      domRange,
      domSelection;

  focusNode = node.firstChild || node,
  domRange = document.createRange();
  domRange.setStart(focusNode, selection.start);
  domRange.setEnd(focusNode, selection.end);

  domSelection = window.getSelection();
  domSelection.removeAllRanges();
  domSelection.addRange(domRange);
}

function isImplicitRoot(element) {
  return element && (element.isImplicit || element.id === '__implicitroot');
}

function normalizeEndOfLineSequences(string) {
  return string.replace(/\r\n|\r|\n/g, '\n');
}

/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/Utils.js":
/*!************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/Utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var domQuery = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").query,
    domClear = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").clear,
    domClasses = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").classes,
    is = __webpack_require__(/*! bpmn-js/lib/util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js").is,
    forEach = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js"),
    domify = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js").domify,
    Ids = __webpack_require__(/*! ids */ "./node_modules/ids/dist/index.esm.js").default;

var SPACE_REGEX = /\s/;

// for QName validation as per http://www.w3.org/TR/REC-xml/#NT-NameChar
var QNAME_REGEX = /^([a-z][\w-.]*:)?[a-z_][\w-.]*$/i;

// for ID validation as per BPMN Schema (QName - Namespace)
var ID_REGEX = /^[a-z_][\w-.]*$/i;

var HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
};

function selectedOption(selectBox) {
  if (selectBox.selectedIndex >= 0) {
    return selectBox.options[selectBox.selectedIndex].value;
  }
}

module.exports.selectedOption = selectedOption;


function selectedType(elementSyntax, inputNode) {
  var typeSelect = domQuery(elementSyntax, inputNode);
  return selectedOption(typeSelect);
}

module.exports.selectedType = selectedType;


/**
 * Retrieve the root element the document this
 * business object is contained in.
 *
 * @return {ModdleElement}
 */
function getRoot(businessObject) {
  var parent = businessObject;
  while (parent.$parent) {
    parent = parent.$parent;
  }
  return parent;
}

module.exports.getRoot = getRoot;


/**
 * filters all elements in the list which have a given type.
 * removes a new list
 */
function filterElementsByType(objectList, type) {
  var list = objectList || [];
  var result = [];
  forEach(list, function(obj) {
    if (is(obj, type)) {
      result.push(obj);
    }
  });
  return result;
}

module.exports.filterElementsByType = filterElementsByType;


function findRootElementsByType(businessObject, referencedType) {
  var root = getRoot(businessObject);

  return filterElementsByType(root.rootElements, referencedType);
}

module.exports.findRootElementsByType = findRootElementsByType;


function removeAllChildren(domElement) {
  while (domElement.firstChild) {
    domElement.removeChild(domElement.firstChild);
  }
}

module.exports.removeAllChildren = removeAllChildren;


/**
 * adds an empty option to the list
 */
function addEmptyParameter(list) {
  return list.push({ 'label': '', 'value': '', 'name': '' });
}

module.exports.addEmptyParameter = addEmptyParameter;


/**
 * returns a dropdown option label depending on the defined event attributes
 */
function getOptionLabel(obj) {
  var label = obj.name || '';

  if (obj.errorCode)
    label += ' (code=' + obj.errorCode + ')';
  if (obj.escalationCode)
    label += ' (code=' + obj.escalationCode + ')';

  return label;
}

/**
 * returns a list with all root elements for the given parameter 'referencedType'
 */
function refreshOptionsModel(businessObject, referencedType) {
  var model = [];
  var referableObjects = findRootElementsByType(businessObject, referencedType);
  forEach(referableObjects, function(obj) {
    model.push({
      label: getOptionLabel(obj),
      value: obj.id,
      name: obj.name
    });
  });
  return model;
}

module.exports.refreshOptionsModel = refreshOptionsModel;


/**
 * fills the drop down with options
 */
function updateOptionsDropDown(domSelector, businessObject, referencedType, entryNode) {
  var options = refreshOptionsModel(businessObject, referencedType);
  addEmptyParameter(options);
  var selectBox = domQuery(domSelector, entryNode);
  domClear(selectBox);

  forEach(options, function(option) {
    var optionEntry = domify('<option value="' + escapeHTML(option.value) + '">' + escapeHTML(option.label) + '</option>');
    selectBox.appendChild(optionEntry);
  });
  return options;
}

module.exports.updateOptionsDropDown = updateOptionsDropDown;


/**
 * checks whether the id value is valid
 *
 * @param {ModdleElement} bo
 * @param {String} idValue
 * @param {Function} translate
 *
 * @return {String} error message
 */
function isIdValid(bo, idValue, translate) {
  var assigned = bo.$model.ids.assigned(idValue);

  var idExists = assigned && assigned !== bo;

  if (!idValue || idExists) {
    return translate('Element must have an unique id.');
  }

  return validateId(idValue, translate);
}

module.exports.isIdValid = isIdValid;


function validateId(idValue, translate) {

  if (containsSpace(idValue)) {
    return translate('Id must not contain spaces.');
  }

  if (!ID_REGEX.test(idValue)) {

    if (QNAME_REGEX.test(idValue)) {
      return translate('Id must not contain prefix.');
    }

    return translate('Id must be a valid QName.');
  }
}

module.exports.validateId = validateId;


function containsSpace(value) {
  return SPACE_REGEX.test(value);
}

module.exports.containsSpace = containsSpace;

/**
 * generate a semantic id with given prefix
 */
function nextId(prefix) {
  var ids = new Ids([32,32,1]);

  return ids.nextPrefixed(prefix);
}

module.exports.nextId = nextId;


function triggerClickEvent(element) {
  var evt;
  var eventType = 'click';

  if (document.createEvent) {
    try {

      // Chrome, Safari, Firefox
      evt = new MouseEvent((eventType), { view: window, bubbles: true, cancelable: true });
    } catch (e) {

      // IE 11, PhantomJS (wat!)
      evt = document.createEvent('MouseEvent');

      evt.initEvent((eventType), true, true);
    }
    return element.dispatchEvent(evt);
  } else {

    // Welcome IE
    evt = document.createEventObject();

    return element.fireEvent('on' + eventType, evt);
  }
}

module.exports.triggerClickEvent = triggerClickEvent;


function escapeHTML(str) {
  str = '' + str;

  return str && str.replace(/[&<>"']/g, function(match) {
    return HTML_ESCAPE_MAP[match];
  });
}

module.exports.escapeHTML = escapeHTML;

function createDropdown(dropdown) {
  var menu = dropdown.menu;

  var dropdownNode = domify(
    '<div class="group__dropdown">' +
      '<button class="group__dropdown-button">' +
      '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>' +
      '</button>' +
      '<div class="group__dropdown-menu"></div>' +
    '</div>'
  );

  var buttonNode = domQuery('.group__dropdown-button', dropdownNode),
      menuNode = domQuery('.group__dropdown-menu', dropdownNode);

  buttonNode.addEventListener('click', function(event) {
    domClasses(dropdownNode).toggle('group__dropdown--open');

    createOnGlobalClick(event);
  });

  forEach(menu, function(menuItem) {
    var menuItemNode = domify('<div class="group__dropdown-menu-item" data-dropdown-action="' +
      menuItem.id +
      '">' + escapeHTML(menuItem.label) + '</div>');

    menuItemNode.addEventListener('click', function() {
      menuItem.onClick();

      domClasses(dropdownNode).remove('group__dropdown--open');
    });

    menuNode.appendChild(menuItemNode);
  });

  var _onGlobalClick;

  function createOnGlobalClick(_event) {
    function onGlobalClick(event) {
      if (event === _event) {
        return;
      }

      var target = event.target;

      if (menuNode !== target && !menuNode.contains(target)) {
        domClasses(dropdownNode).remove('group__dropdown--open');

        document.removeEventListener('click', onGlobalClick);
      }
    }

    if (_onGlobalClick) {
      document.removeEventListener('click', _onGlobalClick);
    }

    document.addEventListener('click', onGlobalClick);

    _onGlobalClick = onGlobalClick;
  }

  return dropdownNode;
}

module.exports.createDropdown = createDropdown;

/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/cmd/CreateAndReferenceHandler.js":
/*!************************************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/cmd/CreateAndReferenceHandler.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elementHelper = __webpack_require__(/*! ../helper/ElementHelper */ "./node_modules/bpmn-js-properties-panel/lib/helper/ElementHelper.js");

/**
 * A handler capable of creating a new element under a provided parent
 * and updating / creating a reference to it in one atomic action.
 *
 * @class
 * @constructor
 */
function CreateAndReferenceElementHandler(elementRegistry, bpmnFactory) {
  this._elementRegistry = elementRegistry;
  this._bpmnFactory = bpmnFactory;
}

CreateAndReferenceElementHandler.$inject = [ 'elementRegistry', 'bpmnFactory' ];

module.exports = CreateAndReferenceElementHandler;


// api ////////////////////

/**
 * Creates a new element under a provided parent and updates / creates a reference to it in
 * one atomic action.
 *
 * @method  CreateAndReferenceElementHandler#execute
 *
 * @param {Object} context
 * @param {djs.model.Base} context.element which is the context for the reference
 * @param {moddle.referencingObject} context.referencingObject the object which creates the reference
 * @param {String} context.referenceProperty the property of the referencingObject which makes the reference
 * @param {moddle.newObject} context.newObject the new object to add
 * @param {moddle.newObjectContainer} context.newObjectContainer the container for the new object
 *
 * @returns {Array<djs.mode.Base>} the updated element
 */
CreateAndReferenceElementHandler.prototype.execute = function(context) {

  var referencingObject = ensureNotNull(context.referencingObject, 'referencingObject'),
      referenceProperty = ensureNotNull(context.referenceProperty, 'referenceProperty'),
      newObject = ensureNotNull(context.newObject, 'newObject'),
      newObjectContainer = ensureNotNull(context.newObjectContainer, 'newObjectContainer'),
      newObjectParent = ensureNotNull(context.newObjectParent, 'newObjectParent'),
      changed = [ context.element ]; // this will not change any diagram-js elements

  // create new object
  var referencedObject = elementHelper
    .createElement(newObject.type, newObject.properties, newObjectParent, this._bpmnFactory);
  context.referencedObject = referencedObject;

  // add to containing list
  newObjectContainer.push(referencedObject);

  // adjust reference attribute
  context.previousReference = referencingObject[referenceProperty];
  referencingObject[referenceProperty] = referencedObject;

  context.changed = changed;

  // indicate changed on objects affected by the update
  return changed;
};

/**
 * Reverts the update
 *
 * @method  CreateAndReferenceElementHandler#revert
 *
 * @param {Object} context
 *
 * @returns {djs.mode.Base} the updated element
 */
CreateAndReferenceElementHandler.prototype.revert = function(context) {

  var referencingObject = context.referencingObject,
      referenceProperty = context.referenceProperty,
      previousReference = context.previousReference,
      referencedObject = context.referencedObject,
      newObjectContainer = context.newObjectContainer;

  // reset reference
  referencingObject.set(referenceProperty, previousReference);

  // remove new element
  newObjectContainer.splice(newObjectContainer.indexOf(referencedObject), 1);

  return context.changed;
};



// helpers //////////////

function ensureNotNull(prop, name) {
  if (!prop) {
    throw new Error(name + ' required');
  }
  return prop;
}


/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/cmd/CreateBusinessObjectListHandler.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/cmd/CreateBusinessObjectListHandler.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");

var elementHelper = __webpack_require__(/*! ../helper/ElementHelper */ "./node_modules/bpmn-js-properties-panel/lib/helper/ElementHelper.js");

/**
 * A handler that implements a BPMN 2.0 property update
 * for business objects which are not represented in the
 * diagram.
 *
 * This is useful in the context of the properties panel in
 * order to update child elements of elements visible in
 * the diagram.
 *
 * Example: perform an update of a specific event definition
 * of an intermediate event.
 *
 * @class
 * @constructor
 */
function CreateBusinessObjectListHandler(elementRegistry, bpmnFactory) {
  this._elementRegistry = elementRegistry;
  this._bpmnFactory = bpmnFactory;
}

CreateBusinessObjectListHandler.$inject = [ 'elementRegistry', 'bpmnFactory' ];

module.exports = CreateBusinessObjectListHandler;

function ensureNotNull(prop, name) {
  if (!prop) {
    throw new Error(name + ' required');
  }
  return prop;

}
function ensureList(prop, name) {
  if (!prop || Object.prototype.toString.call(prop) !== '[object Array]') {
    throw new Error(name + ' needs to be a list');
  }
  return prop;
}

// api /////////////////////////////////////////////

/**
 * Creates a new element under a provided parent and updates / creates a reference to it in
 * one atomic action.
 *
 * @method  CreateBusinessObjectListHandler#execute
 *
 * @param {Object} context
 * @param {djs.model.Base} context.element which is the context for the reference
 * @param {moddle.referencingObject} context.referencingObject the object which creates the reference
 * @param {String} context.referenceProperty the property of the referencingObject which makes the reference
 * @param {moddle.newObject} context.newObject the new object to add
 * @param {moddle.newObjectContainer} context.newObjectContainer the container for the new object
 *
 * @return {Array<djs.mode.Base>} the updated element
 */
CreateBusinessObjectListHandler.prototype.execute = function(context) {

  var currentObject = ensureNotNull(context.currentObject, 'currentObject'),
      propertyName = ensureNotNull(context.propertyName, 'propertyName'),
      newObjects = ensureList(context.newObjects, 'newObjects'),
      changed = [ context.element ]; // this will not change any diagram-js elements


  var childObjects = [];
  var self = this;

  // create new array of business objects
  forEach(newObjects, function(obj) {
    var element = elementHelper.createElement(obj.type, obj.properties, currentObject, self._bpmnFactory);

    childObjects.push(element);
  });
  context.childObject = childObjects;

  // adjust array reference in the parent business object
  context.previousChilds = currentObject[propertyName];
  currentObject[propertyName] = childObjects;

  context.changed = changed;

  // indicate changed on objects affected by the update
  return changed;
};

/**
 * Reverts the update
 *
 * @method  CreateBusinessObjectListHandler#revert
 *
 * @param {Object} context
 *
 * @return {djs.mode.Base} the updated element
 */
CreateBusinessObjectListHandler.prototype.revert = function(context) {

  var currentObject = context.currentObject,
      propertyName = context.propertyName,
      previousChilds = context.previousChilds;

  // remove new element
  currentObject.set(propertyName, previousChilds);

  return context.changed;
};


/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/cmd/MultiCommandHandler.js":
/*!******************************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/cmd/MultiCommandHandler.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");

/**
 * A handler that combines and executes multiple commands.
 *
 * All updates are bundled on the command stack and executed in one step.
 * This also makes it possible to revert the changes in one step.
 *
 * Example use case: remove the camunda:formKey attribute and in addition
 * add all form fields needed for the camunda:formData property.
 *
 * @class
 * @constructor
 */
function MultiCommandHandler(commandStack) {
  this._commandStack = commandStack;
}

MultiCommandHandler.$inject = [ 'commandStack' ];

module.exports = MultiCommandHandler;

MultiCommandHandler.prototype.preExecute = function(context) {

  var commandStack = this._commandStack;

  forEach(context, function(command) {
    commandStack.execute(command.cmd, command.context);
  });
};

/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/cmd/UpdateBusinessObjectHandler.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/cmd/UpdateBusinessObjectHandler.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reduce = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js"),
    is = __webpack_require__(/*! bpmn-js/lib/util/ModelUtil */ "./node_modules/bpmn-js/lib/util/ModelUtil.js").is,
    keys = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js"),
    forEach = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");

/**
 * A handler that implements a BPMN 2.0 property update
 * for business objects which are not represented in the
 * diagram.
 *
 * This is useful in the context of the properties panel in
 * order to update child elements of elements visible in
 * the diagram.
 *
 * Example: perform an update of a specific event definition
 * of an intermediate event.
 *
 * @class
 * @constructor
 */
function UpdateBusinessObjectHandler(elementRegistry) {
  this._elementRegistry = elementRegistry;
}

UpdateBusinessObjectHandler.$inject = [ 'elementRegistry' ];

module.exports = UpdateBusinessObjectHandler;

/**
 * returns the root element
 */
function getRoot(businessObject) {
  var parent = businessObject;
  while (parent.$parent) {
    parent = parent.$parent;
  }
  return parent;
}

function getProperties(businessObject, propertyNames) {
  return reduce(propertyNames, function(result, key) {
    result[key] = businessObject.get(key);
    return result;
  }, {});
}


function setProperties(businessObject, properties) {
  forEach(properties, function(value, key) {
    businessObject.set(key, value);
  });
}


// api /////////////////////////////////////////////

/**
 * Updates a business object with a list of new properties
 *
 * @method  UpdateBusinessObjectHandler#execute
 *
 * @param {Object} context
 * @param {djs.model.Base} context.element the element which has a child business object updated
 * @param {moddle.businessObject} context.businessObject the businessObject to update
 * @param {Object} context.properties a list of properties to set on the businessObject
 *
 * @return {Array<djs.mode.Base>} the updated element
 */
UpdateBusinessObjectHandler.prototype.execute = function(context) {

  var element = context.element,
      businessObject = context.businessObject,
      rootElements = getRoot(businessObject).rootElements,
      referenceType = context.referenceType,
      referenceProperty = context.referenceProperty,
      changed = [ element ]; // this will not change any diagram-js elements

  if (!element) {
    throw new Error('element required');
  }

  if (!businessObject) {
    throw new Error('businessObject required');
  }

  var properties = context.properties,
      oldProperties = context.oldProperties || getProperties(businessObject, keys(properties));

  // check if there the update needs an external element for reference
  if (typeof referenceType !== 'undefined' && typeof referenceProperty !== 'undefined') {
    forEach(rootElements, function(rootElement) {
      if (is(rootElement, referenceType)) {
        if (rootElement.id === properties[referenceProperty]) {
          properties[referenceProperty] = rootElement;
        }
      }
    });
  }

  // update properties
  setProperties(businessObject, properties);

  // store old values
  context.oldProperties = oldProperties;
  context.changed = changed;

  // indicate changed on objects affected by the update
  return changed;
};

/**
 * Reverts the update
 *
 * @method  UpdateBusinessObjectHandler#revert
 *
 * @param {Object} context
 *
 * @return {djs.mode.Base} the updated element
 */
UpdateBusinessObjectHandler.prototype.revert = function(context) {

  var oldProperties = context.oldProperties,
      businessObject = context.businessObject;

  // update properties
  setProperties(businessObject, oldProperties);

  return context.changed;
};


/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/cmd/UpdateBusinessObjectListHandler.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/cmd/UpdateBusinessObjectListHandler.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");

/**
 * A handler that implements a BPMN 2.0 property update
 * for business object lists which are not represented in the
 * diagram.
 *
 * This is useful in the context of the properties panel in
 * order to update child elements of elements visible in
 * the diagram.
 *
 * Example: perform an update of a specific event definition
 * of an intermediate event.
 *
 * @class
 * @constructor
 */
function UpdateBusinessObjectListHandler(elementRegistry, bpmnFactory) {
  this._elementRegistry = elementRegistry;
  this._bpmnFactory = bpmnFactory;
}

UpdateBusinessObjectListHandler.$inject = [ 'elementRegistry', 'bpmnFactory' ];

module.exports = UpdateBusinessObjectListHandler;

function ensureNotNull(prop, name) {
  if (!prop) {
    throw new Error(name + 'required');
  }
  return prop;
}

// api /////////////////////////////////////////////

/**
 * Updates a element under a provided parent.
 */
UpdateBusinessObjectListHandler.prototype.execute = function(context) {

  var currentObject = ensureNotNull(context.currentObject, 'currentObject'),
      propertyName = ensureNotNull(context.propertyName, 'propertyName'),
      updatedObjectList = context.updatedObjectList,
      objectsToRemove = context.objectsToRemove || [],
      objectsToAdd = context.objectsToAdd || [],
      objectsToPrepend = context.objectsToPrepend || [],
      changed = [ context.element], // this will not change any diagram-js elements
      referencePropertyName;

  if (context.referencePropertyName) {
    referencePropertyName = context.referencePropertyName;
  }

  var objectList = currentObject[propertyName];

  // adjust array reference in the parent business object
  context.previousList = currentObject[propertyName];

  if (updatedObjectList) {
    currentObject[propertyName] = updatedObjectList;
  } else {

    // start with objects to prepend
    var listCopy = objectsToPrepend.slice();

    // remove all objects which should be removed
    forEach(objectList, function(object) {
      if (objectsToRemove.indexOf(object) == -1) {
        listCopy.push(object);
      }
    });

    // add all objects which should be added
    listCopy = listCopy.concat(objectsToAdd);

    // set property to new list
    if (listCopy.length > 0 || !referencePropertyName) {

      // as long as there are elements in the list update the list
      currentObject[propertyName] = listCopy;
    } else if (referencePropertyName) {

      // remove the list when it is empty
      var parentObject = currentObject.$parent;
      parentObject.set(referencePropertyName, undefined);
    }
  }

  context.changed = changed;

  // indicate changed on objects affected by the update
  return changed;
};

/**
 * Reverts the update
 *
 * @method  CreateBusinessObjectListHandler#revert
 *
 * @param {Object} context
 *
 * @return {djs.mode.Base} the updated element
 */
UpdateBusinessObjectListHandler.prototype.revert = function(context) {

  var currentObject = context.currentObject,
      propertyName = context.propertyName,
      previousList = context.previousList,
      parentObject = currentObject.$parent;

  if (context.referencePropertyName) {
    parentObject.set(context.referencePropertyName, currentObject);
  }

  // remove new element
  currentObject.set(propertyName, previousList);

  return context.changed;
};


/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/cmd/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/cmd/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");

var HANDLERS = {
  'properties-panel.update-businessobject': __webpack_require__(/*! ./UpdateBusinessObjectHandler */ "./node_modules/bpmn-js-properties-panel/lib/cmd/UpdateBusinessObjectHandler.js"),
  'properties-panel.create-and-reference': __webpack_require__(/*! ./CreateAndReferenceHandler */ "./node_modules/bpmn-js-properties-panel/lib/cmd/CreateAndReferenceHandler.js"),
  'properties-panel.create-businessobject-list': __webpack_require__(/*! ./CreateBusinessObjectListHandler */ "./node_modules/bpmn-js-properties-panel/lib/cmd/CreateBusinessObjectListHandler.js"),
  'properties-panel.update-businessobject-list': __webpack_require__(/*! ./UpdateBusinessObjectListHandler */ "./node_modules/bpmn-js-properties-panel/lib/cmd/UpdateBusinessObjectListHandler.js"),
  'properties-panel.multi-command-executor': __webpack_require__(/*! ./MultiCommandHandler */ "./node_modules/bpmn-js-properties-panel/lib/cmd/MultiCommandHandler.js")
};


function CommandInitializer(eventBus, commandStack) {

  eventBus.on('diagram.init', function() {
    forEach(HANDLERS, function(handler, id) {
      commandStack.registerHandler(id, handler);
    });
  });
}

CommandInitializer.$inject = [ 'eventBus', 'commandStack' ];

module.exports = {
  __init__: [ CommandInitializer ]
};

/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/helper/ElementHelper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/helper/ElementHelper.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ElementHelper = {};
module.exports = ElementHelper;

/**
 * Creates a new element and set the parent to it
 *
 * @method ElementHelper#createElement
 *
 * @param {String} elementType of the new element
 * @param {Object} properties of the new element in key-value pairs
 * @param {moddle.object} parent of the new element
 * @param {BpmnFactory} factory which creates the new element
 *
 * @returns {djs.model.Base} element which is created
 */
ElementHelper.createElement = function(elementType, properties, parent, factory) {
  var element = factory.create(elementType, properties);
  element.$parent = parent;

  return element;
};


/***/ }),

/***/ "./node_modules/bpmn-js-properties-panel/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/bpmn-js-properties-panel/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  __depends__: [
    __webpack_require__(/*! ./cmd */ "./node_modules/bpmn-js-properties-panel/lib/cmd/index.js"),
    __webpack_require__(/*! diagram-js/lib/i18n/translate */ "./node_modules/diagram-js/lib/i18n/translate/index.js").default
  ],
  __init__: [ 'propertiesPanel' ],
  propertiesPanel: [ 'type', __webpack_require__(/*! ./PropertiesPanel */ "./node_modules/bpmn-js-properties-panel/lib/PropertiesPanel.js") ]
};


/***/ }),

/***/ "./node_modules/bpmn-js/lib/util/ModelUtil.js":
/*!****************************************************!*\
  !*** ./node_modules/bpmn-js/lib/util/ModelUtil.js ***!
  \****************************************************/
/*! exports provided: is, getBusinessObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBusinessObject", function() { return getBusinessObject; });
/**
 * Is an element of the given BPMN type?
 *
 * @param  {djs.model.Base|ModdleElement} element
 * @param  {string} type
 *
 * @return {boolean}
 */
function is(element, type) {
  var bo = getBusinessObject(element);

  return bo && (typeof bo.$instanceOf === 'function') && bo.$instanceOf(type);
}


/**
 * Return the business object for a given element.
 *
 * @param  {djs.model.Base|ModdleElement} element
 *
 * @return {ModdleElement}
 */
function getBusinessObject(element) {
  return (element && element.businessObject) || element;
}

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/index.js ***!
  \**************************************************************/
/*! exports provided: registerClientPlugin, registerBpmnJSPlugin, registerBpmnJSModdleExtension, getModelerDirectory, getPluginsDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClientPlugin", function() { return registerClientPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSPlugin", function() { return registerBpmnJSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSModdleExtension", function() { return registerBpmnJSModdleExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelerDirectory", function() { return getModelerDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPluginsDirectory", function() { return getPluginsDirectory; });
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerBpmnJSPlugin(BpmnJSModule);
 */
function registerBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.modeler.additionalModules');
}

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerBpmnJSModdleExtension(moddleDescriptor);
 */
function registerBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.modeler.moddleExtension');
}

/**
 * Return the modeler directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getModelerDirectory() {
  return window.getModelerDirectory();
}

/**
 * Return the modeler plugin directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getPluginsDirectory() {
  return window.getPluginsDirectory();
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/diagram-js/lib/i18n/translate/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/diagram-js/lib/i18n/translate/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate */ "./node_modules/diagram-js/lib/i18n/translate/translate.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  translate: [ 'value', _translate__WEBPACK_IMPORTED_MODULE_0__["default"] ]
});

/***/ }),

/***/ "./node_modules/diagram-js/lib/i18n/translate/translate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/diagram-js/lib/i18n/translate/translate.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return translate; });
/**
 * A simple translation stub to be used for multi-language support
 * in diagrams. Can be easily replaced with a more sophisticated
 * solution.
 *
 * @example
 *
 * // use it inside any diagram component by injecting `translate`.
 *
 * function MyService(translate) {
 *   alert(translate('HELLO {you}', { you: 'You!' }));
 * }
 *
 * @param {string} template to interpolate
 * @param {Object} [replacements] a map with substitutes
 *
 * @return {string} the translated string
 */
function translate(template, replacements) {

  replacements = replacements || {};

  return template.replace(/{([^}]+)}/g, function(_, key) {
    return replacements[key] || '{' + key + '}';
  });
}

/***/ }),

/***/ "./node_modules/ids/dist/index.esm.js":
/*!********************************************!*\
  !*** ./node_modules/ids/dist/index.esm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hat_1 = createCommonjsModule(function (module) {
var hat = module.exports = function (bits, base) {
    if (!base) base = 16;
    if (bits === undefined) bits = 128;
    if (bits <= 0) return '0';
    
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
    for (var i = 2; digits === Infinity; i *= 2) {
        digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
    }
    
    var rem = digits - Math.floor(digits);
    
    var res = '';
    
    for (var i = 0; i < Math.floor(digits); i++) {
        var x = Math.floor(Math.random() * base).toString(base);
        res = x + res;
    }
    
    if (rem) {
        var b = Math.pow(base, rem);
        var x = Math.floor(Math.random() * b).toString(base);
        res = x + res;
    }
    
    var parsed = parseInt(res, base);
    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
        return hat(bits, base)
    }
    else return res;
};

hat.rack = function (bits, base, expandBy) {
    var fn = function (data) {
        var iters = 0;
        do {
            if (iters ++ > 10) {
                if (expandBy) bits += expandBy;
                else throw new Error('too many ID collisions, use more bits')
            }
            
            var id = hat(bits, base);
        } while (Object.hasOwnProperty.call(hats, id));
        
        hats[id] = data;
        return id;
    };
    var hats = fn.hats = {};
    
    fn.get = function (id) {
        return fn.hats[id];
    };
    
    fn.set = function (id, value) {
        fn.hats[id] = value;
        return fn;
    };
    
    fn.bits = bits || 128;
    fn.base = base || 16;
    return fn;
};
});

/**
 * Create a new id generator / cache instance.
 *
 * You may optionally provide a seed that is used internally.
 *
 * @param {Seed} seed
 */

function Ids(seed) {
  if (!(this instanceof Ids)) {
    return new Ids(seed);
  }

  seed = seed || [128, 36, 1];
  this._seed = seed.length ? hat_1.rack(seed[0], seed[1], seed[2]) : seed;
}
/**
 * Generate a next id.
 *
 * @param {Object} [element] element to bind the id to
 *
 * @return {String} id
 */

Ids.prototype.next = function (element) {
  return this._seed(element || true);
};
/**
 * Generate a next id with a given prefix.
 *
 * @param {Object} [element] element to bind the id to
 *
 * @return {String} id
 */


Ids.prototype.nextPrefixed = function (prefix, element) {
  var id;

  do {
    id = prefix + this.next(true);
  } while (this.assigned(id)); // claim {prefix}{random}


  this.claim(id, element); // return

  return id;
};
/**
 * Manually claim an existing id.
 *
 * @param {String} id
 * @param {String} [element] element the id is claimed by
 */


Ids.prototype.claim = function (id, element) {
  this._seed.set(id, element || true);
};
/**
 * Returns true if the given id has already been assigned.
 *
 * @param  {String} id
 * @return {Boolean}
 */


Ids.prototype.assigned = function (id) {
  return this._seed.get(id) || false;
};
/**
 * Unclaim an id.
 *
 * @param  {String} id the id to unclaim
 */


Ids.prototype.unclaim = function (id) {
  delete this._seed.hats[id];
};
/**
 * Clear all claimed ids.
 */


Ids.prototype.clear = function () {
  var hats = this._seed.hats,
      id;

  for (id in hats) {
    this.unclaim(id);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Ids);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayAggregator.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_arrayAggregator.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAggregator.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseAggregator.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js");

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseDifference.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseDifference.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFilter.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseFilter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseReduce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseReduce.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_baseXor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseXor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ "./node_modules/lodash/_baseDifference.js"),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * The base implementation of methods like `_.xor`, without support for
 * iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  var index = -1,
      result = Array(length);

  while (++index < length) {
    var array = arrays[index],
        othIndex = -1;

    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}

module.exports = baseXor;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAggregator.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createAggregator.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayAggregator = __webpack_require__(/*! ./_arrayAggregator */ "./node_modules/lodash/_arrayAggregator.js"),
    baseAggregator = __webpack_require__(/*! ./_baseAggregator */ "./node_modules/lodash/_baseAggregator.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/filter.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    baseFilter = __webpack_require__(/*! ./_baseFilter */ "./node_modules/lodash/_baseFilter.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ "./node_modules/lodash/flattenDeep.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/flattenDeep.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY) : [];
}

module.exports = flattenDeep;


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keyBy.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/keyBy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    createAggregator = __webpack_require__(/*! ./_createAggregator */ "./node_modules/lodash/_createAggregator.js");

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the last element responsible for generating the key. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * var array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ];
 *
 * _.keyBy(array, function(o) {
 *   return String.fromCharCode(o.code);
 * });
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 *
 * _.keyBy(array, 'dir');
 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
 */
var keyBy = createAggregator(function(result, value, key) {
  baseAssignValue(result, key, value);
});

module.exports = keyBy;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseReduce = __webpack_require__(/*! ./_baseReduce */ "./node_modules/lodash/_baseReduce.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ }),

/***/ "./node_modules/lodash/xor.js":
/*!************************************!*\
  !*** ./node_modules/lodash/xor.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    baseXor = __webpack_require__(/*! ./_baseXor */ "./node_modules/lodash/_baseXor.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.without
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */
var xor = baseRest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});

module.exports = xor;


/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: assign, bind, debounce, ensureArray, every, filter, find, findIndex, flatten, forEach, get, groupBy, has, isArray, isDefined, isFunction, isNil, isNumber, isObject, isString, isUndefined, keys, map, matchPattern, merge, omit, pick, reduce, set, size, some, sortBy, throttle, unionBy, uniqueBy, values, without */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionBy", function() { return unionBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * let element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if the given time
 * elapsed between calls.
 *
 * Lodash-style the function exposes methods to `#clear`
 * and `#flush` to control internal behavior.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire(force) {
    var now = Date.now();
    var scheduledDiff = force ? 0 : lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    clear();
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  function clear() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function flush() {
    if (timer) {
      fire(true);
    }

    clear();
  }

  function callback() {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  }

  callback.flush = flush;
  callback.cancel = clear;
  return callback;
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @param {Object} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 */

function set(target, path, value) {
  var currentTarget = target;
  forEach(path, function (key, idx) {
    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new Error('illegal key type: ' + _typeof(key) + '. Key should be of type number or string.');
    }

    if (key === 'constructor') {
      throw new Error('illegal key: constructor');
    }

    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    var nextKey = path[idx + 1];
    var nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });
  return target;
}
/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 */

function get(target, path, defaultValue) {
  var currentTarget = target;
  forEach(path, function (key) {
    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;
      return false;
    }

    currentTarget = currentTarget[key];
  });
  return isUndefined(currentTarget) ? defaultValue : currentTarget;
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}




/***/ }),

/***/ "./node_modules/min-dom/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/min-dom/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: attr, classes, clear, closest, delegate, domify, event, matches, query, queryAll, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domify", function() { return domify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return componentEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matchesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/**
 * Set attribute `name` to `val`, or get attr `name`.
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */
function attr(el, name, val) {
  // get
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }

  // remove
  if (val === null) {
    return el.removeAttribute(name);
  }

  // set
  el.setAttribute(name, val);

  return el;
}

var indexOf = [].indexOf;

var indexof = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function classes(el) {
  return new ClassList(el);
}

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function (name) {
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = indexof(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function (name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = indexof(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function (re) {
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function (name, force) {
  // classList
  if (this.list) {
    if ('undefined' !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ('undefined' !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function () {
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has = ClassList.prototype.contains = function (name) {
  return this.list ? this.list.contains(name) : !!~indexof(this.array(), name);
};

/**
 * Remove all children from the given element.
 */
function clear(el) {

  var c;

  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }

  return el;
}

var proto = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

var matchesSelector = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) return false;
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Boolean} checkYourSelf (optional)
 */
function closest (element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;

  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE && currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {

    if (matchesSelector(currentElem, selector)) {
      return currentElem;
    }

    currentElem = currentElem.parentNode;
  }

  return matchesSelector(currentElem, selector) ? currentElem : null;
}

var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var bind_1 = function(el, type, fn, capture){
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var unbind_1 = function(el, type, fn, capture){
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};

var componentEvent = {
	bind: bind_1,
	unbind: unbind_1
};

/**
 * Module dependencies.
 */

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = ['focus', 'blur'];

function bind$1(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return componentEvent.bind(el, type, function (e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true, el);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */
function unbind$1(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return componentEvent.unbind(el, type, fn, capture);
}

var delegate = {
  bind: bind$1,
  unbind: unbind$1
};

/**
 * Expose `parse`.
 */

var domify = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

function all(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
}

function remove(el) {
  el.parentNode && el.parentNode.removeChild(el);
}




/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/scroll-tabs/index.js":
/*!*******************************************!*\
  !*** ./node_modules/scroll-tabs/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return create; });
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");






var DEFAULT_OPTIONS = {
  scrollSymbolLeft: '‹',
  scrollSymbolRight: '›'
};


/**
 * This component adds the functionality to scroll over a list of tabs.
 *
 * It adds scroll buttons on the left and right side of the tabs container
 * if not all tabs are visible. It also adds a mouse wheel listener on the
 * container.
 *
 * If either a button is clicked or the mouse wheel is used over the tabs,
 * a 'scroll' event is being fired. This event contains the node elements
 * of the new and old active tab, and the direction in which the tab has
 * changed relative to the old active tab.
 *
 * @example:
 * (1) provide a tabs-container:
 *
 * var $el = (
 *   <div>
 *     <!-- button added by scrollTabs -->
 *     <span class="scroll-tabs-button scroll-tabs-left"></span>
 *     <ul class="my-tabs-container">
 *       <li class="my-tab i-am-active"></li>
 *       <li class="my-tab"></li>
 *       <li class="my-tab ignore-me"></li>
 *     </ul>
 *     <!-- button added by scrollTabs -->
 *     <span class="scroll-tabs-button scroll-tabs-right"></span>
 *   </div>
 * );
 *
 *
 * (2) initialize scrollTabs:
 *
 *  var scroller = scrollTabs(tabBarNode, {
 *    selectors: {
 *      tabsContainer: '.my-tabs-container',
 *      tab: '.my-tab',
 *      ignore: '.ignore-me',
 *      active: '.i-am-active'
 *    }
 *  });
 *
 *
 * (3) listen to the scroll event:
 *
 * scroller.on('scroll', function(newActiveNode, oldActiveNode, direction) {
 *   // direction is any of (-1: left, 1: right)
 *   // activate the new active tab
 * });
 *
 *
 * (4) update the scroller if tabs change and or the tab container resizes:
 *
 * scroller.update();
 *
 *
 * @param  {DOMElement} el
 * @param  {Object} options
 * @param  {Object} options.selectors
 * @param  {String} options.selectors.tabsContainer the container all tabs are contained in
 * @param  {String} options.selectors.tab a single tab inside the tab container
 * @param  {String} options.selectors.ignore tabs that should be ignored during scroll left/right
 * @param  {String} options.selectors.active selector for the current active tab
 * @param  {String} [options.scrollSymbolLeft]
 * @param  {String} [options.scrollSymbolRight]
 */
function ScrollTabs($el, options) {

  // we are an event emitter
  Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])(this, Object(mitt__WEBPACK_IMPORTED_MODULE_2__["default"])());

  this.options = options = Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, DEFAULT_OPTIONS, options);
  this.container = $el;

  this._createScrollButtons($el, options);

  this._bindEvents($el);
}


/**
 * Create a clickable scroll button
 *
 * @param {Object} options
 * @param {String} options.className
 * @param {String} options.label
 * @param {Number} options.direction
 *
 * @return {DOMElement} The created scroll button node
 */
ScrollTabs.prototype._createButton = function(parentNode, options) {

  var className = options.className,
      direction = options.direction;


  var button = Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["query"])('.' + className, parentNode);

  if (!button) {
    button = Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["domify"])('<span class="scroll-tabs-button ' + className + '">' +
                                options.label +
                              '</span>');

    parentNode.insertBefore(button, parentNode.childNodes[0]);
  }

  Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, 'data-direction', direction);

  return button;
};

/**
 * Create both scroll buttons
 *
 * @param  {DOMElement} parentNode
 * @param  {Object} options
 * @param  {String} options.scrollSymbolLeft
 * @param  {String} options.scrollSymbolRight
 */
ScrollTabs.prototype._createScrollButtons = function(parentNode, options) {

  // Create a button that scrolls to the tab left to the currently active tab
  this._createButton(parentNode, {
    className: 'scroll-tabs-left',
    label: options.scrollSymbolLeft,
    direction: -1
  });

  // Create a button that scrolls to the tab right to the currently active tab
  this._createButton(parentNode, {
    className: 'scroll-tabs-right',
    label: options.scrollSymbolRight,
    direction: 1
  });
};

/**
 * Get the current active tab
 *
 * @return {DOMElement}
 */
ScrollTabs.prototype.getActiveTabNode = function() {
  return Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["query"])(this.options.selectors.active, this.container);
};


/**
 * Get the container all tabs are contained in
 *
 * @return {DOMElement}
 */
ScrollTabs.prototype.getTabsContainerNode = function() {
  return Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["query"])(this.options.selectors.tabsContainer, this.container);
};


/**
 * Get all tabs (visible and invisible ones)
 *
 * @return {Array<DOMElement>}
 */
ScrollTabs.prototype.getAllTabNodes = function() {
  return Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["queryAll"])(this.options.selectors.tab, this.container);
};


/**
 * Gets all tabs that don't have the ignore class set
 *
 * @return {Array<DOMElement>}
 */
ScrollTabs.prototype.getVisibleTabs = function() {
  var allTabs = this.getAllTabNodes();

  var ignore = this.options.selectors.ignore;

  return Object(min_dash__WEBPACK_IMPORTED_MODULE_1__["filter"])(allTabs, function(tabNode) {
    return !Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["matches"])(tabNode, ignore);
  });
};


/**
 * Get a tab relative to a reference tab.
 *
 * @param  {DOMElement} referenceTabNode
 * @param  {Number} n gets the nth tab next or previous to the reference tab
 *
 * @return {DOMElement}
 *
 * @example:
 * Visible tabs: [ A | B | C | D | E ]
 * Assume tab 'C' is the reference tab:
 * If direction === -1, it returns tab 'B',
 * if direction ===  2, it returns tab 'E'
 */
ScrollTabs.prototype.getAdjacentTab = function(referenceTabNode, n) {
  var visibleTabs = this.getVisibleTabs();

  var index = visibleTabs.indexOf(referenceTabNode);

  return visibleTabs[index + n];
};

ScrollTabs.prototype._bindEvents = function(node) {
  this._bindWheelEvent(node);
  this._bindTabClickEvents(node);
  this._bindScrollButtonEvents(node);
};

/**
 *  Bind a click listener to a DOM node.
 *  Make sure a tab link is entirely visible after onClick.
 *
 * @param {DOMElement} node
 */
ScrollTabs.prototype._bindTabClickEvents = function(node) {
  var selector = this.options.selectors.tab;

  var self = this;

  min_dom__WEBPACK_IMPORTED_MODULE_0__["delegate"].bind(node, selector, 'click', function onClick(event) {
    self.scrollToTabNode(event.delegateTarget);
  });
};


/**
 * Bind the wheel event listener to a DOM node
 *
 * @param {DOMElement} node
 */
ScrollTabs.prototype._bindWheelEvent = function(node) {
  var self = this;

  min_dom__WEBPACK_IMPORTED_MODULE_0__["event"].bind(node, 'wheel', function(e) {

    // scroll direction (-1: left, 1: right)
    var direction = Math.sign(e.deltaY);

    var oldActiveTab = self.getActiveTabNode();

    var newActiveTab = self.getAdjacentTab(oldActiveTab, direction);

    if (newActiveTab) {
      self.scrollToTabNode(newActiveTab);
      self.emit('scroll', newActiveTab, oldActiveTab, direction);
    }

    e.preventDefault();
  });
};

/**
 * Bind scroll button events to a DOM node
 *
 * @param  {DOMElement} node
 */
ScrollTabs.prototype._bindScrollButtonEvents = function(node) {

  var self = this;

  min_dom__WEBPACK_IMPORTED_MODULE_0__["delegate"].bind(node, '.scroll-tabs-button', 'click', function(event) {

    var target = event.delegateTarget;

    // data-direction is either -1 or 1
    var direction = parseInt(Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["attr"])(target, 'data-direction'), 10);

    var oldActiveTabNode = self.getActiveTabNode();

    var newActiveTabNode = self.getAdjacentTab(oldActiveTabNode, direction);

    if (newActiveTabNode) {
      self.scrollToTabNode(newActiveTabNode);
      self.emit('scroll', newActiveTabNode, oldActiveTabNode, direction);
    }

    event.preventDefault();
  });
};


/**
* Scroll to a tab if it is not entirely visible
*
* @param  {DOMElement} tabNode tab node to scroll to
*/
ScrollTabs.prototype.scrollToTabNode = function(tabNode) {
  if (!tabNode) {
    return;
  }

  var tabsContainerNode = tabNode.parentNode;

  var tabWidth = tabNode.offsetWidth,
      tabOffsetLeft = tabNode.offsetLeft,
      tabOffsetRight = tabOffsetLeft + tabWidth,
      containerWidth = tabsContainerNode.offsetWidth,
      containerScrollLeft = tabsContainerNode.scrollLeft;

  if (containerScrollLeft > tabOffsetLeft) {
    // scroll to the left, if the tab is overflowing on the left side
    tabsContainerNode.scrollLeft = 0;
  } else if (tabOffsetRight > containerWidth) {
    // scroll to the right, if the tab is overflowing on the right side
    tabsContainerNode.scrollLeft = tabOffsetRight - containerWidth;
  }
};


/**
 * React on tab changes from outside (resize/show/hide/add/remove),
 * update scroll button visibility.
 */
ScrollTabs.prototype.update = function() {

  var tabsContainerNode = this.getTabsContainerNode();

  // check if tabs fit in container
  var overflow = tabsContainerNode.scrollWidth > tabsContainerNode.offsetWidth;

  // TODO(nikku): distinguish overflow left / overflow right?
  var overflowClass = 'scroll-tabs-overflow';

  Object(min_dom__WEBPACK_IMPORTED_MODULE_0__["classes"])(this.container).toggle(overflowClass, overflow);

  if (overflow) {
    // make sure the current active tab is always visible
    this.scrollToTabNode(this.getActiveTabNode());
  }
};


// exports ////////////////

/**
 * Create a scrollTabs instance on the given element.
 *
 * @param {DOMElement} $el
 * @param {Object} options
 *
 * @return {ScrollTabs}
 */
function create($el, options) {

  var scrollTabs = get($el);

  if (!scrollTabs) {
    scrollTabs = new ScrollTabs($el, options);

    $el.__scrollTabs = scrollTabs;
  }

  return scrollTabs;
}


/**
 * Return the scrollTabs instance that has been previously
 * initialized on the element.
 *
 * @param {DOMElement} $el
 * @return {ScrollTabs}
 */
function get($el) {
  return $el.__scrollTabs;
}

create.get = get;

/***/ }),

/***/ "./node_modules/selection-update/index.js":
/*!************************************************!*\
  !*** ./node_modules/selection-update/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Calculate the selection update for the given
 * current and new input values.
 *
 * @param {Object} currentSelection as {start, end}
 * @param {String} currentValue
 * @param {String} newValue
 *
 * @return {Object} newSelection as {start, end}
 */
function calculateUpdate(currentSelection, currentValue, newValue) {

  var currentCursor = currentSelection.start,
      newCursor = currentCursor,
      diff = newValue.length - currentValue.length,
      idx;

  var lengthDelta = newValue.length - currentValue.length;

  var currentTail = currentValue.substring(currentCursor);

  // check if we can remove common ending from the equation
  // to be able to properly detect a selection change for
  // the following scenarios:
  //
  //  * (AAATTT|TF) => (AAAT|TF)
  //  * (AAAT|TF) =>  (AAATTT|TF)
  //
  if (newValue.lastIndexOf(currentTail) === newValue.length - currentTail.length) {
    currentValue = currentValue.substring(0, currentValue.length - currentTail.length);
    newValue = newValue.substring(0, newValue.length - currentTail.length);
  }

  // diff
  var diff = createDiff(currentValue, newValue);

  if (diff) {
    if (diff.type === 'remove') {
      newCursor = diff.newStart;
    } else {
      newCursor = diff.newEnd;
    }
  }

  return range(newCursor);
}

module.exports = calculateUpdate;


function createDiff(currentValue, newValue) {

  var insert;

  var l_str, l_char, l_idx = 0,
      s_str, s_char, s_idx = 0;

  if (newValue.length > currentValue.length) {
    l_str = newValue;
    s_str = currentValue;
  } else {
    l_str = currentValue;
    s_str = newValue;
  }

  // assume there will be only one insert / remove and
  // detect that _first_ edit operation only
  while (l_idx < l_str.length) {

    l_char = l_str.charAt(l_idx);
    s_char = s_str.charAt(s_idx);

    // chars no not equal
    if (l_char !== s_char) {

      if (!insert) {
        insert = {
          l_start: l_idx,
          s_start: s_idx
        };
      }

      l_idx++;
    }

    // chars equal (again?)
    else {

      if (insert && !insert.complete) {
        insert.l_end = l_idx;
        insert.s_end = s_idx;
        insert.complete = true;
      }

      s_idx++;
      l_idx++;
    }
  }

  if (insert && !insert.complete) {
    insert.complete = true;
    insert.s_end = s_str.length;
    insert.l_end = l_str.length;
  }

  // no diff
  if (!insert) {
    return;
  }

  if (newValue.length > currentValue.length) {
    return {
      newStart: insert.l_start,
      newEnd: insert.l_end,
      type: 'add'
    };
  } else {
    return {
      newStart: insert.s_start,
      newEnd: insert.s_end,
      type: newValue.length < currentValue.length ? 'remove' : 'replace'
    };
  }
}

/**
 * Utility method for creating a new selection range {start, end} object.
 *
 * @param {Number} start
 * @param {Number} [end]
 *
 * @return {Object} selection range as {start, end}
 */
function range(start, end) {
  return {
    start: start,
    end: end === undefined ? start : end
  };
}

module.exports.range = range;


function splitStr(str, position) {
  return {
    before: str.substring(0, position),
    after: str.substring(position)
  };
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=client.bundle.js.map