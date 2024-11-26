import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Please log in to continue</Text>
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
          secureTextEntry={!isShowPassword}
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              onPress={() => setIsShowPassword(!isShowPassword)}
              icon={isShowPassword ? 'eye' : 'eye-off'}
            />
          }
        />
        <Button
          mode="contained"
          onPress={() => router.replace('dashboard')}
          style={styles.loginButton}
        >
          Login
        </Button>
      </View>
      <View style={styles.footer}>
        <Link href="register" style={styles.link}>
          Don't have an account? Sign Up
        </Link>
        <Link href="recover" style={styles.link}>
          Forgot your password?
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  form: {
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 15,
  },
  loginButton: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: '#0056D2',
  },
  footer: {
    alignItems: 'center',
  },
  link: {
    color: '#0056D2',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
