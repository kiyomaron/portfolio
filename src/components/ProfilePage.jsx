import React from 'react';

const ProfilePage = () => {
  return (
    <section className='pt-100 pd-100'>
        <div className='container timeline'>
            <h2>年表</h2>
            <div className='row'>
                <div>
                    <ul className='timeline-list'>
                        <li>
                            <div className='timeline-content'>
                                <span>1995年12月</span>
                                <h3>静岡県浜松市に長女として生まれる</h3>
                            </div>
                        </li>
                        
                        <li>
                            <div className='timeline-content'>
                                <span>2011年4月</span>
                                <h3>静岡県浜松北高等学校入学</h3>
                                <p>地元では有名な進学校に入学。吹奏楽部に入部し部活・行事に明け暮れる。</p>
                            </div>
                        </li>
                        
                        <li>
                            <div className='timeline-content'>
                                <span>2014年3月</span>
                                <h3>静岡県浜松北高等学校卒業</h3>
                                <p>なんとか進学先が決まり、上京も決定。</p>
                            </div>
                        </li>
                        
                        <li>
                            <div className='timeline-content'>
                                <span>2014年4月</span>
                                <h3>専修大学人間科学部社会学科入学</h3>
                                <p>神奈川県にて一人暮らしスタート。</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2019年4月~7月</span>
                                <h3>フィリピンセブにて語学留学</h3>
                                <p>1日10時間勉強するEOPのスパルタ校で平日はひたすら勉強。</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2014年4月</span>
                                <h3>専修大学人間科学部社会学科入学</h3>
                                <p>神奈川県にて一人暮らしスタート。</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    

  )
};

export default ProfilePage;