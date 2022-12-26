"use strict";
self["webpackHotUpdatecash_force_frontend"]("main",{

/***/ "./src/presentation/pages/login/login.tsx":
/*!************************************************!*\
  !*** ./src/presentation/pages/login/login.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-styles.scss */ "./src/presentation/pages/login/login-styles.scss");
/* harmony import */ var _presentation_contexts_form_form_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/presentation/contexts/form/form-context */ "./src/presentation/contexts/form/form-context.ts");
/* harmony import */ var _presentation_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/presentation/components */ "./src/presentation/components/index.ts");
/* harmony import */ var _login_initial_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-initial-state */ "./src/presentation/pages/login/login-initial-state.ts");
/* harmony import */ var _presentation_components_submit_button_submit_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/presentation/components/submit-button/submit-button */ "./src/presentation/components/submit-button/submit-button.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const Login = ({ validation, authentication, saveAccessToken }) => {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_login_initial_state__WEBPACK_IMPORTED_MODULE_4__.initialState);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const { email, password } = state;
        const formData = { email, password };
        const emailError = validation.validate('email', formData);
        const passwordError = validation.validate('password', formData);
        setState(Object.assign(Object.assign({}, state), { emailError,
            passwordError, isFormInvalid: !!emailError || !!passwordError }));
    }, [state.email, state.password]);
    const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        try {
            if (!state.isLoading && !state.isFormInvalid) {
                setState(Object.assign(Object.assign({}, state), { isLoading: true }));
                const { accessToken } = yield authentication.auth({ email: state.email, password: state.password });
                yield saveAccessToken.save(accessToken);
                navigate('/', { replace: true });
            }
        }
        catch (error) {
            setState(Object.assign(Object.assign({}, state), { isLoading: false, errorMessage: error.message }));
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_3__.LoginHeader, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_presentation_contexts_form_form_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, { value: { state, setState } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: _login_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].form, onSubmit: handleSubmit, role: "form" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Login"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "email", name: "email", placeholder: 'Digite seu e-mail' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_3__.Input, { type: "password", name: "password", placeholder: 'Digite sua senha' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_presentation_components_submit_button_submit_button__WEBPACK_IMPORTED_MODULE_5__["default"], { text: "Entrar" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_3__.FormStatus, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_presentation_components__WEBPACK_IMPORTED_MODULE_3__.Footer, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f299354aa337c5352e25")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45YTc5OTU2ODZmMzliZjcyYzg4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNtRDtBQUNKO0FBQ047QUFDdUI7QUFDbUI7QUFDOUI7QUFDNEI7QUFDakYsaUJBQWlCLDZDQUE2QztBQUM5RCxxQkFBcUIsNkRBQVc7QUFDaEMsOEJBQThCLCtDQUFRLENBQUMsOERBQVk7QUFDbkQsSUFBSSxnREFBUztBQUNiLGdCQUFnQixrQkFBa0I7QUFDbEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSwrQ0FBK0MsWUFBWTtBQUMzRCwyRUFBMkU7QUFDM0UsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFlBQVksaUJBQWlCO0FBQ3BGLHdCQUF3QixjQUFjLDhCQUE4Qiw4Q0FBOEM7QUFDbEg7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWSwrQ0FBK0M7QUFDOUc7QUFDQSxLQUFLO0FBQ0wsWUFBWSwwREFBbUIsVUFBVSxXQUFXLGdFQUFZLEVBQUU7QUFDbEUsUUFBUSwwREFBbUIsQ0FBQyxpRUFBVztBQUN2QyxRQUFRLDBEQUFtQixDQUFDLHlGQUFnQixJQUFJLFNBQVMsbUJBQW1CO0FBQzVFLFlBQVksMERBQW1CLFdBQVcsV0FBVywrREFBVyx3Q0FBd0M7QUFDeEcsZ0JBQWdCLDBEQUFtQjtBQUNuQyxnQkFBZ0IsMERBQW1CLENBQUMsMkRBQUssSUFBSSxnRUFBZ0U7QUFDN0csZ0JBQWdCLDBEQUFtQixDQUFDLDJEQUFLLElBQUkscUVBQXFFO0FBQ2xILGdCQUFnQiwwREFBbUIsQ0FBQyw0RkFBWSxJQUFJLGdCQUFnQjtBQUNwRSxnQkFBZ0IsMERBQW1CLENBQUMsZ0VBQVU7QUFDOUMsUUFBUSwwREFBbUIsQ0FBQyw0REFBTTtBQUNsQztBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7O1VDcERyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Nhc2gtZm9yY2UtZnJvbnRlbmQvLi9zcmMvcHJlc2VudGF0aW9uL3BhZ2VzL2xvZ2luL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly9jYXNoLWZvcmNlLWZyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9sb2dpbi1zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgQ29udGV4dCBmcm9tICdAL3ByZXNlbnRhdGlvbi9jb250ZXh0cy9mb3JtL2Zvcm0tY29udGV4dCc7XG5pbXBvcnQgeyBMb2dpbkhlYWRlciwgRm9vdGVyLCBJbnB1dCwgRm9ybVN0YXR1cyB9IGZyb20gJ0AvcHJlc2VudGF0aW9uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9sb2dpbi1pbml0aWFsLXN0YXRlJztcbmltcG9ydCBTdWJtaXRCdXR0b24gZnJvbSAnQC9wcmVzZW50YXRpb24vY29tcG9uZW50cy9zdWJtaXQtYnV0dG9uL3N1Ym1pdC1idXR0b24nO1xuY29uc3QgTG9naW4gPSAoeyB2YWxpZGF0aW9uLCBhdXRoZW50aWNhdGlvbiwgc2F2ZUFjY2Vzc1Rva2VuIH0pID0+IHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBzdGF0ZTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xuICAgICAgICBjb25zdCBlbWFpbEVycm9yID0gdmFsaWRhdGlvbi52YWxpZGF0ZSgnZW1haWwnLCBmb3JtRGF0YSk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRXJyb3IgPSB2YWxpZGF0aW9uLnZhbGlkYXRlKCdwYXNzd29yZCcsIGZvcm1EYXRhKTtcbiAgICAgICAgc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgZW1haWxFcnJvcixcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyb3IsIGlzRm9ybUludmFsaWQ6ICEhZW1haWxFcnJvciB8fCAhIXBhc3N3b3JkRXJyb3IgfSkpO1xuICAgIH0sIFtzdGF0ZS5lbWFpbCwgc3RhdGUucGFzc3dvcmRdKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFzdGF0ZS5pc0xvYWRpbmcgJiYgIXN0YXRlLmlzRm9ybUludmFsaWQpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBpc0xvYWRpbmc6IHRydWUgfSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYWNjZXNzVG9rZW4gfSA9IHlpZWxkIGF1dGhlbnRpY2F0aW9uLmF1dGgoeyBlbWFpbDogc3RhdGUuZW1haWwsIHBhc3N3b3JkOiBzdGF0ZS5wYXNzd29yZCB9KTtcbiAgICAgICAgICAgICAgICB5aWVsZCBzYXZlQWNjZXNzVG9rZW4uc2F2ZShhY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGUoJy8nLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBpc0xvYWRpbmc6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBTdHlsZXMubG9naW4gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMb2dpbkhlYWRlciwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyBzdGF0ZSwgc2V0U3RhdGUgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBjbGFzc05hbWU6IFN0eWxlcy5mb3JtLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCByb2xlOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIkxvZ2luXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgdHlwZTogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiAnRGlnaXRlIHNldSBlLW1haWwnIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBuYW1lOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiAnRGlnaXRlIHN1YSBzZW5oYScgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJtaXRCdXR0b24sIHsgdGV4dDogXCJFbnRyYXJcIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1TdGF0dXMsIG51bGwpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjI5OTM1NGFhMzM3YzUzNTJlMjVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=