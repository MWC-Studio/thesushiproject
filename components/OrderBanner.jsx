import { Button, Grid, Typography } from "@mui/material";
import MuiNextLink from "@components/MuiNextLink";

const OrderBanner = (props) => {
  return (
    <Grid container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: props.isMobile ? "30rem" : "20rem",
        width: "100vw",
        backgroundColor: props.bgColor,
        py: "3rem",
      }}
    >
      <Grid item xs={12}>
        <div className="display-linebreak">
          <Typography
            color="text"
            variant={props.isMobile ? "h3" : "h2"}
            align="center"
          >
            {props.text}
          </Typography>
        </div>
      </Grid>
      <Grid container item lg={7} md={9} sm={12} xs={12}
        gap={props.isMobile ? 5 : 0}
        justifyContent="center"
        alignItems="center"
        py={3}
      >
        <Grid item align="center" lg={3} md={3} sm={12} xs={12}>
          <MuiNextLink
            sx={{ textDecoration: "none", color: "primary.contrastText" }}
            href="https://www.doordash.com/store/sushi-rollin-garland-1775965/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="highlight">
              <svg width="155" height="18" viewBox="0 0 155 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1958_3762)">
                  <path d="M44.9392 5.07399V12.939H46.9002C47.4007 12.9316 47.8945 12.8238 48.3526 12.6222C48.8107 12.4205 49.2237 12.1291 49.5672 11.765C50.2722 11.0186 50.6579 10.0265 50.6422 8.99999C50.6571 8.49011 50.5712 7.98229 50.3893 7.50572C50.2074 7.02916 49.9331 6.59323 49.5822 6.22299C49.2373 5.85842 48.8214 5.56832 48.3602 5.37054C47.8989 5.17276 47.4021 5.0715 46.9002 5.07299H44.9402L44.9392 5.07399ZM46.9002 2.60799C50.5552 2.60799 53.3202 5.43999 53.3202 8.99999C53.3202 12.56 50.5552 15.408 46.9002 15.408H42.5752C42.534 15.4075 42.4932 15.3988 42.4553 15.3826C42.4174 15.3663 42.3831 15.3427 42.3543 15.3132C42.3255 15.2837 42.3029 15.2488 42.2876 15.2105C42.2723 15.1722 42.2647 15.1312 42.2652 15.09V2.93899C42.2652 2.76299 42.4042 2.61999 42.5752 2.61999L46.9002 2.60799ZM62.7412 13.213C64.4012 13.218 65.9002 12.197 66.5392 10.626C66.8522 9.85842 66.9359 9.01653 66.78 8.20236C66.6242 7.3882 66.2355 6.63671 65.6612 6.03899C65.0969 5.45109 64.3675 5.04821 63.5694 4.88359C62.7713 4.71897 61.9421 4.80035 61.1912 5.11699C59.6572 5.76499 58.6552 7.29799 58.6522 8.99999C58.6522 11.32 60.4802 13.202 62.7422 13.213H62.7412ZM62.7422 2.31799C66.5892 2.31799 69.5302 5.34999 69.5302 8.99999C69.5302 12.65 66.5892 15.682 62.7412 15.682C58.8942 15.682 55.9782 12.665 55.9782 8.99999C55.9782 5.33499 58.9192 2.31799 62.7412 2.31799H62.7422ZM78.8752 13.213C81.1382 13.207 82.9692 11.323 82.9672 9.00299C82.9642 6.68099 81.1292 4.80099 78.8672 4.79999C76.6032 4.79999 74.7672 6.67899 74.7642 8.99999C74.7642 10.118 75.1972 11.19 75.9682 11.98C76.3456 12.3693 76.7972 12.679 77.2963 12.8908C77.7955 13.1026 78.332 13.2121 78.8742 13.213H78.8752ZM78.8742 2.31799C82.7092 2.31799 85.6502 5.33499 85.6502 8.99999C85.6502 12.665 82.6972 15.682 78.8742 15.682C75.0522 15.682 72.0862 12.665 72.0862 8.99999C72.0862 5.33499 75.0272 2.31799 78.8742 2.31799ZM94.6202 5.07399H91.8552V8.45899H94.6202C94.8387 8.46868 95.0568 8.43348 95.2611 8.35556C95.4655 8.27765 95.6516 8.15868 95.8082 8.00599C96.1282 7.69599 96.3102 7.26599 96.3142 6.81399C96.3223 6.58468 96.2839 6.3561 96.2014 6.14199C96.1189 5.92787 95.994 5.73263 95.8342 5.56799C95.6773 5.40597 95.4882 5.27857 95.2792 5.19401C95.0701 5.10945 94.8456 5.06959 94.6202 5.07699V5.07399ZM89.1802 2.93899C89.1802 2.76299 89.3202 2.61999 89.4912 2.61999H94.6972C97.1792 2.61999 98.9752 4.48499 98.9752 6.82699C98.9942 8.41099 98.1292 9.86599 96.7482 10.575L99.1492 14.928C99.1824 14.978 99.2011 15.0363 99.2032 15.0963C99.2054 15.1563 99.1908 15.2157 99.1612 15.268C99.1323 15.3194 99.0892 15.3615 99.0371 15.3891C98.985 15.4168 98.926 15.4289 98.8672 15.424H96.7602C96.7018 15.4248 96.6443 15.4091 96.5944 15.3787C96.5445 15.3482 96.5042 15.3043 96.4782 15.252L94.1642 10.944H91.8452V15.08C91.8459 15.1213 91.8384 15.1624 91.8231 15.2008C91.8079 15.2392 91.7852 15.2742 91.7564 15.3038C91.7276 15.3335 91.6933 15.3571 91.6553 15.3735C91.6173 15.3898 91.5765 15.3985 91.5352 15.399H89.5052C89.4639 15.3985 89.4231 15.3898 89.3851 15.3735C89.3471 15.3571 89.3128 15.3335 89.284 15.3038C89.2552 15.2742 89.2325 15.2392 89.2173 15.2008C89.202 15.1624 89.1945 15.1213 89.1952 15.08L89.1812 2.93999L89.1802 2.93899ZM105.947 5.13399V13H107.907C108.408 12.9932 108.901 12.8862 109.36 12.6852C109.818 12.4843 110.231 12.1934 110.575 11.83C111.281 11.0845 111.667 10.0931 111.652 9.06699C111.668 8.55648 111.583 8.04785 111.402 7.57039C111.22 7.09293 110.946 6.65607 110.595 6.28499C110.25 5.91981 109.833 5.62934 109.371 5.43155C108.909 5.23375 108.411 5.13282 107.908 5.13499L105.947 5.13399ZM107.907 2.66499C111.562 2.66499 114.327 5.49999 114.327 9.06699C114.327 12.634 111.562 15.469 107.907 15.469H103.595C103.554 15.4685 103.513 15.4598 103.475 15.4435C103.437 15.4271 103.403 15.4035 103.374 15.3738C103.345 15.3442 103.323 15.3092 103.307 15.2708C103.292 15.2324 103.285 15.1913 103.285 15.15V2.99999C103.285 2.82299 103.424 2.67999 103.595 2.67999L107.908 2.66499H107.907ZM122.483 5.79299L120.966 9.99899H123.997L122.483 5.79299ZM120.076 12.376L119.083 15.176C119.063 15.2419 119.022 15.2993 118.966 15.3391C118.91 15.3789 118.842 15.3989 118.773 15.396H116.619C116.564 15.4011 116.509 15.3914 116.459 15.3678C116.41 15.3442 116.367 15.3077 116.336 15.262C116.305 15.2158 116.286 15.1622 116.281 15.1065C116.276 15.0508 116.286 14.9948 116.309 14.944L120.963 2.80499C120.985 2.74098 121.027 2.68581 121.083 2.6479C121.139 2.60999 121.206 2.59141 121.273 2.59499H123.683C123.751 2.59119 123.818 2.60966 123.874 2.64759C123.93 2.68552 123.972 2.74081 123.994 2.80499L128.648 14.944C128.671 14.9949 128.681 15.051 128.676 15.1067C128.671 15.1624 128.652 15.2159 128.62 15.262C128.589 15.3075 128.547 15.3438 128.497 15.3672C128.447 15.3906 128.392 15.4002 128.337 15.395H126.184C126.115 15.3979 126.048 15.3779 125.992 15.3381C125.935 15.2983 125.894 15.2409 125.874 15.175L124.881 12.375H120.076V12.376ZM131.145 6.06599C131.145 4.05599 132.839 2.31799 135.514 2.31799C136.955 2.28582 138.349 2.82468 139.394 3.81699C139.426 3.84709 139.451 3.88336 139.469 3.9236C139.486 3.96383 139.495 4.00718 139.495 4.05099C139.495 4.0948 139.486 4.13815 139.469 4.17839C139.451 4.21862 139.426 4.2549 139.394 4.28499L138.201 5.49999C138.173 5.52951 138.138 5.55298 138.101 5.56901C138.063 5.58504 138.022 5.5933 137.981 5.5933C137.94 5.5933 137.9 5.58504 137.862 5.56901C137.824 5.55298 137.79 5.52951 137.761 5.49999C137.199 4.97331 136.461 4.6749 135.691 4.66299C134.621 4.66299 133.83 5.29999 133.83 6.03499C133.83 8.41099 140.153 7.03999 140.153 11.612C140.15 13.929 138.443 15.682 135.425 15.682C134.587 15.6906 133.756 15.5305 132.981 15.2113C132.206 14.8921 131.503 14.4203 130.914 13.824C130.882 13.7939 130.857 13.7576 130.84 13.7174C130.822 13.6772 130.813 13.6338 130.813 13.59C130.813 13.5462 130.822 13.5028 130.84 13.4626C130.857 13.4224 130.882 13.3861 130.914 13.356L132.068 12.172C132.097 12.141 132.132 12.1163 132.17 12.0995C132.209 12.0826 132.251 12.0739 132.293 12.0739C132.335 12.0739 132.377 12.0826 132.416 12.0995C132.455 12.1163 132.489 12.141 132.518 12.172C133.245 12.8919 134.223 13.3008 135.245 13.312C136.582 13.312 137.463 12.58 137.463 11.663C137.463 9.28599 131.143 10.658 131.143 6.08499L131.145 6.06599ZM151.619 2.92299V7.72699H146.267V2.92299C146.268 2.88176 146.26 2.84082 146.245 2.80252C146.23 2.76422 146.207 2.72931 146.178 2.69978C146.149 2.67025 146.115 2.64668 146.077 2.63042C146.039 2.61415 145.998 2.60551 145.957 2.60499H143.927C143.886 2.60551 143.845 2.61415 143.807 2.63042C143.769 2.64668 143.735 2.67025 143.706 2.69978C143.678 2.72931 143.655 2.76422 143.64 2.80252C143.624 2.84082 143.617 2.88176 143.617 2.92299V15.06C143.617 15.236 143.757 15.379 143.927 15.379H145.957C146.127 15.379 146.267 15.236 146.267 15.06V10.18H151.615V15.06C151.615 15.236 151.755 15.379 151.925 15.379H153.955C154.126 15.379 154.265 15.236 154.265 15.06V2.92299C154.266 2.88176 154.258 2.84082 154.243 2.80252C154.228 2.76422 154.205 2.72931 154.176 2.69978C154.147 2.67025 154.113 2.64668 154.075 2.63042C154.037 2.61415 153.996 2.60551 153.955 2.60499H151.925C151.843 2.60709 151.764 2.64165 151.707 2.70117C151.65 2.76069 151.618 2.84039 151.619 2.92299ZM30.8702 4.22499C29.4622 1.61499 26.7072 -0.0100075 23.7112 -7.5156e-06H1.04319C0.890111 0.00061387 0.740595 0.0462678 0.613276 0.131266C0.485957 0.216264 0.386464 0.336848 0.327194 0.477992C0.268791 0.618232 0.25358 0.772714 0.28351 0.921652C0.31344 1.07059 0.387148 1.2072 0.495194 1.31399L5.43319 6.21399C5.86919 6.64799 6.46319 6.89099 7.08119 6.89099H23.0612C24.2002 6.87899 25.1312 7.78099 25.1432 8.90399C25.1552 10.027 24.2422 10.947 23.1032 10.958H12.0862C11.933 10.9581 11.7832 11.0032 11.6555 11.0879C11.5278 11.1725 11.4279 11.2929 11.3682 11.434C11.3092 11.5744 11.2936 11.7292 11.3234 11.8786C11.3531 12.0279 11.4269 12.1649 11.5352 12.272L16.4762 17.176C16.9149 17.6098 17.5072 17.8527 18.1242 17.852H23.1072C29.5902 17.852 34.4922 11.012 30.8702 4.22199" fill="#40464D" />
                </g>
                <defs>
                  <clipPath id="clip0_1958_3762">
                    <rect width="154" height="18" fill="white" transform="translate(0.265625)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </MuiNextLink>
        </Grid>
        <Grid item align="center" lg={3} md={3} sm={12} xs={12}>
          <MuiNextLink
            sx={{ textDecoration: "none", color: "primary.contrastText" }}
            href="https://www.ubereats.com/store/sushi-rollin/6P3FSDejTAuapBvlNZGQaQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlN1c2hpJTIwUm9sbGluJUUyJTgwJTk5JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSnRlSFdmeDBjVElZUkpvOWM3djhrczJJJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTMyLjk3NjUzJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTk2LjY2NDIyMzMlN0Q%3D&ps=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="highlight">
              <svg
                width="100"
                height="16"
                viewBox="0 0 100 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.5957 -7.62939e-06H63.6128V2.69564H55.5717V6.52345H63.3891V9.12745H55.5717V13.02H63.6128V15.7156H52.5957V-7.62939e-06ZM94.0385 15.9986C97.4162 15.9986 99.3193 14.3813 99.3193 12.16C99.3193 10.5777 98.1925 9.39701 95.8338 8.88484L93.3404 8.37536C91.8928 8.1058 91.4372 7.83623 91.4372 7.2971C91.4372 6.59893 92.1354 6.17032 93.4212 6.17032C94.8149 6.17032 95.8473 6.54502 96.1169 7.83354H99.039C98.8799 5.40746 97.1358 3.80624 93.5992 3.80624C90.5423 3.80624 88.3966 5.0678 88.3966 7.51275C88.3966 9.20292 89.5773 10.3027 92.1246 10.8392L94.9119 11.4834C96.0118 11.6991 96.3056 11.9956 96.3056 12.4512C96.3056 13.1763 95.4753 13.6319 94.1329 13.6319C92.4454 13.6319 91.4804 13.2572 91.1057 11.9687H88.1674C88.596 14.3893 90.3913 15.9986 94.0385 15.9986ZM87.3183 15.7048H84.1563C82.1723 15.7048 81.0725 14.4702 81.0725 12.9121V6.7391H78.8486V4.10815H81.0833V0.80599H84.0215V4.10815H87.3183V6.7391H84.0215V12.16C84.0215 12.7773 84.4501 13.0739 85.1214 13.0739H87.3183V15.7048ZM74.6488 4.11355V5.15946C73.6143 4.28495 72.3023 3.80717 70.9476 3.81163C70.1367 3.79458 69.3304 3.93958 68.5762 4.23814C67.822 4.53671 67.1349 4.98282 66.5553 5.55035C65.9757 6.11787 65.5153 6.79538 65.2009 7.54317C64.8866 8.29095 64.7246 9.09396 64.7246 9.90514C64.7246 10.7163 64.8866 11.5193 65.2009 12.2671C65.5153 13.0149 65.9757 13.6924 66.5553 14.2599C67.1349 14.8275 67.822 15.2736 68.5762 15.5721C69.3304 15.8707 70.1367 16.0157 70.9476 15.9986C72.3025 16.0045 73.615 15.5266 74.6488 14.6508V15.6994H77.5789V4.10815L74.6488 4.11355ZM71.1903 13.454C70.4874 13.462 69.798 13.2608 69.2097 12.8761C68.6214 12.4914 68.1608 11.9405 67.8864 11.2933C67.6119 10.6462 67.5361 9.93209 67.6685 9.24176C67.8009 8.55142 68.1355 7.91603 68.6299 7.41634C69.1243 6.91665 69.756 6.57522 70.4449 6.43544C71.1338 6.29565 71.8487 6.36384 72.4987 6.63132C73.1488 6.8988 73.7046 7.3535 74.0956 7.93763C74.4866 8.52177 74.6951 9.20896 74.6946 9.91188C74.6989 10.3752 74.6112 10.8349 74.4367 11.2641C74.2621 11.6934 74.0042 12.0838 73.6778 12.4127C73.3514 12.7416 72.963 13.0025 72.5351 13.1803C72.1072 13.3581 71.6483 13.4493 71.1849 13.4486L71.1903 13.454Z"
                  fill="#40464D"
                />
                <path
                  d="M46.0565 6.28354C44.582 6.28354 43.5361 7.43728 43.5361 9.20832V15.7048H41.2853V4.26989H43.5092V5.66624C43.7835 5.20344 44.1766 4.82242 44.6477 4.56268C45.1188 4.30294 45.6509 4.17393 46.1886 4.18902H46.9973V6.28354H46.0565ZM39.7299 9.98736C39.7299 6.57737 37.3038 4.02729 34.0205 4.02729C33.2447 4.03255 32.4777 4.19116 31.7634 4.49398C31.0492 4.79679 30.4019 5.23785 29.8587 5.79177C29.3156 6.34568 28.8873 7.00153 28.5986 7.72157C28.3099 8.44162 28.1664 9.21164 28.1763 9.98736C28.1763 13.3947 30.8046 15.9717 34.2334 15.9717C35.1912 15.9898 36.1394 15.7774 36.9979 15.3523C37.8564 14.9273 38.6002 14.3021 39.1665 13.5294L37.5329 12.3326C37.1581 12.8556 36.6622 13.2801 36.0876 13.5698C35.5131 13.8594 34.8768 14.0056 34.2334 13.9958C33.3171 13.9915 32.4326 13.659 31.7403 13.0586C31.0479 12.4583 30.5936 11.6298 30.4595 10.7233H39.7353L39.7299 9.98736ZM30.5081 8.93875C30.9097 7.19467 32.3034 6.01398 33.9935 6.01398C35.6837 6.01398 37.0747 7.19467 37.452 8.93875H30.5081ZM21.0464 4.02729C20.2941 4.02792 19.5495 4.17761 18.8555 4.46771C18.1614 4.75782 17.5318 5.18258 17.0029 5.71746V-7.62939e-06H14.752V15.7048H16.9759V14.2546C18.0533 15.3445 19.5193 15.9621 21.0517 15.9717C21.8467 15.9886 22.637 15.8466 23.3764 15.554C24.1158 15.2615 24.7893 14.8243 25.3575 14.2681C25.9257 13.7118 26.3771 13.0477 26.6853 12.3147C26.9934 11.5818 27.1522 10.7946 27.1522 9.99949C27.1522 9.20435 26.9934 8.41722 26.6853 7.68423C26.3771 6.95125 25.9257 6.28717 25.3575 5.73092C24.7893 5.17468 24.1158 4.73747 23.3764 4.44493C22.637 4.15239 21.8467 4.0104 21.0517 4.02729H21.0464ZM20.8846 13.9607C20.1001 13.9645 19.3321 13.7351 18.6781 13.3016C18.0241 12.8682 17.5136 12.2502 17.2114 11.5262C16.9092 10.8022 16.8289 10.0047 16.9806 9.23495C17.1324 8.4652 17.5094 7.75787 18.0638 7.20272C18.6182 6.64757 19.325 6.26961 20.0945 6.11681C20.8641 5.964 21.6617 6.04324 22.3861 6.34446C23.1105 6.64569 23.7292 7.15532 24.1635 7.8087C24.5979 8.46208 24.8283 9.22975 24.8256 10.0143C24.8264 10.5318 24.7249 11.0443 24.527 11.5225C24.3291 12.0007 24.0388 12.4351 23.6726 12.8007C23.3064 13.1664 22.8717 13.4562 22.3932 13.6534C21.9148 13.8506 21.4021 13.9514 20.8846 13.95V13.9607ZM6.46291 13.8529C8.6356 13.8529 10.3231 12.187 10.3231 9.69084V-7.62939e-06H12.6548V15.7048H10.35V14.2195C9.81156 14.776 9.16579 15.2175 8.45179 15.5173C7.73779 15.8171 6.9704 15.9689 6.19604 15.9636C2.84536 15.9636 0.265625 13.5213 0.265625 9.81753V-7.62939e-06H2.64049V9.70431C2.64049 12.214 4.25787 13.8529 6.46291 13.8529Z"
                  fill="#40464D"
                />
              </svg>
            </div>
          </MuiNextLink>
        </Grid>
        <Grid item align="center" lg={2} md={3} sm={12} xs={12}>
          <MuiNextLink
            sx={{ textDecoration: "none", color: "primary.contrastText" }}
            href="https://www.grubhub.com/restaurant/sushi-rollin-6850-n-shiloh-rd-garland/2769858"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="highlight">
              <svg width="96" height="20" viewBox="0 0 96 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1958_3767)">
                  <path d="M80.6679 0.299917H77.3329C77.1449 0.299917 77.051 0.393912 77.051 0.581826V13.7811C77.051 14.4388 76.8397 14.9319 76.5577 15.3079C76.276 15.6837 75.9003 15.7776 75.4304 15.7776C74.9607 15.7776 74.5614 15.5896 74.2796 15.3079C73.9978 14.9319 73.81 14.4388 73.81 13.7811V0.581826C73.81 0.393912 73.6218 0.299917 73.528 0.299917H70.1693C69.9814 0.299917 69.8876 0.393912 69.8876 0.581826V13.8752C69.8876 15.5897 70.2634 17.2103 71.3202 18.2671C72.3536 19.3241 73.7864 19.8877 75.4303 19.8877C77.1448 19.8877 78.5775 19.3241 79.5404 18.2671C80.5739 17.2339 80.9732 15.7073 80.9732 13.8752V0.581826C81.0671 0.487982 80.8793 0.299917 80.6679 0.299917ZM93.4682 9.67122C94.0318 9.1074 95.0888 7.76871 95.0888 6.03075C95.0888 4.01102 94.3138 2.78969 93.7266 2.10843C92.6697 0.981098 91.2604 0.393912 89.6165 0.393912H84.3554C84.1441 0.393912 84.05 0.581826 84.05 0.675671V19.3241C84.05 19.5119 84.2379 19.606 84.3554 19.606H89.9217C91.6362 19.606 93.2567 18.9483 94.3138 17.5861C94.8774 16.8345 95.5584 15.5661 95.5584 13.6639C95.3705 11.3857 93.9613 10.0469 93.4682 9.67122ZM87.9253 4.22215H89.64C90.1096 4.22215 90.4853 4.316 90.7673 4.6919C91.0725 4.99718 91.1666 5.467 91.1666 6.05411C91.1666 6.64122 91.0725 7.08738 90.7673 7.48688C90.4853 7.76864 90.1096 7.95655 89.7338 7.95655H88.0194V4.22215H87.9253ZM90.9786 15.2138C90.6967 15.5897 90.3209 15.6837 89.7337 15.6837H87.8315V11.6438H89.7337C90.2036 11.6438 90.5793 11.8552 90.8611 12.1373C91.1665 12.5129 91.3544 12.9826 91.3544 13.5698C91.4483 14.3448 91.284 14.8146 90.9786 15.2138ZM22.9615 11.2916C23.3372 11.0098 23.6426 10.8219 23.9244 10.4227C24.582 9.67115 25.4509 8.33223 25.4509 6.21851C25.4509 4.19864 24.6759 2.88346 23.9244 2.10843C22.9615 0.981098 21.5287 0.393912 19.9082 0.299917H14.3653C14.1774 0.299917 14.0835 0.487982 14.0835 0.581826V19.2068C14.0835 19.3946 14.2714 19.4885 14.3653 19.4885H17.7004C17.8883 19.4885 17.9823 19.3005 17.9823 19.2068V12.3251H19.1331L21.2234 19.3946C21.2234 19.4885 21.4348 19.5825 21.5288 19.5825H25.0517C25.1457 19.5825 25.2397 19.4885 25.3336 19.4885C25.4275 19.4885 25.4275 19.3005 25.4275 19.2068L22.9615 11.2916ZM20.8476 7.83896C20.5658 8.21502 20.096 8.42615 19.5088 8.42615H17.8882V4.22215H19.5088C20.0725 4.22215 20.5422 4.41007 20.8476 4.78582C21.2233 5.18524 21.3408 5.65492 21.3408 6.31258C21.3408 6.99361 21.2469 7.46321 20.8476 7.83896ZM51.2158 9.67122C51.803 9.1074 52.8365 7.76871 52.8365 6.03075C52.8365 4.01102 52.0849 2.78969 51.4977 2.10843C50.4408 0.981098 49.008 0.393912 47.3875 0.393912H42.1499C41.962 0.393912 41.8681 0.581826 41.8681 0.675671V19.3241C41.8681 19.5119 42.056 19.606 42.1499 19.606H47.6928C49.4073 19.606 51.0279 18.9483 52.1082 17.5861C52.672 16.8345 53.3531 15.5661 53.3531 13.6639C53.2357 11.3857 51.803 10.0469 51.2158 9.67122ZM45.6964 4.22215H47.411C47.8807 4.22215 48.2566 4.316 48.5384 4.6919C48.8201 4.99718 48.9142 5.467 48.9142 6.05411C48.9142 6.64122 48.8201 7.08738 48.5384 7.48688C48.2565 7.76864 47.8807 7.95655 47.5049 7.95655H45.7903V4.22215H45.6964ZM48.8436 15.2138C48.5619 15.5897 48.1859 15.6837 47.5988 15.6837H45.6964V11.6438H47.5988C48.0685 11.6438 48.4443 11.8552 48.7262 12.1373C49.0079 12.5129 49.2193 12.9826 49.2193 13.5698C49.2429 14.3448 49.149 14.8146 48.8436 15.2138ZM5.83972 0.018158C4.12512 0.018158 2.6925 0.581826 1.72956 1.63861C0.696067 2.69555 0.320312 4.19864 0.320312 6.03067V13.969C0.320312 15.6837 0.696067 17.304 1.72956 18.3611C2.78642 19.4181 4.21911 19.9818 5.83972 19.9818C7.55417 19.9818 9.0103 19.4182 9.97325 18.3611C11.0067 17.3276 11.3825 15.801 11.3825 13.969V9.60045C11.3825 9.38924 11.1946 9.2014 11.0067 9.2014H6.145C5.93371 9.2014 5.7458 9.38924 5.7458 9.60045V12.8417C5.7458 13.0296 5.93371 13.2176 6.145 13.2176H7.38985V13.9926C7.38985 14.6502 7.20193 15.2374 6.92017 15.6133C6.63819 15.9891 6.23907 16.0829 5.76924 16.0829C5.29957 16.0829 4.92374 15.8951 4.61846 15.6133C4.33663 15.2374 4.14879 14.6503 4.14879 13.9926V6.14826C4.14879 5.467 4.33663 4.87982 4.61846 4.52736C4.92381 4.1516 5.29957 4.05776 5.76924 4.05776C6.23907 4.05776 6.63826 4.24567 6.92017 4.52736C7.20201 4.90318 7.38985 5.467 7.38985 6.14826V6.89977C7.38985 7.08746 7.57769 7.20497 7.67168 7.20497H11.0068C11.1947 7.20497 11.2886 7.08746 11.2886 6.89977V6.14826C11.2886 4.43351 10.9129 2.81298 9.85603 1.75612C9.01038 0.581826 7.46025 0.018158 5.83972 0.018158ZM38.5331 0.299917H35.1979C35.01 0.299917 34.916 0.393912 34.916 0.581826V13.7811C34.916 14.4388 34.7047 14.9319 34.4229 15.3079C34.141 15.6837 33.7652 15.7776 33.2955 15.7776C32.8258 15.7776 32.4265 15.5896 32.1447 15.3079C31.8629 14.9319 31.675 14.4388 31.675 13.7811V0.581826C31.675 0.393912 31.4636 0.299917 31.3697 0.299917H28.0346C27.8467 0.299917 27.7528 0.393912 27.7528 0.581826V13.8752C27.7528 15.5897 28.1521 17.2103 29.1854 18.2671C30.2423 19.3241 31.675 19.8877 33.2956 19.8877C35.0102 19.8877 36.4663 19.3241 37.4057 18.2671C38.4626 17.2339 38.8383 15.7073 38.8383 13.8752V0.581826C38.8149 0.487982 38.7209 0.299917 38.5331 0.299917ZM66.6229 0.299917H63.2879C63.1 0.299917 63.0061 0.487982 63.0061 0.581826V7.83896H59.671V0.581826C59.671 0.393912 59.4831 0.299917 59.3891 0.299917H56.054C55.8661 0.299917 55.7722 0.487982 55.7722 0.581826V19.2068C55.7722 19.3946 55.9602 19.4885 56.054 19.4885H59.3891C59.577 19.4885 59.671 19.3005 59.671 19.2068V11.7615H63.0061V19.2068C63.0061 19.3946 63.194 19.4885 63.2879 19.4885H66.6229C66.8109 19.4885 66.9049 19.3005 66.9049 19.2068V0.581826C66.9049 0.487982 66.8109 0.299917 66.6229 0.299917Z" fill="#40464D" />
                </g>
                <defs>
                  <clipPath id="clip0_1958_3767">
                    <rect width="95.2381" height="20" fill="white" transform="translate(0.320312)" />
                  </clipPath>
                </defs>
              </svg>

            </div>
          </MuiNextLink>
        </Grid>
        <Grid item align="center" lg={2} md={2} sm={12} xs={12}>
          <MuiNextLink
            sx={{ textDecoration: "none", color: "primary.contrastText" }}
            href="https://www.yelp.com/biz/sushi-rollin-garland"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="highlight">
              <svg
                width="68"
                height="24"
                viewBox="0 0 68 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.9547 14.0577L56.0561 13.8231C56.0979 13.8101 56.1258 13.8101 56.1676 13.7971C56.795 13.6407 57.1854 13.0413 57.032 12.4549L57.0181 12.4419C56.9762 12.3116 56.9205 12.1682 56.8368 12.064C56.7114 11.9207 56.558 11.8034 56.3907 11.6992C56.1816 11.5949 55.9725 11.5037 55.7494 11.4255L54.5504 11.0085C53.8812 10.774 53.1981 10.5525 52.515 10.3309C52.0689 10.1876 51.6924 10.0573 51.3718 9.95306C51.316 9.94003 51.2463 9.91397 51.1906 9.90094C50.8002 9.78366 50.5214 9.74457 50.2844 9.74457C50.131 9.74457 49.9777 9.77063 49.8243 9.82275C49.6709 9.8879 49.5315 9.97912 49.42 10.0834C49.3642 10.1355 49.3085 10.2006 49.2666 10.2658C49.1691 10.3961 49.0993 10.5525 49.0436 10.6958C48.8205 11.3082 48.709 11.9598 48.709 12.6113C48.709 13.1977 48.7369 13.9534 49.0854 14.4747C49.1691 14.605 49.2806 14.7222 49.4061 14.8004C49.657 14.9568 49.9079 14.9828 50.1589 14.9959C50.5353 15.0219 50.9117 14.9307 51.2881 14.8525L54.9547 14.0577ZM67.1953 8.61091C66.8886 8.02454 66.4982 7.49028 66.0103 7.02118C65.9406 6.96906 65.8848 6.90391 65.8011 6.86482C65.7314 6.8127 65.6617 6.7736 65.592 6.73451C65.5223 6.69542 65.4387 6.66936 65.369 6.63027C65.2156 6.57815 65.0483 6.55209 64.881 6.55209C64.7277 6.56512 64.5743 6.60421 64.4349 6.66936C64.2258 6.7736 64.0027 6.92997 63.696 7.19058C63.6542 7.22967 63.5984 7.26876 63.5566 7.30786C63.3056 7.52937 63.0268 7.80302 62.7062 8.11575C62.2043 8.59788 61.7024 9.08001 61.2005 9.56214L60.3082 10.4222C60.1409 10.5785 60.0015 10.7479 59.8621 10.9303C59.7506 11.0867 59.6669 11.2561 59.6251 11.4385C59.5972 11.5819 59.5972 11.7252 59.639 11.8555L59.653 11.8685C59.7924 12.468 60.4198 12.8458 61.0611 12.7286C61.1029 12.7155 61.1447 12.7155 61.1726 12.7025L65.9127 11.6731C66.2891 11.5949 66.6655 11.5167 67.0001 11.3343C67.2232 11.217 67.4462 11.0867 67.5856 10.8391C67.6693 10.7088 67.7111 10.5525 67.7251 10.4091C67.7948 9.82275 67.4602 9.14516 67.1953 8.61091ZM58.705 10.4743C59.0535 10.0703 59.0535 9.47093 59.0814 8.97577C59.179 7.33392 59.2905 5.69207 59.3742 4.03719C59.416 3.42475 59.4857 2.79929 59.4439 2.17382C59.402 1.6526 59.402 1.06623 59.0535 0.636218C58.4401 -0.106523 57.1156 -0.04137 56.2234 0.0628744C55.9446 0.101966 55.6657 0.141057 55.4009 0.20621C55.122 0.271363 54.8571 0.336515 54.5923 0.414699C53.7279 0.67531 52.515 1.15744 52.3059 2.08261C52.1943 2.61686 52.4592 3.15111 52.6823 3.62021C52.9332 4.20659 53.2957 4.72781 53.6164 5.27509C54.4528 6.73451 55.3172 8.16787 56.1816 9.60123C56.4465 10.0312 56.7253 10.5655 57.2132 10.787C57.2551 10.8 57.2829 10.8131 57.3108 10.8261C57.5339 10.9043 57.7848 10.9173 58.0079 10.8652L58.0497 10.8522C58.2588 10.8 58.454 10.6828 58.6074 10.5394C58.6492 10.5264 58.6771 10.5003 58.705 10.4743ZM58.2867 14.8786C58.0079 14.5137 57.5199 14.3574 57.0599 14.5007C57.0041 14.5137 56.9623 14.5398 56.9065 14.5528C56.8229 14.5919 56.7532 14.631 56.6974 14.6831C56.5022 14.8134 56.3349 14.9959 56.1816 15.1783C56.1398 15.2174 56.1119 15.2825 56.0561 15.3216L55.2893 16.2989C54.8571 16.8462 54.425 17.3935 54.0067 17.9538C53.7279 18.3187 53.4909 18.6184 53.2957 18.892C53.2539 18.9441 53.226 19.0093 53.1842 19.0484C52.9611 19.3741 52.8356 19.6087 52.7659 19.8172C52.7241 19.9605 52.6962 20.1169 52.7241 20.2602C52.7381 20.4166 52.7938 20.5599 52.8775 20.6902C52.9193 20.7554 52.9751 20.8205 53.0308 20.8857C53.1424 21.003 53.2678 21.1202 53.4212 21.2114C53.951 21.5502 54.5226 21.7978 55.136 21.9933C55.6379 22.1496 56.1676 22.2409 56.6974 22.2669C56.795 22.2669 56.8786 22.2669 56.9762 22.2669C57.0599 22.2539 57.1435 22.2539 57.2272 22.2278C57.3108 22.2148 57.3945 22.1887 57.4642 22.1627C57.7709 22.0584 58.0218 21.8369 58.1334 21.5502C58.217 21.3418 58.2728 21.0811 58.3146 20.6902C58.3146 20.6381 58.3286 20.573 58.3286 20.5078C58.3564 20.182 58.3704 19.8041 58.3983 19.3611C58.4401 18.6835 58.468 18.0059 58.4819 17.3153L58.5237 16.1035C58.5377 15.8168 58.5237 15.5171 58.4401 15.2304C58.4261 15.1132 58.3704 14.9959 58.2867 14.8786ZM66.9025 16.768C66.7492 16.5986 66.5122 16.4423 66.1636 16.2468C66.1079 16.2207 66.0521 16.1817 65.9963 16.1556C65.7036 15.9862 65.3411 15.8168 64.9228 15.6083C64.2815 15.2825 63.6402 14.9568 62.9989 14.6441L61.8557 14.0837C61.8 14.0707 61.7303 14.0316 61.6745 14.0056C61.4514 13.9013 61.2144 13.8231 60.9774 13.771C60.8938 13.758 60.8101 13.7449 60.7265 13.7449C60.6707 13.7449 60.6149 13.7449 60.5592 13.758C60.0852 13.8231 59.7227 14.1619 59.639 14.605C59.6251 14.7353 59.6251 14.8786 59.653 15.0089C59.7088 15.2956 59.8482 15.5692 59.9876 15.8168L60.601 16.8853C60.9356 17.4977 61.2841 18.0841 61.6327 18.6835C61.8557 19.0744 62.0509 19.4002 62.2321 19.6869C62.26 19.739 62.3019 19.7911 62.3297 19.8432C62.5389 20.182 62.7201 20.3905 62.9013 20.5339C63.0129 20.6381 63.1523 20.7163 63.2917 20.7684C63.445 20.8205 63.6123 20.8336 63.7796 20.8205C63.8633 20.8075 63.9469 20.7945 64.0306 20.7814C64.1142 20.7554 64.1979 20.7423 64.2676 20.7163C64.3512 20.6772 64.4349 20.6511 64.5046 20.612C64.9786 20.3645 65.3968 20.0648 65.7733 19.726C66.2333 19.309 66.6376 18.8529 66.9443 18.3187C66.9862 18.2405 67.028 18.1623 67.0559 18.0841C67.0838 18.0059 67.1116 17.9408 67.1395 17.8626C67.1535 17.7844 67.1674 17.7062 67.1813 17.628C67.1953 17.4717 67.1813 17.3153 67.1256 17.172C67.0977 17.0026 67.014 16.8723 66.9025 16.768Z"
                  fill="#40464D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.533 6.36964C27.533 5.48356 28.2998 4.76688 29.2339 4.76688C30.154 4.76688 30.8929 5.48357 30.9347 6.38267V18.879C30.9347 19.7651 30.1679 20.4817 29.2339 20.4817C28.2998 20.4817 27.533 19.7651 27.533 18.879V6.36964ZM25.9576 14.0837C25.9437 14.3313 25.874 14.7874 25.5394 15.1262C25.163 15.491 24.6611 15.5692 24.3683 15.5692C23.1554 15.5822 21.9425 15.5822 20.7296 15.5822C19.5167 15.5822 18.3038 15.5822 17.0909 15.5953C17.2024 15.908 17.4116 16.3771 17.8856 16.8071C18.1783 17.0677 18.4572 17.2111 18.5687 17.2762C18.7081 17.3674 19.2239 17.615 19.8374 17.615C20.4926 17.615 21.0781 17.4196 21.6497 17.1459L21.6916 17.1199C22.0959 16.9244 22.5002 16.7289 22.9324 16.6638C23.3506 16.5986 23.8107 16.6768 24.1452 16.9505C24.5495 17.2762 24.7029 17.7453 24.5496 18.2274C24.3823 18.7747 23.8943 19.2438 23.3645 19.5305C23.0718 19.6869 22.7511 19.8302 22.4305 19.9344C21.6079 20.2081 20.7436 20.3384 19.8792 20.3123C19.6701 20.3123 19.447 20.3123 19.2239 20.2863C18.9869 20.2602 18.7499 20.2211 18.5129 20.156C18.1505 20.0778 17.788 19.9735 17.4534 19.8172C17.1188 19.6738 16.7981 19.5044 16.4914 19.309C16.1847 19.1005 15.9059 18.879 15.641 18.6184C15.3761 18.3708 15.1531 18.0841 14.9439 17.7974C14.2329 16.7811 13.8983 15.5301 13.9541 14.3053C14.0099 13.1195 14.4281 11.9207 15.2088 10.9564C15.2925 10.8391 15.3761 10.7349 15.4737 10.6306C15.5155 10.5915 15.5574 10.5525 15.5852 10.5003C16.5333 9.41879 17.8019 9.08 18.3317 8.93666L18.3596 8.92363C19.4191 8.63696 20.5484 8.63696 21.6079 8.92363C21.8589 8.98878 23.2809 9.39273 24.3823 10.5003C24.438 10.5525 24.5774 10.7088 24.7726 10.9434C25.2466 11.5428 25.5952 12.2204 25.7903 12.937C25.8879 13.2628 25.9576 13.6277 25.9576 14.0837ZM18.1783 12.0379C17.6625 12.4419 17.2861 12.9892 17.1467 13.6016H22.9184C22.7651 12.9892 22.4026 12.4289 21.8728 12.0379C21.343 11.647 20.7017 11.4255 20.0186 11.4255C19.7816 11.4255 18.9591 11.4646 18.1783 12.0379ZM40.15 8.75423C38.6303 8.75423 37.2641 9.3797 36.2743 10.4091V10.3831C36.2185 8.28513 32.8307 8.36332 32.9004 10.4743V22.4103C32.9004 23.2833 33.6533 24 34.6013 24C35.5354 24 36.2882 23.2963 36.2882 22.4103V18.6835C37.2641 19.6999 38.6303 20.3514 40.15 20.3514C43.1752 20.3514 45.6429 17.7844 45.6429 14.5789C45.6429 11.3603 43.1752 8.75423 40.15 8.75423ZM39.3971 17.7323C37.6823 17.7323 36.2743 16.325 36.2743 14.5789C36.2743 12.8198 37.6684 11.4125 39.3971 11.4125C41.1259 11.4125 42.52 12.8198 42.52 14.5789C42.52 16.338 41.1259 17.7323 39.3971 17.7323ZM11.4447 15.3868L10.887 16.5335C10.6361 17.0286 10.3851 17.5368 10.1481 18.045C10.0645 18.2014 9.99475 18.3578 9.92504 18.5141C8.8655 20.7163 7.61077 23.3354 4.86432 23.8827C3.53989 24.1564 1.53233 23.7785 0.793439 22.6187C0.0545459 21.433 1.15591 20.0778 2.56399 20.3905C2.78706 20.4296 3.01012 20.5339 3.23318 20.6381C3.6096 20.8075 3.97207 20.9899 4.39031 20.9117C4.76673 20.8466 5.01768 20.586 5.31045 20.2602C5.6311 19.8954 5.8681 19.4784 5.99357 19.0223C5.97963 19.0093 5.97963 18.9963 5.97963 18.9832C5.96569 18.9702 5.96569 18.9572 5.95175 18.9441C5.60321 18.3447 5.31045 17.7974 5.0595 17.3544C4.8922 17.0677 4.75279 16.8071 4.62732 16.5986L4.05572 15.5822C3.63748 14.8265 3.56777 14.7092 3.37259 14.3834C2.96829 13.6537 2.53611 12.937 2.07605 12.2334C1.5881 11.4646 1.08621 10.6046 1.49051 9.69243C1.81116 8.96272 2.67553 8.58484 3.47018 8.83242C4.32061 9.06697 4.69703 9.83577 5.0595 10.5394C5.11527 10.6697 5.18497 10.8 5.25468 10.9173C5.82628 11.9728 6.38393 13.0283 6.94159 14.0837C6.98341 14.188 7.06706 14.3313 7.16465 14.5007C7.2483 14.6571 7.34589 14.8395 7.44348 15.035C7.49924 15.1392 7.54107 15.2304 7.59683 15.3216C7.6526 15.4259 7.70836 15.5301 7.73625 15.6083C8.00113 15.0089 8.25208 14.4095 8.51696 13.8101C8.78185 13.2107 9.04673 12.6113 9.29768 12.0119C9.29768 11.9728 9.36739 11.8555 9.45104 11.66C9.59045 11.3734 9.72986 11.0867 9.85533 10.8C10.2039 10.0182 10.6082 9.08 11.5283 8.81939C12.1975 8.63696 12.9085 8.87151 13.3128 9.40576C13.5219 9.66637 13.5916 9.96608 13.6056 10.2658C13.6195 10.9303 13.271 11.634 12.9782 12.2334C12.9085 12.3767 12.8388 12.5201 12.783 12.6634L12.7412 12.7416C12.6576 12.911 12.4345 13.3671 12.0581 14.1359C11.9187 14.4095 11.7932 14.6831 11.6538 14.9568C11.598 15.0871 11.5144 15.2434 11.4447 15.3868Z"
                  fill="#40464D"
                />
              </svg>
            </div>
          </MuiNextLink>
        </Grid>
      </Grid>
      <Grid item xs={12} align="center">
        <MuiNextLink underline="none" href="/menu_page/menu.jpg" target="_blank">
          <Button>View Store Menu</Button>
        </MuiNextLink>
      </Grid>
    </Grid>
  );
};

export default OrderBanner;
