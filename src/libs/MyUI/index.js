import SearchInput from './Components/SearchInput'
import './assets/icofont/icofont.css'

let MyUI = {};


MyUI.install = function(Vue) {
    Vue.component(SearchInput.name, SearchInput)
}

export default MyUI;