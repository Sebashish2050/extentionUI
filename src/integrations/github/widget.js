import React, {Component} from 'react';
import StandardView from '../../views/StandardView/StandardView';
class Widget extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const {widget, onDelete, onRefresh} = this.props;
    if (!widget) return null;
    const {id, type, isComputing, updatedAt, error, lastKnownResult} = widget;
    const propsToWidget = {
      id,
      type,
      title: 'Unread Notifications',
      isComputing,
      updatedAt,
      metrics: [
        {
          value: lastKnownResult.unreadCount,
          description: 'Total',
        },
        {
          value: lastKnownResult.olderThan7Days,
          description: '> 7 days',
        },
      ],
      error,
      linkToContent: 'https://github.com/notifications',
      onDelete: onDelete,
      onRefresh: onRefresh,
    };
    return <StandardView props={propsToWidget} />;
  }
}

export default Widget;
