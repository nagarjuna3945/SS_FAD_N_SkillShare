
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyAzoOg4Epvwf8K4oDaCWVd25Ya_KA9BuU4",
    authDomain: "e-commerce-ba2a6.firebaseapp.com",
    databaseURL: "https://e-commerce-ba2a6.firebaseio.com",
    projectId: "e-commerce-ba2a6",
    storageBucket: "e-commerce-ba2a6.appspot.com",
    messagingSenderId: "899290920161"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};