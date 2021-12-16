import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line no-unused-vars
export const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errMassage, setErrMassage] = useState({
    errMassageEmail: null,
    errMassagePassword: null,
    inputEmail: "none",
    inputPassword: "none",
    inputType: "password",
  });

  // eslint-disable-next-line no-unused-vars
  const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setData({
        ...data,
        email: e.target.value,
      });
      !regex.test(e.target.value)
        ? setErrMassage({
            ...errMassage,
            errMassageEmail: "email is not valid",
            inputEmail: "red",
          })
        : setErrMassage({
            ...errMassage,
            errMassageEmail: null,
            inputEmail: "green",
          });
    }

    if (e.target.name === "password") {
      setData({
        ...data,
        password: e.target.value,
      });

      e.target.value.length < 9
        ? setErrMassage({
            ...errMassage,
            errMassagePassword: "password is not valid",
            inputPassword: "red",
          })
        : setErrMassage({
            ...errMassage,
            errMassagePassword: null,
            inputPassword: "green",
          });
    }
  };

  const handleClick = () => {
    if (!regex.test(data.email)) {
      setErrMassage({
        ...errMassage,
        errMassageEmail: "email is not valid",
        inputEmail: "red",
      });
    } else if (data.password.length < 9) {
      setErrMassage({
        ...errMassage,
        errMassagePassword: "password is not valid",
        inputPassword: "red",
      });
    } else {
      console.log(data);
    }
  };

  const handlePassword = () => {
    setErrMassage({
      inputType: "text",
    });
  };

  return (
    <form className="w-50 m-auto">
      <div className="form-group my-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          style={{ border: `1px solid ${errMassage.inputEmail}` }}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
          name="email"
        />
        <small className="text-danger">{errMassage.errMassageEmail}</small>
      </div>
      <div className="form-group my-3">
        <label htmlFor="exampleInputPassword1">Password</label>

        <input
          type={errMassage.inputType}
          className="form-control"
          style={{ border: `1px solid ${errMassage.inputPassword}` }}
          id="exampleInputPassword1"
          value={data.password}
          onChange={handleChange}
          name="password"
        />
        <div
          style={{
            marginTop: "-35px",
            marginLeft: "400px",
            marginBottom: "35px",
          }}
          onClick={handlePassword}
        >
          <FontAwesomeIcon icon={faLock} />
        </div>
        <small className="text-danger">{errMassage.errMassagePassword}</small>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};
