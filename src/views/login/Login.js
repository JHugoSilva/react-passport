import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, changeValue } from '../../store/actions/authAction'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { green } from '@material-ui/core/colors'
import Loading from '../../components/loading/Loading'
import Notify from '../../components/notify/Notify'
import { baseUrl } from '../../config/globalConfig'
const ColorButton = withStyles(themes => ({
    root: {
        color: '#FFF',
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        }
    }
}))(Button)

export class Login extends Component {

    login = () => {
        const { credentials } = this.props
        this.props.login(credentials).then(() => {
            console.log(credentials)
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
                                Criando uma App com Laravel
                            </Typography>
                        </div>
                        <div className="mt-4">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="username"
                                type="email"
                                value={this.props.credentials.username}
                                onChange={(text) => this.props.changeValue({ username: text.target.value })}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Senha"
                                name="password"
                                type="password"
                                value={this.props.credentials.password}
                                onChange={(text) => this.props.changeValue({ password: text.target.value })}
                            />
                            <Button
                                type="button"
                                variant="contained"
                                fullWidth
                                color="primary"
                                size="large"
                                className="mb-3 mb-md-4 mt-4"
                                onClick={() => this.login()}
                            >
                                Entrar
                            </Button>

                            <Link href="/register">
                                <ColorButton
                                    type="button"
                                    fullWidth
                                    size="large"
                                    variante="contained"
                                    className="mt-md-4"
                                >
                                    Cadastrar
                                </ColorButton>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.AuthReducer.credentials,
    success: state.AuthReducer.success
})

const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(login(credentials)),
    changeValue: (value) => dispatch(changeValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
