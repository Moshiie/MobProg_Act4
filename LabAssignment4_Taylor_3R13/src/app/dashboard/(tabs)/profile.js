import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const Profile = () => {
  const [name, setName] = useState('Kristy Kate P. Taylor');
  const [email, setEmail] = useState('kristeaiko@gmail.com');
  const [phone, setPhone] = useState('977 402 9167');
  const [bio, setBio] = useState('Prinsipal gusto ko nga mag-artista, Gikapoy na kog eskwela, Way allowance hagbong pa,');

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.profileImage}
        />
      </View>

      {/* Form Fields */}
      <View style={styles.form}>
        {/* Name Field */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Enter your name"
        />

        {/* Email Field */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        {/* Phone Field */}
        <Text style={styles.label}>Phone</Text>
        <View style={styles.phoneContainer}>
          <Text style={styles.countryCode}>+966</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.phoneInput}
            placeholder="Phone number"
            keyboardType="phone-pad"
          />
        </View>

        {/* Bio Field */}
        <Text style={styles.label}>Bio</Text>
        <TextInput
          value={bio}
          onChangeText={setBio}
          style={styles.bioInput}
          placeholder="Write a short bio"
          multiline
          maxLength={150}
        />
        <Text style={styles.characterCount}>{bio.length}/150 characters</Text>

        {/* Update Button */}
        <Button
          mode="contained"
          onPress={() => console.log('Update Profile')}
          style={styles.updateButton}
        >
          Update
        </Button>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  form: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  countryCode: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
  },
  bioInput: {
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
    height: 80,
  },
  characterCount: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
    textAlign: 'right',
  },
  updateButton: {
    marginTop: 20,
    backgroundColor: '#0056D2',
    borderRadius: 8,
    paddingVertical: 10,
  },
});
