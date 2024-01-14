import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RowText =( props ) => {
    const {messageOne, messageTwo, containerStyles, messageOneStyles, messageTwoStyles} = props;
    return (
        <View style={styles.containerStyles}>
          <Text style={styles.messageOneStyles}>{messageOne} </Text>
          <Text style={styles.messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    messageOneStyles: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    messageTwoStyles: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
});

export default RowText;