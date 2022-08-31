import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name : '로즈',
    comment: '안녕하세요. 로즈입니다.',
  },
  {
    name : '사과',
    comment: '안녕하세요. 사과입니다.',
  },
  {
    name : '딸기',
    comment: '안녕하세요. 딸기입니다.',
  }
]




function CommentList(props){
  return(
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}/>
        );
      })}
    </div>
  );
}

export default CommentList;