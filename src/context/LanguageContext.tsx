"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import defaultContentJson from "../../content.json";
import type { CMSContent } from "@/types/cms";

export type Language = "EN" | "ID";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  content: CMSContent;
  isLoadingContent: boolean;
  refreshContent: () => Promise<void>;
}

const initialContent = defaultContentJson as CMSContent;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");
  const [content, setContent] = useState<CMSContent>(initialContent);
  const [isLoadingContent, setIsLoadingContent] = useState<boolean>(false);

  const refreshContent = useCallback(async () => {
    setIsLoadingContent(true);
    try {
      const res = await fetch("/api/cms/content", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data?.content) {
          setContent(data.content);
        }
      }
    } catch {
      // Keep default repo content if offline
    } finally {
      setIsLoadingContent(false);
    }
  }, []);

  useEffect(() => {
    refreshContent();
  }, [refreshContent]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ID" : "EN");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        content,
        isLoadingContent,
        refreshContent,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
