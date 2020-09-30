import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLoading } from '../../store/actions/loadingActions'
import Modal from '@material-ui/core/Modal'
import CircularProgress from '@material-ui/core/CircularProgress';

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    progress: {
        marginRight: '15px'
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    paper: {
        backgroundColor: '#FFF',
        padding: '15px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirecton: 'row',
        outline: 'none'
    }
}

export class Loading extends Component {

    handleClose = () => {

    }
    render() {
        const { classes } = this.props
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.loading.open}
                onClose={this.handleClose}
                className={classes.modal}
            >
                <div className={classes.paper}>
                    <CircularProgress size={20} className={classes.progress} />
                    <Typography variant="subtitle1" component="h2">
                        {this.props.loading.msg}
                    </Typography>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.LoadingReducer
})

const mapDispatchToProps = dispatch => ({
    changeLoading: (value) => dispatch(changeLoading(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Loading))
