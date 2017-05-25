import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
export default class Integrations extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                    <CardItem>
                       <Icon style={{color: '#dd4b39'}} active name="logo-googleplus" />
                       <Text>Google Plus</Text>
                       <Right>
                          <Icon name="arrow-forward" />
                       </Right>
                     </CardItem>
                     <CardItem>
                        <Icon style={{color: '#3b5998'}} active name="logo-facebook" />
                        <Text>facebook</Text>
                        <Right>
                           <Icon name="arrow-forward" />
                        </Right>
                      </CardItem>
                      <CardItem>
                         <Icon style={{color: '#1dcaff'}} active name="logo-twitter" />
                         <Text>Twitter</Text>
                         <Right>
                            <Icon name="arrow-forward" />
                         </Right>
                       </CardItem>
                       <CardItem>
                          <Icon style={{color: '#0084b4'}} active name="logo-linkedin" />
                          <Text>LinkedIn</Text>
                          <Right>
                             <Icon name="arrow-forward" />
                          </Right>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}
