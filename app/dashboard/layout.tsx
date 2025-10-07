import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NuqsAdapter } from 'nuqs/adapters/next/app'; // Import the App Router adapter
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NuqsAdapter> {/* Wrap with NuqsAdapter */}
      <SidebarProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <AppSidebar />
        </Suspense>
        <main className="flex-1">{children}</main>
      </SidebarProvider>
    </NuqsAdapter>
  );
}