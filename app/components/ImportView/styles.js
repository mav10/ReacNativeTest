import { StyleSheet } from 'react-native';


const Styles = StyleSheet.create({
   picMargin:{
     margin:15
   },
   displayContainer: {
     position: 'relative'
   },
   displayBottomleft:{
     position:'absolute',
     left:0,
     bottom:0
   },
   padding:{
     padding:8
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  background: {
    backgroundColor: '#ffffff'
  },
  rightText:{
    textAlign: 'right'
  },
  leftText:{
    textAlign: 'left'
  },
  infoBlock:{
    flex:2
  },
  chart:{
    height: '50%'
  },
  row:{
    flexDirection: 'row'
  },
  badge:{
    marginRight: 5,
    marginLeft:5,
    backgroundColor:'#48BBEC',
    color:'#ffffff',
    fontWeight: 'bold',
    paddingLeft:8,
    paddingRight:8,
    textAlign:'center',
    borderRadius:10
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  gaudgeContainer: {
    marginRight: 5,
    marginLeft:5,
    height: 120
  },
  gaudgeHeader: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'relative',
    left:     0,
    top:      '-70%',
    zIndex: 50
  }
});

export {Styles};
