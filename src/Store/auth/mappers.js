import {updateAuthStatus} from "./actions";

export const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    client: state.auth.backEndClient
})

export const mapDispatchToProps = {
    updateAuthStatus,
}