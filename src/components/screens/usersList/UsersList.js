import React from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { Row, Separator } from "../../../row/Row";
import { loadUsers } from "../../../store/users/actions";
import { useDispatch, useSelector } from "react-redux";

const UsersList = ({ navigation, route }) => {
  const usersGender = route.params.usersGender;
  const dispatch = useDispatch();
  const userList = useSelector(state => state.users[usersGender]);
  const isFetching = useSelector(state => state.users.isFetching);

  return (
    <View>
      <FlatList
        data={userList}
        keyExtractor={(item) => {
          return `${item.login.uuid}`;
        }}
        refreshControl={
          <RefreshControl
            onRefresh={() => dispatch(loadUsers())}
            refreshing={isFetching}
          />}
        renderItem={({ item }) => {
          const name = `${item.name.first} ${item.name.last}`;
          return (
            <Row
              image={{ uri: item.picture.large }}
              title={name}
              subtitle={item.email}
              onPress={() => navigation.push("UserDetails", { user: item })}
            />
          );
        }}
        ItemSeparatorComponent={Separator}
        // ListHeaderComponent={() => <Separator />}
        // ListFooterComponent={() => <Separator />}
        contentContainerStyle={{ paddingVertical: 5 }}
      />
    </View>

  );
};

export default UsersList;
