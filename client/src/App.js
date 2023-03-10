import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./component/Loader";
import ResultTable from "./component/ResultTable";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { RiEarthLine } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  // const [fdownload, setfdownload] = useState(false);
  const [show, setShow] = useState(false);
  // const [slotUsn, SetSlotUsn] = useState("");
  // const [slot, setSlot] = useState({
  //   name: "",
  //   usn: "",
  //   time: "",
  //   day: "",
  // });
  const [isLoading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
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
      formData.password &&
      isValidEmail(formData.email)
    ) {
      setLoading(true);

      const user = {
        name: formData.name.toString().toLowerCase(),
        email: formData.email.toString().toLowerCase(),
        password: formData.password,
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
              password: "",
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data.message);
        });
    } else {
      toast.warning("Please fill in all the details properly !!!");
      setLoading(false);
    }
  };
  // const handleClickGetSlots = (e) => {
  //   e.preventDefault();

  //   if (slotUsn.length === 10) {
  //     setLoading(true);

  //     const user = {
  //       usn: slotUsn.toString().toLowerCase(),
  //     };
  //     console.log(user);
  //     axios
  //       .post("/api/slot", user)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           setLoading(false);

  //           console.log(response.data);
  //           setSlot({
  //             name: response.data.name,
  //             usn: response.data.usn,
  //             time: response.data.time,
  //             day: response.data.day,
  //           });

  //           setShow(true);
  //         }
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         toast.error(err.response.data.message);
  //       });
  //   } else {
  //     toast.warning("Please fill in all the details properly !!!");
  //     setLoading(false);
  //   }
  // };
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center flex-column"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <h2
          className="text-center"
          style={{
            fontWeight: "700",
            fontSize: "3rem",
            color: "#c7eeff",
            textShadow:
              " 2px 7px 5px rgba(0, 0, 0, 0.3),0px -4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          CLUB OF ROBOTICS
        </h2>

        {/* <div className="row d-flex align-items-center justify-content-center mx-1">
          <div
            className="col-md-10 card shadow  bg-body rounded "
            style={{ padding: "1rem", margin: "1rem" }}
          >
            <div
              className="d-flex flex-column flex-md-row align-items-center justify-content-around"
              style={{ width: "100%" }}
            >
              <div className="hero-img">
                <a
                  href="http://corsit.sit.ac.in/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <LazyLoadImage
                    alt="CORSIT-logo"
                    effect="blur"
                    style={{
                      width: "15%",
                      aspectRatio: "1",
                      objectFit: "cover",
                    }}
                    src="../imgs/corsit.png"
                  />
                </a>

                {/* <LazyLoadImage
                  alt="Landing-img"
                  effect="blur"
                  style={{ width: "100%", objectFit: "cover" }}
                  src="../imgs/landing.svg"
                /> */}
        {/* <div className="w-100 d-flex align-items-center justify-content-between mt-3 mx-auto flex-nowrap px-2">
                  <div className="d-flex align-items-center justify-content-start nowrap">
                    <a
                      href="https://instagram.com/corsit.sit?igshid=OGQ2MjdiOTE="
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <FaInstagram
                        style={{
                          fontSize: "2rem",
                          color: "#199FE3",
                          marginRight: ".5rem",
                        }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/corsit/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <FaLinkedin
                        style={{
                          fontSize: "2rem",
                          color: "#199FE3",
                          marginRight: ".5rem",
                        }}
                      />
                    </a>
                  </div> */}
        {/* <button
                    className="btn btn-dark "
                    onClick={(e) => e.preventDefault()}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={{
                      backgroundColor: "#2788F2",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    Results
                  </button>
                </div>  */}

        {/* <ul style={{ margin: " 1rem .5rem " }}> */}
        {/* <li>
                    {" "}
                    The recruitments are to be held on{" "}
                    <strong>24th Jan 2023.</strong>
                  </li>
                  <li>
                    {" "}
                    Venue: <strong>CORSIT LAB , IEM DEPT 1st floor.</strong>
                  </li>
                  <li>
                    {" "}
                    Timings : <strong>5:15 P.M. onwards</strong>{" "}
                  </li> */}
        {/* <li>
                    {" "}
                    The <strong>results</strong> will be posted{" "}
                    <strong>here</strong> and on <strong>insta handle.</strong>
                  </li> */}
        {/* </ul>
              </div> */}

        {/* <div>
                <h2 className="text-left p-1 m-1">
                 Register 
                </h2>
                <form onSubmit={handleClickGetSlots}>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter your usn"
                      name="usn"
                      pattern="[14][siSI]{2}[0-9]{2}[a-zA-Z]{2}[0-9]{3}"
                      title="e.g 1si23cs003,4si23cs003"
                      required
                      id="usn"
                      value={slotUsn}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="usn" className="form-label">
                      USN
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark w-50 my-2"
                    data-bs-toggle="modal2"
                    data-bs-target="#staticBackdrop2"
                    disabled={isLoading}
                    style={{
                      backgroundColor: "#2788F2",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    {" "}
                    {isLoading ? <Loader kolor="#fafafa" /> : "Get slot"}
                  </button>
                </form> */}
        <div
          className="col-md-6 card shadow  bg-body rounded col-11"
          style={{ padding: "1rem", margin: "1rem" }}
        >
          <form onSubmit={handleClick}>
            <h2 className="text-left p-1 m-1">Register Here</h2>
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
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                id="email"
                value={formData.email}
                onChange={handleOnChange}
              />
              <label htmlFor="email" className="form-label">
                EMAIL
              </label>
            </div>
            {/* <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control mb-3"
                      placeholder="Enter your phone number"
                      name="phone"
                      pattern="^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$"
                      title="e.g +919XXXXXXXX5,99XXXXXXX5,099XXXXXXX5"
                      required
                      id="phone"
                      value={formData.phone}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="phone" className="form-label">
                      PHONE
                    </label>
                  </div>{" "} */}
            <div className="form-floating">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Create your password"
                name="password"
                minLength={6}
                required
                id="password"
                value={formData.password}
                onChange={handleOnChange}
              />
              <label htmlFor="password" className="form-label">
                CREATE YOUR PASSWORD
              </label>
            </div>
            {/* <select
                    className="form-select form-select-lg mb-3 "
                    id="select-input"
                    value={formData.branch}
                    name="branch"
                    onChange={handleOnChange}
                    required
                    style={{
                      fontSize: "1.04rem",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: ".8rem",
                    }}
                  >
                    <option value="" selected>
                      {" "}
                      BRANCH
                    </option>
                    <option value="CSE">Computer Science</option>
                    <option value="ECE">Electronics & Communication</option>
                    <option value="ISE">Information Science</option>
                    <option value="EEE">Electrical & Electronics</option>
                    <option value="AIDS">
                      Artificial Inteligence & Data Science
                    </option>
                    <option value="ETE">Electronics & Telecommunicaton</option>
                    <option value="EIE">Electronics & Instrumentation</option>
                    <option value="IEM">
                      Industrial Engineering Management
                    </option>
                    <option value="Mec">Mechanical </option>
                    <option value="CIV">Civil </option>
                    <option value="BIO">Biotechnology</option>
                    <option value="CHE">Chemical</option>
                    <option value="AIML">
                      Artificial Intelligence & Machine Learning
                    </option>
                  </select> */}
            <button
              type="submit"
              className="btn btn-dark w-50 my-2"
              disabled={isLoading}
              style={{
                backgroundColor: "#2788F2",
                outline: "none",
                border: "none",
              }}
            >
              {" "}
              {isLoading ? <Loader kolor="#fafafa" /> : "Register"}
            </button>
          </form>
        </div>
      </div>
      {/* </div>
          </div>
        </div>
      </div> */}

      {/*
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <h2>Slot Details</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {<h3>{slot.name.toString().toUpperCase()}</h3>}
          {<h5>{slot.usn.toString().toUpperCase()}</h5>}
          {
            <h5>
              Timings : <strong>{slot.time.toString().toUpperCase()}</strong>{" "}
              <strong>{slot.day.toString().toUpperCase()}</strong>
            </h5>
          }
          {
            <h5>
              Venue : <strong>CORSIT LAB , IEM DEPT 1st floor.</strong>
            </h5>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <div
        className="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static2"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="staticBackdropLabel">
                Slot Details
              </h2>
            </div>
            <div className="modal-body">
              {" "}
              {<h2>{slot.name.toString().toUpperCase()}</h2>}
              {<h4>USN :{slot.usn.toString().toUpperCase()}</h4>}
              {
                <h5>
                  Timings :{" "}
                  <strong>{slot.time.toString().toUpperCase()}</strong>{" "}
                  <strong>{slot.day.toString().toUpperCase()}</strong>
                </h5>
              }
              {
                <p>
                  Venue : <strong>CORSIT LAB , IEM DEPT 1st floor.</strong>
                </p>
              }
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary w-25"
                data-bs-dismiss="modal2"
                style={{
                  outline: "none",
                  border: "none",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="staticBackdropLabel">
                Results
              </h2>
            </div>
            <div className="modal-body">
              <ResultTable stateprop={setfdownload} />
            </div>
            <div className="modal-footer">
              {fdownload ? (
                <ul>
                  <li>
                    <strong>Download</strong> the <strong>Resume format</strong>{" "}
                    provided here.
                  </li>
                  <li>
                    <strong>Fill and take print out</strong> of the same{" "}
                    <strong>before</strong> attending the
                    <strong> interview.</strong>
                  </li>
                  <li>
                    You will be <strong>assigned</strong> a{" "}
                    <strong>problem statement</strong> through{" "}
                    <strong>text message </strong>and <strong>email.</strong>
                  </li>
                </ul>
              ) : null}
              <div className="w-100 d-flex align-items-center justify-content-between flex-nowrap">
                {fdownload ? (
                  <a
                    className="btn btn-dark w-25 mx-2"
                    href="../ResumeFormate.pdf"
                    download={"ResumeFormate"}
                    style={{
                      backgroundColor: "#2788F2",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    Download
                  </a>
                ) : null}

                <button
                  type="button"
                  className="btn btn-secondary w-25"
                  data-bs-dismiss="modal"
                  style={{
                    outline: "none",
                    border: "none",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <ToastContainer />
    </>
  );
}

export default App;
