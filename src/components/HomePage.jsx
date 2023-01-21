import React from 'react';

const HomePage = () => {
  return (
    <section className='pb-100'>
        <div className='top-image'>
            <div className='top-container'>
                <h1>Kiyona Ono's Portfolio Site</h1>
                <p>座右の銘入れる？</p>
            </div>
            
        </div>
        <div className='container'>
            <div className='pt-100'>
                <h2 className='text-center section-title'>About this site</h2>
                <p>ここはエンジニアKiyona Onoのポートフォリオサイトです。少しでも私について興味を持っていただけたら嬉しいです。</p> 
            </div>
            <div className='pt-100'>
                <h2 className='text-center section-title'>About me</h2>
                <div className='section-inner'>
                    <img src={`${process.env.PUBLIC_URL}/myPicture.png`} alt="プロフィール写真" className='profile-image' />
                    <div>
                        <p>大学では社会学専攻でしたが、新卒でエンジニアになりました。360°動画制作やIoT機器可視化システムのカスタマイズ開発をおこなってきました。社会人歴はまもなく丸3年になります。現在はReact×Laravelでバケットリストを作成するアプリを自己開発中です。</p>
                        <p>Github</p>
                    </div>
                </div>
                
            </div>
            <div className='pt-100'>
                <h2 className='text-center section-title'>Works</h2>
                <p>今までに作成したものの紹介です。</p>
                <p>View more</p>
                
            </div>
            <div className='pt-100'>
                <h2 className='text-center section-title'>Skills</h2>
                <p>私のスキルをまとめました。</p>
                <p>View more</p>
                
            </div>
        </div>
        
    </section>
  );
};

export default HomePage;