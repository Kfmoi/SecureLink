import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAccountDetails, changeComapanySection, changeJobTitle, changePhone, changeTeamName } from '../../controller/AccountManager/AccountManager';

const ProfilePage: React.FC = () => {
  const navigation = useNavigation();
  const [profileDetails, setProfileDetails] = useState<any>({}); // useState to keep profile details
  const [editableFields, setEditableFields] = useState<any>({
    jobTitle: '',
    companySection: '',
    phone: '',
    team: ''
  }); // useState for editable field values

  const handlePress = (destination: string) => {
    navigation.navigate(destination);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text>{profileDetails.name}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text>{profileDetails.email}</Text>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text>{profileDetails.dateOfBirth}</Text>
          <Text style={styles.label}>Section:</Text>
          <Text>{profileDetails.section}</Text>

        </View>
      /</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginTop: 20,
  },
  searchInput: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  employeeList: {
    flex: 1,
    width: '100%',
  },
  employeeItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  employeeName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  employeeDepartment: {
    fontSize: 16,
    color: 'grey',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  navButton: {
    padding: 10,
  },
  messageButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  messageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfilePage;
