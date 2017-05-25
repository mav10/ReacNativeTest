import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox } from 'native-base';
export default class NotificationSettings extends Component {
  state = {
    email: true,
    push: false
  }
  
    render() {
        return (
            <Container>
                <Content>
                    <ListItem>
                        <CheckBox checked={this.state.email} />
                        <Text>Email notification</Text>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={this.state.push} />
                        <Text>Push-notification</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}
