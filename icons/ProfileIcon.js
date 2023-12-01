import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';

const ProfileIcon = ({color, size}) => {
  return (
    <View style={styles.container}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M12 11.1428C13.1366 11.1428 14.2267 10.6913 15.0304 9.88758C15.8342 9.08386 16.2857 7.99377 16.2857 6.85713C16.2857 5.72048 15.8342 4.6304 15.0304 3.82667C14.2267 3.02294 13.1366 2.57141 12 2.57141C10.8633 2.57141 9.77325 3.02294 8.96952 3.82667C8.16579 4.6304 7.71426 5.72048 7.71426 6.85713C7.71426 7.99377 8.16579 9.08386 8.96952 9.88758C9.77325 10.6913 10.8633 11.1428 12 11.1428Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.42856 20.5714L3.84555 17.9443C4.15392 16.0016 5.82904 14.5714 7.7961 14.5714H16.2039C18.1709 14.5714 19.846 16.0016 20.1544 17.9443L20.5714 20.5714"
          stroke={color}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileIcon;
