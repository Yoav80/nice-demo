import React from 'react';

const List = (props) => {
  return (
    <div className="list-group">
          {props.children}
    </div>
  )
}

export default List;

