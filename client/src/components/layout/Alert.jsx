import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { alerts } = this.props;
    if (alerts !== null && alerts.length > 0) {
      return alerts.map((alert) => (
        <div className="alert danger" key={alert.id}>
          {alert.msg}
        </div>
      ));
    }
    return null;
  }
}
Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
