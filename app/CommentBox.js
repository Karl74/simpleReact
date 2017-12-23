var React = require("react");
var Comment = require("./Comment.js");

class CommentBox extends React.Component{
	constructor(){
		super();

		this.state = {
			showingComments: false
		};
	}
	
	_getComments() {

		const commentList = [
			{id:1, author:"Morgan McCircuit", body: "GreatPicture"},
			{id:2, author: "Bending Bender", body:"Excellent stuff"}
		];

		return commentList.map( comment => {
			return (
				<div>
				<Comment author= {comment.author} body= {comment.body} key={comment.id}/>
				<hr/>
				</div>
			);
		})
	}

	_getCommetsTitle(commentsCount){
		if(commentsCount === 0){
			return "No comments yet";
		} else if (commentsCount == 1){
			return "1 Comment";
		} else {
			return `${commentsCount} Comments`;
		}
	}

	_showComments(){
		if(this.state.showingComments){
			this.setState({showingComments:false});
		} else {
			this.setState({showingComments:true});
		}
	}

	render(){

		const comments= this._getComments();
		const now = new Date();
		
		let commentNodes;
		if(this.state.showingComments){
			console.log("is false");
			commentNodes = <div className="comment-list"> {comments} </div>
		}

		let buttonTag = "Show Comments";
		if(this.state.showingComments){
			buttonTag = "Hide Comments";
		}

		return(
			<div className="comment-box">
				<h3>Comments</h3>
				<p className="lead"> Current time: {now.toString()} </p>
				<h4 className="comment-count"> {this._getCommetsTitle(comments.length)}</h4>
				<button onClick= {this._showComments.bind(this)} >{buttonTag}</button>
				<hr />
				{commentNodes}
			</div>
		);
	}
}

module.exports = CommentBox	;