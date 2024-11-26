import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { Card, Button, ProgressBar } from 'react-native-paper';

const Home = () => {
  const recentlyAccessedCourses = [
    {
      id: '1',
      title: '2024-1 Mobile Programming',
      subtitle: 'Mobile Programming | IT313',
      color: '#4CAF50',
    },
    {
      id: '2',
      title: '2024-1 Information Assurance and Security',
      subtitle: 'Information Assurance and Security | IT311',
      color: '#2196F3',
    },
    {
      id: '3',
      title: '2024-1 Software Engineering',
      subtitle: 'Software Engineering | IT314',
      color: '#FF9800',
    },
  ];

  const courseOverview = [
    {
      id: '1',
      title: '2024-1 Mobile Programming',
      subtitle: 'Mobile Programming | IT313',
      progress: 0.99, 
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Recently accessed courses</Text>
        <FlatList
          horizontal
          data={recentlyAccessedCourses}
          renderItem={({ item }) => (
            <Card style={[styles.courseCard, { backgroundColor: item.color }]}>
              <Card.Content>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseSubtitle}>{item.subtitle}</Text>
              </Card.Content>
            </Card>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Course overview</Text>
        <TextInput
          style={styles.filterInput}
          placeholder="Filter my courses"
        />
        <FlatList
          data={courseOverview}
          renderItem={({ item }) => (
            <Card style={styles.overviewCard}>
              <Card.Content>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseSubtitle}>{item.subtitle}</Text>
                <ProgressBar progress={item.progress} style={styles.progressBar} color="green" />
                <Text style={styles.progressText}>{Math.round(item.progress * 100)}%</Text>
              </Card.Content>
            </Card>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseCard: {
    width: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  courseSubtitle: {
    fontSize: 12,
    color: 'black',
  },
  filterInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  overviewCard: {
    marginBottom: 10,
    borderRadius: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  progressText: {
    fontSize: 12,
    color: '#4CAF50',
    marginTop: 5,
  },
});
