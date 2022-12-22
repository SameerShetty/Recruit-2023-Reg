import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./component/Loader";
import Preloader from "./component/Preloader";
function App() {
  const [isrender, setrender] = useState(true);
  const [isvalid, setvalid] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    usn: "",
    branch: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setrender(false);
    }, 500);
  }, []);

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
      setvalid(false);
      setLoading(true);

      const user = {
        name: formData.name.toString().toLowerCase(),
        email: formData.email.toString().toLowerCase(),
        phone: formData.phone,
        usn: formData.usn.toString().toLowerCase(),
        branch: formData.branch.toString().toLowerCase(),
      };
      axios
        .post("/signup", user)
        .then((response) => {
          if (response.status === 200) {
            setLoading(false);
            toast.success(response.data.message);
            setformData({
              name: "",
              email: "",
              phone: "",
              usn: "",
              branch: "",
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data.message);
        });
    } else {
      toast.warning("Please fill in all the details properly !!!");
      setvalid(true);
      setLoading(false);
    }
  };
  return (
    <>
      {isrender && <Preloader />}

      <div className="container-fluid">
        <div
          className="row align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          {/* <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1592513814643-64bcbcd61076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="landing-img"
              style={{ width: "100%", objectFit: "cover", height: "100vh" }}
            />
          </div> */}
          <div className="col-md-6 card shadow p-3 mb-5 bg-body rounded">
            <form className={isvalid ? "was-validated" : null}>
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
                      value={formData.name}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="name" className="form-label">
                      NAME
                    </label>
                    <div class="invalid-feedback"> Please provide a name</div>
                  </div>{" "}
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Enter your email"
                      name="email"
                      required
                      id="email"
                      value={formData.email}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="email" className="form-label">
                      EMAIL
                    </label>
                    <div class="invalid-feedback">
                      {" "}
                      Please provide a valid email
                    </div>
                  </div>{" "}
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control mb-3"
                      placeholder="Enter your phone number"
                      name="phone"
                      required
                      id="phone"
                      value={formData.phone}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="phone" className="form-label">
                      PHONE
                    </label>
                    <div class="invalid-feedback">
                      {" "}
                      Please provide a phone no.
                    </div>
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
                      value={formData.usn}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="usn" className="form-label">
                      USN
                    </label>
                    <div class="invalid-feedback"> Please provide your usn</div>
                  </div>{" "}
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your branch"
                      name="branch"
                      required
                      id="branch"
                      value={formData.branch}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="branch" className="form-label">
                      BRANCH
                    </label>
                    <div class="invalid-feedback">
                      {" "}
                      Please provide your branch
                    </div>
                  </div>{" "}
                </div>
              </div>
              <button
                className="btn btn-dark w-100"
                onClick={handleClick}
                disabled={isLoading}
              >
                {" "}
                {isLoading ? <Loader /> : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
