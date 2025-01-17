import React from "react";

function PlaseHolderCards() {
  return (
    <div className=" d-flex flex-wrap gap-3 justify-content-between">
      {Array(9)
        .fill(0)
        .map((_, index) => {
          return (
            <div key={index} className="card" style={{ width: "350px" }} aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  className="btn btn-primary disabled placeholder col-6"
                  aria-disabled="true"
                ></a>

                <a
                  className="btn btn-danger disabled placeholder col-6"
                  aria-disabled="true"
                ></a>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default PlaseHolderCards;
