"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst register = ()=>{\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleRegister = (e)=>{\n        e.prevenetDefault();\n    };\n    const form = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleRegister,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"form-control mb-4 \",\n                    placeholder: \"Name\",\n                    value: name,\n                    onChange: (e)=>setName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    className: \"form-control mb-4\",\n                    placeholder: \"Email\",\n                    value: email,\n                    onChange: (e)=>setEmail(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    className: \"form-control mb-4\",\n                    placeholder: \"Password\",\n                    value: password,\n                    onChange: (e)=>setPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary m-auto w-100\",\n                    type: \"submit\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n            lineNumber: 18,\n            columnNumber: 24\n        }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron bg-primary text-center pt-5 pb-5 grad\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mt-3 col-md-4 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border p-5 \",\n                    children: [\n                        form(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Already have an Account\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDVztBQUt4QyxNQUFNRyxRQUFRLEdBQUcsSUFBTTtJQUNuQixNQUFNLEtBQUNDLElBQUksTUFBRUMsT0FBTyxNQUFJSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNwQyxNQUFNLEtBQUNJLEtBQUssTUFBRUMsUUFBUSxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEtBQUNNLFFBQVEsTUFBRUMsV0FBVyxNQUFJUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUc1QyxNQUFNUSxjQUFjLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFLO1FBQzFCQSxDQUFDLENBQUNDLGVBQWUsRUFBRSxDQUFDO0tBQ3ZCO0lBR0QsTUFBTUMsSUFBSSxHQUFHLGtCQUFNLDhEQUFDQSxNQUFJO1lBQUNDLFFBQVEsRUFBRUosY0FBYzs7OEJBRTdDLDhEQUFDSyxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjtvQkFBQ0MsV0FBVyxFQUFDLE1BQU07b0JBQUNDLEtBQUssRUFBRWYsSUFBSTtvQkFBRWdCLFFBQVEsRUFBRSxDQUFDVCxDQUFDLEdBQUtOLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDVSxNQUFNLENBQUNGLEtBQUssQ0FBQzs7Ozs7NkJBQUk7OEJBQzlILDhEQUFDSixPQUFLO29CQUFDQyxJQUFJLEVBQUMsT0FBTztvQkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjtvQkFBQ0MsV0FBVyxFQUFDLE9BQU87b0JBQUNDLEtBQUssRUFBRWIsS0FBSztvQkFBRWMsUUFBUSxFQUFFLENBQUNULENBQUMsR0FBS0osUUFBUSxDQUFDSSxDQUFDLENBQUNVLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDOzs7Ozs2QkFBSTs4QkFDakksOERBQUNKLE9BQUs7b0JBQUNDLElBQUksRUFBQyxVQUFVO29CQUFDQyxTQUFTLEVBQUMsbUJBQW1CO29CQUFDQyxXQUFXLEVBQUMsVUFBVTtvQkFBQ0MsS0FBSyxFQUFFWCxRQUFRO29CQUFFWSxRQUFRLEVBQUUsQ0FBQ1QsQ0FBQyxHQUFLRixXQUFXLENBQUNFLENBQUMsQ0FBQ1UsTUFBTSxDQUFDRixLQUFLLENBQUM7Ozs7OzZCQUFJOzhCQUU3SSw4REFBQ0csUUFBTTtvQkFBQ0wsU0FBUyxFQUFDLDhCQUE4QjtvQkFBQ0QsSUFBSSxFQUFDLFFBQVE7OEJBQUMsVUFBUTs7Ozs7NkJBQVM7Ozs7OztxQkFDN0U7SUFHUCxxQkFDSTs7MEJBQ0ksOERBQUNPLElBQUU7Z0JBQUNOLFNBQVMsRUFBQyxpREFBaUQ7MEJBQUMsVUFBUTs7Ozs7eUJBQUs7MEJBRTdFLDhEQUFDTyxLQUFHO2dCQUFDUCxTQUFTLEVBQUMsMEJBQTBCOzBCQUNyQyw0RUFBQ08sS0FBRztvQkFBQ1AsU0FBUyxFQUFDLGFBQWE7O3dCQUN2QkosSUFBSSxFQUFFO3NDQUNQLDhEQUFDVyxLQUFHOzRCQUFDUCxTQUFTLEVBQUMsTUFBTTtzQ0FDakIsNEVBQUNqQixrREFBSTtnQ0FBQ3lCLElBQUksRUFBQyxRQUFROzBDQUNmLDRFQUFDQyxHQUFDOzhDQUFFLHlCQUF1Qjs7Ozs7NkNBQUk7Ozs7O3lDQUM1Qjs7Ozs7cUNBQ0w7Ozs7Ozs2QkFDSjs7Ozs7eUJBQ0o7O29CQUNQLENBRU47Q0FDSjtBQUVELGlFQUFldkIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL3JlZ2lzdGVyLmpzP2EwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZWdpc3RlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW5ldERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgZm9ybSA9ICgpID0+IDxmb3JtIG9uU3VibWl0PXtoYW5kbGVSZWdpc3Rlcn0gPlxyXG5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbS1hdXRvIHctMTAwXCIgdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nanVtYm90cm9uIGJnLXByaW1hcnkgdGV4dC1jZW50ZXIgcHQtNSBwYi01IGdyYWQnPlJlZ2lzdGVyPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTMgY29sLW1kLTQgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm0oKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9sb2dpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA+QWxyZWFkeSBoYXZlIGFuIEFjY291bnQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwicmVnaXN0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlUmVnaXN0ZXIiLCJlIiwicHJldmVuZXREZWZhdWx0IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiaDEiLCJkaXYiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();