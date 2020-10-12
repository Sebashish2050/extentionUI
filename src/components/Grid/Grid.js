import React, {Component} from 'react';
import {connect} from 'react-redux';
import GridLayout from 'react-grid-layout';
import s from './Grid.module.css';
import SimpleMetrics from '../../widgets/SimpleMetrics/SimpleMetrics';
import {
  updateLayout,
  deleteWidget,
  fetchWidgetData,
} from '../../actions/simpleAction';
import integrations from '../../integrations/index';

class Grid extends Component {
  onLayoutChange = data => {
    console.log(this.props);
    this.props.updateLayout(data);
  };
  render() {
    console.log(integrations);
    const {widgets, layout, fetchWidgetData, deleteWidget} = this.props;
    const blocks = widgets.map(widget => {
      const widgetInfo = integrations[widget.type];
      const Widgetcomponent = widgetInfo.widget;
      return (
        <div key={widget.id}>
          <Widgetcomponent
            widget={widget}
            fetchWidgetData={fetchWidgetData}
            onDelete={deleteWidget}
          />
        </div>
      );
    });

    // const layout = this.props.layout;
    // const blocks = layout.map(block => {
    //   return (
    //     <div key={block.i}>
    //       <SimpleMetrics />
    //     </div>
    //   );
    // });
    return (
      <div className={s['grid']}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={50}
          width={900}
          isResizable={false}
          draggableHandle=".drag-handle"
          onLayoutChange={this.onLayoutChange}
        >
          {blocks}
        </GridLayout>
      </div>
    );
  }
}
//export default Grid;

const mapStateToProps = ({home: {widgets, layout}}) => ({
  widgets,
  layout,
});

const mapDispatchToProps = dispatch => ({
  updateLayout: data => dispatch(updateLayout(data)),
  deleteWidget: data => dispatch(deleteWidget(data)),
  fetchWidgetData: data => dispatch(fetchWidgetData(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
