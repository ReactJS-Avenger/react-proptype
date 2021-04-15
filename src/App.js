import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Test=(props)=>{
    return(
        <div>
            <h2>{props.str}</h2>
            <h2>{(props.bool? "boolean" : "not a boolean")}</h2>
            <h2>{props.strOrNumber}</h2>
            {props.arr.map((el, index)=>{
              return <li key={index}>{el}</li>
            })}
            {props.arrofobject.map((el, index)=>{
              return <li key={index}>{el.name} and {el.age}</li>
            })}
            <h2>{props.children}</h2>
        </div>
    )
}

Test.propTypes={
    str: PropTypes.string,
    bool: PropTypes.bool,
    strOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number ]),
    arr: PropTypes.arrayOf(PropTypes.number),
    arrofobject: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    })),
    children: PropTypes.string
}
  
class App extends Component {
    render() {
        return (
            <div>
                <Test 
                str={"shubham"}
                bool={true}
                strOrNumber={"Testing propType is String or Number"}
                arr={[1,2,3,4,5]}
                arrofobject= {[{name: "shubham", age: 24}, {name: "vinayak", age:35}]}
                >Children</Test>
                {/* 1. what if i have <div>children</div> then PropType.element will resolve this
                2. We can also make use of required */}
            </div>
        );
    }
}

export default App;