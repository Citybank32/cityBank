import Hero from "./Hero";
import Menu from "./Menu";
import Notice from "./NoticeBox";

function Page() {
  localStorage.clear();
  return (
    <>
      <section className="">
        <Hero />
        <Menu />
        <Notice />
      </section>
    </>
  );
}

export default Page;
