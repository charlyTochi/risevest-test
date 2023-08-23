import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import colors from '../../../../../core/config/colors';

export const PlanList = () => {
  const plans = [
    {id: 1, name: 'plan'},
    {id: 2, name: 'Create a'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
    {id: 3, name: 'Plan 3'},
  ];

  return (
    <View style={styles.container}>
      {plans?.length !== 0 ? (
        <View style={styles.planCard}>
          <Image
            source={require('../../../../../../assets/images/Home/add.png')}
          />
          <Text style={styles.emptyText}>Create an investment plan</Text>
        </View>
      ) : (
        <FlatList
          data={plans}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={({item}) => (
            <View style={styles.planCard}>
              <Text style={styles.planName}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  planCard: {
    backgroundColor: colors.offWhite,
    height: 243,
    marginHorizontal: 8,
    padding: 16,
    width: 200,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  emptyText: {
    fontSize: 16,
    marginTop: 10,
    color: colors.black,
    textAlign: 'center',
    width: 150,
    fontFamily: 'DMSans Bold',
  },
});
