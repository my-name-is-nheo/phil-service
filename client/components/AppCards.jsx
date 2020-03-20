import React from 'react';
import AppCard from './AppCard.jsx';
const $ = require('jquery');

class AppCards extends React.Component {
  constructor() {
    super();
    this.state = {
      apps: []
    };
  }

  componentDidMount() {
    $.get('/api/apps', data => {
      this.setState({apps: data});
    });

  }

  render() {

    const apps = this.state.apps.map(app => {
      return <AppCard app={app} key={app._id}/>;
    });

    return (
      <div className="row">
        <div className="col">
          {apps}
        </div>
      </div>
    );
  }
}

export default AppCards;