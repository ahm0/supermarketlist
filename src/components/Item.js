import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
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
            >
                <Grid
                    Item
                    xs={10}
                >
                    {data}
                </Grid>
                <Grid
                    Item
                    xs={2}
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