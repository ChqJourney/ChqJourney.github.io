import React, { useState } from 'react';
import './App.css';
import {Layout,TabBar,Avatar,List,NavBar,Icon} from 'ppfish-mobile';

function App() {
  const [stat,setStat]=useState('life')
  const {Row,Col}=Layout;
  const Item = List.Item;
  return (
    <>
    <Row>
      <Col span="24">
      <NavBar
          leftContent={[
            <Icon type="allow-left" fontSize={20} />
          ]}
          rightContent={[
            <Icon type="plus" fontSize={20} />,
          ]}
        ><div class="u-search"><Icon type="search" fontSize={14} color='#B2B5C2' style={{ marginRight: '5px' }} />搜索</div></NavBar>

      </Col>
    </Row>
    <Row className="main">
      <Col span="24">
      <List>
        <Item><Avatar/>默认圆形 </Item>
        <Item><Avatar>default</Avatar>默认文字头像</Item>
        <Item><Avatar disabled>不可操作</Avatar>不可操作</Item>
      </List>
      </Col>
    </Row>

    <Row className="bottombar">
          <TabBar
            unselectedTintColor="#51565D"
            tintColor="#337EFF"
            barTintColor="white"
            noRenderContent
          >
            <TabBar.Item
              title="生活"
              key="life"
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={stat === 'life'}
              onPress={() => setStat('life')} 
            />
            <TabBar.Item
              title="口碑"
              key="public"
              dot
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={stat=== 'public'}
              onPress={() => setStat('public') }
            />
            <TabBar.Item
              title="朋友"
              key="friend"
              badge={3}
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selected={stat === 'friend'}
              onPress={() => setStat('friend')}
            />
            <TabBar.Item
              title="我的"
              key="my"
              badge={22}
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              selected={stat=== 'my'}
              onPress={() => setStat('my')}
            />
          </TabBar>
    </Row>
    </>
  );
}

export default App;
