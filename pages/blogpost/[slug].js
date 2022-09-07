import React,{useState,useEffect} from 'react';
import styles from "../../styles/Blogpost.module.css";
import * as fs from 'fs';

const Slug = (props) => {

  function createMarkup(c) {
    return { __html: c };
}

  const [blog, setBlog] = useState(props.myBlog);

    return <div className={styles.container}>
        <main className={styles.main}>
            <h2 className= {styles.blogItemh2}>{blog && blog.slug}</h2>
            <div className= {styles.blogItemp}>
            <hr />
            {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
            </div>
        </main>
    </div>;
  
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug: "how-to-learn-javascript" } }, 
      { params: { slug: "how-to-learn-next-js" } }, 
      { params: { slug: "how-to-learn-react-js" } }, 
      ],
      fallback: true, 
    }
  }

export async function getStaticProps(context) {
    
    const { slug } = context.params;

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) }, 
    }
}

export default Slug;