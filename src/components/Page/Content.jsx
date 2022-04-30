import { posts } from '../../shared/projectData';
import { Card } from './components/Card';
import './Content.css';
import { Component } from 'react';
import { AddPostform } from './components/AddPostform';

export class Content extends Component {

  state = {
    showAddform: false,
    showBlog: true,
    blogArr: JSON.parse(localStorage.getItem('blogPosts')) || posts
  };

  likePost = pos => {
    const temp = [...this.state.blogArr];
    temp[pos].liked = !temp[pos].liked;

    this.setState ({
      blogArr: temp
    })
    localStorage.setItem ('blogPosts', JSON.stringify(temp))
  }

  toggleBlog = () => {
    this.setState (({ showBlog }) => {
      return {
        showBlog: !showBlog,
      };
    });
  }

  deletePost = pos => {
    if (window.confirm('Подтвердить удаление')) {
    const temp = [...this.state.blogArr];
    temp.splice(pos, 1);

    this.setState({
      blogArr: temp
    })
    // localStorage.setItem("blogPosts", JSON.stringify(temp));
  }
  };

  handleAddFormShow = () => {
    this.setState({
      showAddform: true
    })
  }

  handleAddFormHide = () => {
    this.setState({
      showAddform: false
    })
  }

  render() {

    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(pos)}
          deletePost={() => this.deletePost(pos)}
        />
      );
    });

    return (
      <>
      {this.state.showAddform ? <AddPostform handleAddFormHide = {this.handleAddFormHide} /> : null}
        <h1 className='heading'>Посты</h1>
        <div className='count'>
          <button onClick={(this.toggleBlog)}>
            {
              this.state.showBlog ? 'Скрыть посты' : 'Показать посты'
            }
          </button>
          <button className='addPost'onClick={this.handleAddFormShow}>Создать пост</button>
        </div>
        {
          this.state.showBlog ?
            <>
              <div className='posts'>
                {blogPosts}
              </div>
            </>
            : null
        }
      </>
    );
  };
}
