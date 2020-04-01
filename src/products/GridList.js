import React from 'react';
import { GridList as MuiGridList, GridTile } from 'material-ui/GridList';
import {EditButton} from 'admin-on-rest';

const styles = {

    gridList: {
        width: '100%',
        margin: 0,
    },
    flex: { display: 'flex' },
};

const GridList = ({ ids, data, basePath }) => (

    <div style={styles.root}>
        <MuiGridList cellHeight={170} cols={3} style={styles.gridList}>
            {ids.map((id) => (
                <GridTile
                    key={id}
                    title={data[id].reference}
                    subtitle={<span>{data[id].width}x{data[id].height}</span>}
                    actionIcon={<EditButton basePath={basePath} record={data[id]} label="" />}
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.5) 100%,rgba(0,0,0,0) 100%)"
                >
                    <img src={data[id].thumbnail} alt="" />
                </GridTile>
            ))}
        </MuiGridList>
    </div>
);

export default GridList;
