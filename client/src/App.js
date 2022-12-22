import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    usn: "",
    branch: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.usn &&
      formData.phone &&
      formData.branch &&
      formData.usn.length === 10 &&
      (formData.phone.length === 10 || formData.phone.length === 13) &&
      isValidEmail(formData.email)
    ) {
      const user = {
        name: formData.name.toString().toLowerCase(),
        email: formData.email.toString().toLowerCase(),
        phone: formData.phone,
        usn: formData.usn.toString().toLowerCase(),
        branch: formData.branch.toString().toLowerCase(),
      };
      axios.post("/signup", user).then((response) => {
        if (response.status === 200) {
        }
      });
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div
          className="row align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-md-6 card shadow p-2 mb-5 bg-body rounded">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your name"
                      name="name"
                      required
                      id="name"
                      // value={formData.name}
                      // onChange={handleOnChange}
                    />
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                  </div>{" "}
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Enter your email"
                      name="email"
                      required
                      id="email"
                      // value={formData.name}
                      // onChange={handleOnChange}
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                  </div>{" "}
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control mb-3"
                      placeholder="Enter your phone number"
                      name="phone"
                      required
                      id="phone"
                      // value={formData.name}
                      // onChange={handleOnChange}
                    />
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                  </div>{" "}
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your usn"
                      name="usn"
                      required
                      id="usn"
                      // value={formData.name}
                      // onChange={handleOnChange}
                    />
                    <label htmlFor="usn" className="form-label">
                      Usn
                    </label>
                  </div>{" "}
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your branch"
                      name="branch"
                      required
                      id="branch"
                      // value={formData.name}
                      // onChange={handleOnChange}
                    />
                    <label htmlFor="branch" className="form-label">
                      Branch
                    </label>
                  </div>{" "}
                </div>
              </div>
              <button className="btn btn-dark w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
