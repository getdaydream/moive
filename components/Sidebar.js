/**
 * Created by Maple on 17/3/7.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List/';
import Subheader from 'material-ui/Subheader';

const style = {
    paper: {
        position: "absolute",
        top: '56px',
        width: 150,
        bottom: 0,
        overflow: "auto",
        borderRadius: 0
    }
};

export default class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar">
                <Paper style={style.paper}>
                    <List>
                        <Subheader>发现</Subheader>
                        <ListItem
                            primaryText="电影"
                            initiallyOpen={true}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="正在热映"
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="即将上映"
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="选电影"
                                />
                            ]}
                        >
                        </ListItem>
                        <ListItem
                            primaryText="电视剧"
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="热门"
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="英剧"
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="美剧"
                                />,
                                <ListItem
                                    key={4}
                                    primaryText="日剧"
                                />,
                                <ListItem
                                    key={5}
                                    primaryText="韩剧"
                                />,
                                <ListItem
                                    key={6}
                                    primaryText="国产剧"
                                />,
                                <ListItem
                                    key={7}
                                    primaryText="日本动画"
                                />,
                                <ListItem
                                    key={8}
                                    primaryText="综艺"
                                />,
                                <ListItem
                                    key={9}
                                    primaryText="选电视剧"
                                />
                            ]}
                        >
                        </ListItem>
                        <Subheader>收藏</Subheader>
                        <ListItem
                            primaryText="我的电影"
                            initiallyOpen={true}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="在看"
                                />,
                                <ListItem
                                    key={2}
                                    primaryText="想看"
                                />,
                                <ListItem
                                    key={3}
                                    primaryText="看过"
                                />
                            ]}
                        >
                        </ListItem>
                    </List>
                </Paper>
            </div>
        )
    }
}