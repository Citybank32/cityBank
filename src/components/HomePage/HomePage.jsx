import LeftSection from "./LeftSection";
import Message from "./Message";
import Nav from "./Nav";
import RightSection from "./RightSection";

export default function HomePage() {
  return (
    <section className="text-[rgba(46,67,105,.75)] ">
      <Nav />
      <Message />
      <div className="flex gap-4">
        <LeftSection />
        <RightSection />
      </div>
    </section>
  );
}
