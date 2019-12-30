import React, { Fragment } from 'react';


const SearchBar = props => {
  return (
    <Fragment>
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" placeholder="Location..." onChange={props.locationOnChange} />
          <i className="search icon" />
        </div>
      </div>
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" placeholder="Grade..." onChange={props.gradeOnChange} />
          <i className="search icon" />
        </div>
      </div>
    </Fragment>
  )
}

export default SearchBar;
