import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Usuarios extends Component {
    render() {
        return (
            <div>
                <h2>Usuario:{this.props.usuarios.active}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    usuarios: state.usuariosReducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)
