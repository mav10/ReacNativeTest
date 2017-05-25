import React, { Component, PropTypes } from 'react';
import {NetInfo,
  ActivityIndicator,
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image } from 'react-native';
import { PATH_TO_CORE_API } from '../../constants/';
import moment from 'moment';
import ChartView from '../ChartView';
import {Styles} from './styles';
import {conf, gaugeChart, ChangeChartConfig} from '../ChartView/config';
import { Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Card, CardItem, Spinner  } from 'native-base';
import AnimatedSemiCircularGauge from 'react-native-semi-circular-gauge';
import LineGauge  from 'react-native-line-gauge';
import SibeBar from '../Drawer/SibeBar';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';


let imports = [];

 class ImportView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Import View`
  });
  constructor(props){
    super(props);
  }

  state = {
    isLoading: true,
    Imports: null
  }
  closeDrawer = () => {
    this.drawer._root.close();
  }
  openDrawer = () => {
    this.drawer._root.open();
  }
  componentWillMount(){
    NetInfo.fetch().done((reach) => {
    console.log('Initial: ' + reach);
  });
    this.fetchAllData();
  }

  getEndTime = () => {
    if (this.state.currentImport.recordInformation !== null) {
      const startTime = moment.utc(this.state.currentImport.recordInformation.startTime);
      const endTime = startTime + moment.duration(this.state.currentImport.recordInformation.duration).asMilliseconds();

      return moment.utc(endTime).format('HH:mm:ss');
    }

    return null;
  }



  async fetchAllData(){
    const { params } = this.props.navigation.state;
    try {
      let response = await fetch(PATH_TO_CORE_API+'/api/import/all');
      let responseJson = await response.json();
      this.handleResponseAll(responseJson);
    } catch(error) {
      console.error(error);
    }
  }

  handleResponseAll = (imports) => {
    for (var i = 0; i < imports.length; i++) {
      let currentImport = this.fetchData(imports[i].linkToRecord);
    }
    this.setState({countImports: imports.length});
  }

  async fetchData(link){
    const { params } = this.props.navigation.state;
    try {
      let response = await fetch(PATH_TO_CORE_API+'/api/import?linkToRecord='+link);
      let responseJson = await response.json();
      this.addImport(responseJson);
    } catch(error) {
      console.error(error);
    }
  }

  addImport = (response) => {
    let currentImports = [];
    if(this.state.Imports != null)
       currentImports = [...this.state.Imports];
    currentImports.push(response);
    this.setState({Imports: currentImports});
  }


  onButtonPress = () => {
    this.setState({Imports: null})
    this.fetchAllData();
  };

    drawColor(value){
      let color = 'rgb(0, 255, 3)';
      if(value > 10 && value < 20)
        color = 'rgb(250, 227, 26)';
      if(value > 20)
        color = 'rgb(235, 15, 15)';
      return color;
    }

    prepareData = (imports) => {
      let data = [];
      for (var i = 0; i < imports.length; i++) {
        data.push(
            [Date.parse(imports[i].recordInformation.startTime), moment.duration(imports[i].recordInformation.duration).asMilliseconds()]
        );
      }
      let series = {
        type: 'column',
        name: 'sleep',
        dataGrouping:{
          enabled:false
        },
        data: data
      };
      return series;
    }

    prepareDataAHI = (imports) => {
      let data = [];
      for (var i = 0; i < imports.length; i++) {
        data.push(
            [Date.parse(imports[i].recordInformation.startTime), Number(imports[i].statistics.ahi)]
        );
      }
      let series = {
        type: 'column',
        name: 'Appnea',
        dataGrouping:{
          enabled:false
        },
        data: data
      };
      return series;
    }


  render() {
    let spinner = false;
    let statistics = {};
    let series = {};
    let dataBar = {};
    if(this.state.Imports == null){
      spinner = true;
    }else{
      spinner = true;
      if(this.state.countImports != this.state.Imports.length){
        spinner = true;
      }else{
        spinner = false;
        statistics = this.state.Imports[0].statistics;

        series = this.prepareData(this.state.Imports);
        dataBar = this.prepareDataAHI(this.state.Imports);
      }
    }
    return (  <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SibeBar navigator={this.props.navigation} />}
        onClose={() => this.closeDrawer()} >
          <Container>
              <Header>
                  <Left>
                      <Button onPress={this.openDrawer}  >
                          <Icon name='menu' />
                      </Button>
                  </Left>
                  <Body>
                      <Title>Main indeces</Title>
                  </Body>
                  <Right />
              </Header>
              <Content>
                {spinner ? (<Spinner
                    color='blue'/>) : (
                <ScrollView style={Styles.background}>
                    <View  style={Styles.background}>

                    <Text style={Styles.header}>Recent indeces</Text>
                    <View style={Styles.row}>
                      <View style={Styles.gaudgeContainer}>
                        <Text style={Styles.header}>AHI</Text>
                        <AnimatedGaugeProgress
                          size={120}
                          width={15}
                          fill={Number(statistics.ahi)*100/30}
                          rotation={90}
                          cropDegree={180}
                          tintColor={this.drawColor(Number(statistics.ahi))}
                          backgroundColor="#b0c4de"
                          strokeCap="arc" />
                          <Text style={Styles.gaudgeHeader}>{Number(statistics.ahi).toFixed(1)}</Text>
                        </View>
                        <View style={Styles.gaudgeContainer}>
                          <Text style={Styles.header}>cAHI</Text>
                          <AnimatedGaugeProgress
                            size={120}
                            width={15}
                            fill={Number(statistics.cAHI)*100/30}
                            rotation={90}
                            cropDegree={180}
                            tintColor={this.drawColor(Number(statistics.cAHI))}
                            backgroundColor="#b0c4de"
                            strokeCap="arc" />
                            <Text style={Styles.gaudgeHeader}>{Number(statistics.cAHI).toFixed(1)}</Text>
                          </View>
                          <View style={Styles.gaudgeContainer}>
                            <Text style={Styles.header}>oAHI</Text>
                            <AnimatedGaugeProgress
                              size={120}
                              width={15}
                              fill={Number(statistics.oAHI)*100/30}
                              rotation={90}
                              cropDegree={180}
                              tintColor={this.drawColor(Number(statistics.oAHI))}
                              backgroundColor="#b0c4de"
                              strokeCap="arc" />
                              <Text style={Styles.gaudgeHeader}>{Number(statistics.oAHI).toFixed(1)}</Text>
                            </View>
                    </View>
                        <ChartView data={series} chartConfig={conf} height={200} />
                        <ChartView data={dataBar} chartConfig={ChangeChartConfig} />
                      </View>
                </ScrollView>
              ) }
              </Content>
              <Footer>
                  <FooterTab>
                  <Button
                      iconLeft
                      block
                      onPress={this.onButtonPress}
                  >
                    <Icon name='sync' />
                    <Text style={Styles.header}>Sync</Text>
                  </Button>
                  </FooterTab>
              </Footer>
          </Container>
    </Drawer>
    );
  }
}


module.exports = ImportView;
