// import {mount} from 'enzyme';
import React from 'react';
import TestDemo from './TestDemo';

const sum=function(a,b){
    return a+b;
};

test('adds 1 + 2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
    expect(sum(2,3)).toBe(5);
    expect(sum(0,2)).toBe(2);
});
// test('TestDemo',()=>{
//     const wrapper=mount(<TestDemo/>);
//     expect(wrapper.find('div').text()).toBe('test');
// })