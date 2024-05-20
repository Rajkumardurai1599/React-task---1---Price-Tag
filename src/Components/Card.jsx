import React from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./card.css";

const Card = ({ priceTag }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {priceTag.map((element, index) => {
            return (
              <>
                <div className="col-lg-4">
                  <div key={index}>
                    <div className="card pb-2 hover-zoom">
                      <div className="card-body pb-0  ">
                        <h6 className="card-title text-muted text-center">
                          {element.title}
                        </h6>
                        <h2 className="card-price text-center">
                          {element.price}
                        </h2>
                        <hr></hr>
                        <p>
                          <FaCheck /> {element.user}
                        </p>
                        <p>
                          <FaCheck /> {element.storage}
                        </p>
                        <p>
                          <FaCheck /> {element.project}
                        </p>
                        <p>
                          <FaCheck /> {element.community}
                        </p>

                        {element.iconproject ? (
                          <p>
                            <FaCheck /> {element.project1}
                          </p>
                        ) : (
                          <p className="text-muted">
                            <RxCross2 /> {element.project1}
                          </p>
                        )}
                        {element.iconsupport ? (
                          <p>
                            <FaCheck /> {element.support}
                          </p>
                        ) : (
                          <p className="text-muted">
                            <RxCross2 /> {element.support}
                          </p>
                        )}
                        {element.icondomain ? (
                          <p>
                            <FaCheck /> {element.domain}
                          </p>
                        ) : (
                          <p className="text-muted">
                            <RxCross2 /> {element.domain}
                          </p>
                        )}
                        {element.iconreports ? (
                          <p>
                            <FaCheck /> {element.reports}
                          </p>
                        ) : (
                          <p className="text-muted">
                            <RxCross2 /> {element.reports}
                          </p>
                        )}
                        <div className="card-footer ">
                          <button class="btn btn-primary" type="button">
                            BUTTON
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
