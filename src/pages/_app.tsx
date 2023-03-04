import React from 'react';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { StoresContext } from '@/common/context/stores-context';
import { useStoresContextState } from '@/common/hooks/use-stores-context-state';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { state, dispatch, notify, sendRequest } = useStoresContextState();
  return (
    <StoresContext.Provider value={{ stores: state?.stores, dispatch, notify, sendRequest }}>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </StoresContext.Provider>
  );
}

export default MyApp;
