import React , {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import Loading from "component/container/loading/Loading";
import "./fontEnd.css";
import {Link , useParams} from "react-router-dom";
import { getRouterDetail } from "redux/actions/courseAction";

const FE = [
  { title: "Front-end" },
  {
    ds: "Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng",
  },
  {
    ds1: "Dưới đây là các khóa học chúng mình đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.",
  },
];

const BE = [
  { title: "Back-end" },
  {
    ds: "Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng",
  },
  {
    ds1: "Dưới đây là các khóa học chúng mình đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Back-end.",
  },
];

function Index() {
  const dispatch = useDispatch();
  const {slug} = useParams();
  console.log(slug)
  useEffect(()=>{
      dispatch(getRouterDetail(slug));
    },[]);
  const {routerDetail} = useSelector((state) => state.courses);
  return (
    <>
      {routerDetail.length === 0 ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="font_layout_1">
            <div className="container font_layout_1_child">
              <div className="font_layout_1_child_w">
                <h1>Front-end</h1>
                <div className="font_layout_1_text">
                  Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là
                  Front-end và Back-end. Front-end là phần giao diện người dùng
                  nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile
                  hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của
                  lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử
                  dụng và tối ưu trải nghiệm người dùng
                </div>
                <div
                  className="font_layout_1_text"
                  style={{ paddingBottom: "10px" }}
                >
                  Dưới đây là các khóa học chúng mình đã tạo ra dành cho bất cứ
                  ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {routerDetail.map((value) => {
              return (
                <div className="font_layout_2" key={value._id}>
                  <h2>{value.name}</h2>
                  <div className="description_course">{value.lorem}</div>
                  <div className="container courser">
                    <div className="row font_courser">
                      <div className="col-5 font_courser_image">
                        <img src={value.image} alt="router_detail" />
                      </div>
                      <div className="col-7 font_courser_text">
                        <h3><b>{value.name}</b></h3>
                        <h4>{value.description}</h4>
                        <Link to="/courseDetail">
                        <button className="button_jelly btn-app-rt">Xem khóa học</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
       )} 
    </>
  );
}

export default Index;
