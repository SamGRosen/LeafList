import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import '../../css/homepage.css';


const getFaviconSrc = (site) =>
  `http://www.google.com/s2/favicons?domain=${site}`

export default class LeafPreview extends Component {
  static propTypes = {
    leafName: PropTypes.string.isRequired,
  }

  render() {
    return (
      <ListItem
        disabled={true}
        secondaryTextLines={2}
        className="leaf-preview"
        style={{padding: '', marginLeft: ''}}
        leftIcon={<Avatar
          className="leaf-favicon"
          src={getFaviconSrc('medium.com')}
          style={{margin: '', left: ''}}
          />}
        primaryText={
          <a href="#" className="leaf-link"> LEAF TITLE </a>
        }
        secondaryText={
          <a href="#" className="leaf-link"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </a>}
      />
    )
  }
}