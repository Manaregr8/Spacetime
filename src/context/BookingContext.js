"use client";
import { createContext, useContext, useState, useCallback } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [modalType, setModalType] = useState(null); // null | 'full' | 'tour'

  const openModal = useCallback((type = "full") => setModalType(type), []);
  const closeModal = useCallback(() => setModalType(null), []);

  const isOpen = !!modalType;

  return (
    <BookingContext.Provider value={{ isOpen, modalType, openModal, closeModal }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
