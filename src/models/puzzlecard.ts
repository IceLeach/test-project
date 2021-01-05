import request from '../util/request';
import { message } from 'antd';

function delay(millisecond) {
    return new Promise((resolve)=>{
        setTimeout(resolve,millisecond);
    });
}

export default {
    namespace: 'puzzlecard',
    state: {
        data: [
            // {
            //     id:1,
            //     setup:'Did you hear about the two silk worms in a race?',
            //     punchline:'It ended in a tie'
            // },
            // {
            //     id:2,
            //     setup:'What happens to a frog\'s car when it breaks down?',
            //     punchline:'It gets toad away'
            // }
        ],
        counter: 0
    },
    effects: {
        *queryInitCards(_: any,sagaEffects: { call: any; put: any; }){
            try{
                const {call,put}=sagaEffects;
                const endPointURI='/random_joke';
                const puzzle=yield call(request,endPointURI);
                yield put({type:'addNewCard',payload:puzzle});
                yield call(delay,3000);
                const puzzle2=yield call(request,endPointURI);
                yield put({type:'addNewCard',payload:puzzle2});
            }catch(e){
                message.error('数据获取失败');
            }
        }
    },
    reducers: {
        addNewCard(state:any,{payload}){
            console.log(payload);
            const nextCounter=state.counter+1;
            const newCardWithId={...payload,id:nextCounter};
            const nextData=state.data.concat(newCardWithId);
            return {data:nextData,counter:nextCounter};
        }
        // addNewCard(state:any,{payload}){
        //     console.log(payload);
        //     const nextCounter=state.counter+1;
        //     //const newCardWithId={...payload};
        //     const nextData=state.data.concat(payload);
        //     return {data:nextData,counter:nextCounter};
        // }
    }
}