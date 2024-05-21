import React from "react";

const styles = {
  newsContainer: {
    backgroundColor: 'white',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center', // Center the visible cards
    overflowX: 'auto', // Allow horizontal scrolling
    padding: '20px',
    padding: '50px 0', // Add margin to separate the news cards 
  },

  card: {
    margin: '0 10px', // Add margin for spacing between cards
    width: '200px',
    height: '150px',
    backgroundColor: '#333',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

const News = () => {
  return (
    <div style={styles.newsContainer} id="news">
      <div style={styles.card}>News 1</div>
      <div style={styles.card}>News 2</div>
      <div style={styles.card}>News 3</div>
      <div style={styles.card}>News 4</div>
      <div style={styles.card}>News 5</div>
    </div>
  );
};

export default News;