import { message } from 'antd';
import request from '../util/request';

export default {
    namespace: 'cards',
    state: {
        cardsList:[],
        result:[]
    },
    effects: {
        *queryList(_: any,effects: { call: any,put: any}){
            try{
                const {call,put}=effects;
                const endPointURI='/dev/list';
                const value=yield call(request,endPointURI);
                yield put({type:'addCards',payload:value.cardList});
            }catch(e){
                message.error(e);
            }
        },
        // *queryResult(_,effects:{call,put}){
        //     try{
        //         const {call,put}=effects;
        //         const endPointURI='/dev/list';
        //         const value=yield call(request,endPointURI);
        //         yield put({type:'addChart',payload:value.result});
        //     }catch(e){
        //         message.error(e);
        //     }
        // }
    },
    reducers: {
        addCards(state: { cardsList: string | any[]; },{payload}: any){
            //console.log(payload);
            const newData=state.cardsList.concat(payload);
            return {cardsList:newData};
        },
        addOne(state: any,{payload}: any){
            const newKey=state.cardsList[state.cardsList.length-1].key+1;
            payload.key=newKey;
            //console.log(payload);
            const newData=state.cardsList.concat(payload);
            //console.log(newData);
            return {cardsList:newData};
        },
        // addChart(state,{payload}){
        //     const newdata=state.result.concat(payload);
        //     return {result:newdata};
        // }
    }
}