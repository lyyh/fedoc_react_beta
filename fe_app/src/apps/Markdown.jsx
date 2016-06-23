import React,{Component} from 'react';
import MarkdownBody from '../components/markdown/markdownBody.jsx';

class Markdown extends Component{
	render(){
		return (
			<div className="markdown">
				<MarkdownBody/>
			</div>
			)
	}
}

export default Markdown