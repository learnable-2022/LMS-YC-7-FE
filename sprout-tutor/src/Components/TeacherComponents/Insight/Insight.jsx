import React from 'react'
import './Insight.scss'

const Insight = () => {
  return (
    <div id='insight'>

        <div id="ins-pub">
            <p>Publication Data</p>

            <div id="ins-disp">
                <span>
                    
                    <h4>Published Courses</h4>
                </span>
                <span>

                    <h4>Drafts</h4>
                </span>
            </div>
        </div>

        <div id="ins-metrics">
            <p>Overall (All-time) Metrics</p>

            <div id="ins-disp">
                <span>
                    <h4>Course Sales</h4>
                </span><span>
                    <h4>Course Completion</h4>
                </span><span>
                    <h4>Reviews</h4>
                </span><span>
                    <h4>Avg.Rating</h4>
                </span>
            </div>
        </div>

        <div id="ins-sales">
            <p>Best Selling Course (All-Time)</p>

            <div id="ins-disp">

            </div>
        </div>

    </div>
  )
}

export default Insight