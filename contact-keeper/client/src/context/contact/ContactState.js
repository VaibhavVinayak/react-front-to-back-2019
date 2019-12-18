import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_ALERT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "professional",
        date: "2019-12-17T08:58:55.111Z",
        _id: "5df89998f556b96fbfa38f32",
        name: "Oliver Green",
        email: "green.arrow@apptest.com",
        phone: "111-111-111",
        user: "5df7e5366926652ef0ce3068",
        __v: 0
      },
      {
        type: "personal",
        date: "2019-12-17T08:58:55.111Z",
        _id: "5df899d4f556b96fbfa38f34",
        name: "Kara Danvers",
        email: "the.superigrl@apptest.com",
        phone: "111-223-567",
        user: "5df7e5366926652ef0ce3068",
        __v: 0
      },
      {
        type: "professional",
        date: "2019-12-17T08:58:55.111Z",
        _id: "5df89a01f556b96fbfa38f35",
        name: "Bruce Wayne",
        email: "dark.knight@apptest.com",
        phone: "745-998-856",
        user: "5df7e5366926652ef0ce3068",
        __v: 0
      }
    ]
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // delete contact
  // set current contact
  // clear current contact
  // update contact
  // filter contacts
  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
