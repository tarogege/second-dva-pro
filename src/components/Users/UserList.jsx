import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 采用antd的UI组件
import { Table, message, Popconfirm } from 'antd';

const UserList = ({total,
                  current,
                  loading,dataSource})=>{
  const columns=[
    {title:'姓名',dataIndex:'name',render:(text)=><a href='#'>{text}</a>},
    {title:'年龄',dataIndex:'age'},
    {title:'住宅',dataIndex:'address'},
    {title:'操作',dataIndex:'operation',render:(text,record)=>(
        <p>
          <a onClick={()=>{}}>编辑</a>
          &nbsp;
          <Popconfirm title="确定要删除吗？" onConfirm={()=>{}}>
            <a>删除</a>
          </Popconfirm>
        </p>)}
  ];

  const pagination = {
    total,
    current,
    pageSize: 10,
    onChange: ()=>{},
  };

  return (
    <Table dataSource={dataSource} columns={columns} loading={loading} rowKey={record => record.id} pagination={pagination}/>
  );
};
export default UserList;
