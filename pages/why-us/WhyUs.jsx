import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import styles from "./WhyUs.module.scss";

export default function WhyUs() {
  return (
    <div className={styles.whyus}>
      <div className="d-flex flex-wrap">
        <div className="col-12 col-sm-4 d-flex flex-row align-items-center justify-content-center justify-content-sm-start">
          <p className="title">Why Us</p>
        </div>

        <div className="col-12 col-sm-8 d-flex flex-column">
          <div className="d-flex flex-row my-1 my-sm-3 mt-3 mt-sm-4">
            <div>
              <Image
                src="/images/icon/jigsaw.png"
                alt="icon"
                width={80}
                height={80}
              />
            </div>

            <div className="col-10 ps-3 ps-sm-4">
              <p className={styles.whyus_title}>Bespoke Solutions</p>
              <p className={styles.whyus_content}>
                Support your header with a short one liner.
              </p>
            </div>
          </div>

          <div className="d-flex flex-row my-1 my-sm-3">
            <div>
              <Image
                src="/images/icon/customer-service.png"
                alt="icon"
                width={80}
                height={80}
              />
            </div>

            <div className="col-10 ps-3 ps-sm-4">
              <p className={styles.whyus_title}>Reliable Customer Support</p>
              <p className={styles.whyus_content}>
                Support your header with a short one liner.
              </p>
            </div>
          </div>

          <div className="d-flex flex-row my-1 my-sm-3 mb-3 mb-sm-4">
            <div>
              <Image
                src="/images/icon/cyber-security.png"
                alt="icon"
                width={80}
                height={80}
              />
            </div>

            <div className="col-10 ps-3 ps-sm-4">
              <p className={styles.whyus_title}>Secure Systems</p>
              <p className={styles.whyus_content}>
                Support your header with a short one liner.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-xxl-8 mx-auto d-flex flex-wrap justify-content-around mt-3">
        <div
          className={
            styles.box + " " + "col-5 col-sm-4 col-lg-3 px-0 px-sm-3 px-lg-0 d-flex flex-column mb-4"
          }
        >
          <div className={styles.box_top}>
            <CountUp end={20} duration={1.5} />
          </div>

          <div className={styles.box_bottom}>
            <p>Apps developed</p>
          </div>
        </div>

        <div
          className={
            styles.box + " " + "col-5 col-sm-4 col-lg-3 px-0 px-sm-3 px-lg-0 d-flex flex-column mb-4"
          }
        >
          <div className={styles.box_top}>
            <CountUp end={75} duration={1.5} />
          </div>

          <div className={styles.box_bottom}>
            <p>Clients served</p>
          </div>
        </div>

        <div
          className={
            styles.box + " " + "col-5 col-sm-4 col-lg-3 px-0 px-sm-3 px-lg-0 d-flex flex-column mb-4"
          }
        >
          <div className={styles.box_top}>
            <CountUp end={99} duration={1.5} />%
          </div>

          <div className={styles.box_bottom}>
            <p>Satisfaction rate from clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}
