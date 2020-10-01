export default {
    auth: {
        token: {},
        credentials: {
            username: '',
            password: ''
        },
        success: false,
        /* isLoading: {
             active: false,
             msg: null
         },
         success: false,
         error: null*/
    },
    register: {
        data: {
            name: '',
            email: '',
            password: '',
        },
        error: {},
        success: false,
    },
    loading: {
        open: false,
        msg: ''
    },
    notify: {
        open: false,
        class: 'success',
        vertical: 'top',
        horizontal: 'center',
        time: 3000,
        msg: ''
    }
}