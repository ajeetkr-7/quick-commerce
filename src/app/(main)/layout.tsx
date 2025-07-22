import type { Metadata } from "next";
import "@/app/globals.css";
import { SidebarProvider } from "@/core/components/ui/sidebar";
import LeftSidebar from "@/core/components/layout/left-sidebar";
import { AppSidebar } from "@/core/components/layout/app-sidebar";

export const metadata: Metadata = {
  title: "Quick Commerce",
  description: "Quick Commerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex w-screen antialiased`}
      >
        <SidebarProvider name="product-sidebar" defaultOpen={false} >
          <LeftSidebar />
        </SidebarProvider>
        <SidebarProvider name="app-sidebar" defaultOpen={true}
          style={
            {
              "--sidebar-width-icon": "3.8rem",
            } as React.CSSProperties
          }
        >
          <AppSidebar />
        </SidebarProvider >
        {children}
      </body>
    </html>
  );
}
