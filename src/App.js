import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom'
import Home from './pages/Home'
import Mapp from './pages/Map'
import Path from './pages/Path'
import Arrive from './pages/Arrive'
import BeginEnd from './pages/BeginEnd'
import Around from './pages/Around'
// import Info from './pages/Info'

const BasicExample = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/map" component={Mapp}/>
				<Route path="/path" component={Path}/>
				<Route path="/arrive" component={Arrive}/>
				<Route exact path="/beginend" component={BeginEnd}/>
				<Route exact path="/around" component={Around}/>
				{/* <Route exact path="/info" component={Info}/> */}
			</Switch>
		</div>
	</Router>
)

export default BasicExample