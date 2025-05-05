import React from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import Header from "@/components/header";
import { AppSidebar } from "../sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-screen bg-background text-foreground">
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 h-full">{children}</main>
      </SidebarInset>
    </div>
  );
}

export default AppLayout;
