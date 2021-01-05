import React from 'react';
import { Button, Form, Input, Modal, Table } from 'antd';
import { connect } from 'dva';
import FormItem from 'antd/lib/form/FormItem';

const namespace='cards';
function mapStateToProps(state: { [x: string]: any; }) {
    const data=state[namespace];
    return {data};
}
function mapDispatchToProps(dispatch: (arg0: { type: string; }) => void) {
    function functions(){
        return {
            onDidMount:function () {
                dispatch({type:`${namespace}/queryList`});
            },
            addOne:function (values: any){
                dispatch({type:`${namespace}/addOne`,payload:values});
            },
            // getStatistic:function(values){
            //     dispatch({type:`${namespace}/queryResult`,payload:values});
            // }
        }
    }
    return {functions};
}

@Form.create()
@connect(mapStateToProps,mapDispatchToProps)
class List extends React.Component<any,any>{
    readonly state={
        visible:false,
        // statisticVisible:false,
        // id:null
    };
    componentDidMount(){
        this.props.functions().onDidMount();
    }
    columns=[
        {
            title:'名称',
            dataIndex:'name'
        },
        {
            title:'描述',
            dataIndex:'desc'
        },
        {
            title:'链接',
            dataIndex:'url'
        },
        // {
        //     title:'',
        //     dataIndex:'_',
        //     render:(_,{id})=>{
        //         return <Button onClick={()=>this.showStatistic(id)}>图表</Button>;
        //     }
        // }
    ];
    showModal(){
        this.setState({visible:true});
    }
    handleCancel(){
        this.setState({visible:false});
    }
    handleOk(){
        const {form:{validateFields}}=this.props;
        validateFields((err: any,values: any)=>{
            //console.log(values);
            if(!err){
                this.props.functions().addOne(values);
                // dispatch({type:'cards/addOne',payload:values});
                this.setState({visible:false});
            }
        })
    }
    // showStatistic(id){
    //     this.props.functins().getStatistic(id);
    //     this.setState({id,statisticVisible:true});
    // }
    // handleStatisticCancel(){
    //     this.setState({statisticVisible:false});
    // }
    render(){
        const {visible}=this.state;
        const {form:{getFieldDecorator},statistic}=this.props;
        return (
            <div>
                <Table columns={this.columns} dataSource={this.props.data.cardsList} />
                <Button onClick={()=>this.showModal()}>新建</Button>
                <Modal title='新建记录' visible={visible} onOk={()=>this.handleOk()} onCancel={()=>this.handleCancel()}>
                    <Form>
                        <FormItem label='名称'>
                            {getFieldDecorator('name', { rules: [{ require:true }]})(<Input/>)}
                        </FormItem>
                        <FormItem label='描述'>
                            {getFieldDecorator('desc')(<Input/>)}
                        </FormItem>
                        <FormItem label='链接'>
                            {getFieldDecorator('url',{ rules: [{ type:'url' }]})(<Input/>)}
                        </FormItem>
                    </Form>
                </Modal>
                {/* <Modal visible={statisticVisible} footer={null} onCancel={()=>this.handleStatisticCancel()}>
                    <SampleChart data={statistic[id]}/>
                </Modal> */}
            </div>
        );
    }
}

export default List;
// export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(List));