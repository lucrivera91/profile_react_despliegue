import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      &copy; {new Date().getFullYear()} Luciano Rivera - Todos los derechos
      reservados
    </footer>
  );
};