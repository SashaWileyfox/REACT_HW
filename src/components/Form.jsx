import React, {Component} from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
      isSubmitted: false
    };
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, address, city, country, acceptRules } = this.state;

    if (!email || !password || !address || !city || !country || !acceptRules) {
      if (!email) console.error('Email is required');
      if (!password) console.error('Password is required');
      if (!address) console.error('Address is required');
      if (!city) console.error('City is required');
      if (!country) console.error('Country is required');
      if (!acceptRules) console.error('You must accept the rules');
      return;
    }

    this.setState({ isSubmitted: true });
  }

  handleBack = () => {
    this.setState({isSubmitted: false});
  }

  render() {
    const {email, password, address, city, country, acceptRules, isSubmitted} = this.state;
    const sortedData = Object.entries({email, password, address, city, country, acceptRules})
      .sort(([a], [b]) => a.localeCompare(b));

    return (
      <div className="container p-2">
        {isSubmitted ? (
          <div>
            <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
            <table className="table">
              <tbody>
              {sortedData.map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{String(value)}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        ) : (
          <form name="myForm" onSubmit={this.handleSubmit} className="form">
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="col-form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password" className="col-form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="address" className="col-form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                id="address"
                placeholder="1234 Main St"
                value={address}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="city" className="col-form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                id="city"
                value={city}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="country" className="col-form-label">Country</label>
              <select
                id="country"
                name="country"
                className="form-control"
                value={country}
                onChange={this.handleChange}
              >
                <option value="">Choose</option>
                <option value="argentina">USA</option>
                <option value="russia">Ukraine</option>
                <option value="china">UK</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-check">
                <input
                  id="rules"
                  type="checkbox"
                  name="acceptRules"
                  className="form-check-input"
                  checked={acceptRules}
                  onChange={this.handleChange}
                />
                <label className="form-check-label" htmlFor="rules">
                  Accept Rules
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default MyForm;
