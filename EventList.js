import React, { Component } from 'react';
import { Text, FlatList, View, Button, StyleSheet } from 'react-native';
import EventCard from './EventCard';

class EventList extends Component {
    state = {
        events: []
    };

    componentDidMount() {
        const events = require('./data.json').events;
        this.setState({ events });
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.events}
                    renderItem={({ item }) => <EventCard eventItem={item} />}
                    style={styles.eventList}
                ></FlatList>
                <Button
                    onPress={() => this.props.navigation.navigate('EventForm')}
                    title='Add event'
                ></Button>
            </View>
        );
    };
};

export default EventList;

const styles = StyleSheet.create({
    eventList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});