import checkImg from "../../assets/avds-vietnam.2073a450.png";

import MyCalender from "../../utiles/Calender";

export default function LeftSection() {
  return (
    <div className="w-1/3">
      <h3>Hi !</h3>

      <img className="cursor-pointer my-2" src={checkImg} alt="" />
      <MyCalender />
    </div>
  );
}
