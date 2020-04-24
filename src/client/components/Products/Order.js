import React, { useState } from "react";
import { Modal } from "antd";

const Order = ({ modalVisible, setVisible, product }) => {
  const { name, _id, price, image } = product;
  const [quantity, setQuantity] = useState(1);
  const handlePriceChange = e => {
    const { value, name } = e.target;
    setQuantity({ [name]: value > 0 ? value : 1 });
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
        <div class="container">
          <div class="order_card">
            <div class="container-fliud">
              <div class="wrapper row">
                <div class="preview col-md-6">
                  <div class="preview-pic tab-content">
                    <div class="tab-pane active" id="pic-1">
                      <img src={image} />
                    </div>
                  </div>
                </div>
                <div class="details col-md-6">
                  <h3 class="product-title">{name}</h3>
                  <div class="rating">
                    <div class="stars">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>
                    <span class="review-no">41 reviews</span>
                  </div>
                  <p class="product-description">
                    You don't need to log in. Just checkout and use M-pesa
                    message for payment verification.
                  </p>
                  <h4 class="price">
                    price:{" "}
                    <span>
                      Ksh.{" "}
                      {(Number(quantity.size) > 0 ? Number(quantity.size) : 1) *
                        Number(price)}
                    </span>
                  </h4>
                  <p class="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>
                  <h5 class="sizes">
                    Quantity:
                    <span class="size" data-toggle="tooltip" title="small">
                      <input
                        className="form-control"
                        type="number"
                        name="size"
                        onChange={handlePriceChange}
                      />
                    </span>
                  </h5>
                  <div class="action">
                    <button class="add-to-cart btn btn-default" type="button">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Order;
