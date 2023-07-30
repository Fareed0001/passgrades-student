import { useRouter } from "next/router";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import DefaultLayout from "@/Components/Layouts/DefaultLayout";
import DashboardLayout from "@/Components/Layouts/DashboardLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

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

  return <LayoutWrapper>{<Component {...pageProps} />}</LayoutWrapper>;
}
