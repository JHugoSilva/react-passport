import React, { Component } from 'react'
import { connect } from 'react-redux'
import className from 'classname'
import withStyles from '@material-ui/core/styles/withStyles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { changeNotify } from '../../store/actions/notifyActions'

const styles = {
    messge: {
        display: 'flex',
        alignItems: 'center'
    },
    success: {
        backgroundColor: '#2196F3'
    },
    error: {
        backgroundColor: '#F44336'
    }
}

export class Notify extends Component {
    handleClose = () => {
        this.props.changeNotify({
            open: false
        })
    }
    render() {
        const { classes } = this.props
        const messageClasses = className({
            [classes[this.props.notify.class]]: this.props.notify.class
        })
        return (
            <Snackbar
                open={this.props.notify.open}
                anchorOrigin={{
                    vertical: this.props.notify.vertical,
                    horizontal: this.props.notify.horizontal
                }}
                autoHideDuration={this.props.notify.time}
                onClose={this.handleClose}
            >
                <SnackbarContent
                    className={messageClasses}
                    message={
                        <span className={classes.message}> {this.props.notify.msg}</span>
                    }
                />
            </Snackbar >
        )
    }
}

const mapStateToProps = (state) => ({
    notify: state.NotifyReducer
})

const mapDispatchToProps = dispatch => ({
    changeNotify: (value) => dispatch(changeNotify(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notify))
