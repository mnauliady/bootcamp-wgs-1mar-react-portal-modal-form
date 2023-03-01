import React from "react";
import ReactDom, { createPortal } from "react-dom";
import { Form, Field } from "react-final-form";

// css modal
const MODAL_STYLES = {
  position: "fixed",
  top: "10%",
  left: "35%",
  transition: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
  maxHeight: "500px",
  overflowY: "auto",
};

// css overlay
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

// fungsi onSubmit
const onSubmit = (values) => {
  // menampilkan alert berisi data dari form
  window.alert(JSON.stringify(values, 0, 2));
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    ReactDom,
    createPortal(
      <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <div className="container">
            <h2 className="text-center">Employee Form</h2>
            <hr />
            <Form
              onSubmit={onSubmit}
              // pristine mengecek apakah form tidak kosong (sehingga tombol submit active), bernilai true jika form masih kosong
              // values berisi cureent value dari
              render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-3">
                      <label>First Name</label>
                    </div>
                    <div className="col-sm-9">
                      <Field
                        className="form-control"
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <label>Last Name</label>
                    </div>
                    <div className="col-sm-9">
                      <Field
                        className="form-control"
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <label>Employed</label>
                    </div>
                    <div className="col-sm-9">
                      <Field className="form-check-input" name="employed" component="input" type="checkbox" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <label>Education</label>
                    </div>
                    <div className="col-sm-9">
                      <Field className="form-select" name="education" component="select">
                        <option></option>
                        <option value="Master">Master</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="High School">High School</option>
                      </Field>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <label>Expertise</label>
                    </div>
                    <div className="col-sm-9">
                      <label>
                        <Field
                          name="expertise"
                          className="form-check-input"
                          component="input"
                          type="checkbox"
                          value="HTML"
                        />{" "}
                        HTML
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                      <label>
                        <Field
                          name="expertise"
                          className="form-check-input"
                          component="input"
                          type="checkbox"
                          value="CSS"
                        />{" "}
                        CSS
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                      <label>
                        <Field
                          name="expertise"
                          className="form-check-input"
                          component="input"
                          type="checkbox"
                          value="Javascript"
                        />{" "}
                        Javascript
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                      <label>
                        <Field
                          name="expertise"
                          className="form-check-input"
                          component="input"
                          type="checkbox"
                          value="NodeJS"
                        />{" "}
                        NodeJS
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                      <label>
                        <Field
                          name="expertise"
                          className="form-check-input"
                          component="input"
                          type="checkbox"
                          value="ReactJS"
                        />{" "}
                        ReactJS
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <label>Preferred Technology</label>
                    </div>
                    <div className="col-sm-9">
                      <label>
                        <Field
                          className="form-check-input"
                          name="technology"
                          component="input"
                          type="radio"
                          value="Front End"
                        />{" "}
                        Front End
                      </label>
                      <div className="col-sm-3"></div>
                      <div className="col-sm-9">
                        <label>
                          <Field
                            className="form-check-input"
                            name="technology"
                            component="input"
                            type="radio"
                            value="Back End"
                          />{" "}
                          Back End
                        </label>
                      </div>
                      <div className="col-sm-3"></div>
                      <div className="col-sm-9">
                        <label>
                          <Field
                            className="form-check-input"
                            name="technology"
                            component="input"
                            type="radio"
                            value="Full Stack"
                          />{" "}
                          Full Stack
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <label>Notes</label>
                    </div>
                    <div className="col-sm-9">
                      <Field name="notes" className="form-control" component="textarea" placeholder="Notes" />
                    </div>
                  </div>
                  <div className="text-center" style={{ marginTop: "10px" }}>
                    {/* buttion submit */}
                    <button
                      style={{ marginRight: "10px" }}
                      type="submit"
                      className="btn btn-primary"
                      disabled={submitting || pristine}
                    >
                      Submit
                    </button>

                    {/* button reset */}
                    {/* akan menjalankan form.reset ketika diklik */}
                    <button
                      type="button"
                      style={{ marginRight: "10px" }}
                      className="btn btn-secondary"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </button>

                    {/* button close modal */}
                    <button type="button" className="btn btn-danger" onClick={onClose}>
                      Close
                    </button>
                  </div>

                  <div className="card col-12" style={{ marginTop: "10px" }}>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                  </div>
                </form>
              )}
            />
          </div>
          {children}
        </div>
      </>,
      document.getElementById("portal")
    )
  );
}
