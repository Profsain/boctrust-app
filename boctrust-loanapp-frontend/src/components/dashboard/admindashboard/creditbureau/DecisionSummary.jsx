import "../../dashboardcomponents/transferdashboard/Transfer.css";
import "./Credit.css";

const DecisionSummary = () => {
  return (
    <div className="TransContainer RBox">
      <div className=" d-flex justify-content-center p-5">
        <h4>Decision Summary</h4>
      </div>
      <div className="row">
        <div className="mx-5">
          <p>
            50% of Customer&apos;s Net pay is{" "}
            <span className="figure">N85,000</span>
          </p>
          <p>
            20% of Gross pay is <span className="figure">N35,000</span>
          </p>
          <p>
            If Loan is approved, customer&apos;s Take Home is{" "}
            <span className="figure">N45,000</span> which is{" "}
            <span className="figure">25%</span> of his/her Gross pay.
          </p>
          <div id="validate">
            <p>
              Customer has good credit History{" "}
              <span className="validBtn">Yes</span>
            </p>
            <p>
              Customer Name/Number is on the Soft suite document{" "}
              <span className="validBtn">Yes</span>
            </p>

            <div className="row">
              <div className="col-sm-12 col-md-6">
                <p>
                  Customer Next of Kin is okay{" "}
                  <span className="validBtn">Yes</span>
                </p>
              </div>
              <div className="col-sm-12 col-md-3">
                <p>
                  Credit Bureau Check <span className="validBtn">Done</span>
                </p>
              </div>
              <div className="col-sm-12 col-md-3">
                <p>
                  BVN Check <span className="validBtn">Done</span>
                </p>
              </div>
            </div>
          </div>

          <div id="comment">
            <div className="row my-3">
              <label htmlFor="netPay" className="col-form-label col-3 mt-2">
                Disbursement Instruction
              </label>
              <div className="col-6">
                <textarea className="form-control" id="netPay"></textarea>
              </div>
            </div>
            <div className="row my-3">
              <label htmlFor="netPay" className="col-form-label col-3 mt-2">
                Credit officer Review
              </label>
              <div className="col-6">
                <textarea className="form-control" id="netPay"></textarea>
              </div>
            </div>
          </div>

          <div className=" row mx-5 align-items-center">
            <div className="validBtnBox">
              <button type="button" className="btn btn-primary mt-3">
                Approved
              </button>
              <button type="button" className="btn btn-danger mt-3">
                Declined
              </button>
            </div>
          </div>
          <div className="row">
            <p className="cooApprove">
              Approval by: COO (<span className="figure">Pending</span>)
            </p>
          </div>
        </div>
      </div>

      {/* view data source */}
      <div className="justify-content-center p-5">
        <h4>View Data Source</h4>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-4">
            <p>
              BVN Search <span className="validBtn">12/08/2023</span>
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <button className="viewBtn">View Data</button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-12 col-md-4">
            <p>
              Credit DB Search <span className="validBtn">12/08/2023</span>
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <button className="viewBtn">View Data</button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-12 col-md-4">
            <p>
              Deduct Search <span className="validBtn">12/08/2023</span>
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <button className="viewBtn">View Data</button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-12 col-md-4">
            <p>
              Credit Bureau Search <span className="validBtn">12/08/2023</span>
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <button className="viewBtn">View Data</button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-12 col-md-4">
            <p>
              Payslip Analysis <span className="validBtn">12/08/2023</span>
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <button className="viewBtn">View Data</button>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-12 col-md-4">
            <p>
              Decision Analysis <span className="validBtn">12/08/2023</span>
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <button className="viewBtn">View Data</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionSummary;
