import React from 'react';

const styles = {
  button: {
    fontSize: '2.5rem',
    margin: 10,
    lineHeight: '1.5rem',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth: 400,
    margin: '0 auto',
  },
};

class Input extends React.Component {
  state = {
    taskText: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  whenUserSubmits = e => {
    e.preventDefault();
    const { handleSubmit, history } = this.props;
    handleSubmit(this.state.taskText);
    this.setState({
      taskText: '',
    });
    history.push('/todos'); //comes from props passed down from React-Router. withRouter can achieve a similar result.
  };

  render() {
    return (
      <form style={styles.form} onSubmit={this.whenUserSubmits}>
        <label htmlFor="task">Add a todo: </label>
        <input
          autoComplete="off"
          id="task"
          name="taskText"
          value={this.state.taskText}
          onChange={this.handleChange}
        />
        <button style={styles.button} type="submit">
          +
        </button>
      </form>
    );
  }
}

export default Input;
