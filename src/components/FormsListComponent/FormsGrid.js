import React, { useState } from "react";
import { Table, Divider } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

const FormsGrid = ({ data, isFetching }) => {
  const [collaps, setCollapsed] = useState(false);
  const { Column, ColumnGroup } = Table;
  return (
    <Table
      dataSource={data}
      size="small"
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "30"]
      }}
    >
      <Column title="Title" dataIndex="title" key="title" />
      <Column
        title="Action"
        key="id"
        dataIndex="id"
        render={(text, record) => (
          <span>
            <Link to={"/fillform/" + record.id}>Fill Form</Link>
            <Divider type="vertical" />
            <Link to={"/editform/" + record.id}>Edit Form</Link>
          </span>
        )}
      />
    </Table>
  );
};

export default FormsGrid;
