import Asured from "../assets/extras/Asured.webp";
import { Link, useParams } from "react-router-dom";

function ProductCard({ Products, discount = 0 }) {
  const discountPrice = (price, discount) => {
    return price - (discount * price) / 100;
  };
  const params = useParams();
  // destructure product obj form filtered category Array
  const [productObj] = Products.filter(
    (cat) => cat.category == params.Categoty
  );

  const productsArray = productObj.products;

  return (
    <>
    <div className="ListProd max-w-4xl m-auto dark:text-[#dce1fd] dark:bg-[#2d2f36]">
    {productsArray.map((product) => (
        <div key={product.productId} className="mb-4 border">
          <Link to={`${product.productId}`}>
            <div className="productcard px-3 flex justify-start gap-2 ">
              <div className="left flex justify-center items-center min-w-32 ">
                <img
                  src={product.productphotos[0]}
                  alt={product.productName}
                  className="img max-w-24 h-24"
                />
              </div>
              <div className="right flex justify-between sm:min-w-[36rem]">
                <div className="firstRight hidden md:block p-3 ">
                  <div className="prodname max-w-64">{product.productName}</div>
                  <div className="rating flex gap-3 items-center">
                    <span>
                      {product.Rating}
                      <span className="text-yellow-400">★</span>
                    </span>
                    <span className="max-w-16">
                      <img src={Asured} alt="flipkartAsured" />
                    </span>
                  </div>
                  <ul className="someSpec text-sm font-[500] font-sans m-2">
                    {Object.keys(product.specifications)
                      .map((spec) => product.specifications[spec])
                      .slice(2, 5)
                      .map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                  </ul>
                </div>
                <div className="secondRight p-2 md:p-3">
                  <div className="prodname md:hidden">
                    {product.productName}
                  </div>
                  <div className="rating flex gap-3 items-center md:hidden">
                    <span>
                      {product.Rating}
                      <span className="text-yellow-400">★</span>
                    </span>
                    <span className="max-w-16">
                      <img src={Asured} alt="flipkartAsured" />
                    </span>
                  </div>

                  <div className="price flex gap-x-2 font-semibold text-sm sm:text-lg">
                    <span>{discount}% off</span>
                    <span className="line-through text-[#717478]">
                      {product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="finalPrice">
                      ₹
                      {discountPrice(
                        product.price,
                        discount
                      ).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="extrainfo text-sm">
                    <p className="text-[#26a541]">
                      Save extra with combo offers
                    </p>
                    <p className="text-[#26a541]">Bank Offers</p>
                    <p className="">1 year warranty</p>
                    <p>Free delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
      
    </>
  );
}

export default ProductCard;
