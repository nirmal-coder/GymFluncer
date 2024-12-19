import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import "./index.css";

const NearestGym = () => {
  const [currentLocation, setLocation] = useState(1);

  const locationArray = [
    {
      id: 1,
      name: "Physc Gym Nerul 24/7",
      location: "Nerul, Navi Mumbai, Maharashtra, 400706",
      phone: "+91 1234567890",
      iframe: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7113193746673!2d73.01410797502636!3d19.03243828216313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3a2e37fbc13%3A0x75b2ab25eb8085f0!2sPhysc%20Gym%20Nerul%2024%2F7!5e0!3m2!1sen!2sin!4v1734583630841!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      ),
      image: "/loc-1.avif",
    },
    {
      id: 2,
      name: "Iron Fitness",
      location: "2801 14th St NW, Washington, DC 20009",
      phone: "+91-22-0001-0211",
      iframe: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.9055180593027!2d-77.03449622420827!3d38.92613697171791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7e021b74c0b%3A0xfa8e6f939d34b659!2s2801%2014th%20St%20NW%2C%20Washington%2C%20DC%2020009%2C%20USA!5e0!3m2!1sen!2sin!4v1734584093789!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      ),
      image: "/loc-2.avif",
    },
    {
      id: 3,
      name: "Yuva Fitness",
      location: "1921 Wichman Rd, Moore",
      phone: "+91 1234567890",
      iframe: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29896.69328938649!2d-109.70599709791531!3d47.01944978630379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53412cdcd6940cfb%3A0xbeaad825a2cbca25!2s1921%20Wichman%20Rd%2C%20Moore%2C%20MT%2059464%2C%20USA!5e0!3m2!1sen!2sin!4v1734584354494!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      image: "/loc-3.avif",
    },
    {
      id: 4,
      name: "Ozone The Gym",
      location: "2043 S 3rd Dr, Phoenix, AZ 85003",
      phone: "+91 1234567890",
      iframe: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8033395278835!2d-112.08060642446716!3d33.428371173398254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b11915d64cccf%3A0x2d22d6bbd8d3084b!2s2043%20S%203rd%20Dr%2C%20Phoenix%2C%20AZ%2085003%2C%20USA!5e0!3m2!1sen!2sin!4v1734584471430!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      image: "/loc-4.avif",
    },
    {
      id: 5,
      name: "The Square Gym",
      location: "HC 77 Box 1A, Budville, NM 87007",
      phone: "+91 1234567890",
      iframe: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.5008519570238!2d-107.5283827243935!3d35.06921657279104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8723ba2d44947841%3A0x452bf5ac7d0b7289!2sBudville%20Trading%20Post!5e0!3m2!1sen!2sin!4v1734584579512!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      image: "/loc-5.avif",
    },
    {
      id: 6,
      name: "Arnolds Total Fitness",
      location: "1050 W Hampden Ave Ste 100",
      phone: "+91 1234567890",
      iframe: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.979954484046!2d-105.00326152417169!3d39.650165671573255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c80712f1f14c9%3A0xcded1fae4a7cbf16!2s1050%20W%20Hampden%20Ave%20Ste%20100%2C%20Englewood%2C%20CO%2080110%2C%20USA!5e0!3m2!1sen!2sin!4v1734584629680!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      image: "/loc-6.avif",
    },
    {
      id: 7,
      name: "Edge Fitness Seawoods",
      location: "V368+53 Las Colinas, Irving",
      phone: "+91 1234567890",
      iframe: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.931168749547!2d73.01823197502594!3d19.02275448217086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3bc398714c9%3A0xb73bcd4923d2067d!2sEdge%20Fitness!5e0!3m2!1sen!2sin!4v1734584689576!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      image: "/loc-7.avif",
    },
  ];

  const currentLoc = locationArray.find((each) => each.id === currentLocation);
  return (
    <div className="NearestGym">
      <h2
        data-aos="fade-up-right"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        Find Your Nearest Gym
      </h2>
      <p
        className="des-loc"
        data-aos="fade-up-left"
        data-aos-offset="200"
        data-aos-delay="5"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        Easily discover gyms near your location to kickstart your fitness
        journey today!
      </p>

      <div className="locations">
        <div className="map">{currentLoc?.iframe}</div>
        <div className="location_name">
          {locationArray.map((each) => (
            <div
              className={`location__card ${
                currentLocation === each.id && "selected_loc"
              }`}
              key={each.id}
              onClick={() => setLocation(each.id)}
            >
              <img src={each.image} alt={each.name} />
              <div className="loc_des">
                <h3>{each.name}</h3>
                <p>
                  <FiPhoneCall /> {each.phone}
                </p>
                <p>
                  <IoLocationOutline /> {each.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearestGym;
