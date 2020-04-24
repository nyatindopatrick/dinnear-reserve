import React, { useState } from "react";
import { storeItems } from "./productList";
import Modal from "./Order";

const Products = () => {
  const [modalVisible, setVisible] = useState(false);
  const [activeItem, setActiveItem] = useState({});
  return (
    <div>
      <div class="row mx-2 my-5" id="ads">
        {storeItems.map(product => {
          const { name, _id, price, image } = product;
          return (
            <div class="col-md-4" key={_id}>
              <div class="card rounded">
                <div class="card-image">
                  <span class="card-notify-badge">{name}</span>
                  <span class="card-notify-year">Fresh</span>
                  <img class="img-fluid" src={image} alt="Alternate Text" />
                </div>
                <div class="card-image-overlay m-auto">
                  <span class="card-detail-badge">Ksh. {price}</span>
                </div>
                <div class="card-body text-center">
                  <div class="ad-title m-auto">
                    <h5>{name}</h5>
                  </div>
                  <a
                    class="ad-btn"
                    href="#"
                    onClick={() => {
                      setActiveItem(product);
                      setVisible(true);
                    }}
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <Modal
          modalVisible={modalVisible}
          setVisible={setVisible}
          product={activeItem}
        />
      </div>
    </div>
  );
};

export default Products;
