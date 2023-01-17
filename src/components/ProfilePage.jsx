import React from 'react';

const ProfilePage = () => {
  return (
    <section className='pt-100 pb-100'>
        <div className='container timeline'>
            <div className='section-title'>
                <h2 className='text-center'>Kiyona's Life</h2>
            </div>
            
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
                                <p>地元では有名な進学校に入学。吹奏楽部に入部しトランペットを担当。部活・行事に明け暮れる。</p>
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
                                <p>神奈川県にて一人暮らしスタート。吹奏楽サークルに入会。</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2017年4月</span>
                                <h3>大学を2年間休学</h3>
                                <p>サークル活動の完遂と海外留学どちらもやり遂げるため、2年間休学することを決意。</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2017年2月〜2018年2月</span>
                                <h3>吹奏楽研究会の代表を務める</h3>
                                <p>会員人数約60名の団体の代表として1年間活動。昨年に引き続き予選を通過し、都大会進出を果たす。</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2018年4月〜7月</span>
                                <h3>フィリピンセブにて語学留学</h3>
                                <p>1日10時間勉強するEOPのスパルタ校で、平日はひたすら勉強。土日はアイランドホッピングや他留学生と食事、はたまた勉強などして過ごす。</p>
                                <p>2018年6月　TOEIC850点取得</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2018年7月〜2019年2月</span>
                                <h3>オーストラリアでワーキングホリデー</h3>
                                <p>ブリスベン近郊でのファーム体験や、シドニーでのホテルキーピングをしながら生きた英語に触れる。</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2019年4月</span>
                                <h3>大学復学</h3>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2020年3月</span>
                                <h3>専修大学人間科学部社会学科卒業</h3>
                                <p>休学2年を挟み、在学年数6年で卒業。</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2020年4月</span>
                                <h3>株式会社エスユーエス入社</h3>
                                <p>SESを主な事業とする東証マザーズ上場の企業へ入社。</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2020年10月〜2021年12月</span>
                                <h3>社内VRチームへ配属</h3>
                                <p>新たに新設された子会社クロスリアリティのVRIA1期生として受講する傍ら、VR動画制作請負事業を担当。</p>
                                <p>2021年6月　基本情報技術者取得</p>
                            </div>
                        </li>

                        <li>
                            <div className='timeline-content'>
                                <span>2022年1月〜</span>
                                <h3>某自動車会社のIoT関連チームへ派遣</h3>
                                <p>SaaSを使用した社内用カスタマイズ開発をおこなう。主にJavaScriptとSQLを使用し、機器から取得した情報をSaaSの機能を利用してグラフ化。</p>
                                
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