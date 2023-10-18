import './hero.css'


export default function Hero() {
  return (
    <>

      <div id='heroMainDiv'>
        <div>
          <h2>
            Hello
          </h2>
          <h1 id='heroText'>
            I am Harsh,
          </h1>
          <p>A Dev Surfing Through Tech.</p>
          <div id='icons'>
            <div>
              <a href='https://github.com/harshtohai' target='_blank' a><img src='./public/static/GitHub.svg' /></a>
              <a href='mailto:harsh.panchal.me@gmail.com'><img src='./public/static/Mail.svg' /></a>
              <a href='https://discord.com/users/1061913444586098778'><img src='./public/static/Discord.svg' /></a>
            </div>
          </div>
        </div>
      </div>
      <div id='backgrounds'>
        <svg width="1920" height="693" viewBox="0 0 1920 693" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_109_63)">
            <path d="M933.251 986C1463.33 986 2111 723.639 2111 400L-235 400C-235 723.639 403.171 986 933.251 986Z" fill="url(#paint0_linear_109_63)" fill-opacity="0.5" />
          </g>
          <defs>
            <filter id="filter0_f_109_63" x="-635" y="0" width="3146" height="1386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_109_63" />
            </filter>
            <linearGradient id="paint0_linear_109_63" x1="938" y1="986" x2="938" y2="400" gradientUnits="userSpaceOnUse">
              <stop stop-color="#648FFF" />
              <stop offset="1" stop-color="#0041E9" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        s
      </div>
    </>

  )
}
