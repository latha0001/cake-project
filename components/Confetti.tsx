import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  Easing,
  withRepeat,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const CONFETTI_COLORS = [
  '#FF5757', // Red
  '#FF9A5A', // Orange
  '#FFDE59', // Yellow
  '#5CE1E6', // Cyan
  '#38B6FF', // Blue
  '#BD4CE6', // Purple
  '#FF66C4', // Pink
];

const NUM_CONFETTI = 50;

interface ConfettiPieceProps {
  color: string;
  size: number;
  position: { x: number; y: number };
  delay: number;
}

const ConfettiPiece = ({ color, size, position, delay }: ConfettiPieceProps) => {
  const translateY = useSharedValue(-50);
  const translateX = useSharedValue(position.x);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(1);
  
  useEffect(() => {
    // Random horizontal movement
    const randomX = Math.random() * 100 - 50;
    
    translateY.value = withDelay(
      delay,
      withTiming(height + 100, { duration: 3000 + Math.random() * 2000 })
    );
    
    translateX.value = withDelay(
      delay,
      withTiming(position.x + randomX, { duration: 3000 + Math.random() * 2000 })
    );
    
    rotate.value = withDelay(
      delay,
      withRepeat(
        withTiming(360, { duration: 2000, easing: Easing.linear }),
        -1, // Infinite
        false // Don't reverse
      )
    );
    
    opacity.value = withDelay(
      delay,
      withSequence(
        withTiming(1, { duration: 300 }),
        withTiming(1, { duration: 2000 }),
        withTiming(0, { duration: 700 })
      )
    );
  }, []);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { rotate: `${rotate.value}deg` },
      ],
      opacity: opacity.value,
    };
  });
  
  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: size,
          height: size * 0.4,
          backgroundColor: color,
          borderRadius: 1,
          top: -size,
          left: position.x - size / 2,
        },
        animatedStyle,
      ]}
    />
  );
};

export function Confetti() {
  // Generate an array of confetti pieces with random properties
  const confetti = [...Array(NUM_CONFETTI)].map((_, i) => ({
    id: i,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: Math.random() * 8 + 4,
    position: {
      x: Math.random() * width,
      y: -20,
    },
    delay: Math.random() * 1000,
  }));
  
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {confetti.map((piece) => (
        <ConfettiPiece
          key={piece.id}
          color={piece.color}
          size={piece.size}
          position={piece.position}
          delay={piece.delay}
        />
      ))}
    </View>
  );
}