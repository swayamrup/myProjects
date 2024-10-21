import { searchIcon } from "../assets/nav_imgs/_nav_Img";
import { useUserContext } from "../context/userContext";
function SearchBar() {
  const { searchQuery, setSearchQuery } = useUserContext();
  const search = (e) => {
    setSearchQuery(e.target.value);
  };
  

  return (
    <div
      className={searchQuery===false?"hidden":`search bg-[#f0f5ff] p-1 flex gap-1 rounded-md focus-within:border  dark:bg-[#353740] `}
    >
      <img src={searchIcon} alt="searchIcon" className="min-w-[20px]" />
      <input
        type="text"
        onChange={search}
        value={searchQuery}
        placeholder="Search for Products, Brands and More"
        className=" bg-[#f0f5ff] py-1 px-1 w-full outline-none dark:bg-[#353740]"
      />
    </div>
  );
}

export default SearchBar;
