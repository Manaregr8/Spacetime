"use client";
import { createContext, useContext, useState, useCallback } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [modalType, setModalType] = useState(null); // null | 'full' | 'tour' | 'virtual'
  const [modalLocation, setModalLocation] = useState(null); // optional pre-filled location
  const [isHeroLoaded, setHeroLoaded] = useState(false);

  const openModal = useCallback((type = "full", location = null) => {
    setModalType(type);
    setModalLocation(location);
  }, []);

  const closeModal = useCallback(() => {
    setModalType(null);
    setModalLocation(null);
  }, []);

  const isOpen = !!modalType;

  return (
    <BookingContext.Provider value={{ isOpen, modalType, modalLocation, openModal, closeModal, isHeroLoaded, setHeroLoaded }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
