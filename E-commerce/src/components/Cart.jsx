import React, { useEffect } from "react";
import { minus, plus } from "../assets/extras/extra";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cart, setUserCart, isLogin } = useUserContext();
  const navigate = useNavigate();
  const getCartSummery = (cart) => {
    let totalPrice = 0;
    let totalDiscount = 0;
    let totalAmount = 0;
    let totalSaving = 0;
    let securedPackegeFee = 24;
    let deliveryCharges = 40;
    cart.map((item) => {
      totalPrice += item.price * item.quantity;
      totalDiscount += (item.price - item.discountPrice) * item.quantity;
      totalAmount += (item.discountPrice + securedPackegeFee) * item.quantity;
      totalSaving += totalDiscount + 58;
      securedPackegeFee *= item.quantity;
      deliveryCharges *= item.quantity;
    });
    return {
      totalPrice,
      totalDiscount,
      totalAmount,
      totalSaving,
      securedPackegeFee,
      deliveryCharges,
    };
  };

  const incQuantity = (prodId) => {
    setUserCart(
      cart.map((item) =>
        item.productId == prodId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const decQuantity = (prodId) => {
    setUserCart(
      cart.map((item) =>
        item.productId == prodId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const deteleteCart = (prodId) => {
    setUserCart(cart.filter((item) => item.cartItemid != prodId));
  };
  const cartSummery = isLogin && getCartSummery(cart);
  useEffect(() => {
    !isLogin && navigate("/");
  }, [isLogin]);
  return (
    <>
      <div className="dark:text-[#dce1fd] dark:bg-[#2d2f36] h-[100vh]">
        {isLogin ? (
          <div>
            {cart.length <= 0 ? (
              <h1>your cart is empty</h1>
            ) : (
              <div className="cartpage flex justify-around flex-wrap ">
                <div className="cartContainer m-2  text-sm max-w-md ">
                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.cartItemid}
                      className="cartCard flex gap-2  rounded-md p-2 "
                    >
                      <div className="left p-1 gap-2">
                        <img
                          src={cartItem.productphoto}
                          alt={cartItem.productName}
                          className="max-w-16"
                        />
                        <div className="quentity flex max-w-5">
                          <img
                            src={minus}
                            alt={minus}
                            onClick={() => {
                              cartItem.quantity != 1 &&
                                decQuantity(cartItem.productId);
                            }}
                          />
                          <span className="p-2">{cartItem.quantity}</span>
                          <img
                            src={plus}
                            alt={plus}
                            onClick={() =>
                              cartItem.quantity != 3 &&
                              incQuantity(cartItem.productId)
                            }
                          />
                        </div>
                      </div>
                      <div className="right  min-w-48  sm:min-w-56">
                        <div className="name max-w-48">
                          {cartItem.productname}
                        </div>
                        <div>{cartItem.Rating}Rating</div>
                        <span className="text-[#008c00]">
                          {cartItem.discount}% off
                        </span>
                        <span className="line-through text-[#717478] px-3">
                          {cartItem.price.toLocaleString("en-IN")}
                        </span>
                        <span>
                          ₹{cartItem.discountPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div
                        className="remove bg-red-400 self-end rounded p-1 my-2 text-center text-[12px] cursor-pointer"
                        onClick={() => deteleteCart(cartItem.cartItemid)}
                      >
                        Remove item
                      </div>
                    </div>
                  ))}
                </div>
                <div className="order ">
                  <div className="priceDetails p-2 m-2 border rounded-md min-w-[350px] self-start  ">
                    <div>PRICE DETAILS</div>
                    <div className="price flex justify-between">
                      <span>Price</span>
                      <span>₹ {cartSummery.totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="Discount flex justify-between">
                      <span>Discount</span>
                      <span className="text-green-400">
                        {cartSummery.totalDiscount.toLocaleString()}
                      </span>
                    </div>
                    <div className="DeliveryCharges flex justify-between">
                      <span>Delivery Charges</span>{" "}
                      <span className="text-green-400 ">
                        <span className="line-through text-gray-600 px-1">
                          ₹ {cartSummery.deliveryCharges}
                        </span>
                        Free
                      </span>
                    </div>
                    <div className="SecuredPackegeFee flex justify-between">
                      <span>Secured Packege Fee</span>
                      <span className="">
                        ₹ {cartSummery.securedPackegeFee}
                      </span>
                    </div>
                    <div className="TatalAmount flex justify-between">
                      <span className="totalamount">Total Amount</span>
                      <span className="value">
                        ₹ {cartSummery.totalAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-green-400">
                      You will save ₹{cartSummery.totalSaving.toLocaleString()}{" "}
                      on this order
                    </div>
                  </div>
                  <div className="placeOrder bg-yellow-400 p-2 m-2 text-center rounded-md">
                    Place-Order
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <h1 className="cursor-pointer" onClick={() => navigate("/login")}>
            plese login first...
          </h1>
        )}
      </div>
    </>
  );
}

export default Cart;
