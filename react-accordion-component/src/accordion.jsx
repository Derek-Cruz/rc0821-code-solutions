import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.languageList = this.languageList.bind(this);
    this.state = {
      id: 0
    };
  }

  handleClick(event) {
    (event.target.id === this.state.id)
      ? this.setState({ id: 0 })
      : this.setState({ id: event.target.id });
  }

  languageList(allTopics) {
    const topics = allTopics.map(eachTopic => {
      const langInfo = this.state.id === eachTopic.topic;

      return (
        <div key={eachTopic.topic}>
          <h1 onClick={this.handleClick} id={eachTopic.topic} className='topic'>{eachTopic.topic}</h1>
          <p className={`info ${langInfo ? this.state.id : 'hidden'}`}>{eachTopic.details}</p>
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
