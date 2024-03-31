import heroImg from "../../assets/logoBlueBackground.png";
export default function Hero() {
  return (
    <>
      <div className="w-full flex justify-between flex-row uppercase bg-menu-background text-[9px] px-5 py-1 text-white font-sans">
        <div className="flex gap-3">
          <span className="">citibank thailand</span>
          <span>English</span>
        </div>
        <div className="flex gap-3">
          <span>Locations</span>
          <span>contacts us</span>
          <div>
            <input type="text" />
          </div>
          <span>help</span>
          <span>security</span>
        </div>
      </div>

      <div
        className="py-5 px-5"
        style={{ background: `linear-gradient(180deg,#03BDF0,#014B8C)` }}
      >
        <img src={heroImg} alt="" width={60} />
      </div>
    </>
  );
}
