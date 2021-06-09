import React from 'react';
import {API_NAME} from "../../config";

function Header(props) {

  return(
    <div class="ui top inverted attached menu">
      <span class="item link blue" onClick={props.onToggleMenu}>{API_NAME}</span>
    </div>
  );
}

export default Header;
