import React, { Component, PropTypes } from 'react';
import TreePreview from '../../common/TreePreview';
import { GridTile } from 'material-ui/GridList';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';

export default class ForestBox extends Component {
  static propTypes = {
    forestName: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="forest-box">
        <GridTile className="forest-box-grid-tile" style={ {overflow: ''} }>
          <Card className="forest-box-backprop" style={ {background: ''} }>
            <CardTitle
              title={
                <Link to={ `/forests/${this.props.forestName}` }>
                  { this.props.forestName }
                </Link>
              }
              titleStyle={ {fontSize: ''} }
              className="forest-box-header"
            />
            <Divider />
            <CardText className='forest-box-text' style={ {padding: 0} }>
              <TreePreview forestName={ this.props.forestName } treeName="TREE NAME" />
              <Divider />
              <TreePreview forestName={ this.props.forestName } treeName="TREE NAME" />
            </CardText>
          </Card>
        </GridTile>
      </div>
    )
  }
}