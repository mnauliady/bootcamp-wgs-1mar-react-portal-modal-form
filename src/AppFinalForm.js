import { Form, Field } from "react-final-form";

// fungsi onSubmit
const onSubmit = (values) => {
  // menampilkan alert berisi data dari form
  window.alert(JSON.stringify(values, 0, 2));
};

// component App
const App = () => (
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
            <div className="col-sm-2">
              <label>First Name</label>
            </div>
            <div className="col-sm-6">
              <Field className="form-control" name="firstName" component="input" type="text" placeholder="First Name" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2">
              <label>Last Name</label>
            </div>
            <div className="col-sm-6">
              <Field className="form-control" name="lastName" component="input" type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2">
              <label>Employed</label>
            </div>
            <div className="col-sm-6">
              <Field className="form-check-input" name="employed" component="input" type="checkbox" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2">
              <label>Education</label>
            </div>
            <div className="col-sm-6">
              <Field className="form-select" name="education" component="select">
                <option></option>
                <option value="Master">Master</option>
                <option value="Bachelor">Bachelor</option>
                <option value="High School">High School</option>
              </Field>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2">
              <label>Expertise</label>
            </div>
            <div className="col-sm-6">
              <label>
                <Field name="expertise" className="form-check-input" component="input" type="checkbox" value="HTML" />{" "}
                HTML
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-6">
              <label>
                <Field name="expertise" className="form-check-input" component="input" type="checkbox" value="CSS" />{" "}
                CSS
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-6">
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
            <div className="col-sm-2"></div>
            <div className="col-sm-6">
              <label>
                <Field name="expertise" className="form-check-input" component="input" type="checkbox" value="NodeJS" />{" "}
                NodeJS
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-6">
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
            <div className="col-sm-2">
              <label>Preferred Technology</label>
            </div>
            <div className="col-sm-6">
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
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
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
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
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
            <div className="col-sm-2">
              <label>Notes</label>
            </div>
            <div className="col-sm-6">
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
            <button type="button" className="btn btn-danger" onClick={form.reset} disabled={submitting || pristine}>
              Reset
            </button>
          </div>

          <div className="card col-8" style={{ marginTop: "10px" }}>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </div>
        </form>
      )}
    />
  </div>
);

export default App;
