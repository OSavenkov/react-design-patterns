/* eslint-env browser */
import "whatwg-fetch";
import React from "react";

const List = ({data: gists, keyName, valueName}) => 
  <ul className="generic-list">
    {gists.map(gist => <li key={gist[keyName]}>{gist[valueName]}</li>)}
  </ul>

List.propTypes = {
    keyName: React.PropTypes.string.isRequired,
    valueName: React.PropTypes.string.isRequired,
    data: React.PropTypes.array
}

export default List;                   