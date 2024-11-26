import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Recover = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recover Password</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          label="Email"
          placeholder="Enter your email"
          style={styles.textInput}
          mode="outlined"
          left={<TextInput.Icon icon="email" />}
        />
        <Button
          mode="contained"
          onPress={() => console.log("Recovery email sent")}
          style={styles.recoveryButton}
        >
          Send Recovery Email
        </Button>
      </View>
      <View style={styles.footer}>
        <Button
          mode="text"
          onPress={() => router.push('/login')}
          style={styles.link}
        >
          Back to Login
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Recover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 15,
  },
  recoveryButton: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: '#0056D2',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  link: {
    color: '#0056D2',
    textDecorationLine: 'underline',
  },
});
