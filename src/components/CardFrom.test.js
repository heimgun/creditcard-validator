import { getByTestId } from "@testing-library/dom";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import validateInfo from "./../validateInfo";
import CardForm from "./CardForm";

const valid_values = {
    cardName: "Per Ove",
    cardNumber: "4023402340234023",
    cardExpiration: "12/2021",
    cardSecurityCode: "151",
  };
  
  const null_values = {
    cardName: null,
    cardNumber: null,
    cardType: null,
    cardExpiration: null,
    cardSecurityCode: null,
    cardPostalCode: null,
  };

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with button", () => {
    act(() => {
      render(<CardForm />, container);
      
    });
    expect(getByTestId(document.documentElement, 'validateButton')
    ,).toBeInTheDocument();
});

it("test null card", () => {
    act(() => {
        render(<CardForm />, container);
      });
      expect(validateInfo(null_values)).toStrictEqual({
        message: "Cardholder name is not complete",
        show: true,
        variant: "danger",
        ccvv: false,
        cexp: false,
        cname: false,
        cnumber: false,
      });
  });

  it("test valid card", () =>{
    act(() => {
        render(<CardForm />, container);
    });
    expect(validateInfo(valid_values)).toStrictEqual({
        message: "Credit Card is valid",
        show: true,
        variant: "success",
        ccvv: true, 
        cexp: true, 
        cname: true,
        cnumber: true,      
    });

  });


