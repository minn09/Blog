import { HiOutlineSearch } from "react-icons/hi";

export const Header = () => {
  return (
    <>
      <header className=" flex justify-around items-center bg-white text-white">
        <img src="/blog.svg" alt="" width="100px" height="200px" />
        <p className="text-2xl text-black">Ontent</p>
        <div>
          <HiOutlineSearch size={30} color="black" />
        </div>
      </header>
    </>
  );
};
