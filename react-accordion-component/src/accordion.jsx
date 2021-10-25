import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.languageList = this.languageList.bind(this);
    this.state = {
      current: null
    };
  }

  handleClick(event) {
    (event.target.id === this.state.current)
      ? this.setState({ current: null })
      : this.setState({ current: event.target.id });
  }

  languageList(allTopics) {
    const topics = allTopics.map(eachTopic => {
      const langInfo = this.state.current === eachTopic.topic;

      return (
        <div key={eachTopic.topic}>
          <h1 onClick={this.handleClick} id={eachTopic.topic} className='topic'>{eachTopic.topic}</h1>
          <p className={`info ${langInfo ? this.state.current : 'hidden'}`}>{eachTopic.details}</p>
        </div>
      );
    });
    return topics;
  }

  render(props) {
    return (
    <div>
      {this.languageList(this.props.topics)}
    </div>
    );
  }
}

export default Accordion;
