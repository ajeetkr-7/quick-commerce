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
      <body className={`w-screen antialiased h-svh overflow-hidden`}>
        <div className="flex h-svh w-full">
          <SidebarProvider name="product-sidebar" defaultOpen={false}>
            <LeftSidebar />
          </SidebarProvider>
          <SidebarProvider
            name="app-sidebar"
            defaultOpen={true}
            style={
              {
                "--sidebar-width-icon": "4rem",
              } as React.CSSProperties
            }
          >
            <AppSidebar />
          </SidebarProvider>
          <main className="flex-1 h-full overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
