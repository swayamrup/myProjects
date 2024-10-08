import { categories } from "../assets/productsData";
import { CategoryCard, Carousel } from "../index";
import imgs from "../assets/curouser/curoser";
import { useUserContext } from "../context/userContext";
function Home() {
 
  return (
    <div className="home dark:text-[#dce1fd]  dark:bg-[#2d2f36]">
      <Carousel images={imgs} />
      <CategoryCard categories={categories} />
    </div>
  );
}

export default Home;
