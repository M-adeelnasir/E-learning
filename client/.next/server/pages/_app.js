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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst TopNav = ()=>{\n    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"/\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n         true && setCurrent(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n        mode: \"horizontal\",\n        selectedKeys: [\n            current\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/\", false, {\n                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LoginOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/login\", false, {\n                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {\n                onClick: (e)=>setCurrent(e.key),\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"register\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, undefined)\n            }, \"/register\", false, {\n                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ3NCO0FBQ21DO0FBQ3pEO0FBRTVCLE1BQU1RLE1BQU0sR0FBRyxJQUFNO0lBRWpCLE1BQU0sS0FBQ0MsT0FBTyxNQUFFQyxVQUFVLE1BQUlSLCtDQUFRLENBQUMsR0FBRyxDQUFDO0lBRTNDQyxnREFBUyxDQUFDLElBQU07UUFDWixLQUE2QixJQUFJTyxVQUFVLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUM7S0FDeEUsRUFBRTtRQUFDLEtBQTZCLElBQUlGLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRO0tBQUMsQ0FBQztJQUUvRCxxQkFDSSw4REFBQ2Isc0NBQUk7UUFBQ2MsSUFBSSxFQUFDLFlBQVk7UUFBQ0MsWUFBWSxFQUFFO1lBQUNOLE9BQU87U0FBQzs7MEJBQzNDLDhEQUFDVCwyQ0FBUztnQkFBU2lCLE9BQU8sRUFBRSxDQUFDQyxDQUFDLEdBQUtSLFVBQVUsQ0FBQ1EsQ0FBQyxDQUFDQyxHQUFHLENBQUM7Z0JBQUVDLElBQUksZ0JBQUUsOERBQUNoQiwrREFBZ0Isb0NBQUc7MEJBQzVFLDRFQUFDRyxrREFBSTtvQkFBQ2MsSUFBSSxFQUFDLEdBQUc7OEJBQ1YsNEVBQUNDLEdBQUM7a0NBQUMsS0FBRzs7Ozs7aUNBQUk7Ozs7OzZCQUNQO2VBSEksR0FBRzs7Ozt5QkFJTjswQkFDWiw4REFBQ3RCLDJDQUFTO2dCQUFjaUIsT0FBTyxFQUFFLENBQUNDLENBQUMsR0FBS1IsVUFBVSxDQUFDUSxDQUFDLENBQUNDLEdBQUcsQ0FBQztnQkFBRUMsSUFBSSxnQkFBRSw4REFBQ2YsNERBQWEsb0NBQUc7MEJBQzlFLDRFQUFDRSxrREFBSTtvQkFBQ2MsSUFBSSxFQUFDLE9BQU87OEJBQ2QsNEVBQUNDLEdBQUM7a0NBQUMsT0FBSzs7Ozs7aUNBQUk7Ozs7OzZCQUNUO2VBSEksUUFBUTs7Ozt5QkFJWDswQkFDWiw4REFBQ3RCLDJDQUFTO2dCQUFpQmlCLE9BQU8sRUFBRSxDQUFDQyxDQUFDLEdBQUtSLFVBQVUsQ0FBQ1EsQ0FBQyxDQUFDQyxHQUFHLENBQUM7Z0JBQUVDLElBQUksZ0JBQUUsOERBQUNkLDhEQUFlLG9DQUFHOzBCQUNuRiw0RUFBQ0Msa0RBQUk7b0JBQUNjLElBQUksRUFBQyxVQUFVOzhCQUNqQiw0RUFBQ0MsR0FBQztrQ0FBQyxVQUFROzs7OztpQ0FBSTs7Ozs7NkJBQ1o7ZUFISSxXQUFXOzs7O3lCQUlkOzs7Ozs7aUJBQ1QsQ0FDVjtDQUNKO0FBRUQsaUVBQWVkLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1RvcE5hdi5qcz85ZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCwgTG9naW5PdXRsaW5lZCwgVXNlckFkZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXHJcblxyXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCIvXCIpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiBzZXRDdXJyZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgIH0sIFt0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnUgbW9kZT0naG9yaXpvbnRhbCcgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19PlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT0nLycgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfSBpY29uPXs8QXBwc3RvcmVPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5BcHA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT0nL2xvZ2luJyBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9IGljb249ezxMb2dpbk91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9J2xvZ2luJz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PScvcmVnaXN0ZXInIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX0gaWNvbj17PFVzZXJBZGRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPSdyZWdpc3Rlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2Il0sIm5hbWVzIjpbIk1lbnUiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXBwc3RvcmVPdXRsaW5lZCIsIkxvZ2luT3V0bGluZWQiLCJVc2VyQWRkT3V0bGluZWQiLCJMaW5rIiwiVG9wTmF2IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibW9kZSIsInNlbGVjdGVkS2V5cyIsIkl0ZW0iLCJvbkNsaWNrIiwiZSIsImtleSIsImljb24iLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_TopNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TopNav */ \"./components/TopNav.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst Myapp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adnas\\\\OneDrive\\\\Desktop\\\\E-learning\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Myapp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNuQjtBQUNLO0FBQ1U7QUFDTTtBQUNEO0FBSS9DLE1BQU1FLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDeEMscUJBQ0k7OzBCQUNJLDhEQUFDSCwwREFBYztnQkFBQ0ksUUFBUSxFQUFDLFlBQVk7Ozs7O3lCQUFHOzBCQUN4Qyw4REFBQ0wsMERBQU07Ozs7eUJBQUc7MEJBQ1YsOERBQUNHLFNBQVM7Z0JBQUMsR0FBR0MsU0FBUzs7Ozs7eUJBQUk7O29CQUM1QixDQUNOO0NBQ0o7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9zdHlsZS5jc3MnXHJcbmltcG9ydCBUb3BOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9Ub3BOYXYnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcblxyXG5cclxuY29uc3QgTXlhcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj0ndG9wLWNlbnRlcicgLz5cclxuICAgICAgICAgICAgPFRvcE5hdiAvPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50ey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlhcHA7Il0sIm5hbWVzIjpbIlRvcE5hdiIsIlRvYXN0Q29udGFpbmVyIiwiTXlhcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();