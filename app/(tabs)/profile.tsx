import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, CreditCard as Edit, Heart, Calendar, Clock } from 'lucide-react-native';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function ProfileScreen() {
  const [userName] = useLocalStorage('userName', 'Friend');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileHeader}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
              style={styles.profileImage} 
            />
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>{userName}</Text>
              <Text style={styles.profileHandle}>@{userName.toLowerCase()}</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.editButton}>
            <Edit size={16} color="#FFFFFF" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>482</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>146</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityContainer}>
            <View style={styles.activityItem}>
              <View style={styles.activityIconContainer}>
                <Heart size={16} color="#FF5757" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>You liked a post from <Text style={styles.highlightText}>Sarah</Text></Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </View>
            
            <View style={styles.activityItem}>
              <View style={styles.activityIconContainer}>
                <Calendar size={16} color="#4A6FFF" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>You have an upcoming event <Text style={styles.highlightText}>Team Meeting</Text></Text>
                <Text style={styles.activityTime}>Tomorrow at 10:00 AM</Text>
              </View>
            </View>
            
            <View style={styles.activityItem}>
              <View style={styles.activityIconContainer}>
                <Clock size={16} color="#32D74B" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>You completed your daily goals</Text>
                <Text style={styles.activityTime}>Yesterday</Text>
              </View>
            </View>
          </View>
        </View>
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
    backgroundColor: '#F8F8F8',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileNameContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#222222',
  },
  profileHandle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    marginTop: 2,
  },
  editButton: {
    backgroundColor: '#FF5757',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#333333',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    marginTop: 4,
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: '#EEEEEE',
    marginHorizontal: 8,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#333333',
    marginBottom: 16,
  },
  activityContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  activityItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  activityIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#444444',
  },
  highlightText: {
    fontFamily: 'Inter-SemiBold',
    color: '#333333',
  },
  activityTime: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#888888',
    marginTop: 4,
  },
});