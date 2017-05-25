import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Fab, Button, Icon, Footer, FooterTab } from 'native-base';
export default class Help extends Component {

    state = {
        active: false
    };
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>How can i help you?</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem header>
                            <Text>help...</Text>
                        </CardItem>
                        <Fab
                             active={this.state.active}
                             direction="up"
                             containerStyle={{ marginLeft: 10 }}
                             style={{ backgroundColor: '#5067FF' }}
                             position="bottomRight"
                             onPress={() => this.setState({ active: !this.state.active })}>
                             <Icon name="share" />
                             <Button style={{ backgroundColor: '#34A34F' }}>
                                 <Icon name="logo-whatsapp" />
                             </Button>
                             <Button style={{ backgroundColor: '#3B5998' }}>
                                 <Icon name="logo-facebook" />
                             </Button>
                             <Button disabled style={{ backgroundColor: '#DD5144' }}>
                                 <Icon name="mail" />
                             </Button>
                         </Fab>
                   </Card>

                </Content>
              </Container>
        );
    }
}
