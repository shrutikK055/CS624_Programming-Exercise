import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
    >
      <View>
        <Image source={require('./assets/icon.png')} style={styles.image} />

        <Text style={styles.label}>Which course did you like?</Text>
        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />

        <Text style={styles.sectionTitle}>Core Requirements (24 credits)</Text>
        <Text style={styles.course}>CS 504 Software Engineering</Text>
        <Text style={styles.course}>CS 506 Programming for Computing</Text>
        <Text style={styles.course}>CS 519 Cloud Computing Overview</Text>
        <Text style={styles.course}>CS 533 Computer Architecture</Text>
        <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
        <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text style={styles.course}>DS 510 Artificial Intelligence for Data Science</Text>
        <Text style={styles.course}>DS 620 Machine Learning & Deep Learning</Text>

        <Text style={styles.sectionTitle}>Depth of Study (6 credits)</Text>
        <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
        <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>

        <Text style={styles.sectionTitle}>Capstone (3 credits)</Text>
        <Text style={styles.course}>CS 690 Computer Science Capstone</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1, // 👈 This enables scroll even on web
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 20,
    borderRadius: 5,
  },
  sectionTitle: {
    backgroundColor: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    marginTop: 20,
  },
  course: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default CoreComponents;
