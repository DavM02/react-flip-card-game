import React, { ReactNode } from "react";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
 
  return (
    <main>
      <section id="game">
        <div className="container">
          <div className="center">{children}</div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
