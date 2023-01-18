import React from "react";

function Buy() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto">
            <div className="card">
              <form action="">
                <div className="form-group">
                  <label htmlFor="">Your Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Your Username</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Your Mobile</label>
                  <input type="text" className="form-control" />
                </div>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Course</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="form-group">
                  <label htmlFor="">Course Price</label>
                  <input type="text" className="form-control" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
