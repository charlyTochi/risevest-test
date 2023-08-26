import React from 'react';
import {View, Text, FlatList, StyleSheet, Image, Pressable} from 'react-native';
import colors from '../../../../../core/config/colors';
import routes from '../../../../../routes/routes';

export const PlanList = ({plans, navigation}) => {

  return (
    <View style={styles.container}>
      {plans?.length === 0 ? (
        <View style={styles.planCard}>
          <Pressable onPress={() => navigation.navigate(routes.createPlan)}>
            <Image
              source={require('../../../../../../assets/images/Home/add.png')}
            />
          </Pressable>

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
