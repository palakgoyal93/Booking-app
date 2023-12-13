import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={BookingList} />
            <Route path="/book" component={BookingForm} />
            <Route path="/cancel" component={CancelBookingForm} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
