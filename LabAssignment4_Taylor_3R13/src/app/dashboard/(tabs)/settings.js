import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const settingsOptions = [
    { icon: 'bell', label: 'Notifications' },
    { icon: 'shield', label: 'Privacy Settings' },
    { icon: 'account', label: 'Account Settings' },
    { icon: 'help-circle', label: 'Help & Support' },
    { icon: 'web', label: 'Language Preferences' },
    { icon: 'palette', label: 'Theme Settings' },
    { icon: 'data-usage', label: 'Data Usage' },
    { icon: 'message', label: 'Feedback' },
  ];

  const dynamicStyles = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#333',
    borderBottomColor: darkMode ? '#555' : '#eee',
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: dynamicStyles.backgroundColor }]}>
      <View style={[styles.item, { borderBottomColor: dynamicStyles.borderBottomColor }]}>
        <View style={styles.itemContent}>
          <MaterialCommunityIcons name="moon-waning-crescent" size={24} color={dynamicStyles.color} />
          <Text style={[styles.itemLabel, { color: dynamicStyles.color }]}>Dark Mode</Text>
        </View>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: '#ccc', true: '#6200EE' }}
          thumbColor={darkMode ? '#6200EE' : '#f4f3f4'}
        />
      </View>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.item, { borderBottomColor: dynamicStyles.borderBottomColor }]}
        >
          <View style={styles.itemContent}>
            <MaterialCommunityIcons name={option.icon} size={24} color={dynamicStyles.color} />
            <Text style={[styles.itemLabel, { color: dynamicStyles.color }]}>{option.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.logoutButton}>
        <MaterialCommunityIcons name="logout" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
