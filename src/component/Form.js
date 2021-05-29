import React, { Component } from "react";

export default class Form extends Component {
  state = {
    myString1: "",
    myString2: "",
    myString3: "",
    myString4: "",
    myString5: "",
    myString6: "",
    myString7: "",
    myString8: "",
    myString9: "",
    myName: "",
    myVehiclNumber: "",
    myReason: "",
    myAlong: "",
    myPlace: "",
    myPhoneNumber: "",
    myTypeOfVehicle: "",
    myAddress: "",
    mydate: "",
  };

  onChangeHandle = (event) => {
    this.setState({
      myString1: event.target.value,
    });
  };
  Address = (event) => {
    this.setState({
      myString9: event.target.value,
    });
  };

  vehicleNumber = (event) => {
    this.setState({
      myString2: event.target.value,
    });
  };
  typeOfVehicle = (event) => {
    this.setState({
      myString3: event.target.value,
    });
  };
  reason = (event) => {
    this.setState({
      myString4: event.target.value,
    });
  };
  Along = (event) => {
    this.setState({
      myString5: event.target.value,
    });
  };
  place = (event) => {
    this.setState({
      myString6: event.target.value,
    });
  };
  phoneNumber = (event) => {
    this.setState({
      myString7: event.target.value,
    });
  };
  time = (event) => {
    this.setState({
      myString8: event.target.value,
    });
  };
  onSubmit = () => {
    this.setState({
      myName: this.state.myString1,
      myVehiclNumber: this.state.myString2,
      myTypeOfVehicle: this.state.myString3,
      myReason: this.state.myString4,
      myAlong: this.state.myString5,
      myPlace: this.state.myString6,
      myPhoneNumber: this.state.myString7,
      mydate: this.state.myString8,
      myAddress: this.state.myString9,
    });
  };

  render() {
    return (
      <div className="form-split">
        <div className="side-bar">
          <div className ="fixed">
          <h1>സത്യവാങ്മൂലം</h1>
          <p>
            {this.state.myVehiclNumber} നമ്പര്‍  വാഹനത്തില്‍{" "}
            {this.state.myTypeOfVehicle} യാത്രചെയ്യുന്ന {this.state.myName} എന്ന
            ഞാന്‍ (വിലാസം){this.state.myAddress}(ആവശ്യം){this.state.myReason}
            പുറത്തുവന്നിരിക്കുകയാണ്.എന്നോടൊപ്പമുള്ളത് {this.state.myAlong}{" "}
            ആണ്.ഞാന്‍ {this.state.mydate}(തിയതി/സമയം) തിരിച്ചു പോകും.
          </p>
          <div className="h6s">
            <div className="left">
              <h6 className="h6-left">തിയതി:{this.state.mydate} </h6>
              <h6 className="h6-left">സ്ഥലം : {this.state.myPlace}</h6>
            </div>
            <div className="right">
              <h6 className="h6-right">പേര് :{this.state.myName}</h6>
              <h6 className="h6-right-phone">
                മൊബൈല്‍ നമ്പര്‍ :{this.state.myPhoneNumber}
              </h6>
            </div>
          </div>
          </div>
        </div>
        <form action="#" className="main-form">
          <div className="form-box">
          <div>
            <div className="test">
              <label htmlFor="">Name:</label>
            </div>

            <input type="text" name="" onChange={this.onChangeHandle} />
          </div>
          <div className="test">
            <div>
              <label htmlFor="">Address:</label>
            </div>

            <input type="text" onChange={this.Address} />
          </div>
          <div>
            <div className="test">
              <label htmlFor="">Vehicle Number:</label>
            </div>

            <input type="text" onChange={this.vehicleNumber} />
          </div>
          <div className="test">
            <div>
              <label htmlFor="">Type of vehicle:</label>
            </div>

            <input type="text" onChange={this.typeOfVehicle} />
          </div>
          <div className="test">
            <div>
              <label htmlFor="">Reason for going:</label>
            </div>

            <input type="text" onChange={this.reason} />
          </div>
          <div>
            <div className="test">
              <div>
                <label htmlFor="">along with:</label>
              </div>
            </div>

            <input type="text" onChange={this.Along} />
          </div>
          <div className="test">
            <div>
              <label htmlFor="">Place:</label>
            </div>

            <input type="text" onChange={this.place} />
          </div>
          <div className="test">
            <div>
              <label htmlFor="">Phone Number:</label>
            </div>

            <input type="text" onChange={this.phoneNumber} />
          </div>
          <div className="test">
            <div>
              <label htmlFor="">Time/Date:</label>
            </div>

            <input type="text" onChange={this.time} />
          </div>

          <div>
            <button onClick={this.onSubmit} type="button" className ="btn">
              Submit
            </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
