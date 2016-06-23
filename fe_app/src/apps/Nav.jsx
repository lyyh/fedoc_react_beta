import React from 'react';
import NavHeader from '../components/nav/NavHeader.jsx';
import NavContent from '../components/nav/NavContent.jsx';
import NavFooter from '../components/nav/NavFooter.jsx';

class Nav extends React.Component {
	render(){
		return(
			<div className='nav'>
				<NavHeader/>
            	<NavContent/>
            	<NavFooter/>
			</div>			
			)
	}	
}

export default  Nav;