import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        margin:10,
        alignItems:'center',
        backgroundColor:'#ffa500',
        flex:1
    },
    image:{
        width:Dimensions.get('screen').width/1.1,
        height:Dimensions.get('screen').height/4,
        borderRadius:12
    },
    text:{
        fontSize:30,
        position:'absolute',
        bottom:10,
        color:'white',
        fontWeight:'bold',

    },
    opacityview:{
        opacity:0.7,
        width:Dimensions.get('screen').width/1.1,
        height:60,
        position:'absolute',
        bottom:0,
        backgroundColor: 'black',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12
    }
});