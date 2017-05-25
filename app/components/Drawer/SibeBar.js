import React, { Component, PropTypes } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Card, CardItem,  Badge,Thumbnail, Left, Body, Right, Button} from 'native-base';
import { Image } from 'react-native';
import {Styles} from '../ImportView/styles';
export default class SibeBar extends Component {


    goHome = () => {
      this.props.navigator.navigate('ImportView')
    }

    goToSettings = () => {
      this.props.navigator.navigate('Settings')
    }

    goToIntegration = () => {
      this.props.navigator.navigate('Integrations')
    }

    goToHelp = () => {
      this.props.navigator.navigate('Help')
    }

    render() {
        return (

               <Content>
                 <Card>
                       <CardItem>
                           <Left>
                               <Thumbnail source={{uri:'http://samlib.ru/img/v/vere_g/sonmira/1378669991_2124127089.jpg'}} />
                               <Body>
                                   <Text>PatientApp</Text>
                                   <Text note>Menu</Text>
                               </Body>
                           </Left>
                         </CardItem>

                         <CardItem cardBody>
                             <Image style={{ resizeMode: 'cover' }} source={{uri:'http://samlib.ru/img/v/vere_g/sonmira/1378669991_2124127089.jpg'}} />
                         </CardItem>

                         <CardItem cardBody>
                           <Button iconLeft block transparent
                              onPress={this.goHome}
                           >
                                 <Icon name="home" />
                                 <Text>Home</Text>
                           </Button>
                          </CardItem>

                          <CardItem cardBody>
                            <Button iconLeft block transparent
                              onPress={this.goToSettings}
                            >
                              <Icon name="settings" />
                              <Text>Configuration</Text>
                            </Button>
                          </CardItem>

                          <CardItem cardBody>
                            <Button iconLeft block transparent
                              onPress={this.goToIntegration}
                            >
                               <Icon name="cloud" />
                               <Text>Integration</Text>
                            </Button>
                          </CardItem>

                          <CardItem cardBody>
                            <Button iconLeft block transparent
                              onPress={this.goToHelp}
                            >
                                 <Icon name="help" />
                                 <Text>Help</Text>
                            </Button>
                          </CardItem>
                   </Card>
               </Content>
        
        );
    }
}
