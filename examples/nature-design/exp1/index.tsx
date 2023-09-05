import React,{Component} from 'react';
import Cmp from '../../../src';
import CmpDemo from '@beisen-phoenix/demo-container';

const code = `
import React from 'react';
import Cmp from '@beisen-phoenix/cmp';

export default class extends Component {
  render() {
    return (
      <Cmp
        size='default'  // 还可以设置为small
        defaultChecked={true} // 设置为false则默认不开启
        disabled={false} // 设置为true则处于禁用状态
        loading={true} // 显式设置组件处于loading状态
        style={{marginRight: '20px'}} // 设置内联样式
      />      
    )
  }
}

`


const description =  <div>
  <div>1、这里描述场景</div>
  <div>2、这里描述api属性以及使用场景</div>
  <div>3、这里描述api属性以及使用场景</div>
  <div>4、这里描述api属性以及使用场景</div>
  <div>5、这里描述api属性以及使用场景</div>
  <div>6、这里描述api属性以及使用场景</div>
</div>

export default class extends Component {
    render() {
      return (
        <CmpDemo title="基本用法" desc={description} code={code} device='pc'> // change to mobile  According to the actual situation
          <Cmp />
      </CmpDemo>
      )
    }
}

