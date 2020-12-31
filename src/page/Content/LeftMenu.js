import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import _ from 'lodash';
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const menu = [
    { id: 1, icon: PieChartOutlined, title: '首页', url: '/' },
    { id: 2, icon: DesktopOutlined, title: '日历组件', url: '/viewCalender' }
]

function LeftMenu() {
    const [ collapsed, onCollapse ] = useState(false)

    const defaultKey = useMemo(() => {
        const selectedKey = []
        const openKey = []
        const pathname = window.location.pathname

        _.forEach(menu, value => {
            if(value.url === pathname) {
                selectedKey.push(String(value.id))
                openKey.push(String(value.id))
            } else {
                _.forEach(value.children, item => {
                    if(item.url === pathname) {
                        selectedKey.push(String(item.id))
                        openKey.push(String(value.id))
                    }
                })
            }
        })

        return { selectedKey, openKey }
    }, [])

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={defaultKey.selectedKey} defaultOpenKeys={defaultKey.openKey} mode="inline">
                {
                    menu.map(item => {
                        return item.children ? (
                            <SubMenu key={item.id} icon={<item.icon />} title={item.title}>
                                {
                                    item.children.map(value => {
                                        return <Menu.Item key={value.id}>
                                            <Link to={value.url} replace>{ value.title }</Link>
                                        </Menu.Item>
                                    })
                                }
                            </SubMenu>
                        ) : (
                            <Menu.Item key={item.id} icon={<item.icon />}>
                                <Link to={item.url}>{ item.title }</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Sider>
    )
}

export default LeftMenu;
