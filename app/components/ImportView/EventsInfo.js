import React, { Component, PropTypes } from 'react';
import {
  ActivityIndicator,
  View,
  Alert,
  Button,
  StyleSheet,
  ScrollView,
  Text,
  Image } from 'react-native';
  import { PATH_TO_CORE_API } from '../../constants/';
  import  {EVENT_TYPES}  from '../../constants/eventTypes';
import {Styles} from './styles';
import ChartView from '../ChartView';
import {PieChartConfig, ChangeChartConfig} from '../ChartView/config';
import HChartView from 'react-native-highcharts';

  class EventsInfo extends React.Component {
   static navigationOptions = ({ navigation }) => ({
     title: `Events info`,
   });

   constructor(props){
     super(props);
   }
   state = {
     Events:[]
   }
    onButtonPress = () => {
       this.props.navigation.navigate('AnatomyExample')
   };

   async fetchData(){
     const { params } = this.props.navigation.state;
     try {
       let response = await fetch(PATH_TO_CORE_API+'/api/events?linkToRecord='+params.linkToRecord);
       let responseJson = await response.json();
       this.handleResponse(responseJson);
     } catch(error) {
       console.error(error);
     }
   }

   handleResponse = (response) => {
     this.setState({ Events: response});
   }

   componentWillMount(){
     this.fetchData();
   }



   prepareData(events){
     let all = events.length;
     let EVENTS = [];
     for (var i = 0; i < EVENT_TYPES.length; i++)
       EVENTS.push({id: Number(EVENT_TYPES[i].id) + 400, name: EVENT_TYPES[i].name, color:EVENT_TYPES[i].color, y: 0});

    for (var i = 0; i < events.length; i++) {
      for (var j = 0; j < EVENTS.length; j++) {
        if(events[i].respEventId == EVENTS[j].id){
          EVENTS[j].y = EVENTS[j].y + 1 ;
        }
      }
    }


    for (var j = 0; j < EVENTS.length; j++) {
      if(EVENTS[j].y == 0)
        EVENTS[j] = null;
    }
    return EVENTS;

   }



     render() {
       if(this.state.Events.length === 0 )
        return(<ActivityIndicator
            size='large'/>);

      let EVENTS = this.prepareData(this.state.Events);
       let data = [{
           type: 'pie',
           name: 'Night events',
           data: [...EVENTS]
       }];
       let dataBar = [{
         name: 'RespEvents',
         type: 'column',
         colorByPoint: true,
         data: [...EVENTS]
       }];
       return (
         <ScrollView style={Styles.background}>
          <View style={Styles.background}>
            <View style={Styles.picMargin}>
              <View  style={Styles.displayContainer, Styles.textWhite}>
                <View style={Styles.row}>
                  <Text style={{fontWeight: 'bold'}}> Events for during of record:</Text>
                  <Text style={Styles.badge}> {this.state.Events.length} </Text>
                </View>
                <ChartView data={data} chartConfig={PieChartConfig} />
                <ChartView data={dataBar} chartConfig={ChangeChartConfig} refer={"changed"} />
              </View>
              <Button
                  onPress={this.onButtonPress}
                  title="Bluetooth test"
                  accessibilityLabel="See an informative alert"
                />
            </View>
          </View>
        </ScrollView>
     );
   }
 }

 module.exports = EventsInfo;
