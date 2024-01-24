import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/UI/iconButton";
import { GlobalStyles } from "../constants/styles";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditting = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditting]);

  function deleteExpenseHandler() {}

  return (
    <View style={styles.container}>
      {isEditting && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
