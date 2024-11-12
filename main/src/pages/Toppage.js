import React from 'react';
import '../styles/Toppage.scss';
import '../App.css';

function TimelineItem({ text, position }) {
  const circleStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#000000",
    borderRadius: "50%",
    margin: "10px auto",
    position: "relative",
  };

  const stickStyle = {
    width: "10px",
    height: "100px",
    backgroundColor: "#000000",
    margin: "0 auto",
  };

  const bubbleStyle = {
    backgroundColor: "#f1f1f1",
    padding: "10px 20px", // 横幅が広がるように余白を設定
    borderRadius: "8px",
    minWidth: "150px", // 吹き出しの最小幅を設定
    maxWidth: "none", // 横方向に制限なく広がるように
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [position]: "70px",
    textAlign: "center",
    whiteSpace: "nowrap", // テキストを1行で表示し、横に伸びるように設定
  };

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <div style={circleStyle}>
        <div className = "textbox" style={bubbleStyle}>{text}</div>
      </div>
      <div style={stickStyle}></div>
    </div>
  );
}

function Toppage() {
  return (
    <div className='Toppage'>
      <div className='body' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className='main'>
          <div className='title'>ようこそ！</div>
          <div className='Icon'>
            <img src={`${process.env.PUBLIC_URL}/monaka.png`} alt="Icon" style={{ width: '200px', height: 'auto' }} />
            <div className='name'>こた</div>
          </div>
          <div className='my-text'>高岡己太朗です。自己紹介文・・・</div>
        </div>

        <div className='activity'>
          <div className='title'>主な活動</div>
          <div className='info'>
            <div className='box'><div className='smart-project'>スマプロ</div></div>
            <div className='box'><div className='busstop-project'>BusStop</div></div>
          </div>
        </div>

        <div className='timeline'>
          <div className='title'>これまで</div>
          <TimelineItem text="技育キャンプハッカソンに参加" position="right" />
          <TimelineItem text="スマプロハッカソンに参加" position="left" />
          <TimelineItem text="JPHACK2024に参加" position="right" />
          <TimelineItem text="技育キャンプハッカソンに参加" position="left" />
          <TimelineItem text="技育キャンプハッカソンに参加" position="right" />
          <TimelineItem text="WRO2022年全国大会出場" position="left" />
          <TimelineItem text="地元の中学ロボコンに参加" position="right" />
          <TimelineItem text="WRO2018国際大会出場" position="left" />
          <TimelineItem text="WRO2017国際大会出場" position="right" />
          <TimelineItem text="WRO2016国際大会出場" position="left" />
          <TimelineItem text="地元のプログラミング教室に通う" position="right" />
          <TimelineItem text="プログラムに興味を持つ" position="left" />
        </div>
      </div>
    </div>
  );
}

export default Toppage;
