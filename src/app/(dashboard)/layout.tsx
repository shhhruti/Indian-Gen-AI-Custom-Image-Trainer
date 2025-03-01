import type { Metadata } from "next";
import localFont from "next/font/local";
// import "./globals.css";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import {SidebarTrigger} from "@/components/ui/sidebar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="w-fit flex items-center gap-2 my-4">
        <SidebarTrigger className="-ml-1" />
        </div>
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
