import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Button } from "react-native";
import AboutPopup from "./AboutPopup";
import Modal from "react-native-modal";

export default function AboutButton() {
  const [backgroundBtnStyle, setBackgroundButtonStyle] = useState(
    styles.backgroundBoxUnPressed
  );
  const [buttonStyle, setButtonStyle] = useState(styles.frontBoxUnPressed);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <View style={{ flex: 1 }}>
        <Modal backdropColor={"black"} isVisible={isModalVisible}>
          <View style={({ flex: 1 }, { position: "relative" }, { top: 10 })}>
            <AboutPopup />

            <Button title="X" color="white" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
      <View style={backgroundBtnStyle}>
        <Pressable
          style={buttonStyle}
          onPressIn={() => {
            setButtonStyle(styles.frontBoxPressed);
            setBackgroundButtonStyle(styles.backgroundBoxPressed);
          }}
          onPressOut={() => {
            setButtonStyle(styles.frontBoxUnPressed);
            setBackgroundButtonStyle(styles.backgroundBoxUnPressed);
            toggleModal();
          }}
        >
          <Text style={styles.text}>About</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    position: "relative",
    fontSize: 12,
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  buttonHide: {
    color: "white",
    backgroundColor: "white",
    height: "100",
    width: "100",
  },
  backgroundBoxUnPressed: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 25,
  },
  backgroundBoxPressed: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 25,
  },
  frontBoxUnPressed: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "relative",
    top: -4,
    right: 0,
    borderRadius: 25,
    borderWidth: 1.5,
    borderTopColor: "rgba(255, 255, 255, 0.6)",
    borderLeftColor: "rgba(255, 255, 255, 0.4)",
    borderRightColor: "rgba(255, 255, 255, 0.2)",
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    textAlign: "center",
    justifyContent: "center",
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  frontBoxPressed: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    position: "relative",
    top: 0,
    right: 0,
    borderRadius: 25,
    borderWidth: 1.5,
    borderTopColor: "rgba(255, 255, 255, 0.5)",
    borderLeftColor: "rgba(255, 255, 255, 0.4)",
    borderRightColor: "rgba(255, 255, 255, 0.3)",
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    textAlign: "center",
    justifyContent: "center",
  },
});
