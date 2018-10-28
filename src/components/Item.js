import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    item: {
        background: 'white',
        borderRadius: '10px',
        margin: '0px 50px 10px 50px',
        height: '60px',
        lineHeight: '5px'
    },
    itemText: {
        textAlign: 'left',
        fontWeight: 'bold',
        paddingLeft: '10px',
        fontSize: '24px'
    }
});

class Item extends React.Component {


    handleDelete = () => {
        this.props.handleDelete(this.props.data);
    }

    render() {
        const { classes, data } = this.props;

        return (
            <Grid
                container
                direction='row'
                className={classes.item}
            >
                <Grid
                    Item
                    xs={9}
                    style={{ overflow: 'hidden' }}
                >
                    <p className={classes.itemText}>{data}</p>
                </Grid>
                <Grid
                    Item
                    xs={3}
                >
                    <IconButton
                        className={classes.button}
                        aria-label="Delete"
                        onClick={this.handleDelete}
                    >
                        <DeleteIcon />
                    </IconButton>

                </Grid>
            </Grid>
        );
    }

}

export default withStyles(styles)(Item);