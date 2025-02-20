'use client'

import { useState, useEffect } from "react";

export const MessagePopup = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(false), 1000); // Esconde após 3s
      return () => clearTimeout(timer); // Limpa o timeout ao desmontar
    }, []);
  
    return (
        <div className={`z-40 fixed top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
            ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>

            <img src="/assets/hero.png" className={`fixed top-0 w-full h-full object-cover`}
            />

            <h2 className={`z-50 fixed bottom-40 right-24 text-3xl`}>
                Portfolio
            </h2>
            <h2 className={`z-50 fixed bottom-28 right-24 text-3xl`}>
                Igor Oliveira Lima
            </h2>
        </div>
    );
  };