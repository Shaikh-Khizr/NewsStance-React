import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>MonkeyNews - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="MYDESC" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="MYDESC" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="MYDESC" />
                    </div>
                </div>

            </div>
        )
    }
}

export default News