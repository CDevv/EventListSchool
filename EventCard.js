import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EventCard({ eventItem }) {
    return (
        <View style={styles.eventCard}>
            <Text style={styles.title}>{eventItem.title} - {eventItem.date}</Text>
            <Text style={styles.description}>{eventItem.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    eventCard: {
        border: '1px solid black',
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: '#04b032',
        width: '30%'
    },
    title: {
        fontSize: '3rem',
        color: '#fff'
    },
    description: {
        fontSize: '1.5rem',
        marginTop: '1rem',
        color: '#fff'
    }
});