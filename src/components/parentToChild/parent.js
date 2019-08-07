import React from 'react';
import Child from "./child";


const Parent = (props) => {
  return (
    <div>
      // React components communication tutorial | parent to child | siblings | grand parents to grand child
      https://www.youtube.com/watch?v=dyL99ACQfsM

      //Using spread operator
      https://medium.com/@thejasonfile/using-the-spread-operator-in-react-setstate-c8a14fc51be1

      <Child doWhatEver={props.changeTheWorldEvent}  title={props.title} />
      <Child doWhatEver={props.keetTheWorldSameEvent}  title={props.title} />
    </div>
  )
}

export default Parent;

