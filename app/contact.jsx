import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, KeyboardAvoidingView, Platform } from "react-native";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    Alert.alert("Success!", `Thank you for reaching out, ${name}!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Adoraríamos ouvir você!!</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Sua Mensagem"
          placeholderTextColor="#aaa"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={5}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Enviar Mensagem</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3E0",  // Creme suave
    padding: 20,
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",  // Branco para o formulário
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#6D4C41",  // Marrom suave para o título
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F5E1C0",  // Creme suave para os inputs
    borderColor: "#D7CCC8",  // Cor de borda suave
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: "#6D4C41",  // Texto em marrom suave
    marginBottom: 15,
  },
  messageInput: {
    height: 120,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#6D4C41",  // Marrom suave para o botão
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#FFFFFF",  // Texto branco no botão
    fontSize: 16,
    fontWeight: "600",
  },
});

