import { Loader } from "@googlemaps/js-api-loader"
import { useRef, useEffect } from "react"
import styles from "@/styles/contact/MapGoogle.module.scss"

export default function MapGoogle() {
  const googleMap = useRef(null)

  useEffect(() => {
    const myLatLng = { lat: 50.713504, lng: 3.150999 }
    const options = {
      center: myLatLng,
      zoom: 6,
      mapTypeControl: false,
      navigationControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    }

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API ?? "",
      version: "weekly",
    })

    loader.load().then(() => {
      const map = new google.maps.Map(googleMap.current!, options)

      new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
      })
    })
  }, [])

  return <div className={styles.googleMapContainer} ref={googleMap}></div>
}
