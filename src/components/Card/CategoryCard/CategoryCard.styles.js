import { StyleSheet } from 'react-native';   

export default StyleSheet.create({
    container:{
        borderTopLeftRadius:40,
        backgroundColor:'white',
        borderBottomLeftRadius:40,
        margin:6,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10
    },
    title:{
        fontSize:24,
        fontWeight:'500',
        color:'black'
    },
    image:{
        width:100,
        height:80,
        resizeMode:'contain',
        marginRight:20
    }
});