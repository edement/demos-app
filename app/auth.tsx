import Logo from "@/assets/images/auth-page-logo.svg";
import GlowCircle from "@/components/ui/background-blobs";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

function toMain() {
  router.replace('/(tabs)/feed')
}

function LoginForm({ onGoRegister }: { onGoRegister: () => void}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >    
                <View style={styles.container}>
                    <GlowCircle id="auth-circle1" size={270} opacity={0.3} top={-75} left={-165} />
                    <GlowCircle id="auth-circle2" size={300} opacity={0.3} top={-150} left={175} />
                    <GlowCircle id="auth-circle3" size={300} opacity={0.3} top={270} left={100} />
                    <GlowCircle id="auth-circle4" size={350} opacity={0.3} top={520} left={250} />
                    <GlowCircle id="auth-circle1" size={200} opacity={0.3} top={700} left={-100} />
                    

                    <View style={styles.logo}><Logo /></View>
                    <View style={styles.login}>
                        <Text style={styles.loginText}>Вход</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="your@mail.com"
                            placeholderTextColor={colors.textInputGray}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Your password"
                            placeholderTextColor={colors.textInputGray}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.forgot}>
                            <Text style={styles.forgotText}>Забыли пароль?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.signBtn} onPress={toMain}>
                        <Text style={styles.signBtnText}>ВОЙТИ</Text>
                    </TouchableOpacity>
                    <View style={styles.otherAccounts}>
                        <Text style={styles.or}>ИЛИ</Text>
                        <TouchableOpacity style={styles.account}>
                            <Text style={styles.accountText}>Войти с Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.account}>
                            <Text style={styles.accountText}>Войти с Apple</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.redirect}>
                        <Text style={styles.redirectText}>Нет аккаунта? </Text>
                        <TouchableOpacity onPress={onGoRegister}>
                            <Text style={styles.redirectBtn}>Регистриция</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

function RegisterForm({ onGoLogin }: { onGoLogin: () => void}) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >    
                <View style={styles.container}>
                    <GlowCircle id="circle1" size={270} opacity={0.3} top={-75} left={-165} />
                    <GlowCircle id="circle2" size={300} opacity={0.3} top={-150} left={175} />
                    <GlowCircle id="circle3" size={300} opacity={0.3} top={270} left={100} />
                    <GlowCircle id="circle4" size={350} opacity={0.3} top={520} left={250} />
                    <GlowCircle id="circle1" size={200} opacity={0.3} top={700} left={-100} />
                    
                    <View style={styles.register}>
                        <Text style={styles.registerText}>Регистрация</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor={colors.textInputGray}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="your@mail.com"
                            placeholderTextColor={colors.textInputGray}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Your password"
                            placeholderTextColor={colors.textInputGray}
                            secureTextEntry={true}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Confrim password"
                            placeholderTextColor={colors.textInputGray}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.signBtn} onPress={toMain}>
                        <Text style={styles.signBtnText}>ЗАРЕГИСТРИРОВАТЬСЯ</Text>
                    </TouchableOpacity>
                    <View style={styles.otherAccounts}>
                        <Text style={styles.or}>ИЛИ</Text>
                        <TouchableOpacity style={styles.account}>
                            <Text style={styles.accountText}>Войти с Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.account}>
                            <Text style={styles.accountText}>Войти с Apple</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.redirect}>
                        <Text style={styles.redirectText}>Уже есть аккаунт? </Text>
                        <TouchableOpacity onPress={onGoLogin}>
                            <Text style={styles.redirectBtn}>Войти</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default function Auth() {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    return (
       <View style={styles.page}>
            {activeTab === 'login' 
            ? <LoginForm onGoRegister={() => setActiveTab('register')} />
            : <RegisterForm onGoLogin={() => setActiveTab('login')} />
            }
       </View> 
    )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.charcoal,
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center'
  },
  login: {
    paddingTop: 0,
  },
  loginText: {
    color: colors.white,
    fontSize: 24,
  },
  register: {
    paddingTop: 0,
    marginBottom: 20,
  },
  registerText: {
    color: colors.white,
    fontSize: 24,
  },
  input: {
    marginTop: 20,
    paddingVertical: 20,
    paddingLeft: 15,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 12,
    color: colors.white,
    backgroundColor: colors.boxbg,
    borderColor: colors.boxborder,
  },
  forgot: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotText: {
    color: colors.lavanda,
    fontSize: 14,
  },
  signBtn: {
    marginHorizontal: 25,
    marginTop: 35,
    paddingVertical: 20,
    backgroundColor: colors.purple,
    borderRadius: 15,
    alignItems: 'center',
  },
  signBtnText: {
    fontSize: 16,
    color: colors.white,
  },
  otherAccounts: {
    marginTop: 35,
    alignItems: 'center',
  },
  or: {
    fontSize: 16,
    color: colors.textInputGray
  },
  account: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 15,
    color: colors.white,
    backgroundColor: colors.boxbg,
    paddingHorizontal: 45,
    borderRadius: 12,
    shadowColor: colors.white,
    shadowOffset: { width: 10, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  accountText: {
    color: colors.white
  },
  redirect: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  redirectText: {
    fontSize: 15,
    color: colors.white,
  },
  redirectBtn: {
    fontSize: 15,
    color: colors.purple,
  },
});