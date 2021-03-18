import Image from "next/image";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};
export const Header = ({}) => (
  <>
    <div className="flex justify-center w-full h-[18]">
      <motion.svg
        width="200"
        height="75"
        viewBox="0 0 349 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileTap={{opacity: 0.75, scale: 0.99}}
        drag
        dragConstraints={{left:0,right:0,top:0,bottom:0}}
      >
        <g id="logo 1">
          <g id="glove">
            <motion.path
              id="Vector"
              d="M246 72.2C246 85 235.9 94.6 222.8 94.5C209.7 94.5 199.9 84.8 199.9 71.9C199.9 59.2 210 49.6 223.1 49.7C236.4 49.9 246.1 59.4 246 72.2ZM235 71.9C235 64.5 229.6 58.6 223 58.6C216.1 58.6 210.7 64.7 210.7 72.2C210.8 79.5 216.2 85.4 222.8 85.5C229.6 85.7 235 79.6 235 71.9Z"
              fill="#023C8B"
              stroke="#FCFCFC"
              stroke-width="0.25"
              stroke-miterlimit="10"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              id="Vector_2"
              d="M297.2 93.2C297.2 78.7 297.2 64.8 297.2 50.4C308.3 50.4 319.2 50.4 330.4 50.4C330.4 53 330.4 55.5 330.4 58.5C323 58.5 315.8 58.5 308.1 58.5C308.1 61.6 308.1 64.4 308.1 67.6C314.6 67.6 321.2 67.6 327.6 67.6C329.7 75.7 329.3 76.3 322 76.3C318 76.3 314 76.3 310 76.3C309.5 76.3 309 76.4 308.1 76.6C308.1 79.1 308.1 81.7 308.1 85C313.5 85 318.9 85 324.3 85C332 85 332 85 331 93.1C320 93.2 308.8 93.2 297.2 93.2Z"
              fill="#023C8B"
              stroke="#FCFCFC"
              stroke-width="0.25"
              stroke-miterlimit="10"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              id="Vector_3"
              d="M159.7 72.1C159.7 77.2 159.8 82 159.6 86.8C159.5 88 158.5 89.7 157.5 90.2C151.4 93.5 144.9 95.4 137.8 94.1C125 91.7 117.4 81.5 119 69C120.5 57.2 131.8 48.4 144.2 50C149.6 50.7 154.7 53.3 161.1 55.4C158.1 58.9 156.3 60.9 154.5 63C151.8 61.8 149.3 60.4 146.7 59.5C141.1 57.6 135.3 59.6 132.1 64.1C128.8 68.8 128.8 75.4 132 80.1C135.2 84.7 140.8 86.5 146.6 85C149.4 84.2 150.9 82.9 150.7 79.8C150.5 77.4 150.7 74.9 150.7 72.1C153.8 72.1 156.4 72.1 159.7 72.1Z"
              fill="#023C8B"
              stroke="#FCFCFC"
              stroke-width="0.25"
              stroke-miterlimit="10"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              id="Vector_4"
              d="M282.1 49.9C285.8 49.9 289.1 49.9 293 49.9C288.7 61.1 284.5 71.9 280.3 82.7C279.8 84.1 279.2 85.5 278.6 86.9C275.9 93.8 274.2 94.8 266.8 93.4C265.9 93.2 264.6 92.4 264.3 91.6C258.9 77.8 253.7 64 248.2 49.9C252.3 49.9 255.7 49.9 259.5 49.9C263.1 60.1 266.6 70.3 270.2 80.6C270.6 80.6 271 80.6 271.4 80.6C275 70.5 278.5 60.3 282.1 49.9Z"
              fill="#023C8B"
              stroke="#FCFCFC"
              stroke-width="0.25"
              stroke-miterlimit="10"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              id="Vector_5"
              d="M167.4 50C170.7 50 173.8 50 177.6 50C177.6 61.3 177.6 72.7 177.6 84.6C184 84.6 189.7 84.6 195.8 84.6C195.8 87.8 195.8 90.3 195.8 93.2C186.4 93.2 177.1 93.2 167.4 93.2C167.4 78.9 167.4 64.6 167.4 50Z"
              fill="#023C8B"
              stroke="#FCFCFC"
              stroke-width="0.25"
              stroke-miterlimit="10"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </g>
          <g id="3">
            <motion.path
              id="Vector_6"
              d="M29.9 46.3C33.4 47.1 35.4 50.7 34.2 54C33.1 57.2 32.2 60.1 32 61.1C31.9 61.6 31.8 62.1 31.7 62.6C29.4 78.4 40 92.7 56.3 95.2C65.8 96.7 73.9 93.4 80.6 86.7C81.6 85.7 82.6 84.5 83.4 83.3C85.9 80 89.1 79.4 92.3 81.8C95.5 84.2 95.2 87.5 92.9 90.6C83.5 103.1 70.8 108.9 55.4 107C31 104.1 15.2 81.5 20.3 58.3C20.6 57.1 21.6 53 23 49.6C24.2 47.1 27.1 45.6 29.9 46.3Z"
              fill="#00A351"
              stroke="#ffffff"
              stroke-width="0.25"
              strokeOpacity="0.5"
              stroke-miterlimit="10"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </g>
          <g id="1">
            <g id="Vector_7">
              <motion.path
                d="M100.4 60.1C100.5 60.5 100.5 60.9 100.6 61.3C102 69.7 99.1 72.5 90.7 72.3C75.4 71.9 60.1 71.9 44.8 71.7C43.1 71.7 41.1 72.2 39.9 71.4C38 70.3 35.4 68.3 35.4 66.6C35.4 64.6 37.4 62 39.3 60.7C40.9 59.6 43.5 59.9 45.6 59.9C59.6 59.8 73.6 59.9 87.9 59.9"
                fill="#366AAB"
                stroke="#ffffff"
                stroke-width="0.25"
                strokeOpacity="0.5"
                stroke-miterlimit="10"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              {/* <motion.path
                d="M100.4 60.1C100.5 60.5 100.5 60.9 100.6 61.3C102 69.7 99.1 72.5 90.7 72.3C75.4 71.9 60.1 71.9 44.8 71.7C43.1 71.7 41.1 72.2 39.9 71.4C38 70.3 35.4 68.3 35.4 66.6C35.4 64.6 37.4 62 39.3 60.7C40.9 59.6 43.5 59.9 45.6 59.9C59.6 59.8 73.6 59.9 87.9 59.9"
                stroke="#FCFCFC"
                stroke-width="0.25"
                stroke-miterlimit="10"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              /> */}
            </g>
          </g>
          <g id="2">
            <motion.path
              id="Vector_8"
              d="M88.1 60.7C88 60.2 87.9 59.7 87.9 59.2C86.7 48.5 75.4 38.3 64 37.3C51.2 36.1 40.1 42.4 34.8 52.9C33.6 55.2 31.2 56.4 28.7 55.9L28.1 55.8C24.5 55 22.7 51.1 24.4 47.8C31.4 34.5 44.9 25.5 62 26C79.1 26.4 94.7 38.6 99.3 55.5C99.8 57.4 100.3 59.4 100.6 61.3C101.6 67.3 100.4 70.5 96.5 71.7C93.5 72.7 90.3 70.7 89.6 67.7L88.1 60.7Z"
              fill="#00ABEC"
              stroke="#ffffff"
              stroke-width="0.25"
              strokeOpacity="0.5"
              stroke-miterlimit="10"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </g>
          <g id="x32 to3">
            <motion.path
              id="Vector_9"
              d="M34.3 53.6C35.2 50.4 33.2 47 29.9 46.2C27.8 45.7 25.7 46.5 24.3 48C22.9 51.2 24.7 54.9 28.1 55.6L28.7 55.7C30.9 56.3 33 55.4 34.3 53.6Z"
              fill="#08859E"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 4, ease: [1, 0, 0.8, 1] },
              }}
            />
          </g>
          <g id="x31 to2">
            <motion.path
              id="Vector_10"
              d="M87.9 59.9C87.9 60.1 88 60.4 88 60.6L89.6 67.5C90.3 70.5 93.3 72.3 96.2 71.6C96.4 71.5 96.6 71.5 96.8 71.4C96.9 71.4 97 71.3 97 71.3C97.3 71.2 97.5 71.1 97.8 70.9C97.8 70.9 97.8 70.9 97.9 70.9C98.1 70.8 98.3 70.6 98.5 70.5C98.6 70.5 98.6 70.4 98.7 70.4C98.9 70.3 99 70.1 99.2 70L99.3 69.9C99.5 69.7 99.6 69.5 99.8 69.3C99.8 69.2 99.9 69.2 99.9 69.1C100 68.9 100.1 68.7 100.2 68.5C100.2 68.4 100.3 68.4 100.3 68.3C100.4 68 100.5 67.8 100.6 67.5C100.6 67.5 100.6 67.5 100.6 67.4C100.7 67.1 100.7 66.8 100.8 66.5C100.8 66.4 100.8 66.3 100.8 66.2C100.8 65.9 100.9 65.7 100.9 65.4C100.9 65.3 100.9 65.3 100.9 65.2C100.9 64.8 100.9 64.5 100.9 64.1C100.9 64 100.9 63.9 100.9 63.8C100.9 63.5 100.9 63.2 100.8 62.8C100.8 62.7 100.8 62.6 100.8 62.4C100.7 62 100.7 61.5 100.6 61.1C100.5 60.7 100.4 60.3 100.4 59.9H87.9Z"
              fill="#0F76BA"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                default: { duration: 4, ease: "easeInOut" },
                fill: { duration: 4, ease: [1, 0, 0.8, 1] },
              }}
            />
          </g>
        </g>
      </motion.svg>
    </div>
  </>
);
