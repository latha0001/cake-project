import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  Easing,
  withRepeat,
} from 'react-native-reanimated';
import { CakeIcon } from './CakeIcon';
import { Confetti } from './Confetti';

const { width, height } = Dimensions.get('window');

interface BirthdayCelebrationProps {
  userName: string;
  onDismiss: () => void;
}

export function BirthdayCelebration({ userName, onDismiss }: BirthdayCelebrationProps) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const candleGlow = useSharedValue(0.5);
  
  useEffect(() => {
    // Animate the modal in
    opacity.value = withTiming(1, { duration: 600 });
    scale.value = withTiming(1, { 
      duration: 600, 
      easing: Easing.out(Easing.back(2))
    });
    
    // Animate the candle glow
    candleGlow.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000 }),
        withTiming(0.5, { duration: 1000 })
      ),
      -1, // Infinite
      true // Reverse
    );
  }, []);
  
  const containerStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });
  
  const candleGlowStyle = useAnimatedStyle(() => {
    return {
      opacity: candleGlow.value,
    };
  });
  
  const handleDismiss = () => {
    opacity.value = withTiming(0, { duration: 400 });
    scale.value = withTiming(0.8, { duration: 400 });
    
    setTimeout(onDismiss, 400);
  };
  
  return (
    <View style={styles.overlay}>
      {Platform.OS === 'ios' || Platform.OS === 'android' ? (
        <BlurView intensity={40} style={StyleSheet.absoluteFill} tint="dark" />
      ) : (
        <View style={[StyleSheet.absoluteFill, styles.webBlur]} />
      )}
      
      <Confetti />
      
      <Animated.View style={[styles.container, containerStyle]}>
        <Text style={styles.title}>Welcome!</Text>
        
        <View style={styles.cakeContainer}>
          <CakeIcon size={150} />
          <Animated.View style={[styles.candleGlow, candleGlowStyle]} />
        </View>
        
        <Text style={styles.welcomeText}>
          Happy to have you here, <Text style={styles.userName}>{userName}</Text>!
        </Text>
        
        <Text style={styles.message}>
          We're thrilled to welcome you to our community. Get ready for an amazing experience ahead!
        </Text>
        
        <TouchableOpacity style={styles.button} onPress={handleDismiss}>
          <Text style={styles.buttonText}>Let's Begin</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  webBlur: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    width: width * 0.85,
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontFamily: 'DancingScript-Bold',
    color: '#FF5757',
    marginBottom: 24,
    textAlign: 'center',
  },
  cakeContainer: {
    position: 'relative',
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  candleGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: 40,
    height: 40,
    backgroundColor: '#FFCC00',
    borderRadius: 20,
    opacity: 0.7,
    transform: [{ translateX: 55 }, { translateY: -5 }],
    zIndex: -1,
  },
  welcomeText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 16,
  },
  userName: {
    color: '#FF5757',
    fontFamily: 'Inter-Bold',
  },
  message: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FF5757',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
});