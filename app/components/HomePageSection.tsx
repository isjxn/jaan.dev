export default function HomePageSection({isScrollTarget = true, children }: {isScrollTarget?: boolean, children: React.ReactNode | React.ReactNode[] }) {
  return(
    <section className={isScrollTarget ? "w-screen h-screen flex justify-center items-center flex-col scroll-target" : "w-screen h-screen flex justify-center items-center flex-col"}>
      {children}
    </section>
  );
}