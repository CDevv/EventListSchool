import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

class EventForm extends Component {
    state = {
        title: ''
    }

    handleChangeTitle = (value) => {
        this.setState({ title: value });
    }

    render() {
        return (
            <View>
                <Button
                    title='Add'
                    onPress={() => {this.props.navigation.goBack();}}
                ></Button>
                <TextInput
                    style={styles.text}
                    placeholder='Event title'
                    value={this.state.title}
                    onChangeText={this.handleChangeTitle}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    fieldContainer: {
        marginVertical: 20,
        backgroundColor: '#fff'
    },
    text: {
        height: 40,
        paddingHorizontal: 10
    }
});

export default EventForm;