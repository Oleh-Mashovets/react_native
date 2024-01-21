import React from 'react';
import { Pressable, Platform, StyleSheet} from 'react-native';

export default function CustomPressable ({ children, onPress, style })  {
  const androidRipple = Platform.OS === 'android' ? { ripple: { color: 'rgba(0, 0, 0, 0.2)' } } : {};

  return (
    <Pressable
      android_ripple={androidRipple}
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.4 : 1 },
        styles.pressable,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    paddingHorizontal: 16,
  },
});
