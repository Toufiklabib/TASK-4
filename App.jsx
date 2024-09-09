import { View, Text, StyleSheet, Button, Modal, StatusBar, Alert, ScrollView, Image, Dimensions } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import img1 from './Image/Labib.jpg'

const App = () => {
  return (
      <View style={styles.container} >
         <View>
           <Image style={styles.img} source={img1} />
         </View>
         <View style={styles.viewAli} >
          <Text style={styles.textname} >Toufik Hasan Labib</Text>
         </View>
         <View >
          <Text style={[styles.textProfe]} >Jahangirnagar University</Text>
         </View>
           <View style={styles.viewAli}>
            <View style={{flexDirection:'row', gap:10, width:300,  padding:4, }}>
            <Icon name="phone" size={30} color="#478CCF" />
            <Text style={{ fontSize:20, }}>+8801909597565</Text>
            </View>
            <View style={{flexDirection:'row', gap:10, width:300,  padding:4,}}>
            <Icon name="whatsapp" size={30} color="green" />
            <Text style={{ fontSize:20, }}>+8801571309593</Text>
            </View>
            <View style={{flexDirection:'row', gap:10, width:300, padding:4,}}>
            <Icon2 name="email" size={30} color="#478CCF" />
            <Text style={{ fontSize:20, }}>labib.stu2019@juniv.edu</Text>
            </View>
            <View style={{flexDirection:'row', gap:10, width:300, padding:4,}}>
            <Icon2 name="facebook" size={30} color="#478CCF" />
            <Text style={{ fontSize:20, }}>facebook/toufiklabib</Text>
            </View>
            <View style={{flexDirection:'row', gap:10, width:300, padding:4,}}>
            <Icon3 name="linkedin-square" size={30} color="#478CCF" />
            <Text style={{ fontSize:20, }}>linkedin/toufiklabib</Text>
            </View>
           </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
       flex:1,
       alignItems: "center",
       justifyContent:"center",
       backgroundColor:"white",
       borderColor:'#478CCF',
       borderWidth:4,
       borderStyle:"solid",
  },
  img:{
    width:200,
    height:200,
    borderRadius:100,
    borderColor:'#478CCF',
    borderWidth:4,
    borderStyle:"solid",
  },
  viewAli:{
    marginVertical:5,
  },
  textname:{
    color:'Black',
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center',
  },
  textProfe:{
    color:'Black',
    fontSize:18,
    textAlign:'center',
  },
  line: {
    height: 1, 
    borderRadius:0,
    borderColor:'#478CCF',
    borderWidth:2,
    borderStyle:"solid",
    width:300,
  },
});

export default App;


