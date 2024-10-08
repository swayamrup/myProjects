import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import ImageCarousel from "./ImageCarousel";
import Asured from "../assets/extras/Asured.webp";

function productDetails({ Products = {}, discount = 44, className = "" }) {
  const param = useParams();
  const navigate = useNavigate();
  const { discountPrice, setUserCart, cart, isLogin } = useUserContext();
  const getDeliveryDetails = (delivaryafterdays = 3) => {
    let delevery = new Date(Date.now() + 86400000 * delivaryafterdays);
    return `Free delivery by ${delevery.toLocaleDateString("en", {
      day: "numeric",
    })} ${delevery.toLocaleDateString("en", {
      month: "short",
    })}`;
  };
  const [currentCategory] = Products.filter(
    (obj) => obj.category == param.Category
  );
  const [currentProduct] = currentCategory.products.filter(
    (prod) => prod.productId == param.productId
  );
  const productPresentInCart = (cart, product) => {
    return cart.filter((prod) => prod.productId === product.productId).length >
      0
      ? true
      : false;
  };
  const createCartItem = (prod) => {
    return {
      cartItemid: crypto.randomUUID(),
      productId: prod.productId,
      productname: prod.productName,
      productphoto: prod.productphotos[0],
      Rating: prod.Rating,
      price: prod.price,
      quantity: 1,
      discountPrice: discountPrice(prod.price, discount),
      discount: discount,
    };
  };

  // console.log(cart);

  const dis =
    "Introducing the SkyBreeze 3000, a portable air purifier designed to refresh any space. With its triple-layer filtration, it removes 99% of airborne pollutants, offering clean, crisp air. Silent operation and sleek design make it perfect for home or office. Breathe better, live healthier with the SkyBreeze 3000!";

  let isalreadyPresent = isLogin && productPresentInCart(cart, currentProduct);

  return (
    <>
      <div
        className={`productdetails p-3  dark:text-[#dce1fd] dark:bg-[#2d2f36] ${className}`}
      >
        <div className="imageSlider p-2 flex justify-center">
          <ImageCarousel
            prodMode
            images={currentProduct.productphotos}
            classname=" size-72"
          />
        </div>
        <div className="basicdetails p-2">
          <div className="productName">{currentProduct.productName}</div>
          <div className="rating flex items-center justify-between ">
            <div>{currentProduct.Rating}Rating</div>
            <img src={Asured} alt="flipkartAsured" className="max-w-20" />
          </div>
          <div className="price flex gap-x-4 font-semibold">
            <span className="text-[#008c00]">{discount}% off</span>
            <span className="line-through text-[#717478]">
              {currentProduct.price.toLocaleString("en-IN")}
            </span>
            <span>
              ₹
              {discountPrice(currentProduct.price, discount).toLocaleString(
                "en-IN"
              )}
            </span>
          </div>
          <p className="text-[12px]">{getDeliveryDetails()}</p>
        </div>
        <div className="seller">Sell By-{currentProduct.seller}</div>
        <div className="description border rounded-md p-3 text-lg">
          About Product:
          <div className="text-sm">{currentProduct.discription || dis}</div>
        </div>
        <div className="specifications  border rounded-md p-3 my-3">
          {Object.keys(currentProduct.specifications).map((spec) => (
            <div key={spec} className="flex items-center gap-3 my-3">
              <div className="spec font-semibold text-base min-w-40">
                {spec} :
              </div>
              <div className="value">{currentProduct.specifications[spec]}</div>
            </div>
          ))}
        </div>
        <div className="footer flex text-center sticky bottom-0  w-full bg-[#ffc200] text-black">
          <div
            className="w-1/2  bg-white p-2 cursor-pointer "
            onClick={() => {
              // if (isLogin&&isalreadyPresent) {
              //   navigate("/cart");
              // } else setUserCart([...cart, createCartItem(currentProduct)]);
              if (isLogin) {
                if (isalreadyPresent) {
                  navigate("/cart");
                } else {
                  setUserCart([...cart, createCartItem(currentProduct)]);
                }
              }
              else{
                navigate("/login");
              }
            }}
          >
            {isalreadyPresent ? "Goto Cart" : "Add to Cart"}
          </div>
          <div className="w-1/2 p-2 cursor-pointer">Buy now</div>
        </div>
      </div>
    </>
  );
}

export default productDetails;
