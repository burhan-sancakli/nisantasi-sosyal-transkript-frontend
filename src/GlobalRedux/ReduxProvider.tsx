// ReduxProvider.tsx
"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Redux-Persist için PersistGate ekleyin
import { store, persistor } from "./store";
import { useEffect, useState } from "react";

export function ReduxProvider({ children }: { children: any }) {
  const [mounted, setMounted] = useState(false); // used for detecting renders
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
