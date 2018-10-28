import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Blue from '@material-ui/core/colors/blue';
import { getItems, saveItem, deleteItem } from '../services/api';
import Item from './Item';
import GridList from '@material-ui/core/GridList';
import { Button } from '@material-ui/core';
import AddItemDialog from './AddItemDialog';

const styles = thme => ({
    subTitle: {
        color: '#939393'
    },
    listItems: {
        display: 'grid',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    list: {
        height: '300px',
        width: '800px'
    },
    button: {
        background: '#00a8ff',
        '&:hover': {
            backgroundColor: Blue[700],
        },
        color: 'white',
        fontSize: '20px',
        padding: '30px',
        margin: '10px 50px',
        textTransform: 'capitalize'
    }
});

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.setState({ items: [], openDialog: false });
    }

    async componentDidMount() {
        const data = await getItems();
        this.setState({ items: data });
    }

    renderListTitle = () => {
        const { classes } = this.props;
        const count = this.state.items.length;
        let message = 'List is empty';
        if (count) {
            message = count + ' items';
        }
        return (
            <div>
                <h1>{'Supermarket List'}</h1>
                <h4 className={classes.subTitle}>{message}</h4>
            </div>
        );
    }

    openAddItemDialog = () => {
        this.setState({ openDialog: true })
    }

    closeAddItemDialog = () => {
        this.setState({ openDialog: false })
    }

    addItem = async (item) => {
        await saveItem(item);
        this.closeAddItemDialog();
    }

    deleteItemFromList = async (item) => {
        const items = await deleteItem(item);
        this.setState({ items })
    }

    renderItems() {
        return (
            this.state.items.map((item, id) =>
                <Item
                    id={id}
                    handleDelete={this.deleteItemFromList}
                    data={item}
                />
            )
        );
    }

    render() {
        const { classes } = this.props;

        return (
            this.state ?
                <div id="listItems" className={classes.listItems}>

                    {this.renderListTitle()}

                    <GridList
                        container
                        className={classes.list}
                    >
                        {this.renderItems()}
                    </GridList>

                    <Button
                        variant='raised'
                        onClick={this.openAddItemDialog}
                        className={classes.button}
                    >
                        Add item
                    </Button>

                    <AddItemDialog
                        open={this.state.openDialog}
                        closeDialog={this.closeAddItemDialog}
                        addItem={this.addItem}
                    />
                </div>

                :
                ''

        );
    }
}

export default withStyles(styles)(ItemList);