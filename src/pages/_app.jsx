import { useRouter } from "next/router";

import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import DefaultLayout from "@/Components/Layouts/DefaultLayout";
import DashboardLayout from "@/Components/Layouts/DashboardLayout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const pathname = router.pathname;

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const getLayout = () => {
    if (pathname.includes("Dashboard")) {
      return (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      );
    }
    return (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    );
  };

  return getLayout();
}
