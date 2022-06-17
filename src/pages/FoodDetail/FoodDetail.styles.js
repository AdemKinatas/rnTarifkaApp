import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    cardBody: {
        margin: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#a52a2a',
    },
    country: {
        fontSize: 24,
        color: '#a52a2a',
        fontWeight: 'bold',
    },
    border: {
        borderBottomColor: '#c3c3c3',
        borderWidth: 1,
    },
    instructions: {
        fontSize: 18,
        color: 'black',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});