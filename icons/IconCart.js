import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const IconCart = () => {
  return (
    <View style={styles.container}>
      <Svg
        width="28"
        height="25"
        viewBox="0 0 28 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M9.25 24.9062C9.83016 24.9062 10.3866 24.6758 10.7968 24.2655C11.207 23.8553 11.4375 23.2989 11.4375 22.7188C11.4375 22.1386 11.207 21.5822 10.7968 21.172C10.3866 20.7617 9.83016 20.5312 9.25 20.5312C8.66984 20.5312 8.11344 20.7617 7.7032 21.172C7.29297 21.5822 7.0625 22.1386 7.0625 22.7188C7.0625 23.2989 7.29297 23.8553 7.7032 24.2655C8.11344 24.6758 8.66984 24.9062 9.25 24.9062Z"
          fill="#25292C"
        />
        <Path
          d="M21.625 24.9062C22.2052 24.9062 22.7616 24.6758 23.1718 24.2655C23.582 23.8553 23.8125 23.2989 23.8125 22.7188C23.8125 22.1386 23.582 21.5822 23.1718 21.172C22.7616 20.7617 22.2052 20.5312 21.625 20.5312C21.0448 20.5312 20.4884 20.7617 20.0782 21.172C19.668 21.5822 19.4375 22.1386 19.4375 22.7188C19.4375 23.2989 19.668 23.8553 20.0782 24.2655C20.4884 24.6758 21.0448 24.9062 21.625 24.9062Z"
          fill="#25292C"
        />
        <Path
          d="M5.11285 5.79963H26.5L23.6273 15.7284C23.5133 16.1221 23.2724 16.4684 22.941 16.7148C22.6096 16.9612 22.2059 17.0942 21.791 17.0937H9.82316C9.40825 17.0942 9.0045 16.9612 8.67312 16.7148C8.34175 16.4684 8.10081 16.1221 7.98685 15.7284L3.94417 1.77642C3.88719 1.57957 3.76673 1.40643 3.60104 1.28324C3.43535 1.16004 3.23347 1.09352 3.02602 1.09375H1.5"
          stroke="#25292C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default IconCart;
