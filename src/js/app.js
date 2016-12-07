import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as current_timeActions from './actions/current_time';
import * as configActions from './actions/config';

import Layout from './components/layout';

function mapStateToProps(state) {
    return {
        current_time: state.current_time,
        config: state.config
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(current_timeActions, dispatch),
        ...bindActionCreators(configActions, dispatch)
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default App;