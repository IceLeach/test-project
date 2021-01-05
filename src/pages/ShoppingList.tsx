import React from 'react';

interface Props{
    name:string;
}
class ShoppingList extends React.Component<Props,{}>{
    render(){
        return(
            <div className='shopping-list'>
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
                {/* {this.props.children} */}
            </div>
        );
    }
}
/*
function ShoppingList(props:Props){
    return(
        <div className='shopping-list'>
            <h1>Shopping List for {props.name}</h1>
            <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
            </ul>
        </div>
    );
}
*/

export default ShoppingList;