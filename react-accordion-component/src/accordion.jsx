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

  handleClick(id) {
    (id === this.state.id)
      ? this.setState({ id: 0 })
      : this.setState({ id: id });
  }

  languageList(allTopics) {
    const topics = allTopics.map(eachTopic => {
      const langInfo = this.state.id === eachTopic.id;

      return (
        <div key={eachTopic.topic}>
          <h1 onClick={() => this.handleClick(eachTopic.id)} className='topic'>{eachTopic.topic}</h1>
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
