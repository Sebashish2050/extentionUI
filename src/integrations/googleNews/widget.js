import React, {Component} from 'react';
import StandardView from '../../views/StandardView/StandardView';
class Widget extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const {widget, onDelete, onRefresh, fetchWidgetData} = this.props;
    if (!widget) return null;
    const {
      id,
      type,
      title,
      isComputing,
      props,
      updatedAt,
      result,
      error,
    } = widget;
    const propsToWidget = {
      id,
      type,
      title: title,
      isComputing,
      updatedAt,
      props: props,
      result: {
        value: result.diff,
        subtext: result.date,
      },
      error,
      linkToContent: '',
      onDelete: onDelete,
      onRefresh: onRefresh,
      fetchWidgetData: fetchWidgetData,
    };
    return <StandardView {...propsToWidget} />;
  }
}

export default Widget;
