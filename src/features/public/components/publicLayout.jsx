import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";
import Nav from "./NavHeader";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen">
      <Header />
      {/* <Nav /> */}
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </main>
  );
};

export default PublicLayout;
