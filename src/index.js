import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/lib/integration/react";
import SimpleReactLightbox from "simple-react-lightbox";
import App from "./App";
import ThemeContext from "./context/ThemeContext";
import './i18n';
import CryptoContext from './jsx/views/Dashboard/market/CryptoContext';
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from './store/store';
import getLibrary from './utils/GetLibrary';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SimpleReactLightbox>
                    <BrowserRouter basename='/'>
                        <ThemeContext>
                            <Web3ReactProvider getLibrary={getLibrary}>
                                <CryptoContext>
                                    <App />
                                </CryptoContext>
                            </Web3ReactProvider>
                        </ThemeContext>
                    </BrowserRouter>
                </SimpleReactLightbox>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
