import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";
import ThemeContext from "./context/ThemeContext";
import './i18n';
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./store/store"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SimpleReactLightbox>
                    <BrowserRouter basename='/'>
                        <ThemeContext>
                            <App />
                        </ThemeContext>
                    </BrowserRouter>
                </SimpleReactLightbox>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
