import { FaArrowRightLong } from "react-icons/fa6";
export default function SingleStatus({ name, img, desc }) {
  return (
    <div className="border text-center grid p-3">
      <h1 className="text-5xl text-sky-500  flex justify-center"> {img}</h1>
      <h1 className="text-md">{name}</h1>
      <p className="text-xs">{desc}</p>
      <button className="flex flex-center mx-auto text-sm text-sky-500 gap-2 border p-1 border-sky-500 rounded-full pt-2 px-2 hover:bg-sky-200 hover:text-white mt-3">
        <p className="mt-[-2px]"> Send now</p> <FaArrowRightLong />
      </button>
    </div>
  );
}
