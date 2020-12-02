"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _this = void 0,
  _jsxFileName =
    "/Users/robertbalonek/code/projects/react-native/news-api-app/Components/NewsCard.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _Dimensions$get = _reactNative.Dimensions.get("window"),
  width = _Dimensions$get.width,
  height = _Dimensions$get.height;

var NewsCard = function NewsCard(_ref) {
  var item = _ref.item;
  // console.log(item.url);
  return (
    /*#__PURE__*/
    _react["default"].createElement(
      _reactNative.View,
      {
        style: styles.cardView,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/
      _react["default"].createElement(
        _reactNative.Text,
        {
          onPress: function onPress() {
            _reactNative.Linking.openURL("".concat(item.url)); //"https://aboutreact.com"
          },
          style: styles.title,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 7,
          },
        },
        item.title
      ),
      /*#__PURE__*/
      _react["default"].createElement(
        _reactNative.Text,
        {
          style: styles.author,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 7,
          },
        },
        item.author
      ),
      /*#__PURE__*/
      _react["default"].createElement(_reactNative.Image, {
        style: styles.image,
        source: {
          uri: item.urlToImage,
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7,
        },
      }),
      /*#__PURE__*/
      _react["default"].createElement(
        _reactNative.Text,
        {
          style: styles.description,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 7,
          },
        },
        item.description
      )
    )
  );
};

var styles = _reactNative.StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    margin: width * 0.02,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: {
      width: 0.5,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  title: {
    marginHorizontal: width * 0.05,
    margin: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  author: {
    marginVertical: height * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
  image: {
    // width: width,
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  description: {
    // width: width,
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    // margin: width * 0.05,
    color: "gray",
    fontSize: 18,
  },
});

var _default = NewsCard;
exports["default"] = _default;
