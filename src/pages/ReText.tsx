import React from  'react';

// function MyInput({value='',onChange=()=>{}}) {
//     return <input type="text" value={value} onChange={()=>onChange} />
// }
interface Props{
    value:string,
    onChange:any
}
function MyInput(props:Props) {
    return <input type="text" value={props.value} onChange={(event)=>props.onChange(event)} />
}
// class MyInput extends React.Component<Props>{
//     render(){
//         return <input type='text' value={this.props.value} onChange={()=>this.props.onChange} />
//     }
// }
class ReText extends React.Component{
    readonly state={
        text:''
    }
    onTextChange(event:any){
        this.setState({text:event.target.value});
    }
    onTextReset(){
        this.setState({text:''});
    }
    render(){
        return <div><MyInput value={this.state.text} onChange={(event:any)=>this.onTextChange(event)} /><button onClick={()=>this.onTextReset()}>Reset</button></div>
    }
}

export default ReText;