import React, { createContext, useContext, useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "./firebase";
import { defaultContent, normalizeContent } from "./defaultContent";

const ContentContext = createContext({
  content: defaultContent,
  status: "local",
});

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const unsubscribe = onValue(
      ref(database, "content"),
      (snapshot) => {
        const value = snapshot.val();
        if (value) {
          setContent(normalizeContent(value));
          setStatus("live");
        } else {
          setStatus("empty");
        }
      },
      () => setStatus("local")
    );

    return unsubscribe;
  }, []);

  return (
    <ContentContext.Provider value={{ content, status }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useSiteContent() {
  return useContext(ContentContext);
}
