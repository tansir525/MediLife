import {
  FcAdvance,
  FcBusinessman,
  FcCustomerSupport,
  FcSurvey,
} from "react-icons/fc";

import React from "react";

const Service = () => {
  return (
    <div className="row">
      <div class="card-group  p-5 m-5">
        <div className="col-sm-4">
          <div class="card ">
            <div class="card-body">
              <h1>
                <FcBusinessman />
              </h1>

              <h3 class="card-title">Doctors Timetable</h3>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <h5>
                View Timetable <FcAdvance />{" "}
              </h5>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div class="card ">
            <div class="card-body">
              <h1>
                <FcCustomerSupport />
              </h1>

              <h3 class="card-title">Emergency Call</h3>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <button className="btn btn-danger"> +601121861459</button>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div class="card ">
            <div class="card-body">
              <h1>
                <FcSurvey />
              </h1>

              <h3 class="card-title">Make An Appointment</h3>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <h5>
                Get Started <FcAdvance />{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
