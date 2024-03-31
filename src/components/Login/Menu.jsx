export default function Menu() {
  return (
    <div
      className="flex justify-between align-middle px-5 py-1 text-white"
      style={{ background: `linear-gradient(180deg,#03BDF0,#014B8C)` }}
    >
      <ul className="flex gap-3 text-xs">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Credit Cards</a>
        </li>
        <li>
          <a href="#">Loans</a>
        </li>
        <li>
          <a href="#">Deposits</a>
        </li>
        <li>
          <a href="#">Investment</a>
        </li>
        <li>
          <a href="#">Citygold</a>
        </li>
        <li>
          <a href="#">Promotions</a>
        </li>
        <li>
          <a href="#">Online Services</a>
        </li>
      </ul>
      <button className="text-xs m-0 px-3 py-1 bg-[#014B8C]">Sign On</button>
    </div>
  );
}
