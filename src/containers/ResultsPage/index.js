import React from 'react';

class ResultsPage extends React.Component {
  render () {
    return (
      <div>
        {this.props.restaurants}
      </div>
    );
  };
};

export default ResultsPage;
