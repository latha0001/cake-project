import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { BirthdayCelebration } from '@/components/BirthdayCelebration';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [isFirstLogin, setIsFirstLogin] = useLocalStorage('isFirstLogin', true);
  const [userName, setUserName] = useLocalStorage('userName', 'Friend');
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (isFirstLogin) {
      // Short delay for a better UX
      const timer = setTimeout(() => {
        setShowCelebration(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isFirstLogin]);

  const handleDismissCelebration = () => {
    setShowCelebration(false);
    setIsFirstLogin(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome, {userName}!</Text>
        <Text style={styles.subTitle}>Let's explore what's new today</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Content</Text>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/3379323/pexels-photo-3379323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
                style={styles.cardImage} 
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Daily Top Picks</Text>
                <Text style={styles.cardDescription}>Discover the best content curated just for you</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.card}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
                style={styles.cardImage} 
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Trending Now</Text>
                <Text style={styles.cardDescription}>See what everyone is talking about today</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Added</Text>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
                style={styles.cardImage} 
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Team Updates</Text>
                <Text style={styles.cardDescription}>Latest announcements from your team</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.card}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
                style={styles.cardImage} 
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>New Features</Text>
                <Text style={styles.cardDescription}>Check out the latest app improvements</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {showCelebration && (
        <BirthdayCelebration 
          userName={userName}
          onDismiss={handleDismissCelebration}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#222222',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666666',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#333333',
    marginBottom: 16,
    marginLeft: 8,
  },
  cardContainer: {
    flexDirection: Platform.OS === 'web' && window.innerWidth > 768 ? 'row' : 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    width: Platform.OS === 'web' && window.innerWidth > 768 ? '48%' : '100%',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#222222',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    lineHeight: 20,
  },
});