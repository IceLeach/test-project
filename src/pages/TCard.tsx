import React from 'react';
import { Card } from 'antd';
import style from './tcard.css';

function TCard() {
    return(
        <Card className={style.tcard} actions={[<a>操作一</a>,<a>操作二</a>]}>
            <Card.Meta avatar={<img alt='' className={style.iimg} src='https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png' />} title='Alipay' description='在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' />
        </Card>
    );
}
// class TCard extends React.Component{
//     render(){
//         return(
//             <Card className={style.tcard} actions={[<a>操作一</a>,<a>操作二</a>]}>
//                 <Card.Meta avatar={<img alt='' className={style.iimg} src='https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png' />} title='Alipay' description='在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' />
//             </Card>
//         );
//     }
// }

export default TCard;