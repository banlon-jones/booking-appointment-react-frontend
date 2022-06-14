import React from 'react';

const CreateReservation = () => {
  console.log('hello');
  return (
    <div>
      <div className="container">
        <div className="mt-5">
          <div className="card-body text-center mt-5">
            <h1 className="card-title"> BOOK A RESORT </h1>
            <div className="card-body">
              <p>
                Best Price Guarantee! No reservation costs. Great rates. Get Instant Confirmation.
                24/7 Customer Service. We speak your language.
                Read Real Guest Reviews. Types: Hotels, Apartments, Villas, Hostels, Resorts, B&Bs.
              </p>
            </div>
          </div>
          <div className="card text-center shadow">
            <div className="card-body">
              <h2> Make a reservation </h2>
              <div>
                <form action="#">
                  <div className="row">
                    <div className="col-md-4">
                      <p> Select resort </p>
                      <select name="hi" id="sdf" className="form-control-lg form-control">
                        <option value="0"> Nobe </option>
                        <option value="0"> Nobe </option>
                        <option value="0"> Nobe </option>
                        <option value="0"> Nobe </option>
                        <option value="0"> Nobe </option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <p> From </p>
                      <input type="date" id="from" className="form-control" />
                    </div>
                    <div className="col-md-4">
                      <p> to </p>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateReservation;
