'use client'

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import HeaderManagement from "../components/header-management";
import { Sidebar } from "../components/Sidebar";

interface ManagementLayoutProps {
  children: ReactNode;
}

const ManagementLayout: React.FC<ManagementLayoutProps> = ({ children }) => {
  const linksSidebar = [
    { icon: "/home.svg", name: "Home", href: "/management" },
    {
      icon: "/file-tray-full.svg",
      name: "Cadastros",
      href: "#",
      sublinks: [
        { name: "Novo tutor", href: "/management/tutor-form" },
        { name: "Novo animal", href: "/management/pet-form" },
      ],
    },
    {
      icon: "/medical.svg",
      name: "Internamento",
      href: "#",
      sublinks: [
        { name: "Internar novo animal", href: "/management/hospitalizationsForm" },
        { name: "Novo tratamento", href: "/management/#" },
        { name: "Iniciar novo monitoramento", href: "/management/#" },
      ],
    },
    { icon: "/file.svg", name: "Exames", href: "/management/#" },
    { icon: "/calendar.svg", name: "Agenda", href: "#" },
    { icon: "/box.svg", name: "Inventário", href: "/management/inventory" },
  ];

  return (
    <SessionProvider>
      <div className="h-screen flex flex-col bg-gray-100">
        <HeaderManagement />
        <div className="flex h-full overflow-hidden">
          <div className="w-[20%] p-4 me-4"> {/* Espaçamento à direita da sidebar */}
            <Sidebar links={linksSidebar} />
          </div>
          <main className="flex-1 h-full p-6 bg-white shadow-lg rounded-lg overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SessionProvider>
  );
};

export default ManagementLayout;
