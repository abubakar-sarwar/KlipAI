import { Navbar } from "@/app/_components";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="pt-[78px] lg:pt-[105px]">{children}</main>
    </>
  );
};

export default MainLayout;
