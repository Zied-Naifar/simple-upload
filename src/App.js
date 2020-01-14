import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    file: {},
    success: false
  };

  handleUpload = e => {
    this.setState(
      {
        file: e.target.files
      },
      () => {
        console.log("hello");
        console.log(this.state.file, "this.state.file");
      }
    );
  };

  onSubmit = () => {
    const formData = new FormData();
    formData.append("file", this.state.file[0]);
    axios
      .put("/user/artist/upload/5e1c9c76f9dea72cac3f4a5c", formData)
      .then(res => {
        console.log("res", res);
        this.setState({ success: true });
      })
      .catch(err => console.log("err", err));
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="file"
            onChange={this.handleUpload}
            className="custom-file-input"
          />
          <button onClick={this.onSubmit}>Submit</button>
          {this.state.success ? <h1>Upload Success</h1> : null}
        </div>
      </div>
    );
  }
}

export default App;
