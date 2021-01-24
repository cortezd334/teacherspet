import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import TeacherContainer from './containers/TeacherContainer'
import DisplayContainer from './containers/DisplayContainer'
import LessonContainer from './containers/LessonsContainer'
import NewLessonContainer from './containers/NewLessonContainer'
import Home from './components/Home'
import SideNavBar from './components/SideNavBar'
import SettingsContainer from './containers/SettingsContainer'
import StudentContainer from './containers/StudentContainer'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route path='/' component={SideNavBar} />
        </Switch>
        <Switch>
          <Route exact path = '/lessons/new' component={NewLessonContainer} />
          <Route exact path = '/teacher' component={TeacherContainer} />
          <Route exact path = '/display' component={DisplayContainer} />
          <Route exact path = '/lessons' component={LessonContainer} />
          <Route exact path = '/settings' component={SettingsContainer} />
          <Route exact path = '/students' component={StudentContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
