import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '/imports/actionCreators';
import Main from './Main';

const mapStateToProps = ({ questions }) => ({
  questions: questions.questions,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);


const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
