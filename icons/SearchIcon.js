import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path, G} from 'react-native-svg';

const SearchIcon = ({color, size}) => {
  return (
    <View style={styles.container}>
      <Svg
        width="27"
        height="21"
        viewBox="0 0 27 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <G id="Group 57">
          <Path
            id="Vector"
            d="M1 13H9"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            id="Vector_2"
            d="M1 6H7"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            id="Vector_3"
            d="M1 20H23"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <G id="Group 28">
            <Path
              id="Vector_4"
              d="M18.1249 13.2486C19.7493 13.2486 21.3072 12.6034 22.4559 11.4549C23.6045 10.3063 24.2498 8.74859 24.2498 7.12432C24.2498 5.50005 23.6045 3.94231 22.4559 2.79377C21.3072 1.64524 19.7493 1 18.1249 1C16.5005 1 14.9426 1.64524 13.7939 2.79377C12.6453 3.94231 12 5.50005 12 7.12432C12 8.74859 12.6453 10.3063 13.7939 11.4549C14.9426 12.6034 16.5005 13.2486 18.1249 13.2486Z"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              id="Vector_5"
              d="M22.4557 11.4561L26 15"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
        </G>
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

export default SearchIcon;
