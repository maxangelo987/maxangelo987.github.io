'use strict';

const e = React.createElement;

class CreateControlledForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      input: '',
      submit: this.state.input
    });
  }
    render() {
      return e(
        <div>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange}/>
        <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
        </div>
      );
    }
  };

const domContainer = document.querySelector('#create_a_controlled_form');
ReactDOM.render(e(CreateControlledForm), domContainer);