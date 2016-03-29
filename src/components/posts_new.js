import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    //const handleSubmit = this.props.handleSubmit; // Refactor
    //const title = this.props.fields.title ...
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.props.createPost) }>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label htmlFor="">Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label htmlFor="">Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

//Differences between connect and reduxForm
// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
