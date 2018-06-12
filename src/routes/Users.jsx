import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

import {connect} from 'dva';

import styles from './Users.less';

function Users({ location, dispatch, users }) {
  const {
    loading, list, total, current,
    currentItem, modalVisible, modalType
  } = users;

  const userSearchProps = {};
  const userListProps = {
    dataSource: list,
    total,
    loading,
    current,
  };
  const userModalProps = {};

  return (
    <div>
      <UserList {...userListProps}/>
      <UserSearch {...userSearchProps}/>
      <UserModal {...userModalProps}/>
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {users:state.example};
}

export default connect(mapStateToProps)(Users);
