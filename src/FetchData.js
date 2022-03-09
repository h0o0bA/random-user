import React from "react";
import moment from "moment";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (!this.state.person) {
      return <div>didn't get a person</div>;
    } else {
      return (
        <div id="user-card" className="content-center">
          <div className="max-w-md py-4 px-4 bg-white shadow-lg rounded-lg my-20 flex justify-center items-center">
            <div className="mr-5 img-por-container">
              <img
                alt="user"
                className="w-20 h-20 object-cover rounded-full h-auto"
                src={this.state.person.picture.large}
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">
                {this.state.person.name.title} {this.state.person.name.first}{" "}
                {this.state.person.name.last}
              </h2>
              <p className="text-gray-800  ">{this.state.person.email}</p>
              <p className="text-gray-800  ">
                {moment(`${this.state.person.dob.date}`).format(
                  "MMMM Do, YYYY"
                )}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}
