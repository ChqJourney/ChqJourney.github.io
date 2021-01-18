import React from 'react';
import './App.css';
import {Button,TabBar,NavBar,Icon} from 'ppfish-mobile';

function App() {
  return (
    <div className="box">
      <div className="topbar">
<NavBar
        onLeftClick={() => console.log('onLeftClick')}
        leftContent={<Icon type="allow-left" fontSize={20} />}
        rightContent="按钮"
      >标题</NavBar>
      </div>
      
    <div className="roll">
    <div className="wrapper">
      <Button type="guide" block>块级元素</Button>
      <Button type="guide" block>块级元素</Button>
      <Button type="guide" block>块级元素</Button>
      <Button type="guide" block>块级元素</Button>
    </div>
    
    </div>
    <footer>
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
            />
            <TabBar.Item
              title="口碑"
              key="public"
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
              
            />
            <TabBar.Item
              title="朋友"
              key="friend"
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
              
            />
            <TabBar.Item
              title="我的"
              key="my"
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              
            />
          </TabBar>
        
    </footer>
    
</div>
    
  );
}

export default App;
