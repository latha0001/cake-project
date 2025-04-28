import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';

const CONVERSATIONS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    lastMessage: 'Hey, are we still meeting later?',
    time: '3m ago',
    unread: 2,
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    lastMessage: 'I sent you the files you requested',
    time: '25m ago',
    unread: 0,
  },
  {
    id: '3',
    name: 'Emily Roberts',
    avatar: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    lastMessage: 'Thanks for your help yesterday!',
    time: '2h ago',
    unread: 0,
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    lastMessage: 'When will the new update be ready?',
    time: '1d ago',
    unread: 1,
  },
  {
    id: '5',
    name: 'Lisa Wang',
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    lastMessage: 'Can we reschedule our meeting?',
    time: '2d ago',
    unread: 0,
  },
];

export default function MessagesScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.conversationItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.conversationContent}>
        <View style={styles.conversationHeader}>
          <Text style={styles.conversationName}>{item.name}</Text>
          <Text style={styles.conversationTime}>{item.time}</Text>
        </View>
        <View style={styles.conversationFooter}>
          <Text 
            style={styles.conversationMessage} 
            numberOfLines={1} 
            ellipsizeMode="tail"
          >
            {item.lastMessage}
          </Text>
          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <Search size={20} color="#999999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search conversations"
          placeholderTextColor="#999999"
        />
      </View>
      
      <FlatList
        data={CONVERSATIONS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
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
  searchContainer: {
    marginHorizontal: 24,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333333',
  },
  listContent: {
    paddingHorizontal: 24,
  },
  conversationItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  conversationContent: {
    flex: 1,
    justifyContent: 'center',
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  conversationName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333333',
  },
  conversationTime: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#999999',
  },
  conversationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conversationMessage: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666666',
  },
  unreadBadge: {
    backgroundColor: '#FF5757',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  unreadText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
});