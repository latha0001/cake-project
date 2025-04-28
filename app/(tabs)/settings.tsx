import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Lock, CircleHelp as HelpCircle, LogOut, ChevronRight, Moon, Globe } from 'lucide-react-native';
import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [_, setIsFirstLogin] = useLocalStorage('isFirstLogin', true);

  const resetBirthdayCelebration = () => {
    setIsFirstLogin(true);
    alert('Birthday celebration reset! Go to the Home tab to see it again.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#E0E7FF' }]}>
                <Moon size={20} color="#4F46E5" />
              </View>
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#E0E0E0', true: '#A5B4FC' }}
              thumbColor={darkMode ? '#4F46E5' : '#FFFFFF'}
            />
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#FFE2E5' }]}>
                <Bell size={20} color="#EF4444" />
              </View>
              <Text style={styles.settingText}>Notifications</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#E0E0E0', true: '#FCA5A5' }}
              thumbColor={notifications ? '#EF4444' : '#FFFFFF'}
            />
          </View>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#E0F2FE' }]}>
                <Globe size={20} color="#0EA5E9" />
              </View>
              <Text style={styles.settingText}>Language</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>English</Text>
              <ChevronRight size={18} color="#999999" />
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#E0E7FF' }]}>
                <Lock size={20} color="#4F46E5" />
              </View>
              <Text style={styles.settingText}>Privacy</Text>
            </View>
            <ChevronRight size={18} color="#999999" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#DCFCE7' }]}>
                <HelpCircle size={20} color="#16A34A" />
              </View>
              <Text style={styles.settingText}>Help & Support</Text>
            </View>
            <ChevronRight size={18} color="#999999" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.settingItem}
            onPress={resetBirthdayCelebration}
          >
            <View style={styles.settingLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#FEF3C7' }]}>
                <Bell size={20} color="#D97706" />
              </View>
              <View>
                <Text style={styles.settingText}>Reset Birthday Celebration</Text>
                <Text style={styles.settingDescription}>See the welcome celebration again</Text>
              </View>
            </View>
            <ChevronRight size={18} color="#999999" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#EF4444" />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#333333',
  },
  section: {
    padding: 24,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#666666',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333333',
  },
  settingDescription: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#999999',
    marginTop: 4,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#999999',
    marginRight: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 24,
    backgroundColor: '#FEF2F2',
    borderRadius: 12,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#EF4444',
    marginLeft: 8,
  },
});