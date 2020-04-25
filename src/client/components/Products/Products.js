import React, { useState, useEffect } from "react";
import Modal from "./Order";
import axios from "axios";
import Loading from '../Loader/Loading'

const Products = props => {
  const [modalVisible, setVisible] = useState(false);
  const [activeItem, setActiveItem] = useState({});
  const [foods, setFoods] = useState(null);
  const hotel = props.match.params.id;
  useEffect(() => {
    axios.post(`/api/users/${hotel}/meals`).then(item => {
      return setFoods(item.data);
    });
  }, []);
  console.log(hotel)

  return (
    <div>
      {
        !foods? (
          <div className="load_center">
           <Loading/>
           </div>
        ):
      <div className="row mx-2 my-5" id="ads">
        {foods.meals.map(product => {
          const { name, _id, price, image } = product;
          return (
            <div className="col-md-4" key={_id}>
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">{name}</span>
                  <span className="card-notify-year">Fresh</span>
                  <img className="img-fluid" src={image} alt="Alternate Text" />
                </div>
                <div className="card-image-overlay m-auto">
                  <span className="card-detail-badge">Ksh. {price}</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5>{name}</h5>
                  </div>
                  <a
                    className="ad-btn"
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
      }
    </div>
  );
};

export default Products;
