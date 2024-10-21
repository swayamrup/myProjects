import { categories } from "../assets/productsData";
import { CategoryCard, Carousel, ProductListCard } from "../index";
import imgs from "../assets/curouser/curoser";
import { useUserContext } from "../context/userContext";
import products from "../assets/productsData";
import { useEffect } from "react";

function Home() {
  const { searchQuery,setSearchQuery } = useUserContext();
  // console.log(searchQuery);
useEffect(() => {
  setSearchQuery(searchQuery||"")
  return ()=>{
    setSearchQuery(false)
  }
}, [])

  return (
    <div className="dark:text-[#dce1fd]  dark:bg-[#2d2f36] h-[100vh]">
      <Carousel images={imgs}  timmer={1000} />
      {searchQuery.length>0 ? (
        <ProductListCard Products={products} search={searchQuery} />
      ) : (
        <CategoryCard categories={categories} />
      )}
    </div>
  );
}

export default Home;
