import React, { useEffect, useState } from "react";
import { Table, Tag, Button, Space } from "antd";
import { useRequest } from "ahooks";
import { getNewsList, getUsers } from "../../../common/apis";
import { AUDIT_MAP, PUBLISH_MAP } from "../../../model/News";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "分类id",
      dataIndex: "categoryId",
      key: "categoryId"
    },
    {
      title: "发布地区",
      dataIndex: "region",
      key: "region",
      render: (r: string) => (!!r ? r : "全球")
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",

    },
    {
      title: "审核状态",
      dataIndex: "auditState",
      key: "auditState",
      render:(r:any)=> AUDIT_MAP[r]

    },
    {
      title: "发布状态",
      dataIndex: "publishState",
      key: "publishState",
      render:(r:any)=> PUBLISH_MAP[r]
    },
    {
      title: "新建时间",
      dataIndex: "createTime",
      key: "createTime",

    },
    {
      title: "发布时间",
      dataIndex: "publishTime",
      key: "publishTime",
    },
    {
      title: "收藏量",
      dataIndex: "star",
      key: "star",
    },
    {
      title: "点击量",
      dataIndex: "view",
      key: "view",
    },

  ];
  const { run } = useRequest(getNewsList, {
    manual: false,
    onSuccess: (res: any) => {
      console.log('新闻',res);
      
      setNews(res);
    }
  });
  useEffect(() => {
    run();
  }, []);

  return (
    <div>
      <Button className="mb-5" type="primary">添加新闻</Button>
      <Table columns={columns} dataSource={news} pagination={{pageSize:10}} />
    </div>
  );
};

export default NewsList;
