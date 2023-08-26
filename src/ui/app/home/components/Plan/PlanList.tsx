import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import colors from '../../../../../core/config/colors';
import routes from '../../../../../routes/routes';

export const PlanList = ({plans, navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.horizontalContainer}>
          <Pressable
            onPress={() => navigation.navigate(routes.createPlan)}
            style={styles.emptyPlanCard}>
            <Image
              source={require('../../../../../../assets/images/Home/add.png')}
            />
            <Text style={styles.emptyText}>Create an investment plan</Text>
          </Pressable>
          {plans?.length !== 0 && (
            <FlatList
              data={plans}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              horizontal
              renderItem={({item}) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate(routes.viewPlan, {plan: item})
                  }
                  style={styles.planCard}>
                  <Text style={styles.planName}>{item.plan_name}</Text>
                  <Text style={styles.planAmount}>₦{item.target_amount}</Text>
                </Pressable>
              )}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  emptyPlanCard: {
    backgroundColor: colors.offWhite,
    height: 243,
    marginHorizontal: 8,
    padding: 16,
    width: 200,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planCard: {
    backgroundColor: colors.primary,
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
    color: colors.white,
    textTransform: 'capitalize',
  },
  planAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
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
