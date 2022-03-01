import "./courseDetail.css";
import { HTML_CSS_ZH } from "../../data/index.js";
import { Link } from "react-router-dom";


function courseDetail (props) {
    const listReview = HTML_CSS_ZH.review.map((r, index) => {
        return (
            <li key={index} className="list-detail">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
                <span>
                {r}
                </span>
            </li>
        )
    }
    ) 
    const listRequire = HTML_CSS_ZH.require.map((req, index) => {
        return (
        <li key={index} className="list-detail">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
            <span>
            {req}
            </span>
        </li>)
    })
    const listContent = HTML_CSS_ZH.contents.map((content, index) => {
        return (
            <div className="cd-body-lesson-1" key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
                <span>
                <Link to="#">{content}</Link>
                </span>
            </div>)
    })
    return (
        <div className="course-detail">
            <div className="cd-header">
                <h2 className="cd-header-title">HTML & CSS</h2>
                <button className="btn-app-y">Vào học</button>
            </div>
            <div className="row cd-body">
                <div className="col-8 cd-body-left">
                    <div className="row cd-body-course">
                        <div className="col-12 cd-body-learn">
                            <h3 className="cd-body-title">Bạn sẽ học được gì?</h3>
                            <ul>
                                {listReview}
                            </ul>
                        </div>
                        <div className="col-12 cd-body-learn">
                            <h3 className="cd-body-title">Yêu cầu</h3>
                            <ul>
                                {listRequire}
                            </ul>
                        </div>
                        <div className="col-12 cd-body-learn">
                            <h3 className="cd-body-title">Nội dung khóa học</h3>
                            <div className="cd-body-lesson">
                                {listContent}
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="col-4 cd-body-count">
                    <div className="cbc cd-body-count-user">Có <br /><p className="number">120.000</p><br /> người đã học khoá này</div>
                    <div className="cbc cd-body-count-time">Thời gian hoàn thành khoá học <br /><p className="number">9 giờ</p></div>
                </div>
            </div>            
        </div>

    )
}

export default courseDetail;