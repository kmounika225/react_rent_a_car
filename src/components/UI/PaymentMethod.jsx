import React from "react";
import "../../styles/payment-method.css";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PaymentMethod = () => {
  const navigate = useNavigate();
  const [status_opt, setStatus] = React.useState(0);
  const [cardname, setCardname] = React.useState("");
  const [cardnum, setCardnum] = React.useState("");
  const [paypal, setpaypal] = React.useState("");
  const [butstatus, setbutStatus] = React.useState(0);
  const [cvv, setcvv] = React.useState(0);
  const [exp, setexp] = React.useState("");
  const [cardflag, setcardflag] = React.useState(false);

  const [useramount, setuseramount] = React.useState(0.0);

  const [fname_user, setfname_user] = React.useState("");
  const [lname_user, setlname_user] = React.useState("");
  const [email_user, setemail_user] = React.useState("");
  const [phone_user, setphone_user] = React.useState("");

  const [fromplace, setfromplace] = React.useState("");
  const [toplace, settoplace] = React.useState("");
  const [fromdate, setfromdate] = React.useState("");
  const [todate, settodate] = React.useState("");

  const [fromtime, setfromtime] = React.useState("");
  const [totime, settotime] = React.useState("");

  const [paymentmode, setpaymentmode] = React.useState("card");
  const [selectedcarname, setselectedcarname] = React.useState("");
  const [selectedcarid, setselectedcarid] = React.useState("");
  const [selectedcarprice, setselectedcarprice] = React.useState(0.0);
  const [cardType, setCardType] = React.useState("");

  const radioHandler = (status) => {
    setStatus(status);
  };

  const PaymentStart = (status) => {
    var pay = "card";

    if (status_opt === 1) {
      if (
        cardname === "" ||
        cardnum === "" ||
        exp === "" ||
        cvv === 0 ||
        cardname.length == 0
      ) {
        alert("Error in Card details");
      } else {
        setpaymentmode("card");

        pay = "card";

        setfname_user(localStorage.getItem("fname"));

        setlname_user(localStorage.getItem("lname"));
        setphone_user(localStorage.getItem("phone"));
        setemail_user(localStorage.getItem("email"));

        setfromplace(localStorage.getItem("fromplace"));
        settoplace(localStorage.getItem("toplace"));
        setfromdate(localStorage.getItem("fromdate"));
        settodate(localStorage.getItem("todate"));
        setfromtime(localStorage.getItem("fromtime"));
        settotime(localStorage.getItem("totime"));

        setselectedcarid(localStorage.getItem("selectedcarid"));
        setselectedcarname(localStorage.getItem("selectedcarname"));
        setselectedcarprice(localStorage.getItem("selectedcarprice"));

        setuseramount(localStorage.getItem("useramount"));

        axios
          .post("https://63895fb0c5356b25a2ff0113.mockapi.io/carbookings", {
            username: localStorage.getItem("email"),
            phone: localStorage.getItem("phone"),
            fromplace: localStorage.getItem("fromplace"),
            toplace: localStorage.getItem("toplace"),
            fromdate: localStorage.getItem("fromdate"),
            todate: localStorage.getItem("todate"),
            fromtime: localStorage.getItem("fromtime"),
            totime: localStorage.getItem("totime"),
            selectedcarname: localStorage.getItem("selectedcarname"),
            selectedcarid: localStorage.getItem("selectedcarid"),
            selectedcarprice: localStorage.getItem("selectedcarprice"),
            totalpaid: localStorage.getItem("useramount"),
            paymentmode: pay,
            selectedcarimg: localStorage.getItem("selectedcarimg"),
          })
          .then((response) => {
            console.log(response);

            const resd = response.status;

            if (resd == 201) {
              alert("Payment Success");
              navigate(`/bookingPlaceholder`);
            } else {
              alert("Network error or API error");
            }
          })

          .catch((error) => {
            console.log(error);
          });
      }
    }

    if (status_opt === 2) {
      if (paypal === "" || paypal.length == 0) {
        alert("Error in Paypal details");
      } else {
        setpaymentmode("paypal");
        pay = "paypal";

        setfname_user(localStorage.getItem("fname"));

        setlname_user(localStorage.getItem("lname"));
        setphone_user(localStorage.getItem("phone"));
        setemail_user(localStorage.getItem("email"));

        setfromplace(localStorage.getItem("fromplace"));
        settoplace(localStorage.getItem("toplace"));
        setfromdate(localStorage.getItem("fromdate"));
        settodate(localStorage.getItem("todate"));
        setfromtime(localStorage.getItem("fromtime"));
        settotime(localStorage.getItem("totime"));

        setselectedcarid(localStorage.getItem("selectedcarid"));
        setselectedcarname(localStorage.getItem("selectedcarname"));
        setselectedcarprice(localStorage.getItem("selectedcarprice"));

        setuseramount(localStorage.getItem("useramount"));

        axios
          .post("https://63895fb0c5356b25a2ff0113.mockapi.io/carbookings", {
            username: localStorage.getItem("email"),
            phone: localStorage.getItem("phone"),
            fromplace: localStorage.getItem("fromplace"),
            toplace: localStorage.getItem("toplace"),
            fromdate: localStorage.getItem("fromdate"),
            todate: localStorage.getItem("todate"),
            fromtime: localStorage.getItem("fromtime"),
            totime: localStorage.getItem("totime"),
            selectedcarname: localStorage.getItem("selectedcarname"),
            selectedcarid: localStorage.getItem("selectedcarid"),
            selectedcarprice: localStorage.getItem("selectedcarprice"),
            totalpaid: localStorage.getItem("useramount"),
            paymentmode: pay,
            selectedcarimg: localStorage.getItem("selectedcarimg"),
          })
          .then((response) => {
            console.log(response);

            const resd = response.status;

            if (resd == 201) {
              alert("Payment Success");
              navigate(`/bookingPlaceholder`);
            } else {
              alert("Network error or API error");
            }
          })

          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const checkCardType = (cardNumber) => {
    if (cardNumber.length > 4) {
      // visa
      var re = new RegExp("^4");
      if (cardNumber.match(re) != null) return "Visa";

      // Mastercard
      // Updated for Mastercard 2017 BINs expansion
      if (
        /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
          cardNumber
        )
      )
        return "Mastercard";

      // AMEX
      re = new RegExp("^3[47]");
      if (cardNumber.match(re) != null) return "AMEX";

      // Discover
      re = new RegExp(
        "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
      );
      if (cardNumber.match(re) != null) return "Discover";

      // Diners
      re = new RegExp("^36");
      if (cardNumber.match(re) != null) return "Diners";

      // Diners - Carte Blanche
      re = new RegExp("^30[0-5]");
      if (cardNumber.match(re) != null) return "Diners - Carte Blanche";

      // JCB
      re = new RegExp("^35(2[89]|[3-8][0-9])");
      if (cardNumber.match(re) != null) return "JCB";

      // Visa Electron
      re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
      if (cardNumber.match(re) != null) return "Visa Electron";

      return "";
    }

  };

  const handleCardnum = (event) => {
	setCardType('');
	if(event.target.value.length>4){
		setCardType(checkCardType(event.target.value));
	}
    console.log("prpmp" + event.target.value);

    const cardnum = event.target.value;
    if (cardnum.length) {
      if (!isNaN(cardnum)) {
        if (cardnum.length == 16) {
          setCardnum(cardnum);
        }
      }
    }

    if (cardnum.length > 1) {
      if (isNaN(cardnum)) {
        alert("Card number should be in digits.");
      }
    }
  };

  const handleCardname = (event) => {
    console.log("prpmp" + event.target.value);

    const cardnam = event.target.value;
    if (cardnam.length) {
      if (isNaN(cardnam)) {
        setCardname(cardnam);
      }
    }

    if (cardnam.length > 1) {
      if (!isNaN(cardnam)) {
        alert("Card name should be in characters.");
      }
    }
  };

  const handleCardcvv = (event) => {
    console.log("prpmp" + event.target.value);

    const cardcvv = event.target.value;
    if (cardcvv.length) {
      if (!isNaN(cardcvv)) {
        if (cardcvv.length == 3) {
          setcvv(cardcvv);
        }
      }
    } else {
      alert("Enter valid cvv");
    }
    if (cardcvv.length > 0) {
      if (isNaN(cardcvv)) {
        alert("CVV should be in digits.");
      }
    }
  };

  const handlePaypal = (event) => {
    console.log("prpmp" + event.target.value);

    const paypal = event.target.value;

    if (paypal.length > 2 && paypal.trim().length > 2) {
      setpaypal(paypal);
    }
  };

  const handleCardexp = (event) => {
    console.log("prpmp" + event.target.value);

    const cardexp = event.target.value;
    if (cardexp.length == 5) {
      const chcekslash = cardexp.substring(2, 3);

      if (chcekslash === "/") {
        if (parseInt(cardexp.substring(3)) < 22) {
          alert("year should be greater than 2022");
        } else {
          setexp(chcekslash);
        }
      } else {
        alert("Please input mm/yy format (including '/'character) ");
      }
    }
  };

  const drawYesContent = () => {
    return (
      <div>
        <div className="booking-info mt-5">
          <h5>
            {" "}
            <strong>Enter Card Details </strong>
          </h5>
          <br />

          <FormGroup className="booking_pay__form d-inline-block me-4 mb-4">
			<span>{cardType}</span>
            <input
              type="text"
              placeholder="Card Number"
              id="card"
              maxlength="16"
              onChange={handleCardnum}
            />
          </FormGroup>

          <FormGroup className="booking_pay__form d-inline-block me-4 mb-4">
            <input
              type="text"
              placeholder="Name on the Card"
              id="namecard"
              maxlength="20"
              onChange={handleCardname}
            />
          </FormGroup>

          <FormGroup className="booking__form d-inline-block me-4 mb-4">
            <input
              type="text"
              placeholder="CVV"
              id="cvv"
              maxlength="3"
              onChange={handleCardcvv}
            />
          </FormGroup>
          <FormGroup className="booking__form d-inline-block me-8 mb-2">
            <input
              type="text"
              placeholder="Expiry date in mm/yy"
              id="exp"
              maxlength="5"
              onChange={handleCardexp}
            />
          </FormGroup>
        </div>
      </div>
    );
  };

  const paynow = () => {
    return (
      <div className="payment text-end mt-5">
        <button onClick={(e) => PaymentStart(1)}>Pay Now</button>
      </div>
    );
  };

  const drawNoContent = () => {
    return (
      <div>
        <div className="booking-info mt-5">
          <h5>
            {" "}
            <strong>PayPal Account Details </strong>
          </h5>
          <br />

          <FormGroup className="booking_pay__form d-inline-block me-4 mb-4">
            <input
              type="text"
              placeholder="Paypal Username"
              onChange={handlePaypal}
            />
          </FormGroup>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="release"
            checked={status_opt === 1}
            onClick={(e) => radioHandler(1)}
          />{" "}
          Credit/Debit Card
        </label>

        <img
          src="https://raw.githubusercontent.com/scarlethawk85/rentcarimg/main/master-card.jpg"
          alt=""
        />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="release"
            checked={status_opt === 2}
            onClick={(e) => radioHandler(2)}
          />{" "}
          Paypal
        </label>

        <img
          src="https://raw.githubusercontent.com/scarlethawk85/rentcarimg/main/paypal.jpg"
          alt=""
        />
      </div>

      {status_opt === 1 && drawYesContent()}
      {status_opt === 2 && drawNoContent()}
      {status_opt !== 0 && paynow()}
    </div>
  );
};

export default PaymentMethod;
