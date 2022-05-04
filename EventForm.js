import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from './util.js';

class EventForm extends Component {
    state = {
        title: '',
        date: Date.now(),
        showDatePicker: false
    }

    handleChangeTitle = (value) => {
        this.setState({ title: value });
    }

    handleDatePress = () => {
        this.setState({showDatePicker: true});
    }

    handleDatePickerHide = () => {
        this.setState({showDatePicker: false});
    }

    handleDatePicked = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.date;
        this.state.date = currentDate;
        this.handleDatePickerHide();
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.text}
                    placeholder='Event title'
                    value={this.state.title}
                    onChangeText={this.handleChangeTitle}
                />
                <TextInput
                    style={styles.text}
                    placeholder='Event date'
                    value={formatDate(this.state.date)}
                    editable={!this.state.showDatePicker}
                    onFocus={this.handleDatePicked}
                />
                {this.state.showDatePicker && <DateTimePicker
                    value={this.state.date}
                    mode='datetime'
                    is24Hour={true}
                    onChange={this.handleDatePicked}
                />}
                <Button
                    title='Add'
                    onPress={() => {this.props.navigation.goBack();}}
                ></Button>
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