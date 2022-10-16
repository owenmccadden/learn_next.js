import React from 'react'
import { ArticleItem } from './ArticleItem'
import articleStyles from "../styles/Article.module.css"

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map(article => <ArticleItem key={article.id} article={article}/>)}
        {/* {articles.map(article => <h3 key={article.id}>{article.title}</h3>)} */}
    </div>
  )
}

export default ArticleList