import React, { useState } from "react";
import { Modal, Result } from "antd";
import axios from "axios";

const Order = ({ modalVisible, setVisible, product }) => {
  const { name, _id, price, image } = product;
  const [quantity, setQuantity] = useState(1);
  const [phoneClass, setPhoneClass] = useState("phone_hidden");
  const [charged, setCharged] = useState(null);

  // change quantity of order
  const handlePriceChange = e => {
    const { value, name } = e.target;
    setQuantity({ ...quantity, [name]: value > 0 ? value : 1 });
  };

  // display or hide phone input
  const handlePhone = () => {
    setPhoneClass("sizes");
  };

  // calculate the price with quantity
  const getPrice = () =>
    (Number(quantity.size) > 0 ? Number(quantity.size) : 1) * Number(price);

  // send the checkout data to server
  const handleCheckout = async () => {
    const paid = await axios.post("/api/checkout", {
      ...quantity,
      price: getPrice()
    });
    console.log(paid.data);
    return setCharged(paid.data);
  };

  return (
    <div>
      <Modal
        title={name}
        style={{ top: 30 }}
        visible={modalVisible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        {charged ? (
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          />
        ) : (
          <div className="container">
            <div className="order_card">
              <div className="container-fliud">
                <div className="wrapper row">
                  <div className="preview col-md-6">
                    <div className="preview-pic tab-content">
                      <div className="tab-pane active" id="pic-1">
                        <img src={image} />
                      </div>
                    </div>
                  </div>
                  <div className="details col-md-6">
                    <h3 className="product-title">{name}</h3>
                    <div className="rating">
                      <div className="stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <span className="review-no">41 reviews</span>
                    </div>
                    <p className="product-description">
                      You don't need to log in. Just checkout and use M-pesa
                      message for payment verification.
                    </p>
                    <h4 className="price">
                      price: <span>Ksh. {getPrice()}</span>
                    </h4>
                    <p className="vote">
                      <strong>91%</strong> of buyers enjoyed this product!{" "}
                      <strong>(87 votes)</strong>
                    </p>
                    <h5 className="sizes">
                      Quantity:
                      <span
                        className="size"
                        data-toggle="tooltip"
                        title="small"
                      >
                        <input
                          className="form-control"
                          type="number"
                          name="size"
                          onChange={handlePriceChange}
                        />
                      </span>
                    </h5>
                    <h5 className={phoneClass}>
                      Phone Number:
                      <span
                        className="size"
                        data-toggle="tooltip"
                        title="small"
                      >
                        <input
                          className="form-control"
                          type="number"
                          name="phone"
                          onChange={handlePriceChange}
                        />
                      </span>
                    </h5>
                    <div className="action">
                      {phoneClass == "phone_hidden" ? (
                        <button
                          className="add-to-cart btn btn-default"
                          type="button"
                          onClick={handlePhone}
                        >
                          Place Order
                        </button>
                      ) : (
                        <button
                          className="add-to-cart btn btn-default"
                          type="button"
                          onClick={handleCheckout}
                        >
                          Complete Order
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Order;
