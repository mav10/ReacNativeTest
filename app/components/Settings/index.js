import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import SibeBar from '../Drawer/SibeBar';
import {Drawer, Container, Content, Header, Left, Right, Body, Button, Icon, Title, Tab, Tabs } from 'native-base';
import DeviceSettings from './deviceSettings';
import NotificationSettings from './notificationSettings';
class Settings extends Component {

    constructor(){
        super()
    }



    closeDrawer = () => {
      this.drawer._root.close();
    }
    openDrawer = () => {

      this.drawer._root.open();
    }

    render() {

        return (
          <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<SibeBar navigator={this.props.navigation} />}
              onClose={() => this.closeDrawer()} >
                <Container>
                 <Header hasTabs>
                   <Left>
                       <Button onPress={this.openDrawer}  >
                           <Icon name='menu' />
                       </Button>
                   </Left>
                   <Body>
                       <Title>Settings</Title>
                   </Body>
                   <Right />
                </Header>
                 <Tabs>
                     <Tab heading="Device of User">
                        <DeviceSettings />
                     </Tab>
                     <Tab heading="Update and date">
                        <Text> tab2 </Text>
                     </Tab>
                     <Tab heading="Notification">
                         <NotificationSettings />
                     </Tab>
                 </Tabs>
               </Container>
            </Drawer>
        );
    }
}

  module.exports = Settings;
