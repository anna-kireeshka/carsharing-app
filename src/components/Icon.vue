<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="close" width="32" height="32" viewBox="0 0 32 32">
      <path
        d="M24 8L8 24"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 8L24 24"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </symbol>
    <symbol id="menu" viewBox="0 0 32 32" fill="none">
      <path
        d="M4 16H28"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 8H28"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 24H28"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </symbol>

    <symbol id="menu-mobile" viewBox="0 0 32 32" fill="none">
      <path
        d="M4 16H28"
        stroke="#121212"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 8H28"
        stroke="#121212"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 24H28"
        stroke="#121212"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </symbol>

    <symbol id="gps" viewBox="0 0 18 20" fill="none">
      <path
        d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z"
        stroke="#999999"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z"
        stroke="#999999"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </symbol>

    <symbol id="telegram" viewBox="0 0 32 32" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z"
        fill="currentColor"
      />
    </symbol>

    <symbol id="arrow" viewBox="0 0 10 20" fill="none">
      <path
        d="M1 1L9 10L1 19"
        stroke="#EEEEEE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </symbol>

    <symbol id="arrow-breadcrumbs" viewBox="0 0 6 8" fill="none">
      <path d="M0 0L6 4.03L0 8V0Z" fill="#999999" />
    </symbol>
    <symbol id="cross" viewBox="0 0 6 8" fill="none">
      <path
        d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z"
        fill="#121212"
      />
    </symbol>
  </svg>
</template>
