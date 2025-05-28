// src/components/ProgressChart.jsx

export default function ProgressChart() {
  return (
    <div className="w-full h-[140px] rounded overflow-hidden relative">
      {/* Orange Layer */}
      <svg
        className="absolute top-0 left-0 w-[245px] h-[133px] flex-shrink-0"
        viewBox="0 0 245 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.927734 6.81839V133.411H244.928V30.8475C239.634 22.8378 227.747 5.7644 222.549 1.54844C216.052 -3.72152 213.886 9.86792 203.058 30.8475C194.395 47.6312 184.529 37.8407 180.679 30.8475L161.91 18.3683C158.06 25.0118 149.205 35.3256 144.585 23.4323C139.964 11.539 128.703 7.40081 123.65 6.81839C117.481 11.8138 103.078 23.6132 94.8129 30.8475C84.4819 39.8904 81.1682 29.9432 72.2016 18.3683C63.2351 6.79333 53.4889 20.7194 47.4462 23.4323C41.4035 26.1452 35.3609 12.9425 33.9964 9.86792C32.6319 6.79333 24.64 10.7722 20.5466 9.86792C17.2718 9.14449 16.0679 -0.0355054 11.4753 0.43796L0.927734 6.81839Z"
          fill="url(#orangeGradient)"
        />
        <defs>
          <linearGradient
            id="orangeGradient"
            x1="122.928"
            y1="0.410522"
            x2="122.928"
            y2="133.411"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E68254" />
            <stop offset="1" stopColor="#E68254" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Green Layer */}
      <svg
        className="absolute bottom-0 left-0 w-[245px] h-[101px] flex-shrink-0"
        viewBox="0 0 245 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.927734 5.27665V101.411H244.928V23.5243C239.634 17.4418 227.747 4.47625 222.549 1.27465C216.052 -2.72734 213.886 7.59246 203.058 23.5243C194.395 36.2698 184.529 28.8349 180.679 23.5243L161.91 14.0476C158.06 19.0927 149.205 26.925 144.585 17.8932C139.964 8.86145 128.703 5.71893 123.65 5.27665C117.481 9.07014 103.078 18.0306 94.8129 23.5243C84.4819 30.3915 81.1682 22.8376 72.2016 14.0476C63.2351 5.25762 53.4889 15.8331 47.4462 17.8932C41.4035 19.9534 35.3609 9.9273 33.9964 7.59246C32.6319 5.25762 24.64 8.27917 20.5466 7.59246C17.2718 7.04308 16.0679 0.0718095 11.4753 0.431359L0.927734 5.27665Z"
          fill="url(#greenGradient)"
        />
        <defs>
          <linearGradient
            id="greenGradient"
            x1="122.928"
            y1="0.410522"
            x2="122.928"
            y2="101.411"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#48A96A" />
            <stop offset="1" stopColor="#48A96A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Blue Layer */}
      <svg
        className="absolute bottom-0 left-0 w-[245px] h-[70px] flex-shrink-0"
        viewBox="0 0 245 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M244.928 3.78309V70.4105H0.927734V16.43C6.22162 12.2144 18.1088 3.22835 23.3064 1.00943C29.8035 -1.76424 31.9692 5.3881 42.7975 16.43C51.4603 25.2635 61.3262 20.1106 65.1763 16.43L83.9455 9.86197C87.7956 13.3586 96.6508 18.7869 101.271 12.5272C105.891 6.2676 117.153 4.08962 122.206 3.78309C128.374 6.41224 142.778 12.6224 151.043 16.43C161.374 21.1894 164.687 15.954 173.654 9.86197C182.62 3.76989 192.367 11.0994 198.409 12.5272C204.452 13.9551 210.495 7.00631 211.859 5.3881C213.224 3.76989 221.215 5.86404 225.309 5.3881C228.584 5.00735 229.788 0.175771 234.38 0.424963L244.928 3.78309Z"
          fill="url(#blueGradient)"
        />
        <defs>
          <linearGradient
            id="blueGradient"
            x1="122.928"
            y1="0.410522"
            x2="122.928"
            y2="70.4105"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5488D4" />
            <stop offset="1" stopColor="#5488D4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
