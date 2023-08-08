import { useRouter } from "next/router";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import DefaultLayout from "@/Components/Layouts/DefaultLayout";
import DashboardLayout from "@/Components/Layouts/DashboardLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "@/Components/ui/toaster";
const queryClient = new QueryClient();
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { Loader2Icon } from "lucide-react";

export default function App({ Component, pageProps, session }) {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const LayoutWrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <Toaster />
        {pathname.includes("Dashboard") ? (
          <DashboardLayout>{children}</DashboardLayout>
        ) : (
          <DefaultLayout>{children}</DefaultLayout>
        )}
      </SessionProvider>
    </QueryClientProvider>
  );

  return (
    <LayoutWrapper>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </LayoutWrapper>
  );
}

function Auth({ children }) {
  const { session, loading } = useSession();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (loading) return;
    if (!isUser) signIn();
  }, [isUser, loading]);

  if (isUser) {
    return children;
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader2Icon className="animate-spin" />
    </div>
  );
}
