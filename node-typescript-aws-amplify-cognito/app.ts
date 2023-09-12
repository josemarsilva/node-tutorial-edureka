import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

async function signUp(username: string, password: string, attributes: any) {
  try {
    const user = await Auth.signUp({
      username,
      password,
      attributes,
    });
    console.log('Sign-up successful:', user);
  } catch (error) {
    console.error('Sign-up error:', error);
  }
}

async function signIn(username: string, password: string) {
  try {
    const user = await Auth.signIn(username, password);
    console.log('Sign-in successful:', user);
  } catch (error) {
    console.error('Sign-in error:', error);
  }
}

async function forgotPassword(username: string) {
  try {
    await Auth.forgotPassword(username);
    console.log('Password reset email sent.');
  } catch (error) {
    console.error('Forgot password error:', error);
  }
}

async function changePassword(username: string, newPassword: string, code: string) {
  try {
    await Auth.forgotPasswordSubmit(username, code, newPassword);
    console.log('Password changed successfully.');
  } catch (error) {
    console.error('Password change error:', error);
  }
}

// Substitua com os valores apropriados para testar as funções
signUp('testuser', 'TestPassword123', { name: 'John', family_name: 'Doe', email: 'test@example.com', 'custom:cnpj3': '123456789' });
signIn('testuser', 'TestPassword123');
// Esqueceu a senha e redefinir a senha
//forgotPassword('testuser');
//changePassword('testuser', 'NewPassword123', 'CodeFromEmail');
