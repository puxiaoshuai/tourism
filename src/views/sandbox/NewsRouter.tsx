import { useRequest } from 'ahooks';
import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import { getChildren, getRights, getSideMenus } from '../../common/apis';
import NoPermission from '../nopermission/NoPermission';
import AuditList from './audit-manage/AuditList';
import HasAuditList from './audit-manage/HasAuditList';
import Home from './home/Home';
import NewsCategory from './news-manage/NewsCategory';
import NewsDraft from './news-manage/NewsDraft';
import AddNewsList from './news-manage/AddNewsList';
import OfflinePublish from './publish-manage/OfflinePublish';
import PublishedList from './publish-manage/PublishedList';
import UnpubilshedList from './publish-manage/UnpubilshedList';
import PermissionsList from './right-manage/PermissionsList';
import RoleList from './right-manage/RoleList';
import UserList from './user-manage/UserList';
import lodash from 'lodash'

const NewsRouter = () => {
  const [backRoutes, setBackRoutes] = useState([])
  //本地映射
  const localPermissionMap: any = {
    "/home": <Home />,
    "/user-manage/list": <UserList />,
    "/right-manage/role/list": <RoleList />,
    "/right-manage/right/list": <PermissionsList />,
    "/news-manage/add": <AddNewsList />,
    "/news-manage/draft": <NewsDraft />,
    "/news-manage/category": <NewsCategory />,
    "/audit-manage/audit": <AuditList />,
    "/audit-manage/list": <HasAuditList />,
    "/publish-manage/unpublished": <UnpubilshedList />,
    "/publish-manage/published": <PublishedList />,
    "/publish-manage/sunset": <OfflinePublish />,
  }
  //获取 全平台权限,并且是页面权限(转化成1维数组方便写)，并且自己的权限要在 其中
  const runRights = useRequest(getRights, {
    manual: true,
    onSuccess: (res: any) => {
      setBackRoutes(prev => prev.concat(res))
    }
  });
  const runChildren = useRequest(getChildren, {
    manual: true,
    onSuccess: (res: any) => {
      setBackRoutes(prev => prev.concat(res))
    }
  });
  const userInfo = JSON.parse(localStorage.getItem("token") as string)
  useEffect(() => {
    Promise.all([runRights.run(), runChildren.run()]).finally(() => {

    })
  }, []);

  const checkRoute = (item: any) => {
    return item.pagepermisson && localPermissionMap[item.key]
  }
  const checkUserPermisson = (item: any) => {
    return userInfo?.role?.rights.includes(item.key)
  }
  return (
    <Switch>
      {
        backRoutes.map((item: any) => {
          if (checkUserPermisson(item) && checkRoute(item)) {
            return <Route path={item.key} exact key={item}>{localPermissionMap[item.key]}</Route>
          } else {
            return null
          }

        })
      }
      <Redirect from="/" to="/home" exact></Redirect>
      {
        backRoutes.length > 0 && <Route path="*">
          <NoPermission />
        </Route>
      }
    </Switch>
  )
}

export default NewsRouter
