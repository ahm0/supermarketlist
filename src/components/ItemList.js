import React from 'react';
import { getItems, saveItem, deleteItem } from '../services/api';
import Item from './Item';
import { Button } from '@material-ui/core';
import AddItemDialog from './AddItemDialog';

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
        const count = this.state.items.length;
        let message = 'List is empty';
        if (count) {
            message = count + ' items';
        }
        return (
            <div>
                <h1>{'Supermarket List'}</h1>
                <h4>{message}</h4>
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
            <ul>
                {this.state.items.map((item, id) =>
                    <Item
                        id={id}
                        handleDelete={this.deleteItemFromList}
                        data={item}
                    />
                )
                }
            </ul>
        );
    }

    render() {
        return (
            this.state ?
                <div id="listItems">

                    {this.renderListTitle()}

                    {this.renderItems()}

                    <Button
                        variant='raised'
                        color='primary'
                        onClick={this.openAddItemDialog}
                    >
                        {'Add item'}
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

export default ItemList;