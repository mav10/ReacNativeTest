import React, { Component } from 'react';
import { Container, Content, Form, Item, Input,Label, Button, Text} from 'native-base';
export default class DeviceSettings extends Component {
    render() {
        return (
            <Container>
                    <Content>
                        <Form>
                            <Item rounded floatingLabel last>
                                <Label>Serial Number</Label>
                                <Input />
                            </Item>
                            <Item rounded floatingLabel last>
                                <Label>Code</Label>
                                <Input />
                            </Item>

                            <Button block rounded info>
                               <Text>Pair</Text>
                           </Button>

                        </Form>
                    </Content>
                  </Container>
        );
    }
}
