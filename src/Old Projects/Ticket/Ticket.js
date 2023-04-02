import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
                Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                US: ["Los Angles", "San Diego", "Chicago"],
            },
            mainCountryCities: [],
            fName: '',
            lName: '',
            eMail: '',
            phoneNumber: ''
        }
    }

    fNameHandler(fname) {
        this.setState({
            fName: fname.target.value
        })
    }
    lNameHandler(lname) {
        this.setState({ lName: lname.target.value })
    }
    emailHandler(email) {
        this.setState({
            eMail: email.target.value
        })
    }
    phoneHandler(phone) {
        this.setState({
            phoneNumber: phone.target.value
        })
    }
    Handler(event) {
        this.setState({
            mainCountryCities: this.state.countriesData[event.target.value]
        })
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-6 box">
                    <input className="fnameInput"
                        placeholder="First Name"
                        onChange={(fname) => this.fNameHandler(fname)}
                    //type="text" //value={this.state.fName} 
                    />
                </div>
                <div className="col-md-6 box">
                    <input
                        className="lnameInput"
                        placeholder="Last Name"
                        onChange={(lname) => this.lNameHandler(lname)} />
                </div>
                <div className="col-md-6 box">
                    <input
                        className="phoneInput"
                        placeholder="Phone Number"
                        onChange={(phone) => this.phoneHandler(phone)} />
                </div>
                <div className="col-md-6 box">
                    <input
                        className="emailInput"
                        placeholder="Email"
                        onChange={(email) => this.emailHandler(email)}
                    />
                </div>
                <div className="col-md-6 box">
                    <select className="countrySelect" onChange={(event) => this.Handler(event)}>
                        <option value="-1" >Please Select ...</option>
                        <option className="option" value="Iran">Iran</option>
                        <option className="option" value="Turkey">Turkey</option>
                        <option className="option" value="US">United State</option>
                    </select>
                </div>
                <div className="col-md-6 box">
                    <select className="citySelect">
                        <option value="-1">Please Select City</option>
                        {this.state.mainCountryCities.map(a => (
                            <option className="option">{a}</option>))}
                    </select>
                </div>
                <div className="col-md-12 box">
                    <button className="btn">Book a ticket</button>
                </div>
            </div>
        )
    }
}