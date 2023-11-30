import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';

const IconSearch = () => {
  return (
    <View style={styles.container}>
      <Svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M9.75005 18.5001C12.0707 18.5001 14.2963 17.5782 15.9373 15.9373C17.5782 14.2963 18.5001 12.0707 18.5001 9.75005C18.5001 7.42939 17.5782 5.20378 15.9373 3.56283C14.2963 1.92188 12.0707 1 9.75005 1C7.42939 1 5.20378 1.92188 3.56283 3.56283C1.92188 5.20378 1 7.42939 1 9.75005C1 12.0707 1.92188 14.2963 3.56283 15.9373C5.20378 17.5782 7.42939 18.5001 9.75005 18.5001Z"
          stroke="#25292C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.9365 15.939L20.9999 21.0023"
          stroke="#25292C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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

export default IconSearch;
