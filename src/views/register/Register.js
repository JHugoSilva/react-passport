import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValue, registerUser } from '../../store/actions/registerAction'
import { baseUrl } from '../../config/globalConfig'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Loading from '../../components/loading/Loading'
import Notify from '../../components/notify/Notify'
export class Register extends Component {
    register = () => {
        this.props.registerUser(this.props.data)
            .then(() => {
                if (this.props.success) {
                    window.location.replace(baseUrl + 'painel')
                }
            })
    }
    render() {
        return (
            <div>
                <Loading />
                <Notify />
                <Container component="main" maxWidth="xs">
                    <div className="mt-3 mt-md-5">
                        <div className="text-center">
                            <img src="dev.jpg" width="200" />
                            <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">
                                Crie sua conta Gratís
                        </Typography>
                        </div>
                        <div className="mt-4">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Nome"
                                name="name"
                                type="text"
                                value={this.props.data.name}
                                onChange={(text) => {
                                    this.props.changeValue({ name: text.target.value })
                                    if (this.props.error.name) {
                                        delete this.props.error.name
                                    }
                                }}
                            />
                            {(this.props.error.name) &&
                                <strong className="text-danger">
                                    {this.props.error.name[0]}
                                </strong>
                            }
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                value={this.props.data.email}
                                onChange={(text) => {
                                    this.props.changeValue({ email: text.target.value })
                                    if (this.props.error.email) {
                                        delete this.props.error.email
                                    }
                                }}
                            />
                            {(this.props.error.email) &&
                                <strong className="text-danger">
                                    {this.props.error.email[0]}
                                </strong>
                            }
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Senha"
                                name="password"
                                type="password"
                                value={this.props.data.password}
                                onChange={(text) => {
                                    this.props.changeValue({ password: text.target.value })
                                    if (this.props.error.password) {
                                        delete this.props.error.password
                                    }
                                }}
                            />
                            {(this.props.error.password) &&
                                <strong className="text-danger">
                                    {this.props.error.password[0]}
                                </strong>
                            }
                            <Button
                                type="button"
                                variant="contained"
                                fullWidth
                                color="primary"
                                size="large"
                                className="mb-3 mb-md-4 mt-4"
                                onClick={() => this.register()}
                            >
                                Cadastrar
                        </Button>
                            <div className="text-center">
                                <Link href="/login" className="mt-4" color="secondary" variant="body2">
                                    Fazer Login
                            </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.RegisterReducer.data,
    success: state.RegisterReducer.success,
    error: state.RegisterReducer.error
})

const mapDispatchToProps = dispatch => ({
    changeValue: value => dispatch(changeValue(value)),
    registerUser: data => dispatch(registerUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
