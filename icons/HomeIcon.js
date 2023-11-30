import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';

const HomeIcon = ({color, size}) => {
  return (
    <View style={styles.container}>
      <Svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M17 23.9832V17.8909C17 17.6216 16.8946 17.3633 16.7071 17.1729C16.5196 16.9824 16.2652 16.8755 16 16.8755H12C11.7348 16.8755 11.4804 16.9824 11.2929 17.1729C11.1054 17.3633 11 17.6216 11 17.8909V23.9832C11 24.2525 10.8946 24.5108 10.7071 24.7012C10.5196 24.8917 10.2652 24.9986 10 24.9986H4C3.73478 24.9986 3.48043 24.8917 3.29289 24.7012C3.10536 24.5108 3 24.2525 3 23.9832V12.2425C3.00229 12.102 3.03226 11.9634 3.08813 11.8348C3.14401 11.7062 3.22466 11.5903 3.32533 11.4939L13.3253 2.26591C13.5096 2.09485 13.7503 2 14 2C14.2497 2 14.4904 2.09485 14.6747 2.26591L24.6747 11.4939C24.7754 11.5902 24.8561 11.7062 24.912 11.8348C24.9678 11.9633 24.9978 12.102 25 12.2425V23.9846C25 24.2539 24.8946 24.5122 24.7071 24.7026C24.5196 24.893 24.2652 25 24 25H18C17.7348 25 17.4804 24.893 17.2929 24.7026C17.1054 24.5122 17 24.2525 17 23.9832Z"
          stroke={color}
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
export default HomeIcon;
