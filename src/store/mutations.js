export default {
    setHeaderTitle(state, routerName) {
        switch (routerName) {
            case 'year':
                state.isDarkTheme = true;
                break;
            default:
                break;
        }
    },
    updateUserConfig(state, userConfig, isLogin) {
        state.isLogin = isLogin
        console.log("state:", state);
        console.log("user:", userConfig);
        if (!isLogin) {
            localStorage.setItem("userConfig", JSON.stringify(userConfig));
            state.userConfig = userConfig;
        }
    }
}