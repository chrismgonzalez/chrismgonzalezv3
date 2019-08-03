import React from 'react'

export default class TextType extends React.Component {
  state = {
    startDelay: 1500,
    timeVariation: 90,
    textIndex: 0,
    text: [
      'Welcome to my website!',
      "Let's find unique solutions to complex problems",
      'Check out my code on Github!',
      'I specialize in Javascript, React, and much more!',
      'Check out more about me below',
    ],
    textState: '',
  }

/*eslint-disable */



  typeText = () => {
    let time = this.state.startDelay;
    this.state.text[this.state.textIndex].split('').forEach((letter, i) => {
      time
        += Math.ceil(Math.random() * this.state.timeVariation)
        + this.state.timeVariation;

      setTimeout(() => {
        window.requestAnimationFrame(() => {
          this.setState(prevState => ({
            textState: prevState.textState + letter,
          }));
        });

        if (i === this.state.text[this.state.textIndex].length - 1) {
          setTimeout(() => {
            this.startBackspace();
          }, 2000);
        }
      }, time);
    });
  };

  startBackspace = () => {
    this.backspaceText().then((res) => {
      console.log(res);
      this.setState(
        prevState => ({
          textIndex:
            this.state.text.length > 1
            && prevState.textIndex !== this.state.text.length - 1
              ? prevState.textIndex + 1
              : 0,
        }),
        () => {
          this.typeText();
        },
      );
    });
  };

  backspaceText = () => new Promise((resolve) => {
    let time = 0;
    for (let i = this.state.textState.length; i >= 0; i--) {
      time += 50;

      setTimeout(() => {
        window.requestAnimationFrame(() => {
          this.setState({
            textState: this.state.textState
              .split('')
              .splice(0, i)
              .join(''),
          });
        });

        if (i === 0) {
          resolve('Promise Resolved!');
        }
      }, time);
    }
  });

  componentDidMount() {
    this.typeText();
  }

  render() {
    return (
      <div className="textType">
        <span>
          {this.state.textState}
          <span className="cursor">|</span>
        </span>
      </div>
    );
  }
}

