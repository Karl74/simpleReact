var React = require('react');

class Comment extends React.Component{
	render(){
		return(
			<div className="comments">
				<p className="comment-header">{this.props.author}</p>
				<p className="comment-body"> {this.props.body}</p>
				<div className = "comment-footer">
					<a href="#" className="comment-fotter-delete">
						Delete comments
					</a>
				</div>
			</div>		
			);
	}
}

module.exports = Comment;