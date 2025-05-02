import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: "You", message: userMessage, isUser: true }]);
    const msgToSend = userMessage;
    setUserMessage("");

    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msgToSend }),
      });
      const data = await response.json();
      addBotReply(data.reply);
    } catch (error) {
      console.error("Error:", error);
      addBotReply("Sorry, there was an error connecting to the chatbot.");
    }
  };

  const addBotReply = (reply) => {
    setMessages(prev => [...prev, { sender: "Bot", message: reply, isUser: false }]);
  };

  return (
    <View style={styles.chatbot}>
      <Text style={styles.title}>Chat with AI</Text>
      <View style={styles.chatbox}>
        <ScrollView style={styles.messages}>
          {messages.map((msg, index) => (
            <View
              key={index}
              style={[styles.message, msg.isUser ? styles.user : styles.bot]}
            >
              <Text><Text style={{ fontWeight: "bold" }}>{msg.sender}:</Text> {msg.message}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={userMessage}
            onChangeText={setUserMessage}
            placeholder="Type a message..."
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <TouchableOpacity onPress={sendMessage} style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatbot: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  chatbox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "100%",
    maxHeight: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  messages: {
    height: 300,
    marginBottom: 15,
  },
  message: {
    padding: 10,
    marginBottom: 8,
    borderRadius: 4,
    maxWidth: "80%",
  },
  user: {
    backgroundColor: "#d1e7ff",
    alignSelf: "flex-end",
  },
  bot: {
    backgroundColor: "#f1f1f1",
    alignSelf: "flex-start",
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
  },
});

export default Chatbot;
