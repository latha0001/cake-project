import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { 
  Path, 
  Circle, 
  Rect, 
  Defs, 
  LinearGradient, 
  Stop 
} from 'react-native-svg';

interface CakeIconProps {
  size?: number;
}

export function CakeIcon({ size = 120 }: CakeIconProps) {
  const scale = size / 120;
  
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox="0 0 120 120">
        <Defs>
          <LinearGradient id="cakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#FF9A9E" />
            <Stop offset="100%" stopColor="#FF5757" />
          </LinearGradient>
          <LinearGradient id="icingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#FFFFFF" />
            <Stop offset="100%" stopColor="#F0F0F0" />
          </LinearGradient>
          <LinearGradient id="candleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#FFDA7B" />
            <Stop offset="100%" stopColor="#FFAA00" />
          </LinearGradient>
          <LinearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#FFD500" />
            <Stop offset="100%" stopColor="#FF5C00" />
          </LinearGradient>
          <LinearGradient id="plateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#FFFFFF" />
            <Stop offset="100%" stopColor="#E0E0E0" />
          </LinearGradient>
        </Defs>
        
        {/* Plate */}
        <Circle cx="60" cy="95" r="25" fill="url(#plateGradient)" />
        <Circle cx="60" cy="95" r="22" fill="url(#plateGradient)" stroke="#F0F0F0" strokeWidth="0.5" />
        
        {/* Cake Bottom Layer */}
        <Rect x="35" y="65" width="50" height="25" rx="3" fill="url(#cakeGradient)" />
        
        {/* Cake Middle Layer */}
        <Rect x="38" y="55" width="44" height="15" rx="3" fill="url(#cakeGradient)" />
        
        {/* Cake Top Layer */}
        <Rect x="42" y="45" width="36" height="15" rx="3" fill="url(#cakeGradient)" />
        
        {/* Icing Drips */}
        <Path d="M35 65 Q37 68 40 65 Q43 68 46 65 Q49 68 52 65 Q55 68 58 65 Q61 68 64 65 Q67 68 70 65 Q73 68 76 65 Q79 68 82 65 Q85 68 85 65" 
              fill="none" stroke="url(#icingGradient)" strokeWidth="3" strokeLinecap="round" />
        
        <Path d="M38 55 Q40 58 43 55 Q46 58 49 55 Q52 58 55 55 Q58 58 61 55 Q64 58 67 55 Q70 58 73 55 Q76 58 79 55 Q82 58 82 55" 
              fill="none" stroke="url(#icingGradient)" strokeWidth="3" strokeLinecap="round" />
        
        <Path d="M42 45 Q44 48 47 45 Q50 48 53 45 Q56 48 59 45 Q62 48 65 45 Q68 48 71 45 Q74 48 77 45 Q80 48 78 45" 
              fill="none" stroke="url(#icingGradient)" strokeWidth="3" strokeLinecap="round" />
        
        {/* Candle */}
        <Rect x="58" y="20" width="4" height="25" rx="1" fill="url(#candleGradient)" />
        
        {/* Flame */}
        <Path d="M60 15 Q57 12 58 8 Q59 5 60 6 Q61 5 62 8 Q63 12 60 15" fill="url(#flameGradient)" />
        
        {/* Decorations */}
        <Circle cx="45" cy="60" r="2" fill="#FFD3E0" />
        <Circle cx="55" cy="60" r="2" fill="#FFD3E0" />
        <Circle cx="65" cy="60" r="2" fill="#FFD3E0" />
        <Circle cx="75" cy="60" r="2" fill="#FFD3E0" />
        
        <Circle cx="50" cy="50" r="2" fill="#FFD3E0" />
        <Circle cx="60" cy="50" r="2" fill="#FFD3E0" />
        <Circle cx="70" cy="50" r="2" fill="#FFD3E0" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});