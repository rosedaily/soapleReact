import React from 'react';

const styles = {
    wrapper:{
      margin: 8,
      padding : 8,
      display : "flex",
      flexDirection:"row",
      border:"1px solid grey",
      borderRadius:16,
    },
    imageContainer:{},
    image : {
      width: 50,
      height : 50,
      borderRadius : 25,
    },
    contentContainer : {
      marginLeft:8,
      display : "flex",
      flexDirection:"column",
      justifyContent:"Center",
    },
    nameText:{
      Color: " black",
      fontSize:16,
      fontWeight:"bold",
    },
    commentText: {
      color:"black",
      fontSize:16,
    },
};

function Comment(props){
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img 
        src = "https://lh3.googleusercontent.com/ogw/AOh-ky3l2oj1UKzyyWpMK6Aixzcfl0c4Lhp91uYrGrH_=s32-c-mo" 
        style={styles.image} 
        alt=''
        />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>
          <h1>{props.comment}</h1>
        </span>
      </div>
    </div>
  );
}

export default Comment;