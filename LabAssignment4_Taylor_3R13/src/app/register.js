import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create an Account</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          label="Email"
          placeholder="Email"
          style={styles.textInput}
          mode="outlined"
          left={<TextInput.Icon icon="email" />}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          label="Password"
          placeholder="Password"
          style={styles.textInput}
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          label="Confirm Password"
          placeholder="Confirm Password"
          style={styles.textInput}
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
        />
        <Button
          mode="contained"
          onPress={() => console.log("Register")}
          style={styles.registerButton}
        >
          Sign Up
        </Button>
      </View>
      <View style={styles.footer}>
        <Link href="/login" style={styles.link}>
          Already have an account? Log In
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
    marginBottom: 10,
  },
  form: {
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 15,
  },
  registerButton: {
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
