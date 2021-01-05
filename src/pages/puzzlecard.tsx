import React from 'react';
import { Card/*,Button*/ } from 'antd';
import { connect } from 'dva';

const namespace='puzzlecard';
function mapStateToProps(state:any) {
    console.log(state);
    const cardList:any=state[namespace].data;
    return {cardList};
}
function mapDispatchToProps(dispatch:any) {
    console.log(dispatch);
    // function onClickAdd(newCard:any) {
    //     const action={type:`${namespace}/addNewCard`,payload:newCard};
    //     dispatch(action);
    // }
    function onDidMount() {
        dispatch({type:`${namespace}/queryInitCards`});
    }
    // return {onClickAdd};
    return {onDidMount};
}

@connect(mapStateToProps,mapDispatchToProps)
class PuzzleCardspage extends React.Component<any,any>{
    componentDidMount(){
        this.props.onDidMount();
    }
    //card:any={setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', punchline: 'here we use dva'}
    readCard(card:any){
        //console.log(card);
        return(
            <Card key={card.id}>
                <div>Q:{card.setup}</div>
                <div>
                    <strong>A:{card.punchline}</strong>
                </div>
            </Card>
        );
    }
    render(){
        return(
            <div>
                {/* {console.log(this.props)} */}
                {this.props.cardList.map((card: any)=>this.readCard(card))}
                {/* {this.props.cardList.map((card:any)=>{
                    console.log(card);
                    return (
                        <Card key={card.id}>
                          <div>Q: {card.setup}</div>
                          <div>
                            <strong>A: {card.punchline}</strong>
                          </div>
                        </Card>
                    );
                })} */}
                {/* <div>
                    <Button onClick={()=>this.props.onClickAdd(this.card)}>添加卡片</Button>
                </div> */}
            </div>
        );
    }
}

export default PuzzleCardspage;