import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';

const IconLocation = () => {
  return (
    <View style={styles.container}>
      <Svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M8 1C6.54185 1.00176 5.14393 1.58179 4.11286 2.61286C3.08179 3.64393 2.50176 5.04185 2.5 6.5C2.5 11.2067 7.5 14.7627 7.71267 14.9127C7.79776 14.9694 7.89773 14.9997 8 14.9997C8.10227 14.9997 8.20224 14.9694 8.28733 14.9127C8.5 14.7627 13.5 11.206 13.5 6.5C13.4982 5.04185 12.9182 3.64393 11.8871 2.61286C10.8561 1.58179 9.45815 1.00176 8 1ZM8 4.5C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5C10 7.03043 9.78929 7.53914 9.41421 7.91421C9.03914 8.28929 8.53043 8.5 8 8.5C7.46957 8.5 6.96086 8.28929 6.58579 7.91421C6.21071 7.53914 6 7.03043 6 6.5C6 5.96957 6.21071 5.46086 6.58579 5.08579C6.96086 4.71071 7.46957 4.5 8 4.5Z"
          fill="#25292C"
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
export default IconLocation;
