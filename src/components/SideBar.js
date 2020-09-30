import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeUser } from '../store/actions/usuariosActions'

export class SideBar extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.usuarios.list.map((user, i) => (
                        <li key={i}>{user}
                            <button onClick={() => this.props.changeUser(user)}>
                                Selecione
                        </button></li>
                    ))

                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    usuarios: state.usuariosReducer
})

const mapDispatchToProps = dispatch => ({
    changeUser: (user) => dispatch(changeUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
