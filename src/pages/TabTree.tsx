import { Tabs, Tree } from 'antd';
import React from 'react';

const {TabPane}=Tabs;
const {TreeNode}=Tree;
class TTab extends React.Component{
    state={
        activeKey:'1',
        expandedKeys:[]
    }
    onTabChange(activeKey:string) {
        console.log(activeKey);
        this.setState({activeKey:activeKey});
    }
    onExpand(expandedKeys: string[]){
        // console.log(expandedKeys);
        this.setState({expandedKeys:expandedKeys}); 
    }
    onSelect(selectedKeys: any[]){
        console.log(selectedKeys,this.state.expandedKeys);
        const {expandedKeys}:any=this.state;
        const key=selectedKeys[0];
        if(expandedKeys.includes(key)){
            this.setState({expandedKeys:expandedKeys.filter((k: any)=>k!==key)});
        }else{
            this.setState({expandedKeys:[...expandedKeys,key]});
        }
    }
    render(){
        return(
            <div>
                <Tabs activeKey={this.state.activeKey} onChange={(activeKey)=>this.onTabChange(activeKey)}>
                    <TabPane tab='Tab 1' key='1'>Content of Tab Pane 1</TabPane>
                    <TabPane tab='Tab 2' key='2'>Content of Tab Pane 2</TabPane>
                </Tabs>
                <Tree expandedKeys={this.state.expandedKeys} selectedKeys={[]} onExpand={(expandedKeys)=>this.onExpand(expandedKeys)} onSelect={(selectedKeys)=>this.onSelect(selectedKeys)}>
                    <TreeNode title='parent 1' key='0-0'>
                        <TreeNode title='leaf' key='0-0-0'>
                            <TreeNode title='leaf' key='0-0-0-0'/>
                            <TreeNode title='leaf' key='0-0-0-1'/>
                        </TreeNode>
                        <TreeNode title='leaf' key='0-0-1'>
                            <TreeNode title='leaf' key='0-0-1-0'/>
                            <TreeNode title='leaf' key='0-0-1-1'/>
                        </TreeNode>
                    </TreeNode>
                </Tree>
            </div>
        );
    }    
}

export default TTab;