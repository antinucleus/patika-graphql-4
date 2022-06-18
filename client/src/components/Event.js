import React from 'react';
import { List, Divider } from 'antd';
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../queries";
export const Event = () => {
    const { loading, data } = useQuery(GET_EVENTS);
    if (loading) {
        return <div>Lodaing</div>;
    }
    const { events } = data;
    console.log(events);

    return (
        <div style={ styles.container } >
            <Divider>Events</Divider>
            <List
                itemLayout="horizontal"
                dataSource={ events }
                renderItem={ item => (
                    <List.Item style={ styles.listItem } >
                        <List.Item.Meta
                            title={
                                <div style={ styles.listItemTitleContainer } >
                                    <a style={ styles.listItemTitle } href={ `/event/${item?.id}` }>{ item?.title }</a>
                                    <div style={ styles.listItemDate } > { new Date(item?.date).toLocaleDateString() } </div>
                                </div>
                            }
                            description={ item?.desc.substring(0, 40) + "..." }
                        />

                    </List.Item>
                ) }
            />
        </div>
    );
};

const styles = {
    container: {
        width: 600,
        height: 300,
        overflowY: "auto",
        marginTop: 30
    },
    listItem: {
        marginTop: 10,
        border: "1px #ededed solid",
        padding: 10
    },
    listItemTitle: {
        color: "#000"
    },
    listItemTitleContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    listItemDate: {
        fontSize: 10,
        color: "#ada39b"
    }

};