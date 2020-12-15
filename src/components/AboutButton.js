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
    backgroundColor: "grey",
    borderRadius: 25,
  },
  backgroundBoxPressed: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    borderRadius: 25,
  },
  frontBoxUnPressed: {
    height: 45,
    width: 50,
    backgroundColor: "green", //"#f6f6f6",
    position: "relative",
    top: -4,
    right: -0,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 27,
    },
    textAlign: "center",
    justifyContent: "center",
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 10,
    borderWidth: 0.25,
  },
  frontBoxPressed: {
    height: 40,
    width: 40,
    backgroundColor: "yellow", //"#f6f6f6",
    position: "relative",
    top: 4,
    right: -5,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 70,
    textAlign: "center",
    justifyContent: "center",
  },
});
