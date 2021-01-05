import { Button } from 'antd';
import { configConsumerProps } from 'antd/lib/config-provider';
import React from 'react';
import { Link } from 'umi';
//import ShoppingList from './ShoppingList';
// import Square from './Square';
// import TCard from './TCard'
// import ReText from './ReText';
// import TabTree from './TabTree';
import UDButton from './upanddownLoad';

function Hello(){
    //return <ShoppingList name='张三'/>;
    // return <Square text='Click it'/>
    // return <TCard/>
    // return <ReText/>
    // return <TabTree/>
    return <div><UDButton.UploadButton/><UDButton.DownloadButton/><Button><Link to='/welcome/list'>Go to</Link></Button></div>
}

export default Hello;