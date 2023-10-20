import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import myProfileReducer from "./my-profile-reducer";
import { reducer as formik } from "formik-redux";
import appReducer from "./app-reducer";

let redusers = combineReducers({
    myProfilePage: myProfileReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formik,
    app: appReducer
});

let store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;