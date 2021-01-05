const cardList=[
    {
        key:1,
        name:'名称1',
        desc:'描述1',
        url:'链接1'
    },
    {
        key:2,
        name:'名称2',
        desc:'描述2',
        url:'链接2'
    },
    {
        key:3,
        name:'名称3',
        desc:'描述3',
        url:'链接3'
    }
];
const result=[
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 1150 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 }
];
const value={cardList,result};

export default{
    'get /dev/list':function(req: any,res: any){
        res.json(value);
    }
};