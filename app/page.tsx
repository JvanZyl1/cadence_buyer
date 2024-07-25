"use client";
// use client
import React, { useState } from 'react';
import { InitialScreen } from "@/components/component/initial-screen";
import {LoadingScreen} from "@/components/component/loading-screen";

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<string>('initial');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  return (
    <>
      {currentScreen === 'initial' && (
        <InitialScreen
          onNavigateToLoading={() => handleNavigate('loading')}
        />
      )}
      {currentScreen === 'loading' && (
        <LoadingScreen 
          onNavigateToInitial={() => handleNavigate('initial')} 
        />
      )}
    </>
  );
}