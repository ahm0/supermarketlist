import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class AddItemDialog extends React.Component {

    constructor(props) {
        super(props);

        this.setState({ item: '' });
    }

    handleClose = () => {
        this.props.closeDialog();
    }

    handleAdd = () => {
        this.props.addItem(this.state.item);
    }

    onChange = (event) => {
        this.setState({ item: event.target.value });
    }

    render() {
        const { ...other } = this.props;

        return (
            <Dialog
                onClose={this.handleClose}
                onEnter={this.onKeyDown}
                aria-labelledby="form-dialog-title"
                {...other}
            >
                <DialogTitle id="form-dialog-title">
                    Add Item
                </DialogTitle>

                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="item"
                        placeholder="Item"
                        type="text"
                        fullWidth
                        onChange={this.onChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleClose}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={this.handleAdd}
                        color="primary"
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}

export default (AddItemDialog);